<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x26212eee4e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x26212eee4e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x26212eee4e4c @    4 : c4                Star0 
 2243 S> 0x26212eee4e4d @    5 : a9                Return 
Constant pool (size = 1)
0x26212eee4e51: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 1
           0: 0x26212eee4e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x26212eee6631 <ByteArray[7]>
0x26212eee4e69 points to: [0x26212eee4ed8]
=== [0x26212eee4ed8] DISASSEMBLY ===
Parameter count 6
Register count 14
Frame size 112
OSR urgency: 0
Bytecode age: 0
   10 E> 0x26212eee4ed8 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x26212eee4edb @    3 : 1a f8             PushContext r2
         0x26212eee4edd @    5 : 10                LdaTheHole 
         0x26212eee4ede @    6 : 25 02             StaCurrentContextSlot [2]
         0x26212eee4ee0 @    8 : 10                LdaTheHole 
         0x26212eee4ee1 @    9 : 25 03             StaCurrentContextSlot [3]
   76 S> 0x26212eee4ee3 @   11 : 21 01 00          LdaGlobal [1], [0]
         0x26212eee4ee6 @   14 : c0                Star4 
   83 E> 0x26212eee4ee7 @   15 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x26212eee4eeb @   19 : c1                Star3 
         0x26212eee4eec @   20 : 13 03             LdaConstant [3]
         0x26212eee4eee @   22 : be                Star6 
   98 E> 0x26212eee4eef @   23 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x26212eee4ef3 @   27 : bd                Star7 
         0x26212eee4ef4 @   28 : 19 03 f5          Mov a0, r5
   83 E> 0x26212eee4ef7 @   31 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x26212eee4efc @   36 : 0e                LdaUndefined 
  154 E> 0x26212eee4efd @   37 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  187 S> 0x26212eee4f01 @   41 : 13 06             LdaConstant [6]
         0x26212eee4f03 @   43 : c0                Star4 
  187 E> 0x26212eee4f04 @   44 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
  187 E> 0x26212eee4f08 @   48 : 25 02             StaCurrentContextSlot [2]
  235 S> 0x26212eee4f0a @   50 : 13 07             LdaConstant [7]
         0x26212eee4f0c @   52 : c0                Star4 
  235 E> 0x26212eee4f0d @   53 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
         0x26212eee4f11 @   57 : c4                Star0 
  277 S> 0x26212eee4f12 @   58 : 13 08             LdaConstant [8]
         0x26212eee4f14 @   60 : c0                Star4 
  277 E> 0x26212eee4f15 @   61 : 62 04 f6 0d       CallUndefinedReceiver1 a1, r4, [13]
  277 E> 0x26212eee4f19 @   65 : 25 03             StaCurrentContextSlot [3]
         0x26212eee4f1b @   67 : 81 09             CreateBlockContext [9]
         0x26212eee4f1d @   69 : 1a f7             PushContext r3
         0x26212eee4f1f @   71 : 10                LdaTheHole 
         0x26212eee4f20 @   72 : 25 04             StaCurrentContextSlot [4]
  332 E> 0x26212eee4f22 @   74 : 2d fa 0b 0f       GetNamedProperty r0, [11], [15]
         0x26212eee4f26 @   78 : bd                Star7 
         0x26212eee4f27 @   79 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x26212eee4f2b @   83 : c0                Star4 
         0x26212eee4f2c @   84 : 13 0a             LdaConstant [10]
         0x26212eee4f2e @   86 : bf                Star5 
         0x26212eee4f2f @   87 : 80 0d 01 02       CreateClosure [13], [1], #2
         0x26212eee4f33 @   91 : bc                Star8 
         0x26212eee4f34 @   92 : 80 0e 02 02       CreateClosure [14], [2], #2
         0x26212eee4f38 @   96 : bb                Star9 
         0x26212eee4f39 @   97 : 80 0f 03 02       CreateClosure [15], [3], #2
         0x26212eee4f3d @  101 : ba                Star10 
         0x26212eee4f3e @  102 : 80 10 04 02       CreateClosure [16], [4], #2
         0x26212eee4f42 @  106 : b9                Star11 
         0x26212eee4f43 @  107 : 80 11 05 02       CreateClosure [17], [5], #2
         0x26212eee4f47 @  111 : b8                Star12 
         0x26212eee4f48 @  112 : 80 12 06 02       CreateClosure [18], [6], #2
         0x26212eee4f4c @  116 : b7                Star13 
         0x26212eee4f4d @  117 : 19 f6 f4          Mov r4, r6
         0x26212eee4f50 @  120 : 65 28 00 f5 09    CallRuntime [DefineClass], r5-r13
         0x26212eee4f55 @  125 : 25 02             StaCurrentContextSlot [2]
         0x26212eee4f57 @  127 : bf                Star5 
         0x26212eee4f58 @  128 : 0b f4             Ldar r6
         0x26212eee4f5a @  130 : 25 03             StaCurrentContextSlot [3]
         0x26212eee4f5c @  132 : 25 04             StaCurrentContextSlot [4]
         0x26212eee4f5e @  134 : 1b f7             PopContext r3
         0x26212eee4f60 @  136 : c3                Star1 
 2180 S> 0x26212eee4f61 @  137 : 0b f9             Ldar r1
 2195 E> 0x26212eee4f63 @  139 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x26212eee4f67 @  143 : 0e                LdaUndefined 
 2240 S> 0x26212eee4f68 @  144 : a9                Return 
