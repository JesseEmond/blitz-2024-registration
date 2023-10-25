<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1e00a1b24bb8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1e00a1b24bb8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1e00a1b24bbc @    4 : c4                Star0 
  369 S> 0x1e00a1b24bbd @    5 : a9                Return 
Constant pool (size = 1)
0x1e00a1b24bc1: [FixedArray] in OldSpace
 - map: 0x3cee7e7812e1 <Map>
 - length: 1
           0: 0x1e00a1b24bd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1e00a1b251a9 <ByteArray[7]>
0x1e00a1b24bd9 points to: [0x1e00a1b24c48]
=== [0x1e00a1b24c48] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   76 S> 0x1e00a1b24c48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x1e00a1b24c4b @    3 : c2                Star2 
   83 E> 0x1e00a1b24c4c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x1e00a1b24c50 @    8 : c3                Star1 
         0x1e00a1b24c51 @    9 : 13 02             LdaConstant [2]
         0x1e00a1b24c53 @   11 : c0                Star4 
   98 E> 0x1e00a1b24c54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x1e00a1b24c58 @   16 : bf                Star5 
         0x1e00a1b24c59 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x1e00a1b24c5c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x1e00a1b24c61 @   25 : 0e                LdaUndefined 
  159 E> 0x1e00a1b24c62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  195 E> 0x1e00a1b24c66 @   30 : 21 06 09          LdaGlobal [6], [9]
         0x1e00a1b24c69 @   33 : c0                Star4 
         0x1e00a1b24c6a @   34 : 80 07 00 02       CreateClosure [7], [0], #2
         0x1e00a1b24c6e @   38 : c3                Star1 
         0x1e00a1b24c6f @   39 : 13 05             LdaConstant [5]
         0x1e00a1b24c71 @   41 : c2                Star2 
         0x1e00a1b24c72 @   42 : 19 f9 f7          Mov r1, r3
         0x1e00a1b24c75 @   45 : 65 28 00 f8 03    CallRuntime [DefineClass], r2-r4
         0x1e00a1b24c7a @   50 : c2                Star2 
         0x1e00a1b24c7b @   51 : 19 f7 fa          Mov r3, r0
  297 S> 0x1e00a1b24c7e @   54 : 0b fa             Ldar r0
  317 E> 0x1e00a1b24c80 @   56 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x1e00a1b24c84 @   60 : 0e                LdaUndefined 
  366 S> 0x1e00a1b24c85 @   61 : a9                Return 
Constant pool (size = 8)
0x1e00a1b24c89: [FixedArray] in OldSpace
 - map: 0x3cee7e7812e1 <Map>
 - length: 8
           0: 0x3cee7e785ab9 <String[6]: #Object>
           1: 0x3cee7e784c11 <String[14]: #defineProperty>
           2: 0x1e00a1b24cd9 <String[10]: #__esModule>
           3: 0x1e00a1b24cf9 <ObjectBoilerplateDescription[3]>
           4: 0x1e00a1b24d21 <String[11]: #ActionError>
           5: 0x1e00a1b24d41 <FixedArray[7]>
           6: 0x3cee7e784de1 <String[5]: #Error>
           7: 0x1e00a1b24e79 <SharedFunctionInfo ActionError>
Handler Table (size = 0)
Source Position Table (size = 27)
0x1e00a1b25119 <ByteArray[27]>
Boilerplate at 0x1e00a1b24cf9: 
0x1e00a1b24cf9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3cee7e782059 <Map>
 - length: 3
           0: 8
           1: 0x3cee7e786419 <String[5]: #value>
           2: 0x3cee7e781729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x1e00a1b24d41 has 7 elements:
0x1e00a1b24d41: [FixedArray] in OldSpace
 - map: 0x3cee7e7812e1 <Map>
 - length: 7
           0: 3
           1: 0x1e00a1b24d89 <DescriptorArray[4]>
           2: 0x3cee7e783301 <NumberDictionary[7]>
           3: 0x3cee7e781329 <FixedArray[0]>
           4: 0x1e00a1b24e49 <DescriptorArray[1]>
           5: 0x3cee7e783301 <NumberDictionary[7]>
           6: 0x3cee7e781329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x3 (3)
