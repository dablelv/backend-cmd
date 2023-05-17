## 1.命令简介
ipcalc 执行简单的 IP 地址操作。

ipcalc 提供了一个计算主机 IP 信息的简单方法。各种选项指定 ipcalc 应该在标准输出中显示什么信息。可以指定多个选项。必须始终指定要操作的 IP 地址。大多数操作还需要一个网络掩码或 [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)(Classless Inter-Domain Routing) 前缀。

## 2.命令格式
```
ipcalc [OPTION]... <IP address>[/prefix] [netmask]
```

## 3.选项说明
```shell
-b, --broadcast
	由给定的IP地址和网络掩码计算出广播地址。
-c, --check
	验证指定族下的 IP 地址。如果不指定地址族，缺省为 IPv4。
-4, --ipv4
	指定IPv4地址族(默认)。
-6, --ipv6
	指定 IPv6 地址族。
-h, --hostname
	显示给定 IP 地址所对应的主机名。
-m, --netmask
	由给定的IP地址计算器网络掩码。
-p, --prefix
	显示给定的掩码或 IP 地址的前缀。
-n, --network
	由给定的 IP 地址和网络掩码计算网络地址。
-s, --silent
	安静模式，不显示任何错误信息
-?, -h, --help
	显示帮助信息。
```

## 4.常用示例

（1）计算给定掩码的前缀。

```shell
ipcalc -p 192.168.1.88 255.255.255.0
PREFIX=24
```

（2）给定 IP 和网络掩码计算网络地址。

```shell
ipcalc -n 192.168.1.88 255.255.255.0
NETWORK=192.168.1.0
```

（3）给定 IP 显示对应的主机名。

```shell
ipcalc -h 127.0.0.1
HOSTNAME=vm-0-3-centos
```

（4）计算给定 IP 的网络掩码，广播地址，网络地址。
```shell
ipcalc -m -b -n 192.168.1.88/24
NETMASK=255.255.255.0
BROADCAST=192.168.1.255
NETWORK=192.168.1.0
```

（5）计算给定 IP 的网络掩码，广播地址，网络地址和前缀。
```shell
ipcalc -pmbn 192.168.1.88/24
NETMASK=255.255.255.0
PREFIX=24
BROADCAST=192.168.1.255
NETWORK=192.168.1.0
```

---

## 参考文献
[ipcalc(1) - Linux manual page - linux.org](https://www.linux.org/docs/man1/ipcalc.html)
