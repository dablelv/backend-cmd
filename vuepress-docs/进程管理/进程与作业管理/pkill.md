## 1.命令简介
pkill（process kill）杀死某一类进程。

pkill 是 ps 命令和 kill 命令的结合，用来杀死某一类进程。

pkill 命令与 kill、killall 十分相似，都是用于杀死（结束）指定进程的命令。不过 kill 是杀掉单个进程，killall 是杀掉所有同名进程，pkill 是杀掉一类进程或者某个用户的所有进程。

## 2.命令格式
```shell
pkill [<options>] <pattern>
```

## 3.选项说明
```
-<signal>, --signal <signal>
	定义要发送到每个匹配进程的信号。可以使用数字或信号名称，如 -9 或 -。
-f, --full
	模式通常仅与进程名称匹配。设置 -f 时，将需要匹配完整的命令行。
-n, --newest
	只选择最新的（最近启动的）匹配进程。
-o, --oldest
	只选择最老的（最久启动的）匹配进程。
-v, --inverse
	选中与条件不符合的进程。
-x, --exact
	进程名称与模式需要完全匹配。
-P, --parent <ppid>,...
	匹配父进程为指定进程 ID 的进程。
-t, --terminal <term>,...
	选择指定终端下的所有程序。
-u, --euid <euid>,...
	匹配有效用户 ID 的进程。可以使用数值或符号值。
-U, --uid <uid>,...
	匹配实际用户 ID 的进程。可以使用数值或符号值。
-V, --version
	显示版本信息。
-h, --help
	
```
## 4.常用示例
（1）杀死所有父进程为指定 ID 的进程。
```shell
pkill -9 | -KILL | -SIGKILL -P 5323
```
（2）杀死终端 1 下的所有进程。
```shell
pkill -t pts/1
```
（3）杀死指定用户的所有进程。
```shell
pkill -9 -u alice
```
（4）杀死不属于 root 用户的所有进程。
```shell
pkill -9 -v -u root
```
（5）查看版本信息。
```shell
pkill -V
pkill from procps-ng 3.3.10
```
（6）查看帮助信息。
```shell
pkill -h
Usage:
 pkill [options] <pattern>

Options:
 -<sig>, --signal <sig>    signal to send (either number or name)
 -e, --echo                display what is killed
 -c, --count               count of matching processes
 -f, --full                use full process name to match
 -g, --pgroup <PGID,...>   match listed process group IDs
 -G, --group <GID,...>     match real group IDs
 -n, --newest              select most recently started
 -o, --oldest              select least recently started
 -P, --parent <PPID,...>   match only child processes of the given parent
 -s, --session <SID,...>   match session IDs
 -t, --terminal <tty,...>  match by controlling terminal
 -u, --euid <ID,...>       match by effective IDs
 -U, --uid <ID,...>        match by real IDs
 -x, --exact               match exactly with the command name
 -F, --pidfile <file>      read PIDs from file
 -L, --logpidfile          fail if PID file is not locked
 --ns <PID>                match the processes that belong to the same
                           namespace as <pid>
 --nslist <ns,...>         list which namespaces will be considered for
                           the --ns option.
                           Available namespaces: ipc, mnt, net, pid, user, uts

 -h, --help     display this help and exit
 -V, --version  output version information and exit

For more details see pgrep(1).
```

---
## 参考文献
[pkill(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/pkill.1.html)

[【Linux随笔】Killall 、Kill 、Pkill三个命令之间的区别 - 腾讯云](https://cloud.tencent.com/developer/article/1847239)
