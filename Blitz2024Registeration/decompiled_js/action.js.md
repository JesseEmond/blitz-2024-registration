## Disassembled
```
=== [0x188da15e4088] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x188da15e4088 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x188da15e408c @    4 : c4                Star0 
  431 S> 0x188da15e408d @    5 : a9                Return 
Constant pool (size = 1)
0x188da15e4091: [FixedArray] in OldSpace
 - map: 0x29236f6412e1 <Map>
 - length: 1
           0: 0x188da15e40a9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x188da15e4521 <ByteArray[7]>
0x188da15e40a9 points to: [0x188da15e4118]
=== [0x188da15e4118] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   76 S> 0x188da15e4118 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x188da15e411b @    3 : c2                Star2 
   83 E> 0x188da15e411c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x188da15e4120 @    8 : c3                Star1 
         0x188da15e4121 @    9 : 13 02             LdaConstant [2]
         0x188da15e4123 @   11 : c0                Star4 
   98 E> 0x188da15e4124 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x188da15e4128 @   16 : bf                Star5 
         0x188da15e4129 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x188da15e412c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x188da15e4131 @   25 : 0e                LdaUndefined 
  159 E> 0x188da15e4132 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  186 S> 0x188da15e4136 @   30 : 80 05 00 02       CreateClosure [5], [0], #2
         0x188da15e413a @   34 : c3                Star1 
  349 E> 0x188da15e413b @   35 : 2d 03 04 09       GetNamedProperty a0, [4], [9]
         0x188da15e413f @   39 : 96 0a             JumpIfToBooleanTrue [10] (0x188da15e4149 @ 49)
  365 E> 0x188da15e4141 @   41 : 7d                CreateEmptyObjectLiteral 
         0x188da15e4142 @   42 : c1                Star3 
  385 E> 0x188da15e4143 @   43 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x188da15e4147 @   47 : 0b f7             Ldar r3
         0x188da15e4149 @   49 : c4                Star0 
  326 E> 0x188da15e414a @   50 : 62 f9 fa 0b       CallUndefinedReceiver1 r1, r0, [11]
         0x188da15e414e @   54 : 0e                LdaUndefined 
  428 S> 0x188da15e414f @   55 : a9                Return 
Constant pool (size = 6)
0x188da15e4151: [FixedArray] in OldSpace
 - map: 0x29236f6412e1 <Map>
 - length: 6
           0: 0x29236f645ab9 <String[6]: #Object>
           1: 0x29236f644c11 <String[14]: #defineProperty>
           2: 0x188da15e4191 <String[10]: #__esModule>
           3: 0x188da15e41b1 <ObjectBoilerplateDescription[3]>
           4: 0x188da15e41d9 <String[11]: #ActionTypes>
           5: 0x188da15e41f9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 31)
0x188da15e4489 <ByteArray[31]>
0x188da15e41f9 points to: [0x188da15e4268]
=== [0x188da15e4268] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  216 S> 0x188da15e4268 @    0 : 13 00             LdaConstant [0]
  238 E> 0x188da15e426a @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
  254 S> 0x188da15e426e @    6 : 13 01             LdaConstant [1]
  276 E> 0x188da15e4270 @    8 : 32 03 01 02       SetNamedProperty a0, [1], [2]
  292 S> 0x188da15e4274 @   12 : 13 02             LdaConstant [2]
  313 E> 0x188da15e4276 @   14 : 32 03 02 04       SetNamedProperty a0, [2], [4]
         0x188da15e427a @   18 : 0e                LdaUndefined 
  324 S> 0x188da15e427b @   19 : a9                Return 
Constant pool (size = 3)
0x188da15e4281: [FixedArray] in OldSpace
 - map: 0x29236f6412e1 <Map>
 - length: 3
           0: 0x188da15e42a9 <String[6]: #ROTATE>
           1: 0x188da15e42c1 <String[6]: #LOOKAT>
           2: 0x188da15e42d9 <String[5]: #SHOOT>
Handler Table (size = 0)
Source Position Table (size = 17)
0x188da15e42f1 <ByteArray[17]>
```
## Annotated
```
| 0x188da15e4088 (module_action) |
CreateClosure 0x188da15e4088 (enum_action)
r0 = acc
Return


| 0x188da15e4088 (enum_action) |
acc = global.Object
r2 = acc
acc = r2.defineProperty
r1 = acc
acc = __esModule
r4 = acc
CreateObjectLiteral ObjectBoilerplateDescription
r5 = acc
Mov a0, r3  # TODO mov? TODO what a0?
CallProperty r1, r2-r5  # TODO r2-r5?
acc = undefined
a0.ActionTypes = acc
CreateClosure 0x188da15e41f9 (define_actions)
r1 = acc
a0.ActionTypes = acc
JumpIfToBooleanTrue
...
r0 = acc
CallUndefinedReceiver1 r1, r0 (define_actions)
acc = undefined
return


| 0x188da15e41f9 (define_actions) |
acc = ROTATE
a0.ROTATE = "ROTATE"
acc = LOOKAT
a0.LOOKAT = "LOOKAT"
acc = SHOOT
a0.SHOOT = "SHOOT"
acc = undefined
return
```
## Decompiled approximation Typescript + JS-like
Inferred typescript:
```typescript
export enum ActionTypes {
	ROTATE = "ROTATE",
	LOOKAT = "LOOKAT",
	SHOOT = "SHOOT",
}
```

