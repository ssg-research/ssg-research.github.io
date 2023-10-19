# Secure Systems Group

We provide instructions on how to modify webapges in this repository or create a project webpage.

## How to make Changes

Any changes should not be made by committing directly to this repository.  Either contact the maintainer (listed at bottom) or submit a pull request.

1. Fork this repository to a local version
2. Submit a pull request or contact a maintainer and send them the `.md` file for your project page

## How to run the website locally

With [docker](https://www.docker.com/) installed in the cloned repository: `docker-compose up`

## How to create a project webpage

For creating the project webpage for the first time, please use the template found under `/projects/template.md`

The project webpages should be added to _projects/mlsec or _projects/platsec with the filename as <projectname>.md
Once the project page has been created, link to the project webpage in _pages/mlsec.md or _pages/platsec.md as [Model extraction attacks and defenses](/_projects/mlsec/modelExtDef)


If you wish to make your project page in HTML instead, it is recommended to run the website locally for viewing/testing.
All HTML project pages should follow the `page` template (found in `_layouts/page.html`).

Please make changes only to your own project pages and not the rest of the website.

## Contact

For any questions or requests to change a page, please contact Vasisht (Machine Learning), Hossam (Platform Security), Michael (Other Topics)
