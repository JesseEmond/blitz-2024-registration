extern crate pyo3;
extern crate rc4;
extern crate serde;
extern crate serde_json;

mod game_message;
mod game_random;
mod physics;
mod planner;
mod seedrandom;
mod simulate;
mod spawn_schedule;
mod vec2;

use pyo3::prelude::*;
use pyo3::exceptions::PyValueError;

use crate::game_message::GameMessage;
use crate::game_random::GameRandom;
use crate::planner::Planner;
use crate::simulate::{Event, EventInfo};

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

    pub fn plan(&mut self) -> Vec<PlanEvent> {
        let planner = Planner {};
        let state = self.random.save_state();
        let first_id: u32 = self.game_first_tick.meteors[0].projectile.id
            .parse().unwrap();
        let events = planner.plan(
            &self.game_first_tick.cannon, &self.game_first_tick.constants, first_id,
            &mut self.random);
        self.random.restore_state(state);
        events.iter().map(|&e| PlanEvent(e)).collect()
    }
}

pub struct PlanEvent(Event);

#[pyclass(name="Event", subclass)]
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

#[pymethods]
impl MeteorSpawn {
    fn __repr__(&self) -> String {
        format!("MeteorSpawn(id={}, pos={:?}, vel={:?})",
            self.id, self.position, self.velocity)
    }
}

#[pyclass(extends=EventBase, subclass)]
pub struct MeteorMiss {
    #[pyo3(get)]
    pub id: String,
}

#[pymethods]
impl MeteorMiss {
    fn __repr__(&self) -> String {
        format!("MeteorMiss(id={})", self.id)
    }
}

#[pyclass(extends=EventBase, subclass)]
pub struct Shoot {
    #[pyo3(get)]
    pub id: String,
    #[pyo3(get)]
    pub position: (f64, f64),
    #[pyo3(get)]
    pub target_id: String,
}

#[pymethods]
impl Shoot {
    fn __repr__(&self) -> String {
        format!("Shoot(id={}, pos={:?}, target={:?})", self.id, self.position,
                self.target_id)
    }
}

impl IntoPy<PyObject> for PlanEvent {
    fn into_py(self, py: Python<'_>) -> PyObject {
        match self.0.info {
            EventInfo::MeteorSpawn { id, pos, vel } => {
                Py::new(py, PyClassInitializer::from(EventBase {
                    tick: self.0.tick,
                    event_type: "MeteorSpawn".to_string()
                }).add_subclass(MeteorSpawn {
                    id: id.to_string(),
                    position: (pos.x, pos.y),
                    velocity: (vel.x, vel.y)
                })).unwrap().into_py(py)
            },
            EventInfo::MeteorMiss { id } => {
                Py::new(py, PyClassInitializer::from(EventBase {
                    tick: self.0.tick,
                    event_type: "MeteorMiss".to_string()
                }).add_subclass(MeteorMiss { id: id.to_string(), }))
                .unwrap().into_py(py)
            },
            EventInfo::Shoot { id, pos, target_id } => {
                Py::new(py, PyClassInitializer::from(EventBase {
                    tick: self.0.tick,
                    event_type: "Shoot".to_string()
                }).add_subclass(Shoot {
                    id: id.to_string(),
                    position: (pos.x, pos.y),
                    target_id: target_id.to_string(),
                }))
                .unwrap().into_py(py)
            },
        }
    }
}

#[pymodule]
fn nostradamus(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_class::<Nostradamus>()?;
    m.add_class::<EventBase>()?;
    Ok(())
}
