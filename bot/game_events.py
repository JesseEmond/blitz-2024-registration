"""Keep track of the state of the game and various statistics."""
import dataclasses
import math
from typing import Callable, List, Mapping, Optional, Set, Tuple

from game_message import *

import physics


# Fake rocket ID for cases where a rocket we shot instantly destroyed a meteor
# (and never made it to the GameMessage 'rockets' list).
INSTANT_KILL_ROCKET_ID = 'instant'


class Listener:
    def on_first_tick(self, events: 'GameEvents', constants: Constants,
                      bounds: physics.Bounds) -> None:
        pass
    def on_tick(self, events: 'GameEvents', game: GameMessage) -> None:
        pass
    def on_before_events(self, events: 'GameEvents', game: GameMessage,
                         changes: 'Changes') -> None:
        pass
    def on_after_events(self, events: 'GameEvents', game: GameMessage,
                        changes: 'Changes') -> None:
        pass
    def on_hit(self, events: 'GameEvents', rocket_id: str, meteor_id: str,
               collision_time: float) -> None:
        pass
    def on_miss(self, events: 'GameEvents', meteor_id: str) -> None:
        pass
    def on_wiff(self, events: 'GameEvents', rocket_id: str) -> None:
        pass
    def on_new_rocket(self, events: 'GameEvents', rocket_id: str) -> None:
        pass
    def on_meteor_spawn(self, events: 'GameEvents', meteor_id: str) -> None:
        pass
    def on_meteor_split_spawn(self, events: 'GameEvents', meteor_id: str,
                              expected: 'MeteorSplit') -> None:
        pass

@dataclasses.dataclass
class MeteorSplit:
    spawn: physics.SpawnableMeteor
    next_tick_position: Vector
    delta_angle: float
    # How much time delta_t elapsed after the meteor split appeared, until we
    # saw it in a game tick?
    next_tick_delta_t: float

@dataclasses.dataclass
class Changes:
    """IDs of meteors/rockets that were added/removed since last tick."""
    just_shot: bool
    new_meteors: Set[str]
    lost_meteors: Set[str]
    new_rockets: Set[str]
    lost_rockets: Set[str]

    def any_change(self) -> bool:
        return bool(self.just_shot or self.new_meteors or self.lost_meteors or
                    self.new_rockets or self.lost_rockets)

    def insta_killed(self) -> bool:
        return self.just_shot and not self.new_rockets


