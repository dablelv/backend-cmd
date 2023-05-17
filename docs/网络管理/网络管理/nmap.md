## 1.命令简介
nmap（Network Mapper）是一个开源的网络探测和安全扫描程序。

nmap 的设计目标是快速地扫描大型网络，当然用它扫描单个主机也没有问题。nmap 以新颖的方式使用原始 IP 报文来发现网络上有哪些主机，这些主机提供什么服务（应用程序名和版本），这些服务运行在什么操作系统（包括版本信息）， 它们使用什么类型的报文过滤器/防火墙，以及一堆其它功能。虽然 nmap 通常用于安全审核，许多系统管理员和网络管理员也用它来做一些日常工作，比如查看整个网络的信息，管理服务升级计划，以及监视主机和服务的运行。

nmap 输出的是一个被扫描的目标列表，以及每个目标根据不同选项输出的不同补充信息。“interesting ports table”是这些信息中的关键，这张表列出端口号、协议、服务名称和状态，状态可能是 open（开放的），filtered（被过滤的）， closed（关闭的），或者 unfiltered（未被过滤的）。 open 表示目标机器上的应用程序正在该端口监听连接/报文。 filtered 意味着防火墙，过滤器或者其它网络障碍阻止了该端口被访问，nmap 无法得知它的状态是 open 还是 closed。 closed 端口没有应用程序在它上面监听，但是他们随时可能开放。 当端口对 nmap 的探测做出响应，但是 nmap 无法确定它们是关闭还是开放时，这些端口就被认为是 unfiltered。如果 nmap 报告状态组合 open|filtered 和 closed|filtered 时，那说明 nmap 无法确定该端口处于两个状态中的哪一个状态。 当要求进行版本探测时，端口表也可以包含软件的版本信息。当要求进行 IP 协议扫描时 (-sO)，nmap 提供关于所支持的 IP 协议而不是正在监听的端口的信息。

除了“interesting ports table”，nmap 还能提供关于目标的进一步信息，包括反向域名，操作系统猜测，设备类型，和 MAC 地址。

nmap 的常用功能有：
（1）探测一组主机是否在线；
（2）扫描主机端口，嗅探所提供的网络服务；
（3）推断主机所用的操作系统。

## 2.命令格式
```shell
nmap [SCAN_TYPE...] [OPTIONS] {target specification}
```

## 3.选项说明
当 nmap 不带选项运行时，下面的选项概要会被输出。它帮助人们记住最常用的选项，但不能替代本手册其余深入的文档，一些晦涩的选项甚至不在这里。最新的选项概要可以在 https://nmap.org/data/nmap.usage.txt 查看。

### TARGET SPECIFICATION
可以传递主机名、IP地址、网络等。
```shell
-iL <inputfilename>
	从指定文件中读取扫描的目标。在这个文件中要有一个主机或者网络的列表，由空格键、制表键或者回车键作为分割符。如果使用 -iL -，会从标准输入读取
-iR <num hosts>
	随机挑选主机进行扫描
--exclude <host1[,host2][,host3],...>
	排除指定的主机/网络
--excludefile <exclude_file>
	从文件指定文件中读取要排除的主机/网络
```

### HOST DISCOVERY
```shell
-sL
	列表扫描-仅列出要扫描的目标
-sn
	Ping 扫描-禁用端口扫描
-Pn
	将所有主机视为联机--跳过主机发现(No ping)
-sP
	Ping 扫描-仅确定主机是否联机
-PS/PA/PU/PY [PORTLIST]
	TCP SYN/ACK/UDP/SCTP 发现探测到给定端口
-PO[protocol list]
	IP 协议 Ping
-PE/PP/PM
	ICMP 回显、时间戳和网络掩码请求发现探测
-n/-R
	从不进行 DNS 解析/始终解析[默认：有时解析]
--dns-servers <serv1[,serv2],...>
	指定自定义 DNS 服务器
--system-dns
	使用操作系统的 DNS 解析程序
--traceroute
	跟踪每个主机的跃点路径
```

