<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x239b9b7e4e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x239b9b7e4e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x239b9b7e4e4c @    4 : c4                Star0 
 5684 S> 0x239b9b7e4e4d @    5 : a9                Return 
Constant pool (size = 1)
0x239b9b7e4e51: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 1
           0: 0x239b9b7e4e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x239b9b7e8649 <ByteArray[8]>
0x239b9b7e4e69 points to: [0x239b9b7e4ed8]
=== [0x239b9b7e4ed8] DISASSEMBLY ===
Parameter count 6
Register count 22
Frame size 176
OSR urgency: 0
Bytecode age: 0
   10 E> 0x239b9b7e4ed8 @    0 : 83 00 05          CreateFunctionContext [0], [5]
         0x239b9b7e4edb @    3 : 1a f7             PushContext r3
         0x239b9b7e4edd @    5 : 10                LdaTheHole 
         0x239b9b7e4ede @    6 : 25 02             StaCurrentContextSlot [2]
         0x239b9b7e4ee0 @    8 : 10                LdaTheHole 
         0x239b9b7e4ee1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x239b9b7e4ee3 @   11 : 10                LdaTheHole 
         0x239b9b7e4ee4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x239b9b7e4ee6 @   14 : 10                LdaTheHole 
         0x239b9b7e4ee7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x239b9b7e4ee9 @   17 : 10                LdaTheHole 
         0x239b9b7e4eea @   18 : 25 06             StaCurrentContextSlot [6]
   84 S> 0x239b9b7e4eec @   20 : 21 01 00          LdaGlobal [1], [0]
         0x239b9b7e4eef @   23 : bf                Star5 
   91 E> 0x239b9b7e4ef0 @   24 : 2d f5 02 02       GetNamedProperty r5, [2], [2]
         0x239b9b7e4ef4 @   28 : c0                Star4 
         0x239b9b7e4ef5 @   29 : 13 03             LdaConstant [3]
         0x239b9b7e4ef7 @   31 : bd                Star7 
  106 E> 0x239b9b7e4ef8 @   32 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x239b9b7e4efc @   36 : bc                Star8 
         0x239b9b7e4efd @   37 : 19 03 f4          Mov a0, r6
   91 E> 0x239b9b7e4f00 @   40 : 5c f6 f5 04 05    CallProperty r4, r5-r8, [5]
  147 S> 0x239b9b7e4f05 @   45 : 0e                LdaUndefined 
  174 E> 0x239b9b7e4f06 @   46 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  201 S> 0x239b9b7e4f0a @   50 : 13 06             LdaConstant [6]
         0x239b9b7e4f0c @   52 : bf                Star5 
  201 E> 0x239b9b7e4f0d @   53 : 62 04 f5 09       CallUndefinedReceiver1 a1, r5, [9]
  201 E> 0x239b9b7e4f11 @   57 : 25 02             StaCurrentContextSlot [2]
  243 S> 0x239b9b7e4f13 @   59 : 13 07             LdaConstant [7]
         0x239b9b7e4f15 @   61 : bf                Star5 
  243 E> 0x239b9b7e4f16 @   62 : 62 04 f5 0b       CallUndefinedReceiver1 a1, r5, [11]
  243 E> 0x239b9b7e4f1a @   66 : 25 03             StaCurrentContextSlot [3]
  279 S> 0x239b9b7e4f1c @   68 : 13 08             LdaConstant [8]
         0x239b9b7e4f1e @   70 : bf                Star5 
  279 E> 0x239b9b7e4f1f @   71 : 62 04 f5 0d       CallUndefinedReceiver1 a1, r5, [13]
  279 E> 0x239b9b7e4f23 @   75 : 25 04             StaCurrentContextSlot [4]
  316 S> 0x239b9b7e4f25 @   77 : 13 09             LdaConstant [9]
         0x239b9b7e4f27 @   79 : bf                Star5 
  316 E> 0x239b9b7e4f28 @   80 : 62 04 f5 0f       CallUndefinedReceiver1 a1, r5, [15]
         0x239b9b7e4f2c @   84 : c3                Star1 
  354 S> 0x239b9b7e4f2d @   85 : 13 0a             LdaConstant [10]
         0x239b9b7e4f2f @   87 : bf                Star5 
  354 E> 0x239b9b7e4f30 @   88 : 62 04 f5 11       CallUndefinedReceiver1 a1, r5, [17]
  354 E> 0x239b9b7e4f34 @   92 : 25 05             StaCurrentContextSlot [5]
  398 S> 0x239b9b7e4f36 @   94 : 13 0b             LdaConstant [11]
         0x239b9b7e4f38 @   96 : bf                Star5 
  398 E> 0x239b9b7e4f39 @   97 : 62 04 f5 13       CallUndefinedReceiver1 a1, r5, [19]
  398 E> 0x239b9b7e4f3d @  101 : 25 06             StaCurrentContextSlot [6]
         0x239b9b7e4f3f @  103 : 81 0c             CreateBlockContext [12]
         0x239b9b7e4f41 @  105 : 1a f6             PushContext r4
         0x239b9b7e4f43 @  107 : 10                LdaTheHole 
         0x239b9b7e4f44 @  108 : 25 02             StaCurrentContextSlot [2]
         0x239b9b7e4f46 @  110 : 10                LdaTheHole 
         0x239b9b7e4f47 @  111 : bc                Star8 
         0x239b9b7e4f48 @  112 : 80 0e 00 02       CreateClosure [14], [0], #2
         0x239b9b7e4f4c @  116 : bf                Star5 
         0x239b9b7e4f4d @  117 : 13 0d             LdaConstant [13]
         0x239b9b7e4f4f @  119 : be                Star6 
         0x239b9b7e4f50 @  120 : 80 0f 01 02       CreateClosure [15], [1], #2
         0x239b9b7e4f54 @  124 : bb                Star9 
         0x239b9b7e4f55 @  125 : 80 10 02 02       CreateClosure [16], [2], #2
         0x239b9b7e4f59 @  129 : ba                Star10 
         0x239b9b7e4f5a @  130 : 80 11 03 02       CreateClosure [17], [3], #2
         0x239b9b7e4f5e @  134 : b9                Star11 
         0x239b9b7e4f5f @  135 : 80 12 04 02       CreateClosure [18], [4], #2
         0x239b9b7e4f63 @  139 : b8                Star12 
         0x239b9b7e4f64 @  140 : 80 13 05 02       CreateClosure [19], [5], #2
         0x239b9b7e4f68 @  144 : b7                Star13 
         0x239b9b7e4f69 @  145 : 80 14 06 02       CreateClosure [20], [6], #2
         0x239b9b7e4f6d @  149 : b6                Star14 
         0x239b9b7e4f6e @  150 : 80 15 07 02       CreateClosure [21], [7], #2
         0x239b9b7e4f72 @  154 : b5                Star15 
         0x239b9b7e4f73 @  155 : 80 16 08 02       CreateClosure [22], [8], #2
         0x239b9b7e4f77 @  159 : 18 ea             Star r16
         0x239b9b7e4f79 @  161 : 80 17 09 02       CreateClosure [23], [9], #2
         0x239b9b7e4f7d @  165 : 18 e9             Star r17
         0x239b9b7e4f7f @  167 : 80 18 0a 02       CreateClosure [24], [10], #2
         0x239b9b7e4f83 @  171 : 18 e8             Star r18
         0x239b9b7e4f85 @  173 : 80 19 0b 02       CreateClosure [25], [11], #2
         0x239b9b7e4f89 @  177 : 18 e7             Star r19
         0x239b9b7e4f8b @  179 : 80 1a 0c 02       CreateClosure [26], [12], #2
         0x239b9b7e4f8f @  183 : 18 e6             Star r20
         0x239b9b7e4f91 @  185 : 80 1b 0d 02       CreateClosure [27], [13], #2
         0x239b9b7e4f95 @  189 : 18 e5             Star r21
         0x239b9b7e4f97 @  191 : 19 f5 f3          Mov r5, r7
         0x239b9b7e4f9a @  194 : 65 28 00 f4 10    CallRuntime [DefineClass], r6-r21
         0x239b9b7e4f9f @  199 : be                Star6 
         0x239b9b7e4fa0 @  200 : 0b f3             Ldar r7
         0x239b9b7e4fa2 @  202 : 25 02             StaCurrentContextSlot [2]
         0x239b9b7e4fa4 @  204 : 1b f6             PopContext r4
         0x239b9b7e4fa6 @  206 : c2                Star2 
 4728 S> 0x239b9b7e4fa7 @  207 : 0b f8             Ldar r2
 4755 E> 0x239b9b7e4fa9 @  209 : 32 03 05 07       SetNamedProperty a0, [5], [7]
 4777 S> 0x239b9b7e4fad @  213 : 19 f8 fa          Mov r2, r0
 4802 S> 0x239b9b7e4fb0 @  216 : 00 0d b0 04       LdaSmi.Wide [1200]
 4833 E> 0x239b9b7e4fb4 @  220 : 32 fa 1c 15       SetNamedProperty r0, [28], [21]
 4841 S> 0x239b9b7e4fb8 @  224 : 00 0d 20 03       LdaSmi.Wide [800]
 4873 E> 0x239b9b7e4fbc @  228 : 32 fa 1d 17       SetNamedProperty r0, [29], [23]
 4880 S> 0x239b9b7e4fc0 @  232 : 7c 1e 19 0c       CreateObjectLiteral [30], [25], #12
         0x239b9b7e4fc4 @  236 : bf                Star5 
 4941 E> 0x239b9b7e4fc5 @  237 : 21 1f 1a          LdaGlobal [31], [26]
         0x239b9b7e4fc8 @  240 : bd                Star7 
 4946 E> 0x239b9b7e4fc9 @  241 : 2d f3 20 1c       GetNamedProperty r7, [32], [28]
         0x239b9b7e4fcd @  245 : be                Star6 
 4946 E> 0x239b9b7e4fce @  246 : 5d f4 f3 1e       CallProperty0 r6, r7, [30]
         0x239b9b7e4fd2 @  250 : 33 f5 21 20       DefineNamedOwnProperty r5, [33], [32]
 5022 E> 0x239b9b7e4fd6 @  254 : 21 22 22          LdaGlobal [34], [34]
         0x239b9b7e4fd9 @  257 : 33 f5 23 24       DefineNamedOwnProperty r5, [35], [36]
 5054 E> 0x239b9b7e4fdd @  261 : 7c 24 26 29       CreateObjectLiteral [36], [38], #41
         0x239b9b7e4fe1 @  265 : be                Star6 
 5074 E> 0x239b9b7e4fe2 @  266 : 2d f8 1c 27       GetNamedProperty r2, [28], [39]
         0x239b9b7e4fe6 @  270 : 33 f4 25 29       DefineNamedOwnProperty r6, [37], [41]
 5106 E> 0x239b9b7e4fea @  274 : 2d f8 1d 2b       GetNamedProperty r2, [29], [43]
         0x239b9b7e4fee @  278 : 33 f4 26 2d       DefineNamedOwnProperty r6, [38], [45]
         0x239b9b7e4ff2 @  282 : 0b f4             Ldar r6
         0x239b9b7e4ff4 @  284 : 33 f5 27 2f       DefineNamedOwnProperty r5, [39], [47]
 5225 E> 0x239b9b7e4ff8 @  288 : 2d f9 28 31       GetNamedProperty r1, [40], [49]
         0x239b9b7e4ffc @  292 : be                Star6 
         0x239b9b7e4ffd @  293 : 00 0d 8c 00       LdaSmi.Wide [140]
         0x239b9b7e5001 @  297 : bd                Star7 
 5240 E> 0x239b9b7e5002 @  298 : 2d f8 1d 2b       GetNamedProperty r2, [29], [43]
 5253 E> 0x239b9b7e5006 @  302 : 48 02 33          DivSmi [2], [51]
         0x239b9b7e5009 @  305 : bc                Star8 
         0x239b9b7e500a @  306 : 0b f4             Ldar r6
 5212 E> 0x239b9b7e500c @  308 : 69 f4 f3 02 34    Construct r6, r7-r8, [52]
         0x239b9b7e5011 @  313 : 33 f5 29 36       DefineNamedOwnProperty r5, [41], [54]
         0x239b9b7e5015 @  317 : 0b f5             Ldar r5
 4920 E> 0x239b9b7e5017 @  319 : 32 fa 2a 38       SetNamedProperty r0, [42], [56]
         0x239b9b7e501b @  323 : 0e                LdaUndefined 
 5681 S> 0x239b9b7e501c @  324 : a9                Return 
