## 1.命令简介
iconv 是用来转换文件的编码方式，比如它可以将 UTF8 编码的转换成 GB18030 的编码。

Linux下的 iconv 开发库包括`iconv_open,iconv_close,iconv`等C函数（非标准库函数），可以用来在 C/C++ 程序中很方便地转换字符编码。

## 2.命令格式
```
iconv -f FROMCODE -t TOCODE FILE ...
```

## 3.选项说明
iconv 将给定编码的文件，转换为指定编码的内容，结果默认输出到标准输出，可以使用`--output`或`-o`输出到指定文件。
```
-c 
	静默丢弃不能识别的字符，而不是终止转换
-f, --from-code=CODE
	指定待转换文件的编码。
-t, --to-code=CODE
	指定目标编码
-l, --list
	列出已知的字符编码。
-o, --output=FILE
	列出指定输出文件，而非默认输出到标准输出
-s, --silent
	关闭警告。
--verbose
	显示进度信息
-?, --help
	显示帮助信息
--usage
	显示简要使用方法
-V, --version
	显示版本信息
```
-f 和 -t 所能指定的合法编码可以在 -l 选项的结果中查看。 

## 4.常用示例
（1）将 GBK 文件转换为 UTF8 文件。
```
iconv -f gbk -t utf8 inputFile.txt -o outputFile.txt.utf8
```

（2）转换时报如下错误："iconv: 未知 126590 处的非法输入序列"。此时使用`-c`选项。
```
iconv -c -f gbk -t utf8 inputFile.txt -o outputFile.txt.utf8
```

---
## 参考文献
[iconv(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/iconv.1.html)
