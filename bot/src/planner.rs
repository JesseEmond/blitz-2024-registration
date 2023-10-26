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
    MeteorSpawn { id: u16, pos: Vec2, vel: Vec2 },
}

pub struct Planner {
}

impl Planner {
    pub fn plan(
        &self, constants: &Constants, first_id: u16,
        random: &mut GameRandom) -> Vec<Event> {
        let mut sim = Simulator::new(first_id);
        let mut events = Vec::new();
        while !sim.is_done() {
            events.extend(sim.run_tick(random, constants));
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
    next_id: u16,
    meteors: HashMap<u16, Meteor>,
}

struct Simulator {
    state: State,
}

impl Simulator {
    fn new(first_id: u16) -> Self {
        Self {
            state: State { tick: 0, next_id: first_id, meteors: HashMap::new() }
        }
    }

    fn run_tick(
        &mut self, rng: &mut GameRandom, constants: &Constants) -> Vec<Event> {
        let mut events = Vec::new();
        if is_spawn_tick(self.state.tick) {
            events.push(self.spawn_meteor(rng, constants));
        }
        self.state.tick += 1;
        events
    }

    fn spawn_meteor(
        &mut self, rng: &mut GameRandom, constants: &Constants) -> Event {
        let spawn = rng.next_spawn(constants);
        let id = self.state.next_id;
        self.state.meteors.insert(id, Meteor {
            pos: spawn.pos,
            vel: spawn.vel,
            typ: MeteorType::Large
        });
        self.state.next_id += 1;
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
