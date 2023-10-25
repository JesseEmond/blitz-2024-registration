<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x33d592a64d18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x33d592a64d18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x33d592a64d1c @    4 : c4                Star0 
 2797 S> 0x33d592a64d1d @    5 : a9                Return 
Constant pool (size = 1)
0x33d592a64d21: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 1
           0: 0x33d592a64d39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x33d592a66c41 <ByteArray[7]>
0x33d592a64d39 points to: [0x33d592a64da8]
=== [0x33d592a64da8] DISASSEMBLY ===
Parameter count 6
Register count 18
Frame size 144
OSR urgency: 0
Bytecode age: 0
   10 E> 0x33d592a64da8 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x33d592a64dab @    3 : 1a f8             PushContext r2
         0x33d592a64dad @    5 : 10                LdaTheHole 
         0x33d592a64dae @    6 : 25 02             StaCurrentContextSlot [2]
         0x33d592a64db0 @    8 : 10                LdaTheHole 
         0x33d592a64db1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x33d592a64db3 @   11 : 10                LdaTheHole 
         0x33d592a64db4 @   12 : 25 04             StaCurrentContextSlot [4]
   76 S> 0x33d592a64db6 @   14 : 21 01 00          LdaGlobal [1], [0]
         0x33d592a64db9 @   17 : c0                Star4 
   83 E> 0x33d592a64dba @   18 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x33d592a64dbe @   22 : c1                Star3 
         0x33d592a64dbf @   23 : 13 03             LdaConstant [3]
         0x33d592a64dc1 @   25 : be                Star6 
   98 E> 0x33d592a64dc2 @   26 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x33d592a64dc6 @   30 : bd                Star7 
         0x33d592a64dc7 @   31 : 19 03 f5          Mov a0, r5
   83 E> 0x33d592a64dca @   34 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x33d592a64dcf @   39 : 0e                LdaUndefined 
  158 E> 0x33d592a64dd0 @   40 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  185 S> 0x33d592a64dd4 @   44 : 13 06             LdaConstant [6]
         0x33d592a64dd6 @   46 : c0                Star4 
  185 E> 0x33d592a64dd7 @   47 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
         0x33d592a64ddb @   51 : c4                Star0 
  225 S> 0x33d592a64ddc @   52 : 13 07             LdaConstant [7]
         0x33d592a64dde @   54 : c0                Star4 
  225 E> 0x33d592a64ddf @   55 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
  225 E> 0x33d592a64de3 @   59 : 25 02             StaCurrentContextSlot [2]
  272 S> 0x33d592a64de5 @   61 : 13 08             LdaConstant [8]
         0x33d592a64de7 @   63 : c0                Star4 
  272 E> 0x33d592a64de8 @   64 : 62 04 f6 0d       CallUndefinedReceiver1 a1, r4, [13]
  272 E> 0x33d592a64dec @   68 : 25 03             StaCurrentContextSlot [3]
  317 S> 0x33d592a64dee @   70 : 13 09             LdaConstant [9]
         0x33d592a64df0 @   72 : c0                Star4 
  317 E> 0x33d592a64df1 @   73 : 62 04 f6 0f       CallUndefinedReceiver1 a1, r4, [15]
  317 E> 0x33d592a64df5 @   77 : 25 04             StaCurrentContextSlot [4]
  372 E> 0x33d592a64df7 @   79 : 2d fa 0b 11       GetNamedProperty r0, [11], [17]
         0x33d592a64dfb @   83 : be                Star6 
         0x33d592a64dfc @   84 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x33d592a64e00 @   88 : c1                Star3 
         0x33d592a64e01 @   89 : 13 0a             LdaConstant [10]
         0x33d592a64e03 @   91 : c0                Star4 
         0x33d592a64e04 @   92 : 80 0d 01 02       CreateClosure [13], [1], #2
         0x33d592a64e08 @   96 : bd                Star7 
         0x33d592a64e09 @   97 : 80 0e 02 02       CreateClosure [14], [2], #2
         0x33d592a64e0d @  101 : bc                Star8 
         0x33d592a64e0e @  102 : 80 0f 03 02       CreateClosure [15], [3], #2
         0x33d592a64e12 @  106 : bb                Star9 
         0x33d592a64e13 @  107 : 80 10 04 02       CreateClosure [16], [4], #2
         0x33d592a64e17 @  111 : ba                Star10 
         0x33d592a64e18 @  112 : 80 11 05 02       CreateClosure [17], [5], #2
         0x33d592a64e1c @  116 : b9                Star11 
         0x33d592a64e1d @  117 : 80 12 06 02       CreateClosure [18], [6], #2
         0x33d592a64e21 @  121 : b8                Star12 
         0x33d592a64e22 @  122 : 80 13 07 02       CreateClosure [19], [7], #2
         0x33d592a64e26 @  126 : b7                Star13 
         0x33d592a64e27 @  127 : 80 14 08 02       CreateClosure [20], [8], #2
         0x33d592a64e2b @  131 : b6                Star14 
         0x33d592a64e2c @  132 : 80 15 09 02       CreateClosure [21], [9], #2
         0x33d592a64e30 @  136 : b5                Star15 
         0x33d592a64e31 @  137 : 80 16 0a 02       CreateClosure [22], [10], #2
         0x33d592a64e35 @  141 : 18 ea             Star r16
         0x33d592a64e37 @  143 : 80 17 0b 02       CreateClosure [23], [11], #2
         0x33d592a64e3b @  147 : 18 e9             Star r17
         0x33d592a64e3d @  149 : 19 f7 f5          Mov r3, r5
         0x33d592a64e40 @  152 : 65 28 00 f6 0e    CallRuntime [DefineClass], r4-r17
         0x33d592a64e45 @  157 : c0                Star4 
         0x33d592a64e46 @  158 : 19 f5 f9          Mov r5, r1
 2722 S> 0x33d592a64e49 @  161 : 0b f9             Ldar r1
 2741 E> 0x33d592a64e4b @  163 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x33d592a64e4f @  167 : 0e                LdaUndefined 
 2794 S> 0x33d592a64e50 @  168 : a9                Return 
