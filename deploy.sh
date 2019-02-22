#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'safiyya.io' > CNAME
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:Safiyya/Safiyya.github.io.git gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:Safiyya/safiyya.github.io.git master:gh-pages

cd -