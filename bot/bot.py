import math
import time
from typing import List, Optional, Tuple

from game_message import *
from actions import *

import asserter
import game_events
import invariants
import physics
import stats
import target_picker
import target_tracker


class Bot:
    def __init__(self, on_server: bool):
        self.verbose = on_server
        debug_mode = not on_server
        self.constants = None
        self.bounds = None

        self.asserter = asserter.Asserter(debug_mode)
        self.events = game_events.GameEvents()
        self.stats = stats.Stats(self.asserter)
        self.tracker = target_tracker.TargetTracker(self.asserter, self.stats)
        self.picker = target_picker.TargetPicker(self.verbose)

        self.events.add_listener(self.asserter)
        self.events.add_listener(self.stats)
        self.events.add_listener(self.tracker)
        self.events.add_listener(invariants.Invariants(self.asserter))

    def info(self, s: str) -> None:
        if self.verbose:
            print(s)

    def get_next_move(self, game: GameMessage):
        start_time = time.time()
        self.info(f"Playing tick {game.tick}. Score: {game.score}")

        if not self.constants:
            self.constants = game.constants
            self.bounds = physics.Bounds(game.cannon, game.constants.world)
            self.events.first_tick(self.constants, self.bounds)
            self.info(f'Constants: {self.constants}')

        self.events.update(game)
        self.tracker.refresh_assignments(game)

        actions = []

        if not game.meteors:
            self.info('No meteors to shoot at!')

        assigned_ids = self.tracker.targeted_meteors()
        meteor_ids = {m.id for m in game.meteors}
        unassigned_ids = meteor_ids - assigned_ids
        target = self.picker.pick_target(
            game.cannon, game.meteors, unassigned_ids, self.constants,
            self.bounds, game.tick)
        if not target:
            self.info('No target to shoot at!')
            return actions
        actions.append(LookAtAction(target=target.aim_point))

        if not game.cannon.cooldown:
            self.info(f'Shooting!')
            self.tracker.assign_target(target.meteor_id, target.hit_time)
            actions.append(ShootAction())
        else:
            self.info(f'Cannon on cooldown, waiting {game.cannon.cooldown}...')

        tick_time = time.time() - start_time
        self.stats.record_tick_time(tick_time)
        self.info(f'Tick time: {tick_time * 1000:.1f}ms')
        self.asserter.expect(tick_time < 1, f'Slow tick: {tick_time:.3f}s')
        return actions

    def on_close(self):
        print('Game done! Summary...')
        self.stats.print_stats()
