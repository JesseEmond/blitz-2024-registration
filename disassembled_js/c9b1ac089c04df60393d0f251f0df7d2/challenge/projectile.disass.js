<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x120a740e4e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x120a740e4e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x120a740e4e4c @    4 : c4                Star0 
 2797 S> 0x120a740e4e4d @    5 : a9                Return 
Constant pool (size = 1)
0x120a740e4e51: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 1
           0: 0x120a740e4e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x120a740e6d71 <ByteArray[7]>
0x120a740e4e69 points to: [0x120a740e4ed8]
=== [0x120a740e4ed8] DISASSEMBLY ===
Parameter count 6
Register count 18
Frame size 144
OSR urgency: 0
Bytecode age: 0
   10 E> 0x120a740e4ed8 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x120a740e4edb @    3 : 1a f8             PushContext r2
         0x120a740e4edd @    5 : 10                LdaTheHole 
         0x120a740e4ede @    6 : 25 02             StaCurrentContextSlot [2]
         0x120a740e4ee0 @    8 : 10                LdaTheHole 
         0x120a740e4ee1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x120a740e4ee3 @   11 : 10                LdaTheHole 
         0x120a740e4ee4 @   12 : 25 04             StaCurrentContextSlot [4]
   76 S> 0x120a740e4ee6 @   14 : 21 01 00          LdaGlobal [1], [0]
         0x120a740e4ee9 @   17 : c0                Star4 
   83 E> 0x120a740e4eea @   18 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x120a740e4eee @   22 : c1                Star3 
         0x120a740e4eef @   23 : 13 03             LdaConstant [3]
         0x120a740e4ef1 @   25 : be                Star6 
   98 E> 0x120a740e4ef2 @   26 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x120a740e4ef6 @   30 : bd                Star7 
         0x120a740e4ef7 @   31 : 19 03 f5          Mov a0, r5
   83 E> 0x120a740e4efa @   34 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x120a740e4eff @   39 : 0e                LdaUndefined 
  158 E> 0x120a740e4f00 @   40 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  185 S> 0x120a740e4f04 @   44 : 13 06             LdaConstant [6]
         0x120a740e4f06 @   46 : c0                Star4 
  185 E> 0x120a740e4f07 @   47 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
         0x120a740e4f0b @   51 : c4                Star0 
  225 S> 0x120a740e4f0c @   52 : 13 07             LdaConstant [7]
         0x120a740e4f0e @   54 : c0                Star4 
  225 E> 0x120a740e4f0f @   55 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
  225 E> 0x120a740e4f13 @   59 : 25 02             StaCurrentContextSlot [2]
  272 S> 0x120a740e4f15 @   61 : 13 08             LdaConstant [8]
         0x120a740e4f17 @   63 : c0                Star4 
  272 E> 0x120a740e4f18 @   64 : 62 04 f6 0d       CallUndefinedReceiver1 a1, r4, [13]
  272 E> 0x120a740e4f1c @   68 : 25 03             StaCurrentContextSlot [3]
  317 S> 0x120a740e4f1e @   70 : 13 09             LdaConstant [9]
         0x120a740e4f20 @   72 : c0                Star4 
  317 E> 0x120a740e4f21 @   73 : 62 04 f6 0f       CallUndefinedReceiver1 a1, r4, [15]
  317 E> 0x120a740e4f25 @   77 : 25 04             StaCurrentContextSlot [4]
  372 E> 0x120a740e4f27 @   79 : 2d fa 0b 11       GetNamedProperty r0, [11], [17]
         0x120a740e4f2b @   83 : be                Star6 
         0x120a740e4f2c @   84 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x120a740e4f30 @   88 : c1                Star3 
         0x120a740e4f31 @   89 : 13 0a             LdaConstant [10]
         0x120a740e4f33 @   91 : c0                Star4 
         0x120a740e4f34 @   92 : 80 0d 01 02       CreateClosure [13], [1], #2
         0x120a740e4f38 @   96 : bd                Star7 
         0x120a740e4f39 @   97 : 80 0e 02 02       CreateClosure [14], [2], #2
         0x120a740e4f3d @  101 : bc                Star8 
         0x120a740e4f3e @  102 : 80 0f 03 02       CreateClosure [15], [3], #2
         0x120a740e4f42 @  106 : bb                Star9 
         0x120a740e4f43 @  107 : 80 10 04 02       CreateClosure [16], [4], #2
         0x120a740e4f47 @  111 : ba                Star10 
         0x120a740e4f48 @  112 : 80 11 05 02       CreateClosure [17], [5], #2
         0x120a740e4f4c @  116 : b9                Star11 
         0x120a740e4f4d @  117 : 80 12 06 02       CreateClosure [18], [6], #2
         0x120a740e4f51 @  121 : b8                Star12 
         0x120a740e4f52 @  122 : 80 13 07 02       CreateClosure [19], [7], #2
         0x120a740e4f56 @  126 : b7                Star13 
         0x120a740e4f57 @  127 : 80 14 08 02       CreateClosure [20], [8], #2
         0x120a740e4f5b @  131 : b6                Star14 
         0x120a740e4f5c @  132 : 80 15 09 02       CreateClosure [21], [9], #2
         0x120a740e4f60 @  136 : b5                Star15 
         0x120a740e4f61 @  137 : 80 16 0a 02       CreateClosure [22], [10], #2
         0x120a740e4f65 @  141 : 18 ea             Star r16
         0x120a740e4f67 @  143 : 80 17 0b 02       CreateClosure [23], [11], #2
         0x120a740e4f6b @  147 : 18 e9             Star r17
         0x120a740e4f6d @  149 : 19 f7 f5          Mov r3, r5
         0x120a740e4f70 @  152 : 65 28 00 f6 0e    CallRuntime [DefineClass], r4-r17
         0x120a740e4f75 @  157 : c0                Star4 
         0x120a740e4f76 @  158 : 19 f5 f9          Mov r5, r1
 2722 S> 0x120a740e4f79 @  161 : 0b f9             Ldar r1
 2741 E> 0x120a740e4f7b @  163 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x120a740e4f7f @  167 : 0e                LdaUndefined 
 2794 S> 0x120a740e4f80 @  168 : a9                Return 
