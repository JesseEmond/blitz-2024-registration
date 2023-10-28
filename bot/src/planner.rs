use std::cell::RefCell;
use std::collections::HashSet;
use std::rc::Rc;

use crate::game_message::{Cannon, Constants};
use crate::game_random::GameRandom;
use crate::physics::{aim_ahead, MovingCircle};
use crate::search::{BeamSearch, SearchState};
use crate::simulate::{max_rocket_x, EventInfo, GameState, Meteor};
use crate::vec2::Vec2;

/// Events at the time where the client would see them (i.e. the tick after
/// they happened). Note that we move forward the meteors in EventInfos by one
/// tick to match what the client would see in the GameMessage JSON (post tick
/// update).
#[derive(Clone, Copy)]
pub struct Event {
    pub tick: u16,
    pub info: EventInfo
}

struct Target {
    aim: Vec2,
    meteor_id: u32,
    is_spawned: bool,
    potential_score: u16,
}

#[derive(Clone)]
struct MeteorVision {
    meteor: Meteor,
    // If set, the tick where this meteor will appear. If not set, the meteor is
    // already there.
    tick: Option<u16>,
}

impl MeteorVision {
    fn is_spawned(&self) -> bool {
        self.tick.is_none()
    }

    fn past(meteor: Meteor) -> Self {
        Self { meteor, tick: None }
    }

    fn future(meteor: Meteor, spawn_tick: u16) -> Self {
        Self { meteor, tick: Some(spawn_tick) }
    }
}

pub struct Plan {
    pub events: Vec<Event>,
    pub score: u16,
}

pub struct Planner {
    targeted: HashSet<u32>,
    // IDs of future targets, must be incremented whenever we shoot.
    future_ids: Vec<u32>,
}

impl Planner {
    pub fn new() -> Self {
        Planner { targeted: HashSet::new(), future_ids: Vec::new(), }
    }

    pub fn plan(
        &mut self, cannon: &Cannon, constants: &Constants, first_id: u32,
        random: Rc<RefCell<GameRandom>>) -> Plan {
        let mut state = GameState::new(first_id);
        let mut events = Vec::new();
        let beam = BeamSearch{};
        let search_state = SearcherState::new(
            state.clone(), constants, cannon, Rc::clone(&random));
        beam.search(search_state);
        while !state.is_done() {
            for event in state.run_tick(&mut random.borrow_mut(), constants) {
                if let EventInfo::Hit { meteor, .. } = event {
                    self.targeted.remove(&meteor);
                }
                events.push(Event {
                    tick: state.tick,
                    info: post_update_event_info(event)
                });
            }
            
            if !state.cannon_ready() {
                continue;  // Can't shoot, nothing to do.
            }

            if let Some(target) = pick_target(&state, &mut random.borrow_mut(),
                                              &self.targeted, constants, cannon) {
                self.targeted.insert(target.meteor_id);
                // TODO: detect when a new target messes with earlier targets
                // (e.g. hits earlier than another rocket, which changes rng
                // order and makes the previous shot incorrectly predicted).
                // See if we ever pick this as the best target (i.e. need to fix?)
                if !target.is_spawned {
                    self.future_ids.push(target.meteor_id);
                }
                let shoot_info = state.shoot(cannon, constants,
                    &target.aim, target.meteor_id).unwrap();
                events.push(Event { info: shoot_info, tick: state.tick });
                let rocket_id = match shoot_info {
                    EventInfo::Shoot { id, .. } => id,
                    _ => panic!("Shoot returned non-shoot event: {:?}", shoot_info),
                };
                self.update_future_ids(rocket_id, &mut events);
            }
        }
        Plan { events, score: state.score }
    }

    /// When shooting future spawns, we're predicting IDs. After shooting,
    /// future IDs need to be incremented and updated in internal structures:
    /// - in 'targeted' ids
    /// - in previous recorded 'Shoot' events
    fn update_future_ids(&mut self, shot_id: u32, events: &mut Vec<Event>) {
        // IDs that are no longer in the 'future' can be forgotten about.
        self.future_ids.retain(|&id| id >= shot_id);
        // Previous 'Shoot' events that referred to a future ID must be updated.
        for event in events.iter_mut() {
            if let EventInfo::Shoot { ref mut target_id, .. } = event.info {
                if self.future_ids.contains(&target_id) {
                    *target_id += 1;
                }
            }
        }
        // 'targeted' IDs and 'future_ids' must be incremented.
        for id in self.future_ids.iter() { self.targeted.remove(id); }
        for id in self.future_ids.iter_mut() {
            *id += 1;
            self.targeted.insert(*id);
        }
    }
}

