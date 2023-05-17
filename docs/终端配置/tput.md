## 1.命令简介
tput 初始化终端或查询 [Terminfo](https://man7.org/linux/man-pages/man5/terminfo.5.html) 数据库。

tput 通过 [Terminfo](https://man7.org/linux/man-pages/man5/terminfo.5.html) 数据库可以对终端会话进行初始化或更改终端功能，如移动或更改光标、更改文本属性，以及清除终端屏幕的特定区域。

## 2.什么是 Terminfo 数据库？
类 Unix 系统上的 Terminfo 数据库用于定义终端和打印机的属性及功能，包括各设备（如终端和打印机）的行数和列数以及要发送至该设备的文本的属性。

类 Unix 中的几个常用程序都依赖 Terminfo 数据库提供这些属性以及许多其他内容来控制终端功能，其中包括 vi 和 emacs 编辑器以及图形函数库 [curses](https://en.wikipedia.org/wiki/Curses_(programming_library))。

## 3.命令格式
```shell
tput [-Ttype] capname [parms ... ]
tput [-Ttype] init
tput [-Ttype] reset
tput [-Ttype] longname
tput -S  <<
tput -V
```
capname 是来自 Terminfo 数据库的能力。如果终端的某项功能需要参数，那么可以指定参数（parms ）。parms 一般为数字，只有少数 Terminfo 能力要求字符串类型的参数

init 用来根据 Terminfo 数据库初始化终端配置。

reset 而不是输出初始化字符串，终端的重置字符串将被输出(rs1, rs2, rs3, rf)。如果重置字符串不存在，但初始化字符串存在，则将输出初始化字符串。否则，reset 的作用与 init 相同。

longname 输出终端的长名称。长名称是 Terminfo 数据库中终端描述的第一行中的 last name。

## 4.选项说明
```shell
-T<type>
	表明终端类型。通常这个选项是不必要的，因为默认值取自环境变量 TERM。如果指定了-T，那么 shell 变量 LINES 和 COLUMNS 也将被忽略。
-S
	每次调用 tput 允许多个功能。这种情况下，Terminfo 能力必须从标准输入而不是从命令行传递给 tput。
-V
	显示 tput 使用的程序库 ncurses 的版本。
```

## 5.常用示例
### 操作光标
（1）光标属性。

在 Unix Shell 脚本中或在命令行中，移动光标或更改光标属性可能是非常有用的。有些情况下，您可能需要输入敏感信息（如密码），或在屏幕上两个不同的区域输入信息。在此类情况下，使用 tput 可能会对您有所帮助。
```shell
tput clear # 清屏
tput sc # 保存当前光标位置（save cursor position）
tput cup 10 13 # 将光标移动到 row col
tput civis # 光标不可见
tput cnorm # 光标可见
tput rc # 恢复光标位置（restore cursor position）
```

（2）移动光标。

使用 tput 可以方便地实现在各设备上移动光标的位置。通过在 tput 中使用 cup 选项，或光标位置，您可以在设备的各行和各列中将光标移动到任意 X 或 Y 坐标。设备左上角的坐标为 (0,0)。

比如光标移动到第 5 行 (X) 的第 1 列 (Y)。
```shell
tput cup 5 1
```
（3）移动光标并显示信息。
```shell
(tput sc ; tput cup 23 45 ; echo “Input from tput/echo at 23/45” ; tput rc)
```
`tput sc` 保存当前的光标位置。

`tput cup 23 45`在保存了光标位置后，将光标移动到 (23,45)。

`echo "Input from tput/echo at 23/45"` 将信息显示到 stdout 中。

`tput rc`将光标返回到使用`tput sc`保存的原始位置。

（4）更改光标属性。

在向某一设备显示数据时，很多时候您并不希望看到光标。将光标转换为不可见可以使数据滚动时的屏幕看起来更整洁。要使光标不可见，请使用：
```shell
tput civis
```
在数据完全显示之后，您可以使用 cnorm 选项将光标再次转变为可见。
```shell
tput cnorm
```
### 操作文本
更改文本的显示方式可以让用户注意到菜单中的一组词或警惕用户注意某些重要的内容。您可以通过以下方式更改文本属性：使文本加粗、在文本下方添加下划线、更改背景颜色和前景颜色，以及逆转颜色方案等。

要更改文本的颜色，请使用 setb 选项（用于设置背景颜色）和 setf 选项（用于设置前景颜色）以及在 Terminfo 数据库中分配的颜色数值。通常情况下，分配的数值与颜色的对应关系如下，但是可能会因 Unix 系统的不同而异：

- 0：黑色
- 1：蓝色
- 2：绿色
- 3：青色
- 4：红色
- 5：洋红色
- 6：黄色
- 7：白色

执行以下示例命令可以将背景颜色更改为黄色，将前景颜色更改为红色：
```shell
tput setb 6; tput setf 4
```
要反显当前的颜色方案，只需执行 tput rev。

有时，仅为文本着色还不够，也就是说，您想要通过另一种方式引起用户的注意。可以通过两种方式达到这一目的：
- 一是将文本设置为粗体；
- 二是为文本添加下划线。

要将文本更改为粗体，请使用 bold 选项。要开始添加下划线，请使用 smul 选项。在完成显示带下划线的文本后，请使用 rmul 选项。

### 其他
（1）重置终端设置。

如果觉得当前终端设置很混乱，那么可以重置，恢复如初。
```shell
tput reset
```

（2）显示当前终端类型的长名称。
```shell
tput longname
xterm terminal emulator (X Window System)
```
（3）无选项执行 tput 显示基本用法。
```shell
tput
usage: tput [-V] [-S] [-T term] capname
```

---
## 参考文献
[tput(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/tput.1.html)

[terminfo(5) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man5/terminfo.5.html)

[Linux tput 命令详解：通过terminfo数据库对终端会话进行初始化和操作](https://wangchujiang.com/linux-command/c/tput.html)

[curses (programming library) - Wikipedia](https://en.wikipedia.org/wiki/Curses_(programming_library))
