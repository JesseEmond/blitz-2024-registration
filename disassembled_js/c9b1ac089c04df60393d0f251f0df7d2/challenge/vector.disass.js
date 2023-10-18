<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x12827d264e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x12827d264e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x12827d264e4c @    4 : c4                Star0 
 2130 S> 0x12827d264e4d @    5 : a9                Return 
Constant pool (size = 1)
0x12827d264e51: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 1
           0: 0x12827d264e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x12827d267671 <ByteArray[7]>
0x12827d264e69 points to: [0x12827d264ed8]
=== [0x12827d264ed8] DISASSEMBLY ===
Parameter count 6
Register count 26
Frame size 208
OSR urgency: 0
Bytecode age: 0
   76 S> 0x12827d264ed8 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x12827d264edb @    3 : c2                Star2 
   83 E> 0x12827d264edc @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x12827d264ee0 @    8 : c3                Star1 
         0x12827d264ee1 @    9 : 13 02             LdaConstant [2]
         0x12827d264ee3 @   11 : c0                Star4 
   98 E> 0x12827d264ee4 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x12827d264ee8 @   16 : bf                Star5 
         0x12827d264ee9 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x12827d264eec @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x12827d264ef1 @   25 : 0e                LdaUndefined 
  154 E> 0x12827d264ef2 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x12827d264ef6 @   30 : 81 05             CreateBlockContext [5]
         0x12827d264ef8 @   32 : 1a f9             PushContext r1
         0x12827d264efa @   34 : 10                LdaTheHole 
         0x12827d264efb @   35 : 25 02             StaCurrentContextSlot [2]
         0x12827d264efd @   37 : 10                LdaTheHole 
         0x12827d264efe @   38 : bf                Star5 
         0x12827d264eff @   39 : 80 07 00 02       CreateClosure [7], [0], #2
         0x12827d264f03 @   43 : c2                Star2 
         0x12827d264f04 @   44 : 13 06             LdaConstant [6]
         0x12827d264f06 @   46 : c1                Star3 
         0x12827d264f07 @   47 : 80 08 01 02       CreateClosure [8], [1], #2
         0x12827d264f0b @   51 : be                Star6 
         0x12827d264f0c @   52 : 80 09 02 02       CreateClosure [9], [2], #2
         0x12827d264f10 @   56 : bd                Star7 
         0x12827d264f11 @   57 : 80 0a 03 02       CreateClosure [10], [3], #2
         0x12827d264f15 @   61 : bc                Star8 
         0x12827d264f16 @   62 : 80 0b 04 02       CreateClosure [11], [4], #2
         0x12827d264f1a @   66 : bb                Star9 
         0x12827d264f1b @   67 : 80 0c 05 02       CreateClosure [12], [5], #2
         0x12827d264f1f @   71 : ba                Star10 
         0x12827d264f20 @   72 : 80 0d 06 02       CreateClosure [13], [6], #2
         0x12827d264f24 @   76 : b9                Star11 
         0x12827d264f25 @   77 : 80 0e 07 02       CreateClosure [14], [7], #2
         0x12827d264f29 @   81 : b8                Star12 
         0x12827d264f2a @   82 : 80 0f 08 02       CreateClosure [15], [8], #2
         0x12827d264f2e @   86 : b7                Star13 
         0x12827d264f2f @   87 : 80 10 09 02       CreateClosure [16], [9], #2
         0x12827d264f33 @   91 : b6                Star14 
         0x12827d264f34 @   92 : 80 11 0a 02       CreateClosure [17], [10], #2
         0x12827d264f38 @   96 : b5                Star15 
         0x12827d264f39 @   97 : 80 12 0b 02       CreateClosure [18], [11], #2
         0x12827d264f3d @  101 : 18 ea             Star r16
         0x12827d264f3f @  103 : 80 13 0c 02       CreateClosure [19], [12], #2
         0x12827d264f43 @  107 : 18 e9             Star r17
         0x12827d264f45 @  109 : 80 14 0d 02       CreateClosure [20], [13], #2
         0x12827d264f49 @  113 : 18 e8             Star r18
         0x12827d264f4b @  115 : 80 15 0e 02       CreateClosure [21], [14], #2
         0x12827d264f4f @  119 : 18 e7             Star r19
         0x12827d264f51 @  121 : 80 16 0f 02       CreateClosure [22], [15], #2
         0x12827d264f55 @  125 : 18 e6             Star r20
         0x12827d264f57 @  127 : 80 17 10 02       CreateClosure [23], [16], #2
         0x12827d264f5b @  131 : 18 e5             Star r21
         0x12827d264f5d @  133 : 80 18 11 02       CreateClosure [24], [17], #2
         0x12827d264f61 @  137 : 18 e4             Star r22
         0x12827d264f63 @  139 : 80 19 12 02       CreateClosure [25], [18], #2
         0x12827d264f67 @  143 : 18 e3             Star r23
         0x12827d264f69 @  145 : 80 1a 13 02       CreateClosure [26], [19], #2
         0x12827d264f6d @  149 : 18 e2             Star r24
         0x12827d264f6f @  151 : 80 1b 14 02       CreateClosure [27], [20], #2
         0x12827d264f73 @  155 : 18 e1             Star r25
         0x12827d264f75 @  157 : 19 f8 f6          Mov r2, r4
         0x12827d264f78 @  160 : 65 28 00 f7 17    CallRuntime [DefineClass], r3-r25
         0x12827d264f7d @  165 : c1                Star3 
         0x12827d264f7e @  166 : 0b f6             Ldar r4
         0x12827d264f80 @  168 : 25 02             StaCurrentContextSlot [2]
         0x12827d264f82 @  170 : 1b f9             PopContext r1
         0x12827d264f84 @  172 : c4                Star0 
 2067 S> 0x12827d264f85 @  173 : 0b fa             Ldar r0
 2082 E> 0x12827d264f87 @  175 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x12827d264f8b @  179 : 0e                LdaUndefined 
 2127 S> 0x12827d264f8c @  180 : a9                Return 
