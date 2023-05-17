## 1.命令简介
shopt 用于显示和设置 Shell 中的行为选项，通过修改这些选项来改变 Shell 行为。

如果没有选项，或者使用 -p 选项，将显示所有可设置的选项列表，并指示每个选项的状态。

## 2.命令格式
```shell
shopt [-pqsu] [-o] [optname ...]
```

## 3.选项说明
```shell
-o
	将 OPTNAME 值限制为 set 命令通过 -o 选项定义的值。
-p [optname ...]
	打印指定选项的状态。如果未指定选项，则打印所有的选项状态。
-q
	抑制输出。
-s [optname ...]
	启用指定选项。如未指定选项名，则显示所有已启用的选项。
-u [optname ...]
	禁用指定选项。如未指定选项名，则显示所有已禁用的选项。
```

## 4.常用示例
（1）显示当前所有可以设置的 Shell 选项。
```shell
shopt
autocd         	off
cdable_vars    	off
cdspell        	off
checkhash      	off
checkjobs      	off
checkwinsize   	on
cmdhist        	on
compat31       	off
compat32       	off
compat40       	off
compat41       	off
direxpand      	off
dirspell       	off
dotglob        	off
execfail       	off
expand_aliases 	on
extdebug       	off
extglob        	on
extquote       	on
failglob       	off
force_fignore  	on
globstar       	off
gnu_errfmt     	off
histappend     	on
histreedit     	off
histverify     	off
hostcomplete   	off
huponexit      	off
interactive_comments	on
lastpipe       	off
lithist        	off
login_shell    	on
mailwarn       	off
no_empty_cmd_completion	off
nocaseglob     	off
nocasematch    	off
nullglob       	off
progcomp       	on
promptvars     	on
restricted_shell	off
shift_verbose  	off
sourcepath     	on
syslog_history 	off
xpg_echo       	off
```
（2）使用 -p 选项显示当前所有可以设置的 Shell 选项及其状态。
```shell
shopt -p
shopt -u autocd
shopt -u cdable_vars
shopt -u cdspell
shopt -u checkhash
shopt -u checkjobs
shopt -s checkwinsize
shopt -s cmdhist
shopt -u compat31
shopt -u compat32
shopt -u compat40
shopt -u compat41
shopt -u direxpand
shopt -u dirspell
shopt -u dotglob
shopt -u execfail
shopt -s expand_aliases
shopt -u extdebug
shopt -s extglob
shopt -s extquote
shopt -u failglob
shopt -s force_fignore
shopt -u globstar
shopt -u gnu_errfmt
shopt -s histappend
shopt -u histreedit
shopt -u histverify
shopt -u hostcomplete
shopt -u huponexit
shopt -s interactive_comments
shopt -u lastpipe
shopt -u lithist
shopt -s login_shell
shopt -u mailwarn
shopt -u no_empty_cmd_completion
shopt -u nocaseglob
shopt -u nocasematch
shopt -u nullglob
shopt -s progcomp
shopt -s promptvars
shopt -u restricted_shell
shopt -u shift_verbose
shopt -s sourcepath
shopt -u syslog_history
shopt -u xpg_echo
```

（3）查看所有打开的配置选项。
```shell
shopt -s
checkwinsize   	on
cmdhist        	on
expand_aliases 	on
extglob        	on
extquote       	on
force_fignore  	on
histappend     	on
interactive_comments	on
login_shell    	on
progcomp       	on
promptvars     	on
sourcepath     	on
```
（4）查看所有关闭的配置选项。
```shell
shopt -u
autocd         	off
cdable_vars    	off
cdspell        	off
checkhash      	off
checkjobs      	off
compat31       	off
compat32       	off
compat40       	off
compat41       	off
direxpand      	off
dirspell       	off
dotglob        	off
execfail       	off
extdebug       	off
failglob       	off
globstar       	off
gnu_errfmt     	off
histreedit     	off
histverify     	off
hostcomplete   	off
huponexit      	off
lastpipe       	off
lithist        	off
mailwarn       	off
no_empty_cmd_completion	off
nocaseglob     	off
nocasematch    	off
nullglob       	off
restricted_shell	off
shift_verbose  	off
syslog_history 	off
xpg_echo       	off
```
（5）开启 cd 拼写检查。
```shell
shopt -s cdspell

shopt | grep cdspell
cdspell         on
```

