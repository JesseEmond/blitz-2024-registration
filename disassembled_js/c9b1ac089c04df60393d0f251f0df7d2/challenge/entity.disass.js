<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0xff496f64bb8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0xff496f64bb8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0xff496f64bbc @    4 : c4                Star0 
  488 S> 0xff496f64bbd @    5 : a9                Return 
Constant pool (size = 1)
0xff496f64bc1: [FixedArray] in OldSpace
 - map: 0x15d4b47012e1 <Map>
 - length: 1
           0: 0x0ff496f64bd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x0ff496f654e1 <ByteArray[7]>
0x0ff496f64bd9 points to: [0xff496f64c48]
=== [0xff496f64c48] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   76 S> 0xff496f64c48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0xff496f64c4b @    3 : c2                Star2 
   83 E> 0xff496f64c4c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0xff496f64c50 @    8 : c3                Star1 
         0xff496f64c51 @    9 : 13 02             LdaConstant [2]
         0xff496f64c53 @   11 : c0                Star4 
   98 E> 0xff496f64c54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0xff496f64c58 @   16 : bf                Star5 
         0xff496f64c59 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0xff496f64c5c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0xff496f64c61 @   25 : 0e                LdaUndefined 
  154 E> 0xff496f64c62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0xff496f64c66 @   30 : 81 05             CreateBlockContext [5]
         0xff496f64c68 @   32 : 1a f9             PushContext r1
         0xff496f64c6a @   34 : 10                LdaTheHole 
         0xff496f64c6b @   35 : 25 02             StaCurrentContextSlot [2]
         0xff496f64c6d @   37 : 10                LdaTheHole 
         0xff496f64c6e @   38 : bf                Star5 
         0xff496f64c6f @   39 : 80 07 00 02       CreateClosure [7], [0], #2
         0xff496f64c73 @   43 : c2                Star2 
         0xff496f64c74 @   44 : 13 06             LdaConstant [6]
         0xff496f64c76 @   46 : c1                Star3 
         0xff496f64c77 @   47 : 80 08 01 02       CreateClosure [8], [1], #2
         0xff496f64c7b @   51 : be                Star6 
         0xff496f64c7c @   52 : 80 09 02 02       CreateClosure [9], [2], #2
         0xff496f64c80 @   56 : bd                Star7 
         0xff496f64c81 @   57 : 19 f8 f6          Mov r2, r4
         0xff496f64c84 @   60 : 65 28 00 f7 05    CallRuntime [DefineClass], r3-r7
         0xff496f64c89 @   65 : c1                Star3 
         0xff496f64c8a @   66 : 0b f6             Ldar r4
         0xff496f64c8c @   68 : 25 02             StaCurrentContextSlot [2]
         0xff496f64c8e @   70 : 1b f9             PopContext r1
         0xff496f64c90 @   72 : c4                Star0 
  404 S> 0xff496f64c91 @   73 : 0b fa             Ldar r0
  419 E> 0xff496f64c93 @   75 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  429 S> 0xff496f64c97 @   79 : 0d 01             LdaSmi [1]
  445 E> 0xff496f64c99 @   81 : 32 fa 0a 09       SetNamedProperty r0, [10], [9]
         0xff496f64c9d @   85 : 0e                LdaUndefined 
  485 S> 0xff496f64c9e @   86 : a9                Return 
Constant pool (size = 11)
0xff496f64ca1: [FixedArray] in OldSpace
 - map: 0x15d4b47012e1 <Map>
 - length: 11
           0: 0x15d4b4705ab9 <String[6]: #Object>
           1: 0x15d4b4704c11 <String[14]: #defineProperty>
           2: 0x0ff496f64d09 <String[10]: #__esModule>
           3: 0x0ff496f64d29 <ObjectBoilerplateDescription[3]>
           4: 0x0ff496f64d51 <String[6]: #Entity>
           5: 0x0ff496f64d69 <ScopeInfo CLASS_SCOPE>
           6: 0x0ff496f64da9 <FixedArray[7]>
           7: 0x0ff496f64f51 <SharedFunctionInfo Entity>
           8: 0x0ff496f65189 <SharedFunctionInfo serialize>
           9: 0x0ff496f652d9 <SharedFunctionInfo generate_id>
          10: 0x0ff496f65391 <String[8]: #id_index>
Handler Table (size = 0)
Source Position Table (size = 28)
0x0ff496f65451 <ByteArray[28]>
Boilerplate at 0x0ff496f64d29: 
0xff496f64d29: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x15d4b4702059 <Map>
 - length: 3
           0: 8
           1: 0x15d4b4706419 <String[5]: #value>
           2: 0x15d4b4701729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x0ff496f64da9 has 7 elements:
