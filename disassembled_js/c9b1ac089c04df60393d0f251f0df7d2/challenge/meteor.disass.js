<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0xf6291be4e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0xf6291be4e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0xf6291be4e4c @    4 : c4                Star0 
 2591 S> 0xf6291be4e4d @    5 : a9                Return 
Constant pool (size = 1)
0xf6291be4e51: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 1
           0: 0x0f6291be4e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x0f6291be6b89 <ByteArray[7]>
0x0f6291be4e69 points to: [0xf6291be4ed8]
=== [0xf6291be4ed8] DISASSEMBLY ===
Parameter count 6
Register count 13
Frame size 104
OSR urgency: 0
Bytecode age: 0
   10 E> 0xf6291be4ed8 @    0 : 83 00 04          CreateFunctionContext [0], [4]
         0xf6291be4edb @    3 : 1a f8             PushContext r2
         0xf6291be4edd @    5 : 10                LdaTheHole 
         0xf6291be4ede @    6 : 25 02             StaCurrentContextSlot [2]
         0xf6291be4ee0 @    8 : 10                LdaTheHole 
         0xf6291be4ee1 @    9 : 25 03             StaCurrentContextSlot [3]
         0xf6291be4ee3 @   11 : 10                LdaTheHole 
         0xf6291be4ee4 @   12 : 25 04             StaCurrentContextSlot [4]
         0xf6291be4ee6 @   14 : 10                LdaTheHole 
         0xf6291be4ee7 @   15 : 25 05             StaCurrentContextSlot [5]
   76 S> 0xf6291be4ee9 @   17 : 21 01 00          LdaGlobal [1], [0]
         0xf6291be4eec @   20 : c0                Star4 
   83 E> 0xf6291be4eed @   21 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0xf6291be4ef1 @   25 : c1                Star3 
         0xf6291be4ef2 @   26 : 13 03             LdaConstant [3]
         0xf6291be4ef4 @   28 : be                Star6 
   98 E> 0xf6291be4ef5 @   29 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0xf6291be4ef9 @   33 : bd                Star7 
         0xf6291be4efa @   34 : 19 03 f5          Mov a0, r5
   83 E> 0xf6291be4efd @   37 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0xf6291be4f02 @   42 : 0e                LdaUndefined 
         0xf6291be4f03 @   43 : bf                Star5 
  178 E> 0xf6291be4f04 @   44 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0xf6291be4f08 @   48 : 0b f5             Ldar r5
  154 E> 0xf6291be4f0a @   50 : 32 03 06 09       SetNamedProperty a0, [6], [9]
  211 S> 0xf6291be4f0e @   54 : 13 07             LdaConstant [7]
         0xf6291be4f10 @   56 : c0                Star4 
  211 E> 0xf6291be4f11 @   57 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
  211 E> 0xf6291be4f15 @   61 : 25 02             StaCurrentContextSlot [2]
  259 S> 0xf6291be4f17 @   63 : 13 08             LdaConstant [8]
         0xf6291be4f19 @   65 : c0                Star4 
  259 E> 0xf6291be4f1a @   66 : 62 04 f6 0d       CallUndefinedReceiver1 a1, r4, [13]
         0xf6291be4f1e @   70 : c4                Star0 
  301 S> 0xf6291be4f1f @   71 : 13 09             LdaConstant [9]
         0xf6291be4f21 @   73 : c0                Star4 
  301 E> 0xf6291be4f22 @   74 : 62 04 f6 0f       CallUndefinedReceiver1 a1, r4, [15]
  301 E> 0xf6291be4f26 @   78 : 25 03             StaCurrentContextSlot [3]
  339 S> 0xf6291be4f28 @   80 : 13 0a             LdaConstant [10]
         0xf6291be4f2a @   82 : c0                Star4 
  339 E> 0xf6291be4f2b @   83 : 62 04 f6 11       CallUndefinedReceiver1 a1, r4, [17]
  339 E> 0xf6291be4f2f @   87 : 25 04             StaCurrentContextSlot [4]
         0xf6291be4f31 @   89 : 10                LdaTheHole 
         0xf6291be4f32 @   90 : be                Star6 
         0xf6291be4f33 @   91 : 80 0c 00 02       CreateClosure [12], [0], #2
         0xf6291be4f37 @   95 : c1                Star3 
         0xf6291be4f38 @   96 : 13 0b             LdaConstant [11]
         0xf6291be4f3a @   98 : c0                Star4 
         0xf6291be4f3b @   99 : 80 0d 01 02       CreateClosure [13], [1], #2
         0xf6291be4f3f @  103 : bd                Star7 
         0xf6291be4f40 @  104 : 80 0e 02 02       CreateClosure [14], [2], #2
         0xf6291be4f44 @  108 : bc                Star8 
         0xf6291be4f45 @  109 : 19 f7 f5          Mov r3, r5
         0xf6291be4f48 @  112 : 65 28 00 f6 05    CallRuntime [DefineClass], r4-r8
         0xf6291be4f4d @  117 : c0                Star4 
         0xf6291be4f4e @  118 : 19 f5 f9          Mov r5, r1
 1507 S> 0xf6291be4f51 @  121 : 0b f9             Ldar r1
 1529 E> 0xf6291be4f53 @  123 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0xf6291be4f57 @  127 : 81 0f             CreateBlockContext [15]
         0xf6291be4f59 @  129 : 1a f7             PushContext r3
         0xf6291be4f5b @  131 : 10                LdaTheHole 
         0xf6291be4f5c @  132 : 25 04             StaCurrentContextSlot [4]
 1580 E> 0xf6291be4f5e @  134 : 2d fa 11 13       GetNamedProperty r0, [17], [19]
         0xf6291be4f62 @  138 : bd                Star7 
         0xf6291be4f63 @  139 : 80 12 03 02       CreateClosure [18], [3], #2
         0xf6291be4f67 @  143 : c0                Star4 
         0xf6291be4f68 @  144 : 13 10             LdaConstant [16]
         0xf6291be4f6a @  146 : bf                Star5 
         0xf6291be4f6b @  147 : 80 13 04 02       CreateClosure [19], [4], #2
         0xf6291be4f6f @  151 : bc                Star8 
         0xf6291be4f70 @  152 : 80 14 05 02       CreateClosure [20], [5], #2
         0xf6291be4f74 @  156 : bb                Star9 
         0xf6291be4f75 @  157 : 80 15 06 02       CreateClosure [21], [6], #2
         0xf6291be4f79 @  161 : ba                Star10 
         0xf6291be4f7a @  162 : 80 16 07 02       CreateClosure [22], [7], #2
         0xf6291be4f7e @  166 : b9                Star11 
         0xf6291be4f7f @  167 : 80 17 08 02       CreateClosure [23], [8], #2
         0xf6291be4f83 @  171 : b8                Star12 
         0xf6291be4f84 @  172 : 19 f6 f4          Mov r4, r6
         0xf6291be4f87 @  175 : 65 28 00 f5 08    CallRuntime [DefineClass], r5-r12
         0xf6291be4f8c @  180 : 25 02             StaCurrentContextSlot [2]
         0xf6291be4f8e @  182 : bf                Star5 
         0xf6291be4f8f @  183 : 0b f4             Ldar r6
         0xf6291be4f91 @  185 : 25 03             StaCurrentContextSlot [3]
         0xf6291be4f93 @  187 : 25 04             StaCurrentContextSlot [4]
         0xf6291be4f95 @  189 : 1b f7             PopContext r3
 1546 E> 0xf6291be4f97 @  191 : 25 05             StaCurrentContextSlot [5]
 2528 S> 0xf6291be4f99 @  193 : 17 05             LdaImmutableCurrentContextSlot [5]
 2543 E> 0xf6291be4f9b @  195 : 32 03 06 09       SetNamedProperty a0, [6], [9]
         0xf6291be4f9f @  199 : 0e                LdaUndefined 
 2588 S> 0xf6291be4fa0 @  200 : a9                Return 
