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

    def assign_plan(self, plan: List[nostradamus.Event]) -> None:
        self.plan = plan

    def get_actions(self, tick: int) -> List[LookAtAction | ShootAction]:
        return []

    def tick_events(self, tick: int) -> List[nostradamus.Event]:
        next_tick_idx = next(
            (i for i, e in enumerate(self.plan) if e.tick > tick),
            len(self.plan))
        return self.plan[:next_tick_idx]

    def on_meteor_spawn(self, events: game_events.GameEvents,
                        meteor_id: str) -> None:
        self.asserter.expect(
            self.plan and self.plan[0].event_type == 'MeteorSpawn',
            f'Unexpected spawn of: {meteor_id}')
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

    def on_after_events(self, events: game_events.GameEvents,
                        game: GameMessage, changes: game_events.Changes) -> None:
        if not self.plan:
            return
        tick_events = self.tick_events(game.tick)
        self.asserter.expect(not tick_events,
            f'Plan expected {len(tick_events)} events on tick {game.tick} '
            f'which were not detected: {tick_events}')
