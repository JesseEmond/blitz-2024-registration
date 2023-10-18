<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2177452a4ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2177452a4ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2177452a4cec @    4 : c4                Star0 
 1461 S> 0x2177452a4ced @    5 : a9                Return 
Constant pool (size = 1)
0x2177452a4cf1: [FixedArray] in OldSpace
 - map: 0x1c822e4812e1 <Map>
 - length: 1
           0: 0x2177452a4d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2177452a5c39 <ByteArray[7]>
0x2177452a4d09 points to: [0x2177452a4d78]
=== [0x2177452a4d78] DISASSEMBLY ===
Parameter count 6
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2177452a4d78 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2177452a4d7b @    3 : 1a f9             PushContext r1
         0x2177452a4d7d @    5 : 10                LdaTheHole 
         0x2177452a4d7e @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x2177452a4d80 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x2177452a4d83 @   11 : c1                Star3 
   83 E> 0x2177452a4d84 @   12 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x2177452a4d88 @   16 : c2                Star2 
         0x2177452a4d89 @   17 : 13 03             LdaConstant [3]
         0x2177452a4d8b @   19 : bf                Star5 
   98 E> 0x2177452a4d8c @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2177452a4d90 @   24 : be                Star6 
         0x2177452a4d91 @   25 : 19 03 f6          Mov a0, r4
   83 E> 0x2177452a4d94 @   28 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x2177452a4d99 @   33 : 0e                LdaUndefined 
  160 E> 0x2177452a4d9a @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  187 S> 0x2177452a4d9e @   38 : 13 06             LdaConstant [6]
         0x2177452a4da0 @   40 : c1                Star3 
  187 E> 0x2177452a4da1 @   41 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  187 E> 0x2177452a4da5 @   45 : 25 02             StaCurrentContextSlot [2]
         0x2177452a4da7 @   47 : 10                LdaTheHole 
         0x2177452a4da8 @   48 : bf                Star5 
         0x2177452a4da9 @   49 : 80 08 00 02       CreateClosure [8], [0], #2
         0x2177452a4dad @   53 : c2                Star2 
         0x2177452a4dae @   54 : 13 07             LdaConstant [7]
         0x2177452a4db0 @   56 : c1                Star3 
         0x2177452a4db1 @   57 : 80 09 01 02       CreateClosure [9], [1], #2
         0x2177452a4db5 @   61 : be                Star6 
         0x2177452a4db6 @   62 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x2177452a4dba @   66 : bd                Star7 
         0x2177452a4dbb @   67 : 80 0b 03 02       CreateClosure [11], [3], #2
         0x2177452a4dbf @   71 : bc                Star8 
         0x2177452a4dc0 @   72 : 80 0c 04 02       CreateClosure [12], [4], #2
         0x2177452a4dc4 @   76 : bb                Star9 
         0x2177452a4dc5 @   77 : 80 0d 05 02       CreateClosure [13], [5], #2
         0x2177452a4dc9 @   81 : ba                Star10 
         0x2177452a4dca @   82 : 19 f8 f6          Mov r2, r4
         0x2177452a4dcd @   85 : 65 28 00 f7 08    CallRuntime [DefineClass], r3-r10
         0x2177452a4dd2 @   90 : c1                Star3 
         0x2177452a4dd3 @   91 : 19 f6 fa          Mov r4, r0
 1379 S> 0x2177452a4dd6 @   94 : 0b fa             Ldar r0
 1400 E> 0x2177452a4dd8 @   96 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x2177452a4ddc @  100 : 0e                LdaUndefined 
 1458 S> 0x2177452a4ddd @  101 : a9                Return 
