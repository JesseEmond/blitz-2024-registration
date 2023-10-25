<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2cfde6d24d18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2cfde6d24d18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2cfde6d24d1c @    4 : c4                Star0 
 5684 S> 0x2cfde6d24d1d @    5 : a9                Return 
Constant pool (size = 1)
0x2cfde6d24d21: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 1
           0: 0x2cfde6d24d39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2cfde6d28519 <ByteArray[8]>
0x2cfde6d24d39 points to: [0x2cfde6d24da8]
=== [0x2cfde6d24da8] DISASSEMBLY ===
Parameter count 6
Register count 22
Frame size 176
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2cfde6d24da8 @    0 : 83 00 05          CreateFunctionContext [0], [5]
         0x2cfde6d24dab @    3 : 1a f7             PushContext r3
         0x2cfde6d24dad @    5 : 10                LdaTheHole 
         0x2cfde6d24dae @    6 : 25 02             StaCurrentContextSlot [2]
         0x2cfde6d24db0 @    8 : 10                LdaTheHole 
         0x2cfde6d24db1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x2cfde6d24db3 @   11 : 10                LdaTheHole 
         0x2cfde6d24db4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x2cfde6d24db6 @   14 : 10                LdaTheHole 
         0x2cfde6d24db7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x2cfde6d24db9 @   17 : 10                LdaTheHole 
         0x2cfde6d24dba @   18 : 25 06             StaCurrentContextSlot [6]
   84 S> 0x2cfde6d24dbc @   20 : 21 01 00          LdaGlobal [1], [0]
         0x2cfde6d24dbf @   23 : bf                Star5 
   91 E> 0x2cfde6d24dc0 @   24 : 2d f5 02 02       GetNamedProperty r5, [2], [2]
         0x2cfde6d24dc4 @   28 : c0                Star4 
         0x2cfde6d24dc5 @   29 : 13 03             LdaConstant [3]
         0x2cfde6d24dc7 @   31 : bd                Star7 
  106 E> 0x2cfde6d24dc8 @   32 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2cfde6d24dcc @   36 : bc                Star8 
         0x2cfde6d24dcd @   37 : 19 03 f4          Mov a0, r6
   91 E> 0x2cfde6d24dd0 @   40 : 5c f6 f5 04 05    CallProperty r4, r5-r8, [5]
  147 S> 0x2cfde6d24dd5 @   45 : 0e                LdaUndefined 
  174 E> 0x2cfde6d24dd6 @   46 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  201 S> 0x2cfde6d24dda @   50 : 13 06             LdaConstant [6]
         0x2cfde6d24ddc @   52 : bf                Star5 
  201 E> 0x2cfde6d24ddd @   53 : 62 04 f5 09       CallUndefinedReceiver1 a1, r5, [9]
  201 E> 0x2cfde6d24de1 @   57 : 25 02             StaCurrentContextSlot [2]
  243 S> 0x2cfde6d24de3 @   59 : 13 07             LdaConstant [7]
         0x2cfde6d24de5 @   61 : bf                Star5 
  243 E> 0x2cfde6d24de6 @   62 : 62 04 f5 0b       CallUndefinedReceiver1 a1, r5, [11]
  243 E> 0x2cfde6d24dea @   66 : 25 03             StaCurrentContextSlot [3]
  279 S> 0x2cfde6d24dec @   68 : 13 08             LdaConstant [8]
         0x2cfde6d24dee @   70 : bf                Star5 
  279 E> 0x2cfde6d24def @   71 : 62 04 f5 0d       CallUndefinedReceiver1 a1, r5, [13]
  279 E> 0x2cfde6d24df3 @   75 : 25 04             StaCurrentContextSlot [4]
  316 S> 0x2cfde6d24df5 @   77 : 13 09             LdaConstant [9]
         0x2cfde6d24df7 @   79 : bf                Star5 
  316 E> 0x2cfde6d24df8 @   80 : 62 04 f5 0f       CallUndefinedReceiver1 a1, r5, [15]
         0x2cfde6d24dfc @   84 : c3                Star1 
  354 S> 0x2cfde6d24dfd @   85 : 13 0a             LdaConstant [10]
         0x2cfde6d24dff @   87 : bf                Star5 
  354 E> 0x2cfde6d24e00 @   88 : 62 04 f5 11       CallUndefinedReceiver1 a1, r5, [17]
  354 E> 0x2cfde6d24e04 @   92 : 25 05             StaCurrentContextSlot [5]
  398 S> 0x2cfde6d24e06 @   94 : 13 0b             LdaConstant [11]
         0x2cfde6d24e08 @   96 : bf                Star5 
  398 E> 0x2cfde6d24e09 @   97 : 62 04 f5 13       CallUndefinedReceiver1 a1, r5, [19]
  398 E> 0x2cfde6d24e0d @  101 : 25 06             StaCurrentContextSlot [6]
         0x2cfde6d24e0f @  103 : 81 0c             CreateBlockContext [12]
         0x2cfde6d24e11 @  105 : 1a f6             PushContext r4
         0x2cfde6d24e13 @  107 : 10                LdaTheHole 
         0x2cfde6d24e14 @  108 : 25 02             StaCurrentContextSlot [2]
         0x2cfde6d24e16 @  110 : 10                LdaTheHole 
         0x2cfde6d24e17 @  111 : bc                Star8 
         0x2cfde6d24e18 @  112 : 80 0e 00 02       CreateClosure [14], [0], #2
         0x2cfde6d24e1c @  116 : bf                Star5 
         0x2cfde6d24e1d @  117 : 13 0d             LdaConstant [13]
         0x2cfde6d24e1f @  119 : be                Star6 
         0x2cfde6d24e20 @  120 : 80 0f 01 02       CreateClosure [15], [1], #2
         0x2cfde6d24e24 @  124 : bb                Star9 
         0x2cfde6d24e25 @  125 : 80 10 02 02       CreateClosure [16], [2], #2
         0x2cfde6d24e29 @  129 : ba                Star10 
         0x2cfde6d24e2a @  130 : 80 11 03 02       CreateClosure [17], [3], #2
         0x2cfde6d24e2e @  134 : b9                Star11 
         0x2cfde6d24e2f @  135 : 80 12 04 02       CreateClosure [18], [4], #2
         0x2cfde6d24e33 @  139 : b8                Star12 
         0x2cfde6d24e34 @  140 : 80 13 05 02       CreateClosure [19], [5], #2
         0x2cfde6d24e38 @  144 : b7                Star13 
         0x2cfde6d24e39 @  145 : 80 14 06 02       CreateClosure [20], [6], #2
         0x2cfde6d24e3d @  149 : b6                Star14 
         0x2cfde6d24e3e @  150 : 80 15 07 02       CreateClosure [21], [7], #2
         0x2cfde6d24e42 @  154 : b5                Star15 
         0x2cfde6d24e43 @  155 : 80 16 08 02       CreateClosure [22], [8], #2
         0x2cfde6d24e47 @  159 : 18 ea             Star r16
         0x2cfde6d24e49 @  161 : 80 17 09 02       CreateClosure [23], [9], #2
         0x2cfde6d24e4d @  165 : 18 e9             Star r17
         0x2cfde6d24e4f @  167 : 80 18 0a 02       CreateClosure [24], [10], #2
         0x2cfde6d24e53 @  171 : 18 e8             Star r18
         0x2cfde6d24e55 @  173 : 80 19 0b 02       CreateClosure [25], [11], #2
         0x2cfde6d24e59 @  177 : 18 e7             Star r19
         0x2cfde6d24e5b @  179 : 80 1a 0c 02       CreateClosure [26], [12], #2
         0x2cfde6d24e5f @  183 : 18 e6             Star r20
         0x2cfde6d24e61 @  185 : 80 1b 0d 02       CreateClosure [27], [13], #2
         0x2cfde6d24e65 @  189 : 18 e5             Star r21
         0x2cfde6d24e67 @  191 : 19 f5 f3          Mov r5, r7
         0x2cfde6d24e6a @  194 : 65 28 00 f4 10    CallRuntime [DefineClass], r6-r21
         0x2cfde6d24e6f @  199 : be                Star6 
         0x2cfde6d24e70 @  200 : 0b f3             Ldar r7
         0x2cfde6d24e72 @  202 : 25 02             StaCurrentContextSlot [2]
         0x2cfde6d24e74 @  204 : 1b f6             PopContext r4
         0x2cfde6d24e76 @  206 : c2                Star2 
 4728 S> 0x2cfde6d24e77 @  207 : 0b f8             Ldar r2
 4755 E> 0x2cfde6d24e79 @  209 : 32 03 05 07       SetNamedProperty a0, [5], [7]
 4777 S> 0x2cfde6d24e7d @  213 : 19 f8 fa          Mov r2, r0
 4802 S> 0x2cfde6d24e80 @  216 : 00 0d b0 04       LdaSmi.Wide [1200]
 4833 E> 0x2cfde6d24e84 @  220 : 32 fa 1c 15       SetNamedProperty r0, [28], [21]
 4841 S> 0x2cfde6d24e88 @  224 : 00 0d 20 03       LdaSmi.Wide [800]
 4873 E> 0x2cfde6d24e8c @  228 : 32 fa 1d 17       SetNamedProperty r0, [29], [23]
 4880 S> 0x2cfde6d24e90 @  232 : 7c 1e 19 0c       CreateObjectLiteral [30], [25], #12
         0x2cfde6d24e94 @  236 : bf                Star5 
 4941 E> 0x2cfde6d24e95 @  237 : 21 1f 1a          LdaGlobal [31], [26]
         0x2cfde6d24e98 @  240 : bd                Star7 
 4946 E> 0x2cfde6d24e99 @  241 : 2d f3 20 1c       GetNamedProperty r7, [32], [28]
         0x2cfde6d24e9d @  245 : be                Star6 
 4946 E> 0x2cfde6d24e9e @  246 : 5d f4 f3 1e       CallProperty0 r6, r7, [30]
         0x2cfde6d24ea2 @  250 : 33 f5 21 20       DefineNamedOwnProperty r5, [33], [32]
 5022 E> 0x2cfde6d24ea6 @  254 : 21 22 22          LdaGlobal [34], [34]
         0x2cfde6d24ea9 @  257 : 33 f5 23 24       DefineNamedOwnProperty r5, [35], [36]
 5054 E> 0x2cfde6d24ead @  261 : 7c 24 26 29       CreateObjectLiteral [36], [38], #41
         0x2cfde6d24eb1 @  265 : be                Star6 
 5074 E> 0x2cfde6d24eb2 @  266 : 2d f8 1c 27       GetNamedProperty r2, [28], [39]
         0x2cfde6d24eb6 @  270 : 33 f4 25 29       DefineNamedOwnProperty r6, [37], [41]
 5106 E> 0x2cfde6d24eba @  274 : 2d f8 1d 2b       GetNamedProperty r2, [29], [43]
         0x2cfde6d24ebe @  278 : 33 f4 26 2d       DefineNamedOwnProperty r6, [38], [45]
         0x2cfde6d24ec2 @  282 : 0b f4             Ldar r6
         0x2cfde6d24ec4 @  284 : 33 f5 27 2f       DefineNamedOwnProperty r5, [39], [47]
 5225 E> 0x2cfde6d24ec8 @  288 : 2d f9 28 31       GetNamedProperty r1, [40], [49]
         0x2cfde6d24ecc @  292 : be                Star6 
         0x2cfde6d24ecd @  293 : 00 0d 8c 00       LdaSmi.Wide [140]
         0x2cfde6d24ed1 @  297 : bd                Star7 
 5240 E> 0x2cfde6d24ed2 @  298 : 2d f8 1d 2b       GetNamedProperty r2, [29], [43]
 5253 E> 0x2cfde6d24ed6 @  302 : 48 02 33          DivSmi [2], [51]
         0x2cfde6d24ed9 @  305 : bc                Star8 
         0x2cfde6d24eda @  306 : 0b f4             Ldar r6
 5212 E> 0x2cfde6d24edc @  308 : 69 f4 f3 02 34    Construct r6, r7-r8, [52]
         0x2cfde6d24ee1 @  313 : 33 f5 29 36       DefineNamedOwnProperty r5, [41], [54]
         0x2cfde6d24ee5 @  317 : 0b f5             Ldar r5
 4920 E> 0x2cfde6d24ee7 @  319 : 32 fa 2a 38       SetNamedProperty r0, [42], [56]
         0x2cfde6d24eeb @  323 : 0e                LdaUndefined 
 5681 S> 0x2cfde6d24eec @  324 : a9                Return 
