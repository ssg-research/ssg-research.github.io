// Site-wide constants. Single source for metadata and primary navigation.

export const SITE = {
  name: "Secure Systems Group",
  description:
    "Secure Systems Group (SSG): security and privacy research at the University of Waterloo, KTH Royal Institute of Technology, and Aalto University.",
  keywords:
    "security, privacy, machine learning, platform security, systems security, research group",
  // Default OG/social-card image (Decision 5: 2025 group photo). The asset
  // itself is copied into public/assets/ in Stage 6; the tag carries the
  // absolute URL now.
  ogImage: "/assets/gp2025.jpeg",
} as const;

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

// Live nav order (al-folio _includes/header.html): About (/), the external Blog
// link, then the `nav: true` pages sorted by nav_order — MLSec (2), PlatSec (3),
// Other (4), Dissemination (5), Team (6).
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
