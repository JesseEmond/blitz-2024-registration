<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1c5017564e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1c5017564e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1c5017564e4c @    4 : c4                Star0 
 6906 S> 0x1c5017564e4d @    5 : a9                Return 
Constant pool (size = 1)
0x1c5017564e51: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x1c5017564e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1c5017569dd9 <ByteArray[8]>
0x1c5017564e69 points to: [0x1c5017564ed8]
=== [0x1c5017564ed8] DISASSEMBLY ===
Parameter count 6
Register count 20
Frame size 160
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1c5017564ed8 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x1c5017564edb @    3 : 1a f9             PushContext r1
         0x1c5017564edd @    5 : 10                LdaTheHole 
         0x1c5017564ede @    6 : 25 02             StaCurrentContextSlot [2]
         0x1c5017564ee0 @    8 : 10                LdaTheHole 
         0x1c5017564ee1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x1c5017564ee3 @   11 : 10                LdaTheHole 
         0x1c5017564ee4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x1c5017564ee6 @   14 : 10                LdaTheHole 
         0x1c5017564ee7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x1c5017564ee9 @   17 : 10                LdaTheHole 
         0x1c5017564eea @   18 : 25 06             StaCurrentContextSlot [6]
         0x1c5017564eec @   20 : 10                LdaTheHole 
         0x1c5017564eed @   21 : 25 07             StaCurrentContextSlot [7]
   76 S> 0x1c5017564eef @   23 : 21 01 00          LdaGlobal [1], [0]
         0x1c5017564ef2 @   26 : c1                Star3 
   83 E> 0x1c5017564ef3 @   27 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x1c5017564ef7 @   31 : c2                Star2 
         0x1c5017564ef8 @   32 : 13 03             LdaConstant [3]
         0x1c5017564efa @   34 : bf                Star5 
   98 E> 0x1c5017564efb @   35 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x1c5017564eff @   39 : be                Star6 
         0x1c5017564f00 @   40 : 19 03 f6          Mov a0, r4
   83 E> 0x1c5017564f03 @   43 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x1c5017564f08 @   48 : 0e                LdaUndefined 
  153 E> 0x1c5017564f09 @   49 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  180 S> 0x1c5017564f0d @   53 : 13 06             LdaConstant [6]
         0x1c5017564f0f @   55 : c1                Star3 
  180 E> 0x1c5017564f10 @   56 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  180 E> 0x1c5017564f14 @   60 : 25 02             StaCurrentContextSlot [2]
  218 S> 0x1c5017564f16 @   62 : 13 07             LdaConstant [7]
         0x1c5017564f18 @   64 : c1                Star3 
  218 E> 0x1c5017564f19 @   65 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  218 E> 0x1c5017564f1d @   69 : 25 03             StaCurrentContextSlot [3]
  256 S> 0x1c5017564f1f @   71 : 13 08             LdaConstant [8]
         0x1c5017564f21 @   73 : c1                Star3 
  256 E> 0x1c5017564f22 @   74 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  256 E> 0x1c5017564f26 @   78 : 25 04             StaCurrentContextSlot [4]
  300 S> 0x1c5017564f28 @   80 : 13 09             LdaConstant [9]
         0x1c5017564f2a @   82 : c1                Star3 
  300 E> 0x1c5017564f2b @   83 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  300 E> 0x1c5017564f2f @   87 : 25 05             StaCurrentContextSlot [5]
  348 S> 0x1c5017564f31 @   89 : 13 0a             LdaConstant [10]
         0x1c5017564f33 @   91 : c1                Star3 
  348 E> 0x1c5017564f34 @   92 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  348 E> 0x1c5017564f38 @   96 : 25 06             StaCurrentContextSlot [6]
  390 S> 0x1c5017564f3a @   98 : 13 0b             LdaConstant [11]
         0x1c5017564f3c @  100 : c1                Star3 
  390 E> 0x1c5017564f3d @  101 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  390 E> 0x1c5017564f41 @  105 : 25 07             StaCurrentContextSlot [7]
         0x1c5017564f43 @  107 : 10                LdaTheHole 
         0x1c5017564f44 @  108 : bf                Star5 
         0x1c5017564f45 @  109 : 80 0d 00 02       CreateClosure [13], [0], #2
         0x1c5017564f49 @  113 : c2                Star2 
         0x1c5017564f4a @  114 : 13 0c             LdaConstant [12]
         0x1c5017564f4c @  116 : c1                Star3 
         0x1c5017564f4d @  117 : 80 0e 01 02       CreateClosure [14], [1], #2
         0x1c5017564f51 @  121 : be                Star6 
         0x1c5017564f52 @  122 : 80 0f 02 02       CreateClosure [15], [2], #2
         0x1c5017564f56 @  126 : bd                Star7 
         0x1c5017564f57 @  127 : 80 10 03 02       CreateClosure [16], [3], #2
         0x1c5017564f5b @  131 : bc                Star8 
         0x1c5017564f5c @  132 : 80 11 04 02       CreateClosure [17], [4], #2
         0x1c5017564f60 @  136 : bb                Star9 
         0x1c5017564f61 @  137 : 80 12 05 02       CreateClosure [18], [5], #2
         0x1c5017564f65 @  141 : ba                Star10 
         0x1c5017564f66 @  142 : 80 13 06 02       CreateClosure [19], [6], #2
         0x1c5017564f6a @  146 : b9                Star11 
         0x1c5017564f6b @  147 : 80 14 07 02       CreateClosure [20], [7], #2
         0x1c5017564f6f @  151 : b8                Star12 
         0x1c5017564f70 @  152 : 80 15 08 02       CreateClosure [21], [8], #2
         0x1c5017564f74 @  156 : b7                Star13 
         0x1c5017564f75 @  157 : 80 16 09 02       CreateClosure [22], [9], #2
         0x1c5017564f79 @  161 : b6                Star14 
         0x1c5017564f7a @  162 : 80 17 0a 02       CreateClosure [23], [10], #2
         0x1c5017564f7e @  166 : b5                Star15 
         0x1c5017564f7f @  167 : 80 18 0b 02       CreateClosure [24], [11], #2
         0x1c5017564f83 @  171 : 18 ea             Star r16
         0x1c5017564f85 @  173 : 80 19 0c 02       CreateClosure [25], [12], #2
         0x1c5017564f89 @  177 : 18 e9             Star r17
         0x1c5017564f8b @  179 : 80 1a 0d 02       CreateClosure [26], [13], #2
         0x1c5017564f8f @  183 : 18 e8             Star r18
         0x1c5017564f91 @  185 : 80 1b 0e 02       CreateClosure [27], [14], #2
         0x1c5017564f95 @  189 : 18 e7             Star r19
         0x1c5017564f97 @  191 : 19 f8 f6          Mov r2, r4
         0x1c5017564f9a @  194 : 65 28 00 f7 11    CallRuntime [DefineClass], r3-r19
         0x1c5017564f9f @  199 : c1                Star3 
         0x1c5017564fa0 @  200 : 19 f6 fa          Mov r4, r0
 6846 S> 0x1c5017564fa3 @  203 : 0b fa             Ldar r0
 6860 E> 0x1c5017564fa5 @  205 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x1c5017564fa9 @  209 : 0e                LdaUndefined 
 6903 S> 0x1c5017564faa @  210 : a9                Return 
Constant pool (size = 28)
0x1c5017564fb1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 28
           0: 0x1c50175650a1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x10b9954c5ab9 <String[6]: #Object>
           2: 0x10b9954c4c11 <String[14]: #defineProperty>
           3: 0x1c50175651e9 <String[10]: #__esModule>
           4: 0x1c5017565209 <ObjectBoilerplateDescription[3]>
           5: 0x1c5017565231 <String[5]: #World>
           6: 0x1c5017565249 <String[8]: #./action>
           7: 0x1c5017565261 <String[8]: #./cannon>
           8: 0x1c5017565279 <String[8]: #./meteor>
           9: 0x1c5017565291 <String[14]: #./meteor_infos>
          10: 0x1c50175652b1 <String[12]: #./projectile>
          11: 0x1c50175652d1 <String[8]: #./vector>
          12: 0x1c50175652e9 <FixedArray[7]>
          13: 0x1c5017565799 <SharedFunctionInfo World>
          14: 0x1c5017566059 <SharedFunctionInfo get healthPoints>
          15: 0x1c5017566189 <SharedFunctionInfo update>
          16: 0x1c5017567711 <SharedFunctionInfo getCurrentGenerationDelayInTicks>
          17: 0x1c5017567981 <SharedFunctionInfo findAndHandleCollisions>
          18: 0x1c50175681c1 <SharedFunctionInfo handleCollision>
          19: 0x1c5017568419 <SharedFunctionInfo handleMeteorSplit>
          20: 0x1c5017568739 <SharedFunctionInfo applyAction>
          21: 0x1c5017568989 <SharedFunctionInfo serializeForViewer>
          22: 0x1c5017568ff9 <SharedFunctionInfo serializeForPlayer>
          23: 0x1c5017569401 <SharedFunctionInfo serializeCommon>
          24: 0x1c5017569559 <SharedFunctionInfo handleActionRotate>
          25: 0x1c5017569771 <SharedFunctionInfo handleActionLookAt>
          26: 0x1c5017569aa1 <SharedFunctionInfo handleActionShoot>
          27: 0x1c5017569c11 <SharedFunctionInfo get score>
Handler Table (size = 0)
Source Position Table (size = 69)
0x1c5017569d61 <ByteArray[69]>
Boilerplate at 0x1c5017565209: 
0x1c5017565209: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x10b9954c2059 <Map>
 - length: 3
           0: 8
           1: 0x10b9954c6419 <String[5]: #value>
           2: 0x10b9954c1729 <true>
Array at 0x1c50175652e9 has 7 elements:
0x1c50175652e9: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 7
           0: 17
           1: 0x1c5017565331 <DescriptorArray[4]>
           2: 0x10b9954c3301 <NumberDictionary[7]>
           3: 0x10b9954c1329 <FixedArray[0]>
           4: 0x1c50175653f1 <DescriptorArray[15]>
           5: 0x10b9954c3301 <NumberDictionary[7]>
           6: 0x10b9954c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x11 (17)
Element[1]
0x1c5017565331: [DescriptorArray] in OldSpace
 - map: 0x10b9954c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x10b9954c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x24c49fd34fe1 <AccessorInfo>
  [1]: 0x10b9954c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x24c49fd34f71 <AccessorInfo>
  [2]: 0x10b9954c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x24c49fd35051 <AccessorInfo>
  [3]: 0x10b9954c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x1c50175653d9 <ClassPositions 411, 6845>
Element[2]
0x10b9954c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x10b9954c1329: [FixedArray] in ReadOnlySpace
 - map: 0x10b9954c12e1 <Map>
 - length: 0
Element[4]
0x1c50175653f1: [DescriptorArray] in OldSpace
 - map: 0x10b9954c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 15
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x10b9954c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 4, attrs: [W_C]) @ 1
  [1]: 0x1c5017565571: [String] in OldSpace: #healthPoints (const accessor descriptor, p: 8, attrs: [W_C]) @ 0x1c5017565591 <AccessorPair>(get: 3, set: 0x10b9954c1339 <null>)
  [2]: 0x24c49fd03f01: [String] in OldSpace: #update (const data descriptor, p: 5, attrs: [W_C]) @ 4
  [3]: 0x1c50175655c1: [String] in OldSpace: #getCurrentGenerationDelayInTicks (const data descriptor, p: 7, attrs: [W_C]) @ 5
  [4]: 0x1c50175655f1: [String] in OldSpace: #findAndHandleCollisions (const data descriptor, p: 3, attrs: [W_C]) @ 6
  [5]: 0x1c5017565619: [String] in OldSpace: #handleCollision (const data descriptor, p: 0, attrs: [W_C]) @ 7
  [6]: 0x1c5017565639: [String] in OldSpace: #handleMeteorSplit (const data descriptor, p: 12, attrs: [W_C]) @ 8
  [7]: 0x1c5017565661: [String] in OldSpace: #applyAction (const data descriptor, p: 14, attrs: [W_C]) @ 9
  [8]: 0x1c5017565681: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 9, attrs: [W_C]) @ 10
  [9]: 0x1c50175656a9: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 6, attrs: [W_C]) @ 11
  [10]: 0x1c50175656d1: [String] in OldSpace: #serializeCommon (const data descriptor, p: 10, attrs: [W_C]) @ 12
  [11]: 0x1c50175656f1: [String] in OldSpace: #handleActionRotate (const data descriptor, p: 11, attrs: [W_C]) @ 13
  [12]: 0x1c5017565719: [String] in OldSpace: #handleActionLookAt (const data descriptor, p: 13, attrs: [W_C]) @ 14
  [13]: 0x1c5017565741: [String] in OldSpace: #handleActionShoot (const data descriptor, p: 1, attrs: [W_C]) @ 15
  [14]: 0x1c5017565769: [String] in OldSpace: #score (const accessor descriptor, p: 2, attrs: [W_C]) @ 0x1c5017565781 <AccessorPair>(get: 16, set: 0x10b9954c1339 <null>)
