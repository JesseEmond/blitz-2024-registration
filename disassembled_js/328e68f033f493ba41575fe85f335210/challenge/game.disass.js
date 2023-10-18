<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2903f4c24e48] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2903f4c24e48 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2903f4c24e4c @    4 : c4                Star0 
 5684 S> 0x2903f4c24e4d @    5 : a9                Return 
Constant pool (size = 1)
0x2903f4c24e51: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 1
           0: 0x2903f4c24e69 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2903f4c28649 <ByteArray[8]>
0x2903f4c24e69 points to: [0x2903f4c24ed8]
=== [0x2903f4c24ed8] DISASSEMBLY ===
Parameter count 6
Register count 22
Frame size 176
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2903f4c24ed8 @    0 : 83 00 05          CreateFunctionContext [0], [5]
         0x2903f4c24edb @    3 : 1a f7             PushContext r3
         0x2903f4c24edd @    5 : 10                LdaTheHole 
         0x2903f4c24ede @    6 : 25 02             StaCurrentContextSlot [2]
         0x2903f4c24ee0 @    8 : 10                LdaTheHole 
         0x2903f4c24ee1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x2903f4c24ee3 @   11 : 10                LdaTheHole 
         0x2903f4c24ee4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x2903f4c24ee6 @   14 : 10                LdaTheHole 
         0x2903f4c24ee7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x2903f4c24ee9 @   17 : 10                LdaTheHole 
         0x2903f4c24eea @   18 : 25 06             StaCurrentContextSlot [6]
   84 S> 0x2903f4c24eec @   20 : 21 01 00          LdaGlobal [1], [0]
         0x2903f4c24eef @   23 : bf                Star5 
   91 E> 0x2903f4c24ef0 @   24 : 2d f5 02 02       GetNamedProperty r5, [2], [2]
         0x2903f4c24ef4 @   28 : c0                Star4 
         0x2903f4c24ef5 @   29 : 13 03             LdaConstant [3]
         0x2903f4c24ef7 @   31 : bd                Star7 
  106 E> 0x2903f4c24ef8 @   32 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2903f4c24efc @   36 : bc                Star8 
         0x2903f4c24efd @   37 : 19 03 f4          Mov a0, r6
   91 E> 0x2903f4c24f00 @   40 : 5c f6 f5 04 05    CallProperty r4, r5-r8, [5]
  147 S> 0x2903f4c24f05 @   45 : 0e                LdaUndefined 
  174 E> 0x2903f4c24f06 @   46 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  201 S> 0x2903f4c24f0a @   50 : 13 06             LdaConstant [6]
         0x2903f4c24f0c @   52 : bf                Star5 
  201 E> 0x2903f4c24f0d @   53 : 62 04 f5 09       CallUndefinedReceiver1 a1, r5, [9]
  201 E> 0x2903f4c24f11 @   57 : 25 02             StaCurrentContextSlot [2]
  243 S> 0x2903f4c24f13 @   59 : 13 07             LdaConstant [7]
         0x2903f4c24f15 @   61 : bf                Star5 
  243 E> 0x2903f4c24f16 @   62 : 62 04 f5 0b       CallUndefinedReceiver1 a1, r5, [11]
  243 E> 0x2903f4c24f1a @   66 : 25 03             StaCurrentContextSlot [3]
  279 S> 0x2903f4c24f1c @   68 : 13 08             LdaConstant [8]
         0x2903f4c24f1e @   70 : bf                Star5 
  279 E> 0x2903f4c24f1f @   71 : 62 04 f5 0d       CallUndefinedReceiver1 a1, r5, [13]
  279 E> 0x2903f4c24f23 @   75 : 25 04             StaCurrentContextSlot [4]
  316 S> 0x2903f4c24f25 @   77 : 13 09             LdaConstant [9]
         0x2903f4c24f27 @   79 : bf                Star5 
  316 E> 0x2903f4c24f28 @   80 : 62 04 f5 0f       CallUndefinedReceiver1 a1, r5, [15]
         0x2903f4c24f2c @   84 : c3                Star1 
  354 S> 0x2903f4c24f2d @   85 : 13 0a             LdaConstant [10]
         0x2903f4c24f2f @   87 : bf                Star5 
  354 E> 0x2903f4c24f30 @   88 : 62 04 f5 11       CallUndefinedReceiver1 a1, r5, [17]
  354 E> 0x2903f4c24f34 @   92 : 25 05             StaCurrentContextSlot [5]
  398 S> 0x2903f4c24f36 @   94 : 13 0b             LdaConstant [11]
         0x2903f4c24f38 @   96 : bf                Star5 
  398 E> 0x2903f4c24f39 @   97 : 62 04 f5 13       CallUndefinedReceiver1 a1, r5, [19]
  398 E> 0x2903f4c24f3d @  101 : 25 06             StaCurrentContextSlot [6]
         0x2903f4c24f3f @  103 : 81 0c             CreateBlockContext [12]
         0x2903f4c24f41 @  105 : 1a f6             PushContext r4
         0x2903f4c24f43 @  107 : 10                LdaTheHole 
         0x2903f4c24f44 @  108 : 25 02             StaCurrentContextSlot [2]
         0x2903f4c24f46 @  110 : 10                LdaTheHole 
         0x2903f4c24f47 @  111 : bc                Star8 
         0x2903f4c24f48 @  112 : 80 0e 00 02       CreateClosure [14], [0], #2
         0x2903f4c24f4c @  116 : bf                Star5 
         0x2903f4c24f4d @  117 : 13 0d             LdaConstant [13]
         0x2903f4c24f4f @  119 : be                Star6 
         0x2903f4c24f50 @  120 : 80 0f 01 02       CreateClosure [15], [1], #2
         0x2903f4c24f54 @  124 : bb                Star9 
         0x2903f4c24f55 @  125 : 80 10 02 02       CreateClosure [16], [2], #2
         0x2903f4c24f59 @  129 : ba                Star10 
         0x2903f4c24f5a @  130 : 80 11 03 02       CreateClosure [17], [3], #2
         0x2903f4c24f5e @  134 : b9                Star11 
         0x2903f4c24f5f @  135 : 80 12 04 02       CreateClosure [18], [4], #2
         0x2903f4c24f63 @  139 : b8                Star12 
         0x2903f4c24f64 @  140 : 80 13 05 02       CreateClosure [19], [5], #2
         0x2903f4c24f68 @  144 : b7                Star13 
         0x2903f4c24f69 @  145 : 80 14 06 02       CreateClosure [20], [6], #2
         0x2903f4c24f6d @  149 : b6                Star14 
         0x2903f4c24f6e @  150 : 80 15 07 02       CreateClosure [21], [7], #2
         0x2903f4c24f72 @  154 : b5                Star15 
         0x2903f4c24f73 @  155 : 80 16 08 02       CreateClosure [22], [8], #2
         0x2903f4c24f77 @  159 : 18 ea             Star r16
         0x2903f4c24f79 @  161 : 80 17 09 02       CreateClosure [23], [9], #2
         0x2903f4c24f7d @  165 : 18 e9             Star r17
         0x2903f4c24f7f @  167 : 80 18 0a 02       CreateClosure [24], [10], #2
         0x2903f4c24f83 @  171 : 18 e8             Star r18
         0x2903f4c24f85 @  173 : 80 19 0b 02       CreateClosure [25], [11], #2
         0x2903f4c24f89 @  177 : 18 e7             Star r19
         0x2903f4c24f8b @  179 : 80 1a 0c 02       CreateClosure [26], [12], #2
         0x2903f4c24f8f @  183 : 18 e6             Star r20
         0x2903f4c24f91 @  185 : 80 1b 0d 02       CreateClosure [27], [13], #2
         0x2903f4c24f95 @  189 : 18 e5             Star r21
         0x2903f4c24f97 @  191 : 19 f5 f3          Mov r5, r7
         0x2903f4c24f9a @  194 : 65 28 00 f4 10    CallRuntime [DefineClass], r6-r21
         0x2903f4c24f9f @  199 : be                Star6 
         0x2903f4c24fa0 @  200 : 0b f3             Ldar r7
         0x2903f4c24fa2 @  202 : 25 02             StaCurrentContextSlot [2]
         0x2903f4c24fa4 @  204 : 1b f6             PopContext r4
         0x2903f4c24fa6 @  206 : c2                Star2 
 4728 S> 0x2903f4c24fa7 @  207 : 0b f8             Ldar r2
 4755 E> 0x2903f4c24fa9 @  209 : 32 03 05 07       SetNamedProperty a0, [5], [7]
 4777 S> 0x2903f4c24fad @  213 : 19 f8 fa          Mov r2, r0
 4802 S> 0x2903f4c24fb0 @  216 : 00 0d b0 04       LdaSmi.Wide [1200]
 4833 E> 0x2903f4c24fb4 @  220 : 32 fa 1c 15       SetNamedProperty r0, [28], [21]
 4841 S> 0x2903f4c24fb8 @  224 : 00 0d 20 03       LdaSmi.Wide [800]
 4873 E> 0x2903f4c24fbc @  228 : 32 fa 1d 17       SetNamedProperty r0, [29], [23]
 4880 S> 0x2903f4c24fc0 @  232 : 7c 1e 19 0c       CreateObjectLiteral [30], [25], #12
         0x2903f4c24fc4 @  236 : bf                Star5 
 4941 E> 0x2903f4c24fc5 @  237 : 21 1f 1a          LdaGlobal [31], [26]
         0x2903f4c24fc8 @  240 : bd                Star7 
 4946 E> 0x2903f4c24fc9 @  241 : 2d f3 20 1c       GetNamedProperty r7, [32], [28]
         0x2903f4c24fcd @  245 : be                Star6 
 4946 E> 0x2903f4c24fce @  246 : 5d f4 f3 1e       CallProperty0 r6, r7, [30]
         0x2903f4c24fd2 @  250 : 33 f5 21 20       DefineNamedOwnProperty r5, [33], [32]
 5022 E> 0x2903f4c24fd6 @  254 : 21 22 22          LdaGlobal [34], [34]
         0x2903f4c24fd9 @  257 : 33 f5 23 24       DefineNamedOwnProperty r5, [35], [36]
 5054 E> 0x2903f4c24fdd @  261 : 7c 24 26 29       CreateObjectLiteral [36], [38], #41
         0x2903f4c24fe1 @  265 : be                Star6 
 5074 E> 0x2903f4c24fe2 @  266 : 2d f8 1c 27       GetNamedProperty r2, [28], [39]
         0x2903f4c24fe6 @  270 : 33 f4 25 29       DefineNamedOwnProperty r6, [37], [41]
 5106 E> 0x2903f4c24fea @  274 : 2d f8 1d 2b       GetNamedProperty r2, [29], [43]
         0x2903f4c24fee @  278 : 33 f4 26 2d       DefineNamedOwnProperty r6, [38], [45]
         0x2903f4c24ff2 @  282 : 0b f4             Ldar r6
         0x2903f4c24ff4 @  284 : 33 f5 27 2f       DefineNamedOwnProperty r5, [39], [47]
 5225 E> 0x2903f4c24ff8 @  288 : 2d f9 28 31       GetNamedProperty r1, [40], [49]
         0x2903f4c24ffc @  292 : be                Star6 
         0x2903f4c24ffd @  293 : 00 0d 8c 00       LdaSmi.Wide [140]
         0x2903f4c25001 @  297 : bd                Star7 
 5240 E> 0x2903f4c25002 @  298 : 2d f8 1d 2b       GetNamedProperty r2, [29], [43]
 5253 E> 0x2903f4c25006 @  302 : 48 02 33          DivSmi [2], [51]
         0x2903f4c25009 @  305 : bc                Star8 
         0x2903f4c2500a @  306 : 0b f4             Ldar r6
 5212 E> 0x2903f4c2500c @  308 : 69 f4 f3 02 34    Construct r6, r7-r8, [52]
         0x2903f4c25011 @  313 : 33 f5 29 36       DefineNamedOwnProperty r5, [41], [54]
         0x2903f4c25015 @  317 : 0b f5             Ldar r5
 4920 E> 0x2903f4c25017 @  319 : 32 fa 2a 38       SetNamedProperty r0, [42], [56]
         0x2903f4c2501b @  323 : 0e                LdaUndefined 
 5681 S> 0x2903f4c2501c @  324 : a9                Return 
