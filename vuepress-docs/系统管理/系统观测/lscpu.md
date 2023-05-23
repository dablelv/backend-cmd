## 1.命令简介
lscpu 显示有关 CPU 架构的信息。

lscpu 从伪文件系统（sysfs）、/proc/cpuinfo 和任何可用的特定体系架构库（如 Powerpc 上的 librtas）收集 CPU 架构信息。命令输出可读，也可用于分析。输出内容包括：CPU、线程、内核的数量，以及非统一存储器存取（NUMA）节点。此外还包括关于 CPU 高速缓存和高速缓存共享的信息，家族、模型、bogoMIPS、字节顺序和步进（stepping）。

## 2.命令格式
```shell
lscpu [options]
```

## 3.选项说明
```shell
-a, –all
	显示上线和下线的 CPU 信息（默认与 -e 一起使用）。只能与选项 -e 或-p 一起指定。
-b, --online
	只显示离线的 CPU 信息（默认与 -p 一起使用）。只能与选项 -e 或 -p 一起指定。
-c, –offline
	只显示离线的 CPU 信息（默认与 -e 一起使用）。只能与选项 -e 或 -p 一起指定。
-e, –extended[=<list>]
	以可读的格式显示 CPU 信息。

	如果 list 参数省略，输出所有可用列。在指定了 list 参数时，选项的字符串、等号(=)和列表必须不包含任何空格或其他空白。比如：-e=cpu,node 或 –extended=cpu,node。
-h, –help
	显示帮助信息并退出。
-p, –parse[=<list>]
	优化命令输出，便于分析。如果省略 list，则命令的输出与早期版本的 lscpu 兼容，兼容格式以两个逗号分隔 CPU 缓存列。如果没有发现 CPU 缓存，则省略缓存列。如果使用 list 参数，则缓存列以冒号（:）分隔。

	在指定了 list 参数时，选项的字符串、等号(=)和列表必须不包含空格或其它空白。比如 -p=cpu,node 或 –parse=cpu,node。
-s, –sysroot <directory>
	为一个 Linux 实例收集 CPU 数据，而不是发出 lscpu 命令的实例。指定的目录是要检查 Linux 实例的系统根。
-x, –hex
	使用十六进制来表示 CPU 集合（如 0x3），默认情况是打印列表格式的集合(如 0,1)。
-y, --physical
	显示具有拓扑元素（核心、套接字等）的所有列的物理 ID。 除了由 lscpu 分配的逻辑 ID 之外，物理 ID 是内核提供的特定于平台的值。 物理 ID 不一定是唯一的，它们可能不会按顺序排列。如果内核无法检索元素的物理 ID，则 lscpu 将打印破折号 (-) 字符。

	CPU 逻辑编号不受此选项影响。
-V, --version
	显示版本信息并退出。
```

## 4.常用示例
（1）无参执行 lscpu，查看 CPU 信息总览。
```shell
# lscpu
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                2
On-line CPU(s) list:   0,1
Thread(s) per core:    1
Core(s) per socket:    2
Socket(s):             1
NUMA node(s):          1
Vendor ID:             GenuineIntel
CPU family:            6
Model:                 94
Model name:            Intel(R) Xeon(R) Gold 6146 CPU @ 3.20GHz
Stepping:              3
CPU MHz:               3192.502
BogoMIPS:              6385.00
Hypervisor vendor:     KVM
Virtualization type:   full
L1d cache:             32K
L1i cache:             32K
L2 cache:              4096K
L3 cache:              28160K
NUMA node0 CPU(s):     0,1
Flags:                 fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl eagerfpu pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single fsgsbase bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx avx512f avx512dq rdseed adx smap clflushopt avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 arat
```
从上面的信息可以看出，机器有 1 个插槽（Socket），插槽上的核心数（Core(s) per socket）为 2，每个核心线程数（Thread(s) per core）为 1，所以总的逻辑 CPU 数（CPU(s)）为 2。

此外还可以看出 CPU 架构为 x86_64，主频和一二三级缓存大小等信息。

各字段说明如下：
```
Architecture:        # 架构
CPU op-mode(s):      # CPU 运行模式
Byte Order:          # 字节序
CPU(s):              # 逻辑 CPU 核数
On-line CPU(s) list: # 在线 CPU 列表
Thread(s) per core:  # 每个核的线程数
Core(s) per socket:  # 每个 CPU 插槽核数/每颗物理 CPU 核数
CPU socket(s):       # CPU 插槽数
NUMA node(s):        # NUMA（Non-Uniform Memory Access）节点
Vendor ID:           # CPU 厂商 ID
CPU family:          # CPU 系列
Model:               # 型号
Model name:          # 型号名称
Stepping:            # 步进
CPU MHz:             # CPU 主频
CPU max MHz:         # CPU 最大主频
CPU min MHz:         # CPU 最小主频
Virtualization:      # CPU 支持的虚拟化技术
L1d cache:           # 一级缓存（CPU 的 L1 数据缓存）
L1i cache:           # 一级缓存（CPU 的 L1 指令缓存）
L2 cache:            # 二级缓存
...
```
另外，除了 lscpu，通常还会从 /sys 和 /proc 获取 CPU 相关信息。
```shell
cat /proc/cpuinfo
```
查看 cpu0 线程数：
```shell
cat /sys/devices/system/cpu/cpu0/topology/core_cpus
```
（2）以可读格式显示 CPU 信息。
```shell
# lscpu -e
CPU NODE SOCKET CORE L1d:L1i:L2:L3 ONLINE
0   0    0      0    0:0:0:0       yes
1   0    0      1    1:1:1:0       yes
```
（3）显示 CPU 指定列的信息，如查看逻辑 CPU。
```
# lscpu -e=CPU
CPU
0
1
```
可用列有：
```shell
CPU  			逻辑 CPU 数量。
CORE  			逻辑核心数量。一个核心可以包含多个CPU。
SOCKET  		逻辑插座数量。一个 socket 可以包含多个核心。
BOOK  			逻辑 book 数。一个 book 可以包含多个插座。
NODE  			逻辑 NUMA 节点数量。
DRAWER  		逻辑抽屉数（不太明白，好像和book有关系）
CACHE  			CPU 之间如何共享缓存
POLARIZATION 	虚拟硬件上的 CPU 调度模式
ADDRESS			CPU 物理地址
CONFIGURED  	管理程序是否分配了CPU
ONLINE  		显示 Linux 当前是否使用 CPU
MAXMHZ			CPU 最大频率
MINMHZ			CPU 最小频率
```

---
## 参考文献
[lscpu(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/lscpu.1.html)

<Vssue title="lscpu" />