Constant pool (size = 43)
0x2cfde6d24ef1: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 43
           0: 0x2cfde6d25059 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1da520b45ab9 <String[6]: #Object>
           2: 0x1da520b44c11 <String[14]: #defineProperty>
           3: 0x2cfde6d25171 <String[10]: #__esModule>
           4: 0x2cfde6d25191 <ObjectBoilerplateDescription[3]>
           5: 0x2cfde6d251b9 <String[18]: #Blitz2024Challenge>
           6: 0x2cfde6d251e1 <String[13]: #@blitz/engine>
           7: 0x2cfde6d25201 <String[7]: #./error>
           8: 0x2cfde6d25219 <String[7]: #./world>
           9: 0x2cfde6d25231 <String[8]: #./vector>
          10: 0x2cfde6d25249 <String[8]: #./random>
          11: 0x2cfde6d25261 <String[14]: #./meteor_infos>
          12: 0x2cfde6d25281 <ScopeInfo CLASS_SCOPE>
          13: 0x2cfde6d252c9 <FixedArray[7]>
          14: 0x2cfde6d256f1 <SharedFunctionInfo Blitz2024Challenge>
          15: 0x2cfde6d25bd9 <SharedFunctionInfo registerTeam>
          16: 0x2cfde6d25d11 <SharedFunctionInfo getGameResults>
          17: 0x2cfde6d25ff9 <SharedFunctionInfo setup>
          18: 0x2cfde6d26269 <SharedFunctionInfo playOneTick>
          19: 0x2cfde6d266b1 <SharedFunctionInfo fetchAndApplyPlayerCommands>
          20: 0x2cfde6d26d79 <SharedFunctionInfo applyActions>
          21: 0x2cfde6d27249 <SharedFunctionInfo isGameComplete>
          22: 0x2cfde6d27401 <SharedFunctionInfo updateGame>
          23: 0x2cfde6d27549 <SharedFunctionInfo addStatsForTeam>
          24: 0x2cfde6d27629 <SharedFunctionInfo serializeForTeam>
          25: 0x2cfde6d277a1 <SharedFunctionInfo serializeForViewer>
          26: 0x2cfde6d278f1 <SharedFunctionInfo serializeConstants>
          27: 0x2cfde6d27d61 <SharedFunctionInfo serializeCommon>
          28: 0x2cfde6d28099 <String[11]: #WORLD_WIDTH>
          29: 0x2cfde6d280b9 <String[12]: #WORLD_HEIGHT>
          30: 0x2cfde6d280d9 <ObjectBoilerplateDescription[31]>
          31: 0x3340fd3da991 <String[4]: #Math>
          32: 0x3340fd3daba1 <String[6]: #random>
          33: 0x2cfde6d25951 <String[11]: #RANDOM_SEED>
          34: 0x1da520b45381 <String[8]: #Infinity>
          35: 0x2cfde6d28201 <String[13]: #HEALTH_POINTS>
          36: 0x2cfde6d28411 <ObjectBoilerplateDescription[5]>
          37: 0x2cfde6d27c01 <String[5]: #width>
          38: 0x2cfde6d27c19 <String[6]: #height>
          39: 0x2cfde6d27c31 <String[16]: #WORLD_DIMENSIONS>
          40: 0x2cfde6d28449 <String[6]: #Vector>
          41: 0x2cfde6d28251 <String[15]: #CANNON_POSITION>
          42: 0x2cfde6d258c1 <String[20]: #DEFAULT_GAME_OPTIONS>
Handler Table (size = 0)
Source Position Table (size = 111)
0x2cfde6d28461 <ByteArray[111]>
Boilerplate at 0x2cfde6d25191: 
0x2cfde6d25191: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 3
           0: 8
           1: 0x1da520b46419 <String[5]: #value>
           2: 0x1da520b41729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x2cfde6d252c9 has 7 elements:
0x2cfde6d252c9: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 7
           0: 16
           1: 0x2cfde6d25311 <DescriptorArray[4]>
           2: 0x1da520b43301 <NumberDictionary[7]>
           3: 0x1da520b41329 <FixedArray[0]>
           4: 0x2cfde6d253d1 <DescriptorArray[14]>
           5: 0x1da520b43301 <NumberDictionary[7]>
           6: 0x1da520b41329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x10 (16)
Element[1]
0x2cfde6d25311: [DescriptorArray] in OldSpace
 - map: 0x1da520b47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1da520b455f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x3340fd3f4fe1 <AccessorInfo>
  [1]: 0x1da520b458f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x3340fd3f4f71 <AccessorInfo>
  [2]: 0x1da520b45cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x3340fd3f5051 <AccessorInfo>
  [3]: 0x1da520b465f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x2cfde6d253b9 <ClassPositions 425, 4727>
Element[2]
0x1da520b43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x1da520b41329: [FixedArray] in ReadOnlySpace
 - map: 0x1da520b412e1 <Map>
 - length: 0
Element[4]
0x2cfde6d253d1: [DescriptorArray] in OldSpace
 - map: 0x1da520b47761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 14
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1da520b44a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 5, attrs: [W_C]) @ 1
  [1]: 0x2cfde6d25539: [String] in OldSpace: #registerTeam (const data descriptor, p: 6, attrs: [W_C]) @ 3
  [2]: 0x2cfde6d25559: [String] in OldSpace: #getGameResults (const data descriptor, p: 11, attrs: [W_C]) @ 4
  [3]: 0x3340fd3c88a1: [String] in OldSpace: #setup (const data descriptor, p: 8, attrs: [W_C]) @ 5
  [4]: 0x2cfde6d25591: [String] in OldSpace: #playOneTick (const data descriptor, p: 13, attrs: [W_C]) @ 6
  [5]: 0x2cfde6d255b1: [String] in OldSpace: #fetchAndApplyPlayerCommands (const data descriptor, p: 4, attrs: [W_C]) @ 7
  [6]: 0x2cfde6d255e1: [String] in OldSpace: #applyActions (const data descriptor, p: 2, attrs: [W_C]) @ 8
  [7]: 0x2cfde6d25601: [String] in OldSpace: #isGameComplete (const data descriptor, p: 12, attrs: [W_C]) @ 9
  [8]: 0x2cfde6d25621: [String] in OldSpace: #updateGame (const data descriptor, p: 7, attrs: [W_C]) @ 10
  [9]: 0x2cfde6d25641: [String] in OldSpace: #addStatsForTeam (const data descriptor, p: 10, attrs: [W_C]) @ 11
  [10]: 0x2cfde6d25661: [String] in OldSpace: #serializeForTeam (const data descriptor, p: 3, attrs: [W_C]) @ 12
  [11]: 0x2cfde6d25681: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 0, attrs: [W_C]) @ 13
  [12]: 0x2cfde6d256a9: [String] in OldSpace: #serializeConstants (const data descriptor, p: 9, attrs: [W_C]) @ 14
  [13]: 0x2cfde6d256d1: [String] in OldSpace: #serializeCommon (const data descriptor, p: 1, attrs: [W_C]) @ 15
Element[5]
0x1da520b43301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x1da520b41329: [FixedArray] in ReadOnlySpace
 - map: 0x1da520b412e1 <Map>
 - length: 0
0x2cfde6d256f1 points to: [0x2cfde6d25760]
=== [0x2cfde6d25760] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  495 S> 0x2cfde6d25760 @    0 : 7b 00             CreateEmptyArrayLiteral [0]
  515 E> 0x2cfde6d25762 @    2 : 32 02 00 01       SetNamedProperty <this>, [0], [1]
  529 S> 0x2cfde6d25766 @    6 : 0d 01             LdaSmi [1]
  552 E> 0x2cfde6d25768 @    8 : 32 02 01 03       SetNamedProperty <this>, [1], [3]
  565 S> 0x2cfde6d2576c @   12 : 0b 03             Ldar a0
  577 E> 0x2cfde6d2576e @   14 : 32 02 02 05       SetNamedProperty <this>, [2], [5]
  595 S> 0x2cfde6d25772 @   18 : 16 02             LdaCurrentContextSlot [2]
  627 E> 0x2cfde6d25774 @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2cfde6d25776 @   22 : c2                Star2 
  646 E> 0x2cfde6d25777 @   23 : 2d f8 04 07       GetNamedProperty r2, [4], [7]
         0x2cfde6d2577b @   27 : c2                Star2 
         0x2cfde6d2577c @   28 : 7e f8 29 09       CloneObject r2, #41, [9]
         0x2cfde6d25780 @   32 : c3                Star1 
         0x2cfde6d25781 @   33 : 19 f9 f8          Mov r1, r2
         0x2cfde6d25784 @   36 : 19 04 f7          Mov a1, r3
  683 E> 0x2cfde6d25787 @   39 : 68 0e f8 02       InvokeIntrinsic [_CopyDataProperties], r2-r3
         0x2cfde6d2578b @   43 : 0b f8             Ldar r2
  608 E> 0x2cfde6d2578d @   45 : 32 02 05 0b       SetNamedProperty <this>, [5], [11]
  711 S> 0x2cfde6d25791 @   49 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
         0x2cfde6d25795 @   53 : aa 06             ThrowReferenceErrorIfHole [6]
         0x2cfde6d25797 @   55 : c3                Star1 
  720 E> 0x2cfde6d25798 @   56 : 2d f9 07 0d       GetNamedProperty r1, [7], [13]
         0x2cfde6d2579c @   60 : c3                Star1 
  727 E> 0x2cfde6d2579d @   61 : 2d f9 08 0f       GetNamedProperty r1, [8], [15]
         0x2cfde6d257a1 @   65 : c4                Star0 
         0x2cfde6d257a2 @   66 : 13 09             LdaConstant [9]
         0x2cfde6d257a4 @   68 : c2                Star2 
  753 E> 0x2cfde6d257a5 @   69 : 2d 02 05 12       GetNamedProperty <this>, [5], [18]
         0x2cfde6d257a9 @   73 : c1                Star3 
  761 E> 0x2cfde6d257aa @   74 : 2d f7 0a 14       GetNamedProperty r3, [10], [20]
         0x2cfde6d257ae @   78 : 77                ToString 
         0x2cfde6d257af @   79 : 39 f8 11          Add r2, [17]
         0x2cfde6d257b2 @   82 : c2                Star2 
  727 E> 0x2cfde6d257b3 @   83 : 5e fa f9 f8 16    CallProperty1 r0, r1, r2, [22]
  785 S> 0x2cfde6d257b8 @   88 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
  800 E> 0x2cfde6d257bc @   92 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x2cfde6d257be @   94 : c3                Star1 
  809 E> 0x2cfde6d257bf @   95 : 2d f9 0c 18       GetNamedProperty r1, [12], [24]
         0x2cfde6d257c3 @   99 : c3                Star1 
  821 E> 0x2cfde6d257c4 @  100 : 2d 02 05 1a       GetNamedProperty <this>, [5], [26]
         0x2cfde6d257c8 @  104 : c2                Star2 
  829 E> 0x2cfde6d257c9 @  105 : 2d f8 0a 1c       GetNamedProperty r2, [10], [28]
         0x2cfde6d257cd @  109 : c2                Star2 
         0x2cfde6d257ce @  110 : 0b f9             Ldar r1
  796 E> 0x2cfde6d257d0 @  112 : 69 f9 f8 01 1e    Construct r1, r2-r2, [30]
  794 E> 0x2cfde6d257d5 @  117 : 32 02 0d 20       SetNamedProperty <this>, [13], [32]
         0x2cfde6d257d9 @  121 : 0e                LdaUndefined 
  847 S> 0x2cfde6d257da @  122 : a9                Return 
