<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2fb1d1e64ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2fb1d1e64ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2fb1d1e64cec @    4 : c4                Star0 
 2377 S> 0x2fb1d1e64ced @    5 : a9                Return 
Constant pool (size = 1)
0x2fb1d1e64cf1: [FixedArray] in OldSpace
 - map: 0x1393486012e1 <Map>
 - length: 1
           0: 0x2fb1d1e64d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2fb1d1e66211 <ByteArray[7]>
0x2fb1d1e64d09 points to: [0x2fb1d1e64d78]
=== [0x2fb1d1e64d78] DISASSEMBLY ===
Parameter count 6
Register count 14
Frame size 112
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2fb1d1e64d78 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x2fb1d1e64d7b @    3 : 1a f8             PushContext r2
         0x2fb1d1e64d7d @    5 : 0b 03             Ldar a0
         0x2fb1d1e64d7f @    7 : 25 02             StaCurrentContextSlot [2]
         0x2fb1d1e64d81 @    9 : 80 01 00 02       CreateClosure [1], [0], #2
         0x2fb1d1e64d85 @   13 : 25 03             StaCurrentContextSlot [3]
         0x2fb1d1e64d87 @   15 : 80 02 01 02       CreateClosure [2], [1], #2
         0x2fb1d1e64d8b @   19 : c3                Star1 
   76 S> 0x2fb1d1e64d8c @   20 : 21 03 00          LdaGlobal [3], [0]
         0x2fb1d1e64d8f @   23 : c0                Star4 
   83 E> 0x2fb1d1e64d90 @   24 : 2d f6 04 02       GetNamedProperty r4, [4], [2]
         0x2fb1d1e64d94 @   28 : c1                Star3 
         0x2fb1d1e64d95 @   29 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e64d97 @   31 : bf                Star5 
         0x2fb1d1e64d98 @   32 : 13 05             LdaConstant [5]
         0x2fb1d1e64d9a @   34 : be                Star6 
   98 E> 0x2fb1d1e64d9b @   35 : 7c 06 04 29       CreateObjectLiteral [6], [4], #41
         0x2fb1d1e64d9f @   39 : bd                Star7 
   83 E> 0x2fb1d1e64da0 @   40 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x2fb1d1e64da5 @   45 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e64da7 @   47 : c1                Star3 
         0x2fb1d1e64da8 @   48 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e64daa @   50 : c0                Star4 
         0x2fb1d1e64dab @   51 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e64dad @   53 : bf                Star5 
         0x2fb1d1e64dae @   54 : 0e                LdaUndefined 
         0x2fb1d1e64daf @   55 : be                Star6 
  217 E> 0x2fb1d1e64db0 @   56 : 32 f5 07 07       SetNamedProperty r5, [7], [7]
         0x2fb1d1e64db4 @   60 : 0b f4             Ldar r6
  196 E> 0x2fb1d1e64db6 @   62 : 32 f6 08 09       SetNamedProperty r4, [8], [9]
         0x2fb1d1e64dba @   66 : 0b f4             Ldar r6
  168 E> 0x2fb1d1e64dbc @   68 : 32 f7 09 0b       SetNamedProperty r3, [9], [11]
  243 S> 0x2fb1d1e64dc0 @   72 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x2fb1d1e64dc4 @   76 : c1                Star3 
         0x2fb1d1e64dc5 @   77 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e64dc7 @   79 : c0                Star4 
  434 E> 0x2fb1d1e64dc8 @   80 : 2d f6 07 0d       GetNamedProperty r4, [7], [13]
         0x2fb1d1e64dcc @   84 : 96 0d             JumpIfToBooleanTrue [13] (0x2fb1d1e64dd9 @ 97)
         0x2fb1d1e64dce @   86 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e64dd0 @   88 : c0                Star4 
  449 E> 0x2fb1d1e64dd1 @   89 : 7d                CreateEmptyObjectLiteral 
         0x2fb1d1e64dd2 @   90 : bf                Star5 
  468 E> 0x2fb1d1e64dd3 @   91 : 32 f6 07 07       SetNamedProperty r4, [7], [7]
         0x2fb1d1e64dd7 @   95 : 0b f5             Ldar r5
         0x2fb1d1e64dd9 @   97 : c4                Star0 
  412 E> 0x2fb1d1e64dda @   98 : 62 f7 fa 0f       CallUndefinedReceiver1 r3, r0, [15]
  476 S> 0x2fb1d1e64dde @  102 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e64de0 @  104 : c1                Star3 
  508 E> 0x2fb1d1e64de1 @  105 : 21 0b 11          LdaGlobal [11], [17]
         0x2fb1d1e64de4 @  108 : c0                Star4 
         0x2fb1d1e64de5 @  109 : 79 0c 13 04       CreateArrayLiteral [12], [19], #4
         0x2fb1d1e64de9 @  113 : be                Star6 
         0x2fb1d1e64dea @  114 : 0c                LdaZero 
         0x2fb1d1e64deb @  115 : bf                Star5 
         0x2fb1d1e64dec @  116 : 79 0d 14 04       CreateArrayLiteral [13], [20], #4
         0x2fb1d1e64df0 @  120 : bc                Star8 
         0x2fb1d1e64df1 @  121 : 0c                LdaZero 
         0x2fb1d1e64df2 @  122 : bd                Star7 
  530 E> 0x2fb1d1e64df3 @  123 : 2d fa 0e 15       GetNamedProperty r0, [14], [21]
         0x2fb1d1e64df7 @  127 : 36 f2 f3 17       StaInArrayLiteral r8, r7, [23]
         0x2fb1d1e64dfb @  131 : 0d 01             LdaSmi [1]
         0x2fb1d1e64dfd @  133 : bd                Star7 
         0x2fb1d1e64dfe @  134 : 7c 0f 19 0c       CreateObjectLiteral [15], [25], #12
         0x2fb1d1e64e02 @  138 : bb                Star9 
  632 E> 0x2fb1d1e64e03 @  139 : 79 10 1a 04       CreateArrayLiteral [16], [26], #4
         0x2fb1d1e64e07 @  143 : b9                Star11 
         0x2fb1d1e64e08 @  144 : 0c                LdaZero 
         0x2fb1d1e64e09 @  145 : ba                Star10 
         0x2fb1d1e64e0a @  146 : 7c 11 1b 29       CreateObjectLiteral [17], [27], #41
         0x2fb1d1e64e0e @  150 : b8                Star12 
  695 E> 0x2fb1d1e64e0f @  151 : 2d fa 12 1c       GetNamedProperty r0, [18], [28]
         0x2fb1d1e64e13 @  155 : 33 ee 13 1e       DefineNamedOwnProperty r12, [19], [30]
  737 E> 0x2fb1d1e64e17 @  159 : 21 14 21          LdaGlobal [20], [33]
         0x2fb1d1e64e1a @  162 : b7                Star13 
  742 E> 0x2fb1d1e64e1b @  163 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
  736 E> 0x2fb1d1e64e1f @  167 : 53 25             Negate [37]
  745 E> 0x2fb1d1e64e21 @  169 : 48 0a 20          DivSmi [10], [32]
         0x2fb1d1e64e24 @  172 : 33 ee 16 26       DefineNamedOwnProperty r12, [22], [38]
         0x2fb1d1e64e28 @  176 : 0b ee             Ldar r12
         0x2fb1d1e64e2a @  178 : 36 ef f0 28       StaInArrayLiteral r11, r10, [40]
         0x2fb1d1e64e2e @  182 : 0d 01             LdaSmi [1]
         0x2fb1d1e64e30 @  184 : ba                Star10 
         0x2fb1d1e64e31 @  185 : 7c 17 2a 29       CreateObjectLiteral [23], [42], #41
         0x2fb1d1e64e35 @  189 : b8                Star12 
  831 E> 0x2fb1d1e64e36 @  190 : 2d fa 12 1c       GetNamedProperty r0, [18], [28]
         0x2fb1d1e64e3a @  194 : 33 ee 13 2b       DefineNamedOwnProperty r12, [19], [43]
  872 E> 0x2fb1d1e64e3e @  198 : 21 14 21          LdaGlobal [20], [33]
         0x2fb1d1e64e41 @  201 : b7                Star13 
  877 E> 0x2fb1d1e64e42 @  202 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
  880 E> 0x2fb1d1e64e46 @  206 : 48 0a 2d          DivSmi [10], [45]
         0x2fb1d1e64e49 @  209 : 33 ee 16 2e       DefineNamedOwnProperty r12, [22], [46]
         0x2fb1d1e64e4d @  213 : 0b ee             Ldar r12
         0x2fb1d1e64e4f @  215 : 36 ef f0 28       StaInArrayLiteral r11, r10, [40]
         0x2fb1d1e64e53 @  219 : 0b ef             Ldar r11
         0x2fb1d1e64e55 @  221 : 33 f1 18 30       DefineNamedOwnProperty r9, [24], [48]
         0x2fb1d1e64e59 @  225 : 0b f1             Ldar r9
         0x2fb1d1e64e5b @  227 : 36 f2 f3 17       StaInArrayLiteral r8, r7, [23]
         0x2fb1d1e64e5f @  231 : 0b f2             Ldar r8
         0x2fb1d1e64e61 @  233 : 36 f4 f5 32       StaInArrayLiteral r6, r5, [50]
         0x2fb1d1e64e65 @  237 : 0d 01             LdaSmi [1]
         0x2fb1d1e64e67 @  239 : bf                Star5 
         0x2fb1d1e64e68 @  240 : 79 19 34 04       CreateArrayLiteral [25], [52], #4
         0x2fb1d1e64e6c @  244 : bc                Star8 
         0x2fb1d1e64e6d @  245 : 0c                LdaZero 
         0x2fb1d1e64e6e @  246 : bd                Star7 
  946 E> 0x2fb1d1e64e6f @  247 : 2d fa 12 1c       GetNamedProperty r0, [18], [28]
         0x2fb1d1e64e73 @  251 : 36 f2 f3 35       StaInArrayLiteral r8, r7, [53]
         0x2fb1d1e64e77 @  255 : 0d 01             LdaSmi [1]
         0x2fb1d1e64e79 @  257 : bd                Star7 
         0x2fb1d1e64e7a @  258 : 7c 1a 37 0c       CreateObjectLiteral [26], [55], #12
         0x2fb1d1e64e7e @  262 : bb                Star9 
 1049 E> 0x2fb1d1e64e7f @  263 : 79 1b 38 04       CreateArrayLiteral [27], [56], #4
         0x2fb1d1e64e83 @  267 : b9                Star11 
         0x2fb1d1e64e84 @  268 : 0c                LdaZero 
         0x2fb1d1e64e85 @  269 : ba                Star10 
         0x2fb1d1e64e86 @  270 : 7c 1c 39 29       CreateObjectLiteral [28], [57], #41
         0x2fb1d1e64e8a @  274 : b8                Star12 
 1112 E> 0x2fb1d1e64e8b @  275 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x2fb1d1e64e8f @  279 : 33 ee 13 3c       DefineNamedOwnProperty r12, [19], [60]
 1153 E> 0x2fb1d1e64e93 @  283 : 21 14 21          LdaGlobal [20], [33]
         0x2fb1d1e64e96 @  286 : b7                Star13 
 1158 E> 0x2fb1d1e64e97 @  287 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
 1152 E> 0x2fb1d1e64e9b @  291 : 53 3f             Negate [63]
 1161 E> 0x2fb1d1e64e9d @  293 : 48 06 3e          DivSmi [6], [62]
         0x2fb1d1e64ea0 @  296 : 33 ee 16 40       DefineNamedOwnProperty r12, [22], [64]
         0x2fb1d1e64ea4 @  300 : 0b ee             Ldar r12
         0x2fb1d1e64ea6 @  302 : 36 ef f0 42       StaInArrayLiteral r11, r10, [66]
         0x2fb1d1e64eaa @  306 : 0d 01             LdaSmi [1]
         0x2fb1d1e64eac @  308 : ba                Star10 
         0x2fb1d1e64ead @  309 : 7c 1e 44 29       CreateObjectLiteral [30], [68], #41
         0x2fb1d1e64eb1 @  313 : b8                Star12 
 1246 E> 0x2fb1d1e64eb2 @  314 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x2fb1d1e64eb6 @  318 : 33 ee 13 45       DefineNamedOwnProperty r12, [19], [69]
         0x2fb1d1e64eba @  322 : 0b ee             Ldar r12
         0x2fb1d1e64ebc @  324 : 36 ef f0 42       StaInArrayLiteral r11, r10, [66]
         0x2fb1d1e64ec0 @  328 : 0d 02             LdaSmi [2]
         0x2fb1d1e64ec2 @  330 : ba                Star10 
         0x2fb1d1e64ec3 @  331 : 7c 1f 47 29       CreateObjectLiteral [31], [71], #41
         0x2fb1d1e64ec7 @  335 : b8                Star12 
 1369 E> 0x2fb1d1e64ec8 @  336 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x2fb1d1e64ecc @  340 : 33 ee 13 48       DefineNamedOwnProperty r12, [19], [72]
 1409 E> 0x2fb1d1e64ed0 @  344 : 21 14 21          LdaGlobal [20], [33]
         0x2fb1d1e64ed3 @  347 : b7                Star13 
 1414 E> 0x2fb1d1e64ed4 @  348 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
 1417 E> 0x2fb1d1e64ed8 @  352 : 48 06 4a          DivSmi [6], [74]
         0x2fb1d1e64edb @  355 : 33 ee 16 4b       DefineNamedOwnProperty r12, [22], [75]
         0x2fb1d1e64edf @  359 : 0b ee             Ldar r12
         0x2fb1d1e64ee1 @  361 : 36 ef f0 42       StaInArrayLiteral r11, r10, [66]
         0x2fb1d1e64ee5 @  365 : 0b ef             Ldar r11
         0x2fb1d1e64ee7 @  367 : 33 f1 18 4d       DefineNamedOwnProperty r9, [24], [77]
         0x2fb1d1e64eeb @  371 : 0b f1             Ldar r9
         0x2fb1d1e64eed @  373 : 36 f2 f3 35       StaInArrayLiteral r8, r7, [53]
         0x2fb1d1e64ef1 @  377 : 0b f2             Ldar r8
         0x2fb1d1e64ef3 @  379 : 36 f4 f5 32       StaInArrayLiteral r6, r5, [50]
         0x2fb1d1e64ef7 @  383 : 0d 02             LdaSmi [2]
         0x2fb1d1e64ef9 @  385 : bf                Star5 
         0x2fb1d1e64efa @  386 : 79 20 4f 04       CreateArrayLiteral [32], [79], #4
         0x2fb1d1e64efe @  390 : bc                Star8 
         0x2fb1d1e64eff @  391 : 0c                LdaZero 
         0x2fb1d1e64f00 @  392 : bd                Star7 
 1483 E> 0x2fb1d1e64f01 @  393 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x2fb1d1e64f05 @  397 : 36 f2 f3 50       StaInArrayLiteral r8, r7, [80]
         0x2fb1d1e64f09 @  401 : 0b f2             Ldar r8
         0x2fb1d1e64f0b @  403 : 36 f4 f5 32       StaInArrayLiteral r6, r5, [50]
         0x2fb1d1e64f0f @  407 : 0b f6             Ldar r4
  504 E> 0x2fb1d1e64f11 @  409 : 69 f6 f4 01 52    Construct r4, r6-r6, [82]
  502 E> 0x2fb1d1e64f16 @  414 : 32 f7 08 09       SetNamedProperty r3, [8], [9]
 2280 S> 0x2fb1d1e64f1a @  418 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e64f1c @  420 : c1                Star3 
         0x2fb1d1e64f1d @  421 : 0b f9             Ldar r1
 2309 E> 0x2fb1d1e64f1f @  423 : 32 f7 09 0b       SetNamedProperty r3, [9], [11]
         0x2fb1d1e64f23 @  427 : 0e                LdaUndefined 
 2374 S> 0x2fb1d1e64f24 @  428 : a9                Return 
