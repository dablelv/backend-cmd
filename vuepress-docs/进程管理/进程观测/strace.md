## 1.命令简介
strace 用于跟踪系统调用和信号。

strace 是一个集诊断、调试、统计于一体的工具，我们可以使用 strace 跟踪程序的系统调用和信号传递来对程序进行分析，以达到解决问题或者是了解程序工作过程的目的。当然 strace 与专业的调试工具比如说 gdb 之类的是没法相比的，因为它不是一个专业的调试器。

strace 的最简单的用法就是执行一个指定的命令，在指定的命令结束之后它也就退出了。在命令执行的过程中，strace 会记录和解析进程的所有系统调用以及这个进程所接收到的所有信号值。

## 2.命令格式
```shell
strace [options] -p <pid>
strace [options] <command> [<args>]
```

## 3.选项说明
```shell
-c
	统计每个系统调用的时间、次数和错误，并在程序退出时报告摘要
-C
	类似于 -c，但在进程运行时也打印常规输出
-D
	将跟踪进程作为分离的孙进程运行，而不是作为跟踪对象的父进程运行。这通过保持跟踪对象是调用进程的直接子进程来减少 strace 的可见效果
-d
	输出 strace 关于标准错误的调试信息
-f
	跟踪由 fork(2), vfork(2) and clone(2) 调用所产生的子进程
-ff
	如果提供 -o FILENAME，则所有进程的跟踪结果输出到相应的 FILENAME.pid 中，pid 是各进程的进程号 
-F
	该选项已废弃，作用等同于 -f
-h
	输出简要的帮助信息
-i
	在系统调用时打印指令指针
-q
	禁止附加、分离等信息。当输出被重定向到文件并直接运行命令而不是附加命令时，这将自动发生
-qq
	如果给定两次，则禁止关于进程退出状态的消息。
-r
	在每次系统调用进入时打印相对时间戳。它记录连续系统调用开始之间的时间差
-t
	在输出中的每一行前加上时间信息
-tt
	如果给定两次，在输出中的每一行前加上微秒级的时间信息
-ttt
	如果给定三次，则打印的时间将包括微秒，并且开始部分将打印自纪元以来的秒数
-T
	显示每一系统调用所耗的时间 
-v
	输出所有的系统调用。一些调用关于环境变量，状态，输入输出等调用，由于使用频繁默认不输出
-V
	输出 strace 的版本信息.
-x
	以十六进制形式输出非标准字符串
-xx
	所有字符串以十六进制形式输出
-y
	与文件描述符参数关联的打印路径
-a COLUMN
	设置返回值的输出位置，默认为40
-b SYSCALL
	如果达到指定的系统调用，与跟踪进程分离。目前，只支持 execve。如果希望跟踪多线程进程，因此需要 -f，但不希望跟踪其（可能非常复杂的）子进程，则此选项非常有用
-e EXPR
	指定一个表达式，用来控制如何跟踪。格式如下: 
	[qualifier=][!]value1[,value2]... 
	qualifier 只能是 trace, abbrev, verbose, raw, signal, read, write 其中之一。value 是用来限定的符号或数字。默认的 qualifier 是 trace，感叹号是否定符号。例如：-e open 等价于 -e trace=open，表示只跟踪 open 调用。而 -etrace=!open 表示跟踪除了 ope 以外的所有其他调用。有两个特殊的符号 all 和 none，分别表示跟踪所有和不跟踪任何系统调用。注意有些 Shell 使用 ! 来执行历史记录里的命令，所以要使用反斜杠对 ! 进行转义
-e trace=SET
	只跟踪指定的系统调用。例如: -e trace=open,close,rean,write 表示只跟踪这四个系统调用，默认的为 trace=all 
-e trace=file
	只跟踪有关文件操作的系统调用
-e trace=process 
	只跟踪有关进程控制的系统调用
-e trace=network 
	跟踪与网络有关的所有系统调用
-e strace=signal
	跟踪所有与系统信号有关的系统调用 
-e trace=ipc 
	跟踪所有与进程通讯有关的系统调用
-e trace=desc
	跟踪所有与文件描述符相关的系统调用
-e trace=memory
	跟踪所有与内存映射相关的系统调用
-e abbrev=SET
	缩写打印大型结构的每个成员的输出。默认值是 abbrev=all。-v 选项的效果是 abbrev=none
-e verbose=SET
	为指定的系统调用集取消引用结构。默认是 verbose=all
-e raw=SET
	将指定的系统调用的参数以十六进制显示
-e signal=SET
	指定跟踪的系统信号，默认为 signal=all。如 signal=!SIGIO（或 signal=!io），表示不跟踪 SIGIO 信号
-e read=SET
	输出从指定文件描述符中读出的数据。例如：-e read=3,5
-e write=SET
	输出写入到指定文件中的数据
-o FILENAME
	将 strace 的输出写入指定文件
-O OVERHEAD
	将跟踪系统调用的开销设置为指定的微秒
-p PID
	跟踪指定的进程
-P PATH
	只跟踪系统调用的访问路径。多个 -P 选项可用于指定多个路径
-s STRSIZE
	指定输出的字符串的最大长度，默认为 32。注意，文件名不被认为是字符串，总是全部打印
-S SORTBY
	根据指定的条件对 -c 选项打印的直方图的输出进行排序。SORTBY 合法值是 time、calls、name 和 nothing，默认值是 time
-u USERNAME
	以指定用户的 UID、GID 和补充组执行被跟踪的命令
-E VAR=VAL
 	为命令设置环境变量
 -E VAR
 	从继承的环境变量列表中删除变量 VAR，然后将其传递给命令
```

