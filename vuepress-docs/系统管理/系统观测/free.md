## 1.命令简介
free 命令用于显示系统内存使用情况，包括物理内存（Physical Memory）、虚拟内存（Swap Memory）、共享内存（Shared Memory）以及内核使用的缓冲（Buffers）与缓存（Cached）大小。在 Linux 系统监控的工具中，free 命令经常被用到。

free 命令的所有输出值都是从 /proc/meminfo 中读取的。

## 2.命令格式
```
free [-b | -k | -m] [-o] [-s delay ] [-t] [-l] [-V]
```

## 3.选项说明
```
-b：以Byte为单位显示内存使用情况；
-k：以KB为单位显示内存使用情况；
-m：以MB为单位显示内存使用情况；
-g：以GB为单位显示内存使用情况；
-o：不显示缓冲区调节列；
-s [间隔秒数]：以指定间隔时间持续观察内存使用状况；
-t：显示内存总和列；
-l：显示详细的低内存和高内存统计;
-V：显示版本信息。
```

## 4.常用示例
（1）使用 GB 为单位显示内存使用情况。
```
[root@test ~]#free -g
             total       used       free     shared    buffers     cached
Mem:            62         61          0          0          2         56
-/+ buffers/cache:          2         59
Swap:            1          0          1
```

第一行为各列的名称，其释义如下：
```
total：物理内存总大小；
used：物理内存已使用大小；
free：物理内存空闲大小；
shared：系统中分配的共享内存大小，此列已经 deprecated，数值一般为 0。当然在一些系统上也可能不是0，主要取决于free命令是怎么实现的。如果为0，要想查看系统分配的共享内存大小，请查看 /proc/meminfo的 Shmem 一项；
buffers：系统分配的buffer大小；
cached：系统分配的cache大小。包含了共享内存和tmpfs内存文件系统占用的内存。这两部分内存之和可通过/proc/meminfo的Shmem字段直接获取。
```
其中 total = used + free，理论空闲内存大小 free2=free1+buffers+cached=58GB，其中 free2 表示 free 列第二行的取值。实际上，cached 中的共享内存大小和 tmpfs 内存文件系统大小也是实际被使用的内存，所以真正可用内存大小 real free=free1+buffers+cached-Shmem。Shmem 大小具体参见 /proc/meminfo 的 Shmem 字段的取值。

第二行表示减去与增加 buffers 和 cache 大小，分别对应物理内存的理论已使用和理论空闲大小。理论空闲内存大小的计算方法如上文所述，理论已使用大小 used2=used1-（buffers+cache）=3。为什么不是显示的 2呢，因为这里存在四舍五入，导致显示有一定误差，使用 MB 为单位来显示，数值就能对的上了。

第三行 swap 表示交换分区（即虚拟内存）的大小。如果 swap 内存有被使用，则说明系统内存不够使用，需要进行扩容。

（2）显示 high memory 使用情况。
```
[root@test ~]#free -gl
             total       used       free     shared    buffers     cached
Mem:            62         61          0          0          2         56
Low:            62         61          0
High:            0          0          0
-/+ buffers/cache:          2         59
Swap:            1          0          1
```
使用`-l`选项可以查看高低内存使用情况，发现低内存与 Mem 的使用情况相同，高内存全部为零，为什么会这样呢？先看一下什么是 high memory 和 low memory。

32 位的 CPU，最大寻址范围为 2^32 - 1 也就是 4G 的线性地址空间。Linux 简化了分段机制，使得虚拟地址与线性地址总是一致的。Linux 一般把这个 4G 的地址空间划分为两个部分：其中 0～3G 为用户程序地址空间，虚地址 0x00000000 到 0xBFFFFFFF，供各个进程使用；3G～4G为内核的地址空间，虚拟地址 0xC0000000 到 0xFFFFFFFF，供内核使用。

Linux 内核采用了最简单的映射方式来映射物理内存，即把`物理地址＋PAGE_OFFSET`按照线性关系直接映射到内核空间。PAGE_OFFSET 大小为 0xC0000000。但是 Linux 内核并没有把整个 1G 空间用于线性映射，而只映射了最多 896M 物理内存，预留了最高端的 128M 虚拟地址空间给 IO 设备和其他用途。所以，当系统物理内存较大时，超过 896M 的内存区域，内核就无法通过线性映射直接访问了。这部分内存被称作 high memory。相应的可以映射的低端物理内存称为 low memory。

