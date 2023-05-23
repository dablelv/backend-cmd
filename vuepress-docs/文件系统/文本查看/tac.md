## 1.命令简介
tac（cat 的反序）以行为单位反序输出文件内容，即第一行最后显示，最后一行先显示。输出内容和 [cat](https://dablelv.blog.csdn.net/article/details/78569737) 命令相反。
## 2.命令格式
```
tac [OPTION]... [FILE]...
```
如果没有文件或文件是 -，读取标准输入。
## 3.选项说明
长选项的强制性参数对于短选项也是强制的。
```
-b, --before
	在行前而非行尾添加分隔标志
-r, --regex
 	将分隔标志视作正则表达式来解析
-s, --separator=STRING
  	指定字符串代替换行符作为行分隔标志
--help
 	显示帮助信息并退出
--version
 	显示版本信息并退出
```
## 4.常用示例
给定文件 file1 和 file2 用于测试，内容分别是：
file1 内容：
```
123
456
789
```
file2 内容：
```
abc
def
```
（1）反向查看文件内容。
```
tac file1
789
456
123
```
（2）反向查看文件内容，以字符串 b 作为行分隔符。
```
tac -s"b" file2
c
def
ab
```
（3）连接文件 file1 和 file2 到 file3。
```
tac file1 file2 > file3

cat file3
789
456
123
def
abc
```

---
##  参考文献
[tac(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/tac.1.html)

<Vssue title="tac" />