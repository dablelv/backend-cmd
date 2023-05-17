## 1.命令简介
service 命令用于对系统服务进行管理，比如启动（start）、停止（stop）、重启（restart）、重新加载配置（reload）、查看状态（status）等。不同的 Linux 发行版一般均会带有此命令，比如 RHEL、CentOS、SUSE、Ubuntu、Fedora 等。

service 命令是系统管理员命令，需要管理员权限才可以执行。service 命令本质上是一个 Shell 脚本，地址一般为 /sbin/service。

## 2.命令格式
```
service SCRIPT COMMAND [OPTIONS]
service --status-all
service --help | -h | --version
```
SCRIPT 表示管理服务的脚本，存放在 /etc/init.d/SCRIPT。COMMAND 和 [OPTIONS] 是传递给 SCRIPT 的参数。服务脚本 SCRIPT 应该至少支持 start 命令和 stop 命令。如果 COMMAND 是 --full-restart，则服务脚本将运行两次，首先使用 stop 命令，然后使用 start 命令。

## 3.选项说明
```
--status-all
	按字母顺序执行所有初始化脚本并传递 status 命令，显示所有的服务状态。
-h, --help
	显示帮助信息。
--version
	显示版本信息。
```

## 4.常用示例
（1）查看所有服务当前的运行状态。
```
service --status-all
```

（2）将 MySQL 注册为系统服务，使用 service 命令管理。需要将 MySQL 的管理脚本 mysql.server 更名为 mysqld 放在 /etc/init.d/ 目录。
```
# 开启
service mysqld start

# 关闭
service mysqld stop

# 重启
service mysqld restart
```

---
## 参考文献
[service(8) manual - linux.org](https://www.linux.org/docs/man8/service.html)

[service: no such service mysqld 与 MySQL 的开启、关闭和重启](https://dablelv.blog.csdn.net/article/details/51831534)
