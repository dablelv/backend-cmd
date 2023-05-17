## 1.命令简介
du（disk usage）命令用于查看指定的目录或文件所占用的磁盘空间。
## 2.命令格式
```
du [OPTIONS] [FILES]
du [OPTIONS] --files0-from=F
```
## 3.选项说明
```shell
-a, --all
	递归显示目录与其包含的所有文件及子目录的大小，默认仅显示目录及其子目录的大小。
--apparent-size
	显示文件或目录自身大小，而不是它们占用的磁盘空间大小。文件或目录占用磁盘空间的大小与它们自身大小有时候并非完全一致，有可能比较大，原因可能是稀疏文件中存在空洞，内部碎片，间接blocks等。大小等同与使用命令"wc -c"或"ls --blokc-size=1"查看的字节大小。
-B, --block-size=SIZE
	定文件大小的统计单位，SIZE 可取如下字符串: KB（1000）、K（1024）、MB（1000*1000）、M（1024*1024）以及G, T, P, E, Z, Y等
-b, -bytes
	显示目录或文件大小时，以byte为单位,等同于选项 --apparent-size --block-size=1。
-c, --total
	显示占用磁盘空间大小的总和。
-D, --dereference-args
	显示指定符号连接的源文件大小。
--files0-from=F
	列出在文件F中指出的文件名称，如果F等于连字符-，则从标准输入读取文件名称。
-H
	等同于 -D, --dereference-args。
-h, --human-readable
	以易读的单位显示大小，例如以 K，M，G 等为单位进行显示。
--si
	等同于 -h，但是 K，M，G 等以 1000 而非 2014 为换算单位。
-k
	以 K 为单位显示，等同于--block-size=1K。
-l, --count-links
	多次计算硬链接文件。
-m
	以 M 为单位显示，等同于--block-size=1M。
-L, --dereference
	显示符号链接的源文件大小。
-P, --no-dereference
	默认选项，不显示符号链接源文件大小。
-0, --null
	以 NULL 字符取代输出的换行符。
-S, --separate-dirs
	不显示子目录大小（不太明白，为何使用时仍然显示子目录大小）。
-s, --summarize
	只显示给定的文件或目录的总大小。
-x, --one-file-system
	以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。
-X, --exclude-from=FILE
	跳过符合指定的文件。
--exclude=PATTERN
	跳过符合指定模式的文件或目录。
--max-depth=N
	指定递归显示的最大目录深度，--max-depth=0 等同于 --summarize。
--time
	显示文件或目录最后修改时间。
--time=WORD
	显示指定类型的时间，而非默认的最后修改时间。WORD 可取值为 atime、access、use（访问时间），或者ctime、status（状态改变时间）。
--time-style=STYLE
	使用指定的时间格式显示时间，STYLE 可取值为 full-iso, long-iso, iso, +FORMAT，其中 FORMAT 解析方式等同于 date 命令。
--help
	显示帮助信息。
--version
	显示版本信息。
```

## 4.常用示例
（1）显示指定文件或目录占用磁盘空间大小。
```
du -sh [file or directory] 
```

（2）显示指定目录及其所有子目录的大小。
```
du -h [directory]
```
## 5.注意事项
（1）文件大小与占用磁盘空间大小的区别。

文件大小（又名 apparent size）是文件自身实际大小，与占用磁盘空间大小（又名 occupied space size）有本质的区别。举个例子，创建一个 1 字节的文件，使用 du 命令显示的为 4KB，使用 ls 命令显示为 1 字节。
```shell
$ echo -n 1 > 1B.txt
$ ls -l 1B.txt
-rw-rw-r-- 1 dablelv dablelv 1 Apr  4 19:14 1B.txt

$ du -h 1B.txt
4.0K	1B.txt
```
我们先创建一个文件1B.txt，大小是一个字节，ls显示出的size就是1Byte，而1B.txt这个文件在硬盘上会占用1个block，因为Linux文件系统存储最小单位为block，不足1个block大小的文件也要占用1个block大小。这里的一个block等于4K。

（2）稀疏文件（sparse file）。

稀疏文件就是在文件中留有很多空余空间，称为空洞（hole），留备将来插入数据使用，这些空洞被填充为NULL字符，特点是文件系统并不会为空余空间分配磁盘空间。

使用如下代码创建稀疏文件：
```c
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

int main(int argc, char *argv[]) {
	int fd = open("sparse.file", O_RDWR|O_CREAT);
    lseek(fd, 10240, SEEK_CUR);
    write(fd, "\0", 1);
    return 0;
}
```
编译生成后执行，创建稀疏文件sparse.file，偏移10240字节后写入一个空字符，使得文件sparse.file内容全为空字符。使用ls命令查看文件大小为10241B，这是文件的大小。使用du命令查看文件占用磁盘空间大小时，发现稀疏文件空洞部分并不占用磁盘空间，被文件系统压缩存储。
```
$ ll sparse.file
-rw---x--- 1 dablelv dablelv 10241 Apr  4 20:16 sparse.file
[dablelv@TENCENT64 ~]$ du -h sparse.file
4.0K	sparse.file
```
## 6.小结
文件大小与实际占用磁盘空间大小是两个不同的概念，所以使用 du 和 ls 命令来查看同一个文件得到的大小是不一样的，查看文件大小时需要注意区分。

**注意**，稀疏文件是指存在空洞的文件，其空洞部分是不占用磁盘空间的，但是使用 ls 查看其大小时，包含空洞部分。

---
## 参考文献
[du(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/du.1.html)

[为什么用ls和du显示出来的文件大小有差别？](https://blog.csdn.net/loryliu/article/details/25337409)