Constant pool (size = 43)
0x239b9b7e5021: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 43
           0: 0x239b9b7e5189 <ScopeInfo FUNCTION_SCOPE>
           1: 0x391e81ec5ab9 <String[6]: #Object>
           2: 0x391e81ec4c11 <String[14]: #defineProperty>
           3: 0x239b9b7e52a1 <String[10]: #__esModule>
           4: 0x239b9b7e52c1 <ObjectBoilerplateDescription[3]>
           5: 0x239b9b7e52e9 <String[18]: #Blitz2024Challenge>
           6: 0x239b9b7e5311 <String[13]: #@blitz/engine>
           7: 0x239b9b7e5331 <String[7]: #./error>
           8: 0x239b9b7e5349 <String[7]: #./world>
           9: 0x239b9b7e5361 <String[8]: #./vector>
          10: 0x239b9b7e5379 <String[8]: #./random>
          11: 0x239b9b7e5391 <String[14]: #./meteor_infos>
          12: 0x239b9b7e53b1 <ScopeInfo CLASS_SCOPE>
          13: 0x239b9b7e53f9 <FixedArray[7]>
          14: 0x239b9b7e5821 <SharedFunctionInfo Blitz2024Challenge>
          15: 0x239b9b7e5d09 <SharedFunctionInfo registerTeam>
          16: 0x239b9b7e5e41 <SharedFunctionInfo getGameResults>
          17: 0x239b9b7e6129 <SharedFunctionInfo setup>
          18: 0x239b9b7e6399 <SharedFunctionInfo playOneTick>
          19: 0x239b9b7e67e1 <SharedFunctionInfo fetchAndApplyPlayerCommands>
          20: 0x239b9b7e6ea9 <SharedFunctionInfo applyActions>
          21: 0x239b9b7e7379 <SharedFunctionInfo isGameComplete>
          22: 0x239b9b7e7531 <SharedFunctionInfo updateGame>
          23: 0x239b9b7e7679 <SharedFunctionInfo addStatsForTeam>
          24: 0x239b9b7e7759 <SharedFunctionInfo serializeForTeam>
          25: 0x239b9b7e78d1 <SharedFunctionInfo serializeForViewer>
          26: 0x239b9b7e7a21 <SharedFunctionInfo serializeConstants>
          27: 0x239b9b7e7e91 <SharedFunctionInfo serializeCommon>
          28: 0x239b9b7e81c9 <String[11]: #WORLD_WIDTH>
          29: 0x239b9b7e81e9 <String[12]: #WORLD_HEIGHT>
          30: 0x239b9b7e8209 <ObjectBoilerplateDescription[31]>
          31: 0x2868e8bda991 <String[4]: #Math>
          32: 0x2868e8bdaba1 <String[6]: #random>
          33: 0x239b9b7e5a81 <String[11]: #RANDOM_SEED>
          34: 0x391e81ec5381 <String[8]: #Infinity>
          35: 0x239b9b7e8331 <String[13]: #HEALTH_POINTS>
          36: 0x239b9b7e8541 <ObjectBoilerplateDescription[5]>
          37: 0x239b9b7e7d31 <String[5]: #width>
          38: 0x239b9b7e7d49 <String[6]: #height>
          39: 0x239b9b7e7d61 <String[16]: #WORLD_DIMENSIONS>
          40: 0x239b9b7e8579 <String[6]: #Vector>
          41: 0x239b9b7e8381 <String[15]: #CANNON_POSITION>
          42: 0x239b9b7e59f1 <String[20]: #DEFAULT_GAME_OPTIONS>
Handler Table (size = 0)
Source Position Table (size = 111)
0x239b9b7e8591 <ByteArray[111]>
Boilerplate at 0x239b9b7e52c1: 
0x239b9b7e52c1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 3
           0: 8
           1: 0x391e81ec6419 <String[5]: #value>
           2: 0x391e81ec1729 <true>
Array at 0x239b9b7e53f9 has 7 elements:
0x239b9b7e53f9: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 7
           0: 16
           1: 0x239b9b7e5441 <DescriptorArray[4]>
           2: 0x391e81ec3301 <NumberDictionary[7]>
           3: 0x391e81ec1329 <FixedArray[0]>
           4: 0x239b9b7e5501 <DescriptorArray[14]>
           5: 0x391e81ec3301 <NumberDictionary[7]>
           6: 0x391e81ec1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x10 (16)
Element[1]
0x239b9b7e5441: [DescriptorArray] in OldSpace
 - map: 0x391e81ec7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x391e81ec55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 3, attrs: [__C]) @ 0x2868e8bf4fe1 <AccessorInfo>
  [1]: 0x391e81ec58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 1, attrs: [__C]) @ 0x2868e8bf4f71 <AccessorInfo>
  [2]: 0x391e81ec5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 2, attrs: [___]) @ 0x2868e8bf5051 <AccessorInfo>
  [3]: 0x391e81ec65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x239b9b7e54e9 <ClassPositions 425, 4727>
Element[2]
0x391e81ec3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x391e81ec1329: [FixedArray] in ReadOnlySpace
 - map: 0x391e81ec12e1 <Map>
 - length: 0
Element[4]
0x239b9b7e5501: [DescriptorArray] in OldSpace
 - map: 0x391e81ec7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 14
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x391e81ec4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 8, attrs: [W_C]) @ 1
  [1]: 0x239b9b7e5669: [String] in OldSpace: #registerTeam (const data descriptor, p: 12, attrs: [W_C]) @ 3
  [2]: 0x239b9b7e5689: [String] in OldSpace: #getGameResults (const data descriptor, p: 13, attrs: [W_C]) @ 4
  [3]: 0x2868e8bc88a1: [String] in OldSpace: #setup (const data descriptor, p: 4, attrs: [W_C]) @ 5
  [4]: 0x239b9b7e56c1: [String] in OldSpace: #playOneTick (const data descriptor, p: 7, attrs: [W_C]) @ 6
  [5]: 0x239b9b7e56e1: [String] in OldSpace: #fetchAndApplyPlayerCommands (const data descriptor, p: 9, attrs: [W_C]) @ 7
  [6]: 0x239b9b7e5711: [String] in OldSpace: #applyActions (const data descriptor, p: 10, attrs: [W_C]) @ 8
  [7]: 0x239b9b7e5731: [String] in OldSpace: #isGameComplete (const data descriptor, p: 11, attrs: [W_C]) @ 9
  [8]: 0x239b9b7e5751: [String] in OldSpace: #updateGame (const data descriptor, p: 2, attrs: [W_C]) @ 10
  [9]: 0x239b9b7e5771: [String] in OldSpace: #addStatsForTeam (const data descriptor, p: 6, attrs: [W_C]) @ 11
  [10]: 0x239b9b7e5791: [String] in OldSpace: #serializeForTeam (const data descriptor, p: 0, attrs: [W_C]) @ 12
  [11]: 0x239b9b7e57b1: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 3, attrs: [W_C]) @ 13
  [12]: 0x239b9b7e57d9: [String] in OldSpace: #serializeConstants (const data descriptor, p: 1, attrs: [W_C]) @ 14
  [13]: 0x239b9b7e5801: [String] in OldSpace: #serializeCommon (const data descriptor, p: 5, attrs: [W_C]) @ 15
Element[5]
0x391e81ec3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x391e81ec1329: [FixedArray] in ReadOnlySpace
 - map: 0x391e81ec12e1 <Map>
 - length: 0
0x239b9b7e5821 points to: [0x239b9b7e5890]
=== [0x239b9b7e5890] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  495 S> 0x239b9b7e5890 @    0 : 7b 00             CreateEmptyArrayLiteral [0]
  515 E> 0x239b9b7e5892 @    2 : 32 02 00 01       SetNamedProperty <this>, [0], [1]
  529 S> 0x239b9b7e5896 @    6 : 0d 01             LdaSmi [1]
  552 E> 0x239b9b7e5898 @    8 : 32 02 01 03       SetNamedProperty <this>, [1], [3]
  565 S> 0x239b9b7e589c @   12 : 0b 03             Ldar a0
  577 E> 0x239b9b7e589e @   14 : 32 02 02 05       SetNamedProperty <this>, [2], [5]
  595 S> 0x239b9b7e58a2 @   18 : 16 02             LdaCurrentContextSlot [2]
  627 E> 0x239b9b7e58a4 @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x239b9b7e58a6 @   22 : c2                Star2 
  646 E> 0x239b9b7e58a7 @   23 : 2d f8 04 07       GetNamedProperty r2, [4], [7]
         0x239b9b7e58ab @   27 : c2                Star2 
         0x239b9b7e58ac @   28 : 7e f8 29 09       CloneObject r2, #41, [9]
         0x239b9b7e58b0 @   32 : c3                Star1 
         0x239b9b7e58b1 @   33 : 19 f9 f8          Mov r1, r2
         0x239b9b7e58b4 @   36 : 19 04 f7          Mov a1, r3
  683 E> 0x239b9b7e58b7 @   39 : 68 0e f8 02       InvokeIntrinsic [_CopyDataProperties], r2-r3
         0x239b9b7e58bb @   43 : 0b f8             Ldar r2
  608 E> 0x239b9b7e58bd @   45 : 32 02 05 0b       SetNamedProperty <this>, [5], [11]
  711 S> 0x239b9b7e58c1 @   49 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x239b9b7e58c5 @   53 : aa 06             ThrowReferenceErrorIfHole [6]
         0x239b9b7e58c7 @   55 : c3                Star1 
  720 E> 0x239b9b7e58c8 @   56 : 2d f9 07 0d       GetNamedProperty r1, [7], [13]
         0x239b9b7e58cc @   60 : c3                Star1 
  727 E> 0x239b9b7e58cd @   61 : 2d f9 08 0f       GetNamedProperty r1, [8], [15]
         0x239b9b7e58d1 @   65 : c4                Star0 
         0x239b9b7e58d2 @   66 : 13 09             LdaConstant [9]
         0x239b9b7e58d4 @   68 : c2                Star2 
  753 E> 0x239b9b7e58d5 @   69 : 2d 02 05 12       GetNamedProperty <this>, [5], [18]
         0x239b9b7e58d9 @   73 : c1                Star3 
  761 E> 0x239b9b7e58da @   74 : 2d f7 0a 14       GetNamedProperty r3, [10], [20]
         0x239b9b7e58de @   78 : 77                ToString 
         0x239b9b7e58df @   79 : 39 f8 11          Add r2, [17]
         0x239b9b7e58e2 @   82 : c2                Star2 
  727 E> 0x239b9b7e58e3 @   83 : 5e fa f9 f8 16    CallProperty1 r0, r1, r2, [22]
  785 S> 0x239b9b7e58e8 @   88 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
  800 E> 0x239b9b7e58ec @   92 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x239b9b7e58ee @   94 : c3                Star1 
  809 E> 0x239b9b7e58ef @   95 : 2d f9 0c 18       GetNamedProperty r1, [12], [24]
         0x239b9b7e58f3 @   99 : c3                Star1 
  821 E> 0x239b9b7e58f4 @  100 : 2d 02 05 1a       GetNamedProperty <this>, [5], [26]
         0x239b9b7e58f8 @  104 : c2                Star2 
  829 E> 0x239b9b7e58f9 @  105 : 2d f8 0a 1c       GetNamedProperty r2, [10], [28]
         0x239b9b7e58fd @  109 : c2                Star2 
         0x239b9b7e58fe @  110 : 0b f9             Ldar r1
  796 E> 0x239b9b7e5900 @  112 : 69 f9 f8 01 1e    Construct r1, r2-r2, [30]
  794 E> 0x239b9b7e5905 @  117 : 32 02 0d 20       SetNamedProperty <this>, [13], [32]
         0x239b9b7e5909 @  121 : 0e                LdaUndefined 
  847 S> 0x239b9b7e590a @  122 : a9                Return 
