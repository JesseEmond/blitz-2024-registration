<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x5e0ef7a4e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x5e0ef7a4e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x5e0ef7a4e4c @    4 : c4                Star0 
 3247 S> 0x5e0ef7a4e4d @    5 : a9                Return 
Constant pool (size = 1)
0x5e0ef7a4e51: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 1
           0: 0x05e0ef7a4e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x05e0ef7a66e1 <ByteArray[7]>
0x05e0ef7a4e69 points to: [0x5e0ef7a4ed8]
=== [0x5e0ef7a4ed8] DISASSEMBLY ===
Parameter count 6
Register count 13
Frame size 104
OSR urgency: 0
Bytecode age: 0
   10 E> 0x5e0ef7a4ed8 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x5e0ef7a4edb @    3 : 1a f9             PushContext r1
         0x5e0ef7a4edd @    5 : 10                LdaTheHole 
         0x5e0ef7a4ede @    6 : 25 02             StaCurrentContextSlot [2]
         0x5e0ef7a4ee0 @    8 : 10                LdaTheHole 
         0x5e0ef7a4ee1 @    9 : 25 03             StaCurrentContextSlot [3]
   76 S> 0x5e0ef7a4ee3 @   11 : 21 01 00          LdaGlobal [1], [0]
         0x5e0ef7a4ee6 @   14 : c1                Star3 
   83 E> 0x5e0ef7a4ee7 @   15 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x5e0ef7a4eeb @   19 : c2                Star2 
         0x5e0ef7a4eec @   20 : 13 03             LdaConstant [3]
         0x5e0ef7a4eee @   22 : bf                Star5 
   98 E> 0x5e0ef7a4eef @   23 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x5e0ef7a4ef3 @   27 : be                Star6 
         0x5e0ef7a4ef4 @   28 : 19 03 f6          Mov a0, r4
   83 E> 0x5e0ef7a4ef7 @   31 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x5e0ef7a4efc @   36 : 0e                LdaUndefined 
  154 E> 0x5e0ef7a4efd @   37 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  185 S> 0x5e0ef7a4f01 @   41 : 13 06             LdaConstant [6]
         0x5e0ef7a4f03 @   43 : c1                Star3 
  185 E> 0x5e0ef7a4f04 @   44 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  185 E> 0x5e0ef7a4f08 @   48 : 25 02             StaCurrentContextSlot [2]
  234 S> 0x5e0ef7a4f0a @   50 : 13 07             LdaConstant [7]
         0x5e0ef7a4f0c @   52 : c1                Star3 
  234 E> 0x5e0ef7a4f0d @   53 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  234 E> 0x5e0ef7a4f11 @   57 : 25 03             StaCurrentContextSlot [3]
         0x5e0ef7a4f13 @   59 : 10                LdaTheHole 
         0x5e0ef7a4f14 @   60 : bf                Star5 
         0x5e0ef7a4f15 @   61 : 80 09 00 02       CreateClosure [9], [0], #2
         0x5e0ef7a4f19 @   65 : c2                Star2 
         0x5e0ef7a4f1a @   66 : 13 08             LdaConstant [8]
         0x5e0ef7a4f1c @   68 : c1                Star3 
         0x5e0ef7a4f1d @   69 : 80 0a 01 02       CreateClosure [10], [1], #2
         0x5e0ef7a4f21 @   73 : be                Star6 
         0x5e0ef7a4f22 @   74 : 80 0b 02 02       CreateClosure [11], [2], #2
         0x5e0ef7a4f26 @   78 : bd                Star7 
         0x5e0ef7a4f27 @   79 : 80 0c 03 02       CreateClosure [12], [3], #2
         0x5e0ef7a4f2b @   83 : bc                Star8 
         0x5e0ef7a4f2c @   84 : 80 0d 04 02       CreateClosure [13], [4], #2
         0x5e0ef7a4f30 @   88 : bb                Star9 
         0x5e0ef7a4f31 @   89 : 80 0e 05 02       CreateClosure [14], [5], #2
         0x5e0ef7a4f35 @   93 : ba                Star10 
         0x5e0ef7a4f36 @   94 : 80 0f 06 02       CreateClosure [15], [6], #2
         0x5e0ef7a4f3a @   98 : b9                Star11 
         0x5e0ef7a4f3b @   99 : 80 10 07 02       CreateClosure [16], [7], #2
         0x5e0ef7a4f3f @  103 : b8                Star12 
         0x5e0ef7a4f40 @  104 : 19 f8 f6          Mov r2, r4
         0x5e0ef7a4f43 @  107 : 65 28 00 f7 0a    CallRuntime [DefineClass], r3-r12
         0x5e0ef7a4f48 @  112 : c1                Star3 
         0x5e0ef7a4f49 @  113 : 19 f6 fa          Mov r4, r0
 3184 S> 0x5e0ef7a4f4c @  116 : 0b fa             Ldar r0
 3199 E> 0x5e0ef7a4f4e @  118 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x5e0ef7a4f52 @  122 : 0e                LdaUndefined 
 3244 S> 0x5e0ef7a4f53 @  123 : a9                Return 
