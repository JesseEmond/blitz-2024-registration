<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0xd2258fe4d18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0xd2258fe4d18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0xd2258fe4d1c @    4 : c4                Star0 
 3247 S> 0xd2258fe4d1d @    5 : a9                Return 
Constant pool (size = 1)
0xd2258fe4d21: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 1
           0: 0x0d2258fe4d39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x0d2258fe65b1 <ByteArray[7]>
0x0d2258fe4d39 points to: [0xd2258fe4da8]
=== [0xd2258fe4da8] DISASSEMBLY ===
Parameter count 6
Register count 13
Frame size 104
OSR urgency: 0
Bytecode age: 0
   10 E> 0xd2258fe4da8 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0xd2258fe4dab @    3 : 1a f9             PushContext r1
         0xd2258fe4dad @    5 : 10                LdaTheHole 
         0xd2258fe4dae @    6 : 25 02             StaCurrentContextSlot [2]
         0xd2258fe4db0 @    8 : 10                LdaTheHole 
         0xd2258fe4db1 @    9 : 25 03             StaCurrentContextSlot [3]
   76 S> 0xd2258fe4db3 @   11 : 21 01 00          LdaGlobal [1], [0]
         0xd2258fe4db6 @   14 : c1                Star3 
   83 E> 0xd2258fe4db7 @   15 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0xd2258fe4dbb @   19 : c2                Star2 
         0xd2258fe4dbc @   20 : 13 03             LdaConstant [3]
         0xd2258fe4dbe @   22 : bf                Star5 
   98 E> 0xd2258fe4dbf @   23 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0xd2258fe4dc3 @   27 : be                Star6 
         0xd2258fe4dc4 @   28 : 19 03 f6          Mov a0, r4
   83 E> 0xd2258fe4dc7 @   31 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0xd2258fe4dcc @   36 : 0e                LdaUndefined 
  154 E> 0xd2258fe4dcd @   37 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  185 S> 0xd2258fe4dd1 @   41 : 13 06             LdaConstant [6]
         0xd2258fe4dd3 @   43 : c1                Star3 
  185 E> 0xd2258fe4dd4 @   44 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  185 E> 0xd2258fe4dd8 @   48 : 25 02             StaCurrentContextSlot [2]
  234 S> 0xd2258fe4dda @   50 : 13 07             LdaConstant [7]
         0xd2258fe4ddc @   52 : c1                Star3 
  234 E> 0xd2258fe4ddd @   53 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  234 E> 0xd2258fe4de1 @   57 : 25 03             StaCurrentContextSlot [3]
         0xd2258fe4de3 @   59 : 10                LdaTheHole 
         0xd2258fe4de4 @   60 : bf                Star5 
         0xd2258fe4de5 @   61 : 80 09 00 02       CreateClosure [9], [0], #2
         0xd2258fe4de9 @   65 : c2                Star2 
         0xd2258fe4dea @   66 : 13 08             LdaConstant [8]
         0xd2258fe4dec @   68 : c1                Star3 
         0xd2258fe4ded @   69 : 80 0a 01 02       CreateClosure [10], [1], #2
         0xd2258fe4df1 @   73 : be                Star6 
         0xd2258fe4df2 @   74 : 80 0b 02 02       CreateClosure [11], [2], #2
         0xd2258fe4df6 @   78 : bd                Star7 
         0xd2258fe4df7 @   79 : 80 0c 03 02       CreateClosure [12], [3], #2
         0xd2258fe4dfb @   83 : bc                Star8 
         0xd2258fe4dfc @   84 : 80 0d 04 02       CreateClosure [13], [4], #2
         0xd2258fe4e00 @   88 : bb                Star9 
         0xd2258fe4e01 @   89 : 80 0e 05 02       CreateClosure [14], [5], #2
         0xd2258fe4e05 @   93 : ba                Star10 
         0xd2258fe4e06 @   94 : 80 0f 06 02       CreateClosure [15], [6], #2
         0xd2258fe4e0a @   98 : b9                Star11 
         0xd2258fe4e0b @   99 : 80 10 07 02       CreateClosure [16], [7], #2
         0xd2258fe4e0f @  103 : b8                Star12 
         0xd2258fe4e10 @  104 : 19 f8 f6          Mov r2, r4
         0xd2258fe4e13 @  107 : 65 28 00 f7 0a    CallRuntime [DefineClass], r3-r12
         0xd2258fe4e18 @  112 : c1                Star3 
         0xd2258fe4e19 @  113 : 19 f6 fa          Mov r4, r0
 3184 S> 0xd2258fe4e1c @  116 : 0b fa             Ldar r0
 3199 E> 0xd2258fe4e1e @  118 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0xd2258fe4e22 @  122 : 0e                LdaUndefined 
 3244 S> 0xd2258fe4e23 @  123 : a9                Return 
