/// Runs all the known seeds to get the best score for each.

use std::env;
use std::io::Write;
use std::time::{Instant};

use nostradamus::game_message::{default_game_settings};
use nostradamus::game_random::{GameRandom, OBSERVED_SEEDS};
use nostradamus::planner::{Planner};
use nostradamus::seedrandom::SeedRandom;

fn main() {
    let first_id = 0;
    let (constants, cannon) = default_game_settings();
    let mut scores = Vec::new();
    let mut seeds: Vec<Vec<u8>> = Vec::new();
    if env::args().len() == 2 {
        seeds.push(env::args().nth(1).unwrap().into_bytes());
    } else {
        seeds.extend(
            OBSERVED_SEEDS.iter().map(|&s| s.iter().cloned().collect::<Vec<u8>>())
            .collect::<Vec<Vec<u8>>>());
    }
    let longest_seed = seeds.iter().map(|s| s.len()).max().unwrap();
    for seed in seeds {
        print!("Seed {:0length$} = ",
               String::from_utf8(seed.iter().cloned().collect()).unwrap(),
               length=longest_seed);
        std::io::stdout().flush().unwrap();
        let start = Instant::now();
        let random = GameRandom::new(SeedRandom::from_seed(&seed));
        let mut planner = Planner::new();
        let plan = planner.plan(&cannon, &constants, first_id, random);
        let duration = start.elapsed();
        println!("{} (took {:?})", plan.score, duration);
        scores.push(plan.score);
    }
    println!("Max score: {}", scores.iter().max().unwrap());
}