Constant pool (size = 14)
0x2cfde6d257e1: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 14
           0: 0x2cfde6d25861 <String[14]: #lastTickErrors>
           1: 0x2cfde6d25881 <String[17]: #currentTickNumber>
           2: 0x2cfde6d258a9 <String[6]: #engine>
           3: 0x2cfde6d251b9 <String[18]: #Blitz2024Challenge>
           4: 0x2cfde6d258c1 <String[20]: #DEFAULT_GAME_OPTIONS>
           5: 0x3340fd3ccbb9 <String[7]: #options>
           6: 0x2cfde6d250f1 <String[8]: #engine_1>
           7: 0x3340fd3c6461 <String[6]: #logger>
           8: 0x3340fd3dc1f9 <String[4]: #info>
           9: 0x2cfde6d25931 <String[13]: #Random seed: >
          10: 0x2cfde6d25951 <String[11]: #RANDOM_SEED>
          11: 0x2cfde6d25139 <String[8]: #random_1>
          12: 0x2cfde6d25971 <String[6]: #Random>
          13: 0x3340fd3e8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 61)
0x2cfde6d259a1 <ByteArray[61]>
0x2cfde6d25bd9 points to: [0x2cfde6d25c48]
=== [0x2cfde6d25c48] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  882 S> 0x2cfde6d25c48 @    0 : 0b 03             Ldar a0
  899 E> 0x2cfde6d25c4a @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x2cfde6d25c4e @    6 : 0e                LdaUndefined 
  911 S> 0x2cfde6d25c4f @    7 : a9                Return 
Constant pool (size = 1)
0x2cfde6d25c51: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 1
           0: 0x2cfde6d25c69 <String[11]: #_engineTeam>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2cfde6d25c89 <ByteArray[9]>
0x2cfde6d25d11 points to: [0x2cfde6d25d80]
=== [0x2cfde6d25d80] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  944 S> 0x2cfde6d25d80 @    0 : 79 00 00 04       CreateArrayLiteral [0], [0], #4
         0x2cfde6d25d84 @    4 : c3                Star1 
         0x2cfde6d25d85 @    5 : 0c                LdaZero 
         0x2cfde6d25d86 @    6 : c4                Star0 
         0x2cfde6d25d87 @    7 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x2cfde6d25d8b @   11 : c2                Star2 
 1020 E> 0x2cfde6d25d8c @   12 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2cfde6d25d90 @   16 : c1                Star3 
         0x2cfde6d25d91 @   17 : 9e 08             JumpIfUndefinedOrNull [8] (0x2cfde6d25d99 @ 25)
 1025 E> 0x2cfde6d25d93 @   19 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x2cfde6d25d97 @   23 : 8a 03             Jump [3] (0x2cfde6d25d9a @ 26)
         0x2cfde6d25d99 @   25 : 0e                LdaUndefined 
         0x2cfde6d25d9a @   26 : 9e 04             JumpIfUndefinedOrNull [4] (0x2cfde6d25d9e @ 30)
         0x2cfde6d25d9c @   28 : 8a 03             Jump [3] (0x2cfde6d25d9f @ 31)
         0x2cfde6d25d9e @   30 : 0c                LdaZero 
         0x2cfde6d25d9f @   31 : 33 f8 03 06       DefineNamedOwnProperty r2, [3], [6]
 1068 E> 0x2cfde6d25da3 @   35 : 2d 02 04 08       GetNamedProperty <this>, [4], [8]
         0x2cfde6d25da7 @   39 : c1                Star3 
         0x2cfde6d25da8 @   40 : 9e 08             JumpIfUndefinedOrNull [8] (0x2cfde6d25db0 @ 48)
 1079 E> 0x2cfde6d25daa @   42 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x2cfde6d25dae @   46 : 8a 03             Jump [3] (0x2cfde6d25db1 @ 49)
         0x2cfde6d25db0 @   48 : 0e                LdaUndefined 
         0x2cfde6d25db1 @   49 : 9e 04             JumpIfUndefinedOrNull [4] (0x2cfde6d25db5 @ 53)
         0x2cfde6d25db3 @   51 : 8a 04             Jump [4] (0x2cfde6d25db7 @ 55)
         0x2cfde6d25db5 @   53 : 13 06             LdaConstant [6]
         0x2cfde6d25db7 @   55 : 33 f8 07 0c       DefineNamedOwnProperty r2, [7], [12]
 1130 E> 0x2cfde6d25dbb @   59 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x2cfde6d25dbf @   63 : c1                Star3 
         0x2cfde6d25dc0 @   64 : 9e 08             JumpIfUndefinedOrNull [8] (0x2cfde6d25dc8 @ 72)
 1141 E> 0x2cfde6d25dc2 @   66 : 2d f7 08 10       GetNamedProperty r3, [8], [16]
         0x2cfde6d25dc6 @   70 : 8a 03             Jump [3] (0x2cfde6d25dc9 @ 73)
         0x2cfde6d25dc8 @   72 : 0e                LdaUndefined 
         0x2cfde6d25dc9 @   73 : 9e 04             JumpIfUndefinedOrNull [4] (0x2cfde6d25dcd @ 77)
         0x2cfde6d25dcb @   75 : 8a 04             Jump [4] (0x2cfde6d25dcf @ 79)
         0x2cfde6d25dcd @   77 : 13 06             LdaConstant [6]
         0x2cfde6d25dcf @   79 : 33 f8 09 12       DefineNamedOwnProperty r2, [9], [18]
         0x2cfde6d25dd3 @   83 : 0b f8             Ldar r2
         0x2cfde6d25dd5 @   85 : 36 f9 fa 14       StaInArrayLiteral r1, r0, [20]
         0x2cfde6d25dd9 @   89 : 0b f9             Ldar r1
 1179 S> 0x2cfde6d25ddb @   91 : a9                Return 
Constant pool (size = 10)
0x2cfde6d25de1: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 10
           0: 0x2cfde6d25e41 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x2cfde6d25e59 <FixedArray[1]>>
           1: 0x2cfde6d25e71 <ObjectBoilerplateDescription[9]>
           2: 0x2cfde6d25f29 <String[5]: #world>
           3: 0x2cfde6d25ee1 <String[5]: #score>
           4: 0x2cfde6d25c69 <String[11]: #_engineTeam>
           5: 0x2cfde6d25f41 <String[10]: #externalId>
           6: 0x1da520b417d1 <String[0]: #>
           7: 0x2cfde6d25ef9 <String[6]: #teamId>
           8: 0x1da520b458f1 <String[4]: #name>
           9: 0x2cfde6d25f11 <String[8]: #teamName>
Handler Table (size = 0)
Source Position Table (size = 23)
0x2cfde6d25f61 <ByteArray[23]>
Boilerplate at 0x2cfde6d25e71: 
0x2cfde6d25e71: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 9
           0: 8
           1: 0x2cfde6d25ec9 <String[4]: #rank>
           2: 1
           3: 0x2cfde6d25ee1 <String[5]: #score>
           4: 0x1da520b41501 <Odd Oddball: uninitialized>
           5: 0x2cfde6d25ef9 <String[6]: #teamId>
           6: 0x1da520b41501 <Odd Oddball: uninitialized>
           7: 0x2cfde6d25f11 <String[8]: #teamName>
           8: 0x1da520b41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x2cfde6d25ff9 points to: [0x2cfde6d26068]
=== [0x2cfde6d26068] DISASSEMBLY ===
Parameter count 1
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
         0x2cfde6d26068 @    0 : 19 fe f9          Mov <closure>, r1
         0x2cfde6d2606b @    3 : 19 02 f8          Mov <this>, r2
 1201 E> 0x2cfde6d2606e @    6 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x2cfde6d26072 @   10 : c4                Star0 
         0x2cfde6d26073 @   11 : 19 ff f9          Mov <context>, r1
 1223 S> 0x2cfde6d26076 @   14 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2cfde6d2607a @   18 : 1d                TestUndetectable 
         0x2cfde6d2607b @   19 : 99 11             JumpIfFalse [17] (0x2cfde6d2608c @ 36)
 1256 S> 0x2cfde6d2607d @   21 : 21 01 02          LdaGlobal [1], [2]
         0x2cfde6d26080 @   24 : c2                Star2 
         0x2cfde6d26081 @   25 : 13 02             LdaConstant [2]
         0x2cfde6d26083 @   27 : c1                Star3 
         0x2cfde6d26084 @   28 : 0b f8             Ldar r2
 1262 E> 0x2cfde6d26086 @   30 : 69 f8 f7 01 04    Construct r2, r3-r3, [4]
 1256 E> 0x2cfde6d2608b @   35 : a7                Throw 
 1304 S> 0x2cfde6d2608c @   36 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 1321 E> 0x2cfde6d26090 @   40 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2cfde6d26092 @   42 : c1                Star3 
 1329 E> 0x2cfde6d26093 @   43 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x2cfde6d26097 @   47 : c1                Star3 
 1340 E> 0x2cfde6d26098 @   48 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x2cfde6d2609c @   52 : c0                Star4 
 1354 E> 0x2cfde6d2609d @   53 : 2d 02 06 0a       GetNamedProperty <this>, [6], [10]
         0x2cfde6d260a1 @   57 : bf                Star5 
         0x2cfde6d260a2 @   58 : 0b f7             Ldar r3
 1317 E> 0x2cfde6d260a4 @   60 : 69 f7 f6 02 0c    Construct r3, r4-r5, [12]
 1315 E> 0x2cfde6d260a9 @   65 : 32 02 07 0e       SetNamedProperty <this>, [7], [14]
         0x2cfde6d260ad @   69 : 0e                LdaUndefined 
         0x2cfde6d260ae @   70 : c1                Star3 
         0x2cfde6d260af @   71 : 19 fa f8          Mov r0, r2
         0x2cfde6d260b2 @   74 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1364 S> 0x2cfde6d260b6 @   78 : a9                Return 
         0x2cfde6d260b7 @   79 : c2                Star2 
         0x2cfde6d260b8 @   80 : 82 f8 08          CreateCatchContext r2, [8]
         0x2cfde6d260bb @   83 : c3                Star1 
         0x2cfde6d260bc @   84 : 10                LdaTheHole 
         0x2cfde6d260bd @   85 : a6                SetPendingMessage 
         0x2cfde6d260be @   86 : 0b f9             Ldar r1
         0x2cfde6d260c0 @   88 : 1a f8             PushContext r2
         0x2cfde6d260c2 @   90 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d260c4 @   92 : c0                Star4 
         0x2cfde6d260c5 @   93 : 19 fa f7          Mov r0, r3
         0x2cfde6d260c8 @   96 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x2cfde6d260cc @  100 : a9                Return 