Constant pool (size = 43)
0x2903f4c25021: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 43
           0: 0x2903f4c25189 <ScopeInfo FUNCTION_SCOPE>
           1: 0x298496fc5ab9 <String[6]: #Object>
           2: 0x298496fc4c11 <String[14]: #defineProperty>
           3: 0x2903f4c252a1 <String[10]: #__esModule>
           4: 0x2903f4c252c1 <ObjectBoilerplateDescription[3]>
           5: 0x2903f4c252e9 <String[18]: #Blitz2024Challenge>
           6: 0x2903f4c25311 <String[13]: #@blitz/engine>
           7: 0x2903f4c25331 <String[7]: #./error>
           8: 0x2903f4c25349 <String[7]: #./world>
           9: 0x2903f4c25361 <String[8]: #./vector>
          10: 0x2903f4c25379 <String[8]: #./random>
          11: 0x2903f4c25391 <String[14]: #./meteor_infos>
          12: 0x2903f4c253b1 <ScopeInfo CLASS_SCOPE>
          13: 0x2903f4c253f9 <FixedArray[7]>
          14: 0x2903f4c25821 <SharedFunctionInfo Blitz2024Challenge>
          15: 0x2903f4c25d09 <SharedFunctionInfo registerTeam>
          16: 0x2903f4c25e41 <SharedFunctionInfo getGameResults>
          17: 0x2903f4c26129 <SharedFunctionInfo setup>
          18: 0x2903f4c26399 <SharedFunctionInfo playOneTick>
          19: 0x2903f4c267e1 <SharedFunctionInfo fetchAndApplyPlayerCommands>
          20: 0x2903f4c26ea9 <SharedFunctionInfo applyActions>
          21: 0x2903f4c27379 <SharedFunctionInfo isGameComplete>
          22: 0x2903f4c27531 <SharedFunctionInfo updateGame>
          23: 0x2903f4c27679 <SharedFunctionInfo addStatsForTeam>
          24: 0x2903f4c27759 <SharedFunctionInfo serializeForTeam>
          25: 0x2903f4c278d1 <SharedFunctionInfo serializeForViewer>
          26: 0x2903f4c27a21 <SharedFunctionInfo serializeConstants>
          27: 0x2903f4c27e91 <SharedFunctionInfo serializeCommon>
          28: 0x2903f4c281c9 <String[11]: #WORLD_WIDTH>
          29: 0x2903f4c281e9 <String[12]: #WORLD_HEIGHT>
          30: 0x2903f4c28209 <ObjectBoilerplateDescription[31]>
          31: 0x3aaf854da991 <String[4]: #Math>
          32: 0x3aaf854daba1 <String[6]: #random>
          33: 0x2903f4c25a81 <String[11]: #RANDOM_SEED>
          34: 0x298496fc5381 <String[8]: #Infinity>
          35: 0x2903f4c28331 <String[13]: #HEALTH_POINTS>
          36: 0x2903f4c28541 <ObjectBoilerplateDescription[5]>
          37: 0x2903f4c27d31 <String[5]: #width>
          38: 0x2903f4c27d49 <String[6]: #height>
          39: 0x2903f4c27d61 <String[16]: #WORLD_DIMENSIONS>
          40: 0x2903f4c28579 <String[6]: #Vector>
          41: 0x2903f4c28381 <String[15]: #CANNON_POSITION>
          42: 0x2903f4c259f1 <String[20]: #DEFAULT_GAME_OPTIONS>
Handler Table (size = 0)
Source Position Table (size = 111)
0x2903f4c28591 <ByteArray[111]>
Boilerplate at 0x2903f4c252c1: 
0x2903f4c252c1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 3
           0: 8
           1: 0x298496fc6419 <String[5]: #value>
           2: 0x298496fc1729 <true>
Array at 0x2903f4c253f9 has 7 elements:
0x2903f4c253f9: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 7
           0: 16
           1: 0x2903f4c25441 <DescriptorArray[4]>
           2: 0x298496fc3301 <NumberDictionary[7]>
           3: 0x298496fc1329 <FixedArray[0]>
           4: 0x2903f4c25501 <DescriptorArray[14]>
           5: 0x298496fc3301 <NumberDictionary[7]>
           6: 0x298496fc1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x10 (16)
Element[1]
0x2903f4c25441: [DescriptorArray] in OldSpace
 - map: 0x298496fc7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x298496fc55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x3aaf854f4fe1 <AccessorInfo>
  [1]: 0x298496fc58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x3aaf854f4f71 <AccessorInfo>
  [2]: 0x298496fc5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x3aaf854f5051 <AccessorInfo>
  [3]: 0x298496fc65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x2903f4c254e9 <ClassPositions 425, 4727>
Element[2]
0x298496fc3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x298496fc1329: [FixedArray] in ReadOnlySpace
 - map: 0x298496fc12e1 <Map>
 - length: 0
Element[4]
0x2903f4c25501: [DescriptorArray] in OldSpace
 - map: 0x298496fc7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 14
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x298496fc4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 3, attrs: [W_C]) @ 1
  [1]: 0x2903f4c25669: [String] in OldSpace: #registerTeam (const data descriptor, p: 8, attrs: [W_C]) @ 3
  [2]: 0x2903f4c25689: [String] in OldSpace: #getGameResults (const data descriptor, p: 9, attrs: [W_C]) @ 4
  [3]: 0x3aaf854c88a1: [String] in OldSpace: #setup (const data descriptor, p: 6, attrs: [W_C]) @ 5
  [4]: 0x2903f4c256c1: [String] in OldSpace: #playOneTick (const data descriptor, p: 4, attrs: [W_C]) @ 6
  [5]: 0x2903f4c256e1: [String] in OldSpace: #fetchAndApplyPlayerCommands (const data descriptor, p: 10, attrs: [W_C]) @ 7
  [6]: 0x2903f4c25711: [String] in OldSpace: #applyActions (const data descriptor, p: 5, attrs: [W_C]) @ 8
  [7]: 0x2903f4c25731: [String] in OldSpace: #isGameComplete (const data descriptor, p: 0, attrs: [W_C]) @ 9
  [8]: 0x2903f4c25751: [String] in OldSpace: #updateGame (const data descriptor, p: 13, attrs: [W_C]) @ 10
  [9]: 0x2903f4c25771: [String] in OldSpace: #addStatsForTeam (const data descriptor, p: 7, attrs: [W_C]) @ 11
  [10]: 0x2903f4c25791: [String] in OldSpace: #serializeForTeam (const data descriptor, p: 2, attrs: [W_C]) @ 12
  [11]: 0x2903f4c257b1: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 1, attrs: [W_C]) @ 13
  [12]: 0x2903f4c257d9: [String] in OldSpace: #serializeConstants (const data descriptor, p: 11, attrs: [W_C]) @ 14
  [13]: 0x2903f4c25801: [String] in OldSpace: #serializeCommon (const data descriptor, p: 12, attrs: [W_C]) @ 15
Element[5]
0x298496fc3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x298496fc1329: [FixedArray] in ReadOnlySpace
 - map: 0x298496fc12e1 <Map>
 - length: 0