Constant pool (size = 24)
0x120a740e4f89: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 24
           0: 0x120a740e5059 <ScopeInfo FUNCTION_SCOPE>
           1: 0x29507e085ab9 <String[6]: #Object>
           2: 0x29507e084c11 <String[14]: #defineProperty>
           3: 0x120a740e5129 <String[10]: #__esModule>
           4: 0x120a740e5149 <ObjectBoilerplateDescription[3]>
           5: 0x120a740e5171 <String[10]: #Projectile>
           6: 0x120a740e5191 <String[8]: #./entity>
           7: 0x120a740e51a9 <String[10]: #./geoUtils>
           8: 0x120a740e51c9 <String[15]: #./rotating_body>
           9: 0x120a740e51e9 <String[8]: #./vector>
          10: 0x120a740e5201 <FixedArray[7]>
          11: 0x120a740e55c9 <String[6]: #Entity>
          12: 0x120a740e55e1 <SharedFunctionInfo Projectile>
          13: 0x120a740e5ab1 <SharedFunctionInfo get position>
          14: 0x120a740e5be1 <SharedFunctionInfo get velocity>
          15: 0x120a740e5d11 <SharedFunctionInfo get size>
          16: 0x120a740e5e39 <SharedFunctionInfo get isDestroyed>
          17: 0x120a740e5f69 <SharedFunctionInfo intersection>
          18: 0x120a740e60e9 <SharedFunctionInfo checkCollisionDuringCurrentTick>
          19: 0x120a740e65a1 <SharedFunctionInfo update>
          20: 0x120a740e6709 <SharedFunctionInfo destroy>
          21: 0x120a740e6821 <SharedFunctionInfo serializeForViewer>
          22: 0x120a740e69b1 <SharedFunctionInfo serializeForPlayer>
          23: 0x120a740e6ad1 <SharedFunctionInfo serializeCommon>
Handler Table (size = 0)
Source Position Table (size = 55)
0x120a740e6d09 <ByteArray[55]>
Boilerplate at 0x120a740e5149: 
0x120a740e5149: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x29507e082059 <Map>
 - length: 3
           0: 8
           1: 0x29507e086419 <String[5]: #value>
           2: 0x29507e081729 <true>
Array at 0x120a740e5201 has 7 elements:
0x120a740e5201: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 7
           0: 14
           1: 0x120a740e5249 <DescriptorArray[6]>
           2: 0x29507e083301 <NumberDictionary[7]>
           3: 0x29507e081329 <FixedArray[0]>
           4: 0x120a740e5389 <DescriptorArray[10]>
           5: 0x29507e083301 <NumberDictionary[7]>
           6: 0x29507e081329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xe (14)
