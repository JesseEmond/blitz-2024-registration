<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0xb4af9a4d18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0xb4af9a4d18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0xb4af9a4d1c @    4 : c4                Star0 
 2130 S> 0xb4af9a4d1d @    5 : a9                Return 
Constant pool (size = 1)
0xb4af9a4d21: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 1
           0: 0x00b4af9a4d39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x00b4af9a7541 <ByteArray[7]>
0x00b4af9a4d39 points to: [0xb4af9a4da8]
=== [0xb4af9a4da8] DISASSEMBLY ===
Parameter count 6
Register count 26
Frame size 208
OSR urgency: 0
Bytecode age: 0
   76 S> 0xb4af9a4da8 @    0 : 21 00 00          LdaGlobal [0], [0]
         0xb4af9a4dab @    3 : c2                Star2 
   83 E> 0xb4af9a4dac @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0xb4af9a4db0 @    8 : c3                Star1 
         0xb4af9a4db1 @    9 : 13 02             LdaConstant [2]
         0xb4af9a4db3 @   11 : c0                Star4 
   98 E> 0xb4af9a4db4 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0xb4af9a4db8 @   16 : bf                Star5 
         0xb4af9a4db9 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0xb4af9a4dbc @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0xb4af9a4dc1 @   25 : 0e                LdaUndefined 
  154 E> 0xb4af9a4dc2 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0xb4af9a4dc6 @   30 : 81 05             CreateBlockContext [5]
         0xb4af9a4dc8 @   32 : 1a f9             PushContext r1
         0xb4af9a4dca @   34 : 10                LdaTheHole 
         0xb4af9a4dcb @   35 : 25 02             StaCurrentContextSlot [2]
         0xb4af9a4dcd @   37 : 10                LdaTheHole 
         0xb4af9a4dce @   38 : bf                Star5 
         0xb4af9a4dcf @   39 : 80 07 00 02       CreateClosure [7], [0], #2
         0xb4af9a4dd3 @   43 : c2                Star2 
         0xb4af9a4dd4 @   44 : 13 06             LdaConstant [6]
         0xb4af9a4dd6 @   46 : c1                Star3 
         0xb4af9a4dd7 @   47 : 80 08 01 02       CreateClosure [8], [1], #2
         0xb4af9a4ddb @   51 : be                Star6 
         0xb4af9a4ddc @   52 : 80 09 02 02       CreateClosure [9], [2], #2
         0xb4af9a4de0 @   56 : bd                Star7 
         0xb4af9a4de1 @   57 : 80 0a 03 02       CreateClosure [10], [3], #2
         0xb4af9a4de5 @   61 : bc                Star8 
         0xb4af9a4de6 @   62 : 80 0b 04 02       CreateClosure [11], [4], #2
         0xb4af9a4dea @   66 : bb                Star9 
         0xb4af9a4deb @   67 : 80 0c 05 02       CreateClosure [12], [5], #2
         0xb4af9a4def @   71 : ba                Star10 
         0xb4af9a4df0 @   72 : 80 0d 06 02       CreateClosure [13], [6], #2
         0xb4af9a4df4 @   76 : b9                Star11 
         0xb4af9a4df5 @   77 : 80 0e 07 02       CreateClosure [14], [7], #2
         0xb4af9a4df9 @   81 : b8                Star12 
         0xb4af9a4dfa @   82 : 80 0f 08 02       CreateClosure [15], [8], #2
         0xb4af9a4dfe @   86 : b7                Star13 
         0xb4af9a4dff @   87 : 80 10 09 02       CreateClosure [16], [9], #2
         0xb4af9a4e03 @   91 : b6                Star14 
         0xb4af9a4e04 @   92 : 80 11 0a 02       CreateClosure [17], [10], #2
         0xb4af9a4e08 @   96 : b5                Star15 
         0xb4af9a4e09 @   97 : 80 12 0b 02       CreateClosure [18], [11], #2
         0xb4af9a4e0d @  101 : 18 ea             Star r16
         0xb4af9a4e0f @  103 : 80 13 0c 02       CreateClosure [19], [12], #2
         0xb4af9a4e13 @  107 : 18 e9             Star r17
         0xb4af9a4e15 @  109 : 80 14 0d 02       CreateClosure [20], [13], #2
         0xb4af9a4e19 @  113 : 18 e8             Star r18
         0xb4af9a4e1b @  115 : 80 15 0e 02       CreateClosure [21], [14], #2
         0xb4af9a4e1f @  119 : 18 e7             Star r19
         0xb4af9a4e21 @  121 : 80 16 0f 02       CreateClosure [22], [15], #2
         0xb4af9a4e25 @  125 : 18 e6             Star r20
         0xb4af9a4e27 @  127 : 80 17 10 02       CreateClosure [23], [16], #2
         0xb4af9a4e2b @  131 : 18 e5             Star r21
         0xb4af9a4e2d @  133 : 80 18 11 02       CreateClosure [24], [17], #2
         0xb4af9a4e31 @  137 : 18 e4             Star r22
         0xb4af9a4e33 @  139 : 80 19 12 02       CreateClosure [25], [18], #2
         0xb4af9a4e37 @  143 : 18 e3             Star r23
         0xb4af9a4e39 @  145 : 80 1a 13 02       CreateClosure [26], [19], #2
         0xb4af9a4e3d @  149 : 18 e2             Star r24
         0xb4af9a4e3f @  151 : 80 1b 14 02       CreateClosure [27], [20], #2
         0xb4af9a4e43 @  155 : 18 e1             Star r25
         0xb4af9a4e45 @  157 : 19 f8 f6          Mov r2, r4
         0xb4af9a4e48 @  160 : 65 28 00 f7 17    CallRuntime [DefineClass], r3-r25
         0xb4af9a4e4d @  165 : c1                Star3 
         0xb4af9a4e4e @  166 : 0b f6             Ldar r4
         0xb4af9a4e50 @  168 : 25 02             StaCurrentContextSlot [2]
         0xb4af9a4e52 @  170 : 1b f9             PopContext r1
         0xb4af9a4e54 @  172 : c4                Star0 
 2067 S> 0xb4af9a4e55 @  173 : 0b fa             Ldar r0
 2082 E> 0xb4af9a4e57 @  175 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0xb4af9a4e5b @  179 : 0e                LdaUndefined 
 2127 S> 0xb4af9a4e5c @  180 : a9                Return 
