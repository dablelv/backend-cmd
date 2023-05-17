## 1.命令简介
bc（Binary Calculator）用于任意精度的计算，语法类似于 C 语言。Bash 内置了对整数四则运算的支持，但是并不支持浮点运算，而 bc 命令可以很方便地进行浮点运算和整数运算。

本文描述的 GNU 版本超出了传统 bc 的实现和 POSIX 标准。在使用扩展功能时，可以使用命令行选项打印警告或拒绝使用。

## 2.命令格式
```
bc [-hlwsqv] [long-options] [<file>...]
```

## 3.选项说明
```
-h, --help
	显示帮助信息并退出
-i, --interactive
	强制进入交互式模式
-l, --mathlib
	定义使用的标准数学库
-w, --warn
	对 POSIX bc 的扩展给出警告信息
-s, --standard
	完全使用 POSIX 版本的 bc 功能
-q, --quiet
	不打印正常的 GNU bc 环境信息
-v, --version
	打印 bc 版本与版权后退出
```

## 4.特殊变量
bc 在运算过程中将数值存储在两种类型的变量中，简单变量和数组。两种变量均使用字母开头后跟字母、数字或下划线的命名方式且全部小写。其中有四个特殊变量：
```
scale	定义某些操作如何使用小数点后的数字，默认值为 0
ibase	定义输入数的基数，默认为十进制数
obase	定义输出数的基数，默认为十进制数
last	表示最后的输出值
```

## 5.注释
bc 中的块注释使用`/* */`，行注释使用 #。

## 6.表达式
表达式的输入值可以是 2 到 16 进制的数值，数值的基数由特殊变量 ibase 决定。如果数值中包含字符 A-F，则必须使用大写，因为小写表示变量名。

在下面表达式的描述中，EXPR 指完整表达式，VAR 指简单变量或数组变量。简单变量只是一个名称，数组变量被指定为 NAME[EXPR]。

除非特别提到，结果的精度是表达式中最大的精度。
```
基本运算：
- EXPR
	相反数
++ VAR
	自增 1
-- VAR
	自减 1
VAR ++
	表达式的结果是变量的值，然后变量自增 1
VAR --
	表达式的结果是变量的值，然后变量自增 1
EXPR + EXPR
	两个表达式相加
EXPR - EXPR
	两个表达式相减
EXPR * EXPR
	两个表达式相乘
EXPR / EXPR
	两个表达式相除。结果的精度由特殊变量 scale 确定
EXPR % EXPR
	两个表达式取余
EXPR ^ EXPR
	取幂。第二个表达式 EXPR 必须是整数
( EXPR )
	这将更改标准优先级以强制执行表达式的计算
VAR = EXPR
	将表达式的结果赋给变量 VAR
VAR <OP>= EXPR
	这相当于 var = var EXPR

关系运算：
EXPR1 < EXPR2
EXPR1 <= EXPR2
EXPR1 > EXPR2
EXPR1 >= EXPR2
EXPR1 == EXPR2
EXPR1 != EXPR2

逻辑运算：
!EXPR
EXPR && EXPR
EXPR || EXPR
```

以上表达式涉及的运算符优先级由低到高依次为：
```
||			左结合
&&			左结合
!			非结合的
关系运算符	左结合
赋值运算符	由结合
+, -		左结合
*, /, %		左结合
^			右结合
取反运算符	非结合的
++, --		非结合的
```
以上运算符优先级与 C 语言有些出入，使用时需要注意。比如表达式 a = 3 < 5 在 C 语言中 a 的值为 0，在 bc 中，因为 = 的优先级高于 <，所以 a 的值为 3。

bc 中提供了一些特殊的表达式，这些与用户定义的函数和标准函数有关，下文函数一节将会详述。