Element[1]
0x120a740e5249: [DescriptorArray] in OldSpace
 - map: 0x29507e087761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 6
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x29507e0855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x1de71a874fe1 <AccessorInfo>
  [1]: 0x29507e0858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x1de71a874f71 <AccessorInfo>
  [2]: 0x29507e085cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 5, attrs: [___]) @ 0x1de71a875051 <AccessorInfo>
  [3]: 0x29507e0865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 4, attrs: [W_C]) @ 0x120a740e5321 <ClassPositions 338, 2721>
  [4]: 0x120a740e5339: [String] in OldSpace: #intersection (const data descriptor, p: 0, attrs: [W_C]) @ 7
  [5]: 0x120a740e5359: [String] in OldSpace: #checkCollisionDuringCurrentTick (const data descriptor, p: 2, attrs: [W_C]) @ 8
Element[2]
0x29507e083301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x29507e081329: [FixedArray] in ReadOnlySpace
 - map: 0x29507e0812e1 <Map>
 - length: 0
Element[4]
0x120a740e5389: [DescriptorArray] in OldSpace
 - map: 0x29507e087761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 10
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x29507e084a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x29507e085c19: [String] in ReadOnlySpace: #position (const accessor descriptor, p: 3, attrs: [W_C]) @ 0x120a740e5491 <AccessorPair>(get: 3, set: 0x29507e081339 <null>)
  [2]: 0x120a740e54a9: [String] in OldSpace: #velocity (const accessor descriptor, p: 6, attrs: [W_C]) @ 0x120a740e54c1 <AccessorPair>(get: 4, set: 0x29507e081339 <null>)
  [3]: 0x29507e08a111: [String] in ReadOnlySpace: #size (const accessor descriptor, p: 2, attrs: [W_C]) @ 0x120a740e54d9 <AccessorPair>(get: 5, set: 0x29507e081339 <null>)
  [4]: 0x1de71a84b511: [String] in OldSpace: #isDestroyed (const accessor descriptor, p: 7, attrs: [W_C]) @ 0x120a740e5511 <AccessorPair>(get: 6, set: 0x29507e081339 <null>)
  [5]: 0x1de71a843f01: [String] in OldSpace: #update (const data descriptor, p: 8, attrs: [W_C]) @ 9
  [6]: 0x1de71a84ba19: [String] in OldSpace: #destroy (const data descriptor, p: 5, attrs: [W_C]) @ 10
  [7]: 0x120a740e5559: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 0, attrs: [W_C]) @ 11
  [8]: 0x120a740e5581: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 9, attrs: [W_C]) @ 12
  [9]: 0x120a740e55a9: [String] in OldSpace: #serializeCommon (const data descriptor, p: 4, attrs: [W_C]) @ 13
Element[5]
0x29507e083301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x29507e081329: [FixedArray] in ReadOnlySpace
 - map: 0x29507e0812e1 <Map>
 - length: 0
