<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x193bbb124bb8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x193bbb124bb8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x193bbb124bbc @    4 : c4                Star0 
 2377 S> 0x193bbb124bbd @    5 : a9                Return 
Constant pool (size = 1)
0x193bbb124bc1: [FixedArray] in OldSpace
 - map: 0x07bd880812e1 <Map>
 - length: 1
           0: 0x193bbb124bd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x193bbb1260e1 <ByteArray[7]>
0x193bbb124bd9 points to: [0x193bbb124c48]
=== [0x193bbb124c48] DISASSEMBLY ===
Parameter count 6
Register count 14
Frame size 112
OSR urgency: 0
Bytecode age: 0
   10 E> 0x193bbb124c48 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x193bbb124c4b @    3 : 1a f8             PushContext r2
         0x193bbb124c4d @    5 : 0b 03             Ldar a0
         0x193bbb124c4f @    7 : 25 02             StaCurrentContextSlot [2]
         0x193bbb124c51 @    9 : 80 01 00 02       CreateClosure [1], [0], #2
         0x193bbb124c55 @   13 : 25 03             StaCurrentContextSlot [3]
         0x193bbb124c57 @   15 : 80 02 01 02       CreateClosure [2], [1], #2
         0x193bbb124c5b @   19 : c3                Star1 
   76 S> 0x193bbb124c5c @   20 : 21 03 00          LdaGlobal [3], [0]
         0x193bbb124c5f @   23 : c0                Star4 
   83 E> 0x193bbb124c60 @   24 : 2d f6 04 02       GetNamedProperty r4, [4], [2]
         0x193bbb124c64 @   28 : c1                Star3 
         0x193bbb124c65 @   29 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb124c67 @   31 : bf                Star5 
         0x193bbb124c68 @   32 : 13 05             LdaConstant [5]
         0x193bbb124c6a @   34 : be                Star6 
   98 E> 0x193bbb124c6b @   35 : 7c 06 04 29       CreateObjectLiteral [6], [4], #41
         0x193bbb124c6f @   39 : bd                Star7 
   83 E> 0x193bbb124c70 @   40 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x193bbb124c75 @   45 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb124c77 @   47 : c1                Star3 
         0x193bbb124c78 @   48 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb124c7a @   50 : c0                Star4 
         0x193bbb124c7b @   51 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb124c7d @   53 : bf                Star5 
         0x193bbb124c7e @   54 : 0e                LdaUndefined 
         0x193bbb124c7f @   55 : be                Star6 
  217 E> 0x193bbb124c80 @   56 : 32 f5 07 07       SetNamedProperty r5, [7], [7]
         0x193bbb124c84 @   60 : 0b f4             Ldar r6
  196 E> 0x193bbb124c86 @   62 : 32 f6 08 09       SetNamedProperty r4, [8], [9]
         0x193bbb124c8a @   66 : 0b f4             Ldar r6
  168 E> 0x193bbb124c8c @   68 : 32 f7 09 0b       SetNamedProperty r3, [9], [11]
  243 S> 0x193bbb124c90 @   72 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x193bbb124c94 @   76 : c1                Star3 
         0x193bbb124c95 @   77 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb124c97 @   79 : c0                Star4 
  434 E> 0x193bbb124c98 @   80 : 2d f6 07 0d       GetNamedProperty r4, [7], [13]
         0x193bbb124c9c @   84 : 96 0d             JumpIfToBooleanTrue [13] (0x193bbb124ca9 @ 97)
         0x193bbb124c9e @   86 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb124ca0 @   88 : c0                Star4 
  449 E> 0x193bbb124ca1 @   89 : 7d                CreateEmptyObjectLiteral 
         0x193bbb124ca2 @   90 : bf                Star5 
  468 E> 0x193bbb124ca3 @   91 : 32 f6 07 07       SetNamedProperty r4, [7], [7]
         0x193bbb124ca7 @   95 : 0b f5             Ldar r5
         0x193bbb124ca9 @   97 : c4                Star0 
  412 E> 0x193bbb124caa @   98 : 62 f7 fa 0f       CallUndefinedReceiver1 r3, r0, [15]
  476 S> 0x193bbb124cae @  102 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb124cb0 @  104 : c1                Star3 
  508 E> 0x193bbb124cb1 @  105 : 21 0b 11          LdaGlobal [11], [17]
         0x193bbb124cb4 @  108 : c0                Star4 
         0x193bbb124cb5 @  109 : 79 0c 13 04       CreateArrayLiteral [12], [19], #4
         0x193bbb124cb9 @  113 : be                Star6 
         0x193bbb124cba @  114 : 0c                LdaZero 
         0x193bbb124cbb @  115 : bf                Star5 
         0x193bbb124cbc @  116 : 79 0d 14 04       CreateArrayLiteral [13], [20], #4
         0x193bbb124cc0 @  120 : bc                Star8 
         0x193bbb124cc1 @  121 : 0c                LdaZero 
         0x193bbb124cc2 @  122 : bd                Star7 
  530 E> 0x193bbb124cc3 @  123 : 2d fa 0e 15       GetNamedProperty r0, [14], [21]
         0x193bbb124cc7 @  127 : 36 f2 f3 17       StaInArrayLiteral r8, r7, [23]
         0x193bbb124ccb @  131 : 0d 01             LdaSmi [1]
         0x193bbb124ccd @  133 : bd                Star7 
         0x193bbb124cce @  134 : 7c 0f 19 0c       CreateObjectLiteral [15], [25], #12
         0x193bbb124cd2 @  138 : bb                Star9 
  632 E> 0x193bbb124cd3 @  139 : 79 10 1a 04       CreateArrayLiteral [16], [26], #4
         0x193bbb124cd7 @  143 : b9                Star11 
         0x193bbb124cd8 @  144 : 0c                LdaZero 
         0x193bbb124cd9 @  145 : ba                Star10 
         0x193bbb124cda @  146 : 7c 11 1b 29       CreateObjectLiteral [17], [27], #41
         0x193bbb124cde @  150 : b8                Star12 
  695 E> 0x193bbb124cdf @  151 : 2d fa 12 1c       GetNamedProperty r0, [18], [28]
         0x193bbb124ce3 @  155 : 33 ee 13 1e       DefineNamedOwnProperty r12, [19], [30]
  737 E> 0x193bbb124ce7 @  159 : 21 14 21          LdaGlobal [20], [33]
         0x193bbb124cea @  162 : b7                Star13 
  742 E> 0x193bbb124ceb @  163 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
  736 E> 0x193bbb124cef @  167 : 53 25             Negate [37]
  745 E> 0x193bbb124cf1 @  169 : 48 0a 20          DivSmi [10], [32]
         0x193bbb124cf4 @  172 : 33 ee 16 26       DefineNamedOwnProperty r12, [22], [38]
         0x193bbb124cf8 @  176 : 0b ee             Ldar r12
         0x193bbb124cfa @  178 : 36 ef f0 28       StaInArrayLiteral r11, r10, [40]
         0x193bbb124cfe @  182 : 0d 01             LdaSmi [1]
         0x193bbb124d00 @  184 : ba                Star10 
         0x193bbb124d01 @  185 : 7c 17 2a 29       CreateObjectLiteral [23], [42], #41
         0x193bbb124d05 @  189 : b8                Star12 
  831 E> 0x193bbb124d06 @  190 : 2d fa 12 1c       GetNamedProperty r0, [18], [28]
         0x193bbb124d0a @  194 : 33 ee 13 2b       DefineNamedOwnProperty r12, [19], [43]
  872 E> 0x193bbb124d0e @  198 : 21 14 21          LdaGlobal [20], [33]
         0x193bbb124d11 @  201 : b7                Star13 
  877 E> 0x193bbb124d12 @  202 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
  880 E> 0x193bbb124d16 @  206 : 48 0a 2d          DivSmi [10], [45]
         0x193bbb124d19 @  209 : 33 ee 16 2e       DefineNamedOwnProperty r12, [22], [46]
         0x193bbb124d1d @  213 : 0b ee             Ldar r12
         0x193bbb124d1f @  215 : 36 ef f0 28       StaInArrayLiteral r11, r10, [40]
         0x193bbb124d23 @  219 : 0b ef             Ldar r11
         0x193bbb124d25 @  221 : 33 f1 18 30       DefineNamedOwnProperty r9, [24], [48]
         0x193bbb124d29 @  225 : 0b f1             Ldar r9
         0x193bbb124d2b @  227 : 36 f2 f3 17       StaInArrayLiteral r8, r7, [23]
         0x193bbb124d2f @  231 : 0b f2             Ldar r8
         0x193bbb124d31 @  233 : 36 f4 f5 32       StaInArrayLiteral r6, r5, [50]
         0x193bbb124d35 @  237 : 0d 01             LdaSmi [1]
         0x193bbb124d37 @  239 : bf                Star5 
         0x193bbb124d38 @  240 : 79 19 34 04       CreateArrayLiteral [25], [52], #4
         0x193bbb124d3c @  244 : bc                Star8 
         0x193bbb124d3d @  245 : 0c                LdaZero 
         0x193bbb124d3e @  246 : bd                Star7 
  946 E> 0x193bbb124d3f @  247 : 2d fa 12 1c       GetNamedProperty r0, [18], [28]
         0x193bbb124d43 @  251 : 36 f2 f3 35       StaInArrayLiteral r8, r7, [53]
         0x193bbb124d47 @  255 : 0d 01             LdaSmi [1]
         0x193bbb124d49 @  257 : bd                Star7 
         0x193bbb124d4a @  258 : 7c 1a 37 0c       CreateObjectLiteral [26], [55], #12
         0x193bbb124d4e @  262 : bb                Star9 
 1049 E> 0x193bbb124d4f @  263 : 79 1b 38 04       CreateArrayLiteral [27], [56], #4
         0x193bbb124d53 @  267 : b9                Star11 
         0x193bbb124d54 @  268 : 0c                LdaZero 
         0x193bbb124d55 @  269 : ba                Star10 
         0x193bbb124d56 @  270 : 7c 1c 39 29       CreateObjectLiteral [28], [57], #41
         0x193bbb124d5a @  274 : b8                Star12 
 1112 E> 0x193bbb124d5b @  275 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x193bbb124d5f @  279 : 33 ee 13 3c       DefineNamedOwnProperty r12, [19], [60]
 1153 E> 0x193bbb124d63 @  283 : 21 14 21          LdaGlobal [20], [33]
         0x193bbb124d66 @  286 : b7                Star13 
 1158 E> 0x193bbb124d67 @  287 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
 1152 E> 0x193bbb124d6b @  291 : 53 3f             Negate [63]
 1161 E> 0x193bbb124d6d @  293 : 48 06 3e          DivSmi [6], [62]
         0x193bbb124d70 @  296 : 33 ee 16 40       DefineNamedOwnProperty r12, [22], [64]
         0x193bbb124d74 @  300 : 0b ee             Ldar r12
         0x193bbb124d76 @  302 : 36 ef f0 42       StaInArrayLiteral r11, r10, [66]
         0x193bbb124d7a @  306 : 0d 01             LdaSmi [1]
         0x193bbb124d7c @  308 : ba                Star10 
         0x193bbb124d7d @  309 : 7c 1e 44 29       CreateObjectLiteral [30], [68], #41
         0x193bbb124d81 @  313 : b8                Star12 
 1246 E> 0x193bbb124d82 @  314 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x193bbb124d86 @  318 : 33 ee 13 45       DefineNamedOwnProperty r12, [19], [69]
         0x193bbb124d8a @  322 : 0b ee             Ldar r12
         0x193bbb124d8c @  324 : 36 ef f0 42       StaInArrayLiteral r11, r10, [66]
         0x193bbb124d90 @  328 : 0d 02             LdaSmi [2]
         0x193bbb124d92 @  330 : ba                Star10 
         0x193bbb124d93 @  331 : 7c 1f 47 29       CreateObjectLiteral [31], [71], #41
         0x193bbb124d97 @  335 : b8                Star12 
 1369 E> 0x193bbb124d98 @  336 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x193bbb124d9c @  340 : 33 ee 13 48       DefineNamedOwnProperty r12, [19], [72]
 1409 E> 0x193bbb124da0 @  344 : 21 14 21          LdaGlobal [20], [33]
         0x193bbb124da3 @  347 : b7                Star13 
 1414 E> 0x193bbb124da4 @  348 : 2d ed 15 23       GetNamedProperty r13, [21], [35]
 1417 E> 0x193bbb124da8 @  352 : 48 06 4a          DivSmi [6], [74]
         0x193bbb124dab @  355 : 33 ee 16 4b       DefineNamedOwnProperty r12, [22], [75]
         0x193bbb124daf @  359 : 0b ee             Ldar r12
         0x193bbb124db1 @  361 : 36 ef f0 42       StaInArrayLiteral r11, r10, [66]
         0x193bbb124db5 @  365 : 0b ef             Ldar r11
         0x193bbb124db7 @  367 : 33 f1 18 4d       DefineNamedOwnProperty r9, [24], [77]
         0x193bbb124dbb @  371 : 0b f1             Ldar r9
         0x193bbb124dbd @  373 : 36 f2 f3 35       StaInArrayLiteral r8, r7, [53]
         0x193bbb124dc1 @  377 : 0b f2             Ldar r8
         0x193bbb124dc3 @  379 : 36 f4 f5 32       StaInArrayLiteral r6, r5, [50]
         0x193bbb124dc7 @  383 : 0d 02             LdaSmi [2]
         0x193bbb124dc9 @  385 : bf                Star5 
         0x193bbb124dca @  386 : 79 20 4f 04       CreateArrayLiteral [32], [79], #4
         0x193bbb124dce @  390 : bc                Star8 
         0x193bbb124dcf @  391 : 0c                LdaZero 
         0x193bbb124dd0 @  392 : bd                Star7 
 1483 E> 0x193bbb124dd1 @  393 : 2d fa 1d 3a       GetNamedProperty r0, [29], [58]
         0x193bbb124dd5 @  397 : 36 f2 f3 50       StaInArrayLiteral r8, r7, [80]
         0x193bbb124dd9 @  401 : 0b f2             Ldar r8
         0x193bbb124ddb @  403 : 36 f4 f5 32       StaInArrayLiteral r6, r5, [50]
         0x193bbb124ddf @  407 : 0b f6             Ldar r4
  504 E> 0x193bbb124de1 @  409 : 69 f6 f4 01 52    Construct r4, r6-r6, [82]
  502 E> 0x193bbb124de6 @  414 : 32 f7 08 09       SetNamedProperty r3, [8], [9]
 2280 S> 0x193bbb124dea @  418 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb124dec @  420 : c1                Star3 
         0x193bbb124ded @  421 : 0b f9             Ldar r1
 2309 E> 0x193bbb124def @  423 : 32 f7 09 0b       SetNamedProperty r3, [9], [11]
         0x193bbb124df3 @  427 : 0e                LdaUndefined 
 2374 S> 0x193bbb124df4 @  428 : a9                Return 
