<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x391d20e4ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x391d20e4ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x391d20e4cec @    4 : c4                Star0 
 5111 S> 0x391d20e4ced @    5 : a9                Return 
Constant pool (size = 1)
0x391d20e4cf1: [FixedArray] in OldSpace
 - map: 0x1c0d985412e1 <Map>
 - length: 1
           0: 0x0391d20e4d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x0391d20e5be9 <ByteArray[8]>
0x0391d20e4d09 points to: [0x391d20e4d78]
=== [0x391d20e4d78] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   10 E> 0x391d20e4d78 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x391d20e4d7b @    3 : 1a f8             PushContext r2
         0x391d20e4d7d @    5 : 10                LdaTheHole 
         0x391d20e4d7e @    6 : 25 02             StaCurrentContextSlot [2]
         0x391d20e4d80 @    8 : 80 01 00 02       CreateClosure [1], [0], #2
         0x391d20e4d84 @   12 : c4                Star0 
         0x391d20e4d85 @   13 : 80 02 01 02       CreateClosure [2], [1], #2
         0x391d20e4d89 @   17 : c3                Star1 
   76 S> 0x391d20e4d8a @   18 : 21 03 00          LdaGlobal [3], [0]
         0x391d20e4d8d @   21 : c0                Star4 
   83 E> 0x391d20e4d8e @   22 : 2d f6 04 02       GetNamedProperty r4, [4], [2]
         0x391d20e4d92 @   26 : c1                Star3 
         0x391d20e4d93 @   27 : 13 05             LdaConstant [5]
         0x391d20e4d95 @   29 : be                Star6 
   98 E> 0x391d20e4d96 @   30 : 7c 06 04 29       CreateObjectLiteral [6], [4], #41
         0x391d20e4d9a @   34 : bd                Star7 
         0x391d20e4d9b @   35 : 19 03 f5          Mov a0, r5
   83 E> 0x391d20e4d9e @   38 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x391d20e4da3 @   43 : 0e                LdaUndefined 
         0x391d20e4da4 @   44 : bf                Star5 
  207 E> 0x391d20e4da5 @   45 : 32 03 07 07       SetNamedProperty a0, [7], [7]
         0x391d20e4da9 @   49 : 0b f5             Ldar r5
  173 E> 0x391d20e4dab @   51 : 32 03 08 09       SetNamedProperty a0, [8], [9]
  234 S> 0x391d20e4daf @   55 : 13 09             LdaConstant [9]
         0x391d20e4db1 @   57 : c0                Star4 
  234 E> 0x391d20e4db2 @   58 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
  234 E> 0x391d20e4db6 @   62 : 25 02             StaCurrentContextSlot [2]
 1441 S> 0x391d20e4db8 @   64 : 0b fa             Ldar r0
 1473 E> 0x391d20e4dba @   66 : 32 03 07 07       SetNamedProperty a0, [7], [7]
 5008 S> 0x391d20e4dbe @   70 : 0b f9             Ldar r1
 5042 E> 0x391d20e4dc0 @   72 : 32 03 08 09       SetNamedProperty a0, [8], [9]
         0x391d20e4dc4 @   76 : 0e                LdaUndefined 
 5108 S> 0x391d20e4dc5 @   77 : a9                Return 
Constant pool (size = 10)
0x391d20e4dc9: [FixedArray] in OldSpace
 - map: 0x1c0d985412e1 <Map>
 - length: 10
           0: 0x0391d20e4e29 <ScopeInfo FUNCTION_SCOPE>
           1: 0x0391d20e4e99 <SharedFunctionInfo lineSegmentIntersection>
           2: 0x0391d20e5289 <SharedFunctionInfo movingCirclesIntersection>
           3: 0x1c0d98545ab9 <String[6]: #Object>
           4: 0x1c0d98544c11 <String[14]: #defineProperty>
           5: 0x0391d20e5b29 <String[10]: #__esModule>
           6: 0x0391d20e5b49 <ObjectBoilerplateDescription[3]>
           7: 0x0391d20e5131 <String[23]: #lineSegmentIntersection>
           8: 0x0391d20e5681 <String[25]: #movingCirclesIntersection>
           9: 0x0391d20e5b71 <String[8]: #./vector>
