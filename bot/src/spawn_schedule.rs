// Obtained by disassembling the local challenge binary, in default options
// setting 'METEOR_GENERATION_DELAY_IN_TICKS', in 'game.js'.
use crate::game_message::{MAX_TICKS};
const GENERATION_TICKS_DELAY_START: u16 = 60;
const GENERATION_TICKS_DELAY_FINISH: u16 = 30;

pub fn is_spawn_tick(tick: u16) -> bool {
    tick % get_current_generation_ticks_delay(tick) == 0
}

// Logic from the disassembled world.js in local binary.
fn get_current_generation_ticks_delay(tick: u16) -> u16 {
    let ratio = (tick as f64) / (MAX_TICKS as f64);
    let range = GENERATION_TICKS_DELAY_START - GENERATION_TICKS_DELAY_FINISH;
    let delay = (1.0 - ratio) * (range as f64) + (GENERATION_TICKS_DELAY_FINISH as f64);
    delay.round() as u16
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_expected_ticks() {
        // The spawns below are based on running a game and logging spawns.
        // Note that our bot sees ticks on the tick t+1 after spawn t, because
        // the game does: 1) spawn 2) updates (tick++) 3) fetch & apply actions.
        // Thus, the numbers below are -1 of the tick we saw them in logs.
        let seen_spawns = vec![
            0, 58, 114, 165, 216, 260, 306, 350, 384, 423, 460, 495, 528, 559,
            588, 680, 702, 722, 777, 792, 840, 891, 928, 961, 990
        ];
        let spawns: Vec<u16> = (0u16..MAX_TICKS)
            .filter(|&t| is_spawn_tick(t)).collect();
        assert_eq!(spawns, seen_spawns);
    }
}
