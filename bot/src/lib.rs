extern crate pyo3;

use pyo3::prelude::*;

#[pyfunction]
fn hello_world(a: isize) -> PyResult<isize> {
    println!("Hello world from Rust!");
    Ok(a)
}

#[pymodule]
fn nostradamus(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(hello_world, m)?)?;
    Ok(())
}
