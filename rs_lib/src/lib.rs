use base64::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn encode(input: &[u8]) -> String {
  BASE64_STANDARD.encode(input)
}
