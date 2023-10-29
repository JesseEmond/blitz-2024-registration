use std::cell::RefCell;
use std::rc::Rc;

use criterion::{criterion_group, criterion_main, Criterion};

use nostradamus::game_message::default_game_settings;
use nostradamus::game_random::GameRandom;
use nostradamus::mcts::MCTS;
use nostradamus::planner::SearcherState;
use nostradamus::seedrandom::SeedRandom;
use nostradamus::simulate::GameState;

/// MCTS benchmarking on the 'Stardreamer' seed
fn mcts_stardreamer() -> u64 {
    let rng = GameRandom::new(SeedRandom::from_seed(b"Stardreamer"));
    let (constants, cannon) = default_game_settings();
    let state = GameState::new(/*first_id=*/0);
    let searcher_state = SearcherState::new(
        state, &constants, &cannon, Rc::new(RefCell::new(rng)));
    let mut search = MCTS::new(searcher_state);
    for _ in 0..10000 {
        search.run_round();
    }
    // TODO: return best score
    0
}

fn criterion_benchmark(c: &mut Criterion) {
    c.bench_function("mcts_stardreamer", |b| b.iter(|| mcts_stardreamer()));
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
