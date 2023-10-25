<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x27ac343e4bb8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x27ac343e4bb8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x27ac343e4bbc @    4 : c4                Star0 
 5111 S> 0x27ac343e4bbd @    5 : a9                Return 
Constant pool (size = 1)
0x27ac343e4bc1: [FixedArray] in OldSpace
 - map: 0x396b84dc12e1 <Map>
 - length: 1
           0: 0x27ac343e4bd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x27ac343e5ab9 <ByteArray[8]>
0x27ac343e4bd9 points to: [0x27ac343e4c48]
=== [0x27ac343e4c48] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   10 E> 0x27ac343e4c48 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x27ac343e4c4b @    3 : 1a f8             PushContext r2
         0x27ac343e4c4d @    5 : 10                LdaTheHole 
         0x27ac343e4c4e @    6 : 25 02             StaCurrentContextSlot [2]
         0x27ac343e4c50 @    8 : 80 01 00 02       CreateClosure [1], [0], #2
         0x27ac343e4c54 @   12 : c4                Star0 
         0x27ac343e4c55 @   13 : 80 02 01 02       CreateClosure [2], [1], #2
         0x27ac343e4c59 @   17 : c3                Star1 
   76 S> 0x27ac343e4c5a @   18 : 21 03 00          LdaGlobal [3], [0]
         0x27ac343e4c5d @   21 : c0                Star4 
   83 E> 0x27ac343e4c5e @   22 : 2d f6 04 02       GetNamedProperty r4, [4], [2]
         0x27ac343e4c62 @   26 : c1                Star3 
         0x27ac343e4c63 @   27 : 13 05             LdaConstant [5]
         0x27ac343e4c65 @   29 : be                Star6 
   98 E> 0x27ac343e4c66 @   30 : 7c 06 04 29       CreateObjectLiteral [6], [4], #41
         0x27ac343e4c6a @   34 : bd                Star7 
         0x27ac343e4c6b @   35 : 19 03 f5          Mov a0, r5
   83 E> 0x27ac343e4c6e @   38 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x27ac343e4c73 @   43 : 0e                LdaUndefined 
         0x27ac343e4c74 @   44 : bf                Star5 
  207 E> 0x27ac343e4c75 @   45 : 32 03 07 07       SetNamedProperty a0, [7], [7]
         0x27ac343e4c79 @   49 : 0b f5             Ldar r5
  173 E> 0x27ac343e4c7b @   51 : 32 03 08 09       SetNamedProperty a0, [8], [9]
  234 S> 0x27ac343e4c7f @   55 : 13 09             LdaConstant [9]
         0x27ac343e4c81 @   57 : c0                Star4 
  234 E> 0x27ac343e4c82 @   58 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
  234 E> 0x27ac343e4c86 @   62 : 25 02             StaCurrentContextSlot [2]
 1441 S> 0x27ac343e4c88 @   64 : 0b fa             Ldar r0
 1473 E> 0x27ac343e4c8a @   66 : 32 03 07 07       SetNamedProperty a0, [7], [7]
 5008 S> 0x27ac343e4c8e @   70 : 0b f9             Ldar r1
 5042 E> 0x27ac343e4c90 @   72 : 32 03 08 09       SetNamedProperty a0, [8], [9]
         0x27ac343e4c94 @   76 : 0e                LdaUndefined 
 5108 S> 0x27ac343e4c95 @   77 : a9                Return 
Constant pool (size = 10)
0x27ac343e4c99: [FixedArray] in OldSpace
 - map: 0x396b84dc12e1 <Map>
 - length: 10
           0: 0x27ac343e4cf9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x27ac343e4d69 <SharedFunctionInfo lineSegmentIntersection>
           2: 0x27ac343e5159 <SharedFunctionInfo movingCirclesIntersection>
           3: 0x396b84dc5ab9 <String[6]: #Object>
           4: 0x396b84dc4c11 <String[14]: #defineProperty>
           5: 0x27ac343e59f9 <String[10]: #__esModule>
           6: 0x27ac343e5a19 <ObjectBoilerplateDescription[3]>
           7: 0x27ac343e5001 <String[23]: #lineSegmentIntersection>
           8: 0x27ac343e5551 <String[25]: #movingCirclesIntersection>
           9: 0x27ac343e5a41 <String[8]: #./vector>