0x2903f4c25821 points to: [0x2903f4c25890]
=== [0x2903f4c25890] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  495 S> 0x2903f4c25890 @    0 : 7b 00             CreateEmptyArrayLiteral [0]
  515 E> 0x2903f4c25892 @    2 : 32 02 00 01       SetNamedProperty <this>, [0], [1]
  529 S> 0x2903f4c25896 @    6 : 0d 01             LdaSmi [1]
  552 E> 0x2903f4c25898 @    8 : 32 02 01 03       SetNamedProperty <this>, [1], [3]
  565 S> 0x2903f4c2589c @   12 : 0b 03             Ldar a0
  577 E> 0x2903f4c2589e @   14 : 32 02 02 05       SetNamedProperty <this>, [2], [5]
  595 S> 0x2903f4c258a2 @   18 : 16 02             LdaCurrentContextSlot [2]
  627 E> 0x2903f4c258a4 @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2903f4c258a6 @   22 : c2                Star2 
  646 E> 0x2903f4c258a7 @   23 : 2d f8 04 07       GetNamedProperty r2, [4], [7]
         0x2903f4c258ab @   27 : c2                Star2 
         0x2903f4c258ac @   28 : 7e f8 29 09       CloneObject r2, #41, [9]
         0x2903f4c258b0 @   32 : c3                Star1 
         0x2903f4c258b1 @   33 : 19 f9 f8          Mov r1, r2
         0x2903f4c258b4 @   36 : 19 04 f7          Mov a1, r3
  683 E> 0x2903f4c258b7 @   39 : 68 0e f8 02       InvokeIntrinsic [_CopyDataProperties], r2-r3
         0x2903f4c258bb @   43 : 0b f8             Ldar r2
  608 E> 0x2903f4c258bd @   45 : 32 02 05 0b       SetNamedProperty <this>, [5], [11]
  711 S> 0x2903f4c258c1 @   49 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x2903f4c258c5 @   53 : aa 06             ThrowReferenceErrorIfHole [6]
         0x2903f4c258c7 @   55 : c3                Star1 
  720 E> 0x2903f4c258c8 @   56 : 2d f9 07 0d       GetNamedProperty r1, [7], [13]
         0x2903f4c258cc @   60 : c3                Star1 
  727 E> 0x2903f4c258cd @   61 : 2d f9 08 0f       GetNamedProperty r1, [8], [15]
         0x2903f4c258d1 @   65 : c4                Star0 
         0x2903f4c258d2 @   66 : 13 09             LdaConstant [9]
         0x2903f4c258d4 @   68 : c2                Star2 
  753 E> 0x2903f4c258d5 @   69 : 2d 02 05 12       GetNamedProperty <this>, [5], [18]
         0x2903f4c258d9 @   73 : c1                Star3 
  761 E> 0x2903f4c258da @   74 : 2d f7 0a 14       GetNamedProperty r3, [10], [20]
         0x2903f4c258de @   78 : 77                ToString 
         0x2903f4c258df @   79 : 39 f8 11          Add r2, [17]
         0x2903f4c258e2 @   82 : c2                Star2 
  727 E> 0x2903f4c258e3 @   83 : 5e fa f9 f8 16    CallProperty1 r0, r1, r2, [22]
  785 S> 0x2903f4c258e8 @   88 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
  800 E> 0x2903f4c258ec @   92 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x2903f4c258ee @   94 : c3                Star1 
  809 E> 0x2903f4c258ef @   95 : 2d f9 0c 18       GetNamedProperty r1, [12], [24]
         0x2903f4c258f3 @   99 : c3                Star1 
  821 E> 0x2903f4c258f4 @  100 : 2d 02 05 1a       GetNamedProperty <this>, [5], [26]
         0x2903f4c258f8 @  104 : c2                Star2 
  829 E> 0x2903f4c258f9 @  105 : 2d f8 0a 1c       GetNamedProperty r2, [10], [28]
         0x2903f4c258fd @  109 : c2                Star2 
         0x2903f4c258fe @  110 : 0b f9             Ldar r1
  796 E> 0x2903f4c25900 @  112 : 69 f9 f8 01 1e    Construct r1, r2-r2, [30]
  794 E> 0x2903f4c25905 @  117 : 32 02 0d 20       SetNamedProperty <this>, [13], [32]
         0x2903f4c25909 @  121 : 0e                LdaUndefined 
  847 S> 0x2903f4c2590a @  122 : a9                Return 
Constant pool (size = 14)
0x2903f4c25911: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 14
           0: 0x2903f4c25991 <String[14]: #lastTickErrors>
           1: 0x2903f4c259b1 <String[17]: #currentTickNumber>
           2: 0x2903f4c259d9 <String[6]: #engine>
           3: 0x2903f4c252e9 <String[18]: #Blitz2024Challenge>
           4: 0x2903f4c259f1 <String[20]: #DEFAULT_GAME_OPTIONS>
           5: 0x3aaf854ccbb9 <String[7]: #options>
           6: 0x2903f4c25221 <String[8]: #engine_1>
           7: 0x3aaf854c6461 <String[6]: #logger>
           8: 0x3aaf854dc1f9 <String[4]: #info>
           9: 0x2903f4c25a61 <String[13]: #Random seed: >
          10: 0x2903f4c25a81 <String[11]: #RANDOM_SEED>
          11: 0x2903f4c25269 <String[8]: #random_1>
          12: 0x2903f4c25aa1 <String[6]: #Random>
          13: 0x3aaf854e8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 61)
0x2903f4c25ad1 <ByteArray[61]>
0x2903f4c25d09 points to: [0x2903f4c25d78]
=== [0x2903f4c25d78] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  882 S> 0x2903f4c25d78 @    0 : 0b 03             Ldar a0
  899 E> 0x2903f4c25d7a @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x2903f4c25d7e @    6 : 0e                LdaUndefined 
  911 S> 0x2903f4c25d7f @    7 : a9                Return 
Constant pool (size = 1)
0x2903f4c25d81: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 1
           0: 0x2903f4c25d99 <String[11]: #_engineTeam>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2903f4c25db9 <ByteArray[9]>
0x2903f4c25e41 points to: [0x2903f4c25eb0]
=== [0x2903f4c25eb0] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  944 S> 0x2903f4c25eb0 @    0 : 79 00 00 04       CreateArrayLiteral [0], [0], #4
         0x2903f4c25eb4 @    4 : c3                Star1 
         0x2903f4c25eb5 @    5 : 0c                LdaZero 
         0x2903f4c25eb6 @    6 : c4                Star0 
         0x2903f4c25eb7 @    7 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x2903f4c25ebb @   11 : c2                Star2 
 1020 E> 0x2903f4c25ebc @   12 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2903f4c25ec0 @   16 : c1                Star3 
         0x2903f4c25ec1 @   17 : 9e 08             JumpIfUndefinedOrNull [8] (0x2903f4c25ec9 @ 25)
 1025 E> 0x2903f4c25ec3 @   19 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x2903f4c25ec7 @   23 : 8a 03             Jump [3] (0x2903f4c25eca @ 26)
         0x2903f4c25ec9 @   25 : 0e                LdaUndefined 
         0x2903f4c25eca @   26 : 9e 04             JumpIfUndefinedOrNull [4] (0x2903f4c25ece @ 30)
         0x2903f4c25ecc @   28 : 8a 03             Jump [3] (0x2903f4c25ecf @ 31)
         0x2903f4c25ece @   30 : 0c                LdaZero 
         0x2903f4c25ecf @   31 : 33 f8 03 06       DefineNamedOwnProperty r2, [3], [6]
 1068 E> 0x2903f4c25ed3 @   35 : 2d 02 04 08       GetNamedProperty <this>, [4], [8]
         0x2903f4c25ed7 @   39 : c1                Star3 
         0x2903f4c25ed8 @   40 : 9e 08             JumpIfUndefinedOrNull [8] (0x2903f4c25ee0 @ 48)
 1079 E> 0x2903f4c25eda @   42 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x2903f4c25ede @   46 : 8a 03             Jump [3] (0x2903f4c25ee1 @ 49)
         0x2903f4c25ee0 @   48 : 0e                LdaUndefined 
         0x2903f4c25ee1 @   49 : 9e 04             JumpIfUndefinedOrNull [4] (0x2903f4c25ee5 @ 53)
         0x2903f4c25ee3 @   51 : 8a 04             Jump [4] (0x2903f4c25ee7 @ 55)
         0x2903f4c25ee5 @   53 : 13 06             LdaConstant [6]
         0x2903f4c25ee7 @   55 : 33 f8 07 0c       DefineNamedOwnProperty r2, [7], [12]
 1130 E> 0x2903f4c25eeb @   59 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x2903f4c25eef @   63 : c1                Star3 
         0x2903f4c25ef0 @   64 : 9e 08             JumpIfUndefinedOrNull [8] (0x2903f4c25ef8 @ 72)
 1141 E> 0x2903f4c25ef2 @   66 : 2d f7 08 10       GetNamedProperty r3, [8], [16]
         0x2903f4c25ef6 @   70 : 8a 03             Jump [3] (0x2903f4c25ef9 @ 73)
         0x2903f4c25ef8 @   72 : 0e                LdaUndefined 
         0x2903f4c25ef9 @   73 : 9e 04             JumpIfUndefinedOrNull [4] (0x2903f4c25efd @ 77)
         0x2903f4c25efb @   75 : 8a 04             Jump [4] (0x2903f4c25eff @ 79)
         0x2903f4c25efd @   77 : 13 06             LdaConstant [6]
         0x2903f4c25eff @   79 : 33 f8 09 12       DefineNamedOwnProperty r2, [9], [18]
         0x2903f4c25f03 @   83 : 0b f8             Ldar r2
         0x2903f4c25f05 @   85 : 36 f9 fa 14       StaInArrayLiteral r1, r0, [20]
         0x2903f4c25f09 @   89 : 0b f9             Ldar r1
 1179 S> 0x2903f4c25f0b @   91 : a9                Return 
Constant pool (size = 10)
0x2903f4c25f11: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 10
           0: 0x2903f4c25f71 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2903f4c25f89 <FixedArray[1]>>
           1: 0x2903f4c25fa1 <ObjectBoilerplateDescription[9]>
           2: 0x2903f4c26059 <String[5]: #world>
           3: 0x2903f4c26011 <String[5]: #score>
           4: 0x2903f4c25d99 <String[11]: #_engineTeam>
           5: 0x2903f4c26071 <String[10]: #externalId>
           6: 0x298496fc17d1 <String[0]: #>
           7: 0x2903f4c26029 <String[6]: #teamId>
           8: 0x298496fc58f1 <String[4]: #name>
           9: 0x2903f4c26041 <String[8]: #teamName>
Handler Table (size = 0)
Source Position Table (size = 23)
0x2903f4c26091 <ByteArray[23]>
Boilerplate at 0x2903f4c25fa1: 
0x2903f4c25fa1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 9
           0: 8
           1: 0x2903f4c25ff9 <String[4]: #rank>
           2: 1
           3: 0x2903f4c26011 <String[5]: #score>
           4: 0x298496fc1501 <Odd Oddball: uninitialized>
           5: 0x2903f4c26029 <String[6]: #teamId>
           6: 0x298496fc1501 <Odd Oddball: uninitialized>
           7: 0x2903f4c26041 <String[8]: #teamName>
           8: 0x298496fc1501 <Odd Oddball: uninitialized>
