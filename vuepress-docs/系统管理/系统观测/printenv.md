## 1.命令简介
printenv（print environment）打印全部或部分环境变量。

打印指定环境变量的值。如果没有指定变量，则打印所有变量的名称和值对。

## 2.命令格式
```bash
printenv [OPTION]... [VARIABLE]...
```

## 3.选项说明
```
-0, --null
	以空字符 NUL 而不是换行符结束每个输出行
--help
	显示帮助信息
--version
	显示版本信息
```
您的 shell 可能有自己的 printenv 版本，它通常会取代此处描述的版本。 请参阅您的 shell 文档，了解有关其支持的选项的详细信息。

## 4.常用示例
（1）查看指定环境变量。
```bash
printenv HOME PATH SHELL
/root
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
/bin/bash
```
（2）查看所有环境变量。
```bash
printenv
XDG_SESSION_ID=96745
HOSTNAME=VM-0-3-centos
TERM=xterm
SHELL=/bin/bash
HISTSIZE=3000
...
```
也可以使用 env 命令查看所有环境变量。
```bash
env
```

（3）查看帮助信息。
```bash
printenv --help
```

## 5.环境变量
Shell 在初始化的时候会在执行 profile 等初始化脚本，脚本中定义了一些环境变量，这些变量会在创建子进程时传递给子进程。

常见的环境变量有：
```
PATH：指定可执行文件的搜索路径。
HOME：指定当前用户的主目录路径。
USER：当前用户的用户名。
HOSTNAME：主机名称
HISTSIZE：历史命令记录最大保留数
SHELL：当前用户所使用的Shell程序的路径。
PWD：当前工作目录的路径。
LANG：指定默认的语言环境。
LC_ALL：指定所有的本地化设置，包括语言、时间、货币等。
DISPLAY：指定X服务器的显示地址，用于图形界面应用程序的显示。
TERM：指定终端类型。
EDITOR：指定默认的文本编辑器。
TZ：指定时区。
LD_LIBRARY_PATH：指定动态链接库（shared library）的搜索路径。
MAIL：指定邮件的存放路径。
HOSTNAME：当前主机的主机名。
_(下划线)：上一条命令的最后一个参数
```

---
## 参考文献
[printenv(1) - Linux manual page](https://man7.org/linux/man-pages/man1/printenv.1.html)

<Vssue title="printenv" />