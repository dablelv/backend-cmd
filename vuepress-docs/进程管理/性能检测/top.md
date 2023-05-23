## 1.命令简介
top 命令用于实时显示当前系统资源整体使用情况以及所有进程或线程的资源占用状况。

top 命令提供了交互式界面和丰富的配置功能，是一个综合了多方信息监测系统性能和运行信息的实用工具，类似于 Windows 的任务管理器。

## 2.命令格式
```shell
top -hv|-bcHiOSs -d secs -n max -u|U user -p pid -o fld -w [cols]
```

## 3.选项说明
```
-h
	显示帮助信息然后退出。
-v
	显示版本信息然后退出。
-b
	批处理模式。一般用于将 top 的输出结果重定向到另外的命令或者文件中。此模式下 top 不接受任何交互命令，运行由 -n 选项指定的轮数或者被 kill 后终止
-c
	显示完整的命令，包括命令的路径、名称以及参数
-d secs
	改变屏幕刷新间隔时间。top 运行过程中也可以使用交互式命令 d 或 s 重新设定
-H
	以线程模式执行 top，等同于交互式命令 H。默认情况下以进程模式执行 top，进程模式下，一个进程下的所有线程归总后显示一行
-i
	不显示任何闲置（idle）或无用（zombie）的进程
-n max
	指定更新的次数，完成后将会退出 top
-o fld
	指定排序的列。可以在列名前使用 + 表示由大到小逆序排列，- 表示由小到大正序排列
-O
	打印 -o 选项可用的列名，每行一个列名
-p PID
	只显示指定进程 ID 的进程信息。可以指定多个 PID，最多为 20 个，格式为 -p PID1,PID2,PID3...。特别地，pid 为 0 表示 top 命令本身。如果想显示所有进程信息，无需关闭 top 命令，只需要执行交互式命令 =、u 或 U 即可。
-s
	以安全模式启动 top，对于 root 用户也是如此。这种模式通过系统配置文件能得到更好的控制
-S
	进程 CPU 使用时间为进程本身和其已死亡的子进程的 CPU 使用时间之和。
-U, --filter-any-user = USER
	只显示与给定用户 ID 或用户名匹配的进程。此选项适用于任何用户（real, effective, saved, or filesystem）。可以在 USER 前面加上感叹号 !，表示反向匹配，即不显示匹配的用户的进程。
-u, --filter-only-euser = USER
	只显示与给定用户 ID 或用户名匹配的进程。此选项仅与有效用户 ID 匹配。可以在 USER 前面加上感叹号 !，表示反向匹配，即不显示匹配的用户的进程。
-w [cols]
	指定显示的宽度，默认为环境变量 COLUMNS 指定的宽度。cols 不能超过 512 或者终端的宽度
```

## 4.输出介绍
使用不带任何选项的 top 命令，有如下输出：
```
top - 16:07:48 up 442 days,  2:51,  3 users,  load average: 0.00, 0.01, 0.05
Tasks: 217 total,   1 running, 216 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.6 us,  0.3 sy,  0.0 ni, 99.1 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem : 15140452 total,   598296 free,   383764 used, 14158392 buff/cache
KiB Swap:  2104508 total,  1550372 free,   554136 used. 12974597 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+    COMMAND                                                                                                                                                                                                                             
29206 root      20   0  156868   2300   1528 R   0.3  0.0   0:00.17 top                                                                                                                     
    1 root      20   0   45120   2708   1308 S   0.0  0.0 107:09.19 systemd                                                                                                                 
    2 root      20   0       0      0      0 S   0.0  0.0   0:19.67 kthreadd                                                                                                                
    3 root      20   0       0      0      0 S   0.0  0.0   0:27.96 ksoftirqd/0                                                                                                             
    5 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 kworker/0:0H                                                                                                            
    7 root      rt   0       0      0      0 S   0.0  0.0   1:04.99 migration/0                                                                                                             
    8 root      20   0       0      0      0 S   0.0  0.0   0:00.00 rcu_bh                                                                                                                  
    9 root      20   0       0      0      0 S   0.0  0.0   0:00.00 rcuob/0                                                                                                                 
   10 root      20   0       0      0      0 S   0.0  0.0   0:00.00 rcuob/1
...   
```
前五行是系统整体的统计信息，称为汇总区（Summary Area）。

