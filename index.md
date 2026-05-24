---
layout: default
title: Home
---

# WASM Lab

Blog técnico experimental sobre WebAssembly, framebuffer, memória linear e renderização software.

## Experimento atual

Canvas controlado por JavaScript enquanto preparamos a transição para WASM.

<canvas
  id="screen"
  width="300"
  height="120">
</canvas>

<script type="module" src="./demo/main.js"></script>

## Temas do blog

- framebuffer
- memória linear
- rasterização
- Rust + WebAssembly
- renderização software

## Exemplo Rust

```rust
pub struct Framebuffer {
    width: usize,
    height: usize,
    pixels: Vec<u32>,
}

impl Framebuffer {
    pub fn clear(&mut self, color: u32) {
        self.pixels.fill(color);
    }
}
```
