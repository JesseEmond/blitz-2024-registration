<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2fbe14e4d18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2fbe14e4d18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2fbe14e4d1c @    4 : c4                Star0 
 2591 S> 0x2fbe14e4d1d @    5 : a9                Return 
Constant pool (size = 1)
0x2fbe14e4d21: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 1
           0: 0x02fbe14e4d39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x02fbe14e6a59 <ByteArray[7]>
0x02fbe14e4d39 points to: [0x2fbe14e4da8]
=== [0x2fbe14e4da8] DISASSEMBLY ===
Parameter count 6
Register count 13
Frame size 104
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2fbe14e4da8 @    0 : 83 00 04          CreateFunctionContext [0], [4]
         0x2fbe14e4dab @    3 : 1a f8             PushContext r2
         0x2fbe14e4dad @    5 : 10                LdaTheHole 
         0x2fbe14e4dae @    6 : 25 02             StaCurrentContextSlot [2]
         0x2fbe14e4db0 @    8 : 10                LdaTheHole 
         0x2fbe14e4db1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x2fbe14e4db3 @   11 : 10                LdaTheHole 
         0x2fbe14e4db4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x2fbe14e4db6 @   14 : 10                LdaTheHole 
         0x2fbe14e4db7 @   15 : 25 05             StaCurrentContextSlot [5]
   76 S> 0x2fbe14e4db9 @   17 : 21 01 00          LdaGlobal [1], [0]
         0x2fbe14e4dbc @   20 : c0                Star4 
   83 E> 0x2fbe14e4dbd @   21 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x2fbe14e4dc1 @   25 : c1                Star3 
         0x2fbe14e4dc2 @   26 : 13 03             LdaConstant [3]
         0x2fbe14e4dc4 @   28 : be                Star6 
   98 E> 0x2fbe14e4dc5 @   29 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2fbe14e4dc9 @   33 : bd                Star7 
         0x2fbe14e4dca @   34 : 19 03 f5          Mov a0, r5
   83 E> 0x2fbe14e4dcd @   37 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x2fbe14e4dd2 @   42 : 0e                LdaUndefined 
         0x2fbe14e4dd3 @   43 : bf                Star5 
  178 E> 0x2fbe14e4dd4 @   44 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x2fbe14e4dd8 @   48 : 0b f5             Ldar r5
  154 E> 0x2fbe14e4dda @   50 : 32 03 06 09       SetNamedProperty a0, [6], [9]
  211 S> 0x2fbe14e4dde @   54 : 13 07             LdaConstant [7]
         0x2fbe14e4de0 @   56 : c0                Star4 
  211 E> 0x2fbe14e4de1 @   57 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
  211 E> 0x2fbe14e4de5 @   61 : 25 02             StaCurrentContextSlot [2]
  259 S> 0x2fbe14e4de7 @   63 : 13 08             LdaConstant [8]
         0x2fbe14e4de9 @   65 : c0                Star4 
  259 E> 0x2fbe14e4dea @   66 : 62 04 f6 0d       CallUndefinedReceiver1 a1, r4, [13]
         0x2fbe14e4dee @   70 : c4                Star0 
  301 S> 0x2fbe14e4def @   71 : 13 09             LdaConstant [9]
         0x2fbe14e4df1 @   73 : c0                Star4 
  301 E> 0x2fbe14e4df2 @   74 : 62 04 f6 0f       CallUndefinedReceiver1 a1, r4, [15]
  301 E> 0x2fbe14e4df6 @   78 : 25 03             StaCurrentContextSlot [3]
  339 S> 0x2fbe14e4df8 @   80 : 13 0a             LdaConstant [10]
         0x2fbe14e4dfa @   82 : c0                Star4 
  339 E> 0x2fbe14e4dfb @   83 : 62 04 f6 11       CallUndefinedReceiver1 a1, r4, [17]
  339 E> 0x2fbe14e4dff @   87 : 25 04             StaCurrentContextSlot [4]
         0x2fbe14e4e01 @   89 : 10                LdaTheHole 
         0x2fbe14e4e02 @   90 : be                Star6 
         0x2fbe14e4e03 @   91 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x2fbe14e4e07 @   95 : c1                Star3 
         0x2fbe14e4e08 @   96 : 13 0b             LdaConstant [11]
         0x2fbe14e4e0a @   98 : c0                Star4 
         0x2fbe14e4e0b @   99 : 80 0d 01 02       CreateClosure [13], [1], #2
         0x2fbe14e4e0f @  103 : bd                Star7 
         0x2fbe14e4e10 @  104 : 80 0e 02 02       CreateClosure [14], [2], #2
         0x2fbe14e4e14 @  108 : bc                Star8 
         0x2fbe14e4e15 @  109 : 19 f7 f5          Mov r3, r5
         0x2fbe14e4e18 @  112 : 65 28 00 f6 05    CallRuntime [DefineClass], r4-r8
         0x2fbe14e4e1d @  117 : c0                Star4 
         0x2fbe14e4e1e @  118 : 19 f5 f9          Mov r5, r1
 1507 S> 0x2fbe14e4e21 @  121 : 0b f9             Ldar r1
 1529 E> 0x2fbe14e4e23 @  123 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x2fbe14e4e27 @  127 : 81 0f             CreateBlockContext [15]
         0x2fbe14e4e29 @  129 : 1a f7             PushContext r3
         0x2fbe14e4e2b @  131 : 10                LdaTheHole 
         0x2fbe14e4e2c @  132 : 25 04             StaCurrentContextSlot [4]
 1580 E> 0x2fbe14e4e2e @  134 : 2d fa 11 13       GetNamedProperty r0, [17], [19]
         0x2fbe14e4e32 @  138 : bd                Star7 
         0x2fbe14e4e33 @  139 : 80 12 03 02       CreateClosure [18], [3], #2
         0x2fbe14e4e37 @  143 : c0                Star4 
         0x2fbe14e4e38 @  144 : 13 10             LdaConstant [16]
         0x2fbe14e4e3a @  146 : bf                Star5 
         0x2fbe14e4e3b @  147 : 80 13 04 02       CreateClosure [19], [4], #2
         0x2fbe14e4e3f @  151 : bc                Star8 
         0x2fbe14e4e40 @  152 : 80 14 05 02       CreateClosure [20], [5], #2
         0x2fbe14e4e44 @  156 : bb                Star9 
         0x2fbe14e4e45 @  157 : 80 15 06 02       CreateClosure [21], [6], #2
         0x2fbe14e4e49 @  161 : ba                Star10 
         0x2fbe14e4e4a @  162 : 80 16 07 02       CreateClosure [22], [7], #2
         0x2fbe14e4e4e @  166 : b9                Star11 
         0x2fbe14e4e4f @  167 : 80 17 08 02       CreateClosure [23], [8], #2
         0x2fbe14e4e53 @  171 : b8                Star12 
         0x2fbe14e4e54 @  172 : 19 f6 f4          Mov r4, r6
         0x2fbe14e4e57 @  175 : 65 28 00 f5 08    CallRuntime [DefineClass], r5-r12
         0x2fbe14e4e5c @  180 : 25 02             StaCurrentContextSlot [2]
         0x2fbe14e4e5e @  182 : bf                Star5 
         0x2fbe14e4e5f @  183 : 0b f4             Ldar r6
         0x2fbe14e4e61 @  185 : 25 03             StaCurrentContextSlot [3]
         0x2fbe14e4e63 @  187 : 25 04             StaCurrentContextSlot [4]
         0x2fbe14e4e65 @  189 : 1b f7             PopContext r3
 1546 E> 0x2fbe14e4e67 @  191 : 25 05             StaCurrentContextSlot [5]
 2528 S> 0x2fbe14e4e69 @  193 : 17 05             LdaImmutableCurrentContextSlot [5]
 2543 E> 0x2fbe14e4e6b @  195 : 32 03 06 09       SetNamedProperty a0, [6], [9]
         0x2fbe14e4e6f @  199 : 0e                LdaUndefined 
 2588 S> 0x2fbe14e4e70 @  200 : a9                Return 
