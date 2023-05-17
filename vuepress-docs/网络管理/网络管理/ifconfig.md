## 1.命令简介
ifconfig（configure a network interface）命令是系统管理员命令，用于查看和配置网络接口。

## 2.命令格式
```
ifconfig [-v] [-a] [-s] [INTERFACE]
ifconfig [-v] INTERFACE [aftype] OPTIONS | ADDRESS ...
```
不跟任何选项和参数单独执行 ifconfig 命令将显示当前活动接口的状态。如果给定一个接口参数，则它仅显示给定接口的状态。如果只给一个选项 -a，它将显示所有接口的状态，包括那些关闭的接口。其他情况，用于配置一个网络接口。

## 3.选项说明
```
-a
	显示所有接口的状态，包括那些关闭的接口
-s
	显示接口简短状态列表，类似于 netstat -i
-v
	冗余模式，遇到错误将报告错误信息
INTERFACE
	接口的名称。这通常是一个驱动程序名，后面跟着一个单元号，例如用于第一个以太网接口的 eth0
up
	此标志将导致激活接口。如果将地址分配给接口，则会隐式激活接口
down
	此标志用于关闭接口的驱动程序
[-]arp
	启用或关闭接口使用 ARP 协议
[-]promisc
	启用或禁用接口的混杂模式。如果选中，网络上的所有数据包都将由接口接收
[-]allmulti
	启用或禁用所有多播模式。如果选中，则接口将接收网络上的所有多播数据包
mtu N
	设置接口的最大传输单元
dstaddr ADDR
	为点对点链路（如 PPP）设置远程 IP 地址。关键字 dstaddr 现在已经过时了，使用 pointopoint 关键字代替
netmask ADDR
	设置接口的 IP 网络掩码。此值默认为通常的 A、B 或 C 类网络掩码（从接口 IP 地址派生），但可以设置为任何值
add ADDR/PREFIX_LEN
	向接口添加 IPv6 地址
del ADDR/PREFIX_LEN
	从接口中删除 IPv6 地址
tunnel ::aa.bb.cc.dd
	创建一个新的SIT(IPv6-in-IPv4)设备，通过隧道到达给定的目的地
irq ADDR
	设置此设备使用的中断行。并非所有设备都可以动态更改其 IRQ 设置
io_addr ADDR
	为该设备设置 I/O 空间中的起始地址
mem_start ADDR
	设置此设备使用的共享内存的起始地址。只有少数几个设备需要这个
media TYPE
	设置设备要使用的物理端口或介质类型。典型的类型值有10base2（细以太网）、10baseT（双绞线 10Mbps 以太网）、AUI（外部收发器）等。特殊的媒体类型可以使用 auto 来告诉驱动程序进行自动感知。注意，并非所有设备都可以更改此设置
[-]broadcast [ADDR]
	如果给定地址参数，则为该接口设置协议广播地址。否则设置（或清除）接口的 IFF_BROADCAST标志
[-]pointopoint [ADDR]
	这个关键字启用了接口的点对点模式，这意味着它是两台机器之间的直接连接，没有其他人监听它。如果给了地址参数，就像过时的 dstaddr 关键字一样，设置另一端的协议地址。否则设置或清除接口的 IFF_POINTOPOINT 标志
hw CLASS ADDR
	如果设备驱动程序支持此操作，则设置此接口的物理地址。CLASS 为硬件类型名称，ADDR 为物理地址。目前支持的硬件类包括 ether (Ethernet)、ax25 (AMPR AX.25)、ARCnet 和 netrom (AMPR NET/ROM)
multicast
	在接口上设置多播标志。一般不需要显示设置，因为驱动程序本身会设置正确的标志
ADDRESS
	接口的 IP 地址
txqueuelen LENGTH
	设置设备的传输队列的长度。对于具有高延迟（调制解调器链路，ISDN）的较慢设备，将其设置为小值是有用的，以防止快速批量传输过多地干扰诸如 telnet 之类的交互通信
```
## 4.常用示例
（1）查看处于激活状态的网络接口信息。
```
ifconfig
eth0      Link encap:Ethernet  HWaddr 00:16:3E:00:1E:51  
          inet addr:10.160.7.81  Bcast:10.160.15.255  Mask:255.255.240.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:61430830 errors:0 dropped:0 overruns:0 frame:0
          TX packets:88534 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:3607197869 (3.3 GiB)  TX bytes:6115042 (5.8 MiB)

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:56103 errors:0 dropped:0 overruns:0 frame:0
          TX packets:56103 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:5079451 (4.8 MiB)  TX bytes:5079451 (4.8 MiB)
```
eth0 表示第一块网卡。

第一行 Link encap:Ethernet 表示连接类型为以太网，HWaddr 00:16:3E:00:1E:51 为网卡的物理地址；
第二行 inet addr:10.160.7.81 为网卡的 IPv4 地址，Bcast:10.160.15.255 为广播地址，Mask:255.255.240.0 为子网掩码；
第三行 UP（代表网卡开启状态），BROADCAST（支持广播），RUNNING（代表网卡的网线被接上），MULTICAST（支持组播），MTU:1500（最大传输单元 1500 字节），Metric:1 表示网卡路由数据包优先级，数值越低，优先级越高；
第四、五行：接收、发送数据包情况统计；
第七行：接收、发送数据字节数统计信息。

lo 是表示主机的回环地址，这个一般是用来测试一个网络程序，只能在本机上访问，局域网或外网的主机无法访问该地址。

（2）查看所有网络接口信息，不论其是否激活。
```
ifconfig -a
```
（3）查看指定网络接口信息。
```
ifconfig eth0
```
（4）启动和关闭指定网卡。
```
# 启动网卡
ifconfig eth0 up
# 关闭网卡
ifconfig eth0 down
```
（5）修改 MAC 地址。
```
ifconfig eth0 down
ifconfig eth0 hw ether 00:AA:BB:CC:DD:EE
ifconfig eth0 up
```
（6）配置 IP 地址。
```
# 给 eth0 网卡配置 IP 地址
ifconfig eth0 192.168.1.56

# 给 eth0 网卡配置 IP 地址并加上子网掩码
ifconfig eth0 192.168.1.56 netmask 255.255.255.0 

# 给 eth0 网卡配置 IP 地址，加上子网掩码，加上广播地址
ifconfig eth0 192.168.1.56 netmask 255.255.255.0 broadcast 192.168.1.255
```
（7）启用和关闭 ARP 协议。
```
# 开启网卡 eth0 的 arp 协议
ifconfig eth0 arp
# 关闭网卡 eth0 的 arp 协议
ifconfig eth0 -arp
```
（8）设置最大传输单元。
```
# 设置能通过的最大数据包大小为 1500 bytes
ifconfig eth0 mtu 1500
```
（9）添加和删除 IPv6 地址。
```
# 添加 IPv6 地址
ifconfig eth0 add 3ffe:3240:800:1005::2/64

# 删除 IPv6 地址
ifconfig eth0 del 3ffe:3240:800:1005::2/64
```

---
## 参考文献
[ifconfig(8) manual](http://www.man7.org/linux/man-pages/man8/ifconfig.8.html)

[【Linux】一步一步学Linux——ifconfig命令(151)](https://blog.csdn.net/dengjin20104042056/article/details/99709841)

[Linux 命令大全.ifconfig命令](https://man.linuxde.net/ifconfig)

[Ifconfig Command - Explained in Detail](http://www.aboutlinux.info/2006/11/ifconfig-dissected-and-demystified.html)
