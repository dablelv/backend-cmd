## 1.命令简介
adduser 创建新用户或更新默认新用户信息。

adduser 命令用于创建的新的系统用户。adduser 可用来建立用户帐号。帐号建好之后，再用 passwd 设定帐号的密码。而可用 userdel 删除帐号。使用 adduser 指令所建立的帐号，实际上是保存在 /etc/passwd 文本文件中。

adduser 实际上是 useradd 命令的软链接，所以 adduser 用法和 useradd 用法一样。
## 2.命令格式
```shell
adduser [<options>] <LOGIN>
adduser -D
adduser -D [<options>]
```
## 3.选项说明
```
-b, --base-dir BASE_DIR
	新账户的主目录的基目录
-c, --comment COMMENT
	新账户的备注信息，备注信息保存在 /etc/passwd 的备注栏中
-d, --home-dir HOME_DIR
	新账户的主目录
-D, --defaults
	显示或更改默认的 useradd 配置
-e, --expiredate EXPIRE_DATE
	新账户的过期日期，日期格式为 YYYY-MM-DD。如果未指定，useradd 将使用在 /etc/default/useradd 中指定的到期日期 EXPIRE，或默认情况下使用空字符串(无过期)
-f, --inactive INACTIVE
	指定在密码过期后多少天即关闭该账号。如果为 0 账号立即被停用；如果为 -1 则账号一直可用。默认值为 -1
-g, --gid GROUP
	指定用户所属的主组。主组必须已经存在
-G, --groups GROUPS
	指定用户所属的附加组，多个组使用逗号分隔
-h, --help
  显示帮助信息并推出
-k, --skel SKEL_DIR
	指定用户的骨架目录。与选项 -m （或 --create-home）联用，骨架目录包含要复制到用户主目录中的文件和目录
-K, --key KEY=VALUE
	不使用 /etc/login.defs 中的默认值（UID_MIN、UID_MAX、UMASK、PASS_MAX_DAYS 等）
-l, --no-log-init
	不要将此用户添加到最近登录和登录失败数据库
-m, --create-home
	创建用户的家目录。useradd 默认会创建 home 目录，除非 /etc/login.defs 中的 CREATE_HOME 设置为no
-M, --no-create-home
	不创建用户的主目录。即使 /etc/login.defs 中的 CREATE_HOME 设置为 yes
-N, --no-user-group
	不创建同名的组
-o, --non-unique
 	允许使用重复的 UID 创建用户
-p, --password PASSWORD 
 	设置账户密码，注意是使用 crypt(3) 加密后的用户密码，不是密码的明文。默认是用户密码不可用。推荐使用 passwd 命令给用户设置密码
-r, --system
  	创建一个系统账户
-R, --root CHROOT_DIR
	设置根目录。在 Linux 系统中，系统默认的根目录是 /
-s, --shell SHELL 
	新账户的登录 Shell
-u, --uid UID
	新账户的用户 ID
-U, --user-group
	创建与用户同名的组，并将用户添加到此组中。为默认动作，除非  /etc/login.defs 中 USERGROUPS_ENAB 被设置为 no 或显示使用选项 -N, --no-user-group。
-Z, --selinux-user SEUSER
	为 SELinux 用户映射使用指定 SEUSER。
```
## 4.常用示例
（1）添加新用户。
```shell
adduser dablelv
```
默认在创建用户时的同时会创建一个同名的用户主组和在 /home 目录下同名的家目录，除非在配置文件 /etc/login.defs 中 USERGROUPS_ENAB 和 CREATE_HOME 被设置为 no。

（2）添加新用户时，显示指明家目录和所属的主组。
```shell
adduser -d /home/dablelvH -g root dablelv
```
添加用户成功后，我们可以使用 [id](https://dablelv.blog.csdn.net/article/details/102845312) 命令查看用户 dablelv 的用户 ID、主组和附加组。
```shell
id dablelv
uid=1000(dablelv) gid=0(root) groups=0(root)
```

（3）添加新用户后，并使用 passwd 给用户设置密码。
```shell
adduser dablelv
passwd dablelv
```

（4）添加用户，并给用户设置有效期。
```shell
adduser -e 2020-12-31 dablelv
```
（5）使用 useradd -D 查看创建新用户时的默认信息，或直接 cat /etc/default/useradd。
```shell
adduser -D
GROUP=100
HOME=/home
INACTIVE=-1
EXPIRE=
SHELL=/bin/bash
SKEL=/etc/skel
CREATE_MAIL_SPOOL=yes
```
（6）修改创建新用户时的默认信息。
```shell
useradd -D -f 0

# 查看是否修改成功
adduser -D | grep INACTIVE
INACTIVE=0
```

---
## 参考文献
[adduser(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/useradd.8.html)

<Vssue title="adduser" />