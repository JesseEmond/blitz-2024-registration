<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1aedbada4e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1aedbada4e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1aedbada4e4c @    4 : c4                Star0 
 6816 S> 0x1aedbada4e4d @    5 : a9                Return 
Constant pool (size = 1)
0x1aedbada4e51: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1aedbada4e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1aedbada9d49 <ByteArray[8]>
0x1aedbada4e69 points to: [0x1aedbada4ed8]
=== [0x1aedbada4ed8] DISASSEMBLY ===
Parameter count 6
Register count 20
Frame size 160
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1aedbada4ed8 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x1aedbada4edb @    3 : 1a f9             PushContext r1
         0x1aedbada4edd @    5 : 10                LdaTheHole 
         0x1aedbada4ede @    6 : 25 02             StaCurrentContextSlot [2]
         0x1aedbada4ee0 @    8 : 10                LdaTheHole 
         0x1aedbada4ee1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x1aedbada4ee3 @   11 : 10                LdaTheHole 
         0x1aedbada4ee4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x1aedbada4ee6 @   14 : 10                LdaTheHole 
         0x1aedbada4ee7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x1aedbada4ee9 @   17 : 10                LdaTheHole 
         0x1aedbada4eea @   18 : 25 06             StaCurrentContextSlot [6]
         0x1aedbada4eec @   20 : 10                LdaTheHole 
         0x1aedbada4eed @   21 : 25 07             StaCurrentContextSlot [7]
   76 S> 0x1aedbada4eef @   23 : 21 01 00          LdaGlobal [1], [0]
         0x1aedbada4ef2 @   26 : c1                Star3 
   83 E> 0x1aedbada4ef3 @   27 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x1aedbada4ef7 @   31 : c2                Star2 
         0x1aedbada4ef8 @   32 : 13 03             LdaConstant [3]
         0x1aedbada4efa @   34 : bf                Star5 
   98 E> 0x1aedbada4efb @   35 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x1aedbada4eff @   39 : be                Star6 
         0x1aedbada4f00 @   40 : 19 03 f6          Mov a0, r4
   83 E> 0x1aedbada4f03 @   43 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x1aedbada4f08 @   48 : 0e                LdaUndefined 
  153 E> 0x1aedbada4f09 @   49 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  180 S> 0x1aedbada4f0d @   53 : 13 06             LdaConstant [6]
         0x1aedbada4f0f @   55 : c1                Star3 
  180 E> 0x1aedbada4f10 @   56 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  180 E> 0x1aedbada4f14 @   60 : 25 02             StaCurrentContextSlot [2]
  218 S> 0x1aedbada4f16 @   62 : 13 07             LdaConstant [7]
         0x1aedbada4f18 @   64 : c1                Star3 
  218 E> 0x1aedbada4f19 @   65 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  218 E> 0x1aedbada4f1d @   69 : 25 03             StaCurrentContextSlot [3]
  256 S> 0x1aedbada4f1f @   71 : 13 08             LdaConstant [8]
         0x1aedbada4f21 @   73 : c1                Star3 
  256 E> 0x1aedbada4f22 @   74 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  256 E> 0x1aedbada4f26 @   78 : 25 04             StaCurrentContextSlot [4]
  300 S> 0x1aedbada4f28 @   80 : 13 09             LdaConstant [9]
         0x1aedbada4f2a @   82 : c1                Star3 
  300 E> 0x1aedbada4f2b @   83 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  300 E> 0x1aedbada4f2f @   87 : 25 05             StaCurrentContextSlot [5]
  348 S> 0x1aedbada4f31 @   89 : 13 0a             LdaConstant [10]
         0x1aedbada4f33 @   91 : c1                Star3 
  348 E> 0x1aedbada4f34 @   92 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  348 E> 0x1aedbada4f38 @   96 : 25 06             StaCurrentContextSlot [6]
  390 S> 0x1aedbada4f3a @   98 : 13 0b             LdaConstant [11]
         0x1aedbada4f3c @  100 : c1                Star3 
  390 E> 0x1aedbada4f3d @  101 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  390 E> 0x1aedbada4f41 @  105 : 25 07             StaCurrentContextSlot [7]
         0x1aedbada4f43 @  107 : 10                LdaTheHole 
         0x1aedbada4f44 @  108 : bf                Star5 
         0x1aedbada4f45 @  109 : 80 0d 00 02       CreateClosure [13], [0], #2
         0x1aedbada4f49 @  113 : c2                Star2 
         0x1aedbada4f4a @  114 : 13 0c             LdaConstant [12]
         0x1aedbada4f4c @  116 : c1                Star3 
         0x1aedbada4f4d @  117 : 80 0e 01 02       CreateClosure [14], [1], #2
         0x1aedbada4f51 @  121 : be                Star6 
         0x1aedbada4f52 @  122 : 80 0f 02 02       CreateClosure [15], [2], #2
         0x1aedbada4f56 @  126 : bd                Star7 
         0x1aedbada4f57 @  127 : 80 10 03 02       CreateClosure [16], [3], #2
         0x1aedbada4f5b @  131 : bc                Star8 
         0x1aedbada4f5c @  132 : 80 11 04 02       CreateClosure [17], [4], #2
         0x1aedbada4f60 @  136 : bb                Star9 
         0x1aedbada4f61 @  137 : 80 12 05 02       CreateClosure [18], [5], #2
         0x1aedbada4f65 @  141 : ba                Star10 
         0x1aedbada4f66 @  142 : 80 13 06 02       CreateClosure [19], [6], #2
         0x1aedbada4f6a @  146 : b9                Star11 
         0x1aedbada4f6b @  147 : 80 14 07 02       CreateClosure [20], [7], #2
         0x1aedbada4f6f @  151 : b8                Star12 
         0x1aedbada4f70 @  152 : 80 15 08 02       CreateClosure [21], [8], #2
         0x1aedbada4f74 @  156 : b7                Star13 
         0x1aedbada4f75 @  157 : 80 16 09 02       CreateClosure [22], [9], #2
         0x1aedbada4f79 @  161 : b6                Star14 
         0x1aedbada4f7a @  162 : 80 17 0a 02       CreateClosure [23], [10], #2
         0x1aedbada4f7e @  166 : b5                Star15 
         0x1aedbada4f7f @  167 : 80 18 0b 02       CreateClosure [24], [11], #2
         0x1aedbada4f83 @  171 : 18 ea             Star r16
         0x1aedbada4f85 @  173 : 80 19 0c 02       CreateClosure [25], [12], #2
         0x1aedbada4f89 @  177 : 18 e9             Star r17
         0x1aedbada4f8b @  179 : 80 1a 0d 02       CreateClosure [26], [13], #2
         0x1aedbada4f8f @  183 : 18 e8             Star r18
         0x1aedbada4f91 @  185 : 80 1b 0e 02       CreateClosure [27], [14], #2
         0x1aedbada4f95 @  189 : 18 e7             Star r19
         0x1aedbada4f97 @  191 : 19 f8 f6          Mov r2, r4
         0x1aedbada4f9a @  194 : 65 28 00 f7 11    CallRuntime [DefineClass], r3-r19
         0x1aedbada4f9f @  199 : c1                Star3 
         0x1aedbada4fa0 @  200 : 19 f6 fa          Mov r4, r0
 6756 S> 0x1aedbada4fa3 @  203 : 0b fa             Ldar r0
 6770 E> 0x1aedbada4fa5 @  205 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x1aedbada4fa9 @  209 : 0e                LdaUndefined 
 6813 S> 0x1aedbada4faa @  210 : a9                Return 
Constant pool (size = 28)
0x1aedbada4fb1: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 28
           0: 0x1aedbada50a1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x17496a445ab9 <String[6]: #Object>
           2: 0x17496a444c11 <String[14]: #defineProperty>
           3: 0x1aedbada51e9 <String[10]: #__esModule>
           4: 0x1aedbada5209 <ObjectBoilerplateDescription[3]>
           5: 0x1aedbada5231 <String[5]: #World>
           6: 0x1aedbada5249 <String[8]: #./action>
           7: 0x1aedbada5261 <String[8]: #./cannon>
           8: 0x1aedbada5279 <String[8]: #./meteor>
           9: 0x1aedbada5291 <String[14]: #./meteor_infos>
          10: 0x1aedbada52b1 <String[12]: #./projectile>
          11: 0x1aedbada52d1 <String[8]: #./vector>
          12: 0x1aedbada52e9 <FixedArray[7]>
          13: 0x1aedbada5799 <SharedFunctionInfo World>
          14: 0x1aedbada5fd9 <SharedFunctionInfo get healthPoints>
          15: 0x1aedbada6109 <SharedFunctionInfo update>
          16: 0x1aedbada76a1 <SharedFunctionInfo getCurrentGenerationDelayInTicks>
          17: 0x1aedbada7911 <SharedFunctionInfo findAndHandleCollisions>
          18: 0x1aedbada8151 <SharedFunctionInfo handleCollision>
          19: 0x1aedbada83a9 <SharedFunctionInfo handleMeteorSplit>
          20: 0x1aedbada86a9 <SharedFunctionInfo applyAction>
          21: 0x1aedbada88f9 <SharedFunctionInfo serializeForViewer>
          22: 0x1aedbada8f69 <SharedFunctionInfo serializeForPlayer>
          23: 0x1aedbada9371 <SharedFunctionInfo serializeCommon>
          24: 0x1aedbada94c9 <SharedFunctionInfo handleActionRotate>
          25: 0x1aedbada96e1 <SharedFunctionInfo handleActionLookAt>
          26: 0x1aedbada9a11 <SharedFunctionInfo handleActionShoot>
          27: 0x1aedbada9b81 <SharedFunctionInfo get score>
Handler Table (size = 0)
Source Position Table (size = 69)
0x1aedbada9cd1 <ByteArray[69]>
Boilerplate at 0x1aedbada5209: 
0x1aedbada5209: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x17496a442059 <Map>
 - length: 3
           0: 8
           1: 0x17496a446419 <String[5]: #value>
           2: 0x17496a441729 <true>
Array at 0x1aedbada52e9 has 7 elements:
0x1aedbada52e9: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 7
           0: 17
           1: 0x1aedbada5331 <DescriptorArray[4]>
           2: 0x17496a443301 <NumberDictionary[7]>
           3: 0x17496a441329 <FixedArray[0]>
           4: 0x1aedbada53f1 <DescriptorArray[15]>
           5: 0x17496a443301 <NumberDictionary[7]>
           6: 0x17496a441329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x11 (17)
Element[1]
0x1aedbada5331: [DescriptorArray] in OldSpace
 - map: 0x17496a447761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x17496a4455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x1c9ec2474fe1 <AccessorInfo>
  [1]: 0x17496a4458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x1c9ec2474f71 <AccessorInfo>
  [2]: 0x17496a445cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x1c9ec2475051 <AccessorInfo>
  [3]: 0x17496a4465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x1aedbada53d9 <ClassPositions 411, 6755>
Element[2]
0x17496a443301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x17496a441329: [FixedArray] in ReadOnlySpace
 - map: 0x17496a4412e1 <Map>
 - length: 0
Element[4]
0x1aedbada53f1: [DescriptorArray] in OldSpace
 - map: 0x17496a447761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 15
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x17496a444a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 9, attrs: [W_C]) @ 1
  [1]: 0x1aedbada5571: [String] in OldSpace: #healthPoints (const accessor descriptor, p: 2, attrs: [W_C]) @ 0x1aedbada5591 <AccessorPair>(get: 3, set: 0x17496a441339 <null>)
  [2]: 0x1c9ec2443f01: [String] in OldSpace: #update (const data descriptor, p: 1, attrs: [W_C]) @ 4
  [3]: 0x1aedbada55c1: [String] in OldSpace: #getCurrentGenerationDelayInTicks (const data descriptor, p: 11, attrs: [W_C]) @ 5
  [4]: 0x1aedbada55f1: [String] in OldSpace: #findAndHandleCollisions (const data descriptor, p: 0, attrs: [W_C]) @ 6
  [5]: 0x1aedbada5619: [String] in OldSpace: #handleCollision (const data descriptor, p: 3, attrs: [W_C]) @ 7
  [6]: 0x1aedbada5639: [String] in OldSpace: #handleMeteorSplit (const data descriptor, p: 12, attrs: [W_C]) @ 8
  [7]: 0x1aedbada5661: [String] in OldSpace: #applyAction (const data descriptor, p: 8, attrs: [W_C]) @ 9
  [8]: 0x1aedbada5681: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 6, attrs: [W_C]) @ 10
  [9]: 0x1aedbada56a9: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 4, attrs: [W_C]) @ 11
  [10]: 0x1aedbada56d1: [String] in OldSpace: #serializeCommon (const data descriptor, p: 7, attrs: [W_C]) @ 12
  [11]: 0x1aedbada56f1: [String] in OldSpace: #handleActionRotate (const data descriptor, p: 10, attrs: [W_C]) @ 13
  [12]: 0x1aedbada5719: [String] in OldSpace: #handleActionLookAt (const data descriptor, p: 5, attrs: [W_C]) @ 14
  [13]: 0x1aedbada5741: [String] in OldSpace: #handleActionShoot (const data descriptor, p: 13, attrs: [W_C]) @ 15
  [14]: 0x1aedbada5769: [String] in OldSpace: #score (const accessor descriptor, p: 14, attrs: [W_C]) @ 0x1aedbada5781 <AccessorPair>(get: 16, set: 0x17496a441339 <null>)