Constant pool (size = 28)
0xb4af9a4e61: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 28
           0: 0x3cc8bd145ab9 <String[6]: #Object>
           1: 0x3cc8bd144c11 <String[14]: #defineProperty>
           2: 0x00b4af9a4f51 <String[10]: #__esModule>
           3: 0x00b4af9a4f71 <ObjectBoilerplateDescription[3]>
           4: 0x00b4af9a4f99 <String[6]: #Vector>
           5: 0x00b4af9a4fb1 <ScopeInfo CLASS_SCOPE>
           6: 0x00b4af9a4ff1 <FixedArray[7]>
           7: 0x00b4af9a55b1 <SharedFunctionInfo Vector>
           8: 0x00b4af9a5899 <SharedFunctionInfo get x>
           9: 0x00b4af9a59c1 <SharedFunctionInfo get y>
          10: 0x00b4af9a5ae9 <SharedFunctionInfo get magnitude>
          11: 0x00b4af9a5ce1 <SharedFunctionInfo get normalized>
          12: 0x00b4af9a5e31 <SharedFunctionInfo get angleDeg>
          13: 0x00b4af9a5fa1 <SharedFunctionInfo get angle>
          14: 0x00b4af9a6121 <SharedFunctionInfo add>
          15: 0x00b4af9a6281 <SharedFunctionInfo subtract>
          16: 0x00b4af9a63e1 <SharedFunctionInfo multiply>
          17: 0x00b4af9a6531 <SharedFunctionInfo rotate>
          18: 0x00b4af9a6689 <SharedFunctionInfo dotProduct>
          19: 0x00b4af9a67c9 <SharedFunctionInfo crossProduct>
          20: 0x00b4af9a6909 <SharedFunctionInfo distanceBetween>
          21: 0x00b4af9a6a31 <SharedFunctionInfo fromPolar>
          22: 0x00b4af9a6bd9 <SharedFunctionInfo fromPolarDeg>
          23: 0x00b4af9a6d31 <SharedFunctionInfo roundToFixedPrecision>
          24: 0x00b4af9a6ea1 <SharedFunctionInfo roundCoordinateToFixedPrecision>
          25: 0x00b4af9a7031 <SharedFunctionInfo equals>
          26: 0x00b4af9a7181 <SharedFunctionInfo serialize>
          27: 0x00b4af9a72f1 <SharedFunctionInfo toString>
Handler Table (size = 0)
Source Position Table (size = 25)
0x00b4af9a74b1 <ByteArray[25]>
Boilerplate at 0x00b4af9a4f71: 
0xb4af9a4f71: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3cc8bd142059 <Map>
 - length: 3
           0: 8
           1: 0x3cc8bd146419 <String[5]: #value>
           2: 0x3cc8bd141729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x00b4af9a4ff1 has 7 elements:
0xb4af9a4ff1: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 7
           0: 23
           1: 0x00b4af9a5039 <DescriptorArray[10]>
           2: 0x3cc8bd143301 <NumberDictionary[7]>
           3: 0x3cc8bd141329 <FixedArray[0]>
           4: 0x00b4af9a5259 <DescriptorArray[15]>
           5: 0x3cc8bd143301 <NumberDictionary[7]>
           6: 0x3cc8bd141329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x17 (23)
Element[1]
0xb4af9a5039: [DescriptorArray] in OldSpace
 - map: 0x3cc8bd147761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 10
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3cc8bd1455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 7, attrs: [__C]) @ 0x1e2124d74fe1 <AccessorInfo>
  [1]: 0x3cc8bd1458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x1e2124d74f71 <AccessorInfo>
  [2]: 0x3cc8bd145cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 8, attrs: [___]) @ 0x1e2124d75051 <AccessorInfo>
  [3]: 0x3cc8bd1465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x00b4af9a5171 <ClassPositions 164, 2066>
  [4]: 0xb4af9a5189: [String] in OldSpace: #dotProduct (const data descriptor, p: 4, attrs: [W_C]) @ 13
  [5]: 0xb4af9a51a9: [String] in OldSpace: #crossProduct (const data descriptor, p: 3, attrs: [W_C]) @ 14
  [6]: 0xb4af9a51c9: [String] in OldSpace: #distanceBetween (const data descriptor, p: 9, attrs: [W_C]) @ 15
  [7]: 0xb4af9a51e9: [String] in OldSpace: #fromPolar (const data descriptor, p: 6, attrs: [W_C]) @ 16
  [8]: 0xb4af9a5209: [String] in OldSpace: #fromPolarDeg (const data descriptor, p: 0, attrs: [W_C]) @ 17
  [9]: 0xb4af9a5229: [String] in OldSpace: #roundCoordinateToFixedPrecision (const data descriptor, p: 5, attrs: [W_C]) @ 19
