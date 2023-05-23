## 1.命令简介
runlevel 用于打印系统当前运行等级。
## 2.命令格式
```
runlevel [options...]
```
## 3.选项说明
```
--help
	打印简短的帮助信息并退出。
```
## 4.常用示例
（1）打印系统当前运行等级。
```shell
runlevel
N 3
```
（2）查看帮助。
```shell
runlevel --help
runlevel [OPTIONS...]

Prints the previous and current runlevel of the init system.

     --help      Show this help
```
## 5.拓展知识
### 5.1 什么是运行等级？
所谓运行级别，简单点来说，就是指操作系统当前正在运行的功能级别。

形象一点，您可以认为 runlevel 有点象微软的 Windows 操作系统中的 normal，safemode，和 command prompt only。进入每个 runlevel 都需要启动或关闭相应的一系列服务(services)，这些服务以初始化脚本的方式放置于目录 /etc/rc.d/rc?.d/ 或者 /etc/rc?.d 下面（? 代表 runlevel 的对应序号）。

Linux 通常有 7 个 runlevel：
```
0 停机
1 单用户模式
2 多用户模式（没有 NFS（Network File System））
3 完全多用户模式（有 NFS），登录后进入控制台命令行模式
4 系统未使用，保留
5 图形界面
6 重新启动
```
多数桌面 Linux 缺省的 runlevel 是 5，用户登录时是图形界面。而多数的服务器版本的 Linux 缺省的 runlevel 是3，用户登录时是字符界面，runlevel 1 和 2 除了调试之外很少使用。runlevel 6 表明系统正常关闭并重启，默认运行级别不能设为 6，否则系统不能正常启动。

### 5.2 运行等级的原理
1. 在目录 /etc/rc.d/init.d 下有许多服务器脚本程序，一般称为服务（service）。
2. 在 /etc/rc.d 下有 7 个名为 rcN.d 的目录，对应系统的 7 个运行级别。
3. rcN.d 目录下都是一些符号链接文件，这些链接文件都指向 init.d 目录下的 service 脚本文件，命名规则为“K+nn+服务名” 或 “S+nn+服务名”，其中 nn 为两位数字。
4. 系统会根据指定的运行级别进入对应的 rcN.d 目录，并按照文件名顺序检索目录下的链接文件。对于以 K 开头的文件，系统将终止对应的服务。对于以S开头的文件，系统将启动对应的服务。
5. 查看运行级别用：runlevel。
6. 进入其它运行级别用：init N。
7. 另外 init 0 为关机，init 6 为重启系统。

---
## 参考文献
[runlevel(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/runlevel.8.html)

[Linux系统有7个运行级别(runlevel) - 博客园](https://www.cnblogs.com/dkblog/archive/2011/08/30/2160191.html)

<Vssue title="runlevel" />