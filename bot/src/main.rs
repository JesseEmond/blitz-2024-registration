/// Runs all the known seeds to get the best score for each.

use std::cell::RefCell;
use std::io::Write;
use std::rc::Rc;
use std::time::{Instant};

use nostradamus::game_message::{Cannon, Constants, Vector};
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
    let constants: Constants = serde_json::from_str(r#"{
        "world": { "width": 1200, "height": 800 },
        "rockets": { "speed": 20.0, "size": 5.0 },
        "cannonCooldownTicks": 10,
        "meteorInfos": {
            "LARGE": {
                "score": 15.0,
                "size": 40.0,
                "approximateSpeed": 3.0,
                "explodesInto": [
                    { "meteorType": "MEDIUM", "approximateAngle": -18.0 },
                    { "meteorType": "MEDIUM", "approximateAngle": 18.0 }
                ]
            },
            "MEDIUM": {
                "score": 40.0,
                "size": 20.0,
                "approximateSpeed": 9.0,
                "explodesInto": [
                    { "meteorType": "SMALL", "approximateAngle": -30.0 },
                    { "meteorType": "SMALL", "approximateAngle": 0.0 },
                    { "meteorType": "SMALL", "approximateAngle": 30.0 }
                ]
            },
            "SMALL": {
                "score": 60.0,
                "size": 5.0,
                "approximateSpeed": 13.0,
                "explodesInto": []
            }
        }
    }"#).unwrap();
    let longest_seed = OBSERVED_SEEDS.iter().map(|s| s.len()).max().unwrap();
    for &seed in OBSERVED_SEEDS {
        print!("Seed {:0length$} = ",
               String::from_utf8(seed.iter().cloned().collect()).unwrap(),
               length=longest_seed);
        std::io::stdout().flush().unwrap();
        let start = Instant::now();
        let random = GameRandom::new(SeedRandom::from_seed(seed));
        let mut planner = Planner::new();
        let plan = planner.plan(&cannon, &constants, first_id,
                                Rc::new(RefCell::new(random)));
        let duration = start.elapsed();
        println!("{} (took {:?})", plan.score, duration);
    }
}
