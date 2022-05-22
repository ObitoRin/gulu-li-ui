rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "build" &&
git branch -M master &&
git remote add origin git@github.com:ObitoRin/li-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://obitorin.github.io/li-ui-website/index.html