extern crate pyo3;
extern crate rc4;
extern crate serde;
extern crate serde_json;

mod game_message;
mod game_random;
mod seedrandom;
mod spawn_schedule;
mod vec2;

use pyo3::prelude::*;
use pyo3::exceptions::PyValueError;

use crate::game_message::GameMessage;
use crate::game_random::GameRandom;

#[pyclass]
pub struct Nostradamus {
    game_first_tick: GameMessage,
    random: GameRandom,
}

#[pymethods]
impl Nostradamus {
    #[new]
    pub fn new(game_json: String) -> PyResult<Self> {
        match serde_json::from_str(&game_json) {
            Ok(game_message) => {
                let random = GameRandom::infer_from_known_seeds(&game_message);
                Ok(Self { random, game_first_tick: game_message })
            },
            Err(e) => Err(PyValueError::new_err(e.to_string())),
        }
    }
}

#[pymodule]
fn nostradamus(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_class::<Nostradamus>()?;
    Ok(())
}