Constant pool (size = 24)
0x2fbe14e4e79: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 24
           0: 0x02fbe14e4f49 <ScopeInfo FUNCTION_SCOPE>
           1: 0x30394e4c5ab9 <String[6]: #Object>
           2: 0x30394e4c4c11 <String[14]: #defineProperty>
           3: 0x02fbe14e5039 <String[10]: #__esModule>
           4: 0x02fbe14e5059 <ObjectBoilerplateDescription[3]>
           5: 0x02fbe14e5081 <String[13]: #MeteorFactory>
           6: 0x02fbe14e5021 <String[6]: #Meteor>
           7: 0x02fbe14e50a1 <String[14]: #./meteor_infos>
           8: 0x02fbe14e50c1 <String[12]: #./projectile>
           9: 0x02fbe14e50e1 <String[8]: #./random>
          10: 0x02fbe14e50f9 <String[8]: #./vector>
          11: 0x02fbe14e5111 <FixedArray[7]>
          12: 0x02fbe14e52c1 <SharedFunctionInfo MeteorFactory>
          13: 0x02fbe14e55c1 <SharedFunctionInfo build>
          14: 0x02fbe14e59c9 <SharedFunctionInfo buildMeteorsAfterExplosion>
          15: 0x02fbe14e5fb9 <ScopeInfo CLASS_SCOPE>
          16: 0x02fbe14e67f9 <FixedArray[7]>
          17: 0x02fbe14e69c1 <String[10]: #Projectile>
          18: 0x02fbe14e6039 <SharedFunctionInfo Meteor>
          19: 0x02fbe14e5e01 <SharedFunctionInfo BuildDebug>
          20: 0x02fbe14e6271 <SharedFunctionInfo get score>
          21: 0x02fbe14e63d1 <SharedFunctionInfo getMeteorsAfterExplosion>
          22: 0x02fbe14e6519 <SharedFunctionInfo serializeForViewer>
          23: 0x02fbe14e6679 <SharedFunctionInfo serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 66)
0x02fbe14e69e1 <ByteArray[66]>
Boilerplate at 0x02fbe14e5059: 
0x2fbe14e5059: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x30394e4c2059 <Map>
 - length: 3
           0: 8
           1: 0x30394e4c6419 <String[5]: #value>
           2: 0x30394e4c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x02fbe14e5111 has 7 elements:
0x2fbe14e5111: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 7
           0: 5
           1: 0x02fbe14e5159 <DescriptorArray[4]>
           2: 0x30394e4c3301 <NumberDictionary[7]>
           3: 0x30394e4c1329 <FixedArray[0]>
           4: 0x02fbe14e5219 <DescriptorArray[3]>
           5: 0x30394e4c3301 <NumberDictionary[7]>
           6: 0x30394e4c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0x2fbe14e5159: [DescriptorArray] in OldSpace
 - map: 0x30394e4c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x30394e4c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x3415c7434fe1 <AccessorInfo>
  [1]: 0x30394e4c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x3415c7434f71 <AccessorInfo>
  [2]: 0x30394e4c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x3415c7435051 <AccessorInfo>
  [3]: 0x30394e4c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x02fbe14e5201 <ClassPositions 360, 1506>
Element[2]
0x30394e4c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x30394e4c1329: [FixedArray] in ReadOnlySpace
 - map: 0x30394e4c12e1 <Map>
 - length: 0
Element[4]
0x2fbe14e5219: [DescriptorArray] in OldSpace
 - map: 0x30394e4c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 3
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x30394e4c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x2fbe14e5279: [String] in OldSpace: #build (const data descriptor, p: 0, attrs: [W_C]) @ 3
  [2]: 0x2fbe14e5291: [String] in OldSpace: #buildMeteorsAfterExplosion (const data descriptor, p: 2, attrs: [W_C]) @ 4
