import path from "node:path";
import process from "node:process";
import { visit } from "unist-util-visit";

// Rewrites a wiki page's relative Markdown links (e.g. `../concepts/mi.md`,
// `papers/README.md`) to absolute site URLs under the wiki base, resolving each
// target against the page's own directory. Gated by file path: it only touches
// files under the wiki content root, so `pages`/`projects` markdown is
// untouched. External, mail/tel, and pure in-page anchors are left alone.
export default function remarkWikiLinks(options = {}) {
  const base = options.base ?? "/dissemination/cs858wiki/";
  const contentRoot = path.resolve(
    process.cwd(),
    options.contentRoot ?? "vendor/cs858-wiki/wiki"
  );

  return (tree, file) => {
    const filePath = file.path ?? (file.history && file.history[0]);
    if (!filePath || !filePath.startsWith(contentRoot)) return;

    visit(tree, "link", (node) => {
      const url = node.url;
      if (
        !url ||
        url.includes("://") ||
        url.startsWith("mailto:") ||
        url.startsWith("tel:") ||
        url.startsWith("#")
      ) {
        return;
      }

      const hashIdx = url.indexOf("#");
      const target = hashIdx === -1 ? url : url.slice(0, hashIdx);
      const anchor = hashIdx === -1 ? "" : url.slice(hashIdx);
      if (target === "") return; // pure in-page anchor

      const absTarget = path.resolve(path.dirname(filePath), target);
      let rel = path.relative(contentRoot, absTarget).split(path.sep).join("/");

      if (rel.endsWith("/README.md")) rel = rel.slice(0, -"/README.md".length);
      else if (rel === "README.md") rel = "";
      else if (rel.endsWith(".md")) rel = rel.slice(0, -".md".length);

      node.url = (rel === "" ? base : `${base}${rel}/`) + anchor;
    });
  };
}
