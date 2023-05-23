## 1.命令简介
netstat 命令用来打印 Linux 系统的网络状态信息，包括网络连接（network connections）、路由表（routing tables）、网络接口设备统计信息（interface statistics）、伪连接（masquerade connections）和多播成员信息（multicast memberships）等，得知 Linux 系统网络的整体情况。

如我们可以通过 netstat 获知系统当前被监听的端口号列表。

netstat 是通过读取 /proc/net/ 路径下的 tcp、udp、unix 等文件来获取连接信息的。

## 2.命令格式
```
netstat [OPTIONS]
```

## 3.选项说明
```shell
-a, --all
	显示所有网络连接
-A，--protocol=FAMILY
	列出指定地址族的连接信息。FAMILY 为逗号分隔的地址族关键字列表，比如inet，inet6，unix，ipx，ax25，netrom，econet 和 ddp 等
-c,--continuous
	每隔 1s 刷新网络状态
-C
	从路由缓存获取路由信息
-e, --extend
	显示网络其他相关信息
-F
	显示 FIB 中的路由信息(默认选项) 
-g, --g
	显示 IPv4 和 IPv6 的多播组成员关系信息
-h, --help
	显示帮助信息
-i, -I=IFACE, --interfaces=IFACE
	显示所有网络接口或指定的网络接口
-l, --listening
	显示监听中的套接字(默认选项)
-M, --masquerade
	显示伪装的网络连接
-n, --numeric
	以数字形式而不是以符号显示主机、端口或用户名。
--numeric-hosts
	以数字形式显示主机地址
--numeric-ports
	以数字形式显示端口号
--numeric-users
	以数字形式显示用户名
-N, --netlink, --symbolic
	显示网络硬件外围设备的符号连接名称
-o, --timers
	显示计时器
-p, --programs
	显示正在使用 Socket 的进程 ID 和进程名
-r, --route
	显示内核路由表。命令 route -e 会产生同样的结果
-s, --statistice
	显示每种协议的统计信息
-t, --tcp
	显示TCP传输协议的连接状况
-u, --udp
	显示 UDP 传输协议的连接状况
-v, --verbose
	显示指令执行过程。特别是打印一些关于未配置地址族的有用信息
-V, --version
	显示版本信息
-w, --raw
	显示 RAW 传输协议的连接状况
-x, --unix
	此参数的效果和指定 "-A unix" 参数相同
--ip, --inet
	此参数的效果和指定 "-A inet" 参数相同
```

## 4.常用示例
（1）列出所有端口信息（包括监听和未监听的）。
- 列出所有端口。
```
netstat -an
 Active Internet connections (servers and established)
 Proto Recv-Q Send-Q Local Address           Foreign Address         State
 tcp        0      0 localhost:30037         *:*                     LISTEN
 udp        0      0 *:bootpc                *:*
 
Active UNIX domain sockets (servers and established)
 Proto RefCnt Flags       Type       State         I-Node   Path
 unix  2      [ ACC ]     STREAM     LISTENING     6135     /tmp/.X11-unix/X0
 unix  2      [ ACC ]     STREAM     LISTENING     5140     /var/run/acpid.socket
 ...
```
- 列出所有 tcp 端口。
```
netstat -ant
```
- 列出所有 UDP 端口。
```
netstat -anu
```
（2）列出所有处于监听状态的连接。
- 显示处于监听状态的所有连接。
```
netstat -ln
 Active Internet connections (only servers)
 Proto Recv-Q Send-Q Local Address           Foreign Address         State
 tcp        0      0 localhost:ipp           *:*                     LISTEN
 tcp6       0      0 localhost:ipp           [::]:*                  LISTEN
 udp        0      0 *:49119                 *:*
```
- 只显示处于监听状态的 tcp 连接。
```
netstat -lnt
```
- 只显示处于监听状态的 udp 连接。
```
netstat -lnu
```
- 只显示处于监听状态的 unix 连接。
```
netstat -lnx
```
（3）显示每个协议的统计信息。
- 显示所有端口的统计信息。
```
netstat -s
 Ip:
 11150 total packets received
 1 with invalid addresses
 0 forwarded
 0 incoming packets discarded
 11149 incoming packets delivered
 11635 requests sent out
 Icmp:
 0 ICMP messages received
 0 input ICMP message failed.
 Tcp:
 582 active connections openings
 2 failed connection attempts
 25 connection resets received
 Udp:
 1183 packets received
 4 packets to unknown port received.
 .....
```
- 显示 TCP 端口的统计信息。
```
netstat -st 
```
- 显示 UDP 端口统计信息。
```
netstat -su
```
（4）显示进程 ID 和名称。
```
netstat -p
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 10.234.178.144:43538    100.113.169.225:31415   ESTABLISHED -                   
tcp        0      0 10.234.178.144:33295    10.121.151.35:sd        ESTABLISHED 5354/VipMQAgent     
tcp        0      0 10.234.178.144:21095    100.92.40.70:bacula-dir ESTABLISHED 25164/pgg_login_cme
```
（5）以数字形式显示主机、端口和用户名。这样可以加速输出，因为不用进行比对查询。
```
netstat -n
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 10.234.178.144:43538    100.113.169.225:31415   ESTABLISHED
tcp        0      0 10.234.178.144:33295    10.121.151.35:9876      ESTABLISHED
```
如果只是不想让这三个名称中的一个被显示，使用以下命令
```
netsat -a --numeric-ports
netsat -a --numeric-hosts
netsat -a --numeric-users
```
（6）每隔一秒持续输出 netstat 信息。
```
netstat -c
```
（7）显示系统不支持的地址族 (Address Families)。
```
netstat --verbose
```
在输出的末尾，会有如下的信息
```
netstat: no support for `AF IPX' on this system.
netstat: no support for `AF AX25' on this system.
netstat: no support for `AF X25' on this system.
netstat: no support for `AF NETROM' on this system.
```
（8）显示核心路由信息。
```
netstat -r
Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         0.0.0.0         0.0.0.0         U         0 0          0 tunnat
9.0.0.0         10.175.82.193   255.0.0.0       UG        0 0          0 eth1
10.0.0.0        10.175.82.193   255.0.0.0       UG        0 0          0 eth1
```
注意：使用 netstat -rn 显示数字格式，不查询主机名称。

