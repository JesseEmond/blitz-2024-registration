<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x18f513f64e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x18f513f64e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x18f513f64e4c @    4 : c4                Star0 
 6901 S> 0x18f513f64e4d @    5 : a9                Return 
Constant pool (size = 1)
0x18f513f64e51: [FixedArray] in OldSpace
 - map: 0x27828d8812e1 <Map>
 - length: 1
           0: 0x18f513f64e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x18f513f67909 <ByteArray[8]>
0x18f513f64e69 points to: [0x18f513f64ed8]
=== [0x18f513f64ed8] DISASSEMBLY ===
Parameter count 6
Register count 22
Frame size 176
OSR urgency: 0
Bytecode age: 0
   10 E> 0x18f513f64ed8 @    0 : 83 00 04          CreateFunctionContext [0], [4]
         0x18f513f64edb @    3 : 1a f8             PushContext r2
         0x18f513f64edd @    5 : 10                LdaTheHole 
         0x18f513f64ede @    6 : 25 02             StaCurrentContextSlot [2]
         0x18f513f64ee0 @    8 : 10                LdaTheHole 
         0x18f513f64ee1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x18f513f64ee3 @   11 : 10                LdaTheHole 
         0x18f513f64ee4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x18f513f64ee6 @   14 : 10                LdaTheHole 
         0x18f513f64ee7 @   15 : 25 05             StaCurrentContextSlot [5]
   98 S> 0x18f513f64ee9 @   17 : 0b 02             Ldar <this>
         0x18f513f64eeb @   19 : 97 06             JumpIfToBooleanFalse [6] (0x18f513f64ef1 @ 25)
  112 E> 0x18f513f64eed @   21 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x18f513f64ef1 @   25 : 96 06             JumpIfToBooleanTrue [6] (0x18f513f64ef7 @ 31)
         0x18f513f64ef3 @   27 : 80 02 00 02       CreateClosure [2], [0], #2
         0x18f513f64ef7 @   31 : c4                Star0 
  215 S> 0x18f513f64ef8 @   32 : 21 03 02          LdaGlobal [3], [2]
         0x18f513f64efb @   35 : c0                Star4 
  222 E> 0x18f513f64efc @   36 : 2d f6 04 04       GetNamedProperty r4, [4], [4]
         0x18f513f64f00 @   40 : c1                Star3 
         0x18f513f64f01 @   41 : 13 05             LdaConstant [5]
         0x18f513f64f03 @   43 : be                Star6 
  237 E> 0x18f513f64f04 @   44 : 7c 06 06 29       CreateObjectLiteral [6], [6], #41
         0x18f513f64f08 @   48 : bd                Star7 
         0x18f513f64f09 @   49 : 19 03 f5          Mov a0, r5
  222 E> 0x18f513f64f0c @   52 : 5c f7 f6 04 07    CallProperty r3, r4-r7, [7]
  294 S> 0x18f513f64f11 @   57 : 13 07             LdaConstant [7]
         0x18f513f64f13 @   59 : bf                Star5 
  310 E> 0x18f513f64f14 @   60 : 62 04 f5 09       CallUndefinedReceiver1 a1, r5, [9]
         0x18f513f64f18 @   64 : c0                Star4 
  294 E> 0x18f513f64f19 @   65 : 62 fa f6 0b       CallUndefinedReceiver1 r0, r4, [11]
         0x18f513f64f1d @   69 : c3                Star1 
  346 S> 0x18f513f64f1e @   70 : 13 08             LdaConstant [8]
         0x18f513f64f20 @   72 : c0                Star4 
  346 E> 0x18f513f64f21 @   73 : 62 04 f6 0d       CallUndefinedReceiver1 a1, r4, [13]
  346 E> 0x18f513f64f25 @   77 : 25 02             StaCurrentContextSlot [2]
  392 S> 0x18f513f64f27 @   79 : 13 09             LdaConstant [9]
         0x18f513f64f29 @   81 : c0                Star4 
  392 E> 0x18f513f64f2a @   82 : 62 04 f6 0f       CallUndefinedReceiver1 a1, r4, [15]
  392 E> 0x18f513f64f2e @   86 : 25 03             StaCurrentContextSlot [3]
  501 S> 0x18f513f64f30 @   88 : 13 0a             LdaConstant [10]
  501 E> 0x18f513f64f32 @   90 : 25 04             StaCurrentContextSlot [4]
 3353 S> 0x18f513f64f34 @   92 : 2d f9 0b 11       GetNamedProperty r1, [11], [17]
         0x18f513f64f38 @   96 : 18 e8             Star r18
 3362 E> 0x18f513f64f3a @   98 : 21 0c 13          LdaGlobal [12], [19]
         0x18f513f64f3d @  101 : 18 e6             Star r20
 3370 E> 0x18f513f64f3f @  103 : 2d e6 0d 15       GetNamedProperty r20, [13], [21]
         0x18f513f64f43 @  107 : 18 e6             Star r20
 3375 E> 0x18f513f64f45 @  109 : 2d e6 0e 17       GetNamedProperty r20, [14], [23]
         0x18f513f64f49 @  113 : 18 e7             Star r19
         0x18f513f64f4b @  115 : 0d 02             LdaSmi [2]
         0x18f513f64f4d @  117 : 18 e5             Star r21
 3375 E> 0x18f513f64f4f @  119 : 5e e7 e6 e5 19    CallProperty1 r19, r20, r21, [25]
         0x18f513f64f54 @  124 : 18 e7             Star r19
 3361 E> 0x18f513f64f56 @  126 : 62 e8 e7 1b       CallUndefinedReceiver1 r18, r19, [27]
         0x18f513f64f5a @  130 : 18 e8             Star r18
 3389 E> 0x18f513f64f5c @  132 : 2d e8 0f 1d       GetNamedProperty r18, [15], [29]
         0x18f513f64f60 @  136 : 18 e9             Star r17
         0x18f513f64f62 @  138 : 7c 10 1f 08       CreateObjectLiteral [16], [31], #8
         0x18f513f64f66 @  142 : 18 e7             Star r19
 3390 E> 0x18f513f64f68 @  144 : 5e e9 e8 e7 20    CallProperty1 r17, r18, r19, [32]
         0x18f513f64f6d @  149 : 18 e9             Star r17
 4664 E> 0x18f513f64f6f @  151 : 2d e9 11 22       GetNamedProperty r17, [17], [34]
         0x18f513f64f73 @  155 : 18 ea             Star r16
 4673 E> 0x18f513f64f75 @  157 : 21 0c 13          LdaGlobal [12], [19]
         0x18f513f64f78 @  160 : 18 e8             Star r18
 4681 E> 0x18f513f64f7a @  162 : 2d e8 12 24       GetNamedProperty r18, [18], [36]
         0x18f513f64f7e @  166 : 18 e8             Star r18
 4685 E> 0x18f513f64f80 @  168 : 2d e8 13 26       GetNamedProperty r18, [19], [38]
         0x18f513f64f84 @  172 : 96 04             JumpIfToBooleanTrue [4] (0x18f513f64f88 @ 176)
         0x18f513f64f86 @  174 : 13 14             LdaConstant [20]
         0x18f513f64f88 @  176 : 18 e8             Star r18
 4665 E> 0x18f513f64f8a @  178 : 5e ea e9 e8 28    CallProperty1 r16, r17, r18, [40]
         0x18f513f64f8f @  183 : 18 ea             Star r16
 4707 E> 0x18f513f64f91 @  185 : 2d ea 15 2a       GetNamedProperty r16, [21], [42]
         0x18f513f64f95 @  189 : b5                Star15 
         0x18f513f64f96 @  190 : 13 16             LdaConstant [22]
         0x18f513f64f98 @  192 : 18 e9             Star r17
 4708 E> 0x18f513f64f9a @  194 : 5e eb ea e9 2c    CallProperty1 r15, r16, r17, [44]
         0x18f513f64f9f @  199 : b5                Star15 
 4739 E> 0x18f513f64fa0 @  200 : 2d eb 15 2e       GetNamedProperty r15, [21], [46]
         0x18f513f64fa4 @  204 : b6                Star14 
         0x18f513f64fa5 @  205 : 13 17             LdaConstant [23]
         0x18f513f64fa7 @  207 : 18 ea             Star r16
 4740 E> 0x18f513f64fa9 @  209 : 5e ec eb ea 30    CallProperty1 r14, r15, r16, [48]
         0x18f513f64fae @  214 : b6                Star14 
 4763 E> 0x18f513f64faf @  215 : 2d ec 15 32       GetNamedProperty r14, [21], [50]
         0x18f513f64fb3 @  219 : b7                Star13 
         0x18f513f64fb4 @  220 : 13 18             LdaConstant [24]
         0x18f513f64fb6 @  222 : b5                Star15 
 4764 E> 0x18f513f64fb7 @  223 : 5e ed ec eb 34    CallProperty1 r13, r14, r15, [52]
         0x18f513f64fbc @  228 : b7                Star13 
 4785 E> 0x18f513f64fbd @  229 : 2d ed 15 36       GetNamedProperty r13, [21], [54]
         0x18f513f64fc1 @  233 : b8                Star12 
         0x18f513f64fc2 @  234 : 13 19             LdaConstant [25]
         0x18f513f64fc4 @  236 : b6                Star14 
 4786 E> 0x18f513f64fc5 @  237 : 5e ee ed ec 38    CallProperty1 r12, r13, r14, [56]
         0x18f513f64fca @  242 : b8                Star12 
 4805 E> 0x18f513f64fcb @  243 : 2d ee 15 3a       GetNamedProperty r12, [21], [58]
         0x18f513f64fcf @  247 : b9                Star11 
         0x18f513f64fd0 @  248 : 13 1a             LdaConstant [26]
         0x18f513f64fd2 @  250 : b7                Star13 
 4806 E> 0x18f513f64fd3 @  251 : 5e ef ee ed 3c    CallProperty1 r11, r12, r13, [60]
         0x18f513f64fd8 @  256 : b9                Star11 
 4828 E> 0x18f513f64fd9 @  257 : 2d ef 15 3e       GetNamedProperty r11, [21], [62]
         0x18f513f64fdd @  261 : ba                Star10 
         0x18f513f64fde @  262 : 13 1b             LdaConstant [27]
         0x18f513f64fe0 @  264 : b8                Star12 
 4829 E> 0x18f513f64fe1 @  265 : 5e f0 ef ee 40    CallProperty1 r10, r11, r12, [64]
         0x18f513f64fe6 @  270 : ba                Star10 
 4858 E> 0x18f513f64fe7 @  271 : 2d f0 15 42       GetNamedProperty r10, [21], [66]
         0x18f513f64feb @  275 : bb                Star9 
         0x18f513f64fec @  276 : 13 1c             LdaConstant [28]
         0x18f513f64fee @  278 : b9                Star11 
 4859 E> 0x18f513f64fef @  279 : 5e f1 f0 ef 44    CallProperty1 r9, r10, r11, [68]
         0x18f513f64ff4 @  284 : bb                Star9 
 4879 E> 0x18f513f64ff5 @  285 : 2d f1 15 46       GetNamedProperty r9, [21], [70]
         0x18f513f64ff9 @  289 : bc                Star8 
         0x18f513f64ffa @  290 : 13 1d             LdaConstant [29]
         0x18f513f64ffc @  292 : ba                Star10 
 4880 E> 0x18f513f64ffd @  293 : 5e f2 f1 f0 48    CallProperty1 r8, r9, r10, [72]
         0x18f513f65002 @  298 : bc                Star8 
 4897 E> 0x18f513f65003 @  299 : 2d f2 15 4a       GetNamedProperty r8, [21], [74]
         0x18f513f65007 @  303 : bd                Star7 
         0x18f513f65008 @  304 : 13 11             LdaConstant [17]
         0x18f513f6500a @  306 : bb                Star9 
 4898 E> 0x18f513f6500b @  307 : 5e f3 f2 f1 4c    CallProperty1 r7, r8, r9, [76]
         0x18f513f65010 @  312 : bd                Star7 
 4918 E> 0x18f513f65011 @  313 : 2d f3 15 4e       GetNamedProperty r7, [21], [78]
         0x18f513f65015 @  317 : be                Star6 
         0x18f513f65016 @  318 : 13 1e             LdaConstant [30]
         0x18f513f65018 @  320 : bc                Star8 
 4919 E> 0x18f513f65019 @  321 : 5e f4 f3 f2 50    CallProperty1 r6, r7, r8, [80]
         0x18f513f6501e @  326 : be                Star6 
 4942 E> 0x18f513f6501f @  327 : 2d f4 1f 52       GetNamedProperty r6, [31], [82]
         0x18f513f65023 @  331 : bf                Star5 
         0x18f513f65024 @  332 : 13 1e             LdaConstant [30]
         0x18f513f65026 @  334 : bd                Star7 
         0x18f513f65027 @  335 : 13 20             LdaConstant [32]
         0x18f513f65029 @  337 : bc                Star8 
 4943 E> 0x18f513f6502a @  338 : 5f f5 f4 f3 f2 54 CallProperty2 r5, r6, r7, r8, [84]
         0x18f513f65030 @  344 : bf                Star5 
 5040 E> 0x18f513f65031 @  345 : 2d f5 12 56       GetNamedProperty r5, [18], [86]
         0x18f513f65035 @  349 : c0                Star4 
         0x18f513f65036 @  350 : 11                LdaTrue 
         0x18f513f65037 @  351 : be                Star6 
 5041 E> 0x18f513f65038 @  352 : 5e f6 f5 f4 58    CallProperty1 r4, r5, r6, [88]
         0x18f513f6503d @  357 : c0                Star4 
 5055 E> 0x18f513f6503e @  358 : 2d f6 21 5a       GetNamedProperty r4, [33], [90]
         0x18f513f65042 @  362 : c1                Star3 
 5056 E> 0x18f513f65043 @  363 : 5d f7 f6 5c       CallProperty0 r3, r4, [92]
 3341 E> 0x18f513f65047 @  367 : 25 05             StaCurrentContextSlot [5]
 5069 S> 0x18f513f65049 @  369 : 80 22 01 02       CreateClosure [34], [1], #2
         0x18f513f6504d @  373 : c0                Star4 
 6651 E> 0x18f513f6504e @  374 : 61 f6 5e          CallUndefinedReceiver0 r4, [94]
         0x18f513f65051 @  377 : c0                Star4 
 6653 E> 0x18f513f65052 @  378 : 2d f6 23 60       GetNamedProperty r4, [35], [96]
         0x18f513f65056 @  382 : c1                Star3 
         0x18f513f65057 @  383 : 80 24 02 02       CreateClosure [36], [2], #2
         0x18f513f6505b @  387 : bf                Star5 
 6659 E> 0x18f513f6505c @  388 : 5e f7 f6 f5 62    CallProperty1 r3, r4, r5, [98]
         0x18f513f65061 @  393 : 0e                LdaUndefined 
 6898 S> 0x18f513f65062 @  394 : a9                Return 
