<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x22ddaf7e4ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x22ddaf7e4ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x22ddaf7e4cec @    4 : c4                Star0 
 2377 S> 0x22ddaf7e4ced @    5 : a9                Return 
Constant pool (size = 1)
0x22ddaf7e4cf1: [FixedArray] in OldSpace
 - map: 0x2a3d172c12e1 <Map>
 - length: 1
           0: 0x22ddaf7e4d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x22ddaf7e6211 <ByteArray[7]>
0x22ddaf7e4d09 points to: [0x22ddaf7e4d78]
=== [0x22ddaf7e4d78] DISASSEMBLY ===
Parameter count 6
Register count 14
Frame size 112
OSR urgency: 0
Bytecode age: 0
   10 E> 0x22ddaf7e4d78 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x22ddaf7e4d7b @    3 : 1a f8             PushContext r2
         0x22ddaf7e4d7d @    5 : 0b 03             Ldar a0
         0x22ddaf7e4d7f @    7 : 25 02             StaCurrentContextSlot [2]
         0x22ddaf7e4d81 @    9 : 80 01 00 02       CreateClosure [1], [0], #2
         0x22ddaf7e4d85 @   13 : 25 03             StaCurrentContextSlot [3]
         0x22ddaf7e4d87 @   15 : 80 02 01 02       CreateClosure [2], [1], #2
         0x22ddaf7e4d8b @   19 : c3                Star1 
   76 S> 0x22ddaf7e4d8c @   20 : 21 03 00          LdaGlobal [3], [0]
         0x22ddaf7e4d8f @   23 : c0                Star4 
   83 E> 0x22ddaf7e4d90 @   24 : 2d f6 04 02       GetNamedProperty r4, [4], [2]
         0x22ddaf7e4d94 @   28 : c1                Star3 
         0x22ddaf7e4d95 @   29 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e4d97 @   31 : bf                Star5 
         0x22ddaf7e4d98 @   32 : 13 05             LdaConstant [5]
         0x22ddaf7e4d9a @   34 : be                Star6 
   98 E> 0x22ddaf7e4d9b @   35 : 7c 06 04 29       CreateObjectLiteral [6], [4], #41
         0x22ddaf7e4d9f @   39 : bd                Star7 
   83 E> 0x22ddaf7e4da0 @   40 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x22ddaf7e4da5 @   45 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e4da7 @   47 : c1                Star3 
         0x22ddaf7e4da8 @   48 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e4daa @   50 : c0                Star4 
         0x22ddaf7e4dab @   51 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e4dad @   53 : bf                Star5 
         0x22ddaf7e4dae @   54 : 0e                LdaUndefined 
         0x22ddaf7e4daf @   55 : be                Star6 
  217 E> 0x22ddaf7e4db0 @   56 : 32 f5 07 07       SetNamedProperty r5, [7], [7]
         0x22ddaf7e4db4 @   60 : 0b f4             Ldar r6
  196 E> 0x22ddaf7e4db6 @   62 : 32 f6 08 09       SetNamedProperty r4, [8], [9]
         0x22ddaf7e4dba @   66 : 0b f4             Ldar r6
  168 E> 0x22ddaf7e4dbc @   68 : 32 f7 09 0b       SetNamedProperty r3, [9], [11]
  243 S> 0x22ddaf7e4dc0 @   72 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x22ddaf7e4dc4 @   76 : c1                Star3 
         0x22ddaf7e4dc5 @   77 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e4dc7 @   79 : c0                Star4 
  434 E> 0x22ddaf7e4dc8 @   80 : 2d f6 07 0d       GetNamedProperty r4, [7], [13]
         0x22ddaf7e4dcc @   84 : 96 0d             JumpIfToBooleanTrue [13] (0x22ddaf7e4dd9 @ 97)
         0x22ddaf7e4dce @   86 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e4dd0 @   88 : c0                Star4 
  449 E> 0x22ddaf7e4dd1 @   89 : 7d                CreateEmptyObjectLiteral 
         0x22ddaf7e4dd2 @   90 : bf                Star5 
  468 E> 0x22ddaf7e4dd3 @   91 : 32 f6 07 07       SetNamedProperty r4, [7], [7]
         0x22ddaf7e4dd7 @   95 : 0b f5             Ldar r5
         0x22ddaf7e4dd9 @   97 : c4                Star0 
  412 E> 0x22ddaf7e4dda @   98 : 62 f7 fa 0f       CallUndefinedReceiver1 r3, r0, [15]
  476 S> 0x22ddaf7e4dde @  102 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e4de0 @  104 : c1                Star3 
  508 E> 0x22ddaf7e4de1 @  105 : 21 0b 11          LdaGlobal [11], [17]
         0x22ddaf7e4de4 @  108 : c0                Star4 
         0x22ddaf7e4de5 @  109 : 79 0c 13 04       CreateArrayLiteral [12], [19], #4
         0x22ddaf7e4de9 @  113 : be                Star6 
         0x22ddaf7e4dea @  114 : 0c                LdaZero 
         0x22ddaf7e4deb @  115 : bf                Star5 
         0x22ddaf7e4dec @  116 : 79 0d 14 04       CreateArrayLiteral [13], [20], #4
         0x22ddaf7e4df0 @  120 : bc                Star8 
         0x22ddaf7e4df1 @  121 : 0c                LdaZero 
         0x22ddaf7e4df2 @  122 : bd                Star7 
  530 E> 0x22ddaf7e4df3 @  123 : 2d fa 0e 15       GetNamedProperty r0, [14], [21]
         0x22ddaf7e4df7 @  127 : 36 f2 f3 17       StaInArrayLiteral r8, r7, [23]
         0x22ddaf7e4dfb @  131 : 0d 01             LdaSmi [1]
         0x22ddaf7e4dfd @  133 : bd                Star7 
         0x22ddaf7e4dfe @  134 : 7c 0f 19 0c       CreateObjectLiteral [15], [25], #12
         0x22ddaf7e4e02 @  138 : bb                Star9 
  632 E> 0x22ddaf7e4e03 @  139 : 79 10 1a 04       CreateArrayLiteral [16], [26], #4
         0x22ddaf7e4e07 @  143 : b9                Star11 
         0x22ddaf7e4e08 @  144 : 0c                LdaZero 
         0x22ddaf7e4e09 @  145 : ba                Star10 
         0x22ddaf7e4e0a @  146 : 7c 11 1b 29       CreateObjectLiteral [17], [27], #41
         0x22ddaf7e4e0e @  150 : b8                Star12 
  695 E> 0x22ddaf7e4e0f @  151 : 2d fa 12 1c       GetNamedProperty r0, [18], [28]
         0x22ddaf7e4e13 @  155 : 33 ee 13 1e       DefineNamedOwnProperty r12, [19], [30]
  737 E> 0x22ddaf7e4e17 @  159 : 21 14 21          LdaGlobal [20], [33]
         0x22ddaf7e4e1a @  162 : b7                Star13 
  742 E> 0x22ddaf7e4e1b @  163 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
  736 E> 0x22ddaf7e4e1f @  167 : 53 25             Negate [37]
  745 E> 0x22ddaf7e4e21 @  169 : 48 0a 20          DivSmi [10], [32]
         0x22ddaf7e4e24 @  172 : 33 ee 16 26       DefineNamedOwnProperty r12, [22], [38]
         0x22ddaf7e4e28 @  176 : 0b ee             Ldar r12
         0x22ddaf7e4e2a @  178 : 36 ef f0 28       StaInArrayLiteral r11, r10, [40]
         0x22ddaf7e4e2e @  182 : 0d 01             LdaSmi [1]
         0x22ddaf7e4e30 @  184 : ba                Star10 
         0x22ddaf7e4e31 @  185 : 7c 17 2a 29       CreateObjectLiteral [23], [42], #41
         0x22ddaf7e4e35 @  189 : b8                Star12 
  831 E> 0x22ddaf7e4e36 @  190 : 2d fa 12 1c       GetNamedProperty r0, [18], [28]
         0x22ddaf7e4e3a @  194 : 33 ee 13 2b       DefineNamedOwnProperty r12, [19], [43]
  872 E> 0x22ddaf7e4e3e @  198 : 21 14 21          LdaGlobal [20], [33]
         0x22ddaf7e4e41 @  201 : b7                Star13 
  877 E> 0x22ddaf7e4e42 @  202 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
  880 E> 0x22ddaf7e4e46 @  206 : 48 0a 2d          DivSmi [10], [45]
         0x22ddaf7e4e49 @  209 : 33 ee 16 2e       DefineNamedOwnProperty r12, [22], [46]
         0x22ddaf7e4e4d @  213 : 0b ee             Ldar r12
         0x22ddaf7e4e4f @  215 : 36 ef f0 28       StaInArrayLiteral r11, r10, [40]
         0x22ddaf7e4e53 @  219 : 0b ef             Ldar r11
         0x22ddaf7e4e55 @  221 : 33 f1 18 30       DefineNamedOwnProperty r9, [24], [48]
         0x22ddaf7e4e59 @  225 : 0b f1             Ldar r9
         0x22ddaf7e4e5b @  227 : 36 f2 f3 17       StaInArrayLiteral r8, r7, [23]
         0x22ddaf7e4e5f @  231 : 0b f2             Ldar r8
         0x22ddaf7e4e61 @  233 : 36 f4 f5 32       StaInArrayLiteral r6, r5, [50]
         0x22ddaf7e4e65 @  237 : 0d 01             LdaSmi [1]
         0x22ddaf7e4e67 @  239 : bf                Star5 
         0x22ddaf7e4e68 @  240 : 79 19 34 04       CreateArrayLiteral [25], [52], #4
         0x22ddaf7e4e6c @  244 : bc                Star8 
         0x22ddaf7e4e6d @  245 : 0c                LdaZero 
         0x22ddaf7e4e6e @  246 : bd                Star7 
  946 E> 0x22ddaf7e4e6f @  247 : 2d fa 12 1c       GetNamedProperty r0, [18], [28]
         0x22ddaf7e4e73 @  251 : 36 f2 f3 35       StaInArrayLiteral r8, r7, [53]
         0x22ddaf7e4e77 @  255 : 0d 01             LdaSmi [1]
         0x22ddaf7e4e79 @  257 : bd                Star7 
         0x22ddaf7e4e7a @  258 : 7c 1a 37 0c       CreateObjectLiteral [26], [55], #12
         0x22ddaf7e4e7e @  262 : bb                Star9 
 1049 E> 0x22ddaf7e4e7f @  263 : 79 1b 38 04       CreateArrayLiteral [27], [56], #4
         0x22ddaf7e4e83 @  267 : b9                Star11 
         0x22ddaf7e4e84 @  268 : 0c                LdaZero 
         0x22ddaf7e4e85 @  269 : ba                Star10 
         0x22ddaf7e4e86 @  270 : 7c 1c 39 29       CreateObjectLiteral [28], [57], #41
         0x22ddaf7e4e8a @  274 : b8                Star12 
 1112 E> 0x22ddaf7e4e8b @  275 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x22ddaf7e4e8f @  279 : 33 ee 13 3c       DefineNamedOwnProperty r12, [19], [60]
 1153 E> 0x22ddaf7e4e93 @  283 : 21 14 21          LdaGlobal [20], [33]
         0x22ddaf7e4e96 @  286 : b7                Star13 
 1158 E> 0x22ddaf7e4e97 @  287 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
 1152 E> 0x22ddaf7e4e9b @  291 : 53 3f             Negate [63]
 1161 E> 0x22ddaf7e4e9d @  293 : 48 06 3e          DivSmi [6], [62]
         0x22ddaf7e4ea0 @  296 : 33 ee 16 40       DefineNamedOwnProperty r12, [22], [64]
         0x22ddaf7e4ea4 @  300 : 0b ee             Ldar r12
         0x22ddaf7e4ea6 @  302 : 36 ef f0 42       StaInArrayLiteral r11, r10, [66]
         0x22ddaf7e4eaa @  306 : 0d 01             LdaSmi [1]
         0x22ddaf7e4eac @  308 : ba                Star10 
         0x22ddaf7e4ead @  309 : 7c 1e 44 29       CreateObjectLiteral [30], [68], #41
         0x22ddaf7e4eb1 @  313 : b8                Star12 
 1246 E> 0x22ddaf7e4eb2 @  314 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x22ddaf7e4eb6 @  318 : 33 ee 13 45       DefineNamedOwnProperty r12, [19], [69]
         0x22ddaf7e4eba @  322 : 0b ee             Ldar r12
         0x22ddaf7e4ebc @  324 : 36 ef f0 42       StaInArrayLiteral r11, r10, [66]
         0x22ddaf7e4ec0 @  328 : 0d 02             LdaSmi [2]
         0x22ddaf7e4ec2 @  330 : ba                Star10 
         0x22ddaf7e4ec3 @  331 : 7c 1f 47 29       CreateObjectLiteral [31], [71], #41
         0x22ddaf7e4ec7 @  335 : b8                Star12 
 1369 E> 0x22ddaf7e4ec8 @  336 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x22ddaf7e4ecc @  340 : 33 ee 13 48       DefineNamedOwnProperty r12, [19], [72]
 1409 E> 0x22ddaf7e4ed0 @  344 : 21 14 21          LdaGlobal [20], [33]
         0x22ddaf7e4ed3 @  347 : b7                Star13 
 1414 E> 0x22ddaf7e4ed4 @  348 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
 1417 E> 0x22ddaf7e4ed8 @  352 : 48 06 4a          DivSmi [6], [74]
         0x22ddaf7e4edb @  355 : 33 ee 16 4b       DefineNamedOwnProperty r12, [22], [75]
         0x22ddaf7e4edf @  359 : 0b ee             Ldar r12
         0x22ddaf7e4ee1 @  361 : 36 ef f0 42       StaInArrayLiteral r11, r10, [66]
         0x22ddaf7e4ee5 @  365 : 0b ef             Ldar r11
         0x22ddaf7e4ee7 @  367 : 33 f1 18 4d       DefineNamedOwnProperty r9, [24], [77]
         0x22ddaf7e4eeb @  371 : 0b f1             Ldar r9
         0x22ddaf7e4eed @  373 : 36 f2 f3 35       StaInArrayLiteral r8, r7, [53]
         0x22ddaf7e4ef1 @  377 : 0b f2             Ldar r8
         0x22ddaf7e4ef3 @  379 : 36 f4 f5 32       StaInArrayLiteral r6, r5, [50]
         0x22ddaf7e4ef7 @  383 : 0d 02             LdaSmi [2]
         0x22ddaf7e4ef9 @  385 : bf                Star5 
         0x22ddaf7e4efa @  386 : 79 20 4f 04       CreateArrayLiteral [32], [79], #4
         0x22ddaf7e4efe @  390 : bc                Star8 
         0x22ddaf7e4eff @  391 : 0c                LdaZero 
         0x22ddaf7e4f00 @  392 : bd                Star7 
 1483 E> 0x22ddaf7e4f01 @  393 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x22ddaf7e4f05 @  397 : 36 f2 f3 50       StaInArrayLiteral r8, r7, [80]
         0x22ddaf7e4f09 @  401 : 0b f2             Ldar r8
         0x22ddaf7e4f0b @  403 : 36 f4 f5 32       StaInArrayLiteral r6, r5, [50]
         0x22ddaf7e4f0f @  407 : 0b f6             Ldar r4
  504 E> 0x22ddaf7e4f11 @  409 : 69 f6 f4 01 52    Construct r4, r6-r6, [82]
  502 E> 0x22ddaf7e4f16 @  414 : 32 f7 08 09       SetNamedProperty r3, [8], [9]
 2280 S> 0x22ddaf7e4f1a @  418 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e4f1c @  420 : c1                Star3 
         0x22ddaf7e4f1d @  421 : 0b f9             Ldar r1
 2309 E> 0x22ddaf7e4f1f @  423 : 32 f7 09 0b       SetNamedProperty r3, [9], [11]
         0x22ddaf7e4f23 @  427 : 0e                LdaUndefined 
 2374 S> 0x22ddaf7e4f24 @  428 : a9                Return 