Element[5]
0x17496a443301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x17496a441329: [FixedArray] in ReadOnlySpace
 - map: 0x17496a4412e1 <Map>
 - length: 0
0x1aedbada5799 points to: [0x1aedbada5808]
=== [0x1aedbada5808] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  465 S> 0x1aedbada5808 @    0 : 0b 03             Ldar a0
  478 E> 0x1aedbada580a @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  497 S> 0x1aedbada580e @    6 : 0b 04             Ldar a1
  506 E> 0x1aedbada5810 @    8 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
  521 S> 0x1aedbada5814 @   12 : 0c                LdaZero 
  538 E> 0x1aedbada5815 @   13 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
  551 S> 0x1aedbada5819 @   17 : 7b 06             CreateEmptyArrayLiteral [6]
  564 E> 0x1aedbada581b @   19 : 32 02 03 07       SetNamedProperty <this>, [3], [7]
  578 S> 0x1aedbada581f @   23 : 7b 09             CreateEmptyArrayLiteral [9]
  591 E> 0x1aedbada5821 @   25 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
  605 S> 0x1aedbada5825 @   29 : 7b 0c             CreateEmptyArrayLiteral [12]
  621 E> 0x1aedbada5827 @   31 : 32 02 05 0d       SetNamedProperty <this>, [5], [13]
  656 S> 0x1aedbada582b @   35 : 2d 03 06 0f       GetNamedProperty a0, [6], [15]
         0x1aedbada582f @   39 : c3                Star1 
  673 E> 0x1aedbada5830 @   40 : 2d f9 07 11       GetNamedProperty r1, [7], [17]
  646 E> 0x1aedbada5834 @   44 : 32 02 07 13       SetNamedProperty <this>, [7], [19]
  710 S> 0x1aedbada5838 @   48 : 2d 03 06 0f       GetNamedProperty a0, [6], [15]
         0x1aedbada583c @   52 : c3                Star1 
  727 E> 0x1aedbada583d @   53 : 2d f9 08 15       GetNamedProperty r1, [8], [21]
  700 E> 0x1aedbada5841 @   57 : 32 02 08 17       SetNamedProperty <this>, [8], [23]
  772 S> 0x1aedbada5845 @   61 : 2d 03 09 19       GetNamedProperty a0, [9], [25]
  762 E> 0x1aedbada5849 @   65 : 32 02 0a 1b       SetNamedProperty <this>, [10], [27]
  795 S> 0x1aedbada584d @   69 : 0c                LdaZero 
  807 E> 0x1aedbada584e @   70 : 32 02 0b 1d       SetNamedProperty <this>, [11], [29]
  820 S> 0x1aedbada5852 @   74 : 17 03             LdaImmutableCurrentContextSlot [3]
  838 E> 0x1aedbada5854 @   76 : aa 0c             ThrowReferenceErrorIfHole [12]
         0x1aedbada5856 @   78 : c3                Star1 
  847 E> 0x1aedbada5857 @   79 : 2d f9 0d 1f       GetNamedProperty r1, [13], [31]
         0x1aedbada585b @   83 : c3                Star1 
  859 E> 0x1aedbada585c @   84 : 2d 02 00 21       GetNamedProperty <this>, [0], [33]
         0x1aedbada5860 @   88 : c2                Star2 
  867 E> 0x1aedbada5861 @   89 : 2d f8 0e 23       GetNamedProperty r2, [14], [35]
         0x1aedbada5865 @   93 : c2                Star2 
  889 E> 0x1aedbada5866 @   94 : 2d 02 00 25       GetNamedProperty <this>, [0], [37]
         0x1aedbada586a @   98 : c1                Star3 
  897 E> 0x1aedbada586b @   99 : 2d f7 0f 27       GetNamedProperty r3, [15], [39]
         0x1aedbada586f @  103 : c1                Star3 
         0x1aedbada5870 @  104 : 7c 10 29 29       CreateObjectLiteral [16], [41], #41
         0x1aedbada5874 @  108 : c0                Star4 
  968 E> 0x1aedbada5875 @  109 : 2d 02 00 2a       GetNamedProperty <this>, [0], [42]
         0x1aedbada5879 @  113 : bf                Star5 
  976 E> 0x1aedbada587a @  114 : 2d f5 11 2c       GetNamedProperty r5, [17], [44]
         0x1aedbada587e @  118 : 33 f6 12 2e       DefineNamedOwnProperty r4, [18], [46]
 1029 E> 0x1aedbada5882 @  122 : 2d 02 00 30       GetNamedProperty <this>, [0], [48]
         0x1aedbada5886 @  126 : bf                Star5 
 1037 E> 0x1aedbada5887 @  127 : 2d f5 13 32       GetNamedProperty r5, [19], [50]
         0x1aedbada588b @  131 : 33 f6 14 34       DefineNamedOwnProperty r4, [20], [52]
 1089 E> 0x1aedbada588f @  135 : 2d 02 00 36       GetNamedProperty <this>, [0], [54]
         0x1aedbada5893 @  139 : bf                Star5 
 1097 E> 0x1aedbada5894 @  140 : 2d f5 15 38       GetNamedProperty r5, [21], [56]
         0x1aedbada5898 @  144 : 33 f6 16 3a       DefineNamedOwnProperty r4, [22], [58]
 1140 E> 0x1aedbada589c @  148 : 2d 02 00 3c       GetNamedProperty <this>, [0], [60]
         0x1aedbada58a0 @  152 : bf                Star5 
 1148 E> 0x1aedbada58a1 @  153 : 2d f5 17 3e       GetNamedProperty r5, [23], [62]
         0x1aedbada58a5 @  157 : 33 f6 18 40       DefineNamedOwnProperty r4, [24], [64]
         0x1aedbada58a9 @  161 : 0b f9             Ldar r1
  834 E> 0x1aedbada58ab @  163 : 69 f9 f8 03 42    Construct r1, r2-r4, [66]
  832 E> 0x1aedbada58b0 @  168 : 32 02 19 44       SetNamedProperty <this>, [25], [68]
         0x1aedbada58b4 @  172 : 0e                LdaUndefined 
 1177 S> 0x1aedbada58b5 @  173 : a9                Return 
Constant pool (size = 26)
0x1aedbada58b9: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 26
           0: 0x1c9ec244cbb9 <String[7]: #options>
           1: 0x1c9ec2468a51 <String[3]: #rng>
           2: 0x1aedbada59c9 <String[11]: #tickCounter>
           3: 0x1aedbada59e9 <String[7]: #meteors>
           4: 0x1aedbada5a01 <String[7]: #rockets>
           5: 0x1aedbada5a19 <String[10]: #collisions>
           6: 0x1aedbada5a39 <String[16]: #WORLD_DIMENSIONS>
           7: 0x1aedbada5a59 <String[5]: #width>
           8: 0x1aedbada5a71 <String[6]: #height>
           9: 0x1aedbada5a89 <String[13]: #HEALTH_POINTS>
          10: 0x1aedbada5aa9 <String[13]: #_healthPoints>
          11: 0x1aedbada5ac9 <String[6]: #_score>
          12: 0x1aedbada5161 <String[8]: #cannon_1>
          13: 0x1aedbada5ae1 <String[6]: #Cannon>
          14: 0x1aedbada5af9 <String[15]: #CANNON_POSITION>
          15: 0x1aedbada5b19 <String[30]: #CANNON_INITIAL_ORIENTATION_DEG>
          16: 0x1aedbada5b49 <ObjectBoilerplateDescription[9]>
          17: 0x1aedbada5c29 <String[19]: #CANNON_MAX_ROTATION>
          18: 0x1aedbada5ba1 <String[18]: #maxRotationDegrees>
          19: 0x1aedbada5c51 <String[21]: #CANNON_COOLDOWN_TICKS>
          20: 0x1aedbada5bc9 <String[13]: #cooldownTicks>
          21: 0x1aedbada5c79 <String[11]: #BULLET_SIZE>
          22: 0x1aedbada5be9 <String[10]: #bulletSize>
          23: 0x1aedbada5c99 <String[12]: #BULLET_SPEED>
          24: 0x1aedbada5c09 <String[11]: #bulletSpeed>
          25: 0x1aedbada5cb9 <String[6]: #cannon>
Handler Table (size = 0)
Source Position Table (size = 93)
0x1aedbada5cd1 <ByteArray[93]>
Boilerplate at 0x1aedbada5b49: 
0x1aedbada5b49: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x17496a442059 <Map>
 - length: 9
           0: 8
           1: 0x1aedbada5ba1 <String[18]: #maxRotationDegrees>
           2: 0x17496a441501 <Odd Oddball: uninitialized>
           3: 0x1aedbada5bc9 <String[13]: #cooldownTicks>
           4: 0x17496a441501 <Odd Oddball: uninitialized>
           5: 0x1aedbada5be9 <String[10]: #bulletSize>
           6: 0x17496a441501 <Odd Oddball: uninitialized>
           7: 0x1aedbada5c09 <String[11]: #bulletSpeed>
           8: 0x17496a441501 <Odd Oddball: uninitialized>
