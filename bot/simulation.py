import dataclasses
from typing import List, Optional
from game_message import *

import physics

@dataclasses.dataclass
class Hit:
    delta_t: float
    meteor: Meteor
    rocket_id: str
    is_predicted_meteor: bool


class Simulation:

    def __init__(self) -> None:
        self.rocket_meteor_cache = {}

    def simulate(
        self, current_time: float, bounds: physics.Bounds,
        rockets: List[Projectile], meteors: List[Meteor],
        predicted_spawns: List[physics.Spawn]) -> List[Hit]:
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
                        next_hit = Hit(time, meteor, rocket.id,
                                       is_predicted_meteor=False)
                for spawn in spawns:
                    # Note: from disassembling the local binary, we find that
                    # spawns are handled by spawning at their position based on
                    # the exact floating point time of collision (e.g. time
                    # 34.567), but still move for the value of an entire tick
                    # afterwards (instead of the remainder of the tick).
                    # To simulate them: spawn them at t=ceiling(spawn_time)
                    # assuming position+1*velocity, move them back 't', and only
                    # consider collisions that happen after spawn_time.
                    # TODO: consider speed distribution, not just avg
                    instance = dataclasses.replace(spawn)
                    next_tick_t = math.ceil(instance.spawn_time)
                    delta_t = next_tick_t - current_time
                    assert delta_t > 0, delta_t
                    # move forward by 1, then backwards by delta_t
                    # i.e. -(next_tick_t-1)
                    instance = instance.advance(-(delta_t - 1))
                    time = self._rocket_meteor_collision_time(rocket, instance)
                    if time is None:
                        continue
                    if current_time + time < next_tick_t:  # not spawned yet!
                        # Note that we use next_tick_t, not spawn_time, because
                        # the logic of the server finds all collisions THEN
                        # creates splits, so splits can only collide on the next
                        # tick's processing
                        continue
                    if (bounds.is_out(rocket.advance(time)) and
                        bounds.is_out(instance.advance(time))):
                        continue
                    any_hit = True
                    if not next_hit or time < next_hit.delta_t:
                        next_hit = Hit(time, spawn, rocket.id,
                                       is_predicted_meteor=True)
                if not any_hit:
                    rockets.remove(rocket)
            if next_hit:
                if next_hit.is_predicted_meteor:
                    spawn = next(s for s in spawns if s.id == next_hit.meteor.id)
                    spawns.remove(spawn)
                else:
                    meteors.remove(next_hit.meteor)
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
