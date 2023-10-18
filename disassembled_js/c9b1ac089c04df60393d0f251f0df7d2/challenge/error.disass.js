<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x33d10a0a4ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x33d10a0a4ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x33d10a0a4cec @    4 : c4                Star0 
  369 S> 0x33d10a0a4ced @    5 : a9                Return 
Constant pool (size = 1)
0x33d10a0a4cf1: [FixedArray] in OldSpace
 - map: 0x288b109c12e1 <Map>
 - length: 1
           0: 0x33d10a0a4d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x33d10a0a52d9 <ByteArray[7]>
0x33d10a0a4d09 points to: [0x33d10a0a4d78]
=== [0x33d10a0a4d78] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   76 S> 0x33d10a0a4d78 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x33d10a0a4d7b @    3 : c2                Star2 
   83 E> 0x33d10a0a4d7c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x33d10a0a4d80 @    8 : c3                Star1 
         0x33d10a0a4d81 @    9 : 13 02             LdaConstant [2]
         0x33d10a0a4d83 @   11 : c0                Star4 
   98 E> 0x33d10a0a4d84 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x33d10a0a4d88 @   16 : bf                Star5 
         0x33d10a0a4d89 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x33d10a0a4d8c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x33d10a0a4d91 @   25 : 0e                LdaUndefined 
  159 E> 0x33d10a0a4d92 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  195 E> 0x33d10a0a4d96 @   30 : 21 06 09          LdaGlobal [6], [9]
         0x33d10a0a4d99 @   33 : c0                Star4 
         0x33d10a0a4d9a @   34 : 80 07 00 02       CreateClosure [7], [0], #2
         0x33d10a0a4d9e @   38 : c3                Star1 
         0x33d10a0a4d9f @   39 : 13 05             LdaConstant [5]
         0x33d10a0a4da1 @   41 : c2                Star2 
         0x33d10a0a4da2 @   42 : 19 f9 f7          Mov r1, r3
         0x33d10a0a4da5 @   45 : 65 28 00 f8 03    CallRuntime [DefineClass], r2-r4
         0x33d10a0a4daa @   50 : c2                Star2 
         0x33d10a0a4dab @   51 : 19 f7 fa          Mov r3, r0
  297 S> 0x33d10a0a4dae @   54 : 0b fa             Ldar r0
  317 E> 0x33d10a0a4db0 @   56 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x33d10a0a4db4 @   60 : 0e                LdaUndefined 
  366 S> 0x33d10a0a4db5 @   61 : a9                Return 
Constant pool (size = 8)
0x33d10a0a4db9: [FixedArray] in OldSpace
 - map: 0x288b109c12e1 <Map>
 - length: 8
           0: 0x288b109c5ab9 <String[6]: #Object>
           1: 0x288b109c4c11 <String[14]: #defineProperty>
           2: 0x33d10a0a4e09 <String[10]: #__esModule>
           3: 0x33d10a0a4e29 <ObjectBoilerplateDescription[3]>
           4: 0x33d10a0a4e51 <String[11]: #ActionError>
           5: 0x33d10a0a4e71 <FixedArray[7]>
           6: 0x288b109c4de1 <String[5]: #Error>
           7: 0x33d10a0a4fa9 <SharedFunctionInfo ActionError>
Handler Table (size = 0)
Source Position Table (size = 27)
0x33d10a0a5249 <ByteArray[27]>
Boilerplate at 0x33d10a0a4e29: 
0x33d10a0a4e29: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x288b109c2059 <Map>
 - length: 3
           0: 8
           1: 0x288b109c6419 <String[5]: #value>
           2: 0x288b109c1729 <true>
Array at 0x33d10a0a4e71 has 7 elements:
0x33d10a0a4e71: [FixedArray] in OldSpace
 - map: 0x288b109c12e1 <Map>
 - length: 7
           0: 3
           1: 0x33d10a0a4eb9 <DescriptorArray[4]>
           2: 0x288b109c3301 <NumberDictionary[7]>
           3: 0x288b109c1329 <FixedArray[0]>
           4: 0x33d10a0a4f79 <DescriptorArray[1]>
           5: 0x288b109c3301 <NumberDictionary[7]>
           6: 0x288b109c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x3 (3)
