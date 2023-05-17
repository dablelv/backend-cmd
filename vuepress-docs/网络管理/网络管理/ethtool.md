## 1.命令简介
ethtool（ethernet tool）查询或控制网络驱动程序和硬件设置。

利用 ethtool 可以根据需要更改以太网卡的参数，包括自动协商、速度、双工和局域网唤醒等参数。

## 2.命令格式
```shell
ethtool [<options>] [<devname>]
```

## 3.选项说明
```
-a, --show-pause
	查看网卡中接收模块 RX、发送模块 TX 和 Autonegotiate 模块的状态：启动 on 或停用 off。
-A, --pause <devname> [autoneg on|off] [rx on|off] [tx on|off]
	修改网卡中接收模块 RX、发送模块 TX 和 Autonegotiate 模块的状态：启动 on 或停用 off。
-c, --show-coalesce
	查询指定网络设备的合并信息。
-C, --coalesce
	更改指定网络设备的合并设置。
-g, --show-ring
	显示指定以太网卡的 rx/tx 环参数信息。。
-G, --set-ring
	更改指定以太网卡的 rx/tx 环设置。
-i, --driver
	显示网卡驱动的信息，如驱动的名称、版本等。
-d, --register-dump <devname> [raw on|off] [hex on|off] [file name]
	显示 register dump 信息，部分网卡驱动不支持该选项。
-e, --eeprom-dump <devname> [raw on|off] [offset N] [length N]
	显示 EEPROM dump 信息，部分网卡驱动不支持该选项。
-E, --change-eeprom
	修改网卡 EEPROM byte。
-k, --show-features, --show-offload <devname>
	显示网卡 Offload 参数的状态：on 或 off，包括 rx-checksumming、tx-checksumming 等。
-K, --features, --offload <devname> <feature> on|off ...
	修改网卡 Offload 参数的状态。
-p, --identify <devname> [N]
	用于区别不同 ethX 对应网卡的物理位置，常用的方法是使网卡 port 上的 led 不断的闪；N 指示了网卡闪的持续时间，以秒为单位。
-P, --show-permaddr
	向指定的网络设备查询永久硬件地址。
-r, --negotiate <devname>
	如果 auto-negotiation 模块状态为 on，则 restarts auto-negotiation。
-S, --statistics
	显示 NIC- and driver-specific 的统计参数，如网卡接收/发送的字节数、接收/发送的广播包个数等。
-t, --test
	让网卡执行自我检测，有两种模式：offline or online。
-s, --change
	修改网卡的部分配置，包括网卡速度、单工/全双工模式、MAC 地址等。
-h, --help
	显示帮助信息。
--version
	显示版本信息。
```
参数 devname 为网卡名称，可通过 ip 或 ifconfig 命令查看。

## 4.常用示例
（1）查询网卡基本设置。
```shell
ethtool eth0
Settings for eth0:
	Link detected: yes
```

（2）查询网卡驱动相关信息。
```shell
ethtool -i eth0
driver: virtio_net
version: 1.0.0
firmware-version: 
expansion-rom-version: 
bus-info: 0000:00:05.0
supports-statistics: no
supports-test: no
supports-eeprom-access: no
supports-register-dump: no
supports-priv-flags: no
```
（3）查询网卡收发包统计。
```shell
ethtool -S eth0
no stats available
```
（4）查询网卡注册信息。
```shell
ethtool -d eth0
Cannot get register dump: Operation not supported
```
（5）设置网卡自适应模式。
```shell
ethtool -r eth0
```
（6）设置网卡速率等信息。
```shell
ethtool -s eth0 autoneg off speed 100 duplex full 
```
（7）停止网卡的发送模块 TX。
```shell
ethtool -A tx off eth0
```
（8）使网卡灯闪烁 10 次。
```shell
ethtool -p eth0 10
```
操作完毕后，看哪块网卡的 LED 灯在闪，eth0 就对应着哪块网卡。

（9）显示网卡 Offload 参数的状态。
```shell
ethtool -k eth0
Features for eth0:
rx-checksumming: on [fixed]
tx-checksumming: on
	tx-checksum-ipv4: off [fixed]
	tx-checksum-ip-generic: on
	tx-checksum-ipv6: off [fixed]
	tx-checksum-fcoe-crc: off [fixed]
	tx-checksum-sctp: off [fixed]
scatter-gather: on
	tx-scatter-gather: on
	tx-scatter-gather-fraglist: off [fixed]
tcp-segmentation-offload: on
	tx-tcp-segmentation: on
	tx-tcp-ecn-segmentation: on
	tx-tcp6-segmentation: on
	tx-tcp-mangleid-segmentation: off
udp-fragmentation-offload: on
generic-segmentation-offload: on
generic-receive-offload: on
...
l2-fwd-offload: off [fixed]
hw-tc-offload: off [fixed]
rx-udp_tunnel-port-offload: off [fixed]
```
（10）关闭网卡对收到的数据包的校验功能。
```shell
ethtool -K eth0 rx off
```
（11）显示 EEPROM dump 信息。
```shell
ethtool -e eth0
Cannot get EEPROM data: Operation not supported
```

## 5.拓展知识
下面的信息将帮助你了解以太网卡的工作原理。
- 半双工：半双工模式允许设备一次只能发送或接收数据包。
- 全双工：全双工模式允许设备可以同时发送和接收数据包。
- 自动协商：自动协商是一种机制，允许设备自动选择最佳网速和工作模式（全双工或半双工模式）。
- 速度：默认情况下，它会使用最大速度，你可以根据自己的需要改变它。
- 链路检测：链路检测可以显示网卡的状态。如果显示为 no，请尝试重启网卡。如果链路检测仍显示 no，则检查交换机与系统之间连接的线缆是否有问题。

---
## 参考文献
[ethtool(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/ethtool.8.html)

[如何使用ethtool 命令管理以太网卡| Linux 中国 - 知乎专栏](https://zhuanlan.zhihu.com/p/146383216)

[一步一步学Linux——ethtool命令(155)](https://blog.csdn.net/dengjin20104042056/article/details/99880335)

[Linux ethtool 命令详解：显示或修改以太网卡的配置信息](https://wangchujiang.com/linux-command/c/ethtool.html)