Constant pool (size = 19)
0x26212eee4f71: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 19
           0: 0x26212eee5019 <ScopeInfo FUNCTION_SCOPE>
           1: 0x133d63f85ab9 <String[6]: #Object>
           2: 0x133d63f84c11 <String[14]: #defineProperty>
           3: 0x26212eee50b9 <String[10]: #__esModule>
           4: 0x26212eee50d9 <ObjectBoilerplateDescription[3]>
           5: 0x26212eee5101 <String[6]: #Meteor>
           6: 0x26212eee5119 <String[14]: #./meteor_infos>
           7: 0x26212eee5139 <String[12]: #./projectile>
           8: 0x26212eee5159 <String[8]: #./vector>
           9: 0x26212eee5171 <ScopeInfo CLASS_SCOPE>
          10: 0x26212eee51d9 <FixedArray[7]>
          11: 0x26212eee5481 <String[10]: #Projectile>
          12: 0x26212eee54a1 <SharedFunctionInfo Meteor>
          13: 0x26212eee5899 <SharedFunctionInfo Build>
          14: 0x26212eee5c59 <SharedFunctionInfo BuildDebug>
          15: 0x26212eee5e09 <SharedFunctionInfo get score>
          16: 0x26212eee5f51 <SharedFunctionInfo getMeteorsAfterExplosion>
          17: 0x26212eee6341 <SharedFunctionInfo serializeForViewer>
          18: 0x26212eee6479 <SharedFunctionInfo serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 48)
0x26212eee65d1 <ByteArray[48]>
Boilerplate at 0x26212eee50d9: 
0x26212eee50d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x133d63f82059 <Map>
 - length: 3
           0: 8
           1: 0x133d63f86419 <String[5]: #value>
           2: 0x133d63f81729 <true>
Array at 0x26212eee51d9 has 7 elements:
0x26212eee51d9: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 7
           0: 9
           1: 0x26212eee5221 <DescriptorArray[6]>
           2: 0x133d63f83301 <NumberDictionary[7]>
           3: 0x133d63f81329 <FixedArray[0]>
           4: 0x26212eee5349 <DescriptorArray[5]>
           5: 0x133d63f83301 <NumberDictionary[7]>
           6: 0x133d63f81329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x9 (9)
Element[1]
0x26212eee5221: [DescriptorArray] in OldSpace
 - map: 0x133d63f87761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 6
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x133d63f855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 4, attrs: [__C]) @ 0x2395143b4fe1 <AccessorInfo>
  [1]: 0x133d63f858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x2395143b4f71 <AccessorInfo>
  [2]: 0x133d63f85cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x2395143b5051 <AccessorInfo>
  [3]: 0x133d63f865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 3, attrs: [W_C]) @ 0x26212eee52f9 <ClassPositions 298, 2179>
  [4]: 0x26212eee5311: [String] in OldSpace: #Build (const data descriptor, p: 5, attrs: [W_C]) @ 3
  [5]: 0x26212eee5329: [String] in OldSpace: #BuildDebug (const data descriptor, p: 0, attrs: [W_C]) @ 4
Element[2]
0x133d63f83301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x133d63f81329: [FixedArray] in ReadOnlySpace
 - map: 0x133d63f812e1 <Map>
 - length: 0
Element[4]
0x26212eee5349: [DescriptorArray] in OldSpace
 - map: 0x133d63f87761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x133d63f84a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 4, attrs: [W_C]) @ 1
  [1]: 0x26212eee53d9: [String] in OldSpace: #score (const accessor descriptor, p: 2, attrs: [W_C]) @ 0x26212eee53f1 <AccessorPair>(get: 5, set: 0x133d63f81339 <null>)
  [2]: 0x26212eee5409: [String] in OldSpace: #getMeteorsAfterExplosion (const data descriptor, p: 0, attrs: [W_C]) @ 6
  [3]: 0x26212eee5431: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 1, attrs: [W_C]) @ 7
  [4]: 0x26212eee5459: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 3, attrs: [W_C]) @ 8
Element[5]
0x133d63f83301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x133d63f81329: [FixedArray] in ReadOnlySpace
 - map: 0x133d63f812e1 <Map>
 - length: 0
