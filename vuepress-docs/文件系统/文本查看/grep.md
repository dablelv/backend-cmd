## 1.命令简介
grep（Globally search a Regular Expression and Print）打印匹配模式的行。

grep 支持正则表达式，其功能是在给定的文件中查找一个指定格式或内容的字符串，并将匹配的字符串所在行打印出来。如果不指定任何文件或给定的文件名为连字符 -，则从标准输入设备读取文本，然后在这些文本中进行查找。

grep 家族包括 grep、egrep 和 fgrep，egrep 等同于 grep -E，fgrep 等同于 grep -F。 egrep 或 fgrep 的直接调用已被弃用，但提供这些调用是为了允许依赖它们的历史应用程序未经修改地运行。

## 2.命令格式
```shell
grep [OPTION...] PATTERNS [FILE...]
grep [OPTION...] -e PATTERN ... [FILE...]
grep [OPTION...] -f PATTERN_FILE ... [FILE...]
```
## 3.选项说明
注意，长选项的参数对于短选项也是必须的。

### 通用程序信息
```shell
--help
	显示帮助信息并退出。
-V, --version
	显示版本信息并退出。
```
### 模式语法
```shell
-E,--extended-regexp
	使用扩展正则表达式解释匹配模式。
-F, --fixed-strings
	将匹配模式看作固定字符串而不是正则表达式。
-G, --basic-regexp
	使用基本正则表达式解释匹配模式。这是缺省的。
-P, --perl-regexp
	将模式解释为 perl 兼容的正则表达式(PCRE)。这是实验性的，grep -P 可能会警告未实现的特性。
```

### 匹配控制
```shell
-e, --regexp=PATTERN
	匹配模式。如果使用此选项多次或与 -f（--file）选项组合使用，搜索给定的所有模式。此选项可用于保护以 “-” 开头的模式
-f, --file=FILE
	将匹配模式写在文件中，文件中一行内容对应一个匹配模式
-i, --ignore-case
	忽略字符大小写
-v, --invert-match
	反向选择，显示不包含匹配文本的所有行
-w, --word-regexp
	整个单词匹配才算匹配
-x, --line-regexp
	整行匹配才算匹配
-y
	过时的 -i 同义词
```
### 一般输出控制
```shell
-c, --count
	只输出匹配的行数，不是匹配字符串的个数
--color, --colour[=WHEN]
	将找到的关键词加上颜色显示。WHEN 可取值 never、always 或 auto
-L, --files-without-match
	不输出包含匹配模式文件的文件名
-l, --files-with-matches
	只输出包含匹配模式文件的文件名
-o, --only-matching
	只显示匹配的字符串，并以单独行输出。
-q, --quiet, --silent
	静默模式，不显示任何信息到标准输出
-s, --no-messages
	不显示不存在或无匹配文本的错误信息
```
### 输出行前缀控制
```shell
-b, --byte-offset
	在匹配的行之前，标示出该行第一个字符的位编号，即字符在文本中的字节偏移下标，包括换行符
-H, --with-filename
	查询多文件时显示文件名（默认选项）
-h, --no-filename
	查询多文件时不显示文件名
-n, --line-number
	显示匹配行及行号
-T, --initial-tab
	使用 Tab 使匹配行对齐
-u, --unix-byte-offsets
	以 Unix 样式进行字节偏移。使用该选项，使 grep 产生的结果与在 Unix 机器上相同，此选项必须与 -b 同时使用，否则没有效果，也必须要在 MS-DOS 和 MS-Windows 平台上使用
-Z, --null
	文件名与匹配行之间使用空字符。grep 默认会在每个输出前打印文件名，文件名与匹配行之间会有一个冒号隔开，-Z选项告诉grep不要使用冒号了，使用一个NUL字符
```
### 上下行控制
```shell
-A, --after-context=NUM
	后紧跟数字，为 after 之意。除了列出匹配字符串所在行之外，后续的 NUM 行也列出来
-B, --before-context=NUM
	后紧跟数字，为 before 之意，显示匹配行以及该行之前指定行数的内容
-, -C, --context=NUM
	显示匹配行以及该行上下指定行数的内容
```
### 文件与目录选择
```shell
-a, --text
	将 binary 文件以 text 文件的方式处理，等同于 --binary-files=text 选项。
-D, --devices=ACTION
	如果输入文件是设备，命名管道（FIFO）或套接字，则使用指定动作处理它。默认情况下，为读取操作（read），这意味着读取设备就像它们是普通文件。如果操作是跳过（skip），设备将被悄悄跳过。
-d, --directories=ACTION
	当指定要查找的是目录而非文件时，使用指定的操作处理。动作有：read（默认）像普通文件一样读取目录；skip：忽略指定目录；recurse：递归读取指定目录下的所有文件，此操作等同于-r选项。
-I
	忽略二进制文件。等同于 --binary-files=without-match
-R, -r, --recursive
	递归搜索给定目录下的所有文件。等价于 -d recurse。
```
## 4.正则表达式
正则表达式是描述一组字符串的模式。正则表达式的构造类似于算术表达式，通过使用各种运算符组合较小的表达式。

