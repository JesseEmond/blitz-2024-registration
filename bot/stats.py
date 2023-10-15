from typing import Optional

from game_message import *

import asserter
import game_events


def print_angle(radians: float) -> str:
    return f'{math.degrees(radians):.1f}°'

class Stats(game_events.Listener):

    def __init__(self, asserter_: asserter.Asserter):
        self.asserter = asserter_
        self.constants = None

        self.score = 0
        self.lost_score = 0
        self.wiffs = 0
        self.hit_stats = {type_: 0 for type_ in MeteorType}
        self.miss_stats = {type_: 0 for type_ in MeteorType}
        self.wrong_targets = 0
        self.target_changes = 0
        self.hit_time_deltas = []
        self.tick_times = []
        self.split_angle_deltas = []
        self.split_speed_multipliers = []
        self.split_spawn_pos_dists = []
        self.split_pos_dists = []

    def on_first_tick(self, events: game_events.GameEvents,
                      constants: Constants, bounds) -> None:
        self.constants = constants

    def on_before_events(self,
        events: game_events.GameEvents, game: GameMessage,
        changes: game_events.Changes):
        if changes.any_change():
            print(f'Tick: {game.tick} (game score: {game.score} / '
                  f'{game.score + self.lost_score} potential)')
            if changes.just_shot:
                print('PEW!')

    def on_after_events(self, events: game_events.GameEvents,
                        game: GameMessage, changes: game_events.Changes):
        if not self.asserter.expect(self.score == game.score,
            f'Predicted score {self.score}, but game has {game.score}'):
            self.score = game.score  # Adjust, otherwise we'll keep spamming.

    def on_hit(self, events: game_events.GameEvents, rocket_id: str,
               meteor_id: str, t: float) -> None:
        meteor = events.meteors[meteor_id]
        info = self.constants.meteorInfos[meteor.type_]
        print(f'[HIT] Rocket {rocket_id} hit {meteor.type_} meteor {meteor_id} '
              f'at time {t:.2f} for {info.score} points!')
        self.score += info.score
        self.hit_stats[meteor.type_] += 1

    def on_miss(self, events: game_events.GameEvents, meteor_id: str) -> None:
        meteor = events.meteors[meteor_id]
        info = self.constants.meteorInfos[meteor.type_]
        total_score = self.constants.potential_score(meteor.type_)
        print(f'[MISS] {meteor.type_} meteor {meteor_id} got away! '
              f'Worth {info.score} points ({total_score} total)')
        self.lost_score += total_score
        self.miss_stats[meteor.type_] += 1

    def on_wiff(self, events: game_events.GameEvents, rocket_id: str) -> None:
        print(f'Rocket {rocket_id} hit NOTHING (how embarassing!)')
        self.wiffs += 1

    def on_new_rocket(self, events: game_events.GameEvents,
                      rocket_id: str) -> None:
        if rocket_id == game_events.INSTANT_KILL_ROCKET_ID:
            print('[INSTA-KILL] New rocket spawned and hit something '
                  'right away')

    def on_meteor_spawn(self, events: game_events.GameEvents,
                        meteor_id: str) -> None:
        meteor = events.meteors[meteor_id]
        print(f'[SPAWN] New {meteor.type_} meteor {meteor_id}')

    def on_meteor_split_spawn(
        self, events: game_events.GameEvents, meteor_id: str,
        split: game_events.MeteorSplit) -> None:
        meteor = events.meteors[meteor_id]
        print(f'[SPLIT] Parent {split.parent.meteorType} meteor '
              f'{split.parent.id} split into {meteor.type_} meteor {meteor_id}')
        print('Position:')
        print(f'  predicted: {split.position.pprint()}')
        print(f'  actual:    {meteor.position.pprint()}')
        self.split_pos_dists.append(split.position.dist(meteor.position))
        print('Spawn position:')
        inferred_actual_spawn = meteor.advance(-split.next_tick_delta_t).position
        print(f'  predicted: {split.spawn_position.pprint()}')
        print(f'  actual:    {inferred_actual_spawn.pprint()}')
        self.split_spawn_pos_dists.append(
            split.spawn_position.dist(inferred_actual_spawn))
        def _print_vel(vel) -> str:
            return (f'{math.degrees(vel.angle()):7.2f}°@{vel.len():5.2f}\t'
                        f'({vel.x:.2f},{vel.y:.2f})')
        print('Velocity:')
        print(f'  predicted: {_print_vel(split.velocity)}')
        print(f'  actual:    {_print_vel(meteor.velocity)}')
        print('Angle:')
        angle_delta = center_angle(meteor.velocity.angle() - split.parent.velocity.angle())
        print(f'  predicted delta: {print_angle(split.delta_angle)}')
        print(f'  actual delta:    {print_angle(angle_delta)}')
        print(f'Parent pos: {split.parent._print_pos()} vel: {split.parent._print_vel()}')
        self.split_angle_deltas.append(center_angle(split.delta_angle - angle_delta))
        len_scale = meteor.velocity.len() / split.velocity.len()
        print(f'Split speed had a speed multiplier of: {len_scale:.2f}')
        self.split_speed_multipliers.append(len_scale)
        self.asserter.expect(
            self.split_spawn_pos_dists[-1] < 0.001,
            f'Bad spawn prediction: predicted {split.spawn_position} vs {inferred_actual_spawn}\nmeteor: {meteor}\nsplit: {split}')

    def record_wrong_target(self, rocket_id: str, target: Optional[str],
                            meteor_id: str) -> None:
        self.wrong_targets += 1
        print(f'[OOPS] Rocket {rocket_id} hit {meteor_id} instead of {target}!')

    def record_prediction_result(self, predicted: float,
                                 hit_time: float) -> None:
        self.hit_time_deltas.append(predicted - hit_time)

    def record_changed_target(self,
        rocket_id: str, old_target: Optional[str],
        new_target: Optional[str]) -> None:
        self.target_changes += 1
        print(f'[UPD8] Rocket {rocket_id} will hit {new_target} instead of '
              f'{old_target}!')

    def record_tick_time(self, time: float) -> None:
        self.tick_times.append(time)

    def print_stats(self) -> None:
        potential = self.score + self.lost_score
        print(f'Final score:\t\t{self.score} points')
        print(f'Theoretical max:\t{potential} points')
        print(f'  ({self.score/potential*100:.1f}% points efficient)')

        print()
        if self.asserter.eval_fails == 0:
            print('No invariants were broken during the game.')
        else:
            print(f'[!!!] {self.asserter.eval_fails} INVARIANTS BROKEN [!!!]')
        print(f'{self.asserter.pedantic_eval_fails} pedantic invariants broken.')

        print()
        if self.wiffs == 0:
            print('All shots hit.')
        else:
            print(f'[!!!] {self.wiffs} SHOT(S) MISSED [!!!]')

        print()
        print('Hit & passed-through breakdown')
        total_hits = sum(self.hit_stats.values())
        total_misses = sum(self.miss_stats.values())
        pct = total_hits / (total_hits + total_misses) * 100
        print(f'All: {total_hits}/{total_hits + total_misses} ({pct:.1f}%)')
        for type_ in MeteorType:
            hits, miss = self.hit_stats[type_], self.miss_stats[type_]
            pct = hits / (hits + miss) * 100
            miss_potential = miss * self.constants.potential_score(type_)
            print(f'- {type_}: {hits}/{hits + miss} ({pct:.1f}%) -- '
                  f'{miss_potential} points\' worth')

        print()
        print(f'Wrong target hits: {self.wrong_targets}')

        print()
        print(f'Changed target {self.target_changes} times')

        print()
        print('Hit time predictions for right targets')
        print(f'Min: {min(self.hit_time_deltas):.5f}')
        print(f'Max: {max(self.hit_time_deltas):.5f}')
        print(f'Avg: {sum(self.hit_time_deltas)/len(self.hit_time_deltas):.5f}')

        print()
        print('Predicted split angle errors')
        print(f'Min: {print_angle(min(self.split_angle_deltas))}')
        print(f'Max: {print_angle(max(self.split_angle_deltas))}')
        print(f'Avg: {print_angle(sum(self.split_angle_deltas)/len(self.split_angle_deltas))}')

        print()
        print('Predicted split spawn position errors')
        print(f'Min: {min(self.split_spawn_pos_dists):.2f}')
        print(f'Max: {max(self.split_spawn_pos_dists):.2f}')
        print(f'Avg: {sum(self.split_spawn_pos_dists)/len(self.split_spawn_pos_dists):.2f}')

        print()
        print('Predicted tick post-spawn position distances (impacted by speed noise)')
        print(f'Min: {min(self.split_pos_dists):.2f}')
        print(f'Max: {max(self.split_pos_dists):.2f}')
        print(f'Avg: {sum(self.split_pos_dists)/len(self.split_pos_dists):.2f}')

        print()
        print('Split speed multipliers')
        print(f'Min: {min(self.split_speed_multipliers):.3f}')
        print(f'Max: {max(self.split_speed_multipliers):.3f}')
        print(f'Avg: {sum(self.split_speed_multipliers)/len(self.split_speed_multipliers):.3f}')

        print()
        print('Tick times')
        print(f'Min: {min(self.tick_times)*1000:.1f}ms')
        print(f'Max: {max(self.tick_times)*1000:.1f}ms')
        print(f'Avg: {sum(self.tick_times)/len(self.tick_times)*1000:.1f}ms')
