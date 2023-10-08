import dataclasses
from typing import Optional

from game_message import *

import asserter
import game_events
import physics
import stats

@dataclasses.dataclass
class Target:
    id_: str
    hit_time: float

class TargetTracker(game_events.Listener):

    def __init__(self, asserter_: asserter.Asserter, stats_: stats.Stats):
        self.asserter = asserter_
        self.stats = stats_

        self.rocket_targets = {}
        self.next_rocket_target = None

    def on_new_rocket(self, events: game_events.GameEvents,
                      rocket_id: str) -> None:
        target = self.next_rocket_target
        self.next_rocket_target = None
        if not self.asserter.expect(
            target is not None,
            f'New shot rocket {rocket_id} has no target picked'):
            return
        self.rocket_targets[rocket_id] = target
        print(f'(aim) rocket {rocket_id} to meteor {target.id_}')

    def on_hit(self, events: game_events.GameEvents, rocket_id: str,
               meteor_id: str, collision_time: float) -> None:
        target = self.rocket_targets.get(rocket_id)
        wrong_target = not target or target.id_ != meteor_id
        if wrong_target:
            target_id = target.id_ if target else None
            self.stats.record_wrong_target(rocket_id, target_id, meteor_id)
            prev_assignment = self.get_assignment(meteor_id)
            # TODO: remove pedantic once we can guarantee this won't happen
            if not self.asserter.expect(
                prev_assignment is None,
                f'Rocket {prev_assignment} had meteor {meteor_id}. Resetting.',
                pedantic=True):
                del self.rocket_targets[prev_assignment]
        else:
            self.stats.record_target_prediction(target.hit_time, collision_time)
        if target:
            del self.rocket_targets[rocket_id]

    def get_assignment(self, meteor_id: str) -> Optional[str]:
        return next(
            (rocket_id for rocket_id, target in self.rocket_targets.items()
             if target.id_ == meteor_id),
            None)

    def is_targeted(self, meteor_id: str) -> bool:
        return any(target for target in self.rocket_targets.values()
                   if target.id_ == meteor_id)

    def assign_target(self, meteor_id: str, hit_time: float) -> None:
        self.asserter.expect(
            self.next_rocket_target is None,
            f'Assigning target meteor {meteor_id} @ {hit_time}, but already '
            f'had a target: {self.next_rocket_target}')
        self.next_rocket_target = Target(meteor_id, hit_time)
