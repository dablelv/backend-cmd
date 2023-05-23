## 1.命令简介
lastlog 用于显示系统中所有用户最近一次登录信息。

lastlog 命令格式化输出上次登录日志 /var/log/lastlog 的内容。它根据 UID 排序显示登录名、终端（tty）和上次登录时间。如果一个用户从未登录过，lastlog 显示 `**Never logged in**`。

注意需要以 root 身份运行该命令。

## 2.命令格式
```shell
lastlog [<options>]
```
无选项单独执行 lastlog 将打印 lastlog 日志中的条目，并按其在 /etc/passwd 中的顺序进行排序。

## 3.选项说明
```shell
-b, --before <DAYS>
	仅打印早于 DAYS 的最近登录记录。
-C, --clear
	清除用户的 lastlog 记录（仅与-u一起使用）。
-h, --help
	显示此帮助信息并退出。
-R, --root <CHROOT_DIR>
	在 CHROOT_DIR 目录中应用更改并使用 CHROOT_DIR 目录中的配置文件。
-S, --set
	将 lastlog 记录设置为当前时间（仅与 -u 一起使用）。
-t, --time <DAYS>
	仅打印晚于 DAYS 的最近登录记录。
-u, --user <LOGIN>
	打印 LOGIN 用户的最近登录记录。
```

## 4.常用示例
（1） 显示系统中所有用户最近一次登录信息。
```shell
Username         Port     From             Latest
root             pts/4    223.73.1.91      Thu Oct 27 15:49:23 +0800 2022
bin                                        **Never logged in**
daemon                                     **Never logged in**
adm                                        **Never logged in**
lp                                         **Never logged in**
sync                                       **Never logged in**
shutdown                                   **Never logged in**
halt                                       **Never logged in**
mail                                       **Never logged in**
operator                                   **Never logged in**
games                                      **Never logged in**
ftp                                        **Never logged in**
nobody                                     **Never logged in**
systemd-network                            **Never logged in**
dbus                                       **Never logged in**
polkitd                                    **Never logged in**
libstoragemgmt                             **Never logged in**
rpc                                        **Never logged in**
ntp                                        **Never logged in**
abrt                                       **Never logged in**
sshd                                       **Never logged in**
postfix                                    **Never logged in**
chrony                                     **Never logged in**
tcpdump                                    **Never logged in**
syslog                                     **Never logged in**
www                                        **Never logged in**
lighthouse                                 **Never logged in**
tss                                        **Never logged in**
```

（2）显示指定用户的最近登录信息。
```shell
lastlog -u root
Username         Port     From             Latest
root             pts/4    223.73.1.91      Thu Oct 27 15:49:23 +0800 2022
```

（3）显示指定天数前的登录信息。
```shell
lastlog -b 7
Username         Port     From             Latest
bin                                        **Never logged in**
daemon                                     **Never logged in**
adm                                        **Never logged in**
...
```

（4）显示指定天数以来的登录信息。
```shell
lastlog -b 7
Username         Port     From             Latest
root             pts/4    223.73.1.91      Thu Oct 27 15:49:23 +0800 2022
```

（5）清除指定用户的登录信息。
```shell
lastlog -C -u root

lastlog -u root
Username         Port     From             Latest
root                                       **Never logged in**
```

---
## 参考文献
[lastlog(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/lastlog.8.html)

<Vssue title="lastlog" />