Constant pool (size = 24)
0xf6291be4fa9: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 24
           0: 0x0f6291be5079 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2e1454c05ab9 <String[6]: #Object>
           2: 0x2e1454c04c11 <String[14]: #defineProperty>
           3: 0x0f6291be5169 <String[10]: #__esModule>
           4: 0x0f6291be5189 <ObjectBoilerplateDescription[3]>
           5: 0x0f6291be51b1 <String[13]: #MeteorFactory>
           6: 0x0f6291be5151 <String[6]: #Meteor>
           7: 0x0f6291be51d1 <String[14]: #./meteor_infos>
           8: 0x0f6291be51f1 <String[12]: #./projectile>
           9: 0x0f6291be5211 <String[8]: #./random>
          10: 0x0f6291be5229 <String[8]: #./vector>
          11: 0x0f6291be5241 <FixedArray[7]>
          12: 0x0f6291be53f1 <SharedFunctionInfo MeteorFactory>
          13: 0x0f6291be56f1 <SharedFunctionInfo build>
          14: 0x0f6291be5af9 <SharedFunctionInfo buildMeteorsAfterExplosion>
          15: 0x0f6291be60e9 <ScopeInfo CLASS_SCOPE>
          16: 0x0f6291be6929 <FixedArray[7]>
          17: 0x0f6291be6af1 <String[10]: #Projectile>
          18: 0x0f6291be6169 <SharedFunctionInfo Meteor>
          19: 0x0f6291be5f31 <SharedFunctionInfo BuildDebug>
          20: 0x0f6291be63a1 <SharedFunctionInfo get score>
          21: 0x0f6291be6501 <SharedFunctionInfo getMeteorsAfterExplosion>
          22: 0x0f6291be6649 <SharedFunctionInfo serializeForViewer>
          23: 0x0f6291be67a9 <SharedFunctionInfo serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 66)
0x0f6291be6b11 <ByteArray[66]>
Boilerplate at 0x0f6291be5189: 
0xf6291be5189: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2e1454c02059 <Map>
 - length: 3
           0: 8
           1: 0x2e1454c06419 <String[5]: #value>
           2: 0x2e1454c01729 <true>
Array at 0x0f6291be5241 has 7 elements:
0xf6291be5241: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 7
           0: 5
           1: 0x0f6291be5289 <DescriptorArray[4]>
           2: 0x2e1454c03301 <NumberDictionary[7]>
           3: 0x2e1454c01329 <FixedArray[0]>
           4: 0x0f6291be5349 <DescriptorArray[3]>
           5: 0x2e1454c03301 <NumberDictionary[7]>
           6: 0x2e1454c01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0xf6291be5289: [DescriptorArray] in OldSpace
 - map: 0x2e1454c07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2e1454c055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x3626a6774fe1 <AccessorInfo>
  [1]: 0x2e1454c058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 1, attrs: [__C]) @ 0x3626a6774f71 <AccessorInfo>
  [2]: 0x2e1454c05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x3626a6775051 <AccessorInfo>
  [3]: 0x2e1454c065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x0f6291be5331 <ClassPositions 360, 1506>
Element[2]
0x2e1454c03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x2e1454c01329: [FixedArray] in ReadOnlySpace
 - map: 0x2e1454c012e1 <Map>
 - length: 0