Element[1]
0x1e00a1b24d89: [DescriptorArray] in OldSpace
 - map: 0x3cee7e787761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3cee7e7855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x18be60834fe1 <AccessorInfo>
  [1]: 0x3cee7e7858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x18be60834f71 <AccessorInfo>
  [2]: 0x3cee7e785cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x18be60835051 <AccessorInfo>
  [3]: 0x3cee7e7865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x1e00a1b24e31 <ClassPositions 169, 296>
Element[2]
0x3cee7e783301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3cee7e781329: [FixedArray] in ReadOnlySpace
 - map: 0x3cee7e7812e1 <Map>
 - length: 0
Element[4]
0x1e00a1b24e49: [DescriptorArray] in OldSpace
 - map: 0x3cee7e787761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 1
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3cee7e784a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
Element[5]
0x3cee7e783301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3cee7e781329: [FixedArray] in ReadOnlySpace
 - map: 0x3cee7e7812e1 <Map>
 - length: 0
0x1e00a1b24e79 points to: [0x1e00a1b24ee8]
=== [0x1e00a1b24ee8] DISASSEMBLY ===
Parameter count 3
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x1e00a1b24ee8 @    0 : 19 fe f9          Mov <closure>, r1
  244 S> 0x1e00a1b24eeb @    3 : 0b f9             Ldar r1
         0x1e00a1b24eed @    5 : 5a f7             GetSuperConstructor r3
  253 E> 0x1e00a1b24eef @    7 : 21 00 01          LdaGlobal [0], [1]
         0x1e00a1b24ef2 @   10 : be                Star6 
  258 E> 0x1e00a1b24ef3 @   11 : 2d f4 01 03       GetNamedProperty r6, [1], [3]
         0x1e00a1b24ef7 @   15 : bf                Star5 
  258 E> 0x1e00a1b24ef8 @   16 : 5e f5 f4 03 05    CallProperty1 r5, r6, a0, [5]
         0x1e00a1b24efd @   21 : 77                ToString 
         0x1e00a1b24efe @   22 : c0                Star4 
         0x1e00a1b24eff @   23 : 13 02             LdaConstant [2]
         0x1e00a1b24f01 @   25 : 39 f6 00          Add r4, [0]
         0x1e00a1b24f04 @   28 : c0                Star4 
         0x1e00a1b24f05 @   29 : 0b 04             Ldar a1
  279 E> 0x1e00a1b24f07 @   31 : 77                ToString 
         0x1e00a1b24f08 @   32 : 39 f6 00          Add r4, [0]
         0x1e00a1b24f0b @   35 : ad f7             ThrowIfNotSuperConstructor r3
         0x1e00a1b24f0d @   37 : c0                Star4 
         0x1e00a1b24f0e @   38 : 0b fa             Ldar r0
  244 E> 0x1e00a1b24f10 @   40 : 69 f7 f6 01 07    Construct r3, r4-r4, [7]
         0x1e00a1b24f15 @   45 : bf                Star5 
         0x1e00a1b24f16 @   46 : 0b 02             Ldar <this>
         0x1e00a1b24f18 @   48 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x1e00a1b24f19 @   49 : 19 f5 02          Mov r5, <this>
         0x1e00a1b24f1c @   52 : 0b 02             Ldar <this>
         0x1e00a1b24f1e @   54 : ab                ThrowSuperNotCalledIfHole 
  293 S> 0x1e00a1b24f1f @   55 : a9                Return 
Constant pool (size = 3)
0x1e00a1b24f21: [FixedArray] in OldSpace
 - map: 0x3cee7e7812e1 <Map>
 - length: 3
           0: 0x18be6081c529 <String[4]: #JSON>
           1: 0x18be6080ee51 <String[9]: #stringify>
           2: 0x3cee7e789f09 <String[1]: # >
Handler Table (size = 0)
Source Position Table (size = 19)
0x1e00a1b24f81 <ByteArray[19]>
<< OUTPUTTING DISASSEMBLY END >>
