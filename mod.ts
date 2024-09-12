/**
# rust-base64

Base64 encoding for javascript using rust and webassembly.

## Why?

atob/btoa are inefficient.

In server runtimes you can use Node bufffer:
```ts
import { Buffer } from "node:buffer";
Buffer.from(content).toString("base64");
Buffer.from(content, "base64")
```

Maybe this is still useful for browsers.

## Usage

@example
```typescript
import { encodeBase64 } from "jsr:@sigma/rust-base64";

const input = new Uint8Array([72, 101, 108, 108, 111, 33]);
const encoded = encodeBase64(input);
console.log(encoded);
```

** Browser **

@example
```ts
import { encodeBase64 } from "https://esm.sh/jsr/@sigma/rust-base64"
const input = new Uint8Array([72, 101, 108, 108, 111, 33]);
const encoded = encodeBase64(input);
console.log(encoded);
```

@module
*/

import { instantiate } from "./lib/rs_lib.generated.js";

// NOTE: Figure out if this should be exposed to users?
const exports: { encode: (input: Uint8Array) => string } = instantiate();

/**
 * Encodes a Uint8Array input into a Base64 string.
 * @param {Uint8Array} input - The input array to be encoded.
 * @returns {string} The Base64 encoded string.
 */
export function encodeBase64(input: Uint8Array): string {
  return exports.encode(input);
}
