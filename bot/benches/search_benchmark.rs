use std::cell::RefCell;
use std::rc::Rc;

use criterion::{criterion_group, criterion_main, Criterion};

use nostradamus::game_message::default_game_settings;
use nostradamus::game_random::GameRandom;
use nostradamus::planner::SearcherState;
use nostradamus::seedrandom::SeedRandom;
use nostradamus::search::BeamSearch;
use nostradamus::simulate::GameState;

/// Search benchmarking on the 'Stardreamer' seed
fn search_stardreamer() -> u64 {
    let rng = GameRandom::new(SeedRandom::from_seed(b"Stardreamer"));
    let (constants, cannon) = default_game_settings();
    let state = GameState::new(/*first_id=*/0);
    let searcher_state = SearcherState::new(
        state, &constants, &cannon, Rc::new(RefCell::new(rng)));
    let mut beam_search = BeamSearch::new(searcher_state);
    beam_search.search(/*verbose=*/false);
    assert_eq!(beam_search.best_evaluation, 4695);
    beam_search.best_evaluation
}

fn criterion_benchmark(c: &mut Criterion) {
    let mut group = c.benchmark_group("reduce-sampled-size");
    group.sample_size(10);
    group.bench_function("search_stardreamer", |b| b.iter(|| search_stardreamer()));
    group.finish();
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