Constant pool (size = 33)
0x193bbb124df9: [FixedArray] in OldSpace
 - map: 0x07bd880812e1 <Map>
 - length: 33
           0: 0x193bbb124f11 <ScopeInfo FUNCTION_SCOPE>
           1: 0x193bbb124fb9 <SharedFunctionInfo serializeMeteorType>
           2: 0x193bbb1257e1 <SharedFunctionInfo serializeMeteorInfos>
           3: 0x07bd88085ab9 <String[6]: #Object>
           4: 0x07bd88084c11 <String[14]: #defineProperty>
           5: 0x193bbb125c11 <String[10]: #__esModule>
           6: 0x193bbb125c31 <ObjectBoilerplateDescription[3]>
           7: 0x193bbb125c59 <String[10]: #MeteorType>
           8: 0x193bbb125111 <String[17]: #METEOR_TYPE_INFOS>
           9: 0x193bbb125ae9 <String[20]: #serializeMeteorInfos>
          10: 0x193bbb1255b1 <SharedFunctionInfo>
          11: 0x07bd88085691 <String[3]: #Map>
          12: 0x193bbb125c79 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x193bbb125c91 <FixedArray[3]>>
          13: 0x193bbb125cb9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x193bbb125cd1 <FixedArray[2]>>
          14: 0x193bbb1256a9 <String[5]: #Large>
          15: 0x193bbb125cf1 <ObjectBoilerplateDescription[9]>
          16: 0x193bbb125d49 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x193bbb125d61 <FixedArray[2]>>
          17: 0x193bbb125d81 <ObjectBoilerplateDescription[5]>
          18: 0x193bbb1256d9 <String[6]: #Medium>
          19: 0x193bbb125371 <String[10]: #meteorType>
          20: 0x398e46a1a991 <String[4]: #Math>
          21: 0x398e46a1aca9 <String[2]: #PI>
          22: 0x193bbb1253b1 <String[11]: #rotationRad>
          23: 0x193bbb125db9 <ObjectBoilerplateDescription[5]>
          24: 0x193bbb125209 <String[12]: #explodesInto>
          25: 0x193bbb125df1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x193bbb125e09 <FixedArray[2]>>
          26: 0x193bbb125e29 <ObjectBoilerplateDescription[9]>
          27: 0x193bbb125e81 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x193bbb125e99 <FixedArray[3]>>
          28: 0x193bbb125ec1 <ObjectBoilerplateDescription[5]>
          29: 0x193bbb125709 <String[5]: #Small>
          30: 0x193bbb125ef9 <ObjectBoilerplateDescription[5]>
          31: 0x193bbb125f31 <ObjectBoilerplateDescription[5]>
          32: 0x193bbb125f69 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x193bbb125f81 <FixedArray[2]>>
