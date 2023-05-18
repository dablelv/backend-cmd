## 1.命令简介
sort 以行为单位对文本文件的内容进行排序，将结果显示在标准输出。

比较原则是从行首字符向后，依次按 ASCII 码值进行比较，最后按升序输出。如果 file 参数指定多个文件，那么 sort 命令将这些文件纵向连接起来，当作一个文件进行排序。

不加任何选项时，将对整行从第一个字符开始依次向后直到行尾按照 ASCII 码值做升序排序。
## 2.命令格式
```
sort [OPTION]... [FILE]...
sort [OPTION]... --files0-from=F
```
## 3.选项说明
注意，长选项的强制性参数对于短选项也是强制的。
```
-b, --ignore-leading-blanks
	忽略每行前面的空格字符
-c, --check, --check=diagnose-first
	只检查文件是否已排序，不进行排序
-C, --check=quiet, --check=silent
	类似于 -c，但不报告第一个乱序的行
-d, --dictionary-order
	按照字典序，只考虑字母、数字及空格字符，忽略其他字符
--files0-from=F
	从文件 F 中以 NUL 字符结尾的字符串作为输入文件名；如果 F 是 -，则从标准输入中读取文件名
-f, --ignore-case
	排序时，将小写字母视为大写字母
-i, --ignore-nonprinting
	排序时，只考虑可打印字符，忽略不可打印字符
-m, --merge
	合并多个已排序的文件
-n, --numeric-sort
	按数值大小排序
-o, --output=FILE
	将排序结果输出到指定文件
-r,--reverse
	逆向输出排序结果（降序排序）
-t, --field-separator=SEP
	指定排序时使用的分隔字符，sort命令默认字段分隔符为空格和Tab
-u, --unique
	相同的数据中，仅输出一行
-k,--key=POS1[,POS2]
	以第 POS1 栏到 POS2 栏排序，默认到最后一栏
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```
## 4.常用示例
（1）对 /etc/passwd 进行排序。
```
cat /etc/passwd | sort
adm:x:3:4:adm:/var/adm:/sbin/nologin
apache:x:48:48:Apache:/var/www:/sbin/nologin
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
```
（2）/etc/passwd 内容以冒号:来分隔，以第三栏至行末尾栏来排序。
```
cat /etc/passwd | sort -t ':' -k 3
root:x:0:0:root:/root:/bin/bash
uucp:x:10:14:uucp:/var/spool/uucp:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
bin:x:1:1:bin:/bin:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
```
（3）如果对 /etc/passwd，以第六个域的第 2 个字符到第 4 个字符进行升序排序，再基于第一个域进行反向排序。
```
cat /etc/passwd | sort -t ':' -k 6.2,6.4 -k 1,1r
sync:x:4:65534:sync:/bin:/bin/sync
proxy:x:13:13:proxy:/bin:/bin/sh
bin:x:2:2:bin:/bin:/bin/sh
sys:x:3:3:sys:/dev:/bin/sh
bin:x:3:3:sys:/dev:/bin/sh
```
可以看出，六个域的第 2 个字符到第 4 个字符是升序排序。六个域的第 2 个字符到第 4 个字符如果相同则分为一组，组内再按照第一个域进行降序排序。注意，-r 需要与第二个 -k 的 <POS1,POS2> 连写，否则对前面两个 -k 均有效。

---
## 参考文献
[sort(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/sort.1.html)

[Linux命令大全——sort命令](http://man.linuxde.net/sort)
