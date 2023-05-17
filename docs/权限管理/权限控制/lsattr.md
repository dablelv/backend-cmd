## 1.命令简介
lsattr 用于显示文件属性。

与之对应的命令是 chattr，用于改变文件属性。与 chmod 命令相比，chmod 只改变文件的读写、执行权限，更底层的属性控制是由 chattr 来改变。

## 2.命令格式
```
lsattr [ -RVadv ] [ files... ]
```

## 3.选项说明
```
-R
	递归列出子目录及其文件的属性
-V
	显示lsattr版本信息
-a
	显示所有隐藏的文件属性
-d
	如果是目录，则只显示目录本身的属性，而非目录内的文件名
-v
	显示文件版本号
```

## 4.常用示例
```
lsattr -vV
lsattr 1.41.12 (17-May-2010)
18446744072009275534 --------------- ./demo
18446744072009481631 --------------- ./inputFile.txt
18446744072009374382 -----a--------- ./input_file.txt
```
第一行为 lsattr 版本信息，第一列为文件版本号，最后一个文件 input_file.txt 属性 a，表示只追加属性。

---
## 参考文献
[lsattr(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/lsattr.1.html)

[chattr(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/chattr.1.html)

[（总结）Linux的chattr与lsattr命令详解](http://www.ha97.com/5172.html)
