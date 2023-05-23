## 1.命令简介
tar 命令用于将 Linux 的文件和目录创建为档案或将档案还原为文件和目录。此外，tar 也可以在档案中改变文件，或者向档案中加入新的文件。本程序最初的设计目的是将文件备份到磁带上（Tape ARchive），因而得名 tar。

tar 的工作过程主要分为两个步骤，正向是打包与压缩，反向是解压缩与还原。打包指的是将一大堆文件或目录变成一个总的文件，压缩则是将一个大的文件通过一些压缩算法变成一个小文件。反向的解压缩与还原刚好是相反的过程。tar 的压缩与解压缩，用到的主要是 gzip 与 bzip2 命令。

## 2.命令格式
```
tar [OPTIONS] [FILE]...
```

## 3.选项说明
```
-A, --catenate, --concatenate
	新增文件到已存在的存档
-c，--create
	建立新的存档
-C, --directory=DIR
	将 tar 的工作目录从当前目录改为指定目录。该选项对顺序敏感，即影响其后的所有选项
-d, --diff, --compare
	对比档案与文件系统的差异
--delete
	从档案中删除制定的文件
-f, --file=ARCHIVE
	指定存档文件
-j, --bzip2
	通过 bzip2 命令压缩或解压缩档案
-k, --keep-old-files
	还原档案时，保留当前目录下的原有文件不被覆盖 
-l, --check-links
	如果不是所有链接都被转储，则打印一条消息
-m, --touch
	还原文件时，不变更文件的更改时间
-N, --newer, --after-date=DATE
	只将较指定日期更新的文件保存到档案中
-O, --to-stdout
	将提取的文件名和目录名打印到标准输出
-p, --preserve-permissions, --same-permissions
	提取文件时保留文件原来的权限
-P, --absolute-names
	创建存档时不移除文件名称前的 / 号
-r, --append
	追加文件到档案的末尾
-t, --list
	列出档案的内容
-u, --update
	添加比档案中文件更新的文件到档案中
-v, --verbose
	显示指令执行过程
-W, --verify
	向档案写入文件后尝试验证
-x, --extract, --get
	从档案提取文件  
-z, --gzip, --gunzip, --ungzip
	通过 gzip 命令压缩或解压档案
-Z, --compress, --uncompress
	通过 compress 指令处理备份文件
--exclude=PATTERN
	排除符合指定模式的文件
-?, --help
	显示短选项的概要信息并退出
--usage
	显示可用选项列表并退出
--version
	显示版本和版权信息并退出
```

## 4.常用示例
- 打包

（1）将目录 /home/stud/wang 打包成 lvlv.tgz，同时使用 gzip 进行压缩。
```
tar –czvf lvlv.tgz /home/stud/wang
```

（2）将目录 /home/stud/wang 打包成 lvlv.tbz2，同时使用 bzip2 进行压缩。
```
tar –cjvf lvlv.tgz2 /home/stud/wang
```
（3）将指定目录下的目录或文件进行打包。
```
tar –czvf wang.tar.gz -C /home/stud/ wang
```
- 解包

（1）将档案 lvlv.tgz 还原为原目录，同时使用 gzip 进行解压缩。
```
tar -xzvf lvlv.tgz
```
（2）将档案 lvlv.tbz2 还原为原目录，同时使用 bzip2 进行解压缩。
```
tar -xjvf lvlv.tbz2
```
（3）将 lvlv.tgz 解包到指定目录，同时使用 gzip 进行解压缩。
```
tar -xzvf lvlv.tgz -C DIR
```
- 查看

（1）只查看档案的文件列表，不进行解包。
```
tar -tzvf wang.tar.gz
```

---
## 参考文献
[tar(1) — Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/tar.1.html)

[tar - wikipedia](https://zh.wikipedia.org/wiki/Tar)

<Vssue title="tar" />