Element[5]
0x30394e4c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x30394e4c1329: [FixedArray] in ReadOnlySpace
 - map: 0x30394e4c12e1 <Map>
 - length: 0
0x02fbe14e52c1 points to: [0x2fbe14e5330]
=== [0x2fbe14e5330] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
         0x2fbe14e5330 @    0 : 0b 03             Ldar a0
         0x2fbe14e5332 @    2 : 9d 23             JumpIfNotUndefined [35] (0x2fbe14e5355 @ 37)
         0x2fbe14e5334 @    4 : 17 03             LdaImmutableCurrentContextSlot [3]
  408 E> 0x2fbe14e5336 @    6 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2fbe14e5338 @    8 : c3                Star1 
  417 E> 0x2fbe14e5339 @    9 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x2fbe14e533d @   13 : c3                Star1 
  424 E> 0x2fbe14e533e @   14 : 21 02 02          LdaGlobal [2], [2]
         0x2fbe14e5341 @   17 : c1                Star3 
  429 E> 0x2fbe14e5342 @   18 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x2fbe14e5346 @   22 : c2                Star2 
  429 E> 0x2fbe14e5347 @   23 : 5d f8 f7 06       CallProperty0 r2, r3, [6]
         0x2fbe14e534b @   27 : c2                Star2 
         0x2fbe14e534c @   28 : 0b f9             Ldar r1
  404 E> 0x2fbe14e534e @   30 : 69 f9 f8 01 08    Construct r1, r2-r2, [8]
         0x2fbe14e5353 @   35 : 8a 04             Jump [4] (0x2fbe14e5357 @ 39)
         0x2fbe14e5355 @   37 : 0b 03             Ldar a0
         0x2fbe14e5357 @   39 : c4                Star0 
  450 S> 0x2fbe14e5358 @   40 : 0b fa             Ldar r0
  459 E> 0x2fbe14e535a @   42 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0x2fbe14e535e @   46 : 0e                LdaUndefined 
  470 S> 0x2fbe14e535f @   47 : a9                Return 
Constant pool (size = 5)
0x2fbe14e5361: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 5
           0: 0x02fbe14e4ff1 <String[8]: #random_1>
           1: 0x02fbe14e5399 <String[6]: #Random>
           2: 0x3415c741a991 <String[4]: #Math>
           3: 0x3415c741aba1 <String[6]: #random>
           4: 0x3415c7428a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 22)
