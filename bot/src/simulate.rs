// Reproduces the server-side logic (based on the reverse-engineered local bin).
use crate::game_message::{Cannon, Constants, Id, MeteorType, Score, Tick, MAX_TICKS};
use crate::game_random::GameRandom;
use crate::physics::{collision_times, make_intersection, MovingCircle};
use crate::spawn_schedule::{is_spawn_tick, remaining_spawns};
use crate::vec2::Vec2;

#[derive(Clone, Copy, Debug)]
pub enum EventInfo {
    MeteorSpawn { id: Id, pos: Vec2, vel: Vec2, typ: MeteorType },
    MeteorMiss { id: Id },
    Hit { rocket: Id, meteor: Id },
    // Note: the target_id here is not a guarantee, mostly informative of plan
    // at the time.
    Shoot { id: Id, pos: Vec2, target_id: Id },
    MeteorSplit { id: Id, parent_id: Id, pos: Vec2, vel: Vec2, typ: MeteorType },
}

#[derive(Clone)]
pub struct GameState {
    pub tick: Tick,
    pub next_id: Id,
    pub meteors: Vec<Meteor>,
    pub rockets: Vec<Rocket>,
    pub cooldown: u8,
    pub score: Score,
}

#[derive(Clone, Debug)]
pub struct Meteor {
    pub id: Id,
    pub pos: Vec2,
    pub vel: Vec2,
    pub typ: MeteorType,
    destroyed: bool,
}

impl Meteor {
    pub fn new(id: Id, pos: Vec2, vel: Vec2, typ: MeteorType) -> Self {
        Meteor { id, pos, vel, typ, destroyed: false }
    }
}

#[derive(Clone, Debug)]
pub struct Rocket {
    pub id: Id,
    pub pos: Vec2,
    pub vel: Vec2,
    destroyed: bool,
}

impl Rocket {
    pub fn new(id: Id, pos: Vec2, vel: Vec2) -> Self {
        Rocket { id, pos, vel, destroyed: false }
    }
}

#[derive(Debug)]
struct Collision {
    // Note: indices are only valid during collision handling (before Vecs are
    // changed to remove destroyed rockets/meteors).
    rocket_idx: usize,
    meteor_idx: usize,
    t: f64,
}

/// Runs a single game tick like the server would.
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
        self.state.meteors.iter().enumerate().filter_map(move |(meteor_idx, _)| {
            rocket_meteor_collision(rocket_idx, &self.state.rockets[rocket_idx],
                                    meteor_idx, &self.state.meteors[meteor_idx],
                                    self.constants)
                .filter(|c| c.t <= 1.0)
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
        self.state.score += self.constants.get_meteor_info(parent.typ).score as Score;
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
        let typ = MeteorType::Large;
        let id = self.state.add_meteor(spawn.pos, spawn.vel, typ);
        EventInfo::MeteorSpawn {
            id,
            pos: spawn.pos,
            vel: spawn.vel,
            typ,
        }
    }
}

pub struct ResolvedState {
    pub meteor_hits: Vec<Id>,
    pub score: Score,
    pub tick: Tick,
}

fn rocket_meteor_collision(rocket_idx: usize, rocket: &Rocket,
                           meteor_idx: usize, meteor: &Meteor,
                           constants: &Constants) -> Option<Collision> {
    let rocket = MovingCircle {
        pos: rocket.pos, vel: rocket.vel, size: constants.rockets.size
    };
    let meteor = MovingCircle {
        pos: meteor.pos, vel: meteor.vel,
        size: constants.get_meteor_info(meteor.typ).size
    };
    let (t1, t2) = collision_times(&rocket, &meteor)?;
    if t1 < 0.0 && t2 < 0.0 { return None; }
    // Min time if both are positive, else the positive one.
    let t = if t1 >= 0.0 && t2 >= 0.0 { t1.min(t2) } else { t1.max(t2) };
    Some(Collision { meteor_idx, rocket_idx, t })
}

