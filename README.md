# Deprecated

You can juse use

```ts
import { Buffer } from "node:buffer";
Buffer.from(content).toString("base64");
```

# rust-base64

Base64 encoding for javascript using rust and webassembly.

## Why?

Most javascript runtimes have inefficient base64 encoding implementations.

Deno and bun btoa for example will throw an out of memory error when encoding
large arrays.

This library is meant to fix that.

## Usage

## Examples

**Example 1**

```typescript
import { encodeBase64 } from "jsr:@sigma/rust-base64";

const input = new Uint8Array([72, 101, 108, 108, 111, 33]);
const encoded = encodeBase64(input);
console.log(encoded);
```