Constant pool (size = 17)
0xd2258fe4e29: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 17
           0: 0x0d2258fe4ec1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x09d38b985ab9 <String[6]: #Object>
           2: 0x09d38b984c11 <String[14]: #defineProperty>
           3: 0x0d2258fe4f69 <String[10]: #__esModule>
           4: 0x0d2258fe4f89 <ObjectBoilerplateDescription[3]>
           5: 0x0d2258fe4fb1 <String[6]: #Cannon>
           6: 0x0d2258fe4fc9 <String[12]: #./projectile>
           7: 0x0d2258fe4fe9 <String[15]: #./rotating_body>
           8: 0x0d2258fe5009 <FixedArray[7]>
           9: 0x0d2258fe52c9 <SharedFunctionInfo Cannon>
          10: 0x0d2258fe55f1 <SharedFunctionInfo update>
          11: 0x0d2258fe5769 <SharedFunctionInfo launchRocket>
          12: 0x0d2258fe5a99 <SharedFunctionInfo setOrientationDegrees>
          13: 0x0d2258fe5c69 <SharedFunctionInfo rotate>
          14: 0x0d2258fe5e79 <SharedFunctionInfo lookAt>
          15: 0x0d2258fe6131 <SharedFunctionInfo serializeForPlayer>
          16: 0x0d2258fe6371 <SharedFunctionInfo serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 39)
0x0d2258fe6559 <ByteArray[39]>
Boilerplate at 0x0d2258fe4f89: 
0xd2258fe4f89: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x09d38b982059 <Map>
 - length: 3
           0: 8
           1: 0x09d38b986419 <String[5]: #value>
           2: 0x09d38b981729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x0d2258fe5009 has 7 elements:
0xd2258fe5009: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 7
           0: 10
           1: 0x0d2258fe5051 <DescriptorArray[4]>
           2: 0x09d38b983301 <NumberDictionary[7]>
           3: 0x09d38b981329 <FixedArray[0]>
           4: 0x0d2258fe5111 <DescriptorArray[8]>
           5: 0x09d38b983301 <NumberDictionary[7]>
           6: 0x09d38b981329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xa (10)
Element[1]
0xd2258fe5051: [DescriptorArray] in OldSpace
 - map: 0x09d38b987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x9d38b9855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x1cf144f34fe1 <AccessorInfo>
  [1]: 0x9d38b9858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x1cf144f34f71 <AccessorInfo>
  [2]: 0x9d38b985cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 2, attrs: [___]) @ 0x1cf144f35051 <AccessorInfo>
  [3]: 0x09d38b9865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 3, attrs: [W_C]) @ 0x0d2258fe50f9 <ClassPositions 262, 3183>
Element[2]
0x9d38b983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x9d38b981329: [FixedArray] in ReadOnlySpace
 - map: 0x09d38b9812e1 <Map>
 - length: 0
Element[4]
0xd2258fe5111: [DescriptorArray] in OldSpace
 - map: 0x09d38b987761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 8
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x9d38b984a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 4, attrs: [W_C]) @ 1
  [1]: 0x1cf144f03f01: [String] in OldSpace: #update (const data descriptor, p: 3, attrs: [W_C]) @ 3
  [2]: 0xd2258fe5201: [String] in OldSpace: #launchRocket (const data descriptor, p: 2, attrs: [W_C]) @ 4
  [3]: 0xd2258fe5221: [String] in OldSpace: #setOrientationDegrees (const data descriptor, p: 1, attrs: [W_C]) @ 5
  [4]: 0xd2258fe5249: [String] in OldSpace: #rotate (const data descriptor, p: 6, attrs: [W_C]) @ 6
  [5]: 0xd2258fe5261: [String] in OldSpace: #lookAt (const data descriptor, p: 7, attrs: [W_C]) @ 7
  [6]: 0xd2258fe5279: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 5, attrs: [W_C]) @ 8
  [7]: 0xd2258fe52a1: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 0, attrs: [W_C]) @ 9
Element[5]
0x9d38b983301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x9d38b981329: [FixedArray] in ReadOnlySpace
 - map: 0x09d38b9812e1 <Map>
 - length: 0
