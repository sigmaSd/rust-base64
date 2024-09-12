# Deprecated

You can juse use

```ts
import { Buffer } from "node:buffer";
Buffer.from(content).toString("base64");
```

# rust-base64

Base64 encoding for javascript using rust and webassembly.

## Why?

atob/btoa are inefficient.

In server runtimes you can use Node bufffer:

```ts
import { Buffer } from "node:buffer";
Buffer.from(content).toString("base64");
Buffer.from(content, "base64");
```

Maybe this is still useful for browsers.

## Usage

## Examples

**Example 1**

```typescript
import { encodeBase64 } from "jsr:@sigma/rust-base64";

const input = new Uint8Array([72, 101, 108, 108, 111, 33]);
const encoded = encodeBase64(input);
console.log(encoded);
```

** Browser **

**Example 2**

```ts
import { encodeBase64 } from "https://esm.sh/jsr/@sigma/rust-base64";
const input = new Uint8Array([72, 101, 108, 108, 111, 33]);
const encoded = encodeBase64(input);
console.log(encoded);
```
