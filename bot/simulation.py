import dataclasses
from typing import Iterable, List, Optional
from game_message import *

import physics

@dataclasses.dataclass
class Hit:
    delta_t: float
    victim: physics.SpawnableMeteor
    rocket_id: str


class Simulation:

    def __init__(self, constants: Constants) -> None:
        self.rocket_meteor_cache = {}
        self.constants = constants

    def simulate(
        self, current_time: float, bounds: physics.Bounds,
        rockets: List[Projectile], meteors: List[Meteor]) -> List[Hit]:
        rockets = list(rockets)
        meteors = [physics.SpawnableMeteor.from_meteor(m) for m in meteors]
        hits = []
        while True:
            next_hit = None
            for rocket in list(rockets):
                for meteor in meteors:
                    meteor = meteor.rewind_for_physics(current_time)
                    delta_t = self._rocket_meteor_collision_time(rocket, meteor)
                    if delta_t is None:
                        continue
                    delta_t = meteor.hit_time_delta_post_spawn(
                        current_time, delta_t, rocket)
                    if delta_t is None:
                        continue
                    if (bounds.is_out(rocket.advance(delta_t)) and
                        bounds.is_out(meteor.advance(delta_t))):
                        continue
                    any_hit = True
                    if not next_hit or delta_t < next_hit.delta_t:
                        next_hit = Hit(delta_t, meteor, rocket.id)
            if next_hit:
                meteor = next(m for m in meteors if m.id == next_hit.victim.id)
                meteors.remove(meteor)
                rocket = next(r for r in rockets if r.id == next_hit.rocket_id)
                rockets.remove(rocket)
                hits.append(next_hit)
                meteors.extend(physics.expect_explosions(
                    rocket.advance(next_hit.delta_t),
                    next_hit.victim.advance(next_hit.delta_t),
                    current_time + next_hit.delta_t, self.constants))
            else:
                break
        return hits

    def _rocket_meteor_collision_time(self,
        rocket: Projectile, meteor: Meteor) -> Optional[float]:
        key = (rocket.id, meteor.id)
        if key in self.rocket_meteor_cache:
            return self.rocket_meteor_cache[key]
        delta_t = physics.next_collision_time(rocket, meteor)
        self.rocket_meteor_cache[key] = delta_t
        return delta_t
