## 1.命令简介
uname 用于打印系统相关信息（内核名称与版本、主机名称、操作系统名称和硬件架构等）。

## 2.命令格式
```
uname [OPTION]...
```
uname 未指定任何选项缺省为 -s，即显示操作系统内核名称。
## 3.选项说明
```
-a, --all
	显示主机全部信息，以下面的顺序展示
-s, --kernel-name
	显示内核名称
-n, -nodename
	显示在网络上的主机名称
-r, --kernel-release
	显示操作系统内核发行版本号
-v, --kernel-version
	显示内核版本信息
-m, --machine
	显示机器硬件架构
-p, --processor
	显示处理器类型或者 unknown
-i, --hardware-platform
	显示硬件平台或 unknown
-o, --operating-system
	显示操作系统名称
--help
	显示帮助
--version
	显示版本信息
```

## 4.常用示例
（1）显示主机名称。
```shell
uname -n
TENCENT64.site
```

（2）显示操作系统名称。
```shell
uname -o
GNU/Linux
```
（3）显示操作系统内核名称。
```shell
uname -s
Linux
```
（4）显示操作系统内核版本号。
```shell
uname -r
3.10.104-1-tlinux2_kvm_guest-0022.tl2
```
（5）显示主机全部信息。
```shell
uname -a
Linux TENCENT64.site 3.10.104-1-tlinux2_kvm_guest-0022.tl2 #1 SMP Wed Dec 14 10:21:52 CST 2016 x86_64 x86_64 x86_64 GNU/Linux
```

---
## 参考文献
[uname(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/uname.1.html)

[uname命令 - Linux命令大全](http://man.linuxde.net/uname)