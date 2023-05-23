## 1.命令简介
chown 用来改变文件或目录的属主（owner）和所属用户组（group）。

chown 仅限超级用户 root 使用，普通用户没有权限改变文件属主及所属组。

该命令通过改变文件的属主或所属用户组可以向某个用户授权。属主可以是用户名或用户 ID，用户组可以是组名或组 ID。文件名是由空格分隔的文件列表，在文件名中可以包含通配符。

## 2.命令格式
```
chown [OPTION]... [OWNER][:[GROUP]] FILE...
chown [OPTION]... --reference=RFILE FILE...
```
在指定属主与所属用户组时有如下几种情况：
（1）如果只指定了属主，则只改变每个给定文件的属主，不会更改文件的用户组；
（2）如果属主后面跟一个冒号和用户组，则文件所属的用户组也将被更改；
（3）如果用户名后面有冒号但没有组名，则该用户将成为文件的属主，并且文件属组将更改为该用户的登录组；
（4）如果给定冒号和组名，但省略了属主，则只更改所属组。这种情况，chown 的功能等同于 chgrp；
（5）如果只给定一个冒号，或者整个操作数为空，则属主和用户组都不会更改。

注意，OWNER 与 GROUP 之间的冒号可以使用点号替代。

## 3.选项说明
```
-c, --changes
	 输出效果类似 verbose 模式，但只在有更改生效时才显示。
-f, --silent, --quiet
	忽略大部分错误信息。
-v, --verbose
	显示指令详细的执行过程
--dereference
	修改符号链接指向的实际文件的属主和所属用户组，而不是符号链接文件本身。为默认选项
-h, --no-dereference
	修改符号链接文件本身的属主和所属用户组。作用与 --dereference 相反
--from=CURRENT_OWNER:CURRENT_GROUP
	只有当文件的属主和所属组符合选项所指定的才更改。CURRENT_OWNER 和 CURRENT_GROUP 可以省略，这时省略的属性就不需要进行匹配
--no-preserve-root
	不特殊对待根目录 /。为默认选项
--preserve-root
	不允许在根目录 /上递归操作
--reference=RFILE
	使用指定的文件 RFILE 的属主和所属用户组，而非指定值
-R, --recursive
	递归处理所有的文件及子目录
	
以下三个选项 -H、-L 和 -P 与 -R 配合使用，用于递归操作时确定遍历的方式：
-H
	如果命令行参数是一个符号链接指向一个目录，则遍历它
-L
	遍历每一个符号链接指向的目录
-P
	不遍历任何符号链接（缺省选项）。

--help
	显示帮助信息
--version
	显示版本信息
```

## 4.常用示例
（1）只修改文件属主为 root。
```shell
chown root FILE
```
注意，指定的属主必须是系统合法用户，可以查看文件 /etc/passwd 确定当前系统有哪些用户。

（2）修改文件属主和用户组均为 root。
```shell
chown root:root FILE
```
（3）只修改文件所属组为 root。
```shell
chown :root FILE
```
（4）递归修改所有的文件及子目录属主和所属组为 root。
```shell
chown -R root:root /DIR
```
（5）显示修改的动作，使用 -v 冗余模式输出。
```shell
chown -vR root:root /DIR
```
## 5.用户与组相关配置文件
Linux 与用户和组的定义相关的配置文件有：
```
/etc/passwd 用户信息
/etc/shadow 用户口令及其相关属性
/etc/group 用户组信息
/etc/gshadow 用户组口令及其相关属性
```
### /etc/passwd（7 列）
/etc/passwd 用来保存用户名称、ID、属组 ID、家目录等信息。

每行格式如下：
```
用户名:口令:用户标识号:组标识号:注释性描述:主目录:默认Shell
```
示例内容如下：
```
cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
...
```
在 passwd 文件中，第一行内容是超级用户 root 行，可以看到它的 uid 和 gid 都为 0。为了方便理解，下面给出各字段的描述：
```
字段1：用户名，这是用户登录时使用的账户名称，在系统中是唯一的，不能重名
字段2：密码占位符 x；早期的 Unix 系统中，该字段是存放账户密码的，由于安全原因，后来把这个密码字段内容移到 /etc/shadow 中了
字段3：UID；范围是 0-65535
字段4：用户主组的 ID，范围是 0-65535。当添加用户时，默认情况下会同时建立一个与用户同名且 GID 与 UID 相同的组。用户所属的其它用户组定义在文件 /etc/group
字段5：用户说明；这个字段是对这个账户的说明
字段6：宿主目录；用户登录后首先进入的目录，一般为 "/home/用户名" 这样的目录
字段7：登录 Shell   当前用户登录后所使用的 Shell，在 Centos/RHEL 系统中，默认的 Shell 是 Bash；如果不希望用户登登系统，可以通过 usermod 或者手动修改 passwd 设置，将该字段设置为 /sbin/nologin 即可。出于安全考虑，大多数内置系统账户都是 /sbin/nologin，表示禁止登录系统
```
### /etc/shadow（9 列）
/etc/shadow 用于保存加密后的用户口令相关信息，只有 root 用户拥有读写权限。

