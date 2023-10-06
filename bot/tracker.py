"""Keep track of the state of the game and various statistics."""
import dataclasses
from typing import List, Mapping, Optional, Set, Tuple

from game_message import *


@dataclasses.dataclass
class ProjectileInfo:
    position: Vector
    velocity: Vector
    size: float


@dataclasses.dataclass
class MeteorInfo(ProjectileInfo):
    spawns: List[str]
    type_: MeteorType


@dataclasses.dataclass
class RocketInfo(ProjectileInfo):
    pass


class Tracker:
    """Track source and statuses of rockets and meteors."""

    def __init__(self):
        self.meteors = {}  # ID to MeteorInfo
        self.rockets = {}  # ID to RocketInfo
        self.constants = None  # Set on first tick.

    def update(self, game: GameMessage) -> None:
        # TODO: continue re-implementing the tracker
        new_meteors, lost_meteors = self._get_id_deltas(
            game.meteors, self.meteors)
        new_rockets, lost_rockets = self._get_id_deltas(
            game.rockets, self.rockets)

        self._detect_hits(lost_rockets, lost_meteors)
        # TODO: update positions

    def _get_id_deltas(
        self, projectiles: List[Projectile],
        infos: Mapping[str, ProjectileInfo]) -> Tuple[Set[str], Set[str]]:
        seen = {proj.id for proj in projectiles}
        known_ids = set(infos.keys())
        new_ids = seen - known_ids
        lost_ids = known_ids - seen
        return new_ids, lost_ids

    def _detect_hits(self, rockets: List[str], meteors: List[str]) -> None:
        pass # TODO!