Handler Table (size = 0)
Source Position Table (size = 44)
0x27ac343e5a59 <ByteArray[44]>
0x27ac343e4d69 points to: [0x27ac343e4dd8]
=== [0x27ac343e4dd8] DISASSEMBLY ===
Parameter count 5
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
  739 S> 0x27ac343e4dd8 @    0 : 19 04 fa          Mov a1, r0
  770 S> 0x27ac343e4ddb @    3 : 19 03 f9          Mov a0, r1
  797 S> 0x27ac343e4dde @    6 : 19 06 f8          Mov a3, r2
  828 S> 0x27ac343e4de1 @    9 : 19 05 f7          Mov a2, r3
  864 S> 0x27ac343e4de4 @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x27ac343e4de6 @   14 : aa 00             ThrowReferenceErrorIfHole [0]
         0x27ac343e4de8 @   16 : bb                Star9 
  873 E> 0x27ac343e4de9 @   17 : 2d f1 01 00       GetNamedProperty r9, [1], [0]
         0x27ac343e4ded @   21 : bb                Star9 
  880 E> 0x27ac343e4dee @   22 : 2d f1 02 02       GetNamedProperty r9, [2], [2]
         0x27ac343e4df2 @   26 : bc                Star8 
  896 E> 0x27ac343e4df3 @   27 : 2d 05 03 04       GetNamedProperty a2, [3], [4]
         0x27ac343e4df7 @   31 : ba                Star10 
  896 E> 0x27ac343e4df8 @   32 : 5e f0 05 03 06    CallProperty1 r10, a2, a0, [6]
         0x27ac343e4dfd @   37 : ba                Star10 
  880 E> 0x27ac343e4dfe @   38 : 5f f2 f1 f0 04 08 CallProperty2 r8, r9, r10, a1, [8]
         0x27ac343e4e04 @   44 : c0                Star4 
  939 S> 0x27ac343e4e05 @   45 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x27ac343e4e07 @   47 : aa 00             ThrowReferenceErrorIfHole [0]
         0x27ac343e4e09 @   49 : bb                Star9 
  948 E> 0x27ac343e4e0a @   50 : 2d f1 01 00       GetNamedProperty r9, [1], [0]
         0x27ac343e4e0e @   54 : bb                Star9 
  955 E> 0x27ac343e4e0f @   55 : 2d f1 02 0a       GetNamedProperty r9, [2], [10]
         0x27ac343e4e13 @   59 : bc                Star8 
  955 E> 0x27ac343e4e14 @   60 : 5f f2 f1 04 06 0c CallProperty2 r8, r9, a1, a3, [12]
         0x27ac343e4e1a @   66 : bf                Star5 
  981 S> 0x27ac343e4e1b @   67 : 0c                LdaZero 
  997 E> 0x27ac343e4e1c @   68 : 6b f6 0e          TestEqual r4, [14]
         0x27ac343e4e1f @   71 : 99 0a             JumpIfFalse [10] (0x27ac343e4e29 @ 81)
         0x27ac343e4e21 @   73 : 0c                LdaZero 
 1017 E> 0x27ac343e4e22 @   74 : 6b f5 0f          TestEqual r5, [15]
         0x27ac343e4e25 @   77 : 99 04             JumpIfFalse [4] (0x27ac343e4e29 @ 81)
 1064 S> 0x27ac343e4e27 @   79 : 0f                LdaNull 
 1076 S> 0x27ac343e4e28 @   80 : a9                Return 
 1092 S> 0x27ac343e4e29 @   81 : 0c                LdaZero 
 1108 E> 0x27ac343e4e2a @   82 : 6b f5 10          TestEqual r5, [16]
         0x27ac343e4e2d @   85 : 99 04             JumpIfFalse [4] (0x27ac343e4e31 @ 89)
 1154 S> 0x27ac343e4e2f @   87 : 0f                LdaNull 
 1166 S> 0x27ac343e4e30 @   88 : a9                Return 
 1188 S> 0x27ac343e4e31 @   89 : 0b f5             Ldar r5
 1200 E> 0x27ac343e4e33 @   91 : 3c f6 11          Div r4, [17]
         0x27ac343e4e36 @   94 : be                Star6 
 1230 S> 0x27ac343e4e37 @   95 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x27ac343e4e39 @   97 : aa 00             ThrowReferenceErrorIfHole [0]
         0x27ac343e4e3b @   99 : bb                Star9 
 1239 E> 0x27ac343e4e3c @  100 : 2d f1 01 00       GetNamedProperty r9, [1], [0]
         0x27ac343e4e40 @  104 : bb                Star9 
 1246 E> 0x27ac343e4e41 @  105 : 2d f1 02 13       GetNamedProperty r9, [2], [19]
         0x27ac343e4e45 @  109 : bc                Star8 
 1262 E> 0x27ac343e4e46 @  110 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x27ac343e4e4a @  114 : ba                Star10 
 1262 E> 0x27ac343e4e4b @  115 : 5e f0 f7 f9 15    CallProperty1 r10, r3, r1, [21]
         0x27ac343e4e50 @  120 : ba                Star10 
 1246 E> 0x27ac343e4e51 @  121 : 5f f2 f1 f0 f8 17 CallProperty2 r8, r9, r10, r2, [23]
         0x27ac343e4e57 @  127 : bc                Star8 
         0x27ac343e4e58 @  128 : 0b f5             Ldar r5
 1280 E> 0x27ac343e4e5a @  130 : 3c f2 12          Div r8, [18]
         0x27ac343e4e5d @  133 : bd                Star7 
 1299 S> 0x27ac343e4e5e @  134 : 0c                LdaZero 
 1307 E> 0x27ac343e4e5f @  135 : 70 f3 19          TestGreaterThanOrEqual r7, [25]
         0x27ac343e4e62 @  138 : 99 2c             JumpIfFalse [44] (0x27ac343e4e8e @ 182)
         0x27ac343e4e64 @  140 : 0d 01             LdaSmi [1]
 1320 E> 0x27ac343e4e66 @  142 : 6f f3 1a          TestLessThanOrEqual r7, [26]
         0x27ac343e4e69 @  145 : 99 25             JumpIfFalse [37] (0x27ac343e4e8e @ 182)
         0x27ac343e4e6b @  147 : 0c                LdaZero 
 1333 E> 0x27ac343e4e6c @  148 : 70 f4 1b          TestGreaterThanOrEqual r6, [27]
         0x27ac343e4e6f @  151 : 99 1f             JumpIfFalse [31] (0x27ac343e4e8e @ 182)
         0x27ac343e4e71 @  153 : 0d 01             LdaSmi [1]
 1346 E> 0x27ac343e4e73 @  155 : 6f f4 1c          TestLessThanOrEqual r6, [28]
         0x27ac343e4e76 @  158 : 99 18             JumpIfFalse [24] (0x27ac343e4e8e @ 182)
 1373 S> 0x27ac343e4e78 @  160 : 2d f9 04 1d       GetNamedProperty r1, [4], [29]
         0x27ac343e4e7c @  164 : bc                Star8 
 1380 E> 0x27ac343e4e7d @  165 : 2d fa 05 1f       GetNamedProperty r0, [5], [31]
         0x27ac343e4e81 @  169 : ba                Star10 
 1380 E> 0x27ac343e4e82 @  170 : 5e f0 fa f3 21    CallProperty1 r10, r0, r7, [33]
         0x27ac343e4e87 @  175 : ba                Star10 
 1373 E> 0x27ac343e4e88 @  176 : 5e f2 f9 f0 23    CallProperty1 r8, r1, r10, [35]
 1394 S> 0x27ac343e4e8d @  181 : a9                Return 
 1420 S> 0x27ac343e4e8e @  182 : 0f                LdaNull 
 1432 S> 0x27ac343e4e8f @  183 : a9                Return 
