## Annotated
```js
function module() {  // 0x2e5740323b70
	return game_module  // 0x2e5740323c00
}

function game_module() { // 0x2e5740323c00
	acc = CreateFunctionContext [0] [5]
	PushContext r3  # acc is now context
	ContextSlot[2..6] = TheHole
	Object.defineProperty(exports, "__esModule", {value: true})
	exports.Blitz2024Challenge = undefined
	ContextSlot[2] = import("@blitz/engine")
	CurrentSlot[3] = import("./error")
	CurrentSlot[4] = import("./world")
	playOneTickr1 = import("./vector")
	ContextSlot[5] = import("./random")
	ContextSlot[6] = import("./meteor_infos")
	acc = CreateBlockContext CLASS_SCOPE
	PushContext r4  # acc is now context
	ContextSlot[2] = TheHole
	r8 = TheHole
	r5 = CreateClosure 0x2e57403245b8 (Blitz2024Challenge)
	r6 = ClassBoilerplate(contructor, registerTeam, getGameResults, setup, playOneTick, fetchAndApplyPlayerCommands, applyActions, isGameComplete, updateGame, addStatsForTeam, serializeForTeam, serializeForViewer, seralizeConstants, serializeCommon)
	r9 = CreateClosure 0x2e5740324aa0 (registerTeam)
	r10 = CreateClosure 0x2e5740324bd8 (getGameResults)
	r11 = CreateClosure 0x2e5740324ec0 (setup)
	r12 = CreateClosure 0x2e5740325130 (playOneTick)
	r13 = CreateClosure 0x2e5740325578 (fetchAndApplyPlayerCommands)
	r14 = CreateClosure 0x2e5740325c40 (applyActions)
	r15 = CreateClosure 0x2e5740326110 (isGameComplete)
	r16 = CreateClosure 0x2e57403262c8 (updateGame)
	r17 = CreateClosure 0x2e5740326410 (addStatsForTeam)
	r18 = CreateClosure 0x2e57403264f0 (serializeForTeam)
	r19 = CreateClosure 0x2e5740326668 (serializeForViewer)
	r20 = CreateClosure 0x2e57403267b8 (serializeConstants)
	r21 = CreateClosure 0x2e5740326c28 (serializeCommon)
	r7 = r5
	r6 = CallRuntime [DefineClass] (ClassBoilerplate, Blitz2024Challenge, registerTeam, getGameResults, setup, playOneTick, fetchAndApplyPlayerCommands, applyActions, isGameComplete, updateGame, addStatsForTeam, serializeForTeam, serializeForViewer, seralizeConstants, serializeCommon)
	ContextSlot[2] = Blitz2024Challenge
	PopContext r4  # context back to function context
	r2 = acc
	ContextSlot[4] = import("./world")
	exports.Blitz2024Challenge = ContextSlot[2]
	r0 = Blitz2024Challenge
	exports.WORLD_WIDTH = 1200
	exports.WORLD_HEIGHT = 800
	r5 = {
	  RANDOM_SEED: uninitialized,
	  TICK_COUNT: 1000,
	  SCORE_MULTIPLIER: 1,
	  HEALTH_POINTS: uninitialized,
	  WORLD_DIMENSIONS: uninitialized,
	  CANNON_INITIAL_ORIENTATION_DEG: 0,
	  CANNON_POSITION: uninitialized,
	  CANNON_MAX_ROTATION: 180,
	  CANNON_COOLDOWN_TICKS: 10,
	  BULLET_SPEED: 20,
	  BULLET_SIZE: 5,
	  METEOR_GENERATION_CONE_ANGLE: 30,
	  METEOR_GENERATION_DELAY_IN_TICKS: ???,
	  CHEAT_DISABLE_METEOR_GENERATION: false,
	  CHEAT_GENERATE_PREDICTABLE_METEORS: ???,
	}
	r5.RANDOM_SEED = Math.random()
	r5.HEALTH_POINTS = Infinity
	r5.WORLD_DIMENSIONS = {width: WORLD_WIDTH, height: WORLD_HEIGHT}
	r6 = vector.Vector
	r7 = 140
	r8 = WORLD_HEIGHT / 2
	r5.CANNON_POSITION = vector.Vector(140, WORLD_HEIGHT / 2)
	Blitz2024Challenge.DEFAULT_GAME_OPTIONS = r5
	return undefined
}

function Blitz2024Challenge(engine, options) {  // 0x2e57403245b8
	this.lastTickErrors = []
	this.currentTickNumber = 1
	this.engine = engine
	r2 = ContextSlot[2].DEFAULT_GAME_OPTIONS.clone()
	r3 = options
	_CopyDataProperties r2, options
	this.options = r2
	logger.info("Random seed: " + r3.RANDOM_SEED.toString())
	this.rng = random.Random(this.options.RANDOM_SEED)
	return undefined
}

function setup() {  // 0x2e5740324ec0
	r0 = AsyncFunctionEnter closure, this
	r1 = context
	if !this._engineTeam:
	  throw Error("No team registered!")
	r3 = ContextSlot[4]  # world
	r3 = world.World
	r4 = this.options
	r5 = this.rng
	acc = world.World
	this.world = world.World(this.options, this.rng)
	AsyncFunctionResolve(r0, undefined)
	r2 = async_func
	r1 = CreateCatchContext r2
	acc = TheHole
	SetPendingMessage
	acc = r1 (catch context)
	ContextSlot[2] = r2 (async_func)  # acc is now current ctxt
	r4 = acc
	r3 = r0
	AsyncFunctionReject r3, r4  (async_func, context)
	return
}

function playOneTick(tick) {  // 0x2e5740325130
	SwitchOnGeneratorState r0, [0], [1]
	r0 = AsyncFunctionEnter closure, this
	r1 = context
	this.currentTickNumber = a0
	if this.isGameComplete:
		r3 = {gameComplete: true, gameResults: {results: this.getGameResults()}}
		r2 = r0 (async_func)
		AsyncFunctionResolve async_func r3
		return
	this.updateGame()
	if not this.isGameComplete():
	  r3 = this.fetchAndApplyPlayerCommands()
	  r2 = r0 (async_func)
	  AsyncFunctionAwaitUncaught async_func, r3
	  SuspendGenerator r0 r1
	  r2 = ResumeGenerator r0 r1
	  r3 = GeneratorGetResumeMode r0
	  if r3 != 0:
		  rethrow
	r2 = {gameComplete: false, gameState: uninitialized, errors: uninitialized, commands: ???}
	r2.gameState = this.serializeForViewer()
	this.errors = this.lastTickErrors
	AsyncFunctionResolve r0 r2
	r2 = return
	r1 = CreateCatchContext r2
	TheHole
	SetPendingMessage
	acc = r1
	r4 = PushContext r2  # acc has the prev context
	AsyncFunctionReject r0 ContextSlot[2]
	return
}

function updateGame() {  // 0x2e57403262c8
	r1 = this.world
	if r1 not (undefined or null):
	  this.world.update()
	return undefined
}
```