Handler Table (size = 0)
Source Position Table (size = 116)
0x193bbb126011 <ByteArray[116]>
0x193bbb124fb9 points to: [0x193bbb125028]
=== [0x193bbb125028] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 1666 S> 0x193bbb125028 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb12502a @    2 : c2                Star2 
 1674 E> 0x193bbb12502b @    3 : 2d f8 00 00       GetNamedProperty r2, [0], [0]
         0x193bbb12502f @    7 : c2                Star2 
 1692 E> 0x193bbb125030 @    8 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x193bbb125034 @   12 : c3                Star1 
 1692 E> 0x193bbb125035 @   13 : 5e f9 f8 03 04    CallProperty1 r1, r2, a0, [4]
         0x193bbb12503a @   18 : c4                Star0 
 1713 S> 0x193bbb12503b @   19 : 1d                TestUndetectable 
         0x193bbb12503c @   20 : 99 1e             JumpIfFalse [30] (0x193bbb12505a @ 50)
 1740 S> 0x193bbb12503e @   22 : 21 02 06          LdaGlobal [2], [6]
         0x193bbb125041 @   25 : c3                Star1 
         0x193bbb125042 @   26 : 13 03             LdaConstant [3]
         0x193bbb125044 @   28 : c2                Star2 
         0x193bbb125045 @   29 : 0b 03             Ldar a0
 1780 E> 0x193bbb125047 @   31 : 77                ToString 
         0x193bbb125048 @   32 : 39 f8 08          Add r2, [8]
         0x193bbb12504b @   35 : c2                Star2 
         0x193bbb12504c @   36 : 13 04             LdaConstant [4]
         0x193bbb12504e @   38 : 39 f8 08          Add r2, [8]
         0x193bbb125051 @   41 : c2                Star2 
         0x193bbb125052 @   42 : 0b f9             Ldar r1
 1746 E> 0x193bbb125054 @   44 : 69 f9 f8 01 09    Construct r1, r2-r2, [9]
 1740 E> 0x193bbb125059 @   49 : a7                Throw 
 1800 S> 0x193bbb12505a @   50 : 7c 05 0b 29       CreateObjectLiteral [5], [11], #41
         0x193bbb12505e @   54 : c3                Star1 
 1830 E> 0x193bbb12505f @   55 : 2d fa 06 0c       GetNamedProperty r0, [6], [12]
         0x193bbb125063 @   59 : 33 f9 06 0e       DefineNamedOwnProperty r1, [6], [14]
 1857 E> 0x193bbb125067 @   63 : 2d fa 07 10       GetNamedProperty r0, [7], [16]
         0x193bbb12506b @   67 : 33 f9 07 12       DefineNamedOwnProperty r1, [7], [18]
 1895 E> 0x193bbb12506f @   71 : 2d fa 08 14       GetNamedProperty r0, [8], [20]
         0x193bbb125073 @   75 : 33 f9 09 16       DefineNamedOwnProperty r1, [9], [22]
 1930 E> 0x193bbb125077 @   79 : 2d fa 0a 18       GetNamedProperty r0, [10], [24]
         0x193bbb12507b @   83 : c1                Star3 
 1943 E> 0x193bbb12507c @   84 : 2d f7 0b 1a       GetNamedProperty r3, [11], [26]
         0x193bbb125080 @   88 : c2                Star2 
         0x193bbb125081 @   89 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x193bbb125085 @   93 : c0                Star4 
 1943 E> 0x193bbb125086 @   94 : 5e f8 f7 f6 1c    CallProperty1 r2, r3, r4, [28]
         0x193bbb12508b @   99 : 33 f9 0a 1e       DefineNamedOwnProperty r1, [10], [30]
         0x193bbb12508f @  103 : 0b f9             Ldar r1
 2073 S> 0x193bbb125091 @  105 : a9                Return 