0x26212eee54a1 points to: [0x26212eee5510]
=== [0x26212eee5510] DISASSEMBLY ===
Parameter count 5
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
         0x26212eee5510 @    0 : 19 fe f9          Mov <closure>, r1
         0x26212eee5513 @    3 : 19 03 f8          Mov a0, r2
         0x26212eee5516 @    6 : 0b 04             Ldar a1
         0x26212eee5518 @    8 : 9d 1b             JumpIfNotUndefined [27] (0x26212eee5533 @ 35)
         0x26212eee551a @   10 : 15 ff 03 01       LdaImmutableContextSlot <context>, [3], [1]
 1313 E> 0x26212eee551e @   14 : aa 00             ThrowReferenceErrorIfHole [0]
         0x26212eee5520 @   16 : be                Star6 
 1322 E> 0x26212eee5521 @   17 : 2d f4 01 00       GetNamedProperty r6, [1], [0]
         0x26212eee5525 @   21 : be                Star6 
         0x26212eee5526 @   22 : 0c                LdaZero 
         0x26212eee5527 @   23 : bd                Star7 
         0x26212eee5528 @   24 : 0c                LdaZero 
         0x26212eee5529 @   25 : bc                Star8 
         0x26212eee552a @   26 : 0b f4             Ldar r6
 1309 E> 0x26212eee552c @   28 : 69 f4 f3 02 02    Construct r6, r7-r8, [2]
         0x26212eee5531 @   33 : 8a 04             Jump [4] (0x26212eee5535 @ 37)
         0x26212eee5533 @   35 : 0b 04             Ldar a1
         0x26212eee5535 @   37 : c1                Star3 
         0x26212eee5536 @   38 : 0b 05             Ldar a2
         0x26212eee5538 @   40 : 9d 14             JumpIfNotUndefined [20] (0x26212eee554c @ 60)
         0x26212eee553a @   42 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1349 E> 0x26212eee553e @   46 : aa 02             ThrowReferenceErrorIfHole [2]
         0x26212eee5540 @   48 : be                Star6 
 1364 E> 0x26212eee5541 @   49 : 2d f4 03 04       GetNamedProperty r6, [3], [4]
         0x26212eee5545 @   53 : be                Star6 
 1375 E> 0x26212eee5546 @   54 : 2d f4 04 06       GetNamedProperty r6, [4], [6]
         0x26212eee554a @   58 : 8a 04             Jump [4] (0x26212eee554e @ 62)
         0x26212eee554c @   60 : 0b 05             Ldar a2
         0x26212eee554e @   62 : c0                Star4 
         0x26212eee554f @   63 : 19 06 f5          Mov a3, r5
 1405 S> 0x26212eee5552 @   66 : 0b f9             Ldar r1
         0x26212eee5554 @   68 : 5a f3             GetSuperConstructor r7
         0x26212eee5556 @   70 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1431 E> 0x26212eee555a @   74 : aa 02             ThrowReferenceErrorIfHole [2]
         0x26212eee555c @   76 : b9                Star11 
 1446 E> 0x26212eee555d @   77 : 2d ef 05 08       GetNamedProperty r11, [5], [8]
         0x26212eee5561 @   81 : b9                Star11 
 1464 E> 0x26212eee5562 @   82 : 2d ef 06 0a       GetNamedProperty r11, [6], [10]
         0x26212eee5566 @   86 : ba                Star10 
 1464 E> 0x26212eee5567 @   87 : 5e f0 ef f6 0c    CallProperty1 r10, r11, r4, [12]
         0x26212eee556c @   92 : ba                Star10 
         0x26212eee556d @   93 : 19 f9 f4          Mov r1, r6
         0x26212eee5570 @   96 : 19 f8 f2          Mov r2, r8
         0x26212eee5573 @   99 : 19 f7 f1          Mov r3, r9
         0x26212eee5576 @  102 : 9e 08             JumpIfUndefinedOrNull [8] (0x26212eee557e @ 110)
 1479 E> 0x26212eee5578 @  104 : 2d f0 07 0e       GetNamedProperty r10, [7], [14]
         0x26212eee557c @  108 : 8a 03             Jump [3] (0x26212eee557f @ 111)
         0x26212eee557e @  110 : 0e                LdaUndefined 
         0x26212eee557f @  111 : ad f3             ThrowIfNotSuperConstructor r7
         0x26212eee5581 @  113 : ba                Star10 
         0x26212eee5582 @  114 : 0b fa             Ldar r0
 1405 E> 0x26212eee5584 @  116 : 69 f3 f2 03 10    Construct r7, r8-r10, [16]
         0x26212eee5589 @  121 : b9                Star11 
         0x26212eee558a @  122 : 0b 02             Ldar <this>
         0x26212eee558c @  124 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x26212eee558d @  125 : 19 ef 02          Mov r11, <this>
 1496 S> 0x26212eee5590 @  128 : 0b 02             Ldar <this>
         0x26212eee5592 @  130 : ab                ThrowSuperNotCalledIfHole 
         0x26212eee5593 @  131 : 0b f6             Ldar r4
 1512 E> 0x26212eee5595 @  133 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
 1534 S> 0x26212eee5599 @  137 : 0b 02             Ldar <this>
         0x26212eee559b @  139 : ab                ThrowSuperNotCalledIfHole 
         0x26212eee559c @  140 : 0b f5             Ldar r5
 1551 E> 0x26212eee559e @  142 : 32 02 09 14       SetNamedProperty <this>, [9], [20]
         0x26212eee55a2 @  146 : 0b 02             Ldar <this>
         0x26212eee55a4 @  148 : ab                ThrowSuperNotCalledIfHole 
 1570 S> 0x26212eee55a5 @  149 : a9                Return 