第一行是时间相关和任务队列信息，同 uptime 命令的执行结果。
```
16:07:48						当前时间
up 442 days,  2:51				系统运行的总时长，单位分
3 users							当前登录用户数
load average: 0.00, 0.01, 0.05	系统负载，即任务队列的平均长度。三个数值分别为最近 1 分钟、5 分钟、15 分钟的平均值。
```
第二行是进程信息统计数据。
```
217 total		总的进程数
1 running		正在运行的进程数
216 sleeping	睡眠的进程数
0 stopped		停止的进程数
0 zombie		僵尸进程数
```
第三行是 CPU 统计数据。
```
0.6 us	用户空间占用CPU百分比
0.3 sy	内核空间占用CPU百分比
0.0 ni	用户进程空间内改变过优先级的进程占用CPU百分比
99.1 id	空闲CPU百分比
0.0 wa	等待输入输出的CPU时间百分比
0.0 hi	硬中断（Hardware IRQ）占用CPU百分比
0.0 si	软中断（Software IRQ）占用CPU百分比
0.0 st	虚拟机（虚拟化技术）占用百分比
```
第四行为物理内存的统计数据。
```
15140452 total		物理内存总量
598296 free			空闲内存总量
383764 used			已使用的物理内存总量
14158392 buff/cache	用作内核缓存的内存量
```
第五行为交换分区（即虚拟内存）的统计数据。
```
2104508 total		交换区总量
1550372 free		空闲交换区总量
554136 used			已使用的交换区总量
12974597 avail Mem	实际可用物理内存总量
```
这里要说明的是不能用 Windows 的内存概念来理解这些数据，如果按 Windows 的方式来理解，此服务器共只剩下 598MB 的内存，实际上系统可用的物理内存远不止这些。free 内存表示尚未被内核占用的空闲内存，但是被内核占用用于 buffer 和 cache 的内存，实际上是可以被进程使用的，内核并不把这些可被重新使用的内存算到 free 中，因此在 Linux 上 free 内存会越来越少，但不用为此担心。

第六行是空行。从第七行开始，显示了各个进程的状态信息，称为任务区（Task Area）。各列含义如下：
```
PID		进程id
USER	进程所有者
PR		进程优先级，范围为0-31，数值越低，优先级越高
NI		nice值。范围-20到+19，用于调整进程优先级，新的进程优先级 PR(new)=PR(old)+nice，所以nice负值表示高优先级，正值表示低优先级
VIRT	进程使用的虚拟内存总量，单位 KB
RES		Resident Memory Size，进程使用的、未被换出的物理内存大小，单位 KB
SHR		共享内存大小，单位 KB
S		进程状态。D(uninterruptible sleep)=不可中断的睡眠状态；R(Running)=运行；S(Sleeping)=睡眠；T(sTopped by job control signal)=停止；t(stopped by debugger during trace)=跟踪；Z(Zombie)=僵尸进程
%CPU	上次更新到现在的 CPU 时间占用百分比。注意，在多核或多 CPU 环境中，如果进程是多线程的，而 top 不是在线程模式下运行的，该值由多个核的值累加，可能会大于 100%
%MEM	进程使用的物理内存百分比
TIME+	进程使用的 CPU 时间总计，单位 1/100 秒
COMMAND	进程名称（命令名/命令行）
```
top 可输出的全部进程指标可以使用命令`top -O`查看，其它指标的介绍这里不再赘述，具体可参见 top manual。`top -O` 输出结果如下：
```
PID
PPID
UID
USER
RUID
RUSER
SUID
SUSER
GID
GROUP
PGRP
TTY
TPGID
SID
PR
NI
nTH
P
%CPU
TIME
TIME+
%MEM
VIRT
SWAP
RES
CODE
DATA
SHR
nMaj
nMin
nDRT
S
COMMAND
WCHAN
Flags
CGROUPS
SUPGIDS
SUPGRPS
TGID
ENVIRON
vMj
vMn
USED
nsIPC
nsMNT
nsNET
nsPID
nsUSER
nsUTS
```

