## 1.命令简介
ping（Packet Internet Groper）命令是因特网包探索器，用于测试网络连通性，是常用的网络命令之一。

ping 命令用于向指定的网络主机发送 IMCP 响应请求报文（ECHO-REQUEST），多数网络设备收到该报文后会回应 ICMP 响应应答报文（ECHO-REPLY），以此来验证网络连接是否正常。

**注意：** Linux 系统下的 ping 命令与 Windows 系统下的 ping 命令稍有不同。Windows 下运行 ping 命令一般会发出 4 个请求就结束运行该命令；而 Linux 下不会自动终止，此时需要我们按 Ctrl+C 终止或者使用 -c 参数为 ping 命令指定发送的请求数目。
## 2.命令格式
```
ping
ping [OPTIONS] DESTINATION
```
不跟参数单独执行 ping 命令将显示简短用法。其中参数为零到多个，目标主机可以是主机 IP 或者域名。
## 3.选项说明
```
-4
	只使用 IPv4
-6
	只使用 IPv6
-A
	探测包发送间隔自适应往返时间，这样网络中存在的未应答的探测请求一般不会超过一个
-a
　　每次发送数据时发出鸣响（Audible）
-B
	不允许 ping 改变包头的源地址
-b
	允许 ping 一个广播地址
-c COUNT
　　发送 count 个 ECHO_REQUEST 数据包后结束 ping 程序
-D
	在每行前打印时间戳
-d
　　使用 socket 的 SO_DEBUG 选项。实际上，Linux 内核不使用这个套接字选项
-F FLOW_LABEL
	仅 IPv6 有效。为请求包分配一个 20 比特的 flow label。如果 FLOW_LABEL 为 0，内核会随机分配
-f
　　采用洪泛模式大量且快速地向目标发送数据包。如果发送间隔没有设置，则默认设置为 0，并按照报文接受的速度和一百次每秒的速度来发送报文（以最快的为准）。只有超级用户能够将此选项和 -i 0 选项一起使用
-h
	显示帮助信息
-I INTERFACE
　　使用指定的网络接口地址发送数据包
-i INTERVAL
　　每隔 INTERVAL 秒发送一次数据包，默认一秒 ping 一次。只有超级用户可以将间隔设置为小于0.2 秒的值
-L
	抑制组播报文回送，只适用于 ping 的目标为一个组播地址
-l PRELOAD
	在没有接受到回复报文之前能发送的最多报文。非超级用户最多只能设置为 3
-M PMTUDISC_OPT
	选择 Path MTU Discovery 策略模式。PMTUDISC_OPT 取值可以为 do（不允许分段，甚至不允许在本地分段）、want（找出 PMTU，在如果包太大就在本地分段） 或 dont（不要设置 IP 包首部中的 DF 位，即允许分段）
-m MARK
	使用标记来标记发送的数据包
-n
　　只输出主机 IP 地址，不通过查询 DNS 获知 IP 地址对应的主机名，以节省时间
-O
	在发送下一个数据包之前报告未完成的 ICMP Echo 请求
-p PATTERN
　　最多指定 16 个字节去填充发送的数据包，这对于诊断网络中数据依赖问题很有用。例如，-p ff 会将所有的填充数据设置为 1
-Q TOS
 	用来设置服务质量（Quality of Service ）。ICMP 协议有一个 8 bits 的区分服务（Differentiated Services）。低两位用于分离数据，高 6 位表示区分服务，一般有最小时延、最大吞吐量、最高可靠性、最小代价
-q
　　静态输出。仅程序启动和结束时显示摘要行
-R
　　记录路由过程
-r
　　忽略正常的路由表，而直接向主机发送数据包。如果目标主机不再直连的网络上，则返回异常
-S SNDBUF
		设置套接字的发送缓冲区大小。如果没有设置，则被设定为不超过一个报文长度
-s PACKETSIZE
　　指定要发送的数据的字节数。默认是 56 字节，与 8 字节的 ICMP 头部结合刚好是 64 字节的 ICMP 数据包
-T TIMESTAMP_OPTION
	设置 IP 报文的时间戳选项。选项可以是以下三种：
	（1）-T tsonly 只记录时间戳；
	（2）-T tsandaddr 收集时间戳和 IP 地址；
	（3）-T tsprespec [host1 [host2 [host3[host4]]]] 收集来自预定的网络地址的时间戳
-t TTL
　　设置 IP 包的 TTL 值
-U
	打印完整的用户对用户延迟
-V
	显示版本信息并退出
-v
　　详细模式输出
-W TIMEOUT
　　设置等待 ICMP 响应的超时时间，单位秒
-w DEADLINE
　　ping 程序在 DEADLINE 秒后退出，不管发送或接收多少数据包
```
## 4.常用示例
（1）显示 ping 的简要用法。
```
ping
Usage: ping [-aAbBdDfhLnOqrRUvV] [-c count] [-i interval] [-I interface]
            [-m mark] [-M pmtudisc_option] [-l preload] [-p pattern] [-Q tos]
            [-s packetsize] [-S sndbuf] [-t ttl] [-T timestamp_option]
            [-w deadline] [-W timeout] [hop1 ...] destination
```
（2）测试能否 ping 通 IP。
```
ping 9.134.114.170
PING 9.134.114.170 (9.134.114.170) 56(84) bytes of data.
64 bytes from 9.134.114.170: icmp_seq=1 ttl=64 time=0.033 ms
64 bytes from 9.134.114.170: icmp_seq=2 ttl=64 time=0.040 ms
...
```
回包正常，表示网络链路通畅。

