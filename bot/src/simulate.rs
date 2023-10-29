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
    pub cooldown: u8,
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

pub fn run_server_tick(state: &mut GameState, rng: &mut GameRandom,
                       constants: &Constants) -> Vec<EventInfo> {
    ServerSimulation { state, rng, constants }.tick()
}

struct ServerSimulation<'a> {
    state: &'a mut GameState,
    rng: &'a mut GameRandom,
    constants: &'a Constants,
}

impl ServerSimulation<'_> {
    fn tick(&mut self) -> Vec<EventInfo> {
        let mut events = Vec::new();
        if is_spawn_tick(self.state.tick) {
            events.push(self.spawn_meteor());
        }
        events.extend(self.find_and_handle_collisions());
        events.extend(self.update_meteors());
        self.update_rockets();
        self.state.tick += 1;
        self.update_cannon();
        events
    }

    fn find_and_handle_collisions(&mut self) -> Vec<EventInfo> {
        let mut all_collisions: Vec<Collision> = (0usize..self.state.rockets.len())
            .flat_map(|rocket_idx| {
                self.rocket_collisions(rocket_idx)
            }).collect();
        all_collisions.sort_by(|a, b| a.t.partial_cmp(&b.t).unwrap());
        let mut events = Vec::new();
        for collision in all_collisions {
            events.extend(self.handle_collision(&collision));
        }
        self.state.rockets.retain(|rocket| { !rocket.destroyed });
        self.state.meteors.retain(|meteor| { !meteor.destroyed });
        events
    }

    fn rocket_collisions(&self, rocket_idx: usize) -> Vec<Collision> {
        self.state.meteors.iter().enumerate().filter_map(move |(idx, meteor)| {
            let rocket = &self.state.rockets[rocket_idx];
            let rocket = MovingCircle {
                pos: rocket.pos, vel: rocket.vel, size: self.constants.rockets.size
            };
            let meteor = MovingCircle {
                pos: meteor.pos, vel: meteor.vel,
                size: self.constants.get_meteor_info(meteor.typ).size
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

    fn handle_collision(&mut self, collision: &Collision) -> Vec<EventInfo> {
        let mut events = Vec::new();
        if self.state.rockets[collision.rocket_idx].destroyed ||
            self.state.meteors[collision.meteor_idx].destroyed {
            return events;
        }
        events.push(EventInfo::Hit {
            rocket: self.state.rockets[collision.rocket_idx].id,
            meteor: self.state.meteors[collision.meteor_idx].id,
        });
        let rocket = &mut self.state.rockets[collision.rocket_idx];
        rocket.destroyed = true;
        self.state.meteors[collision.meteor_idx].destroyed = true;
        let parent = self.state.meteors[collision.meteor_idx].clone();
        self.state.score += self.constants.get_meteor_info(parent.typ).score as u16;
        let intersection = make_intersection(
            &MovingCircle {
                pos: rocket.pos,
                vel: rocket.vel,
                size: self.constants.rockets.size,
            },
            &MovingCircle {
                pos: parent.pos,
                vel: parent.vel,
                size: self.constants.get_meteor_info(parent.typ).size,
            },
            collision.t);
        let hit_pos = intersection.intersection;
        for split in self.rng.next_splits(
            &hit_pos, &parent.vel, parent.typ, self.constants) {
            let id = self.state.get_next_id();
            self.state.meteors.push(Meteor::new(id, split.pos, split.vel, split.typ));
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

    fn update_meteors(&mut self) -> Vec<EventInfo> {
        let mut events = Vec::new();
        self.state.meteors.retain_mut(|meteor| {
            meteor.pos = meteor.pos.add(&meteor.vel);
            let keep = meteor_in_bounds_x(&meteor.pos)
                && meteor_in_bounds_y(self.constants, &meteor.pos);
            if !keep {
                events.push(EventInfo::MeteorMiss { id: meteor.id });
            }
            keep
        });
        events
    }

    fn update_rockets(&mut self) {
        self.state.rockets.retain_mut(|rocket| {
            rocket.pos = rocket.pos.add(&rocket.vel);
            // Note: server does not check for y bounds for rockets! Confirmed
            // by testing a shot straight up -- rockets never disappear.
            // Note: we don't report an event if we missed (i.e. took a bad shot)
            rocket_in_bounds_x(self.constants, &rocket.pos)
        });
    }

    fn update_cannon(&mut self) {
        if self.state.cooldown > 0 {
            self.state.cooldown -= 1;
        }
    }

    fn spawn_meteor(&mut self) -> EventInfo {
        let spawn = self.rng.next_spawn(self.constants);
        let id = self.state.get_next_id();
        let typ = MeteorType::Large;
        self.state.meteors.push(Meteor::new(id, spawn.pos, spawn.vel, typ));
        EventInfo::MeteorSpawn {
            id,
            pos: spawn.pos,
            vel: spawn.vel,
            typ,
        }
    }
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

    pub fn potential_score(&self, cannon: &Cannon, constants: &Constants) -> u16 {
        let board_score: u16 = self.meteors.iter()
            // Ignore meteors that we can't ever hit
            // TODO: re-include once we verify it helps
            // .filter(|&m| m.pos.x + constants.get_meteor_info(m.typ).size >= cannon.position.x)
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

    pub fn visualize(&self, cannon: &Cannon, constants: &Constants) {
        const UNITS_PER_SQUARE_X: f64 = 30.0;
        const UNITS_PER_SQUARE_Y: f64 = 25.0;
        const SQUARE_WIDTH: usize = 3;
        let quantize = |v: Vec2| {
            ((v.x / UNITS_PER_SQUARE_X).floor() as i32,
            (v.y / UNITS_PER_SQUARE_Y).floor() as i32)
        };
        let (w, h) = quantize(Vec2::new(constants.world.width as f64,
                                        constants.world.height as f64));
        let mut rows = vec![vec![" ".repeat(SQUARE_WIDTH); w as usize]; h as usize];
        let mut paint = |p: (i32, i32), value: String| {
            let (x, y) = p;
            assert!(value.len() == SQUARE_WIDTH,
                    "{} must be len {}", value, SQUARE_WIDTH);
            if x >= 0 && x < w && y >= 0 && y < h {
                rows[y as usize][x as usize] = value;
            }
        };
        for rocket in self.rockets.iter() {
            paint(quantize(rocket.pos),
                  format!("R{:02}", rocket.id % 100).to_string());
        }
        for meteor in self.meteors.iter() {
            let meteor_type = match meteor.typ {
                MeteorType::Large => "L",
                MeteorType::Medium => "M",
                MeteorType::Small => "S",
            };
            let size = constants.get_meteor_info(meteor.typ).size as i32;
            for dx in -size..=size {
                for dy in -size..=size {
                    let p = meteor.pos.add(&Vec2::new(dx as f64, dy as f64));
                    if p.within_range(&meteor.pos, size as f64) {
                    paint(
                        quantize(p),
                        format!("{}{:02}", meteor_type, meteor.id % 100).to_string());
                    }
                }
            }
        }
        paint(quantize(cannon.position.into()), "CCC".to_string());
        print!("     ");
        for x in 0..(w as usize) {
            const LEGEND_WIDTH: usize = 9;  // X=1234  |
            assert!(LEGEND_WIDTH % SQUARE_WIDTH == 0);
            const MULTIPLIER: usize = LEGEND_WIDTH / SQUARE_WIDTH;
            if x % MULTIPLIER == 0 {
                print!("|X={:<6}", x as f64 * UNITS_PER_SQUARE_X);
            }
        }
        println!();
        for (i, row) in rows.iter().enumerate() {
            print!("Y={:3}|", i as f64 * UNITS_PER_SQUARE_Y);
            println!("{}|", row.join(""));
        }
    }

    pub fn is_equivalent(&self, other: &Self, precision: f64) -> bool {
        self.tick == other.tick && self.next_id == other.next_id &&
            self.cooldown == other.cooldown && self.score == other.score &&
            self.meteors.len() == other.meteors.len() &&
            self.rockets.len() == other.rockets.len() &&
            std::iter::zip(self.meteors.iter(), other.meteors.iter()).all(|(a, b)| {
                a.id == b.id && a.typ == b.typ &&
                    a.pos.within_range(&b.pos, precision) &&
                    a.vel.within_range(&b.vel, precision)
            }) &&
            std::iter::zip(self.rockets.iter(), other.rockets.iter()).all(|(a, b)| {
                a.id == b.id && a.pos.within_range(&b.pos, precision) &&
                    a.vel.within_range(&b.vel, precision)
            })
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
    let info = &constants.get_meteor_info(meteor_type);
    score += info.score as u16;
    for explosion in &info.explodes_into {
        score += total_score(explosion.meteor_type, constants);
    }
    score
}
