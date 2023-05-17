## 1.命令简介
expr（expression） 命令用于计算表达式的值。

expr 支持关系运算、算数运算、字符串匹配、截取、获取长度等相关运算。只支持整数和字符串，不支持浮点数。若涉及浮点数的运算，可使用 bc 命令。

## 2.命令格式
```
expr EXPRESSION
expr OPTION
```

## 3.选项说明
```
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```
## 4.表达式说明
```
ARG1 | ARG2
	若 ARG1 的值不为 0 或者不为空，则返回 ARG1，否则返回 ARG2
ARG1 & ARG2
	若两边的值都不为 0 或都不为空，则返回 ARG1，否则返回 0
ARG1 < ARG2
	ARG1 小于 ARG2 返回 1 否则返回 0
ARG1 <= ARG2
	ARG1 小于或等于 ARG2 返回 1 否则返回 0
ARG1 = ARG2
	ARG1 等于 ARG2 返回 1 否则返回 0
ARG1 != ARG2
	ARG1 不等于 ARG2 返回 1 否则返回 0
ARG1 >= ARG2
	ARG1 大于或等于 ARG2 返回 1 否则返回 0
ARG1 > ARG2
	ARG1 大于 ARG2 返回 1 否则返回 0
ARG1 + ARG2
	计算 ARG1 与 ARG2 相加之和
ARG1 - ARG2
	计算 ARG1 与ARG2 相减之差
ARG1 * ARG2
	计算 ARG1 与ARG2 相乘之积
ARG1 / ARG2
	计算 ARG1 与 ARG2 相除之商，向下转换成整数
ARG1 % ARG2
	计算 ARG1 与ARG2 相除取余
STRING : REGEXP
	 执行模式匹配。两端参数会转换为字符串格式，且第二个参数被视为正则表达式(GNU基本正则)，它默认会隐含前缀"^"。随后将第一个参数和正则模式做匹配。如果匹配成功，且 REGEX 使用了 \( 和 \)，则返回匹配到的内容，如果未使用 \( 和 \)，则返回匹配的字符数。否则返回为 0
match STRING REGEXP
	等于 STRING : REGEXP
substr STRING POS LENGTH
	返回 STRING 中从 POS（从 1 开始） 开始长度最大为 LENGTH 的子串。如果 POS 或 LENGTH 为负数、0 或非数值，则返回空字符串
index STRING CHARS
	CHARS 中任意单个字符在 STRING 中最前面的字符位置。如果在 STRING 中完全不存在 CHARS 中的字符，则返回 0
length STRING
	字符串的长度
+ TOKEN
	将 TOKEN 解析为普通字符串，即使 TOKEN 是像 match 或操作符 / 一样的关键字
( EXPRESSION )
	表达式可以使用一对小括号括起来。注意表达式与括号间需要空格
```
注意：
（1）很多操作符需要进行转义，比如大于号在 Shell 中用于重定向，使用大于号时需要转义 \>；
（2）如果两个参数都是数字，那么比较就是算术运算，否则就是字典序。

## 5.常用示例
（1）整数的算数运算。
```
expr 1 + 1
2

expr 1 - 1
0

expr 1 * 1
1

expr 1 / 2
0

expr 1 % 2
1
```

（2）整数的关系运算。
```
expr 1 \< 1
0

expr 1 \<= 1
1

expr 1 \> 1
0

expr 1 \>= 1
1

expr 1 = 1
1

expr 1 != 1
```

（3）字符串的关系运算。
```
expr "abc" \< "acb"
1
```

（4）执行模式匹配，获取匹配正则的字符串或其长度。
```
expr "abcd" : "\(.bc\)"
abc

# 不使用小括号获取匹配正则的字符串的长度
expr "abcd" : ".bc"
3
```

（5）截取子串。
```
expr substr "abcd" 1 3
abc
```

（6）获取字符串长度。
```
expr length "abcd"
4
```

（7）将 expr 中具有特殊意义的关键字强制解析为普通字符串并获取其长度。
```
expr length + "length"
6
```
（8）使用小括号，使得 expr 支持多个表达式。
```
expr 1 + \( 1 + 1 \)
3
```

---
## 参考文献
[expr(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/expr.1.html)

[SHELL脚本--expr命令全解](https://www.cnblogs.com/f-ck-need-u/p/7231832.html)
