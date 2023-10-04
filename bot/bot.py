from typing import Optional

from game_message import *
from actions import *


class Bot:
    def __init__(self):
        pass

    def pick_target(self, game: GameMessage) -> Optional[Meteor]:
        if not game.meteors:
            return None
        # TODO: Pick target strategically (e.g. best score)
        # TODO: Ignore meteors that we already shot at
        # TODO: Take into accounts meteors that will spawn
        return game.meteors[0]

    def aim_at_target(self, meteor: Meteor) -> Vector:
        # TODO: Predict collision point between our projectile & the meteor
        return meteor.position

    def get_next_move(self, game_message: GameMessage):
        actions = []

        target = self.pick_target(game_message)
        if target:
            actions.append(LookAtAction(target=self.aim_at_target(target)))
            if not game_message.cannon.cooldown:
                actions.append(ShootAction())

        return actions
