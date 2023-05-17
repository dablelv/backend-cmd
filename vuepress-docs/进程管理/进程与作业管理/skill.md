## 1.命令简介
skill 命令用于向选定的进程发送信号。

信号有三种写法，如 -9、-SIGKILL 和 -KILL，特别有用的信号包括 HUP、INT、KILL、STOP、CONT 和 0，可以使用 -l 或 -L 已列出可使用的信号。

## 2.命令格式
```shell
skill [signal] [options] expression
```
默认信号为 TERM。

expression 可根据不同选项来区分类型，可以是：终端、用户、pid、命令。

## 3.选项说明
```
-f, --fast
	快速模式。
-i, --interactive
	交互模式，每一步操作都需要确认。
-l, --list
	列出所有可用的信号名称。
-L, --table
	在一个漂亮的表格中列出所有可用的信号名称。
-n, --no-action
	无动作；对可能发生但实际上不会改变系统的事件进行模拟。
-v, --verbose
	冗余模式。
-w, --warnings
 	启用警告。此选项尚未实现。
-h, --help
	 显示帮助文本并退出。
-V, --version
	显示版本信息。

# PROCESS SELECTION OPTIONS
-t, --tty <tty>
	指定开启进程的终端号。
-u, --user <user>
	指定开启进程的用户。
-p, --pid <pid>
	指定进程的 ID。
-c, --command <command>
	指定开启进程的指令名称。
--ns <pid>
	匹配与 pid 属于同一命名空间的进程。
--nslist <ns>,...
	列出进程名称空间。可用名称空间：ipc、mnt、net、pid、user、uts。
```

## 4.常用示例
（1）列出所有的信号。
```shell
skill -l
HUP INT QUIT ILL TRAP ABRT BUS FPE KILL USR1 SEGV USR2 PIPE ALRM TERM STKFLT
CHLD CONT STOP TSTP TTIN TTOU URG XCPU XFSZ VTALRM PROF WINCH POLL PWR SYS
```

（2）以表格形式列出所有信号。
```shell
 1 HUP      2 INT      3 QUIT     4 ILL      5 TRAP     6 ABRT     7 BUS
 8 FPE      9 KILL    10 USR1    11 SEGV    12 USR2    13 PIPE    14 ALRM
15 TERM    16 STKFLT  17 CHLD    18 CONT    19 STOP    20 TSTP    21 TTIN
22 TTOU    23 URG     24 XCPU    25 XFSZ    26 VTALRM  27 PROF    28 WINCH
29 POLL    30 PWR     31 SYS
```

（3）暂停 bash 进程。
```shell
skill -STOP bash
```

（4）唤醒暂停的进程（进程名）。
```shell
skill -CONT bash
```
（5）停止指定用户的进程。
```shell
skill -STOP -u <user>
```
（6）停止所有在 PTY 装置上的程序
```shell
skill -KILL -t pts/*
```
（7）暂停所有的 ls 命令进程，而不是 ls 用户。
```shell
skill -STOP -c ls
```

---
## 参考文献
[skill(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/skill.1.html)