（6）打印 cdspell 设置。
```shell
shopt -p cdspell
shopt -s cdspell
```
显示`shopt -s cdspell`，表明 cdspell 已开启。

（7）禁用 cdspell 检查。
```shell
shopt -u cdspell

shopt | grep cdspell
cdspell        	off
```
## 5.Shell 选项
**cdable_vars：**

如果给 cd 内置命令的参数不是一个目录，就假设它是一个变量名,变量的值是将要转换到的目录。

**cdspell：**

纠正 cd 命令中目录名的较小拼写错误。检查的错误包括颠倒顺序的字符,遗漏的字符以及重复的字符。如果找到一处需修改之处，正确的路径将打印出，命令将继续。只用于交互式Shell。

**checkhash：**

Bash 在试图执行一个命令前，先在哈希表中寻找，以确定命令是否存在。如果命令不存在,就执行正常的路径搜索。

**checkwinsize：**

bash 在每个命令后检查窗口大小，如果有必要,就更新 LINES 和 COLUMNS 的值。

**cmdhist：**

Bash试图将一个多行命令的所有行保存在同一个历史项中。这是的多行命令的重新编辑更方便。

**dotglob：**

Bash 在文件名扩展的结果中包括以点(.)开头的文件名。

**execfail：**

如果一个非交互式shell不能执行指定给 exec 内置命令作为参数的文件，它不会退出，如果 exec 失败，一个交互式 Shell 不会退出。

**expand_aliases：**

别名被扩展。缺省为打开。

**extglob：**

打开扩展的模式匹配特性(正常的表达式元字符来自 Korn Shell 的文件名扩展)。

**histappend：**

如果 readline 正被使用，用户有机会重新编辑一个失败的历史替换。

**histverify：**

如果设置，且 readline 正被使用，历史替换的结果不会立即传递给 Shell 解释器。而是将结果行装入 readline 编辑缓冲区中，允许进一步修改。

**hostcomplete：**

如果设置，且 readline 正被使用，当正在完成一个包含@的词时bash将试图执行主机名补全.缺省为打开。

**huponexit：**

如果设置，当一个交互式登录 Shell 退出时，Bash将发送一个SIGHUP(挂起信号)给所有的作业。

**interactive_comments：**

在一个交互式 Shell中。允许以 # 开头的词以及同一行中其他的字符被忽略。缺省为打开。

**lithist：**

如果打开,且cmdhist选项也打开，多行命令讲用嵌入的换行符保存到历史中,而无需在可能的地方用分号来分隔。

**mailwarn：**

如果设置，且 Bash 用来检查邮件的文件自从上次检查后已经被访问，将显示消息”The mail in mailfile has been read”。

**nocaseglob：**

如果设置，当执行文件名扩展时，Bash 在不区分大小写的方式下匹配文件名。

**nullglob：**

如果设置，Bash允许没有匹配任何文件的文件名模式扩展成一个空串，而不是他们本身。

**promptvars：**

如果设置，提示串在被扩展后再进行变量和参量扩展。缺省为打开。

**restricted_shell：**

如果 Shell 在受限模式下启动就设置这个选项。该值不能被改变。当执行启动文件时不能复位该选项，允许启动文件发现 Shell 是否受限。

**shift_verbose：**

如果该选项设置，当移动计数超出位置参量个数时，shift内置命令将打印一个错误消息。

**sourcepath：**

如果设置，source 内置命令使用 PATH 的值来寻找作为参数提供的文件的目录。缺省为打开。

---
## 参考文献
[shopt(1) - Linux manual page - linux.org](https://www.linux.org/docs/man1/shopt.html)

[【Linux】一步一步学Linux——shopt命令(214) - CSDN](https://blog.csdn.net/dengjin20104042056/article/details/100566309)