每行格式如下：
```
用户名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:保留字段
```
示例内容如下：
```
root:$6$25KI3rub$BK5ef2iaxtl0Jn7lofKk9xZDrOU6aamefgIDKlHUycqUvU/lF1XdcQa4Bz53vGmnTh/kV/T1DLtdIRxxVKj8M.:17403:0:99999:7:::
bin:*:16973:0:99999:7:::
daemon:*:16973:0:99999:7:::
adm:*:16973:0:99999:7:::
...
```
下面是每个字段的详细含义：
```
第一列：用户名。与 /etc/passwd 文件中的用户名有相同的含义
第二列：加密口令。存放的是加密后的用户口令字串，如果此字段是“*”、“!”、“x”等字符，则对应的用户不能登录系统
第三列：最后一次修改时间。表示从某个时间起，到用户最近一次修改口令的间隔天数。可以通过 passwd 来修改用户的密码，然后查看 /etc/shadow 中此字段的变化
第四列：最小时间间隔。 表示两次修改密码之间的最小时间间隔。
第五列：最大时间间隔。表示两次修改密码之间的最大时间间隔，这个设置能增强管理员管理用户的时效性。
第六列：警告时间。表示从系统开始警告用户到密码正式失效之间的天数。
第七列：不活动时间。此字段表示用户口令作废多少天后，系统会禁用此用户，也就是说系统不再让此用户登录，也不会提示用户过期，是完全禁用。
第八列：失效时间。表示该用户的帐号生存期，超过这个设定时间，帐号失效，用户就无法登录系统了。如果这个字段的值为空，帐号永久可用。
第九列：保留字段： linux的保留字段，目前为空，以备linux日后发展之用。
```
### /etc/group（4 列）
/etc/group 保存了用户组的相关信息。通过查询该文件，可查看某个用户属于哪些组。

每行格式如下：
```
组名:口令:组标识号:组内用户列表
```
示例内容如下：
```
root:x:0:
bin:x:1:
daemon:x:2:
...
```
每个字段的详细含义：
```
组名：用户组的名称，由字母或数字构成。与 /etc/passwd 中的用户名一样，组名不能重复。
口令：存放的是用户组加密后的口令字串，密码默认设置在 /etc/gshadow 文件中，而在这里用 “x” 代替，linux 系统下默认的用户组都没有口令，可以通过 gpasswd 来给用户组添加密码。
组标识号：即 GID，与 /etc/passwd 中的组标识号对应。
组内用户列表： 显示属于这个组的所有用户，多个用户之间用逗号分隔。
```
### /etc/gshdow（4 列）
/etc/gshdow 保存了组密码及其相关属性。

每行格式如下：
```
群组名称：群组密码：组管理员列表：以当前组为附加组的用户列表
```
示例内容如下：
```
root:::
bin:::
daemon:::
tcpdump:!::
mysql:!::
...
```
各个字段详细含义如下：
```
组名称： 组名称，不能重复
组密码：为空，表示只有组内用户可以获取组权限。为 ! 或者 * 表示用户无法通过组密码获取组权限
组管理员列表： 组管理员的列表，能够更改组密码和成员
以当前组为附加组的用户列表： 以逗号分隔的用户名列表，如果为空，表示用户名与组名相同，即该组是同名用户的主组
```

---
## 参考文献
[chown(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/chown.1.html)

[passwd(5) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man5/passwd.5.html)

[shadow(5) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man5/shadow.5.html)

[group(5) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man5/group.5.html)

[gshadow(5) - Linux manual page -man7.org](http://man7.org/linux/man-pages/man5/gshadow.5.html)

[【Linux】一步一步学Linux——chown命令(112)](https://blog.csdn.net/dengjin20104042056/article/details/98666179)

[Linux系统的用户和用户组管理](https://www.cnblogs.com/zhongguiyao/p/9165917.html)

[[Linux]用户和组相关配置文件介绍(共7个文件)](https://blog.csdn.net/humanking7/article/details/84001125#11__etcpasswd__17_24)

<Vssue title="chown" />