0x2903f4c26129 points to: [0x2903f4c26198]
=== [0x2903f4c26198] DISASSEMBLY ===
Parameter count 1
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
         0x2903f4c26198 @    0 : 19 fe f9          Mov <closure>, r1
         0x2903f4c2619b @    3 : 19 02 f8          Mov <this>, r2
 1201 E> 0x2903f4c2619e @    6 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x2903f4c261a2 @   10 : c4                Star0 
         0x2903f4c261a3 @   11 : 19 ff f9          Mov <context>, r1
 1223 S> 0x2903f4c261a6 @   14 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2903f4c261aa @   18 : 1d                TestUndetectable 
         0x2903f4c261ab @   19 : 99 11             JumpIfFalse [17] (0x2903f4c261bc @ 36)
 1256 S> 0x2903f4c261ad @   21 : 21 01 02          LdaGlobal [1], [2]
         0x2903f4c261b0 @   24 : c2                Star2 
         0x2903f4c261b1 @   25 : 13 02             LdaConstant [2]
         0x2903f4c261b3 @   27 : c1                Star3 
         0x2903f4c261b4 @   28 : 0b f8             Ldar r2
 1262 E> 0x2903f4c261b6 @   30 : 69 f8 f7 01 04    Construct r2, r3-r3, [4]
 1256 E> 0x2903f4c261bb @   35 : a7                Throw 
 1304 S> 0x2903f4c261bc @   36 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1321 E> 0x2903f4c261c0 @   40 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2903f4c261c2 @   42 : c1                Star3 
 1329 E> 0x2903f4c261c3 @   43 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x2903f4c261c7 @   47 : c1                Star3 
 1340 E> 0x2903f4c261c8 @   48 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x2903f4c261cc @   52 : c0                Star4 
 1354 E> 0x2903f4c261cd @   53 : 2d 02 06 0a       GetNamedProperty <this>, [6], [10]
         0x2903f4c261d1 @   57 : bf                Star5 
         0x2903f4c261d2 @   58 : 0b f7             Ldar r3
 1317 E> 0x2903f4c261d4 @   60 : 69 f7 f6 02 0c    Construct r3, r4-r5, [12]
 1315 E> 0x2903f4c261d9 @   65 : 32 02 07 0e       SetNamedProperty <this>, [7], [14]
         0x2903f4c261dd @   69 : 0e                LdaUndefined 
         0x2903f4c261de @   70 : c1                Star3 
         0x2903f4c261df @   71 : 19 fa f8          Mov r0, r2
         0x2903f4c261e2 @   74 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1364 S> 0x2903f4c261e6 @   78 : a9                Return 
         0x2903f4c261e7 @   79 : c2                Star2 
         0x2903f4c261e8 @   80 : 82 f8 08          CreateCatchContext r2, [8]
         0x2903f4c261eb @   83 : c3                Star1 
         0x2903f4c261ec @   84 : 10                LdaTheHole 
         0x2903f4c261ed @   85 : a6                SetPendingMessage 
         0x2903f4c261ee @   86 : 0b f9             Ldar r1
         0x2903f4c261f0 @   88 : 1a f8             PushContext r2
         0x2903f4c261f2 @   90 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c261f4 @   92 : c0                Star4 
         0x2903f4c261f5 @   93 : 19 fa f7          Mov r0, r3
         0x2903f4c261f8 @   96 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x2903f4c261fc @  100 : a9                Return 
Constant pool (size = 9)
0x2903f4c26201: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 9
           0: 0x2903f4c25d99 <String[11]: #_engineTeam>
           1: 0x298496fc4de1 <String[5]: #Error>
           2: 0x2903f4c26259 <String[19]: #No team registered!>
           3: 0x2903f4c25251 <String[7]: #world_1>
           4: 0x2903f4c26281 <String[5]: #World>
           5: 0x3aaf854ccbb9 <String[7]: #options>
           6: 0x3aaf854e8a51 <String[3]: #rng>
           7: 0x2903f4c26059 <String[5]: #world>
           8: 0x2903f4c26299 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  14,  79)  ->    79 (prediction=3, data=1)
Source Position Table (size = 33)
0x2903f4c262f1 <ByteArray[33]>
0x2903f4c26399 points to: [0x2903f4c26408]
=== [0x2903f4c26408] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0x2903f4c26408 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @117 }
         0x2903f4c2640c @    4 : 19 fe f9          Mov <closure>, r1
         0x2903f4c2640f @    7 : 19 02 f8          Mov <this>, r2
 1387 E> 0x2903f4c26412 @   10 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x2903f4c26416 @   14 : c4                Star0 
         0x2903f4c26417 @   15 : 19 ff f9          Mov <context>, r1
 1404 S> 0x2903f4c2641a @   18 : 0b 03             Ldar a0
 1427 E> 0x2903f4c2641c @   20 : 32 02 01 00       SetNamedProperty <this>, [1], [0]
 1452 S> 0x2903f4c26420 @   24 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2903f4c26424 @   28 : c2                Star2 
 1452 E> 0x2903f4c26425 @   29 : 5d f8 02 04       CallProperty0 r2, <this>, [4]
         0x2903f4c26429 @   33 : 97 2a             JumpIfToBooleanFalse [42] (0x2903f4c26453 @ 75)
 1484 S> 0x2903f4c2642b @   35 : 7c 03 06 08       CreateObjectLiteral [3], [6], #8
         0x2903f4c2642f @   39 : c2                Star2 
 1526 E> 0x2903f4c26430 @   40 : 7c 04 07 29       CreateObjectLiteral [4], [7], #41
         0x2903f4c26434 @   44 : c1                Star3 
 1542 E> 0x2903f4c26435 @   45 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x2903f4c26439 @   49 : c0                Star4 
 1542 E> 0x2903f4c2643a @   50 : 5d f6 02 0a       CallProperty0 r4, <this>, [10]
         0x2903f4c2643e @   54 : 33 f7 06 0c       DefineNamedOwnProperty r3, [6], [12]
         0x2903f4c26442 @   58 : 0b f7             Ldar r3
         0x2903f4c26444 @   60 : 33 f8 07 0e       DefineNamedOwnProperty r2, [7], [14]
         0x2903f4c26448 @   64 : 0b f8             Ldar r2
         0x2903f4c2644a @   66 : c1                Star3 
         0x2903f4c2644b @   67 : 19 fa f8          Mov r0, r2
         0x2903f4c2644e @   70 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1563 S> 0x2903f4c26452 @   74 : a9                Return 
 1587 S> 0x2903f4c26453 @   75 : 2d 02 08 10       GetNamedProperty <this>, [8], [16]
         0x2903f4c26457 @   79 : c2                Star2 
 1587 E> 0x2903f4c26458 @   80 : 5d f8 02 12       CallProperty0 r2, <this>, [18]
 1696 S> 0x2903f4c2645c @   84 : 2d 02 02 14       GetNamedProperty <this>, [2], [20]
         0x2903f4c26460 @   88 : c2                Star2 
 1696 E> 0x2903f4c26461 @   89 : 5d f8 02 16       CallProperty0 r2, <this>, [22]
         0x2903f4c26465 @   93 : 96 2c             JumpIfToBooleanTrue [44] (0x2903f4c26491 @ 137)
 1739 S> 0x2903f4c26467 @   95 : 2d 02 09 18       GetNamedProperty <this>, [9], [24]
         0x2903f4c2646b @   99 : c2                Star2 
 1739 E> 0x2903f4c2646c @  100 : 5d f8 02 1a       CallProperty0 r2, <this>, [26]
         0x2903f4c26470 @  104 : c1                Star3 
         0x2903f4c26471 @  105 : 19 fa f8          Mov r0, r2
         0x2903f4c26474 @  108 : 68 01 f8 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r2-r3
 1728 E> 0x2903f4c26478 @  112 : af fa fa 02 00    SuspendGenerator r0, r0-r1, [0]
         0x2903f4c2647d @  117 : b0 fa fa 02       ResumeGenerator r0, r0-r1
         0x2903f4c26481 @  121 : c2                Star2 
         0x2903f4c26482 @  122 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x2903f4c26486 @  126 : c1                Star3 
         0x2903f4c26487 @  127 : 0c                LdaZero 
         0x2903f4c26488 @  128 : 1c f7             TestReferenceEqual r3
         0x2903f4c2648a @  130 : 98 05             JumpIfTrue [5] (0x2903f4c2648f @ 135)
         0x2903f4c2648c @  132 : 0b f8             Ldar r2
         0x2903f4c2648e @  134 : a8                ReThrow 
         0x2903f4c2648f @  135 : 0b f8             Ldar r2
 1788 S> 0x2903f4c26491 @  137 : 7c 0a 1c 0c       CreateObjectLiteral [10], [28], #12
         0x2903f4c26495 @  141 : c2                Star2 
 1858 E> 0x2903f4c26496 @  142 : 2d 02 0b 1d       GetNamedProperty <this>, [11], [29]
         0x2903f4c2649a @  146 : c1                Star3 
 1858 E> 0x2903f4c2649b @  147 : 5d f7 02 1f       CallProperty0 r3, <this>, [31]
         0x2903f4c2649f @  151 : 33 f8 0c 21       DefineNamedOwnProperty r2, [12], [33]
 1905 E> 0x2903f4c264a3 @  155 : 2d 02 0d 23       GetNamedProperty <this>, [13], [35]
         0x2903f4c264a7 @  159 : 33 f8 0e 25       DefineNamedOwnProperty r2, [14], [37]
         0x2903f4c264ab @  163 : 0b f8             Ldar r2
         0x2903f4c264ad @  165 : c1                Star3 
         0x2903f4c264ae @  166 : 19 fa f8          Mov r0, r2
         0x2903f4c264b1 @  169 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1957 S> 0x2903f4c264b5 @  173 : a9                Return 
         0x2903f4c264b6 @  174 : c2                Star2 
         0x2903f4c264b7 @  175 : 82 f8 0f          CreateCatchContext r2, [15]
         0x2903f4c264ba @  178 : c3                Star1 
         0x2903f4c264bb @  179 : 10                LdaTheHole 
         0x2903f4c264bc @  180 : a6                SetPendingMessage 
         0x2903f4c264bd @  181 : 0b f9             Ldar r1
         0x2903f4c264bf @  183 : 1a f8             PushContext r2
         0x2903f4c264c1 @  185 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c264c3 @  187 : c0                Star4 
         0x2903f4c264c4 @  188 : 19 fa f7          Mov r0, r3
         0x2903f4c264c7 @  191 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x2903f4c264cb @  195 : a9                Return 
Constant pool (size = 16)
0x2903f4c264d1: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 16
           0: 117
           1: 0x2903f4c259b1 <String[17]: #currentTickNumber>
           2: 0x2903f4c25731 <String[14]: #isGameComplete>
           3: 0x2903f4c26561 <ObjectBoilerplateDescription[5]>
           4: 0x2903f4c265d9 <ObjectBoilerplateDescription[3]>
           5: 0x2903f4c25689 <String[14]: #getGameResults>
           6: 0x2903f4c26601 <String[7]: #results>
           7: 0x2903f4c265b9 <String[11]: #gameResults>
           8: 0x2903f4c25751 <String[10]: #updateGame>
           9: 0x2903f4c256e1 <String[27]: #fetchAndApplyPlayerCommands>
          10: 0x2903f4c26619 <ObjectBoilerplateDescription[9]>
          11: 0x2903f4c257b1 <String[18]: #serializeForViewer>
          12: 0x2903f4c26671 <String[9]: #gameState>
          13: 0x2903f4c25991 <String[14]: #lastTickErrors>
          14: 0x298496fc4f11 <String[6]: #errors>
          15: 0x2903f4c266c1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 174)  ->   174 (prediction=3, data=1)
Source Position Table (size = 55)
0x2903f4c26719 <ByteArray[55]>
Boilerplate at 0x2903f4c26561: 
0x2903f4c26561: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 5
           0: 8
           1: 0x2903f4c26599 <String[12]: #gameComplete>
           2: 0x298496fc1729 <true>
           3: 0x2903f4c265b9 <String[11]: #gameResults>
           4: 0x298496fc1501 <Odd Oddball: uninitialized>
