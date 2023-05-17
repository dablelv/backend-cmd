## 1.命令简介
arping 向邻居主机发送 ARP 请求。

arping 命令作用是使用 ARP 数据包，通过 ping 命令检查来测试网络。arping 能够测试一个 IP 地址是否是在网络上已经被使用，并能够获取更多设备信息。功能类似于 ping。

由于 arping 基于 ARP 广播机制，所以 arping 命令只能测试同一网段或子网的网络主机的连通性，ping 命令则是基于 ICMP 协议，是可以路由的，所以使用 ping 命令可以测试任意网段的主机网络连通性。

## 2.命令格式
```shell
arping [-AbDfhqUV] [-c <count>] [-w <deadline>] [-i <interval>] [-s <source>] [-I <interface>] {destination}
```

## 3.选项说明
```
-A, 
	更新邻近主机的ARP缓存(使用ARP应答数据包代替ARP请求数据包)。
-b
	仅发送MAC级广播
-c <count>
	发送指定个数ARP请求数据包后停止
-D
	重复地址检测模式（DAD）
-f
	在第一个回复确认目标存活后退出命令
-h
	打印帮助手册并退出
-I <interface>
	指定ARP请求报文的网络接口
-q
	安静模式。不显示任何信息
-s <source>
	指定发送ARP请求数据包的源IP地址
-U 
	更新邻近主机的ARP缓存。
-V
	打印程序版本并退出。
-w <deadline>
	指定 arping 退出之前的超时（以秒为单位），无论发送或接收了多少数据包。在这种情况下，arping 不会在发送 count 个数据包后停止，它要么等待截止日期到期，要么等待 count 个探测得到响应。
-i <interval>
	指定数据包之间的间隔（以秒为单位）。
```

## 4.常用示例

（1）测试目标主机的存活状态。

```shell
arping -I ens33 -f 172.16.0.2
ARPING 172.16.0.2 from 172.16.0.76 ens33
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  133.008ms
Sent 1 probes (1 broadcast(s))
Received 1 response(s)
```
当收到第一个包就自动退出。

（2）向目标主机发送3次（指定次数）ARP 请求报文。

```shell
arping -I ens33 -c 3 172.16.0.2
ARPING 172.16.0.2 from 172.16.0.76 ens33
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  4.507ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  3.907ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  3.861ms
Sent 3 probes (1 broadcast(s))
Received 3 response(s)
```

（3）向指定的IP发送ARP请求。

```shell
arping -I ens33 172.16.0.2
ARPING 172.16.0.2 from 172.16.0.76 ens33
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  3.922ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  4.108ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  3.777ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  4.554ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  3.992ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  3.739ms
```

（4）测试 IP 是否被占用。

```shell
arping -I ens33 -w 3 -D 172.16.0.2
ARPING 172.16.0.2 from 0.0.0.0 ens33
Sent 4 probes (4 broadcast(s))
Received 0 response(s)
```

（5）指定源 IP。

```shell
arping  -I ens33 -s 172.16.0.76 172.16.0.2
ARPING 172.16.0.2 from 172.16.0.76 ens33
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  3.871ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  3.769ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  4.919ms
Unicast reply from 172.16.0.2 [38:4C:4F:89:CB:A2]  4.290ms
```

（6）向目标主机发送 3 次（指定次数）ARP 请求报文，安静模式。

```shell
arping -I ens33 -q -c 3 172.16.0.2
```

---
## 参考文献
[arping(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/arping.8.html)