Element[4]
0xf6291be5349: [DescriptorArray] in OldSpace
 - map: 0x2e1454c07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 3
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2e1454c04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 2, attrs: [W_C]) @ 1
  [1]: 0xf6291be53a9: [String] in OldSpace: #build (const data descriptor, p: 1, attrs: [W_C]) @ 3
  [2]: 0xf6291be53c1: [String] in OldSpace: #buildMeteorsAfterExplosion (const data descriptor, p: 0, attrs: [W_C]) @ 4
Element[5]
0x2e1454c03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x2e1454c01329: [FixedArray] in ReadOnlySpace
 - map: 0x2e1454c012e1 <Map>
 - length: 0
0x0f6291be53f1 points to: [0xf6291be5460]
=== [0xf6291be5460] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
         0xf6291be5460 @    0 : 0b 03             Ldar a0
         0xf6291be5462 @    2 : 9d 23             JumpIfNotUndefined [35] (0xf6291be5485 @ 37)
         0xf6291be5464 @    4 : 17 03             LdaImmutableCurrentContextSlot [3]
  408 E> 0xf6291be5466 @    6 : aa 00             ThrowReferenceErrorIfHole [0]
         0xf6291be5468 @    8 : c3                Star1 
  417 E> 0xf6291be5469 @    9 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0xf6291be546d @   13 : c3                Star1 
  424 E> 0xf6291be546e @   14 : 21 02 02          LdaGlobal [2], [2]
         0xf6291be5471 @   17 : c1                Star3 
  429 E> 0xf6291be5472 @   18 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0xf6291be5476 @   22 : c2                Star2 
  429 E> 0xf6291be5477 @   23 : 5d f8 f7 06       CallProperty0 r2, r3, [6]
         0xf6291be547b @   27 : c2                Star2 
         0xf6291be547c @   28 : 0b f9             Ldar r1
  404 E> 0xf6291be547e @   30 : 69 f9 f8 01 08    Construct r1, r2-r2, [8]
         0xf6291be5483 @   35 : 8a 04             Jump [4] (0xf6291be5487 @ 39)
         0xf6291be5485 @   37 : 0b 03             Ldar a0
         0xf6291be5487 @   39 : c4                Star0 
  450 S> 0xf6291be5488 @   40 : 0b fa             Ldar r0
  459 E> 0xf6291be548a @   42 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0xf6291be548e @   46 : 0e                LdaUndefined 
  470 S> 0xf6291be548f @   47 : a9                Return 
Constant pool (size = 5)
0xf6291be5491: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 5
           0: 0x0f6291be5121 <String[8]: #random_1>
           1: 0x0f6291be54c9 <String[6]: #Random>
           2: 0x3626a675a991 <String[4]: #Math>
           3: 0x3626a675aba1 <String[6]: #random>
           4: 0x3626a6768a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 22)