Element[2]
0x3cc8bd143301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3cc8bd141329: [FixedArray] in ReadOnlySpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 0
Element[4]
0xb4af9a5259: [DescriptorArray] in OldSpace
 - map: 0x3cc8bd147761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 15
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3cc8bd144a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 9, attrs: [W_C]) @ 1
  [1]: 0x1e2124d58ac9: [String] in OldSpace: #x (const accessor descriptor, p: 3, attrs: [W_C]) @ 0x00b4af9a53f1 <AccessorPair>(get: 3, set: 0x3cc8bd141339 <null>)
  [2]: 0x1e2124d58ae1: [String] in OldSpace: #y (const accessor descriptor, p: 7, attrs: [W_C]) @ 0x00b4af9a5421 <AccessorPair>(get: 4, set: 0x3cc8bd141339 <null>)
  [3]: 0xb4af9a5439: [String] in OldSpace: #magnitude (const accessor descriptor, p: 5, attrs: [W_C]) @ 0x00b4af9a5459 <AccessorPair>(get: 5, set: 0x3cc8bd141339 <null>)
  [4]: 0xb4af9a5471: [String] in OldSpace: #normalized (const accessor descriptor, p: 10, attrs: [W_C]) @ 0x00b4af9a5491 <AccessorPair>(get: 6, set: 0x3cc8bd141339 <null>)
  [5]: 0xb4af9a54a9: [String] in OldSpace: #angleDeg (const accessor descriptor, p: 1, attrs: [W_C]) @ 0x00b4af9a54c1 <AccessorPair>(get: 7, set: 0x3cc8bd141339 <null>)
  [6]: 0xb4af9a54d9: [String] in OldSpace: #angle (const accessor descriptor, p: 12, attrs: [W_C]) @ 0x00b4af9a54f1 <AccessorPair>(get: 8, set: 0x3cc8bd141339 <null>)
  [7]: 0x3cc8bd144569: [String] in ReadOnlySpace: #add (const data descriptor, p: 14, attrs: [W_C]) @ 9
  [8]: 0xb4af9a5509: [String] in OldSpace: #subtract (const data descriptor, p: 6, attrs: [W_C]) @ 10
  [9]: 0xb4af9a5521: [String] in OldSpace: #multiply (const data descriptor, p: 11, attrs: [W_C]) @ 11
  [10]: 0xb4af9a5539: [String] in OldSpace: #rotate (const data descriptor, p: 4, attrs: [W_C]) @ 12
  [11]: 0xb4af9a5551: [String] in OldSpace: #roundToFixedPrecision (const data descriptor, p: 2, attrs: [W_C]) @ 18
  [12]: 0x1e2124d47411: [String] in OldSpace: #equals (const data descriptor, p: 0, attrs: [W_C]) @ 20
  [13]: 0x1e2124d501a9: [String] in OldSpace: #serialize (const data descriptor, p: 8, attrs: [W_C]) @ 21
  [14]: 0x3cc8bd1462b9: [String] in ReadOnlySpace: #toString (const data descriptor, p: 13, attrs: [W_C]) @ 22
Element[5]
0x3cc8bd143301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3cc8bd141329: [FixedArray] in ReadOnlySpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 0
0x00b4af9a55b1 points to: [0xb4af9a5620]
=== [0xb4af9a5620] DISASSEMBLY ===
Parameter count 3
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  213 S> 0xb4af9a5620 @    0 : 0b 03             Ldar a0
  221 E> 0xb4af9a5622 @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  235 S> 0xb4af9a5626 @    6 : 0b 04             Ldar a1
  243 E> 0xb4af9a5628 @    8 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
         0xb4af9a562c @   12 : 0e                LdaUndefined 
  253 S> 0xb4af9a562d @   13 : a9                Return 
Constant pool (size = 2)
0xb4af9a5631: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 2
           0: 0x00b4af9a5651 <String[2]: #_x>
           1: 0x00b4af9a5669 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 13)
0x00b4af9a5681 <ByteArray[13]>
0x00b4af9a5899 points to: [0xb4af9a5908]
=== [0xb4af9a5908] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  289 S> 0xb4af9a5908 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  292 S> 0xb4af9a590c @    4 : a9                Return 
Constant pool (size = 1)
0xb4af9a5911: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 1
           0: 0x00b4af9a5651 <String[2]: #_x>
Handler Table (size = 0)
Source Position Table (size = 7)
0x00b4af9a5929 <ByteArray[7]>
0x00b4af9a59c1 points to: [0xb4af9a5a30]
=== [0xb4af9a5a30] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  333 S> 0xb4af9a5a30 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  336 S> 0xb4af9a5a34 @    4 : a9                Return 
Constant pool (size = 1)
0xb4af9a5a39: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 1
           0: 0x00b4af9a5669 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 7)
