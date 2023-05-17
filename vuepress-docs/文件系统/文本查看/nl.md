## 1.命令简介
nl（number line）用于计算文件的行号并将带有行号的内容输出到标准输出。

相比于命令 `cat -n`，nl 可以对行号做比较多的显示设计，包括位数与是否自动补齐 0 等功能。

## 2.命令格式
```
nl [OPTION]... [FILE]...
```
在没有文件或文件是 - 时，从标准输入读取内容。

## 3.选项说明
注意，长选项的强制性参数对于短选项也是强制的。
```shell
-b, --body-numbering=STYLE
	使用指定样式给文件的正文行编号。STYLE 可取值如下：
	a：给所有行编号，不论其是否为空行（类似 cat -n）
	t：只给非空行编号
	n：不编行
	pBRE：只给包含基本正则表达式（basic regular expression，BRE）的行编号
-d, --section-delimiter=CC
	使用 CC 作为逻辑页分隔符
-f, --footer-numbering=STYLE
	使用指定样式给文件的页脚行编号。STYLE 可取值同上
-h, --header-numbering=STYLE
	使用指定样式给文件的页脚行编号。STYLE 可取值同上
-i, --line-increment=NUMBER
	使用指定增量增加行号
-l, --join-blank-lines=NUMBER
	将指定数量的一组空行视为 1 行
-n, --number-format=FORMAT
	指定行号格式，FORMAT 主要有三种：
	ln：左对齐，无前导 0
	rn：右对齐，无前导 0
	rz：右对齐，有前导 0 
-p, --no-renumber
	不要重置每个区段的行号
-s, --number-separator=STRING
	可能的话在行号后添加字符串
-v, --starting-line-number=NUMBER
	设置每个区段的第一行的行号
-w, --number-width=NUMBER
	行号栏位的占用的位数
--help
	显示此帮助并退出
--version
	显示版本信息并退出 
```
nl 不带任何选项执行时，使用如下默认选项：
```
-bt -d'\:' -fn -hn -i1 -l1 -n'rn' -s<TAB> -v1 -w6
```
CC 是用于分隔逻辑页数的两个分界符，如果要指定 "\"， 请输入 "\\"。
## 4.常用示例
给定文件 test.txt 用于测试，内容如下：
```
testtxt1
testtxt2
	
testtxt3
```
（1）使用默认选项给 test.txt 文件编号并输出。
```shell
nl test.txt
     1	testtxt1
     2	testtxt2
       
     3	testtxt3
```
（2）显示行号，指定对齐方式。
```shell
# 左对齐，无前导 0
nl -nln test.txt
1     	testtxt1
2     	testtxt2
       
3     	testtxt3

# 右对齐，无前导 0
nl -nrn test.txt
     1	testtxt1
     2	testtxt2
       
     3	testtxt3

# 右对齐，有前导 0
nl -nrz test.txt
000001	testtxt1
000002	testtxt2
       
000003	testtxt3
```
（3）指定宽度为 4 位，默认为 6 位。
```shell
nl -nrz -w4 test.txt
0001	testtxt1
0002	testtxt2
     
0003	testtxt3
```
（4）空行显示行号。
```shell
nl -nrz -w4 -ba test.txt
0001	testtxt1
0002	testtxt2
0003	
0004	testtxt3
```
（5）设置行号增量为 2。
```shell
nl -nrz -w4 -ba -i2 test.txt
0001	testtxt1
0003	testtxt2
0005	
0007	testtxt3
```

---
## 参考文献
[nl(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/nl.1.html)

[博客园.每天一个linux命令(11):nl命令](https://www.cnblogs.com/xqzt/p/5414547.html)
