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
                    time = self._rocket_meteor_collision_time(rocket, meteor)
                    if time is None:
                        continue
                    if (bounds.is_out(rocket.advance(time)) and
                        bounds.is_out(meteor.advance(time))):
                        continue
                    any_hit = True
                    if not next_hit or time < next_hit.delta_t:
                        next_hit = Hit(
                            time, physics.SpawnableMeteor.from_meteor(meteor),
                            rocket.id)
                for spawn in spawns:
                    # TODO: consider speed distribution, not just avg
                    if current_time > spawn.spawn_time:
                        for rocket in rockets:
                            print(rocket)
                        for meteor in meteors:
                            print(meteor)
                    instance = dataclasses.replace(spawn)
                    instance = instance.rewind_for_physics(current_time)
                    time = self._rocket_meteor_collision_time(rocket, instance)
                    if time is None:
                        continue
                    if not instance.is_valid_hit(current_time + time):
                        continue
                    if (bounds.is_out(rocket.advance(time)) and
                        bounds.is_out(instance.advance(time))):
                        continue
                    any_hit = True
                    if not next_hit or time < next_hit.delta_t:
                        next_hit = Hit(time, spawn, rocket.id)
                if not any_hit:
                    rockets.remove(rocket)
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
        time = physics.next_collision_time(rocket, meteor)
        self.rocket_meteor_cache[key] = time
        return time
