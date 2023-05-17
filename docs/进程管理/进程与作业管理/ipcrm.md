## 1.命令简介
ipcrm 命令用于删除某些 IPC 资源。

ipcrm 删除指定 ID 的 IPC（Inter-Process Communication，进程间通信）对象，包括消息队列（message queue）、共享内存（shared memory）和信号量（semaphore），同时将与 IPC 对象关联的数据一并删除。

注意：只有 root 或 IPC 对象创建者能够删除。

## 2.命令格式
```
ipcrm [OPTIONS]
ipcrm {shm | msg | sem} ID...
```

## 3.选项说明
```
-a, --all [shm | msg | sem]
	删除所有 IPC 资源。当给定选项参数 shm、msg 或 sem，则只删除指定类型的 IPC 资源。注意：慎用该选项，否则可能会导致某些程序出于不确定状态
-M, --shmem-key SHMKEY
	当没有进程与共享内存段绑定时，通过 SHMKEY 删除共享内存段
-m, --shmem-id SHMID
	当没有进程与共享内存段绑定时，通过 SHMID 删除共享内存段
-Q, --queue-key MSGKEY
	通过 MSGKEY 删除消息队列
-q, --queue-id MSGID
	通过 MSGID 删除消息队列
-S, --semaphore-key SEMKEY
	通过 SEMKEY 删除信号量
-s, --semaphore-id SEMID
	通过 SEMID 删除信号量
-h, --help
	显示帮助信息并退出
-V, --version
	显示版本信息并退出
-v, --verbose
	以冗余模式执行 ipcrm，输出 rpcrm 正在做什么
```

## 4.常用示例
（1）删除共享内存。
```
ipcrm -M SHMKEY
# 或
ipcrm -m SHMID
# 或
ipcrm shm SHMID
```
（2）删除消息队列。
```
ipcrm -Q MSGKEY
# 或
ipcrm -q MSGID
# 或
rpcrm msg MSGID
```
（3）删除信号量。
```
ipcrm -S SEMKEY
# 或
ipcrm -s SEMID
# 或
ipcrm sem SEMID
```
（4）删除所有 IPC 资源。请谨慎使用。
```
ipcrm -v -a
removing shared memory segment id `0'
removing shared memory segment id `655361'
removing shared memory segment id `688130'
removing shared memory segment id `720899'
removing shared memory segment id `131076'
removing shared memory segment id `163845'
removing shared memory segment id `753670'
removing semaphore id `851968'
removing semaphore id `884737'
removing semaphore id `917506'
removing semaphore id `950275'
removing semaphore id `983044'
removing semaphore id `1015813'
```
（5）查看 ipcrm 版本。
```
ipcrm -V
ipcrm from util-linux 2.23.2
```

---
## 参考文献
[ipcrm(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/ipcrm.1.html)

[工作中常用的Linux命令：ipcs/ipcrm命令](https://www.cnblogs.com/MartinChentf/p/6057100.html)