Constant pool (size = 9)
0x2cfde6d260d1: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 9
           0: 0x2cfde6d25c69 <String[11]: #_engineTeam>
           1: 0x1da520b44de1 <String[5]: #Error>
           2: 0x2cfde6d26129 <String[19]: #No team registered!>
           3: 0x2cfde6d25121 <String[7]: #world_1>
           4: 0x2cfde6d26151 <String[5]: #World>
           5: 0x3340fd3ccbb9 <String[7]: #options>
           6: 0x3340fd3e8a51 <String[3]: #rng>
           7: 0x2cfde6d25f29 <String[5]: #world>
           8: 0x2cfde6d26169 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  14,  79)  ->    79 (prediction=3, data=1)
Source Position Table (size = 33)
0x2cfde6d261c1 <ByteArray[33]>
0x2cfde6d26269 points to: [0x2cfde6d262d8]
=== [0x2cfde6d262d8] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0x2cfde6d262d8 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @117 }
         0x2cfde6d262dc @    4 : 19 fe f9          Mov <closure>, r1
         0x2cfde6d262df @    7 : 19 02 f8          Mov <this>, r2
 1387 E> 0x2cfde6d262e2 @   10 : 68 02 f9 02       InvokeIntrinsic [_AsyncFunctionEnter], r1-r2
         0x2cfde6d262e6 @   14 : c4                Star0 
         0x2cfde6d262e7 @   15 : 19 ff f9          Mov <context>, r1
 1404 S> 0x2cfde6d262ea @   18 : 0b 03             Ldar a0
 1427 E> 0x2cfde6d262ec @   20 : 32 02 01 00       SetNamedProperty <this>, [1], [0]
 1452 S> 0x2cfde6d262f0 @   24 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2cfde6d262f4 @   28 : c2                Star2 
 1452 E> 0x2cfde6d262f5 @   29 : 5d f8 02 04       CallProperty0 r2, <this>, [4]
         0x2cfde6d262f9 @   33 : 97 2a             JumpIfToBooleanFalse [42] (0x2cfde6d26323 @ 75)
 1484 S> 0x2cfde6d262fb @   35 : 7c 03 06 08       CreateObjectLiteral [3], [6], #8
         0x2cfde6d262ff @   39 : c2                Star2 
 1526 E> 0x2cfde6d26300 @   40 : 7c 04 07 29       CreateObjectLiteral [4], [7], #41
         0x2cfde6d26304 @   44 : c1                Star3 
 1542 E> 0x2cfde6d26305 @   45 : 2d 02 05 08       GetNamedProperty <this>, [5], [8]
         0x2cfde6d26309 @   49 : c0                Star4 
 1542 E> 0x2cfde6d2630a @   50 : 5d f6 02 0a       CallProperty0 r4, <this>, [10]
         0x2cfde6d2630e @   54 : 33 f7 06 0c       DefineNamedOwnProperty r3, [6], [12]
         0x2cfde6d26312 @   58 : 0b f7             Ldar r3
         0x2cfde6d26314 @   60 : 33 f8 07 0e       DefineNamedOwnProperty r2, [7], [14]
         0x2cfde6d26318 @   64 : 0b f8             Ldar r2
         0x2cfde6d2631a @   66 : c1                Star3 
         0x2cfde6d2631b @   67 : 19 fa f8          Mov r0, r2
         0x2cfde6d2631e @   70 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1563 S> 0x2cfde6d26322 @   74 : a9                Return 
 1587 S> 0x2cfde6d26323 @   75 : 2d 02 08 10       GetNamedProperty <this>, [8], [16]
         0x2cfde6d26327 @   79 : c2                Star2 
 1587 E> 0x2cfde6d26328 @   80 : 5d f8 02 12       CallProperty0 r2, <this>, [18]
 1696 S> 0x2cfde6d2632c @   84 : 2d 02 02 14       GetNamedProperty <this>, [2], [20]
         0x2cfde6d26330 @   88 : c2                Star2 
 1696 E> 0x2cfde6d26331 @   89 : 5d f8 02 16       CallProperty0 r2, <this>, [22]
         0x2cfde6d26335 @   93 : 96 2c             JumpIfToBooleanTrue [44] (0x2cfde6d26361 @ 137)
 1739 S> 0x2cfde6d26337 @   95 : 2d 02 09 18       GetNamedProperty <this>, [9], [24]
         0x2cfde6d2633b @   99 : c2                Star2 
 1739 E> 0x2cfde6d2633c @  100 : 5d f8 02 1a       CallProperty0 r2, <this>, [26]
         0x2cfde6d26340 @  104 : c1                Star3 
         0x2cfde6d26341 @  105 : 19 fa f8          Mov r0, r2
         0x2cfde6d26344 @  108 : 68 01 f8 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r2-r3
 1728 E> 0x2cfde6d26348 @  112 : af fa fa 02 00    SuspendGenerator r0, r0-r1, [0]
         0x2cfde6d2634d @  117 : b0 fa fa 02       ResumeGenerator r0, r0-r1
         0x2cfde6d26351 @  121 : c2                Star2 
         0x2cfde6d26352 @  122 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x2cfde6d26356 @  126 : c1                Star3 
         0x2cfde6d26357 @  127 : 0c                LdaZero 
         0x2cfde6d26358 @  128 : 1c f7             TestReferenceEqual r3
         0x2cfde6d2635a @  130 : 98 05             JumpIfTrue [5] (0x2cfde6d2635f @ 135)
         0x2cfde6d2635c @  132 : 0b f8             Ldar r2
         0x2cfde6d2635e @  134 : a8                ReThrow 
         0x2cfde6d2635f @  135 : 0b f8             Ldar r2
 1788 S> 0x2cfde6d26361 @  137 : 7c 0a 1c 0c       CreateObjectLiteral [10], [28], #12
         0x2cfde6d26365 @  141 : c2                Star2 
 1858 E> 0x2cfde6d26366 @  142 : 2d 02 0b 1d       GetNamedProperty <this>, [11], [29]
         0x2cfde6d2636a @  146 : c1                Star3 
 1858 E> 0x2cfde6d2636b @  147 : 5d f7 02 1f       CallProperty0 r3, <this>, [31]
         0x2cfde6d2636f @  151 : 33 f8 0c 21       DefineNamedOwnProperty r2, [12], [33]
 1905 E> 0x2cfde6d26373 @  155 : 2d 02 0d 23       GetNamedProperty <this>, [13], [35]
         0x2cfde6d26377 @  159 : 33 f8 0e 25       DefineNamedOwnProperty r2, [14], [37]
         0x2cfde6d2637b @  163 : 0b f8             Ldar r2
         0x2cfde6d2637d @  165 : c1                Star3 
         0x2cfde6d2637e @  166 : 19 fa f8          Mov r0, r2
         0x2cfde6d26381 @  169 : 68 04 f8 02       InvokeIntrinsic [_AsyncFunctionResolve], r2-r3
 1957 S> 0x2cfde6d26385 @  173 : a9                Return 
         0x2cfde6d26386 @  174 : c2                Star2 
         0x2cfde6d26387 @  175 : 82 f8 0f          CreateCatchContext r2, [15]
         0x2cfde6d2638a @  178 : c3                Star1 
         0x2cfde6d2638b @  179 : 10                LdaTheHole 
         0x2cfde6d2638c @  180 : a6                SetPendingMessage 
         0x2cfde6d2638d @  181 : 0b f9             Ldar r1
         0x2cfde6d2638f @  183 : 1a f8             PushContext r2
         0x2cfde6d26391 @  185 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d26393 @  187 : c0                Star4 
         0x2cfde6d26394 @  188 : 19 fa f7          Mov r0, r3
         0x2cfde6d26397 @  191 : 68 03 f7 02       InvokeIntrinsic [_AsyncFunctionReject], r3-r4
         0x2cfde6d2639b @  195 : a9                Return 
Constant pool (size = 16)
0x2cfde6d263a1: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 16
           0: 117
           1: 0x2cfde6d25881 <String[17]: #currentTickNumber>
           2: 0x2cfde6d25601 <String[14]: #isGameComplete>
           3: 0x2cfde6d26431 <ObjectBoilerplateDescription[5]>
           4: 0x2cfde6d264a9 <ObjectBoilerplateDescription[3]>
           5: 0x2cfde6d25559 <String[14]: #getGameResults>
           6: 0x2cfde6d264d1 <String[7]: #results>
           7: 0x2cfde6d26489 <String[11]: #gameResults>
           8: 0x2cfde6d25621 <String[10]: #updateGame>
           9: 0x2cfde6d255b1 <String[27]: #fetchAndApplyPlayerCommands>
          10: 0x2cfde6d264e9 <ObjectBoilerplateDescription[9]>
          11: 0x2cfde6d25681 <String[18]: #serializeForViewer>
          12: 0x2cfde6d26541 <String[9]: #gameState>
          13: 0x2cfde6d25861 <String[14]: #lastTickErrors>
          14: 0x1da520b44f11 <String[6]: #errors>
          15: 0x2cfde6d26591 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 174)  ->   174 (prediction=3, data=1)
Source Position Table (size = 55)
0x2cfde6d265e9 <ByteArray[55]>
Boilerplate at 0x2cfde6d26431: 
0x2cfde6d26431: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 5
           0: 8
           1: 0x2cfde6d26469 <String[12]: #gameComplete>
           2: 0x1da520b41729 <true>
           3: 0x2cfde6d26489 <String[11]: #gameResults>
           4: 0x1da520b41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x2cfde6d264a9: 
0x2cfde6d264a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 3
           0: 8
           1: 0x2cfde6d264d1 <String[7]: #results>
           2: 0x1da520b41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x2cfde6d264e9: 
