## 1.命令简介
iostat（IO statistics）命令被用于监视 CPU 和输入输出设备的使用情况。

iostat 有一个弱点，它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。

iostat 属于 [sysstat](http://sebastien.godard.pagesperso-orange.fr/download.html) 软件包，RedHat 系的 Linux 可以用 `yum install sysstat` 直接安装。

## 2.命令格式
```shell
iostat [OPTIONS] [ DEVICE [...] | ALL ] [ INTERVAL [ COUNT ]]
```
INTERVAL 表示 iostat 报告的时间间隔（单位秒），COUNT 表示报告的总次数。

## 3.选项说明
```
-c
	显示 CPU 使用情况
-d
	显示磁盘使用情况
--dec={ 0 | 1 | 2 }
	指定要使用的小数位数，默认为 2
-g GROUP_NAME { DEVICE [...] | ALL }
	显示一组设备的统计信息
-H
	此选项必须与选项 -g 一起使用，指示只显示组的全局统计信息，而不显示组中单个设备的统计信息
-h
	以可读格式打印大小
-j { ID | LABEL | PATH | UUID | ... } [ DEVICE [...] | ALL ]
	显示永久设备名。选项 ID、LABEL 等用于指定持久名称的类型
-k
	以 KB 为单位显示
-m 
	以 MB 为单位显示
-N
	显示磁盘阵列（LVM） 信息
-n
	显示NFS 使用情况
-p [ { DEVICE [,...] | ALL } ]
	显示磁盘和分区的情况
-t
	打印时间戳。时间戳格式可能取决于 S_TIME_FORMAT 环境变量
-V
	显示版本信息并退出
-x
	显示详细信息
-y
	如果在给定的时间间隔内显示多个记录，则忽略自系统启动以来的第一个统计信息
-z
	省略在采样期间没有活动的任何设备的输出。
```
## 4.常用示例
（1）显示所有设备负载情况。
```shell
iostat
Linux 3.10.107-1-tlinux2_kvm_guest-0049 (VM_114_170_centos) 	02/22/20 	_x86_64_	(8 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.10    0.00    0.12    0.01    0.00   99.77

Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
vda               1.57         0.99        40.17    1649382   66723341
vdb               0.14         0.41         3.42     687445    5681756
scd0              0.00         0.00         0.00        318          0
```
CPU 属性值说明：
```
%user：CPU 处在用户模式下的时间百分比
%nice：CPU 处在带 NICE 值的用户模式下的时间百分比，即改变过优先级的进程的占用 CPU 的百分比
%system：CPU 处在内核模式下的时间百分比
%iowait：CPU 等待输入输出完成时间的百分比
%steal：管理程序维护另一个虚拟处理器时，虚拟 CPU 的无意识等待时间百分比
%idle：CPU 空闲时间百分比
```
**注意：** 如果 %iowait 的值过高，表示硬盘存在 I/O 瓶颈，%idle 值高，表示 CPU 较空闲，如果 %idle 值高但系统响应慢时，有可能是 CPU 等待分配内存，此时应加大内存容量。%idle 值如果持续低于10，那么系统的 CPU 处理能力相对较低，表明系统中最需要解决的资源是 CPU。

磁盘属性值说明：
```
Device：/dev 目录下的磁盘（或分区）名称
tps：该设备每秒的传输次数。一次传输即一次 I/O 请求，多个逻辑请求可能会被合并为一次 I/O 请求。一次传输请求的大小是未知的
Blk_read/s (kB_read/s, MB_read/s)：每秒读取的数据大小。每个块等同于扇区，大小为 512B
Blk_wrtn/s (kB_wrtn/s, MB_wrtn/s)：每秒写入的数据大小
Blk_read (kB_read, MB_read)：读取数据的总大小
Blk_wrtn (kB_wrtn, MB_wrtn)：写入数据的总大小
```
（2）显示磁盘的详细使用情况。
```shell
iostat -dx
Linux 3.10.107-1-tlinux2_kvm_guest-0049 (VM_114_170_centos) 	02/22/20 	_x86_64_	(8 CPU)

Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
vda               0.03     1.58    0.05    1.53     0.99    40.16    52.35     0.00    2.51    4.53    2.45   0.48   0.08
vdb               0.00     0.12    0.02    0.12     0.41     3.41    53.61     0.00    8.99    2.98    9.99   0.38   0.01
scd0              0.00     0.00    0.00    0.00     0.00     0.00     7.23     0.00    0.41    0.41    0.00   0.41   0.00

```
磁盘属性值说明：
```
Device：/dev 目录下的磁盘（或分区）名称
rrqm/s：每秒合并到设备队列中的读取请求数
wrqm/s：每秒合并到设备队列中的写请求数
r/s：设备每秒完成的读请求数
w/s：设备每秒完成的写请求数
rsec/s (rkB/s, rMB/s)：每秒读取的数据大小。每扇区大小为 512 字节
wsec/s (wkB/s, wMB/s)：每秒写入的数据大小
avgrq-sz：平均每次设备 I/O 操作的数据大小 
avgqu-sz： I/O 请求队列平均长度
await：每次 I/O 平均耗时 （单位毫秒）。包括在请求队列中的等待时间和真正 I/O 时间
r_await：每个读操作平均耗时（单位毫秒）。包括在请求队列中的等待时间和真正读取时间
w_await：每个写操作平均耗时（单位毫秒）。包括在请求队列中的等待时间和真正写入时间
svctm：平均每次设备 I/O 操作的服务时间（单位毫秒）。警告！不要再信任此字段，此字段将在将来的 sysstat 版本中删除
%util：在统计时间内所有处理 IO 时间，除以总共统计时间。例如，如果统计间隔 1s，该设备有 0.8s 在处理 IO，而 0.2s 闲置，那么该设备的 %util = 0.8/1 = 80%，所以该参数暗示了设备的繁忙程度。
```
注意：如果 %util 是100%，表明产生的 I/O 请求太多，设备已经接近满负荷运行了（当然如果磁盘具有并发能力，即使 %util 是 100%，磁盘使用未必就到了瓶颈，比如 RAID 阵列和现代固态硬盘）。如果 svctm 比较接近 await，说明 I/O 几乎没有等待时间；如果 await 远大于 svctm，说明I/O 队列太长，I/O 响应太慢，则需要进行必要优化。如果 avgqu-sz 比较大，也表示有大量 I/O 在等待。

（3）查看指定磁盘的负载情况。
```shell
iostat -d vda
Linux 3.10.107-1-tlinux2_kvm_guest-0049 (VM_114_170_centos) 	02/22/20 	_x86_64_	(8 CPU)

Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
vda               1.57         0.99        40.16    1649382   67150673
```
（4）只查看 CPU 使用情况。每一个间隔 1s 显示一次，总共显示 3 次。
```shell
iostat -c 1 3
Linux 3.10.107-1-tlinux2_kvm_guest-0049 (VM_114_170_centos) 	02/22/20 	_x86_64_	(8 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.10    0.00    0.12    0.01    0.00   99.77

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.00    0.00    0.13    0.00    0.00   99.87

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.00    0.00    0.13    0.00    0.00   99.87
```

---
## 参考文献

[iostat(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/iostat.1.html)

[sysstat 官网](http://sebastien.godard.pagesperso-orange.fr/download.html)

[Linux 命令手册.iostat 命令](http://linux.51yip.com/search/iostat)