Constant pool (size = 24)
0x33d592a64e59: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 24
           0: 0x33d592a64f29 <ScopeInfo FUNCTION_SCOPE>
           1: 0x11beea245ab9 <String[6]: #Object>
           2: 0x11beea244c11 <String[14]: #defineProperty>
           3: 0x33d592a64ff9 <String[10]: #__esModule>
           4: 0x33d592a65019 <ObjectBoilerplateDescription[3]>
           5: 0x33d592a65041 <String[10]: #Projectile>
           6: 0x33d592a65061 <String[8]: #./entity>
           7: 0x33d592a65079 <String[10]: #./geoUtils>
           8: 0x33d592a65099 <String[15]: #./rotating_body>
           9: 0x33d592a650b9 <String[8]: #./vector>
          10: 0x33d592a650d1 <FixedArray[7]>
          11: 0x33d592a65499 <String[6]: #Entity>
          12: 0x33d592a654b1 <SharedFunctionInfo Projectile>
          13: 0x33d592a65981 <SharedFunctionInfo get position>
          14: 0x33d592a65ab1 <SharedFunctionInfo get velocity>
          15: 0x33d592a65be1 <SharedFunctionInfo get size>
          16: 0x33d592a65d09 <SharedFunctionInfo get isDestroyed>
          17: 0x33d592a65e39 <SharedFunctionInfo intersection>
          18: 0x33d592a65fb9 <SharedFunctionInfo checkCollisionDuringCurrentTick>
          19: 0x33d592a66471 <SharedFunctionInfo update>
          20: 0x33d592a665d9 <SharedFunctionInfo destroy>
          21: 0x33d592a666f1 <SharedFunctionInfo serializeForViewer>
          22: 0x33d592a66881 <SharedFunctionInfo serializeForPlayer>
          23: 0x33d592a669a1 <SharedFunctionInfo serializeCommon>
Handler Table (size = 0)
Source Position Table (size = 55)
0x33d592a66bd9 <ByteArray[55]>
Boilerplate at 0x33d592a65019: 
0x33d592a65019: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x11beea242059 <Map>
 - length: 3
           0: 8
           1: 0x11beea246419 <String[5]: #value>
           2: 0x11beea241729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x33d592a650d1 has 7 elements:
0x33d592a650d1: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 7
           0: 14
           1: 0x33d592a65119 <DescriptorArray[6]>
           2: 0x11beea243301 <NumberDictionary[7]>
           3: 0x11beea241329 <FixedArray[0]>
           4: 0x33d592a65259 <DescriptorArray[10]>
           5: 0x11beea243301 <NumberDictionary[7]>
           6: 0x11beea241329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xe (14)