Constant pool (size = 14)
0x2177452a4de1: [FixedArray] in OldSpace
 - map: 0x1c822e4812e1 <Map>
 - length: 14
           0: 0x2177452a4e61 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1c822e485ab9 <String[6]: #Object>
           2: 0x1c822e484c11 <String[14]: #defineProperty>
           3: 0x2177452a4ed1 <String[10]: #__esModule>
           4: 0x2177452a4ef1 <ObjectBoilerplateDescription[3]>
           5: 0x2177452a4f19 <String[12]: #RotatingBody>
           6: 0x2177452a4f39 <String[8]: #./vector>
           7: 0x2177452a4f51 <FixedArray[7]>
           8: 0x2177452a51c9 <SharedFunctionInfo RotatingBody>
           9: 0x2177452a5479 <SharedFunctionInfo get orientationDegrees>
          10: 0x2177452a55b1 <SharedFunctionInfo set orientationDegrees>
          11: 0x2177452a5711 <SharedFunctionInfo get orientationRadians>
          12: 0x2177452a58a1 <SharedFunctionInfo get heading>
          13: 0x2177452a5a99 <SharedFunctionInfo update>
Handler Table (size = 0)
Source Position Table (size = 32)
0x2177452a5bf1 <ByteArray[32]>
Boilerplate at 0x2177452a4ef1: 
0x2177452a4ef1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1c822e482059 <Map>
 - length: 3
           0: 8
           1: 0x1c822e486419 <String[5]: #value>
           2: 0x1c822e481729 <true>
Array at 0x2177452a4f51 has 7 elements:
0x2177452a4f51: [FixedArray] in OldSpace
 - map: 0x1c822e4812e1 <Map>
 - length: 7
           0: 8
           1: 0x2177452a4f99 <DescriptorArray[4]>
           2: 0x1c822e483301 <NumberDictionary[7]>
           3: 0x1c822e481329 <FixedArray[0]>
           4: 0x2177452a5059 <DescriptorArray[5]>
           5: 0x1c822e483301 <NumberDictionary[7]>
           6: 0x1c822e481329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x8 (8)
Element[1]
0x2177452a4f99: [DescriptorArray] in OldSpace
 - map: 0x1c822e487761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1c822e4855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x156086234fe1 <AccessorInfo>
  [1]: 0x1c822e4858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x156086234f71 <AccessorInfo>
  [2]: 0x1c822e485cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x156086235051 <AccessorInfo>
  [3]: 0x1c822e4865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x2177452a5041 <ClassPositions 208, 1378>
Element[2]
0x1c822e483301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x1c822e481329: [FixedArray] in ReadOnlySpace
 - map: 0x1c822e4812e1 <Map>
 - length: 0
Element[4]
0x2177452a5059: [DescriptorArray] in OldSpace
 - map: 0x1c822e487761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 1
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1c822e484a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 3, attrs: [W_C]) @ 1
  [1]: 0x2177452a5101: [String] in OldSpace: #orientationDegrees (const accessor descriptor, p: 4, attrs: [W_C]) @ 0x2177452a5129 <AccessorPair>(get: 3, set: 4)
  [2]: 0x2177452a5141: [String] in OldSpace: #orientationRadians (const accessor descriptor, p: 2, attrs: [W_C]) @ 0x2177452a5169 <AccessorPair>(get: 5, set: 0x1c822e481339 <null>)
  [3]: 0x2177452a5181: [String] in OldSpace: #heading (const accessor descriptor, p: 1, attrs: [W_C]) @ 0x2177452a5199 <AccessorPair>(get: 6, set: 0x1c822e481339 <null>)
  [4]: 0x156086203f01: [String] in OldSpace: #update (const data descriptor, p: 0, attrs: [W_C]) @ 7
Element[5]
0x1c822e483301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x1c822e481329: [FixedArray] in ReadOnlySpace
 - map: 0x1c822e4812e1 <Map>
 - length: 0