（3）测试能否 ping 通域名。
```
ping baidu.com
PING baidu.com (220.181.38.148) 56(84) bytes of data.
64 bytes from 220.181.38.148: icmp_seq=1 ttl=249 time=39.4 ms
64 bytes from 220.181.38.148: icmp_seq=2 ttl=249 time=39.3 ms
...
```
回包正常，表示网络链路通畅。

（4）每隔 0.5 秒 ping 一次，一共 ping 3 次。
```
ping -i 0.5 -c 3 baidu.com
PING baidu.com (220.181.38.148) 56(84) bytes of data.
64 bytes from 220.181.38.148: icmp_seq=1 ttl=249 time=39.3 ms
64 bytes from 220.181.38.148: icmp_seq=2 ttl=249 time=39.3 ms
64 bytes from 220.181.38.148: icmp_seq=3 ttl=249 time=39.3 ms

--- baidu.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 39.375/39.390/39.399/0.010 ms
```
下面简单地介绍一下 ping 产生的响应内容的含义：
```
PING baidu.com (220.181.38.148) 56(84) bytes of data.
	表示 ping 目标主机的域名和 IP，以及不带包头的包大小和带包头的包大小，参考 -s 选项

64 bytes from 220.181.38.148: icmp_seq=1 ttl=249 time=39.3 ms
64 bytes from 220.181.38.148: icmp_seq=2 ttl=249 time=39.3 ms
64 bytes from 220.181.38.148: icmp_seq=3 ttl=249 time=39.3 ms
	icmp_seq：ping 序列，从 1 开始；如果数字不是按顺序递增也就意味着丢包了
	ttl：剩余的 ttl；见下文的 TTL 解释
	time: 响应时间，数值越小，通信速度越快

3 packets transmitted, 3 received, 0% packet loss, time 1001ms
	发出去的包数，返回的包数，丢包率，总耗费时间

rtt min/avg/max/mdev = 39.375/39.390/39.399/0.010 ms
	最小/最大/平均响应时间和本机硬件耗费时间
```