Constant pool (size = 17)
0x5e0ef7a4f59: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 17
           0: 0x05e0ef7a4ff1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x123fc6505ab9 <String[6]: #Object>
           2: 0x123fc6504c11 <String[14]: #defineProperty>
           3: 0x05e0ef7a5099 <String[10]: #__esModule>
           4: 0x05e0ef7a50b9 <ObjectBoilerplateDescription[3]>
           5: 0x05e0ef7a50e1 <String[6]: #Cannon>
           6: 0x05e0ef7a50f9 <String[12]: #./projectile>
           7: 0x05e0ef7a5119 <String[15]: #./rotating_body>
           8: 0x05e0ef7a5139 <FixedArray[7]>
           9: 0x05e0ef7a53f9 <SharedFunctionInfo Cannon>
          10: 0x05e0ef7a5721 <SharedFunctionInfo update>
          11: 0x05e0ef7a5899 <SharedFunctionInfo launchRocket>
          12: 0x05e0ef7a5bc9 <SharedFunctionInfo setOrientationDegrees>
          13: 0x05e0ef7a5d99 <SharedFunctionInfo rotate>
          14: 0x05e0ef7a5fa9 <SharedFunctionInfo lookAt>
          15: 0x05e0ef7a6261 <SharedFunctionInfo serializeForPlayer>
          16: 0x05e0ef7a64a1 <SharedFunctionInfo serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 39)
0x05e0ef7a6689 <ByteArray[39]>
Boilerplate at 0x05e0ef7a50b9: 
0x5e0ef7a50b9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x123fc6502059 <Map>
 - length: 3
           0: 8
           1: 0x123fc6506419 <String[5]: #value>
           2: 0x123fc6501729 <true>
Array at 0x05e0ef7a5139 has 7 elements:
0x5e0ef7a5139: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 7
           0: 10
           1: 0x05e0ef7a5181 <DescriptorArray[4]>
           2: 0x123fc6503301 <NumberDictionary[7]>
           3: 0x123fc6501329 <FixedArray[0]>
           4: 0x05e0ef7a5241 <DescriptorArray[8]>
           5: 0x123fc6503301 <NumberDictionary[7]>
           6: 0x123fc6501329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xa (10)
Element[1]
0x5e0ef7a5181: [DescriptorArray] in OldSpace
 - map: 0x123fc6507761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x123fc65055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x369cb1334fe1 <AccessorInfo>
  [1]: 0x123fc65058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x369cb1334f71 <AccessorInfo>
  [2]: 0x123fc6505cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 2, attrs: [___]) @ 0x369cb1335051 <AccessorInfo>
  [3]: 0x123fc65065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x05e0ef7a5229 <ClassPositions 262, 3183>
Element[2]
0x123fc6503301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x123fc6501329: [FixedArray] in ReadOnlySpace
 - map: 0x123fc65012e1 <Map>
 - length: 0
Element[4]
0x5e0ef7a5241: [DescriptorArray] in OldSpace
 - map: 0x123fc6507761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 8
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x123fc6504a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x369cb1303f01: [String] in OldSpace: #update (const data descriptor, p: 2, attrs: [W_C]) @ 3
  [2]: 0x5e0ef7a5331: [String] in OldSpace: #launchRocket (const data descriptor, p: 4, attrs: [W_C]) @ 4
  [3]: 0x5e0ef7a5351: [String] in OldSpace: #setOrientationDegrees (const data descriptor, p: 6, attrs: [W_C]) @ 5
  [4]: 0x5e0ef7a5379: [String] in OldSpace: #rotate (const data descriptor, p: 3, attrs: [W_C]) @ 6
  [5]: 0x5e0ef7a5391: [String] in OldSpace: #lookAt (const data descriptor, p: 0, attrs: [W_C]) @ 7
  [6]: 0x5e0ef7a53a9: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 5, attrs: [W_C]) @ 8
  [7]: 0x5e0ef7a53d1: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 7, attrs: [W_C]) @ 9
Element[5]
0x123fc6503301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x123fc6501329: [FixedArray] in ReadOnlySpace
 - map: 0x123fc65012e1 <Map>
 - length: 0
