## 1.命令简介
gzip（GNU zip）命令用来压缩和解压文件。

gzip 是在 Linux 系统中经常使用的一个对文件进行压缩和解压缩的命令，采用 [Deflate](https://baike.baidu.com/item/DEFLATE/9650075?fr=aladdin)（LZ77 + 哈夫曼编码）无损压缩算法压缩为后缀为 .gz 的 gzip 文件。

gzip 不仅可以用来压缩大的、较少使用的文件以节省磁盘空间，还可以和 [tar](https://dablelv.blog.csdn.net/article/details/78568419) 命令一起构成 Linux 操作系统中比较流行的压缩文件格式。据统计，gzip 命令对文本文件有 60%～70% 的压缩率。减少文件大小有两个明显的好处，一是可以减少存储空间，二是通过网络传输文件时，可以减少传输的时间。

## 2.命令格式
```shell
gzip [ -acdfhlLnNrtvV19 ] [-S SUFFIX] [ NAME... ]
```
## 3.选项说明
```shell
-a --ascii
	使用 ASCII 文字模式。在转换行末字符时使用本地约定。此选项仅在某些非 Unix 系统上支持。对于 MSDOS，压缩时将 CR LF 转换为 LF，解压缩时将 LF 转换为 CR LF
-c, --stdout, --to-stdout
	把压缩后的文件输出到标准输出，不去变更原始文件
-d, --decompress, --uncompress
	解压缩
-f, --force
	强制压缩或解压缩，即使文件具有多个链接或相应的文件已经存在，或者压缩数据是从终端读取或写入终端的
-h, --help
	显示帮助信息并退出
-l, --list
	列出压缩文件的相关信息
-L, --license
	显示版权信息并退出
-n, --no-name
	压缩文件时，不保存原来的文件名称及时间戳。解压缩时，即使原文件名和时间戳存在也不还原。该选项为解压缩时的默认选项
-N, --name
	压缩时，始终保存原始文件名和时间戳；这是默认的。解压缩时，如果存在，则恢复原始文件名和时间戳。此选项对于限制文件名长度的系统或在文件传输后丢失时间戳的系统非常有用
-q, --quiet
	不显示警告信息
-r, --recursive
	递归处理，将指定目录下的所有文件及子目录一并处理
-S, --suffix=SUFFIX
	更改压缩后解压缩后的文件的后缀名
-t, --test
	测试压缩文件是否正确无误
-v, --verbose
	显示指令执行过程
-V, --version
	显示版本信息并退出
-#, --best, --fast
	指定压缩效果。压缩率是一个介于 1~9 的数值，数值越大，压缩率越高，压缩速度越低，缺省为 6。--best 等同于 -9，--fast 等同于 -1
```
## 4.常用示例
（1）不保留原文件压缩。
```
gzip /etc/passwd
```
压缩后的 /etc/passwd 将变为 /etc/passwd.gz。

（2）保留原文件压缩。
```
gzip -c /etc/passwd > passwd.gz
```
（3）压缩时显示指令执行过程。
```
gzip -v /etc/passwd
/etc/passwd:	 57.9% -- replaced with /etc/passwd.gz
```
（4）解压 .gz 文件，不保留原文件。
```
gzip -dv /etc/passwd.gz
/etc/passwd.gz:	 57.9% -- replaced with /etc/passwd
```
（5）递归压缩指定目录下的所有文件。
```
ls dir
file1  file2  file3

gzip -rv dir
dir/file3:	-10.0% -- replaced with dir/file3.gz
dir/file2:	-25.0% -- replaced with dir/file2.gz
dir/file1:	-16.7% -- replaced with dir/file1.gz
```

---
## 参考文献
[gzip(1) manual - linux.org](https://www.linux.org/docs/man1/gzip.html)

[Linux 命令大全.gzip 命令](https://man.linuxde.net/gzip)