Constant pool (size = 33)
0x22ddaf7e4f29: [FixedArray] in OldSpace
 - map: 0x2a3d172c12e1 <Map>
 - length: 33
           0: 0x22ddaf7e5041 <ScopeInfo FUNCTION_SCOPE>
           1: 0x22ddaf7e50e9 <SharedFunctionInfo serializeMeteorType>
           2: 0x22ddaf7e5911 <SharedFunctionInfo serializeMeteorInfos>
           3: 0x2a3d172c5ab9 <String[6]: #Object>
           4: 0x2a3d172c4c11 <String[14]: #defineProperty>
           5: 0x22ddaf7e5d41 <String[10]: #__esModule>
           6: 0x22ddaf7e5d61 <ObjectBoilerplateDescription[3]>
           7: 0x22ddaf7e5d89 <String[10]: #MeteorType>
           8: 0x22ddaf7e5241 <String[17]: #METEOR_TYPE_INFOS>
           9: 0x22ddaf7e5c19 <String[20]: #serializeMeteorInfos>
          10: 0x22ddaf7e56e1 <SharedFunctionInfo>
          11: 0x2a3d172c5691 <String[3]: #Map>
          12: 0x22ddaf7e5da9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x22ddaf7e5dc1 <FixedArray[3]>>
          13: 0x22ddaf7e5de9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x22ddaf7e5e01 <FixedArray[2]>>
          14: 0x22ddaf7e57d9 <String[5]: #Large>
          15: 0x22ddaf7e5e21 <ObjectBoilerplateDescription[9]>
          16: 0x22ddaf7e5e79 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x22ddaf7e5e91 <FixedArray[2]>>
          17: 0x22ddaf7e5eb1 <ObjectBoilerplateDescription[5]>
          18: 0x22ddaf7e5809 <String[6]: #Medium>
          19: 0x22ddaf7e54a1 <String[10]: #meteorType>
          20: 0x0699d01da991 <String[4]: #Math>
          21: 0x0699d01daca9 <String[2]: #PI>
          22: 0x22ddaf7e54e1 <String[11]: #rotationRad>
          23: 0x22ddaf7e5ee9 <ObjectBoilerplateDescription[5]>
          24: 0x22ddaf7e5339 <String[12]: #explodesInto>
          25: 0x22ddaf7e5f21 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x22ddaf7e5f39 <FixedArray[2]>>
          26: 0x22ddaf7e5f59 <ObjectBoilerplateDescription[9]>
          27: 0x22ddaf7e5fb1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x22ddaf7e5fc9 <FixedArray[3]>>
          28: 0x22ddaf7e5ff1 <ObjectBoilerplateDescription[5]>
          29: 0x22ddaf7e5839 <String[5]: #Small>
          30: 0x22ddaf7e6029 <ObjectBoilerplateDescription[5]>
          31: 0x22ddaf7e6061 <ObjectBoilerplateDescription[5]>
          32: 0x22ddaf7e6099 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x22ddaf7e60b1 <FixedArray[2]>>