0x05e0ef7a53f9 points to: [0x5e0ef7a5468]
=== [0x5e0ef7a5468] DISASSEMBLY ===
Parameter count 4
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0x5e0ef7a5468 @    0 : 19 03 fa          Mov a0, r0
         0x5e0ef7a546b @    3 : 0b 04             Ldar a1
         0x5e0ef7a546d @    5 : 9d 05             JumpIfNotUndefined [5] (0x5e0ef7a5472 @ 10)
         0x5e0ef7a546f @    7 : 0c                LdaZero 
         0x5e0ef7a5470 @    8 : 8a 04             Jump [4] (0x5e0ef7a5474 @ 12)
         0x5e0ef7a5472 @   10 : 0b 04             Ldar a1
         0x5e0ef7a5474 @   12 : c3                Star1 
         0x5e0ef7a5475 @   13 : 19 05 f8          Mov a2, r2
  432 S> 0x5e0ef7a5478 @   16 : 0c                LdaZero 
  455 E> 0x5e0ef7a5479 @   17 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  468 S> 0x5e0ef7a547d @   21 : 0b fa             Ldar r0
  482 E> 0x5e0ef7a547f @   23 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
  502 S> 0x5e0ef7a5483 @   27 : 17 03             LdaImmutableCurrentContextSlot [3]
  525 E> 0x5e0ef7a5485 @   29 : aa 02             ThrowReferenceErrorIfHole [2]
         0x5e0ef7a5487 @   31 : c0                Star4 
  541 E> 0x5e0ef7a5488 @   32 : 2d f6 03 04       GetNamedProperty r4, [3], [4]
         0x5e0ef7a548c @   36 : c0                Star4 
         0x5e0ef7a548d @   37 : 0b f6             Ldar r4
  521 E> 0x5e0ef7a548f @   39 : 69 f6 f9 01 06    Construct r4, r1-r1, [6]
  519 E> 0x5e0ef7a5494 @   44 : 32 02 04 08       SetNamedProperty <this>, [4], [8]
  590 S> 0x5e0ef7a5498 @   48 : 0b 05             Ldar a2
  603 E> 0x5e0ef7a549a @   50 : 32 02 05 0a       SetNamedProperty <this>, [5], [10]
         0x5e0ef7a549e @   54 : 0e                LdaUndefined 
  618 S> 0x5e0ef7a549f @   55 : a9                Return 
Constant pool (size = 6)
0x5e0ef7a54a1: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 6
           0: 0x05e0ef7a54e1 <String[17]: #cooldownCountdown>
           1: 0x123fc6505c19 <String[8]: #position>
           2: 0x05e0ef7a5079 <String[15]: #rotating_body_1>
           3: 0x05e0ef7a5509 <String[12]: #RotatingBody>
           4: 0x05e0ef7a5529 <String[11]: #orientation>
           5: 0x369cb130cbb9 <String[7]: #options>
Handler Table (size = 0)
Source Position Table (size = 29)
0x05e0ef7a5561 <ByteArray[29]>
0x05e0ef7a5721 points to: [0x5e0ef7a5790]
=== [0x5e0ef7a5790] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  668 S> 0x5e0ef7a5790 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x5e0ef7a5793 @    3 : c2                Star2 
  673 E> 0x5e0ef7a5794 @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x5e0ef7a5798 @    8 : c3                Star1 
  682 E> 0x5e0ef7a5799 @    9 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
  700 E> 0x5e0ef7a579d @   13 : 46 01 04          SubSmi [1], [4]
         0x5e0ef7a57a0 @   16 : c1                Star3 
         0x5e0ef7a57a1 @   17 : 0c                LdaZero 
         0x5e0ef7a57a2 @   18 : c0                Star4 
  673 E> 0x5e0ef7a57a3 @   19 : 5f f9 f8 f7 f6 07 CallProperty2 r1, r2, r3, r4, [7]
  666 E> 0x5e0ef7a57a9 @   25 : 32 02 02 09       SetNamedProperty <this>, [2], [9]
         0x5e0ef7a57ad @   29 : 0e                LdaUndefined 
  713 S> 0x5e0ef7a57ae @   30 : a9                Return 
Constant pool (size = 3)
0x5e0ef7a57b1: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 3
           0: 0x369cb131a991 <String[4]: #Math>
           1: 0x369cb131a181 <String[3]: #max>
           2: 0x05e0ef7a54e1 <String[17]: #cooldownCountdown>