0x120a740e55e1 points to: [0x120a740e5650]
=== [0x120a740e5650] DISASSEMBLY ===
Parameter count 4
Register count 10
Frame size 80
OSR urgency: 0
Bytecode age: 0
         0x120a740e5650 @    0 : 19 fe f9          Mov <closure>, r1
         0x120a740e5653 @    3 : 19 03 f8          Mov a0, r2
         0x120a740e5656 @    6 : 0b 04             Ldar a1
         0x120a740e5658 @    8 : 9d 19             JumpIfNotUndefined [25] (0x120a740e5671 @ 33)
         0x120a740e565a @   10 : 17 04             LdaImmutableCurrentContextSlot [4]
  422 E> 0x120a740e565c @   12 : aa 00             ThrowReferenceErrorIfHole [0]
         0x120a740e565e @   14 : bf                Star5 
  431 E> 0x120a740e565f @   15 : 2d f5 01 00       GetNamedProperty r5, [1], [0]
         0x120a740e5663 @   19 : bf                Star5 
         0x120a740e5664 @   20 : 0c                LdaZero 
         0x120a740e5665 @   21 : be                Star6 
         0x120a740e5666 @   22 : 0c                LdaZero 
         0x120a740e5667 @   23 : bd                Star7 
         0x120a740e5668 @   24 : 0b f5             Ldar r5
  418 E> 0x120a740e566a @   26 : 69 f5 f4 02 02    Construct r5, r6-r7, [2]
         0x120a740e566f @   31 : 8a 04             Jump [4] (0x120a740e5673 @ 35)
         0x120a740e5671 @   33 : 0b 04             Ldar a1
         0x120a740e5673 @   35 : c1                Star3 
         0x120a740e5674 @   36 : 0b 05             Ldar a2
         0x120a740e5676 @   38 : 9d 06             JumpIfNotUndefined [6] (0x120a740e567c @ 44)
         0x120a740e5678 @   40 : 0d 01             LdaSmi [1]
         0x120a740e567a @   42 : 8a 04             Jump [4] (0x120a740e567e @ 46)
         0x120a740e567c @   44 : 0b 05             Ldar a2
         0x120a740e567e @   46 : c0                Star4 
  465 S> 0x120a740e567f @   47 : 0b f9             Ldar r1
         0x120a740e5681 @   49 : 5a f4             GetSuperConstructor r6
         0x120a740e5683 @   51 : ad f4             ThrowIfNotSuperConstructor r6
         0x120a740e5685 @   53 : 0b fa             Ldar r0
  465 E> 0x120a740e5687 @   55 : 69 f4 fa 00 04    Construct r6, r0-r0, [4]
         0x120a740e568c @   60 : bd                Star7 
         0x120a740e568d @   61 : 0b 02             Ldar <this>
         0x120a740e568f @   63 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x120a740e5690 @   64 : 19 f3 02          Mov r7, <this>
  482 S> 0x120a740e5693 @   67 : 0b 02             Ldar <this>
         0x120a740e5695 @   69 : ab                ThrowSuperNotCalledIfHole 
         0x120a740e5696 @   70 : 0b f8             Ldar r2
  497 E> 0x120a740e5698 @   72 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
  517 S> 0x120a740e569c @   76 : 0b 02             Ldar <this>
         0x120a740e569e @   78 : ab                ThrowSuperNotCalledIfHole 
         0x120a740e569f @   79 : 0b f7             Ldar r3
  532 E> 0x120a740e56a1 @   81 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
  552 S> 0x120a740e56a5 @   85 : 0b 02             Ldar <this>
         0x120a740e56a7 @   87 : ab                ThrowSuperNotCalledIfHole 
         0x120a740e56a8 @   88 : 0b f6             Ldar r4
  563 E> 0x120a740e56aa @   90 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
  579 S> 0x120a740e56ae @   94 : 0b 02             Ldar <this>
         0x120a740e56b0 @   96 : ab                ThrowSuperNotCalledIfHole 
         0x120a740e56b1 @   97 : 12                LdaFalse 
  597 E> 0x120a740e56b2 @   98 : 32 02 05 0c       SetNamedProperty <this>, [5], [12]
  614 S> 0x120a740e56b6 @  102 : 0b 02             Ldar <this>
         0x120a740e56b8 @  104 : ab                ThrowSuperNotCalledIfHole 
         0x120a740e56b9 @  105 : 17 03             LdaImmutableCurrentContextSlot [3]
  638 E> 0x120a740e56bb @  107 : aa 06             ThrowReferenceErrorIfHole [6]
         0x120a740e56bd @  109 : be                Star6 
  654 E> 0x120a740e56be @  110 : 2d f4 07 0e       GetNamedProperty r6, [7], [14]
         0x120a740e56c2 @  114 : be                Star6 
  667 E> 0x120a740e56c3 @  115 : 21 08 11          LdaGlobal [8], [17]
         0x120a740e56c6 @  118 : bc                Star8 
  672 E> 0x120a740e56c7 @  119 : 2d f2 09 13       GetNamedProperty r8, [9], [19]
         0x120a740e56cb @  123 : bd                Star7 
  672 E> 0x120a740e56cc @  124 : 5d f3 f2 15       CallProperty0 r7, r8, [21]
  681 E> 0x120a740e56d0 @  128 : 00 47 68 01 10 00 MulSmi.Wide [360], [16]
         0x120a740e56d6 @  134 : bd                Star7 
  689 E> 0x120a740e56d7 @  135 : 21 08 11          LdaGlobal [8], [17]
         0x120a740e56da @  138 : bb                Star9 
  694 E> 0x120a740e56db @  139 : 2d f1 09 13       GetNamedProperty r9, [9], [19]
         0x120a740e56df @  143 : bc                Star8 
  694 E> 0x120a740e56e0 @  144 : 5d f2 f1 19       CallProperty0 r8, r9, [25]
         0x120a740e56e4 @  148 : bc                Star8 
         0x120a740e56e5 @  149 : 13 0a             LdaConstant [10]
  703 E> 0x120a740e56e7 @  151 : 3a f2 18          Sub r8, [24]
         0x120a740e56ea @  154 : bc                Star8 
         0x120a740e56eb @  155 : 00 0d 90 01       LdaSmi.Wide [400]
         0x120a740e56ef @  159 : bb                Star9 
         0x120a740e56f0 @  160 : 0b f6             Ldar r4
  717 E> 0x120a740e56f2 @  162 : 3c f1 1b          Div r9, [27]
  710 E> 0x120a740e56f5 @  165 : 3b f2 17          Mul r8, [23]
         0x120a740e56f8 @  168 : bc                Star8 
         0x120a740e56f9 @  169 : 0b f4             Ldar r6
  634 E> 0x120a740e56fb @  171 : 69 f4 f3 02 1c    Construct r6, r7-r8, [28]
  632 E> 0x120a740e5700 @  176 : 32 02 0b 1e       SetNamedProperty <this>, [11], [30]
         0x120a740e5704 @  180 : 0b 02             Ldar <this>
         0x120a740e5706 @  182 : ab                ThrowSuperNotCalledIfHole 
  731 S> 0x120a740e5707 @  183 : a9                Return 
