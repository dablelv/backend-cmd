#!/bin/bash

# 脚本出错立即退出
set -e

# 生成静态文件
npm run docs:build

rm -rf docs

mv vuepress-docs/.vuepress/dist docs