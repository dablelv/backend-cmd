## 1.命令简介
help 用于查看 Shell 内部命令的帮助信息。

help 命令只能显示 Shell 内部命令的帮助信息，对于外部命令的帮助信息需要使用 [man](https://dablelv.blog.csdn.net/article/details/103110624)、[info](https://dablelv.blog.csdn.net/article/details/103115329) 或 whatis 命令查看。

## 2.命令格式
```shell
help [-dms] [<pattern> ...]
```
PATTERN 用于匹配命令，如果有与模式匹配的命令，help 返回状态为 0，否则为非 0。

# 3.选项说明
```
-d
	输出每个命令的简短描述
-m
	以类似于 man 手册的格式描述命令
-s
	只显示命令使用格式
```

## 4.常用示例

（1）查看 help 自身的帮助信息。
```
help help
```

（2）以类似于 man 手册格式查看 help 命令的帮助信息。
```
help -m help
```

（3）查看 help 命令的简短描述。
```
help -d help
help - Display information about builtin commands.
```

（4）查看 help 和 cd 命令使用格式。
```
help -s help cd
help: help [-dms] [pattern ...]
cd: cd [-L|[-P [-e]]] [dir]
```

---

## 参考文献

[bash(1) - Linux manual page - man7.org](https://www.linux.org/docs/man1/help.html)

<Vssue title="help-builtin" />