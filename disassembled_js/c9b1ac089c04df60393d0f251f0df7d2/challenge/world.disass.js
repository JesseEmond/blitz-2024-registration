<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x7a21c2a4d18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x7a21c2a4d18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x7a21c2a4d1c @    4 : c4                Star0 
 6906 S> 0x7a21c2a4d1d @    5 : a9                Return 
Constant pool (size = 1)
0x7a21c2a4d21: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x07a21c2a4d39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x07a21c2a9ca9 <ByteArray[8]>
0x07a21c2a4d39 points to: [0x7a21c2a4da8]
=== [0x7a21c2a4da8] DISASSEMBLY ===
Parameter count 6
Register count 20
Frame size 160
OSR urgency: 0
Bytecode age: 0
   10 E> 0x7a21c2a4da8 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x7a21c2a4dab @    3 : 1a f9             PushContext r1
         0x7a21c2a4dad @    5 : 10                LdaTheHole 
         0x7a21c2a4dae @    6 : 25 02             StaCurrentContextSlot [2]
         0x7a21c2a4db0 @    8 : 10                LdaTheHole 
         0x7a21c2a4db1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x7a21c2a4db3 @   11 : 10                LdaTheHole 
         0x7a21c2a4db4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x7a21c2a4db6 @   14 : 10                LdaTheHole 
         0x7a21c2a4db7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x7a21c2a4db9 @   17 : 10                LdaTheHole 
         0x7a21c2a4dba @   18 : 25 06             StaCurrentContextSlot [6]
         0x7a21c2a4dbc @   20 : 10                LdaTheHole 
         0x7a21c2a4dbd @   21 : 25 07             StaCurrentContextSlot [7]
   76 S> 0x7a21c2a4dbf @   23 : 21 01 00          LdaGlobal [1], [0]
         0x7a21c2a4dc2 @   26 : c1                Star3 
   83 E> 0x7a21c2a4dc3 @   27 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x7a21c2a4dc7 @   31 : c2                Star2 
         0x7a21c2a4dc8 @   32 : 13 03             LdaConstant [3]
         0x7a21c2a4dca @   34 : bf                Star5 
   98 E> 0x7a21c2a4dcb @   35 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x7a21c2a4dcf @   39 : be                Star6 
         0x7a21c2a4dd0 @   40 : 19 03 f6          Mov a0, r4
   83 E> 0x7a21c2a4dd3 @   43 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x7a21c2a4dd8 @   48 : 0e                LdaUndefined 
  153 E> 0x7a21c2a4dd9 @   49 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  180 S> 0x7a21c2a4ddd @   53 : 13 06             LdaConstant [6]
         0x7a21c2a4ddf @   55 : c1                Star3 
  180 E> 0x7a21c2a4de0 @   56 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  180 E> 0x7a21c2a4de4 @   60 : 25 02             StaCurrentContextSlot [2]
  218 S> 0x7a21c2a4de6 @   62 : 13 07             LdaConstant [7]
         0x7a21c2a4de8 @   64 : c1                Star3 
  218 E> 0x7a21c2a4de9 @   65 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  218 E> 0x7a21c2a4ded @   69 : 25 03             StaCurrentContextSlot [3]
  256 S> 0x7a21c2a4def @   71 : 13 08             LdaConstant [8]
         0x7a21c2a4df1 @   73 : c1                Star3 
  256 E> 0x7a21c2a4df2 @   74 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  256 E> 0x7a21c2a4df6 @   78 : 25 04             StaCurrentContextSlot [4]
  300 S> 0x7a21c2a4df8 @   80 : 13 09             LdaConstant [9]
         0x7a21c2a4dfa @   82 : c1                Star3 
  300 E> 0x7a21c2a4dfb @   83 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  300 E> 0x7a21c2a4dff @   87 : 25 05             StaCurrentContextSlot [5]
  348 S> 0x7a21c2a4e01 @   89 : 13 0a             LdaConstant [10]
         0x7a21c2a4e03 @   91 : c1                Star3 
  348 E> 0x7a21c2a4e04 @   92 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  348 E> 0x7a21c2a4e08 @   96 : 25 06             StaCurrentContextSlot [6]
  390 S> 0x7a21c2a4e0a @   98 : 13 0b             LdaConstant [11]
         0x7a21c2a4e0c @  100 : c1                Star3 
  390 E> 0x7a21c2a4e0d @  101 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  390 E> 0x7a21c2a4e11 @  105 : 25 07             StaCurrentContextSlot [7]
         0x7a21c2a4e13 @  107 : 10                LdaTheHole 
         0x7a21c2a4e14 @  108 : bf                Star5 
         0x7a21c2a4e15 @  109 : 80 0d 00 02       CreateClosure [13], [0], #2
         0x7a21c2a4e19 @  113 : c2                Star2 
         0x7a21c2a4e1a @  114 : 13 0c             LdaConstant [12]
         0x7a21c2a4e1c @  116 : c1                Star3 
         0x7a21c2a4e1d @  117 : 80 0e 01 02       CreateClosure [14], [1], #2
         0x7a21c2a4e21 @  121 : be                Star6 
         0x7a21c2a4e22 @  122 : 80 0f 02 02       CreateClosure [15], [2], #2
         0x7a21c2a4e26 @  126 : bd                Star7 
         0x7a21c2a4e27 @  127 : 80 10 03 02       CreateClosure [16], [3], #2
         0x7a21c2a4e2b @  131 : bc                Star8 
         0x7a21c2a4e2c @  132 : 80 11 04 02       CreateClosure [17], [4], #2
         0x7a21c2a4e30 @  136 : bb                Star9 
         0x7a21c2a4e31 @  137 : 80 12 05 02       CreateClosure [18], [5], #2
         0x7a21c2a4e35 @  141 : ba                Star10 
         0x7a21c2a4e36 @  142 : 80 13 06 02       CreateClosure [19], [6], #2
         0x7a21c2a4e3a @  146 : b9                Star11 
         0x7a21c2a4e3b @  147 : 80 14 07 02       CreateClosure [20], [7], #2
         0x7a21c2a4e3f @  151 : b8                Star12 
         0x7a21c2a4e40 @  152 : 80 15 08 02       CreateClosure [21], [8], #2
         0x7a21c2a4e44 @  156 : b7                Star13 
         0x7a21c2a4e45 @  157 : 80 16 09 02       CreateClosure [22], [9], #2
         0x7a21c2a4e49 @  161 : b6                Star14 
         0x7a21c2a4e4a @  162 : 80 17 0a 02       CreateClosure [23], [10], #2
         0x7a21c2a4e4e @  166 : b5                Star15 
         0x7a21c2a4e4f @  167 : 80 18 0b 02       CreateClosure [24], [11], #2
         0x7a21c2a4e53 @  171 : 18 ea             Star r16
         0x7a21c2a4e55 @  173 : 80 19 0c 02       CreateClosure [25], [12], #2
         0x7a21c2a4e59 @  177 : 18 e9             Star r17
         0x7a21c2a4e5b @  179 : 80 1a 0d 02       CreateClosure [26], [13], #2
         0x7a21c2a4e5f @  183 : 18 e8             Star r18
         0x7a21c2a4e61 @  185 : 80 1b 0e 02       CreateClosure [27], [14], #2
         0x7a21c2a4e65 @  189 : 18 e7             Star r19
         0x7a21c2a4e67 @  191 : 19 f8 f6          Mov r2, r4
         0x7a21c2a4e6a @  194 : 65 28 00 f7 11    CallRuntime [DefineClass], r3-r19
         0x7a21c2a4e6f @  199 : c1                Star3 
         0x7a21c2a4e70 @  200 : 19 f6 fa          Mov r4, r0
 6846 S> 0x7a21c2a4e73 @  203 : 0b fa             Ldar r0
 6860 E> 0x7a21c2a4e75 @  205 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x7a21c2a4e79 @  209 : 0e                LdaUndefined 
 6903 S> 0x7a21c2a4e7a @  210 : a9                Return 
Constant pool (size = 28)
0x7a21c2a4e81: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 28
           0: 0x07a21c2a4f71 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3b74cb985ab9 <String[6]: #Object>
           2: 0x3b74cb984c11 <String[14]: #defineProperty>
           3: 0x07a21c2a50b9 <String[10]: #__esModule>
           4: 0x07a21c2a50d9 <ObjectBoilerplateDescription[3]>
           5: 0x07a21c2a5101 <String[5]: #World>
           6: 0x07a21c2a5119 <String[8]: #./action>
           7: 0x07a21c2a5131 <String[8]: #./cannon>
           8: 0x07a21c2a5149 <String[8]: #./meteor>
           9: 0x07a21c2a5161 <String[14]: #./meteor_infos>
          10: 0x07a21c2a5181 <String[12]: #./projectile>
          11: 0x07a21c2a51a1 <String[8]: #./vector>
          12: 0x07a21c2a51b9 <FixedArray[7]>
          13: 0x07a21c2a5669 <SharedFunctionInfo World>
          14: 0x07a21c2a5f29 <SharedFunctionInfo get healthPoints>
          15: 0x07a21c2a6059 <SharedFunctionInfo update>
          16: 0x07a21c2a75e1 <SharedFunctionInfo getCurrentGenerationDelayInTicks>
          17: 0x07a21c2a7851 <SharedFunctionInfo findAndHandleCollisions>
          18: 0x07a21c2a8091 <SharedFunctionInfo handleCollision>
          19: 0x07a21c2a82e9 <SharedFunctionInfo handleMeteorSplit>
          20: 0x07a21c2a8609 <SharedFunctionInfo applyAction>
          21: 0x07a21c2a8859 <SharedFunctionInfo serializeForViewer>
          22: 0x07a21c2a8ec9 <SharedFunctionInfo serializeForPlayer>
          23: 0x07a21c2a92d1 <SharedFunctionInfo serializeCommon>
          24: 0x07a21c2a9429 <SharedFunctionInfo handleActionRotate>
          25: 0x07a21c2a9641 <SharedFunctionInfo handleActionLookAt>
          26: 0x07a21c2a9971 <SharedFunctionInfo handleActionShoot>
          27: 0x07a21c2a9ae1 <SharedFunctionInfo get score>
Handler Table (size = 0)
Source Position Table (size = 69)
0x07a21c2a9c31 <ByteArray[69]>
Boilerplate at 0x07a21c2a50d9: 
0x7a21c2a50d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3b74cb982059 <Map>
 - length: 3
           0: 8
           1: 0x3b74cb986419 <String[5]: #value>
           2: 0x3b74cb981729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x07a21c2a51b9 has 7 elements:
0x7a21c2a51b9: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 7
           0: 17
           1: 0x07a21c2a5201 <DescriptorArray[4]>
           2: 0x3b74cb983301 <NumberDictionary[7]>
           3: 0x3b74cb981329 <FixedArray[0]>
           4: 0x07a21c2a52c1 <DescriptorArray[15]>
           5: 0x3b74cb983301 <NumberDictionary[7]>
           6: 0x3b74cb981329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x11 (17)
Element[1]
0x7a21c2a5201: [DescriptorArray] in OldSpace
 - map: 0x3b74cb987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3b74cb9855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x2c0f01ff4fe1 <AccessorInfo>
  [1]: 0x3b74cb9858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x2c0f01ff4f71 <AccessorInfo>
  [2]: 0x3b74cb985cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x2c0f01ff5051 <AccessorInfo>
  [3]: 0x3b74cb9865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x07a21c2a52a9 <ClassPositions 411, 6845>
Element[2]
0x3b74cb983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3b74cb981329: [FixedArray] in ReadOnlySpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 0
Element[4]
0x7a21c2a52c1: [DescriptorArray] in OldSpace
 - map: 0x3b74cb987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 15
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3b74cb984a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 2, attrs: [W_C]) @ 1
  [1]: 0x7a21c2a5441: [String] in OldSpace: #healthPoints (const accessor descriptor, p: 14, attrs: [W_C]) @ 0x07a21c2a5461 <AccessorPair>(get: 3, set: 0x3b74cb981339 <null>)
  [2]: 0x2c0f01fc3f01: [String] in OldSpace: #update (const data descriptor, p: 9, attrs: [W_C]) @ 4
  [3]: 0x7a21c2a5491: [String] in OldSpace: #getCurrentGenerationDelayInTicks (const data descriptor, p: 0, attrs: [W_C]) @ 5
  [4]: 0x7a21c2a54c1: [String] in OldSpace: #findAndHandleCollisions (const data descriptor, p: 3, attrs: [W_C]) @ 6
  [5]: 0x7a21c2a54e9: [String] in OldSpace: #handleCollision (const data descriptor, p: 1, attrs: [W_C]) @ 7
  [6]: 0x7a21c2a5509: [String] in OldSpace: #handleMeteorSplit (const data descriptor, p: 11, attrs: [W_C]) @ 8
  [7]: 0x7a21c2a5531: [String] in OldSpace: #applyAction (const data descriptor, p: 4, attrs: [W_C]) @ 9
  [8]: 0x7a21c2a5551: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 8, attrs: [W_C]) @ 10
  [9]: 0x7a21c2a5579: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 5, attrs: [W_C]) @ 11
  [10]: 0x7a21c2a55a1: [String] in OldSpace: #serializeCommon (const data descriptor, p: 7, attrs: [W_C]) @ 12
  [11]: 0x7a21c2a55c1: [String] in OldSpace: #handleActionRotate (const data descriptor, p: 12, attrs: [W_C]) @ 13
  [12]: 0x7a21c2a55e9: [String] in OldSpace: #handleActionLookAt (const data descriptor, p: 13, attrs: [W_C]) @ 14
  [13]: 0x7a21c2a5611: [String] in OldSpace: #handleActionShoot (const data descriptor, p: 6, attrs: [W_C]) @ 15
  [14]: 0x7a21c2a5639: [String] in OldSpace: #score (const accessor descriptor, p: 10, attrs: [W_C]) @ 0x07a21c2a5651 <AccessorPair>(get: 16, set: 0x3b74cb981339 <null>)
