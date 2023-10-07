"""Keep track of the state of the game and various statistics."""
import dataclasses
import math
from typing import List, Mapping, Optional, Set, Tuple

from game_message import *

import physics


@dataclasses.dataclass
class MeteorInfo(Body):
    type_: MeteorType


@dataclasses.dataclass
class RocketInfo(Body):
    pass


@dataclasses.dataclass
class Changes:
    """IDs of meteors/rockets that were added/removed since last tick."""
    just_shot: bool
    new_meteors: Set[str]
    lost_meteors: Set[str]
    new_rockets: Set[str]
    lost_rockets: Set[str]

    def any_change(self) -> bool:
        return (self.just_shot or self.new_meteors or self.lost_meteors or
                self.new_rockets or self.lost_rockets)

    def insta_killed(self) -> bool:
        return self.just_shot and not self.new_rockets


class Tracker:
    """Track source and statuses of rockets and meteors."""

    def __init__(self, debug_mode: bool):
        self.debug_mode = debug_mode

        self.meteors = {}  # ID to MeteorInfo
        self.rockets = {}  # ID to RocketInfo
        self.score = 0

        # Set on first tick.
        self.constants = None
        self.bounds = None

        # Set on every 'update', used for global access when debug-printing
        self._debug_game = None
        self._debug_previous_game = None

    def first_tick(self, constants: Constants, bounds: physics.Bounds) -> None:
        self.constants = constants
        self.bounds = bounds

    def update(self, game: GameMessage) -> None:
        self._debug_game = game

        changes = self.detect_changes(game)
        if changes.any_change():
            print(f'Tick: {game.tick} (game score: {game.score})')
            if changes.just_shot:
                print('PEW!')

        self.detect_meteor_hits(game.tick, game.cannon, changes)
        self.detect_missed_meteors(changes)
        self.detect_meteor_spawns(game.meteors, changes)
        self.detect_new_rockets(game.rockets, changes)

        self.track_positions(game.meteors, game.rockets)
        if not self._expect(self.score == game.score,
            f'Predicted score {self.score}, but game has {game.score}'):
            self.score = game.score  # Adjust, otherwise we'll keep spamming.
        self._debug_previous_game = game

    def detect_meteor_hits(self,
        tick: float, cannon: Cannon, changes: Changes) -> None:
        """Note: removes hit 'lost_meteors'."""
        if changes.insta_killed():
            cannon_dir = Vector.from_angle(math.radians(cannon.orientation))
            vel = cannon_dir.scale(self.constants.rockets.speed)
            self.rockets['instant'] = RocketInfo(
                position=cannon.position, velocity=vel,
                size=self.constants.rockets.size)
            changes.lost_rockets.add('instant')
        for rocket in changes.lost_rockets:
            self._check_rocket_hit(tick, rocket, changes.lost_meteors)
        if not self._expect('instant' not in self.rockets,
            (f'Insta kill, but no hits found: meteors: {changes.lost_meteors} '
             f'Rocket: {self.rockets.get("instant")}')):
            del self.rockets['instant']  # Shouldn't happen, but cleaning up

    def detect_missed_meteors(self, changes: Changes) -> None:
        for meteor in changes.lost_meteors:
            self.on_miss(meteor)

    def detect_meteor_spawns(
        self, meteors: List[Meteor], changes: Changes) -> None:
        for meteor in (m for m in meteors if m.id in changes.new_meteors):
            print(f'[TMP] New {meteor.meteorType} meteor {meteor.id} spawned!')
            # TODO: detect explosion vs. new meteor
            self.meteors[meteor.id] = MeteorInfo(
                position=meteor.position, velocity=meteor.velocity,
                size=meteor.size, type_=meteor.meteorType)

    def detect_new_rockets(
        self, rockets: List[Projectile], changes: Changes) -> None:
        for rocket in (r for r in rockets if r.id in changes.new_rockets):
            self.rockets[rocket.id] = RocketInfo(
                position=rocket.position, velocity=rocket.velocity,
                size=rocket.size)

    def track_positions(self,
        meteors: List[Meteor], rockets: List[Projectile]) -> None:
        for meteor in meteors:
            self.meteors[meteor.id].position = meteor.position
        for rocket in rockets:
            self.rockets[rocket.id].position = rocket.position

    def _expect(self, true: bool, fail_msg: str) -> bool:
        game = self._debug_game
        if not true:
            print(f'[EXPECTATION failure]: {fail_msg}')
            print('Previous tick:')
            if self._debug_previous_game:
                self._debug_previous_game._debug_print()
            print()
            print('Current tick:')
            game._debug_print()
        if self.debug_mode:
            assert true, fail_msg
        return true

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
            if (self.bounds.is_out(meteor.advance(t)) or
                self.bounds.is_out(rocket.advance(t))):
                continue
            if hit_meteor is None or t < hit_time:
                hit_meteor = meteor_id
                hit_time = t
        if hit_meteor is not None:
            previous_tick = tick - 1
            self._expect(
                hit_time <= 1.0,
                (f'Inferred rocket-meteor hit time would be after right now: '
                 f'{hit_time}, {rocket}, {self.meteors[hit_meteor]}'))
            self.on_hit(rocket_id, hit_meteor, previous_tick + hit_time)
            meteors.remove(hit_meteor)
        else:
            self.on_wiffed(rocket_id)

    def on_hit(self, rocket_id: str, meteor_id: str, t: float) -> None:
        meteor = self.meteors[meteor_id]
        info = self.constants.meteorInfos[meteor.type_]
        self.score += info.score
        print(f'[HIT] Rocket {rocket_id} hit {meteor.type_} meteor {meteor_id} '
              f'at time {t:.2f} for {info.score} points!')
        # TODO: expect spawns
        del self.rockets[rocket_id]
        del self.meteors[meteor_id]

    def on_miss(self, meteor_id: str) -> None:
        meteor = self.meteors[meteor_id]
        info = self.constants.meteorInfos[meteor.type_]
        total_score = info.score  # TODO: compute potential score from spawns
        print(f'[MISS] {meteor.type_} meteor {meteor_id} got away! '
              f'Worth {info.score} points ({total_score} total)')
        del self.meteors[meteor_id]

    def on_wiffed(self, rocket_id: str) -> None:
        print(f'Rocket {rocket_id} hit NOTHING (how embarassing!)')
        del self.rockets[rocket_id]