Handler Table (size = 0)
Source Position Table (size = 116)
0x22ddaf7e6141 <ByteArray[116]>
0x22ddaf7e50e9 points to: [0x22ddaf7e5158]
=== [0x22ddaf7e5158] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1666 S> 0x22ddaf7e5158 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e515a @    2 : c2                Star2 
 1674 E> 0x22ddaf7e515b @    3 : 2d f8 00 00       GetNamedProperty r2, [0], [0]
         0x22ddaf7e515f @    7 : c2                Star2 
 1692 E> 0x22ddaf7e5160 @    8 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x22ddaf7e5164 @   12 : c3                Star1 
 1692 E> 0x22ddaf7e5165 @   13 : 5e f9 f8 03 04    CallProperty1 r1, r2, a0, [4]
         0x22ddaf7e516a @   18 : c4                Star0 
 1713 S> 0x22ddaf7e516b @   19 : 1d                TestUndetectable 
         0x22ddaf7e516c @   20 : 99 1e             JumpIfFalse [30] (0x22ddaf7e518a @ 50)
 1740 S> 0x22ddaf7e516e @   22 : 21 02 06          LdaGlobal [2], [6]
         0x22ddaf7e5171 @   25 : c3                Star1 
         0x22ddaf7e5172 @   26 : 13 03             LdaConstant [3]
         0x22ddaf7e5174 @   28 : c2                Star2 
         0x22ddaf7e5175 @   29 : 0b 03             Ldar a0
 1780 E> 0x22ddaf7e5177 @   31 : 77                ToString 
         0x22ddaf7e5178 @   32 : 39 f8 08          Add r2, [8]
         0x22ddaf7e517b @   35 : c2                Star2 
         0x22ddaf7e517c @   36 : 13 04             LdaConstant [4]
         0x22ddaf7e517e @   38 : 39 f8 08          Add r2, [8]
         0x22ddaf7e5181 @   41 : c2                Star2 
         0x22ddaf7e5182 @   42 : 0b f9             Ldar r1
 1746 E> 0x22ddaf7e5184 @   44 : 69 f9 f8 01 09    Construct r1, r2-r2, [9]
 1740 E> 0x22ddaf7e5189 @   49 : a7                Throw 
 1800 S> 0x22ddaf7e518a @   50 : 7c 05 0b 29       CreateObjectLiteral [5], [11], #41
         0x22ddaf7e518e @   54 : c3                Star1 
 1830 E> 0x22ddaf7e518f @   55 : 2d fa 06 0c       GetNamedProperty r0, [6], [12]
         0x22ddaf7e5193 @   59 : 33 f9 06 0e       DefineNamedOwnProperty r1, [6], [14]
 1857 E> 0x22ddaf7e5197 @   63 : 2d fa 07 10       GetNamedProperty r0, [7], [16]
         0x22ddaf7e519b @   67 : 33 f9 07 12       DefineNamedOwnProperty r1, [7], [18]
 1895 E> 0x22ddaf7e519f @   71 : 2d fa 08 14       GetNamedProperty r0, [8], [20]
         0x22ddaf7e51a3 @   75 : 33 f9 09 16       DefineNamedOwnProperty r1, [9], [22]
 1930 E> 0x22ddaf7e51a7 @   79 : 2d fa 0a 18       GetNamedProperty r0, [10], [24]
         0x22ddaf7e51ab @   83 : c1                Star3 
 1943 E> 0x22ddaf7e51ac @   84 : 2d f7 0b 1a       GetNamedProperty r3, [11], [26]
         0x22ddaf7e51b0 @   88 : c2                Star2 
         0x22ddaf7e51b1 @   89 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x22ddaf7e51b5 @   93 : c0                Star4 
 1943 E> 0x22ddaf7e51b6 @   94 : 5e f8 f7 f6 1c    CallProperty1 r2, r3, r4, [28]
         0x22ddaf7e51bb @   99 : 33 f9 0a 1e       DefineNamedOwnProperty r1, [10], [30]
         0x22ddaf7e51bf @  103 : 0b f9             Ldar r1
 2073 S> 0x22ddaf7e51c1 @  105 : a9                Return 
