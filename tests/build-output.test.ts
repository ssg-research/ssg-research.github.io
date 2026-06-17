import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, posix } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";

// Build-output tests: run against the static site in `dist/`, so a production
// build must exist first. `npm run ci` builds before testing; to run this suite
// on its own, run `npm run build` first.
const DIST = "dist";

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

beforeAll(() => {
  if (!existsSync(DIST)) {
    throw new Error(
      `\`${DIST}/\` not found — run \`npm run build\` before \`npm test\` (CI runs the build first).`
    );
  }
});

describe("pages", () => {
  it("builds every expected page", () => {
    const pages = [
      "/",
      "/mlsec/",
      "/platsec/",
      "/others/",
      "/dissemination/",
      "/team/",
      "/maintain/",
      "/platsec/blime/",
      "/mlsec/modelExtDef/",
      "/others/fias/",
    ];
    for (const url of pages) {
      expect(
        existsSync(join(DIST, url, "index.html")),
        `missing page: ${url}`
      ).toBe(true);
    }
  });

  it("does not publish the unpublished template page", () => {
    expect(existsSync(join(DIST, "mlsec/template/index.html"))).toBe(false);
  });

  it("emits robots.txt and the sitemap", () => {
    expect(existsSync(join(DIST, "robots.txt"))).toBe(true);
    expect(existsSync(join(DIST, "sitemap-index.xml"))).toBe(true);
  });
});

describe("links", () => {
  it("resolves every internal link and asset reference", () => {
    const htmls = walk(DIST).filter((p) => p.endsWith(".html"));
    const refRe = /(?:href|src)="([^"]+)"/g;
    const broken: string[] = [];
    const seen = new Set<string>();

    for (const file of htmls) {
      const pageUrl =
        "/" + file.slice(DIST.length + 1).replace(/index\.html$/, "");
      for (const match of readFileSync(file, "utf8").matchAll(refRe)) {
        let ref = match[1];
        // Skip external, protocol-relative, anchor, and non-navigational schemes.
        if (/^(https?:|mailto:|tel:|data:|#|\/\/)/.test(ref)) continue;
        ref = ref.split("#")[0].split("?")[0];
        if (!ref) continue;

        const resolved = ref.startsWith("/")
          ? ref
          : posix.normalize(posix.join(pageUrl, ref));
        const key = `${pageUrl} -> ${resolved}`;
        if (seen.has(key)) continue;
        seen.add(key);

        const candidates = [
          join(DIST, resolved),
          join(DIST, resolved, "index.html"),
          join(DIST, resolved.replace(/\/$/, "") + ".html"),
        ];
        if (!candidates.some(existsSync)) broken.push(key);
      }
    }

    expect(broken, `broken internal references:\n${broken.join("\n")}`).toEqual(
      []
    );
  });
});

describe("metadata", () => {
  it("sets the title and an absolute OG image on the home page", () => {
    const home = readFileSync(join(DIST, "index.html"), "utf8");
    expect(home).toContain("<title>");
    expect(home).toContain(
      'property="og:image" content="https://ssg-research.github.io/assets/gp2025.jpeg"'
    );
  });
});
