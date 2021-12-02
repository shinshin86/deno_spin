# deno_spin

Deno porting of [go-spin](https://github.com/tj/go-spin).

## Usage

```typescript
import Spinner from "https://deno.land/x/deno_spin@v0.0.1/mod.ts";

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

## GIF

![Demo gif](https://user-images.githubusercontent.com/8216064/144514238-cac872db-f876-46d8-a889-b7a0a09f7ff8.gif)

## Thank you

The implementation in this repository is a port of the implementation in
[go-spin](https://github.com/tj/go-spin) for Deno.

## Licence

[MIT](https://github.com/shinshin86/deno_spin/blob/main/LICENSE)

The Licence is MIT, according to the license of
[go-spin](https://github.com/tj/go-spin).