0x02fbe14e53f9 <ByteArray[22]>
0x02fbe14e55c1 points to: [0x2fbe14e5630]
=== [0x2fbe14e5630] DISASSEMBLY ===
Parameter count 4
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
         0x2fbe14e5630 @    0 : 19 03 fa          Mov a0, r0
         0x2fbe14e5633 @    3 : 0b 04             Ldar a1
         0x2fbe14e5635 @    5 : 9d 19             JumpIfNotUndefined [25] (0x2fbe14e564e @ 30)
         0x2fbe14e5637 @    7 : 17 04             LdaImmutableCurrentContextSlot [4]
  507 E> 0x2fbe14e5639 @    9 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2fbe14e563b @   11 : bd                Star7 
  516 E> 0x2fbe14e563c @   12 : 2d f3 01 00       GetNamedProperty r7, [1], [0]
         0x2fbe14e5640 @   16 : bd                Star7 
         0x2fbe14e5641 @   17 : 0c                LdaZero 
         0x2fbe14e5642 @   18 : bc                Star8 
         0x2fbe14e5643 @   19 : 0c                LdaZero 
         0x2fbe14e5644 @   20 : bb                Star9 
         0x2fbe14e5645 @   21 : 0b f3             Ldar r7
  503 E> 0x2fbe14e5647 @   23 : 69 f3 f2 02 02    Construct r7, r8-r9, [2]
         0x2fbe14e564c @   28 : 8a 04             Jump [4] (0x2fbe14e5650 @ 32)
         0x2fbe14e564e @   30 : 0b 04             Ldar a1
         0x2fbe14e5650 @   32 : c3                Star1 
         0x2fbe14e5651 @   33 : 0b 05             Ldar a2
         0x2fbe14e5653 @   35 : 9d 12             JumpIfNotUndefined [18] (0x2fbe14e5665 @ 53)
         0x2fbe14e5655 @   37 : 17 02             LdaImmutableCurrentContextSlot [2]
  543 E> 0x2fbe14e5657 @   39 : aa 02             ThrowReferenceErrorIfHole [2]
         0x2fbe14e5659 @   41 : bd                Star7 
  558 E> 0x2fbe14e565a @   42 : 2d f3 03 04       GetNamedProperty r7, [3], [4]
         0x2fbe14e565e @   46 : bd                Star7 
  569 E> 0x2fbe14e565f @   47 : 2d f3 04 06       GetNamedProperty r7, [4], [6]
         0x2fbe14e5663 @   51 : 8a 04             Jump [4] (0x2fbe14e5667 @ 55)
         0x2fbe14e5665 @   53 : 0b 05             Ldar a2
         0x2fbe14e5667 @   55 : c2                Star2 
  606 S> 0x2fbe14e5668 @   56 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fbe14e566a @   58 : aa 02             ThrowReferenceErrorIfHole [2]
         0x2fbe14e566c @   60 : bc                Star8 
  621 E> 0x2fbe14e566d @   61 : 2d f2 05 08       GetNamedProperty r8, [5], [8]
         0x2fbe14e5671 @   65 : bc                Star8 
  639 E> 0x2fbe14e5672 @   66 : 2d f2 06 0a       GetNamedProperty r8, [6], [10]
         0x2fbe14e5676 @   70 : bd                Star7 
  639 E> 0x2fbe14e5677 @   71 : 5e f3 f2 f8 0c    CallProperty1 r7, r8, r2, [12]
         0x2fbe14e567c @   76 : c1                Star3 
  664 S> 0x2fbe14e567d @   77 : 1d                TestUndetectable 
         0x2fbe14e567e @   78 : 99 1e             JumpIfFalse [30] (0x2fbe14e569c @ 108)
  703 S> 0x2fbe14e5680 @   80 : 21 07 0e          LdaGlobal [7], [14]
         0x2fbe14e5683 @   83 : bd                Star7 
         0x2fbe14e5684 @   84 : 13 08             LdaConstant [8]
         0x2fbe14e5686 @   86 : bc                Star8 
         0x2fbe14e5687 @   87 : 0b f8             Ldar r2
  738 E> 0x2fbe14e5689 @   89 : 77                ToString 
         0x2fbe14e568a @   90 : 39 f2 10          Add r8, [16]
         0x2fbe14e568d @   93 : bc                Star8 
         0x2fbe14e568e @   94 : 13 09             LdaConstant [9]
         0x2fbe14e5690 @   96 : 39 f2 10          Add r8, [16]
         0x2fbe14e5693 @   99 : bc                Star8 
         0x2fbe14e5694 @  100 : 0b f3             Ldar r7
  709 E> 0x2fbe14e5696 @  102 : 69 f3 f2 01 11    Construct r7, r8-r8, [17]
  703 E> 0x2fbe14e569b @  107 : a7                Throw 
  793 S> 0x2fbe14e569c @  108 : 19 f9 f6          Mov r1, r4
  830 S> 0x2fbe14e569f @  111 : 2d f6 0a 13       GetNamedProperty r4, [10], [19]
         0x2fbe14e56a3 @  115 : bd                Star7 
         0x2fbe14e56a4 @  116 : 0c                LdaZero 
  840 E> 0x2fbe14e56a5 @  117 : 6e f3 15          TestGreaterThan r7, [21]
         0x2fbe14e56a8 @  120 : 99 4a             JumpIfFalse [74] (0x2fbe14e56f2 @ 194)
  859 E> 0x2fbe14e56aa @  122 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x2fbe14e56ae @  126 : 97 44             JumpIfToBooleanFalse [68] (0x2fbe14e56f2 @ 194)
  908 S> 0x2fbe14e56b0 @  128 : 13 0c             LdaConstant [12]
         0x2fbe14e56b2 @  130 : bf                Star5 
  946 S> 0x2fbe14e56b3 @  131 : 0d 01             LdaSmi [1]
         0x2fbe14e56b5 @  133 : bd                Star7 
  957 E> 0x2fbe14e56b6 @  134 : 2d 02 0d 1a       GetNamedProperty <this>, [13], [26]
         0x2fbe14e56ba @  138 : bb                Star9 
  961 E> 0x2fbe14e56bb @  139 : 2d f1 0e 1c       GetNamedProperty r9, [14], [28]
         0x2fbe14e56bf @  143 : bc                Star8 
  961 E> 0x2fbe14e56c0 @  144 : 5d f2 f1 1e       CallProperty0 r8, r9, [30]
         0x2fbe14e56c4 @  148 : bc                Star8 
         0x2fbe14e56c5 @  149 : 0b f5             Ldar r5
  971 E> 0x2fbe14e56c7 @  151 : 3b f2 20          Mul r8, [32]
  993 E> 0x2fbe14e56ca @  154 : 47 02 21          MulSmi [2], [33]
  948 E> 0x2fbe14e56cd @  157 : 39 f3 19          Add r7, [25]
         0x2fbe14e56d0 @  160 : bd                Star7 
         0x2fbe14e56d1 @  161 : 0b f5             Ldar r5
  998 E> 0x2fbe14e56d3 @  163 : 3a f3 18          Sub r7, [24]
         0x2fbe14e56d6 @  166 : be                Star6 
 1065 S> 0x2fbe14e56d7 @  167 : 2d f6 0f 22       GetNamedProperty r4, [15], [34]
         0x2fbe14e56db @  171 : bc                Star8 
 1076 E> 0x2fbe14e56dc @  172 : 2d f2 10 24       GetNamedProperty r8, [16], [36]
         0x2fbe14e56e0 @  176 : bd                Star7 
 1097 E> 0x2fbe14e56e1 @  177 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x2fbe14e56e5 @  181 : bb                Star9 
         0x2fbe14e56e6 @  182 : 0b f4             Ldar r6
 1103 E> 0x2fbe14e56e8 @  184 : 3b f1 26          Mul r9, [38]
         0x2fbe14e56eb @  187 : bb                Star9 
 1076 E> 0x2fbe14e56ec @  188 : 5e f3 f2 f1 27    CallProperty1 r7, r8, r9, [39]
         0x2fbe14e56f1 @  193 : c0                Star4 
 1138 S> 0x2fbe14e56f2 @  194 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x2fbe14e56f4 @  196 : aa 11             ThrowReferenceErrorIfHole [17]
         0x2fbe14e56f6 @  198 : bd                Star7 
         0x2fbe14e56f7 @  199 : 0b f3             Ldar r7
         0x2fbe14e56f9 @  201 : 19 fa f2          Mov r0, r8
         0x2fbe14e56fc @  204 : 19 f6 f1          Mov r4, r9
         0x2fbe14e56ff @  207 : 19 f8 f0          Mov r2, r10
         0x2fbe14e5702 @  210 : 19 f7 ef          Mov r3, r11
 1145 E> 0x2fbe14e5705 @  213 : 69 f3 f2 04 29    Construct r7, r8-r11, [41]
 1207 S> 0x2fbe14e570a @  218 : a9                Return 
