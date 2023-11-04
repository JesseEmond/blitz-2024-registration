// TODO: refactor to be only about SearchState
use std::hash::Hasher;
use std::time::Duration;

use rustc_hash::FxHasher;

use crate::game_message::{Cannon, Constants, Id, Score, Tick};
use crate::game_random::GameRandom;
use crate::mcts::{MCTS, MCTSOptions};
use crate::physics::{get_aim_options, MovingCircle};
use crate::search::SearchState;
use crate::simulate::{max_rocket_x, run_server_tick, EventInfo, GameState, Meteor};
use crate::vec2::Vec2;

const MCTS_OPTIONS: MCTSOptions = MCTSOptions {
    exploration_multiplier: 1.0,
    // TODO: try full random playthrough % instead?
    random_action_prob: 0.05,
    uncertainty_d: 10000.0,
    print_every_n_rounds: Some(50),
};
const MCTS_BUDGET: Duration = Duration::from_millis(500);
// Max aiming options added to actions for a single meteor.
// (Note: impossible aiming options aren't counted)
const NUM_SHOOTING_AIM_OPTIONS: usize = 1;

/// Events at the time where the client would see them (i.e. the tick after
/// they happened). Note that we move forward the meteors in EventInfos by one
/// tick to match what the client would see in the GameMessage JSON (post tick
/// update).
#[derive(Clone, Copy, Debug)]
pub struct Event {
    pub tick: Tick,
    pub info: EventInfo
}

#[derive(Clone, Debug)]
struct MeteorVision {
    meteor: Meteor,
    // If set, the tick where this meteor will appear. If not set, the meteor is
    // already there.
    tick: Option<Tick>,
}

impl MeteorVision {
    fn is_spawned(&self) -> bool {
        self.tick.is_none()
    }

    fn past(meteor: Meteor) -> Self {
        Self { meteor, tick: None }
    }

    fn future(meteor: Meteor, spawn_tick: Tick) -> Self {
        Self { meteor, tick: Some(spawn_tick) }
    }
}

// TODO: change name
pub struct Planner<'a> {
    pub game_state: GameState,
    pub search_state: SearcherState<'a>,
    cannon: &'a Cannon,
    constants: &'a Constants,
    random: GameRandom,
    mcts: MCTS<SearcherState<'a>>,
}

impl<'a> Planner<'a> {
    pub fn new(first_id: Id, cannon: &'a Cannon, constants: &'a Constants,
               random: GameRandom) -> Self {
        let game_state = GameState::new(first_id);
        let search_state = SearcherState::new(
            game_state.clone(), &constants, &cannon,
            random.clone());
        let mcts = MCTS::new(search_state.clone(), MCTS_OPTIONS);
        Self { game_state, search_state, cannon, constants, random, mcts }
    }

    pub fn is_done(&self) -> bool {
        self.game_state.is_done()
    }

    pub fn next_action(&mut self) -> Vec<Event> {
        let mut events = Vec::new();
        // TODO: keep MCTS state across ticks?
        let mut best_seen_score = self.mcts.best_seen_score;
        // let mut best_action = None;
        // for _ in 0..MCTS_META_ITERS {
        //     let mut mcts = MCTS::new(self.search_state.clone(), MCTS_OPTIONS);
        //     mcts.run_with_budget(MCTS_BUDGET);
        //     if mcts.best_seen_score > best_seen_score {
        //         best_seen_score = mcts.best_seen_score;
        //         println!("New best: {}", best_seen_score);
        //         best_action = Some(mcts.best_action());
        //         println!("Action: {:?}", best_action);
        //     }
        // }
        self.mcts.run_with_budget(MCTS_BUDGET);
        if self.mcts.best_seen_score > best_seen_score {
            best_seen_score = self.mcts.best_seen_score;
            println!("New best: {}", best_seen_score);
            // best_action = Some(self.mcts.best_action());
            // println!("Action: {:?}", best_action);
        }
        for event in run_server_tick(
            &mut self.game_state, &mut self.random, &self.constants) {
            events.push(Event {
                tick: self.game_state.tick,
                info: post_update_event_info(event)
            });
        }
        if self.game_state.is_done() {
            return events;
        }
        let best_action = self.mcts.pick_best_action().expect("No action returned");
        self.search_state.apply_action(&best_action);
        match best_action {
            Action::Hold { .. } => {},
            Action::Shoot { aim, target_id, .. } => {
                events.push(Event {
                    info: self.game_state.shoot(
                        &self.cannon, &self.constants, &aim, target_id).unwrap(),
                    tick: self.game_state.tick });
            },
        }
        events
    }
}