0x0f6291be5529 <ByteArray[22]>
0x0f6291be56f1 points to: [0xf6291be5760]
=== [0xf6291be5760] DISASSEMBLY ===
Parameter count 4
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
         0xf6291be5760 @    0 : 19 03 fa          Mov a0, r0
         0xf6291be5763 @    3 : 0b 04             Ldar a1
         0xf6291be5765 @    5 : 9d 19             JumpIfNotUndefined [25] (0xf6291be577e @ 30)
         0xf6291be5767 @    7 : 17 04             LdaImmutableCurrentContextSlot [4]
  507 E> 0xf6291be5769 @    9 : aa 00             ThrowReferenceErrorIfHole [0]
         0xf6291be576b @   11 : bd                Star7 
  516 E> 0xf6291be576c @   12 : 2d f3 01 00       GetNamedProperty r7, [1], [0]
         0xf6291be5770 @   16 : bd                Star7 
         0xf6291be5771 @   17 : 0c                LdaZero 
         0xf6291be5772 @   18 : bc                Star8 
         0xf6291be5773 @   19 : 0c                LdaZero 
         0xf6291be5774 @   20 : bb                Star9 
         0xf6291be5775 @   21 : 0b f3             Ldar r7
  503 E> 0xf6291be5777 @   23 : 69 f3 f2 02 02    Construct r7, r8-r9, [2]
         0xf6291be577c @   28 : 8a 04             Jump [4] (0xf6291be5780 @ 32)
         0xf6291be577e @   30 : 0b 04             Ldar a1
         0xf6291be5780 @   32 : c3                Star1 
         0xf6291be5781 @   33 : 0b 05             Ldar a2
         0xf6291be5783 @   35 : 9d 12             JumpIfNotUndefined [18] (0xf6291be5795 @ 53)
         0xf6291be5785 @   37 : 17 02             LdaImmutableCurrentContextSlot [2]
  543 E> 0xf6291be5787 @   39 : aa 02             ThrowReferenceErrorIfHole [2]
         0xf6291be5789 @   41 : bd                Star7 
  558 E> 0xf6291be578a @   42 : 2d f3 03 04       GetNamedProperty r7, [3], [4]
         0xf6291be578e @   46 : bd                Star7 
  569 E> 0xf6291be578f @   47 : 2d f3 04 06       GetNamedProperty r7, [4], [6]
         0xf6291be5793 @   51 : 8a 04             Jump [4] (0xf6291be5797 @ 55)
         0xf6291be5795 @   53 : 0b 05             Ldar a2
         0xf6291be5797 @   55 : c2                Star2 
  606 S> 0xf6291be5798 @   56 : 17 02             LdaImmutableCurrentContextSlot [2]
         0xf6291be579a @   58 : aa 02             ThrowReferenceErrorIfHole [2]
         0xf6291be579c @   60 : bc                Star8 
  621 E> 0xf6291be579d @   61 : 2d f2 05 08       GetNamedProperty r8, [5], [8]
         0xf6291be57a1 @   65 : bc                Star8 
  639 E> 0xf6291be57a2 @   66 : 2d f2 06 0a       GetNamedProperty r8, [6], [10]
         0xf6291be57a6 @   70 : bd                Star7 
  639 E> 0xf6291be57a7 @   71 : 5e f3 f2 f8 0c    CallProperty1 r7, r8, r2, [12]
         0xf6291be57ac @   76 : c1                Star3 
  664 S> 0xf6291be57ad @   77 : 1d                TestUndetectable 
         0xf6291be57ae @   78 : 99 1e             JumpIfFalse [30] (0xf6291be57cc @ 108)
  703 S> 0xf6291be57b0 @   80 : 21 07 0e          LdaGlobal [7], [14]
         0xf6291be57b3 @   83 : bd                Star7 
         0xf6291be57b4 @   84 : 13 08             LdaConstant [8]
         0xf6291be57b6 @   86 : bc                Star8 
         0xf6291be57b7 @   87 : 0b f8             Ldar r2
  738 E> 0xf6291be57b9 @   89 : 77                ToString 
         0xf6291be57ba @   90 : 39 f2 10          Add r8, [16]
         0xf6291be57bd @   93 : bc                Star8 
         0xf6291be57be @   94 : 13 09             LdaConstant [9]
         0xf6291be57c0 @   96 : 39 f2 10          Add r8, [16]
         0xf6291be57c3 @   99 : bc                Star8 
         0xf6291be57c4 @  100 : 0b f3             Ldar r7
  709 E> 0xf6291be57c6 @  102 : 69 f3 f2 01 11    Construct r7, r8-r8, [17]
  703 E> 0xf6291be57cb @  107 : a7                Throw 
  793 S> 0xf6291be57cc @  108 : 19 f9 f6          Mov r1, r4
  830 S> 0xf6291be57cf @  111 : 2d f6 0a 13       GetNamedProperty r4, [10], [19]
         0xf6291be57d3 @  115 : bd                Star7 
         0xf6291be57d4 @  116 : 0c                LdaZero 
  840 E> 0xf6291be57d5 @  117 : 6e f3 15          TestGreaterThan r7, [21]
         0xf6291be57d8 @  120 : 99 4a             JumpIfFalse [74] (0xf6291be5822 @ 194)
  859 E> 0xf6291be57da @  122 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0xf6291be57de @  126 : 97 44             JumpIfToBooleanFalse [68] (0xf6291be5822 @ 194)
  908 S> 0xf6291be57e0 @  128 : 13 0c             LdaConstant [12]
         0xf6291be57e2 @  130 : bf                Star5 
  946 S> 0xf6291be57e3 @  131 : 0d 01             LdaSmi [1]
         0xf6291be57e5 @  133 : bd                Star7 
  957 E> 0xf6291be57e6 @  134 : 2d 02 0d 1a       GetNamedProperty <this>, [13], [26]
         0xf6291be57ea @  138 : bb                Star9 
  961 E> 0xf6291be57eb @  139 : 2d f1 0e 1c       GetNamedProperty r9, [14], [28]
         0xf6291be57ef @  143 : bc                Star8 
  961 E> 0xf6291be57f0 @  144 : 5d f2 f1 1e       CallProperty0 r8, r9, [30]
         0xf6291be57f4 @  148 : bc                Star8 
         0xf6291be57f5 @  149 : 0b f5             Ldar r5
  971 E> 0xf6291be57f7 @  151 : 3b f2 20          Mul r8, [32]
  993 E> 0xf6291be57fa @  154 : 47 02 21          MulSmi [2], [33]
  948 E> 0xf6291be57fd @  157 : 39 f3 19          Add r7, [25]
         0xf6291be5800 @  160 : bd                Star7 
         0xf6291be5801 @  161 : 0b f5             Ldar r5
  998 E> 0xf6291be5803 @  163 : 3a f3 18          Sub r7, [24]
         0xf6291be5806 @  166 : be                Star6 
 1065 S> 0xf6291be5807 @  167 : 2d f6 0f 22       GetNamedProperty r4, [15], [34]
         0xf6291be580b @  171 : bc                Star8 
 1076 E> 0xf6291be580c @  172 : 2d f2 10 24       GetNamedProperty r8, [16], [36]
         0xf6291be5810 @  176 : bd                Star7 
 1097 E> 0xf6291be5811 @  177 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0xf6291be5815 @  181 : bb                Star9 
         0xf6291be5816 @  182 : 0b f4             Ldar r6
 1103 E> 0xf6291be5818 @  184 : 3b f1 26          Mul r9, [38]
         0xf6291be581b @  187 : bb                Star9 
 1076 E> 0xf6291be581c @  188 : 5e f3 f2 f1 27    CallProperty1 r7, r8, r9, [39]
         0xf6291be5821 @  193 : c0                Star4 
 1138 S> 0xf6291be5822 @  194 : 17 05             LdaImmutableCurrentContextSlot [5]
         0xf6291be5824 @  196 : aa 11             ThrowReferenceErrorIfHole [17]
         0xf6291be5826 @  198 : bd                Star7 
         0xf6291be5827 @  199 : 0b f3             Ldar r7
         0xf6291be5829 @  201 : 19 fa f2          Mov r0, r8
         0xf6291be582c @  204 : 19 f6 f1          Mov r4, r9
         0xf6291be582f @  207 : 19 f8 f0          Mov r2, r10
         0xf6291be5832 @  210 : 19 f7 ef          Mov r3, r11
 1145 E> 0xf6291be5835 @  213 : 69 f3 f2 04 29    Construct r7, r8-r11, [41]
 1207 S> 0xf6291be583a @  218 : a9                Return 
