## 1.命令简介
ls（list）命令用来显示目录内容或文件信息。

ls 输出信息可以进行彩色加亮显示，以区分不同类型的文件。

## 2.命令格式
```shell
ls [OPTION]... [FILE]...
```
## 3.选项说明
```shell
-a, --all
	显示所有档案及目录（ls内定将档案名或目录名称以 . 开头的文件视为影藏文件，默认不会列出）。
-A, --almost-all
	显示除影藏文件“.”和“..”以外的所有文件列表。
--author
	与 -l 选项结合使用，打印出每一个文件的作者。
-b, --escape
	将文件中的不可输出的字符以反斜线“\”加字符编码的方式输出；
--block-size=SIZE
	指定文件大小的统计单位。SIZE 可以取如下字符串，或对应的数值: KB 1000, K 1024, MB 1000*1000, M 1024*1024,以及G, T, P, E, Z, Y等
-B, --ignore-backups
	不要列出以~结尾的隐含条目，默认列出。
-c
	与“-l”选项连用时，展示 ctime；与“-lt”选项连用时，输出按照文件状态改变时间排序，排序的依据是文件的索引节点中的 ctime 字段。
-C
	多列显示输出结果。这是默认选项 
--color[=WHEN]
	使用不同的颜色高亮显示不同类型文件，WHEN的默认取值为'always'，也可以是'never'或'auto'；
-d, --directory
	仅显示目录名，而不显示目录下的内容列表。显示符号链接文件本身，而不显示其所指向的目录或文件； 
-D, --dired
	以Emacs的dired模式输出。
-f
	此参数的效果和同时指定“aU”参数相同，并关闭“-ls --color”参数效果。
-F, --classify
	在每个输出项后追加文件的类型标识符，具体含义：“*”表示具有可执行权限的普通文件，“/”表示目录，“@”表示符号链接，“|”表示命令管道FIFO，“=”表示sockets套接字。当文件为普通文件时，不输出任何标识符。
--file-type
	与 -F 选项功能相同，但是不显示 *。
--format=WORD
	WORD 可取值为 across，等价于 -x 选项。取值为 commas，等价于 -m。取值为horizontal，等价于-x。取值为long，等价于-l。取值为single-column，等价于-1。取值为verbose，等价于-l。取值为vertical，等价于 -C。
--full-time
	列出完整的日期与时间。
-g
	类似于 -l 但不列出所属者。
--group-directories-first
	目录排在文件之前列出
-G, --no-group
	在长格式(-l)输出时，不输出组名。
-h, --human-readable
	以可读方式显示文件大小。
--si
	以 1000 代替 1024 计算文件大小
-H, --dereference-command-line
	使用命令列中的符号链接指示的真正目的地
--dereference-command-line-symlink-to-dir
	遵循命令行中列出的符号链接
--hide=PATTERN
	不列出符合 PATTERN 模型的隐藏文件
--indicator-style=WORD
	追加指示符 WORD 到每一个文件或目录名称后，none默认 slash (-p), file-type (--file-type), classify (-F)；
-i, --inode
	显示文件索引节点号（inode）。一个索引节点代表一个文件。
-I, --ignore=PATTERN
	不列出匹配 PATTERN 的文件或目录名
-k
	以 KB 为单位显示文件大小，类似于 --block-size=1K
-1
	数字 1，与“-C”选项功能相反，所有输出信息用单列格式输出，不输出为多列；
-l
	以长格式显示目录下的内容列表。输出的信息从左到右依次包括文件类型、权限模式、硬链接数、所有者、组、文件大小、文件的最后修改时间和文件/目录名； 
-L, --dereference
	如果遇到性质为符号链接的文件或目录，直接列出该链接所指向的原始文件或目录； 
-m
	用逗号区隔每个文件和目录的名称。
-n
	以用户识别码和群组识别码替代其名称。
-N, --literal
	直接列出文件和目录名称，包括控制字符。
-o
	此参数的效果类似于 -l，但不列出用户组信息
-p, --indicator-style=SLASH
	追加指定指示符到文件或目录后，SLASH 可取值 none、slash、file-type 或 classify。
-q, --hide-control-chars
	用 ? 号取代控制字符，列出文件和目录名称。 
--show-control-chars
	显示文件和目录名称中的控制字符。 
-Q, --quote-name
	把文件和目录名称以双引号“”标示起来；
--quoting-style=WORD
	使用指定的引号模式来标识档案名称，WORD的取值有：literal, locale, shell, shell-always, c, escape。 
-r, --reverse
	反序排列。 
-R, --recursive
	递归处理，将指定目录下的所有文件及子目录一并处理 。 
-s, --size
	显示文件和目录的大小，以区块为单位 。 
-S
	以文件大小进行排序，最大的第一个。 
--sort=WORD
	以指定的内容进行排序，而非默认的档案名称，WORD可取值：none（不排序，等于-U）；extension（以条目名的最后一个扩展名排序，等于-X）；size(以用条目大小排序，等于-S）;time(以条目内容最后被修改时间排序，等于-t);version(以条目版本进行排序，等于-v);
--time=WORD
	当使用-t或--sort=time来按照时间排序时，WORD可取值为atime、access、use(表示使用访问时间排序)；或者ctime、status（状态改变时间排序），来取代默认以内容修改时间排序；
--time-style=STYLE
	使用 -l 选项时，显示时间使用指定的样式风格STYLE，可取值为full-iso,long-iso,iso,locale，还有+FORMAT,FORMAT，这两项设置格式可以参考date命令的设置方法。
-t
	用文件和目录的内容修改时间排序，最新修改的排在前面。 
-T, --tabsize=COLS
	设置每一列之间的Tab间隔符代表的宽度为COLS，默认为8个空格。 
-u
	与 -lt 同用，表示使用访问时间排序，与-l同用，显示访问时间而非内容修改时间；
-U
	列出文件和目录名称时不予排序；
-v
	文件和目录的名称列表以版本进行排序
-w, --width=COLS
	设置每列的最大字符数为 COLS
-x
	以从左到右，由上至下的横列方式显示文件和目录名称
-X
	以文件和目录的最后一个扩展名排序
--help
	显示帮助信息
--version
	显示版本信息
```
## 4.常用示例
（1）以长格式显示隐藏文件，包括当前目录和父级目录。
```shell
[dablelv@TENCENT64 ~]$ ll -a
total 148
drwxr-x---  8 dablelv dablelv  4096 Nov 23 23:56 .
drwxr-xr-x 22 root    root     4096 Jun  7 15:15 ..
-rw-------  1 dablelv dablelv 71812 Nov 24 00:38 .bash_history
-rw-r--r--  1 dablelv dablelv  2153 May  2  2017 .bash_profile
-rw-------  1 dablelv dablelv   595 Nov 24 16:57 .lesshst
drwx------  2 dablelv dablelv  4096 Jul 23 20:42 .ssh
```
第一列：文件类型与权限；
第二列：硬链接数；
第三列：属主；
第四列：文件属组，注意不是属主所在的用户组；
第五列：大小，单位为字节；
第六列：创建或最后的内容修改时间；
第七列：文件名或目录名。

