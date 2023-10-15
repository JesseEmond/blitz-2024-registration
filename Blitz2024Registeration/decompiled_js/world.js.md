## Annotated
A lot of this we don't care about, so will only keep the relevant functions.
```js
function update(world) {  // 0x2d6db9664ea0
	acc = CreateFunctionContext FUNCTION_SCOPE
	PushContext r0
	ContextSlot[2] = this
	r1 = this.tickCounter % this.getCurrentGenerationDelayInTicks()
	if r1 == 0 and not this.options.CHEAT_DISABLE_METEOR_GENERATION:
		r1 = this.meteors.push
		r4 = r0.ContextSlot[4].Meteor
		r3 = r4.Build
		r5 = vector.Vector(this.width + 50, this.height * this.rng.random())
		r7 = r0.ContextSlot[7].Vector
		r6 = vector.Vector.fromPolarDeg
		r8 = this.rng.random() * 50 + 50
		r9 = this.rng.random() * this.options.METEOR_GENERATION_CONE_ANGLE
		r9 = this.options.this.options.METEOR_GENERATION_CONE_ANGLE / 2 - 180 + r9
		r6 = vector.Vector.fromPolarDeg(r8, r9)
		r7 = r0.ContextSlot[5].MeteorType.Large
		r3 = meteor.Meteor.Build(r5, r6, r7)
		this.meteors.push(r3)
	this.options.CHEAT_GENERATE_PREDICTABLE_METEORS
		.filter(isPredictedMeteorTick)  // 0x2d6db9665498
		.forEach(buildPredictableMeteor)  // 0x2d6db96655f0
	this.findAndHandleCollisions()
	this.meteors.forEach(meteorUpdate)  // 0x2d6db96657e8
	this.meteors = this.meteors.filter(meteorInBoundsY)  // 0x2d6db9665908
	this.meteors
		.filter(hitPlanet)  // 0x2d6db9665a70
		.forEach(hurtHealth)  // 0x2d6db9665bb0
	this.meteors = this.meteors.filter(meteorInBoundsX)  // 0x2d6db9665ce0
		.filter(meteorIsNotDestroyed)  // 0x2d6db9665e08
	this.rockets.forEach(rocketUpdate)  // 0x2d6db9665f38
	this.rockets = this.rockets.filter(rocketInBoundsX)  // 0x2d6db9666058
		.filter(rocketIsNotDestroyed)  // 0x2d6db96661a8
	this.tickCounter += 1
	this.cannon.update()
	return undefined
}

function findAndHandleCollisions() {  // 0x2d6db96666a8
	acc = CreateFunctionContext FUNCTION_SCOPE
	PushContext r1  (acc is prev ctxt)
	ContextSlot[2] = this
	this.collisions = []
	this.rockets.flatMap(this, allRocketCollisions)  // 0x2d6db9666838
		.sort(collisionCompareFn)  // 0x2d6db9666c40
		.forEach(doHandleCollision)  // 0x2d6db9666d78
	return undefined
}

function allRocketCollisions(rocket) {  // 0x2d6db9666838
	acc = CreateFunctionContext FUNCTION_SCOPE
	PushContext r0
	ContextSlot[2] = rocket
	return r0.ContextSlot[2].meteors
		.reduce(reduceRocketCollisions, [])  // 0x2d6db9666990
}

function reduceRocketCollisions(collisions, meteors) {  // 0x2d6db9666990
	r0 = Projectile.checkCollisionDuringCurrentTick(CurrentContext[2], meteor)
	if r0 != null:
	  r1 = collisions.concat
	  r4 = [???]
	  r5 = r0.clone()
	  r5.meteor = meteor
	  r5.rocket = ContextSlot[2]
	  r4[0] = r5
	  return collisions.concat(r4)
	return collisions
}

function collisionCompareFn(c1, c2) {  // 0x2d6db9666c40
	return c1.t - c2.t
}

function doHandleCollision(collision) {  // 0x2d6db9666d78
	return ContextSlot[2].handleCollision(collision)
}

function handleCollision(collision) {  // 0x2d6db9666ee8
	r0 = collision.meteor
	if collision.meteor.isDestroyed or collision.rocket.isDestroyed:
	  return undefined
	this.collisions.push(collision)
	collision.meteor.destroy()
	collision.rocket.destroy()
	this.handleMeteorSplit()
	this._score += this.options.SCORE_MULTIPLIER * collision.meteor.score
	return undefined
}

function handleMeteorSplit(collision) {  // 0x2d6db9667140
	r0 = CreateFunctionContext FUNCTION_SCOPE
	PushContext r0
	ContextSlot[2] = this
	collision.meteor.getMeteorsAfterExplosion(collision.intersection)
		.forEach(addMeteor)  // 0x2d6db96672c8
	return undefined
}

function addMeteor(new_meteor) {  // 0x2d6db96672c8
	return CurrentSlot[2].meteors.push(new_meteor)
}

function getCurrentGenerationDelayInTicks() {  // 0x2d6db9666438
	r3 = this.options.METEOR_GENERATION_DELAY_IN_TICKS
	r0 = r3.start
	r1 = r3.finish
	r2 = this.tickCounter / this.options.TICK_COUNT  // ratio
	r6 = r3.finish - r3.start  // range
	r5 = (ratio - 1) * range + finish
	return Math.round(r5)
}
```