Constant pool (size = 18)
0xf6291be5841: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 18
           0: 0x0f6291be5139 <String[8]: #vector_1>
           1: 0x0f6291be58e1 <String[6]: #Vector>
           2: 0x0f6291be5101 <String[14]: #meteor_infos_1>
           3: 0x0f6291be58f9 <String[10]: #MeteorType>
           4: 0x0f6291be5919 <String[5]: #Large>
           5: 0x0f6291be5931 <String[17]: #METEOR_TYPE_INFOS>
           6: 0x2e1454c050e9 <String[3]: #get>
           7: 0x2e1454c04de1 <String[5]: #Error>
           8: 0x0f6291be5959 <String[16]: #Unknown meteor '>
           9: 0x3626a6774c49 <String[1]: #'>
          10: 0x0f6291be5991 <String[9]: #magnitude>
          11: 0x0f6291be59b1 <String[5]: #speed>
          12: 0x0f6291be59c9 <HeapNumber 0.2>
          13: 0x3626a6768a51 <String[3]: #rng>
          14: 0x3626a675aba1 <String[6]: #random>
          15: 0x0f6291be59d9 <String[10]: #normalized>
          16: 0x0f6291be59f9 <String[8]: #multiply>
          17: 0x0f6291be5151 <String[6]: #Meteor>
Handler Table (size = 0)
Source Position Table (size = 88)
0x0f6291be5a11 <ByteArray[88]>
0x0f6291be5af9 points to: [0xf6291be5b68]
=== [0xf6291be5b68] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 1244 E> 0xf6291be5b68 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0xf6291be5b6b @    3 : 1a fa             PushContext r0
         0xf6291be5b6d @    5 : 0b 02             Ldar <this>
         0xf6291be5b6f @    7 : 25 02             StaCurrentContextSlot [2]
         0xf6291be5b71 @    9 : 0b 03             Ldar a0
         0xf6291be5b73 @   11 : 25 04             StaCurrentContextSlot [4]
         0xf6291be5b75 @   13 : 0b 04             Ldar a1
         0xf6291be5b77 @   15 : 25 03             StaCurrentContextSlot [3]
 1294 S> 0xf6291be5b79 @   17 : 17 04             LdaImmutableCurrentContextSlot [4]
         0xf6291be5b7b @   19 : c1                Star3 
 1320 E> 0xf6291be5b7c @   20 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0xf6291be5b80 @   24 : c2                Star2 
 1320 E> 0xf6291be5b81 @   25 : 5d f8 f7 02       CallProperty0 r2, r3, [2]
         0xf6291be5b85 @   29 : c2                Star2 
 1346 E> 0xf6291be5b86 @   30 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0xf6291be5b8a @   34 : c3                Star1 
         0xf6291be5b8b @   35 : 80 03 00 02       CreateClosure [3], [0], #2
         0xf6291be5b8f @   39 : c1                Star3 
 1347 E> 0xf6291be5b90 @   40 : 5e f9 f8 f7 06    CallProperty1 r1, r2, r3, [6]
 1498 S> 0xf6291be5b95 @   45 : a9                Return 
Constant pool (size = 4)
0xf6291be5b99: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 4
           0: 0x0f6291be5bc9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x0f6291be5c99 <String[24]: #getMeteorsAfterExplosion>
           2: 0x3626a6749ea9 <String[3]: #map>
           3: 0x0f6291be5cd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 19)
0x0f6291be5ef1 <ByteArray[19]>
0x0f6291be5cd9 points to: [0xf6291be5d48]
=== [0xf6291be5d48] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1373 S> 0xf6291be5d48 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0xf6291be5d4a @    2 : c3                Star1 
 1373 E> 0xf6291be5d4b @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0xf6291be5d4f @    7 : c4                Star0 
         0xf6291be5d50 @    8 : 17 03             LdaImmutableCurrentContextSlot [3]
         0xf6291be5d52 @   10 : c2                Star2 
         0xf6291be5d53 @   11 : 17 04             LdaImmutableCurrentContextSlot [4]
         0xf6291be5d55 @   13 : bf                Star5 
 1417 E> 0xf6291be5d56 @   14 : 2d f5 01 02       GetNamedProperty r5, [1], [2]
         0xf6291be5d5a @   18 : bf                Star5 
 1426 E> 0xf6291be5d5b @   19 : 2d f5 02 04       GetNamedProperty r5, [2], [4]
         0xf6291be5d5f @   23 : c0                Star4 
 1445 E> 0xf6291be5d60 @   24 : 2d 03 03 06       GetNamedProperty a0, [3], [6]
         0xf6291be5d64 @   28 : be                Star6 
 1426 E> 0xf6291be5d65 @   29 : 5e f6 f5 f4 08    CallProperty1 r4, r5, r6, [8]
         0xf6291be5d6a @   34 : c0                Star4 
 1457 E> 0xf6291be5d6b @   35 : 2d f6 04 0a       GetNamedProperty r4, [4], [10]
         0xf6291be5d6f @   39 : c1                Star3 
         0xf6291be5d70 @   40 : 13 05             LdaConstant [5]
         0xf6291be5d72 @   42 : bf                Star5 
 1458 E> 0xf6291be5d73 @   43 : 5e f7 f6 f5 0c    CallProperty1 r3, r4, r5, [12]
         0xf6291be5d78 @   48 : c1                Star3 
 1485 E> 0xf6291be5d79 @   49 : 2d 03 06 0e       GetNamedProperty a0, [6], [14]
         0xf6291be5d7d @   53 : c0                Star4 
 1373 E> 0xf6291be5d7e @   54 : 5c fa f9 04 10    CallProperty r0, r1-r4, [16]
 1496 S> 0xf6291be5d83 @   59 : a9                Return 
Constant pool (size = 7)
0xf6291be5d89: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 7
           0: 0x0f6291be53a9 <String[5]: #build>
           1: 0x0f6291be5dd1 <String[8]: #velocity>
           2: 0x0f6291be5de9 <String[6]: #rotate>
           3: 0x0f6291be5e01 <String[11]: #rotationRad>
           4: 0x0f6291be59f9 <String[8]: #multiply>
           5: 0x0f6291be5e21 <HeapNumber 0.8>
           6: 0x0f6291be5e31 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 28)
