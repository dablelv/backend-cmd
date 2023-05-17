## 1.功能简介
ulimit 属 Shell 内建命令，用于查看或设置 Shell 以及通过 Shell 启动的进程使用系统资源的上限。

限制分为软限制（当前限制）和硬限制，其中硬限制是软限制的上限值。如果应用程序在运行过程中使用的系统资源超过相应的软限制，将导致进程的终止。

由于系统资源有限，比如开启文件描述符的数量，进程堆栈的大小，CPU 时间，虚拟内存大小，等等，操作系统对每一个进程都有严格的限制。资源的合理限制和分配，不仅仅是保证系统可用性的必要条件，也与进程性能密不可分。这时，ulimit 可以起到很大的作用，它是一种简单并且有效的实现资源限制的方式。

## 2.命令格式
```
ulimit [-HSTabcdefilmnpqrstuvx <limit>]
```
其中，limit 是对指定类型资源的具体限制，如果不指定，打印资源软限制的当前值（不指定 -H 时）。参数 S 表示设置软限制，H 表示设置硬限制，当都不指定时，表示同时设置软限制和硬限制。

## 3.选项说明
```
-H
	设定资源的硬限制，只有 root 用户可以操作。
-S
	设置资源的软限制。
-a
	显示目前所有资源设定的限制。
-b
	socket 缓冲的最大值
-c
	core 文件的最大值，单位 blocks
-d
	进程数据段的最大值，单位 KB。
-e
	调度优先级上限，这里的优先级指 NICE 值。只针对普通用户进程有效
-f
	当前 Shell 可创建文件总大小的上限，单位 blocks
-i
	被挂起/阻塞的最大信号数量
-l
	可以锁住的物理内存的最大值，单位 KB
-m
	可以使用的常驻内存的最大值，单位 KB
-n
	每个进程可以同时打开的最大文件数
-p
	管道的最大值，单位 block，1 block = 512 bytes
-q
	POSIX 消息队列的最大值
-r
	限制程序实时优先级，只针对普通用户进程有效
-s
	进程栈最大值，单位 KB
-t
	最大 CPU 时间，单位 s
-u
	用户最多可启动的进程数目
-v
	当前 Shell 可使用的最大虚拟内存，单位 KB
-x
	文件锁的最大数量
-T
	线程的最大数量
```

## 4.常用示例
（1）查看现有系统资源限制。
```
ulimit -a

core file size          (blocks, -c) unlimited
data seg size           (kbytes, -d) unlimited
scheduling priority             (-e) 0
file size               (blocks, -f) unlimited
pending signals                 (-i) 255112
max locked memory       (kbytes, -l) 64
max memory size         (kbytes, -m) unlimited
open files                      (-n) 65536
pipe size            (512 bytes, -p) 8
POSIX message queues     (bytes, -q) 819200
real-time priority              (-r) 0
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) unlimited
virtual memory          (kbytes, -v) unlimited
file locks                      (-x) unlimited
```
（2）控制进程发生段错误（Segmentation Fault）时生成 coredump 文件。
```
ulimit -c unlimited
```
（3）设置进程的栈大小没有限制。
```
ulimit -s unlimited
```

---
## 参考文献
[ulimit(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/ulimit.1p.html)

[ulimit(1) manual - linux.org](https://www.linux.org/docs/man1/ulimit.html)

[linux的ulimit各种限制之深入分析](http://blog.sina.com.cn/s/blog_59b6af6901011ekd.html)
