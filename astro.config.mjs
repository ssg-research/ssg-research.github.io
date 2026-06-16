import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  site: "https://ssg-research.github.io",
  integrations: [sitemap(), mdx()],
  // Every URL is trailing-slash (the consistent convention chosen in Stage 4,
  // after the parity discussion). Each page builds to `dir/index.html` and Astro
  // normalises paths to end in a slash, so canonical/og:url and internal links
  // are uniform. The live site's no-slash project URLs (e.g. /platsec/blime)
  // still resolve: GitHub Pages 301-redirects a no-slash request to its
  // `dir/index.html`. URL parity is measured slash-agnostically (the visible URL
  // matches), not by exact on-disk filename.
  trailingSlash: "always",
  build: { format: "directory" },
  // The two `redirect_from` aliases from the live site, emitted as static
  // redirect pages at `dir/index.html` so `/blime/` → `/platsec/blime/`.
  redirects: {
    "/blime/": "/platsec/blime/",
    "/probandroid/": "/platsec/probandroid/",
  },
  markdown: {
    // Astro 6.4 moved remark/rehype config out of `markdown.rehypePlugins`
    // into a `unified()` processor. External links open in a new tab with a
    // safe rel — the site's only markdown-level transform.
    processor: unified({
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
