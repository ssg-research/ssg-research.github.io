<!-- Small content fixes need almost nothing here — one line on what changed is
     plenty. The checklist matters most for new pages and larger edits. -->

## What changed

<!-- One or two sentences. Link the affected page(s) if they are already live. -->

## Checks

- [ ] Every link I added opens the page I intended
- [ ] Any PDF or image I referenced is committed under `public/assets/`
- [ ] A new page sets `title` and `permalink`, drops `published: false`, and is
      linked from its section page (`mlsec.md`, `platsec.md`, or `others.md`)

<!-- CI runs automatically and comments on this PR:

     ci     — builds the site and checks every internal link and asset
              reference resolves. This one must pass before merging.
     links  — checks external URLs in the Markdown files you touched. Advisory
              only: publishers such as ACM and IEEE sometimes refuse automated
              requests, so a failure here is worth reading but does not block.

     A maintainer reviews and merges. The site redeploys automatically. -->