Element[5]
0x3b74cb983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3b74cb981329: [FixedArray] in ReadOnlySpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 0
0x07a21c2a5669 points to: [0x7a21c2a56d8]
=== [0x7a21c2a56d8] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  465 S> 0x7a21c2a56d8 @    0 : 0b 03             Ldar a0
  478 E> 0x7a21c2a56da @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  497 S> 0x7a21c2a56de @    6 : 0b 04             Ldar a1
  506 E> 0x7a21c2a56e0 @    8 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
  521 S> 0x7a21c2a56e4 @   12 : 0c                LdaZero 
  538 E> 0x7a21c2a56e5 @   13 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
  551 S> 0x7a21c2a56e9 @   17 : 7b 06             CreateEmptyArrayLiteral [6]
  564 E> 0x7a21c2a56eb @   19 : 32 02 03 07       SetNamedProperty <this>, [3], [7]
  578 S> 0x7a21c2a56ef @   23 : 7b 09             CreateEmptyArrayLiteral [9]
  591 E> 0x7a21c2a56f1 @   25 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
  605 S> 0x7a21c2a56f5 @   29 : 7b 0c             CreateEmptyArrayLiteral [12]
  621 E> 0x7a21c2a56f7 @   31 : 32 02 05 0d       SetNamedProperty <this>, [5], [13]
  656 S> 0x7a21c2a56fb @   35 : 2d 03 06 0f       GetNamedProperty a0, [6], [15]
         0x7a21c2a56ff @   39 : c3                Star1 
  673 E> 0x7a21c2a5700 @   40 : 2d f9 07 11       GetNamedProperty r1, [7], [17]
  646 E> 0x7a21c2a5704 @   44 : 32 02 07 13       SetNamedProperty <this>, [7], [19]
  710 S> 0x7a21c2a5708 @   48 : 2d 03 06 0f       GetNamedProperty a0, [6], [15]
         0x7a21c2a570c @   52 : c3                Star1 
  727 E> 0x7a21c2a570d @   53 : 2d f9 08 15       GetNamedProperty r1, [8], [21]
  700 E> 0x7a21c2a5711 @   57 : 32 02 08 17       SetNamedProperty <this>, [8], [23]
  772 S> 0x7a21c2a5715 @   61 : 2d 03 09 19       GetNamedProperty a0, [9], [25]
  762 E> 0x7a21c2a5719 @   65 : 32 02 0a 1b       SetNamedProperty <this>, [10], [27]
  795 S> 0x7a21c2a571d @   69 : 0c                LdaZero 
  807 E> 0x7a21c2a571e @   70 : 32 02 0b 1d       SetNamedProperty <this>, [11], [29]
  820 S> 0x7a21c2a5722 @   74 : 17 04             LdaImmutableCurrentContextSlot [4]
  846 E> 0x7a21c2a5724 @   76 : aa 0c             ThrowReferenceErrorIfHole [12]
         0x7a21c2a5726 @   78 : c3                Star1 
  855 E> 0x7a21c2a5727 @   79 : 2d f9 0d 1f       GetNamedProperty r1, [13], [31]
         0x7a21c2a572b @   83 : c3                Star1 
         0x7a21c2a572c @   84 : 0b f9             Ldar r1
  842 E> 0x7a21c2a572e @   86 : 69 f9 04 01 21    Construct r1, a1-a1, [33]
  840 E> 0x7a21c2a5733 @   91 : 32 02 0e 23       SetNamedProperty <this>, [14], [35]
  883 S> 0x7a21c2a5737 @   95 : 17 03             LdaImmutableCurrentContextSlot [3]
  901 E> 0x7a21c2a5739 @   97 : aa 0f             ThrowReferenceErrorIfHole [15]
         0x7a21c2a573b @   99 : c3                Star1 
  910 E> 0x7a21c2a573c @  100 : 2d f9 10 25       GetNamedProperty r1, [16], [37]
         0x7a21c2a5740 @  104 : c3                Star1 
  922 E> 0x7a21c2a5741 @  105 : 2d 02 00 27       GetNamedProperty <this>, [0], [39]
         0x7a21c2a5745 @  109 : c2                Star2 
  930 E> 0x7a21c2a5746 @  110 : 2d f8 11 29       GetNamedProperty r2, [17], [41]
         0x7a21c2a574a @  114 : c2                Star2 
  952 E> 0x7a21c2a574b @  115 : 2d 02 00 2b       GetNamedProperty <this>, [0], [43]
         0x7a21c2a574f @  119 : c1                Star3 
  960 E> 0x7a21c2a5750 @  120 : 2d f7 12 2d       GetNamedProperty r3, [18], [45]
         0x7a21c2a5754 @  124 : c1                Star3 
         0x7a21c2a5755 @  125 : 7c 13 2f 29       CreateObjectLiteral [19], [47], #41
         0x7a21c2a5759 @  129 : c0                Star4 
 1031 E> 0x7a21c2a575a @  130 : 2d 02 00 30       GetNamedProperty <this>, [0], [48]
         0x7a21c2a575e @  134 : bf                Star5 
 1039 E> 0x7a21c2a575f @  135 : 2d f5 14 32       GetNamedProperty r5, [20], [50]
         0x7a21c2a5763 @  139 : 33 f6 15 34       DefineNamedOwnProperty r4, [21], [52]
 1092 E> 0x7a21c2a5767 @  143 : 2d 02 00 36       GetNamedProperty <this>, [0], [54]
         0x7a21c2a576b @  147 : bf                Star5 
 1100 E> 0x7a21c2a576c @  148 : 2d f5 16 38       GetNamedProperty r5, [22], [56]
         0x7a21c2a5770 @  152 : 33 f6 17 3a       DefineNamedOwnProperty r4, [23], [58]
 1152 E> 0x7a21c2a5774 @  156 : 2d 02 00 3c       GetNamedProperty <this>, [0], [60]
         0x7a21c2a5778 @  160 : bf                Star5 
 1160 E> 0x7a21c2a5779 @  161 : 2d f5 18 3e       GetNamedProperty r5, [24], [62]
         0x7a21c2a577d @  165 : 33 f6 19 40       DefineNamedOwnProperty r4, [25], [64]
 1203 E> 0x7a21c2a5781 @  169 : 2d 02 00 42       GetNamedProperty <this>, [0], [66]
         0x7a21c2a5785 @  173 : bf                Star5 
 1211 E> 0x7a21c2a5786 @  174 : 2d f5 1a 44       GetNamedProperty r5, [26], [68]
         0x7a21c2a578a @  178 : 33 f6 1b 46       DefineNamedOwnProperty r4, [27], [70]
         0x7a21c2a578e @  182 : 0b f9             Ldar r1
  897 E> 0x7a21c2a5790 @  184 : 69 f9 f8 03 48    Construct r1, r2-r4, [72]
  895 E> 0x7a21c2a5795 @  189 : 32 02 1c 4a       SetNamedProperty <this>, [28], [74]
         0x7a21c2a5799 @  193 : 0e                LdaUndefined 
 1240 S> 0x7a21c2a579a @  194 : a9                Return 
Constant pool (size = 29)
0x7a21c2a57a1: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 29
           0: 0x2c0f01fccbb9 <String[7]: #options>
           1: 0x2c0f01fe8a51 <String[3]: #rng>
           2: 0x07a21c2a58c9 <String[11]: #tickCounter>
           3: 0x07a21c2a58e9 <String[7]: #meteors>
           4: 0x07a21c2a5901 <String[7]: #rockets>
           5: 0x07a21c2a5919 <String[10]: #collisions>
           6: 0x07a21c2a5939 <String[16]: #WORLD_DIMENSIONS>
           7: 0x07a21c2a5959 <String[5]: #width>
           8: 0x07a21c2a5971 <String[6]: #height>
           9: 0x07a21c2a5989 <String[13]: #HEALTH_POINTS>
          10: 0x07a21c2a59a9 <String[13]: #_healthPoints>
          11: 0x07a21c2a59c9 <String[6]: #_score>
          12: 0x07a21c2a5049 <String[8]: #meteor_1>
          13: 0x07a21c2a59e1 <String[13]: #MeteorFactory>
          14: 0x07a21c2a5a01 <String[14]: #_meteorBuilder>
          15: 0x07a21c2a5031 <String[8]: #cannon_1>
          16: 0x07a21c2a5a21 <String[6]: #Cannon>
          17: 0x07a21c2a5a39 <String[15]: #CANNON_POSITION>
          18: 0x07a21c2a5a59 <String[30]: #CANNON_INITIAL_ORIENTATION_DEG>
          19: 0x07a21c2a5a89 <ObjectBoilerplateDescription[9]>
          20: 0x07a21c2a5b69 <String[19]: #CANNON_MAX_ROTATION>
          21: 0x07a21c2a5ae1 <String[18]: #maxRotationDegrees>
          22: 0x07a21c2a5b91 <String[21]: #CANNON_COOLDOWN_TICKS>
          23: 0x07a21c2a5b09 <String[13]: #cooldownTicks>
          24: 0x07a21c2a5bb9 <String[11]: #BULLET_SIZE>
          25: 0x07a21c2a5b29 <String[10]: #bulletSize>
          26: 0x07a21c2a5bd9 <String[12]: #BULLET_SPEED>
          27: 0x07a21c2a5b49 <String[11]: #bulletSpeed>
          28: 0x07a21c2a5bf9 <String[6]: #cannon>
Handler Table (size = 0)
Source Position Table (size = 104)
0x07a21c2a5c11 <ByteArray[104]>
Boilerplate at 0x07a21c2a5a89: 
0x7a21c2a5a89: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3b74cb982059 <Map>
 - length: 9
           0: 8
           1: 0x07a21c2a5ae1 <String[18]: #maxRotationDegrees>
           2: 0x3b74cb981501 <Odd Oddball: uninitialized>
           3: 0x07a21c2a5b09 <String[13]: #cooldownTicks>
           4: 0x3b74cb981501 <Odd Oddball: uninitialized>
           5: 0x07a21c2a5b29 <String[10]: #bulletSize>
           6: 0x3b74cb981501 <Odd Oddball: uninitialized>
           7: 0x07a21c2a5b49 <String[11]: #bulletSpeed>
           8: 0x3b74cb981501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x07a21c2a5f29 points to: [0x7a21c2a5f98]
