## Annotated
```js
function getMeteorsAfterExplosion(intersection) {  // 0x3dd210ee4ce8
	acc = CreateFunctionContext FUNCTION_SCOPE
	PushContext r0
	ContextSlot[2] = this
	ContextSlot[3] = intersection
	r2 = this.meteorInfos.explodesInto
	if r2 {
		return this.meteorInfos.explodesInto.map(
			makeExplosion)  // 0x3dd210ee4e98
	} else {
		return []
	}
}

function makeExplosion(explode) {  // 0x3dd210ee4e98
	r2 = ContextSlot[3]  // intersection
	r4 = this.velocity.rotate(explode.rotationRad).multiply(0.8)
	r4 = explode.meteorType
	return context.Build(intersection, r3, r4)
}

function Build(pos, vel, typ) {  // 0x3dd210ee4630
	r0 = a0
	vel = vel ?? vector.Vector(0, 0)
	r1 = vel
	typ = typ ?? Large
	r2 = typ
	r8 = Context[2].METEOR_TYPE_INFOS
	r3 = Context[2].METEOR_TYPE_INFOS.get(typ)
	if !r3 {
		throw Error("Unknown meteor '" + typ + "'")
	}
	r4 = r1
	r7 = vel.magnitude
	if vel.magnitude > 0 && r3.speed {
		// Below is +- 20%
		r6 = Math.random() * 0.2 * 2 + 1 - 0.8
		r4 = vel.normalized.multiply(r3.speed * r6)
	}
	r7 = ContextSlot[4]
	return Meteor(pos, r4, typ, r3)
}
```