Element[5]
0x10b9954c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x10b9954c1329: [FixedArray] in ReadOnlySpace
 - map: 0x10b9954c12e1 <Map>
 - length: 0
0x1c5017565799 points to: [0x1c5017565808]
=== [0x1c5017565808] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  465 S> 0x1c5017565808 @    0 : 0b 03             Ldar a0
  478 E> 0x1c501756580a @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  497 S> 0x1c501756580e @    6 : 0b 04             Ldar a1
  506 E> 0x1c5017565810 @    8 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
  521 S> 0x1c5017565814 @   12 : 0c                LdaZero 
  538 E> 0x1c5017565815 @   13 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
  551 S> 0x1c5017565819 @   17 : 7b 06             CreateEmptyArrayLiteral [6]
  564 E> 0x1c501756581b @   19 : 32 02 03 07       SetNamedProperty <this>, [3], [7]
  578 S> 0x1c501756581f @   23 : 7b 09             CreateEmptyArrayLiteral [9]
  591 E> 0x1c5017565821 @   25 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
  605 S> 0x1c5017565825 @   29 : 7b 0c             CreateEmptyArrayLiteral [12]
  621 E> 0x1c5017565827 @   31 : 32 02 05 0d       SetNamedProperty <this>, [5], [13]
  656 S> 0x1c501756582b @   35 : 2d 03 06 0f       GetNamedProperty a0, [6], [15]
         0x1c501756582f @   39 : c3                Star1 
  673 E> 0x1c5017565830 @   40 : 2d f9 07 11       GetNamedProperty r1, [7], [17]
  646 E> 0x1c5017565834 @   44 : 32 02 07 13       SetNamedProperty <this>, [7], [19]
  710 S> 0x1c5017565838 @   48 : 2d 03 06 0f       GetNamedProperty a0, [6], [15]
         0x1c501756583c @   52 : c3                Star1 
  727 E> 0x1c501756583d @   53 : 2d f9 08 15       GetNamedProperty r1, [8], [21]
  700 E> 0x1c5017565841 @   57 : 32 02 08 17       SetNamedProperty <this>, [8], [23]
  772 S> 0x1c5017565845 @   61 : 2d 03 09 19       GetNamedProperty a0, [9], [25]
  762 E> 0x1c5017565849 @   65 : 32 02 0a 1b       SetNamedProperty <this>, [10], [27]
  795 S> 0x1c501756584d @   69 : 0c                LdaZero 
  807 E> 0x1c501756584e @   70 : 32 02 0b 1d       SetNamedProperty <this>, [11], [29]
  820 S> 0x1c5017565852 @   74 : 17 04             LdaImmutableCurrentContextSlot [4]
  846 E> 0x1c5017565854 @   76 : aa 0c             ThrowReferenceErrorIfHole [12]
         0x1c5017565856 @   78 : c3                Star1 
  855 E> 0x1c5017565857 @   79 : 2d f9 0d 1f       GetNamedProperty r1, [13], [31]
         0x1c501756585b @   83 : c3                Star1 
         0x1c501756585c @   84 : 0b f9             Ldar r1
  842 E> 0x1c501756585e @   86 : 69 f9 04 01 21    Construct r1, a1-a1, [33]
  840 E> 0x1c5017565863 @   91 : 32 02 0e 23       SetNamedProperty <this>, [14], [35]
  883 S> 0x1c5017565867 @   95 : 17 03             LdaImmutableCurrentContextSlot [3]
  901 E> 0x1c5017565869 @   97 : aa 0f             ThrowReferenceErrorIfHole [15]
         0x1c501756586b @   99 : c3                Star1 
  910 E> 0x1c501756586c @  100 : 2d f9 10 25       GetNamedProperty r1, [16], [37]
         0x1c5017565870 @  104 : c3                Star1 
  922 E> 0x1c5017565871 @  105 : 2d 02 00 27       GetNamedProperty <this>, [0], [39]
         0x1c5017565875 @  109 : c2                Star2 
  930 E> 0x1c5017565876 @  110 : 2d f8 11 29       GetNamedProperty r2, [17], [41]
         0x1c501756587a @  114 : c2                Star2 
  952 E> 0x1c501756587b @  115 : 2d 02 00 2b       GetNamedProperty <this>, [0], [43]
         0x1c501756587f @  119 : c1                Star3 
  960 E> 0x1c5017565880 @  120 : 2d f7 12 2d       GetNamedProperty r3, [18], [45]
         0x1c5017565884 @  124 : c1                Star3 
         0x1c5017565885 @  125 : 7c 13 2f 29       CreateObjectLiteral [19], [47], #41
         0x1c5017565889 @  129 : c0                Star4 
 1031 E> 0x1c501756588a @  130 : 2d 02 00 30       GetNamedProperty <this>, [0], [48]
         0x1c501756588e @  134 : bf                Star5 
 1039 E> 0x1c501756588f @  135 : 2d f5 14 32       GetNamedProperty r5, [20], [50]
         0x1c5017565893 @  139 : 33 f6 15 34       DefineNamedOwnProperty r4, [21], [52]
 1092 E> 0x1c5017565897 @  143 : 2d 02 00 36       GetNamedProperty <this>, [0], [54]
         0x1c501756589b @  147 : bf                Star5 
 1100 E> 0x1c501756589c @  148 : 2d f5 16 38       GetNamedProperty r5, [22], [56]
         0x1c50175658a0 @  152 : 33 f6 17 3a       DefineNamedOwnProperty r4, [23], [58]
 1152 E> 0x1c50175658a4 @  156 : 2d 02 00 3c       GetNamedProperty <this>, [0], [60]
         0x1c50175658a8 @  160 : bf                Star5 
 1160 E> 0x1c50175658a9 @  161 : 2d f5 18 3e       GetNamedProperty r5, [24], [62]
         0x1c50175658ad @  165 : 33 f6 19 40       DefineNamedOwnProperty r4, [25], [64]
 1203 E> 0x1c50175658b1 @  169 : 2d 02 00 42       GetNamedProperty <this>, [0], [66]
         0x1c50175658b5 @  173 : bf                Star5 
 1211 E> 0x1c50175658b6 @  174 : 2d f5 1a 44       GetNamedProperty r5, [26], [68]
         0x1c50175658ba @  178 : 33 f6 1b 46       DefineNamedOwnProperty r4, [27], [70]
         0x1c50175658be @  182 : 0b f9             Ldar r1
  897 E> 0x1c50175658c0 @  184 : 69 f9 f8 03 48    Construct r1, r2-r4, [72]
  895 E> 0x1c50175658c5 @  189 : 32 02 1c 4a       SetNamedProperty <this>, [28], [74]
         0x1c50175658c9 @  193 : 0e                LdaUndefined 
 1240 S> 0x1c50175658ca @  194 : a9                Return 
Constant pool (size = 29)
0x1c50175658d1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 29
           0: 0x24c49fd0cbb9 <String[7]: #options>
           1: 0x24c49fd28a51 <String[3]: #rng>
           2: 0x1c50175659f9 <String[11]: #tickCounter>
           3: 0x1c5017565a19 <String[7]: #meteors>
           4: 0x1c5017565a31 <String[7]: #rockets>
           5: 0x1c5017565a49 <String[10]: #collisions>
           6: 0x1c5017565a69 <String[16]: #WORLD_DIMENSIONS>
           7: 0x1c5017565a89 <String[5]: #width>
           8: 0x1c5017565aa1 <String[6]: #height>
           9: 0x1c5017565ab9 <String[13]: #HEALTH_POINTS>
          10: 0x1c5017565ad9 <String[13]: #_healthPoints>
          11: 0x1c5017565af9 <String[6]: #_score>
          12: 0x1c5017565179 <String[8]: #meteor_1>
          13: 0x1c5017565b11 <String[13]: #MeteorFactory>
          14: 0x1c5017565b31 <String[14]: #_meteorBuilder>
          15: 0x1c5017565161 <String[8]: #cannon_1>
          16: 0x1c5017565b51 <String[6]: #Cannon>
          17: 0x1c5017565b69 <String[15]: #CANNON_POSITION>
          18: 0x1c5017565b89 <String[30]: #CANNON_INITIAL_ORIENTATION_DEG>
          19: 0x1c5017565bb9 <ObjectBoilerplateDescription[9]>
          20: 0x1c5017565c99 <String[19]: #CANNON_MAX_ROTATION>
          21: 0x1c5017565c11 <String[18]: #maxRotationDegrees>
          22: 0x1c5017565cc1 <String[21]: #CANNON_COOLDOWN_TICKS>
          23: 0x1c5017565c39 <String[13]: #cooldownTicks>
          24: 0x1c5017565ce9 <String[11]: #BULLET_SIZE>
          25: 0x1c5017565c59 <String[10]: #bulletSize>
          26: 0x1c5017565d09 <String[12]: #BULLET_SPEED>
          27: 0x1c5017565c79 <String[11]: #bulletSpeed>
          28: 0x1c5017565d29 <String[6]: #cannon>
Handler Table (size = 0)
Source Position Table (size = 104)
0x1c5017565d41 <ByteArray[104]>
Boilerplate at 0x1c5017565bb9: 
0x1c5017565bb9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x10b9954c2059 <Map>
 - length: 9
           0: 8
           1: 0x1c5017565c11 <String[18]: #maxRotationDegrees>
           2: 0x10b9954c1501 <Odd Oddball: uninitialized>
           3: 0x1c5017565c39 <String[13]: #cooldownTicks>
           4: 0x10b9954c1501 <Odd Oddball: uninitialized>
           5: 0x1c5017565c59 <String[10]: #bulletSize>
           6: 0x10b9954c1501 <Odd Oddball: uninitialized>
           7: 0x1c5017565c79 <String[11]: #bulletSpeed>
           8: 0x10b9954c1501 <Odd Oddball: uninitialized>