Constant pool (size = 28)
0x12827d264f91: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 28
           0: 0x332522985ab9 <String[6]: #Object>
           1: 0x332522984c11 <String[14]: #defineProperty>
           2: 0x12827d265081 <String[10]: #__esModule>
           3: 0x12827d2650a1 <ObjectBoilerplateDescription[3]>
           4: 0x12827d2650c9 <String[6]: #Vector>
           5: 0x12827d2650e1 <ScopeInfo CLASS_SCOPE>
           6: 0x12827d265121 <FixedArray[7]>
           7: 0x12827d2656e1 <SharedFunctionInfo Vector>
           8: 0x12827d2659c9 <SharedFunctionInfo get x>
           9: 0x12827d265af1 <SharedFunctionInfo get y>
          10: 0x12827d265c19 <SharedFunctionInfo get magnitude>
          11: 0x12827d265e11 <SharedFunctionInfo get normalized>
          12: 0x12827d265f61 <SharedFunctionInfo get angleDeg>
          13: 0x12827d2660d1 <SharedFunctionInfo get angle>
          14: 0x12827d266251 <SharedFunctionInfo add>
          15: 0x12827d2663b1 <SharedFunctionInfo subtract>
          16: 0x12827d266511 <SharedFunctionInfo multiply>
          17: 0x12827d266661 <SharedFunctionInfo rotate>
          18: 0x12827d2667b9 <SharedFunctionInfo dotProduct>
          19: 0x12827d2668f9 <SharedFunctionInfo crossProduct>
          20: 0x12827d266a39 <SharedFunctionInfo distanceBetween>
          21: 0x12827d266b61 <SharedFunctionInfo fromPolar>
          22: 0x12827d266d09 <SharedFunctionInfo fromPolarDeg>
          23: 0x12827d266e61 <SharedFunctionInfo roundToFixedPrecision>
          24: 0x12827d266fd1 <SharedFunctionInfo roundCoordinateToFixedPrecision>
          25: 0x12827d267161 <SharedFunctionInfo equals>
          26: 0x12827d2672b1 <SharedFunctionInfo serialize>
          27: 0x12827d267421 <SharedFunctionInfo toString>
Handler Table (size = 0)
Source Position Table (size = 25)
0x12827d2675e1 <ByteArray[25]>
Boilerplate at 0x12827d2650a1: 
0x12827d2650a1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x332522982059 <Map>
 - length: 3
           0: 8
           1: 0x332522986419 <String[5]: #value>
           2: 0x332522981729 <true>
Array at 0x12827d265121 has 7 elements:
0x12827d265121: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 7
           0: 23
           1: 0x12827d265169 <DescriptorArray[10]>
           2: 0x332522983301 <NumberDictionary[7]>
           3: 0x332522981329 <FixedArray[0]>
           4: 0x12827d265389 <DescriptorArray[15]>
           5: 0x332522983301 <NumberDictionary[7]>
           6: 0x332522981329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x17 (23)
Element[1]
0x12827d265169: [DescriptorArray] in OldSpace
 - map: 0x332522987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 10
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3325229855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 8, attrs: [__C]) @ 0x37322b1f4fe1 <AccessorInfo>
  [1]: 0x3325229858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 6, attrs: [__C]) @ 0x37322b1f4f71 <AccessorInfo>
  [2]: 0x332522985cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 7, attrs: [___]) @ 0x37322b1f5051 <AccessorInfo>
  [3]: 0x3325229865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x12827d2652a1 <ClassPositions 164, 2066>
  [4]: 0x12827d2652b9: [String] in OldSpace: #dotProduct (const data descriptor, p: 4, attrs: [W_C]) @ 13
  [5]: 0x12827d2652d9: [String] in OldSpace: #crossProduct (const data descriptor, p: 5, attrs: [W_C]) @ 14
  [6]: 0x12827d2652f9: [String] in OldSpace: #distanceBetween (const data descriptor, p: 3, attrs: [W_C]) @ 15
  [7]: 0x12827d265319: [String] in OldSpace: #fromPolar (const data descriptor, p: 1, attrs: [W_C]) @ 16
  [8]: 0x12827d265339: [String] in OldSpace: #fromPolarDeg (const data descriptor, p: 9, attrs: [W_C]) @ 17
  [9]: 0x12827d265359: [String] in OldSpace: #roundCoordinateToFixedPrecision (const data descriptor, p: 0, attrs: [W_C]) @ 19