Element[1]
0x33d10a0a4eb9: [DescriptorArray] in OldSpace
 - map: 0x288b109c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x288b109c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 3, attrs: [__C]) @ 0x10fc77d34fe1 <AccessorInfo>
  [1]: 0x288b109c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 1, attrs: [__C]) @ 0x10fc77d34f71 <AccessorInfo>
  [2]: 0x288b109c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 2, attrs: [___]) @ 0x10fc77d35051 <AccessorInfo>
  [3]: 0x288b109c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x33d10a0a4f61 <ClassPositions 169, 296>
Element[2]
0x288b109c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x288b109c1329: [FixedArray] in ReadOnlySpace
 - map: 0x288b109c12e1 <Map>
 - length: 0
Element[4]
0x33d10a0a4f79: [DescriptorArray] in OldSpace
 - map: 0x288b109c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 1
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x288b109c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
Element[5]
0x288b109c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x288b109c1329: [FixedArray] in ReadOnlySpace
 - map: 0x288b109c12e1 <Map>
 - length: 0
0x33d10a0a4fa9 points to: [0x33d10a0a5018]
=== [0x33d10a0a5018] DISASSEMBLY ===
Parameter count 3
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x33d10a0a5018 @    0 : 19 fe f9          Mov <closure>, r1
  244 S> 0x33d10a0a501b @    3 : 0b f9             Ldar r1
         0x33d10a0a501d @    5 : 5a f7             GetSuperConstructor r3
  253 E> 0x33d10a0a501f @    7 : 21 00 01          LdaGlobal [0], [1]
         0x33d10a0a5022 @   10 : be                Star6 
  258 E> 0x33d10a0a5023 @   11 : 2d f4 01 03       GetNamedProperty r6, [1], [3]
         0x33d10a0a5027 @   15 : bf                Star5 
  258 E> 0x33d10a0a5028 @   16 : 5e f5 f4 03 05    CallProperty1 r5, r6, a0, [5]
         0x33d10a0a502d @   21 : 77                ToString 
         0x33d10a0a502e @   22 : c0                Star4 
         0x33d10a0a502f @   23 : 13 02             LdaConstant [2]
         0x33d10a0a5031 @   25 : 39 f6 00          Add r4, [0]
         0x33d10a0a5034 @   28 : c0                Star4 
         0x33d10a0a5035 @   29 : 0b 04             Ldar a1
  279 E> 0x33d10a0a5037 @   31 : 77                ToString 
         0x33d10a0a5038 @   32 : 39 f6 00          Add r4, [0]
         0x33d10a0a503b @   35 : ad f7             ThrowIfNotSuperConstructor r3
         0x33d10a0a503d @   37 : c0                Star4 
         0x33d10a0a503e @   38 : 0b fa             Ldar r0
  244 E> 0x33d10a0a5040 @   40 : 69 f7 f6 01 07    Construct r3, r4-r4, [7]
         0x33d10a0a5045 @   45 : bf                Star5 
         0x33d10a0a5046 @   46 : 0b 02             Ldar <this>
         0x33d10a0a5048 @   48 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x33d10a0a5049 @   49 : 19 f5 02          Mov r5, <this>
         0x33d10a0a504c @   52 : 0b 02             Ldar <this>
         0x33d10a0a504e @   54 : ab                ThrowSuperNotCalledIfHole 
  293 S> 0x33d10a0a504f @   55 : a9                Return 
Constant pool (size = 3)
0x33d10a0a5051: [FixedArray] in OldSpace
 - map: 0x288b109c12e1 <Map>
 - length: 3
           0: 0x10fc77d1c529 <String[4]: #JSON>
           1: 0x10fc77d0ee51 <String[9]: #stringify>
           2: 0x288b109c9f09 <String[1]: # >
Handler Table (size = 0)
Source Position Table (size = 19)
0x33d10a0a50b1 <ByteArray[19]>
<< OUTPUTTING DISASSEMBLY END >>
