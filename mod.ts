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