0x1aedbada5fd9 points to: [0x1aedbada6048]
=== [0x1aedbada6048] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1224 S> 0x1aedbada6048 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1238 S> 0x1aedbada604c @    4 : a9                Return 
Constant pool (size = 1)
0x1aedbada6051: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1aedbada5aa9 <String[13]: #_healthPoints>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1aedbada6069 <ByteArray[7]>
0x1aedbada6109 points to: [0x1aedbada6178]
=== [0x1aedbada6178] DISASSEMBLY ===
Parameter count 1
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
 1255 E> 0x1aedbada6178 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1aedbada617b @    3 : 1a fa             PushContext r0
         0x1aedbada617d @    5 : 0b 02             Ldar <this>
         0x1aedbada617f @    7 : 25 02             StaCurrentContextSlot [2]
 1268 S> 0x1aedbada6181 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6183 @   11 : c3                Star1 
 1277 E> 0x1aedbada6184 @   12 : 2d f9 01 01       GetNamedProperty r1, [1], [1]
         0x1aedbada6188 @   16 : c3                Star1 
         0x1aedbada6189 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada618b @   19 : c1                Star3 
 1296 E> 0x1aedbada618c @   20 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0x1aedbada6190 @   24 : c2                Star2 
 1296 E> 0x1aedbada6191 @   25 : 5d f8 f7 05       CallProperty0 r2, r3, [5]
 1289 E> 0x1aedbada6195 @   29 : 3d f9 00          Mod r1, [0]
         0x1aedbada6198 @   32 : c3                Star1 
         0x1aedbada6199 @   33 : 0c                LdaZero 
 1331 E> 0x1aedbada619a @   34 : 6b f9 07          TestEqual r1, [7]
         0x1aedbada619d @   37 : 99 f3             JumpIfFalse [243] (0x1aedbada6290 @ 280)
         0x1aedbada619f @   39 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada61a1 @   41 : c3                Star1 
 1345 E> 0x1aedbada61a2 @   42 : 2d f9 03 08       GetNamedProperty r1, [3], [8]
         0x1aedbada61a6 @   46 : c3                Star1 
 1353 E> 0x1aedbada61a7 @   47 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x1aedbada61ab @   51 : 96 e5             JumpIfToBooleanTrue [229] (0x1aedbada6290 @ 280)
 1400 S> 0x1aedbada61ad @   53 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada61af @   55 : c2                Star2 
 1405 E> 0x1aedbada61b0 @   56 : 2d f8 05 0c       GetNamedProperty r2, [5], [12]
         0x1aedbada61b4 @   60 : c2                Star2 
 1413 E> 0x1aedbada61b5 @   61 : 2d f8 06 0e       GetNamedProperty r2, [6], [14]
         0x1aedbada61b9 @   65 : c3                Star1 
         0x1aedbada61ba @   66 : 15 fa 04 00       LdaImmutableContextSlot r0, [4], [0]
 1418 E> 0x1aedbada61be @   70 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1aedbada61c0 @   72 : c0                Star4 
 1427 E> 0x1aedbada61c1 @   73 : 2d f6 08 10       GetNamedProperty r4, [8], [16]
         0x1aedbada61c5 @   77 : c0                Star4 
 1434 E> 0x1aedbada61c6 @   78 : 2d f6 09 12       GetNamedProperty r4, [9], [18]
         0x1aedbada61ca @   82 : c1                Star3 
         0x1aedbada61cb @   83 : 15 fa 07 00       LdaImmutableContextSlot r0, [7], [0]
 1444 E> 0x1aedbada61cf @   87 : aa 0a             ThrowReferenceErrorIfHole [10]
         0x1aedbada61d1 @   89 : bf                Star5 
 1453 E> 0x1aedbada61d2 @   90 : 2d f5 0b 14       GetNamedProperty r5, [11], [20]
         0x1aedbada61d6 @   94 : bf                Star5 
         0x1aedbada61d7 @   95 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada61d9 @   97 : be                Star6 
 1465 E> 0x1aedbada61da @   98 : 2d f4 0c 17       GetNamedProperty r6, [12], [23]
 1471 E> 0x1aedbada61de @  102 : 45 32 16          AddSmi [50], [22]
         0x1aedbada61e1 @  105 : be                Star6 
         0x1aedbada61e2 @  106 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada61e4 @  108 : bc                Star8 
 1482 E> 0x1aedbada61e5 @  109 : 2d f2 0d 1a       GetNamedProperty r8, [13], [26]
         0x1aedbada61e9 @  113 : bc                Star8 
 1486 E> 0x1aedbada61ea @  114 : 2d f2 0e 1c       GetNamedProperty r8, [14], [28]
         0x1aedbada61ee @  118 : bd                Star7 
 1486 E> 0x1aedbada61ef @  119 : 5d f3 f2 1e       CallProperty0 r7, r8, [30]
         0x1aedbada61f3 @  123 : bd                Star7 
         0x1aedbada61f4 @  124 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada61f6 @  126 : bc                Star8 
 1502 E> 0x1aedbada61f7 @  127 : 2d f2 0f 20       GetNamedProperty r8, [15], [32]
 1495 E> 0x1aedbada61fb @  131 : 3b f3 19          Mul r7, [25]
         0x1aedbada61fe @  134 : bd                Star7 
         0x1aedbada61ff @  135 : 0b f5             Ldar r5
 1440 E> 0x1aedbada6201 @  137 : 69 f5 f4 02 22    Construct r5, r6-r7, [34]
         0x1aedbada6206 @  142 : bf                Star5 
         0x1aedbada6207 @  143 : 15 fa 07 00       LdaImmutableContextSlot r0, [7], [0]
 1511 E> 0x1aedbada620b @  147 : aa 0a             ThrowReferenceErrorIfHole [10]
         0x1aedbada620d @  149 : bd                Star7 
 1520 E> 0x1aedbada620e @  150 : 2d f3 0b 14       GetNamedProperty r7, [11], [20]
         0x1aedbada6212 @  154 : bd                Star7 
 1527 E> 0x1aedbada6213 @  155 : 2d f3 10 24       GetNamedProperty r7, [16], [36]
         0x1aedbada6217 @  159 : be                Star6 
         0x1aedbada6218 @  160 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada621a @  162 : bb                Star9 
 1545 E> 0x1aedbada621b @  163 : 2d f1 0d 28       GetNamedProperty r9, [13], [40]
         0x1aedbada621f @  167 : bb                Star9 
 1549 E> 0x1aedbada6220 @  168 : 2d f1 0e 2a       GetNamedProperty r9, [14], [42]
         0x1aedbada6224 @  172 : bc                Star8 
 1549 E> 0x1aedbada6225 @  173 : 5d f2 f1 2c       CallProperty0 r8, r9, [44]
 1558 E> 0x1aedbada6229 @  177 : 47 32 27          MulSmi [50], [39]
 1563 E> 0x1aedbada622c @  180 : 45 32 26          AddSmi [50], [38]
         0x1aedbada622f @  183 : bc                Star8 
         0x1aedbada6230 @  184 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6232 @  186 : bb                Star9 
 1574 E> 0x1aedbada6233 @  187 : 2d f1 03 30       GetNamedProperty r9, [3], [48]
         0x1aedbada6237 @  191 : bb                Star9 
 1582 E> 0x1aedbada6238 @  192 : 2d f1 11 32       GetNamedProperty r9, [17], [50]
         0x1aedbada623c @  196 : bb                Star9 
         0x1aedbada623d @  197 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada623f @  199 : b9                Star11 
 1618 E> 0x1aedbada6240 @  200 : 2d ef 0d 34       GetNamedProperty r11, [13], [52]
         0x1aedbada6244 @  204 : b9                Star11 
 1622 E> 0x1aedbada6245 @  205 : 2d ef 0e 36       GetNamedProperty r11, [14], [54]
         0x1aedbada6249 @  209 : ba                Star10 
 1622 E> 0x1aedbada624a @  210 : 5d f0 ef 38       CallProperty0 r10, r11, [56]
 1611 E> 0x1aedbada624e @  214 : 3b f1 2f          Mul r9, [47]
         0x1aedbada6251 @  217 : bb                Star9 
         0x1aedbada6252 @  218 : 00 0d b4 00       LdaSmi.Wide [180]
         0x1aedbada6256 @  222 : ba                Star10 
         0x1aedbada6257 @  223 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6259 @  225 : b9                Star11 
 1645 E> 0x1aedbada625a @  226 : 2d ef 03 3c       GetNamedProperty r11, [3], [60]
         0x1aedbada625e @  230 : b9                Star11 
 1653 E> 0x1aedbada625f @  231 : 2d ef 11 3e       GetNamedProperty r11, [17], [62]
 1682 E> 0x1aedbada6263 @  235 : 48 02 3b          DivSmi [2], [59]
 1638 E> 0x1aedbada6266 @  238 : 3a f0 3a          Sub r10, [58]
 1631 E> 0x1aedbada6269 @  241 : 39 f1 2e          Add r9, [46]
         0x1aedbada626c @  244 : bb                Star9 
 1527 E> 0x1aedbada626d @  245 : 5f f4 f3 f2 f1 40 CallProperty2 r6, r7, r8, r9, [64]
         0x1aedbada6273 @  251 : be                Star6 
         0x1aedbada6274 @  252 : 15 fa 05 00       LdaImmutableContextSlot r0, [5], [0]
 1689 E> 0x1aedbada6278 @  256 : aa 12             ThrowReferenceErrorIfHole [18]
         0x1aedbada627a @  258 : bd                Star7 
 1704 E> 0x1aedbada627b @  259 : 2d f3 13 42       GetNamedProperty r7, [19], [66]
         0x1aedbada627f @  263 : bd                Star7 
 1715 E> 0x1aedbada6280 @  264 : 2d f3 14 44       GetNamedProperty r7, [20], [68]
         0x1aedbada6284 @  268 : bd                Star7 
 1434 E> 0x1aedbada6285 @  269 : 5c f7 f6 04 46    CallProperty r3, r4-r7, [70]
         0x1aedbada628a @  274 : c1                Star3 
 1413 E> 0x1aedbada628b @  275 : 5e f9 f8 f7 48    CallProperty1 r1, r2, r3, [72]
 1768 S> 0x1aedbada6290 @  280 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6292 @  282 : c1                Star3 
 1773 E> 0x1aedbada6293 @  283 : 2d f7 03 4a       GetNamedProperty r3, [3], [74]
         0x1aedbada6297 @  287 : c1                Star3 
 1781 E> 0x1aedbada6298 @  288 : 2d f7 15 4c       GetNamedProperty r3, [21], [76]
         0x1aedbada629c @  292 : c1                Star3 
 1816 E> 0x1aedbada629d @  293 : 2d f7 16 4e       GetNamedProperty r3, [22], [78]
         0x1aedbada62a1 @  297 : c2                Star2 
         0x1aedbada62a2 @  298 : 80 17 00 02       CreateClosure [23], [0], #2
         0x1aedbada62a6 @  302 : c0                Star4 
 1816 E> 0x1aedbada62a7 @  303 : 5e f8 f7 f6 50    CallProperty1 r2, r3, r4, [80]
         0x1aedbada62ac @  308 : c2                Star2 
 1857 E> 0x1aedbada62ad @  309 : 2d f8 18 52       GetNamedProperty r2, [24], [82]
         0x1aedbada62b1 @  313 : c3                Star1 
         0x1aedbada62b2 @  314 : 80 19 01 02       CreateClosure [25], [1], #2
         0x1aedbada62b6 @  318 : c1                Star3 
 1858 E> 0x1aedbada62b7 @  319 : 5e f9 f8 f7 54    CallProperty1 r1, r2, r3, [84]
 2013 S> 0x1aedbada62bc @  324 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada62be @  326 : c2                Star2 
 2018 E> 0x1aedbada62bf @  327 : 2d f8 1a 56       GetNamedProperty r2, [26], [86]
         0x1aedbada62c3 @  331 : c3                Star1 
 2018 E> 0x1aedbada62c4 @  332 : 5d f9 f8 58       CallProperty0 r1, r2, [88]
 2053 S> 0x1aedbada62c8 @  336 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada62ca @  338 : c2                Star2 
 2058 E> 0x1aedbada62cb @  339 : 2d f8 05 5a       GetNamedProperty r2, [5], [90]
         0x1aedbada62cf @  343 : c2                Star2 
 2066 E> 0x1aedbada62d0 @  344 : 2d f8 18 5c       GetNamedProperty r2, [24], [92]
         0x1aedbada62d4 @  348 : c3                Star1 
         0x1aedbada62d5 @  349 : 80 1b 02 02       CreateClosure [27], [2], #2
         0x1aedbada62d9 @  353 : c1                Star3 
 2066 E> 0x1aedbada62da @  354 : 5e f9 f8 f7 5e    CallProperty1 r1, r2, r3, [94]
 2112 S> 0x1aedbada62df @  359 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada62e1 @  361 : c3                Star1 
         0x1aedbada62e2 @  362 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada62e4 @  364 : c1                Star3 
 2132 E> 0x1aedbada62e5 @  365 : 2d f7 05 60       GetNamedProperty r3, [5], [96]
         0x1aedbada62e9 @  369 : c1                Star3 
 2140 E> 0x1aedbada62ea @  370 : 2d f7 16 62       GetNamedProperty r3, [22], [98]
         0x1aedbada62ee @  374 : c2                Star2 
         0x1aedbada62ef @  375 : 80 1c 03 02       CreateClosure [28], [3], #2
         0x1aedbada62f3 @  379 : c0                Star4 
 2140 E> 0x1aedbada62f4 @  380 : 5e f8 f7 f6 64    CallProperty1 r2, r3, r4, [100]
 2125 E> 0x1aedbada62f9 @  385 : 32 f9 05 66       SetNamedProperty r1, [5], [102]
 2284 S> 0x1aedbada62fd @  389 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada62ff @  391 : c1                Star3 
 2289 E> 0x1aedbada6300 @  392 : 2d f7 05 68       GetNamedProperty r3, [5], [104]
         0x1aedbada6304 @  396 : c1                Star3 
 2297 E> 0x1aedbada6305 @  397 : 2d f7 16 6a       GetNamedProperty r3, [22], [106]
         0x1aedbada6309 @  401 : c2                Star2 
         0x1aedbada630a @  402 : 80 1d 04 02       CreateClosure [29], [4], #2
         0x1aedbada630e @  406 : c0                Star4 
 2297 E> 0x1aedbada630f @  407 : 5e f8 f7 f6 6c    CallProperty1 r2, r3, r4, [108]
         0x1aedbada6314 @  412 : c2                Star2 
 2339 E> 0x1aedbada6315 @  413 : 2d f8 18 6e       GetNamedProperty r2, [24], [110]
         0x1aedbada6319 @  417 : c3                Star1 
         0x1aedbada631a @  418 : 80 1e 05 02       CreateClosure [30], [5], #2
         0x1aedbada631e @  422 : c1                Star3 
 2340 E> 0x1aedbada631f @  423 : 5e f9 f8 f7 70    CallProperty1 r1, r2, r3, [112]
 2404 S> 0x1aedbada6324 @  428 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6326 @  430 : c3                Star1 
         0x1aedbada6327 @  431 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6329 @  433 : c1                Star3 
 2424 E> 0x1aedbada632a @  434 : 2d f7 05 72       GetNamedProperty r3, [5], [114]
         0x1aedbada632e @  438 : c1                Star3 
 2432 E> 0x1aedbada632f @  439 : 2d f7 16 74       GetNamedProperty r3, [22], [116]
         0x1aedbada6333 @  443 : c2                Star2 
         0x1aedbada6334 @  444 : 80 1f 06 02       CreateClosure [31], [6], #2
         0x1aedbada6338 @  448 : c0                Star4 
 2432 E> 0x1aedbada6339 @  449 : 5e f8 f7 f6 76    CallProperty1 r2, r3, r4, [118]
 2417 E> 0x1aedbada633e @  454 : 32 f9 05 78       SetNamedProperty r1, [5], [120]
 2483 S> 0x1aedbada6342 @  458 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6344 @  460 : c3                Star1 
         0x1aedbada6345 @  461 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6347 @  463 : c1                Star3 
 2503 E> 0x1aedbada6348 @  464 : 2d f7 05 7a       GetNamedProperty r3, [5], [122]
         0x1aedbada634c @  468 : c1                Star3 
 2511 E> 0x1aedbada634d @  469 : 2d f7 16 7c       GetNamedProperty r3, [22], [124]
         0x1aedbada6351 @  473 : c2                Star2 
         0x1aedbada6352 @  474 : 80 20 07 02       CreateClosure [32], [7], #2
         0x1aedbada6356 @  478 : c0                Star4 
 2511 E> 0x1aedbada6357 @  479 : 5e f8 f7 f6 7e    CallProperty1 r2, r3, r4, [126]
 2496 E> 0x1aedbada635c @  484 : 32 f9 05 80       SetNamedProperty r1, [5], [128]
 2560 S> 0x1aedbada6360 @  488 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6362 @  490 : c2                Star2 
 2565 E> 0x1aedbada6363 @  491 : 2d f8 21 82       GetNamedProperty r2, [33], [130]
         0x1aedbada6367 @  495 : c2                Star2 
 2573 E> 0x1aedbada6368 @  496 : 2d f8 18 84       GetNamedProperty r2, [24], [132]
         0x1aedbada636c @  500 : c3                Star1 
         0x1aedbada636d @  501 : 80 22 08 02       CreateClosure [34], [8], #2
         0x1aedbada6371 @  505 : c1                Star3 
 2573 E> 0x1aedbada6372 @  506 : 5e f9 f8 f7 86    CallProperty1 r1, r2, r3, [134]
 2619 S> 0x1aedbada6377 @  511 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6379 @  513 : c3                Star1 
         0x1aedbada637a @  514 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada637c @  516 : c1                Star3 
 2639 E> 0x1aedbada637d @  517 : 2d f7 21 88       GetNamedProperty r3, [33], [136]
         0x1aedbada6381 @  521 : c1                Star3 
 2647 E> 0x1aedbada6382 @  522 : 2d f7 16 8a       GetNamedProperty r3, [22], [138]
         0x1aedbada6386 @  526 : c2                Star2 
         0x1aedbada6387 @  527 : 80 23 09 02       CreateClosure [35], [9], #2
         0x1aedbada638b @  531 : c0                Star4 
 2647 E> 0x1aedbada638c @  532 : 5e f8 f7 f6 8c    CallProperty1 r2, r3, r4, [140]
 2632 E> 0x1aedbada6391 @  537 : 32 f9 21 8e       SetNamedProperty r1, [33], [142]
 2725 S> 0x1aedbada6395 @  541 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6397 @  543 : c3                Star1 
         0x1aedbada6398 @  544 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada639a @  546 : c1                Star3 
 2745 E> 0x1aedbada639b @  547 : 2d f7 21 90       GetNamedProperty r3, [33], [144]
         0x1aedbada639f @  551 : c1                Star3 
 2753 E> 0x1aedbada63a0 @  552 : 2d f7 16 92       GetNamedProperty r3, [22], [146]
         0x1aedbada63a4 @  556 : c2                Star2 
         0x1aedbada63a5 @  557 : 80 24 0a 02       CreateClosure [36], [10], #2
         0x1aedbada63a9 @  561 : c0                Star4 
 2753 E> 0x1aedbada63aa @  562 : 5e f8 f7 f6 94    CallProperty1 r2, r3, r4, [148]
 2738 E> 0x1aedbada63af @  567 : 32 f9 21 96       SetNamedProperty r1, [33], [150]
 2802 S> 0x1aedbada63b3 @  571 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada63b5 @  573 : c3                Star1 
         0x1aedbada63b6 @  574 : 2d f9 01 98       GetNamedProperty r1, [1], [152]
         0x1aedbada63ba @  578 : 51 9a             Inc [154]
 2818 E> 0x1aedbada63bc @  580 : 32 f9 01 9b       SetNamedProperty r1, [1], [155]
 2830 S> 0x1aedbada63c0 @  584 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada63c2 @  586 : c2                Star2 
 2835 E> 0x1aedbada63c3 @  587 : 2d f8 25 9d       GetNamedProperty r2, [37], [157]
         0x1aedbada63c7 @  591 : c2                Star2 
 2842 E> 0x1aedbada63c8 @  592 : 2d f8 26 9f       GetNamedProperty r2, [38], [159]
         0x1aedbada63cc @  596 : c3                Star1 
 2842 E> 0x1aedbada63cd @  597 : 5d f9 f8 a1       CallProperty0 r1, r2, [161]
         0x1aedbada63d1 @  601 : 0e                LdaUndefined 
 2856 S> 0x1aedbada63d2 @  602 : a9                Return 
