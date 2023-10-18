<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0xd8d5f064ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0xd8d5f064ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0xd8d5f064cec @    4 : c4                Star0 
  488 S> 0xd8d5f064ced @    5 : a9                Return 
Constant pool (size = 1)
0xd8d5f064cf1: [FixedArray] in OldSpace
 - map: 0x0a9b5c8412e1 <Map>
 - length: 1
           0: 0x0d8d5f064d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x0d8d5f065611 <ByteArray[7]>
0x0d8d5f064d09 points to: [0xd8d5f064d78]
=== [0xd8d5f064d78] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   76 S> 0xd8d5f064d78 @    0 : 21 00 00          LdaGlobal [0], [0]
         0xd8d5f064d7b @    3 : c2                Star2 
   83 E> 0xd8d5f064d7c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0xd8d5f064d80 @    8 : c3                Star1 
         0xd8d5f064d81 @    9 : 13 02             LdaConstant [2]
         0xd8d5f064d83 @   11 : c0                Star4 
   98 E> 0xd8d5f064d84 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0xd8d5f064d88 @   16 : bf                Star5 
         0xd8d5f064d89 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0xd8d5f064d8c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0xd8d5f064d91 @   25 : 0e                LdaUndefined 
  154 E> 0xd8d5f064d92 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0xd8d5f064d96 @   30 : 81 05             CreateBlockContext [5]
         0xd8d5f064d98 @   32 : 1a f9             PushContext r1
         0xd8d5f064d9a @   34 : 10                LdaTheHole 
         0xd8d5f064d9b @   35 : 25 02             StaCurrentContextSlot [2]
         0xd8d5f064d9d @   37 : 10                LdaTheHole 
         0xd8d5f064d9e @   38 : bf                Star5 
         0xd8d5f064d9f @   39 : 80 07 00 02       CreateClosure [7], [0], #2
         0xd8d5f064da3 @   43 : c2                Star2 
         0xd8d5f064da4 @   44 : 13 06             LdaConstant [6]
         0xd8d5f064da6 @   46 : c1                Star3 
         0xd8d5f064da7 @   47 : 80 08 01 02       CreateClosure [8], [1], #2
         0xd8d5f064dab @   51 : be                Star6 
         0xd8d5f064dac @   52 : 80 09 02 02       CreateClosure [9], [2], #2
         0xd8d5f064db0 @   56 : bd                Star7 
         0xd8d5f064db1 @   57 : 19 f8 f6          Mov r2, r4
         0xd8d5f064db4 @   60 : 65 28 00 f7 05    CallRuntime [DefineClass], r3-r7
         0xd8d5f064db9 @   65 : c1                Star3 
         0xd8d5f064dba @   66 : 0b f6             Ldar r4
         0xd8d5f064dbc @   68 : 25 02             StaCurrentContextSlot [2]
         0xd8d5f064dbe @   70 : 1b f9             PopContext r1
         0xd8d5f064dc0 @   72 : c4                Star0 
  404 S> 0xd8d5f064dc1 @   73 : 0b fa             Ldar r0
  419 E> 0xd8d5f064dc3 @   75 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  429 S> 0xd8d5f064dc7 @   79 : 0d 01             LdaSmi [1]
  445 E> 0xd8d5f064dc9 @   81 : 32 fa 0a 09       SetNamedProperty r0, [10], [9]
         0xd8d5f064dcd @   85 : 0e                LdaUndefined 
  485 S> 0xd8d5f064dce @   86 : a9                Return 
Constant pool (size = 11)
0xd8d5f064dd1: [FixedArray] in OldSpace
 - map: 0x0a9b5c8412e1 <Map>
 - length: 11
           0: 0x0a9b5c845ab9 <String[6]: #Object>
           1: 0x0a9b5c844c11 <String[14]: #defineProperty>
           2: 0x0d8d5f064e39 <String[10]: #__esModule>
           3: 0x0d8d5f064e59 <ObjectBoilerplateDescription[3]>
           4: 0x0d8d5f064e81 <String[6]: #Entity>
           5: 0x0d8d5f064e99 <ScopeInfo CLASS_SCOPE>
           6: 0x0d8d5f064ed9 <FixedArray[7]>
           7: 0x0d8d5f065081 <SharedFunctionInfo Entity>
           8: 0x0d8d5f0652b9 <SharedFunctionInfo serialize>
           9: 0x0d8d5f065409 <SharedFunctionInfo generate_id>
          10: 0x0d8d5f0654c1 <String[8]: #id_index>
Handler Table (size = 0)
Source Position Table (size = 28)
0x0d8d5f065581 <ByteArray[28]>
Boilerplate at 0x0d8d5f064e59: 
0xd8d5f064e59: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a9b5c842059 <Map>
 - length: 3
           0: 8
           1: 0x0a9b5c846419 <String[5]: #value>
           2: 0x0a9b5c841729 <true>
