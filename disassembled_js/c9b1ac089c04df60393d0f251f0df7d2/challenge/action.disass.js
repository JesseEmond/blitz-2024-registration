<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x4c33ac64bb8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x4c33ac64bb8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x4c33ac64bbc @    4 : c4                Star0 
  431 S> 0x4c33ac64bbd @    5 : a9                Return 
Constant pool (size = 1)
0x4c33ac64bc1: [FixedArray] in OldSpace
 - map: 0x3aef99fc12e1 <Map>
 - length: 1
           0: 0x04c33ac64bd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x04c33ac65051 <ByteArray[7]>
0x04c33ac64bd9 points to: [0x4c33ac64c48]
=== [0x4c33ac64c48] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   76 S> 0x4c33ac64c48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x4c33ac64c4b @    3 : c2                Star2 
   83 E> 0x4c33ac64c4c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x4c33ac64c50 @    8 : c3                Star1 
         0x4c33ac64c51 @    9 : 13 02             LdaConstant [2]
         0x4c33ac64c53 @   11 : c0                Star4 
   98 E> 0x4c33ac64c54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x4c33ac64c58 @   16 : bf                Star5 
         0x4c33ac64c59 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x4c33ac64c5c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x4c33ac64c61 @   25 : 0e                LdaUndefined 
  159 E> 0x4c33ac64c62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  186 S> 0x4c33ac64c66 @   30 : 80 05 00 02       CreateClosure [5], [0], #2
         0x4c33ac64c6a @   34 : c3                Star1 
  349 E> 0x4c33ac64c6b @   35 : 2d 03 04 09       GetNamedProperty a0, [4], [9]
         0x4c33ac64c6f @   39 : 96 0a             JumpIfToBooleanTrue [10] (0x4c33ac64c79 @ 49)
  365 E> 0x4c33ac64c71 @   41 : 7d                CreateEmptyObjectLiteral 
         0x4c33ac64c72 @   42 : c1                Star3 
  385 E> 0x4c33ac64c73 @   43 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x4c33ac64c77 @   47 : 0b f7             Ldar r3
         0x4c33ac64c79 @   49 : c4                Star0 
  326 E> 0x4c33ac64c7a @   50 : 62 f9 fa 0b       CallUndefinedReceiver1 r1, r0, [11]
         0x4c33ac64c7e @   54 : 0e                LdaUndefined 
  428 S> 0x4c33ac64c7f @   55 : a9                Return 
Constant pool (size = 6)
0x4c33ac64c81: [FixedArray] in OldSpace
 - map: 0x3aef99fc12e1 <Map>
 - length: 6
           0: 0x3aef99fc5ab9 <String[6]: #Object>
           1: 0x3aef99fc4c11 <String[14]: #defineProperty>
           2: 0x04c33ac64cc1 <String[10]: #__esModule>
           3: 0x04c33ac64ce1 <ObjectBoilerplateDescription[3]>
           4: 0x04c33ac64d09 <String[11]: #ActionTypes>
           5: 0x04c33ac64d29 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 31)
0x04c33ac64fb9 <ByteArray[31]>
Boilerplate at 0x04c33ac64ce1: 
0x4c33ac64ce1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3aef99fc2059 <Map>
 - length: 3
           0: 8
           1: 0x3aef99fc6419 <String[5]: #value>
           2: 0x3aef99fc1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x04c33ac64d29 points to: [0x4c33ac64d98]
=== [0x4c33ac64d98] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  216 S> 0x4c33ac64d98 @    0 : 13 00             LdaConstant [0]
  238 E> 0x4c33ac64d9a @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
  254 S> 0x4c33ac64d9e @    6 : 13 01             LdaConstant [1]
  276 E> 0x4c33ac64da0 @    8 : 32 03 01 02       SetNamedProperty a0, [1], [2]
  292 S> 0x4c33ac64da4 @   12 : 13 02             LdaConstant [2]
  313 E> 0x4c33ac64da6 @   14 : 32 03 02 04       SetNamedProperty a0, [2], [4]
         0x4c33ac64daa @   18 : 0e                LdaUndefined 
  324 S> 0x4c33ac64dab @   19 : a9                Return 
Constant pool (size = 3)
0x4c33ac64db1: [FixedArray] in OldSpace
 - map: 0x3aef99fc12e1 <Map>
 - length: 3
           0: 0x04c33ac64dd9 <String[6]: #ROTATE>
           1: 0x04c33ac64df1 <String[6]: #LOOKAT>
           2: 0x04c33ac64e09 <String[5]: #SHOOT>
Handler Table (size = 0)
Source Position Table (size = 17)
0x04c33ac64e21 <ByteArray[17]>
<< OUTPUTTING DISASSEMBLY END >>
