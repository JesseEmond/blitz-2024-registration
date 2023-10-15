TODO: some info about how we got here

TODO: RE context
TODO: not super straightforward https://reverseengineering.stackexchange.com/questions/30921/decompiling-an-executable-compiled-by-vercel-pkg

TODO: mention https://github.com/LockBlock-dev/pkg-unpacker
TODO: mention https://www.alibabacloud.com/blog/javascript-bytecode-v8-ignition-instructions_599188
TODO: mention https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775

TODO: explain how https://github.com/vercel/pkg works

TODO: fighting with ghidra.. fighting with v8... fighting with nodejs 18.5.0......
until I tried pkg-unpacker --run and it didn't work! wrong node version! even if I try with v18.5.0 node....

TODO: however, can do PKG_EXECPATH=PKG_INVOKE_NODEJS ./blitz-challenge-linux to get a node shell to pop
was confused about this, but found this:
https://github.com/vercel/pkg-fetch/blob/6ffa969bc037f33cd5c926b8706324740c8818af/patches/node.v18.5.0.cpp.patch
pkg patches nodejs to allow their loading thing to work! no wonder my hacky nodejs code changes weren't working

1. checkout node v18.5.0 (https://github.com/nodejs/node/tree/v18.5.0)
2. find old v18.5.0 patch from pkg-fetch
3. apply to my node
4. compile (note: slow)
5. confirm can run scripts extracted through pkg-unpacker: `const fs=require('fs'); const { Script } = require('vm'); var data=fs.readFileSync('path/to/my/file/game.js'; var options = {displayErrors:true, cachedData: data, sourceless: true}; var script = new Script(undefined, o); script.runInNewContext();`  returns a function! fails to run (presumably because we left the snapshot payload empty, but maybe enough to disassemble)
6. change node impl to add disassembly print after loading script
7. disassemble constant SharedFunctionInfos also
8. run this on interesting files

TODO can I just run the node I'm given (with PKG_EXECPATH=PKG_INVOKE_NODEJS) with --print-bytecode on a script that loads the cached data path? Would that work out of the box? No, can see disassembly for loading the cached data, but not the cached data disassembly itself. Would still need the logging statements I was adding

TODO can I fix the ghidra plugin instead? looks like my V8 version, optioned with: `PKG_EXECPATH=PKG_INVOKE_NODEJS ./blitz-challenge-linux -p process.versions.v8` returns `10.2.154.4-node.8, and that one isn't included in the versions here: https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/data/v8_versions.json
From the ghidra plugin, the version field is the second 4-byte value in the cached data dump, after the magic value. In my case, with `xxd ./blitz-challenge-unpacked/snapshot/blitz-2024/challenge/dist/game.js | head`, I find that the version hash in the cached data is `522363af`.
If I reimplement the version hashing logic from https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java in Python, I get:
```python
def hash_value_unsigned(v: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L51"""
    mask = 0xFFFFFFFF
    v = ((v << 15) - v - 1) & mask
    v = (v ^ (v >> 12)) & mask
    v = (v + (v << 2)) & mask
    v = (v ^ (v >> 4)) & mask
    v = (v * 2057) & mask
    v = (v ^ (v >> 16)) & mask
    return v

def hash_combine_32(seed: int, value: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L61"""
    mask = 0xFFFFFFFF
    value = (value * 0xCC9E2D51) & mask
    value = ((value >> 15) | (value << (32-15))) & mask
    value = (value * 0x1b873593) & mask
    seed ^= value
    seed = ((seed >> 13) | (seed << (32-13))) & mask
    seed = (seed * 5 + 0xE6546B64) & mask
    return seed

def hash_combine_64(seed: int, value: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L71"""
    mask = 0xFFFFFFFFFFFFFFFF
    m = 0xC6A4A7935BD1E995
    value = (value * m) & mask
    value = (value ^ (value >> 47)) & mask
    value = (value * m) & mask
    seed = (seed ^ value) & mask
    seed = (seed * m) & mask
    return seed

def version_hash_32(major: int, minor: int, build: int, patch: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L81"""
    seed = 0
    seed = hash_combine_32(seed, hash_value_unsigned(patch))
    seed = hash_combine_32(seed, hash_value_unsigned(build))
    seed = hash_combine_32(seed, hash_value_unsigned(minor))
    seed = hash_combine_32(seed, hash_value_unsigned(major))
    return seed
TODO3
def version_hash_64(major: int, minor: int, build: int, patch: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L94"""
    seed = 0
    seed = hash_combine_64(seed, hash_value_unsigned(patch))
    seed = hash_combine_64(seed, hash_value_unsigned(build))
    seed = hash_combine_64(seed, hash_value_unsigned(minor))
    seed = hash_combine_64(seed, hash_value_unsigned(major))
    return seed & 0xFFFFFFFF

version = input('V8 version string?\n> ')
major, minor, build, patch = (int(part) for part in version.split('.'))
print(f'32-bit: {version_hash_32(major, minor, build, patch):8x}')
print(f'64-bit: {version_hash_64(major, minor, build, patch):8x}')
```

If I run it, plug `10.2.154.4`, I get:
```
32-bit: d6cbc5b5
64-bit: af632352
```

And, turns out, it matches the 64-bit! (with bytes inversed, since it's stored in little-endian). So we should be able to get the plugin working by first adding this version as one of the supported ones. Also needed to change the INSTANCE_SIZE (here: https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_bytecodeLoader.java#L37) to match the magic number that I was observing in the files: `0xc0de0562`, i.e. `INSTANCE_SIZE` `0x562` instead of the plugin's `0x3BE`.

But not the only changes needed. Makes sense, latest version supported by the plugin was `8.6.x.x`, and now we're at `10.2.x.x`. Reading the code from node v18.5.0, the header parsing here:
https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/code-serializer.cc#L600
can recover the proper header. Made a Python script to check that my reading of the code is correct, to help explore:
```python
# TODO parse_v8_script_cache.py
```
The header is parsed in `SerializedCodeData`, to know why part is the `payload` (i.e. bytes after the header).
`CodeSerializer::Deserialize` parses the payload by calling `ObjectDeserializer::DeserializeSharedFunctionInfo:
https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/code-serializer.cc#L450
This creates an `ObjectDeserializer` object, and calls `Deserialize` on it (see https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/object-deserializer.cc#L28).

The logic for `ObjectDeserializer` is here: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/object-deserializer.cc#L43 . It calls `ReadObject()`. This comes from `ObjectDeserializer`'s parent class: `Deserializer`, with implementation here: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/deserializer.cc#L599

The deserialization logic has bytecodes, so it first reads a single bytecode:
https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/deserializer.cc#L601

but after replicating the logic in python to try and understand it better to update the plugin.. really came to the realization that too much appears to have changed to patch the plugin without understanding it more fully. Thus, let's go the disassembly route...

But it's fine, we can still disassembly functions and parse V8 assembly. Looking at https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/interpreter/interpreter-generator.cc is super helpful.

e.g. action.js is as easy one to test this, find out the server is in typescript... so have to decompile and guess typescript-transpiled JS......


Here is what we'd like to answer, with this new skill:
1. How is randomness done? Can we predict it (https://github.com/JesseEmond/random-prediction)?
2. Where is the meteor splitting logic?
3. On meteor split, what is the source position?
4. On meteor split, how is the velocity computed (angle + speed noise)?
5. At what rate do we expect meteor spawns?
6. What are parameters of general meteor spawning (velocity noise, position noise)?
7. Are physics simulated within-tick, or done in steps of 'ticks' (i.e. are collisions within tick, or on integer ticks)?

TODO: look into the seed generation logic

## 1) How is randomness done? Can we predict it?
Disassemble `random.js` and analyze it.

I get roughly:
```typescript
import seedrandom = require('seedrandom');
export class Random {
    rng: any

    constructor(seed: any) {
        this.rng = seedrandom(seed.toString())
    }

    random() {
        this.rng()
    }
}
```

seedrandom (https://www.npmjs.com/package/seedrandom) works by using an RC4 stream cipher as a PRNG (see here: https://github.com/davidbau/seedrandom/blob/released/seedrandom.js#L54) to produce random outputs. RC4 has widely known security flaws (https://en.wikipedia.org/wiki/RC4#Security), notably used to break the WEP wireless encryption protocol (https://en.wikipedia.org/wiki/Fluhrer,_Mantin_and_Shamir_attack), and non-random biases in its first outputs (this is also why seedrandom throws away the first 256 bytes: https://github.com/davidbau/seedrandom/blob/released/seedrandom.js#L146).

It is also worth noting that it doesn't look like `seedrandom` is called with options to enable entropy, meaning that the seed fully determines the random sequence. From a Blitz challenge implementation perspective this makes sense, it is a useful feature to replay future games as-is.

That being said, I'm not aware of useful or practical cryptographic attacks here that would help us to either 1) recover the seed based on observed random bytes, or 2) predict future outputs after seeing enough random bytes (similar to other PRNGs: https://github.com/JesseEmond/random-prediction). 

If the seed is generated reasonably randomly, there's not much we can do here.

TODO: decompile exact seed setting logic (game.js uses Math.random(), but does the caller pass anything?)
eyeballing the bytecode for `game.js` and `challenge-launcher/index.js`, it looks like the `RANDOM_SEED` is set based if given, *or* there's back-off logic to use the output of `Math.random()` (toString?) as a seed. If the server is using this backoff path and we can predict `Math.random()`, we could predict the seed given to `seedrandom`, and predict the entire game sequence after that. I've done CTF challenges where the code seeds off of `time()`, or where the default implementation of the language produces a seed that's easy to brute-force. Unfortunately for us, it appears that V8 seeds off of a `random_number_generator()` here: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/numbers/math-random.cc#L50, which itself uses a couple of sources of randomness, prioritizing `entropy_source` if it was given one: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/base/utils/random-number-generator.cc#L41, and NodeJS does that using OpenSSL's entropy pool, directly in `node.cc`: https://github.com/nodejs/node/blob/v18.5.0/src/node.cc#L1144. As an aside, here's an fun bug report from 2013 where NodeJS was setting the entropy pool too late after V8 initialized, and V8 was seeding very poorly using just time: https://bugs.chromium.org/p/v8/issues/detail?id=2905 :) `Math.random().toString()` still isn't a great RC4 key to use, though, since it's `0-9` ascii chars for all bytes except the `.`, so there might still be something that can be done here, but it's still not trivial to attack. I also the server is also passing a seed in the first place, and that would be painful to try brute-force (can only test things on the server).

Tl;dr: we can't predict future random outputs from previous ones, and we can't brute-force the initial seed reliably.

This is unfortunate for us, it would have been quite fun to write a bot that, after seeing precise floats of a couple of random meteors, goes full Nostradamus and predicts the rest of the game perfectly.

TODO: ... OR IS IT?? uses of Math.random()???
## 2) Where is the meteor splitting logic?
I'd like to know if, on a meteor collision, the explosions spawn at 1) the contact point between the two circles, 2) the center of the parent meteor, 3) the center of the rocket, or 4) some other logic.

Let's find where this happens. I saw while eyeballing the V8 assembly for `game.js` that there is a `CHEAT_GENERATE_PREDICTABLE_METEORS`. This is interesting. Following this will surely help us answer some of our other questions around randomness ranges. But first, the meteor splitting logic.

`game.js` effectively hands off the world tick updating logic to `world.update()`. In `world.js`, we find a function `handleMeteorSplit` -- surely that's it! Worth decompiling more.

We find the following important functions:
- `World.update` orchestrates the calls;
- In `handleMeteorSplit`, there is a call to: `meteor.getMeteorsAfterExplosion(collision.intersection)` -- this should tell us how meteor splits are created;
- `Projectile.checkCollisionDuringCurrentTick` is what creates the collision objects, so would tell us how `collision.intersection` is set;
- `getCurrentGenerationDelayInTicks` computes a number based on the option `METEOR_GENERATION_DELAY_IN_TICKS`;
## 3) On meteor split, what is the source position?
To iron this out, we need to look at `Projectile.checkCollisionDuringCurrentTick` as part of `projectile.js`. It does, roughly:
```js
function checkCollisionDuringCurrentTick(a, b) {
	intersection = geoUtils.movingCirclesIntersection(
		a._position, a._velocity, a._size,
		b._position, b._velocity, b._size);
	collision = intersection
		.filter(timeBetween0and1)
		.sort(smallestTime)
		.at(0);
	return collision ?? null;
}
```

So let's decompile `geoUtils.js`. Somewhat encouragingly, `movingCirclesIntersection` is implemented very similarly to what I have in `physics.py`! Here is my decompilation of it:
```js
function movingCirclesIntersection(a_pos, a_vel, a_size, b_pos, b_vel, b_size) {
	// Quadratic formula to find when the circles have distance (a_size+b_size)
	a = a_vel.len_sq() + b_vel.len_sq() - 2 * a_vel.dot(b_vel)
	b = (2 * a_pos.dot(a_vel) + b_pos.dot(b_vel)
	     - b_pos.dot(a_vel) - a_pos.dot(b_vel))
	c = (a_pos.len_sq() + b_pos.len_sq()
	     - 2 * a_pos.dot(b_pos)
	     - (a_size + b_size) ** 2)
	inner = b*b - 4 * a * c  // b^2-4ac
	if inner < 0:
	  return []
	times = [(-b + Math.sqrt(inner)) / (2 * a),
			 (-b - Math.sqrt(inner)) / (2 * a)]
	return times.map(function(t) {
		x = a_pos.add(a_vel.multiply(t))
		y = b_pos.add(b_vel.multiply(t))
		return {
			t: t,
			intersection: y.subtract(x).normalized.multiply(a_size).add(x)
		}
	})
}
```

Based on this, it's clear that `intersection`, the spawn position of split meteors, is set to the collision point, as opposed to the position of the parent meteor.

TODO: this spawns at the explosion point at delta time t (between 0 and 1), and will spawn at the point of collision, but in the `meteor.update()` that follows it will move them by 1 entire tick, instead of `1 - delta_t`
## 4) On meteor split, how is the velocity computed (angle + speed noise)?
This logic happens in `getMeteorsAfterExplosion`. The relevant snippet from my decompiled JS is:
```js
function getMeteorsAfterExplosion(intersection) {
	return this.meteorInfos.explodesInto.map(function(explode) {
		velocity = this.velocity.rotate(explode.rotationRad).multiply(0.8)
		return Meteor.Build(intersection, velocity, explode.meteorType)
	})
}

function Build(pos, vel, typ) {
	vel = vel ?? vector.Vector(0, 0)
	typ ?? Large
	infos = METEOR_TYPE_INFOS.get(typ)
	if !infos {
		throw Error("Unknown meteor '" + typ + "'")
	}
	if vel.magnitude > 0 && infos.speed {
		delta = Math.random() * 0.2 * 2 + 1 - 0.2  // +- 20%
		vel = vel.normalized.multiply(infos.speed * delta)
	}
	return Meteor(pos, vel, typ, infos)
}
```
This means:
- Rotation is exact -- no randomness;
- Speed is sampled uniformly from `[0.8 speed, 1.2 speed)`.
I'm confused about the `0.8` multiplication of velocity, as far as I can tell it doesn't get used. Maybe this was an initial intent to have the post-explosion speed be the speed of the parent, decayed somewhat, instead of being configurable by meteor type?

I was surprised by the exact rotation, I thought I was seeing noise in my tests, but this prompted me to look at my split prediction code more carefully and notice a couple of bugs. Now, I am able to predict splits a lot more accurately!

TODO many spots using Math.random?? not rng? Nostradamus is back on?
## 5) At what rate do we expect meteor spawns?
TODO `getCurrentGenerationDelayInTicks` logic + what option passed
## ...
## 6) What are parameters of general meteor spawning (velocity noise, position noise)?
From `Word.update`, we find that the position is decided based on:
- `x = width + 50`;
- `y = height * random()`
The direction is based on some configuration constant `METEOR_GENERATION_CONE_ANGLE`, using `fromPolarAngle`:
- `r = random() * 50 + 50` -- this means speeds of `[50, 100)`;
- `theta = CONE_ANGLE/2 - 180 + random() * CONE_ANGLE`.

TODO where is `METEOR_GENERATION_CONE_ANGLE` set? Can it be set from the outside?

TODO: confirm that width & height are set to constants