## Annotated
```js
function checkCollisionDuringCurrentTick() {  // 0x1c7c4b064e80
	r3 = ContextSlot[2]  // geoUtils
	r0 = geoUtils.movingCirclesIntersection(
		a0._position, a0._velocity, a0._size,
		a1._position, a1._velocity, a1.size_)
	acc = r0.filter(timeBetween0and1)  // 0x1c7c4b064ff8
		.sort(smallestTime)  // 0x1c7c4b065150
		.at(0)
	return acc ?? null
}

// ...
```
## Disassembly
```
<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1c7c4b063b70] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1c7c4b063b70 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1c7c4b063b74 @    4 : c4                Star0 
 2797 S> 0x1c7c4b063b75 @    5 : a9                Return 
Constant pool (size = 1)
0x1c7c4b063b79: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 1
           0: 0x1c7c4b063b91 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1c7c4b065a99 <ByteArray[7]>
0x1c7c4b063b91 points to: [0x1c7c4b063c00]
=== [0x1c7c4b063c00] DISASSEMBLY ===
Parameter count 6
Register count 18
Frame size 144
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1c7c4b063c00 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x1c7c4b063c03 @    3 : 1a f8             PushContext r2
         0x1c7c4b063c05 @    5 : 10                LdaTheHole 
         0x1c7c4b063c06 @    6 : 25 02             StaCurrentContextSlot [2]
         0x1c7c4b063c08 @    8 : 10                LdaTheHole 
         0x1c7c4b063c09 @    9 : 25 03             StaCurrentContextSlot [3]
         0x1c7c4b063c0b @   11 : 10                LdaTheHole 
         0x1c7c4b063c0c @   12 : 25 04             StaCurrentContextSlot [4]
   76 S> 0x1c7c4b063c0e @   14 : 21 01 00          LdaGlobal [1], [0]
         0x1c7c4b063c11 @   17 : c0                Star4 
   83 E> 0x1c7c4b063c12 @   18 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x1c7c4b063c16 @   22 : c1                Star3 
         0x1c7c4b063c17 @   23 : 13 03             LdaConstant [3]
         0x1c7c4b063c19 @   25 : be                Star6 
   98 E> 0x1c7c4b063c1a @   26 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x1c7c4b063c1e @   30 : bd                Star7 
         0x1c7c4b063c1f @   31 : 19 03 f5          Mov a0, r5
   83 E> 0x1c7c4b063c22 @   34 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x1c7c4b063c27 @   39 : 0e                LdaUndefined 
  158 E> 0x1c7c4b063c28 @   40 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  185 S> 0x1c7c4b063c2c @   44 : 13 06             LdaConstant [6]
         0x1c7c4b063c2e @   46 : c0                Star4 
  185 E> 0x1c7c4b063c2f @   47 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
         0x1c7c4b063c33 @   51 : c4                Star0 
  225 S> 0x1c7c4b063c34 @   52 : 13 07             LdaConstant [7]
         0x1c7c4b063c36 @   54 : c0                Star4 
  225 E> 0x1c7c4b063c37 @   55 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
  225 E> 0x1c7c4b063c3b @   59 : 25 02             StaCurrentContextSlot [2]
  272 S> 0x1c7c4b063c3d @   61 : 13 08             LdaConstant [8]
         0x1c7c4b063c3f @   63 : c0                Star4 
  272 E> 0x1c7c4b063c40 @   64 : 62 04 f6 0d       CallUndefinedReceiver1 a1, r4, [13]
  272 E> 0x1c7c4b063c44 @   68 : 25 03             StaCurrentContextSlot [3]
  317 S> 0x1c7c4b063c46 @   70 : 13 09             LdaConstant [9]
         0x1c7c4b063c48 @   72 : c0                Star4 
  317 E> 0x1c7c4b063c49 @   73 : 62 04 f6 0f       CallUndefinedReceiver1 a1, r4, [15]
  317 E> 0x1c7c4b063c4d @   77 : 25 04             StaCurrentContextSlot [4]
  372 E> 0x1c7c4b063c4f @   79 : 2d fa 0b 11       GetNamedProperty r0, [11], [17]
         0x1c7c4b063c53 @   83 : be                Star6 
         0x1c7c4b063c54 @   84 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x1c7c4b063c58 @   88 : c1                Star3 
         0x1c7c4b063c59 @   89 : 13 0a             LdaConstant [10]
         0x1c7c4b063c5b @   91 : c0                Star4 
         0x1c7c4b063c5c @   92 : 80 0d 01 02       CreateClosure [13], [1], #2
         0x1c7c4b063c60 @   96 : bd                Star7 
         0x1c7c4b063c61 @   97 : 80 0e 02 02       CreateClosure [14], [2], #2
         0x1c7c4b063c65 @  101 : bc                Star8 
         0x1c7c4b063c66 @  102 : 80 0f 03 02       CreateClosure [15], [3], #2
         0x1c7c4b063c6a @  106 : bb                Star9 
         0x1c7c4b063c6b @  107 : 80 10 04 02       CreateClosure [16], [4], #2
         0x1c7c4b063c6f @  111 : ba                Star10 
         0x1c7c4b063c70 @  112 : 80 11 05 02       CreateClosure [17], [5], #2
         0x1c7c4b063c74 @  116 : b9                Star11 
         0x1c7c4b063c75 @  117 : 80 12 06 02       CreateClosure [18], [6], #2
         0x1c7c4b063c79 @  121 : b8                Star12 
         0x1c7c4b063c7a @  122 : 80 13 07 02       CreateClosure [19], [7], #2
         0x1c7c4b063c7e @  126 : b7                Star13 
         0x1c7c4b063c7f @  127 : 80 14 08 02       CreateClosure [20], [8], #2
         0x1c7c4b063c83 @  131 : b6                Star14 
         0x1c7c4b063c84 @  132 : 80 15 09 02       CreateClosure [21], [9], #2
         0x1c7c4b063c88 @  136 : b5                Star15 
         0x1c7c4b063c89 @  137 : 80 16 0a 02       CreateClosure [22], [10], #2
         0x1c7c4b063c8d @  141 : 18 ea             Star r16
         0x1c7c4b063c8f @  143 : 80 17 0b 02       CreateClosure [23], [11], #2
         0x1c7c4b063c93 @  147 : 18 e9             Star r17
         0x1c7c4b063c95 @  149 : 19 f7 f5          Mov r3, r5
         0x1c7c4b063c98 @  152 : 65 28 00 f6 0e    CallRuntime [DefineClass], r4-r17
         0x1c7c4b063c9d @  157 : c0                Star4 
         0x1c7c4b063c9e @  158 : 19 f5 f9          Mov r5, r1
 2722 S> 0x1c7c4b063ca1 @  161 : 0b f9             Ldar r1
 2741 E> 0x1c7c4b063ca3 @  163 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x1c7c4b063ca7 @  167 : 0e                LdaUndefined 
 2794 S> 0x1c7c4b063ca8 @  168 : a9                Return 
Constant pool (size = 24)
0x1c7c4b063cb1: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 24
           0: 0x1c7c4b063d81 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2526d8885ab9 <String[6]: #Object>
           2: 0x2526d8884c11 <String[14]: #defineProperty>
           3: 0x1c7c4b063e51 <String[10]: #__esModule>
           4: 0x1c7c4b063e71 <ObjectBoilerplateDescription[3]>
           5: 0x1c7c4b063e99 <String[10]: #Projectile>
           6: 0x1c7c4b063eb9 <String[8]: #./entity>
           7: 0x1c7c4b063ed1 <String[10]: #./geoUtils>
           8: 0x1c7c4b063ef1 <String[15]: #./rotating_body>
           9: 0x1c7c4b063f11 <String[8]: #./vector>
          10: 0x1c7c4b063f29 <FixedArray[7]>
          11: 0x1c7c4b0642f1 <String[6]: #Entity>
          12: 0x1c7c4b064309 <SharedFunctionInfo Projectile>
          13: 0x1c7c4b0647d9 <SharedFunctionInfo get position>
          14: 0x1c7c4b064909 <SharedFunctionInfo get velocity>
          15: 0x1c7c4b064a39 <SharedFunctionInfo get size>
          16: 0x1c7c4b064b61 <SharedFunctionInfo get isDestroyed>
          17: 0x1c7c4b064c91 <SharedFunctionInfo intersection>
          18: 0x1c7c4b064e11 <SharedFunctionInfo checkCollisionDuringCurrentTick>
          19: 0x1c7c4b0652c9 <SharedFunctionInfo update>
          20: 0x1c7c4b065431 <SharedFunctionInfo destroy>
          21: 0x1c7c4b065549 <SharedFunctionInfo serializeForViewer>
          22: 0x1c7c4b0656d9 <SharedFunctionInfo serializeForPlayer>
          23: 0x1c7c4b0657f9 <SharedFunctionInfo serializeCommon>
Handler Table (size = 0)
Source Position Table (size = 55)
0x1c7c4b065a31 <ByteArray[55]>
Boilerplate at 0x1c7c4b063e71: 
0x1c7c4b063e71: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2526d8882059 <Map>
 - length: 3
           0: 8
           1: 0x2526d8886419 <String[5]: #value>
           2: 0x2526d8881729 <true>
Array at 0x1c7c4b063f29 has 7 elements:
0x1c7c4b063f29: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 7
           0: 14
           1: 0x1c7c4b063f71 <DescriptorArray[6]>
           2: 0x2526d8883301 <NumberDictionary[7]>
           3: 0x2526d8881329 <FixedArray[0]>
           4: 0x1c7c4b0640b1 <DescriptorArray[10]>
           5: 0x2526d8883301 <NumberDictionary[7]>
           6: 0x2526d8881329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xe (14)
Element[1]
0x1c7c4b063f71: [DescriptorArray] in OldSpace
 - map: 0x2526d8887761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 6
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2526d88855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 5, attrs: [__C]) @ 0x01314b9b4fe1 <AccessorInfo>
  [1]: 0x2526d88858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x01314b9b4f71 <AccessorInfo>
  [2]: 0x2526d8885cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 4, attrs: [___]) @ 0x01314b9b5051 <AccessorInfo>
  [3]: 0x2526d88865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x1c7c4b064049 <ClassPositions 338, 2721>
  [4]: 0x1c7c4b064061: [String] in OldSpace: #intersection (const data descriptor, p: 3, attrs: [W_C]) @ 7
  [5]: 0x1c7c4b064081: [String] in OldSpace: #checkCollisionDuringCurrentTick (const data descriptor, p: 1, attrs: [W_C]) @ 8
Element[2]
0x2526d8883301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x2526d8881329: [FixedArray] in ReadOnlySpace
 - map: 0x2526d88812e1 <Map>
 - length: 0
Element[4]
0x1c7c4b0640b1: [DescriptorArray] in OldSpace
 - map: 0x2526d8887761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 10
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2526d8884a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 9, attrs: [W_C]) @ 1
  [1]: 0x2526d8885c19: [String] in ReadOnlySpace: #position (const accessor descriptor, p: 0, attrs: [W_C]) @ 0x1c7c4b0641b9 <AccessorPair>(get: 3, set: 0x2526d8881339 <null>)
  [2]: 0x1c7c4b0641d1: [String] in OldSpace: #velocity (const accessor descriptor, p: 4, attrs: [W_C]) @ 0x1c7c4b0641e9 <AccessorPair>(get: 4, set: 0x2526d8881339 <null>)
  [3]: 0x2526d888a111: [String] in ReadOnlySpace: #size (const accessor descriptor, p: 5, attrs: [W_C]) @ 0x1c7c4b064201 <AccessorPair>(get: 5, set: 0x2526d8881339 <null>)
  [4]: 0x1314b98b511: [String] in OldSpace: #isDestroyed (const accessor descriptor, p: 3, attrs: [W_C]) @ 0x1c7c4b064239 <AccessorPair>(get: 6, set: 0x2526d8881339 <null>)
  [5]: 0x1314b983f01: [String] in OldSpace: #update (const data descriptor, p: 7, attrs: [W_C]) @ 9
  [6]: 0x1314b98ba19: [String] in OldSpace: #destroy (const data descriptor, p: 2, attrs: [W_C]) @ 10
  [7]: 0x1c7c4b064281: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 6, attrs: [W_C]) @ 11
  [8]: 0x1c7c4b0642a9: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 8, attrs: [W_C]) @ 12
  [9]: 0x1c7c4b0642d1: [String] in OldSpace: #serializeCommon (const data descriptor, p: 1, attrs: [W_C]) @ 13
Element[5]
0x2526d8883301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x2526d8881329: [FixedArray] in ReadOnlySpace
 - map: 0x2526d88812e1 <Map>
 - length: 0
0x1c7c4b064309 points to: [0x1c7c4b064378]
=== [0x1c7c4b064378] DISASSEMBLY ===
Parameter count 4
Register count 10
Frame size 80
OSR urgency: 0
Bytecode age: 0
         0x1c7c4b064378 @    0 : 19 fe f9          Mov <closure>, r1
         0x1c7c4b06437b @    3 : 19 03 f8          Mov a0, r2
         0x1c7c4b06437e @    6 : 0b 04             Ldar a1
         0x1c7c4b064380 @    8 : 9d 19             JumpIfNotUndefined [25] (0x1c7c4b064399 @ 33)
         0x1c7c4b064382 @   10 : 17 04             LdaImmutableCurrentContextSlot [4]
  422 E> 0x1c7c4b064384 @   12 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1c7c4b064386 @   14 : bf                Star5 
  431 E> 0x1c7c4b064387 @   15 : 2d f5 01 00       GetNamedProperty r5, [1], [0]
         0x1c7c4b06438b @   19 : bf                Star5 
         0x1c7c4b06438c @   20 : 0c                LdaZero 
         0x1c7c4b06438d @   21 : be                Star6 
         0x1c7c4b06438e @   22 : 0c                LdaZero 
         0x1c7c4b06438f @   23 : bd                Star7 
         0x1c7c4b064390 @   24 : 0b f5             Ldar r5
  418 E> 0x1c7c4b064392 @   26 : 69 f5 f4 02 02    Construct r5, r6-r7, [2]
         0x1c7c4b064397 @   31 : 8a 04             Jump [4] (0x1c7c4b06439b @ 35)
         0x1c7c4b064399 @   33 : 0b 04             Ldar a1
         0x1c7c4b06439b @   35 : c1                Star3 
         0x1c7c4b06439c @   36 : 0b 05             Ldar a2
         0x1c7c4b06439e @   38 : 9d 06             JumpIfNotUndefined [6] (0x1c7c4b0643a4 @ 44)
         0x1c7c4b0643a0 @   40 : 0d 01             LdaSmi [1]
         0x1c7c4b0643a2 @   42 : 8a 04             Jump [4] (0x1c7c4b0643a6 @ 46)
         0x1c7c4b0643a4 @   44 : 0b 05             Ldar a2
         0x1c7c4b0643a6 @   46 : c0                Star4 
  465 S> 0x1c7c4b0643a7 @   47 : 0b f9             Ldar r1
         0x1c7c4b0643a9 @   49 : 5a f4             GetSuperConstructor r6
         0x1c7c4b0643ab @   51 : ad f4             ThrowIfNotSuperConstructor r6
         0x1c7c4b0643ad @   53 : 0b fa             Ldar r0
  465 E> 0x1c7c4b0643af @   55 : 69 f4 fa 00 04    Construct r6, r0-r0, [4]
         0x1c7c4b0643b4 @   60 : bd                Star7 
         0x1c7c4b0643b5 @   61 : 0b 02             Ldar <this>
         0x1c7c4b0643b7 @   63 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x1c7c4b0643b8 @   64 : 19 f3 02          Mov r7, <this>
  482 S> 0x1c7c4b0643bb @   67 : 0b 02             Ldar <this>
         0x1c7c4b0643bd @   69 : ab                ThrowSuperNotCalledIfHole 
         0x1c7c4b0643be @   70 : 0b f8             Ldar r2
  497 E> 0x1c7c4b0643c0 @   72 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
  517 S> 0x1c7c4b0643c4 @   76 : 0b 02             Ldar <this>
         0x1c7c4b0643c6 @   78 : ab                ThrowSuperNotCalledIfHole 
         0x1c7c4b0643c7 @   79 : 0b f7             Ldar r3
  532 E> 0x1c7c4b0643c9 @   81 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
  552 S> 0x1c7c4b0643cd @   85 : 0b 02             Ldar <this>
         0x1c7c4b0643cf @   87 : ab                ThrowSuperNotCalledIfHole 
         0x1c7c4b0643d0 @   88 : 0b f6             Ldar r4
  563 E> 0x1c7c4b0643d2 @   90 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
  579 S> 0x1c7c4b0643d6 @   94 : 0b 02             Ldar <this>
         0x1c7c4b0643d8 @   96 : ab                ThrowSuperNotCalledIfHole 
         0x1c7c4b0643d9 @   97 : 12                LdaFalse 
  597 E> 0x1c7c4b0643da @   98 : 32 02 05 0c       SetNamedProperty <this>, [5], [12]
  614 S> 0x1c7c4b0643de @  102 : 0b 02             Ldar <this>
         0x1c7c4b0643e0 @  104 : ab                ThrowSuperNotCalledIfHole 
         0x1c7c4b0643e1 @  105 : 17 03             LdaImmutableCurrentContextSlot [3]
  638 E> 0x1c7c4b0643e3 @  107 : aa 06             ThrowReferenceErrorIfHole [6]
         0x1c7c4b0643e5 @  109 : be                Star6 
  654 E> 0x1c7c4b0643e6 @  110 : 2d f4 07 0e       GetNamedProperty r6, [7], [14]
         0x1c7c4b0643ea @  114 : be                Star6 
  667 E> 0x1c7c4b0643eb @  115 : 21 08 11          LdaGlobal [8], [17]
         0x1c7c4b0643ee @  118 : bc                Star8 
  672 E> 0x1c7c4b0643ef @  119 : 2d f2 09 13       GetNamedProperty r8, [9], [19]
         0x1c7c4b0643f3 @  123 : bd                Star7 
  672 E> 0x1c7c4b0643f4 @  124 : 5d f3 f2 15       CallProperty0 r7, r8, [21]
  681 E> 0x1c7c4b0643f8 @  128 : 00 47 68 01 10 00 MulSmi.Wide [360], [16]
         0x1c7c4b0643fe @  134 : bd                Star7 
  689 E> 0x1c7c4b0643ff @  135 : 21 08 11          LdaGlobal [8], [17]
         0x1c7c4b064402 @  138 : bb                Star9 
  694 E> 0x1c7c4b064403 @  139 : 2d f1 09 13       GetNamedProperty r9, [9], [19]
         0x1c7c4b064407 @  143 : bc                Star8 
  694 E> 0x1c7c4b064408 @  144 : 5d f2 f1 19       CallProperty0 r8, r9, [25]
         0x1c7c4b06440c @  148 : bc                Star8 
         0x1c7c4b06440d @  149 : 13 0a             LdaConstant [10]
  703 E> 0x1c7c4b06440f @  151 : 3a f2 18          Sub r8, [24]
         0x1c7c4b064412 @  154 : bc                Star8 
         0x1c7c4b064413 @  155 : 00 0d 90 01       LdaSmi.Wide [400]
         0x1c7c4b064417 @  159 : bb                Star9 
         0x1c7c4b064418 @  160 : 0b f6             Ldar r4
  717 E> 0x1c7c4b06441a @  162 : 3c f1 1b          Div r9, [27]
  710 E> 0x1c7c4b06441d @  165 : 3b f2 17          Mul r8, [23]
         0x1c7c4b064420 @  168 : bc                Star8 
         0x1c7c4b064421 @  169 : 0b f4             Ldar r6
  634 E> 0x1c7c4b064423 @  171 : 69 f4 f3 02 1c    Construct r6, r7-r8, [28]
  632 E> 0x1c7c4b064428 @  176 : 32 02 0b 1e       SetNamedProperty <this>, [11], [30]
         0x1c7c4b06442c @  180 : 0b 02             Ldar <this>
         0x1c7c4b06442e @  182 : ab                ThrowSuperNotCalledIfHole 
  731 S> 0x1c7c4b06442f @  183 : a9                Return 
Constant pool (size = 12)
0x1c7c4b064431: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 12
           0: 0x1c7c4b063e39 <String[8]: #vector_1>
           1: 0x1c7c4b0644a1 <String[6]: #Vector>
           2: 0x1c7c4b0644b9 <String[9]: #_position>
           3: 0x1c7c4b0644d9 <String[9]: #_velocity>
           4: 0x1c7c4b0644f9 <String[5]: #_size>
           5: 0x1c7c4b064511 <String[12]: #_isDestroyed>
           6: 0x1c7c4b063e19 <String[15]: #rotating_body_1>
           7: 0x1c7c4b064531 <String[12]: #RotatingBody>
           8: 0x01314b99a991 <String[4]: #Math>
           9: 0x01314b99aba1 <String[6]: #random>
          10: 0x1c7c4b064581 <HeapNumber 0.5>
          11: 0x1c7c4b064591 <String[12]: #_orientation>
Handler Table (size = 0)
Source Position Table (size = 64)
0x1c7c4b0645b1 <ByteArray[64]>
0x1c7c4b0647d9 points to: [0x1c7c4b064848]
=== [0x1c7c4b064848] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  774 S> 0x1c7c4b064848 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  784 S> 0x1c7c4b06484c @    4 : a9                Return 
Constant pool (size = 1)
0x1c7c4b064851: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 1
           0: 0x1c7c4b0644b9 <String[9]: #_position>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1c7c4b064869 <ByteArray[7]>
0x1c7c4b064909 points to: [0x1c7c4b064978]
=== [0x1c7c4b064978] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  832 S> 0x1c7c4b064978 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  842 S> 0x1c7c4b06497c @    4 : a9                Return 
Constant pool (size = 1)
0x1c7c4b064981: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 1
           0: 0x1c7c4b0644d9 <String[9]: #_velocity>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1c7c4b064999 <ByteArray[7]>
0x1c7c4b064a39 points to: [0x1c7c4b064aa8]
=== [0x1c7c4b064aa8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  886 S> 0x1c7c4b064aa8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  892 S> 0x1c7c4b064aac @    4 : a9                Return 
Constant pool (size = 1)
0x1c7c4b064ab1: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 1
           0: 0x1c7c4b0644f9 <String[5]: #_size>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1c7c4b064ac9 <ByteArray[7]>
0x1c7c4b064b61 points to: [0x1c7c4b064bd0]
=== [0x1c7c4b064bd0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  943 S> 0x1c7c4b064bd0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  956 S> 0x1c7c4b064bd4 @    4 : a9                Return 
Constant pool (size = 1)
0x1c7c4b064bd9: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 1
           0: 0x1c7c4b064511 <String[12]: #_isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1c7c4b064bf1 <ByteArray[7]>
0x1c7c4b064c91 points to: [0x1c7c4b064d00]
=== [0x1c7c4b064d00] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1354 S> 0x1c7c4b064d00 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c7c4b064d02 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1c7c4b064d04 @    4 : c3                Star1 
 1376 E> 0x1c7c4b064d05 @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x1c7c4b064d09 @    9 : c4                Star0 
 1403 E> 0x1c7c4b064d0a @   10 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x1c7c4b064d0e @   14 : c3                Star1 
 1415 E> 0x1c7c4b064d0f @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x1c7c4b064d13 @   19 : c2                Star2 
 1427 E> 0x1c7c4b064d14 @   20 : 2d 04 02 06       GetNamedProperty a1, [2], [6]
         0x1c7c4b064d18 @   24 : c1                Star3 
 1439 E> 0x1c7c4b064d19 @   25 : 2d 04 03 08       GetNamedProperty a1, [3], [8]
         0x1c7c4b064d1d @   29 : c0                Star4 
 1400 E> 0x1c7c4b064d1e @   30 : 60 fa f9 04 0a    CallUndefinedReceiver r0, r1-r4, [10]
 1449 S> 0x1c7c4b064d23 @   35 : a9                Return 
Constant pool (size = 4)
0x1c7c4b064d29: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 4
           0: 0x1c7c4b063df9 <String[10]: #geoUtils_1>
           1: 0x1c7c4b064d59 <String[23]: #lineSegmentIntersection>
           2: 0x2526d8885c19 <String[8]: #position>
           3: 0x1c7c4b0641d1 <String[8]: #velocity>
Handler Table (size = 0)
Source Position Table (size = 21)
0x1c7c4b064d81 <ByteArray[21]>
0x1c7c4b064e11 points to: [0x1c7c4b064e80]
=== [0x1c7c4b064e80] DISASSEMBLY ===
Parameter count 3
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
 1794 S> 0x1c7c4b064e80 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c7c4b064e82 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1c7c4b064e84 @    4 : c1                Star3 
 1809 E> 0x1c7c4b064e85 @    5 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x1c7c4b064e89 @    9 : c2                Star2 
 1838 E> 0x1c7c4b064e8a @   10 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x1c7c4b064e8e @   14 : c1                Star3 
 1851 E> 0x1c7c4b064e8f @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x1c7c4b064e93 @   19 : c0                Star4 
 1864 E> 0x1c7c4b064e94 @   20 : 2d 03 04 06       GetNamedProperty a0, [4], [6]
         0x1c7c4b064e98 @   24 : bf                Star5 
 1873 E> 0x1c7c4b064e99 @   25 : 2d 04 02 08       GetNamedProperty a1, [2], [8]
         0x1c7c4b064e9d @   29 : be                Star6 
 1886 E> 0x1c7c4b064e9e @   30 : 2d 04 03 0a       GetNamedProperty a1, [3], [10]
         0x1c7c4b064ea2 @   34 : bd                Star7 
 1899 E> 0x1c7c4b064ea3 @   35 : 2d 04 04 0c       GetNamedProperty a1, [4], [12]
         0x1c7c4b064ea7 @   39 : bc                Star8 
 1835 E> 0x1c7c4b064ea8 @   40 : 60 f8 f7 06 0e    CallUndefinedReceiver r2, r3-r8, [14]
         0x1c7c4b064ead @   45 : c4                Star0 
 1954 S> 0x1c7c4b064eae @   46 : 2d fa 05 10       GetNamedProperty r0, [5], [16]
         0x1c7c4b064eb2 @   50 : c2                Star2 
         0x1c7c4b064eb3 @   51 : 80 06 00 02       CreateClosure [6], [0], #2
         0x1c7c4b064eb7 @   55 : c0                Star4 
 1954 E> 0x1c7c4b064eb8 @   56 : 5e f8 fa f6 12    CallProperty1 r2, r0, r4, [18]
         0x1c7c4b064ebd @   61 : c3                Star1 
 2054 S> 0x1c7c4b064ebe @   62 : 2d f9 07 14       GetNamedProperty r1, [7], [20]
         0x1c7c4b064ec2 @   66 : c1                Star3 
         0x1c7c4b064ec3 @   67 : 80 08 01 02       CreateClosure [8], [1], #2
         0x1c7c4b064ec7 @   71 : bf                Star5 
 2054 E> 0x1c7c4b064ec8 @   72 : 5e f7 f9 f5 16    CallProperty1 r3, r1, r5, [22]
         0x1c7c4b064ecd @   77 : c1                Star3 
 2079 E> 0x1c7c4b064ece @   78 : 2d f7 09 18       GetNamedProperty r3, [9], [24]
         0x1c7c4b064ed2 @   82 : c2                Star2 
         0x1c7c4b064ed3 @   83 : 0c                LdaZero 
         0x1c7c4b064ed4 @   84 : c0                Star4 
 2080 E> 0x1c7c4b064ed5 @   85 : 5e f8 f7 f6 1a    CallProperty1 r2, r3, r4, [26]
         0x1c7c4b064eda @   90 : 9e 04             JumpIfUndefinedOrNull [4] (0x1c7c4b064ede @ 94)
         0x1c7c4b064edc @   92 : 8a 03             Jump [3] (0x1c7c4b064edf @ 95)
         0x1c7c4b064ede @   94 : 0f                LdaNull 
 2094 S> 0x1c7c4b064edf @   95 : a9                Return 
Constant pool (size = 10)
0x1c7c4b064ee1: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 10
           0: 0x1c7c4b063df9 <String[10]: #geoUtils_1>
           1: 0x1c7c4b064f41 <String[25]: #movingCirclesIntersection>
           2: 0x1c7c4b0644b9 <String[9]: #_position>
           3: 0x1c7c4b0644d9 <String[9]: #_velocity>
           4: 0x1c7c4b0644f9 <String[5]: #_size>
           5: 0x01314b989f61 <String[6]: #filter>
           6: 0x1c7c4b064f89 <SharedFunctionInfo>
           7: 0x01314b98eb61 <String[4]: #sort>
           8: 0x1c7c4b0650e1 <SharedFunctionInfo>
           9: 0x0aacceaeb829 <String[2]: #at>
Handler Table (size = 0)
Source Position Table (size = 39)
0x1c7c4b065219 <ByteArray[39]>
0x1c7c4b064f89 points to: [0x1c7c4b064ff8]
=== [0x1c7c4b064ff8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1990 S> 0x1c7c4b064ff8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c7c4b064ffc @    4 : c4                Star0 
         0x1c7c4b064ffd @    5 : 0c                LdaZero 
 1992 E> 0x1c7c4b064ffe @    6 : 70 fa 02          TestGreaterThanOrEqual r0, [2]
         0x1c7c4b065001 @    9 : 99 0c             JumpIfFalse [12] (0x1c7c4b06500d @ 21)
 2013 E> 0x1c7c4b065003 @   11 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c7c4b065007 @   15 : c4                Star0 
         0x1c7c4b065008 @   16 : 0d 01             LdaSmi [1]
 2015 E> 0x1c7c4b06500a @   18 : 6f fa 03          TestLessThanOrEqual r0, [3]
 2019 S> 0x1c7c4b06500d @   21 : a9                Return 
Constant pool (size = 1)
0x1c7c4b065011: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 1
           0: 0x1c7c4b065029 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 13)
0x1c7c4b065041 <ByteArray[13]>
0x1c7c4b0650e1 points to: [0x1c7c4b065150]
=== [0x1c7c4b065150] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2071 S> 0x1c7c4b065150 @    0 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x1c7c4b065154 @    4 : c4                Star0 
 2077 E> 0x1c7c4b065155 @    5 : 2d 04 00 03       GetNamedProperty a1, [0], [3]
 2073 E> 0x1c7c4b065159 @    9 : 3a fa 00          Sub r0, [0]
 2078 S> 0x1c7c4b06515c @   12 : a9                Return 
Constant pool (size = 1)
0x1c7c4b065161: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 1
           0: 0x1c7c4b065029 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1c7c4b065179 <ByteArray[11]>
0x1c7c4b0652c9 points to: [0x1c7c4b065338]
=== [0x1c7c4b065338] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2146 S> 0x1c7c4b065338 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1c7c4b06533c @    4 : c2                Star2 
 2156 E> 0x1c7c4b06533d @    5 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x1c7c4b065341 @    9 : c3                Star1 
 2165 E> 0x1c7c4b065342 @   10 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x1c7c4b065346 @   14 : c1                Star3 
 2156 E> 0x1c7c4b065347 @   15 : 5e f9 f8 f7 06    CallProperty1 r1, r2, r3, [6]
 2139 E> 0x1c7c4b06534c @   20 : 32 02 00 08       SetNamedProperty <this>, [0], [8]
 2190 S> 0x1c7c4b065350 @   24 : 2d 02 03 0a       GetNamedProperty <this>, [3], [10]
         0x1c7c4b065354 @   28 : c3                Star1 
 2203 E> 0x1c7c4b065355 @   29 : 2d f9 04 0c       GetNamedProperty r1, [4], [12]
         0x1c7c4b065359 @   33 : c4                Star0 
 2203 E> 0x1c7c4b06535a @   34 : 5d fa f9 0e       CallProperty0 r0, r1, [14]
         0x1c7c4b06535e @   38 : 0e                LdaUndefined 
 2217 S> 0x1c7c4b06535f @   39 : a9                Return 
Constant pool (size = 5)
0x1c7c4b065361: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 5
           0: 0x1c7c4b0644b9 <String[9]: #_position>
           1: 0x2526d8884569 <String[3]: #add>
           2: 0x1c7c4b0644d9 <String[9]: #_velocity>
           3: 0x1c7c4b064591 <String[12]: #_orientation>
           4: 0x01314b983f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 23)
0x1c7c4b065399 <ByteArray[23]>
0x1c7c4b065431 points to: [0x1c7c4b0654a0]
=== [0x1c7c4b0654a0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2243 S> 0x1c7c4b0654a0 @    0 : 11                LdaTrue 
 2261 E> 0x1c7c4b0654a1 @    1 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x1c7c4b0654a5 @    5 : 0e                LdaUndefined 
 2273 S> 0x1c7c4b0654a6 @    6 : a9                Return 
Constant pool (size = 1)
0x1c7c4b0654a9: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 1
           0: 0x1c7c4b064511 <String[12]: #_isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1c7c4b0654c1 <ByteArray[9]>
0x1c7c4b065549 points to: [0x1c7c4b0655b8]
=== [0x1c7c4b0655b8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2339 S> 0x1c7c4b0655b8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1c7c4b0655bc @    4 : c3                Star1 
 2339 E> 0x1c7c4b0655bd @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x1c7c4b0655c1 @    9 : c3                Star1 
         0x1c7c4b0655c2 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x1c7c4b0655c6 @   14 : c4                Star0 
 2388 E> 0x1c7c4b0655c7 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x1c7c4b0655cb @   19 : c3                Star1 
 2401 E> 0x1c7c4b0655cc @   20 : 2d f9 02 08       GetNamedProperty r1, [2], [8]
         0x1c7c4b0655d0 @   24 : 33 fa 03 0a       DefineNamedOwnProperty r0, [3], [10]
         0x1c7c4b0655d4 @   28 : 0b fa             Ldar r0
 2431 S> 0x1c7c4b0655d6 @   30 : a9                Return 
Constant pool (size = 4)
0x1c7c4b0655d9: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 4
           0: 0x1c7c4b0642d1 <String[15]: #serializeCommon>
           1: 0x1c7c4b064591 <String[12]: #_orientation>
           2: 0x1c7c4b065609 <String[18]: #orientationDegrees>
           3: 0x1c7c4b065631 <String[11]: #orientation>
Handler Table (size = 0)
Source Position Table (size = 15)
0x1c7c4b065651 <ByteArray[15]>
0x1c7c4b0656d9 points to: [0x1c7c4b065748]
=== [0x1c7c4b065748] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2485 S> 0x1c7c4b065748 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1c7c4b06574c @    4 : c4                Star0 
 2485 E> 0x1c7c4b06574d @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
 2503 S> 0x1c7c4b065751 @    9 : a9                Return 
Constant pool (size = 1)
0x1c7c4b065759: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 1
           0: 0x1c7c4b0642d1 <String[15]: #serializeCommon>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1c7c4b065771 <ByteArray[9]>
0x1c7c4b0657f9 points to: [0x1c7c4b065868]
=== [0x1c7c4b065868] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2542 S> 0x1c7c4b065868 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1c7c4b06586c @    4 : c4                Star0 
 2572 E> 0x1c7c4b06586d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x1c7c4b065871 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 2603 E> 0x1c7c4b065875 @   13 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x1c7c4b065879 @   17 : c2                Star2 
 2612 E> 0x1c7c4b06587a @   18 : 2d f8 03 07       GetNamedProperty r2, [3], [7]
         0x1c7c4b06587e @   22 : c3                Star1 
 2612 E> 0x1c7c4b06587f @   23 : 5d f9 f8 09       CallProperty0 r1, r2, [9]
         0x1c7c4b065883 @   27 : 33 fa 02 0b       DefineNamedOwnProperty r0, [2], [11]
 2652 E> 0x1c7c4b065887 @   31 : 2d 02 04 0d       GetNamedProperty <this>, [4], [13]
         0x1c7c4b06588b @   35 : c2                Star2 
 2661 E> 0x1c7c4b06588c @   36 : 2d f8 03 0f       GetNamedProperty r2, [3], [15]
         0x1c7c4b065890 @   40 : c3                Star1 
 2661 E> 0x1c7c4b065891 @   41 : 5d f9 f8 11       CallProperty0 r1, r2, [17]
         0x1c7c4b065895 @   45 : 33 fa 04 13       DefineNamedOwnProperty r0, [4], [19]
 2697 E> 0x1c7c4b065899 @   49 : 2d 02 05 15       GetNamedProperty <this>, [5], [21]
         0x1c7c4b06589d @   53 : 33 fa 05 17       DefineNamedOwnProperty r0, [5], [23]
         0x1c7c4b0658a1 @   57 : 0b fa             Ldar r0
 2713 S> 0x1c7c4b0658a3 @   59 : a9                Return 
Constant pool (size = 6)
0x1c7c4b0658a9: [FixedArray] in OldSpace
 - map: 0x2526d88812e1 <Map>
 - length: 6
           0: 0x1c7c4b0658e9 <ObjectBoilerplateDescription[9]>
           1: 0x2526d88852d9 <String[2]: #id>
           2: 0x2526d8885c19 <String[8]: #position>
           3: 0x01314b9901a9 <String[9]: #serialize>
           4: 0x1c7c4b0641d1 <String[8]: #velocity>
           5: 0x2526d888a111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 25)
0x1c7c4b065961 <ByteArray[25]>
Boilerplate at 0x1c7c4b0658e9: 
0x1c7c4b0658e9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2526d8882059 <Map>
 - length: 9
           0: 8
           1: 0x2526d88852d9 <String[2]: #id>
           2: 0x2526d8881501 <Odd Oddball: uninitialized>
           3: 0x2526d8885c19 <String[8]: #position>
           4: 0x2526d8881501 <Odd Oddball: uninitialized>
           5: 0x1c7c4b0641d1 <String[8]: #velocity>
           6: 0x2526d8881501 <Odd Oddball: uninitialized>
           7: 0x2526d888a111 <String[4]: #size>
           8: 0x2526d8881501 <Odd Oddball: uninitialized>
<< OUTPUTTING DISASSEMBLY END >>

```