## 1.功能简介
let 命令是 Bash 中用于计算的工具，用于执行一个或多个表达式，变量计算中不需要加上 $ 来表示变量。如果表达式中包含了空格或其他特殊字符，则必须引起来。

## 2.命令格式
```shell
let arg [arg ...]
```
每个参数都是要计算的算术表达式。

## 3.选项说明
```shell
id++, id--      	variable post-increment, post-decrement
++id, --id      	variable pre-increment, pre-decrement
-, +            	unary minus, plus
!, ~            	logical and bitwise negation
**              	exponentiation
*, /, %         	multiplication, division, remainder
+, -            	addition, subtraction
<<, >>          	left and right bitwise shifts
<=, >=, <, >    	comparison
==, !=          	equality, inequality
&               	bitwise AND
^               	bitwise XOR
|               	bitwise OR
&&              	logical AND
||              	logical OR
expr ? expr : expr	conditional operator
=, *=, /=, %=, +=, -=, <<=, >>=, &=, ^=, |=      assignment
```

# 4.常用示例
（1）加法运算。
```shell
let a=1+1

echo $a
2
```
（2）自增运算。
```shell
let a++

echo $a
3
```
（3）减法运算。
```shell
let a=2-1

echo $a
1
```

（4）自减运算。
```shell
let a--

echo $a
0
```

（5）幂运算。
```shell
let a=2
let a=a**10

echo $a
1024
```

（6）逻辑运算。
```shell
let a=1||0

echo $a
1
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

<Vssue title="let-builtin" />