Constant pool (size = 12)
0x120a740e5709: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 12
           0: 0x120a740e5111 <String[8]: #vector_1>
           1: 0x120a740e5779 <String[6]: #Vector>
           2: 0x120a740e5791 <String[9]: #_position>
           3: 0x120a740e57b1 <String[9]: #_velocity>
           4: 0x120a740e57d1 <String[5]: #_size>
           5: 0x120a740e57e9 <String[12]: #_isDestroyed>
           6: 0x120a740e50f1 <String[15]: #rotating_body_1>
           7: 0x120a740e5809 <String[12]: #RotatingBody>
           8: 0x1de71a85a991 <String[4]: #Math>
           9: 0x1de71a85aba1 <String[6]: #random>
          10: 0x120a740e5859 <HeapNumber 0.5>
          11: 0x120a740e5869 <String[12]: #_orientation>
Handler Table (size = 0)
Source Position Table (size = 64)
0x120a740e5889 <ByteArray[64]>
0x120a740e5ab1 points to: [0x120a740e5b20]
=== [0x120a740e5b20] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  774 S> 0x120a740e5b20 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  784 S> 0x120a740e5b24 @    4 : a9                Return 
Constant pool (size = 1)
0x120a740e5b29: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 1
           0: 0x120a740e5791 <String[9]: #_position>
Handler Table (size = 0)
Source Position Table (size = 7)
0x120a740e5b41 <ByteArray[7]>
0x120a740e5be1 points to: [0x120a740e5c50]
=== [0x120a740e5c50] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  832 S> 0x120a740e5c50 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  842 S> 0x120a740e5c54 @    4 : a9                Return 
Constant pool (size = 1)
0x120a740e5c59: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 1
           0: 0x120a740e57b1 <String[9]: #_velocity>
Handler Table (size = 0)
Source Position Table (size = 7)
0x120a740e5c71 <ByteArray[7]>
0x120a740e5d11 points to: [0x120a740e5d80]
=== [0x120a740e5d80] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  886 S> 0x120a740e5d80 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  892 S> 0x120a740e5d84 @    4 : a9                Return 
Constant pool (size = 1)
0x120a740e5d89: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 1
           0: 0x120a740e57d1 <String[5]: #_size>
