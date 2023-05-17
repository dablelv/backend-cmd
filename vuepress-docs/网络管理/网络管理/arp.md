## 1.命令简介
arp（Address Resolution Protocol）操作主机的 ARP 缓存。

arp 可以显示 arp 缓冲区中的所有条目、删除指定的条目或添加静态的 IP 地址与 MAC 地址对应关系。

## 2.命令格式
```shell
arp [-vn] [-H <type>] [-i <if>] [-ae] [<hostname>]

arp [-v] [-i <if>] -d <hostname> [pub]

arp [-v] [-H <type>] [-i <if>] -s <hostname> <hw_addr> [temp]

arp [-v] [-H <type>] [-i <if>] -s <hostname> <hw_addr> [netmask <nm>] pub

arp [-v] [-H <type>] [-i <if>] -Ds <hostname> <ifname> [netmask <nm>] pub

arp [-vnD] [-H <type>] [-i <if>] -f [<filename>]
```

## 3.选项说明
```
-a
	使用备用 BSD 样式输出格式（没有固定列）。
-H, --hw-type, -t <type>
	指定arp指令使用的地址类型。
-d <address>
	从 arp 缓存中删除指定主机的 arp 条目。
-D, --use-device
	使用指定接口的硬件地址。
-e
	以 Linux 的显示风格显示 arp 缓存中的条目。
-i, --device <if>
	指定要操作 arp 缓存的网络接口。
-n, --numeric
	以数字方式显示 arp 缓存中的条目。
-v, --verbose
	显示详细的arp缓存条目，包括缓存条目的统计信息。
-f, --file <filename>
	设置主机的IP地址与 MAC 地址的静态映射。
```

## 4.常用示例
（1）查看 arp 缓存表。
```shell
arp
Address                  HWtype  HWaddress           Flags Mask            Iface
169.254.0.47             ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.4              ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.15             ether   fe:ee:7f:99:99:19   C                     eth0
```

（2）查看 arp 表，并且用 IP 显示而不是主机名称。
```shell
arp -n
Address                  HWtype  HWaddress           Flags Mask            Iface
169.254.0.47             ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.4              ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.15             ether   fe:ee:7f:99:99:19   C                     eth0
```

（3）查看 arp 表，使用备用 BSD 样式输出格式（没有固定列）。
```shell
arp -a
? (169.254.0.47) at fe:ee:7f:99:99:19 [ether] on eth0
? (169.254.0.4) at fe:ee:7f:99:99:19 [ether] on eth0
? (169.254.0.15) at fe:ee:7f:99:99:19 [ether] on eth0
```

（4）IP 和 MAC 地址绑定。
```shell
arp -s 172.16.0.76 00:50:56:26:d8:87
```

（5）删除 ARP 缓存表中指定项。
```shell
arp -d 169.254.0.47
```

（6）删除指定网卡的 arp 表。
```shell
arp -i eth0 -d 169.254.0.4
```

（7）使用 eth1 的 MAC 地址回答 eth0 上的 192.168.60.2 的 arp 请求。
```shell
arp -i eth0 -Ds 192.168.60.2 eth1 pub
```

（8）显示详细的 arp 缓存条目，包括缓存条目的统计信息。
```shell
arp -v
Address                  HWtype  HWaddress           Flags Mask            Iface
169.254.0.47             ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.4              ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.15             ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.3              ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.2              ether   fe:ee:7f:99:99:19   C                     eth0
169.254.128.8            ether   fe:ee:7f:99:99:19   C                     eth0
169.254.128.12           ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.138            ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.55             ether   fe:ee:7f:99:99:19   C                     eth0
10.0.0.1                 ether   fe:ee:7f:99:99:19   C                     eth0
169.254.0.23             ether   fe:ee:7f:99:99:19   C                     eth0
Entries: 11	Skipped: 0	Found: 11
```

---
## 参考文献
[arp(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/arp.8.html)