Constant pool (size = 6)
0x27ac343e4e91: [FixedArray] in OldSpace
 - map: 0x396b84dc12e1 <Map>
 - length: 6
           0: 0x27ac343e4d51 <String[8]: #vector_1>
           1: 0x27ac343e4ed1 <String[6]: #Vector>
           2: 0x27ac343e4ee9 <String[12]: #crossProduct>
           3: 0x27ac343e4f09 <String[8]: #subtract>
           4: 0x396b84dc4569 <String[3]: #add>
           5: 0x27ac343e4f21 <String[8]: #multiply>
Handler Table (size = 0)
Source Position Table (size = 97)
0x27ac343e4f39 <ByteArray[97]>
0x27ac343e5159 points to: [0x27ac343e51c8]
=== [0x27ac343e51c8] DISASSEMBLY ===
Parameter count 7
Register count 19
Frame size 152
OSR urgency: 0
Bytecode age: 0
 1534 E> 0x27ac343e51c8 @    0 : 83 00 05          CreateFunctionContext [0], [5]
         0x27ac343e51cb @    3 : 1a ed             PushContext r13
         0x27ac343e51cd @    5 : 0b 03             Ldar a0
         0x27ac343e51cf @    7 : 25 06             StaCurrentContextSlot [6]
         0x27ac343e51d1 @    9 : 0b 04             Ldar a1
         0x27ac343e51d3 @   11 : 25 05             StaCurrentContextSlot [5]
         0x27ac343e51d5 @   13 : 0b 05             Ldar a2
         0x27ac343e51d7 @   15 : 25 04             StaCurrentContextSlot [4]
         0x27ac343e51d9 @   17 : 0b 06             Ldar a3
         0x27ac343e51db @   19 : 25 03             StaCurrentContextSlot [3]
         0x27ac343e51dd @   21 : 0b 07             Ldar a4
         0x27ac343e51df @   23 : 25 02             StaCurrentContextSlot [2]
 3700 S> 0x27ac343e51e1 @   25 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x27ac343e51e3 @   27 : b6                Star14 
 3713 E> 0x27ac343e51e4 @   28 : 2d ec 01 00       GetNamedProperty r14, [1], [0]
         0x27ac343e51e8 @   32 : c4                Star0 
 3732 S> 0x27ac343e51e9 @   33 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x27ac343e51eb @   35 : b6                Star14 
 3745 E> 0x27ac343e51ec @   36 : 2d ec 02 02       GetNamedProperty r14, [2], [2]
         0x27ac343e51f0 @   40 : c3                Star1 
 3764 S> 0x27ac343e51f1 @   41 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x27ac343e51f3 @   43 : b6                Star14 
 3793 E> 0x27ac343e51f4 @   44 : 2d ec 01 04       GetNamedProperty r14, [1], [4]
         0x27ac343e51f8 @   48 : c2                Star2 
 3812 S> 0x27ac343e51f9 @   49 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x27ac343e51fb @   51 : b6                Star14 
 3841 E> 0x27ac343e51fc @   52 : 2d ec 02 06       GetNamedProperty r14, [2], [6]
         0x27ac343e5200 @   56 : c1                Star3 
 3860 S> 0x27ac343e5201 @   57 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x27ac343e5203 @   59 : b6                Star14 
 3873 E> 0x27ac343e5204 @   60 : 2d ec 01 08       GetNamedProperty r14, [1], [8]
         0x27ac343e5208 @   64 : c0                Star4 
 3892 S> 0x27ac343e5209 @   65 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x27ac343e520b @   67 : b6                Star14 
 3905 E> 0x27ac343e520c @   68 : 2d ec 02 0a       GetNamedProperty r14, [2], [10]
         0x27ac343e5210 @   72 : bf                Star5 
 3924 S> 0x27ac343e5211 @   73 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x27ac343e5213 @   75 : b6                Star14 
 3953 E> 0x27ac343e5214 @   76 : 2d ec 01 0c       GetNamedProperty r14, [1], [12]
         0x27ac343e5218 @   80 : be                Star6 
 3972 S> 0x27ac343e5219 @   81 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x27ac343e521b @   83 : b6                Star14 
 4001 E> 0x27ac343e521c @   84 : 2d ec 02 0e       GetNamedProperty r14, [2], [14]
         0x27ac343e5220 @   88 : bd                Star7 
 4018 S> 0x27ac343e5221 @   89 : 0b f8             Ldar r2
 4022 E> 0x27ac343e5223 @   91 : 3b f8 10          Mul r2, [16]
         0x27ac343e5226 @   94 : b6                Star14 
         0x27ac343e5227 @   95 : 0b f7             Ldar r3
 4034 E> 0x27ac343e5229 @   97 : 3b f7 11          Mul r3, [17]
 4028 E> 0x27ac343e522c @  100 : 39 ec 12          Add r14, [18]
         0x27ac343e522f @  103 : b6                Star14 
         0x27ac343e5230 @  104 : 0b f4             Ldar r6
 4046 E> 0x27ac343e5232 @  106 : 3b f4 13          Mul r6, [19]
 4040 E> 0x27ac343e5235 @  109 : 39 ec 14          Add r14, [20]
         0x27ac343e5238 @  112 : b6                Star14 
         0x27ac343e5239 @  113 : 0b f3             Ldar r7
 4058 E> 0x27ac343e523b @  115 : 3b f3 15          Mul r7, [21]
 4052 E> 0x27ac343e523e @  118 : 39 ec 16          Add r14, [22]
         0x27ac343e5241 @  121 : b6                Star14 
         0x27ac343e5242 @  122 : 0d 02             LdaSmi [2]
         0x27ac343e5244 @  124 : b5                Star15 
         0x27ac343e5245 @  125 : 0b f8             Ldar r2
 4068 E> 0x27ac343e5247 @  127 : 3b eb 17          Mul r15, [23]
         0x27ac343e524a @  130 : b5                Star15 
         0x27ac343e524b @  131 : 0b f4             Ldar r6
 4074 E> 0x27ac343e524d @  133 : 3b eb 18          Mul r15, [24]
 4064 E> 0x27ac343e5250 @  136 : 3a ec 19          Sub r14, [25]
         0x27ac343e5253 @  139 : b6                Star14 
         0x27ac343e5254 @  140 : 0d 02             LdaSmi [2]
         0x27ac343e5256 @  142 : b5                Star15 
         0x27ac343e5257 @  143 : 0b f7             Ldar r3
 4084 E> 0x27ac343e5259 @  145 : 3b eb 1a          Mul r15, [26]
         0x27ac343e525c @  148 : b5                Star15 
         0x27ac343e525d @  149 : 0b f3             Ldar r7
 4090 E> 0x27ac343e525f @  151 : 3b eb 1b          Mul r15, [27]
 4080 E> 0x27ac343e5262 @  154 : 3a ec 1c          Sub r14, [28]
         0x27ac343e5265 @  157 : bc                Star8 
 4111 S> 0x27ac343e5266 @  158 : 0b fa             Ldar r0
 4120 E> 0x27ac343e5268 @  160 : 3b f8 1e          Mul r2, [30]
         0x27ac343e526b @  163 : b6                Star14 
         0x27ac343e526c @  164 : 0b f9             Ldar r1
 4132 E> 0x27ac343e526e @  166 : 3b f7 1f          Mul r3, [31]
 4126 E> 0x27ac343e5271 @  169 : 39 ec 20          Add r14, [32]
         0x27ac343e5274 @  172 : b6                Star14 
         0x27ac343e5275 @  173 : 0b f6             Ldar r4
 4144 E> 0x27ac343e5277 @  175 : 3b f4 21          Mul r6, [33]
 4138 E> 0x27ac343e527a @  178 : 39 ec 22          Add r14, [34]
         0x27ac343e527d @  181 : b6                Star14 
         0x27ac343e527e @  182 : 0b f5             Ldar r5
 4156 E> 0x27ac343e5280 @  184 : 3b f3 23          Mul r7, [35]
 4150 E> 0x27ac343e5283 @  187 : 39 ec 24          Add r14, [36]
         0x27ac343e5286 @  190 : b6                Star14 
         0x27ac343e5287 @  191 : 0b f6             Ldar r4
 4168 E> 0x27ac343e5289 @  193 : 3b f8 25          Mul r2, [37]
 4162 E> 0x27ac343e528c @  196 : 3a ec 26          Sub r14, [38]
         0x27ac343e528f @  199 : b6                Star14 
         0x27ac343e5290 @  200 : 0b f5             Ldar r5
 4180 E> 0x27ac343e5292 @  202 : 3b f7 27          Mul r3, [39]
 4174 E> 0x27ac343e5295 @  205 : 3a ec 28          Sub r14, [40]
         0x27ac343e5298 @  208 : b6                Star14 
         0x27ac343e5299 @  209 : 0b fa             Ldar r0
 4192 E> 0x27ac343e529b @  211 : 3b f4 29          Mul r6, [41]
 4186 E> 0x27ac343e529e @  214 : 3a ec 2a          Sub r14, [42]
         0x27ac343e52a1 @  217 : b6                Star14 
         0x27ac343e52a2 @  218 : 0b f9             Ldar r1
 4204 E> 0x27ac343e52a4 @  220 : 3b f3 2b          Mul r7, [43]
 4198 E> 0x27ac343e52a7 @  223 : 3a ec 2c          Sub r14, [44]
 4113 E> 0x27ac343e52aa @  226 : 47 02 1d          MulSmi [2], [29]
         0x27ac343e52ad @  229 : bb                Star9 
 4226 S> 0x27ac343e52ae @  230 : 0b fa             Ldar r0
 4230 E> 0x27ac343e52b0 @  232 : 3b fa 2d          Mul r0, [45]
         0x27ac343e52b3 @  235 : b6                Star14 
         0x27ac343e52b4 @  236 : 0b f9             Ldar r1
 4242 E> 0x27ac343e52b6 @  238 : 3b f9 2e          Mul r1, [46]
 4236 E> 0x27ac343e52b9 @  241 : 39 ec 2f          Add r14, [47]
         0x27ac343e52bc @  244 : b6                Star14 
         0x27ac343e52bd @  245 : 0b f6             Ldar r4
 4254 E> 0x27ac343e52bf @  247 : 3b f6 30          Mul r4, [48]
 4248 E> 0x27ac343e52c2 @  250 : 39 ec 31          Add r14, [49]
         0x27ac343e52c5 @  253 : b6                Star14 
         0x27ac343e52c6 @  254 : 0b f5             Ldar r5
 4266 E> 0x27ac343e52c8 @  256 : 3b f5 32          Mul r5, [50]
 4260 E> 0x27ac343e52cb @  259 : 39 ec 33          Add r14, [51]
         0x27ac343e52ce @  262 : b6                Star14 
         0x27ac343e52cf @  263 : 0d 02             LdaSmi [2]
         0x27ac343e52d1 @  265 : b5                Star15 
         0x27ac343e52d2 @  266 : 0b fa             Ldar r0
 4276 E> 0x27ac343e52d4 @  268 : 3b eb 34          Mul r15, [52]
         0x27ac343e52d7 @  271 : b5                Star15 
         0x27ac343e52d8 @  272 : 0b f6             Ldar r4
 4282 E> 0x27ac343e52da @  274 : 3b eb 35          Mul r15, [53]
 4272 E> 0x27ac343e52dd @  277 : 3a ec 36          Sub r14, [54]
         0x27ac343e52e0 @  280 : b6                Star14 
         0x27ac343e52e1 @  281 : 0d 02             LdaSmi [2]
         0x27ac343e52e3 @  283 : b5                Star15 
         0x27ac343e52e4 @  284 : 0b f9             Ldar r1
 4292 E> 0x27ac343e52e6 @  286 : 3b eb 37          Mul r15, [55]
         0x27ac343e52e9 @  289 : b5                Star15 
         0x27ac343e52ea @  290 : 0b f5             Ldar r5
 4298 E> 0x27ac343e52ec @  292 : 3b eb 38          Mul r15, [56]
 4288 E> 0x27ac343e52ef @  295 : 3a ec 39          Sub r14, [57]
         0x27ac343e52f2 @  298 : b6                Star14 
         0x27ac343e52f3 @  299 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x27ac343e52f5 @  301 : b5                Star15 
         0x27ac343e52f6 @  302 : 0b 08             Ldar a5
 4321 E> 0x27ac343e52f8 @  304 : 39 eb 3b          Add r15, [59]
         0x27ac343e52fb @  307 : b5                Star15 
         0x27ac343e52fc @  308 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x27ac343e52fe @  310 : 18 ea             Star r16
         0x27ac343e5300 @  312 : 0b 08             Ldar a5
 4355 E> 0x27ac343e5302 @  314 : 39 ea 3c          Add r16, [60]
 4338 E> 0x27ac343e5305 @  317 : 3b eb 3a          Mul r15, [58]
 4304 E> 0x27ac343e5308 @  320 : 3a ec 3d          Sub r14, [61]
         0x27ac343e530b @  323 : ba                Star10 
 4396 S> 0x27ac343e530c @  324 : 0b f1             Ldar r9
 4398 E> 0x27ac343e530e @  326 : 3b f1 3f          Mul r9, [63]
         0x27ac343e5311 @  329 : b6                Star14 
         0x27ac343e5312 @  330 : 0d 04             LdaSmi [4]
         0x27ac343e5314 @  332 : b5                Star15 
         0x27ac343e5315 @  333 : 0b f2             Ldar r8
 4406 E> 0x27ac343e5317 @  335 : 3b eb 40          Mul r15, [64]
         0x27ac343e531a @  338 : b5                Star15 
         0x27ac343e531b @  339 : 0b f0             Ldar r10
 4410 E> 0x27ac343e531d @  341 : 3b eb 41          Mul r15, [65]
 4402 E> 0x27ac343e5320 @  344 : 3a ec 3e          Sub r14, [62]
         0x27ac343e5323 @  347 : b9                Star11 
 4419 S> 0x27ac343e5324 @  348 : 0c                LdaZero 
 4434 E> 0x27ac343e5325 @  349 : 6d ef 42          TestLessThan r11, [66]
         0x27ac343e5328 @  352 : 99 05             JumpIfFalse [5] (0x27ac343e532d @ 357)
 4449 S> 0x27ac343e532a @  354 : 7b 43             CreateEmptyArrayLiteral [67]
 4459 S> 0x27ac343e532c @  356 : a9                Return 
 4505 S> 0x27ac343e532d @  357 : 79 03 44 25       CreateArrayLiteral [3], [68], #37
         0x27ac343e5331 @  361 : b5                Star15 
         0x27ac343e5332 @  362 : 0c                LdaZero 
         0x27ac343e5333 @  363 : b6                Star14 
         0x27ac343e5334 @  364 : 0b f1             Ldar r9
 4507 E> 0x27ac343e5336 @  366 : 53 47             Negate [71]
         0x27ac343e5338 @  368 : 18 ea             Star r16
 4512 E> 0x27ac343e533a @  370 : 21 04 48          LdaGlobal [4], [72]
         0x27ac343e533d @  373 : 18 e8             Star r18
 4517 E> 0x27ac343e533f @  375 : 2d e8 05 4a       GetNamedProperty r18, [5], [74]
         0x27ac343e5343 @  379 : 18 e9             Star r17
 4517 E> 0x27ac343e5345 @  381 : 5e e9 e8 ef 4c    CallProperty1 r17, r18, r11, [76]
 4510 E> 0x27ac343e534a @  386 : 39 ea 46          Add r16, [70]
         0x27ac343e534d @  389 : 18 ea             Star r16
         0x27ac343e534f @  391 : 0b f2             Ldar r8
 4540 E> 0x27ac343e5351 @  393 : 47 02 4e          MulSmi [2], [78]
 4535 E> 0x27ac343e5354 @  396 : 3c ea 45          Div r16, [69]
         0x27ac343e5357 @  399 : 36 eb ec 4f       StaInArrayLiteral r15, r14, [79]
         0x27ac343e535b @  403 : 0d 01             LdaSmi [1]
         0x27ac343e535d @  405 : b6                Star14 
         0x27ac343e535e @  406 : 0b f1             Ldar r9
 4547 E> 0x27ac343e5360 @  408 : 53 53             Negate [83]
         0x27ac343e5362 @  410 : 18 ea             Star r16
 4552 E> 0x27ac343e5364 @  412 : 21 04 48          LdaGlobal [4], [72]
         0x27ac343e5367 @  415 : 18 e8             Star r18
 4557 E> 0x27ac343e5369 @  417 : 2d e8 05 4a       GetNamedProperty r18, [5], [74]
         0x27ac343e536d @  421 : 18 e9             Star r17
 4557 E> 0x27ac343e536f @  423 : 5e e9 e8 ef 54    CallProperty1 r17, r18, r11, [84]
 4550 E> 0x27ac343e5374 @  428 : 3a ea 52          Sub r16, [82]
         0x27ac343e5377 @  431 : 18 ea             Star r16
         0x27ac343e5379 @  433 : 0b f2             Ldar r8
 4580 E> 0x27ac343e537b @  435 : 47 02 56          MulSmi [2], [86]
 4575 E> 0x27ac343e537e @  438 : 3c ea 51          Div r16, [81]
         0x27ac343e5381 @  441 : 36 eb ec 4f       StaInArrayLiteral r15, r14, [79]
         0x27ac343e5385 @  445 : 19 eb ee          Mov r15, r12
 4608 S> 0x27ac343e5388 @  448 : 2d eb 06 57       GetNamedProperty r15, [6], [87]
         0x27ac343e538c @  452 : b6                Star14 
         0x27ac343e538d @  453 : 80 07 00 02       CreateClosure [7], [0], #2
         0x27ac343e5391 @  457 : 18 ea             Star r16
 4608 E> 0x27ac343e5393 @  459 : 5e ec eb ea 59    CallProperty1 r14, r15, r16, [89]
 5005 S> 0x27ac343e5398 @  464 : a9                Return 
