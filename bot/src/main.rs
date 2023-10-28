/// Runs all the known seeds to get the best score for each.

use std::collections::HashMap;
use std::io::Write;
use std::time::{Instant};

use nostradamus::game_message::{Cannon, Constants, ExplosionInfos, MeteorInfos, MeteorType, RocketsConstants, Vector, WorldConstants};
use nostradamus::game_random::{GameRandom, OBSERVED_SEEDS};
use nostradamus::planner::{Planner};
use nostradamus::seedrandom::SeedRandom;

fn main() {
    let first_id = 0;
    let cannon = Cannon {
        position: Vector { x: 140.0, y: 400.0 },
        orientation: 0.0,
        cooldown: 0,
    };
    let constants = Constants {
        world: WorldConstants { width: 1200, height: 800 },
        rockets: RocketsConstants { speed: 20.0, size: 5.0 },
        cannon_cooldown_ticks: 10,
        meteor_infos: HashMap::from([
            (MeteorType::Large, MeteorInfos {
                score: 15.0,
                size: 40.0,
                approximate_speed: 3.0,
                explodes_into: vec![
                    ExplosionInfos { meteor_type: MeteorType::Medium, approximate_angle: -18.0 },
                    ExplosionInfos { meteor_type: MeteorType::Medium, approximate_angle: 18.0 },
                ],
            }),
            (MeteorType::Medium, MeteorInfos {
                score: 40.0,
                size: 20.0,
                approximate_speed: 9.0,
                explodes_into: vec![
                    ExplosionInfos { meteor_type: MeteorType::Small, approximate_angle: -30.0 },
                    ExplosionInfos { meteor_type: MeteorType::Small, approximate_angle: 0.0 },
                    ExplosionInfos { meteor_type: MeteorType::Small, approximate_angle: 30.0 },
                ],
            }),
            (MeteorType::Small, MeteorInfos {
                score: 60.0,
                size: 5.0,
                approximate_speed: 13.0,
                explodes_into: vec![],
            }),
        ]),
    };
    let longest_seed = OBSERVED_SEEDS.iter().map(|s| s.len()).max().unwrap();
    for &seed in OBSERVED_SEEDS {
        print!("Seed {:0length$} = ",
               String::from_utf8(seed.iter().cloned().collect()).unwrap(),
               length=longest_seed);
        std::io::stdout().flush().unwrap();
        let start = Instant::now();
        let mut random = GameRandom::new(SeedRandom::from_seed(seed));
        let mut planner = Planner::new();
        let plan = planner.plan(&cannon, &constants, first_id, &mut random);
        let duration = start.elapsed();
        println!("{} (took {:?})", plan.score, duration);
    }
}