Handler Table (size = 0)
Source Position Table (size = 19)
0x05e0ef7a5809 <ByteArray[19]>
0x05e0ef7a5899 points to: [0x5e0ef7a5908]
=== [0x5e0ef7a5908] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  753 S> 0x5e0ef7a5908 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x5e0ef7a590c @    4 : c4                Star0 
         0x5e0ef7a590d @    5 : 0c                LdaZero 
  771 E> 0x5e0ef7a590e @    6 : 6e fa 02          TestGreaterThan r0, [2]
         0x5e0ef7a5911 @    9 : 99 20             JumpIfFalse [32] (0x5e0ef7a5931 @ 41)
  790 S> 0x5e0ef7a5913 @   11 : 21 01 03          LdaGlobal [1], [3]
         0x5e0ef7a5916 @   14 : c4                Star0 
         0x5e0ef7a5917 @   15 : 13 02             LdaConstant [2]
         0x5e0ef7a5919 @   17 : c3                Star1 
  845 E> 0x5e0ef7a591a @   18 : 2d 02 00 06       GetNamedProperty <this>, [0], [6]
         0x5e0ef7a591e @   22 : 77                ToString 
         0x5e0ef7a591f @   23 : 39 f9 05          Add r1, [5]
         0x5e0ef7a5922 @   26 : c3                Star1 
         0x5e0ef7a5923 @   27 : 13 03             LdaConstant [3]
         0x5e0ef7a5925 @   29 : 39 f9 05          Add r1, [5]
         0x5e0ef7a5928 @   32 : c3                Star1 
         0x5e0ef7a5929 @   33 : 0b fa             Ldar r0
  796 E> 0x5e0ef7a592b @   35 : 69 fa f9 01 08    Construct r0, r1-r1, [8]
  790 E> 0x5e0ef7a5930 @   40 : a7                Throw 
  926 S> 0x5e0ef7a5931 @   41 : 2d 02 04 0a       GetNamedProperty <this>, [4], [10]
         0x5e0ef7a5935 @   45 : c3                Star1 
  934 E> 0x5e0ef7a5936 @   46 : 2d f9 05 0c       GetNamedProperty r1, [5], [12]
  919 E> 0x5e0ef7a593a @   50 : 32 02 00 0e       SetNamedProperty <this>, [0], [14]
  957 S> 0x5e0ef7a593e @   54 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x5e0ef7a5940 @   56 : aa 06             ThrowReferenceErrorIfHole [6]
         0x5e0ef7a5942 @   58 : c4                Star0 
  981 E> 0x5e0ef7a5943 @   59 : 2d fa 07 10       GetNamedProperty r0, [7], [16]
         0x5e0ef7a5947 @   63 : c4                Star0 
  997 E> 0x5e0ef7a5948 @   64 : 2d 02 08 12       GetNamedProperty <this>, [8], [18]
         0x5e0ef7a594c @   68 : c3                Star1 
 1012 E> 0x5e0ef7a594d @   69 : 2d 02 09 14       GetNamedProperty <this>, [9], [20]
         0x5e0ef7a5951 @   73 : c1                Star3 
 1024 E> 0x5e0ef7a5952 @   74 : 2d f7 0a 16       GetNamedProperty r3, [10], [22]
         0x5e0ef7a5956 @   78 : c1                Star3 
 1032 E> 0x5e0ef7a5957 @   79 : 2d f7 0b 18       GetNamedProperty r3, [11], [24]
         0x5e0ef7a595b @   83 : c2                Star2 
 1046 E> 0x5e0ef7a595c @   84 : 2d 02 04 1a       GetNamedProperty <this>, [4], [26]
         0x5e0ef7a5960 @   88 : c0                Star4 
 1054 E> 0x5e0ef7a5961 @   89 : 2d f6 0c 1c       GetNamedProperty r4, [12], [28]
         0x5e0ef7a5965 @   93 : c0                Star4 
 1032 E> 0x5e0ef7a5966 @   94 : 5e f8 f7 f6 1e    CallProperty1 r2, r3, r4, [30]
         0x5e0ef7a596b @   99 : c2                Star2 
 1073 E> 0x5e0ef7a596c @  100 : 2d 02 04 20       GetNamedProperty <this>, [4], [32]
         0x5e0ef7a5970 @  104 : c1                Star3 
 1081 E> 0x5e0ef7a5971 @  105 : 2d f7 0d 22       GetNamedProperty r3, [13], [34]
         0x5e0ef7a5975 @  109 : c1                Star3 
         0x5e0ef7a5976 @  110 : 0b fa             Ldar r0
  964 E> 0x5e0ef7a5978 @  112 : 69 fa f9 03 24    Construct r0, r1-r3, [36]
 1093 S> 0x5e0ef7a597d @  117 : a9                Return 
Constant pool (size = 14)
0x5e0ef7a5981: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 14
           0: 0x05e0ef7a54e1 <String[17]: #cooldownCountdown>
           1: 0x123fc6504de1 <String[5]: #Error>
           2: 0x05e0ef7a5a01 <String[31]: #Can't shoot while on cooldown. >
           3: 0x05e0ef7a5a31 <String[11]: # ticks left>
           4: 0x369cb130cbb9 <String[7]: #options>
           5: 0x05e0ef7a5a51 <String[13]: #cooldownTicks>
           6: 0x05e0ef7a5059 <String[12]: #projectile_1>
           7: 0x05e0ef7a5a71 <String[10]: #Projectile>
           8: 0x123fc6505c19 <String[8]: #position>
           9: 0x05e0ef7a5529 <String[11]: #orientation>
          10: 0x05e0ef7a5a91 <String[7]: #heading>
          11: 0x05e0ef7a5aa9 <String[8]: #multiply>
          12: 0x05e0ef7a5ac1 <String[11]: #bulletSpeed>
          13: 0x05e0ef7a5ae1 <String[10]: #bulletSize>