0x0f6291be5e51 <ByteArray[28]>
Array at 0x0f6291be6929 has 7 elements:
0xf6291be6929: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 7
           0: 8
           1: 0x0f6291be6971 <DescriptorArray[5]>
           2: 0x2e1454c03301 <NumberDictionary[7]>
           3: 0x2e1454c01329 <FixedArray[0]>
           4: 0x0f6291be6a49 <DescriptorArray[5]>
           5: 0x2e1454c03301 <NumberDictionary[7]>
           6: 0x2e1454c01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x8 (8)
Element[1]
0xf6291be6971: [DescriptorArray] in OldSpace
 - map: 0x2e1454c07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2e1454c055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x3626a6774fe1 <AccessorInfo>
  [1]: 0x2e1454c058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 4, attrs: [__C]) @ 0x3626a6774f71 <AccessorInfo>
  [2]: 0x2e1454c05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x3626a6775051 <AccessorInfo>
  [3]: 0x2e1454c065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 3, attrs: [W_C]) @ 0x0f6291be6a31 <ClassPositions 1546, 2527>
  [4]: 0xf6291be60c9: [String] in OldSpace: #BuildDebug (const data descriptor, p: 2, attrs: [W_C]) @ 3
Element[2]
0x2e1454c03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x2e1454c01329: [FixedArray] in ReadOnlySpace
 - map: 0x2e1454c012e1 <Map>
 - length: 0
Element[4]
0xf6291be6a49: [DescriptorArray] in OldSpace
 - map: 0x2e1454c07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x2e1454c04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0xf6291be6441: [String] in OldSpace: #score (const accessor descriptor, p: 3, attrs: [W_C]) @ 0x0f6291be6ad9 <AccessorPair>(get: 4, set: 0x2e1454c01339 <null>)
  [2]: 0xf6291be5c99: [String] in OldSpace: #getMeteorsAfterExplosion (const data descriptor, p: 2, attrs: [W_C]) @ 5
  [3]: 0xf6291be66f9: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 4, attrs: [W_C]) @ 6
  [4]: 0xf6291be6859: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 0, attrs: [W_C]) @ 7
Element[5]
0x2e1454c03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x2e1454c01329: [FixedArray] in ReadOnlySpace
 - map: 0x2e1454c012e1 <Map>
 - length: 0
0x0f6291be6169 points to: [0xf6291be61d8]
=== [0xf6291be61d8] DISASSEMBLY ===
Parameter count 5
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
         0xf6291be61d8 @    0 : 19 fe f9          Mov <closure>, r1
         0xf6291be61db @    3 : 19 03 f8          Mov a0, r2
         0xf6291be61de @    6 : 0b 04             Ldar a1
         0xf6291be61e0 @    8 : 9d 1b             JumpIfNotUndefined [27] (0xf6291be61fb @ 35)
         0xf6291be61e2 @   10 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1818 E> 0xf6291be61e6 @   14 : aa 00             ThrowReferenceErrorIfHole [0]
         0xf6291be61e8 @   16 : be                Star6 
 1827 E> 0xf6291be61e9 @   17 : 2d f4 01 00       GetNamedProperty r6, [1], [0]
         0xf6291be61ed @   21 : be                Star6 
         0xf6291be61ee @   22 : 0c                LdaZero 
         0xf6291be61ef @   23 : bd                Star7 
         0xf6291be61f0 @   24 : 0c                LdaZero 
         0xf6291be61f1 @   25 : bc                Star8 
         0xf6291be61f2 @   26 : 0b f4             Ldar r6
 1814 E> 0xf6291be61f4 @   28 : 69 f4 f3 02 02    Construct r6, r7-r8, [2]
         0xf6291be61f9 @   33 : 8a 04             Jump [4] (0xf6291be61fd @ 37)
         0xf6291be61fb @   35 : 0b 04             Ldar a1
         0xf6291be61fd @   37 : c1                Star3 
         0xf6291be61fe @   38 : 0b 05             Ldar a2
         0xf6291be6200 @   40 : 9d 14             JumpIfNotUndefined [20] (0xf6291be6214 @ 60)
         0xf6291be6202 @   42 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1854 E> 0xf6291be6206 @   46 : aa 02             ThrowReferenceErrorIfHole [2]
         0xf6291be6208 @   48 : be                Star6 
 1869 E> 0xf6291be6209 @   49 : 2d f4 03 04       GetNamedProperty r6, [3], [4]
         0xf6291be620d @   53 : be                Star6 
 1880 E> 0xf6291be620e @   54 : 2d f4 04 06       GetNamedProperty r6, [4], [6]
         0xf6291be6212 @   58 : 8a 04             Jump [4] (0xf6291be6216 @ 62)
         0xf6291be6214 @   60 : 0b 05             Ldar a2
         0xf6291be6216 @   62 : c0                Star4 
         0xf6291be6217 @   63 : 19 06 f5          Mov a3, r5
 1910 S> 0xf6291be621a @   66 : 0b f9             Ldar r1
         0xf6291be621c @   68 : 5a f3             GetSuperConstructor r7
         0xf6291be621e @   70 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1936 E> 0xf6291be6222 @   74 : aa 02             ThrowReferenceErrorIfHole [2]
         0xf6291be6224 @   76 : b9                Star11 
 1951 E> 0xf6291be6225 @   77 : 2d ef 05 08       GetNamedProperty r11, [5], [8]
         0xf6291be6229 @   81 : b9                Star11 
 1969 E> 0xf6291be622a @   82 : 2d ef 06 0a       GetNamedProperty r11, [6], [10]
         0xf6291be622e @   86 : ba                Star10 
 1969 E> 0xf6291be622f @   87 : 5e f0 ef f6 0c    CallProperty1 r10, r11, r4, [12]
         0xf6291be6234 @   92 : ba                Star10 
         0xf6291be6235 @   93 : 19 f9 f4          Mov r1, r6
         0xf6291be6238 @   96 : 19 f8 f2          Mov r2, r8
         0xf6291be623b @   99 : 19 f7 f1          Mov r3, r9
         0xf6291be623e @  102 : 9e 08             JumpIfUndefinedOrNull [8] (0xf6291be6246 @ 110)
 1984 E> 0xf6291be6240 @  104 : 2d f0 07 0e       GetNamedProperty r10, [7], [14]
         0xf6291be6244 @  108 : 8a 03             Jump [3] (0xf6291be6247 @ 111)
         0xf6291be6246 @  110 : 0e                LdaUndefined 
         0xf6291be6247 @  111 : ad f3             ThrowIfNotSuperConstructor r7
         0xf6291be6249 @  113 : ba                Star10 
         0xf6291be624a @  114 : 0b fa             Ldar r0
 1910 E> 0xf6291be624c @  116 : 69 f3 f2 03 10    Construct r7, r8-r10, [16]
         0xf6291be6251 @  121 : b9                Star11 
         0xf6291be6252 @  122 : 0b 02             Ldar <this>
         0xf6291be6254 @  124 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0xf6291be6255 @  125 : 19 ef 02          Mov r11, <this>
 2001 S> 0xf6291be6258 @  128 : 0b 02             Ldar <this>
         0xf6291be625a @  130 : ab                ThrowSuperNotCalledIfHole 
         0xf6291be625b @  131 : 0b f6             Ldar r4
 2017 E> 0xf6291be625d @  133 : 32 02 08 12       SetNamedProperty <this>, [8], [18]
 2039 S> 0xf6291be6261 @  137 : 0b 02             Ldar <this>
         0xf6291be6263 @  139 : ab                ThrowSuperNotCalledIfHole 
         0xf6291be6264 @  140 : 0b f5             Ldar r5
 2056 E> 0xf6291be6266 @  142 : 32 02 09 14       SetNamedProperty <this>, [9], [20]
         0xf6291be626a @  146 : 0b 02             Ldar <this>
         0xf6291be626c @  148 : ab                ThrowSuperNotCalledIfHole 
 2075 S> 0xf6291be626d @  149 : a9                Return 
