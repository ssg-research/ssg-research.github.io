// Site-wide constants. Single source for metadata and primary navigation.

export const SITE = {
  name: "Secure Systems Group",
  description:
    "Secure Systems Group (SSG): security and privacy research at the University of Waterloo, KTH Royal Institute of Technology, and Aalto University.",
  keywords:
    "security, privacy, machine learning, platform security, systems security, research group",
  // Default OG/social-card image (the 2025 group photo). The asset lives in
  // public/assets/; the tag carries its absolute URL.
  ogImage: "/assets/gp2025.jpeg",
} as const;

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

// Nav order: About (/), the external Blog link, then the `nav: true` pages
// sorted by nav_order — MLSec (2), PlatSec (3), Other (4), Dissemination (5),
// Team (6).
//
// The two fixed entries below frame the list; the internal section links are
// sourced from the `pages` collection in Masthead.astro (nav / nav_order
// frontmatter), so adding a nav page is a frontmatter change, not a code edit.
export const HOME_NAV: NavItem = { title: "About", href: "/" };

export const BLOG_NAV: NavItem = {
  title: "Blog",
  href: "https://crysp.uwaterloo.ca/ssg/blog",
  external: true,
};

// The CS858 reading wiki, vendored as a submodule and rendered through the
// catch-all route. Single source of truth for the link rewriter (build-time)
// and the permalink helper (route): change the URL space or content path once,
// here. Intentionally absent from HOME_NAV/BLOG_NAV — the wiki is shared by raw
// URL, never linked from the masthead.
export const WIKI = {
  // URL prefix for every wiki page. Leading and trailing slash required.
  base: "/dissemination/cs858wiki/",
  // Filesystem path (repo-root relative) the loader globs and the link
  // rewriter resolves relative `.md` targets against.
  contentRoot: "vendor/cs858-wiki/wiki",
} as const;