0x00b4af9a5a51 <ByteArray[7]>
0x00b4af9a5ae9 points to: [0xb4af9a5b58]
=== [0xb4af9a5b58] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  373 S> 0xb4af9a5b58 @    0 : 21 00 00          LdaGlobal [0], [0]
         0xb4af9a5b5b @    3 : c3                Star1 
  385 E> 0xb4af9a5b5c @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0xb4af9a5b60 @    8 : c4                Star0 
  390 E> 0xb4af9a5b61 @    9 : 21 00 00          LdaGlobal [0], [0]
         0xb4af9a5b64 @   12 : c1                Star3 
  395 E> 0xb4af9a5b65 @   13 : 2d f7 02 05       GetNamedProperty r3, [2], [5]
         0xb4af9a5b69 @   17 : c2                Star2 
  404 E> 0xb4af9a5b6a @   18 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0xb4af9a5b6e @   22 : c0                Star4 
         0xb4af9a5b6f @   23 : 0d 02             LdaSmi [2]
         0xb4af9a5b71 @   25 : bf                Star5 
  395 E> 0xb4af9a5b72 @   26 : 5f f8 f7 f6 f5 09 CallProperty2 r2, r3, r4, r5, [9]
         0xb4af9a5b78 @   32 : c2                Star2 
  413 E> 0xb4af9a5b79 @   33 : 21 00 00          LdaGlobal [0], [0]
         0xb4af9a5b7c @   36 : c0                Star4 
  418 E> 0xb4af9a5b7d @   37 : 2d f6 02 05       GetNamedProperty r4, [2], [5]
         0xb4af9a5b81 @   41 : c1                Star3 
  427 E> 0xb4af9a5b82 @   42 : 2d 02 04 0b       GetNamedProperty <this>, [4], [11]
         0xb4af9a5b86 @   46 : bf                Star5 
         0xb4af9a5b87 @   47 : 0d 02             LdaSmi [2]
         0xb4af9a5b89 @   49 : be                Star6 
  418 E> 0xb4af9a5b8a @   50 : 5f f7 f6 f5 f4 0d CallProperty2 r3, r4, r5, r6, [13]
  411 E> 0xb4af9a5b90 @   56 : 39 f8 04          Add r2, [4]
         0xb4af9a5b93 @   59 : c2                Star2 
  385 E> 0xb4af9a5b94 @   60 : 5e fa f9 f8 0f    CallProperty1 r0, r1, r2, [15]
  435 S> 0xb4af9a5b99 @   65 : a9                Return 
Constant pool (size = 5)
0xb4af9a5ba1: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 5
           0: 0x1e2124d5a991 <String[4]: #Math>
           1: 0x1e2124d5ac01 <String[4]: #sqrt>
           2: 0x1e2124d5ab89 <String[3]: #pow>
           3: 0x00b4af9a5669 <String[2]: #_y>
           4: 0x00b4af9a5651 <String[2]: #_x>
Handler Table (size = 0)
Source Position Table (size = 30)
0x00b4af9a5c21 <ByteArray[30]>
0x00b4af9a5ce1 points to: [0xb4af9a5d50]
=== [0xb4af9a5d50] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  485 S> 0xb4af9a5d50 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0xb4af9a5d54 @    4 : c4                Star0 
         0xb4af9a5d55 @    5 : 0d 01             LdaSmi [1]
         0xb4af9a5d57 @    7 : c2                Star2 
  503 E> 0xb4af9a5d58 @    8 : 2d 02 01 03       GetNamedProperty <this>, [1], [3]
  496 E> 0xb4af9a5d5c @   12 : 3c f8 02          Div r2, [2]
         0xb4af9a5d5f @   15 : c2                Star2 
  485 E> 0xb4af9a5d60 @   16 : 5e fa 02 f8 05    CallProperty1 r0, <this>, r2, [5]
  514 S> 0xb4af9a5d65 @   21 : a9                Return 
Constant pool (size = 2)
0xb4af9a5d69: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 2
           0: 0x00b4af9a5521 <String[8]: #multiply>
           1: 0x00b4af9a5439 <String[9]: #magnitude>
Handler Table (size = 0)
Source Position Table (size = 13)
0x00b4af9a5d89 <ByteArray[13]>
0x00b4af9a5e31 points to: [0xb4af9a5ea0]
=== [0xb4af9a5ea0] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
  562 S> 0xb4af9a5ea0 @    0 : 2d 02 00 02       GetNamedProperty <this>, [0], [2]
  568 E> 0xb4af9a5ea4 @    4 : 00 47 b4 00 01 00 MulSmi.Wide [180], [1]
         0xb4af9a5eaa @   10 : c4                Star0 
  576 E> 0xb4af9a5eab @   11 : 21 01 04          LdaGlobal [1], [4]
         0xb4af9a5eae @   14 : c3                Star1 
  581 E> 0xb4af9a5eaf @   15 : 2d f9 02 06       GetNamedProperty r1, [2], [6]
  574 E> 0xb4af9a5eb3 @   19 : 3c fa 00          Div r0, [0]
  584 S> 0xb4af9a5eb6 @   22 : a9                Return 
Constant pool (size = 3)
0xb4af9a5eb9: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 3
           0: 0x00b4af9a54d9 <String[5]: #angle>
           1: 0x1e2124d5a991 <String[4]: #Math>
           2: 0x1e2124d5aca9 <String[2]: #PI>
Handler Table (size = 0)
Source Position Table (size = 15)
0x00b4af9a5ef9 <ByteArray[15]>
0x00b4af9a5fa1 points to: [0xb4af9a6010]
=== [0xb4af9a6010] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  617 S> 0xb4af9a6010 @    0 : 21 00 00          LdaGlobal [0], [0]
         0xb4af9a6013 @    3 : c3                Star1 
  629 E> 0xb4af9a6014 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0xb4af9a6018 @    8 : c4                Star0 
  640 E> 0xb4af9a6019 @    9 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0xb4af9a601d @   13 : c2                Star2 
  649 E> 0xb4af9a601e @   14 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0xb4af9a6022 @   18 : c1                Star3 
  629 E> 0xb4af9a6023 @   19 : 5f fa f9 f8 f7 08 CallProperty2 r0, r1, r2, r3, [8]
  653 S> 0xb4af9a6029 @   25 : a9                Return 
Constant pool (size = 4)
0xb4af9a6031: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 4
           0: 0x1e2124d5a991 <String[4]: #Math>
           1: 0x1e2124d5aa51 <String[5]: #atan2>
           2: 0x00b4af9a5669 <String[2]: #_y>
           3: 0x00b4af9a5651 <String[2]: #_x>