Constant pool (size = 37)
0x18f513f65069: [FixedArray] in OldSpace
 - map: 0x27828d8812e1 <Map>
 - length: 37
           0: 0x18f513f651a1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x18f513f65291 <String[15]: #__importDefault>
           2: 0x18f513f652b1 <SharedFunctionInfo>
           3: 0x27828d885ab9 <String[6]: #Object>
           4: 0x27828d884c11 <String[14]: #defineProperty>
           5: 0x18f513f65369 <String[10]: #__esModule>
           6: 0x18f513f66571 <ObjectBoilerplateDescription[3]>
           7: 0x18f513f66599 <String[5]: #yargs>
           8: 0x18f513f665b1 <String[13]: #@blitz/engine>
           9: 0x18f513f665d1 <String[16]: #@blitz/challenge>
          10: 0x18f513f665f1 <String[2823]: #...<truncated>>>
          11: 0x27828d884bf9 <String[7]: #default>
          12: 0x229efaa81939 <String[7]: #process>
          13: 0x130eea3b1881 <String[4]: #argv>
          14: 0x229efaa87319 <String[5]: #slice>
          15: 0x229efaa8cbb9 <String[7]: #options>
          16: 0x18f513f67151 <ObjectBoilerplateDescription[27]>
          17: 0x229efaa99699 <String[7]: #version>
          18: 0x229efaaa2b81 <String[3]: #env>
          19: 0x18f513f67761 <String[7]: #VERSION>
          20: 0x18f513f67779 <String[3]: #DEV>
          21: 0x18f513f67791 <String[4]: #hide>
          22: 0x18f513f65e61 <String[18]: #gameStartTimeoutMs>
          23: 0x18f513f65f41 <String[10]: #recordPath>
          24: 0x18f513f660a9 <String[8]: #s3Bucket>
          25: 0x18f513f660c1 <String[6]: #s3Path>
          26: 0x18f513f61791 <String[9]: #keepAlive>
          27: 0x18f513f65f61 <String[16]: #teamNamesByToken>
          28: 0x18f513f65fd1 <String[7]: #serveUi>
          29: 0x229efaa99081 <String[4]: #port>
          30: 0x18f513f65c51 <String[10]: #randomSeed>
          31: 0x18f513f677a9 <String[5]: #alias>
          32: 0x18f513f677c1 <String[7]: #mapName>
          33: 0x18f513f677d9 <String[9]: #parseSync>
          34: 0x18f513f65549 <SharedFunctionInfo>
          35: 0x229efaa9b5c9 <String[5]: #catch>
          36: 0x18f513f66341 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 142)