Constant pool (size = 18)
0x2fbe14e5711: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 18
           0: 0x02fbe14e5009 <String[8]: #vector_1>
           1: 0x02fbe14e57b1 <String[6]: #Vector>
           2: 0x02fbe14e4fd1 <String[14]: #meteor_infos_1>
           3: 0x02fbe14e57c9 <String[10]: #MeteorType>
           4: 0x02fbe14e57e9 <String[5]: #Large>
           5: 0x02fbe14e5801 <String[17]: #METEOR_TYPE_INFOS>
           6: 0x30394e4c50e9 <String[3]: #get>
           7: 0x30394e4c4de1 <String[5]: #Error>
           8: 0x02fbe14e5829 <String[16]: #Unknown meteor '>
           9: 0x3415c7434c49 <String[1]: #'>
          10: 0x02fbe14e5861 <String[9]: #magnitude>
          11: 0x02fbe14e5881 <String[5]: #speed>
          12: 0x02fbe14e5899 <HeapNumber 0.2>
          13: 0x3415c7428a51 <String[3]: #rng>
          14: 0x3415c741aba1 <String[6]: #random>
          15: 0x02fbe14e58a9 <String[10]: #normalized>
          16: 0x02fbe14e58c9 <String[8]: #multiply>
          17: 0x02fbe14e5021 <String[6]: #Meteor>
Handler Table (size = 0)
Source Position Table (size = 88)
0x02fbe14e58e1 <ByteArray[88]>
0x02fbe14e59c9 points to: [0x2fbe14e5a38]
=== [0x2fbe14e5a38] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 1244 E> 0x2fbe14e5a38 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x2fbe14e5a3b @    3 : 1a fa             PushContext r0
         0x2fbe14e5a3d @    5 : 0b 02             Ldar <this>
         0x2fbe14e5a3f @    7 : 25 02             StaCurrentContextSlot [2]
         0x2fbe14e5a41 @    9 : 0b 03             Ldar a0
         0x2fbe14e5a43 @   11 : 25 04             StaCurrentContextSlot [4]
         0x2fbe14e5a45 @   13 : 0b 04             Ldar a1
         0x2fbe14e5a47 @   15 : 25 03             StaCurrentContextSlot [3]
 1294 S> 0x2fbe14e5a49 @   17 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x2fbe14e5a4b @   19 : c1                Star3 
 1320 E> 0x2fbe14e5a4c @   20 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x2fbe14e5a50 @   24 : c2                Star2 
 1320 E> 0x2fbe14e5a51 @   25 : 5d f8 f7 02       CallProperty0 r2, r3, [2]
         0x2fbe14e5a55 @   29 : c2                Star2 
 1346 E> 0x2fbe14e5a56 @   30 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x2fbe14e5a5a @   34 : c3                Star1 
         0x2fbe14e5a5b @   35 : 80 03 00 02       CreateClosure [3], [0], #2
         0x2fbe14e5a5f @   39 : c1                Star3 
 1347 E> 0x2fbe14e5a60 @   40 : 5e f9 f8 f7 06    CallProperty1 r1, r2, r3, [6]
 1498 S> 0x2fbe14e5a65 @   45 : a9                Return 
Constant pool (size = 4)
0x2fbe14e5a69: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 4
           0: 0x02fbe14e5a99 <ScopeInfo FUNCTION_SCOPE>
           1: 0x02fbe14e5b69 <String[24]: #getMeteorsAfterExplosion>
           2: 0x3415c7409ea9 <String[3]: #map>
           3: 0x02fbe14e5ba9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 19)
0x02fbe14e5dc1 <ByteArray[19]>
0x02fbe14e5ba9 points to: [0x2fbe14e5c18]
=== [0x2fbe14e5c18] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1373 S> 0x2fbe14e5c18 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fbe14e5c1a @    2 : c3                Star1 
 1373 E> 0x2fbe14e5c1b @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x2fbe14e5c1f @    7 : c4                Star0 
         0x2fbe14e5c20 @    8 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x2fbe14e5c22 @   10 : c2                Star2 
         0x2fbe14e5c23 @   11 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x2fbe14e5c25 @   13 : bf                Star5 
 1417 E> 0x2fbe14e5c26 @   14 : 2d f5 01 02       GetNamedProperty r5, [1], [2]
         0x2fbe14e5c2a @   18 : bf                Star5 
 1426 E> 0x2fbe14e5c2b @   19 : 2d f5 02 04       GetNamedProperty r5, [2], [4]
         0x2fbe14e5c2f @   23 : c0                Star4 
 1445 E> 0x2fbe14e5c30 @   24 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
         0x2fbe14e5c34 @   28 : be                Star6 
 1426 E> 0x2fbe14e5c35 @   29 : 5e f6 f5 f4 08    CallProperty1 r4, r5, r6, [8]
         0x2fbe14e5c3a @   34 : c0                Star4 
 1457 E> 0x2fbe14e5c3b @   35 : 2d f6 04 0a       GetNamedProperty r4, [4], [10]
         0x2fbe14e5c3f @   39 : c1                Star3 
         0x2fbe14e5c40 @   40 : 13 05             LdaConstant [5]
         0x2fbe14e5c42 @   42 : bf                Star5 
 1458 E> 0x2fbe14e5c43 @   43 : 5e f7 f6 f5 0c    CallProperty1 r3, r4, r5, [12]
         0x2fbe14e5c48 @   48 : c1                Star3 
 1485 E> 0x2fbe14e5c49 @   49 : 2d 03 06 0e       GetNamedProperty a0, [6], [14]
         0x2fbe14e5c4d @   53 : c0                Star4 
 1373 E> 0x2fbe14e5c4e @   54 : 5c fa f9 04 10    CallProperty r0, r1-r4, [16]
 1496 S> 0x2fbe14e5c53 @   59 : a9                Return 
Constant pool (size = 7)
0x2fbe14e5c59: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 7
           0: 0x02fbe14e5279 <String[5]: #build>
           1: 0x02fbe14e5ca1 <String[8]: #velocity>
           2: 0x02fbe14e5cb9 <String[6]: #rotate>
           3: 0x02fbe14e5cd1 <String[11]: #rotationRad>
           4: 0x02fbe14e58c9 <String[8]: #multiply>
           5: 0x02fbe14e5cf1 <HeapNumber 0.8>
           6: 0x02fbe14e5d01 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 28)