Handler Table (size = 0)
Source Position Table (size = 15)
0x00b4af9a6079 <ByteArray[15]>
0x00b4af9a6121 points to: [0xb4af9a6190]
=== [0xb4af9a6190] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  690 S> 0xb4af9a6190 @    0 : 16 02             LdaCurrentContextSlot [2]
         0xb4af9a6192 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xb4af9a6194 @    4 : c4                Star0 
  713 E> 0xb4af9a6195 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0xb4af9a6199 @    9 : c3                Star1 
  729 E> 0xb4af9a619a @   10 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
  716 E> 0xb4af9a619e @   14 : 39 f9 00          Add r1, [0]
         0xb4af9a61a1 @   17 : c3                Star1 
  737 E> 0xb4af9a61a2 @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0xb4af9a61a6 @   22 : c2                Star2 
  753 E> 0xb4af9a61a7 @   23 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
  740 E> 0xb4af9a61ab @   27 : 39 f8 05          Add r2, [5]
         0xb4af9a61ae @   30 : c2                Star2 
         0xb4af9a61af @   31 : 0b fa             Ldar r0
  697 E> 0xb4af9a61b1 @   33 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
  756 S> 0xb4af9a61b6 @   38 : a9                Return 
Constant pool (size = 5)
0xb4af9a61b9: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 5
           0: 0x00b4af9a4f99 <String[6]: #Vector>
           1: 0x00b4af9a5651 <String[2]: #_x>
           2: 0x1e2124d58ac9 <String[1]: #x>
           3: 0x00b4af9a5669 <String[2]: #_y>
           4: 0x1e2124d58ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 23)
0x00b4af9a61f1 <ByteArray[23]>
0x00b4af9a6281 points to: [0xb4af9a62f0]
=== [0xb4af9a62f0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  798 S> 0xb4af9a62f0 @    0 : 16 02             LdaCurrentContextSlot [2]
         0xb4af9a62f2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xb4af9a62f4 @    4 : c4                Star0 
  821 E> 0xb4af9a62f5 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0xb4af9a62f9 @    9 : c3                Star1 
  837 E> 0xb4af9a62fa @   10 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
  824 E> 0xb4af9a62fe @   14 : 3a f9 00          Sub r1, [0]
         0xb4af9a6301 @   17 : c3                Star1 
  845 E> 0xb4af9a6302 @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0xb4af9a6306 @   22 : c2                Star2 
  861 E> 0xb4af9a6307 @   23 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
  848 E> 0xb4af9a630b @   27 : 3a f8 05          Sub r2, [5]
         0xb4af9a630e @   30 : c2                Star2 
         0xb4af9a630f @   31 : 0b fa             Ldar r0
  805 E> 0xb4af9a6311 @   33 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
  864 S> 0xb4af9a6316 @   38 : a9                Return 
Constant pool (size = 5)
0xb4af9a6319: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 5
           0: 0x00b4af9a4f99 <String[6]: #Vector>
           1: 0x00b4af9a5651 <String[2]: #_x>
           2: 0x1e2124d58ac9 <String[1]: #x>
           3: 0x00b4af9a5669 <String[2]: #_y>
           4: 0x1e2124d58ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 23)
0x00b4af9a6351 <ByteArray[23]>
0x00b4af9a63e1 points to: [0xb4af9a6450]
=== [0xb4af9a6450] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  902 S> 0xb4af9a6450 @    0 : 16 02             LdaCurrentContextSlot [2]
         0xb4af9a6452 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xb4af9a6454 @    4 : c4                Star0 
  925 E> 0xb4af9a6455 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0xb4af9a6459 @    9 : c3                Star1 
         0xb4af9a645a @   10 : 0b 03             Ldar a0
  928 E> 0xb4af9a645c @   12 : 3b f9 00          Mul r1, [0]
         0xb4af9a645f @   15 : c3                Star1 
  943 E> 0xb4af9a6460 @   16 : 2d 02 02 04       GetNamedProperty <this>, [2], [4]
         0xb4af9a6464 @   20 : c2                Star2 
         0xb4af9a6465 @   21 : 0b 03             Ldar a0
  946 E> 0xb4af9a6467 @   23 : 3b f8 03          Mul r2, [3]
         0xb4af9a646a @   26 : c2                Star2 
         0xb4af9a646b @   27 : 0b fa             Ldar r0
  909 E> 0xb4af9a646d @   29 : 69 fa f9 02 06    Construct r0, r1-r2, [6]
  956 S> 0xb4af9a6472 @   34 : a9                Return 
Constant pool (size = 3)
0xb4af9a6479: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 3
           0: 0x00b4af9a4f99 <String[6]: #Vector>
           1: 0x00b4af9a5651 <String[2]: #_x>
           2: 0x00b4af9a5669 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 19)
0x00b4af9a64a1 <ByteArray[19]>
0x00b4af9a6531 points to: [0xb4af9a65a0]
=== [0xb4af9a65a0] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  991 S> 0xb4af9a65a0 @    0 : 16 02             LdaCurrentContextSlot [2]
         0xb4af9a65a2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xb4af9a65a4 @    4 : c3                Star1 
 1005 E> 0xb4af9a65a5 @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0xb4af9a65a9 @    9 : c4                Star0 
 1020 E> 0xb4af9a65aa @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0xb4af9a65ae @   14 : c2                Star2 
 1036 E> 0xb4af9a65af @   15 : 2d 02 03 05       GetNamedProperty <this>, [3], [5]
         0xb4af9a65b3 @   19 : c1                Star3 
         0xb4af9a65b4 @   20 : 0b 03             Ldar a0
 1042 E> 0xb4af9a65b6 @   22 : 39 f7 04          Add r3, [4]
         0xb4af9a65b9 @   25 : c1                Star3 
 1005 E> 0xb4af9a65ba @   26 : 5f fa f9 f8 f7 07 CallProperty2 r0, r1, r2, r3, [7]
 1051 S> 0xb4af9a65c0 @   32 : a9                Return 