Boilerplate at 0x2903f4c265d9: 
0x2903f4c265d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 3
           0: 8
           1: 0x2903f4c26601 <String[7]: #results>
           2: 0x298496fc1501 <Odd Oddball: uninitialized>
Boilerplate at 0x2903f4c26619: 
0x2903f4c26619: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 9
           0: 8
           1: 0x2903f4c26599 <String[12]: #gameComplete>
           2: 0x298496fc1789 <false>
           3: 0x2903f4c26671 <String[9]: #gameState>
           4: 0x298496fc1501 <Odd Oddball: uninitialized>
           5: 0x298496fc4f11 <String[6]: #errors>
           6: 0x298496fc1501 <Odd Oddball: uninitialized>
           7: 0x2903f4c26691 <String[8]: #commands>
           8: 0x2903f4c266a9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x298496fc1329 <FixedArray[0]>>
0x2903f4c267e1 points to: [0x2903f4c26850]
=== [0x2903f4c26850] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x2903f4c26850 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @57 }
 2001 E> 0x2903f4c26854 @    4 : 83 01 01          CreateFunctionContext [1], [1]
         0x2903f4c26857 @    7 : 1a f8             PushContext r2
         0x2903f4c26859 @    9 : 0b 02             Ldar <this>
         0x2903f4c2685b @   11 : 25 02             StaCurrentContextSlot [2]
         0x2903f4c2685d @   13 : 19 fe f7          Mov <closure>, r3
         0x2903f4c26860 @   16 : 19 02 f6          Mov <this>, r4
         0x2903f4c26863 @   19 : 68 02 f7 02       InvokeIntrinsic [_AsyncFunctionEnter], r3-r4
         0x2903f4c26867 @   23 : c4                Star0 
         0x2903f4c26868 @   24 : 19 ff f7          Mov <context>, r3
 2042 S> 0x2903f4c2686b @   27 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c2686d @   29 : bf                Star5 
 2053 E> 0x2903f4c2686e @   30 : 2d f5 02 00       GetNamedProperty r5, [2], [0]
         0x2903f4c26872 @   34 : bf                Star5 
 2060 E> 0x2903f4c26873 @   35 : 2d f5 03 02       GetNamedProperty r5, [3], [2]
         0x2903f4c26877 @   39 : c0                Star4 
 2060 E> 0x2903f4c26878 @   40 : 5d f6 f5 04       CallProperty0 r4, r5, [4]
         0x2903f4c2687c @   44 : bf                Star5 
         0x2903f4c2687d @   45 : 19 fa f6          Mov r0, r4
         0x2903f4c26880 @   48 : 68 01 f6 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r4-r5
 2042 E> 0x2903f4c26884 @   52 : af fa fa 04 00    SuspendGenerator r0, r0-r3, [0]
         0x2903f4c26889 @   57 : b0 fa fa 04       ResumeGenerator r0, r0-r3
         0x2903f4c2688d @   61 : c0                Star4 
         0x2903f4c2688e @   62 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x2903f4c26892 @   66 : bf                Star5 
         0x2903f4c26893 @   67 : 0c                LdaZero 
         0x2903f4c26894 @   68 : 1c f5             TestReferenceEqual r5
         0x2903f4c26896 @   70 : 98 05             JumpIfTrue [5] (0x2903f4c2689b @ 75)
         0x2903f4c26898 @   72 : 0b f6             Ldar r4
         0x2903f4c2689a @   74 : a8                ReThrow 
         0x2903f4c2689b @   75 : 19 f6 f9          Mov r4, r1
 2092 S> 0x2903f4c2689e @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c268a0 @   80 : c0                Star4 
         0x2903f4c268a1 @   81 : 7b 06             CreateEmptyArrayLiteral [6]
 2112 E> 0x2903f4c268a3 @   83 : 32 f6 04 07       SetNamedProperty r4, [4], [7]
 2146 S> 0x2903f4c268a7 @   87 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x2903f4c268ab @   91 : c0                Star4 
         0x2903f4c268ac @   92 : 80 06 00 02       CreateClosure [6], [0], #2
         0x2903f4c268b0 @   96 : be                Star6 
 2146 E> 0x2903f4c268b1 @   97 : 5e f6 f9 f4 0b    CallProperty1 r4, r1, r6, [11]
         0x2903f4c268b6 @  102 : 0e                LdaUndefined 
         0x2903f4c268b7 @  103 : bf                Star5 
         0x2903f4c268b8 @  104 : 19 fa f6          Mov r0, r4
         0x2903f4c268bb @  107 : 68 04 f6 02       InvokeIntrinsic [_AsyncFunctionResolve], r4-r5
 2911 S> 0x2903f4c268bf @  111 : a9                Return 
         0x2903f4c268c0 @  112 : c0                Star4 
         0x2903f4c268c1 @  113 : 82 f6 07          CreateCatchContext r4, [7]
         0x2903f4c268c4 @  116 : c1                Star3 
         0x2903f4c268c5 @  117 : 10                LdaTheHole 
         0x2903f4c268c6 @  118 : a6                SetPendingMessage 
         0x2903f4c268c7 @  119 : 0b f7             Ldar r3
         0x2903f4c268c9 @  121 : 1a f6             PushContext r4
         0x2903f4c268cb @  123 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c268cd @  125 : be                Star6 
         0x2903f4c268ce @  126 : 19 fa f5          Mov r0, r5
         0x2903f4c268d1 @  129 : 68 03 f5 02       InvokeIntrinsic [_AsyncFunctionReject], r5-r6
         0x2903f4c268d5 @  133 : a9                Return 
Constant pool (size = 8)
0x2903f4c268d9: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 8
           0: 57
           1: 0x2903f4c26929 <ScopeInfo FUNCTION_SCOPE>
           2: 0x2903f4c259d9 <String[6]: #engine>
           3: 0x2903f4c26989 <String[20]: #getCommandsFromTeams>
           4: 0x2903f4c25991 <String[14]: #lastTickErrors>
           5: 0x3aaf854ca021 <String[7]: #forEach>
           6: 0x2903f4c269c9 <SharedFunctionInfo>
           7: 0x2903f4c26e01 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  27, 112)  ->   112 (prediction=3, data=3)
Source Position Table (size = 29)
0x2903f4c26e59 <ByteArray[29]>
0x2903f4c269c9 points to: [0x2903f4c26a38]
=== [0x2903f4c26a38] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2219 S> 0x2903f4c26a38 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2903f4c26a3c @    4 : c4                Star0 
 2240 S> 0x2903f4c26a3d @    5 : 97 b8             JumpIfToBooleanFalse [184] (0x2903f4c26af5 @ 189)
         0x2903f4c26a3f @    7 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c26a41 @    9 : c3                Star1 
 2260 E> 0x2903f4c26a42 @   10 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2903f4c26a46 @   14 : 97 af             JumpIfToBooleanFalse [175] (0x2903f4c26af5 @ 189)
         0x2903f4c26a48 @   16 : 19 ff f9          Mov <context>, r1
 2329 S> 0x2903f4c26a4b @   19 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x2903f4c26a4f @   23 : 1d                TestUndetectable 
         0x2903f4c26a50 @   24 : 99 0e             JumpIfFalse [14] (0x2903f4c26a5e @ 38)
 2372 S> 0x2903f4c26a52 @   26 : 21 03 06          LdaGlobal [3], [6]
         0x2903f4c26a55 @   29 : c2                Star2 
         0x2903f4c26a56 @   30 : 13 04             LdaConstant [4]
         0x2903f4c26a58 @   32 : c1                Star3 
 2378 E> 0x2903f4c26a59 @   33 : 62 f8 f7 08       CallUndefinedReceiver1 r2, r3, [8]
 2372 E> 0x2903f4c26a5d @   37 : a7                Throw 
 2466 S> 0x2903f4c26a5e @   38 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c26a60 @   40 : c1                Star3 
 2471 E> 0x2903f4c26a61 @   41 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x2903f4c26a65 @   45 : c2                Star2 
         0x2903f4c26a66 @   46 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c26a68 @   48 : c0                Star4 
 2489 E> 0x2903f4c26a69 @   49 : 2d f6 01 0c       GetNamedProperty r4, [1], [12]
         0x2903f4c26a6d @   53 : c0                Star4 
 2471 E> 0x2903f4c26a6e @   54 : 5f f8 f7 f6 fa 0e CallProperty2 r2, r3, r4, r0, [14]
         0x2903f4c26a74 @   60 : 8a 81             Jump [129] (0x2903f4c26af5 @ 189)
         0x2903f4c26a76 @   62 : c2                Star2 
         0x2903f4c26a77 @   63 : 82 f8 06          CreateCatchContext r2, [6]
         0x2903f4c26a7a @   66 : c3                Star1 
         0x2903f4c26a7b @   67 : 10                LdaTheHole 
         0x2903f4c26a7c @   68 : a6                SetPendingMessage 
         0x2903f4c26a7d @   69 : 0b f9             Ldar r1
         0x2903f4c26a7f @   71 : 1a f8             PushContext r2
 2582 S> 0x2903f4c26a81 @   73 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x2903f4c26a85 @   77 : aa 07             ThrowReferenceErrorIfHole [7]
         0x2903f4c26a87 @   79 : c0                Star4 
 2591 E> 0x2903f4c26a88 @   80 : 2d f6 08 10       GetNamedProperty r4, [8], [16]
         0x2903f4c26a8c @   84 : c0                Star4 
 2598 E> 0x2903f4c26a8d @   85 : 2d f6 09 12       GetNamedProperty r4, [9], [18]
         0x2903f4c26a91 @   89 : c1                Star3 
         0x2903f4c26a92 @   90 : 13 0a             LdaConstant [10]
         0x2903f4c26a94 @   92 : bf                Star5 
 2633 E> 0x2903f4c26a95 @   93 : 21 0b 15          LdaGlobal [11], [21]
         0x2903f4c26a98 @   96 : bd                Star7 
 2638 E> 0x2903f4c26a99 @   97 : 2d f3 0c 17       GetNamedProperty r7, [12], [23]
         0x2903f4c26a9d @  101 : be                Star6 
 2638 E> 0x2903f4c26a9e @  102 : 5e f4 f3 fa 19    CallProperty1 r6, r7, r0, [25]
         0x2903f4c26aa3 @  107 : 77                ToString 
         0x2903f4c26aa4 @  108 : 39 f5 14          Add r5, [20]
         0x2903f4c26aa7 @  111 : bf                Star5 
         0x2903f4c26aa8 @  112 : 13 0d             LdaConstant [13]
         0x2903f4c26aaa @  114 : 39 f5 14          Add r5, [20]
         0x2903f4c26aad @  117 : bf                Star5 
         0x2903f4c26aae @  118 : 17 02             LdaImmutableCurrentContextSlot [2]
 2663 E> 0x2903f4c26ab0 @  120 : 77                ToString 
         0x2903f4c26ab1 @  121 : 39 f5 14          Add r5, [20]
         0x2903f4c26ab4 @  124 : bf                Star5 
 2598 E> 0x2903f4c26ab5 @  125 : 5e f7 f6 f5 1b    CallProperty1 r3, r4, r5, [27]
 2693 S> 0x2903f4c26aba @  130 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c26abc @  132 : c1                Star3 
 2714 E> 0x2903f4c26abd @  133 : 21 03 06          LdaGlobal [3], [6]
 2703 E> 0x2903f4c26ac0 @  136 : 71 f7 1d          TestInstanceOf r3, [29]
         0x2903f4c26ac3 @  139 : 99 30             JumpIfFalse [48] (0x2903f4c26af3 @ 187)
 2747 S> 0x2903f4c26ac5 @  141 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2903f4c26ac9 @  145 : c0                Star4 
 2752 E> 0x2903f4c26aca @  146 : 2d f6 01 1e       GetNamedProperty r4, [1], [30]
         0x2903f4c26ace @  150 : c0                Star4 
 2764 E> 0x2903f4c26acf @  151 : 2d f6 0e 20       GetNamedProperty r4, [14], [32]
         0x2903f4c26ad3 @  155 : c1                Star3 
         0x2903f4c26ad4 @  156 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c26ad6 @  158 : bf                Star5 
 2764 E> 0x2903f4c26ad7 @  159 : 5e f7 f6 f5 22    CallProperty1 r3, r4, r5, [34]
 2808 S> 0x2903f4c26adc @  164 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2903f4c26ae0 @  168 : c0                Star4 
 2813 E> 0x2903f4c26ae1 @  169 : 2d f6 0f 24       GetNamedProperty r4, [15], [36]
         0x2903f4c26ae5 @  173 : c0                Star4 
 2828 E> 0x2903f4c26ae6 @  174 : 2d f6 10 26       GetNamedProperty r4, [16], [38]
         0x2903f4c26aea @  178 : c1                Star3 
         0x2903f4c26aeb @  179 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c26aed @  181 : bf                Star5 
 2828 E> 0x2903f4c26aee @  182 : 5e f7 f6 f5 28    CallProperty1 r3, r4, r5, [40]
         0x2903f4c26af3 @  187 : 1b f8             PopContext r2
         0x2903f4c26af5 @  189 : 0e                LdaUndefined 
 2903 S> 0x2903f4c26af6 @  190 : a9                Return 
