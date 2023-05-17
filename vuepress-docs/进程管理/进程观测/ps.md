## 1.命令简介
ps（process status）命令用于报告当前进程快照。

ps 用于查看当前进程状态，查看的进程信息是当前的一个快照，如果想实时动态地查看进程信息，可以使用 [top 命令](https://dablelv.blog.csdn.net/article/details/102385811)。

ps 命令是最基本同时也是非常强大的进程查看命令，使用该命令可以查看进程的属主、进程ID、父进程ID、启动时间、占用 CPU 时长、启动命令、当前运行的状态等等，总之大部分信息都是可以通过执行该命令得到。ps 命令可以搭配 [kill]() 命令随时终止不必要的进程。

ps 命令可接收多种类型的命令选项，主要有：
- Unix 选项，可以分组，选项前面必须有一个连字符；
- BSD 选项，可以分组，不能与连字符一起使用；
- GNU long 选项，前面有两个连字符。

不同类型的选项可以自由混合，但可能会出现冲突。有一些同义的选项，它们在功能上是相同的。

默认情况下，ps 选择与当前用户具有相同有效用户 ID（EUID）且与调用者终端关联的所有进程。它显示进程 ID（PID）、与进程相关联的终端（TTY）、以 [DD-]hh:mm:ss 格式累积的 CPU 时间（TIME）和可执行文件名（CMD）。默认情况下输出不排序。

## 2.命令格式
```shell
ps [OPTIONS]
```

## 3.选项说明
### 3.1 简单的进程选择（SIMPLE PROCESS SELECTION）
```shell
a
	显示与终端关联的所有进程，包括其他用户的进程。一般与 x 选项联用，用于显示所有进程。
-A
	选择所有进程，等同于 -e。
-a
	选择除会话引导进程（参见 getsid(2)）和与终端无关的进程之外的所有进程。
-d
	选择除会话引导进程外的所有进程。
--deselect
	选择除满足指定条件进程之外的所有进程。等同于 -N。
-e
	选择所有进程，等同于 -A。
-N
	选择除满足指定条件进程之外的所有进程。等同于 --deselect
T
	选择与当前终端关联的所有进程。等同于没有参数的选项 t
r
	只显示运行状态的进程
x
	显示 EUID（有效用户ID ）等同于 ps 命令的所有进程，包括与终端无关联的进程。一般与 a 选项联用，用于显示所有进程。
```
### 3.2 通过参数列表选择进程（PROCESS SELECTION BY LIST）
```shell
-C cmdlist
	按照命名名称选择进程
<pid>, -<pid>
p, -p, --pid <pidlist>
	按照进程 ID 选择进程
--Group <grplist>
	按照实际用户组 ID（RGID，real group ID）或者用户组名称选择进程
--group <grplist>
	按照有效用户组 ID（EGID，effective group ID）或者有效用户组名称选择进程
--ppid pidlist
	按照父进程 ID 选择进程
q pidlist
-q pidlist
--quick-pid pidlist
	按进程 ID 以快速模式选择。比如不会选择父进程 ID 出现在 pidlist 的进程
-s sesslist
--sid sesslist
	按 session ID 选择
t, -t <ttylist>
	按终端名称选择。
-U, --User <userlist>
	按实际用户 ID（RUID，real user ID）选择
U, -u, --user <userlist>
	按有效用户 ID（EUID，effective user ID）选择
```

### 3.3 输出格式控制（OUTPUT FORMAT CONTROL）
```
-f
	以完整的格式输出，常与 -e 一起使用。此选项可以与许多其他 Unix 样式的选项组合，来添加其他列，比如与 -L 一起使用时，显示 LWP（线程 ID）和 NLWP（线程数）列。它还导致命令参数被打印
-F
	在 -f 选项的基础上，添加 SZ、RSS、PSR 列
o, -o, --format <format>
	用户自定义输出格式，以指定的宏选择需要输出的 UNIX or BSD 列。
j
	以 BSD 任务控制格式输出。
-j
	以任务格式输出。
l
	以 BSD 长格式输出。
-l
	以长格式输出，经常与 -y 选项一起使用。
Z, -M
	添加一列安全数据（用于 SELinux）。
O, -O <format>
	用户自定义输出格式，其中会预定义一些公共字段。等同于 -o pid,format,state,tname,time,command 或 -o pid,format,tname,time,cmd。
s
	以程序信号的格式输出
u
	以用户为主的格式来输出，常与 ax 选项一起使用
v
	以虚拟内存的格式输出
X
	以寄存器格式输出
-y
	以 RSS 列代替 ADDR。此选项只能与 -l 一起使用
```

### 3.4 输出修饰符（OUTPUT MODIFIERS）
```
c
	列出命令一栏 CMD 时，显示命令的名称，而不包含路径、命令参数或修饰符。可以与 -f 选项联用，只显示命令的名称
--cols, --columns <n>
	设置每列的最大字符数
S, --cumulative
	统计进程相关数据时，比如 CPU 使用率，包括已经死掉的进程
e
	在 COMMAND 列后输出环境变量
f, --forest
	用ASCII字符显示树状结构，表达程序间的相互关系
h
	不显示列名
-H
	显示树状结构，表示程序间的相互关系
--headers
	重复输出列名，每页输出一行列名
k, --sort <spec>
	指定排序规则。spec 语法是 [+|-]key[,[+|-]key[,...]]，其中 + 表示递增，- 表示递减，默认为递增。key 表示列名称，比如 pid（进程 ID）、ppid（父进程 ID）。如果以 pid 递减输出，可以指定 k -pid 或 --sort -pid
n
	以数字表示 USER 和 WCHAN 列，包括 UID 和 GID
-n, N <namelist>
	设置查找内核函数名称的文件，用于正确地显示 WCHAN 列。默认搜索路径为：
	$PS_SYSMAP
	$PS_SYSTEM_MAP
	/proc/*/wchan
	/boot/System.map-$(uname -r)
	/boot/System.map
	/lib/modules/$(uname -r)/System.map
	/usr/src/linux/System.map
	/System.map
--no-headers, --no-heading
	不输出列名。
O order
	按照指定的列进行排序，语法是 O[+|-]k1[,[+|-]k2[,...]]。其中 + 表示递增，- 表示递减，默认为递增。k1，k2... 表示列名称的一个字母简称，比如 p（进程 ID）、P 表示（父进程 ID）。如果以 pid 递减输出，可以指定 O -p。列名称的单个字母简称详见手册
--rows n
	设置每页显示的行数
w, -w
	采用宽格式输出
--width <n>
	每列字符数
```

### 3.5 线程展示（THREAD DISPLAY）
```
H
	将线程当做进程显示
-L
	显示线程，可能使用 LWP（线程 ID） 和 NLWP（线程数） 列
m
	在进程后显示线程
L
	列出所有输出格式说明符
V, -V, --version
	打印 procps-ng 软件包的版本。procps-ng 软件包包含了一系列查看和管理系统和进程的工具，比如 ps, top, vmstat, w, kill, free, slabtop, skill 等命令。
```
进程状态代号（PROCESS STATE CODES）取值如下，一般是 STAT 或者 S 列。
```
D	不可中断的睡眠状态，通常在等待 IO
R   运行或就绪状态
S   可中断的睡眠状态，比如正在等待某个事件的完成
T   被作业控制信号停止
t   在跟踪期间被调试器停止
W   分页中. 不适用于内核2.6.xx及以后的版本
X   死亡
Z   僵尸进程，已终止，但未被父进程回收
```
对于 BSD 风格的输出格式，进程状态 STAT 列可能会出现其它字符:
```
<    高优先级
N    低优先级
L    有些页被锁进内存
s    包含子进程
l    多线程
+    属前端进程组，与终端关联
```
其它概念，比如输出列的说明符、输出列的含义、影响 ps 的环境变量等，详见 ps 手册。

## 4.常用示例
（1）使用标准语法查看所有进程。
```
ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0  2018 ?        01:44:29 /usr/lib/systemd/systemd --system --deserialize 19
root         2     0  0  2018 ?        00:00:19 [kthreadd]
root         3     2  0  2018 ?        00:00:27 [ksoftirqd/0]
root         5     2  0  2018 ?        00:00:00 [kworker/0:0H]
root         7     2  0  2018 ?        00:01:03 [migration/0]
...
```
各列含义如下：
```
UID		启动进程的用户 ID
PID		进程 ID
PPID	父进程 ID
C		CPU 使用率，等于 CPU 所有核占用时间比上进程运行的总时间，多核的情况下可能会大于 100%。等同于列 %CPU
STIME	进程开始时间
TTY		启动进程的终端
TIME	占用 CPU 的累加时间
CMD		命令名称及参数
```
（2）使用 BSD 语法查看所有进程。
```
ps axu
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0  45120  2708 ?        Ss    2018 104:29 /usr/lib/systemd/systemd --system --deserialize 19
root         2  0.0  0.0      0     0 ?        S     2018   0:19 [kthreadd]
root         3  0.0  0.0      0     0 ?        S     2018   0:27 [ksoftirqd/0]
root         5  0.0  0.0      0     0 ?        S<    2018   0:00 [kworker/0:0H]
root         7  0.0  0.0      0     0 ?        S     2018   1:03 [migration/0]
...
```
相对于`ps -ef`，多出了如下几列：
```
USER	启动进程的用户名称。等于 ps -ef 输出的 UID 列
%CPU	CPU 使用率。等于 ps -ef 输出的 C 列
%MEM	内存使用率
VSZ		虚拟内存大小，单位 KB
RSS		常驻物理内存大小，单位 KB
STAT	进程状态
COMMAND	命令名称及参数。等于 ps -ef 输出的 CMD 列
```

（3）以 PID 列按递减序输出。
```
ps -ef --sort -pid
UID        PID  PPID  C STIME TTY      STAT   TIME CMD
root     31806     1  0  2018 ?        Ss     0:00 /usr/sbin/sshd
root     30105     2  0 Sep19 ?        S      0:23 [kworker/u12:1]
root     27902     2  0  2018 ?        S<     0:00 [ext4-dio-unwrit]
root     27901     2  0  2018 ?        S      6:28 [jbd2/vda2-8]
...
```
（4）按照可执行文件名称查看进程信息。
```
ps -C sshd -f
UID        PID  PPID  C STIME TTY          TIME CMD
root       524     1  0  2018 ?        00:00:00 /usr/sbin/sshd -D -f /etc/ssh/sshd_config.l
root     23881 31806  0 Oct03 ?        00:00:11 sshd: root@pts/0,pts/1
root     31806     1  0  2018 ?        00:00:00 /usr/sbin/sshd
```

## 5.拓展知识
### 5.1 UID、RUID、EUID、SUID 的区别
RUID（Real User ID）即 UID，表示真实用户 ID。创建进程的用户 ID 即为 RUID。

EUID（Effective User ID）表示有效用户 ID，用于系统决定用户对文件的访问权限，也就是说当用户做任何一个操作时，最终看它有没有权限，都是判断有效用户 ID 是否有权限。一般情况下 EUID 等于 RUID。

SUID（Set User ID）用于权限的开放，具有 SUID 权限的文件会在其执行时，使调用者临时获得该文件拥有者的权限，即将调用者的 EUID 变为该文件拥有者的 UID。

比如存放用户名及密码的文件 /etc/shadow 权限如下：
```
ls -lh /etc/shadow
---------- 1 root root 853 Jan  4  2019 /etc/shadow
```
可见 shadow 文件的属主是 root，但是任何用户都可以使用 passwd 命令修改它。
```
ls -lh /usr/bin/passwd
-rwsr-xr-x 1 root root 28K Jun 10  2014 /usr/bin/passwd
```
注意属主的权限执行位是 s，表示 passwd 命令具有 SUID 权限，它使一般用户在执行 passwd 命令的时候，拥有了 root 的权限。

---
## 参考文献
[ps(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/ps.1.html)

[简书.linux系统中的 UID RUID EUID SUID](https://www.jianshu.com/p/23f2f2be2b29)