Constant pool (size = 13)
0x22ddaf7e51c9: [FixedArray] in OldSpace
 - map: 0x2a3d172c12e1 <Map>
 - length: 13
           0: 0x22ddaf7e5241 <String[17]: #METEOR_TYPE_INFOS>
           1: 0x2a3d172c50e9 <String[3]: #get>
           2: 0x2a3d172c4de1 <String[5]: #Error>
           3: 0x22ddaf7e5269 <String[21]: #Unknown meteor type '>
           4: 0x0699d01f4c49 <String[1]: #'>
           5: 0x22ddaf7e52a9 <ObjectBoilerplateDescription[9]>
           6: 0x22ddaf7e5301 <String[5]: #score>
           7: 0x2a3d172ca111 <String[4]: #size>
           8: 0x22ddaf7e5359 <String[5]: #speed>
           9: 0x22ddaf7e5319 <String[16]: #approximateSpeed>
          10: 0x22ddaf7e5339 <String[12]: #explodesInto>
          11: 0x0699d01c9ea9 <String[3]: #map>
          12: 0x22ddaf7e5389 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 44)
0x22ddaf7e5c89 <ByteArray[44]>
Boilerplate at 0x22ddaf7e52a9: 
0x22ddaf7e52a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 9
           0: 8
           1: 0x22ddaf7e5301 <String[5]: #score>
           2: 0x2a3d172c1501 <Odd Oddball: uninitialized>
           3: 0x2a3d172ca111 <String[4]: #size>
           4: 0x2a3d172c1501 <Odd Oddball: uninitialized>
           5: 0x22ddaf7e5319 <String[16]: #approximateSpeed>
           6: 0x2a3d172c1501 <Odd Oddball: uninitialized>
           7: 0x22ddaf7e5339 <String[12]: #explodesInto>
           8: 0x2a3d172c1501 <Odd Oddball: uninitialized>
