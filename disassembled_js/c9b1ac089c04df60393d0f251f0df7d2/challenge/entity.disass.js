<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x323337ee4ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x323337ee4ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x323337ee4cec @    4 : c4                Star0 
  488 S> 0x323337ee4ced @    5 : a9                Return 
Constant pool (size = 1)
0x323337ee4cf1: [FixedArray] in OldSpace
 - map: 0x15d1947c12e1 <Map>
 - length: 1
           0: 0x323337ee4d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x323337ee5611 <ByteArray[7]>
0x323337ee4d09 points to: [0x323337ee4d78]
=== [0x323337ee4d78] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   76 S> 0x323337ee4d78 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x323337ee4d7b @    3 : c2                Star2 
   83 E> 0x323337ee4d7c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x323337ee4d80 @    8 : c3                Star1 
         0x323337ee4d81 @    9 : 13 02             LdaConstant [2]
         0x323337ee4d83 @   11 : c0                Star4 
   98 E> 0x323337ee4d84 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x323337ee4d88 @   16 : bf                Star5 
         0x323337ee4d89 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x323337ee4d8c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x323337ee4d91 @   25 : 0e                LdaUndefined 
  154 E> 0x323337ee4d92 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x323337ee4d96 @   30 : 81 05             CreateBlockContext [5]
         0x323337ee4d98 @   32 : 1a f9             PushContext r1
         0x323337ee4d9a @   34 : 10                LdaTheHole 
         0x323337ee4d9b @   35 : 25 02             StaCurrentContextSlot [2]
         0x323337ee4d9d @   37 : 10                LdaTheHole 
         0x323337ee4d9e @   38 : bf                Star5 
         0x323337ee4d9f @   39 : 80 07 00 02       CreateClosure [7], [0], #2
         0x323337ee4da3 @   43 : c2                Star2 
         0x323337ee4da4 @   44 : 13 06             LdaConstant [6]
         0x323337ee4da6 @   46 : c1                Star3 
         0x323337ee4da7 @   47 : 80 08 01 02       CreateClosure [8], [1], #2
         0x323337ee4dab @   51 : be                Star6 
         0x323337ee4dac @   52 : 80 09 02 02       CreateClosure [9], [2], #2
         0x323337ee4db0 @   56 : bd                Star7 
         0x323337ee4db1 @   57 : 19 f8 f6          Mov r2, r4
         0x323337ee4db4 @   60 : 65 28 00 f7 05    CallRuntime [DefineClass], r3-r7
         0x323337ee4db9 @   65 : c1                Star3 
         0x323337ee4dba @   66 : 0b f6             Ldar r4
         0x323337ee4dbc @   68 : 25 02             StaCurrentContextSlot [2]
         0x323337ee4dbe @   70 : 1b f9             PopContext r1
         0x323337ee4dc0 @   72 : c4                Star0 
  404 S> 0x323337ee4dc1 @   73 : 0b fa             Ldar r0
  419 E> 0x323337ee4dc3 @   75 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  429 S> 0x323337ee4dc7 @   79 : 0d 01             LdaSmi [1]
  445 E> 0x323337ee4dc9 @   81 : 32 fa 0a 09       SetNamedProperty r0, [10], [9]
         0x323337ee4dcd @   85 : 0e                LdaUndefined 
  485 S> 0x323337ee4dce @   86 : a9                Return 
Constant pool (size = 11)
0x323337ee4dd1: [FixedArray] in OldSpace
 - map: 0x15d1947c12e1 <Map>
 - length: 11
           0: 0x15d1947c5ab9 <String[6]: #Object>
           1: 0x15d1947c4c11 <String[14]: #defineProperty>
           2: 0x323337ee4e39 <String[10]: #__esModule>
           3: 0x323337ee4e59 <ObjectBoilerplateDescription[3]>
           4: 0x323337ee4e81 <String[6]: #Entity>
           5: 0x323337ee4e99 <ScopeInfo CLASS_SCOPE>
           6: 0x323337ee4ed9 <FixedArray[7]>
           7: 0x323337ee5081 <SharedFunctionInfo Entity>
           8: 0x323337ee52b9 <SharedFunctionInfo serialize>
           9: 0x323337ee5409 <SharedFunctionInfo generate_id>
          10: 0x323337ee54c1 <String[8]: #id_index>
Handler Table (size = 0)
Source Position Table (size = 28)
0x323337ee5581 <ByteArray[28]>
Boilerplate at 0x323337ee4e59: 
0x323337ee4e59: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x15d1947c2059 <Map>
 - length: 3
           0: 8
           1: 0x15d1947c6419 <String[5]: #value>
           2: 0x15d1947c1729 <true>
