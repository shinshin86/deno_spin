# deno_spin

Deno porting of [go-spin](https://github.com/tj/go-spin).

## Usage

```typescript
import Spinner from "https://deno.land/x/deno_spin@v0.0.1/mod.ts";

console.log("[Default] box1: ⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏");
const box1 = new Spinner();
for (let i = 0; i < 30; i++) {
  await box1.next();
}

console.log("box2: ⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓");
console.log("and drawInterval: 200msec");
const box2 = new Spinner({ type: "box2", drawInterval: 200 });
for (let i = 0; i < 15; i++) {
  await box2.next();
}
```

### Parameter

When creating a Spinner instance, it is possible to specify the Spinner type and
drawInterval.

- [type](https://github.com/shinshin86/deno_spin/blob/main/mod.ts#L1)
- drawInterval

## GIF

![Demo gif](https://user-images.githubusercontent.com/8216064/144514238-cac872db-f876-46d8-a889-b7a0a09f7ff8.gif)

## Thank you

The implementation in this repository is a port of the implementation in
[go-spin](https://github.com/tj/go-spin) for Deno.

## Licence

[MIT](https://github.com/shinshin86/deno_spin/blob/main/LICENSE)

The Licence is MIT, according to the license of
[go-spin](https://github.com/tj/go-spin).
