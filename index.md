<link rel="stylesheet" href="/wasm-lab/style.css">

# WASM Lab

Meu laboratório de WebAssembly e renderização.

---

## Primeira demo

Canvas controlado por JavaScript.

<canvas
    id="screen"
    width="300"
    height="120">
</canvas>

<script type="module" src="./demo/main.js"></script>

---

## Exemplo Rust

Primeiro teste de bloco de código com syntax highlight:

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

---

## Objetivo

Quero explorar:

- framebuffer
- memória linear
- rasterização
- Rust + WebAssembly
- visualização de memória
- renderização software