0x2cfde6d264e9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 9
           0: 8
           1: 0x2cfde6d26469 <String[12]: #gameComplete>
           2: 0x1da520b41789 <false>
           3: 0x2cfde6d26541 <String[9]: #gameState>
           4: 0x1da520b41501 <Odd Oddball: uninitialized>
           5: 0x1da520b44f11 <String[6]: #errors>
           6: 0x1da520b41501 <Odd Oddball: uninitialized>
           7: 0x2cfde6d26561 <String[8]: #commands>
           8: 0x2cfde6d26579 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1da520b41329 <FixedArray[0]>>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x2cfde6d266b1 points to: [0x2cfde6d26720]
=== [0x2cfde6d26720] DISASSEMBLY ===
Parameter count 1
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x2cfde6d26720 @    0 : ae fa 00 01       SwitchOnGeneratorState r0, [0], [1] { 0: @57 }
 2001 E> 0x2cfde6d26724 @    4 : 83 01 01          CreateFunctionContext [1], [1]
         0x2cfde6d26727 @    7 : 1a f8             PushContext r2
         0x2cfde6d26729 @    9 : 0b 02             Ldar <this>
         0x2cfde6d2672b @   11 : 25 02             StaCurrentContextSlot [2]
         0x2cfde6d2672d @   13 : 19 fe f7          Mov <closure>, r3
         0x2cfde6d26730 @   16 : 19 02 f6          Mov <this>, r4
         0x2cfde6d26733 @   19 : 68 02 f7 02       InvokeIntrinsic [_AsyncFunctionEnter], r3-r4
         0x2cfde6d26737 @   23 : c4                Star0 
         0x2cfde6d26738 @   24 : 19 ff f7          Mov <context>, r3
 2042 S> 0x2cfde6d2673b @   27 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d2673d @   29 : bf                Star5 
 2053 E> 0x2cfde6d2673e @   30 : 2d f5 02 00       GetNamedProperty r5, [2], [0]
         0x2cfde6d26742 @   34 : bf                Star5 
 2060 E> 0x2cfde6d26743 @   35 : 2d f5 03 02       GetNamedProperty r5, [3], [2]
         0x2cfde6d26747 @   39 : c0                Star4 
 2060 E> 0x2cfde6d26748 @   40 : 5d f6 f5 04       CallProperty0 r4, r5, [4]
         0x2cfde6d2674c @   44 : bf                Star5 
         0x2cfde6d2674d @   45 : 19 fa f6          Mov r0, r4
         0x2cfde6d26750 @   48 : 68 01 f6 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r4-r5
 2042 E> 0x2cfde6d26754 @   52 : af fa fa 04 00    SuspendGenerator r0, r0-r3, [0]
         0x2cfde6d26759 @   57 : b0 fa fa 04       ResumeGenerator r0, r0-r3
         0x2cfde6d2675d @   61 : c0                Star4 
         0x2cfde6d2675e @   62 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x2cfde6d26762 @   66 : bf                Star5 
         0x2cfde6d26763 @   67 : 0c                LdaZero 
         0x2cfde6d26764 @   68 : 1c f5             TestReferenceEqual r5
         0x2cfde6d26766 @   70 : 98 05             JumpIfTrue [5] (0x2cfde6d2676b @ 75)
         0x2cfde6d26768 @   72 : 0b f6             Ldar r4
         0x2cfde6d2676a @   74 : a8                ReThrow 
         0x2cfde6d2676b @   75 : 19 f6 f9          Mov r4, r1
 2092 S> 0x2cfde6d2676e @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d26770 @   80 : c0                Star4 
         0x2cfde6d26771 @   81 : 7b 06             CreateEmptyArrayLiteral [6]
 2112 E> 0x2cfde6d26773 @   83 : 32 f6 04 07       SetNamedProperty r4, [4], [7]
 2146 S> 0x2cfde6d26777 @   87 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x2cfde6d2677b @   91 : c0                Star4 
         0x2cfde6d2677c @   92 : 80 06 00 02       CreateClosure [6], [0], #2
         0x2cfde6d26780 @   96 : be                Star6 
 2146 E> 0x2cfde6d26781 @   97 : 5e f6 f9 f4 0b    CallProperty1 r4, r1, r6, [11]
         0x2cfde6d26786 @  102 : 0e                LdaUndefined 
         0x2cfde6d26787 @  103 : bf                Star5 
         0x2cfde6d26788 @  104 : 19 fa f6          Mov r0, r4
         0x2cfde6d2678b @  107 : 68 04 f6 02       InvokeIntrinsic [_AsyncFunctionResolve], r4-r5
 2911 S> 0x2cfde6d2678f @  111 : a9                Return 
         0x2cfde6d26790 @  112 : c0                Star4 
         0x2cfde6d26791 @  113 : 82 f6 07          CreateCatchContext r4, [7]
         0x2cfde6d26794 @  116 : c1                Star3 
         0x2cfde6d26795 @  117 : 10                LdaTheHole 
         0x2cfde6d26796 @  118 : a6                SetPendingMessage 
         0x2cfde6d26797 @  119 : 0b f7             Ldar r3
         0x2cfde6d26799 @  121 : 1a f6             PushContext r4
         0x2cfde6d2679b @  123 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d2679d @  125 : be                Star6 
         0x2cfde6d2679e @  126 : 19 fa f5          Mov r0, r5
         0x2cfde6d267a1 @  129 : 68 03 f5 02       InvokeIntrinsic [_AsyncFunctionReject], r5-r6
         0x2cfde6d267a5 @  133 : a9                Return 
Constant pool (size = 8)
0x2cfde6d267a9: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 8
           0: 57
           1: 0x2cfde6d267f9 <ScopeInfo FUNCTION_SCOPE>
           2: 0x2cfde6d258a9 <String[6]: #engine>
           3: 0x2cfde6d26859 <String[20]: #getCommandsFromTeams>
           4: 0x2cfde6d25861 <String[14]: #lastTickErrors>
           5: 0x3340fd3ca021 <String[7]: #forEach>
           6: 0x2cfde6d26899 <SharedFunctionInfo>
           7: 0x2cfde6d26cd1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  27, 112)  ->   112 (prediction=3, data=3)
Source Position Table (size = 29)
0x2cfde6d26d29 <ByteArray[29]>
0x2cfde6d26899 points to: [0x2cfde6d26908]
=== [0x2cfde6d26908] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 2219 S> 0x2cfde6d26908 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x2cfde6d2690c @    4 : c4                Star0 
 2240 S> 0x2cfde6d2690d @    5 : 97 b8             JumpIfToBooleanFalse [184] (0x2cfde6d269c5 @ 189)
         0x2cfde6d2690f @    7 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d26911 @    9 : c3                Star1 
 2260 E> 0x2cfde6d26912 @   10 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2cfde6d26916 @   14 : 97 af             JumpIfToBooleanFalse [175] (0x2cfde6d269c5 @ 189)
         0x2cfde6d26918 @   16 : 19 ff f9          Mov <context>, r1
 2329 S> 0x2cfde6d2691b @   19 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x2cfde6d2691f @   23 : 1d                TestUndetectable 
         0x2cfde6d26920 @   24 : 99 0e             JumpIfFalse [14] (0x2cfde6d2692e @ 38)
 2372 S> 0x2cfde6d26922 @   26 : 21 03 06          LdaGlobal [3], [6]
         0x2cfde6d26925 @   29 : c2                Star2 
         0x2cfde6d26926 @   30 : 13 04             LdaConstant [4]
         0x2cfde6d26928 @   32 : c1                Star3 
 2378 E> 0x2cfde6d26929 @   33 : 62 f8 f7 08       CallUndefinedReceiver1 r2, r3, [8]
 2372 E> 0x2cfde6d2692d @   37 : a7                Throw 
 2466 S> 0x2cfde6d2692e @   38 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d26930 @   40 : c1                Star3 
 2471 E> 0x2cfde6d26931 @   41 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x2cfde6d26935 @   45 : c2                Star2 
         0x2cfde6d26936 @   46 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d26938 @   48 : c0                Star4 
 2489 E> 0x2cfde6d26939 @   49 : 2d f6 01 0c       GetNamedProperty r4, [1], [12]
         0x2cfde6d2693d @   53 : c0                Star4 
 2471 E> 0x2cfde6d2693e @   54 : 5f f8 f7 f6 fa 0e CallProperty2 r2, r3, r4, r0, [14]
         0x2cfde6d26944 @   60 : 8a 81             Jump [129] (0x2cfde6d269c5 @ 189)
         0x2cfde6d26946 @   62 : c2                Star2 
         0x2cfde6d26947 @   63 : 82 f8 06          CreateCatchContext r2, [6]
         0x2cfde6d2694a @   66 : c3                Star1 
         0x2cfde6d2694b @   67 : 10                LdaTheHole 
         0x2cfde6d2694c @   68 : a6                SetPendingMessage 
         0x2cfde6d2694d @   69 : 0b f9             Ldar r1
         0x2cfde6d2694f @   71 : 1a f8             PushContext r2
 2582 S> 0x2cfde6d26951 @   73 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x2cfde6d26955 @   77 : aa 07             ThrowReferenceErrorIfHole [7]
         0x2cfde6d26957 @   79 : c0                Star4 
 2591 E> 0x2cfde6d26958 @   80 : 2d f6 08 10       GetNamedProperty r4, [8], [16]
         0x2cfde6d2695c @   84 : c0                Star4 
 2598 E> 0x2cfde6d2695d @   85 : 2d f6 09 12       GetNamedProperty r4, [9], [18]
         0x2cfde6d26961 @   89 : c1                Star3 
         0x2cfde6d26962 @   90 : 13 0a             LdaConstant [10]
         0x2cfde6d26964 @   92 : bf                Star5 
 2633 E> 0x2cfde6d26965 @   93 : 21 0b 15          LdaGlobal [11], [21]
         0x2cfde6d26968 @   96 : bd                Star7 
 2638 E> 0x2cfde6d26969 @   97 : 2d f3 0c 17       GetNamedProperty r7, [12], [23]
         0x2cfde6d2696d @  101 : be                Star6 
 2638 E> 0x2cfde6d2696e @  102 : 5e f4 f3 fa 19    CallProperty1 r6, r7, r0, [25]
         0x2cfde6d26973 @  107 : 77                ToString 
         0x2cfde6d26974 @  108 : 39 f5 14          Add r5, [20]
         0x2cfde6d26977 @  111 : bf                Star5 
         0x2cfde6d26978 @  112 : 13 0d             LdaConstant [13]
         0x2cfde6d2697a @  114 : 39 f5 14          Add r5, [20]
         0x2cfde6d2697d @  117 : bf                Star5 
         0x2cfde6d2697e @  118 : 17 02             LdaImmutableCurrentContextSlot [2]
 2663 E> 0x2cfde6d26980 @  120 : 77                ToString 
         0x2cfde6d26981 @  121 : 39 f5 14          Add r5, [20]
         0x2cfde6d26984 @  124 : bf                Star5 
 2598 E> 0x2cfde6d26985 @  125 : 5e f7 f6 f5 1b    CallProperty1 r3, r4, r5, [27]
 2693 S> 0x2cfde6d2698a @  130 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d2698c @  132 : c1                Star3 
 2714 E> 0x2cfde6d2698d @  133 : 21 03 06          LdaGlobal [3], [6]
 2703 E> 0x2cfde6d26990 @  136 : 71 f7 1d          TestInstanceOf r3, [29]
         0x2cfde6d26993 @  139 : 99 30             JumpIfFalse [48] (0x2cfde6d269c3 @ 187)
 2747 S> 0x2cfde6d26995 @  141 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2cfde6d26999 @  145 : c0                Star4 
 2752 E> 0x2cfde6d2699a @  146 : 2d f6 01 1e       GetNamedProperty r4, [1], [30]
         0x2cfde6d2699e @  150 : c0                Star4 
 2764 E> 0x2cfde6d2699f @  151 : 2d f6 0e 20       GetNamedProperty r4, [14], [32]
         0x2cfde6d269a3 @  155 : c1                Star3 
         0x2cfde6d269a4 @  156 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d269a6 @  158 : bf                Star5 
 2764 E> 0x2cfde6d269a7 @  159 : 5e f7 f6 f5 22    CallProperty1 r3, r4, r5, [34]
 2808 S> 0x2cfde6d269ac @  164 : 15 f8 02 00       LdaImmutableContextSlot r2, [2], [0]
         0x2cfde6d269b0 @  168 : c0                Star4 
 2813 E> 0x2cfde6d269b1 @  169 : 2d f6 0f 24       GetNamedProperty r4, [15], [36]
         0x2cfde6d269b5 @  173 : c0                Star4 
 2828 E> 0x2cfde6d269b6 @  174 : 2d f6 10 26       GetNamedProperty r4, [16], [38]
         0x2cfde6d269ba @  178 : c1                Star3 
         0x2cfde6d269bb @  179 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d269bd @  181 : bf                Star5 
 2828 E> 0x2cfde6d269be @  182 : 5e f7 f6 f5 28    CallProperty1 r3, r4, r5, [40]
         0x2cfde6d269c3 @  187 : 1b f8             PopContext r2
         0x2cfde6d269c5 @  189 : 0e                LdaUndefined 
 2903 S> 0x2cfde6d269c6 @  190 : a9                Return 