Constant pool (size = 14)
0x239b9b7e5911: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 14
           0: 0x239b9b7e5991 <String[14]: #lastTickErrors>
           1: 0x239b9b7e59b1 <String[17]: #currentTickNumber>
           2: 0x239b9b7e59d9 <String[6]: #engine>
           3: 0x239b9b7e52e9 <String[18]: #Blitz2024Challenge>
           4: 0x239b9b7e59f1 <String[20]: #DEFAULT_GAME_OPTIONS>
           5: 0x2868e8bccbb9 <String[7]: #options>
           6: 0x239b9b7e5221 <String[8]: #engine_1>
           7: 0x2868e8bc6461 <String[6]: #logger>
           8: 0x2868e8bdc1f9 <String[4]: #info>
           9: 0x239b9b7e5a61 <String[13]: #Random seed: >
          10: 0x239b9b7e5a81 <String[11]: #RANDOM_SEED>
          11: 0x239b9b7e5269 <String[8]: #random_1>
          12: 0x239b9b7e5aa1 <String[6]: #Random>
          13: 0x2868e8be8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 61)
0x239b9b7e5ad1 <ByteArray[61]>
0x239b9b7e5d09 points to: [0x239b9b7e5d78]
=== [0x239b9b7e5d78] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  882 S> 0x239b9b7e5d78 @    0 : 0b 03             Ldar a0
  899 E> 0x239b9b7e5d7a @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x239b9b7e5d7e @    6 : 0e                LdaUndefined 
  911 S> 0x239b9b7e5d7f @    7 : a9                Return 
Constant pool (size = 1)
0x239b9b7e5d81: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 1
           0: 0x239b9b7e5d99 <String[11]: #_engineTeam>
Handler Table (size = 0)
Source Position Table (size = 9)
0x239b9b7e5db9 <ByteArray[9]>
0x239b9b7e5e41 points to: [0x239b9b7e5eb0]
=== [0x239b9b7e5eb0] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  944 S> 0x239b9b7e5eb0 @    0 : 79 00 00 04       CreateArrayLiteral [0], [0], #4
         0x239b9b7e5eb4 @    4 : c3                Star1 
         0x239b9b7e5eb5 @    5 : 0c                LdaZero 
         0x239b9b7e5eb6 @    6 : c4                Star0 
         0x239b9b7e5eb7 @    7 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x239b9b7e5ebb @   11 : c2                Star2 
 1020 E> 0x239b9b7e5ebc @   12 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x239b9b7e5ec0 @   16 : c1                Star3 
         0x239b9b7e5ec1 @   17 : 9e 08             JumpIfUndefinedOrNull [8] (0x239b9b7e5ec9 @ 25)
 1025 E> 0x239b9b7e5ec3 @   19 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x239b9b7e5ec7 @   23 : 8a 03             Jump [3] (0x239b9b7e5eca @ 26)
         0x239b9b7e5ec9 @   25 : 0e                LdaUndefined 
         0x239b9b7e5eca @   26 : 9e 04             JumpIfUndefinedOrNull [4] (0x239b9b7e5ece @ 30)
         0x239b9b7e5ecc @   28 : 8a 03             Jump [3] (0x239b9b7e5ecf @ 31)
         0x239b9b7e5ece @   30 : 0c                LdaZero 
         0x239b9b7e5ecf @   31 : 33 f8 03 06       DefineNamedOwnProperty r2, [3], [6]
 1068 E> 0x239b9b7e5ed3 @   35 : 2d 02 04 08       GetNamedProperty <this>, [4], [8]
         0x239b9b7e5ed7 @   39 : c1                Star3 
         0x239b9b7e5ed8 @   40 : 9e 08             JumpIfUndefinedOrNull [8] (0x239b9b7e5ee0 @ 48)
 1079 E> 0x239b9b7e5eda @   42 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x239b9b7e5ede @   46 : 8a 03             Jump [3] (0x239b9b7e5ee1 @ 49)
         0x239b9b7e5ee0 @   48 : 0e                LdaUndefined 
         0x239b9b7e5ee1 @   49 : 9e 04             JumpIfUndefinedOrNull [4] (0x239b9b7e5ee5 @ 53)
         0x239b9b7e5ee3 @   51 : 8a 04             Jump [4] (0x239b9b7e5ee7 @ 55)
         0x239b9b7e5ee5 @   53 : 13 06             LdaConstant [6]
         0x239b9b7e5ee7 @   55 : 33 f8 07 0c       DefineNamedOwnProperty r2, [7], [12]
 1130 E> 0x239b9b7e5eeb @   59 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x239b9b7e5eef @   63 : c1                Star3 
         0x239b9b7e5ef0 @   64 : 9e 08             JumpIfUndefinedOrNull [8] (0x239b9b7e5ef8 @ 72)
 1141 E> 0x239b9b7e5ef2 @   66 : 2d f7 08 10       GetNamedProperty r3, [8], [16]
         0x239b9b7e5ef6 @   70 : 8a 03             Jump [3] (0x239b9b7e5ef9 @ 73)
         0x239b9b7e5ef8 @   72 : 0e                LdaUndefined 
         0x239b9b7e5ef9 @   73 : 9e 04             JumpIfUndefinedOrNull [4] (0x239b9b7e5efd @ 77)
         0x239b9b7e5efb @   75 : 8a 04             Jump [4] (0x239b9b7e5eff @ 79)
         0x239b9b7e5efd @   77 : 13 06             LdaConstant [6]
         0x239b9b7e5eff @   79 : 33 f8 09 12       DefineNamedOwnProperty r2, [9], [18]
         0x239b9b7e5f03 @   83 : 0b f8             Ldar r2
         0x239b9b7e5f05 @   85 : 36 f9 fa 14       StaInArrayLiteral r1, r0, [20]
         0x239b9b7e5f09 @   89 : 0b f9             Ldar r1
 1179 S> 0x239b9b7e5f0b @   91 : a9                Return 
Constant pool (size = 10)
0x239b9b7e5f11: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 10
           0: 0x239b9b7e5f71 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x239b9b7e5f89 <FixedArray[1]>>
           1: 0x239b9b7e5fa1 <ObjectBoilerplateDescription[9]>
           2: 0x239b9b7e6059 <String[5]: #world>
           3: 0x239b9b7e6011 <String[5]: #score>
           4: 0x239b9b7e5d99 <String[11]: #_engineTeam>
           5: 0x239b9b7e6071 <String[10]: #externalId>
           6: 0x391e81ec17d1 <String[0]: #>
           7: 0x239b9b7e6029 <String[6]: #teamId>
           8: 0x391e81ec58f1 <String[4]: #name>
           9: 0x239b9b7e6041 <String[8]: #teamName>
Handler Table (size = 0)
Source Position Table (size = 23)
0x239b9b7e6091 <ByteArray[23]>
Boilerplate at 0x239b9b7e5fa1: 
0x239b9b7e5fa1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 9
           0: 8
           1: 0x239b9b7e5ff9 <String[4]: #rank>
           2: 1
           3: 0x239b9b7e6011 <String[5]: #score>
           4: 0x391e81ec1501 <Odd Oddball: uninitialized>
           5: 0x239b9b7e6029 <String[6]: #teamId>
           6: 0x391e81ec1501 <Odd Oddball: uninitialized>
           7: 0x239b9b7e6041 <String[8]: #teamName>
           8: 0x391e81ec1501 <Odd Oddball: uninitialized>
