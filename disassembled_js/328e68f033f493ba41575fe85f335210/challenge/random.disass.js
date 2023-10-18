<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2cb8b06e4ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2cb8b06e4ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2cb8b06e4cec @    4 : c4                Star0 
  412 S> 0x2cb8b06e4ced @    5 : a9                Return 
Constant pool (size = 1)
0x2cb8b06e4cf1: [FixedArray] in OldSpace
 - map: 0x133ecd4012e1 <Map>
 - length: 1
           0: 0x2cb8b06e4d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2cb8b06e5451 <ByteArray[7]>
0x2cb8b06e4d09 points to: [0x2cb8b06e4d78]
=== [0x2cb8b06e4d78] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2cb8b06e4d78 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2cb8b06e4d7b @    3 : 1a f9             PushContext r1
         0x2cb8b06e4d7d @    5 : 10                LdaTheHole 
         0x2cb8b06e4d7e @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x2cb8b06e4d80 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x2cb8b06e4d83 @   11 : c1                Star3 
   83 E> 0x2cb8b06e4d84 @   12 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x2cb8b06e4d88 @   16 : c2                Star2 
         0x2cb8b06e4d89 @   17 : 13 03             LdaConstant [3]
         0x2cb8b06e4d8b @   19 : bf                Star5 
   98 E> 0x2cb8b06e4d8c @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2cb8b06e4d90 @   24 : be                Star6 
         0x2cb8b06e4d91 @   25 : 19 03 f6          Mov a0, r4
   83 E> 0x2cb8b06e4d94 @   28 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x2cb8b06e4d99 @   33 : 0e                LdaUndefined 
  154 E> 0x2cb8b06e4d9a @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  183 S> 0x2cb8b06e4d9e @   38 : 13 06             LdaConstant [6]
         0x2cb8b06e4da0 @   40 : c1                Star3 
  183 E> 0x2cb8b06e4da1 @   41 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  183 E> 0x2cb8b06e4da5 @   45 : 25 02             StaCurrentContextSlot [2]
         0x2cb8b06e4da7 @   47 : 10                LdaTheHole 
         0x2cb8b06e4da8 @   48 : bf                Star5 
         0x2cb8b06e4da9 @   49 : 80 08 00 02       CreateClosure [8], [0], #2
         0x2cb8b06e4dad @   53 : c2                Star2 
         0x2cb8b06e4dae @   54 : 13 07             LdaConstant [7]
         0x2cb8b06e4db0 @   56 : c1                Star3 
         0x2cb8b06e4db1 @   57 : 80 09 01 02       CreateClosure [9], [1], #2
         0x2cb8b06e4db5 @   61 : be                Star6 
         0x2cb8b06e4db6 @   62 : 19 f8 f6          Mov r2, r4
         0x2cb8b06e4db9 @   65 : 65 28 00 f7 04    CallRuntime [DefineClass], r3-r6
         0x2cb8b06e4dbe @   70 : c1                Star3 
         0x2cb8b06e4dbf @   71 : 19 f6 fa          Mov r4, r0
  349 S> 0x2cb8b06e4dc2 @   74 : 0b fa             Ldar r0
  364 E> 0x2cb8b06e4dc4 @   76 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x2cb8b06e4dc8 @   80 : 0e                LdaUndefined 
  409 S> 0x2cb8b06e4dc9 @   81 : a9                Return 
Constant pool (size = 10)
0x2cb8b06e4dd1: [FixedArray] in OldSpace
 - map: 0x133ecd4012e1 <Map>
 - length: 10
           0: 0x2cb8b06e4e31 <ScopeInfo FUNCTION_SCOPE>
           1: 0x133ecd405ab9 <String[6]: #Object>
           2: 0x133ecd404c11 <String[14]: #defineProperty>
           3: 0x2cb8b06e4ea9 <String[10]: #__esModule>
           4: 0x2cb8b06e4ec9 <ObjectBoilerplateDescription[3]>
           5: 0x2cb8b06e4ef1 <String[6]: #Random>
           6: 0x2cb8b06e4e89 <String[10]: #seedrandom>
           7: 0x2cb8b06e4f09 <FixedArray[7]>
           8: 0x2cb8b06e5071 <SharedFunctionInfo Random>
           9: 0x2cb8b06e52c9 <SharedFunctionInfo random>
