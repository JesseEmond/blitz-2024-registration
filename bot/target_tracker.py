import dataclasses
from typing import Optional, Set

from game_message import *

import asserter
import game_events
import physics
import simulation
import stats

@dataclasses.dataclass
class Target:
    meteor: Meteor
    hit_time: Optional[float]
    # TODO: spawn time

class TargetTracker(game_events.Listener):

    def __init__(self, asserter_: asserter.Asserter, stats_: stats.Stats):
        self.asserter = asserter_
        self.stats = stats_

        self.bounds = None

        self.rocket_targets = {}
        self.expected_spawns = {}
        self.next_rocket_target = None

    def on_first_tick(self, events: game_events.GameEvents,
                      constants: Constants, bounds: physics.Bounds) -> None:
        self.bounds = bounds

    def on_new_rocket(self, events: game_events.GameEvents,
                      rocket_id: str) -> None:
        target = self.next_rocket_target
        self.next_rocket_target = None
        if not self.asserter.expect(
            target is not None,
            f'New shot rocket {rocket_id} has no target picked'):
            return
        self.rocket_targets[rocket_id] = target
        print(f'(aim) rocket {rocket_id} to meteor {target.meteor.id}')

    def on_hit(self, events: game_events.GameEvents, rocket_id: str,
               meteor_id: str, collision_time: float) -> None:
        target = self.rocket_targets.get(rocket_id)
        wrong_target = not target or target.meteor.id != meteor_id
        if wrong_target:
            target_id = target.meteor.id if target else None
            # TODO: log # planned explosions that are impacted by this, update
            # their assignments if relevant
            assert meteor_id not in self.expected_spawns
            assert target_id not in self.expected_spawns
            self.stats.record_wrong_target(rocket_id, target_id, meteor_id)
            prev_assignment = self.get_assignment(meteor_id)
            # TODO: remove pedantic once we can guarantee this won't happen
            if not self.asserter.expect(
                prev_assignment is None,
                f'Rocket {prev_assignment} had meteor {meteor_id}. Resetting.',
                pedantic=True):
                del self.rocket_targets[prev_assignment]
        else:
            self.stats.record_prediction_result(target.hit_time, collision_time)
        if target:
            del self.rocket_targets[rocket_id]

    def refresh_assignments(self, game: GameMessage) -> None:
        sim = simulation.Simulation()
        seen_rockets = set()
        # TODO: handle expected explosions
        hits = sim.simulate(self.bounds, game.rockets,
                            game.meteors, self.expected_spawns)
        for hit in hits:
            seen_rockets.add(hit.rocket_id)
            target = self.rocket_targets.get(hit.rocket_id)
            target_id = target.meteor.id if target else None
            if target_id != hit.meteor.id:
                self.rocket_targets[hit.rocket_id] = Target(
                    hit.meteor, game.tick + hit.time)
                self.stats.record_changed_target(hit.rocket_id, target_id,
                                                 hit.meteor.id)
        missing_rockets = set(self.rocket_targets.keys()) - seen_rockets
        for rocket_id in missing_rockets:
            target_id = self.rocket_targets[rocket_id].meteor.id
            self.stats.record_changed_target(rocket_id, target_id, None)
            del self.rocket_targets[rocket_id]

    def get_assignment(self, meteor_id: str) -> Optional[str]:
        return next(
            (rocket_id for rocket_id, target in self.rocket_targets.items()
             if target.meteor.id == meteor_id),
            None)

    def targetable_meteors(self, meteors: List[Meteor]) -> List[Target]:
        targeted = {target.meteor.id for target in self.rocket_targets.values()}
        # TODO: include expected explosions
        return [Target(meteor, hit_time=None) for meteor in meteors
                if meteor.id not in targeted]

    def set_next_rocket_target(self, target: Target) -> None:
        assert target.hit_time is not None, target
        self.asserter.expect(
            self.next_rocket_target is None,
            f'Assigning target meteor {target.meteor.id} @ {target.hit_time}, '
            'but already had a target: {self.next_rocket_target}')
        self.next_rocket_target = target
        # TODO: add expected explosions