0x2177452a51c9 points to: [0x2177452a5238]
=== [0x2177452a5238] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
         0x2177452a5238 @    0 : 0b 03             Ldar a0
         0x2177452a523a @    2 : 9d 05             JumpIfNotUndefined [5] (0x2177452a523f @ 7)
         0x2177452a523c @    4 : 0c                LdaZero 
         0x2177452a523d @    5 : 8a 04             Jump [4] (0x2177452a5241 @ 9)
         0x2177452a523f @    7 : 0b 03             Ldar a0
         0x2177452a5241 @    9 : c4                Star0 
         0x2177452a5242 @   10 : 0b 04             Ldar a1
         0x2177452a5244 @   12 : 9d 05             JumpIfNotUndefined [5] (0x2177452a5249 @ 17)
         0x2177452a5246 @   14 : 0c                LdaZero 
         0x2177452a5247 @   15 : 8a 04             Jump [4] (0x2177452a524b @ 19)
         0x2177452a5249 @   17 : 0b 04             Ldar a1
         0x2177452a524b @   19 : c3                Star1 
  314 S> 0x2177452a524c @   20 : 0b fa             Ldar r0
  339 E> 0x2177452a524e @   22 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  376 S> 0x2177452a5252 @   26 : 0b f9             Ldar r1
  405 E> 0x2177452a5254 @   28 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
         0x2177452a5258 @   32 : 0e                LdaUndefined 
  435 S> 0x2177452a5259 @   33 : a9                Return 
Constant pool (size = 2)
0x2177452a5261: [FixedArray] in OldSpace
 - map: 0x1c822e4812e1 <Map>
 - length: 2
           0: 0x2177452a5281 <String[19]: #_orientationDegrees>
           1: 0x2177452a52a9 <String[23]: #_angularMomentumDegrees>
