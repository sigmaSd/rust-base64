import {
  decodeBase64 as decodeBase64Wasm,
  encodeBase64 as encodeBase64Wasm,
} from "jsr:@sigma/rust-base64";
import {
  decodeBase64 as decodeBase64Std,
  encodeBase64 as encodeBase64Std,
} from "jsr:@std/encoding";
import { Buffer } from "node:buffer";

const length = Math.pow(2, 20);
const input = "a".repeat(length);
const encodedInput = new TextEncoder().encode(input);
const base64Input = encodeBase64Wasm(encodedInput);
const encodedBase64Input = new TextEncoder().encode(base64Input);

Deno.bench("encodeBase64Wasm", { group: "encoding" }, () => {
  encodeBase64Wasm(encodedInput);
});
Deno.bench("node:buffer:encode", { group: "encoding" }, () => {
  Buffer.from(input).toString("base64");
});
Deno.bench("encodeBase64Std", { group: "encoding" }, () => {
  encodeBase64Std(input);
});
Deno.bench("atob", { group: "encoding", baseline: true }, () => {
  atob(base64Input);
});

Deno.bench("decodeBase64Wasm", { group: "decoding" }, () => {
  decodeBase64Wasm(encodedBase64Input);
});
Deno.bench("node:buffer:decode", { group: "decoding" }, () => {
  Buffer.from(base64Input, "base64");
});
Deno.bench("decodeBase64Std", { group: "decoding" }, () => {
  decodeBase64Std(base64Input);
});
Deno.bench("atob", { group: "decoding", baseline: true }, () => {
  atob(base64Input);
});
