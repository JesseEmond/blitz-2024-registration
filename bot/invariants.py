from game_message import *

import asserter
import game_events

class Invariants(game_events.Listener):
    """General invariant checks."""
    def __init__(self, asserter_: asserter.Asserter):
        self.asserter = asserter_
        self.game_tick = None

    def on_before_events(self, events: game_events.GameEvents,
                         game: GameMessage, changes: game_events.Changes):
        self.game_tick = game.tick

    def on_after_events(self, events: game_events.GameEvents, game: GameMessage,
                        changes: game_events.Changes) -> None:
        if not self.asserter.expect(
            game_events.INSTANT_KILL_ROCKET_ID not in events.rockets,
            f'Insta kill, but no hits found. Meteors: {changes.lost_meteors}'):
            del events.rockets[game_events.INSTANT_KILL_ROCKET_ID]

    def on_hit(self, events: game_events.GameEvents, rocket_id: str,
               meteor_id: str, collision_time: float) -> None:
        previous_tick = self.game_tick - 1
        self.asserter.expect(
            previous_tick <= collision_time <= self.game_tick,
            f'Detected hit of rocket {rocket_id} with meteor {meteor_id} '
            f'outside of expected time. Last tick was {previous_tick}, tick is '
            f'now {self.game_tick}, inferred collision time: {collision_time}.')
