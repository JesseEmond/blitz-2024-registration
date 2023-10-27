use serde::{Deserialize, Serialize};
use std::collections::HashMap;

pub const MAX_TICKS: u16 = 1000;

#[derive(Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct GameMessage {
    #[serde(rename = "type")]
    pub game_type: String,
    pub tick: u16,
    pub last_tick_errors: Vec<String>,
    pub constants: Constants,
    pub cannon: Cannon,
    pub meteors: Vec<Meteor>,
    pub rockets: Vec<Projectile>,
    pub score: u32,
}

#[derive(Serialize, Deserialize, Hash, PartialEq, Eq, Default, Copy, Clone)]
#[serde(rename_all = "UPPERCASE")]
pub enum MeteorType {
    #[default]
    Large,
    Medium,
    Small,
}

#[derive(Serialize, Deserialize, Clone, Copy, Debug, Default)]
pub struct Vector {
    pub x: f64,
    pub y: f64,
}

#[derive(Serialize, Deserialize, Default)]
pub struct Projectile {
    pub id: String,
    pub position: Vector,
    pub velocity: Vector,
    pub size: f64,
}

#[derive(Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct Meteor {
    #[serde(flatten)]
    pub projectile: Projectile,
    pub meteor_type: MeteorType,
}

#[derive(Serialize, Deserialize, Default)]
pub struct Cannon {
    pub position: Vector,
    pub orientation: f64,
    pub cooldown: u8,
}

#[derive(Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct Constants {
    pub world: WorldConstants,
    pub rockets: RocketsConstants,
    pub cannon_cooldown_ticks: u8,
    pub meteor_infos: HashMap<MeteorType, MeteorInfos>,
}

#[derive(Serialize, Deserialize, Default)]
pub struct WorldConstants {
    pub width: usize,
    pub height: usize,
}

#[derive(Serialize, Deserialize, Default)]
pub struct RocketsConstants {
    pub speed: f64,
    pub size: f64,
}

#[derive(Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct MeteorInfos {
    pub score: f64,
    pub size: f64,
    pub approximate_speed: f64,
    pub explodes_into: Vec<ExplosionInfos>,
}

#[derive(Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct ExplosionInfos {
    pub meteor_type: MeteorType,
    pub approximate_angle: f64,
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::Result;

    #[test]
    fn test_deserialize() -> Result<()> {
        let data = r#"{
            "type": "game tick",
            "tick": 123,
            "lastTickErrors": ["oops", "how"],
            "constants": {
                "world": { "width": 1200, "height": 800 },
                "rockets": { "speed": 15.2, "size": 5.1 },
                "cannonCooldownTicks": 10,
                "meteorInfos": {
                    "SMALL": {
                        "score": 12.2,
                        "size": 5.1,
                        "approximateSpeed": 1.1,
                        "explodesInto": []
                    },
                    "MEDIUM": {
                        "score": 22.2,
                        "size": 15.1,
                        "approximateSpeed": 2.1,
                        "explodesInto": [
                            {"meteorType": "SMALL", "approximateAngle": 12.0}]
                    },
                    "LARGE": {
                        "score": 32.2,
                        "size": 25.1,
                        "approximateSpeed": 3.1,
                        "explodesInto": [
                            {"meteorType": "MEDIUM", "approximateAngle": 22.0}]
                    }
                }
            },
            "cannon": {
                "position": {"x": 12.1, "y": 13.1},
                "orientation": 0.0,
                "cooldown": 0
            },
            "meteors": [
                {
                    "id": "123",
                    "position": {"x": 1.1, "y": 0.0},
                    "velocity": {"x": 0.1, "y": 0.1},
                    "size": 1.1,
                    "meteorType": "LARGE"
                }
            ],
            "rockets": [
                {
                    "id": "123",
                    "position": {"x": 1.1, "y": 0.0},
                    "velocity": {"x": 0.1, "y": 0.1},
                    "size": 1.1
                }
            ],
            "score": 42
        }"#;
        let _game_message: GameMessage = serde_json::from_str(data)?;
        Ok(())
    }
}
