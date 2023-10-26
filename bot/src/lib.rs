extern crate pyo3;
extern crate rc4;
extern crate serde;
extern crate serde_json;

mod game_message;
mod game_random;
mod planner;
mod seedrandom;
mod spawn_schedule;
mod vec2;

use pyo3::prelude::*;
use pyo3::exceptions::PyValueError;

use crate::game_message::GameMessage;
use crate::game_random::GameRandom;
use crate::planner::{Event, EventInfo, Planner};
use crate::vec2::Vec2;

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

    pub fn plan(&mut self) -> Vec<PyEventWrapper> {
        let planner = Planner {};
        let state = self.random.save_state();
        let events = planner.plan(&self.game_first_tick.constants,
                                  &mut self.random);
        self.random.restore_state(state);
        events.iter().map(|&e| PyEventWrapper(e)).collect()
    }
}

pub struct PyEventWrapper(Event);

#[pyclass(subclass)]
pub struct EventBase {
    #[pyo3(get)]
    pub tick: u16,
    #[pyo3(get)]
    pub event_type: String,
}

#[pyclass(extends=EventBase, subclass)]
pub struct MeteorSpawn {
    #[pyo3(get)]
    pub id: String,
    #[pyo3(get)]
    pub position: (f64, f64),
    #[pyo3(get)]
    pub velocity: (f64, f64),
}

impl MeteorSpawn {
    fn new(tick: u16, id: u16, pos: Vec2, vel: Vec2) -> (Self, EventBase) {
        (MeteorSpawn {
            id: id.to_string(),
            position: (pos.x, pos.y),
            velocity: (vel.x, vel.y),
        }, EventBase { tick, event_type: "MeteorSpawn".to_string() })
    }
}

impl IntoPy<PyObject> for PyEventWrapper {
    fn into_py(self, py: Python<'_>) -> PyObject {
        let (subclass, baseclass) = match self.0.info {
            EventInfo::MeteorSpawn { id, pos, vel } => MeteorSpawn::new(self.0.tick, id, pos, vel),
        };
        let initializer = PyClassInitializer::from(baseclass)
            .add_subclass(subclass);
        Py::new(py, initializer).unwrap().into_py(py)
    }
}

#[pymodule]
fn nostradamus(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_class::<Nostradamus>()?;
    Ok(())
}
