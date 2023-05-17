## 1.命令简介
cp（copy）复制文件和目录。

cp 命令主要用于复制文件或目录，可以将一个或多个源文件或者目录复制到指定目的文件或目录。当一次复制多个文件时，目标文件参数必须是一个已经存在的目录，否则将出现错误。

## 2.命令格式
```shell
cp [OPTION]... [-T] SOURCE DEST
cp [OPTION]... SOURCE... DIRECTORY
cp [OPTION]... -t DIRECTORY SOURCE...
```

## 3.选项说明
```
-a, --archive
	此参数的效果和同时指定"-dR --preserve=all"参数相同；
--backup[=CONTROL]
	备份即将被覆盖的目的文件；
-b
	等同于 --backup，但不接受参数；
--copy-contents
	递归拷贝时，拷贝特殊文件的内容；
-d
	当复制符号连接时，保留符号连接； 
-f, --force
	强行复制文件或目录，不论目标文件或目录是否已存在； 
-i, --interactive
	覆盖既有文件之前先询问用户； 
-H
	遵循源文件中的命令行符号链接；
-l, --link
	对源文件建立硬连接，而非复制文件；
-L, --dereference
	总是遵循源文件中的命令行符号链接；
-n, --no-clobber
	不覆盖既有文件；
-P, --no-dereference
	不遵循源文件的符号连接；
-p
	等同于 --preserve=mode,ownership,timestamps；
--preserve[=ATTR_LIST]
	保留指定的文件属性，而非默认的 mode,ownership,timestamps。其它的属性也可以指定，如 context, links, xattr, all；
-c
	等同于 --preserve=context；
--no-preserve=ATTR_LIST
	不保留指定的文件属性；
--parents
	在目录下使用完整的源文件名；
-R, -r, --recursive
	递归处理，将指定目录下的所有文件与子目录一并处理；
--reflink[=WHEN]
	控制克隆/CoW 副本。请查看下面的内容；
--remove-destination
	移动每一个已经存在的目标文件；
--sparse=WHEN
	控制创建稀疏文件；
--strip-trailing-slashes
	删除参数SOURCE中所有目录末端的斜杠；
-s, --symbolic-link
	对源文件建立符号连接，而非复制文件；
-S, --suffix=SUFFIX
	在备份文件时，用指定的后缀“SUFFIX”代替文件的默认后缀；
-t, --target-directory=DIRECTORY
	拷贝所有 SOURCE 指定的文件到目标目录 DIRECTORY；
-T, --no-target-directory
	没有目标目录，将目标文件DEST视为正常文件；
-u, --update
	使用这项参数后只会在源文件的更改时间较目标文件新时或是名称相互对应的目标文件并不存在时，才复制文件；
-v, --verbose
	冗余模式执行cp命令，解释cp的执行过程。
-x, --one-file-system
	保留在当前的文件系统上。
-Z, --context=CONTEXT
	将指定的文本内容变为安全的内容，该选项仅限于 SELinux 内核使用。
--help
	显示帮助信息。
--version
	显示版本信息。
```
选项补充说明。

（1）默认情况下，源文件的稀疏性仅仅通过简单的方法判断，对应的目标文件目标文件也被为稀疏。这是因为默认情况下使用了`--sparse=auto `参数。如果明确使用 `--sparse=always` 参数则不论源文件是否包含足够长的0 序列也将目标文件创建为稀疏件。使用`--sparse=never `参数禁止创建稀疏文件。

（2）当指定了`--reflink[=always]`参数时，执行轻量化的复制，即只在数据块被修改的情况下才复制。如果复制失败或者同时指定了`--reflink=auto`，则返回标准复制模式。

（3）备份文件的后缀为"~"，除非以`--suffix`选项或是`SIMPLE_BACKUP_SUFFIX`环境变量指定。版本控制的方式可通过`--backup`选项或`VERSION_CONTROL`环境变量来选择。

以下是可用的变量值：
- none, off：不进行备份（即使使用了--backup 选项）；
- numbered, t：备份文件加上数字进行排序；
- existing, nil：若有数字的备份文件已经存在则使用数字，否则使用普通方式备份；
- simple, never：永远使用普通方式备份。

（4）有一个特别情况，如果同时指定`--force`和`--backup`选项，而源文件和目标文件是同一个已存在的一般文件的话，cp会将源文件备份。

## 4.常用示例
（1）复制目录 dir1 到 dir2。

如果 dir2 不存在，相当于将 dir1 拷贝一份并命名为 dir2。

如果 dir2 事先存在，相当于将 dir1 拷贝一份放到 dir2 目录下。
```shell
cp -r dir1 dir2
```
（2）复制文件 a、b、c、d 到 dir2。

**注意**，目录 dir2 需要事先存在，否则报错。
```shell
cp a b c d dir2
```
（3）交互式地将目录 /usr/men 中的以 m 打头的所有 .c 文件复制到目录 /usr/zh 中。
```shell
cp -i /usr/men m*.c /usr/zh
```
我们在 Linux 下使用 cp 命令复制文件时候，有时候会需要覆盖一些同名文件，覆盖文件的时候都会有提示：需要不停的按 Y 来确定执行覆盖。

---
## 参考文献
[cp(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/cp.1.html)