Constant pool (size = 33)
0x2fb1d1e64f29: [FixedArray] in OldSpace
 - map: 0x1393486012e1 <Map>
 - length: 33
           0: 0x2fb1d1e65041 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2fb1d1e650e9 <SharedFunctionInfo serializeMeteorType>
           2: 0x2fb1d1e65911 <SharedFunctionInfo serializeMeteorInfos>
           3: 0x139348605ab9 <String[6]: #Object>
           4: 0x139348604c11 <String[14]: #defineProperty>
           5: 0x2fb1d1e65d41 <String[10]: #__esModule>
           6: 0x2fb1d1e65d61 <ObjectBoilerplateDescription[3]>
           7: 0x2fb1d1e65d89 <String[10]: #MeteorType>
           8: 0x2fb1d1e65241 <String[17]: #METEOR_TYPE_INFOS>
           9: 0x2fb1d1e65c19 <String[20]: #serializeMeteorInfos>
          10: 0x2fb1d1e656e1 <SharedFunctionInfo>
          11: 0x139348605691 <String[3]: #Map>
          12: 0x2fb1d1e65da9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2fb1d1e65dc1 <FixedArray[3]>>
          13: 0x2fb1d1e65de9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2fb1d1e65e01 <FixedArray[2]>>
          14: 0x2fb1d1e657d9 <String[5]: #Large>
          15: 0x2fb1d1e65e21 <ObjectBoilerplateDescription[9]>
          16: 0x2fb1d1e65e79 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2fb1d1e65e91 <FixedArray[2]>>
          17: 0x2fb1d1e65eb1 <ObjectBoilerplateDescription[5]>
          18: 0x2fb1d1e65809 <String[6]: #Medium>
          19: 0x2fb1d1e654a1 <String[10]: #meteorType>
          20: 0x2531d169a991 <String[4]: #Math>
          21: 0x2531d169aca9 <String[2]: #PI>
          22: 0x2fb1d1e654e1 <String[11]: #rotationRad>
          23: 0x2fb1d1e65ee9 <ObjectBoilerplateDescription[5]>
          24: 0x2fb1d1e65339 <String[12]: #explodesInto>
          25: 0x2fb1d1e65f21 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2fb1d1e65f39 <FixedArray[2]>>
          26: 0x2fb1d1e65f59 <ObjectBoilerplateDescription[9]>
          27: 0x2fb1d1e65fb1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2fb1d1e65fc9 <FixedArray[3]>>
          28: 0x2fb1d1e65ff1 <ObjectBoilerplateDescription[5]>
          29: 0x2fb1d1e65839 <String[5]: #Small>
          30: 0x2fb1d1e66029 <ObjectBoilerplateDescription[5]>
          31: 0x2fb1d1e66061 <ObjectBoilerplateDescription[5]>
          32: 0x2fb1d1e66099 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x2fb1d1e660b1 <FixedArray[2]>>