（5）综合实例，每隔 0.5 秒 ping 一次，一共 ping 3 次，并且设置发送包的大小为 1024 和 TTL 值为 255。
```
ping -i 0.5 -c 3 -s 1024 -t 255 baidu.com
PING baidu.com (39.156.69.79) 1024(1052) bytes of data.
1032 bytes from 39.156.69.79: icmp_seq=1 ttl=249 time=44.8 ms
1032 bytes from 39.156.69.79: icmp_seq=2 ttl=249 time=40.5 ms
1032 bytes from 39.156.69.79: icmp_seq=3 ttl=249 time=40.4 ms

--- baidu.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 40.441/41.927/44.810/2.045 ms
```
（6）综合实例，使用 -i 指定发送数据包时间间隔，-c 指定一共发送多少个数据包，-I 指定源地址，-q 直接显示程序的启动和最后结果。
```
ping -i 0.2 -c 3 -I 9.134.114.170 baidu.com -q
PING baidu.com (39.156.69.79) from 9.134.114.170 : 56(84) bytes of data.

--- baidu.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 400ms
rtt min/avg/max/mdev = 40.476/40.541/40.588/0.171 ms
```
（7）以最快的速度，使用最大的包进行 ping，可用于测试目标主机的承压能力。
```
ping -f -s 65507 baidu.com
```
注意：此用法非常危险，65535（包头+内容）*100个包每秒=6.25MB，每秒发送 6.25MB 的数据，相当于 50Mbps 的带宽，完全可能导致目标主机拒绝服务，请谨慎使用。

（8）ping 不通的情况。
```
ping -c 3 9.9.9.9
PING 9.9.9.9 (9.9.9.9) 56(84) bytes of data.

--- 9.9.9.9 ping statistics ---
3 packets transmitted, 0 received, 100% packet loss, time 1999ms
```
ping 不通目标主机的常见原因有：
```
No Answer：原因可能是，对方主机没工作，双方网络配置不正确，路由问题等
Request Time Out：对方主机已关机，路由问题或对端防火墙设置禁止ping
Unknown Host Name：DNS设置问题，或者对方主机不存在
Destination Net Unreachable：双方没有建立连接，或对方主机不存在
Bad IP Address：IP 地址不存在或 IP 不能被 DNS 服务器解析
transmit failed，error code：网卡驱动问题
no rout to host：网卡工作不正常
Ping 127.0.0.1 如果ping不通，表明本地机 TCP/IP 协议不能正常工作
```
## 5.拓展知识
### 5.1 TTL
当我们在使用 ping 命令时，返回结果里会带一个 TTL 值。这个东西的含义其实就是Time To Live，指的是报文在网络中能够存活的限制。以前这个限制方式是设定一个时间（Time To Live中的Time就是这样来的），当报文在网络中转发时，时间超过这个限制，最后一个收到报文的‘路由点’就会把它扔掉，而不继续转发。后来把时间限制改为了跳数限制，就是当报文在网络中转发时，每经过一个‘路由点‘，就把预先设定的这个TTL数值减 1，直到最后 TTL=1 时报文就被扔掉，不向下转发。

路由点：我这里是指完成路由功能的机器，因为并不是只有路由器才可以完成路由转发功能，比如主机可以配置路由转发。

所以，回包中的 TTL 表示目标主机返回的报文到达本机后，从它预设的 TTL 值减小到现在的值。

### 5.2 开启和禁用 ping 响应
有时为了保护主机，很多时候我们需要禁止 ICMP 协议，在这种情况下，终端再使用ping命令检测，服务器不会再做出任何响应。

（1）临时开启 ping。
```
echo 0 > /proc/sys/net/ipv4/icmp_echo_ignore_all
```

（2）临时禁用 ping。
```
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all 
```

（3）永久禁用 ping。在配置文件 /etc/sysctl.conf 中增加如下一行。修改完成后执行sysctl -p使新配置生效
```
net.ipv4.icmp_echo_ignore_all=1          # 1 表示禁止
```

（4）永久开启 ping。在配置文件 /etc/sysctl.conf 中增加如下一行。修改完成后执行 sysctl -p 使新配置生效。
```
net.ipv4.icmp_echo_ignore_all=0          # 0 表示允许
```

---
## 参考文献
[ping(8)  - Linux manual page - man7.org](http://www.man7.org/linux/man-pages/man8/ping.8.html)

[ping命令详解 - CSDN](https://blog.csdn.net/u011857683/article/details/83662550)

[【Linux】一步一步学Linux——ping命令(150) - CSDN](https://blog.csdn.net/dengjin20104042056/article/details/99709270)

<Vssue title="ping" />