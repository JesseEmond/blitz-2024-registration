<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1dd063324d18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1dd063324d18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1dd063324d1c @    4 : c4                Star0 
 6901 S> 0x1dd063324d1d @    5 : a9                Return 
Constant pool (size = 1)
0x1dd063324d21: [FixedArray] in OldSpace
 - map: 0x2fb5d63c12e1 <Map>
 - length: 1
           0: 0x1dd063324d39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1dd0633277d9 <ByteArray[8]>
0x1dd063324d39 points to: [0x1dd063324da8]
=== [0x1dd063324da8] DISASSEMBLY ===
Parameter count 6
Register count 22
Frame size 176
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1dd063324da8 @    0 : 83 00 04          CreateFunctionContext [0], [4]
         0x1dd063324dab @    3 : 1a f8             PushContext r2
         0x1dd063324dad @    5 : 10                LdaTheHole 
         0x1dd063324dae @    6 : 25 02             StaCurrentContextSlot [2]
         0x1dd063324db0 @    8 : 10                LdaTheHole 
         0x1dd063324db1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x1dd063324db3 @   11 : 10                LdaTheHole 
         0x1dd063324db4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x1dd063324db6 @   14 : 10                LdaTheHole 
         0x1dd063324db7 @   15 : 25 05             StaCurrentContextSlot [5]
   98 S> 0x1dd063324db9 @   17 : 0b 02             Ldar <this>
         0x1dd063324dbb @   19 : 97 06             JumpIfToBooleanFalse [6] (0x1dd063324dc1 @ 25)
  112 E> 0x1dd063324dbd @   21 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x1dd063324dc1 @   25 : 96 06             JumpIfToBooleanTrue [6] (0x1dd063324dc7 @ 31)
         0x1dd063324dc3 @   27 : 80 02 00 02       CreateClosure [2], [0], #2
         0x1dd063324dc7 @   31 : c4                Star0 
  215 S> 0x1dd063324dc8 @   32 : 21 03 02          LdaGlobal [3], [2]
         0x1dd063324dcb @   35 : c0                Star4 
  222 E> 0x1dd063324dcc @   36 : 2d f6 04 04       GetNamedProperty r4, [4], [4]
         0x1dd063324dd0 @   40 : c1                Star3 
         0x1dd063324dd1 @   41 : 13 05             LdaConstant [5]
         0x1dd063324dd3 @   43 : be                Star6 
  237 E> 0x1dd063324dd4 @   44 : 7c 06 06 29       CreateObjectLiteral [6], [6], #41
         0x1dd063324dd8 @   48 : bd                Star7 
         0x1dd063324dd9 @   49 : 19 03 f5          Mov a0, r5
  222 E> 0x1dd063324ddc @   52 : 5c f7 f6 04 07    CallProperty r3, r4-r7, [7]
  294 S> 0x1dd063324de1 @   57 : 13 07             LdaConstant [7]
         0x1dd063324de3 @   59 : bf                Star5 
  310 E> 0x1dd063324de4 @   60 : 62 04 f5 09       CallUndefinedReceiver1 a1, r5, [9]
         0x1dd063324de8 @   64 : c0                Star4 
  294 E> 0x1dd063324de9 @   65 : 62 fa f6 0b       CallUndefinedReceiver1 r0, r4, [11]
         0x1dd063324ded @   69 : c3                Star1 
  346 S> 0x1dd063324dee @   70 : 13 08             LdaConstant [8]
         0x1dd063324df0 @   72 : c0                Star4 
  346 E> 0x1dd063324df1 @   73 : 62 04 f6 0d       CallUndefinedReceiver1 a1, r4, [13]
  346 E> 0x1dd063324df5 @   77 : 25 02             StaCurrentContextSlot [2]
  392 S> 0x1dd063324df7 @   79 : 13 09             LdaConstant [9]
         0x1dd063324df9 @   81 : c0                Star4 
  392 E> 0x1dd063324dfa @   82 : 62 04 f6 0f       CallUndefinedReceiver1 a1, r4, [15]
  392 E> 0x1dd063324dfe @   86 : 25 03             StaCurrentContextSlot [3]
  501 S> 0x1dd063324e00 @   88 : 13 0a             LdaConstant [10]
  501 E> 0x1dd063324e02 @   90 : 25 04             StaCurrentContextSlot [4]
 3353 S> 0x1dd063324e04 @   92 : 2d f9 0b 11       GetNamedProperty r1, [11], [17]
         0x1dd063324e08 @   96 : 18 e8             Star r18
 3362 E> 0x1dd063324e0a @   98 : 21 0c 13          LdaGlobal [12], [19]
         0x1dd063324e0d @  101 : 18 e6             Star r20
 3370 E> 0x1dd063324e0f @  103 : 2d e6 0d 15       GetNamedProperty r20, [13], [21]
         0x1dd063324e13 @  107 : 18 e6             Star r20
 3375 E> 0x1dd063324e15 @  109 : 2d e6 0e 17       GetNamedProperty r20, [14], [23]
         0x1dd063324e19 @  113 : 18 e7             Star r19
         0x1dd063324e1b @  115 : 0d 02             LdaSmi [2]
         0x1dd063324e1d @  117 : 18 e5             Star r21
 3375 E> 0x1dd063324e1f @  119 : 5e e7 e6 e5 19    CallProperty1 r19, r20, r21, [25]
         0x1dd063324e24 @  124 : 18 e7             Star r19
 3361 E> 0x1dd063324e26 @  126 : 62 e8 e7 1b       CallUndefinedReceiver1 r18, r19, [27]
         0x1dd063324e2a @  130 : 18 e8             Star r18
 3389 E> 0x1dd063324e2c @  132 : 2d e8 0f 1d       GetNamedProperty r18, [15], [29]
         0x1dd063324e30 @  136 : 18 e9             Star r17
         0x1dd063324e32 @  138 : 7c 10 1f 08       CreateObjectLiteral [16], [31], #8
         0x1dd063324e36 @  142 : 18 e7             Star r19
 3390 E> 0x1dd063324e38 @  144 : 5e e9 e8 e7 20    CallProperty1 r17, r18, r19, [32]
         0x1dd063324e3d @  149 : 18 e9             Star r17
 4664 E> 0x1dd063324e3f @  151 : 2d e9 11 22       GetNamedProperty r17, [17], [34]
         0x1dd063324e43 @  155 : 18 ea             Star r16
 4673 E> 0x1dd063324e45 @  157 : 21 0c 13          LdaGlobal [12], [19]
         0x1dd063324e48 @  160 : 18 e8             Star r18
 4681 E> 0x1dd063324e4a @  162 : 2d e8 12 24       GetNamedProperty r18, [18], [36]
         0x1dd063324e4e @  166 : 18 e8             Star r18
 4685 E> 0x1dd063324e50 @  168 : 2d e8 13 26       GetNamedProperty r18, [19], [38]
         0x1dd063324e54 @  172 : 96 04             JumpIfToBooleanTrue [4] (0x1dd063324e58 @ 176)
         0x1dd063324e56 @  174 : 13 14             LdaConstant [20]
         0x1dd063324e58 @  176 : 18 e8             Star r18
 4665 E> 0x1dd063324e5a @  178 : 5e ea e9 e8 28    CallProperty1 r16, r17, r18, [40]
         0x1dd063324e5f @  183 : 18 ea             Star r16
 4707 E> 0x1dd063324e61 @  185 : 2d ea 15 2a       GetNamedProperty r16, [21], [42]
         0x1dd063324e65 @  189 : b5                Star15 
         0x1dd063324e66 @  190 : 13 16             LdaConstant [22]
         0x1dd063324e68 @  192 : 18 e9             Star r17
 4708 E> 0x1dd063324e6a @  194 : 5e eb ea e9 2c    CallProperty1 r15, r16, r17, [44]
         0x1dd063324e6f @  199 : b5                Star15 
 4739 E> 0x1dd063324e70 @  200 : 2d eb 15 2e       GetNamedProperty r15, [21], [46]
         0x1dd063324e74 @  204 : b6                Star14 
         0x1dd063324e75 @  205 : 13 17             LdaConstant [23]
         0x1dd063324e77 @  207 : 18 ea             Star r16
 4740 E> 0x1dd063324e79 @  209 : 5e ec eb ea 30    CallProperty1 r14, r15, r16, [48]
         0x1dd063324e7e @  214 : b6                Star14 
 4763 E> 0x1dd063324e7f @  215 : 2d ec 15 32       GetNamedProperty r14, [21], [50]
         0x1dd063324e83 @  219 : b7                Star13 
         0x1dd063324e84 @  220 : 13 18             LdaConstant [24]
         0x1dd063324e86 @  222 : b5                Star15 
 4764 E> 0x1dd063324e87 @  223 : 5e ed ec eb 34    CallProperty1 r13, r14, r15, [52]
         0x1dd063324e8c @  228 : b7                Star13 
 4785 E> 0x1dd063324e8d @  229 : 2d ed 15 36       GetNamedProperty r13, [21], [54]
         0x1dd063324e91 @  233 : b8                Star12 
         0x1dd063324e92 @  234 : 13 19             LdaConstant [25]
         0x1dd063324e94 @  236 : b6                Star14 
 4786 E> 0x1dd063324e95 @  237 : 5e ee ed ec 38    CallProperty1 r12, r13, r14, [56]
         0x1dd063324e9a @  242 : b8                Star12 
 4805 E> 0x1dd063324e9b @  243 : 2d ee 15 3a       GetNamedProperty r12, [21], [58]
         0x1dd063324e9f @  247 : b9                Star11 
         0x1dd063324ea0 @  248 : 13 1a             LdaConstant [26]
         0x1dd063324ea2 @  250 : b7                Star13 
 4806 E> 0x1dd063324ea3 @  251 : 5e ef ee ed 3c    CallProperty1 r11, r12, r13, [60]
         0x1dd063324ea8 @  256 : b9                Star11 
 4828 E> 0x1dd063324ea9 @  257 : 2d ef 15 3e       GetNamedProperty r11, [21], [62]
         0x1dd063324ead @  261 : ba                Star10 
         0x1dd063324eae @  262 : 13 1b             LdaConstant [27]
         0x1dd063324eb0 @  264 : b8                Star12 
 4829 E> 0x1dd063324eb1 @  265 : 5e f0 ef ee 40    CallProperty1 r10, r11, r12, [64]
         0x1dd063324eb6 @  270 : ba                Star10 
 4858 E> 0x1dd063324eb7 @  271 : 2d f0 15 42       GetNamedProperty r10, [21], [66]
         0x1dd063324ebb @  275 : bb                Star9 
         0x1dd063324ebc @  276 : 13 1c             LdaConstant [28]
         0x1dd063324ebe @  278 : b9                Star11 
 4859 E> 0x1dd063324ebf @  279 : 5e f1 f0 ef 44    CallProperty1 r9, r10, r11, [68]
         0x1dd063324ec4 @  284 : bb                Star9 
 4879 E> 0x1dd063324ec5 @  285 : 2d f1 15 46       GetNamedProperty r9, [21], [70]
         0x1dd063324ec9 @  289 : bc                Star8 
         0x1dd063324eca @  290 : 13 1d             LdaConstant [29]
         0x1dd063324ecc @  292 : ba                Star10 
 4880 E> 0x1dd063324ecd @  293 : 5e f2 f1 f0 48    CallProperty1 r8, r9, r10, [72]
         0x1dd063324ed2 @  298 : bc                Star8 
 4897 E> 0x1dd063324ed3 @  299 : 2d f2 15 4a       GetNamedProperty r8, [21], [74]
         0x1dd063324ed7 @  303 : bd                Star7 
         0x1dd063324ed8 @  304 : 13 11             LdaConstant [17]
         0x1dd063324eda @  306 : bb                Star9 
 4898 E> 0x1dd063324edb @  307 : 5e f3 f2 f1 4c    CallProperty1 r7, r8, r9, [76]
         0x1dd063324ee0 @  312 : bd                Star7 
 4918 E> 0x1dd063324ee1 @  313 : 2d f3 15 4e       GetNamedProperty r7, [21], [78]
         0x1dd063324ee5 @  317 : be                Star6 
         0x1dd063324ee6 @  318 : 13 1e             LdaConstant [30]
         0x1dd063324ee8 @  320 : bc                Star8 
 4919 E> 0x1dd063324ee9 @  321 : 5e f4 f3 f2 50    CallProperty1 r6, r7, r8, [80]
         0x1dd063324eee @  326 : be                Star6 
 4942 E> 0x1dd063324eef @  327 : 2d f4 1f 52       GetNamedProperty r6, [31], [82]
         0x1dd063324ef3 @  331 : bf                Star5 
         0x1dd063324ef4 @  332 : 13 1e             LdaConstant [30]
         0x1dd063324ef6 @  334 : bd                Star7 
         0x1dd063324ef7 @  335 : 13 20             LdaConstant [32]
         0x1dd063324ef9 @  337 : bc                Star8 
 4943 E> 0x1dd063324efa @  338 : 5f f5 f4 f3 f2 54 CallProperty2 r5, r6, r7, r8, [84]
         0x1dd063324f00 @  344 : bf                Star5 
 5040 E> 0x1dd063324f01 @  345 : 2d f5 12 56       GetNamedProperty r5, [18], [86]
         0x1dd063324f05 @  349 : c0                Star4 
         0x1dd063324f06 @  350 : 11                LdaTrue 
         0x1dd063324f07 @  351 : be                Star6 
 5041 E> 0x1dd063324f08 @  352 : 5e f6 f5 f4 58    CallProperty1 r4, r5, r6, [88]
         0x1dd063324f0d @  357 : c0                Star4 
 5055 E> 0x1dd063324f0e @  358 : 2d f6 21 5a       GetNamedProperty r4, [33], [90]
         0x1dd063324f12 @  362 : c1                Star3 
 5056 E> 0x1dd063324f13 @  363 : 5d f7 f6 5c       CallProperty0 r3, r4, [92]
 3341 E> 0x1dd063324f17 @  367 : 25 05             StaCurrentContextSlot [5]
 5069 S> 0x1dd063324f19 @  369 : 80 22 01 02       CreateClosure [34], [1], #2
         0x1dd063324f1d @  373 : c0                Star4 
 6651 E> 0x1dd063324f1e @  374 : 61 f6 5e          CallUndefinedReceiver0 r4, [94]
         0x1dd063324f21 @  377 : c0                Star4 
 6653 E> 0x1dd063324f22 @  378 : 2d f6 23 60       GetNamedProperty r4, [35], [96]
         0x1dd063324f26 @  382 : c1                Star3 
         0x1dd063324f27 @  383 : 80 24 02 02       CreateClosure [36], [2], #2
         0x1dd063324f2b @  387 : bf                Star5 
 6659 E> 0x1dd063324f2c @  388 : 5e f7 f6 f5 62    CallProperty1 r3, r4, r5, [98]
         0x1dd063324f31 @  393 : 0e                LdaUndefined 
 6898 S> 0x1dd063324f32 @  394 : a9                Return 
