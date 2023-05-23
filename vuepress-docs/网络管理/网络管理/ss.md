## 1.命令简介
ss（Socket Statistics）另一个用于研究套接字的实用程序。

ss 命令用来显示处于活动状态的套接字信息。ss 命令可以用来获取 socket 统计信息，它可以显示和 netstat 类似的内容。但ss的优势在于它能够显示更多更详细的有关 TCP 和连接状态的信息，而且比 netstat 更快速更高效。

当服务器的 socket 连接数量变得非常大时，无论是使用 netstat 命令还是直接`cat /proc/net/tcp`，执行速度都会很慢。可能你不会有切身的感受，但请相信我，当服务器维持的连接达到上万个的时候，使用 netstat 等于浪费生命，而用 ss 却能节省时间。

天下武功唯快不破。ss 快的秘诀在于，它利用到了 TCP 协议栈中 tcp_diag。tcp_diag 是一个用于分析统计的模块，可以获得 Linux 内核中第一手的信息，这就确保了 ss 的快捷高效。当然，如果你的系统中没有 tcp_diag，ss 也可以正常运行，只是效率会变得稍慢。

## 2.命令格式
```shell
ss [options] [ FILTER ]
```
其中 FILTER 为过滤器，取值为
```
FILTER := [ state STATE-FILTER ] [ EXPRESSION ]
```
## 3.选项说明
```
-h, --help
	帮助信息。
-V, --version
	程序版本信息。
-n, --numeric
	不解析服务名称。
-r, --resolve
	解析主机名。
-a, --all
	显示所有套接字，即显示侦听和非侦听（对于 TCP，这意味着已建立连接）套接字。
-l, --listening
	显示监听状态的套接字。
-o, --options
	显示计时器信息。对于TCP协议，输出格式为：timer:(<timer_name>,<expire_time>,<retrans>)。
	<timer_name> 为计时器的名称，有五种计时器名称：
		on：表示这些计时器之一：TCP 重新训练计时器，TCP早期重新训练计时器和尾部丢失探测计时器
		keepalive：tcp保持活动计时器
		timewait：timewait 阶段计时器
		persist：零窗口探测计时器
		unknown：没有上述计时器
	 <expire_time> 为计时器过期多时间。
	 <retrans> 重传发生了多少次。
-e, --extended
	显示详细的套接字信息。
-m, --memory
	显示套接字的内存使用情况。
-p, --processes
	显示使用套接字的进程。
-i, --info
	显示 TCP 内部信息。
-s, --summary
	显示套接字使用概况。
-4, --ipv4
	仅显示 IPv4 的套接字。
-6, --ipv6
	仅显示 IPv6 的套接字。
-0, --packet
	显示 PACKET 套接字。
-t, --tcp
	仅显示 TCP 套接字。
-u, --udp
	仅显示 UCP 套接字。
-d, --dccp
	仅显示 DCCP 套接字。
-w, --raw
	仅显示 RAW 套接字。
-x, --unix
	仅显示 Unix 套接字。
-f, --family=FAMILY
	显示 FAMILY 类型的套接字，FAMILY 可选，支持  unix, inet, inet6, link, netlink。
-A, --query=QUERY, --socket=QUERY
      QUERY := {all | inet | tcp | udp | raw | unix | packet | netlink}[,QUERY]
-D, --diag=FILE
	将原始 TCP 套接字信息转储到文件。
-F, --filter=FILE
	从文件中都去过滤器信息FILTER := [ state TCP-STATE ] [ EXPRESSION ]
```
## 4.常用示例
（1）显示所有 TCP 连接。
```shell
ss -t -a
State      Recv-Q Send-Q         Local Address:Port                          Peer Address:Port                
LISTEN     0      128                        *:10662                                    *:*                    
LISTEN     0      128                        *:ssh                                      *:*                    
LISTEN     0      128                        *:ddi-tcp-1                                *:*                    
ESTAB      0      0                   10.0.0.3:40616                        169.254.0.138:8186                 
ESTAB      0      0                   10.0.0.3:36274                         169.254.0.55:lsi-bobcat           
ESTAB      0      52                  10.0.0.3:ssh                         107.150.189.50:56566  
```

（2）显示套接字使用概况。
```shell
ss -s
Total: 1644 (kernel 2523)
TCP:   10 (estab 1, closed 1, orphaned 0, synrecv 0, timewait 0/0), ports 0

Transport Total     IP        IPv6
*         2523      -         -        
RAW       1         0         1        
UDP       11        8         3        
TCP       9         6         3        
INET      21        14        7        
FRAG      0         0         0       
```

（3）显示监听状态的套接字。
```shell
ss -l
Netid  State      Recv-Q Send-Q   Local Address:Port                    Peer Address:Port                
nl     UNCONN     0      0                 rtnl:kernel                              *                     
nl     UNCONN     0      0                 rtnl:ntpd/657                            *                     
nl     UNCONN     0      0                 rtnl:ntpd/657                            *                     
nl     UNCONN     4352   0              tcpdiag:ss/28913                            *                     
nl     UNCONN     768    0              tcpdiag:kernel                              *                     
nl     UNCONN     0      0                 xfrm:kernel                              *                     
...           
```
（4）显示 LISTEN 状态的进程信息。
```shell
ss -lp
Netid  State      Recv-Q Send-Q Local Address:Port                 Peer Address:Port                
nl     UNCONN     0      0      rtnl:evolution-addre/3016   *                     
nl     UNCONN     0      0      rtnl:packagekitd/1658       *                     
nl     UNCONN     0      0      rtnl:1334                   *                     
nl     UNCONN     0      0      rtnl:avahi-daemon/630       *
...
```

