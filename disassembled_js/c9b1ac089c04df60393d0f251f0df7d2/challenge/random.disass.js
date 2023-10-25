<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2a2e6724bb8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2a2e6724bb8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2a2e6724bbc @    4 : c4                Star0 
  412 S> 0x2a2e6724bbd @    5 : a9                Return 
Constant pool (size = 1)
0x2a2e6724bc1: [FixedArray] in OldSpace
 - map: 0x319ac0c412e1 <Map>
 - length: 1
           0: 0x02a2e6724bd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x02a2e6725321 <ByteArray[7]>
0x02a2e6724bd9 points to: [0x2a2e6724c48]
=== [0x2a2e6724c48] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2a2e6724c48 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2a2e6724c4b @    3 : 1a f9             PushContext r1
         0x2a2e6724c4d @    5 : 10                LdaTheHole 
         0x2a2e6724c4e @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x2a2e6724c50 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x2a2e6724c53 @   11 : c1                Star3 
   83 E> 0x2a2e6724c54 @   12 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x2a2e6724c58 @   16 : c2                Star2 
         0x2a2e6724c59 @   17 : 13 03             LdaConstant [3]
         0x2a2e6724c5b @   19 : bf                Star5 
   98 E> 0x2a2e6724c5c @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2a2e6724c60 @   24 : be                Star6 
         0x2a2e6724c61 @   25 : 19 03 f6          Mov a0, r4
   83 E> 0x2a2e6724c64 @   28 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x2a2e6724c69 @   33 : 0e                LdaUndefined 
  154 E> 0x2a2e6724c6a @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  183 S> 0x2a2e6724c6e @   38 : 13 06             LdaConstant [6]
         0x2a2e6724c70 @   40 : c1                Star3 
  183 E> 0x2a2e6724c71 @   41 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  183 E> 0x2a2e6724c75 @   45 : 25 02             StaCurrentContextSlot [2]
         0x2a2e6724c77 @   47 : 10                LdaTheHole 
         0x2a2e6724c78 @   48 : bf                Star5 
         0x2a2e6724c79 @   49 : 80 08 00 02       CreateClosure [8], [0], #2
         0x2a2e6724c7d @   53 : c2                Star2 
         0x2a2e6724c7e @   54 : 13 07             LdaConstant [7]
         0x2a2e6724c80 @   56 : c1                Star3 
         0x2a2e6724c81 @   57 : 80 09 01 02       CreateClosure [9], [1], #2
         0x2a2e6724c85 @   61 : be                Star6 
         0x2a2e6724c86 @   62 : 19 f8 f6          Mov r2, r4
         0x2a2e6724c89 @   65 : 65 28 00 f7 04    CallRuntime [DefineClass], r3-r6
         0x2a2e6724c8e @   70 : c1                Star3 
         0x2a2e6724c8f @   71 : 19 f6 fa          Mov r4, r0
  349 S> 0x2a2e6724c92 @   74 : 0b fa             Ldar r0
  364 E> 0x2a2e6724c94 @   76 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x2a2e6724c98 @   80 : 0e                LdaUndefined 
  409 S> 0x2a2e6724c99 @   81 : a9                Return 
Constant pool (size = 10)
0x2a2e6724ca1: [FixedArray] in OldSpace
 - map: 0x319ac0c412e1 <Map>
 - length: 10
           0: 0x02a2e6724d01 <ScopeInfo FUNCTION_SCOPE>
           1: 0x319ac0c45ab9 <String[6]: #Object>
           2: 0x319ac0c44c11 <String[14]: #defineProperty>
           3: 0x02a2e6724d79 <String[10]: #__esModule>
           4: 0x02a2e6724d99 <ObjectBoilerplateDescription[3]>
           5: 0x02a2e6724dc1 <String[6]: #Random>
           6: 0x02a2e6724d59 <String[10]: #seedrandom>
           7: 0x02a2e6724dd9 <FixedArray[7]>
           8: 0x02a2e6724f41 <SharedFunctionInfo Random>
           9: 0x02a2e6725199 <SharedFunctionInfo random>
