// Based on known possible server seeds, infer what seed was picked (and the RNG
// state) based on the first observed meteor.
use crate::seedrandom::SeedRandom;
use crate::vec2::Vec2;

pub struct GameRandom {
    rng: SeedRandom,
}

const OBSERVED_SEEDS: &[&[u8]] = &[b"Stardreamer"];
// Found from decompiling the embedded V8 bytecode of the local challenge binary.
const METEOR_GENERATION_CONE_ANGLE: f64 = 30f64;
const FLOAT_EQ_EPS: f64 = 1e-8;

impl GameRandom {
    pub fn infer_from_known_seeds(
        game_width: usize, game_height: usize, large_meteor_speed: f64,
        first_meteor_pos: &Vec2, first_meteor_vel: &Vec2) -> Self {
        Self::infer_from_seeds(game_width, game_height, large_meteor_speed,
                               first_meteor_pos, first_meteor_vel, OBSERVED_SEEDS)
            .unwrap_or_else(|| panic!(
                "Did not recover seed. First meteor pos: {:?} vel: {:?}. \
                Check server game logs and update OBSERVED_SEEDS in file \
                'game_random.rs'.",
                first_meteor_pos, first_meteor_vel))
    }

    pub fn infer_from_seeds(
        game_width: usize, game_height: usize, large_meteor_speed: f64,
        first_meteor_pos: &Vec2, first_meteor_vel: &Vec2,
        seeds: &[&[u8]]) -> Option<Self> {
        for seed in seeds {
            let mut rng = SeedRandom::from_seed(seed);
            let mut pos = Vec2 {
                x: (game_width + 50) as f64,
                y: (game_height as f64) * rng.random(),
            };
            let r = rng.random() * 50f64 + 50f64;
            let degrees = 180f64 - METEOR_GENERATION_CONE_ANGLE / 2f64
                  + rng.random() * METEOR_GENERATION_CONE_ANGLE;
            let mut vel = Vec2::from_polar(r, degrees.to_radians());
            // The following is done as part of Meteor Build
            let multiplier = rng.random() * 0.4 + 0.8;  // +- 20%
            vel = vel.normalized().scale(large_meteor_speed * multiplier);
            pos = pos.add(&vel);
            if (pos.within_range(first_meteor_pos, FLOAT_EQ_EPS) &&
                vel.within_range(first_meteor_vel, FLOAT_EQ_EPS)) {
                return Some(Self { rng });
            }
        }
        None
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_fixed_seed() {
        // Values taken from running a game with seed 'MyTestSeed' and printing
        // the first visible meteor.
        assert!(GameRandom::infer_from_seeds(
            1200, 800, 3.0,
            &Vec2::new(1247.2816883263476f64, 793.7791526132554f64),
            &Vec2::new(-2.718311673652447f64, 0.38210405704085765f64),
            &[b"wrong seed", b"still wrong", b"MyTestSeed"]
            ).is_some());
    }
}
