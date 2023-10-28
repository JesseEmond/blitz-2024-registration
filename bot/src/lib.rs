extern crate pyo3;
extern crate rc4;
extern crate serde;
extern crate serde_json;

pub mod game_message;
pub mod game_random;
pub mod physics;
pub mod planner;
pub mod seedrandom;
pub mod simulate;
pub mod spawn_schedule;
pub mod vec2;

use pyo3::prelude::*;
use pyo3::exceptions::PyValueError;

use crate::game_message::GameMessage;
use crate::game_random::GameRandom;
use crate::planner::{Event, Planner};
use crate::simulate::{EventInfo};

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
        let mut planner = Planner::new();
        let state = self.random.save_state();
        let first_id: u32 = self.game_first_tick.meteors[0].projectile.id
            .parse().unwrap();
        let plan = planner.plan(
            &self.game_first_tick.cannon, &self.game_first_tick.constants, first_id,
            &mut self.random);
        println!("Final score: {}", plan.score);
        self.random.restore_state(state);
        plan.events.iter().map(|&e| PlanEvent(e)).collect()
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
pub struct Hit {
    #[pyo3(get)]
    pub rocket_id: String,
    #[pyo3(get)]
    pub meteor_id: String,
}

#[pymethods]
impl Hit {
    fn __repr__(&self) -> String {
        format!("Hit(rocket_id={}, meteor_id={})", self.rocket_id, self.meteor_id)
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

#[pyclass(extends=EventBase, subclass)]
pub struct Split {
    #[pyo3(get)]
    pub id: String,
    #[pyo3(get)]
    pub parent_id: String,
    #[pyo3(get)]
    pub position: (f64, f64),
    #[pyo3(get)]
    pub velocity: (f64, f64),
}

#[pymethods]
impl Split {
    fn __repr__(&self) -> String {
        format!("Split(id={}, parent={}, pos={:?}, vel={:?})",
            self.id, self.parent_id, self.position, self.velocity)
    }
}

impl IntoPy<PyObject> for PlanEvent {
    fn into_py(self, py: Python<'_>) -> PyObject {
        match self.0.info {
            EventInfo::MeteorSpawn { id, pos, vel, .. } => {
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
            EventInfo::Hit { rocket, meteor } => {
                Py::new(py, PyClassInitializer::from(EventBase {
                    tick: self.0.tick,
                    event_type: "Hit".to_string()
                }).add_subclass(Hit {
                    rocket_id: rocket.to_string(),
                    meteor_id: meteor.to_string(),
                }))
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
            EventInfo::MeteorSplit { id, parent_id, pos, vel, .. } => {
                Py::new(py, PyClassInitializer::from(EventBase {
                    tick: self.0.tick,
                    event_type: "Split".to_string()
                }).add_subclass(Split {
                    id: id.to_string(),
                    parent_id: parent_id.to_string(),
                    position: (pos.x, pos.y),
                    velocity: (vel.x, vel.y)
                })).unwrap().into_py(py)
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