Element[1]
0x33d592a65119: [DescriptorArray] in OldSpace
 - map: 0x11beea247761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 6
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x11beea2455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 3, attrs: [__C]) @ 0x26925f374fe1 <AccessorInfo>
  [1]: 0x11beea2458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 4, attrs: [__C]) @ 0x26925f374f71 <AccessorInfo>
  [2]: 0x11beea245cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x26925f375051 <AccessorInfo>
  [3]: 0x11beea2465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x33d592a651f1 <ClassPositions 338, 2721>
  [4]: 0x33d592a65209: [String] in OldSpace: #intersection (const data descriptor, p: 2, attrs: [W_C]) @ 7
  [5]: 0x33d592a65229: [String] in OldSpace: #checkCollisionDuringCurrentTick (const data descriptor, p: 5, attrs: [W_C]) @ 8
Element[2]
0x11beea243301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x11beea241329: [FixedArray] in ReadOnlySpace
 - map: 0x11beea2412e1 <Map>
 - length: 0
Element[4]
0x33d592a65259: [DescriptorArray] in OldSpace
 - map: 0x11beea247761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 10
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x11beea244a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x11beea245c19: [String] in ReadOnlySpace: #position (const accessor descriptor, p: 4, attrs: [W_C]) @ 0x33d592a65361 <AccessorPair>(get: 3, set: 0x11beea241339 <null>)
  [2]: 0x33d592a65379: [String] in OldSpace: #velocity (const accessor descriptor, p: 0, attrs: [W_C]) @ 0x33d592a65391 <AccessorPair>(get: 4, set: 0x11beea241339 <null>)
  [3]: 0x11beea24a111: [String] in ReadOnlySpace: #size (const accessor descriptor, p: 5, attrs: [W_C]) @ 0x33d592a653a9 <AccessorPair>(get: 5, set: 0x11beea241339 <null>)
  [4]: 0x26925f34b511: [String] in OldSpace: #isDestroyed (const accessor descriptor, p: 2, attrs: [W_C]) @ 0x33d592a653e1 <AccessorPair>(get: 6, set: 0x11beea241339 <null>)
  [5]: 0x26925f343f01: [String] in OldSpace: #update (const data descriptor, p: 3, attrs: [W_C]) @ 9
  [6]: 0x26925f34ba19: [String] in OldSpace: #destroy (const data descriptor, p: 9, attrs: [W_C]) @ 10
  [7]: 0x33d592a65429: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 8, attrs: [W_C]) @ 11
  [8]: 0x33d592a65451: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 7, attrs: [W_C]) @ 12
  [9]: 0x33d592a65479: [String] in OldSpace: #serializeCommon (const data descriptor, p: 6, attrs: [W_C]) @ 13
Element[5]
0x11beea243301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x11beea241329: [FixedArray] in ReadOnlySpace
 - map: 0x11beea2412e1 <Map>
 - length: 0