0x239b9b7e6129 points to: [0x239b9b7e6198]
=== [0x239b9b7e6198] DISASSEMBLY ===
Parameter count 1
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
         0x239b9b7e6198 @    0 : 19 fe f9          Mov <closure>, r1
         0x239b9b7e619b @    3 : 19 02 f8          Mov <this>, r2
 1201 E> 0x239b9b7e619e @    6 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x239b9b7e61a2 @   10 : c4                Star0 
         0x239b9b7e61a3 @   11 : 19 ff f9          Mov <context>, r1
 1223 S> 0x239b9b7e61a6 @   14 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x239b9b7e61aa @   18 : 1d                TestUndetectable 
         0x239b9b7e61ab @   19 : 99 11             JumpIfFalse [17] (0x239b9b7e61bc @ 36)
 1256 S> 0x239b9b7e61ad @   21 : 21 01 02          LdaGlobal [1], [2]
         0x239b9b7e61b0 @   24 : c2                Star2 
         0x239b9b7e61b1 @   25 : 13 02             LdaConstant [2]
         0x239b9b7e61b3 @   27 : c1                Star3 
         0x239b9b7e61b4 @   28 : 0b f8             Ldar r2
 1262 E> 0x239b9b7e61b6 @   30 : 69 f8 f7 01 04    Construct r2, r3-r3, [4]
 1256 E> 0x239b9b7e61bb @   35 : a7                Throw 
 1304 S> 0x239b9b7e61bc @   36 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1321 E> 0x239b9b7e61c0 @   40 : aa 03             ThrowReferenceErrorIfHole [3]
         0x239b9b7e61c2 @   42 : c1                Star3 
 1329 E> 0x239b9b7e61c3 @   43 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x239b9b7e61c7 @   47 : c1                Star3 
 1340 E> 0x239b9b7e61c8 @   48 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x239b9b7e61cc @   52 : c0                Star4 
 1354 E> 0x239b9b7e61cd @   53 : 2d 02 06 0a       GetNamedProperty <this>, [6], [10]
         0x239b9b7e61d1 @   57 : bf                Star5 
         0x239b9b7e61d2 @   58 : 0b f7             Ldar r3
 1317 E> 0x239b9b7e61d4 @   60 : 69 f7 f6 02 0c    Construct r3, r4-r5, [12]
 1315 E> 0x239b9b7e61d9 @   65 : 32 02 07 0e       SetNamedProperty <this>, [7], [14]
         0x239b9b7e61dd @   69 : 0e                LdaUndefined 
         0x239b9b7e61de @   70 : c1                Star3 
         0x239b9b7e61df @   71 : 19 fa f8          Mov r0, r2
         0x239b9b7e61e2 @   74 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1364 S> 0x239b9b7e61e6 @   78 : a9                Return 
         0x239b9b7e61e7 @   79 : c2                Star2 
         0x239b9b7e61e8 @   80 : 82 f8 08          CreateCatchContext r2, [8]
         0x239b9b7e61eb @   83 : c3                Star1 
         0x239b9b7e61ec @   84 : 10                LdaTheHole 
         0x239b9b7e61ed @   85 : a6                SetPendingMessage 
         0x239b9b7e61ee @   86 : 0b f9             Ldar r1
         0x239b9b7e61f0 @   88 : 1a f8             PushContext r2
         0x239b9b7e61f2 @   90 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e61f4 @   92 : c0                Star4 
         0x239b9b7e61f5 @   93 : 19 fa f7          Mov r0, r3
         0x239b9b7e61f8 @   96 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x239b9b7e61fc @  100 : a9                Return 
Constant pool (size = 9)
0x239b9b7e6201: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 9
           0: 0x239b9b7e5d99 <String[11]: #_engineTeam>
           1: 0x391e81ec4de1 <String[5]: #Error>
           2: 0x239b9b7e6259 <String[19]: #No team registered!>
           3: 0x239b9b7e5251 <String[7]: #world_1>
           4: 0x239b9b7e6281 <String[5]: #World>
           5: 0x2868e8bccbb9 <String[7]: #options>
           6: 0x2868e8be8a51 <String[3]: #rng>
           7: 0x239b9b7e6059 <String[5]: #world>
           8: 0x239b9b7e6299 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  14,  79)  ->    79 (prediction=3, data=1)
Source Position Table (size = 33)
0x239b9b7e62f1 <ByteArray[33]>
0x239b9b7e6399 points to: [0x239b9b7e6408]
=== [0x239b9b7e6408] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0x239b9b7e6408 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @117 }
         0x239b9b7e640c @    4 : 19 fe f9          Mov <closure>, r1
         0x239b9b7e640f @    7 : 19 02 f8          Mov <this>, r2
 1387 E> 0x239b9b7e6412 @   10 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x239b9b7e6416 @   14 : c4                Star0 
         0x239b9b7e6417 @   15 : 19 ff f9          Mov <context>, r1
 1404 S> 0x239b9b7e641a @   18 : 0b 03             Ldar a0
 1427 E> 0x239b9b7e641c @   20 : 32 02 01 00       SetNamedProperty <this>, [1], [0]
 1452 S> 0x239b9b7e6420 @   24 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x239b9b7e6424 @   28 : c2                Star2 
 1452 E> 0x239b9b7e6425 @   29 : 5d f8 02 04       CallProperty0 r2, <this>, [4]
         0x239b9b7e6429 @   33 : 97 2a             JumpIfToBooleanFalse [42] (0x239b9b7e6453 @ 75)
 1484 S> 0x239b9b7e642b @   35 : 7c 03 06 08       CreateObjectLiteral [3], [6], #8
         0x239b9b7e642f @   39 : c2                Star2 
 1526 E> 0x239b9b7e6430 @   40 : 7c 04 07 29       CreateObjectLiteral [4], [7], #41
         0x239b9b7e6434 @   44 : c1                Star3 
 1542 E> 0x239b9b7e6435 @   45 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x239b9b7e6439 @   49 : c0                Star4 
 1542 E> 0x239b9b7e643a @   50 : 5d f6 02 0a       CallProperty0 r4, <this>, [10]
         0x239b9b7e643e @   54 : 33 f7 06 0c       DefineNamedOwnProperty r3, [6], [12]
         0x239b9b7e6442 @   58 : 0b f7             Ldar r3
         0x239b9b7e6444 @   60 : 33 f8 07 0e       DefineNamedOwnProperty r2, [7], [14]
         0x239b9b7e6448 @   64 : 0b f8             Ldar r2
         0x239b9b7e644a @   66 : c1                Star3 
         0x239b9b7e644b @   67 : 19 fa f8          Mov r0, r2
         0x239b9b7e644e @   70 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1563 S> 0x239b9b7e6452 @   74 : a9                Return 
 1587 S> 0x239b9b7e6453 @   75 : 2d 02 08 10       GetNamedProperty <this>, [8], [16]
         0x239b9b7e6457 @   79 : c2                Star2 
 1587 E> 0x239b9b7e6458 @   80 : 5d f8 02 12       CallProperty0 r2, <this>, [18]
 1696 S> 0x239b9b7e645c @   84 : 2d 02 02 14       GetNamedProperty <this>, [2], [20]
         0x239b9b7e6460 @   88 : c2                Star2 
 1696 E> 0x239b9b7e6461 @   89 : 5d f8 02 16       CallProperty0 r2, <this>, [22]
         0x239b9b7e6465 @   93 : 96 2c             JumpIfToBooleanTrue [44] (0x239b9b7e6491 @ 137)
 1739 S> 0x239b9b7e6467 @   95 : 2d 02 09 18       GetNamedProperty <this>, [9], [24]
         0x239b9b7e646b @   99 : c2                Star2 
 1739 E> 0x239b9b7e646c @  100 : 5d f8 02 1a       CallProperty0 r2, <this>, [26]
         0x239b9b7e6470 @  104 : c1                Star3 
         0x239b9b7e6471 @  105 : 19 fa f8          Mov r0, r2
         0x239b9b7e6474 @  108 : 68 01 f8 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r2-r3
 1728 E> 0x239b9b7e6478 @  112 : af fa fa 02 00    SuspendGenerator r0, r0-r1, [0]
         0x239b9b7e647d @  117 : b0 fa fa 02       ResumeGenerator r0, r0-r1
         0x239b9b7e6481 @  121 : c2                Star2 
         0x239b9b7e6482 @  122 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x239b9b7e6486 @  126 : c1                Star3 
         0x239b9b7e6487 @  127 : 0c                LdaZero 
         0x239b9b7e6488 @  128 : 1c f7             TestReferenceEqual r3
         0x239b9b7e648a @  130 : 98 05             JumpIfTrue [5] (0x239b9b7e648f @ 135)
         0x239b9b7e648c @  132 : 0b f8             Ldar r2
         0x239b9b7e648e @  134 : a8                ReThrow 
         0x239b9b7e648f @  135 : 0b f8             Ldar r2
 1788 S> 0x239b9b7e6491 @  137 : 7c 0a 1c 0c       CreateObjectLiteral [10], [28], #12
         0x239b9b7e6495 @  141 : c2                Star2 
 1858 E> 0x239b9b7e6496 @  142 : 2d 02 0b 1d       GetNamedProperty <this>, [11], [29]
         0x239b9b7e649a @  146 : c1                Star3 
 1858 E> 0x239b9b7e649b @  147 : 5d f7 02 1f       CallProperty0 r3, <this>, [31]
         0x239b9b7e649f @  151 : 33 f8 0c 21       DefineNamedOwnProperty r2, [12], [33]
 1905 E> 0x239b9b7e64a3 @  155 : 2d 02 0d 23       GetNamedProperty <this>, [13], [35]
         0x239b9b7e64a7 @  159 : 33 f8 0e 25       DefineNamedOwnProperty r2, [14], [37]
         0x239b9b7e64ab @  163 : 0b f8             Ldar r2
         0x239b9b7e64ad @  165 : c1                Star3 
         0x239b9b7e64ae @  166 : 19 fa f8          Mov r0, r2
         0x239b9b7e64b1 @  169 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1957 S> 0x239b9b7e64b5 @  173 : a9                Return 
         0x239b9b7e64b6 @  174 : c2                Star2 
         0x239b9b7e64b7 @  175 : 82 f8 0f          CreateCatchContext r2, [15]
         0x239b9b7e64ba @  178 : c3                Star1 
         0x239b9b7e64bb @  179 : 10                LdaTheHole 
         0x239b9b7e64bc @  180 : a6                SetPendingMessage 
         0x239b9b7e64bd @  181 : 0b f9             Ldar r1
         0x239b9b7e64bf @  183 : 1a f8             PushContext r2
         0x239b9b7e64c1 @  185 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e64c3 @  187 : c0                Star4 
         0x239b9b7e64c4 @  188 : 19 fa f7          Mov r0, r3
         0x239b9b7e64c7 @  191 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x239b9b7e64cb @  195 : a9                Return 
Constant pool (size = 16)
0x239b9b7e64d1: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 16
           0: 117
           1: 0x239b9b7e59b1 <String[17]: #currentTickNumber>
           2: 0x239b9b7e5731 <String[14]: #isGameComplete>
           3: 0x239b9b7e6561 <ObjectBoilerplateDescription[5]>
           4: 0x239b9b7e65d9 <ObjectBoilerplateDescription[3]>
           5: 0x239b9b7e5689 <String[14]: #getGameResults>
           6: 0x239b9b7e6601 <String[7]: #results>
           7: 0x239b9b7e65b9 <String[11]: #gameResults>
           8: 0x239b9b7e5751 <String[10]: #updateGame>
           9: 0x239b9b7e56e1 <String[27]: #fetchAndApplyPlayerCommands>
          10: 0x239b9b7e6619 <ObjectBoilerplateDescription[9]>
          11: 0x239b9b7e57b1 <String[18]: #serializeForViewer>
          12: 0x239b9b7e6671 <String[9]: #gameState>
          13: 0x239b9b7e5991 <String[14]: #lastTickErrors>
          14: 0x391e81ec4f11 <String[6]: #errors>
          15: 0x239b9b7e66c1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 174)  ->   174 (prediction=3, data=1)
Source Position Table (size = 55)
0x239b9b7e6719 <ByteArray[55]>
Boilerplate at 0x239b9b7e6561: 
0x239b9b7e6561: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 5
           0: 8
           1: 0x239b9b7e6599 <String[12]: #gameComplete>
           2: 0x391e81ec1729 <true>
           3: 0x239b9b7e65b9 <String[11]: #gameResults>
           4: 0x391e81ec1501 <Odd Oddball: uninitialized>
Boilerplate at 0x239b9b7e65d9: 
0x239b9b7e65d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 3
           0: 8
           1: 0x239b9b7e6601 <String[7]: #results>
           2: 0x391e81ec1501 <Odd Oddball: uninitialized>