Constant pool (size = 17)
0x2903f4c26af9: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 17
           0: 0x2903f4c26b91 <String[7]: #command>
           1: 0x2903f4c25d99 <String[11]: #_engineTeam>
           2: 0x2903f4c26ba9 <String[7]: #actions>
           3: 0x298496fc4de1 <String[5]: #Error>
           4: 0x2903f4c26bc1 <String[35]: #Command invalid: 'actions' missing.>
           5: 0x2903f4c25711 <String[12]: #applyActions>
           6: 0x2903f4c26bf9 <ScopeInfo CATCH_SCOPE>
           7: 0x2903f4c25221 <String[8]: #engine_1>
           8: 0x3aaf854c6461 <String[6]: #logger>
           9: 0x3aaf854c6309 <String[5]: #error>
          10: 0x2903f4c26c49 <String[26]: #Error processing command '>
          11: 0x3aaf854dc529 <String[4]: #JSON>
          12: 0x3aaf854cee51 <String[9]: #stringify>
          13: 0x2903f4c26cb1 <String[4]: #' : >
          14: 0x2903f4c26cc9 <String[11]: #reportError>
          15: 0x2903f4c25991 <String[14]: #lastTickErrors>
          16: 0x3aaf854c9551 <String[4]: #push>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  19,  60)  ->    62 (prediction=1, data=1)
Source Position Table (size = 76)
0x2903f4c26d21 <ByteArray[76]>
0x2903f4c26ea9 points to: [0x2903f4c26f18]
=== [0x2903f4c26f18] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2929 E> 0x2903f4c26f18 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x2903f4c26f1b @    3 : 1a fa             PushContext r0
         0x2903f4c26f1d @    5 : 0b 02             Ldar <this>
         0x2903f4c26f1f @    7 : 25 02             StaCurrentContextSlot [2]
         0x2903f4c26f21 @    9 : 0b 03             Ldar a0
         0x2903f4c26f23 @   11 : 25 03             StaCurrentContextSlot [3]
 2963 S> 0x2903f4c26f25 @   13 : 2d 04 01 00       GetNamedProperty a1, [1], [0]
         0x2903f4c26f29 @   17 : c2                Star2 
 2971 E> 0x2903f4c26f2a @   18 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2903f4c26f2e @   22 : c3                Star1 
         0x2903f4c26f2f @   23 : 80 03 00 02       CreateClosure [3], [0], #2
         0x2903f4c26f33 @   27 : c1                Star3 
 2971 E> 0x2903f4c26f34 @   28 : 5e f9 f8 f7 04    CallProperty1 r1, r2, r3, [4]
         0x2903f4c26f39 @   33 : 0e                LdaUndefined 
 3419 S> 0x2903f4c26f3a @   34 : a9                Return 
Constant pool (size = 4)
0x2903f4c26f41: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 4
           0: 0x2903f4c26f71 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2903f4c26ba9 <String[7]: #actions>
           2: 0x3aaf854ca021 <String[7]: #forEach>
           3: 0x2903f4c26ff9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 15)
0x2903f4c27341 <ByteArray[15]>
0x2903f4c26ff9 points to: [0x2903f4c27068]
=== [0x2903f4c27068] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x2903f4c27068 @    0 : 19 ff fa          Mov <context>, r0
 3027 S> 0x2903f4c2706b @    3 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c2706d @    5 : c2                Star2 
 3032 E> 0x2903f4c2706e @    6 : 2d f8 00 00       GetNamedProperty r2, [0], [0]
         0x2903f4c27072 @   10 : c2                Star2 
         0x2903f4c27073 @   11 : 9e 0e             JumpIfUndefinedOrNull [14] (0x2903f4c27081 @ 25)
 3037 E> 0x2903f4c27075 @   13 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x2903f4c27079 @   17 : c3                Star1 
 3039 E> 0x2903f4c2707a @   18 : 5e f9 f8 03 04    CallProperty1 r1, r2, a0, [4]
         0x2903f4c2707f @   23 : 8a 03             Jump [3] (0x2903f4c27082 @ 26)
         0x2903f4c27081 @   25 : 0e                LdaUndefined 
         0x2903f4c27082 @   26 : 8a 8c             Jump [140] (0x2903f4c2710e @ 166)
         0x2903f4c27084 @   28 : c3                Star1 
         0x2903f4c27085 @   29 : 82 f9 02          CreateCatchContext r1, [2]
         0x2903f4c27088 @   32 : c4                Star0 
         0x2903f4c27089 @   33 : 10                LdaTheHole 
         0x2903f4c2708a @   34 : a6                SetPendingMessage 
         0x2903f4c2708b @   35 : 0b fa             Ldar r0
         0x2903f4c2708d @   37 : 1a f9             PushContext r1
 3118 S> 0x2903f4c2708f @   39 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x2903f4c27093 @   43 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2903f4c27095 @   45 : c1                Star3 
 3127 E> 0x2903f4c27096 @   46 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x2903f4c2709a @   50 : c1                Star3 
 3134 E> 0x2903f4c2709b @   51 : 2d f7 05 08       GetNamedProperty r3, [5], [8]
         0x2903f4c2709f @   55 : c2                Star2 
         0x2903f4c270a0 @   56 : 13 06             LdaConstant [6]
         0x2903f4c270a2 @   58 : c0                Star4 
 3166 E> 0x2903f4c270a3 @   59 : 21 07 0b          LdaGlobal [7], [11]
         0x2903f4c270a6 @   62 : be                Star6 
 3171 E> 0x2903f4c270a7 @   63 : 2d f4 08 0d       GetNamedProperty r6, [8], [13]
         0x2903f4c270ab @   67 : bf                Star5 
 3171 E> 0x2903f4c270ac @   68 : 5e f5 f4 03 0f    CallProperty1 r5, r6, a0, [15]
         0x2903f4c270b1 @   73 : 77                ToString 
         0x2903f4c270b2 @   74 : 39 f6 0a          Add r4, [10]
         0x2903f4c270b5 @   77 : c0                Star4 
         0x2903f4c270b6 @   78 : 13 09             LdaConstant [9]
         0x2903f4c270b8 @   80 : 39 f6 0a          Add r4, [10]
         0x2903f4c270bb @   83 : c0                Star4 
 3134 E> 0x2903f4c270bc @   84 : 5e f8 f7 f6 11    CallProperty1 r2, r3, r4, [17]
 3210 S> 0x2903f4c270c1 @   89 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c270c3 @   91 : c2                Star2 
 3231 E> 0x2903f4c270c4 @   92 : 21 0a 13          LdaGlobal [10], [19]
 3220 E> 0x2903f4c270c7 @   95 : 71 f8 15          TestInstanceOf r2, [21]
         0x2903f4c270ca @   98 : 99 42             JumpIfFalse [66] (0x2903f4c2710c @ 164)
 3260 S> 0x2903f4c270cc @  100 : 15 f9 03 00       LdaImmutableContextSlot r1, [3], [0]
         0x2903f4c270d0 @  104 : c1                Star3 
 3265 E> 0x2903f4c270d1 @  105 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x2903f4c270d5 @  109 : c2                Star2 
         0x2903f4c270d6 @  110 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c270d8 @  112 : c0                Star4 
 3265 E> 0x2903f4c270d9 @  113 : 5e f8 f7 f6 18    CallProperty1 r2, r3, r4, [24]
 3305 S> 0x2903f4c270de @  118 : 15 f9 02 00       LdaImmutableContextSlot r1, [2], [0]
         0x2903f4c270e2 @  122 : c1                Star3 
 3310 E> 0x2903f4c270e3 @  123 : 2d f7 0c 1a       GetNamedProperty r3, [12], [26]
         0x2903f4c270e7 @  127 : c1                Star3 
 3325 E> 0x2903f4c270e8 @  128 : 2d f7 0d 1c       GetNamedProperty r3, [13], [28]
         0x2903f4c270ec @  132 : c2                Star2 
         0x2903f4c270ed @  133 : 15 ff 03 03       LdaImmutableContextSlot <context>, [3], [3]
 3334 E> 0x2903f4c270f1 @  137 : aa 0e             ThrowReferenceErrorIfHole [14]
         0x2903f4c270f3 @  139 : c0                Star4 
 3342 E> 0x2903f4c270f4 @  140 : 2d f6 0f 1e       GetNamedProperty r4, [15], [30]
         0x2903f4c270f8 @  144 : c0                Star4 
         0x2903f4c270f9 @  145 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2903f4c270fb @  147 : be                Star6 
         0x2903f4c270fc @  148 : 0b f6             Ldar r4
         0x2903f4c270fe @  150 : 19 03 f5          Mov a0, r5
 3330 E> 0x2903f4c27101 @  153 : 69 f6 f5 02 20    Construct r4, r5-r6, [32]
         0x2903f4c27106 @  158 : c0                Star4 
 3325 E> 0x2903f4c27107 @  159 : 5e f8 f7 f6 22    CallProperty1 r2, r3, r4, [34]
         0x2903f4c2710c @  164 : 1b f9             PopContext r1
         0x2903f4c2710e @  166 : 0e                LdaUndefined 
 3411 S> 0x2903f4c2710f @  167 : a9                Return 