0x0d2258fe52c9 points to: [0xd2258fe5338]
=== [0xd2258fe5338] DISASSEMBLY ===
Parameter count 4
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0xd2258fe5338 @    0 : 19 03 fa          Mov a0, r0
         0xd2258fe533b @    3 : 0b 04             Ldar a1
         0xd2258fe533d @    5 : 9d 05             JumpIfNotUndefined [5] (0xd2258fe5342 @ 10)
         0xd2258fe533f @    7 : 0c                LdaZero 
         0xd2258fe5340 @    8 : 8a 04             Jump [4] (0xd2258fe5344 @ 12)
         0xd2258fe5342 @   10 : 0b 04             Ldar a1
         0xd2258fe5344 @   12 : c3                Star1 
         0xd2258fe5345 @   13 : 19 05 f8          Mov a2, r2
  432 S> 0xd2258fe5348 @   16 : 0c                LdaZero 
  455 E> 0xd2258fe5349 @   17 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
  468 S> 0xd2258fe534d @   21 : 0b fa             Ldar r0
  482 E> 0xd2258fe534f @   23 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
  502 S> 0xd2258fe5353 @   27 : 17 03             LdaImmutableCurrentContextSlot [3]
  525 E> 0xd2258fe5355 @   29 : aa 02             ThrowReferenceErrorIfHole [2]
         0xd2258fe5357 @   31 : c0                Star4 
  541 E> 0xd2258fe5358 @   32 : 2d f6 03 04       GetNamedProperty r4, [3], [4]
         0xd2258fe535c @   36 : c0                Star4 
         0xd2258fe535d @   37 : 0b f6             Ldar r4
  521 E> 0xd2258fe535f @   39 : 69 f6 f9 01 06    Construct r4, r1-r1, [6]
  519 E> 0xd2258fe5364 @   44 : 32 02 04 08       SetNamedProperty <this>, [4], [8]
  590 S> 0xd2258fe5368 @   48 : 0b 05             Ldar a2
  603 E> 0xd2258fe536a @   50 : 32 02 05 0a       SetNamedProperty <this>, [5], [10]
         0xd2258fe536e @   54 : 0e                LdaUndefined 
  618 S> 0xd2258fe536f @   55 : a9                Return 
Constant pool (size = 6)
0xd2258fe5371: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 6
           0: 0x0d2258fe53b1 <String[17]: #cooldownCountdown>
           1: 0x09d38b985c19 <String[8]: #position>
           2: 0x0d2258fe4f49 <String[15]: #rotating_body_1>
           3: 0x0d2258fe53d9 <String[12]: #RotatingBody>
           4: 0x0d2258fe53f9 <String[11]: #orientation>
           5: 0x1cf144f0cbb9 <String[7]: #options>
Handler Table (size = 0)
Source Position Table (size = 29)
0x0d2258fe5431 <ByteArray[29]>
0x0d2258fe55f1 points to: [0xd2258fe5660]
=== [0xd2258fe5660] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  668 S> 0xd2258fe5660 @    0 : 21 00 00          LdaGlobal [0], [0]
         0xd2258fe5663 @    3 : c2                Star2 
  673 E> 0xd2258fe5664 @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0xd2258fe5668 @    8 : c3                Star1 
  682 E> 0xd2258fe5669 @    9 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
  700 E> 0xd2258fe566d @   13 : 46 01 04          SubSmi [1], [4]
         0xd2258fe5670 @   16 : c1                Star3 
         0xd2258fe5671 @   17 : 0c                LdaZero 
         0xd2258fe5672 @   18 : c0                Star4 
  673 E> 0xd2258fe5673 @   19 : 5f f9 f8 f7 f6 07 CallProperty2 r1, r2, r3, r4, [7]
  666 E> 0xd2258fe5679 @   25 : 32 02 02 09       SetNamedProperty <this>, [2], [9]
         0xd2258fe567d @   29 : 0e                LdaUndefined 
  713 S> 0xd2258fe567e @   30 : a9                Return 
Constant pool (size = 3)
0xd2258fe5681: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 3
           0: 0x1cf144f1a991 <String[4]: #Math>
           1: 0x1cf144f1a181 <String[3]: #max>
           2: 0x0d2258fe53b1 <String[17]: #cooldownCountdown>
