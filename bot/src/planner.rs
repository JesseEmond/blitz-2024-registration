use crate::game_message::{Cannon, Constants};
use crate::game_random::GameRandom;
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
        let mut did_shoot = false;
        while !state.is_done() {
            events.extend(state.run_tick(random, constants));
            
            if !did_shoot {
                // TODO: shoot on more than just the first tick
                events.push(state.shoot(cannon, constants, &Vec2::new(200.0, 200.0), first_id));
                did_shoot = true;
            }
        }
        events
    }
}
