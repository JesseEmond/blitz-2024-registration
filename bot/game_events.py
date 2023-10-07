"""Keep track of the state of the game and various statistics."""
# TODO: move target assignment out (anything else to keep 'gameevents' clean?)
import dataclasses
import math
from typing import Callable, List, Mapping, Optional, Set, Tuple

from game_message import *

import physics


@dataclasses.dataclass
class ListenerCallbacks:
    # on_first_tick(game_events, constants, bounds)
    on_first_tick: Optional[
        Callable[['GameEvents', Constants, physics.Bounds], None]] = None
    # on_tick(game_events, game_message)
    on_tick: Optional[Callable[['GameEvents', GameMessage], None]] = None
    # on_before_events(game_events, game_message, changes)
    on_before_events: Optional[
        Callable[['GameEvents', GameMessage, 'Changes'], None]] = None
    # on_after_events(game_events, game_message)
    on_after_events: Optional[
        Callable[['GameEvents', GameMessage], None]] = None
    # on_hit(game_events, rocket_id, meteor_id, collision_time)
    on_hit: Optional[Callable[['GameEvents', str, str, float], None]] = None
    # on_miss(game_events, meteor_id)
    on_miss: Optional[Callable[['GameEvents', str], None]] = None
    # on_wiff(game_events, rocket_id)
    on_wiff: Optional[Callable[['GameEvents', str], None]] = None


@dataclasses.dataclass
class Target:
    id_: str
    hit_time: float


@dataclasses.dataclass
class MeteorInfo(Body):
    type_: MeteorType
    targeted_by: Optional[str]


@dataclasses.dataclass
class RocketInfo(Body):
    target: Optional[Target]


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


