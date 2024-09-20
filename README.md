# rust-base64

Base64 encoding and decoding for javascript using rust and webassembly.

## Why?

atob/btoa are inefficient.

In server runtimes you can use Node bufffer:

```ts
import { Buffer } from "node:buffer";
import assert from "node:assert";

const content = "hello";
const encodeDecode = Buffer.from(
  Buffer.from(content).toString("base64"),
  "base64",
).toString();
assert(content === encodeDecode);
```

Maybe this is still useful for browsers.

## Usage

## Examples

**Example 1**

```typescript
import { decodeBase64, encodeBase64 } from "jsr:@sigma/rust-base64";
import assert from "node:assert";

const value = "hello";
const encoded = encodeBase64(new TextEncoder().encode(value));
const decoded = new TextDecoder().decode(
  decodeBase64(new TextEncoder().encode(encoded)),
);

assert(value === decoded);
```

** Browser **

**Example 2**

```ts
import {
  decodeBase64,
  encodeBase64,
} from "https://esm.sh/jsr/@sigma/rust-base64";
const value = "hello";
const encoded = encodeBase64(new TextEncoder().encode(value));
const decoded = new TextDecoder().decode(
  decodeBase64(new TextEncoder().encode(encoded)),
);
if (decoded !== value) throw new Error("encoded/decoded incorrectly");
```
