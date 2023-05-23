## 1.命令简介
man（manual） 用于查看命令帮助、配置文件帮助和编程帮助等信息。

Linux 提供了丰富的命令以及帮助手册，当需要了解某个命令的作用及用法时，可以使用 man 查看一下其帮助手册，同时也可以使用 man man 查看 man 命令的使用方法。当需要了解与编程相关的系统调用以及库函数的用法时，也可以通过 man 查看接口的帮助手册。此外，系统相关的配置文件的介绍也可以通过 man 来查看。

man 可以查询不同类型的帮助手册，当目标存在多个不同类型的帮助手册时，我们可以指定要查找的手册类型，也可以不指定，此时 man 会搜索所有类型的帮助手册，但是只会按照预定义的顺序展示第一个。预定义的顺序可以使用环境变量 $MANSECT 或配置文件 /usr/local/etc/man_db.conf 中的 SECTION 指令指定，默认为：
```
1 8 3 2 5 4 9 6 7
```

帮助手册分为多种类型，即不同的 section，主要有：
```
1	可执行程序或 Shell 命令
1p	可执行程序或 Shell 命令（POSIX 版）
2	系统调用（内核提供的函数）
3	库调用（程序库中的函数）
4	特殊文件（通常在/dev中找到）
5	文件格式和约定，如 /etc/passwd
6	游戏
7	杂项（包括宏包和约定），例如 man（7）、groff（7）
8	系统管理命令（通常只针对 root 用户）
9	内核相关文件[非标准]
```

帮助手册约定内容包括：
```
NAME			名称
SYNOPSIS		简介
CONFIGURATION	配置
DESCRIPTION		描述
OPTIONS			选项
EXIT STATUS		退出码
RETURN VALUE	返回值
ERRORS			错误
ENVIRONMENT		环境变量
FILES			相关文件
VERSIONS		版本
CONFORMING TO	遵循的规则
NOTES			注意事项
BUGS			缺陷
EXAMPLE			示例
AUTHORS			作者
COPYRIGHT 		版权
SEE ALSO		拓展阅读
HISTORY			维护历史
```

在表现形式上，手册遵循如下规则：
```
粗体内容：重点关键词
斜体内容：待替换内容。因为终端渲染问题，一般使用下划线或彩色文本替代斜体
[-abc]：中括号内的选项或内容是可选的
-a|-b：被 | 分隔的选项是多选一，不能一起使用
...：三个点号表示重复
```

## 2.命令格式
```shell
man [OPTION]... [[SECTION] PAGE]...
```
man 可以不跟任何选项与参数，会输出如下提示信息：
```
What manual page do you want?
```

## 3.选项说明

阅读下面的选项说明，需要注意以下几点：

（1）没有参数的选项可以重复出现，有参数的选项如果重复出现，后面选项的参数将会覆盖前面的参数；

（2）长选项的必填参数对于短选项也是必须的。