Constant pool (size = 39)
0x1aedbada63d9: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 39
           0: 0x1aedbada6521 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1aedbada59c9 <String[11]: #tickCounter>
           2: 0x1aedbada55c1 <String[32]: #getCurrentGenerationDelayInTicks>
           3: 0x1c9ec244cbb9 <String[7]: #options>
           4: 0x1aedbada6581 <String[31]: #CHEAT_DISABLE_METEOR_GENERATION>
           5: 0x1aedbada59e9 <String[7]: #meteors>
           6: 0x1c9ec2449551 <String[4]: #push>
           7: 0x1aedbada5179 <String[8]: #meteor_1>
           8: 0x1aedbada65c9 <String[6]: #Meteor>
           9: 0x1aedbada65e1 <String[5]: #Build>
          10: 0x1aedbada51d1 <String[8]: #vector_1>
          11: 0x1aedbada65f9 <String[6]: #Vector>
          12: 0x1aedbada5a59 <String[5]: #width>
          13: 0x1c9ec2468a51 <String[3]: #rng>
          14: 0x1c9ec245aba1 <String[6]: #random>
          15: 0x1aedbada5a71 <String[6]: #height>
          16: 0x1aedbada6629 <String[12]: #fromPolarDeg>
          17: 0x1aedbada6649 <String[28]: #METEOR_GENERATION_CONE_ANGLE>
          18: 0x1aedbada5191 <String[14]: #meteor_infos_1>
          19: 0x1aedbada6679 <String[10]: #MeteorType>
          20: 0x1aedbada6699 <String[5]: #Large>
          21: 0x1aedbada66b1 <String[34]: #CHEAT_GENERATE_PREDICTABLE_METEORS>
          22: 0x1c9ec2449f61 <String[6]: #filter>
          23: 0x1aedbada6701 <SharedFunctionInfo>
          24: 0x1c9ec244a021 <String[7]: #forEach>
          25: 0x1aedbada6859 <SharedFunctionInfo>
          26: 0x1aedbada55f1 <String[23]: #findAndHandleCollisions>
          27: 0x1aedbada6a51 <SharedFunctionInfo>
          28: 0x1aedbada6b71 <SharedFunctionInfo>
          29: 0x1aedbada6cd9 <SharedFunctionInfo>
          30: 0x1aedbada6e19 <SharedFunctionInfo>
          31: 0x1aedbada6f49 <SharedFunctionInfo>
          32: 0x1aedbada7071 <SharedFunctionInfo>
          33: 0x1aedbada5a01 <String[7]: #rockets>
          34: 0x1aedbada71a1 <SharedFunctionInfo>
          35: 0x1aedbada72c1 <SharedFunctionInfo>
          36: 0x1aedbada7411 <SharedFunctionInfo>
          37: 0x1aedbada5cb9 <String[6]: #cannon>
          38: 0x1c9ec2443f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 239)
0x1aedbada7521 <ByteArray[239]>
0x1aedbada6701 points to: [0x1aedbada6770]
=== [0x1aedbada6770] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1832 S> 0x1aedbada6770 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada6774 @    4 : c4                Star0 
         0x1aedbada6775 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6777 @    7 : c3                Star1 
 1845 E> 0x1aedbada6778 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
 1837 E> 0x1aedbada677c @   12 : 6b fa 04          TestEqual r0, [4]
 1856 S> 0x1aedbada677f @   15 : a9                Return 
Constant pool (size = 2)
0x1aedbada6781: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 2
           0: 0x1aedbada67a1 <String[4]: #tick>
           1: 0x1aedbada59c9 <String[11]: #tickCounter>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1aedbada67b9 <ByteArray[11]>
0x1aedbada6859 points to: [0x1aedbada68c8]
=== [0x1aedbada68c8] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1892 S> 0x1aedbada68c8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada68ca @    2 : c3                Star1 
 1897 E> 0x1aedbada68cb @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x1aedbada68cf @    7 : c3                Star1 
 1905 E> 0x1aedbada68d0 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1aedbada68d4 @   12 : c4                Star0 
         0x1aedbada68d5 @   13 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1910 E> 0x1aedbada68d9 @   17 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1aedbada68db @   19 : c1                Star3 
 1919 E> 0x1aedbada68dc @   20 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x1aedbada68e0 @   24 : c1                Star3 
 1926 E> 0x1aedbada68e1 @   25 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x1aedbada68e5 @   29 : c2                Star2 
 1944 E> 0x1aedbada68e6 @   30 : 2d 03 05 08       GetNamedProperty a0, [5], [8]
         0x1aedbada68ea @   34 : c0                Star4 
 1961 E> 0x1aedbada68eb @   35 : 2d 03 06 0a       GetNamedProperty a0, [6], [10]
         0x1aedbada68ef @   39 : bf                Star5 
 1978 E> 0x1aedbada68f0 @   40 : 2d 03 07 0c       GetNamedProperty a0, [7], [12]
         0x1aedbada68f4 @   44 : be                Star6 
 1926 E> 0x1aedbada68f5 @   45 : 5c f8 f7 04 0e    CallProperty r2, r3-r6, [14]
         0x1aedbada68fa @   50 : c2                Star2 
 1905 E> 0x1aedbada68fb @   51 : 5e fa f9 f8 10    CallProperty1 r0, r1, r2, [16]
         0x1aedbada6900 @   56 : 0e                LdaUndefined 
 2001 S> 0x1aedbada6901 @   57 : a9                Return 
Constant pool (size = 8)
0x1aedbada6909: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 8
           0: 0x1aedbada59e9 <String[7]: #meteors>
           1: 0x1c9ec2449551 <String[4]: #push>
           2: 0x1aedbada5179 <String[8]: #meteor_1>
           3: 0x1aedbada65c9 <String[6]: #Meteor>
           4: 0x1aedbada6959 <String[10]: #BuildDebug>
           5: 0x17496a445c19 <String[8]: #position>
           6: 0x1aedbada6979 <String[8]: #velocity>
           7: 0x1aedbada6991 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 29)