Handler Table (size = 0)
Source Position Table (size = 19)
0x0d2258fe56d9 <ByteArray[19]>
0x0d2258fe5769 points to: [0xd2258fe57d8]
=== [0xd2258fe57d8] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  753 S> 0xd2258fe57d8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0xd2258fe57dc @    4 : c4                Star0 
         0xd2258fe57dd @    5 : 0c                LdaZero 
  771 E> 0xd2258fe57de @    6 : 6e fa 02          TestGreaterThan r0, [2]
         0xd2258fe57e1 @    9 : 99 20             JumpIfFalse [32] (0xd2258fe5801 @ 41)
  790 S> 0xd2258fe57e3 @   11 : 21 01 03          LdaGlobal [1], [3]
         0xd2258fe57e6 @   14 : c4                Star0 
         0xd2258fe57e7 @   15 : 13 02             LdaConstant [2]
         0xd2258fe57e9 @   17 : c3                Star1 
  845 E> 0xd2258fe57ea @   18 : 2d 02 00 06       GetNamedProperty <this>, [0], [6]
         0xd2258fe57ee @   22 : 77                ToString 
         0xd2258fe57ef @   23 : 39 f9 05          Add r1, [5]
         0xd2258fe57f2 @   26 : c3                Star1 
         0xd2258fe57f3 @   27 : 13 03             LdaConstant [3]
         0xd2258fe57f5 @   29 : 39 f9 05          Add r1, [5]
         0xd2258fe57f8 @   32 : c3                Star1 
         0xd2258fe57f9 @   33 : 0b fa             Ldar r0
  796 E> 0xd2258fe57fb @   35 : 69 fa f9 01 08    Construct r0, r1-r1, [8]
  790 E> 0xd2258fe5800 @   40 : a7                Throw 
  926 S> 0xd2258fe5801 @   41 : 2d 02 04 0a       GetNamedProperty <this>, [4], [10]
         0xd2258fe5805 @   45 : c3                Star1 
  934 E> 0xd2258fe5806 @   46 : 2d f9 05 0c       GetNamedProperty r1, [5], [12]
  919 E> 0xd2258fe580a @   50 : 32 02 00 0e       SetNamedProperty <this>, [0], [14]
  957 S> 0xd2258fe580e @   54 : 17 02             LdaImmutableCurrentContextSlot [2]
         0xd2258fe5810 @   56 : aa 06             ThrowReferenceErrorIfHole [6]
         0xd2258fe5812 @   58 : c4                Star0 
  981 E> 0xd2258fe5813 @   59 : 2d fa 07 10       GetNamedProperty r0, [7], [16]
         0xd2258fe5817 @   63 : c4                Star0 
  997 E> 0xd2258fe5818 @   64 : 2d 02 08 12       GetNamedProperty <this>, [8], [18]
         0xd2258fe581c @   68 : c3                Star1 
 1012 E> 0xd2258fe581d @   69 : 2d 02 09 14       GetNamedProperty <this>, [9], [20]
         0xd2258fe5821 @   73 : c1                Star3 
 1024 E> 0xd2258fe5822 @   74 : 2d f7 0a 16       GetNamedProperty r3, [10], [22]
         0xd2258fe5826 @   78 : c1                Star3 
 1032 E> 0xd2258fe5827 @   79 : 2d f7 0b 18       GetNamedProperty r3, [11], [24]
         0xd2258fe582b @   83 : c2                Star2 
 1046 E> 0xd2258fe582c @   84 : 2d 02 04 1a       GetNamedProperty <this>, [4], [26]
         0xd2258fe5830 @   88 : c0                Star4 
 1054 E> 0xd2258fe5831 @   89 : 2d f6 0c 1c       GetNamedProperty r4, [12], [28]
         0xd2258fe5835 @   93 : c0                Star4 
 1032 E> 0xd2258fe5836 @   94 : 5e f8 f7 f6 1e    CallProperty1 r2, r3, r4, [30]
         0xd2258fe583b @   99 : c2                Star2 
 1073 E> 0xd2258fe583c @  100 : 2d 02 04 20       GetNamedProperty <this>, [4], [32]
         0xd2258fe5840 @  104 : c1                Star3 
 1081 E> 0xd2258fe5841 @  105 : 2d f7 0d 22       GetNamedProperty r3, [13], [34]
         0xd2258fe5845 @  109 : c1                Star3 
         0xd2258fe5846 @  110 : 0b fa             Ldar r0
  964 E> 0xd2258fe5848 @  112 : 69 fa f9 03 24    Construct r0, r1-r3, [36]
 1093 S> 0xd2258fe584d @  117 : a9                Return 
Constant pool (size = 14)
0xd2258fe5851: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 14
           0: 0x0d2258fe53b1 <String[17]: #cooldownCountdown>
           1: 0x09d38b984de1 <String[5]: #Error>
           2: 0x0d2258fe58d1 <String[31]: #Can't shoot while on cooldown. >
           3: 0x0d2258fe5901 <String[11]: # ticks left>
           4: 0x1cf144f0cbb9 <String[7]: #options>
           5: 0x0d2258fe5921 <String[13]: #cooldownTicks>
           6: 0x0d2258fe4f29 <String[12]: #projectile_1>
           7: 0x0d2258fe5941 <String[10]: #Projectile>
           8: 0x09d38b985c19 <String[8]: #position>
           9: 0x0d2258fe53f9 <String[11]: #orientation>
          10: 0x0d2258fe5961 <String[7]: #heading>
          11: 0x0d2258fe5979 <String[8]: #multiply>
          12: 0x0d2258fe5991 <String[11]: #bulletSpeed>
          13: 0x0d2258fe59b1 <String[10]: #bulletSize>