Element[2]
0x332522983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x332522981329: [FixedArray] in ReadOnlySpace
 - map: 0x3325229812e1 <Map>
 - length: 0
Element[4]
0x12827d265389: [DescriptorArray] in OldSpace
 - map: 0x332522987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 15
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x332522984a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 11, attrs: [W_C]) @ 1
  [1]: 0x37322b1d8ac9: [String] in OldSpace: #x (const accessor descriptor, p: 9, attrs: [W_C]) @ 0x12827d265521 <AccessorPair>(get: 3, set: 0x332522981339 <null>)
  [2]: 0x37322b1d8ae1: [String] in OldSpace: #y (const accessor descriptor, p: 8, attrs: [W_C]) @ 0x12827d265551 <AccessorPair>(get: 4, set: 0x332522981339 <null>)
  [3]: 0x12827d265569: [String] in OldSpace: #magnitude (const accessor descriptor, p: 6, attrs: [W_C]) @ 0x12827d265589 <AccessorPair>(get: 5, set: 0x332522981339 <null>)
  [4]: 0x12827d2655a1: [String] in OldSpace: #normalized (const accessor descriptor, p: 0, attrs: [W_C]) @ 0x12827d2655c1 <AccessorPair>(get: 6, set: 0x332522981339 <null>)
  [5]: 0x12827d2655d9: [String] in OldSpace: #angleDeg (const accessor descriptor, p: 5, attrs: [W_C]) @ 0x12827d2655f1 <AccessorPair>(get: 7, set: 0x332522981339 <null>)
  [6]: 0x12827d265609: [String] in OldSpace: #angle (const accessor descriptor, p: 1, attrs: [W_C]) @ 0x12827d265621 <AccessorPair>(get: 8, set: 0x332522981339 <null>)
  [7]: 0x332522984569: [String] in ReadOnlySpace: #add (const data descriptor, p: 2, attrs: [W_C]) @ 9
  [8]: 0x12827d265639: [String] in OldSpace: #subtract (const data descriptor, p: 13, attrs: [W_C]) @ 10
  [9]: 0x12827d265651: [String] in OldSpace: #multiply (const data descriptor, p: 12, attrs: [W_C]) @ 11
  [10]: 0x12827d265669: [String] in OldSpace: #rotate (const data descriptor, p: 7, attrs: [W_C]) @ 12
  [11]: 0x12827d265681: [String] in OldSpace: #roundToFixedPrecision (const data descriptor, p: 10, attrs: [W_C]) @ 18
  [12]: 0x37322b1c7411: [String] in OldSpace: #equals (const data descriptor, p: 4, attrs: [W_C]) @ 20
  [13]: 0x37322b1d01a9: [String] in OldSpace: #serialize (const data descriptor, p: 14, attrs: [W_C]) @ 21
  [14]: 0x3325229862b9: [String] in ReadOnlySpace: #toString (const data descriptor, p: 3, attrs: [W_C]) @ 22
Element[5]
0x332522983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x332522981329: [FixedArray] in ReadOnlySpace
 - map: 0x3325229812e1 <Map>
 - length: 0
0x12827d2656e1 points to: [0x12827d265750]
=== [0x12827d265750] DISASSEMBLY ===
Parameter count 3
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  213 S> 0x12827d265750 @    0 : 0b 03             Ldar a0
  221 E> 0x12827d265752 @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  235 S> 0x12827d265756 @    6 : 0b 04             Ldar a1
  243 E> 0x12827d265758 @    8 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
         0x12827d26575c @   12 : 0e                LdaUndefined 
  253 S> 0x12827d26575d @   13 : a9                Return 
Constant pool (size = 2)
0x12827d265761: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 2
           0: 0x12827d265781 <String[2]: #_x>
           1: 0x12827d265799 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 13)
0x12827d2657b1 <ByteArray[13]>
0x12827d2659c9 points to: [0x12827d265a38]
=== [0x12827d265a38] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  289 S> 0x12827d265a38 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  292 S> 0x12827d265a3c @    4 : a9                Return 
Constant pool (size = 1)
0x12827d265a41: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 1
           0: 0x12827d265781 <String[2]: #_x>
Handler Table (size = 0)
Source Position Table (size = 7)
0x12827d265a59 <ByteArray[7]>
0x12827d265af1 points to: [0x12827d265b60]
=== [0x12827d265b60] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  333 S> 0x12827d265b60 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  336 S> 0x12827d265b64 @    4 : a9                Return 
Constant pool (size = 1)
0x12827d265b69: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 1
           0: 0x12827d265799 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 7)
