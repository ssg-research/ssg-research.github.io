import path from "node:path";
import process from "node:process";
import { visit } from "unist-util-visit";

// Rewrites a wiki page's relative links (e.g. `../concepts/mi.md`,
// `papers/README.md`) to absolute site URLs under the wiki base, resolving each
// target against the page's own directory. Covers both Markdown links
// (`[x](y.md)` → `link` nodes) and `<a href="y.md">` inside raw HTML blocks (the
// reading-list `<table>` → opaque `html` nodes the `link` visitor never sees),
// so the wiki's source links stay relative `.md` (resolving on GitHub, VS Code
// and Obsidian) while the built site serves absolute URLs. Gated by file path:
// it only touches files under the wiki content root, so `pages`/`projects`
// markdown is left untouched. External, mail/tel, and pure in-page anchors are
// left alone.
export default function remarkWikiLinks(options = {}) {
  const base = options.base ?? "/dissemination/cs858wiki/";
  const contentRoot = path.resolve(
    process.cwd(),
    options.contentRoot ?? "vendor/cs858-wiki/wiki"
  );

  return (tree, file) => {
    const filePath = file.path ?? (file.history && file.history[0]);
    if (!filePath || !filePath.startsWith(contentRoot)) return;
    const fromDir = path.dirname(filePath);

    // Resolve one relative link to its site URL, or null to leave it as-is
    // (external, mail/tel, in-page anchor, or — for raw HTML — a non-`.md`
    // target the site doesn't own and shouldn't rewrite). `htmlOnly` guards the
    // raw-HTML path: hand-written HTML can carry relative asset hrefs we must
    // not touch, so there we only rewrite links that point at a `.md` page.
    function resolve(url, htmlOnly) {
      if (
        !url ||
        url.includes("://") ||
        url.startsWith("mailto:") ||
        url.startsWith("tel:") ||
        url.startsWith("#")
      ) {
        return null;
      }

      const hashIdx = url.indexOf("#");
      const target = hashIdx === -1 ? url : url.slice(0, hashIdx);
      const anchor = hashIdx === -1 ? "" : url.slice(hashIdx);
      if (target === "") return null; // pure in-page anchor
      if (htmlOnly && !target.endsWith(".md")) return null;

      const absTarget = path.resolve(fromDir, target);
      let rel = path.relative(contentRoot, absTarget).split(path.sep).join("/");

      if (rel.endsWith("/README.md")) rel = rel.slice(0, -"/README.md".length);
      else if (rel === "README.md") rel = "";
      else if (rel.endsWith(".md")) rel = rel.slice(0, -".md".length);

      return (rel === "" ? base : `${base}${rel}/`) + anchor;
    }

    visit(tree, "link", (node) => {
      const next = resolve(node.url, false);
      if (next !== null) node.url = next;
    });

    // Walk each `href="..."` in raw HTML and rewrite the relative `.md` ones in
    // place, leaving the surrounding markup untouched. Plain string scan (no
    // regex) per repo convention; the wiki's HTML uses double-quoted hrefs.
    visit(tree, "html", (node) => {
      const marker = 'href="';
      let out = "";
      let i = 0;
      for (;;) {
        const start = node.value.indexOf(marker, i);
        if (start === -1) {
          out += node.value.slice(i);
          break;
        }
        const valStart = start + marker.length;
        const valEnd = node.value.indexOf('"', valStart);
        if (valEnd === -1) {
          out += node.value.slice(i);
          break;
        }
        const url = node.value.slice(valStart, valEnd);
        const next = resolve(url, true);
        out += node.value.slice(i, valStart) + (next ?? url);
        i = valEnd; // resume at the closing quote, preserving it
      }
      node.value = out;
    });
  };
}