0x1aedbada69b1 <ByteArray[29]>
0x1aedbada6a51 points to: [0x1aedbada6ac0]
=== [0x1aedbada6ac0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2093 S> 0x1aedbada6ac0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada6ac4 @    4 : c4                Star0 
 2093 E> 0x1aedbada6ac5 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 2101 S> 0x1aedbada6ac9 @    9 : a9                Return 
Constant pool (size = 1)
0x1aedbada6ad1: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1c9ec2443f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1aedbada6ae9 <ByteArray[9]>
0x1aedbada6b71 points to: [0x1aedbada6be0]
=== [0x1aedbada6be0] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2166 S> 0x1aedbada6be0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada6be4 @    4 : c4                Star0 
 2175 E> 0x1aedbada6be5 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1aedbada6be9 @    9 : c4                Star0 
         0x1aedbada6bea @   10 : 0c                LdaZero 
 2177 E> 0x1aedbada6beb @   11 : 6e fa 04          TestGreaterThan r0, [4]
         0x1aedbada6bee @   14 : 99 16             JumpIfFalse [22] (0x1aedbada6c04 @ 36)
 2191 E> 0x1aedbada6bf0 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada6bf4 @   20 : c4                Star0 
 2200 E> 0x1aedbada6bf5 @   21 : 2d fa 01 05       GetNamedProperty r0, [1], [5]
         0x1aedbada6bf9 @   25 : c4                Star0 
         0x1aedbada6bfa @   26 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6bfc @   28 : c3                Star1 
 2209 E> 0x1aedbada6bfd @   29 : 2d f9 02 07       GetNamedProperty r1, [2], [7]
 2202 E> 0x1aedbada6c01 @   33 : 6d fa 09          TestLessThan r0, [9]
 2215 S> 0x1aedbada6c04 @   36 : a9                Return 
Constant pool (size = 3)
0x1aedbada6c09: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 3
           0: 0x17496a445c19 <String[8]: #position>
           1: 0x1c9ec2458ae1 <String[1]: #y>
           2: 0x1aedbada5a71 <String[6]: #height>
Handler Table (size = 0)
Source Position Table (size = 19)
0x1aedbada6c49 <ByteArray[19]>
0x1aedbada6cd9 points to: [0x1aedbada6d48]
=== [0x1aedbada6d48] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2323 S> 0x1aedbada6d48 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada6d4c @    4 : c4                Star0 
 2332 E> 0x1aedbada6d4d @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1aedbada6d51 @    9 : c4                Star0 
         0x1aedbada6d52 @   10 : 0c                LdaZero 
 2334 E> 0x1aedbada6d53 @   11 : 6f fa 04          TestLessThanOrEqual r0, [4]
 2338 S> 0x1aedbada6d56 @   14 : a9                Return 
Constant pool (size = 2)
0x1aedbada6d59: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 2
           0: 0x17496a445c19 <String[8]: #position>
           1: 0x1c9ec2458ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1aedbada6d91 <ByteArray[11]>
0x1aedbada6e19 points to: [0x1aedbada6e88]
=== [0x1aedbada6e88] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2379 S> 0x1aedbada6e88 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada6e8a @    2 : c4                Star0 
         0x1aedbada6e8b @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
         0x1aedbada6e8f @    7 : c3                Star1 
 2389 E> 0x1aedbada6e90 @    8 : 2d 03 01 03       GetNamedProperty a0, [1], [3]
         0x1aedbada6e94 @   12 : 3a f9 02          Sub r1, [2]
         0x1aedbada6e97 @   15 : c2                Star2 
 2379 E> 0x1aedbada6e98 @   16 : 32 fa 00 05       SetNamedProperty r0, [0], [5]
         0x1aedbada6e9c @   20 : 0b f8             Ldar r2
 2393 S> 0x1aedbada6e9e @   22 : a9                Return 
Constant pool (size = 2)
0x1aedbada6ea1: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 2
           0: 0x1aedbada5aa9 <String[13]: #_healthPoints>
           1: 0x17496a44a111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1aedbada6ec1 <ByteArray[11]>
0x1aedbada6f49 points to: [0x1aedbada6fb8]
=== [0x1aedbada6fb8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2458 S> 0x1aedbada6fb8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada6fbc @    4 : c4                Star0 
 2467 E> 0x1aedbada6fbd @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1aedbada6fc1 @    9 : c4                Star0 
         0x1aedbada6fc2 @   10 : 0c                LdaZero 
 2469 E> 0x1aedbada6fc3 @   11 : 6e fa 04          TestGreaterThan r0, [4]
 2472 S> 0x1aedbada6fc6 @   14 : a9                Return 
Constant pool (size = 2)
0x1aedbada6fc9: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 2
           0: 0x17496a445c19 <String[8]: #position>
           1: 0x1c9ec2458ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1aedbada6fe9 <ByteArray[11]>
0x1aedbada7071 points to: [0x1aedbada70e0]
=== [0x1aedbada70e0] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2538 S> 0x1aedbada70e0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada70e4 @    4 : 55                ToBooleanLogicalNot 
 2549 S> 0x1aedbada70e5 @    5 : a9                Return 
Constant pool (size = 1)
0x1aedbada70e9: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1c9ec244b511 <String[11]: #isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1aedbada7121 <ByteArray[7]>
0x1aedbada71a1 points to: [0x1aedbada7210]
=== [0x1aedbada7210] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2600 S> 0x1aedbada7210 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada7214 @    4 : c4                Star0 
 2600 E> 0x1aedbada7215 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 2608 S> 0x1aedbada7219 @    9 : a9                Return 
Constant pool (size = 1)
0x1aedbada7221: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1c9ec2443f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1aedbada7239 <ByteArray[9]>
0x1aedbada72c1 points to: [0x1aedbada7330]
=== [0x1aedbada7330] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2673 S> 0x1aedbada7330 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada7334 @    4 : c4                Star0 
 2682 E> 0x1aedbada7335 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1aedbada7339 @    9 : c4                Star0 
         0x1aedbada733a @   10 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada733c @   12 : c3                Star1 
 2691 E> 0x1aedbada733d @   13 : 2d f9 02 05       GetNamedProperty r1, [2], [5]
         0x1aedbada7341 @   17 : c3                Star1 
 2706 E> 0x1aedbada7342 @   18 : 2d 03 03 08       GetNamedProperty a0, [3], [8]
 2711 E> 0x1aedbada7346 @   22 : 47 02 07          MulSmi [2], [7]
 2697 E> 0x1aedbada7349 @   25 : 39 f9 04          Add r1, [4]
 2684 E> 0x1aedbada734c @   28 : 6d fa 0a          TestLessThan r0, [10]
 2714 S> 0x1aedbada734f @   31 : a9                Return 
Constant pool (size = 4)
0x1aedbada7351: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 4
           0: 0x17496a445c19 <String[8]: #position>
           1: 0x1c9ec2458ac9 <String[1]: #x>
           2: 0x1aedbada5a59 <String[5]: #width>
           3: 0x17496a44a111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 19)
0x1aedbada7381 <ByteArray[19]>
0x1aedbada7411 points to: [0x1aedbada7480]
=== [0x1aedbada7480] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2780 S> 0x1aedbada7480 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada7484 @    4 : 55                ToBooleanLogicalNot 
 2791 S> 0x1aedbada7485 @    5 : a9                Return 
Constant pool (size = 1)
0x1aedbada7489: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1c9ec244b511 <String[11]: #isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1aedbada74a1 <ByteArray[7]>
0x1aedbada76a1 points to: [0x1aedbada7710]
=== [0x1aedbada7710] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2938 S> 0x1aedbada7710 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1aedbada7714 @    4 : c1                Star3 
 2946 E> 0x1aedbada7715 @    5 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x1aedbada7719 @    9 : c1                Star3 
 2915 S> 0x1aedbada771a @   10 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x1aedbada771e @   14 : c4                Star0 
 2922 S> 0x1aedbada771f @   15 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x1aedbada7723 @   19 : c3                Star1 
 3018 S> 0x1aedbada7724 @   20 : 2d 02 04 09       GetNamedProperty <this>, [4], [9]
         0x1aedbada7728 @   24 : c1                Star3 
 3037 E> 0x1aedbada7729 @   25 : 2d 02 00 0b       GetNamedProperty <this>, [0], [11]
         0x1aedbada772d @   29 : c0                Star4 
 3045 E> 0x1aedbada772e @   30 : 2d f6 05 0d       GetNamedProperty r4, [5], [13]
 3030 E> 0x1aedbada7732 @   34 : 3c f7 08          Div r3, [8]
         0x1aedbada7735 @   37 : c2                Star2 
 3065 S> 0x1aedbada7736 @   38 : 21 06 0f          LdaGlobal [6], [15]
         0x1aedbada7739 @   41 : c0                Star4 
 3077 E> 0x1aedbada773a @   42 : 2d f6 07 11       GetNamedProperty r4, [7], [17]
         0x1aedbada773e @   46 : c1                Star3 
         0x1aedbada773f @   47 : 0b f9             Ldar r1
 3100 E> 0x1aedbada7741 @   49 : 3a fa 15          Sub r0, [21]
         0x1aedbada7744 @   52 : be                Star6 
         0x1aedbada7745 @   53 : 0d 01             LdaSmi [1]
         0x1aedbada7747 @   55 : bd                Star7 
         0x1aedbada7748 @   56 : 0b f8             Ldar r2
 3115 E> 0x1aedbada774a @   58 : 3a f3 16          Sub r7, [22]
 3110 E> 0x1aedbada774d @   61 : 3b f4 14          Mul r6, [20]
 3090 E> 0x1aedbada7750 @   64 : 39 f9 13          Add r1, [19]
         0x1aedbada7753 @   67 : bf                Star5 
 3077 E> 0x1aedbada7754 @   68 : 5e f7 f6 f5 17    CallProperty1 r3, r4, r5, [23]
 3137 S> 0x1aedbada7759 @   73 : a9                Return 
Constant pool (size = 8)
0x1aedbada7761: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 8
           0: 0x1c9ec244cbb9 <String[7]: #options>
           1: 0x1aedbada77b1 <String[32]: #METEOR_GENERATION_DELAY_IN_TICKS>
           2: 0x1c9ec245a231 <String[5]: #start>
           3: 0x1c9ec244c4c1 <String[6]: #finish>
           4: 0x1aedbada59c9 <String[11]: #tickCounter>
           5: 0x1aedbada7811 <String[10]: #TICK_COUNT>
           6: 0x1c9ec245a991 <String[4]: #Math>
           7: 0x1c9ec245abb9 <String[5]: #round>
Handler Table (size = 0)
Source Position Table (size = 39)
0x1aedbada7861 <ByteArray[39]>
0x1aedbada7911 points to: [0x1aedbada7980]
=== [0x1aedbada7980] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3171 E> 0x1aedbada7980 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1aedbada7983 @    3 : 1a f9             PushContext r1
         0x1aedbada7985 @    5 : 0b 02             Ldar <this>
         0x1aedbada7987 @    7 : 25 02             StaCurrentContextSlot [2]
 3184 S> 0x1aedbada7989 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada798b @   11 : c2                Star2 
         0x1aedbada798c @   12 : 7b 00             CreateEmptyArrayLiteral [0]
 3200 E> 0x1aedbada798e @   14 : 32 f8 01 01       SetNamedProperty r2, [1], [1]
 3245 S> 0x1aedbada7992 @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada7994 @   20 : c1                Star3 
 3250 E> 0x1aedbada7995 @   21 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0x1aedbada7999 @   25 : c1                Star3 
 3258 E> 0x1aedbada799a @   26 : 2d f7 03 05       GetNamedProperty r3, [3], [5]
         0x1aedbada799e @   30 : c2                Star2 
         0x1aedbada799f @   31 : 80 04 00 02       CreateClosure [4], [0], #2
         0x1aedbada79a3 @   35 : c0                Star4 
 3258 E> 0x1aedbada79a4 @   36 : 5e f8 f7 f6 07    CallProperty1 r2, r3, r4, [7]
         0x1aedbada79a9 @   41 : c4                Star0 
 3873 S> 0x1aedbada79aa @   42 : 2d fa 05 09       GetNamedProperty r0, [5], [9]
         0x1aedbada79ae @   46 : c2                Star2 
         0x1aedbada79af @   47 : 80 06 01 02       CreateClosure [6], [1], #2
         0x1aedbada79b3 @   51 : c0                Star4 
 3873 E> 0x1aedbada79b4 @   52 : 5e f8 fa f6 0b    CallProperty1 r2, r0, r4, [11]
 3931 S> 0x1aedbada79b9 @   57 : 2d fa 07 0d       GetNamedProperty r0, [7], [13]
         0x1aedbada79bd @   61 : c2                Star2 
         0x1aedbada79be @   62 : 80 08 02 02       CreateClosure [8], [2], #2
         0x1aedbada79c2 @   66 : c0                Star4 
 3931 E> 0x1aedbada79c3 @   67 : 5e f8 fa f6 0f    CallProperty1 r2, r0, r4, [15]
         0x1aedbada79c8 @   72 : 0e                LdaUndefined 
 3992 S> 0x1aedbada79c9 @   73 : a9                Return 
Constant pool (size = 9)
0x1aedbada79d1: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 9
           0: 0x1aedbada7a29 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1aedbada5a19 <String[10]: #collisions>
           2: 0x1aedbada5a01 <String[7]: #rockets>
           3: 0x1c9ec244a069 <String[7]: #flatMap>
           4: 0x1aedbada7aa1 <SharedFunctionInfo>
           5: 0x1c9ec244eb61 <String[4]: #sort>
           6: 0x1aedbada7ea9 <SharedFunctionInfo>
           7: 0x1c9ec244a021 <String[7]: #forEach>
           8: 0x1aedbada7fe1 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 31)
0x1aedbada8101 <ByteArray[31]>
0x1aedbada7aa1 points to: [0x1aedbada7b10]
=== [0x1aedbada7b10] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3266 E> 0x1aedbada7b10 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1aedbada7b13 @    3 : 1a fa             PushContext r0
         0x1aedbada7b15 @    5 : 0b 03             Ldar a0
         0x1aedbada7b17 @    7 : 25 02             StaCurrentContextSlot [2]
 3292 S> 0x1aedbada7b19 @    9 : 15 fa 02 00       LdaImmutableContextSlot r0, [2], [0]
         0x1aedbada7b1d @   13 : c2                Star2 
 3304 E> 0x1aedbada7b1e @   14 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x1aedbada7b22 @   18 : c2                Star2 
 3329 E> 0x1aedbada7b23 @   19 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x1aedbada7b27 @   23 : c3                Star1 
         0x1aedbada7b28 @   24 : 80 03 00 02       CreateClosure [3], [0], #2
         0x1aedbada7b2c @   28 : c1                Star3 
         0x1aedbada7b2d @   29 : 7b 04             CreateEmptyArrayLiteral [4]
         0x1aedbada7b2f @   31 : c0                Star4 
 3329 E> 0x1aedbada7b30 @   32 : 5f f9 f8 f7 f6 05 CallProperty2 r1, r2, r3, r4, [5]
 3790 S> 0x1aedbada7b36 @   38 : a9                Return 
Constant pool (size = 4)
0x1aedbada7b39: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 4
           0: 0x1aedbada7b69 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1aedbada59e9 <String[7]: #meteors>
           2: 0x1c9ec244a039 <String[6]: #reduce>
           3: 0x1aedbada7bf9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 16)
0x1aedbada7e59 <ByteArray[16]>
0x1aedbada7bf9 points to: [0x1aedbada7c68]
=== [0x1aedbada7c68] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 3396 S> 0x1aedbada7c68 @    0 : 15 ff 06 02       LdaImmutableContextSlot <context>, [6], [2]
         0x1aedbada7c6c @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1aedbada7c6e @    6 : c2                Star2 
 3409 E> 0x1aedbada7c6f @    7 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x1aedbada7c73 @   11 : c2                Star2 
 3420 E> 0x1aedbada7c74 @   12 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x1aedbada7c78 @   16 : c3                Star1 
         0x1aedbada7c79 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada7c7b @   19 : c1                Star3 
 3420 E> 0x1aedbada7c7c @   20 : 5f f9 f8 f7 04 04 CallProperty2 r1, r2, r3, a1, [4]
         0x1aedbada7c82 @   26 : c4                Star0 
 3485 S> 0x1aedbada7c83 @   27 : 9a 2b             JumpIfNull [43] (0x1aedbada7cae @ 70)
 3549 S> 0x1aedbada7c85 @   29 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
         0x1aedbada7c89 @   33 : c3                Star1 
         0x1aedbada7c8a @   34 : 79 04 08 04       CreateArrayLiteral [4], [8], #4
         0x1aedbada7c8e @   38 : c0                Star4 
         0x1aedbada7c8f @   39 : 0c                LdaZero 
         0x1aedbada7c90 @   40 : c1                Star3 
 3590 E> 0x1aedbada7c91 @   41 : 7e fa 29 09       CloneObject r0, #41, [9]
         0x1aedbada7c95 @   45 : bf                Star5 
         0x1aedbada7c96 @   46 : 0b 04             Ldar a1
 3637 E> 0x1aedbada7c98 @   48 : 33 f5 05 0b       DefineNamedOwnProperty r5, [5], [11]
         0x1aedbada7c9c @   52 : 17 02             LdaImmutableCurrentContextSlot [2]
 3681 E> 0x1aedbada7c9e @   54 : 33 f5 06 0d       DefineNamedOwnProperty r5, [6], [13]
         0x1aedbada7ca2 @   58 : 0b f5             Ldar r5
         0x1aedbada7ca4 @   60 : 36 f6 f7 0f       StaInArrayLiteral r4, r3, [15]
 3549 E> 0x1aedbada7ca8 @   64 : 5e f9 03 f6 11    CallProperty1 r1, a0, r4, [17]
 3717 S> 0x1aedbada7cad @   69 : a9                Return 
 3752 S> 0x1aedbada7cae @   70 : 0b 03             Ldar a0
 3770 S> 0x1aedbada7cb0 @   72 : a9                Return 