0x12827d265b81 <ByteArray[7]>
0x12827d265c19 points to: [0x12827d265c88]
=== [0x12827d265c88] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  373 S> 0x12827d265c88 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x12827d265c8b @    3 : c3                Star1 
  385 E> 0x12827d265c8c @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x12827d265c90 @    8 : c4                Star0 
  390 E> 0x12827d265c91 @    9 : 21 00 00          LdaGlobal [0], [0]
         0x12827d265c94 @   12 : c1                Star3 
  395 E> 0x12827d265c95 @   13 : 2d f7 02 05       GetNamedProperty r3, [2], [5]
         0x12827d265c99 @   17 : c2                Star2 
  404 E> 0x12827d265c9a @   18 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0x12827d265c9e @   22 : c0                Star4 
         0x12827d265c9f @   23 : 0d 02             LdaSmi [2]
         0x12827d265ca1 @   25 : bf                Star5 
  395 E> 0x12827d265ca2 @   26 : 5f f8 f7 f6 f5 09 CallProperty2 r2, r3, r4, r5, [9]
         0x12827d265ca8 @   32 : c2                Star2 
  413 E> 0x12827d265ca9 @   33 : 21 00 00          LdaGlobal [0], [0]
         0x12827d265cac @   36 : c0                Star4 
  418 E> 0x12827d265cad @   37 : 2d f6 02 05       GetNamedProperty r4, [2], [5]
         0x12827d265cb1 @   41 : c1                Star3 
  427 E> 0x12827d265cb2 @   42 : 2d 02 04 0b       GetNamedProperty <this>, [4], [11]
         0x12827d265cb6 @   46 : bf                Star5 
         0x12827d265cb7 @   47 : 0d 02             LdaSmi [2]
         0x12827d265cb9 @   49 : be                Star6 
  418 E> 0x12827d265cba @   50 : 5f f7 f6 f5 f4 0d CallProperty2 r3, r4, r5, r6, [13]
  411 E> 0x12827d265cc0 @   56 : 39 f8 04          Add r2, [4]
         0x12827d265cc3 @   59 : c2                Star2 
  385 E> 0x12827d265cc4 @   60 : 5e fa f9 f8 0f    CallProperty1 r0, r1, r2, [15]
  435 S> 0x12827d265cc9 @   65 : a9                Return 
Constant pool (size = 5)
0x12827d265cd1: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 5
           0: 0x37322b1da991 <String[4]: #Math>
           1: 0x37322b1dac01 <String[4]: #sqrt>
           2: 0x37322b1dab89 <String[3]: #pow>
           3: 0x12827d265799 <String[2]: #_y>
           4: 0x12827d265781 <String[2]: #_x>
Handler Table (size = 0)
Source Position Table (size = 30)
0x12827d265d51 <ByteArray[30]>
0x12827d265e11 points to: [0x12827d265e80]
=== [0x12827d265e80] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  485 S> 0x12827d265e80 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x12827d265e84 @    4 : c4                Star0 
         0x12827d265e85 @    5 : 0d 01             LdaSmi [1]
         0x12827d265e87 @    7 : c2                Star2 
  503 E> 0x12827d265e88 @    8 : 2d 02 01 03       GetNamedProperty <this>, [1], [3]
  496 E> 0x12827d265e8c @   12 : 3c f8 02          Div r2, [2]
         0x12827d265e8f @   15 : c2                Star2 
  485 E> 0x12827d265e90 @   16 : 5e fa 02 f8 05    CallProperty1 r0, <this>, r2, [5]
  514 S> 0x12827d265e95 @   21 : a9                Return 
Constant pool (size = 2)
0x12827d265e99: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 2
           0: 0x12827d265651 <String[8]: #multiply>
           1: 0x12827d265569 <String[9]: #magnitude>
Handler Table (size = 0)
Source Position Table (size = 13)
0x12827d265eb9 <ByteArray[13]>
0x12827d265f61 points to: [0x12827d265fd0]
=== [0x12827d265fd0] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
  562 S> 0x12827d265fd0 @    0 : 2d 02 00 02       GetNamedProperty <this>, [0], [2]
  568 E> 0x12827d265fd4 @    4 : 00 47 b4 00 01 00 MulSmi.Wide [180], [1]
         0x12827d265fda @   10 : c4                Star0 
  576 E> 0x12827d265fdb @   11 : 21 01 04          LdaGlobal [1], [4]
         0x12827d265fde @   14 : c3                Star1 
  581 E> 0x12827d265fdf @   15 : 2d f9 02 06       GetNamedProperty r1, [2], [6]
  574 E> 0x12827d265fe3 @   19 : 3c fa 00          Div r0, [0]
  584 S> 0x12827d265fe6 @   22 : a9                Return 
Constant pool (size = 3)
0x12827d265fe9: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 3
           0: 0x12827d265609 <String[5]: #angle>
           1: 0x37322b1da991 <String[4]: #Math>
           2: 0x37322b1daca9 <String[2]: #PI>
Handler Table (size = 0)
Source Position Table (size = 15)
0x12827d266029 <ByteArray[15]>
0x12827d2660d1 points to: [0x12827d266140]
=== [0x12827d266140] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  617 S> 0x12827d266140 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x12827d266143 @    3 : c3                Star1 
  629 E> 0x12827d266144 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x12827d266148 @    8 : c4                Star0 
  640 E> 0x12827d266149 @    9 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x12827d26614d @   13 : c2                Star2 
  649 E> 0x12827d26614e @   14 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x12827d266152 @   18 : c1                Star3 
  629 E> 0x12827d266153 @   19 : 5f fa f9 f8 f7 08 CallProperty2 r0, r1, r2, r3, [8]
  653 S> 0x12827d266159 @   25 : a9                Return 
Constant pool (size = 4)
0x12827d266161: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 4
           0: 0x37322b1da991 <String[4]: #Math>
           1: 0x37322b1daa51 <String[5]: #atan2>
           2: 0x12827d265799 <String[2]: #_y>
           3: 0x12827d265781 <String[2]: #_x>
