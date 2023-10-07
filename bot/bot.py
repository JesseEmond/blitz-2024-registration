import math
import time
from typing import List, Optional, Tuple

from game_message import *
from actions import *

import asserter
import game_events
import physics
import stats


class Bot:
    def __init__(self, on_server: bool):
        self.verbose = on_server
        self.constants = None
        self.bounds = None
        debug_mode = not on_server
        asserter_ = asserter.Asserter(debug_mode)
        self.events = game_events.GameEvents()
        self.stats = stats.Stats(asserter_)

        self.events.add_listener(asserter_.callbacks())
        self.events.add_listener(self.stats.callbacks())

        # TODO: detect when expected explosions spawn, remove from this list
        self.expected_explosions = {}
        self.next_explosion_id = 0

    def get_candidates(self, meteors: List[Meteor]) -> List[Meteor]:
        targets = [target for target in meteors
                   if not self.events.is_targeted(target.id)]
        # TODO: Take into accounts meteors that will spawn
        return targets

    def rank_candidates(self, cannon: Cannon, candidates: List[Meteor]):
        # TODO: avoid shooting large/medium meteors that will spawn meteors too
        # close to the edge?
        def _score(meteor: Meteor) -> float:
            score = self.constants.meteorInfos[meteor.meteorType].score
            time = physics.time_until_out_of_bounds(meteor, self.bounds)
            # Prio:
            # - higher score (-score)
            # - time left until it exits the area (more urgent)
            return (-score, time)
        candidates.sort(key=_score)

    def aim_ahead(self, cannon: Cannon,
                  target: Projectile) -> Optional[physics.CollisionInfo]:
        collision = physics.aim_at_moving_target(
            cannon.position, self.constants.rockets.size,
            self.constants.rockets.speed, target)
        if not collision:
            return None
        self.info(f'Aiming ahead, will hit in time {collision.delta_t}')
        return collision

    def expect_explosion(self, meteor: Meteor, position: Vector) -> None:
        # TODO: this requires more work.
        # First, the position approximation is not great.
        # Still unclear if this is:
        # - because we ignore the sphere size in collision prediction
        # - because the parent collision happens on tick times?
        # - because the children moved post-collision before the next tick?
        # Second, the velocity approximation is not great.
        # Still unclear if this is:
        # - because the approximateSpeed is noisy -- e.g. 13.5... vs. 13
        # - because the approximateAngle is noisy
        # - because my logic for determining the new angle is wrong
        # It would help if we tried to infer meteor parent/children to study
        # this
        parent_infos = self.constants.meteorInfos[meteor.meteorType]
        parent_angle = meteor.velocity.angle()
        self.info(f'Parent velocity: {meteor.velocity}')
        self.info(f'Parent speed: {meteor.velocity.len()}')
        self.info(f'Parent angle: {parent_angle}')
        for explode in parent_infos.explodesInto:
            child_info = self.constants.meteorInfos[explode.meteorType]
            id_ = f'expl{self.next_explosion_id}'
            self.next_explosion_id += 1
            angle = math.radians(explode.approximateAngle)
            self.info(f'Relative angle: {angle} (degrees: {explode.approximateAngle})')
            angle += parent_angle
            self.info(f'Angle: {angle}')
            direction = Vector.from_angle(angle)
            self.info(f'Dir: {direction}')
            speed = child_info.approximateSpeed
            self.info(f'Speed: {speed}')
            velocity = direction.scale(speed)
            new_meteor = Meteor(
                id=id_, position=position, velocity=velocity,
                size=child_info.size, meteorType=explode.meteorType)
            self.info(f'Expect meteor {meteor.id} to explode into: {new_meteor}')
            # TODO: new_meteor doesn't match reality super well.
            # - Is approximateSpeed & approximateAngle deliberately noisy?
            # - Is the position off because of sub-tick simulation?
            #   Also because we're ignoring meteor sizes?

    def info(self, s: str) -> None:
        if self.verbose:
            print(s)

    def get_next_move(self, game: GameMessage):
        self.info(f"Playing tick {game.tick}. Score: {game.score}")

        if not self.constants:
            self.constants = game.constants
            self.bounds = physics.Bounds(game.cannon, game.constants.world)
            self.events.first_tick(self.constants, self.bounds)
            self.info(f'Constants: {self.constants}')

        self.events.update(game)

        actions = []

        if not game.meteors:
            self.info('No meteors to shoot at!')
        targets = self.get_candidates(game.meteors)
        if not targets:
            self.info('No active targets to shoot at!')
        self.rank_candidates(game.cannon, targets)
        for target in targets:
            self.info(f'Considering target: {target}')
            collision = self.aim_ahead(game.cannon, target)
            if not collision:
                self.info('Can not reach target (no collision found).')
                continue
            self.info(f'Aiming ahead at: {collision}')
            if self.bounds.is_out(target.advance(collision.delta_t)):
                self.info('Can not reach aim (off-screen/past us).')
                continue
            hit_time = game.tick + collision.delta_t
            if hit_time >= TOTAL_TICKS:
                self.info(f'Can not reach target in time: {game.tick + collision.delta_t}')
                continue
            rocket_dir = collision.target.minus(
                game.cannon.position).normalized()
            rocket = Body(
                game.cannon.position,
                rocket_dir.scale(game.constants.rockets.speed),
                game.constants.rockets.size)
            others = [m for m in game.meteors if m.id != target.id]
            others_hit_t = physics.earliest_hit(rocket, others)
            # TODO: Instead of checking this here, update per-meteor targets at
            # the very start (before filtering candidates). We're currently
            # missing cases where we're "surprised" by an explosion that messes
            # with our assignments.
            if others_hit_t is not None and others_hit_t < collision.delta_t:
                self.info(('Would hit other meteor before reaching target: ',
                           f'{others_hit_t} < {collision.delta_t}'))
                continue
            actions.append(LookAtAction(target=collision.target))

            if not game.cannon.cooldown:
                self.info(f'Shooting! Marking {target.id} on our hit-list.')
                self.events.assign_target(target.id, hit_time)
                actions.append(ShootAction())
                # TODO: requires more work.
                # self.expect_explosion(target, collision.target)
            else:
                self.info(f'Cannon on cooldown, waiting {game.cannon.cooldown}...')
            break  # Successful target found. Stop looping.

        return actions

    def on_close(self):
        print('Game done! Summary...')
        self.stats.print_stats()
