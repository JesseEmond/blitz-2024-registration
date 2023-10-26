use std::collections::HashMap;

use crate::game_message::{Constants, MeteorType, MAX_TICKS};
use crate::game_random::GameRandom;
use crate::spawn_schedule::is_spawn_tick;
use crate::vec2::Vec2;

#[derive(Clone, Copy)]
pub struct Event {
    pub tick: u16,
    pub info: EventInfo
}

#[derive(Clone, Copy)]
pub enum EventInfo {
    MeteorSpawn { id: u32, pos: Vec2, vel: Vec2 },
    MeteorMiss { id: u32 },
    Shoot { id: u32, pos: Vec2 },
}

pub struct Planner {
}

impl Planner {
    pub fn plan(
        &self, constants: &Constants, first_id: u32,
        random: &mut GameRandom) -> Vec<Event> {
        let mut sim = Simulator::new(first_id);
        let mut events = Vec::new();
        let mut did_shoot = false;
        while !sim.is_done() {
            events.extend(sim.run_tick(random, constants));
            if !did_shoot {
                // TODO: shoot on more than just the first tick
                events.push(Event {
                    tick: 1,
                    info: EventInfo::Shoot {
                        id: sim.get_next_id(),
                        pos: Vec2::new(200.0, 200.0),
                    }
                });
                did_shoot = true;
            }
        }
        events
    }
}

struct Meteor {
    pos: Vec2,
    vel: Vec2,
    typ: MeteorType,
}

struct State {
    tick: u16,
    next_id: u32,
    meteors: HashMap<u32, Meteor>,
}

impl State {
    fn get_next_id(&mut self) -> u32 {
        let id = self.next_id;
        self.next_id += 1;
        id
    }
}

struct Simulator {
    state: State,
}

impl Simulator {
    fn new(first_id: u32) -> Self {
        Self {
            state: State { tick: 0, next_id: first_id, meteors: HashMap::new() }
        }
    }

    fn run_tick(
        &mut self, rng: &mut GameRandom, constants: &Constants) -> Vec<Event> {
        let mut events = Vec::new();
        let next_tick = self.state.tick + 1;
        if is_spawn_tick(self.state.tick) {
            events.push(self.spawn_meteor(rng, constants));
        }
        // TODO: check for collisions & handle them
        self.state.meteors.retain(|id, meteor| {
            meteor.pos = meteor.pos.add(&meteor.vel);
            let keep = meteor_in_bounds_x(&meteor.pos)
                && in_bounds_y(constants, &meteor.pos);
            if !keep {
                events.push(Event {
                    // Note: miss will be noticed on the incremented tick
                    tick: next_tick,
                    info: EventInfo::MeteorMiss { id: *id },
                });
            }
            keep
        });
        // TODO: update rockets
        // TODO: rockets in bounds x/y
        self.state.tick += 1;
        events
    }

    fn get_next_id(&mut self) -> u32 {
        self.state.get_next_id()
    }

    fn spawn_meteor(
        &mut self, rng: &mut GameRandom, constants: &Constants) -> Event {
        let spawn = rng.next_spawn(constants);
        let id = self.get_next_id();
        self.state.meteors.insert(id, Meteor {
            pos: spawn.pos,
            vel: spawn.vel,
            typ: MeteorType::Large
        });
        Event {
            // Note: serialize happens after tick increment, client sees tick+1
            tick: self.state.tick + 1,
            info: EventInfo::MeteorSpawn {
                id,
                // Note: serialize happens after update, client sees updated pos
                pos: spawn.pos.add(&spawn.vel),
                vel: spawn.vel,
            },
        }
    }

    fn is_done(&self) -> bool {
        self.state.tick == MAX_TICKS
    }
}

fn meteor_in_bounds_x(pos: &Vec2) -> bool {
    // Note: server does not check the right side, confirmed via reversing the
    // local challenge binary.
    pos.x >= 0.0
}

fn in_bounds_y(constants: &Constants, pos: &Vec2) -> bool {
    pos.y >= 0.0 && pos.y < constants.world.height as f64
}
