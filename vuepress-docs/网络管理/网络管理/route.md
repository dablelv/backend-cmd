## 1.命令简介
route 命令用于显示和操作 IP 路由表。

要实现两个不同的子网之间的通信，需要一台连接两个网络的路由器，或者同时位于两个网络的网关来实现。在 Linux 系统中，设置路由通常是为了解决以下问题：该 Linux 系统在一个局域网中，局域网中有一个网关，能够让机器访问 Internet，那么就需要将这台机器的 IP 地址设置为 Linux 机器的默认路由。

要注意的是，直接在命令行下执行 route 命令来添加路由，不会永久保存，当网卡重启或者机器重启之后，该路由就失效了；可以在 /etc/rc.d/rc.local 中添加 route 命令，作为开机启动命令来保证该路由设置永久有效。
## 2.命令格式
```shell
route [-CFvnNee] [-A FAMILY |-4|-6]
route [-v]  [-A FAMILY | -4 | -6]  add  [-net|-host]  TARGET  [netmask  NM] [gw GW] [metric N] [mss M] [window W] [irtt I] [reject] [mod] [dyn] [reinstate] [[dev] IF]
route [-v] [-A FAMILY | -4 | -6] del [-net|-host] TARGET [gw GW] [netmask NM] [metric N] [[dev] IF]
route [-V] [--version] [-h] [--help]
```
第一行格式用于查看路由表；
第二行格式用于添加一条路由；
第三行格式用于删除一条路由；
第四行格式用于查看版本与帮助信息。
## 3.选项说明
```
-A FAMILY
    指定的地址族。FAMILY 可取值 inet、inet6 等。-4 等同于 -A inet，-6 等同于 -A inet6
-C
	操作内核的路由缓存
-F
    操作内核的 FIB（Forwarding Information Base） 路由表。默认选项
-e
    用 netstat(8) 的格式来显示路由表。-ee 将用路由表中的所有参数生成一个很长的行
-host
    路由目标为主机
-n
    以数字地址代替主机或网络名。此项对试图检测对域名服务器进行路由发生故障的原因非常有用
-net
    路由目标为网络
-v
	开启冗余模式
del
    删除一条路由
add
    添加一条路由
TARGET
    指定目标网络或主机。可以用点分十进制形式的 IP 地址或主机/网络名
netmask NM
    为添加的路由指定网络掩码
gw GW
    为发往目标网络/主机的任何分组指定网关。注意：指定的网关首先必须是可达的，也就是说必须为该网关预先指定一条静态路由。如果你为本地接口之一指定这个网关地址的话，那么此网关地址将用于决定此接口上的分组将如何进行路由。这是 BSD 风格所兼容的
metric M
    把选路表中的 metric 字段值设为 M。metric 表示路由跳数
mss M
   设置最大传输单元 MTU
window W
    把基于此路由之上的连接的 TCP 窗口长度设为 W 字节。这通常只用于 AX.25 网络和不能处理背靠背帧的设备
irtt I
    把基于此路由之上的 TCP 连接的初始往返时间设为 I 毫秒（1-12000）。这通常也只用于 AX.25 网络。如果省略此选项，则使用 RFC1122 的缺省值 300ms
reject
    设置一条阻塞路由以使一条路由查找失败。这用于在使用缺省路由前先屏蔽掉一些网络。但这并不起到防火墙的作用
mod, dyn, reinstate
    设置一条动态或更改过的路由。这些标志通常只由路由进程来设置。这只用于诊断目的
dev IF
    强制使路由与指定的设备关联，否则内核会自己决定使用相应的设备（通常检查已存在的路由、设备说明和已加入路由的设备)。在多数正常的网络上无需使用该选项。如果 dev IF 是命令行上最后一个选项，那么可以省略关键字 dev
```
## 4.常用示例
（1）显示当前路由表。
```shell
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         9.134.112.1     0.0.0.0         UG    0      0        0 eth1
9.0.0.0         9.134.112.1     255.0.0.0       UG    0      0        0 eth1
9.134.112.0     0.0.0.0         255.255.240.0   U     0      0        0 eth1
10.0.0.0        9.134.112.1     255.0.0.0       UG    0      0        0 eth1
100.64.0.0      9.134.112.1     255.192.0.0     UG    0      0        0 eth1
link-local      0.0.0.0         255.255.0.0     U     1002   0        0 eth1
172.16.0.0      9.134.112.1     255.240.0.0     UG    0      0        0 eth1
192.168.0.0     9.134.112.1     255.255.0.0     UG    0      0        0 eth1
192.168.10.0    0.0.0.0         255.255.255.0   U     0      0        0 docker0
```
上面的输出中，有两行值得注意：
```
default         9.134.112.1     0.0.0.0         UG    0      0        0 eth1
	表示数据传送目的是访问 Internet，则由接口 eth1 将数据包发送到网关 9.134.112.1
9.134.112.0     0.0.0.0         255.255.240.0   U     0      0        0 eth1
	表示主机所在网络的地址为 9.134.112.0，若数据传送目标是在本局域网内通信，则可直接通过 eth1 转发数据包
```
Destination 表示目标网络或主机地址；
Gateway 表示网关地址，如果是 * 表示未设置；
Genmask 表示目标网络的网络掩码；目标是主机对应 255.255.255.255，默认路由对应 0.0.0.0；
Flags 为路由状态标志，含义如下：
```
U 路由当前为启动状态（Up ）
H 目标为主机（Host）
G 使用网关（Gateway）路由
R 恢复（Reinstate ）动态路由的路由
D 由守护进程或导向器动态（Dynamically）安装
M 由路由守护程序或导向器动态修改（Modified）
A 由 addrconf 安装
C 缓存（Cache）项
! 路由当前为关闭状态
```
Metric 表示与目标的距离，通常以跳数计算；
Ref 表示此路由的引用数（Linux 内核中不使用）；
Use 表示查找路由的计数。根据 -F 和 -C 的使用，这将是路由缓存未命中（-F）或命中（-C）；
Iface 表示将此路由的数据包发送到的接口。

