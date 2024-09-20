use base64::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn encode(input: &[u8]) -> String {
  BASE64_STANDARD.encode(input)
}

#[wasm_bindgen]
pub fn decode(input: &[u8]) -> Result<Vec<u8>, JsError> {
  BASE64_STANDARD.decode(input).map_err(|e| e.into())
}
