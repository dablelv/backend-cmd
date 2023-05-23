## 1.命令简介
wc（word count）用于统计文件字节、字符、单词与行的数量。

## 2.命令格式
```
wc [OPTION]... [FILE]...
wc [OPTION]... --files0-from=F
```
如果没有 FILE，或者 FILE 为 -，则读取标准输入。
## 3.选项说明
```
-c, --bytes
	仅显示字节数
-m, --chars
	仅显示字符数
-l, --lines
	仅显示行数
--files0-from=F
	从文件 F 中获取以 NULL 字符结尾的文件名作为输入，如果 F 等于连字符 -，则从标准输入读取
-L, --max-line-length
	显示文件中最长行的字符数
-w, --words
	显示单词数，单词以空格分隔
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）使用 wc 统计 /etc/passwd 行数、单词数和字节数。
```shell
wc /etc/passwd
40   45 1719 /etc/passwd
```
40 是行数，45 是单词数，1719 是字节数。

（2）wc 的命令比较简单，每个参数使用如下：
```shell
# 统计行数，在统计记录数时，很常用
wc -l /etc/passwd
40 /etc/passwd       # 表示系统有40个账户

# 统计单词出现次数
wc -w /etc/passwd
45 /etc/passwd

# 统计文件的字节数
wc -c /etc/passwd
1719

# 统计文件的字符数，如果是 ASCII、Latin-1 等单字节编码的字符，字符数等于字节数
wc -m /etc/passwd
1719
```

（3）从文件读取输入文件名。如果有多个文件名，并且希望 wc 从一个文件中读取它们，那么使用 -files0-from 选项。这里将文件名称必须以 NULL 字符结束写在文件fileNames.txt 中。
```shell
wc --files0-from=fileNames.txt
```
在 vim 中输入 NULL 字符，可以通过 digraph 输入，具体操作步骤是：在输入模式按一下Ctrl+k，然后输入NU。关于 digraph 和其它输入方式具体参见 [Vim 中读写特殊字符](https://blog.csdn.net/chenster/article/details/53307707)。

（4）统计目录下条目的个数。

```shell
ls DIR | wc -l
```
这个命令会将目录中的所有文件和子目录列出，并使用管道将它们传递给 wc 命令进行统计。-l 参数告诉 wc 命令统计行数，因为 ls 命令会为每个文件和目录输出一行。

---
## 参考文献
[sort(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/sort.1.html)

[uniq(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/uniq.1.html)

[wc(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/wc.1.html)

[wc (Unix) - Wikipedia](https://en.wikipedia.org/wiki/Wc_(Unix))

<Vssue title="wc" />