Handler Table (size = 0)
Source Position Table (size = 15)
0x12827d2661a9 <ByteArray[15]>
0x12827d266251 points to: [0x12827d2662c0]
=== [0x12827d2662c0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  690 S> 0x12827d2662c0 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x12827d2662c2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x12827d2662c4 @    4 : c4                Star0 
  713 E> 0x12827d2662c5 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x12827d2662c9 @    9 : c3                Star1 
  729 E> 0x12827d2662ca @   10 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
  716 E> 0x12827d2662ce @   14 : 39 f9 00          Add r1, [0]
         0x12827d2662d1 @   17 : c3                Star1 
  737 E> 0x12827d2662d2 @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x12827d2662d6 @   22 : c2                Star2 
  753 E> 0x12827d2662d7 @   23 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
  740 E> 0x12827d2662db @   27 : 39 f8 05          Add r2, [5]
         0x12827d2662de @   30 : c2                Star2 
         0x12827d2662df @   31 : 0b fa             Ldar r0
  697 E> 0x12827d2662e1 @   33 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
  756 S> 0x12827d2662e6 @   38 : a9                Return 
Constant pool (size = 5)
0x12827d2662e9: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 5
           0: 0x12827d2650c9 <String[6]: #Vector>
           1: 0x12827d265781 <String[2]: #_x>
           2: 0x37322b1d8ac9 <String[1]: #x>
           3: 0x12827d265799 <String[2]: #_y>
           4: 0x37322b1d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 23)
0x12827d266321 <ByteArray[23]>
0x12827d2663b1 points to: [0x12827d266420]
=== [0x12827d266420] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  798 S> 0x12827d266420 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x12827d266422 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x12827d266424 @    4 : c4                Star0 
  821 E> 0x12827d266425 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x12827d266429 @    9 : c3                Star1 
  837 E> 0x12827d26642a @   10 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
  824 E> 0x12827d26642e @   14 : 3a f9 00          Sub r1, [0]
         0x12827d266431 @   17 : c3                Star1 
  845 E> 0x12827d266432 @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x12827d266436 @   22 : c2                Star2 
  861 E> 0x12827d266437 @   23 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
  848 E> 0x12827d26643b @   27 : 3a f8 05          Sub r2, [5]
         0x12827d26643e @   30 : c2                Star2 
         0x12827d26643f @   31 : 0b fa             Ldar r0
  805 E> 0x12827d266441 @   33 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
  864 S> 0x12827d266446 @   38 : a9                Return 
Constant pool (size = 5)
0x12827d266449: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 5
           0: 0x12827d2650c9 <String[6]: #Vector>
           1: 0x12827d265781 <String[2]: #_x>
           2: 0x37322b1d8ac9 <String[1]: #x>
           3: 0x12827d265799 <String[2]: #_y>
           4: 0x37322b1d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 23)
0x12827d266481 <ByteArray[23]>
0x12827d266511 points to: [0x12827d266580]
=== [0x12827d266580] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  902 S> 0x12827d266580 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x12827d266582 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x12827d266584 @    4 : c4                Star0 
  925 E> 0x12827d266585 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x12827d266589 @    9 : c3                Star1 
         0x12827d26658a @   10 : 0b 03             Ldar a0
  928 E> 0x12827d26658c @   12 : 3b f9 00          Mul r1, [0]
         0x12827d26658f @   15 : c3                Star1 
  943 E> 0x12827d266590 @   16 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0x12827d266594 @   20 : c2                Star2 
         0x12827d266595 @   21 : 0b 03             Ldar a0
  946 E> 0x12827d266597 @   23 : 3b f8 03          Mul r2, [3]
         0x12827d26659a @   26 : c2                Star2 
         0x12827d26659b @   27 : 0b fa             Ldar r0
  909 E> 0x12827d26659d @   29 : 69 fa f9 02 06    Construct r0, r1-r2, [6]
  956 S> 0x12827d2665a2 @   34 : a9                Return 
Constant pool (size = 3)
0x12827d2665a9: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 3
           0: 0x12827d2650c9 <String[6]: #Vector>
           1: 0x12827d265781 <String[2]: #_x>
           2: 0x12827d265799 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 19)
0x12827d2665d1 <ByteArray[19]>
0x12827d266661 points to: [0x12827d2666d0]
=== [0x12827d2666d0] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  991 S> 0x12827d2666d0 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x12827d2666d2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x12827d2666d4 @    4 : c3                Star1 
 1005 E> 0x12827d2666d5 @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x12827d2666d9 @    9 : c4                Star0 
 1020 E> 0x12827d2666da @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x12827d2666de @   14 : c2                Star2 
 1036 E> 0x12827d2666df @   15 : 2d 02 03 05       GetNamedProperty <this>, [3], [5]
         0x12827d2666e3 @   19 : c1                Star3 
         0x12827d2666e4 @   20 : 0b 03             Ldar a0
 1042 E> 0x12827d2666e6 @   22 : 39 f7 04          Add r3, [4]
         0x12827d2666e9 @   25 : c1                Star3 
 1005 E> 0x12827d2666ea @   26 : 5f fa f9 f8 f7 07 CallProperty2 r0, r1, r2, r3, [7]
 1051 S> 0x12827d2666f0 @   32 : a9                Return 
