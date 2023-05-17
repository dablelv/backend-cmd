## 1.命令简介
w 显示谁已登录以及他们正在做什么。

w 命令用于显示已经登陆系统的用户列表，并显示用户正在执行的指令。执行这个命令可得知目前登入系统的用户有哪些人，以及他们正在执行的程序。单独执行 w 命令会显示所有的用户，您也可指定用户名称，仅显示某位用户的相关信息。

## 2.命令格式
```shell
w [<options>] <user> [...]
```

## 3.选项说明
```
-h,  --no-header
	不打印头信息。
-u, --no-current
	当显示当前进程和 CPU 时间时忽略用户名。
-s, --short
	使用短输出格式。
-f, --from
	显示用户从哪登录。
--help
	显示帮助信息然后退出。
-i, --ip-addr
	显示 from 字段的 IP 地址而不是主机名。
-V, --version
	显示版本信息。
-o, --old-style
	老式输出。空闲时间少于一分钟打印空白。
```

## 4.常用示例
（1）显示已经登录系统的用户列表，并显示用户正在执行的指令。
```shell
w
 12:26:14 up 10 days, 14:36,  3 users,  load average: 0.19, 0.18, 0.11
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    223.73.1.91      09:36    7:42   0.02s  0.02s -bash
root     pts/1    223.73.1.91      10:39    6.00s  0.02s  0.02s -bash
root     pts/2    223.73.1.91      11:18    1:06m  0.02s  0.02s -bash
```
w 显示系统中当前用户的 信息，以及他们的进程。第一行中依次显示当前时间，系统的持续运行时间，登录的用户数和最近 1, 5, 15分钟的系统平均负载（load average）。

接下来的条目显示每位用户的：登录名、tty名、远程主机、登录时间、空闲时间、JCPU、PCPU 以及他们当前进程的命令行。

JCPU 时间指某个 tty  所有进程用掉的时间，不包括过去的后台任务，但是包括正在运行的后台任务。

PCPU 时间指当前进程用掉的时间，可以在 what 域看到当前进程。

（2）不打印头信息。
```shell
w -h
root     pts/0    223.73.1.91      09:36   15:13   0.02s  0.02s -bash
root     pts/1    223.73.1.91      10:39    1.00s  0.02s  0.02s -bash
root     pts/2    223.73.1.91      11:18    1:13m  0.02s  0.02s -bash
```
（3）使用短输出格式。
```shell
w -s
 12:36:50 up 10 days, 14:46,  3 users,  load average: 0.00, 0.07, 0.11
USER     TTY      FROM              IDLE WHAT
root     pts/0    223.73.1.91      18:18  -bash
root     pts/1    223.73.1.91       2.00s -bash
root     pts/2    223.73.1.91       1:16m -bash
```

---
## 参考文献
[w(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/w.1.html)
