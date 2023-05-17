## 1.命令简介
size 用于查看目标文件、库或可执行文件中各段及其总和的大小，是 GNU 二进制工具集 [GNU Binutils](https://www.gnu.org/software/binutils/) 的一员。

## 2.命令格式
```
size [-A|-B|--format=compatibility]
    [--help]
    [-d|-o|-x|--radix=number]
    [--common]
    [-t|--totals]
    [--target=bfdname] [-V|--version]
    [OBJFILE...]
```
其中 OBJFILE... 为待检测的文件列表，若未给定，则默认为 a.out。

## 3.选项说明
```
-A
-B
--format=compatibility
	控制输出格式。-A 或 --format=sysv 表示使用 System V size 风格，-B 或 --format=berkeley 表示使用 Berkeley size 风格。默认使用 Berkeley size 风格的输出。
	
	下面是 Berkeley 风格示例：
	$ size --format=Berkeley ranlib size
	text    data    bss     dec     hex     filename
	294880  81920   11592   388392  5ed28   ranlib
	294880  81920   11888   388688  5ee50   size

	下面是接近 System V 风格示例：
	$ size --format=SysV ranlib size
	ranlib  :
	section         size         addr
	.text         294880         8192
	.data          81920       303104
	.bss           11592       385024
	Total         388392

	size  :
	section         size         addr
	.text         294880         8192
	.data          81920       303104
	.bss           11888       385024
	Total         388688

--help
	显示帮助信息

-d
-o
-x
--radix=number
	控制大小输出的进制 -d 或 --radix=10 表示 10 进制，-o 或 --radix=8 表示八进制，-x 或 --radix=16 表示 16 进制

--common
	打印每个文件的 common symbols 大小

-t
--totals
	列出所有文件的总大小。注意，只能使用 Berkeley 风格输出

--target=bfdname
	指明目标文件的格式。该选项没有必要指定，因为 size 可自动推导
	
-V
--version
	显示版本
	
@file
	从指定的文件 file 读取命令行选项。文件中的选项由空白符（空格，TAB和回车）分隔。选项中可以包含空白字符，方法是将整个选项用单引号或双引号括起来。任何字符（包括反斜杠）可以通过添加前缀反斜杠来包含。文件本身可能包含额外的 @file 选项，该选项将以递归方式处理
```

## 4.常用示例
（1）查看指定程序各个段的大小。以 size 为例。
```
size /bin/size
text	   data	    bss	    dec	    hex	filename
22565	   1428	   1360	  25353	   6309	/bin/size
```

（2）查看静态库中的各个目标文件的段大小。以 libc.a 为例。
```
size /usr/lib64/libc.a

text	   data	    bss	    dec	    hex	filename
233	      4	      0	    237	     ed	init-first.o (ex /usr/lib64/libc.a)
1667	      0	      0	   1667	    683	libc-start.o (ex /usr/lib64/libc.a)
64	      0	      0	     64	     40	sysdep.o (ex /usr/lib64/libc.a)
953	      0	      0	    953	    3b9	version.o (ex /usr/lib64/libc.a)
395	      0	      0	    395	    18b	check_fds.o (ex /usr/lib64/libc.a)
852	      8	   2192	   3052	    bec	libc-tls.o (ex /usr/lib64/libc.a)
307	      0	      0	    307	    133	elf-init.o (ex /usr/lib64/libc.a)
8	      0	      0	      8	      8	dso_handle.o (ex /usr/lib64/libc.a)
0	      0	      4	      4	      4	errno.o (ex /usr/lib64/libc.a)
...
```

---
## 参考文献
[GNU Binutils](https://www.gnu.org/software/binutils/)

[size(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/size.1.html)

[六个例子带你入门 size 命令](https://linux.cn/article-9504-1.html?pr)
