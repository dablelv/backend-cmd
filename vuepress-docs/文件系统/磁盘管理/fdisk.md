## 1.命令简介
fdisk 命令用于创建和维护磁盘分区表。

它采用传统的问答式界面，而不是类似于 fdisk 的 cfdisk 的互动式操作界面，因此在使用上较为不便，但功能却丝毫不打折扣。它兼容 DOS 类型的分区表、BSD 或者 SUN 类型的磁盘列表。

## 2.命令格式
```
fdisk [-uc] [-b sectorsize] [-C cyls] [-H heads] [-S sects] device
fdisk -l [-u] [device...]
fdisk -s partition...
fdisk -v
fdisk -h
```

## 3.选项说明
```
-b {sectorsize}
	指定硬盘扇区大小，可用数值为512, 1024, 2048 or 4096
-c
	关闭DOS兼容模式
-C {cyls}
	指定硬盘的柱面数（number of cylinders）
-H {heads}
	指定硬盘的磁头数（number of heads），当然不是物理数值，而是作用于分区表。合理取值是255和16
-S {sects}
	指定每个磁道的扇区数，当然不是物理数值，而是用于分区表。一个合理的数值是63；
-l
	列出指定设备的分区表，然后退出。如果没有给定设备，则使用在/proc/partitions（如果存在）中提到的那些设备；
-u
	在列出分区表时，给出扇区大小而不是柱面大小
-s {partition}
	以块（block）为单位，显示指定分区的大小
-v
	显示版本信息
-h
	显示帮助信息
```
阅读以上选项说明，需要注意以下几个问题：

（1）块（block）与扇区（sector）的区别。
扇区是对硬盘而言，扇区是硬盘的最小存储单位，块是对文件系统而言，块是文件系统最小存取单位。一般而言，一个扇区大小为512B，一个块大小为4KB，一个block是由连续的8个sector组成。