0x1c5017566059 points to: [0x1c50175660c8]
=== [0x1c50175660c8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1287 S> 0x1c50175660c8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1301 S> 0x1c50175660cc @    4 : a9                Return 
Constant pool (size = 1)
0x1c50175660d1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x1c5017565ad9 <String[13]: #_healthPoints>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1c50175660e9 <ByteArray[7]>
0x1c5017566189 points to: [0x1c50175661f8]
=== [0x1c50175661f8] DISASSEMBLY ===
Parameter count 1
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
 1318 E> 0x1c50175661f8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1c50175661fb @    3 : 1a fa             PushContext r0
         0x1c50175661fd @    5 : 0b 02             Ldar <this>
         0x1c50175661ff @    7 : 25 02             StaCurrentContextSlot [2]
 1331 S> 0x1c5017566201 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566203 @   11 : c3                Star1 
 1340 E> 0x1c5017566204 @   12 : 2d f9 01 01       GetNamedProperty r1, [1], [1]
         0x1c5017566208 @   16 : c3                Star1 
         0x1c5017566209 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c501756620b @   19 : c1                Star3 
 1359 E> 0x1c501756620c @   20 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0x1c5017566210 @   24 : c2                Star2 
 1359 E> 0x1c5017566211 @   25 : 5d f8 f7 05       CallProperty0 r2, r3, [5]
 1352 E> 0x1c5017566215 @   29 : 3d f9 00          Mod r1, [0]
         0x1c5017566218 @   32 : c3                Star1 
         0x1c5017566219 @   33 : 0c                LdaZero 
 1394 E> 0x1c501756621a @   34 : 6b f9 07          TestEqual r1, [7]
         0x1c501756621d @   37 : 99 ef             JumpIfFalse [239] (0x1c501756630c @ 276)
         0x1c501756621f @   39 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566221 @   41 : c3                Star1 
 1408 E> 0x1c5017566222 @   42 : 2d f9 03 08       GetNamedProperty r1, [3], [8]
         0x1c5017566226 @   46 : c3                Star1 
 1416 E> 0x1c5017566227 @   47 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x1c501756622b @   51 : 96 e1             JumpIfToBooleanTrue [225] (0x1c501756630c @ 276)
 1463 S> 0x1c501756622d @   53 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c501756622f @   55 : c2                Star2 
 1468 E> 0x1c5017566230 @   56 : 2d f8 05 0c       GetNamedProperty r2, [5], [12]
         0x1c5017566234 @   60 : c2                Star2 
 1476 E> 0x1c5017566235 @   61 : 2d f8 06 0e       GetNamedProperty r2, [6], [14]
         0x1c5017566239 @   65 : c3                Star1 
         0x1c501756623a @   66 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c501756623c @   68 : c0                Star4 
 1486 E> 0x1c501756623d @   69 : 2d f6 07 10       GetNamedProperty r4, [7], [16]
         0x1c5017566241 @   73 : c0                Star4 
 1501 E> 0x1c5017566242 @   74 : 2d f6 08 12       GetNamedProperty r4, [8], [18]
         0x1c5017566246 @   78 : c1                Star3 
         0x1c5017566247 @   79 : 15 fa 07 00       LdaImmutableContextSlot r0, [7], [0]
 1511 E> 0x1c501756624b @   83 : aa 09             ThrowReferenceErrorIfHole [9]
         0x1c501756624d @   85 : bf                Star5 
 1520 E> 0x1c501756624e @   86 : 2d f5 0a 14       GetNamedProperty r5, [10], [20]
         0x1c5017566252 @   90 : bf                Star5 
         0x1c5017566253 @   91 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566255 @   93 : be                Star6 
 1532 E> 0x1c5017566256 @   94 : 2d f4 0b 17       GetNamedProperty r6, [11], [23]
 1538 E> 0x1c501756625a @   98 : 45 32 16          AddSmi [50], [22]
         0x1c501756625d @  101 : be                Star6 
         0x1c501756625e @  102 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566260 @  104 : bc                Star8 
 1549 E> 0x1c5017566261 @  105 : 2d f2 0c 1a       GetNamedProperty r8, [12], [26]
         0x1c5017566265 @  109 : bc                Star8 
 1553 E> 0x1c5017566266 @  110 : 2d f2 0d 1c       GetNamedProperty r8, [13], [28]
         0x1c501756626a @  114 : bd                Star7 
 1553 E> 0x1c501756626b @  115 : 5d f3 f2 1e       CallProperty0 r7, r8, [30]
         0x1c501756626f @  119 : bd                Star7 
         0x1c5017566270 @  120 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566272 @  122 : bc                Star8 
 1569 E> 0x1c5017566273 @  123 : 2d f2 0e 20       GetNamedProperty r8, [14], [32]
 1562 E> 0x1c5017566277 @  127 : 3b f3 19          Mul r7, [25]
         0x1c501756627a @  130 : bd                Star7 
         0x1c501756627b @  131 : 0b f5             Ldar r5
 1507 E> 0x1c501756627d @  133 : 69 f5 f4 02 22    Construct r5, r6-r7, [34]
         0x1c5017566282 @  138 : bf                Star5 
         0x1c5017566283 @  139 : 15 fa 07 00       LdaImmutableContextSlot r0, [7], [0]
 1578 E> 0x1c5017566287 @  143 : aa 09             ThrowReferenceErrorIfHole [9]
         0x1c5017566289 @  145 : bd                Star7 
 1587 E> 0x1c501756628a @  146 : 2d f3 0a 14       GetNamedProperty r7, [10], [20]
         0x1c501756628e @  150 : bd                Star7 
 1594 E> 0x1c501756628f @  151 : 2d f3 0f 24       GetNamedProperty r7, [15], [36]
         0x1c5017566293 @  155 : be                Star6 
         0x1c5017566294 @  156 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566296 @  158 : bb                Star9 
 1612 E> 0x1c5017566297 @  159 : 2d f1 0c 28       GetNamedProperty r9, [12], [40]
         0x1c501756629b @  163 : bb                Star9 
 1616 E> 0x1c501756629c @  164 : 2d f1 0d 2a       GetNamedProperty r9, [13], [42]
         0x1c50175662a0 @  168 : bc                Star8 
 1616 E> 0x1c50175662a1 @  169 : 5d f2 f1 2c       CallProperty0 r8, r9, [44]
 1625 E> 0x1c50175662a5 @  173 : 47 32 27          MulSmi [50], [39]
 1630 E> 0x1c50175662a8 @  176 : 45 32 26          AddSmi [50], [38]
         0x1c50175662ab @  179 : bc                Star8 
         0x1c50175662ac @  180 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175662ae @  182 : bb                Star9 
 1641 E> 0x1c50175662af @  183 : 2d f1 03 30       GetNamedProperty r9, [3], [48]
         0x1c50175662b3 @  187 : bb                Star9 
 1649 E> 0x1c50175662b4 @  188 : 2d f1 10 32       GetNamedProperty r9, [16], [50]
         0x1c50175662b8 @  192 : bb                Star9 
         0x1c50175662b9 @  193 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175662bb @  195 : b9                Star11 
 1685 E> 0x1c50175662bc @  196 : 2d ef 0c 34       GetNamedProperty r11, [12], [52]
         0x1c50175662c0 @  200 : b9                Star11 
 1689 E> 0x1c50175662c1 @  201 : 2d ef 0d 36       GetNamedProperty r11, [13], [54]
         0x1c50175662c5 @  205 : ba                Star10 
 1689 E> 0x1c50175662c6 @  206 : 5d f0 ef 38       CallProperty0 r10, r11, [56]
 1678 E> 0x1c50175662ca @  210 : 3b f1 2f          Mul r9, [47]
         0x1c50175662cd @  213 : bb                Star9 
         0x1c50175662ce @  214 : 00 0d b4 00       LdaSmi.Wide [180]
         0x1c50175662d2 @  218 : ba                Star10 
         0x1c50175662d3 @  219 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175662d5 @  221 : b9                Star11 
 1712 E> 0x1c50175662d6 @  222 : 2d ef 03 3c       GetNamedProperty r11, [3], [60]
         0x1c50175662da @  226 : b9                Star11 
 1720 E> 0x1c50175662db @  227 : 2d ef 10 3e       GetNamedProperty r11, [16], [62]
 1749 E> 0x1c50175662df @  231 : 48 02 3b          DivSmi [2], [59]
 1705 E> 0x1c50175662e2 @  234 : 3a f0 3a          Sub r10, [58]
 1698 E> 0x1c50175662e5 @  237 : 39 f1 2e          Add r9, [46]
         0x1c50175662e8 @  240 : bb                Star9 
 1594 E> 0x1c50175662e9 @  241 : 5f f4 f3 f2 f1 40 CallProperty2 r6, r7, r8, r9, [64]
         0x1c50175662ef @  247 : be                Star6 
         0x1c50175662f0 @  248 : 15 fa 05 00       LdaImmutableContextSlot r0, [5], [0]
 1756 E> 0x1c50175662f4 @  252 : aa 11             ThrowReferenceErrorIfHole [17]
         0x1c50175662f6 @  254 : bd                Star7 
 1771 E> 0x1c50175662f7 @  255 : 2d f3 12 42       GetNamedProperty r7, [18], [66]
         0x1c50175662fb @  259 : bd                Star7 
 1782 E> 0x1c50175662fc @  260 : 2d f3 13 44       GetNamedProperty r7, [19], [68]
         0x1c5017566300 @  264 : bd                Star7 
 1501 E> 0x1c5017566301 @  265 : 5c f7 f6 04 46    CallProperty r3, r4-r7, [70]
         0x1c5017566306 @  270 : c1                Star3 
 1476 E> 0x1c5017566307 @  271 : 5e f9 f8 f7 48    CallProperty1 r1, r2, r3, [72]
 1835 S> 0x1c501756630c @  276 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c501756630e @  278 : c1                Star3 
 1840 E> 0x1c501756630f @  279 : 2d f7 03 4a       GetNamedProperty r3, [3], [74]
         0x1c5017566313 @  283 : c1                Star3 
 1848 E> 0x1c5017566314 @  284 : 2d f7 14 4c       GetNamedProperty r3, [20], [76]
         0x1c5017566318 @  288 : c1                Star3 
 1883 E> 0x1c5017566319 @  289 : 2d f7 15 4e       GetNamedProperty r3, [21], [78]
         0x1c501756631d @  293 : c2                Star2 
         0x1c501756631e @  294 : 80 16 00 02       CreateClosure [22], [0], #2
         0x1c5017566322 @  298 : c0                Star4 
 1883 E> 0x1c5017566323 @  299 : 5e f8 f7 f6 50    CallProperty1 r2, r3, r4, [80]
         0x1c5017566328 @  304 : c2                Star2 
 1924 E> 0x1c5017566329 @  305 : 2d f8 17 52       GetNamedProperty r2, [23], [82]
         0x1c501756632d @  309 : c3                Star1 
         0x1c501756632e @  310 : 80 18 01 02       CreateClosure [24], [1], #2
         0x1c5017566332 @  314 : c1                Star3 
 1925 E> 0x1c5017566333 @  315 : 5e f9 f8 f7 54    CallProperty1 r1, r2, r3, [84]
 2080 S> 0x1c5017566338 @  320 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c501756633a @  322 : c2                Star2 
 2085 E> 0x1c501756633b @  323 : 2d f8 19 56       GetNamedProperty r2, [25], [86]
         0x1c501756633f @  327 : c3                Star1 
 2085 E> 0x1c5017566340 @  328 : 5d f9 f8 58       CallProperty0 r1, r2, [88]
 2120 S> 0x1c5017566344 @  332 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566346 @  334 : c2                Star2 
 2125 E> 0x1c5017566347 @  335 : 2d f8 05 5a       GetNamedProperty r2, [5], [90]
         0x1c501756634b @  339 : c2                Star2 
 2133 E> 0x1c501756634c @  340 : 2d f8 17 5c       GetNamedProperty r2, [23], [92]
         0x1c5017566350 @  344 : c3                Star1 
         0x1c5017566351 @  345 : 80 1a 02 02       CreateClosure [26], [2], #2
         0x1c5017566355 @  349 : c1                Star3 
 2133 E> 0x1c5017566356 @  350 : 5e f9 f8 f7 5e    CallProperty1 r1, r2, r3, [94]
 2179 S> 0x1c501756635b @  355 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c501756635d @  357 : c3                Star1 
         0x1c501756635e @  358 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566360 @  360 : c1                Star3 
 2199 E> 0x1c5017566361 @  361 : 2d f7 05 60       GetNamedProperty r3, [5], [96]
         0x1c5017566365 @  365 : c1                Star3 
 2207 E> 0x1c5017566366 @  366 : 2d f7 15 62       GetNamedProperty r3, [21], [98]
         0x1c501756636a @  370 : c2                Star2 
         0x1c501756636b @  371 : 80 1b 03 02       CreateClosure [27], [3], #2
         0x1c501756636f @  375 : c0                Star4 
 2207 E> 0x1c5017566370 @  376 : 5e f8 f7 f6 64    CallProperty1 r2, r3, r4, [100]
 2192 E> 0x1c5017566375 @  381 : 32 f9 05 66       SetNamedProperty r1, [5], [102]
 2351 S> 0x1c5017566379 @  385 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c501756637b @  387 : c1                Star3 
 2356 E> 0x1c501756637c @  388 : 2d f7 05 68       GetNamedProperty r3, [5], [104]
         0x1c5017566380 @  392 : c1                Star3 
 2364 E> 0x1c5017566381 @  393 : 2d f7 15 6a       GetNamedProperty r3, [21], [106]
         0x1c5017566385 @  397 : c2                Star2 
         0x1c5017566386 @  398 : 80 1c 04 02       CreateClosure [28], [4], #2
         0x1c501756638a @  402 : c0                Star4 
 2364 E> 0x1c501756638b @  403 : 5e f8 f7 f6 6c    CallProperty1 r2, r3, r4, [108]
         0x1c5017566390 @  408 : c2                Star2 
 2406 E> 0x1c5017566391 @  409 : 2d f8 17 6e       GetNamedProperty r2, [23], [110]
         0x1c5017566395 @  413 : c3                Star1 
         0x1c5017566396 @  414 : 80 1d 05 02       CreateClosure [29], [5], #2
         0x1c501756639a @  418 : c1                Star3 
 2407 E> 0x1c501756639b @  419 : 5e f9 f8 f7 70    CallProperty1 r1, r2, r3, [112]
 2471 S> 0x1c50175663a0 @  424 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175663a2 @  426 : c3                Star1 
         0x1c50175663a3 @  427 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175663a5 @  429 : c1                Star3 
 2491 E> 0x1c50175663a6 @  430 : 2d f7 05 72       GetNamedProperty r3, [5], [114]
         0x1c50175663aa @  434 : c1                Star3 
 2499 E> 0x1c50175663ab @  435 : 2d f7 15 74       GetNamedProperty r3, [21], [116]
         0x1c50175663af @  439 : c2                Star2 
         0x1c50175663b0 @  440 : 80 1e 06 02       CreateClosure [30], [6], #2
         0x1c50175663b4 @  444 : c0                Star4 
 2499 E> 0x1c50175663b5 @  445 : 5e f8 f7 f6 76    CallProperty1 r2, r3, r4, [118]
 2484 E> 0x1c50175663ba @  450 : 32 f9 05 78       SetNamedProperty r1, [5], [120]
 2550 S> 0x1c50175663be @  454 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175663c0 @  456 : c3                Star1 
         0x1c50175663c1 @  457 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175663c3 @  459 : c1                Star3 
 2570 E> 0x1c50175663c4 @  460 : 2d f7 05 7a       GetNamedProperty r3, [5], [122]
         0x1c50175663c8 @  464 : c1                Star3 
 2578 E> 0x1c50175663c9 @  465 : 2d f7 15 7c       GetNamedProperty r3, [21], [124]
         0x1c50175663cd @  469 : c2                Star2 
         0x1c50175663ce @  470 : 80 1f 07 02       CreateClosure [31], [7], #2
         0x1c50175663d2 @  474 : c0                Star4 
 2578 E> 0x1c50175663d3 @  475 : 5e f8 f7 f6 7e    CallProperty1 r2, r3, r4, [126]
 2563 E> 0x1c50175663d8 @  480 : 32 f9 05 80       SetNamedProperty r1, [5], [128]
 2627 S> 0x1c50175663dc @  484 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175663de @  486 : c2                Star2 
 2632 E> 0x1c50175663df @  487 : 2d f8 20 82       GetNamedProperty r2, [32], [130]
         0x1c50175663e3 @  491 : c2                Star2 
 2640 E> 0x1c50175663e4 @  492 : 2d f8 17 84       GetNamedProperty r2, [23], [132]
         0x1c50175663e8 @  496 : c3                Star1 
         0x1c50175663e9 @  497 : 80 21 08 02       CreateClosure [33], [8], #2
         0x1c50175663ed @  501 : c1                Star3 
 2640 E> 0x1c50175663ee @  502 : 5e f9 f8 f7 86    CallProperty1 r1, r2, r3, [134]
 2686 S> 0x1c50175663f3 @  507 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175663f5 @  509 : c3                Star1 
         0x1c50175663f6 @  510 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175663f8 @  512 : c1                Star3 
 2706 E> 0x1c50175663f9 @  513 : 2d f7 20 88       GetNamedProperty r3, [32], [136]
         0x1c50175663fd @  517 : c1                Star3 
 2714 E> 0x1c50175663fe @  518 : 2d f7 15 8a       GetNamedProperty r3, [21], [138]
         0x1c5017566402 @  522 : c2                Star2 
         0x1c5017566403 @  523 : 80 22 09 02       CreateClosure [34], [9], #2
         0x1c5017566407 @  527 : c0                Star4 
 2714 E> 0x1c5017566408 @  528 : 5e f8 f7 f6 8c    CallProperty1 r2, r3, r4, [140]
 2699 E> 0x1c501756640d @  533 : 32 f9 20 8e       SetNamedProperty r1, [32], [142]
 2792 S> 0x1c5017566411 @  537 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566413 @  539 : c3                Star1 
         0x1c5017566414 @  540 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566416 @  542 : c1                Star3 
 2812 E> 0x1c5017566417 @  543 : 2d f7 20 90       GetNamedProperty r3, [32], [144]
         0x1c501756641b @  547 : c1                Star3 
 2820 E> 0x1c501756641c @  548 : 2d f7 15 92       GetNamedProperty r3, [21], [146]
         0x1c5017566420 @  552 : c2                Star2 
         0x1c5017566421 @  553 : 80 23 0a 02       CreateClosure [35], [10], #2
         0x1c5017566425 @  557 : c0                Star4 
 2820 E> 0x1c5017566426 @  558 : 5e f8 f7 f6 94    CallProperty1 r2, r3, r4, [148]
 2805 E> 0x1c501756642b @  563 : 32 f9 20 96       SetNamedProperty r1, [32], [150]
 2869 S> 0x1c501756642f @  567 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566431 @  569 : c3                Star1 
         0x1c5017566432 @  570 : 2d f9 01 98       GetNamedProperty r1, [1], [152]
         0x1c5017566436 @  574 : 51 9a             Inc [154]
 2885 E> 0x1c5017566438 @  576 : 32 f9 01 9b       SetNamedProperty r1, [1], [155]
 2897 S> 0x1c501756643c @  580 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c501756643e @  582 : c2                Star2 
 2902 E> 0x1c501756643f @  583 : 2d f8 24 9d       GetNamedProperty r2, [36], [157]
         0x1c5017566443 @  587 : c2                Star2 
 2909 E> 0x1c5017566444 @  588 : 2d f8 25 9f       GetNamedProperty r2, [37], [159]
         0x1c5017566448 @  592 : c3                Star1 
 2909 E> 0x1c5017566449 @  593 : 5d f9 f8 a1       CallProperty0 r1, r2, [161]
         0x1c501756644d @  597 : 0e                LdaUndefined 
 2923 S> 0x1c501756644e @  598 : a9                Return 
Constant pool (size = 38)
0x1c5017566451: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 38
           0: 0x1c5017566591 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1c50175659f9 <String[11]: #tickCounter>
           2: 0x1c50175655c1 <String[32]: #getCurrentGenerationDelayInTicks>
           3: 0x24c49fd0cbb9 <String[7]: #options>
           4: 0x1c50175665f1 <String[31]: #CHEAT_DISABLE_METEOR_GENERATION>
           5: 0x1c5017565a19 <String[7]: #meteors>
           6: 0x24c49fd09551 <String[4]: #push>
           7: 0x1c5017565b31 <String[14]: #_meteorBuilder>
           8: 0x1c5017566639 <String[5]: #build>
           9: 0x1c50175651d1 <String[8]: #vector_1>
          10: 0x1c5017566651 <String[6]: #Vector>
          11: 0x1c5017565a89 <String[5]: #width>
          12: 0x24c49fd28a51 <String[3]: #rng>
          13: 0x24c49fd1aba1 <String[6]: #random>
          14: 0x1c5017565aa1 <String[6]: #height>
          15: 0x1c5017566681 <String[12]: #fromPolarDeg>
          16: 0x1c50175666a1 <String[28]: #METEOR_GENERATION_CONE_ANGLE>
          17: 0x1c5017565191 <String[14]: #meteor_infos_1>
          18: 0x1c50175666d1 <String[10]: #MeteorType>
          19: 0x1c50175666f1 <String[5]: #Large>
          20: 0x1c5017566709 <String[34]: #CHEAT_GENERATE_PREDICTABLE_METEORS>
          21: 0x24c49fd09f61 <String[6]: #filter>
          22: 0x1c5017566759 <SharedFunctionInfo>
          23: 0x24c49fd0a021 <String[7]: #forEach>
          24: 0x1c50175668b1 <SharedFunctionInfo>
          25: 0x1c50175655f1 <String[23]: #findAndHandleCollisions>
          26: 0x1c5017566ac1 <SharedFunctionInfo>
          27: 0x1c5017566be1 <SharedFunctionInfo>
          28: 0x1c5017566d49 <SharedFunctionInfo>
          29: 0x1c5017566e89 <SharedFunctionInfo>
          30: 0x1c5017566fb9 <SharedFunctionInfo>
          31: 0x1c50175670e1 <SharedFunctionInfo>
          32: 0x1c5017565a31 <String[7]: #rockets>
          33: 0x1c5017567211 <SharedFunctionInfo>
          34: 0x1c5017567331 <SharedFunctionInfo>
          35: 0x1c5017567481 <SharedFunctionInfo>
          36: 0x1c5017565d29 <String[6]: #cannon>
          37: 0x24c49fd03f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 237)
