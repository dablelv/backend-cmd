# 安装 Node.js

vuepress 基于 Node.js，所以需要先安装 Node.js 环境。安装版本为 v16.x.x，比如 Node.js 16.20.0。

注意，如果安装过高的版本将报如下错误：
```
Error: error:0308010C:digital envelope routines::unsupported
```

# 安装依赖包

如果本地未安装依赖的 node 包，需要先执行 npm install 安装依赖，会自动放到当前 node_modules 目录下。

# 发布到 Github

执行 build.sh。

然后使用 git 将变更推送到远端仓库。

# 本地预览

执行 npm run docs:dev 进行本地预览。

自动构建发布，请参见 Github Action 脚本 .github/workflows/deploy.yml。