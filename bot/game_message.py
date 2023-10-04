from __future__ import annotations

from dataclasses import dataclass
from typing import List, Dict
from enum import Enum, unique


@dataclass
class GameMessage:
    type: str
    tick: int
    lastTickErrors: List[str]
    constants: Constants
    cannon: Cannon
    meteors: List[Meteor]
    rockets: List[Projectile]
    score: int


@dataclass(eq=True, frozen=True)
class Vector:
   x: float 
   y: float 


@dataclass
class Cannon:
    position: Vector
    orientation: float
    cooldown: int


@dataclass
class Projectile:
    id: str
    position: Vector
    velocity: Vector
    size: float


@dataclass
class Meteor(Projectile):
    meteorType: MeteorType


@unique
class MeteorType(str, Enum):
    Large = "LARGE"
    Medium = "MEDIUM"
    Small = "SMALL"


@dataclass
class Constants:
    world: WorldConstants
    rockets: RocketsConstants
    cannonCooldownTicks: int
    meteorInfos: Dict[MeteorType, MeteorInfos]


@dataclass
class WorldConstants:
    width: int
    height: int


@dataclass
class RocketsConstants:
    speed: float
    size: float


@dataclass
class MeteorInfos:
    score: float
    size: float
    approximateSpeed: float
    explodesInto: List[ExplosionInfos]


@dataclass
class ExplosionInfos:
    meteorType: MeteorType
    approximateAngle: float
