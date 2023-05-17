## 1.命令简介

set 用于设置 Shell 特性或查看 Shell 变量。

使用 set 可以查看和修改 Shell 环境的运行参数，定制 Shell 脚本的运行环境。符号"+“和”-"的作用分别是打开和关闭指定模式。

注意：

1. 如果命令行下不带任何参数运行 set，会显示所有 Shell 变量和函数。
2. set 不能用来定义变量，定义变量请使用“变量名=值”的形式。

## 2.命令格式
```shell
set [--abefhkmnptuvxBCEHPT] [-o option-name] [arg ...]
set [+abefhkmnptuvxBCEHPT] [+o option-name] [arg ...]
```

## 3.选项说明
```shell
-a
	标示已修改的变量，以供输出至环境变量。
-b
	使被中止的后台程序立刻回报执行状态。
-C
	转向所产生的文件无法覆盖已存在的文件。
-d
	Shell 预设会用杂凑表记忆使用过的指令，以加速指令的执行。使用 -d 参数可取消。
-e
	若指令传回值不等于0，则立即退出 Shell。
-f
	取消使用通配符。
-h
	自动记录函数所在位置。
-H
	Shell 可利用”!”加<指令编号>的方式来执行 history 中记录的指令。
-k
	指令所给的参数都会被视为此指令的环境变量。
-l
	记录 for 循环的变量名称。
-m
	使用监视模式。
-n
	只读取指令，而不实际执行。
-o [option-name]
	通过选项名称完成对 Shell 执行环境的设置。如果未执行选项名称，则显示所有配置情况。
-p
	启动优先顺序模式。
-P
	启动 -P 参数后，执行指令时，会以实际的文件或目录来取代符号链接。
-t
	执行完随后的指令，即退出 Shell。
-u
	当执行时使用到未定义过的变量，则显示错误信息。
-v
	显示 Shell 所读取的输入值。
-x
	执行指令时，会先显示该指令及其所有参数。
```

## 4.常用示例
（1）无参执行 set 查看所有 Shell 变量和函数。
```shell
foo="foo"

set | grep foo
foo=foo
```

（2）查看当前 Shell 执行环境的设置情况。
```shell
set -o
allexport      	off
braceexpand    	on
emacs          	on
errexit        	off
errtrace       	off
functrace      	off
hashall        	on
histexpand     	on
history        	on
ignoreeof      	off
interactive-comments	on
keyword        	off
monitor        	on
noclobber      	off
noexec         	off
noglob         	off
nolog          	off
notify         	off
nounset        	off
onecmd         	off
physical       	off
pipefail       	off
posix          	off
privileged     	off
verbose        	off
vi             	off
xtrace         	off
```

（3）当执行 Shell 脚本时使用到未定义过的变量，则显示错误信息。

执行脚本的时候，如果遇到不存在的变量，Bash 默认忽略它。
```shell
#!/usr/bin/bash

echo $a
echo bar
```
上面代码中，$a 是一个不存在的变量。执行结果如下。
```shell
bash script.sh

bar
```
可以看到，`echo $a`输出了一个空行，Bash 忽略了不存在的`$a`，然后继续执行`echo bar`。

大多数情况下，这不是开发者想要的行为，遇到变量不存在，脚本应该报错，而不是一声不响地往下执行。

`set -u`就用来改变这种行为。脚本在头部加上它，遇到不存在的变量就会报错，并停止执行。
```shell
#!/usr/bin/bash
set -u

echo $a
echo bar
```
运行结果如下。
```shell
bash script.sh
bash: script.sh:行4: a: 未绑定的变量
```
可以看到，脚本报错了，并且不再执行后面的语句。

-u 还有另一种写法 -o nounset，两者是等价的。
```shell
set -o nounset
```
（4）脚本执行时打印出命令。

默认情况下，脚本执行后，屏幕只显示运行结果，没有其他内容。如果多个命令连续执行，它们的运行结果就会连续输出。有时会分不清，某一段内容是什么命令产生的。

`set -x`用来在运行结果之前，先输出执行的那一行命令。
```shell
#!/usr/bin/bash
set -x

echo bar
```
运行结果如下。
```shell
bash script.sh
+ echo bar
bar
```
可以看到，执行echo bar之前，该命令会先打印出来，行首以+表示。这对于调试复杂的脚本是很有用的。

`-x` 还有另一种写法 `-o xtrace`。
```shell
set -o xtrace
```

## 5.选项名
执行环境的不同配置有对应的名称，一般与 set 选项也有对应的关系。
选项名|选项|说明
:---|:---|:---
allexport 	|-a 	|从这个选项中被设置开始就自动标明要输出的新变量或修改过的变量，直至选项被复位 
braceexpand 	|-B	|打开花括号扩展，它是一个默认设置 
emacs |N/A|	使用emacs内置编辑器进行命令行编辑，是一个默认设置 
errexit	|-e 	|当命令返回一个非零退出状态（失败）时退出。读取初始化文件时不设置 
histexpand |	-H |	执行历史替换时打开!和!!扩展，是一个默认设置 
history |	N/A	|打开命令行历史、默认为打开 
ignoreeof	 |N/A |禁止用EOF(Ctrl+D)键退出shell。必须键入exit才能退出。等价于设置shell变量IGNOREEOF=10 
keyword |	-k | 	将关键字参数放到命令的环境中 
interactive-comments	 |N/A|	对于交互式shell，把#符后面的文本作为注释 
monitor	|-m |	设置作业控制 
noclobber|	-C |	防止文件在重定向时被重写 
noexec	|-n |	读命令，但不执行。用来检查脚本的语法。交互式运行时不开启 
noglob 	|-d |	禁止用路径名扩展。即关闭通配符 
notify	|-b 	|后台作业完成时通知用户 
nounset	|-u  	|扩展一个未设置的变量时显示一个错误信息 
onecmd|	-t| 	在读取和执行命令后退出 
physical	|-P|  	设置时，在键入cd或pwd禁止符号链接。用物理目录代替 
privileged	|-p |	设置后，shell不读取.profile或ENV文件，且不从环境继承shell函数，将自动为setuid脚本开启特权 
verbose 	|-v |	为调试打开verbose模式 
vi	 |N/A|	使用vi内置编辑器进行命令行编辑 
xtrace|	-x |	为调试打开echo模式

---
## 参考文献
[bash(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/bash.1.html)

[Bash 脚本set 命令教程- 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2017/11/bash-set.html)