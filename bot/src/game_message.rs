use std::marker::PhantomData;
use std::fmt;

use serde::{Deserialize, Deserializer};
use serde::de::{MapAccess, Visitor};

pub type Score = u16;
pub type Tick = u16;
pub const MAX_TICKS: Tick = 1000;

pub type Id = u32;

#[derive(Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct GameMessage {
    #[serde(rename = "type")]
    pub game_type: String,
    pub tick: Tick,
    pub last_tick_errors: Vec<String>,
    pub constants: Constants,
    pub cannon: Cannon,
    pub meteors: Vec<Meteor>,
    pub rockets: Vec<Projectile>,
    pub score: Score,
}

#[derive(Deserialize, Hash, PartialEq, Eq, Default, Copy, Clone, Debug)]
#[serde(rename_all = "UPPERCASE")]
pub enum MeteorType {
    #[default]
    Large = 0,
    Medium = 1,
    Small = 2,
}

#[derive(Deserialize, Clone, Copy, Debug, Default)]
pub struct Vector {
    pub x: f64,
    pub y: f64,
}

#[derive(Deserialize, Default)]
pub struct Projectile {
    pub id: String,
    pub position: Vector,
    pub velocity: Vector,
    pub size: f64,
}

#[derive(Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct Meteor {
    #[serde(flatten)]
    pub projectile: Projectile,
    pub meteor_type: MeteorType,
}

#[derive(Deserialize, Default, Clone)]
pub struct Cannon {
    pub position: Vector,
    pub orientation: f64,
    pub cooldown: u8,
}

#[derive(Deserialize, Default, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Constants {
    pub world: WorldConstants,
    pub rockets: RocketsConstants,
    pub cannon_cooldown_ticks: u8,
    pub meteor_infos: AllMeteorInfos,
}

impl Constants {
    pub fn get_meteor_info(&self, meteor_type: MeteorType) -> &MeteorInfos {
        &self.meteor_infos.0[meteor_type as usize]
    }
}

#[derive(Deserialize, Default, Clone)]
pub struct WorldConstants {
    pub width: usize,
    pub height: usize,
}

#[derive(Deserialize, Default, Clone)]
pub struct RocketsConstants {
    pub speed: f64,
    pub size: f64,
}

#[derive(Deserialize, Default, Clone)]
#[serde(rename_all = "camelCase")]
pub struct MeteorInfos {
    pub score: f64,
    pub size: f64,
    pub approximate_speed: f64,
    pub explodes_into: Vec<ExplosionInfos>,
}

#[derive(Deserialize, Default, Clone)]
#[serde(rename_all = "camelCase")]
pub struct ExplosionInfos {
    pub meteor_type: MeteorType,
    pub approximate_angle: f64,
}

pub fn default_game_settings() -> (Constants, Cannon) {
    let cannon = Cannon {
        position: Vector { x: 140.0, y: 400.0 },
        orientation: 0.0,
        cooldown: 0,
    };
    let constants: Constants = serde_json::from_str(r#"{
        "world": { "width": 1200, "height": 800 },
        "rockets": { "speed": 20.0, "size": 5.0 },
        "cannonCooldownTicks": 10,
        "meteorInfos": {
            "LARGE": {
                "score": 15.0,
                "size": 40.0,
                "approximateSpeed": 3.0,
                "explodesInto": [
                    { "meteorType": "MEDIUM", "approximateAngle": -18.0 },
                    { "meteorType": "MEDIUM", "approximateAngle": 18.0 }
                ]
            },
            "MEDIUM": {
                "score": 40.0,
                "size": 20.0,
                "approximateSpeed": 9.0,
                "explodesInto": [
                    { "meteorType": "SMALL", "approximateAngle": -30.0 },
                    { "meteorType": "SMALL", "approximateAngle": 0.0 },
                    { "meteorType": "SMALL", "approximateAngle": 30.0 }
                ]
            },
            "SMALL": {
                "score": 60.0,
                "size": 5.0,
                "approximateSpeed": 13.0,
                "explodesInto": []
            }
        }
    }"#).unwrap();
    (constants, cannon)
}

#[derive(Default, Clone)]
pub struct AllMeteorInfos(pub [MeteorInfos; 3]);

struct MeteorInfosVisitor {
    marker: PhantomData<fn() -> AllMeteorInfos>
}

impl MeteorInfosVisitor {
    fn new() -> Self {
        Self { marker: PhantomData }
    }
}

impl<'de> Visitor<'de> for MeteorInfosVisitor {
    type Value = AllMeteorInfos;

    fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        formatter.write_str("meteor type to meteor infos map")
    }

    fn visit_map<M>(self, mut access: M) -> Result<Self::Value, M::Error>
    where M: MapAccess<'de> {
        let mut map: AllMeteorInfos = Default::default();
        while let Some((key, value)) = access.next_entry::<MeteorType, MeteorInfos>()? {
            map.0[key as usize] = value;
        }
        Ok(map)
    }
}

impl<'de> Deserialize<'de> for AllMeteorInfos {
    fn deserialize<D>(deserializer: D) -> Result<AllMeteorInfos, D::Error>
    where D: Deserializer<'de> {
        deserializer.deserialize_map(MeteorInfosVisitor::new())
    }
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
        let game_message: GameMessage = serde_json::from_str(data)?;
        // Our parsing of meteor infos is custom, verify it is correct
        assert_eq!(game_message.constants.get_meteor_info(MeteorType::Large).score, 32.2);
        assert_eq!(game_message.constants.get_meteor_info(MeteorType::Medium).approximate_speed, 2.1);
        assert_eq!(game_message.constants.get_meteor_info(MeteorType::Small).size, 5.1);
        Ok(())
    }
}