Constant pool (size = 4)
0x12827d2666f9: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 4
           0: 0x12827d2650c9 <String[6]: #Vector>
           1: 0x12827d265319 <String[9]: #fromPolar>
           2: 0x12827d265569 <String[9]: #magnitude>
           3: 0x12827d265609 <String[5]: #angle>
Handler Table (size = 0)
Source Position Table (size = 19)
0x12827d266729 <ByteArray[19]>
0x12827d2667b9 points to: [0x12827d266828]
=== [0x12827d266828] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1105 S> 0x12827d266828 @    0 : 2d 03 00 02       GetNamedProperty a0, [0], [2]
         0x12827d26682c @    4 : c4                Star0 
 1111 E> 0x12827d26682d @    5 : 2d 04 00 04       GetNamedProperty a1, [0], [4]
 1107 E> 0x12827d266831 @    9 : 3b fa 01          Mul r0, [1]
         0x12827d266834 @   12 : c4                Star0 
 1117 E> 0x12827d266835 @   13 : 2d 03 01 07       GetNamedProperty a0, [1], [7]
         0x12827d266839 @   17 : c3                Star1 
 1123 E> 0x12827d26683a @   18 : 2d 04 01 09       GetNamedProperty a1, [1], [9]
 1119 E> 0x12827d26683e @   22 : 3b f9 06          Mul r1, [6]
 1113 E> 0x12827d266841 @   25 : 39 fa 00          Add r0, [0]
 1125 S> 0x12827d266844 @   28 : a9                Return 
Constant pool (size = 2)
0x12827d266849: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 2
           0: 0x37322b1d8ac9 <String[1]: #x>
           1: 0x37322b1d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 19)
0x12827d266869 <ByteArray[19]>
0x12827d2668f9 points to: [0x12827d266968]
=== [0x12827d266968] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1181 S> 0x12827d266968 @    0 : 2d 03 00 02       GetNamedProperty a0, [0], [2]
         0x12827d26696c @    4 : c4                Star0 
 1187 E> 0x12827d26696d @    5 : 2d 04 01 04       GetNamedProperty a1, [1], [4]
 1183 E> 0x12827d266971 @    9 : 3b fa 01          Mul r0, [1]
         0x12827d266974 @   12 : c4                Star0 
 1193 E> 0x12827d266975 @   13 : 2d 03 01 07       GetNamedProperty a0, [1], [7]
         0x12827d266979 @   17 : c3                Star1 
 1199 E> 0x12827d26697a @   18 : 2d 04 00 09       GetNamedProperty a1, [0], [9]
 1195 E> 0x12827d26697e @   22 : 3b f9 06          Mul r1, [6]
 1189 E> 0x12827d266981 @   25 : 3a fa 00          Sub r0, [0]
 1201 S> 0x12827d266984 @   28 : a9                Return 
Constant pool (size = 2)
0x12827d266989: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 2
           0: 0x37322b1d8ac9 <String[1]: #x>
           1: 0x37322b1d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 19)
0x12827d2669a9 <ByteArray[19]>
0x12827d266a39 points to: [0x12827d266aa8]
=== [0x12827d266aa8] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1260 S> 0x12827d266aa8 @    0 : 2d 04 00 00       GetNamedProperty a1, [0], [0]
         0x12827d266aac @    4 : c4                Star0 
 1260 E> 0x12827d266aad @    5 : 5e fa 04 03 02    CallProperty1 r0, a1, a0, [2]
         0x12827d266ab2 @   10 : c4                Star0 
 1271 E> 0x12827d266ab3 @   11 : 2d fa 01 04       GetNamedProperty r0, [1], [4]
 1282 S> 0x12827d266ab7 @   15 : a9                Return 
Constant pool (size = 2)
0x12827d266ab9: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 2
           0: 0x12827d265639 <String[8]: #subtract>
           1: 0x12827d265569 <String[9]: #magnitude>
Handler Table (size = 0)
Source Position Table (size = 11)
0x12827d266ad9 <ByteArray[11]>
0x12827d266b61 points to: [0x12827d266bd0]
=== [0x12827d266bd0] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1332 S> 0x12827d266bd0 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x12827d266bd2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x12827d266bd4 @    4 : c4                Star0 
 1356 E> 0x12827d266bd5 @    5 : 21 01 01          LdaGlobal [1], [1]
         0x12827d266bd8 @    8 : c1                Star3 
 1361 E> 0x12827d266bd9 @    9 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0x12827d266bdd @   13 : c2                Star2 
 1361 E> 0x12827d266bde @   14 : 5e f8 f7 04 05    CallProperty1 r2, r3, a1, [5]
 1354 E> 0x12827d266be3 @   19 : 3b 03 00          Mul a0, [0]
         0x12827d266be6 @   22 : c3                Star1 
 1379 E> 0x12827d266be7 @   23 : 21 01 01          LdaGlobal [1], [1]
         0x12827d266bea @   26 : c0                Star4 
 1384 E> 0x12827d266beb @   27 : 2d f6 03 08       GetNamedProperty r4, [3], [8]
         0x12827d266bef @   31 : c1                Star3 
 1384 E> 0x12827d266bf0 @   32 : 5e f7 f6 04 0a    CallProperty1 r3, r4, a1, [10]
 1377 E> 0x12827d266bf5 @   37 : 3b 03 07          Mul a0, [7]
         0x12827d266bf8 @   40 : c2                Star2 
         0x12827d266bf9 @   41 : 0b fa             Ldar r0
 1339 E> 0x12827d266bfb @   43 : 69 fa f9 02 0c    Construct r0, r1-r2, [12]
 1396 S> 0x12827d266c00 @   48 : a9                Return 