Handler Table (size = 0)
Source Position Table (size = 54)
0x0d2258fe59d1 <ByteArray[54]>
0x0d2258fe5a99 points to: [0xd2258fe5b08]
=== [0xd2258fe5b08] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1198 S> 0xd2258fe5b08 @    0 : 0b 03             Ldar a0
 1206 E> 0xd2258fe5b0a @    2 : 00 49 68 01 00 00 ModSmi.Wide [360], [0]
         0xd2258fe5b10 @    8 : c4                Star0 
 1221 S> 0xd2258fe5b11 @    9 : 0c                LdaZero 
 1234 E> 0xd2258fe5b12 @   10 : 6d fa 01          TestLessThan r0, [1]
         0xd2258fe5b15 @   13 : 99 0b             JumpIfFalse [11] (0xd2258fe5b20 @ 24)
 1253 S> 0xd2258fe5b17 @   15 : 0b fa             Ldar r0
         0xd2258fe5b19 @   17 : 00 45 68 01 02 00 AddSmi.Wide [360], [2]
         0xd2258fe5b1f @   23 : c4                Star0 
 1345 S> 0xd2258fe5b20 @   24 : 0d 5a             LdaSmi [90]
 1358 E> 0xd2258fe5b22 @   26 : 6e fa 03          TestGreaterThan r0, [3]
         0xd2258fe5b25 @   29 : 99 18             JumpIfFalse [24] (0xd2258fe5b3d @ 53)
         0xd2258fe5b27 @   31 : 00 0d b4 00       LdaSmi.Wide [180]
 1375 E> 0xd2258fe5b2b @   35 : 6f fa 04          TestLessThanOrEqual r0, [4]
         0xd2258fe5b2e @   38 : 99 0f             JumpIfFalse [15] (0xd2258fe5b3d @ 53)
 1402 S> 0xd2258fe5b30 @   40 : 2d 02 00 05       GetNamedProperty <this>, [0], [5]
         0xd2258fe5b34 @   44 : c3                Star1 
         0xd2258fe5b35 @   45 : 0d 5a             LdaSmi [90]
 1433 E> 0xd2258fe5b37 @   47 : 32 f9 01 07       SetNamedProperty r1, [1], [7]
         0xd2258fe5b3b @   51 : 8a 2e             Jump [46] (0xd2258fe5b69 @ 97)
 1462 S> 0xd2258fe5b3d @   53 : 00 0d b4 00       LdaSmi.Wide [180]
 1475 E> 0xd2258fe5b41 @   57 : 6e fa 09          TestGreaterThan r0, [9]
         0xd2258fe5b44 @   60 : 99 1a             JumpIfFalse [26] (0xd2258fe5b5e @ 86)
         0xd2258fe5b46 @   62 : 00 0d 0e 01       LdaSmi.Wide [270]
 1493 E> 0xd2258fe5b4a @   66 : 6d fa 0a          TestLessThan r0, [10]
         0xd2258fe5b4d @   69 : 99 11             JumpIfFalse [17] (0xd2258fe5b5e @ 86)
 1519 S> 0xd2258fe5b4f @   71 : 2d 02 00 0b       GetNamedProperty <this>, [0], [11]
         0xd2258fe5b53 @   75 : c3                Star1 
         0xd2258fe5b54 @   76 : 00 0d 0e 01       LdaSmi.Wide [270]
 1550 E> 0xd2258fe5b58 @   80 : 32 f9 01 0d       SetNamedProperty r1, [1], [13]
         0xd2258fe5b5c @   84 : 8a 0d             Jump [13] (0xd2258fe5b69 @ 97)
 1599 S> 0xd2258fe5b5e @   86 : 2d 02 00 0f       GetNamedProperty <this>, [0], [15]
         0xd2258fe5b62 @   90 : c3                Star1 
         0xd2258fe5b63 @   91 : 0b fa             Ldar r0
 1630 E> 0xd2258fe5b65 @   93 : 32 f9 01 11       SetNamedProperty r1, [1], [17]
         0xd2258fe5b69 @   97 : 0e                LdaUndefined 
 1656 S> 0xd2258fe5b6a @   98 : a9                Return 
Constant pool (size = 2)
0xd2258fe5b71: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 2
           0: 0x0d2258fe53f9 <String[11]: #orientation>
           1: 0x0d2258fe5b91 <String[18]: #orientationDegrees>
Handler Table (size = 0)
Source Position Table (size = 42)
0x0d2258fe5bb9 <ByteArray[42]>
0x0d2258fe5c69 points to: [0xd2258fe5cd8]
=== [0xd2258fe5cd8] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 1872 S> 0xd2258fe5cd8 @    0 : 21 00 00          LdaGlobal [0], [0]
         0xd2258fe5cdb @    3 : c2                Star2 
 1877 E> 0xd2258fe5cdc @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0xd2258fe5ce0 @    8 : c3                Star1 
 1881 E> 0xd2258fe5ce1 @    9 : 21 00 00          LdaGlobal [0], [0]
         0xd2258fe5ce4 @   12 : c0                Star4 
 1886 E> 0xd2258fe5ce5 @   13 : 2d f6 02 04       GetNamedProperty r4, [2], [4]
         0xd2258fe5ce9 @   17 : c1                Star3 
 1904 E> 0xd2258fe5cea @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0xd2258fe5cee @   22 : be                Star6 
 1912 E> 0xd2258fe5cef @   23 : 2d f4 04 08       GetNamedProperty r6, [4], [8]
         0xd2258fe5cf3 @   27 : be                Star6 
 1886 E> 0xd2258fe5cf4 @   28 : 5f f7 f6 03 f4 0a CallProperty2 r3, r4, a0, r6, [10]
         0xd2258fe5cfa @   34 : c1                Star3 
 1939 E> 0xd2258fe5cfb @   35 : 2d 02 03 0c       GetNamedProperty <this>, [3], [12]
         0xd2258fe5cff @   39 : c0                Star4 
 1947 E> 0xd2258fe5d00 @   40 : 2d f6 04 0e       GetNamedProperty r4, [4], [14]
 1933 E> 0xd2258fe5d04 @   44 : 53 10             Negate [16]
         0xd2258fe5d06 @   46 : c0                Star4 
 1877 E> 0xd2258fe5d07 @   47 : 5f f9 f8 f7 f6 11 CallProperty2 r1, r2, r3, r4, [17]
         0xd2258fe5d0d @   53 : c4                Star0 
 1981 S> 0xd2258fe5d0e @   54 : 2d 02 05 13       GetNamedProperty <this>, [5], [19]
         0xd2258fe5d12 @   58 : c3                Star1 
 2008 E> 0xd2258fe5d13 @   59 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0xd2258fe5d17 @   63 : c1                Star3 
 2020 E> 0xd2258fe5d18 @   64 : 2d f7 07 18       GetNamedProperty r3, [7], [24]
         0xd2258fe5d1c @   68 : c1                Star3 
         0xd2258fe5d1d @   69 : 0b fa             Ldar r0
 2039 E> 0xd2258fe5d1f @   71 : 39 f7 15          Add r3, [21]
         0xd2258fe5d22 @   74 : c1                Star3 
 1981 E> 0xd2258fe5d23 @   75 : 5e f9 02 f7 1a    CallProperty1 r1, <this>, r3, [26]
         0xd2258fe5d28 @   80 : 0e                LdaUndefined 
 2062 S> 0xd2258fe5d29 @   81 : a9                Return 