class GameEvents:
    """Track source and statuses of rockets and meteors, detect events."""

    def __init__(self):
        self.meteors = {}  # ID to MeteorInfo
        self.rockets = {}  # ID to RocketInfo
        self.next_rocket_target = None
        self.listeners = []

        # TODO: move to stats
        self.wrong_target = 0
        self.hit_time_deltas = []

        # Set on first tick.
        self.constants = None
        self.bounds = None

    def add_listener(self, callbacks: ListenerCallbacks) -> None:
        self.listeners.append(callbacks)

    def first_tick(self, constants: Constants, bounds: physics.Bounds) -> None:
        self.constants = constants
        self.bounds = bounds
        for listener in self.listeners:
            if listener.on_first_tick:
                listener.on_first_tick(self, constants, bounds)

    def update(self, game: GameMessage) -> None:
        for listener in self.listeners:
            if listener.on_tick:
                listener.on_tick(self, game)

        changes = self.detect_changes(game)
        for listener in self.listeners:
            if listener.on_before_events:
                listener.on_before_events(self, game, changes)
        self.detect_new_rockets(game.rockets, changes)

        self.detect_meteor_hits(game.tick, game.cannon, changes)
        self.detect_missed_meteors(changes)
        self.detect_meteor_spawns(game.meteors, changes)

        self.track_positions(game.meteors, game.rockets)
        for listener in self.listeners:
            if listener.on_after_events:
                listener.on_after_events(self, game)

    def detect_meteor_hits(self,
        tick: float, cannon: Cannon, changes: Changes) -> None:
        """Note: removes hit 'lost_meteors'."""
        if changes.insta_killed():
            cannon_dir = Vector.from_angle(math.radians(cannon.orientation))
            vel = cannon_dir.scale(self.constants.rockets.speed)
            self.rockets['instant'] = RocketInfo(
                position=cannon.position, velocity=vel,
                size=self.constants.rockets.size,
                target=self.next_rocket_target)
            # TODO: move to target picker
            # self._expect(self.next_rocket_target,
            #     f'Instant kill did not have a target.')
            self.next_rocket_target = None
            changes.lost_rockets.add('instant')
        for rocket in changes.lost_rockets:
            self._check_rocket_hit(tick, rocket, changes.lost_meteors)
        # TODO: move to target picker
        if 'instant' in self.rockets:
            del self.rockets['instant']
        # if not self._expect('instant' not in self.rockets,
        #     (f'Insta kill, but no hits found. Meteors: {changes.lost_meteors} '
        #      f'Rocket: {self.rockets.get("instant")}')):
        #     del self.rockets['instant']  # Shouldn't happen, but cleaning up

    def detect_missed_meteors(self, changes: Changes) -> None:
        for meteor in changes.lost_meteors:
            self.on_miss(meteor)

    def detect_meteor_spawns(
        self, meteors: List[Meteor], changes: Changes) -> None:
        for meteor in (m for m in meteors if m.id in changes.new_meteors):
            # TODO: detect explosion vs. new meteor
            # TODO: move this print to stats
            print(f'[TMP] New {meteor.meteorType} meteor {meteor.id} spawned!')
            self.meteors[meteor.id] = MeteorInfo(
                position=meteor.position, velocity=meteor.velocity,
                size=meteor.size, type_=meteor.meteorType,
                targeted_by=None)

    def detect_new_rockets(
        self, rockets: List[Projectile], changes: Changes) -> None:
        if not changes.new_rockets:
            return
        assert len(changes.new_rockets) == 1, \
            'Many new rockets: {changes.new_rockets}'
        new_rocket_id = next(iter(changes.new_rockets))
        rocket = next(r for r in rockets if r.id == new_rocket_id)
        target = self.next_rocket_target
        self.rockets[new_rocket_id] = RocketInfo(
            position=rocket.position, velocity=rocket.velocity,
            size=rocket.size, target=target)
        # TODO: move to target picker
        if not target: return
        # if not self._expect(target, f'No target assigned to rocket: {rocket}'):
        #     return
        self.meteors[target.id_].targeted_by = new_rocket_id
        # TODO: move this print to target picker
        print(f'(aim) rocket {new_rocket_id} to meteor {target.id_}')
        self.next_rocket_target = None

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
            # TODO: move to target picker on_hit
            # self._expect(
            #     hit_time <= 1.0,
            #     (f'Inferred rocket-meteor hit time would be after right now: '
            #      f'{hit_time}, {rocket}, {self.meteors[hit_meteor]}'))
            self.on_hit(rocket_id, hit_meteor, previous_tick + hit_time)
            meteors.remove(hit_meteor)
        else:
            self.on_wiff(rocket_id)

    def on_hit(self, rocket_id: str, meteor_id: str, t: float) -> None:
        for listener in self.listeners:
            if listener.on_hit:
                listener.on_hit(self, rocket_id, meteor_id, t)
        rocket = self.rockets[rocket_id]
        meteor = self.meteors[meteor_id]
        info = self.constants.meteorInfos[meteor.type_]
        # TODO: move target tracking to its own class
        if not rocket.target or rocket.target.id_ != meteor_id:
            self.wrong_target += 1
        if rocket.target and rocket.target.id_ == meteor_id:
            self.hit_time_deltas.append(t - rocket.target.hit_time)
        # TODO: remove pedantic once we detect these in candidate selection
        # TODO: move expects to target picker
        if not (rocket.target and rocket.target.id_ == meteor_id):
            if rocket.target:
                self.meteors[rocket.target.id_].targeted_by = None
        if not (meteor.targeted_by == rocket_id):
            self.rockets[meteor.targeted_by].target = None
        # if not self._expect(rocket.target and rocket.target.id_ == meteor_id,
        #     f'Rocket was targeting {rocket.target}', pedantic=True):
        #     if rocket.target:
        #         self._expect(
        #             self.meteors[rocket.target.id_].targeted_by == rocket_id,
        #             f'Meteor {rocket.target.id_} was not linked correctly.')
        #         self.meteors[rocket.target.id_].targeted_by = None
        # if not self._expect(meteor.targeted_by == rocket_id,
        #     f'Meteor was being targeted by {meteor.targeted_by}',
        #     pedantic=True):
        #     self._expect(
        #         (self.rockets[meteor.targeted_by].target and
        #          self.rockets[meteor.targeted_by].target.id_ == meteor_id),
        #         f'Rocket {meteor.targeted_by} was not linked correctly.')
        #     self.rockets[meteor.targeted_by].target = None
        # TODO: expect spawns
        del self.rockets[rocket_id]
        del self.meteors[meteor_id]

    def on_miss(self, meteor_id: str) -> None:
        for listener in self.listeners:
            if listener.on_miss:
                listener.on_miss(self, meteor_id)
        del self.meteors[meteor_id]

    def on_wiff(self, rocket_id: str) -> None:
        for listener in self.listeners:
            if listener.on_wiff:
                listener.on_wiff(self, rocket_id)
        del self.rockets[rocket_id]

    def is_targeted(self, meteor_id: str) -> bool:
        return self.meteors[meteor_id].targeted_by is not None

    def assign_target(self, meteor_id: str, hit_time: float) -> None:
        self.next_rocket_target = Target(meteor_id, hit_time)