Array at 0x323337ee4ed9 has 7 elements:
0x323337ee4ed9: [FixedArray] in OldSpace
 - map: 0x15d1947c12e1 <Map>
 - length: 7
           0: 5
           1: 0x323337ee4f21 <DescriptorArray[5]>
           2: 0x15d1947c3301 <NumberDictionary[7]>
           3: 0x15d1947c1329 <FixedArray[0]>
           4: 0x323337ee5019 <DescriptorArray[2]>
           5: 0x15d1947c3301 <NumberDictionary[7]>
           6: 0x15d1947c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0x323337ee4f21: [DescriptorArray] in OldSpace
 - map: 0x15d1947c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x15d1947c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x149c34034fe1 <AccessorInfo>
  [1]: 0x15d1947c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 4, attrs: [__C]) @ 0x149c34034f71 <AccessorInfo>
  [2]: 0x15d1947c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x149c34035051 <AccessorInfo>
  [3]: 0x15d1947c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x323337ee4fe1 <ClassPositions 164, 403>
  [4]: 0x323337ee4ff9: [String] in OldSpace: #generate_id (const data descriptor, p: 2, attrs: [W_C]) @ 4
Element[2]
0x15d1947c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x15d1947c1329: [FixedArray] in ReadOnlySpace
 - map: 0x15d1947c12e1 <Map>
 - length: 0
Element[4]
0x323337ee5019: [DescriptorArray] in OldSpace
 - map: 0x15d1947c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x15d1947c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x149c340101a9: [String] in OldSpace: #serialize (const data descriptor, p: 1, attrs: [W_C]) @ 3
Element[5]
0x15d1947c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x15d1947c1329: [FixedArray] in ReadOnlySpace
 - map: 0x15d1947c12e1 <Map>
 - length: 0
0x323337ee5081 points to: [0x323337ee50f0]
=== [0x323337ee50f0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  207 S> 0x323337ee50f0 @    0 : 16 02             LdaCurrentContextSlot [2]
  217 E> 0x323337ee50f2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x323337ee50f4 @    4 : c2                Star2 
  224 E> 0x323337ee50f5 @    5 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x323337ee50f9 @    9 : c3                Star1 
  224 E> 0x323337ee50fa @   10 : 5d f9 f8 02       CallProperty0 r1, r2, [2]
  215 E> 0x323337ee50fe @   14 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
         0x323337ee5102 @   18 : 0e                LdaUndefined 
  243 S> 0x323337ee5103 @   19 : a9                Return 
Constant pool (size = 3)
0x323337ee5109: [FixedArray] in OldSpace
 - map: 0x15d1947c12e1 <Map>
 - length: 3
           0: 0x323337ee4e81 <String[6]: #Entity>
           1: 0x323337ee4ff9 <String[11]: #generate_id>
           2: 0x15d1947c52d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 15)
0x323337ee5131 <ByteArray[15]>
0x323337ee52b9 points to: [0x323337ee5328]
=== [0x323337ee5328] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  271 S> 0x323337ee5328 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x323337ee532c @    4 : c4                Star0 
  301 E> 0x323337ee532d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x323337ee5331 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
         0x323337ee5335 @   13 : 0b fa             Ldar r0
  315 S> 0x323337ee5337 @   15 : a9                Return 
Constant pool (size = 2)
0x323337ee5339: [FixedArray] in OldSpace
 - map: 0x15d1947c12e1 <Map>
 - length: 2
           0: 0x323337ee5359 <ObjectBoilerplateDescription[3]>
           1: 0x15d1947c52d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 9)
0x323337ee5381 <ByteArray[9]>
Boilerplate at 0x323337ee5359: 
0x323337ee5359: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x15d1947c2059 <Map>
 - length: 3
           0: 8
           1: 0x15d1947c52d9 <String[2]: #id>
           2: 0x15d1947c1501 <Odd Oddball: uninitialized>
0x323337ee5409 points to: [0x323337ee5478]
=== [0x323337ee5478] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  357 S> 0x323337ee5478 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x323337ee547a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x323337ee547c @    4 : c3                Star1 
         0x323337ee547d @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x323337ee5481 @    9 : 75 02             ToNumeric [2]
         0x323337ee5483 @   11 : c2                Star2 
         0x323337ee5484 @   12 : 51 02             Inc [2]
         0x323337ee5486 @   14 : c1                Star3 
  380 E> 0x323337ee5487 @   15 : 32 f9 01 03       SetNamedProperty r1, [1], [3]
  384 E> 0x323337ee548b @   19 : 2d f8 02 05       GetNamedProperty r2, [2], [5]
         0x323337ee548f @   23 : c4                Star0 
  384 E> 0x323337ee5490 @   24 : 5d fa f8 07       CallProperty0 r0, r2, [7]
  395 S> 0x323337ee5494 @   28 : a9                Return 
Constant pool (size = 3)
0x323337ee5499: [FixedArray] in OldSpace
 - map: 0x15d1947c12e1 <Map>
 - length: 3
           0: 0x323337ee4e81 <String[6]: #Entity>
           1: 0x323337ee54c1 <String[8]: #id_index>
           2: 0x15d1947c62b9 <String[8]: #toString>
Handler Table (size = 0)
Source Position Table (size = 13)
0x323337ee54d9 <ByteArray[13]>
<< OUTPUTTING DISASSEMBLY END >>