Constant pool (size = 13)
0x193bbb125099: [FixedArray] in OldSpace
 - map: 0x07bd880812e1 <Map>
 - length: 13
           0: 0x193bbb125111 <String[17]: #METEOR_TYPE_INFOS>
           1: 0x07bd880850e9 <String[3]: #get>
           2: 0x07bd88084de1 <String[5]: #Error>
           3: 0x193bbb125139 <String[21]: #Unknown meteor type '>
           4: 0x398e46a34c49 <String[1]: #'>
           5: 0x193bbb125179 <ObjectBoilerplateDescription[9]>
           6: 0x193bbb1251d1 <String[5]: #score>
           7: 0x07bd8808a111 <String[4]: #size>
           8: 0x193bbb125229 <String[5]: #speed>
           9: 0x193bbb1251e9 <String[16]: #approximateSpeed>
          10: 0x193bbb125209 <String[12]: #explodesInto>
          11: 0x398e46a09ea9 <String[3]: #map>
          12: 0x193bbb125259 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 44)
0x193bbb125b59 <ByteArray[44]>
Boilerplate at 0x193bbb125179: 
0x193bbb125179: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 9
           0: 8
           1: 0x193bbb1251d1 <String[5]: #score>
           2: 0x07bd88081501 <Odd Oddball: uninitialized>
           3: 0x07bd8808a111 <String[4]: #size>
           4: 0x07bd88081501 <Odd Oddball: uninitialized>
           5: 0x193bbb1251e9 <String[16]: #approximateSpeed>
           6: 0x07bd88081501 <Odd Oddball: uninitialized>
           7: 0x193bbb125209 <String[12]: #explodesInto>
           8: 0x07bd88081501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x193bbb125259 points to: [0x193bbb1252c8]