```shell
一般选项:
-C, --config-file=FILE
	使用指定的用户配置文件而不是默认的 ~/.manpath
-d, --debug
	打印 debug 信息
-D, --default
	此选项通常作为第一个选项，将 man 的行为重置为默认行为。它的用途是重置那些可能已经在 $MANOPT 中设置的选项。在 -D 后面的选项会正常生效
--warnings[=WARNINGS]
	启动来自 groff 的告警。groff 是 GNU 版 troff，是文字排版工具

主要操作模式:
-f, --whatis
	等同于 whatis 命令，显示手册页中的简短说明（如果可用），详见 whatis(1)
-k, --apropos
	等同于 apropos 命令，按照关键字搜索手册页中的简短描述并显示任何匹配，详见 apropos(1)
-K, --global-apropos
	在所有手册页中搜索文本。这是蛮力搜索，可能需要一些时间，如果可以，应该指定一个 section 来减少需要搜索的手册页数量
-l, --local-file
	激活本地模式。格式化和显示本地手册文件，而不是通过搜索系统的手册集
-w, --where, --path, --location
	不显示手册页内容，输出手册的位置
-W, --where-cat, --location-cat
	不显示手册页内容，输出 cat 文件的位置
-c, --catman
	此选项不用于一般用途，只能由管理员命令 catman 使用
-R encoding, --recode=encoding
	以指定编码输出手册内容

寻找手册页：
-L, --locale=LOCALE
	man 通常通过调用 C 函数setlocale（3）来确定当前的语言环境，该函数询问各种环境变量，可能包括 $LC_MESSAGES 和 $LANG。该选项可以临时改变 man 的语言环境
-m, --systems=SYSTEM[,...]
	访问其他系统的手册页集，可指定多个不同的系统
-M, --manpath=path
	指定手册页的路径。该选项将会覆盖环境变量 $MANPATH 且使 man 忽略选项 -m 选项
-S, -s, --sections=LIST
	指定 man 搜索的手册页类型列表，使用冒号或逗号分隔，man 将按照给定的顺序进行搜索。该选项将覆盖环境变量 $MANSECT
-e , --extension=SUB-EXTENSION
	将搜索限制在扩展类型为 SUB-EXTENSION 的手册页之内
-i, --ignore-case
	搜索手册页时忽略大小写（默认）
-I, --match-case
	搜索手册页时大小写敏感
--regex
	以正则表达式搜索手册页并显示所有匹配的手册页
--wildcard
	以通配符搜索手册页并显示所有匹配的手册页
--names-only
	当使用选项 --regex 或 --wildcard 时，只搜索手册页的 NAME 部分，不搜索 DESCRIPTION 部分
-a, --all
	显示所有匹配的手册页而不是仅显示第一个匹配的手册页
-u, --update
	该选项导致 man 对其数据库缓存执行 inode 级别的一致性检查，以确保它们是文件系统的准确表示。只有安装了设置了 setuid 位的 man 才会产生有用的效果
--no-subpages
	出线成对的手册页名时，第二个手册页名作为单独的手册页名，而是不第一个手册页的子手册页。比如有些命令存在子命令，例如 git

控制格式化输出：
-P, --pager=PAGER
	指定浏览手册页的工具，man 默认使用 less -s。该选项覆盖 $MANPAGER 环境变量，后者又覆盖 $PAGER 环境变量。它不与 -f 或 -k 连用
-r, --prompt=PROMPT
	如果使用 less 作为手册页的浏览工具，man 将尝试设置其提示和一些合理的选项。默认提示为 Manual page name(sec) line x
-7, --ascii
	使用 ASCII 字符浏览手册页
-E, --encoding=ENCODING
	使用指定编码输出手册也内容
--no-hyphenation, --nh
	换行处不使用连字符
--no-justification, --nj
	不调整字距离以铺满整行
-p, --preprocessor=STRING
	指定在 nroff 或 troff/groff 之前运行的预处理程序的顺序
-t, --troff
	使用 groff -mandoc 将手册页格式化为标准输出。给定 -H、-T 或 -Z 不需要此选项
-T, --troff-device[=DEVICE]
	此选项用于更改 groff(或 troff)的输出设备，使其适合于默认设备之外的设备
-H, --html[=BROWSER]
	此选项将导致 groff 生成 HTML 输出，并将在 web 浏览器中显示该输出
-X, --gxditview[=DPI]
	使用 gxditview 程序在图形窗口中显示 groff 的输出。DPI(点/英寸)可能是 75、75-12、100 或 100-12，默认为 75
-Z, --ditroff
	groff 将运行 troff，然后使用适当的后处理器生成适合所选设备的输出。如果 groff 表示 groff -mandoc，那么 该选项将抑制 groff 使用后处理器

获取帮助：
-?, --help
	输出帮助并推出
--usage
	打印一个简短的用法并退出
-V, --version
	输出版本并退出
```
实际上，日常使用 man 时很少会用到其选项，最常用的是指定手册类型和手册名：
```
man SECTION PAGE_NAME
```

## 4.交互式命令

由于 man 默认使用 less 作为手册的浏览工具，这里给出 less 常用的浏览导航交互式命令。如果忘记命令，可以键入 h 或 H 查看命令的帮助信息。
```
ENTER 向前滚动一行
y 向后滚动一行

d 向前滚动半屏
u 向后滚动半屏

f 向前滚动一屏
b 向后滚动一屏

g 跳转到文件首行
G 跳转到文件末行

/PATTERN 向前搜索指定内容
n 跳转到下一个匹配项
N 跳转到前一个匹配项

h 显示帮助信息
q 退出
```

## 5.常用示例

（1）查看用户命令 man 的帮助手册。
```shell
man man

# 或
man 1 man
```
如果想查看 POSIX 版本的命令帮助手册，指定 SECTION 为 1p 即可。
```shell
man 1p man
```

（2）查看系统调用 read 的帮助手册。
```shell
man 2 read
```

（3）查看库函数 printf 的帮助手册。
```shell
man 3 printf
```

（4）查看特殊的设备文件 tty 的帮助手册。
```shell
man 4 tty
```

（5）查看用户信息文件 /etc/passwd 格式说明。
```shell
man 5 passwd
```

（6）查看用于格式化手册的宏。
```shell
man 7 man
```

（7）查看系统管理命令 mount。
```shell
man 8 mount
```

（8）查看手册的地址而不是手册内容，以 man 命令为例。
```shell
man -w man
/usr/share/man/man1/man.1.gz
```

---

## 参考文献

[man(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/man.1.html)

[GNU troff (Groff) — a GNU project](http://www.gnu.org/software/groff/) 

[Linux 命令（89）—— less 命令](https://dablelv.blog.csdn.net/article/details/102967501)

<Vssue :title="$title" />