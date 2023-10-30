/// Runs all the known seeds to get the best score for each.

use std::io::Write;
use std::time::{Instant};

use nostradamus::game_message::default_game_settings;
use nostradamus::game_random::{GameRandom, OBSERVED_SEEDS};
use nostradamus::planner::{Planner};
use nostradamus::seedrandom::SeedRandom;

fn main() {
    let first_id = 0;
    let (constants, cannon) = default_game_settings();
    let longest_seed = OBSERVED_SEEDS.iter().map(|s| s.len()).max().unwrap();
    // TODO: make single seed an arg optional
    for &seed in OBSERVED_SEEDS {
        print!("Seed {:0length$} = ",
               String::from_utf8(seed.iter().cloned().collect()).unwrap(),
               length=longest_seed);
        std::io::stdout().flush().unwrap();
        let start = Instant::now();
        let random = GameRandom::new(SeedRandom::from_seed(seed));
        let mut planner = Planner::new();
        let plan = planner.plan(&cannon, &constants, first_id, random);
        let duration = start.elapsed();
        println!("{} (took {:?})", plan.score, duration);
    }
}