impl GameState {
    pub fn new(first_id: Id) -> Self {
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
                 target: &Vec2, target_id: Id) -> Option<EventInfo> {
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

    pub fn add_meteor(&mut self, pos: Vec2, vel: Vec2, typ: MeteorType) -> Id {
        let id = self.get_next_id();
        self.meteors.push(Meteor::new(id, pos, vel, typ));
        id
    }

    fn get_next_id(&mut self) -> Id {
        let id = self.next_id;
        self.next_id += 1;
        id
    }

    pub fn potential_score(&self, cannon: &Cannon, constants: &Constants) -> Score {
        let board_score: Score = self.meteors.iter()
            // Ignore meteors that we can't ever hit
            .filter(|&m| m.pos.x + constants.get_meteor_info(m.typ).size >= cannon.position.x)
            .map(|m| total_score(m.typ, constants)).sum();
        let large_score = total_score(MeteorType::Large, constants);
        let potential_score = large_score * remaining_spawns(self.tick) as Score;
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

#[derive(Debug)]
struct SimRocket {
    rocket: Rocket,
    exit_tick: Tick,
}

#[derive(Debug)]
struct SimMeteor {
    meteor: Meteor,
    exit_tick: Tick,
    min_tick: Tick,
}

/// Lightweight implementation of tick updates, to quickly find the result of
/// in-flight rockets.
/// Returns the meteor IDs that were hit.
pub fn resolve_simulation(state: &GameState, mut rng: GameRandom,
                          constants: &Constants) -> ResolvedState {
    let mut tick = state.tick;
    let mut meteors: Vec<SimMeteor> = state.meteors.iter()
        .map(|m| SimMeteor {
            meteor: m.clone(),
            exit_tick: meteor_exit_tick(&m, tick, constants),
            min_tick: tick,
        })
        .collect();
    let mut rockets: Vec<SimRocket> = state.rockets.iter()
        .map(|r| SimRocket {
            rocket: r.clone(),
            exit_tick: rocket_exit_tick(&r, tick, constants),
        })
        .collect();
    let mut score = state.score;
    let mut meteor_hits = Vec::new();
    if rockets.is_empty() {
        return ResolvedState { meteor_hits: Vec::new(), score, tick }
    }
    let mut next_id = state.next_id;
    let max_rocket_exit_tick = rockets.iter().map(|r| r.exit_tick).max().unwrap();
    let mut last_spawn_tick = if tick > 0 { tick - 1 } else { tick };
    while !rockets.is_empty() && tick < MAX_TICKS {
        let mut earliest_hit: Option<Collision> = None;
        // Find the earliest rocket->meteor hit in existing meteors
        for (rocket_idx, rocket) in rockets.iter().enumerate() {
            for (meteor_idx, meteor) in meteors.iter().enumerate() {
                if let Some(collision) = rocket_meteor_collision(
                    rocket_idx, &rocket.rocket, meteor_idx, &meteor.meteor,
                    constants) {
                    // Using floor, since the collision would be processed at
                    // the start of the tick.
                    let collision_tick = tick + (collision.t.floor() as Tick);
                    // Note that we don't check for '=', since the server checks
                    // for hits before checking for exits.
                    if collision_tick >= rocket.exit_tick ||
                        collision_tick >= meteor.exit_tick {
                        // One of the two would be out of bounds by then
                        continue;
                    }
                    if collision_tick >= MAX_TICKS {
                        continue;
                    }
                    if collision_tick < meteor.min_tick {
                        continue;
                    }
                    if earliest_hit.as_ref().map_or(true, |h| collision.t < h.t) {
                        earliest_hit = Some(collision);
                    }
                }
            }
        }
        let mut next_tick = earliest_hit.as_ref()
            .map_or(max_rocket_exit_tick, |h| tick + (h.t.floor()) as Tick)
            .min(MAX_TICKS);
        // Check for spawns before this hit
        let start_tick = (last_spawn_tick+1).max(tick);
        for spawn_tick in start_tick..=next_tick {
            if is_spawn_tick(spawn_tick) {
                last_spawn_tick = spawn_tick;
                let id = next_id;
                let spawn = rng.next_spawn(constants);
                next_id += 1;
                // This new spawn will get updated assuming it was there at
                // 'tick', rewind it accordingly (also needed to check for
                // collisions).
                let spawn_delta = spawn_tick - tick;
                let new_meteor = Meteor::new(
                    id, spawn.pos.minus(&spawn.vel.scale(spawn_delta as f64)),
                    spawn.vel, MeteorType::Large);
                let exit_tick = meteor_exit_tick(&new_meteor, tick, constants);
                meteors.push(SimMeteor {
                    meteor: new_meteor, exit_tick, min_tick: spawn_tick
                });
                // Skip the previously found hit -- there's a spawn before then.
                earliest_hit = None;
                next_tick = spawn_tick;
                break;
            }
        }
        // Update meteors/rockets positions by the delta tick
        let delta_tick = next_tick - tick;
        for meteor in meteors.iter_mut() {
            meteor.meteor.pos = meteor.meteor.pos.add(
                &meteor.meteor.vel.scale(delta_tick as f64));
        }
        for rocket in rockets.iter_mut() {
            rocket.rocket.pos = rocket.rocket.pos.add(
                &rocket.rocket.vel.scale(delta_tick as f64));
        }
        tick = next_tick;
        // Handle the collision, if any.
        if let Some(collision) = earliest_hit {
            let meteor = &mut meteors[collision.meteor_idx];
            let rocket = &mut rockets[collision.rocket_idx];
            rocket.rocket.destroyed = true;
            meteor.meteor.destroyed = true;
            meteor_hits.push(meteor.meteor.id);
            score += constants.get_meteor_info(meteor.meteor.typ).score as Score;
            // The hit happens at the sub-tick level, rewind to before the hit
            // to find the exact position.
            let intersection = make_intersection(
                &MovingCircle {
                    pos: rocket.rocket.pos.minus(&rocket.rocket.vel.scale(delta_tick as f64)),
                    vel: rocket.rocket.vel,
                    size: constants.rockets.size,
                },
                &MovingCircle {
                    pos: meteor.meteor.pos.minus(&meteor.meteor.vel.scale(delta_tick as f64)),
                    vel: meteor.meteor.vel,
                    size: constants.get_meteor_info(meteor.meteor.typ).size,
                }, collision.t);
            let hit_pos = intersection.intersection;
            for split in rng.next_splits(
                &hit_pos, &meteor.meteor.vel, meteor.meteor.typ, constants) {
                let id = next_id;
                next_id += 1;
                let new_meteor = Meteor::new(id, split.pos, split.vel, split.typ);
                let exit_tick = meteor_exit_tick(&new_meteor, tick, constants);
                meteors.push(SimMeteor {
                    meteor: new_meteor, exit_tick, min_tick: tick + 1
                });
            }
        }
        rockets.retain(|r| !r.rocket.destroyed && tick < r.exit_tick);
        meteors.retain(|m| !m.meteor.destroyed && tick < m.exit_tick);
    }
    ResolvedState { meteor_hits, score, tick }
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

/// Tick where a meteor will exit the screen and will despawn.
pub fn meteor_exit_tick(meteor: &Meteor, current_tick: Tick,
                        constants: &Constants) -> Tick {
    let remaining_x = meteor.pos.x;
    assert!(remaining_x >= 0.0);
    assert!(meteor.vel.x <= 0.0);
    let ticks_x = if meteor.vel.x < 0.0 { remaining_x / (-meteor.vel.x) } else { f64::MAX };
    let ticks_y = if meteor.vel.y > 0.0 {
        let remaining_y = constants.world.height as f64 - meteor.pos.y;
        remaining_y / meteor.vel.y
    } else if meteor.vel.y < 0.0 {
        let remaining_y = meteor.pos.y;
        remaining_y / (-meteor.vel.y)
    } else {
        f64::MAX
    };
    let ticks = ticks_x.min(ticks_y).ceil() as Tick;
    current_tick + ticks
}

/// Tick where a rocket will exit the screen and will despawn.
/// Note that the server does not check for Y despawns, but we do here to speed
/// up simulations, i.e. we consider the exit tick when the rocket can no longer
/// hit anything.
pub fn rocket_exit_tick(rocket: &Rocket, current_tick: Tick,
                        constants: &Constants) -> Tick {
    let remaining_x = max_rocket_x(constants) - rocket.pos.x;
    assert!(remaining_x >= 0.0);
    assert!(rocket.vel.x >= 0.0);
    // Rockets technically never despawn on the Y axis. However, they can't hit
    // anything once they are rocket_size + max_meteor_size away from the side.
    let y_buffer = constants.rockets.size +
        constants.get_meteor_info(MeteorType::Large).size;
    let ticks_x = if rocket.vel.x > 0.0 { remaining_x / rocket.vel.x } else { f64::MAX };
    let ticks_y = if rocket.vel.y > 0.0 {
        let remaining_y = constants.world.height as f64 + y_buffer - rocket.pos.y;
        remaining_y / rocket.vel.y
    } else if rocket.vel.y < 0.0 {
        let remaining_y = rocket.pos.y + y_buffer;
        remaining_y / (-rocket.vel.y)
    } else {
        f64::MAX
    };
    let ticks = ticks_x.min(ticks_y).ceil() as Tick;
    current_tick + ticks
}

pub fn total_score(meteor_type: MeteorType, constants: &Constants) -> Score {
    let mut score = 0;
    let info = &constants.get_meteor_info(meteor_type);
    score += info.score as Score;
    for explosion in &info.explodes_into {
        score += total_score(explosion.meteor_type, constants);
    }
    score
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::game_message::default_game_settings;
    use crate::seedrandom::SeedRandom;

    fn slow_resolve_simulation(
        mut state: GameState, mut rng: GameRandom,
        constants: &Constants) -> (Score, Vec<Id>, Vec<EventInfo>) {
        let mut hits = Vec::new();
        let mut events = Vec::new();
        while !state.is_done() && !state.rockets.is_empty() {
            for event in run_server_tick(&mut state, &mut rng, constants) {
                if let EventInfo::Hit { meteor, .. } = event {
                    hits.push(meteor);
                }
                events.push(event);
            }
        }
        (state.score, hits, events)
    }

    #[test]
    fn test_meteor_exit_tick() {
        let mut constants = Constants::default();
        constants.world.width = 1200;
        constants.world.height = 800;
        // Exit on the left, dy > 0
        assert_eq!(meteor_exit_tick(
                &Meteor::new(/*id=*/42, /*pos=*/Vec2::new(35.0, 400.0),
                             /*vel=*/Vec2::new(-10.0, 1.0), /*typ=*/MeteorType::Large),
                /*tick=*/5, &constants),
            9);
        // Exit on the left, dy < 0
        assert_eq!(meteor_exit_tick(
                &Meteor::new(/*id=*/42, /*pos=*/Vec2::new(35.0, 400.0),
                             /*vel=*/Vec2::new(-10.0, -1.0), /*typ=*/MeteorType::Large),
                /*tick=*/5, &constants),
            9);
        // Exit on the left, dy = 0
        assert_eq!(meteor_exit_tick(
                &Meteor::new(/*id=*/42, /*pos=*/Vec2::new(35.0, 400.0),
                             /*vel=*/Vec2::new(-10.0, 0.0), /*typ=*/MeteorType::Large),
                /*tick=*/5, &constants),
            9);
        // Exit on the top, dx = 0
        assert_eq!(meteor_exit_tick(
                &Meteor::new(/*id=*/42, /*pos=*/Vec2::new(400.0, 35.0),
                             /*vel=*/Vec2::new(0.0, -10.0), /*typ=*/MeteorType::Large),
                /*tick=*/5, &constants),
            9);
        // Exit on the bottom, dx < 0
        assert_eq!(meteor_exit_tick(
                &Meteor::new(/*id=*/42, /*pos=*/Vec2::new(400.0, 765.0),
                             /*vel=*/Vec2::new(-10.0, 10.0), /*typ=*/MeteorType::Large),
                /*tick=*/5, &constants),
            9);
    }

    #[test]
    fn test_rocket_exit_tick() {
        let mut constants = Constants::default();
        constants.world.width = 1200;
        constants.world.height = 800;
        constants.rockets.size = 5.0;
        constants.meteor_infos.0[MeteorType::Large as usize].size = 50.0;
        // Note: for rockets, last x will be 1200 + 5 * 2
        // Exit on the right, dy > 0
        assert_eq!(rocket_exit_tick(
                &Rocket::new(/*id=*/42, /*pos=*/Vec2::new(1200.0, 400.0),
                             /*vel=*/Vec2::new(3.0, 1.0)),
                /*tick=*/5, &constants),
            9);
        // Exit on the right, dy < 0
        assert_eq!(rocket_exit_tick(
                &Rocket::new(/*id=*/42, /*pos=*/Vec2::new(1200.0, 400.0),
                             /*vel=*/Vec2::new(3.0, -1.0)),
                /*tick=*/5, &constants),
            9);
        // Exit on the right, dy = 0
        assert_eq!(rocket_exit_tick(
                &Rocket::new(/*id=*/42, /*pos=*/Vec2::new(1200.0, 400.0),
                             /*vel=*/Vec2::new(3.0, 0.0)),
                /*tick=*/5, &constants),
            9);
        // Note: for rockets, min y will be -5 - 50
        // Note: for rockets, max y will be 800 + 5 + 50
        // Exit on the top, dx = 0
        assert_eq!(rocket_exit_tick(
                &Rocket::new(/*id=*/42, /*pos=*/Vec2::new(400.0, 10.0),
                             /*vel=*/Vec2::new(0.0, -15.0)),
                /*tick=*/5, &constants),
            10);
        // Exit on the bottom, dx > 0
        assert_eq!(rocket_exit_tick(
                &Rocket::new(/*id=*/42, /*pos=*/Vec2::new(400.0, 790.0),
                             /*vel=*/Vec2::new(1.0, 15.0)),
                /*tick=*/5, &constants),
            10);
    }

    #[test]
    fn test_resolve_simulation_no_rockets() {
        let mut state = GameState::new(/*first_id=*/0);
        state.add_meteor(Vec2::new(400.0, 400.0), Vec2::new(-10.0, 0.0), MeteorType::Large);
        state.add_meteor(Vec2::new(200.0, 200.0), Vec2::new(-10.0, 0.0), MeteorType::Large);
        let (constants, _) = default_game_settings();
        let rng = GameRandom::new(SeedRandom::from_seed(b"TestSeed"));
        let resolved = resolve_simulation(&state, rng, &constants);
        assert_eq!(resolved.meteor_hits, Vec::<Id>::new());
    }

    #[test]
    fn test_resolve_simulation_rocket_miss_no_hits() {
        let mut state = GameState::new(/*first_id=*/0);
        let (constants, cannon) = default_game_settings();
        state.add_meteor(Vec2::new(400.0, 400.0), Vec2::new(-10.0, 0.0), MeteorType::Large);
        state.add_meteor(Vec2::new(200.0, 200.0), Vec2::new(-10.0, 0.0), MeteorType::Large);
        let rng = GameRandom::new(SeedRandom::from_seed(b"TestSeed"));
        // Will miss way below the meteors.
        state.shoot(&cannon, &constants, &Vec2::new(300.0, 700.0),
                    /*target_id=*/0);
        let resolved = resolve_simulation(&state, rng, &constants);
        assert_eq!(resolved.meteor_hits, Vec::<Id>::new());
    }

    #[test]
    fn test_resolve_simulation_rocket_hits_meteor() {
        let mut state = GameState::new(/*first_id=*/0);
        let (constants, cannon) = default_game_settings();
        let cannon_pos: Vec2 = cannon.position.into();
        state.add_meteor(Vec2::new(400.0, cannon_pos.y), Vec2::new(-10.0, 0.0), MeteorType::Large);
        let rng = GameRandom::new(SeedRandom::from_seed(b"TestSeed"));
        // Will hit the meteor directly
        state.shoot(&cannon, &constants, &Vec2::new(cannon_pos.x + 100.0, cannon_pos.y),
                    /*target_id=*/0);
        let resolved = resolve_simulation(&state, rng, &constants);
        let large_score = constants.get_meteor_info(MeteorType::Large).score as Score;
        assert_eq!(resolved.meteor_hits, vec![0]);
        assert_eq!(resolved.score, state.score + large_score);
    }

    #[test]
    fn test_resolve_simulation_matches_slow_resolve() {
        let mut state = GameState::new(/*first_id=*/0);
        let (constants, cannon) = default_game_settings();
        let cannon_pos: Vec2 = cannon.position.into();
        let mut rng = GameRandom::new(SeedRandom::from_seed(b"TestSeed"));
        while !state.is_done() {
            run_server_tick(&mut state, &mut rng, &constants);
            if state.cannon_ready() {
                let dummy_target_id = 0;
                state.shoot(&cannon, &constants,
                            &Vec2::new(cannon_pos.x + 100.0, cannon_pos.y),
                            dummy_target_id);
            }
            let resolved = resolve_simulation(&state, rng.clone(), &constants);
            let (score, hits, events) = slow_resolve_simulation(
                state.clone(), rng.clone(), &constants);
            assert_eq!(resolved.meteor_hits, hits, "Events:\n{}",
                       events.iter().map(|e| format!("- {:?}", e))
                           .collect::<Vec<String>>().join("\n"));
            assert_eq!(resolved.score, score);
        }
    }
}
