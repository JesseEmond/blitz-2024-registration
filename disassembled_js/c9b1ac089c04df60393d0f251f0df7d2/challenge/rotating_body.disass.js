<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x33f1911a4bb8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x33f1911a4bb8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x33f1911a4bbc @    4 : c4                Star0 
 1461 S> 0x33f1911a4bbd @    5 : a9                Return 
Constant pool (size = 1)
0x33f1911a4bc1: [FixedArray] in OldSpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 1
           0: 0x33f1911a4bd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x33f1911a5b09 <ByteArray[7]>
0x33f1911a4bd9 points to: [0x33f1911a4c48]
=== [0x33f1911a4c48] DISASSEMBLY ===
Parameter count 6
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
   10 E> 0x33f1911a4c48 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x33f1911a4c4b @    3 : 1a f9             PushContext r1
         0x33f1911a4c4d @    5 : 10                LdaTheHole 
         0x33f1911a4c4e @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x33f1911a4c50 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x33f1911a4c53 @   11 : c1                Star3 
   83 E> 0x33f1911a4c54 @   12 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x33f1911a4c58 @   16 : c2                Star2 
         0x33f1911a4c59 @   17 : 13 03             LdaConstant [3]
         0x33f1911a4c5b @   19 : bf                Star5 
   98 E> 0x33f1911a4c5c @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x33f1911a4c60 @   24 : be                Star6 
         0x33f1911a4c61 @   25 : 19 03 f6          Mov a0, r4
   83 E> 0x33f1911a4c64 @   28 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x33f1911a4c69 @   33 : 0e                LdaUndefined 
  160 E> 0x33f1911a4c6a @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  187 S> 0x33f1911a4c6e @   38 : 13 06             LdaConstant [6]
         0x33f1911a4c70 @   40 : c1                Star3 
  187 E> 0x33f1911a4c71 @   41 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  187 E> 0x33f1911a4c75 @   45 : 25 02             StaCurrentContextSlot [2]
         0x33f1911a4c77 @   47 : 10                LdaTheHole 
         0x33f1911a4c78 @   48 : bf                Star5 
         0x33f1911a4c79 @   49 : 80 08 00 02       CreateClosure [8], [0], #2
         0x33f1911a4c7d @   53 : c2                Star2 
         0x33f1911a4c7e @   54 : 13 07             LdaConstant [7]
         0x33f1911a4c80 @   56 : c1                Star3 
         0x33f1911a4c81 @   57 : 80 09 01 02       CreateClosure [9], [1], #2
         0x33f1911a4c85 @   61 : be                Star6 
         0x33f1911a4c86 @   62 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x33f1911a4c8a @   66 : bd                Star7 
         0x33f1911a4c8b @   67 : 80 0b 03 02       CreateClosure [11], [3], #2
         0x33f1911a4c8f @   71 : bc                Star8 
         0x33f1911a4c90 @   72 : 80 0c 04 02       CreateClosure [12], [4], #2
         0x33f1911a4c94 @   76 : bb                Star9 
         0x33f1911a4c95 @   77 : 80 0d 05 02       CreateClosure [13], [5], #2
         0x33f1911a4c99 @   81 : ba                Star10 
         0x33f1911a4c9a @   82 : 19 f8 f6          Mov r2, r4
         0x33f1911a4c9d @   85 : 65 28 00 f7 08    CallRuntime [DefineClass], r3-r10
         0x33f1911a4ca2 @   90 : c1                Star3 
         0x33f1911a4ca3 @   91 : 19 f6 fa          Mov r4, r0
 1379 S> 0x33f1911a4ca6 @   94 : 0b fa             Ldar r0
 1400 E> 0x33f1911a4ca8 @   96 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x33f1911a4cac @  100 : 0e                LdaUndefined 
 1458 S> 0x33f1911a4cad @  101 : a9                Return 
