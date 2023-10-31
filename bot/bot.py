import cattrs
import json
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
import plan_follower
import stats
import target_picker
import target_tracker


class Bot:
    def __init__(self, on_server: bool, use_py_bot: bool):
        self.verbose = on_server
        debug_mode = not on_server
        self.use_py_bot = use_py_bot
        self.constants = None
        self.bounds = None
        self.nostradamus = None

        self.asserter = asserter.Asserter(debug_mode)
        self.events = game_events.GameEvents()
        self.stats = stats.Stats(self.asserter)
        self.plan_follower = plan_follower.PlanFollower(self.asserter)
        self.tracker = target_tracker.TargetTracker(self.asserter, self.stats)
        self.picker = target_picker.TargetPicker(self.verbose)

        self.events.add_listener(self.asserter)
        self.events.add_listener(self.stats)
        if use_py_bot:
            self.events.add_listener(self.tracker)
        else:
            self.events.add_listener(self.plan_follower)
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
            self.nostradamus = nostradamus.Nostradamus(
                json.dumps(cattrs.unstructure(game)))
            print('Nostradamus init̸i̸a̶l̵i̵z̷--')
            print('I̴ ̸H̷A̶V̵E̵ ̶S̴E̸E̷N̵ ̶E̸V̶E̴R̵Y̷T̵H̴I̸N̸G̷ ̷T̸H̵E̷R̴E̸ ̸I̶S̸,̵ ̶T̵̢̊̒͠H̶̻͔̍̍̃̀E̶̤͗R̴͓̮̹͂͒È̴̙̲̒̈́͂̈́ ̶̡̡̰̞̱̈́̍W̵̖̥̿͝A̸̹̤͚̤͋͒S̸͖̈́̀,̸̞̘̘̻̃̅ ̸͎͛͆̕A̶̠̓̈́N̶͎̽̃͐͝D̵̛̥̂̇̓ ̸͙̻̮̐͆W̶̭͆I̴̛̜̖̩̲̍͊̔L̸̢̛̘̹L̵͓̼͑̋̐ ̷͎͖̗̈B̸̦͒̌̒̀E̸̢̮̳͑͆͂̚.̶̠́͋̀̑̓'
                  'A̸͕͖̲̲̰̠͓̥͇̔̈͐̈́̿̆̀̒̿͊͂͊̎́̅͠C̵̨͖̱̭̣͕̭͕̫͌͋̂͑̒͒̈́̋́̈́̀̀͋̑͐̔͐̏̕̚̕͜R̴̢̛͙̦̿͒̈̑̆͊̂͆̇̂̓̇̾̓̇̆̚̕͘Ỏ̵̻̤̈́̓̇̃̍̉̉̾̌̐̓͐͐́̓́͐̈́̏̆̕Š̸̢̫̩̜̥̦̺̻͙̭̰̝̳͕̖̱͍̓̉̈́͛̓̽̒̅̓̆̆̓̈̚͘͠S̴̡̛͖̬̲̩̯̞̀̿͒̽̌͌͌́̀̄̒͒̈́̓͛̋͐͌ͅ ̵͔͚͍̳̭̮̣̫͉̺̳̿̋̿́̀̀̈́̈͆͝͠͠Ą̸̢͖̥͙̤̮͙͓̱̣͖̞̥̥̓̒̎͋̊́̀̇̏̅̍̏̂̌̓͛̓̒͊͠͠Ļ̶̮̮̱̹̀̒̀̿̈́́̽͆͘̕L̵̡̡̛͙̣̦̞͓̲̙̫͕̣͍͉̪̣̮̗̪̤̲̈͗͌̏̈́̊̄̊̄̀̒͆͐̑͂̈͛̎͆͝ ̸̡̫͕͉͙͂T̵̢̧͕̝͙͈̭̣͙̗͙̺͚̱͕̱̥̯̿͋̏̀͠Ī̵̡̡̨̢̛̬̟̻̬̜̥̟̠͇̞̺͉̅̎͆̽̒̾́̀̆̈́̒̚͠M̸̡̛̫̦̮͈̥̖̭̲̦̔͌̋̓͗̊̾̑͑̈́̓̏̀̓̒̉̉̈́͝E̶̢̼̩͖̘̺͎͇͖͇̟̥̝̯̝̻̜̺̲͖͊̔͌͌̎̓͗̿̌̇̑͘Ľ̶̨̗̠̭͇̤̗̯̼̩̋̇́̓͋̈́̈́̽͜͠I̴̧̛̲̺̯̬͖͇̺͖̟̹̖̐̅̉̄̄̎͑̍͐̄̈́̏̓͒̓͊͌̉̕͝͠Ņ̵̛̫̻̘͍̥̤͓̝͖̟̟̄̌̀̀̓͐́̃̓̓̎Ę̸̧̢̢̛̥̤͇̭̲͔͔̝̫̯̩̟̟̏̒̑̒̊͗̋̍̒͑̏̏̉͌͛̕̕̚͠ͅS̶̛͇͔͇̖̣͉͔̣͈̐̇͌̂́̍͌̔͂́͂͐̚͜͝͠ ̵̡̡͙̪̣͈͎͖̥̣̰̳̰͕̟̯͇̐͐̅͛̅̂̇̓̓͆̎̾̚̕̚Ă̷̧̡̢̧͙̹̫͇̖̜͔̼͈͈̜͋͌̒͒͐̃̆͊͗̇͑͒͝͝N̷̛͚̘̠̟̪̩̩͓̆̈̾̎͆̀̽͑̄͂͐̓̏̾̌̿̎̄͝͝Ḏ̸̩̯͕̩̯̠̖̻̩͍͓̏̓͂ ̶̛͔̈́̃̚Ụ̸͚̤̩̂̈̄̈́̅̅̊̆̔͋̚͝Ņ̷̢̝̠̲̞̟̫̻͎̩̻̣̻̜̪̍͋̔̑͋̂̄́̊͐̑͋͌̉͐̒͑̏̄̈́̊̕I̵̧̛̲͚̎̔̊͑͂̇̈̊́̀̕V̷͎̫̱̫͙̼̳̦̼͈̯̬̬̽̒͂͒̌̉̾̀̓͊̊͑̔͐͊̔͑́͘̚̕͝Ȩ̶̈̃̓̓͝R̵̢̛̥̺͈̒̒͐̂͐͒́͐̆̊̇̒͘̚͠͠S̶̡̯͕̫͖̣̱͍̪̖̈́͒́̍E̵̢̧̝̱̫̣͈͎͑̿̊͂͐͊̈́̾̏̿͆̃̾̚̕͜͝ͅS̸͓̬͇͇̪̰̘͈̗̳̱̦͙͚̥͓̗͈͎̓͗̽́̾̆̃͐ A̷̧̧̨̧̡̛̛̪̣͙̯̣̦͎̣̪̜̖̣̰̘̻̣̮̟͚̣̱͓͓͈̗̪̙̯̙̬̥̋̋̏̍̐̾̏͆͑̍̿̀̋̀̓͌̎͊̌͛̇̈́̈́̋̓͜͝͝ͅ ̴̠̣̞͈͔̝̠͙̮̫̺͉͍̗̿S̵̡̧̰̘̫̬̗̩͎̟̻̦͚̭̞̙̹̙̭̹̹̗̬͚̱͓̳̺͇̺̖̼͎̹̰̀̎̀̄̄̄̒̅̿͗̄́̋̐̈́̽̀̋͒͛́̈̓̾̇̒͆͗̅̐̕͘̚͜͝͝ͅĮ̸̡̧̻̦̹̞̥̖͇̯̲̗͈͙͙̪̝͈̝̻̲̰̦̳̱̙͎͚̖̼̥̮̏͊͒̑̓͛̄̓̉̆̐̎̾͗̓̃̊̓͐́͗̋̎̿̏̑̕̕̕͠͝͠ͅN̸̨̛̙͔̬͙̪̯̅́̅͂̎̓̽͊̌̀͆̒́͂̊̓̈́̌͛̈́̄͊̿̓̇̍̕͝͝Ǧ̶̛̝̞̽̊̇̽́̑̍̊͊̉̃̒̒͗́̃L̸͔̹̦̪̗̮̀̐͌͋̈́̊͂̊̈̄̅̐͊͘Ȩ̴̡̡̦̫̱̭̙̝͔̙̬̥̱̯̫̝͈̜̰͍͙̙͈̬͚̻͒̋̐̒̂̀͆̄̋̐̆͑̾͐͂͌̓̋̎̀̇̔̔̍͘͜͝͠͝ͅͅ ̶̨̢̯̭͚͕̫̬̠̥̤͓̯̤͔̯͉̦͕͉̲̟̺̳͖̈͋̾͒͋̈͜͠F̵̧̡̥̻̠̣̘͈̝̲̹̦̈̓̍̀̊͐̈̒̉̌̄̀͑̈́̀̆̿͘͘͘̚͜͠Ā̷̛̹̱͔͓̲̫̱̝̓̈̅͂̌͊̏̐̍͑͒͘T̵̡͇͓̫͙̥̬̰̻̟̬̜̳̤͇̯̣̻͗̿̈́͝E̶̢͍͇͇̥͈͖̙̣͉̗͙̞̦̺͇͍͉͈̬̫̜͎͉̮̦̱̩̲̺͗̿̈̈́́͑̈́̑̑̒̽̃͛̈͝͠ͅ ̶̧̺̣͖̭̔̿̿́̐̓͗̅̽͑̊͋͐̀͋͑͘͜͝ͅÁ̷̧͙̻̮͍̼̭̣̅̋͗͛̇̏̀̄͑̚͠W̶̡̧̨̧͍̩̰̩̥̝̗̳͖̞͓̺͈̠̣͈̜̟̞̰̣̭͚̞͙̼̊̑̀́̔̎͂̒̓̃̾̊̈̀̀͆̈́̽͘̕͜͜͝A̴̢̧̧̡̨͙̱͖͉̰̪͖̥̣͖̥̹̝̦̹̪͕̪͚̜̳̝͖̹̟̭̰̠̺̦̥̬̒̉̓͆̈͋̈́̿͌͝͠͝İ̵̧̭͖̰̱̣̣̲͎͇̤͖̥͈͎̦͖̟͛̎̉͑͒̽͌̀̊̇̃̄̓̉̌͂̓͘ͅT̸̢̨͈̺̤̱̘͎̤̮̱͙̤͎̟̼̥̪̪̬͈̟͕̮̳̙͙̰͔̟͔̪̞̣͕̱͎̽̈̃̆̉̀̅̈̒̽̓̌̈́́̑̀̆̉͛̑͑̑́̕͜͠͠ͅŞ̴̨̮͍̖̳̲̦͍̟̗̮̲̖̱̦͓͔͓̖͉̻͍̙̤͙̯͂̍͌̀̈́́̐̉̀̉͑̇͊́̓͒̓͌̓̑̂̂͑͒́̾̋͋́͒̋͑̑̕̕͠:'
                  'Ṻ̷̺͔̬̤̭̜͖́̐T̵̨̢̧̡̢͉̭͉̦͖̯͓͍̻̗̟͔̻̟̲̟̪̜̻̲͍́̌̎̎̀͐̈́̋͊͐͂͑̌͐̽͆̅̅͛́͊̄̇͂̃̉̀̒̎̃͊̐̎̚͘͜͠͠͝͝Ţ̵̨̡̢̲̻̝̰̮̙͇̯͉͍̹̫̖͍͙̟̭̯̺͓̭̱͎͙̼̫̝̪̯̮̏͊̋̐̈́͘͜Ȩ̵̢̡̛̛̛̛̮͙̫̥̗̜̜̖̻̯͆̅͂͌́͒͗̉̓͂̉́̈̃̐̈́̈͗̂̆̑͘͘͜͜͠͝͝͠Ŗ̸̨̻̱͚̬͍͇̳̫̳̭̰̝̹̰̹̝͓͓̭̠̮̳͙̖̀̂̎̾̃̐̀̇̐͒̋͘ͅͅ ̵̡̘̝̙̫̼̭̣̙͚̩̩̹̝̲͕̩͕͍̜͔̤̲̼̂̽͂̎̌͗̅̌͐̀̈̔̈̂̉̂̉̇͗́̀̐́̇̓̃͋̀̽̅̓̍̿̐͐̿̋̅̈́̓̚͝͝͝ͅD̵̡̧̧̡̛͔̬̪͙̭̘͖̥͍̱͎̲͓̤̻͇̤̭̘̻̱̱̟̯̯̣̜̹͕̗̻͚̥͙̦̤͈͉̥̭̗͚̀̀̏̈́̀̆͒͗̀̔̈͜͝Ę̷̘̹͇̲̼̭͙͖̥̬̪̗͚̦͈̗̃̏̓̊̇̐͛̋̌̏̋̌͆̐͂̃̉̇̈̀͗͌̽̀̕̚͜͝͝͝Ş̵̛̛͙̰̋̉̂̅̆̑̄̾̈́̔͆̈͂̍́̄̿͋̈́̀̑̒̀̀͗͒̐̃͂̒̃̑̉̇̉͒̃́̀̕̚͝͝͝ͅŢ̴̧̛̛̥̞͚̩̥̤͉͉͚̘͍͊̍̏̇̎̐̾͂͐̅̿͒̉̓̈́̀͛͆̎̆̔̒̈́͐̒͝R̸̢̡̢̢̢̛̛̛̹̜̤̭̞͖̠̟͙̗̞͙͕̙̘̻̤̺̘̦̼͎̳͎̳̬̪̰̝̆̈̆͆͐͐́́̒͗́͑̌̓̉̌̽̅͂̆́̄̔́̽͑̍̀̕ͅŲ̷̧̡̧͈̰̥̗̮̦͇̰̭̘̱͉̤͔̰̺̗̪͔̼̖̜͕̤̺̦̤̤̦̟̼̺̗͉̃͋̀̇̀̈́̎͊͠͠͝Ĉ̶̛̣̙̰̤͍̙̙͇͎̞̦̼̟̹̞̭̫̤͍͛̄̈́͛͗́͌̊̄̄͒͊͗́̍̒͋͌̉̌̕̕̚͝Ṱ̵̨̖͔͙̹̪̺̹̝͓̞͖̤̩̦͍͙̣̿̑̽̌̿̋̅̄̒͌̍̀͘͠I̴̢̧̖̯͔̱̮̪̪̤̩̯̜̦͖̞͈̩̳̺͍̞̤̜̐̂̔͊̽͒̆͛͋̉͋̿̄͛͑̋̆̏̆̄̋͂̽̍̀̈͋̇̊̈̊̏͑͗̓̇̚͘͠ͅO̵̧̡̧̨̳̘̙̘̟̲̟̖̗̙̳̹͈̤͍̪̫̤̦͔̜̲̘̞̻̝̺̦̞̫̲͍̥̙͗̓̿͆̅̌̄͒̐̂̆̅̂̍͋̂͒͊̂̉͆̎̕͜͝͝Ṅ̷̨̛̛͔͎͍͓̟̳͖̳̳̪̘͉̱̜͔͎̰̝̱͔̻̠͇̣̗͙̹̭̹̲͕̮͈͍͇̮̫̦͈̮̦̤͉̮̈́͐́̇̀̈́͌͑̔̋̍̉̃̅̄͐̇̅̄̐̈́̓̓̀̍͌̍̾̎̆̚͘͘̚͜͜͝͝͝͝')
            plan = self.nostradamus.plan()
            self.plan_follower.assign_plan(plan)

            self.events.first_tick(self.constants, self.bounds)
            self.info(f'Constants: {self.constants}')

        self.events.update(game)
        if self.use_py_bot:
            self.tracker.refresh_assignments(game)


        if not game.meteors:
            self.info('No meteors to shoot at!')

        if self.use_py_bot:
            actions = self.pick_actions(game)
        else:
            actions = self.plan_follower.get_actions(game.tick)

        shooting = any(a for a in actions if isinstance(a, ShootAction))
        if game.cannon.cooldown == 0 and not shooting:
            self.stats.record_idle_tick()

        tick_time = time.time() - start_time
        self.stats.record_tick_time(tick_time)
        self.info(f'Tick time: {tick_time * 1000:.1f}ms')
        self.asserter.expect(tick_time < 2, f'Slow tick: {tick_time:.3f}s')
        return actions

    def pick_actions(self, game):
        actions = []
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
        return actions

    def on_close(self):
        print('Game done! Summary...')
        self.stats.print_stats()
