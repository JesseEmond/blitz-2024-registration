from __future__ import annotations

import dataclasses
import math
from enum import Enum, unique
from typing import Dict, List, Tuple


TOTAL_TICKS = 1000


def center_angle(radians: float) -> float:
    """Return equivalent angle closer to 0 (in negatives) -- prettier prints."""
    radians = radians % math.tau
    if radians >= math.pi:
        radians -= math.tau
    return radians


@dataclasses.dataclass
class GameMessage:
    type: str
    tick: int
    lastTickErrors: List[str]
    constants: Constants
    cannon: Cannon
    meteors: List[Meteor]
    rockets: List[Projectile]
    score: int

    def just_shot(self) -> bool:
        return self.cannon.cooldown == self.constants.cannonCooldownTicks - 1

    def _debug_print(self) -> None:
        print(f'Rockets ({len(self.rockets)}):')
        for rocket in self.rockets:
            print(f'- {rocket.id}: {rocket._print_pos()} '
                  f'going {rocket._print_vel()}\t(size {rocket.size})')
        print(f'Meteors ({len(self.meteors)}):')
        for meteor in self.meteors:
            info = self.constants.meteorInfos[meteor.meteorType]
            print(f'- {meteor.id}:\t{meteor.meteorType}\t'
                  f'{meteor._print_pos()}\tgoing {meteor._print_vel()}'
                  f'\t(size {meteor.size}, score: {info.score})')
        just_shot = ' (Just shot!)' if self.just_shot() else ''
        orientation = math.degrees(
            center_angle(math.radians(self.cannon.orientation)))
        print(f'Cannon is at {self.cannon.position.pprint()} '
              f'(cooldown: {self.cannon.cooldown}/'
              f'{self.constants.cannonCooldownTicks}){just_shot}, '
              f'angle: {orientation:7.2f}°')
        world = self.constants.world
        print(f'World is {world.width}x{world.height}')


@dataclasses.dataclass(eq=True, frozen=True)
class Vector:
   x: float 
   y: float 

   def pprint(self) -> str:
        return f'({self.x:7.2f},{self.y:7.2f})'

   def from_angle(angle: float) -> 'Vector':
       return Vector(math.cos(angle), math.sin(angle))

   def normalized(self) -> 'Vector':
       l = self.len()
       return self.scale((1 / l) if l != 0 else 0)

   def dist_sq(self, other: 'Vector') -> float:
       return self.minus(other).len_sq()

   def dist(self, other: 'Vector') -> float:
       return self.minus(other).len()

   def in_range(self, other: 'Vector', r: float) -> bool:
       return self.dist_sq(other) <= r * r

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

   def components(self) -> Tuple[float, float]:
       return self.x, self.y


@dataclasses.dataclass
class Cannon:
    position: Vector
    orientation: float
    cooldown: int


@dataclasses.dataclass
class Body:
    position: Vector
    velocity: Vector
    size: float

    def contains(self, point: Vector) -> bool:
        return self.position.in_range(point, self.size)

    def advance(self, delta_t: float) -> 'Body':
        new_pos = self.position.add(self.velocity.scale(delta_t))
        return dataclasses.replace(self, position=new_pos)

    def _print_pos(self) -> str:
        return self.position.pprint()

    def _print_vel(self) -> str:
        vel = self.velocity
        angle = math.degrees(center_angle(vel.angle()))
        return (f'{angle:7.2f}°@{vel.len():5.2f}\t({vel.x:.2f},{vel.y:.2f})')



@dataclasses.dataclass
class Projectile(Body):
    id: str


@dataclasses.dataclass
class Meteor(Projectile):
    meteorType: MeteorType


@unique
class MeteorType(str, Enum):
    Large = "LARGE"
    Medium = "MEDIUM"
    Small = "SMALL"


@dataclasses.dataclass
class Constants:
    world: WorldConstants
    rockets: RocketsConstants
    cannonCooldownTicks: int
    meteorInfos: Dict[MeteorType, MeteorInfos]

    def potential_score(self, meteor: MeteorType) -> float:
        info = self.meteorInfos[meteor]
        return info.score + sum(
            self.potential_score(e.meteorType) for e in info.explodesInto)

@dataclasses.dataclass
class WorldConstants:
    width: int
    height: int


@dataclasses.dataclass
class RocketsConstants:
    speed: float
    size: float


@dataclasses.dataclass
class MeteorInfos:
    score: float
    size: float
    approximateSpeed: float
    explodesInto: List[ExplosionInfos]


@dataclasses.dataclass
class ExplosionInfos:
    meteorType: MeteorType
    approximateAngle: float
