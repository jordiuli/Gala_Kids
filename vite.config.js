import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { buildJsonLd } from "./src/data/jsonld.js";

// Afegeix a index.html les dades estructurades (JSON-LD) generades a partir de src/data/books.js
const jsonLd = () => ({
  name: "galakids-jsonld",
  transformIndexHtml: () => [
    {
      tag: "script",
      attrs: { type: "application/ld+json" },
      children: JSON.stringify(buildJsonLd(), null, 2).replace(/</g, "\\u003c"),
      injectTo: "head",
    },
  ],
});

export default defineConfig({
  plugins: [react(), jsonLd()],
  base: "/",
});
