import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";
import remarkWikiLinks from "./src/plugins/remark-wiki-links.mjs";
import { WIKI } from "./src/constants/site";

export default defineConfig({
  site: "https://ssg-research.github.io",
  integrations: [sitemap(), mdx()],
  // Every URL is trailing-slash (the consistent site-wide convention). Each page
  // builds to `dir/index.html` and Astro normalises paths to end in a slash, so
  // canonical/og:url and internal links are uniform. No-slash project URLs (e.g.
  // /platsec/blime) still resolve: GitHub Pages 301-redirects a no-slash request
  // to its `dir/index.html`. Equivalence is judged by the visible URL (which
  // never contains index.html/.html), not the on-disk filename.
  trailingSlash: "always",
  build: { format: "directory" },
  // The two `redirect_from` aliases carried over from al-folio, emitted as static
  // redirect pages at `dir/index.html` so `/blime/` → `/platsec/blime/`.
  redirects: {
    "/blime/": "/platsec/blime/",
    "/probandroid/": "/platsec/probandroid/",
  },
  markdown: {
    // Astro 6.4 moved remark/rehype config out of `markdown.rehypePlugins`
    // into a `unified()` processor.
    processor: unified({
      // Rewrite the vendored wiki's relative `.md` links to site URLs. The
      // plugin is gated to files under WIKI.contentRoot, so pages/projects
      // markdown is left untouched. base/contentRoot come from the shared WIKI
      // constant — one source of truth with the loader and permalink helper.
      remarkPlugins: [
        [remarkWikiLinks, { base: WIKI.base, contentRoot: WIKI.contentRoot }],
      ],
      // External links open in a new tab with a safe rel.
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: "_blank",
            rel: ["noopener", "noreferrer"],
          },
        ],
      ],
    }),
  },
});