（5）查看指定端口的信息。
```shell
ss -lp | grep 10662
udp    UNCONN     0      0       *:10662                 *:*                     users:(("ss-server",pid=1019,fd=6))
tcp    LISTEN     0      128     *:10662                 *:*                     users:(("ss-server",pid=1019,fd=5))
```

（6）查看所有 UDP 套接字。
```shell
ss -u -a
State      Recv-Q Send-Q         Local Address:Port                          Peer Address:Port                
UNCONN     0      0                          *:bootpc                                   *:*                    
UNCONN     0      0                   10.0.0.3:ntp                                      *:*                    
UNCONN     0      0                  127.0.0.1:ntp                                      *:*                    
UNCONN     0      0                          *:ntp                                      *:*                    
UNCONN     0      0                          *:10662                                    *:*                    
UNCONN     0      0      [fe80::5054:ff:fe31:f1f2]%eth0:ntp                          [::]:*                    
UNCONN     0      0                      [::1]:ntp                                   [::]:*                    
UNCONN     0      0                       [::]:ntp                                   [::]:*               
```

（7）显示所有状态为 established 的 SMTP 连接。
```shell
ss -o state established '( dport = :smtp or sport = :smtp )'
Netid  Recv-Q Send-Q           Local Address:Port                            Peer Address:Port
```
（8）显示所有状态为 Established 的 HTTP 连接。
```shell
ss -o state established '( dport = :http or sport = :http )' 
Netid  Recv-Q Send-Q           Local Address:Port                            Peer Address:Port
```
（9）列举出处于 FIN-WAIT-1 状态的源端口为 80 或者 443，目标网络为 193.233.7/24 所有 TCP 套接字。
```shell
ss -o state fin-wait-1 '( sport = :http or sport = :https )' dst 193.233.7/24
Netid  Recv-Q Send-Q Local Address:Port                 Peer Address:Port
```
（10）查询关闭状态的套接字。
```shell
ss -4 state closing
Netid  Recv-Q Send-Q           Local Address:Port                            Peer Address:Port
```
状态可以是如下：
```
established
syn-sent
syn-recv
fin-wait-1
fin-wait-2
time-wait
closed
close-wait
last-ack
listen
closing
```

（11）匹配目的 IP 和端口。
```shell
ss dst 192.168.12.94
Netid  State      Recv-Q Send-Q Local Address:Port                 Peer Address:Port

ss dst 192.168.12.94:http
Netid  State      Recv-Q Send-Q Local Address:Port                 Peer Address:Port

ss dst 192.168.12.94:1521
Netid  State      Recv-Q Send-Q Local Address:Port                 Peer Address:Port
```

（12）匹配本地 IP 和端口。
```shell
ss src 192.168.12.94
Netid  State      Recv-Q Send-Q Local Address:Port                 Peer Address:Port                
tcp    ESTAB      0      0      192.168.12.94:ssh                  192.168.12.87:52486 

ss src 192.168.12.94:http
Netid  State      Recv-Q Send-Q Local Address:Port                 Peer Address:Port

ss src 192.168.12.94:1521
Netid  State      Recv-Q Send-Q Local Address:Port                 Peer Address:Port
```

（13）端口比较。
```shell
ss  sport = :http 
ss  dport = :http 
ss  dport \> :1024 
ss  sport \> :1024 
ss sport \< :32000 
ss  sport eq :22 
ss  dport != :22 
ss  state connected sport = :http 
ss \( sport = :http or sport = :https \) 
ss -o state fin-wait-1 \( sport = :http or sport = :https \) dst 192.168.1/24
```
格式为：
```shell
ss dport OP PORT 
ss sport OP PORT
```
ss dport OP PORT 远程端口和一个数比较；ss sport OP PORT 本地端口和一个数比较。

OP 可以代表以下任意一个：
```
<= or le : 小于或等于端口号
>= or ge : 大于或等于端口号
== or eq : 等于端口号
!= or ne : 不等于端口号
< or gt : 小于端口号
> or lt : 大于端口号
```
（14）ss 和 netstat 效率比较。

用 time 命令分别获取通过 netstat 和 ss 命令获取程序和概要占用资源所使用的时间。在服务器连接数比较多的时候，netstat 的效率完全没法和 ss 比。
```shell
time ss
...
real    0m0.020s
user    0m0.005s
sys     0m0.005s

time netstat -at
...
real    0m10.266s
user    0m0.015s
sys     0m0.032s
```
（15）显示连接 X 服务器的进程。
```shell
ss -x src /tmp/.X11-unix/X0
Netid  State      Recv-Q Send-Q      Local Address:Port                       Peer Address:Port
```

---
## 参考文献
[ss(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/ss.8.html)

[RFC 793](https://tools.ietf.org/rfc/rfc793.txt)

<Vssue title="ss" />