Handler Table (size = 0)
Source Position Table (size = 7)
0x120a740e5da1 <ByteArray[7]>
0x120a740e5e39 points to: [0x120a740e5ea8]
=== [0x120a740e5ea8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  943 S> 0x120a740e5ea8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  956 S> 0x120a740e5eac @    4 : a9                Return 
Constant pool (size = 1)
0x120a740e5eb1: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 1
           0: 0x120a740e57e9 <String[12]: #_isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x120a740e5ec9 <ByteArray[7]>
0x120a740e5f69 points to: [0x120a740e5fd8]
=== [0x120a740e5fd8] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1354 S> 0x120a740e5fd8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x120a740e5fda @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x120a740e5fdc @    4 : c3                Star1 
 1376 E> 0x120a740e5fdd @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x120a740e5fe1 @    9 : c4                Star0 
 1403 E> 0x120a740e5fe2 @   10 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x120a740e5fe6 @   14 : c3                Star1 
 1415 E> 0x120a740e5fe7 @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x120a740e5feb @   19 : c2                Star2 
 1427 E> 0x120a740e5fec @   20 : 2d 04 02 06       GetNamedProperty a1, [2], [6]
         0x120a740e5ff0 @   24 : c1                Star3 
 1439 E> 0x120a740e5ff1 @   25 : 2d 04 03 08       GetNamedProperty a1, [3], [8]
         0x120a740e5ff5 @   29 : c0                Star4 
 1400 E> 0x120a740e5ff6 @   30 : 60 fa f9 04 0a    CallUndefinedReceiver r0, r1-r4, [10]
 1449 S> 0x120a740e5ffb @   35 : a9                Return 
Constant pool (size = 4)
0x120a740e6001: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 4
           0: 0x120a740e50d1 <String[10]: #geoUtils_1>
           1: 0x120a740e6031 <String[23]: #lineSegmentIntersection>
           2: 0x29507e085c19 <String[8]: #position>
           3: 0x120a740e54a9 <String[8]: #velocity>
Handler Table (size = 0)
Source Position Table (size = 21)
0x120a740e6059 <ByteArray[21]>
0x120a740e60e9 points to: [0x120a740e6158]
=== [0x120a740e6158] DISASSEMBLY ===
Parameter count 3
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
 1794 S> 0x120a740e6158 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x120a740e615a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x120a740e615c @    4 : c1                Star3 
 1809 E> 0x120a740e615d @    5 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x120a740e6161 @    9 : c2                Star2 
 1838 E> 0x120a740e6162 @   10 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x120a740e6166 @   14 : c1                Star3 
 1851 E> 0x120a740e6167 @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x120a740e616b @   19 : c0                Star4 
 1864 E> 0x120a740e616c @   20 : 2d 03 04 06       GetNamedProperty a0, [4], [6]
         0x120a740e6170 @   24 : bf                Star5 
 1873 E> 0x120a740e6171 @   25 : 2d 04 02 08       GetNamedProperty a1, [2], [8]
         0x120a740e6175 @   29 : be                Star6 
 1886 E> 0x120a740e6176 @   30 : 2d 04 03 0a       GetNamedProperty a1, [3], [10]
         0x120a740e617a @   34 : bd                Star7 
 1899 E> 0x120a740e617b @   35 : 2d 04 04 0c       GetNamedProperty a1, [4], [12]
         0x120a740e617f @   39 : bc                Star8 
 1835 E> 0x120a740e6180 @   40 : 60 f8 f7 06 0e    CallUndefinedReceiver r2, r3-r8, [14]
         0x120a740e6185 @   45 : c4                Star0 
 1954 S> 0x120a740e6186 @   46 : 2d fa 05 10       GetNamedProperty r0, [5], [16]
         0x120a740e618a @   50 : c2                Star2 
         0x120a740e618b @   51 : 80 06 00 02       CreateClosure [6], [0], #2
         0x120a740e618f @   55 : c0                Star4 
 1954 E> 0x120a740e6190 @   56 : 5e f8 fa f6 12    CallProperty1 r2, r0, r4, [18]
         0x120a740e6195 @   61 : c3                Star1 
 2054 S> 0x120a740e6196 @   62 : 2d f9 07 14       GetNamedProperty r1, [7], [20]
         0x120a740e619a @   66 : c1                Star3 
         0x120a740e619b @   67 : 80 08 01 02       CreateClosure [8], [1], #2
         0x120a740e619f @   71 : bf                Star5 
 2054 E> 0x120a740e61a0 @   72 : 5e f7 f9 f5 16    CallProperty1 r3, r1, r5, [22]
         0x120a740e61a5 @   77 : c1                Star3 
 2079 E> 0x120a740e61a6 @   78 : 2d f7 09 18       GetNamedProperty r3, [9], [24]
         0x120a740e61aa @   82 : c2                Star2 
         0x120a740e61ab @   83 : 0c                LdaZero 
         0x120a740e61ac @   84 : c0                Star4 
 2080 E> 0x120a740e61ad @   85 : 5e f8 f7 f6 1a    CallProperty1 r2, r3, r4, [26]
         0x120a740e61b2 @   90 : 9e 04             JumpIfUndefinedOrNull [4] (0x120a740e61b6 @ 94)
         0x120a740e61b4 @   92 : 8a 03             Jump [3] (0x120a740e61b7 @ 95)
         0x120a740e61b6 @   94 : 0f                LdaNull 
 2094 S> 0x120a740e61b7 @   95 : a9                Return 
Constant pool (size = 10)
0x120a740e61b9: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 10
           0: 0x120a740e50d1 <String[10]: #geoUtils_1>
           1: 0x120a740e6219 <String[25]: #movingCirclesIntersection>
           2: 0x120a740e5791 <String[9]: #_position>
           3: 0x120a740e57b1 <String[9]: #_velocity>
           4: 0x120a740e57d1 <String[5]: #_size>
           5: 0x1de71a849f61 <String[6]: #filter>
           6: 0x120a740e6261 <SharedFunctionInfo>
           7: 0x1de71a84eb61 <String[4]: #sort>
           8: 0x120a740e63b9 <SharedFunctionInfo>
           9: 0x316a6076b829 <String[2]: #at>
Handler Table (size = 0)
Source Position Table (size = 39)
0x120a740e64f1 <ByteArray[39]>
0x120a740e6261 points to: [0x120a740e62d0]
=== [0x120a740e62d0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1990 S> 0x120a740e62d0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x120a740e62d4 @    4 : c4                Star0 
         0x120a740e62d5 @    5 : 0c                LdaZero 
 1992 E> 0x120a740e62d6 @    6 : 70 fa 02          TestGreaterThanOrEqual r0, [2]
         0x120a740e62d9 @    9 : 99 0c             JumpIfFalse [12] (0x120a740e62e5 @ 21)
 2013 E> 0x120a740e62db @   11 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x120a740e62df @   15 : c4                Star0 
         0x120a740e62e0 @   16 : 0d 01             LdaSmi [1]
 2015 E> 0x120a740e62e2 @   18 : 6f fa 03          TestLessThanOrEqual r0, [3]
 2019 S> 0x120a740e62e5 @   21 : a9                Return 
Constant pool (size = 1)
0x120a740e62e9: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 1
           0: 0x120a740e6301 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 13)
0x120a740e6319 <ByteArray[13]>
0x120a740e63b9 points to: [0x120a740e6428]
=== [0x120a740e6428] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2071 S> 0x120a740e6428 @    0 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x120a740e642c @    4 : c4                Star0 
 2077 E> 0x120a740e642d @    5 : 2d 04 00 03       GetNamedProperty a1, [0], [3]
 2073 E> 0x120a740e6431 @    9 : 3a fa 00          Sub r0, [0]
 2078 S> 0x120a740e6434 @   12 : a9                Return 
Constant pool (size = 1)
0x120a740e6439: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 1
           0: 0x120a740e6301 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 11)
