## 1.命令简介
diff（different）是以逐行的方式，比较文本文件的异同。

如果给定的文件名是 -，表示从标准输入读取内容。如果给定的文件是目录，则将会比较该目录中具有相同文件名的文件，默认情况下不会对其子目录文件进行任何比较操作。

由于历史原因，diff 有四种输出格式：
```
正常格式（选项 --normal ）
并列格式（选项 -y, --side-by-side）
上下文格式（选项 -C NUM, -c, --context[=NUM]）
合并格式（选项 -U NUM, -u, --unified[=NUM]）
```
## 2.命令格式
```
diff [OPTION]... FILES
```
FILES 取值形式有如下几种：
```
FILE1 FILE2
DIR1 DIR2
DIR FILE
FILE DIR
```
FILES 除了上面的几种取值形式，也可以使用选项 --from-file（指定第一个文件）或 --to-file（指定第二个文件）。如果输入相同，退出状态为 0；如果输入不同，则为 1；如果出现故障，则为 2。

## 3.选项说明

注意，长选项的强制性参数对于短选项也是强制的。
```
-a, --text
    所有的文件都视为文本文件来逐行比较
-B, --ignore-blank-lines
    忽略插入删除空行引起的变化
-b, --ignore-space-change
    忽略因空白符数量不同造成的差异
-C NUM
-c, --context[=NUM]
    使用上下文格式输出，显示异行处上下指定数量的行（默认为 3 行）
 --color[=WHEN]
 	将输出着色；WHEN 可取值 never、always 或 auto（默认值）
-D, --ifdef=NAME
	输出与 "#ifdef NAME" 不同的合并文件
-d, --minimal
    改变算法找出一组更小的变更。这会使 diff 变慢
-E, --ignore-tab-expansion
	忽略因 Tab 扩展引起的更改
-e, --ed
    输出为一个有效的 ed 脚本
-F, --show-function-line=RE
	显示匹配 RE 的前面的行
--from-file=FILE1
	将 FILE 1 与所有文件进行比较；FILE 1 可以是一个目录
--GTYPE-group-format=GFMT
	用组格式 GFMT 格式化类型为 GTYPE 的输入组
--line-format=LFMT
    用格式 LFMT 格式化所有输入行
--LTYPE-line-format=LFMT
 	用行格式 LFMT 格式化类型为 LTYPE 的输入行
	上面三个选项和响应的格式提供了对输出的细粒度控制。
	行类型 LTYPE 可取值 old、new 或 unchanged，组类型 GTYPE 可取值 LTYPE 或 changed。
	组格式 GFMT 特含如下内容：
	%< FILE1 中的行
	%> FILE2 中的行
	%= FILE1 和 FILE2 中共有的行
	%[-][WIDTH][.[PREC]]{doxX}LETTER
		使用 printf 输出风格修饰 LETTER，LETTER 使用如下字母表示新组，下面的小写字母表示旧组
		F	首行行号
        L	尾行行号
        N	行数 = L-F+1
        E	等于 F-1
        M	等于 L+1
        %(A=B?T:E)
              if A equals B then T else E
	行格式 LFMT  特含如下内容：
	%L	行的内容
	%l	行的内容，不包括任何尾随的换行符
	%[-][WIDTH][.[PREC]]{doxX}n
		使用 printf 风格修饰输入行号 n
	组格式 GFMT 和行格式 LFMT 共有的内容：
	%%			表示百分号 %
	%c'C'		表示大写字母 C
	%c'\OOO'	表示码值为八进制 000 的字符
	C			其他字符
--help
	显示帮助信息并退出
--horizon-lines=NUM
	保持共有前缀和后缀的 NUM 行
-I, --ignore-matching-lines=RE
    忽略匹配正则表达式 RE 的行
-i, --ignore-case
    忽略大小写
--ignore-file-name-case
	比较文件名时忽略大小写
-l, --paginate
    将结果交由 pr 程序来分页
--label LABEL
    输出比较结果时使用 LABEL 代替文件名和时间戳
--left-column
	只输出公共行的左列
-N, --new-file
	将缺席文件视为空文件。在比较目录时，若文件 A 仅出现在某个目录中，预设会显示：Only in 目录：文件 A。若使用 -N 参数，则 diff 会将文件 A 与一个空白的文件比较
-n, --rcs
    将比较结果以 RCS 的格式来显示
--no-dereference
	不解析
--no-ignore-file-name-case
	比较文件名时大小写敏感
--normal
	使用正常格式输出比较结果。为默认输出格式
-p, --show-c-function
	显示每个更改在哪个 C 函数中
--palette=PALETTE
	当使用选项 --color 时，指定要使用的颜色。PALETTE 是使用冒号分隔的终端支持的能力列表
-q, --brief
    仅报告文件是否相异，忽略差别的细节
-r, --recursive
    当比较目录时，递归比较子目录
-S, --starting-file=FILE
    当比较目录时，由 FILE 开始。这用于继续中断的比较
-s, --report-identical-files
    当两个文件相同时报告
--speed-large-files
	使用启发规则加速操作那些有许多离散的小差异的大文件
--strip-trailing-cr
	去掉输入行尾的回车符 CR
--suppress-common-lines
    在并列格式中不印出公共行
-T, --initial-tab
    在每行前面加上 Tab 以便对齐
-t, --expand-tabs
    在输出时将 Tab 扩展为空格
--tabsize=NUM
	一个 Tab 表示 NUM（默认 8） 个空格
--to-file=FILE2
	将所有文件与 FILE2 进行比较；FILE2 可以是一个目录
-U NUM
-u, --unified[=NUM]
	使用合并格式输出，输出 NUM（默认 3）行的统一上下文
--unidirectional-new-file
	将缺席的第一批文件视为空文件
-v, --version
    输出版本信息并退出
-W, --width=NUM
    使用 -y 选项采用列格式输出时，指定栏宽。缺省为 130
-w, --ignore-all-space
    在比较行的时候忽略空白符
-y, --side-by-side
    使用并格式输出两列
 -Z, --ignore-trailing-space
 	忽略行尾的空白符
```
## 4.常用示例
给定测试文件 file1 和 file2，其内容为[十二生肖](https://baike.baidu.com/item/%E5%8D%81%E4%BA%8C%E7%94%9F%E8%82%96/48593?fr=aladdin)中动物的英文。
file1 内容：
```
mouse
cattle
tiger
rabbit
dragon
snake
horse
sheep
monkey
chicken
dog
pig
```
file2 内容：
```
mouse
cattle
tiger
        rabbit
dragon
snake
h orse
sheeps
monkey
chicken
```
（1）比较两个文件的异同，使用正常格式输出。
```
diff file1 file2
4c4
< rabbit
---
> 	rabbit
7,8c7,8
< horse
< sheep
---
> h orse
> sheeps
11,12d10
< dog
< pig
```
diff 的正常输出格式有三种提示：
```
a - add
c - change
d - delete 
```
因此可以看出，上面的输出中 3c3 和 7,8c7,8 表示两者在 3、7 和 8 行内容有所不同；11,12d10 表示后者比前者少了 11 和 12 行。

特殊字符 < 表示该行属于第一个文件，> 表示该行属于第二个文件，--- 为分隔符。

（2）比较两个文件的异同，使用并列格式输出，并指定列宽为 50。
```
diff -y -W50 file1 file2
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200215233201533.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70)
其中特殊字符的含义如下：
```
| 表示前后 2 个文件内容有不同
< 表示后面文件比前面文件少了 1 行内容
> 表示后面文件比前面文件多了 1 行内容
```
（3）比较两个文件的异同，使用上下文格式输出，并只显示异行处上下各一行上下文。
```
diff -C1 file1 file2
*** file1	Sat Feb 15 22:24:46 2020
--- file2	Sat Feb 15 22:29:26 2020
***************
*** 3,12 ****
  tiger
! rabbit
  dragon
  snake
! horse
! sheep
  monkey
  chicken
- dog
- pig
--- 3,10 ----
  tiger
! 	rabbit
  dragon
  snake
! h orse
! sheeps
  monkey
  chicken
```
这种方式在开头两行作了比较文件的说明，这里有三种特殊字符：
```
-	出现在前者，表示后者比前者少一行
+	出现在后者，表示后者比前者多一行
!	出现在两者，表示有差别的行
```
（4）比较两个文件的异同，使用合并格式输出，并只显示异行处上下各一行上下文。
```
diff -U1 file1 file2
--- file1	2020-02-15 22:24:46.522867000 +0800
+++ file2	2020-02-15 22:29:26.686867000 +0800
@@ -3,10 +3,8 @@
 tiger
-rabbit
+	rabbit
 dragon
 snake
-horse
-sheep
+h orse
+sheeps
 monkey
 chicken
-dog
-pig
```
第一部分，也是文件的基本信息。--- 表示第一个文件，+++ 表示第二个文件。
第二部分，@@包围的内容，其中 -3,10 表示输出的内容属于第一个文件的 3 至 10 行，+3,8 表示输出的内容属于第二个文件的 3 至 8 行。
第三部分，为比较后合并的内容。减号 - 表示后者比前者少了该行，加号表示后者比前者多了该行。

（5）比较时忽略空白字符（Tab、空格），使用正常格式输出。
```
diff -w file1 file2
8c8
< sheep
---
> sheeps
11,12d10
< dog
< pig
```
可以发现，后者包含 Tab 的 rabbit 行和空格的 horse 行与前者比较时属于相同行。

（6）比较文件夹中同名文件的不同，使用正常格式输出。
```
ll dir1
total 4
-rw-r--r-- 1 root root  0 Feb 16 00:24 a.txt
-rw-r--r-- 1 root root 74 Feb 15 22:24 file

ll dir2
total 4
-rw-r--r-- 1 root root  0 Feb 16 00:24 b.txt
-rw-r--r-- 1 root root 69 Feb 15 22:29 file

diff dir1 dir2
Only in dir1: a.txt
Only in dir2: b.txt
diff dir1/file dir2/file
4c4
< rabbit
---
> 	rabbit
7,8c7,8
< horse
< sheep
---
> h orse
> sheeps
11,12d10
< dog
< pig
```

---

## 参考文献
[diff(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/diff.1.html)

[每天一个Linux命令目录](https://www.cnblogs.com/xqzt/p/5380086.html)

[每天一个Linux命令 | diff 命令](https://www.cnblogs.com/peida/archive/2012/12/12/2814048.html)

[Linux 命令手册 | diff 命令](http://linux.51yip.com/search/diff)

<Vssue title="diff" />