Constant pool (size = 10)
0x26212eee55a9: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 10
           0: 0x26212eee50a1 <String[8]: #vector_1>
           1: 0x26212eee5609 <String[6]: #Vector>
           2: 0x26212eee5081 <String[14]: #meteor_infos_1>
           3: 0x26212eee5621 <String[10]: #MeteorType>
           4: 0x26212eee5641 <String[5]: #Large>
           5: 0x26212eee5659 <String[17]: #METEOR_TYPE_INFOS>
           6: 0x133d63f850e9 <String[3]: #get>
           7: 0x133d63f8a111 <String[4]: #size>
           8: 0x26212eee5681 <String[10]: #meteorType>
           9: 0x26212eee56a1 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 42)
0x26212eee56c1 <ByteArray[42]>
0x26212eee5899 points to: [0x26212eee5908]
=== [0x26212eee5908] DISASSEMBLY ===
Parameter count 4
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
         0x26212eee5908 @    0 : 19 03 fa          Mov a0, r0
         0x26212eee590b @    3 : 0b 04             Ldar a1
         0x26212eee590d @    5 : 9d 1b             JumpIfNotUndefined [27] (0x26212eee5928 @ 32)
         0x26212eee590f @    7 : 15 ff 03 01       LdaImmutableContextSlot <context>, [3], [1]
  387 E> 0x26212eee5913 @   11 : aa 00             ThrowReferenceErrorIfHole [0]
         0x26212eee5915 @   13 : bd                Star7 
  396 E> 0x26212eee5916 @   14 : 2d f3 01 00       GetNamedProperty r7, [1], [0]
         0x26212eee591a @   18 : bd                Star7 
         0x26212eee591b @   19 : 0c                LdaZero 
         0x26212eee591c @   20 : bc                Star8 
         0x26212eee591d @   21 : 0c                LdaZero 
         0x26212eee591e @   22 : bb                Star9 
         0x26212eee591f @   23 : 0b f3             Ldar r7
  383 E> 0x26212eee5921 @   25 : 69 f3 f2 02 02    Construct r7, r8-r9, [2]
         0x26212eee5926 @   30 : 8a 04             Jump [4] (0x26212eee592a @ 34)
         0x26212eee5928 @   32 : 0b 04             Ldar a1
         0x26212eee592a @   34 : c3                Star1 
         0x26212eee592b @   35 : 0b 05             Ldar a2
         0x26212eee592d @   37 : 9d 14             JumpIfNotUndefined [20] (0x26212eee5941 @ 57)
         0x26212eee592f @   39 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
  423 E> 0x26212eee5933 @   43 : aa 02             ThrowReferenceErrorIfHole [2]
         0x26212eee5935 @   45 : bd                Star7 
  438 E> 0x26212eee5936 @   46 : 2d f3 03 04       GetNamedProperty r7, [3], [4]
         0x26212eee593a @   50 : bd                Star7 
  449 E> 0x26212eee593b @   51 : 2d f3 04 06       GetNamedProperty r7, [4], [6]
         0x26212eee593f @   55 : 8a 04             Jump [4] (0x26212eee5943 @ 59)
         0x26212eee5941 @   57 : 0b 05             Ldar a2
         0x26212eee5943 @   59 : c2                Star2 
  486 S> 0x26212eee5944 @   60 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x26212eee5948 @   64 : aa 02             ThrowReferenceErrorIfHole [2]
         0x26212eee594a @   66 : bc                Star8 
  501 E> 0x26212eee594b @   67 : 2d f2 05 08       GetNamedProperty r8, [5], [8]
         0x26212eee594f @   71 : bc                Star8 
  519 E> 0x26212eee5950 @   72 : 2d f2 06 0a       GetNamedProperty r8, [6], [10]
         0x26212eee5954 @   76 : bd                Star7 
  519 E> 0x26212eee5955 @   77 : 5e f3 f2 f8 0c    CallProperty1 r7, r8, r2, [12]
         0x26212eee595a @   82 : c1                Star3 
  544 S> 0x26212eee595b @   83 : 1d                TestUndetectable 
         0x26212eee595c @   84 : 99 1e             JumpIfFalse [30] (0x26212eee597a @ 114)
  583 S> 0x26212eee595e @   86 : 21 07 0e          LdaGlobal [7], [14]
         0x26212eee5961 @   89 : bd                Star7 
         0x26212eee5962 @   90 : 13 08             LdaConstant [8]
         0x26212eee5964 @   92 : bc                Star8 
         0x26212eee5965 @   93 : 0b f8             Ldar r2
  618 E> 0x26212eee5967 @   95 : 77                ToString 
         0x26212eee5968 @   96 : 39 f2 10          Add r8, [16]
         0x26212eee596b @   99 : bc                Star8 
         0x26212eee596c @  100 : 13 09             LdaConstant [9]
         0x26212eee596e @  102 : 39 f2 10          Add r8, [16]
         0x26212eee5971 @  105 : bc                Star8 
         0x26212eee5972 @  106 : 0b f3             Ldar r7
  589 E> 0x26212eee5974 @  108 : 69 f3 f2 01 11    Construct r7, r8-r8, [17]
  583 E> 0x26212eee5979 @  113 : a7                Throw 
  673 S> 0x26212eee597a @  114 : 19 f9 f6          Mov r1, r4
  710 S> 0x26212eee597d @  117 : 2d f6 0a 13       GetNamedProperty r4, [10], [19]
         0x26212eee5981 @  121 : bd                Star7 
         0x26212eee5982 @  122 : 0c                LdaZero 
  720 E> 0x26212eee5983 @  123 : 6e f3 15          TestGreaterThan r7, [21]
         0x26212eee5986 @  126 : 99 49             JumpIfFalse [73] (0x26212eee59cf @ 199)
  739 E> 0x26212eee5988 @  128 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x26212eee598c @  132 : 97 43             JumpIfToBooleanFalse [67] (0x26212eee59cf @ 199)
  788 S> 0x26212eee598e @  134 : 13 0c             LdaConstant [12]
         0x26212eee5990 @  136 : bf                Star5 
  826 S> 0x26212eee5991 @  137 : 0d 01             LdaSmi [1]
         0x26212eee5993 @  139 : bd                Star7 
  831 E> 0x26212eee5994 @  140 : 21 0d 1a          LdaGlobal [13], [26]
         0x26212eee5997 @  143 : bb                Star9 
  836 E> 0x26212eee5998 @  144 : 2d f1 0e 1c       GetNamedProperty r9, [14], [28]
         0x26212eee599c @  148 : bc                Star8 
  836 E> 0x26212eee599d @  149 : 5d f2 f1 1e       CallProperty0 r8, r9, [30]
         0x26212eee59a1 @  153 : bc                Star8 
         0x26212eee59a2 @  154 : 0b f5             Ldar r5
  845 E> 0x26212eee59a4 @  156 : 3b f2 20          Mul r8, [32]
  867 E> 0x26212eee59a7 @  159 : 47 02 21          MulSmi [2], [33]
  828 E> 0x26212eee59aa @  162 : 39 f3 19          Add r7, [25]
         0x26212eee59ad @  165 : bd                Star7 
         0x26212eee59ae @  166 : 0b f5             Ldar r5
  872 E> 0x26212eee59b0 @  168 : 3a f3 18          Sub r7, [24]
         0x26212eee59b3 @  171 : be                Star6 
  939 S> 0x26212eee59b4 @  172 : 2d f6 0f 22       GetNamedProperty r4, [15], [34]
         0x26212eee59b8 @  176 : bc                Star8 
  950 E> 0x26212eee59b9 @  177 : 2d f2 10 24       GetNamedProperty r8, [16], [36]
         0x26212eee59bd @  181 : bd                Star7 
  971 E> 0x26212eee59be @  182 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x26212eee59c2 @  186 : bb                Star9 
         0x26212eee59c3 @  187 : 0b f4             Ldar r6
  977 E> 0x26212eee59c5 @  189 : 3b f1 26          Mul r9, [38]
         0x26212eee59c8 @  192 : bb                Star9 
  950 E> 0x26212eee59c9 @  193 : 5e f3 f2 f1 27    CallProperty1 r7, r8, r9, [39]
         0x26212eee59ce @  198 : c0                Star4 
 1012 S> 0x26212eee59cf @  199 : 16 04             LdaCurrentContextSlot [4]
         0x26212eee59d1 @  201 : aa 11             ThrowReferenceErrorIfHole [17]
         0x26212eee59d3 @  203 : bd                Star7 
         0x26212eee59d4 @  204 : 0b f3             Ldar r7
         0x26212eee59d6 @  206 : 19 fa f2          Mov r0, r8
         0x26212eee59d9 @  209 : 19 f6 f1          Mov r4, r9
         0x26212eee59dc @  212 : 19 f8 f0          Mov r2, r10
         0x26212eee59df @  215 : 19 f7 ef          Mov r3, r11
 1019 E> 0x26212eee59e2 @  218 : 69 f3 f2 04 29    Construct r7, r8-r11, [41]
 1081 S> 0x26212eee59e7 @  223 : a9                Return 