0x1c5017567591 <ByteArray[237]>
0x1c5017566759 points to: [0x1c50175667c8]
=== [0x1c50175667c8] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1899 S> 0x1c50175667c8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c50175667cc @    4 : c4                Star0 
         0x1c50175667cd @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175667cf @    7 : c3                Star1 
 1912 E> 0x1c50175667d0 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
 1904 E> 0x1c50175667d4 @   12 : 6b fa 04          TestEqual r0, [4]
 1923 S> 0x1c50175667d7 @   15 : a9                Return 
Constant pool (size = 2)
0x1c50175667d9: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 2
           0: 0x1c50175667f9 <String[4]: #tick>
           1: 0x1c50175659f9 <String[11]: #tickCounter>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1c5017566811 <ByteArray[11]>
0x1c50175668b1 points to: [0x1c5017566920]
=== [0x1c5017566920] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1959 S> 0x1c5017566920 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566922 @    2 : c3                Star1 
 1964 E> 0x1c5017566923 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x1c5017566927 @    7 : c3                Star1 
 1972 E> 0x1c5017566928 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1c501756692c @   12 : c4                Star0 
         0x1c501756692d @   13 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1977 E> 0x1c5017566931 @   17 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1c5017566933 @   19 : c1                Star3 
 1986 E> 0x1c5017566934 @   20 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x1c5017566938 @   24 : c1                Star3 
 1993 E> 0x1c5017566939 @   25 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x1c501756693d @   29 : c2                Star2 
 2011 E> 0x1c501756693e @   30 : 2d 03 05 08       GetNamedProperty a0, [5], [8]
         0x1c5017566942 @   34 : c0                Star4 
 2028 E> 0x1c5017566943 @   35 : 2d 03 06 0a       GetNamedProperty a0, [6], [10]
         0x1c5017566947 @   39 : bf                Star5 
 2045 E> 0x1c5017566948 @   40 : 2d 03 07 0c       GetNamedProperty a0, [7], [12]
         0x1c501756694c @   44 : be                Star6 
 1993 E> 0x1c501756694d @   45 : 5c f8 f7 04 0e    CallProperty r2, r3-r6, [14]
         0x1c5017566952 @   50 : c2                Star2 
 1972 E> 0x1c5017566953 @   51 : 5e fa f9 f8 10    CallProperty1 r0, r1, r2, [16]
         0x1c5017566958 @   56 : 0e                LdaUndefined 
 2068 S> 0x1c5017566959 @   57 : a9                Return 
Constant pool (size = 8)
0x1c5017566961: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 8
           0: 0x1c5017565a19 <String[7]: #meteors>
           1: 0x24c49fd09551 <String[4]: #push>
           2: 0x1c5017565179 <String[8]: #meteor_1>
           3: 0x1c50175669b1 <String[6]: #Meteor>
           4: 0x1c50175669c9 <String[10]: #BuildDebug>
           5: 0x10b9954c5c19 <String[8]: #position>
           6: 0x1c50175669e9 <String[8]: #velocity>
           7: 0x1c5017566a01 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 29)
0x1c5017566a21 <ByteArray[29]>
0x1c5017566ac1 points to: [0x1c5017566b30]
=== [0x1c5017566b30] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2160 S> 0x1c5017566b30 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017566b34 @    4 : c4                Star0 
 2160 E> 0x1c5017566b35 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 2168 S> 0x1c5017566b39 @    9 : a9                Return 
Constant pool (size = 1)
0x1c5017566b41: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x24c49fd03f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1c5017566b59 <ByteArray[9]>
0x1c5017566be1 points to: [0x1c5017566c50]
=== [0x1c5017566c50] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2233 S> 0x1c5017566c50 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017566c54 @    4 : c4                Star0 
 2242 E> 0x1c5017566c55 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1c5017566c59 @    9 : c4                Star0 
         0x1c5017566c5a @   10 : 0c                LdaZero 
 2244 E> 0x1c5017566c5b @   11 : 6e fa 04          TestGreaterThan r0, [4]
         0x1c5017566c5e @   14 : 99 16             JumpIfFalse [22] (0x1c5017566c74 @ 36)
 2258 E> 0x1c5017566c60 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017566c64 @   20 : c4                Star0 
 2267 E> 0x1c5017566c65 @   21 : 2d fa 01 05       GetNamedProperty r0, [1], [5]
         0x1c5017566c69 @   25 : c4                Star0 
         0x1c5017566c6a @   26 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566c6c @   28 : c3                Star1 
 2276 E> 0x1c5017566c6d @   29 : 2d f9 02 07       GetNamedProperty r1, [2], [7]
 2269 E> 0x1c5017566c71 @   33 : 6d fa 09          TestLessThan r0, [9]
 2282 S> 0x1c5017566c74 @   36 : a9                Return 
Constant pool (size = 3)
0x1c5017566c79: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 3
           0: 0x10b9954c5c19 <String[8]: #position>
           1: 0x24c49fd18ae1 <String[1]: #y>
           2: 0x1c5017565aa1 <String[6]: #height>