0x33d592a654b1 points to: [0x33d592a65520]
=== [0x33d592a65520] DISASSEMBLY ===
Parameter count 4
Register count 10
Frame size 80
OSR urgency: 0
Bytecode age: 0
         0x33d592a65520 @    0 : 19 fe f9          Mov <closure>, r1
         0x33d592a65523 @    3 : 19 03 f8          Mov a0, r2
         0x33d592a65526 @    6 : 0b 04             Ldar a1
         0x33d592a65528 @    8 : 9d 19             JumpIfNotUndefined [25] (0x33d592a65541 @ 33)
         0x33d592a6552a @   10 : 17 04             LdaImmutableCurrentContextSlot [4]
  422 E> 0x33d592a6552c @   12 : aa 00             ThrowReferenceErrorIfHole [0]
         0x33d592a6552e @   14 : bf                Star5 
  431 E> 0x33d592a6552f @   15 : 2d f5 01 00       GetNamedProperty r5, [1], [0]
         0x33d592a65533 @   19 : bf                Star5 
         0x33d592a65534 @   20 : 0c                LdaZero 
         0x33d592a65535 @   21 : be                Star6 
         0x33d592a65536 @   22 : 0c                LdaZero 
         0x33d592a65537 @   23 : bd                Star7 
         0x33d592a65538 @   24 : 0b f5             Ldar r5
  418 E> 0x33d592a6553a @   26 : 69 f5 f4 02 02    Construct r5, r6-r7, [2]
         0x33d592a6553f @   31 : 8a 04             Jump [4] (0x33d592a65543 @ 35)
         0x33d592a65541 @   33 : 0b 04             Ldar a1
         0x33d592a65543 @   35 : c1                Star3 
         0x33d592a65544 @   36 : 0b 05             Ldar a2
         0x33d592a65546 @   38 : 9d 06             JumpIfNotUndefined [6] (0x33d592a6554c @ 44)
         0x33d592a65548 @   40 : 0d 01             LdaSmi [1]
         0x33d592a6554a @   42 : 8a 04             Jump [4] (0x33d592a6554e @ 46)
         0x33d592a6554c @   44 : 0b 05             Ldar a2
         0x33d592a6554e @   46 : c0                Star4 
  465 S> 0x33d592a6554f @   47 : 0b f9             Ldar r1
         0x33d592a65551 @   49 : 5a f4             GetSuperConstructor r6
         0x33d592a65553 @   51 : ad f4             ThrowIfNotSuperConstructor r6
         0x33d592a65555 @   53 : 0b fa             Ldar r0
  465 E> 0x33d592a65557 @   55 : 69 f4 fa 00 04    Construct r6, r0-r0, [4]
         0x33d592a6555c @   60 : bd                Star7 
         0x33d592a6555d @   61 : 0b 02             Ldar <this>
         0x33d592a6555f @   63 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x33d592a65560 @   64 : 19 f3 02          Mov r7, <this>
  482 S> 0x33d592a65563 @   67 : 0b 02             Ldar <this>
         0x33d592a65565 @   69 : ab                ThrowSuperNotCalledIfHole 
         0x33d592a65566 @   70 : 0b f8             Ldar r2
  497 E> 0x33d592a65568 @   72 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
  517 S> 0x33d592a6556c @   76 : 0b 02             Ldar <this>
         0x33d592a6556e @   78 : ab                ThrowSuperNotCalledIfHole 
         0x33d592a6556f @   79 : 0b f7             Ldar r3
  532 E> 0x33d592a65571 @   81 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
  552 S> 0x33d592a65575 @   85 : 0b 02             Ldar <this>
         0x33d592a65577 @   87 : ab                ThrowSuperNotCalledIfHole 
         0x33d592a65578 @   88 : 0b f6             Ldar r4
  563 E> 0x33d592a6557a @   90 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
  579 S> 0x33d592a6557e @   94 : 0b 02             Ldar <this>
         0x33d592a65580 @   96 : ab                ThrowSuperNotCalledIfHole 
         0x33d592a65581 @   97 : 12                LdaFalse 
  597 E> 0x33d592a65582 @   98 : 32 02 05 0c       SetNamedProperty <this>, [5], [12]
  614 S> 0x33d592a65586 @  102 : 0b 02             Ldar <this>
         0x33d592a65588 @  104 : ab                ThrowSuperNotCalledIfHole 
         0x33d592a65589 @  105 : 17 03             LdaImmutableCurrentContextSlot [3]
  638 E> 0x33d592a6558b @  107 : aa 06             ThrowReferenceErrorIfHole [6]
         0x33d592a6558d @  109 : be                Star6 
  654 E> 0x33d592a6558e @  110 : 2d f4 07 0e       GetNamedProperty r6, [7], [14]
         0x33d592a65592 @  114 : be                Star6 
  667 E> 0x33d592a65593 @  115 : 21 08 11          LdaGlobal [8], [17]
         0x33d592a65596 @  118 : bc                Star8 
  672 E> 0x33d592a65597 @  119 : 2d f2 09 13       GetNamedProperty r8, [9], [19]
         0x33d592a6559b @  123 : bd                Star7 
  672 E> 0x33d592a6559c @  124 : 5d f3 f2 15       CallProperty0 r7, r8, [21]
  681 E> 0x33d592a655a0 @  128 : 00 47 68 01 10 00 MulSmi.Wide [360], [16]
         0x33d592a655a6 @  134 : bd                Star7 
  689 E> 0x33d592a655a7 @  135 : 21 08 11          LdaGlobal [8], [17]
         0x33d592a655aa @  138 : bb                Star9 
  694 E> 0x33d592a655ab @  139 : 2d f1 09 13       GetNamedProperty r9, [9], [19]
         0x33d592a655af @  143 : bc                Star8 
  694 E> 0x33d592a655b0 @  144 : 5d f2 f1 19       CallProperty0 r8, r9, [25]
         0x33d592a655b4 @  148 : bc                Star8 
         0x33d592a655b5 @  149 : 13 0a             LdaConstant [10]
  703 E> 0x33d592a655b7 @  151 : 3a f2 18          Sub r8, [24]
         0x33d592a655ba @  154 : bc                Star8 
         0x33d592a655bb @  155 : 00 0d 90 01       LdaSmi.Wide [400]
         0x33d592a655bf @  159 : bb                Star9 
         0x33d592a655c0 @  160 : 0b f6             Ldar r4
  717 E> 0x33d592a655c2 @  162 : 3c f1 1b          Div r9, [27]
  710 E> 0x33d592a655c5 @  165 : 3b f2 17          Mul r8, [23]
         0x33d592a655c8 @  168 : bc                Star8 
         0x33d592a655c9 @  169 : 0b f4             Ldar r6
  634 E> 0x33d592a655cb @  171 : 69 f4 f3 02 1c    Construct r6, r7-r8, [28]
  632 E> 0x33d592a655d0 @  176 : 32 02 0b 1e       SetNamedProperty <this>, [11], [30]
         0x33d592a655d4 @  180 : 0b 02             Ldar <this>
         0x33d592a655d6 @  182 : ab                ThrowSuperNotCalledIfHole 
  731 S> 0x33d592a655d7 @  183 : a9                Return 