=== [0x7a21c2a5f98] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1287 S> 0x7a21c2a5f98 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1301 S> 0x7a21c2a5f9c @    4 : a9                Return 
Constant pool (size = 1)
0x7a21c2a5fa1: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x07a21c2a59a9 <String[13]: #_healthPoints>
Handler Table (size = 0)
Source Position Table (size = 7)
0x07a21c2a5fb9 <ByteArray[7]>
0x07a21c2a6059 points to: [0x7a21c2a60c8]
=== [0x7a21c2a60c8] DISASSEMBLY ===
Parameter count 1
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
 1318 E> 0x7a21c2a60c8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x7a21c2a60cb @    3 : 1a fa             PushContext r0
         0x7a21c2a60cd @    5 : 0b 02             Ldar <this>
         0x7a21c2a60cf @    7 : 25 02             StaCurrentContextSlot [2]
 1331 S> 0x7a21c2a60d1 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a60d3 @   11 : c3                Star1 
 1340 E> 0x7a21c2a60d4 @   12 : 2d f9 01 01       GetNamedProperty r1, [1], [1]
         0x7a21c2a60d8 @   16 : c3                Star1 
         0x7a21c2a60d9 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a60db @   19 : c1                Star3 
 1359 E> 0x7a21c2a60dc @   20 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0x7a21c2a60e0 @   24 : c2                Star2 
 1359 E> 0x7a21c2a60e1 @   25 : 5d f8 f7 05       CallProperty0 r2, r3, [5]
 1352 E> 0x7a21c2a60e5 @   29 : 3d f9 00          Mod r1, [0]
         0x7a21c2a60e8 @   32 : c3                Star1 
         0x7a21c2a60e9 @   33 : 0c                LdaZero 
 1394 E> 0x7a21c2a60ea @   34 : 6b f9 07          TestEqual r1, [7]
         0x7a21c2a60ed @   37 : 99 ef             JumpIfFalse [239] (0x7a21c2a61dc @ 276)
         0x7a21c2a60ef @   39 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a60f1 @   41 : c3                Star1 
 1408 E> 0x7a21c2a60f2 @   42 : 2d f9 03 08       GetNamedProperty r1, [3], [8]
         0x7a21c2a60f6 @   46 : c3                Star1 
 1416 E> 0x7a21c2a60f7 @   47 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x7a21c2a60fb @   51 : 96 e1             JumpIfToBooleanTrue [225] (0x7a21c2a61dc @ 276)
 1463 S> 0x7a21c2a60fd @   53 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a60ff @   55 : c2                Star2 
 1468 E> 0x7a21c2a6100 @   56 : 2d f8 05 0c       GetNamedProperty r2, [5], [12]
         0x7a21c2a6104 @   60 : c2                Star2 
 1476 E> 0x7a21c2a6105 @   61 : 2d f8 06 0e       GetNamedProperty r2, [6], [14]
         0x7a21c2a6109 @   65 : c3                Star1 
         0x7a21c2a610a @   66 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a610c @   68 : c0                Star4 
 1486 E> 0x7a21c2a610d @   69 : 2d f6 07 10       GetNamedProperty r4, [7], [16]
         0x7a21c2a6111 @   73 : c0                Star4 
 1501 E> 0x7a21c2a6112 @   74 : 2d f6 08 12       GetNamedProperty r4, [8], [18]
         0x7a21c2a6116 @   78 : c1                Star3 
         0x7a21c2a6117 @   79 : 15 fa 07 00       LdaImmutableContextSlot r0, [7], [0]
 1511 E> 0x7a21c2a611b @   83 : aa 09             ThrowReferenceErrorIfHole [9]
         0x7a21c2a611d @   85 : bf                Star5 
 1520 E> 0x7a21c2a611e @   86 : 2d f5 0a 14       GetNamedProperty r5, [10], [20]
         0x7a21c2a6122 @   90 : bf                Star5 
         0x7a21c2a6123 @   91 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6125 @   93 : be                Star6 
 1532 E> 0x7a21c2a6126 @   94 : 2d f4 0b 17       GetNamedProperty r6, [11], [23]
 1538 E> 0x7a21c2a612a @   98 : 45 32 16          AddSmi [50], [22]
         0x7a21c2a612d @  101 : be                Star6 
         0x7a21c2a612e @  102 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6130 @  104 : bc                Star8 
 1549 E> 0x7a21c2a6131 @  105 : 2d f2 0c 1a       GetNamedProperty r8, [12], [26]
         0x7a21c2a6135 @  109 : bc                Star8 
 1553 E> 0x7a21c2a6136 @  110 : 2d f2 0d 1c       GetNamedProperty r8, [13], [28]
         0x7a21c2a613a @  114 : bd                Star7 
 1553 E> 0x7a21c2a613b @  115 : 5d f3 f2 1e       CallProperty0 r7, r8, [30]
         0x7a21c2a613f @  119 : bd                Star7 
         0x7a21c2a6140 @  120 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6142 @  122 : bc                Star8 
 1569 E> 0x7a21c2a6143 @  123 : 2d f2 0e 20       GetNamedProperty r8, [14], [32]
 1562 E> 0x7a21c2a6147 @  127 : 3b f3 19          Mul r7, [25]
         0x7a21c2a614a @  130 : bd                Star7 
         0x7a21c2a614b @  131 : 0b f5             Ldar r5
 1507 E> 0x7a21c2a614d @  133 : 69 f5 f4 02 22    Construct r5, r6-r7, [34]
         0x7a21c2a6152 @  138 : bf                Star5 
         0x7a21c2a6153 @  139 : 15 fa 07 00       LdaImmutableContextSlot r0, [7], [0]
 1578 E> 0x7a21c2a6157 @  143 : aa 09             ThrowReferenceErrorIfHole [9]
         0x7a21c2a6159 @  145 : bd                Star7 
 1587 E> 0x7a21c2a615a @  146 : 2d f3 0a 14       GetNamedProperty r7, [10], [20]
         0x7a21c2a615e @  150 : bd                Star7 
 1594 E> 0x7a21c2a615f @  151 : 2d f3 0f 24       GetNamedProperty r7, [15], [36]
         0x7a21c2a6163 @  155 : be                Star6 
         0x7a21c2a6164 @  156 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6166 @  158 : bb                Star9 
 1612 E> 0x7a21c2a6167 @  159 : 2d f1 0c 28       GetNamedProperty r9, [12], [40]
         0x7a21c2a616b @  163 : bb                Star9 
 1616 E> 0x7a21c2a616c @  164 : 2d f1 0d 2a       GetNamedProperty r9, [13], [42]
         0x7a21c2a6170 @  168 : bc                Star8 
 1616 E> 0x7a21c2a6171 @  169 : 5d f2 f1 2c       CallProperty0 r8, r9, [44]
 1625 E> 0x7a21c2a6175 @  173 : 47 32 27          MulSmi [50], [39]
 1630 E> 0x7a21c2a6178 @  176 : 45 32 26          AddSmi [50], [38]
         0x7a21c2a617b @  179 : bc                Star8 
         0x7a21c2a617c @  180 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a617e @  182 : bb                Star9 
 1641 E> 0x7a21c2a617f @  183 : 2d f1 03 30       GetNamedProperty r9, [3], [48]
         0x7a21c2a6183 @  187 : bb                Star9 
 1649 E> 0x7a21c2a6184 @  188 : 2d f1 10 32       GetNamedProperty r9, [16], [50]
         0x7a21c2a6188 @  192 : bb                Star9 
         0x7a21c2a6189 @  193 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a618b @  195 : b9                Star11 
 1685 E> 0x7a21c2a618c @  196 : 2d ef 0c 34       GetNamedProperty r11, [12], [52]
         0x7a21c2a6190 @  200 : b9                Star11 
 1689 E> 0x7a21c2a6191 @  201 : 2d ef 0d 36       GetNamedProperty r11, [13], [54]
         0x7a21c2a6195 @  205 : ba                Star10 
 1689 E> 0x7a21c2a6196 @  206 : 5d f0 ef 38       CallProperty0 r10, r11, [56]
 1678 E> 0x7a21c2a619a @  210 : 3b f1 2f          Mul r9, [47]
         0x7a21c2a619d @  213 : bb                Star9 
         0x7a21c2a619e @  214 : 00 0d b4 00       LdaSmi.Wide [180]
         0x7a21c2a61a2 @  218 : ba                Star10 
         0x7a21c2a61a3 @  219 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a61a5 @  221 : b9                Star11 
 1712 E> 0x7a21c2a61a6 @  222 : 2d ef 03 3c       GetNamedProperty r11, [3], [60]
         0x7a21c2a61aa @  226 : b9                Star11 
 1720 E> 0x7a21c2a61ab @  227 : 2d ef 10 3e       GetNamedProperty r11, [16], [62]
 1749 E> 0x7a21c2a61af @  231 : 48 02 3b          DivSmi [2], [59]
 1705 E> 0x7a21c2a61b2 @  234 : 3a f0 3a          Sub r10, [58]
 1698 E> 0x7a21c2a61b5 @  237 : 39 f1 2e          Add r9, [46]
         0x7a21c2a61b8 @  240 : bb                Star9 
 1594 E> 0x7a21c2a61b9 @  241 : 5f f4 f3 f2 f1 40 CallProperty2 r6, r7, r8, r9, [64]
         0x7a21c2a61bf @  247 : be                Star6 
         0x7a21c2a61c0 @  248 : 15 fa 05 00       LdaImmutableContextSlot r0, [5], [0]
 1756 E> 0x7a21c2a61c4 @  252 : aa 11             ThrowReferenceErrorIfHole [17]
         0x7a21c2a61c6 @  254 : bd                Star7 
 1771 E> 0x7a21c2a61c7 @  255 : 2d f3 12 42       GetNamedProperty r7, [18], [66]
         0x7a21c2a61cb @  259 : bd                Star7 
 1782 E> 0x7a21c2a61cc @  260 : 2d f3 13 44       GetNamedProperty r7, [19], [68]
         0x7a21c2a61d0 @  264 : bd                Star7 
 1501 E> 0x7a21c2a61d1 @  265 : 5c f7 f6 04 46    CallProperty r3, r4-r7, [70]
         0x7a21c2a61d6 @  270 : c1                Star3 
 1476 E> 0x7a21c2a61d7 @  271 : 5e f9 f8 f7 48    CallProperty1 r1, r2, r3, [72]
 1835 S> 0x7a21c2a61dc @  276 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a61de @  278 : c1                Star3 
 1840 E> 0x7a21c2a61df @  279 : 2d f7 03 4a       GetNamedProperty r3, [3], [74]
         0x7a21c2a61e3 @  283 : c1                Star3 
 1848 E> 0x7a21c2a61e4 @  284 : 2d f7 14 4c       GetNamedProperty r3, [20], [76]
         0x7a21c2a61e8 @  288 : c1                Star3 
 1883 E> 0x7a21c2a61e9 @  289 : 2d f7 15 4e       GetNamedProperty r3, [21], [78]
         0x7a21c2a61ed @  293 : c2                Star2 
         0x7a21c2a61ee @  294 : 80 16 00 02       CreateClosure [22], [0], #2
         0x7a21c2a61f2 @  298 : c0                Star4 
 1883 E> 0x7a21c2a61f3 @  299 : 5e f8 f7 f6 50    CallProperty1 r2, r3, r4, [80]
         0x7a21c2a61f8 @  304 : c2                Star2 
 1924 E> 0x7a21c2a61f9 @  305 : 2d f8 17 52       GetNamedProperty r2, [23], [82]
         0x7a21c2a61fd @  309 : c3                Star1 
         0x7a21c2a61fe @  310 : 80 18 01 02       CreateClosure [24], [1], #2
         0x7a21c2a6202 @  314 : c1                Star3 
 1925 E> 0x7a21c2a6203 @  315 : 5e f9 f8 f7 54    CallProperty1 r1, r2, r3, [84]
 2080 S> 0x7a21c2a6208 @  320 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a620a @  322 : c2                Star2 
 2085 E> 0x7a21c2a620b @  323 : 2d f8 19 56       GetNamedProperty r2, [25], [86]
         0x7a21c2a620f @  327 : c3                Star1 
 2085 E> 0x7a21c2a6210 @  328 : 5d f9 f8 58       CallProperty0 r1, r2, [88]
 2120 S> 0x7a21c2a6214 @  332 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6216 @  334 : c2                Star2 
 2125 E> 0x7a21c2a6217 @  335 : 2d f8 05 5a       GetNamedProperty r2, [5], [90]
         0x7a21c2a621b @  339 : c2                Star2 
 2133 E> 0x7a21c2a621c @  340 : 2d f8 17 5c       GetNamedProperty r2, [23], [92]
         0x7a21c2a6220 @  344 : c3                Star1 
         0x7a21c2a6221 @  345 : 80 1a 02 02       CreateClosure [26], [2], #2
         0x7a21c2a6225 @  349 : c1                Star3 
 2133 E> 0x7a21c2a6226 @  350 : 5e f9 f8 f7 5e    CallProperty1 r1, r2, r3, [94]
 2179 S> 0x7a21c2a622b @  355 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a622d @  357 : c3                Star1 
         0x7a21c2a622e @  358 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6230 @  360 : c1                Star3 
 2199 E> 0x7a21c2a6231 @  361 : 2d f7 05 60       GetNamedProperty r3, [5], [96]
         0x7a21c2a6235 @  365 : c1                Star3 
 2207 E> 0x7a21c2a6236 @  366 : 2d f7 15 62       GetNamedProperty r3, [21], [98]
         0x7a21c2a623a @  370 : c2                Star2 
         0x7a21c2a623b @  371 : 80 1b 03 02       CreateClosure [27], [3], #2
         0x7a21c2a623f @  375 : c0                Star4 
 2207 E> 0x7a21c2a6240 @  376 : 5e f8 f7 f6 64    CallProperty1 r2, r3, r4, [100]
 2192 E> 0x7a21c2a6245 @  381 : 32 f9 05 66       SetNamedProperty r1, [5], [102]
 2351 S> 0x7a21c2a6249 @  385 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a624b @  387 : c1                Star3 
 2356 E> 0x7a21c2a624c @  388 : 2d f7 05 68       GetNamedProperty r3, [5], [104]
         0x7a21c2a6250 @  392 : c1                Star3 
 2364 E> 0x7a21c2a6251 @  393 : 2d f7 15 6a       GetNamedProperty r3, [21], [106]
         0x7a21c2a6255 @  397 : c2                Star2 
         0x7a21c2a6256 @  398 : 80 1c 04 02       CreateClosure [28], [4], #2
         0x7a21c2a625a @  402 : c0                Star4 
 2364 E> 0x7a21c2a625b @  403 : 5e f8 f7 f6 6c    CallProperty1 r2, r3, r4, [108]
         0x7a21c2a6260 @  408 : c2                Star2 
 2406 E> 0x7a21c2a6261 @  409 : 2d f8 17 6e       GetNamedProperty r2, [23], [110]
         0x7a21c2a6265 @  413 : c3                Star1 
         0x7a21c2a6266 @  414 : 80 1d 05 02       CreateClosure [29], [5], #2
         0x7a21c2a626a @  418 : c1                Star3 
 2407 E> 0x7a21c2a626b @  419 : 5e f9 f8 f7 70    CallProperty1 r1, r2, r3, [112]
 2471 S> 0x7a21c2a6270 @  424 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6272 @  426 : c3                Star1 
         0x7a21c2a6273 @  427 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6275 @  429 : c1                Star3 
 2491 E> 0x7a21c2a6276 @  430 : 2d f7 05 72       GetNamedProperty r3, [5], [114]
         0x7a21c2a627a @  434 : c1                Star3 
 2499 E> 0x7a21c2a627b @  435 : 2d f7 15 74       GetNamedProperty r3, [21], [116]
         0x7a21c2a627f @  439 : c2                Star2 
         0x7a21c2a6280 @  440 : 80 1e 06 02       CreateClosure [30], [6], #2
         0x7a21c2a6284 @  444 : c0                Star4 
 2499 E> 0x7a21c2a6285 @  445 : 5e f8 f7 f6 76    CallProperty1 r2, r3, r4, [118]
 2484 E> 0x7a21c2a628a @  450 : 32 f9 05 78       SetNamedProperty r1, [5], [120]
 2550 S> 0x7a21c2a628e @  454 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6290 @  456 : c3                Star1 
         0x7a21c2a6291 @  457 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6293 @  459 : c1                Star3 
 2570 E> 0x7a21c2a6294 @  460 : 2d f7 05 7a       GetNamedProperty r3, [5], [122]
         0x7a21c2a6298 @  464 : c1                Star3 
 2578 E> 0x7a21c2a6299 @  465 : 2d f7 15 7c       GetNamedProperty r3, [21], [124]
         0x7a21c2a629d @  469 : c2                Star2 
         0x7a21c2a629e @  470 : 80 1f 07 02       CreateClosure [31], [7], #2
         0x7a21c2a62a2 @  474 : c0                Star4 
 2578 E> 0x7a21c2a62a3 @  475 : 5e f8 f7 f6 7e    CallProperty1 r2, r3, r4, [126]
 2563 E> 0x7a21c2a62a8 @  480 : 32 f9 05 80       SetNamedProperty r1, [5], [128]
 2627 S> 0x7a21c2a62ac @  484 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a62ae @  486 : c2                Star2 
 2632 E> 0x7a21c2a62af @  487 : 2d f8 20 82       GetNamedProperty r2, [32], [130]
         0x7a21c2a62b3 @  491 : c2                Star2 
 2640 E> 0x7a21c2a62b4 @  492 : 2d f8 17 84       GetNamedProperty r2, [23], [132]
         0x7a21c2a62b8 @  496 : c3                Star1 
         0x7a21c2a62b9 @  497 : 80 21 08 02       CreateClosure [33], [8], #2
         0x7a21c2a62bd @  501 : c1                Star3 
 2640 E> 0x7a21c2a62be @  502 : 5e f9 f8 f7 86    CallProperty1 r1, r2, r3, [134]
 2686 S> 0x7a21c2a62c3 @  507 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a62c5 @  509 : c3                Star1 
         0x7a21c2a62c6 @  510 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a62c8 @  512 : c1                Star3 
 2706 E> 0x7a21c2a62c9 @  513 : 2d f7 20 88       GetNamedProperty r3, [32], [136]
         0x7a21c2a62cd @  517 : c1                Star3 
 2714 E> 0x7a21c2a62ce @  518 : 2d f7 15 8a       GetNamedProperty r3, [21], [138]
         0x7a21c2a62d2 @  522 : c2                Star2 
         0x7a21c2a62d3 @  523 : 80 22 09 02       CreateClosure [34], [9], #2
         0x7a21c2a62d7 @  527 : c0                Star4 
 2714 E> 0x7a21c2a62d8 @  528 : 5e f8 f7 f6 8c    CallProperty1 r2, r3, r4, [140]
 2699 E> 0x7a21c2a62dd @  533 : 32 f9 20 8e       SetNamedProperty r1, [32], [142]
 2792 S> 0x7a21c2a62e1 @  537 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a62e3 @  539 : c3                Star1 
         0x7a21c2a62e4 @  540 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a62e6 @  542 : c1                Star3 
 2812 E> 0x7a21c2a62e7 @  543 : 2d f7 20 90       GetNamedProperty r3, [32], [144]
         0x7a21c2a62eb @  547 : c1                Star3 
 2820 E> 0x7a21c2a62ec @  548 : 2d f7 15 92       GetNamedProperty r3, [21], [146]
         0x7a21c2a62f0 @  552 : c2                Star2 
         0x7a21c2a62f1 @  553 : 80 23 0a 02       CreateClosure [35], [10], #2
         0x7a21c2a62f5 @  557 : c0                Star4 
 2820 E> 0x7a21c2a62f6 @  558 : 5e f8 f7 f6 94    CallProperty1 r2, r3, r4, [148]
 2805 E> 0x7a21c2a62fb @  563 : 32 f9 20 96       SetNamedProperty r1, [32], [150]
 2869 S> 0x7a21c2a62ff @  567 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6301 @  569 : c3                Star1 
         0x7a21c2a6302 @  570 : 2d f9 01 98       GetNamedProperty r1, [1], [152]
         0x7a21c2a6306 @  574 : 51 9a             Inc [154]
 2885 E> 0x7a21c2a6308 @  576 : 32 f9 01 9b       SetNamedProperty r1, [1], [155]
 2897 S> 0x7a21c2a630c @  580 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a630e @  582 : c2                Star2 
 2902 E> 0x7a21c2a630f @  583 : 2d f8 24 9d       GetNamedProperty r2, [36], [157]
         0x7a21c2a6313 @  587 : c2                Star2 
 2909 E> 0x7a21c2a6314 @  588 : 2d f8 25 9f       GetNamedProperty r2, [37], [159]
         0x7a21c2a6318 @  592 : c3                Star1 
 2909 E> 0x7a21c2a6319 @  593 : 5d f9 f8 a1       CallProperty0 r1, r2, [161]
         0x7a21c2a631d @  597 : 0e                LdaUndefined 
 2923 S> 0x7a21c2a631e @  598 : a9                Return 