Constant pool (size = 4)
0x12827d266c09: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 4
           0: 0x12827d2650c9 <String[6]: #Vector>
           1: 0x37322b1da991 <String[4]: #Math>
           2: 0x37322b1daab1 <String[3]: #cos>
           3: 0x37322b1dabd1 <String[3]: #sin>
Handler Table (size = 0)
Source Position Table (size = 27)
0x12827d266c69 <ByteArray[27]>
0x12827d266d09 points to: [0x12827d266d78]
=== [0x12827d266d78] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1452 S> 0x12827d266d78 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x12827d266d7a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x12827d266d7c @    4 : c3                Star1 
 1466 E> 0x12827d266d7d @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x12827d266d81 @    9 : c4                Star0 
 1492 E> 0x12827d266d82 @   10 : 21 02 04          LdaGlobal [2], [4]
         0x12827d266d85 @   13 : c0                Star4 
 1497 E> 0x12827d266d86 @   14 : 2d f6 03 06       GetNamedProperty r4, [3], [6]
 1490 E> 0x12827d266d8a @   18 : 3b 04 03          Mul a1, [3]
 1500 E> 0x12827d266d8d @   21 : 00 48 b4 00 02 00 DivSmi.Wide [180], [2]
         0x12827d266d93 @   27 : c1                Star3 
 1466 E> 0x12827d266d94 @   28 : 5f fa f9 03 f7 08 CallProperty2 r0, r1, a0, r3, [8]
 1507 S> 0x12827d266d9a @   34 : a9                Return 
Constant pool (size = 4)
0x12827d266da1: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 4
           0: 0x12827d2650c9 <String[6]: #Vector>
           1: 0x12827d265319 <String[9]: #fromPolar>
           2: 0x37322b1da991 <String[4]: #Math>
           3: 0x37322b1daca9 <String[2]: #PI>
Handler Table (size = 0)
Source Position Table (size = 21)
0x12827d266dd1 <ByteArray[21]>
0x12827d266e61 points to: [0x12827d266ed0]
=== [0x12827d266ed0] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1552 S> 0x12827d266ed0 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x12827d266ed2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x12827d266ed4 @    4 : c4                Star0 
         0x12827d266ed5 @    5 : 16 02             LdaCurrentContextSlot [2]
 1570 E> 0x12827d266ed7 @    7 : aa 00             ThrowReferenceErrorIfHole [0]
         0x12827d266ed9 @    9 : c2                Star2 
 1577 E> 0x12827d266eda @   10 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x12827d266ede @   14 : c3                Star1 
 1614 E> 0x12827d266edf @   15 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x12827d266ee3 @   19 : c1                Star3 
 1577 E> 0x12827d266ee4 @   20 : 5e f9 f8 f7 04    CallProperty1 r1, r2, r3, [4]
         0x12827d266ee9 @   25 : c3                Star1 
         0x12827d266eea @   26 : 16 02             LdaCurrentContextSlot [2]
 1619 E> 0x12827d266eec @   28 : aa 00             ThrowReferenceErrorIfHole [0]
         0x12827d266eee @   30 : c1                Star3 
 1626 E> 0x12827d266eef @   31 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x12827d266ef3 @   35 : c2                Star2 
 1663 E> 0x12827d266ef4 @   36 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x12827d266ef8 @   40 : c0                Star4 
 1626 E> 0x12827d266ef9 @   41 : 5e f8 f7 f6 08    CallProperty1 r2, r3, r4, [8]
         0x12827d266efe @   46 : c2                Star2 
         0x12827d266eff @   47 : 0b fa             Ldar r0
 1559 E> 0x12827d266f01 @   49 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
 1668 S> 0x12827d266f06 @   54 : a9                Return 
Constant pool (size = 4)
0x12827d266f09: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 4
           0: 0x12827d2650c9 <String[6]: #Vector>
           1: 0x12827d265359 <String[31]: #roundCoordinateToFixedPrecision>
           2: 0x12827d265781 <String[2]: #_x>
           3: 0x12827d265799 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 32)
0x12827d266f39 <ByteArray[32]>
0x12827d266fd1 points to: [0x12827d267040]
=== [0x12827d267040] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 1740 S> 0x12827d267040 @    0 : 21 00 01          LdaGlobal [0], [1]
         0x12827d267043 @    3 : c3                Star1 
 1752 E> 0x12827d267044 @    4 : 2d f9 01 03       GetNamedProperty r1, [1], [3]
         0x12827d267048 @    8 : c4                Star0 
 1772 E> 0x12827d267049 @    9 : 21 02 07          LdaGlobal [2], [7]
         0x12827d26704c @   12 : c1                Star3 
 1779 E> 0x12827d26704d @   13 : 2d f7 03 09       GetNamedProperty r3, [3], [9]
 1770 E> 0x12827d267051 @   17 : 39 03 06          Add a0, [6]
 1788 E> 0x12827d267054 @   20 : 00 47 10 27 05 00 MulSmi.Wide [10000], [5]
         0x12827d26705a @   26 : c2                Star2 
 1752 E> 0x12827d26705b @   27 : 5e fa f9 f8 0b    CallProperty1 r0, r1, r2, [11]
 1797 E> 0x12827d267060 @   32 : 00 48 10 27 00 00 DivSmi.Wide [10000], [0]
 1805 S> 0x12827d267066 @   38 : a9                Return 