Constant pool (size = 12)
0x33d592a655d9: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 12
           0: 0x33d592a64fe1 <String[8]: #vector_1>
           1: 0x33d592a65649 <String[6]: #Vector>
           2: 0x33d592a65661 <String[9]: #_position>
           3: 0x33d592a65681 <String[9]: #_velocity>
           4: 0x33d592a656a1 <String[5]: #_size>
           5: 0x33d592a656b9 <String[12]: #_isDestroyed>
           6: 0x33d592a64fc1 <String[15]: #rotating_body_1>
           7: 0x33d592a656d9 <String[12]: #RotatingBody>
           8: 0x26925f35a991 <String[4]: #Math>
           9: 0x26925f35aba1 <String[6]: #random>
          10: 0x33d592a65729 <HeapNumber 0.5>
          11: 0x33d592a65739 <String[12]: #_orientation>
Handler Table (size = 0)
Source Position Table (size = 64)
0x33d592a65759 <ByteArray[64]>
0x33d592a65981 points to: [0x33d592a659f0]
=== [0x33d592a659f0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  774 S> 0x33d592a659f0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  784 S> 0x33d592a659f4 @    4 : a9                Return 
Constant pool (size = 1)
0x33d592a659f9: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 1
           0: 0x33d592a65661 <String[9]: #_position>
Handler Table (size = 0)
Source Position Table (size = 7)
0x33d592a65a11 <ByteArray[7]>
0x33d592a65ab1 points to: [0x33d592a65b20]
=== [0x33d592a65b20] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  832 S> 0x33d592a65b20 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  842 S> 0x33d592a65b24 @    4 : a9                Return 
Constant pool (size = 1)
0x33d592a65b29: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 1
           0: 0x33d592a65681 <String[9]: #_velocity>
Handler Table (size = 0)
Source Position Table (size = 7)
0x33d592a65b41 <ByteArray[7]>
0x33d592a65be1 points to: [0x33d592a65c50]
=== [0x33d592a65c50] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  886 S> 0x33d592a65c50 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  892 S> 0x33d592a65c54 @    4 : a9                Return 
Constant pool (size = 1)
0x33d592a65c59: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 1
           0: 0x33d592a656a1 <String[5]: #_size>
Handler Table (size = 0)
Source Position Table (size = 7)
0x33d592a65c71 <ByteArray[7]>
0x33d592a65d09 points to: [0x33d592a65d78]
=== [0x33d592a65d78] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  943 S> 0x33d592a65d78 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  956 S> 0x33d592a65d7c @    4 : a9                Return 
Constant pool (size = 1)
0x33d592a65d81: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 1
           0: 0x33d592a656b9 <String[12]: #_isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 7)
0x33d592a65d99 <ByteArray[7]>
0x33d592a65e39 points to: [0x33d592a65ea8]
=== [0x33d592a65ea8] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1354 S> 0x33d592a65ea8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x33d592a65eaa @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x33d592a65eac @    4 : c3                Star1 
 1376 E> 0x33d592a65ead @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x33d592a65eb1 @    9 : c4                Star0 
 1403 E> 0x33d592a65eb2 @   10 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x33d592a65eb6 @   14 : c3                Star1 
 1415 E> 0x33d592a65eb7 @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x33d592a65ebb @   19 : c2                Star2 
 1427 E> 0x33d592a65ebc @   20 : 2d 04 02 06       GetNamedProperty a1, [2], [6]
         0x33d592a65ec0 @   24 : c1                Star3 
 1439 E> 0x33d592a65ec1 @   25 : 2d 04 03 08       GetNamedProperty a1, [3], [8]
         0x33d592a65ec5 @   29 : c0                Star4 
 1400 E> 0x33d592a65ec6 @   30 : 60 fa f9 04 0a    CallUndefinedReceiver r0, r1-r4, [10]
 1449 S> 0x33d592a65ecb @   35 : a9                Return 
Constant pool (size = 4)
0x33d592a65ed1: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 4
           0: 0x33d592a64fa1 <String[10]: #geoUtils_1>
           1: 0x33d592a65f01 <String[23]: #lineSegmentIntersection>
           2: 0x11beea245c19 <String[8]: #position>
           3: 0x33d592a65379 <String[8]: #velocity>
Handler Table (size = 0)
Source Position Table (size = 21)
0x33d592a65f29 <ByteArray[21]>
0x33d592a65fb9 points to: [0x33d592a66028]
=== [0x33d592a66028] DISASSEMBLY ===
Parameter count 3
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
 1794 S> 0x33d592a66028 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x33d592a6602a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x33d592a6602c @    4 : c1                Star3 
 1809 E> 0x33d592a6602d @    5 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x33d592a66031 @    9 : c2                Star2 
 1838 E> 0x33d592a66032 @   10 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x33d592a66036 @   14 : c1                Star3 
 1851 E> 0x33d592a66037 @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x33d592a6603b @   19 : c0                Star4 
 1864 E> 0x33d592a6603c @   20 : 2d 03 04 06       GetNamedProperty a0, [4], [6]
         0x33d592a66040 @   24 : bf                Star5 
 1873 E> 0x33d592a66041 @   25 : 2d 04 02 08       GetNamedProperty a1, [2], [8]
         0x33d592a66045 @   29 : be                Star6 
 1886 E> 0x33d592a66046 @   30 : 2d 04 03 0a       GetNamedProperty a1, [3], [10]
         0x33d592a6604a @   34 : bd                Star7 
 1899 E> 0x33d592a6604b @   35 : 2d 04 04 0c       GetNamedProperty a1, [4], [12]
         0x33d592a6604f @   39 : bc                Star8 
 1835 E> 0x33d592a66050 @   40 : 60 f8 f7 06 0e    CallUndefinedReceiver r2, r3-r8, [14]
         0x33d592a66055 @   45 : c4                Star0 
 1954 S> 0x33d592a66056 @   46 : 2d fa 05 10       GetNamedProperty r0, [5], [16]
         0x33d592a6605a @   50 : c2                Star2 
         0x33d592a6605b @   51 : 80 06 00 02       CreateClosure [6], [0], #2
         0x33d592a6605f @   55 : c0                Star4 
 1954 E> 0x33d592a66060 @   56 : 5e f8 fa f6 12    CallProperty1 r2, r0, r4, [18]
         0x33d592a66065 @   61 : c3                Star1 
 2054 S> 0x33d592a66066 @   62 : 2d f9 07 14       GetNamedProperty r1, [7], [20]
         0x33d592a6606a @   66 : c1                Star3 
         0x33d592a6606b @   67 : 80 08 01 02       CreateClosure [8], [1], #2
         0x33d592a6606f @   71 : bf                Star5 
 2054 E> 0x33d592a66070 @   72 : 5e f7 f9 f5 16    CallProperty1 r3, r1, r5, [22]
         0x33d592a66075 @   77 : c1                Star3 
 2079 E> 0x33d592a66076 @   78 : 2d f7 09 18       GetNamedProperty r3, [9], [24]
         0x33d592a6607a @   82 : c2                Star2 
         0x33d592a6607b @   83 : 0c                LdaZero 
         0x33d592a6607c @   84 : c0                Star4 
 2080 E> 0x33d592a6607d @   85 : 5e f8 f7 f6 1a    CallProperty1 r2, r3, r4, [26]
         0x33d592a66082 @   90 : 9e 04             JumpIfUndefinedOrNull [4] (0x33d592a66086 @ 94)
         0x33d592a66084 @   92 : 8a 03             Jump [3] (0x33d592a66087 @ 95)
         0x33d592a66086 @   94 : 0f                LdaNull 
 2094 S> 0x33d592a66087 @   95 : a9                Return 
Constant pool (size = 10)
0x33d592a66089: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 10
           0: 0x33d592a64fa1 <String[10]: #geoUtils_1>
           1: 0x33d592a660e9 <String[25]: #movingCirclesIntersection>
           2: 0x33d592a65661 <String[9]: #_position>
           3: 0x33d592a65681 <String[9]: #_velocity>
           4: 0x33d592a656a1 <String[5]: #_size>
           5: 0x26925f349f61 <String[6]: #filter>
           6: 0x33d592a66131 <SharedFunctionInfo>
           7: 0x26925f34eb61 <String[4]: #sort>
           8: 0x33d592a66289 <SharedFunctionInfo>
           9: 0x07173176b829 <String[2]: #at>
Handler Table (size = 0)
Source Position Table (size = 39)
0x33d592a663c1 <ByteArray[39]>
0x33d592a66131 points to: [0x33d592a661a0]
=== [0x33d592a661a0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1990 S> 0x33d592a661a0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x33d592a661a4 @    4 : c4                Star0 
         0x33d592a661a5 @    5 : 0c                LdaZero 
 1992 E> 0x33d592a661a6 @    6 : 70 fa 02          TestGreaterThanOrEqual r0, [2]
         0x33d592a661a9 @    9 : 99 0c             JumpIfFalse [12] (0x33d592a661b5 @ 21)
 2013 E> 0x33d592a661ab @   11 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x33d592a661af @   15 : c4                Star0 
         0x33d592a661b0 @   16 : 0d 01             LdaSmi [1]
 2015 E> 0x33d592a661b2 @   18 : 6f fa 03          TestLessThanOrEqual r0, [3]
 2019 S> 0x33d592a661b5 @   21 : a9                Return 
Constant pool (size = 1)
0x33d592a661b9: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 1
           0: 0x33d592a661d1 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 13)
0x33d592a661e9 <ByteArray[13]>
0x33d592a66289 points to: [0x33d592a662f8]
=== [0x33d592a662f8] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2071 S> 0x33d592a662f8 @    0 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x33d592a662fc @    4 : c4                Star0 
 2077 E> 0x33d592a662fd @    5 : 2d 04 00 03       GetNamedProperty a1, [0], [3]
 2073 E> 0x33d592a66301 @    9 : 3a fa 00          Sub r0, [0]
 2078 S> 0x33d592a66304 @   12 : a9                Return 
Constant pool (size = 1)
0x33d592a66309: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 1
           0: 0x33d592a661d1 <String[1]: #t>
Handler Table (size = 0)
Source Position Table (size = 11)
0x33d592a66321 <ByteArray[11]>
0x33d592a66471 points to: [0x33d592a664e0]
=== [0x33d592a664e0] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2146 S> 0x33d592a664e0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x33d592a664e4 @    4 : c2                Star2 
 2156 E> 0x33d592a664e5 @    5 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x33d592a664e9 @    9 : c3                Star1 
 2165 E> 0x33d592a664ea @   10 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x33d592a664ee @   14 : c1                Star3 
 2156 E> 0x33d592a664ef @   15 : 5e f9 f8 f7 06    CallProperty1 r1, r2, r3, [6]
 2139 E> 0x33d592a664f4 @   20 : 32 02 00 08       SetNamedProperty <this>, [0], [8]
 2190 S> 0x33d592a664f8 @   24 : 2d 02 03 0a       GetNamedProperty <this>, [3], [10]
         0x33d592a664fc @   28 : c3                Star1 
 2203 E> 0x33d592a664fd @   29 : 2d f9 04 0c       GetNamedProperty r1, [4], [12]
         0x33d592a66501 @   33 : c4                Star0 
 2203 E> 0x33d592a66502 @   34 : 5d fa f9 0e       CallProperty0 r0, r1, [14]
         0x33d592a66506 @   38 : 0e                LdaUndefined 
 2217 S> 0x33d592a66507 @   39 : a9                Return 
Constant pool (size = 5)
0x33d592a66509: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 5
           0: 0x33d592a65661 <String[9]: #_position>
           1: 0x11beea244569 <String[3]: #add>
           2: 0x33d592a65681 <String[9]: #_velocity>
           3: 0x33d592a65739 <String[12]: #_orientation>
           4: 0x26925f343f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 23)