（9）找出程序运行的端口。并不是所有的进程都能找到，没有权限的会不显示，使用 root 权限查看所有的信息。
```
netstat -anp
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 10.175.82.204:61795     0.0.0.0:*               LISTEN      22006/./spp_pgg_dia 
tcp        0      0 10.175.82.204:55011     0.0.0.0:*               LISTEN      3228/./spp_pgg_vod_ 
tcp        0      0 10.175.82.204:10883     0.0.0.0:*               LISTEN      125115/./spp_pgg_co
```
（10）显示网络接口列表。
```
netstat -i
Kernel Interface table
Iface      MTU    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
eth1      1500 32898847246      0      0 51410  34664370715      0      0      0 BMRU
lo       65536 57852071211      0      0 0      57852071211      0      0      0 LRU
tunnat    1480        0      0      0 0      103182603      0      0      0 OPRU
```
显示详细信息，可以使用 ifconfig 或者 netstat -ie。
```
netstat -ie
Kernel Interface table
eth1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.175.82.204  netmask 255.255.255.192  broadcast 10.175.82.255
        ether ec:f4:bb:e3:5b:b1  txqueuelen 10000  (Ethernet)
        RX packets 32900073183  bytes 21958447410400 (19.9 TiB)
        RX errors 0  dropped 0  overruns 51410  frame 0
        TX packets 34665611337  bytes 7109591105017 (6.4 TiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device memory 0x91d00000-91e00000
...
```
（11）IP 和 TCP 分析。
- 查看本机连接的服务端口中连接数 TOP 的服务端 IP。其中 10.234.178.144:22 为本地 IP 端口。
```
netstat -ant | grep "10.234.178.144:22" |awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -nr|head -10
     24 100.112.141.208
      2 10.63.93.159
      2 10.191.131.38
      2 10.101.242.11
      2 100.92.40.70
      2 100.113.141.219
      2 100.112.159.163
      1 9.68.178.53
      1 10.191.134.83
      1 10.139.233.47
```
第二列为服务端IP，左边是本地发起的连接数。
（b）查看 TCP 各种状态列表。
```
netstat -ant | awk '{print $6}' | sort | uniq
CLOSE_WAIT
established)
ESTABLISHED
Foreign
LISTEN
TIME_WAIT
```
（12）显示多播组信息。
```
netstat -g
IPv6/IPv4 Group Memberships
Interface       RefCnt Group
--------------- ------ ---------------------
lo              1      all-systems.mcast.net
eth1            1      all-systems.mcast.net
tunnat          1      all-systems.mcast.net
lo              1      ff02::1
lo              1      ff01::1
eth0            1      ff02::1
eth0            1      ff01::1
eth1            1      ff02::1

```
netstat 的大部分功能都介绍了，如果想知道 netstat 更高级的功能，请参考 netstat 帮助手册。

