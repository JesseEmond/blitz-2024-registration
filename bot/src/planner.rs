use std::collections::HashSet;

use crate::game_message::{Cannon, Constants};
use crate::game_random::GameRandom;
use crate::physics::{aim_ahead, collision_times, MovingCircle};
use crate::simulate::{EventInfo, GameState, Meteor};
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
}

pub struct Planner {
    targeted: HashSet<u32>,
}

impl Planner {
    pub fn new() -> Self {
        Planner { targeted: HashSet::new() }
    }

    pub fn plan(
        &mut self, cannon: &Cannon, constants: &Constants, first_id: u32,
        random: &mut GameRandom) -> Vec<Event> {
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
                let tick = state.tick;
                events.push(Event {
                    tick,
                    info: state.shoot(cannon, constants,
                                      &target.aim, target.meteor_id).unwrap(),
                });
            }
        }
        events
    }
}

/// Update event info position information to be after the tick update, to
/// match the positions that the client will receive (easier to verify that
/// the values are equal and that the simulation worked).
fn post_update_event_info(info: EventInfo) -> EventInfo {
    match info {
        EventInfo::MeteorSpawn { id, pos, vel } => EventInfo::MeteorSpawn {
            id,
            pos: pos.add(&vel),
            vel,
        },
        EventInfo::MeteorSplit { id, parent_id, pos, vel } => EventInfo::MeteorSplit {
            id,
            parent_id,
            pos: pos.add(&vel),
            vel,
        },
        _ => info,
    }
}

/// Verify that a given hit will indeed hit the target.
fn verify_hit(mut state: GameState, rng: &mut GameRandom, cannon: &Cannon,
              aim: &Vec2, target: &Meteor, constants: &Constants) -> bool {
    let Some(shoot_event) = state.shoot(cannon, constants, aim, target.id) else {
        return false;
    };
    let rocket_id = match shoot_event {
        EventInfo::Shoot { id, .. } => id,
        _ => panic!("Shoot returned a non-shoot event"),
    };
    let cannon_pos: Vec2 = cannon.position.into();
    let rocket_dir = (aim.minus(&cannon_pos)).normalized();
    let rocket_circle = MovingCircle {
        pos: cannon_pos,
        vel: rocket_dir.scale(constants.rockets.speed),
        size: constants.rockets.size,
    };
    let meteor_circle = MovingCircle {
        pos: target.pos,
        vel: target.vel,
        size: constants.meteor_infos[&target.typ].size,
    };
    let Some((t1, t2)) = collision_times(&rocket_circle, &meteor_circle) else {
        return false;
    };
    let max_t = t1.max(t2);
    assert!(max_t >= 0.0);
    for _ in 0..(max_t.ceil() as usize) {
        if state.is_done() {
            return false;
        }
        for event in state.run_tick(rng, constants) {
            match event {
                EventInfo::Hit { meteor, rocket } => {
                    if rocket == rocket_id && meteor == target.id {
                        return true;
                    } else if rocket == rocket_id && meteor != target.id {
                        // Our rocket hit something else
                        return false;
                    }
                    assert!(meteor != target.id,
                            "Our target meteor got hit. Why did we aim for it?");
                },
                EventInfo::MeteorMiss { id } => {
                    if id == target.id {
                        return false;
                    }
                },
                _ => {},
            }
        }
    }
    panic!("Expected rocket {} to hit {}, but no hit found. Bad aim?",
           rocket_id, target.id);
}

fn pick_target(state: &GameState, random: &mut GameRandom,
               avoid: &HashSet<u32>, constants: &Constants,
               cannon: &Cannon) -> Option<Target> {
    let rng_state = random.save_state();
    // TODO: consider future meteors, too
    for meteor in state.meteors.iter() {
        if avoid.contains(&meteor.id) {
            continue;  // Already targetting it!
        }
        let target = MovingCircle {
            pos: meteor.pos,
            vel: meteor.vel,
            size: constants.meteor_infos.get(&meteor.typ).unwrap().size,
        };
        let cannon_pos: Vec2 = cannon.position.into();
        if let Some(aim) = aim_ahead(
            &cannon_pos,
            constants.rockets.speed,
            &target) {
            if verify_hit(state.snapshot(), random, cannon, &aim, meteor, constants) {
                random.restore_state(rng_state);
                return Some(Target { aim, meteor_id: meteor.id });
            }
        }
        random.restore_state(rng_state);
    }
    None
}
