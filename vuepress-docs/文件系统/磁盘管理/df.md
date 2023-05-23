## 1.命令简介
df（Disk Free）命令用于查看 Linux 文件系统的磁盘空间占用情况。可以利用该命令来获取硬盘被占用了多少空间，以及剩余空间等信息，默认显示单位为 KB。

本文描述的是 GNU 版的 df，其它版本（如 POSIX 版）的实现会有所不同。

## 2.命令格式
```
df [OPTION]... [FILE]...
```
参数 FILE 表示文件系统上的文件。如果给定参数 FILE，则 df 分别展示各个文件所在文件系统的信息，如果没有给定 FILE，则默认输出所有已挂载的文件系统的载信息。

## 3.选项说明
```
-a, --all
	显示所有的文件系统，包括虚拟文件系统
-B, --block-size=SIZE
	使用指定的块大小
-h, --human-readable
	以易读的方式显示磁盘空间已用与未用的大小
--direct
	显示文件的统计信息，而不是挂载点
--total
	显示所有文件系统总的使用情况
-H, --si
	使用 1000 而非 1024 作为换算单位
-i, --inodes
	显示索引节点 inode 信息，而非磁盘块的使用情况
-k, --local
	同 --block-size=1K，即将块大小设置为 1KB
-l, --local
	只输出本地文件系统信息
-P
	输出格式为 POSIX
-t , --type=TYPE
	显示指定的文件系统
-T, --print-type
	显示文件系统类型
-x, --exclude-type=TYPE
	显示指定的文件系统之外的文件系统
--no-sync
	不进行磁盘同步，默认选项
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```
## 4.常用示例
（1）以易读方式显示文件系统空间使用情况，并输出文件系统类型。
```
df -hT
Filesystem    Type    Size  Used Avail Use% Mounted on
/dev/mapper/vg_mic-lv_root
              ext4     50G   16G   32G  33% /
tmpfs        tmpfs     16G     0   16G   0% /dev/shm
/dev/sda1     ext4    485M   38M  422M   9% /boot
/dev/mapper/vg_mic-lv_home
              ext4    210G  197G  2.7G  99% /home
```
上面的示例输出信息表示的意思分别是：
第一列：filesystem代表文件系统在哪个分区，所以列出设备名称。其中`/dev/mapper/vg_mic-lv_root`这行的意思是，你有一个VG (volume group，卷组)叫作vg_mic, vg\_mic里面有一个LV(logical volume，逻辑卷)叫作lv\_root。其实这个`/dev/mapper/vg_mic-lv_root`是一个连接文件，连接到/dev/dm-0的，可以用`ll /dev/mapper/vg_mic-lv_root`查看。实际上，可以将`vg_mic-lv_root`看作一个分区来对待就可以了。如果想查看实际的物理分区，可以使用命令pvdisplay$^{[1,2]}$。

第二列：Type代表文件系统类型。比如第三行的tmpfs是一种基于内存的文件系统，类似于ramdisk。tmpfs可以使用RAM，也可以使用swap分区来存储文件，提高文件的读写读写速度。再如第三行的/dev/sda1分区的文件系统是ext4。

第三列：Size 代表分区的大小。

第四列：Used表示已经使用的大小。

第五列：Avail表示可用的大小。

第六列：Use%表示以百分比显示已经使用的比例。

第七列：Mounted on表示磁盘分区挂载的目录，即挂载点。

这里列一下Linux系统中磁盘与其它外设的命名规则，以及磁盘分区的命名规则。常见的设备与其在Linux中的文件名如下表：
|设备|文件名|
|---|---|
|IDE硬盘|/dev/hd[a-d]|
|SCSI/SATA/USB硬盘与U盘|/dev/sd[a-p]|
|软驱|/dev/fd[0-1]|
|打印机|25针：/dev/lp[]0-2<br>USB:/dev/usb/lp[0-15]|
|鼠标|USB：/dev/usb/mouse[0-15]<br>ps2:/dev/psaux|
|当前CD ROM/DVD ROM|cdrom|
|当前鼠标|/dev/mouse|
|磁带机|IDE：/dev/ht0<br>SCSI:/dev/st0|
需要注意的是，每个磁盘驱动器的磁盘分区（partition）不同时，磁盘文件名还会改变。此外，磁带机的文件名，在某些不同的 Linux 发行版本中可能不一样。

IDE磁盘，一般可以接4个，磁盘名称分别是hda，hdb，hdc和hdd。以hda为例，如果分为四个分区，则四个分区的名称分别为hda1，hda2，hda3和hda4，其他三个磁盘的分区名称以此类推。

一个 IDE 磁盘、SATA磁盘和SCSI 磁盘主分区与扩展分区加在一起最多4个，扩展分区最多只有一个，扩展分区中再开辟逻辑分区。

IDE 磁盘最多可以分63个分区，59个逻辑分区。
SATA硬盘最多15个分区，11个逻辑分区。
SCSI硬盘最多16个分区，12个逻辑分区。

SATA 硬盘的分区名称与IDE磁盘的分区名称类似，以第一块 SATA 磁盘 sda 为例，那么各个分区的名称分别是 sda1，sda2，sda3...，以此类推。可见，IDE 磁盘与 SATA 磁盘的分区号均是从 1 开始的$^{[3]}$。

SCSI 硬盘的分区名称与 SATA 硬盘分区名称相同。

（2） 查看全部文件系统。
```
df -a
Filesystem     1K-blocks      Used Available Use% Mounted on
rootfs                 -         -         -    - /
/dev/vda1       30830592   9330332  19911116  32% /
devtmpfs         7569484         0   7569484   0% /dev
sysfs                  0         0         0    - /sys
proc                   0         0         0    - /proc
securityfs             0         0         0    - /sys/kernel/security
tmpfs            7570224   1232632   6337592  17% /dev/shm
...
```
系统里面存在很多特殊的文件系统，这些比较特殊的文件系统几乎都是在内存当中（如 /proc 挂载点），所以，这些特殊文件系统都不会占据硬盘空间。

---
## 参考文献
[df(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/df.1.html)

马玉军.Linux指令范例速查手册.北京:科学出版社,2008.P330-331

[vg_mic-lv_root是什么意思](https://zhidao.baidu.com/question/416183903.html)

鸟哥.鸟哥的私房菜基础学习篇第三版[M].北京:人民邮电出版社,2010.P183-184 

<Vssue title="df" />