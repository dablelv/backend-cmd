## 1.命令简介
more 是常用的文本文件阅读工具。

more 类似于 cat，不过以一页一页的形式显示，便于逐页阅读。一般文件过大时使用 more 浏览，文件较小时使用 cat。

more 一次显示一屏文本，满屏后停下来，并且在屏幕的底部出现一个提示信息，给出至今己显示的该文件的百分比：--More--(XX%)，可以使用交互式命令进行交互。最常用交互式的指令有：
- 回车键向下滚动一行。
- 空格键（Space）显示下一页。
- b 键（back）回显上一页。
- 斜杠 / 后跟待搜索的正则表达式进行查找。
- h 或 ? 键显示帮助信息。
- q 或 Q 键退出。

注意，more 命令实际使用过程中会有很多不足之处，使用起来着实揪心，建议使用 less 命令。
- 无法显示行数。
- 搜索时无法高亮匹配的内容。
- 搜索时从屏幕末行的下一行开始搜索，不搜索屏幕内的内容，使用不便。
- 无法向后跳转至匹配项。
- 无法快速跳转至首行与末行等。

## 2.命令格式
```
more [OPTIONS] FILE [...]
```

## 3.选项说明
```
-NUM
	指定每屏显示的行数为 NUM
-d
	在屏幕下方给用户显示提示信息"[Press space to continue, 'q' to quit.]"。当用户按下其非法按键时，显示"[Press 'h' for instructions.]"，而不是告警声音
-l
	抑制特殊字符换页符（Form Feed）造成的暂停
-f
	计算行数时，以实际上的行数，而非自动换行过后的行数（有些单行字数太长的会被扩展为两行或两行以上）
-p
	不以滚动的方式显示每一页，而是先清除屏幕后再显示内容
-c
	与 -p 相似，不同的是先显示内容再清除其他旧的内容
-s
	将多个空行压缩成一行显示
-u
	不显示文本底部的下划线
+/STRING
	从匹配搜索字符串 STRING 所在行的前两行开始显示
+NUM
	从文件第 NUM 行开始显示
--help
	显示帮助信息并退出
-V, --version
	显示版本信息并退出
```

## 4.交互式命令
more 的交互式命令基于 Vi，有些命令前面可能有一个十进制数，在下面的描述中称为 k。^X 表示 control-X
```
h, ?
	显示交互式命令的帮助摘要
SPACE
	显示下一页内容
z
	向下滚动 k 行，k 缺省值是当前的屏幕大小。可在键入命令前输入指定数值取代缺省值
RETURN
	回车键，向下滚动 k，默认为 1 行。可在键入命令前输入指定数值替代缺省值
d, ^D
	向下滚动 k 行，k 缺省值是当前的屏幕大小的一半，可在键入命令前输入指定数值替代缺省值
q, Q, INTERRUPT
	退出 more 命令
s
	显示下一页文本时跳过 k 行文本，缺省值是 1，可在键入命令前输入指定数值替代缺省值
f
	显示下一页文本时跳过 k 屏文本，缺省值是 1，可在键入命令前输入指定数值替代缺省值
b, ^B
	向后回显第 k 屏文本，缺省值是 1，可在键入命令前输入指定数值替代缺省值
'
	单引号，跳到上一次搜索开始的地方
=
	显示当前行号
/PATTERN
	从当前屏幕最后一行的下一行开始搜索符合正则表达式的第 k 个文本。k 默认为 1，可在键入命令前输入指定数值替代缺省值
n
	跳转到下 k 个匹配的文本，k 默认为 1，可在键入命令前输入指定数值替代缺省值
!command, :!command
	在子 Shell 中执行命令 command
v
	启动环境变量 VISUAL 定义的文本编译器，如果 VISUAL 未定义则使用 EDITOR，如果 EDITOR 未定义，则使用默认的 /usr/bin/vi，指向当前行
^L
	刷新屏幕
:n
	跳到后面第 k 个文件，缺省值是 1。可在键入命令前输入指定数值替代缺省值
:p
	跳到前面第 k 个文件，缺省值是 1。可在键入命令前输入指定数值替代缺省值
:f
	显示当前文件名和行号
.
	重复上次命令
```

## 5.环境变量
more 命令使用的相关环境变量有：
```
MORE
	设置 more 的选项
SHELL
	用户使用的 Shell，Linux 系统一般为 /bin/bash
TERM
	指定终端类型, more 用它来获取操作屏幕所需的终端特性
VISUAL
	用户首选的编辑器，在用户键入 v 命令时使用
EDITOR
	如果 VISUAL，则使用 EDITOR
```

## 6.常用示例
（1）查看文件内容, 按下回车逐行向下浏览。
```
more /etc/passwd
```

（2）指定每屏显示行数，使用选项 -NUM，这里指定显示 5 行。
```
more -5 /etc/passwd

root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
```

（3）从文件第 NUM 行开始显示，使用选项 +NUM，这里从第 3 行开始显示。
```
more -5 +3 /etc/passwd

daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
```
（4）从匹配搜索字符串 STRING 的文件位置开始显示。比如从 /etc/passwd 中搜索 adm 所在行的前两行开始显示。
```
more -5 +/adm /etc/passwd

...skipping
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
```

（5）与管道组合使用。一个命令输出内容之后，如果内容过多，可以用 more 来分页显示，需要和管道 | 结合起来。
```
ps -ef | more -5

UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0  2018 ?        01:56:14 /usr/lib/systemd/systemd --system --deserialize 19
root         2     0  0  2018 ?        00:00:20 [kthreadd]
root         3     2  0  2018 ?        00:00:30 [ksoftirqd/0]
root         5     2  0  2018 ?        00:00:00 [kworker/0:0H]
```

---
## 参考文献
[more(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/more.1.html)

<Vssue title="more" />