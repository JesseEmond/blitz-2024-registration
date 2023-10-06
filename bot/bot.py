import dataclasses
import math
import time
from typing import List, Optional, Tuple

from game_message import *
from actions import *
import tracker


@dataclasses.dataclass
class CollisionInfo:
    # 'target' is the center position of the target at the time of collision.
    target: Vector
    # time from now until the collision occurs
    delta_t: float
    # position where the sphere collision happens on the target's radius
    target_collision_point: Vector
    # time where the centers would collide
    center_collision_t: float


def solve_quad(a: float, b: float, c: float) -> Optional[Tuple[float, float]]:
    p = -b / (2 * a)
    det = b * b - 4 * a * c
    if det < 0:
        return None  # No solution
    q = math.sqrt(det) / (2 * a)
    return p - q, p + q


def collision_times(delta_pos: Vector, delta_vel: Vector,
                    speed: float) -> Optional[Tuple[float, float]]:
    # https://gamedev.stackexchange.com/q/25277
    a = delta_vel.dot(delta_vel) - speed * speed
    b = 2 * delta_vel.dot(delta_pos)
    c = delta_pos.dot(delta_pos)
    return solve_quad(a, b, c)


def rewind_collision(
    collision: CollisionInfo, cannon: Cannon,
    target: Projectile, constants: Constants) -> None:
    """Rewind center-based collision to when circles first intersect."""
    # Now have time t where:
    #   Pr + t Vr = Pm + t Vm
    # If we rewind time on both lines (rocket line & target line), want to
    # know the point where they have distance R =
    # 'target.size + rocket.size' between them (i.e. when their spheres
    # intersect).
    # We get a new triangle:
    # (C = collision point)
    #         C
    #        /A\
    #    B  /   \ D
    # We know the angle A (between -Vr and -Vm).
    # B is -Vr times unk delta t
    # D is -Vm time unk delta t
    # BD is R.
    # Law of cosines:
    # R = sqrt(B^2 + D^2 - 2 B D cos A)
    # R^2 = B^2 + D^2 - 2 B D cos A
    # New quadratic to solve!
    # (-Vr dt)^2 + (-Vm dt)^2 - 2 (-Vr dt) (-Vm dt) cos A - R^2 = 0
    # (|Vr|^2 + |Vm|^2) dt^2  - 2 |Vr| |Vm| dt cos A - R^2 = 0
    rocket = constants.rockets
    r = rocket.size + target.size
    collision_pt = target.position.add(target.velocity.scale(collision.center_collision_t))
    rocket_vel = collision_pt.minus(cannon.position).norm().scale(rocket.speed)
    target_vel = target.velocity
    a = rocket_vel.len_sq() + target_vel.len_sq()
    b = -2 * rocket_vel.inv().dot(target_vel.inv())
    c = -r * r
    ts = solve_quad(a, b, c)
    assert ts, (a, b, c, cannon, target, constants, collision_time)
    t = max(ts)
    # TODO: validate that predicted times match with tracker
    collision.delta_t -= t
    rocket_pos = cannon.position.add(rocket_vel.scale(collision.delta_t))
    target_pos = target.position.add(target.velocity.scale(collision.delta_t))
    delta = target_pos.minus(rocket_pos).norm()
    collision.target_collision_point = rocket_pos.add(delta.scale(rocket.size))