0x18f513f67811 <ByteArray[142]>
0x18f513f652b1 points to: [0x18f513f65320]
=== [0x18f513f65320] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  153 S> 0x18f513f65320 @    0 : 0b 03             Ldar a0
         0x18f513f65322 @    2 : 97 0c             JumpIfToBooleanFalse [12] (0x18f513f6532e @ 14)
  172 E> 0x18f513f65324 @    4 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x18f513f65328 @    8 : 97 06             JumpIfToBooleanFalse [6] (0x18f513f6532e @ 14)
         0x18f513f6532a @   10 : 0b 03             Ldar a0
         0x18f513f6532c @   12 : 8a 0f             Jump [15] (0x18f513f6533b @ 27)
  186 E> 0x18f513f6532e @   14 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
         0x18f513f65332 @   18 : c4                Star0 
         0x18f513f65333 @   19 : 0b 03             Ldar a0
  205 E> 0x18f513f65335 @   21 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x18f513f65339 @   25 : 0b fa             Ldar r0
  211 S> 0x18f513f6533b @   27 : a9                Return 
Constant pool (size = 3)
0x18f513f65341: [FixedArray] in OldSpace
 - map: 0x27828d8812e1 <Map>
 - length: 3
           0: 0x18f513f65369 <String[10]: #__esModule>
           1: 0x18f513f65389 <ObjectBoilerplateDescription[3]>
           2: 0x27828d884bf9 <String[7]: #default>
Handler Table (size = 0)
Source Position Table (size = 13)
0x18f513f653b1 <ByteArray[13]>
Boilerplate at 0x18f513f65389: 
0x18f513f65389: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27828d882059 <Map>
 - length: 3
           0: 8
           1: 0x27828d884bf9 <String[7]: #default>
           2: 0x27828d881501 <Odd Oddball: uninitialized>
Boilerplate at 0x18f513f66571: 
0x18f513f66571: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27828d882059 <Map>
 - length: 3
           0: 8
           1: 0x27828d886419 <String[5]: #value>
           2: 0x27828d881729 <true>
Boilerplate at 0x18f513f67151: 
0x18f513f67151: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27828d882059 <Map>
 - length: 27
           0: 8
           1: 0x18f513f65e41 <String[13]: #timePerTickMs>
           2: 0x18f513f67239 <ObjectBoilerplateDescription[7]>
           3: 0x18f513f65e89 <String[19]: #delayBetweenTicksMs>
           4: 0x18f513f672d9 <ObjectBoilerplateDescription[7]>
           5: 0x18f513f65e61 <String[18]: #gameStartTimeoutMs>
           6: 0x18f513f67351 <ObjectBoilerplateDescription[7]>
           7: 0x18f513f65f41 <String[10]: #recordPath>
           8: 0x18f513f673c9 <ObjectBoilerplateDescription[5]>
           9: 0x18f513f65c51 <String[10]: #randomSeed>
          10: 0x18f513f67431 <ObjectBoilerplateDescription[3]>
          11: 0x18f513f660a9 <String[8]: #s3Bucket>
          12: 0x18f513f67459 <ObjectBoilerplateDescription[3]>
          13: 0x18f513f660c1 <String[6]: #s3Path>
          14: 0x18f513f67481 <ObjectBoilerplateDescription[3]>
          15: 0x18f513f61791 <String[9]: #keepAlive>
          16: 0x18f513f674a9 <ObjectBoilerplateDescription[7]>
          17: 0x18f513f65f61 <String[16]: #teamNamesByToken>
          18: 0x18f513f67541 <ObjectBoilerplateDescription[3]>
          19: 0x18f513f65fb1 <String[14]: #teamIdsByToken>
          20: 0x18f513f67569 <ObjectBoilerplateDescription[3]>
          21: 0x18f513f65fd1 <String[7]: #serveUi>
          22: 0x18f513f67591 <ObjectBoilerplateDescription[5]>
          23: 0x229efaa99081 <String[4]: #port>
          24: 0x18f513f675c9 <ObjectBoilerplateDescription[7]>
          25: 0x18f513f659f9 <String[9]: #heartbeat>
          26: 0x18f513f67641 <ObjectBoilerplateDescription[5]>