=== [0x193bbb1252c8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1953 S> 0x193bbb1252c8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x193bbb1252cc @    4 : c4                Star0 
 1981 E> 0x193bbb1252cd @    5 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
         0x193bbb1252d1 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 2025 E> 0x193bbb1252d5 @   13 : 2d 03 02 07       GetNamedProperty a0, [2], [7]
 2037 E> 0x193bbb1252d9 @   17 : 00 47 b4 00 06 00 MulSmi.Wide [180], [6]
         0x193bbb1252df @   23 : c3                Star1 
 2045 E> 0x193bbb1252e0 @   24 : 21 03 09          LdaGlobal [3], [9]
         0x193bbb1252e3 @   27 : c2                Star2 
 2050 E> 0x193bbb1252e4 @   28 : 2d f8 04 0b       GetNamedProperty r2, [4], [11]
 2043 E> 0x193bbb1252e8 @   32 : 3c f9 05          Div r1, [5]
         0x193bbb1252eb @   35 : 33 fa 05 0d       DefineNamedOwnProperty r0, [5], [13]
         0x193bbb1252ef @   39 : 0b fa             Ldar r0
 2064 S> 0x193bbb1252f1 @   41 : a9                Return 
Constant pool (size = 6)
0x193bbb1252f9: [FixedArray] in OldSpace
 - map: 0x07bd880812e1 <Map>
 - length: 6
           0: 0x193bbb125339 <ObjectBoilerplateDescription[5]>
           1: 0x193bbb125371 <String[10]: #meteorType>
           2: 0x193bbb1253b1 <String[11]: #rotationRad>
           3: 0x398e46a1a991 <String[4]: #Math>
           4: 0x398e46a1aca9 <String[2]: #PI>
           5: 0x193bbb125391 <String[16]: #approximateAngle>
Handler Table (size = 0)
Source Position Table (size = 20)
0x193bbb125401 <ByteArray[20]>
Boilerplate at 0x193bbb125339: 
0x193bbb125339: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 5
           0: 8
           1: 0x193bbb125371 <String[10]: #meteorType>
           2: 0x07bd88081501 <Odd Oddball: uninitialized>
           3: 0x193bbb125391 <String[16]: #approximateAngle>
           4: 0x07bd88081501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x193bbb1257e1 points to: [0x193bbb125850]
=== [0x193bbb125850] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 2114 S> 0x193bbb125850 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x193bbb125853 @    3 : c3                Star1 
 2128 E> 0x193bbb125854 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x193bbb125858 @    8 : c4                Star0 
 2140 E> 0x193bbb125859 @    9 : 21 02 04          LdaGlobal [2], [4]
         0x193bbb12585c @   12 : c0                Star4 
 2146 E> 0x193bbb12585d @   13 : 2d f6 03 06       GetNamedProperty r4, [3], [6]
         0x193bbb125861 @   17 : c1                Star3 
         0x193bbb125862 @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x193bbb125864 @   20 : be                Star6 
 2159 E> 0x193bbb125865 @   21 : 2d f4 04 08       GetNamedProperty r6, [4], [8]
         0x193bbb125869 @   25 : be                Star6 
 2177 E> 0x193bbb12586a @   26 : 2d f4 05 0a       GetNamedProperty r6, [5], [10]
         0x193bbb12586e @   30 : bf                Star5 
 2177 E> 0x193bbb12586f @   31 : 5d f5 f4 0c       CallProperty0 r5, r6, [12]
         0x193bbb125873 @   35 : bf                Star5 
 2146 E> 0x193bbb125874 @   36 : 5e f7 f6 f5 0e    CallProperty1 r3, r4, r5, [14]
         0x193bbb125879 @   41 : c1                Star3 
 2184 E> 0x193bbb12587a @   42 : 2d f7 06 10       GetNamedProperty r3, [6], [16]
         0x193bbb12587e @   46 : c2                Star2 
         0x193bbb12587f @   47 : 80 07 00 02       CreateClosure [7], [0], #2
         0x193bbb125883 @   51 : c0                Star4 
 2185 E> 0x193bbb125884 @   52 : 5e f8 f7 f6 12    CallProperty1 r2, r3, r4, [18]
         0x193bbb125889 @   57 : c2                Star2 
 2128 E> 0x193bbb12588a @   58 : 5e fa f9 f8 14    CallProperty1 r0, r1, r2, [20]
 2277 S> 0x193bbb12588f @   63 : a9                Return 
Constant pool (size = 8)
0x193bbb125891: [FixedArray] in OldSpace
 - map: 0x07bd880812e1 <Map>
 - length: 8
           0: 0x07bd88085ab9 <String[6]: #Object>
           1: 0x398e46a1a849 <String[11]: #fromEntries>
           2: 0x07bd88084681 <String[5]: #Array>
           3: 0x07bd88085011 <String[4]: #from>
           4: 0x193bbb125111 <String[17]: #METEOR_TYPE_INFOS>
           5: 0x07bd880855a1 <String[4]: #keys>
           6: 0x398e46a09ea9 <String[3]: #map>
           7: 0x193bbb125901 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 30)
