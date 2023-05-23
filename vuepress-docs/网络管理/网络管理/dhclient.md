## 1.命令简介
dhclient（DHCP client）为动态主机配置协议客户端。

DHCP 客户端 dhclient 提供了一种使用动态主机配置协议 和 BOOTP 协议配置一个或多个网络接口的方法。如果这些协议失败，则通过静态分配地址来配置。
## 2.命令格式
```
dhclient [options] [ if0 [ ...ifN ] ]
```
## 3.选项说明
```
-4
	使用 DHCPv4。
-6
	使用 DHCPv6。
-p <port-number>
	指定 DHCP 客户端监听的端口号（默认端口号86）。
-d
	总是以前台方式运行程序。
-q
	安静模式，不打印任何错误的提示信息。这是默认行为。
-v
	启用详细日志消息。
-r
	释放 IP 地址。
-n
	不配置任何接口。
-x
	停止正在运行的 DHCP 客户端，而不释放当前租约。
-s <server-addr>
	在获取ip地址之前指定 DHCP 服务器。
-w
	即使没有找到广播接口，也继续运行。
--version
	打印版本号并退出。
```
## 4.常用示例
（1）动态获取 IP，并且显示过程。
```shell
dhclient -v
dhclient(22320) is already running - exiting. 

This version of ISC DHCP is based on the release available
on ftp.isc.org.  Features have been added and other changes
have been made to the base software release in order to make
it work better with this distribution.

Please report for this software via the CentOS Bugs Database:
    http://bugs.centos.org/

exiting.
```
（2）释放指定网卡地 IP，并显示过程。

注意：该操作为高危行为，会导致主机 IP 失效，如导致 SSH 远程登录连接失效，谨慎操作。
```shell
dhclient -v -r eth0
Internet Systems Consortium DHCP Client 4.2.5
Copyright 2004-2013 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

Listening on LPF/eth0/52:54:00:31:f1:f2
Sending on   LPF/eth0/52:54:00:31:f1:f2
Sending on   Socket/fallback
DHCPRELEASE on eth0 to 10.0.0.1 port 67 (xid=0x74c6533b)
```

（3）从指定的 DHCP 服务器获取 IP 地址。
```shell
dhclient -s 192.168.12.2
```

（4）停止运行 dhclient。

注意：该操作为高危行为，会导致主机 IP 失效，如导致 SSH 远程登录连接失效，谨慎操作。
```shell
dhclient -x
```

## 5.拓展知识
### 5.1 什么是 DHCP？
动态主机配置协议DHCP（Dynamic Host Configuration Protocol）是一种网络管理协议，用于集中对用户IP地址进行动态管理和配置。

DHCP 于 1993 年 10 月成为标准协议，其前身是 BOOTP 协议。DHCP 协议由 RFC 2131 定义，采用客户端/服务器通信模式，由客户端（DHCP Client）向服务器（DHCP Server）提出配置申请，DHCP Server 为网络上的每个设备动态分配IP地址、子网掩码、默认网关地址，域名服务器（DNS）地址和其他相关配置参数，以便可以与其他IP网络通信。

### 5.2 为什么要使用 DHCP？
在 IP 网络中，每个连接 Internet 的设备都需要分配唯一的 IP 地址。DHCP 使网络管理员能从中心结点监控和分配IP地址。当某台计算机移到网络中的其它位置时，能自动收到新的IP地址。DHCP 实现的自动化分配IP地址不仅降低了配置和部署设备的时间，同时也降低了发生配置错误的可能性。另外 DHCP 服务器可以管理多个网段的配置信息，当某个网段的配置发生变化时，管理员只需要更新 DHCP 服务器上的相关配置即可，实现了集中化管理。

总体来看，DHCP 带来了如下优势：

- 准确的IP配置：IP地址配置参数必须准确，并且在处理“ 192.168.XXX.XXX”之类的输入时，很容易出错。另外印刷错误通常很难解决，使用DHCP服务器可以最大程度地降低这种风险。
- 减少IP地址冲突：每个连接的设备都必须有一个IP地址。但是，每个地址只能使用一次，重复的地址将导致无法连接一个或两个设备的冲突。当手动分配地址时，尤其是在存在大量仅定期连接的端点（例如移动设备）时，可能会发生这种情况。DHCP的使用可确保每个地址仅使用一次。
- IP 地址管理的自动化：如果没有DHCP，网络管理员将需要手动分配和撤消地址。跟踪哪个设备具有什么地址可能是徒劳的，因为几乎无法理解设备何时需要访问网络以及何时需要离开网络。DHCP允许将其自动化和集中化，因此网络专业人员可以从一个位置管理所有位置。
- 高效的变更管理：DHCP的使用使更改地址，范围或端点变得非常简单。例如，组织可能希望将其IP寻址方案从一个范围更改为另一个范围。DHCP服务器配置有新信息，该信息将传播到新端点。同样，如果升级并更换了网络设备，则不需要网络配置。

### 5.3 DHCP 是怎么工作的？
DHCP 协议采用 UDP 作为传输协议，DHCP 客户端发送请求消息到 DHCP 服务器的 68 号端口，DHCP 服务器回应应答消息给 DHCP 客户端的 67 号端口。

只有跟 DHCP 客户端在同一个网段的 DHCP 服务器才能收到 DHCP 客户端广播的 DHCP DISCOVER 报文。当 DHCP 客户端与 DHCP 服务器不在同一个网段时，必须部署 DHCP 中继来转发 DHCP 客户端和 DHCP 服务器之间的 DHCP 报文。在 DHCP 客户端看来， DHCP 中继就像 DHCP 服务器；在 DHCP 服务器看来，DHCP 中继就像 DHCP 客户端。

---
## 参考文献
[dhclient.(8) manual - linux.org](https://www.linux.org/docs/man8/dhclient.html)

[什么是DHCP？为什么要用DHCP？ - 华为](https://info.support.huawei.com/info-finder/encyclopedia/zh/DHCP.html)

<Vssue title="dhclient" />