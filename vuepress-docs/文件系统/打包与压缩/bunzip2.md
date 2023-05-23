## 1.命令简介
bunzip2 用于解压由 bzip2 指令创建的后缀为 .bz2 的压缩包。

bunzip2 其实是 bzip2 的符号链接，即软链接，因此压缩解压都可以通过 bzip2 实现。

bunzip2 等同于 bzip2 -d。
## 2.命令格式
```shell
bunzip2 [ -fkvsVL ] [ <filenames> ... ]
```
## 3.选项说明
```shell
-f, -force
    强制覆盖输出文件。通常 bzip2 不会覆盖已经存在的文件。该选项还强制 bzip2 打破文件的硬连接，缺省情况下 bzip2 不会这么做。
-k, --keep
    在压缩或解压缩时保留输入文件（不删除这些文件）。
-s, --small
    在压缩、解压缩及检查时减少内存用量。 采用一种修正的算法进行压缩和测试， 每个数据块仅需要 2.5 个字节。 这意味着任何文件都可以在 2300K 的内存中进行解压缩， 尽管速度只有通常情况下的一半。在压缩时，-s 将选定 200K 的块长度，内存用量也限制在 200K 左右， 代价是压缩率会降低。 总之，如果机器的内存较少（8MB 或更少），可对所有操作都采用 -s 选项。
-v, --verbose
    详尽模式——显示每个被处理文件的压缩率。 命令行中更多的 -v 选项将增加详细的程度， 使 bzip2 显示出许多主要用于诊断目的信息。
-L, --license, -V, --version
	显示软件版本、许可证条款及分发条件。
```
## 4.常用示例
我们先对 /etc/passwd 使用 bizp 进行压缩。
```shell
bzip2 -c /etc/passwd > passwd.bz2
```
（1）解压文件。
```shell
bunzip2 passwd.bz2
```

（2）保留原文件解压文件。
```shell
bunzip2 -k passwd.bz2
# 或
bunzip2 -c passwd.bz2 > passwd
```

（3）解压时显示指令执行过程。
```shell
bunzip2 -v passwd.bz2
  passwd.bz2: done
```

（4）检测文件的完整性（不解压）。
```
bunzip2 -tv passwd.bz2
  passwd.bz2: ok
```

---
## 参考文献
[bunzip(1) manual - linux.org](https://www.linux.org/docs/man1/bunzip2.html)

<Vssue title="bunzip2" />