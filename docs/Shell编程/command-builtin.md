## 1.命令简介
command 用于运行指定命令，以抑制正常的 Shell 函数查找。仅执行内置命令或 PATH 中的命令。

## 2.命令格式
```shell
command [-pVv] COMMAND [ARG ...]
```
## 3.选项说明
```shell
-p 使用 PATH 变量的一个默认值以确保所有的标准工具都能被找到。
-v 打印最终调用的命令。如 command -v vim 打印 /usr/bin/vim。
-V 打印每个 COMMAND 命令的详细描述，和 type 内置命令相似。如 command -V vim 打印 "vim is /usr/bin/vim"。
```
## 4.返回值
成功返回 0。

提供了无效选项返回 2。

未找到命令返回 127。

## 5.常用示例
（1）调用命令而不是同名的函数。

假设有一个与 echo 同名的函数。

```shell
function echo() { builtin echo "This is echo function"; }

echo
This is echo function
```
如果想调用 echo 命令而不是与之同名的 echo 函数，可以使用 command 来调用。

```shell
command echo "hello world"
hello world
```

（2）查看最终调用的是哪个命令。

```shell
command -v pwd
pwd
```

（3）查看命令的类型。

```shell
command -V pwd
pwd is a shell builtin
```

---
## 参考文献
[command(1) - Linux manual page - linux.org](https://www.linux.org/docs/man1/command.html)