0x33d592a66541 <ByteArray[23]>
0x33d592a665d9 points to: [0x33d592a66648]
=== [0x33d592a66648] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 2243 S> 0x33d592a66648 @    0 : 11                LdaTrue 
 2261 E> 0x33d592a66649 @    1 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x33d592a6664d @    5 : 0e                LdaUndefined 
 2273 S> 0x33d592a6664e @    6 : a9                Return 
Constant pool (size = 1)
0x33d592a66651: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 1
           0: 0x33d592a656b9 <String[12]: #_isDestroyed>
Handler Table (size = 0)
Source Position Table (size = 9)
0x33d592a66669 <ByteArray[9]>
0x33d592a666f1 points to: [0x33d592a66760]
=== [0x33d592a66760] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2339 S> 0x33d592a66760 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x33d592a66764 @    4 : c3                Star1 
 2339 E> 0x33d592a66765 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x33d592a66769 @    9 : c3                Star1 
         0x33d592a6676a @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x33d592a6676e @   14 : c4                Star0 
 2388 E> 0x33d592a6676f @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x33d592a66773 @   19 : c3                Star1 
 2401 E> 0x33d592a66774 @   20 : 2d f9 02 08       GetNamedProperty r1, [2], [8]
         0x33d592a66778 @   24 : 33 fa 03 0a       DefineNamedOwnProperty r0, [3], [10]
         0x33d592a6677c @   28 : 0b fa             Ldar r0
 2431 S> 0x33d592a6677e @   30 : a9                Return 
