## 1.命令简介
split 命令用于将一个大文件分割成较小的文件，默认每 1000 行分割成一个小文件。有时需要将文件分割成更小的片段，比如为提高可读性、生成日志等。

## 2.命令格式
```
split [OPTION]... [FILE [PREFIX]]
```
将文件 FILE 切分输出到 PREFIXaa、PREFIXab，以此类推。默认按 1000 行为单位进行切分，前缀 PREFIX 默认为 x。

如果没有文件，或者当文件是 -，从标准输入读取。
## 3.选项说明
注意，长选项的强制性参数对于短选项也是强制的。
```
-a, --suffix-length=N
	指定分割后文件名的后缀字符数目（后缀长度），默认是 2
-b, --bytes=SIZE
	指定每一子输出文件的大小，单位 byte
-C, --line-bytes=SIZE
	子文件中，单行的最大字节数
-d
	使用数字作为后缀，从 0 开始
--numeric-suffixes[=FROM]
	作用同-d，但可以设置起始数字
-x
	使用从 0 开始的十六进制后缀，而不是字母
-, -l, --lines=NUMBER
	指定多少行分割成一个小文件
-t, --separator=SEP
	使用 SEP 替代换行符作为记录分隔符
--verbose
	分割文件时输出冗余信息
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）将 /etc/passwd 每十行分割成一个小文件，小文件名的前缀是 lvlv。
```
split -10 /etc/passwd lvlv

// 使用 ls 查看分割出来的小文件
ls
lvlvaa  lvlvab  lvlvac  lvlvad  lvlvae
```

（2）按 10 行分割文件，每个文件的后缀从 000 开始。
```
split -a3 -d -10 /etc/passwd lvlv
```
---
## 参考文献
[split manual](http://man7.org/linux/man-pages/man1/split.1.html)

<Vssue title="split" />