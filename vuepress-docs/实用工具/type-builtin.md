## 1.命令简介
type 用来显示命令的类型。

一个命令的类型可以是：

- alias：别名
- keyword：Shell 保留关键字
- function：Shell 函数
- builtin：Shell 内建命令
- file：磁盘文件，外部命令
- unfound：没有找到

type 是 Linux 系统的一种自省机制，知道了命令是那种类型，我们就可以针对性的获取帮助。比如内建命令可以用 help 命令来获取帮助，外部命令用 man 或 info 来获取帮助。

## 2.返回值
如果找到所有命令，则 type 返回成功（0）；如果有任何一个命令找不到，则返回失败（1）。

## 3.命令格式

```shell
type [-aftpP] name [name ...]
```

## 4.选项说明

```shell
-a
	显示所有可能的类型，比如有些命令如 pwd 是 Shell 内建命令，也可以是外部命令。
-f
	排除对 Shell 函数的查找。
-t
	判断一个名字当前是否是 alias、keyword、function、builtin、file。如果找不到名称，则不打印任何内容。
-p
	如果 name 在执行"type -t name"返回的不是"file"，那么什么也不返回；否则会在环境变量 PATH 中查找并返回可执行文件路径。
-P
	即使"type-t name"不返回"file"，仍然会在环境变量 PATH 中查找并返回可执行文件路径。
```
## 5.常用示例
（1）查看命令的别名。

```shell
type ls
ls is aliased to `ls --color=auto'
```

（2）查看内建命令。

```shell
type cd
cd is a shell builtin
```

（3）查看 Shell 关键字。

```shell
type if
if is a shell keyword
```
（4）查看外部命令。

```shell
type date
date is /usr/bin/date
```

（5）命令没有找到。

```shell
type notcmd
bash: type: notcmd: not found
```

（6）显示命令所有可能的类型。

```shell
type -a cd
cd is a shell builtin
cd is /usr/bin/cd
```

（7）查看 type 命令自身的类型。

```shell
type type
type is a shell builtin
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

[Linux type 命令详解：显示指定命令的类型- Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/type.html)