0x18f513f65549 points to: [0x18f513f655b8]
=== [0x18f513f655b8] DISASSEMBLY ===
Parameter count 1
Register count 13
Frame size 104
OSR urgency: 0
Bytecode age: 0
         0x18f513f655b8 @    0 : ae fa 00 03       SwitchOnGeneratorState r0, [0], [3] { 0: @88, 1: @396, 2: @628 }
         0x18f513f655bc @    4 : 19 fe f4          Mov <closure>, r6
         0x18f513f655bf @    7 : 19 02 f3          Mov <this>, r7
 5070 E> 0x18f513f655c2 @   10 : 68 02 f4 02       InvokeIntrinsic [_AsyncFunctionEnter], r6-r7
         0x18f513f655c6 @   14 : c4                Star0 
         0x18f513f655c7 @   15 : 19 ff f4          Mov <context>, r6
 5088 S> 0x18f513f655ca @   18 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x18f513f655cc @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f655ce @   22 : bd                Star7 
 5097 E> 0x18f513f655cf @   23 : 2d f3 04 00       GetNamedProperty r7, [4], [0]
         0x18f513f655d3 @   27 : 97 5e             JumpIfToBooleanFalse [94] (0x18f513f65631 @ 121)
 5118 S> 0x18f513f655d5 @   29 : 21 05 02          LdaGlobal [5], [2]
         0x18f513f655d8 @   32 : bc                Star8 
 5126 E> 0x18f513f655d9 @   33 : 2d f2 06 04       GetNamedProperty r8, [6], [4]
         0x18f513f655dd @   37 : bd                Star7 
         0x18f513f655de @   38 : 17 02             LdaImmutableCurrentContextSlot [2]
 5138 E> 0x18f513f655e0 @   40 : aa 07             ThrowReferenceErrorIfHole [7]
         0x18f513f655e2 @   42 : ba                Star10 
 5147 E> 0x18f513f655e3 @   43 : 2d f0 08 06       GetNamedProperty r10, [8], [6]
         0x18f513f655e7 @   47 : ba                Star10 
 5154 E> 0x18f513f655e8 @   48 : 2d f0 04 08       GetNamedProperty r10, [4], [8]
         0x18f513f655ec @   52 : bb                Star9 
         0x18f513f655ed @   53 : 13 09             LdaConstant [9]
         0x18f513f655ef @   55 : b9                Star11 
         0x18f513f655f0 @   56 : 17 05             LdaImmutableCurrentContextSlot [5]
 5184 E> 0x18f513f655f2 @   58 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f655f4 @   60 : b8                Star12 
 5189 E> 0x18f513f655f5 @   61 : 2d ee 0a 0b       GetNamedProperty r12, [10], [11]
         0x18f513f655f9 @   65 : 77                ToString 
         0x18f513f655fa @   66 : 39 ef 0a          Add r11, [10]
         0x18f513f655fd @   69 : b9                Star11 
 5154 E> 0x18f513f655fe @   70 : 5e f1 f0 ef 0d    CallProperty1 r9, r10, r11, [13]
         0x18f513f65603 @   75 : ba                Star10 
         0x18f513f65604 @   76 : 19 fa f1          Mov r0, r9
         0x18f513f65607 @   79 : 68 01 f1 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r9-r10
 5132 E> 0x18f513f6560b @   83 : af fa fa 09 00    SuspendGenerator r0, r0-r8, [0]
         0x18f513f65610 @   88 : b0 fa fa 09       ResumeGenerator r0, r0-r8
         0x18f513f65614 @   92 : bb                Star9 
         0x18f513f65615 @   93 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x18f513f65619 @   97 : ba                Star10 
         0x18f513f6561a @   98 : 0c                LdaZero 
         0x18f513f6561b @   99 : 1c f0             TestReferenceEqual r10
         0x18f513f6561d @  101 : 98 05             JumpIfTrue [5] (0x18f513f65622 @ 106)
         0x18f513f6561f @  103 : 0b f1             Ldar r9
         0x18f513f65621 @  105 : a8                ReThrow 
         0x18f513f65622 @  106 : 0b f1             Ldar r9
         0x18f513f65624 @  108 : 97 05             JumpIfToBooleanFalse [5] (0x18f513f65629 @ 113)
         0x18f513f65626 @  110 : 0c                LdaZero 
         0x18f513f65627 @  111 : 8a 04             Jump [4] (0x18f513f6562b @ 115)
         0x18f513f65629 @  113 : 0d 01             LdaSmi [1]
         0x18f513f6562b @  115 : bb                Star9 
 5126 E> 0x18f513f6562c @  116 : 5e f3 f2 f1 0f    CallProperty1 r7, r8, r9, [15]
 5218 S> 0x18f513f65631 @  121 : 21 0b 11          LdaGlobal [11], [17]
         0x18f513f65634 @  124 : bc                Star8 
 5226 E> 0x18f513f65635 @  125 : 2d f2 0c 13       GetNamedProperty r8, [12], [19]
         0x18f513f65639 @  129 : bd                Star7 
         0x18f513f6563a @  130 : 17 04             LdaImmutableCurrentContextSlot [4]
 5230 E> 0x18f513f6563c @  132 : aa 0d             ThrowReferenceErrorIfHole [13]
         0x18f513f6563e @  134 : bb                Star9 
 5226 E> 0x18f513f6563f @  135 : 5e f3 f2 f1 15    CallProperty1 r7, r8, r9, [21]
 5271 S> 0x18f513f65644 @  140 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x18f513f65646 @  142 : aa 07             ThrowReferenceErrorIfHole [7]
         0x18f513f65648 @  144 : bd                Star7 
 5284 E> 0x18f513f65649 @  145 : 2d f3 0e 17       GetNamedProperty r7, [14], [23]
         0x18f513f6564d @  149 : bd                Star7 
         0x18f513f6564e @  150 : 80 0f 00 02       CreateClosure [15], [0], #2
         0x18f513f65652 @  154 : bc                Star8 
         0x18f513f65653 @  155 : 7c 10 19 29       CreateObjectLiteral [16], [25], #41
         0x18f513f65657 @  159 : bb                Star9 
         0x18f513f65658 @  160 : 17 05             LdaImmutableCurrentContextSlot [5]
 5506 E> 0x18f513f6565a @  162 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f6565c @  164 : ba                Star10 
 5511 E> 0x18f513f6565d @  165 : 2d f0 11 1a       GetNamedProperty r10, [17], [26]
         0x18f513f65661 @  169 : 33 f1 12 1c       DefineNamedOwnProperty r9, [18], [28]
         0x18f513f65665 @  173 : 17 05             LdaImmutableCurrentContextSlot [5]
 5571 E> 0x18f513f65667 @  175 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f65669 @  177 : ba                Star10 
 5576 E> 0x18f513f6566a @  178 : 2d f0 13 1e       GetNamedProperty r10, [19], [30]
         0x18f513f6566e @  182 : 33 f1 14 20       DefineNamedOwnProperty r9, [20], [32]
         0x18f513f65672 @  186 : 17 05             LdaImmutableCurrentContextSlot [5]
 5667 E> 0x18f513f65674 @  188 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f65676 @  190 : ba                Star10 
 5672 E> 0x18f513f65677 @  191 : 2d f0 15 22       GetNamedProperty r10, [21], [34]
         0x18f513f6567b @  195 : 33 f1 16 24       DefineNamedOwnProperty r9, [22], [36]
         0x18f513f6567f @  199 : 0b f3             Ldar r7
 5271 E> 0x18f513f65681 @  201 : 69 f3 f2 02 26    Construct r7, r8-r9, [38]
         0x18f513f65686 @  206 : c3                Star1 
 5730 S> 0x18f513f65687 @  207 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x18f513f65689 @  209 : aa 07             ThrowReferenceErrorIfHole [7]
         0x18f513f6568b @  211 : bc                Star8 
 5739 E> 0x18f513f6568c @  212 : 2d f2 17 28       GetNamedProperty r8, [23], [40]
         0x18f513f65690 @  216 : bc                Star8 
 5748 E> 0x18f513f65691 @  217 : 2d f2 18 2a       GetNamedProperty r8, [24], [42]
         0x18f513f65695 @  221 : bd                Star7 
 5766 E> 0x18f513f65696 @  222 : 7c 19 2c 29       CreateObjectLiteral [25], [44], #41
         0x18f513f6569a @  226 : ba                Star10 
         0x18f513f6569b @  227 : 17 05             LdaImmutableCurrentContextSlot [5]
 5815 E> 0x18f513f6569d @  229 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f6569f @  231 : b9                Star11 
 5820 E> 0x18f513f656a0 @  232 : 2d ef 1a 2d       GetNamedProperty r11, [26], [45]
         0x18f513f656a4 @  236 : 55                ToBooleanLogicalNot 
         0x18f513f656a5 @  237 : 56                LogicalNot 
         0x18f513f656a6 @  238 : 33 f0 1b 2f       DefineNamedOwnProperty r10, [27], [47]
 5748 E> 0x18f513f656aa @  242 : 5f f3 f2 f9 f0 31 CallProperty2 r7, r8, r1, r10, [49]
         0x18f513f656b0 @  248 : c2                Star2 
 5877 S> 0x18f513f656b1 @  249 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x18f513f656b3 @  251 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f656b5 @  253 : bd                Star7 
 5882 E> 0x18f513f656b6 @  254 : 2d f3 1c 33       GetNamedProperty r7, [28], [51]
         0x18f513f656ba @  258 : 97 1c             JumpIfToBooleanFalse [28] (0x18f513f656d6 @ 286)
 5901 E> 0x18f513f656bc @  260 : 21 1d 35          LdaGlobal [29], [53]
         0x18f513f656bf @  263 : bc                Star8 
 5906 E> 0x18f513f656c0 @  264 : 2d f2 1e 37       GetNamedProperty r8, [30], [55]
         0x18f513f656c4 @  268 : bd                Star7 
         0x18f513f656c5 @  269 : 17 05             LdaImmutableCurrentContextSlot [5]
 5912 E> 0x18f513f656c7 @  271 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f656c9 @  273 : bb                Star9 
 5917 E> 0x18f513f656ca @  274 : 2d f1 1c 33       GetNamedProperty r9, [28], [51]
         0x18f513f656ce @  278 : bb                Star9 
 5906 E> 0x18f513f656cf @  279 : 5e f3 f2 f1 39    CallProperty1 r7, r8, r9, [57]
         0x18f513f656d4 @  284 : 8a 03             Jump [3] (0x18f513f656d7 @ 287)
         0x18f513f656d6 @  286 : 0f                LdaNull 
         0x18f513f656d7 @  287 : c1                Star3 
 5974 S> 0x18f513f656d8 @  288 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x18f513f656da @  290 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f656dc @  292 : bd                Star7 
 5979 E> 0x18f513f656dd @  293 : 2d f3 1f 3b       GetNamedProperty r7, [31], [59]
         0x18f513f656e1 @  297 : 97 1c             JumpIfToBooleanFalse [28] (0x18f513f656fd @ 325)
 5996 E> 0x18f513f656e3 @  299 : 21 1d 35          LdaGlobal [29], [53]
         0x18f513f656e6 @  302 : bc                Star8 
 6001 E> 0x18f513f656e7 @  303 : 2d f2 1e 37       GetNamedProperty r8, [30], [55]
         0x18f513f656eb @  307 : bd                Star7 
         0x18f513f656ec @  308 : 17 05             LdaImmutableCurrentContextSlot [5]
 6007 E> 0x18f513f656ee @  310 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f656f0 @  312 : bb                Star9 
 6012 E> 0x18f513f656f1 @  313 : 2d f1 1f 3b       GetNamedProperty r9, [31], [59]
         0x18f513f656f5 @  317 : bb                Star9 
 6001 E> 0x18f513f656f6 @  318 : 5e f3 f2 f1 3d    CallProperty1 r7, r8, r9, [61]
         0x18f513f656fb @  323 : 8a 03             Jump [3] (0x18f513f656fe @ 326)
         0x18f513f656fd @  325 : 0f                LdaNull 
         0x18f513f656fe @  326 : c0                Star4 
 6059 S> 0x18f513f656ff @  327 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x18f513f65701 @  329 : aa 07             ThrowReferenceErrorIfHole [7]
         0x18f513f65703 @  331 : bd                Star7 
 6072 E> 0x18f513f65704 @  332 : 2d f3 08 06       GetNamedProperty r7, [8], [6]
         0x18f513f65708 @  336 : bd                Star7 
         0x18f513f65709 @  337 : 17 05             LdaImmutableCurrentContextSlot [5]
 6087 E> 0x18f513f6570b @  339 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f6570d @  341 : bb                Star9 
 6092 E> 0x18f513f6570e @  342 : 2d f1 0a 0b       GetNamedProperty r9, [10], [11]
         0x18f513f65712 @  346 : bb                Star9 
         0x18f513f65713 @  347 : 17 05             LdaImmutableCurrentContextSlot [5]
 6098 E> 0x18f513f65715 @  349 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f65717 @  351 : ba                Star10 
 6103 E> 0x18f513f65718 @  352 : 2d f0 20 3f       GetNamedProperty r10, [32], [63]
         0x18f513f6571c @  356 : ba                Star10 
         0x18f513f6571d @  357 : 0b f3             Ldar r7
         0x18f513f6571f @  359 : 19 f9 f2          Mov r1, r8
         0x18f513f65722 @  362 : 19 f7 ef          Mov r3, r11
         0x18f513f65725 @  365 : 19 f6 ee          Mov r4, r12
 6059 E> 0x18f513f65728 @  368 : 69 f3 f2 05 41    Construct r7, r8-r12, [65]
         0x18f513f6572d @  373 : bf                Star5 
 6168 S> 0x18f513f6572e @  374 : 2d f5 21 43       GetNamedProperty r5, [33], [67]
         0x18f513f65732 @  378 : bd                Star7 
 6168 E> 0x18f513f65733 @  379 : 5d f3 f5 45       CallProperty0 r7, r5, [69]
         0x18f513f65737 @  383 : bc                Star8 
         0x18f513f65738 @  384 : 19 fa f3          Mov r0, r7
         0x18f513f6573b @  387 : 68 01 f3 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r7-r8
 6155 E> 0x18f513f6573f @  391 : af fa fa 07 01    SuspendGenerator r0, r0-r6, [1]
         0x18f513f65744 @  396 : b0 fa fa 07       ResumeGenerator r0, r0-r6
         0x18f513f65748 @  400 : bd                Star7 
         0x18f513f65749 @  401 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x18f513f6574d @  405 : bc                Star8 
         0x18f513f6574e @  406 : 0c                LdaZero 
         0x18f513f6574f @  407 : 1c f2             TestReferenceEqual r8
         0x18f513f65751 @  409 : 98 05             JumpIfTrue [5] (0x18f513f65756 @ 414)
         0x18f513f65753 @  411 : 0b f3             Ldar r7
         0x18f513f65755 @  413 : a8                ReThrow 
 6186 S> 0x18f513f65756 @  414 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x18f513f65758 @  416 : aa 07             ThrowReferenceErrorIfHole [7]
         0x18f513f6575a @  418 : bc                Star8 
 6195 E> 0x18f513f6575b @  419 : 2d f2 22 47       GetNamedProperty r8, [34], [71]
         0x18f513f6575f @  423 : bc                Star8 
 6202 E> 0x18f513f65760 @  424 : 2d f2 23 49       GetNamedProperty r8, [35], [73]
         0x18f513f65764 @  428 : bd                Star7 
         0x18f513f65765 @  429 : 13 24             LdaConstant [36]
         0x18f513f65767 @  431 : bb                Star9 
 6202 E> 0x18f513f65768 @  432 : 5e f3 f2 f1 4b    CallProperty1 r7, r8, r9, [75]
 6247 S> 0x18f513f6576d @  437 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x18f513f6576f @  439 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f65771 @  441 : bd                Star7 
 6256 E> 0x18f513f65772 @  442 : 2d f3 1a 2d       GetNamedProperty r7, [26], [45]
         0x18f513f65776 @  446 : 97 3b             JumpIfToBooleanFalse [59] (0x18f513f657b1 @ 505)
 6282 S> 0x18f513f65778 @  448 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x18f513f6577a @  450 : aa 07             ThrowReferenceErrorIfHole [7]
         0x18f513f6577c @  452 : bc                Star8 
 6291 E> 0x18f513f6577d @  453 : 2d f2 22 47       GetNamedProperty r8, [34], [71]
         0x18f513f65781 @  457 : bc                Star8 
 6298 E> 0x18f513f65782 @  458 : 2d f2 23 4d       GetNamedProperty r8, [35], [77]
         0x18f513f65786 @  462 : bd                Star7 
         0x18f513f65787 @  463 : 13 25             LdaConstant [37]
         0x18f513f65789 @  465 : bb                Star9 
         0x18f513f6578a @  466 : 17 05             LdaImmutableCurrentContextSlot [5]
 6327 E> 0x18f513f6578c @  468 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f6578e @  470 : ba                Star10 
 6332 E> 0x18f513f6578f @  471 : 2d f0 1a 2d       GetNamedProperty r10, [26], [45]
         0x18f513f65793 @  475 : 77                ToString 
         0x18f513f65794 @  476 : 39 f1 4f          Add r9, [79]
         0x18f513f65797 @  479 : bb                Star9 
 6298 E> 0x18f513f65798 @  480 : 5e f3 f2 f1 50    CallProperty1 r7, r8, r9, [80]
 6368 S> 0x18f513f6579d @  485 : 2d f8 26 52       GetNamedProperty r2, [38], [82]
         0x18f513f657a1 @  489 : bd                Star7 
         0x18f513f657a2 @  490 : 17 05             LdaImmutableCurrentContextSlot [5]
 6379 E> 0x18f513f657a4 @  492 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f657a6 @  494 : bb                Star9 
 6384 E> 0x18f513f657a7 @  495 : 2d f1 1a 2d       GetNamedProperty r9, [26], [45]
         0x18f513f657ab @  499 : bb                Star9 
 6368 E> 0x18f513f657ac @  500 : 5e f3 f8 f1 54    CallProperty1 r7, r2, r9, [84]
 6415 S> 0x18f513f657b1 @  505 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x18f513f657b3 @  507 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f657b5 @  509 : bd                Star7 
 6424 E> 0x18f513f657b6 @  510 : 2d f3 27 56       GetNamedProperty r7, [39], [86]
         0x18f513f657ba @  514 : 97 86             JumpIfToBooleanFalse [134] (0x18f513f65840 @ 648)
         0x18f513f657bc @  516 : 17 05             LdaImmutableCurrentContextSlot [5]
 6436 E> 0x18f513f657be @  518 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f657c0 @  520 : bd                Star7 
 6441 E> 0x18f513f657c1 @  521 : 2d f3 28 58       GetNamedProperty r7, [40], [88]
         0x18f513f657c5 @  525 : 97 7b             JumpIfToBooleanFalse [123] (0x18f513f65840 @ 648)
 6463 S> 0x18f513f657c7 @  527 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x18f513f657c9 @  529 : aa 07             ThrowReferenceErrorIfHole [7]
         0x18f513f657cb @  531 : bc                Star8 
 6472 E> 0x18f513f657cc @  532 : 2d f2 22 47       GetNamedProperty r8, [34], [71]
         0x18f513f657d0 @  536 : bc                Star8 
 6479 E> 0x18f513f657d1 @  537 : 2d f2 23 5a       GetNamedProperty r8, [35], [90]
         0x18f513f657d5 @  541 : bd                Star7 
         0x18f513f657d6 @  542 : 13 29             LdaConstant [41]
         0x18f513f657d8 @  544 : bb                Star9 
         0x18f513f657d9 @  545 : 17 05             LdaImmutableCurrentContextSlot [5]
 6511 E> 0x18f513f657db @  547 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f657dd @  549 : ba                Star10 
 6516 E> 0x18f513f657de @  550 : 2d f0 27 56       GetNamedProperty r10, [39], [86]
         0x18f513f657e2 @  554 : 77                ToString 
         0x18f513f657e3 @  555 : 39 f1 5c          Add r9, [92]
         0x18f513f657e6 @  558 : bb                Star9 
         0x18f513f657e7 @  559 : 13 2a             LdaConstant [42]
         0x18f513f657e9 @  561 : 39 f1 5c          Add r9, [92]
         0x18f513f657ec @  564 : bb                Star9 
         0x18f513f657ed @  565 : 17 05             LdaImmutableCurrentContextSlot [5]
 6528 E> 0x18f513f657ef @  567 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f657f1 @  569 : ba                Star10 
 6533 E> 0x18f513f657f2 @  570 : 2d f0 28 58       GetNamedProperty r10, [40], [88]
         0x18f513f657f6 @  574 : 77                ToString 
         0x18f513f657f7 @  575 : 39 f1 5c          Add r9, [92]
         0x18f513f657fa @  578 : bb                Star9 
 6479 E> 0x18f513f657fb @  579 : 5e f3 f2 f1 5d    CallProperty1 r7, r8, r9, [93]
 6571 S> 0x18f513f65800 @  584 : 2d f8 2b 5f       GetNamedProperty r2, [43], [95]
         0x18f513f65804 @  588 : bd                Star7 
         0x18f513f65805 @  589 : 17 05             LdaImmutableCurrentContextSlot [5]
 6580 E> 0x18f513f65807 @  591 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f65809 @  593 : bb                Star9 
 6585 E> 0x18f513f6580a @  594 : 2d f1 27 56       GetNamedProperty r9, [39], [86]
         0x18f513f6580e @  598 : bb                Star9 
         0x18f513f6580f @  599 : 17 05             LdaImmutableCurrentContextSlot [5]
 6595 E> 0x18f513f65811 @  601 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f65813 @  603 : ba                Star10 
 6600 E> 0x18f513f65814 @  604 : 2d f0 28 58       GetNamedProperty r10, [40], [88]
         0x18f513f65818 @  608 : ba                Star10 
 6571 E> 0x18f513f65819 @  609 : 5f f3 f8 f1 f0 61 CallProperty2 r7, r2, r9, r10, [97]
         0x18f513f6581f @  615 : bc                Star8 
         0x18f513f65820 @  616 : 19 fa f3          Mov r0, r7
         0x18f513f65823 @  619 : 68 01 f3 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r7-r8
 6556 E> 0x18f513f65827 @  623 : af fa fa 07 02    SuspendGenerator r0, r0-r6, [2]
         0x18f513f6582c @  628 : b0 fa fa 07       ResumeGenerator r0, r0-r6
         0x18f513f65830 @  632 : bd                Star7 
         0x18f513f65831 @  633 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x18f513f65835 @  637 : bc                Star8 
         0x18f513f65836 @  638 : 0c                LdaZero 
         0x18f513f65837 @  639 : 1c f2             TestReferenceEqual r8
         0x18f513f65839 @  641 : 98 05             JumpIfTrue [5] (0x18f513f6583e @ 646)
         0x18f513f6583b @  643 : 0b f3             Ldar r7
         0x18f513f6583d @  645 : a8                ReThrow 
         0x18f513f6583e @  646 : 0b f3             Ldar r7
 6637 S> 0x18f513f65840 @  648 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x18f513f65842 @  650 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f65844 @  652 : bd                Star7 
 6637 E> 0x18f513f65845 @  653 : 2d f3 2c 63       GetNamedProperty r7, [44], [99]
         0x18f513f65849 @  657 : 97 08             JumpIfToBooleanFalse [8] (0x18f513f65851 @ 665)
 5243 E> 0x18f513f6584b @  659 : 00 89 08 02 00 00 JumpLoop.Wide [520], [0] (0x18f513f65644 @ 140)
         0x18f513f65851 @  665 : 0e                LdaUndefined 
         0x18f513f65852 @  666 : bc                Star8 
         0x18f513f65853 @  667 : 19 fa f3          Mov r0, r7
         0x18f513f65856 @  670 : 68 04 f3 02       InvokeIntrinsic [_AsyncFunctionResolve], r7-r8
 6649 S> 0x18f513f6585a @  674 : a9                Return 
         0x18f513f6585b @  675 : bd                Star7 
         0x18f513f6585c @  676 : 82 f3 2d          CreateCatchContext r7, [45]
         0x18f513f6585f @  679 : be                Star6 
         0x18f513f65860 @  680 : 10                LdaTheHole 
         0x18f513f65861 @  681 : a6                SetPendingMessage 
         0x18f513f65862 @  682 : 0b f4             Ldar r6
         0x18f513f65864 @  684 : 1a f3             PushContext r7
         0x18f513f65866 @  686 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x18f513f65868 @  688 : bb                Star9 
         0x18f513f65869 @  689 : 19 fa f2          Mov r0, r8
         0x18f513f6586c @  692 : 68 03 f2 02       InvokeIntrinsic [_AsyncFunctionReject], r8-r9
         0x18f513f65870 @  696 : a9                Return 