#[derive(Clone, Debug, PartialEq)]
pub enum Action {
    Shoot {
        aim: Vec2, target_id: Id, predicted_hits: Vec<Id>,
        potential_score: Score, ticks_until_unshootable: Tick,
    },
    Hold { potential_score: Score, },
}

#[derive(Clone)]
pub struct SearcherState<'a> {
    constants: &'a Constants,
    cannon: &'a Cannon,
    state: GameState,
    // IDs of already shot-at meteors. Because some IDs are predicted IDs, this
    // must be updated based on shooting simulation hits.
    predicted_hits: Vec<Id>,
    random: GameRandom,
    potential_score: Score,
}

impl<'a> SearcherState<'a> {
    pub fn new(state: GameState, constants: &'a Constants, cannon: &'a Cannon,
               random: GameRandom) -> Self {
        let potential_score = state.potential_score(cannon, constants);
        let mut searcher_state = Self {
            state,
            constants,
            cannon,
            predicted_hits: Vec::new(),
            random,
            potential_score,
        };
        // Before we make our first action, the server runs a tick.
        searcher_state.run_one_tick();
        searcher_state
    }

    fn run_one_tick(&mut self) {
        for event in run_server_tick(
            &mut self.state, &mut self.random, self.constants) {
            if let EventInfo::Hit { meteor, .. } = event {
                self.predicted_hits.retain(|&id| id != meteor);
            }
        }
    }

    fn generate_shoot_actions(&self) -> Vec<Action> {
        let mut actions = Vec::new();
        let mut backup_actions = Vec::new();
        let existing: Vec<MeteorVision> = self.state.meteors.iter().cloned()
            .map(|m| MeteorVision::past(m)).collect();
        let upcoming = upcoming_spawns(&self.state, self.random.clone(),
                                       self.cannon, self.constants);

        for meteor_vision in existing.iter().chain(upcoming.iter()) {
            let already_targeted = self.predicted_hits.contains(&meteor_vision.meteor.id);
            if already_targeted {
                continue;
            }
            let target = MovingCircle {
                pos: rewind_pos_for_physics(meteor_vision, self.state.tick),
                vel: meteor_vision.meteor.vel,
                size: self.constants.get_meteor_info(meteor_vision.meteor.typ).size,
            };
            let cannon_pos: Vec2 = self.cannon.position.into();
            let mut shooting_options_taken = 0;
            for aim in get_aim_options(
                &cannon_pos, self.constants.rockets.speed,
                self.constants.rockets.size, &target) {
                let mut shot = TentativeShot {
                    aim: &aim,
                    cannon: self.cannon,
                    constants: self.constants,
                    state: self.state.clone(),
                    target: &meteor_vision,
                };
                if let Some(results) = shot.get_result(self.random.clone()) {
                    let as_expected = results.as_predicted(&self.predicted_hits);
                    let action = Action::Shoot {
                        // Note: deliberately using pre-increment ID here.
                        // apply_actions will update it.
                        target_id: meteor_vision.meteor.id,
                        aim,
                        potential_score: results.score,
                        predicted_hits: results.hits,
                        ticks_until_unshootable: ticks_until_unshootable(
                            meteor_vision, self.cannon, self.constants,
                            self.state.tick),
                    };
                    if as_expected && !already_targeted {
                        actions.push(action);
                    } else {
                        backup_actions.push(action);
                    }
                    shooting_options_taken += 1;
                    if shooting_options_taken >= NUM_SHOOTING_AIM_OPTIONS {
                        break;  // don't consider other shooting options
                    }
                }
            }
        }
        actions.extend(backup_actions);
        actions
    }

    fn generate_hold_action(&self) -> Action {
        let mut state = self.state.clone();
        let mut random = self.random.clone();
        while !state.is_done() {
            if state.rockets.is_empty() {
                break;
            }
            run_server_tick(&mut state, &mut random, self.constants);
        }
        Action::Hold { potential_score: state.score }
    }

    fn apply_shot(&mut self, aim: &Vec2, target_id: Id) {
        self.state.shoot(self.cannon, self.constants, aim, target_id)
            .expect("could not shoot");
    }
}

