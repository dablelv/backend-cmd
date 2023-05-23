## 1.命令简介
file 命令用来识别文件类型。

对文件的检查分为文件系统、魔数检查和语言检查三个过程，也可用来辨别一些文件的编码格式。它是通过查看文件的头部信息来获取文件类型，而不是像 Windows 通过扩展名来辨识文件类型。

## 2.命令格式
```shell
file [-bchiklLNnprsvz0] [--apple] [--mime-encoding] [--mime-type] [-e testname] [-F separator] [-f namefile] [-m magicfiles] file ...
file -C [-m magicfiles]
file [--help]
```

## 3.选项说明
```
--apple
	输出旧 MacOS 版本使用的文件类型和创建者代码。代码由八个字母组成，第一个字母描述文件类型，第二个字母描述创建者。此选项仅适用于定义了 Apple 风格输出的文件格式
-b, --brief
	简约模式，不显示文件名称
-C, --compile
	生成 magic.mgc 文件。配合选项 -m 使用
-c, --checking-printout
	输出魔法文件的解析结果
-e, --exclude TESTNAME
	排除对指定类型文件的检查，TESTNAME 可取值有 apptype、ascii、encoding、tokens、cdf、compress、elf、soft、tar
-F, --separator SEP
	使用指定分隔符替换输出文件名后的默认的冒号分隔符 :
-f, --files-from NAMEFILE
	从文件 NAMEFILE 中读取待检测的文件，每行一个
-i, --mime
	输出 mime 类型的字符串而不是可读字符串，比如输出"text/plain; charset=us-ascii"而不是"ASCII text"
--mime-type, --mime-encoding
	像 -i，但是只打印指定元素
-k, --keep-going
	不在首次匹配时停止，继续检查
-l, --list
	打印每个魔数模式的强度信息
-L, --dereference
	查看软链接对应文件的文件类型
-m, --magic-file MAGICFILES
	指定 magic file。magic file 指的是那些具有特殊内容的文件，比如 C 文件，它会有 #include 字样；tar 文件的前几个字节会有特殊的规则。而检验 magic file 规则就是根据这些特殊的格式去判断一个文件的类型。而这些规则保存在 $HOME/.magic.mgc
-N, --no-pad
	不要填充文件名以便它们在输出中对齐
-n, --no-buffer
	强制刷新标准输出 stdout。这个选项只在检查多个文件时有效。在通过管道获取文件类型时也可以使用该选项
-p, --preserve-date
	保留待检测文件的access time，即使file命令不更改待检测文件的access time
-r, --raw
	不将不可打印字符转换为\ooo的八进制形式，正常情况下，file会做转换
-s, --special-files
	正常情况下，file命令只支持普通文件的检测，就像stat(2)一样。使用该选项可以让file命令支持特殊文件，比如原始磁盘分区等
-v, --version
	显示版本信息
-z, --uncompress
	尝试去解读压缩文件的内容
-0, --print0
	在文件名后输出空字符 \0
--help
	显示帮助信息
```

## 4.常用示例
（1）查看文件类型。
```shell
file Changelog 
Changelog: ASCII text
```

（2）不输出文件名称，只显示文件格式以及编码。
```shell
file -b Changelog 
ASCII text
```

（3）输出 mime 类型的字符串。
```shell
file -i Changelog 
Changelog: text/plain; charset=us-ascii
```

（4）查看软链接对应文件的文件类型。
```shell
ll Changelog*
-rw-r--r-- 1 root root 1598 Nov  6 22:39 Changelog
lrwxrwxrwx 1 root root    9 Nov  6 23:07 Changelog.ln -> Changelog

# 查看软链接本身类型
file Changelog.ln
Changelog.ln: symbolic link to `Changelog'

# 查看软链接对应文件的文件类型
file -L Changelog.ln
Changelog.ln: ASCII text
```
（5）查看程序是 32 位还是 64 位。
```
file ./a.out 
./a.out: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=7dd2556f5818bc85c64ab82131cf0b748567a976, not stripped
```
通过 ELF 64-bit LSB executable 可以看出程序是 64 位的。

---
## 参考文献
[file(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/file.1.html)

[linux shell file与magic file文件](https://blog.csdn.net/pzqingchong/article/details/70226640)

[Linux命令详解-file](https://www.cnblogs.com/Dodge/p/4278306.html)

<Vssue title="file" />