Constant pool (size = 37)
0x1dd063324f39: [FixedArray] in OldSpace
 - map: 0x2fb5d63c12e1 <Map>
 - length: 37
           0: 0x1dd063325071 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1dd063325161 <String[15]: #__importDefault>
           2: 0x1dd063325181 <SharedFunctionInfo>
           3: 0x2fb5d63c5ab9 <String[6]: #Object>
           4: 0x2fb5d63c4c11 <String[14]: #defineProperty>
           5: 0x1dd063325239 <String[10]: #__esModule>
           6: 0x1dd063326441 <ObjectBoilerplateDescription[3]>
           7: 0x1dd063326469 <String[5]: #yargs>
           8: 0x1dd063326481 <String[13]: #@blitz/engine>
           9: 0x1dd0633264a1 <String[16]: #@blitz/challenge>
          10: 0x1dd0633264c1 <String[2823]: #...<truncated>>>
          11: 0x2fb5d63c4bf9 <String[7]: #default>
          12: 0x206841e81939 <String[7]: #process>
          13: 0x054ff2e31881 <String[4]: #argv>
          14: 0x206841e87319 <String[5]: #slice>
          15: 0x206841e8cbb9 <String[7]: #options>
          16: 0x1dd063327021 <ObjectBoilerplateDescription[27]>
          17: 0x206841e99699 <String[7]: #version>
          18: 0x206841ea2b81 <String[3]: #env>
          19: 0x1dd063327631 <String[7]: #VERSION>
          20: 0x1dd063327649 <String[3]: #DEV>
          21: 0x1dd063327661 <String[4]: #hide>
          22: 0x1dd063325d31 <String[18]: #gameStartTimeoutMs>
          23: 0x1dd063325e11 <String[10]: #recordPath>
          24: 0x1dd063325f79 <String[8]: #s3Bucket>
          25: 0x1dd063325f91 <String[6]: #s3Path>
          26: 0x1dd063321661 <String[9]: #keepAlive>
          27: 0x1dd063325e31 <String[16]: #teamNamesByToken>
          28: 0x1dd063325ea1 <String[7]: #serveUi>
          29: 0x206841e99081 <String[4]: #port>
          30: 0x1dd063325b21 <String[10]: #randomSeed>
          31: 0x1dd063327679 <String[5]: #alias>
          32: 0x1dd063327691 <String[7]: #mapName>
          33: 0x1dd0633276a9 <String[9]: #parseSync>
          34: 0x1dd063325419 <SharedFunctionInfo>
          35: 0x206841e9b5c9 <String[5]: #catch>
          36: 0x1dd063326211 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 142)
