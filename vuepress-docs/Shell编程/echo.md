## 1.命令简介
echo 显示一行文本。

echo 可用于打印 Shell 变量的值或直接输出指定字符串。

## 2.命令格式
```
echo [SHORT-OPTION]... [STRING]...
echo LONG-OPTION
```

## 3.选项说明
```
-n
	输出时不在行尾添加换行符。
-e
	使反斜杠的转义功能生效。
-E
	禁用反斜杠的转义功能，为默认选项。
--help
	显示帮助信息并退出。
--version
	显示版本信息并退出。
```
使用 -e 选项时，若字符串中出现以下字符，则特别加以处理，而不会将它当成一般文字输出：
```
\\：反斜杠；
\a：发出警告声；
\b：删除前一个字符；
\c：截断不输出\c后面的内容；
\f：换行，但光标仍旧停留在原来的位置；
\n：换行且光标移至行首；
\r：光标移至行首，但不换行；
\t：插入tab；
\v:与\f相同；
\nnn：插入nnn（八进制）所代表的ASCII字符；
\xHH：插入HH（十六进制）所代表的ASCII字符；
```

## 4.常用示例
（1）不换行输出。

echo 默认换行输出，使echo不换行输出有两种方法。

**方法一：** 使用命令选项-n禁止输出换行符。
```
echo -n what you want to output
```
**方法二：** 使用命令选项 -e 让 echo 识别转义字符 \c，echo 默认是不识别转义字符的。转义字符 \c 使用 man echo 查看 echo 的使用手册，其意思是 produce no further output，表示截断不输出 \c 后面的内容。
```shell
echo -e lalalala\cend #输出：lalalala
```
（2）使用 echo 打印带有颜色的字体。

Linux 终端下输出带颜色的文字只需在文字前面添加如下格式：
```
\033[显示方式;前景色;背景色m
```
其中 \033 是 ESC 健的八进制，`\033[`即告诉终端后面是设置颜色的参数，显示方式，前景色，背景色均是数字。

数字含义如下：
|显示方式|意义|
|---|---|
|0|终端默认设置|
|1|高亮显示|
|4|使用下划线|
|5|闪烁|
|7|反白显示|
|8|不可见|

颜色数字代号如下：

|前景色|背景色|颜色|
|---|---|---|
|30|40|黑色|
|31|41|红色|
|32|42|绿色|
|33|43|黃色|
|34|44|蓝色|
|35|45|紫红色|
|36|46|青蓝色|
|37|47|白色|

（a）显示红色字体：
```
echo -e "\e[1;31mThis is red text\e[0m"
```
输出：

<font color=#ff0000> This is red text </font>

其中，`\e[0m`表示恢复终端默认设置。

（b）显示绿色背景字体：
```
echo -e "\e[1;42mGreed Background\e[0m" Greed Background
```
输出：

![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcxMTIyMDAzMzMyNjg2?x-oss-process=image/format,png)

（c）文字闪动。使用前景色31（红色），背景色42（绿色）闪动：
```
echo -e "\033[5;31;42mMySQL Server Stop...\033[0m"
```

---
## 参考文献
[echo(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/echo.1.html)

[echo命令 - Linux命令大全](http://man.linuxde.net/echo)

[使用echo输出带颜色的字体](https://www.cnblogs.com/linusflow/p/7399761.html)