Handler Table (size = 0)
Source Position Table (size = 116)
0x2fb1d1e66141 <ByteArray[116]>
0x2fb1d1e650e9 points to: [0x2fb1d1e65158]
=== [0x2fb1d1e65158] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1666 S> 0x2fb1d1e65158 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e6515a @    2 : c2                Star2 
 1674 E> 0x2fb1d1e6515b @    3 : 2d f8 00 00       GetNamedProperty r2, [0], [0]
         0x2fb1d1e6515f @    7 : c2                Star2 
 1692 E> 0x2fb1d1e65160 @    8 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x2fb1d1e65164 @   12 : c3                Star1 
 1692 E> 0x2fb1d1e65165 @   13 : 5e f9 f8 03 04    CallProperty1 r1, r2, a0, [4]
         0x2fb1d1e6516a @   18 : c4                Star0 
 1713 S> 0x2fb1d1e6516b @   19 : 1d                TestUndetectable 
         0x2fb1d1e6516c @   20 : 99 1e             JumpIfFalse [30] (0x2fb1d1e6518a @ 50)
 1740 S> 0x2fb1d1e6516e @   22 : 21 02 06          LdaGlobal [2], [6]
         0x2fb1d1e65171 @   25 : c3                Star1 
         0x2fb1d1e65172 @   26 : 13 03             LdaConstant [3]
         0x2fb1d1e65174 @   28 : c2                Star2 
         0x2fb1d1e65175 @   29 : 0b 03             Ldar a0
 1780 E> 0x2fb1d1e65177 @   31 : 77                ToString 
         0x2fb1d1e65178 @   32 : 39 f8 08          Add r2, [8]
         0x2fb1d1e6517b @   35 : c2                Star2 
         0x2fb1d1e6517c @   36 : 13 04             LdaConstant [4]
         0x2fb1d1e6517e @   38 : 39 f8 08          Add r2, [8]
         0x2fb1d1e65181 @   41 : c2                Star2 
         0x2fb1d1e65182 @   42 : 0b f9             Ldar r1
 1746 E> 0x2fb1d1e65184 @   44 : 69 f9 f8 01 09    Construct r1, r2-r2, [9]
 1740 E> 0x2fb1d1e65189 @   49 : a7                Throw 
 1800 S> 0x2fb1d1e6518a @   50 : 7c 05 0b 29       CreateObjectLiteral [5], [11], #41
         0x2fb1d1e6518e @   54 : c3                Star1 
 1830 E> 0x2fb1d1e6518f @   55 : 2d fa 06 0c       GetNamedProperty r0, [6], [12]
         0x2fb1d1e65193 @   59 : 33 f9 06 0e       DefineNamedOwnProperty r1, [6], [14]
 1857 E> 0x2fb1d1e65197 @   63 : 2d fa 07 10       GetNamedProperty r0, [7], [16]
         0x2fb1d1e6519b @   67 : 33 f9 07 12       DefineNamedOwnProperty r1, [7], [18]
 1895 E> 0x2fb1d1e6519f @   71 : 2d fa 08 14       GetNamedProperty r0, [8], [20]
         0x2fb1d1e651a3 @   75 : 33 f9 09 16       DefineNamedOwnProperty r1, [9], [22]
 1930 E> 0x2fb1d1e651a7 @   79 : 2d fa 0a 18       GetNamedProperty r0, [10], [24]
         0x2fb1d1e651ab @   83 : c1                Star3 
 1943 E> 0x2fb1d1e651ac @   84 : 2d f7 0b 1a       GetNamedProperty r3, [11], [26]
         0x2fb1d1e651b0 @   88 : c2                Star2 
         0x2fb1d1e651b1 @   89 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x2fb1d1e651b5 @   93 : c0                Star4 
 1943 E> 0x2fb1d1e651b6 @   94 : 5e f8 f7 f6 1c    CallProperty1 r2, r3, r4, [28]
         0x2fb1d1e651bb @   99 : 33 f9 0a 1e       DefineNamedOwnProperty r1, [10], [30]
         0x2fb1d1e651bf @  103 : 0b f9             Ldar r1
 2073 S> 0x2fb1d1e651c1 @  105 : a9                Return 