Constant pool (size = 14)
0x33f1911a4cb1: [FixedArray] in OldSpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 14
           0: 0x33f1911a4d31 <ScopeInfo FUNCTION_SCOPE>
           1: 0x29fb8cd05ab9 <String[6]: #Object>
           2: 0x29fb8cd04c11 <String[14]: #defineProperty>
           3: 0x33f1911a4da1 <String[10]: #__esModule>
           4: 0x33f1911a4dc1 <ObjectBoilerplateDescription[3]>
           5: 0x33f1911a4de9 <String[12]: #RotatingBody>
           6: 0x33f1911a4e09 <String[8]: #./vector>
           7: 0x33f1911a4e21 <FixedArray[7]>
           8: 0x33f1911a5099 <SharedFunctionInfo RotatingBody>
           9: 0x33f1911a5349 <SharedFunctionInfo get orientationDegrees>
          10: 0x33f1911a5481 <SharedFunctionInfo set orientationDegrees>
          11: 0x33f1911a55e1 <SharedFunctionInfo get orientationRadians>
          12: 0x33f1911a5771 <SharedFunctionInfo get heading>
          13: 0x33f1911a5969 <SharedFunctionInfo update>
Handler Table (size = 0)
Source Position Table (size = 32)
0x33f1911a5ac1 <ByteArray[32]>
Boilerplate at 0x33f1911a4dc1: 
0x33f1911a4dc1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x29fb8cd02059 <Map>
 - length: 3
           0: 8
           1: 0x29fb8cd06419 <String[5]: #value>
           2: 0x29fb8cd01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x33f1911a4e21 has 7 elements:
0x33f1911a4e21: [FixedArray] in OldSpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 7
           0: 8
           1: 0x33f1911a4e69 <DescriptorArray[4]>
           2: 0x29fb8cd03301 <NumberDictionary[7]>
           3: 0x29fb8cd01329 <FixedArray[0]>
           4: 0x33f1911a4f29 <DescriptorArray[5]>
           5: 0x29fb8cd03301 <NumberDictionary[7]>
           6: 0x29fb8cd01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x8 (8)
Element[1]
0x33f1911a4e69: [DescriptorArray] in OldSpace
 - map: 0x29fb8cd07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x29fb8cd055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x3f4ad0f34fe1 <AccessorInfo>
  [1]: 0x29fb8cd058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 1, attrs: [__C]) @ 0x3f4ad0f34f71 <AccessorInfo>
  [2]: 0x29fb8cd05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x3f4ad0f35051 <AccessorInfo>
  [3]: 0x29fb8cd065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x33f1911a4f11 <ClassPositions 208, 1378>
Element[2]
0x29fb8cd03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x29fb8cd01329: [FixedArray] in ReadOnlySpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 0
Element[4]
0x33f1911a4f29: [DescriptorArray] in OldSpace
 - map: 0x29fb8cd07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 1
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x29fb8cd04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x33f1911a4fd1: [String] in OldSpace: #orientationDegrees (const accessor descriptor, p: 3, attrs: [W_C]) @ 0x33f1911a4ff9 <AccessorPair>(get: 3, set: 4)
  [2]: 0x33f1911a5011: [String] in OldSpace: #orientationRadians (const accessor descriptor, p: 0, attrs: [W_C]) @ 0x33f1911a5039 <AccessorPair>(get: 5, set: 0x29fb8cd01339 <null>)
  [3]: 0x33f1911a5051: [String] in OldSpace: #heading (const accessor descriptor, p: 4, attrs: [W_C]) @ 0x33f1911a5069 <AccessorPair>(get: 6, set: 0x29fb8cd01339 <null>)
  [4]: 0x3f4ad0f03f01: [String] in OldSpace: #update (const data descriptor, p: 2, attrs: [W_C]) @ 7
