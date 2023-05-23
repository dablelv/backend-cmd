## 1.命令简介
GDB（GNU Debugger）是 GNU 开源组织发布的一个强大的 UNIX 程序调试工具。

如果你是在 UNIX 平台下开发软件，你会发现 GDB 这个调试工具有比 VC、BCB 的图形化调试工具拥有更强大的功能。同时 GDB 也具有例如 DDD 调试器，全称是 Data Display Debugger 这样的图形化调试端。 

一般来说，GDB 主要完成下面四个方面的功能： 
（1）启动你的程序，可以按照你的自定义的要求随心所欲的运行程序； 
（2）可让被调试的程序在你所指定的调置的断点处停住（断点可以是条件表达式）； 
（3）当程序被停住时，可以检查此时你的程序中所发生的事；
（4）动态的改变程序的执行环境。

GDB 强大的功能依赖于繁杂的命令，若想精通 GDB 和熟练操作所有 GDB 命令绝非易事。当然，在实际的代码调试过程中，没有必要熟练掌握 GDB 所有命令，可以快速掌握 GDB 常见的命令来应付大部分的调试工作。推荐一个快速的 GDB 上手教程：[ GDB十分钟教程](http://blog.csdn.net/liigo/article/details/582231)。

## 2.命令格式

GDB 通常和 gcc 一起使用，编译选项加入`-g`才可使可执行文件处于debug模式。

gdb命令格式：
```shell
gdb [-help] [-nx] [-q] [-batch] [-cd=dir] [-f] [-b bps] [-tty=dev]
	[-s symfile] [-e prog] [-se prog] [-c core] [-x cmds] [-d dir]
	[prog[core|procID]]
```

## 3.常用操作
```shell
gdb [可执行文件]：选中可执行程序，进入 gdb 的 debug 模式；
	(gdb) b（breakpoint）：b 函数名 ：对此函数进行中断 ；b 文件名：行号；
	(gdb) r （run）：启动程序，运行至程序的断点或者结束；
	(gdb) l （list）：l funcname，查看函数源码。或 l linenum，显示指定行周围的源码。或 l -，显示当前行前面的源码。或l，显示当前行后面的源码；
	(gdb) s（step）：进入函数，逐语句运行；
	(gdb) n(next):不进入函数，逐过程运行；
	(gdb) c（continue）：继续运行，跳至下一个断点；
	(gdb) p（print）：打印显示变量值；
	(gdb) set variable=value,为变量赋值；
	(gdb) kill：终止调试的程序；
	(gdb) h（help）：列出gdb详细命令帮助列表；
	(gdb) clear filename.c:30：清除30行处的断点；
	(gdb) info break：显示断点信息；
	(gdb) delete 断点编号：断点编号是info break 后显示出来的；
	(gdb) bt（backtrace）：回溯到段出错的位置；
	(gdb) frame 帧号：帧号是bt命令产生的堆栈针；
	(gdb) q（quit）：退出；
```
括号中的长命令等同于其缩写命令。

## 4.常用示例
（1）分屏显示源代码

gdb 模式下使用`layout src` 或者大于号 `> `。
```shell
layout src
```
还可以在进入 gdb 时加入参数 -tui 达到同样效果。
```shell
gdb -tui
```

分屏后的效果如下图所示：
![这里写图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTUxMjEzMTcxMTM2OTM3?x-oss-process=image/format,png)
（2）退出 gdb 分屏模式。

使用快捷键 Ctrl+x+a 切换。

## 5.TUI 模式

TUI（Text User Interface）模式指文本界面。

### 5.1 打开 TUI 模式
打开 TUI 模式有多种方法：
- 使用`gdbtui` 或者`gdb -tui`开始一个调试。-q 表示静默模式打开 gdbtui，不打印介绍与版权信息。
```
$ gdbtui -q sample
(gdb) ....
```

- 使用快捷键 `ctrl+x ctrl+a` or `ctrl+x+a`相互切换。

- 使用大于号 > 切换到TUI模式。

- gdb 模式下，使用`layout next|prev|src|asm|regs|cmd`切换到TUI模式。

### 5.2 TUI 模式的 4 个窗口
command 命令窗口：可以键入调试命令，这也是默认的窗口；
source 源代码窗口：显示当前行，断点等信息；
assembly：汇编代码窗口；
register：寄存器窗口；

除 command 窗口外，其他三个窗口不可同时显示。其可用 layout 命令来进行选择自己需要的窗口。可参见 `help layout`。

### 5.3 gdbtui 相关命令
（1）layout
用以修改窗口布局。
```
layout next 
Display the next layout.  

layout prev 
Display the previous layout.  

layout src 
Display the source window only.  

layout asm 
Display the assembly window only.  

layout split 
Display the source and assembly window.  

layout regs 
Display the register window together with the source or assembly window. 
```
（2）winheigh
调整各个窗口的高度。help winheight可以查看winheight的具体用法。
```
Usage: winheight <win_name> [+ | -] <#lines>
Window names are:
src  : the source window
cmd  : the command window
asm  : the disassembly window
regs : the register display
```
Change the height of the window name by count lines. Positive counts increase the height, while negative counts decrease it. 

使用示例：
```
 winheight src +5
 winheight src -4
```

（3）focus
用法：`focus next | prev | src | asm | regs | split `

我们可以通过focus命令来调整焦点位置，默认情况下是在src窗口，通过focus next命令， 焦点就移到cmd窗口了，这时候就可以像以前一样，通过方向键来切换到上一条命令和下一条命令。

在默认设置下，方向键和PageUp PageDn 都是用来控制gdbtui的src窗口的，所以，我们常用的上下键用来显示前一条命令和后一条命令的功能就没有了， 不过这个时候我们可以`focus cmd`将焦点转移到命令窗口，再次来获取这个功能。

当我们通过方向键调整了gdbtui 的src 窗口以后，可以通过update命令重新把焦点定位到当前执行的代码上。

help focus可用于查看focus的用法。
```
src  : the source window
asm  : the disassembly window
regs : the register display
cmd  : the command window
```
焦点不在 src 窗口以后，我们就不同通过方向键来浏览源码了。

---
## 参考文献
[gdb(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/gdb.1.html)

[gdb(1) manual - linux.org](https://www.linux.org/docs/man1/gdb.html)

[在gdb中显示源码(gdbtui使用方法)](http://www.360doc.com/content/14/0325/15/15064667_363606885.shtml)

[GDB的使用,重点讲解图像化 gdb -tui 方式 ](http://laokaddk.blog.51cto.com/368606/945057/)

<Vssue title="gdb" />
