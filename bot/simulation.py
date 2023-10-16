import dataclasses
from typing import List, Optional
from game_message import *

import physics

@dataclasses.dataclass
class Hit:
    time: float
    meteor: Meteor
    rocket_id: str


class Simulation:

    def __init__(self) -> None:
        self.rocket_meteor_cache = {}

    def simulate(
        self, bounds: physics.Bounds, rockets: List[Projectile],
        meteors: List[Meteor], predicted_spawns: List[physics.Spawn]) -> List[Hit]:
        rockets = list(rockets)
        meteors = list(meteors)
        # TODO: handle spawns
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
                    if not next_hit or time < next_hit.time:
                        next_hit = Hit(time, meteor, rocket.id)
                if not any_hit:
                    rockets.remove(rocket)
            if next_hit:
                # TODO: handle spawns
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
