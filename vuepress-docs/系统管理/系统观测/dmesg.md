## 1.命令简介
dmesg（display message）打印或控制内核环形缓冲区。

dmesg 命令用于检查和控制内核的环形缓冲区。Kernel 会将开机信息存储在 ring buffer 中，我们可以从中获得诸如系统架构、CPU、挂载的硬件，RAM 等多个运行级别的大量的系统信息。可利用 dmesg 来查看系统的启动信息。开机信息也会保存在 /var/log/dmesg。

当计算机启动时，系统内核会被加载到内存中。在加载的过程中会显示很多的信息，在这些信息中我们可以看到内核检测硬件设备。因此我们可以利用 dmesg 进行设备故障的诊断。内核进行硬件的连接或断开连接操作时，在 dmesg 命令的帮助下，我们可以看到硬件的检测或者断开连接的信息。

## 2.命令格式
```shell
dmesg [OPTIONS]
dmesg --clear
dmesg --read-clear [OPTIONS]
dmesg --console-level LEVEL
dmesg --console-on
dmesg --console-off
```

## 3.选项说明
```
 -C, --clear
 	清除内核环形缓冲区（ring butter）。
-c, --read-clear
 	读取并清除所有消息。
-D, --console-off
	禁止向终端打印消息。
 -d, --show-delta
 	显示打印消息之间的时间差。
 -e, --reltime
 	以易读格式显示本地时间和时间差。
 -E, --console-on
 	启用向终端打印消息。
 -F, --file <file>
 	用文件代替内核日志缓冲区。
 -f, --facility <list>
 	将输出限制为定义的设施。
 -H, --human
 	易读格式输出。
 -k, --kernel
 	显示内核消息。
 -L, --color
 	显示彩色消息。
 -l, --level <list>
 	限制输出级别。
 -n, --console-level <level>
 	设置打印到终端的消息级别。
 -P, --nopager
 	不将输出通过管道传递给分页程序。
 -r, --raw
 	打印原生消息缓冲区。
 -S, --syslog
 	强制使用系统调用 syslog(2) 而非 /dev/kmsg 去读取内核信息，因为从 kernel 3.5.0 开始，默认使用 /dev/kmsg。
 -s, --buffer-size <size>
 	查询内核环形缓冲区所用的缓冲区大小。
 -T, --ctime
 	显示易读的时间戳（如果您使用了 SUSPEND/RESUME 则可能不准)。
 -t, --notime
 	不打印消息时间戳。
 -u, --userspace
 	显示用户空间消息。
 -w, --follow
 	等待新消息。
 -x, --decode
 	将设施和级别解码为可读的字符串。
 -h, --help
 	显示此帮助并退出。
 -V, --version
 	输出版本信息并退出。
```

## 4.常用示例
（1）列出加载到内核中的所有驱动。
```shell
dmesg
[    0.000000] Initializing cgroup subsys cpuset
[    0.000000] Initializing cgroup subsys cpu
[    0.000000] Initializing cgroup subsys cpuacct
[    0.000000] Linux version 3.10.0-1160.71.1.el7.x86_64 (mockbuild@kbuilder.bsys.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) ) #1 SMP Tue Jun 28 15:37:28 UTC 2022
[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-3.10.0-1160.71.1.el7.x86_64 root=UUID=4b499d76-769a-40a0-93dc-4a31a59add28 ro net.ifnames=0 biosdevname=0 console=ttyS0,115200 console=tty0 panic=5 crashkernel=2G-8G:256M,8G-16G:512M,16G-:768M intel_idle.max_cstate=1 intel_pstate=disable processor.max_cstate=1 amd_iommu=on iommu=pt LANG=en_US.utf8
[    0.000000] e820: BIOS-provided physical RAM map:
[    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable
...
```

（2）列出所有被检测到的硬件。

比如要显示所有被内核检测到的磁盘设备，你可以使用 grep 命令搜索 sda 关键词。
```shell
dmesg | grep sda
[    3.051454] sd 0:0:0:0: [sda] 209715200 512-byte logical blocks: (107 GB/100 GiB)
[    3.051559] sd 0:0:0:0: [sda] Write Protect is off
[    3.051562] sd 0:0:0:0: [sda] Mode Sense: 61 00 00 00
[    3.051700] sd 0:0:0:0: [sda] Cache data unavailable
[    3.051702] sd 0:0:0:0: [sda] Assuming drive cache: write through
[    3.053408]  sda: sda1 sda2 sda3
[    3.054299] sd 0:0:0:0: [sda] Attached SCSI disk
[    3.558354] XFS (sda3): Mounting V5 Filesystem
[    4.188185] XFS (sda3): Ending clean mount
[   12.636995] Adding 4194300k swap on /dev/sda2.  Priority:-1 extents:1 across:4194300k FS
[   12.922553] XFS (sda1): Mounting V5 Filesystem
[   14.708567] XFS (sda1): Ending clean mount
```

（3）搜索包含特定字符串的被检测到的硬件。

由于 dmesg 命令的输出实在太长了，在其中搜索某个特定的字符串是非常困难的。因此，有必要过滤出一些包含 ‘usb’ ‘dma’ ‘tty’ ‘memory’ 等字符串的日志行。grep 命令 的 ‘-i’ 选项表示忽略大小写。
```shell
dmesg | grep -i usb
dmesg | grep -i dma
dmesg | grep -i tty
dmesg | grep -i memory
```

（4）清空 dmesg 缓冲区日志。
```shell
dmesg -c
```
我们可以使用如下命令来清空 dmesg 的日志。该命令会清空 dmesg 环形缓冲区中的日志。但是你依然可以查看存储在 /var/log/dmesg 文件中的日志。你连接任何的设备都会产生 dmesg 日志输出。

（5）实时监控 dmesg 日志输出。
```shell
tail -f /var/log/dmesg
```
或者
```shell
watch "dmesg | tail"
```
---

## 参考文献
[dmesg(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/dmesg.1.html)

<Vssue title="dmesg" />