（2）理解上面选项的含义，需了解磁盘的物理组成结构与相关概念，例如sector、cylinder、head等组成部件的具体含义，可参见[硬盘的存储原理和内部架构 ](http://blog.chinaunix.net/uid-23069658-id-3413957.html)。

## 4.常用示例
（1）列出指定设备的分区情况。
```
fdisk -l /dev/sda

Disk /dev/sda: 300.0 GB, 299966445568 bytes
255 heads, 63 sectors/track, 36468 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x0009808c

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1        1306    10485760   83  Linux
/dev/sda2            1306        1566     2088960   82  Linux swap / Solaris
/dev/sda3            1566        4177    20971520   83  Linux
/dev/sda4            4177       36469   259387694   83  Linux
```
对`fdisk -l`相关数值的解释如下：
第一行中说明硬盘 /dev/sda 总大小为 300.0 GB；

第二行中 heads 表示硬盘磁头数，也是盘面数，因为磁头数等于盘面数。随后`63 sectors/track`说明每条磁道分63个扇区。共 36468 个柱面，柱面是分区的最小单位；

第三行说明每个柱面单位是 8225280 byets，`柱面单位大小=磁头数*每条磁道的扇区数*扇区大小=255*63*512B=8225280B`；

第四行说明扇区的大小是512B；

第五行说明硬盘最小与最佳的存储单位是512 bytes，等于扇区大小，因为扇区是硬盘的最小存储单位；

第六行说明硬盘标识符是 0x0009808c。

第七行表示每个分区相关参数的含义。
```
Device：分区名称；
Boot：是否是活动分区。活动分区只能是主分区，一个硬盘只能有一个活动的主分区；一个硬盘的主分区与扩展分区总和不能超过4个。硬盘分区遵循着“主分区→扩展分区→逻辑分区”的次序原则，而删除分区则与之相反。
	主分区：一个硬盘可以划分多个主分区，但没必要划分那么多，一个足矣。
	扩展分区：主分区之外的硬盘空间就是扩展分区，
	逻辑分区：是对扩展分区再行划分得到的。
Start：分区柱面的开始下标；
End：分区柱面的结束下标；
Blocks：该分区的块数量。当前文件系统block=2*sector，所以块数量=（End-Start）*柱面的扇区数/2=1305*255*63/2=10482412.5；
Id：各种分区的文件系统不同，如有ntfs分区，fat32分区，ext3分区，swap分区等。每一种文件系统都有一个代号，对应这里的Id。常见的文件系统ID有：
	f：FAT32 Extend,只限于扩展分区。
	86：NTFS。
	7：HPFS/NTFS
	b：FAT32。
	83：Linux Ext2。
	82：Linux 交换区。
System：文件系统名称。
```
**总结：**
```
一个磁盘的大小=一个柱面大小*柱面的总数=磁头数量*每个磁道上的扇区数*一个扇区大小*柱面总数
```
即：
```
磁盘大小=8225280*36468=299959511040 bytes=299GB=255*63*512*36468
```
上例中显示出的硬盘大小与实际计算出来的有少许出入，这个不必太在意，Linux显示的这些数据不会十分精确。

（2）对指定设备进行分区并挂载。
第一步，选择要进行操作的磁盘，进入问答式界面。
```
fdisk /dev/sdb
```
第二步，输入m列出可以执行的命令。
```
Command (m for help): m
Command action
   a   toggle a bootable flag
   b   edit bsd disklabel
   c   toggle the dos compatibility flag
   d   delete a partition
   l   list known partition types
   m   print this menu
   n   add a new partition
   o   create a new empty DOS partition table
   p   print the partition table
   q   quit without saving changes
   s   create a new empty Sun disklabel
   t   change a partition's system id
   u   change display/entry units
   v   verify the partition table
   w   write table to disk and exit
   x   extra functionality (experts only)
```
第三步，输入p列出磁盘目前的分区情况。
```
Disk /dev/sda: 300.0 GB, 299966445568 bytes
255 heads, 63 sectors/track, 36468 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x0009808c

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1        1306    10485760   83  Linux
/dev/sda2            1306        1566     2088960   82  Linux swap / Solaris
/dev/sda3            1566        4177    20971520   83  Linux
/dev/sda4            4177       36469   259387694   83  Linux
```
第四步，输入d然后选择分区，删除现有分区。
```
Command (m for help): d
Partition number (1-4): 1

Command (m for help): d
Selected partition 2

Command (m for help): d
Selected partition 3

Command (m for help): d
Selected partition 4
```

第五步，输入n建立新的磁盘分区，首先建立两个主磁盘分区。
```
Command (m for help): n
Command action
   e   extended
   p   primary partition (1-4)
p    //建立主分区
Partition number (1-4): 1  //分区号
First cylinder (1-391, default 1):  //分区起始位置
Using default value 1
last cylinder or +size or +sizeM or +sizeK (1-391, default 391): 100  //分区结束位置，单位为柱面

Command (m for help): n  //再建立一个主分区
Command action
   e   extended
   p   primary partition (1-4)
p 
Partition number (1-4): 2  //分区号为2
First cylinder (101-391, default 101):
Using default value 101
Last cylinder or +size or +sizeM or +sizeK (101-391, default 391): +200M  //分区结束位置，单位为M
```
第七步，确认分区建立成功。
```
Command (m for help): p

Disk /dev/sdb: 3221 MB, 3221225472 bytes
255 heads, 63 sectors/track, 391 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               1         100      803218+  83  Linux
/dev/sdb2             101         125      200812+  83  Linux
```
第八步，再建立一个逻辑分区。
```
Command (m for help): n
Command action
   e   extended
   p   primary partition (1-4)
e  //选择扩展分区
Partition number (1-4): 3
First cylinder (126-391, default 126):
Using default value 126
Last cylinder or +size or +sizeM or +sizeK (126-391, default 391):
Using default value 391
```
第九步，确认扩展分区建立成功。
```
Command (m for help): p

Disk /dev/sdb: 3221 MB, 3221225472 bytes
255 heads, 63 sectors/track, 391 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               1         100      803218+  83  Linux
/dev/sdb2             101         125      200812+  83  Linux
/dev/sdb3             126         391     2136645    5  Extended
```
第十步，在扩展分区上建立两个逻辑分区。
```
Command (m for help): n
Command action
   l   logical (5 or over)
   p   primary partition (1-4)
l //选择逻辑分区
First cylinder (126-391, default 126):
Using default value 126
Last cylinder or +size or +sizeM or +sizeK (126-391, default 391): +400M    

Command (m for help): n
Command action
   l   logical (5 or over)
   p   primary partition (1-4)
l
First cylinder (176-391, default 176):
Using default value 176
Last cylinder or +size or +sizeM or +sizeK (176-391, default 391):
Using default value 391
```
第十一步，确认逻辑分区建立成功。
```
Command (m for help): p

Disk /dev/sdb: 3221 MB, 3221225472 bytes
255 heads, 63 sectors/track, 391 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               1         100      803218+  83  Linux
/dev/sdb2             101         125      200812+  83  Linux
/dev/sdb3             126         391     2136645    5  Extended
/dev/sdb5             126         175      401593+  83  Linux
/dev/sdb6             176         391     1734988+  83  Linux

Command (m for help):
```
从上面的结果我们可以看到，在硬盘 sdb 我们建立了 2 个主分区（sdb1，sdb2），1个扩展分区（sdb3），2 个逻辑分区（sdb5，sdb6）。

注意：主分区和扩展分区的磁盘号位1-4，也就是说最多有 4 个主分区或者扩展分区，逻辑分区开始的磁盘号为 5，因此在这个实验中是没有 sdb4 的。

最后对分区操作进行保存：
```
Command (m for help): w
The partition table has been altered!

Calling ioctl() to re-read partition table.
Syncing disks.
```
建立好分区之后我们还需要对分区进行格式化才能在系统中使用磁盘。

在 sdb1 上建立 ext2 文件系统。
```
[root@localhost ~]# mkfs.ext2 /dev/sdb1
mke2fs 1.39 (29-May-2006)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
100576 inodes, 200804 blocks
10040 blocks (5.00%) reserved for the super user
First data block=0
Maximum filesystem blocks=209715200
7 block groups
32768 blocks per group, 32768 fragments per group
14368 inodes per group
Superblock backups stored on blocks:
        32768, 98304, 163840

Writing inode tables: done                           
Writing superblocks and filesystem accounting information: done

This filesystem will be automatically checked every 32 mounts or
180 days, whichever comes first.  Use tune2fs -c or -i to override.
```
在 sdb6 上建立 ext3 文件系统。
```
[root@localhost ~]# mkfs.ext3 /dev/sdb6
mke2fs 1.39 (29-May-2006)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
217280 inodes, 433747 blocks
21687 blocks (5.00%) reserved for the super user
First data block=0
Maximum filesystem blocks=444596224
14 block groups
32768 blocks per group, 32768 fragments per group
15520 inodes per group
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912

Writing inode tables: done                           
Creating journal (8192 blocks): done
Writing superblocks and filesystem accounting information: done

This filesystem will be automatically checked every 32 mounts or
180 days, whichever comes first.  Use tune2fs -c or -i to override.
[root@localhost ~]#
```
建立两个目录/oracle和/web，将新建好的两个分区挂载到系统：
```
[root@localhost ~]# mkdir /oracle
[root@localhost ~]# mkdir /web
[root@localhost ~]# mount /dev/sdb1 /oracle
[root@localhost ~]# mount /dev/sdb6 /web
```
查看分区挂载情况：
```
[root@localhost ~]# df -h
文件系统              容量  已用 可用 已用% 挂载点
/dev/mapper/VolGroup00-LogVol00
                      6.7G  2.8G  3.6G  44% /
/dev/sda1              99M   12M   82M  13% /boot
tmpfs                 125M     0  125M   0% /dev/shm
/dev/sdb1             773M  808K  733M   1% /oracle
/dev/sdb6             1.7G   35M  1.6G   3% /web
```
如果需要每次开机自动挂载则需要修改/etc/fstab文件，加入两行配置：
```
[root@localhost ~]# vim /etc/fstab

/dev/VolGroup00/LogVol00 /                       ext3    defaults        1 1
LABEL=/boot             /boot                   ext3    defaults        1 2
tmpfs                   /dev/shm                tmpfs   defaults        0 0
devpts                  /dev/pts                devpts  gid=5,mode=620  0 0
sysfs                   /sys                    sysfs   defaults        0 0
proc                    /proc                   proc    defaults        0 0
/dev/VolGroup00/LogVol01 swap                    swap    defaults        0 0
/dev/sdb1               /oracle                 ext2    defaults        0 0
/dev/sdb6               /web                    ext3    defaults        0 0
```

---
## 参考文献
[fdisk(8) - Linux manual page - man7.org](http://www.man7.org/linux/man-pages/man8/fdisk.8.html)

[Linux命令大全.fdisk命令](http://man.linuxde.net/fdisk)

[磁盘的块大小(Block Size)和扇区大小(Sector Size)](http://blog.csdn.net/my_bai/article/details/73331360)

[fdisk -l 命令详解](https://www.cnblogs.com/Dreama/articles/2106812.html)