Constant pool (size = 38)
0x7a21c2a6321: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 38
           0: 0x07a21c2a6461 <ScopeInfo FUNCTION_SCOPE>
           1: 0x07a21c2a58c9 <String[11]: #tickCounter>
           2: 0x07a21c2a5491 <String[32]: #getCurrentGenerationDelayInTicks>
           3: 0x2c0f01fccbb9 <String[7]: #options>
           4: 0x07a21c2a64c1 <String[31]: #CHEAT_DISABLE_METEOR_GENERATION>
           5: 0x07a21c2a58e9 <String[7]: #meteors>
           6: 0x2c0f01fc9551 <String[4]: #push>
           7: 0x07a21c2a5a01 <String[14]: #_meteorBuilder>
           8: 0x07a21c2a6509 <String[5]: #build>
           9: 0x07a21c2a50a1 <String[8]: #vector_1>
          10: 0x07a21c2a6521 <String[6]: #Vector>
          11: 0x07a21c2a5959 <String[5]: #width>
          12: 0x2c0f01fe8a51 <String[3]: #rng>
          13: 0x2c0f01fdaba1 <String[6]: #random>
          14: 0x07a21c2a5971 <String[6]: #height>
          15: 0x07a21c2a6551 <String[12]: #fromPolarDeg>
          16: 0x07a21c2a6571 <String[28]: #METEOR_GENERATION_CONE_ANGLE>
          17: 0x07a21c2a5061 <String[14]: #meteor_infos_1>
          18: 0x07a21c2a65a1 <String[10]: #MeteorType>
          19: 0x07a21c2a65c1 <String[5]: #Large>
          20: 0x07a21c2a65d9 <String[34]: #CHEAT_GENERATE_PREDICTABLE_METEORS>
          21: 0x2c0f01fc9f61 <String[6]: #filter>
          22: 0x07a21c2a6629 <SharedFunctionInfo>
          23: 0x2c0f01fca021 <String[7]: #forEach>
          24: 0x07a21c2a6781 <SharedFunctionInfo>
          25: 0x07a21c2a54c1 <String[23]: #findAndHandleCollisions>
          26: 0x07a21c2a6991 <SharedFunctionInfo>
          27: 0x07a21c2a6ab1 <SharedFunctionInfo>
          28: 0x07a21c2a6c19 <SharedFunctionInfo>
          29: 0x07a21c2a6d59 <SharedFunctionInfo>
          30: 0x07a21c2a6e89 <SharedFunctionInfo>
          31: 0x07a21c2a6fb1 <SharedFunctionInfo>
          32: 0x07a21c2a5901 <String[7]: #rockets>
          33: 0x07a21c2a70e1 <SharedFunctionInfo>
          34: 0x07a21c2a7201 <SharedFunctionInfo>
          35: 0x07a21c2a7351 <SharedFunctionInfo>
          36: 0x07a21c2a5bf9 <String[6]: #cannon>
          37: 0x2c0f01fc3f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 237)
0x07a21c2a7461 <ByteArray[237]>
0x07a21c2a6629 points to: [0x7a21c2a6698]
=== [0x7a21c2a6698] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1899 S> 0x7a21c2a6698 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a669c @    4 : c4                Star0 
         0x7a21c2a669d @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a669f @    7 : c3                Star1 
 1912 E> 0x7a21c2a66a0 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
 1904 E> 0x7a21c2a66a4 @   12 : 6b fa 04          TestEqual r0, [4]
 1923 S> 0x7a21c2a66a7 @   15 : a9                Return 
Constant pool (size = 2)
0x7a21c2a66a9: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 2
           0: 0x07a21c2a66c9 <String[4]: #tick>
           1: 0x07a21c2a58c9 <String[11]: #tickCounter>
Handler Table (size = 0)
Source Position Table (size = 11)
0x07a21c2a66e1 <ByteArray[11]>
0x07a21c2a6781 points to: [0x7a21c2a67f0]
=== [0x7a21c2a67f0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1959 S> 0x7a21c2a67f0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a67f2 @    2 : c3                Star1 
 1964 E> 0x7a21c2a67f3 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x7a21c2a67f7 @    7 : c3                Star1 
 1972 E> 0x7a21c2a67f8 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x7a21c2a67fc @   12 : c4                Star0 
         0x7a21c2a67fd @   13 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1977 E> 0x7a21c2a6801 @   17 : aa 02             ThrowReferenceErrorIfHole [2]
         0x7a21c2a6803 @   19 : c1                Star3 
 1986 E> 0x7a21c2a6804 @   20 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x7a21c2a6808 @   24 : c1                Star3 
 1993 E> 0x7a21c2a6809 @   25 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x7a21c2a680d @   29 : c2                Star2 
 2011 E> 0x7a21c2a680e @   30 : 2d 03 05 08       GetNamedProperty a0, [5], [8]
         0x7a21c2a6812 @   34 : c0                Star4 
 2028 E> 0x7a21c2a6813 @   35 : 2d 03 06 0a       GetNamedProperty a0, [6], [10]
         0x7a21c2a6817 @   39 : bf                Star5 
 2045 E> 0x7a21c2a6818 @   40 : 2d 03 07 0c       GetNamedProperty a0, [7], [12]
         0x7a21c2a681c @   44 : be                Star6 
 1993 E> 0x7a21c2a681d @   45 : 5c f8 f7 04 0e    CallProperty r2, r3-r6, [14]
         0x7a21c2a6822 @   50 : c2                Star2 
 1972 E> 0x7a21c2a6823 @   51 : 5e fa f9 f8 10    CallProperty1 r0, r1, r2, [16]
         0x7a21c2a6828 @   56 : 0e                LdaUndefined 
 2068 S> 0x7a21c2a6829 @   57 : a9                Return 
Constant pool (size = 8)
0x7a21c2a6831: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 8
           0: 0x07a21c2a58e9 <String[7]: #meteors>
           1: 0x2c0f01fc9551 <String[4]: #push>
           2: 0x07a21c2a5049 <String[8]: #meteor_1>
           3: 0x07a21c2a6881 <String[6]: #Meteor>
           4: 0x07a21c2a6899 <String[10]: #BuildDebug>
           5: 0x3b74cb985c19 <String[8]: #position>
           6: 0x07a21c2a68b9 <String[8]: #velocity>
           7: 0x07a21c2a68d1 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 29)
0x07a21c2a68f1 <ByteArray[29]>
0x07a21c2a6991 points to: [0x7a21c2a6a00]
=== [0x7a21c2a6a00] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2160 S> 0x7a21c2a6a00 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a6a04 @    4 : c4                Star0 
 2160 E> 0x7a21c2a6a05 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 2168 S> 0x7a21c2a6a09 @    9 : a9                Return 
Constant pool (size = 1)
0x7a21c2a6a11: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x2c0f01fc3f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 9)
0x07a21c2a6a29 <ByteArray[9]>
0x07a21c2a6ab1 points to: [0x7a21c2a6b20]
=== [0x7a21c2a6b20] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2233 S> 0x7a21c2a6b20 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a6b24 @    4 : c4                Star0 
 2242 E> 0x7a21c2a6b25 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x7a21c2a6b29 @    9 : c4                Star0 
         0x7a21c2a6b2a @   10 : 0c                LdaZero 
 2244 E> 0x7a21c2a6b2b @   11 : 6e fa 04          TestGreaterThan r0, [4]
         0x7a21c2a6b2e @   14 : 99 16             JumpIfFalse [22] (0x7a21c2a6b44 @ 36)
 2258 E> 0x7a21c2a6b30 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a6b34 @   20 : c4                Star0 
 2267 E> 0x7a21c2a6b35 @   21 : 2d fa 01 05       GetNamedProperty r0, [1], [5]
         0x7a21c2a6b39 @   25 : c4                Star0 
         0x7a21c2a6b3a @   26 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6b3c @   28 : c3                Star1 
 2276 E> 0x7a21c2a6b3d @   29 : 2d f9 02 07       GetNamedProperty r1, [2], [7]
 2269 E> 0x7a21c2a6b41 @   33 : 6d fa 09          TestLessThan r0, [9]
 2282 S> 0x7a21c2a6b44 @   36 : a9                Return 
Constant pool (size = 3)
0x7a21c2a6b49: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 3
           0: 0x3b74cb985c19 <String[8]: #position>
           1: 0x2c0f01fd8ae1 <String[1]: #y>
           2: 0x07a21c2a5971 <String[6]: #height>
Handler Table (size = 0)
Source Position Table (size = 19)
0x07a21c2a6b89 <ByteArray[19]>
0x07a21c2a6c19 points to: [0x7a21c2a6c88]
=== [0x7a21c2a6c88] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2390 S> 0x7a21c2a6c88 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a6c8c @    4 : c4                Star0 
 2399 E> 0x7a21c2a6c8d @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x7a21c2a6c91 @    9 : c4                Star0 
         0x7a21c2a6c92 @   10 : 0c                LdaZero 
 2401 E> 0x7a21c2a6c93 @   11 : 6f fa 04          TestLessThanOrEqual r0, [4]
 2405 S> 0x7a21c2a6c96 @   14 : a9                Return 
Constant pool (size = 2)
0x7a21c2a6c99: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 2
           0: 0x3b74cb985c19 <String[8]: #position>
           1: 0x2c0f01fd8ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 11)
0x07a21c2a6cd1 <ByteArray[11]>
0x07a21c2a6d59 points to: [0x7a21c2a6dc8]
=== [0x7a21c2a6dc8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2446 S> 0x7a21c2a6dc8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a6dca @    2 : c4                Star0 
         0x7a21c2a6dcb @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
         0x7a21c2a6dcf @    7 : c3                Star1 
 2456 E> 0x7a21c2a6dd0 @    8 : 2d 03 01 03       GetNamedProperty a0, [1], [3]
         0x7a21c2a6dd4 @   12 : 3a f9 02          Sub r1, [2]
         0x7a21c2a6dd7 @   15 : c2                Star2 
 2446 E> 0x7a21c2a6dd8 @   16 : 32 fa 00 05       SetNamedProperty r0, [0], [5]
         0x7a21c2a6ddc @   20 : 0b f8             Ldar r2
 2460 S> 0x7a21c2a6dde @   22 : a9                Return 
Constant pool (size = 2)
0x7a21c2a6de1: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 2
           0: 0x07a21c2a59a9 <String[13]: #_healthPoints>
           1: 0x3b74cb98a111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 11)