Constant pool (size = 17)
0x2cfde6d269c9: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 17
           0: 0x2cfde6d26a61 <String[7]: #command>
           1: 0x2cfde6d25c69 <String[11]: #_engineTeam>
           2: 0x2cfde6d26a79 <String[7]: #actions>
           3: 0x1da520b44de1 <String[5]: #Error>
           4: 0x2cfde6d26a91 <String[35]: #Command invalid: 'actions' missing.>
           5: 0x2cfde6d255e1 <String[12]: #applyActions>
           6: 0x2cfde6d26ac9 <ScopeInfo CATCH_SCOPE>
           7: 0x2cfde6d250f1 <String[8]: #engine_1>
           8: 0x3340fd3c6461 <String[6]: #logger>
           9: 0x3340fd3c6309 <String[5]: #error>
          10: 0x2cfde6d26b19 <String[26]: #Error processing command '>
          11: 0x3340fd3dc529 <String[4]: #JSON>
          12: 0x3340fd3cee51 <String[9]: #stringify>
          13: 0x2cfde6d26b81 <String[4]: #' : >
          14: 0x2cfde6d26b99 <String[11]: #reportError>
          15: 0x2cfde6d25861 <String[14]: #lastTickErrors>
          16: 0x3340fd3c9551 <String[4]: #push>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  19,  60)  ->    62 (prediction=1, data=1)
Source Position Table (size = 76)
0x2cfde6d26bf1 <ByteArray[76]>
0x2cfde6d26d79 points to: [0x2cfde6d26de8]
=== [0x2cfde6d26de8] DISASSEMBLY ===
Parameter count 3
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2929 E> 0x2cfde6d26de8 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x2cfde6d26deb @    3 : 1a fa             PushContext r0
         0x2cfde6d26ded @    5 : 0b 02             Ldar <this>
         0x2cfde6d26def @    7 : 25 02             StaCurrentContextSlot [2]
         0x2cfde6d26df1 @    9 : 0b 03             Ldar a0
         0x2cfde6d26df3 @   11 : 25 03             StaCurrentContextSlot [3]
 2963 S> 0x2cfde6d26df5 @   13 : 2d 04 01 00       GetNamedProperty a1, [1], [0]
         0x2cfde6d26df9 @   17 : c2                Star2 
 2971 E> 0x2cfde6d26dfa @   18 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2cfde6d26dfe @   22 : c3                Star1 
         0x2cfde6d26dff @   23 : 80 03 00 02       CreateClosure [3], [0], #2
         0x2cfde6d26e03 @   27 : c1                Star3 
 2971 E> 0x2cfde6d26e04 @   28 : 5e f9 f8 f7 04    CallProperty1 r1, r2, r3, [4]
         0x2cfde6d26e09 @   33 : 0e                LdaUndefined 
 3419 S> 0x2cfde6d26e0a @   34 : a9                Return 
Constant pool (size = 4)
0x2cfde6d26e11: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 4
           0: 0x2cfde6d26e41 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2cfde6d26a79 <String[7]: #actions>
           2: 0x3340fd3ca021 <String[7]: #forEach>
           3: 0x2cfde6d26ec9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 15)
0x2cfde6d27211 <ByteArray[15]>
0x2cfde6d26ec9 points to: [0x2cfde6d26f38]
=== [0x2cfde6d26f38] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
         0x2cfde6d26f38 @    0 : 19 ff fa          Mov <context>, r0
 3027 S> 0x2cfde6d26f3b @    3 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d26f3d @    5 : c2                Star2 
 3032 E> 0x2cfde6d26f3e @    6 : 2d f8 00 00       GetNamedProperty r2, [0], [0]
         0x2cfde6d26f42 @   10 : c2                Star2 
         0x2cfde6d26f43 @   11 : 9e 0e             JumpIfUndefinedOrNull [14] (0x2cfde6d26f51 @ 25)
 3037 E> 0x2cfde6d26f45 @   13 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x2cfde6d26f49 @   17 : c3                Star1 
 3039 E> 0x2cfde6d26f4a @   18 : 5e f9 f8 03 04    CallProperty1 r1, r2, a0, [4]
         0x2cfde6d26f4f @   23 : 8a 03             Jump [3] (0x2cfde6d26f52 @ 26)
         0x2cfde6d26f51 @   25 : 0e                LdaUndefined 
         0x2cfde6d26f52 @   26 : 8a 8c             Jump [140] (0x2cfde6d26fde @ 166)
         0x2cfde6d26f54 @   28 : c3                Star1 
         0x2cfde6d26f55 @   29 : 82 f9 02          CreateCatchContext r1, [2]
         0x2cfde6d26f58 @   32 : c4                Star0 
         0x2cfde6d26f59 @   33 : 10                LdaTheHole 
         0x2cfde6d26f5a @   34 : a6                SetPendingMessage 
         0x2cfde6d26f5b @   35 : 0b fa             Ldar r0
         0x2cfde6d26f5d @   37 : 1a f9             PushContext r1
 3118 S> 0x2cfde6d26f5f @   39 : 15 ff 02 03       LdaImmutableContextSlot <context>, [2], [3]
         0x2cfde6d26f63 @   43 : aa 03             ThrowReferenceErrorIfHole [3]
         0x2cfde6d26f65 @   45 : c1                Star3 
 3127 E> 0x2cfde6d26f66 @   46 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x2cfde6d26f6a @   50 : c1                Star3 
 3134 E> 0x2cfde6d26f6b @   51 : 2d f7 05 08       GetNamedProperty r3, [5], [8]
         0x2cfde6d26f6f @   55 : c2                Star2 
         0x2cfde6d26f70 @   56 : 13 06             LdaConstant [6]
         0x2cfde6d26f72 @   58 : c0                Star4 
 3166 E> 0x2cfde6d26f73 @   59 : 21 07 0b          LdaGlobal [7], [11]
         0x2cfde6d26f76 @   62 : be                Star6 
 3171 E> 0x2cfde6d26f77 @   63 : 2d f4 08 0d       GetNamedProperty r6, [8], [13]
         0x2cfde6d26f7b @   67 : bf                Star5 
 3171 E> 0x2cfde6d26f7c @   68 : 5e f5 f4 03 0f    CallProperty1 r5, r6, a0, [15]
         0x2cfde6d26f81 @   73 : 77                ToString 
         0x2cfde6d26f82 @   74 : 39 f6 0a          Add r4, [10]
         0x2cfde6d26f85 @   77 : c0                Star4 
         0x2cfde6d26f86 @   78 : 13 09             LdaConstant [9]
         0x2cfde6d26f88 @   80 : 39 f6 0a          Add r4, [10]
         0x2cfde6d26f8b @   83 : c0                Star4 
 3134 E> 0x2cfde6d26f8c @   84 : 5e f8 f7 f6 11    CallProperty1 r2, r3, r4, [17]
 3210 S> 0x2cfde6d26f91 @   89 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d26f93 @   91 : c2                Star2 
 3231 E> 0x2cfde6d26f94 @   92 : 21 0a 13          LdaGlobal [10], [19]
 3220 E> 0x2cfde6d26f97 @   95 : 71 f8 15          TestInstanceOf r2, [21]
         0x2cfde6d26f9a @   98 : 99 42             JumpIfFalse [66] (0x2cfde6d26fdc @ 164)
 3260 S> 0x2cfde6d26f9c @  100 : 15 f9 03 00       LdaImmutableContextSlot r1, [3], [0]
         0x2cfde6d26fa0 @  104 : c1                Star3 
 3265 E> 0x2cfde6d26fa1 @  105 : 2d f7 0b 16       GetNamedProperty r3, [11], [22]
         0x2cfde6d26fa5 @  109 : c2                Star2 
         0x2cfde6d26fa6 @  110 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d26fa8 @  112 : c0                Star4 
 3265 E> 0x2cfde6d26fa9 @  113 : 5e f8 f7 f6 18    CallProperty1 r2, r3, r4, [24]
 3305 S> 0x2cfde6d26fae @  118 : 15 f9 02 00       LdaImmutableContextSlot r1, [2], [0]
         0x2cfde6d26fb2 @  122 : c1                Star3 
 3310 E> 0x2cfde6d26fb3 @  123 : 2d f7 0c 1a       GetNamedProperty r3, [12], [26]
         0x2cfde6d26fb7 @  127 : c1                Star3 
 3325 E> 0x2cfde6d26fb8 @  128 : 2d f7 0d 1c       GetNamedProperty r3, [13], [28]
         0x2cfde6d26fbc @  132 : c2                Star2 
         0x2cfde6d26fbd @  133 : 15 ff 03 03       LdaImmutableContextSlot <context>, [3], [3]
 3334 E> 0x2cfde6d26fc1 @  137 : aa 0e             ThrowReferenceErrorIfHole [14]
         0x2cfde6d26fc3 @  139 : c0                Star4 
 3342 E> 0x2cfde6d26fc4 @  140 : 2d f6 0f 1e       GetNamedProperty r4, [15], [30]
         0x2cfde6d26fc8 @  144 : c0                Star4 
         0x2cfde6d26fc9 @  145 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2cfde6d26fcb @  147 : be                Star6 
         0x2cfde6d26fcc @  148 : 0b f6             Ldar r4
         0x2cfde6d26fce @  150 : 19 03 f5          Mov a0, r5
 3330 E> 0x2cfde6d26fd1 @  153 : 69 f6 f5 02 20    Construct r4, r5-r6, [32]
         0x2cfde6d26fd6 @  158 : c0                Star4 
 3325 E> 0x2cfde6d26fd7 @  159 : 5e f8 f7 f6 22    CallProperty1 r2, r3, r4, [34]
         0x2cfde6d26fdc @  164 : 1b f9             PopContext r1
         0x2cfde6d26fde @  166 : 0e                LdaUndefined 
 3411 S> 0x2cfde6d26fdf @  167 : a9                Return 
