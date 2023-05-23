## 1.命令简介
tracepath 命令用来追踪并显示报文到达目的主机所经过的路由信息，能够发现路由中的 MTU 值。

tracepath 使用 UDP 端口或一些随机端口。它类似于 traceroute(8)。但是，它不需要 root 权限，也没有花哨的选项。

## 2.命令格式
```shell
tracepath [-4] [-6] [-n] [-b] [-l pktlen] [-m max_hops] [-p port] [-V] {destination}
```

## 3.选项说明
```
-4
	仅使用IPv4。
-6
	仅使用IPv6。
-n
	以数字形式只显示 IP 地址。
-b
	同时显示 IP 地址和主机名。
-l <pktlen>
	设置初始化的数据包长度，IPv4 默认为 65535，IPv6 默认为 128000。
-m <max_hops>
	设置最大 TTL 值，默认为 30。
-p <port>
	设置要使用的初始目标端口。
-V
	打印版本并退出。
```

## 4.常用示例

（1）追踪到达域名的主机路由信息。

```shell
www.baidu.com
 1?: [LOCALHOST]                      pmtu 1500
 1:  _gateway                                              0.804ms 
 1:  _gateway                                              0.654ms 
 2:  10.254.245.1                                          1.300ms 
 3:  10.240.101.5                                          0.643ms 
 4:  10.240.100.1                                          0.918ms 
 5:  116.7.231.121                                         6.185ms 
 6:  21.186.37.59.broad.dg.gd.dynamic.163data.com.cn       9.523ms 
 7:  no reply
 8:  119.145.47.73                                         2.556ms 
 9:  113.96.5.38                                           7.449ms 
10:  106.96.135.219.broad.fs.gd.dynamic.163data.com.cn     6.961ms 
11:  14.29.121.202                                         6.252ms
12:  no reply
13:  no reply
14:  no reply
...
```

（2）追踪到达域名的主机路由信息（同时显示 IP 地址与主机名）。

```shell
tracepath -b www.baidu.com
 1?: [LOCALHOST]                      pmtu 1500
 1:  _gateway (10.250.8.1)                                 0.740ms 
 1:  _gateway (10.250.8.1)                                 0.764ms 
 2:  10.254.245.1 (10.254.245.1)                           1.137ms 
 3:  10.240.101.5 (10.240.101.5)                           1.091ms 
 4:  10.240.100.1 (10.240.100.1)                           1.594ms 
 5:  116.7.231.121 (116.7.231.121)                         3.834ms 
 6:  17.186.37.59.broad.dg.gd.dynamic.163data.com.cn (59.37.186.17)   3.900ms 
 7:  no reply
 8:  202.105.106.49 (202.105.106.49)                       2.845ms 
 9:  113.96.5.102 (113.96.5.102)                          10.497ms 
10:  106.96.135.219.broad.fs.gd.dynamic.163data.com.cn (219.135.96.106)   7.663ms 
11:  14.215.32.118 (14.215.32.118)                         6.729ms 
12:  no reply
13:  no reply
14:  no reply
...
```

（3）追踪到达域名的主机路由信息（只显示 IP）。
```shell
tracepath -n www.baidu.com
 1?: [LOCALHOST]                      pmtu 1500
 1:  10.250.8.1                                            0.694ms 
 1:  10.250.8.1                                            0.629ms 
 2:  10.254.245.1                                          1.202ms 
 3:  10.240.101.5                                          0.645ms 
 4:  10.240.100.1                                          1.324ms 
 5:  116.7.231.121                                         7.041ms 
 6:  59.37.186.21                                          2.517ms 
 7:  59.37.176.117                                         2.032ms asymm  6 
 8:  59.38.107.177                                         3.364ms 
 9:  113.96.5.102                                          8.539ms 
10:  219.135.96.106                                       11.437ms 
11:  14.215.32.114                                         7.626ms 
12:  no reply
13:  no reply
14:  no reply
...
```

---
## 参考文献
[tracepath(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/tracepath.8.html)

<Vssue title="tracepath" />