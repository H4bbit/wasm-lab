<link rel="stylesheet" href="/wasm-lab/style.css">

<div class="hero">
  <p class="eyebrow">catppuccin mocha · webassembly lab</p>
  <h1>WASM Lab</h1>
  <p class="lede">
    Blog técnico experimental sobre WebAssembly, framebuffer, memória linear e renderização software.
  </p>
  <p class="hero-links">
    <a class="pill" href="#experimento">Experimento atual</a>
    <a class="pill" href="#temas">Temas do blog</a>
    <a class="pill" href="#codigo">Exemplo Rust</a>
  </p>
</div>

## Experimento atual

Canvas controlado por JavaScript enquanto preparamos a transição para WASM.

<canvas
  id="screen"
  width="300"
  height="120">
</canvas>

<script type="module" src="./demo/main.js"></script>

## Temas do blog

<div class="grid">
  <article class="card">
    <h3>Framebuffer</h3>
    <p>Escrita direta em pixels, composição e organização do buffer de saída.</p>
  </article>

  <article class="card">
    <h3>Memória linear</h3>
    <p>Como a memória do WASM aparece do lado do JavaScript e como observá-la visualmente.</p>
  </article>

  <article class="card">
    <h3>Rasterização</h3>
    <p>Primitivas simples, preenchimento, coordenadas e desenho em software.</p>
  </article>
</div>

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

## Próximos posts

<div class="grid">
  <article class="card">
    <h3>Memória linear do WASM</h3>
    <p>Um mapa visual dos bytes e dos ponteiros que a demo estiver usando.</p>
  </article>

  <article class="card">
    <h3>Partículas em software</h3>
    <p>Um sistema simples de partículas para testar atualização por frame.</p>
  </article>

  <article class="card">
    <h3>Rust + WASM</h3>
    <p>Estrutura do projeto, build, ponte com o navegador e caminho para a primeira renderização.</p>
  </article>
</div>