#[derive(Clone)]
enum Action {
    Shoot { aim: Vec2, target: MeteorVision, },
    Hold,
}

#[derive(Clone)]
struct SearcherState<'a> {
    constants: &'a Constants,
    cannon: &'a Cannon,
    state: GameState,
    targeted: HashSet<u32>,
    // IDs of future targets, must be incremented whenever we shoot.
    future_ids: Vec<u32>,
    random: Rc<RefCell<GameRandom>>,
    random_state: usize,
}

impl<'a> SearcherState<'a> {
    fn new(state: GameState, constants: &'a Constants, cannon: &'a Cannon,
           random: Rc<RefCell<GameRandom>>) -> Self {
        let mut searcher_state = Self {
            state,
            constants,
            cannon,
            targeted: HashSet::new(),
            future_ids: Vec::new(),
            random: Rc::clone(&random),
            random_state: random.borrow().save_state(),
        };
        // Before we make our first action, the server runs a tick.
        searcher_state.run_one_tick();
        searcher_state
    }

    fn run_one_tick(&mut self) {
        self.random.borrow_mut().restore_state(self.random_state);
        for event in self.state.run_tick(&mut self.random.borrow_mut(), self.constants) {
            if let EventInfo::Hit { meteor, .. } = event {
                self.targeted.remove(&meteor);
            }
        }
        self.random_state = self.random.borrow().save_state();
    }

    fn generate_shoot_actions(&self) -> Vec<Action> {
        let mut actions = Vec::new();
        let existing: Vec<MeteorVision> = self.state.meteors.iter().cloned()
            .map(|m| MeteorVision::past(m)).collect();
        let upcoming = upcoming_spawns(&self.state, &mut self.random.borrow_mut(),
                                       self.cannon, self.constants);
        let sim_ticks = max_rocket_lifespan(self.constants, self.cannon);
        for meteor_vision in existing.iter().chain(upcoming.iter()) {
            if self.targeted.contains(&meteor_vision.meteor.id) {
                continue;  // Already targetting it!
            }
            let target = MovingCircle {
                pos: rewind_pos_for_physics(meteor_vision, self.state.tick),
                vel: meteor_vision.meteor.vel,
                size: self.constants.get_meteor_info(meteor_vision.meteor.typ).size,
            };
            let cannon_pos: Vec2 = self.cannon.position.into();
            if let Some(aim) = aim_ahead(&cannon_pos, self.constants.rockets.speed, &target) {
                let mut shot = TentativeShot {
                    aim: &aim,
                    cannon: self.cannon,
                    constants: self.constants,
                    state: self.state.clone(),
                    target: &meteor_vision,
                };
                if let Some(target) = shot.get_result(sim_ticks, &mut self.random.borrow_mut()) {
                    actions.push(Action::Shoot { aim, target: meteor_vision.clone() });
                }
            }
        }
        actions
    }

    fn apply_shot(&mut self, aim: &Vec2, target: &MeteorVision) {
        self.targeted.insert(target.meteor.id);
        // TODO: detect when a new target messes with earlier targets
        // (e.g. hits earlier than another rocket, which changes rng
        // order and makes the previous shot incorrectly predicted).
        // See if we ever pick this as the best target (i.e. need to fix?)
        if !target.is_spawned() {
            self.future_ids.push(target.meteor.id);
        }
        let shoot_info = self.state.shoot(self.cannon, self.constants,
            aim, target.meteor.id).unwrap();
        let rocket_id = match shoot_info {
            EventInfo::Shoot { id, .. } => id,
            _ => panic!("Shoot returned non-shoot event: {:?}", shoot_info),
        };
        self.update_future_ids(rocket_id);
    }

    /// When shooting future spawns, we're predicting IDs. After shooting,
    /// future IDs need to be incremented and updated in 'targeted'
    fn update_future_ids(&mut self, shot_id: u32) {
        // IDs that are no longer in the 'future' can be forgotten about.
        self.future_ids.retain(|&id| id >= shot_id);
        // 'targeted' IDs and 'future_ids' must be incremented.
        let old_ids = HashSet::from_iter(self.future_ids.iter().cloned());
        for id in self.future_ids.iter_mut() {
            *id += 1;
        }
        self.targeted = &self.targeted - &old_ids;
        self.targeted.extend(&self.future_ids);
        // TODO: Need to update previous 'Shoot' actions! They might now be
        // wrong.
    }
}

