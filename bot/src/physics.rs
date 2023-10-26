use crate::vec2::Vec2;

pub struct Intersection {
    pub t: f64,
    pub intersection: Vec2,
}

pub struct MovingCircle {
    pub pos: Vec2,
    pub vel: Vec2,
    pub size: f64,
}

fn solve_quadratic(a: f64, b: f64, c: f64) -> Option<(f64, f64)> {
    if a == 0.0 {
        let x = -c / b;
        return Some((x, x));
    }
    let p = -b / (2.0 * a);
    let det = b * b - 4.0 * a * c;
    if det >= 0.0 {
        let q = det.sqrt() / (2.0 * a);
        Some((p - q, p + q))
    } else {
        None
    }
}

pub fn aim_ahead(source: &Vec2, rocket_speed: f64, target: &MovingCircle) -> Option<Vec2> {
    // TODO: is this optimal, or can taking into account when spheres intersect
    // produce faster hits?
    // https://gamedev.stackexchange.com/q/25277
    let delta_pos = target.pos.minus(&source);
    let a = target.vel.dot(&target.vel) - rocket_speed * rocket_speed;
    let b = 2.0 * target.vel.dot(&delta_pos);
    let c = delta_pos.dot(&delta_pos);
    let (t1, t2) = solve_quadratic(a, b, c)?;
    let t = if t1 < 0.0 { t2 } else { t1 };
    Some(target.pos.add(&target.vel.scale(t)))
}

pub fn collision_times(x: &MovingCircle, y: &MovingCircle) -> Option<(f64, f64)> {
    let r = x.size + y.size;
    let a = (x.vel.len_sq() + y.vel.len_sq()) - 2.0 * x.vel.dot(&y.vel);
    let b = 2.0 * (x.pos.dot(&x.vel) + y.pos.dot(&y.vel)
                   - x.pos.dot(&y.vel) - y.pos.dot(&x.vel));
    let c = x.pos.len_sq() + y.pos.len_sq() - 2.0 * x.pos.dot(&y.pos) - r * r;
    solve_quadratic(a, b, c)
}

pub fn make_intersection(x: &MovingCircle, y: &MovingCircle, t: f64) -> Intersection {
    let a = x.pos.add(&x.vel.scale(t));
    let b = y.pos.add(&x.vel.scale(t));
    let intersection = b.minus(&a).normalized().scale(x.size).add(&a);
    Intersection { t, intersection }
}

#[cfg(test)]
mod tests {
    use super::*;

    const EPS: f64 = 1e-8;

    #[test]
    fn test_solve_quadratic() {
        let (t1, t2) = solve_quadratic(5.0, 6.0, 1.0).unwrap();
        assert!((t1 - -1.0).abs() < EPS);
        assert!((t2 - -0.2).abs() < EPS);
        assert_eq!(solve_quadratic(5.0, 6.0, 5.0), None);
    }

    #[test]
    fn test_aim_ahead() {
        let aim = aim_ahead(&Vec2::new(1.0, -3.0), 1.0, &MovingCircle {
            pos: Vec2::new(4.0, 0.0),
            vel: Vec2::new(-1.0, 0.0),
            size: 1.0,
        }).unwrap();
        assert!((aim.x - 1.0).abs() < EPS, "{:?}", aim);
        assert!((aim.y - 0.0).abs() < EPS, "{:?}", aim);
    }

    #[test]
    fn test_collision_times() {
        let (t1, t2) = collision_times(
            &MovingCircle {
                pos: Vec2::new(4.0, 4.0),
                vel: Vec2::new(1.0, 0.0),
                size: 5.0,
            },
            &MovingCircle {
                pos: Vec2::new(14.0, 4.0),
                vel: Vec2::new(0.5, 0.0),
                size: 2.0,
            }).unwrap();
        assert!((t1 - 6.0).abs() < EPS, "{:?}", t1);
        assert!((t2 - 34.0).abs() < EPS, "{:?}", t2);
    }

    #[test]
    fn test_make_intersection() {
        let col = make_intersection(
            &MovingCircle {
                pos: Vec2::new(4.0, 4.0),
                vel: Vec2::new(1.0, 0.0),
                size: 5.0,
            },
            &MovingCircle {
                pos: Vec2::new(14.0, 4.0),
                vel: Vec2::new(0.5, 0.0),
                size: 2.0,
            },
            6.0);
        assert!((col.intersection.x - 15.0).abs() < EPS, "{:?}", col.intersection);
        assert!((col.intersection.y - 4.0).abs() < EPS, "{:?}", col.intersection);
    }
}