Constant pool (size = 18)
0x26212eee59e9: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 18
           0: 0x26212eee50a1 <String[8]: #vector_1>
           1: 0x26212eee5609 <String[6]: #Vector>
           2: 0x26212eee5081 <String[14]: #meteor_infos_1>
           3: 0x26212eee5621 <String[10]: #MeteorType>
           4: 0x26212eee5641 <String[5]: #Large>
           5: 0x26212eee5659 <String[17]: #METEOR_TYPE_INFOS>
           6: 0x133d63f850e9 <String[3]: #get>
           7: 0x133d63f84de1 <String[5]: #Error>
           8: 0x26212eee5a89 <String[16]: #Unknown meteor '>
           9: 0x2395143b4c49 <String[1]: #'>
          10: 0x26212eee5ac1 <String[9]: #magnitude>
          11: 0x26212eee5ae1 <String[5]: #speed>
          12: 0x26212eee5af9 <HeapNumber 0.2>
          13: 0x23951439a991 <String[4]: #Math>
          14: 0x23951439aba1 <String[6]: #random>
          15: 0x26212eee5b39 <String[10]: #normalized>
          16: 0x26212eee5b59 <String[8]: #multiply>
          17: 0x26212eee5101 <String[6]: #Meteor>
Handler Table (size = 0)
Source Position Table (size = 88)
0x26212eee5b71 <ByteArray[88]>
0x26212eee5c59 points to: [0x26212eee5cc8]
=== [0x26212eee5cc8] DISASSEMBLY ===
Parameter count 4
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0x26212eee5cc8 @    0 : 19 03 fa          Mov a0, r0
         0x26212eee5ccb @    3 : 0b 04             Ldar a1
         0x26212eee5ccd @    5 : 9d 1b             JumpIfNotUndefined [27] (0x26212eee5ce8 @ 32)
         0x26212eee5ccf @    7 : 15 ff 03 01       LdaImmutableContextSlot <context>, [3], [1]
 1135 E> 0x26212eee5cd3 @   11 : aa 00             ThrowReferenceErrorIfHole [0]
         0x26212eee5cd5 @   13 : c1                Star3 
 1144 E> 0x26212eee5cd6 @   14 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x26212eee5cda @   18 : c1                Star3 
         0x26212eee5cdb @   19 : 0c                LdaZero 
         0x26212eee5cdc @   20 : c0                Star4 
         0x26212eee5cdd @   21 : 0c                LdaZero 
         0x26212eee5cde @   22 : bf                Star5 
         0x26212eee5cdf @   23 : 0b f7             Ldar r3
 1131 E> 0x26212eee5ce1 @   25 : 69 f7 f6 02 02    Construct r3, r4-r5, [2]
         0x26212eee5ce6 @   30 : 8a 04             Jump [4] (0x26212eee5cea @ 34)
         0x26212eee5ce8 @   32 : 0b 04             Ldar a1
         0x26212eee5cea @   34 : c3                Star1 
         0x26212eee5ceb @   35 : 19 05 f8          Mov a2, r2
 1181 S> 0x26212eee5cee @   38 : 16 04             LdaCurrentContextSlot [4]
         0x26212eee5cf0 @   40 : aa 02             ThrowReferenceErrorIfHole [2]
         0x26212eee5cf2 @   42 : c1                Star3 
         0x26212eee5cf3 @   43 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1219 E> 0x26212eee5cf7 @   47 : aa 03             ThrowReferenceErrorIfHole [3]
         0x26212eee5cf9 @   49 : be                Star6 
 1234 E> 0x26212eee5cfa @   50 : 2d f4 04 04       GetNamedProperty r6, [4], [4]
         0x26212eee5cfe @   54 : be                Star6 
 1245 E> 0x26212eee5cff @   55 : 2d f4 05 06       GetNamedProperty r6, [5], [6]
         0x26212eee5d03 @   59 : be                Star6 
         0x26212eee5d04 @   60 : 0b f7             Ldar r3
         0x26212eee5d06 @   62 : 19 fa f6          Mov r0, r4
         0x26212eee5d09 @   65 : 19 f9 f5          Mov r1, r5
         0x26212eee5d0c @   68 : 19 05 f3          Mov a2, r7
 1188 E> 0x26212eee5d0f @   71 : 69 f7 f6 04 08    Construct r3, r4-r7, [8]
 1265 S> 0x26212eee5d14 @   76 : a9                Return 
