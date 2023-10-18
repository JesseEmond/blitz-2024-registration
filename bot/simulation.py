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

    def __init__(self) -> None:
        self.rocket_meteor_cache = {}

    def simulate(
        self, current_time: float, bounds: physics.Bounds,
        rockets: List[Projectile], meteors: List[Meteor],
        predicted_spawns: Iterable[physics.SpawnableMeteor]) -> List[Hit]:
        rockets = list(rockets)
        meteors = list(meteors)
        spawns = list(predicted_spawns)
        hits = []
        while rockets:
            next_hit = None
            for rocket in list(rockets):
                any_hit = False
                for meteor in meteors:
                    delta_t = self._rocket_meteor_collision_time(rocket, meteor)
                    if delta_t is None:
                        continue
                    if (bounds.is_out(rocket.advance(delta_t)) and
                        bounds.is_out(meteor.advance(delta_t))):
                        continue
                    any_hit = True
                    if not next_hit or delta_t < next_hit.delta_t:
                        next_hit = Hit(
                            delta_t, physics.SpawnableMeteor.from_meteor(meteor),
                            rocket.id)
                for spawn in spawns:
                    # TODO: consider speed distribution, not just avg
                    instance = dataclasses.replace(spawn)
                    instance = instance.rewind_for_physics(current_time)
                    delta_t = physics.next_collision_time(rocket, instance)
                    if delta_t is None:
                        continue
                    if not spawn.is_valid_hit(current_time + delta_t):
                        continue
                    if (bounds.is_out(rocket.advance(delta_t)) and
                        bounds.is_out(instance.advance(delta_t))):
                        continue
                    any_hit = True
                    if not next_hit or delta_t < next_hit.delta_t:
                        next_hit = Hit(delta_t, spawn, rocket.id)
                if not any_hit:
                    rockets.remove(rocket)
            # TODO: predict spawns within simulation!
            if next_hit:
                if next_hit.victim.is_future_meteor():
                    spawn = next(s for s in spawns if s.id == next_hit.victim.id)
                    spawns.remove(spawn)
                else:
                    meteor = next(m for m in meteors if m.id == next_hit.victim.id)
                    meteors.remove(meteor)
                rocket = next(r for r in rockets if r.id == next_hit.rocket_id)
                rockets.remove(rocket)
                hits.append(next_hit)
        return hits

    def _rocket_meteor_collision_time(self,
        rocket: Projectile, meteor: Meteor) -> Optional[float]:
        key = (rocket.id, meteor.id)
        if key in self.rocket_meteor_cache:
            return self.rocket_meteor_cache[key]
        delta_t = physics.next_collision_time(rocket, meteor)
        self.rocket_meteor_cache[key] = delta_t
        return delta_t