## Disassembled
```
<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2e5740323b70] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2e5740323b70 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2e5740323b74 @    4 : c4                Star0 
 5684 S> 0x2e5740323b75 @    5 : a9                Return 
Constant pool (size = 1)
0x2e5740323b79: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 1
           0: 0x2e5740323b91 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2e5740327371 <ByteArray[8]>
0x2e5740323b91 points to: [0x2e5740323c00]
=== [0x2e5740323c00] DISASSEMBLY ===
Parameter count 6
Register count 22
Frame size 176
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2e5740323c00 @    0 : 83 00 05          CreateFunctionContext [0], [5]
         0x2e5740323c03 @    3 : 1a f7             PushContext r3
         0x2e5740323c05 @    5 : 10                LdaTheHole 
         0x2e5740323c06 @    6 : 25 02             StaCurrentContextSlot [2]
         0x2e5740323c08 @    8 : 10                LdaTheHole 
         0x2e5740323c09 @    9 : 25 03             StaCurrentContextSlot [3]
         0x2e5740323c0b @   11 : 10                LdaTheHole 
         0x2e5740323c0c @   12 : 25 04             StaCurrentContextSlot [4]
         0x2e5740323c0e @   14 : 10                LdaTheHole 
         0x2e5740323c0f @   15 : 25 05             StaCurrentContextSlot [5]
         0x2e5740323c11 @   17 : 10                LdaTheHole 
         0x2e5740323c12 @   18 : 25 06             StaCurrentContextSlot [6]
   84 S> 0x2e5740323c14 @   20 : 21 01 00          LdaGlobal [1], [0]
         0x2e5740323c17 @   23 : bf                Star5 
   91 E> 0x2e5740323c18 @   24 : 2d f5 02 02       GetNamedProperty r5, [2], [2]
         0x2e5740323c1c @   28 : c0                Star4 
         0x2e5740323c1d @   29 : 13 03             LdaConstant [3]
         0x2e5740323c1f @   31 : bd                Star7 
  106 E> 0x2e5740323c20 @   32 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2e5740323c24 @   36 : bc                Star8 
         0x2e5740323c25 @   37 : 19 03 f4          Mov a0, r6
   91 E> 0x2e5740323c28 @   40 : 5c f6 f5 04 05    CallProperty r4, r5-r8, [5]
  147 S> 0x2e5740323c2d @   45 : 0e                LdaUndefined 
  174 E> 0x2e5740323c2e @   46 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  201 S> 0x2e5740323c32 @   50 : 13 06             LdaConstant [6]
         0x2e5740323c34 @   52 : bf                Star5 
  201 E> 0x2e5740323c35 @   53 : 62 04 f5 09       CallUndefinedReceiver1 a1, r5, [9]
  201 E> 0x2e5740323c39 @   57 : 25 02             StaCurrentContextSlot [2]
  243 S> 0x2e5740323c3b @   59 : 13 07             LdaConstant [7]
         0x2e5740323c3d @   61 : bf                Star5 
  243 E> 0x2e5740323c3e @   62 : 62 04 f5 0b       CallUndefinedReceiver1 a1, r5, [11]
  243 E> 0x2e5740323c42 @   66 : 25 03             StaCurrentContextSlot [3]
  279 S> 0x2e5740323c44 @   68 : 13 08             LdaConstant [8]
         0x2e5740323c46 @   70 : bf                Star5 
  279 E> 0x2e5740323c47 @   71 : 62 04 f5 0d       CallUndefinedReceiver1 a1, r5, [13]
  279 E> 0x2e5740323c4b @   75 : 25 04             StaCurrentContextSlot [4]
  316 S> 0x2e5740323c4d @   77 : 13 09             LdaConstant [9]
         0x2e5740323c4f @   79 : bf                Star5 
  316 E> 0x2e5740323c50 @   80 : 62 04 f5 0f       CallUndefinedReceiver1 a1, r5, [15]
         0x2e5740323c54 @   84 : c3                Star1 
  354 S> 0x2e5740323c55 @   85 : 13 0a             LdaConstant [10]
         0x2e5740323c57 @   87 : bf                Star5 
  354 E> 0x2e5740323c58 @   88 : 62 04 f5 11       CallUndefinedReceiver1 a1, r5, [17]
  354 E> 0x2e5740323c5c @   92 : 25 05             StaCurrentContextSlot [5]
  398 S> 0x2e5740323c5e @   94 : 13 0b             LdaConstant [11]
         0x2e5740323c60 @   96 : bf                Star5 
  398 E> 0x2e5740323c61 @   97 : 62 04 f5 13       CallUndefinedReceiver1 a1, r5, [19]
  398 E> 0x2e5740323c65 @  101 : 25 06             StaCurrentContextSlot [6]
         0x2e5740323c67 @  103 : 81 0c             CreateBlockContext [12]
         0x2e5740323c69 @  105 : 1a f6             PushContext r4
         0x2e5740323c6b @  107 : 10                LdaTheHole 
         0x2e5740323c6c @  108 : 25 02             StaCurrentContextSlot [2]
         0x2e5740323c6e @  110 : 10                LdaTheHole 
         0x2e5740323c6f @  111 : bc                Star8 
         0x2e5740323c70 @  112 : 80 0e 00 02       CreateClosure [14], [0], #2
         0x2e5740323c74 @  116 : bf                Star5 
         0x2e5740323c75 @  117 : 13 0d             LdaConstant [13]
         0x2e5740323c77 @  119 : be                Star6 
         0x2e5740323c78 @  120 : 80 0f 01 02       CreateClosure [15], [1], #2
         0x2e5740323c7c @  124 : bb                Star9 
         0x2e5740323c7d @  125 : 80 10 02 02       CreateClosure [16], [2], #2
         0x2e5740323c81 @  129 : ba                Star10 
         0x2e5740323c82 @  130 : 80 11 03 02       CreateClosure [17], [3], #2
         0x2e5740323c86 @  134 : b9                Star11 
         0x2e5740323c87 @  135 : 80 12 04 02       CreateClosure [18], [4], #2
         0x2e5740323c8b @  139 : b8                Star12 
         0x2e5740323c8c @  140 : 80 13 05 02       CreateClosure [19], [5], #2
         0x2e5740323c90 @  144 : b7                Star13 
         0x2e5740323c91 @  145 : 80 14 06 02       CreateClosure [20], [6], #2
         0x2e5740323c95 @  149 : b6                Star14 
         0x2e5740323c96 @  150 : 80 15 07 02       CreateClosure [21], [7], #2
         0x2e5740323c9a @  154 : b5                Star15 
         0x2e5740323c9b @  155 : 80 16 08 02       CreateClosure [22], [8], #2
         0x2e5740323c9f @  159 : 18 ea             Star r16
         0x2e5740323ca1 @  161 : 80 17 09 02       CreateClosure [23], [9], #2
         0x2e5740323ca5 @  165 : 18 e9             Star r17
         0x2e5740323ca7 @  167 : 80 18 0a 02       CreateClosure [24], [10], #2
         0x2e5740323cab @  171 : 18 e8             Star r18
         0x2e5740323cad @  173 : 80 19 0b 02       CreateClosure [25], [11], #2
         0x2e5740323cb1 @  177 : 18 e7             Star r19
         0x2e5740323cb3 @  179 : 80 1a 0c 02       CreateClosure [26], [12], #2
         0x2e5740323cb7 @  183 : 18 e6             Star r20
         0x2e5740323cb9 @  185 : 80 1b 0d 02       CreateClosure [27], [13], #2
         0x2e5740323cbd @  189 : 18 e5             Star r21
         0x2e5740323cbf @  191 : 19 f5 f3          Mov r5, r7
         0x2e5740323cc2 @  194 : 65 28 00 f4 10    CallRuntime [DefineClass], r6-r21
         0x2e5740323cc7 @  199 : be                Star6 
         0x2e5740323cc8 @  200 : 0b f3             Ldar r7
         0x2e5740323cca @  202 : 25 02             StaCurrentContextSlot [2]
         0x2e5740323ccc @  204 : 1b f6             PopContext r4
         0x2e5740323cce @  206 : c2                Star2 
 4728 S> 0x2e5740323ccf @  207 : 0b f8             Ldar r2
 4755 E> 0x2e5740323cd1 @  209 : 32 03 05 07       SetNamedProperty a0, [5], [7]
 4777 S> 0x2e5740323cd5 @  213 : 19 f8 fa          Mov r2, r0
 4802 S> 0x2e5740323cd8 @  216 : 00 0d b0 04       LdaSmi.Wide [1200]
 4833 E> 0x2e5740323cdc @  220 : 32 fa 1c 15       SetNamedProperty r0, [28], [21]
 4841 S> 0x2e5740323ce0 @  224 : 00 0d 20 03       LdaSmi.Wide [800]
 4873 E> 0x2e5740323ce4 @  228 : 32 fa 1d 17       SetNamedProperty r0, [29], [23]
 4880 S> 0x2e5740323ce8 @  232 : 7c 1e 19 0c       CreateObjectLiteral [30], [25], #12
         0x2e5740323cec @  236 : bf                Star5 
 4941 E> 0x2e5740323ced @  237 : 21 1f 1a          LdaGlobal [31], [26]
         0x2e5740323cf0 @  240 : bd                Star7 
 4946 E> 0x2e5740323cf1 @  241 : 2d f3 20 1c       GetNamedProperty r7, [32], [28]
         0x2e5740323cf5 @  245 : be                Star6 
 4946 E> 0x2e5740323cf6 @  246 : 5d f4 f3 1e       CallProperty0 r6, r7, [30]
         0x2e5740323cfa @  250 : 33 f5 21 20       DefineNamedOwnProperty r5, [33], [32]
 5022 E> 0x2e5740323cfe @  254 : 21 22 22          LdaGlobal [34], [34]
         0x2e5740323d01 @  257 : 33 f5 23 24       DefineNamedOwnProperty r5, [35], [36]
 5054 E> 0x2e5740323d05 @  261 : 7c 24 26 29       CreateObjectLiteral [36], [38], #41
         0x2e5740323d09 @  265 : be                Star6 
 5074 E> 0x2e5740323d0a @  266 : 2d f8 1c 27       GetNamedProperty r2, [28], [39]
         0x2e5740323d0e @  270 : 33 f4 25 29       DefineNamedOwnProperty r6, [37], [41]
 5106 E> 0x2e5740323d12 @  274 : 2d f8 1d 2b       GetNamedProperty r2, [29], [43]
         0x2e5740323d16 @  278 : 33 f4 26 2d       DefineNamedOwnProperty r6, [38], [45]
         0x2e5740323d1a @  282 : 0b f4             Ldar r6
         0x2e5740323d1c @  284 : 33 f5 27 2f       DefineNamedOwnProperty r5, [39], [47]
 5225 E> 0x2e5740323d20 @  288 : 2d f9 28 31       GetNamedProperty r1, [40], [49]
         0x2e5740323d24 @  292 : be                Star6 
         0x2e5740323d25 @  293 : 00 0d 8c 00       LdaSmi.Wide [140]
         0x2e5740323d29 @  297 : bd                Star7 
 5240 E> 0x2e5740323d2a @  298 : 2d f8 1d 2b       GetNamedProperty r2, [29], [43]
 5253 E> 0x2e5740323d2e @  302 : 48 02 33          DivSmi [2], [51]
         0x2e5740323d31 @  305 : bc                Star8 
         0x2e5740323d32 @  306 : 0b f4             Ldar r6
 5212 E> 0x2e5740323d34 @  308 : 69 f4 f3 02 34    Construct r6, r7-r8, [52]
         0x2e5740323d39 @  313 : 33 f5 29 36       DefineNamedOwnProperty r5, [41], [54]
         0x2e5740323d3d @  317 : 0b f5             Ldar r5
 4920 E> 0x2e5740323d3f @  319 : 32 fa 2a 38       SetNamedProperty r0, [42], [56]
         0x2e5740323d43 @  323 : 0e                LdaUndefined 
 5681 S> 0x2e5740323d44 @  324 : a9                Return 
Constant pool (size = 43)
0x2e5740323d49: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 43
           0: 0x2e5740323eb1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2552e2dc5ab9 <String[6]: #Object>
           2: 0x2552e2dc4c11 <String[14]: #defineProperty>
           3: 0x2e5740323fc9 <String[10]: #__esModule>
           4: 0x2e5740323fe9 <ObjectBoilerplateDescription[3]>
           5: 0x2e5740324011 <String[18]: #Blitz2024Challenge>
           6: 0x2e5740324039 <String[13]: #@blitz/engine>
           7: 0x2e5740324059 <String[7]: #./error>
           8: 0x2e5740324071 <String[7]: #./world>
           9: 0x2e5740324089 <String[8]: #./vector>
          10: 0x2e57403240a1 <String[8]: #./random>
          11: 0x2e57403240b9 <String[14]: #./meteor_infos>
          12: 0x2e57403240d9 <ScopeInfo CLASS_SCOPE>
          13: 0x2e5740324121 <FixedArray[7]>
          14: 0x2e5740324549 <SharedFunctionInfo Blitz2024Challenge>
          15: 0x2e5740324a31 <SharedFunctionInfo registerTeam>
          16: 0x2e5740324b69 <SharedFunctionInfo getGameResults>
          17: 0x2e5740324e51 <SharedFunctionInfo setup>
          18: 0x2e57403250c1 <SharedFunctionInfo playOneTick>
          19: 0x2e5740325509 <SharedFunctionInfo fetchAndApplyPlayerCommands>
          20: 0x2e5740325bd1 <SharedFunctionInfo applyActions>
          21: 0x2e57403260a1 <SharedFunctionInfo isGameComplete>
          22: 0x2e5740326259 <SharedFunctionInfo updateGame>
          23: 0x2e57403263a1 <SharedFunctionInfo addStatsForTeam>
          24: 0x2e5740326481 <SharedFunctionInfo serializeForTeam>
          25: 0x2e57403265f9 <SharedFunctionInfo serializeForViewer>
          26: 0x2e5740326749 <SharedFunctionInfo serializeConstants>
          27: 0x2e5740326bb9 <SharedFunctionInfo serializeCommon>
          28: 0x2e5740326ef1 <String[11]: #WORLD_WIDTH>
          29: 0x2e5740326f11 <String[12]: #WORLD_HEIGHT>
          30: 0x2e5740326f31 <ObjectBoilerplateDescription[31]>
          31: 0x1c347b0da991 <String[4]: #Math>
          32: 0x1c347b0daba1 <String[6]: #random>
          33: 0x2e57403247a9 <String[11]: #RANDOM_SEED>
          34: 0x2552e2dc5381 <String[8]: #Infinity>
          35: 0x2e5740327059 <String[13]: #HEALTH_POINTS>
          36: 0x2e5740327269 <ObjectBoilerplateDescription[5]>
          37: 0x2e5740326a59 <String[5]: #width>
          38: 0x2e5740326a71 <String[6]: #height>
          39: 0x2e5740326a89 <String[16]: #WORLD_DIMENSIONS>
          40: 0x2e57403272a1 <String[6]: #Vector>
          41: 0x2e57403270a9 <String[15]: #CANNON_POSITION>
          42: 0x2e5740324719 <String[20]: #DEFAULT_GAME_OPTIONS>
Handler Table (size = 0)
Source Position Table (size = 111)
0x2e57403272b9 <ByteArray[111]>
Boilerplate at 0x2e5740323fe9: 
0x2e5740323fe9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 3
           0: 8
           1: 0x2552e2dc6419 <String[5]: #value>
           2: 0x2552e2dc1729 <true>
Array at 0x2e5740324121 has 7 elements:
0x2e5740324121: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 7
           0: 16
           1: 0x2e5740324169 <DescriptorArray[4]>
           2: 0x2552e2dc3301 <NumberDictionary[7]>
           3: 0x2552e2dc1329 <FixedArray[0]>
           4: 0x2e5740324229 <DescriptorArray[14]>
           5: 0x2552e2dc3301 <NumberDictionary[7]>
           6: 0x2552e2dc1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x10 (16)
Element[1]
0x2e5740324169: [DescriptorArray] in OldSpace
 - map: 0x2552e2dc7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2552e2dc55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x1c347b0f4fe1 <AccessorInfo>
  [1]: 0x2552e2dc58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x1c347b0f4f71 <AccessorInfo>
  [2]: 0x2552e2dc5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x1c347b0f5051 <AccessorInfo>
  [3]: 0x2552e2dc65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x2e5740324211 <ClassPositions 425, 4727>
Element[2]
0x2552e2dc3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x2552e2dc1329: [FixedArray] in ReadOnlySpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 0
Element[4]
0x2e5740324229: [DescriptorArray] in OldSpace
 - map: 0x2552e2dc7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 14
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2552e2dc4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 12, attrs: [W_C]) @ 1
  [1]: 0x2e5740324391: [String] in OldSpace: #registerTeam (const data descriptor, p: 5, attrs: [W_C]) @ 3
  [2]: 0x2e57403243b1: [String] in OldSpace: #getGameResults (const data descriptor, p: 7, attrs: [W_C]) @ 4
  [3]: 0x1c347b0c88a1: [String] in OldSpace: #setup (const data descriptor, p: 6, attrs: [W_C]) @ 5
  [4]: 0x2e57403243e9: [String] in OldSpace: #playOneTick (const data descriptor, p: 11, attrs: [W_C]) @ 6
  [5]: 0x2e5740324409: [String] in OldSpace: #fetchAndApplyPlayerCommands (const data descriptor, p: 13, attrs: [W_C]) @ 7
  [6]: 0x2e5740324439: [String] in OldSpace: #applyActions (const data descriptor, p: 8, attrs: [W_C]) @ 8
  [7]: 0x2e5740324459: [String] in OldSpace: #isGameComplete (const data descriptor, p: 9, attrs: [W_C]) @ 9
  [8]: 0x2e5740324479: [String] in OldSpace: #updateGame (const data descriptor, p: 2, attrs: [W_C]) @ 10
  [9]: 0x2e5740324499: [String] in OldSpace: #addStatsForTeam (const data descriptor, p: 1, attrs: [W_C]) @ 11
  [10]: 0x2e57403244b9: [String] in OldSpace: #serializeForTeam (const data descriptor, p: 0, attrs: [W_C]) @ 12
  [11]: 0x2e57403244d9: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 10, attrs: [W_C]) @ 13
  [12]: 0x2e5740324501: [String] in OldSpace: #serializeConstants (const data descriptor, p: 3, attrs: [W_C]) @ 14
  [13]: 0x2e5740324529: [String] in OldSpace: #serializeCommon (const data descriptor, p: 4, attrs: [W_C]) @ 15
Element[5]
0x2552e2dc3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x2552e2dc1329: [FixedArray] in ReadOnlySpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 0
0x2e5740324549 points to: [0x2e57403245b8]
=== [0x2e57403245b8] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  495 S> 0x2e57403245b8 @    0 : 7b 00             CreateEmptyArrayLiteral [0]
  515 E> 0x2e57403245ba @    2 : 32 02 00 01       SetNamedProperty <this>, [0], [1]
  529 S> 0x2e57403245be @    6 : 0d 01             LdaSmi [1]
  552 E> 0x2e57403245c0 @    8 : 32 02 01 03       SetNamedProperty <this>, [1], [3]
  565 S> 0x2e57403245c4 @   12 : 0b 03             Ldar a0
  577 E> 0x2e57403245c6 @   14 : 32 02 02 05       SetNamedProperty <this>, [2], [5]
  595 S> 0x2e57403245ca @   18 : 16 02             LdaCurrentContextSlot [2]
  627 E> 0x2e57403245cc @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2e57403245ce @   22 : c2                Star2 
  646 E> 0x2e57403245cf @   23 : 2d f8 04 07       GetNamedProperty r2, [4], [7]
         0x2e57403245d3 @   27 : c2                Star2 
         0x2e57403245d4 @   28 : 7e f8 29 09       CloneObject r2, #41, [9]
         0x2e57403245d8 @   32 : c3                Star1 
         0x2e57403245d9 @   33 : 19 f9 f8          Mov r1, r2
         0x2e57403245dc @   36 : 19 04 f7          Mov a1, r3
  683 E> 0x2e57403245df @   39 : 68 0e f8 02       InvokeIntrinsic [_CopyDataProperties], r2-r3
         0x2e57403245e3 @   43 : 0b f8             Ldar r2
  608 E> 0x2e57403245e5 @   45 : 32 02 05 0b       SetNamedProperty <this>, [5], [11]
  711 S> 0x2e57403245e9 @   49 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x2e57403245ed @   53 : aa 06             ThrowReferenceErrorIfHole [6]
         0x2e57403245ef @   55 : c3                Star1 
  720 E> 0x2e57403245f0 @   56 : 2d f9 07 0d       GetNamedProperty r1, [7], [13]
         0x2e57403245f4 @   60 : c3                Star1 
  727 E> 0x2e57403245f5 @   61 : 2d f9 08 0f       GetNamedProperty r1, [8], [15]
         0x2e57403245f9 @   65 : c4                Star0 
         0x2e57403245fa @   66 : 13 09             LdaConstant [9]
         0x2e57403245fc @   68 : c2                Star2 
  753 E> 0x2e57403245fd @   69 : 2d 02 05 12       GetNamedProperty <this>, [5], [18]
         0x2e5740324601 @   73 : c1                Star3 
  761 E> 0x2e5740324602 @   74 : 2d f7 0a 14       GetNamedProperty r3, [10], [20]
         0x2e5740324606 @   78 : 77                ToString 
         0x2e5740324607 @   79 : 39 f8 11          Add r2, [17]
         0x2e574032460a @   82 : c2                Star2 
  727 E> 0x2e574032460b @   83 : 5e fa f9 f8 16    CallProperty1 r0, r1, r2, [22]
  785 S> 0x2e5740324610 @   88 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
  800 E> 0x2e5740324614 @   92 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x2e5740324616 @   94 : c3                Star1 
  809 E> 0x2e5740324617 @   95 : 2d f9 0c 18       GetNamedProperty r1, [12], [24]
         0x2e574032461b @   99 : c3                Star1 
  821 E> 0x2e574032461c @  100 : 2d 02 05 1a       GetNamedProperty <this>, [5], [26]
         0x2e5740324620 @  104 : c2                Star2 
  829 E> 0x2e5740324621 @  105 : 2d f8 0a 1c       GetNamedProperty r2, [10], [28]
         0x2e5740324625 @  109 : c2                Star2 
         0x2e5740324626 @  110 : 0b f9             Ldar r1
  796 E> 0x2e5740324628 @  112 : 69 f9 f8 01 1e    Construct r1, r2-r2, [30]
  794 E> 0x2e574032462d @  117 : 32 02 0d 20       SetNamedProperty <this>, [13], [32]
         0x2e5740324631 @  121 : 0e                LdaUndefined 
  847 S> 0x2e5740324632 @  122 : a9                Return 
Constant pool (size = 14)
0x2e5740324639: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 14
           0: 0x2e57403246b9 <String[14]: #lastTickErrors>
           1: 0x2e57403246d9 <String[17]: #currentTickNumber>
           2: 0x2e5740324701 <String[6]: #engine>
           3: 0x2e5740324011 <String[18]: #Blitz2024Challenge>
           4: 0x2e5740324719 <String[20]: #DEFAULT_GAME_OPTIONS>
           5: 0x1c347b0ccbb9 <String[7]: #options>
           6: 0x2e5740323f49 <String[8]: #engine_1>
           7: 0x1c347b0c6461 <String[6]: #logger>
           8: 0x1c347b0dc1f9 <String[4]: #info>
           9: 0x2e5740324789 <String[13]: #Random seed: >
          10: 0x2e57403247a9 <String[11]: #RANDOM_SEED>
          11: 0x2e5740323f91 <String[8]: #random_1>
          12: 0x2e57403247c9 <String[6]: #Random>
          13: 0x1c347b0e8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 61)
0x2e57403247f9 <ByteArray[61]>
0x2e5740324a31 points to: [0x2e5740324aa0]
=== [0x2e5740324aa0] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  882 S> 0x2e5740324aa0 @    0 : 0b 03             Ldar a0
  899 E> 0x2e5740324aa2 @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x2e5740324aa6 @    6 : 0e                LdaUndefined 
  911 S> 0x2e5740324aa7 @    7 : a9                Return 
Constant pool (size = 1)
0x2e5740324aa9: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 1
           0: 0x2e5740324ac1 <String[11]: #_engineTeam>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2e5740324ae1 <ByteArray[9]>
0x2e5740324b69 points to: [0x2e5740324bd8]
=== [0x2e5740324bd8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  944 S> 0x2e5740324bd8 @    0 : 79 00 00 04       CreateArrayLiteral [0], [0], #4
         0x2e5740324bdc @    4 : c3                Star1 
         0x2e5740324bdd @    5 : 0c                LdaZero 
         0x2e5740324bde @    6 : c4                Star0 
         0x2e5740324bdf @    7 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x2e5740324be3 @   11 : c2                Star2 
 1020 E> 0x2e5740324be4 @   12 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2e5740324be8 @   16 : c1                Star3 
         0x2e5740324be9 @   17 : 9e 08             JumpIfUndefinedOrNull [8] (0x2e5740324bf1 @ 25)
 1025 E> 0x2e5740324beb @   19 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x2e5740324bef @   23 : 8a 03             Jump [3] (0x2e5740324bf2 @ 26)
         0x2e5740324bf1 @   25 : 0e                LdaUndefined 
         0x2e5740324bf2 @   26 : 9e 04             JumpIfUndefinedOrNull [4] (0x2e5740324bf6 @ 30)
         0x2e5740324bf4 @   28 : 8a 03             Jump [3] (0x2e5740324bf7 @ 31)
         0x2e5740324bf6 @   30 : 0c                LdaZero 
         0x2e5740324bf7 @   31 : 33 f8 03 06       DefineNamedOwnProperty r2, [3], [6]
 1068 E> 0x2e5740324bfb @   35 : 2d 02 04 08       GetNamedProperty <this>, [4], [8]
         0x2e5740324bff @   39 : c1                Star3 
         0x2e5740324c00 @   40 : 9e 08             JumpIfUndefinedOrNull [8] (0x2e5740324c08 @ 48)
 1079 E> 0x2e5740324c02 @   42 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x2e5740324c06 @   46 : 8a 03             Jump [3] (0x2e5740324c09 @ 49)
         0x2e5740324c08 @   48 : 0e                LdaUndefined 
         0x2e5740324c09 @   49 : 9e 04             JumpIfUndefinedOrNull [4] (0x2e5740324c0d @ 53)
         0x2e5740324c0b @   51 : 8a 04             Jump [4] (0x2e5740324c0f @ 55)
         0x2e5740324c0d @   53 : 13 06             LdaConstant [6]
         0x2e5740324c0f @   55 : 33 f8 07 0c       DefineNamedOwnProperty r2, [7], [12]
 1130 E> 0x2e5740324c13 @   59 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x2e5740324c17 @   63 : c1                Star3 
         0x2e5740324c18 @   64 : 9e 08             JumpIfUndefinedOrNull [8] (0x2e5740324c20 @ 72)
 1141 E> 0x2e5740324c1a @   66 : 2d f7 08 10       GetNamedProperty r3, [8], [16]
         0x2e5740324c1e @   70 : 8a 03             Jump [3] (0x2e5740324c21 @ 73)
         0x2e5740324c20 @   72 : 0e                LdaUndefined 
         0x2e5740324c21 @   73 : 9e 04             JumpIfUndefinedOrNull [4] (0x2e5740324c25 @ 77)
         0x2e5740324c23 @   75 : 8a 04             Jump [4] (0x2e5740324c27 @ 79)
         0x2e5740324c25 @   77 : 13 06             LdaConstant [6]
         0x2e5740324c27 @   79 : 33 f8 09 12       DefineNamedOwnProperty r2, [9], [18]
         0x2e5740324c2b @   83 : 0b f8             Ldar r2
         0x2e5740324c2d @   85 : 36 f9 fa 14       StaInArrayLiteral r1, r0, [20]
         0x2e5740324c31 @   89 : 0b f9             Ldar r1
 1179 S> 0x2e5740324c33 @   91 : a9                Return 
Constant pool (size = 10)
0x2e5740324c39: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 10
           0: 0x2e5740324c99 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2e5740324cb1 <FixedArray[1]>>
           1: 0x2e5740324cc9 <ObjectBoilerplateDescription[9]>
           2: 0x2e5740324d81 <String[5]: #world>
           3: 0x2e5740324d39 <String[5]: #score>
           4: 0x2e5740324ac1 <String[11]: #_engineTeam>
           5: 0x2e5740324d99 <String[10]: #externalId>
           6: 0x2552e2dc17d1 <String[0]: #>
           7: 0x2e5740324d51 <String[6]: #teamId>
           8: 0x2552e2dc58f1 <String[4]: #name>
           9: 0x2e5740324d69 <String[8]: #teamName>
Handler Table (size = 0)
Source Position Table (size = 23)
0x2e5740324db9 <ByteArray[23]>
Boilerplate at 0x2e5740324cc9: 
0x2e5740324cc9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 9
           0: 8
           1: 0x2e5740324d21 <String[4]: #rank>
           2: 1
           3: 0x2e5740324d39 <String[5]: #score>
           4: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           5: 0x2e5740324d51 <String[6]: #teamId>
           6: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           7: 0x2e5740324d69 <String[8]: #teamName>
           8: 0x2552e2dc1501 <Odd Oddball: uninitialized>
0x2e5740324e51 points to: [0x2e5740324ec0]
=== [0x2e5740324ec0] DISASSEMBLY ===
Parameter count 1
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
         0x2e5740324ec0 @    0 : 19 fe f9          Mov <closure>, r1
         0x2e5740324ec3 @    3 : 19 02 f8          Mov <this>, r2
 1201 E> 0x2e5740324ec6 @    6 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x2e5740324eca @   10 : c4                Star0 
         0x2e5740324ecb @   11 : 19 ff f9          Mov <context>, r1
 1223 S> 0x2e5740324ece @   14 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2e5740324ed2 @   18 : 1d                TestUndetectable 
         0x2e5740324ed3 @   19 : 99 11             JumpIfFalse [17] (0x2e5740324ee4 @ 36)
 1256 S> 0x2e5740324ed5 @   21 : 21 01 02          LdaGlobal [1], [2]
         0x2e5740324ed8 @   24 : c2                Star2 
         0x2e5740324ed9 @   25 : 13 02             LdaConstant [2]
         0x2e5740324edb @   27 : c1                Star3 
         0x2e5740324edc @   28 : 0b f8             Ldar r2
 1262 E> 0x2e5740324ede @   30 : 69 f8 f7 01 04    Construct r2, r3-r3, [4]
 1256 E> 0x2e5740324ee3 @   35 : a7                Throw 
 1304 S> 0x2e5740324ee4 @   36 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1321 E> 0x2e5740324ee8 @   40 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2e5740324eea @   42 : c1                Star3 
 1329 E> 0x2e5740324eeb @   43 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x2e5740324eef @   47 : c1                Star3 
 1340 E> 0x2e5740324ef0 @   48 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x2e5740324ef4 @   52 : c0                Star4 
 1354 E> 0x2e5740324ef5 @   53 : 2d 02 06 0a       GetNamedProperty <this>, [6], [10]
         0x2e5740324ef9 @   57 : bf                Star5 
         0x2e5740324efa @   58 : 0b f7             Ldar r3
 1317 E> 0x2e5740324efc @   60 : 69 f7 f6 02 0c    Construct r3, r4-r5, [12]
 1315 E> 0x2e5740324f01 @   65 : 32 02 07 0e       SetNamedProperty <this>, [7], [14]
         0x2e5740324f05 @   69 : 0e                LdaUndefined 
         0x2e5740324f06 @   70 : c1                Star3 
         0x2e5740324f07 @   71 : 19 fa f8          Mov r0, r2
         0x2e5740324f0a @   74 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1364 S> 0x2e5740324f0e @   78 : a9                Return 
         0x2e5740324f0f @   79 : c2                Star2 
         0x2e5740324f10 @   80 : 82 f8 08          CreateCatchContext r2, [8]
         0x2e5740324f13 @   83 : c3                Star1 
         0x2e5740324f14 @   84 : 10                LdaTheHole 
         0x2e5740324f15 @   85 : a6                SetPendingMessage 
         0x2e5740324f16 @   86 : 0b f9             Ldar r1
         0x2e5740324f18 @   88 : 1a f8             PushContext r2
         0x2e5740324f1a @   90 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740324f1c @   92 : c0                Star4 
         0x2e5740324f1d @   93 : 19 fa f7          Mov r0, r3
         0x2e5740324f20 @   96 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x2e5740324f24 @  100 : a9                Return 
Constant pool (size = 9)
0x2e5740324f29: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 9
           0: 0x2e5740324ac1 <String[11]: #_engineTeam>
           1: 0x2552e2dc4de1 <String[5]: #Error>
           2: 0x2e5740324f81 <String[19]: #No team registered!>
           3: 0x2e5740323f79 <String[7]: #world_1>
           4: 0x2e5740324fa9 <String[5]: #World>
           5: 0x1c347b0ccbb9 <String[7]: #options>
           6: 0x1c347b0e8a51 <String[3]: #rng>
           7: 0x2e5740324d81 <String[5]: #world>
           8: 0x2e5740324fc1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  14,  79)  ->    79 (prediction=3, data=1)
Source Position Table (size = 33)
0x2e5740325019 <ByteArray[33]>
0x2e57403250c1 points to: [0x2e5740325130]
=== [0x2e5740325130] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0x2e5740325130 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @117 }
         0x2e5740325134 @    4 : 19 fe f9          Mov <closure>, r1
         0x2e5740325137 @    7 : 19 02 f8          Mov <this>, r2
 1387 E> 0x2e574032513a @   10 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x2e574032513e @   14 : c4                Star0 
         0x2e574032513f @   15 : 19 ff f9          Mov <context>, r1
 1404 S> 0x2e5740325142 @   18 : 0b 03             Ldar a0
 1427 E> 0x2e5740325144 @   20 : 32 02 01 00       SetNamedProperty <this>, [1], [0]
 1452 S> 0x2e5740325148 @   24 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2e574032514c @   28 : c2                Star2 
 1452 E> 0x2e574032514d @   29 : 5d f8 02 04       CallProperty0 r2, <this>, [4]
         0x2e5740325151 @   33 : 97 2a             JumpIfToBooleanFalse [42] (0x2e574032517b @ 75)
 1484 S> 0x2e5740325153 @   35 : 7c 03 06 08       CreateObjectLiteral [3], [6], #8
         0x2e5740325157 @   39 : c2                Star2 
 1526 E> 0x2e5740325158 @   40 : 7c 04 07 29       CreateObjectLiteral [4], [7], #41
         0x2e574032515c @   44 : c1                Star3 
 1542 E> 0x2e574032515d @   45 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x2e5740325161 @   49 : c0                Star4 
 1542 E> 0x2e5740325162 @   50 : 5d f6 02 0a       CallProperty0 r4, <this>, [10]
         0x2e5740325166 @   54 : 33 f7 06 0c       DefineNamedOwnProperty r3, [6], [12]
         0x2e574032516a @   58 : 0b f7             Ldar r3
         0x2e574032516c @   60 : 33 f8 07 0e       DefineNamedOwnProperty r2, [7], [14]
         0x2e5740325170 @   64 : 0b f8             Ldar r2
         0x2e5740325172 @   66 : c1                Star3 
         0x2e5740325173 @   67 : 19 fa f8          Mov r0, r2
         0x2e5740325176 @   70 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1563 S> 0x2e574032517a @   74 : a9                Return 
 1587 S> 0x2e574032517b @   75 : 2d 02 08 10       GetNamedProperty <this>, [8], [16]
         0x2e574032517f @   79 : c2                Star2 
 1587 E> 0x2e5740325180 @   80 : 5d f8 02 12       CallProperty0 r2, <this>, [18]
 1696 S> 0x2e5740325184 @   84 : 2d 02 02 14       GetNamedProperty <this>, [2], [20]
         0x2e5740325188 @   88 : c2                Star2 
 1696 E> 0x2e5740325189 @   89 : 5d f8 02 16       CallProperty0 r2, <this>, [22]
         0x2e574032518d @   93 : 96 2c             JumpIfToBooleanTrue [44] (0x2e57403251b9 @ 137)
 1739 S> 0x2e574032518f @   95 : 2d 02 09 18       GetNamedProperty <this>, [9], [24]
         0x2e5740325193 @   99 : c2                Star2 
 1739 E> 0x2e5740325194 @  100 : 5d f8 02 1a       CallProperty0 r2, <this>, [26]
         0x2e5740325198 @  104 : c1                Star3 
         0x2e5740325199 @  105 : 19 fa f8          Mov r0, r2
         0x2e574032519c @  108 : 68 01 f8 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r2-r3
 1728 E> 0x2e57403251a0 @  112 : af fa fa 02 00    SuspendGenerator r0, r0-r1, [0]
         0x2e57403251a5 @  117 : b0 fa fa 02       ResumeGenerator r0, r0-r1
         0x2e57403251a9 @  121 : c2                Star2 
         0x2e57403251aa @  122 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x2e57403251ae @  126 : c1                Star3 
         0x2e57403251af @  127 : 0c                LdaZero 
         0x2e57403251b0 @  128 : 1c f7             TestReferenceEqual r3
         0x2e57403251b2 @  130 : 98 05             JumpIfTrue [5] (0x2e57403251b7 @ 135)
         0x2e57403251b4 @  132 : 0b f8             Ldar r2
         0x2e57403251b6 @  134 : a8                ReThrow 
         0x2e57403251b7 @  135 : 0b f8             Ldar r2
 1788 S> 0x2e57403251b9 @  137 : 7c 0a 1c 0c       CreateObjectLiteral [10], [28], #12
         0x2e57403251bd @  141 : c2                Star2 
 1858 E> 0x2e57403251be @  142 : 2d 02 0b 1d       GetNamedProperty <this>, [11], [29]
         0x2e57403251c2 @  146 : c1                Star3 
 1858 E> 0x2e57403251c3 @  147 : 5d f7 02 1f       CallProperty0 r3, <this>, [31]
         0x2e57403251c7 @  151 : 33 f8 0c 21       DefineNamedOwnProperty r2, [12], [33]
 1905 E> 0x2e57403251cb @  155 : 2d 02 0d 23       GetNamedProperty <this>, [13], [35]
         0x2e57403251cf @  159 : 33 f8 0e 25       DefineNamedOwnProperty r2, [14], [37]
         0x2e57403251d3 @  163 : 0b f8             Ldar r2
         0x2e57403251d5 @  165 : c1                Star3 
         0x2e57403251d6 @  166 : 19 fa f8          Mov r0, r2
         0x2e57403251d9 @  169 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1957 S> 0x2e57403251dd @  173 : a9                Return 
         0x2e57403251de @  174 : c2                Star2 
         0x2e57403251df @  175 : 82 f8 0f          CreateCatchContext r2, [15]
         0x2e57403251e2 @  178 : c3                Star1 
         0x2e57403251e3 @  179 : 10                LdaTheHole 
         0x2e57403251e4 @  180 : a6                SetPendingMessage 
         0x2e57403251e5 @  181 : 0b f9             Ldar r1
         0x2e57403251e7 @  183 : 1a f8             PushContext r2
         0x2e57403251e9 @  185 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e57403251eb @  187 : c0                Star4 
         0x2e57403251ec @  188 : 19 fa f7          Mov r0, r3
         0x2e57403251ef @  191 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x2e57403251f3 @  195 : a9                Return 
Constant pool (size = 16)
0x2e57403251f9: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 16
           0: 117
           1: 0x2e57403246d9 <String[17]: #currentTickNumber>
           2: 0x2e5740324459 <String[14]: #isGameComplete>
           3: 0x2e5740325289 <ObjectBoilerplateDescription[5]>
           4: 0x2e5740325301 <ObjectBoilerplateDescription[3]>
           5: 0x2e57403243b1 <String[14]: #getGameResults>
           6: 0x2e5740325329 <String[7]: #results>
           7: 0x2e57403252e1 <String[11]: #gameResults>
           8: 0x2e5740324479 <String[10]: #updateGame>
           9: 0x2e5740324409 <String[27]: #fetchAndApplyPlayerCommands>
          10: 0x2e5740325341 <ObjectBoilerplateDescription[9]>
          11: 0x2e57403244d9 <String[18]: #serializeForViewer>
          12: 0x2e5740325399 <String[9]: #gameState>
          13: 0x2e57403246b9 <String[14]: #lastTickErrors>
          14: 0x2552e2dc4f11 <String[6]: #errors>
          15: 0x2e57403253e9 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 174)  ->   174 (prediction=3, data=1)
Source Position Table (size = 55)
0x2e5740325441 <ByteArray[55]>
Boilerplate at 0x2e5740325289: 
0x2e5740325289: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 5
           0: 8
           1: 0x2e57403252c1 <String[12]: #gameComplete>
           2: 0x2552e2dc1729 <true>
           3: 0x2e57403252e1 <String[11]: #gameResults>
           4: 0x2552e2dc1501 <Odd Oddball: uninitialized>
Boilerplate at 0x2e5740325301: 
0x2e5740325301: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 3
           0: 8
           1: 0x2e5740325329 <String[7]: #results>
           2: 0x2552e2dc1501 <Odd Oddball: uninitialized>
Boilerplate at 0x2e5740325341: 
0x2e5740325341: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 9
           0: 8
           1: 0x2e57403252c1 <String[12]: #gameComplete>
           2: 0x2552e2dc1789 <false>
           3: 0x2e5740325399 <String[9]: #gameState>
           4: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           5: 0x2552e2dc4f11 <String[6]: #errors>
           6: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           7: 0x2e57403253b9 <String[8]: #commands>
           8: 0x2e57403253d1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2552e2dc1329 <FixedArray[0]>>
0x2e5740325509 points to: [0x2e5740325578]
=== [0x2e5740325578] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x2e5740325578 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @57 }
 2001 E> 0x2e574032557c @    4 : 83 01 01          CreateFunctionContext [1], [1]
         0x2e574032557f @    7 : 1a f8             PushContext r2
         0x2e5740325581 @    9 : 0b 02             Ldar <this>
         0x2e5740325583 @   11 : 25 02             StaCurrentContextSlot [2]
         0x2e5740325585 @   13 : 19 fe f7          Mov <closure>, r3
         0x2e5740325588 @   16 : 19 02 f6          Mov <this>, r4
         0x2e574032558b @   19 : 68 02 f7 02       InvokeIntrinsic [_AsyncFunctionEnter], r3-r4
         0x2e574032558f @   23 : c4                Star0 
         0x2e5740325590 @   24 : 19 ff f7          Mov <context>, r3
 2042 S> 0x2e5740325593 @   27 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740325595 @   29 : bf                Star5 
 2053 E> 0x2e5740325596 @   30 : 2d f5 02 00       GetNamedProperty r5, [2], [0]
         0x2e574032559a @   34 : bf                Star5 
 2060 E> 0x2e574032559b @   35 : 2d f5 03 02       GetNamedProperty r5, [3], [2]
         0x2e574032559f @   39 : c0                Star4 
 2060 E> 0x2e57403255a0 @   40 : 5d f6 f5 04       CallProperty0 r4, r5, [4]
         0x2e57403255a4 @   44 : bf                Star5 
         0x2e57403255a5 @   45 : 19 fa f6          Mov r0, r4
         0x2e57403255a8 @   48 : 68 01 f6 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r4-r5
 2042 E> 0x2e57403255ac @   52 : af fa fa 04 00    SuspendGenerator r0, r0-r3, [0]
         0x2e57403255b1 @   57 : b0 fa fa 04       ResumeGenerator r0, r0-r3
         0x2e57403255b5 @   61 : c0                Star4 
         0x2e57403255b6 @   62 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x2e57403255ba @   66 : bf                Star5 
         0x2e57403255bb @   67 : 0c                LdaZero 
         0x2e57403255bc @   68 : 1c f5             TestReferenceEqual r5
         0x2e57403255be @   70 : 98 05             JumpIfTrue [5] (0x2e57403255c3 @ 75)
         0x2e57403255c0 @   72 : 0b f6             Ldar r4
         0x2e57403255c2 @   74 : a8                ReThrow 
         0x2e57403255c3 @   75 : 19 f6 f9          Mov r4, r1
 2092 S> 0x2e57403255c6 @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e57403255c8 @   80 : c0                Star4 
         0x2e57403255c9 @   81 : 7b 06             CreateEmptyArrayLiteral [6]
 2112 E> 0x2e57403255cb @   83 : 32 f6 04 07       SetNamedProperty r4, [4], [7]
 2146 S> 0x2e57403255cf @   87 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x2e57403255d3 @   91 : c0                Star4 
         0x2e57403255d4 @   92 : 80 06 00 02       CreateClosure [6], [0], #2
         0x2e57403255d8 @   96 : be                Star6 
 2146 E> 0x2e57403255d9 @   97 : 5e f6 f9 f4 0b    CallProperty1 r4, r1, r6, [11]
         0x2e57403255de @  102 : 0e                LdaUndefined 
         0x2e57403255df @  103 : bf                Star5 
         0x2e57403255e0 @  104 : 19 fa f6          Mov r0, r4
         0x2e57403255e3 @  107 : 68 04 f6 02       InvokeIntrinsic [_AsyncFunctionResolve], r4-r5
 2911 S> 0x2e57403255e7 @  111 : a9                Return 
         0x2e57403255e8 @  112 : c0                Star4 
         0x2e57403255e9 @  113 : 82 f6 07          CreateCatchContext r4, [7]
         0x2e57403255ec @  116 : c1                Star3 
         0x2e57403255ed @  117 : 10                LdaTheHole 
         0x2e57403255ee @  118 : a6                SetPendingMessage 
         0x2e57403255ef @  119 : 0b f7             Ldar r3
         0x2e57403255f1 @  121 : 1a f6             PushContext r4
         0x2e57403255f3 @  123 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e57403255f5 @  125 : be                Star6 
         0x2e57403255f6 @  126 : 19 fa f5          Mov r0, r5
         0x2e57403255f9 @  129 : 68 03 f5 02       InvokeIntrinsic [_AsyncFunctionReject], r5-r6
         0x2e57403255fd @  133 : a9                Return 
Constant pool (size = 8)
0x2e5740325601: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 8
           0: 57
           1: 0x2e5740325651 <ScopeInfo FUNCTION_SCOPE>
           2: 0x2e5740324701 <String[6]: #engine>
           3: 0x2e57403256b1 <String[20]: #getCommandsFromTeams>
           4: 0x2e57403246b9 <String[14]: #lastTickErrors>
           5: 0x1c347b0ca021 <String[7]: #forEach>
           6: 0x2e57403256f1 <SharedFunctionInfo>
           7: 0x2e5740325b29 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  27, 112)  ->   112 (prediction=3, data=3)
Source Position Table (size = 29)
0x2e5740325b81 <ByteArray[29]>
0x2e57403256f1 points to: [0x2e5740325760]
=== [0x2e5740325760] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2219 S> 0x2e5740325760 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2e5740325764 @    4 : c4                Star0 
 2240 S> 0x2e5740325765 @    5 : 97 b8             JumpIfToBooleanFalse [184] (0x2e574032581d @ 189)
         0x2e5740325767 @    7 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740325769 @    9 : c3                Star1 
 2260 E> 0x2e574032576a @   10 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2e574032576e @   14 : 97 af             JumpIfToBooleanFalse [175] (0x2e574032581d @ 189)
         0x2e5740325770 @   16 : 19 ff f9          Mov <context>, r1
 2329 S> 0x2e5740325773 @   19 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x2e5740325777 @   23 : 1d                TestUndetectable 
         0x2e5740325778 @   24 : 99 0e             JumpIfFalse [14] (0x2e5740325786 @ 38)
 2372 S> 0x2e574032577a @   26 : 21 03 06          LdaGlobal [3], [6]
         0x2e574032577d @   29 : c2                Star2 
         0x2e574032577e @   30 : 13 04             LdaConstant [4]
         0x2e5740325780 @   32 : c1                Star3 
 2378 E> 0x2e5740325781 @   33 : 62 f8 f7 08       CallUndefinedReceiver1 r2, r3, [8]
 2372 E> 0x2e5740325785 @   37 : a7                Throw 
 2466 S> 0x2e5740325786 @   38 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740325788 @   40 : c1                Star3 
 2471 E> 0x2e5740325789 @   41 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x2e574032578d @   45 : c2                Star2 
         0x2e574032578e @   46 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740325790 @   48 : c0                Star4 
 2489 E> 0x2e5740325791 @   49 : 2d f6 01 0c       GetNamedProperty r4, [1], [12]
         0x2e5740325795 @   53 : c0                Star4 
 2471 E> 0x2e5740325796 @   54 : 5f f8 f7 f6 fa 0e CallProperty2 r2, r3, r4, r0, [14]
         0x2e574032579c @   60 : 8a 81             Jump [129] (0x2e574032581d @ 189)
         0x2e574032579e @   62 : c2                Star2 
         0x2e574032579f @   63 : 82 f8 06          CreateCatchContext r2, [6]
         0x2e57403257a2 @   66 : c3                Star1 
         0x2e57403257a3 @   67 : 10                LdaTheHole 
         0x2e57403257a4 @   68 : a6                SetPendingMessage 
         0x2e57403257a5 @   69 : 0b f9             Ldar r1
         0x2e57403257a7 @   71 : 1a f8             PushContext r2
 2582 S> 0x2e57403257a9 @   73 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x2e57403257ad @   77 : aa 07             ThrowReferenceErrorIfHole [7]
         0x2e57403257af @   79 : c0                Star4 
 2591 E> 0x2e57403257b0 @   80 : 2d f6 08 10       GetNamedProperty r4, [8], [16]
         0x2e57403257b4 @   84 : c0                Star4 
 2598 E> 0x2e57403257b5 @   85 : 2d f6 09 12       GetNamedProperty r4, [9], [18]
         0x2e57403257b9 @   89 : c1                Star3 
         0x2e57403257ba @   90 : 13 0a             LdaConstant [10]
         0x2e57403257bc @   92 : bf                Star5 
 2633 E> 0x2e57403257bd @   93 : 21 0b 15          LdaGlobal [11], [21]
         0x2e57403257c0 @   96 : bd                Star7 
 2638 E> 0x2e57403257c1 @   97 : 2d f3 0c 17       GetNamedProperty r7, [12], [23]
         0x2e57403257c5 @  101 : be                Star6 
 2638 E> 0x2e57403257c6 @  102 : 5e f4 f3 fa 19    CallProperty1 r6, r7, r0, [25]
         0x2e57403257cb @  107 : 77                ToString 
         0x2e57403257cc @  108 : 39 f5 14          Add r5, [20]
         0x2e57403257cf @  111 : bf                Star5 
         0x2e57403257d0 @  112 : 13 0d             LdaConstant [13]
         0x2e57403257d2 @  114 : 39 f5 14          Add r5, [20]
         0x2e57403257d5 @  117 : bf                Star5 
         0x2e57403257d6 @  118 : 17 02             LdaImmutableCurrentContextSlot [2]
 2663 E> 0x2e57403257d8 @  120 : 77                ToString 
         0x2e57403257d9 @  121 : 39 f5 14          Add r5, [20]
         0x2e57403257dc @  124 : bf                Star5 
 2598 E> 0x2e57403257dd @  125 : 5e f7 f6 f5 1b    CallProperty1 r3, r4, r5, [27]
 2693 S> 0x2e57403257e2 @  130 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e57403257e4 @  132 : c1                Star3 
 2714 E> 0x2e57403257e5 @  133 : 21 03 06          LdaGlobal [3], [6]
 2703 E> 0x2e57403257e8 @  136 : 71 f7 1d          TestInstanceOf r3, [29]
         0x2e57403257eb @  139 : 99 30             JumpIfFalse [48] (0x2e574032581b @ 187)
 2747 S> 0x2e57403257ed @  141 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2e57403257f1 @  145 : c0                Star4 
 2752 E> 0x2e57403257f2 @  146 : 2d f6 01 1e       GetNamedProperty r4, [1], [30]
         0x2e57403257f6 @  150 : c0                Star4 
 2764 E> 0x2e57403257f7 @  151 : 2d f6 0e 20       GetNamedProperty r4, [14], [32]
         0x2e57403257fb @  155 : c1                Star3 
         0x2e57403257fc @  156 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e57403257fe @  158 : bf                Star5 
 2764 E> 0x2e57403257ff @  159 : 5e f7 f6 f5 22    CallProperty1 r3, r4, r5, [34]
 2808 S> 0x2e5740325804 @  164 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2e5740325808 @  168 : c0                Star4 
 2813 E> 0x2e5740325809 @  169 : 2d f6 0f 24       GetNamedProperty r4, [15], [36]
         0x2e574032580d @  173 : c0                Star4 
 2828 E> 0x2e574032580e @  174 : 2d f6 10 26       GetNamedProperty r4, [16], [38]
         0x2e5740325812 @  178 : c1                Star3 
         0x2e5740325813 @  179 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740325815 @  181 : bf                Star5 
 2828 E> 0x2e5740325816 @  182 : 5e f7 f6 f5 28    CallProperty1 r3, r4, r5, [40]
         0x2e574032581b @  187 : 1b f8             PopContext r2
         0x2e574032581d @  189 : 0e                LdaUndefined 
 2903 S> 0x2e574032581e @  190 : a9                Return 
Constant pool (size = 17)
0x2e5740325821: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 17
           0: 0x2e57403258b9 <String[7]: #command>
           1: 0x2e5740324ac1 <String[11]: #_engineTeam>
           2: 0x2e57403258d1 <String[7]: #actions>
           3: 0x2552e2dc4de1 <String[5]: #Error>
           4: 0x2e57403258e9 <String[35]: #Command invalid: 'actions' missing.>
           5: 0x2e5740324439 <String[12]: #applyActions>
           6: 0x2e5740325921 <ScopeInfo CATCH_SCOPE>
           7: 0x2e5740323f49 <String[8]: #engine_1>
           8: 0x1c347b0c6461 <String[6]: #logger>
           9: 0x1c347b0c6309 <String[5]: #error>
          10: 0x2e5740325971 <String[26]: #Error processing command '>
          11: 0x1c347b0dc529 <String[4]: #JSON>
          12: 0x1c347b0cee51 <String[9]: #stringify>
          13: 0x2e57403259d9 <String[4]: #' : >
          14: 0x2e57403259f1 <String[11]: #reportError>
          15: 0x2e57403246b9 <String[14]: #lastTickErrors>
          16: 0x1c347b0c9551 <String[4]: #push>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  19,  60)  ->    62 (prediction=1, data=1)
Source Position Table (size = 76)
0x2e5740325a49 <ByteArray[76]>
0x2e5740325bd1 points to: [0x2e5740325c40]
=== [0x2e5740325c40] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2929 E> 0x2e5740325c40 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x2e5740325c43 @    3 : 1a fa             PushContext r0
         0x2e5740325c45 @    5 : 0b 02             Ldar <this>
         0x2e5740325c47 @    7 : 25 02             StaCurrentContextSlot [2]
         0x2e5740325c49 @    9 : 0b 03             Ldar a0
         0x2e5740325c4b @   11 : 25 03             StaCurrentContextSlot [3]
 2963 S> 0x2e5740325c4d @   13 : 2d 04 01 00       GetNamedProperty a1, [1], [0]
         0x2e5740325c51 @   17 : c2                Star2 
 2971 E> 0x2e5740325c52 @   18 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2e5740325c56 @   22 : c3                Star1 
         0x2e5740325c57 @   23 : 80 03 00 02       CreateClosure [3], [0], #2
         0x2e5740325c5b @   27 : c1                Star3 
 2971 E> 0x2e5740325c5c @   28 : 5e f9 f8 f7 04    CallProperty1 r1, r2, r3, [4]
         0x2e5740325c61 @   33 : 0e                LdaUndefined 
 3419 S> 0x2e5740325c62 @   34 : a9                Return 
Constant pool (size = 4)
0x2e5740325c69: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 4
           0: 0x2e5740325c99 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2e57403258d1 <String[7]: #actions>
           2: 0x1c347b0ca021 <String[7]: #forEach>
           3: 0x2e5740325d21 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 15)
0x2e5740326069 <ByteArray[15]>
0x2e5740325d21 points to: [0x2e5740325d90]
=== [0x2e5740325d90] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x2e5740325d90 @    0 : 19 ff fa          Mov <context>, r0
 3027 S> 0x2e5740325d93 @    3 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740325d95 @    5 : c2                Star2 
 3032 E> 0x2e5740325d96 @    6 : 2d f8 00 00       GetNamedProperty r2, [0], [0]
         0x2e5740325d9a @   10 : c2                Star2 
         0x2e5740325d9b @   11 : 9e 0e             JumpIfUndefinedOrNull [14] (0x2e5740325da9 @ 25)
 3037 E> 0x2e5740325d9d @   13 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x2e5740325da1 @   17 : c3                Star1 
 3039 E> 0x2e5740325da2 @   18 : 5e f9 f8 03 04    CallProperty1 r1, r2, a0, [4]
         0x2e5740325da7 @   23 : 8a 03             Jump [3] (0x2e5740325daa @ 26)
         0x2e5740325da9 @   25 : 0e                LdaUndefined 
         0x2e5740325daa @   26 : 8a 8c             Jump [140] (0x2e5740325e36 @ 166)
         0x2e5740325dac @   28 : c3                Star1 
         0x2e5740325dad @   29 : 82 f9 02          CreateCatchContext r1, [2]
         0x2e5740325db0 @   32 : c4                Star0 
         0x2e5740325db1 @   33 : 10                LdaTheHole 
         0x2e5740325db2 @   34 : a6                SetPendingMessage 
         0x2e5740325db3 @   35 : 0b fa             Ldar r0
         0x2e5740325db5 @   37 : 1a f9             PushContext r1
 3118 S> 0x2e5740325db7 @   39 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x2e5740325dbb @   43 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2e5740325dbd @   45 : c1                Star3 
 3127 E> 0x2e5740325dbe @   46 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x2e5740325dc2 @   50 : c1                Star3 
 3134 E> 0x2e5740325dc3 @   51 : 2d f7 05 08       GetNamedProperty r3, [5], [8]
         0x2e5740325dc7 @   55 : c2                Star2 
         0x2e5740325dc8 @   56 : 13 06             LdaConstant [6]
         0x2e5740325dca @   58 : c0                Star4 
 3166 E> 0x2e5740325dcb @   59 : 21 07 0b          LdaGlobal [7], [11]
         0x2e5740325dce @   62 : be                Star6 
 3171 E> 0x2e5740325dcf @   63 : 2d f4 08 0d       GetNamedProperty r6, [8], [13]
         0x2e5740325dd3 @   67 : bf                Star5 
 3171 E> 0x2e5740325dd4 @   68 : 5e f5 f4 03 0f    CallProperty1 r5, r6, a0, [15]
         0x2e5740325dd9 @   73 : 77                ToString 
         0x2e5740325dda @   74 : 39 f6 0a          Add r4, [10]
         0x2e5740325ddd @   77 : c0                Star4 
         0x2e5740325dde @   78 : 13 09             LdaConstant [9]
         0x2e5740325de0 @   80 : 39 f6 0a          Add r4, [10]
         0x2e5740325de3 @   83 : c0                Star4 
 3134 E> 0x2e5740325de4 @   84 : 5e f8 f7 f6 11    CallProperty1 r2, r3, r4, [17]
 3210 S> 0x2e5740325de9 @   89 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740325deb @   91 : c2                Star2 
 3231 E> 0x2e5740325dec @   92 : 21 0a 13          LdaGlobal [10], [19]
 3220 E> 0x2e5740325def @   95 : 71 f8 15          TestInstanceOf r2, [21]
         0x2e5740325df2 @   98 : 99 42             JumpIfFalse [66] (0x2e5740325e34 @ 164)
 3260 S> 0x2e5740325df4 @  100 : 15 f9 03 00       LdaImmutableContextSlot r1, [3], [0]
         0x2e5740325df8 @  104 : c1                Star3 
 3265 E> 0x2e5740325df9 @  105 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x2e5740325dfd @  109 : c2                Star2 
         0x2e5740325dfe @  110 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740325e00 @  112 : c0                Star4 
 3265 E> 0x2e5740325e01 @  113 : 5e f8 f7 f6 18    CallProperty1 r2, r3, r4, [24]
 3305 S> 0x2e5740325e06 @  118 : 15 f9 02 00       LdaImmutableContextSlot r1, [2], [0]
         0x2e5740325e0a @  122 : c1                Star3 
 3310 E> 0x2e5740325e0b @  123 : 2d f7 0c 1a       GetNamedProperty r3, [12], [26]
         0x2e5740325e0f @  127 : c1                Star3 
 3325 E> 0x2e5740325e10 @  128 : 2d f7 0d 1c       GetNamedProperty r3, [13], [28]
         0x2e5740325e14 @  132 : c2                Star2 
         0x2e5740325e15 @  133 : 15 ff 03 03       LdaImmutableContextSlot <context>, [3], [3]
 3334 E> 0x2e5740325e19 @  137 : aa 0e             ThrowReferenceErrorIfHole [14]
         0x2e5740325e1b @  139 : c0                Star4 
 3342 E> 0x2e5740325e1c @  140 : 2d f6 0f 1e       GetNamedProperty r4, [15], [30]
         0x2e5740325e20 @  144 : c0                Star4 
         0x2e5740325e21 @  145 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2e5740325e23 @  147 : be                Star6 
         0x2e5740325e24 @  148 : 0b f6             Ldar r4
         0x2e5740325e26 @  150 : 19 03 f5          Mov a0, r5
 3330 E> 0x2e5740325e29 @  153 : 69 f6 f5 02 20    Construct r4, r5-r6, [32]
         0x2e5740325e2e @  158 : c0                Star4 
 3325 E> 0x2e5740325e2f @  159 : 5e f8 f7 f6 22    CallProperty1 r2, r3, r4, [34]
         0x2e5740325e34 @  164 : 1b f9             PopContext r1
         0x2e5740325e36 @  166 : 0e                LdaUndefined 
 3411 S> 0x2e5740325e37 @  167 : a9                Return 
Constant pool (size = 16)
0x2e5740325e39: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 16
           0: 0x2e5740324d81 <String[5]: #world>
           1: 0x2e5740325ec9 <String[11]: #applyAction>
           2: 0x2e5740325ee9 <ScopeInfo CATCH_SCOPE>
           3: 0x2e5740323f49 <String[8]: #engine_1>
           4: 0x1c347b0c6461 <String[6]: #logger>
           5: 0x1c347b0c6309 <String[5]: #error>
           6: 0x2e5740325f21 <String[23]: #Error applying action '>
           7: 0x1c347b0dc529 <String[4]: #JSON>
           8: 0x1c347b0cee51 <String[9]: #stringify>
           9: 0x1c347b0f4c49 <String[1]: #'>
          10: 0x2552e2dc4de1 <String[5]: #Error>
          11: 0x2e57403259f1 <String[11]: #reportError>
          12: 0x2e57403246b9 <String[14]: #lastTickErrors>
          13: 0x1c347b0c9551 <String[4]: #push>
          14: 0x2e5740323f61 <String[7]: #error_1>
          15: 0x2e5740325f61 <String[11]: #ActionError>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (   3,  26)  ->    28 (prediction=1, data=0)
Source Position Table (size = 61)
0x2e5740325fa1 <ByteArray[61]>
0x2e57403260a1 points to: [0x2e5740326110]
=== [0x2e5740326110] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3465 S> 0x2e5740326110 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2e5740326114 @    4 : c4                Star0 
         0x2e5740326115 @    5 : 9e 08             JumpIfUndefinedOrNull [8] (0x2e574032611d @ 13)
 3470 E> 0x2e5740326117 @    7 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2e574032611b @   11 : 8a 03             Jump [3] (0x2e574032611e @ 14)
         0x2e574032611d @   13 : 0e                LdaUndefined 
         0x2e574032611e @   14 : 97 10             JumpIfToBooleanFalse [16] (0x2e574032612e @ 30)
 3493 E> 0x2e5740326120 @   16 : 2d 02 00 04       GetNamedProperty <this>, [0], [4]
         0x2e5740326124 @   20 : c4                Star0 
 3499 E> 0x2e5740326125 @   21 : 2d fa 01 06       GetNamedProperty r0, [1], [6]
         0x2e5740326129 @   25 : c4                Star0 
         0x2e574032612a @   26 : 0c                LdaZero 
 3512 E> 0x2e574032612b @   27 : 6f fa 08          TestLessThanOrEqual r0, [8]
         0x2e574032612e @   30 : 96 13             JumpIfToBooleanTrue [19] (0x2e5740326141 @ 49)
 3538 E> 0x2e5740326130 @   32 : 2d 02 02 09       GetNamedProperty <this>, [2], [9]
         0x2e5740326134 @   36 : c4                Star0 
 3564 E> 0x2e5740326135 @   37 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x2e5740326139 @   41 : c3                Star1 
 3572 E> 0x2e574032613a @   42 : 2d f9 04 0d       GetNamedProperty r1, [4], [13]
 3556 E> 0x2e574032613e @   46 : 70 fa 0f          TestGreaterThanOrEqual r0, [15]
 3583 S> 0x2e5740326141 @   49 : a9                Return 
Constant pool (size = 5)
0x2e5740326149: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 5
           0: 0x2e5740324d81 <String[5]: #world>
           1: 0x2e5740326181 <String[12]: #healthPoints>
           2: 0x2e57403246d9 <String[17]: #currentTickNumber>
           3: 0x1c347b0ccbb9 <String[7]: #options>
           4: 0x2e57403261a1 <String[10]: #TICK_COUNT>
Handler Table (size = 0)
Source Position Table (size = 23)
0x2e57403261c1 <ByteArray[23]>
0x2e5740326259 points to: [0x2e57403262c8]
=== [0x2e57403262c8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3622 S> 0x2e57403262c8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2e57403262cc @    4 : c3                Star1 
         0x2e57403262cd @    5 : 9e 0d             JumpIfUndefinedOrNull [13] (0x2e57403262da @ 18)
 3627 E> 0x2e57403262cf @    7 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2e57403262d3 @   11 : c4                Star0 
 3629 E> 0x2e57403262d4 @   12 : 5d fa f9 04       CallProperty0 r0, r1, [4]
         0x2e57403262d8 @   16 : 8a 03             Jump [3] (0x2e57403262db @ 19)
         0x2e57403262da @   18 : 0e                LdaUndefined 
         0x2e57403262db @   19 : 0e                LdaUndefined 
 3643 S> 0x2e57403262dc @   20 : a9                Return 
Constant pool (size = 2)
0x2e57403262e1: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 2
           0: 0x2e5740324d81 <String[5]: #world>
           1: 0x1c347b0c3f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2e5740326319 <ByteArray[11]>
0x2e57403263a1 points to: [0x2e5740326410]
=== [0x2e5740326410] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
         0x2e5740326410 @    0 : 0e                LdaUndefined 
 3690 S> 0x2e5740326411 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 5)
0x2e5740326419 <ByteArray[5]>
0x2e5740326481 points to: [0x2e57403264f0]
=== [0x2e57403264f0] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3760 S> 0x2e57403264f0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2e57403264f4 @    4 : c3                Star1 
 3760 E> 0x2e57403264f5 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2e57403264f9 @    9 : c3                Star1 
         0x2e57403264fa @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2e57403264fe @   14 : c4                Star0 
 3799 E> 0x2e57403264ff @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2e5740326503 @   19 : c0                Star4 
 3805 E> 0x2e5740326504 @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x2e5740326508 @   24 : c1                Star3 
 3805 E> 0x2e5740326509 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x2e574032650d @   29 : c2                Star2 
         0x2e574032650e @   30 : 19 fa f9          Mov r0, r1
         0x2e5740326511 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x2e5740326515 @   37 : 0b f9             Ldar r1
 3837 S> 0x2e5740326517 @   39 : a9                Return 
Constant pool (size = 3)
0x2e5740326519: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 3
           0: 0x2e5740324529 <String[15]: #serializeCommon>
           1: 0x2e5740324d81 <String[5]: #world>
           2: 0x2e5740326541 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 18)
0x2e5740326569 <ByteArray[18]>
0x2e57403265f9 points to: [0x2e5740326668]
=== [0x2e5740326668] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3908 S> 0x2e5740326668 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2e574032666c @    4 : c3                Star1 
 3908 E> 0x2e574032666d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2e5740326671 @    9 : c3                Star1 
         0x2e5740326672 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2e5740326676 @   14 : c4                Star0 
 3947 E> 0x2e5740326677 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2e574032667b @   19 : c0                Star4 
 3953 E> 0x2e574032667c @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x2e5740326680 @   24 : c1                Star3 
 3953 E> 0x2e5740326681 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x2e5740326685 @   29 : c2                Star2 
         0x2e5740326686 @   30 : 19 fa f9          Mov r0, r1
         0x2e5740326689 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x2e574032668d @   37 : 0b f9             Ldar r1
 3985 S> 0x2e574032668f @   39 : a9                Return 
Constant pool (size = 3)
0x2e5740326691: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 3
           0: 0x2e5740324529 <String[15]: #serializeCommon>
           1: 0x2e5740324d81 <String[5]: #world>
           2: 0x2e57403244d9 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 18)
0x2e57403266b9 <ByteArray[18]>
0x2e5740326749 points to: [0x2e57403267b8]
=== [0x2e57403267b8] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 4027 S> 0x2e57403267b8 @    0 : 7c 00 00 08       CreateObjectLiteral [0], [0], #8
         0x2e57403267bc @    4 : c4                Star0 
 4057 E> 0x2e57403267bd @    5 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x2e57403267c1 @    9 : c3                Star1 
 4087 E> 0x2e57403267c2 @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2e57403267c6 @   14 : c2                Star2 
 4095 E> 0x2e57403267c7 @   15 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x2e57403267cb @   19 : 33 f9 04 06       DefineNamedOwnProperty r1, [4], [6]
 4136 E> 0x2e57403267cf @   23 : 2d 02 02 08       GetNamedProperty <this>, [2], [8]
         0x2e57403267d3 @   27 : c2                Star2 
 4144 E> 0x2e57403267d4 @   28 : 2d f8 05 0a       GetNamedProperty r2, [5], [10]
         0x2e57403267d8 @   32 : 33 f9 06 0c       DefineNamedOwnProperty r1, [6], [12]
         0x2e57403267dc @   36 : 0b f9             Ldar r1
         0x2e57403267de @   38 : 33 fa 07 0e       DefineNamedOwnProperty r0, [7], [14]
 4191 E> 0x2e57403267e2 @   42 : 7c 08 10 29       CreateObjectLiteral [8], [16], #41
         0x2e57403267e6 @   46 : c3                Star1 
 4221 E> 0x2e57403267e7 @   47 : 2d 02 02 11       GetNamedProperty <this>, [2], [17]
         0x2e57403267eb @   51 : c2                Star2 
 4229 E> 0x2e57403267ec @   52 : 2d f8 09 13       GetNamedProperty r2, [9], [19]
         0x2e57403267f0 @   56 : c2                Star2 
 4246 E> 0x2e57403267f1 @   57 : 2d f8 0a 15       GetNamedProperty r2, [10], [21]
         0x2e57403267f5 @   61 : 33 f9 0a 17       DefineNamedOwnProperty r1, [10], [23]
 4282 E> 0x2e57403267f9 @   65 : 2d 02 02 19       GetNamedProperty <this>, [2], [25]
         0x2e57403267fd @   69 : c2                Star2 
 4290 E> 0x2e57403267fe @   70 : 2d f8 09 1b       GetNamedProperty r2, [9], [27]
         0x2e5740326802 @   74 : c2                Star2 
 4307 E> 0x2e5740326803 @   75 : 2d f8 0b 1d       GetNamedProperty r2, [11], [29]
         0x2e5740326807 @   79 : 33 f9 0b 1f       DefineNamedOwnProperty r1, [11], [31]
         0x2e574032680b @   83 : 0b f9             Ldar r1
         0x2e574032680d @   85 : 33 fa 0c 21       DefineNamedOwnProperty r0, [12], [33]
 4368 E> 0x2e5740326811 @   89 : 2d 02 02 23       GetNamedProperty <this>, [2], [35]
         0x2e5740326815 @   93 : c3                Star1 
 4376 E> 0x2e5740326816 @   94 : 2d f9 0d 25       GetNamedProperty r1, [13], [37]
         0x2e574032681a @   98 : 33 fa 0e 27       DefineNamedOwnProperty r0, [14], [39]
         0x2e574032681e @  102 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 4428 E> 0x2e5740326822 @  106 : aa 0f             ThrowReferenceErrorIfHole [15]
         0x2e5740326824 @  108 : c2                Star2 
 4443 E> 0x2e5740326825 @  109 : 2d f8 10 29       GetNamedProperty r2, [16], [41]
         0x2e5740326829 @  113 : c3                Star1 
 4464 E> 0x2e574032682a @  114 : 61 f9 2b          CallUndefinedReceiver0 r1, [43]
         0x2e574032682d @  117 : 33 fa 11 2d       DefineNamedOwnProperty r0, [17], [45]
         0x2e5740326831 @  121 : 0b fa             Ldar r0
 4477 S> 0x2e5740326833 @  123 : a9                Return 
Constant pool (size = 18)
0x2e5740326839: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 18
           0: 0x2e57403268d9 <ObjectBoilerplateDescription[9]>
           1: 0x2e5740326991 <ObjectBoilerplateDescription[5]>
           2: 0x1c347b0ccbb9 <String[7]: #options>
           3: 0x2e57403269e1 <String[12]: #BULLET_SPEED>
           4: 0x2e57403269c9 <String[5]: #speed>
           5: 0x2e5740326a01 <String[11]: #BULLET_SIZE>
           6: 0x2552e2dca111 <String[4]: #size>
           7: 0x2e5740326931 <String[7]: #rockets>
           8: 0x2e5740326a21 <ObjectBoilerplateDescription[5]>
           9: 0x2e5740326a89 <String[16]: #WORLD_DIMENSIONS>
          10: 0x2e5740326a59 <String[5]: #width>
          11: 0x2e5740326a71 <String[6]: #height>
          12: 0x2e5740324d81 <String[5]: #world>
          13: 0x2e5740326aa9 <String[21]: #CANNON_COOLDOWN_TICKS>
          14: 0x2e5740326949 <String[19]: #cannonCooldownTicks>
          15: 0x2e5740323fa9 <String[14]: #meteor_infos_1>
          16: 0x2e5740326ad1 <String[20]: #serializeMeteorInfos>
          17: 0x2e5740326971 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 46)
0x2e5740326af9 <ByteArray[46]>
Boilerplate at 0x2e57403268d9: 
0x2e57403268d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 9
           0: 8
           1: 0x2e5740326931 <String[7]: #rockets>
           2: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           3: 0x2e5740324d81 <String[5]: #world>
           4: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           5: 0x2e5740326949 <String[19]: #cannonCooldownTicks>
           6: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           7: 0x2e5740326971 <String[11]: #meteorInfos>
           8: 0x2552e2dc1501 <Odd Oddball: uninitialized>
Boilerplate at 0x2e5740326991: 
0x2e5740326991: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 5
           0: 8
           1: 0x2e57403269c9 <String[5]: #speed>
           2: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           3: 0x2552e2dca111 <String[4]: #size>
           4: 0x2552e2dc1501 <Odd Oddball: uninitialized>
Boilerplate at 0x2e5740326a21: 
0x2e5740326a21: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 5
           0: 8
           1: 0x2e5740326a59 <String[5]: #width>
           2: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           3: 0x2e5740326a71 <String[6]: #height>
           4: 0x2552e2dc1501 <Odd Oddball: uninitialized>
0x2e5740326bb9 points to: [0x2e5740326c28]
=== [0x2e5740326c28] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4516 S> 0x2e5740326c28 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x2e5740326c2c @    4 : c4                Star0 
 4553 E> 0x2e5740326c2d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x2e5740326c31 @    9 : c3                Star1 
 4553 E> 0x2e5740326c32 @   10 : 5d f9 02 03       CallProperty0 r1, <this>, [3]
         0x2e5740326c36 @   14 : 33 fa 02 05       DefineNamedOwnProperty r0, [2], [5]
 4611 E> 0x2e5740326c3a @   18 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0x2e5740326c3e @   22 : 33 fa 03 09       DefineNamedOwnProperty r0, [3], [9]
 4663 E> 0x2e5740326c42 @   26 : 2d 02 04 0b       GetNamedProperty <this>, [4], [11]
         0x2e5740326c46 @   30 : c2                Star2 
 4678 E> 0x2e5740326c47 @   31 : 2d f8 05 0d       GetNamedProperty r2, [5], [13]
         0x2e5740326c4b @   35 : c3                Star1 
         0x2e5740326c4c @   36 : 80 06 00 02       CreateClosure [6], [0], #2
         0x2e5740326c50 @   40 : c1                Star3 
 4678 E> 0x2e5740326c51 @   41 : 5e f9 f8 f7 0f    CallProperty1 r1, r2, r3, [15]
         0x2e5740326c56 @   46 : 33 fa 04 11       DefineNamedOwnProperty r0, [4], [17]
         0x2e5740326c5a @   50 : 0b fa             Ldar r0
 4719 S> 0x2e5740326c5c @   52 : a9                Return 
Constant pool (size = 7)
0x2e5740326c61: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 7
           0: 0x2e5740326ca9 <ObjectBoilerplateDescription[7]>
           1: 0x2e5740324501 <String[18]: #serializeConstants>
           2: 0x1c347b0c89d1 <String[9]: #constants>
           3: 0x2e57403246d9 <String[17]: #currentTickNumber>
           4: 0x2e57403246b9 <String[14]: #lastTickErrors>
           5: 0x1c347b0c9ea9 <String[3]: #map>
           6: 0x2e5740326d29 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 24)
0x2e5740326e39 <ByteArray[24]>
Boilerplate at 0x2e5740326ca9: 
0x2e5740326ca9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 7
           0: 8
           1: 0x1c347b0c89d1 <String[9]: #constants>
           2: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           3: 0x2e57403246d9 <String[17]: #currentTickNumber>
           4: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           5: 0x2e57403246b9 <String[14]: #lastTickErrors>
           6: 0x2552e2dc1501 <Odd Oddball: uninitialized>
0x2e5740326d29 points to: [0x2e5740326d98]
=== [0x2e5740326d98] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 4699 S> 0x2e5740326d98 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 4706 S> 0x2e5740326d9c @    4 : a9                Return 
Constant pool (size = 1)
0x2e5740326da1: [FixedArray] in OldSpace
 - map: 0x2552e2dc12e1 <Map>
 - length: 1
           0: 0x2552e2dc5721 <String[7]: #message>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2e5740326db9 <ByteArray[8]>
Boilerplate at 0x2e5740326f31: 
0x2e5740326f31: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 31
           0: 8playOneTick
           1: 0x2e57403247a9 <String[11]: #RANDOM_SEED>
           2: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           3: 0x2e57403261a1 <String[10]: #TICK_COUNT>
           4: 1000
           5: 0x2e5740327039 <String[16]: #SCORE_MULTIPLIER>
           6: 1
           7: 0x2e5740327059 <String[13]: #HEALTH_POINTS>
           8: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           9: 0x2e5740326a89 <String[16]: #WORLD_DIMENSIONS>
          10: 0x2552e2dc1501 <Odd Oddball: uninitialized>
          11: 0x2e5740327079 <String[30]: #CANNON_INITIAL_ORIENTATION_DEG>
          12: 0
          13: 0x2e57403270a9 <String[15]: #CANNON_POSITION>
          14: 0x2552e2dc1501 <Odd Oddball: uninitialized>
          15: 0x2e57403270c9 <String[19]: #CANNON_MAX_ROTATION>
          16: 180
          17: 0x2e5740326aa9 <String[21]: #CANNON_COOLDOWN_TICKS>
          18: 10
          19: 0x2e57403269e1 <String[12]: #BULLET_SPEED>
          20: 20
          21: 0x2e5740326a01 <String[11]: #BULLET_SIZE>
          22: 5
          23: 0x2e57403270f1 <String[28]: #METEOR_GENERATION_CONE_ANGLE>
          24: 30
          25: 0x2e5740327121 <String[32]: #METEOR_GENERATION_DELAY_IN_TICKS>
          26: 0x2e5740327151 <ObjectBoilerplateDescription[5]>
          27: 0x2e57403271b9 <String[31]: #CHEAT_DISABLE_METEOR_GENERATION>
          28: 0x2552e2dc1789 <false>
          29: 0x2e57403271e9 <String[34]: #CHEAT_GENERATE_PREDICTABLE_METEORS>
          30: 0x2e5740327221 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2552e2dc1329 <FixedArray[0]>>
Boilerplate at 0x2e5740327269: 
0x2e5740327269: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2552e2dc2059 <Map>
 - length: 5
           0: 8
           1: 0x2e5740326a59 <String[5]: #width>
           2: 0x2552e2dc1501 <Odd Oddball: uninitialized>
           3: 0x2e5740326a71 <String[6]: #height>
           4: 0x2552e2dc1501 <Odd Oddball: uninitialized>
```