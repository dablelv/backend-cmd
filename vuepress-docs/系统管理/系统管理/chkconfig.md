## 1.命令简介
chkconfig 更新和查询系统服务的运行等级信息。

chkconfig 可查询操作系统在每一个运行等级中会自动执行哪些系统服务，包括各类常驻服务，比如 httpd、sshd、mysqld 等。

chkconfig 实际上是通过改变七个不同运行等级目录 /etc/rc[0-6].d 中服务脚本的符号链接，来设置操作系统在每一个运行等级中会执行哪些系统服务。chkconfig 不是用于立即启动或停止某一个服务，这一点与 service 不同。

chkconfig 有五个功能：
- 添加新的服务供 chkconfig 管理；
- 从 chkconfig 管理服务列表中删除服务；
- 列出 chkconfig 管理的所有服务的当前启动信息；
- 更改服务的启动信息；
- 检查特定服务的启动状态。

## 2.命令格式
```
chkconfig
service [OPTIONS] SERVICENAME
```
没有任何选项的 chkconfig 或跟选项 --list 将显示所有服务及其当前配置的列表。

当 chkconfig 后只跟服务名时，会检查服务是否配置为在当前运行级别自启动，如果是，则 chkconfig 返回 true，否则返回 false。--level 选项可用于让 chkconfig 查询其它运行级别而不是当前运行级别下的配置。

如果在服务名称之后指定了 on、off、reset 或 resetpriorities 之一，chkconfig 将更改指定服务的启动信息。on 和 off 标志分别导致服务在正在更改的运行级别中设置为启动或停止。reset 标志将服务的所有运行级别的开关状态重置为相关 init 脚本中指定的值，而 resetpriorities 标志将服务的启动/停止优先级重置为 init 脚本中指定的值。默认情况下，on 和 off 选项仅影响运行级别 2、3、4 和 5，而 reset 和 resetpriorities 影响所有运行级别。`--level` 选项可用于指定受影响的运行级别。

## 3.选项说明
```
--level LEVELS
	指定操作应属于的运行级别。0 到 6 组成的数字串。例如，-level 35 指定运行级别 3 和 5
--no-redirect
	如果系统使用 systemd 作为系统的启动进程，chkconfig 将命令转发给 systemd。此选项将关闭到 systemd 的重定向，并且仅在 /etc/rc[0-6].d 中的符号链接上操作。此选项仅在 on、off 或没有向服务传递命令（检查启用）时有效
--add SERVICENAME
	添加一个新服务供 chkconfig 管理
--del SERVICENAME
	将从 chkconfig 管理中删除该服务，并删除 /etc/rc[0-6].d 中与其相关的任何符号链接
--override SERVICENAME
	更改服务配置
--list [SERVICENAME]
	列出 chkconfig 所知的所有服务在不同运行等级下的启动状态。如果指定 SERVICENAME，则只列出具体的服务的启动状态
```

## 4.常用示例
（1）列出所有的系统服务。
```
chkconfig
Note: This output shows SysV services only and does not include native
      systemd services. SysV configuration data might be overridden by native
      systemd configuration.

      If you want to list systemd services use 'systemctl list-unit-files'.
      To see services enabled on particular target use
      'systemctl list-dependencies [target]'.

bootlocal      	0:off	1:off	2:off	3:on	4:off	5:off	6:off
irqaffinity    	0:off	1:off	2:on	3:on	4:on	5:on	6:off
netconsole     	0:off	1:off	2:off	3:off	4:off	5:off	6:off
network        	0:off	1:off	2:on	3:on	4:on	5:on	6:off
qemu-ga        	0:off	1:off	2:on	3:on	4:on	5:on	6:off
rename_netifs  	0:off	1:off	2:off	3:on	4:off	5:off	6:off
```

（2）将 Apache Web 服务器配置为在每次系统启动时启动。
```
chkconfig httpd on
```
当您成功地使用 chkconfig 启用服务时，该命令不提供任何确认消息。

（3）设置 network 在运行级别为 2、3、4、5 的情况下都是关闭状态，即不启动。
```
chkconfig network off

# 或
chkconfig --level 2345 network off
```

（4）查看 network 服务的自启动状态。
```
chkconfig --list network
Note: This output shows SysV services only and does not include native
      systemd services. SysV configuration data might be overridden by native
      systemd configuration.

      If you want to list systemd services use 'systemctl list-unit-files'.
      To see services enabled on particular target use
      'systemctl list-dependencies [target]'.

network        	0:off	1:off	2:off	3:off	4:off	5:off	6:off
```

## 5.拓展知识
### 5.1 注册服务到 chkconfig
每个被 chkconfig 管理的服务需要在对应的 /etc/rc.d/init.d 下的管理脚本加上两行或者更多行的注释。
- 第一行告诉 chkconfig 缺省启动的运行级以及启动和停止的优先级。如果某服务不在任何运行级启动，那么使用 - 代替运行级。
- 第二行对服务进行描述，可以用 \ 跨行注释。例如 /etc/rc.d/init.d/network 中的注释：
```
# chkconfig: 2345 10 90
# description: Activates/Deactivates all network interfaces configured to \
#              start at boot time.
```
其中第一行表示运行等级在 2、3、4 和 5，启动优先级为 10，停止优先级为 90。第二行和第三行为服务 network 的描述。

### 5.2 系统运行级别
运行级别是操作系统当前正在运行的功能级别，它让一些程序在一个级别启动，而在另外一个级别的时候不启动。Linux 系统一般使用 7 个级别。
```
0 停机状态。系统默认运行级别不能设为 0，否则不能正常启动
1 单用户模式，root权限，用于系统维护，禁止远程登陆
2 无网络的多用户模式
3 有网络的多用户模式
4 系统未使用，保留
5 图形化界面
6 系统正常关闭并重启，默认运行级别不能设为 6，否则不能正常启动
```
默认的运行级别可以在文件 /etc/inittab 查看。一般自用的 Linux 默认登录等级为 5，即开机进入图形用户界面，远程登录的运行等级为 3，即进入命令行交互界面。

运行级别的原理：
（1）在目录 /etc/rc.d/init.d 下有许多服务管理脚本，每个服务被称为 service；
（2）在 /etc/rc.d 下有 7 个名为 rcN.d 的目录，对应系统的 7 个运行级别；
（3）rcN.d 目录下都是一些符号链接文件，这些链接文件都指向 init.d 目录下的 service 脚本文件，命名规则为`K+nn+服务名`或`S+nn+服务名`，其中 nn 为两位数字。
（4）系统会根据指定的运行级别进入对应的 rcN.d 目录，并按照文件名顺序检索目录下的链接文件：
```
对于以 K 开头的文件，系统将终止对应的服务
对于以 S 开头的文件，系统将启动对应的服务
```
（5）查看运行级别用：runlevel；
（6）进入其它运行级别用：(sudo) init N；
（7）另外 init 0 为关机，init 6 为重启系统。

另外，当使用 runlevel 查看运行级别时，结果会显示前一次的运行级别和现在的运行级别，如果前次的运行级别为 N，那么说明前次没有运行级别（可能刚刚 power on）。

---
## 参考文献
[chkconfig(8) manual - linux.org](https://www.linux.org/docs/man8/chkconfig.html)

[service和chkconfig命令的使用与区别](https://blog.csdn.net/sdb5858874/article/details/80484599)

<Vssue title="chkconfig" />