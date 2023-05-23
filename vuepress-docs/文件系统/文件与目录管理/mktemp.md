## 1.命令简介
mktemp 用来创建临时文件或目录。

Linux 使用 /tmp 目录来存放不需要永久保留的文件。使用 mktemp 可以在 /tmp 目录下创建一个`tmp.`开头的后接十个随机字符的临时文件或目录。只有创建者可以访问，其他人不可访问（除了 root）。

mktemp 命令可以在创建临时文件或目录时指定命名格式，在后面加几个 X，就会生成几个字符，需要注意 X 最少为 3 个。

**注意：** 如果指定命名格式，临时文件或目录放置在当前目录，否则放置在 $TMPDIR 目录下，如果 $TMPDIR  未设置则放到 /tmp 目录。
## 2.命令格式
```shell
mktemp [OPTION]... [TEMPLATE]
```
TEMPLATE 为临时文件或目录的名称格式，可不指定，缺省为 tmp.XXXXXXXXXX。

## 3.选项说明
```shell
-d, --directory
	创建一个临时目录而不是临时文件。
-u, --dry-run
	不创建任何东西，仅打印出名字。(仅供测试)
-q, --quiet
	不显示任何有关文件或目录创建错误信息。
--suffix=SUFF
	给临时文件或目录添加指定后缀。
-p DIR, --tmpdir[=DIR]
	指定临时文件或目录存放的目录。如果使用 --tmpdir 且未指定目录，则使用 $TMPDIR，如果未设置，则使用 /tmp 目录。
-t
	将 TEMPLATE 解释为单个文件名组件。
--help
	显示此帮助信息并退出。
--version
	显示版本信息并退出。
```
## 4.常用示例
（1）在 /tmp 目录下创建临时文件。
```shell
mktemp
/tmp/tmp.2BRaNNSUos
```

（2）在 /tmp 目录下创建临时文件并指定后缀。
```shell
mktemp --suffix=.tar
/tmp/tmp.lY8GrouErx.tar
```

（3）在 /tmp 目录下创建临时目录。
```shell
mktemp -d
/tmp/tmp.G63yYLHuK1
```

（4）在指定目录下创建临时文件。
```shell
mktemp -p .
./tmp.lRF1RpAGXQ
```

（5）指定临时文件的名称格式，而不是缺省的 tmp.XXXXXXXXXX。
```shell
mktemp abc.XXX
abc.lqV
```

---
## 参考文献
[mktemp(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/mktemp.1.html)

[Bash 脚本如何创建临时文件：mktemp 命令和trap 命令教程](https://www.ruanyifeng.com/blog/2019/12/mktemp.html)

<Vssue title="mktemp" />