那 Kernel 就永远无法访问到超过 896M 的内存了吗？不是的，Kernel 已经预留了 128M 虚拟地址，我们可以用这个地址来动态地映射到 high memory，从而访问 high memory。所以预留的 128M 除了映射 IO 设备外，还有一个重要的功能是提供了一种动态访问 high memory 的一种手段（kmap 主要就是干这个的，当然还有 vmalloc）。

**结论：**
（1）high memory 针对的是物理内存，不是虚拟内存。
（2）high memory 也是被内核管理的（有对应的page结构），只是没有映射到内核虚拟地址空间。当内核需要分配high memory时，通过kmap等从预留的地址空间中动态分配一个地址，然后映射到high memory，从而访问这个物理页。high memory 映射到内核地址空间一般是暂时性的映射，不是永久映射。
（3）high memory 和 low memory一样，都是参与内核的物理内存分配，都可以被映射到内核地址空间，也都可以被映射到用户地址空间。
（4）物理内存<896M时，没有 high memory，因为所有的内存都被kernel直接映射了。
（5）64位系统下不会有 high memory，因为64位虚拟地址空间非常大（分给kernel的也很大），完全能够直接映射全部物理内存。

因为测试的机器是 64 位机器，所以不存在 high memory，故全部为零。

# 5.常见问题
## 5.1 buffers 与 cached 的区别
（1）buffers（缓冲）
buffer是用于存储速度不同步的设备或优先级不同的设备之间传输数据的区域。缓冲（buffers）是为磁盘的读写设计的，把分散的写操作集中进行，减少磁盘碎片和硬盘的反复寻道，从而提高系统性能。

<font color=red>buffers 存放即将写到磁盘（块设备）的数据，缓冲满了一次性写入，减少对磁盘的写操作（内存 -> 磁盘）。</font>

（2）cached（缓存）
cache 经常被用在磁盘的 I/O 请求上，如果有多个进程都要访问某个文件，于是该文件便被做成 cache 以方便下次被访问，这样可提供系统性能。

缓存是把读取过的数据保存起来，重新读取时若命中（找到需要的数据）就不要去读硬盘了，若没有命中就读硬盘。其中的数据会根据读取频率进行组织，把最频繁读取的内容放在最容易找到的位置，把不再读的内容不断往后排，直至从中删除。

<font color=red>cached 存放从磁盘读出的数据，缓存起来，减少对磁盘的读操作（磁盘 -> 内存）。</font>

buffers 和 cached，两者都是 RAM 中的数据。简单来说，buffers 缓存即将要被写入磁盘的数据，cached 缓存从磁盘中读取的数据。

## 5.2 buffers 与 cached 的释放
buffers 主要用于缓存文件系统中的元数据信息（dentries、inodes），cached 主要用于缓存文件系统中的pages 信息，必要时 buffers、cached 所占内存可被回收用于其他程序。

设置以下值可以将文件系统缓存的 clean pages、dentries、inodes 移出内存，腾出可用内存：

```shell
# To free pagecache:  
echo 1 > /proc/sys/vm/drop_caches  
  
# To free dentries and inodes:  
echo 2 > /proc/sys/vm/drop_caches  
  
# To free pagecache, dentries and inodes
echo 3 > /proc/sys/vm/drop_caches  
```
以上操作并非具有破坏性，因为他们并不会将 dirty caches 释放掉，为了获得更多的可用内存，用户可以先执行 sync 操作将 dirty caches 写回磁盘，使之变为 clean caches（cache中的内容还是保留在内存中），然后再设置 drop_caches。

这里释放完成后，发现 cached 数值仍然不为 0，原因是 free 命令计算的 cached 包含了共享内存的大小，共享内存需要使用`ipcrm [ -M key | -m id ]`命令来释放。buffers 的数值也不为 0，因为系统时刻在运行着，释放完后，buffers 又被分配出去。

----
## 参考文献
[free(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/free.1.html)

[free命令.Linux命令大全](http://man.linuxde.net/free)

[Linux free命令：buffer 与 cache 区别](http://blog.csdn.net/ithomer/article/details/79113288)

[linux内核的high memory概念详解](http://blog.csdn.net/wangjingyu00711/article/details/39710071)

[Linux上的free命令详解](http://blog.csdn.net/u013063153/article/details/70198554)

[由free命令想到的](http://blog.csdn.net/hs794502825/article/details/37881879)

[linux内存总结](https://blog.csdn.net/dbadream/article/details/9014179)
