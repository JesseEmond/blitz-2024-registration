// Reproduces the server-side logic (based on the reverse-engineered local bin).
use crate::game_message::{Cannon, Constants, MeteorType, MAX_TICKS};
use crate::game_random::GameRandom;
use crate::physics::{collision_times, make_intersection, MovingCircle};
use crate::spawn_schedule::{is_spawn_tick, remaining_spawns};
use crate::vec2::Vec2;

#[derive(Clone, Copy, Debug)]
pub enum EventInfo {
    MeteorSpawn { id: u32, pos: Vec2, vel: Vec2, typ: MeteorType },
    MeteorMiss { id: u32 },
    Hit { rocket: u32, meteor: u32 },
    Shoot { id: u32, pos: Vec2, target_id: u32 },
    MeteorSplit { id: u32, parent_id: u32, pos: Vec2, vel: Vec2, typ: MeteorType },
}

#[derive(Clone)]
pub struct GameState {
    pub tick: u16,
    next_id: u32,
    pub meteors: Vec<Meteor>,
    pub rockets: Vec<Rocket>,
    cooldown: u8,
    pub score: u16,
}

#[derive(Clone)]
pub struct Meteor {
    pub id: u32,
    pub pos: Vec2,
    pub vel: Vec2,
    pub typ: MeteorType,
    destroyed: bool,
}

impl Meteor {
    pub fn new(id: u32, pos: Vec2, vel: Vec2, typ: MeteorType) -> Self {
        Meteor { id, pos, vel, typ, destroyed: false }
    }
}

#[derive(Clone)]
pub struct Rocket {
    pub id: u32,
    pub pos: Vec2,
    pub vel: Vec2,
    destroyed: bool,
}

impl Rocket {
    pub fn new(id: u32, pos: Vec2, vel: Vec2) -> Self {
        Rocket { id, pos, vel, destroyed: false }
    }
}

struct Collision {
    // Note: indices are only valid during collision handling (before Vecs are
    // changed to remove destroyed rockets/meteors).
    rocket_idx: usize,
    meteor_idx: usize,
    t: f64,
}

impl GameState {
    pub fn new(first_id: u32) -> Self {
        Self {
            tick: 0,
            next_id: first_id,
            meteors: Vec::new(),
            rockets: Vec::new(),
            cooldown: 0,
            score: 0,
        }
    }

    pub fn run_tick(&mut self, rng: &mut GameRandom, constants: &Constants) -> Vec<EventInfo> {
        let mut events = Vec::new();
        if is_spawn_tick(self.tick) {
            events.push(self.spawn_meteor(rng, constants));
        }
        events.extend(self.find_and_handle_collisions(rng, constants));
        events.extend(self.update_meteors(constants));
        self.update_rockets(constants);
        self.tick += 1;
        self.update_cannon();
        events
    }

    fn find_and_handle_collisions(&mut self, rng: &mut GameRandom, constants: &Constants) -> Vec<EventInfo> {
        let mut all_collisions: Vec<Collision> = (0usize..self.rockets.len())
            .flat_map(|rocket_idx| {
                self.rocket_collisions(constants, rocket_idx)
            }).collect();
        all_collisions.sort_by(|a, b| a.t.partial_cmp(&b.t).unwrap());
        let mut events = Vec::new();
        for collision in all_collisions {
            events.extend(self.handle_collision(&collision, rng, constants));
        }
        self.rockets.retain(|rocket| { !rocket.destroyed });
        self.meteors.retain(|meteor| { !meteor.destroyed });
        events
    }

    fn rocket_collisions(&self, constants: &Constants, rocket_idx: usize) -> Vec<Collision> {
        self.meteors.iter().enumerate().filter_map(move |(idx, meteor)| {
            let rocket = &self.rockets[rocket_idx];
            let rocket = MovingCircle {
                pos: rocket.pos, vel: rocket.vel, size: constants.rockets.size
            };
            let meteor = MovingCircle {
                pos: meteor.pos, vel: meteor.vel,
                size: constants.meteor_infos.get(&meteor.typ).unwrap().size
            };
            let (t1, t2) = collision_times(&rocket, &meteor)?;
            if t1 < 0.0 && t2 < 0.0 { return None; }
            // Min time if both are positive, else the positive one.
            let t = if t1 >= 0.0 && t2 >= 0.0 { t1.min(t2) } else { t1.max(t2) };
            if t <= 1.0 {
                Some(Collision { meteor_idx: idx, rocket_idx: rocket_idx, t })
            } else {
                None
            }
        }).collect()
    }

