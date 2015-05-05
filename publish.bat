call git add *
call git commit -m "publish"
call git push
call npm version patch
call npm publish
call pause