Handler Table (size = 0)
Source Position Table (size = 15)
0x2177452a52d1 <ByteArray[15]>
0x2177452a5479 points to: [0x2177452a54e8]
=== [0x2177452a54e8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  594 S> 0x2177452a54e8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  614 S> 0x2177452a54ec @    4 : a9                Return 
Constant pool (size = 1)
0x2177452a54f1: [FixedArray] in OldSpace
 - map: 0x1c822e4812e1 <Map>
 - length: 1
           0: 0x2177452a5281 <String[19]: #_orientationDegrees>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2177452a5509 <ByteArray[7]>
0x2177452a55b1 points to: [0x2177452a5620]
=== [0x2177452a5620] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  720 S> 0x2177452a5620 @    0 : 0b 03             Ldar a0
  728 E> 0x2177452a5622 @    2 : 00 49 68 01 00 00 ModSmi.Wide [360], [0]
         0x2177452a5628 @    8 : c4                Star0 
  743 S> 0x2177452a5629 @    9 : 0c                LdaZero 
  756 E> 0x2177452a562a @   10 : 6d fa 01          TestLessThan r0, [1]
         0x2177452a562d @   13 : 99 0b             JumpIfFalse [11] (0x2177452a5638 @ 24)
  775 S> 0x2177452a562f @   15 : 0b fa             Ldar r0
         0x2177452a5631 @   17 : 00 45 68 01 02 00 AddSmi.Wide [360], [2]
         0x2177452a5637 @   23 : c4                Star0 
  810 S> 0x2177452a5638 @   24 : 0b fa             Ldar r0
  835 E> 0x2177452a563a @   26 : 32 02 00 03       SetNamedProperty <this>, [0], [3]
         0x2177452a563e @   30 : 0e                LdaUndefined 
  851 S> 0x2177452a563f @   31 : a9                Return 
Constant pool (size = 1)
0x2177452a5641: [FixedArray] in OldSpace
 - map: 0x1c822e4812e1 <Map>
 - length: 1
           0: 0x2177452a5281 <String[19]: #_orientationDegrees>
Handler Table (size = 0)
Source Position Table (size = 21)
0x2177452a5659 <ByteArray[21]>
0x2177452a5711 points to: [0x2177452a5780]
=== [0x2177452a5780] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1008 S> 0x2177452a5780 @    0 : 2d 02 00 02       GetNamedProperty <this>, [0], [2]
         0x2177452a5784 @    4 : c4                Star0 
 1030 E> 0x2177452a5785 @    5 : 21 01 04          LdaGlobal [1], [4]
         0x2177452a5788 @    8 : c3                Star1 
 1035 E> 0x2177452a5789 @    9 : 2d f9 02 06       GetNamedProperty r1, [2], [6]
 1028 E> 0x2177452a578d @   13 : 3b fa 01          Mul r0, [1]
 1038 E> 0x2177452a5790 @   16 : 00 48 b4 00 00 00 DivSmi.Wide [180], [0]
 1044 S> 0x2177452a5796 @   22 : a9                Return 
Constant pool (size = 3)
0x2177452a5799: [FixedArray] in OldSpace
 - map: 0x1c822e4812e1 <Map>
 - length: 3
           0: 0x2177452a5281 <String[19]: #_orientationDegrees>
           1: 0x15608621a991 <String[4]: #Math>
           2: 0x15608621aca9 <String[2]: #PI>
Handler Table (size = 0)
Source Position Table (size = 15)
0x2177452a57f1 <ByteArray[15]>
0x2177452a58a1 points to: [0x2177452a5910]
=== [0x2177452a5910] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1187 S> 0x2177452a5910 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2177452a5912 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2177452a5914 @    4 : c4                Star0 
 1207 E> 0x2177452a5915 @    5 : 2d fa 01 00       GetNamedProperty r0, [1], [0]
         0x2177452a5919 @    9 : c4                Star0 
 1214 E> 0x2177452a591a @   10 : 21 02 02          LdaGlobal [2], [2]
         0x2177452a591d @   13 : c2                Star2 
 1219 E> 0x2177452a591e @   14 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x2177452a5922 @   18 : c3                Star1 
 1228 E> 0x2177452a5923 @   19 : 2d 02 04 06       GetNamedProperty <this>, [4], [6]
         0x2177452a5927 @   23 : c1                Star3 
 1219 E> 0x2177452a5928 @   24 : 5e f9 f8 f7 08    CallProperty1 r1, r2, r3, [8]
         0x2177452a592d @   29 : c3                Star1 
 1249 E> 0x2177452a592e @   30 : 21 02 02          LdaGlobal [2], [2]
         0x2177452a5931 @   33 : c1                Star3 
 1254 E> 0x2177452a5932 @   34 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x2177452a5936 @   38 : c2                Star2 
 1263 E> 0x2177452a5937 @   39 : 2d 02 04 0c       GetNamedProperty <this>, [4], [12]
         0x2177452a593b @   43 : c0                Star4 
 1254 E> 0x2177452a593c @   44 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x2177452a5941 @   49 : c2                Star2 
         0x2177452a5942 @   50 : 0b fa             Ldar r0
 1194 E> 0x2177452a5944 @   52 : 69 fa f9 02 10    Construct r0, r1-r2, [16]
 1284 S> 0x2177452a5949 @   57 : a9                Return 
Constant pool (size = 6)
0x2177452a5951: [FixedArray] in OldSpace
 - map: 0x1c822e4812e1 <Map>
 - length: 6
           0: 0x2177452a4eb9 <String[8]: #vector_1>
           1: 0x2177452a5991 <String[6]: #Vector>
           2: 0x15608621a991 <String[4]: #Math>
           3: 0x15608621aab1 <String[3]: #cos>
           4: 0x2177452a5141 <String[18]: #orientationRadians>
           5: 0x15608621abd1 <String[3]: #sin>
Handler Table (size = 0)
Source Position Table (size = 29)
0x2177452a59d9 <ByteArray[29]>
0x2177452a5a99 points to: [0x2177452a5b08]
=== [0x2177452a5b08] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1314 S> 0x2177452a5b08 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2177452a5b0c @    4 : c3                Star1 
 1346 E> 0x2177452a5b0d @    5 : 2d 02 01 03       GetNamedProperty <this>, [1], [3]
         0x2177452a5b11 @    9 : 39 f9 02          Add r1, [2]
 1338 E> 0x2177452a5b14 @   12 : 32 02 00 05       SetNamedProperty <this>, [0], [5]
         0x2177452a5b18 @   16 : 0e                LdaUndefined 
 1375 S> 0x2177452a5b19 @   17 : a9                Return 
Constant pool (size = 2)
0x2177452a5b21: [FixedArray] in OldSpace
 - map: 0x1c822e4812e1 <Map>
 - length: 2
           0: 0x2177452a5101 <String[18]: #orientationDegrees>
           1: 0x2177452a52a9 <String[23]: #_angularMomentumDegrees>
Handler Table (size = 0)
Source Position Table (size = 13)
0x2177452a5b41 <ByteArray[13]>
<< OUTPUTTING DISASSEMBLY END >>
