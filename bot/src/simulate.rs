// Reproduces the server-side logic (based on the reverse-engineered local bin).
use std::collections::HashMap;

use crate::game_message::{Cannon, Constants, MeteorType, MAX_TICKS};
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
    Shoot { id: u32, pos: Vec2, target_id: u32 },
}

pub struct GameState {
    tick: u16,
    next_id: u32,
    pub meteors: HashMap<u32, Meteor>,
    rockets: HashMap<u32, Rocket>,
    cooldown: u8,
}

pub struct Meteor {
    pub pos: Vec2,
    pub vel: Vec2,
    pub typ: MeteorType,
}

struct Rocket {
    pos: Vec2,
    vel: Vec2,
}

impl GameState {
    pub fn new(first_id: u32) -> Self {
        Self {
            tick: 0,
            next_id: first_id,
            meteors: HashMap::new(),
            rockets: HashMap::new(),
            cooldown: 0,
        }
    }

    pub fn run_tick(&mut self, rng: &mut GameRandom, constants: &Constants) -> Vec<Event> {
        let mut events = Vec::new();
        let next_tick = self.tick + 1;
        if is_spawn_tick(self.tick) {
            events.push(self.spawn_meteor(rng, constants));
        }
        // TODO: check for collisions & handle them
        self.meteors.retain(|id, meteor| {
            meteor.pos = meteor.pos.add(&meteor.vel);
            let keep = meteor_in_bounds_x(&meteor.pos)
                && meteor_in_bounds_y(constants, &meteor.pos);
            if !keep {
                events.push(Event {
                    // Note: miss will be noticed on the incremented tick
                    tick: next_tick,
                    info: EventInfo::MeteorMiss { id: *id },
                });
            }
            keep
        });
        self.rockets.retain(|id, rocket| {
            rocket.pos = rocket.pos.add(&rocket.vel);
            // Note: server does not check for y bounds for rockets! Confirmed
            // by testing a shot straight up -- rockets never disappear.
            // Note: not reporting wiff events when this is false, as these
            // should not happen with a bot with good search.
            rocket_in_bounds_x(constants, &rocket.pos)
        });
        self.tick += 1;
        if self.cooldown > 0 {
            self.cooldown -= 1;
        }
        events
    }

    pub fn shoot(&mut self, cannon: &Cannon, constants: &Constants,
                 target: &Vec2, target_id: u32) -> Event {
        assert!(self.can_shoot());
        let id = self.get_next_id();
        let pos = Vec2::new(cannon.position.x, cannon.position.y);
        let vel = target.minus(&pos).normalized().scale(constants.rockets.speed);
        self.rockets.insert(id, Rocket { pos, vel });
        self.cooldown = constants.cannon_cooldown_ticks;
        Event {
            // Note: want to shoot on the tick we had information on
            tick: self.tick,
            info: EventInfo::Shoot { id, pos: *target, target_id },
        }
    }

    fn spawn_meteor(&mut self, rng: &mut GameRandom, constants: &Constants) -> Event {
        let spawn = rng.next_spawn(constants);
        let id = self.get_next_id();
        self.meteors.insert(id, Meteor {
            pos: spawn.pos,
            vel: spawn.vel,
            typ: MeteorType::Large
        });
        Event {
            // Note: serialize happens after tick increment, client sees tick+1
            tick: self.tick + 1,
            info: EventInfo::MeteorSpawn {
                id,
                // Note: serialize happens after update, client sees updated pos
                pos: spawn.pos.add(&spawn.vel),
                vel: spawn.vel,
            },
        }
    }

    pub fn can_shoot(&self) -> bool {
        self.cooldown == 0
    }

    pub fn is_done(&self) -> bool {
        self.tick == MAX_TICKS
    }

    fn get_next_id(&mut self) -> u32 {
        let id = self.next_id;
        self.next_id += 1;
        id
    }
}

pub fn meteor_in_bounds_x(pos: &Vec2) -> bool {
    // Note: server does not check the right side, confirmed via reversing the
    // local challenge binary.
    pos.x >= 0.0
}

pub fn meteor_in_bounds_y(constants: &Constants, pos: &Vec2) -> bool {
    pos.y >= 0.0 && pos.y < constants.world.height as f64
}

pub fn rocket_in_bounds_x(constants: &Constants, pos: &Vec2) -> bool {
    // Note: interestingly, the server does width + size*2 to check for out of
    // bounds (found via reversing the local challenge binary). Replicate.
    pos.x < (constants.world.width as f64) + constants.rockets.size * 2.0
}
