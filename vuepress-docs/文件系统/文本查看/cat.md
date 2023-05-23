## 1.命令简介
cat 用于连接文件的内容并打印到标准输出。

## 2.命令格式
```
cat [OPTION]... [FILE]...
```
在没有文件或文件是 - 时，读取标准输入。
## 3.选项说明
```
-
	从标准输入获取内容
-A, --show-all
	等价于选项 -vET，显示文件内所有不可打印的字符
-b, --number-nonblank
	和 -n 相似，只不过对于空白行不编号
-e
	 等价于 -vE
-E, --show-ends
	在每行结束处显示 $
-n, --number
	由 1 开始对所有输出的行数编号
-s, --squeeze-blank
	当遇到有连续两行以上的空白行，就代换为一行的空白行
-t
	等价于 -vT 选项
-T, --show-tabs
	将 TAB 字符显示为 ^I
-v, --show-nonprinting
	使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）查看文件内容。
```
cat  filename
```
（2）将几个文件合并为一个文件。
```
cat file1 file2 > file
```
（3）从标准输入读取内容并重定向到文件。键入 Ctrl + d 结束输入。
```
cat > filename
```
（4）把 file1 的文档内容加上行号后重定向到 file2。
```
cat -n file1 > file2
```
（5）将文件 file1 和标准输入内容，纵向连接后重定向至文件 file2。
```
cat file1 - > file2
```
（6）清空文件内容。
```
cat /dev/null > file
```

----
## 参考文献
[cat(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/cat.1.html)

[菜鸟教程.Linux cat命令](http://www.runoob.com/linux/linux-comm-cat.html)

<Vssue :title="cat" />