Handler Table (size = 0)
Source Position Table (size = 19)
0x1c5017566cb9 <ByteArray[19]>
0x1c5017566d49 points to: [0x1c5017566db8]
=== [0x1c5017566db8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2390 S> 0x1c5017566db8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017566dbc @    4 : c4                Star0 
 2399 E> 0x1c5017566dbd @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1c5017566dc1 @    9 : c4                Star0 
         0x1c5017566dc2 @   10 : 0c                LdaZero 
 2401 E> 0x1c5017566dc3 @   11 : 6f fa 04          TestLessThanOrEqual r0, [4]
 2405 S> 0x1c5017566dc6 @   14 : a9                Return 
Constant pool (size = 2)
0x1c5017566dc9: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 2
           0: 0x10b9954c5c19 <String[8]: #position>
           1: 0x24c49fd18ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1c5017566e01 <ByteArray[11]>
0x1c5017566e89 points to: [0x1c5017566ef8]
=== [0x1c5017566ef8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2446 S> 0x1c5017566ef8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017566efa @    2 : c4                Star0 
         0x1c5017566efb @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
         0x1c5017566eff @    7 : c3                Star1 
 2456 E> 0x1c5017566f00 @    8 : 2d 03 01 03       GetNamedProperty a0, [1], [3]
         0x1c5017566f04 @   12 : 3a f9 02          Sub r1, [2]
         0x1c5017566f07 @   15 : c2                Star2 
 2446 E> 0x1c5017566f08 @   16 : 32 fa 00 05       SetNamedProperty r0, [0], [5]
         0x1c5017566f0c @   20 : 0b f8             Ldar r2
 2460 S> 0x1c5017566f0e @   22 : a9                Return 
Constant pool (size = 2)
0x1c5017566f11: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 2
           0: 0x1c5017565ad9 <String[13]: #_healthPoints>
           1: 0x10b9954ca111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1c5017566f31 <ByteArray[11]>
0x1c5017566fb9 points to: [0x1c5017567028]
=== [0x1c5017567028] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2525 S> 0x1c5017567028 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c501756702c @    4 : c4                Star0 
 2534 E> 0x1c501756702d @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1c5017567031 @    9 : c4                Star0 
         0x1c5017567032 @   10 : 0c                LdaZero 
 2536 E> 0x1c5017567033 @   11 : 6e fa 04          TestGreaterThan r0, [4]
 2539 S> 0x1c5017567036 @   14 : a9                Return 
Constant pool (size = 2)
0x1c5017567039: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 2
           0: 0x10b9954c5c19 <String[8]: #position>
           1: 0x24c49fd18ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1c5017567059 <ByteArray[11]>
0x1c50175670e1 points to: [0x1c5017567150]
=== [0x1c5017567150] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2605 S> 0x1c5017567150 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017567154 @    4 : 55                ToBooleanLogicalNot 
 2616 S> 0x1c5017567155 @    5 : a9                Return 
Constant pool (size = 1)
0x1c5017567159: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x24c49fd0b511 <String[11]: #isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1c5017567191 <ByteArray[7]>
0x1c5017567211 points to: [0x1c5017567280]
=== [0x1c5017567280] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2667 S> 0x1c5017567280 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017567284 @    4 : c4                Star0 
 2667 E> 0x1c5017567285 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 2675 S> 0x1c5017567289 @    9 : a9                Return 
Constant pool (size = 1)
0x1c5017567291: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x24c49fd03f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1c50175672a9 <ByteArray[9]>
0x1c5017567331 points to: [0x1c50175673a0]
=== [0x1c50175673a0] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2740 S> 0x1c50175673a0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c50175673a4 @    4 : c4                Star0 
 2749 E> 0x1c50175673a5 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1c50175673a9 @    9 : c4                Star0 
         0x1c50175673aa @   10 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175673ac @   12 : c3                Star1 
 2758 E> 0x1c50175673ad @   13 : 2d f9 02 05       GetNamedProperty r1, [2], [5]
         0x1c50175673b1 @   17 : c3                Star1 
 2773 E> 0x1c50175673b2 @   18 : 2d 03 03 08       GetNamedProperty a0, [3], [8]
 2778 E> 0x1c50175673b6 @   22 : 47 02 07          MulSmi [2], [7]
 2764 E> 0x1c50175673b9 @   25 : 39 f9 04          Add r1, [4]
 2751 E> 0x1c50175673bc @   28 : 6d fa 0a          TestLessThan r0, [10]
 2781 S> 0x1c50175673bf @   31 : a9                Return 
Constant pool (size = 4)
0x1c50175673c1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 4
           0: 0x10b9954c5c19 <String[8]: #position>
           1: 0x24c49fd18ac9 <String[1]: #x>
           2: 0x1c5017565a89 <String[5]: #width>
           3: 0x10b9954ca111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 19)
0x1c50175673f1 <ByteArray[19]>
0x1c5017567481 points to: [0x1c50175674f0]
=== [0x1c50175674f0] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2847 S> 0x1c50175674f0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c50175674f4 @    4 : 55                ToBooleanLogicalNot 
 2858 S> 0x1c50175674f5 @    5 : a9                Return 
Constant pool (size = 1)
0x1c50175674f9: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x24c49fd0b511 <String[11]: #isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1c5017567511 <ByteArray[7]>
0x1c5017567711 points to: [0x1c5017567780]
=== [0x1c5017567780] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 3005 S> 0x1c5017567780 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1c5017567784 @    4 : c1                Star3 
 3013 E> 0x1c5017567785 @    5 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x1c5017567789 @    9 : c1                Star3 
 2982 S> 0x1c501756778a @   10 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x1c501756778e @   14 : c4                Star0 
 2989 S> 0x1c501756778f @   15 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x1c5017567793 @   19 : c3                Star1 
 3085 S> 0x1c5017567794 @   20 : 2d 02 04 09       GetNamedProperty <this>, [4], [9]
         0x1c5017567798 @   24 : c1                Star3 
 3104 E> 0x1c5017567799 @   25 : 2d 02 00 0b       GetNamedProperty <this>, [0], [11]
         0x1c501756779d @   29 : c0                Star4 
 3112 E> 0x1c501756779e @   30 : 2d f6 05 0d       GetNamedProperty r4, [5], [13]
 3097 E> 0x1c50175677a2 @   34 : 3c f7 08          Div r3, [8]
         0x1c50175677a5 @   37 : c2                Star2 
 3132 S> 0x1c50175677a6 @   38 : 21 06 0f          LdaGlobal [6], [15]
         0x1c50175677a9 @   41 : c0                Star4 
 3144 E> 0x1c50175677aa @   42 : 2d f6 07 11       GetNamedProperty r4, [7], [17]
         0x1c50175677ae @   46 : c1                Star3 
         0x1c50175677af @   47 : 0b f9             Ldar r1
 3167 E> 0x1c50175677b1 @   49 : 3a fa 15          Sub r0, [21]
         0x1c50175677b4 @   52 : be                Star6 
         0x1c50175677b5 @   53 : 0d 01             LdaSmi [1]
         0x1c50175677b7 @   55 : bd                Star7 
         0x1c50175677b8 @   56 : 0b f8             Ldar r2
 3182 E> 0x1c50175677ba @   58 : 3a f3 16          Sub r7, [22]
 3177 E> 0x1c50175677bd @   61 : 3b f4 14          Mul r6, [20]
 3157 E> 0x1c50175677c0 @   64 : 39 f9 13          Add r1, [19]
         0x1c50175677c3 @   67 : bf                Star5 
 3144 E> 0x1c50175677c4 @   68 : 5e f7 f6 f5 17    CallProperty1 r3, r4, r5, [23]
 3204 S> 0x1c50175677c9 @   73 : a9                Return 
Constant pool (size = 8)
0x1c50175677d1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 8
           0: 0x24c49fd0cbb9 <String[7]: #options>
           1: 0x1c5017567821 <String[32]: #METEOR_GENERATION_DELAY_IN_TICKS>
           2: 0x24c49fd1a231 <String[5]: #start>
           3: 0x24c49fd0c4c1 <String[6]: #finish>
           4: 0x1c50175659f9 <String[11]: #tickCounter>
           5: 0x1c5017567881 <String[10]: #TICK_COUNT>
           6: 0x24c49fd1a991 <String[4]: #Math>
           7: 0x24c49fd1abb9 <String[5]: #round>
Handler Table (size = 0)
Source Position Table (size = 39)
0x1c50175678d1 <ByteArray[39]>
0x1c5017567981 points to: [0x1c50175679f0]
=== [0x1c50175679f0] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3238 E> 0x1c50175679f0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1c50175679f3 @    3 : 1a f9             PushContext r1
         0x1c50175679f5 @    5 : 0b 02             Ldar <this>
         0x1c50175679f7 @    7 : 25 02             StaCurrentContextSlot [2]
 3251 S> 0x1c50175679f9 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175679fb @   11 : c2                Star2 
         0x1c50175679fc @   12 : 7b 00             CreateEmptyArrayLiteral [0]
 3267 E> 0x1c50175679fe @   14 : 32 f8 01 01       SetNamedProperty r2, [1], [1]
 3312 S> 0x1c5017567a02 @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017567a04 @   20 : c1                Star3 
 3317 E> 0x1c5017567a05 @   21 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0x1c5017567a09 @   25 : c1                Star3 
 3325 E> 0x1c5017567a0a @   26 : 2d f7 03 05       GetNamedProperty r3, [3], [5]
         0x1c5017567a0e @   30 : c2                Star2 
         0x1c5017567a0f @   31 : 80 04 00 02       CreateClosure [4], [0], #2
         0x1c5017567a13 @   35 : c0                Star4 
 3325 E> 0x1c5017567a14 @   36 : 5e f8 f7 f6 07    CallProperty1 r2, r3, r4, [7]
         0x1c5017567a19 @   41 : c4                Star0 
 3940 S> 0x1c5017567a1a @   42 : 2d fa 05 09       GetNamedProperty r0, [5], [9]
         0x1c5017567a1e @   46 : c2                Star2 
         0x1c5017567a1f @   47 : 80 06 01 02       CreateClosure [6], [1], #2
         0x1c5017567a23 @   51 : c0                Star4 
 3940 E> 0x1c5017567a24 @   52 : 5e f8 fa f6 0b    CallProperty1 r2, r0, r4, [11]
 3998 S> 0x1c5017567a29 @   57 : 2d fa 07 0d       GetNamedProperty r0, [7], [13]
         0x1c5017567a2d @   61 : c2                Star2 
         0x1c5017567a2e @   62 : 80 08 02 02       CreateClosure [8], [2], #2
         0x1c5017567a32 @   66 : c0                Star4 
 3998 E> 0x1c5017567a33 @   67 : 5e f8 fa f6 0f    CallProperty1 r2, r0, r4, [15]
         0x1c5017567a38 @   72 : 0e                LdaUndefined 
 4059 S> 0x1c5017567a39 @   73 : a9                Return 
Constant pool (size = 9)
0x1c5017567a41: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 9
           0: 0x1c5017567a99 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1c5017565a49 <String[10]: #collisions>
           2: 0x1c5017565a31 <String[7]: #rockets>
           3: 0x24c49fd0a069 <String[7]: #flatMap>
           4: 0x1c5017567b11 <SharedFunctionInfo>
           5: 0x24c49fd0eb61 <String[4]: #sort>
           6: 0x1c5017567f19 <SharedFunctionInfo>
           7: 0x24c49fd0a021 <String[7]: #forEach>
           8: 0x1c5017568051 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 31)
0x1c5017568171 <ByteArray[31]>
0x1c5017567b11 points to: [0x1c5017567b80]
=== [0x1c5017567b80] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3333 E> 0x1c5017567b80 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1c5017567b83 @    3 : 1a fa             PushContext r0
         0x1c5017567b85 @    5 : 0b 03             Ldar a0
         0x1c5017567b87 @    7 : 25 02             StaCurrentContextSlot [2]
 3359 S> 0x1c5017567b89 @    9 : 15 fa 02 00       LdaImmutableContextSlot r0, [2], [0]
         0x1c5017567b8d @   13 : c2                Star2 
 3371 E> 0x1c5017567b8e @   14 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x1c5017567b92 @   18 : c2                Star2 
 3396 E> 0x1c5017567b93 @   19 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x1c5017567b97 @   23 : c3                Star1 
         0x1c5017567b98 @   24 : 80 03 00 02       CreateClosure [3], [0], #2
         0x1c5017567b9c @   28 : c1                Star3 
         0x1c5017567b9d @   29 : 7b 04             CreateEmptyArrayLiteral [4]
         0x1c5017567b9f @   31 : c0                Star4 
 3396 E> 0x1c5017567ba0 @   32 : 5f f9 f8 f7 f6 05 CallProperty2 r1, r2, r3, r4, [5]
 3857 S> 0x1c5017567ba6 @   38 : a9                Return 
Constant pool (size = 4)
0x1c5017567ba9: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 4
           0: 0x1c5017567bd9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1c5017565a19 <String[7]: #meteors>
           2: 0x24c49fd0a039 <String[6]: #reduce>
           3: 0x1c5017567c69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 16)
0x1c5017567ec9 <ByteArray[16]>
0x1c5017567c69 points to: [0x1c5017567cd8]
=== [0x1c5017567cd8] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 3463 S> 0x1c5017567cd8 @    0 : 15 ff 06 02       LdaImmutableContextSlot <context>, [6], [2]
         0x1c5017567cdc @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1c5017567cde @    6 : c2                Star2 
 3476 E> 0x1c5017567cdf @    7 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x1c5017567ce3 @   11 : c2                Star2 
 3487 E> 0x1c5017567ce4 @   12 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x1c5017567ce8 @   16 : c3                Star1 
         0x1c5017567ce9 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017567ceb @   19 : c1                Star3 
 3487 E> 0x1c5017567cec @   20 : 5f f9 f8 f7 04 04 CallProperty2 r1, r2, r3, a1, [4]
         0x1c5017567cf2 @   26 : c4                Star0 
 3552 S> 0x1c5017567cf3 @   27 : 9a 2b             JumpIfNull [43] (0x1c5017567d1e @ 70)
 3616 S> 0x1c5017567cf5 @   29 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
         0x1c5017567cf9 @   33 : c3                Star1 
         0x1c5017567cfa @   34 : 79 04 08 04       CreateArrayLiteral [4], [8], #4
         0x1c5017567cfe @   38 : c0                Star4 
         0x1c5017567cff @   39 : 0c                LdaZero 
         0x1c5017567d00 @   40 : c1                Star3 
 3657 E> 0x1c5017567d01 @   41 : 7e fa 29 09       CloneObject r0, #41, [9]
         0x1c5017567d05 @   45 : bf                Star5 
         0x1c5017567d06 @   46 : 0b 04             Ldar a1
 3704 E> 0x1c5017567d08 @   48 : 33 f5 05 0b       DefineNamedOwnProperty r5, [5], [11]
         0x1c5017567d0c @   52 : 17 02             LdaImmutableCurrentContextSlot [2]
 3748 E> 0x1c5017567d0e @   54 : 33 f5 06 0d       DefineNamedOwnProperty r5, [6], [13]
         0x1c5017567d12 @   58 : 0b f5             Ldar r5
         0x1c5017567d14 @   60 : 36 f6 f7 0f       StaInArrayLiteral r4, r3, [15]
 3616 E> 0x1c5017567d18 @   64 : 5e f9 03 f6 11    CallProperty1 r1, a0, r4, [17]
 3784 S> 0x1c5017567d1d @   69 : a9                Return 
 3819 S> 0x1c5017567d1e @   70 : 0b 03             Ldar a0
 3837 S> 0x1c5017567d20 @   72 : a9                Return 
