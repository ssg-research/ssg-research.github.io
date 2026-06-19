#!/usr/bin/env bash
#
# Publish the current cs858-wiki `main` to the live site.
#
# The wiki is a pinned submodule (vendor/cs858-wiki), so site content never
# moves on its own — publishing is a deliberate pointer bump. This script does
# the local half in one command: branch off the latest site main, move the
# submodule pointer to the latest wiki main, commit, push, and open a PR.
# The `ci` check gates the merge; merging to main deploys (no approval needed,
# per the protect-main ruleset). See agent_docs/cs858-wiki-integration-plan.md.
#
# Usage:  npm run publish:wiki
set -euo pipefail

cd "$(dirname "$0")/.."

# Latest wiki main, fetched without disturbing the current working tree.
git submodule sync vendor/cs858-wiki >/dev/null
git -C vendor/cs858-wiki fetch --quiet origin main
target="$(git -C vendor/cs858-wiki rev-parse origin/main)"
short="$(git -C vendor/cs858-wiki rev-parse --short origin/main)"

# The pointer currently published on the site's main.
git fetch --quiet origin main
pinned="$(git rev-parse "origin/main:vendor/cs858-wiki")"

if [ "$target" = "$pinned" ]; then
  echo "cs858-wiki is already published at ${short} on main — nothing to do."
  exit 0
fi

branch="publish-wiki-${short}"
echo "Publishing cs858-wiki ${short} on branch ${branch}…"

git switch -c "$branch" origin/main
git -C vendor/cs858-wiki checkout --quiet "$target"
git add vendor/cs858-wiki
git commit -m "Publish cs858 wiki at ${short}"
git push -u origin "$branch"
gh pr create --fill --base main --title "Publish cs858 wiki at ${short}"

echo
echo "PR opened for cs858-wiki @ ${short}."
echo "Once the 'ci' check is green, merge it (no approval required):"
echo "    gh pr merge --squash --delete-branch"
echo "or have it merge itself the moment CI passes:"
echo "    gh pr merge --auto --squash --delete-branch"