Constant pool (size = 4)
0x12827d267069: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 4
           0: 0x37322b1da991 <String[4]: #Math>
           1: 0x37322b1dabb9 <String[5]: #round>
           2: 0x332522985a69 <String[6]: #Number>
           3: 0x37322b1dbdf1 <String[7]: #EPSILON>
Handler Table (size = 0)
Source Position Table (size = 23)
0x12827d2670c9 <ByteArray[23]>
0x12827d267161 points to: [0x12827d2671d0]
=== [0x12827d2671d0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1852 S> 0x12827d2671d0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x12827d2671d4 @    4 : c4                Star0 
 1864 E> 0x12827d2671d5 @    5 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
 1855 E> 0x12827d2671d9 @    9 : 6b fa 04          TestEqual r0, [4]
         0x12827d2671dc @   12 : 99 0e             JumpIfFalse [14] (0x12827d2671ea @ 26)
 1874 E> 0x12827d2671de @   14 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x12827d2671e2 @   18 : c4                Star0 
 1886 E> 0x12827d2671e3 @   19 : 2d 03 03 07       GetNamedProperty a0, [3], [7]
 1877 E> 0x12827d2671e7 @   23 : 6b fa 09          TestEqual r0, [9]
 1888 S> 0x12827d2671ea @   26 : a9                Return 
Constant pool (size = 4)
0x12827d2671f1: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 4
           0: 0x12827d265781 <String[2]: #_x>
           1: 0x37322b1d8ac9 <String[1]: #x>
           2: 0x12827d265799 <String[2]: #_y>
           3: 0x37322b1d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 17)
0x12827d267221 <ByteArray[17]>
0x12827d2672b1 points to: [0x12827d267320]
=== [0x12827d267320] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1921 S> 0x12827d267320 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x12827d267324 @    4 : c4                Star0 
 1950 E> 0x12827d267325 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x12827d267329 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 1973 E> 0x12827d26732d @   13 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x12827d267331 @   17 : 33 fa 02 07       DefineNamedOwnProperty r0, [2], [7]
         0x12827d267335 @   21 : 0b fa             Ldar r0
 1986 S> 0x12827d267337 @   23 : a9                Return 
Constant pool (size = 3)
0x12827d267339: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 3
           0: 0x12827d267361 <ObjectBoilerplateDescription[5]>
           1: 0x37322b1d8ac9 <String[1]: #x>
           2: 0x37322b1d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 11)
0x12827d267399 <ByteArray[11]>
Boilerplate at 0x12827d267361: 
0x12827d267361: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x332522982059 <Map>
 - length: 5
           0: 8
           1: 0x37322b1d8ac9 <String[1]: #x>
           2: 0x332522981501 <Odd Oddball: uninitialized>
           3: 0x37322b1d8ae1 <String[1]: #y>
           4: 0x332522981501 <Odd Oddball: uninitialized>
0x12827d267421 points to: [0x12827d267490]
=== [0x12827d267490] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2018 S> 0x12827d267490 @    0 : 13 00             LdaConstant [0]
         0x12827d267492 @    2 : c4                Star0 
 2037 E> 0x12827d267493 @    3 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x12827d267497 @    7 : 77                ToString 
         0x12827d267498 @    8 : 39 fa 00          Add r0, [0]
         0x12827d26749b @   11 : c4                Star0 
         0x12827d26749c @   12 : 13 02             LdaConstant [2]
         0x12827d26749e @   14 : 39 fa 00          Add r0, [0]
         0x12827d2674a1 @   17 : c4                Star0 
 2052 E> 0x12827d2674a2 @   18 : 2d 02 03 03       GetNamedProperty <this>, [3], [3]
         0x12827d2674a6 @   22 : 77                ToString 
         0x12827d2674a7 @   23 : 39 fa 00          Add r0, [0]
         0x12827d2674aa @   26 : c4                Star0 
         0x12827d2674ab @   27 : 13 04             LdaConstant [4]
         0x12827d2674ad @   29 : 39 fa 00          Add r0, [0]
 2058 S> 0x12827d2674b0 @   32 : a9                Return 
Constant pool (size = 5)
0x12827d2674b9: [FixedArray] in OldSpace
 - map: 0x3325229812e1 <Map>
 - length: 5
           0: 0x12827d2674f1 <String[4]: #(X: >
           1: 0x12827d265781 <String[2]: #_x>
           2: 0x12827d267509 <String[5]: #, Y: >
           3: 0x12827d265799 <String[2]: #_y>
           4: 0x12827d267521 <String[1]: #)>
Handler Table (size = 0)
Source Position Table (size = 11)
0x12827d267539 <ByteArray[11]>
<< OUTPUTTING DISASSEMBLY END >>