## Disassembled
```
<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3dd210ee3b70] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3dd210ee3b70 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3dd210ee3b74 @    4 : c4                Star0 
 2243 S> 0x3dd210ee3b75 @    5 : a9                Return 
Constant pool (size = 1)
0x3dd210ee3b79: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 1
           0: 0x3dd210ee3b91 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3dd210ee5359 <ByteArray[7]>
0x3dd210ee3b91 points to: [0x3dd210ee3c00]
=== [0x3dd210ee3c00] DISASSEMBLY ===
Parameter count 6
Register count 14
Frame size 112
OSR urgency: 0
Bytecode age: 0
   10 E> 0x3dd210ee3c00 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x3dd210ee3c03 @    3 : 1a f8             PushContext r2
         0x3dd210ee3c05 @    5 : 10                LdaTheHole 
         0x3dd210ee3c06 @    6 : 25 02             StaCurrentContextSlot [2]
         0x3dd210ee3c08 @    8 : 10                LdaTheHole 
         0x3dd210ee3c09 @    9 : 25 03             StaCurrentContextSlot [3]
   76 S> 0x3dd210ee3c0b @   11 : 21 01 00          LdaGlobal [1], [0]
         0x3dd210ee3c0e @   14 : c0                Star4 
   83 E> 0x3dd210ee3c0f @   15 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x3dd210ee3c13 @   19 : c1                Star3 
         0x3dd210ee3c14 @   20 : 13 03             LdaConstant [3]
         0x3dd210ee3c16 @   22 : be                Star6 
   98 E> 0x3dd210ee3c17 @   23 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x3dd210ee3c1b @   27 : bd                Star7 
         0x3dd210ee3c1c @   28 : 19 03 f5          Mov a0, r5
   83 E> 0x3dd210ee3c1f @   31 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x3dd210ee3c24 @   36 : 0e                LdaUndefined 
  154 E> 0x3dd210ee3c25 @   37 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  187 S> 0x3dd210ee3c29 @   41 : 13 06             LdaConstant [6]
         0x3dd210ee3c2b @   43 : c0                Star4 
  187 E> 0x3dd210ee3c2c @   44 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
  187 E> 0x3dd210ee3c30 @   48 : 25 02             StaCurrentContextSlot [2]
  235 S> 0x3dd210ee3c32 @   50 : 13 07             LdaConstant [7]
         0x3dd210ee3c34 @   52 : c0                Star4 
  235 E> 0x3dd210ee3c35 @   53 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
         0x3dd210ee3c39 @   57 : c4                Star0 
  277 S> 0x3dd210ee3c3a @   58 : 13 08             LdaConstant [8]
         0x3dd210ee3c3c @   60 : c0                Star4 
  277 E> 0x3dd210ee3c3d @   61 : 62 04 f6 0d       CallUndefinedReceiver1 a1, r4, [13]
  277 E> 0x3dd210ee3c41 @   65 : 25 03             StaCurrentContextSlot [3]
         0x3dd210ee3c43 @   67 : 81 09             CreateBlockContext [9]
         0x3dd210ee3c45 @   69 : 1a f7             PushContext r3
         0x3dd210ee3c47 @   71 : 10                LdaTheHole 
         0x3dd210ee3c48 @   72 : 25 04             StaCurrentContextSlot [4]
  332 E> 0x3dd210ee3c4a @   74 : 2d fa 0b 0f       GetNamedProperty r0, [11], [15]
         0x3dd210ee3c4e @   78 : bd                Star7 
         0x3dd210ee3c4f @   79 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x3dd210ee3c53 @   83 : c0                Star4 
         0x3dd210ee3c54 @   84 : 13 0a             LdaConstant [10]
         0x3dd210ee3c56 @   86 : bf                Star5 
         0x3dd210ee3c57 @   87 : 80 0d 01 02       CreateClosure [13], [1], #2
         0x3dd210ee3c5b @   91 : bc                Star8 
         0x3dd210ee3c5c @   92 : 80 0e 02 02       CreateClosure [14], [2], #2
         0x3dd210ee3c60 @   96 : bb                Star9 
         0x3dd210ee3c61 @   97 : 80 0f 03 02       CreateClosure [15], [3], #2
         0x3dd210ee3c65 @  101 : ba                Star10 
         0x3dd210ee3c66 @  102 : 80 10 04 02       CreateClosure [16], [4], #2
         0x3dd210ee3c6a @  106 : b9                Star11 
         0x3dd210ee3c6b @  107 : 80 11 05 02       CreateClosure [17], [5], #2
         0x3dd210ee3c6f @  111 : b8                Star12 
         0x3dd210ee3c70 @  112 : 80 12 06 02       CreateClosure [18], [6], #2
         0x3dd210ee3c74 @  116 : b7                Star13 
         0x3dd210ee3c75 @  117 : 19 f6 f4          Mov r4, r6
         0x3dd210ee3c78 @  120 : 65 28 00 f5 09    CallRuntime [DefineClass], r5-r13
         0x3dd210ee3c7d @  125 : 25 02             StaCurrentContextSlot [2]
         0x3dd210ee3c7f @  127 : bf                Star5 
         0x3dd210ee3c80 @  128 : 0b f4             Ldar r6
         0x3dd210ee3c82 @  130 : 25 03             StaCurrentContextSlot [3]
         0x3dd210ee3c84 @  132 : 25 04             StaCurrentContextSlot [4]
         0x3dd210ee3c86 @  134 : 1b f7             PopContext r3
         0x3dd210ee3c88 @  136 : c3                Star1 
 2180 S> 0x3dd210ee3c89 @  137 : 0b f9             Ldar r1
 2195 E> 0x3dd210ee3c8b @  139 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x3dd210ee3c8f @  143 : 0e                LdaUndefined 
 2240 S> 0x3dd210ee3c90 @  144 : a9                Return 
Constant pool (size = 19)
0x3dd210ee3c99: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 19
           0: 0x3dd210ee3d41 <ScopeInfo FUNCTION_SCOPE>
           1: 0x029027885ab9 <String[6]: #Object>
           2: 0x029027884c11 <String[14]: #defineProperty>
           3: 0x3dd210ee3de1 <String[10]: #__esModule>
           4: 0x3dd210ee3e01 <ObjectBoilerplateDescription[3]>
           5: 0x3dd210ee3e29 <String[6]: #Meteor>
           6: 0x3dd210ee3e41 <String[14]: #./meteor_infos>
           7: 0x3dd210ee3e61 <String[12]: #./projectile>
           8: 0x3dd210ee3e81 <String[8]: #./vector>
           9: 0x3dd210ee3e99 <ScopeInfo CLASS_SCOPE>
          10: 0x3dd210ee3f01 <FixedArray[7]>
          11: 0x3dd210ee41a9 <String[10]: #Projectile>
          12: 0x3dd210ee41c9 <SharedFunctionInfo Meteor>
          13: 0x3dd210ee45c1 <SharedFunctionInfo Build>
          14: 0x3dd210ee4981 <SharedFunctionInfo BuildDebug>
          15: 0x3dd210ee4b31 <SharedFunctionInfo get score>
          16: 0x3dd210ee4c79 <SharedFunctionInfo getMeteorsAfterExplosion>
          17: 0x3dd210ee5069 <SharedFunctionInfo serializeForViewer>
          18: 0x3dd210ee51a1 <SharedFunctionInfo serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 48)
0x3dd210ee52f9 <ByteArray[48]>
Boilerplate at 0x3dd210ee3e01: 
0x3dd210ee3e01: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x029027882059 <Map>
 - length: 3
           0: 8
           1: 0x029027886419 <String[5]: #value>
           2: 0x029027881729 <true>
Array at 0x3dd210ee3f01 has 7 elements:
0x3dd210ee3f01: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 7
           0: 9
           1: 0x3dd210ee3f49 <DescriptorArray[6]>
           2: 0x029027883301 <NumberDictionary[7]>
           3: 0x029027881329 <FixedArray[0]>
           4: 0x3dd210ee4071 <DescriptorArray[5]>
           5: 0x029027883301 <NumberDictionary[7]>
           6: 0x029027881329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x9 (9)
Element[1]
0x3dd210ee3f49: [DescriptorArray] in OldSpace
 - map: 0x029027887761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 6
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x290278855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 4, attrs: [__C]) @ 0x314767f34fe1 <AccessorInfo>
  [1]: 0x290278858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x314767f34f71 <AccessorInfo>
  [2]: 0x29027885cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 2, attrs: [___]) @ 0x314767f35051 <AccessorInfo>
  [3]: 0x0290278865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x3dd210ee4021 <ClassPositions 298, 2179>
  [4]: 0x3dd210ee4039: [String] in OldSpace: #Build (const data descriptor, p: 1, attrs: [W_C]) @ 3
  [5]: 0x3dd210ee4051: [String] in OldSpace: #BuildDebug (const data descriptor, p: 5, attrs: [W_C]) @ 4
Element[2]
0x29027883301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x29027881329: [FixedArray] in ReadOnlySpace
 - map: 0x0290278812e1 <Map>
 - length: 0
Element[4]
0x3dd210ee4071: [DescriptorArray] in OldSpace
 - map: 0x029027887761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x29027884a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x3dd210ee4101: [String] in OldSpace: #score (const accessor descriptor, p: 4, attrs: [W_C]) @ 0x3dd210ee4119 <AccessorPair>(get: 5, set: 0x029027881339 <null>)
  [2]: 0x3dd210ee4131: [String] in OldSpace: #getMeteorsAfterExplosion (const data descriptor, p: 2, attrs: [W_C]) @ 6
  [3]: 0x3dd210ee4159: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 3, attrs: [W_C]) @ 7
  [4]: 0x3dd210ee4181: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 0, attrs: [W_C]) @ 8
Element[5]
0x29027883301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x29027881329: [FixedArray] in ReadOnlySpace
 - map: 0x0290278812e1 <Map>
 - length: 0
0x3dd210ee41c9 points to: [0x3dd210ee4238]
=== [0x3dd210ee4238] DISASSEMBLY ===
Parameter count 5
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
         0x3dd210ee4238 @    0 : 19 fe f9          Mov <closure>, r1
         0x3dd210ee423b @    3 : 19 03 f8          Mov a0, r2
         0x3dd210ee423e @    6 : 0b 04             Ldar a1
         0x3dd210ee4240 @    8 : 9d 1b             JumpIfNotUndefined [27] (0x3dd210ee425b @ 35)
         0x3dd210ee4242 @   10 : 15 ff 03 01       LdaImmutableContextSlot <context>, [3], [1]
 1313 E> 0x3dd210ee4246 @   14 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3dd210ee4248 @   16 : be                Star6 
 1322 E> 0x3dd210ee4249 @   17 : 2d f4 01 00       GetNamedProperty r6, [1], [0]
         0x3dd210ee424d @   21 : be                Star6 
         0x3dd210ee424e @   22 : 0c                LdaZero 
         0x3dd210ee424f @   23 : bd                Star7 
         0x3dd210ee4250 @   24 : 0c                LdaZero 
         0x3dd210ee4251 @   25 : bc                Star8 
         0x3dd210ee4252 @   26 : 0b f4             Ldar r6
 1309 E> 0x3dd210ee4254 @   28 : 69 f4 f3 02 02    Construct r6, r7-r8, [2]
         0x3dd210ee4259 @   33 : 8a 04             Jump [4] (0x3dd210ee425d @ 37)
         0x3dd210ee425b @   35 : 0b 04             Ldar a1
         0x3dd210ee425d @   37 : c1                Star3 
         0x3dd210ee425e @   38 : 0b 05             Ldar a2
         0x3dd210ee4260 @   40 : 9d 14             JumpIfNotUndefined [20] (0x3dd210ee4274 @ 60)
         0x3dd210ee4262 @   42 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1349 E> 0x3dd210ee4266 @   46 : aa 02             ThrowReferenceErrorIfHole [2]
         0x3dd210ee4268 @   48 : be                Star6 
 1364 E> 0x3dd210ee4269 @   49 : 2d f4 03 04       GetNamedProperty r6, [3], [4]
         0x3dd210ee426d @   53 : be                Star6 
 1375 E> 0x3dd210ee426e @   54 : 2d f4 04 06       GetNamedProperty r6, [4], [6]
         0x3dd210ee4272 @   58 : 8a 04             Jump [4] (0x3dd210ee4276 @ 62)
         0x3dd210ee4274 @   60 : 0b 05             Ldar a2
         0x3dd210ee4276 @   62 : c0                Star4 
         0x3dd210ee4277 @   63 : 19 06 f5          Mov a3, r5
 1405 S> 0x3dd210ee427a @   66 : 0b f9             Ldar r1
         0x3dd210ee427c @   68 : 5a f3             GetSuperConstructor r7
         0x3dd210ee427e @   70 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1431 E> 0x3dd210ee4282 @   74 : aa 02             ThrowReferenceErrorIfHole [2]
         0x3dd210ee4284 @   76 : b9                Star11 
 1446 E> 0x3dd210ee4285 @   77 : 2d ef 05 08       GetNamedProperty r11, [5], [8]
         0x3dd210ee4289 @   81 : b9                Star11 
 1464 E> 0x3dd210ee428a @   82 : 2d ef 06 0a       GetNamedProperty r11, [6], [10]
         0x3dd210ee428e @   86 : ba                Star10 
 1464 E> 0x3dd210ee428f @   87 : 5e f0 ef f6 0c    CallProperty1 r10, r11, r4, [12]
         0x3dd210ee4294 @   92 : ba                Star10 
         0x3dd210ee4295 @   93 : 19 f9 f4          Mov r1, r6
         0x3dd210ee4298 @   96 : 19 f8 f2          Mov r2, r8
         0x3dd210ee429b @   99 : 19 f7 f1          Mov r3, r9
         0x3dd210ee429e @  102 : 9e 08             JumpIfUndefinedOrNull [8] (0x3dd210ee42a6 @ 110)
 1479 E> 0x3dd210ee42a0 @  104 : 2d f0 07 0e       GetNamedProperty r10, [7], [14]
         0x3dd210ee42a4 @  108 : 8a 03             Jump [3] (0x3dd210ee42a7 @ 111)
         0x3dd210ee42a6 @  110 : 0e                LdaUndefined 
         0x3dd210ee42a7 @  111 : ad f3             ThrowIfNotSuperConstructor r7
         0x3dd210ee42a9 @  113 : ba                Star10 
         0x3dd210ee42aa @  114 : 0b fa             Ldar r0
 1405 E> 0x3dd210ee42ac @  116 : 69 f3 f2 03 10    Construct r7, r8-r10, [16]
         0x3dd210ee42b1 @  121 : b9                Star11 
         0x3dd210ee42b2 @  122 : 0b 02             Ldar <this>
         0x3dd210ee42b4 @  124 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x3dd210ee42b5 @  125 : 19 ef 02          Mov r11, <this>
 1496 S> 0x3dd210ee42b8 @  128 : 0b 02             Ldar <this>
         0x3dd210ee42ba @  130 : ab                ThrowSuperNotCalledIfHole 
         0x3dd210ee42bb @  131 : 0b f6             Ldar r4
 1512 E> 0x3dd210ee42bd @  133 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
 1534 S> 0x3dd210ee42c1 @  137 : 0b 02             Ldar <this>
         0x3dd210ee42c3 @  139 : ab                ThrowSuperNotCalledIfHole 
         0x3dd210ee42c4 @  140 : 0b f5             Ldar r5
 1551 E> 0x3dd210ee42c6 @  142 : 32 02 09 14       SetNamedProperty <this>, [9], [20]
         0x3dd210ee42ca @  146 : 0b 02             Ldar <this>
         0x3dd210ee42cc @  148 : ab                ThrowSuperNotCalledIfHole 
 1570 S> 0x3dd210ee42cd @  149 : a9                Return 
Constant pool (size = 10)
0x3dd210ee42d1: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 10
           0: 0x3dd210ee3dc9 <String[8]: #vector_1>
           1: 0x3dd210ee4331 <String[6]: #Vector>
           2: 0x3dd210ee3da9 <String[14]: #meteor_infos_1>
           3: 0x3dd210ee4349 <String[10]: #MeteorType>
           4: 0x3dd210ee4369 <String[5]: #Large>
           5: 0x3dd210ee4381 <String[17]: #METEOR_TYPE_INFOS>
           6: 0x0290278850e9 <String[3]: #get>
           7: 0x02902788a111 <String[4]: #size>
           8: 0x3dd210ee43a9 <String[10]: #meteorType>
           9: 0x3dd210ee43c9 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 42)
0x3dd210ee43e9 <ByteArray[42]>
0x3dd210ee45c1 points to: [0x3dd210ee4630]
=== [0x3dd210ee4630] DISASSEMBLY ===
Parameter count 4
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
         0x3dd210ee4630 @    0 : 19 03 fa          Mov a0, r0
         0x3dd210ee4633 @    3 : 0b 04             Ldar a1
         0x3dd210ee4635 @    5 : 9d 1b             JumpIfNotUndefined [27] (0x3dd210ee4650 @ 32)
         0x3dd210ee4637 @    7 : 15 ff 03 01       LdaImmutableContextSlot <context>, [3], [1]
  387 E> 0x3dd210ee463b @   11 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3dd210ee463d @   13 : bd                Star7 
  396 E> 0x3dd210ee463e @   14 : 2d f3 01 00       GetNamedProperty r7, [1], [0]
         0x3dd210ee4642 @   18 : bd                Star7 
         0x3dd210ee4643 @   19 : 0c                LdaZero 
         0x3dd210ee4644 @   20 : bc                Star8 
         0x3dd210ee4645 @   21 : 0c                LdaZero 
         0x3dd210ee4646 @   22 : bb                Star9 
         0x3dd210ee4647 @   23 : 0b f3             Ldar r7
  383 E> 0x3dd210ee4649 @   25 : 69 f3 f2 02 02    Construct r7, r8-r9, [2]
         0x3dd210ee464e @   30 : 8a 04             Jump [4] (0x3dd210ee4652 @ 34)
         0x3dd210ee4650 @   32 : 0b 04             Ldar a1
         0x3dd210ee4652 @   34 : c3                Star1 
         0x3dd210ee4653 @   35 : 0b 05             Ldar a2
         0x3dd210ee4655 @   37 : 9d 14             JumpIfNotUndefined [20] (0x3dd210ee4669 @ 57)
         0x3dd210ee4657 @   39 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
  423 E> 0x3dd210ee465b @   43 : aa 02             ThrowReferenceErrorIfHole [2]
         0x3dd210ee465d @   45 : bd                Star7 
  438 E> 0x3dd210ee465e @   46 : 2d f3 03 04       GetNamedProperty r7, [3], [4]
         0x3dd210ee4662 @   50 : bd                Star7 
  449 E> 0x3dd210ee4663 @   51 : 2d f3 04 06       GetNamedProperty r7, [4], [6]
         0x3dd210ee4667 @   55 : 8a 04             Jump [4] (0x3dd210ee466b @ 59)
         0x3dd210ee4669 @   57 : 0b 05             Ldar a2
         0x3dd210ee466b @   59 : c2                Star2 
  486 S> 0x3dd210ee466c @   60 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x3dd210ee4670 @   64 : aa 02             ThrowReferenceErrorIfHole [2]
         0x3dd210ee4672 @   66 : bc                Star8 
  501 E> 0x3dd210ee4673 @   67 : 2d f2 05 08       GetNamedProperty r8, [5], [8]
         0x3dd210ee4677 @   71 : bc                Star8 
  519 E> 0x3dd210ee4678 @   72 : 2d f2 06 0a       GetNamedProperty r8, [6], [10]
         0x3dd210ee467c @   76 : bd                Star7 
  519 E> 0x3dd210ee467d @   77 : 5e f3 f2 f8 0c    CallProperty1 r7, r8, r2, [12]
         0x3dd210ee4682 @   82 : c1                Star3 
  544 S> 0x3dd210ee4683 @   83 : 1d                TestUndetectable 
         0x3dd210ee4684 @   84 : 99 1e             JumpIfFalse [30] (0x3dd210ee46a2 @ 114)
  583 S> 0x3dd210ee4686 @   86 : 21 07 0e          LdaGlobal [7], [14]
         0x3dd210ee4689 @   89 : bd                Star7 
         0x3dd210ee468a @   90 : 13 08             LdaConstant [8]
         0x3dd210ee468c @   92 : bc                Star8 
         0x3dd210ee468d @   93 : 0b f8             Ldar r2
  618 E> 0x3dd210ee468f @   95 : 77                ToString 
         0x3dd210ee4690 @   96 : 39 f2 10          Add r8, [16]
         0x3dd210ee4693 @   99 : bc                Star8 
         0x3dd210ee4694 @  100 : 13 09             LdaConstant [9]
         0x3dd210ee4696 @  102 : 39 f2 10          Add r8, [16]
         0x3dd210ee4699 @  105 : bc                Star8 
         0x3dd210ee469a @  106 : 0b f3             Ldar r7
  589 E> 0x3dd210ee469c @  108 : 69 f3 f2 01 11    Construct r7, r8-r8, [17]
  583 E> 0x3dd210ee46a1 @  113 : a7                Throw 
  673 S> 0x3dd210ee46a2 @  114 : 19 f9 f6          Mov r1, r4
  710 S> 0x3dd210ee46a5 @  117 : 2d f6 0a 13       GetNamedProperty r4, [10], [19]
         0x3dd210ee46a9 @  121 : bd                Star7 
         0x3dd210ee46aa @  122 : 0c                LdaZero 
  720 E> 0x3dd210ee46ab @  123 : 6e f3 15          TestGreaterThan r7, [21]
         0x3dd210ee46ae @  126 : 99 49             JumpIfFalse [73] (0x3dd210ee46f7 @ 199)
  739 E> 0x3dd210ee46b0 @  128 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x3dd210ee46b4 @  132 : 97 43             JumpIfToBooleanFalse [67] (0x3dd210ee46f7 @ 199)
  788 S> 0x3dd210ee46b6 @  134 : 13 0c             LdaConstant [12]
         0x3dd210ee46b8 @  136 : bf                Star5 
  826 S> 0x3dd210ee46b9 @  137 : 0d 01             LdaSmi [1]
         0x3dd210ee46bb @  139 : bd                Star7 
  831 E> 0x3dd210ee46bc @  140 : 21 0d 1a          LdaGlobal [13], [26]
         0x3dd210ee46bf @  143 : bb                Star9 
  836 E> 0x3dd210ee46c0 @  144 : 2d f1 0e 1c       GetNamedProperty r9, [14], [28]
         0x3dd210ee46c4 @  148 : bc                Star8 
  836 E> 0x3dd210ee46c5 @  149 : 5d f2 f1 1e       CallProperty0 r8, r9, [30]
         0x3dd210ee46c9 @  153 : bc                Star8 
         0x3dd210ee46ca @  154 : 0b f5             Ldar r5
  845 E> 0x3dd210ee46cc @  156 : 3b f2 20          Mul r8, [32]
  867 E> 0x3dd210ee46cf @  159 : 47 02 21          MulSmi [2], [33]
  828 E> 0x3dd210ee46d2 @  162 : 39 f3 19          Add r7, [25]
         0x3dd210ee46d5 @  165 : bd                Star7 
         0x3dd210ee46d6 @  166 : 0b f5             Ldar r5
  872 E> 0x3dd210ee46d8 @  168 : 3a f3 18          Sub r7, [24]
         0x3dd210ee46db @  171 : be                Star6 
  939 S> 0x3dd210ee46dc @  172 : 2d f6 0f 22       GetNamedProperty r4, [15], [34]
         0x3dd210ee46e0 @  176 : bc                Star8 
  950 E> 0x3dd210ee46e1 @  177 : 2d f2 10 24       GetNamedProperty r8, [16], [36]
         0x3dd210ee46e5 @  181 : bd                Star7 
  971 E> 0x3dd210ee46e6 @  182 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x3dd210ee46ea @  186 : bb                Star9 
         0x3dd210ee46eb @  187 : 0b f4             Ldar r6
  977 E> 0x3dd210ee46ed @  189 : 3b f1 26          Mul r9, [38]
         0x3dd210ee46f0 @  192 : bb                Star9 
  950 E> 0x3dd210ee46f1 @  193 : 5e f3 f2 f1 27    CallProperty1 r7, r8, r9, [39]
         0x3dd210ee46f6 @  198 : c0                Star4 
 1012 S> 0x3dd210ee46f7 @  199 : 16 04             LdaCurrentContextSlot [4]
         0x3dd210ee46f9 @  201 : aa 11             ThrowReferenceErrorIfHole [17]
         0x3dd210ee46fb @  203 : bd                Star7 
         0x3dd210ee46fc @  204 : 0b f3             Ldar r7
         0x3dd210ee46fe @  206 : 19 fa f2          Mov r0, r8
         0x3dd210ee4701 @  209 : 19 f6 f1          Mov r4, r9
         0x3dd210ee4704 @  212 : 19 f8 f0          Mov r2, r10
         0x3dd210ee4707 @  215 : 19 f7 ef          Mov r3, r11
 1019 E> 0x3dd210ee470a @  218 : 69 f3 f2 04 29    Construct r7, r8-r11, [41]
 1081 S> 0x3dd210ee470f @  223 : a9                Return 
Constant pool (size = 18)
0x3dd210ee4711: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 18
           0: 0x3dd210ee3dc9 <String[8]: #vector_1>
           1: 0x3dd210ee4331 <String[6]: #Vector>
           2: 0x3dd210ee3da9 <String[14]: #meteor_infos_1>
           3: 0x3dd210ee4349 <String[10]: #MeteorType>
           4: 0x3dd210ee4369 <String[5]: #Large>
           5: 0x3dd210ee4381 <String[17]: #METEOR_TYPE_INFOS>
           6: 0x0290278850e9 <String[3]: #get>
           7: 0x029027884de1 <String[5]: #Error>
           8: 0x3dd210ee47b1 <String[16]: #Unknown meteor '>
           9: 0x314767f34c49 <String[1]: #'>
          10: 0x3dd210ee47e9 <String[9]: #magnitude>
          11: 0x3dd210ee4809 <String[5]: #speed>
          12: 0x3dd210ee4821 <HeapNumber 0.2>
          13: 0x314767f1a991 <String[4]: #Math>
          14: 0x314767f1aba1 <String[6]: #random>
          15: 0x3dd210ee4861 <String[10]: #normalized>
          16: 0x3dd210ee4881 <String[8]: #multiply>
          17: 0x3dd210ee3e29 <String[6]: #Meteor>
Handler Table (size = 0)
Source Position Table (size = 88)
0x3dd210ee4899 <ByteArray[88]>
0x3dd210ee4981 points to: [0x3dd210ee49f0]
=== [0x3dd210ee49f0] DISASSEMBLY ===
Parameter count 4
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0x3dd210ee49f0 @    0 : 19 03 fa          Mov a0, r0
         0x3dd210ee49f3 @    3 : 0b 04             Ldar a1
         0x3dd210ee49f5 @    5 : 9d 1b             JumpIfNotUndefined [27] (0x3dd210ee4a10 @ 32)
         0x3dd210ee49f7 @    7 : 15 ff 03 01       LdaImmutableContextSlot <context>, [3], [1]
 1135 E> 0x3dd210ee49fb @   11 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3dd210ee49fd @   13 : c1                Star3 
 1144 E> 0x3dd210ee49fe @   14 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x3dd210ee4a02 @   18 : c1                Star3 
         0x3dd210ee4a03 @   19 : 0c                LdaZero 
         0x3dd210ee4a04 @   20 : c0                Star4 
         0x3dd210ee4a05 @   21 : 0c                LdaZero 
         0x3dd210ee4a06 @   22 : bf                Star5 
         0x3dd210ee4a07 @   23 : 0b f7             Ldar r3
 1131 E> 0x3dd210ee4a09 @   25 : 69 f7 f6 02 02    Construct r3, r4-r5, [2]
         0x3dd210ee4a0e @   30 : 8a 04             Jump [4] (0x3dd210ee4a12 @ 34)
         0x3dd210ee4a10 @   32 : 0b 04             Ldar a1
         0x3dd210ee4a12 @   34 : c3                Star1 
         0x3dd210ee4a13 @   35 : 19 05 f8          Mov a2, r2
 1181 S> 0x3dd210ee4a16 @   38 : 16 04             LdaCurrentContextSlot [4]
         0x3dd210ee4a18 @   40 : aa 02             ThrowReferenceErrorIfHole [2]
         0x3dd210ee4a1a @   42 : c1                Star3 
         0x3dd210ee4a1b @   43 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1219 E> 0x3dd210ee4a1f @   47 : aa 03             ThrowReferenceErrorIfHole [3]
         0x3dd210ee4a21 @   49 : be                Star6 
 1234 E> 0x3dd210ee4a22 @   50 : 2d f4 04 04       GetNamedProperty r6, [4], [4]
         0x3dd210ee4a26 @   54 : be                Star6 
 1245 E> 0x3dd210ee4a27 @   55 : 2d f4 05 06       GetNamedProperty r6, [5], [6]
         0x3dd210ee4a2b @   59 : be                Star6 
         0x3dd210ee4a2c @   60 : 0b f7             Ldar r3
         0x3dd210ee4a2e @   62 : 19 fa f6          Mov r0, r4
         0x3dd210ee4a31 @   65 : 19 f9 f5          Mov r1, r5
         0x3dd210ee4a34 @   68 : 19 05 f3          Mov a2, r7
 1188 E> 0x3dd210ee4a37 @   71 : 69 f7 f6 04 08    Construct r3, r4-r7, [8]
 1265 S> 0x3dd210ee4a3c @   76 : a9                Return 
Constant pool (size = 6)
0x3dd210ee4a41: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 6
           0: 0x3dd210ee3dc9 <String[8]: #vector_1>
           1: 0x3dd210ee4331 <String[6]: #Vector>
           2: 0x3dd210ee3e29 <String[6]: #Meteor>
           3: 0x3dd210ee3da9 <String[14]: #meteor_infos_1>
           4: 0x3dd210ee4349 <String[10]: #MeteorType>
           5: 0x314767f2af39 <String[5]: #Debug>
Handler Table (size = 0)
Source Position Table (size = 25)
0x3dd210ee4a99 <ByteArray[25]>
0x3dd210ee4b31 points to: [0x3dd210ee4ba0]
=== [0x3dd210ee4ba0] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1610 S> 0x3dd210ee4ba0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3dd210ee4ba4 @    4 : c4                Star0 
 1622 E> 0x3dd210ee4ba5 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x3dd210ee4ba9 @    9 : 9e 04             JumpIfUndefinedOrNull [4] (0x3dd210ee4bad @ 13)
         0x3dd210ee4bab @   11 : 8a 03             Jump [3] (0x3dd210ee4bae @ 14)
         0x3dd210ee4bad @   13 : 0c                LdaZero 
 1633 S> 0x3dd210ee4bae @   14 : a9                Return 
Constant pool (size = 2)
0x3dd210ee4bb1: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 2
           0: 0x3dd210ee43c9 <String[11]: #meteorInfos>
           1: 0x3dd210ee4101 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 9)
0x3dd210ee4bd1 <ByteArray[9]>
0x3dd210ee4c79 points to: [0x3dd210ee4ce8]
=== [0x3dd210ee4ce8] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 1668 E> 0x3dd210ee4ce8 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x3dd210ee4ceb @    3 : 1a fa             PushContext r0
         0x3dd210ee4ced @    5 : 0b 02             Ldar <this>
         0x3dd210ee4cef @    7 : 25 02             StaCurrentContextSlot [2]
         0x3dd210ee4cf1 @    9 : 0b 03             Ldar a0
         0x3dd210ee4cf3 @   11 : 25 03             StaCurrentContextSlot [3]
 1698 S> 0x3dd210ee4cf5 @   13 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3dd210ee4cf7 @   15 : c2                Star2 
 1710 E> 0x3dd210ee4cf8 @   16 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x3dd210ee4cfc @   20 : c2                Star2 
 1722 E> 0x3dd210ee4cfd @   21 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x3dd210ee4d01 @   25 : c2                Star2 
         0x3dd210ee4d02 @   26 : 9e 13             JumpIfUndefinedOrNull [19] (0x3dd210ee4d15 @ 45)
 1734 E> 0x3dd210ee4d04 @   28 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x3dd210ee4d08 @   32 : c3                Star1 
         0x3dd210ee4d09 @   33 : 80 04 00 02       CreateClosure [4], [0], #2
         0x3dd210ee4d0d @   37 : c1                Star3 
 1736 E> 0x3dd210ee4d0e @   38 : 5e f9 f8 f7 06    CallProperty1 r1, r2, r3, [6]
         0x3dd210ee4d13 @   43 : 8a 03             Jump [3] (0x3dd210ee4d16 @ 46)
         0x3dd210ee4d15 @   45 : 0e                LdaUndefined 
         0x3dd210ee4d16 @   46 : 9e 04             JumpIfUndefinedOrNull [4] (0x3dd210ee4d1a @ 50)
         0x3dd210ee4d18 @   48 : 8a 04             Jump [4] (0x3dd210ee4d1c @ 52)
         0x3dd210ee4d1a @   50 : 7b 08             CreateEmptyArrayLiteral [8]
 1881 S> 0x3dd210ee4d1c @   52 : a9                Return 
Constant pool (size = 5)
0x3dd210ee4d21: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 5
           0: 0x3dd210ee4d59 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3dd210ee43c9 <String[11]: #meteorInfos>
           2: 0x3dd210ee4df1 <String[12]: #explodesInto>
           3: 0x314767f09ea9 <String[3]: #map>
           4: 0x3dd210ee4e29 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 18)
0x3dd210ee5029 <ByteArray[18]>
0x3dd210ee4e29 points to: [0x3dd210ee4e98]
=== [0x3dd210ee4e98] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1764 S> 0x3dd210ee4e98 @    0 : 14 ff 04 01       LdaContextSlot <context>, [4], [1]
         0x3dd210ee4e9c @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3dd210ee4e9e @    6 : c3                Star1 
 1764 E> 0x3dd210ee4e9f @    7 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x3dd210ee4ea3 @   11 : c4                Star0 
         0x3dd210ee4ea4 @   12 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x3dd210ee4ea6 @   14 : c2                Star2 
         0x3dd210ee4ea7 @   15 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3dd210ee4ea9 @   17 : bf                Star5 
 1794 E> 0x3dd210ee4eaa @   18 : 2d f5 02 02       GetNamedProperty r5, [2], [2]
         0x3dd210ee4eae @   22 : bf                Star5 
 1803 E> 0x3dd210ee4eaf @   23 : 2d f5 03 04       GetNamedProperty r5, [3], [4]
         0x3dd210ee4eb3 @   27 : c0                Star4 
 1822 E> 0x3dd210ee4eb4 @   28 : 2d 03 04 06       GetNamedProperty a0, [4], [6]
         0x3dd210ee4eb8 @   32 : be                Star6 
 1803 E> 0x3dd210ee4eb9 @   33 : 5e f6 f5 f4 08    CallProperty1 r4, r5, r6, [8]
         0x3dd210ee4ebe @   38 : c0                Star4 
 1834 E> 0x3dd210ee4ebf @   39 : 2d f6 05 0a       GetNamedProperty r4, [5], [10]
         0x3dd210ee4ec3 @   43 : c1                Star3 
         0x3dd210ee4ec4 @   44 : 13 06             LdaConstant [6]
         0x3dd210ee4ec6 @   46 : bf                Star5 
 1835 E> 0x3dd210ee4ec7 @   47 : 5e f7 f6 f5 0c    CallProperty1 r3, r4, r5, [12]
         0x3dd210ee4ecc @   52 : c1                Star3 
 1862 E> 0x3dd210ee4ecd @   53 : 2d 03 07 0e       GetNamedProperty a0, [7], [14]
         0x3dd210ee4ed1 @   57 : c0                Star4 
 1764 E> 0x3dd210ee4ed2 @   58 : 5c fa f9 04 10    CallProperty r0, r1-r4, [16]
 1873 S> 0x3dd210ee4ed7 @   63 : a9                Return 
Constant pool (size = 8)
0x3dd210ee4ed9: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 8
           0: 0x3dd210ee3e29 <String[6]: #Meteor>
           1: 0x3dd210ee4039 <String[5]: #Build>
           2: 0x3dd210ee4f29 <String[8]: #velocity>
           3: 0x3dd210ee4f41 <String[6]: #rotate>
           4: 0x3dd210ee4f59 <String[11]: #rotationRad>
           5: 0x3dd210ee4881 <String[8]: #multiply>
           6: 0x3dd210ee4f79 <HeapNumber 0.8>
           7: 0x3dd210ee43a9 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 27)
0x3dd210ee4f89 <ByteArray[27]>
0x3dd210ee5069 points to: [0x3dd210ee50d8]
=== [0x3dd210ee50d8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1923 S> 0x3dd210ee50d8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 1953 E> 0x3dd210ee50da @    2 : 2e 02 00 00       GetNamedPropertyFromSuper <this>, [0], [0]
         0x3dd210ee50de @    6 : c3                Star1 
 1953 E> 0x3dd210ee50df @    7 : 5b f9 02 01 02    CallAnyReceiver r1, <this>-<this>, [2]
         0x3dd210ee50e4 @   12 : c3                Star1 
         0x3dd210ee50e5 @   13 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x3dd210ee50e9 @   17 : c4                Star0 
 2004 E> 0x3dd210ee50ea @   18 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x3dd210ee50ee @   22 : 33 fa 01 08       DefineNamedOwnProperty r0, [1], [8]
         0x3dd210ee50f2 @   26 : 0b fa             Ldar r0
 2026 S> 0x3dd210ee50f4 @   28 : a9                Return 
Constant pool (size = 2)
0x3dd210ee50f9: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 2
           0: 0x3dd210ee4159 <String[18]: #serializeForViewer>
           1: 0x3dd210ee43a9 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 14)
0x3dd210ee5119 <ByteArray[14]>
0x3dd210ee51a1 points to: [0x3dd210ee5210]
=== [0x3dd210ee5210] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2068 S> 0x3dd210ee5210 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 2098 E> 0x3dd210ee5212 @    2 : 2e 02 00 00       GetNamedPropertyFromSuper <this>, [0], [0]
         0x3dd210ee5216 @    6 : c3                Star1 
 2098 E> 0x3dd210ee5217 @    7 : 5b f9 02 01 02    CallAnyReceiver r1, <this>-<this>, [2]
         0x3dd210ee521c @   12 : c3                Star1 
         0x3dd210ee521d @   13 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x3dd210ee5221 @   17 : c4                Star0 
 2149 E> 0x3dd210ee5222 @   18 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x3dd210ee5226 @   22 : 33 fa 01 08       DefineNamedOwnProperty r0, [1], [8]
         0x3dd210ee522a @   26 : 0b fa             Ldar r0
 2171 S> 0x3dd210ee522c @   28 : a9                Return 
Constant pool (size = 2)
0x3dd210ee5231: [FixedArray] in OldSpace
 - map: 0x0290278812e1 <Map>
 - length: 2
           0: 0x3dd210ee4181 <String[18]: #serializeForPlayer>
           1: 0x3dd210ee43a9 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 14)
0x3dd210ee5251 <ByteArray[14]>
<< OUTPUTTING DISASSEMBLY END >>
```