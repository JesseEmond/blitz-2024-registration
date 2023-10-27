use crate::game_message::{Cannon, Constants};
use crate::game_random::GameRandom;
use crate::physics::{aim_ahead, MovingCircle};
use crate::simulate::{EventInfo, GameState};
use crate::vec2::Vec2;

/// Events at the time where the client would see them (i.e. the tick after
/// they happened). Note that we move forward the meteors in EventInfos by one
/// tick to match what the client would see in the GameMessage JSON (post tick
/// update).
#[derive(Clone, Copy)]
pub struct Event {
    pub tick: u16,
    pub info: EventInfo
}

pub struct Planner {
}

impl Planner {
    pub fn plan(
        &self, cannon: &Cannon, constants: &Constants, first_id: u32,
        random: &mut GameRandom) -> Vec<Event> {
        let mut state = GameState::new(first_id);
        let mut events = Vec::new();
        while !state.is_done() {
            events.extend(
                state.run_tick(random, constants).into_iter()
                    .map(|e| Event {
                        tick: state.tick,
                        info: post_update_event_info(e)
                    }));
            
            // TODO: smarter target picking
            if state.cannon_ready() && !state.meteors.is_empty() {
                let meteor = state.meteors.iter().next().unwrap();
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
                    if let Some(event) = state.shoot(cannon, constants, &aim, meteor.id) {
                        events.push(Event { tick: state.tick, info: event });
                    }
                }
            }
        }
        events
    }

}

/// Update event info position information to be after the tick update, to
/// match the positions that the client will receive (easier to verify that
/// the values are equal and that the simulation worked).
fn post_update_event_info(info: EventInfo) -> EventInfo {
    match info {
        EventInfo::MeteorSpawn { id, pos, vel } => EventInfo::MeteorSpawn {
            id,
            pos: pos.add(&vel),
            vel,
        },
        EventInfo::MeteorSplit { id, parent_id, pos, vel } => EventInfo::MeteorSplit {
            id,
            parent_id,
            pos: pos.add(&vel),
            vel,
        },
        _ => info,
    }
}