0xff496f64da9: [FixedArray] in OldSpace
 - map: 0x15d4b47012e1 <Map>
 - length: 7
           0: 5
           1: 0x0ff496f64df1 <DescriptorArray[5]>
           2: 0x15d4b4703301 <NumberDictionary[7]>
           3: 0x15d4b4701329 <FixedArray[0]>
           4: 0x0ff496f64ee9 <DescriptorArray[2]>
           5: 0x15d4b4703301 <NumberDictionary[7]>
           6: 0x15d4b4701329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0xff496f64df1: [DescriptorArray] in OldSpace
 - map: 0x15d4b4707761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x15d4b47055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x3c90a0db4fe1 <AccessorInfo>
  [1]: 0x15d4b47058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x3c90a0db4f71 <AccessorInfo>
  [2]: 0x15d4b4705cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x3c90a0db5051 <AccessorInfo>
  [3]: 0x15d4b47065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 4, attrs: [W_C]) @ 0x0ff496f64eb1 <ClassPositions 164, 403>
  [4]: 0xff496f64ec9: [String] in OldSpace: #generate_id (const data descriptor, p: 3, attrs: [W_C]) @ 4
Element[2]
0x15d4b4703301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x15d4b4701329: [FixedArray] in ReadOnlySpace
 - map: 0x15d4b47012e1 <Map>
 - length: 0
Element[4]
0xff496f64ee9: [DescriptorArray] in OldSpace
 - map: 0x15d4b4707761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x15d4b4704a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x3c90a0d901a9: [String] in OldSpace: #serialize (const data descriptor, p: 0, attrs: [W_C]) @ 3
Element[5]
0x15d4b4703301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x15d4b4701329: [FixedArray] in ReadOnlySpace
 - map: 0x15d4b47012e1 <Map>
 - length: 0
0x0ff496f64f51 points to: [0xff496f64fc0]
=== [0xff496f64fc0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  207 S> 0xff496f64fc0 @    0 : 16 02             LdaCurrentContextSlot [2]
  217 E> 0xff496f64fc2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xff496f64fc4 @    4 : c2                Star2 
  224 E> 0xff496f64fc5 @    5 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0xff496f64fc9 @    9 : c3                Star1 
  224 E> 0xff496f64fca @   10 : 5d f9 f8 02       CallProperty0 r1, r2, [2]
  215 E> 0xff496f64fce @   14 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
         0xff496f64fd2 @   18 : 0e                LdaUndefined 
  243 S> 0xff496f64fd3 @   19 : a9                Return 
Constant pool (size = 3)
0xff496f64fd9: [FixedArray] in OldSpace
 - map: 0x15d4b47012e1 <Map>
 - length: 3
           0: 0x0ff496f64d51 <String[6]: #Entity>
           1: 0x0ff496f64ec9 <String[11]: #generate_id>
           2: 0x15d4b47052d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 15)
0x0ff496f65001 <ByteArray[15]>
0x0ff496f65189 points to: [0xff496f651f8]
=== [0xff496f651f8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  271 S> 0xff496f651f8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0xff496f651fc @    4 : c4                Star0 
  301 E> 0xff496f651fd @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0xff496f65201 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
         0xff496f65205 @   13 : 0b fa             Ldar r0
  315 S> 0xff496f65207 @   15 : a9                Return 
Constant pool (size = 2)
0xff496f65209: [FixedArray] in OldSpace
 - map: 0x15d4b47012e1 <Map>
 - length: 2
           0: 0x0ff496f65229 <ObjectBoilerplateDescription[3]>
           1: 0x15d4b47052d9 <String[2]: #id>
Handler Table (size = 0)
Source Position Table (size = 9)
0x0ff496f65251 <ByteArray[9]>
Boilerplate at 0x0ff496f65229: 
0xff496f65229: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x15d4b4702059 <Map>
 - length: 3
           0: 8
           1: 0x15d4b47052d9 <String[2]: #id>
           2: 0x15d4b4701501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x0ff496f652d9 points to: [0xff496f65348]
=== [0xff496f65348] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  357 S> 0xff496f65348 @    0 : 16 02             LdaCurrentContextSlot [2]
         0xff496f6534a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0xff496f6534c @    4 : c3                Star1 
         0xff496f6534d @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0xff496f65351 @    9 : 75 02             ToNumeric [2]
         0xff496f65353 @   11 : c2                Star2 
         0xff496f65354 @   12 : 51 02             Inc [2]
         0xff496f65356 @   14 : c1                Star3 
  380 E> 0xff496f65357 @   15 : 32 f9 01 03       SetNamedProperty r1, [1], [3]
  384 E> 0xff496f6535b @   19 : 2d f8 02 05       GetNamedProperty r2, [2], [5]
         0xff496f6535f @   23 : c4                Star0 
  384 E> 0xff496f65360 @   24 : 5d fa f8 07       CallProperty0 r0, r2, [7]
  395 S> 0xff496f65364 @   28 : a9                Return 
Constant pool (size = 3)
0xff496f65369: [FixedArray] in OldSpace
 - map: 0x15d4b47012e1 <Map>
 - length: 3
           0: 0x0ff496f64d51 <String[6]: #Entity>
           1: 0x0ff496f65391 <String[8]: #id_index>
           2: 0x15d4b47062b9 <String[8]: #toString>
Handler Table (size = 0)
Source Position Table (size = 13)
0x0ff496f653a9 <ByteArray[13]>
<< OUTPUTTING DISASSEMBLY END >>