Constant pool (size = 4)
0xb4af9a65c9: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 4
           0: 0x00b4af9a4f99 <String[6]: #Vector>
           1: 0x00b4af9a51e9 <String[9]: #fromPolar>
           2: 0x00b4af9a5439 <String[9]: #magnitude>
           3: 0x00b4af9a54d9 <String[5]: #angle>
Handler Table (size = 0)
Source Position Table (size = 19)
0x00b4af9a65f9 <ByteArray[19]>
0x00b4af9a6689 points to: [0xb4af9a66f8]
=== [0xb4af9a66f8] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1105 S> 0xb4af9a66f8 @    0 : 2d 03 00 02       GetNamedProperty a0, [0], [2]
         0xb4af9a66fc @    4 : c4                Star0 
 1111 E> 0xb4af9a66fd @    5 : 2d 04 00 04       GetNamedProperty a1, [0], [4]
 1107 E> 0xb4af9a6701 @    9 : 3b fa 01          Mul r0, [1]
         0xb4af9a6704 @   12 : c4                Star0 
 1117 E> 0xb4af9a6705 @   13 : 2d 03 01 07       GetNamedProperty a0, [1], [7]
         0xb4af9a6709 @   17 : c3                Star1 
 1123 E> 0xb4af9a670a @   18 : 2d 04 01 09       GetNamedProperty a1, [1], [9]
 1119 E> 0xb4af9a670e @   22 : 3b f9 06          Mul r1, [6]
 1113 E> 0xb4af9a6711 @   25 : 39 fa 00          Add r0, [0]
 1125 S> 0xb4af9a6714 @   28 : a9                Return 
Constant pool (size = 2)
0xb4af9a6719: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 2
           0: 0x1e2124d58ac9 <String[1]: #x>
           1: 0x1e2124d58ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 19)
0x00b4af9a6739 <ByteArray[19]>
0x00b4af9a67c9 points to: [0xb4af9a6838]
=== [0xb4af9a6838] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1181 S> 0xb4af9a6838 @    0 : 2d 03 00 02       GetNamedProperty a0, [0], [2]
         0xb4af9a683c @    4 : c4                Star0 
 1187 E> 0xb4af9a683d @    5 : 2d 04 01 04       GetNamedProperty a1, [1], [4]
 1183 E> 0xb4af9a6841 @    9 : 3b fa 01          Mul r0, [1]
         0xb4af9a6844 @   12 : c4                Star0 
 1193 E> 0xb4af9a6845 @   13 : 2d 03 01 07       GetNamedProperty a0, [1], [7]
         0xb4af9a6849 @   17 : c3                Star1 
 1199 E> 0xb4af9a684a @   18 : 2d 04 00 09       GetNamedProperty a1, [0], [9]
 1195 E> 0xb4af9a684e @   22 : 3b f9 06          Mul r1, [6]
 1189 E> 0xb4af9a6851 @   25 : 3a fa 00          Sub r0, [0]
 1201 S> 0xb4af9a6854 @   28 : a9                Return 
Constant pool (size = 2)
0xb4af9a6859: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 2
           0: 0x1e2124d58ac9 <String[1]: #x>
           1: 0x1e2124d58ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 19)
0x00b4af9a6879 <ByteArray[19]>
0x00b4af9a6909 points to: [0xb4af9a6978]
=== [0xb4af9a6978] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1260 S> 0xb4af9a6978 @    0 : 2d 04 00 00       GetNamedProperty a1, [0], [0]
         0xb4af9a697c @    4 : c4                Star0 
 1260 E> 0xb4af9a697d @    5 : 5e fa 04 03 02    CallProperty1 r0, a1, a0, [2]
         0xb4af9a6982 @   10 : c4                Star0 
 1271 E> 0xb4af9a6983 @   11 : 2d fa 01 04       GetNamedProperty r0, [1], [4]
 1282 S> 0xb4af9a6987 @   15 : a9                Return 
Constant pool (size = 2)
0xb4af9a6989: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 2
           0: 0x00b4af9a5509 <String[8]: #subtract>
           1: 0x00b4af9a5439 <String[9]: #magnitude>
Handler Table (size = 0)
Source Position Table (size = 11)
0x00b4af9a69a9 <ByteArray[11]>
0x00b4af9a6a31 points to: [0xb4af9a6aa0]
=== [0xb4af9a6aa0] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1332 S> 0xb4af9a6aa0 @    0 : 16 02             LdaCurrentContextSlot [2]
         0xb4af9a6aa2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xb4af9a6aa4 @    4 : c4                Star0 
 1356 E> 0xb4af9a6aa5 @    5 : 21 01 01          LdaGlobal [1], [1]
         0xb4af9a6aa8 @    8 : c1                Star3 
 1361 E> 0xb4af9a6aa9 @    9 : 2d f7 02 03       GetNamedProperty r3, [2], [3]
         0xb4af9a6aad @   13 : c2                Star2 
 1361 E> 0xb4af9a6aae @   14 : 5e f8 f7 04 05    CallProperty1 r2, r3, a1, [5]
 1354 E> 0xb4af9a6ab3 @   19 : 3b 03 00          Mul a0, [0]
         0xb4af9a6ab6 @   22 : c3                Star1 
 1379 E> 0xb4af9a6ab7 @   23 : 21 01 01          LdaGlobal [1], [1]
         0xb4af9a6aba @   26 : c0                Star4 
 1384 E> 0xb4af9a6abb @   27 : 2d f6 03 08       GetNamedProperty r4, [3], [8]
         0xb4af9a6abf @   31 : c1                Star3 
 1384 E> 0xb4af9a6ac0 @   32 : 5e f7 f6 04 0a    CallProperty1 r3, r4, a1, [10]
 1377 E> 0xb4af9a6ac5 @   37 : 3b 03 07          Mul a0, [7]
         0xb4af9a6ac8 @   40 : c2                Star2 
         0xb4af9a6ac9 @   41 : 0b fa             Ldar r0
 1339 E> 0xb4af9a6acb @   43 : 69 fa f9 02 0c    Construct r0, r1-r2, [12]
 1396 S> 0xb4af9a6ad0 @   48 : a9                Return 