0x120a740e6451 <ByteArray[11]>
0x120a740e65a1 points to: [0x120a740e6610]
=== [0x120a740e6610] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2146 S> 0x120a740e6610 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x120a740e6614 @    4 : c2                Star2 
 2156 E> 0x120a740e6615 @    5 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x120a740e6619 @    9 : c3                Star1 
 2165 E> 0x120a740e661a @   10 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x120a740e661e @   14 : c1                Star3 
 2156 E> 0x120a740e661f @   15 : 5e f9 f8 f7 06    CallProperty1 r1, r2, r3, [6]
 2139 E> 0x120a740e6624 @   20 : 32 02 00 08       SetNamedProperty <this>, [0], [8]
 2190 S> 0x120a740e6628 @   24 : 2d 02 03 0a       GetNamedProperty <this>, [3], [10]
         0x120a740e662c @   28 : c3                Star1 
 2203 E> 0x120a740e662d @   29 : 2d f9 04 0c       GetNamedProperty r1, [4], [12]
         0x120a740e6631 @   33 : c4                Star0 
 2203 E> 0x120a740e6632 @   34 : 5d fa f9 0e       CallProperty0 r0, r1, [14]
         0x120a740e6636 @   38 : 0e                LdaUndefined 
 2217 S> 0x120a740e6637 @   39 : a9                Return 
Constant pool (size = 5)
0x120a740e6639: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 5
           0: 0x120a740e5791 <String[9]: #_position>
           1: 0x29507e084569 <String[3]: #add>
           2: 0x120a740e57b1 <String[9]: #_velocity>
           3: 0x120a740e5869 <String[12]: #_orientation>
           4: 0x1de71a843f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 23)
0x120a740e6671 <ByteArray[23]>
0x120a740e6709 points to: [0x120a740e6778]
=== [0x120a740e6778] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2243 S> 0x120a740e6778 @    0 : 11                LdaTrue 
 2261 E> 0x120a740e6779 @    1 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x120a740e677d @    5 : 0e                LdaUndefined 
 2273 S> 0x120a740e677e @    6 : a9                Return 
Constant pool (size = 1)
0x120a740e6781: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 1
           0: 0x120a740e57e9 <String[12]: #_isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 9)
0x120a740e6799 <ByteArray[9]>
0x120a740e6821 points to: [0x120a740e6890]
=== [0x120a740e6890] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2339 S> 0x120a740e6890 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x120a740e6894 @    4 : c3                Star1 
 2339 E> 0x120a740e6895 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x120a740e6899 @    9 : c3                Star1 
         0x120a740e689a @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x120a740e689e @   14 : c4                Star0 
 2388 E> 0x120a740e689f @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x120a740e68a3 @   19 : c3                Star1 
 2401 E> 0x120a740e68a4 @   20 : 2d f9 02 08       GetNamedProperty r1, [2], [8]
         0x120a740e68a8 @   24 : 33 fa 03 0a       DefineNamedOwnProperty r0, [3], [10]
         0x120a740e68ac @   28 : 0b fa             Ldar r0
 2431 S> 0x120a740e68ae @   30 : a9                Return 