grep 理解三种不同版本的正则表达式语法：

- basic regular expression (BRE)
- extended regular expression (ERE)
- perl compatible regular expression (PCRE)

在 GNU grep 中，基本语法和扩展语法在可用功能上没有区别。在其他实现中，基本正则表达式就没有那么强大了。

在基本正则表达式中，元字符`? + { | ( )`失去了它们的特殊含义，需要使用反斜杠版本`\? \+ \{ \| \( \)`。

传统的 egrep 不支持 { 元字符，一些 egrep 实现支持 \{，因此可移植脚本应该避免在 grep -E 模式中使用 {，应该使用 [{] 来匹配文字 {。

GNU `grep -E`试图支持传统用法，假设 { 是一个无效的间隔规范的开始，那么它就不是特殊的。例如，命令`grep -E '{1'`搜索
对于两个字符的字符串`{1`，而不是在正则表达式中报告语法错误。POSIX 允许这种行为作为扩展，但是可移植脚本应该避免这种情况。

Perl 正则表达式提供了额外的功能，并在 [pcresyntax(3)](https://man7.org/linux/man-pages/man3/pcresyntax.3.html) 和 [pcrepattern(3)](https://man7.org/linux/man-pages/man3/pcrepattern.3.html) 中有文档说明，但可能不是在每个系统上都可用。
## 5.常用示例
（1）统计字段出现的次数。
```shell
grep -o [pattern] [finename...] | wc -l
```
选项 -o 只显示匹配的字符串，并以单独行输出。

wc -l 统计输入的行数。就可以知道这个要统计的字段出现的次数了。

假如有一个文件 txt 内容如下：

```
Hi my name is Bob.
```
如果想统计字母 m 出现的次数，那么用下面的命令可以实现。

```shell
grep -o "m" txt | wc -l
2
```

（2）搜索指定范围的数字。比如查询包含 540-600 的行。
```shell
grep '5[4-9][0-9]\|600' [filename...]

# 或
grep -E '5[4-9][0-9]|600' [filename...]
```
之所以竖杠 | 需要加上反斜杠进行转义，是因为竖杠 | 在 Shell 中是特殊字符，表示管道命令。可以使用 `-E` 选项显示指明为正则表达式，那么就不需要对竖杠 | 进行转义。

（3）递归搜索当前目录下的所有文件。
```shell
grep -r "lvlv" .
```

（4）显示所有以 d 开头的文件中包含test的行。
```shell
grep 'test' d*
```

（5）打印在 aa，bb，cc 文件中匹配 test 的行，并显示行号。
```shell
grep -n 'test' aa bb cc
```

（6）打印 aa 中包含有至少 5 个连续小写字符的字符串的所有行。
```shell
grep '[a-z]\{5\}' aa
```
这里必须使用双引号或者单引号将查找 pattern 包围。

单引号与双引号的区别主要有：
- 单引号是全引用，被单引号括起的内容不管是常量还是变量都不会发生替换。
- 双引号是部分引用，被双引号括起的内容常量还是常量，变量则会发生替换，替换成变量的内容。一般常量用单引号括起，如果含有变量则用双引号括起来。但是也有意外，比如查找特殊字符反斜杠使用：`grep '\' ./*`则会报`grep: Trailing backslash`错误，需要使用`grep '\\' ./*`才可以。

（7）统计文件中含有指定字符串的行数。
```shell
grep aaa file | wc -l
```
grep 可用于 Shell 脚本，因为 grep 通过返回一个状态值来说明搜索的状态，如果模板搜索成功，则返回 0，如果搜索不成功，则返回 1，如果搜索的文件不存在，则返回 2。我们利用这些返回值就可进行一些自动化的文本处理工作。

（8）使用多个条件的或查询。
```shell
# 方法一：使用符号 |。
grep "pattern1\|pattern2" filename

# 方法二：使用 -E 选项，用扩展正则表达式解释匹配模式。
grep -E "pattern1|pattern2" filename

# 方法三：使用 -e 选项指定多个匹配模式。
grep -E -e "pattern1" -e "pattern2" filename
```
在方法三中，可以使用 -e 选项来指定多个模式，这些模式之间的关系是或的关系。与此同时，还指定了 -E 选项，表示对模式的解释采用扩展正则表达式。

（9）使用多个条件的与查询。
```shell
# 使用管道命令
grep "pattern1"  filename | grep "pattern2"
```

---
## 参考文献
[grep(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/grep.1.html)

[Linux知其然且知所以然之grep命令](http://blog.csdn.net/u010009623/article/details/52117828)

<Vssue :title="$title" />
