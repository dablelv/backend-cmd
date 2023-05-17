## 1.命令简介
rmdir 用来删除一个或多个空目录。

注意，rmdir 命令无法删除非空目录，删除非空目录可以使用命令`rm -r`。

## 2.命令格式
```
rmdir [OPTION]... DIRECTORY...
```

## 3.选项说明
```
--ignore-fail-on-non-empty
	忽略由于删除非空目录时导致的错误信息
-p, --parents
	删除指定目录后，若该目录的上层目录已变成空目录，则将其一并删除
-v, -verboes
	显示命令的详细执行过程
--help
	显示命令的帮助信息
--version
	显示命令的版本信息
```

## 4.常用示例
（1）删除子目录 dir 后，如果父目录 bin 为空的话，一并删除。
```
rmdir -p bin/dir
```
（2）删除当前目录下所有隐藏的空目录。
```
rmdir .* 2>/dev/null
```

---
## 参考文献
[rmdir(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/rmdir.1.html)

[rmdir(1) manual - linux.org](https://www.linux.org/docs/man1/rmdir.html)

[Linux 命令大全.rmdir 命令](https://man.linuxde.net/rmdir)
