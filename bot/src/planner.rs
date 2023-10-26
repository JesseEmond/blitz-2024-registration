use crate::game_message::{Cannon, Constants};
use crate::game_random::GameRandom;
use crate::physics::{aim_ahead, MovingCircle};
use crate::simulate::{Event, GameState};
use crate::vec2::Vec2;

pub struct Planner {
}

impl Planner {
    pub fn plan(
        &self, cannon: &Cannon, constants: &Constants, first_id: u32,
        random: &mut GameRandom) -> Vec<Event> {
        let mut state = GameState::new(first_id);
        let mut events = Vec::new();
        while !state.is_done() {
            events.extend(state.run_tick(random, constants));
            
            // TODO: smarter target picking
            if state.can_shoot() && !state.meteors.is_empty() {
                let (&target_id, meteor) = state.meteors.iter().next().unwrap();
                let target = MovingCircle {
                    pos: meteor.pos,
                    vel: meteor.vel,
                    size: constants.meteor_infos.get(&meteor.typ).unwrap().size,
                };
                let cannon_pos: Vec2 = cannon.position.into();
                if let Some(aim) = aim_ahead(
                    &cannon_pos,
                    constants.rockets.speed,
                    &target) {
                    events.push(state.shoot(cannon, constants, &aim, target_id));
                }
            }
        }
        events
    }
}
