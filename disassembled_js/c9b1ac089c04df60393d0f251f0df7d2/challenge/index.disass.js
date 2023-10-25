<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1e65d0c24bb8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1e65d0c24bb8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1e65d0c24bbc @    4 : c4                Star0 
  377 S> 0x1e65d0c24bbd @    5 : a9                Return 
Constant pool (size = 1)
0x1e65d0c24bc1: [FixedArray] in OldSpace
 - map: 0x2897d37812e1 <Map>
 - length: 1
           0: 0x1e65d0c24bd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1e65d0c250a9 <ByteArray[7]>
0x1e65d0c24bd9 points to: [0x1e65d0c24c48]
=== [0x1e65d0c24c48] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1e65d0c24c48 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1e65d0c24c4b @    3 : 1a fa             PushContext r0
   76 S> 0x1e65d0c24c4d @    5 : 21 01 00          LdaGlobal [1], [0]
         0x1e65d0c24c50 @    8 : c2                Star2 
   83 E> 0x1e65d0c24c51 @    9 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x1e65d0c24c55 @   13 : c3                Star1 
         0x1e65d0c24c56 @   14 : 13 03             LdaConstant [3]
         0x1e65d0c24c58 @   16 : c0                Star4 
   98 E> 0x1e65d0c24c59 @   17 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x1e65d0c24c5d @   21 : bf                Star5 
         0x1e65d0c24c5e @   22 : 19 03 f7          Mov a0, r3
   83 E> 0x1e65d0c24c61 @   25 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x1e65d0c24c66 @   30 : 0e                LdaUndefined 
  166 E> 0x1e65d0c24c67 @   31 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  189 S> 0x1e65d0c24c6b @   35 : 13 06             LdaConstant [6]
         0x1e65d0c24c6d @   37 : c2                Star2 
  189 E> 0x1e65d0c24c6e @   38 : 62 04 f8 09       CallUndefinedReceiver1 a1, r2, [9]
  189 E> 0x1e65d0c24c72 @   42 : 25 02             StaCurrentContextSlot [2]
  208 S> 0x1e65d0c24c74 @   44 : 21 01 00          LdaGlobal [1], [0]
         0x1e65d0c24c77 @   47 : c2                Star2 
  215 E> 0x1e65d0c24c78 @   48 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x1e65d0c24c7c @   52 : c3                Star1 
         0x1e65d0c24c7d @   53 : 13 05             LdaConstant [5]
         0x1e65d0c24c7f @   55 : c0                Star4 
  230 E> 0x1e65d0c24c80 @   56 : 7c 07 0b 29       CreateObjectLiteral [7], [11], #41
         0x1e65d0c24c84 @   60 : bf                Star5 
  286 E> 0x1e65d0c24c85 @   61 : 80 08 00 02       CreateClosure [8], [0], #2
         0x1e65d0c24c89 @   65 : 33 f5 09 0c       DefineNamedOwnProperty r5, [9], [12]
         0x1e65d0c24c8d @   69 : 19 03 f7          Mov a0, r3
  215 E> 0x1e65d0c24c90 @   72 : 5c f9 f8 04 0e    CallProperty r1, r2-r5, [14]
         0x1e65d0c24c95 @   77 : 0e                LdaUndefined 
  374 S> 0x1e65d0c24c96 @   78 : a9                Return 
Constant pool (size = 10)
0x1e65d0c24c99: [FixedArray] in OldSpace
 - map: 0x2897d37812e1 <Map>
 - length: 10
           0: 0x1e65d0c24cf9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2897d3785ab9 <String[6]: #Object>
           2: 0x2897d3784c11 <String[14]: #defineProperty>
           3: 0x1e65d0c24d69 <String[10]: #__esModule>
           4: 0x1e65d0c24d89 <ObjectBoilerplateDescription[3]>
           5: 0x1e65d0c24db1 <String[18]: #Blitz2024Challenge>
           6: 0x1e65d0c24dd9 <String[6]: #./game>
           7: 0x1e65d0c24df1 <ObjectBoilerplateDescription[5]>
           8: 0x1e65d0c24e29 <SharedFunctionInfo get>
           9: 0x2897d37850e9 <String[3]: #get>
Handler Table (size = 0)
Source Position Table (size = 39)
0x1e65d0c25051 <ByteArray[39]>
Boilerplate at 0x1e65d0c24d89: 
0x1e65d0c24d89: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2897d3782059 <Map>
 - length: 3
           0: 8
           1: 0x2897d3786419 <String[5]: #value>
           2: 0x2897d3781729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1e65d0c24df1: 
0x1e65d0c24df1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2897d3782059 <Map>
 - length: 5
           0: 8
           1: 0x2897d3784e19 <String[10]: #enumerable>
           2: 0x2897d3781729 <true>
           3: 0x2897d37850e9 <String[3]: #get>
           4: 0x2897d3781501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1e65d0c24e29 points to: [0x1e65d0c24e98]
=== [0x1e65d0c24e98] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  300 S> 0x1e65d0c24e98 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1e65d0c24e9a @    2 : c4                Star0 
  314 E> 0x1e65d0c24e9b @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
  333 S> 0x1e65d0c24e9f @    7 : a9                Return 
Constant pool (size = 1)
0x1e65d0c24ea1: [FixedArray] in OldSpace
 - map: 0x2897d37812e1 <Map>
 - length: 1
           0: 0x1e65d0c24db1 <String[18]: #Blitz2024Challenge>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1e65d0c24eb9 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