Handler Table (size = 0)
Source Position Table (size = 44)
0x0391d20e5b89 <ByteArray[44]>
0x0391d20e4e99 points to: [0x391d20e4f08]
=== [0x391d20e4f08] DISASSEMBLY ===
Parameter count 5
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
  739 S> 0x391d20e4f08 @    0 : 19 04 fa          Mov a1, r0
  770 S> 0x391d20e4f0b @    3 : 19 03 f9          Mov a0, r1
  797 S> 0x391d20e4f0e @    6 : 19 06 f8          Mov a3, r2
  828 S> 0x391d20e4f11 @    9 : 19 05 f7          Mov a2, r3
  864 S> 0x391d20e4f14 @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x391d20e4f16 @   14 : aa 00             ThrowReferenceErrorIfHole [0]
         0x391d20e4f18 @   16 : bb                Star9 
  873 E> 0x391d20e4f19 @   17 : 2d f1 01 00       GetNamedProperty r9, [1], [0]
         0x391d20e4f1d @   21 : bb                Star9 
  880 E> 0x391d20e4f1e @   22 : 2d f1 02 02       GetNamedProperty r9, [2], [2]
         0x391d20e4f22 @   26 : bc                Star8 
  896 E> 0x391d20e4f23 @   27 : 2d 05 03 04       GetNamedProperty a2, [3], [4]
         0x391d20e4f27 @   31 : ba                Star10 
  896 E> 0x391d20e4f28 @   32 : 5e f0 05 03 06    CallProperty1 r10, a2, a0, [6]
         0x391d20e4f2d @   37 : ba                Star10 
  880 E> 0x391d20e4f2e @   38 : 5f f2 f1 f0 04 08 CallProperty2 r8, r9, r10, a1, [8]
         0x391d20e4f34 @   44 : c0                Star4 
  939 S> 0x391d20e4f35 @   45 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x391d20e4f37 @   47 : aa 00             ThrowReferenceErrorIfHole [0]
         0x391d20e4f39 @   49 : bb                Star9 
  948 E> 0x391d20e4f3a @   50 : 2d f1 01 00       GetNamedProperty r9, [1], [0]
         0x391d20e4f3e @   54 : bb                Star9 
  955 E> 0x391d20e4f3f @   55 : 2d f1 02 0a       GetNamedProperty r9, [2], [10]
         0x391d20e4f43 @   59 : bc                Star8 
  955 E> 0x391d20e4f44 @   60 : 5f f2 f1 04 06 0c CallProperty2 r8, r9, a1, a3, [12]
         0x391d20e4f4a @   66 : bf                Star5 
  981 S> 0x391d20e4f4b @   67 : 0c                LdaZero 
  997 E> 0x391d20e4f4c @   68 : 6b f6 0e          TestEqual r4, [14]
         0x391d20e4f4f @   71 : 99 0a             JumpIfFalse [10] (0x391d20e4f59 @ 81)
         0x391d20e4f51 @   73 : 0c                LdaZero 
 1017 E> 0x391d20e4f52 @   74 : 6b f5 0f          TestEqual r5, [15]
         0x391d20e4f55 @   77 : 99 04             JumpIfFalse [4] (0x391d20e4f59 @ 81)
 1064 S> 0x391d20e4f57 @   79 : 0f                LdaNull 
 1076 S> 0x391d20e4f58 @   80 : a9                Return 
 1092 S> 0x391d20e4f59 @   81 : 0c                LdaZero 
 1108 E> 0x391d20e4f5a @   82 : 6b f5 10          TestEqual r5, [16]
         0x391d20e4f5d @   85 : 99 04             JumpIfFalse [4] (0x391d20e4f61 @ 89)
 1154 S> 0x391d20e4f5f @   87 : 0f                LdaNull 
 1166 S> 0x391d20e4f60 @   88 : a9                Return 
 1188 S> 0x391d20e4f61 @   89 : 0b f5             Ldar r5
 1200 E> 0x391d20e4f63 @   91 : 3c f6 11          Div r4, [17]
         0x391d20e4f66 @   94 : be                Star6 
 1230 S> 0x391d20e4f67 @   95 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x391d20e4f69 @   97 : aa 00             ThrowReferenceErrorIfHole [0]
         0x391d20e4f6b @   99 : bb                Star9 
 1239 E> 0x391d20e4f6c @  100 : 2d f1 01 00       GetNamedProperty r9, [1], [0]
         0x391d20e4f70 @  104 : bb                Star9 
 1246 E> 0x391d20e4f71 @  105 : 2d f1 02 13       GetNamedProperty r9, [2], [19]
         0x391d20e4f75 @  109 : bc                Star8 
 1262 E> 0x391d20e4f76 @  110 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x391d20e4f7a @  114 : ba                Star10 
 1262 E> 0x391d20e4f7b @  115 : 5e f0 f7 f9 15    CallProperty1 r10, r3, r1, [21]
         0x391d20e4f80 @  120 : ba                Star10 
 1246 E> 0x391d20e4f81 @  121 : 5f f2 f1 f0 f8 17 CallProperty2 r8, r9, r10, r2, [23]
         0x391d20e4f87 @  127 : bc                Star8 
         0x391d20e4f88 @  128 : 0b f5             Ldar r5
 1280 E> 0x391d20e4f8a @  130 : 3c f2 12          Div r8, [18]
         0x391d20e4f8d @  133 : bd                Star7 
 1299 S> 0x391d20e4f8e @  134 : 0c                LdaZero 
 1307 E> 0x391d20e4f8f @  135 : 70 f3 19          TestGreaterThanOrEqual r7, [25]
         0x391d20e4f92 @  138 : 99 2c             JumpIfFalse [44] (0x391d20e4fbe @ 182)
         0x391d20e4f94 @  140 : 0d 01             LdaSmi [1]
 1320 E> 0x391d20e4f96 @  142 : 6f f3 1a          TestLessThanOrEqual r7, [26]
         0x391d20e4f99 @  145 : 99 25             JumpIfFalse [37] (0x391d20e4fbe @ 182)
         0x391d20e4f9b @  147 : 0c                LdaZero 
 1333 E> 0x391d20e4f9c @  148 : 70 f4 1b          TestGreaterThanOrEqual r6, [27]
         0x391d20e4f9f @  151 : 99 1f             JumpIfFalse [31] (0x391d20e4fbe @ 182)
         0x391d20e4fa1 @  153 : 0d 01             LdaSmi [1]
 1346 E> 0x391d20e4fa3 @  155 : 6f f4 1c          TestLessThanOrEqual r6, [28]
         0x391d20e4fa6 @  158 : 99 18             JumpIfFalse [24] (0x391d20e4fbe @ 182)
 1373 S> 0x391d20e4fa8 @  160 : 2d f9 04 1d       GetNamedProperty r1, [4], [29]
         0x391d20e4fac @  164 : bc                Star8 
 1380 E> 0x391d20e4fad @  165 : 2d fa 05 1f       GetNamedProperty r0, [5], [31]
         0x391d20e4fb1 @  169 : ba                Star10 
 1380 E> 0x391d20e4fb2 @  170 : 5e f0 fa f3 21    CallProperty1 r10, r0, r7, [33]
         0x391d20e4fb7 @  175 : ba                Star10 
 1373 E> 0x391d20e4fb8 @  176 : 5e f2 f9 f0 23    CallProperty1 r8, r1, r10, [35]
 1394 S> 0x391d20e4fbd @  181 : a9                Return 
 1420 S> 0x391d20e4fbe @  182 : 0f                LdaNull 
 1432 S> 0x391d20e4fbf @  183 : a9                Return 
