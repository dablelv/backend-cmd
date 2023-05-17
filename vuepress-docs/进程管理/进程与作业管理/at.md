## 1.命令简介
at 指定命令运行时间。

at 的守护进程 atd 会以后台模式运行，检查系统上的一个特殊目录来获取 at 命令提交的作业。默认情况下，atd 守护进程每 60 秒检查一次目录。有作业时会检查作业运行时间，如果与当前时间匹配，则运行此作业。

**注意：** atd 如果没有启动可通过`systemctl restart atd.service`启动。

## 2.命令格式
```shell
at [-V] [-q queue] [-f file] [-mldbv] TIME
at [-V] [-q queue] [-f file] [-mldbv] -t time_arg
at -c job [job...]
```

## 3.选项说明
```
-m
	当指定的任务被完成之后，将给用户发送邮件，即使没有标准输出。
-I
	atq 的别名，列出尚未执行的计划任务。
-d
	atrm 的别名。删除指定的计划任务。
-v
	显示任务将被执行的时间。
-c
	打印任务的内容到标准输出。
-V
	显示版本信息。
-q <queue>
	使用指定的列队。
-f <file>
	从指定文件读入任务而不是从标准输入读入。
-t <time>
	以时间参数的形式提交要运行的任务。
```
at 允许使用一套相当复杂的指定时间的方法。他能够接受在当天的 hh:mm（小时:分钟）式的时间指定。假如该时间已过去，那么就放在第二天执行。当然也能够使用midnight（深夜），noon（中午），teatime（饮茶时间，一般是下午4点）等比较模糊的词语来指定时间。用户还能够采用 12 小时计时制，即在时间后面加上 AM（上午）或 PM（下午）来说明是上午还是下午。 也能够指定命令执行的具体日期，指定格式为 month day（月 日）或 mm/dd/yy（月/日/年）或 dd.mm.yy（日.月.年）。指定的日期必须跟在指定时间的后面。

上面介绍的都是绝对计时法，其实还能够使用相对计时法，这对于安排不久就要执行的命令是很有好处的。指定格式为：now + count time-units ，now 就是当前时间，time-units是时间单位，这里能够是 minutes（分钟）、hours（小时）、days（天）、weeks（星期）。count 是时间的数量，究竟是几天，还是几小时，等等。 更有一种计时方法就是直接使用today（今天）、tomorrow（明天）来指定完成命令的时间。

TIME（时间格式）可以定义出什么时候要进行 at 这项任务的时间，格式有：
```
HH:MM
04:00
```
在今日的 HH:MM 时刻进行，若该时刻已超过，则明天的 HH:MM 进行此任务。
```
HH:MM YYYY-MM-DD
04:00 2009-03-17
```
强制规定在某年某月的某一天的特殊时刻进行该项任务。
```
HH:MM[am|pm] [Month] [Date]
04pm March 17
```
也是一样，强制在某年某月某日的某时刻进行该项任务
```
HH:MM[am|pm] + number [minutes|hours|days|weeks]
now + 5 minutes
04pm + 3 days
```
就是说，在某个时间点再加几个时间后才进行该项任务。

## 4.常用示例
（1）三天后的下午 5 点钟执行命令。
```shell
at 5pm + 3 days
at> /usr/bin/ls
at> <EOT>
job 2 at Tue Nov  1 17:00:00 2022
```
要执行的命令从标准输入指定，`<EOT>` 表示输入结束，可键入 Ctrl + D 来表示输入结束。

（2）明天17点钟，输出时间到指定文件内。
```shell
at 17:00 tomorrow
at> date > /root/test/date.log
at> <EOT>
job 4 at Sun Oct 30 17:00:00 2022
```

（3）查看尚未执行的计划任务。

设定计划任务后，在没有执行之前我们可以查看系统有哪些尚未执行的工作任务。
```shell
at -l
4	Sun Oct 30 17:00:00 2022 a root
2	Tue Nov  1 17:00:00 2022 a root
```
或者使用 atq 命令。

（4）删除未执行的任务。

比如删除 2 号任务。
```shell
at -d 2
```
或者使用 atrm 命令。

（5）显示已经设置的任务内容。
```shell
at -c 4
#!/bin/sh
# atrun uid=0 gid=0
# mail root 0
umask 22
...
cd /root || {
	 echo 'Execution directory inaccessible' >&2
	 exit 1
}
${SHELL:-/bin/sh} << 'marcinDELIMITER1c0816b5'
date > /root/test/date.log

marcinDELIMITER1c0816b5
```

---
## 参考文献
[at(1) - Linux man page - Die.net](https://linux.die.net/man/1/at)

[at(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/at.1p.html)

[每天一个linux命令（49）：at命令- peida - 博客园](https://www.cnblogs.com/peida/archive/2013/01/05/2846152.html)
