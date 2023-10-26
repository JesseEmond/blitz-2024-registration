use crate::game_message::Constants;
use crate::game_random::GameRandom;
use crate::vec2::Vec2;

#[derive(Clone, Copy)]
pub struct Event {
    pub tick: u16,
    pub info: EventInfo
}

#[derive(Clone, Copy)]
pub enum EventInfo {
    MeteorSpawn { id: u16, pos: Vec2, vel: Vec2 },
}

pub struct Planner {
}

impl Planner {
    pub fn plan(
        &self, constants: &Constants, first_id: u16,
        random: &mut GameRandom) -> Vec<Event> {
        // TODO: simulate & plan actions!
        let spawn = random.next_spawn(&constants);
        let first_spawn_event = Event {
            tick: 1,
            info: EventInfo::MeteorSpawn {
                id: first_id, pos: spawn.pos, vel: spawn.vel
            },
        };
        vec![first_spawn_event]
    }
}