Element[5]
0x29fb8cd03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x29fb8cd01329: [FixedArray] in ReadOnlySpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 0
0x33f1911a5099 points to: [0x33f1911a5108]
=== [0x33f1911a5108] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
         0x33f1911a5108 @    0 : 0b 03             Ldar a0
         0x33f1911a510a @    2 : 9d 05             JumpIfNotUndefined [5] (0x33f1911a510f @ 7)
         0x33f1911a510c @    4 : 0c                LdaZero 
         0x33f1911a510d @    5 : 8a 04             Jump [4] (0x33f1911a5111 @ 9)
         0x33f1911a510f @    7 : 0b 03             Ldar a0
         0x33f1911a5111 @    9 : c4                Star0 
         0x33f1911a5112 @   10 : 0b 04             Ldar a1
         0x33f1911a5114 @   12 : 9d 05             JumpIfNotUndefined [5] (0x33f1911a5119 @ 17)
         0x33f1911a5116 @   14 : 0c                LdaZero 
         0x33f1911a5117 @   15 : 8a 04             Jump [4] (0x33f1911a511b @ 19)
         0x33f1911a5119 @   17 : 0b 04             Ldar a1
         0x33f1911a511b @   19 : c3                Star1 
  314 S> 0x33f1911a511c @   20 : 0b fa             Ldar r0
  339 E> 0x33f1911a511e @   22 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  376 S> 0x33f1911a5122 @   26 : 0b f9             Ldar r1
  405 E> 0x33f1911a5124 @   28 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
         0x33f1911a5128 @   32 : 0e                LdaUndefined 
  435 S> 0x33f1911a5129 @   33 : a9                Return 
Constant pool (size = 2)
0x33f1911a5131: [FixedArray] in OldSpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 2
           0: 0x33f1911a5151 <String[19]: #_orientationDegrees>
           1: 0x33f1911a5179 <String[23]: #_angularMomentumDegrees>