0x07a21c2a6e01 <ByteArray[11]>
0x07a21c2a6e89 points to: [0x7a21c2a6ef8]
=== [0x7a21c2a6ef8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2525 S> 0x7a21c2a6ef8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a6efc @    4 : c4                Star0 
 2534 E> 0x7a21c2a6efd @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x7a21c2a6f01 @    9 : c4                Star0 
         0x7a21c2a6f02 @   10 : 0c                LdaZero 
 2536 E> 0x7a21c2a6f03 @   11 : 6e fa 04          TestGreaterThan r0, [4]
 2539 S> 0x7a21c2a6f06 @   14 : a9                Return 
Constant pool (size = 2)
0x7a21c2a6f09: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 2
           0: 0x3b74cb985c19 <String[8]: #position>
           1: 0x2c0f01fd8ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 11)
0x07a21c2a6f29 <ByteArray[11]>
0x07a21c2a6fb1 points to: [0x7a21c2a7020]
=== [0x7a21c2a7020] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2605 S> 0x7a21c2a7020 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a7024 @    4 : 55                ToBooleanLogicalNot 
 2616 S> 0x7a21c2a7025 @    5 : a9                Return 
Constant pool (size = 1)
0x7a21c2a7029: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x2c0f01fcb511 <String[11]: #isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x07a21c2a7061 <ByteArray[7]>
0x07a21c2a70e1 points to: [0x7a21c2a7150]
=== [0x7a21c2a7150] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2667 S> 0x7a21c2a7150 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a7154 @    4 : c4                Star0 
 2667 E> 0x7a21c2a7155 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 2675 S> 0x7a21c2a7159 @    9 : a9                Return 
Constant pool (size = 1)
0x7a21c2a7161: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x2c0f01fc3f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 9)
0x07a21c2a7179 <ByteArray[9]>
0x07a21c2a7201 points to: [0x7a21c2a7270]
=== [0x7a21c2a7270] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2740 S> 0x7a21c2a7270 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a7274 @    4 : c4                Star0 
 2749 E> 0x7a21c2a7275 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x7a21c2a7279 @    9 : c4                Star0 
         0x7a21c2a727a @   10 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a727c @   12 : c3                Star1 
 2758 E> 0x7a21c2a727d @   13 : 2d f9 02 05       GetNamedProperty r1, [2], [5]
         0x7a21c2a7281 @   17 : c3                Star1 
 2773 E> 0x7a21c2a7282 @   18 : 2d 03 03 08       GetNamedProperty a0, [3], [8]
 2778 E> 0x7a21c2a7286 @   22 : 47 02 07          MulSmi [2], [7]
 2764 E> 0x7a21c2a7289 @   25 : 39 f9 04          Add r1, [4]
 2751 E> 0x7a21c2a728c @   28 : 6d fa 0a          TestLessThan r0, [10]
 2781 S> 0x7a21c2a728f @   31 : a9                Return 
Constant pool (size = 4)
0x7a21c2a7291: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 4
           0: 0x3b74cb985c19 <String[8]: #position>
           1: 0x2c0f01fd8ac9 <String[1]: #x>
           2: 0x07a21c2a5959 <String[5]: #width>
           3: 0x3b74cb98a111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 19)
0x07a21c2a72c1 <ByteArray[19]>
0x07a21c2a7351 points to: [0x7a21c2a73c0]
=== [0x7a21c2a73c0] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2847 S> 0x7a21c2a73c0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a73c4 @    4 : 55                ToBooleanLogicalNot 
 2858 S> 0x7a21c2a73c5 @    5 : a9                Return 
Constant pool (size = 1)
0x7a21c2a73c9: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x2c0f01fcb511 <String[11]: #isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x07a21c2a73e1 <ByteArray[7]>
0x07a21c2a75e1 points to: [0x7a21c2a7650]
=== [0x7a21c2a7650] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 3005 S> 0x7a21c2a7650 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x7a21c2a7654 @    4 : c1                Star3 
 3013 E> 0x7a21c2a7655 @    5 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x7a21c2a7659 @    9 : c1                Star3 
 2982 S> 0x7a21c2a765a @   10 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x7a21c2a765e @   14 : c4                Star0 
 2989 S> 0x7a21c2a765f @   15 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x7a21c2a7663 @   19 : c3                Star1 
 3085 S> 0x7a21c2a7664 @   20 : 2d 02 04 09       GetNamedProperty <this>, [4], [9]
         0x7a21c2a7668 @   24 : c1                Star3 
 3104 E> 0x7a21c2a7669 @   25 : 2d 02 00 0b       GetNamedProperty <this>, [0], [11]
         0x7a21c2a766d @   29 : c0                Star4 
 3112 E> 0x7a21c2a766e @   30 : 2d f6 05 0d       GetNamedProperty r4, [5], [13]
 3097 E> 0x7a21c2a7672 @   34 : 3c f7 08          Div r3, [8]
         0x7a21c2a7675 @   37 : c2                Star2 
 3132 S> 0x7a21c2a7676 @   38 : 21 06 0f          LdaGlobal [6], [15]
         0x7a21c2a7679 @   41 : c0                Star4 
 3144 E> 0x7a21c2a767a @   42 : 2d f6 07 11       GetNamedProperty r4, [7], [17]
         0x7a21c2a767e @   46 : c1                Star3 
         0x7a21c2a767f @   47 : 0b f9             Ldar r1
 3167 E> 0x7a21c2a7681 @   49 : 3a fa 15          Sub r0, [21]
         0x7a21c2a7684 @   52 : be                Star6 
         0x7a21c2a7685 @   53 : 0d 01             LdaSmi [1]
         0x7a21c2a7687 @   55 : bd                Star7 
         0x7a21c2a7688 @   56 : 0b f8             Ldar r2
 3182 E> 0x7a21c2a768a @   58 : 3a f3 16          Sub r7, [22]
 3177 E> 0x7a21c2a768d @   61 : 3b f4 14          Mul r6, [20]
 3157 E> 0x7a21c2a7690 @   64 : 39 f9 13          Add r1, [19]
         0x7a21c2a7693 @   67 : bf                Star5 
 3144 E> 0x7a21c2a7694 @   68 : 5e f7 f6 f5 17    CallProperty1 r3, r4, r5, [23]
 3204 S> 0x7a21c2a7699 @   73 : a9                Return 
Constant pool (size = 8)
0x7a21c2a76a1: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 8
           0: 0x2c0f01fccbb9 <String[7]: #options>
           1: 0x07a21c2a76f1 <String[32]: #METEOR_GENERATION_DELAY_IN_TICKS>
           2: 0x2c0f01fda231 <String[5]: #start>
           3: 0x2c0f01fcc4c1 <String[6]: #finish>
           4: 0x07a21c2a58c9 <String[11]: #tickCounter>
           5: 0x07a21c2a7751 <String[10]: #TICK_COUNT>
           6: 0x2c0f01fda991 <String[4]: #Math>
           7: 0x2c0f01fdabb9 <String[5]: #round>
Handler Table (size = 0)
Source Position Table (size = 39)
0x07a21c2a77a1 <ByteArray[39]>
0x07a21c2a7851 points to: [0x7a21c2a78c0]
=== [0x7a21c2a78c0] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3238 E> 0x7a21c2a78c0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x7a21c2a78c3 @    3 : 1a f9             PushContext r1
         0x7a21c2a78c5 @    5 : 0b 02             Ldar <this>
         0x7a21c2a78c7 @    7 : 25 02             StaCurrentContextSlot [2]
 3251 S> 0x7a21c2a78c9 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a78cb @   11 : c2                Star2 
         0x7a21c2a78cc @   12 : 7b 00             CreateEmptyArrayLiteral [0]
 3267 E> 0x7a21c2a78ce @   14 : 32 f8 01 01       SetNamedProperty r2, [1], [1]
 3312 S> 0x7a21c2a78d2 @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a78d4 @   20 : c1                Star3 
 3317 E> 0x7a21c2a78d5 @   21 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0x7a21c2a78d9 @   25 : c1                Star3 
 3325 E> 0x7a21c2a78da @   26 : 2d f7 03 05       GetNamedProperty r3, [3], [5]
         0x7a21c2a78de @   30 : c2                Star2 
         0x7a21c2a78df @   31 : 80 04 00 02       CreateClosure [4], [0], #2
         0x7a21c2a78e3 @   35 : c0                Star4 
 3325 E> 0x7a21c2a78e4 @   36 : 5e f8 f7 f6 07    CallProperty1 r2, r3, r4, [7]
         0x7a21c2a78e9 @   41 : c4                Star0 
 3940 S> 0x7a21c2a78ea @   42 : 2d fa 05 09       GetNamedProperty r0, [5], [9]
         0x7a21c2a78ee @   46 : c2                Star2 
         0x7a21c2a78ef @   47 : 80 06 01 02       CreateClosure [6], [1], #2
         0x7a21c2a78f3 @   51 : c0                Star4 
 3940 E> 0x7a21c2a78f4 @   52 : 5e f8 fa f6 0b    CallProperty1 r2, r0, r4, [11]
 3998 S> 0x7a21c2a78f9 @   57 : 2d fa 07 0d       GetNamedProperty r0, [7], [13]
         0x7a21c2a78fd @   61 : c2                Star2 
         0x7a21c2a78fe @   62 : 80 08 02 02       CreateClosure [8], [2], #2
         0x7a21c2a7902 @   66 : c0                Star4 
 3998 E> 0x7a21c2a7903 @   67 : 5e f8 fa f6 0f    CallProperty1 r2, r0, r4, [15]
         0x7a21c2a7908 @   72 : 0e                LdaUndefined 
 4059 S> 0x7a21c2a7909 @   73 : a9                Return 
Constant pool (size = 9)
0x7a21c2a7911: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 9
           0: 0x07a21c2a7969 <ScopeInfo FUNCTION_SCOPE>
           1: 0x07a21c2a5919 <String[10]: #collisions>
           2: 0x07a21c2a5901 <String[7]: #rockets>
           3: 0x2c0f01fca069 <String[7]: #flatMap>
           4: 0x07a21c2a79e1 <SharedFunctionInfo>
           5: 0x2c0f01fceb61 <String[4]: #sort>
           6: 0x07a21c2a7de9 <SharedFunctionInfo>
           7: 0x2c0f01fca021 <String[7]: #forEach>
           8: 0x07a21c2a7f21 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 31)
0x07a21c2a8041 <ByteArray[31]>
0x07a21c2a79e1 points to: [0x7a21c2a7a50]
=== [0x7a21c2a7a50] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3333 E> 0x7a21c2a7a50 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x7a21c2a7a53 @    3 : 1a fa             PushContext r0
         0x7a21c2a7a55 @    5 : 0b 03             Ldar a0
         0x7a21c2a7a57 @    7 : 25 02             StaCurrentContextSlot [2]
 3359 S> 0x7a21c2a7a59 @    9 : 15 fa 02 00       LdaImmutableContextSlot r0, [2], [0]
         0x7a21c2a7a5d @   13 : c2                Star2 
 3371 E> 0x7a21c2a7a5e @   14 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x7a21c2a7a62 @   18 : c2                Star2 
 3396 E> 0x7a21c2a7a63 @   19 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x7a21c2a7a67 @   23 : c3                Star1 
         0x7a21c2a7a68 @   24 : 80 03 00 02       CreateClosure [3], [0], #2
         0x7a21c2a7a6c @   28 : c1                Star3 
         0x7a21c2a7a6d @   29 : 7b 04             CreateEmptyArrayLiteral [4]
         0x7a21c2a7a6f @   31 : c0                Star4 
 3396 E> 0x7a21c2a7a70 @   32 : 5f f9 f8 f7 f6 05 CallProperty2 r1, r2, r3, r4, [5]
 3857 S> 0x7a21c2a7a76 @   38 : a9                Return 
Constant pool (size = 4)
0x7a21c2a7a79: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 4
           0: 0x07a21c2a7aa9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x07a21c2a58e9 <String[7]: #meteors>
           2: 0x2c0f01fca039 <String[6]: #reduce>
           3: 0x07a21c2a7b39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 16)
0x07a21c2a7d99 <ByteArray[16]>
0x07a21c2a7b39 points to: [0x7a21c2a7ba8]
=== [0x7a21c2a7ba8] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 3463 S> 0x7a21c2a7ba8 @    0 : 15 ff 06 02       LdaImmutableContextSlot <context>, [6], [2]
         0x7a21c2a7bac @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x7a21c2a7bae @    6 : c2                Star2 
 3476 E> 0x7a21c2a7baf @    7 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x7a21c2a7bb3 @   11 : c2                Star2 
 3487 E> 0x7a21c2a7bb4 @   12 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x7a21c2a7bb8 @   16 : c3                Star1 
         0x7a21c2a7bb9 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a7bbb @   19 : c1                Star3 
 3487 E> 0x7a21c2a7bbc @   20 : 5f f9 f8 f7 04 04 CallProperty2 r1, r2, r3, a1, [4]
         0x7a21c2a7bc2 @   26 : c4                Star0 
 3552 S> 0x7a21c2a7bc3 @   27 : 9a 2b             JumpIfNull [43] (0x7a21c2a7bee @ 70)
 3616 S> 0x7a21c2a7bc5 @   29 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
         0x7a21c2a7bc9 @   33 : c3                Star1 
         0x7a21c2a7bca @   34 : 79 04 08 04       CreateArrayLiteral [4], [8], #4
         0x7a21c2a7bce @   38 : c0                Star4 
         0x7a21c2a7bcf @   39 : 0c                LdaZero 
         0x7a21c2a7bd0 @   40 : c1                Star3 
 3657 E> 0x7a21c2a7bd1 @   41 : 7e fa 29 09       CloneObject r0, #41, [9]
         0x7a21c2a7bd5 @   45 : bf                Star5 
         0x7a21c2a7bd6 @   46 : 0b 04             Ldar a1
 3704 E> 0x7a21c2a7bd8 @   48 : 33 f5 05 0b       DefineNamedOwnProperty r5, [5], [11]
         0x7a21c2a7bdc @   52 : 17 02             LdaImmutableCurrentContextSlot [2]
 3748 E> 0x7a21c2a7bde @   54 : 33 f5 06 0d       DefineNamedOwnProperty r5, [6], [13]
         0x7a21c2a7be2 @   58 : 0b f5             Ldar r5
         0x7a21c2a7be4 @   60 : 36 f6 f7 0f       StaInArrayLiteral r4, r3, [15]
 3616 E> 0x7a21c2a7be8 @   64 : 5e f9 03 f6 11    CallProperty1 r1, a0, r4, [17]
 3784 S> 0x7a21c2a7bed @   69 : a9                Return 
 3819 S> 0x7a21c2a7bee @   70 : 0b 03             Ldar a0
 3837 S> 0x7a21c2a7bf0 @   72 : a9                Return 