0x1dd0633276e1 <ByteArray[142]>
0x1dd063325181 points to: [0x1dd0633251f0]
=== [0x1dd0633251f0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  153 S> 0x1dd0633251f0 @    0 : 0b 03             Ldar a0
         0x1dd0633251f2 @    2 : 97 0c             JumpIfToBooleanFalse [12] (0x1dd0633251fe @ 14)
  172 E> 0x1dd0633251f4 @    4 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1dd0633251f8 @    8 : 97 06             JumpIfToBooleanFalse [6] (0x1dd0633251fe @ 14)
         0x1dd0633251fa @   10 : 0b 03             Ldar a0
         0x1dd0633251fc @   12 : 8a 0f             Jump [15] (0x1dd06332520b @ 27)
  186 E> 0x1dd0633251fe @   14 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
         0x1dd063325202 @   18 : c4                Star0 
         0x1dd063325203 @   19 : 0b 03             Ldar a0
  205 E> 0x1dd063325205 @   21 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x1dd063325209 @   25 : 0b fa             Ldar r0
  211 S> 0x1dd06332520b @   27 : a9                Return 
Constant pool (size = 3)
0x1dd063325211: [FixedArray] in OldSpace
 - map: 0x2fb5d63c12e1 <Map>
 - length: 3
           0: 0x1dd063325239 <String[10]: #__esModule>
           1: 0x1dd063325259 <ObjectBoilerplateDescription[3]>
           2: 0x2fb5d63c4bf9 <String[7]: #default>
Handler Table (size = 0)
Source Position Table (size = 13)
0x1dd063325281 <ByteArray[13]>
Boilerplate at 0x1dd063325259: 
0x1dd063325259: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 3
           0: 8
           1: 0x2fb5d63c4bf9 <String[7]: #default>
           2: 0x2fb5d63c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1dd063326441: 
0x1dd063326441: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 3
           0: 8
           1: 0x2fb5d63c6419 <String[5]: #value>
           2: 0x2fb5d63c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1dd063327021: 
0x1dd063327021: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 27
           0: 8
           1: 0x1dd063325d11 <String[13]: #timePerTickMs>
           2: 0x1dd063327109 <ObjectBoilerplateDescription[7]>
           3: 0x1dd063325d59 <String[19]: #delayBetweenTicksMs>
           4: 0x1dd0633271a9 <ObjectBoilerplateDescription[7]>
           5: 0x1dd063325d31 <String[18]: #gameStartTimeoutMs>
           6: 0x1dd063327221 <ObjectBoilerplateDescription[7]>
           7: 0x1dd063325e11 <String[10]: #recordPath>
           8: 0x1dd063327299 <ObjectBoilerplateDescription[5]>
           9: 0x1dd063325b21 <String[10]: #randomSeed>
          10: 0x1dd063327301 <ObjectBoilerplateDescription[3]>
          11: 0x1dd063325f79 <String[8]: #s3Bucket>
          12: 0x1dd063327329 <ObjectBoilerplateDescription[3]>
          13: 0x1dd063325f91 <String[6]: #s3Path>
          14: 0x1dd063327351 <ObjectBoilerplateDescription[3]>
          15: 0x1dd063321661 <String[9]: #keepAlive>
          16: 0x1dd063327379 <ObjectBoilerplateDescription[7]>
          17: 0x1dd063325e31 <String[16]: #teamNamesByToken>
          18: 0x1dd063327411 <ObjectBoilerplateDescription[3]>
          19: 0x1dd063325e81 <String[14]: #teamIdsByToken>
          20: 0x1dd063327439 <ObjectBoilerplateDescription[3]>
          21: 0x1dd063325ea1 <String[7]: #serveUi>
          22: 0x1dd063327461 <ObjectBoilerplateDescription[5]>
          23: 0x206841e99081 <String[4]: #port>
          24: 0x1dd063327499 <ObjectBoilerplateDescription[7]>
          25: 0x1dd0633258c9 <String[9]: #heartbeat>
          26: 0x1dd063327511 <ObjectBoilerplateDescription[5]>
[start ObjectBoilerplate nested objects]
0x1dd063327109: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 7
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c5a81 <String[6]: #number>
           3: 0x2fb5d63c4bf9 <String[7]: #default>
           4: 1000
           5: 0x206841e9aef1 <String[11]: #description>
           6: 0x1dd063327171 <String[38]: #Max time the game will wait for a tick>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd0633271a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 7
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c5a81 <String[6]: #number>
           3: 0x2fb5d63c4bf9 <String[7]: #default>
           4: 50
           5: 0x206841e9aef1 <String[11]: #description>
           6: 0x1dd0633271f1 <String[26]: #Time to wait between ticks>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327221: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 7
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c5a81 <String[6]: #number>
           3: 0x2fb5d63c4bf9 <String[7]: #default>
           4: 500000
           5: 0x206841e9aef1 <String[11]: #description>
           6: 0x1dd063327269 <String[30]: #Delay before starting the game>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327299: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 5
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c6159 <String[6]: #string>
           3: 0x206841e9aef1 <String[11]: #description>
           4: 0x1dd0633272d1 <String[29]: #File path to record replay to>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327301: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 3
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c6159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327329: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 3
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c6159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327351: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 3
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c6159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327379: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 7
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c1771 <String[7]: #boolean>
           3: 0x2fb5d63c4bf9 <String[7]: #default>
           4: 0x2fb5d63c1729 <true>
           5: 0x206841e9aef1 <String[11]: #description>
           6: 0x1dd0633273c1 <String[59]: #Indicates if the game should close or restart on completion>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327411: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 3
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c6159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327439: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 3
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c6159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327461: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 5
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c1771 <String[7]: #boolean>
           3: 0x2fb5d63c4bf9 <String[7]: #default>
           4: 0x2fb5d63c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327499: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 7
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c5a81 <String[6]: #number>
           3: 0x206841e9aef1 <String[11]: #description>
           4: 0x1dd0633274e1 <String[30]: #The port of the server backend>
           5: 0x2fb5d63c4bf9 <String[7]: #default>
           6: 8765
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063327511: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 5
           0: 8
           1: 0x2fb5d63c4469 <String[4]: #type>
           2: 0x2fb5d63c1771 <String[7]: #boolean>
           3: 0x206841e9aef1 <String[11]: #description>
           4: 0x1dd063327549 <String[165]: #When running with this option, sends a heartbeat to an already running server on localhost and exits. If successful, exit with 0, otherwise, exit with non-zero code.>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063325419 points to: [0x1dd063325488]
=== [0x1dd063325488] DISASSEMBLY ===
Parameter count 1
Register count 13
Frame size 104
OSR urgency: 0
Bytecode age: 0
         0x1dd063325488 @    0 : ae fa 00 03       SwitchOnGeneratorState r0, [0], [3] { 0: @88, 1: @396, 2: @628 }
         0x1dd06332548c @    4 : 19 fe f4          Mov <closure>, r6
         0x1dd06332548f @    7 : 19 02 f3          Mov <this>, r7
 5070 E> 0x1dd063325492 @   10 : 68 02 f4 02       InvokeIntrinsic [_AsyncFunctionEnter], r6-r7
         0x1dd063325496 @   14 : c4                Star0 
         0x1dd063325497 @   15 : 19 ff f4          Mov <context>, r6
 5088 S> 0x1dd06332549a @   18 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x1dd06332549c @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd06332549e @   22 : bd                Star7 
 5097 E> 0x1dd06332549f @   23 : 2d f3 04 00       GetNamedProperty r7, [4], [0]
         0x1dd0633254a3 @   27 : 97 5e             JumpIfToBooleanFalse [94] (0x1dd063325501 @ 121)
 5118 S> 0x1dd0633254a5 @   29 : 21 05 02          LdaGlobal [5], [2]
         0x1dd0633254a8 @   32 : bc                Star8 
 5126 E> 0x1dd0633254a9 @   33 : 2d f2 06 04       GetNamedProperty r8, [6], [4]
         0x1dd0633254ad @   37 : bd                Star7 
         0x1dd0633254ae @   38 : 17 02             LdaImmutableCurrentContextSlot [2]
 5138 E> 0x1dd0633254b0 @   40 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1dd0633254b2 @   42 : ba                Star10 
 5147 E> 0x1dd0633254b3 @   43 : 2d f0 08 06       GetNamedProperty r10, [8], [6]
         0x1dd0633254b7 @   47 : ba                Star10 
 5154 E> 0x1dd0633254b8 @   48 : 2d f0 04 08       GetNamedProperty r10, [4], [8]
         0x1dd0633254bc @   52 : bb                Star9 
         0x1dd0633254bd @   53 : 13 09             LdaConstant [9]
         0x1dd0633254bf @   55 : b9                Star11 
         0x1dd0633254c0 @   56 : 17 05             LdaImmutableCurrentContextSlot [5]
 5184 E> 0x1dd0633254c2 @   58 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd0633254c4 @   60 : b8                Star12 
 5189 E> 0x1dd0633254c5 @   61 : 2d ee 0a 0b       GetNamedProperty r12, [10], [11]
         0x1dd0633254c9 @   65 : 77                ToString 
         0x1dd0633254ca @   66 : 39 ef 0a          Add r11, [10]
         0x1dd0633254cd @   69 : b9                Star11 
 5154 E> 0x1dd0633254ce @   70 : 5e f1 f0 ef 0d    CallProperty1 r9, r10, r11, [13]
         0x1dd0633254d3 @   75 : ba                Star10 
         0x1dd0633254d4 @   76 : 19 fa f1          Mov r0, r9
         0x1dd0633254d7 @   79 : 68 01 f1 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r9-r10
 5132 E> 0x1dd0633254db @   83 : af fa fa 09 00    SuspendGenerator r0, r0-r8, [0]
         0x1dd0633254e0 @   88 : b0 fa fa 09       ResumeGenerator r0, r0-r8
         0x1dd0633254e4 @   92 : bb                Star9 
         0x1dd0633254e5 @   93 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x1dd0633254e9 @   97 : ba                Star10 
         0x1dd0633254ea @   98 : 0c                LdaZero 
         0x1dd0633254eb @   99 : 1c f0             TestReferenceEqual r10
         0x1dd0633254ed @  101 : 98 05             JumpIfTrue [5] (0x1dd0633254f2 @ 106)
         0x1dd0633254ef @  103 : 0b f1             Ldar r9
         0x1dd0633254f1 @  105 : a8                ReThrow 
         0x1dd0633254f2 @  106 : 0b f1             Ldar r9
         0x1dd0633254f4 @  108 : 97 05             JumpIfToBooleanFalse [5] (0x1dd0633254f9 @ 113)
         0x1dd0633254f6 @  110 : 0c                LdaZero 
         0x1dd0633254f7 @  111 : 8a 04             Jump [4] (0x1dd0633254fb @ 115)
         0x1dd0633254f9 @  113 : 0d 01             LdaSmi [1]
         0x1dd0633254fb @  115 : bb                Star9 
 5126 E> 0x1dd0633254fc @  116 : 5e f3 f2 f1 0f    CallProperty1 r7, r8, r9, [15]
 5218 S> 0x1dd063325501 @  121 : 21 0b 11          LdaGlobal [11], [17]
         0x1dd063325504 @  124 : bc                Star8 
 5226 E> 0x1dd063325505 @  125 : 2d f2 0c 13       GetNamedProperty r8, [12], [19]
         0x1dd063325509 @  129 : bd                Star7 
         0x1dd06332550a @  130 : 17 04             LdaImmutableCurrentContextSlot [4]
 5230 E> 0x1dd06332550c @  132 : aa 0d             ThrowReferenceErrorIfHole [13]
         0x1dd06332550e @  134 : bb                Star9 
 5226 E> 0x1dd06332550f @  135 : 5e f3 f2 f1 15    CallProperty1 r7, r8, r9, [21]
 5271 S> 0x1dd063325514 @  140 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1dd063325516 @  142 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1dd063325518 @  144 : bd                Star7 
 5284 E> 0x1dd063325519 @  145 : 2d f3 0e 17       GetNamedProperty r7, [14], [23]
         0x1dd06332551d @  149 : bd                Star7 
         0x1dd06332551e @  150 : 80 0f 00 02       CreateClosure [15], [0], #2
         0x1dd063325522 @  154 : bc                Star8 
         0x1dd063325523 @  155 : 7c 10 19 29       CreateObjectLiteral [16], [25], #41
         0x1dd063325527 @  159 : bb                Star9 
         0x1dd063325528 @  160 : 17 05             LdaImmutableCurrentContextSlot [5]
 5506 E> 0x1dd06332552a @  162 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd06332552c @  164 : ba                Star10 
 5511 E> 0x1dd06332552d @  165 : 2d f0 11 1a       GetNamedProperty r10, [17], [26]
         0x1dd063325531 @  169 : 33 f1 12 1c       DefineNamedOwnProperty r9, [18], [28]
         0x1dd063325535 @  173 : 17 05             LdaImmutableCurrentContextSlot [5]
 5571 E> 0x1dd063325537 @  175 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325539 @  177 : ba                Star10 
 5576 E> 0x1dd06332553a @  178 : 2d f0 13 1e       GetNamedProperty r10, [19], [30]
         0x1dd06332553e @  182 : 33 f1 14 20       DefineNamedOwnProperty r9, [20], [32]
         0x1dd063325542 @  186 : 17 05             LdaImmutableCurrentContextSlot [5]
 5667 E> 0x1dd063325544 @  188 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325546 @  190 : ba                Star10 
 5672 E> 0x1dd063325547 @  191 : 2d f0 15 22       GetNamedProperty r10, [21], [34]
         0x1dd06332554b @  195 : 33 f1 16 24       DefineNamedOwnProperty r9, [22], [36]
         0x1dd06332554f @  199 : 0b f3             Ldar r7
 5271 E> 0x1dd063325551 @  201 : 69 f3 f2 02 26    Construct r7, r8-r9, [38]
         0x1dd063325556 @  206 : c3                Star1 
 5730 S> 0x1dd063325557 @  207 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1dd063325559 @  209 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1dd06332555b @  211 : bc                Star8 
 5739 E> 0x1dd06332555c @  212 : 2d f2 17 28       GetNamedProperty r8, [23], [40]
         0x1dd063325560 @  216 : bc                Star8 
 5748 E> 0x1dd063325561 @  217 : 2d f2 18 2a       GetNamedProperty r8, [24], [42]
         0x1dd063325565 @  221 : bd                Star7 
 5766 E> 0x1dd063325566 @  222 : 7c 19 2c 29       CreateObjectLiteral [25], [44], #41
         0x1dd06332556a @  226 : ba                Star10 
         0x1dd06332556b @  227 : 17 05             LdaImmutableCurrentContextSlot [5]
 5815 E> 0x1dd06332556d @  229 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd06332556f @  231 : b9                Star11 
 5820 E> 0x1dd063325570 @  232 : 2d ef 1a 2d       GetNamedProperty r11, [26], [45]
         0x1dd063325574 @  236 : 55                ToBooleanLogicalNot 
         0x1dd063325575 @  237 : 56                LogicalNot 
         0x1dd063325576 @  238 : 33 f0 1b 2f       DefineNamedOwnProperty r10, [27], [47]
 5748 E> 0x1dd06332557a @  242 : 5f f3 f2 f9 f0 31 CallProperty2 r7, r8, r1, r10, [49]
         0x1dd063325580 @  248 : c2                Star2 
 5877 S> 0x1dd063325581 @  249 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x1dd063325583 @  251 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325585 @  253 : bd                Star7 
 5882 E> 0x1dd063325586 @  254 : 2d f3 1c 33       GetNamedProperty r7, [28], [51]
         0x1dd06332558a @  258 : 97 1c             JumpIfToBooleanFalse [28] (0x1dd0633255a6 @ 286)
 5901 E> 0x1dd06332558c @  260 : 21 1d 35          LdaGlobal [29], [53]
         0x1dd06332558f @  263 : bc                Star8 
 5906 E> 0x1dd063325590 @  264 : 2d f2 1e 37       GetNamedProperty r8, [30], [55]
         0x1dd063325594 @  268 : bd                Star7 
         0x1dd063325595 @  269 : 17 05             LdaImmutableCurrentContextSlot [5]
 5912 E> 0x1dd063325597 @  271 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325599 @  273 : bb                Star9 
 5917 E> 0x1dd06332559a @  274 : 2d f1 1c 33       GetNamedProperty r9, [28], [51]
         0x1dd06332559e @  278 : bb                Star9 
 5906 E> 0x1dd06332559f @  279 : 5e f3 f2 f1 39    CallProperty1 r7, r8, r9, [57]
         0x1dd0633255a4 @  284 : 8a 03             Jump [3] (0x1dd0633255a7 @ 287)
         0x1dd0633255a6 @  286 : 0f                LdaNull 
         0x1dd0633255a7 @  287 : c1                Star3 
 5974 S> 0x1dd0633255a8 @  288 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x1dd0633255aa @  290 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd0633255ac @  292 : bd                Star7 
 5979 E> 0x1dd0633255ad @  293 : 2d f3 1f 3b       GetNamedProperty r7, [31], [59]
         0x1dd0633255b1 @  297 : 97 1c             JumpIfToBooleanFalse [28] (0x1dd0633255cd @ 325)
 5996 E> 0x1dd0633255b3 @  299 : 21 1d 35          LdaGlobal [29], [53]
         0x1dd0633255b6 @  302 : bc                Star8 
 6001 E> 0x1dd0633255b7 @  303 : 2d f2 1e 37       GetNamedProperty r8, [30], [55]
         0x1dd0633255bb @  307 : bd                Star7 
         0x1dd0633255bc @  308 : 17 05             LdaImmutableCurrentContextSlot [5]
 6007 E> 0x1dd0633255be @  310 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd0633255c0 @  312 : bb                Star9 
 6012 E> 0x1dd0633255c1 @  313 : 2d f1 1f 3b       GetNamedProperty r9, [31], [59]
         0x1dd0633255c5 @  317 : bb                Star9 
 6001 E> 0x1dd0633255c6 @  318 : 5e f3 f2 f1 3d    CallProperty1 r7, r8, r9, [61]
         0x1dd0633255cb @  323 : 8a 03             Jump [3] (0x1dd0633255ce @ 326)
         0x1dd0633255cd @  325 : 0f                LdaNull 
         0x1dd0633255ce @  326 : c0                Star4 
 6059 S> 0x1dd0633255cf @  327 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1dd0633255d1 @  329 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1dd0633255d3 @  331 : bd                Star7 
 6072 E> 0x1dd0633255d4 @  332 : 2d f3 08 06       GetNamedProperty r7, [8], [6]
         0x1dd0633255d8 @  336 : bd                Star7 
         0x1dd0633255d9 @  337 : 17 05             LdaImmutableCurrentContextSlot [5]
 6087 E> 0x1dd0633255db @  339 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd0633255dd @  341 : bb                Star9 
 6092 E> 0x1dd0633255de @  342 : 2d f1 0a 0b       GetNamedProperty r9, [10], [11]
         0x1dd0633255e2 @  346 : bb                Star9 
         0x1dd0633255e3 @  347 : 17 05             LdaImmutableCurrentContextSlot [5]
 6098 E> 0x1dd0633255e5 @  349 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd0633255e7 @  351 : ba                Star10 
 6103 E> 0x1dd0633255e8 @  352 : 2d f0 20 3f       GetNamedProperty r10, [32], [63]
         0x1dd0633255ec @  356 : ba                Star10 
         0x1dd0633255ed @  357 : 0b f3             Ldar r7
         0x1dd0633255ef @  359 : 19 f9 f2          Mov r1, r8
         0x1dd0633255f2 @  362 : 19 f7 ef          Mov r3, r11
         0x1dd0633255f5 @  365 : 19 f6 ee          Mov r4, r12
 6059 E> 0x1dd0633255f8 @  368 : 69 f3 f2 05 41    Construct r7, r8-r12, [65]
         0x1dd0633255fd @  373 : bf                Star5 
 6168 S> 0x1dd0633255fe @  374 : 2d f5 21 43       GetNamedProperty r5, [33], [67]
         0x1dd063325602 @  378 : bd                Star7 
 6168 E> 0x1dd063325603 @  379 : 5d f3 f5 45       CallProperty0 r7, r5, [69]
         0x1dd063325607 @  383 : bc                Star8 
         0x1dd063325608 @  384 : 19 fa f3          Mov r0, r7
         0x1dd06332560b @  387 : 68 01 f3 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r7-r8
 6155 E> 0x1dd06332560f @  391 : af fa fa 07 01    SuspendGenerator r0, r0-r6, [1]
         0x1dd063325614 @  396 : b0 fa fa 07       ResumeGenerator r0, r0-r6
         0x1dd063325618 @  400 : bd                Star7 
         0x1dd063325619 @  401 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x1dd06332561d @  405 : bc                Star8 
         0x1dd06332561e @  406 : 0c                LdaZero 
         0x1dd06332561f @  407 : 1c f2             TestReferenceEqual r8
         0x1dd063325621 @  409 : 98 05             JumpIfTrue [5] (0x1dd063325626 @ 414)
         0x1dd063325623 @  411 : 0b f3             Ldar r7
         0x1dd063325625 @  413 : a8                ReThrow 
 6186 S> 0x1dd063325626 @  414 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1dd063325628 @  416 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1dd06332562a @  418 : bc                Star8 
 6195 E> 0x1dd06332562b @  419 : 2d f2 22 47       GetNamedProperty r8, [34], [71]
         0x1dd06332562f @  423 : bc                Star8 
 6202 E> 0x1dd063325630 @  424 : 2d f2 23 49       GetNamedProperty r8, [35], [73]
         0x1dd063325634 @  428 : bd                Star7 
         0x1dd063325635 @  429 : 13 24             LdaConstant [36]
         0x1dd063325637 @  431 : bb                Star9 
 6202 E> 0x1dd063325638 @  432 : 5e f3 f2 f1 4b    CallProperty1 r7, r8, r9, [75]
 6247 S> 0x1dd06332563d @  437 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x1dd06332563f @  439 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325641 @  441 : bd                Star7 
 6256 E> 0x1dd063325642 @  442 : 2d f3 1a 2d       GetNamedProperty r7, [26], [45]
         0x1dd063325646 @  446 : 97 3b             JumpIfToBooleanFalse [59] (0x1dd063325681 @ 505)
 6282 S> 0x1dd063325648 @  448 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1dd06332564a @  450 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1dd06332564c @  452 : bc                Star8 
 6291 E> 0x1dd06332564d @  453 : 2d f2 22 47       GetNamedProperty r8, [34], [71]
         0x1dd063325651 @  457 : bc                Star8 
 6298 E> 0x1dd063325652 @  458 : 2d f2 23 4d       GetNamedProperty r8, [35], [77]
         0x1dd063325656 @  462 : bd                Star7 
         0x1dd063325657 @  463 : 13 25             LdaConstant [37]
         0x1dd063325659 @  465 : bb                Star9 
         0x1dd06332565a @  466 : 17 05             LdaImmutableCurrentContextSlot [5]
 6327 E> 0x1dd06332565c @  468 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd06332565e @  470 : ba                Star10 
 6332 E> 0x1dd06332565f @  471 : 2d f0 1a 2d       GetNamedProperty r10, [26], [45]
         0x1dd063325663 @  475 : 77                ToString 
         0x1dd063325664 @  476 : 39 f1 4f          Add r9, [79]
         0x1dd063325667 @  479 : bb                Star9 
 6298 E> 0x1dd063325668 @  480 : 5e f3 f2 f1 50    CallProperty1 r7, r8, r9, [80]
 6368 S> 0x1dd06332566d @  485 : 2d f8 26 52       GetNamedProperty r2, [38], [82]
         0x1dd063325671 @  489 : bd                Star7 
         0x1dd063325672 @  490 : 17 05             LdaImmutableCurrentContextSlot [5]
 6379 E> 0x1dd063325674 @  492 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325676 @  494 : bb                Star9 
 6384 E> 0x1dd063325677 @  495 : 2d f1 1a 2d       GetNamedProperty r9, [26], [45]
         0x1dd06332567b @  499 : bb                Star9 
 6368 E> 0x1dd06332567c @  500 : 5e f3 f8 f1 54    CallProperty1 r7, r2, r9, [84]
 6415 S> 0x1dd063325681 @  505 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x1dd063325683 @  507 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325685 @  509 : bd                Star7 
 6424 E> 0x1dd063325686 @  510 : 2d f3 27 56       GetNamedProperty r7, [39], [86]
         0x1dd06332568a @  514 : 97 86             JumpIfToBooleanFalse [134] (0x1dd063325710 @ 648)
         0x1dd06332568c @  516 : 17 05             LdaImmutableCurrentContextSlot [5]
 6436 E> 0x1dd06332568e @  518 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325690 @  520 : bd                Star7 
 6441 E> 0x1dd063325691 @  521 : 2d f3 28 58       GetNamedProperty r7, [40], [88]
         0x1dd063325695 @  525 : 97 7b             JumpIfToBooleanFalse [123] (0x1dd063325710 @ 648)
 6463 S> 0x1dd063325697 @  527 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1dd063325699 @  529 : aa 07             ThrowReferenceErrorIfHole [7]
         0x1dd06332569b @  531 : bc                Star8 
 6472 E> 0x1dd06332569c @  532 : 2d f2 22 47       GetNamedProperty r8, [34], [71]
         0x1dd0633256a0 @  536 : bc                Star8 
 6479 E> 0x1dd0633256a1 @  537 : 2d f2 23 5a       GetNamedProperty r8, [35], [90]
         0x1dd0633256a5 @  541 : bd                Star7 
         0x1dd0633256a6 @  542 : 13 29             LdaConstant [41]
         0x1dd0633256a8 @  544 : bb                Star9 
         0x1dd0633256a9 @  545 : 17 05             LdaImmutableCurrentContextSlot [5]
 6511 E> 0x1dd0633256ab @  547 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd0633256ad @  549 : ba                Star10 
 6516 E> 0x1dd0633256ae @  550 : 2d f0 27 56       GetNamedProperty r10, [39], [86]
         0x1dd0633256b2 @  554 : 77                ToString 
         0x1dd0633256b3 @  555 : 39 f1 5c          Add r9, [92]
         0x1dd0633256b6 @  558 : bb                Star9 
         0x1dd0633256b7 @  559 : 13 2a             LdaConstant [42]
         0x1dd0633256b9 @  561 : 39 f1 5c          Add r9, [92]
         0x1dd0633256bc @  564 : bb                Star9 
         0x1dd0633256bd @  565 : 17 05             LdaImmutableCurrentContextSlot [5]
 6528 E> 0x1dd0633256bf @  567 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd0633256c1 @  569 : ba                Star10 
 6533 E> 0x1dd0633256c2 @  570 : 2d f0 28 58       GetNamedProperty r10, [40], [88]
         0x1dd0633256c6 @  574 : 77                ToString 
         0x1dd0633256c7 @  575 : 39 f1 5c          Add r9, [92]
         0x1dd0633256ca @  578 : bb                Star9 
 6479 E> 0x1dd0633256cb @  579 : 5e f3 f2 f1 5d    CallProperty1 r7, r8, r9, [93]
 6571 S> 0x1dd0633256d0 @  584 : 2d f8 2b 5f       GetNamedProperty r2, [43], [95]
         0x1dd0633256d4 @  588 : bd                Star7 
         0x1dd0633256d5 @  589 : 17 05             LdaImmutableCurrentContextSlot [5]
 6580 E> 0x1dd0633256d7 @  591 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd0633256d9 @  593 : bb                Star9 
 6585 E> 0x1dd0633256da @  594 : 2d f1 27 56       GetNamedProperty r9, [39], [86]
         0x1dd0633256de @  598 : bb                Star9 
         0x1dd0633256df @  599 : 17 05             LdaImmutableCurrentContextSlot [5]
 6595 E> 0x1dd0633256e1 @  601 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd0633256e3 @  603 : ba                Star10 
 6600 E> 0x1dd0633256e4 @  604 : 2d f0 28 58       GetNamedProperty r10, [40], [88]
         0x1dd0633256e8 @  608 : ba                Star10 
 6571 E> 0x1dd0633256e9 @  609 : 5f f3 f8 f1 f0 61 CallProperty2 r7, r2, r9, r10, [97]
         0x1dd0633256ef @  615 : bc                Star8 
         0x1dd0633256f0 @  616 : 19 fa f3          Mov r0, r7
         0x1dd0633256f3 @  619 : 68 01 f3 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r7-r8
 6556 E> 0x1dd0633256f7 @  623 : af fa fa 07 02    SuspendGenerator r0, r0-r6, [2]
         0x1dd0633256fc @  628 : b0 fa fa 07       ResumeGenerator r0, r0-r6
         0x1dd063325700 @  632 : bd                Star7 
         0x1dd063325701 @  633 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x1dd063325705 @  637 : bc                Star8 
         0x1dd063325706 @  638 : 0c                LdaZero 
         0x1dd063325707 @  639 : 1c f2             TestReferenceEqual r8
         0x1dd063325709 @  641 : 98 05             JumpIfTrue [5] (0x1dd06332570e @ 646)
         0x1dd06332570b @  643 : 0b f3             Ldar r7
         0x1dd06332570d @  645 : a8                ReThrow 
         0x1dd06332570e @  646 : 0b f3             Ldar r7
 6637 S> 0x1dd063325710 @  648 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x1dd063325712 @  650 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325714 @  652 : bd                Star7 
 6637 E> 0x1dd063325715 @  653 : 2d f3 2c 63       GetNamedProperty r7, [44], [99]
         0x1dd063325719 @  657 : 97 08             JumpIfToBooleanFalse [8] (0x1dd063325721 @ 665)
 5243 E> 0x1dd06332571b @  659 : 00 89 08 02 00 00 JumpLoop.Wide [520], [0] (0x1dd063325514 @ 140)
         0x1dd063325721 @  665 : 0e                LdaUndefined 
         0x1dd063325722 @  666 : bc                Star8 
         0x1dd063325723 @  667 : 19 fa f3          Mov r0, r7
         0x1dd063325726 @  670 : 68 04 f3 02       InvokeIntrinsic [_AsyncFunctionResolve], r7-r8
 6649 S> 0x1dd06332572a @  674 : a9                Return 
         0x1dd06332572b @  675 : bd                Star7 
         0x1dd06332572c @  676 : 82 f3 2d          CreateCatchContext r7, [45]
         0x1dd06332572f @  679 : be                Star6 
         0x1dd063325730 @  680 : 10                LdaTheHole 
         0x1dd063325731 @  681 : a6                SetPendingMessage 
         0x1dd063325732 @  682 : 0b f4             Ldar r6
         0x1dd063325734 @  684 : 1a f3             PushContext r7
         0x1dd063325736 @  686 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1dd063325738 @  688 : bb                Star9 
         0x1dd063325739 @  689 : 19 fa f2          Mov r0, r8
         0x1dd06332573c @  692 : 68 03 f2 02       InvokeIntrinsic [_AsyncFunctionReject], r8-r9
         0x1dd063325740 @  696 : a9                Return 
Constant pool (size = 46)
0x1dd063325749: [FixedArray] in OldSpace
 - map: 0x2fb5d63c12e1 <Map>
 - length: 46
           0: 88
           1: 396
           2: 628
           3: 0x206841e97f81 <String[4]: #args>
           4: 0x1dd0633258c9 <String[9]: #heartbeat>
           5: 0x206841e81939 <String[7]: #process>
           6: 0x206841e88cd9 <String[4]: #exit>
           7: 0x1dd0633250f9 <String[8]: #engine_1>
           8: 0x32fd62397c39 <String[6]: #Server>
           9: 0x1dd063325931 <String[17]: #http://localhost:>
          10: 0x206841e99081 <String[4]: #port>
          11: 0x2fb5d63c4a09 <String[7]: #console>
          12: 0x206841e8ac99 <String[3]: #log>
          13: 0x1dd063325131 <String[6]: #splash>
          14: 0x1dd063325989 <String[6]: #Engine>
          15: 0x1dd0633259a1 <SharedFunctionInfo>
          16: 0x1dd063325c11 <ObjectBoilerplateDescription[9]>
          17: 0x1dd063325d11 <String[13]: #timePerTickMs>
          18: 0x1dd063325c69 <String[21]: #timeMsAllowedPerTicks>
          19: 0x1dd063325d31 <String[18]: #gameStartTimeoutMs>
          20: 0x1dd063325c91 <String[31]: #maxWaitTimeMsBeforeStartingGame>
          21: 0x1dd063325d59 <String[19]: #delayBetweenTicksMs>
          22: 0x1dd063325ce9 <String[19]: #delayMsBetweenTicks>
          23: 0x1dd063325d81 <String[8]: #Recorder>
          24: 0x1dd063325d99 <String[17]: #createAndRegister>
          25: 0x1dd063325dc1 <ObjectBoilerplateDescription[3]>
          26: 0x1dd063325e11 <String[10]: #recordPath>
          27: 0x1dd063325de9 <String[23]: #keepAllCommandsAndTicks>
          28: 0x1dd063325e31 <String[16]: #teamNamesByToken>
          29: 0x206841e9c529 <String[4]: #JSON>
          30: 0x206841e8cb31 <String[5]: #parse>
          31: 0x1dd063325e81 <String[14]: #teamIdsByToken>
          32: 0x1dd063325ea1 <String[7]: #serveUi>
          33: 0x32fd6239bc41 <String[6]: #listen>
          34: 0x206841e86461 <String[6]: #logger>
          35: 0x206841e9c1f9 <String[4]: #info>
          36: 0x1dd063325f01 <String[27]: #Game finished, saving state>
          37: 0x1dd063325f31 <String[21]: #Saving state file to >
          38: 0x1dd063325f59 <String[10]: #saveToFile>
          39: 0x1dd063325f79 <String[8]: #s3Bucket>
          40: 0x1dd063325f91 <String[6]: #s3Path>
          41: 0x1dd063325fa9 <String[24]: #Saving state file to S3 >
          42: 0x206841e81179 <String[1]: #/>
          43: 0x1dd063325fe9 <String[8]: #saveToS3>
          44: 0x1dd063321661 <String[9]: #keepAlive>
          45: 0x1dd063326021 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 675)  ->   675 (prediction=3, data=6)