Constant pool (size = 7)
0x1aedbada7cb9: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 7
           0: 0x1aedbada51b1 <String[12]: #projectile_1>
           1: 0x1aedbada7d01 <String[10]: #Projectile>
           2: 0x1aedbada7d21 <String[31]: #checkCollisionDuringCurrentTick>
           3: 0x1c9ec24472e9 <String[6]: #concat>
           4: 0x1aedbada7d69 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1aedbada7d81 <FixedArray[1]>>
           5: 0x1aedbada7d99 <String[6]: #meteor>
           6: 0x1aedbada7bc9 <String[6]: #rocket>
Handler Table (size = 0)
Source Position Table (size = 38)
0x1aedbada7db1 <ByteArray[38]>
0x1aedbada7ea9 points to: [0x1aedbada7f18]
=== [0x1aedbada7f18] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 3890 S> 0x1aedbada7f18 @    0 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x1aedbada7f1c @    4 : c4                Star0 
 3896 E> 0x1aedbada7f1d @    5 : 2d 04 00 03       GetNamedProperty a1, [0], [3]
 3892 E> 0x1aedbada7f21 @    9 : 3a fa 00          Sub r0, [0]
 3897 S> 0x1aedbada7f24 @   12 : a9                Return 
Constant pool (size = 1)
0x1aedbada7f29: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1aedbada7f41 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1aedbada7f59 <ByteArray[11]>
0x1aedbada7fe1 points to: [0x1aedbada8050]
=== [0x1aedbada8050] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3959 S> 0x1aedbada8050 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada8052 @    2 : c3                Star1 
 3959 E> 0x1aedbada8053 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x1aedbada8057 @    7 : c4                Star0 
 3959 E> 0x1aedbada8058 @    8 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
 3985 S> 0x1aedbada805d @   13 : a9                Return 
Constant pool (size = 1)
0x1aedbada8061: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1aedbada5619 <String[15]: #handleCollision>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1aedbada8079 <ByteArray[11]>
0x1aedbada8151 points to: [0x1aedbada81c0]
=== [0x1aedbada81c0] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4049 S> 0x1aedbada81c0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada81c4 @    4 : c4                Star0 
 4056 E> 0x1aedbada81c5 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x1aedbada81c9 @    9 : 96 0d             JumpIfToBooleanTrue [13] (0x1aedbada81d6 @ 22)
 4081 E> 0x1aedbada81cb @   11 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x1aedbada81cf @   15 : c4                Star0 
 4088 E> 0x1aedbada81d0 @   16 : 2d fa 01 06       GetNamedProperty r0, [1], [6]
         0x1aedbada81d4 @   20 : 97 04             JumpIfToBooleanFalse [4] (0x1aedbada81d8 @ 24)
 4113 S> 0x1aedbada81d6 @   22 : 0e                LdaUndefined 
 4120 S> 0x1aedbada81d7 @   23 : a9                Return 
 4134 S> 0x1aedbada81d8 @   24 : 2d 02 03 08       GetNamedProperty <this>, [3], [8]
         0x1aedbada81dc @   28 : c3                Star1 
 4145 E> 0x1aedbada81dd @   29 : 2d f9 04 0a       GetNamedProperty r1, [4], [10]
         0x1aedbada81e1 @   33 : c4                Star0 
 4145 E> 0x1aedbada81e2 @   34 : 5e fa f9 03 0c    CallProperty1 r0, r1, a0, [12]
 4180 S> 0x1aedbada81e7 @   39 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada81eb @   43 : c3                Star1 
 4187 E> 0x1aedbada81ec @   44 : 2d f9 05 0e       GetNamedProperty r1, [5], [14]
         0x1aedbada81f0 @   48 : c4                Star0 
 4187 E> 0x1aedbada81f1 @   49 : 5d fa f9 10       CallProperty0 r0, r1, [16]
 4216 S> 0x1aedbada81f5 @   53 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x1aedbada81f9 @   57 : c3                Star1 
 4223 E> 0x1aedbada81fa @   58 : 2d f9 05 12       GetNamedProperty r1, [5], [18]
         0x1aedbada81fe @   62 : c4                Star0 
 4223 E> 0x1aedbada81ff @   63 : 5d fa f9 14       CallProperty0 r0, r1, [20]
 4247 S> 0x1aedbada8203 @   67 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x1aedbada8207 @   71 : c4                Star0 
 4247 E> 0x1aedbada8208 @   72 : 5e fa 02 03 18    CallProperty1 r0, <this>, a0, [24]
 4285 S> 0x1aedbada820d @   77 : 2d 02 07 1a       GetNamedProperty <this>, [7], [26]
         0x1aedbada8211 @   81 : c3                Star1 
 4305 E> 0x1aedbada8212 @   82 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x1aedbada8216 @   86 : c2                Star2 
 4313 E> 0x1aedbada8217 @   87 : 2d f8 09 20       GetNamedProperty r2, [9], [32]
         0x1aedbada821b @   91 : c2                Star2 
 4342 E> 0x1aedbada821c @   92 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada8220 @   96 : c1                Star3 
 4349 E> 0x1aedbada8221 @   97 : 2d f7 0a 22       GetNamedProperty r3, [10], [34]
 4330 E> 0x1aedbada8225 @  101 : 3b f8 1d          Mul r2, [29]
         0x1aedbada8228 @  104 : 39 f9 1c          Add r1, [28]
 4297 E> 0x1aedbada822b @  107 : 32 02 07 24       SetNamedProperty <this>, [7], [36]
         0x1aedbada822f @  111 : 0e                LdaUndefined 
 4360 S> 0x1aedbada8230 @  112 : a9                Return 
Constant pool (size = 11)
0x1aedbada8239: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 11
           0: 0x1aedbada7d99 <String[6]: #meteor>
           1: 0x1c9ec244b511 <String[11]: #isDestroyed>
           2: 0x1aedbada7bc9 <String[6]: #rocket>
           3: 0x1aedbada5a19 <String[10]: #collisions>
           4: 0x1c9ec2449551 <String[4]: #push>
           5: 0x1c9ec244ba19 <String[7]: #destroy>
           6: 0x1aedbada5639 <String[17]: #handleMeteorSplit>
           7: 0x1aedbada5ac9 <String[6]: #_score>
           8: 0x1c9ec244cbb9 <String[7]: #options>
           9: 0x1aedbada82b9 <String[16]: #SCORE_MULTIPLIER>
          10: 0x1aedbada5769 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 58)
0x1aedbada82d9 <ByteArray[58]>
0x1aedbada83a9 points to: [0x1aedbada8418]
=== [0x1aedbada8418] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 4383 E> 0x1aedbada8418 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1aedbada841b @    3 : 1a fa             PushContext r0
         0x1aedbada841d @    5 : 0b 02             Ldar <this>
         0x1aedbada841f @    7 : 25 02             StaCurrentContextSlot [2]
 4415 S> 0x1aedbada8421 @    9 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
         0x1aedbada8425 @   13 : c1                Star3 
 4422 E> 0x1aedbada8426 @   14 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x1aedbada842a @   18 : c2                Star2 
 4457 E> 0x1aedbada842b @   19 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x1aedbada842f @   23 : c0                Star4 
 4422 E> 0x1aedbada8430 @   24 : 5e f8 f7 f6 06    CallProperty1 r2, r3, r4, [6]
         0x1aedbada8435 @   29 : c2                Star2 
 4470 E> 0x1aedbada8436 @   30 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x1aedbada843a @   34 : c3                Star1 
         0x1aedbada843b @   35 : 80 05 00 02       CreateClosure [5], [0], #2
         0x1aedbada843f @   39 : c1                Star3 
 4471 E> 0x1aedbada8440 @   40 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
         0x1aedbada8445 @   45 : 0e                LdaUndefined 
 4513 S> 0x1aedbada8446 @   46 : a9                Return 
Constant pool (size = 6)
0x1aedbada8449: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 6
           0: 0x1aedbada8489 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1aedbada7d99 <String[6]: #meteor>
           2: 0x1aedbada84e9 <String[24]: #getMeteorsAfterExplosion>
           3: 0x1aedbada8511 <String[12]: #intersection>
           4: 0x1c9ec244a021 <String[7]: #forEach>
           5: 0x1aedbada8531 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 25)
0x1aedbada8661 <ByteArray[25]>
0x1aedbada8531 points to: [0x1aedbada85a0]
=== [0x1aedbada85a0] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4499 S> 0x1aedbada85a0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1aedbada85a2 @    2 : c3                Star1 
 4491 E> 0x1aedbada85a3 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x1aedbada85a7 @    7 : c3                Star1 
 4499 E> 0x1aedbada85a8 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1aedbada85ac @   12 : c4                Star0 
 4499 E> 0x1aedbada85ad @   13 : 5e fa f9 03 04    CallProperty1 r0, r1, a0, [4]
 4506 S> 0x1aedbada85b2 @   18 : a9                Return 
Constant pool (size = 2)
0x1aedbada85b9: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 2
           0: 0x1aedbada59e9 <String[7]: #meteors>
           1: 0x1c9ec2449551 <String[4]: #push>
Handler Table (size = 0)
Source Position Table (size = 14)
0x1aedbada85d9 <ByteArray[14]>
0x1aedbada86a9 points to: [0x1aedbada8718]
=== [0x1aedbada8718] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4564 S> 0x1aedbada8718 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada871c @    4 : c4                Star0 
         0x1aedbada871d @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4589 E> 0x1aedbada871f @    7 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1aedbada8721 @    9 : c3                Star1 
 4598 E> 0x1aedbada8722 @   10 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1aedbada8726 @   14 : c3                Star1 
 4610 E> 0x1aedbada8727 @   15 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x1aedbada872b @   19 : 6c fa 02          TestEqualStrict r0, [2]
         0x1aedbada872e @   22 : 98 2a             JumpIfTrue [42] (0x1aedbada8758 @ 64)
         0x1aedbada8730 @   24 : 17 02             LdaImmutableCurrentContextSlot [2]
 4707 E> 0x1aedbada8732 @   26 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1aedbada8734 @   28 : c3                Star1 
 4716 E> 0x1aedbada8735 @   29 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1aedbada8739 @   33 : c3                Star1 
 4728 E> 0x1aedbada873a @   34 : 2d f9 04 07       GetNamedProperty r1, [4], [7]
         0x1aedbada873e @   38 : 6c fa 02          TestEqualStrict r0, [2]
         0x1aedbada8741 @   41 : 98 23             JumpIfTrue [35] (0x1aedbada8764 @ 76)
         0x1aedbada8743 @   43 : 17 02             LdaImmutableCurrentContextSlot [2]
 4825 E> 0x1aedbada8745 @   45 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1aedbada8747 @   47 : c3                Star1 
 4834 E> 0x1aedbada8748 @   48 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x1aedbada874c @   52 : c3                Star1 
 4846 E> 0x1aedbada874d @   53 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x1aedbada8751 @   57 : 6c fa 02          TestEqualStrict r0, [2]
         0x1aedbada8754 @   60 : 98 1c             JumpIfTrue [28] (0x1aedbada8770 @ 88)
         0x1aedbada8756 @   62 : 8a 25             Jump [37] (0x1aedbada877b @ 99)
 4639 S> 0x1aedbada8758 @   64 : 2d 02 06 0b       GetNamedProperty <this>, [6], [11]
         0x1aedbada875c @   68 : c3                Star1 
 4639 E> 0x1aedbada875d @   69 : 5e f9 02 03 0d    CallProperty1 r1, <this>, a0, [13]
 4683 S> 0x1aedbada8762 @   74 : 8a 19             Jump [25] (0x1aedbada877b @ 99)
 4757 S> 0x1aedbada8764 @   76 : 2d 02 07 0f       GetNamedProperty <this>, [7], [15]
         0x1aedbada8768 @   80 : c3                Star1 
 4757 E> 0x1aedbada8769 @   81 : 5e f9 02 03 11    CallProperty1 r1, <this>, a0, [17]
 4801 S> 0x1aedbada876e @   86 : 8a 0d             Jump [13] (0x1aedbada877b @ 99)
 4874 S> 0x1aedbada8770 @   88 : 2d 02 08 13       GetNamedProperty <this>, [8], [19]
         0x1aedbada8774 @   92 : c3                Star1 
 4874 E> 0x1aedbada8775 @   93 : 5d f9 02 15       CallProperty0 r1, <this>, [21]
 4911 S> 0x1aedbada8779 @   97 : 8a 02             Jump [2] (0x1aedbada877b @ 99)
         0x1aedbada877b @   99 : 0e                LdaUndefined 
 4932 S> 0x1aedbada877c @  100 : a9                Return 
