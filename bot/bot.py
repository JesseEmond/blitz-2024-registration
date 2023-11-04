import cattrs
import json
import math
import time
from typing import List, Optional, Tuple

from game_message import *
from actions import *

import nostradamus


class Bot:
    def __init__(self, on_server: bool):
        self.verbose = on_server
        print(f'Verbose: {self.verbose}')
        self.nostradamus = None

    def info(self, s: str) -> None:
        if self.verbose:
            print(s)

    def get_next_move(self, game: GameMessage):
        assert not game.lastTickErrors,\
            f'Errors during last tick : {game.lastTickErrors}'
        start_time = time.time()
        self.info(f'Tick: {game.tick}')

        if not self.nostradamus:
            self.nostradamus = nostradamus.Nostradamus(
                json.dumps(cattrs.unstructure(game)))
            print('Nostradamus init̸i̸a̶l̵i̵z̷--')
            print('I̴ ̸H̷A̶V̵E̵ ̶S̴E̸E̷N̵ ̶E̸V̶E̴R̵Y̷T̵H̴I̸N̸G̷ ̷T̸H̵E̷R̴E̸ ̸I̶S̸,̵ ̶T̵̢̊̒͠H̶̻͔̍̍̃̀E̶̤͗R̴͓̮̹͂͒È̴̙̲̒̈́͂̈́ ̶̡̡̰̞̱̈́̍W̵̖̥̿͝A̸̹̤͚̤͋͒S̸͖̈́̀,̸̞̘̘̻̃̅ ̸͎͛͆̕A̶̠̓̈́N̶͎̽̃͐͝D̵̛̥̂̇̓ ̸͙̻̮̐͆W̶̭͆I̴̛̜̖̩̲̍͊̔L̸̢̛̘̹L̵͓̼͑̋̐ ̷͎͖̗̈B̸̦͒̌̒̀E̸̢̮̳͑͆͂̚.̶̠́͋̀̑̓'
                  'A̸͕͖̲̲̰̠͓̥͇̔̈͐̈́̿̆̀̒̿͊͂͊̎́̅͠C̵̨͖̱̭̣͕̭͕̫͌͋̂͑̒͒̈́̋́̈́̀̀͋̑͐̔͐̏̕̚̕͜R̴̢̛͙̦̿͒̈̑̆͊̂͆̇̂̓̇̾̓̇̆̚̕͘Ỏ̵̻̤̈́̓̇̃̍̉̉̾̌̐̓͐͐́̓́͐̈́̏̆̕Š̸̢̫̩̜̥̦̺̻͙̭̰̝̳͕̖̱͍̓̉̈́͛̓̽̒̅̓̆̆̓̈̚͘͠S̴̡̛͖̬̲̩̯̞̀̿͒̽̌͌͌́̀̄̒͒̈́̓͛̋͐͌ͅ ̵͔͚͍̳̭̮̣̫͉̺̳̿̋̿́̀̀̈́̈͆͝͠͠Ą̸̢͖̥͙̤̮͙͓̱̣͖̞̥̥̓̒̎͋̊́̀̇̏̅̍̏̂̌̓͛̓̒͊͠͠Ļ̶̮̮̱̹̀̒̀̿̈́́̽͆͘̕L̵̡̡̛͙̣̦̞͓̲̙̫͕̣͍͉̪̣̮̗̪̤̲̈͗͌̏̈́̊̄̊̄̀̒͆͐̑͂̈͛̎͆͝ ̸̡̫͕͉͙͂T̵̢̧͕̝͙͈̭̣͙̗͙̺͚̱͕̱̥̯̿͋̏̀͠Ī̵̡̡̨̢̛̬̟̻̬̜̥̟̠͇̞̺͉̅̎͆̽̒̾́̀̆̈́̒̚͠M̸̡̛̫̦̮͈̥̖̭̲̦̔͌̋̓͗̊̾̑͑̈́̓̏̀̓̒̉̉̈́͝E̶̢̼̩͖̘̺͎͇͖͇̟̥̝̯̝̻̜̺̲͖͊̔͌͌̎̓͗̿̌̇̑͘Ľ̶̨̗̠̭͇̤̗̯̼̩̋̇́̓͋̈́̈́̽͜͠I̴̧̛̲̺̯̬͖͇̺͖̟̹̖̐̅̉̄̄̎͑̍͐̄̈́̏̓͒̓͊͌̉̕͝͠Ņ̵̛̫̻̘͍̥̤͓̝͖̟̟̄̌̀̀̓͐́̃̓̓̎Ę̸̧̢̢̛̥̤͇̭̲͔͔̝̫̯̩̟̟̏̒̑̒̊͗̋̍̒͑̏̏̉͌͛̕̕̚͠ͅS̶̛͇͔͇̖̣͉͔̣͈̐̇͌̂́̍͌̔͂́͂͐̚͜͝͠ ̵̡̡͙̪̣͈͎͖̥̣̰̳̰͕̟̯͇̐͐̅͛̅̂̇̓̓͆̎̾̚̕̚Ă̷̧̡̢̧͙̹̫͇̖̜͔̼͈͈̜͋͌̒͒͐̃̆͊͗̇͑͒͝͝N̷̛͚̘̠̟̪̩̩͓̆̈̾̎͆̀̽͑̄͂͐̓̏̾̌̿̎̄͝͝Ḏ̸̩̯͕̩̯̠̖̻̩͍͓̏̓͂ ̶̛͔̈́̃̚Ụ̸͚̤̩̂̈̄̈́̅̅̊̆̔͋̚͝Ņ̷̢̝̠̲̞̟̫̻͎̩̻̣̻̜̪̍͋̔̑͋̂̄́̊͐̑͋͌̉͐̒͑̏̄̈́̊̕I̵̧̛̲͚̎̔̊͑͂̇̈̊́̀̕V̷͎̫̱̫͙̼̳̦̼͈̯̬̬̽̒͂͒̌̉̾̀̓͊̊͑̔͐͊̔͑́͘̚̕͝Ȩ̶̈̃̓̓͝R̵̢̛̥̺͈̒̒͐̂͐͒́͐̆̊̇̒͘̚͠͠S̶̡̯͕̫͖̣̱͍̪̖̈́͒́̍E̵̢̧̝̱̫̣͈͎͑̿̊͂͐͊̈́̾̏̿͆̃̾̚̕͜͝ͅS̸͓̬͇͇̪̰̘͈̗̳̱̦͙͚̥͓̗͈͎̓͗̽́̾̆̃͐ A̷̧̧̨̧̡̛̛̪̣͙̯̣̦͎̣̪̜̖̣̰̘̻̣̮̟͚̣̱͓͓͈̗̪̙̯̙̬̥̋̋̏̍̐̾̏͆͑̍̿̀̋̀̓͌̎͊̌͛̇̈́̈́̋̓͜͝͝ͅ ̴̠̣̞͈͔̝̠͙̮̫̺͉͍̗̿S̵̡̧̰̘̫̬̗̩͎̟̻̦͚̭̞̙̹̙̭̹̹̗̬͚̱͓̳̺͇̺̖̼͎̹̰̀̎̀̄̄̄̒̅̿͗̄́̋̐̈́̽̀̋͒͛́̈̓̾̇̒͆͗̅̐̕͘̚͜͝͝ͅĮ̸̡̧̻̦̹̞̥̖͇̯̲̗͈͙͙̪̝͈̝̻̲̰̦̳̱̙͎͚̖̼̥̮̏͊͒̑̓͛̄̓̉̆̐̎̾͗̓̃̊̓͐́͗̋̎̿̏̑̕̕̕͠͝͠ͅN̸̨̛̙͔̬͙̪̯̅́̅͂̎̓̽͊̌̀͆̒́͂̊̓̈́̌͛̈́̄͊̿̓̇̍̕͝͝Ǧ̶̛̝̞̽̊̇̽́̑̍̊͊̉̃̒̒͗́̃L̸͔̹̦̪̗̮̀̐͌͋̈́̊͂̊̈̄̅̐͊͘Ȩ̴̡̡̦̫̱̭̙̝͔̙̬̥̱̯̫̝͈̜̰͍͙̙͈̬͚̻͒̋̐̒̂̀͆̄̋̐̆͑̾͐͂͌̓̋̎̀̇̔̔̍͘͜͝͠͝ͅͅ ̶̨̢̯̭͚͕̫̬̠̥̤͓̯̤͔̯͉̦͕͉̲̟̺̳͖̈͋̾͒͋̈͜͠F̵̧̡̥̻̠̣̘͈̝̲̹̦̈̓̍̀̊͐̈̒̉̌̄̀͑̈́̀̆̿͘͘͘̚͜͠Ā̷̛̹̱͔͓̲̫̱̝̓̈̅͂̌͊̏̐̍͑͒͘T̵̡͇͓̫͙̥̬̰̻̟̬̜̳̤͇̯̣̻͗̿̈́͝E̶̢͍͇͇̥͈͖̙̣͉̗͙̞̦̺͇͍͉͈̬̫̜͎͉̮̦̱̩̲̺͗̿̈̈́́͑̈́̑̑̒̽̃͛̈͝͠ͅ ̶̧̺̣͖̭̔̿̿́̐̓͗̅̽͑̊͋͐̀͋͑͘͜͝ͅÁ̷̧͙̻̮͍̼̭̣̅̋͗͛̇̏̀̄͑̚͠W̶̡̧̨̧͍̩̰̩̥̝̗̳͖̞͓̺͈̠̣͈̜̟̞̰̣̭͚̞͙̼̊̑̀́̔̎͂̒̓̃̾̊̈̀̀͆̈́̽͘̕͜͜͝A̴̢̧̧̡̨͙̱͖͉̰̪͖̥̣͖̥̹̝̦̹̪͕̪͚̜̳̝͖̹̟̭̰̠̺̦̥̬̒̉̓͆̈͋̈́̿͌͝͠͝İ̵̧̭͖̰̱̣̣̲͎͇̤͖̥͈͎̦͖̟͛̎̉͑͒̽͌̀̊̇̃̄̓̉̌͂̓͘ͅT̸̢̨͈̺̤̱̘͎̤̮̱͙̤͎̟̼̥̪̪̬͈̟͕̮̳̙͙̰͔̟͔̪̞̣͕̱͎̽̈̃̆̉̀̅̈̒̽̓̌̈́́̑̀̆̉͛̑͑̑́̕͜͠͠ͅŞ̴̨̮͍̖̳̲̦͍̟̗̮̲̖̱̦͓͔͓̖͉̻͍̙̤͙̯͂̍͌̀̈́́̐̉̀̉͑̇͊́̓͒̓͌̓̑̂̂͑͒́̾̋͋́͒̋͑̑̕̕͠:'
                  'Ṻ̷̺͔̬̤̭̜͖́̐T̵̨̢̧̡̢͉̭͉̦͖̯͓͍̻̗̟͔̻̟̲̟̪̜̻̲͍́̌̎̎̀͐̈́̋͊͐͂͑̌͐̽͆̅̅͛́͊̄̇͂̃̉̀̒̎̃͊̐̎̚͘͜͠͠͝͝Ţ̵̨̡̢̲̻̝̰̮̙͇̯͉͍̹̫̖͍͙̟̭̯̺͓̭̱͎͙̼̫̝̪̯̮̏͊̋̐̈́͘͜Ȩ̵̢̡̛̛̛̛̮͙̫̥̗̜̜̖̻̯͆̅͂͌́͒͗̉̓͂̉́̈̃̐̈́̈͗̂̆̑͘͘͜͜͠͝͝͠Ŗ̸̨̻̱͚̬͍͇̳̫̳̭̰̝̹̰̹̝͓͓̭̠̮̳͙̖̀̂̎̾̃̐̀̇̐͒̋͘ͅͅ ̵̡̘̝̙̫̼̭̣̙͚̩̩̹̝̲͕̩͕͍̜͔̤̲̼̂̽͂̎̌͗̅̌͐̀̈̔̈̂̉̂̉̇͗́̀̐́̇̓̃͋̀̽̅̓̍̿̐͐̿̋̅̈́̓̚͝͝͝ͅD̵̡̧̧̡̛͔̬̪͙̭̘͖̥͍̱͎̲͓̤̻͇̤̭̘̻̱̱̟̯̯̣̜̹͕̗̻͚̥͙̦̤͈͉̥̭̗͚̀̀̏̈́̀̆͒͗̀̔̈͜͝Ę̷̘̹͇̲̼̭͙͖̥̬̪̗͚̦͈̗̃̏̓̊̇̐͛̋̌̏̋̌͆̐͂̃̉̇̈̀͗͌̽̀̕̚͜͝͝͝Ş̵̛̛͙̰̋̉̂̅̆̑̄̾̈́̔͆̈͂̍́̄̿͋̈́̀̑̒̀̀͗͒̐̃͂̒̃̑̉̇̉͒̃́̀̕̚͝͝͝ͅŢ̴̧̛̛̥̞͚̩̥̤͉͉͚̘͍͊̍̏̇̎̐̾͂͐̅̿͒̉̓̈́̀͛͆̎̆̔̒̈́͐̒͝R̸̢̡̢̢̢̛̛̛̹̜̤̭̞͖̠̟͙̗̞͙͕̙̘̻̤̺̘̦̼͎̳͎̳̬̪̰̝̆̈̆͆͐͐́́̒͗́͑̌̓̉̌̽̅͂̆́̄̔́̽͑̍̀̕ͅŲ̷̧̡̧͈̰̥̗̮̦͇̰̭̘̱͉̤͔̰̺̗̪͔̼̖̜͕̤̺̦̤̤̦̟̼̺̗͉̃͋̀̇̀̈́̎͊͠͠͝Ĉ̶̛̣̙̰̤͍̙̙͇͎̞̦̼̟̹̞̭̫̤͍͛̄̈́͛͗́͌̊̄̄͒͊͗́̍̒͋͌̉̌̕̕̚͝Ṱ̵̨̖͔͙̹̪̺̹̝͓̞͖̤̩̦͍͙̣̿̑̽̌̿̋̅̄̒͌̍̀͘͠I̴̢̧̖̯͔̱̮̪̪̤̩̯̜̦͖̞͈̩̳̺͍̞̤̜̐̂̔͊̽͒̆͛͋̉͋̿̄͛͑̋̆̏̆̄̋͂̽̍̀̈͋̇̊̈̊̏͑͗̓̇̚͘͠ͅO̵̧̡̧̨̳̘̙̘̟̲̟̖̗̙̳̹͈̤͍̪̫̤̦͔̜̲̘̞̻̝̺̦̞̫̲͍̥̙͗̓̿͆̅̌̄͒̐̂̆̅̂̍͋̂͒͊̂̉͆̎̕͜͝͝Ṅ̷̨̛̛͔͎͍͓̟̳͖̳̳̪̘͉̱̜͔͎̰̝̱͔̻̠͇̣̗͙̹̭̹̲͕̮͈͍͇̮̫̦͈̮̦̤͉̮̈́͐́̇̀̈́͌͑̔̋̍̉̃̅̄͐̇̅̄̐̈́̓̓̀̍͌̍̾̎̆̚͘͘̚͜͜͝͝͝͝')

        events = self.nostradamus.next_action()
        shoot_action = next((e for e in events if e.event_type == 'Shoot'),
                            None)
        actions = []
        if shoot_action:
            assert shoot_action.tick == game.tick
            x, y = shoot_action.position
            actions.append(LookAtAction(target=Vector(x, y)))
            actions.append(ShootAction())

        tick_time = time.time() - start_time
        self.info(f'Tick time: {tick_time * 1000:.1f}ms')
        return actions
