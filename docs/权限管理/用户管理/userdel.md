## 1.命令简介
userdel（user delete） 命令是系统管理员命令，用于删除用户账户和相关文件。

其实 userdel 命令实际上是修改了系统的用户账号文件 /etc/passwd、/etc/shadow 以及 /etc/group 文件，这与 Linux 系统“一切操作皆文件”的思想正好吻合。

值得注意的是，如果有该要删除用户相关的进程正在运行，userdel 命令通常不会删除一个用户账号。如果确实必须要删除，可以先终止用户进程，然后再执行userdel命令进行删除。但是 userdel 命令也提供了一个面对该种情况的参数，即 -f 选项。

## 2.命令格式
```
userdel [options] LOGIN
```
若不加选项，则仅删除用户帐号，而不删除相关文件。

## 3.选项说明
```
-f, --force
		强制删除用户，即使用户当前已登录
-h, --help
	显示帮助信息并推出
-r, --remove
	删除用户的同时删除与用户相关的所有文件，比如删除主目录和邮件池
-R, --root CHROOT_DIR
  	在 CHROOT_DIR 目录中应用更改并使用 CHROOT_DIR 目录中的配置文件
-Z, --selinux-user
	为用户删除所有的 SELinux 用户映射
```

## 4.常用示例
（1）删除用户，但不删除其家目录及文件。
```
userdel tom
```
（2）删除用户，删除主目录和邮件池。
```
userdel  -r tom
```
请不要轻易用 -r 选项，它会删除用户的同时删除用户所有的文件和目录，切记如果用户目录下有重要的文件，在删除前请备份。

（3）强制删除用户。
```
userdel -f tom
```

---
## 参考文献
[userdel(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/userdel.8.html)

[CSDN.【Linux】一步一步学Linux——userdel命令(84)](https://blog.csdn.net/dengjin20104042056/article/details/97963550)