Constant pool (size = 8)
0xd2258fe5d31: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 8
           0: 0x1cf144f1a991 <String[4]: #Math>
           1: 0x1cf144f1a181 <String[3]: #max>
           2: 0x1cf144f1a149 <String[3]: #min>
           3: 0x1cf144f0cbb9 <String[7]: #options>
           4: 0x0d2258fe5d99 <String[18]: #maxRotationDegrees>
           5: 0x0d2258fe5221 <String[21]: #setOrientationDegrees>
           6: 0x0d2258fe53f9 <String[11]: #orientation>
           7: 0x0d2258fe5b91 <String[18]: #orientationDegrees>
Handler Table (size = 0)
Source Position Table (size = 43)
0x0d2258fe5dc1 <ByteArray[43]>
0x0d2258fe5e79 points to: [0xd2258fe5ee8]
=== [0xd2258fe5ee8] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 2167 S> 0xd2258fe5ee8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0xd2258fe5eec @    4 : c1                Star3 
 2181 E> 0xd2258fe5eed @    5 : 2d 02 01 02       GetNamedProperty <this>, [1], [2]
         0xd2258fe5ef1 @    9 : bf                Star5 
 2167 E> 0xd2258fe5ef2 @   10 : 5e f7 03 f5 04    CallProperty1 r3, a0, r5, [4]
         0xd2258fe5ef7 @   15 : c1                Star3 
 2190 E> 0xd2258fe5ef8 @   16 : 2d f7 02 06       GetNamedProperty r3, [2], [6]
         0xd2258fe5efc @   20 : c4                Star0 
 2234 S> 0xd2258fe5efd @   21 : 21 03 0a          LdaGlobal [3], [10]
         0xd2258fe5f00 @   24 : c0                Star4 
 2239 E> 0xd2258fe5f01 @   25 : 2d f6 04 0c       GetNamedProperty r4, [4], [12]
         0xd2258fe5f05 @   29 : c1                Star3 
 2256 E> 0xd2258fe5f06 @   30 : 2d fa 05 0e       GetNamedProperty r0, [5], [14]
         0xd2258fe5f0a @   34 : bf                Star5 
 2270 E> 0xd2258fe5f0b @   35 : 2d fa 06 10       GetNamedProperty r0, [6], [16]
         0xd2258fe5f0f @   39 : be                Star6 
 2239 E> 0xd2258fe5f10 @   40 : 5f f7 f6 f5 f4 12 CallProperty2 r3, r4, r5, r6, [18]
 2273 E> 0xd2258fe5f16 @   46 : 00 47 b4 00 09 00 MulSmi.Wide [180], [9]
         0xd2258fe5f1c @   52 : c1                Star3 
 2281 E> 0xd2258fe5f1d @   53 : 21 03 0a          LdaGlobal [3], [10]
         0xd2258fe5f20 @   56 : c0                Star4 
 2286 E> 0xd2258fe5f21 @   57 : 2d f6 07 14       GetNamedProperty r4, [7], [20]
 2279 E> 0xd2258fe5f25 @   61 : 3c f7 08          Div r3, [8]
         0xd2258fe5f28 @   64 : c3                Star1 
 2332 S> 0xd2258fe5f29 @   65 : 2d 02 08 17       GetNamedProperty <this>, [8], [23]
         0xd2258fe5f2d @   69 : c0                Star4 
 2344 E> 0xd2258fe5f2e @   70 : 2d f6 09 19       GetNamedProperty r4, [9], [25]
 2325 E> 0xd2258fe5f32 @   74 : 3a f9 16          Sub r1, [22]
         0xd2258fe5f35 @   77 : c2                Star2 
 2372 S> 0xd2258fe5f36 @   78 : 00 0d b4 00       LdaSmi.Wide [180]
 2382 E> 0xd2258fe5f3a @   82 : 6e f8 1b          TestGreaterThan r2, [27]
         0xd2258fe5f3d @   85 : 99 0b             JumpIfFalse [11] (0xd2258fe5f48 @ 96)
 2403 S> 0xd2258fe5f3f @   87 : 0b f8             Ldar r2
         0xd2258fe5f41 @   89 : 00 46 68 01 1c 00 SubSmi.Wide [360], [28]
         0xd2258fe5f47 @   95 : c2                Star2 
 2461 S> 0xd2258fe5f48 @   96 : 00 0d 4c ff       LdaSmi.Wide [-180]
 2471 E> 0xd2258fe5f4c @  100 : 6d f8 1d          TestLessThan r2, [29]
         0xd2258fe5f4f @  103 : 99 0b             JumpIfFalse [11] (0xd2258fe5f5a @ 114)
 2493 S> 0xd2258fe5f51 @  105 : 0b f8             Ldar r2
         0xd2258fe5f53 @  107 : 00 45 68 01 1e 00 AddSmi.Wide [360], [30]
         0xd2258fe5f59 @  113 : c2                Star2 
 2556 S> 0xd2258fe5f5a @  114 : 2d 02 0a 1f       GetNamedProperty <this>, [10], [31]
         0xd2258fe5f5e @  118 : c1                Star3 
 2556 E> 0xd2258fe5f5f @  119 : 5e f7 02 f8 21    CallProperty1 r3, <this>, r2, [33]
         0xd2258fe5f64 @  124 : 0e                LdaUndefined 
 2575 S> 0xd2258fe5f65 @  125 : a9                Return 