Constant pool (size = 6)
0x26212eee5d19: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 6
           0: 0x26212eee50a1 <String[8]: #vector_1>
           1: 0x26212eee5609 <String[6]: #Vector>
           2: 0x26212eee5101 <String[6]: #Meteor>
           3: 0x26212eee5081 <String[14]: #meteor_infos_1>
           4: 0x26212eee5621 <String[10]: #MeteorType>
           5: 0x2395143aaf39 <String[5]: #Debug>
Handler Table (size = 0)
Source Position Table (size = 25)
0x26212eee5d71 <ByteArray[25]>
0x26212eee5e09 points to: [0x26212eee5e78]
=== [0x26212eee5e78] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1610 S> 0x26212eee5e78 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x26212eee5e7c @    4 : c4                Star0 
 1622 E> 0x26212eee5e7d @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x26212eee5e81 @    9 : 9e 04             JumpIfUndefinedOrNull [4] (0x26212eee5e85 @ 13)
         0x26212eee5e83 @   11 : 8a 03             Jump [3] (0x26212eee5e86 @ 14)
         0x26212eee5e85 @   13 : 0c                LdaZero 
 1633 S> 0x26212eee5e86 @   14 : a9                Return 
Constant pool (size = 2)
0x26212eee5e89: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 2
           0: 0x26212eee56a1 <String[11]: #meteorInfos>
           1: 0x26212eee53d9 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 9)
