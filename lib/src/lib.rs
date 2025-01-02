use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> JsValue {
    let data = format!("Hello, {}", name);
    serde_wasm_bindgen::to_value(&data).unwrap()
} 