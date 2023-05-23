### 1.命令简介

printf 格式化打印数据。

printf 与 C printf(3) 控制格式类似，具体也可以参考 printf(3) 的格式化控制字符。

## 2.命令格式
```
printf FORMAT [ARGUMENT]...
printf OPTION
```

## 3.选项说明
```shell
--help
	显示帮助信息。
--version
	显示版本信息。
```

FORMAT 格式部分和 C printf(3) 一样。
```shell
%b 相对应的参数被视为含有要被处理的转义序列之字符串。
%c ASCII 字符。显示相对应参数的第一个字符
%d, %i 十进制整数
%e, %E, %f 浮点格式。
%g %e或%f转换，看哪一个较短，则删除结尾的零。
%G %E或%f转换，看哪一个较短，则删除结尾的零。
%o 不带正负号的八进制值。
%s 字符串。
%u 不带正负号的十进制值。
%x 不带正负号的十六进制值，使用a至f表示10至15。
%X 不带正负号的十六进制值，使用A至F表示10至15。
%% 字面意义的%
```
printf 支持的转义字符。
```shell
\"	双引号。
\a	警告字符,通常为 ASCII 的 BEL 字符。
\b	后退。
\c	不显示输出结果中任何结尾的换行字符，而且任何留在参数里的字符、任何接下来的参数以及任何留在格式字符串中的字符都被忽略。
\f	换页。
\n	换行。
\r	回车。
\t	水平制表符。
\v	垂直制表符。
\\	反斜杠字符。
```

## 4.常用示例

（1）输出字符串。

```shell
printf "hello world\n"
hello world
```

（2）输出字符串不换行。
```shell
printf "hello world"
hello world
```

（3）格式控制输出。
```shell
printf "hello %s\n" world
hello world
```

（4）格式控制输出，并控制宽度。
```shell
printf "%-10s %-8s %-4s\n" 姓名 性别 "体重(kg)"
姓名     性别   体重(kg)

printf "%-10s %-8s %-4.2f\n" 杨过 男 68.6543
杨过     男      68.65
```
%-10s 指一个宽度为10个字符（-表示左对齐，没有则表示右对齐），任何字符都会被显示在10个字符宽的字符内，如果不足则自动以空格填充，超过也会将内容全部显示出来。

%-4.2f 指格式化为小数，其中 .2 指保留 2 位小数。

（5）格式控制字符串也可用单引号括住。
```shell
printf '%d %s\n' 1 "hello world"
1 hello world
```

（6）输出数字。
```shell
printf "%d %f %e\n" 1 1.000000001 1.000000001
1 1.000000 1.000000e+01
```
小数位如果太长（数字总长度超过 8） 将被截断，我们可以指定小数位数。
```shell
printf "%d %.10f %e\n" 1 1.000000001 1.000000001
1 1.0000000010 1.000000e+00
```

（7）输出百分比。对 % 进行转义即可。
```shell
printf "%d%%\n" 80
```

---

## 参考文献
[printf(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/printf.1.html)

<Vssue title="printf" />