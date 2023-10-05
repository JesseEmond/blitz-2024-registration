import math
from typing import Optional, Tuple

from game_message import *
from actions import *


def dot_product(a: Vector, b: Vector) -> float:
    return a.x * b.x + a.y * b.y

def vec_minus(a: Vector, b: Vector) -> Vector:
    return Vector(a.x - b.x, a.y - b.y)

def collision_times(delta_pos: Vector, delta_vel: Vector,
                    speed: float) -> Optional[Tuple[float, float]]:
    # https://gamedev.stackexchange.com/q/25277
    a = dot_product(delta_vel, delta_vel) - speed * speed
    b = 2 * dot_product(delta_vel, delta_pos)
    c = dot_product(delta_pos, delta_pos)

    p = -b / (2 * a)
    det = b * b - 4 * a * c
    if det < 0:
        return None  # No solution
    q = math.sqrt(det) / (2 * a)
    return p - q, p + q


class Bot:
    def __init__(self):
        pass

    def pick_target(self, game: GameMessage) -> Optional[Meteor]:
        if not game.meteors:
            return None
        # TODO: Pick target strategically (e.g. best score)
        # TODO: Ignore meteors that we already shot at
        # TODO: Take into accounts meteors that will spawn
        return game.meteors[0]

    def aim_ahead(self, cannon: Cannon, rockets: RocketsConstants,
                  target: Projectile) -> Optional[Vector]:
        delta_pos = vec_minus(target.position, cannon.position)
        times = collision_times(delta_pos, target.velocity, rockets.speed)
        if not times:
            return None
        # TODO: Take into account that our target is a sphere of size > 0
        # TODO: Take into account that our rocket is a sphere of size > 0
        time = next(iter(sorted(t for t in times if t >= 0)), None)
        if not time:
            return None
        return Vector(target.position.x + target.velocity.x * time,
                      target.position.y + target.velocity.y * time)


    def get_next_move(self, game: GameMessage):
        actions = []

        target = self.pick_target(game)
        if target:
            aim = self.aim_ahead(game.cannon, game.constants.rockets, target)
            actions.append(LookAtAction(target=aim))
            if not game.cannon.cooldown:
                actions.append(ShootAction())

        return actions