（2）以数字地址代替主机或网络名。
```shell
route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         9.134.112.1     0.0.0.0         UG    0      0        0 eth1
9.0.0.0         9.134.112.1     255.0.0.0       UG    0      0        0 eth1
9.134.112.0     0.0.0.0         255.255.240.0   U     0      0        0 eth1
10.0.0.0        9.134.112.1     255.0.0.0       UG    0      0        0 eth1
100.64.0.0      9.134.112.1     255.192.0.0     UG    0      0        0 eth1
169.254.0.0     0.0.0.0         255.255.0.0     U     1002   0        0 eth1
172.16.0.0      9.134.112.1     255.240.0.0     UG    0      0        0 eth1
192.168.0.0     9.134.112.1     255.255.0.0     UG    0      0        0 eth1
192.168.10.0    0.0.0.0         255.255.255.0   U     0      0        0 docker0
```

（3）添加一条路由。
```shell
route add -net 127.0.0.0 netmask 255.0.0.0 dev lo

# 查看设置后的结果
route -n | grep lo
127.0.0.0       0.0.0.0         255.0.0.0       U     0      0        0 lo
```
使用 netmask 255.0.0.0 添加与 lo 设备相关联的回环路由项。

（4）屏蔽一条路由。
```shell
route add -net 224.0.0.0 netmask 240.0.0.0 reject

# 查看设置后的结果
route | grep 224.0.0.0
224.0.0.0       -               240.0.0.0       !     0      -        0 -
```
（5）删除一条路由。
```shell
route del -net 224.0.0.0 netmask 240.0.0.0 reject
```
（6）添加默认网关。
```shell
route add default gw 9.134.112.2

# 查看设置后的结果
route | grep 9.134.112.2
default         9.134.112.2     0.0.0.0         UG    0      0        0 eth1
```
（7）删除默认网关。
```shell
route del default gw 9.134.112.2
```
## 5.路由类型
### 主机路由
主机路由是路由选择表中指向单个 IP 地址或主机名的路由记录。主机路由的 Flags 字段为 H。例如，在下面的示例中，本地主机通过 IP 地址 192.168.1.1 的网关到达 IP地址为 10.0.0.10 的主机。
```
Destination	Gateway		Genmask			Flags	Metric	Ref	Use	Iface
10.0.0.10	192.168.1.1	255.255.255.255	UH		0		0   0	eth0
```
### 网络路由
网络路由是代表主机可以到达的网络。网络路由的 Flags 字段为 N。例如，在下面的示例中，本地主机将发送到网络 192.19.12.0 的数据包转发到 IP 地址为 192.168.1.1 的路由器。
```
Destination   Gateway		Genmask 		Flags	Metric	Ref	Use	Iface
192.19.12     192.168.1.1   255.255.255.0   UN		0       0	0	eth0
```
### 默认路由
当主机不能在路由表中查找到目标主机的 IP 地址或网络路由时，数据包就被发送到默认路由（默认网关）上。默认路由的 Flags 字段为 G。例如，在下面的示例中，默认路由是 IP 地址为 192.168.1.1 的路由器。
```
Destination	Gateway			Genmask		Flags	Metric	Ref	Use	Iface
default		192.168.1.1		0.0.0.0		UG		0       0	0   eth0
```

---
## 参考文献
[route(8)  - Linux manual page - man7.org](http://www.man7.org/linux/man-pages/man8/route.8.html)

[博客园.每天一个linux命令（53）：route命令](https://www.cnblogs.com/peida/archive/2013/03/05/2943698.html)

[CSDN.【Linux】一步一步学Linux——route命令(169)](https://blog.csdn.net/dengjin20104042056/article/details/100008525)

[CSDN.linux 路由表设置 之 route 指令详解](https://blog.csdn.net/chenlycly/article/details/52141854)

<Vssue title="route" />