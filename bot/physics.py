import dataclasses
from typing import List, Optional, Tuple

from game_message import *


@dataclasses.dataclass
class CollisionInfo:
    # 'target' is the center position of the target at the time of collision.
    target: Vector
    # time from now until the collision occurs
    delta_t: float
    # position where the collision happens on the target's radius
    target_collision_point: Optional[Vector]  # only set if rewind is used
    # time when the centers would collide
    center_collision_t: float


@dataclasses.dataclass
class SpawnableMeteor(Meteor):
    """Meteor that might not have spawned yet."""
    # Note: 'position' is the spawn position
    spawn_time: Optional[float] = None
    parent: Optional[Meteor] = None
    # Velocity multiplier range
    min_multiplier: float = 1.0
    max_multiplier: float = 1.0

    @classmethod
    def from_meteor(cls, meteor: Meteor) -> 'SpawnableMeteor':
        return SpawnableMeteor(
            position=meteor.position, velocity=meteor.velocity,
            size=meteor.size, meteorType=meteor.meteorType, id=meteor.id)

    def rewind_for_physics(self, current_time: float) -> 'SpawnableMeteor':
        """Create a spawn instance rewinded to check for collisions post-spawn"""
        if not self.is_future_meteor():
            return dataclasses.replace(self)
        # Note: from disassembling the local binary, we find that spawns are
        # handled by spawning at their position based on the exact floating
        # point time of collision (e.g. time 34.567), but still move for the
        # value of an entire 1.0 tick afterwards (instead of the remainder of
        # the tick).
        # To simulate them: spawn them at t=ceiling(spawn_time) assuming
        # position+1*velocity, move them back 't', and only
        # consider collisions that happen after t.
        spawn_next_tick_t = math.ceil(self.spawn_time)
        delta_t = spawn_next_tick_t - current_time
        assert delta_t > 0, (delta_t, self.spawn_time, spawn_next_tick_t, current_time, self)
        # move forward by 1, then backwards by delta_t i.e. -(spawn_next_tick_t-1)
        return self.advance(-(delta_t - 1))

    def is_valid_hit(self, hit_time: float) -> bool:
        if not self.is_future_meteor():
            return True
        # Note that we use next_tick_t, not spawn_time, because the logic of the
        # server finds all collisions THEN creates splits, so splits can only
        # collide on the next tick's processing
        next_tick_t = math.ceil(self.spawn_time)
        return hit_time >= next_tick_t

    def is_future_meteor(self) -> bool:
        return self.spawn_time is not None


def time_until_out_of_bounds(body: Body, bounds: 'Bounds') -> float:
    """Time until a given unit goes out of bounds (negative if already)."""
    x, y = body.position.components()
    vx, vy = body.velocity.components()
    assert vx != 0 or vy != 0, f'Null velocity: {body}'
    # Only the center of the body matters for top/right/bottom hits (despawn).
    # On the left side, the size must be taken into account (must be fully out).
    tx = float('Infinity')
    if vx > 0:  # Right exit
        tx = (bounds.right - x) / vx
    elif vx < 0:  # Left exit
        tx = (x + body.size - bounds.left) / (-vx)
    ty = float('Infinity')
    if vy > 0:  # Top exit
        ty = (bounds.bottom - y) / vy
    elif vy < 0:  # Bottom exit
        ty = (y - bounds.top) / (-vy)
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

    def is_out_vertically(self, body: Body) -> bool:
        return body.position.y < self.top or body.position.y >= self.bottom


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


def rocket_target_collision_times(
    source: Vector, target: Body, rocket_speed: float) -> QuadraticSolution:
    """Times for 'source' to reach a moving 'target' with a rocket."""
    # https://gamedev.stackexchange.com/q/25277
    delta_pos = target.position.minus(source)
    a = target.velocity.dot(target.velocity) - rocket_speed * rocket_speed
    b = 2 * target.velocity.dot(delta_pos)
    c = delta_pos.dot(delta_pos)
    return solve_quadratic(a, b, c)


