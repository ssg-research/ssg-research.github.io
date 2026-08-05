# Secure Systems Group

Source for the [Secure Systems Group (SSG)](https://ssg-research.github.io)
website.

This README covers **editing content in the browser** — no clone, no Node, no
local build. If you maintain the website itself (layout, components, build,
deploy), see [CONTRIBUTING.md](CONTRIBUTING.md).

You need write access to this repository, which comes with membership of the
`ssg-research` organisation. Ask a maintainer (see [Contact](#contact)) if
GitHub says you cannot commit.

## Edit a page

1. Click the **Edit** link for your page in the tables below.
2. Make the change. The **Preview** tab shows the rendered Markdown.
3. Click **Commit changes…**, choose _Create a new branch and start a pull
   request_, and commit.

A maintainer reviews the pull request and merges it. The site redeploys itself.

### Pages

| Page                                                           | Edit                                                                                                                    |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [About](https://ssg-research.github.io/)                       | [about.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/pages/about.md)                 |
| [MLSec](https://ssg-research.github.io/mlsec/)                 | [mlsec.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/pages/mlsec.md)                 |
| [PlatSec](https://ssg-research.github.io/platsec/)             | [platsec.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/pages/platsec.md)             |
| [Other](https://ssg-research.github.io/others/)                | [others.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/pages/others.md)               |
| [Dissemination](https://ssg-research.github.io/dissemination/) | [dissemination.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/pages/dissemination.md) |
| [Team](https://ssg-research.github.io/team/)                   | [team.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/pages/team.md)                   |
| [Maintainers](https://ssg-research.github.io/maintain/)        | [maintainer.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/maintainer.md)    |

### Project pages

| Project                                                                                                   | Edit                                                                                                                             |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [Content Moderation for Generative Models](https://ssg-research.github.io/mlsec/conceptfilter/)           | [conceptfilter.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/mlsec/conceptfilter.md) |
| [Feature Locking for Language Models](https://ssg-research.github.io/mlsec/featurelock/)                  | [featurelock.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/mlsec/featurelock.md)     |
| [Unintended Interactions among ML Risks and Defenses](https://ssg-research.github.io/mlsec/interactions/) | [interactions.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/mlsec/interactions.md)   |
| [Machine Learning Property Attestations](https://ssg-research.github.io/mlsec/mlattestation/)             | [mlattestation.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/mlsec/mlattestation.md) |
| [Model Extraction Attacks and Defenses](https://ssg-research.github.io/mlsec/modelExtDef/)                | [modelExtDef.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/mlsec/modelExtDef.md)     |
| [Blinded Memory](https://ssg-research.github.io/platsec/blime/)                                           | [blime.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/platsec/blime.md)               |
| [Enhancing Memory-Safe Architectures](https://ssg-research.github.io/platsec/coloredcaps/)                | [coloredcaps.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/platsec/coloredcaps.md)   |
| [Memory Allocation](https://ssg-research.github.io/platsec/memallo/)                                      | [memallo.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/platsec/memallo.md)           |
| [Availability and Run-time Integrity Conflicts](https://ssg-research.github.io/platsec/pair/)             | [pair.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/platsec/pair.md)                 |
| [Probably Android](https://ssg-research.github.io/platsec/probandroid/)                                   | [probandroid.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/platsec/probandroid.md)   |
| [FIAs](https://ssg-research.github.io/others/fias/)                                                       | [fias.md](https://github.com/ssg-research/ssg-research.github.io/edit/main/src/content/projects/others/fias.md)                  |

Two pages are not hand-edited. The
[CS858 paper list](https://ssg-research.github.io/dissemination/cs858-F26-papers-list/)
body is generated by `scripts/gen-papers-list.py`, and the
[CS858 wiki](https://ssg-research.github.io/dissemination/cs858wiki-F26/) lives
in its own repository. Contact a maintainer for either.

## Add a project page

1. Open
   [template.md](https://github.com/ssg-research/ssg-research.github.io/blob/main/src/content/projects/template.md),
   copy its contents, and create a new file under
   `src/content/projects/mlsec/`, `platsec/`, or `others/`. In the GitHub
   editor, **Add file → Create new file** and typing the full path with slashes
   puts it in the right folder.
2. Set `title` (the page heading) and `permalink` (the live URL, e.g.
   `/mlsec/yourproject`), then delete the `published: false` line. A page that
   keeps that line is never built, which is useful while drafting.
3. Write the body in Markdown.
4. Link it from its section page — MLSec, PlatSec, or Other above — as
   `[Your project](yourproject)`.

## Conventions

**Publications** go on the project page they belong to, under
`## Conference/journal paper publications`, one bullet each:

```markdown
- First Author, Second Author, N. Asokan: **Title of the Paper.** [Venue Year](https://example.org/paper). arXiv preprint [arXiv:0000.00000](https://arxiv.org/abs/0000.00000).
```

Link the venue to the publisher page or DOI, and the preprint to arXiv. Author
names follow whatever form the paper itself uses.

**Files** — PDFs, posters, and slides go in `public/assets/pdf/`, referenced
from a page as `/assets/pdf/yourfile.pdf` with a leading slash. Upload them
through **Add file → Upload files** in the GitHub editor.

**Links between pages** use the permalink, e.g. `[BliMe](/platsec/blime)`.

**Section headings** are `##`. Each page opens with a single `#` matching its
`title`.

## What happens after you open a pull request

Two automated checks run and report on the pull request:

- **ci** builds the site and verifies that every internal link and asset
  reference resolves. This must pass before merging.
- **links** checks external URLs in the Markdown files you changed. It is
  advisory: publishers such as ACM and IEEE sometimes refuse automated
  requests, so read a failure here rather than trusting it blindly.

## Contact

For anything else — a new section, styling or layout changes, removing a page,
or a change you would rather not make yourself — contact Asim Waheed (Machine
Learning), Adam Caulfield (Platform Security), or Michael (Other Topics), or
[open an issue](https://github.com/ssg-research/ssg-research.github.io/issues/new/choose).

## License

Released under the [MIT License](LICENSE).