Boilerplate at 0x239b9b7e6619: 
0x239b9b7e6619: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 9
           0: 8
           1: 0x239b9b7e6599 <String[12]: #gameComplete>
           2: 0x391e81ec1789 <false>
           3: 0x239b9b7e6671 <String[9]: #gameState>
           4: 0x391e81ec1501 <Odd Oddball: uninitialized>
           5: 0x391e81ec4f11 <String[6]: #errors>
           6: 0x391e81ec1501 <Odd Oddball: uninitialized>
           7: 0x239b9b7e6691 <String[8]: #commands>
           8: 0x239b9b7e66a9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x391e81ec1329 <FixedArray[0]>>
0x239b9b7e67e1 points to: [0x239b9b7e6850]
=== [0x239b9b7e6850] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x239b9b7e6850 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @57 }
 2001 E> 0x239b9b7e6854 @    4 : 83 01 01          CreateFunctionContext [1], [1]
         0x239b9b7e6857 @    7 : 1a f8             PushContext r2
         0x239b9b7e6859 @    9 : 0b 02             Ldar <this>
         0x239b9b7e685b @   11 : 25 02             StaCurrentContextSlot [2]
         0x239b9b7e685d @   13 : 19 fe f7          Mov <closure>, r3
         0x239b9b7e6860 @   16 : 19 02 f6          Mov <this>, r4
         0x239b9b7e6863 @   19 : 68 02 f7 02       InvokeIntrinsic [_AsyncFunctionEnter], r3-r4
         0x239b9b7e6867 @   23 : c4                Star0 
         0x239b9b7e6868 @   24 : 19 ff f7          Mov <context>, r3
 2042 S> 0x239b9b7e686b @   27 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e686d @   29 : bf                Star5 
 2053 E> 0x239b9b7e686e @   30 : 2d f5 02 00       GetNamedProperty r5, [2], [0]
         0x239b9b7e6872 @   34 : bf                Star5 
 2060 E> 0x239b9b7e6873 @   35 : 2d f5 03 02       GetNamedProperty r5, [3], [2]
         0x239b9b7e6877 @   39 : c0                Star4 
 2060 E> 0x239b9b7e6878 @   40 : 5d f6 f5 04       CallProperty0 r4, r5, [4]
         0x239b9b7e687c @   44 : bf                Star5 
         0x239b9b7e687d @   45 : 19 fa f6          Mov r0, r4
         0x239b9b7e6880 @   48 : 68 01 f6 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r4-r5
 2042 E> 0x239b9b7e6884 @   52 : af fa fa 04 00    SuspendGenerator r0, r0-r3, [0]
         0x239b9b7e6889 @   57 : b0 fa fa 04       ResumeGenerator r0, r0-r3
         0x239b9b7e688d @   61 : c0                Star4 
         0x239b9b7e688e @   62 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x239b9b7e6892 @   66 : bf                Star5 
         0x239b9b7e6893 @   67 : 0c                LdaZero 
         0x239b9b7e6894 @   68 : 1c f5             TestReferenceEqual r5
         0x239b9b7e6896 @   70 : 98 05             JumpIfTrue [5] (0x239b9b7e689b @ 75)
         0x239b9b7e6898 @   72 : 0b f6             Ldar r4
         0x239b9b7e689a @   74 : a8                ReThrow 
         0x239b9b7e689b @   75 : 19 f6 f9          Mov r4, r1
 2092 S> 0x239b9b7e689e @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e68a0 @   80 : c0                Star4 
         0x239b9b7e68a1 @   81 : 7b 06             CreateEmptyArrayLiteral [6]
 2112 E> 0x239b9b7e68a3 @   83 : 32 f6 04 07       SetNamedProperty r4, [4], [7]
 2146 S> 0x239b9b7e68a7 @   87 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x239b9b7e68ab @   91 : c0                Star4 
         0x239b9b7e68ac @   92 : 80 06 00 02       CreateClosure [6], [0], #2
         0x239b9b7e68b0 @   96 : be                Star6 
 2146 E> 0x239b9b7e68b1 @   97 : 5e f6 f9 f4 0b    CallProperty1 r4, r1, r6, [11]
         0x239b9b7e68b6 @  102 : 0e                LdaUndefined 
         0x239b9b7e68b7 @  103 : bf                Star5 
         0x239b9b7e68b8 @  104 : 19 fa f6          Mov r0, r4
         0x239b9b7e68bb @  107 : 68 04 f6 02       InvokeIntrinsic [_AsyncFunctionResolve], r4-r5
 2911 S> 0x239b9b7e68bf @  111 : a9                Return 
         0x239b9b7e68c0 @  112 : c0                Star4 
         0x239b9b7e68c1 @  113 : 82 f6 07          CreateCatchContext r4, [7]
         0x239b9b7e68c4 @  116 : c1                Star3 
         0x239b9b7e68c5 @  117 : 10                LdaTheHole 
         0x239b9b7e68c6 @  118 : a6                SetPendingMessage 
         0x239b9b7e68c7 @  119 : 0b f7             Ldar r3
         0x239b9b7e68c9 @  121 : 1a f6             PushContext r4
         0x239b9b7e68cb @  123 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e68cd @  125 : be                Star6 
         0x239b9b7e68ce @  126 : 19 fa f5          Mov r0, r5
         0x239b9b7e68d1 @  129 : 68 03 f5 02       InvokeIntrinsic [_AsyncFunctionReject], r5-r6
         0x239b9b7e68d5 @  133 : a9                Return 
Constant pool (size = 8)
0x239b9b7e68d9: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 8
           0: 57
           1: 0x239b9b7e6929 <ScopeInfo FUNCTION_SCOPE>
           2: 0x239b9b7e59d9 <String[6]: #engine>
           3: 0x239b9b7e6989 <String[20]: #getCommandsFromTeams>
           4: 0x239b9b7e5991 <String[14]: #lastTickErrors>
           5: 0x2868e8bca021 <String[7]: #forEach>
           6: 0x239b9b7e69c9 <SharedFunctionInfo>
           7: 0x239b9b7e6e01 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  27, 112)  ->   112 (prediction=3, data=3)
Source Position Table (size = 29)
0x239b9b7e6e59 <ByteArray[29]>
0x239b9b7e69c9 points to: [0x239b9b7e6a38]
=== [0x239b9b7e6a38] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2219 S> 0x239b9b7e6a38 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x239b9b7e6a3c @    4 : c4                Star0 
 2240 S> 0x239b9b7e6a3d @    5 : 97 b8             JumpIfToBooleanFalse [184] (0x239b9b7e6af5 @ 189)
         0x239b9b7e6a3f @    7 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e6a41 @    9 : c3                Star1 
 2260 E> 0x239b9b7e6a42 @   10 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x239b9b7e6a46 @   14 : 97 af             JumpIfToBooleanFalse [175] (0x239b9b7e6af5 @ 189)
         0x239b9b7e6a48 @   16 : 19 ff f9          Mov <context>, r1
 2329 S> 0x239b9b7e6a4b @   19 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x239b9b7e6a4f @   23 : 1d                TestUndetectable 
         0x239b9b7e6a50 @   24 : 99 0e             JumpIfFalse [14] (0x239b9b7e6a5e @ 38)
 2372 S> 0x239b9b7e6a52 @   26 : 21 03 06          LdaGlobal [3], [6]
         0x239b9b7e6a55 @   29 : c2                Star2 
         0x239b9b7e6a56 @   30 : 13 04             LdaConstant [4]
         0x239b9b7e6a58 @   32 : c1                Star3 
 2378 E> 0x239b9b7e6a59 @   33 : 62 f8 f7 08       CallUndefinedReceiver1 r2, r3, [8]
 2372 E> 0x239b9b7e6a5d @   37 : a7                Throw 
 2466 S> 0x239b9b7e6a5e @   38 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e6a60 @   40 : c1                Star3 
 2471 E> 0x239b9b7e6a61 @   41 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x239b9b7e6a65 @   45 : c2                Star2 
         0x239b9b7e6a66 @   46 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e6a68 @   48 : c0                Star4 
 2489 E> 0x239b9b7e6a69 @   49 : 2d f6 01 0c       GetNamedProperty r4, [1], [12]
         0x239b9b7e6a6d @   53 : c0                Star4 
 2471 E> 0x239b9b7e6a6e @   54 : 5f f8 f7 f6 fa 0e CallProperty2 r2, r3, r4, r0, [14]
         0x239b9b7e6a74 @   60 : 8a 81             Jump [129] (0x239b9b7e6af5 @ 189)
         0x239b9b7e6a76 @   62 : c2                Star2 
         0x239b9b7e6a77 @   63 : 82 f8 06          CreateCatchContext r2, [6]
         0x239b9b7e6a7a @   66 : c3                Star1 
         0x239b9b7e6a7b @   67 : 10                LdaTheHole 
         0x239b9b7e6a7c @   68 : a6                SetPendingMessage 
         0x239b9b7e6a7d @   69 : 0b f9             Ldar r1
         0x239b9b7e6a7f @   71 : 1a f8             PushContext r2
 2582 S> 0x239b9b7e6a81 @   73 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x239b9b7e6a85 @   77 : aa 07             ThrowReferenceErrorIfHole [7]
         0x239b9b7e6a87 @   79 : c0                Star4 
 2591 E> 0x239b9b7e6a88 @   80 : 2d f6 08 10       GetNamedProperty r4, [8], [16]
         0x239b9b7e6a8c @   84 : c0                Star4 
 2598 E> 0x239b9b7e6a8d @   85 : 2d f6 09 12       GetNamedProperty r4, [9], [18]
         0x239b9b7e6a91 @   89 : c1                Star3 
         0x239b9b7e6a92 @   90 : 13 0a             LdaConstant [10]
         0x239b9b7e6a94 @   92 : bf                Star5 
 2633 E> 0x239b9b7e6a95 @   93 : 21 0b 15          LdaGlobal [11], [21]
         0x239b9b7e6a98 @   96 : bd                Star7 
 2638 E> 0x239b9b7e6a99 @   97 : 2d f3 0c 17       GetNamedProperty r7, [12], [23]
         0x239b9b7e6a9d @  101 : be                Star6 
 2638 E> 0x239b9b7e6a9e @  102 : 5e f4 f3 fa 19    CallProperty1 r6, r7, r0, [25]
         0x239b9b7e6aa3 @  107 : 77                ToString 
         0x239b9b7e6aa4 @  108 : 39 f5 14          Add r5, [20]
         0x239b9b7e6aa7 @  111 : bf                Star5 
         0x239b9b7e6aa8 @  112 : 13 0d             LdaConstant [13]
         0x239b9b7e6aaa @  114 : 39 f5 14          Add r5, [20]
         0x239b9b7e6aad @  117 : bf                Star5 
         0x239b9b7e6aae @  118 : 17 02             LdaImmutableCurrentContextSlot [2]
 2663 E> 0x239b9b7e6ab0 @  120 : 77                ToString 
         0x239b9b7e6ab1 @  121 : 39 f5 14          Add r5, [20]
         0x239b9b7e6ab4 @  124 : bf                Star5 
 2598 E> 0x239b9b7e6ab5 @  125 : 5e f7 f6 f5 1b    CallProperty1 r3, r4, r5, [27]
 2693 S> 0x239b9b7e6aba @  130 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e6abc @  132 : c1                Star3 
 2714 E> 0x239b9b7e6abd @  133 : 21 03 06          LdaGlobal [3], [6]
 2703 E> 0x239b9b7e6ac0 @  136 : 71 f7 1d          TestInstanceOf r3, [29]
         0x239b9b7e6ac3 @  139 : 99 30             JumpIfFalse [48] (0x239b9b7e6af3 @ 187)
 2747 S> 0x239b9b7e6ac5 @  141 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x239b9b7e6ac9 @  145 : c0                Star4 
 2752 E> 0x239b9b7e6aca @  146 : 2d f6 01 1e       GetNamedProperty r4, [1], [30]
         0x239b9b7e6ace @  150 : c0                Star4 
 2764 E> 0x239b9b7e6acf @  151 : 2d f6 0e 20       GetNamedProperty r4, [14], [32]
         0x239b9b7e6ad3 @  155 : c1                Star3 
         0x239b9b7e6ad4 @  156 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e6ad6 @  158 : bf                Star5 
 2764 E> 0x239b9b7e6ad7 @  159 : 5e f7 f6 f5 22    CallProperty1 r3, r4, r5, [34]
 2808 S> 0x239b9b7e6adc @  164 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x239b9b7e6ae0 @  168 : c0                Star4 
 2813 E> 0x239b9b7e6ae1 @  169 : 2d f6 0f 24       GetNamedProperty r4, [15], [36]
         0x239b9b7e6ae5 @  173 : c0                Star4 
 2828 E> 0x239b9b7e6ae6 @  174 : 2d f6 10 26       GetNamedProperty r4, [16], [38]
         0x239b9b7e6aea @  178 : c1                Star3 
         0x239b9b7e6aeb @  179 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e6aed @  181 : bf                Star5 
 2828 E> 0x239b9b7e6aee @  182 : 5e f7 f6 f5 28    CallProperty1 r3, r4, r5, [40]
         0x239b9b7e6af3 @  187 : 1b f8             PopContext r2
         0x239b9b7e6af5 @  189 : 0e                LdaUndefined 
 2903 S> 0x239b9b7e6af6 @  190 : a9                Return 
