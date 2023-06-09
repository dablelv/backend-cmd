﻿## 1.命令简介
uptime 用于显示系统总共运行了多长时间和系统的平均负载。

无选项 uptime 命令会显示一行信息，依次为：当前时间、系统已经运行了多长时间、目前有多少用户登录、系统在过去的 1 分钟、5 分钟和 15 分钟内的平均负载。输出结果等同于 [top](https://dablelv.blog.csdn.net/article/details/102385811) 命令汇总区的第一行。

## 2.命令格式
```
uptime [OPTIONS]
```

## 3.选项说明
```
-p, --pretty
	采用可读友好的格式输出系统已运行时长
-h, --help
	显示帮助信息
-s, --since
	以格式 yyyy-mm-dd HH:MM:SS format 输出系统启动时间
-V, --version
	显示版本信息
```

## 4.常用示例
（1）查看系统运行时长与平均负载。
```shell
uptime
22:54:55 up 445 days,  9:38,  5 users,  load average: 0.08, 0.08, 0.06
```
显示的信息依次为：当前时间（22:54:55）、系统已经运行了多长时间（up 445 days,  9:38，表示 445 天 9 时 38 分钟）、目前有多少登录用户（5 users）、系统在过去的 1 分钟、5 分钟和 15 分钟内的平均负载（load average: 0.08, 0.08, 0.06）。

（2）查看系统启动时间。
```shell
uptime -s
2018-07-20 13:16:21
```
（3）只输出系统运行时长。
```shell
uptime -p
up 1 year, 11 weeks, 4 days, 9 hours, 43 minutes
```

## 5.拓展知识
### 5.1 什么是系统平均负载？
系统平均负载指单位时间内，系统中处于可运行状态和不可中断状态的进程数，也就是平均活跃进程数，他和 CPU 使用率没有直接关系。

**可运行状态的进程**指正在使用 CPU 或正在等待使用 CPU 的进程，也就是我们常用 ps 命令看到的，处于 R 状态（Running 或 Runnable）的进程。

**不可中断状态的进程**指正在等待某些 I/O 的进程，即我们在 ps 命令中看到的 D 状态（Uninterruptible Sleep，也称为 Disk Sleep）的进程。例如等待磁盘 I/O，当一个进程向磁盘读写数据时，为了保证数据的一致性，在得到磁盘回复前，它是不能被其他进程打断的，这个时候的进程就处于不可中断状态。如果此时的进程被打断了，就容易出现磁盘数据与进程数据不一致的问题。所以，不可中断状态实际上是系统对进程和硬件设备的一种保护机制。

### 5.2 系统平均负载多少时合理
uptime 命令给出的三个时间段的平均负载并不是标准化的，因为系统中 CPU 核心数量是不定的。所以平均负载为 1 意味着拥有一个 CPU 核心的系统一直在忙碌，而在一个拥有 4 个 CPU 核心的系统上，意味着系统 75% 的时间是空闲的。

所以，当**系统平均负载除以 CPU 核心数小于等于 1** 表示系统没有出现过载的情况。最理想的情况是每个CPU 上都刚好运行一个进程，这样 CPU 就得到了充分的利用。

三个时间段统计出的系统平均负载，我们以哪个数字为准？一分钟？五分钟？还是十五分钟？我们应该着眼于五分钟或者十五分钟的平均数值，如果前一分钟的负载情况是 1.00，那么仍可以说明认定服务器情况还是正常的，但是如果十五分钟的数值仍然保持在 1.00，那么就值得注意了。

另外，读取文件 /proc/loadavg 可直接查看系统平均负载。
```
cat /proc/loadavg
0.04 0.03 0.05 1/319 21900
```
除了前 3 个数字表示系统平均负载外，后面的一个分数，分母表示系统进程总数，分子表示正在运行的进程数；最后一个数字表示最近运行的进程 ID。

### 5.3 获取系统 CPU 核心数
使用 lscpu 命令查看。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191009124542555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)
或者直接访问文件  /proc/cpuinfo 获取 CPU 核心数。
```
grep 'model name'  /proc/cpuinfo | wc -l
6
```

### 5.4 平均负载与 CPU 使用率的关系
在日常使用中，我们经常容易把平均负载和CPU使用率混淆，这里我们做下区分。

平均负载是指单位时间内，系统中处于可运行状态和不可中断状态的进程数，所以，他不仅包扩了正在使用CPU 的进程，还包括等待 CPU 和等待 I/O 的进程。

而 CPU 使用率，是单位时间内 CPU 繁忙情况的统计，和平均负载并不一定完全对应。比如：
（1）CPU 密集型进程，使用大量 CPU 会导致平均负载升高，此时这两者是一致的；
（2）I/O 密集型进程， 等待 I/O 也会导致平均负载升高，但是 CPU 使用率不一定很高；
（3）存在大量等待 CPU 调用的进程也会导致平均负载升高，此时的 CPU 使用率也会比较高。

---
## 参考文献
[uptime(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/uptime.1.html)

[如何理解linux的平均负载？](https://www.baidu.com/link?url=MXkULYD06QP5jZKyL3eO3NxDtHimCJgWrGfpSYfqLpPzXkj-dIjV_OIF8Jnrwew3&wd=&eqid=c70b86af00017b74000000065d9d4bbe)

<Vssue title="uptime" />
