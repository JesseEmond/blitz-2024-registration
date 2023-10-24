extern crate pyo3;
extern crate rc4;

mod game_random;
mod seedrandom;
mod vec2;

use pyo3::prelude::*;

use crate::game_random::GameRandom;
use crate::seedrandom::SeedRandom;
use crate::vec2::Vec2;

#[pyclass]
#[derive(Clone)]
pub struct NostradamusInit {
    #[pyo3(get, set)]
    pub game_width: usize,
    #[pyo3(get, set)]
    pub game_height: usize,
    #[pyo3(get, set)]
    pub large_meteor_speed: f64,
    #[pyo3(get, set)]
    pub first_meteor_pos: (f64, f64),
    #[pyo3(get, set)]
    pub first_meteor_vel: (f64, f64),
}

#[pymethods]
impl NostradamusInit {
    #[new]
    pub fn new(
        game_width: usize, game_height: usize, large_meteor_speed: f64,
        first_meteor_pos: (f64, f64), first_meteor_vel: (f64, f64)) -> Self {
        Self {
            game_width, game_height, large_meteor_speed,
            first_meteor_pos, first_meteor_vel
        }
    }
}

#[pyclass]
pub struct Nostradamus {
    random: GameRandom,
}

#[pymethods]
impl Nostradamus {
    #[new]
    pub fn new(init: NostradamusInit) -> Self {
        Self {
            random: GameRandom::infer_from_known_seeds(
                init.game_width, init.game_height, init.large_meteor_speed,
                &Vec2::new(init.first_meteor_pos.0, init.first_meteor_pos.1),
                &Vec2::new(init.first_meteor_vel.0, init.first_meteor_vel.1))
        }
    }
}

#[pymodule]
fn nostradamus(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_class::<NostradamusInit>()?;
    m.add_class::<Nostradamus>()?;
    Ok(())
}