Constant pool (size = 17)
0x239b9b7e6af9: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 17
           0: 0x239b9b7e6b91 <String[7]: #command>
           1: 0x239b9b7e5d99 <String[11]: #_engineTeam>
           2: 0x239b9b7e6ba9 <String[7]: #actions>
           3: 0x391e81ec4de1 <String[5]: #Error>
           4: 0x239b9b7e6bc1 <String[35]: #Command invalid: 'actions' missing.>
           5: 0x239b9b7e5711 <String[12]: #applyActions>
           6: 0x239b9b7e6bf9 <ScopeInfo CATCH_SCOPE>
           7: 0x239b9b7e5221 <String[8]: #engine_1>
           8: 0x2868e8bc6461 <String[6]: #logger>
           9: 0x2868e8bc6309 <String[5]: #error>
          10: 0x239b9b7e6c49 <String[26]: #Error processing command '>
          11: 0x2868e8bdc529 <String[4]: #JSON>
          12: 0x2868e8bcee51 <String[9]: #stringify>
          13: 0x239b9b7e6cb1 <String[4]: #' : >
          14: 0x239b9b7e6cc9 <String[11]: #reportError>
          15: 0x239b9b7e5991 <String[14]: #lastTickErrors>
          16: 0x2868e8bc9551 <String[4]: #push>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  19,  60)  ->    62 (prediction=1, data=1)
Source Position Table (size = 76)
0x239b9b7e6d21 <ByteArray[76]>
0x239b9b7e6ea9 points to: [0x239b9b7e6f18]
=== [0x239b9b7e6f18] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2929 E> 0x239b9b7e6f18 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x239b9b7e6f1b @    3 : 1a fa             PushContext r0
         0x239b9b7e6f1d @    5 : 0b 02             Ldar <this>
         0x239b9b7e6f1f @    7 : 25 02             StaCurrentContextSlot [2]
         0x239b9b7e6f21 @    9 : 0b 03             Ldar a0
         0x239b9b7e6f23 @   11 : 25 03             StaCurrentContextSlot [3]
 2963 S> 0x239b9b7e6f25 @   13 : 2d 04 01 00       GetNamedProperty a1, [1], [0]
         0x239b9b7e6f29 @   17 : c2                Star2 
 2971 E> 0x239b9b7e6f2a @   18 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x239b9b7e6f2e @   22 : c3                Star1 
         0x239b9b7e6f2f @   23 : 80 03 00 02       CreateClosure [3], [0], #2
         0x239b9b7e6f33 @   27 : c1                Star3 
 2971 E> 0x239b9b7e6f34 @   28 : 5e f9 f8 f7 04    CallProperty1 r1, r2, r3, [4]
         0x239b9b7e6f39 @   33 : 0e                LdaUndefined 
 3419 S> 0x239b9b7e6f3a @   34 : a9                Return 
Constant pool (size = 4)
0x239b9b7e6f41: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 4
           0: 0x239b9b7e6f71 <ScopeInfo FUNCTION_SCOPE>
           1: 0x239b9b7e6ba9 <String[7]: #actions>
           2: 0x2868e8bca021 <String[7]: #forEach>
           3: 0x239b9b7e6ff9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 15)
0x239b9b7e7341 <ByteArray[15]>
0x239b9b7e6ff9 points to: [0x239b9b7e7068]
=== [0x239b9b7e7068] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x239b9b7e7068 @    0 : 19 ff fa          Mov <context>, r0
 3027 S> 0x239b9b7e706b @    3 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e706d @    5 : c2                Star2 
 3032 E> 0x239b9b7e706e @    6 : 2d f8 00 00       GetNamedProperty r2, [0], [0]
         0x239b9b7e7072 @   10 : c2                Star2 
         0x239b9b7e7073 @   11 : 9e 0e             JumpIfUndefinedOrNull [14] (0x239b9b7e7081 @ 25)
 3037 E> 0x239b9b7e7075 @   13 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x239b9b7e7079 @   17 : c3                Star1 
 3039 E> 0x239b9b7e707a @   18 : 5e f9 f8 03 04    CallProperty1 r1, r2, a0, [4]
         0x239b9b7e707f @   23 : 8a 03             Jump [3] (0x239b9b7e7082 @ 26)
         0x239b9b7e7081 @   25 : 0e                LdaUndefined 
         0x239b9b7e7082 @   26 : 8a 8c             Jump [140] (0x239b9b7e710e @ 166)
         0x239b9b7e7084 @   28 : c3                Star1 
         0x239b9b7e7085 @   29 : 82 f9 02          CreateCatchContext r1, [2]
         0x239b9b7e7088 @   32 : c4                Star0 
         0x239b9b7e7089 @   33 : 10                LdaTheHole 
         0x239b9b7e708a @   34 : a6                SetPendingMessage 
         0x239b9b7e708b @   35 : 0b fa             Ldar r0
         0x239b9b7e708d @   37 : 1a f9             PushContext r1
 3118 S> 0x239b9b7e708f @   39 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x239b9b7e7093 @   43 : aa 03             ThrowReferenceErrorIfHole [3]
         0x239b9b7e7095 @   45 : c1                Star3 
 3127 E> 0x239b9b7e7096 @   46 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x239b9b7e709a @   50 : c1                Star3 
 3134 E> 0x239b9b7e709b @   51 : 2d f7 05 08       GetNamedProperty r3, [5], [8]
         0x239b9b7e709f @   55 : c2                Star2 
         0x239b9b7e70a0 @   56 : 13 06             LdaConstant [6]
         0x239b9b7e70a2 @   58 : c0                Star4 
 3166 E> 0x239b9b7e70a3 @   59 : 21 07 0b          LdaGlobal [7], [11]
         0x239b9b7e70a6 @   62 : be                Star6 
 3171 E> 0x239b9b7e70a7 @   63 : 2d f4 08 0d       GetNamedProperty r6, [8], [13]
         0x239b9b7e70ab @   67 : bf                Star5 
 3171 E> 0x239b9b7e70ac @   68 : 5e f5 f4 03 0f    CallProperty1 r5, r6, a0, [15]
         0x239b9b7e70b1 @   73 : 77                ToString 
         0x239b9b7e70b2 @   74 : 39 f6 0a          Add r4, [10]
         0x239b9b7e70b5 @   77 : c0                Star4 
         0x239b9b7e70b6 @   78 : 13 09             LdaConstant [9]
         0x239b9b7e70b8 @   80 : 39 f6 0a          Add r4, [10]
         0x239b9b7e70bb @   83 : c0                Star4 
 3134 E> 0x239b9b7e70bc @   84 : 5e f8 f7 f6 11    CallProperty1 r2, r3, r4, [17]
 3210 S> 0x239b9b7e70c1 @   89 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e70c3 @   91 : c2                Star2 
 3231 E> 0x239b9b7e70c4 @   92 : 21 0a 13          LdaGlobal [10], [19]
 3220 E> 0x239b9b7e70c7 @   95 : 71 f8 15          TestInstanceOf r2, [21]
         0x239b9b7e70ca @   98 : 99 42             JumpIfFalse [66] (0x239b9b7e710c @ 164)
 3260 S> 0x239b9b7e70cc @  100 : 15 f9 03 00       LdaImmutableContextSlot r1, [3], [0]
         0x239b9b7e70d0 @  104 : c1                Star3 
 3265 E> 0x239b9b7e70d1 @  105 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x239b9b7e70d5 @  109 : c2                Star2 
         0x239b9b7e70d6 @  110 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e70d8 @  112 : c0                Star4 
 3265 E> 0x239b9b7e70d9 @  113 : 5e f8 f7 f6 18    CallProperty1 r2, r3, r4, [24]
 3305 S> 0x239b9b7e70de @  118 : 15 f9 02 00       LdaImmutableContextSlot r1, [2], [0]
         0x239b9b7e70e2 @  122 : c1                Star3 
 3310 E> 0x239b9b7e70e3 @  123 : 2d f7 0c 1a       GetNamedProperty r3, [12], [26]
         0x239b9b7e70e7 @  127 : c1                Star3 
 3325 E> 0x239b9b7e70e8 @  128 : 2d f7 0d 1c       GetNamedProperty r3, [13], [28]
         0x239b9b7e70ec @  132 : c2                Star2 
         0x239b9b7e70ed @  133 : 15 ff 03 03       LdaImmutableContextSlot <context>, [3], [3]
 3334 E> 0x239b9b7e70f1 @  137 : aa 0e             ThrowReferenceErrorIfHole [14]
         0x239b9b7e70f3 @  139 : c0                Star4 
 3342 E> 0x239b9b7e70f4 @  140 : 2d f6 0f 1e       GetNamedProperty r4, [15], [30]
         0x239b9b7e70f8 @  144 : c0                Star4 
         0x239b9b7e70f9 @  145 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x239b9b7e70fb @  147 : be                Star6 
         0x239b9b7e70fc @  148 : 0b f6             Ldar r4
         0x239b9b7e70fe @  150 : 19 03 f5          Mov a0, r5
 3330 E> 0x239b9b7e7101 @  153 : 69 f6 f5 02 20    Construct r4, r5-r6, [32]
         0x239b9b7e7106 @  158 : c0                Star4 
 3325 E> 0x239b9b7e7107 @  159 : 5e f8 f7 f6 22    CallProperty1 r2, r3, r4, [34]
         0x239b9b7e710c @  164 : 1b f9             PopContext r1
         0x239b9b7e710e @  166 : 0e                LdaUndefined 
 3411 S> 0x239b9b7e710f @  167 : a9                Return 
