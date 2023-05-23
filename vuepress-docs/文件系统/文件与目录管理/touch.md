## 1.命令简介
touch 用于修改文件或者目录的访问时间、内容修改时间和状态更改时间。默认情况，若文件不存在则新建。

## 2.命令格式
```shell
touch [OPTION]... FILE...
```

## 3.选项说明
```shell
-a
	改变档案的访问时间
-c, --no-create
	不创建任何文件
-d, --date=STRING
	使用指定的时间修改文件时间属性，而非当前时间
-f
	不使用，是为了与其他 Unix 系统的相容性而保留
-h, --no-dereference
	只改变符号链接的时间属性，而不是链接的文件
-m
	改变档案的修改时间
-r, --reference=FILE
	使用参考文件的创建时间，而不是当前时间
-t STAMP
	指定文件的创建时间而不是当前时间，时间 STAMP 格式与 date 命令相同
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）改变文件的时间（最近访问，最近修改和最近改动）为当前系统时间。
```
touch filename
```
（2）如果目标文件不存在，则新建一个文件
```
touch filename
```

---
## 参考文献
[touch(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/touch.1.html)

[Linux touch命令](http://www.runoob.com/linux/linux-comm-touch.html)

<Vssue title="touch" />