### SCAN TECHNIQUES
```shell
-sS/sT/sA/sW/sM
	TCP SYN/Connect()/ACK/Window/Maimon 扫描
-sN/sF/sX
	TCP Null, FIN 和 Xmas 扫描
--scanflags <flags>
	自定义TCP扫描标志
-sI <zombie host[:probeport]>
	空闲扫描
-sY/sZ
	SCTP INIT/COOKIE-ECHO 扫描
-sO
	IP 协议扫描
-b <FTP relay host>
	FTP 反弹扫描
```

### PORT SPECIFICATION AND SCAN ORDER
```shell
-p <port ranges>
	只扫描指定端口，如 -p22; -p1-65535; -p U:53,111,137,T:21-25,80,139,8080,S:9
--exclude-ports <port ranges>
	从扫描中排除指定的端口
-F
	快速模式-扫描的端口数少于默认扫描
-r
	连续扫描端口-不要随机化
--top-ports <number>
	扫描 <number> 最常见的端口
--port-ratio <ratio>
	以大于给定值的比率扫描 nmap 服务文件中的所有端口，ratio 必须是 0.0 到 1.0 之间
```

### SERVICE/VERSION DETECTION
```shell
-sV
	探测打开的端口以确定服务/版本信息
--version-intensity <level>
	设置版本探针强度（从 0 到 9，缺省为 7）
--version-light
	使用轻度探测强度，等价于 --version-intensity 2。这种模式使版本扫描速度更快，但识别服务的可能性稍低
--version-all
	等价于 --version-intensity 9，确保针对每个端口尝试每个探测器
--version-trace
	显示详细的版本扫描活动（用于调试）
```

### SCRIPT SCAN
```shell
-sC
	等价于 --script=default
--script=<Lua scripts>
	<Lua scripts> 是以逗号分隔的目录、脚本文件或脚本类别
--script-args=<n1=v1,[n2=v2,...]>
	为脚本提供参数
--script-args-file=filename
	在文件中提供NSE脚本参数
--script-trace
	显示发送和接收的所有数据
--script-updatedb
	更新脚本数据库
--script-help=<Lua scripts>
	显示有关脚本的帮助
```

### OS DETECTION
```shell
-O
	启用操作系统检测
--osscan-limit
	不符合此条件的主机不尝试操作系统检测，这可以节省大量的时间
--osscan-guess
	更积极地猜测操作系统
```

### TIMING AND PERFORMANCE
时间值 <time> 默认以秒为单位，或附加时间单位 ms（秒），s（秒），m（分钟）或 h（小时），如 30m。
```shell
-T<0-5>
	设置计时模板（越高速度越快）
--min-hostgroup/max-hostgroup <size>
	并行主机扫描组大小
--min-parallelism/max-parallelism <numprobes>
	探测并行化
--min-rtt-timeout/max-rtt-timeout/initial-rtt-timeout <time>
	指定探测往返时间
--max-retries <tries>
	Caps 端口扫描探头重新传输的次数
--host-timeout <time>
	设置主基探测超时时间
--scan-delay/--max-scan-delay <time>
	调整探针之间的延迟
--min-rate <number>
	发送数据包的速度不低于每秒 <number>
--max-rate <number>
	发送数据包的速度不高于每秒 <number>
```

### FIREWALL/IDS EVASION AND SPOOFING
```shell
-f; --mtu <val>
	-f 选项使扫描请求（包括主机发现扫描）使用微小的碎片化 IP 数据包，可以用过选项 --mtu 指定 MTU
-D <decoy1,decoy2[,ME],...>
	用诱饵掩盖扫描
-S <IP_Address>
	欺骗源地址
-e <iface>
	使用指定的接口
-g/--source-port <portnum>
	使用给定的端口号
--proxies <url1,[url2],...>
	通过HTTP/SOCKS4代理中继连接
--data <hex string>
	将自定义有效负载附加到发送的数据包
--data-string <string>
	向发送的数据包附加自定义ASCII字符串
--data-length <num>
	向发送的数据包附加随机数据
--ip-options <options>
	使用指定的 IP 选项发送数据包
--ttl <val>
	设置 IP 生存时间字段
--spoof-mac <mac address/prefix/vendor name>
	要求 mmap 为其发送的所有原始以太网帧使用给定的 MAC 地址
--badsum
	使用伪 TCP/UDP/SCTP 校验和发送数据包
```

