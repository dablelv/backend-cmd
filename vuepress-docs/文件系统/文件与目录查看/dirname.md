## 1.命令简介
dirname 从文件路径中获取文件目录。

dirname 作用与 basename 命令相反，basename 用于获取文件名。

如果文件路径中不包含 /，那么输出 . 表示当前目录。如果文件路径最后一个字符是 /，那么剥离倒数第二个 / 及其后的内容。

## 2.命令格式
```
dirname [OPTION] NAME...
```

## 3.选项说明
```
-z, --zero
	用空字符 NUL 而不是换行符分隔输出
--help
	显示帮助并退出
--version
	显示版本并退出
```

## 4.常用示例
（1）获取目录部分，剥掉文件名。
```
$ dirname /root/go/src/main.go
/root/go/src
```

（2）获取目录部分，剥掉文件名，后跟多个文件路径。
```
$ dirname /root/go/src/main.go /root/go/src/util.go
/root/go/src
/root/go/src
```

（3）获取目录的目录。即如果文件路径最后一个字符是 /，那么剥离倒数第二个 / 及其后的内容。
```
$ dirname /usr/bin/
/usr
```

（4）如果文件路径中不包含 /，那么输出 . 表示当前目录。
```
$ dirname stdio.h
.
```

（5）路径是根目录的特殊情况。不剥除任何内容，输出 /。
```
$ dirname /
/
```

---
## 参考文献
[dirname(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/dirname.1.html)

<Vssue title="dirname" />