Transpiles to (using https://www.typescriptlang.org/play?esModuleInterop=false&target=99&module=1&allowSyntheticDefaultImports=false#code/KYDwDg9gTgLgBMAdgVwLZwIIGMYEsKIAqAnmMAM5wDeAsAFACQASgPKEaECicAvHAESt2XfgBp6DADIsWAaQ68B0uRzESAygAkZhRfy061dAL5A):
```js
// See https://stackoverflow.com/a/71668158
Object.defineProperty(exports, "__esModule", { value: true});
exports.ActionTypes = void 0;
var ActionTypes;
(function (ActionTypes) {
	ActionTypes["ROTATE"] = "ROTATE";
	ActionTypes["LOOKAT"] = "LOOKAT";
	ActionTypes["SHOOT"] = "SHOOT";
})(ActionTypes || (exports.ActionTypes = ActionTypes = {}));
```

If I run this with a `node` version v18.5.0 with `--print-bytecode`, I get almost the same bytecode:
```
[generated bytecode for function:  (0x32d93b402ce1 <SharedFunctionInfo>)]
Bytecode length: 5
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
    0 E> 0x32d93b402e70 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
  433 S> 0x32d93b402e74 @    4 : a9                Return 
Constant pool (size = 1)
0x32d93b402e21: [FixedArray] in OldSpace
 - map: 0x0f87511012e1 <Map>
 - length: 1
           0: 0x32d93b402de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x32d93b402e79 <ByteArray[7]>
[generated bytecode for function:  (0x32d93b402de9 <SharedFunctionInfo>)]
Bytecode length: 54
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
  129 S> 0x32d93b402f78 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x32d93b402f7b @    3 : c2                Star2 
  136 E> 0x32d93b402f7c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x32d93b402f80 @    8 : c3                Star1 
         0x32d93b402f81 @    9 : 13 02             LdaConstant [2]
         0x32d93b402f83 @   11 : c0                Star4 
  151 E> 0x32d93b402f84 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x32d93b402f88 @   16 : bf                Star5 
         0x32d93b402f89 @   17 : 19 03 f7          Mov a0, r3
  136 E> 0x32d93b402f8c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  193 S> 0x32d93b402f91 @   25 : 0e                LdaUndefined 
  213 E> 0x32d93b402f92 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  240 S> 0x32d93b402f96 @   30 : 80 05 00 02       CreateClosure [5], [0], #2
         0x32d93b402f9a @   34 : c3                Star1 
         0x32d93b402f9b @   35 : 0b fa             Ldar r0
  375 E> 0x32d93b402f9d @   37 : 96 0a             JumpIfToBooleanTrue [10] (0x32d93b402fa7 @ 47)
  391 E> 0x32d93b402f9f @   39 : 7d                CreateEmptyObjectLiteral 
         0x32d93b402fa0 @   40 : c4                Star0 
  411 E> 0x32d93b402fa1 @   41 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x32d93b402fa5 @   45 : 0b fa             Ldar r0
         0x32d93b402fa7 @   47 : c2                Star2 
  374 E> 0x32d93b402fa8 @   48 : 62 f9 f8 09       CallUndefinedReceiver1 r1, r2, [9]
         0x32d93b402fac @   52 : 0e                LdaUndefined 
  432 S> 0x32d93b402fad @   53 : a9                Return 
Constant pool (size = 6)
0x32d93b402f01: [FixedArray] in OldSpace
 - map: 0x0f87511012e1 <Map>
 - length: 6
           0: 0x0f8751105ab9 <String[6]: #Object>
           1: 0x0f8751104c11 <String[14]: #defineProperty>
           2: 0x32d93b402c31 <String[10]: #__esModule>
           3: 0x32d93b402ed9 <ObjectBoilerplateDescription[3]>
           4: 0x32d93b402c51 <String[11]: #ActionTypes>
           5: 0x32d93b402ea1 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 31)
0x32d93b402fb1 <ByteArray[31]>
[generated bytecode for function: exports.ActionTypes.ActionTypes (0x32d93b402ea1 <SharedFunctionInfo>)]
Bytecode length: 20
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  268 S> 0x32d93b403058 @    0 : 13 00             LdaConstant [0]
  290 E> 0x32d93b40305a @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
  304 S> 0x32d93b40305e @    6 : 13 01             LdaConstant [1]
  326 E> 0x32d93b403060 @    8 : 32 03 01 02       SetNamedProperty a0, [1], [2]
  340 S> 0x32d93b403064 @   12 : 13 02             LdaConstant [2]
  361 E> 0x32d93b403066 @   14 : 32 03 02 04       SetNamedProperty a0, [2], [4]
         0x32d93b40306a @   18 : 0e                LdaUndefined 
  372 S> 0x32d93b40306b @   19 : a9                Return 
Constant pool (size = 3)
0x32d93b402ff9: [FixedArray] in OldSpace
 - map: 0x0f87511012e1 <Map>
 - length: 3
           0: 0x32d93b402c71 <String[6]: #ROTATE>
           1: 0x32d93b402c89 <String[6]: #LOOKAT>
           2: 0x32d93b402ca1 <String[5]: #SHOOT>
Handler Table (size = 0)
Source Position Table (size = 17)
0x32d93b403071 <ByteArray[17]>
```

I str-diffed them (after removing unique info like addresses) and it was close enough -- some minor changes in what registers are used to do the processing, but I imagine my JS just doesn't exactly match what the original JS code has, which would be tedious to iron out.

I won't do this for all of them, but this is certainly encouraging to follow the logic!