0x26212eee5ea9 <ByteArray[9]>
0x26212eee5f51 points to: [0x26212eee5fc0]
=== [0x26212eee5fc0] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 1668 E> 0x26212eee5fc0 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x26212eee5fc3 @    3 : 1a fa             PushContext r0
         0x26212eee5fc5 @    5 : 0b 02             Ldar <this>
         0x26212eee5fc7 @    7 : 25 02             StaCurrentContextSlot [2]
         0x26212eee5fc9 @    9 : 0b 03             Ldar a0
         0x26212eee5fcb @   11 : 25 03             StaCurrentContextSlot [3]
 1698 S> 0x26212eee5fcd @   13 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x26212eee5fcf @   15 : c2                Star2 
 1710 E> 0x26212eee5fd0 @   16 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x26212eee5fd4 @   20 : c2                Star2 
 1722 E> 0x26212eee5fd5 @   21 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x26212eee5fd9 @   25 : c2                Star2 
         0x26212eee5fda @   26 : 9e 13             JumpIfUndefinedOrNull [19] (0x26212eee5fed @ 45)
 1734 E> 0x26212eee5fdc @   28 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x26212eee5fe0 @   32 : c3                Star1 
         0x26212eee5fe1 @   33 : 80 04 00 02       CreateClosure [4], [0], #2
         0x26212eee5fe5 @   37 : c1                Star3 
 1736 E> 0x26212eee5fe6 @   38 : 5e f9 f8 f7 06    CallProperty1 r1, r2, r3, [6]
         0x26212eee5feb @   43 : 8a 03             Jump [3] (0x26212eee5fee @ 46)
         0x26212eee5fed @   45 : 0e                LdaUndefined 
         0x26212eee5fee @   46 : 9e 04             JumpIfUndefinedOrNull [4] (0x26212eee5ff2 @ 50)
         0x26212eee5ff0 @   48 : 8a 04             Jump [4] (0x26212eee5ff4 @ 52)
         0x26212eee5ff2 @   50 : 7b 08             CreateEmptyArrayLiteral [8]
 1881 S> 0x26212eee5ff4 @   52 : a9                Return 
Constant pool (size = 5)
0x26212eee5ff9: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 5
           0: 0x26212eee6031 <ScopeInfo FUNCTION_SCOPE>
           1: 0x26212eee56a1 <String[11]: #meteorInfos>
           2: 0x26212eee60c9 <String[12]: #explodesInto>
           3: 0x239514389ea9 <String[3]: #map>
           4: 0x26212eee6101 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 18)
