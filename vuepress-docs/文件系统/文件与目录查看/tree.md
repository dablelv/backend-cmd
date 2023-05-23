## 1.命令简介
tree 以树状格式列出目录内容。

在没有参数的情况下，树列出当前目录中的文件。当给定目录参数时，依次列出在给定目录中找到的所有文件和目录。完成列出找到的所有文件/目录后，tree 返回列出的文件和目录总数。
## 2.命令格式
```shell
tree [-adfghilnopqrstuvxACDFNS] [-L LEVEL [-R]] [-H BASE_HREF] [-T TITLE]
[-o FILENAME] [--nolinks] [-P PATTERN] [-I PATTERN] [--inodes] [--device]
[--noreport] [--dirsfirst] [--version] [--help] [--filelimit #] [DIRECTORY...]
```
## 3.选项说明
```shell
-a
	显示所有文件和目录。默认情况下，树不打印隐藏文件（以点“.”开头的文件）。在任何情况下，树都不会打印文件系统结构“.”（当前目录）和“..”（以前的目录）
-A
	打印缩进线时启用 ANSI line graphics hack，即使用 ANSI 绘图字符显示树状图而非以 ASCII 字符
-C
	输出条目加上色彩，便于区分类型
-d
	只显示目录名而不现实目录的内容
-D
	列出文件或目录的最后更改时间
-f
	在每个文件或目录之前，显示完整的相对路径
-F
	在目录，Socket，执行文件，符号连接，管道名称后，各自加上"/","=","*","@","|"，当文件为普通文件时，不追加任何标识符（就像 ls -F）
-g
	列出文件或目录的所属群组名称，没有对应的名称时，则显示群组ID
-H BASE_HREF
	打开 HTML 输出，包括 HTTP 引用。对 ftp 站点有用。BASE_HREF 提供使用 HTML 输出时的基本 ftp 位置。也就是说，本地目录可以是'/local/ftp/pub'，但必须引用为'ftp://hostname.organization.domain/pub“（BASE_HREF 应该是”ftp://hostname.organization.domain'). 提示：不要将 ANSI 行与此选项一起使用，也不要在目录列表中提供多个目录。如果希望通过 CCS 样式表使用颜色，除了此选项外，还可以使用 -C 选项强制颜色输出
-i
	不以阶梯状列出文件或目录名称，与 -f 选项结合使用时非常有用
-I PATTERN
	不显示符合通配符模式的文件或目录
-l
	如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录
-L LEVEL
	目录树的最大显示深度
-n
	始终关闭着色，但会被 -C 选项覆盖
-N
	按原样打印不可打印的字符，而不是默认插入脱字符（caret notation）
-o FILENAME
	输出到指定文件
-p
	打印每个文件的文件类型和权限（就像 ls-l）
-P PATTERN
	只显示符合通配符模式的文件或目录
-q
	用"?"号取代控制字符，列出文件和目录名称
-R
	Recursively cross down the tree each level directories (see -L option), and at each of them execute tree again adding '-o 00Tree.html' as a new option
-s
	以字节为单位列出文件或目录大小
-S
	启用 ASCII 线条图形（在使用 Linux 控制台模式字体时非常有用）。此选项现在相当于“--charset=IBM437”，最终将被弃用
-t
	按上次修改时间而不是按字母顺序对输出进行排序
-T TITLE
	在HTML输出模式下设置标题和 H1 标题字符串
-u
	列出文件或目录的拥有者名称，没有对应的名称时，则显示用户ID
-v
	按版本对输出进行排序
-x
	将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该子目录予以排除在寻找范围
--nolinks
	关闭HTML输出中的超链接
--inodes
	打印文件或目录的索引节点号
--device
	打印文件或目录所属的设备号
--noreport
	忽略打印树列表末尾的文件和目录报告
--dirsfirst
	在文件之前列出目录
--help
	查看帮助信息
--version
	查看版本信息
--filelimit #
	不要显示包含超过 # 个条目的目录
```
## 4.常用示例
（1）显示当前目录树。
```shell
tree
.
├── 00Tree.html
├── es
│   ├── go.mod
│   ├── go.sum
│   ├── main
│   └── main.go
├── gen_req
│   ├── go.mod
│   └── main.go
└── shell
    ├── cat.sh
    ├── cat.tar
    ├── newfile
    ├── students.txt
    └── txt

3 directories, 12 files
```
（2）显示目录的内容的时候，使用选项 -L LEVEL 指定深度，比如目录树的最大显示深度为 1。
```shell
tree -L 1
.
├── 00Tree.html
├── es
├── gen_req
└── shell

3 directories, 1 file
```
（3）输出条目加上色彩，便于区分类型。
```shell
tree -C
```
<img src=https://img-blog.csdnimg.cn/5d0f0321de874d7b9d2018d1e450d807.png width=30% />

（4）以字节为单位列出文件或目录大小，且不在最后报告文件目录的数量。
```
tree -s --noreport
.
├── [         94]  00Tree.html
├── [       4096]  es
│   ├── [        683]  go.mod
│   ├── [      29669]  go.sum
│   ├── [    7696390]  main
│   └── [       7188]  main.go
├── [       4096]  gen_req
│   ├── [         21]  go.mod
│   └── [        353]  main.go
└── [       4096]  shell
    ├── [         86]  cat.sh
    ├── [      30720]  cat.tar
    ├── [          0]  newfile
    ├── [        473]  students.txt
    └── [       1296]  txt
```

---
## 参考文献
[tree(1) - Linux man page - Die.net](https://linux.die.net/man/1/tree)

[what is "ANSI line graphics hack"](https://comp.os.linux.misc.narkive.com/cTNaVdaD/what-is-ansi-line-graphics-hack)

[wikipedia.Caret notation](https://en.wikipedia.org/wiki/Caret_notation)

<Vssue title="tree" />