## 5.输出结果整体说明
执行 netstat 命令输出：
```shell
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 9.77.9.126:47239        100.115.0.57:9922       ESTABLISHED
tcp        0     52 9.77.9.126:36000        10.19.88.119:58814      ESTABLISHED
tcp        0      0 9.77.9.126:37586        10.170.31.139:nsesrvr   ESTABLISHED
udp        0      0 TENCENT64:acp-proto     TENCENT64:openwebnet    ESTABLISHED
udp        0      0 TENCENT64:4216          TENCENT64:openwebnet    ESTABLISHED
Active UNIX domain sockets (w/o servers)
Proto RefCnt Flags       Type       State         I-Node   Path
unix  2      [ ]         DGRAM                    307286163 /tmp/agent_cmd.sock
unix  2      [ ]         DGRAM                    9484     /var/run/nscd/socket
unix  2      [ ]         DGRAM                    275      /run/systemd/notify
...
```
从整体上看 netstat 的输出结果可以分为两个部分。一个是 Active Internet connections，二是 Active UNIX domain sockets。

（1）Active Internet connections。

Active Internet connections 表示活跃的网络连接，包括 UDP 和 TCP连接信息。

其中"Recv-Q"和"Send-Q"指接收队列和发送队列，这些数字一般都应该是0，如果不是则表示数据发送和接收队列存在堆积，这种情况较为少见。

Local Address 和 Foreign Address 表示本地和远端的 IP、端口；

State 表示连接的状态，主要有：
```
LISTEN：监听状态；
SYN_SEND：客户端在发送连接请求后进入SYN_SEND状态，等待服务端的连接请求和确认，即等待服务端发送SYN+ACK包；
SYN_RECV：服务端在收到客户端的连接请求后，发送SYN+ACK包后，进入SYN_RECV状态；
ESTABLISHED：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK后，客户端和服务器进入已建立连接状态；
FIN-WAIT-1：客户端发送连接中断请求后进入FIN-WAIT-1状态，等待服务端的确认；
FIN-WAIT-2：客户端接收到服务端的终端确认后进入FIN-WAIT-2状态，等待服务端的中断请求；
CLOSE-WAIT：服务端在确认客户端的中断请求后，进入CLOSE-WAIT状态，等待从本地用户发来的连接中断请求；
LAST-ACK：服务端向客户端发送连接中断请求后进入LAST-ACK状态，等待来自客户端的中断请求确认；
TIME-WAIT：客户端发送中断请求确认后进入TIME-WAIT状态，等待足够的时间（2MSL）以确保服务端接收到来自客户端的中断请求确认； 
CLOSED：四次挥手结束后，客户端和服务端进入连接断开状态。
```
为了便于理解 TCP 建立连接的三次握手和断开连接的四次挥手过程中涉及的状态，附上两张便于理解的示意图。

三次握手：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190201201646408.png)
四次挥手：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190201201713641.png)
（2）Active UNIX domain sockets。
Active UNIX domain sockets，称为活跃 Unix 域套接字。

Proto 显示连接使用的协议；
RefCnt 表示使用数量，即通过此套接字连接的进程数；
Flags 显示的标志为 SO_ACCEPTON（显示为 ACC）、SO_WAITDATA（W）或 SO_NOSPACE（N）。如果相应的进程等待一个连接请求，那么 SO_ACCECPTON 用于未连接的套接字。其它标志通常并不重要。
Types 显示套接口的类型，一般为 DGRAM（数据报）和 STREAM（数据流）；
State 显示套接字当前的状态，此字段包含以下关键字之一：
```
FREE：套接字未分配。
LISTENING：套接字正在监听一个连接请求。除非设置 --listening (-l) 或者 --all (-a) 选项，否则不显示。
CONNECTING：套接字正要建立连接
CONNECTED：套接字已连接
DISCONNECTING：套接字已断开
(empty)：套接字未连
```
I-Node 表示套接字的 Inode 节点号；
Path 表示套接字所在路径。

---
## 参考文献
[netstat(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/netstat.8.html)

[netstat - linux命令在线中文手册](http://linux.51yip.com/search/netstat)

[Linux netstat命令详解](http://www.cnblogs.com/ggjucheng/archive/2012/01/08/2316661.html)

[Linux命令之netstat](https://www.cnblogs.com/diantong/p/9669568.html)

[TCP的三次握手与四次挥手（详解+动图）](https://blog.csdn.net/qzcsu/article/details/72861891)

<Vssue title="netstat" />