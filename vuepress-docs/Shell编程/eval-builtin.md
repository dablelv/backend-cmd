## 1.命令简介
eval（evaluate）通过连接参数构造命令并执行，为内建命令。

使用空格分隔每个参数，如果参数中含有变量，则替换为变量值，然后再将构造的命令交由 Shell 解释执行。它通常用于动态生成和执行命令，或者将字符串解释为可执行的 Shell 代码。

## 2.命令格式
```shell
eval [ARG...]
```
eval 的返回值是其后面命令的退出状态。如果没有参数或只有空参数，eval 返回 0。

## 3.选项说明
None。

## 4.常用示例
（1）回显简单变量。
```shell
NAME=foo
echo $NAME
foo

# echo 前添加 eval 也可以
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

使用特殊字符 `$#` 表示传递给脚本或函数的参数个数，使用`$n`获取参数，n 为数字，`$1` 表示第一个参数，`$2` 表示第二个参数，所以`$$#`表示最后一个参数。
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

<Vssue title="eval-builtin" />