### OUTPUT
```shell
-oN/-oX/-oS/-oG <file>
	分别以普通、XML、s|<cript kIddi3 和 grepable 格式输出扫描到给定文件名
-oA <basename>
	同时以三种主要格式输出
-v
	增加详细程度（使用 -vv 或更多以获得更大效果）
-d
	提高调试级别（使用 -dd 或更多以获得更大的效果）
--reason
	显示端口处于特定状态的原因
--open
	仅显示打开（或可能打开）的端口
--packet-trace
	显示发送和接收的所有数据包
--iflist
	打印主机接口和路由（用于调试）
--append-output
	附加到指定的输出文件而不是覆盖
--resume <filename>
	恢复中止的扫描
--noninteractive
	禁用运行时交互
--stylesheet <path/URL>
	使用 XSL 样式表查看 XML 输出或将其转换为 HTML
--webxml
	从 Nmap.Org 加载样式表，等价于 --stylesheet https://nmap.org/svn/docs/nmap.xsl
--no-stylesheet
	防止 nmap 将任何 XSL 样式表与其 XML 输出关联
```

### MISC
```shell
-6
	启用 IPv6 扫描
-A
	启用操作系统检测、版本检测、脚本扫描和跟踪路由
--datadir <dirname>
	指定自定义 nmap 数据文件位置
--send-eth/--send-ip
	使用原始以太网帧或IP数据包发送
--privileged
	假设用户具有完全特权
--unprivileged
	假设用户缺少原始套接字权限
-V
	打印版本号
-h
	打印帮助摘要信息
```

## 4.常用示例
（1）扫描远程主机的指定端口来判断是否开放。
```shell
nmap IP -p PORT

# 示例
nmap 14.215.177.88 -p 8000

Starting Nmap 6.40 ( http://nmap.org ) at 2021-11-01 15:55 CST
Nmap scan report for 14.215.177.38
Host is up (0.00027s latency).
PORT     STATE SERVICE
8000/tcp open  unknown

Nmap done: 1 IP address (1 host up) scanned in 0.29 seconds
```
输出中 open 表示指定端口正在被监听。

（2）扫描指定 IP 或域名下开放的端口，可以很方便地发现目标端口的开放情况及主机在线情况。
```shell
nmap docs.nvidia.com

Starting Nmap 6.40 ( http://nmap.org ) at 2021-11-01 16:00 CST
Nmap scan report for docs.nvidia.com (129.227.48.130)
Host is up (0.00021s latency).
Other addresses for docs.nvidia.com (not scanned): 129.227.48.131 129.227.48.132 129.227.48.133 129.227.6.189 129.227.6.190 192.254.94.202 192.254.94.203 129.227.114.197 129.227.114.198
PORT      STATE SERVICE
1/tcp     open  tcpmux
3/tcp     open  compressnet
...
63331/tcp open  unknown
64623/tcp open  unknown
64680/tcp open  unknown
65000/tcp open  unknown
65129/tcp open  unknown
65389/tcp open  unknown

Map done: 1 IP address (1 host up) scanned in 9.53 seconds
```

(3) Ping 扫描。

Ping 扫描只进行 ping，然后显示出在线的主机。使用该选项扫描可以轻易获取目标信息而不会被轻易发现。

在默认情况下，nmap 会发送一个 ICMP 回声请求和一个 TCP 报文到目标端口。Ping 扫描的优点是不会返回太多的信息影响对结果的分析，并且扫描方式高效。
```shell
nmap -sP 192.168.0.0/24

Starting Nmap 6.40 ( http://nmap.org ) at 2021-11-04 23:19 CST
Nmap scan report for 192.168.0.0
Host is up (0.023s latency).
Nmap scan report for 192.168.0.1
Host is up (0.0056s latency).
Nmap scan report for 192.168.0.2
....
Nmap scan report for 192.168.0.255
Host is up (0.023s latency).
Nmap done: 256 IP addresses (256 hosts up) scanned in 1.99 seconds
```

---
## 参考文献
[nmap(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/nmap.1.html)

[Nmap参考指南(Man Page)](https://nmap.org/man/zh)

[CSDN.nmap命令详解](https://blog.csdn.net/yalecaltech/article/details/70943898)

[简书.Nmap命令详解](https://www.jianshu.com/p/4030c99fcaee)
