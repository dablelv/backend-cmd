## 1.命令简介
bind 命令用于显示和设置命令行的键盘序列绑定的功能。

通过 bind 可以了解哪些按键组合的功能，也可以自行指定某些按键组合的功能。通过这一命令，可以提高命令行中操作效率。

## 2.命令格式
```shell
bind [-m keymap] [-lpsvPSV]
bind [-m keymap] [-q function] [-u function] [-r keyseq]
bind [-m keymap] -f filename
bind [-m keymap] -x keyseq:shell-command
bind [-m keymap] keyseq:function-name
bind readline-command
```
## 3.选项说明
```shell
-m <keymap>
	在此命令执行过程中使用指定的键映射。可以被接受的键映射名字有 emacs、emacs-standard、emacs-meta、emacs-ctlx、vi、vi-move、vi-command 和 vi-insert。
-l
	列出函数名称。
-P
	列出函数名称和绑定。
-p
	以可以重新用作输入的格式列出函数名称和绑定。
-S
	列出可以启动宏的键序列以及它们的值。
-s
	以可以重新用作输入的格式列出可以启动宏的键以及它们的值。
-V
	列出变量名成和它们的值。
-v
	以可以重新用作输入的格式列出变量的名称和它们的值。
-q <function>
	查询指定的函数可以由哪些键启动。
-u <function>
	反绑定所有绑定至指定函数的键。
-r <keyseq>
	取消指定键序列的绑定。
-f <filename>
	从指定文件中读取键绑定。
-x <keyseq>:<shell-command>
	当指定的键序列被输入时，执行指定的 Shell 命令。
```
## 4.常用示例
（1）列出函数名称。
```shell
bind -l
abort
accept-line
alias-expand-line
arrow-key-prefix
backward-byte
backward-char
backward-delete-char
backward-kill-line
backward-kill-word
backward-word
...
```

（2）显示按键组合的设置。
```shell
bind -v
set bind-tty-special-chars on
set blink-matching-paren on
set byte-oriented off
set completion-ignore-case off
set completion-map-case off
set convert-meta off
set disable-completion off
set echo-control-characters on
set enable-bracketed-paste off
set enable-keypad off
...
```

（3）将按键组合绑定到指定的 Shell 命令。

如按下 `Ctrl+l`，就可以显示 666。
```shell
bind -x '"\C-l":echo 666'

# 键入 Ctrl + l
666
```

（4）列出指定功能的按键和按键组合。
```shell
bind -q abort
abort can be invoked via "\C-g", "\C-x\C-g", "\e\C-g".
```

（5）使用 showkey -a 命令获取键序列。
```shell
showkey -a
 
Press any keys - Ctrl-D will terminate this program
 
^[[A     27 0033 0x1b	# 上
         91 0133 0x5b
         65 0101 0x41
^[[B     27 0033 0x1b	# 下
         91 0133 0x5b
         66 0102 0x42
^[[D     27 0033 0x1b	# 左
         91 0133 0x5b
         68 0104 0x44
^[[C     27 0033 0x1b 	# 右
         91 0133 0x5b
         67 0103 0x43
         32 0040 0x20
^M       13 0015 0x0d 	# 字母 M
^C        3 0003 0x03 	# Ctrl-C
^D        4 0004 0x04 	# Ctrl-D 退出
```

---
## 参考文献
[bind(1) manual - linux.org](https://www.linux.org/docs/man1/bind.html)