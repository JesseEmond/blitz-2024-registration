"""Keep track of the state of the game and various statistics."""
import dataclasses
from typing import List, Optional

from game_message import *

@dataclasses.dataclass
class MeteorInfo:
    spawns: List[str]
    velocity: Vector
    position: Vector
    type_: MeteorType
    size: float


class Tracker:
    """Track source and statuses of meteors."""

    def __init__(self):
        self.meteors = {}  # ID to MeteorInfo
        self.constants = None  # Set on first tick.
        self.predicted_score = 0

    def update(self, game: GameMessage) -> None:
        # TODO: clean up this logic
        new_meteors = []
        seen_ids = set()
        print([m.id for m in game.meteors])
        for meteor in game.meteors:
            seen_ids.add(meteor.id)
            if meteor.id in self.meteors:
                self.meteors[meteor.id].position = meteor.position
            else:
                # Don't create yet -- update positions for all first.
                new_meteors.append(meteor)
        destroyed_ids = set()
        to_add = []
        for meteor in new_meteors:
            info = MeteorInfo(
                spawns=[], velocity=meteor.velocity, position=meteor.position,
                type_=meteor.meteorType, size=meteor.size)
            parent = self.find_parent(meteor)
            if parent:
                if parent not in destroyed_ids:
                    self.on_destroy(parent, self.meteors[parent])
                    destroyed_ids.add(parent)
                self.meteors[parent].spawns.append(info)
                self.on_spawn(meteor, self.meteors[parent])
            else:
                self.on_arrival(meteor)
            to_add.append((meteor.id, info))
        for id_, info in to_add:
            self.meteors[id_] = info
        unseen_ids = set(self.meteors.keys()) - seen_ids
        for unseen_id in unseen_ids:
            unseen = self.meteors[unseen_id]
            predicted_pos = unseen.position.add(unseen.velocity)
            missed = (predicted_pos.x < game.cannon.position.x or
                      predicted_pos.y < 0 or
                      predicted_pos.y >= self.constants.world.height)
            if unseen_id in destroyed_ids:
                pass
            elif missed:
                self.on_missed(unseen_id, self.meteors[unseen_id])
            else:
                self.on_destroy(unseen_id, self.meteors[unseen_id])
            del self.meteors[unseen_id]

    def find_parent(self, meteor: Meteor) -> Optional[str]:
        speed_sq = meteor.velocity.len_sq()
        closest_dist = None
        closest = None
        for id_, m in self.meteors.items():
            dist_sq = meteor.position.minus(m.position).len_sq() + m.size
            if (not closest_dist or dist_sq <= closest_dist) and m.type_ != meteor.meteorType:
                closest = id_
                closest_dist = dist_sq
        return closest

    def on_arrival(self, meteor: Meteor) -> None:
        angle = math.degrees(meteor.velocity.angle())
        speed = meteor.velocity.len()
        info = self.constants.meteorInfos[meteor.meteorType]
        print(f'New {meteor.meteorType}: {meteor.id} Angle: {angle:.2f}, Speed: {speed:.2f} (expected: {info.approximateSpeed:.2f})')
        print(f' - {meteor}')

    def on_spawn(self, meteor: Meteor, parent: MeteorInfo) -> None:
        angle = math.degrees(meteor.velocity.angle())
        parent_angle = math.degrees(parent.velocity.angle())
        delta_angle = angle - parent_angle
        speed = meteor.velocity.len()
        parent_speed = parent.velocity.len()
        delta_speed = speed - parent_speed
        info = self.constants.meteorInfos[meteor.meteorType]
        parent_info = self.constants.meteorInfos[parent.type_]
        expected_angles = [f'{exp.approximateAngle:.2f}' for exp in parent_info.explodesInto]
        print(f'Spawn {meteor.meteorType}: {meteor.id} Angle: {angle:.2f}, Speed: {speed:.2f} (expected: {info.approximateSpeed:.2f}).')
        print(f' - Parent angle: {parent_angle:.2f} (delta: {delta_angle:.2f}, expected: {expected_angles}), speed: {parent_speed:.2f} (delta: {delta_speed:.2f})')
        print(f'Spawn pos: {meteor.position}')

    def on_missed(self, id_, meteor: MeteorInfo) -> None:
        print(f'Missed meteor {meteor.type_} {id_}.')

    def on_destroy(self, id_: str, meteor: MeteorInfo) -> None:
        print(f'Destroyed meteor {meteor.type_} {id_}')
        info = self.constants.meteorInfos[meteor.type_]
        self.predicted_score += info.score