Handler Table (size = 0)
Source Position Table (size = 15)
0x33f1911a51a1 <ByteArray[15]>
0x33f1911a5349 points to: [0x33f1911a53b8]
=== [0x33f1911a53b8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  594 S> 0x33f1911a53b8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  614 S> 0x33f1911a53bc @    4 : a9                Return 
Constant pool (size = 1)
0x33f1911a53c1: [FixedArray] in OldSpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 1
           0: 0x33f1911a5151 <String[19]: #_orientationDegrees>
Handler Table (size = 0)
Source Position Table (size = 7)
0x33f1911a53d9 <ByteArray[7]>
0x33f1911a5481 points to: [0x33f1911a54f0]
=== [0x33f1911a54f0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  720 S> 0x33f1911a54f0 @    0 : 0b 03             Ldar a0
  728 E> 0x33f1911a54f2 @    2 : 00 49 68 01 00 00 ModSmi.Wide [360], [0]
         0x33f1911a54f8 @    8 : c4                Star0 
  743 S> 0x33f1911a54f9 @    9 : 0c                LdaZero 
  756 E> 0x33f1911a54fa @   10 : 6d fa 01          TestLessThan r0, [1]
         0x33f1911a54fd @   13 : 99 0b             JumpIfFalse [11] (0x33f1911a5508 @ 24)
  775 S> 0x33f1911a54ff @   15 : 0b fa             Ldar r0
         0x33f1911a5501 @   17 : 00 45 68 01 02 00 AddSmi.Wide [360], [2]
         0x33f1911a5507 @   23 : c4                Star0 
  810 S> 0x33f1911a5508 @   24 : 0b fa             Ldar r0
  835 E> 0x33f1911a550a @   26 : 32 02 00 03       SetNamedProperty <this>, [0], [3]
         0x33f1911a550e @   30 : 0e                LdaUndefined 
  851 S> 0x33f1911a550f @   31 : a9                Return 
Constant pool (size = 1)
0x33f1911a5511: [FixedArray] in OldSpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 1
           0: 0x33f1911a5151 <String[19]: #_orientationDegrees>
Handler Table (size = 0)
Source Position Table (size = 21)
0x33f1911a5529 <ByteArray[21]>
0x33f1911a55e1 points to: [0x33f1911a5650]
=== [0x33f1911a5650] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1008 S> 0x33f1911a5650 @    0 : 2d 02 00 02       GetNamedProperty <this>, [0], [2]
         0x33f1911a5654 @    4 : c4                Star0 
 1030 E> 0x33f1911a5655 @    5 : 21 01 04          LdaGlobal [1], [4]
         0x33f1911a5658 @    8 : c3                Star1 
 1035 E> 0x33f1911a5659 @    9 : 2d f9 02 06       GetNamedProperty r1, [2], [6]
 1028 E> 0x33f1911a565d @   13 : 3b fa 01          Mul r0, [1]
 1038 E> 0x33f1911a5660 @   16 : 00 48 b4 00 00 00 DivSmi.Wide [180], [0]
 1044 S> 0x33f1911a5666 @   22 : a9                Return 
Constant pool (size = 3)
0x33f1911a5669: [FixedArray] in OldSpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 3
           0: 0x33f1911a5151 <String[19]: #_orientationDegrees>
           1: 0x3f4ad0f1a991 <String[4]: #Math>
           2: 0x3f4ad0f1aca9 <String[2]: #PI>
Handler Table (size = 0)
Source Position Table (size = 15)
0x33f1911a56c1 <ByteArray[15]>
0x33f1911a5771 points to: [0x33f1911a57e0]
=== [0x33f1911a57e0] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1187 S> 0x33f1911a57e0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x33f1911a57e2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x33f1911a57e4 @    4 : c4                Star0 
 1207 E> 0x33f1911a57e5 @    5 : 2d fa 01 00       GetNamedProperty r0, [1], [0]
         0x33f1911a57e9 @    9 : c4                Star0 
 1214 E> 0x33f1911a57ea @   10 : 21 02 02          LdaGlobal [2], [2]
         0x33f1911a57ed @   13 : c2                Star2 
 1219 E> 0x33f1911a57ee @   14 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x33f1911a57f2 @   18 : c3                Star1 
 1228 E> 0x33f1911a57f3 @   19 : 2d 02 04 06       GetNamedProperty <this>, [4], [6]
         0x33f1911a57f7 @   23 : c1                Star3 
 1219 E> 0x33f1911a57f8 @   24 : 5e f9 f8 f7 08    CallProperty1 r1, r2, r3, [8]
         0x33f1911a57fd @   29 : c3                Star1 
 1249 E> 0x33f1911a57fe @   30 : 21 02 02          LdaGlobal [2], [2]
         0x33f1911a5801 @   33 : c1                Star3 
 1254 E> 0x33f1911a5802 @   34 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x33f1911a5806 @   38 : c2                Star2 
 1263 E> 0x33f1911a5807 @   39 : 2d 02 04 0c       GetNamedProperty <this>, [4], [12]
         0x33f1911a580b @   43 : c0                Star4 
 1254 E> 0x33f1911a580c @   44 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x33f1911a5811 @   49 : c2                Star2 
         0x33f1911a5812 @   50 : 0b fa             Ldar r0
 1194 E> 0x33f1911a5814 @   52 : 69 fa f9 02 10    Construct r0, r1-r2, [16]
 1284 S> 0x33f1911a5819 @   57 : a9                Return 
Constant pool (size = 6)
0x33f1911a5821: [FixedArray] in OldSpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 6
           0: 0x33f1911a4d89 <String[8]: #vector_1>
           1: 0x33f1911a5861 <String[6]: #Vector>
           2: 0x3f4ad0f1a991 <String[4]: #Math>
           3: 0x3f4ad0f1aab1 <String[3]: #cos>
           4: 0x33f1911a5011 <String[18]: #orientationRadians>
           5: 0x3f4ad0f1abd1 <String[3]: #sin>
Handler Table (size = 0)
Source Position Table (size = 29)
0x33f1911a58a9 <ByteArray[29]>
0x33f1911a5969 points to: [0x33f1911a59d8]
=== [0x33f1911a59d8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1314 S> 0x33f1911a59d8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x33f1911a59dc @    4 : c3                Star1 
 1346 E> 0x33f1911a59dd @    5 : 2d 02 01 03       GetNamedProperty <this>, [1], [3]
         0x33f1911a59e1 @    9 : 39 f9 02          Add r1, [2]
 1338 E> 0x33f1911a59e4 @   12 : 32 02 00 05       SetNamedProperty <this>, [0], [5]
         0x33f1911a59e8 @   16 : 0e                LdaUndefined 
 1375 S> 0x33f1911a59e9 @   17 : a9                Return 
Constant pool (size = 2)
0x33f1911a59f1: [FixedArray] in OldSpace
 - map: 0x29fb8cd012e1 <Map>
 - length: 2
           0: 0x33f1911a4fd1 <String[18]: #orientationDegrees>
           1: 0x33f1911a5179 <String[23]: #_angularMomentumDegrees>
Handler Table (size = 0)
Source Position Table (size = 13)
0x33f1911a5a11 <ByteArray[13]>
<< OUTPUTTING DISASSEMBLY END >>
