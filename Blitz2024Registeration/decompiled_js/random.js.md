## Decompiled approximation Typescript + JS-like
Inferred typescript:
```typescript
import seedrandom = require('seedrandom');
export class Random {
    rng: any

    constructor(seed: any) {
        this.rng = seedrandom(seed.toString())
    }

    random() {
        this.rng()
    }
}
```

Which would give:
```js
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const seedrandom = require("seedrandom");
class Random {
    constructor(seed) {
        this.rng = seedrandom(seed.toString());
    }
    random() {
        this.rng();
    }
}
exports.Random = Random;
```
## Annotated
```
| 0x19b464464088 (module_hdr) |
# return CreateClosure module_impl
acc = CreateClosure 0x19b464464118 (module_impl)
r0 = acc
Return acc

| 0x19b464464118 (module_impl) |
CreateFunctionContext FUNCTION_SCOPE [1]
PushContext r1  # save context in r1
CurrentContextSlot[2] = TheHole # https://stackoverflow.com/a/61427313
r3 = global.Object
r2 = Object.defineProperty
r5 = "__esModule"
r6 = CreateObjectLiteral ObjectBoilerplateDescription
r4 = exports
Object.defineProperty(exports, "__esModule", {value: true})  # {value:true} inferred
exports.Random = undefined
r3 = "seedrandom"
StaCurrentContextSlot[2] = import("seedrandom")
r5 = TheHole
r2 = CreateClosure 0x19b464464480 (Random)
r3 = FixedArray[7] (0x19b4644642a9)
r6 = CreateClosure 0x19b4644646d8 (random)
r4 = r2 (Random)
# DefineClass(class_boilerplate, constructor, super_class)
r3 = DefineClass(boilerplate=FixedArray[7], ctor=Random, super=TheHole, random)
r0 = r4 (Random)
exports.Random = r0 (Random)
return undefined


| 0x19b464464480 (Random) |
acc = LdaImmutableCurrentContextSlot [2] # seedrandom
ThrowReferenceErrorIfHole seedrandom
r1 = seedrandom
r2 = a0.toString
r2 = a0.toString()
this.rng = seedrandom(r2)
return undefined


| 0x19b4644646d8 (random) |
r0 = this.rng
return this.rng()
```
## Disassembled
```
<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x19b464464088] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x19b464464088 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x19b46446408c @    4 : c4                Star0 
  412 S> 0x19b46446408d @    5 : a9                Return 
Constant pool (size = 1)
0x19b464464091: [FixedArray] in OldSpace
 - map: 0x284952b412e1 <Map>
 - length: 1
           0: 0x19b4644640a9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x19b4644647f1 <ByteArray[7]>
0x19b4644640a9 points to: [0x19b464464118]
=== [0x19b464464118] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   10 E> 0x19b464464118 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x19b46446411b @    3 : 1a f9             PushContext r1
         0x19b46446411d @    5 : 10                LdaTheHole 
         0x19b46446411e @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x19b464464120 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x19b464464123 @   11 : c1                Star3 
   83 E> 0x19b464464124 @   12 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x19b464464128 @   16 : c2                Star2 
         0x19b464464129 @   17 : 13 03             LdaConstant [3]
         0x19b46446412b @   19 : bf                Star5 
   98 E> 0x19b46446412c @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x19b464464130 @   24 : be                Star6 
         0x19b464464131 @   25 : 19 03 f6          Mov a0, r4
   83 E> 0x19b464464134 @   28 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x19b464464139 @   33 : 0e                LdaUndefined 
  154 E> 0x19b46446413a @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  183 S> 0x19b46446413e @   38 : 13 06             LdaConstant [6]
         0x19b464464140 @   40 : c1                Star3 
  183 E> 0x19b464464141 @   41 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  183 E> 0x19b464464145 @   45 : 25 02             StaCurrentContextSlot [2]
         0x19b464464147 @   47 : 10                LdaTheHole 
         0x19b464464148 @   48 : bf                Star5 
         0x19b464464149 @   49 : 80 08 00 02       CreateClosure [8], [0], #2
         0x19b46446414d @   53 : c2                Star2 
         0x19b46446414e @   54 : 13 07             LdaConstant [7]
         0x19b464464150 @   56 : c1                Star3 
         0x19b464464151 @   57 : 80 09 01 02       CreateClosure [9], [1], #2
         0x19b464464155 @   61 : be                Star6 
         0x19b464464156 @   62 : 19 f8 f6          Mov r2, r4
         0x19b464464159 @   65 : 65 28 00 f7 04    CallRuntime [DefineClass], r3-r6
         0x19b46446415e @   70 : c1                Star3 
         0x19b46446415f @   71 : 19 f6 fa          Mov r4, r0
  349 S> 0x19b464464162 @   74 : 0b fa             Ldar r0
  364 E> 0x19b464464164 @   76 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x19b464464168 @   80 : 0e                LdaUndefined 
  409 S> 0x19b464464169 @   81 : a9                Return 
Constant pool (size = 10)
0x19b464464171: [FixedArray] in OldSpace
 - map: 0x284952b412e1 <Map>
 - length: 10
           0: 0x19b4644641d1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x284952b45ab9 <String[6]: #Object>
           2: 0x284952b44c11 <String[14]: #defineProperty>
           3: 0x19b464464249 <String[10]: #__esModule>
           4: 0x19b464464269 <ObjectBoilerplateDescription[3]>
           5: 0x19b464464291 <String[6]: #Random>
           6: 0x19b464464229 <String[10]: #seedrandom>
           7: 0x19b4644642a9 <FixedArray[7]>
           8: 0x19b464464411 <SharedFunctionInfo Random>
           9: 0x19b464464669 <SharedFunctionInfo random>
Handler Table (size = 0)
Source Position Table (size = 32)
0x19b4644647a9 <ByteArray[32]>
0x19b464464411 points to: [0x19b464464480]
=== [0x19b464464480] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  253 S> 0x19b464464480 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
  264 E> 0x19b464464482 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x19b464464484 @    4 : c3                Star1 
  280 E> 0x19b464464485 @    5 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
         0x19b464464489 @    9 : c2                Star2 
  280 E> 0x19b46446448a @   10 : 5d f8 03 02       CallProperty0 r2, a0, [2]
         0x19b46446448e @   14 : c2                Star2 
  264 E> 0x19b46446448f @   15 : 62 f9 f8 04       CallUndefinedReceiver1 r1, r2, [4]
  262 E> 0x19b464464493 @   19 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
         0x19b464464497 @   23 : 0e                LdaUndefined 
  297 S> 0x19b464464498 @   24 : a9                Return 
Constant pool (size = 3)
0x19b4644644a1: [FixedArray] in OldSpace
 - map: 0x284952b412e1 <Map>
 - length: 3
           0: 0x19b464464229 <String[10]: #seedrandom>
           1: 0x284952b462b9 <String[8]: #toString>
           2: 0x2150633a8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 18)
0x19b4644644e1 <ByteArray[18]>
0x19b464464669 points to: [0x19b4644646d8]
=== [0x19b4644646d8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  334 S> 0x19b4644646d8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x19b4644646dc @    4 : c4                Star0 
  334 E> 0x19b4644646dd @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
  340 S> 0x19b4644646e1 @    9 : a9                Return 
Constant pool (size = 1)
0x19b4644646e9: [FixedArray] in OldSpace
 - map: 0x284952b412e1 <Map>
 - length: 1
           0: 0x2150633a8a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 9)
0x19b464464701 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
```