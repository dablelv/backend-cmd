## 1.命令简介
ifcfg 替换 ifconfig 进行 IP 管理的简单脚本。

## 2.命令格式
```shell
ifcfg [ DEVICE ] [ command ] ADDRESS [ PEER ]
```
## 3.选项说明
```shell
DEVICE
	指定要操作的网络接口。
command
	add/del/stop：添加、删除或停用网络接口上的 IP 地址。
ADDRESS
	指定 IP 地址和子网掩码。
PEER
	点到点的可选对等地址。
```
## 4.常用示例
（1）停止指定网络接口上的 IP 地址。
```shell
ifcfg eth0 stop
```

（2）为网络接口配置 IP 地址。
```shell
ifcfg eth0 add 192.168.60.11/24
```
（3）删除网络接口 IP 地址。
```shell
ifcfg eth0 delete 192.168.10.250/24
```

---
## 参考文献
[ifcfg(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/ifcfg.8.html)