Constant pool (size = 46)
0x18f513f65879: [FixedArray] in OldSpace
 - map: 0x27828d8812e1 <Map>
 - length: 46
           0: 88
           1: 396
           2: 628
           3: 0x229efaa97f81 <String[4]: #args>
           4: 0x18f513f659f9 <String[9]: #heartbeat>
           5: 0x229efaa81939 <String[7]: #process>
           6: 0x229efaa88cd9 <String[4]: #exit>
           7: 0x18f513f65229 <String[8]: #engine_1>
           8: 0x15ea2a857c39 <String[6]: #Server>
           9: 0x18f513f65a61 <String[17]: #http://localhost:>
          10: 0x229efaa99081 <String[4]: #port>
          11: 0x27828d884a09 <String[7]: #console>
          12: 0x229efaa8ac99 <String[3]: #log>
          13: 0x18f513f65261 <String[6]: #splash>
          14: 0x18f513f65ab9 <String[6]: #Engine>
          15: 0x18f513f65ad1 <SharedFunctionInfo>
          16: 0x18f513f65d41 <ObjectBoilerplateDescription[9]>
          17: 0x18f513f65e41 <String[13]: #timePerTickMs>
          18: 0x18f513f65d99 <String[21]: #timeMsAllowedPerTicks>
          19: 0x18f513f65e61 <String[18]: #gameStartTimeoutMs>
          20: 0x18f513f65dc1 <String[31]: #maxWaitTimeMsBeforeStartingGame>
          21: 0x18f513f65e89 <String[19]: #delayBetweenTicksMs>
          22: 0x18f513f65e19 <String[19]: #delayMsBetweenTicks>
          23: 0x18f513f65eb1 <String[8]: #Recorder>
          24: 0x18f513f65ec9 <String[17]: #createAndRegister>
          25: 0x18f513f65ef1 <ObjectBoilerplateDescription[3]>
          26: 0x18f513f65f41 <String[10]: #recordPath>
          27: 0x18f513f65f19 <String[23]: #keepAllCommandsAndTicks>
          28: 0x18f513f65f61 <String[16]: #teamNamesByToken>
          29: 0x229efaa9c529 <String[4]: #JSON>
          30: 0x229efaa8cb31 <String[5]: #parse>
          31: 0x18f513f65fb1 <String[14]: #teamIdsByToken>
          32: 0x18f513f65fd1 <String[7]: #serveUi>
          33: 0x15ea2a85bc41 <String[6]: #listen>
          34: 0x229efaa86461 <String[6]: #logger>
          35: 0x229efaa9c1f9 <String[4]: #info>
          36: 0x18f513f66031 <String[27]: #Game finished, saving state>
          37: 0x18f513f66061 <String[21]: #Saving state file to >
          38: 0x18f513f66089 <String[10]: #saveToFile>
          39: 0x18f513f660a9 <String[8]: #s3Bucket>
          40: 0x18f513f660c1 <String[6]: #s3Path>
          41: 0x18f513f660d9 <String[24]: #Saving state file to S3 >
          42: 0x229efaa81179 <String[1]: #/>
          43: 0x18f513f66119 <String[8]: #saveToS3>
          44: 0x18f513f61791 <String[9]: #keepAlive>
          45: 0x18f513f66151 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 675)  ->   675 (prediction=3, data=6)
