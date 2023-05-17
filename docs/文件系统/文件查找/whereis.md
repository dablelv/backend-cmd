## 1.命令简介
whereis 命令用于查找命令的二进制程序、源代码文件和 man 手册等相关文件的路径。

如果仅显示命令的绝对路径，可使用 which 命令，其他普通文件的查找需使用 locate 或 find 命令。

whereis 默认的搜索路径是从硬编码路径中查找，硬编码路径是用 [glob patterns](http://man7.org/linux/man-pages/man7/glob.7.html) 定义的，以及环境变量 PATH 和 MANPATH 定义的路径。要知道使用了哪些路径，最简单的方法是使用 -l 选项来查看。

## 2.命令格式
```
whereis [OPTIONS] [-BMS DIRECTORY... -f] NAME...
```
whereis 会将提供的文件名前面的路径与后面的扩展名去掉，并找出与之相匹配的特殊文件。

## 3.选项说明
```
-b
	只搜索二进制文件
-m
	只搜索 man 手册
-s
	只搜索源代码
-u
	只展示有相关特殊文件（二进制程序、源代码文件、man 手册）的命令名称
-B LIST
	指定二进制文件查找目录，使用空格分隔
-M LIST
	指定 man 手册查找目录，使用空格分隔
-S LIST
	指定源代码文件查找目录，使用空格分隔
-f
	在使用 -S 、–M、-B 选项时，必须使用这个选项，用于表示目录的结束，命令名的开始
-l
	输出正在使用的有效查找路径
```

## 4.常用示例
（1）查看命令 which 的二进制文件与帮助手册的路径。
```
whereis which
which: /usr/bin/which /usr/share/man/man1/which.1.gz
```

（2）只搜索二进制文件 which 的路径。
```
whereis -b which
which: /usr/bin/which
```

（3）只搜索命令 which 帮助手册的路径。
```
whereis -m which
```

（4）搜索当前目录下所有文件时，只展示具有相关特殊文件的文件名。

```
# 当前目录下的文件
$ ll
-rwxr-xr-x 1 root root 21915 May 25 10:03 a.out
-rw-r--r-- 1 root root   351 May 25 10:03 main.cpp
-rw-r--r-- 1 root root   965 Nov  7 18:20 moretest.txt
-rw--w--w- 1 root root   316 Nov  5 15:33 passwd.md5

# 使用选项 -u 的结果
$ whereis -u *
passwd: /usr/bin/passwd /etc/passwd /usr/share/man/man1/passwd.1.gz /usr/share/man/man5/passwd.5.gz

# 不使用选项 -u 的结果
$ whereis *
a:main:moretest:passwd: /usr/bin/passwd /etc/passwd /usr/share/man/man1/passwd.1.gz /usr/share/man/man5/passwd.5.gz
```

（5）指定查找命令 passwd 的目录为 /usr/bin。
```
$ whereis -b -B /usr/bin -f passwd
passwd: /usr/bin/passwd
```

（6）查看 whereis 默认的搜索路径。
```shell
$ whereis -l
bin: /usr/bin
bin: /usr/sbin
bin: /usr/lib
bin: /usr/lib64
...
```

---
## 参考文献
[whereis(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/whereis.1.html)

[实例讲解Linux whereis 命令](https://baijiahao.baidu.com/s?id=1594159569681101446&wfr=spider&for=pc)
