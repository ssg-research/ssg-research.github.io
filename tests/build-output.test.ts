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

  // The companion to the check above: that one proves every link points at a
  // page, this one proves every page is pointed at. Without it a page can build
  // and deploy while being unreachable by navigation — which is what happens
  // when two entries collide on one permalink and the loser is dropped with
  // only a build warning.
  it("links to every published page from somewhere on the site", () => {
    // Pages reachable only by typing the URL. Each is deliberate, so a new
    // entry here needs a reason — that review is the point of the list.
    const unlinked = new Set([
      "/maintain/", // access-restricted; kept out of the nav on purpose
      "/dissemination/cs858-F26-papers-list/", // handed to the class directly
      "/dissemination/cs858wiki-F26/under-construction/", // wiki placeholder target
    ]);

    const htmls = walk(DIST).filter((p) => p.endsWith(".html"));
    const refRe = /href="([^"]+)"/g;
    const linked = new Set<string>();

    for (const file of htmls) {
      const pageUrl =
        "/" + file.slice(DIST.length + 1).replace(/index\.html$/, "");
      for (const match of readFileSync(file, "utf8").matchAll(refRe)) {
        let ref = match[1];
        if (/^(https?:|mailto:|tel:|data:|#|\/\/)/.test(ref)) continue;
        ref = ref.split("#")[0].split("?")[0];
        if (!ref) continue;
        const resolved = ref.startsWith("/")
          ? ref
          : posix.normalize(posix.join(pageUrl, ref));
        linked.add(resolved.endsWith("/") ? resolved : resolved + "/");
      }
    }

    const orphans = htmls
      .filter((p) => p.endsWith("index.html"))
      .filter((p) => !readFileSync(p, "utf8").includes('name="robots"'))
      .map((p) => "/" + p.slice(DIST.length + 1).replace(/index\.html$/, ""))
      .filter((url) => url !== "/" && !unlinked.has(url) && !linked.has(url));

    expect(
      orphans,
      `built but unreachable — no page links to them:\n${orphans.join("\n")}`
    ).toEqual([]);
  });
});

// Source-level, unlike everything else in this file. Two entries claiming one
// permalink collide on the loader's id, and the loader resolves that by
// dropping one and emitting a build warning — it does not fail the build.
// Which one survives is glob iteration order, so identical source can deploy
// different pages on different runs. By the time `dist/` exists the loser has
// left no trace, so this is the one invariant that has to be read from source.
describe("content sources", () => {
  const COLLECTIONS = ["src/content/pages", "src/content/projects"];

  it("declares each permalink exactly once", () => {
    const owners = new Map<string, string[]>();

    for (const base of COLLECTIONS) {
      for (const file of walk(base).filter((p) => p.endsWith(".md"))) {
        const lines = readFileSync(file, "utf8").split("\n");
        if (lines[0].trim() !== "---") continue;
        const end = lines.indexOf("---", 1);
        for (const line of lines.slice(1, end === -1 ? 1 : end)) {
          if (!line.startsWith("permalink:")) continue;
          const permalink = line
            .slice("permalink:".length)
            .split("#")[0]
            .trim();
          owners.set(permalink, [...(owners.get(permalink) ?? []), file]);
        }
      }
    }

    const collisions = [...owners]
      .filter(([, files]) => files.length > 1)
      .map(([permalink, files]) => `${permalink} <- ${files.join(", ")}`);

    expect(
      collisions,
      `permalink claimed by more than one file — the build drops all but one, ` +
        `and which one survives is not stable:\n${collisions.join("\n")}`
    ).toEqual([]);
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