0x02fbe14e5d21 <ByteArray[28]>
Array at 0x02fbe14e67f9 has 7 elements:
0x2fbe14e67f9: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 7
           0: 8
           1: 0x02fbe14e6841 <DescriptorArray[5]>
           2: 0x30394e4c3301 <NumberDictionary[7]>
           3: 0x30394e4c1329 <FixedArray[0]>
           4: 0x02fbe14e6919 <DescriptorArray[5]>
           5: 0x30394e4c3301 <NumberDictionary[7]>
           6: 0x30394e4c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x8 (8)
Element[1]
0x2fbe14e6841: [DescriptorArray] in OldSpace
 - map: 0x30394e4c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x30394e4c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x3415c7434fe1 <AccessorInfo>
  [1]: 0x30394e4c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x3415c7434f71 <AccessorInfo>
  [2]: 0x30394e4c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x3415c7435051 <AccessorInfo>
  [3]: 0x30394e4c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 4, attrs: [W_C]) @ 0x02fbe14e6901 <ClassPositions 1546, 2527>
  [4]: 0x2fbe14e5f99: [String] in OldSpace: #BuildDebug (const data descriptor, p: 2, attrs: [W_C]) @ 3
Element[2]
0x30394e4c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x30394e4c1329: [FixedArray] in ReadOnlySpace
 - map: 0x30394e4c12e1 <Map>
 - length: 0
Element[4]
0x2fbe14e6919: [DescriptorArray] in OldSpace
 - map: 0x30394e4c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x30394e4c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 2, attrs: [W_C]) @ 1
  [1]: 0x2fbe14e6311: [String] in OldSpace: #score (const accessor descriptor, p: 0, attrs: [W_C]) @ 0x02fbe14e69a9 <AccessorPair>(get: 4, set: 0x30394e4c1339 <null>)
  [2]: 0x2fbe14e5b69: [String] in OldSpace: #getMeteorsAfterExplosion (const data descriptor, p: 1, attrs: [W_C]) @ 5
  [3]: 0x2fbe14e65c9: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 4, attrs: [W_C]) @ 6
  [4]: 0x2fbe14e6729: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 3, attrs: [W_C]) @ 7
Element[5]
0x30394e4c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x30394e4c1329: [FixedArray] in ReadOnlySpace
 - map: 0x30394e4c12e1 <Map>
 - length: 0
0x02fbe14e6039 points to: [0x2fbe14e60a8]
=== [0x2fbe14e60a8] DISASSEMBLY ===
Parameter count 5
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
         0x2fbe14e60a8 @    0 : 19 fe f9          Mov <closure>, r1
         0x2fbe14e60ab @    3 : 19 03 f8          Mov a0, r2
         0x2fbe14e60ae @    6 : 0b 04             Ldar a1
         0x2fbe14e60b0 @    8 : 9d 1b             JumpIfNotUndefined [27] (0x2fbe14e60cb @ 35)
         0x2fbe14e60b2 @   10 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1818 E> 0x2fbe14e60b6 @   14 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2fbe14e60b8 @   16 : be                Star6 
 1827 E> 0x2fbe14e60b9 @   17 : 2d f4 01 00       GetNamedProperty r6, [1], [0]
         0x2fbe14e60bd @   21 : be                Star6 
         0x2fbe14e60be @   22 : 0c                LdaZero 
         0x2fbe14e60bf @   23 : bd                Star7 
         0x2fbe14e60c0 @   24 : 0c                LdaZero 
         0x2fbe14e60c1 @   25 : bc                Star8 
         0x2fbe14e60c2 @   26 : 0b f4             Ldar r6
 1814 E> 0x2fbe14e60c4 @   28 : 69 f4 f3 02 02    Construct r6, r7-r8, [2]
         0x2fbe14e60c9 @   33 : 8a 04             Jump [4] (0x2fbe14e60cd @ 37)
         0x2fbe14e60cb @   35 : 0b 04             Ldar a1
         0x2fbe14e60cd @   37 : c1                Star3 
         0x2fbe14e60ce @   38 : 0b 05             Ldar a2
         0x2fbe14e60d0 @   40 : 9d 14             JumpIfNotUndefined [20] (0x2fbe14e60e4 @ 60)
         0x2fbe14e60d2 @   42 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1854 E> 0x2fbe14e60d6 @   46 : aa 02             ThrowReferenceErrorIfHole [2]
         0x2fbe14e60d8 @   48 : be                Star6 
 1869 E> 0x2fbe14e60d9 @   49 : 2d f4 03 04       GetNamedProperty r6, [3], [4]
         0x2fbe14e60dd @   53 : be                Star6 
 1880 E> 0x2fbe14e60de @   54 : 2d f4 04 06       GetNamedProperty r6, [4], [6]
         0x2fbe14e60e2 @   58 : 8a 04             Jump [4] (0x2fbe14e60e6 @ 62)
         0x2fbe14e60e4 @   60 : 0b 05             Ldar a2
         0x2fbe14e60e6 @   62 : c0                Star4 
         0x2fbe14e60e7 @   63 : 19 06 f5          Mov a3, r5
 1910 S> 0x2fbe14e60ea @   66 : 0b f9             Ldar r1
         0x2fbe14e60ec @   68 : 5a f3             GetSuperConstructor r7
         0x2fbe14e60ee @   70 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1936 E> 0x2fbe14e60f2 @   74 : aa 02             ThrowReferenceErrorIfHole [2]
         0x2fbe14e60f4 @   76 : b9                Star11 
 1951 E> 0x2fbe14e60f5 @   77 : 2d ef 05 08       GetNamedProperty r11, [5], [8]
         0x2fbe14e60f9 @   81 : b9                Star11 
 1969 E> 0x2fbe14e60fa @   82 : 2d ef 06 0a       GetNamedProperty r11, [6], [10]
         0x2fbe14e60fe @   86 : ba                Star10 
 1969 E> 0x2fbe14e60ff @   87 : 5e f0 ef f6 0c    CallProperty1 r10, r11, r4, [12]
         0x2fbe14e6104 @   92 : ba                Star10 
         0x2fbe14e6105 @   93 : 19 f9 f4          Mov r1, r6
         0x2fbe14e6108 @   96 : 19 f8 f2          Mov r2, r8
         0x2fbe14e610b @   99 : 19 f7 f1          Mov r3, r9
         0x2fbe14e610e @  102 : 9e 08             JumpIfUndefinedOrNull [8] (0x2fbe14e6116 @ 110)
 1984 E> 0x2fbe14e6110 @  104 : 2d f0 07 0e       GetNamedProperty r10, [7], [14]
         0x2fbe14e6114 @  108 : 8a 03             Jump [3] (0x2fbe14e6117 @ 111)
         0x2fbe14e6116 @  110 : 0e                LdaUndefined 
         0x2fbe14e6117 @  111 : ad f3             ThrowIfNotSuperConstructor r7
         0x2fbe14e6119 @  113 : ba                Star10 
         0x2fbe14e611a @  114 : 0b fa             Ldar r0
 1910 E> 0x2fbe14e611c @  116 : 69 f3 f2 03 10    Construct r7, r8-r10, [16]
         0x2fbe14e6121 @  121 : b9                Star11 
         0x2fbe14e6122 @  122 : 0b 02             Ldar <this>
         0x2fbe14e6124 @  124 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x2fbe14e6125 @  125 : 19 ef 02          Mov r11, <this>
 2001 S> 0x2fbe14e6128 @  128 : 0b 02             Ldar <this>
         0x2fbe14e612a @  130 : ab                ThrowSuperNotCalledIfHole 
         0x2fbe14e612b @  131 : 0b f6             Ldar r4
 2017 E> 0x2fbe14e612d @  133 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
 2039 S> 0x2fbe14e6131 @  137 : 0b 02             Ldar <this>
         0x2fbe14e6133 @  139 : ab                ThrowSuperNotCalledIfHole 
         0x2fbe14e6134 @  140 : 0b f5             Ldar r5
 2056 E> 0x2fbe14e6136 @  142 : 32 02 09 14       SetNamedProperty <this>, [9], [20]
         0x2fbe14e613a @  146 : 0b 02             Ldar <this>
         0x2fbe14e613c @  148 : ab                ThrowSuperNotCalledIfHole 
 2075 S> 0x2fbe14e613d @  149 : a9                Return 
