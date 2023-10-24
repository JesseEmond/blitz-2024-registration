import math
import time
from typing import List, Optional, Tuple

from game_message import *
from actions import *

import asserter
import game_events
import invariants
import nostradamus
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
        self.nostradamus = None

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
        assert not game.lastTickErrors,\
            f'Errors during last tick : {game.lastTickErrors}'
        start_time = time.time()
        self.info(f"Playing tick {game.tick}. Score: {game.score}")

        if not self.constants:
            self.constants = game.constants
            self.bounds = physics.Bounds(game.cannon, game.constants.world)
            self.events.first_tick(self.constants, self.bounds)
            self.info(f'Constants: {self.constants}')

        if not self.nostradamus and game.meteors:
            # TODO: print something
            first_meteor = game.meteors[0]
            init = nostradamus.NostradamusInit(
                game_width=game.constants.world.width,
                game_height=game.constants.world.height,
                large_meteor_speed=game.constants.meteorInfos[MeteorType.Large].approximateSpeed,
                first_meteor_pos=(first_meteor.position.x, first_meteor.position.y),
                first_meteor_vel=(first_meteor.velocity.x, first_meteor.velocity.y))
            self.nostradamus = nostradamus.Nostradamus(init)


        self.events.update(game)
        self.tracker.refresh_assignments(game)

        actions = []

        if not game.meteors:
            self.info('No meteors to shoot at!')

        pick = self.picker.pick_target(
            game.cannon, game.rockets, game.meteors,
            self.tracker.targetable_meteors(game.meteors),
            self.constants, self.bounds, game.tick)
        do_shoot = False
        if pick:
            actions.append(LookAtAction(target=pick.aim_point))

            if game.cannon.cooldown == 0:
                self.info(f'Shooting!')
                delta_t = pick.target.hit_time - game.tick
                assert delta_t >= 0, pick
                explosions = physics.expect_explosions(
                    pick.rocket.advance(delta_t),
                    pick.target.victim.advance(delta_t), pick.target.hit_time,
                    self.constants)
                self.tracker.set_next_rocket_target(pick.target, explosions)
                if pick.target.victim.is_future_meteor():
                    self.stats.record_predicted_shot(pick.target.victim.id)
                do_shoot = True
            else:
                self.info(f'Cannon on cooldown, waiting {game.cannon.cooldown}...')
        else:  # no target
            self.info('No target to shoot at!')

        if do_shoot:
            actions.append(ShootAction())
        elif game.cannon.cooldown == 0:
            self.stats.record_idle_tick()

        tick_time = time.time() - start_time
        self.stats.record_tick_time(tick_time)
        self.info(f'Tick time: {tick_time * 1000:.1f}ms')
        self.asserter.expect(tick_time < 1, f'Slow tick: {tick_time:.3f}s')
        return actions

    def on_close(self):
        print('Game done! Summary...')
        self.stats.print_stats()
