from game_message import *

import game_events
import physics

class Stats:

    def __init__(self):
        self.constants = None

        self.score = 0
        self.lost_score = 0
        self.wiffs = 0
        self.hit_stats = {type_: 0 for type_ in MeteorType}
        self.miss_stats = {type_: 0 for type_ in MeteorType}
        self.broken_invariants = 0
        self.broken_pedantic_invariants = 0
        # TODO: hit time deltas stats
        # TODO: wrong target stats

    def callbacks(self) -> game_events.ListenerCallbacks:
        return game_events.ListenerCallbacks(
            on_first_tick=self.on_first_tick,
            on_before_events=self.on_before_events,
            on_hit=self.on_hit,
            on_miss=self.on_miss,
            on_wiff=self.on_wiff)

    def on_first_tick(
        self, events: game_events.GameEvents, constants: Constants,
        bounds: physics.Bounds) -> None:
        self.constants = constants

    def on_before_events(self,
        events: game_events.GameEvents, game: GameMessage,
        changes: game_events.Changes):
        if changes.any_change():
            print(f'Tick: {game.tick} (game score: {game.score} / '
                  f'{game.score + self.lost_score} potential)')
            if changes.just_shot:
                print('PEW!')

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

    def print_stats(self) -> None:
        potential = self.score + self.lost_score
        print(f'Final score:\t\t{self.score} points')
        print(f'Theoretical max:\t{potential} points')
        print(f'  ({self.score/potential*100:.1f}% points efficient)')

        print()
        if self.broken_invariants == 0:
            print('No invariants were broken during the game.')
        else:
            print(f'[!!!] {self.broken_invariants} INVARIANTS BROKEN [!!!]')
        print(f'{self.broken_pedantic_invariants} pedantic invariants broken.')

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
        print('TODO: restore wrong target hits')
        # print(f'Wrong target hits: {self.wrong_target}')
        print()
        print('TODO: restore time predictions')
        # print('Hit time predictions for right targets')
        # print(f'Min: {min(self.hit_time_deltas)}')
        # print(f'Max: {max(self.hit_time_deltas)}')
        # print(f'Avg: {sum(self.hit_time_deltas)/len(self.hit_time_deltas)}')
