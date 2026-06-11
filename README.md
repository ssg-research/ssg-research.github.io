# Secure Systems Group

We provide instructions on how to modify webpages in this repository or create a project webpage.

## How to make Changes

Any changes should not be made by committing directly to this repository.  Either contact the maintainer (listed at bottom) or submit a pull request.

1. Fork this repository to a local version
2. Submit a pull request or contact a maintainer and send them the `.md` file for your project page

## How to run the website locally

With [Ruby](https://www.ruby-lang.org/) and [Bundler](https://bundler.io/) installed, from the cloned repository run `bundle install` once, then `bundle exec jekyll serve` to preview the site at `http://localhost:4000`.

## How to create a project webpage

For creating the project webpage for the first time, please use the template found under `_projects/template.md` (it has `published: false` in its frontmatter so it never renders on the live site — remove that line in your copy)

The project webpages should be added to _projects/mlsec or _projects/platsec with the filename as <projectname>.md
Once the project page has been created, link to the project webpage in _pages/mlsec.md or _pages/platsec.md as [Model extraction attacks and defenses](/mlsec/modelExtDef) (use the `permalink:` from the project page's frontmatter, not the file path)


If you wish to make your project page in HTML instead, it is recommended to run the website locally for viewing/testing.
All HTML project pages should follow the `page` template (found in `_layouts/page.html`).

Please make changes only to your own project pages and not the rest of the website.

## Contact

For any questions or requests to change a page, please contact Asim (Machine Learning), Adam Caulfield (Platform Security), Michael (Other Topics)
