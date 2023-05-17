## 1.命令简介
trap 命令是 Shell 内建命令，用于指定在接收到信号后将要采取的动作。常见的用途是在脚本程序被中断时完成清理工作。
## 2.命令格式
```
trap [-lp] [ARG] [SIGSPECS]
```
## 3.选项说明
```
-l
	列出信号名称与对应的数值
-p
	列出信号与其绑定的命令列表
ARG
	与指定信号绑定的命令。如果 ARG 为空字符串，表示忽略信号；如果 ARG 不指定（缺省）或为 -，表示执行信号的默认动作
SIGSPECS
	信号列表，可以是信号名称，也可以是信号对应的数值。可用信号可以使用 trap -l 查看
```
## 4.常用示例
（1）忽略 HUP、INT、QUIT、TSTP 信号。
```
trap "" HUP INT QUIT TSTP
```
（2）捕获 HUP、INT、QUIT、TSTP 信号，并执行默认动作。
```
trap HUP INT QUIT TSTP
#或
trap - HUP INT QUIT TSTP
```
（3）挂载 Shell 进程结束前需要执行的命令。格式为：trap "commands" EXIT。如脚本 exit.sh：
```
#!/bin/bash

echo "start"
trap "echo 'end'" EXIT
echo "before exit"
exit 0
```
执行 exit.sh 输出：
```
start
before exit
end
```
## 5.信号简介
信号是一种进程间通信机制，它给应用程序提供一种异步的软件中断，使应用程序有机会接受其他程序发送的命令（即信号）。应用程序收到信号后，有三种处理方式：忽略、默认或捕捉。进程收到一个信号后，会检查对该信号的处理机制。如果是 SIG_IGN，就忽略该信号；如果是 SIG_DFT，则会采用系统默认的处理动作，通常是终止进程或忽略该信号；如果给该信号指定了一个处理函数，则会中断当前进程正在执行的任务，转而去执行该信号的处理函数，返回后再继续执行被中断的任务。

在有些情况下，我们不希望自己的 Shell 脚本在运行时被中断，比如说我们写的 Shell 脚本设为某一用户登录系统后默认执行的 Shell 脚本，使这一用户进入系统后只能做某一项工作，如数据库备份， 我们不希望用户使用 Ctrl+C 发送 SIGINT 信号来中断当前 Shell 脚本的执行，进入到 Shell 交互模式，做我们不希望做的事情。这便用到了信号处理。

以下是一些你可能会遇到的，要在程序中使用的常见的信号：
|信号名称|信号数值|默认动作|描述|
|---|---|---|---|
|SIGHUP|1|终止进程|终端连接结束时发出。终端连接断开，会向当前终端连接会话关联的所有前台和后台进程组发送SIGHUP信号，用于终止进程。|
|SIGINT|2|终止进程|程序终止（Interrupt）信号，通常是由Ctrl+C发出。|
|SIGQUIT|3|终止进程|和SIGINT类似,通常是Ctrl+/发出。进程在收到SIGQUIT信号退出时会产生core文件, 在这个意义上类似于一个程序错误信号。|
|SIGFPE|8|终止进程，建立CORE文件|在发生致命的算术运算错误（Floating-Point Exception）时发出，不仅包括浮点运算错误, 还包括溢出及除数为0等其它所有的算术错误。|
|SIGKILL|9|终止进程|用来立即结束程序的运行。本信号不能被阻塞, 处理和忽略。|
|SIGSEGV|11|终止进程，建立CORE文件|段错误（Segmentation Fault）信号。进程试图访问非法内存地址，如往没有写权限的内存地址写数据时会触发段错误。|
|SIGALRM|14|终止进程|时钟定时信号, 计时器到时会发出该信号。alarm()函数使用该信号。|
|SIGTERM|15|终止进程|程序结束(Terminate)信号, 与SIGKILL不同的是该信号可以被阻塞和处理。通常用来要求程序自己正常退出。Shell命令kill缺省产生这个信号。|
|SIGCHLD|17|忽略信号|子进程结束时, 父进程会收到这个信号|
详细的信号列表，可以使用命令`trap -l`或`kill -l`查看，也可以查看头文件<signal.h>。例如，执行`trap -l`，查看系统支持的所有信号如下：
```
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
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

[trap(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/trap.1p.html)

[trap(1) manual - linux.org](https://www.linux.org/docs/man1/trap.html)

[Linux命令大全.trap命令](http://man.linuxde.net/trap)

[linux中的trap命令](https://blog.csdn.net/holandstone/article/details/6738769)