Constant pool (size = 7)
0x7a21c2a7bf9: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 7
           0: 0x07a21c2a5081 <String[12]: #projectile_1>
           1: 0x07a21c2a7c41 <String[10]: #Projectile>
           2: 0x07a21c2a7c61 <String[31]: #checkCollisionDuringCurrentTick>
           3: 0x2c0f01fc72e9 <String[6]: #concat>
           4: 0x07a21c2a7ca9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x07a21c2a7cc1 <FixedArray[1]>>
           5: 0x07a21c2a7cd9 <String[6]: #meteor>
           6: 0x07a21c2a7b09 <String[6]: #rocket>
Handler Table (size = 0)
Source Position Table (size = 38)
0x07a21c2a7cf1 <ByteArray[38]>
0x07a21c2a7de9 points to: [0x7a21c2a7e58]
=== [0x7a21c2a7e58] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 3957 S> 0x7a21c2a7e58 @    0 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x7a21c2a7e5c @    4 : c4                Star0 
 3963 E> 0x7a21c2a7e5d @    5 : 2d 04 00 03       GetNamedProperty a1, [0], [3]
 3959 E> 0x7a21c2a7e61 @    9 : 3a fa 00          Sub r0, [0]
 3964 S> 0x7a21c2a7e64 @   12 : a9                Return 
Constant pool (size = 1)
0x7a21c2a7e69: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x07a21c2a7e81 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 11)
0x07a21c2a7e99 <ByteArray[11]>
0x07a21c2a7f21 points to: [0x7a21c2a7f90]
=== [0x7a21c2a7f90] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4026 S> 0x7a21c2a7f90 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a7f92 @    2 : c3                Star1 
 4026 E> 0x7a21c2a7f93 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x7a21c2a7f97 @    7 : c4                Star0 
 4026 E> 0x7a21c2a7f98 @    8 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
 4052 S> 0x7a21c2a7f9d @   13 : a9                Return 
Constant pool (size = 1)
0x7a21c2a7fa1: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x07a21c2a54e9 <String[15]: #handleCollision>
Handler Table (size = 0)
Source Position Table (size = 11)
0x07a21c2a7fb9 <ByteArray[11]>
0x07a21c2a8091 points to: [0x7a21c2a8100]
=== [0x7a21c2a8100] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4116 S> 0x7a21c2a8100 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a8104 @    4 : c4                Star0 
 4123 E> 0x7a21c2a8105 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x7a21c2a8109 @    9 : 96 0d             JumpIfToBooleanTrue [13] (0x7a21c2a8116 @ 22)
 4148 E> 0x7a21c2a810b @   11 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x7a21c2a810f @   15 : c4                Star0 
 4155 E> 0x7a21c2a8110 @   16 : 2d fa 01 06       GetNamedProperty r0, [1], [6]
         0x7a21c2a8114 @   20 : 97 04             JumpIfToBooleanFalse [4] (0x7a21c2a8118 @ 24)
 4180 S> 0x7a21c2a8116 @   22 : 0e                LdaUndefined 
 4187 S> 0x7a21c2a8117 @   23 : a9                Return 
 4201 S> 0x7a21c2a8118 @   24 : 2d 02 03 08       GetNamedProperty <this>, [3], [8]
         0x7a21c2a811c @   28 : c3                Star1 
 4212 E> 0x7a21c2a811d @   29 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x7a21c2a8121 @   33 : c4                Star0 
 4212 E> 0x7a21c2a8122 @   34 : 5e fa f9 03 0c    CallProperty1 r0, r1, a0, [12]
 4247 S> 0x7a21c2a8127 @   39 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a812b @   43 : c3                Star1 
 4254 E> 0x7a21c2a812c @   44 : 2d f9 05 0e       GetNamedProperty r1, [5], [14]
         0x7a21c2a8130 @   48 : c4                Star0 
 4254 E> 0x7a21c2a8131 @   49 : 5d fa f9 10       CallProperty0 r0, r1, [16]
 4283 S> 0x7a21c2a8135 @   53 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x7a21c2a8139 @   57 : c3                Star1 
 4290 E> 0x7a21c2a813a @   58 : 2d f9 05 12       GetNamedProperty r1, [5], [18]
         0x7a21c2a813e @   62 : c4                Star0 
 4290 E> 0x7a21c2a813f @   63 : 5d fa f9 14       CallProperty0 r0, r1, [20]
 4314 S> 0x7a21c2a8143 @   67 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x7a21c2a8147 @   71 : c4                Star0 
 4314 E> 0x7a21c2a8148 @   72 : 5e fa 02 03 18    CallProperty1 r0, <this>, a0, [24]
 4352 S> 0x7a21c2a814d @   77 : 2d 02 07 1a       GetNamedProperty <this>, [7], [26]
         0x7a21c2a8151 @   81 : c3                Star1 
 4372 E> 0x7a21c2a8152 @   82 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x7a21c2a8156 @   86 : c2                Star2 
 4380 E> 0x7a21c2a8157 @   87 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x7a21c2a815b @   91 : c2                Star2 
 4409 E> 0x7a21c2a815c @   92 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a8160 @   96 : c1                Star3 
 4416 E> 0x7a21c2a8161 @   97 : 2d f7 0a 22       GetNamedProperty r3, [10], [34]
 4397 E> 0x7a21c2a8165 @  101 : 3b f8 1d          Mul r2, [29]
         0x7a21c2a8168 @  104 : 39 f9 1c          Add r1, [28]
 4364 E> 0x7a21c2a816b @  107 : 32 02 07 24       SetNamedProperty <this>, [7], [36]
         0x7a21c2a816f @  111 : 0e                LdaUndefined 
 4427 S> 0x7a21c2a8170 @  112 : a9                Return 
Constant pool (size = 11)
0x7a21c2a8179: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 11
           0: 0x07a21c2a7cd9 <String[6]: #meteor>
           1: 0x2c0f01fcb511 <String[11]: #isDestroyed>
           2: 0x07a21c2a7b09 <String[6]: #rocket>
           3: 0x07a21c2a5919 <String[10]: #collisions>
           4: 0x2c0f01fc9551 <String[4]: #push>
           5: 0x2c0f01fcba19 <String[7]: #destroy>
           6: 0x07a21c2a5509 <String[17]: #handleMeteorSplit>
           7: 0x07a21c2a59c9 <String[6]: #_score>
           8: 0x2c0f01fccbb9 <String[7]: #options>
           9: 0x07a21c2a81f9 <String[16]: #SCORE_MULTIPLIER>
          10: 0x07a21c2a5639 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 58)
0x07a21c2a8219 <ByteArray[58]>
0x07a21c2a82e9 points to: [0x7a21c2a8358]
=== [0x7a21c2a8358] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 4450 E> 0x7a21c2a8358 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x7a21c2a835b @    3 : 1a fa             PushContext r0
         0x7a21c2a835d @    5 : 0b 02             Ldar <this>
         0x7a21c2a835f @    7 : 25 02             StaCurrentContextSlot [2]
 4472 S> 0x7a21c2a8361 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a8363 @   11 : c1                Star3 
 4477 E> 0x7a21c2a8364 @   12 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x7a21c2a8368 @   16 : c1                Star3 
 4492 E> 0x7a21c2a8369 @   17 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x7a21c2a836d @   21 : c2                Star2 
 4529 E> 0x7a21c2a836e @   22 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x7a21c2a8372 @   26 : c0                Star4 
 4547 E> 0x7a21c2a8373 @   27 : 2d 03 04 06       GetNamedProperty a0, [4], [6]
         0x7a21c2a8377 @   31 : bf                Star5 
 4492 E> 0x7a21c2a8378 @   32 : 5f f8 f7 f6 f5 08 CallProperty2 r2, r3, r4, r5, [8]
         0x7a21c2a837e @   38 : c2                Star2 
 4560 E> 0x7a21c2a837f @   39 : 2d f8 05 0a       GetNamedProperty r2, [5], [10]
         0x7a21c2a8383 @   43 : c3                Star1 
         0x7a21c2a8384 @   44 : 80 06 00 02       CreateClosure [6], [0], #2
         0x7a21c2a8388 @   48 : c1                Star3 
 4561 E> 0x7a21c2a8389 @   49 : 5e f9 f8 f7 0c    CallProperty1 r1, r2, r3, [12]
         0x7a21c2a838e @   54 : 0e                LdaUndefined 
 4603 S> 0x7a21c2a838f @   55 : a9                Return 
Constant pool (size = 7)
0x7a21c2a8391: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 7
           0: 0x07a21c2a83d9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x07a21c2a5a01 <String[14]: #_meteorBuilder>
           2: 0x07a21c2a8439 <String[26]: #buildMeteorsAfterExplosion>
           3: 0x07a21c2a7cd9 <String[6]: #meteor>
           4: 0x07a21c2a8469 <String[12]: #intersection>
           5: 0x2c0f01fca021 <String[7]: #forEach>
           6: 0x07a21c2a8489 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 28)
0x07a21c2a85b9 <ByteArray[28]>
0x07a21c2a8489 points to: [0x7a21c2a84f8]
=== [0x7a21c2a84f8] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4589 S> 0x7a21c2a84f8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x7a21c2a84fa @    2 : c3                Star1 
 4581 E> 0x7a21c2a84fb @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x7a21c2a84ff @    7 : c3                Star1 
 4589 E> 0x7a21c2a8500 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x7a21c2a8504 @   12 : c4                Star0 
 4589 E> 0x7a21c2a8505 @   13 : 5e fa f9 03 04    CallProperty1 r0, r1, a0, [4]
 4596 S> 0x7a21c2a850a @   18 : a9                Return 
Constant pool (size = 2)
0x7a21c2a8511: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 2
           0: 0x07a21c2a58e9 <String[7]: #meteors>
           1: 0x2c0f01fc9551 <String[4]: #push>
Handler Table (size = 0)
Source Position Table (size = 14)
0x07a21c2a8531 <ByteArray[14]>
0x07a21c2a8609 points to: [0x7a21c2a8678]
=== [0x7a21c2a8678] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4654 S> 0x7a21c2a8678 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a867c @    4 : c4                Star0 
         0x7a21c2a867d @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4679 E> 0x7a21c2a867f @    7 : aa 01             ThrowReferenceErrorIfHole [1]
         0x7a21c2a8681 @    9 : c3                Star1 
 4688 E> 0x7a21c2a8682 @   10 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x7a21c2a8686 @   14 : c3                Star1 
 4700 E> 0x7a21c2a8687 @   15 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x7a21c2a868b @   19 : 6c fa 02          TestEqualStrict r0, [2]
         0x7a21c2a868e @   22 : 98 2a             JumpIfTrue [42] (0x7a21c2a86b8 @ 64)
         0x7a21c2a8690 @   24 : 17 02             LdaImmutableCurrentContextSlot [2]
 4797 E> 0x7a21c2a8692 @   26 : aa 01             ThrowReferenceErrorIfHole [1]
         0x7a21c2a8694 @   28 : c3                Star1 
 4806 E> 0x7a21c2a8695 @   29 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x7a21c2a8699 @   33 : c3                Star1 
 4818 E> 0x7a21c2a869a @   34 : 2d f9 04 07       GetNamedProperty r1, [4], [7]
         0x7a21c2a869e @   38 : 6c fa 02          TestEqualStrict r0, [2]
         0x7a21c2a86a1 @   41 : 98 23             JumpIfTrue [35] (0x7a21c2a86c4 @ 76)
         0x7a21c2a86a3 @   43 : 17 02             LdaImmutableCurrentContextSlot [2]
 4915 E> 0x7a21c2a86a5 @   45 : aa 01             ThrowReferenceErrorIfHole [1]
         0x7a21c2a86a7 @   47 : c3                Star1 
 4924 E> 0x7a21c2a86a8 @   48 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x7a21c2a86ac @   52 : c3                Star1 
 4936 E> 0x7a21c2a86ad @   53 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x7a21c2a86b1 @   57 : 6c fa 02          TestEqualStrict r0, [2]
         0x7a21c2a86b4 @   60 : 98 1c             JumpIfTrue [28] (0x7a21c2a86d0 @ 88)
         0x7a21c2a86b6 @   62 : 8a 25             Jump [37] (0x7a21c2a86db @ 99)
 4729 S> 0x7a21c2a86b8 @   64 : 2d 02 06 0b       GetNamedProperty <this>, [6], [11]
         0x7a21c2a86bc @   68 : c3                Star1 
 4729 E> 0x7a21c2a86bd @   69 : 5e f9 02 03 0d    CallProperty1 r1, <this>, a0, [13]
 4773 S> 0x7a21c2a86c2 @   74 : 8a 19             Jump [25] (0x7a21c2a86db @ 99)
 4847 S> 0x7a21c2a86c4 @   76 : 2d 02 07 0f       GetNamedProperty <this>, [7], [15]
         0x7a21c2a86c8 @   80 : c3                Star1 
 4847 E> 0x7a21c2a86c9 @   81 : 5e f9 02 03 11    CallProperty1 r1, <this>, a0, [17]
 4891 S> 0x7a21c2a86ce @   86 : 8a 0d             Jump [13] (0x7a21c2a86db @ 99)
 4964 S> 0x7a21c2a86d0 @   88 : 2d 02 08 13       GetNamedProperty <this>, [8], [19]
         0x7a21c2a86d4 @   92 : c3                Star1 
 4964 E> 0x7a21c2a86d5 @   93 : 5d f9 02 15       CallProperty0 r1, <this>, [21]
 5001 S> 0x7a21c2a86d9 @   97 : 8a 02             Jump [2] (0x7a21c2a86db @ 99)
         0x7a21c2a86db @   99 : 0e                LdaUndefined 
 5022 S> 0x7a21c2a86dc @  100 : a9                Return 
