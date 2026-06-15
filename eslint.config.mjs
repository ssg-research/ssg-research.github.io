import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    ignores: [
      "dist/",
      "node_modules/",
      ".astro/",
      // Legacy Jekyll tree (carried until the Stage 7 cutover, then removed).
      "_site/",
      "vendor/",
      "assets/",
      ".jekyll-cache/",
      ".playwright-mcp/",
    ],
  },
];
