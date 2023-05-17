## 1.命令简介

fc（Fix Command）可以列出、编辑、重新执行历史命令。

fc 可以用来查看历史命令，也可以利用使用指定的编辑器编辑并运行最近输入的命令，而不需要重新输入整个命令。

使用 Linux 的过程中，在处理很长的并且包含复杂语法的命令时，如果不小心犯了一点小错误，需要重新输入整个命令以及参数，直到命令执行成功为止。另一种选择是使用 fc 命令编辑并重新运行前一个命令，而无需重新输入整个命令以及参数。

## 2.命令格式

```shell
fc [-e ename] [-lnr] [first] [last]
fc -s [pat=rep] [cmd]
```
单独执行 fc 将打开默认编辑器 vim 编辑最近一条命令后然后运行。

## 3.参数说明

first 可选，可以是字符串（以该字符串开头的最新命令）、数字（历史列表索引，用负数代表当前命令号的偏移）。未指定时设置为前一个命令用于编辑，设置为-16（最近的16条命令）用于列出。

last 可选，可以是字符串（以该字符串开头的最新命令）、数字（历史列表索引，用负数代表当前命令号的偏移）；未指定时设置为前一个命令用于列出，其他情况等于 first。

## 4.选项说明

```shell
-e <ename>
    选择使用的编辑器，默认调用次序为环境变量 $FCEDIT、$EDITOR 和编辑器 vi。
-l
    列出而不是编辑。
-n
    列出时不输出行号（需配合-l选项）。
-r
    倒序列出命令，最近执行的先列出（需配合-l选项）。
-s [pat=rep] [cmd]
    命令 cmd（未指定时为最后执行的命令）将在 pat 替换为 rep 后重新执行。cmd 可以是字符串，也可以是历史命令的序号。
```

## 5.常用示例

（1）使用默认编辑器编辑最近一条命令，保存后立即执行。
```shell
fc
```

（2）显示历史命令列表。

默认显示最近 16 条历史命令。

```shell
fc -l
2966     echo $?
2967     cksum
2968     man cksum
2969     tput sc
2970     tput setb 6
2971     tput setf 4
2972     man tput
2973     reset
2974     man tput
2975     man terminfo
2976     man apropos
2977     hist
2978     history
2979     history 6
2980     history 6
2981     fc -l
```

（3）显示 10 条历史命令列表。

```shell
fc -l -10

# 或
fc -l -10 -1
```

（4）显示历史命令列表但不显示命令序号。

```shell
fc -ln
     fc -lr
     fc -lr -10
     fc -lr -3
```

（5）反序显示所有历史命令

```shell
fc -lr -3
2995     fc -lr -10
2994     fc -lr
2993     fc -ln
```

（6）从历史命令中往前找到 ls 命令，并执行。

```shell
fc -s ls
ls -l /usr/bin/vim
-rwxr-xr-x 1 root root 2337208 Dec 16  2020 /usr/bin/vim
```

（7）编辑指定序号的命令并且执行。

```shell
fc 2992
ls -lh /usr/bin/vim
-rwxr-xr-x 1 root root 2.3M Dec 16  2020 /usr/bin/vim
```

（8）执行指定序号的命令。

```shell
fc -s 2992
-rwxr-xr-x 1 root root 2337208 Dec 16  2020 /usr/bin/vim
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

[fc(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/fc.1p.html)
