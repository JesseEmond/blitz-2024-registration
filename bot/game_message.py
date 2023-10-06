from __future__ import annotations

from dataclasses import dataclass
import math
from enum import Enum, unique
from typing import List, Dict


TOTAL_TICKS = 1000


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

   def from_angle(angle: float) -> 'Vector':
       return Vector(math.cos(angle), math.sin(angle))

   def norm(self) -> 'Vector':
       return self.scale(1 / self.len())

   def inv(self) -> 'Vector':
       return Vector(-self.x, -self.y)

   def len(self) -> float:
       return math.sqrt(self.len_sq())

   def len_sq(self) -> float:
        return self.x * self.x + self.y * self.y

   def angle(self) -> float:
       return math.atan2(self.y, self.x)

   def dot(self, other: 'Vector') -> float:
       return self.x * other.x + self.y * other.y

   def add(self, other: 'Vector') -> 'Vector':
       return Vector(self.x + other.x, self.y + other.y)

   def minus(self, other: 'Vector') -> 'Vector':
       return Vector(self.x - other.x, self.y - other.y)

   def scale(self, a: float) -> Vector:
       return Vector(self.x * a, self.y * a)


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
