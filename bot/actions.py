from __future__ import annotations

from dataclasses import dataclass
from game_message import Vector

@dataclass
class RotateAction:
    angle: float
    type: str = "ROTATE"


@dataclass
class LookAtAction:
    target: Vector
    type: str = "LOOKAT"


@dataclass
class ShootAction:
    type: str = "SHOOT"
