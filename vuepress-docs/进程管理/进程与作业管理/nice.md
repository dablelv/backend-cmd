## 1.命令简介
nice 命令用于以指定的进程调度优先级启动其他的程序。

以指定的优先级运行命令，这会影响相应进程的调度。如果不指定命令，程序会显示当前的优先级。优先级的范围是从 -20（最大优先级）到 19（最小优先级）。

系统的后台工作中，某些比较不重要的进程在运行，例如备份，由于备份工作相当耗系统资源，这个时候就可以调大备份命令的 nice 值，可以使系统资源更合理使用。

## 2.命令格式
```shell
nice [OPTION] [COMMAND [ARG]...]
```
## 3.选项说明
```
-n, --adjustment=<N>
	对优先级数值加上指定整数 N（默认为 10）。
--help
	显示此帮助信息并退出。
--version
	显示版本信息并退出。
```
## 4.常用示例
以指定进程优先级启动进程。
```shell
nice -n 19 vim &
[1] 24524
```
我们看下进程 vim 的 nice 值。
```shell
ps -l
F S   UID   PID  PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
0 T     0 24524 28730  0  99  19 - 36809 do_sig pts/0    00:00:00 vim
0 R     0 26462 28730  0  80   0 - 38332 -      pts/0    00:00:00 ps
4 S     0 28730 28727  0  80   0 - 29184 do_wai pts/0    00:00:00 bash
```
从输出可以看到，vim NI 列的值为 19，表明 vim 是按照 nice 为 19 的调度优先级启动的。


---
## 参考文献
[nice(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/nice.1.html)