0x22ddaf7e5389 points to: [0x22ddaf7e53f8]
=== [0x22ddaf7e53f8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1953 S> 0x22ddaf7e53f8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x22ddaf7e53fc @    4 : c4                Star0 
 1981 E> 0x22ddaf7e53fd @    5 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
         0x22ddaf7e5401 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 2025 E> 0x22ddaf7e5405 @   13 : 2d 03 02 07       GetNamedProperty a0, [2], [7]
 2037 E> 0x22ddaf7e5409 @   17 : 00 47 b4 00 06 00 MulSmi.Wide [180], [6]
         0x22ddaf7e540f @   23 : c3                Star1 
 2045 E> 0x22ddaf7e5410 @   24 : 21 03 09          LdaGlobal [3], [9]
         0x22ddaf7e5413 @   27 : c2                Star2 
 2050 E> 0x22ddaf7e5414 @   28 : 2d f8 04 0b       GetNamedProperty r2, [4], [11]
 2043 E> 0x22ddaf7e5418 @   32 : 3c f9 05          Div r1, [5]
         0x22ddaf7e541b @   35 : 33 fa 05 0d       DefineNamedOwnProperty r0, [5], [13]
         0x22ddaf7e541f @   39 : 0b fa             Ldar r0
 2064 S> 0x22ddaf7e5421 @   41 : a9                Return 
Constant pool (size = 6)
0x22ddaf7e5429: [FixedArray] in OldSpace
 - map: 0x2a3d172c12e1 <Map>
 - length: 6
           0: 0x22ddaf7e5469 <ObjectBoilerplateDescription[5]>
           1: 0x22ddaf7e54a1 <String[10]: #meteorType>
           2: 0x22ddaf7e54e1 <String[11]: #rotationRad>
           3: 0x0699d01da991 <String[4]: #Math>
           4: 0x0699d01daca9 <String[2]: #PI>
           5: 0x22ddaf7e54c1 <String[16]: #approximateAngle>
Handler Table (size = 0)
Source Position Table (size = 20)
0x22ddaf7e5531 <ByteArray[20]>
Boilerplate at 0x22ddaf7e5469: 
0x22ddaf7e5469: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 5
           0: 8
           1: 0x22ddaf7e54a1 <String[10]: #meteorType>
           2: 0x2a3d172c1501 <Odd Oddball: uninitialized>
           3: 0x22ddaf7e54c1 <String[16]: #approximateAngle>
           4: 0x2a3d172c1501 <Odd Oddball: uninitialized>
0x22ddaf7e5911 points to: [0x22ddaf7e5980]
=== [0x22ddaf7e5980] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 2114 S> 0x22ddaf7e5980 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x22ddaf7e5983 @    3 : c3                Star1 
 2128 E> 0x22ddaf7e5984 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x22ddaf7e5988 @    8 : c4                Star0 
 2140 E> 0x22ddaf7e5989 @    9 : 21 02 04          LdaGlobal [2], [4]
         0x22ddaf7e598c @   12 : c0                Star4 
 2146 E> 0x22ddaf7e598d @   13 : 2d f6 03 06       GetNamedProperty r4, [3], [6]
         0x22ddaf7e5991 @   17 : c1                Star3 
         0x22ddaf7e5992 @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x22ddaf7e5994 @   20 : be                Star6 
 2159 E> 0x22ddaf7e5995 @   21 : 2d f4 04 08       GetNamedProperty r6, [4], [8]
         0x22ddaf7e5999 @   25 : be                Star6 
 2177 E> 0x22ddaf7e599a @   26 : 2d f4 05 0a       GetNamedProperty r6, [5], [10]
         0x22ddaf7e599e @   30 : bf                Star5 
 2177 E> 0x22ddaf7e599f @   31 : 5d f5 f4 0c       CallProperty0 r5, r6, [12]
         0x22ddaf7e59a3 @   35 : bf                Star5 
 2146 E> 0x22ddaf7e59a4 @   36 : 5e f7 f6 f5 0e    CallProperty1 r3, r4, r5, [14]
         0x22ddaf7e59a9 @   41 : c1                Star3 
 2184 E> 0x22ddaf7e59aa @   42 : 2d f7 06 10       GetNamedProperty r3, [6], [16]
         0x22ddaf7e59ae @   46 : c2                Star2 
         0x22ddaf7e59af @   47 : 80 07 00 02       CreateClosure [7], [0], #2
         0x22ddaf7e59b3 @   51 : c0                Star4 
 2185 E> 0x22ddaf7e59b4 @   52 : 5e f8 f7 f6 12    CallProperty1 r2, r3, r4, [18]
         0x22ddaf7e59b9 @   57 : c2                Star2 
 2128 E> 0x22ddaf7e59ba @   58 : 5e fa f9 f8 14    CallProperty1 r0, r1, r2, [20]
 2277 S> 0x22ddaf7e59bf @   63 : a9                Return 
Constant pool (size = 8)
0x22ddaf7e59c1: [FixedArray] in OldSpace
 - map: 0x2a3d172c12e1 <Map>
 - length: 8
           0: 0x2a3d172c5ab9 <String[6]: #Object>
           1: 0x0699d01da849 <String[11]: #fromEntries>
           2: 0x2a3d172c4681 <String[5]: #Array>
           3: 0x2a3d172c5011 <String[4]: #from>
           4: 0x22ddaf7e5241 <String[17]: #METEOR_TYPE_INFOS>
           5: 0x2a3d172c55a1 <String[4]: #keys>
           6: 0x0699d01c9ea9 <String[3]: #map>
           7: 0x22ddaf7e5a31 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 30)