Constant pool (size = 6)
0x391d20e4fc1: [FixedArray] in OldSpace
 - map: 0x1c0d985412e1 <Map>
 - length: 6
           0: 0x0391d20e4e81 <String[8]: #vector_1>
           1: 0x0391d20e5001 <String[6]: #Vector>
           2: 0x0391d20e5019 <String[12]: #crossProduct>
           3: 0x0391d20e5039 <String[8]: #subtract>
           4: 0x1c0d98544569 <String[3]: #add>
           5: 0x0391d20e5051 <String[8]: #multiply>
Handler Table (size = 0)
Source Position Table (size = 97)
0x0391d20e5069 <ByteArray[97]>
0x0391d20e5289 points to: [0x391d20e52f8]
=== [0x391d20e52f8] DISASSEMBLY ===
Parameter count 7
Register count 19
Frame size 152
OSR urgency: 0
Bytecode age: 0
 1534 E> 0x391d20e52f8 @    0 : 83 00 05          CreateFunctionContext [0], [5]
         0x391d20e52fb @    3 : 1a ed             PushContext r13
         0x391d20e52fd @    5 : 0b 03             Ldar a0
         0x391d20e52ff @    7 : 25 06             StaCurrentContextSlot [6]
         0x391d20e5301 @    9 : 0b 04             Ldar a1
         0x391d20e5303 @   11 : 25 05             StaCurrentContextSlot [5]
         0x391d20e5305 @   13 : 0b 05             Ldar a2
         0x391d20e5307 @   15 : 25 04             StaCurrentContextSlot [4]
         0x391d20e5309 @   17 : 0b 06             Ldar a3
         0x391d20e530b @   19 : 25 03             StaCurrentContextSlot [3]
         0x391d20e530d @   21 : 0b 07             Ldar a4
         0x391d20e530f @   23 : 25 02             StaCurrentContextSlot [2]
 3700 S> 0x391d20e5311 @   25 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x391d20e5313 @   27 : b6                Star14 
 3713 E> 0x391d20e5314 @   28 : 2d ec 01 00       GetNamedProperty r14, [1], [0]
         0x391d20e5318 @   32 : c4                Star0 
 3732 S> 0x391d20e5319 @   33 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x391d20e531b @   35 : b6                Star14 
 3745 E> 0x391d20e531c @   36 : 2d ec 02 02       GetNamedProperty r14, [2], [2]
         0x391d20e5320 @   40 : c3                Star1 
 3764 S> 0x391d20e5321 @   41 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x391d20e5323 @   43 : b6                Star14 
 3793 E> 0x391d20e5324 @   44 : 2d ec 01 04       GetNamedProperty r14, [1], [4]
         0x391d20e5328 @   48 : c2                Star2 
 3812 S> 0x391d20e5329 @   49 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x391d20e532b @   51 : b6                Star14 
 3841 E> 0x391d20e532c @   52 : 2d ec 02 06       GetNamedProperty r14, [2], [6]
         0x391d20e5330 @   56 : c1                Star3 
 3860 S> 0x391d20e5331 @   57 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x391d20e5333 @   59 : b6                Star14 
 3873 E> 0x391d20e5334 @   60 : 2d ec 01 08       GetNamedProperty r14, [1], [8]
         0x391d20e5338 @   64 : c0                Star4 
 3892 S> 0x391d20e5339 @   65 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x391d20e533b @   67 : b6                Star14 
 3905 E> 0x391d20e533c @   68 : 2d ec 02 0a       GetNamedProperty r14, [2], [10]
         0x391d20e5340 @   72 : bf                Star5 
 3924 S> 0x391d20e5341 @   73 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x391d20e5343 @   75 : b6                Star14 
 3953 E> 0x391d20e5344 @   76 : 2d ec 01 0c       GetNamedProperty r14, [1], [12]
         0x391d20e5348 @   80 : be                Star6 
 3972 S> 0x391d20e5349 @   81 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x391d20e534b @   83 : b6                Star14 
 4001 E> 0x391d20e534c @   84 : 2d ec 02 0e       GetNamedProperty r14, [2], [14]
         0x391d20e5350 @   88 : bd                Star7 
 4018 S> 0x391d20e5351 @   89 : 0b f8             Ldar r2
 4022 E> 0x391d20e5353 @   91 : 3b f8 10          Mul r2, [16]
         0x391d20e5356 @   94 : b6                Star14 
         0x391d20e5357 @   95 : 0b f7             Ldar r3
 4034 E> 0x391d20e5359 @   97 : 3b f7 11          Mul r3, [17]
 4028 E> 0x391d20e535c @  100 : 39 ec 12          Add r14, [18]
         0x391d20e535f @  103 : b6                Star14 
         0x391d20e5360 @  104 : 0b f4             Ldar r6
 4046 E> 0x391d20e5362 @  106 : 3b f4 13          Mul r6, [19]
 4040 E> 0x391d20e5365 @  109 : 39 ec 14          Add r14, [20]
         0x391d20e5368 @  112 : b6                Star14 
         0x391d20e5369 @  113 : 0b f3             Ldar r7
 4058 E> 0x391d20e536b @  115 : 3b f3 15          Mul r7, [21]
 4052 E> 0x391d20e536e @  118 : 39 ec 16          Add r14, [22]
         0x391d20e5371 @  121 : b6                Star14 
         0x391d20e5372 @  122 : 0d 02             LdaSmi [2]
         0x391d20e5374 @  124 : b5                Star15 
         0x391d20e5375 @  125 : 0b f8             Ldar r2
 4068 E> 0x391d20e5377 @  127 : 3b eb 17          Mul r15, [23]
         0x391d20e537a @  130 : b5                Star15 
         0x391d20e537b @  131 : 0b f4             Ldar r6
 4074 E> 0x391d20e537d @  133 : 3b eb 18          Mul r15, [24]
 4064 E> 0x391d20e5380 @  136 : 3a ec 19          Sub r14, [25]
         0x391d20e5383 @  139 : b6                Star14 
         0x391d20e5384 @  140 : 0d 02             LdaSmi [2]
         0x391d20e5386 @  142 : b5                Star15 
         0x391d20e5387 @  143 : 0b f7             Ldar r3
 4084 E> 0x391d20e5389 @  145 : 3b eb 1a          Mul r15, [26]
         0x391d20e538c @  148 : b5                Star15 
         0x391d20e538d @  149 : 0b f3             Ldar r7
 4090 E> 0x391d20e538f @  151 : 3b eb 1b          Mul r15, [27]
 4080 E> 0x391d20e5392 @  154 : 3a ec 1c          Sub r14, [28]
         0x391d20e5395 @  157 : bc                Star8 
 4111 S> 0x391d20e5396 @  158 : 0b fa             Ldar r0
 4120 E> 0x391d20e5398 @  160 : 3b f8 1e          Mul r2, [30]
         0x391d20e539b @  163 : b6                Star14 
         0x391d20e539c @  164 : 0b f9             Ldar r1
 4132 E> 0x391d20e539e @  166 : 3b f7 1f          Mul r3, [31]
 4126 E> 0x391d20e53a1 @  169 : 39 ec 20          Add r14, [32]
         0x391d20e53a4 @  172 : b6                Star14 
         0x391d20e53a5 @  173 : 0b f6             Ldar r4
 4144 E> 0x391d20e53a7 @  175 : 3b f4 21          Mul r6, [33]
 4138 E> 0x391d20e53aa @  178 : 39 ec 22          Add r14, [34]
         0x391d20e53ad @  181 : b6                Star14 
         0x391d20e53ae @  182 : 0b f5             Ldar r5
 4156 E> 0x391d20e53b0 @  184 : 3b f3 23          Mul r7, [35]
 4150 E> 0x391d20e53b3 @  187 : 39 ec 24          Add r14, [36]
         0x391d20e53b6 @  190 : b6                Star14 
         0x391d20e53b7 @  191 : 0b f6             Ldar r4
 4168 E> 0x391d20e53b9 @  193 : 3b f8 25          Mul r2, [37]
 4162 E> 0x391d20e53bc @  196 : 3a ec 26          Sub r14, [38]
         0x391d20e53bf @  199 : b6                Star14 
         0x391d20e53c0 @  200 : 0b f5             Ldar r5
 4180 E> 0x391d20e53c2 @  202 : 3b f7 27          Mul r3, [39]
 4174 E> 0x391d20e53c5 @  205 : 3a ec 28          Sub r14, [40]
         0x391d20e53c8 @  208 : b6                Star14 
         0x391d20e53c9 @  209 : 0b fa             Ldar r0
 4192 E> 0x391d20e53cb @  211 : 3b f4 29          Mul r6, [41]
 4186 E> 0x391d20e53ce @  214 : 3a ec 2a          Sub r14, [42]
         0x391d20e53d1 @  217 : b6                Star14 
         0x391d20e53d2 @  218 : 0b f9             Ldar r1
 4204 E> 0x391d20e53d4 @  220 : 3b f3 2b          Mul r7, [43]
 4198 E> 0x391d20e53d7 @  223 : 3a ec 2c          Sub r14, [44]
 4113 E> 0x391d20e53da @  226 : 47 02 1d          MulSmi [2], [29]
         0x391d20e53dd @  229 : bb                Star9 
 4226 S> 0x391d20e53de @  230 : 0b fa             Ldar r0
 4230 E> 0x391d20e53e0 @  232 : 3b fa 2d          Mul r0, [45]
         0x391d20e53e3 @  235 : b6                Star14 
         0x391d20e53e4 @  236 : 0b f9             Ldar r1
 4242 E> 0x391d20e53e6 @  238 : 3b f9 2e          Mul r1, [46]
 4236 E> 0x391d20e53e9 @  241 : 39 ec 2f          Add r14, [47]
         0x391d20e53ec @  244 : b6                Star14 
         0x391d20e53ed @  245 : 0b f6             Ldar r4
 4254 E> 0x391d20e53ef @  247 : 3b f6 30          Mul r4, [48]
 4248 E> 0x391d20e53f2 @  250 : 39 ec 31          Add r14, [49]
         0x391d20e53f5 @  253 : b6                Star14 
         0x391d20e53f6 @  254 : 0b f5             Ldar r5
 4266 E> 0x391d20e53f8 @  256 : 3b f5 32          Mul r5, [50]
 4260 E> 0x391d20e53fb @  259 : 39 ec 33          Add r14, [51]
         0x391d20e53fe @  262 : b6                Star14 
         0x391d20e53ff @  263 : 0d 02             LdaSmi [2]
         0x391d20e5401 @  265 : b5                Star15 
         0x391d20e5402 @  266 : 0b fa             Ldar r0
 4276 E> 0x391d20e5404 @  268 : 3b eb 34          Mul r15, [52]
         0x391d20e5407 @  271 : b5                Star15 
         0x391d20e5408 @  272 : 0b f6             Ldar r4
 4282 E> 0x391d20e540a @  274 : 3b eb 35          Mul r15, [53]
 4272 E> 0x391d20e540d @  277 : 3a ec 36          Sub r14, [54]
         0x391d20e5410 @  280 : b6                Star14 
         0x391d20e5411 @  281 : 0d 02             LdaSmi [2]
         0x391d20e5413 @  283 : b5                Star15 
         0x391d20e5414 @  284 : 0b f9             Ldar r1
 4292 E> 0x391d20e5416 @  286 : 3b eb 37          Mul r15, [55]
         0x391d20e5419 @  289 : b5                Star15 
         0x391d20e541a @  290 : 0b f5             Ldar r5
 4298 E> 0x391d20e541c @  292 : 3b eb 38          Mul r15, [56]
 4288 E> 0x391d20e541f @  295 : 3a ec 39          Sub r14, [57]
         0x391d20e5422 @  298 : b6                Star14 
         0x391d20e5423 @  299 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x391d20e5425 @  301 : b5                Star15 
         0x391d20e5426 @  302 : 0b 08             Ldar a5
 4321 E> 0x391d20e5428 @  304 : 39 eb 3b          Add r15, [59]
         0x391d20e542b @  307 : b5                Star15 
         0x391d20e542c @  308 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x391d20e542e @  310 : 18 ea             Star r16
         0x391d20e5430 @  312 : 0b 08             Ldar a5
 4355 E> 0x391d20e5432 @  314 : 39 ea 3c          Add r16, [60]
 4338 E> 0x391d20e5435 @  317 : 3b eb 3a          Mul r15, [58]
 4304 E> 0x391d20e5438 @  320 : 3a ec 3d          Sub r14, [61]
         0x391d20e543b @  323 : ba                Star10 
 4396 S> 0x391d20e543c @  324 : 0b f1             Ldar r9
 4398 E> 0x391d20e543e @  326 : 3b f1 3f          Mul r9, [63]
         0x391d20e5441 @  329 : b6                Star14 
         0x391d20e5442 @  330 : 0d 04             LdaSmi [4]
         0x391d20e5444 @  332 : b5                Star15 
         0x391d20e5445 @  333 : 0b f2             Ldar r8
 4406 E> 0x391d20e5447 @  335 : 3b eb 40          Mul r15, [64]
         0x391d20e544a @  338 : b5                Star15 
         0x391d20e544b @  339 : 0b f0             Ldar r10
 4410 E> 0x391d20e544d @  341 : 3b eb 41          Mul r15, [65]
 4402 E> 0x391d20e5450 @  344 : 3a ec 3e          Sub r14, [62]
         0x391d20e5453 @  347 : b9                Star11 
 4419 S> 0x391d20e5454 @  348 : 0c                LdaZero 
 4434 E> 0x391d20e5455 @  349 : 6d ef 42          TestLessThan r11, [66]
         0x391d20e5458 @  352 : 99 05             JumpIfFalse [5] (0x391d20e545d @ 357)
 4449 S> 0x391d20e545a @  354 : 7b 43             CreateEmptyArrayLiteral [67]
 4459 S> 0x391d20e545c @  356 : a9                Return 
 4505 S> 0x391d20e545d @  357 : 79 03 44 25       CreateArrayLiteral [3], [68], #37
         0x391d20e5461 @  361 : b5                Star15 
         0x391d20e5462 @  362 : 0c                LdaZero 
         0x391d20e5463 @  363 : b6                Star14 
         0x391d20e5464 @  364 : 0b f1             Ldar r9
 4507 E> 0x391d20e5466 @  366 : 53 47             Negate [71]
         0x391d20e5468 @  368 : 18 ea             Star r16
 4512 E> 0x391d20e546a @  370 : 21 04 48          LdaGlobal [4], [72]
         0x391d20e546d @  373 : 18 e8             Star r18
 4517 E> 0x391d20e546f @  375 : 2d e8 05 4a       GetNamedProperty r18, [5], [74]
         0x391d20e5473 @  379 : 18 e9             Star r17
 4517 E> 0x391d20e5475 @  381 : 5e e9 e8 ef 4c    CallProperty1 r17, r18, r11, [76]
 4510 E> 0x391d20e547a @  386 : 39 ea 46          Add r16, [70]
         0x391d20e547d @  389 : 18 ea             Star r16
         0x391d20e547f @  391 : 0b f2             Ldar r8
 4540 E> 0x391d20e5481 @  393 : 47 02 4e          MulSmi [2], [78]
 4535 E> 0x391d20e5484 @  396 : 3c ea 45          Div r16, [69]
         0x391d20e5487 @  399 : 36 eb ec 4f       StaInArrayLiteral r15, r14, [79]
         0x391d20e548b @  403 : 0d 01             LdaSmi [1]
         0x391d20e548d @  405 : b6                Star14 
         0x391d20e548e @  406 : 0b f1             Ldar r9
 4547 E> 0x391d20e5490 @  408 : 53 53             Negate [83]
         0x391d20e5492 @  410 : 18 ea             Star r16
 4552 E> 0x391d20e5494 @  412 : 21 04 48          LdaGlobal [4], [72]
         0x391d20e5497 @  415 : 18 e8             Star r18
 4557 E> 0x391d20e5499 @  417 : 2d e8 05 4a       GetNamedProperty r18, [5], [74]
         0x391d20e549d @  421 : 18 e9             Star r17
 4557 E> 0x391d20e549f @  423 : 5e e9 e8 ef 54    CallProperty1 r17, r18, r11, [84]
 4550 E> 0x391d20e54a4 @  428 : 3a ea 52          Sub r16, [82]
         0x391d20e54a7 @  431 : 18 ea             Star r16
         0x391d20e54a9 @  433 : 0b f2             Ldar r8
 4580 E> 0x391d20e54ab @  435 : 47 02 56          MulSmi [2], [86]
 4575 E> 0x391d20e54ae @  438 : 3c ea 51          Div r16, [81]
         0x391d20e54b1 @  441 : 36 eb ec 4f       StaInArrayLiteral r15, r14, [79]
         0x391d20e54b5 @  445 : 19 eb ee          Mov r15, r12
 4608 S> 0x391d20e54b8 @  448 : 2d eb 06 57       GetNamedProperty r15, [6], [87]
         0x391d20e54bc @  452 : b6                Star14 
         0x391d20e54bd @  453 : 80 07 00 02       CreateClosure [7], [0], #2
         0x391d20e54c1 @  457 : 18 ea             Star r16
 4608 E> 0x391d20e54c3 @  459 : 5e ec eb ea 59    CallProperty1 r14, r15, r16, [89]
 5005 S> 0x391d20e54c8 @  464 : a9                Return 
