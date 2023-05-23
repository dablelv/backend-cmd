## 1.命令简介
reset 用来重新初始化终端。

在有些情况，终端显示会混乱无比，比如不小心显示了一个二进制文件或使用 [tput](https://dablelv.blog.csdn.net/article/details/128584675) 进行了一些不符合预期的终端配置。在你不知道 reset 命令前，你可以将终端强行关闭，然后重新登录。现在只需要输入 reset 便可将终端样貌恢复如初。

当然，你也可以使用`tput reset`命令重新初始化终端。

如果只是想清理屏幕内容，那么 [clear](https://www.linux.org/docs/man1/clear.html) 也可以。

**注意**：reset 其实是 tset 命令的软链。
## 2.命令格式
```shell
reset [-IQVcqrsw] [-] [-e ch] [-i ch] [-k ch] [-m mapping] [terminal]
```
## 3.选项说明
```shell
-c
	设置控制字符和模式。
-e <ch>
	设置擦除字符。
-I
	不发送终端或制表符初始化字符串到终端。
-i <ch>
	设置中断字符。
-k <ch>
	设置删除字符。
-m <mapping>
	指定端口类型到终端的映射关系。
-Q
	不输出控制键设置，即不要显示 erase、中断及删除字符。
-q
	终端类型显示在标准输出中，并且终端没有以任何方式初始化。选项' -'本身是等效的，但过时了。
-r
	打印终端类别到标准错误输出。
-s
	打印 set 命令设置 TERM 时的字符串，通常在 .login 或 .profile 中用。如 TERM=xterm。
-V
	报告使用的 ncurses 版本。
-w
	调整窗口大小以匹配通过 setupterm(3) 推导出的大小。通常这没有效果，除非 setupterm(3) 不能检测窗口大小。
```
## 4.常用示例

（1）重新初始化终端。

比如通过 tput 命令将终端的背景颜色改为黄色，将前景颜色改为红色：

```shell
tput setb 6; tput setf 4
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/8519bbe77aef405caf57c9171c4b2d02.png)

那么现在使用 reset 便可恢复如初。

```shell
reset
```
或
```shell
tput reset
```

（2）打印 set 命令设置 TERM 时的字符串。

```shell
reset -s
TERM=xterm;
```

（3）查看 reset 指向的真实命令。

```shell
ls -l /usr/bin/reset
lrwxrwxrwx. 1 root root 4 Mar  7  2019 /usr/bin/reset -> tset
```

（4）查看 reset 使用的 [ncurses](https://en.wikipedia.org/wiki/Ncurses) 库的版本。

```shell
reset -V
ncurses 5.9.20130511
```

---
## 参考文献
[reset(1) - Linux manual page - linux.org](https://www.linux.org/docs/man1/reset.html)

[Ncurses - Wikipedia](https://en.wikipedia.org/wiki/Ncurses)

<Vssue title="reset" />