Constant pool (size = 13)
0x2fb1d1e651c9: [FixedArray] in OldSpace
 - map: 0x1393486012e1 <Map>
 - length: 13
           0: 0x2fb1d1e65241 <String[17]: #METEOR_TYPE_INFOS>
           1: 0x1393486050e9 <String[3]: #get>
           2: 0x139348604de1 <String[5]: #Error>
           3: 0x2fb1d1e65269 <String[21]: #Unknown meteor type '>
           4: 0x2531d16b4c49 <String[1]: #'>
           5: 0x2fb1d1e652a9 <ObjectBoilerplateDescription[9]>
           6: 0x2fb1d1e65301 <String[5]: #score>
           7: 0x13934860a111 <String[4]: #size>
           8: 0x2fb1d1e65359 <String[5]: #speed>
           9: 0x2fb1d1e65319 <String[16]: #approximateSpeed>
          10: 0x2fb1d1e65339 <String[12]: #explodesInto>
          11: 0x2531d1689ea9 <String[3]: #map>
          12: 0x2fb1d1e65389 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 44)
0x2fb1d1e65c89 <ByteArray[44]>
Boilerplate at 0x2fb1d1e652a9: 
0x2fb1d1e652a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 9
           0: 8
           1: 0x2fb1d1e65301 <String[5]: #score>
           2: 0x139348601501 <Odd Oddball: uninitialized>
           3: 0x13934860a111 <String[4]: #size>
           4: 0x139348601501 <Odd Oddball: uninitialized>
           5: 0x2fb1d1e65319 <String[16]: #approximateSpeed>
           6: 0x139348601501 <Odd Oddball: uninitialized>
           7: 0x2fb1d1e65339 <String[12]: #explodesInto>
           8: 0x139348601501 <Odd Oddball: uninitialized>
