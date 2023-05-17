## 1.命令简介
arpwatch 跟踪 ethernet/ip 地址对。

ARP(Address Resolution Protocol) 是用来解析 IP 与 MAC 地址的协议。 arpwatch 使用 pcap(3) 在本地以太网接口上侦听 arp 数据包，同时将监听到的变化通过 Email 来报告。

## 2.命令格式
```shell
arpwatch [ -dN ] [ -f datafile ] [ -i interface ] [ -n net[/width ]] [ -r file ] [ -u username ] [ -e username ] [ -s username ]
```

## 3.选项说明
```
-d
	启动排错模式。
-f <datafile>
	设置存储 ARP 记录的文件，预设为 /var/arpwatch/arp.dat。
-i <interface>
	指定监听 ARP 的接口，预设的接口为 eth0。
-r <file>
	从指定的文件中读取 ARP 记录，而不是从网络上监听。
-n <net>[/<width>]
	指定附加的本地网络。
-N
	禁用报告任何 bogon。
-u <username>
	指定用户和用户组。
-e <username>
	发送邮件给指定用户，非默认的 root 用户。
-s <username>
	指定用户名作为返回地址，而不是默认的用户 root。
```

## 4.常用示例

（1）监听网卡 ens33 的 ARP 信息。

```shell
arpwatch -i ens33
```

（2）监听 ARP 信息，将相关信息记录到相应的文件。

```shell
arpwatch -i ens33 -f /tmp/a.log
```

---
## 参考文献
[arpwatch(8) - Linux man page - Die.net](https://linux.die.net/man/8/arpwatch)
