// # 确保脚本抛出遇到的错误
// set -e

// # 生成静态文件
// yarn build

// # 进入生成的文件夹
// cd dist

// scp -r dist 5d10:/opt/ci123/www/html/webroot/
// cd -