0x2fb1d1e65389 points to: [0x2fb1d1e653f8]
=== [0x2fb1d1e653f8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1953 S> 0x2fb1d1e653f8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x2fb1d1e653fc @    4 : c4                Star0 
 1981 E> 0x2fb1d1e653fd @    5 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
         0x2fb1d1e65401 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 2025 E> 0x2fb1d1e65405 @   13 : 2d 03 02 07       GetNamedProperty a0, [2], [7]
 2037 E> 0x2fb1d1e65409 @   17 : 00 47 b4 00 06 00 MulSmi.Wide [180], [6]
         0x2fb1d1e6540f @   23 : c3                Star1 
 2045 E> 0x2fb1d1e65410 @   24 : 21 03 09          LdaGlobal [3], [9]
         0x2fb1d1e65413 @   27 : c2                Star2 
 2050 E> 0x2fb1d1e65414 @   28 : 2d f8 04 0b       GetNamedProperty r2, [4], [11]
 2043 E> 0x2fb1d1e65418 @   32 : 3c f9 05          Div r1, [5]
         0x2fb1d1e6541b @   35 : 33 fa 05 0d       DefineNamedOwnProperty r0, [5], [13]
         0x2fb1d1e6541f @   39 : 0b fa             Ldar r0
 2064 S> 0x2fb1d1e65421 @   41 : a9                Return 
Constant pool (size = 6)
0x2fb1d1e65429: [FixedArray] in OldSpace
 - map: 0x1393486012e1 <Map>
 - length: 6
           0: 0x2fb1d1e65469 <ObjectBoilerplateDescription[5]>
           1: 0x2fb1d1e654a1 <String[10]: #meteorType>
           2: 0x2fb1d1e654e1 <String[11]: #rotationRad>
           3: 0x2531d169a991 <String[4]: #Math>
           4: 0x2531d169aca9 <String[2]: #PI>
           5: 0x2fb1d1e654c1 <String[16]: #approximateAngle>
Handler Table (size = 0)
Source Position Table (size = 20)
0x2fb1d1e65531 <ByteArray[20]>
Boilerplate at 0x2fb1d1e65469: 
0x2fb1d1e65469: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 5
           0: 8
           1: 0x2fb1d1e654a1 <String[10]: #meteorType>
           2: 0x139348601501 <Odd Oddball: uninitialized>
           3: 0x2fb1d1e654c1 <String[16]: #approximateAngle>
           4: 0x139348601501 <Odd Oddball: uninitialized>
0x2fb1d1e65911 points to: [0x2fb1d1e65980]
=== [0x2fb1d1e65980] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 2114 S> 0x2fb1d1e65980 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x2fb1d1e65983 @    3 : c3                Star1 
 2128 E> 0x2fb1d1e65984 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2fb1d1e65988 @    8 : c4                Star0 
 2140 E> 0x2fb1d1e65989 @    9 : 21 02 04          LdaGlobal [2], [4]
         0x2fb1d1e6598c @   12 : c0                Star4 
 2146 E> 0x2fb1d1e6598d @   13 : 2d f6 03 06       GetNamedProperty r4, [3], [6]
         0x2fb1d1e65991 @   17 : c1                Star3 
         0x2fb1d1e65992 @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2fb1d1e65994 @   20 : be                Star6 
 2159 E> 0x2fb1d1e65995 @   21 : 2d f4 04 08       GetNamedProperty r6, [4], [8]
         0x2fb1d1e65999 @   25 : be                Star6 
 2177 E> 0x2fb1d1e6599a @   26 : 2d f4 05 0a       GetNamedProperty r6, [5], [10]
         0x2fb1d1e6599e @   30 : bf                Star5 
 2177 E> 0x2fb1d1e6599f @   31 : 5d f5 f4 0c       CallProperty0 r5, r6, [12]
         0x2fb1d1e659a3 @   35 : bf                Star5 
 2146 E> 0x2fb1d1e659a4 @   36 : 5e f7 f6 f5 0e    CallProperty1 r3, r4, r5, [14]
         0x2fb1d1e659a9 @   41 : c1                Star3 
 2184 E> 0x2fb1d1e659aa @   42 : 2d f7 06 10       GetNamedProperty r3, [6], [16]
         0x2fb1d1e659ae @   46 : c2                Star2 
         0x2fb1d1e659af @   47 : 80 07 00 02       CreateClosure [7], [0], #2
         0x2fb1d1e659b3 @   51 : c0                Star4 
 2185 E> 0x2fb1d1e659b4 @   52 : 5e f8 f7 f6 12    CallProperty1 r2, r3, r4, [18]
         0x2fb1d1e659b9 @   57 : c2                Star2 
 2128 E> 0x2fb1d1e659ba @   58 : 5e fa f9 f8 14    CallProperty1 r0, r1, r2, [20]
 2277 S> 0x2fb1d1e659bf @   63 : a9                Return 
Constant pool (size = 8)
0x2fb1d1e659c1: [FixedArray] in OldSpace
 - map: 0x1393486012e1 <Map>
 - length: 8
           0: 0x139348605ab9 <String[6]: #Object>
           1: 0x2531d169a849 <String[11]: #fromEntries>
           2: 0x139348604681 <String[5]: #Array>
           3: 0x139348605011 <String[4]: #from>
           4: 0x2fb1d1e65241 <String[17]: #METEOR_TYPE_INFOS>
           5: 0x1393486055a1 <String[4]: #keys>
           6: 0x2531d1689ea9 <String[3]: #map>
           7: 0x2fb1d1e65a31 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 30)