impl SearchState for SearcherState<'_> {
    type Action = Action;

    fn generate_actions(&self) -> Vec<Self::Action> {
        let mut actions = Vec::new();
        if self.state.cannon_ready() {
            // TODO: consider holding when we can shoot?
            actions.extend(self.generate_shoot_actions());
        } else {
            actions.push(Action::Hold);
        }
        actions
    }

    fn apply_action(&mut self, action: &Self::Action) {
        match action {
            Action::Hold => {},
            Action::Shoot { aim, target } => { self.apply_shot(aim, target); }
        }
        self.run_one_tick();
    }

    fn is_final(&self) -> bool {
        self.state.is_done()
    }

    fn heuristic(&self) -> u64 {
        self.state.potential_score(self.constants).into()
    }

    fn evaluate(&self) -> u64 {
        self.state.score.into()
    }
}

/// Helper structure to explore what will happen if we try & shoot a target.
struct TentativeShot<'a> {
    state: GameState,
    aim: &'a Vec2,
    target: &'a MeteorVision,
    cannon: &'a Cannon,
    constants: &'a Constants,
}

impl TentativeShot <'_> {
    pub fn get_result(&mut self, min_sim_ticks: u16, rng: &mut GameRandom) -> Option<Target> {
        let rng_state = rng.save_state();
        let mut target = None;
        if let Some((rocket_id, meteor_id)) = self.shoot() {
            if self.look_for_hit(min_sim_ticks, rocket_id, meteor_id, rng) {
                target = Some(Target {
                    aim: *self.aim,
                    // Note we use the original ID, not the post-simulation one.
                    meteor_id: self.target.meteor.id,
                    is_spawned: self.target.is_spawned(),
                    potential_score: self.state.potential_score(self.constants),
                });
            }
        }
        rng.restore_state(rng_state);
        target
    }

    /// Returns the (rocket_id, meteor_id) post-shot.
    fn shoot(&mut self) -> Option<(u32, u32)> {
        let shoot_event = self.state.shoot(
            self.cannon, self.constants, self.aim, self.target.meteor.id)?;
        let rocket_id = match shoot_event {
            EventInfo::Shoot { id, .. } => id,
            _ => panic!("Shoot returned a non-shoot event"),
        };
        let target_id = if self.target.is_spawned() {
            self.target.meteor.id
        } else {
            // The rocket we shot consumed an ID, the ID we're looking for will
            // be generated +1.
            self.target.meteor.id + 1
        };
        Some((rocket_id, target_id))
    }

    /// Simulates for 'sim_ticks' and checks for a specific rocket-meteor hit.
    /// Returns false if the rocket would hit something else.
    /// Panics if the meteor gets hit by something else (why did we aim at it?)
    /// or if the rocket hits nothing (why can't we aim?)
    fn look_for_hit(&mut self, sim_ticks: u16, rocket_id: u32, meteor_id: u32,
                    rng: &mut GameRandom) -> bool {
        let mut wrong_hit = false;
        let mut hit = false;
        // Note that we don't early exit here, we sim the full requested amount
        // if possible -- callers want the full post-sim potential score
        for _ in 0..sim_ticks {
            if self.state.is_done() {
                // Game ended, ok if we didn't hit, but can leave early.
                return hit;
            }
            for event in self.state.run_tick(rng, self.constants) {
                match event {
                    EventInfo::Hit { meteor, rocket } => {
                        if rocket == rocket_id && meteor == meteor_id {
                            hit = true;
                        } else if rocket == rocket_id && meteor != meteor_id {
                            wrong_hit = true;  // hit something else
                        } else if meteor == meteor_id {
                            // Note: while it is odd that another rocket would
                            // hit our targeted meteor, this can happen e.g. if
                            // a more recent rocket hit earlier than prev
                            // rockets, messing with the rng state and making
                            // past predictions invalid.
                            // assert!(meteor != meteor_id,
                            //         "Our target meteor M{} got hit by R{}. Why did we aim for it?",
                            //         meteor_id, rocket);
                            wrong_hit = true;
                        }
                    },
                    EventInfo::MeteorMiss { id } => {
                        if id == meteor_id {
                            // TODO: get collision time to make sure it was
                            // still <= collision time (to catch aiming bugs)
                            wrong_hit = true;  // meteor is gone before we hit
                        }
                    },
                    _ => {},
                }
            }
        }
        assert!(
            hit || wrong_hit,
            "Expected rocket R{} to hit M{}, but no hit found. Bad aim? State:\n{}",
            rocket_id, meteor_id, self.state.print());
        hit
    }
}