Handler Table (size = 0)
Source Position Table (size = 32)
0x2cb8b06e5409 <ByteArray[32]>
Boilerplate at 0x2cb8b06e4ec9: 
0x2cb8b06e4ec9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x133ecd402059 <Map>
 - length: 3
           0: 8
           1: 0x133ecd406419 <String[5]: #value>
           2: 0x133ecd401729 <true>
Array at 0x2cb8b06e4f09 has 7 elements:
0x2cb8b06e4f09: [FixedArray] in OldSpace
 - map: 0x133ecd4012e1 <Map>
 - length: 7
           0: 4
           1: 0x2cb8b06e4f51 <DescriptorArray[4]>
           2: 0x133ecd403301 <NumberDictionary[7]>
           3: 0x133ecd401329 <FixedArray[0]>
           4: 0x2cb8b06e5011 <DescriptorArray[2]>
           5: 0x133ecd403301 <NumberDictionary[7]>
           6: 0x133ecd401329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x4 (4)
Element[1]
0x2cb8b06e4f51: [DescriptorArray] in OldSpace
 - map: 0x133ecd407761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x133ecd4055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x0b1fb47b4fe1 <AccessorInfo>
  [1]: 0x133ecd4058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x0b1fb47b4f71 <AccessorInfo>
  [2]: 0x133ecd405cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x0b1fb47b5051 <AccessorInfo>
  [3]: 0x133ecd4065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x2cb8b06e4ff9 <ClassPositions 206, 348>
Element[2]
0x133ecd403301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x133ecd401329: [FixedArray] in ReadOnlySpace
 - map: 0x133ecd4012e1 <Map>
 - length: 0
Element[4]
0x2cb8b06e5011: [DescriptorArray] in OldSpace
 - map: 0x133ecd407761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x133ecd404a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0xb1fb479aba1: [String] in OldSpace: #random (const data descriptor, p: 1, attrs: [W_C]) @ 3
Element[5]
0x133ecd403301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x133ecd401329: [FixedArray] in ReadOnlySpace
 - map: 0x133ecd4012e1 <Map>
 - length: 0
0x2cb8b06e5071 points to: [0x2cb8b06e50e0]
=== [0x2cb8b06e50e0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  253 S> 0x2cb8b06e50e0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
  264 E> 0x2cb8b06e50e2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2cb8b06e50e4 @    4 : c3                Star1 
  280 E> 0x2cb8b06e50e5 @    5 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
         0x2cb8b06e50e9 @    9 : c2                Star2 
  280 E> 0x2cb8b06e50ea @   10 : 5d f8 03 02       CallProperty0 r2, a0, [2]
         0x2cb8b06e50ee @   14 : c2                Star2 
  264 E> 0x2cb8b06e50ef @   15 : 62 f9 f8 04       CallUndefinedReceiver1 r1, r2, [4]
  262 E> 0x2cb8b06e50f3 @   19 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
         0x2cb8b06e50f7 @   23 : 0e                LdaUndefined 
  297 S> 0x2cb8b06e50f8 @   24 : a9                Return 
Constant pool (size = 3)
0x2cb8b06e5101: [FixedArray] in OldSpace
 - map: 0x133ecd4012e1 <Map>
 - length: 3
           0: 0x2cb8b06e4e89 <String[10]: #seedrandom>
           1: 0x133ecd4062b9 <String[8]: #toString>
           2: 0x0b1fb47a8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 18)
0x2cb8b06e5141 <ByteArray[18]>
0x2cb8b06e52c9 points to: [0x2cb8b06e5338]
=== [0x2cb8b06e5338] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  334 S> 0x2cb8b06e5338 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2cb8b06e533c @    4 : c4                Star0 
  334 E> 0x2cb8b06e533d @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
  340 S> 0x2cb8b06e5341 @    9 : a9                Return 
Constant pool (size = 1)
0x2cb8b06e5349: [FixedArray] in OldSpace
 - map: 0x133ecd4012e1 <Map>
 - length: 1
           0: 0x0b1fb47a8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2cb8b06e5361 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