## 5.交互式命令
执行 top 命令后，可以通过交互式命令与 top 进行交互，达到我们想要的输出效果。从使用角度来看，熟练地掌握这些命令比掌握选项还重要一些。这些命令都是单字母的，如果在命令行选项中使用了 -s 安全模式选项，则可能其中一些命令会被屏蔽掉。

按照交互式命令的作用划分，可分为如下四类：
（1）全局命令（Global Commands）；
（2）作用于前五行系统整体统计信息的汇总区命令（Summary Area Commands ）；
（3）作用于进程信息列表的任务区命令（Task Area Commands）；
（4）改变窗口的显示颜色（Color-Mapping）。

（1）全局命令（Global Commands）。
命令前有星号表示该命令在安全模式（Secure Mode）下不起作用。
```
<Ent/Sp>	
	刷新显示的信息
?/h			
	显示交互式命令的帮助（Help）信息		
=			
	显示所有进程信息。在使用 -p 选项只显示指定进程 ID 的进程信息时，可以使用 = 打破该限制以显示所有进程信息
0			
	在进程详情区显示或隐藏为 0 的字段数值。注意，有些字段如 UID, GID, NI, PR or P 不受此开关的影响
A			
	在 full-screen mode 与 alternate-display mode 间切换。top 默认为 full-screen mode
B			
	粗体显示汇总区（summary area）和任务区（task area）数值
* d/s		
	设定刷新间隔，单位秒。安全模式下不起作用
E			
	扩增（Extend）汇总区内存显示单位，从 KB、MB、GB、TB、PB 到 EB 循环切换
e			
	扩增（Extend）任务区内存显示单位，从 KB、MB、GB、TB、PB 到 EB 循环切换
g			
	选择要展示的字段组（group），取值为 1 到 4，top 默认为 1。这四组同时展示即为 alternate-display mode
H			
	以线程（tHread）模式展示任务区，每个线程单独显示一行。默认为进程模式，一个进程下的所有线程归总后显示一行	
I
	打开或关闭 Irix/Solaris-Mode。打开后，一个任务的 CPU 使用率将会被除以 CPU 核心数
* k			
	杀死（Kill）指定进程。需要手动输入 PID 以及需要发送给该进程的信号。默认信号为15（SIGTERM）。如果不能正常结束可以使用信号9（SIGKILL）强制结束该进程。安全模式下该命令不起作用
q
	退出
* r
	更新（Renice）任务的 nice 值。执行 r 后，将提示用户输入 PID 和相应的 nice 值。输入的 PID 如果为负数，表示第一个任务。如果 PID 为 0，表示 top 命令本身。一般情况下，普通用户只允许增大 nice 值，以降低进程的优先级
W			
	将当前 top 的选项、交互式命令开关、当前显示模式以及刷新间隔写到（Write）配置文件 ~/.toprc，以便下一次打开 top 时能够进入退出 top 前的状态
X			
	改变某些列的固定宽度（eXtra-Fixed-Width）。可改变的列如下：
    field  default    field  default    field  default
    GID       5       GROUP     8       WCHAN    10
    RUID      5       RUSER     8       nsIPC    10
    SUID      5       SUSER     8       nsMNT    10
    UID       5       USER      8       nsNET    10
                      TTY       8       nsPID    10
                                        nsUSER   10
                                        nsUTS    10
	如果输入的是 0，恢复到默认值，如果输入的是正数，则增加相应的宽度。如果输入的是负数，则 top 将自动增加列的宽度直到展示的数据没有被截断
Y
	键入交互式命令 Y 后，将提示输入目标 PID。会在一个单独的屏幕接受输入值或默认的结果，这个屏幕可以用于观察各种文件或管道命令的输出，此时 top 的视图是暂停更新的
Z
	进入颜色设置窗口
```
（2）汇总区命令（Summary Area Commands ）。
```
C
	在第六行显示或隐藏任务区坐标（Coordinates）原点位于第 x 列，第 y 行
l
	显示或隐藏系统启动时间信息和平均负载（Load-Average/Uptime）。即显示或隐藏第一行
t
	显示或隐藏任务与 CPU 信息（Task/Cpu-States），即第二行和第三行
m
	显示或隐藏内存信息（Memory/Swap-Usage），即第四行和第五行
1
	显示或隐藏每个 CPU 核心的使用信息，即影响第三行 CPU 信息显示方式
2
	显示或隐藏 NUMA 节点信息
3
	显示或隐藏 NUMA 节点信息，需要手动输入选择要展示的 NUMA 节点
```
（3）任务区命令（Task Area Commands）。
任务区命令在 full-screen mode 下都有效，在 alternate-display mode 下无效。按照功能又可细分为如下四类：
```
Appearance:  b, J, j, x, y, z
Content:     c, f, F, o, O, S, u, U, V
Size:        #, i, n
Sorting:     <, >, f, F, R
```
详解如下：
```
Appearance:
b
	当列和行进行高亮显示时，执行 b 命令可切换列和行背景是否高亮
J
	数值列调整（Justify），进行左对齐或右对齐。默认为右对齐
j
	字符串列调整（Justify），进行右对齐或左对齐。默认为左对齐
x
	高亮显示被选中的列
y
	高亮显示正在运行的任务
z
	切换到白字黑底或黑字白底的颜色模式

Content:
c
	切换显示命令名称和完整命令行
f/F
	进入字段（Field）管理窗口，选择显示或隐藏的列
o/O
	添加过滤条件，用于决定哪个任务显示在任务区
S
	切换到 CPU 时间为累计模式，每个进程的 CPU 时间包括其已死亡的子进程
u/U
	只展示制定 User ID 或 User Name 的任务
V
	按照父进程 ID 有小到大重新排序进程，使得子进程在父进程的下方
	
Size
i
	忽略闲置和僵尸进程
#/n
	设置任务区最多可显示的任务数

Sorting:
M
	按照列 %MEM 排序 
N
	按照列 PID 排序  
P
	按照列 %CPU 排序 
T
	按照列 TIME+ 排序
<
	小于号表示向左移动选择待排序的列
>
	大于号表示向右移动选择待排序的列
f/F
	进入字段管理窗口也可以指定待排序的列
R
	在正序与逆序间切换（Reverse）
```
（4）改变窗口的显示颜色（Color-Mapping）。
键入交互式命令 Z 将进入颜色设置窗口。
```
有四个大写字母用于选择作用的区域：
   S = Summary Data,  M = Messages/Prompts,
   H = Column Heads,  T = Task Information
   
有8个数字代表不同的颜色：
	0 = black,  1 = red,      2 = green,  3 = yellow,
	4 = blue,   5 = magenta,  6 = cyan,   7 = white

q
	放弃设定退出颜色设置窗口
a/w
	保存当前设置并进入下一项设置
<Enter>
	保存当前设置并退出颜色设置窗口
```
## 6.多窗口模式介绍（alternate display mode）