Source Position Table (size = 221)
0x18f513f661a9 <ByteArray[221]>
0x18f513f65ad1 points to: [0x18f513f65b40]
=== [0x18f513f65b40] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 5317 S> 0x18f513f65b40 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x18f513f65b42 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x18f513f65b44 @    4 : c4                Star0 
 5340 E> 0x18f513f65b45 @    5 : 2d fa 01 00       GetNamedProperty r0, [1], [0]
         0x18f513f65b49 @    9 : c4                Star0 
 5359 E> 0x18f513f65b4a @   10 : 7c 02 02 29       CreateObjectLiteral [2], [2], #41
         0x18f513f65b4e @   14 : c2                Star2 
         0x18f513f65b4f @   15 : 17 05             LdaImmutableCurrentContextSlot [5]
 5398 E> 0x18f513f65b51 @   17 : aa 03             ThrowReferenceErrorIfHole [3]
         0x18f513f65b53 @   19 : c1                Star3 
 5403 E> 0x18f513f65b54 @   20 : 2d f7 04 03       GetNamedProperty r3, [4], [3]
         0x18f513f65b58 @   24 : 19 03 f9          Mov a0, r1
         0x18f513f65b5b @   27 : 9e 04             JumpIfUndefinedOrNull [4] (0x18f513f65b5f @ 31)
         0x18f513f65b5d @   29 : 8a 19             Jump [25] (0x18f513f65b76 @ 54)
 5417 E> 0x18f513f65b5f @   31 : 21 05 05          LdaGlobal [5], [5]
         0x18f513f65b62 @   34 : bf                Star5 
 5422 E> 0x18f513f65b63 @   35 : 2d f5 06 07       GetNamedProperty r5, [6], [7]
         0x18f513f65b67 @   39 : c0                Star4 
 5422 E> 0x18f513f65b68 @   40 : 5d f6 f5 09       CallProperty0 r4, r5, [9]
         0x18f513f65b6c @   44 : c0                Star4 
 5430 E> 0x18f513f65b6d @   45 : 2d f6 07 0b       GetNamedProperty r4, [7], [11]
         0x18f513f65b71 @   49 : c1                Star3 
 5431 E> 0x18f513f65b72 @   50 : 5d f7 f6 0d       CallProperty0 r3, r4, [13]
         0x18f513f65b76 @   54 : 33 f8 08 0f       DefineNamedOwnProperty r2, [8], [15]
         0x18f513f65b7a @   58 : 0b fa             Ldar r0
 5324 E> 0x18f513f65b7c @   60 : 69 fa f9 02 11    Construct r0, r1-r2, [17]
 5457 S> 0x18f513f65b81 @   65 : a9                Return 
