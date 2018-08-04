#!/usr/bin/env sh

set -e

yarn build

cd .vuepress

git clone https://${GITHUB_TOKEN}github.com/uestc-jungle/uestc-jungle.github.io.git repo

cp -R dist/* repo

cd repo
git add .
if git commit -m "Updated at `date`"; then
    echo Changes committed
fi

git push origin master
