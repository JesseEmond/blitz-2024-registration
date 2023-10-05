import math
from typing import List, Optional, Tuple

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
        # TODO: We might miss our target (e.g. hit something else) -- handle.
        self.hit_list = set()

    def get_candidates(self, meteors: List[Meteor]) -> List[Meteor]:
        # TODO: Take into accounts meteors that will spawn
        return [target for target in meteors if target.id not in self.hit_list]

    def rank_candidates(self, candidates: List[Meteor], constants: Constants):
        def _score(meteor: Meteor) -> float:
            return constants.meteorInfos[meteor.meteorType].score
        candidates.sort(key=_score, reverse=True)

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

        if not game.meteors:
            print('No meteors to shoot at!')
        targets = self.get_candidates(game.meteors)
        if not targets:
            print('No active targets to shoot at!')
        self.rank_candidates(targets, game.constants)
        for target in targets:
            print(f'Considering target: {target}')
            aim = self.aim_ahead(game.cannon, game.constants.rockets, target)
            if not aim:
                print('Can not reach target.')
                continue
            # TODO: don't shoot if the aim would be unreachable (angle-wise/off-screen)
            print(f'Aiming ahead at: {aim}')
            actions.append(LookAtAction(target=aim))

            if not game.cannon.cooldown:
                print(f'Shooting! Marking {target.id} on our hit-list.')
                self.hit_list.add(target.id)
                actions.append(ShootAction())
                break
            else:
                print(f'Cannon on cooldown, waiting {game.cannon.cooldown}...')

        return actions
