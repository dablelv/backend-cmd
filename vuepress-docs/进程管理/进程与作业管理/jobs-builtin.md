## 1.命令简介
jobs 主要用于显示系统中的任务列表及其运行状态。

该命令可以显示任务号及其对应的进程号，其中，任务号是以普通用户的角度进行的，而进程号则是从系统管理员的角度来看的。一个任务可以对应一个或多个进程号。

jobs 是 Shell 内建命令。

## 2.命令格式
```shell
jobs [-lnprs] [ <jobspec> ... ]
jobs -x <command> [ <args> ... ]
```
如果给定了作业号 jobspec，则仅输出指定的作业信息。

## 3.选项说明
```
-l
	除正常信息外，还列出进程 ID。
-n
	仅显示上次通知用户后状态发生改变的作业信息。
-p
	仅显示任务对应的进程号。 
-r
	仅显示运行状态（running）的任务。
-s
	仅显示停止状态（stoped）的任务。
-x
	jobs 将在 command 或 args 中找到的任何作业替换为相应的进程组 ID，并执行 command。
```
## 4.常用示例
（1）显示后台运行的程序。
```shell
ping localhost > /dev/null &
ping localhost > /dev/null &

jobs
[1]+  Stopped                 nice -n 19 vim
[2]   Running                 ping localhost > /dev/null &
[3]-  Running                 ping localhost > /dev/null &
```
`+` 号代表当前作业，也是 fg 和 bg 缺省使用的作业，也可以使用 %+ 引用。`-` 号代表将要成为缺省作业的作业，可以使用 %- 引用。其他作业则无特殊标识符。

（2）显示后台运行的程序，并列出进程号。
```shell
jobs -l
[1]+ 24524 Stopped (tty output)    nice -n 19 vim
[2]  11582 Running                 ping localhost > /dev/null &
[3]- 11599 Running                 ping localhost > /dev/null &
```
输出信息的第一列表示任务编号，第二列表示任务所对应的进程号，第三列表示任务的运行状态，第四列表示启动任务的命令。

（3）仅显示运行的作业。
```shell
jobs -r
[2]   Running                 ping localhost > /dev/null &
[3]-  Running                 ping localhost > /dev/null &
```

（4）仅显示暂停的作业。
```shell
jobs -s
[1]+  Stopped                 nice -n 19 vim
```
（5）列出上次通告之后改变了状态的作业。
```shell
jobs -n
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

[jobs(1) manual - linux.org](https://www.linux.org/docs/man1/jobs.html)

[jobs(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/jobs.1p.html)

<Vssue title="jobs-builtin" />