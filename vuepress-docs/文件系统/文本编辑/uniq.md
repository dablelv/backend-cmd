## 1.命令简介

uniq 用于去除有序文件中的重复行并将结果输出到标准输出。

为了使 uniq 起作用，所有的重复行必须是相邻的，所以 uniq 经常和 sort 合用。

## 2.命令格式
```shell
uniq [OPTION]... [INPUT [OUTPUT]]
```
## 3.选项说明
```
-c, --count
	显示行出现的次数。
-d, --repeated
	仅显示重复出现的行，即出现次数 >=2 的行，且只打印一次。
-D, --all-repeated[=delimit-method]
	仅显示重复的行，即出现次数 >=2 的行，且打印重复行的所有行。其中 delimit-method 表示对重复行集合的分隔方式，有三种取值，分别为none、prepend和separate。其中none表示不进行分隔，为默认选项，uniq -D等同于uniq --all-repeated=none；prepend表示在每一个重复行集合前面插入一个空行；separate表示在每个重复行集合间插入一个空行。
-f, --skip-fields=N
	忽略前N个字段。字段由空白字符（空格符、Tab）分隔。如果您的文档的行被编号，并且您希望比较行中除行号之外的所有内容。如果指定了选项 -f 1，那么下面相邻的两行：
	1 这是一条线
	2 这是一条线
	将被认为是相同的。如果没有指定 -f 1 选项，它们将被认为是不同的。
-i, --ignore-case
	忽略大小写字符的不同。
-s, --skip-chars=N
	跳过前面N个字符不比较。
-u, --unique
	只显示唯一的行，即出现次数等于1的行。
-w, --check-chars=N
	指定每行要比较的前N个字符数。
--help
	显示帮助信息并退出。
--version
	显示版本信息并退出。
```

## 4.常用示例
先构造一个示例文件 testfile，其内容如下：
```
hello
world
friend
hello
world
hello
```
（1）对无序文件去重无效。直接删除未经排序的文件，将会发现没有任何行被删除：
```
uniq testfile  
hello
world
friend
hello
world
hello
```

（2）uniq 结合 sort 命令，对排序文件去重。
```
cat testfile | sort | uniq
friend
hello
world
```
（3）排序之后删除了重复行，同时在行首位置输出该行重复的次数。
```
sort testfile | uniq -c
1 friend
3 hello
2 world
```
（4）仅显示存在重复的行，并在行首显示该行出现的次数。
```
sort testfile | uniq -dc
3 hello
2 world
```
（5）仅显示不重复的行。
```
sort testfile | uniq -u
friend
```
（6）仅显示重复的行，且显示重复行的所有行。
```
sort testfile | uniq -D
hello
hello
hello
world
world
```
（7）uniq 默认是比较相邻行的所有内容来判断是否重复，我们可以通过选项`-w`或`--check-chars=N`指定比较前 N 个字符。比如我们有如下内容的文件 test.txt：
```
apple
application
api
```
打印前三个字符相同的行：
```
uniq -w3 -D test.txt
apple
application
```
---
## 参考文献
[uniq(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/uniq.1.html)

[Linux的 uniq 命令详解](https://blog.csdn.net/gaojinshan/article/details/40863925)

[为初学者提供的uniq 命令教程及示例](https://linux.cn/article-9542-1.html)

[Linux uniq command](https://www.computerhope.com/unix/uuniq.htm)

<Vssue title="uniq" />