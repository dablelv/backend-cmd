## 1.命令简介
pgrep（process grep）根据进程名称或其他属性查找进程。

pgrep 命令以名称为依据从运行进程队列中查找进程，并显示查找到的进程 ID。每一个进程 ID 以一个十进制数表示，通过一个分隔串和下一个 ID 分开，默认的分隔串是一个新行。对于每个属性选项，用户可以在命令行上指定一个以逗号分隔的可能值的集合。

## 2.命令格式
```
pgrep [OPTIONS] PATTERN
```
## 3.选项说明
```
-d, --delimiter <delimiter>
	设置用于分隔输出中每个进程 ID 的字符串（默认为换行符）。
-f, --full
	模式通常仅与进程名称匹配。设置 -f 时，将使用完整的命令行。
-g, --pgroup <pgrp>,...
	只匹配列出的进程组 ID 中的进程。进程组 0 被转换为 pgrep 或 pkill 自己的进程组。
-G, --group <gid>,...
	只匹配实际组 ID 列出的进程。可以使用数值或符号值。
-l, --list-name
	列出进程的名字和 ID。
-n, --newest
	选择最近执行的进程。
-o, --oldest
	选择最早的进程。
-P, --parent <ppid>,...
	选择父 PID 匹配的进程。
-s, --session <sid>,...
	只匹配进程会话 ID 列出的进程。会话 ID 0 被转换为 pgrep 或 pkill 自己的会话 ID。
-t, --terminal <term>,...
	查找符合终端号的进程。
-u, --euid <euid>,...
	匹配有效用户 ID 的进程。可以使用数值或符号值。
-U, --uid <uid>,...
	匹配实际用户 ID 的进程。可以使用数值或符号值。
-v, --inverse
	查找不符合条件的进程。
-x, --exact
	只匹配名称与模式完全匹配的进程。
-h, --help
	显示帮助文档。
-V, --version 
	显示命令版本。
```
## 4.常用示例

（1）显示指定名称的进程 ID。
```
pgrep bash
```
注意，匹配模式时不需要完全匹配，如 pgrep bas 也可以查找处 bash 进程。

（2）显示指定进程名的进程 ID 和名称。
```shell
pgrep -l bash
23762 bash
28730 bash
```

（3）选择最近执行的进程的进程号。
```shell
pgrep -ln bash
23762 bash
```

（4）选择最早执行的进程。
```shell
pgrep -lo bash
28730 bash
```

（5）查找符合终端的进程。
```shell
pgrep -l -t pts/0
20122 man
20132 less
28730 bash
```

---
## 参考文献
[pgrep(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/pgrep.1.html)