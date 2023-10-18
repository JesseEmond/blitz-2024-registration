<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x386d86364ce8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x386d86364ce8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x386d86364cec @    4 : c4                Star0 
  431 S> 0x386d86364ced @    5 : a9                Return 
Constant pool (size = 1)
0x386d86364cf1: [FixedArray] in OldSpace
 - map: 0x19eb573012e1 <Map>
 - length: 1
           0: 0x386d86364d09 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x386d86365181 <ByteArray[7]>
0x386d86364d09 points to: [0x386d86364d78]
=== [0x386d86364d78] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   76 S> 0x386d86364d78 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x386d86364d7b @    3 : c2                Star2 
   83 E> 0x386d86364d7c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x386d86364d80 @    8 : c3                Star1 
         0x386d86364d81 @    9 : 13 02             LdaConstant [2]
         0x386d86364d83 @   11 : c0                Star4 
   98 E> 0x386d86364d84 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x386d86364d88 @   16 : bf                Star5 
         0x386d86364d89 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x386d86364d8c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x386d86364d91 @   25 : 0e                LdaUndefined 
  159 E> 0x386d86364d92 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  186 S> 0x386d86364d96 @   30 : 80 05 00 02       CreateClosure [5], [0], #2
         0x386d86364d9a @   34 : c3                Star1 
  349 E> 0x386d86364d9b @   35 : 2d 03 04 09       GetNamedProperty a0, [4], [9]
         0x386d86364d9f @   39 : 96 0a             JumpIfToBooleanTrue [10] (0x386d86364da9 @ 49)
  365 E> 0x386d86364da1 @   41 : 7d                CreateEmptyObjectLiteral 
         0x386d86364da2 @   42 : c1                Star3 
  385 E> 0x386d86364da3 @   43 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x386d86364da7 @   47 : 0b f7             Ldar r3
         0x386d86364da9 @   49 : c4                Star0 
  326 E> 0x386d86364daa @   50 : 62 f9 fa 0b       CallUndefinedReceiver1 r1, r0, [11]
         0x386d86364dae @   54 : 0e                LdaUndefined 
  428 S> 0x386d86364daf @   55 : a9                Return 
Constant pool (size = 6)
0x386d86364db1: [FixedArray] in OldSpace
 - map: 0x19eb573012e1 <Map>
 - length: 6
           0: 0x19eb57305ab9 <String[6]: #Object>
           1: 0x19eb57304c11 <String[14]: #defineProperty>
           2: 0x386d86364df1 <String[10]: #__esModule>
           3: 0x386d86364e11 <ObjectBoilerplateDescription[3]>
           4: 0x386d86364e39 <String[11]: #ActionTypes>
           5: 0x386d86364e59 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 31)
0x386d863650e9 <ByteArray[31]>
Boilerplate at 0x386d86364e11: 
0x386d86364e11: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x19eb57302059 <Map>
 - length: 3
           0: 8
           1: 0x19eb57306419 <String[5]: #value>
           2: 0x19eb57301729 <true>
0x386d86364e59 points to: [0x386d86364ec8]
=== [0x386d86364ec8] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  216 S> 0x386d86364ec8 @    0 : 13 00             LdaConstant [0]
  238 E> 0x386d86364eca @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
  254 S> 0x386d86364ece @    6 : 13 01             LdaConstant [1]
  276 E> 0x386d86364ed0 @    8 : 32 03 01 02       SetNamedProperty a0, [1], [2]
  292 S> 0x386d86364ed4 @   12 : 13 02             LdaConstant [2]
  313 E> 0x386d86364ed6 @   14 : 32 03 02 04       SetNamedProperty a0, [2], [4]
         0x386d86364eda @   18 : 0e                LdaUndefined 
  324 S> 0x386d86364edb @   19 : a9                Return 
Constant pool (size = 3)
0x386d86364ee1: [FixedArray] in OldSpace
 - map: 0x19eb573012e1 <Map>
 - length: 3
           0: 0x386d86364f09 <String[6]: #ROTATE>
           1: 0x386d86364f21 <String[6]: #LOOKAT>
           2: 0x386d86364f39 <String[5]: #SHOOT>
Handler Table (size = 0)
Source Position Table (size = 17)
0x386d86364f51 <ByteArray[17]>
<< OUTPUTTING DISASSEMBLY END >>
