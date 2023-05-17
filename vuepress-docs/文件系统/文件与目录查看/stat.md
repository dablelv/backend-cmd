## 1.命令简介
stat 用于显示文件或文件系统的详细信息。在显示文件信息时，比 ls 命令更加详细。

## 2.命令格式
```shell
stat [OPTION]... FILE..
```

## 3.命令选项
```shell
-L, --dereference:跟随符号链接解析原文件而非符号链接；
-f, --file-system:显示文件所在文件系统信息而非文件信息；
-c,--format=FORMAT:以指定格式输出，而非默认格式；
	显示文件信息可用格式控制符如下：
	%a：以八进制显示访问权限
	%A：以可读形式显示访问权限
	%b：显示占有块数
	%B：显示每一块占有的字节数
	%C：SELinux security context string
	%d：十进制显示文件所在设备号
	%D：十六进制显示文件所在设备号
	%f：十六进制显示文件类型
	%F：文件类型。Linux下文件类型主要分为普通文件、目录、字符设备文件、块设备文件、符号链接文件、套接字等
	%g：文件所有者组ID
	%G：文件所有者组名称
	%h：文件硬链接数
	%i：inode号
	%m：文件所在磁盘分区挂载点，比如/data
	%n：文件名称
	%N：单引号括起来的文件名称，如果是软链接，则同时显示指向的文件名称
	%o：optimal I/O transfer size hint
	%s：实际文件大小，单位字节
	%t：major device type in hex, for character/block device special files
	%T：minor device type in hex, for character/block device special files
	%u：所有者用户ID
	%U：所有者用户名称
	%w：文件创建时间，输出-表示无法得知
	%W：文件创建时间，输出Unix时间戳，0表示无法得知
	%x：可读形式输出最后访问时间atime
	%X：Unix时间戳输出最后访问时间atime
	%y：可读形式输出最后修改时间mtime
	%Y：Unix时间戳输出后修改时间mtime
	%z：可读形式输出最后状态改变时间ctime
	%Z：Unix时间戳输出最后状态改变时间ctime
	
	显示文件系统信息可用格式控制符有：
	%a：非超级用户可使用的自由block数
	%b：文件系统总block数
	%c：文件系统总文件节点数
	%d：可用文件节点数
	%f：可用文件block数
	%i：十六进制文件系统ID
	%l：最大文件名称长度
	%n：文件名称
	%s：一个块的大小，单位字节（for faster transfers）
	%S：一个块的基本大小，单位字节（用于统计block的数量）
	%t：十六进制输出文件系统类型
	%T：可读形式输出文件系统类型
--printf=FORMAT:以指定格式输出，而非默认格式。与--format作用类似，但可以解释反斜杠转义字符，比如换行符\n；
-t, --terse:简洁模式输出，只显示摘要信息；
--help:显示帮助信息；
--version:显示版本信息。
```

## 4.常用示例
（1）显示文件信息。
```shell
[root@TENCENT64 ~]# stat Changelog
  File: ‘Changelog’
  Size: 1598      	Blocks: 8          IO Block: 4096   regular file
Device: fd01h/64769d	Inode: 1579435     Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2018-11-06 22:39:54.110931887 +0800
Modify: 2018-11-06 22:39:54.110931887 +0800
Change: 2018-11-06 23:07:14.428548887 +0800
 Birth: -
```
信息解释：
```shell
File: ‘Changelog’:文件名称为Changelog
Size: 1598:文件大小1598字节
Blocks: 8：文件占用的块数
IO Block: 4096：
regular file：文件类型（普通文件）
Device: fd01h/64769d：文件所在设备号，分别以十六进制和十进制显示
Inode: 1579435：文件节点号
Links: 1：硬链接数
Access: (0644/-rw-r--r--)：访问权限
Uid：所有者ID与名称
Gid：所有者用户组ID与名称
Access：最后访问时间
Modify：最后修改时间
Change：最后状态改变时间
Birth -：无法获知文件创建时间。注意：Linux下的文件未存储文件创建时间
```

（2）显示文件所在文件系统信息。
```shell
[root@TENCENT64 /data/vas_pgg_proj/apps/penguin_game]# stat -f Makefile
  File: "Makefile"
    ID: 6f75a4f02634e23e Namelen: 255     Type: ext2/ext3
Block size: 4096       Fundamental block size: 4096
Blocks: Total: 43830967   Free: 30155578   Available: 27923259
Inodes: Total: 11162880   Free: 11077199
```
信息解释：
```shell
File: "Makefile"：文件名称为"Makefile"；
ID: 6f75a4f02634e23e：文件系统ID
Namelen: 255：最大文件名称长度
Type: ext2/ext3：文件系统类型名称
Block size: 4096：块大小为4096字节
Fundamental block size: 4096：基本块大小为4096字节
Blocks: Total: 43830967   Free: 30155578   Available: 27923259：
Inodes: Total: 11162880   Free: 11077199
```

---
## 参考文献
[stat(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/stat.1.html)

[【Linux】Linux下使用stat命令所显示出来的三个时间](https://blog.csdn.net/pointer_y/article/details/54347968)

[linux stat命令参数详解](http://blog.51cto.com/colinzhouyj/1288580)

[磁盘、分区及Linux文件系统 [Disk, Partition, Linux File System]](https://www.cnblogs.com/sammyliu/p/4521315.html)