## Disassembled
```
<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2d6db9663b70] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2d6db9663b70 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2d6db9663b74 @    4 : c4                Star0 
 6816 S> 0x2d6db9663b75 @    5 : a9                Return 
Constant pool (size = 1)
0x2d6db9663b79: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x2d6db9663b91 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2d6db9668a71 <ByteArray[8]>
0x2d6db9663b91 points to: [0x2d6db9663c00]
=== [0x2d6db9663c00] DISASSEMBLY ===
Parameter count 6
Register count 20
Frame size 160
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2d6db9663c00 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x2d6db9663c03 @    3 : 1a f9             PushContext r1
         0x2d6db9663c05 @    5 : 10                LdaTheHole 
         0x2d6db9663c06 @    6 : 25 02             StaCurrentContextSlot [2]
         0x2d6db9663c08 @    8 : 10                LdaTheHole 
         0x2d6db9663c09 @    9 : 25 03             StaCurrentContextSlot [3]
         0x2d6db9663c0b @   11 : 10                LdaTheHole 
         0x2d6db9663c0c @   12 : 25 04             StaCurrentContextSlot [4]
         0x2d6db9663c0e @   14 : 10                LdaTheHole 
         0x2d6db9663c0f @   15 : 25 05             StaCurrentContextSlot [5]
         0x2d6db9663c11 @   17 : 10                LdaTheHole 
         0x2d6db9663c12 @   18 : 25 06             StaCurrentContextSlot [6]
         0x2d6db9663c14 @   20 : 10                LdaTheHole 
         0x2d6db9663c15 @   21 : 25 07             StaCurrentContextSlot [7]
   76 S> 0x2d6db9663c17 @   23 : 21 01 00          LdaGlobal [1], [0]
         0x2d6db9663c1a @   26 : c1                Star3 
   83 E> 0x2d6db9663c1b @   27 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x2d6db9663c1f @   31 : c2                Star2 
         0x2d6db9663c20 @   32 : 13 03             LdaConstant [3]
         0x2d6db9663c22 @   34 : bf                Star5 
   98 E> 0x2d6db9663c23 @   35 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2d6db9663c27 @   39 : be                Star6 
         0x2d6db9663c28 @   40 : 19 03 f6          Mov a0, r4
   83 E> 0x2d6db9663c2b @   43 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x2d6db9663c30 @   48 : 0e                LdaUndefined 
  153 E> 0x2d6db9663c31 @   49 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  180 S> 0x2d6db9663c35 @   53 : 13 06             LdaConstant [6]
         0x2d6db9663c37 @   55 : c1                Star3 
  180 E> 0x2d6db9663c38 @   56 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  180 E> 0x2d6db9663c3c @   60 : 25 02             StaCurrentContextSlot [2]
  218 S> 0x2d6db9663c3e @   62 : 13 07             LdaConstant [7]
         0x2d6db9663c40 @   64 : c1                Star3 
  218 E> 0x2d6db9663c41 @   65 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  218 E> 0x2d6db9663c45 @   69 : 25 03             StaCurrentContextSlot [3]
  256 S> 0x2d6db9663c47 @   71 : 13 08             LdaConstant [8]
         0x2d6db9663c49 @   73 : c1                Star3 
  256 E> 0x2d6db9663c4a @   74 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  256 E> 0x2d6db9663c4e @   78 : 25 04             StaCurrentContextSlot [4]
  300 S> 0x2d6db9663c50 @   80 : 13 09             LdaConstant [9]
         0x2d6db9663c52 @   82 : c1                Star3 
  300 E> 0x2d6db9663c53 @   83 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  300 E> 0x2d6db9663c57 @   87 : 25 05             StaCurrentContextSlot [5]
  348 S> 0x2d6db9663c59 @   89 : 13 0a             LdaConstant [10]
         0x2d6db9663c5b @   91 : c1                Star3 
  348 E> 0x2d6db9663c5c @   92 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  348 E> 0x2d6db9663c60 @   96 : 25 06             StaCurrentContextSlot [6]
  390 S> 0x2d6db9663c62 @   98 : 13 0b             LdaConstant [11]
         0x2d6db9663c64 @  100 : c1                Star3 
  390 E> 0x2d6db9663c65 @  101 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  390 E> 0x2d6db9663c69 @  105 : 25 07             StaCurrentContextSlot [7]
         0x2d6db9663c6b @  107 : 10                LdaTheHole 
         0x2d6db9663c6c @  108 : bf                Star5 
         0x2d6db9663c6d @  109 : 80 0d 00 02       CreateClosure [13], [0], #2
         0x2d6db9663c71 @  113 : c2                Star2 
         0x2d6db9663c72 @  114 : 13 0c             LdaConstant [12]
         0x2d6db9663c74 @  116 : c1                Star3 
         0x2d6db9663c75 @  117 : 80 0e 01 02       CreateClosure [14], [1], #2
         0x2d6db9663c79 @  121 : be                Star6 
         0x2d6db9663c7a @  122 : 80 0f 02 02       CreateClosure [15], [2], #2
         0x2d6db9663c7e @  126 : bd                Star7 
         0x2d6db9663c7f @  127 : 80 10 03 02       CreateClosure [16], [3], #2
         0x2d6db9663c83 @  131 : bc                Star8 
         0x2d6db9663c84 @  132 : 80 11 04 02       CreateClosure [17], [4], #2
         0x2d6db9663c88 @  136 : bb                Star9 
         0x2d6db9663c89 @  137 : 80 12 05 02       CreateClosure [18], [5], #2
         0x2d6db9663c8d @  141 : ba                Star10 
         0x2d6db9663c8e @  142 : 80 13 06 02       CreateClosure [19], [6], #2
         0x2d6db9663c92 @  146 : b9                Star11 
         0x2d6db9663c93 @  147 : 80 14 07 02       CreateClosure [20], [7], #2
         0x2d6db9663c97 @  151 : b8                Star12 
         0x2d6db9663c98 @  152 : 80 15 08 02       CreateClosure [21], [8], #2
         0x2d6db9663c9c @  156 : b7                Star13 
         0x2d6db9663c9d @  157 : 80 16 09 02       CreateClosure [22], [9], #2
         0x2d6db9663ca1 @  161 : b6                Star14 
         0x2d6db9663ca2 @  162 : 80 17 0a 02       CreateClosure [23], [10], #2
         0x2d6db9663ca6 @  166 : b5                Star15 
         0x2d6db9663ca7 @  167 : 80 18 0b 02       CreateClosure [24], [11], #2
         0x2d6db9663cab @  171 : 18 ea             Star r16
         0x2d6db9663cad @  173 : 80 19 0c 02       CreateClosure [25], [12], #2
         0x2d6db9663cb1 @  177 : 18 e9             Star r17
         0x2d6db9663cb3 @  179 : 80 1a 0d 02       CreateClosure [26], [13], #2
         0x2d6db9663cb7 @  183 : 18 e8             Star r18
         0x2d6db9663cb9 @  185 : 80 1b 0e 02       CreateClosure [27], [14], #2
         0x2d6db9663cbd @  189 : 18 e7             Star r19
         0x2d6db9663cbf @  191 : 19 f8 f6          Mov r2, r4
         0x2d6db9663cc2 @  194 : 65 28 00 f7 11    CallRuntime [DefineClass], r3-r19
         0x2d6db9663cc7 @  199 : c1                Star3 
         0x2d6db9663cc8 @  200 : 19 f6 fa          Mov r4, r0
 6756 S> 0x2d6db9663ccb @  203 : 0b fa             Ldar r0
 6770 E> 0x2d6db9663ccd @  205 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x2d6db9663cd1 @  209 : 0e                LdaUndefined 
 6813 S> 0x2d6db9663cd2 @  210 : a9                Return 
Constant pool (size = 28)
0x2d6db9663cd9: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 28
           0: 0x2d6db9663dc9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x27ee06cc5ab9 <String[6]: #Object>
           2: 0x27ee06cc4c11 <String[14]: #defineProperty>
           3: 0x2d6db9663f11 <String[10]: #__esModule>
           4: 0x2d6db9663f31 <ObjectBoilerplateDescription[3]>
           5: 0x2d6db9663f59 <String[5]: #World>
           6: 0x2d6db9663f71 <String[8]: #./action>
           7: 0x2d6db9663f89 <String[8]: #./cannon>
           8: 0x2d6db9663fa1 <String[8]: #./meteor>
           9: 0x2d6db9663fb9 <String[14]: #./meteor_infos>
          10: 0x2d6db9663fd9 <String[12]: #./projectile>
          11: 0x2d6db9663ff9 <String[8]: #./vector>
          12: 0x2d6db9664011 <FixedArray[7]>
          13: 0x2d6db96644c1 <SharedFunctionInfo World>
          14: 0x2d6db9664d01 <SharedFunctionInfo get healthPoints>
          15: 0x2d6db9664e31 <SharedFunctionInfo update>
          16: 0x2d6db96663c9 <SharedFunctionInfo getCurrentGenerationDelayInTicks>
          17: 0x2d6db9666639 <SharedFunctionInfo findAndHandleCollisions>
          18: 0x2d6db9666e79 <SharedFunctionInfo handleCollision>
          19: 0x2d6db96670d1 <SharedFunctionInfo handleMeteorSplit>
          20: 0x2d6db96673d1 <SharedFunctionInfo applyAction>
          21: 0x2d6db9667621 <SharedFunctionInfo serializeForViewer>
          22: 0x2d6db9667c91 <SharedFunctionInfo serializeForPlayer>
          23: 0x2d6db9668099 <SharedFunctionInfo serializeCommon>
          24: 0x2d6db96681f1 <SharedFunctionInfo handleActionRotate>
          25: 0x2d6db9668409 <SharedFunctionInfo handleActionLookAt>
          26: 0x2d6db9668739 <SharedFunctionInfo handleActionShoot>
          27: 0x2d6db96688a9 <SharedFunctionInfo get score>
Handler Table (size = 0)
Source Position Table (size = 69)
0x2d6db96689f9 <ByteArray[69]>
Boilerplate at 0x2d6db9663f31: 
0x2d6db9663f31: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27ee06cc2059 <Map>
 - length: 3
           0: 8
           1: 0x27ee06cc6419 <String[5]: #value>
           2: 0x27ee06cc1729 <true>
Array at 0x2d6db9664011 has 7 elements:
0x2d6db9664011: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 7
           0: 17
           1: 0x2d6db9664059 <DescriptorArray[4]>
           2: 0x27ee06cc3301 <NumberDictionary[7]>
           3: 0x27ee06cc1329 <FixedArray[0]>
           4: 0x2d6db9664119 <DescriptorArray[15]>
           5: 0x27ee06cc3301 <NumberDictionary[7]>
           6: 0x27ee06cc1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x11 (17)
Element[1]
0x2d6db9664059: [DescriptorArray] in OldSpace
 - map: 0x27ee06cc7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x27ee06cc55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x1b79516b4fe1 <AccessorInfo>
  [1]: 0x27ee06cc58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x1b79516b4f71 <AccessorInfo>
  [2]: 0x27ee06cc5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 0, attrs: [___]) @ 0x1b79516b5051 <AccessorInfo>
  [3]: 0x27ee06cc65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x2d6db9664101 <ClassPositions 411, 6755>
Element[2]
0x27ee06cc3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x27ee06cc1329: [FixedArray] in ReadOnlySpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 0
Element[4]
0x2d6db9664119: [DescriptorArray] in OldSpace
 - map: 0x27ee06cc7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 15
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x27ee06cc4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 3, attrs: [W_C]) @ 1
  [1]: 0x2d6db9664299: [String] in OldSpace: #healthPoints (const accessor descriptor, p: 10, attrs: [W_C]) @ 0x2d6db96642b9 <AccessorPair>(get: 3, set: 0x27ee06cc1339 <null>)
  [2]: 0x1b7951683f01: [String] in OldSpace: #update (const data descriptor, p: 12, attrs: [W_C]) @ 4
  [3]: 0x2d6db96642e9: [String] in OldSpace: #getCurrentGenerationDelayInTicks (const data descriptor, p: 4, attrs: [W_C]) @ 5
  [4]: 0x2d6db9664319: [String] in OldSpace: #findAndHandleCollisions (const data descriptor, p: 11, attrs: [W_C]) @ 6
  [5]: 0x2d6db9664341: [String] in OldSpace: #handleCollision (const data descriptor, p: 0, attrs: [W_C]) @ 7
  [6]: 0x2d6db9664361: [String] in OldSpace: #handleMeteorSplit (const data descriptor, p: 1, attrs: [W_C]) @ 8
  [7]: 0x2d6db9664389: [String] in OldSpace: #applyAction (const data descriptor, p: 7, attrs: [W_C]) @ 9
  [8]: 0x2d6db96643a9: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 13, attrs: [W_C]) @ 10
  [9]: 0x2d6db96643d1: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 14, attrs: [W_C]) @ 11
  [10]: 0x2d6db96643f9: [String] in OldSpace: #serializeCommon (const data descriptor, p: 5, attrs: [W_C]) @ 12
  [11]: 0x2d6db9664419: [String] in OldSpace: #handleActionRotate (const data descriptor, p: 8, attrs: [W_C]) @ 13
  [12]: 0x2d6db9664441: [String] in OldSpace: #handleActionLookAt (const data descriptor, p: 6, attrs: [W_C]) @ 14
  [13]: 0x2d6db9664469: [String] in OldSpace: #handleActionShoot (const data descriptor, p: 2, attrs: [W_C]) @ 15
  [14]: 0x2d6db9664491: [String] in OldSpace: #score (const accessor descriptor, p: 9, attrs: [W_C]) @ 0x2d6db96644a9 <AccessorPair>(get: 16, set: 0x27ee06cc1339 <null>)
Element[5]
0x27ee06cc3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x27ee06cc1329: [FixedArray] in ReadOnlySpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 0
0x2d6db96644c1 points to: [0x2d6db9664530]
=== [0x2d6db9664530] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  465 S> 0x2d6db9664530 @    0 : 0b 03             Ldar a0
  478 E> 0x2d6db9664532 @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  497 S> 0x2d6db9664536 @    6 : 0b 04             Ldar a1
  506 E> 0x2d6db9664538 @    8 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
  521 S> 0x2d6db966453c @   12 : 0c                LdaZero 
  538 E> 0x2d6db966453d @   13 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
  551 S> 0x2d6db9664541 @   17 : 7b 06             CreateEmptyArrayLiteral [6]
  564 E> 0x2d6db9664543 @   19 : 32 02 03 07       SetNamedProperty <this>, [3], [7]
  578 S> 0x2d6db9664547 @   23 : 7b 09             CreateEmptyArrayLiteral [9]
  591 E> 0x2d6db9664549 @   25 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
  605 S> 0x2d6db966454d @   29 : 7b 0c             CreateEmptyArrayLiteral [12]
  621 E> 0x2d6db966454f @   31 : 32 02 05 0d       SetNamedProperty <this>, [5], [13]
  656 S> 0x2d6db9664553 @   35 : 2d 03 06 0f       GetNamedProperty a0, [6], [15]
         0x2d6db9664557 @   39 : c3                Star1 
  673 E> 0x2d6db9664558 @   40 : 2d f9 07 11       GetNamedProperty r1, [7], [17]
  646 E> 0x2d6db966455c @   44 : 32 02 07 13       SetNamedProperty <this>, [7], [19]
  710 S> 0x2d6db9664560 @   48 : 2d 03 06 0f       GetNamedProperty a0, [6], [15]
         0x2d6db9664564 @   52 : c3                Star1 
  727 E> 0x2d6db9664565 @   53 : 2d f9 08 15       GetNamedProperty r1, [8], [21]
  700 E> 0x2d6db9664569 @   57 : 32 02 08 17       SetNamedProperty <this>, [8], [23]
  772 S> 0x2d6db966456d @   61 : 2d 03 09 19       GetNamedProperty a0, [9], [25]
  762 E> 0x2d6db9664571 @   65 : 32 02 0a 1b       SetNamedProperty <this>, [10], [27]
  795 S> 0x2d6db9664575 @   69 : 0c                LdaZero 
  807 E> 0x2d6db9664576 @   70 : 32 02 0b 1d       SetNamedProperty <this>, [11], [29]
  820 S> 0x2d6db966457a @   74 : 17 03             LdaImmutableCurrentContextSlot [3]
  838 E> 0x2d6db966457c @   76 : aa 0c             ThrowReferenceErrorIfHole [12]
         0x2d6db966457e @   78 : c3                Star1 
  847 E> 0x2d6db966457f @   79 : 2d f9 0d 1f       GetNamedProperty r1, [13], [31]
         0x2d6db9664583 @   83 : c3                Star1 
  859 E> 0x2d6db9664584 @   84 : 2d 02 00 21       GetNamedProperty <this>, [0], [33]
         0x2d6db9664588 @   88 : c2                Star2 
  867 E> 0x2d6db9664589 @   89 : 2d f8 0e 23       GetNamedProperty r2, [14], [35]
         0x2d6db966458d @   93 : c2                Star2 
  889 E> 0x2d6db966458e @   94 : 2d 02 00 25       GetNamedProperty <this>, [0], [37]
         0x2d6db9664592 @   98 : c1                Star3 
  897 E> 0x2d6db9664593 @   99 : 2d f7 0f 27       GetNamedProperty r3, [15], [39]
         0x2d6db9664597 @  103 : c1                Star3 
         0x2d6db9664598 @  104 : 7c 10 29 29       CreateObjectLiteral [16], [41], #41
         0x2d6db966459c @  108 : c0                Star4 
  968 E> 0x2d6db966459d @  109 : 2d 02 00 2a       GetNamedProperty <this>, [0], [42]
         0x2d6db96645a1 @  113 : bf                Star5 
  976 E> 0x2d6db96645a2 @  114 : 2d f5 11 2c       GetNamedProperty r5, [17], [44]
         0x2d6db96645a6 @  118 : 33 f6 12 2e       DefineNamedOwnProperty r4, [18], [46]
 1029 E> 0x2d6db96645aa @  122 : 2d 02 00 30       GetNamedProperty <this>, [0], [48]
         0x2d6db96645ae @  126 : bf                Star5 
 1037 E> 0x2d6db96645af @  127 : 2d f5 13 32       GetNamedProperty r5, [19], [50]
         0x2d6db96645b3 @  131 : 33 f6 14 34       DefineNamedOwnProperty r4, [20], [52]
 1089 E> 0x2d6db96645b7 @  135 : 2d 02 00 36       GetNamedProperty <this>, [0], [54]
         0x2d6db96645bb @  139 : bf                Star5 
 1097 E> 0x2d6db96645bc @  140 : 2d f5 15 38       GetNamedProperty r5, [21], [56]
         0x2d6db96645c0 @  144 : 33 f6 16 3a       DefineNamedOwnProperty r4, [22], [58]
 1140 E> 0x2d6db96645c4 @  148 : 2d 02 00 3c       GetNamedProperty <this>, [0], [60]
         0x2d6db96645c8 @  152 : bf                Star5 
 1148 E> 0x2d6db96645c9 @  153 : 2d f5 17 3e       GetNamedProperty r5, [23], [62]
         0x2d6db96645cd @  157 : 33 f6 18 40       DefineNamedOwnProperty r4, [24], [64]
         0x2d6db96645d1 @  161 : 0b f9             Ldar r1
  834 E> 0x2d6db96645d3 @  163 : 69 f9 f8 03 42    Construct r1, r2-r4, [66]
  832 E> 0x2d6db96645d8 @  168 : 32 02 19 44       SetNamedProperty <this>, [25], [68]
         0x2d6db96645dc @  172 : 0e                LdaUndefined 
 1177 S> 0x2d6db96645dd @  173 : a9                Return 
Constant pool (size = 26)
0x2d6db96645e1: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 26
           0: 0x1b795168cbb9 <String[7]: #options>
           1: 0x1b79516a8a51 <String[3]: #rng>
           2: 0x2d6db96646f1 <String[11]: #tickCounter>
           3: 0x2d6db9664711 <String[7]: #meteors>
           4: 0x2d6db9664729 <String[7]: #rockets>
           5: 0x2d6db9664741 <String[10]: #collisions>
           6: 0x2d6db9664761 <String[16]: #WORLD_DIMENSIONS>
           7: 0x2d6db9664781 <String[5]: #width>
           8: 0x2d6db9664799 <String[6]: #height>
           9: 0x2d6db96647b1 <String[13]: #HEALTH_POINTS>
          10: 0x2d6db96647d1 <String[13]: #_healthPoints>
          11: 0x2d6db96647f1 <String[6]: #_score>
          12: 0x2d6db9663e89 <String[8]: #cannon_1>
          13: 0x2d6db9664809 <String[6]: #Cannon>
          14: 0x2d6db9664821 <String[15]: #CANNON_POSITION>
          15: 0x2d6db9664841 <String[30]: #CANNON_INITIAL_ORIENTATION_DEG>
          16: 0x2d6db9664871 <ObjectBoilerplateDescription[9]>
          17: 0x2d6db9664951 <String[19]: #CANNON_MAX_ROTATION>
          18: 0x2d6db96648c9 <String[18]: #maxRotationDegrees>
          19: 0x2d6db9664979 <String[21]: #CANNON_COOLDOWN_TICKS>
          20: 0x2d6db96648f1 <String[13]: #cooldownTicks>
          21: 0x2d6db96649a1 <String[11]: #BULLET_SIZE>
          22: 0x2d6db9664911 <String[10]: #bulletSize>
          23: 0x2d6db96649c1 <String[12]: #BULLET_SPEED>
          24: 0x2d6db9664931 <String[11]: #bulletSpeed>
          25: 0x2d6db96649e1 <String[6]: #cannon>
Handler Table (size = 0)
Source Position Table (size = 93)
0x2d6db96649f9 <ByteArray[93]>
Boilerplate at 0x2d6db9664871: 
0x2d6db9664871: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27ee06cc2059 <Map>
 - length: 9
           0: 8
           1: 0x2d6db96648c9 <String[18]: #maxRotationDegrees>
           2: 0x27ee06cc1501 <Odd Oddball: uninitialized>
           3: 0x2d6db96648f1 <String[13]: #cooldownTicks>
           4: 0x27ee06cc1501 <Odd Oddball: uninitialized>
           5: 0x2d6db9664911 <String[10]: #bulletSize>
           6: 0x27ee06cc1501 <Odd Oddball: uninitialized>
           7: 0x2d6db9664931 <String[11]: #bulletSpeed>
           8: 0x27ee06cc1501 <Odd Oddball: uninitialized>
0x2d6db9664d01 points to: [0x2d6db9664d70]
=== [0x2d6db9664d70] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1224 S> 0x2d6db9664d70 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1238 S> 0x2d6db9664d74 @    4 : a9                Return 
Constant pool (size = 1)
0x2d6db9664d79: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x2d6db96647d1 <String[13]: #_healthPoints>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2d6db9664d91 <ByteArray[7]>
0x2d6db9664e31 points to: [0x2d6db9664ea0]
=== [0x2d6db9664ea0] DISASSEMBLY ===
Parameter count 1
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
 1255 E> 0x2d6db9664ea0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2d6db9664ea3 @    3 : 1a fa             PushContext r0
         0x2d6db9664ea5 @    5 : 0b 02             Ldar <this>
         0x2d6db9664ea7 @    7 : 25 02             StaCurrentContextSlot [2]
 1268 S> 0x2d6db9664ea9 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664eab @   11 : c3                Star1 
 1277 E> 0x2d6db9664eac @   12 : 2d f9 01 01       GetNamedProperty r1, [1], [1]
         0x2d6db9664eb0 @   16 : c3                Star1 
         0x2d6db9664eb1 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664eb3 @   19 : c1                Star3 
 1296 E> 0x2d6db9664eb4 @   20 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0x2d6db9664eb8 @   24 : c2                Star2 
 1296 E> 0x2d6db9664eb9 @   25 : 5d f8 f7 05       CallProperty0 r2, r3, [5]
 1289 E> 0x2d6db9664ebd @   29 : 3d f9 00          Mod r1, [0]
         0x2d6db9664ec0 @   32 : c3                Star1 
         0x2d6db9664ec1 @   33 : 0c                LdaZero 
 1331 E> 0x2d6db9664ec2 @   34 : 6b f9 07          TestEqual r1, [7]
         0x2d6db9664ec5 @   37 : 99 f3             JumpIfFalse [243] (0x2d6db9664fb8 @ 280)
         0x2d6db9664ec7 @   39 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664ec9 @   41 : c3                Star1 
 1345 E> 0x2d6db9664eca @   42 : 2d f9 03 08       GetNamedProperty r1, [3], [8]
         0x2d6db9664ece @   46 : c3                Star1 
 1353 E> 0x2d6db9664ecf @   47 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x2d6db9664ed3 @   51 : 96 e5             JumpIfToBooleanTrue [229] (0x2d6db9664fb8 @ 280)
 1400 S> 0x2d6db9664ed5 @   53 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664ed7 @   55 : c2                Star2 
 1405 E> 0x2d6db9664ed8 @   56 : 2d f8 05 0c       GetNamedProperty r2, [5], [12]
         0x2d6db9664edc @   60 : c2                Star2 
 1413 E> 0x2d6db9664edd @   61 : 2d f8 06 0e       GetNamedProperty r2, [6], [14]
         0x2d6db9664ee1 @   65 : c3                Star1 
         0x2d6db9664ee2 @   66 : 15 fa 04 00       LdaImmutableContextSlot r0, [4], [0]
 1418 E> 0x2d6db9664ee6 @   70 : aa 07             ThrowReferenceErrorIfHole [7]
         0x2d6db9664ee8 @   72 : c0                Star4 
 1427 E> 0x2d6db9664ee9 @   73 : 2d f6 08 10       GetNamedProperty r4, [8], [16]
         0x2d6db9664eed @   77 : c0                Star4 
 1434 E> 0x2d6db9664eee @   78 : 2d f6 09 12       GetNamedProperty r4, [9], [18]
         0x2d6db9664ef2 @   82 : c1                Star3 
         0x2d6db9664ef3 @   83 : 15 fa 07 00       LdaImmutableContextSlot r0, [7], [0]
 1444 E> 0x2d6db9664ef7 @   87 : aa 0a             ThrowReferenceErrorIfHole [10]
         0x2d6db9664ef9 @   89 : bf                Star5 
 1453 E> 0x2d6db9664efa @   90 : 2d f5 0b 14       GetNamedProperty r5, [11], [20]
         0x2d6db9664efe @   94 : bf                Star5 
         0x2d6db9664eff @   95 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664f01 @   97 : be                Star6 
 1465 E> 0x2d6db9664f02 @   98 : 2d f4 0c 17       GetNamedProperty r6, [12], [23]
 1471 E> 0x2d6db9664f06 @  102 : 45 32 16          AddSmi [50], [22]
         0x2d6db9664f09 @  105 : be                Star6 
         0x2d6db9664f0a @  106 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664f0c @  108 : bc                Star8 
 1482 E> 0x2d6db9664f0d @  109 : 2d f2 0d 1a       GetNamedProperty r8, [13], [26]
         0x2d6db9664f11 @  113 : bc                Star8 
 1486 E> 0x2d6db9664f12 @  114 : 2d f2 0e 1c       GetNamedProperty r8, [14], [28]
         0x2d6db9664f16 @  118 : bd                Star7 
 1486 E> 0x2d6db9664f17 @  119 : 5d f3 f2 1e       CallProperty0 r7, r8, [30]
         0x2d6db9664f1b @  123 : bd                Star7 
         0x2d6db9664f1c @  124 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664f1e @  126 : bc                Star8 
 1502 E> 0x2d6db9664f1f @  127 : 2d f2 0f 20       GetNamedProperty r8, [15], [32]
 1495 E> 0x2d6db9664f23 @  131 : 3b f3 19          Mul r7, [25]
         0x2d6db9664f26 @  134 : bd                Star7 
         0x2d6db9664f27 @  135 : 0b f5             Ldar r5
 1440 E> 0x2d6db9664f29 @  137 : 69 f5 f4 02 22    Construct r5, r6-r7, [34]
         0x2d6db9664f2e @  142 : bf                Star5 
         0x2d6db9664f2f @  143 : 15 fa 07 00       LdaImmutableContextSlot r0, [7], [0]
 1511 E> 0x2d6db9664f33 @  147 : aa 0a             ThrowReferenceErrorIfHole [10]
         0x2d6db9664f35 @  149 : bd                Star7 
 1520 E> 0x2d6db9664f36 @  150 : 2d f3 0b 14       GetNamedProperty r7, [11], [20]
         0x2d6db9664f3a @  154 : bd                Star7 
 1527 E> 0x2d6db9664f3b @  155 : 2d f3 10 24       GetNamedProperty r7, [16], [36]
         0x2d6db9664f3f @  159 : be                Star6 
         0x2d6db9664f40 @  160 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664f42 @  162 : bb                Star9 
 1545 E> 0x2d6db9664f43 @  163 : 2d f1 0d 28       GetNamedProperty r9, [13], [40]
         0x2d6db9664f47 @  167 : bb                Star9 
 1549 E> 0x2d6db9664f48 @  168 : 2d f1 0e 2a       GetNamedProperty r9, [14], [42]
         0x2d6db9664f4c @  172 : bc                Star8 
 1549 E> 0x2d6db9664f4d @  173 : 5d f2 f1 2c       CallProperty0 r8, r9, [44]
 1558 E> 0x2d6db9664f51 @  177 : 47 32 27          MulSmi [50], [39]
 1563 E> 0x2d6db9664f54 @  180 : 45 32 26          AddSmi [50], [38]
         0x2d6db9664f57 @  183 : bc                Star8 
         0x2d6db9664f58 @  184 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664f5a @  186 : bb                Star9 
 1574 E> 0x2d6db9664f5b @  187 : 2d f1 03 30       GetNamedProperty r9, [3], [48]
         0x2d6db9664f5f @  191 : bb                Star9 
 1582 E> 0x2d6db9664f60 @  192 : 2d f1 11 32       GetNamedProperty r9, [17], [50]
         0x2d6db9664f64 @  196 : bb                Star9 
         0x2d6db9664f65 @  197 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664f67 @  199 : b9                Star11 
 1618 E> 0x2d6db9664f68 @  200 : 2d ef 0d 34       GetNamedProperty r11, [13], [52]
         0x2d6db9664f6c @  204 : b9                Star11 
 1622 E> 0x2d6db9664f6d @  205 : 2d ef 0e 36       GetNamedProperty r11, [14], [54]
         0x2d6db9664f71 @  209 : ba                Star10 
 1622 E> 0x2d6db9664f72 @  210 : 5d f0 ef 38       CallProperty0 r10, r11, [56]
 1611 E> 0x2d6db9664f76 @  214 : 3b f1 2f          Mul r9, [47]
         0x2d6db9664f79 @  217 : bb                Star9 
         0x2d6db9664f7a @  218 : 00 0d b4 00       LdaSmi.Wide [180]
         0x2d6db9664f7e @  222 : ba                Star10 
         0x2d6db9664f7f @  223 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664f81 @  225 : b9                Star11 
 1645 E> 0x2d6db9664f82 @  226 : 2d ef 03 3c       GetNamedProperty r11, [3], [60]
         0x2d6db9664f86 @  230 : b9                Star11 
 1653 E> 0x2d6db9664f87 @  231 : 2d ef 11 3e       GetNamedProperty r11, [17], [62]
 1682 E> 0x2d6db9664f8b @  235 : 48 02 3b          DivSmi [2], [59]
 1638 E> 0x2d6db9664f8e @  238 : 3a f0 3a          Sub r10, [58]
 1631 E> 0x2d6db9664f91 @  241 : 39 f1 2e          Add r9, [46]
         0x2d6db9664f94 @  244 : bb                Star9 
 1527 E> 0x2d6db9664f95 @  245 : 5f f4 f3 f2 f1 40 CallProperty2 r6, r7, r8, r9, [64]
         0x2d6db9664f9b @  251 : be                Star6 
         0x2d6db9664f9c @  252 : 15 fa 05 00       LdaImmutableContextSlot r0, [5], [0]
 1689 E> 0x2d6db9664fa0 @  256 : aa 12             ThrowReferenceErrorIfHole [18]
         0x2d6db9664fa2 @  258 : bd                Star7 
 1704 E> 0x2d6db9664fa3 @  259 : 2d f3 13 42       GetNamedProperty r7, [19], [66]
         0x2d6db9664fa7 @  263 : bd                Star7 
 1715 E> 0x2d6db9664fa8 @  264 : 2d f3 14 44       GetNamedProperty r7, [20], [68]
         0x2d6db9664fac @  268 : bd                Star7 
 1434 E> 0x2d6db9664fad @  269 : 5c f7 f6 04 46    CallProperty r3, r4-r7, [70]
         0x2d6db9664fb2 @  274 : c1                Star3 
 1413 E> 0x2d6db9664fb3 @  275 : 5e f9 f8 f7 48    CallProperty1 r1, r2, r3, [72]
 1768 S> 0x2d6db9664fb8 @  280 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664fba @  282 : c1                Star3 
 1773 E> 0x2d6db9664fbb @  283 : 2d f7 03 4a       GetNamedProperty r3, [3], [74]
         0x2d6db9664fbf @  287 : c1                Star3 
 1781 E> 0x2d6db9664fc0 @  288 : 2d f7 15 4c       GetNamedProperty r3, [21], [76]
         0x2d6db9664fc4 @  292 : c1                Star3 
 1816 E> 0x2d6db9664fc5 @  293 : 2d f7 16 4e       GetNamedProperty r3, [22], [78]
         0x2d6db9664fc9 @  297 : c2                Star2 
         0x2d6db9664fca @  298 : 80 17 00 02       CreateClosure [23], [0], #2
         0x2d6db9664fce @  302 : c0                Star4 
 1816 E> 0x2d6db9664fcf @  303 : 5e f8 f7 f6 50    CallProperty1 r2, r3, r4, [80]
         0x2d6db9664fd4 @  308 : c2                Star2 
 1857 E> 0x2d6db9664fd5 @  309 : 2d f8 18 52       GetNamedProperty r2, [24], [82]
         0x2d6db9664fd9 @  313 : c3                Star1 
         0x2d6db9664fda @  314 : 80 19 01 02       CreateClosure [25], [1], #2
         0x2d6db9664fde @  318 : c1                Star3 
 1858 E> 0x2d6db9664fdf @  319 : 5e f9 f8 f7 54    CallProperty1 r1, r2, r3, [84]
 2013 S> 0x2d6db9664fe4 @  324 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664fe6 @  326 : c2                Star2 
 2018 E> 0x2d6db9664fe7 @  327 : 2d f8 1a 56       GetNamedProperty r2, [26], [86]
         0x2d6db9664feb @  331 : c3                Star1 
 2018 E> 0x2d6db9664fec @  332 : 5d f9 f8 58       CallProperty0 r1, r2, [88]
 2053 S> 0x2d6db9664ff0 @  336 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9664ff2 @  338 : c2                Star2 
 2058 E> 0x2d6db9664ff3 @  339 : 2d f8 05 5a       GetNamedProperty r2, [5], [90]
         0x2d6db9664ff7 @  343 : c2                Star2 
 2066 E> 0x2d6db9664ff8 @  344 : 2d f8 18 5c       GetNamedProperty r2, [24], [92]
         0x2d6db9664ffc @  348 : c3                Star1 
         0x2d6db9664ffd @  349 : 80 1b 02 02       CreateClosure [27], [2], #2
         0x2d6db9665001 @  353 : c1                Star3 
 2066 E> 0x2d6db9665002 @  354 : 5e f9 f8 f7 5e    CallProperty1 r1, r2, r3, [94]
 2112 S> 0x2d6db9665007 @  359 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9665009 @  361 : c3                Star1 
         0x2d6db966500a @  362 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db966500c @  364 : c1                Star3 
 2132 E> 0x2d6db966500d @  365 : 2d f7 05 60       GetNamedProperty r3, [5], [96]
         0x2d6db9665011 @  369 : c1                Star3 
 2140 E> 0x2d6db9665012 @  370 : 2d f7 16 62       GetNamedProperty r3, [22], [98]
         0x2d6db9665016 @  374 : c2                Star2 
         0x2d6db9665017 @  375 : 80 1c 03 02       CreateClosure [28], [3], #2
         0x2d6db966501b @  379 : c0                Star4 
 2140 E> 0x2d6db966501c @  380 : 5e f8 f7 f6 64    CallProperty1 r2, r3, r4, [100]
 2125 E> 0x2d6db9665021 @  385 : 32 f9 05 66       SetNamedProperty r1, [5], [102]
 2284 S> 0x2d6db9665025 @  389 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9665027 @  391 : c1                Star3 
 2289 E> 0x2d6db9665028 @  392 : 2d f7 05 68       GetNamedProperty r3, [5], [104]
         0x2d6db966502c @  396 : c1                Star3 
 2297 E> 0x2d6db966502d @  397 : 2d f7 16 6a       GetNamedProperty r3, [22], [106]
         0x2d6db9665031 @  401 : c2                Star2 
         0x2d6db9665032 @  402 : 80 1d 04 02       CreateClosure [29], [4], #2
         0x2d6db9665036 @  406 : c0                Star4 
 2297 E> 0x2d6db9665037 @  407 : 5e f8 f7 f6 6c    CallProperty1 r2, r3, r4, [108]
         0x2d6db966503c @  412 : c2                Star2 
 2339 E> 0x2d6db966503d @  413 : 2d f8 18 6e       GetNamedProperty r2, [24], [110]
         0x2d6db9665041 @  417 : c3                Star1 
         0x2d6db9665042 @  418 : 80 1e 05 02       CreateClosure [30], [5], #2
         0x2d6db9665046 @  422 : c1                Star3 
 2340 E> 0x2d6db9665047 @  423 : 5e f9 f8 f7 70    CallProperty1 r1, r2, r3, [112]
 2404 S> 0x2d6db966504c @  428 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db966504e @  430 : c3                Star1 
         0x2d6db966504f @  431 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9665051 @  433 : c1                Star3 
 2424 E> 0x2d6db9665052 @  434 : 2d f7 05 72       GetNamedProperty r3, [5], [114]
         0x2d6db9665056 @  438 : c1                Star3 
 2432 E> 0x2d6db9665057 @  439 : 2d f7 16 74       GetNamedProperty r3, [22], [116]
         0x2d6db966505b @  443 : c2                Star2 
         0x2d6db966505c @  444 : 80 1f 06 02       CreateClosure [31], [6], #2
         0x2d6db9665060 @  448 : c0                Star4 
 2432 E> 0x2d6db9665061 @  449 : 5e f8 f7 f6 76    CallProperty1 r2, r3, r4, [118]
 2417 E> 0x2d6db9665066 @  454 : 32 f9 05 78       SetNamedProperty r1, [5], [120]
 2483 S> 0x2d6db966506a @  458 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db966506c @  460 : c3                Star1 
         0x2d6db966506d @  461 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db966506f @  463 : c1                Star3 
 2503 E> 0x2d6db9665070 @  464 : 2d f7 05 7a       GetNamedProperty r3, [5], [122]
         0x2d6db9665074 @  468 : c1                Star3 
 2511 E> 0x2d6db9665075 @  469 : 2d f7 16 7c       GetNamedProperty r3, [22], [124]
         0x2d6db9665079 @  473 : c2                Star2 
         0x2d6db966507a @  474 : 80 20 07 02       CreateClosure [32], [7], #2
         0x2d6db966507e @  478 : c0                Star4 
 2511 E> 0x2d6db966507f @  479 : 5e f8 f7 f6 7e    CallProperty1 r2, r3, r4, [126]
 2496 E> 0x2d6db9665084 @  484 : 32 f9 05 80       SetNamedProperty r1, [5], [128]
 2560 S> 0x2d6db9665088 @  488 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db966508a @  490 : c2                Star2 
 2565 E> 0x2d6db966508b @  491 : 2d f8 21 82       GetNamedProperty r2, [33], [130]
         0x2d6db966508f @  495 : c2                Star2 
 2573 E> 0x2d6db9665090 @  496 : 2d f8 18 84       GetNamedProperty r2, [24], [132]
         0x2d6db9665094 @  500 : c3                Star1 
         0x2d6db9665095 @  501 : 80 22 08 02       CreateClosure [34], [8], #2
         0x2d6db9665099 @  505 : c1                Star3 
 2573 E> 0x2d6db966509a @  506 : 5e f9 f8 f7 86    CallProperty1 r1, r2, r3, [134]
 2619 S> 0x2d6db966509f @  511 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96650a1 @  513 : c3                Star1 
         0x2d6db96650a2 @  514 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96650a4 @  516 : c1                Star3 
 2639 E> 0x2d6db96650a5 @  517 : 2d f7 21 88       GetNamedProperty r3, [33], [136]
         0x2d6db96650a9 @  521 : c1                Star3 
 2647 E> 0x2d6db96650aa @  522 : 2d f7 16 8a       GetNamedProperty r3, [22], [138]
         0x2d6db96650ae @  526 : c2                Star2 
         0x2d6db96650af @  527 : 80 23 09 02       CreateClosure [35], [9], #2
         0x2d6db96650b3 @  531 : c0                Star4 
 2647 E> 0x2d6db96650b4 @  532 : 5e f8 f7 f6 8c    CallProperty1 r2, r3, r4, [140]
 2632 E> 0x2d6db96650b9 @  537 : 32 f9 21 8e       SetNamedProperty r1, [33], [142]
 2725 S> 0x2d6db96650bd @  541 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96650bf @  543 : c3                Star1 
         0x2d6db96650c0 @  544 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96650c2 @  546 : c1                Star3 
 2745 E> 0x2d6db96650c3 @  547 : 2d f7 21 90       GetNamedProperty r3, [33], [144]
         0x2d6db96650c7 @  551 : c1                Star3 
 2753 E> 0x2d6db96650c8 @  552 : 2d f7 16 92       GetNamedProperty r3, [22], [146]
         0x2d6db96650cc @  556 : c2                Star2 
         0x2d6db96650cd @  557 : 80 24 0a 02       CreateClosure [36], [10], #2
         0x2d6db96650d1 @  561 : c0                Star4 
 2753 E> 0x2d6db96650d2 @  562 : 5e f8 f7 f6 94    CallProperty1 r2, r3, r4, [148]
 2738 E> 0x2d6db96650d7 @  567 : 32 f9 21 96       SetNamedProperty r1, [33], [150]
 2802 S> 0x2d6db96650db @  571 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96650dd @  573 : c3                Star1 
         0x2d6db96650de @  574 : 2d f9 01 98       GetNamedProperty r1, [1], [152]
         0x2d6db96650e2 @  578 : 51 9a             Inc [154]
 2818 E> 0x2d6db96650e4 @  580 : 32 f9 01 9b       SetNamedProperty r1, [1], [155]
 2830 S> 0x2d6db96650e8 @  584 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96650ea @  586 : c2                Star2 
 2835 E> 0x2d6db96650eb @  587 : 2d f8 25 9d       GetNamedProperty r2, [37], [157]
         0x2d6db96650ef @  591 : c2                Star2 
 2842 E> 0x2d6db96650f0 @  592 : 2d f8 26 9f       GetNamedProperty r2, [38], [159]
         0x2d6db96650f4 @  596 : c3                Star1 
 2842 E> 0x2d6db96650f5 @  597 : 5d f9 f8 a1       CallProperty0 r1, r2, [161]
         0x2d6db96650f9 @  601 : 0e                LdaUndefined 
 2856 S> 0x2d6db96650fa @  602 : a9                Return 
Constant pool (size = 39)
0x2d6db9665101: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 39
           0: 0x2d6db9665249 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2d6db96646f1 <String[11]: #tickCounter>
           2: 0x2d6db96642e9 <String[32]: #getCurrentGenerationDelayInTicks>
           3: 0x1b795168cbb9 <String[7]: #options>
           4: 0x2d6db96652a9 <String[31]: #CHEAT_DISABLE_METEOR_GENERATION>
           5: 0x2d6db9664711 <String[7]: #meteors>
           6: 0x1b7951689551 <String[4]: #push>
           7: 0x2d6db9663ea1 <String[8]: #meteor_1>
           8: 0x2d6db96652f1 <String[6]: #Meteor>
           9: 0x2d6db9665309 <String[5]: #Build>
          10: 0x2d6db9663ef9 <String[8]: #vector_1>
          11: 0x2d6db9665321 <String[6]: #Vector>
          12: 0x2d6db9664781 <String[5]: #width>
          13: 0x1b79516a8a51 <String[3]: #rng>
          14: 0x1b795169aba1 <String[6]: #random>
          15: 0x2d6db9664799 <String[6]: #height>
          16: 0x2d6db9665351 <String[12]: #fromPolarDeg>
          17: 0x2d6db9665371 <String[28]: #METEOR_GENERATION_CONE_ANGLE>
          18: 0x2d6db9663eb9 <String[14]: #meteor_infos_1>
          19: 0x2d6db96653a1 <String[10]: #MeteorType>
          20: 0x2d6db96653c1 <String[5]: #Large>
          21: 0x2d6db96653d9 <String[34]: #CHEAT_GENERATE_PREDICTABLE_METEORS>
          22: 0x1b7951689f61 <String[6]: #filter>
          23: 0x2d6db9665429 <SharedFunctionInfo>
          24: 0x1b795168a021 <String[7]: #forEach>
          25: 0x2d6db9665581 <SharedFunctionInfo>
          26: 0x2d6db9664319 <String[23]: #findAndHandleCollisions>
          27: 0x2d6db9665779 <SharedFunctionInfo>
          28: 0x2d6db9665899 <SharedFunctionInfo>
          29: 0x2d6db9665a01 <SharedFunctionInfo>
          30: 0x2d6db9665b41 <SharedFunctionInfo>
          31: 0x2d6db9665c71 <SharedFunctionInfo>
          32: 0x2d6db9665d99 <SharedFunctionInfo>
          33: 0x2d6db9664729 <String[7]: #rockets>
          34: 0x2d6db9665ec9 <SharedFunctionInfo>
          35: 0x2d6db9665fe9 <SharedFunctionInfo>
          36: 0x2d6db9666139 <SharedFunctionInfo>
          37: 0x2d6db96649e1 <String[6]: #cannon>
          38: 0x1b7951683f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 239)
0x2d6db9666249 <ByteArray[239]>
0x2d6db9665429 points to: [0x2d6db9665498]
=== [0x2d6db9665498] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1832 S> 0x2d6db9665498 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db966549c @    4 : c4                Star0 
         0x2d6db966549d @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db966549f @    7 : c3                Star1 
 1845 E> 0x2d6db96654a0 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
 1837 E> 0x2d6db96654a4 @   12 : 6b fa 04          TestEqual r0, [4]
 1856 S> 0x2d6db96654a7 @   15 : a9                Return 
Constant pool (size = 2)
0x2d6db96654a9: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 2
           0: 0x2d6db96654c9 <String[4]: #tick>
           1: 0x2d6db96646f1 <String[11]: #tickCounter>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2d6db96654e1 <ByteArray[11]>
0x2d6db9665581 points to: [0x2d6db96655f0]
=== [0x2d6db96655f0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1892 S> 0x2d6db96655f0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96655f2 @    2 : c3                Star1 
 1897 E> 0x2d6db96655f3 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x2d6db96655f7 @    7 : c3                Star1 
 1905 E> 0x2d6db96655f8 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2d6db96655fc @   12 : c4                Star0 
         0x2d6db96655fd @   13 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1910 E> 0x2d6db9665601 @   17 : aa 02             ThrowReferenceErrorIfHole [2]
         0x2d6db9665603 @   19 : c1                Star3 
 1919 E> 0x2d6db9665604 @   20 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x2d6db9665608 @   24 : c1                Star3 
 1926 E> 0x2d6db9665609 @   25 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x2d6db966560d @   29 : c2                Star2 
 1944 E> 0x2d6db966560e @   30 : 2d 03 05 08       GetNamedProperty a0, [5], [8]
         0x2d6db9665612 @   34 : c0                Star4 
 1961 E> 0x2d6db9665613 @   35 : 2d 03 06 0a       GetNamedProperty a0, [6], [10]
         0x2d6db9665617 @   39 : bf                Star5 
 1978 E> 0x2d6db9665618 @   40 : 2d 03 07 0c       GetNamedProperty a0, [7], [12]
         0x2d6db966561c @   44 : be                Star6 
 1926 E> 0x2d6db966561d @   45 : 5c f8 f7 04 0e    CallProperty r2, r3-r6, [14]
         0x2d6db9665622 @   50 : c2                Star2 
 1905 E> 0x2d6db9665623 @   51 : 5e fa f9 f8 10    CallProperty1 r0, r1, r2, [16]
         0x2d6db9665628 @   56 : 0e                LdaUndefined 
 2001 S> 0x2d6db9665629 @   57 : a9                Return 
Constant pool (size = 8)
0x2d6db9665631: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 8
           0: 0x2d6db9664711 <String[7]: #meteors>
           1: 0x1b7951689551 <String[4]: #push>
           2: 0x2d6db9663ea1 <String[8]: #meteor_1>
           3: 0x2d6db96652f1 <String[6]: #Meteor>
           4: 0x2d6db9665681 <String[10]: #BuildDebug>
           5: 0x27ee06cc5c19 <String[8]: #position>
           6: 0x2d6db96656a1 <String[8]: #velocity>
           7: 0x2d6db96656b9 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 29)
0x2d6db96656d9 <ByteArray[29]>
0x2d6db9665779 points to: [0x2d6db96657e8]
=== [0x2d6db96657e8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2093 S> 0x2d6db96657e8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db96657ec @    4 : c4                Star0 
 2093 E> 0x2d6db96657ed @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 2101 S> 0x2d6db96657f1 @    9 : a9                Return 
Constant pool (size = 1)
0x2d6db96657f9: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x1b7951683f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2d6db9665811 <ByteArray[9]>
0x2d6db9665899 points to: [0x2d6db9665908]
=== [0x2d6db9665908] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2166 S> 0x2d6db9665908 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db966590c @    4 : c4                Star0 
 2175 E> 0x2d6db966590d @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2d6db9665911 @    9 : c4                Star0 
         0x2d6db9665912 @   10 : 0c                LdaZero 
 2177 E> 0x2d6db9665913 @   11 : 6e fa 04          TestGreaterThan r0, [4]
         0x2d6db9665916 @   14 : 99 16             JumpIfFalse [22] (0x2d6db966592c @ 36)
 2191 E> 0x2d6db9665918 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db966591c @   20 : c4                Star0 
 2200 E> 0x2d6db966591d @   21 : 2d fa 01 05       GetNamedProperty r0, [1], [5]
         0x2d6db9665921 @   25 : c4                Star0 
         0x2d6db9665922 @   26 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9665924 @   28 : c3                Star1 
 2209 E> 0x2d6db9665925 @   29 : 2d f9 02 07       GetNamedProperty r1, [2], [7]
 2202 E> 0x2d6db9665929 @   33 : 6d fa 09          TestLessThan r0, [9]
 2215 S> 0x2d6db966592c @   36 : a9                Return 
Constant pool (size = 3)
0x2d6db9665931: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 3
           0: 0x27ee06cc5c19 <String[8]: #position>
           1: 0x1b7951698ae1 <String[1]: #y>
           2: 0x2d6db9664799 <String[6]: #height>
Handler Table (size = 0)
Source Position Table (size = 19)
0x2d6db9665971 <ByteArray[19]>
0x2d6db9665a01 points to: [0x2d6db9665a70]
=== [0x2d6db9665a70] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2323 S> 0x2d6db9665a70 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9665a74 @    4 : c4                Star0 
 2332 E> 0x2d6db9665a75 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2d6db9665a79 @    9 : c4                Star0 
         0x2d6db9665a7a @   10 : 0c                LdaZero 
 2334 E> 0x2d6db9665a7b @   11 : 6f fa 04          TestLessThanOrEqual r0, [4]
 2338 S> 0x2d6db9665a7e @   14 : a9                Return 
Constant pool (size = 2)
0x2d6db9665a81: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 2
           0: 0x27ee06cc5c19 <String[8]: #position>
           1: 0x1b7951698ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2d6db9665ab9 <ByteArray[11]>
0x2d6db9665b41 points to: [0x2d6db9665bb0]
=== [0x2d6db9665bb0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2379 S> 0x2d6db9665bb0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9665bb2 @    2 : c4                Star0 
         0x2d6db9665bb3 @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
         0x2d6db9665bb7 @    7 : c3                Star1 
 2389 E> 0x2d6db9665bb8 @    8 : 2d 03 01 03       GetNamedProperty a0, [1], [3]
         0x2d6db9665bbc @   12 : 3a f9 02          Sub r1, [2]
         0x2d6db9665bbf @   15 : c2                Star2 
 2379 E> 0x2d6db9665bc0 @   16 : 32 fa 00 05       SetNamedProperty r0, [0], [5]
         0x2d6db9665bc4 @   20 : 0b f8             Ldar r2
 2393 S> 0x2d6db9665bc6 @   22 : a9                Return 
Constant pool (size = 2)
0x2d6db9665bc9: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 2
           0: 0x2d6db96647d1 <String[13]: #_healthPoints>
           1: 0x27ee06cca111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2d6db9665be9 <ByteArray[11]>
0x2d6db9665c71 points to: [0x2d6db9665ce0]
=== [0x2d6db9665ce0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2458 S> 0x2d6db9665ce0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9665ce4 @    4 : c4                Star0 
 2467 E> 0x2d6db9665ce5 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2d6db9665ce9 @    9 : c4                Star0 
         0x2d6db9665cea @   10 : 0c                LdaZero 
 2469 E> 0x2d6db9665ceb @   11 : 6e fa 04          TestGreaterThan r0, [4]
 2472 S> 0x2d6db9665cee @   14 : a9                Return 
Constant pool (size = 2)
0x2d6db9665cf1: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 2
           0: 0x27ee06cc5c19 <String[8]: #position>
           1: 0x1b7951698ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2d6db9665d11 <ByteArray[11]>
0x2d6db9665d99 points to: [0x2d6db9665e08]
=== [0x2d6db9665e08] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2538 S> 0x2d6db9665e08 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9665e0c @    4 : 55                ToBooleanLogicalNot 
 2549 S> 0x2d6db9665e0d @    5 : a9                Return 
Constant pool (size = 1)
0x2d6db9665e11: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x1b795168b511 <String[11]: #isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2d6db9665e49 <ByteArray[7]>
0x2d6db9665ec9 points to: [0x2d6db9665f38]
=== [0x2d6db9665f38] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2600 S> 0x2d6db9665f38 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9665f3c @    4 : c4                Star0 
 2600 E> 0x2d6db9665f3d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 2608 S> 0x2d6db9665f41 @    9 : a9                Return 
Constant pool (size = 1)
0x2d6db9665f49: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x1b7951683f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2d6db9665f61 <ByteArray[9]>
0x2d6db9665fe9 points to: [0x2d6db9666058]
=== [0x2d6db9666058] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2673 S> 0x2d6db9666058 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db966605c @    4 : c4                Star0 
 2682 E> 0x2d6db966605d @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2d6db9666061 @    9 : c4                Star0 
         0x2d6db9666062 @   10 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9666064 @   12 : c3                Star1 
 2691 E> 0x2d6db9666065 @   13 : 2d f9 02 05       GetNamedProperty r1, [2], [5]
         0x2d6db9666069 @   17 : c3                Star1 
 2706 E> 0x2d6db966606a @   18 : 2d 03 03 08       GetNamedProperty a0, [3], [8]
 2711 E> 0x2d6db966606e @   22 : 47 02 07          MulSmi [2], [7]
 2697 E> 0x2d6db9666071 @   25 : 39 f9 04          Add r1, [4]
 2684 E> 0x2d6db9666074 @   28 : 6d fa 0a          TestLessThan r0, [10]
 2714 S> 0x2d6db9666077 @   31 : a9                Return 
Constant pool (size = 4)
0x2d6db9666079: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 4
           0: 0x27ee06cc5c19 <String[8]: #position>
           1: 0x1b7951698ac9 <String[1]: #x>
           2: 0x2d6db9664781 <String[5]: #width>
           3: 0x27ee06cca111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 19)
0x2d6db96660a9 <ByteArray[19]>
0x2d6db9666139 points to: [0x2d6db96661a8]
=== [0x2d6db96661a8] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2780 S> 0x2d6db96661a8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db96661ac @    4 : 55                ToBooleanLogicalNot 
 2791 S> 0x2d6db96661ad @    5 : a9                Return 
Constant pool (size = 1)
0x2d6db96661b1: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x1b795168b511 <String[11]: #isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2d6db96661c9 <ByteArray[7]>
0x2d6db96663c9 points to: [0x2d6db9666438]
=== [0x2d6db9666438] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2938 S> 0x2d6db9666438 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2d6db966643c @    4 : c1                Star3 
 2946 E> 0x2d6db966643d @    5 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x2d6db9666441 @    9 : c1                Star3 
 2915 S> 0x2d6db9666442 @   10 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x2d6db9666446 @   14 : c4                Star0 
 2922 S> 0x2d6db9666447 @   15 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x2d6db966644b @   19 : c3                Star1 
 3018 S> 0x2d6db966644c @   20 : 2d 02 04 09       GetNamedProperty <this>, [4], [9]
         0x2d6db9666450 @   24 : c1                Star3 
 3037 E> 0x2d6db9666451 @   25 : 2d 02 00 0b       GetNamedProperty <this>, [0], [11]
         0x2d6db9666455 @   29 : c0                Star4 
 3045 E> 0x2d6db9666456 @   30 : 2d f6 05 0d       GetNamedProperty r4, [5], [13]
 3030 E> 0x2d6db966645a @   34 : 3c f7 08          Div r3, [8]
         0x2d6db966645d @   37 : c2                Star2 
 3065 S> 0x2d6db966645e @   38 : 21 06 0f          LdaGlobal [6], [15]
         0x2d6db9666461 @   41 : c0                Star4 
 3077 E> 0x2d6db9666462 @   42 : 2d f6 07 11       GetNamedProperty r4, [7], [17]
         0x2d6db9666466 @   46 : c1                Star3 
         0x2d6db9666467 @   47 : 0b f9             Ldar r1
 3100 E> 0x2d6db9666469 @   49 : 3a fa 15          Sub r0, [21]
         0x2d6db966646c @   52 : be                Star6 
         0x2d6db966646d @   53 : 0d 01             LdaSmi [1]
         0x2d6db966646f @   55 : bd                Star7 
         0x2d6db9666470 @   56 : 0b f8             Ldar r2
 3115 E> 0x2d6db9666472 @   58 : 3a f3 16          Sub r7, [22]
 3110 E> 0x2d6db9666475 @   61 : 3b f4 14          Mul r6, [20]
 3090 E> 0x2d6db9666478 @   64 : 39 f9 13          Add r1, [19]
         0x2d6db966647b @   67 : bf                Star5 
 3077 E> 0x2d6db966647c @   68 : 5e f7 f6 f5 17    CallProperty1 r3, r4, r5, [23]
 3137 S> 0x2d6db9666481 @   73 : a9                Return 
Constant pool (size = 8)
0x2d6db9666489: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 8
           0: 0x1b795168cbb9 <String[7]: #options>
           1: 0x2d6db96664d9 <String[32]: #METEOR_GENERATION_DELAY_IN_TICKS>
           2: 0x1b795169a231 <String[5]: #start>
           3: 0x1b795168c4c1 <String[6]: #finish>
           4: 0x2d6db96646f1 <String[11]: #tickCounter>
           5: 0x2d6db9666539 <String[10]: #TICK_COUNT>
           6: 0x1b795169a991 <String[4]: #Math>
           7: 0x1b795169abb9 <String[5]: #round>
Handler Table (size = 0)
Source Position Table (size = 39)
0x2d6db9666589 <ByteArray[39]>
0x2d6db9666639 points to: [0x2d6db96666a8]
=== [0x2d6db96666a8] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3171 E> 0x2d6db96666a8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2d6db96666ab @    3 : 1a f9             PushContext r1
         0x2d6db96666ad @    5 : 0b 02             Ldar <this>
         0x2d6db96666af @    7 : 25 02             StaCurrentContextSlot [2]
 3184 S> 0x2d6db96666b1 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96666b3 @   11 : c2                Star2 
         0x2d6db96666b4 @   12 : 7b 00             CreateEmptyArrayLiteral [0]
 3200 E> 0x2d6db96666b6 @   14 : 32 f8 01 01       SetNamedProperty r2, [1], [1]
 3245 S> 0x2d6db96666ba @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96666bc @   20 : c1                Star3 
 3250 E> 0x2d6db96666bd @   21 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0x2d6db96666c1 @   25 : c1                Star3 
 3258 E> 0x2d6db96666c2 @   26 : 2d f7 03 05       GetNamedProperty r3, [3], [5]
         0x2d6db96666c6 @   30 : c2                Star2 
         0x2d6db96666c7 @   31 : 80 04 00 02       CreateClosure [4], [0], #2
         0x2d6db96666cb @   35 : c0                Star4 
 3258 E> 0x2d6db96666cc @   36 : 5e f8 f7 f6 07    CallProperty1 r2, r3, r4, [7]
         0x2d6db96666d1 @   41 : c4                Star0 
 3873 S> 0x2d6db96666d2 @   42 : 2d fa 05 09       GetNamedProperty r0, [5], [9]
         0x2d6db96666d6 @   46 : c2                Star2 
         0x2d6db96666d7 @   47 : 80 06 01 02       CreateClosure [6], [1], #2
         0x2d6db96666db @   51 : c0                Star4 
 3873 E> 0x2d6db96666dc @   52 : 5e f8 fa f6 0b    CallProperty1 r2, r0, r4, [11]
 3931 S> 0x2d6db96666e1 @   57 : 2d fa 07 0d       GetNamedProperty r0, [7], [13]
         0x2d6db96666e5 @   61 : c2                Star2 
         0x2d6db96666e6 @   62 : 80 08 02 02       CreateClosure [8], [2], #2
         0x2d6db96666ea @   66 : c0                Star4 
 3931 E> 0x2d6db96666eb @   67 : 5e f8 fa f6 0f    CallProperty1 r2, r0, r4, [15]
         0x2d6db96666f0 @   72 : 0e                LdaUndefined 
 3992 S> 0x2d6db96666f1 @   73 : a9                Return 
Constant pool (size = 9)
0x2d6db96666f9: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 9
           0: 0x2d6db9666751 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2d6db9664741 <String[10]: #collisions>
           2: 0x2d6db9664729 <String[7]: #rockets>
           3: 0x1b795168a069 <String[7]: #flatMap>
           4: 0x2d6db96667c9 <SharedFunctionInfo>
           5: 0x1b795168eb61 <String[4]: #sort>
           6: 0x2d6db9666bd1 <SharedFunctionInfo>
           7: 0x1b795168a021 <String[7]: #forEach>
           8: 0x2d6db9666d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 31)
0x2d6db9666e29 <ByteArray[31]>
0x2d6db96667c9 points to: [0x2d6db9666838]
=== [0x2d6db9666838] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3266 E> 0x2d6db9666838 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2d6db966683b @    3 : 1a fa             PushContext r0
         0x2d6db966683d @    5 : 0b 03             Ldar a0
         0x2d6db966683f @    7 : 25 02             StaCurrentContextSlot [2]
 3292 S> 0x2d6db9666841 @    9 : 15 fa 02 00       LdaImmutableContextSlot r0, [2], [0]
         0x2d6db9666845 @   13 : c2                Star2 
 3304 E> 0x2d6db9666846 @   14 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x2d6db966684a @   18 : c2                Star2 
 3329 E> 0x2d6db966684b @   19 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2d6db966684f @   23 : c3                Star1 
         0x2d6db9666850 @   24 : 80 03 00 02       CreateClosure [3], [0], #2
         0x2d6db9666854 @   28 : c1                Star3 
         0x2d6db9666855 @   29 : 7b 04             CreateEmptyArrayLiteral [4]
         0x2d6db9666857 @   31 : c0                Star4 
 3329 E> 0x2d6db9666858 @   32 : 5f f9 f8 f7 f6 05 CallProperty2 r1, r2, r3, r4, [5]
 3790 S> 0x2d6db966685e @   38 : a9                Return 
Constant pool (size = 4)
0x2d6db9666861: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 4
           0: 0x2d6db9666891 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2d6db9664711 <String[7]: #meteors>
           2: 0x1b795168a039 <String[6]: #reduce>
           3: 0x2d6db9666921 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 16)
0x2d6db9666b81 <ByteArray[16]>
0x2d6db9666921 points to: [0x2d6db9666990]
=== [0x2d6db9666990] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 3396 S> 0x2d6db9666990 @    0 : 15 ff 06 02       LdaImmutableContextSlot <context>, [6], [2]
         0x2d6db9666994 @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2d6db9666996 @    6 : c2                Star2 
 3409 E> 0x2d6db9666997 @    7 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x2d6db966699b @   11 : c2                Star2 
 3420 E> 0x2d6db966699c @   12 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2d6db96669a0 @   16 : c3                Star1 
         0x2d6db96669a1 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96669a3 @   19 : c1                Star3 
 3420 E> 0x2d6db96669a4 @   20 : 5f f9 f8 f7 04 04 CallProperty2 r1, r2, r3, a1, [4]
         0x2d6db96669aa @   26 : c4                Star0 
 3485 S> 0x2d6db96669ab @   27 : 9a 2b             JumpIfNull [43] (0x2d6db96669d6 @ 70)
 3549 S> 0x2d6db96669ad @   29 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
         0x2d6db96669b1 @   33 : c3                Star1 
         0x2d6db96669b2 @   34 : 79 04 08 04       CreateArrayLiteral [4], [8], #4
         0x2d6db96669b6 @   38 : c0                Star4 
         0x2d6db96669b7 @   39 : 0c                LdaZero 
         0x2d6db96669b8 @   40 : c1                Star3 
 3590 E> 0x2d6db96669b9 @   41 : 7e fa 29 09       CloneObject r0, #41, [9]
         0x2d6db96669bd @   45 : bf                Star5 
         0x2d6db96669be @   46 : 0b 04             Ldar a1
 3637 E> 0x2d6db96669c0 @   48 : 33 f5 05 0b       DefineNamedOwnProperty r5, [5], [11]
         0x2d6db96669c4 @   52 : 17 02             LdaImmutableCurrentContextSlot [2]
 3681 E> 0x2d6db96669c6 @   54 : 33 f5 06 0d       DefineNamedOwnProperty r5, [6], [13]
         0x2d6db96669ca @   58 : 0b f5             Ldar r5
         0x2d6db96669cc @   60 : 36 f6 f7 0f       StaInArrayLiteral r4, r3, [15]
 3549 E> 0x2d6db96669d0 @   64 : 5e f9 03 f6 11    CallProperty1 r1, a0, r4, [17]
 3717 S> 0x2d6db96669d5 @   69 : a9                Return 
 3752 S> 0x2d6db96669d6 @   70 : 0b 03             Ldar a0
 3770 S> 0x2d6db96669d8 @   72 : a9                Return 
Constant pool (size = 7)
0x2d6db96669e1: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 7
           0: 0x2d6db9663ed9 <String[12]: #projectile_1>
           1: 0x2d6db9666a29 <String[10]: #Projectile>
           2: 0x2d6db9666a49 <String[31]: #checkCollisionDuringCurrentTick>
           3: 0x1b79516872e9 <String[6]: #concat>
           4: 0x2d6db9666a91 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2d6db9666aa9 <FixedArray[1]>>
           5: 0x2d6db9666ac1 <String[6]: #meteor>
           6: 0x2d6db96668f1 <String[6]: #rocket>
Handler Table (size = 0)
Source Position Table (size = 38)
0x2d6db9666ad9 <ByteArray[38]>
0x2d6db9666bd1 points to: [0x2d6db9666c40]
=== [0x2d6db9666c40] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 3890 S> 0x2d6db9666c40 @    0 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x2d6db9666c44 @    4 : c4                Star0 
 3896 E> 0x2d6db9666c45 @    5 : 2d 04 00 03       GetNamedProperty a1, [0], [3]
 3892 E> 0x2d6db9666c49 @    9 : 3a fa 00          Sub r0, [0]
 3897 S> 0x2d6db9666c4c @   12 : a9                Return 
Constant pool (size = 1)
0x2d6db9666c51: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x2d6db9666c69 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2d6db9666c81 <ByteArray[11]>
0x2d6db9666d09 points to: [0x2d6db9666d78]
=== [0x2d6db9666d78] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3959 S> 0x2d6db9666d78 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db9666d7a @    2 : c3                Star1 
 3959 E> 0x2d6db9666d7b @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x2d6db9666d7f @    7 : c4                Star0 
 3959 E> 0x2d6db9666d80 @    8 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
 3985 S> 0x2d6db9666d85 @   13 : a9                Return 
Constant pool (size = 1)
0x2d6db9666d89: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x2d6db9664341 <String[15]: #handleCollision>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2d6db9666da1 <ByteArray[11]>
0x2d6db9666e79 points to: [0x2d6db9666ee8]
=== [0x2d6db9666ee8] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4049 S> 0x2d6db9666ee8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9666eec @    4 : c4                Star0 
 4056 E> 0x2d6db9666eed @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2d6db9666ef1 @    9 : 96 0d             JumpIfToBooleanTrue [13] (0x2d6db9666efe @ 22)
 4081 E> 0x2d6db9666ef3 @   11 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x2d6db9666ef7 @   15 : c4                Star0 
 4088 E> 0x2d6db9666ef8 @   16 : 2d fa 01 06       GetNamedProperty r0, [1], [6]
         0x2d6db9666efc @   20 : 97 04             JumpIfToBooleanFalse [4] (0x2d6db9666f00 @ 24)
 4113 S> 0x2d6db9666efe @   22 : 0e                LdaUndefined 
 4120 S> 0x2d6db9666eff @   23 : a9                Return 
 4134 S> 0x2d6db9666f00 @   24 : 2d 02 03 08       GetNamedProperty <this>, [3], [8]
         0x2d6db9666f04 @   28 : c3                Star1 
 4145 E> 0x2d6db9666f05 @   29 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x2d6db9666f09 @   33 : c4                Star0 
 4145 E> 0x2d6db9666f0a @   34 : 5e fa f9 03 0c    CallProperty1 r0, r1, a0, [12]
 4180 S> 0x2d6db9666f0f @   39 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9666f13 @   43 : c3                Star1 
 4187 E> 0x2d6db9666f14 @   44 : 2d f9 05 0e       GetNamedProperty r1, [5], [14]
         0x2d6db9666f18 @   48 : c4                Star0 
 4187 E> 0x2d6db9666f19 @   49 : 5d fa f9 10       CallProperty0 r0, r1, [16]
 4216 S> 0x2d6db9666f1d @   53 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x2d6db9666f21 @   57 : c3                Star1 
 4223 E> 0x2d6db9666f22 @   58 : 2d f9 05 12       GetNamedProperty r1, [5], [18]
         0x2d6db9666f26 @   62 : c4                Star0 
 4223 E> 0x2d6db9666f27 @   63 : 5d fa f9 14       CallProperty0 r0, r1, [20]
 4247 S> 0x2d6db9666f2b @   67 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x2d6db9666f2f @   71 : c4                Star0 
 4247 E> 0x2d6db9666f30 @   72 : 5e fa 02 03 18    CallProperty1 r0, <this>, a0, [24]
 4285 S> 0x2d6db9666f35 @   77 : 2d 02 07 1a       GetNamedProperty <this>, [7], [26]
         0x2d6db9666f39 @   81 : c3                Star1 
 4305 E> 0x2d6db9666f3a @   82 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x2d6db9666f3e @   86 : c2                Star2 
 4313 E> 0x2d6db9666f3f @   87 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x2d6db9666f43 @   91 : c2                Star2 
 4342 E> 0x2d6db9666f44 @   92 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9666f48 @   96 : c1                Star3 
 4349 E> 0x2d6db9666f49 @   97 : 2d f7 0a 22       GetNamedProperty r3, [10], [34]
 4330 E> 0x2d6db9666f4d @  101 : 3b f8 1d          Mul r2, [29]
         0x2d6db9666f50 @  104 : 39 f9 1c          Add r1, [28]
 4297 E> 0x2d6db9666f53 @  107 : 32 02 07 24       SetNamedProperty <this>, [7], [36]
         0x2d6db9666f57 @  111 : 0e                LdaUndefined 
 4360 S> 0x2d6db9666f58 @  112 : a9                Return 
Constant pool (size = 11)
0x2d6db9666f61: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 11
           0: 0x2d6db9666ac1 <String[6]: #meteor>
           1: 0x1b795168b511 <String[11]: #isDestroyed>
           2: 0x2d6db96668f1 <String[6]: #rocket>
           3: 0x2d6db9664741 <String[10]: #collisions>
           4: 0x1b7951689551 <String[4]: #push>
           5: 0x1b795168ba19 <String[7]: #destroy>
           6: 0x2d6db9664361 <String[17]: #handleMeteorSplit>
           7: 0x2d6db96647f1 <String[6]: #_score>
           8: 0x1b795168cbb9 <String[7]: #options>
           9: 0x2d6db9666fe1 <String[16]: #SCORE_MULTIPLIER>
          10: 0x2d6db9664491 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 58)
0x2d6db9667001 <ByteArray[58]>
0x2d6db96670d1 points to: [0x2d6db9667140]
=== [0x2d6db9667140] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 4383 E> 0x2d6db9667140 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2d6db9667143 @    3 : 1a fa             PushContext r0
         0x2d6db9667145 @    5 : 0b 02             Ldar <this>
         0x2d6db9667147 @    7 : 25 02             StaCurrentContextSlot [2]
 4415 S> 0x2d6db9667149 @    9 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
         0x2d6db966714d @   13 : c1                Star3 
 4422 E> 0x2d6db966714e @   14 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x2d6db9667152 @   18 : c2                Star2 
 4457 E> 0x2d6db9667153 @   19 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x2d6db9667157 @   23 : c0                Star4 
 4422 E> 0x2d6db9667158 @   24 : 5e f8 f7 f6 06    CallProperty1 r2, r3, r4, [6]
         0x2d6db966715d @   29 : c2                Star2 
 4470 E> 0x2d6db966715e @   30 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x2d6db9667162 @   34 : c3                Star1 
         0x2d6db9667163 @   35 : 80 05 00 02       CreateClosure [5], [0], #2
         0x2d6db9667167 @   39 : c1                Star3 
 4471 E> 0x2d6db9667168 @   40 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
         0x2d6db966716d @   45 : 0e                LdaUndefined 
 4513 S> 0x2d6db966716e @   46 : a9                Return 
Constant pool (size = 6)
0x2d6db9667171: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 6
           0: 0x2d6db96671b1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2d6db9666ac1 <String[6]: #meteor>
           2: 0x2d6db9667211 <String[24]: #getMeteorsAfterExplosion>
           3: 0x2d6db9667239 <String[12]: #intersection>
           4: 0x1b795168a021 <String[7]: #forEach>
           5: 0x2d6db9667259 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 25)
0x2d6db9667389 <ByteArray[25]>
0x2d6db9667259 points to: [0x2d6db96672c8]
=== [0x2d6db96672c8] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4499 S> 0x2d6db96672c8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2d6db96672ca @    2 : c3                Star1 
 4491 E> 0x2d6db96672cb @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x2d6db96672cf @    7 : c3                Star1 
 4499 E> 0x2d6db96672d0 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2d6db96672d4 @   12 : c4                Star0 
 4499 E> 0x2d6db96672d5 @   13 : 5e fa f9 03 04    CallProperty1 r0, r1, a0, [4]
 4506 S> 0x2d6db96672da @   18 : a9                Return 
Constant pool (size = 2)
0x2d6db96672e1: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 2
           0: 0x2d6db9664711 <String[7]: #meteors>
           1: 0x1b7951689551 <String[4]: #push>
Handler Table (size = 0)
Source Position Table (size = 14)
0x2d6db9667301 <ByteArray[14]>
0x2d6db96673d1 points to: [0x2d6db9667440]
=== [0x2d6db9667440] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4564 S> 0x2d6db9667440 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9667444 @    4 : c4                Star0 
         0x2d6db9667445 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4589 E> 0x2d6db9667447 @    7 : aa 01             ThrowReferenceErrorIfHole [1]
         0x2d6db9667449 @    9 : c3                Star1 
 4598 E> 0x2d6db966744a @   10 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x2d6db966744e @   14 : c3                Star1 
 4610 E> 0x2d6db966744f @   15 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x2d6db9667453 @   19 : 6c fa 02          TestEqualStrict r0, [2]
         0x2d6db9667456 @   22 : 98 2a             JumpIfTrue [42] (0x2d6db9667480 @ 64)
         0x2d6db9667458 @   24 : 17 02             LdaImmutableCurrentContextSlot [2]
 4707 E> 0x2d6db966745a @   26 : aa 01             ThrowReferenceErrorIfHole [1]
         0x2d6db966745c @   28 : c3                Star1 
 4716 E> 0x2d6db966745d @   29 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x2d6db9667461 @   33 : c3                Star1 
 4728 E> 0x2d6db9667462 @   34 : 2d f9 04 07       GetNamedProperty r1, [4], [7]
         0x2d6db9667466 @   38 : 6c fa 02          TestEqualStrict r0, [2]
         0x2d6db9667469 @   41 : 98 23             JumpIfTrue [35] (0x2d6db966748c @ 76)
         0x2d6db966746b @   43 : 17 02             LdaImmutableCurrentContextSlot [2]
 4825 E> 0x2d6db966746d @   45 : aa 01             ThrowReferenceErrorIfHole [1]
         0x2d6db966746f @   47 : c3                Star1 
 4834 E> 0x2d6db9667470 @   48 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x2d6db9667474 @   52 : c3                Star1 
 4846 E> 0x2d6db9667475 @   53 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x2d6db9667479 @   57 : 6c fa 02          TestEqualStrict r0, [2]
         0x2d6db966747c @   60 : 98 1c             JumpIfTrue [28] (0x2d6db9667498 @ 88)
         0x2d6db966747e @   62 : 8a 25             Jump [37] (0x2d6db96674a3 @ 99)
 4639 S> 0x2d6db9667480 @   64 : 2d 02 06 0b       GetNamedProperty <this>, [6], [11]
         0x2d6db9667484 @   68 : c3                Star1 
 4639 E> 0x2d6db9667485 @   69 : 5e f9 02 03 0d    CallProperty1 r1, <this>, a0, [13]
 4683 S> 0x2d6db966748a @   74 : 8a 19             Jump [25] (0x2d6db96674a3 @ 99)
 4757 S> 0x2d6db966748c @   76 : 2d 02 07 0f       GetNamedProperty <this>, [7], [15]
         0x2d6db9667490 @   80 : c3                Star1 
 4757 E> 0x2d6db9667491 @   81 : 5e f9 02 03 11    CallProperty1 r1, <this>, a0, [17]
 4801 S> 0x2d6db9667496 @   86 : 8a 0d             Jump [13] (0x2d6db96674a3 @ 99)
 4874 S> 0x2d6db9667498 @   88 : 2d 02 08 13       GetNamedProperty <this>, [8], [19]
         0x2d6db966749c @   92 : c3                Star1 
 4874 E> 0x2d6db966749d @   93 : 5d f9 02 15       CallProperty0 r1, <this>, [21]
 4911 S> 0x2d6db96674a1 @   97 : 8a 02             Jump [2] (0x2d6db96674a3 @ 99)
         0x2d6db96674a3 @   99 : 0e                LdaUndefined 
 4932 S> 0x2d6db96674a4 @  100 : a9                Return 
Constant pool (size = 9)
0x2d6db96674a9: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 9
           0: 0x27ee06cc4469 <String[4]: #type>
           1: 0x2d6db9663e71 <String[8]: #action_1>
           2: 0x2d6db9667501 <String[11]: #ActionTypes>
           3: 0x2d6db9667521 <String[6]: #ROTATE>
           4: 0x2d6db9667539 <String[6]: #LOOKAT>
           5: 0x2d6db9667551 <String[5]: #SHOOT>
           6: 0x2d6db9664419 <String[18]: #handleActionRotate>
           7: 0x2d6db9664441 <String[18]: #handleActionLookAt>
           8: 0x2d6db9664469 <String[17]: #handleActionShoot>
Handler Table (size = 0)
Source Position Table (size = 53)
0x2d6db9667569 <ByteArray[53]>
0x2d6db9667621 points to: [0x2d6db9667690]
=== [0x2d6db9667690] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4998 S> 0x2d6db9667690 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2d6db9667694 @    4 : c3                Star1 
 4998 E> 0x2d6db9667695 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2d6db9667699 @    9 : c3                Star1 
         0x2d6db966769a @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2d6db966769e @   14 : c4                Star0 
 5042 E> 0x2d6db966769f @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2d6db96676a3 @   19 : c2                Star2 
 5049 E> 0x2d6db96676a4 @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x2d6db96676a8 @   24 : c3                Star1 
 5049 E> 0x2d6db96676a9 @   25 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x2d6db96676ad @   29 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5097 E> 0x2d6db96676b1 @   33 : 2d 02 03 0e       GetNamedProperty <this>, [3], [14]
         0x2d6db96676b5 @   37 : c2                Star2 
 5105 E> 0x2d6db96676b6 @   38 : 2d f8 04 10       GetNamedProperty r2, [4], [16]
         0x2d6db96676ba @   42 : c3                Star1 
         0x2d6db96676bb @   43 : 80 05 00 02       CreateClosure [5], [0], #2
         0x2d6db96676bf @   47 : c1                Star3 
 5105 E> 0x2d6db96676c0 @   48 : 5e f9 f8 f7 12    CallProperty1 r1, r2, r3, [18]
         0x2d6db96676c5 @   53 : 33 fa 03 14       DefineNamedOwnProperty r0, [3], [20]
 5167 E> 0x2d6db96676c9 @   57 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x2d6db96676cd @   61 : c2                Star2 
 5175 E> 0x2d6db96676ce @   62 : 2d f8 04 18       GetNamedProperty r2, [4], [24]
         0x2d6db96676d2 @   66 : c3                Star1 
         0x2d6db96676d3 @   67 : 80 07 01 02       CreateClosure [7], [1], #2
         0x2d6db96676d7 @   71 : c1                Star3 
 5175 E> 0x2d6db96676d8 @   72 : 5e f9 f8 f7 1a    CallProperty1 r1, r2, r3, [26]
         0x2d6db96676dd @   77 : 33 fa 06 1c       DefineNamedOwnProperty r0, [6], [28]
 5240 E> 0x2d6db96676e1 @   81 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x2d6db96676e5 @   85 : c2                Star2 
 5251 E> 0x2d6db96676e6 @   86 : 2d f8 04 20       GetNamedProperty r2, [4], [32]
         0x2d6db96676ea @   90 : c3                Star1 
         0x2d6db96676eb @   91 : 80 09 02 02       CreateClosure [9], [2], #2
         0x2d6db96676ef @   95 : c1                Star3 
 5251 E> 0x2d6db96676f0 @   96 : 5e f9 f8 f7 22    CallProperty1 r1, r2, r3, [34]
         0x2d6db96676f5 @  101 : 33 fa 08 24       DefineNamedOwnProperty r0, [8], [36]
         0x2d6db96676f9 @  105 : 0b fa             Ldar r0
 5479 S> 0x2d6db96676fb @  107 : a9                Return 
Constant pool (size = 10)
0x2d6db9667701: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 10
           0: 0x2d6db96643f9 <String[15]: #serializeCommon>
           1: 0x2d6db96649e1 <String[6]: #cannon>
           2: 0x2d6db96643a9 <String[18]: #serializeForViewer>
           3: 0x2d6db9664711 <String[7]: #meteors>
           4: 0x1b7951689ea9 <String[3]: #map>
           5: 0x2d6db9667779 <SharedFunctionInfo>
           6: 0x2d6db9664729 <String[7]: #rockets>
           7: 0x2d6db9667899 <SharedFunctionInfo>
           8: 0x2d6db9664741 <String[10]: #collisions>
           9: 0x2d6db96679b9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 40)
0x2d6db9667bd9 <ByteArray[40]>
0x2d6db9667779 points to: [0x2d6db96677e8]
=== [0x2d6db96677e8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5118 S> 0x2d6db96677e8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db96677ec @    4 : c4                Star0 
 5118 E> 0x2d6db96677ed @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5138 S> 0x2d6db96677f1 @    9 : a9                Return 
Constant pool (size = 1)
0x2d6db96677f9: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x2d6db96643a9 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x2d6db9667811 <ByteArray[10]>
0x2d6db9667899 points to: [0x2d6db9667908]
=== [0x2d6db9667908] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5188 S> 0x2d6db9667908 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db966790c @    4 : c4                Star0 
 5188 E> 0x2d6db966790d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5208 S> 0x2d6db9667911 @    9 : a9                Return 
Constant pool (size = 1)
0x2d6db9667919: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x2d6db96643a9 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x2d6db9667931 <ByteArray[10]>
0x2d6db96679b9 points to: [0x2d6db9667a28]
=== [0x2d6db9667a28] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 5269 S> 0x2d6db9667a28 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x2d6db9667a2c @    4 : c4                Star0 
 5311 E> 0x2d6db9667a2d @    5 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
         0x2d6db9667a31 @    9 : c2                Star2 
 5324 E> 0x2d6db9667a32 @   10 : 2d f8 02 03       GetNamedProperty r2, [2], [3]
         0x2d6db9667a36 @   14 : c3                Star1 
 5324 E> 0x2d6db9667a37 @   15 : 5d f9 f8 05       CallProperty0 r1, r2, [5]
         0x2d6db9667a3b @   19 : 33 fa 01 07       DefineNamedOwnProperty r0, [1], [7]
 5379 E> 0x2d6db9667a3f @   23 : 2d 03 03 09       GetNamedProperty a0, [3], [9]
         0x2d6db9667a43 @   27 : c2                Star2 
 5386 E> 0x2d6db9667a44 @   28 : 2d f8 04 0b       GetNamedProperty r2, [4], [11]
         0x2d6db9667a48 @   32 : c2                Star2 
 5395 E> 0x2d6db9667a49 @   33 : 2d f8 02 0d       GetNamedProperty r2, [2], [13]
         0x2d6db9667a4d @   37 : c3                Star1 
 5395 E> 0x2d6db9667a4e @   38 : 5d f9 f8 0f       CallProperty0 r1, r2, [15]
         0x2d6db9667a52 @   42 : 33 fa 05 11       DefineNamedOwnProperty r0, [5], [17]
 5440 E> 0x2d6db9667a56 @   46 : 2d 03 03 09       GetNamedProperty a0, [3], [9]
         0x2d6db9667a5a @   50 : c3                Star1 
 5447 E> 0x2d6db9667a5b @   51 : 2d f9 06 13       GetNamedProperty r1, [6], [19]
         0x2d6db9667a5f @   55 : 33 fa 06 15       DefineNamedOwnProperty r0, [6], [21]
         0x2d6db9667a63 @   59 : 0b fa             Ldar r0
 5466 S> 0x2d6db9667a65 @   61 : a9                Return 
Constant pool (size = 7)
0x2d6db9667a69: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 7
           0: 0x2d6db9667ab1 <ObjectBoilerplateDescription[7]>
           1: 0x2d6db9667239 <String[12]: #intersection>
           2: 0x1b79516901a9 <String[9]: #serialize>
           3: 0x2d6db9666ac1 <String[6]: #meteor>
           4: 0x27ee06cc5c19 <String[8]: #position>
           5: 0x2d6db9667af9 <String[14]: #meteorPosition>
           6: 0x27ee06cca111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 29)
0x2d6db9667b39 <ByteArray[29]>
Boilerplate at 0x2d6db9667ab1: 
0x2d6db9667ab1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27ee06cc2059 <Map>
 - length: 7
           0: 8
           1: 0x2d6db9667239 <String[12]: #intersection>
           2: 0x27ee06cc1501 <Odd Oddball: uninitialized>
           3: 0x2d6db9667af9 <String[14]: #meteorPosition>
           4: 0x27ee06cc1501 <Odd Oddball: uninitialized>
           5: 0x27ee06cca111 <String[4]: #size>
           6: 0x27ee06cc1501 <Odd Oddball: uninitialized>
0x2d6db9667c91 points to: [0x2d6db9667d00]
=== [0x2d6db9667d00] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5550 S> 0x2d6db9667d00 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2d6db9667d04 @    4 : c3                Star1 
 5550 E> 0x2d6db9667d05 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2d6db9667d09 @    9 : c3                Star1 
         0x2d6db9667d0a @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2d6db9667d0e @   14 : c4                Star0 
 5594 E> 0x2d6db9667d0f @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2d6db9667d13 @   19 : c2                Star2 
 5601 E> 0x2d6db9667d14 @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x2d6db9667d18 @   24 : c3                Star1 
 5601 E> 0x2d6db9667d19 @   25 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x2d6db9667d1d @   29 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5649 E> 0x2d6db9667d21 @   33 : 2d 02 03 0e       GetNamedProperty <this>, [3], [14]
         0x2d6db9667d25 @   37 : c2                Star2 
 5657 E> 0x2d6db9667d26 @   38 : 2d f8 04 10       GetNamedProperty r2, [4], [16]
         0x2d6db9667d2a @   42 : c3                Star1 
         0x2d6db9667d2b @   43 : 80 05 00 02       CreateClosure [5], [0], #2
         0x2d6db9667d2f @   47 : c1                Star3 
 5657 E> 0x2d6db9667d30 @   48 : 5e f9 f8 f7 12    CallProperty1 r1, r2, r3, [18]
         0x2d6db9667d35 @   53 : 33 fa 03 14       DefineNamedOwnProperty r0, [3], [20]
 5719 E> 0x2d6db9667d39 @   57 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x2d6db9667d3d @   61 : c2                Star2 
 5727 E> 0x2d6db9667d3e @   62 : 2d f8 04 18       GetNamedProperty r2, [4], [24]
         0x2d6db9667d42 @   66 : c3                Star1 
         0x2d6db9667d43 @   67 : 80 07 01 02       CreateClosure [7], [1], #2
         0x2d6db9667d47 @   71 : c1                Star3 
 5727 E> 0x2d6db9667d48 @   72 : 5e f9 f8 f7 1a    CallProperty1 r1, r2, r3, [26]
         0x2d6db9667d4d @   77 : 33 fa 06 1c       DefineNamedOwnProperty r0, [6], [28]
         0x2d6db9667d51 @   81 : 0b fa             Ldar r0
 5773 S> 0x2d6db9667d53 @   83 : a9                Return 
Constant pool (size = 8)
0x2d6db9667d59: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 8
           0: 0x2d6db96643f9 <String[15]: #serializeCommon>
           1: 0x2d6db96649e1 <String[6]: #cannon>
           2: 0x2d6db96643d1 <String[18]: #serializeForPlayer>
           3: 0x2d6db9664711 <String[7]: #meteors>
           4: 0x1b7951689ea9 <String[3]: #map>
           5: 0x2d6db9667da9 <SharedFunctionInfo>
           6: 0x2d6db9664729 <String[7]: #rockets>
           7: 0x2d6db9667ec9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 33)
0x2d6db9667fe9 <ByteArray[33]>
0x2d6db9667da9 points to: [0x2d6db9667e18]
=== [0x2d6db9667e18] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5670 S> 0x2d6db9667e18 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9667e1c @    4 : c4                Star0 
 5670 E> 0x2d6db9667e1d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5690 S> 0x2d6db9667e21 @    9 : a9                Return 
Constant pool (size = 1)
0x2d6db9667e29: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x2d6db96643d1 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x2d6db9667e41 <ByteArray[10]>
0x2d6db9667ec9 points to: [0x2d6db9667f38]
=== [0x2d6db9667f38] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5740 S> 0x2d6db9667f38 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9667f3c @    4 : c4                Star0 
 5740 E> 0x2d6db9667f3d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5760 S> 0x2d6db9667f41 @    9 : a9                Return 
Constant pool (size = 1)
0x2d6db9667f49: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x2d6db96643d1 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x2d6db9667f61 <ByteArray[10]>
0x2d6db9668099 points to: [0x2d6db9668108]
=== [0x2d6db9668108] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5812 S> 0x2d6db9668108 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x2d6db966810c @    4 : c4                Star0 
 5845 E> 0x2d6db966810d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x2d6db9668111 @    9 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x2d6db9668115 @   13 : 0b fa             Ldar r0
 5863 S> 0x2d6db9668117 @   15 : a9                Return 
Constant pool (size = 3)
0x2d6db9668119: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 3
           0: 0x2d6db9668141 <ObjectBoilerplateDescription[3]>
           1: 0x2d6db96647f1 <String[6]: #_score>
           2: 0x2d6db9664491 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2d6db9668169 <ByteArray[11]>
Boilerplate at 0x2d6db9668141: 
0x2d6db9668141: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27ee06cc2059 <Map>
 - length: 3
           0: 8
           1: 0x2d6db9664491 <String[5]: #score>
           2: 0x27ee06cc1501 <Odd Oddball: uninitialized>
0x2d6db96681f1 points to: [0x2d6db9668260]
=== [0x2d6db9668260] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 5922 S> 0x2d6db9668260 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9668264 @    4 : 1d                TestUndetectable 
         0x2d6db9668265 @    5 : 98 17             JumpIfTrue [23] (0x2d6db966827c @ 28)
 5939 E> 0x2d6db9668267 @    7 : 21 01 02          LdaGlobal [1], [2]
         0x2d6db966826a @   10 : c3                Star1 
 5946 E> 0x2d6db966826b @   11 : 2d f9 02 04       GetNamedProperty r1, [2], [4]
         0x2d6db966826f @   15 : c4                Star0 
 5959 E> 0x2d6db9668270 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9668274 @   20 : c2                Star2 
 5946 E> 0x2d6db9668275 @   21 : 5e fa f9 f8 06    CallProperty1 r0, r1, r2, [6]
         0x2d6db966827a @   26 : 97 11             JumpIfToBooleanFalse [17] (0x2d6db966828b @ 43)
 5981 S> 0x2d6db966827c @   28 : 21 03 08          LdaGlobal [3], [8]
         0x2d6db966827f @   31 : c4                Star0 
         0x2d6db9668280 @   32 : 13 04             LdaConstant [4]
         0x2d6db9668282 @   34 : c3                Star1 
         0x2d6db9668283 @   35 : 0b fa             Ldar r0
 5987 E> 0x2d6db9668285 @   37 : 69 fa f9 01 0a    Construct r0, r1-r1, [10]
 5981 E> 0x2d6db966828a @   42 : a7                Throw 
 6054 S> 0x2d6db966828b @   43 : 2d 02 05 0c       GetNamedProperty <this>, [5], [12]
         0x2d6db966828f @   47 : c3                Star1 
 6061 E> 0x2d6db9668290 @   48 : 2d f9 06 0e       GetNamedProperty r1, [6], [14]
         0x2d6db9668294 @   52 : c4                Star0 
 6075 E> 0x2d6db9668295 @   53 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9668299 @   57 : c2                Star2 
 6061 E> 0x2d6db966829a @   58 : 5e fa f9 f8 10    CallProperty1 r0, r1, r2, [16]
         0x2d6db966829f @   63 : 0e                LdaUndefined 
 6087 S> 0x2d6db96682a0 @   64 : a9                Return 
Constant pool (size = 7)
0x2d6db96682a9: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 7
           0: 0x2d6db96682f1 <String[5]: #angle>
           1: 0x27ee06cc5a69 <String[6]: #Number>
           2: 0x1b795169bc99 <String[5]: #isNaN>
           3: 0x27ee06cc4de1 <String[5]: #Error>
           4: 0x2d6db9668321 <String[29]: #Invalid value in action.angle>
           5: 0x2d6db96649e1 <String[6]: #cannon>
           6: 0x2d6db9668351 <String[6]: #rotate>
Handler Table (size = 0)
Source Position Table (size = 32)
0x2d6db9668369 <ByteArray[32]>
0x2d6db9668409 points to: [0x2d6db9668478]
=== [0x2d6db9668478] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 6141 S> 0x2d6db9668478 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db966847c @    4 : 1d                TestUndetectable 
         0x2d6db966847d @    5 : 99 11             JumpIfFalse [17] (0x2d6db966848e @ 22)
 6171 S> 0x2d6db966847f @    7 : 21 01 02          LdaGlobal [1], [2]
         0x2d6db9668482 @   10 : c4                Star0 
         0x2d6db9668483 @   11 : 13 02             LdaConstant [2]
         0x2d6db9668485 @   13 : c3                Star1 
         0x2d6db9668486 @   14 : 0b fa             Ldar r0
 6177 E> 0x2d6db9668488 @   16 : 69 fa f9 01 04    Construct r0, r1-r1, [4]
 6171 E> 0x2d6db966848d @   21 : a7                Throw 
 6251 S> 0x2d6db966848e @   22 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9668492 @   26 : c4                Star0 
 6258 E> 0x2d6db9668493 @   27 : 2d fa 03 06       GetNamedProperty r0, [3], [6]
         0x2d6db9668497 @   31 : 1d                TestUndetectable 
         0x2d6db9668498 @   32 : 98 1c             JumpIfTrue [28] (0x2d6db96684b4 @ 60)
 6271 E> 0x2d6db966849a @   34 : 21 04 08          LdaGlobal [4], [8]
         0x2d6db966849d @   37 : c3                Star1 
 6278 E> 0x2d6db966849e @   38 : 2d f9 05 0a       GetNamedProperty r1, [5], [10]
         0x2d6db96684a2 @   42 : c4                Star0 
 6291 E> 0x2d6db96684a3 @   43 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db96684a7 @   47 : c2                Star2 
 6298 E> 0x2d6db96684a8 @   48 : 2d f8 03 0c       GetNamedProperty r2, [3], [12]
         0x2d6db96684ac @   52 : c2                Star2 
 6278 E> 0x2d6db96684ad @   53 : 5e fa f9 f8 0e    CallProperty1 r0, r1, r2, [14]
         0x2d6db96684b2 @   58 : 97 11             JumpIfToBooleanFalse [17] (0x2d6db96684c3 @ 75)
 6316 S> 0x2d6db96684b4 @   60 : 21 01 02          LdaGlobal [1], [2]
         0x2d6db96684b7 @   63 : c4                Star0 
         0x2d6db96684b8 @   64 : 13 06             LdaConstant [6]
         0x2d6db96684ba @   66 : c3                Star1 
         0x2d6db96684bb @   67 : 0b fa             Ldar r0
 6322 E> 0x2d6db96684bd @   69 : 69 fa f9 01 10    Construct r0, r1-r1, [16]
 6316 E> 0x2d6db96684c2 @   74 : a7                Throw 
 6398 S> 0x2d6db96684c3 @   75 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db96684c7 @   79 : c4                Star0 
 6405 E> 0x2d6db96684c8 @   80 : 2d fa 07 12       GetNamedProperty r0, [7], [18]
         0x2d6db96684cc @   84 : 1d                TestUndetectable 
         0x2d6db96684cd @   85 : 98 1c             JumpIfTrue [28] (0x2d6db96684e9 @ 113)
 6418 E> 0x2d6db96684cf @   87 : 21 04 08          LdaGlobal [4], [8]
         0x2d6db96684d2 @   90 : c3                Star1 
 6425 E> 0x2d6db96684d3 @   91 : 2d f9 05 0a       GetNamedProperty r1, [5], [10]
         0x2d6db96684d7 @   95 : c4                Star0 
 6438 E> 0x2d6db96684d8 @   96 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db96684dc @  100 : c2                Star2 
 6445 E> 0x2d6db96684dd @  101 : 2d f8 07 14       GetNamedProperty r2, [7], [20]
         0x2d6db96684e1 @  105 : c2                Star2 
 6425 E> 0x2d6db96684e2 @  106 : 5e fa f9 f8 16    CallProperty1 r0, r1, r2, [22]
         0x2d6db96684e7 @  111 : 97 11             JumpIfToBooleanFalse [17] (0x2d6db96684f8 @ 128)
 6463 S> 0x2d6db96684e9 @  113 : 21 01 02          LdaGlobal [1], [2]
         0x2d6db96684ec @  116 : c4                Star0 
         0x2d6db96684ed @  117 : 13 08             LdaConstant [8]
         0x2d6db96684ef @  119 : c3                Star1 
         0x2d6db96684f0 @  120 : 0b fa             Ldar r0
 6469 E> 0x2d6db96684f2 @  122 : 69 fa f9 01 18    Construct r0, r1-r1, [24]
 6463 E> 0x2d6db96684f7 @  127 : a7                Throw 
 6539 S> 0x2d6db96684f8 @  128 : 2d 02 09 1a       GetNamedProperty <this>, [9], [26]
         0x2d6db96684fc @  132 : c3                Star1 
 6546 E> 0x2d6db96684fd @  133 : 2d f9 0a 1c       GetNamedProperty r1, [10], [28]
         0x2d6db9668501 @  137 : c4                Star0 
         0x2d6db9668502 @  138 : 17 07             LdaImmutableCurrentContextSlot [7]
 6557 E> 0x2d6db9668504 @  140 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x2d6db9668506 @  142 : c2                Star2 
 6566 E> 0x2d6db9668507 @  143 : 2d f8 0c 1e       GetNamedProperty r2, [12], [30]
         0x2d6db966850b @  147 : c2                Star2 
 6580 E> 0x2d6db966850c @  148 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db9668510 @  152 : c1                Star3 
 6587 E> 0x2d6db9668511 @  153 : 2d f7 03 20       GetNamedProperty r3, [3], [32]
         0x2d6db9668515 @  157 : c1                Star3 
 6597 E> 0x2d6db9668516 @  158 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2d6db966851a @  162 : c0                Star4 
 6604 E> 0x2d6db966851b @  163 : 2d f6 07 22       GetNamedProperty r4, [7], [34]
         0x2d6db966851f @  167 : c0                Star4 
         0x2d6db9668520 @  168 : 0b f8             Ldar r2
 6553 E> 0x2d6db9668522 @  170 : 69 f8 f7 02 24    Construct r2, r3-r4, [36]
         0x2d6db9668527 @  175 : c2                Star2 
 6546 E> 0x2d6db9668528 @  176 : 5e fa f9 f8 26    CallProperty1 r0, r1, r2, [38]
         0x2d6db966852d @  181 : 0e                LdaUndefined 
 6613 S> 0x2d6db966852e @  182 : a9                Return 
Constant pool (size = 13)
0x2d6db9668531: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 13
           0: 0x27ee06cc6201 <String[6]: #target>
           1: 0x27ee06cc4de1 <String[5]: #Error>
           2: 0x2d6db96685a9 <String[30]: #Invalid value in action.target>
           3: 0x1b7951698ac9 <String[1]: #x>
           4: 0x27ee06cc5a69 <String[6]: #Number>
           5: 0x1b795169bc99 <String[5]: #isNaN>
           6: 0x2d6db96685d9 <String[32]: #Invalid value in action.target.x>
           7: 0x1b7951698ae1 <String[1]: #y>
           8: 0x2d6db9668609 <String[32]: #Invalid value in action.target.y>
           9: 0x2d6db96649e1 <String[6]: #cannon>
          10: 0x2d6db9668639 <String[6]: #lookAt>
          11: 0x2d6db9663ef9 <String[8]: #vector_1>
          12: 0x2d6db9665321 <String[6]: #Vector>
Handler Table (size = 0)
Source Position Table (size = 81)
0x2d6db9668651 <ByteArray[81]>
0x2d6db9668739 points to: [0x2d6db96687a8]
=== [0x2d6db96687a8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 6654 S> 0x2d6db96687a8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2d6db96687ac @    4 : c3                Star1 
 6662 E> 0x2d6db96687ad @    5 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2d6db96687b1 @    9 : c4                Star0 
 6672 E> 0x2d6db96687b2 @   10 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x2d6db96687b6 @   14 : c1                Star3 
 6679 E> 0x2d6db96687b7 @   15 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x2d6db96687bb @   19 : c2                Star2 
 6679 E> 0x2d6db96687bc @   20 : 5d f8 f7 08       CallProperty0 r2, r3, [8]
         0x2d6db96687c0 @   24 : c2                Star2 
 6662 E> 0x2d6db96687c1 @   25 : 5e fa f9 f8 0a    CallProperty1 r0, r1, r2, [10]
         0x2d6db96687c6 @   30 : 0e                LdaUndefined 
 6700 S> 0x2d6db96687c7 @   31 : a9                Return 
Constant pool (size = 4)
0x2d6db96687c9: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 4
           0: 0x2d6db9664729 <String[7]: #rockets>
           1: 0x1b7951689551 <String[4]: #push>
           2: 0x2d6db96649e1 <String[6]: #cannon>
           3: 0x2d6db96687f9 <String[12]: #launchRocket>
Handler Table (size = 0)
Source Position Table (size = 19)
0x2d6db9668819 <ByteArray[19]>
0x2d6db96688a9 points to: [0x2d6db9668918]
=== [0x2d6db9668918] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 6740 S> 0x2d6db9668918 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 6747 S> 0x2d6db966891c @    4 : a9                Return 
Constant pool (size = 1)
0x2d6db9668921: [FixedArray] in OldSpace
 - map: 0x27ee06cc12e1 <Map>
 - length: 1
           0: 0x2d6db96647f1 <String[6]: #_score>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2d6db9668939 <ByteArray[8]>
<< OUTPUTTING DISASSEMBLY END >>
```