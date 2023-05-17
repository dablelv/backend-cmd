## 1.命令简介
unzip 命令用于列出、测试和提取 ZIP 存档中的压缩文件。

如果 unzip 不跟任何选项（默认行为），会将指定的 ZIP 存档文件解压到当前目录。 

## 2.命令格式
```shell
unzip [-Z] [OPTIONS] [ZIP_FILE...] [FILE...]  [-x FILE...] [-d EXDIR]
```
[ZIP_FILE...] 表示 ZIP 存档文件，[FILE...] 表示待处理的 ZIP 存档文件中的文件列表，[-x FILE...] 表示不处理的文件列表，[-d EXDIR] 表示解压缩后的文件存放的目录。文件名均可使用通配符表示。

注意，unzip 可以不跟任何选项和参数，单独执行 unzip 将打印简要帮助信息。


## 3.选项说明
长选项的强制参数对于短选项也是强制的。下面主要介绍了通用选项和 Linux 平台的选项，其它平台（VMS、MS-DOS、MacOS 等）的专用选项参见 unzip(1) 手册。
```
-Z
	等于执行 zipinfo(1) 命令，用于查看 zip 文件的整体信息
-c
	将解压缩后的文件内容输出到标准输出（屏幕），并对字符做适当的转换。类似于 -p 选项，但是 -c 会输出文件名
-f
	更新现有的文件，即只提取那些已经存在于磁盘上且比磁盘副本更新的文件
-l
	只显示压缩文件内所包含的文件不解压
-p
	与 -c 选项类似，以二进制模式解压文件，不会执行任何的转换，并将文件内容输出到标准输出（屏幕）
-t
	对文件进行 CRC 校验检查压缩文件是否正确
-u
	与 -f 参数类似，但是除了更新现有的文件外，也会将压缩文件中的其他文件解压出来
-v
	执行时显示详细的信息
-z
	仅显示压缩文件的备注信息
-a
	对文本文件进行必要的字符转换
-b
	将所有文件视为二进制文件，不对文本文件进行字符转换
-B
	对本地即将被覆盖的文件进行备份
-C
	匹配命令行指定的待提取的文件列表时不区分大小写
-D
	不还原提取项的时间戳。正常情况，unzip 会恢复提取项的时间信息（Access Time、Modify Time 和 Change Time）
-j
	不生成提取项的目录，即所有提取项均放到同级目录下
-L
	将压缩文件中的全部文件名改为小写
-M
	将所有输出通过 unzip 内部的类似于 more(1) 的浏览工具进行浏览
-n
	永远不要覆盖现有文件。如果文件已经存在，则跳过该文件的提取而不提示。默认情况下，unzip 会进行询问是否提取、覆盖或重命名
-o
	覆盖现有文件而不提示
-P PASSWORD
	使用密码解密 zip 文件
-q
	执行时不显示任何信息
-s
	将文件名中的空白字符转换为下划线
-U	
	修改或禁用UTF-8处理。当 UNICODE_SUPPORT 可用时，选项 -U 强制 unzip 将 UTF-8 编码的文件名中的所有非 ASCII 字符转义为 #uxxx（对于UCS-2字符，或者对于需要 3 个字节的 UNICODE 码点转为 #Lxxxxxx）。此选项主要用于在怀疑提取 UTF-8 编码文件名时会失败而进行的调试行为
-W
	修改通配符 ?（单字符统配符）与 *（多字符通配符） 的匹配行为，使得 ? 与 * 不能匹配目录的分隔符 /。如 "*.c" 匹配 "foo.c"，但不能匹配 "mydir/foo.c"
-X
	解压缩时同时恢复文件原来的 UID/GID
-:
	允许创建提取项的父目录 ../，默认情况下为了安全起见是不允许的。使用该选项应格外小心
-^
	允许在提取的 ZIP 存档项的名称中使用控制字符
```


## 4.常用示例
首先使用 zip 命令对文件 /etc/passwd 和 /etc/group 进行压缩生成 test.zip 文件，同时使用 -z 选项为 zip 文件添加注释说明。
```shell
zip test.zip /etc/passwd /etc/group
  adding: etc/passwd (deflated 58%)
  adding: etc/group (deflated 45%)
enter new zip file comment (end with .):
this is test.zip's comment
.
```

（1）使用 -Z 选项查看 ZIP 归档文件 test.zip 的整体信息。
```shell
unzip -Z test.zip
Archive:  test.zip
Zip file size: 1321 bytes, number of entries: 2
-rw-r--r--  3.0 unx     1552 tx defN 19-Jan-04 14:56 etc/passwd
-rw-r--r--  3.0 unx      642 tx defN 19-Jan-04 14:56 etc/group
2 files, 2194 bytes uncompressed, 1005 bytes compressed:  54.2%
```

（2）将压缩文件解压缩至当前目录。
```shell
unzip test.zip
```

（3）如果当前目录存在同名的文件，解压缩时不覆盖原有文件。
```shell
unzip -n test.zip
```

（4）解压缩时覆盖原有文件，不进行询问。
```shell
unzip -o test.zip
```

（5）将压缩文件解压缩至指定目录。
```shell
mkdir dir
unzip test.zip -d dir
```

（6）仅显示 zip 文件的注释说明，不解压。
```shell
unzip -z test.zip
Archive:  test.zip
this is test.zip's comment
```

（7）仅查看 zip 文件中的文件列表，不解压。
```shell
unzip -l test.zip
Archive:  test.zip
this is test.zip's comment
  Length      Date    Time    Name
---------  ---------- -----   ----
     1552  01-04-2019 14:56   etc/passwd
      642  01-04-2019 14:56   etc/group
---------                     -------
     2194                     2 files
```

---
## 参考文献
[unzip(1) manual - linux.org](https://www.linux.org/docs/man1/unzip.html)

[【Linux】一步一步学Linux——unzip命令(68)](https://blog.csdn.net/dengjin20104042056/article/details/97242795)
