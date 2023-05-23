## 1.命令简介
bzip2 用来压缩和解压文件。

bzip2 是在 Linux 系统中经常使用的一个对文件进行压缩和解压缩的命令，采用 [Burrow-Wheeler](https://baike.baidu.com/item/Burrows-Wheeler%E5%8F%98%E6%8D%A2/752836?fr=aladdin) 块排序文本压缩算法和 Huffman 编码将文件压缩为后缀为 .bz2 的 bzip2 文件。压缩率一般比基于 LZ77/LZ78 的压缩软件好得多，其性能接近 PPM 族统计类压缩软件。

bzip2 不仅可以用来压缩大的、较少使用的文件以节省磁盘空间，还可以和 tar 命令一起使用完成对文件的打包和压缩。减少文件大小有两个明显的好处，一是可以减少存储空间，二是通过网络传输文件时，可以减少传输的时间。

## 2.命令格式
```shell
bzip2 [ -cdfkqstvzVL123456789 ] [ <filenames> ...  ]
```
bzip2 命令行参数有意设计为接近 GNU gzip 的形式，但也不完全相同。bzip2 从命令行读入选项和文件名。 每个文件被名为 "原始文件名.bz2" 的压缩文件替换。 每个压缩文件具有与原文件相同的修改时间、 权限， 如果可能的话， 还具有相同的属主， 因此在解压缩时这些特性将被正确地恢复。 

bzip2 在缺省情况下不覆盖已有的文件。 如果想覆盖已有的文件，要指定 -f 选项。
## 3.选项说明
```shell
-c, --stdout
    将数据压缩或解压缩输出至标准输出
-d, --decompress
    强制解压缩。 bzip2, bunzip2 以及 bzcat 实际上是同一个程序，进行何种操作将根据程序名确定。 指定该选项后将不考虑这一机制，强制 bzip2 进行解压缩
-z, --compress
	-d 选项的补充：强制进行压缩操作，而不管执行的是哪个程序
-t, --test
    检查指定文件的完整性，但并不对其解压缩。 实际上将对数据进行实验性的解压缩操作，而不输出结果
-f, -force
    强制覆盖输出文件。通常 bzip2 不会覆盖已经存在的文件。该选项还强制 bzip2 打破文件的硬连接，缺省情况下 bzip2 不会这么做。
-k, --keep
    在压缩或解压缩时保留输入文件（不删除这些文件）
-s, --small
    在压缩、解压缩及检查时减少内存用量。 采用一种修正的算法进行压缩和测试， 每个数据块仅需要 2.5 个字节。 这意味着任何文件都可以在 2300K 的内存中进行解压缩， 尽管速度只有通常情况下的一半。在压缩时，-s 将选定 200K 的块长度，内存用量也限制在 200K 左右， 代价是压缩率会降低。 总之，如果机器的内存较少（8MB 或更少）， 可对所有操作都采用 -s 选项
-q, --quiet
    压制不重要的警告信息。属于 I/O 错误及其它严重事件的信息将不会被压制
-v, --verbose
    详尽模式——显示每个被处理文件的压缩率。 命令行中更多的 -v 选项将增加详细的程度， 使 bzip2 显示出许多主要用于诊断目的信息
-L, --license, -V, --version
	显示显示软件版本、许可证条款及分发条件
-1 (or --fast) to -9 (or --best)
    在压缩时将块长度设为 100 k、200 k ... 900 k。 对解压缩没有影响
--
    将所有后面的命令行变量看作文件名，即使这些变量以减号 - 打头。 可用这一选项处理以减号 - 打头的文件名， 例如：bzip2 -- -myfilename
--repetitive-fast, --repetitive-best
    这些选项在 0.9.5 及其以上版本中是多余的。 在较早的版本中，这两个选项对排序算法的行为提供了一些粗糙的控制，有些情况下很有用。 0.9.5 及其以上版本采用了改进的算法而与这些选项无关
```
## 4.常用示例
（1）不保留原文件压缩。
```
bzip2 /etc/passwd
```
压缩后 /etc/passwd 将变为 /etc/passwd.bz2。

（2） 保留原文件压缩。
```
bzip2 -k /etc/passwd
# 或
bzip2 -c /etc/passwd > /etc/passwd.bz2
```
（3）压缩时显示指令执行过程。
```
bzip2 -v /etc/passwd
/etc/passwd:  2.256:1,  3.546 bits/byte, 55.67% saved, 1552 in, 688 out.
```
（4）解压 .bz2 文件，不保留原文件。
```
bzip2 -d /etc/passwd.bz2
```
（5）解压 .bz2 文件，保留原文件。
```
bzip2 -dk /etc/passwd.bz2
# 或
bzip2 -dc /etc/passwd.bz2 > /etc/passwd
```
（6）测试.bz2压缩文件的完整性，实际上不解压。
```
bzip2 -tv /etc/passwd.bz2
/etc/passwd.bz2: ok
```

---
## 参考文献
[bzip2(1) manual - linux.org](https://www.linux.org/docs/man1/bzip2.html)

[bzip2 - Linux 命令手册](http://linux.51yip.com/search/bzip2)

<Vssue title="bzip2" />