## 1.命令简介
builtin 执行指定的 Shell 内置程序，传递参数，并返回其退出状态。

这在定义一个名称与 Shell 内置命令相同的函数时非常有用，可以在函数内通过 builtin 使用内置命令。

builtin 命令用以执行 Shell 内建命令，既然是内建命令，为什么还要以这种方式执行呢？

这和 Shell 命令的搜索顺序有关：
1. 别名，使用 alias 创建的命令。 
2. 关键字，如 if，for。 
3. 函数 
4. 内置命令，如cd，pwd等 
5. 外部命令，在PATH路径中寻找

因为 Shell 命令执行时函数优先于内建命令，如果自定义了一个与内建命令同名的函数，那么会执行这个函数而非真正的内建命令。

虽然使用 builtin 可以显示执行内部命令而非同名函数，但是在编写 Shell 函数时，还是建议尽可能避免同名，提高代码可读性。

## 2.命令格式
```shell
builtin shell-builtin [arguments]
```
## 3.选项说明
无。

## 4.返回值
如果给定的命令不是 Shell 内置命令，则返回状态为 false。

其他情况返回内置命令的退出状态。

## 5.常用示例
（1）执行 Shell 内部命令。

```shell
builtin alias
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias vi='vim'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
```

（2）执行内建命令 echo。

先使用 type 命令看下 echo 有哪些类型。
```shell
type -a echo
echo is a shell builtin
echo is /usr/bin/echo
```
然后使用 builtin 执行内建命令 echo。

```shell
builtin echo "hello world"
hello world
```

（3）执行 Shell 内建命令，而不是与之同名的函数。

以 umask 命令为例。

```shell
umask
0002

function umask() { echo "This is umask function"; }
umask
This is umask function
```

要想执行内置命令 umask，可以使用 builtin。

```shell
builtin umask
0002
```

---
## 参考文献
[builtin(1) - Linux manual page - linux.org](https://www.linux.org/docs/man1/builtin.html)

<Vssue title="builtin-builtin" />