class Bot:
    def __init__(self, on_server: bool):
        self.verbose = on_server
        self.debug_mode = not on_server
        self.constants = None
        self.tracker = tracker.Tracker()
        # TODO: We might miss our target (e.g. hit something else) -- handle.
        # TODO: Clean up hit list when meteors are destroyed/gone
        self.hit_list = set()
        # TODO: detect when expected explosions spawn, remove from this list
        self.expected_explosions = {}
        self.next_explosion_id = 0

    def get_candidates(self, meteors: List[Meteor]) -> List[Meteor]:
        targets = [target for target in meteors
                   if target.id not in self.hit_list]
        # TODO: Take into accounts meteors that will spawn
        return targets

    def expect(self, value: bool, msg: str) -> bool:
        if self.debug_mode:
            assert value, msg
        elif not value:
            print(f'[EXPECTATION failure]: {msg}')
        return value

    def time_until_oob(self, projectile: Projectile, cannon: Cannon) -> float:
        """Time until a given projectile goes out of bounds."""
        # Note: treat passing the cannon as out-of-bounds, too.
        left = cannon.position.x
        right = self.constants.world.width
        top = 0
        bottom = self.constants.world.height
        x, y = projectile.position.x, projectile.position.y
        vx, vy = projectile.velocity.x, projectile.velocity.y
        if x < left or x >= right or y < top or y >= bottom:
            return 0
        assert vx != 0 or vy != 0
        tx = None
        if vx > 0:
            tx = (right - x) / vx
        elif vx < 0:
            tx = (x - left) / (-vx)
        ty = None
        if vy > 0:
            ty = (bottom - y) / vy
        elif vy < 0: 
            ty = (y - top) / (-vy)
        tx = tx if tx is not None else ty
        ty = ty if ty is not None else tx
        return min(tx, ty)

    def rank_candidates(self, cannon: Cannon, candidates: List[Meteor]):
        # TODO: avoid shooting large/medium meteors that will spawn meteors too
        # close to the edge?
        def _score(meteor: Meteor) -> float:
            score = self.constants.meteorInfos[meteor.meteorType].score
            time = self.time_until_oob(meteor, cannon)
            # Prio:
            # - higher score (-score)
            # - time left until it exits the area (more urgent)
            return (-score, time)
        candidates.sort(key=_score)

    def aim_ahead(
        self, cannon: Cannon, target: Projectile) -> Optional[CollisionInfo]:
        delta_pos = target.position.minus(cannon.position)
        times = collision_times(delta_pos, target.velocity,
                                self.constants.rockets.speed)
        if not times:
            return None
        # TODO: Can we hit targets slightly faster by taking into account the
        # two sphere radii from the get-go?
        collisions = [CollisionInfo(
            target=target.position.add(target.velocity.scale(t)),
            delta_t=t, center_collision_t=t,
            target_collision_point=None) for t in times]
        for collision in collisions:
            rewind_collision(collision, cannon, target, self.constants)
        collision = next(iter(
            sorted(c for c in collisions if c.delta_t >= 0)), None)
        if not collision:
            return None
        # # Game works in integer ticks, collision will happen at ceiling of time.
        # # TODO: is this true? maybe the game updates at a faster rate
        # tick = math.ceil(time)
        self.info(f'Aiming ahead, will hit in time {collision.delta_t}')
        return collision

    def can_reach_target(self, cannon: Cannon, target: Vector) -> bool:
        if target.x < cannon.position.x:
            return False  # We missed the shot -- will pass us!
        if target.y < 0 or target.y >= self.constants.world.height:
            return False  # Asteroid will go off screen.
        if target.x >= self.constants.world.width:
            return False  # If asteroid explodes to the right
        return True

    def expect_explosion(self, meteor: Meteor, position: Vector) -> None:
        # TODO: this requires more work.
        # First, the position approximation is not great.
        # Still unclear if this is:
        # - because we ignore the sphere size in collision prediction
        # - because the parent collision happens on tick times?
        # - because the children moved post-collision before the next tick?
        # Second, the velocity approximation is not great.
        # Still unclear if this is:
        # - because the approximateSpeed is noisy -- e.g. 13.5... vs. 13
        # - because the approximateAngle is noisy
        # - because my logic for determining the new angle is wrong
        # It would help if we tried to infer meteor parent/children to study
        # this
        parent_infos = self.constants.meteorInfos[meteor.meteorType]
        parent_angle = meteor.velocity.angle()
        self.info(f'Parent velocity: {meteor.velocity}')
        self.info(f'Parent speed: {meteor.velocity.len()}')
        self.info(f'Parent angle: {parent_angle}')
        for explode in parent_infos.explodesInto:
            child_info = self.constants.meteorInfos[explode.meteorType]
            id_ = f'expl{self.next_explosion_id}'
            self.next_explosion_id += 1
            angle = math.radians(explode.approximateAngle)
            self.info(f'Relative angle: {angle} (degrees: {explode.approximateAngle})')
            angle += parent_angle
            self.info(f'Angle: {angle}')
            direction = Vector.from_angle(angle)
            self.info(f'Dir: {direction}')
            speed = child_info.approximateSpeed
            self.info(f'Speed: {speed}')
            velocity = direction.scale(speed)
            new_meteor = Meteor(
                id=id_, position=position, velocity=velocity,
                size=child_info.size, meteorType=explode.meteorType)
            self.info(f'Expect meteor {meteor.id} to explode into: {new_meteor}')
            # TODO: new_meteor doesn't match reality super well.
            # - Is approximateSpeed & approximateAngle deliberately noisy?
            # - Is the position off because of sub-tick simulation?
            #   Also because we're ignoring meteor sizes?

    def info(self, s: str) -> None:
        if self.verbose:
            print(s)

    def get_next_move(self, game: GameMessage):
        self.info(f"Playing tick {game.tick}. Score: {game.score}")

        if not self.constants:
            self.tracker.constants = game.constants
            self.constants = game.constants
            self.info(f'Constants: {self.constants}')

        # TODO: tracker spawn detection isn't great -- is the spawn position
        #       based on the intersection position...?
        # self.tracker.update(game)

        actions = []

        if not game.meteors:
            self.info('No meteors to shoot at!')
        targets = self.get_candidates(game.meteors)
        if not targets:
            self.info('No active targets to shoot at!')
        self.rank_candidates(game.cannon, targets)
        for target in targets:
            self.info(f'Considering target: {target}')
            collision = self.aim_ahead(game.cannon, target)
            if not collision:
                self.info('Can not reach target (no collision found).')
                continue
            self.info(f'Aiming ahead at: {collision}')
            if not self.can_reach_target(game.cannon, collision.target):
                self.info('Can not reach aim (off-screen/past us).')
                continue
            if game.tick + collision.delta_t >= TOTAL_TICKS:
                self.info(f'Can not reach target in time: {game.tick + collision.delta_t}')
                continue
            print(f'Predicting collision. {collision}')
            actions.append(LookAtAction(target=collision.target))

            if not game.cannon.cooldown:
                self.info(f'Shooting! Marking {target.id} on our hit-list.')
                self.hit_list.add(target.id)
                actions.append(ShootAction())
                # TODO: requires more work.
                # self.expect_explosion(target, collision.target)
            else:
                self.info(f'Cannon on cooldown, waiting {game.cannon.cooldown}...')
            break  # Successful target found. Stop looping.

        return actions