Constant pool (size = 9)
0x1aedbada8781: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 9
           0: 0x17496a444469 <String[4]: #type>
           1: 0x1aedbada5149 <String[8]: #action_1>
           2: 0x1aedbada87d9 <String[11]: #ActionTypes>
           3: 0x1aedbada87f9 <String[6]: #ROTATE>
           4: 0x1aedbada8811 <String[6]: #LOOKAT>
           5: 0x1aedbada8829 <String[5]: #SHOOT>
           6: 0x1aedbada56f1 <String[18]: #handleActionRotate>
           7: 0x1aedbada5719 <String[18]: #handleActionLookAt>
           8: 0x1aedbada5741 <String[17]: #handleActionShoot>
Handler Table (size = 0)
Source Position Table (size = 53)
0x1aedbada8841 <ByteArray[53]>
0x1aedbada88f9 points to: [0x1aedbada8968]
=== [0x1aedbada8968] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4998 S> 0x1aedbada8968 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1aedbada896c @    4 : c3                Star1 
 4998 E> 0x1aedbada896d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x1aedbada8971 @    9 : c3                Star1 
         0x1aedbada8972 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x1aedbada8976 @   14 : c4                Star0 
 5042 E> 0x1aedbada8977 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x1aedbada897b @   19 : c2                Star2 
 5049 E> 0x1aedbada897c @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x1aedbada8980 @   24 : c3                Star1 
 5049 E> 0x1aedbada8981 @   25 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x1aedbada8985 @   29 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5097 E> 0x1aedbada8989 @   33 : 2d 02 03 0e       GetNamedProperty <this>, [3], [14]
         0x1aedbada898d @   37 : c2                Star2 
 5105 E> 0x1aedbada898e @   38 : 2d f8 04 10       GetNamedProperty r2, [4], [16]
         0x1aedbada8992 @   42 : c3                Star1 
         0x1aedbada8993 @   43 : 80 05 00 02       CreateClosure [5], [0], #2
         0x1aedbada8997 @   47 : c1                Star3 
 5105 E> 0x1aedbada8998 @   48 : 5e f9 f8 f7 12    CallProperty1 r1, r2, r3, [18]
         0x1aedbada899d @   53 : 33 fa 03 14       DefineNamedOwnProperty r0, [3], [20]
 5167 E> 0x1aedbada89a1 @   57 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x1aedbada89a5 @   61 : c2                Star2 
 5175 E> 0x1aedbada89a6 @   62 : 2d f8 04 18       GetNamedProperty r2, [4], [24]
         0x1aedbada89aa @   66 : c3                Star1 
         0x1aedbada89ab @   67 : 80 07 01 02       CreateClosure [7], [1], #2
         0x1aedbada89af @   71 : c1                Star3 
 5175 E> 0x1aedbada89b0 @   72 : 5e f9 f8 f7 1a    CallProperty1 r1, r2, r3, [26]
         0x1aedbada89b5 @   77 : 33 fa 06 1c       DefineNamedOwnProperty r0, [6], [28]
 5240 E> 0x1aedbada89b9 @   81 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x1aedbada89bd @   85 : c2                Star2 
 5251 E> 0x1aedbada89be @   86 : 2d f8 04 20       GetNamedProperty r2, [4], [32]
         0x1aedbada89c2 @   90 : c3                Star1 
         0x1aedbada89c3 @   91 : 80 09 02 02       CreateClosure [9], [2], #2
         0x1aedbada89c7 @   95 : c1                Star3 
 5251 E> 0x1aedbada89c8 @   96 : 5e f9 f8 f7 22    CallProperty1 r1, r2, r3, [34]
         0x1aedbada89cd @  101 : 33 fa 08 24       DefineNamedOwnProperty r0, [8], [36]
         0x1aedbada89d1 @  105 : 0b fa             Ldar r0
 5479 S> 0x1aedbada89d3 @  107 : a9                Return 
Constant pool (size = 10)
0x1aedbada89d9: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 10
           0: 0x1aedbada56d1 <String[15]: #serializeCommon>
           1: 0x1aedbada5cb9 <String[6]: #cannon>
           2: 0x1aedbada5681 <String[18]: #serializeForViewer>
           3: 0x1aedbada59e9 <String[7]: #meteors>
           4: 0x1c9ec2449ea9 <String[3]: #map>
           5: 0x1aedbada8a51 <SharedFunctionInfo>
           6: 0x1aedbada5a01 <String[7]: #rockets>
           7: 0x1aedbada8b71 <SharedFunctionInfo>
           8: 0x1aedbada5a19 <String[10]: #collisions>
           9: 0x1aedbada8c91 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 40)