输出结构示意图如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190923160618968.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)

实际上 ll 是`ls -l`的别称，使用 alias 命令可以查看相关命令的别称。
```shell
[dablelv@TENCENT64 ~]$ alias
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias vi='vim'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
```

（2）以指定的文件大小类型展示。
```shell
[dablelv@TENCENT64 ~]$ ll --block-size=K
total 24K
drwxrwxr-x 10 dablelv dablelv 4K Nov 21 15:08 code_root
-rwxrwxr-x  1 dablelv dablelv 1K Nov 21 00:18 dable.php
-rw-rw-r--  1 dablelv dablelv 1K Nov 21 00:18 dablelala.php
-rw-rw-r--  1 dablelv dablelv 0K Nov 23 23:56 dablelv~
-rw-rw-r--  1 dablelv dablelv 1K Nov 21 00:40 dablenewnew
drwxrwxrwx  2 dablelv dablelv 4K Nov 21 00:29 new
drwxrwxr-x  6 dablelv dablelv 4K Nov 21 00:24 test
```
（3）ls 命令按照修改日期递减排序
```shell
ls -t
```
如果想按照修改日期递增的话使用`ls -rt` 就行了。

（4）ls 命令按照文件大小递减排序。
```shell
# 递减排序
ls -Sh

# 递增排序
ls -Shr
```

----
## 参考文献
[ls(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/ls.1.html)

[Linux命令大全.ls命令](http://man.linuxde.net/ls)

[每天一个命令（2）](http://blog.csdn.net/liuguofeng719/article/details/51593812)
