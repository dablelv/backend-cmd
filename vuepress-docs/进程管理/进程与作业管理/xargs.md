## 1.命令简介
xargs 从标准输入构建和执行命令行。

xargs 可以将 stdin 中以空格或换行符进行分隔的数据，形成以空格分隔的参数（arguments），传递给其他命令。因为以空格作为分隔符，所以有一些文件名或其他意义的字符串内含空格时，xargs 可能会误判。

之所以要用到 xargs，是因为很多命令不支持使用管道 | 传递参数。
```
find /sbin -perm +700 | ls -l         # 这个命令是错误，因为标准输入不能作为 ls 的参数
find /sbin -perm +700 | xargs ls -l   # 这样才是正确的
```
简单来说，xargs 的作用是给其他命令传递参数，是构建单行命令的重要组件之一。
## 2.命令格式
```
xargs [OPTIONS] [COMMAND]
```

## 3.选项说明
注意，长选项的强制性参数对于短选项也是强制的。
```
-0, --null
	如果输入的 stdin 含有特殊字符，例如反引号 `、反斜杠 \、空格等字符时，xargs 将它还原成一般字符。为默认选项
-a, --arg-file=FILE
	从指定的文件 FILE 中读取输入内容而不是从标准输入
-d, --delimiter=DEL
	指定 xargs 处理输入内容时的分隔符。xargs 处理输入内容默认是按空格和换行符作为分隔符，输出 arguments 时按空格分隔
-E EOF_STR
	EOF_STR 是 end of file string，表示输入的结束
-e, --eof[=EOF_STR]
	作用等同于 -E 选项，与 -E 选项不同时，该选项不符合 POSIX 标准且 EOF_STR 不是强制的。如果没有 EOF_STR 则表示输入没有结束符
-I REPLACE_STR
	将 xargs 输出的每一项参数单独赋值给后面的命令，参数需要用指定的替代字符串 REPLACE_STR 代替。REPLACE_STR 可以使用 {} $ @ 等符号，其主要作用是当 xargs command 后有多个参数时，调整参数位置。例如备份以 txt 为后缀的文件：find . -name "*.txt" | xargs -I {}  cp {} /tmp/{}.bak
-i, --replace[=REPLACE_STR]
	作用同 -I 选项，参数 REPLACE_STR 是可选的，缺省为 {}。建议使用 -I 选项，因为其符合 POSIX
-L MAX_LINES
	限定最大输入行数。隐含了 -x 选项
-l, --max-lines[=MAX_LINES]
	作用同 -L 选项，参数 MAX_LINES 是可选的，缺省为 1。建议使用 -L 选项，因为其符合 POSIX 标准
-n, --max-args=MAX_ARGS
	表示命令在执行的时候一次使用参数的最大个数
-o, --open-tty
	在执行命令之前，在子进程中重新打开stdin作为/dev/TTY。如果您希望xargs运行交互式应用程序，这是非常有用的
-P, --max-procs=MAX_PROCS
	每次运行最大进程；缺省值为 1。如果 MAX_PROCS 为 0，xargs 将一次运行尽可能多的进程。一般和 -n 或 -L 选项一起使用
-p, --interactive
	当每次执行一个 argument 的时候询问一次用户
--process-slot-var=NAME
	将指定的环境变量设置为每个正在运行的子进程中的唯一值。一旦子进程退出，将重用该值。例如，这可以用于初始负荷分配方案
-r, --no-run-if-empty
	当 xargs 的输入为空的时候则停止 xargs，不用再去执行后面的命令了。为默认选项
-s, --max-chars=MAX_CHARS
	命令行的最大字符数，指的是 xargs 后面那个命令的最大命令行字符数，包括命令、空格和换行符。每个参数单独传入 xargs 后面的命令
--show-limits
	显示操作系统对命令行长度的限制
-t， --verbose
	先打印命令到标准错误输出，然后再执行
-x, --exit
	配合 -s 使用，当命令行字符数大于 -s 指定的数值时，退出 xargs
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）将 Shell 的特殊字符反引号还原为一般字符。
```shell
echo '`0123`4 56789' | xargs -t echo
echo `0123`4 56789 
`0123`4 56789
```
如果直接进行如下操作，会报无法找到命令 01234 的错误，因为反引号在 Shell 中会将 01234 作为一个命令来执行，但是 01234 不是一个命令。-t 表示先打印命令，然后再执行。
```shell
echo `01234` 56789
-bash: 01234: command not found
56789
```

（2）设置 xargs 读入参数时的结束标识，以逗号结束。这里要注意结束标志必须要是单独的字段，即以空格或者换行符分隔的字段。
```shell
echo 01234 , 56789 | xargs -E ","
01234
```

（3）使用 rm、mv 等命令同时操作多个文件时，有时会报 "argument list too long" 参数列表过长的错误，此时可以使用 xargs 来解决。xargs 将标准输入的字符串分隔后，作为参数传递给后面的命令。例如，给当前目录的所有文件添加后缀名。
```shell
ls | xargs -t -i mv {} {}.bak

# 选择符合条件的文件
ls | grep -E "201701|201702|201703" | xargs -I {} mv {} {}.bak
```

（4）设置命令行的最大字符数。参数默认一个一个单独传入命令中执行。
```shell
echo "01234 56789" | xargs -t -s 11
echo 01234 
01234
echo 56789 
56789
```

（5）设置标准输入中每次多少行作为命令的参数，默认是将标准输入中所有行的归并到一行一次性传给命令执行。
```shell
echo -e "01234\n56789\n01234" | xargs -t -L 2 echo
echo 01234 56789 
01234 56789
echo 01234 
01234
```

（6）将文件内容以空格分隔合并为一行输出。
```shell
# 列出文件内容
cat test.txt
a b c d e
f g h i j 
k l m n o

# 多行输入合并为一行输出
cat test.txt | xargs
a b c d e f g h i j k l m n o
```

（7）与 ps、grep、awk 和 kill 结合，强制终止指定进程。
```shell
ps -ef | grep spp | awk '{printf "%s ",$2}' | xargs kill -9
```
`ps -ef|grep spp`用于查找包含 spp 的进程，`awk '{printf "%s ",$2,FNR}`将目标进程 ID 打印输出，`xargs kill -9`则将目标进程 ID 作为参数传递给`kill -9`用于杀死进程。

---
## 参考文献
[xargs(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/xargs.1.html)

[xargs(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/xargs.1p.html)

[Xargs用法详解 - CSDN](http://blog.csdn.net/zhangfn2011/article/details/6776925/)

[linux xargs详解 - CSDN](http://blog.csdn.net/hittata/article/details/8021500)