Constant pool (size = 11)
0xd2258fe5f69: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 11
           0: 0x0d2258fe5fd1 <String[8]: #subtract>
           1: 0x09d38b985c19 <String[8]: #position>
           2: 0x0d2258fe5fe9 <String[10]: #normalized>
           3: 0x1cf144f1a991 <String[4]: #Math>
           4: 0x1cf144f1aa51 <String[5]: #atan2>
           5: 0x1cf144f18ae1 <String[1]: #y>
           6: 0x1cf144f18ac9 <String[1]: #x>
           7: 0x1cf144f1aca9 <String[2]: #PI>
           8: 0x0d2258fe53f9 <String[11]: #orientation>
           9: 0x0d2258fe5b91 <String[18]: #orientationDegrees>
          10: 0x0d2258fe5249 <String[6]: #rotate>
Handler Table (size = 0)
Source Position Table (size = 60)
0x0d2258fe6069 <ByteArray[60]>
0x0d2258fe6131 points to: [0xd2258fe61a0]
=== [0xd2258fe61a0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2612 S> 0xd2258fe61a0 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0xd2258fe61a4 @    4 : c4                Star0 
 2648 E> 0xd2258fe61a5 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0xd2258fe61a9 @    9 : c2                Star2 
 2657 E> 0xd2258fe61aa @   10 : 2d f8 02 03       GetNamedProperty r2, [2], [3]
         0xd2258fe61ae @   14 : c3                Star1 
 2657 E> 0xd2258fe61af @   15 : 5d f9 f8 05       CallProperty0 r1, r2, [5]
         0xd2258fe61b3 @   19 : 33 fa 01 07       DefineNamedOwnProperty r0, [1], [7]
 2700 E> 0xd2258fe61b7 @   23 : 2d 02 03 09       GetNamedProperty <this>, [3], [9]
         0xd2258fe61bb @   27 : c3                Star1 
 2712 E> 0xd2258fe61bc @   28 : 2d f9 04 0b       GetNamedProperty r1, [4], [11]
         0xd2258fe61c0 @   32 : c3                Star1 
         0xd2258fe61c1 @   33 : 00 0d b4 00       LdaSmi.Wide [180]
 2731 E> 0xd2258fe61c5 @   37 : 6e f9 0d          TestGreaterThan r1, [13]
         0xd2258fe61c8 @   40 : 99 13             JumpIfFalse [19] (0xd2258fe61db @ 59)
 2811 E> 0xd2258fe61ca @   42 : 2d 02 03 0f       GetNamedProperty <this>, [3], [15]
         0xd2258fe61ce @   46 : c3                Star1 
 2823 E> 0xd2258fe61cf @   47 : 2d f9 04 11       GetNamedProperty r1, [4], [17]
 2842 E> 0xd2258fe61d3 @   51 : 00 46 68 01 0e 00 SubSmi.Wide [360], [14]
         0xd2258fe61d9 @   57 : 8a 0b             Jump [11] (0xd2258fe61e4 @ 68)
 2871 E> 0xd2258fe61db @   59 : 2d 02 03 13       GetNamedProperty <this>, [3], [19]
         0xd2258fe61df @   63 : c3                Star1 
 2883 E> 0xd2258fe61e0 @   64 : 2d f9 04 15       GetNamedProperty r1, [4], [21]
         0xd2258fe61e4 @   68 : 33 fa 03 17       DefineNamedOwnProperty r0, [3], [23]
 2930 E> 0xd2258fe61e8 @   72 : 2d 02 05 19       GetNamedProperty <this>, [5], [25]
         0xd2258fe61ec @   76 : 33 fa 06 1b       DefineNamedOwnProperty r0, [6], [27]
         0xd2258fe61f0 @   80 : 0b fa             Ldar r0
 2958 S> 0xd2258fe61f2 @   82 : a9                Return 
Constant pool (size = 7)
0xd2258fe61f9: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 7
           0: 0x0d2258fe6241 <ObjectBoilerplateDescription[7]>
           1: 0x09d38b985c19 <String[8]: #position>
           2: 0x1cf144f101a9 <String[9]: #serialize>
           3: 0x0d2258fe53f9 <String[11]: #orientation>
           4: 0x0d2258fe5b91 <String[18]: #orientationDegrees>
           5: 0x0d2258fe53b1 <String[17]: #cooldownCountdown>
           6: 0x0d2258fe6289 <String[8]: #cooldown>
Handler Table (size = 0)
Source Position Table (size = 35)
0x0d2258fe62c1 <ByteArray[35]>
Boilerplate at 0x0d2258fe6241: 
0xd2258fe6241: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x09d38b982059 <Map>
 - length: 7
           0: 8
           1: 0x09d38b985c19 <String[8]: #position>
           2: 0x09d38b981501 <Odd Oddball: uninitialized>
           3: 0x0d2258fe53f9 <String[11]: #orientation>
           4: 0x09d38b981501 <Odd Oddball: uninitialized>
           5: 0x0d2258fe6289 <String[8]: #cooldown>
           6: 0x09d38b981501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x0d2258fe6371 points to: [0xd2258fe63e0]
=== [0xd2258fe63e0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 3000 S> 0xd2258fe63e0 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0xd2258fe63e4 @    4 : c4                Star0 
 3036 E> 0xd2258fe63e5 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0xd2258fe63e9 @    9 : c2                Star2 
 3045 E> 0xd2258fe63ea @   10 : 2d f8 02 03       GetNamedProperty r2, [2], [3]
         0xd2258fe63ee @   14 : c3                Star1 
 3045 E> 0xd2258fe63ef @   15 : 5d f9 f8 05       CallProperty0 r1, r2, [5]
         0xd2258fe63f3 @   19 : 33 fa 01 07       DefineNamedOwnProperty r0, [1], [7]
 3088 E> 0xd2258fe63f7 @   23 : 2d 02 03 09       GetNamedProperty <this>, [3], [9]
         0xd2258fe63fb @   27 : c3                Star1 
 3100 E> 0xd2258fe63fc @   28 : 2d f9 04 0b       GetNamedProperty r1, [4], [11]
         0xd2258fe6400 @   32 : 33 fa 03 0d       DefineNamedOwnProperty r0, [3], [13]
 3147 E> 0xd2258fe6404 @   36 : 2d 02 05 0f       GetNamedProperty <this>, [5], [15]
         0xd2258fe6408 @   40 : 33 fa 06 11       DefineNamedOwnProperty r0, [6], [17]
         0xd2258fe640c @   44 : 0b fa             Ldar r0
 3175 S> 0xd2258fe640e @   46 : a9                Return 
Constant pool (size = 7)
0xd2258fe6411: [FixedArray] in OldSpace
 - map: 0x09d38b9812e1 <Map>
 - length: 7
           0: 0x0d2258fe6459 <ObjectBoilerplateDescription[7]>
           1: 0x09d38b985c19 <String[8]: #position>
           2: 0x1cf144f101a9 <String[9]: #serialize>
           3: 0x0d2258fe53f9 <String[11]: #orientation>
           4: 0x0d2258fe5b91 <String[18]: #orientationDegrees>
           5: 0x0d2258fe53b1 <String[17]: #cooldownCountdown>
           6: 0x0d2258fe6289 <String[8]: #cooldown>
Handler Table (size = 0)
Source Position Table (size = 22)
0x0d2258fe64a1 <ByteArray[22]>
Boilerplate at 0x0d2258fe6459: 
0xd2258fe6459: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x09d38b982059 <Map>
 - length: 7
           0: 8
           1: 0x09d38b985c19 <String[8]: #position>
           2: 0x09d38b981501 <Odd Oddball: uninitialized>
           3: 0x0d2258fe53f9 <String[11]: #orientation>
           4: 0x09d38b981501 <Odd Oddball: uninitialized>
           5: 0x0d2258fe6289 <String[8]: #cooldown>
           6: 0x09d38b981501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