Constant pool (size = 10)
0x2fbe14e6141: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 10
           0: 0x02fbe14e5009 <String[8]: #vector_1>
           1: 0x02fbe14e57b1 <String[6]: #Vector>
           2: 0x02fbe14e4fd1 <String[14]: #meteor_infos_1>
           3: 0x02fbe14e57c9 <String[10]: #MeteorType>
           4: 0x02fbe14e57e9 <String[5]: #Large>
           5: 0x02fbe14e5801 <String[17]: #METEOR_TYPE_INFOS>
           6: 0x30394e4c50e9 <String[3]: #get>
           7: 0x30394e4ca111 <String[4]: #size>
           8: 0x02fbe14e5d01 <String[10]: #meteorType>
           9: 0x02fbe14e61a1 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 42)
0x02fbe14e61c1 <ByteArray[42]>
0x02fbe14e5e01 points to: [0x2fbe14e5e70]
=== [0x2fbe14e5e70] DISASSEMBLY ===
Parameter count 4
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0x2fbe14e5e70 @    0 : 19 03 fa          Mov a0, r0
         0x2fbe14e5e73 @    3 : 0b 04             Ldar a1
         0x2fbe14e5e75 @    5 : 9d 1b             JumpIfNotUndefined [27] (0x2fbe14e5e90 @ 32)
         0x2fbe14e5e77 @    7 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1640 E> 0x2fbe14e5e7b @   11 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2fbe14e5e7d @   13 : c1                Star3 
 1649 E> 0x2fbe14e5e7e @   14 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x2fbe14e5e82 @   18 : c1                Star3 
         0x2fbe14e5e83 @   19 : 0c                LdaZero 
         0x2fbe14e5e84 @   20 : c0                Star4 
         0x2fbe14e5e85 @   21 : 0c                LdaZero 
         0x2fbe14e5e86 @   22 : bf                Star5 
         0x2fbe14e5e87 @   23 : 0b f7             Ldar r3
 1636 E> 0x2fbe14e5e89 @   25 : 69 f7 f6 02 02    Construct r3, r4-r5, [2]
         0x2fbe14e5e8e @   30 : 8a 04             Jump [4] (0x2fbe14e5e92 @ 34)
         0x2fbe14e5e90 @   32 : 0b 04             Ldar a1
         0x2fbe14e5e92 @   34 : c3                Star1 
         0x2fbe14e5e93 @   35 : 19 05 f8          Mov a2, r2
 1686 S> 0x2fbe14e5e96 @   38 : 16 04             LdaCurrentContextSlot [4]
         0x2fbe14e5e98 @   40 : aa 02             ThrowReferenceErrorIfHole [2]
         0x2fbe14e5e9a @   42 : c1                Star3 
         0x2fbe14e5e9b @   43 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1724 E> 0x2fbe14e5e9f @   47 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2fbe14e5ea1 @   49 : be                Star6 
 1739 E> 0x2fbe14e5ea2 @   50 : 2d f4 04 04       GetNamedProperty r6, [4], [4]
         0x2fbe14e5ea6 @   54 : be                Star6 
 1750 E> 0x2fbe14e5ea7 @   55 : 2d f4 05 06       GetNamedProperty r6, [5], [6]
         0x2fbe14e5eab @   59 : be                Star6 
         0x2fbe14e5eac @   60 : 0b f7             Ldar r3
         0x2fbe14e5eae @   62 : 19 fa f6          Mov r0, r4
         0x2fbe14e5eb1 @   65 : 19 f9 f5          Mov r1, r5
         0x2fbe14e5eb4 @   68 : 19 05 f3          Mov a2, r7
 1693 E> 0x2fbe14e5eb7 @   71 : 69 f7 f6 04 08    Construct r3, r4-r7, [8]
 1770 S> 0x2fbe14e5ebc @   76 : a9                Return 
