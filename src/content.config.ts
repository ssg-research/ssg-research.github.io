import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    permalink: z.string(),
    description: z.string().optional(),
    subtitle: z.string().optional(),
    nav: z.boolean().optional(),
    nav_order: z.number().optional(),
    published: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    permalink: z.string(),
    redirect_from: z.array(z.string()).optional(),
    published: z.boolean().optional(),
  }),
});

const publications = defineCollection({
  loader: {
    name: "bibtex-loader",
    async load({ store, parseData }) {
      const { promises: fs } = await import("node:fs");
      // @ts-expect-error No typings available for this package
      const { parse } = await import("@retorquere/bibtex-parser");
      const bibStr = await fs.readFile(
        "./src/bibliography/papers.bib",
        "utf-8"
      );
      // `sentenceCase: false` keeps titles and venues verbatim from the .bib.
      // The parser's default sentence-casing would lowercase every word not
      // brace-protected ("BliMe Linter" → "BliMe linter"), which diverges from
      // the live site (jekyll-scholar renders the source casing as-is).
      const parsed = parse(bibStr, { sentenceCase: false });
      for (const entry of parsed.entries) {
        const data = {
          type: entry.type,
          ...entry.fields,
          bibtex: entry.input,
        };
        const parsedData = await parseData({ id: entry.key, data });
        store.set({ id: entry.key, data: parsedData });
      }
    },
  },
  schema: z.object({
    type: z.string(),
    title: z.string(),
    author: z
      .array(
        z.object({
          lastName: z.string().optional(),
          firstName: z.string().optional(),
        })
      )
      .optional(),
    booktitle: z.string().optional(),
    journal: z.string().optional(),
    school: z.string().optional(),
    location: z.array(z.string()).optional(),
    year: z.union([z.string(), z.number()]).optional(),
    month: z.string().optional(),
    isbn: z.string().optional(),
    doi: z.string().optional(),
    selected: z.string().optional(),
    bibtex_show: z.string().optional(),
    abbr: z.string().optional(),
    arxiv: z.string().optional(),
    html: z.string().optional(),
    pdf: z.string().optional(),
    supp: z.string().optional(),
    blog: z.string().optional(),
    code: z.string().optional(),
    poster: z.string().optional(),
    slides: z.string().optional(),
    website: z.string().optional(),
    abstract: z.string().optional(),
    note: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

export const collections = { pages, projects, publications };