Constant pool (size = 16)
0x2903f4c27111: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 16
           0: 0x2903f4c26059 <String[5]: #world>
           1: 0x2903f4c271a1 <String[11]: #applyAction>
           2: 0x2903f4c271c1 <ScopeInfo CATCH_SCOPE>
           3: 0x2903f4c25221 <String[8]: #engine_1>
           4: 0x3aaf854c6461 <String[6]: #logger>
           5: 0x3aaf854c6309 <String[5]: #error>
           6: 0x2903f4c271f9 <String[23]: #Error applying action '>
           7: 0x3aaf854dc529 <String[4]: #JSON>
           8: 0x3aaf854cee51 <String[9]: #stringify>
           9: 0x3aaf854f4c49 <String[1]: #'>
          10: 0x298496fc4de1 <String[5]: #Error>
          11: 0x2903f4c26cc9 <String[11]: #reportError>
          12: 0x2903f4c25991 <String[14]: #lastTickErrors>
          13: 0x3aaf854c9551 <String[4]: #push>
          14: 0x2903f4c25239 <String[7]: #error_1>
          15: 0x2903f4c27239 <String[11]: #ActionError>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (   3,  26)  ->    28 (prediction=1, data=0)
Source Position Table (size = 61)
0x2903f4c27279 <ByteArray[61]>
0x2903f4c27379 points to: [0x2903f4c273e8]
=== [0x2903f4c273e8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3465 S> 0x2903f4c273e8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2903f4c273ec @    4 : c4                Star0 
         0x2903f4c273ed @    5 : 9e 08             JumpIfUndefinedOrNull [8] (0x2903f4c273f5 @ 13)
 3470 E> 0x2903f4c273ef @    7 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2903f4c273f3 @   11 : 8a 03             Jump [3] (0x2903f4c273f6 @ 14)
         0x2903f4c273f5 @   13 : 0e                LdaUndefined 
         0x2903f4c273f6 @   14 : 97 10             JumpIfToBooleanFalse [16] (0x2903f4c27406 @ 30)
 3493 E> 0x2903f4c273f8 @   16 : 2d 02 00 04       GetNamedProperty <this>, [0], [4]
         0x2903f4c273fc @   20 : c4                Star0 
 3499 E> 0x2903f4c273fd @   21 : 2d fa 01 06       GetNamedProperty r0, [1], [6]
         0x2903f4c27401 @   25 : c4                Star0 
         0x2903f4c27402 @   26 : 0c                LdaZero 
 3512 E> 0x2903f4c27403 @   27 : 6f fa 08          TestLessThanOrEqual r0, [8]
         0x2903f4c27406 @   30 : 96 13             JumpIfToBooleanTrue [19] (0x2903f4c27419 @ 49)
 3538 E> 0x2903f4c27408 @   32 : 2d 02 02 09       GetNamedProperty <this>, [2], [9]
         0x2903f4c2740c @   36 : c4                Star0 
 3564 E> 0x2903f4c2740d @   37 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x2903f4c27411 @   41 : c3                Star1 
 3572 E> 0x2903f4c27412 @   42 : 2d f9 04 0d       GetNamedProperty r1, [4], [13]
 3556 E> 0x2903f4c27416 @   46 : 70 fa 0f          TestGreaterThanOrEqual r0, [15]
 3583 S> 0x2903f4c27419 @   49 : a9                Return 
Constant pool (size = 5)
0x2903f4c27421: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 5
           0: 0x2903f4c26059 <String[5]: #world>
           1: 0x2903f4c27459 <String[12]: #healthPoints>
           2: 0x2903f4c259b1 <String[17]: #currentTickNumber>
           3: 0x3aaf854ccbb9 <String[7]: #options>
           4: 0x2903f4c27479 <String[10]: #TICK_COUNT>
Handler Table (size = 0)
Source Position Table (size = 23)
0x2903f4c27499 <ByteArray[23]>
0x2903f4c27531 points to: [0x2903f4c275a0]
=== [0x2903f4c275a0] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3622 S> 0x2903f4c275a0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2903f4c275a4 @    4 : c3                Star1 
         0x2903f4c275a5 @    5 : 9e 0d             JumpIfUndefinedOrNull [13] (0x2903f4c275b2 @ 18)
 3627 E> 0x2903f4c275a7 @    7 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2903f4c275ab @   11 : c4                Star0 
 3629 E> 0x2903f4c275ac @   12 : 5d fa f9 04       CallProperty0 r0, r1, [4]
         0x2903f4c275b0 @   16 : 8a 03             Jump [3] (0x2903f4c275b3 @ 19)
         0x2903f4c275b2 @   18 : 0e                LdaUndefined 
         0x2903f4c275b3 @   19 : 0e                LdaUndefined 
 3643 S> 0x2903f4c275b4 @   20 : a9                Return 
Constant pool (size = 2)
0x2903f4c275b9: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 2
           0: 0x2903f4c26059 <String[5]: #world>
           1: 0x3aaf854c3f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2903f4c275f1 <ByteArray[11]>
0x2903f4c27679 points to: [0x2903f4c276e8]
=== [0x2903f4c276e8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
         0x2903f4c276e8 @    0 : 0e                LdaUndefined 
 3690 S> 0x2903f4c276e9 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 5)
0x2903f4c276f1 <ByteArray[5]>
0x2903f4c27759 points to: [0x2903f4c277c8]
=== [0x2903f4c277c8] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3760 S> 0x2903f4c277c8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2903f4c277cc @    4 : c3                Star1 
 3760 E> 0x2903f4c277cd @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2903f4c277d1 @    9 : c3                Star1 
         0x2903f4c277d2 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2903f4c277d6 @   14 : c4                Star0 
 3799 E> 0x2903f4c277d7 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2903f4c277db @   19 : c0                Star4 
 3805 E> 0x2903f4c277dc @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x2903f4c277e0 @   24 : c1                Star3 
 3805 E> 0x2903f4c277e1 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x2903f4c277e5 @   29 : c2                Star2 
         0x2903f4c277e6 @   30 : 19 fa f9          Mov r0, r1
         0x2903f4c277e9 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x2903f4c277ed @   37 : 0b f9             Ldar r1
 3837 S> 0x2903f4c277ef @   39 : a9                Return 
Constant pool (size = 3)
0x2903f4c277f1: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 3
           0: 0x2903f4c25801 <String[15]: #serializeCommon>
           1: 0x2903f4c26059 <String[5]: #world>
           2: 0x2903f4c27819 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 18)
0x2903f4c27841 <ByteArray[18]>
0x2903f4c278d1 points to: [0x2903f4c27940]
=== [0x2903f4c27940] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3908 S> 0x2903f4c27940 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2903f4c27944 @    4 : c3                Star1 
 3908 E> 0x2903f4c27945 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2903f4c27949 @    9 : c3                Star1 
         0x2903f4c2794a @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2903f4c2794e @   14 : c4                Star0 
 3947 E> 0x2903f4c2794f @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2903f4c27953 @   19 : c0                Star4 
 3953 E> 0x2903f4c27954 @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x2903f4c27958 @   24 : c1                Star3 
 3953 E> 0x2903f4c27959 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x2903f4c2795d @   29 : c2                Star2 
         0x2903f4c2795e @   30 : 19 fa f9          Mov r0, r1
         0x2903f4c27961 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x2903f4c27965 @   37 : 0b f9             Ldar r1
 3985 S> 0x2903f4c27967 @   39 : a9                Return 
Constant pool (size = 3)
0x2903f4c27969: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 3
           0: 0x2903f4c25801 <String[15]: #serializeCommon>
           1: 0x2903f4c26059 <String[5]: #world>
           2: 0x2903f4c257b1 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 18)
0x2903f4c27991 <ByteArray[18]>
0x2903f4c27a21 points to: [0x2903f4c27a90]
=== [0x2903f4c27a90] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 4027 S> 0x2903f4c27a90 @    0 : 7c 00 00 08       CreateObjectLiteral [0], [0], #8
         0x2903f4c27a94 @    4 : c4                Star0 
 4057 E> 0x2903f4c27a95 @    5 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x2903f4c27a99 @    9 : c3                Star1 
 4087 E> 0x2903f4c27a9a @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2903f4c27a9e @   14 : c2                Star2 
 4095 E> 0x2903f4c27a9f @   15 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x2903f4c27aa3 @   19 : 33 f9 04 06       DefineNamedOwnProperty r1, [4], [6]
 4136 E> 0x2903f4c27aa7 @   23 : 2d 02 02 08       GetNamedProperty <this>, [2], [8]
         0x2903f4c27aab @   27 : c2                Star2 
 4144 E> 0x2903f4c27aac @   28 : 2d f8 05 0a       GetNamedProperty r2, [5], [10]
         0x2903f4c27ab0 @   32 : 33 f9 06 0c       DefineNamedOwnProperty r1, [6], [12]
         0x2903f4c27ab4 @   36 : 0b f9             Ldar r1
         0x2903f4c27ab6 @   38 : 33 fa 07 0e       DefineNamedOwnProperty r0, [7], [14]
 4191 E> 0x2903f4c27aba @   42 : 7c 08 10 29       CreateObjectLiteral [8], [16], #41
         0x2903f4c27abe @   46 : c3                Star1 
 4221 E> 0x2903f4c27abf @   47 : 2d 02 02 11       GetNamedProperty <this>, [2], [17]
         0x2903f4c27ac3 @   51 : c2                Star2 
 4229 E> 0x2903f4c27ac4 @   52 : 2d f8 09 13       GetNamedProperty r2, [9], [19]
         0x2903f4c27ac8 @   56 : c2                Star2 
 4246 E> 0x2903f4c27ac9 @   57 : 2d f8 0a 15       GetNamedProperty r2, [10], [21]
         0x2903f4c27acd @   61 : 33 f9 0a 17       DefineNamedOwnProperty r1, [10], [23]
 4282 E> 0x2903f4c27ad1 @   65 : 2d 02 02 19       GetNamedProperty <this>, [2], [25]
         0x2903f4c27ad5 @   69 : c2                Star2 
 4290 E> 0x2903f4c27ad6 @   70 : 2d f8 09 1b       GetNamedProperty r2, [9], [27]
         0x2903f4c27ada @   74 : c2                Star2 
 4307 E> 0x2903f4c27adb @   75 : 2d f8 0b 1d       GetNamedProperty r2, [11], [29]
         0x2903f4c27adf @   79 : 33 f9 0b 1f       DefineNamedOwnProperty r1, [11], [31]
         0x2903f4c27ae3 @   83 : 0b f9             Ldar r1
         0x2903f4c27ae5 @   85 : 33 fa 0c 21       DefineNamedOwnProperty r0, [12], [33]
 4368 E> 0x2903f4c27ae9 @   89 : 2d 02 02 23       GetNamedProperty <this>, [2], [35]
         0x2903f4c27aed @   93 : c3                Star1 
 4376 E> 0x2903f4c27aee @   94 : 2d f9 0d 25       GetNamedProperty r1, [13], [37]
         0x2903f4c27af2 @   98 : 33 fa 0e 27       DefineNamedOwnProperty r0, [14], [39]
         0x2903f4c27af6 @  102 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 4428 E> 0x2903f4c27afa @  106 : aa 0f             ThrowReferenceErrorIfHole [15]
         0x2903f4c27afc @  108 : c2                Star2 
 4443 E> 0x2903f4c27afd @  109 : 2d f8 10 29       GetNamedProperty r2, [16], [41]
         0x2903f4c27b01 @  113 : c3                Star1 
 4464 E> 0x2903f4c27b02 @  114 : 61 f9 2b          CallUndefinedReceiver0 r1, [43]
         0x2903f4c27b05 @  117 : 33 fa 11 2d       DefineNamedOwnProperty r0, [17], [45]
         0x2903f4c27b09 @  121 : 0b fa             Ldar r0
 4477 S> 0x2903f4c27b0b @  123 : a9                Return 
