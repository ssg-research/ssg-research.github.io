# Contributing

This guide is for **maintaining and developing the website itself** — layout,
components, styles, build, and deploy. To add or edit content (a project page or
a publication), see the [README](README.md) instead.

The site is built with [Astro](https://astro.build). Content lives in Markdown
under `src/content/`; the layout, components, and styles are the surrounding
Astro/CSS, and publications are generated from a single BibTeX file.

## Prerequisites

- [Node.js](https://nodejs.org/) **24 or newer** (CI runs on Node 26)
- npm (ships with Node)
- git

## Setup

```sh
git clone --recurse-submodules https://github.com/ssg-research/ssg-research.github.io.git
cd ssg-research.github.io
npm install
npm run dev
```

If you already cloned without `--recurse-submodules`, run `git submodule update --init` to fetch `vendor/cs858-wiki`.

`npm run dev` starts the dev server with hot reload at <http://localhost:4321>.

## Commands

| Command                | What it does                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| `npm run dev`          | Dev server with hot reload (for editing).                                                              |
| `npm run build`        | Production build into `dist/`.                                                                         |
| `npm run preview`      | Serve the built `dist/` exactly as deployed.                                                           |
| `npm run check`        | Astro + TypeScript type check.                                                                         |
| `npm run lint`         | ESLint + Stylelint.                                                                                    |
| `npm run format`       | Format with Prettier (`format:check` to verify only).                                                  |
| `npm run markdownlint` | Lint authored Markdown (`README.md`, `docs/`).                                                         |
| `npm test`             | Build-output tests (see [Testing](#testing)).                                                          |
| `npm run ci`           | The full gate CI runs: lint → format check → markdownlint → type check → build → HTML validate → test. |

Run `npm run ci` before pushing — it is exactly what CI enforces.

## Reviewing or smoke-testing a branch

To check out a branch and view the real built site (substitute the branch under
review for `<branch>`):

```sh
git fetch origin
git checkout <branch>
git pull
npm install
npm run build
npm run preview
```

Open the printed URL (default <http://localhost:4321>) and click through the
site. Worth checking: every nav page loads, the dark-mode toggle persists across
a reload, the layout holds at a narrow mobile width (~390px), the publication
pages on `/platsec/blime/`, `/platsec/probandroid/`, and `/platsec/memallo/`
render their entries and the BibTeX/abstract toggles expand, and the asset links
(PDFs, the group photo) open. To run the automated checks against the same
build, run `npm run ci`.

## Project structure

```text
src/
├─ bibliography/papers.bib   # single source of truth for publications
├─ content/
│  ├─ pages/                 # top-level pages (about, mlsec, platsec, …)
│  └─ projects/              # project pages, grouped mlsec/ platsec/ others/
├─ components/               # Masthead, Footer, Publications, ThemeToggle
├─ content.config.ts         # the pages, projects, and publications collections
├─ layouts/BaseLayout.astro  # <head>, meta/OG, theme script, masthead + footer
├─ pages/                    # [...slug].astro catch-all route, 404
└─ styles/                   # design tokens + base/layout CSS
public/assets/               # PDFs, slides, images (served at /assets/…)
```

## Content model

A single catch-all route, `src/pages/[...slug].astro`, builds every entry in the
`pages` and `projects` collections at its `permalink`. Publications are a third
collection loaded from `src/bibliography/papers.bib`; the `<Publications
selected="key" />` component (used in `.mdx` project pages) renders every entry
with a matching `selected` field, newest-first. The author-facing flow for
adding pages and publications is in the [README](README.md).

## Testing

`npm test` runs the build-output suite against `dist/`, so run `npm run build`
first (or run `npm run ci`, which builds before testing). It checks that the
expected pages build (and the unpublished template page does not), that every
internal link and asset reference resolves, that `robots.txt` and the sitemap
are emitted, and that the home page carries its title and OG image.
`html-validate` (part of `npm run ci`) checks the built markup.

## Updating the CS858 wiki

The CS858 wiki is pulled in as a git submodule at `vendor/cs858-wiki`, pinned to
a commit of [ssg-research/cs858-wiki](https://github.com/ssg-research/cs858-wiki).
Editing the wiki happens in that repository; this repository only tracks which
commit of it to render. To pull in wiki changes and bump the pointer:

```sh
cd vendor/cs858-wiki
git pull origin main
cd ../..
npm run dev    # or npm run build && npm run preview
```

`git status` will show `vendor/cs858-wiki` as modified once the submodule
commit it points to has moved. Commit that change and open a pull request like
any other change — the live site only picks up the new wiki content once the
pointer bump lands on `main` and deploys.

## Gotchas

- **Test the production build with `npm run preview`, not just `npm run dev`.**
  The dev server is convenient for editing, but URL routing and redirects match
  the deployed site only in the built output.
- **No-slash project URLs 404 in local preview.** Every page uses a trailing
  slash (`/platsec/blime/`). The legacy no-slash form (`/platsec/blime`) works on
  the live site because GitHub Pages redirects it, but `astro preview` does not —
  so test the trailing-slash form locally.
- **`npm install` installs the git hooks** (lint/format on commit) via the
  `prepare` script. If you install with `--ignore-scripts`, run `npm run prepare`
  to set them up.
- **`src/content/` is not auto-formatted.** Page and project Markdown is excluded
  from Prettier and markdownlint on purpose, so contributor prose is preserved
  verbatim. The rest of the source is linted and formatted.

## Deployment

The site is built and deployed to GitHub Pages by GitHub Actions
(`.github/workflows/ci-deploy.yml`): the `ci` job lints, builds, tests, and
uploads the Pages artifact on every push and pull request; the `deploy` job
publishes that artifact from `main`. The Pages source is set to "GitHub Actions".

## Pull requests

Do not commit directly to this repository. Work on a branch, run `npm run ci`,
and open a pull request.