def aim_at_moving_target(
    source: Vector, rocket_size: float, rocket_speed: float,
    target: Body) -> Optional[CollisionInfo]:
    """Aim body towards moving body."""
    # TODO: Can we hit targets slightly faster by taking into account the
    # two sphere radii from the get-go? Could try numeric methods for now...
    times = rocket_target_collision_times(source, target, rocket_speed)
    earliest = None
    for t in times:
        target_at_time_t = target.position.add(target.velocity.scale(t))
        collision = CollisionInfo(
            target=target_at_time_t, delta_t=t, center_collision_t=t,
            target_collision_point=None)
        rocket_dir = target_at_time_t.minus(source).normalized()
        rocket = Body(position=source,
            velocity=rocket_dir.scale(rocket_speed), size=rocket_size)
        t = next_collision_time(rocket, target)  # Find sphere collision time
        if not t:
            continue
        collision.delta_t = t
        if collision.delta_t < 0:
            continue
        collision.target_collision_point = collision_point(rocket, target, t)
        if not earliest or collision.delta_t < earliest.delta_t:
            earliest = collision
    return earliest


def next_collision_time(p: Body, q: Body) -> Optional[float]:
    # Circle intersection when dist(p, q) = p.size + q.size
    # ||(p.pos + t p.vel) - (q.pos + t q.vel)|| = p.size + q.size
    # ... https://stackoverflow.com/a/50722146
    r = p.size + q.size
    if p.position.in_range(q.position, r):
        return 0  # Already colliding!
    a = (p.velocity.len_sq() + q.velocity.len_sq()
         - 2 * p.velocity.dot(q.velocity))
    b = 2 * (p.position.dot(p.velocity) + q.position.dot(q.velocity)
             - p.position.dot(q.velocity) - q.position.dot(p.velocity))
    c = (p.position.len_sq() + q.position.len_sq()
         - 2 * p.position.dot(q.position) - r * r)
    ts = solve_quadratic(a, b, c)
    return min((t for t in ts if t >= 0), default=None) if ts else None


def collision_point(p: Body, q: Body, collision_time: float) -> Vector:
    # Fast-forward to the collision positions
    p_end = p.advance(collision_time)
    q_end = q.advance(collision_time)
    delta = q_end.position.minus(p_end.position).normalized()
    return p_end.position.add(delta.scale(p.size))


def expect_explosions(
    rocket: Body, target: Meteor, current_time: float,
    spawn_time: float, constants: Constants) -> List[SpawnableMeteor]:
    delta_t = spawn_time - current_time
    assert delta_t >= 0, delta_t
    spawn_position = collision_point(rocket, target, delta_t)
    parent_orientation = target.velocity.angle()
    parent = target.advance(delta_t)
    explosions = []
    explodes_into = constants.meteorInfos[target.meteorType].explodesInto
    for i, explosion in enumerate(explodes_into):
        info = constants.meteorInfos[explosion.meteorType]
        orientation = parent_orientation + math.radians(
            explosion.approximateAngle)
        avg_speed = info.approximateSpeed
        velocity = Vector.from_angle(orientation).scale(avg_speed)
        # The following was found by reverse-engineering the local challenge
        # binary, but could have been found empirically from our logs, too.
        min_multiplier = 0.8
        max_multiplier = 1.2
        spawn_id = f'{target.id}-expl{i}'
        explosions.append(SpawnableMeteor(
            id=spawn_id, position=spawn_position, velocity=velocity,
            meteorType=explosion.meteorType, size=info.size,
            parent=parent, spawn_time=spawn_time, min_multiplier=min_multiplier,
            max_multiplier=max_multiplier))
    return explosions


def earliest_hit(body: Body, others: List[Body]) -> Optional[float]:
    earliest = None
    for other in others:
        t = next_collision_time(body, other)
        if t is None:
            continue
        if earliest is None or t < earliest:
            earliest = t
    return earliest