Handler Table (size = 0)
Source Position Table (size = 54)
0x05e0ef7a5b01 <ByteArray[54]>
0x05e0ef7a5bc9 points to: [0x5e0ef7a5c38]
=== [0x5e0ef7a5c38] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1198 S> 0x5e0ef7a5c38 @    0 : 0b 03             Ldar a0
 1206 E> 0x5e0ef7a5c3a @    2 : 00 49 68 01 00 00 ModSmi.Wide [360], [0]
         0x5e0ef7a5c40 @    8 : c4                Star0 
 1221 S> 0x5e0ef7a5c41 @    9 : 0c                LdaZero 
 1234 E> 0x5e0ef7a5c42 @   10 : 6d fa 01          TestLessThan r0, [1]
         0x5e0ef7a5c45 @   13 : 99 0b             JumpIfFalse [11] (0x5e0ef7a5c50 @ 24)
 1253 S> 0x5e0ef7a5c47 @   15 : 0b fa             Ldar r0
         0x5e0ef7a5c49 @   17 : 00 45 68 01 02 00 AddSmi.Wide [360], [2]
         0x5e0ef7a5c4f @   23 : c4                Star0 
 1345 S> 0x5e0ef7a5c50 @   24 : 0d 5a             LdaSmi [90]
 1358 E> 0x5e0ef7a5c52 @   26 : 6e fa 03          TestGreaterThan r0, [3]
         0x5e0ef7a5c55 @   29 : 99 18             JumpIfFalse [24] (0x5e0ef7a5c6d @ 53)
         0x5e0ef7a5c57 @   31 : 00 0d b4 00       LdaSmi.Wide [180]
 1375 E> 0x5e0ef7a5c5b @   35 : 6f fa 04          TestLessThanOrEqual r0, [4]
         0x5e0ef7a5c5e @   38 : 99 0f             JumpIfFalse [15] (0x5e0ef7a5c6d @ 53)
 1402 S> 0x5e0ef7a5c60 @   40 : 2d 02 00 05       GetNamedProperty <this>, [0], [5]
         0x5e0ef7a5c64 @   44 : c3                Star1 
         0x5e0ef7a5c65 @   45 : 0d 5a             LdaSmi [90]
 1433 E> 0x5e0ef7a5c67 @   47 : 32 f9 01 07       SetNamedProperty r1, [1], [7]
         0x5e0ef7a5c6b @   51 : 8a 2e             Jump [46] (0x5e0ef7a5c99 @ 97)
 1462 S> 0x5e0ef7a5c6d @   53 : 00 0d b4 00       LdaSmi.Wide [180]
 1475 E> 0x5e0ef7a5c71 @   57 : 6e fa 09          TestGreaterThan r0, [9]
         0x5e0ef7a5c74 @   60 : 99 1a             JumpIfFalse [26] (0x5e0ef7a5c8e @ 86)
         0x5e0ef7a5c76 @   62 : 00 0d 0e 01       LdaSmi.Wide [270]
 1493 E> 0x5e0ef7a5c7a @   66 : 6d fa 0a          TestLessThan r0, [10]
         0x5e0ef7a5c7d @   69 : 99 11             JumpIfFalse [17] (0x5e0ef7a5c8e @ 86)
 1519 S> 0x5e0ef7a5c7f @   71 : 2d 02 00 0b       GetNamedProperty <this>, [0], [11]
         0x5e0ef7a5c83 @   75 : c3                Star1 
         0x5e0ef7a5c84 @   76 : 00 0d 0e 01       LdaSmi.Wide [270]
 1550 E> 0x5e0ef7a5c88 @   80 : 32 f9 01 0d       SetNamedProperty r1, [1], [13]
         0x5e0ef7a5c8c @   84 : 8a 0d             Jump [13] (0x5e0ef7a5c99 @ 97)
 1599 S> 0x5e0ef7a5c8e @   86 : 2d 02 00 0f       GetNamedProperty <this>, [0], [15]
         0x5e0ef7a5c92 @   90 : c3                Star1 
         0x5e0ef7a5c93 @   91 : 0b fa             Ldar r0
 1630 E> 0x5e0ef7a5c95 @   93 : 32 f9 01 11       SetNamedProperty r1, [1], [17]
         0x5e0ef7a5c99 @   97 : 0e                LdaUndefined 
 1656 S> 0x5e0ef7a5c9a @   98 : a9                Return 
Constant pool (size = 2)
0x5e0ef7a5ca1: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 2
           0: 0x05e0ef7a5529 <String[11]: #orientation>
           1: 0x05e0ef7a5cc1 <String[18]: #orientationDegrees>