0x193bbb125a69 <ByteArray[30]>
0x193bbb125901 points to: [0x193bbb125970]
=== [0x193bbb125970] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2215 S> 0x193bbb125970 @    0 : 79 00 00 25       CreateArrayLiteral [0], [0], #37
         0x193bbb125974 @    4 : c3                Star1 
         0x193bbb125975 @    5 : 0c                LdaZero 
         0x193bbb125976 @    6 : c4                Star0 
         0x193bbb125977 @    7 : 0b 03             Ldar a0
 2223 E> 0x193bbb125979 @    9 : 36 f9 fa 01       StaInArrayLiteral r1, r0, [1]
         0x193bbb12597d @   13 : 0d 01             LdaSmi [1]
         0x193bbb12597f @   15 : c4                Star0 
         0x193bbb125980 @   16 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x193bbb125982 @   18 : c2                Star2 
 2235 E> 0x193bbb125983 @   19 : 62 f8 03 03       CallUndefinedReceiver1 r2, a0, [3]
         0x193bbb125987 @   23 : 36 f9 fa 01       StaInArrayLiteral r1, r0, [1]
         0x193bbb12598b @   27 : 0b f9             Ldar r1
 2268 S> 0x193bbb12598d @   29 : a9                Return 
Constant pool (size = 1)
0x193bbb125991: [FixedArray] in OldSpace
 - map: 0x07bd880812e1 <Map>
 - length: 1
           0: 0x193bbb1259a9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x193bbb1259c1 <FixedArray[2]>>
