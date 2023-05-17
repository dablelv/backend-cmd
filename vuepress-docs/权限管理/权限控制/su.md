## 1.命令简介
su 用于临时切换身份到另一个指定的用户，未指定用户名默认为 root。

使用 su 切换用户身份后，默认情况下不改变当前工作目录，但会改变 HOME、SHELL、USER、LOGNAME 等 Shell 的环境变量。

## 2.命令格式
```
su [OPTIONS] [-] [USER [ARG...]]
```

## 3.选项说明
```
-c, --command=CMD
	执行完指定命令后，立即恢复原来的用户身份
--session-command=CMD
	等同于选项 -c，但不创建新会话
-, -l, --login
	切换用户身份时启动一个新的 Shell。此选项可同时改变工作目录和 HOME、SHELL、USER、LOGNAME 等环境变量，也包括环境变量 PATH
-f, --fast
	不必读启动文件（如 csh.cshrc 等），仅用于 csh 或 tcsh 两种 Shell
-m, --preserve-environment
	保留原用户的 Shell 环境变量
-p
	同 -m
-s, --shell=SHELL
	指定使用的 Shell
-h, --help
	显示帮助信息并退出
-v, --version
	显示版本信息并退出
```

## 4.常用示例

（1）不指定目标用户，缺省切换到 root。
```shell
su
```

（2）切换到指定的用户。
```shell
su foo
```

（3）切换用户身份时同时切换 Shell 环境。
```shell
su - root
```

（4）切换用户后执行指定命令，执行后返回原用户。
```shell
su -c ls root
```

## 5.su 和 sudo 命令的区别

su 用来长时间切换用户，常见用法是`su USERNAME`，未指定 USERNAME 默认切换至 root。

sudo 允许被授权的用户以其他用户或者管理员身份来执行命令，可以使用 -u 选项来指明需要使用的用户身份，默认是 root。sudo 使一般用户不需要知道超级用户的密码即可获得权限。首先超级用户将普通用户的名字、可以执行的特定命令、按照哪种用户或用户组的身份执行等信息，登记在特殊的文件中（通常是 /etc/sudoers），即完成对该用户的授权（此时该用户称为 sudoer）。若其未经授权的用户企图使用 sudo，则会发出警告的邮件给管理员。用户使用 sudo 时，必须先输入当前用户密码，如果当前用户是 root 或者当前用户与目标用户一致，无需输入密码，之后的一段时间内（默认为 5 分钟，可在 /etc/sudoers 配置），使用 sudo 不需要再次输入密码。

---
# 参考文献
[su(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/su.1.html)

[sudo(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/sudo.8.html)