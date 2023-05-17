## 1.命令简介
将**两个文件**按照指定的相同字段进行笛卡尔乘积**横向拼接**，并输出到标准输出。默认情况下，join 字段分隔符是空格或 Tab。join 时，两个文件需要按照某个字段排好序。

笛卡尔乘积指两个集合 X 和 Y 成员相互组合构成的有序对的集合。比如集合 X={a,b}，Y={0,1,2}，则
```
X×Y={(a, 0), (a, 1), (a, 2), (b, 0), (b, 1), (b, 2)}
Y×X={(0, a), (0, b), (1, a), (1, b), (2, a), (2, b)}
```
## 2.命令格式
```
join [OPTIONS] FILE1 FILE2
```
当 FILE1 或 FILE2 是连字符 -（二者不能同时是 -），那么内容从标准输入读取。

## 3.选项说明
```
-a FILENUM
	除了显示原来的输出内容之外，还显示文件中没有相同栏位的行。FILENUM 取值为 1 或 2，分别对应 FILE1 和 FILE2
-e EMPTY
	若 FILE1 与 FILE2 中找不到指定的列，则在输出中填入选项中的字符串
-i, --igore-case
	比较列内容时，忽略大小写
-j FIELD
	等价于 -1 FIELD -2 FIELD
-o FORMAT
	按照指定的格式显示结果
-t CHAR
	指定输入和输出列的分隔字符
-v FILENUM
	作用类似于 -a FILENUM，但是只显示文件中没有相同列的行
-1 FIELD
	连接 FILE1 指定的列。FIELD 取 1 表示第一列，2 表示第二列，以此类推
-2 FIELD
	连接 FILE2 指定的列。FIELD 取 1 表示第一列，2 表示第二列，以此类推
--check-order
	默认选项，检查文件是否已经排序
--nocheck-order
	不检查检查文件是否已经排序
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）连接两个文件，默认以第一列作为连接字段。
```
# file1 内容如下
lvlv dablelv 25
zhangsan San 12

# file2 内容如下
lvlv english 15
lvlv math 75
zhangsan math 14
zhouxun english 45

join file1 file2
lvlv dablelv 25 english 15
lvlv dablelv 25 math 75
zhangsan San 12 math 14
```
（2）还是以上面的两个文件为例，显示指明按照第一列中文名进行连接。
```
join -j 1 file1 file2
# 或
join -1 1 -2 1 file1 file2
```
（3）如果想显示没有相同字段的行，使用 -a1 或 -a2 指定显示第一个或者第二个文件的行。
```
join -a2 file1 file2
lvlv dablelv 25 english 15
lvlv dablelv 25 math 75
zhangsan San 12 math 14
zhouxun english 45  		//显示了文件 file2 中未匹配的一行
```

---
## 参考文献
[join(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/join.1.html)