Constant pool (size = 8)
0x27ac343e53a1: [FixedArray] in OldSpace
 - map: 0x396b84dc12e1 <Map>
 - length: 8
           0: 0x27ac343e53f1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x338bef698ac9 <String[1]: #x>
           2: 0x338bef698ae1 <String[1]: #y>
           3: 0x27ac343e55b1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x27ac343e55c9 <FixedArray[2]>>
           4: 0x338bef69a991 <String[4]: #Math>
           5: 0x338bef69ac01 <String[4]: #sqrt>
           6: 0x338bef689ea9 <String[3]: #map>
           7: 0x27ac343e5631 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 199)
0x27ac343e58b1 <ByteArray[199]>
0x27ac343e5631 points to: [0x27ac343e56a0]
=== [0x27ac343e56a0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 4656 S> 0x27ac343e56a0 @    0 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x27ac343e56a2 @    2 : c1                Star3 
 4669 E> 0x27ac343e56a3 @    3 : 2d f7 00 00       GetNamedProperty r3, [0], [0]
         0x27ac343e56a7 @    7 : c2                Star2 
         0x27ac343e56a8 @    8 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x27ac343e56aa @   10 : bf                Star5 
 4702 E> 0x27ac343e56ab @   11 : 2d f5 01 02       GetNamedProperty r5, [1], [2]
         0x27ac343e56af @   15 : c0                Star4 
 4702 E> 0x27ac343e56b0 @   16 : 5e f6 f5 03 04    CallProperty1 r4, r5, a0, [4]
         0x27ac343e56b5 @   21 : c0                Star4 
 4669 E> 0x27ac343e56b6 @   22 : 5e f8 f7 f6 06    CallProperty1 r2, r3, r4, [6]
         0x27ac343e56bb @   27 : c4                Star0 
 4753 S> 0x27ac343e56bc @   28 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x27ac343e56be @   30 : c1                Star3 
 4766 E> 0x27ac343e56bf @   31 : 2d f7 00 08       GetNamedProperty r3, [0], [8]
         0x27ac343e56c3 @   35 : c2                Star2 
         0x27ac343e56c4 @   36 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x27ac343e56c6 @   38 : bf                Star5 
 4799 E> 0x27ac343e56c7 @   39 : 2d f5 01 0a       GetNamedProperty r5, [1], [10]
         0x27ac343e56cb @   43 : c0                Star4 
 4799 E> 0x27ac343e56cc @   44 : 5e f6 f5 03 0c    CallProperty1 r4, r5, a0, [12]
         0x27ac343e56d1 @   49 : c0                Star4 
 4766 E> 0x27ac343e56d2 @   50 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x27ac343e56d7 @   55 : c3                Star1 
 4821 S> 0x27ac343e56d8 @   56 : 7c 02 10 29       CreateObjectLiteral [2], [16], #41
         0x27ac343e56dc @   60 : c2                Star2 
         0x27ac343e56dd @   61 : 0b 03             Ldar a0
 4845 E> 0x27ac343e56df @   63 : 33 f8 03 11       DefineNamedOwnProperty r2, [3], [17]
 4895 E> 0x27ac343e56e3 @   67 : 2d f9 04 13       GetNamedProperty r1, [4], [19]
         0x27ac343e56e7 @   71 : bf                Star5 
 4895 E> 0x27ac343e56e8 @   72 : 5e f5 f9 fa 15    CallProperty1 r5, r1, r0, [21]
         0x27ac343e56ed @   77 : bf                Star5 
 4925 E> 0x27ac343e56ee @   78 : 2d f5 05 17       GetNamedProperty r5, [5], [23]
         0x27ac343e56f2 @   82 : bf                Star5 
 4936 E> 0x27ac343e56f3 @   83 : 2d f5 01 19       GetNamedProperty r5, [1], [25]
         0x27ac343e56f7 @   87 : c0                Star4 
         0x27ac343e56f8 @   88 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x27ac343e56fa @   90 : be                Star6 
 4937 E> 0x27ac343e56fb @   91 : 5e f6 f5 f4 1b    CallProperty1 r4, r5, r6, [27]
         0x27ac343e5700 @   96 : c0                Star4 
 4960 E> 0x27ac343e5701 @   97 : 2d f6 00 1d       GetNamedProperty r4, [0], [29]
         0x27ac343e5705 @  101 : c1                Star3 
 4961 E> 0x27ac343e5706 @  102 : 5e f7 f6 fa 1f    CallProperty1 r3, r4, r0, [31]
         0x27ac343e570b @  107 : 33 f8 06 21       DefineNamedOwnProperty r2, [6], [33]
         0x27ac343e570f @  111 : 0b f8             Ldar r2
 4997 S> 0x27ac343e5711 @  113 : a9                Return 
Constant pool (size = 7)
0x27ac343e5719: [FixedArray] in OldSpace
 - map: 0x396b84dc12e1 <Map>
 - length: 7
           0: 0x396b84dc4569 <String[3]: #add>
           1: 0x27ac343e4f21 <String[8]: #multiply>
           2: 0x27ac343e5761 <ObjectBoilerplateDescription[5]>
           3: 0x27ac343e5799 <String[1]: #t>
           4: 0x27ac343e4f09 <String[8]: #subtract>
           5: 0x27ac343e57d1 <String[10]: #normalized>
           6: 0x27ac343e57b1 <String[12]: #intersection>
Handler Table (size = 0)
Source Position Table (size = 53)
0x27ac343e57f1 <ByteArray[53]>
Boilerplate at 0x27ac343e5761: 
0x27ac343e5761: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x396b84dc2059 <Map>
 - length: 5
           0: 8
           1: 0x27ac343e5799 <String[1]: #t>
           2: 0x396b84dc1501 <Odd Oddball: uninitialized>
           3: 0x27ac343e57b1 <String[12]: #intersection>
           4: 0x396b84dc1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x27ac343e5a19: 
0x27ac343e5a19: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x396b84dc2059 <Map>
 - length: 3
           0: 8
           1: 0x396b84dc6419 <String[5]: #value>
           2: 0x396b84dc1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