Constant pool (size = 10)
0xf6291be6271: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 10
           0: 0x0f6291be5139 <String[8]: #vector_1>
           1: 0x0f6291be58e1 <String[6]: #Vector>
           2: 0x0f6291be5101 <String[14]: #meteor_infos_1>
           3: 0x0f6291be58f9 <String[10]: #MeteorType>
           4: 0x0f6291be5919 <String[5]: #Large>
           5: 0x0f6291be5931 <String[17]: #METEOR_TYPE_INFOS>
           6: 0x2e1454c050e9 <String[3]: #get>
           7: 0x2e1454c0a111 <String[4]: #size>
           8: 0x0f6291be5e31 <String[10]: #meteorType>
           9: 0x0f6291be62d1 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 42)
0x0f6291be62f1 <ByteArray[42]>
0x0f6291be5f31 points to: [0xf6291be5fa0]
=== [0xf6291be5fa0] DISASSEMBLY ===
Parameter count 4
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
         0xf6291be5fa0 @    0 : 19 03 fa          Mov a0, r0
         0xf6291be5fa3 @    3 : 0b 04             Ldar a1
         0xf6291be5fa5 @    5 : 9d 1b             JumpIfNotUndefined [27] (0xf6291be5fc0 @ 32)
         0xf6291be5fa7 @    7 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1640 E> 0xf6291be5fab @   11 : aa 00             ThrowReferenceErrorIfHole [0]
         0xf6291be5fad @   13 : c1                Star3 
 1649 E> 0xf6291be5fae @   14 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0xf6291be5fb2 @   18 : c1                Star3 
         0xf6291be5fb3 @   19 : 0c                LdaZero 
         0xf6291be5fb4 @   20 : c0                Star4 
         0xf6291be5fb5 @   21 : 0c                LdaZero 
         0xf6291be5fb6 @   22 : bf                Star5 
         0xf6291be5fb7 @   23 : 0b f7             Ldar r3
 1636 E> 0xf6291be5fb9 @   25 : 69 f7 f6 02 02    Construct r3, r4-r5, [2]
         0xf6291be5fbe @   30 : 8a 04             Jump [4] (0xf6291be5fc2 @ 34)
         0xf6291be5fc0 @   32 : 0b 04             Ldar a1
         0xf6291be5fc2 @   34 : c3                Star1 
         0xf6291be5fc3 @   35 : 19 05 f8          Mov a2, r2
 1686 S> 0xf6291be5fc6 @   38 : 16 04             LdaCurrentContextSlot [4]
         0xf6291be5fc8 @   40 : aa 02             ThrowReferenceErrorIfHole [2]
         0xf6291be5fca @   42 : c1                Star3 
         0xf6291be5fcb @   43 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 1724 E> 0xf6291be5fcf @   47 : aa 03             ThrowReferenceErrorIfHole [3]
         0xf6291be5fd1 @   49 : be                Star6 
 1739 E> 0xf6291be5fd2 @   50 : 2d f4 04 04       GetNamedProperty r6, [4], [4]
         0xf6291be5fd6 @   54 : be                Star6 
 1750 E> 0xf6291be5fd7 @   55 : 2d f4 05 06       GetNamedProperty r6, [5], [6]
         0xf6291be5fdb @   59 : be                Star6 
         0xf6291be5fdc @   60 : 0b f7             Ldar r3
         0xf6291be5fde @   62 : 19 fa f6          Mov r0, r4
         0xf6291be5fe1 @   65 : 19 f9 f5          Mov r1, r5
         0xf6291be5fe4 @   68 : 19 05 f3          Mov a2, r7
 1693 E> 0xf6291be5fe7 @   71 : 69 f7 f6 04 08    Construct r3, r4-r7, [8]
 1770 S> 0xf6291be5fec @   76 : a9                Return 
