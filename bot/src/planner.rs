use std::thread;
use std::time::{Duration, Instant};

use crate::game_message::{Cannon, Constants, Id, Tick};
use crate::game_random::GameRandom;
use crate::game_search_state::{Action, GameSearchState};
use crate::mcts::{MCTS, MCTSOptions};
use crate::search::SearchState;
use crate::simulate::{run_server_tick, EventInfo, GameState};

const MCTS_OPTIONS: MCTSOptions = MCTSOptions {
    exploration_multiplier: 1.0,
    random_action_prob: 0.05,
    uncertainty_d: 10.0,
    print_every_n_rounds: Some(800),
    reset_after_n_nodes: Some(500000),
};
const MCTS_BUDGET: Duration = Duration::from_millis(750);
// Maximum number of threads to spawn. If unset, defaults to num available
// *physical* cores - 1.
// Note that the current MCTS tree is copied this amount of times, so pick
// thresholds accordingly to remain under the desired RAM budget.
const MAX_THREADS: Option<usize> = None;

/// Events at the time where the client would see them (i.e. the tick after
/// they happened). Note that we move forward the meteors in EventInfos by one
/// tick to match what the client would see in the GameMessage JSON (post tick
/// update).
#[derive(Clone, Copy, Debug)]
pub struct Event {
    pub tick: Tick,
    pub info: EventInfo
}

pub struct Planner<'a> {
    pub game_state: GameState,
    pub search_state: GameSearchState<'a>,
    cannon: &'a Cannon,
    constants: &'a Constants,
    random: GameRandom,
    mcts: MCTS<GameSearchState<'a>>,
}

impl<'a> Planner<'a> {
    pub fn new(first_id: Id, cannon: &'a Cannon, constants: &'a Constants,
               random: GameRandom) -> Self {
        let game_state = GameState::new(first_id);
        let search_state = GameSearchState::new(
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
        let mut best_seen_score = self.mcts.best_seen_score;
        self.mcts = self.run_mcts();
        if self.mcts.best_seen_score > best_seen_score {
            best_seen_score = self.mcts.best_seen_score;
            println!("New best: {}", best_seen_score);
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

    fn run_mcts(&self) -> MCTS<GameSearchState<'a>> {
        let parallelism = match MAX_THREADS {
            Some(threads) => threads,
            None => {
                let num_cores = num_cpus::get_physical();
                assert!(num_cores > 0);
                num_cores - 1
            },
        };
        thread::scope(|s| {
            let mut handles = vec![];
            let start = Instant::now();
            for _ in 0..parallelism {
                let mut mcts = self.mcts.clone();
                handles.push(s.spawn(move || {
                    mcts.run_with_budget(&start, MCTS_BUDGET);
                    mcts
                }));
            }
            let mut best_mcts: Option<MCTS<GameSearchState>> = None;
            for h in handles {
                let mcts = h.join().unwrap();
                if best_mcts.as_ref()
                    .map_or(true, |m| mcts.best_seen_score > m.best_seen_score) {
                    best_mcts = Some(mcts);
                }
            }
            best_mcts.unwrap()
        })
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
