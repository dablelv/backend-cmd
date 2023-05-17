## 1.命令简介
col（control）命令是一个标准输入文本过滤器，它从标准输入读取内容，过滤掉控制字符反向换行符（RLF-Reverse Line Feed）和半反向换行符（HRLF-Halt RLF）后输出到标准输出。还可以将空白符用等价制表符（Tab）或空格（Space）来替换。

在许多 Linux 说明文件里，包含控制字符。当我们运用 Shell 特殊字符 > 和 >> 把说明文件的内容输出成纯文本文件时，控制字符会变成乱码，col 命令则能有效滤除这些控制字符。

## 2.命令格式
```
col [OPTIONS]
```

## 3.选项说明
```
-b, --no-backspaces
	不输出任何退格符，只打印写入每个列位置的最后一个字符
-f, --fine
	允许正向半换行符（half-forward line feeds）。通常，处于半行分界线上的字符打印在下一行
-h, --tabs
	将多个空格转换为Tab，一般 4 个 空格转为 1 个 Tab
-l, --lines NUMBER
	设置缓冲行为 NUMBER，默认为 128
-p, --pass
	不转换未识别的控制符
-x, --spaces
	将 Tab 转为多个空格，一般 1 一个 Tab 转为 4 个空格
-H, --help
	显示帮助信息并退出
-V, --version
	显示版本信息并退出
```

## 4.常用示例
（1）将 Tab 替换为空格，一般 1 个 Tab 转为 4 个空格。
```
echo -e "123\t456" | col -x
```
（2）将空格替换为 Tab，一般 4 个 空格转为 1 个 Tab。
```
echo -e "123    456" | col -h
```
（3）将帮助文档内的控制符删除。以 col 命令的 manual 为例。
```
man col | col -b > newFile
```

## 5.相关疑问
RLF 字符(reverse line feed)是反向换行符，HRLF字符（half-reverse line feed）是半反向换行符。百度知道中有网友的回答，但是我还是不太清楚这两个字符的作用和应用场景，请知道的大牛评论告知，万分感谢。

---
## 参考文献
[col(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/col.1.html)

[linux 命令手册.col 命令 ](http://linux.51yip.com/search/col)

[Linux 命令大全.col 命令](https://man.linuxde.net/col)

[Stack Overflow.What is a reverse line feed](https://stackoverflow.com/questions/10638382/what-is-a-reverse-line-feed)
