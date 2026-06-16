# Secure Systems Group

Source for the Secure Systems Group (SSG) website. This guide covers how to make
changes and how to add a project page.

## How to make changes

Please do not commit directly to this repository. Fork it, make your change on a
branch, and open a pull request — or contact a maintainer (listed below) and
send them the Markdown file for your page.

## Running the site locally

With [Node.js](https://nodejs.org/) 24 or newer installed, from the cloned
repository run:

```sh
npm install
npm run dev
```

Then open the printed URL (default <http://localhost:4321>) to preview the site.
`npm run build` writes the production build to `dist/`.

## Adding a project page

1. Copy `src/content/projects/template.md` to a new file under
   `src/content/projects/`, placing it in the `mlsec/`, `platsec/`, or
   `others/` subfolder.
2. Edit the frontmatter: set `title` (the page heading) and `permalink` (the
   live URL, e.g. `/mlsec/yourproject`), then remove `published: false` so the
   page is built.
3. Write the page body in Markdown below the frontmatter.
4. Link to the new page from its section page (`src/content/pages/mlsec.md`,
   `platsec.md`, or `others.md`) using the `permalink`, e.g.
   `[Your project](yourproject)`.

To list a publication on a project page, add the entry once to `papers.bib` with
a `selected={yourkey}` field; the bibliography component renders every matching
entry, so there is no per-page citation to maintain.

## Contact

For questions or change requests, contact Asim (Machine Learning), Adam
Caulfield (Platform Security), or Michael (Other Topics).
