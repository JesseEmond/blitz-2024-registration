import dataclasses
from typing import Optional, Tuple

from game_message import *


@dataclasses.dataclass
class CollisionInfo:
    # 'target' is the center position of the target at the time of collision.
    target: Vector
    # time from now until the collision occurs
    delta_t: float
    # position where the sphere collision happens on the target's radius
    target_collision_point: Optional[Vector]  # only set if rewind is used
    # time when the centers would collide
    center_collision_t: float


def time_until_out_of_bounds(body: Body, bounds: 'Bounds') -> float:
    """Time until a given unit goes out of bounds (negative if already)."""
    x, y = body.position.components()
    vx, vy = body.velocity.components()
    assert vx != 0 or vy != 0, f'Null velocity: {body}'
    tx = None
    if vx > 0:
        tx = (bounds.right + body.size - x) / vx
    elif vx < 0:
        tx = (x + body.size - bounds.left) / (-vx)
    ty = None
    if vy > 0:
        ty = (bounds.bottom + body.size - y) / vy
    elif vy < 0:
        ty = (y + body.size - bounds.top) / (-vy)
    tx = tx if tx is not None else ty
    ty = ty if ty is not None else tx
    return min(tx, ty)


class Bounds:
    def __init__(self, cannon: Cannon, world: WorldConstants) -> None:
        # The left of the cannon is not useful to us -- treat it as out.
        self.left = cannon.position.x
        self.right = world.width
        self.top = 0
        self.bottom = world.height

    def is_out(self, body: Body) -> bool:
        return time_until_out_of_bounds(body, self) <= 0


# Potential solutions for a quadratic equation, can be negative (e.g. time).
# None if no colision will happen.
QuadraticSolution = Optional[Tuple[float, float]]


def solve_quadratic(a: float, b: float, c: float) -> QuadraticSolution:
    p = -b / (2 * a)
    det = b * b - 4 * a * c
    if det < 0:
        return None  # No solution
    q = math.sqrt(det) / (2 * a)
    return p - q, p + q


def bullet_target_collision_times(
    source: Vector, target: Body, bullet_speed: float) -> QuadraticSolution:
    """Times for 'source' to reach a moving 'target' with a bullet."""
    # https://gamedev.stackexchange.com/q/25277
    delta_pos = target.position.minus(source)
    a = target.velocity.dot(target.velocity) - bullet_speed * bullet_speed
    b = 2 * target.velocity.dot(delta_pos)
    c = delta_pos.dot(delta_pos)
    return solve_quadratic(a, b, c)


def rewind_body_collision(
    collision: CollisionInfo, source: Body, target: Body) -> None:
    """Rewind center-based collision to when bodies first intersect."""
    r = source.size + target.size
    a = source.velocity.len_sq() + target.velocity.len_sq()
    b = -2 * source.velocity.inv().dot(target.velocity.inv())
    c = -r * r
    ts = solve_quadratic(a, b, c)
    assert ts, (a, b, c, cannon, target, constants, collision_time)
    dt = max(ts)
    # TODO: validate that predicted times match with tracker
    # Rewind to when the spheres first intersect.
    collision.delta_t -= dt
    # Fast-forward to the collision point
    source_pos = source.position.add(source.velocity.scale(collision.delta_t))
    target_pos = target.position.add(target.velocity.scale(collision.delta_t))
    delta = target_pos.minus(source_pos).norm()
    collision.target_collision_point = source_pos.add(delta.scale(source.size))


def aim_at_moving_target(
    source: Vector, bullet_size: float, bullet_speed: float,
    target: Body) -> Optional[CollisionInfo]:
    """Aim body towards moving body."""
    # TODO: Can we hit targets slightly faster by taking into account the
    # two sphere radii from the get-go? Can try numeric methods for now...
    times = bullet_target_collision_times(source, target, bullet_speed)
    earliest = None
    for t in times:
        collision_point = target.position.add(target.velocity.scale(t))
        collision = CollisionInfo(
            target=collision_point, delta_t=t, center_collision_t=t,
            target_collision_point=None)
        bullet_dir = collision_point.minus(source).norm()
        bullet = Body(position=source,
            velocity=bullet_dir.scale(bullet_speed), size=bullet_size)
        rewind_body_collision(collision, bullet, target)
        if collision.delta_t < 0:
            continue
        if not earliest or collision.delta_t < earliest.delta_t:
            earliest = collision
    return earliest


def next_collision_time(a: Body, b: Body) -> Optional[float]:
    r = a.size + b.size
    a = a.velocity.len_sq() + b.velocity.len_sq()
    b = -2 * a.velocity.dot(t.velocity)
    c = -r * r
    ts = solve_quadratic(a, b, c)
    return min(ts) if ts else None