Constant pool (size = 7)
0x1c5017567d29: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 7
           0: 0x1c50175651b1 <String[12]: #projectile_1>
           1: 0x1c5017567d71 <String[10]: #Projectile>
           2: 0x1c5017567d91 <String[31]: #checkCollisionDuringCurrentTick>
           3: 0x24c49fd072e9 <String[6]: #concat>
           4: 0x1c5017567dd9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1c5017567df1 <FixedArray[1]>>
           5: 0x1c5017567e09 <String[6]: #meteor>
           6: 0x1c5017567c39 <String[6]: #rocket>
Handler Table (size = 0)
Source Position Table (size = 38)
0x1c5017567e21 <ByteArray[38]>
0x1c5017567f19 points to: [0x1c5017567f88]
=== [0x1c5017567f88] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 3957 S> 0x1c5017567f88 @    0 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x1c5017567f8c @    4 : c4                Star0 
 3963 E> 0x1c5017567f8d @    5 : 2d 04 00 03       GetNamedProperty a1, [0], [3]
 3959 E> 0x1c5017567f91 @    9 : 3a fa 00          Sub r0, [0]
 3964 S> 0x1c5017567f94 @   12 : a9                Return 
Constant pool (size = 1)
0x1c5017567f99: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x1c5017567fb1 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1c5017567fc9 <ByteArray[11]>
0x1c5017568051 points to: [0x1c50175680c0]
=== [0x1c50175680c0] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4026 S> 0x1c50175680c0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c50175680c2 @    2 : c3                Star1 
 4026 E> 0x1c50175680c3 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x1c50175680c7 @    7 : c4                Star0 
 4026 E> 0x1c50175680c8 @    8 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
 4052 S> 0x1c50175680cd @   13 : a9                Return 
Constant pool (size = 1)
0x1c50175680d1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x1c5017565619 <String[15]: #handleCollision>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1c50175680e9 <ByteArray[11]>
0x1c50175681c1 points to: [0x1c5017568230]
=== [0x1c5017568230] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4116 S> 0x1c5017568230 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017568234 @    4 : c4                Star0 
 4123 E> 0x1c5017568235 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1c5017568239 @    9 : 96 0d             JumpIfToBooleanTrue [13] (0x1c5017568246 @ 22)
 4148 E> 0x1c501756823b @   11 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x1c501756823f @   15 : c4                Star0 
 4155 E> 0x1c5017568240 @   16 : 2d fa 01 06       GetNamedProperty r0, [1], [6]
         0x1c5017568244 @   20 : 97 04             JumpIfToBooleanFalse [4] (0x1c5017568248 @ 24)
 4180 S> 0x1c5017568246 @   22 : 0e                LdaUndefined 
 4187 S> 0x1c5017568247 @   23 : a9                Return 
 4201 S> 0x1c5017568248 @   24 : 2d 02 03 08       GetNamedProperty <this>, [3], [8]
         0x1c501756824c @   28 : c3                Star1 
 4212 E> 0x1c501756824d @   29 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x1c5017568251 @   33 : c4                Star0 
 4212 E> 0x1c5017568252 @   34 : 5e fa f9 03 0c    CallProperty1 r0, r1, a0, [12]
 4247 S> 0x1c5017568257 @   39 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c501756825b @   43 : c3                Star1 
 4254 E> 0x1c501756825c @   44 : 2d f9 05 0e       GetNamedProperty r1, [5], [14]
         0x1c5017568260 @   48 : c4                Star0 
 4254 E> 0x1c5017568261 @   49 : 5d fa f9 10       CallProperty0 r0, r1, [16]
 4283 S> 0x1c5017568265 @   53 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x1c5017568269 @   57 : c3                Star1 
 4290 E> 0x1c501756826a @   58 : 2d f9 05 12       GetNamedProperty r1, [5], [18]
         0x1c501756826e @   62 : c4                Star0 
 4290 E> 0x1c501756826f @   63 : 5d fa f9 14       CallProperty0 r0, r1, [20]
 4314 S> 0x1c5017568273 @   67 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x1c5017568277 @   71 : c4                Star0 
 4314 E> 0x1c5017568278 @   72 : 5e fa 02 03 18    CallProperty1 r0, <this>, a0, [24]
 4352 S> 0x1c501756827d @   77 : 2d 02 07 1a       GetNamedProperty <this>, [7], [26]
         0x1c5017568281 @   81 : c3                Star1 
 4372 E> 0x1c5017568282 @   82 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x1c5017568286 @   86 : c2                Star2 
 4380 E> 0x1c5017568287 @   87 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x1c501756828b @   91 : c2                Star2 
 4409 E> 0x1c501756828c @   92 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017568290 @   96 : c1                Star3 
 4416 E> 0x1c5017568291 @   97 : 2d f7 0a 22       GetNamedProperty r3, [10], [34]
 4397 E> 0x1c5017568295 @  101 : 3b f8 1d          Mul r2, [29]
         0x1c5017568298 @  104 : 39 f9 1c          Add r1, [28]
 4364 E> 0x1c501756829b @  107 : 32 02 07 24       SetNamedProperty <this>, [7], [36]
         0x1c501756829f @  111 : 0e                LdaUndefined 
 4427 S> 0x1c50175682a0 @  112 : a9                Return 
Constant pool (size = 11)
0x1c50175682a9: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 11
           0: 0x1c5017567e09 <String[6]: #meteor>
           1: 0x24c49fd0b511 <String[11]: #isDestroyed>
           2: 0x1c5017567c39 <String[6]: #rocket>
           3: 0x1c5017565a49 <String[10]: #collisions>
           4: 0x24c49fd09551 <String[4]: #push>
           5: 0x24c49fd0ba19 <String[7]: #destroy>
           6: 0x1c5017565639 <String[17]: #handleMeteorSplit>
           7: 0x1c5017565af9 <String[6]: #_score>
           8: 0x24c49fd0cbb9 <String[7]: #options>
           9: 0x1c5017568329 <String[16]: #SCORE_MULTIPLIER>
          10: 0x1c5017565769 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 58)
0x1c5017568349 <ByteArray[58]>
0x1c5017568419 points to: [0x1c5017568488]
=== [0x1c5017568488] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 4450 E> 0x1c5017568488 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1c501756848b @    3 : 1a fa             PushContext r0
         0x1c501756848d @    5 : 0b 02             Ldar <this>
         0x1c501756848f @    7 : 25 02             StaCurrentContextSlot [2]
 4472 S> 0x1c5017568491 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c5017568493 @   11 : c1                Star3 
 4477 E> 0x1c5017568494 @   12 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x1c5017568498 @   16 : c1                Star3 
 4492 E> 0x1c5017568499 @   17 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x1c501756849d @   21 : c2                Star2 
 4529 E> 0x1c501756849e @   22 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x1c50175684a2 @   26 : c0                Star4 
 4547 E> 0x1c50175684a3 @   27 : 2d 03 04 06       GetNamedProperty a0, [4], [6]
         0x1c50175684a7 @   31 : bf                Star5 
 4492 E> 0x1c50175684a8 @   32 : 5f f8 f7 f6 f5 08 CallProperty2 r2, r3, r4, r5, [8]
         0x1c50175684ae @   38 : c2                Star2 
 4560 E> 0x1c50175684af @   39 : 2d f8 05 0a       GetNamedProperty r2, [5], [10]
         0x1c50175684b3 @   43 : c3                Star1 
         0x1c50175684b4 @   44 : 80 06 00 02       CreateClosure [6], [0], #2
         0x1c50175684b8 @   48 : c1                Star3 
 4561 E> 0x1c50175684b9 @   49 : 5e f9 f8 f7 0c    CallProperty1 r1, r2, r3, [12]
         0x1c50175684be @   54 : 0e                LdaUndefined 
 4603 S> 0x1c50175684bf @   55 : a9                Return 
Constant pool (size = 7)
0x1c50175684c1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 7
           0: 0x1c5017568509 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1c5017565b31 <String[14]: #_meteorBuilder>
           2: 0x1c5017568569 <String[26]: #buildMeteorsAfterExplosion>
           3: 0x1c5017567e09 <String[6]: #meteor>
           4: 0x1c5017568599 <String[12]: #intersection>
           5: 0x24c49fd0a021 <String[7]: #forEach>
           6: 0x1c50175685b9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 28)
0x1c50175686e9 <ByteArray[28]>
0x1c50175685b9 points to: [0x1c5017568628]
=== [0x1c5017568628] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4589 S> 0x1c5017568628 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1c501756862a @    2 : c3                Star1 
 4581 E> 0x1c501756862b @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x1c501756862f @    7 : c3                Star1 
 4589 E> 0x1c5017568630 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1c5017568634 @   12 : c4                Star0 
 4589 E> 0x1c5017568635 @   13 : 5e fa f9 03 04    CallProperty1 r0, r1, a0, [4]
 4596 S> 0x1c501756863a @   18 : a9                Return 
Constant pool (size = 2)
0x1c5017568641: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 2
           0: 0x1c5017565a19 <String[7]: #meteors>
           1: 0x24c49fd09551 <String[4]: #push>
Handler Table (size = 0)
Source Position Table (size = 14)
0x1c5017568661 <ByteArray[14]>
0x1c5017568739 points to: [0x1c50175687a8]
=== [0x1c50175687a8] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4654 S> 0x1c50175687a8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c50175687ac @    4 : c4                Star0 
         0x1c50175687ad @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4679 E> 0x1c50175687af @    7 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1c50175687b1 @    9 : c3                Star1 
 4688 E> 0x1c50175687b2 @   10 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1c50175687b6 @   14 : c3                Star1 
 4700 E> 0x1c50175687b7 @   15 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x1c50175687bb @   19 : 6c fa 02          TestEqualStrict r0, [2]
         0x1c50175687be @   22 : 98 2a             JumpIfTrue [42] (0x1c50175687e8 @ 64)
         0x1c50175687c0 @   24 : 17 02             LdaImmutableCurrentContextSlot [2]
 4797 E> 0x1c50175687c2 @   26 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1c50175687c4 @   28 : c3                Star1 
 4806 E> 0x1c50175687c5 @   29 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1c50175687c9 @   33 : c3                Star1 
 4818 E> 0x1c50175687ca @   34 : 2d f9 04 07       GetNamedProperty r1, [4], [7]
         0x1c50175687ce @   38 : 6c fa 02          TestEqualStrict r0, [2]
         0x1c50175687d1 @   41 : 98 23             JumpIfTrue [35] (0x1c50175687f4 @ 76)
         0x1c50175687d3 @   43 : 17 02             LdaImmutableCurrentContextSlot [2]
 4915 E> 0x1c50175687d5 @   45 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1c50175687d7 @   47 : c3                Star1 
 4924 E> 0x1c50175687d8 @   48 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1c50175687dc @   52 : c3                Star1 
 4936 E> 0x1c50175687dd @   53 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x1c50175687e1 @   57 : 6c fa 02          TestEqualStrict r0, [2]
         0x1c50175687e4 @   60 : 98 1c             JumpIfTrue [28] (0x1c5017568800 @ 88)
         0x1c50175687e6 @   62 : 8a 25             Jump [37] (0x1c501756880b @ 99)
 4729 S> 0x1c50175687e8 @   64 : 2d 02 06 0b       GetNamedProperty <this>, [6], [11]
         0x1c50175687ec @   68 : c3                Star1 
 4729 E> 0x1c50175687ed @   69 : 5e f9 02 03 0d    CallProperty1 r1, <this>, a0, [13]
 4773 S> 0x1c50175687f2 @   74 : 8a 19             Jump [25] (0x1c501756880b @ 99)
 4847 S> 0x1c50175687f4 @   76 : 2d 02 07 0f       GetNamedProperty <this>, [7], [15]
         0x1c50175687f8 @   80 : c3                Star1 
 4847 E> 0x1c50175687f9 @   81 : 5e f9 02 03 11    CallProperty1 r1, <this>, a0, [17]
 4891 S> 0x1c50175687fe @   86 : 8a 0d             Jump [13] (0x1c501756880b @ 99)
 4964 S> 0x1c5017568800 @   88 : 2d 02 08 13       GetNamedProperty <this>, [8], [19]
         0x1c5017568804 @   92 : c3                Star1 
 4964 E> 0x1c5017568805 @   93 : 5d f9 02 15       CallProperty0 r1, <this>, [21]
 5001 S> 0x1c5017568809 @   97 : 8a 02             Jump [2] (0x1c501756880b @ 99)
         0x1c501756880b @   99 : 0e                LdaUndefined 
 5022 S> 0x1c501756880c @  100 : a9                Return 