/// Update event info position information to be after the tick update, to
/// match the positions that the client will receive (easier to verify that
/// the values are equal and that the simulation worked).
fn post_update_event_info(info: EventInfo) -> EventInfo {
    match info {
        EventInfo::MeteorSpawn { id, pos, vel, typ } => EventInfo::MeteorSpawn {
            id,
            pos: pos.add(&vel),
            vel,
            typ,
        },
        EventInfo::MeteorSplit { id, parent_id, pos, vel, typ } => EventInfo::MeteorSplit {
            id,
            parent_id,
            pos: pos.add(&vel),
            vel,
            typ,
        },
        _ => info,
    }
}

fn pick_target(state: &GameState, random: &mut GameRandom,
               avoid: &HashSet<u32>, constants: &Constants,
               cannon: &Cannon) -> Option<Target> {
    let existing: Vec<MeteorVision> = state.meteors.iter().cloned()
        .map(|m| MeteorVision::past(m)).collect();
    let upcoming = upcoming_spawns(state, random, cannon,
                                   constants);
    let sim_ticks = max_rocket_lifespan(constants, cannon);
    let mut best_target: Option<Target> = None;
    for meteor_vision in existing.iter().chain(upcoming.iter()) {
        if avoid.contains(&meteor_vision.meteor.id) {
            continue;  // Already targetting it!
        }
        let target = MovingCircle {
            pos: rewind_pos_for_physics(meteor_vision, state.tick),
            vel: meteor_vision.meteor.vel,
            size: constants.get_meteor_info(meteor_vision.meteor.typ).size,
        };
        let cannon_pos: Vec2 = cannon.position.into();
        if let Some(aim) = aim_ahead(&cannon_pos, constants.rockets.speed, &target) {
            let mut shot = TentativeShot {
                aim: &aim,
                cannon: &cannon,
                constants: &constants,
                state: state.clone(),
                target: &meteor_vision,
            };
            if let Some(target) = shot.get_result(sim_ticks, random) {
                if best_target.as_ref().map(|t| target.potential_score > t.potential_score)
                    .unwrap_or(true) {
                    best_target = Some(target);
                }
            }
        }
    }
    best_target
}

/// Finds meteors that will spawn (spawns or splits) in the near future (in the
/// max time that a rocket can travel).
/// Note that future Meteor IDs returned need to be incremented anytime we shoot.
fn upcoming_spawns(
    state: &GameState, random: &mut GameRandom, cannon: &Cannon,
    constants: &Constants) -> Vec<MeteorVision> {
    let rng_state = random.save_state();
    let mut state = state.clone();
    let mut spawns = Vec::new();
    for _ in 0..max_rocket_lifespan(constants, cannon) {
        if state.is_done() {
            break;
        }
        let event_tick = state.tick;
        for event in state.run_tick(random, constants) {
            match event {
                EventInfo::MeteorSpawn { id, pos, vel, typ } => {
                    spawns.push(MeteorVision::future(
                        Meteor::new(id, pos, vel, typ), event_tick));
                },
                EventInfo::MeteorSplit { id, pos, vel, typ, .. } => {
                    spawns.push(MeteorVision::future(
                        Meteor::new(id, pos, vel, typ), event_tick));
                }
                _ => {},
            }
        }
    }
    random.restore_state(rng_state);
    spawns
}

/// Maximum number of ticks that a rocket can take to hit a target.
/// Take the distance from the top right corner to the cannon.
fn max_rocket_lifespan(constants: &Constants, cannon: &Cannon) -> u16 {
    let top_right = Vec2::new(max_rocket_x(constants), 0.0);
    let max_range = top_right.distance(&cannon.position.into());
    max_range.ceil() as u16
}

/// For unspawned meteors, move them back by 'delta_t' so that by the time that
/// their spawn tick happens they will be on their 'pos'.
fn rewind_pos_for_physics(vision: &MeteorVision, current_tick: u16) -> Vec2 {
    let delta_t = spawn_delta_t(vision, current_tick);
    if delta_t > 0 {
        // Rewind the meteor by '-delta_t', so that at t=spawn_tick the
        // meteor will be on meteor_vision.
        vision.meteor.pos.minus(&vision.meteor.vel.scale(delta_t as f64))
    } else {
        vision.meteor.pos
    }
}

fn spawn_delta_t(vision: &MeteorVision, current_tick: u16) -> u16 {
    if let Some(spawn_tick) = vision.tick {
        assert!(spawn_tick >= current_tick, "Spawn: {}, Current tick: {}",
                spawn_tick, current_tick);
        spawn_tick - current_tick
    } else {
        0
    }
}
