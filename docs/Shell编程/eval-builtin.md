## 1.命令简介
eval 属 Shell 内建命令，通过连接参数构造命令。

使用空格分隔每个参数，构造的命令应由 Shell 读取和执行。

eval 会对后面的命令进行两遍扫描。如果第一遍扫描后，命令是个普通命令，则执行此命令；如果命令中含有变量的间接引用，则保证间接引用的语义。也就是说，eval 命令将会首先扫描命令行进行所有的置换，然后再执行该命令。

## 2.命令格式
```shell
eval [arg...]
```
eval 的返回值是其后面的命令退出状态。如果没有参数或只有空参数，eval 返回 0。

## 3.选项说明
None。

## 4.常用示例
（1）回显简单变量。
```shell
NAME=foo
echo $NAME
foo

eval echo $NAME
foo
```
（2）先替换变量再执行命令。
```shell
cat test.txt
Hello World!

command="cat test.txt"; echo $command
cat test.txt

eval $command
Hello World!
```
（3）获取传给脚本或函数的最后一个参数。

我们知道 Shell 中使用特殊字符 `$#` 可以获取传递给脚本或函数的参数个数，使用`$n`获取参数，n 为数字，`$1` 表示第一个参数，`$2` 表示第二个参数，所以`$$#`表示最后一个参数。
```shell
cat test.sh
#!/usr/bin/bash
echo \$$#
eval echo \$$#

./test.sh firstarg lastarg
$2
lastarg
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

[``和$()的区别及eval详解 - CSDN](https://blog.csdn.net/baidu_37964071/article/details/80930704)
