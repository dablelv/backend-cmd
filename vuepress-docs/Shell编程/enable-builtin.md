# 1.命令简介
enable 启用或禁用 Shell 内建指令。

禁用内置命令，可以在不指定完整路径名的情况下执行与内置命令同名的磁盘命令。

Linux 执行命令时，总是先在自己的 Shell builtin 中查找该命令，如果找到则执行该命令；如果找不到该命令，则会从环境变量 PATH 指定的路径中依次去查找待执行的命令。因为了解了这一点，所以看起来好像没有办法编写用户自己的命令来替代 Shell builtin 命令。幸运的是，有了 enable 命令我们就能做到了。

## 2.命令格式
```shell
enable [-a] [-dnps] [-f filename] [name ...]
```
不带选项时，每一个 NAME 内嵌命令都会被启用。

不带任何选项和参数单独执行 enbale 将显示所有启用的 Shell 内建命令。

## 3.选项说明
```shell
-a 打印所有内置命令，并显示是否启用。
-n 禁用每一个 NAME 内嵌命令或显示所有被禁用的内嵌命令列表。
-p 以可重用格式打印所有启用的内嵌命令，等同于无选项无参执行 enable。
-s 输出仅限于 POSIX 内置命令。
```
控制动态加载的选项：
```shell
-f 从共享对象 FILENAME 文件中加载 NAME 内嵌命令。
-d 删除以 -f 选项加载的内嵌命令。
```

## 4.返回值
除非名称不是 Shell 内置命令，或者从共享对象加载新的内置命令时出错，否则返回值为0。

## 5.常用示例
（1）显示所有启用的 Shell 内部命令。

```shell
enable
enable .
enable :
enable [
enable alias
enable bg
enable bind
enable break
enable builtin
enable caller
enable cd
enable command
enable compgen
enable complete
enable compopt
enable continue
enable declare
...
```

（2）显示所有 Shell 内部命令。

```shell
enable -a
enable
enable .
enable :
enable [
enable alias
enable bg
enable bind
enable break
enable builtin
enable caller
enable cd
enable command
enable compgen
enable complete
enable compopt
enable continue
enable declare
...
```

（3）禁用内部命令。

```shell
enable -n declare
```

（4）显示禁用的内部命令。

```shell
enable -n
enable -n declare
```

（5）以可重用的格式打印所有启用的 Shell 内嵌命令列表。

使用 -p 选项和单独执行 enable 的效果是一样的，即`enable -p` 等同于`enable`。

```shell
enable -p
enable .
enable :
enable [
enable alias
enable bg
enable bind
enable break
enable builtin
enable caller
enable cd
enable command
enable compgen
enable complete
enable compopt
enable continue
enable dirs
enable disown
...
```
（6）仅打印所有已启用的 POSIX 特定的内嵌命令。

```shell
enable -s
enable .
enable :
enable break
enable continue
enable eval
enable exec
enable exit
enable export
enable readonly
enable return
enable set
enable shift
enable source
enable times
enable trap
enable unset
```


---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)
