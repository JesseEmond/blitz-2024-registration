from game_message import *

import game_events

class Asserter(game_events.Listener):
    """Helper class to debug when invariants are broken."""
    
    def __init__(self, debug_mode: bool, pedantic: bool = False):
        """'debug_mode' will crash on invariant breakage instead of just log."""
        self.debug_mode = debug_mode
        self.pedantic_mode = pedantic  # Used when debugging
        self.eval_fails = 0
        self.pedantic_eval_fails = 0
        self.game = None
        self.prev_game = None

    def on_tick(
        self, events: game_events.GameEvents, game: GameMessage) -> None:
        self.prev_game = self.game
        self.game = game

    def crash_on_fail(self, pedantic: bool) -> bool:
        return self.debug_mode and (not pedantic or self.pedantic_mode)

    def expect(self, expect_true: bool, fail_msg: str,
               pedantic: bool = False) -> bool:
        if expect_true:
            return expect_true
        print(f'[EXPECTATION failure]: {fail_msg}')
        print('Previous tick:')
        if self.prev_game:
            self.prev_game._debug_print()
        print()
        print('Current tick:')
        self.game._debug_print()
        if self.crash_on_fail(pedantic):
            assert expect_true, fail_msg
        return expect_true
