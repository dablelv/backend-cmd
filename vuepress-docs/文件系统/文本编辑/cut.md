# 1.命令简介
cut 是一个选取命令，以行为单位，选择性输出符合条件的内容到标准输出。

cut 命令主要用途有两个，其一是用来显示文件的内容，它依次读取所指明的文件列表，将它们的内容输出到标准输出上；其二是连接两个或多个文件，如 cut f1 f2 > f3 将把文件 f1 和 f2 的内容合并起来，然后通过输出重定向符 > 的作用，将它们放入文件 f3 中。

# 2.命令格式
```
cut OPTION... [FILE]...
```
在没有提供文件或文件是 - 的情况下，cut 从标准输入读取内容。
# 3.选项说明
注意，长选项的强制性参数对于短选项也是强制的。
```
-b, --bytes=LIST
	设置输出的字节数或范围
-c, --characters=LIST
	设置输出的字符数或范围
-d, --delimiter=DELIM
	指定列（或字段）的分隔字符。默认分隔符是制表符 Tab。只能和 -f 选项一起使用
-f, --fields=LIST
	设置输出字段，默认字段分隔符是空格。-f 会打印不包含分隔符的行，除非指定了 -s 选项
-n
	与 -b 选项连用，不分割多字节字符
--complement
	反向选择字节、字符或字段
-s, --only-delimited
	若行没有分隔符，则不显示该行。此选项只能和 -f 选项一起使用
--output-delimiter=STRING
	使用字符串作为输出分隔符，默认是输入分隔符
-z, --zero-terminated
	行分隔符是 NUL，而不是 LF
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```
当使用 -b、-c 或 -f 选项时，LIST 由一个范围（range）或逗号隔开的多个范围组成。范围的表示形式有：
```
N
    第 N 个字节、字符或字段。N 从 1 开始计数 
N-
    从第 N 个字节、字符或字段直至行尾 
N-M
	从第 N 到第 M（包括 M）个字节、字符或字段 
-M
	从第 1 到第 M（并包 M）个字节、字符或字段
```
# 4.常用示例
首先给出用于测试的本文件 testfile，其内容如下：
```
hello world
i am lvlv
i like linux
```
（1）以字符为单位输出指定范围的字符。使用 cut 命令选择第 3 到第 5 个字符输出：
```
cut -c 3-5 testfile
llo
am 
lik
```
如果没有指定结束字符的位置，即`cut -c 3- testfile`，则输出第三个字符到最后一个字符。同样我们可以使用字节为单位来进行，如果文本文件是单字节编码的字符，那么`cut -b 3-5 testfile`等同于`cut -c 3-5 testfile`。

（2）以字段为单位输出指定字段。输出第二列和第三列的内容：
```
cut -d " " -f 1  testfile
world
am lvlv
like linux
```
注意，因为第一行没有第三列，所以输出为空。

（3）选项提取指定字段之外的列。输出第一列之外的内容：
```
cut -d " " -f 1 --complement testfile
world
am lvlv
like linux
```

---
# 参考文献
[cut(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/cut.1.html)

[Linux 命令大全.cut 命令](https://man.linuxde.net/cut)

<Vssue title="cut" />