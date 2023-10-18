import dataclasses
from typing import Dict, List, Optional, Set

from game_message import *

import asserter
import game_events
import physics
import simulation
import stats

@dataclasses.dataclass
class Target:
    victim: physics.SpawnableMeteor
    hit_time: Optional[float]

class TargetTracker(game_events.Listener):

    def __init__(self, asserter_: asserter.Asserter, stats_: stats.Stats):
        self.asserter = asserter_
        self.stats = stats_

        self.bounds = None
        self.constants = None

        self.rocket_targets: Dict[str, Target] = {}
        self.predicted_spawns: Dict[str, physics.SpawnableMeteor] = {}
        self.next_rocket_target = None

    def on_first_tick(self, events: game_events.GameEvents,
                      constants: Constants, bounds: physics.Bounds) -> None:
        self.bounds = bounds
        self.constants = constants

    def on_new_rocket(self, events: game_events.GameEvents,
                      rocket_id: str) -> None:
        target = self.next_rocket_target
        self.next_rocket_target = None
        if not self.asserter.expect(
            target is not None,
            f'New shot rocket {rocket_id} has no target picked'):
            return
        self.rocket_targets[rocket_id] = target
        print(f'(aim) rocket {rocket_id} to meteor {target.victim.id}')

    def on_meteor_split_spawn(
        self, events: game_events.GameEvents, meteor_id: str,
        expected: game_events.MeteorSplit) -> None:
        meteor = events.meteors[meteor_id]
        if not self.asserter.expect(
            expected.spawn.id in self.predicted_spawns,
            f'Unpredicted split spawn: {expected.spawn.id}, '
            f'known: {list(self.predicted_spawns.keys())}'):
            return
        predicted = self.predicted_spawns[expected.spawn.id]
        delta_t = predicted.spawn_time - events.previous_tick
        self.asserter.expect(
            0 <= delta_t < 1.0,
            f'Predicted spawn for {predicted.id} was too off: '
            f'{predicted.spawn_time} vs {events.previous_tick}')
        rocket_id = self.get_assignment(expected.spawn.id)
        if rocket_id is not None:
            # We now know the real spawn's velocity. Remove the target and let
            # refresh_assignments pick it back up if still relevant.
            self.change_target(
                events.previous_tick, events.rockets[rocket_id], None)
        del self.predicted_spawns[expected.spawn.id]

    def on_hit(self, events: game_events.GameEvents, rocket_id: str,
               meteor_id: str, collision_time: float) -> None:
        target = self.rocket_targets.get(rocket_id)
        wrong_target = not target or target.victim.id != meteor_id
        if wrong_target:
            rocket = events.rockets[rocket_id]
            new_target = Target(
                physics.SpawnableMeteor.from_meteor(events.meteors[meteor_id]),
                collision_time)
            self.change_target(events.previous_tick, rocket, new_target)
            target_id = target.victim.id if target else None
            self.stats.record_wrong_target(rocket_id, target_id, meteor_id)
        else:
            self.stats.record_prediction_result(target.hit_time, collision_time)
        del self.rocket_targets[rocket_id]

    def on_miss(self, events: game_events.GameEvents, meteor_id: str) -> None:
        self.dont_expect_spawns(meteor_id)

    def on_wiff(self, events: game_events.GameEvents, rocket_id: str) -> None:
        if not self.asserter.expect(rocket_id not in self.rocket_targets,
            f'Wiffed, but did not clear target beforehand? {rocket_id}'):
            del self.rocket_targets[rocket_id]

    def on_after_events(self, events: game_events.GameEvents, game: GameMessage,
                        changes: game_events.Changes) -> None:
        for predicted in self.predicted_spawns.values():
            self.asserter.expect(
                predicted.spawn_time > game.tick,
                f'Expect {predicted.id} to spawn on {predicted.spawn_time}, '
                f'but tick is now {game.tick}')

    def change_target(self, current_time: float, rocket: Projectile,
                      new_target: Optional[Target]) -> None:
        prev_target = self.rocket_targets.get(rocket.id)
        if prev_target:
            self.dont_expect_spawns(prev_target.victim.id)
        if new_target:
            prev_assignment = self.get_assignment(new_target.victim.id)
            # TODO: remove pedantic once we can guarantee this won't happen
            if not self.asserter.expect(
                prev_assignment is None,
                f'Rocket {prev_assignment} had meteor {new_target.victim.id}. Resetting.',
                pedantic=True):
                # TODO: capture this in stats
                del self.rocket_targets[prev_assignment]
            self.rocket_targets[rocket.id] = new_target
            # Regenerate the expected explosions
            self.dont_expect_spawns(new_target.victim.id)
            explosions = physics.expect_explosions(
                rocket, new_target.victim, new_target.hit_time, self.constants)
            for explosion in explosions:
                print(f'(EXPL) Predict meteor {new_target.victim.id} to explode '
                      f'into {explosion.id} at t={new_target.hit_time:.2f}')
                assert explosion.id not in self.predicted_spawns,\
                    (explosion, self.predicted_spawns)
                self.predicted_spawns[explosion.id] = explosion

    def dont_expect_spawns(self, meteor_id: str) -> None:
        print(f'(EXPL) Meteor {meteor_id} will not split')
        children = [spawn for spawn in self.predicted_spawns.values()
                    if spawn.parent and spawn.parent.id == meteor_id]
        for child in children:
            print(f'(EXPL) Removing meteor {meteor_id} explosion {child.id} '
                  'from predictions')
            del self.predicted_spawns[child.id]
            assignment = self.get_assignment(child.id)
            # TODO: remove pedantic once we can guarantee this won't happen
            if not self.asserter.expect(
                assignment is None,
                f'Rocket {assignment} had target spawn {child.id}. Resetting.',
                pedantic=True):
                # TODO: capture this in stats
                del self.rocket_targets[assignment]
            self.dont_expect_spawns(child.id)

    def refresh_assignments(self, game: GameMessage) -> None:
        sim = simulation.Simulation()
        seen_rockets = set()
        time = game.tick - 1
        hits = sim.simulate(time, self.bounds, game.rockets, game.meteors,
                            self.predicted_spawns.values())
        for hit in hits:
            seen_rockets.add(hit.rocket_id)
            target = self.rocket_targets.get(hit.rocket_id)
            target_id = target.victim.id if target else None
            if target_id != hit.victim.id:
                new_target = Target(hit.victim, time + hit.delta_t)
                rocket = next(r for r in game.rockets if r.id == hit.rocket_id)
                self.change_target(time, rocket, new_target)
                self.stats.record_changed_target(hit.rocket_id, target_id,
                                                 hit.victim.id)
        missing_rockets = set(self.rocket_targets.keys()) - seen_rockets
        for rocket_id in missing_rockets:
            target_id = self.rocket_targets[rocket_id].victim.id
            self.stats.record_changed_target(rocket_id, target_id, None)
            rocket = next(r for r in game.rockets if r.id == rocket_id)
            self.change_target(time, rocket, None)
            del self.rocket_targets[rocket_id]

    def get_assignment(self, meteor_id: str) -> Optional[str]:
        # Note: if slow, can add to rocket_id: meteor_id map
        return next(
            (rocket_id for rocket_id, target in self.rocket_targets.items()
             if target.victim.id == meteor_id),
            None)

    def targetable_meteors(self, meteors: List[Meteor]) -> List[Target]:
        already_targeted = {
            target.victim.id for target in self.rocket_targets.values()}
        targets = [
            Target(physics.SpawnableMeteor.from_meteor(meteor), hit_time=None)
            for meteor in meteors if meteor.id not in already_targeted]
        targets.extend((Target(spawn, hit_time=None)
                        for id_, spawn in self.predicted_spawns.items()
                        if id_ not in already_targeted))
        return targets

    def set_next_rocket_target(
        self, target: Target, explosions: List[physics.SpawnableMeteor]) -> None:
        assert target.hit_time is not None, target
        print(f'(aim) shooting meteor {target.victim.id}, hit at '
              f't={target.hit_time:.2f}')
        self.asserter.expect(
            self.next_rocket_target is None,
            f'Assigning target meteor {target.victim.id} @ {target.hit_time}, '
            'but already had a target: {self.next_rocket_target}')
        self.next_rocket_target = target
        for explosion in explosions:
            print(f'(EXPL) Predicting {target.victim.id} explosion '
                  f'{explosion.id} at t={explosion.spawn_time:.2f}')
            # TODO: turn into expect
            assert explosion.id not in self.predicted_spawns, \
                (explosion, self.predicted_spawns)
            self.predicted_spawns[explosion.id] = explosion
