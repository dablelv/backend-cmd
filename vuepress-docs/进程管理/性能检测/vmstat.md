## 1.命令简介
vmstat（Virtual Memory Statistics）命令用于报告虚拟内存状态的统计信息。

vmstat 不仅可以监测虚拟内存，也可监测进程、物理内存、内存分页、磁盘和 CPU 等的活动信，是对系统的整体情况进行统计，不足之处是无法对某个进程进行深入分析。

vmstat 属系统管理员命令，属于 sysstat 软件包，RedHat 系的 Linux 可以用 yum install sysstat 直接安装。

## 2.命令格式
```
vmstat [OPTIONS] [DELAY [COUNT]]
```
DELAY 表示报告之间的间隔（秒）。如果没有指定间隔，仅打印一条自系统启动以来的平均统计信息。

COUNT 表示报告的次数，如果指定了 DELAY，没有指定 COUNT，表示无限次报告。

## 3.选项说明
```
-a, --active
	显示活跃和非活跃内存
-f, --forks
	显示从系统启动至今的 fork 数量 。这包括 fork、vfork 和 clone 系统调用，并相当于创建的任务总数。每个进程由一个或多个任务表示，这取决于线程的使用情况
-m, --slabs
	显示 slabinfo
-n, --one-header
	只在开始时显示一次各字段名称
-s, --stats
	显示各种事件计数器和内存统计信息的表
-D, --disk-sum
	报告一些有关磁盘活动的汇总统计数据
-d, --disk
	显示磁盘相关统计信息
-p, --partition DEVICE
	显示指定磁盘分区统计信息
-S, --unit CHAR
	使用指定单位显示。CHAR 可取值有 k（1000）、K（1024）、m（1000000） 、M（1048576）。默认单位为 K（1024 Bytes）
-t, --timestamp
	将时间戳附加到每行
-w, --wide
	宽输出模式，输出大于 80 个字符/行
-h, --help
	显示帮助信息并退出
-V, --version
	显示版本信息并退出
```

## 4.常用示例
（1）显示系统各项统计信息。
```
vmstat 
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 1  0      0 9120876 554900 5998224    0    0     0     6    1    2  0  0 100  0  0
```
vmstat 命令执行结果共分为 6 部分：procs、memory、swap、io、system、cpu。

输出内容的含义如下：
```
procs（进程）
r(run)
	运行或等待 CPU 时间片的进程数。如果该值长期大于服务器 CPU 的个数，则说明 CPU 资源不足
b(block)
	等待 I/O 的进程数量。该数值如果长时间大于 1，则表明系统 I/O 遇到瓶颈

memory（内存，单位 KB）
swpd
	虚拟内存（swap 空间）已使用的大小
free
	空闲的物理内存的大小
buff
	用作缓冲的内存大小，一般存放待写入磁盘的数据
cache
	用作缓存的内存大小，一般存放从磁盘中读取的数据

swap（虚拟内存，单位 KB）
si
	每秒从交换区写到内存的大小
so
	每秒写入交换区的内存大小

io（单位 块/秒）
bi
	每秒读取的块数（读磁盘）
bo
	每秒写入的块数（写磁盘）

system（系统）
in
	每秒 CPU 的中断次数，包括时钟中断
cs
	每秒上下文切换数，例如我们调用系统函数，就要进行上下文切换，线程的切换，也要进行上下文切换，这个值越小越好

cpu（以百分比显示）
us
	用户进程执行时间
sy
	系统进程执行时间
id
	空闲时间（包括 IO 等待时间）
wa
	等待 IO 时间。wa 的值高时，说明 IO 等待比较严重，这可能由于磁盘大量做随机访问造成的，也有可能是磁盘出现瓶颈
st
	被偷走的 CPU 时间
```
（2）每隔 1s 报告 3 次系统各项统计信息。
```
vmstat 1 3
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 1  0      0 9120312 554900 5999148    0    0     0     6    1    2  0  0 100  0  0
 0  0      0 9120048 554900 5999148    0    0     0     0  836  785  0  0 100  0  0
 1  0      0 9120064 554900 5999148    0    0     0    52  834  815  0  0 100  0  0
```
（3）显示活跃和非活跃内存。
```
vmstat -a
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free  inact active   si   so    bi    bo   in   cs us sy id wa st
 1  0      0 9124948 2119956 4194464    0    0     0     6    1    2  0  0 100  0  0
```
使用 -a 选项显示活跃和非活跃内存时，所显示的内容除增加 inact 和 active 外，其他显示内容与不使用选项的 vmstat 输出的内容相同。

字段说明：
```
inact：非活跃内存大小
active：活跃的内存大小
```
（4）查看系统自启动以来已经 fork 了多少次。
```
vmstat -f
5245186 forks
```
（5）显示内存相关统计信息及多种系统活动数量。
```
     16165976 K total memory
       491596 K used memory
      4194836 K active memory
      2119968 K inactive memory
      9124404 K free memory
       554900 K buffer memory
      5995076 K swap cache
            0 K total swap
            0 K used swap
            0 K free swap
      1660593 non-nice user cpu ticks
           26 nice user cpu ticks
      1987770 system cpu ticks
   1606632174 idle cpu ticks
       148581 IO-wait cpu ticks
            2 IRQ cpu ticks
         9090 softirq cpu ticks
            0 stolen cpu ticks
      2376421 pages paged in
     89871709 pages paged out
            0 pages swapped in
            0 pages swapped out
   1698946367 interrupts
   1672804654 CPU context switches
   1580713782 boot time
      5245774 forks
```
这些信息的分别来自于 /proc/meminfo、/proc/stat 和 /proc/vmstat。

（6）查看磁盘的读写。
```
vmstat -d
disk- ------------reads------------ ------------writes----------- -----IO------
       total merged sectors      ms  total merged sectors      ms    cur    sec
vda    77168  53491 3302309  349900 3094238 3196966 162673698 7600604	0   1531
vdb    34381    237 1428906  106216 257198 238871 17119528 3120952      0    117
```
这些信息主要来自于 /proc/diskstats。

输出字段说明：
```
disk 磁盘名

reads
total
	读取成功的数据总大小
merged
	合并的读请求数
sectors
	成功读取的扇区数
ms
	读取所花费的毫秒数

Writes
total
	写入成功的数据总大小
merged
	合并的写请求数
sectors
	成功写入的扇区数
ms
	写入所花费的毫秒数

IO
cur
	当前处于 I/O 等待的进程
s
	I/O 花费的秒数
```
（7）查看系统的 slab 信息。
```
Cache                       Num  Total   Size  Pages
kmalloc-8192                108    128   8192      4
kmalloc-4096                407    488   4096      8
kmalloc-2048               1093   1168   2048     16
...
```
由于内核会有许多小对象，这些对象构造销毁十分频繁，比如 i-node，dentry，这些对象如果每次构建的时候就向内存要一个页（4KB），而其实只有几个字节，这样就会非常浪费，为了解决这个问题，就引入了一种新的机制来处理在同一个页中如何分配小存储区，而 slab 可以对小对象进行分配,这样就不用为每一个对象分配一个页，从而节省了空间。内核对一些小对象创建析构很频繁，slab 对这些小对象进行缓冲，可以重复利用，减少内存分配次数。

---
## 参考文献
[vmstat(8) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man8/vmstat.8.html)

[sysstat 官网](http://sebastien.godard.pagesperso-orange.fr/download.html)

[每天一个linux命令（46）：vmstat命令 - 博客园](https://www.cnblogs.com/peida/archive/2012/12/25/2833108.html)

<Vssue title="vmstat" />