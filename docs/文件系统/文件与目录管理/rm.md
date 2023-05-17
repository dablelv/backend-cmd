## 1.命令简介
rm（remove）命令用于删除文件或者目录。

使用 rm 命令要格外小心，因为一旦删除了一个文件就无法再恢复它，所以在删除文件之前，最好再看一下文件的内容，确定是否真要删除。

## 2.命令格式
```
rm [OPTION]... FILE...
```

## 3.选项说明
```
-d, --dir
	删除空目录
-f, --force
	忽略不存在的文件和目录，不进行提示。
-i
	在每一次删除文件或目录之前先询问用户是否确定删除，如果不删除则跳过当前文件或者目录
-I
	删除超过三个文件或在递归删除时，提示一次。比 -i 提醒程度较松，同时也能防止大多数错误。如果选择不删除，则终止整个操作
--interactive[=WHEN]
	提醒的方式根据 WHEN 的取值：never 表示不进行提示，once 等同于 -I 选项，always 等同于 -i 选项。不指定 WHEN 默认为 always
--one-file-system
	在递归删除层次结构时，跳过与相应命令行参数不同的文件系统上的任何目录
--no-preserve-root
	对根目录不做特殊对待
--preserve-root
	不删除根目录，为默认选项
-r, -R, --recursive
	递归地删除目录及其内容。删除目录时需要指定该选项。
-v, --verbose
	显示指令的详细执行过程
--help
	显示帮助信息
--version
	显示版本信息
```

## 4.常用示例
（1）删除文件。
```shell
rm -f FILE
```
-f 选项表示忽略不存在的文件和目录，不进行提示。

如果不加 -f 选项，某个文件或目录不存在，则会进行如下提示：

```
rm: cannot remove 'xxx': No such file or directory
```

（2）删除目录。
```shell
rm –rf DIR
```
-r 表示递归地删除目录及其内容。删除目录时需要指定该选项。

（3）同时删除多个文件或目录。

```shell
rm -rf FILE1 FIRLE2 DIR1 DIR2
```

（4）删除当前目录下所有文件及目录，不包含点号 . 开头的隐藏文件和目录。
```shell
rm  -r  *
```
（5）删除当前目录下所有隐藏的文件及目录。
```shell
rm -rf .* 
```
因为当前目录（`.`）和上一层目录（`..`）无法删除，会产生如下错误信息。
```shell
rm: refusing to remove ‘.’ or ‘..’ directory: skipping ‘.’
rm: refusing to remove ‘.’ or ‘..’ directory: skipping ‘..’
```
如果想丢弃上面的错误信息可以使用如下命令：
```shell
rm -rf .* 2>/dev/null
```
该命令表示丢弃标准错误输出。数字 2 是标准错误输出的描述符，`/dev/null` 是一个特殊的设备文件，即空设备，类似于 Windows 的回收站，主要用于丢弃不需要的输出。注意重定向操作符 > 与两边操作数不能有空格。

---
## 参考文献
[rm(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/rm.1.html)

[Linux命令大全.rm命令](http://man.linuxde.net/rm)