Handler Table (size = 0)
Source Position Table (size = 32)
0x02a2e67252d9 <ByteArray[32]>
Boilerplate at 0x02a2e6724d99: 
0x2a2e6724d99: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x319ac0c42059 <Map>
 - length: 3
           0: 8
           1: 0x319ac0c46419 <String[5]: #value>
           2: 0x319ac0c41729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x02a2e6724dd9 has 7 elements:
0x2a2e6724dd9: [FixedArray] in OldSpace
 - map: 0x319ac0c412e1 <Map>
 - length: 7
           0: 4
           1: 0x02a2e6724e21 <DescriptorArray[4]>
           2: 0x319ac0c43301 <NumberDictionary[7]>
           3: 0x319ac0c41329 <FixedArray[0]>
           4: 0x02a2e6724ee1 <DescriptorArray[2]>
           5: 0x319ac0c43301 <NumberDictionary[7]>
           6: 0x319ac0c41329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x4 (4)
Element[1]
0x2a2e6724e21: [DescriptorArray] in OldSpace
 - map: 0x319ac0c47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x319ac0c455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x0e199b3f4fe1 <AccessorInfo>
  [1]: 0x319ac0c458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x0e199b3f4f71 <AccessorInfo>
  [2]: 0x319ac0c45cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x0e199b3f5051 <AccessorInfo>
  [3]: 0x319ac0c465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x02a2e6724ec9 <ClassPositions 206, 348>
Element[2]
0x319ac0c43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x319ac0c41329: [FixedArray] in ReadOnlySpace
 - map: 0x319ac0c412e1 <Map>
 - length: 0
Element[4]
0x2a2e6724ee1: [DescriptorArray] in OldSpace
 - map: 0x319ac0c47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x319ac0c44a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0xe199b3daba1: [String] in OldSpace: #random (const data descriptor, p: 0, attrs: [W_C]) @ 3
Element[5]
0x319ac0c43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x319ac0c41329: [FixedArray] in ReadOnlySpace
 - map: 0x319ac0c412e1 <Map>
 - length: 0
0x02a2e6724f41 points to: [0x2a2e6724fb0]
=== [0x2a2e6724fb0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  253 S> 0x2a2e6724fb0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
  264 E> 0x2a2e6724fb2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x2a2e6724fb4 @    4 : c3                Star1 
  280 E> 0x2a2e6724fb5 @    5 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
         0x2a2e6724fb9 @    9 : c2                Star2 
  280 E> 0x2a2e6724fba @   10 : 5d f8 03 02       CallProperty0 r2, a0, [2]
         0x2a2e6724fbe @   14 : c2                Star2 
  264 E> 0x2a2e6724fbf @   15 : 62 f9 f8 04       CallUndefinedReceiver1 r1, r2, [4]
  262 E> 0x2a2e6724fc3 @   19 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
         0x2a2e6724fc7 @   23 : 0e                LdaUndefined 
  297 S> 0x2a2e6724fc8 @   24 : a9                Return 
Constant pool (size = 3)
0x2a2e6724fd1: [FixedArray] in OldSpace
 - map: 0x319ac0c412e1 <Map>
 - length: 3
           0: 0x02a2e6724d59 <String[10]: #seedrandom>
           1: 0x319ac0c462b9 <String[8]: #toString>
           2: 0x0e199b3e8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 18)
0x02a2e6725011 <ByteArray[18]>
0x02a2e6725199 points to: [0x2a2e6725208]
=== [0x2a2e6725208] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  334 S> 0x2a2e6725208 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2a2e672520c @    4 : c4                Star0 
  334 E> 0x2a2e672520d @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
  340 S> 0x2a2e6725211 @    9 : a9                Return 
Constant pool (size = 1)
0x2a2e6725219: [FixedArray] in OldSpace
 - map: 0x319ac0c412e1 <Map>
 - length: 1
           0: 0x0e199b3e8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 9)
0x02a2e6725231 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