Constant pool (size = 9)
0x1c5017568811: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 9
           0: 0x10b9954c4469 <String[4]: #type>
           1: 0x1c5017565149 <String[8]: #action_1>
           2: 0x1c5017568869 <String[11]: #ActionTypes>
           3: 0x1c5017568889 <String[6]: #ROTATE>
           4: 0x1c50175688a1 <String[6]: #LOOKAT>
           5: 0x1c50175688b9 <String[5]: #SHOOT>
           6: 0x1c50175656f1 <String[18]: #handleActionRotate>
           7: 0x1c5017565719 <String[18]: #handleActionLookAt>
           8: 0x1c5017565741 <String[17]: #handleActionShoot>
Handler Table (size = 0)
Source Position Table (size = 53)
0x1c50175688d1 <ByteArray[53]>
0x1c5017568989 points to: [0x1c50175689f8]
=== [0x1c50175689f8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5088 S> 0x1c50175689f8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1c50175689fc @    4 : c3                Star1 
 5088 E> 0x1c50175689fd @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x1c5017568a01 @    9 : c3                Star1 
         0x1c5017568a02 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x1c5017568a06 @   14 : c4                Star0 
 5132 E> 0x1c5017568a07 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x1c5017568a0b @   19 : c2                Star2 
 5139 E> 0x1c5017568a0c @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x1c5017568a10 @   24 : c3                Star1 
 5139 E> 0x1c5017568a11 @   25 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x1c5017568a15 @   29 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5187 E> 0x1c5017568a19 @   33 : 2d 02 03 0e       GetNamedProperty <this>, [3], [14]
         0x1c5017568a1d @   37 : c2                Star2 
 5195 E> 0x1c5017568a1e @   38 : 2d f8 04 10       GetNamedProperty r2, [4], [16]
         0x1c5017568a22 @   42 : c3                Star1 
         0x1c5017568a23 @   43 : 80 05 00 02       CreateClosure [5], [0], #2
         0x1c5017568a27 @   47 : c1                Star3 
 5195 E> 0x1c5017568a28 @   48 : 5e f9 f8 f7 12    CallProperty1 r1, r2, r3, [18]
         0x1c5017568a2d @   53 : 33 fa 03 14       DefineNamedOwnProperty r0, [3], [20]
 5257 E> 0x1c5017568a31 @   57 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x1c5017568a35 @   61 : c2                Star2 
 5265 E> 0x1c5017568a36 @   62 : 2d f8 04 18       GetNamedProperty r2, [4], [24]
         0x1c5017568a3a @   66 : c3                Star1 
         0x1c5017568a3b @   67 : 80 07 01 02       CreateClosure [7], [1], #2
         0x1c5017568a3f @   71 : c1                Star3 
 5265 E> 0x1c5017568a40 @   72 : 5e f9 f8 f7 1a    CallProperty1 r1, r2, r3, [26]
         0x1c5017568a45 @   77 : 33 fa 06 1c       DefineNamedOwnProperty r0, [6], [28]
 5330 E> 0x1c5017568a49 @   81 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x1c5017568a4d @   85 : c2                Star2 
 5341 E> 0x1c5017568a4e @   86 : 2d f8 04 20       GetNamedProperty r2, [4], [32]
         0x1c5017568a52 @   90 : c3                Star1 
         0x1c5017568a53 @   91 : 80 09 02 02       CreateClosure [9], [2], #2
         0x1c5017568a57 @   95 : c1                Star3 
 5341 E> 0x1c5017568a58 @   96 : 5e f9 f8 f7 22    CallProperty1 r1, r2, r3, [34]
         0x1c5017568a5d @  101 : 33 fa 08 24       DefineNamedOwnProperty r0, [8], [36]
         0x1c5017568a61 @  105 : 0b fa             Ldar r0
 5569 S> 0x1c5017568a63 @  107 : a9                Return 
Constant pool (size = 10)
0x1c5017568a69: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 10
           0: 0x1c50175656d1 <String[15]: #serializeCommon>
           1: 0x1c5017565d29 <String[6]: #cannon>
           2: 0x1c5017565681 <String[18]: #serializeForViewer>
           3: 0x1c5017565a19 <String[7]: #meteors>
           4: 0x24c49fd09ea9 <String[3]: #map>
           5: 0x1c5017568ae1 <SharedFunctionInfo>
           6: 0x1c5017565a31 <String[7]: #rockets>
           7: 0x1c5017568c01 <SharedFunctionInfo>
           8: 0x1c5017565a49 <String[10]: #collisions>
           9: 0x1c5017568d21 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 40)
0x1c5017568f41 <ByteArray[40]>
0x1c5017568ae1 points to: [0x1c5017568b50]
=== [0x1c5017568b50] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5208 S> 0x1c5017568b50 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017568b54 @    4 : c4                Star0 
 5208 E> 0x1c5017568b55 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5228 S> 0x1c5017568b59 @    9 : a9                Return 
Constant pool (size = 1)
0x1c5017568b61: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x1c5017565681 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1c5017568b79 <ByteArray[10]>
0x1c5017568c01 points to: [0x1c5017568c70]
=== [0x1c5017568c70] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5278 S> 0x1c5017568c70 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017568c74 @    4 : c4                Star0 
 5278 E> 0x1c5017568c75 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5298 S> 0x1c5017568c79 @    9 : a9                Return 
Constant pool (size = 1)
0x1c5017568c81: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x1c5017565681 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1c5017568c99 <ByteArray[10]>
0x1c5017568d21 points to: [0x1c5017568d90]
=== [0x1c5017568d90] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 5359 S> 0x1c5017568d90 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1c5017568d94 @    4 : c4                Star0 
 5401 E> 0x1c5017568d95 @    5 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
         0x1c5017568d99 @    9 : c2                Star2 
 5414 E> 0x1c5017568d9a @   10 : 2d f8 02 03       GetNamedProperty r2, [2], [3]
         0x1c5017568d9e @   14 : c3                Star1 
 5414 E> 0x1c5017568d9f @   15 : 5d f9 f8 05       CallProperty0 r1, r2, [5]
         0x1c5017568da3 @   19 : 33 fa 01 07       DefineNamedOwnProperty r0, [1], [7]
 5469 E> 0x1c5017568da7 @   23 : 2d 03 03 09       GetNamedProperty a0, [3], [9]
         0x1c5017568dab @   27 : c2                Star2 
 5476 E> 0x1c5017568dac @   28 : 2d f8 04 0b       GetNamedProperty r2, [4], [11]
         0x1c5017568db0 @   32 : c2                Star2 
 5485 E> 0x1c5017568db1 @   33 : 2d f8 02 0d       GetNamedProperty r2, [2], [13]
         0x1c5017568db5 @   37 : c3                Star1 
 5485 E> 0x1c5017568db6 @   38 : 5d f9 f8 0f       CallProperty0 r1, r2, [15]
         0x1c5017568dba @   42 : 33 fa 05 11       DefineNamedOwnProperty r0, [5], [17]
 5530 E> 0x1c5017568dbe @   46 : 2d 03 03 09       GetNamedProperty a0, [3], [9]
         0x1c5017568dc2 @   50 : c3                Star1 
 5537 E> 0x1c5017568dc3 @   51 : 2d f9 06 13       GetNamedProperty r1, [6], [19]
         0x1c5017568dc7 @   55 : 33 fa 06 15       DefineNamedOwnProperty r0, [6], [21]
         0x1c5017568dcb @   59 : 0b fa             Ldar r0
 5556 S> 0x1c5017568dcd @   61 : a9                Return 
Constant pool (size = 7)
0x1c5017568dd1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 7
           0: 0x1c5017568e19 <ObjectBoilerplateDescription[7]>
           1: 0x1c5017568599 <String[12]: #intersection>
           2: 0x24c49fd101a9 <String[9]: #serialize>
           3: 0x1c5017567e09 <String[6]: #meteor>
           4: 0x10b9954c5c19 <String[8]: #position>
           5: 0x1c5017568e61 <String[14]: #meteorPosition>
           6: 0x10b9954ca111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 29)
0x1c5017568ea1 <ByteArray[29]>
Boilerplate at 0x1c5017568e19: 
0x1c5017568e19: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x10b9954c2059 <Map>
 - length: 7
           0: 8
           1: 0x1c5017568599 <String[12]: #intersection>
           2: 0x10b9954c1501 <Odd Oddball: uninitialized>
           3: 0x1c5017568e61 <String[14]: #meteorPosition>
           4: 0x10b9954c1501 <Odd Oddball: uninitialized>
           5: 0x10b9954ca111 <String[4]: #size>
           6: 0x10b9954c1501 <Odd Oddball: uninitialized>
0x1c5017568ff9 points to: [0x1c5017569068]
=== [0x1c5017569068] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5640 S> 0x1c5017569068 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1c501756906c @    4 : c3                Star1 
 5640 E> 0x1c501756906d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x1c5017569071 @    9 : c3                Star1 
         0x1c5017569072 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x1c5017569076 @   14 : c4                Star0 
 5684 E> 0x1c5017569077 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x1c501756907b @   19 : c2                Star2 
 5691 E> 0x1c501756907c @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x1c5017569080 @   24 : c3                Star1 
 5691 E> 0x1c5017569081 @   25 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x1c5017569085 @   29 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5739 E> 0x1c5017569089 @   33 : 2d 02 03 0e       GetNamedProperty <this>, [3], [14]
         0x1c501756908d @   37 : c2                Star2 
 5747 E> 0x1c501756908e @   38 : 2d f8 04 10       GetNamedProperty r2, [4], [16]
         0x1c5017569092 @   42 : c3                Star1 
         0x1c5017569093 @   43 : 80 05 00 02       CreateClosure [5], [0], #2
         0x1c5017569097 @   47 : c1                Star3 
 5747 E> 0x1c5017569098 @   48 : 5e f9 f8 f7 12    CallProperty1 r1, r2, r3, [18]
         0x1c501756909d @   53 : 33 fa 03 14       DefineNamedOwnProperty r0, [3], [20]
 5809 E> 0x1c50175690a1 @   57 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x1c50175690a5 @   61 : c2                Star2 
 5817 E> 0x1c50175690a6 @   62 : 2d f8 04 18       GetNamedProperty r2, [4], [24]
         0x1c50175690aa @   66 : c3                Star1 
         0x1c50175690ab @   67 : 80 07 01 02       CreateClosure [7], [1], #2
         0x1c50175690af @   71 : c1                Star3 
 5817 E> 0x1c50175690b0 @   72 : 5e f9 f8 f7 1a    CallProperty1 r1, r2, r3, [26]
         0x1c50175690b5 @   77 : 33 fa 06 1c       DefineNamedOwnProperty r0, [6], [28]
         0x1c50175690b9 @   81 : 0b fa             Ldar r0
 5863 S> 0x1c50175690bb @   83 : a9                Return 
Constant pool (size = 8)
0x1c50175690c1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 8
           0: 0x1c50175656d1 <String[15]: #serializeCommon>
           1: 0x1c5017565d29 <String[6]: #cannon>
           2: 0x1c50175656a9 <String[18]: #serializeForPlayer>
           3: 0x1c5017565a19 <String[7]: #meteors>
           4: 0x24c49fd09ea9 <String[3]: #map>
           5: 0x1c5017569111 <SharedFunctionInfo>
           6: 0x1c5017565a31 <String[7]: #rockets>
           7: 0x1c5017569231 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 33)
0x1c5017569351 <ByteArray[33]>
0x1c5017569111 points to: [0x1c5017569180]
=== [0x1c5017569180] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5760 S> 0x1c5017569180 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017569184 @    4 : c4                Star0 
 5760 E> 0x1c5017569185 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5780 S> 0x1c5017569189 @    9 : a9                Return 