Constant pool (size = 16)
0x2cfde6d26fe1: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 16
           0: 0x2cfde6d25f29 <String[5]: #world>
           1: 0x2cfde6d27071 <String[11]: #applyAction>
           2: 0x2cfde6d27091 <ScopeInfo CATCH_SCOPE>
           3: 0x2cfde6d250f1 <String[8]: #engine_1>
           4: 0x3340fd3c6461 <String[6]: #logger>
           5: 0x3340fd3c6309 <String[5]: #error>
           6: 0x2cfde6d270c9 <String[23]: #Error applying action '>
           7: 0x3340fd3dc529 <String[4]: #JSON>
           8: 0x3340fd3cee51 <String[9]: #stringify>
           9: 0x3340fd3f4c49 <String[1]: #'>
          10: 0x1da520b44de1 <String[5]: #Error>
          11: 0x2cfde6d26b99 <String[11]: #reportError>
          12: 0x2cfde6d25861 <String[14]: #lastTickErrors>
          13: 0x3340fd3c9551 <String[4]: #push>
          14: 0x2cfde6d25109 <String[7]: #error_1>
          15: 0x2cfde6d27109 <String[11]: #ActionError>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (   3,  26)  ->    28 (prediction=1, data=0)
Source Position Table (size = 61)
0x2cfde6d27149 <ByteArray[61]>
0x2cfde6d27249 points to: [0x2cfde6d272b8]
=== [0x2cfde6d272b8] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3465 S> 0x2cfde6d272b8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2cfde6d272bc @    4 : c4                Star0 
         0x2cfde6d272bd @    5 : 9e 08             JumpIfUndefinedOrNull [8] (0x2cfde6d272c5 @ 13)
 3470 E> 0x2cfde6d272bf @    7 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x2cfde6d272c3 @   11 : 8a 03             Jump [3] (0x2cfde6d272c6 @ 14)
         0x2cfde6d272c5 @   13 : 0e                LdaUndefined 
         0x2cfde6d272c6 @   14 : 97 10             JumpIfToBooleanFalse [16] (0x2cfde6d272d6 @ 30)
 3493 E> 0x2cfde6d272c8 @   16 : 2d 02 00 04       GetNamedProperty <this>, [0], [4]
         0x2cfde6d272cc @   20 : c4                Star0 
 3499 E> 0x2cfde6d272cd @   21 : 2d fa 01 06       GetNamedProperty r0, [1], [6]
         0x2cfde6d272d1 @   25 : c4                Star0 
         0x2cfde6d272d2 @   26 : 0c                LdaZero 
 3512 E> 0x2cfde6d272d3 @   27 : 6f fa 08          TestLessThanOrEqual r0, [8]
         0x2cfde6d272d6 @   30 : 96 13             JumpIfToBooleanTrue [19] (0x2cfde6d272e9 @ 49)
 3538 E> 0x2cfde6d272d8 @   32 : 2d 02 02 09       GetNamedProperty <this>, [2], [9]
         0x2cfde6d272dc @   36 : c4                Star0 
 3564 E> 0x2cfde6d272dd @   37 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x2cfde6d272e1 @   41 : c3                Star1 
 3572 E> 0x2cfde6d272e2 @   42 : 2d f9 04 0d       GetNamedProperty r1, [4], [13]
 3556 E> 0x2cfde6d272e6 @   46 : 70 fa 0f          TestGreaterThanOrEqual r0, [15]
 3583 S> 0x2cfde6d272e9 @   49 : a9                Return 
Constant pool (size = 5)
0x2cfde6d272f1: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 5
           0: 0x2cfde6d25f29 <String[5]: #world>
           1: 0x2cfde6d27329 <String[12]: #healthPoints>
           2: 0x2cfde6d25881 <String[17]: #currentTickNumber>
           3: 0x3340fd3ccbb9 <String[7]: #options>
           4: 0x2cfde6d27349 <String[10]: #TICK_COUNT>
Handler Table (size = 0)
Source Position Table (size = 23)
0x2cfde6d27369 <ByteArray[23]>
0x2cfde6d27401 points to: [0x2cfde6d27470]
=== [0x2cfde6d27470] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3622 S> 0x2cfde6d27470 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2cfde6d27474 @    4 : c3                Star1 
         0x2cfde6d27475 @    5 : 9e 0d             JumpIfUndefinedOrNull [13] (0x2cfde6d27482 @ 18)
 3627 E> 0x2cfde6d27477 @    7 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x2cfde6d2747b @   11 : c4                Star0 
 3629 E> 0x2cfde6d2747c @   12 : 5d fa f9 04       CallProperty0 r0, r1, [4]
         0x2cfde6d27480 @   16 : 8a 03             Jump [3] (0x2cfde6d27483 @ 19)
         0x2cfde6d27482 @   18 : 0e                LdaUndefined 
         0x2cfde6d27483 @   19 : 0e                LdaUndefined 
 3643 S> 0x2cfde6d27484 @   20 : a9                Return 
Constant pool (size = 2)
0x2cfde6d27489: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 2
           0: 0x2cfde6d25f29 <String[5]: #world>
           1: 0x3340fd3c3f01 <String[6]: #update>
Handler Table (size = 0)
Source Position Table (size = 11)
0x2cfde6d274c1 <ByteArray[11]>
0x2cfde6d27549 points to: [0x2cfde6d275b8]
=== [0x2cfde6d275b8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
         0x2cfde6d275b8 @    0 : 0e                LdaUndefined 
 3690 S> 0x2cfde6d275b9 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 5)
0x2cfde6d275c1 <ByteArray[5]>
0x2cfde6d27629 points to: [0x2cfde6d27698]
=== [0x2cfde6d27698] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3760 S> 0x2cfde6d27698 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2cfde6d2769c @    4 : c3                Star1 
 3760 E> 0x2cfde6d2769d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2cfde6d276a1 @    9 : c3                Star1 
         0x2cfde6d276a2 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2cfde6d276a6 @   14 : c4                Star0 
 3799 E> 0x2cfde6d276a7 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2cfde6d276ab @   19 : c0                Star4 
 3805 E> 0x2cfde6d276ac @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x2cfde6d276b0 @   24 : c1                Star3 
 3805 E> 0x2cfde6d276b1 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x2cfde6d276b5 @   29 : c2                Star2 
         0x2cfde6d276b6 @   30 : 19 fa f9          Mov r0, r1
         0x2cfde6d276b9 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x2cfde6d276bd @   37 : 0b f9             Ldar r1
 3837 S> 0x2cfde6d276bf @   39 : a9                Return 
Constant pool (size = 3)
0x2cfde6d276c1: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 3
           0: 0x2cfde6d256d1 <String[15]: #serializeCommon>
           1: 0x2cfde6d25f29 <String[5]: #world>
           2: 0x2cfde6d276e9 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 18)
0x2cfde6d27711 <ByteArray[18]>
0x2cfde6d277a1 points to: [0x2cfde6d27810]
=== [0x2cfde6d27810] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 3908 S> 0x2cfde6d27810 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x2cfde6d27814 @    4 : c3                Star1 
 3908 E> 0x2cfde6d27815 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x2cfde6d27819 @    9 : c3                Star1 
         0x2cfde6d2781a @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x2cfde6d2781e @   14 : c4                Star0 
 3947 E> 0x2cfde6d2781f @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x2cfde6d27823 @   19 : c0                Star4 
 3953 E> 0x2cfde6d27824 @   20 : 2d f6 02 08       GetNamedProperty r4, [2], [8]
         0x2cfde6d27828 @   24 : c1                Star3 
 3953 E> 0x2cfde6d27829 @   25 : 5d f7 f6 0a       CallProperty0 r3, r4, [10]
         0x2cfde6d2782d @   29 : c2                Star2 
         0x2cfde6d2782e @   30 : 19 fa f9          Mov r0, r1
         0x2cfde6d27831 @   33 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x2cfde6d27835 @   37 : 0b f9             Ldar r1
 3985 S> 0x2cfde6d27837 @   39 : a9                Return 
Constant pool (size = 3)
0x2cfde6d27839: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 3
           0: 0x2cfde6d256d1 <String[15]: #serializeCommon>
           1: 0x2cfde6d25f29 <String[5]: #world>
           2: 0x2cfde6d25681 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 18)
0x2cfde6d27861 <ByteArray[18]>
0x2cfde6d278f1 points to: [0x2cfde6d27960]
=== [0x2cfde6d27960] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 4027 S> 0x2cfde6d27960 @    0 : 7c 00 00 08       CreateObjectLiteral [0], [0], #8
         0x2cfde6d27964 @    4 : c4                Star0 
 4057 E> 0x2cfde6d27965 @    5 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x2cfde6d27969 @    9 : c3                Star1 
 4087 E> 0x2cfde6d2796a @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x2cfde6d2796e @   14 : c2                Star2 
 4095 E> 0x2cfde6d2796f @   15 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x2cfde6d27973 @   19 : 33 f9 04 06       DefineNamedOwnProperty r1, [4], [6]
 4136 E> 0x2cfde6d27977 @   23 : 2d 02 02 08       GetNamedProperty <this>, [2], [8]
         0x2cfde6d2797b @   27 : c2                Star2 
 4144 E> 0x2cfde6d2797c @   28 : 2d f8 05 0a       GetNamedProperty r2, [5], [10]
         0x2cfde6d27980 @   32 : 33 f9 06 0c       DefineNamedOwnProperty r1, [6], [12]
         0x2cfde6d27984 @   36 : 0b f9             Ldar r1
         0x2cfde6d27986 @   38 : 33 fa 07 0e       DefineNamedOwnProperty r0, [7], [14]
 4191 E> 0x2cfde6d2798a @   42 : 7c 08 10 29       CreateObjectLiteral [8], [16], #41
         0x2cfde6d2798e @   46 : c3                Star1 
 4221 E> 0x2cfde6d2798f @   47 : 2d 02 02 11       GetNamedProperty <this>, [2], [17]
         0x2cfde6d27993 @   51 : c2                Star2 
 4229 E> 0x2cfde6d27994 @   52 : 2d f8 09 13       GetNamedProperty r2, [9], [19]
         0x2cfde6d27998 @   56 : c2                Star2 
 4246 E> 0x2cfde6d27999 @   57 : 2d f8 0a 15       GetNamedProperty r2, [10], [21]
         0x2cfde6d2799d @   61 : 33 f9 0a 17       DefineNamedOwnProperty r1, [10], [23]
 4282 E> 0x2cfde6d279a1 @   65 : 2d 02 02 19       GetNamedProperty <this>, [2], [25]
         0x2cfde6d279a5 @   69 : c2                Star2 
 4290 E> 0x2cfde6d279a6 @   70 : 2d f8 09 1b       GetNamedProperty r2, [9], [27]
         0x2cfde6d279aa @   74 : c2                Star2 
 4307 E> 0x2cfde6d279ab @   75 : 2d f8 0b 1d       GetNamedProperty r2, [11], [29]
         0x2cfde6d279af @   79 : 33 f9 0b 1f       DefineNamedOwnProperty r1, [11], [31]
         0x2cfde6d279b3 @   83 : 0b f9             Ldar r1
         0x2cfde6d279b5 @   85 : 33 fa 0c 21       DefineNamedOwnProperty r0, [12], [33]
 4368 E> 0x2cfde6d279b9 @   89 : 2d 02 02 23       GetNamedProperty <this>, [2], [35]
         0x2cfde6d279bd @   93 : c3                Star1 
 4376 E> 0x2cfde6d279be @   94 : 2d f9 0d 25       GetNamedProperty r1, [13], [37]
         0x2cfde6d279c2 @   98 : 33 fa 0e 27       DefineNamedOwnProperty r0, [14], [39]
         0x2cfde6d279c6 @  102 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 4428 E> 0x2cfde6d279ca @  106 : aa 0f             ThrowReferenceErrorIfHole [15]
         0x2cfde6d279cc @  108 : c2                Star2 
 4443 E> 0x2cfde6d279cd @  109 : 2d f8 10 29       GetNamedProperty r2, [16], [41]
         0x2cfde6d279d1 @  113 : c3                Star1 
 4464 E> 0x2cfde6d279d2 @  114 : 61 f9 2b          CallUndefinedReceiver0 r1, [43]
         0x2cfde6d279d5 @  117 : 33 fa 11 2d       DefineNamedOwnProperty r0, [17], [45]
         0x2cfde6d279d9 @  121 : 0b fa             Ldar r0
 4477 S> 0x2cfde6d279db @  123 : a9                Return 
