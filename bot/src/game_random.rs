// Based on known possible server seeds, infer what seed was picked (and the RNG
// state) based on the first observed meteor.
use crate::game_message::{Constants, GameMessage, MeteorType};
use crate::seedrandom::SeedRandom;
use crate::vec2::Vec2;

pub struct MeteorSpawn {
    pos: Vec2,
    vel: Vec2,
}

struct RandomPool {
    rng: SeedRandom,
    // Pool of generated random numbers. Used to go forward/backward in history.
    pool: Vec<f64>,
    // Index within the pool.
    index: usize,
}

impl RandomPool {
    fn new(mut rng: SeedRandom) -> Self {
        let pool = vec![rng.random()];
        Self { rng, pool, index: 0 }
    }

    fn next_random(&mut self) -> f64 {
        let out = self.pool[self.index];
        self.index += 1;
        if self.index == self.pool.len() {
            // TODO: Generate a chunk instead of just 1?
            self.pool.push(self.rng.random());
        }
        out
    }

    fn save(&self) -> usize {
        self.index
    }

    fn restore(&mut self, saved: usize) {
        assert!(saved < self.pool.len());
        self.index = saved;
    }
}

pub struct GameRandom {
    pool: RandomPool,
}

const OBSERVED_SEEDS: &[&[u8]] = &[b"Stardreamer"];
// Found from decompiling the embedded V8 bytecode of the local challenge binary.
const METEOR_GENERATION_CONE_ANGLE: f64 = 30f64;
const FLOAT_EQ_EPS: f64 = 1e-8;

impl GameRandom {
    pub fn new(mut rng: SeedRandom) -> Self {
        Self { pool: RandomPool::new(rng) }
    }

    pub fn next_spawn(&mut self, constants: &Constants) -> MeteorSpawn {
        let mut pos = Vec2 {
            x: (constants.world.width + 50) as f64,
            y: (constants.world.height as f64) * self.pool.next_random(),
        };
        // Note that this 'r' is effectively useless, since Meteor Build will
        // rescale it based on 'speed' +- noise, but we include it to keep the
        // same number of 'random()' calls.
        let r = self.pool.next_random() * 50f64 + 50f64;
        let degrees = 180f64 - METEOR_GENERATION_CONE_ANGLE / 2f64
              + self.pool.next_random() * METEOR_GENERATION_CONE_ANGLE;
        let mut vel = Vec2::from_polar(r, degrees.to_radians());
        // The following is done as part of Meteor Build
        let large_meteor_info = &constants.meteor_infos[&MeteorType::Large];
        let large_meteor_speed = large_meteor_info.approximate_speed;
        let multiplier = self.pool.next_random() * 0.4 + 0.8;  // +- 20%
        vel = vel.normalized().scale(large_meteor_speed * multiplier);
        pos = pos.add(&vel);  // update is called right after spawn
        MeteorSpawn { pos: pos, vel: vel }
    }

    // TODO: add next_splits

    /// Save the state of the randomness, to 'restore_state' later.
    pub fn save_state(&self) -> usize {
        self.pool.save()
    }

    /// Restore a saved random state.
    pub fn restore_state(&mut self, saved_state: usize) {
        self.pool.restore(saved_state);
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
            let mut rng = SeedRandom::from_seed(seed);
            let mut game_rand = Self::new(rng);
            let start_state = game_rand.save_state();
            let spawn = game_rand.next_spawn(&game.constants);
            if spawn.pos.within_range(&pos, FLOAT_EQ_EPS) &&
               spawn.vel.within_range(&vel, FLOAT_EQ_EPS) {
                game_rand.restore_state(start_state);
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
        game.constants.meteor_infos.insert(MeteorType::Large, Default::default());
        game.constants.meteor_infos.get_mut(&MeteorType::Large).unwrap().approximate_speed = 3.0;
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
        let spawn = random.next_spawn(&game.constants);
        let pos: Vec2 = game.meteors[0].projectile.position.into();
        let vel: Vec2 = game.meteors[0].projectile.velocity.into();
        assert!(spawn.pos.within_range(&pos, FLOAT_EQ_EPS),
            "Spawn pos: {:?} vs. expected {:?}", spawn.pos, pos);
        assert!(spawn.vel.within_range(&vel, FLOAT_EQ_EPS),
            "Spawn vel: {:?} vs. expected {:?}", spawn.vel, vel);
    }
}
