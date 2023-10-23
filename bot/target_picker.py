import dataclasses
from typing import Iterable, List, Optional, Set

from game_message import *

import physics
import simulation
import target_tracker

@dataclasses.dataclass
class PickedTarget:
    target: target_tracker.Target
    aim_point: Vector
    rocket: Body


class TargetPicker:

    def __init__(self, verbose: bool) -> None:
        self.verbose = verbose

    def pick_target(
        self, cannon: Cannon, rockets: List[Projectile],
        meteors: List[Meteor], targets: List[target_tracker.Target],
        constants: Constants, bounds: physics.Bounds,
        tick: int) -> Optional[PickedTarget]:
        if not targets:
            self.info('No available targets to shoot at')
        self.rank_candidates(tick, targets, constants, bounds)
        for target in targets:
            self.info(f'Considering target: {target.victim.id}')
            collision = self.aim_ahead(tick, cannon, target.victim, constants)
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
            if (bounds.is_out(target.victim.advance(collision.delta_t)) and
                bounds.is_out(rocket.advance(collision.delta_t))):
                self.info('Can not reach aim target (off-screen/past us).')
                continue
            hit_time = tick + collision.delta_t
            if hit_time >= TOTAL_TICKS:
                self.info(f'Can not reach target in time: {hit_time}')
                continue
            sim = simulation.Simulation(constants)
            sim_rockets = rockets + [rocket]
            hits = sim.simulate(tick, bounds, sim_rockets, meteors)
            my_hit = next((hit for hit in hits if hit.rocket_id == rocket.id),
                          None)
            if not my_hit or my_hit.victim.id != target.victim.id:
                self.info(f'Would hit other meteor before reaching target: {my_hit}')
                continue
            # The following has been helpful to find simulation bugs, keeping it
            assert abs(tick+my_hit.delta_t - hit_time) < 1e-5, (tick, my_hit.delta_t, tick+my_hit.delta_t, hit_time, my_hit)
            # Update target to the simulated target, to take into account physics
            # of future spawn targets.
            target.victim = my_hit.victim
            target.hit_time = hit_time
            return PickedTarget(target, collision.target, rocket)
        return None

    def rank_candidates(
        self, current_time: float, targets: List[target_tracker.Target],
        constants: Constants, bounds: physics.Bounds) -> None:
        def _score(target: target_tracker.Target):
            riskiness = 1 if target.victim.is_future_meteor() else 0
            score = constants.meteorInfos[target.victim.meteorType].score
            time = physics.time_until_out_of_bounds(target.victim, bounds)
            if target.victim.is_future_meteor():
                delta_t = target.victim.spawn_time - current_time
                time += delta_t
            # Prio:
            # - real meteors, instead of predicted ones
            # - higher score (-score)
            # - time left until it exits the area (more urgent)
            return (riskiness, -score, time)
        targets.sort(key=_score)

    def aim_ahead(self, tick: float, cannon: Cannon,
        target: physics.SpawnableMeteor,
        constants: Constants) -> Optional[physics.CollisionInfo]:
        collision = physics.aim_at_moving_target(tick,
            cannon.position, constants.rockets.size,
            constants.rockets.speed, target)
        if not collision:
            return None
        self.info(f'Aiming ahead, will hit in time {collision.delta_t}')
        return collision

    def info(self, s: str) -> None:
        if self.verbose:
            print(s)
