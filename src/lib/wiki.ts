// Wiki entries carry no `permalink` or guaranteed `title` (index README.md
// files have no frontmatter), so the route derives both from the glob `id`
// (the file path under the content root, no extension) and the body's first
// H1. Plain string operations, no regex, per repo convention.

import { WIKI } from "../constants/site";

// "README" -> base ; "papers/README" -> base + "papers/" ;
// "papers/carlini-2022-lira" -> base + "papers/carlini-2022-lira/".
// README maps to its directory; everything else gets a trailing slash to match
// the site's `trailingSlash: "always"`.
export function wikiPermalink(id: string): string {
  const parts = id.split("/");
  if (parts[parts.length - 1] === "README") parts.pop();
  const rel = parts.join("/");
  return rel === "" ? WIKI.base : `${WIKI.base}${rel}/`;
}

// Title precedence: explicit frontmatter `title`, else the body's first H1,
// else a path-derived fallback (the root index becomes "CS858 Wiki").
export function wikiTitle(
  data: { title?: string },
  body: string | undefined,
  id: string
): string {
  if (data.title) return data.title;
  const h1 = firstH1(body ?? "");
  if (h1) return h1;
  const last = id.split("/").pop() ?? "wiki";
  return last === "README" ? "CS858 Wiki" : last;
}

function firstH1(body: string): string | undefined {
  for (const line of body.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) return trimmed.slice(2).trim();
  }
  return undefined;
}
