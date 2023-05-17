#!/bin/bash

npm run docs:build

rm -rf dist

mv docs/.vuepress/dist .