Array at 0x0d8d5f064ed9 has 7 elements:
0xd8d5f064ed9: [FixedArray] in OldSpace
 - map: 0x0a9b5c8412e1 <Map>
 - length: 7
           0: 5
           1: 0x0d8d5f064f21 <DescriptorArray[5]>
           2: 0x0a9b5c843301 <NumberDictionary[7]>
           3: 0x0a9b5c841329 <FixedArray[0]>
           4: 0x0d8d5f065019 <DescriptorArray[2]>
           5: 0x0a9b5c843301 <NumberDictionary[7]>
           6: 0x0a9b5c841329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0xd8d5f064f21: [DescriptorArray] in OldSpace
 - map: 0x0a9b5c847761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0xa9b5c8455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x24a6492f4fe1 <AccessorInfo>
  [1]: 0xa9b5c8458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x24a6492f4f71 <AccessorInfo>
  [2]: 0xa9b5c845cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 2, attrs: [___]) @ 0x24a6492f5051 <AccessorInfo>
  [3]: 0x0a9b5c8465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 4, attrs: [W_C]) @ 0x0d8d5f064fe1 <ClassPositions 164, 403>
  [4]: 0xd8d5f064ff9: [String] in OldSpace: #generate_id (const data descriptor, p: 0, attrs: [W_C]) @ 4
Element[2]
0xa9b5c843301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0xa9b5c841329: [FixedArray] in ReadOnlySpace
 - map: 0x0a9b5c8412e1 <Map>
 - length: 0
Element[4]
0xd8d5f065019: [DescriptorArray] in OldSpace
 - map: 0x0a9b5c847761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0xa9b5c844a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x24a6492d01a9: [String] in OldSpace: #serialize (const data descriptor, p: 1, attrs: [W_C]) @ 3
Element[5]
0xa9b5c843301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0xa9b5c841329: [FixedArray] in ReadOnlySpace
 - map: 0x0a9b5c8412e1 <Map>
 - length: 0
0x0d8d5f065081 points to: [0xd8d5f0650f0]
=== [0xd8d5f0650f0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  207 S> 0xd8d5f0650f0 @    0 : 16 02             LdaCurrentContextSlot [2]
  217 E> 0xd8d5f0650f2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xd8d5f0650f4 @    4 : c2                Star2 
  224 E> 0xd8d5f0650f5 @    5 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0xd8d5f0650f9 @    9 : c3                Star1 
  224 E> 0xd8d5f0650fa @   10 : 5d f9 f8 02       CallProperty0 r1, r2, [2]
  215 E> 0xd8d5f0650fe @   14 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
         0xd8d5f065102 @   18 : 0e                LdaUndefined 
  243 S> 0xd8d5f065103 @   19 : a9                Return 
Constant pool (size = 3)
0xd8d5f065109: [FixedArray] in OldSpace
 - map: 0x0a9b5c8412e1 <Map>
 - length: 3
           0: 0x0d8d5f064e81 <String[6]: #Entity>
           1: 0x0d8d5f064ff9 <String[11]: #generate_id>
           2: 0x0a9b5c8452d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 15)
0x0d8d5f065131 <ByteArray[15]>
0x0d8d5f0652b9 points to: [0xd8d5f065328]
=== [0xd8d5f065328] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  271 S> 0xd8d5f065328 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0xd8d5f06532c @    4 : c4                Star0 
  301 E> 0xd8d5f06532d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0xd8d5f065331 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
         0xd8d5f065335 @   13 : 0b fa             Ldar r0
  315 S> 0xd8d5f065337 @   15 : a9                Return 
Constant pool (size = 2)
0xd8d5f065339: [FixedArray] in OldSpace
 - map: 0x0a9b5c8412e1 <Map>
 - length: 2
           0: 0x0d8d5f065359 <ObjectBoilerplateDescription[3]>
           1: 0x0a9b5c8452d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 9)
0x0d8d5f065381 <ByteArray[9]>
Boilerplate at 0x0d8d5f065359: 
0xd8d5f065359: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a9b5c842059 <Map>
 - length: 3
           0: 8
           1: 0x0a9b5c8452d9 <String[2]: #id>
           2: 0x0a9b5c841501 <Odd Oddball: uninitialized>
0x0d8d5f065409 points to: [0xd8d5f065478]
=== [0xd8d5f065478] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  357 S> 0xd8d5f065478 @    0 : 16 02             LdaCurrentContextSlot [2]
         0xd8d5f06547a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xd8d5f06547c @    4 : c3                Star1 
         0xd8d5f06547d @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0xd8d5f065481 @    9 : 75 02             ToNumeric [2]
         0xd8d5f065483 @   11 : c2                Star2 
         0xd8d5f065484 @   12 : 51 02             Inc [2]
         0xd8d5f065486 @   14 : c1                Star3 
  380 E> 0xd8d5f065487 @   15 : 32 f9 01 03       SetNamedProperty r1, [1], [3]
  384 E> 0xd8d5f06548b @   19 : 2d f8 02 05       GetNamedProperty r2, [2], [5]
         0xd8d5f06548f @   23 : c4                Star0 
  384 E> 0xd8d5f065490 @   24 : 5d fa f8 07       CallProperty0 r0, r2, [7]
  395 S> 0xd8d5f065494 @   28 : a9                Return 
Constant pool (size = 3)
0xd8d5f065499: [FixedArray] in OldSpace
 - map: 0x0a9b5c8412e1 <Map>
 - length: 3
           0: 0x0d8d5f064e81 <String[6]: #Entity>
           1: 0x0d8d5f0654c1 <String[8]: #id_index>
           2: 0x0a9b5c8462b9 <String[8]: #toString>
Handler Table (size = 0)
Source Position Table (size = 13)
0x0d8d5f0654d9 <ByteArray[13]>
<< OUTPUTTING DISASSEMBLY END >>