Constant pool (size = 9)
0x7a21c2a86e1: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 9
           0: 0x3b74cb984469 <String[4]: #type>
           1: 0x07a21c2a5019 <String[8]: #action_1>
           2: 0x07a21c2a8739 <String[11]: #ActionTypes>
           3: 0x07a21c2a8759 <String[6]: #ROTATE>
           4: 0x07a21c2a8771 <String[6]: #LOOKAT>
           5: 0x07a21c2a8789 <String[5]: #SHOOT>
           6: 0x07a21c2a55c1 <String[18]: #handleActionRotate>
           7: 0x07a21c2a55e9 <String[18]: #handleActionLookAt>
           8: 0x07a21c2a5611 <String[17]: #handleActionShoot>
Handler Table (size = 0)
Source Position Table (size = 53)
0x07a21c2a87a1 <ByteArray[53]>
0x07a21c2a8859 points to: [0x7a21c2a88c8]
=== [0x7a21c2a88c8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5088 S> 0x7a21c2a88c8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x7a21c2a88cc @    4 : c3                Star1 
 5088 E> 0x7a21c2a88cd @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x7a21c2a88d1 @    9 : c3                Star1 
         0x7a21c2a88d2 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x7a21c2a88d6 @   14 : c4                Star0 
 5132 E> 0x7a21c2a88d7 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x7a21c2a88db @   19 : c2                Star2 
 5139 E> 0x7a21c2a88dc @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x7a21c2a88e0 @   24 : c3                Star1 
 5139 E> 0x7a21c2a88e1 @   25 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x7a21c2a88e5 @   29 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5187 E> 0x7a21c2a88e9 @   33 : 2d 02 03 0e       GetNamedProperty <this>, [3], [14]
         0x7a21c2a88ed @   37 : c2                Star2 
 5195 E> 0x7a21c2a88ee @   38 : 2d f8 04 10       GetNamedProperty r2, [4], [16]
         0x7a21c2a88f2 @   42 : c3                Star1 
         0x7a21c2a88f3 @   43 : 80 05 00 02       CreateClosure [5], [0], #2
         0x7a21c2a88f7 @   47 : c1                Star3 
 5195 E> 0x7a21c2a88f8 @   48 : 5e f9 f8 f7 12    CallProperty1 r1, r2, r3, [18]
         0x7a21c2a88fd @   53 : 33 fa 03 14       DefineNamedOwnProperty r0, [3], [20]
 5257 E> 0x7a21c2a8901 @   57 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x7a21c2a8905 @   61 : c2                Star2 
 5265 E> 0x7a21c2a8906 @   62 : 2d f8 04 18       GetNamedProperty r2, [4], [24]
         0x7a21c2a890a @   66 : c3                Star1 
         0x7a21c2a890b @   67 : 80 07 01 02       CreateClosure [7], [1], #2
         0x7a21c2a890f @   71 : c1                Star3 
 5265 E> 0x7a21c2a8910 @   72 : 5e f9 f8 f7 1a    CallProperty1 r1, r2, r3, [26]
         0x7a21c2a8915 @   77 : 33 fa 06 1c       DefineNamedOwnProperty r0, [6], [28]
 5330 E> 0x7a21c2a8919 @   81 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x7a21c2a891d @   85 : c2                Star2 
 5341 E> 0x7a21c2a891e @   86 : 2d f8 04 20       GetNamedProperty r2, [4], [32]
         0x7a21c2a8922 @   90 : c3                Star1 
         0x7a21c2a8923 @   91 : 80 09 02 02       CreateClosure [9], [2], #2
         0x7a21c2a8927 @   95 : c1                Star3 
 5341 E> 0x7a21c2a8928 @   96 : 5e f9 f8 f7 22    CallProperty1 r1, r2, r3, [34]
         0x7a21c2a892d @  101 : 33 fa 08 24       DefineNamedOwnProperty r0, [8], [36]
         0x7a21c2a8931 @  105 : 0b fa             Ldar r0
 5569 S> 0x7a21c2a8933 @  107 : a9                Return 
Constant pool (size = 10)
0x7a21c2a8939: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 10
           0: 0x07a21c2a55a1 <String[15]: #serializeCommon>
           1: 0x07a21c2a5bf9 <String[6]: #cannon>
           2: 0x07a21c2a5551 <String[18]: #serializeForViewer>
           3: 0x07a21c2a58e9 <String[7]: #meteors>
           4: 0x2c0f01fc9ea9 <String[3]: #map>
           5: 0x07a21c2a89b1 <SharedFunctionInfo>
           6: 0x07a21c2a5901 <String[7]: #rockets>
           7: 0x07a21c2a8ad1 <SharedFunctionInfo>
           8: 0x07a21c2a5919 <String[10]: #collisions>
           9: 0x07a21c2a8bf1 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 40)
0x07a21c2a8e11 <ByteArray[40]>
0x07a21c2a89b1 points to: [0x7a21c2a8a20]
=== [0x7a21c2a8a20] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5208 S> 0x7a21c2a8a20 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a8a24 @    4 : c4                Star0 
 5208 E> 0x7a21c2a8a25 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5228 S> 0x7a21c2a8a29 @    9 : a9                Return 
Constant pool (size = 1)
0x7a21c2a8a31: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x07a21c2a5551 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x07a21c2a8a49 <ByteArray[10]>
0x07a21c2a8ad1 points to: [0x7a21c2a8b40]
=== [0x7a21c2a8b40] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5278 S> 0x7a21c2a8b40 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a8b44 @    4 : c4                Star0 
 5278 E> 0x7a21c2a8b45 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5298 S> 0x7a21c2a8b49 @    9 : a9                Return 
Constant pool (size = 1)
0x7a21c2a8b51: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x07a21c2a5551 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x07a21c2a8b69 <ByteArray[10]>
0x07a21c2a8bf1 points to: [0x7a21c2a8c60]
=== [0x7a21c2a8c60] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 5359 S> 0x7a21c2a8c60 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x7a21c2a8c64 @    4 : c4                Star0 
 5401 E> 0x7a21c2a8c65 @    5 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
         0x7a21c2a8c69 @    9 : c2                Star2 
 5414 E> 0x7a21c2a8c6a @   10 : 2d f8 02 03       GetNamedProperty r2, [2], [3]
         0x7a21c2a8c6e @   14 : c3                Star1 
 5414 E> 0x7a21c2a8c6f @   15 : 5d f9 f8 05       CallProperty0 r1, r2, [5]
         0x7a21c2a8c73 @   19 : 33 fa 01 07       DefineNamedOwnProperty r0, [1], [7]
 5469 E> 0x7a21c2a8c77 @   23 : 2d 03 03 09       GetNamedProperty a0, [3], [9]
         0x7a21c2a8c7b @   27 : c2                Star2 
 5476 E> 0x7a21c2a8c7c @   28 : 2d f8 04 0b       GetNamedProperty r2, [4], [11]
         0x7a21c2a8c80 @   32 : c2                Star2 
 5485 E> 0x7a21c2a8c81 @   33 : 2d f8 02 0d       GetNamedProperty r2, [2], [13]
         0x7a21c2a8c85 @   37 : c3                Star1 
 5485 E> 0x7a21c2a8c86 @   38 : 5d f9 f8 0f       CallProperty0 r1, r2, [15]
         0x7a21c2a8c8a @   42 : 33 fa 05 11       DefineNamedOwnProperty r0, [5], [17]
 5530 E> 0x7a21c2a8c8e @   46 : 2d 03 03 09       GetNamedProperty a0, [3], [9]
         0x7a21c2a8c92 @   50 : c3                Star1 
 5537 E> 0x7a21c2a8c93 @   51 : 2d f9 06 13       GetNamedProperty r1, [6], [19]
         0x7a21c2a8c97 @   55 : 33 fa 06 15       DefineNamedOwnProperty r0, [6], [21]
         0x7a21c2a8c9b @   59 : 0b fa             Ldar r0
 5556 S> 0x7a21c2a8c9d @   61 : a9                Return 
Constant pool (size = 7)
0x7a21c2a8ca1: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 7
           0: 0x07a21c2a8ce9 <ObjectBoilerplateDescription[7]>
           1: 0x07a21c2a8469 <String[12]: #intersection>
           2: 0x2c0f01fd01a9 <String[9]: #serialize>
           3: 0x07a21c2a7cd9 <String[6]: #meteor>
           4: 0x3b74cb985c19 <String[8]: #position>
           5: 0x07a21c2a8d31 <String[14]: #meteorPosition>
           6: 0x3b74cb98a111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 29)
0x07a21c2a8d71 <ByteArray[29]>
Boilerplate at 0x07a21c2a8ce9: 
0x7a21c2a8ce9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3b74cb982059 <Map>
 - length: 7
           0: 8
           1: 0x07a21c2a8469 <String[12]: #intersection>
           2: 0x3b74cb981501 <Odd Oddball: uninitialized>
           3: 0x07a21c2a8d31 <String[14]: #meteorPosition>
           4: 0x3b74cb981501 <Odd Oddball: uninitialized>
           5: 0x3b74cb98a111 <String[4]: #size>
           6: 0x3b74cb981501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x07a21c2a8ec9 points to: [0x7a21c2a8f38]
=== [0x7a21c2a8f38] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5640 S> 0x7a21c2a8f38 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x7a21c2a8f3c @    4 : c3                Star1 
 5640 E> 0x7a21c2a8f3d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x7a21c2a8f41 @    9 : c3                Star1 
         0x7a21c2a8f42 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x7a21c2a8f46 @   14 : c4                Star0 
 5684 E> 0x7a21c2a8f47 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x7a21c2a8f4b @   19 : c2                Star2 
 5691 E> 0x7a21c2a8f4c @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x7a21c2a8f50 @   24 : c3                Star1 
 5691 E> 0x7a21c2a8f51 @   25 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x7a21c2a8f55 @   29 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5739 E> 0x7a21c2a8f59 @   33 : 2d 02 03 0e       GetNamedProperty <this>, [3], [14]
         0x7a21c2a8f5d @   37 : c2                Star2 
 5747 E> 0x7a21c2a8f5e @   38 : 2d f8 04 10       GetNamedProperty r2, [4], [16]
         0x7a21c2a8f62 @   42 : c3                Star1 
         0x7a21c2a8f63 @   43 : 80 05 00 02       CreateClosure [5], [0], #2
         0x7a21c2a8f67 @   47 : c1                Star3 
 5747 E> 0x7a21c2a8f68 @   48 : 5e f9 f8 f7 12    CallProperty1 r1, r2, r3, [18]
         0x7a21c2a8f6d @   53 : 33 fa 03 14       DefineNamedOwnProperty r0, [3], [20]
 5809 E> 0x7a21c2a8f71 @   57 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x7a21c2a8f75 @   61 : c2                Star2 
 5817 E> 0x7a21c2a8f76 @   62 : 2d f8 04 18       GetNamedProperty r2, [4], [24]
         0x7a21c2a8f7a @   66 : c3                Star1 
         0x7a21c2a8f7b @   67 : 80 07 01 02       CreateClosure [7], [1], #2
         0x7a21c2a8f7f @   71 : c1                Star3 
 5817 E> 0x7a21c2a8f80 @   72 : 5e f9 f8 f7 1a    CallProperty1 r1, r2, r3, [26]
         0x7a21c2a8f85 @   77 : 33 fa 06 1c       DefineNamedOwnProperty r0, [6], [28]
         0x7a21c2a8f89 @   81 : 0b fa             Ldar r0
 5863 S> 0x7a21c2a8f8b @   83 : a9                Return 
Constant pool (size = 8)
0x7a21c2a8f91: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 8
           0: 0x07a21c2a55a1 <String[15]: #serializeCommon>
           1: 0x07a21c2a5bf9 <String[6]: #cannon>
           2: 0x07a21c2a5579 <String[18]: #serializeForPlayer>
           3: 0x07a21c2a58e9 <String[7]: #meteors>
           4: 0x2c0f01fc9ea9 <String[3]: #map>
           5: 0x07a21c2a8fe1 <SharedFunctionInfo>
           6: 0x07a21c2a5901 <String[7]: #rockets>
           7: 0x07a21c2a9101 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 33)
0x07a21c2a9221 <ByteArray[33]>
0x07a21c2a8fe1 points to: [0x7a21c2a9050]
=== [0x7a21c2a9050] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5760 S> 0x7a21c2a9050 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a9054 @    4 : c4                Star0 
 5760 E> 0x7a21c2a9055 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5780 S> 0x7a21c2a9059 @    9 : a9                Return 
Constant pool (size = 1)
0x7a21c2a9061: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x07a21c2a5579 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x07a21c2a9079 <ByteArray[10]>
0x07a21c2a9101 points to: [0x7a21c2a9170]
=== [0x7a21c2a9170] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5830 S> 0x7a21c2a9170 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a9174 @    4 : c4                Star0 
 5830 E> 0x7a21c2a9175 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5850 S> 0x7a21c2a9179 @    9 : a9                Return 
