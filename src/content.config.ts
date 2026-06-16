import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

// Two collections mirror the Jekyll source split:
//   _pages/      → `pages`     (the about + the five nav sections)
//   _projects/   → `projects`  (one page per research project)
//
// The schema is deliberately minimal: a contributor adding a page only needs a
// `title` and a `permalink`, and gets a readable CI error for anything else.
// Unlisted Jekyll frontmatter keys (display_categories, horizontal, layout …)
// are dropped at migration time — they were unused by any surviving page.

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    // The exact live URL, including its trailing slash where the live site has
    // one (e.g. `/mlsec/`). The catch-all route emits this verbatim; Stage 4
    // enforces the trailing-slash parity.
    permalink: z.string(),
    description: z.string().optional(),
    // Home (`/`) only: the al-folio `about` subtitle, raw HTML (the three
    // university links). Rendered with `set:html`.
    subtitle: z.string().optional(),
    // Primary-nav membership and order. The masthead lists `nav: true` pages
    // sorted by `nav_order` (About and the external Blog link are prepended).
    nav: z.boolean().default(false),
    nav_order: z.number().optional(),
    published: z.boolean().default(true),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    permalink: z.string(),
    // Old URLs that should 301 to this page (e.g. `/blime/`). Wired into
    // `astro.config.mjs` redirects in Stage 4.
    redirect_from: z.array(z.string()).optional(),
    // `false` keeps a page out of the build (the contributor template). The
    // catch-all skips it, preserving the live 404 at `/mlsec/template`.
    published: z.boolean().default(true),
  }),
});

export const collections = { pages, projects };