Constant pool (size = 4)
0x120a740e68b1: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 4
           0: 0x120a740e55a9 <String[15]: #serializeCommon>
           1: 0x120a740e5869 <String[12]: #_orientation>
           2: 0x120a740e68e1 <String[18]: #orientationDegrees>
           3: 0x120a740e6909 <String[11]: #orientation>
Handler Table (size = 0)
Source Position Table (size = 15)
0x120a740e6929 <ByteArray[15]>
0x120a740e69b1 points to: [0x120a740e6a20]
=== [0x120a740e6a20] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2485 S> 0x120a740e6a20 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x120a740e6a24 @    4 : c4                Star0 
 2485 E> 0x120a740e6a25 @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
 2503 S> 0x120a740e6a29 @    9 : a9                Return 
Constant pool (size = 1)
0x120a740e6a31: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 1
           0: 0x120a740e55a9 <String[15]: #serializeCommon>
Handler Table (size = 0)
Source Position Table (size = 9)
0x120a740e6a49 <ByteArray[9]>
0x120a740e6ad1 points to: [0x120a740e6b40]
=== [0x120a740e6b40] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2542 S> 0x120a740e6b40 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x120a740e6b44 @    4 : c4                Star0 
 2572 E> 0x120a740e6b45 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x120a740e6b49 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 2603 E> 0x120a740e6b4d @   13 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x120a740e6b51 @   17 : c2                Star2 
 2612 E> 0x120a740e6b52 @   18 : 2d f8 03 07       GetNamedProperty r2, [3], [7]
         0x120a740e6b56 @   22 : c3                Star1 
 2612 E> 0x120a740e6b57 @   23 : 5d f9 f8 09       CallProperty0 r1, r2, [9]
         0x120a740e6b5b @   27 : 33 fa 02 0b       DefineNamedOwnProperty r0, [2], [11]
 2652 E> 0x120a740e6b5f @   31 : 2d 02 04 0d       GetNamedProperty <this>, [4], [13]
         0x120a740e6b63 @   35 : c2                Star2 
 2661 E> 0x120a740e6b64 @   36 : 2d f8 03 0f       GetNamedProperty r2, [3], [15]
         0x120a740e6b68 @   40 : c3                Star1 
 2661 E> 0x120a740e6b69 @   41 : 5d f9 f8 11       CallProperty0 r1, r2, [17]
         0x120a740e6b6d @   45 : 33 fa 04 13       DefineNamedOwnProperty r0, [4], [19]
 2697 E> 0x120a740e6b71 @   49 : 2d 02 05 15       GetNamedProperty <this>, [5], [21]
         0x120a740e6b75 @   53 : 33 fa 05 17       DefineNamedOwnProperty r0, [5], [23]
         0x120a740e6b79 @   57 : 0b fa             Ldar r0
 2713 S> 0x120a740e6b7b @   59 : a9                Return 
Constant pool (size = 6)
0x120a740e6b81: [FixedArray] in OldSpace
 - map: 0x29507e0812e1 <Map>
 - length: 6
           0: 0x120a740e6bc1 <ObjectBoilerplateDescription[9]>
           1: 0x29507e0852d9 <String[2]: #id>
           2: 0x29507e085c19 <String[8]: #position>
           3: 0x1de71a8501a9 <String[9]: #serialize>
           4: 0x120a740e54a9 <String[8]: #velocity>
           5: 0x29507e08a111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 25)
0x120a740e6c39 <ByteArray[25]>
Boilerplate at 0x120a740e6bc1: 
0x120a740e6bc1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x29507e082059 <Map>
 - length: 9
           0: 8
           1: 0x29507e0852d9 <String[2]: #id>
           2: 0x29507e081501 <Odd Oddball: uninitialized>
           3: 0x29507e085c19 <String[8]: #position>
           4: 0x29507e081501 <Odd Oddball: uninitialized>
           5: 0x120a740e54a9 <String[8]: #velocity>
           6: 0x29507e081501 <Odd Oddball: uninitialized>
           7: 0x29507e08a111 <String[4]: #size>
           8: 0x29507e081501 <Odd Oddball: uninitialized>
<< OUTPUTTING DISASSEMBLY END >>
