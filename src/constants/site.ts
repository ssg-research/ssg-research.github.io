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

// Live nav order (al-folio _includes/header.html): About (/), then the external
// Blog link, then `nav: true` pages sorted by nav_order — MLSec (2),
// PlatSec (3), Other (4), Dissemination (5), Team (6).
//
// Hardcoded here for Stage 2. Stage 3 introduces the `pages` content
// collection and sources the internal entries from it (nav / nav_order
// frontmatter); the external Blog link stays declared here.
export const NAV: readonly NavItem[] = [
  { title: "About", href: "/" },
  {
    title: "Blog",
    href: "https://crysp.uwaterloo.ca/ssg/blog",
    external: true,
  },
  { title: "MLSec", href: "/mlsec/" },
  { title: "PlatSec", href: "/platsec/" },
  { title: "Other", href: "/others/" },
  { title: "Dissemination", href: "/dissemination/" },
  { title: "Team", href: "/team/" },
];
