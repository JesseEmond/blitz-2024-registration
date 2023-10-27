use std::collections::HashSet;

use crate::game_message::{Cannon, Constants};
use crate::game_random::GameRandom;
use crate::physics::{aim_ahead, collision_times, MovingCircle};
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
}

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
        random: &mut GameRandom) -> Plan {
        let mut state = GameState::new(first_id);
        let mut events = Vec::new();
        while !state.is_done() {
            events.extend(
                state.run_tick(random, constants).into_iter()
                    .map(|e| Event {
                        tick: state.tick,
                        info: post_update_event_info(e)
                    }));
            
            if !state.cannon_ready() {
                continue;  // Can't shoot, nothing to do.
            }

            if let Some(target) = pick_target(&state, random, &self.targeted,
                                              constants, cannon) {
                self.targeted.insert(target.meteor_id);
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

/// Verify that a given hit will indeed hit the target.
fn verify_hit(state: &GameState, rng: &mut GameRandom, cannon: &Cannon,
              aim: &Vec2, target: &MeteorVision, constants: &Constants) -> bool {
    let rng_state = rng.save_state();
    let mut state = state.clone();
    let Some(shoot_event) = state.shoot(cannon, constants, aim, target.meteor.id) else {
        rng.restore_state(rng_state);
        return false;
    };
    let rocket_id = match shoot_event {
        EventInfo::Shoot { id, .. } => id,
        _ => panic!("Shoot returned a non-shoot event"),
    };
    let target_id = if target.is_spawned() {
        target.meteor.id
    } else {
        // The rocket we shot consumed an ID, the ID we're looking for will be
        // generated +1.
        target.meteor.id + 1
    };
    let cannon_pos: Vec2 = cannon.position.into();
    let rocket_dir = (aim.minus(&cannon_pos)).normalized();
    let rocket_vel = rocket_dir.scale(constants.rockets.speed);
    let rocket_circle = MovingCircle {
        pos: cannon_pos,
        vel: rocket_vel,
        size: constants.rockets.size,
    };
    let meteor_circle = MovingCircle {
        pos: rewind_pos_for_physics(target, state.tick),
        vel: target.meteor.vel,
        size: constants.meteor_infos[&target.meteor.typ].size,
    };
    let Some((t1, t2)) = collision_times(&rocket_circle, &meteor_circle) else {
        rng.restore_state(rng_state);
        return false;
    };
    let max_t = t1.max(t2);
    assert!(max_t >= 0.0);
    for _ in 0..(max_t.ceil() as u16) {
        if state.is_done() {
            rng.restore_state(rng_state);
            return false;
        }
        for event in state.run_tick(rng, constants) {
            match event {
                EventInfo::Hit { meteor, rocket } => {
                    if rocket == rocket_id && meteor == target_id {
                        rng.restore_state(rng_state);
                        return true;
                    } else if rocket == rocket_id && meteor != target_id {
                        // Our rocket hit something else
                        rng.restore_state(rng_state);
                        return false;
                    }
                    assert!(meteor != target_id,
                            "Our target meteor got hit. Why did we aim for it?");
                },
                EventInfo::MeteorMiss { id } => {
                    if id == target_id {
                        rng.restore_state(rng_state);
                        return false;
                    }
                },
                _ => {},
            }
        }
    }
    panic!("Expected rocket {} to hit {}, but no hit found. Bad aim? State:\n{}",
           rocket_id, target_id, state.print());
}

fn pick_target(state: &GameState, random: &mut GameRandom,
               avoid: &HashSet<u32>, constants: &Constants,
               cannon: &Cannon) -> Option<Target> {
    let existing: Vec<MeteorVision> = state.meteors.iter().cloned()
        .map(|m| MeteorVision::past(m)).collect();
    let upcoming = upcoming_spawns(state, random, cannon, constants);
    for meteor_vision in existing.iter().chain(upcoming.iter()) {
        if avoid.contains(&meteor_vision.meteor.id) {
            continue;  // Already targetting it!
        }
        let target = MovingCircle {
            pos: rewind_pos_for_physics(meteor_vision, state.tick),
            vel: meteor_vision.meteor.vel,
            size: constants.meteor_infos.get(&meteor_vision.meteor.typ).unwrap().size,
        };
        let cannon_pos: Vec2 = cannon.position.into();
        if let Some(aim) = aim_ahead(&cannon_pos, constants.rockets.speed, &target) {
            if verify_hit(state, random, cannon, &aim, &meteor_vision, constants) {
                return Some(Target {
                    aim,
                    meteor_id: meteor_vision.meteor.id,
                    is_spawned: meteor_vision.is_spawned()
                });
            }
        }
    }
    None
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
fn max_rocket_lifespan(constants: &Constants, cannon: &Cannon) -> u32 {
    let top_right = Vec2::new(max_rocket_x(constants), 0.0);
    let max_range = top_right.distance(&cannon.position.into());
    max_range.ceil() as u32
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
