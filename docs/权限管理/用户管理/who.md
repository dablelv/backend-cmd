## 1.命令简介
who 显示当前谁登录了系统。

who 命令用来打印当前登录的用户信息，包含了系统的启动时间 、 活动进程 、 使用者 ID、使用终端等信息，是系统管理员了解系统运行状态的常用命令。

## 2.命令格式
```shell
who [<OPTION>]... [ <FILE> | <ARG1> <ARG2> ]
```

## 3.选项说明
```
-a, --all
  	等于 -b -d --login -p -r -t -T -u 选项的组合。
-b, --boot
	上次系统启动时间。
-d, --dead
  	显示已死的进程。
-H, --heading
	输出头部的标题列。
-l，--login
	显示系统登录进程。
--lookup
	尝试通过 DNS 查验主机名。
-m
	只面对和标准输入有直接交互的主机和用户。
-p, --process
	显示由 init 进程衍生的活动进程。
-q, --count
	列出所有已登录用户的登录名与用户数量。
-r, --runlevel
	显示当前的运行级别。
-s, --short
	只显示名称、线路和时间(默认)。
-T, -w, --mesg
	用 +，- 或 ? 标注用户消息状态。
-u, --users
	列出已登录的用户。
--message
	等于 -T。
--writable
	等于 -T。
--help
	显示此帮助信息并退出。
--version
	显示版本信息并退出。
```

## 4.常用示例
（1）显示当前已登录的用户信息。
```shell
who
root     pts/0        2022-10-27 09:36 (223.73.1.91)
root     pts/1        2022-10-27 10:39 (223.73.1.91)
```
第一列：显示用户名称。
第二列：显示用户连接方式。tty 表示用户直连主机，pts 表示远程登录。
第三列：显示用户登录日期。
第四列：显示用户登录时间。
第五列：显示用户登录的 IP 地址。

（2）输出头部的标题列。
```shell
who -H
NAME     LINE         TIME             COMMENT
root     pts/0        2022-10-27 09:36 (223.73.1.91)
root     pts/1        2022-10-27 10:39 (223.73.1.91)
```

（3）显示目前登入系统的用户详细信息。
```shell
who -a
           system boot  2022-10-16 21:50
           run-level 3  2022-10-16 21:50
LOGIN      ttyS0        2022-10-16 21:50              1371 id=tyS0
LOGIN      tty1         2022-10-16 21:50              1370 id=tty1
root     + pts/0        2022-10-27 09:36 00:20        9391 (223.73.1.91)
root     + pts/1        2022-10-27 10:39   .         21685 (223.73.1.91)
           pts/2        2022-10-26 18:59             27651 id=ts/2  term=0 exit=0
           pts/3        2022-10-26 22:10              4638 id=ts/3  term=0 exit=0
```
（4）显示已死的进程。
```
who -d
         pts/2        2022-10-26 18:59             27651 id=ts/2  term=0 exit=0
         pts/3        2022-10-26 22:10              4638 id=ts/3  term=0 exit=0
```
（5）列出已登录的用户。
```shell
who -uH
NAME     LINE         TIME             IDLE          PID COMMENT
root     pts/0        2022-10-27 09:36   .          9391 (223.73.1.91)
root     pts/1        2022-10-27 10:39   .         21685 (223.73.1.91)
```

---
## 参考文献
[who(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/who.1.html)
