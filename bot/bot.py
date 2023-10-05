import dataclasses
import math
from typing import List, Optional, Tuple

from game_message import *
from actions import *


@dataclasses.dataclass
class CollisionInfo:
    # 'target' is the center position of the target at the time of collision.
    target: Vector
    # time from now until the collision occurs
    delta_t: float


def collision_times(delta_pos: Vector, delta_vel: Vector,
                    speed: float) -> Optional[Tuple[float, float]]:
    # https://gamedev.stackexchange.com/q/25277
    a = delta_vel.dot(delta_vel) - speed * speed
    b = 2 * delta_vel.dot(delta_pos)
    c = delta_pos.dot(delta_pos)

    p = -b / (2 * a)
    det = b * b - 4 * a * c
    if det < 0:
        return None  # No solution
    q = math.sqrt(det) / (2 * a)
    return p - q, p + q


class Bot:
    def __init__(self):
        self.constants = None
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

    def rank_candidates(self, candidates: List[Meteor]):
        def _score(meteor: Meteor) -> float:
            return self.constants.meteorInfos[meteor.meteorType].score
        candidates.sort(key=_score, reverse=True)

    def aim_ahead(
        self, cannon: Cannon, target: Projectile) -> Optional[CollisionInfo]:
        delta_pos = target.position.minus(cannon.position)
        times = collision_times(delta_pos, target.velocity,
                                self.constants.rockets.speed)
        if not times:
            return None
        # TODO: Take into account that our target is a sphere of size > 0
        # TODO: Take into account that our rocket is a sphere of size > 0
        time = next(iter(sorted(t for t in times if t >= 0)), None)
        if not time:
            return None
        # # Game works in integer ticks, collision will happen at ceiling of time.
        # # TODO: is this true? maybe the game updates at a faster rate
        # tick = math.ceil(time)
        print(f'Aiming ahead, will hit in time {time}')
        pos = target.position.add(target.velocity.scale(time))
        return CollisionInfo(target=pos, delta_t=time)

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
        print(f'Parent velocity: {meteor.velocity}')
        print(f'Parent speed: {meteor.velocity.len()}')
        print(f'Parent angle: {parent_angle}')
        for explode in parent_infos.explodesInto:
            child_info = self.constants.meteorInfos[explode.meteorType]
            id_ = f'expl{self.next_explosion_id}'
            self.next_explosion_id += 1
            angle = math.radians(explode.approximateAngle)
            print(f'Relative angle: {angle} (degrees: {explode.approximateAngle})')
            angle += parent_angle
            print(f'Angle: {angle}')
            direction = Vector.from_angle(angle)
            print(f'Dir: {direction}')
            speed = child_info.approximateSpeed
            print(f'Speed: {speed}')
            velocity = direction.scale(speed)
            new_meteor = Meteor(
                id=id_, position=position, velocity=velocity,
                size=child_info.size, meteorType=explode.meteorType)
            print(f'Expect meteor {meteor.id} to explode into: {new_meteor}')
            # TODO: new_meteor doesn't match reality super well.
            # - Is approximateSpeed & approximateAngle deliberately noisy?
            # - Is the position off because of sub-tick simulation?
            #   Also because we're ignoring meteor sizes?

    def get_next_move(self, game: GameMessage):
        if not self.constants:
            self.constants = game.constants
            print(f'Constants: {self.constants}')

        actions = []

        if not game.meteors:
            print('No meteors to shoot at!')
        targets = self.get_candidates(game.meteors)
        if not targets:
            print('No active targets to shoot at!')
        self.rank_candidates(targets)
        for target in targets:
            print(f'Considering target: {target}')
            collision = self.aim_ahead(game.cannon, target)
            if not collision:
                print('Can not reach target (no collision found).')
                continue
            print(f'Aiming ahead at: {collision}')
            if not self.can_reach_target(game.cannon, collision.target):
                print('Can not reach aim (off-screen/past us).')
                continue
            if game.tick + collision.delta_t >= TOTAL_TICKS:
                print(f'Can not reach target in time: {game.tick + collision.delta_t}')
                continue
            actions.append(LookAtAction(target=collision.target))

            if not game.cannon.cooldown:
                print(f'Shooting! Marking {target.id} on our hit-list.')
                self.hit_list.add(target.id)
                actions.append(ShootAction())
                # TODO: requires more work.
                # self.expect_explosion(target, collision.target)
            else:
                print(f'Cannon on cooldown, waiting {game.cannon.cooldown}...')
            break  # Successful target found. Stop looping.

        return actions