Source Position Table (size = 221)
0x1dd063326079 <ByteArray[221]>
0x1dd0633259a1 points to: [0x1dd063325a10]
=== [0x1dd063325a10] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 5317 S> 0x1dd063325a10 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1dd063325a12 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1dd063325a14 @    4 : c4                Star0 
 5340 E> 0x1dd063325a15 @    5 : 2d fa 01 00       GetNamedProperty r0, [1], [0]
         0x1dd063325a19 @    9 : c4                Star0 
 5359 E> 0x1dd063325a1a @   10 : 7c 02 02 29       CreateObjectLiteral [2], [2], #41
         0x1dd063325a1e @   14 : c2                Star2 
         0x1dd063325a1f @   15 : 17 05             LdaImmutableCurrentContextSlot [5]
 5398 E> 0x1dd063325a21 @   17 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1dd063325a23 @   19 : c1                Star3 
 5403 E> 0x1dd063325a24 @   20 : 2d f7 04 03       GetNamedProperty r3, [4], [3]
         0x1dd063325a28 @   24 : 19 03 f9          Mov a0, r1
         0x1dd063325a2b @   27 : 9e 04             JumpIfUndefinedOrNull [4] (0x1dd063325a2f @ 31)
         0x1dd063325a2d @   29 : 8a 19             Jump [25] (0x1dd063325a46 @ 54)
 5417 E> 0x1dd063325a2f @   31 : 21 05 05          LdaGlobal [5], [5]
         0x1dd063325a32 @   34 : bf                Star5 
 5422 E> 0x1dd063325a33 @   35 : 2d f5 06 07       GetNamedProperty r5, [6], [7]
         0x1dd063325a37 @   39 : c0                Star4 
 5422 E> 0x1dd063325a38 @   40 : 5d f6 f5 09       CallProperty0 r4, r5, [9]
         0x1dd063325a3c @   44 : c0                Star4 
 5430 E> 0x1dd063325a3d @   45 : 2d f6 07 0b       GetNamedProperty r4, [7], [11]
         0x1dd063325a41 @   49 : c1                Star3 
 5431 E> 0x1dd063325a42 @   50 : 5d f7 f6 0d       CallProperty0 r3, r4, [13]
         0x1dd063325a46 @   54 : 33 f8 08 0f       DefineNamedOwnProperty r2, [8], [15]
         0x1dd063325a4a @   58 : 0b fa             Ldar r0
 5324 E> 0x1dd063325a4c @   60 : 69 fa f9 02 11    Construct r0, r1-r2, [17]
 5457 S> 0x1dd063325a51 @   65 : a9                Return 
