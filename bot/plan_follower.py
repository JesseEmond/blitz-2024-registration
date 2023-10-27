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
        print('Here is how it will go down:')
        for event in self.plan:
            t = event.tick
            line = f'- @{t:3}: '
            if event.event_type == 'MeteorSpawn':
                line += f'Spawn meteor {event.id}: '
                line += f'({event.position[0]:.2f}, {event.position[1]:.2f})'
            elif event.event_type == 'Shoot':
                line += f'Shoot rocket {event.id} at meteor {event.target_id} '
                line += f'(aim: ({event.position[0]:.2f}, {event.position[1]:.2f}))'
            elif event.event_type == 'Hit':
                line += f'Hit rocket {event.rocket_id} with meteor {event.meteor_id}'
            elif event.event_type == 'Split':
                line += f'Split rocket {event.parent_id} into meteor {event.id} '
                line += f' pos: ({event.position[0]:.2f}, {event.position[1]:.2f}) '
                line += f' vel: ({event.velocity[0]:.2f}, {event.velocity[1]:.2f})'
            elif event.event_type == 'MeteorMiss':
                line += f'Missed meteor {event.id}'
            else:
                raise NotImplementedError(event)
            print(line)

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

    def get_tick_events(self, tick: int, event_type: str) -> List[nostradamus.Event]:
        return [e for e in self.tick_events(tick) if e.event_type == event_type]

    def print_plan(self) -> str:
        short_term = [f'@{e.tick}:{e}' for e in self.plan[:5]]
        return '\n' + '\n- '.join(e for e in short_term)

    def on_new_rocket(self, events: game_events.GameEvents, rocket_id: str) -> None:
        self.asserter.expect(
            self.just_shot_id is not None,
            f'Unexpected shot of: {rocket_id}, Plan: {self.print_plan()}')
        self.asserter.expect(
            self.just_shot_id == rocket_id or
            rocket_id == game_events.INSTANT_KILL_ROCKET_ID,
            f'Expected rocket id {self.just_shot_id}, got {rocket_id}')
        self.just_shot_id = None

    def on_hit(self, events: game_events.GameEvents, rocket_id: str,
               meteor_id: str, collision_time: float) -> None:
        hit_event = next(
            (e for e in self.get_tick_events(events.current_tick, 'Hit')
             if e.rocket_id == rocket_id or e.meteor_id == meteor_id),
            None)
        self.asserter.expect(hit_event,
            f'Missing hit of {meteor_id} by {rocket_id}, Plan: {self.print_plan()}')
        event = self.plan.remove(hit_event)
        right_rocket = (hit_event.rocket_id == rocket_id or
                        rocket_id == game_events.INSTANT_KILL_ROCKET_ID)
        self.asserter.expect(right_rocket,
            f'Predicted rocket {hit_event.rocket_id} hit on {hit_event.meteor_id}, got '
            f'{rocket_id} hit on {meteor_id}')
        # Now we know we can trust the hit_event.rocket_id. Use it, in case this
        # was an instant kill (so our game_events doesn't know the true rocket
        # id)
        rocket_id = hit_event.rocket_id
        self.asserter.expect(
            self.rocket_targets[rocket_id] == meteor_id,
            f'Rocket {rocket_id} did not hit the intended '
            f'{self.rocket_targets[rocket_id]}, instead it hit {meteor_id}')

    def on_wiff(self, events: game_events.GameEvents, rocket_id: str) -> None:
        self.asserter.expect(False,
            f'Rocket {rocket_id} wiffed! '
            f'Target was: {self.rocket_targets.get(rocket_id)} '
            f'Plan: {self.print_plan()}')

    def on_miss(self, events: game_events.GameEvents, meteor_id: str) -> None:
        miss_event = next(
            (e for e in self.get_tick_events(events.current_tick, 'MeteorMiss')
             if e.id == meteor_id),
            None)
        self.asserter.expect(miss_event,
            f'Unexpected miss of: {meteor_id}, Plan: {self.print_plan()}')
        event = self.plan.remove(miss_event)
        self.asserter.expect(miss_event.id == meteor_id,
            'Miss meteor ID was not predicted correctly. '
            f'Predicted {miss_event.id} Got {meteor_id}')
        targeted = next(
            (r for r, m in self.rocket_targets.items() if m == meteor_id),
            None)
        self.asserter.expect(targeted is None,
            f'Meteor {meteor_id} should have been hit by {targeted}')

    def on_meteor_spawn(self, events: game_events.GameEvents,
                        meteor_id: str) -> None:
        spawn_event = next(
            (e for e in self.get_tick_events(events.current_tick, 'MeteorSpawn')
             if e.id == meteor_id),
            None)
        self.asserter.expect(spawn_event,
            f'Unexpected spawn of: {meteor_id}, Plan: {self.print_plan()}')
        event = self.plan.remove(spawn_event)
        self.asserter.expect(spawn_event.id == meteor_id,
            'Spawn meteor ID was not predicted correctly. '
            f'Predicted {spawn_event.id} Got {meteor_id}')
        meteor = events.meteors[meteor_id]
        self.asserter.expect(
            abs(spawn_event.position[0] - meteor.position.x) < FLOAT_EQ_EPS,
            f'Spawn pos X mispredicted for {meteor_id}: '
            f'pred {spawn_event.position} got {meteor.position}')
        self.asserter.expect(
            abs(spawn_event.position[1] - meteor.position.y) < FLOAT_EQ_EPS,
            f'Spawn pos Y mispredicted for {meteor_id}: '
            f'pred {spawn_event.position} got {meteor.position}')
        self.asserter.expect(
            abs(spawn_event.velocity[0] - meteor.velocity.x) < FLOAT_EQ_EPS,
            f'Spawn vel X mispredicted for {meteor_id}: '
            f'pred {spawn_event.velocity} got {meteor.velocity}')
        self.asserter.expect(
            abs(spawn_event.velocity[1] - meteor.velocity.y) < FLOAT_EQ_EPS,
            f'Spawn vel Y mispredicted for {meteor_id}: '
            f'pred {spawn_event.velocity} got {meteor.velocity}')

    def on_meteor_split_spawn(self, events: game_events.GameEvents,
                              meteor_id: str,
                              expected: game_events.MeteorSplit) -> None:
        spawn_event = next(
            (e for e in self.get_tick_events(events.current_tick, 'Split')
             if e.id == meteor_id),
            None)
        self.asserter.expect(
            spawn_event,
            f'Unexpected split of: {expected.spawn.parent.id} into {meteor_id}, '
            f'Plan: {self.print_plan()}')
        event = self.plan.remove(spawn_event)
        self.asserter.expect(spawn_event.id == meteor_id,
            'Split meteor ID was not predicted correctly. '
            f'Predicted {spawn_event.id} Got {meteor_id}')
        self.asserter.expect(spawn_event.parent_id == expected.spawn.parent.id,
            'Split meteor parent ID was not predicted correctly. '
            f'Predicted {spawn_event.parent_id} Got {expected.spawn.parent.id}')
        meteor = events.meteors[meteor_id]
        self.asserter.expect(
            abs(spawn_event.velocity[0] - meteor.velocity.x) < FLOAT_EQ_EPS,
            'Split meteor velocity X was not predicted correctly. '
            f'Predicted {spawn_event.velocity} Got {meteor.velocity}')
        self.asserter.expect(
            abs(spawn_event.velocity[1] - meteor.velocity.y) < FLOAT_EQ_EPS,
            'Split meteor velocity Y was not predicted correctly. '
            f'Predicted {spawn_event.velocity} Got {meteor.velocity}')
        self.asserter.expect(
            abs(spawn_event.position[0] - meteor.position.x) < FLOAT_EQ_EPS,
            'Split meteor pos X was not predicted correctly. '
            f'Predicted {spawn_event.position} Got {meteor.position}')
        self.asserter.expect(
            abs(spawn_event.position[1] - meteor.position.y) < FLOAT_EQ_EPS,
            'Split meteor pos Y was not predicted correctly. '
            f'Predicted {spawn_event.position} Got {meteor.position}')

    def on_before_events(self, events: game_events.GameEvents,
                         game: GameMessage, changes: game_events.Changes) -> None:
        if not self.plan:
            return
        skipped = [e for e in self.plan if e.tick < game.tick]
        self.asserter.expect(not skipped,
            f'Plan has skipped event(s): {skipped}')

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
