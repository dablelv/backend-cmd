## 1.命令简介
head 用于显示文件开头的内容。默认情况下，显示文件的头 10 行内容。

## 2.命令格式
```
head [OPTION]... [FILE]...
```
可以指定多个文件 FILE，以空格分隔，此种情况下，输出的内容前会列出所属文件名。如果未给定 FILE 或者 FILE 是 -，则从标准输入读取。

## 3.选项说明
```
-c, --bytes=[-]K
	显示每个文件的前 K 字节内容；如果附加 - 参数，则显示每个文件最后 K 字节外的所有内容
-n, --lines=[-]K
	显示每个文件的前 K 行内容；如果附加 - 参数，则显示每个文件最后 K 行外的所有内容
-q, --quiet, --silent
	多个文件时输出的内容前隐藏文件名
-v, --verbose
	多个文件时输出的内容前显示文件名（默认）
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```
注意，长选项的强制参数对于短选项也是强制的。

## 4.常用示例
（1）显示文件 /etc/passwd 的前 10 行。
```
head /etc/passwd

root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
```

（2）显示文件 /etc/passwd 的前 3 行。
```
head -n3 /etc/passwd

root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
```

（3）同时显示多个文件的前 3 行，默认会显示文件名。以 /etc/passwd 和 /etc/group 为例。
```
head -n3 /etc/passwd /etc/group

==> /etc/passwd <==
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin

==> /etc/group <==
root:x:0:
bin:x:1:
daemon:x:2:
```

---
## 参考文献
[head(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/head.1.html)