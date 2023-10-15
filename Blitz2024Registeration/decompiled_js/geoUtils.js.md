## Annotated
```js
function movingCirclesIntersection(a_pos, a_vel, a_size, b_pos, b_vel, b_size) {
	// 0x85cc3ce4020
	acc = CreateFunctionContext FUNCTION_SCOPE
	PushContext r13  // acc is prev context
	ContextSlot[6] = a_pos
	ContextSlot[5] = a_vel
	ContextSlot[4] = a_size
	ContextSlot[3] = b_pos
	ContextSlot[2] = b_vel
	r14 = a_pos
	r0 = a_pos.x
	r1 = a_pos.y
	r2 = a_vel.x
	r3 = a_vel.y
	r4 = b_pos.x
	r5 = b_pos.y
	r6 = b_vel.x
	r7 = b_vel.y
	// This is 'a' in the quadratic forumula
	r8 = a_vel.len_sq() + b_vel.len_sq() - 2 * a_vel.dot(b_vel)
	// This is 'b' in the quadratic formula
	r9 = 2 * a_pos.dot(a_vel) + b_pos.dot(b_vel) - b_pos.dot(a_vel) - a_pos.dot(b_vel)
	r15 = (a_size + b_size)**2
	// This is 'c' in the quadratic formula
	r10 = a_pos.len_sq() + b_pos.len_sq() - 2 * a_pos.dot(b_pos) - (a_size + b_size) ** 2
	// b^2 - 4ac
	r11 = r9 * r9 - 4 * r8 * r10
	if r11 < 0:
	  return []
	r15 = [?, ?]
	// (-b + sqrt(b^2-4ac)) / 2a
	r15[0] = (-r9 + Math.sqrt(r11)) / (2 * r8)
	// (-b - sqrt(b^2-4ac)) / 2a
	r15[1] = (-r9 - Math.sqrt(r11)) / (2 * r8)
	return r15.map(createIntersection)  // 0x85cc3ce44f8
}

function createIntersection(t) {  // 0x85cc3ce44f8
	r3 = ContextSlot[6]  // a_pos
	r5 = ContextSlot[5]  // a_vel
	r0 = a_pos.add(a_vel.multiply(t))
	r3 = ContextSlot[3]  // b_pos
	r5 = ContextSlot[2]  // b_vel
	r1 = b_pos.add(b_vel.multiply(t))
	r2 = {t: uninitialized, intersection: uninitialized}
	r2.t = t
	r6 = ContextSlot[4]  // a_size
	r4 = r1.subtract(r0).normalized.multiply(a_size)
	r2.intersection = r1.subtract(r0).normalized.multiply(a_size).add(r0)
	return r2
}
```
## Disassembly
```
<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x85cc3ce3a10] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x85cc3ce3a10 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x85cc3ce3a14 @    4 : c4                Star0 
 5111 S> 0x85cc3ce3a15 @    5 : a9                Return 
Constant pool (size = 1)
0x85cc3ce3a19: [FixedArray] in OldSpace
 - map: 0x3ada449412e1 <Map>
 - length: 1
           0: 0x085cc3ce3a31 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x085cc3ce4911 <ByteArray[8]>
0x085cc3ce3a31 points to: [0x85cc3ce3aa0]
=== [0x85cc3ce3aa0] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   10 E> 0x85cc3ce3aa0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x85cc3ce3aa3 @    3 : 1a f8             PushContext r2
         0x85cc3ce3aa5 @    5 : 10                LdaTheHole 
         0x85cc3ce3aa6 @    6 : 25 02             StaCurrentContextSlot [2]
         0x85cc3ce3aa8 @    8 : 80 01 00 02       CreateClosure [1], [0], #2
         0x85cc3ce3aac @   12 : c4                Star0 
         0x85cc3ce3aad @   13 : 80 02 01 02       CreateClosure [2], [1], #2
         0x85cc3ce3ab1 @   17 : c3                Star1 
   76 S> 0x85cc3ce3ab2 @   18 : 21 03 00          LdaGlobal [3], [0]
         0x85cc3ce3ab5 @   21 : c0                Star4 
   83 E> 0x85cc3ce3ab6 @   22 : 2d f6 04 02       GetNamedProperty r4, [4], [2]
         0x85cc3ce3aba @   26 : c1                Star3 
         0x85cc3ce3abb @   27 : 13 05             LdaConstant [5]
         0x85cc3ce3abd @   29 : be                Star6 
   98 E> 0x85cc3ce3abe @   30 : 7c 06 04 29       CreateObjectLiteral [6], [4], #41
         0x85cc3ce3ac2 @   34 : bd                Star7 
         0x85cc3ce3ac3 @   35 : 19 03 f5          Mov a0, r5
   83 E> 0x85cc3ce3ac6 @   38 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x85cc3ce3acb @   43 : 0e                LdaUndefined 
         0x85cc3ce3acc @   44 : bf                Star5 
  207 E> 0x85cc3ce3acd @   45 : 32 03 07 07       SetNamedProperty a0, [7], [7]
         0x85cc3ce3ad1 @   49 : 0b f5             Ldar r5
  173 E> 0x85cc3ce3ad3 @   51 : 32 03 08 09       SetNamedProperty a0, [8], [9]
  234 S> 0x85cc3ce3ad7 @   55 : 13 09             LdaConstant [9]
         0x85cc3ce3ad9 @   57 : c0                Star4 
  234 E> 0x85cc3ce3ada @   58 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
  234 E> 0x85cc3ce3ade @   62 : 25 02             StaCurrentContextSlot [2]
 1441 S> 0x85cc3ce3ae0 @   64 : 0b fa             Ldar r0
 1473 E> 0x85cc3ce3ae2 @   66 : 32 03 07 07       SetNamedProperty a0, [7], [7]
 5008 S> 0x85cc3ce3ae6 @   70 : 0b f9             Ldar r1
 5042 E> 0x85cc3ce3ae8 @   72 : 32 03 08 09       SetNamedProperty a0, [8], [9]
         0x85cc3ce3aec @   76 : 0e                LdaUndefined 
 5108 S> 0x85cc3ce3aed @   77 : a9                Return 
Constant pool (size = 10)
0x85cc3ce3af1: [FixedArray] in OldSpace
 - map: 0x3ada449412e1 <Map>
 - length: 10
           0: 0x085cc3ce3b51 <ScopeInfo FUNCTION_SCOPE>
           1: 0x085cc3ce3bc1 <SharedFunctionInfo lineSegmentIntersection>
           2: 0x085cc3ce3fb1 <SharedFunctionInfo movingCirclesIntersection>
           3: 0x3ada44945ab9 <String[6]: #Object>
           4: 0x3ada44944c11 <String[14]: #defineProperty>
           5: 0x085cc3ce4851 <String[10]: #__esModule>
           6: 0x085cc3ce4871 <ObjectBoilerplateDescription[3]>
           7: 0x085cc3ce3e59 <String[23]: #lineSegmentIntersection>
           8: 0x085cc3ce43a9 <String[25]: #movingCirclesIntersection>
           9: 0x085cc3ce4899 <String[8]: #./vector>
Handler Table (size = 0)
Source Position Table (size = 44)
0x085cc3ce48b1 <ByteArray[44]>
0x085cc3ce3bc1 points to: [0x85cc3ce3c30]
=== [0x85cc3ce3c30] DISASSEMBLY ===
Parameter count 5
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
  739 S> 0x85cc3ce3c30 @    0 : 19 04 fa          Mov a1, r0
  770 S> 0x85cc3ce3c33 @    3 : 19 03 f9          Mov a0, r1
  797 S> 0x85cc3ce3c36 @    6 : 19 06 f8          Mov a3, r2
  828 S> 0x85cc3ce3c39 @    9 : 19 05 f7          Mov a2, r3
  864 S> 0x85cc3ce3c3c @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x85cc3ce3c3e @   14 : aa 00             ThrowReferenceErrorIfHole [0]
         0x85cc3ce3c40 @   16 : bb                Star9 
  873 E> 0x85cc3ce3c41 @   17 : 2d f1 01 00       GetNamedProperty r9, [1], [0]
         0x85cc3ce3c45 @   21 : bb                Star9 
  880 E> 0x85cc3ce3c46 @   22 : 2d f1 02 02       GetNamedProperty r9, [2], [2]
         0x85cc3ce3c4a @   26 : bc                Star8 
  896 E> 0x85cc3ce3c4b @   27 : 2d 05 03 04       GetNamedProperty a2, [3], [4]
         0x85cc3ce3c4f @   31 : ba                Star10 
  896 E> 0x85cc3ce3c50 @   32 : 5e f0 05 03 06    CallProperty1 r10, a2, a0, [6]
         0x85cc3ce3c55 @   37 : ba                Star10 
  880 E> 0x85cc3ce3c56 @   38 : 5f f2 f1 f0 04 08 CallProperty2 r8, r9, r10, a1, [8]
         0x85cc3ce3c5c @   44 : c0                Star4 
  939 S> 0x85cc3ce3c5d @   45 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x85cc3ce3c5f @   47 : aa 00             ThrowReferenceErrorIfHole [0]
         0x85cc3ce3c61 @   49 : bb                Star9 
  948 E> 0x85cc3ce3c62 @   50 : 2d f1 01 00       GetNamedProperty r9, [1], [0]
         0x85cc3ce3c66 @   54 : bb                Star9 
  955 E> 0x85cc3ce3c67 @   55 : 2d f1 02 0a       GetNamedProperty r9, [2], [10]
         0x85cc3ce3c6b @   59 : bc                Star8 
  955 E> 0x85cc3ce3c6c @   60 : 5f f2 f1 04 06 0c CallProperty2 r8, r9, a1, a3, [12]
         0x85cc3ce3c72 @   66 : bf                Star5 
  981 S> 0x85cc3ce3c73 @   67 : 0c                LdaZero 
  997 E> 0x85cc3ce3c74 @   68 : 6b f6 0e          TestEqual r4, [14]
         0x85cc3ce3c77 @   71 : 99 0a             JumpIfFalse [10] (0x85cc3ce3c81 @ 81)
         0x85cc3ce3c79 @   73 : 0c                LdaZero 
 1017 E> 0x85cc3ce3c7a @   74 : 6b f5 0f          TestEqual r5, [15]
         0x85cc3ce3c7d @   77 : 99 04             JumpIfFalse [4] (0x85cc3ce3c81 @ 81)
 1064 S> 0x85cc3ce3c7f @   79 : 0f                LdaNull 
 1076 S> 0x85cc3ce3c80 @   80 : a9                Return 
 1092 S> 0x85cc3ce3c81 @   81 : 0c                LdaZero 
 1108 E> 0x85cc3ce3c82 @   82 : 6b f5 10          TestEqual r5, [16]
         0x85cc3ce3c85 @   85 : 99 04             JumpIfFalse [4] (0x85cc3ce3c89 @ 89)
 1154 S> 0x85cc3ce3c87 @   87 : 0f                LdaNull 
 1166 S> 0x85cc3ce3c88 @   88 : a9                Return 
 1188 S> 0x85cc3ce3c89 @   89 : 0b f5             Ldar r5
 1200 E> 0x85cc3ce3c8b @   91 : 3c f6 11          Div r4, [17]
         0x85cc3ce3c8e @   94 : be                Star6 
 1230 S> 0x85cc3ce3c8f @   95 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x85cc3ce3c91 @   97 : aa 00             ThrowReferenceErrorIfHole [0]
         0x85cc3ce3c93 @   99 : bb                Star9 
 1239 E> 0x85cc3ce3c94 @  100 : 2d f1 01 00       GetNamedProperty r9, [1], [0]
         0x85cc3ce3c98 @  104 : bb                Star9 
 1246 E> 0x85cc3ce3c99 @  105 : 2d f1 02 13       GetNamedProperty r9, [2], [19]
         0x85cc3ce3c9d @  109 : bc                Star8 
 1262 E> 0x85cc3ce3c9e @  110 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x85cc3ce3ca2 @  114 : ba                Star10 
 1262 E> 0x85cc3ce3ca3 @  115 : 5e f0 f7 f9 15    CallProperty1 r10, r3, r1, [21]
         0x85cc3ce3ca8 @  120 : ba                Star10 
 1246 E> 0x85cc3ce3ca9 @  121 : 5f f2 f1 f0 f8 17 CallProperty2 r8, r9, r10, r2, [23]
         0x85cc3ce3caf @  127 : bc                Star8 
         0x85cc3ce3cb0 @  128 : 0b f5             Ldar r5
 1280 E> 0x85cc3ce3cb2 @  130 : 3c f2 12          Div r8, [18]
         0x85cc3ce3cb5 @  133 : bd                Star7 
 1299 S> 0x85cc3ce3cb6 @  134 : 0c                LdaZero 
 1307 E> 0x85cc3ce3cb7 @  135 : 70 f3 19          TestGreaterThanOrEqual r7, [25]
         0x85cc3ce3cba @  138 : 99 2c             JumpIfFalse [44] (0x85cc3ce3ce6 @ 182)
         0x85cc3ce3cbc @  140 : 0d 01             LdaSmi [1]
 1320 E> 0x85cc3ce3cbe @  142 : 6f f3 1a          TestLessThanOrEqual r7, [26]
         0x85cc3ce3cc1 @  145 : 99 25             JumpIfFalse [37] (0x85cc3ce3ce6 @ 182)
         0x85cc3ce3cc3 @  147 : 0c                LdaZero 
 1333 E> 0x85cc3ce3cc4 @  148 : 70 f4 1b          TestGreaterThanOrEqual r6, [27]
         0x85cc3ce3cc7 @  151 : 99 1f             JumpIfFalse [31] (0x85cc3ce3ce6 @ 182)
         0x85cc3ce3cc9 @  153 : 0d 01             LdaSmi [1]
 1346 E> 0x85cc3ce3ccb @  155 : 6f f4 1c          TestLessThanOrEqual r6, [28]
         0x85cc3ce3cce @  158 : 99 18             JumpIfFalse [24] (0x85cc3ce3ce6 @ 182)
 1373 S> 0x85cc3ce3cd0 @  160 : 2d f9 04 1d       GetNamedProperty r1, [4], [29]
         0x85cc3ce3cd4 @  164 : bc                Star8 
 1380 E> 0x85cc3ce3cd5 @  165 : 2d fa 05 1f       GetNamedProperty r0, [5], [31]
         0x85cc3ce3cd9 @  169 : ba                Star10 
 1380 E> 0x85cc3ce3cda @  170 : 5e f0 fa f3 21    CallProperty1 r10, r0, r7, [33]
         0x85cc3ce3cdf @  175 : ba                Star10 
 1373 E> 0x85cc3ce3ce0 @  176 : 5e f2 f9 f0 23    CallProperty1 r8, r1, r10, [35]
 1394 S> 0x85cc3ce3ce5 @  181 : a9                Return 
 1420 S> 0x85cc3ce3ce6 @  182 : 0f                LdaNull 
 1432 S> 0x85cc3ce3ce7 @  183 : a9                Return 
Constant pool (size = 6)
0x85cc3ce3ce9: [FixedArray] in OldSpace
 - map: 0x3ada449412e1 <Map>
 - length: 6
           0: 0x085cc3ce3ba9 <String[8]: #vector_1>
           1: 0x085cc3ce3d29 <String[6]: #Vector>
           2: 0x085cc3ce3d41 <String[12]: #crossProduct>
           3: 0x085cc3ce3d61 <String[8]: #subtract>
           4: 0x3ada44944569 <String[3]: #add>
           5: 0x085cc3ce3d79 <String[8]: #multiply>
Handler Table (size = 0)
Source Position Table (size = 97)
0x085cc3ce3d91 <ByteArray[97]>
0x085cc3ce3fb1 points to: [0x85cc3ce4020]
=== [0x85cc3ce4020] DISASSEMBLY ===
Parameter count 7
Register count 19
Frame size 152
OSR urgency: 0
Bytecode age: 0
 1534 E> 0x85cc3ce4020 @    0 : 83 00 05          CreateFunctionContext [0], [5]
         0x85cc3ce4023 @    3 : 1a ed             PushContext r13
         0x85cc3ce4025 @    5 : 0b 03             Ldar a0
         0x85cc3ce4027 @    7 : 25 06             StaCurrentContextSlot [6]
         0x85cc3ce4029 @    9 : 0b 04             Ldar a1
         0x85cc3ce402b @   11 : 25 05             StaCurrentContextSlot [5]
         0x85cc3ce402d @   13 : 0b 05             Ldar a2
         0x85cc3ce402f @   15 : 25 04             StaCurrentContextSlot [4]
         0x85cc3ce4031 @   17 : 0b 06             Ldar a3
         0x85cc3ce4033 @   19 : 25 03             StaCurrentContextSlot [3]
         0x85cc3ce4035 @   21 : 0b 07             Ldar a4
         0x85cc3ce4037 @   23 : 25 02             StaCurrentContextSlot [2]
 3700 S> 0x85cc3ce4039 @   25 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x85cc3ce403b @   27 : b6                Star14 
 3713 E> 0x85cc3ce403c @   28 : 2d ec 01 00       GetNamedProperty r14, [1], [0]
         0x85cc3ce4040 @   32 : c4                Star0 
 3732 S> 0x85cc3ce4041 @   33 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x85cc3ce4043 @   35 : b6                Star14 
 3745 E> 0x85cc3ce4044 @   36 : 2d ec 02 02       GetNamedProperty r14, [2], [2]
         0x85cc3ce4048 @   40 : c3                Star1 
 3764 S> 0x85cc3ce4049 @   41 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x85cc3ce404b @   43 : b6                Star14 
 3793 E> 0x85cc3ce404c @   44 : 2d ec 01 04       GetNamedProperty r14, [1], [4]
         0x85cc3ce4050 @   48 : c2                Star2 
 3812 S> 0x85cc3ce4051 @   49 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x85cc3ce4053 @   51 : b6                Star14 
 3841 E> 0x85cc3ce4054 @   52 : 2d ec 02 06       GetNamedProperty r14, [2], [6]
         0x85cc3ce4058 @   56 : c1                Star3 
 3860 S> 0x85cc3ce4059 @   57 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x85cc3ce405b @   59 : b6                Star14 
 3873 E> 0x85cc3ce405c @   60 : 2d ec 01 08       GetNamedProperty r14, [1], [8]
         0x85cc3ce4060 @   64 : c0                Star4 
 3892 S> 0x85cc3ce4061 @   65 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x85cc3ce4063 @   67 : b6                Star14 
 3905 E> 0x85cc3ce4064 @   68 : 2d ec 02 0a       GetNamedProperty r14, [2], [10]
         0x85cc3ce4068 @   72 : bf                Star5 
 3924 S> 0x85cc3ce4069 @   73 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x85cc3ce406b @   75 : b6                Star14 
 3953 E> 0x85cc3ce406c @   76 : 2d ec 01 0c       GetNamedProperty r14, [1], [12]
         0x85cc3ce4070 @   80 : be                Star6 
 3972 S> 0x85cc3ce4071 @   81 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x85cc3ce4073 @   83 : b6                Star14 
 4001 E> 0x85cc3ce4074 @   84 : 2d ec 02 0e       GetNamedProperty r14, [2], [14]
         0x85cc3ce4078 @   88 : bd                Star7 
 4018 S> 0x85cc3ce4079 @   89 : 0b f8             Ldar r2
 4022 E> 0x85cc3ce407b @   91 : 3b f8 10          Mul r2, [16]
         0x85cc3ce407e @   94 : b6                Star14 
         0x85cc3ce407f @   95 : 0b f7             Ldar r3
 4034 E> 0x85cc3ce4081 @   97 : 3b f7 11          Mul r3, [17]
 4028 E> 0x85cc3ce4084 @  100 : 39 ec 12          Add r14, [18]
         0x85cc3ce4087 @  103 : b6                Star14 
         0x85cc3ce4088 @  104 : 0b f4             Ldar r6
 4046 E> 0x85cc3ce408a @  106 : 3b f4 13          Mul r6, [19]
 4040 E> 0x85cc3ce408d @  109 : 39 ec 14          Add r14, [20]
         0x85cc3ce4090 @  112 : b6                Star14 
         0x85cc3ce4091 @  113 : 0b f3             Ldar r7
 4058 E> 0x85cc3ce4093 @  115 : 3b f3 15          Mul r7, [21]
 4052 E> 0x85cc3ce4096 @  118 : 39 ec 16          Add r14, [22]
         0x85cc3ce4099 @  121 : b6                Star14 
         0x85cc3ce409a @  122 : 0d 02             LdaSmi [2]
         0x85cc3ce409c @  124 : b5                Star15 
         0x85cc3ce409d @  125 : 0b f8             Ldar r2
 4068 E> 0x85cc3ce409f @  127 : 3b eb 17          Mul r15, [23]
         0x85cc3ce40a2 @  130 : b5                Star15 
         0x85cc3ce40a3 @  131 : 0b f4             Ldar r6
 4074 E> 0x85cc3ce40a5 @  133 : 3b eb 18          Mul r15, [24]
 4064 E> 0x85cc3ce40a8 @  136 : 3a ec 19          Sub r14, [25]
         0x85cc3ce40ab @  139 : b6                Star14 
         0x85cc3ce40ac @  140 : 0d 02             LdaSmi [2]
         0x85cc3ce40ae @  142 : b5                Star15 
         0x85cc3ce40af @  143 : 0b f7             Ldar r3
 4084 E> 0x85cc3ce40b1 @  145 : 3b eb 1a          Mul r15, [26]
         0x85cc3ce40b4 @  148 : b5                Star15 
         0x85cc3ce40b5 @  149 : 0b f3             Ldar r7
 4090 E> 0x85cc3ce40b7 @  151 : 3b eb 1b          Mul r15, [27]
 4080 E> 0x85cc3ce40ba @  154 : 3a ec 1c          Sub r14, [28]
         0x85cc3ce40bd @  157 : bc                Star8 
 4111 S> 0x85cc3ce40be @  158 : 0b fa             Ldar r0
 4120 E> 0x85cc3ce40c0 @  160 : 3b f8 1e          Mul r2, [30]
         0x85cc3ce40c3 @  163 : b6                Star14 
         0x85cc3ce40c4 @  164 : 0b f9             Ldar r1
 4132 E> 0x85cc3ce40c6 @  166 : 3b f7 1f          Mul r3, [31]
 4126 E> 0x85cc3ce40c9 @  169 : 39 ec 20          Add r14, [32]
         0x85cc3ce40cc @  172 : b6                Star14 
         0x85cc3ce40cd @  173 : 0b f6             Ldar r4
 4144 E> 0x85cc3ce40cf @  175 : 3b f4 21          Mul r6, [33]
 4138 E> 0x85cc3ce40d2 @  178 : 39 ec 22          Add r14, [34]
         0x85cc3ce40d5 @  181 : b6                Star14 
         0x85cc3ce40d6 @  182 : 0b f5             Ldar r5
 4156 E> 0x85cc3ce40d8 @  184 : 3b f3 23          Mul r7, [35]
 4150 E> 0x85cc3ce40db @  187 : 39 ec 24          Add r14, [36]
         0x85cc3ce40de @  190 : b6                Star14 
         0x85cc3ce40df @  191 : 0b f6             Ldar r4
 4168 E> 0x85cc3ce40e1 @  193 : 3b f8 25          Mul r2, [37]
 4162 E> 0x85cc3ce40e4 @  196 : 3a ec 26          Sub r14, [38]
         0x85cc3ce40e7 @  199 : b6                Star14 
         0x85cc3ce40e8 @  200 : 0b f5             Ldar r5
 4180 E> 0x85cc3ce40ea @  202 : 3b f7 27          Mul r3, [39]
 4174 E> 0x85cc3ce40ed @  205 : 3a ec 28          Sub r14, [40]
         0x85cc3ce40f0 @  208 : b6                Star14 
         0x85cc3ce40f1 @  209 : 0b fa             Ldar r0
 4192 E> 0x85cc3ce40f3 @  211 : 3b f4 29          Mul r6, [41]
 4186 E> 0x85cc3ce40f6 @  214 : 3a ec 2a          Sub r14, [42]
         0x85cc3ce40f9 @  217 : b6                Star14 
         0x85cc3ce40fa @  218 : 0b f9             Ldar r1
 4204 E> 0x85cc3ce40fc @  220 : 3b f3 2b          Mul r7, [43]
 4198 E> 0x85cc3ce40ff @  223 : 3a ec 2c          Sub r14, [44]
 4113 E> 0x85cc3ce4102 @  226 : 47 02 1d          MulSmi [2], [29]
         0x85cc3ce4105 @  229 : bb                Star9 
 4226 S> 0x85cc3ce4106 @  230 : 0b fa             Ldar r0
 4230 E> 0x85cc3ce4108 @  232 : 3b fa 2d          Mul r0, [45]
         0x85cc3ce410b @  235 : b6                Star14 
         0x85cc3ce410c @  236 : 0b f9             Ldar r1
 4242 E> 0x85cc3ce410e @  238 : 3b f9 2e          Mul r1, [46]
 4236 E> 0x85cc3ce4111 @  241 : 39 ec 2f          Add r14, [47]
         0x85cc3ce4114 @  244 : b6                Star14 
         0x85cc3ce4115 @  245 : 0b f6             Ldar r4
 4254 E> 0x85cc3ce4117 @  247 : 3b f6 30          Mul r4, [48]
 4248 E> 0x85cc3ce411a @  250 : 39 ec 31          Add r14, [49]
         0x85cc3ce411d @  253 : b6                Star14 
         0x85cc3ce411e @  254 : 0b f5             Ldar r5
 4266 E> 0x85cc3ce4120 @  256 : 3b f5 32          Mul r5, [50]
 4260 E> 0x85cc3ce4123 @  259 : 39 ec 33          Add r14, [51]
         0x85cc3ce4126 @  262 : b6                Star14 
         0x85cc3ce4127 @  263 : 0d 02             LdaSmi [2]
         0x85cc3ce4129 @  265 : b5                Star15 
         0x85cc3ce412a @  266 : 0b fa             Ldar r0
 4276 E> 0x85cc3ce412c @  268 : 3b eb 34          Mul r15, [52]
         0x85cc3ce412f @  271 : b5                Star15 
         0x85cc3ce4130 @  272 : 0b f6             Ldar r4
 4282 E> 0x85cc3ce4132 @  274 : 3b eb 35          Mul r15, [53]
 4272 E> 0x85cc3ce4135 @  277 : 3a ec 36          Sub r14, [54]
         0x85cc3ce4138 @  280 : b6                Star14 
         0x85cc3ce4139 @  281 : 0d 02             LdaSmi [2]
         0x85cc3ce413b @  283 : b5                Star15 
         0x85cc3ce413c @  284 : 0b f9             Ldar r1
 4292 E> 0x85cc3ce413e @  286 : 3b eb 37          Mul r15, [55]
         0x85cc3ce4141 @  289 : b5                Star15 
         0x85cc3ce4142 @  290 : 0b f5             Ldar r5
 4298 E> 0x85cc3ce4144 @  292 : 3b eb 38          Mul r15, [56]
 4288 E> 0x85cc3ce4147 @  295 : 3a ec 39          Sub r14, [57]
         0x85cc3ce414a @  298 : b6                Star14 
         0x85cc3ce414b @  299 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x85cc3ce414d @  301 : b5                Star15 
         0x85cc3ce414e @  302 : 0b 08             Ldar a5
 4321 E> 0x85cc3ce4150 @  304 : 39 eb 3b          Add r15, [59]
         0x85cc3ce4153 @  307 : b5                Star15 
         0x85cc3ce4154 @  308 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x85cc3ce4156 @  310 : 18 ea             Star r16
         0x85cc3ce4158 @  312 : 0b 08             Ldar a5
 4355 E> 0x85cc3ce415a @  314 : 39 ea 3c          Add r16, [60]
 4338 E> 0x85cc3ce415d @  317 : 3b eb 3a          Mul r15, [58]
 4304 E> 0x85cc3ce4160 @  320 : 3a ec 3d          Sub r14, [61]
         0x85cc3ce4163 @  323 : ba                Star10 
 4396 S> 0x85cc3ce4164 @  324 : 0b f1             Ldar r9
 4398 E> 0x85cc3ce4166 @  326 : 3b f1 3f          Mul r9, [63]
         0x85cc3ce4169 @  329 : b6                Star14 
         0x85cc3ce416a @  330 : 0d 04             LdaSmi [4]
         0x85cc3ce416c @  332 : b5                Star15 
         0x85cc3ce416d @  333 : 0b f2             Ldar r8
 4406 E> 0x85cc3ce416f @  335 : 3b eb 40          Mul r15, [64]
         0x85cc3ce4172 @  338 : b5                Star15 
         0x85cc3ce4173 @  339 : 0b f0             Ldar r10
 4410 E> 0x85cc3ce4175 @  341 : 3b eb 41          Mul r15, [65]
 4402 E> 0x85cc3ce4178 @  344 : 3a ec 3e          Sub r14, [62]
         0x85cc3ce417b @  347 : b9                Star11 
 4419 S> 0x85cc3ce417c @  348 : 0c                LdaZero 
 4434 E> 0x85cc3ce417d @  349 : 6d ef 42          TestLessThan r11, [66]
         0x85cc3ce4180 @  352 : 99 05             JumpIfFalse [5] (0x85cc3ce4185 @ 357)
 4449 S> 0x85cc3ce4182 @  354 : 7b 43             CreateEmptyArrayLiteral [67]
 4459 S> 0x85cc3ce4184 @  356 : a9                Return 
 4505 S> 0x85cc3ce4185 @  357 : 79 03 44 25       CreateArrayLiteral [3], [68], #37
         0x85cc3ce4189 @  361 : b5                Star15 
         0x85cc3ce418a @  362 : 0c                LdaZero 
         0x85cc3ce418b @  363 : b6                Star14 
         0x85cc3ce418c @  364 : 0b f1             Ldar r9
 4507 E> 0x85cc3ce418e @  366 : 53 47             Negate [71]
         0x85cc3ce4190 @  368 : 18 ea             Star r16
 4512 E> 0x85cc3ce4192 @  370 : 21 04 48          LdaGlobal [4], [72]
         0x85cc3ce4195 @  373 : 18 e8             Star r18
 4517 E> 0x85cc3ce4197 @  375 : 2d e8 05 4a       GetNamedProperty r18, [5], [74]
         0x85cc3ce419b @  379 : 18 e9             Star r17
 4517 E> 0x85cc3ce419d @  381 : 5e e9 e8 ef 4c    CallProperty1 r17, r18, r11, [76]
 4510 E> 0x85cc3ce41a2 @  386 : 39 ea 46          Add r16, [70]
         0x85cc3ce41a5 @  389 : 18 ea             Star r16
         0x85cc3ce41a7 @  391 : 0b f2             Ldar r8
 4540 E> 0x85cc3ce41a9 @  393 : 47 02 4e          MulSmi [2], [78]
 4535 E> 0x85cc3ce41ac @  396 : 3c ea 45          Div r16, [69]
         0x85cc3ce41af @  399 : 36 eb ec 4f       StaInArrayLiteral r15, r14, [79]
         0x85cc3ce41b3 @  403 : 0d 01             LdaSmi [1]
         0x85cc3ce41b5 @  405 : b6                Star14 
         0x85cc3ce41b6 @  406 : 0b f1             Ldar r9
 4547 E> 0x85cc3ce41b8 @  408 : 53 53             Negate [83]
         0x85cc3ce41ba @  410 : 18 ea             Star r16
 4552 E> 0x85cc3ce41bc @  412 : 21 04 48          LdaGlobal [4], [72]
         0x85cc3ce41bf @  415 : 18 e8             Star r18
 4557 E> 0x85cc3ce41c1 @  417 : 2d e8 05 4a       GetNamedProperty r18, [5], [74]
         0x85cc3ce41c5 @  421 : 18 e9             Star r17
 4557 E> 0x85cc3ce41c7 @  423 : 5e e9 e8 ef 54    CallProperty1 r17, r18, r11, [84]
 4550 E> 0x85cc3ce41cc @  428 : 3a ea 52          Sub r16, [82]
         0x85cc3ce41cf @  431 : 18 ea             Star r16
         0x85cc3ce41d1 @  433 : 0b f2             Ldar r8
 4580 E> 0x85cc3ce41d3 @  435 : 47 02 56          MulSmi [2], [86]
 4575 E> 0x85cc3ce41d6 @  438 : 3c ea 51          Div r16, [81]
         0x85cc3ce41d9 @  441 : 36 eb ec 4f       StaInArrayLiteral r15, r14, [79]
         0x85cc3ce41dd @  445 : 19 eb ee          Mov r15, r12
 4608 S> 0x85cc3ce41e0 @  448 : 2d eb 06 57       GetNamedProperty r15, [6], [87]
         0x85cc3ce41e4 @  452 : b6                Star14 
         0x85cc3ce41e5 @  453 : 80 07 00 02       CreateClosure [7], [0], #2
         0x85cc3ce41e9 @  457 : 18 ea             Star r16
 4608 E> 0x85cc3ce41eb @  459 : 5e ec eb ea 59    CallProperty1 r14, r15, r16, [89]
 5005 S> 0x85cc3ce41f0 @  464 : a9                Return 
Constant pool (size = 8)
0x85cc3ce41f9: [FixedArray] in OldSpace
 - map: 0x3ada449412e1 <Map>
 - length: 8
           0: 0x085cc3ce4249 <ScopeInfo FUNCTION_SCOPE>
           1: 0x077916a18ac9 <String[1]: #x>
           2: 0x077916a18ae1 <String[1]: #y>
           3: 0x085cc3ce4409 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x085cc3ce4421 <FixedArray[2]>>
           4: 0x077916a1a991 <String[4]: #Math>
           5: 0x077916a1ac01 <String[4]: #sqrt>
           6: 0x077916a09ea9 <String[3]: #map>
           7: 0x085cc3ce4489 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 199)
0x085cc3ce4709 <ByteArray[199]>
0x085cc3ce4489 points to: [0x85cc3ce44f8]
=== [0x85cc3ce44f8] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 4656 S> 0x85cc3ce44f8 @    0 : 17 06             LdaImmutableCurrentContextSlot [6]
         0x85cc3ce44fa @    2 : c1                Star3 
 4669 E> 0x85cc3ce44fb @    3 : 2d f7 00 00       GetNamedProperty r3, [0], [0]
         0x85cc3ce44ff @    7 : c2                Star2 
         0x85cc3ce4500 @    8 : 17 05             LdaImmutableCurrentContextSlot [5]
         0x85cc3ce4502 @   10 : bf                Star5 
 4702 E> 0x85cc3ce4503 @   11 : 2d f5 01 02       GetNamedProperty r5, [1], [2]
         0x85cc3ce4507 @   15 : c0                Star4 
 4702 E> 0x85cc3ce4508 @   16 : 5e f6 f5 03 04    CallProperty1 r4, r5, a0, [4]
         0x85cc3ce450d @   21 : c0                Star4 
 4669 E> 0x85cc3ce450e @   22 : 5e f8 f7 f6 06    CallProperty1 r2, r3, r4, [6]
         0x85cc3ce4513 @   27 : c4                Star0 
 4753 S> 0x85cc3ce4514 @   28 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x85cc3ce4516 @   30 : c1                Star3 
 4766 E> 0x85cc3ce4517 @   31 : 2d f7 00 08       GetNamedProperty r3, [0], [8]
         0x85cc3ce451b @   35 : c2                Star2 
         0x85cc3ce451c @   36 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x85cc3ce451e @   38 : bf                Star5 
 4799 E> 0x85cc3ce451f @   39 : 2d f5 01 0a       GetNamedProperty r5, [1], [10]
         0x85cc3ce4523 @   43 : c0                Star4 
 4799 E> 0x85cc3ce4524 @   44 : 5e f6 f5 03 0c    CallProperty1 r4, r5, a0, [12]
         0x85cc3ce4529 @   49 : c0                Star4 
 4766 E> 0x85cc3ce452a @   50 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x85cc3ce452f @   55 : c3                Star1 
 4821 S> 0x85cc3ce4530 @   56 : 7c 02 10 29       CreateObjectLiteral [2], [16], #41
         0x85cc3ce4534 @   60 : c2                Star2 
         0x85cc3ce4535 @   61 : 0b 03             Ldar a0
 4845 E> 0x85cc3ce4537 @   63 : 33 f8 03 11       DefineNamedOwnProperty r2, [3], [17]
 4895 E> 0x85cc3ce453b @   67 : 2d f9 04 13       GetNamedProperty r1, [4], [19]
         0x85cc3ce453f @   71 : bf                Star5 
 4895 E> 0x85cc3ce4540 @   72 : 5e f5 f9 fa 15    CallProperty1 r5, r1, r0, [21]
         0x85cc3ce4545 @   77 : bf                Star5 
 4925 E> 0x85cc3ce4546 @   78 : 2d f5 05 17       GetNamedProperty r5, [5], [23]
         0x85cc3ce454a @   82 : bf                Star5 
 4936 E> 0x85cc3ce454b @   83 : 2d f5 01 19       GetNamedProperty r5, [1], [25]
         0x85cc3ce454f @   87 : c0                Star4 
         0x85cc3ce4550 @   88 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x85cc3ce4552 @   90 : be                Star6 
 4937 E> 0x85cc3ce4553 @   91 : 5e f6 f5 f4 1b    CallProperty1 r4, r5, r6, [27]
         0x85cc3ce4558 @   96 : c0                Star4 
 4960 E> 0x85cc3ce4559 @   97 : 2d f6 00 1d       GetNamedProperty r4, [0], [29]
         0x85cc3ce455d @  101 : c1                Star3 
 4961 E> 0x85cc3ce455e @  102 : 5e f7 f6 fa 1f    CallProperty1 r3, r4, r0, [31]
         0x85cc3ce4563 @  107 : 33 f8 06 21       DefineNamedOwnProperty r2, [6], [33]
         0x85cc3ce4567 @  111 : 0b f8             Ldar r2
 4997 S> 0x85cc3ce4569 @  113 : a9                Return 
Constant pool (size = 7)
0x85cc3ce4571: [FixedArray] in OldSpace
 - map: 0x3ada449412e1 <Map>
 - length: 7
           0: 0x3ada44944569 <String[3]: #add>
           1: 0x085cc3ce3d79 <String[8]: #multiply>
           2: 0x085cc3ce45b9 <ObjectBoilerplateDescription[5]>
           3: 0x085cc3ce45f1 <String[1]: #t>
           4: 0x085cc3ce3d61 <String[8]: #subtract>
           5: 0x085cc3ce4629 <String[10]: #normalized>
           6: 0x085cc3ce4609 <String[12]: #intersection>
Handler Table (size = 0)
Source Position Table (size = 53)
0x085cc3ce4649 <ByteArray[53]>
Boilerplate at 0x085cc3ce45b9: 
0x85cc3ce45b9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3ada44942059 <Map>
 - length: 5
           0: 8
           1: 0x085cc3ce45f1 <String[1]: #t>
           2: 0x3ada44941501 <Odd Oddball: uninitialized>
           3: 0x085cc3ce4609 <String[12]: #intersection>
           4: 0x3ada44941501 <Odd Oddball: uninitialized>
Boilerplate at 0x085cc3ce4871: 
0x85cc3ce4871: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3ada44942059 <Map>
 - length: 3
           0: 8
           1: 0x3ada44946419 <String[5]: #value>
           2: 0x3ada44941729 <true>
<< OUTPUTTING DISASSEMBLY END >>

```