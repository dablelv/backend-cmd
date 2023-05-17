## 1.命令简介
hexdump 以 ASCII、十进制、十六进制或八进制显示文件内容。

## 2.命令格式
```
hexdump [options] FILE [...]
```

## 3.选项说明
```
-b
	单字节八进制显示。
 -c
 	单字节字符显示。
 -C
 	规范化“十六进制+ASCII”显示。
 -d
 	两字节十进制显示。
 -e <format_string>
	以指定的格式字符串显示数据。
 -f <format_file>
	指定包含一个或多个换行分隔格式字符串的文件。内容使用 # 号开头表示注释。
-n <length>
	只解释输入的指定长度个字节。
 -o
	两字节八进制显示。
 -s <offset>
 	跳过开头指定长度个字节。
 -v
 	显示时不压缩相似的行。-v 选项使 hextump 显示所有输入数据。没有 -v 选项，任何数量的输出行组，如果与前一组相同，将被替换为由一个星号构成的行。
 -x
 	两字节十六进制显示。
```

## 4.格式
### 4.1 格式字符串
格式字符串可以包含任意数量的格式单元，由空格分隔。格式单元最多包含三项：迭代计数、字节计数和格式。

迭代计数是可选的正整数，缺省为1，表示每种格式应用的次数。

字节计数是可选的正整数，表示每次按照指定格式迭代要解释的字节数。

如果指定了迭代计数和/或字节计数，则必须使用单斜杠放在迭代计数之后和/或字节计数之前消除歧义。斜杠前后的任何空格都将被忽略。

格式是必需的，必须用双引号括起来。它被解释为 fprintf 样式的格式字符串（参见 [fprintf(3)](https://man7.org/linux/man-pages/man3/fprintf.3.html)），但以下情况除外：

- 星号（*）不能用作字段宽度或精度。
- 每个 s 转换字符都需要字节计数或字段精度（不同于 fprintf(3) 默认值，如果精度未指定，则打印整个字符串）。
- 不支持转换字符 h、l、n、p 和 q。
- 支持 C 标准中描述的单字符转义序列。

字符|转义
---|---
NULL|\0
\<alert character>|\a
\<backspace>| \b
\<form-feed>| \f
\<newline> |\n
\<carriage return> | \r
\<tab>| \t
\<vertical tab> |\v

### 4.2 转换字符串
hexdump 还支持以下额外的转换字符串用于格式字符串中。
```
_a[dox]
	标记下一个输出字节的偏移量，在输入文件中累积。d、o、x 分别以十进制、八进制和十六进制显示。
_A[dox]
	与 _a 转换字符串相同，只是在处理所有输入数据后只执行一次。
_c
	在默认字符集中输出字符。非打印字符以三个字符、零填充八进制显示，但可通过标准转义符号（见上文）表示的字符除外。
_p
	默认字符集中输出字符。非打印字符显示为单个点号 “.”。
_u
	输出美国 ASCII 字符，控制字符使用以下小写名称显示除外。大于 0xff 的字符显示为十六进制字符串。
```
控制字符如下：
码值|名称|全称
---|---|---
0x00 | nul |null
0x01 | soh | start of headline
0x02 | stx | start of text
0x03 | etx| end of text
0x04 | eot | end of transmission
0x05 | enq | enquiry
0x06 | ack | acknowledge
0x07 | bel | bell
0x08 | bs | backspace
0x09 | ht | horizontal
0x0A | lf | line feed
0x0B | vt  | vertical tab
0x0C | ff | form feed
0x0D | cr | carriage return
0x0E | so | shift out
0x0F | si | shift in
0x10 | dle | data link escape
0x11 | dc1 | device control 1
0x12 |dc2 | device control 2
0x13| dc3 | device control 3
0x14 |dc4 | device control 3
0x15 |nak | negative acknowledgement
0x16 | syn | synchronous idle
0x17 | etb | 	end of transmission block
0x18 | can | cancel
0x19 | em | end of medium
0x1A | sub | substitute
0x1b | esc | escape
0x1C | fs | file separator
0x1D | gs | group separator
0x1E | rs | record separator
0x1F| us | unit separator
0x7F|del | delete

## 5.常用示例
假设有一个名为 txt 内容为 lvlv 的文本内容。

（1）不指定选项缺省以十六进制显示指定文件的内容。
```shell
hexdump txt
0000000 766c 766c 000a                         
0000005
```
其中第一列为偏移量。

（2）单字节字符展示。
```shell
hexdump -c txt
0000000   l   v   l   v  \n                                            
0000005
```

（3）输出十六进制和对应字符。
```shell
hexdump -C txt
00000000  6c 76 6c 76 0a                                    |lvlv.|
00000005
```

（4）从指定偏移量开始输出。

比如偏移两个字节，跳过第一个 lv。
```shell
hexdump -s2 -C txt
00000002  6c 76 0a                                          |lv.|
00000005
```
（5）格式化输出并标记每个字节的偏移量。
```shell
hexdump -e'/1 "%_ad %02X\n"' txt
0 6C
1 76
2 6C
3 76
4 0A
```

---
## 参考文献
[hexdump(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/hexdump.1.html)