Constant pool (size = 18)
0x2cfde6d279e1: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 18
           0: 0x2cfde6d27a81 <ObjectBoilerplateDescription[9]>
           1: 0x2cfde6d27b39 <ObjectBoilerplateDescription[5]>
           2: 0x3340fd3ccbb9 <String[7]: #options>
           3: 0x2cfde6d27b89 <String[12]: #BULLET_SPEED>
           4: 0x2cfde6d27b71 <String[5]: #speed>
           5: 0x2cfde6d27ba9 <String[11]: #BULLET_SIZE>
           6: 0x1da520b4a111 <String[4]: #size>
           7: 0x2cfde6d27ad9 <String[7]: #rockets>
           8: 0x2cfde6d27bc9 <ObjectBoilerplateDescription[5]>
           9: 0x2cfde6d27c31 <String[16]: #WORLD_DIMENSIONS>
          10: 0x2cfde6d27c01 <String[5]: #width>
          11: 0x2cfde6d27c19 <String[6]: #height>
          12: 0x2cfde6d25f29 <String[5]: #world>
          13: 0x2cfde6d27c51 <String[21]: #CANNON_COOLDOWN_TICKS>
          14: 0x2cfde6d27af1 <String[19]: #cannonCooldownTicks>
          15: 0x2cfde6d25151 <String[14]: #meteor_infos_1>
          16: 0x2cfde6d27c79 <String[20]: #serializeMeteorInfos>
          17: 0x2cfde6d27b19 <String[11]: #meteorInfos>
Handler Table (size = 0)
Source Position Table (size = 46)
0x2cfde6d27ca1 <ByteArray[46]>
Boilerplate at 0x2cfde6d27a81: 
0x2cfde6d27a81: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 9
           0: 8
           1: 0x2cfde6d27ad9 <String[7]: #rockets>
           2: 0x1da520b41501 <Odd Oddball: uninitialized>
           3: 0x2cfde6d25f29 <String[5]: #world>
           4: 0x1da520b41501 <Odd Oddball: uninitialized>
           5: 0x2cfde6d27af1 <String[19]: #cannonCooldownTicks>
           6: 0x1da520b41501 <Odd Oddball: uninitialized>
           7: 0x2cfde6d27b19 <String[11]: #meteorInfos>
           8: 0x1da520b41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x2cfde6d27b39: 
0x2cfde6d27b39: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 5
           0: 8
           1: 0x2cfde6d27b71 <String[5]: #speed>
           2: 0x1da520b41501 <Odd Oddball: uninitialized>
           3: 0x1da520b4a111 <String[4]: #size>
           4: 0x1da520b41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x2cfde6d27bc9: 
0x2cfde6d27bc9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 5
           0: 8
           1: 0x2cfde6d27c01 <String[5]: #width>
           2: 0x1da520b41501 <Odd Oddball: uninitialized>
           3: 0x2cfde6d27c19 <String[6]: #height>
           4: 0x1da520b41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x2cfde6d27d61 points to: [0x2cfde6d27dd0]
=== [0x2cfde6d27dd0] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4516 S> 0x2cfde6d27dd0 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x2cfde6d27dd4 @    4 : c4                Star0 
 4553 E> 0x2cfde6d27dd5 @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x2cfde6d27dd9 @    9 : c3                Star1 
 4553 E> 0x2cfde6d27dda @   10 : 5d f9 02 03       CallProperty0 r1, <this>, [3]
         0x2cfde6d27dde @   14 : 33 fa 02 05       DefineNamedOwnProperty r0, [2], [5]
 4611 E> 0x2cfde6d27de2 @   18 : 2d 02 03 07       GetNamedProperty <this>, [3], [7]
         0x2cfde6d27de6 @   22 : 33 fa 03 09       DefineNamedOwnProperty r0, [3], [9]
 4663 E> 0x2cfde6d27dea @   26 : 2d 02 04 0b       GetNamedProperty <this>, [4], [11]
         0x2cfde6d27dee @   30 : c2                Star2 
 4678 E> 0x2cfde6d27def @   31 : 2d f8 05 0d       GetNamedProperty r2, [5], [13]
         0x2cfde6d27df3 @   35 : c3                Star1 
         0x2cfde6d27df4 @   36 : 80 06 00 02       CreateClosure [6], [0], #2
         0x2cfde6d27df8 @   40 : c1                Star3 
 4678 E> 0x2cfde6d27df9 @   41 : 5e f9 f8 f7 0f    CallProperty1 r1, r2, r3, [15]
         0x2cfde6d27dfe @   46 : 33 fa 04 11       DefineNamedOwnProperty r0, [4], [17]
         0x2cfde6d27e02 @   50 : 0b fa             Ldar r0
 4719 S> 0x2cfde6d27e04 @   52 : a9                Return 
Constant pool (size = 7)
0x2cfde6d27e09: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 7
           0: 0x2cfde6d27e51 <ObjectBoilerplateDescription[7]>
           1: 0x2cfde6d256a9 <String[18]: #serializeConstants>
           2: 0x3340fd3c89d1 <String[9]: #constants>
           3: 0x2cfde6d25881 <String[17]: #currentTickNumber>
           4: 0x2cfde6d25861 <String[14]: #lastTickErrors>
           5: 0x3340fd3c9ea9 <String[3]: #map>
           6: 0x2cfde6d27ed1 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 24)
0x2cfde6d27fe1 <ByteArray[24]>
Boilerplate at 0x2cfde6d27e51: 
0x2cfde6d27e51: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 7
           0: 8
           1: 0x3340fd3c89d1 <String[9]: #constants>
           2: 0x1da520b41501 <Odd Oddball: uninitialized>
           3: 0x2cfde6d25881 <String[17]: #currentTickNumber>
           4: 0x1da520b41501 <Odd Oddball: uninitialized>
           5: 0x2cfde6d25861 <String[14]: #lastTickErrors>
           6: 0x1da520b41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x2cfde6d27ed1 points to: [0x2cfde6d27f40]
=== [0x2cfde6d27f40] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 4699 S> 0x2cfde6d27f40 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 4706 S> 0x2cfde6d27f44 @    4 : a9                Return 
Constant pool (size = 1)
0x2cfde6d27f49: [FixedArray] in OldSpace
 - map: 0x1da520b412e1 <Map>
 - length: 1
           0: 0x1da520b45721 <String[7]: #message>
Handler Table (size = 0)
Source Position Table (size = 8)
0x2cfde6d27f61 <ByteArray[8]>
Boilerplate at 0x2cfde6d280d9: 
0x2cfde6d280d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 31
           0: 8
           1: 0x2cfde6d25951 <String[11]: #RANDOM_SEED>
           2: 0x1da520b41501 <Odd Oddball: uninitialized>
           3: 0x2cfde6d27349 <String[10]: #TICK_COUNT>
           4: 1000
           5: 0x2cfde6d281e1 <String[16]: #SCORE_MULTIPLIER>
           6: 1
           7: 0x2cfde6d28201 <String[13]: #HEALTH_POINTS>
           8: 0x1da520b41501 <Odd Oddball: uninitialized>
           9: 0x2cfde6d27c31 <String[16]: #WORLD_DIMENSIONS>
          10: 0x1da520b41501 <Odd Oddball: uninitialized>
          11: 0x2cfde6d28221 <String[30]: #CANNON_INITIAL_ORIENTATION_DEG>
          12: 0
          13: 0x2cfde6d28251 <String[15]: #CANNON_POSITION>
          14: 0x1da520b41501 <Odd Oddball: uninitialized>
          15: 0x2cfde6d28271 <String[19]: #CANNON_MAX_ROTATION>
          16: 180
          17: 0x2cfde6d27c51 <String[21]: #CANNON_COOLDOWN_TICKS>
          18: 10
          19: 0x2cfde6d27b89 <String[12]: #BULLET_SPEED>
          20: 20
          21: 0x2cfde6d27ba9 <String[11]: #BULLET_SIZE>
          22: 5
          23: 0x2cfde6d28299 <String[28]: #METEOR_GENERATION_CONE_ANGLE>
          24: 30
          25: 0x2cfde6d282c9 <String[32]: #METEOR_GENERATION_DELAY_IN_TICKS>
          26: 0x2cfde6d282f9 <ObjectBoilerplateDescription[5]>
          27: 0x2cfde6d28361 <String[31]: #CHEAT_DISABLE_METEOR_GENERATION>
          28: 0x1da520b41789 <false>
          29: 0x2cfde6d28391 <String[34]: #CHEAT_GENERATE_PREDICTABLE_METEORS>
          30: 0x2cfde6d283c9 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1da520b41329 <FixedArray[0]>>
[start ObjectBoilerplate nested objects]
0x2cfde6d282f9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 5
           0: 8
           1: 0x3340fd3da231 <String[5]: #start>
           2: 60
           3: 0x3340fd3cc4c1 <String[6]: #finish>
           4: 30
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x2cfde6d28411: 
0x2cfde6d28411: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1da520b42059 <Map>
 - length: 5
           0: 8
           1: 0x2cfde6d27c01 <String[5]: #width>
           2: 0x1da520b41501 <Odd Oddball: uninitialized>
           3: 0x2cfde6d27c19 <String[6]: #height>
           4: 0x1da520b41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