Constant pool (size = 16)
0x239b9b7e7111: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 16
           0: 0x239b9b7e6059 <String[5]: #world>
           1: 0x239b9b7e71a1 <String[11]: #applyAction>
           2: 0x239b9b7e71c1 <ScopeInfo CATCH_SCOPE>
           3: 0x239b9b7e5221 <String[8]: #engine_1>
           4: 0x2868e8bc6461 <String[6]: #logger>
           5: 0x2868e8bc6309 <String[5]: #error>
           6: 0x239b9b7e71f9 <String[23]: #Error applying action '>
           7: 0x2868e8bdc529 <String[4]: #JSON>
           8: 0x2868e8bcee51 <String[9]: #stringify>
           9: 0x2868e8bf4c49 <String[1]: #'>
          10: 0x391e81ec4de1 <String[5]: #Error>
          11: 0x239b9b7e6cc9 <String[11]: #reportError>
          12: 0x239b9b7e5991 <String[14]: #lastTickErrors>
          13: 0x2868e8bc9551 <String[4]: #push>
          14: 0x239b9b7e5239 <String[7]: #error_1>
          15: 0x239b9b7e7239 <String[11]: #ActionError>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (   3,  26)  ->    28 (prediction=1, data=0)
Source Position Table (size = 61)
0x239b9b7e7279 <ByteArray[61]>
0x239b9b7e7379 points to: [0x239b9b7e73e8]
=== [0x239b9b7e73e8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3465 S> 0x239b9b7e73e8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x239b9b7e73ec @    4 : c4                Star0 
         0x239b9b7e73ed @    5 : 9e 08             JumpIfUndefinedOrNull [8] (0x239b9b7e73f5 @ 13)
 3470 E> 0x239b9b7e73ef @    7 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x239b9b7e73f3 @   11 : 8a 03             Jump [3] (0x239b9b7e73f6 @ 14)
         0x239b9b7e73f5 @   13 : 0e                LdaUndefined 
         0x239b9b7e73f6 @   14 : 97 10             JumpIfToBooleanFalse [16] (0x239b9b7e7406 @ 30)
 3493 E> 0x239b9b7e73f8 @   16 : 2d 02 00 04       GetNamedProperty <this>, [0], [4]
         0x239b9b7e73fc @   20 : c4                Star0 
 3499 E> 0x239b9b7e73fd @   21 : 2d fa 01 06       GetNamedProperty r0, [1], [6]
         0x239b9b7e7401 @   25 : c4                Star0 
         0x239b9b7e7402 @   26 : 0c                LdaZero 
 3512 E> 0x239b9b7e7403 @   27 : 6f fa 08          TestLessThanOrEqual r0, [8]
         0x239b9b7e7406 @   30 : 96 13             JumpIfToBooleanTrue [19] (0x239b9b7e7419 @ 49)
 3538 E> 0x239b9b7e7408 @   32 : 2d 02 02 09       GetNamedProperty <this>, [2], [9]
         0x239b9b7e740c @   36 : c4                Star0 
 3564 E> 0x239b9b7e740d @   37 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x239b9b7e7411 @   41 : c3                Star1 
 3572 E> 0x239b9b7e7412 @   42 : 2d f9 04 0d       GetNamedProperty r1, [4], [13]
 3556 E> 0x239b9b7e7416 @   46 : 70 fa 0f          TestGreaterThanOrEqual r0, [15]
 3583 S> 0x239b9b7e7419 @   49 : a9                Return 
Constant pool (size = 5)
0x239b9b7e7421: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 5
           0: 0x239b9b7e6059 <String[5]: #world>
           1: 0x239b9b7e7459 <String[12]: #healthPoints>
           2: 0x239b9b7e59b1 <String[17]: #currentTickNumber>
           3: 0x2868e8bccbb9 <String[7]: #options>
           4: 0x239b9b7e7479 <String[10]: #TICK_COUNT>
Handler Table (size = 0)
Source Position Table (size = 23)
0x239b9b7e7499 <ByteArray[23]>
0x239b9b7e7531 points to: [0x239b9b7e75a0]
=== [0x239b9b7e75a0] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3622 S> 0x239b9b7e75a0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x239b9b7e75a4 @    4 : c3                Star1 
         0x239b9b7e75a5 @    5 : 9e 0d             JumpIfUndefinedOrNull [13] (0x239b9b7e75b2 @ 18)
 3627 E> 0x239b9b7e75a7 @    7 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x239b9b7e75ab @   11 : c4                Star0 
 3629 E> 0x239b9b7e75ac @   12 : 5d fa f9 04       CallProperty0 r0, r1, [4]
         0x239b9b7e75b0 @   16 : 8a 03             Jump [3] (0x239b9b7e75b3 @ 19)
         0x239b9b7e75b2 @   18 : 0e                LdaUndefined 
         0x239b9b7e75b3 @   19 : 0e                LdaUndefined 
 3643 S> 0x239b9b7e75b4 @   20 : a9                Return 
Constant pool (size = 2)
0x239b9b7e75b9: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 2
           0: 0x239b9b7e6059 <String[5]: #world>
           1: 0x2868e8bc3f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 11)
0x239b9b7e75f1 <ByteArray[11]>
0x239b9b7e7679 points to: [0x239b9b7e76e8]
=== [0x239b9b7e76e8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
         0x239b9b7e76e8 @    0 : 0e                LdaUndefined 
 3690 S> 0x239b9b7e76e9 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 5)
0x239b9b7e76f1 <ByteArray[5]>
0x239b9b7e7759 points to: [0x239b9b7e77c8]
=== [0x239b9b7e77c8] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3760 S> 0x239b9b7e77c8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x239b9b7e77cc @    4 : c3                Star1 
 3760 E> 0x239b9b7e77cd @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x239b9b7e77d1 @    9 : c3                Star1 
         0x239b9b7e77d2 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x239b9b7e77d6 @   14 : c4                Star0 
 3799 E> 0x239b9b7e77d7 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x239b9b7e77db @   19 : c0                Star4 
 3805 E> 0x239b9b7e77dc @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x239b9b7e77e0 @   24 : c1                Star3 
 3805 E> 0x239b9b7e77e1 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x239b9b7e77e5 @   29 : c2                Star2 
         0x239b9b7e77e6 @   30 : 19 fa f9          Mov r0, r1
         0x239b9b7e77e9 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x239b9b7e77ed @   37 : 0b f9             Ldar r1
 3837 S> 0x239b9b7e77ef @   39 : a9                Return 
Constant pool (size = 3)
0x239b9b7e77f1: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 3
           0: 0x239b9b7e5801 <String[15]: #serializeCommon>
           1: 0x239b9b7e6059 <String[5]: #world>
           2: 0x239b9b7e7819 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 18)
0x239b9b7e7841 <ByteArray[18]>
0x239b9b7e78d1 points to: [0x239b9b7e7940]
=== [0x239b9b7e7940] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3908 S> 0x239b9b7e7940 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x239b9b7e7944 @    4 : c3                Star1 
 3908 E> 0x239b9b7e7945 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x239b9b7e7949 @    9 : c3                Star1 
         0x239b9b7e794a @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x239b9b7e794e @   14 : c4                Star0 
 3947 E> 0x239b9b7e794f @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x239b9b7e7953 @   19 : c0                Star4 
 3953 E> 0x239b9b7e7954 @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x239b9b7e7958 @   24 : c1                Star3 
 3953 E> 0x239b9b7e7959 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x239b9b7e795d @   29 : c2                Star2 
         0x239b9b7e795e @   30 : 19 fa f9          Mov r0, r1
         0x239b9b7e7961 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x239b9b7e7965 @   37 : 0b f9             Ldar r1
 3985 S> 0x239b9b7e7967 @   39 : a9                Return 
Constant pool (size = 3)
0x239b9b7e7969: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 3
           0: 0x239b9b7e5801 <String[15]: #serializeCommon>
           1: 0x239b9b7e6059 <String[5]: #world>
           2: 0x239b9b7e57b1 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 18)
0x239b9b7e7991 <ByteArray[18]>
0x239b9b7e7a21 points to: [0x239b9b7e7a90]
=== [0x239b9b7e7a90] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 4027 S> 0x239b9b7e7a90 @    0 : 7c 00 00 08       CreateObjectLiteral [0], [0], #8
         0x239b9b7e7a94 @    4 : c4                Star0 
 4057 E> 0x239b9b7e7a95 @    5 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x239b9b7e7a99 @    9 : c3                Star1 
 4087 E> 0x239b9b7e7a9a @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x239b9b7e7a9e @   14 : c2                Star2 
 4095 E> 0x239b9b7e7a9f @   15 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x239b9b7e7aa3 @   19 : 33 f9 04 06       DefineNamedOwnProperty r1, [4], [6]
 4136 E> 0x239b9b7e7aa7 @   23 : 2d 02 02 08       GetNamedProperty <this>, [2], [8]
         0x239b9b7e7aab @   27 : c2                Star2 
 4144 E> 0x239b9b7e7aac @   28 : 2d f8 05 0a       GetNamedProperty r2, [5], [10]
         0x239b9b7e7ab0 @   32 : 33 f9 06 0c       DefineNamedOwnProperty r1, [6], [12]
         0x239b9b7e7ab4 @   36 : 0b f9             Ldar r1
         0x239b9b7e7ab6 @   38 : 33 fa 07 0e       DefineNamedOwnProperty r0, [7], [14]
 4191 E> 0x239b9b7e7aba @   42 : 7c 08 10 29       CreateObjectLiteral [8], [16], #41
         0x239b9b7e7abe @   46 : c3                Star1 
 4221 E> 0x239b9b7e7abf @   47 : 2d 02 02 11       GetNamedProperty <this>, [2], [17]
         0x239b9b7e7ac3 @   51 : c2                Star2 
 4229 E> 0x239b9b7e7ac4 @   52 : 2d f8 09 13       GetNamedProperty r2, [9], [19]
         0x239b9b7e7ac8 @   56 : c2                Star2 
 4246 E> 0x239b9b7e7ac9 @   57 : 2d f8 0a 15       GetNamedProperty r2, [10], [21]
         0x239b9b7e7acd @   61 : 33 f9 0a 17       DefineNamedOwnProperty r1, [10], [23]
 4282 E> 0x239b9b7e7ad1 @   65 : 2d 02 02 19       GetNamedProperty <this>, [2], [25]
         0x239b9b7e7ad5 @   69 : c2                Star2 
 4290 E> 0x239b9b7e7ad6 @   70 : 2d f8 09 1b       GetNamedProperty r2, [9], [27]
         0x239b9b7e7ada @   74 : c2                Star2 
 4307 E> 0x239b9b7e7adb @   75 : 2d f8 0b 1d       GetNamedProperty r2, [11], [29]
         0x239b9b7e7adf @   79 : 33 f9 0b 1f       DefineNamedOwnProperty r1, [11], [31]
         0x239b9b7e7ae3 @   83 : 0b f9             Ldar r1
         0x239b9b7e7ae5 @   85 : 33 fa 0c 21       DefineNamedOwnProperty r0, [12], [33]
 4368 E> 0x239b9b7e7ae9 @   89 : 2d 02 02 23       GetNamedProperty <this>, [2], [35]
         0x239b9b7e7aed @   93 : c3                Star1 
 4376 E> 0x239b9b7e7aee @   94 : 2d f9 0d 25       GetNamedProperty r1, [13], [37]
         0x239b9b7e7af2 @   98 : 33 fa 0e 27       DefineNamedOwnProperty r0, [14], [39]
         0x239b9b7e7af6 @  102 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 4428 E> 0x239b9b7e7afa @  106 : aa 0f             ThrowReferenceErrorIfHole [15]
         0x239b9b7e7afc @  108 : c2                Star2 
 4443 E> 0x239b9b7e7afd @  109 : 2d f8 10 29       GetNamedProperty r2, [16], [41]
         0x239b9b7e7b01 @  113 : c3                Star1 
 4464 E> 0x239b9b7e7b02 @  114 : 61 f9 2b          CallUndefinedReceiver0 r1, [43]
         0x239b9b7e7b05 @  117 : 33 fa 11 2d       DefineNamedOwnProperty r0, [17], [45]
         0x239b9b7e7b09 @  121 : 0b fa             Ldar r0
 4477 S> 0x239b9b7e7b0b @  123 : a9                Return 