Constant pool (size = 18)
0x2903f4c27b11: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 18
           0: 0x2903f4c27bb1 <ObjectBoilerplateDescription[9]>
           1: 0x2903f4c27c69 <ObjectBoilerplateDescription[5]>
           2: 0x3aaf854ccbb9 <String[7]: #options>
           3: 0x2903f4c27cb9 <String[12]: #BULLET_SPEED>
           4: 0x2903f4c27ca1 <String[5]: #speed>
           5: 0x2903f4c27cd9 <String[11]: #BULLET_SIZE>
           6: 0x298496fca111 <String[4]: #size>
           7: 0x2903f4c27c09 <String[7]: #rockets>
           8: 0x2903f4c27cf9 <ObjectBoilerplateDescription[5]>
           9: 0x2903f4c27d61 <String[16]: #WORLD_DIMENSIONS>
          10: 0x2903f4c27d31 <String[5]: #width>
          11: 0x2903f4c27d49 <String[6]: #height>
          12: 0x2903f4c26059 <String[5]: #world>
          13: 0x2903f4c27d81 <String[21]: #CANNON_COOLDOWN_TICKS>
          14: 0x2903f4c27c21 <String[19]: #cannonCooldownTicks>
          15: 0x2903f4c25281 <String[14]: #meteor_infos_1>
          16: 0x2903f4c27da9 <String[20]: #serializeMeteorInfos>
          17: 0x2903f4c27c49 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 46)
0x2903f4c27dd1 <ByteArray[46]>
Boilerplate at 0x2903f4c27bb1: 
0x2903f4c27bb1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 9
           0: 8
           1: 0x2903f4c27c09 <String[7]: #rockets>
           2: 0x298496fc1501 <Odd Oddball: uninitialized>
           3: 0x2903f4c26059 <String[5]: #world>
           4: 0x298496fc1501 <Odd Oddball: uninitialized>
           5: 0x2903f4c27c21 <String[19]: #cannonCooldownTicks>
           6: 0x298496fc1501 <Odd Oddball: uninitialized>
           7: 0x2903f4c27c49 <String[11]: #meteorInfos>
           8: 0x298496fc1501 <Odd Oddball: uninitialized>
Boilerplate at 0x2903f4c27c69: 
0x2903f4c27c69: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 5
           0: 8
           1: 0x2903f4c27ca1 <String[5]: #speed>
           2: 0x298496fc1501 <Odd Oddball: uninitialized>
           3: 0x298496fca111 <String[4]: #size>
           4: 0x298496fc1501 <Odd Oddball: uninitialized>
Boilerplate at 0x2903f4c27cf9: 
0x2903f4c27cf9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 5
           0: 8
           1: 0x2903f4c27d31 <String[5]: #width>
           2: 0x298496fc1501 <Odd Oddball: uninitialized>
           3: 0x2903f4c27d49 <String[6]: #height>
           4: 0x298496fc1501 <Odd Oddball: uninitialized>
0x2903f4c27e91 points to: [0x2903f4c27f00]
=== [0x2903f4c27f00] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4516 S> 0x2903f4c27f00 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x2903f4c27f04 @    4 : c4                Star0 
 4553 E> 0x2903f4c27f05 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x2903f4c27f09 @    9 : c3                Star1 
 4553 E> 0x2903f4c27f0a @   10 : 5d f9 02 03       CallProperty0 r1, <this>, [3]
         0x2903f4c27f0e @   14 : 33 fa 02 05       DefineNamedOwnProperty r0, [2], [5]
 4611 E> 0x2903f4c27f12 @   18 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0x2903f4c27f16 @   22 : 33 fa 03 09       DefineNamedOwnProperty r0, [3], [9]
 4663 E> 0x2903f4c27f1a @   26 : 2d 02 04 0b       GetNamedProperty <this>, [4], [11]
         0x2903f4c27f1e @   30 : c2                Star2 
 4678 E> 0x2903f4c27f1f @   31 : 2d f8 05 0d       GetNamedProperty r2, [5], [13]
         0x2903f4c27f23 @   35 : c3                Star1 
         0x2903f4c27f24 @   36 : 80 06 00 02       CreateClosure [6], [0], #2
         0x2903f4c27f28 @   40 : c1                Star3 
 4678 E> 0x2903f4c27f29 @   41 : 5e f9 f8 f7 0f    CallProperty1 r1, r2, r3, [15]
         0x2903f4c27f2e @   46 : 33 fa 04 11       DefineNamedOwnProperty r0, [4], [17]
         0x2903f4c27f32 @   50 : 0b fa             Ldar r0
 4719 S> 0x2903f4c27f34 @   52 : a9                Return 
Constant pool (size = 7)
0x2903f4c27f39: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 7
           0: 0x2903f4c27f81 <ObjectBoilerplateDescription[7]>
           1: 0x2903f4c257d9 <String[18]: #serializeConstants>
           2: 0x3aaf854c89d1 <String[9]: #constants>
           3: 0x2903f4c259b1 <String[17]: #currentTickNumber>
           4: 0x2903f4c25991 <String[14]: #lastTickErrors>
           5: 0x3aaf854c9ea9 <String[3]: #map>
           6: 0x2903f4c28001 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 24)
0x2903f4c28111 <ByteArray[24]>
Boilerplate at 0x2903f4c27f81: 
0x2903f4c27f81: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 7
           0: 8
           1: 0x3aaf854c89d1 <String[9]: #constants>
           2: 0x298496fc1501 <Odd Oddball: uninitialized>
           3: 0x2903f4c259b1 <String[17]: #currentTickNumber>
           4: 0x298496fc1501 <Odd Oddball: uninitialized>
           5: 0x2903f4c25991 <String[14]: #lastTickErrors>
           6: 0x298496fc1501 <Odd Oddball: uninitialized>
0x2903f4c28001 points to: [0x2903f4c28070]
=== [0x2903f4c28070] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 4699 S> 0x2903f4c28070 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 4706 S> 0x2903f4c28074 @    4 : a9                Return 
Constant pool (size = 1)
0x2903f4c28079: [FixedArray] in OldSpace
 - map: 0x298496fc12e1 <Map>
 - length: 1
           0: 0x298496fc5721 <String[7]: #message>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2903f4c28091 <ByteArray[8]>
Boilerplate at 0x2903f4c28209: 
0x2903f4c28209: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 31
           0: 8
           1: 0x2903f4c25a81 <String[11]: #RANDOM_SEED>
           2: 0x298496fc1501 <Odd Oddball: uninitialized>
           3: 0x2903f4c27479 <String[10]: #TICK_COUNT>
           4: 1000
           5: 0x2903f4c28311 <String[16]: #SCORE_MULTIPLIER>
           6: 1
           7: 0x2903f4c28331 <String[13]: #HEALTH_POINTS>
           8: 0x298496fc1501 <Odd Oddball: uninitialized>
           9: 0x2903f4c27d61 <String[16]: #WORLD_DIMENSIONS>
          10: 0x298496fc1501 <Odd Oddball: uninitialized>
          11: 0x2903f4c28351 <String[30]: #CANNON_INITIAL_ORIENTATION_DEG>
          12: 0
          13: 0x2903f4c28381 <String[15]: #CANNON_POSITION>
          14: 0x298496fc1501 <Odd Oddball: uninitialized>
          15: 0x2903f4c283a1 <String[19]: #CANNON_MAX_ROTATION>
          16: 180
          17: 0x2903f4c27d81 <String[21]: #CANNON_COOLDOWN_TICKS>
          18: 10
          19: 0x2903f4c27cb9 <String[12]: #BULLET_SPEED>
          20: 20
          21: 0x2903f4c27cd9 <String[11]: #BULLET_SIZE>
          22: 5
          23: 0x2903f4c283c9 <String[28]: #METEOR_GENERATION_CONE_ANGLE>
          24: 30
          25: 0x2903f4c283f9 <String[32]: #METEOR_GENERATION_DELAY_IN_TICKS>
          26: 0x2903f4c28429 <ObjectBoilerplateDescription[5]>
          27: 0x2903f4c28491 <String[31]: #CHEAT_DISABLE_METEOR_GENERATION>
          28: 0x298496fc1789 <false>
          29: 0x2903f4c284c1 <String[34]: #CHEAT_GENERATE_PREDICTABLE_METEORS>
          30: 0x2903f4c284f9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x298496fc1329 <FixedArray[0]>>
Boilerplate at 0x2903f4c28541: 
0x2903f4c28541: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x298496fc2059 <Map>
 - length: 5
           0: 8
           1: 0x2903f4c27d31 <String[5]: #width>
           2: 0x298496fc1501 <Odd Oddball: uninitialized>
           3: 0x2903f4c27d49 <String[6]: #height>
           4: 0x298496fc1501 <Odd Oddball: uninitialized>
<< OUTPUTTING DISASSEMBLY END >>