## 7.语句
bc 的语句使用分号和换行符进行分隔，下面将介绍 bc 中常用的语句。注意，中括号 [] 中的内容是可选的。
```
EXPRESSION
	表达式分为赋值表达式与非赋值表达式，如果表达式不是赋值语句，则计算表达式并将其结果打印到输出
STRING
	使用双引号包围的内容被视为字符串。字符串可以包含特殊字符，使用反斜杠表示，\a 响铃，\b 退格，\f 换页，\n 换行，\r 回车，\q 双引号，\t 制表符，\\ 反斜杠
print LIST
	使用 print 语句进行输出。LIST 是逗号分隔的字符串或者表达式
{ STATEMENT_LIST }
	这是个复合语句，它允许将多个语句组合在一起执行
if ( EXPRESSION ) STATEMENT1 [else STATEMENT2]
	if 条件语句。如果表达式 EXPRESSION 结果非 0，则执行语句 STATEMENT1，否则执行 STATEMENT2
while ( EXPRESSION ) STATEMENT
	while 循环语句。如果表达式 EXPRESSION 结果非 0，则循环执行语句
for ( [EXPRESSION1] ; [EXPRESSION2] ; [EXPRESSION3] ) STATEMENT
	for 循环语句
break
	用于退出最近一层的 while 或 for 循环
continue
	用于最近一层的 while 或 for 循环提前进入下一轮循环
halt
	结束 bc
return
	从函数中返回 0
return ( EXPRESSION )
	从函数返回表达式 EXPRESSION 的值
limits
	打印 bc 的限制
quit
	结束 bc
warranty
	打印授权注意事项
```

## 8.函数
bc 支持函数，定义形式如下：
```
define [void] NAME ( PARAMETERS ) {
	AUTO_LIST   STATEMENT_LIST }
```
其中 关键字 void 表示函数无返回值，NAME 为函数名，PARAMETERS 为函数参数，AUTO_LIST 为函数内部使用 auto 关键字申明的局部变量，STATEMENT_LIST 为函数 bc 语句。

函数调用形式：
```
NAME(PARAMETERS)
```

常用的内置函数有：
```
length ( EXPRESSION )
	数值的有效数字的个数
read ()
	从标准输入读取输入
scale ( EXPRESSION )
	数值小数点后的数字的个数
sqrt ( EXPRESSION )
	求平方根。如果 EXPRESSION 是一个负数，则引发运行时错误
```

如果使用 -l 选项调用 bc，则会预加载一个数学库，并将默认精度设置为 20。数学库定义了以下函数：
```
s (x)
	求正弦值 sin(x)，x 的单位是弧度
c (x)
	求余弦值 cos()，x 的单位是弧度
a (x)
	x 的反正切，反正切返回弧度
l (x)
	x 的自然对数
e (x)
	指数函数，求自然 e 的 x 次幂
j (n,x)
	x 的整数阶 n 的贝塞尔函数
```

## 9.常用示例
（1）执行浮点运算。
```
echo "3.141592653 * 3" | bc
9.424777959
```

（2）指定计算结果的精度。
```
echo "scale = 2; 3.0/8" | bc
.37

# 输出小数点前的 0
echo 'scale = 2; a = 3.0/8; if (length(a) == scale(a)) print 0; print a,"\n"' | bc
0.37
```

（3）进制转换。如将二进制转换为十进制。
```
echo "obase=10;ibase=2;00001111" | bc
15
```

（4）幂运算。
```
echo "9^2" | bc
81
```

（5）调用内置函数 sqrt() 计算平方根。
```
echo "sqrt(16)" | bc
4
```

（6）交互式进行数学运算。
```
bc
9+9
18
9*9
81
sqrt(81)
9
quit
```

---
## 参考文献
[bc(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/bc.1p.html)

[bc - GNU Project - Free Software Foundation](https://www.gnu.org/software/bc/)

[【Linux】一步一步学Linux——bc命令(233)](https://blog.csdn.net/dengjin20104042056/article/details/101051619)