Handler Table (size = 0)
Source Position Table (size = 12)
0x193bbb1259e1 <ByteArray[12]>
Boilerplate at 0x193bbb125c31: 
0x193bbb125c31: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 3
           0: 8
           1: 0x07bd88086419 <String[5]: #value>
           2: 0x07bd88081729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x193bbb1255b1 points to: [0x193bbb125620]
=== [0x193bbb125620] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  272 S> 0x193bbb125620 @    0 : 13 00             LdaConstant [0]
  292 E> 0x193bbb125622 @    2 : 32 03 01 00       SetNamedProperty a0, [1], [0]
  307 S> 0x193bbb125626 @    6 : 13 02             LdaConstant [2]
  328 E> 0x193bbb125628 @    8 : 32 03 03 02       SetNamedProperty a0, [3], [2]
  344 S> 0x193bbb12562c @   12 : 13 04             LdaConstant [4]
  364 E> 0x193bbb12562e @   14 : 32 03 05 04       SetNamedProperty a0, [5], [4]
  379 S> 0x193bbb125632 @   18 : 13 06             LdaConstant [6]
  399 E> 0x193bbb125634 @   20 : 32 03 07 06       SetNamedProperty a0, [7], [6]
         0x193bbb125638 @   24 : 0e                LdaUndefined 
  410 S> 0x193bbb125639 @   25 : a9                Return 
