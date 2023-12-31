// Based on known possible server seeds, infer what seed was picked (and the RNG
// state) based on the first observed meteor.
use std::sync::{Arc, Mutex};

use crate::game_message::{Constants, GameMessage, MeteorType};
use crate::seedrandom::SeedRandom;
use crate::vec2::Vec2;

pub struct MeteorSpawn {
    pub pos: Vec2,
    pub vel: Vec2,
}

pub struct MeteorSplit {
    pub pos: Vec2,
    pub vel: Vec2,
    pub typ: MeteorType,
}

#[derive(Clone)]
struct RandomPool {
    rng: SeedRandom,
    // Pool of generated random numbers. Used to go forward/backward in history.
    pool: Vec<f64>,
}

impl RandomPool {
    fn new(rng: SeedRandom) -> Self {
        Self { rng, pool: Vec::new() }
    }

    fn random(&mut self, index: usize) -> f64 {
        while index >= self.pool.len() {
            self.pool.push(self.rng.random());
        }
        self.pool[index]
    }
}

#[derive(Clone)]
pub struct GameRandom {
    pool: Arc<Mutex<RandomPool>>,
    rand_index: usize,
}

// Collected from playing games on the server. The number of maps is a
// relatively small set.
pub const OBSERVED_SEEDS: &[&[u8]] = &[
    b"Stardreamer", b"Nova_Explorer", b"Celestial_Voyager",
    b"Galactic_Guardian", b"Solar_Serenity"];
// Found from decompiling the embedded V8 bytecode of the local challenge binary.
const METEOR_GENERATION_CONE_ANGLE: f64 = 30f64;
const FLOAT_EQ_EPS: f64 = 1e-8;

impl GameRandom {
    pub fn new(rng: SeedRandom) -> Self {
        Self {
            pool: Arc::new(Mutex::new(RandomPool::new(rng))),
            rand_index: 0
        }
    }

    fn next_random(&mut self) -> f64 {
        let out = self.pool.lock().unwrap().random(self.rand_index);
        self.rand_index += 1;
        out
    }

    pub fn next_spawn(&mut self, constants: &Constants) -> MeteorSpawn {
        let pos = Vec2 {
            x: (constants.world.width + 50) as f64,
            y: (constants.world.height as f64) * self.next_random(),
        };
        // Note that this 'r' is effectively useless, since Meteor Build will
        // rescale it based on 'speed' +- noise, but we include it to keep the
        // same number of 'random()' calls.
        let r = self.next_random() * 50f64 + 50f64;
        let degrees = 180f64 - METEOR_GENERATION_CONE_ANGLE / 2f64
              + self.next_random() * METEOR_GENERATION_CONE_ANGLE;
        let mut vel = Vec2::from_polar(r, degrees.to_radians());
        let large_meteor_info = constants.get_meteor_info(MeteorType::Large);
        let speed = large_meteor_info.approximate_speed * self.next_speed_multiplier();
        vel = vel.normalized().scale(speed);
        MeteorSpawn { pos, vel }
    }

    pub fn next_splits(&mut self, hit_pos: &Vec2, parent_vel: &Vec2,
                       parent_type: MeteorType, constants: &Constants) -> Vec<MeteorSplit> {
        let mut splits = Vec::new();
        for explosion in &constants.get_meteor_info(parent_type).explodes_into {
            let child_info = constants.get_meteor_info(explosion.meteor_type);
            let radians = explosion.approximate_angle.to_radians();
            let child_dir = parent_vel.rotate(radians).normalized();
            let child_speed = child_info.approximate_speed * self.next_speed_multiplier();
            let child_vel = child_dir.scale(child_speed);
            splits.push(MeteorSplit {
                pos: *hit_pos,
                vel: child_vel,
                typ: explosion.meteor_type,
            });
        }
        splits
    }

    /// Next speed multiplier to apply to a new meteor's speed.
    pub fn next_speed_multiplier(&mut self) -> f64 {
        // The following is done as part of Meteor Build
        self.next_random() * 0.4 + 0.8  // +- 20%
    }

    pub fn state(&self) -> usize {
        self.rand_index
    }

    pub fn infer_from_known_seeds(game: &GameMessage) -> Self {
        Self::infer_from_seeds(game, OBSERVED_SEEDS)
            .unwrap_or_else(|| panic!(
                "Did not recover seed. First meteor pos: {:?} vel: {:?}. \
                Check server game logs and update OBSERVED_SEEDS in file \
                'game_random.rs'.",
                game.meteors[0].projectile.position,
                game.meteors[0].projectile.velocity))
    }

    pub fn infer_from_seeds(game: &GameMessage,
                            seeds: &[&[u8]]) -> Option<Self> {
        let first_meteor = &game.meteors[0].projectile;
        let pos: Vec2 = first_meteor.position.into();
        let vel: Vec2 = first_meteor.velocity.into();
        for seed in seeds {
            let mut game_rand = Self::new(SeedRandom::from_seed(seed));
            let mut spawn = game_rand.next_spawn(&game.constants);
            // Update is called after spawn before we get the tick info.
            spawn.pos = spawn.pos.add(&spawn.vel);
            if spawn.pos.within_range(&pos, FLOAT_EQ_EPS) &&
               spawn.vel.within_range(&vel, FLOAT_EQ_EPS) {
                game_rand.rand_index = 0;  // Reset the random to the first value
                return Some(game_rand);
            }
        }
        None
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::game_message::{GameMessage, Meteor, Vector};

    const FIXED_SEED: &[u8] = b"MyTestSeed";

    /// Creates the first tick GameMessage (partial) of a fixed seed
    /// 'MyTestSeed' (FIXED_SEED), obtained by printing a game ran locally.
    fn fixed_seed_game() -> GameMessage {
        let mut game: GameMessage = Default::default();
        game.constants.world.width = 1200;
        game.constants.world.height = 800;
        game.constants.meteor_infos.0[MeteorType::Large as usize].approximate_speed = 3.0;
        let mut meteor: Meteor = Default::default();
        meteor.projectile.position = Vector {
            x: 1247.2816883263476f64,
            y: 793.7791526132554f64
        };
        meteor.projectile.velocity = Vector {
            x: -2.718311673652447f64,
            y: 0.38210405704085765f64
        };
        game.meteors.push(meteor);
        game
    }

    #[test]
    fn test_infer_from_seeds_known_seed() {
        assert!(GameRandom::infer_from_seeds(
            &fixed_seed_game(), &[b"wrong seed", b"still wrong", FIXED_SEED]
            ).is_some());
    }

    #[test]
    fn test_infer_from_seeds_rewinds_random() {
        let game = fixed_seed_game();
        let mut random = GameRandom::infer_from_seeds(&game, &[FIXED_SEED])
            .unwrap();
        // Check that the first spawn gives the same meteor, again.
        let mut spawn = random.next_spawn(&game.constants);
        spawn.pos = spawn.pos.add(&spawn.vel);
        let pos: Vec2 = game.meteors[0].projectile.position.into();
        let vel: Vec2 = game.meteors[0].projectile.velocity.into();
        assert!(spawn.pos.within_range(&pos, FLOAT_EQ_EPS),
            "Spawn pos: {:?} vs. expected {:?}", spawn.pos, pos);
        assert!(spawn.vel.within_range(&vel, FLOAT_EQ_EPS),
            "Spawn vel: {:?} vs. expected {:?}", spawn.vel, vel);
    }
}
