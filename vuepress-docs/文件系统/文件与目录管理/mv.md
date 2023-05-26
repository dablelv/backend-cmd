
## 1.命令简介
mv (move) 用来移动或改名文件和目录。

移动文件时如果目标文件已经存，则目标文件的内容将被覆盖。

mv 命令可以用来将源文件移至一个目标文件中，或将一组文件移至一个目标目录中。源文件被移至目标文件有两种不同的结果： 

（1）如果目标文件是目录，原文件会被移到此目录下，且文件名不变。当目标文件是目录时，源文件或目录参数可以有多个，则所有的源文件都会被移至目标目录中。所有移到该目录下的文件都将保留以前的文件名。

（2） 如果目标文件不是目录，则原文件名（只能有一个）会变更为目标文件名，并覆盖己存在的同名文件。如果原文件和目标文件在同一个目录下，mv 的作用就是修改文件名。

**注意：** 

(1) mv 与 cp 的结果不同，mv 像是文件“搬家”，文件个数并未增加。而 cp 对文件进行复制，文件个数增加了。

(2) 尽管其手册没有说明，使用 mv 移动目录时如果目标目录非空将失败。确定安全的情况下，可以改用 cp 命令。
```shell
cp -rf yourdir dstdir && rm -r yourdir
```

## 2.命令格式
```shell
mv [OPTION]... [-T] SOURCE DEST
mv [OPTION]... SOURCE... DIRECTORY
mv [OPTION]... -t DIRECTORY SOURCE...
```
## 3.选项说明
```shell
--backup=[=CONTROL]
	若需覆盖文件，则覆盖前先行备份
-b
	当文件存在时，覆盖前，为其创建一个备份。功能类似于--backup，但是不需要接收参数
-f, --force
	若目标文件或目录与现有的文件或目录重复，则直接覆盖现有的文件或目录，不进行提示
-i, --interactive
	交互式操作，覆盖前先行询问用户，如果源文件与目标文件或目标目录中的文件同名，则询问用户是否覆盖目标文件。用户输入”y”，表示将覆盖目标文件；输入”n”，表示取消对源文件的移动。这样可以避免误将文件覆盖
-n, --no-clobber
	不覆盖现有的同名文件或目录；如果同时指定多个以下选项，-i, -f, -n，则只有最后一个生效
--strip-trailing-slashes
	删除参数 SOURCE 中所有目录末端的斜杠
-S, --suffix=SUFFIX
	为备份文件指定后缀，而不使用默认的后缀
-t, --target-directory=DIRECTORY
	指定源文件要移动到的目标目录
-u, --update
	当源文件比目标文件新或者目标文件不存在时，才执行移动操作
-v, --verbose
	冗余模式执行 mv，解释 mv 命令的执行过程
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）将文件 old 改名为 new。
```
mv old new
```

（2）将目录 /usr/men 中的所有文件移到当前目录（用.表示）中。
```
mv /usr/men/* .
```

---
## 参考文献
[mv(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/mv.1.html)

[Linux命令大全.mv命令](http://man.linuxde.net/mv)

[mv: Directory not empty - Ask Ubuntu](https://askubuntu.com/questions/269775/mv-directory-not-empty)

<Vssue title="mv" />