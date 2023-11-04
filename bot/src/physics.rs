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
    // https://gamedev.stackexchange.com/q/25277
    let delta_pos = target.pos.minus(&source);
    let a = target.vel.dot(&target.vel) - rocket_speed * rocket_speed;
    let b = 2.0 * target.vel.dot(&delta_pos);
    let c = delta_pos.dot(&delta_pos);
    let (t1, t2) = solve_quadratic(a, b, c)?;
    let t = if t1 < 0.0 { t2 } else { t1 };
    Some(target.pos.add(&target.vel.scale(t)))
}

/// Possible aiming points to hit a target.
/// Aiming at when the center collides is not always the faster hit, and
/// sometimes not possible while other hits are possible.
pub fn get_aim_options(source: &Vec2, rocket_speed: f64, rocket_size: f64,
                       target: &MovingCircle) -> Vec<Vec2> {
    let offset = target.size - 1.0;  // -1 to have some leeway in collision handling
    let large_offset = offset + rocket_size;
    let mut offset_options = vec![
        // aim at center
        Vec2::new(0.0, 0.0),
        // aim at the top side
        Vec2::new(0.0, -large_offset),
        // aim at the bottom side
        Vec2::new(0.0, large_offset),
        // aim at right size (e.g. hit a meteor before it disappears)
        Vec2::new(large_offset, 0.0),
        // aim at the top side
        Vec2::new(0.0, -offset),
        // aim at the bottom side
        Vec2::new(0.0, offset),
        // aim at right size (e.g. hit a meteor before it disappears)
        Vec2::new(offset, 0.0),
        // TODO: other aiming options useful e.g. bottom left/top left?
    ];
    offset_options.iter()
        .map(|off| aim_ahead(source, rocket_speed, &MovingCircle {
            pos: target.pos.add(&off),
            vel: target.vel,
            size: target.size,
        })).filter(|aim| aim.is_some()).map(|aim| aim.unwrap()).collect()
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
    let b = y.pos.add(&y.vel.scale(t));
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
