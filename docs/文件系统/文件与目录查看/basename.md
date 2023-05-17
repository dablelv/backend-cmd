## 1.命令简介
basename 从文件路径中剥离目录和后缀，以获取文件的基本名称。与 dirname 命令作用相反，dirname 用于获取目录部分。

## 2.命令格式
```shell
basename NAME [SUFFIX]
basename OPTION... NAME...
```

## 3.选项说明
长选项的强制参数对于短选项也是强制的。
```
-a, --multiple
	支持多个文件名称参数，将每一个参数当做文件名对待
-s, --suffix=SUFFIX
	移除后缀
-z, --zero
	以空字符 NUL 分隔输出而不是换行符
--help
	显示帮助并退出
--version
	显示版本并退出
```

## 4.常用示例
（1）获取文件名，不包含目录。
```shell
basename /root/go/src/main.go
main.go
```

（2）获取文件名，不包含目录与后缀。
```shell
basename /root/go/src/main.go .go
main
```

（3）同时获取多个文件名，不包含目录与后缀。
```shell
basename -a -s .go /root/go/src/main.go /root/go/src/util.go
main
util
```

（4）如果路径最后一个是目录，那么急脾气最后一个目录的名字。
```shell
basename /root/go/src/
src
```

---
## 参考文献
[basename(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/basename.1.html)