### 6.1 窗口总览（WINDOWS Overview）
top 默认进入 full-screen mode，只有一个任务区，可以键入交互式命令 A 进入拥有四个任务区的 alternate display mode。四个任务区编号为 1 到 4，full-screen mode 默认展示的是编号为 1 字段组。alternate display mode 视图如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008143608991.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)
在 alternate display mode 视图下，当前字段组，即当前窗口，是可以直接操作的窗口，交互式命令会在当前窗口产生作用。进入 alternate display mode 视图，默认的当前窗口是编号为 1 字段组。

### 6.2 窗口相关的交互式命令（COMMANDS for Windows）
在 full-screen mode 视图下，如果想展示其他字段组，可以键入交互式命令 g 后键入指定编号选择对应的字段组。比如我选择第 2 字段分组，视图如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008143635757.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)
在 alternate display mode 视图下，同样可以通过命令 g 来选择当前作用于哪个字段组，并且可以通过交互式命令 G 来改变当前字段组的名称。比如将编号为 1 的当前字段组的默认名称由 Def 改为 Fir。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008143708500.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)
在 alternate display mode 视图下，连字符 - 或者下划线 _ 可以隐藏或显示当前字段组。隐藏编号为 1 的当前字段组后的视图如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008143735302.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)
### 6.3 滚动窗口（SCROLLING a Window）
```
Up,PgUp
	向上滚动当前字段组的任务区
Down,PgDn
	向下滚动当前字段组的任务区
Left,Right
	向左或向右滚动当前字段组的任务区
Home
	跳转到当前字段组任务区的第一行
End
	跳转到当前字段组任务区的最后一行
C
	在第六行显示或隐藏任务区坐标（Coordinates）原点位于第 x 列，第 y 行
```

