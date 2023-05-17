## 1.命令简介
dir（directory）列出目录内容。

列出有关文件的信息（默认情况下为当前目录）。如果未指定 -cftuvSUX 或 --Sort，则按字母顺序对条目进行排序。

温馨提示：该命令只需了解，实际上使用 ls 代替。
## 2.命令格式
```shell
dir [<OPTION>]... [<FILE>]...
```
## 3.选项说明
```shell
-a, --all
	不隐藏任何以 . 开始的项目。
-A, --almost-all
	列出除 . 及 .. 以外的任何项目。
--author
	与 -l 同时使用时列出每个文件的作者。
-b, --escape
	以八进制溢出序列表示不可打印的字符。
--block-size=SIZE
	在打印之前按 SIZE 缩放尺寸。如 --block-size=M 以 1,048,576 bytes 为单位打印。SIZE 格式参见下文。
-B, --ignore-backups
	不列出以 ~ 结尾的隐含条目。
-c
	与 -lt 一起：排序并显示 ctime（上次的时间文件状态信息的修改）。与 -l 一起: 显示 ctime 并按名称排序，否则按 ctime 排序，最新的在前。
-C
  每栏由上至下列出项目。
--color[=WHEN]
	控制是否使用色彩分辨文件。WHEN 可以是 "never"(默认)、"always"或"auto"其中之一。
-d, --directory
	当遇到目录时列出目录本身而非目录内的文件。
-D, --dired
	产生适合 Emacs 的 dired 模式使用的结果。
-f
	不进行排序，-aU 选项生效，-lst 选项失效。
-F, --classify
	加上文件类型的指示符号(*/=@| 其中一个)
--format=<WORD>
	交错 -x，逗号分隔-m，水平-x，长-l，单栏-1，详细-l，垂直 -C。
--full-time
	即 -l --time-style=full-iso。
-g
	类似 -l，但不列出所有者。
--group-directories-first
	在文件前分组目录。此选项可与 --sort 一起使用，但是一旦使用 --sort=none (-U) 将禁用分组。
-G, --no-group
	以一个长列表的形式，不输出组名。
-h, --human-readable
	与 -l 一起，以易于阅读的格式输出文件大小(例如 1K 234M 2G)。
--si
	同上面类似，但是使用 1000 为基底而非 1024。
-H, --dereference-command-line
	跟随命令行列出的符号链接。
--dereference-command-line-symlink-to-dir
	跟随命令行列出的目录的符号链接。
--hide=PATTERN
	隐藏符合 PATTERN 模式的项目(-a 或 -A 将覆盖此选项)。
--indicator-style=WORD
	指定在每个项目名称后加上指示符号方式：none (默认)，classify (-F)，file-type (-p)。
-i, --inode
	显示每个文件的 inode 号。
-I, --ignore=PATTERN
	不显示任何符合指定 Shell PATTERN 的项目。
-k
	即 --block-size=1K。
-l
	使用较长格式列出信息。
-L, --dereference
	当显示符号链接的文件信息时，显示符号链接所指示的对象而并非符号链接本身的信息。
-m
	所有项目以逗号分隔，并填满整行行宽。
-n, --numeric-uid-gid
	类似 -l，但列出 UID 及 GID 号。
-N, --literal
	输出未经处理的项目名称 (如不特别处理控制字符)。
-o
	类似 -l，但不列出有关组的信息。
-p, --indicator-style=slash
	对目录加上表示符号 "/"。
-q, --hide-control-chars
	以"?"字符代替无法打印的字符。
--show-control-chars
	直接显示无法打印的字符 (这是默认方式，除非调用的程序名称是"ls"而且是在终端输出结果)
-Q, --quote-name
	将条目名称括上双引号。
--quoting-style=方式
	使用指定的 quoting 方式显示条目的名称：literal、locale、shell、shell-always、c、escape。
-r, --reverse
	逆序排列。
-R, --recursive
	递归显示子目录。
-s, --size
	以块数形式显示每个文件分配的尺寸。
-S
	根据文件大小排序。
--sort=WORD
	按 WORD 而非名称排序：无 (-U)、大小 (-S)、时间(-t)、版本 (-v)、扩展名 (-X)。
--time=WORD
	和-l 同时使用时显示WORD 所代表的时间而非修改时间：atime、access、use、ctime 或status；加上 --sort=time 选项时会以指定时间作为排序关键字。
--time-style=STYLE
	和 -l 同时使用时根据STYLE 代表的格式显示时间：full-iso、iso、locale、posix-iso、+FORMAT。FORMAT 即是"date"所用的时间格式；如果 FORMAT 是 FORMAT1<换行>FORMAT2，FORMAT1 适用于较旧的文件而FORMAT2 适用于较新的文件；如果 STYLE 以"posix-"开头，则STYLE 仅在POSIX 语系之外生效。
-t
	根据修改时间排序。
-T, --tabsize=COLS
	指定制表符(Tab)的宽度，而非 8 个字符。
-t
	按修改时间排序，最新的在前。
-T, --tabsize=COLS
	假设制表符在每个 COLS 处停止，而不是默认的 8。
-u
	同 -lt 一起使用：按照访问时间排序并显示。同 -l 一起使用：显示访问时间并按文件名排序。其他：按照访问时间排序。
-U
	不进行排序；按照目录顺序列出项目。
-v
	在文本中进行数字(版本)的自然排序。
-w, --width=COLS
	自行指定萤幕宽度而不使用目前的数值。
-x
	逐行列出项目而不是逐栏列出。
-X
	根据扩展名排序。
-1
	每行只列出一个文件。
--help
	显示此帮助信息并退出。
--version
	显示版本信息并退出。
```
SIZE 可以是一个可选的整数，后面跟着以下单位中的一个：KB 1000，K 1024，MB 1000*1000，M 1024*1024，还有 G、T、P、E、Z、Y。

TIME_STYLE 参数可以是 full-iso、long-iso、iso、locale 或 +FORMAT。 FORMAT 的解释类似于 date(1)。 如果 FORMAT 为 `FORMAT1<newline>FORMAT2`，则 FORMAT1 适用于非最近文件，FORMAT2 适用于最近文件。 以 'posix-' 为前缀的 TIME_STYLE 仅在 POSIX 语言环境之外生效。 TIME_STYLE 环境变量也设置了要使用的默认样式。

使用色彩来区分文件类型的功能已被禁用，默认设置和 --color=never 同时禁用了它。使用 --color=auto 选项，ls 只在标准输出被连至终端时才生成颜色代码。LS_COLORS 环境变量可改变此设置，可使用 dircolors 命令来设置。

## 4.常用示例
（1）列出当前目录的内容。
```shell
# dir
centos7.sh  cosfs.sh  cpp  dnspod.sh  go  install_panel.sh  install.sh	LATEST.tar.gz  libsodium-stable  txcdn.sh
```

（2）列出目录的内容，带有颜色以区分不同类型的文件。
```shell
# dir --color
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/9292eccf678f4d9db98c44dd4014e86b.png)
（3）不隐藏任何以 . 开始的项目。
```shell
# dir -a
.   .bash_history  .bash_profile  .cache      .config	cpp	dnspod.sh  install_panel.sh  LATEST.tar.gz  libsodium-stable  .pki		.ssh	 txcdn.sh
..  .bash_logout   .bashrc	  centos7.sh  cosfs.sh	.cshrc	go	   install.sh	     .lesshst	    .pip	      .pydistutils.cfg	.tcshrc  .viminfo
```
---
## 参考文献
[dir(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/dir.1.html)