class GameEvents:
    """Track source and statuses of rockets and meteors, detect events."""

    def __init__(self):
        self.meteors = {}  # ID to Meteor
        self.rockets = {}  # ID to Rocket
        self.listeners = []

        self.current_tick = 0
        self.expected_splits = []

        # Set on first tick.
        self.constants = None
        self.bounds = None

    def add_listener(self, listener: Listener) -> None:
        self.listeners.append(listener)

    def first_tick(self, constants: Constants, bounds: physics.Bounds) -> None:
        self.constants = constants
        self.bounds = bounds
        for listener in self.listeners:
            listener.on_first_tick(self, constants, bounds)

    def update(self, game: GameMessage) -> None:
        self.previous_tick = self.current_tick
        self.current_tick = game.tick
        assert self.previous_tick + 1 == self.current_tick, \
            (self.previous_tick, self.current_tick)
        for listener in self.listeners:
            listener.on_tick(self, game)

        changes = self.detect_changes(game)
        for listener in self.listeners:
            listener.on_before_events(self, game, changes)

        rockets = list(game.rockets)
        self.detect_insta_kill_rockets(game.cannon, rockets, changes)
        self.detect_new_rockets(rockets, changes)
        self.detect_meteor_hits(self.previous_tick, changes)
        self.detect_meteor_spawns(game.meteors, changes)
        self.detect_missed_meteors(changes)

        self.track_positions(game.meteors, game.rockets)

        for listener in self.listeners:
            listener.on_after_events(self, game, changes)

    def detect_meteor_hits(self, tick: float, changes: Changes) -> None:
        """Note: removes hit 'lost_meteors'."""
        for rocket in changes.lost_rockets:
            self._check_rocket_hit(tick, rocket, changes.lost_meteors)

    def detect_missed_meteors(self, changes: Changes) -> None:
        for meteor in changes.lost_meteors:
            self.on_miss(meteor)

    def detect_meteor_spawns(
        self, meteors: List[Meteor], changes: Changes) -> None:
        new_meteors = [m for m in meteors if m.id in changes.new_meteors]
        assert len(new_meteors) >= len(self.expected_splits), (
            new_meteors, self.expected_splits)
        for split in self.expected_splits:
            def _split_distance(meteor: Meteor) -> Tuple[float, float]:
                angle_diff = abs(meteor.velocity.angle() - split.spawn.velocity.angle())
                angle_dist = round(math.degrees(angle_diff), 1)
                pos_dist = meteor.position.dist_sq(split.next_tick_position)
                return (angle_dist, pos_dist)
            candidates = [m for m in new_meteors if m.meteorType == split.spawn.meteorType]
            assert candidates, f'No new meteor of type {split.spawn.meteorType} for split {split}'
            meteor = min(candidates, key=_split_distance)
            self.meteors[meteor.id] = meteor
            for listener in self.listeners:
                listener.on_meteor_split_spawn(self, meteor.id, split)
            new_meteors.remove(meteor)
        self.expected_splits = []
        for meteor in new_meteors:
            self.meteors[meteor.id] = meteor
            for listener in self.listeners:
                listener.on_meteor_spawn(self, meteor.id)

    def detect_insta_kill_rockets(
        self, cannon: Cannon, rockets: List[Projectile],
        changes: Changes) -> None:
        if not changes.insta_killed():
            return
        assert not changes.new_rockets, \
            'Insta kill, but there are new rockets: {changes.new_rockets}'
        cannon_dir = Vector.from_angle(math.radians(cannon.orientation))
        vel = cannon_dir.scale(self.constants.rockets.speed)
        rockets.append(Projectile(
            id=INSTANT_KILL_ROCKET_ID, position=cannon.position, velocity=vel,
            size=self.constants.rockets.size))
        changes.new_rockets.add(INSTANT_KILL_ROCKET_ID)
        changes.lost_rockets.add(INSTANT_KILL_ROCKET_ID)

    def detect_new_rockets(
        self, rockets: List[Projectile], changes: Changes) -> None:
        if not changes.new_rockets:
            return
        assert len(changes.new_rockets) == 1, \
            'Many new rockets: {changes.new_rockets}'
        new_rocket_id = next(iter(changes.new_rockets))
        rocket = next(r for r in rockets if r.id == new_rocket_id)
        self.rockets[new_rocket_id] = Projectile(
            id=new_rocket_id, position=rocket.position,
            velocity=rocket.velocity, size=rocket.size)
        for listener in self.listeners:
            listener.on_new_rocket(self, new_rocket_id)

    def track_positions(self,
        meteors: List[Meteor], rockets: List[Projectile]) -> None:
        for meteor in meteors:
            self.meteors[meteor.id].position = meteor.position
        for rocket in rockets:
            self.rockets[rocket.id].position = rocket.position

    def detect_changes(self, game: GameMessage) -> Changes:
        new_meteors, lost_meteors = self._get_id_deltas(
            game.meteors, self.meteors)
        new_rockets, lost_rockets = self._get_id_deltas(
            game.rockets, self.rockets)
        return Changes(game.just_shot(), new_meteors, lost_meteors, new_rockets,
                       lost_rockets)

    def _get_id_deltas(
        self, projectiles: List[Projectile],
        infos: Mapping[str, Body]) -> Tuple[Set[str], Set[str]]:
        seen = {proj.id for proj in projectiles}
        known_ids = set(infos.keys())
        new_ids = seen - known_ids
        lost_ids = known_ids - seen
        return new_ids, lost_ids

    def _check_rocket_hit(
        self, tick: float, rocket_id: str, meteors: Set[str]) -> None:
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
            if (self.bounds.is_out(meteor.advance(t)) and
                self.bounds.is_out(rocket.advance(t))):
                continue
            if hit_meteor is None or t < hit_time:
                hit_meteor = meteor_id
                hit_time = t
        if hit_meteor is not None:
            previous_tick = tick - 1
            self.on_hit(rocket_id, hit_meteor, previous_tick + hit_time)
            meteors.remove(hit_meteor)
        else:
            self.on_wiff(rocket_id)

    def on_hit(self, rocket_id: str, meteor_id: str, t: float) -> None:
        rocket = self.rockets[rocket_id]
        for listener in self.listeners:
            listener.on_hit(self, rocket_id, meteor_id, t)
        meteor = self.meteors[meteor_id]
        info = self.constants.meteorInfos[meteor.meteorType]
        # Advance to moment of collision
        prev_tick = int(t)
        explosions = physics.expect_explosions(
            rocket, meteor, prev_tick, t, self.constants)
        for i, explosion in enumerate(explosions):
            # Advance to expected time when we'll see evidence of the new splits
            # Note: from reversing the local binary, we know that the splits are
            # positioned at the collision point after delta_t, but treated
            # afterwards as if they were there for the whole tick (i.e. +1 vel).
            next_tick_delta_t = 1.0
            avg_velocity = explosion.velocity
            next_tick_position = explosion.position.add(
                avg_velocity.scale(next_tick_delta_t))
            if (not self.bounds.is_out_vertically(next_tick_position)
                and next_tick_position.x >= 0):
                angle_delta = avg_velocity.angle() - meteor.velocity.angle()
                self.expected_splits.append(MeteorSplit(
                    explosion, next_tick_position, angle_delta,
                    next_tick_delta_t))
            else:  # out of bounds -- this is a miss.
                # Store a temp meteor for listeners to use, then delete it.
                self.meteors[explosion.id] = explosion
                for listener in self.listeners:
                    listener.on_miss(self, explosion.id)
                del self.meteors[explosion.id]
        del self.rockets[rocket_id]
        del self.meteors[meteor_id]

    def on_miss(self, meteor_id: str) -> None:
        for listener in self.listeners:
            listener.on_miss(self, meteor_id)
        del self.meteors[meteor_id]

    def on_wiff(self, rocket_id: str) -> None:
        for listener in self.listeners:
            listener.on_wiff(self, rocket_id)
        del self.rockets[rocket_id]