Handler Table (size = 0)
Source Position Table (size = 42)
0x05e0ef7a5ce9 <ByteArray[42]>
0x05e0ef7a5d99 points to: [0x5e0ef7a5e08]
=== [0x5e0ef7a5e08] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1872 S> 0x5e0ef7a5e08 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x5e0ef7a5e0b @    3 : c2                Star2 
 1877 E> 0x5e0ef7a5e0c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x5e0ef7a5e10 @    8 : c3                Star1 
 1881 E> 0x5e0ef7a5e11 @    9 : 21 00 00          LdaGlobal [0], [0]
         0x5e0ef7a5e14 @   12 : c0                Star4 
 1886 E> 0x5e0ef7a5e15 @   13 : 2d f6 02 04       GetNamedProperty r4, [2], [4]
         0x5e0ef7a5e19 @   17 : c1                Star3 
 1904 E> 0x5e0ef7a5e1a @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x5e0ef7a5e1e @   22 : be                Star6 
 1912 E> 0x5e0ef7a5e1f @   23 : 2d f4 04 08       GetNamedProperty r6, [4], [8]
         0x5e0ef7a5e23 @   27 : be                Star6 
 1886 E> 0x5e0ef7a5e24 @   28 : 5f f7 f6 03 f4 0a CallProperty2 r3, r4, a0, r6, [10]
         0x5e0ef7a5e2a @   34 : c1                Star3 
 1939 E> 0x5e0ef7a5e2b @   35 : 2d 02 03 0c       GetNamedProperty <this>, [3], [12]
         0x5e0ef7a5e2f @   39 : c0                Star4 
 1947 E> 0x5e0ef7a5e30 @   40 : 2d f6 04 0e       GetNamedProperty r4, [4], [14]
 1933 E> 0x5e0ef7a5e34 @   44 : 53 10             Negate [16]
         0x5e0ef7a5e36 @   46 : c0                Star4 
 1877 E> 0x5e0ef7a5e37 @   47 : 5f f9 f8 f7 f6 11 CallProperty2 r1, r2, r3, r4, [17]
         0x5e0ef7a5e3d @   53 : c4                Star0 
 1981 S> 0x5e0ef7a5e3e @   54 : 2d 02 05 13       GetNamedProperty <this>, [5], [19]
         0x5e0ef7a5e42 @   58 : c3                Star1 
 2008 E> 0x5e0ef7a5e43 @   59 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x5e0ef7a5e47 @   63 : c1                Star3 
 2020 E> 0x5e0ef7a5e48 @   64 : 2d f7 07 18       GetNamedProperty r3, [7], [24]
         0x5e0ef7a5e4c @   68 : c1                Star3 
         0x5e0ef7a5e4d @   69 : 0b fa             Ldar r0
 2039 E> 0x5e0ef7a5e4f @   71 : 39 f7 15          Add r3, [21]
         0x5e0ef7a5e52 @   74 : c1                Star3 
 1981 E> 0x5e0ef7a5e53 @   75 : 5e f9 02 f7 1a    CallProperty1 r1, <this>, r3, [26]
         0x5e0ef7a5e58 @   80 : 0e                LdaUndefined 
 2062 S> 0x5e0ef7a5e59 @   81 : a9                Return 
Constant pool (size = 8)
0x5e0ef7a5e61: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 8
           0: 0x369cb131a991 <String[4]: #Math>
           1: 0x369cb131a181 <String[3]: #max>
           2: 0x369cb131a149 <String[3]: #min>
           3: 0x369cb130cbb9 <String[7]: #options>
           4: 0x05e0ef7a5ec9 <String[18]: #maxRotationDegrees>
           5: 0x05e0ef7a5351 <String[21]: #setOrientationDegrees>
           6: 0x05e0ef7a5529 <String[11]: #orientation>
           7: 0x05e0ef7a5cc1 <String[18]: #orientationDegrees>
Handler Table (size = 0)
Source Position Table (size = 43)
0x05e0ef7a5ef1 <ByteArray[43]>
0x05e0ef7a5fa9 points to: [0x5e0ef7a6018]
=== [0x5e0ef7a6018] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 2167 S> 0x5e0ef7a6018 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x5e0ef7a601c @    4 : c1                Star3 
 2181 E> 0x5e0ef7a601d @    5 : 2d 02 01 02       GetNamedProperty <this>, [1], [2]
         0x5e0ef7a6021 @    9 : bf                Star5 
 2167 E> 0x5e0ef7a6022 @   10 : 5e f7 03 f5 04    CallProperty1 r3, a0, r5, [4]
         0x5e0ef7a6027 @   15 : c1                Star3 
 2190 E> 0x5e0ef7a6028 @   16 : 2d f7 02 06       GetNamedProperty r3, [2], [6]
         0x5e0ef7a602c @   20 : c4                Star0 
 2234 S> 0x5e0ef7a602d @   21 : 21 03 0a          LdaGlobal [3], [10]
         0x5e0ef7a6030 @   24 : c0                Star4 
 2239 E> 0x5e0ef7a6031 @   25 : 2d f6 04 0c       GetNamedProperty r4, [4], [12]
         0x5e0ef7a6035 @   29 : c1                Star3 
 2256 E> 0x5e0ef7a6036 @   30 : 2d fa 05 0e       GetNamedProperty r0, [5], [14]
         0x5e0ef7a603a @   34 : bf                Star5 
 2270 E> 0x5e0ef7a603b @   35 : 2d fa 06 10       GetNamedProperty r0, [6], [16]
         0x5e0ef7a603f @   39 : be                Star6 
 2239 E> 0x5e0ef7a6040 @   40 : 5f f7 f6 f5 f4 12 CallProperty2 r3, r4, r5, r6, [18]
 2273 E> 0x5e0ef7a6046 @   46 : 00 47 b4 00 09 00 MulSmi.Wide [180], [9]
         0x5e0ef7a604c @   52 : c1                Star3 
 2281 E> 0x5e0ef7a604d @   53 : 21 03 0a          LdaGlobal [3], [10]
         0x5e0ef7a6050 @   56 : c0                Star4 
 2286 E> 0x5e0ef7a6051 @   57 : 2d f6 07 14       GetNamedProperty r4, [7], [20]
 2279 E> 0x5e0ef7a6055 @   61 : 3c f7 08          Div r3, [8]
         0x5e0ef7a6058 @   64 : c3                Star1 
 2332 S> 0x5e0ef7a6059 @   65 : 2d 02 08 17       GetNamedProperty <this>, [8], [23]
         0x5e0ef7a605d @   69 : c0                Star4 
 2344 E> 0x5e0ef7a605e @   70 : 2d f6 09 19       GetNamedProperty r4, [9], [25]
 2325 E> 0x5e0ef7a6062 @   74 : 3a f9 16          Sub r1, [22]
         0x5e0ef7a6065 @   77 : c2                Star2 
 2372 S> 0x5e0ef7a6066 @   78 : 00 0d b4 00       LdaSmi.Wide [180]
 2382 E> 0x5e0ef7a606a @   82 : 6e f8 1b          TestGreaterThan r2, [27]
         0x5e0ef7a606d @   85 : 99 0b             JumpIfFalse [11] (0x5e0ef7a6078 @ 96)
 2403 S> 0x5e0ef7a606f @   87 : 0b f8             Ldar r2
         0x5e0ef7a6071 @   89 : 00 46 68 01 1c 00 SubSmi.Wide [360], [28]
         0x5e0ef7a6077 @   95 : c2                Star2 
 2461 S> 0x5e0ef7a6078 @   96 : 00 0d 4c ff       LdaSmi.Wide [-180]
 2471 E> 0x5e0ef7a607c @  100 : 6d f8 1d          TestLessThan r2, [29]
         0x5e0ef7a607f @  103 : 99 0b             JumpIfFalse [11] (0x5e0ef7a608a @ 114)
 2493 S> 0x5e0ef7a6081 @  105 : 0b f8             Ldar r2
         0x5e0ef7a6083 @  107 : 00 45 68 01 1e 00 AddSmi.Wide [360], [30]
         0x5e0ef7a6089 @  113 : c2                Star2 
 2556 S> 0x5e0ef7a608a @  114 : 2d 02 0a 1f       GetNamedProperty <this>, [10], [31]
         0x5e0ef7a608e @  118 : c1                Star3 
 2556 E> 0x5e0ef7a608f @  119 : 5e f7 02 f8 21    CallProperty1 r3, <this>, r2, [33]
         0x5e0ef7a6094 @  124 : 0e                LdaUndefined 
 2575 S> 0x5e0ef7a6095 @  125 : a9                Return 
