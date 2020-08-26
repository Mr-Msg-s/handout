npm run build

cd public

git init
git add -A
git commit -m '更新了讲义'

git push -f git@github.com:Charles7c/handout master

cd ../
rm -rf public