0x26212eee6301 <ByteArray[18]>
0x26212eee6101 points to: [0x26212eee6170]
=== [0x26212eee6170] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1764 S> 0x26212eee6170 @    0 : 14 ff 04 01       LdaContextSlot <context>, [4], [1]
         0x26212eee6174 @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x26212eee6176 @    6 : c3                Star1 
 1764 E> 0x26212eee6177 @    7 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x26212eee617b @   11 : c4                Star0 
         0x26212eee617c @   12 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x26212eee617e @   14 : c2                Star2 
         0x26212eee617f @   15 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x26212eee6181 @   17 : bf                Star5 
 1794 E> 0x26212eee6182 @   18 : 2d f5 02 02       GetNamedProperty r5, [2], [2]
         0x26212eee6186 @   22 : bf                Star5 
 1803 E> 0x26212eee6187 @   23 : 2d f5 03 04       GetNamedProperty r5, [3], [4]
         0x26212eee618b @   27 : c0                Star4 
 1822 E> 0x26212eee618c @   28 : 2d 03 04 06       GetNamedProperty a0, [4], [6]
         0x26212eee6190 @   32 : be                Star6 
 1803 E> 0x26212eee6191 @   33 : 5e f6 f5 f4 08    CallProperty1 r4, r5, r6, [8]
         0x26212eee6196 @   38 : c0                Star4 
 1834 E> 0x26212eee6197 @   39 : 2d f6 05 0a       GetNamedProperty r4, [5], [10]
         0x26212eee619b @   43 : c1                Star3 
         0x26212eee619c @   44 : 13 06             LdaConstant [6]
         0x26212eee619e @   46 : bf                Star5 
 1835 E> 0x26212eee619f @   47 : 5e f7 f6 f5 0c    CallProperty1 r3, r4, r5, [12]
         0x26212eee61a4 @   52 : c1                Star3 
 1862 E> 0x26212eee61a5 @   53 : 2d 03 07 0e       GetNamedProperty a0, [7], [14]
         0x26212eee61a9 @   57 : c0                Star4 
 1764 E> 0x26212eee61aa @   58 : 5c fa f9 04 10    CallProperty r0, r1-r4, [16]
 1873 S> 0x26212eee61af @   63 : a9                Return 
Constant pool (size = 8)
0x26212eee61b1: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 8
           0: 0x26212eee5101 <String[6]: #Meteor>
           1: 0x26212eee5311 <String[5]: #Build>
           2: 0x26212eee6201 <String[8]: #velocity>
           3: 0x26212eee6219 <String[6]: #rotate>
           4: 0x26212eee6231 <String[11]: #rotationRad>
           5: 0x26212eee5b59 <String[8]: #multiply>
           6: 0x26212eee6251 <HeapNumber 0.8>
           7: 0x26212eee5681 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 27)
0x26212eee6261 <ByteArray[27]>
0x26212eee6341 points to: [0x26212eee63b0]
=== [0x26212eee63b0] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1923 S> 0x26212eee63b0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 1953 E> 0x26212eee63b2 @    2 : 2e 02 00 00       GetNamedPropertyFromSuper <this>, [0], [0]
         0x26212eee63b6 @    6 : c3                Star1 
 1953 E> 0x26212eee63b7 @    7 : 5b f9 02 01 02    CallAnyReceiver r1, <this>-<this>, [2]
         0x26212eee63bc @   12 : c3                Star1 
         0x26212eee63bd @   13 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x26212eee63c1 @   17 : c4                Star0 
 2004 E> 0x26212eee63c2 @   18 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x26212eee63c6 @   22 : 33 fa 01 08       DefineNamedOwnProperty r0, [1], [8]
         0x26212eee63ca @   26 : 0b fa             Ldar r0
 2026 S> 0x26212eee63cc @   28 : a9                Return 
Constant pool (size = 2)
0x26212eee63d1: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 2
           0: 0x26212eee5431 <String[18]: #serializeForViewer>
           1: 0x26212eee5681 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 14)
0x26212eee63f1 <ByteArray[14]>
0x26212eee6479 points to: [0x26212eee64e8]
=== [0x26212eee64e8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2068 S> 0x26212eee64e8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 2098 E> 0x26212eee64ea @    2 : 2e 02 00 00       GetNamedPropertyFromSuper <this>, [0], [0]
         0x26212eee64ee @    6 : c3                Star1 
 2098 E> 0x26212eee64ef @    7 : 5b f9 02 01 02    CallAnyReceiver r1, <this>-<this>, [2]
         0x26212eee64f4 @   12 : c3                Star1 
         0x26212eee64f5 @   13 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x26212eee64f9 @   17 : c4                Star0 
 2149 E> 0x26212eee64fa @   18 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x26212eee64fe @   22 : 33 fa 01 08       DefineNamedOwnProperty r0, [1], [8]
         0x26212eee6502 @   26 : 0b fa             Ldar r0
 2171 S> 0x26212eee6504 @   28 : a9                Return 
Constant pool (size = 2)
0x26212eee6509: [FixedArray] in OldSpace
 - map: 0x133d63f812e1 <Map>
 - length: 2
           0: 0x26212eee5459 <String[18]: #serializeForPlayer>
           1: 0x26212eee5681 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 14)
0x26212eee6529 <ByteArray[14]>
<< OUTPUTTING DISASSEMBLY END >>