Constant pool (size = 1)
0x1c5017569191: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x1c50175656a9 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1c50175691a9 <ByteArray[10]>
0x1c5017569231 points to: [0x1c50175692a0]
=== [0x1c50175692a0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5830 S> 0x1c50175692a0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c50175692a4 @    4 : c4                Star0 
 5830 E> 0x1c50175692a5 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5850 S> 0x1c50175692a9 @    9 : a9                Return 
Constant pool (size = 1)
0x1c50175692b1: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x1c50175656a9 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1c50175692c9 <ByteArray[10]>
0x1c5017569401 points to: [0x1c5017569470]
=== [0x1c5017569470] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5902 S> 0x1c5017569470 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1c5017569474 @    4 : c4                Star0 
 5935 E> 0x1c5017569475 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x1c5017569479 @    9 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x1c501756947d @   13 : 0b fa             Ldar r0
 5953 S> 0x1c501756947f @   15 : a9                Return 
Constant pool (size = 3)
0x1c5017569481: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 3
           0: 0x1c50175694a9 <ObjectBoilerplateDescription[3]>
           1: 0x1c5017565af9 <String[6]: #_score>
           2: 0x1c5017565769 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1c50175694d1 <ByteArray[11]>
Boilerplate at 0x1c50175694a9: 
0x1c50175694a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x10b9954c2059 <Map>
 - length: 3
           0: 8
           1: 0x1c5017565769 <String[5]: #score>
           2: 0x10b9954c1501 <Odd Oddball: uninitialized>
0x1c5017569559 points to: [0x1c50175695c8]
=== [0x1c50175695c8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 6012 S> 0x1c50175695c8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c50175695cc @    4 : 1d                TestUndetectable 
         0x1c50175695cd @    5 : 98 17             JumpIfTrue [23] (0x1c50175695e4 @ 28)
 6029 E> 0x1c50175695cf @    7 : 21 01 02          LdaGlobal [1], [2]
         0x1c50175695d2 @   10 : c3                Star1 
 6036 E> 0x1c50175695d3 @   11 : 2d f9 02 04       GetNamedProperty r1, [2], [4]
         0x1c50175695d7 @   15 : c4                Star0 
 6049 E> 0x1c50175695d8 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c50175695dc @   20 : c2                Star2 
 6036 E> 0x1c50175695dd @   21 : 5e fa f9 f8 06    CallProperty1 r0, r1, r2, [6]
         0x1c50175695e2 @   26 : 97 11             JumpIfToBooleanFalse [17] (0x1c50175695f3 @ 43)
 6071 S> 0x1c50175695e4 @   28 : 21 03 08          LdaGlobal [3], [8]
         0x1c50175695e7 @   31 : c4                Star0 
         0x1c50175695e8 @   32 : 13 04             LdaConstant [4]
         0x1c50175695ea @   34 : c3                Star1 
         0x1c50175695eb @   35 : 0b fa             Ldar r0
 6077 E> 0x1c50175695ed @   37 : 69 fa f9 01 0a    Construct r0, r1-r1, [10]
 6071 E> 0x1c50175695f2 @   42 : a7                Throw 
 6144 S> 0x1c50175695f3 @   43 : 2d 02 05 0c       GetNamedProperty <this>, [5], [12]
         0x1c50175695f7 @   47 : c3                Star1 
 6151 E> 0x1c50175695f8 @   48 : 2d f9 06 0e       GetNamedProperty r1, [6], [14]
         0x1c50175695fc @   52 : c4                Star0 
 6165 E> 0x1c50175695fd @   53 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017569601 @   57 : c2                Star2 
 6151 E> 0x1c5017569602 @   58 : 5e fa f9 f8 10    CallProperty1 r0, r1, r2, [16]
         0x1c5017569607 @   63 : 0e                LdaUndefined 
 6177 S> 0x1c5017569608 @   64 : a9                Return 
Constant pool (size = 7)
0x1c5017569611: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 7
           0: 0x1c5017569659 <String[5]: #angle>
           1: 0x10b9954c5a69 <String[6]: #Number>
           2: 0x24c49fd1bc99 <String[5]: #isNaN>
           3: 0x10b9954c4de1 <String[5]: #Error>
           4: 0x1c5017569689 <String[29]: #Invalid value in action.angle>
           5: 0x1c5017565d29 <String[6]: #cannon>
           6: 0x1c50175696b9 <String[6]: #rotate>
Handler Table (size = 0)
Source Position Table (size = 32)
0x1c50175696d1 <ByteArray[32]>
0x1c5017569771 points to: [0x1c50175697e0]
=== [0x1c50175697e0] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 6231 S> 0x1c50175697e0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c50175697e4 @    4 : 1d                TestUndetectable 
         0x1c50175697e5 @    5 : 99 11             JumpIfFalse [17] (0x1c50175697f6 @ 22)
 6261 S> 0x1c50175697e7 @    7 : 21 01 02          LdaGlobal [1], [2]
         0x1c50175697ea @   10 : c4                Star0 
         0x1c50175697eb @   11 : 13 02             LdaConstant [2]
         0x1c50175697ed @   13 : c3                Star1 
         0x1c50175697ee @   14 : 0b fa             Ldar r0
 6267 E> 0x1c50175697f0 @   16 : 69 fa f9 01 04    Construct r0, r1-r1, [4]
 6261 E> 0x1c50175697f5 @   21 : a7                Throw 
 6341 S> 0x1c50175697f6 @   22 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c50175697fa @   26 : c4                Star0 
 6348 E> 0x1c50175697fb @   27 : 2d fa 03 06       GetNamedProperty r0, [3], [6]
         0x1c50175697ff @   31 : 1d                TestUndetectable 
         0x1c5017569800 @   32 : 98 1c             JumpIfTrue [28] (0x1c501756981c @ 60)
 6361 E> 0x1c5017569802 @   34 : 21 04 08          LdaGlobal [4], [8]
         0x1c5017569805 @   37 : c3                Star1 
 6368 E> 0x1c5017569806 @   38 : 2d f9 05 0a       GetNamedProperty r1, [5], [10]
         0x1c501756980a @   42 : c4                Star0 
 6381 E> 0x1c501756980b @   43 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c501756980f @   47 : c2                Star2 
 6388 E> 0x1c5017569810 @   48 : 2d f8 03 0c       GetNamedProperty r2, [3], [12]
         0x1c5017569814 @   52 : c2                Star2 
 6368 E> 0x1c5017569815 @   53 : 5e fa f9 f8 0e    CallProperty1 r0, r1, r2, [14]
         0x1c501756981a @   58 : 97 11             JumpIfToBooleanFalse [17] (0x1c501756982b @ 75)
 6406 S> 0x1c501756981c @   60 : 21 01 02          LdaGlobal [1], [2]
         0x1c501756981f @   63 : c4                Star0 
         0x1c5017569820 @   64 : 13 06             LdaConstant [6]
         0x1c5017569822 @   66 : c3                Star1 
         0x1c5017569823 @   67 : 0b fa             Ldar r0
 6412 E> 0x1c5017569825 @   69 : 69 fa f9 01 10    Construct r0, r1-r1, [16]
 6406 E> 0x1c501756982a @   74 : a7                Throw 
 6488 S> 0x1c501756982b @   75 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c501756982f @   79 : c4                Star0 
 6495 E> 0x1c5017569830 @   80 : 2d fa 07 12       GetNamedProperty r0, [7], [18]
         0x1c5017569834 @   84 : 1d                TestUndetectable 
         0x1c5017569835 @   85 : 98 1c             JumpIfTrue [28] (0x1c5017569851 @ 113)
 6508 E> 0x1c5017569837 @   87 : 21 04 08          LdaGlobal [4], [8]
         0x1c501756983a @   90 : c3                Star1 
 6515 E> 0x1c501756983b @   91 : 2d f9 05 0a       GetNamedProperty r1, [5], [10]
         0x1c501756983f @   95 : c4                Star0 
 6528 E> 0x1c5017569840 @   96 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017569844 @  100 : c2                Star2 
 6535 E> 0x1c5017569845 @  101 : 2d f8 07 14       GetNamedProperty r2, [7], [20]
         0x1c5017569849 @  105 : c2                Star2 
 6515 E> 0x1c501756984a @  106 : 5e fa f9 f8 16    CallProperty1 r0, r1, r2, [22]
         0x1c501756984f @  111 : 97 11             JumpIfToBooleanFalse [17] (0x1c5017569860 @ 128)
 6553 S> 0x1c5017569851 @  113 : 21 01 02          LdaGlobal [1], [2]
         0x1c5017569854 @  116 : c4                Star0 
         0x1c5017569855 @  117 : 13 08             LdaConstant [8]
         0x1c5017569857 @  119 : c3                Star1 
         0x1c5017569858 @  120 : 0b fa             Ldar r0
 6559 E> 0x1c501756985a @  122 : 69 fa f9 01 18    Construct r0, r1-r1, [24]
 6553 E> 0x1c501756985f @  127 : a7                Throw 
 6629 S> 0x1c5017569860 @  128 : 2d 02 09 1a       GetNamedProperty <this>, [9], [26]
         0x1c5017569864 @  132 : c3                Star1 
 6636 E> 0x1c5017569865 @  133 : 2d f9 0a 1c       GetNamedProperty r1, [10], [28]
         0x1c5017569869 @  137 : c4                Star0 
         0x1c501756986a @  138 : 17 07             LdaImmutableCurrentContextSlot [7]
 6647 E> 0x1c501756986c @  140 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x1c501756986e @  142 : c2                Star2 
 6656 E> 0x1c501756986f @  143 : 2d f8 0c 1e       GetNamedProperty r2, [12], [30]
         0x1c5017569873 @  147 : c2                Star2 
 6670 E> 0x1c5017569874 @  148 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017569878 @  152 : c1                Star3 
 6677 E> 0x1c5017569879 @  153 : 2d f7 03 20       GetNamedProperty r3, [3], [32]
         0x1c501756987d @  157 : c1                Star3 
 6687 E> 0x1c501756987e @  158 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1c5017569882 @  162 : c0                Star4 
 6694 E> 0x1c5017569883 @  163 : 2d f6 07 22       GetNamedProperty r4, [7], [34]
         0x1c5017569887 @  167 : c0                Star4 
         0x1c5017569888 @  168 : 0b f8             Ldar r2
 6643 E> 0x1c501756988a @  170 : 69 f8 f7 02 24    Construct r2, r3-r4, [36]
         0x1c501756988f @  175 : c2                Star2 
 6636 E> 0x1c5017569890 @  176 : 5e fa f9 f8 26    CallProperty1 r0, r1, r2, [38]
         0x1c5017569895 @  181 : 0e                LdaUndefined 
 6703 S> 0x1c5017569896 @  182 : a9                Return 
Constant pool (size = 13)
0x1c5017569899: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 13
           0: 0x10b9954c6201 <String[6]: #target>
           1: 0x10b9954c4de1 <String[5]: #Error>
           2: 0x1c5017569911 <String[30]: #Invalid value in action.target>
           3: 0x24c49fd18ac9 <String[1]: #x>
           4: 0x10b9954c5a69 <String[6]: #Number>
           5: 0x24c49fd1bc99 <String[5]: #isNaN>
           6: 0x1c5017569941 <String[32]: #Invalid value in action.target.x>
           7: 0x24c49fd18ae1 <String[1]: #y>
           8: 0x1c5017569971 <String[32]: #Invalid value in action.target.y>
           9: 0x1c5017565d29 <String[6]: #cannon>
          10: 0x1c50175699a1 <String[6]: #lookAt>
          11: 0x1c50175651d1 <String[8]: #vector_1>
          12: 0x1c5017566651 <String[6]: #Vector>
Handler Table (size = 0)
Source Position Table (size = 81)
0x1c50175699b9 <ByteArray[81]>
0x1c5017569aa1 points to: [0x1c5017569b10]
=== [0x1c5017569b10] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 6744 S> 0x1c5017569b10 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1c5017569b14 @    4 : c3                Star1 
 6752 E> 0x1c5017569b15 @    5 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1c5017569b19 @    9 : c4                Star0 
 6762 E> 0x1c5017569b1a @   10 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x1c5017569b1e @   14 : c1                Star3 
 6769 E> 0x1c5017569b1f @   15 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x1c5017569b23 @   19 : c2                Star2 
 6769 E> 0x1c5017569b24 @   20 : 5d f8 f7 08       CallProperty0 r2, r3, [8]
         0x1c5017569b28 @   24 : c2                Star2 
 6752 E> 0x1c5017569b29 @   25 : 5e fa f9 f8 0a    CallProperty1 r0, r1, r2, [10]
         0x1c5017569b2e @   30 : 0e                LdaUndefined 
 6790 S> 0x1c5017569b2f @   31 : a9                Return 
Constant pool (size = 4)
0x1c5017569b31: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 4
           0: 0x1c5017565a31 <String[7]: #rockets>
           1: 0x24c49fd09551 <String[4]: #push>
           2: 0x1c5017565d29 <String[6]: #cannon>
           3: 0x1c5017569b61 <String[12]: #launchRocket>
Handler Table (size = 0)
Source Position Table (size = 19)
0x1c5017569b81 <ByteArray[19]>
0x1c5017569c11 points to: [0x1c5017569c80]
=== [0x1c5017569c80] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 6830 S> 0x1c5017569c80 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 6837 S> 0x1c5017569c84 @    4 : a9                Return 
Constant pool (size = 1)
0x1c5017569c89: [FixedArray] in OldSpace
 - map: 0x10b9954c12e1 <Map>
 - length: 1
           0: 0x1c5017565af9 <String[6]: #_score>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1c5017569ca1 <ByteArray[8]>
<< OUTPUTTING DISASSEMBLY END >>
