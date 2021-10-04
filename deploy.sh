#!/usr/bin/env sh

set -e

git checkout gh-pages
git reset --hard origin/master

npm install
npm run build

find * -maxdepth 0 -name 'dist' -prune -o -exec rm -rf '{}' ';'

mv ./dist/* .

touch .nojekyll

git rm -rf --cache .
git add -A
git commit -m 'deploy'

git push origin gh-pages --force

git checkout main
