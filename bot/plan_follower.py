from typing import List, Union

from actions import LookAtAction, ShootAction
import asserter
import nostradamus
import game_events
from game_message import *

# Maximum tolerated noise when checking the plan's values. Some floating point
# noise is expected and tolerated.
FLOAT_EQ_EPS = 1e-8

class PlanFollower(game_events.Listener):
    """Follow a 'nostradamus'-generated plan & check its validity."""

    def __init__(self, asserter_: asserter.Asserter):
        self.asserter = asserter_
        self.plan = None
        self.just_shot_id = None
        self.rocket_targets = {}

    def assign_plan(self, plan: List[nostradamus.Event]) -> None:
        self.plan = plan

    def get_actions(self, tick: int) -> List[LookAtAction | ShootAction]:
        actions = []
        next_shot = next((e for e in self.plan if e.event_type == 'Shoot'), None)
        if next_shot:
            x, y = next_shot.position
            actions.append(LookAtAction(Vector(x, y)))
            if next_shot.tick == tick:
                self.just_shot_id = next_shot.id
                self.rocket_targets[next_shot.id] = next_shot.target_id
                self.plan.pop(0)
                actions.append(ShootAction())
        return actions

    def tick_events(self, tick: int) -> List[nostradamus.Event]:
        next_tick_idx = next(
            (i for i, e in enumerate(self.plan) if e.tick > tick),
            len(self.plan))
        return self.plan[:next_tick_idx]

    def on_new_rocket(self, events: game_events.GameEvents, rocket_id: str) -> None:
        self.asserter.expect(
            self.just_shot_id is not None,
            f'Unexpected shot of: {rocket_id}, Plan: {self.plan[:1]}')
        self.asserter.expect(
            self.just_shot_id == rocket_id or
            rocket_id == game_events.INSTANT_KILL_ROCKET_ID,
            f'Expected rocket id {self.just_shot_id}, got {rocket_id}')
        self.just_shot_id = None

    def on_hit(self, events: game_events.GameEvents, rocket_id: str,
               meteor_id: str, collision_time: float) -> None:
        # TODO TEMPORARY, remove as soon as spawns are simulated
        self.asserter.expect(
            events.meteors[meteor_id].meteorType == MeteorType.Large,
            f'Meteor hit of non-large meteor not supported yet: {events.meteors[meteor_id]}')
        self.asserter.expect(
            self.plan and self.plan[0].event_type == 'Hit',
            f'Missing hit of {meteor_id} by {rocket_id}, Plan: {self.plan[:3]}')
        event = self.plan.pop(0)
        self.asserter.expect(
            event.rocket_id == rocket_id and event.meteor_id == meteor_id,
            f'Predicted rocket {event.rocket_id} hit on {event.meteor_id}, got '
            f'{rocket_id} hit on {meteor_id}')
        self.asserter.expect(
            self.rocket_targets[rocket_id] == meteor_id,
            f'Rocket {rocket_id} did not hit the intended '
            f'{self.rocket_targets[rocket_id]}, instead it hit {meteor_id}')

    def on_wiff(self, events: game_events.GameEvents, rocket_id: str) -> None:
        self.asserter.expect(False,
            f'Rocket {rocket_id} wiffed! '
            f'Target was: {self.rocket_targets.get(rocket_id)} '
            f'Plan: {self.plan[:1]}')

    def on_miss(self, events: game_events.GameEvents, meteor_id: str) -> None:
        self.asserter.expect(
            self.plan and self.plan[0].event_type == 'MeteorMiss',
            f'Unexpected miss of: {meteor_id}, Plan: {self.plan[:1]}')
        event = self.plan.pop(0)
        self.asserter.expect(event.id == meteor_id,
            'Miss meteor ID was not predicted correctly. '
            f'Predicted {event.id} Got {meteor_id}')
        targeted = next(
            (r for r, m in self.rocket_targets.items() if m == meteor_id),
            None)
        self.asserter.expect(targeted is None,
            f'Meteor {meteor_id} should have been hit by {targeted}')

    def on_meteor_spawn(self, events: game_events.GameEvents,
                        meteor_id: str) -> None:
        self.asserter.expect(
            self.plan and self.plan[0].event_type == 'MeteorSpawn',
            f'Unexpected spawn of: {meteor_id}, Plan: {self.plan[:1]}')
        event = self.plan.pop(0)
        self.asserter.expect(event.id == meteor_id,
            'Spawn meteor ID was not predicted correctly. '
            f'Predicted {event.id} Got {meteor_id}')
        meteor = events.meteors[meteor_id]
        self.asserter.expect(
            abs(event.position[0] - meteor.position.x) < FLOAT_EQ_EPS,
            f'Spawn pos X mispredicted for {meteor_id}: '
            f'pred {event.position} got {meteor.position}')
        self.asserter.expect(
            abs(event.position[1] - meteor.position.y) < FLOAT_EQ_EPS,
            f'Spawn pos Y mispredicted for {meteor_id}: '
            f'pred {event.position} got {meteor.position}')
        self.asserter.expect(
            abs(event.velocity[0] - meteor.velocity.x) < FLOAT_EQ_EPS,
            f'Spawn vel X mispredicted for {meteor_id}: '
            f'pred {event.velocity} got {meteor.velocity}')
        self.asserter.expect(
            abs(event.velocity[1] - meteor.velocity.y) < FLOAT_EQ_EPS,
            f'Spawn vel Y mispredicted for {meteor_id}: '
            f'pred {event.velocity} got {meteor.velocity}')

    def on_before_events(self, events: game_events.GameEvents,
                         game: GameMessage, changes: game_events.Changes) -> None:
        if not self.plan:
            return
        self.asserter.expect(self.plan[0].tick >= game.tick,
            f'Plan has an event that was skipped: {self.plan[0]}')

    def on_after_events(self, events: game_events.GameEvents,
                        game: GameMessage, changes: game_events.Changes) -> None:
        self.asserter.expect(
            self.just_shot_id is None,
            f'Just shot {self.just_shot_id}, but no rocket detected.')
        if not self.plan:
            return
        tick_events = [event for event in self.tick_events(game.tick)
                       if event.event_type != 'Shoot']
        self.asserter.expect(not tick_events,
            f'Plan expected {len(tick_events)} events on tick {game.tick} '
            f'which were not detected: {tick_events}')