0x2fb1d1e65b99 <ByteArray[30]>
0x2fb1d1e65a31 points to: [0x2fb1d1e65aa0]
=== [0x2fb1d1e65aa0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2215 S> 0x2fb1d1e65aa0 @    0 : 79 00 00 25       CreateArrayLiteral [0], [0], #37
         0x2fb1d1e65aa4 @    4 : c3                Star1 
         0x2fb1d1e65aa5 @    5 : 0c                LdaZero 
         0x2fb1d1e65aa6 @    6 : c4                Star0 
         0x2fb1d1e65aa7 @    7 : 0b 03             Ldar a0
 2223 E> 0x2fb1d1e65aa9 @    9 : 36 f9 fa 01       StaInArrayLiteral r1, r0, [1]
         0x2fb1d1e65aad @   13 : 0d 01             LdaSmi [1]
         0x2fb1d1e65aaf @   15 : c4                Star0 
         0x2fb1d1e65ab0 @   16 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x2fb1d1e65ab2 @   18 : c2                Star2 
 2235 E> 0x2fb1d1e65ab3 @   19 : 62 f8 03 03       CallUndefinedReceiver1 r2, a0, [3]
         0x2fb1d1e65ab7 @   23 : 36 f9 fa 01       StaInArrayLiteral r1, r0, [1]
         0x2fb1d1e65abb @   27 : 0b f9             Ldar r1
 2268 S> 0x2fb1d1e65abd @   29 : a9                Return 
Constant pool (size = 1)
0x2fb1d1e65ac1: [FixedArray] in OldSpace
 - map: 0x1393486012e1 <Map>
 - length: 1
           0: 0x2fb1d1e65ad9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2fb1d1e65af1 <FixedArray[2]>>
Handler Table (size = 0)
Source Position Table (size = 12)
0x2fb1d1e65b11 <ByteArray[12]>
Boilerplate at 0x2fb1d1e65d61: 
0x2fb1d1e65d61: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 3
           0: 8
           1: 0x139348606419 <String[5]: #value>
           2: 0x139348601729 <true>
0x2fb1d1e656e1 points to: [0x2fb1d1e65750]
=== [0x2fb1d1e65750] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  272 S> 0x2fb1d1e65750 @    0 : 13 00             LdaConstant [0]
  292 E> 0x2fb1d1e65752 @    2 : 32 03 01 00       SetNamedProperty a0, [1], [0]
  307 S> 0x2fb1d1e65756 @    6 : 13 02             LdaConstant [2]
  328 E> 0x2fb1d1e65758 @    8 : 32 03 03 02       SetNamedProperty a0, [3], [2]
  344 S> 0x2fb1d1e6575c @   12 : 13 04             LdaConstant [4]
  364 E> 0x2fb1d1e6575e @   14 : 32 03 05 04       SetNamedProperty a0, [5], [4]
  379 S> 0x2fb1d1e65762 @   18 : 13 06             LdaConstant [6]
  399 E> 0x2fb1d1e65764 @   20 : 32 03 07 06       SetNamedProperty a0, [7], [6]
         0x2fb1d1e65768 @   24 : 0e                LdaUndefined 
  410 S> 0x2fb1d1e65769 @   25 : a9                Return 
Constant pool (size = 8)
0x2fb1d1e65771: [FixedArray] in OldSpace
 - map: 0x1393486012e1 <Map>
 - length: 8
           0: 0x2fb1d1e657c1 <String[5]: #LARGE>
           1: 0x2fb1d1e657d9 <String[5]: #Large>
           2: 0x2fb1d1e657f1 <String[6]: #MEDIUM>
           3: 0x2fb1d1e65809 <String[6]: #Medium>
           4: 0x2fb1d1e65821 <String[5]: #SMALL>
           5: 0x2fb1d1e65839 <String[5]: #Small>
           6: 0x2fb1d1e65851 <String[5]: #DEBUG>
           7: 0x2531d16aaf39 <String[5]: #Debug>
Handler Table (size = 0)
Source Position Table (size = 21)
0x2fb1d1e65881 <ByteArray[21]>
Boilerplate at 0x2fb1d1e65e21: 
0x2fb1d1e65e21: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 9
           0: 8
           1: 0x13934860a111 <String[4]: #size>
           2: 40
           3: 0x2fb1d1e65359 <String[5]: #speed>
           4: 3
           5: 0x2fb1d1e65301 <String[5]: #score>
           6: 15
           7: 0x2fb1d1e65339 <String[12]: #explodesInto>
           8: 0x139348601501 <Odd Oddball: uninitialized>
Boilerplate at 0x2fb1d1e65eb1: 
0x2fb1d1e65eb1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 5
           0: 8
           1: 0x2fb1d1e654a1 <String[10]: #meteorType>
           2: 0x139348601501 <Odd Oddball: uninitialized>
           3: 0x2fb1d1e654e1 <String[11]: #rotationRad>
           4: 0x139348601501 <Odd Oddball: uninitialized>
Boilerplate at 0x2fb1d1e65ee9: 
0x2fb1d1e65ee9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 5
           0: 8
           1: 0x2fb1d1e654a1 <String[10]: #meteorType>
           2: 0x139348601501 <Odd Oddball: uninitialized>
           3: 0x2fb1d1e654e1 <String[11]: #rotationRad>
           4: 0x139348601501 <Odd Oddball: uninitialized>
Boilerplate at 0x2fb1d1e65f59: 
0x2fb1d1e65f59: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 9
           0: 8
           1: 0x13934860a111 <String[4]: #size>
           2: 20
           3: 0x2fb1d1e65359 <String[5]: #speed>
           4: 9
           5: 0x2fb1d1e65301 <String[5]: #score>
           6: 40
           7: 0x2fb1d1e65339 <String[12]: #explodesInto>
           8: 0x139348601501 <Odd Oddball: uninitialized>
Boilerplate at 0x2fb1d1e65ff1: 
0x2fb1d1e65ff1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 5
           0: 8
           1: 0x2fb1d1e654a1 <String[10]: #meteorType>
           2: 0x139348601501 <Odd Oddball: uninitialized>
           3: 0x2fb1d1e654e1 <String[11]: #rotationRad>
           4: 0x139348601501 <Odd Oddball: uninitialized>
Boilerplate at 0x2fb1d1e66029: 
0x2fb1d1e66029: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 5
           0: 8
           1: 0x2fb1d1e654a1 <String[10]: #meteorType>
           2: 0x139348601501 <Odd Oddball: uninitialized>
           3: 0x2fb1d1e654e1 <String[11]: #rotationRad>
           4: 0
Boilerplate at 0x2fb1d1e66061: 
0x2fb1d1e66061: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x139348602059 <Map>
 - length: 5
           0: 8
           1: 0x2fb1d1e654a1 <String[10]: #meteorType>
           2: 0x139348601501 <Odd Oddball: uninitialized>
           3: 0x2fb1d1e654e1 <String[11]: #rotationRad>
           4: 0x139348601501 <Odd Oddball: uninitialized>
<< OUTPUTTING DISASSEMBLY END >>