Constant pool (size = 4)
0xb4af9a6ad9: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 4
           0: 0x00b4af9a4f99 <String[6]: #Vector>
           1: 0x1e2124d5a991 <String[4]: #Math>
           2: 0x1e2124d5aab1 <String[3]: #cos>
           3: 0x1e2124d5abd1 <String[3]: #sin>
Handler Table (size = 0)
Source Position Table (size = 27)
0x00b4af9a6b39 <ByteArray[27]>
0x00b4af9a6bd9 points to: [0xb4af9a6c48]
=== [0xb4af9a6c48] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1452 S> 0xb4af9a6c48 @    0 : 16 02             LdaCurrentContextSlot [2]
         0xb4af9a6c4a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xb4af9a6c4c @    4 : c3                Star1 
 1466 E> 0xb4af9a6c4d @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0xb4af9a6c51 @    9 : c4                Star0 
 1492 E> 0xb4af9a6c52 @   10 : 21 02 04          LdaGlobal [2], [4]
         0xb4af9a6c55 @   13 : c0                Star4 
 1497 E> 0xb4af9a6c56 @   14 : 2d f6 03 06       GetNamedProperty r4, [3], [6]
 1490 E> 0xb4af9a6c5a @   18 : 3b 04 03          Mul a1, [3]
 1500 E> 0xb4af9a6c5d @   21 : 00 48 b4 00 02 00 DivSmi.Wide [180], [2]
         0xb4af9a6c63 @   27 : c1                Star3 
 1466 E> 0xb4af9a6c64 @   28 : 5f fa f9 03 f7 08 CallProperty2 r0, r1, a0, r3, [8]
 1507 S> 0xb4af9a6c6a @   34 : a9                Return 
Constant pool (size = 4)
0xb4af9a6c71: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 4
           0: 0x00b4af9a4f99 <String[6]: #Vector>
           1: 0x00b4af9a51e9 <String[9]: #fromPolar>
           2: 0x1e2124d5a991 <String[4]: #Math>
           3: 0x1e2124d5aca9 <String[2]: #PI>
Handler Table (size = 0)
Source Position Table (size = 21)
0x00b4af9a6ca1 <ByteArray[21]>
0x00b4af9a6d31 points to: [0xb4af9a6da0]
=== [0xb4af9a6da0] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1552 S> 0xb4af9a6da0 @    0 : 16 02             LdaCurrentContextSlot [2]
         0xb4af9a6da2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xb4af9a6da4 @    4 : c4                Star0 
         0xb4af9a6da5 @    5 : 16 02             LdaCurrentContextSlot [2]
 1570 E> 0xb4af9a6da7 @    7 : aa 00             ThrowReferenceErrorIfHole [0]
         0xb4af9a6da9 @    9 : c2                Star2 
 1577 E> 0xb4af9a6daa @   10 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0xb4af9a6dae @   14 : c3                Star1 
 1614 E> 0xb4af9a6daf @   15 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0xb4af9a6db3 @   19 : c1                Star3 
 1577 E> 0xb4af9a6db4 @   20 : 5e f9 f8 f7 04    CallProperty1 r1, r2, r3, [4]
         0xb4af9a6db9 @   25 : c3                Star1 
         0xb4af9a6dba @   26 : 16 02             LdaCurrentContextSlot [2]
 1619 E> 0xb4af9a6dbc @   28 : aa 00             ThrowReferenceErrorIfHole [0]
         0xb4af9a6dbe @   30 : c1                Star3 
 1626 E> 0xb4af9a6dbf @   31 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0xb4af9a6dc3 @   35 : c2                Star2 
 1663 E> 0xb4af9a6dc4 @   36 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0xb4af9a6dc8 @   40 : c0                Star4 
 1626 E> 0xb4af9a6dc9 @   41 : 5e f8 f7 f6 08    CallProperty1 r2, r3, r4, [8]
         0xb4af9a6dce @   46 : c2                Star2 
         0xb4af9a6dcf @   47 : 0b fa             Ldar r0
 1559 E> 0xb4af9a6dd1 @   49 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
 1668 S> 0xb4af9a6dd6 @   54 : a9                Return 
Constant pool (size = 4)
0xb4af9a6dd9: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 4
           0: 0x00b4af9a4f99 <String[6]: #Vector>
           1: 0x00b4af9a5229 <String[31]: #roundCoordinateToFixedPrecision>
           2: 0x00b4af9a5651 <String[2]: #_x>
           3: 0x00b4af9a5669 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 32)
0x00b4af9a6e09 <ByteArray[32]>
0x00b4af9a6ea1 points to: [0xb4af9a6f10]
=== [0xb4af9a6f10] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 1740 S> 0xb4af9a6f10 @    0 : 21 00 01          LdaGlobal [0], [1]
         0xb4af9a6f13 @    3 : c3                Star1 
 1752 E> 0xb4af9a6f14 @    4 : 2d f9 01 03       GetNamedProperty r1, [1], [3]
         0xb4af9a6f18 @    8 : c4                Star0 
 1772 E> 0xb4af9a6f19 @    9 : 21 02 07          LdaGlobal [2], [7]
         0xb4af9a6f1c @   12 : c1                Star3 
 1779 E> 0xb4af9a6f1d @   13 : 2d f7 03 09       GetNamedProperty r3, [3], [9]
 1770 E> 0xb4af9a6f21 @   17 : 39 03 06          Add a0, [6]
 1788 E> 0xb4af9a6f24 @   20 : 00 47 10 27 05 00 MulSmi.Wide [10000], [5]
         0xb4af9a6f2a @   26 : c2                Star2 
 1752 E> 0xb4af9a6f2b @   27 : 5e fa f9 f8 0b    CallProperty1 r0, r1, r2, [11]
 1797 E> 0xb4af9a6f30 @   32 : 00 48 10 27 00 00 DivSmi.Wide [10000], [0]
 1805 S> 0xb4af9a6f36 @   38 : a9                Return 
