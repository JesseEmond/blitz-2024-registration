# Blitz 2024 Registration - /dev/null

TODOs:
- [ ] Refactor `game_search_state` out of `planner`
- [ ] Go through code remaining TODOs
- [ ] sections below

It is a little bit of a tradition now to put _just a smidge_ of overkill for the
[Coveo Blitz](https://2024.blitz.codes/) registration challenge:
- In 2023, we were solving the Traveling Salesperson Problem with
  [ant simulations](https://github.com/JesseEmond/blitz-2023-inscription);
- In 2022, we were
  [packing Tetrominoes](https://github.com/JesseEmond/blitz-2022-inscription)
  while [msanfacon@](https://twitter.com/msanfacon) was trolling us on the
  leaderboard;
- in 2021, we were hard-coding an HTTP server in C++ to parse ints
  [_lightning fast_](https://github.com/JesseEmond/blitz-2021-chal).

For this year, we're shooting rockets at asteroids, and the overkill took... a
different form.

## Summary

TODO: the challenge, the difficulty

TODO: started python bot that aims ahead, _tries_ to predict spawns assuming noise...

TODO: fully went down a rabbit hole to _really_ understand how the server spawns meteors...

TODO: paid off, ended up with a _very_, _very_ accurate bot... you'll see why

TODO: final score 5000pts (include gif winning game here?)

## Challenge Description

TODO: description of rules

TODO: visual example of some mid-score game

## Simple Bot

TODO: intro

### Aim & Shoot

TODO: aim-ahead detour, math behind it + visuals?

TODO: moving circle collision detour, math behind it + visuals?

TODO: simple bot: pick a valid shootable target (e.g. higher score first), don't
      shoot targets we already shot at

### Hit Simulation

TODO: simulate server logic to pick hits that we know will happen

TODO: but hard to know if our local simulation matches what the server does, how
      do we know we're hitting what we intend to hit?

### Deducing Tick Events

TODO: deduce what happened between ticks: events. But, tricky. Example: 'insta-kill'

TODO: would run games with the local binary and detect mismatches with expectations & iterate

TODO: event listener framework, example listeners

### Simple Bot Results

TODO: score, video of example game

TODO: git branch TODO

TODO: ... but that's not 5000 pts, and this README is nowhere near the end,
      ... what's next?

## Rabbit Hole #1: What if Blitz was a CTF?

TODO: would like to answer some questions about the server logic, but have to
      play guessing games that I then verify with the local binary. Example: meteor splitting noise

TODO: but what if I didn't have to guess? the logic is _right there_, in the
      local binary. I like security challenges (Capture The Flag -- or CTF), I've
      done some RE (link R0, define RE), what if I take a look at the binary to
      answer my Qs?

TODO: This is maybe not a strategic use of my blitz time, but hey, it's a shiny
      new thing I could do to laterally procrastinate improving my python heuristic!

### Disassembling the local binary

TODO: where is the binary from?

TODO: run strings, find references to nodejs

TODO: look into nodejs 'compiling' to native executable, find possible tools,
      including vercel/pkg

TODO: confirmed through strings, great!

#### Unpacking `vercel/pkg` binaries

TODO: unpkg tool

TODO: example CTF link, mentions private, mention package.json config

TODO: stackexchange reversing vercel/pkg, many upvotes, no answer

TODO: vercel/pkg doc, mention V8 bytecode, mention note about security -- if anything learned through CTFs, is that security through obscurity given enough time with a dedicated person will be thwarted, this is a good reminder

TODO: vercel/pkg, we'll see more details, but:
- Produces Script `cached_data` outputs -- that's what we need to reverse
- Packages a NodeJS binary, with your scripts added to it
- `pkg` instruments the NodeJS binary so that it has a "virtual filesystem" where
  the cached sources are stored. Attempts to read the original source files
  (e.g. with NodeJS imports) will go through this virtual filesystem and the
  embedded file in the binary will be read instead of going to disk.

TODO: how do we reverse those cached data files?

#### Ghidra NodeJS plugin

##### Someone did the work for us!
TODO: fantastic blogpost link

TODO: amazing, tool just for us

TODO: Ghidra description + decompilation tool

##### Okay we just need to prepare it
TODO: plugin repository only, need to build it ourselves.... TODO painful, link doc

TODO: tried... V8 bytecode not detected on the file -- bad sign. Forced it, nothing.

##### Alright we just need to push it a bit
TODO: noticed V8 versions in the repo (link).

TODO: vercel/pkg actually has a nice feature where you can invoke the NodeJS
      interpreter that's packaged, instead of invoking the default script that
      was packaged in it. TODO include command + link

TODO: use this to get NodeJS version + V8 version. From V8 version, find that it
      is not supported by the plugin. Can we just add it?

TODO: to confirm I have the right version and that the script would be compatible,
      I computed the "version hash" the same way that the plugin uses to check if
      a version is supported TODO link, see script TODO, and indeed found that it
      matches what I see in the file (TODO example xxd)

TODO: tried that and... nope.

##### Maybe we're just holding it wrong
TODO: maybe a lot changed between X and Y? To confirm wrote script TODO that
      parses the script data cache, very closely following GITHUB LINK, the V8
      code in the exact NodeJS version we're using. It's essentially _another_
      bytecode that is used for serialization/deserialization

TODO: and... that's a pretty big mismatch, looks like many new concepts were
      introduced TODO examples.

TODO: This plugin would be useful living repo of V8 versions, but repo is stale.
      Extending the plugin to support TODO Y sounded appealing, but too much
      work for the blitz timeframe, and the repo is archived after all.

TODO: overall, suprised by lack of live tooling for reversing such binaries, maybe
      I missed it, but unlike other platforms when it comes to reversing

TODO: reality of internal bytecode format, hardly a need for a stable format --
      internally just needs to stay in sync

#### Reversing `vercel/pkg` outputs
TODO: but not giving up, learned a lot about V8 internals, and I _know_ NodeJS
      supports some form of disassembly (TODO example) -- can we patch it to
      output the decompilation we want? i.e. TODO function

TODO: how vercel/pkg works -- nodejs versions patched, what the patches do

TODO: clone node version, apply patch, apply additional patch TODO to do disassembly

TODO: SUCCESS!

### Reverse Engineering V8 Assembly

TODO: let's define success here, we get code like TODO

TODO: helpful resources

TODO: examples

TODO: example `action.js`

TODO: confusing code... look it up.... typescript. So we're disassembling V8 bytecodes to infer JS generated from typescript....

TODO: infer what the TS could be, verify, yay!

### Answering Questions with Assembly

TODO: tooling to RE all files (+ tooling to diff across versions)

TODO: questions we'd like to answer. + practice on reversing V8 assembly
1) Where is the meteor splitting logic?
2) On meteor split, what is the source position?
3) On meteor split, how is the velocity computed (angle + speed noise)?
4) At what rate do we expect meteor spawns?
5) What are parameters of genreal meteor spawning (velocity + position noise)?
6) Are physics simulated within-tick, or done in steps of integer 'ticks'?
7) How are random numbers generated?

