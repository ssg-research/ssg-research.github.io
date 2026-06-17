# Secure Systems Group

Source for the [Secure Systems Group (SSG)](https://ssg-research.github.io)
website.

This README is for **adding or editing content** — a project page or a
publication. If you maintain the website itself (layout, components, build,
deploy), see [CONTRIBUTING.md](CONTRIBUTING.md).

## Adding or editing a project page

You will need [Node.js](https://nodejs.org/) 24 or newer.

1. Fork this repository, clone your fork, then install and start the dev server:

   ```sh
   npm install
   npm run dev
   ```

   Open the printed URL (default <http://localhost:4321>) to preview as you edit.

2. Copy `src/content/projects/template.md` to a new file under
   `src/content/projects/`, in the `mlsec/`, `platsec/`, or `others/` subfolder.

3. Edit the frontmatter — set `title` (the page heading) and `permalink` (the
   live URL, e.g. `/mlsec/yourproject`), then remove the `published: false` line.
   Write the page body in Markdown below the frontmatter.

4. Link to your page from its section page (`src/content/pages/mlsec.md`,
   `platsec.md`, or `others.md`) using the permalink, e.g.
   `[Your project](yourproject)`.

5. Commit on a branch and open a pull request.

Prefer not to use git? Send your Markdown file to a maintainer (see
[Contact](#contact)) and they will add it.

## Adding a publication

Add the entry once to `src/bibliography/papers.bib` with a `selected={yourkey}`
field that matches the project. It then appears on that project's page
automatically — there is no per-page citation to maintain.

## Contact

For questions or change requests, contact Asim Waheed (Machine Learning), Adam
Caulfield (Platform Security), or Michael (Other Topics).

## License

Released under the [MIT License](LICENSE).