0x1aedbada8eb1 <ByteArray[40]>
0x1aedbada8a51 points to: [0x1aedbada8ac0]
=== [0x1aedbada8ac0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5118 S> 0x1aedbada8ac0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada8ac4 @    4 : c4                Star0 
 5118 E> 0x1aedbada8ac5 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5138 S> 0x1aedbada8ac9 @    9 : a9                Return 
Constant pool (size = 1)
0x1aedbada8ad1: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1aedbada5681 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1aedbada8ae9 <ByteArray[10]>
0x1aedbada8b71 points to: [0x1aedbada8be0]
=== [0x1aedbada8be0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5188 S> 0x1aedbada8be0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada8be4 @    4 : c4                Star0 
 5188 E> 0x1aedbada8be5 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5208 S> 0x1aedbada8be9 @    9 : a9                Return 
Constant pool (size = 1)
0x1aedbada8bf1: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1aedbada5681 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1aedbada8c09 <ByteArray[10]>
0x1aedbada8c91 points to: [0x1aedbada8d00]
=== [0x1aedbada8d00] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 5269 S> 0x1aedbada8d00 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1aedbada8d04 @    4 : c4                Star0 
 5311 E> 0x1aedbada8d05 @    5 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
         0x1aedbada8d09 @    9 : c2                Star2 
 5324 E> 0x1aedbada8d0a @   10 : 2d f8 02 03       GetNamedProperty r2, [2], [3]
         0x1aedbada8d0e @   14 : c3                Star1 
 5324 E> 0x1aedbada8d0f @   15 : 5d f9 f8 05       CallProperty0 r1, r2, [5]
         0x1aedbada8d13 @   19 : 33 fa 01 07       DefineNamedOwnProperty r0, [1], [7]
 5379 E> 0x1aedbada8d17 @   23 : 2d 03 03 09       GetNamedProperty a0, [3], [9]
         0x1aedbada8d1b @   27 : c2                Star2 
 5386 E> 0x1aedbada8d1c @   28 : 2d f8 04 0b       GetNamedProperty r2, [4], [11]
         0x1aedbada8d20 @   32 : c2                Star2 
 5395 E> 0x1aedbada8d21 @   33 : 2d f8 02 0d       GetNamedProperty r2, [2], [13]
         0x1aedbada8d25 @   37 : c3                Star1 
 5395 E> 0x1aedbada8d26 @   38 : 5d f9 f8 0f       CallProperty0 r1, r2, [15]
         0x1aedbada8d2a @   42 : 33 fa 05 11       DefineNamedOwnProperty r0, [5], [17]
 5440 E> 0x1aedbada8d2e @   46 : 2d 03 03 09       GetNamedProperty a0, [3], [9]
         0x1aedbada8d32 @   50 : c3                Star1 
 5447 E> 0x1aedbada8d33 @   51 : 2d f9 06 13       GetNamedProperty r1, [6], [19]
         0x1aedbada8d37 @   55 : 33 fa 06 15       DefineNamedOwnProperty r0, [6], [21]
         0x1aedbada8d3b @   59 : 0b fa             Ldar r0
 5466 S> 0x1aedbada8d3d @   61 : a9                Return 
Constant pool (size = 7)
0x1aedbada8d41: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 7
           0: 0x1aedbada8d89 <ObjectBoilerplateDescription[7]>
           1: 0x1aedbada8511 <String[12]: #intersection>
           2: 0x1c9ec24501a9 <String[9]: #serialize>
           3: 0x1aedbada7d99 <String[6]: #meteor>
           4: 0x17496a445c19 <String[8]: #position>
           5: 0x1aedbada8dd1 <String[14]: #meteorPosition>
           6: 0x17496a44a111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 29)
0x1aedbada8e11 <ByteArray[29]>
Boilerplate at 0x1aedbada8d89: 
0x1aedbada8d89: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x17496a442059 <Map>
 - length: 7
           0: 8
           1: 0x1aedbada8511 <String[12]: #intersection>
           2: 0x17496a441501 <Odd Oddball: uninitialized>
           3: 0x1aedbada8dd1 <String[14]: #meteorPosition>
           4: 0x17496a441501 <Odd Oddball: uninitialized>
           5: 0x17496a44a111 <String[4]: #size>
           6: 0x17496a441501 <Odd Oddball: uninitialized>
0x1aedbada8f69 points to: [0x1aedbada8fd8]
=== [0x1aedbada8fd8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5550 S> 0x1aedbada8fd8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1aedbada8fdc @    4 : c3                Star1 
 5550 E> 0x1aedbada8fdd @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x1aedbada8fe1 @    9 : c3                Star1 
         0x1aedbada8fe2 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x1aedbada8fe6 @   14 : c4                Star0 
 5594 E> 0x1aedbada8fe7 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x1aedbada8feb @   19 : c2                Star2 
 5601 E> 0x1aedbada8fec @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x1aedbada8ff0 @   24 : c3                Star1 
 5601 E> 0x1aedbada8ff1 @   25 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x1aedbada8ff5 @   29 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5649 E> 0x1aedbada8ff9 @   33 : 2d 02 03 0e       GetNamedProperty <this>, [3], [14]
         0x1aedbada8ffd @   37 : c2                Star2 
 5657 E> 0x1aedbada8ffe @   38 : 2d f8 04 10       GetNamedProperty r2, [4], [16]
         0x1aedbada9002 @   42 : c3                Star1 
         0x1aedbada9003 @   43 : 80 05 00 02       CreateClosure [5], [0], #2
         0x1aedbada9007 @   47 : c1                Star3 
 5657 E> 0x1aedbada9008 @   48 : 5e f9 f8 f7 12    CallProperty1 r1, r2, r3, [18]
         0x1aedbada900d @   53 : 33 fa 03 14       DefineNamedOwnProperty r0, [3], [20]
 5719 E> 0x1aedbada9011 @   57 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x1aedbada9015 @   61 : c2                Star2 
 5727 E> 0x1aedbada9016 @   62 : 2d f8 04 18       GetNamedProperty r2, [4], [24]
         0x1aedbada901a @   66 : c3                Star1 
         0x1aedbada901b @   67 : 80 07 01 02       CreateClosure [7], [1], #2
         0x1aedbada901f @   71 : c1                Star3 
 5727 E> 0x1aedbada9020 @   72 : 5e f9 f8 f7 1a    CallProperty1 r1, r2, r3, [26]
         0x1aedbada9025 @   77 : 33 fa 06 1c       DefineNamedOwnProperty r0, [6], [28]
         0x1aedbada9029 @   81 : 0b fa             Ldar r0
 5773 S> 0x1aedbada902b @   83 : a9                Return 
Constant pool (size = 8)
0x1aedbada9031: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 8
           0: 0x1aedbada56d1 <String[15]: #serializeCommon>
           1: 0x1aedbada5cb9 <String[6]: #cannon>
           2: 0x1aedbada56a9 <String[18]: #serializeForPlayer>
           3: 0x1aedbada59e9 <String[7]: #meteors>
           4: 0x1c9ec2449ea9 <String[3]: #map>
           5: 0x1aedbada9081 <SharedFunctionInfo>
           6: 0x1aedbada5a01 <String[7]: #rockets>
           7: 0x1aedbada91a1 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 33)
0x1aedbada92c1 <ByteArray[33]>
0x1aedbada9081 points to: [0x1aedbada90f0]
=== [0x1aedbada90f0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5670 S> 0x1aedbada90f0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada90f4 @    4 : c4                Star0 
 5670 E> 0x1aedbada90f5 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5690 S> 0x1aedbada90f9 @    9 : a9                Return 
Constant pool (size = 1)
0x1aedbada9101: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1aedbada56a9 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1aedbada9119 <ByteArray[10]>
0x1aedbada91a1 points to: [0x1aedbada9210]
=== [0x1aedbada9210] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5740 S> 0x1aedbada9210 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada9214 @    4 : c4                Star0 
 5740 E> 0x1aedbada9215 @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5760 S> 0x1aedbada9219 @    9 : a9                Return 
Constant pool (size = 1)
0x1aedbada9221: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1aedbada56a9 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1aedbada9239 <ByteArray[10]>
0x1aedbada9371 points to: [0x1aedbada93e0]
=== [0x1aedbada93e0] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5812 S> 0x1aedbada93e0 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1aedbada93e4 @    4 : c4                Star0 
 5845 E> 0x1aedbada93e5 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x1aedbada93e9 @    9 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x1aedbada93ed @   13 : 0b fa             Ldar r0
 5863 S> 0x1aedbada93ef @   15 : a9                Return 
Constant pool (size = 3)
0x1aedbada93f1: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 3
           0: 0x1aedbada9419 <ObjectBoilerplateDescription[3]>
           1: 0x1aedbada5ac9 <String[6]: #_score>
           2: 0x1aedbada5769 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1aedbada9441 <ByteArray[11]>
Boilerplate at 0x1aedbada9419: 
0x1aedbada9419: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x17496a442059 <Map>
 - length: 3
           0: 8
           1: 0x1aedbada5769 <String[5]: #score>
           2: 0x17496a441501 <Odd Oddball: uninitialized>
0x1aedbada94c9 points to: [0x1aedbada9538]
=== [0x1aedbada9538] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 5922 S> 0x1aedbada9538 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada953c @    4 : 1d                TestUndetectable 
         0x1aedbada953d @    5 : 98 17             JumpIfTrue [23] (0x1aedbada9554 @ 28)
 5939 E> 0x1aedbada953f @    7 : 21 01 02          LdaGlobal [1], [2]
         0x1aedbada9542 @   10 : c3                Star1 
 5946 E> 0x1aedbada9543 @   11 : 2d f9 02 04       GetNamedProperty r1, [2], [4]
         0x1aedbada9547 @   15 : c4                Star0 
 5959 E> 0x1aedbada9548 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada954c @   20 : c2                Star2 
 5946 E> 0x1aedbada954d @   21 : 5e fa f9 f8 06    CallProperty1 r0, r1, r2, [6]
         0x1aedbada9552 @   26 : 97 11             JumpIfToBooleanFalse [17] (0x1aedbada9563 @ 43)
 5981 S> 0x1aedbada9554 @   28 : 21 03 08          LdaGlobal [3], [8]
         0x1aedbada9557 @   31 : c4                Star0 
         0x1aedbada9558 @   32 : 13 04             LdaConstant [4]
         0x1aedbada955a @   34 : c3                Star1 
         0x1aedbada955b @   35 : 0b fa             Ldar r0
 5987 E> 0x1aedbada955d @   37 : 69 fa f9 01 0a    Construct r0, r1-r1, [10]
 5981 E> 0x1aedbada9562 @   42 : a7                Throw 
 6054 S> 0x1aedbada9563 @   43 : 2d 02 05 0c       GetNamedProperty <this>, [5], [12]
         0x1aedbada9567 @   47 : c3                Star1 
 6061 E> 0x1aedbada9568 @   48 : 2d f9 06 0e       GetNamedProperty r1, [6], [14]
         0x1aedbada956c @   52 : c4                Star0 
 6075 E> 0x1aedbada956d @   53 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada9571 @   57 : c2                Star2 
 6061 E> 0x1aedbada9572 @   58 : 5e fa f9 f8 10    CallProperty1 r0, r1, r2, [16]
         0x1aedbada9577 @   63 : 0e                LdaUndefined 
 6087 S> 0x1aedbada9578 @   64 : a9                Return 
Constant pool (size = 7)
0x1aedbada9581: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 7
           0: 0x1aedbada95c9 <String[5]: #angle>
           1: 0x17496a445a69 <String[6]: #Number>
           2: 0x1c9ec245bc99 <String[5]: #isNaN>
           3: 0x17496a444de1 <String[5]: #Error>
           4: 0x1aedbada95f9 <String[29]: #Invalid value in action.angle>
           5: 0x1aedbada5cb9 <String[6]: #cannon>
           6: 0x1aedbada9629 <String[6]: #rotate>
Handler Table (size = 0)
Source Position Table (size = 32)
0x1aedbada9641 <ByteArray[32]>
0x1aedbada96e1 points to: [0x1aedbada9750]
=== [0x1aedbada9750] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 6141 S> 0x1aedbada9750 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada9754 @    4 : 1d                TestUndetectable 
         0x1aedbada9755 @    5 : 99 11             JumpIfFalse [17] (0x1aedbada9766 @ 22)
 6171 S> 0x1aedbada9757 @    7 : 21 01 02          LdaGlobal [1], [2]
         0x1aedbada975a @   10 : c4                Star0 
         0x1aedbada975b @   11 : 13 02             LdaConstant [2]
         0x1aedbada975d @   13 : c3                Star1 
         0x1aedbada975e @   14 : 0b fa             Ldar r0
 6177 E> 0x1aedbada9760 @   16 : 69 fa f9 01 04    Construct r0, r1-r1, [4]
 6171 E> 0x1aedbada9765 @   21 : a7                Throw 
 6251 S> 0x1aedbada9766 @   22 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada976a @   26 : c4                Star0 
 6258 E> 0x1aedbada976b @   27 : 2d fa 03 06       GetNamedProperty r0, [3], [6]
         0x1aedbada976f @   31 : 1d                TestUndetectable 
         0x1aedbada9770 @   32 : 98 1c             JumpIfTrue [28] (0x1aedbada978c @ 60)
 6271 E> 0x1aedbada9772 @   34 : 21 04 08          LdaGlobal [4], [8]
         0x1aedbada9775 @   37 : c3                Star1 
 6278 E> 0x1aedbada9776 @   38 : 2d f9 05 0a       GetNamedProperty r1, [5], [10]
         0x1aedbada977a @   42 : c4                Star0 
 6291 E> 0x1aedbada977b @   43 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada977f @   47 : c2                Star2 
 6298 E> 0x1aedbada9780 @   48 : 2d f8 03 0c       GetNamedProperty r2, [3], [12]
         0x1aedbada9784 @   52 : c2                Star2 
 6278 E> 0x1aedbada9785 @   53 : 5e fa f9 f8 0e    CallProperty1 r0, r1, r2, [14]
         0x1aedbada978a @   58 : 97 11             JumpIfToBooleanFalse [17] (0x1aedbada979b @ 75)
 6316 S> 0x1aedbada978c @   60 : 21 01 02          LdaGlobal [1], [2]
         0x1aedbada978f @   63 : c4                Star0 
         0x1aedbada9790 @   64 : 13 06             LdaConstant [6]
         0x1aedbada9792 @   66 : c3                Star1 
         0x1aedbada9793 @   67 : 0b fa             Ldar r0
 6322 E> 0x1aedbada9795 @   69 : 69 fa f9 01 10    Construct r0, r1-r1, [16]
 6316 E> 0x1aedbada979a @   74 : a7                Throw 
 6398 S> 0x1aedbada979b @   75 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada979f @   79 : c4                Star0 
 6405 E> 0x1aedbada97a0 @   80 : 2d fa 07 12       GetNamedProperty r0, [7], [18]
         0x1aedbada97a4 @   84 : 1d                TestUndetectable 
         0x1aedbada97a5 @   85 : 98 1c             JumpIfTrue [28] (0x1aedbada97c1 @ 113)
 6418 E> 0x1aedbada97a7 @   87 : 21 04 08          LdaGlobal [4], [8]
         0x1aedbada97aa @   90 : c3                Star1 
 6425 E> 0x1aedbada97ab @   91 : 2d f9 05 0a       GetNamedProperty r1, [5], [10]
         0x1aedbada97af @   95 : c4                Star0 
 6438 E> 0x1aedbada97b0 @   96 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada97b4 @  100 : c2                Star2 
 6445 E> 0x1aedbada97b5 @  101 : 2d f8 07 14       GetNamedProperty r2, [7], [20]
         0x1aedbada97b9 @  105 : c2                Star2 
 6425 E> 0x1aedbada97ba @  106 : 5e fa f9 f8 16    CallProperty1 r0, r1, r2, [22]
         0x1aedbada97bf @  111 : 97 11             JumpIfToBooleanFalse [17] (0x1aedbada97d0 @ 128)
 6463 S> 0x1aedbada97c1 @  113 : 21 01 02          LdaGlobal [1], [2]
         0x1aedbada97c4 @  116 : c4                Star0 
         0x1aedbada97c5 @  117 : 13 08             LdaConstant [8]
         0x1aedbada97c7 @  119 : c3                Star1 
         0x1aedbada97c8 @  120 : 0b fa             Ldar r0
 6469 E> 0x1aedbada97ca @  122 : 69 fa f9 01 18    Construct r0, r1-r1, [24]
 6463 E> 0x1aedbada97cf @  127 : a7                Throw 
 6539 S> 0x1aedbada97d0 @  128 : 2d 02 09 1a       GetNamedProperty <this>, [9], [26]
         0x1aedbada97d4 @  132 : c3                Star1 
 6546 E> 0x1aedbada97d5 @  133 : 2d f9 0a 1c       GetNamedProperty r1, [10], [28]
         0x1aedbada97d9 @  137 : c4                Star0 
         0x1aedbada97da @  138 : 17 07             LdaImmutableCurrentContextSlot [7]
 6557 E> 0x1aedbada97dc @  140 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x1aedbada97de @  142 : c2                Star2 
 6566 E> 0x1aedbada97df @  143 : 2d f8 0c 1e       GetNamedProperty r2, [12], [30]
         0x1aedbada97e3 @  147 : c2                Star2 
 6580 E> 0x1aedbada97e4 @  148 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada97e8 @  152 : c1                Star3 
 6587 E> 0x1aedbada97e9 @  153 : 2d f7 03 20       GetNamedProperty r3, [3], [32]
         0x1aedbada97ed @  157 : c1                Star3 
 6597 E> 0x1aedbada97ee @  158 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1aedbada97f2 @  162 : c0                Star4 
 6604 E> 0x1aedbada97f3 @  163 : 2d f6 07 22       GetNamedProperty r4, [7], [34]
         0x1aedbada97f7 @  167 : c0                Star4 
         0x1aedbada97f8 @  168 : 0b f8             Ldar r2
 6553 E> 0x1aedbada97fa @  170 : 69 f8 f7 02 24    Construct r2, r3-r4, [36]
         0x1aedbada97ff @  175 : c2                Star2 
 6546 E> 0x1aedbada9800 @  176 : 5e fa f9 f8 26    CallProperty1 r0, r1, r2, [38]
         0x1aedbada9805 @  181 : 0e                LdaUndefined 
 6613 S> 0x1aedbada9806 @  182 : a9                Return 
Constant pool (size = 13)
0x1aedbada9809: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 13
           0: 0x17496a446201 <String[6]: #target>
           1: 0x17496a444de1 <String[5]: #Error>
           2: 0x1aedbada9881 <String[30]: #Invalid value in action.target>
           3: 0x1c9ec2458ac9 <String[1]: #x>
           4: 0x17496a445a69 <String[6]: #Number>
           5: 0x1c9ec245bc99 <String[5]: #isNaN>
           6: 0x1aedbada98b1 <String[32]: #Invalid value in action.target.x>
           7: 0x1c9ec2458ae1 <String[1]: #y>
           8: 0x1aedbada98e1 <String[32]: #Invalid value in action.target.y>
           9: 0x1aedbada5cb9 <String[6]: #cannon>
          10: 0x1aedbada9911 <String[6]: #lookAt>
          11: 0x1aedbada51d1 <String[8]: #vector_1>
          12: 0x1aedbada65f9 <String[6]: #Vector>
Handler Table (size = 0)
Source Position Table (size = 81)
0x1aedbada9929 <ByteArray[81]>
0x1aedbada9a11 points to: [0x1aedbada9a80]
=== [0x1aedbada9a80] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 6654 S> 0x1aedbada9a80 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1aedbada9a84 @    4 : c3                Star1 
 6662 E> 0x1aedbada9a85 @    5 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1aedbada9a89 @    9 : c4                Star0 
 6672 E> 0x1aedbada9a8a @   10 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x1aedbada9a8e @   14 : c1                Star3 
 6679 E> 0x1aedbada9a8f @   15 : 2d f7 03 06       GetNamedProperty r3, [3], [6]
         0x1aedbada9a93 @   19 : c2                Star2 
 6679 E> 0x1aedbada9a94 @   20 : 5d f8 f7 08       CallProperty0 r2, r3, [8]
         0x1aedbada9a98 @   24 : c2                Star2 
 6662 E> 0x1aedbada9a99 @   25 : 5e fa f9 f8 0a    CallProperty1 r0, r1, r2, [10]
         0x1aedbada9a9e @   30 : 0e                LdaUndefined 
 6700 S> 0x1aedbada9a9f @   31 : a9                Return 
Constant pool (size = 4)
0x1aedbada9aa1: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 4
           0: 0x1aedbada5a01 <String[7]: #rockets>
           1: 0x1c9ec2449551 <String[4]: #push>
           2: 0x1aedbada5cb9 <String[6]: #cannon>
           3: 0x1aedbada9ad1 <String[12]: #launchRocket>
Handler Table (size = 0)
Source Position Table (size = 19)
0x1aedbada9af1 <ByteArray[19]>
0x1aedbada9b81 points to: [0x1aedbada9bf0]
=== [0x1aedbada9bf0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 6740 S> 0x1aedbada9bf0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 6747 S> 0x1aedbada9bf4 @    4 : a9                Return 
Constant pool (size = 1)
0x1aedbada9bf9: [FixedArray] in OldSpace
 - map: 0x17496a4412e1 <Map>
 - length: 1
           0: 0x1aedbada5ac9 <String[6]: #_score>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1aedbada9c11 <ByteArray[8]>
<< OUTPUTTING DISASSEMBLY END >>