Constant pool (size = 4)
0x33d592a66781: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 4
           0: 0x33d592a65479 <String[15]: #serializeCommon>
           1: 0x33d592a65739 <String[12]: #_orientation>
           2: 0x33d592a667b1 <String[18]: #orientationDegrees>
           3: 0x33d592a667d9 <String[11]: #orientation>
Handler Table (size = 0)
Source Position Table (size = 15)
0x33d592a667f9 <ByteArray[15]>
0x33d592a66881 points to: [0x33d592a668f0]
=== [0x33d592a668f0] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2485 S> 0x33d592a668f0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x33d592a668f4 @    4 : c4                Star0 
 2485 E> 0x33d592a668f5 @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
 2503 S> 0x33d592a668f9 @    9 : a9                Return 
Constant pool (size = 1)
0x33d592a66901: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 1
           0: 0x33d592a65479 <String[15]: #serializeCommon>
Handler Table (size = 0)
Source Position Table (size = 9)
0x33d592a66919 <ByteArray[9]>
0x33d592a669a1 points to: [0x33d592a66a10]
=== [0x33d592a66a10] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2542 S> 0x33d592a66a10 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x33d592a66a14 @    4 : c4                Star0 
 2572 E> 0x33d592a66a15 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x33d592a66a19 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 2603 E> 0x33d592a66a1d @   13 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x33d592a66a21 @   17 : c2                Star2 
 2612 E> 0x33d592a66a22 @   18 : 2d f8 03 07       GetNamedProperty r2, [3], [7]
         0x33d592a66a26 @   22 : c3                Star1 
 2612 E> 0x33d592a66a27 @   23 : 5d f9 f8 09       CallProperty0 r1, r2, [9]
         0x33d592a66a2b @   27 : 33 fa 02 0b       DefineNamedOwnProperty r0, [2], [11]
 2652 E> 0x33d592a66a2f @   31 : 2d 02 04 0d       GetNamedProperty <this>, [4], [13]
         0x33d592a66a33 @   35 : c2                Star2 
 2661 E> 0x33d592a66a34 @   36 : 2d f8 03 0f       GetNamedProperty r2, [3], [15]
         0x33d592a66a38 @   40 : c3                Star1 
 2661 E> 0x33d592a66a39 @   41 : 5d f9 f8 11       CallProperty0 r1, r2, [17]
         0x33d592a66a3d @   45 : 33 fa 04 13       DefineNamedOwnProperty r0, [4], [19]
 2697 E> 0x33d592a66a41 @   49 : 2d 02 05 15       GetNamedProperty <this>, [5], [21]
         0x33d592a66a45 @   53 : 33 fa 05 17       DefineNamedOwnProperty r0, [5], [23]
         0x33d592a66a49 @   57 : 0b fa             Ldar r0
 2713 S> 0x33d592a66a4b @   59 : a9                Return 
Constant pool (size = 6)
0x33d592a66a51: [FixedArray] in OldSpace
 - map: 0x11beea2412e1 <Map>
 - length: 6
           0: 0x33d592a66a91 <ObjectBoilerplateDescription[9]>
           1: 0x11beea2452d9 <String[2]: #id>
           2: 0x11beea245c19 <String[8]: #position>
           3: 0x26925f3501a9 <String[9]: #serialize>
           4: 0x33d592a65379 <String[8]: #velocity>
           5: 0x11beea24a111 <String[4]: #size>
Handler Table (size = 0)
Source Position Table (size = 25)
0x33d592a66b09 <ByteArray[25]>
Boilerplate at 0x33d592a66a91: 
0x33d592a66a91: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x11beea242059 <Map>
 - length: 9
           0: 8
           1: 0x11beea2452d9 <String[2]: #id>
           2: 0x11beea241501 <Odd Oddball: uninitialized>
           3: 0x11beea245c19 <String[8]: #position>
           4: 0x11beea241501 <Odd Oddball: uninitialized>
           5: 0x33d592a65379 <String[8]: #velocity>
           6: 0x11beea241501 <Odd Oddball: uninitialized>
           7: 0x11beea24a111 <String[4]: #size>
           8: 0x11beea241501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
