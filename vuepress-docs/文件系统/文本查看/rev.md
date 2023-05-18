## 1.命令简介
rev（reverse）反转一个或多个文件的行。

rev 命令用于将文件中的每行内容以字符为单位反序输出，即第一个字符最后输出，最后一个字符最先输出，以此类推。
## 2.命令格式
```shell
rev [OPTION] [FILE...]
```
如果没有指定文件，则读取标准输入。
## 3.选项说明
```shell
-V, --version
	显示版本信息并退出
-h, --help
	显示帮助信息并退出
```
## 4.常用示例
给定文件 test.txt 用于测试，内容如下：
```
abcdefg
1234567
```
（1）反序显示文件的每行内容。
```
rev test.txt
gfedeba
7654321
```
（2）反序显示从标准输入读取的内容。
```
rev
dablelv
vlelbad
```

每输入一行内容后，键入回车将显示反序后的内容。键入 Ctrl + d 结束输入。

---
## 参考文献
[rev(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/rev.1.html)