Constant pool (size = 1)
0x7a21c2a9181: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x07a21c2a5579 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x07a21c2a9199 <ByteArray[10]>
0x07a21c2a92d1 points to: [0x7a21c2a9340]
=== [0x7a21c2a9340] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5902 S> 0x7a21c2a9340 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x7a21c2a9344 @    4 : c4                Star0 
 5935 E> 0x7a21c2a9345 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x7a21c2a9349 @    9 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x7a21c2a934d @   13 : 0b fa             Ldar r0
 5953 S> 0x7a21c2a934f @   15 : a9                Return 
Constant pool (size = 3)
0x7a21c2a9351: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 3
           0: 0x07a21c2a9379 <ObjectBoilerplateDescription[3]>
           1: 0x07a21c2a59c9 <String[6]: #_score>
           2: 0x07a21c2a5639 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 11)
0x07a21c2a93a1 <ByteArray[11]>
Boilerplate at 0x07a21c2a9379: 
0x7a21c2a9379: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3b74cb982059 <Map>
 - length: 3
           0: 8
           1: 0x07a21c2a5639 <String[5]: #score>
           2: 0x3b74cb981501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x07a21c2a9429 points to: [0x7a21c2a9498]
=== [0x7a21c2a9498] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 6012 S> 0x7a21c2a9498 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a949c @    4 : 1d                TestUndetectable 
         0x7a21c2a949d @    5 : 98 17             JumpIfTrue [23] (0x7a21c2a94b4 @ 28)
 6029 E> 0x7a21c2a949f @    7 : 21 01 02          LdaGlobal [1], [2]
         0x7a21c2a94a2 @   10 : c3                Star1 
 6036 E> 0x7a21c2a94a3 @   11 : 2d f9 02 04       GetNamedProperty r1, [2], [4]
         0x7a21c2a94a7 @   15 : c4                Star0 
 6049 E> 0x7a21c2a94a8 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a94ac @   20 : c2                Star2 
 6036 E> 0x7a21c2a94ad @   21 : 5e fa f9 f8 06    CallProperty1 r0, r1, r2, [6]
         0x7a21c2a94b2 @   26 : 97 11             JumpIfToBooleanFalse [17] (0x7a21c2a94c3 @ 43)
 6071 S> 0x7a21c2a94b4 @   28 : 21 03 08          LdaGlobal [3], [8]
         0x7a21c2a94b7 @   31 : c4                Star0 
         0x7a21c2a94b8 @   32 : 13 04             LdaConstant [4]
         0x7a21c2a94ba @   34 : c3                Star1 
         0x7a21c2a94bb @   35 : 0b fa             Ldar r0
 6077 E> 0x7a21c2a94bd @   37 : 69 fa f9 01 0a    Construct r0, r1-r1, [10]
 6071 E> 0x7a21c2a94c2 @   42 : a7                Throw 
 6144 S> 0x7a21c2a94c3 @   43 : 2d 02 05 0c       GetNamedProperty <this>, [5], [12]
         0x7a21c2a94c7 @   47 : c3                Star1 
 6151 E> 0x7a21c2a94c8 @   48 : 2d f9 06 0e       GetNamedProperty r1, [6], [14]
         0x7a21c2a94cc @   52 : c4                Star0 
 6165 E> 0x7a21c2a94cd @   53 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a94d1 @   57 : c2                Star2 
 6151 E> 0x7a21c2a94d2 @   58 : 5e fa f9 f8 10    CallProperty1 r0, r1, r2, [16]
         0x7a21c2a94d7 @   63 : 0e                LdaUndefined 
 6177 S> 0x7a21c2a94d8 @   64 : a9                Return 
Constant pool (size = 7)
0x7a21c2a94e1: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 7
           0: 0x07a21c2a9529 <String[5]: #angle>
           1: 0x3b74cb985a69 <String[6]: #Number>
           2: 0x2c0f01fdbc99 <String[5]: #isNaN>
           3: 0x3b74cb984de1 <String[5]: #Error>
           4: 0x07a21c2a9559 <String[29]: #Invalid value in action.angle>
           5: 0x07a21c2a5bf9 <String[6]: #cannon>
           6: 0x07a21c2a9589 <String[6]: #rotate>
Handler Table (size = 0)
Source Position Table (size = 32)
0x07a21c2a95a1 <ByteArray[32]>
0x07a21c2a9641 points to: [0x7a21c2a96b0]
=== [0x7a21c2a96b0] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 6231 S> 0x7a21c2a96b0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a96b4 @    4 : 1d                TestUndetectable 
         0x7a21c2a96b5 @    5 : 99 11             JumpIfFalse [17] (0x7a21c2a96c6 @ 22)
 6261 S> 0x7a21c2a96b7 @    7 : 21 01 02          LdaGlobal [1], [2]
         0x7a21c2a96ba @   10 : c4                Star0 
         0x7a21c2a96bb @   11 : 13 02             LdaConstant [2]
         0x7a21c2a96bd @   13 : c3                Star1 
         0x7a21c2a96be @   14 : 0b fa             Ldar r0
 6267 E> 0x7a21c2a96c0 @   16 : 69 fa f9 01 04    Construct r0, r1-r1, [4]
 6261 E> 0x7a21c2a96c5 @   21 : a7                Throw 
 6341 S> 0x7a21c2a96c6 @   22 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a96ca @   26 : c4                Star0 
 6348 E> 0x7a21c2a96cb @   27 : 2d fa 03 06       GetNamedProperty r0, [3], [6]
         0x7a21c2a96cf @   31 : 1d                TestUndetectable 
         0x7a21c2a96d0 @   32 : 98 1c             JumpIfTrue [28] (0x7a21c2a96ec @ 60)
 6361 E> 0x7a21c2a96d2 @   34 : 21 04 08          LdaGlobal [4], [8]
         0x7a21c2a96d5 @   37 : c3                Star1 
 6368 E> 0x7a21c2a96d6 @   38 : 2d f9 05 0a       GetNamedProperty r1, [5], [10]
         0x7a21c2a96da @   42 : c4                Star0 
 6381 E> 0x7a21c2a96db @   43 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a96df @   47 : c2                Star2 
 6388 E> 0x7a21c2a96e0 @   48 : 2d f8 03 0c       GetNamedProperty r2, [3], [12]
         0x7a21c2a96e4 @   52 : c2                Star2 
 6368 E> 0x7a21c2a96e5 @   53 : 5e fa f9 f8 0e    CallProperty1 r0, r1, r2, [14]
         0x7a21c2a96ea @   58 : 97 11             JumpIfToBooleanFalse [17] (0x7a21c2a96fb @ 75)
 6406 S> 0x7a21c2a96ec @   60 : 21 01 02          LdaGlobal [1], [2]
         0x7a21c2a96ef @   63 : c4                Star0 
         0x7a21c2a96f0 @   64 : 13 06             LdaConstant [6]
         0x7a21c2a96f2 @   66 : c3                Star1 
         0x7a21c2a96f3 @   67 : 0b fa             Ldar r0
 6412 E> 0x7a21c2a96f5 @   69 : 69 fa f9 01 10    Construct r0, r1-r1, [16]
 6406 E> 0x7a21c2a96fa @   74 : a7                Throw 
 6488 S> 0x7a21c2a96fb @   75 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a96ff @   79 : c4                Star0 
 6495 E> 0x7a21c2a9700 @   80 : 2d fa 07 12       GetNamedProperty r0, [7], [18]
         0x7a21c2a9704 @   84 : 1d                TestUndetectable 
         0x7a21c2a9705 @   85 : 98 1c             JumpIfTrue [28] (0x7a21c2a9721 @ 113)
 6508 E> 0x7a21c2a9707 @   87 : 21 04 08          LdaGlobal [4], [8]
         0x7a21c2a970a @   90 : c3                Star1 
 6515 E> 0x7a21c2a970b @   91 : 2d f9 05 0a       GetNamedProperty r1, [5], [10]
         0x7a21c2a970f @   95 : c4                Star0 
 6528 E> 0x7a21c2a9710 @   96 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a9714 @  100 : c2                Star2 
 6535 E> 0x7a21c2a9715 @  101 : 2d f8 07 14       GetNamedProperty r2, [7], [20]
         0x7a21c2a9719 @  105 : c2                Star2 
 6515 E> 0x7a21c2a971a @  106 : 5e fa f9 f8 16    CallProperty1 r0, r1, r2, [22]
         0x7a21c2a971f @  111 : 97 11             JumpIfToBooleanFalse [17] (0x7a21c2a9730 @ 128)
 6553 S> 0x7a21c2a9721 @  113 : 21 01 02          LdaGlobal [1], [2]
         0x7a21c2a9724 @  116 : c4                Star0 
         0x7a21c2a9725 @  117 : 13 08             LdaConstant [8]
         0x7a21c2a9727 @  119 : c3                Star1 
         0x7a21c2a9728 @  120 : 0b fa             Ldar r0
 6559 E> 0x7a21c2a972a @  122 : 69 fa f9 01 18    Construct r0, r1-r1, [24]
 6553 E> 0x7a21c2a972f @  127 : a7                Throw 
 6629 S> 0x7a21c2a9730 @  128 : 2d 02 09 1a       GetNamedProperty <this>, [9], [26]
         0x7a21c2a9734 @  132 : c3                Star1 
 6636 E> 0x7a21c2a9735 @  133 : 2d f9 0a 1c       GetNamedProperty r1, [10], [28]
         0x7a21c2a9739 @  137 : c4                Star0 
         0x7a21c2a973a @  138 : 17 07             LdaImmutableCurrentContextSlot [7]
 6647 E> 0x7a21c2a973c @  140 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x7a21c2a973e @  142 : c2                Star2 
 6656 E> 0x7a21c2a973f @  143 : 2d f8 0c 1e       GetNamedProperty r2, [12], [30]
         0x7a21c2a9743 @  147 : c2                Star2 
 6670 E> 0x7a21c2a9744 @  148 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a9748 @  152 : c1                Star3 
 6677 E> 0x7a21c2a9749 @  153 : 2d f7 03 20       GetNamedProperty r3, [3], [32]
         0x7a21c2a974d @  157 : c1                Star3 
 6687 E> 0x7a21c2a974e @  158 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x7a21c2a9752 @  162 : c0                Star4 
 6694 E> 0x7a21c2a9753 @  163 : 2d f6 07 22       GetNamedProperty r4, [7], [34]
         0x7a21c2a9757 @  167 : c0                Star4 
         0x7a21c2a9758 @  168 : 0b f8             Ldar r2
 6643 E> 0x7a21c2a975a @  170 : 69 f8 f7 02 24    Construct r2, r3-r4, [36]
         0x7a21c2a975f @  175 : c2                Star2 
 6636 E> 0x7a21c2a9760 @  176 : 5e fa f9 f8 26    CallProperty1 r0, r1, r2, [38]
         0x7a21c2a9765 @  181 : 0e                LdaUndefined 
 6703 S> 0x7a21c2a9766 @  182 : a9                Return 
Constant pool (size = 13)
0x7a21c2a9769: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 13
           0: 0x3b74cb986201 <String[6]: #target>
           1: 0x3b74cb984de1 <String[5]: #Error>
           2: 0x07a21c2a97e1 <String[30]: #Invalid value in action.target>
           3: 0x2c0f01fd8ac9 <String[1]: #x>
           4: 0x3b74cb985a69 <String[6]: #Number>
           5: 0x2c0f01fdbc99 <String[5]: #isNaN>
           6: 0x07a21c2a9811 <String[32]: #Invalid value in action.target.x>
           7: 0x2c0f01fd8ae1 <String[1]: #y>
           8: 0x07a21c2a9841 <String[32]: #Invalid value in action.target.y>
           9: 0x07a21c2a5bf9 <String[6]: #cannon>
          10: 0x07a21c2a9871 <String[6]: #lookAt>
          11: 0x07a21c2a50a1 <String[8]: #vector_1>
          12: 0x07a21c2a6521 <String[6]: #Vector>
Handler Table (size = 0)
Source Position Table (size = 81)
0x07a21c2a9889 <ByteArray[81]>
0x07a21c2a9971 points to: [0x7a21c2a99e0]
=== [0x7a21c2a99e0] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 6744 S> 0x7a21c2a99e0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x7a21c2a99e4 @    4 : c3                Star1 
 6752 E> 0x7a21c2a99e5 @    5 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x7a21c2a99e9 @    9 : c4                Star0 
 6762 E> 0x7a21c2a99ea @   10 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x7a21c2a99ee @   14 : c1                Star3 
 6769 E> 0x7a21c2a99ef @   15 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x7a21c2a99f3 @   19 : c2                Star2 
 6769 E> 0x7a21c2a99f4 @   20 : 5d f8 f7 08       CallProperty0 r2, r3, [8]
         0x7a21c2a99f8 @   24 : c2                Star2 
 6752 E> 0x7a21c2a99f9 @   25 : 5e fa f9 f8 0a    CallProperty1 r0, r1, r2, [10]
         0x7a21c2a99fe @   30 : 0e                LdaUndefined 
 6790 S> 0x7a21c2a99ff @   31 : a9                Return 
Constant pool (size = 4)
0x7a21c2a9a01: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 4
           0: 0x07a21c2a5901 <String[7]: #rockets>
           1: 0x2c0f01fc9551 <String[4]: #push>
           2: 0x07a21c2a5bf9 <String[6]: #cannon>
           3: 0x07a21c2a9a31 <String[12]: #launchRocket>
Handler Table (size = 0)
Source Position Table (size = 19)
0x07a21c2a9a51 <ByteArray[19]>
0x07a21c2a9ae1 points to: [0x7a21c2a9b50]
=== [0x7a21c2a9b50] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 6830 S> 0x7a21c2a9b50 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 6837 S> 0x7a21c2a9b54 @    4 : a9                Return 
Constant pool (size = 1)
0x7a21c2a9b59: [FixedArray] in OldSpace
 - map: 0x3b74cb9812e1 <Map>
 - length: 1
           0: 0x07a21c2a59c9 <String[6]: #_score>
Handler Table (size = 0)
Source Position Table (size = 8)
0x07a21c2a9b71 <ByteArray[8]>
<< OUTPUTTING DISASSEMBLY END >>
