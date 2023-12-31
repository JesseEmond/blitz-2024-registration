use crate::game_message::Vector;

#[derive(Clone, Copy, Debug, PartialEq)]
pub struct Vec2 {
    pub x: f64,
    pub y: f64,
}

impl Vec2 {
    pub fn new(x: f64, y: f64) -> Self {
        Self { x, y }
    }

    pub fn from_polar(r: f64, phi: f64) -> Self {
        Self { x: r * phi.cos(), y: r * phi.sin() }
    }

    pub fn add(&self, other: &Self) -> Self {
        Self { x: self.x + other.x, y: self.y + other.y }
    }

    pub fn minus(&self, other: &Self) -> Self {
        Self { x: self.x - other.x, y: self.y - other.y }
    }

    pub fn dot(&self, other: &Self) -> f64 {
        self.x * other.x + self.y * other.y
    }
    
    pub fn len_sq(&self) -> f64 {
        self.x * self.x + self.y * self.y
    }

    pub fn len(&self) -> f64 {
        self.len_sq().sqrt()
    }

    pub fn normalized(&self) -> Self {
        let len = self.len();
        if len != 0.0 {
            Self::new(self.x / len, self.y / len)
        } else {
            Self::new(0.0, 0.0)
        }
    }

    pub fn scale(&self, s: f64) -> Self {
        Self::new(self.x * s, self.y * s)
    }

    pub fn rotate(&self, beta: f64) -> Self {
        let cos = beta.cos();
        let sin = beta.sin();
        Self::new(self.x * cos - self.y * sin, self.x * sin + self.y * cos)
    }

    pub fn distance_sq(&self, other: &Self) -> f64 {
        self.minus(other).len_sq()
    }

    pub fn distance(&self, other: &Self) -> f64 {
        self.distance_sq(other).sqrt()
    }

    pub fn within_range(&self, other: &Self, range: f64) -> bool {
        self.distance_sq(other) <= range * range
    }
}

impl From<Vector> for Vec2 {
    fn from(vec: Vector) -> Self {
        Self { x: vec.x, y: vec.y }
    }
}
