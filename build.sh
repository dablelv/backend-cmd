#!/bin/bash

# 请提前使用 npm install 安装依赖的包，会自动放到当前 node_modules 目录下。

# 脚本出错立即退出
set -e

# 生成静态文件，目录为 vuepress-docs/.vuepress/dist
npm run docs:build

rm -rf docs

mv vuepress-docs/.vuepress/dist docs