Constant pool (size = 6)
0x2fbe14e5ec1: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 6
           0: 0x02fbe14e5009 <String[8]: #vector_1>
           1: 0x02fbe14e57b1 <String[6]: #Vector>
           2: 0x02fbe14e5021 <String[6]: #Meteor>
           3: 0x02fbe14e4fd1 <String[14]: #meteor_infos_1>
           4: 0x02fbe14e57c9 <String[10]: #MeteorType>
           5: 0x3415c742af39 <String[5]: #Debug>
Handler Table (size = 0)
Source Position Table (size = 25)
0x02fbe14e5f19 <ByteArray[25]>
0x02fbe14e6271 points to: [0x2fbe14e62e0]
=== [0x2fbe14e62e0] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2115 S> 0x2fbe14e62e0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2fbe14e62e4 @    4 : c4                Star0 
 2127 E> 0x2fbe14e62e5 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2fbe14e62e9 @    9 : 9e 04             JumpIfUndefinedOrNull [4] (0x2fbe14e62ed @ 13)
         0x2fbe14e62eb @   11 : 8a 03             Jump [3] (0x2fbe14e62ee @ 14)
         0x2fbe14e62ed @   13 : 0c                LdaZero 
 2138 S> 0x2fbe14e62ee @   14 : a9                Return 
Constant pool (size = 2)
0x2fbe14e62f1: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 2
           0: 0x02fbe14e61a1 <String[11]: #meteorInfos>
           1: 0x02fbe14e6311 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 9)
0x02fbe14e6329 <ByteArray[9]>
0x02fbe14e63d1 points to: [0x2fbe14e6440]
=== [0x2fbe14e6440] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2198 S> 0x2fbe14e6440 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2fbe14e6444 @    4 : c4                Star0 
 2210 E> 0x2fbe14e6445 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2fbe14e6449 @    9 : 9e 04             JumpIfUndefinedOrNull [4] (0x2fbe14e644d @ 13)
         0x2fbe14e644b @   11 : 8a 04             Jump [4] (0x2fbe14e644f @ 15)
         0x2fbe14e644d @   13 : 7b 04             CreateEmptyArrayLiteral [4]
 2229 S> 0x2fbe14e644f @   15 : a9                Return 
Constant pool (size = 2)
0x2fbe14e6451: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 2
           0: 0x02fbe14e61a1 <String[11]: #meteorInfos>
           1: 0x02fbe14e6471 <String[12]: #explodesInto>
Handler Table (size = 0)
Source Position Table (size = 9)
0x02fbe14e6491 <ByteArray[9]>
0x02fbe14e6519 points to: [0x2fbe14e6588]
=== [0x2fbe14e6588] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2271 S> 0x2fbe14e6588 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 2301 E> 0x2fbe14e658a @    2 : 2e 02 00 00       GetNamedPropertyFromSuper <this>, [0], [0]
         0x2fbe14e658e @    6 : c3                Star1 
 2301 E> 0x2fbe14e658f @    7 : 5b f9 02 01 02    CallAnyReceiver r1, <this>-<this>, [2]
         0x2fbe14e6594 @   12 : c3                Star1 
         0x2fbe14e6595 @   13 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2fbe14e6599 @   17 : c4                Star0 
 2352 E> 0x2fbe14e659a @   18 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2fbe14e659e @   22 : 33 fa 01 08       DefineNamedOwnProperty r0, [1], [8]
         0x2fbe14e65a2 @   26 : 0b fa             Ldar r0
 2374 S> 0x2fbe14e65a4 @   28 : a9                Return 
Constant pool (size = 2)
0x2fbe14e65a9: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 2
           0: 0x02fbe14e65c9 <String[18]: #serializeForViewer>
           1: 0x02fbe14e5d01 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 14)
0x02fbe14e65f1 <ByteArray[14]>
0x02fbe14e6679 points to: [0x2fbe14e66e8]
=== [0x2fbe14e66e8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2416 S> 0x2fbe14e66e8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 2446 E> 0x2fbe14e66ea @    2 : 2e 02 00 00       GetNamedPropertyFromSuper <this>, [0], [0]
         0x2fbe14e66ee @    6 : c3                Star1 
 2446 E> 0x2fbe14e66ef @    7 : 5b f9 02 01 02    CallAnyReceiver r1, <this>-<this>, [2]
         0x2fbe14e66f4 @   12 : c3                Star1 
         0x2fbe14e66f5 @   13 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2fbe14e66f9 @   17 : c4                Star0 
 2497 E> 0x2fbe14e66fa @   18 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2fbe14e66fe @   22 : 33 fa 01 08       DefineNamedOwnProperty r0, [1], [8]
         0x2fbe14e6702 @   26 : 0b fa             Ldar r0
 2519 S> 0x2fbe14e6704 @   28 : a9                Return 
Constant pool (size = 2)
0x2fbe14e6709: [FixedArray] in OldSpace
 - map: 0x30394e4c12e1 <Map>
 - length: 2
           0: 0x02fbe14e6729 <String[18]: #serializeForPlayer>
           1: 0x02fbe14e5d01 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 14)
0x02fbe14e6751 <ByteArray[14]>
<< OUTPUTTING DISASSEMBLY END >>