    fn handle_collision(&mut self, collision: &Collision, rng: &mut GameRandom,
                        constants: &Constants) -> Vec<EventInfo> {
        let mut events = Vec::new();
        if self.rockets[collision.rocket_idx].destroyed ||
            self.meteors[collision.meteor_idx].destroyed {
            return events;
        }
        events.push(EventInfo::Hit {
            rocket: self.rockets[collision.rocket_idx].id,
            meteor: self.meteors[collision.meteor_idx].id,
        });
        let rocket = &mut self.rockets[collision.rocket_idx];
        rocket.destroyed = true;
        self.meteors[collision.meteor_idx].destroyed = true;
        let parent = self.meteors[collision.meteor_idx].clone();
        self.score += constants.meteor_infos[&parent.typ].score as u16;
        let intersection = make_intersection(
            &MovingCircle {
                pos: rocket.pos,
                vel: rocket.vel,
                size: constants.rockets.size,
            },
            &MovingCircle {
                pos: parent.pos,
                vel: parent.vel,
                size: constants.meteor_infos.get(&parent.typ).unwrap().size,
            },
            collision.t);
        let hit_pos = intersection.intersection;
        for split in rng.next_splits(&hit_pos, &parent.vel, parent.typ, constants) {
            let id = self.get_next_id();
            self.meteors.push(Meteor::new(id, split.pos, split.vel, split.typ));
            events.push(EventInfo::MeteorSplit {
                id,
                parent_id: parent.id,
                pos: split.pos,
                vel: split.vel,
                typ: split.typ,
            });
        }
        events
    }

    fn update_meteors(&mut self, constants: &Constants) -> Vec<EventInfo> {
        let mut events = Vec::new();
        self.meteors.retain_mut(|meteor| {
            meteor.pos = meteor.pos.add(&meteor.vel);
            let keep = meteor_in_bounds_x(&meteor.pos)
                && meteor_in_bounds_y(constants, &meteor.pos);
            if !keep {
                events.push(EventInfo::MeteorMiss { id: meteor.id });
            }
            keep
        });
        events
    }

    fn update_rockets(&mut self, constants: &Constants) {
        self.rockets.retain_mut(|rocket| {
            rocket.pos = rocket.pos.add(&rocket.vel);
            // Note: server does not check for y bounds for rockets! Confirmed
            // by testing a shot straight up -- rockets never disappear.
            // Note: not reporting wiff events when this is false, as these
            // should not happen with a bot with good search.
            rocket_in_bounds_x(constants, &rocket.pos)
        });
    }

    fn update_cannon(&mut self) {
        if self.cooldown > 0 {
            self.cooldown -= 1;
        }
    }

    pub fn shoot(&mut self, cannon: &Cannon, constants: &Constants,
                 target: &Vec2, target_id: u32) -> Option<EventInfo> {
        assert!(self.cannon_ready());
        if target.x < cannon.position.x {
            return None;
        }
        let id = self.get_next_id();
        let pos = Vec2::new(cannon.position.x, cannon.position.y);
        let vel = target.minus(&pos).normalized().scale(constants.rockets.speed);
        self.rockets.push(Rocket::new(id, pos, vel));
        self.cooldown = constants.cannon_cooldown_ticks;
        Some(EventInfo::Shoot { id, pos: *target, target_id })
    }

    fn spawn_meteor(&mut self, rng: &mut GameRandom, constants: &Constants) -> EventInfo {
        let spawn = rng.next_spawn(constants);
        let id = self.get_next_id();
        let typ = MeteorType::Large;
        self.meteors.push(Meteor::new(id, spawn.pos, spawn.vel, typ));
        EventInfo::MeteorSpawn {
            id,
            pos: spawn.pos,
            vel: spawn.vel,
            typ,
        }
    }

    pub fn cannon_ready(&self) -> bool {
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

    pub fn potential_score(&self, constants: &Constants) -> u16 {
        let board_score: u16 = self.meteors.iter()
            .map(|m| total_score(m.typ, constants)).sum();
        let large_score = total_score(MeteorType::Large, constants);
        let potential_score = large_score * remaining_spawns(self.tick) as u16;
        self.score + board_score + potential_score
    }

    pub fn print(&self) -> String {
        let mut out = String::new();
        for m in self.meteors.iter() {
            out.push_str(format!(
                "M {}: pos={:?}, vel={:?} {:?}\n",
                m.id, m.pos, m.vel, m.typ).as_str());
        }
        for r in self.rockets.iter() {
            out.push_str(format!(
                "R {}: pos={:?}, vel={:?}\n", r.id, r.pos, r.vel).as_str());
        }
        out
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
    pos.x < max_rocket_x(constants)
}

pub fn max_rocket_x(constants: &Constants) -> f64 {
    // Note: interestingly, the server does width + size*2 to check for out of
    // bounds (found via reversing the local challenge binary). Replicate.
    (constants.world.width as f64) + constants.rockets.size * 2.0
}

pub fn total_score(meteor_type: MeteorType, constants: &Constants) -> u16 {
    let mut score = 0;
    let info = &constants.meteor_infos[&meteor_type];
    score += info.score as u16;
    for explosion in &info.explodes_into {
        score += total_score(explosion.meteor_type, constants);
    }
    score
}
