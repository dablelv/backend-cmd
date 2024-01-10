## 1.命令简介
alias 是 Shell 内建命令，用来设置命令的别名。

我们可以使用 alias 命令将一些较长的命令进行简化，建议使用单引号将原来的命令引起来，防止特殊字符导致错误。

alias 命令的作用只局限于当前会话，若要每次登录都能够使用这些命令别名，则可将相应的 alias 命令放到 Bash 的初始化文件 /etc/bashrc（针对所有用户）或 ~/.bashrc（针对当前用户）中。

## 2.命令格式
```
alias [-p] [NAME[=VALUE] ...]
```
不带参数或使用 -p 选项将在标准输出上以 "alias name=value" 的形式打印别名列表。对于参数列表中没有提供值的每个名称，将打印别名和对应的值，否则设置别名对应的值。

## 3.选项说明
```
-p
	以可重用的格式 alias name=value 打印所有已定义的别名
```

## 4.常用示例
（1）以可重用的格式 alias name=value 打印所有已定义的别名。
```
alias
# 或
alias -p

alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
```
（2）查看指定命令的别名。
```
alias ll
alias ll='ls -l --color=auto'
```
（3）设置命令别名。
```
alias ll="ls -l --color=auto -h"
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

<Vssue title="alias-builtin" />