## 4.常用示例

现在我们做一个很简单的程序来演示 strace 的基本用法。这个程序的 C 语言代码如下：

```c
#include<stdio.h>

int main() {
	int a = 0;
	printf("please input:\n");
	scanf("%d", &a);
	printf("%10d\n", a);
	return 0;
}
```
通过 gcc 编译，默认生成名为 a.out 的可执行程序。
```
gcc main.c
```
（1）追踪系统调用。
```
strace -o strace.out ./a.out
```
输入 4 然后回车生成 strace 的输出文件 strace.out，其内容如下：
```
execve("./a.out", ["./a.out"], [/* 28 vars */]) = 0
brk(0)                                  = 0x1e79000
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7ff4e9feb000
access("/etc/ld.so.preload", R_OK)      = 0
open("/etc/ld.so.preload", O_RDONLY|O_CLOEXEC) = 3
fstat(3, {st_mode=S_IFREG|0644, st_size=18, ...}) = 0
mmap(NULL, 18, PROT_READ|PROT_WRITE, MAP_PRIVATE, 3, 0) = 0x7ff4e9fea000
close(3)                                = 0
readlink("/proc/self/exe", "/root/test/c++/strace/a.out", 4096) = 27
open("/lib64/libonion.so", O_RDONLY|O_CLOEXEC) = 3
read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0`\20\0\0\0\0\0\0"..., 832) = 832
fstat(3, {st_mode=S_IFREG|0755, st_size=42880, ...}) = 0
mmap(NULL, 1072448, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7ff4e9ee4000
mprotect(0x7ff4e9ee7000, 1048576, PROT_NONE) = 0
mmap(0x7ff4e9fe7000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7ff4e9fe7000
mmap(0x7ff4e9fe8000, 7488, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7ff4e9fe8000
close(3)                                = 0
munmap(0x7ff4e9fea000, 18)              = 0
open("/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3
fstat(3, {st_mode=S_IFREG|0644, st_size=74350, ...}) = 0
mmap(NULL, 74350, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7ff4e9ed1000
close(3)                                = 0
open("/lib64/libc.so.6", O_RDONLY|O_CLOEXEC) = 3
read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\20\35\2\0\0\0\0\0"..., 832) = 832
fstat(3, {st_mode=S_IFREG|0755, st_size=2122016, ...}) = 0
mmap(NULL, 3944896, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7ff4e9a07000
mprotect(0x7ff4e9bc1000, 2093056, PROT_NONE) = 0
mmap(0x7ff4e9dc0000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1b9000) = 0x7ff4e9dc0000
mmap(0x7ff4e9dc6000, 16832, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7ff4e9dc6000
close(3)                                = 0
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7ff4e9fea000
open("/lib64/libdl.so.2", O_RDONLY|O_CLOEXEC) = 3
read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0`\16\0\0\0\0\0\0"..., 832) = 832
fstat(3, {st_mode=S_IFREG|0755, st_size=19344, ...}) = 0
mmap(NULL, 2109744, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7ff4e9803000
mprotect(0x7ff4e9805000, 2097152, PROT_NONE) = 0
mmap(0x7ff4e9a05000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7ff4e9a05000
close(3)                                = 0
mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7ff4e9ecf000
arch_prctl(ARCH_SET_FS, 0x7ff4e9ecf740) = 0
mprotect(0x7ff4e9dc0000, 16384, PROT_READ) = 0
mprotect(0x7ff4e9a05000, 4096, PROT_READ) = 0
mprotect(0x600000, 4096, PROT_READ)     = 0
mprotect(0x7ff4e9fec000, 4096, PROT_READ) = 0
munmap(0x7ff4e9ed1000, 74350)           = 0
fstat(1, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 1), ...}) = 0
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7ff4e9ee3000
write(1, "please input:\n", 14)         = 14
fstat(0, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 1), ...}) = 0
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7ff4e9ee2000
read(0, "4\n", 1024)                    = 2
write(1, "         4\n", 11)            = 11
exit_group(0)                           = ?
+++ exited with 0 +++
```
从跟踪的结果可以看到，系统首先调用 execve 开始一个新的进程，接着进行环境的初始化操作，最后停顿在`read(0, "4\n", 1024) = 2`，这也就是执行到了 scanf 函数，等待我们输入数字。在输入完 4 之后，再调用 write 函数将格式化后的数值 4 输出到屏幕，最后调用 exit_group 退出进程，完成整个程序的执行过程。

（2）跟踪信号传递。

我们还是使用上面的 a.out 程序，来观察进程接收信号的情况，即跟踪进程和信号相关的系统调用。
```shell
#开启跟踪
strace -e trace=signal -o strace.out ./a.out

#查找进程 ./a.out 进程 ID
ps -ef | grep a.out | grep -v "grep\|strace"
root     10787 10784  0 22:46 pts/1    00:00:00 ./a.out

#根据上一步查到的进程 ID 通过 kill 命令发送信号 SIGKILL
kill -9 10787
```
再次查看 strace 的输出文件 strace.out 的内容。
```
--- SIGWINCH {si_signo=SIGWINCH, si_code=SI_KERNEL} ---
--- SIGWINCH {si_signo=SIGWINCH, si_code=SI_KERNEL} ---
+++ killed by SIGKILL +++
```
进程被杀退出时，strace 会输出 killed by SIGX（SIGX 代表发送给进程的信号）等，那么进程自己退出时会输出什么呢？

这里有个叫做 test_exit 的程序，其代码如下：
```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv) {
       exit(1);
}
```
我们 strace 看下它退出时 strace 上能看到什么痕迹。
```
strace -tt -e trace=process -f ./test_exit
```
-e trace=process 表示只跟踪和进程管理相关的系统调用。

输出：
```
23:07:24.672849 execve("./test_exit", ["./test_exit"], [/* 35 vars */]) = 0
23:07:24.674665 arch_prctl(ARCH_SET_FS, 0x7f1c0eca7740) = 0
23:07:24.675108 exit_group(1)           = ?
23:07:24.675259 +++ exited with 1 +++
```
可以看出，进程自己退出时（调用 exit 函数，或者从 main 函数返回）, 最终调用的是 exit_group系统调用， 并且 strace 会输出 exited with X（X为退出码）。

可能有人会疑惑，代码里面明明调用的是 exit, 怎么显示为 exit_group?

这是因为这里的 exit 函数不是系统调用，而是 glibc 库提供的一个函数，exit 函数的调用最终会转化为 exit_group 系统调用，它会退出当前进程的所有线程。实际上，有一个叫做 `_exit()` 的系统调用（注意 exit 前面的下划线）线程退出时最终会调用它。

（3）系统调用统计。

strace 不光能追踪系统调用，通过使用参数 -c，它还能将进程所有的系统调用做一个统计分析给你，下面来看看 strace 对系统调用的统计。
```shell
strace -c ./a.out
please input:
4
         4
% time     seconds  usecs/call     calls    errors syscall
------ ----------- ----------- --------- --------- ----------------
100.00    0.000038           3        15           mmap
  0.00    0.000000           0         4           read
  0.00    0.000000           0         2           write
  0.00    0.000000           0         5           open
  0.00    0.000000           0         5           close
  0.00    0.000000           0         7           fstat
  0.00    0.000000           0         7           mprotect
  0.00    0.000000           0         2           munmap
  0.00    0.000000           0         1           brk
  0.00    0.000000           0         1           access
  0.00    0.000000           0         1           execve
  0.00    0.000000           0         1           readlink
  0.00    0.000000           0         1           arch_prctl
------ ----------- ----------- --------- --------- ----------------
100.00    0.000038                    52           total
```
这里很清楚的告诉你调用了那些系统函数，调用次数多少，消耗了多少时间等等这些信息，这个对我们分析一个程序来说是非常有用的。

（4）跟踪一个现有的进程。

strace 不光能自己初始化一个进程进行 trace，还能使用 -p 选项追踪现有进程。具体用法如下：
```
strace -p PID
```

---
## 参考文献
[strace(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/strace.1.html)

[strace - Linux 命令大全](https://man.linuxde.net/strace)

[strace命令详解 - 马昌伟](https://www.cnblogs.com/machangwei-8/p/10388883.html)

<Vssue title="strace" />