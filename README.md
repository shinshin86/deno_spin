# deno_spin

Deno porting of [go-spin](https://github.com/tj/go-spin).

## Usage

```typescript
import Spinner from "./mod.ts";

console.log("box1: ⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏");
const box1 = new Spinner();
for (let i = 0; i < 30; i++) {
  await box1.next();
}

console.log("box2: ⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓");
const box2 = new Spinner("box2", 100);
for (let i = 0; i < 15; i++) {
  await box2.next();
}
```

## Thank you

The implementation in this repository is a port of the implementation in
[go-spin](https://github.com/tj/go-spin) for Deno.

## Licence

[MIT](https://github.com/shinshin86/deno_spin/blob/main/LICENSE)

The Licence is MIT, according to the license of
[go-spin](https://github.com/tj/go-spin).