Constant pool (size = 9)
0x18f513f65b89: [FixedArray] in OldSpace
 - map: 0x27828d8812e1 <Map>
 - length: 9
           0: 0x18f513f65241 <String[11]: #challenge_1>
           1: 0x18f513f65be1 <String[18]: #Blitz2024Challenge>
           2: 0x18f513f65c09 <ObjectBoilerplateDescription[3]>
           3: 0x229efaa97f81 <String[4]: #args>
           4: 0x18f513f65c51 <String[10]: #randomSeed>
           5: 0x229efaa9a991 <String[4]: #Math>
           6: 0x229efaa9aba1 <String[6]: #random>
           7: 0x27828d8862b9 <String[8]: #toString>
           8: 0x18f513f65c31 <String[11]: #RANDOM_SEED>
Handler Table (size = 0)
Source Position Table (size = 31)
0x18f513f65ca1 <ByteArray[31]>
Boilerplate at 0x18f513f65c09: 
0x18f513f65c09: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27828d882059 <Map>
 - length: 3
           0: 8
           1: 0x18f513f65c31 <String[11]: #RANDOM_SEED>
           2: 0x27828d881501 <Odd Oddball: uninitialized>
Boilerplate at 0x18f513f65d41: 
0x18f513f65d41: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27828d882059 <Map>
 - length: 9
           0: 8
           1: 0x18f513f65d99 <String[21]: #timeMsAllowedPerTicks>
           2: 0x27828d881501 <Odd Oddball: uninitialized>
           3: 0x18f513f65dc1 <String[31]: #maxWaitTimeMsBeforeStartingGame>
           4: 0x27828d881501 <Odd Oddball: uninitialized>
           5: 0x18f513f65df1 <String[21]: #expectedNumberOfTeams>
           6: 1
           7: 0x18f513f65e19 <String[19]: #delayMsBetweenTicks>
           8: 0x27828d881501 <Odd Oddball: uninitialized>