Constant pool (size = 9)
0x1dd063325a59: [FixedArray] in OldSpace
 - map: 0x2fb5d63c12e1 <Map>
 - length: 9
           0: 0x1dd063325111 <String[11]: #challenge_1>
           1: 0x1dd063325ab1 <String[18]: #Blitz2024Challenge>
           2: 0x1dd063325ad9 <ObjectBoilerplateDescription[3]>
           3: 0x206841e97f81 <String[4]: #args>
           4: 0x1dd063325b21 <String[10]: #randomSeed>
           5: 0x206841e9a991 <String[4]: #Math>
           6: 0x206841e9aba1 <String[6]: #random>
           7: 0x2fb5d63c62b9 <String[8]: #toString>
           8: 0x1dd063325b01 <String[11]: #RANDOM_SEED>
Handler Table (size = 0)
Source Position Table (size = 31)
0x1dd063325b71 <ByteArray[31]>
Boilerplate at 0x1dd063325ad9: 
0x1dd063325ad9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 3
           0: 8
           1: 0x1dd063325b01 <String[11]: #RANDOM_SEED>
           2: 0x2fb5d63c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1dd063325c11: 
0x1dd063325c11: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 9
           0: 8
           1: 0x1dd063325c69 <String[21]: #timeMsAllowedPerTicks>
           2: 0x2fb5d63c1501 <Odd Oddball: uninitialized>
           3: 0x1dd063325c91 <String[31]: #maxWaitTimeMsBeforeStartingGame>
           4: 0x2fb5d63c1501 <Odd Oddball: uninitialized>
           5: 0x1dd063325cc1 <String[21]: #expectedNumberOfTeams>
           6: 1
           7: 0x1dd063325ce9 <String[19]: #delayMsBetweenTicks>
           8: 0x2fb5d63c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1dd063325dc1: 