Constant pool (size = 8)
0x193bbb125641: [FixedArray] in OldSpace
 - map: 0x07bd880812e1 <Map>
 - length: 8
           0: 0x193bbb125691 <String[5]: #LARGE>
           1: 0x193bbb1256a9 <String[5]: #Large>
           2: 0x193bbb1256c1 <String[6]: #MEDIUM>
           3: 0x193bbb1256d9 <String[6]: #Medium>
           4: 0x193bbb1256f1 <String[5]: #SMALL>
           5: 0x193bbb125709 <String[5]: #Small>
           6: 0x193bbb125721 <String[5]: #DEBUG>
           7: 0x398e46a2af39 <String[5]: #Debug>
Handler Table (size = 0)
Source Position Table (size = 21)
0x193bbb125751 <ByteArray[21]>
Boilerplate at 0x193bbb125cf1: 
0x193bbb125cf1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 9
           0: 8
           1: 0x07bd8808a111 <String[4]: #size>
           2: 40
           3: 0x193bbb125229 <String[5]: #speed>
           4: 3
           5: 0x193bbb1251d1 <String[5]: #score>
           6: 15
           7: 0x193bbb125209 <String[12]: #explodesInto>
           8: 0x07bd88081501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x193bbb125d81: 
0x193bbb125d81: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 5
           0: 8
           1: 0x193bbb125371 <String[10]: #meteorType>
           2: 0x07bd88081501 <Odd Oddball: uninitialized>
           3: 0x193bbb1253b1 <String[11]: #rotationRad>
           4: 0x07bd88081501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x193bbb125db9: 
0x193bbb125db9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 5
           0: 8
           1: 0x193bbb125371 <String[10]: #meteorType>
           2: 0x07bd88081501 <Odd Oddball: uninitialized>
           3: 0x193bbb1253b1 <String[11]: #rotationRad>
           4: 0x07bd88081501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x193bbb125e29: 
0x193bbb125e29: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 9
           0: 8
           1: 0x07bd8808a111 <String[4]: #size>
           2: 20
           3: 0x193bbb125229 <String[5]: #speed>
           4: 9
           5: 0x193bbb1251d1 <String[5]: #score>
           6: 40
           7: 0x193bbb125209 <String[12]: #explodesInto>
           8: 0x07bd88081501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x193bbb125ec1: 
0x193bbb125ec1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 5
           0: 8
           1: 0x193bbb125371 <String[10]: #meteorType>
           2: 0x07bd88081501 <Odd Oddball: uninitialized>
           3: 0x193bbb1253b1 <String[11]: #rotationRad>
           4: 0x07bd88081501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x193bbb125ef9: 
0x193bbb125ef9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 5
           0: 8
           1: 0x193bbb125371 <String[10]: #meteorType>
           2: 0x07bd88081501 <Odd Oddball: uninitialized>
           3: 0x193bbb1253b1 <String[11]: #rotationRad>
           4: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x193bbb125f31: 
0x193bbb125f31: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x07bd88082059 <Map>
 - length: 5
           0: 8
           1: 0x193bbb125371 <String[10]: #meteorType>
           2: 0x07bd88081501 <Odd Oddball: uninitialized>
           3: 0x193bbb1253b1 <String[11]: #rotationRad>
           4: 0x07bd88081501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
