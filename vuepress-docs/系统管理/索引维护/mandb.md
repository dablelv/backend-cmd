## 1.命令简介
mandb 用于创建或更新手册页索引缓存。

mandb 用于初始化或手动更新索引数据库缓存。缓存包含与手册页系统的当前状态相关的信息，其中存储的信息由 man-db 实用程序用于提高其速度和功能。

创建或更新索引时，mandb 将警告错误的 ROFF.so 请求、虚假的手册页文件名和无法从中解析 whatis 的手册页。

为 mandb 提供可选的以冒号分隔的路径将覆盖内部系统手册页层次结构搜索路径，该路径由配置文件 man_db.conf 确定。

查看配置文件 man_db.conf 的位置可以使用命令 `locate man_db.conf`。

## 2.命令格式
```shell
mandb [-dqsucpt?V] [-C <file>] [<manpath>]
mandb [-dqsut] [-C <file>] -f <filename> ...
```

## 3.选项说明
```shell
-d, --debug
	打印调试信息。
-q, --quiet
	不发出警告。
-s, --no-straycats
	不花时间查找或向数据库添加有关野猫（stray cats）的信息。
-p, --no-purge
	不花时间检查删除的手册页并从数据库中清理它们。
-c, --create
	默认情况下，mandb 会尝试更新任何以前创建的数据库。如果某个数据库不存在，程序会创建它。此选项强制 mandb 删除以前的数据库并重新生成数据库，并隐含打开 --no-purge。在数据库损坏或将来引入新数据库存储方案时，这一选项可能用到。
-u, --user-db
	只创建用户数据库，即使有创建系统数据库所需的写权限。
-t, --test
	对层次结构搜索路径中的手册页执行正确性检查。使用此选项时，mandb 不会更改现有的数据库。
-f, --filename
	只更新指定文件名对应的记录。此选项不作常规使用；它由 man 内部使用（以 MAN_DB_UPDATES 选项编译时），查找页面是否过期。它隐含打开 -p，关闭 -c 和 -s。
-C, --config-file=<file>
	使用此用户配置文件代替默认的 ~/.manpath。
-?, --help
	显示用法消息，然后退出。
--usage
	打印一条简短的使用消息并退出。
-V, --version
	显示版本，然后退出。
```

## 4.相关文件
- /etc/man_db.conf：mandb 使用的配置文件。
- /var/cache/man/index.(bt|db|dir|pag)：符合 FHS（Filesystem Hierarchy Standard）的全局索引数据库缓存。

数据库缓存的较旧位置包括：

- /usr/man/index.(bt|db|dir|pag)：传统的全局索引数据库缓存。
- /var/catman/index.(bt|db|dir|pag)：备用或 FSSTND 兼容的全局索引数据库缓存。
## 5.常用示例
（1）更新指定命令手册页索引缓存。
```shell
# mandb top
```

（2）使用 -d 参数，打印调试信息。
```shell
# mandb -d top
From the config file /etc/man_db.conf:

Mandatory mandir `/usr/man'.
Mandatory mandir `/usr/share/man'.
Mandatory mandir `/usr/local/share/man'.
Path `/bin' mapped to mandir `/usr/share/man'.
Path `/usr/bin' mapped to mandir `/usr/share/man'.
Path `/sbin' mapped to mandir `/usr/share/man'.
...
```

（3）只创建用户数据库。

使用 -u 参数，只创建用户数据库，即使有创建系统数据库所需的写权限。
```shell
# mandb -u top
0 man subdirectories contained newer manual pages.
0 manual pages were added.
0 stray cats were added.
0 old database entries were purged.
```

---
## 参考文献
[mandb(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/mandb.8.html)

<Vssue title="mandb" />