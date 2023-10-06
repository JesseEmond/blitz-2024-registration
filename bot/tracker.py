"""Keep track of the state of the game and various statistics."""
import dataclasses
from typing import List, Mapping, Optional, Set, Tuple

from game_message import *

import physics


@dataclasses.dataclass
class MeteorInfo(Body):
    spawns: List[str]
    type_: MeteorType


@dataclasses.dataclass
class RocketInfo(Body):
    pass


class Tracker:
    """Track source and statuses of rockets and meteors."""

    def __init__(self):
        self.meteors = {}  # ID to MeteorInfo
        self.rockets = {}  # ID to RocketInfo
        # Set on first tick.
        self.constants = None
        self.bounds = None

    def first_tick(self, constants: Constants, bounds: physics.Bounds) -> None:
        self.constants = constants
        self.bounds = bounds

    def update(self, game: GameMessage) -> None:
        # TODO: continue re-implementing the tracker
        new_meteors, lost_meteors = self._get_id_deltas(
            game.meteors, self.meteors)
        new_rockets, lost_rockets = self._get_id_deltas(
            game.rockets, self.rockets)

        for rocket in rockets:
            self._on_lost_rocket(rocket, lost_meteors)
        # TODO: handle lost meteors

        # TODO: handle new meteors
        # TODO: handle new rockets

        # TODO: update positions

    def _get_id_deltas(
        self, projectiles: List[Projectile],
        infos: Mapping[str, Body]) -> Tuple[Set[str], Set[str]]:
        seen = {proj.id for proj in projectiles}
        known_ids = set(infos.keys())
        new_ids = seen - known_ids
        lost_ids = known_ids - seen
        return new_ids, lost_ids

    def _on_lost_rocket(self, rocket_id: str, meteors: Set[str]) -> None:
        lost_meteors = set(meteors)
        # Because our rockets have constant speed and we don't move, we don't
        # have to check for two potential rockets clearing a given meteor.
        rocket = self.rockets[rocket_id]
        hit_time, hit_meteor = None, None
        for meteor_id in meteors:
            meteor = self.meteors[meteor_id]
            t = physics.next_collision_time(rocket, meteor)
            if t is None:
                continue
            if (self.bounds.is_out(meteor.advance(t)) or
                self.bounds.is_out(rocket.advance(t))):
                continue
            if hit_meteor is None or t < hit_time:
                hit_meteor = meteor_id
                hit_time = t
        if hit_meteor is not None:
            self.on_hit(rocket, meteor)
            meteors.remove(hit_meteor)
            del self.meteors[hit_meteor]
        else:
            self.on_wiffed(rocket)
        del self.rockets[rocket_id]

    def on_hit(self, rocket_id: str, meteor_id: str) -> None:
        pass  # TODO log

    def on_wiffed(self, rocket_id: str) -> None:
        """Rocket didn't hit anything! How embarassing!"""
        pass  # TODO log
