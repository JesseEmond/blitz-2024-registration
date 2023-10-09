import dataclasses
from typing import List, Optional, Set

from game_message import *

import physics
import simulation

@dataclasses.dataclass
class Target:
    meteor_id: str
    aim_point: Vector
    hit_time: float


class TargetPicker:

    def __init__(self, verbose: bool) -> None:
        self.verbose = verbose

    def pick_target(
        self, cannon: Cannon, rockets: List[Projectile], meteors: List[Meteor],
        unassigned_ids: Set[str], constants: Constants, bounds: physics.Bounds,
        tick: int) -> Optional[Target]:
        if not meteors:
            self.info('No meteors to shoot at')
        candidates = self.get_candidates(meteors, unassigned_ids)
        if not candidates:
            self.info('No available targets to shoot at')
        self.rank_candidates(candidates, constants, bounds)
        for target in candidates:
            self.info(f'Considering target: {target.id}')
            collision = self.aim_ahead(cannon, target, constants)
            if not collision:
                self.info('Can not reach target (no collision found).')
                continue
            self.info(f'Aiming ahead at: {collision}')
            rocket_dir = collision.target.minus(cannon.position).normalized()
            if rocket_dir.x < 0:
                self.info('Can not reach target (behind cannon).')
                continue
            rocket = Projectile(
                id='new_rocket', position=cannon.position,
                velocity=rocket_dir.scale(constants.rockets.speed),
                size=constants.rockets.size)
            if (bounds.is_out(target.advance(collision.delta_t)) and
                bounds.is_out(rocket.advance(collision.delta_t))):
                self.info('Can not reach aim target (off-screen/past us).')
                continue
            hit_time = tick + collision.delta_t
            if hit_time >= TOTAL_TICKS:
                self.info(f'Can not reach target in time: {hit_time}')
                continue
            sim = simulation.Simulation()
            sim_rockets = rockets + [rocket]
            hits = sim.simulate(bounds, sim_rockets, meteors)
            my_hit = next((hit for hit in hits if hit.rocket_id == rocket.id),
                          None)
            if not my_hit or my_hit.meteor_id != target.id:
                self.info('Would hit other meteor before reaching target: {my_hit}')
                continue

            return Target(target.id, collision.target, hit_time)
        return None

    def get_candidates(self, meteors: List[Meteor],
                       unassigned_ids: Set[str]) -> List[Projectile]:
        # TODO: consider future spawns
        return [m for m in meteors if m.id in unassigned_ids]

    def rank_candidates(self, candidates: List[Meteor], constants: Constants,
                        bounds: physics.Bounds) -> None:
        def _score(meteor: Meteor) -> float:
            score = constants.meteorInfos[meteor.meteorType].score
            time = physics.time_until_out_of_bounds(meteor, bounds)
            # Prio:
            # - higher score (-score)
            # - time left until it exits the area (more urgent)
            return (-score, time)
        candidates.sort(key=_score)

    def aim_ahead(self, cannon: Cannon, target: Projectile,
                  constants: Constants) -> Optional[physics.CollisionInfo]:
        collision = physics.aim_at_moving_target(
            cannon.position, constants.rockets.size,
            constants.rockets.speed, target)
        if not collision:
            return None
        self.info(f'Aiming ahead, will hit in time {collision.delta_t}')
        return collision

    def info(self, s: str) -> None:
        if self.verbose:
            print(s)
