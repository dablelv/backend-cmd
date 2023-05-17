## 1.命令简介
chattr 用于改变文件属性。

与 chmod 命令相比，chmod 只改变文件的读写、执行权限，更底层的属性控制是由 chattr 来改变。

与之对应的命令是 lsattr，用于显示文件属性。

## 2.命令格式
```
chattr [ -RVf ] [ -v version ] [ mode ] files...
```

## 3.选项说明
```
-R
	递归地改变指定目录下文件的属性。此选项忽略符号链接；
-V
	显示命令执行的详细信息；
-f
	大部分错误信息不输出；
-v
	设置文件版本号；
+
	在原有参数设定基础上，追加参数；
-
	在原有参数设定基础上，移除参数；
=
	更新指定参数设定
```
最关键的是 [mode] 部分，[mode] 部分由 + - = 和字符 [acdeijstuADST] 组合而成，这部分是用来控制文件的属性。

chattr 可以改变的文件系统属性有：
|属性 |含义|
|---|---|
|a|append only，只允许向文件追加数据，不允许删除和修改文件内容。如果目录有具有这个属性，系统将只允许在目录下简历和修改文件，不允许删除任何文件。只有root才能设置该属性|
|c|compress，自动将文件压缩，在读取时自动解压缩|
|d|No dump，在进行文件系统备份时，dump指令忽略此文件|
|e|extent format,在ext文件系统中，表示该文件使用区段(extents)映射磁盘上的块|
|i|immutable，不允许对文件进行任何的修改。对于目录而言，只能修改目录之下的文件，不允许建立和删除文件。只有root能设置此属性|
|j|journal，设定此参数使得当通过mount参数：data=ordered 或者 data=writeback 挂 载的文件系统，文件在写入时会先被记录(在journal中)。如果filesystem被设定参数为 data=journal，则该参数自动失效|
|s|secure deletion，系统在删除文件时，使用0填充文件所在的区域|
|t|no tail-merging,文件拥有t属性时，与其它文件合并时末端不会存在局部块碎片|
|u|undeletable，与s相反，删除文件时，文件内容其实还存在磁盘中，以便以后能够恢复删除的文件|
|A|Atime，不能修改文件的最后访问时间|
|D|如果一个目录设置了D属性，任何改变将同步到磁盘；这等价于mount命令中的dirsync选项，同步目录|
|S|Sync，一旦应用程序对文件执行了写操作，则立刻将改动同步到磁盘|
|T|目录设置T属性，Orlov块分配器将该目录视为目录层次结构的顶部，提示块分配器该目录下的子目录是无关的，将被分散的分配|

**注意：**
chattr 指令所修改的文件属性和 chmod 指令修改的文件属性是两个不同层次的属性，前者是底层文件系统来设定的，而 chmod 指令则是站在用户使用的角度来设定的。

## 4.常见示例
（1）用 chattr 命令防止系统中某个关键文件被修改：
```
chattr +i /etc/resolv.conf
```
然后用`mv /etc/resolv.conf`等命令作用于该文件，都会得到 Operation not permitted 的结果。vim 编辑该文件时会提示`W10: Warning: Changing a readonly file`错误。要想修改此文件需要把 i 属性去掉：
```
chattr -i /etc/resolv.conf
```
（2）让某个文件只能追加内容，不能删除或修改，一些日志文件适用于这种操作。
```
chattr +a /data1/user_act.log
```

---
## 参考文献
[chattr(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/chattr.1.html)

[lsattr(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/lsattr.1.html)

[（总结）Linux的chattr与lsattr命令详解](http://www.ha97.com/5172.html)