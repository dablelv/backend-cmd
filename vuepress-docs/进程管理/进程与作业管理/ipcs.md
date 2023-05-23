## 1.命令简介
ipcs 命令用于查看 Linux 进程间通信设施的状态，包括消息列表、共享内存和信号量的信息。可以帮助开发人员定位进程间通信中出现的问题。

注意，本文描述的是 util-linux 版 ipcs，和其它版本（如 POSIX 版）的实现可能会有出入。

## 2.命令格式
```
ipcs [resource-option] [output-format]
ipcs [resource-option] -i id
```

## 3.命令选项
```
-i，--id ID
	详细显示指定资源 ID 的 IPC 信息。使用时需要指定资源类型，资源包括消息队列（-q）、共享内存（-m）和信号量（-s）
-h，--help
	显示帮助信息
-V，--version
	显示版本信息

IPC 资源类型选项：
-q，--queues
	显示活动的消息队列信息
-m，--shmems
	显示活动的共享内存信息
-s, --semaphores
	显示活动的信号量信息
-a，--all
	显示系统内所有的IPC信息。命令的默认选项

输出格式选项：当指定多个时，以最后一个为准。
-c，--creator
	查看 IPC 的创建者和所有者
-l，--limits
	查看 IPC 资源的限制信息
-p，--pid
	查看 IPC 资源的创建者和最后操作者的进程 ID
-t，--time
	查看最新调用 IPC 资源的详细时间。包括 msgsnd() 和 msgrcv() 对 message queues 的操作，shmat() 和 shmdt() 对shared memory 的操作，以及 semop() 对 semaphores 的操作
-u，--summary
	查看 IPC 资源状态汇总信息

显示大小单位控制选项：只对选项 -l, --limits 生效
-b，--bytes
	以字节为单位显示大小
--human
	以可读的格式显示大小
```

## 4.常用示例
（1）显示所有IPC信息。
```
[root@TENCENT64 /]# ipcs
------ Message Queues --------
key        msqid      owner      perms      used-bytes   messages    

------ Shared Memory Segments --------
key        shmid      owner      perms      bytes      nattch     status      
0x6674431e 0          root       600        50485760   9

------ Semaphore Arrays --------
key        semid      owner      perms      nsems     
0x0000870a 0          root       666        1    
```

（2）显示共享内存指定ID的信息。
```
[root@TENCENT64 /]# ipcs -m -i 32769

Shared memory Segment shmid=32769
uid=0	gid=0	cuid=0	cgid=0
mode=0666	access_perms=0666
bytes=12000	lpid=2784	cpid=1077	nattch=3
att_time=Thu Dec 27 10:39:32 2018  
det_time=Thu Dec 27 10:39:32 2018  
change_time=Fri Jul 20 13:17:41 2018 
```

（3）查看 IPC 的创建这和最最后操作者的进程 ID。
```
------ Message Queues PIDs --------
msqid      owner      lspid      lrpid     

------ Shared Memory Creator/Last-op PIDs --------
shmid      owner      cpid       lpid      
0          root       702        23364     
32769      root       702        5296      
```
其中 lspid 代表最近一次向消息队列中发送消息的“进程号”，lrpid 对应最近一次从消息队列中读取消息的“进程号”。但请注意：此处的进程号是弱进程号，既它有可能代表的是线程号，如果进程中是起的线程对消息队列发送、接收消息，则此处 pid 对应的均是线程号。可以采用`ps -AL | grep pid`来查找该线程对应的进程 id。

---
## 参考文献
[ipcs(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/ipcs.1.html)

[Index of /pub/linux/utils/util-linux/](https://mirrors.edge.kernel.org/pub/linux/utils/util-linux/)

[工作中常用的Linux命令：ipcs/ipcrm命令](https://www.cnblogs.com/MartinChentf/p/6057100.html)

[ipcs命令详解——共享内存、消息队列、信号量定位利器](https://blog.csdn.net/dalongyes/article/details/50616162)

<Vssue title="ipcs" />