Boilerplate at 0x18f513f65ef1: 
0x18f513f65ef1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x27828d882059 <Map>
 - length: 3
           0: 8
           1: 0x18f513f65f19 <String[23]: #keepAllCommandsAndTicks>
           2: 0x27828d881501 <Odd Oddball: uninitialized>
0x18f513f66341 points to: [0x18f513f663b0]
=== [0x18f513f663b0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 6675 S> 0x18f513f663b0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
 6694 E> 0x18f513f663b2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x18f513f663b4 @    4 : c3                Star1 
 6703 E> 0x18f513f663b5 @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
 6683 E> 0x18f513f663b9 @    9 : 71 03 02          TestInstanceOf a0, [2]
         0x18f513f663bc @   12 : 99 17             JumpIfFalse [23] (0x18f513f663d3 @ 35)
 6728 S> 0x18f513f663be @   14 : 21 02 03          LdaGlobal [2], [3]
         0x18f513f663c1 @   17 : c3                Star1 
 6736 E> 0x18f513f663c2 @   18 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x18f513f663c6 @   22 : c4                Star0 
 6744 E> 0x18f513f663c7 @   23 : 2d 03 04 07       GetNamedProperty a0, [4], [7]
         0x18f513f663cb @   27 : c2                Star2 
 6736 E> 0x18f513f663cc @   28 : 5e fa f9 f8 09    CallProperty1 r0, r1, r2, [9]
         0x18f513f663d1 @   33 : 8a 1a             Jump [26] (0x18f513f663eb @ 59)
 6779 S> 0x18f513f663d3 @   35 : 21 02 03          LdaGlobal [2], [3]
         0x18f513f663d6 @   38 : c3                Star1 
 6787 E> 0x18f513f663d7 @   39 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x18f513f663db @   43 : c4                Star0 
         0x18f513f663dc @   44 : 13 05             LdaConstant [5]
         0x18f513f663de @   46 : c2                Star2 
         0x18f513f663df @   47 : 0b 03             Ldar a0
 6825 E> 0x18f513f663e1 @   49 : 77                ToString 
         0x18f513f663e2 @   50 : 39 f8 0b          Add r2, [11]
         0x18f513f663e5 @   53 : c2                Star2 
 6787 E> 0x18f513f663e6 @   54 : 5e fa f9 f8 0c    CallProperty1 r0, r1, r2, [12]
 6843 S> 0x18f513f663eb @   59 : 21 06 0e          LdaGlobal [6], [14]
         0x18f513f663ee @   62 : c3                Star1 
 6851 E> 0x18f513f663ef @   63 : 2d f9 07 10       GetNamedProperty r1, [7], [16]
         0x18f513f663f3 @   67 : c4                Star0 
         0x18f513f663f4 @   68 : 0d 01             LdaSmi [1]
         0x18f513f663f6 @   70 : c2                Star2 
 6851 E> 0x18f513f663f7 @   71 : 5e fa f9 f8 12    CallProperty1 r0, r1, r2, [18]
         0x18f513f663fc @   76 : 0e                LdaUndefined 
 6860 S> 0x18f513f663fd @   77 : a9                Return 
Constant pool (size = 8)
0x18f513f66401: [FixedArray] in OldSpace
 - map: 0x27828d8812e1 <Map>
 - length: 8
           0: 0x18f513f65229 <String[8]: #engine_1>
           1: 0x18f513f66451 <String[13]: #ArgumentError>
           2: 0x27828d884a09 <String[7]: #console>
           3: 0x229efaa8ac99 <String[3]: #log>
           4: 0x27828d885721 <String[7]: #message>
           5: 0x18f513f66471 <String[31]: #Something went terribly wrong! >
           6: 0x229efaa81939 <String[7]: #process>
           7: 0x229efaa88cd9 <String[4]: #exit>
Handler Table (size = 0)
Source Position Table (size = 41)
0x18f513f664a1 <ByteArray[41]>
<< OUTPUTTING DISASSEMBLY END >>
