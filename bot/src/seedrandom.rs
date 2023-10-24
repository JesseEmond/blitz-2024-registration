// Rust version of https://github.com/davidbau/seedrandom/blob/released/seedrandom.js

struct SeedRandom {
    i: u8,
    j: u8,
    state: [u8; 256],
}

impl SeedRandom {
    fn from_seed(seed: &[u8]) -> Self {
        let mask = 0xFF;
        let mut state = [0u8; 256];
        for i in 0u8..=255u8 {
            state[i as usize] = i;
        }
        let mut j = 0;
        for i in 0u8..=255u8 {
            let t = state[i as usize] as usize;
            let k = seed[(i as usize) % seed.len()] as usize;
            j = (j + k + t) & mask;
            state.swap(i as usize, j);
        }
        let mut rng = Self { state, i: 0, j: 0 };
        // RC4-drop[256], like seedrandom does
        for _ in 0..256 {
            rng.get();
        }
        rng
    }

    fn s_i(&self) -> u8 {
        self.state[self.i as usize]
    }

    fn s_j(&self) -> u8 {
        self.state[self.j as usize]
    }

    fn get(&mut self) -> u8 {
        self.i = self.i.wrapping_add(1);
        self.j = self.j.wrapping_add(self.s_i());
        self.state.swap(self.i as usize, self.j as usize);
        let idx = self.s_i().wrapping_add(self.s_j());
        self.state[idx as usize]
    }

    fn get_n(&mut self, n: u8) -> u64 {
        assert!(n <= 8);
        let mut x = 0u64;
        for _ in 0..n {
            x = x * 256 + (self.get() as u64);
        }
        x
    }

    fn random(&mut self) -> f64 {
        let chunks: u8 = 6;
        let startdenom = 256u64.pow(chunks as u32);
        let significance = 1 << 52;
        let overflow = significance << 1;
        let mut n = self.get_n(chunks);
        let mut d = startdenom;
        let mut x = 0;
        while n < significance {
            n = (n + x) * 256;
            d *= 256;
            x = self.get() as u64;
        }
        while n >= overflow {
            n /= 2;
            d /= 2;
            x >>= 1;
        }
        (n + x) as f64 / (d as f64)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_seedrandom() {
        // Values generated via node.js program that calls
        // seedrandom('Stardreamer') and generates 5 random() outputs.
        let mut rng = SeedRandom::from_seed(b"Stardreamer");
        assert_eq!(rng.random(), 0.2992533235824688);
        assert_eq!(rng.random(), 0.18137575603793574);
        assert_eq!(rng.random(), 0.9131123861925614);
        assert_eq!(rng.random(), 0.5748264151575112);
        assert_eq!(rng.random(), 0.8330147977410588);
    }
}
