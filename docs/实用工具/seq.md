## 1.功能简介
seq（Sequence） 用于按照指定步长产生从起始数到结束数之间的所有整数。起始数和步长可使用默认值 1，结束数必须指定。

## 2.命令格式
```
seq [OPTION]... LAST
seq [OPTION]... FIRST LAST
seq [OPTION]... FIRST INCREMENT LAST
```
## 3.选项说明
注意，长选项的强制性参数对于短选项也是强制的。
```
-f, --format=FORMAT
	使用 printf 样式的浮点格式
-s, --separator=STRING
	使用指定字符串分隔数字（默认：\n）
-w, --equal-width
	在数字添加 0 使得宽度相同
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```
## 4.常用示例
（1）输出 1~5。
```
seq 5
# 或
seq 1 5
# 或
seq 1 1 5
1
2
3
4
5
```
（2）按照步长 10 生成从 10 到 50 的整数序列。
```
seq 10 10 50
10
20
30
40
50
```
（3）按照指定格式 num%03g 格式输出。num 为前置字符串，%03g 表示数字宽度为 3，不足前置补 0。
```
seq -f"num%03g" 3
num001
num002
num003
```
（4）前置补 0 使得数字宽度相同。
```
seq -w 9 11
09
10
11
```
注意，当输出等宽字符串时不能再指定格式字符串，即 -w 与 -f 不能一起用。

（5）使用指定字符串分隔数字。
```
seq -w -s "," 9 11
09,10,11
```
（6）使用 Tab 分隔数字。
```
seq -s "`echo -e '\t'`" 9 11
9	10	11
```
先用命令做成一个 Tab，然后再指定成分隔符。

---
## 参考文献
[seq(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/seq.1.html)

[【Linux】一步一步学Linux——seq命令(221)](https://blog.csdn.net/dengjin20104042056/article/details/100585527)