Constant pool (size = 8)
0x391d20e54d1: [FixedArray] in OldSpace
 - map: 0x1c0d985412e1 <Map>
 - length: 8
           0: 0x0391d20e5521 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1e954b4d8ac9 <String[1]: #x>
           2: 0x1e954b4d8ae1 <String[1]: #y>
           3: 0x0391d20e56e1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x0391d20e56f9 <FixedArray[2]>>
           4: 0x1e954b4da991 <String[4]: #Math>
           5: 0x1e954b4dac01 <String[4]: #sqrt>
           6: 0x1e954b4c9ea9 <String[3]: #map>
           7: 0x0391d20e5761 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 199)
0x0391d20e59e1 <ByteArray[199]>
0x0391d20e5761 points to: [0x391d20e57d0]
=== [0x391d20e57d0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 4656 S> 0x391d20e57d0 @    0 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x391d20e57d2 @    2 : c1                Star3 
 4669 E> 0x391d20e57d3 @    3 : 2d f7 00 00       GetNamedProperty r3, [0], [0]
         0x391d20e57d7 @    7 : c2                Star2 
         0x391d20e57d8 @    8 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x391d20e57da @   10 : bf                Star5 
 4702 E> 0x391d20e57db @   11 : 2d f5 01 02       GetNamedProperty r5, [1], [2]
         0x391d20e57df @   15 : c0                Star4 
 4702 E> 0x391d20e57e0 @   16 : 5e f6 f5 03 04    CallProperty1 r4, r5, a0, [4]
         0x391d20e57e5 @   21 : c0                Star4 
 4669 E> 0x391d20e57e6 @   22 : 5e f8 f7 f6 06    CallProperty1 r2, r3, r4, [6]
         0x391d20e57eb @   27 : c4                Star0 
 4753 S> 0x391d20e57ec @   28 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x391d20e57ee @   30 : c1                Star3 
 4766 E> 0x391d20e57ef @   31 : 2d f7 00 08       GetNamedProperty r3, [0], [8]
         0x391d20e57f3 @   35 : c2                Star2 
         0x391d20e57f4 @   36 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x391d20e57f6 @   38 : bf                Star5 
 4799 E> 0x391d20e57f7 @   39 : 2d f5 01 0a       GetNamedProperty r5, [1], [10]
         0x391d20e57fb @   43 : c0                Star4 
 4799 E> 0x391d20e57fc @   44 : 5e f6 f5 03 0c    CallProperty1 r4, r5, a0, [12]
         0x391d20e5801 @   49 : c0                Star4 
 4766 E> 0x391d20e5802 @   50 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x391d20e5807 @   55 : c3                Star1 
 4821 S> 0x391d20e5808 @   56 : 7c 02 10 29       CreateObjectLiteral [2], [16], #41
         0x391d20e580c @   60 : c2                Star2 
         0x391d20e580d @   61 : 0b 03             Ldar a0
 4845 E> 0x391d20e580f @   63 : 33 f8 03 11       DefineNamedOwnProperty r2, [3], [17]
 4895 E> 0x391d20e5813 @   67 : 2d f9 04 13       GetNamedProperty r1, [4], [19]
         0x391d20e5817 @   71 : bf                Star5 
 4895 E> 0x391d20e5818 @   72 : 5e f5 f9 fa 15    CallProperty1 r5, r1, r0, [21]
         0x391d20e581d @   77 : bf                Star5 
 4925 E> 0x391d20e581e @   78 : 2d f5 05 17       GetNamedProperty r5, [5], [23]
         0x391d20e5822 @   82 : bf                Star5 
 4936 E> 0x391d20e5823 @   83 : 2d f5 01 19       GetNamedProperty r5, [1], [25]
         0x391d20e5827 @   87 : c0                Star4 
         0x391d20e5828 @   88 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x391d20e582a @   90 : be                Star6 
 4937 E> 0x391d20e582b @   91 : 5e f6 f5 f4 1b    CallProperty1 r4, r5, r6, [27]
         0x391d20e5830 @   96 : c0                Star4 
 4960 E> 0x391d20e5831 @   97 : 2d f6 00 1d       GetNamedProperty r4, [0], [29]
         0x391d20e5835 @  101 : c1                Star3 
 4961 E> 0x391d20e5836 @  102 : 5e f7 f6 fa 1f    CallProperty1 r3, r4, r0, [31]
         0x391d20e583b @  107 : 33 f8 06 21       DefineNamedOwnProperty r2, [6], [33]
         0x391d20e583f @  111 : 0b f8             Ldar r2
 4997 S> 0x391d20e5841 @  113 : a9                Return 
Constant pool (size = 7)
0x391d20e5849: [FixedArray] in OldSpace
 - map: 0x1c0d985412e1 <Map>
 - length: 7
           0: 0x1c0d98544569 <String[3]: #add>
           1: 0x0391d20e5051 <String[8]: #multiply>
           2: 0x0391d20e5891 <ObjectBoilerplateDescription[5]>
           3: 0x0391d20e58c9 <String[1]: #t>
           4: 0x0391d20e5039 <String[8]: #subtract>
           5: 0x0391d20e5901 <String[10]: #normalized>
           6: 0x0391d20e58e1 <String[12]: #intersection>
Handler Table (size = 0)
Source Position Table (size = 53)
0x0391d20e5921 <ByteArray[53]>
Boilerplate at 0x0391d20e5891: 
0x391d20e5891: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1c0d98542059 <Map>
 - length: 5
           0: 8
           1: 0x0391d20e58c9 <String[1]: #t>
           2: 0x1c0d98541501 <Odd Oddball: uninitialized>
           3: 0x0391d20e58e1 <String[12]: #intersection>
           4: 0x1c0d98541501 <Odd Oddball: uninitialized>
Boilerplate at 0x0391d20e5b49: 
0x391d20e5b49: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1c0d98542059 <Map>
 - length: 3
           0: 8
           1: 0x1c0d98546419 <String[5]: #value>
           2: 0x1c0d98541729 <true>
<< OUTPUTTING DISASSEMBLY END >>