#### Q1: Where is the meteor splitting logic?
TODO

#### Q2: On meteor split, what is the source position?
TODO

#### Q3: On meteor split, how is the velocity computed (angle + speed noise)?
TODO

#### Q4: At what rate do we expect meteor spawns?
TODO

#### Q5: What are parameters of meteor spawning (velocity + position noise)?
TODO

#### Q6: Are physics simulated within-tick, or done in steps of integer 'ticks'?
TODO

#### Q7: How are random numbers generated?
TODO mention initial version using Math.random in meteors

TODO mention later version changing to seedrandom TODO link, no doubt to make
games repeatable

## Rabbit Hole #2: Nostradamus

TODO: What if... we could predict the randomness? I like CTFs, I've predicted
insecure random numbers before TODO link, TODO matasano?

TODO: imagine if we can, could fully predict entire game, make full action plan

### Math.random
TODO: initially started looking at predicting Math.random.

TODO: info about Math.random, what PRNG is it?

TODO: predicting from previous outputs: loto example, with Z3

TODO: nuanced, though, since NodeJS keeps internal pool of random numbers,
      generates a chunk, then reads from it from the end. See talk TODO link

TODO: how is it seeded? For NodeJS, safely assuming it gets an `entropy_source`.
      It does, from OpenSSL (safe). Fun bug, though, when it was badly seeded:
      TODO link

TODO: but... no longer used in meteor after change, only a backoff if not given
      a seed. Seeding with `Math.random()` might just be `[0-9]` ascii chars,
      but still 52 bits of mantissa (TODO link, TODO JS uses double-precision
      floats), not cheap to bruteforce

### `seedrandom`
TODO: seedrandom RC4

TODO: known weaknesses with RC4 (infamously WEP TODO link), but not aware of a
useful crypto attack here that would help us either recover the seed or predict
future outputs

TODO: if a seed is given and has enough randomness and is secret, there's not
much we can do, and our "predict everything" dream is gone...

TODO: ... it's logged in game logs. Could has saved a bunch of time

TODO: from previous games, see that the server only seems to run X seeds: TODO list

TODO: HERE WE GO

## Rust Nostradamus Bot

### Exactly Replicate Server Logic
TODO reimplemented `seedrandom` in Rust TODO link

TODO recover seed from first observed meteor TODO link

TODO helper methods to generate new spawn or new splits TODO link

TODO implement spawn schedule TODO link

TODO tick update logic TODO link

TODO started off predicting all events that will happen, verifying them

TODO simple rust bot that replicates Python logic, but now can exactly verify hits and aim at future splits/spawns

TODO great benefit: rust binary to test a game instead of local server delays TODO link

TODO score

### Monte Carlo Tree Search

TODO on first tick, decide plan for full game within 1s

TODO use MCTS TODO link, normally use lib but like using blitz to reimplement & learn

TODO MCTS steps

TODO search state generate actions: one for each meteor that we aren't already targeting, or hold

TODO each action "resolves" the game state to figure out the score at the end

TODO playout "heavy playout", picking greedy best action based on heuristic, instead of just random

TODO score best seen path, use that

TODO score

### MCTS tweaks

TODO during playout: sometimes randomly pick action TODO RL parallel

TODO score >4900, would be great to get 5000...

TODO search state allow actions to mess with predictions (e.g. hit a meteor before some prediction we made, will change rng order) -- just update hits when that happens

TODO: incremental MCTS, run 800ms every tick, still walk on 'best seen path'

TODO: consider many aim options (instead of just center)

TODO: SP-MCTS link, UCT variation

TODO: backprop through entire playout paths that are >= best

### Out of Memory

TODO: OOM on server, beefy desktop, added TODO link lib to print mem usage,
      at ~1GB tick gets super slow (...paging?)

TODO: when tree gets too big, reset MCTS (but keep best path). This is also
      somewhat inspired by SP-MCTS meta search

TODO: from offline, saw a 4980, was aiming for it

TODO: ... and 5000pts!

## Winning Game
TODO: include video 5000pts

### Post-Blitz Follow-ups
TODO: tried a few last things, offline:
TODO: Fast resolve, can get >2x throughput in MCTS rounds per tick
TODO: multithreading

TODO: nothing higher than 5000pts
TODO conclusion
