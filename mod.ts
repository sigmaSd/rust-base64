/**
# rust-base64

Base64 encoding for javascript using rust and webassembly.

## Why?

Most javascript runtimes have inefficient base64 encoding implementations.

Deno and bun btoa for example will throw an out of memory error when encoding
large arrays.

This library is meant to fix that.

## Usage

@example
```typescript
import { encodeBase64 } from "jsr:rust-base64";

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