Constant pool (size = 11)
0x5e0ef7a6099: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 11
           0: 0x05e0ef7a6101 <String[8]: #subtract>
           1: 0x123fc6505c19 <String[8]: #position>
           2: 0x05e0ef7a6119 <String[10]: #normalized>
           3: 0x369cb131a991 <String[4]: #Math>
           4: 0x369cb131aa51 <String[5]: #atan2>
           5: 0x369cb1318ae1 <String[1]: #y>
           6: 0x369cb1318ac9 <String[1]: #x>
           7: 0x369cb131aca9 <String[2]: #PI>
           8: 0x05e0ef7a5529 <String[11]: #orientation>
           9: 0x05e0ef7a5cc1 <String[18]: #orientationDegrees>
          10: 0x05e0ef7a5379 <String[6]: #rotate>
Handler Table (size = 0)
Source Position Table (size = 60)
0x05e0ef7a6199 <ByteArray[60]>
0x05e0ef7a6261 points to: [0x5e0ef7a62d0]
=== [0x5e0ef7a62d0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2612 S> 0x5e0ef7a62d0 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x5e0ef7a62d4 @    4 : c4                Star0 
 2648 E> 0x5e0ef7a62d5 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x5e0ef7a62d9 @    9 : c2                Star2 
 2657 E> 0x5e0ef7a62da @   10 : 2d f8 02 03       GetNamedProperty r2, [2], [3]
         0x5e0ef7a62de @   14 : c3                Star1 
 2657 E> 0x5e0ef7a62df @   15 : 5d f9 f8 05       CallProperty0 r1, r2, [5]
         0x5e0ef7a62e3 @   19 : 33 fa 01 07       DefineNamedOwnProperty r0, [1], [7]
 2700 E> 0x5e0ef7a62e7 @   23 : 2d 02 03 09       GetNamedProperty <this>, [3], [9]
         0x5e0ef7a62eb @   27 : c3                Star1 
 2712 E> 0x5e0ef7a62ec @   28 : 2d f9 04 0b       GetNamedProperty r1, [4], [11]
         0x5e0ef7a62f0 @   32 : c3                Star1 
         0x5e0ef7a62f1 @   33 : 00 0d b4 00       LdaSmi.Wide [180]
 2731 E> 0x5e0ef7a62f5 @   37 : 6e f9 0d          TestGreaterThan r1, [13]
         0x5e0ef7a62f8 @   40 : 99 13             JumpIfFalse [19] (0x5e0ef7a630b @ 59)
 2811 E> 0x5e0ef7a62fa @   42 : 2d 02 03 0f       GetNamedProperty <this>, [3], [15]
         0x5e0ef7a62fe @   46 : c3                Star1 
 2823 E> 0x5e0ef7a62ff @   47 : 2d f9 04 11       GetNamedProperty r1, [4], [17]
 2842 E> 0x5e0ef7a6303 @   51 : 00 46 68 01 0e 00 SubSmi.Wide [360], [14]
         0x5e0ef7a6309 @   57 : 8a 0b             Jump [11] (0x5e0ef7a6314 @ 68)
 2871 E> 0x5e0ef7a630b @   59 : 2d 02 03 13       GetNamedProperty <this>, [3], [19]
         0x5e0ef7a630f @   63 : c3                Star1 
 2883 E> 0x5e0ef7a6310 @   64 : 2d f9 04 15       GetNamedProperty r1, [4], [21]
         0x5e0ef7a6314 @   68 : 33 fa 03 17       DefineNamedOwnProperty r0, [3], [23]
 2930 E> 0x5e0ef7a6318 @   72 : 2d 02 05 19       GetNamedProperty <this>, [5], [25]
         0x5e0ef7a631c @   76 : 33 fa 06 1b       DefineNamedOwnProperty r0, [6], [27]
         0x5e0ef7a6320 @   80 : 0b fa             Ldar r0
 2958 S> 0x5e0ef7a6322 @   82 : a9                Return 
Constant pool (size = 7)
0x5e0ef7a6329: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 7
           0: 0x05e0ef7a6371 <ObjectBoilerplateDescription[7]>
           1: 0x123fc6505c19 <String[8]: #position>
           2: 0x369cb13101a9 <String[9]: #serialize>
           3: 0x05e0ef7a5529 <String[11]: #orientation>
           4: 0x05e0ef7a5cc1 <String[18]: #orientationDegrees>
           5: 0x05e0ef7a54e1 <String[17]: #cooldownCountdown>
           6: 0x05e0ef7a63b9 <String[8]: #cooldown>
Handler Table (size = 0)
Source Position Table (size = 35)
0x05e0ef7a63f1 <ByteArray[35]>
Boilerplate at 0x05e0ef7a6371: 
0x5e0ef7a6371: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x123fc6502059 <Map>
 - length: 7
           0: 8
           1: 0x123fc6505c19 <String[8]: #position>
           2: 0x123fc6501501 <Odd Oddball: uninitialized>
           3: 0x05e0ef7a5529 <String[11]: #orientation>
           4: 0x123fc6501501 <Odd Oddball: uninitialized>
           5: 0x05e0ef7a63b9 <String[8]: #cooldown>
           6: 0x123fc6501501 <Odd Oddball: uninitialized>
0x05e0ef7a64a1 points to: [0x5e0ef7a6510]
=== [0x5e0ef7a6510] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 3000 S> 0x5e0ef7a6510 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x5e0ef7a6514 @    4 : c4                Star0 
 3036 E> 0x5e0ef7a6515 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x5e0ef7a6519 @    9 : c2                Star2 
 3045 E> 0x5e0ef7a651a @   10 : 2d f8 02 03       GetNamedProperty r2, [2], [3]
         0x5e0ef7a651e @   14 : c3                Star1 
 3045 E> 0x5e0ef7a651f @   15 : 5d f9 f8 05       CallProperty0 r1, r2, [5]
         0x5e0ef7a6523 @   19 : 33 fa 01 07       DefineNamedOwnProperty r0, [1], [7]
 3088 E> 0x5e0ef7a6527 @   23 : 2d 02 03 09       GetNamedProperty <this>, [3], [9]
         0x5e0ef7a652b @   27 : c3                Star1 
 3100 E> 0x5e0ef7a652c @   28 : 2d f9 04 0b       GetNamedProperty r1, [4], [11]
         0x5e0ef7a6530 @   32 : 33 fa 03 0d       DefineNamedOwnProperty r0, [3], [13]
 3147 E> 0x5e0ef7a6534 @   36 : 2d 02 05 0f       GetNamedProperty <this>, [5], [15]
         0x5e0ef7a6538 @   40 : 33 fa 06 11       DefineNamedOwnProperty r0, [6], [17]
         0x5e0ef7a653c @   44 : 0b fa             Ldar r0
 3175 S> 0x5e0ef7a653e @   46 : a9                Return 
Constant pool (size = 7)
0x5e0ef7a6541: [FixedArray] in OldSpace
 - map: 0x123fc65012e1 <Map>
 - length: 7
           0: 0x05e0ef7a6589 <ObjectBoilerplateDescription[7]>
           1: 0x123fc6505c19 <String[8]: #position>
           2: 0x369cb13101a9 <String[9]: #serialize>
           3: 0x05e0ef7a5529 <String[11]: #orientation>
           4: 0x05e0ef7a5cc1 <String[18]: #orientationDegrees>
           5: 0x05e0ef7a54e1 <String[17]: #cooldownCountdown>
           6: 0x05e0ef7a63b9 <String[8]: #cooldown>
Handler Table (size = 0)
Source Position Table (size = 22)
0x05e0ef7a65d1 <ByteArray[22]>
Boilerplate at 0x05e0ef7a6589: 
0x5e0ef7a6589: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x123fc6502059 <Map>
 - length: 7
           0: 8
           1: 0x123fc6505c19 <String[8]: #position>
           2: 0x123fc6501501 <Odd Oddball: uninitialized>
           3: 0x05e0ef7a5529 <String[11]: #orientation>
           4: 0x123fc6501501 <Odd Oddball: uninitialized>
           5: 0x05e0ef7a63b9 <String[8]: #cooldown>
           6: 0x123fc6501501 <Odd Oddball: uninitialized>
<< OUTPUTTING DISASSEMBLY END >>
