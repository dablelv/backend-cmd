## 1.命令简介
kill 命令用于终止进程或向进程发送指定信号。

kill 命令可以发送指定的信号到相应的进程或进程组。不指定信号缺省发送 SIGTERM(15)来终止指定进程。如果想强制终止进程，可以显示指定 SIGKILL(9) 信号，因为该信号无法被进程捕获。

本文介绍的是符合 POSIX 标准的 kill 功能，不同 Linux 发行版对 kill 的实现有所不同，具体参见其对应的帮助手册。
## 2.命令格式
```
kill -l [SIGNAL]
kill [-s SIGNAL | -SIGNAL]  PID...
```
操作数 PID 有两种取值：
（1）进程 ID 或者进程组 ID;
（2）作业 ID，用于标识运行于后台的一组进程。
## 3.选项说明
```
-SIGNAL, -s SIGNAL
	指定信号名或信号值。
-l [SIGNAL]
	指定信号名或信号值，转换信号名与信号值。如果不指定信号，则列出所有信号。信号的定义见 /usr/include/linux/signal.h
```

## 4.常用示例
（1）强制杀死当前 Shell 进程，退出当前会话。
```
echo $$
20174

kill -9 | -KILL | -SIGKILL 20174
```
（2）根据进程名称先查找出 PID 再强制杀死。
```
ps -ef | grep COMMADNAME | awk '{print $2;}' | xargs kill -9
```
也可以使用 [killall](https://dablelv.blog.csdn.net/article/details/102476620) 命令根据进程名称杀死进程。
```
killall -9 COMMADNAME 
```

（3）列出所有信号。
```
kill -l
 1) SIGHUP	 2) SIGINT	 3) SIGQUIT	 4) SIGILL	 5) SIGTRAP
 6) SIGABRT	 7) SIGBUS	 8) SIGFPE	 9) SIGKILL	10) SIGUSR1
11) SIGSEGV	12) SIGUSR2	13) SIGPIPE	14) SIGALRM	15) SIGTERM
16) SIGSTKFLT	17) SIGCHLD	18) SIGCONT	19) SIGSTOP	20) SIGTSTP
21) SIGTTIN	22) SIGTTOU	23) SIGURG	24) SIGXCPU	25) SIGXFSZ
26) SIGVTALRM	27) SIGPROF	28) SIGWINCH	29) SIGIO	30) SIGPWR
31) SIGSYS	34) SIGRTMIN	35) SIGRTMIN+1	36) SIGRTMIN+2	37) SIGRTMIN+3
38) SIGRTMIN+4	39) SIGRTMIN+5	40) SIGRTMIN+6	41) SIGRTMIN+7	42) SIGRTMIN+8
43) SIGRTMIN+9	44) SIGRTMIN+10	45) SIGRTMIN+11	46) SIGRTMIN+12	47) SIGRTMIN+13
48) SIGRTMIN+14	49) SIGRTMIN+15	50) SIGRTMAX-14	51) SIGRTMAX-13	52) SIGRTMAX-12
53) SIGRTMAX-11	54) SIGRTMAX-10	55) SIGRTMAX-9	56) SIGRTMAX-8	57) SIGRTMAX-7
58) SIGRTMAX-6	59) SIGRTMAX-5	60) SIGRTMAX-4	61) SIGRTMAX-3	62) SIGRTMAX-2
63) SIGRTMAX-1	64) SIGRTMAX
```
只有信号 SIGKILL(9) 才可以无条件终止进程，其他信号进程都有权忽略。

下面是常用的信号：
信号|全称|取值|默认动作|含义
---|---|---|---|---
SIGHUP|Signal Hang Up|1|Terminate|终端断线
SIGINT|Signal Interrupt|2|Terminate|中断（同 Ctrl + C）
SIGQUIT|Signal Quit|3|Terminate and Dump Core|退出（同 Ctrl + \）
SIGABRT|Signal Abort|6|Terminate and Dump Core|来自 abort(3) 的中止信号
SIGKILL|Signal Kill|9|Terminate|强制终止
SIGTERM|Signal Terminate|15|Terminate|优雅终止进程
SIGCONT|Signal Continue|18|Continue|如果停止则继续执行（与 STOP 相反）
SIGSTOP|Signal Stop|19|Stop|暂停进程（同 Ctrl + Z）

---
## 参考文献
[kill(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/kill.1p.html)

[signal(7) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man7/signal.7.html)

[LINUX Signals](https://faculty.cs.niu.edu/~hutchins/csci480/signals.htm)

[Signal (IPC) - Wikipedia](https://en.wikipedia.org/wiki/Signal_(IPC))

<Vssue title="kill" />