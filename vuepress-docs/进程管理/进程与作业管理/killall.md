## 1.命令简介
killall 使用进程的名称来杀死进程，可以杀死一组同名进程。

我们可以使用 kill 命令杀死指定进程PID的进程，如果要找到我们需要杀死的进程，我们还需要在之前使用 ps 等命令再配合 grep 来查找进程，而 killall 把这两个过程合二为一，是一个很好用的命令。

使用 killall 需要注意如下几点：
（1）killall 可以发送一个信号给指定名称的所有进程，如果没有指定信号, 缺省发送 SIGTERM(15)，该信号的默认动作是终止进程；
（2）指定信号时可以使用信号名或者信号值，例如 -HUP、-SIGHUP 或 -1，也可以使用选项 -s；
（3）如果命令名不是以 -r 选项指定的正则表达式并且包括斜杠（/）, 那么执行该特定文件的进程将被杀掉, 这与进程名无关；
（4）killall 进程不会杀死自己，但是可以杀死其它 killall 进程。

## 2.命令格式
```shell
killall [OPTIONS] NAME...
killall -l | --list
killall -V | --version
```

## 3.选项说明
```
-e, --exact
	对于很长的名字, 要求准确匹配。如果一个命令名长于 15 个字符, 使用该选项则会忽略该进程，如果同时指定了 -v 选项, killall 会针对每个忽略的记录打印一条消息
-I, --ignore-case
	匹配进程名时忽略大小写
-g, --process-group
	杀死进程所属的进程组，如果有多个进程均属于同一个进程组，则只发送一次 KILL 信号到进程组
-i, --interactive
	杀死进程前交互式询问是否确定杀死
-l, --list
	列出所有已知信号名
-o, --older-than <TIME>
	杀死启动时间比指定时间早的进程
-q, --quiet
	静默模式。如果没有杀死任何进程，不输出提示信息
-r, --regexp
	使用扩展正则表达式匹配进程名
-s, --signal, -<SIGNAL>
	指定信号替代默认的 SIGTERM。
-u, --user <USER>
	只杀死指定用户的进程。
-v, --verbose
	报告信号是否成功发送。
-V, --version
	显示版本信息。
-w, -–wait
	等待所有被终止的进程结束。killall 每秒检查一次，如果有任何被杀死的进程仍然存在，则不返回。注意，如果信号被忽略或者进程保持僵尸状态，killall 可能会永远等待。
-y, --younger-than <TIME>
	杀死启动时间比指定时间晚的进程。与选项 -o,--older-than 作用相反
-Z, --context <REGEXP>
	（SELinux only）只杀死具有指定上下文的进程。必须在其他参数之前。命令名是可选的。
```

## 4.常用示例
（1）杀死有所同名进程。
```
killall top
```
（2）列出 killall 支持的所有信号。
```
killall -l

HUP INT QUIT ILL TRAP ABRT IOT BUS FPE KILL USR1 SEGV USR2 PIPE ALRM TERM
STKFLT CHLD CONT STOP TSTP TTIN TTOU URG XCPU XFSZ VTALRM PROF WINCH IO PWR SYS
UNUSED
```

---
## 参考文献
[killall(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/killall.1.html)