use std::cell::RefCell;
use std::collections::HashSet;
use std::hash::Hasher;
use std::rc::Rc;

use rustc_hash::FxHasher;

use crate::game_message::{Cannon, Constants};
use crate::game_random::GameRandom;
use crate::mcts::MCTS;
use crate::physics::{aim_ahead, MovingCircle};
use crate::search::SearchState;
use crate::simulate::{max_rocket_x, run_server_tick, EventInfo, GameState, Meteor};
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
        let search_state = SearcherState::new(
            state.clone(), constants, cannon, Rc::clone(&random));
        // let mut mcts = MCTS::new(search_state);
        // for _ in 0..1000 {  // TODO make configurable
        //     mcts.run_round();
        // }
        while !state.is_done() {
            for event in run_server_tick(
                &mut state, &mut random.borrow_mut(), constants) {
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
pub enum Action {
    Shoot { aim: Vec2, target_id: u32, is_future_target: bool, potential_score: u16 },
    Hold { potential_score: u16, },
}

#[derive(Clone)]
pub struct SearcherState<'a> {
    constants: &'a Constants,
    cannon: &'a Cannon,
    state: GameState,
    targeted: HashSet<u32>,
    // IDs of future targets, must be incremented whenever we shoot.
    future_ids: Vec<u32>,
    random: Rc<RefCell<GameRandom>>,
    random_state: usize,
    potential_score: u16,
}

impl<'a> SearcherState<'a> {
    pub fn new(state: GameState, constants: &'a Constants, cannon: &'a Cannon,
           random: Rc<RefCell<GameRandom>>) -> Self {
        let potential_score = state.potential_score(cannon, constants);
        let mut searcher_state = Self {
            state,
            constants,
            cannon,
            targeted: HashSet::new(),
            future_ids: Vec::new(),
            random: Rc::clone(&random),
            random_state: random.borrow().save_state(),
            potential_score,
        };
        // Before we make our first action, the server runs a tick.
        searcher_state.run_one_tick();
        searcher_state
    }

    fn run_one_tick(&mut self) {
        let before_state = self.random.borrow().save_state();
        self.random.borrow_mut().restore_state(self.random_state);
        for event in run_server_tick(
            &mut self.state, &mut self.random.borrow_mut(), self.constants) {
            if let EventInfo::Hit { meteor, .. } = event {
                self.targeted.remove(&meteor);
            }
        }
        self.random_state = self.random.borrow().save_state();
        self.random.borrow_mut().restore_state(before_state);
    }

    fn generate_shoot_actions(&self) -> Vec<Action> {
        let mut actions = Vec::new();
        let existing: Vec<MeteorVision> = self.state.meteors.iter().cloned()
            .map(|m| MeteorVision::past(m)).collect();
        let upcoming = upcoming_spawns(&self.state, &mut self.random.borrow_mut(),
                                       self.cannon, self.constants);
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
                if let Some(target) = shot.get_result(&mut self.random.borrow_mut()) {
                    actions.push(Action::Shoot {
                        aim, target_id: meteor_vision.meteor.id,
                        is_future_target: !meteor_vision.is_spawned(),
                        potential_score: target.potential_score
                    });
                }
            }
        }
        actions
    }

    fn generate_hold_action(&self) -> Action {
        let mut state = self.state.clone();
        let rng_state = self.random.borrow().save_state();
        while !state.is_done() {
            if state.rockets.is_empty() {
                break;
            }
            run_server_tick(&mut state, &mut self.random.borrow_mut(), self.constants);
        }
        self.random.borrow_mut().restore_state(rng_state);
        Action::Hold { potential_score: state.score }
    }

    fn apply_shot(&mut self, aim: &Vec2, target_id: u32, is_future_target: bool) {
        self.targeted.insert(target_id);
        // TODO: detect when a new target messes with earlier targets
        // (e.g. hits earlier than another rocket, which changes rng
        // order and makes the previous shot incorrectly predicted).
        // See if we ever pick this as the best target (i.e. need to fix?)
        if is_future_target {
            self.future_ids.push(target_id);
        }
        let shoot_info = self.state.shoot(self.cannon, self.constants,
            aim, target_id).unwrap();
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
            let shoot_actions = self.generate_shoot_actions();
            if !shoot_actions.is_empty() {
                actions.extend(shoot_actions);
            } else {
                actions.push(self.generate_hold_action());
            }
        } else {
            actions.push(self.generate_hold_action());
        }
        actions
    }

    fn apply_action(&mut self, action: &Self::Action) {
        match action {
            Action::Hold { potential_score } => {
                self.potential_score = *potential_score;
            },
            Action::Shoot { aim, target_id, is_future_target, potential_score } => {
                self.potential_score = *potential_score;
                self.apply_shot(aim, *target_id, *is_future_target);
            }
        }
        self.run_one_tick();
    }

    fn is_final(&self) -> bool {
        self.state.is_done()
    }

    fn theoretical_max(&self) -> u64 {
        self.potential_score.into()
    }

    fn evaluate(&self) -> u64 {
        self.state.score.into()
    }

    fn greedy_pick_action(&self, actions: &Vec<Action>) -> usize {
        actions.iter().enumerate()
            .max_by_key(|(_, a)| match a {
                Action::Shoot { potential_score, .. } => potential_score,
                Action::Hold { potential_score } => potential_score,
            })
            .map(|(idx, _)| idx).unwrap()
    }

    fn is_equivalent(&self, other: &Self) -> bool {
        // Note targets/future ids being different is fine, all we care about is
        // what's on the board (and the random state it assumed). Regardless of
        // what we're aiming at, if those are the same, then the game will
        // develop in the same way.
        self.potential_score == other.potential_score &&
            self.random_state == other.random_state &&
            self.state.is_equivalent(&other.state, 1e-7)
    }

    fn transposition_hash(&self) -> u64 {
        // Note that we only hash things that meaningfully distinguish states.
        // If two states have the same board state (ignoring ids), the same
        // score, and the same rng state, the same cooldown, we consider them
        // equivalent.
        let quantize = |f: f64| (f as f32).to_bits();
        let cmp_pos = |a: &Vec2, b: &Vec2| {
            if a.x == b.x { a.y.partial_cmp(&b.y).unwrap() }
            else { a.x.partial_cmp(&b.y).unwrap() }
        };
        let mut h = FxHasher::default();
        h.write_u8(self.state.cooldown);
        h.write_u16(self.state.score);
        h.write_usize(self.random_state);
        let mut meteor_indices: Vec<usize> = (0..self.state.meteors.len()).collect();
        meteor_indices.sort_by(|&i, &j| cmp_pos(
                &self.state.meteors[i].pos, &self.state.meteors[j].pos));
        for i in meteor_indices {
            let m = &self.state.meteors[i];
            h.write_u32(quantize(m.pos.x));
            h.write_u32(quantize(m.pos.y));
            h.write_u32(quantize(m.vel.x));
            h.write_u32(quantize(m.vel.y));
            h.write_u8(m.typ as u8);
        }
        let mut rocket_indices: Vec<usize> = (0..self.state.rockets.len()).collect();
        rocket_indices.sort_by(|&i, &j| cmp_pos(
                &self.state.rockets[i].pos, &self.state.rockets[j].pos));
        for i in rocket_indices {
            let r = &self.state.rockets[i];
            h.write_u32(quantize(r.pos.x));
            h.write_u32(quantize(r.pos.y));
            h.write_u32(quantize(r.vel.x));
            h.write_u32(quantize(r.vel.y));
        }
        h.finish()
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
    pub fn get_result(&mut self, rng: &mut GameRandom) -> Option<Target> {
        let rng_state = rng.save_state();
        let mut target = None;
        if let Some((rocket_id, meteor_id)) = self.shoot() {
            if self.look_for_hit(rocket_id, meteor_id, rng) {
                target = Some(Target {
                    aim: *self.aim,
                    // Note we use the original ID, not the post-simulation one.
                    meteor_id: self.target.meteor.id,
                    is_spawned: self.target.is_spawned(),
                    potential_score: self.state.score,
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

    /// Simulates and checks for a specific rocket-meteor hit.
    /// Returns false if the rocket would hit something else/miss.
    fn look_for_hit(&mut self, rocket_id: u32, meteor_id: u32,
                    rng: &mut GameRandom) -> bool {
        let mut hit = false;
        // Note that we don't early exit here, we sim the full requested amount
        // if possible -- callers want the full post-sim potential score
        while !self.state.is_done() {
            if self.state.rockets.is_empty() {
                // No more rockets moving, state is resolved.
                return hit;
            }
            for event in run_server_tick(&mut self.state, rng, self.constants) {
                match event {
                    EventInfo::Hit { meteor, rocket } => {
                        if rocket == rocket_id && meteor == meteor_id {
                            hit = true;
                        }
                    },
                    _ => {},
                }
            }
        }
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
            if let Some(target) = shot.get_result(random) {
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
        for event in run_server_tick(&mut state, random, constants) {
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
    let ticks = max_range / constants.rockets.speed;
    ticks.ceil() as u16
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