Constant pool (size = 6)
0xf6291be5ff1: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 6
           0: 0x0f6291be5139 <String[8]: #vector_1>
           1: 0x0f6291be58e1 <String[6]: #Vector>
           2: 0x0f6291be5151 <String[6]: #Meteor>
           3: 0x0f6291be5101 <String[14]: #meteor_infos_1>
           4: 0x0f6291be58f9 <String[10]: #MeteorType>
           5: 0x3626a676af39 <String[5]: #Debug>
Handler Table (size = 0)
Source Position Table (size = 25)
0x0f6291be6049 <ByteArray[25]>
0x0f6291be63a1 points to: [0xf6291be6410]
=== [0xf6291be6410] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2115 S> 0xf6291be6410 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0xf6291be6414 @    4 : c4                Star0 
 2127 E> 0xf6291be6415 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0xf6291be6419 @    9 : 9e 04             JumpIfUndefinedOrNull [4] (0xf6291be641d @ 13)
         0xf6291be641b @   11 : 8a 03             Jump [3] (0xf6291be641e @ 14)
         0xf6291be641d @   13 : 0c                LdaZero 
 2138 S> 0xf6291be641e @   14 : a9                Return 
Constant pool (size = 2)
0xf6291be6421: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 2
           0: 0x0f6291be62d1 <String[11]: #meteorInfos>
           1: 0x0f6291be6441 <String[5]: #score>
Handler Table (size = 0)
Source Position Table (size = 9)
0x0f6291be6459 <ByteArray[9]>
0x0f6291be6501 points to: [0xf6291be6570]
=== [0xf6291be6570] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2198 S> 0xf6291be6570 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0xf6291be6574 @    4 : c4                Star0 
 2210 E> 0xf6291be6575 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0xf6291be6579 @    9 : 9e 04             JumpIfUndefinedOrNull [4] (0xf6291be657d @ 13)
         0xf6291be657b @   11 : 8a 04             Jump [4] (0xf6291be657f @ 15)
         0xf6291be657d @   13 : 7b 04             CreateEmptyArrayLiteral [4]
 2229 S> 0xf6291be657f @   15 : a9                Return 
Constant pool (size = 2)
0xf6291be6581: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 2
           0: 0x0f6291be62d1 <String[11]: #meteorInfos>
           1: 0x0f6291be65a1 <String[12]: #explodesInto>
Handler Table (size = 0)
Source Position Table (size = 9)
0x0f6291be65c1 <ByteArray[9]>
0x0f6291be6649 points to: [0xf6291be66b8]
=== [0xf6291be66b8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2271 S> 0xf6291be66b8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 2301 E> 0xf6291be66ba @    2 : 2e 02 00 00       GetNamedPropertyFromSuper <this>, [0], [0]
         0xf6291be66be @    6 : c3                Star1 
 2301 E> 0xf6291be66bf @    7 : 5b f9 02 01 02    CallAnyReceiver r1, <this>-<this>, [2]
         0xf6291be66c4 @   12 : c3                Star1 
         0xf6291be66c5 @   13 : 7e f9 29 04       CloneObject r1, #41, [4]
         0xf6291be66c9 @   17 : c4                Star0 
 2352 E> 0xf6291be66ca @   18 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0xf6291be66ce @   22 : 33 fa 01 08       DefineNamedOwnProperty r0, [1], [8]
         0xf6291be66d2 @   26 : 0b fa             Ldar r0
 2374 S> 0xf6291be66d4 @   28 : a9                Return 
Constant pool (size = 2)
0xf6291be66d9: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 2
           0: 0x0f6291be66f9 <String[18]: #serializeForViewer>
           1: 0x0f6291be5e31 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 14)
0x0f6291be6721 <ByteArray[14]>
0x0f6291be67a9 points to: [0xf6291be6818]
=== [0xf6291be6818] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2416 S> 0xf6291be6818 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 2446 E> 0xf6291be681a @    2 : 2e 02 00 00       GetNamedPropertyFromSuper <this>, [0], [0]
         0xf6291be681e @    6 : c3                Star1 
 2446 E> 0xf6291be681f @    7 : 5b f9 02 01 02    CallAnyReceiver r1, <this>-<this>, [2]
         0xf6291be6824 @   12 : c3                Star1 
         0xf6291be6825 @   13 : 7e f9 29 04       CloneObject r1, #41, [4]
         0xf6291be6829 @   17 : c4                Star0 
 2497 E> 0xf6291be682a @   18 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0xf6291be682e @   22 : 33 fa 01 08       DefineNamedOwnProperty r0, [1], [8]
         0xf6291be6832 @   26 : 0b fa             Ldar r0
 2519 S> 0xf6291be6834 @   28 : a9                Return 
Constant pool (size = 2)
0xf6291be6839: [FixedArray] in OldSpace
 - map: 0x2e1454c012e1 <Map>
 - length: 2
           0: 0x0f6291be6859 <String[18]: #serializeForPlayer>
           1: 0x0f6291be5e31 <String[10]: #meteorType>
Handler Table (size = 0)
Source Position Table (size = 14)
0x0f6291be6881 <ByteArray[14]>
<< OUTPUTTING DISASSEMBLY END >>