0x1dd063325dc1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2fb5d63c2059 <Map>
 - length: 3
           0: 8
           1: 0x1dd063325de9 <String[23]: #keepAllCommandsAndTicks>
           2: 0x2fb5d63c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1dd063326211 points to: [0x1dd063326280]
=== [0x1dd063326280] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 6675 S> 0x1dd063326280 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 6694 E> 0x1dd063326282 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1dd063326284 @    4 : c3                Star1 
 6703 E> 0x1dd063326285 @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
 6683 E> 0x1dd063326289 @    9 : 71 03 02          TestInstanceOf a0, [2]
         0x1dd06332628c @   12 : 99 17             JumpIfFalse [23] (0x1dd0633262a3 @ 35)
 6728 S> 0x1dd06332628e @   14 : 21 02 03          LdaGlobal [2], [3]
         0x1dd063326291 @   17 : c3                Star1 
 6736 E> 0x1dd063326292 @   18 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x1dd063326296 @   22 : c4                Star0 
 6744 E> 0x1dd063326297 @   23 : 2d 03 04 07       GetNamedProperty a0, [4], [7]
         0x1dd06332629b @   27 : c2                Star2 
 6736 E> 0x1dd06332629c @   28 : 5e fa f9 f8 09    CallProperty1 r0, r1, r2, [9]
         0x1dd0633262a1 @   33 : 8a 1a             Jump [26] (0x1dd0633262bb @ 59)
 6779 S> 0x1dd0633262a3 @   35 : 21 02 03          LdaGlobal [2], [3]
         0x1dd0633262a6 @   38 : c3                Star1 
 6787 E> 0x1dd0633262a7 @   39 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x1dd0633262ab @   43 : c4                Star0 
         0x1dd0633262ac @   44 : 13 05             LdaConstant [5]
         0x1dd0633262ae @   46 : c2                Star2 
         0x1dd0633262af @   47 : 0b 03             Ldar a0
 6825 E> 0x1dd0633262b1 @   49 : 77                ToString 
         0x1dd0633262b2 @   50 : 39 f8 0b          Add r2, [11]
         0x1dd0633262b5 @   53 : c2                Star2 
 6787 E> 0x1dd0633262b6 @   54 : 5e fa f9 f8 0c    CallProperty1 r0, r1, r2, [12]
 6843 S> 0x1dd0633262bb @   59 : 21 06 0e          LdaGlobal [6], [14]
         0x1dd0633262be @   62 : c3                Star1 
 6851 E> 0x1dd0633262bf @   63 : 2d f9 07 10       GetNamedProperty r1, [7], [16]
         0x1dd0633262c3 @   67 : c4                Star0 
         0x1dd0633262c4 @   68 : 0d 01             LdaSmi [1]
         0x1dd0633262c6 @   70 : c2                Star2 
 6851 E> 0x1dd0633262c7 @   71 : 5e fa f9 f8 12    CallProperty1 r0, r1, r2, [18]
         0x1dd0633262cc @   76 : 0e                LdaUndefined 
 6860 S> 0x1dd0633262cd @   77 : a9                Return 
Constant pool (size = 8)
0x1dd0633262d1: [FixedArray] in OldSpace
 - map: 0x2fb5d63c12e1 <Map>
 - length: 8
           0: 0x1dd0633250f9 <String[8]: #engine_1>
           1: 0x1dd063326321 <String[13]: #ArgumentError>
           2: 0x2fb5d63c4a09 <String[7]: #console>
           3: 0x206841e8ac99 <String[3]: #log>
           4: 0x2fb5d63c5721 <String[7]: #message>
           5: 0x1dd063326341 <String[31]: #Something went terribly wrong! >
           6: 0x206841e81939 <String[7]: #process>
           7: 0x206841e88cd9 <String[4]: #exit>
Handler Table (size = 0)
Source Position Table (size = 41)
0x1dd063326371 <ByteArray[41]>
<< OUTPUTTING DISASSEMBLY END >>