### 6.4 在窗口内搜索（SEARCHING in a Window）
（1）L
在当前窗口内，可以使用交互式命令 L 来定位到指定内容的任务行。键入 L 后，将会提示输入待查找的大小写敏感的字符串。比如查到 top 命令行。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008143757382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)
当然，L 命令在全屏模式（full-screen mode）下也可以使用。

（2）&
如果 L 命令匹配了多行，使用 & 可以跳转到下一行。

### 6.5 在窗口内过滤（FILTERING in a Window）
使用交互式命令 o 或者 O 可以建立选择条件，用于确定哪些任务显示在当前窗口中。

建立筛选器至少需要输入三部分：
（1）字段名；
（2）运算符。可为 =、< 或 > ;
（3）选择值。

筛选条件书写格式如下：
```
[!]<字段名><运算符><选择值>
```
其中，感叹号表示反向过滤，即满足条件的行不展示在任务区。注意，筛选条件不能有空格。这个是 top 最复杂的用户输入需求，输入时多加小心。

如果想清除建立的过滤器，可以键入命令 = 清除当前窗口的过滤器。如果是在 alternate display mode 视图下，键入命令 + 将清除所有窗口的过滤器。

比如我们建立一个过滤器，规则为 %CPU 列数值大于 0.0 。那么在键入命令 o 或者 O 后，输入的过滤规则为`%CPU>0.0`。结果视图为：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008143859783.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)

## 7.配置文件
top 有两个级别的配置文件，一是系统配置文件，对所有用户有效，地址是`/etc/toprc`，并且只能有两行，示例内容如下：
```
s        # line 1: secure mode switch
5.0      # line 2: delay interval in seconds
```
另外一个是用户级配置文件，只对具体用户有效，地址是`~/.toprc`。使用交互式命令 W 会创建或更新改配置文件，其内容大致如下：
```
global   # line  1: the program name/alias notation
  "      # line  2: id,altscr,irixps,delay,curwin
per ea   # line  a: winname,fieldscur
window   # line  b: winflags,sortindx,maxtasks,graph modes
  "      # line  c: summclr,msgsclr,headclr,taskclr
global   # line 15: additional miscellaneous settings
  "      # any remaining lines are devoted to the
  "      # generalized inspect provisions
  "      # discussed below
```

## 8.常用示例
（1）按照 CPU 使用率 %CPU 排序进程。
运行 top 后键入交互式命令 P。效果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008143915429.png)

（2）按照内存使用率 %MEM 排序进程。
运行 top 后键入交互式命令 M。效果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008143932113.png)

（3）背景高亮显示任务区当前排序列和正在运行的进程。
运行 top 后键入交互式命令 x 和 y，然后再键入 b 进行背景高亮。效果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008144113992.png)
并且可以使用大于号 > 向右选择排序列，使用小于号 < 向左选择排序列。

（4）监控各个逻辑 CPU 的使用状况
在 top 基本视图中，默认只会显示 CPU 总的使用情况。键入数字 1，可以查看每个逻辑 CPU 的使用情况。效果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008144127122.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)

---
## 参考文献
[top(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/top.1.html)

[每天一个命令：top工具命令](https://blog.csdn.net/weixin_42500678/article/details/80754737)

<Vssue title="top" />