0x22ddaf7e5b99 <ByteArray[30]>
0x22ddaf7e5a31 points to: [0x22ddaf7e5aa0]
=== [0x22ddaf7e5aa0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2215 S> 0x22ddaf7e5aa0 @    0 : 79 00 00 25       CreateArrayLiteral [0], [0], #37
         0x22ddaf7e5aa4 @    4 : c3                Star1 
         0x22ddaf7e5aa5 @    5 : 0c                LdaZero 
         0x22ddaf7e5aa6 @    6 : c4                Star0 
         0x22ddaf7e5aa7 @    7 : 0b 03             Ldar a0
 2223 E> 0x22ddaf7e5aa9 @    9 : 36 f9 fa 01       StaInArrayLiteral r1, r0, [1]
         0x22ddaf7e5aad @   13 : 0d 01             LdaSmi [1]
         0x22ddaf7e5aaf @   15 : c4                Star0 
         0x22ddaf7e5ab0 @   16 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x22ddaf7e5ab2 @   18 : c2                Star2 
 2235 E> 0x22ddaf7e5ab3 @   19 : 62 f8 03 03       CallUndefinedReceiver1 r2, a0, [3]
         0x22ddaf7e5ab7 @   23 : 36 f9 fa 01       StaInArrayLiteral r1, r0, [1]
         0x22ddaf7e5abb @   27 : 0b f9             Ldar r1
 2268 S> 0x22ddaf7e5abd @   29 : a9                Return 
Constant pool (size = 1)
0x22ddaf7e5ac1: [FixedArray] in OldSpace
 - map: 0x2a3d172c12e1 <Map>
 - length: 1
           0: 0x22ddaf7e5ad9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x22ddaf7e5af1 <FixedArray[2]>>
Handler Table (size = 0)
Source Position Table (size = 12)
0x22ddaf7e5b11 <ByteArray[12]>
Boilerplate at 0x22ddaf7e5d61: 
0x22ddaf7e5d61: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 3
           0: 8
           1: 0x2a3d172c6419 <String[5]: #value>
           2: 0x2a3d172c1729 <true>
0x22ddaf7e56e1 points to: [0x22ddaf7e5750]
=== [0x22ddaf7e5750] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  272 S> 0x22ddaf7e5750 @    0 : 13 00             LdaConstant [0]
  292 E> 0x22ddaf7e5752 @    2 : 32 03 01 00       SetNamedProperty a0, [1], [0]
  307 S> 0x22ddaf7e5756 @    6 : 13 02             LdaConstant [2]
  328 E> 0x22ddaf7e5758 @    8 : 32 03 03 02       SetNamedProperty a0, [3], [2]
  344 S> 0x22ddaf7e575c @   12 : 13 04             LdaConstant [4]
  364 E> 0x22ddaf7e575e @   14 : 32 03 05 04       SetNamedProperty a0, [5], [4]
  379 S> 0x22ddaf7e5762 @   18 : 13 06             LdaConstant [6]
  399 E> 0x22ddaf7e5764 @   20 : 32 03 07 06       SetNamedProperty a0, [7], [6]
         0x22ddaf7e5768 @   24 : 0e                LdaUndefined 
  410 S> 0x22ddaf7e5769 @   25 : a9                Return 
Constant pool (size = 8)
0x22ddaf7e5771: [FixedArray] in OldSpace
 - map: 0x2a3d172c12e1 <Map>
 - length: 8
           0: 0x22ddaf7e57c1 <String[5]: #LARGE>
           1: 0x22ddaf7e57d9 <String[5]: #Large>
           2: 0x22ddaf7e57f1 <String[6]: #MEDIUM>
           3: 0x22ddaf7e5809 <String[6]: #Medium>
           4: 0x22ddaf7e5821 <String[5]: #SMALL>
           5: 0x22ddaf7e5839 <String[5]: #Small>
           6: 0x22ddaf7e5851 <String[5]: #DEBUG>
           7: 0x0699d01eaf39 <String[5]: #Debug>
Handler Table (size = 0)
Source Position Table (size = 21)
0x22ddaf7e5881 <ByteArray[21]>
Boilerplate at 0x22ddaf7e5e21: 
0x22ddaf7e5e21: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 9
           0: 8
           1: 0x2a3d172ca111 <String[4]: #size>
           2: 40
           3: 0x22ddaf7e5359 <String[5]: #speed>
           4: 3
           5: 0x22ddaf7e5301 <String[5]: #score>
           6: 15
           7: 0x22ddaf7e5339 <String[12]: #explodesInto>
           8: 0x2a3d172c1501 <Odd Oddball: uninitialized>
Boilerplate at 0x22ddaf7e5eb1: 
0x22ddaf7e5eb1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 5
           0: 8
           1: 0x22ddaf7e54a1 <String[10]: #meteorType>
           2: 0x2a3d172c1501 <Odd Oddball: uninitialized>
           3: 0x22ddaf7e54e1 <String[11]: #rotationRad>
           4: 0x2a3d172c1501 <Odd Oddball: uninitialized>
Boilerplate at 0x22ddaf7e5ee9: 
0x22ddaf7e5ee9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 5
           0: 8
           1: 0x22ddaf7e54a1 <String[10]: #meteorType>
           2: 0x2a3d172c1501 <Odd Oddball: uninitialized>
           3: 0x22ddaf7e54e1 <String[11]: #rotationRad>
           4: 0x2a3d172c1501 <Odd Oddball: uninitialized>
Boilerplate at 0x22ddaf7e5f59: 
0x22ddaf7e5f59: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 9
           0: 8
           1: 0x2a3d172ca111 <String[4]: #size>
           2: 20
           3: 0x22ddaf7e5359 <String[5]: #speed>
           4: 9
           5: 0x22ddaf7e5301 <String[5]: #score>
           6: 40
           7: 0x22ddaf7e5339 <String[12]: #explodesInto>
           8: 0x2a3d172c1501 <Odd Oddball: uninitialized>
Boilerplate at 0x22ddaf7e5ff1: 
0x22ddaf7e5ff1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 5
           0: 8
           1: 0x22ddaf7e54a1 <String[10]: #meteorType>
           2: 0x2a3d172c1501 <Odd Oddball: uninitialized>
           3: 0x22ddaf7e54e1 <String[11]: #rotationRad>
           4: 0x2a3d172c1501 <Odd Oddball: uninitialized>
Boilerplate at 0x22ddaf7e6029: 
0x22ddaf7e6029: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 5
           0: 8
           1: 0x22ddaf7e54a1 <String[10]: #meteorType>
           2: 0x2a3d172c1501 <Odd Oddball: uninitialized>
           3: 0x22ddaf7e54e1 <String[11]: #rotationRad>
           4: 0
Boilerplate at 0x22ddaf7e6061: 
0x22ddaf7e6061: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2a3d172c2059 <Map>
 - length: 5
           0: 8
           1: 0x22ddaf7e54a1 <String[10]: #meteorType>
           2: 0x2a3d172c1501 <Odd Oddball: uninitialized>
           3: 0x22ddaf7e54e1 <String[11]: #rotationRad>
           4: 0x2a3d172c1501 <Odd Oddball: uninitialized>
<< OUTPUTTING DISASSEMBLY END >>
