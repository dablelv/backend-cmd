## 1.命令简介
ip 显示/操作路由、网络设备、接口和隧道。

## 2.命令格式
```shell
ip [ OPTIONS ] OBJECT { COMMAND | help }

ip [ -force ] -batch filename

OBJECT := { link | address | addrlabel | route | rule | neigh |
          ntable | tunnel | tuntap | maddress | mroute | mrule |
          monitor | xfrm | netns | l2tp | tcp_metrics | token |
          macsec | vrf | mptcp }

OPTIONS := { -V[ersion] | -h[uman-readable] | -s[tatistics] |
          -d[etails] | -r[esolve] | -iec | -f[amily] { inet | inet6
          | link } | -4 | -6 | -I | -D | -B | -0 | -l[oops] {
          maximum-addr-flush-attempts } | -o[neline] | -rc[vbuf]
          [size] | -t[imestamp] | -ts[hort] | -n[etns] name |
          -N[umeric] | -a[ll] | -c[olor] | -br[ief] | -j[son] |
          -p[retty] }
```

其中 COMMAND 为要在对象上执行的操作。可能的操作取决于对象类型。一般来说，可以 add、delete 和 show（或 list）对象，但有些对象不允许所有这些操作，或者有一些额外的命令。help 命令对所有对象都有效，它打印出可用命令和参数语法约定的列表。

如果没有给出命令，则假设有一些默认命令，通常是 list。如果不能列出该类对象，则使用 help。

## 3.选项说明
```
-V, -Version
  显示指令版本信息。
-h, -human, -human-readable
  以人类可读的方式输出统计信息。
-b, -batch <FILENAME>
  从提供的文件或标准输入读取命令并调用它们。第一次失败将导致 ip 终止。
-force
  不要在批处理模式下错误时终止ip。如果在执行命令期间出现任何错误，则应用程序返回码将是非零。
-s, -stats, -statistics
  输出更详细的信息。如果该选项出现两次或两次以上，则信息量会增加。作为一种规则，信息是统计数据或一些时间值。
-f, -family <FAMILY>
  强制使用指定的协议族。
-4
  指定使用的网络层协议是 IPv4 协议。
-6
  指定使用的网络层协议是 IPv6 协议。
-o, -oneline
  以单行输出每条记录，用'\'字符替换换行。当您想用 wc(1) 或 grep(1) 输出计数记录时，这很方便。
-r, -resolve
  显示主机时，不使用IP地址，而使用主机的域名。
```

## 4.常用示例

（1）显示网络设备的运行状态。
```shell
ip link list
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:31:f1:f2 brd ff:ff:ff:ff:ff:ff
```

（2）显示核心路由表。

```shell
ip route list | show
10.0.0.0/22 dev eth0 proto kernel scope link src 10.0.0.3 
169.254.0.0/16 dev eth0 scope link metric 1002 
```


（3）显示邻居路由表。

```shell
ip neigh list | show
169.254.0.55 dev eth0 lladdr fe:ee:7f:99:99:19 REACHABLE
10.0.0.1 dev eth0 lladdr fe:ee:7f:99:99:19 REACHABLE
169.254.0.4 dev eth0 lladdr fe:ee:7f:99:99:19 REACHABLE
169.254.0.138 dev eth0 lladdr fe:ee:7f:99:99:19 REACHABLE
169.254.0.15 dev eth0 lladdr fe:ee:7f:99:99:19 STALE
169.254.0.23 dev eth0 lladdr fe:ee:7f:99:99:19 STALE
169.254.128.8 dev eth0 lladdr fe:ee:7f:99:99:19 REACHABLE
169.254.128.12 dev eth0 lladdr fe:ee:7f:99:99:19 REACHABLE
169.254.0.2 dev eth0 lladdr fe:ee:7f:99:99:19 STALE
169.254.0.47 dev eth0 lladdr fe:ee:7f:99:99:19 STALE
2402:4e00:1000:fe00:1:1:1:2 dev eth0  FAILED
240e:a5:4200:89::256 dev eth0  FAILED
```

（4）启动指定网卡。

```shell
ip link set dev eth0 up
```

（5）关闭指定网卡。
```shell
ip link set dev eth0 down
```

（6）改变设备传输队列的长度。
```shell
ip link set dev eth0 txqueuelen 100
```

（7）改变网络设备MTU(最大传输单元)的值。

```shell
ip link set dev eth0 mtu 1500
```

（8）修改网络设备的 MAC 地址。
```shell
ip link set dev eth0 address 00:50:56:26:d8:88
```

（9）查看指定网卡信息。

```shell
ip -s link list eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:31:f1:f2 brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast   
    1008467781 4685557  0       0       0       0       
    TX: bytes  packets  errors  dropped carrier collsns 
    727562681  4491436  0       0       0       0
```
等同于 ifconfig eth0。

（10）为每个地址设置一个字符串作为标签。

```shell
ip addr add local 172.16.0.76 brd + label eth0:1 dev eth0
```

（11）添加协议地址。

```shell
ip addr add local 172.16.0.77 brd + label eth0:2 dev eth0
```
在以太网接口 eth0 上增加一个地址 172.16.0.77，标签为 eth0:Alias。

（12）删除协议地址。

```shell
ip addr del local 172.16.0.77 brd + dev eth0 label eth0:2
```
ip address delete，删除一个协议地址. address 可缩写为 addr，delete 可缩写为 del 或 d。

（13）显示协议地址。

```shell
ip addr ls eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 52:54:00:31:f1:f2 brd ff:ff:ff:ff:ff:ff
    inet 10.0.0.3/22 brd 10.0.3.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet 172.16.0.76/32 scope global eth0:1
       valid_lft forever preferred_lft forever
    inet6 fe80::5054:ff:fe31:f1f2/64 scope link 
       valid_lft forever preferred_lft forever
```
ip address show 显示协议地址。其中 show 可缩写为 sh，list 可缩写为 lst、ls 和 l。

（14）取消所有以太网卡的IP地址。

```shell
ip -4 addr flush label eth0
```

（15）在设备 eth0 上，为地址 10.0.0.3 添加一个 permanent ARP 条目。

```shell
ip neigh add 10.0.0.3 lladdr 0:0:0:0:0:1 dev eth0 nud perm
```

（16）把状态改为可达。

```shell
ip neigh chg 172.16.0.76 dev eth0 nud reachable
```

（17）删除设备上的一个 ARP 条目。

```shell
ip neigh del 172.16.0.76 dev eth0
```

（18）添加 172.16.0.0 网段转发到 eth0。
```shell
ip route add 172.16.0.0 dev eth0  
```

---
## 参考文献
[ip(8) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/ip.8.html)

[【Linux】一步一步学Linux——ip命令(183) - CSDN博客](https://blog.csdn.net/dengjin20104042056/article/details/100063872)

[Linux基础命令---IP路由操作 - CSDN博客](https://blog.csdn.net/wj78080458/article/details/86909969)

<Vssue title="ip" />