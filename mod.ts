/**
 * # rust-base64
 *
 * Base64 encoding and decoding for javascript using rust and webassembly.
 *
 * ## Why?
 *
 * atob/btoa are inefficient.
 *
 * In server runtimes you can use Node bufffer:
 * ```ts
 * import { Buffer } from "node:buffer";
 * import assert from "node:assert";
 *
 * const content = "hello"
 * const encodeDecode = Buffer.from(Buffer.from(content).toString("base64"), "base64").toString()
 * assert(content === encodeDecode)
 * ```
 *
 * Maybe this is still useful for browsers.
 *
 * ## Usage
 *
 * @example
 * ```typescript
 * import { encodeBase64, decodeBase64 } from "jsr:@sigma/rust-base64";
 * import assert from "node:assert";
 *
 * const value = "hello";
 * const encoded = encodeBase64(new TextEncoder().encode(value));
 * const decoded = new TextDecoder().decode(decodeBase64(new TextEncoder().encode(encoded)));
 *
 * assert(value === decoded);
 * ```
 *
 * ** Browser **
 *
 * @example
 * ```ts
 * import { encodeBase64, decodeBase64 } from "https://esm.sh/jsr/@sigma/rust-base64"
 * const value = "hello";
 * const encoded = encodeBase64(new TextEncoder().encode(value));
 * const decoded = new TextDecoder().decode(decodeBase64(new TextEncoder().encode(encoded)));
 * if (decoded !== value) throw new Error("encoded/decoded incorrectly")
 * ```
 *
 * @module
 */

import { instantiate } from "./lib/rs_lib.generated.js";

// NOTE: Figure out if this should be exposed to users?
const exports: {
  encode: (input: Uint8Array) => string;
  decode: (input: Uint8Array) => Uint8Array;
} = instantiate();

/**
 * Encodes a Uint8Array input into a Base64 string.
 * @param {Uint8Array} input - The input array to be encoded.
 * @returns {string} The Base64 encoded string.
 */
export function encodeBase64(input: Uint8Array): string {
  return exports.encode(input);
}

/**
 * Decodes a Base64 encoded Uint8Array into a Uint8Array.
 * @param {Uint8Array} input - The Base64 encoded Uint8Array to be decoded.
 * @returns {Uint8Array} The decoded Uint8Array.
 */
export function decodeBase64(input: Uint8Array): Uint8Array {
  return exports.decode(input);
}
