# Base64 encoding for javascript using rust and webassembly.

## Why?

Most javascript runtimes have inefficient base64 encoding implementations.

Deno and bun btoa for example will throw an out of memory error when encoding
large arrays.

This library is meant to fix that.

## Usage

```typescript
import { encodeBase64 } from "jsr:rust-base64";

const input = new Uint8Array([72, 101, 108, 108, 111, 33]);
const encoded = encodeBase64(input);
console.log(encoded);
```
