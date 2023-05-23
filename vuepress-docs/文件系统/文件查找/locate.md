## 1.命令简介
locate 用于查看文件。

如果没有指定`--regex`选项，匹配模式可以包含通配符（globbing characters）。如果模式不包含通配符，则模式等价于 `*PATTERN*`。

## 2.locate 与 find 命令的区别？

在 Linux 系统中，locate 和 find 命令都可以用于查找文件或目录，但它们的工作方式和使用场景略有不同。

locate 命令基于系统上建立的文件名数据库（一般为 /var/lib/mlocate/mlocate.db），可以快速地查找文件或目录，因为它不会在实际的文件系统上搜索，而是搜索一个预先建立好的数据库。但是，因为数据库的更新存在延迟，则可能会找不到最新的文件。

find 命令是在文件系统上进行实际搜索的。它可以搜索指定目录及其子目录下符合指定条件的文件或目录，并支持更复杂的搜索条件，如按文件类型、修改时间等进行过滤。由于 find 是在文件系统上进行搜索的，因此相对于 locate，它的搜索速度会慢一些，但它可以搜索到最新的文件。

总的来说，如果需要快速地查找文件或目录，可以使用 locate 命令，而如果需要更灵活的搜索条件，可以使用 find 命令。另外，在使用 locate 命令时，应该先使用 [updatedb(1)](https://man7.org/linux/man-pages/man1/updatedb.1.html) 命令更新文件名数据库，以便可以搜索到最新的文件。

## 3.命令格式
```
locate [OPTION]... PATTERN...
```

## 4.选项说明
```
-A, --all
	只显示匹配所有模式的条目
-b, --basename
	只匹配文件的基本名。作用与选项 --wholename 相反
-c, --count
	只输出符合匹配模式的文件的数量
-d, --database DBPATH
	将默认数据库替换为 DBPATH。该选项可出现多次
-e, --existing
	只打印当前存在的文件
-L, --follow
	当检查文件是否存在时（如果选项 --existing 指定时），检查符号链接的目标文件（默认，相反的选项是 --nofollow）
-h, --help
	显示帮助信息并退出
-i, --ignore-case
	比较时忽略大小写
-l, --limit, -n LIMIT
	限制成功匹配的文件数为 LIMIT
-P, --nofollow, -H
	当检查文件是否存在时（如果选项 --existing 指定时），不检查符号链接的目标文件。作用与 --follow 相反
-0, --null
	在输出时使用 ASCII NUL 字符分隔条目，而不是将每个条目写在单独的行上。此选项是为了与 GNU xargs（1）的 --null 选项配合使用而设计的
-S, --statistics
	不搜索文件，而是显示每个数据库的统计信息
-q, --quiet
	不报告关于读取和处理数据库时遇到的错误的消息
-r, --regexp REGEXP
	使用正则表达式 REGEXP 进行搜索。该选项可出现多次
--regex
	将所有模式解释为扩展的正则表达式
-V, --version
	输出 locate 的版本和许可信息并退出
-w, --wholename
	仅将整个路径名与指定的模式匹配（默认）。如果只匹配文件基本名，可使用选项 --basename
```

## 5.常用示例
（1）查找文件名为 NAME 的文件。
```
locate -b '\NAME'
```
反斜杠 \ 阻止了隐式地将 NAME 转为 *NAME*。

（2）查找文件名包含某个字符串的相关文件。
```
locate -b
/usr/sbin/ifconfig
/usr/share/man/de/man8/ifconfig.8.gz
/usr/share/man/fr/man8/ifconfig.8.gz
/usr/share/man/man8/ifconfig.8.gz
/usr/share/man/man8/ifconfig_selinux.8.gz
/usr/share/man/pt/man8/ifconfig.8.gz
/usr/share/selinux/devel/html/ifconfig.html
/usr/share/zsh/5.0.2/functions/_ifconfig
```

（3）查找配置文件 mlocate.db。
```
locate mlocate.db
/usr/share/man/man5/mlocate.db.5.gz
/var/lib/mlocate/mlocate.db
```

（4）显示数据库的统计信息。
```
locate -S
Database /var/lib/mlocate/mlocate.db:
	21,626 directories
	230,452 files
	15,475,136 bytes in file names
	5,711,659 bytes used to store database
```

（5）搜索基本正则表达式 REGEXP 来代替模式。查找名称以 mlocate 开头，以 db 结尾的文件。
```
locate -b -r ^mlocate.*db$
/var/lib/mlocate/mlocate.db
```

（6）查找最近变动的文件。使用 locate 命令查不到最近变动过的文件。为了避免这种情况，可以在使用 locate 之前，先使用 updatedb 命令，手动更新数据库。
```
# 无法找到新建的文件
touch new_file
locate new_file

# 手动更新数据库后可以查到新建的文件
updatedb
locate new_file
/root/new_file
```

---
## 参考文献
[locate(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/locate.1.html)

[glob(7) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man7/glob.7.html)

<Vssue title="locate" />