impl SearchState for SearcherState<'_> {
    type Action = Action;

    fn generate_actions(&self) -> Vec<Self::Action> {
        let mut actions = Vec::new();
        if self.state.cannon_ready() {
            actions.extend(self.generate_shoot_actions());
        }
        actions.push(self.generate_hold_action());
        actions
    }

    fn apply_action(&mut self, action: &Self::Action) {
        match &action {
            Action::Hold { potential_score } => {
                self.potential_score = *potential_score;
            },
            Action::Shoot { aim, potential_score, predicted_hits, target_id, .. } => {
                self.potential_score = *potential_score;
                self.predicted_hits = predicted_hits.clone();
                self.apply_shot(aim, *target_id);
            },
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

    fn greedy_pick_action(&self, actions: &Vec<&Action>) -> usize {
        actions.iter().enumerate()
            .max_by_key(|(idx, &action)| heuristic_sort_key(*idx, action, actions.len()))
            .map(|(idx, _)| idx).unwrap()
    }

    fn is_equivalent(&self, other: &Self) -> bool {
        // Note targets/future ids being different is fine, all we care about is
        // what's on the board (and the random state it assumed). Regardless of
        // what we're aiming at, if those are the same, then the game will
        // develop in the same way.
        self.potential_score == other.potential_score &&
            self.random.state() == other.random.state() &&
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
        h.write_usize(self.random.state());
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
    pub fn get_result(&mut self, rng: GameRandom) -> Option<TentativeShotResults> {
        let rocket_id = self.shoot()?;
        let (score, hits) = self.resolve_simulation(rng);
        Some(TentativeShotResults {
            score, hits,
            rocket_id,
            target_id: self.target_id(),
        })
    }

    /// Shoots a target, returns whether the shot really happened.
    fn shoot(&mut self) -> Option<Id> {
        let event = self.state.shoot(self.cannon, self.constants, self.aim,
                                     self.target_id())?;
        match event {
            EventInfo::Shoot { id, .. } => Some(id),
            _ => panic!("non-shoot event while shooting"),
        }
    }

    fn target_id(&self) -> Id {
        if self.target.is_spawned() {
            self.target.meteor.id
        } else {
            // Our shot rocket will consume an ID that will increase our
            // target's ID.
            self.target.meteor.id + 1
        }
    }

    /// Simulates until all rockets are gone, tracking hits.
    /// Returns the ending score and meteor hit IDs.
    fn resolve_simulation(&mut self, mut rng: GameRandom) -> (Score, Vec<Id>) {
        let mut hits = Vec::new();
        while !self.state.is_done() && !self.state.rockets.is_empty() {
            for event in run_server_tick(&mut self.state, &mut rng, self.constants) {
                if let EventInfo::Hit { meteor, .. } = event {
                    hits.push(meteor);
                }
            }
        }
        (self.state.score, hits)
    }
}

struct TentativeShotResults {
    score: Score,
    hits: Vec<Id>,
    rocket_id: Id,
    target_id: Id,
}

impl TentativeShotResults {
    /// Checks if a list of predicted hit IDs happened as expected.
    /// Helper that takes care of:
    /// - Checking that our 'target_id' was also hit;
    /// - Incrementing the predicted hit IDs that would increase due to our shot
    ///   rocket.
    fn as_predicted(&self, predicted_hits: &Vec<Id>) -> bool {
        let mut predicted_hits = predicted_hits.clone();
        for id in predicted_hits.iter_mut() {
            if *id >= self.rocket_id {
                *id += 1;
            }
        }
        predicted_hits.push(self.target_id);
        predicted_hits.sort();
        let mut hits = self.hits.clone();
        hits.sort();
        hits == predicted_hits
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

/// Finds meteors that will spawn (spawns or splits) in the near future (in the
/// max time that a rocket can travel).
/// Note that future Meteor IDs returned need to be incremented anytime we shoot.
fn upcoming_spawns(
    state: &GameState, mut random: GameRandom, cannon: &Cannon,
    constants: &Constants) -> Vec<MeteorVision> {
    let mut state = state.clone();
    let mut spawns = Vec::new();
    for _ in 0..max_rocket_lifespan(constants, cannon) {
        if state.is_done() {
            break;
        }
        let event_tick = state.tick;
        for event in run_server_tick(&mut state, &mut random, constants) {
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
    spawns
}

/// Maximum number of ticks that a rocket can take to hit a target.
/// Take the distance from the top right corner to the cannon.
fn max_rocket_lifespan(constants: &Constants, cannon: &Cannon) -> Tick {
    let top_right = Vec2::new(max_rocket_x(constants), 0.0);
    let max_range = top_right.distance(&cannon.position.into());
    let ticks = max_range / constants.rockets.speed;
    ticks.ceil() as Tick
}

/// For unspawned meteors, move them back by 'delta_t' so that by the time that
/// their spawn tick happens they will be on their 'pos'.
fn rewind_pos_for_physics(vision: &MeteorVision, current_tick: Tick) -> Vec2 {
    let delta_t = spawn_delta_t(vision, current_tick);
    if delta_t > 0 {
        // Rewind the meteor by '-delta_t', so that at t=spawn_tick the
        // meteor will be on meteor_vision.
        vision.meteor.pos.minus(&vision.meteor.vel.scale(delta_t as f64))
    } else {
        vision.meteor.pos
    }
}

fn spawn_delta_t(vision: &MeteorVision, current_tick: Tick) -> Tick {
    if let Some(spawn_tick) = vision.tick {
        assert!(spawn_tick >= current_tick, "Spawn: {}, Current tick: {}",
                spawn_tick, current_tick);
        spawn_tick - current_tick
    } else {
        0
    }
}

fn ticks_until_unshootable(vision: &MeteorVision, cannon: &Cannon,
                           constants: &Constants, current_tick: Tick) -> Tick {
    let size = constants.get_meteor_info(vision.meteor.typ).size;
    let min_x = cannon.position.x - size - constants.rockets.size;
    let remaining_x = vision.meteor.pos.x - min_x;
    assert!(remaining_x >= 0.0, "Meteor x too small: {:?}, min_x: {}", vision,
            min_x);
    assert!(vision.meteor.vel.x <= 0.0);
    let ticks_x = if vision.meteor.vel.x < 0.0 { remaining_x / (-vision.meteor.vel.x) } else { f64::MAX };
    let ticks_y = if vision.meteor.vel.y > 0.0 {
        let remaining_y = constants.world.height as f64 - vision.meteor.pos.y;
        remaining_y / vision.meteor.vel.y
    } else if vision.meteor.vel.y < 0.0 {
        let remaining_y = vision.meteor.pos.y;
        remaining_y / (-vision.meteor.vel.y)
    } else {
        f64::MAX
    };
    let ticks = ticks_x.min(ticks_y).ceil();
    let ticks = ticks.max(0.0);  // This can happen if the meteor is already off screen
    ticks as Tick + spawn_delta_t(vision, current_tick)
}

fn heuristic_sort_key(action_idx: usize, action: &Action,
                      num_actions: usize) -> (Score, i32, usize) {
    // Note: larger value is prioritized
    (
        // Maximize the score we get from hitting this meteor
        match action {
            Action::Shoot { potential_score, .. } => *potential_score,
            Action::Hold { potential_score } => *potential_score,
        },
        // If shooting, prioritize meteors that will go out of bounds sooner.
        match action {
            Action::Shoot { ticks_until_unshootable, .. } => -(*ticks_until_unshootable as i32),
            Action::Hold { .. } => i32::MIN,
        },
        // Prioritize earlier actions (e.g. real meteors vs. predicted)
        num_actions - action_idx,
    )
}

#[cfg(test)]
mod tests {
    use super::*;
    use rand::SeedableRng;
    use rand::rngs::SmallRng;
    use crate::game_message::{default_game_settings, MeteorType};
    use crate::game_random::GameRandom;
    use crate::seedrandom::SeedRandom;

    #[test]
    fn test_hits_are_correct() {
        let mut random = GameRandom::new(SeedRandom::from_seed(b"MySeed"));
        let mut state = GameState::new(/*first_id=*/0);
        let (constants, cannon) = default_game_settings();
        let search_state = SearcherState::new(
            state.clone(), &constants, &cannon, random.clone());
        let mut noise_rng = SmallRng::seed_from_u64(42);
        let mut mcts = MCTS::new(search_state.clone(), MCTS_OPTIONS);
        for _ in 0..10 {  // run a few iterations
            mcts.run_round(&mut noise_rng);
        }
        let mut actions = mcts.best_actions_sequence();
        let mut repeat_state = search_state;
        actions.reverse();  // reverse so we can pop the actions
        while !state.is_done() {
            for event in run_server_tick(
                &mut state, &mut random, &constants) {
                if let EventInfo::Hit { meteor, .. } = event {
                    assert!(repeat_state.predicted_hits.contains(&meteor),
                            "Hit meteor M{}, which we did not predict.", meteor);
                }
            }
            if state.is_done() { break; }
            let action = actions.pop().unwrap();
            repeat_state.apply_action(&action);
        }
        assert!(repeat_state.predicted_hits.len() == state.rockets.len(),
                "Had {} remaining targets, there are {} remaining rockets. Targets: {:?} Rockets: {:?}",
                repeat_state.predicted_hits.len(), state.rockets.len(),
                repeat_state.predicted_hits, state.rockets);
    }

    #[test]
    fn test_ticks_until_unshootable() {
        let mut cannon = Cannon::default();
        cannon.position.x = 200.0;
        let mut constants = Constants::default();
        constants.world.height = 800;
        constants.meteor_infos.0[MeteorType::Large as usize].size = 50.0;
        let current_tick = 0;

        // Out top, vel x < 0
        assert_eq!(ticks_until_unshootable(
            &MeteorVision::past(Meteor::new(
                    /*id=*/0, /*pos=*/Vec2::new(1000.0, 50.0),
                    /*vel=*/Vec2::new(-1.0, -15.0), MeteorType::Large)),
                    &cannon, &constants, current_tick), 4);
        // Out top, vel x = 0
        assert_eq!(ticks_until_unshootable(
            &MeteorVision::past(Meteor::new(
                    /*id=*/0, /*pos=*/Vec2::new(1000.0, 50.0),
                    /*vel=*/Vec2::new(0.0, -15.0), MeteorType::Large)),
                    &cannon, &constants, current_tick), 4);
        // Out top, unspawned
        let current_tick = 50;
        assert_eq!(ticks_until_unshootable(
            &MeteorVision::future(Meteor::new(
                    /*id=*/0, /*pos=*/Vec2::new(1000.0, 50.0),
                    /*vel=*/Vec2::new(0.0, -15.0), MeteorType::Large),
                    /*spawn_tick=*/100),
                    &cannon, &constants, current_tick), 54);
        // Out bottom, vel x < 0
        assert_eq!(ticks_until_unshootable(
            &MeteorVision::past(Meteor::new(
                    /*id=*/0, /*pos=*/Vec2::new(1000.0, 750.0),
                    /*vel=*/Vec2::new(-1.0, 15.0), MeteorType::Large)),
                    &cannon, &constants, current_tick), 4);
        // Out bottom, vel x = 0
        assert_eq!(ticks_until_unshootable(
            &MeteorVision::past(Meteor::new(
                    /*id=*/0, /*pos=*/Vec2::new(1000.0, 750.0),
                    /*vel=*/Vec2::new(0.0, 15.0), MeteorType::Large)),
                    &cannon, &constants, current_tick), 4);
        // Out bottom, unspawned
        let current_tick = 50;
        assert_eq!(ticks_until_unshootable(
            &MeteorVision::future(Meteor::new(
                    /*id=*/0, /*pos=*/Vec2::new(1000.0, 750.0),
                    /*vel=*/Vec2::new(0.0, 15.0), MeteorType::Large),
                    /*spawn_tick=*/100),
                    &cannon, &constants, current_tick), 54);
        // Out left, vel y != 0
        assert_eq!(ticks_until_unshootable(
            &MeteorVision::past(Meteor::new(
                    /*id=*/0, /*pos=*/Vec2::new(250.0, 400.0),
                    /*vel=*/Vec2::new(-15.0, 1.0), MeteorType::Large)),
                    &cannon, &constants, current_tick), 7);
        // Out left, vel y = 0
        assert_eq!(ticks_until_unshootable(
            &MeteorVision::past(Meteor::new(
                    /*id=*/0, /*pos=*/Vec2::new(250.0, 400.0),
                    /*vel=*/Vec2::new(-15.0, 0.0), MeteorType::Large)),
                    &cannon, &constants, current_tick), 7);
        // Out left, unspawned
        let current_tick = 50;
        assert_eq!(ticks_until_unshootable(
            &MeteorVision::future(Meteor::new(
                    /*id=*/0, /*pos=*/Vec2::new(250.0, 400.0),
                    /*vel=*/Vec2::new(-15.0, 0.0), MeteorType::Large),
                    /*spawn_tick=*/100),
                    &cannon, &constants, current_tick), 57);
    }
}
