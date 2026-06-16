import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  site: "https://ssg-research.github.io",
  integrations: [sitemap()],
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
