<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x386fb0be4ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x386fb0be4ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x386fb0be4cec @    4 : c4                Star0 
  377 S> 0x386fb0be4ced @    5 : a9                Return 
Constant pool (size = 1)
0x386fb0be4cf1: [FixedArray] in OldSpace
 - map: 0x3fa7b74812e1 <Map>
 - length: 1
           0: 0x386fb0be4d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x386fb0be51d9 <ByteArray[7]>
0x386fb0be4d09 points to: [0x386fb0be4d78]
=== [0x386fb0be4d78] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   10 E> 0x386fb0be4d78 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x386fb0be4d7b @    3 : 1a fa             PushContext r0
   76 S> 0x386fb0be4d7d @    5 : 21 01 00          LdaGlobal [1], [0]
         0x386fb0be4d80 @    8 : c2                Star2 
   83 E> 0x386fb0be4d81 @    9 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x386fb0be4d85 @   13 : c3                Star1 
         0x386fb0be4d86 @   14 : 13 03             LdaConstant [3]
         0x386fb0be4d88 @   16 : c0                Star4 
   98 E> 0x386fb0be4d89 @   17 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x386fb0be4d8d @   21 : bf                Star5 
         0x386fb0be4d8e @   22 : 19 03 f7          Mov a0, r3
   83 E> 0x386fb0be4d91 @   25 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x386fb0be4d96 @   30 : 0e                LdaUndefined 
  166 E> 0x386fb0be4d97 @   31 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  189 S> 0x386fb0be4d9b @   35 : 13 06             LdaConstant [6]
         0x386fb0be4d9d @   37 : c2                Star2 
  189 E> 0x386fb0be4d9e @   38 : 62 04 f8 09       CallUndefinedReceiver1 a1, r2, [9]
  189 E> 0x386fb0be4da2 @   42 : 25 02             StaCurrentContextSlot [2]
  208 S> 0x386fb0be4da4 @   44 : 21 01 00          LdaGlobal [1], [0]
         0x386fb0be4da7 @   47 : c2                Star2 
  215 E> 0x386fb0be4da8 @   48 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x386fb0be4dac @   52 : c3                Star1 
         0x386fb0be4dad @   53 : 13 05             LdaConstant [5]
         0x386fb0be4daf @   55 : c0                Star4 
  230 E> 0x386fb0be4db0 @   56 : 7c 07 0b 29       CreateObjectLiteral [7], [11], #41
         0x386fb0be4db4 @   60 : bf                Star5 
  286 E> 0x386fb0be4db5 @   61 : 80 08 00 02       CreateClosure [8], [0], #2
         0x386fb0be4db9 @   65 : 33 f5 09 0c       DefineNamedOwnProperty r5, [9], [12]
         0x386fb0be4dbd @   69 : 19 03 f7          Mov a0, r3
  215 E> 0x386fb0be4dc0 @   72 : 5c f9 f8 04 0e    CallProperty r1, r2-r5, [14]
         0x386fb0be4dc5 @   77 : 0e                LdaUndefined 
  374 S> 0x386fb0be4dc6 @   78 : a9                Return 
Constant pool (size = 10)
0x386fb0be4dc9: [FixedArray] in OldSpace
 - map: 0x3fa7b74812e1 <Map>
 - length: 10
           0: 0x386fb0be4e29 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3fa7b7485ab9 <String[6]: #Object>
           2: 0x3fa7b7484c11 <String[14]: #defineProperty>
           3: 0x386fb0be4e99 <String[10]: #__esModule>
           4: 0x386fb0be4eb9 <ObjectBoilerplateDescription[3]>
           5: 0x386fb0be4ee1 <String[18]: #Blitz2024Challenge>
           6: 0x386fb0be4f09 <String[6]: #./game>
           7: 0x386fb0be4f21 <ObjectBoilerplateDescription[5]>
           8: 0x386fb0be4f59 <SharedFunctionInfo get>
           9: 0x3fa7b74850e9 <String[3]: #get>
Handler Table (size = 0)
Source Position Table (size = 39)
0x386fb0be5181 <ByteArray[39]>
Boilerplate at 0x386fb0be4eb9: 
0x386fb0be4eb9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3fa7b7482059 <Map>
 - length: 3
           0: 8
           1: 0x3fa7b7486419 <String[5]: #value>
           2: 0x3fa7b7481729 <true>
Boilerplate at 0x386fb0be4f21: 
0x386fb0be4f21: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3fa7b7482059 <Map>
 - length: 5
           0: 8
           1: 0x3fa7b7484e19 <String[10]: #enumerable>
           2: 0x3fa7b7481729 <true>
           3: 0x3fa7b74850e9 <String[3]: #get>
           4: 0x3fa7b7481501 <Odd Oddball: uninitialized>
0x386fb0be4f59 points to: [0x386fb0be4fc8]
=== [0x386fb0be4fc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  300 S> 0x386fb0be4fc8 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x386fb0be4fca @    2 : c4                Star0 
  314 E> 0x386fb0be4fcb @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
  333 S> 0x386fb0be4fcf @    7 : a9                Return 
Constant pool (size = 1)
0x386fb0be4fd1: [FixedArray] in OldSpace
 - map: 0x3fa7b74812e1 <Map>
 - length: 1
           0: 0x386fb0be4ee1 <String[18]: #Blitz2024Challenge>
Handler Table (size = 0)
Source Position Table (size = 9)
0x386fb0be4fe9 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
