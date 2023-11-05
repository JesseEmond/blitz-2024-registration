use criterion::{criterion_group, criterion_main, Criterion, Throughput};

use nostradamus::game_message::default_game_settings;
use nostradamus::game_random::GameRandom;
use nostradamus::mcts::{MCTS, MCTSOptions};
use nostradamus::planner::SearcherState;
use nostradamus::seedrandom::SeedRandom;
use nostradamus::simulate::GameState;

/// MCTS benchmarking on the 'Stardreamer' seed
fn mcts_stardreamer(rounds: usize) -> u32 {
    let rng = GameRandom::new(SeedRandom::from_seed(b"Stardreamer"));
    let (constants, cannon) = default_game_settings();
    let state = GameState::new(/*first_id=*/0);
    let searcher_state = SearcherState::new(state, &constants, &cannon, rng);
    let options = MCTSOptions {
        exploration_multiplier: 0.0,
        random_action_prob: 0.0,
        uncertainty_d: 1.0,
        print_every_n_rounds: None,
        reset_after_n_nodes: None,
    };
    let mut search = MCTS::new(searcher_state, options);
    for _ in 0..rounds {
        search.run_round(&mut rand::thread_rng());
    }
    search.best_seen_score
}

fn criterion_benchmark(c: &mut Criterion) {
    let mut group = c.benchmark_group("mcts-throughput");
    group.sample_size(10);
    const ROUNDS: usize = 100;
    group.throughput(Throughput::Elements(ROUNDS as u64));
    group.bench_function("mcts_stardreamer", |b| b.iter(|| mcts_stardreamer(ROUNDS)));
    group.finish();
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
