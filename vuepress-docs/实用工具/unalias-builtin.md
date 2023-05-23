## 1.命令简介
unalias 为 Bash 内建命令，用来删除命令别名。

## 2.命令格式
```
alias [-a] [NAME...]
```
如果使用 -a 选项，则表示取消所有已经存在的命令别名。如果需要取消任意一个命令别名，则使用该命令别名作为指令的参数即可。

## 3.选项说明
```
-a 删除所有的别名定义
```

## 4.常用示例
（1）删除指定别名。
```
# 先查看别名 ls
alias ls
alias ls='ls --color=auto'

# 删除别名 ls
unalias ls

# 再查看别名 ls，无法找到别名，表示删除成功
alias ls
-bash: alias: ls: not found
```
（2）删除所有别名。
```
unalias -a
```
删除后的别名将无法使用，请谨慎操作。

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

<Vssue title="unalias-builtin" />