Constant pool (size = 4)
0xb4af9a6f39: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 4
           0: 0x1e2124d5a991 <String[4]: #Math>
           1: 0x1e2124d5abb9 <String[5]: #round>
           2: 0x3cc8bd145a69 <String[6]: #Number>
           3: 0x1e2124d5bdf1 <String[7]: #EPSILON>
Handler Table (size = 0)
Source Position Table (size = 23)
0x00b4af9a6f99 <ByteArray[23]>
0x00b4af9a7031 points to: [0xb4af9a70a0]
=== [0xb4af9a70a0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1852 S> 0xb4af9a70a0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0xb4af9a70a4 @    4 : c4                Star0 
 1864 E> 0xb4af9a70a5 @    5 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
 1855 E> 0xb4af9a70a9 @    9 : 6b fa 04          TestEqual r0, [4]
         0xb4af9a70ac @   12 : 99 0e             JumpIfFalse [14] (0xb4af9a70ba @ 26)
 1874 E> 0xb4af9a70ae @   14 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0xb4af9a70b2 @   18 : c4                Star0 
 1886 E> 0xb4af9a70b3 @   19 : 2d 03 03 07       GetNamedProperty a0, [3], [7]
 1877 E> 0xb4af9a70b7 @   23 : 6b fa 09          TestEqual r0, [9]
 1888 S> 0xb4af9a70ba @   26 : a9                Return 
Constant pool (size = 4)
0xb4af9a70c1: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 4
           0: 0x00b4af9a5651 <String[2]: #_x>
           1: 0x1e2124d58ac9 <String[1]: #x>
           2: 0x00b4af9a5669 <String[2]: #_y>
           3: 0x1e2124d58ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 17)
0x00b4af9a70f1 <ByteArray[17]>
0x00b4af9a7181 points to: [0xb4af9a71f0]
=== [0xb4af9a71f0] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1921 S> 0xb4af9a71f0 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0xb4af9a71f4 @    4 : c4                Star0 
 1950 E> 0xb4af9a71f5 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0xb4af9a71f9 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 1973 E> 0xb4af9a71fd @   13 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0xb4af9a7201 @   17 : 33 fa 02 07       DefineNamedOwnProperty r0, [2], [7]
         0xb4af9a7205 @   21 : 0b fa             Ldar r0
 1986 S> 0xb4af9a7207 @   23 : a9                Return 
Constant pool (size = 3)
0xb4af9a7209: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 3
           0: 0x00b4af9a7231 <ObjectBoilerplateDescription[5]>
           1: 0x1e2124d58ac9 <String[1]: #x>
           2: 0x1e2124d58ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 11)
0x00b4af9a7269 <ByteArray[11]>
Boilerplate at 0x00b4af9a7231: 
0xb4af9a7231: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3cc8bd142059 <Map>
 - length: 5
           0: 8
           1: 0x1e2124d58ac9 <String[1]: #x>
           2: 0x3cc8bd141501 <Odd Oddball: uninitialized>
           3: 0x1e2124d58ae1 <String[1]: #y>
           4: 0x3cc8bd141501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x00b4af9a72f1 points to: [0xb4af9a7360]
=== [0xb4af9a7360] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 2018 S> 0xb4af9a7360 @    0 : 13 00             LdaConstant [0]
         0xb4af9a7362 @    2 : c4                Star0 
 2037 E> 0xb4af9a7363 @    3 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0xb4af9a7367 @    7 : 77                ToString 
         0xb4af9a7368 @    8 : 39 fa 00          Add r0, [0]
         0xb4af9a736b @   11 : c4                Star0 
         0xb4af9a736c @   12 : 13 02             LdaConstant [2]
         0xb4af9a736e @   14 : 39 fa 00          Add r0, [0]
         0xb4af9a7371 @   17 : c4                Star0 
 2052 E> 0xb4af9a7372 @   18 : 2d 02 03 03       GetNamedProperty <this>, [3], [3]
         0xb4af9a7376 @   22 : 77                ToString 
         0xb4af9a7377 @   23 : 39 fa 00          Add r0, [0]
         0xb4af9a737a @   26 : c4                Star0 
         0xb4af9a737b @   27 : 13 04             LdaConstant [4]
         0xb4af9a737d @   29 : 39 fa 00          Add r0, [0]
 2058 S> 0xb4af9a7380 @   32 : a9                Return 
Constant pool (size = 5)
0xb4af9a7389: [FixedArray] in OldSpace
 - map: 0x3cc8bd1412e1 <Map>
 - length: 5
           0: 0x00b4af9a73c1 <String[4]: #(X: >
           1: 0x00b4af9a5651 <String[2]: #_x>
           2: 0x00b4af9a73d9 <String[5]: #, Y: >
           3: 0x00b4af9a5669 <String[2]: #_y>
           4: 0x00b4af9a73f1 <String[1]: #)>
Handler Table (size = 0)
Source Position Table (size = 11)
0x00b4af9a7409 <ByteArray[11]>
<< OUTPUTTING DISASSEMBLY END >>