Constant pool (size = 18)
0x239b9b7e7b11: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 18
           0: 0x239b9b7e7bb1 <ObjectBoilerplateDescription[9]>
           1: 0x239b9b7e7c69 <ObjectBoilerplateDescription[5]>
           2: 0x2868e8bccbb9 <String[7]: #options>
           3: 0x239b9b7e7cb9 <String[12]: #BULLET_SPEED>
           4: 0x239b9b7e7ca1 <String[5]: #speed>
           5: 0x239b9b7e7cd9 <String[11]: #BULLET_SIZE>
           6: 0x391e81eca111 <String[4]: #size>
           7: 0x239b9b7e7c09 <String[7]: #rockets>
           8: 0x239b9b7e7cf9 <ObjectBoilerplateDescription[5]>
           9: 0x239b9b7e7d61 <String[16]: #WORLD_DIMENSIONS>
          10: 0x239b9b7e7d31 <String[5]: #width>
          11: 0x239b9b7e7d49 <String[6]: #height>
          12: 0x239b9b7e6059 <String[5]: #world>
          13: 0x239b9b7e7d81 <String[21]: #CANNON_COOLDOWN_TICKS>
          14: 0x239b9b7e7c21 <String[19]: #cannonCooldownTicks>
          15: 0x239b9b7e5281 <String[14]: #meteor_infos_1>
          16: 0x239b9b7e7da9 <String[20]: #serializeMeteorInfos>
          17: 0x239b9b7e7c49 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 46)
0x239b9b7e7dd1 <ByteArray[46]>
Boilerplate at 0x239b9b7e7bb1: 
0x239b9b7e7bb1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 9
           0: 8
           1: 0x239b9b7e7c09 <String[7]: #rockets>
           2: 0x391e81ec1501 <Odd Oddball: uninitialized>
           3: 0x239b9b7e6059 <String[5]: #world>
           4: 0x391e81ec1501 <Odd Oddball: uninitialized>
           5: 0x239b9b7e7c21 <String[19]: #cannonCooldownTicks>
           6: 0x391e81ec1501 <Odd Oddball: uninitialized>
           7: 0x239b9b7e7c49 <String[11]: #meteorInfos>
           8: 0x391e81ec1501 <Odd Oddball: uninitialized>
Boilerplate at 0x239b9b7e7c69: 
0x239b9b7e7c69: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 5
           0: 8
           1: 0x239b9b7e7ca1 <String[5]: #speed>
           2: 0x391e81ec1501 <Odd Oddball: uninitialized>
           3: 0x391e81eca111 <String[4]: #size>
           4: 0x391e81ec1501 <Odd Oddball: uninitialized>
Boilerplate at 0x239b9b7e7cf9: 
0x239b9b7e7cf9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 5
           0: 8
           1: 0x239b9b7e7d31 <String[5]: #width>
           2: 0x391e81ec1501 <Odd Oddball: uninitialized>
           3: 0x239b9b7e7d49 <String[6]: #height>
           4: 0x391e81ec1501 <Odd Oddball: uninitialized>
0x239b9b7e7e91 points to: [0x239b9b7e7f00]
=== [0x239b9b7e7f00] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4516 S> 0x239b9b7e7f00 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x239b9b7e7f04 @    4 : c4                Star0 
 4553 E> 0x239b9b7e7f05 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x239b9b7e7f09 @    9 : c3                Star1 
 4553 E> 0x239b9b7e7f0a @   10 : 5d f9 02 03       CallProperty0 r1, <this>, [3]
         0x239b9b7e7f0e @   14 : 33 fa 02 05       DefineNamedOwnProperty r0, [2], [5]
 4611 E> 0x239b9b7e7f12 @   18 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0x239b9b7e7f16 @   22 : 33 fa 03 09       DefineNamedOwnProperty r0, [3], [9]
 4663 E> 0x239b9b7e7f1a @   26 : 2d 02 04 0b       GetNamedProperty <this>, [4], [11]
         0x239b9b7e7f1e @   30 : c2                Star2 
 4678 E> 0x239b9b7e7f1f @   31 : 2d f8 05 0d       GetNamedProperty r2, [5], [13]
         0x239b9b7e7f23 @   35 : c3                Star1 
         0x239b9b7e7f24 @   36 : 80 06 00 02       CreateClosure [6], [0], #2
         0x239b9b7e7f28 @   40 : c1                Star3 
 4678 E> 0x239b9b7e7f29 @   41 : 5e f9 f8 f7 0f    CallProperty1 r1, r2, r3, [15]
         0x239b9b7e7f2e @   46 : 33 fa 04 11       DefineNamedOwnProperty r0, [4], [17]
         0x239b9b7e7f32 @   50 : 0b fa             Ldar r0
 4719 S> 0x239b9b7e7f34 @   52 : a9                Return 
Constant pool (size = 7)
0x239b9b7e7f39: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 7
           0: 0x239b9b7e7f81 <ObjectBoilerplateDescription[7]>
           1: 0x239b9b7e57d9 <String[18]: #serializeConstants>
           2: 0x2868e8bc89d1 <String[9]: #constants>
           3: 0x239b9b7e59b1 <String[17]: #currentTickNumber>
           4: 0x239b9b7e5991 <String[14]: #lastTickErrors>
           5: 0x2868e8bc9ea9 <String[3]: #map>
           6: 0x239b9b7e8001 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 24)
0x239b9b7e8111 <ByteArray[24]>
Boilerplate at 0x239b9b7e7f81: 
0x239b9b7e7f81: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 7
           0: 8
           1: 0x2868e8bc89d1 <String[9]: #constants>
           2: 0x391e81ec1501 <Odd Oddball: uninitialized>
           3: 0x239b9b7e59b1 <String[17]: #currentTickNumber>
           4: 0x391e81ec1501 <Odd Oddball: uninitialized>
           5: 0x239b9b7e5991 <String[14]: #lastTickErrors>
           6: 0x391e81ec1501 <Odd Oddball: uninitialized>
0x239b9b7e8001 points to: [0x239b9b7e8070]
=== [0x239b9b7e8070] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 4699 S> 0x239b9b7e8070 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 4706 S> 0x239b9b7e8074 @    4 : a9                Return 
Constant pool (size = 1)
0x239b9b7e8079: [FixedArray] in OldSpace
 - map: 0x391e81ec12e1 <Map>
 - length: 1
           0: 0x391e81ec5721 <String[7]: #message>
Handler Table (size = 0)
Source Position Table (size = 8)
0x239b9b7e8091 <ByteArray[8]>
Boilerplate at 0x239b9b7e8209: 
0x239b9b7e8209: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 31
           0: 8
           1: 0x239b9b7e5a81 <String[11]: #RANDOM_SEED>
           2: 0x391e81ec1501 <Odd Oddball: uninitialized>
           3: 0x239b9b7e7479 <String[10]: #TICK_COUNT>
           4: 1000
           5: 0x239b9b7e8311 <String[16]: #SCORE_MULTIPLIER>
           6: 1
           7: 0x239b9b7e8331 <String[13]: #HEALTH_POINTS>
           8: 0x391e81ec1501 <Odd Oddball: uninitialized>
           9: 0x239b9b7e7d61 <String[16]: #WORLD_DIMENSIONS>
          10: 0x391e81ec1501 <Odd Oddball: uninitialized>
          11: 0x239b9b7e8351 <String[30]: #CANNON_INITIAL_ORIENTATION_DEG>
          12: 0
          13: 0x239b9b7e8381 <String[15]: #CANNON_POSITION>
          14: 0x391e81ec1501 <Odd Oddball: uninitialized>
          15: 0x239b9b7e83a1 <String[19]: #CANNON_MAX_ROTATION>
          16: 180
          17: 0x239b9b7e7d81 <String[21]: #CANNON_COOLDOWN_TICKS>
          18: 10
          19: 0x239b9b7e7cb9 <String[12]: #BULLET_SPEED>
          20: 20
          21: 0x239b9b7e7cd9 <String[11]: #BULLET_SIZE>
          22: 5
          23: 0x239b9b7e83c9 <String[28]: #METEOR_GENERATION_CONE_ANGLE>
          24: 30
          25: 0x239b9b7e83f9 <String[32]: #METEOR_GENERATION_DELAY_IN_TICKS>
          26: 0x239b9b7e8429 <ObjectBoilerplateDescription[5]>
          27: 0x239b9b7e8491 <String[31]: #CHEAT_DISABLE_METEOR_GENERATION>
          28: 0x391e81ec1789 <false>
          29: 0x239b9b7e84c1 <String[34]: #CHEAT_GENERATE_PREDICTABLE_METEORS>
          30: 0x239b9b7e84f9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x391e81ec1329 <FixedArray[0]>>
Boilerplate at 0x239b9b7e8541: 
0x239b9b7e8541: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x391e81ec2059 <Map>
 - length: 5
           0: 8
           1: 0x239b9b7e7d31 <String[5]: #width>
           2: 0x391e81ec1501 <Odd Oddball: uninitialized>
           3: 0x239b9b7e7d49 <String[6]: #height>
           4: 0x391e81ec1501 <Odd Oddball: uninitialized>
<< OUTPUTTING DISASSEMBLY END >>
