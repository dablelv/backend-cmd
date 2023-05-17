## 1.命令简介
nstat（network statistics）是一个简单的监视内核的 SNMP 计数器和网络接口状态的实用工具 。

nstat 可以使用通配符指定一个或多个要过滤的内核的 SNMP（Simple Network Management Protocol） 计数器名称。

## 2.命令格式
```
nstat [ -h?vVzrnasd:t:jp ] [ PATTERN [ PATTERN ] ]
```

## 3.选项说明
```shell
-z, --zeros
	显示 0 计数器。
-h, --help
	显示帮助信息
-V, --version
	显示指令版本信息
-r, --reset
	清零历史统计。
-n, --nooutput
	不显示任何内容，仅更新历史。
-a, --ignore
	显示计数器的绝对值。默认值是计算自上次使用以来的增量。
-s, --noupdate
	不更新历史。因此，下次您将看到计数器也包括该测量时刻累积的值。
-d, --scan <INTERVAL>
	以守护进程的方式运行本指令。
-j, --json
	以 JSON 格式打印结果。
-p, --pretty
	当与 -j 结合使用时，美化输出。
-d, --scan <INTERVAL>
	运行在 daemon 模式收集统计信息。<INTERVAL>是测量之间的间隔，以秒为单位。
-t, --interval <INTERVAL>
	平均利率的时间间隔。缺省值为 60 秒。
```

## 4.常用示例

（1）查询内核的 SNMP 计数器和网络接口状态。

```shell
nstat
#kernel
IpInReceives                    9218461            0.0
IpInDelivers                    9210383            0.0
IpOutRequests                   9323171            0.0
IpOutNoRoutes                   9                  0.0
IpReasmReqds                    16134              0.0
IpReasmOKs                      8067               0.0
IpFragOKs                       8067               0.0
IpFragCreates                   16134              0.0
IcmpInMsgs                      1317355            0.0
IcmpInErrors                    49                 0.0
IcmpInCsumErrors                8                  0.0
IcmpInDestUnreachs              100                0.0
...
```

（2）以 JSON 格式打印结果。

```shell
nstat -j
{"kernel":{"IpInReceives":329,"IpInDelivers":329,"IpOutRequests":333,"IcmpInMsgs":59,"IcmpInEchos":59,"IcmpOutMsgs":59,"IcmpOutEchoReps":59,"IcmpMsgInType8":59,"IcmpMsgOutType0":59,"TcpActiveOpens":40,"TcpInSegs":265,"TcpOutSegs":272,"UdpInDatagrams":4,"UdpOutDatagrams":4,"TcpExtTW":1,"TcpExtDelayedACKs":1,"TcpExtDelayedACKLost":1,"TcpExtTCPHPHits":39,"TcpExtTCPPureAcks":122,"TcpExtTCPHPAcks":11,"TcpExtTCPDSACKOldSent":1,"TcpExtTCPRcvCoalesce":39,"TcpExtTCPOFOQueue":1,"TcpExtTCPOrigDataSent":139,"IpExtInMcastPkts":1,"IpExtInOctets":23030,"IpExtOutOctets":56410,"IpExtInMcastOctets":36,"IpExtInNoECTPkts":329}}
```

（3）不更新历史。

```shell
nstat -s
#kernel
IpInReceives                    272                0.0
IpInDelivers                    272                0.0
IpOutRequests                   271                0.0
IcmpInMsgs                      48                 0.0
IcmpInEchos                     48                 0.0
IcmpOutMsgs                     48                 0.0
IcmpOutEchoReps                 48                 0.0
...
```

（4）显示计数器的绝对值。
```shell
nstat  -a
#kernel
IpInReceives                    9219500            0.0
IpInDelivers                    9211422            0.0
IpOutRequests                   9324222            0.0
IpOutNoRoutes                   9                  0.0
IpReasmReqds                    16134              0.0
IpReasmOKs                      8067               0.0
IpFragOKs                       8067               0.0
IpFragCreates                   16134              0.0
IcmpInMsgs                      1317546            0.0
...
```

（5）清零历史统计。
```shell
nstat -r
IpInReceives                    9220432            0.0
IpInDelivers                    9212354            0.0
IpOutRequests                   9325173            0.0
IpOutNoRoutes                   9                  0.0
IpReasmReqds                    16134              0.0
IpReasmOKs                      8067               0.0
IpFragOKs                       8067               0.0
IpFragCreates                   16134              0.0
IcmpInMsgs                      1317706            0.0
...
```

（6）指定计数器名称查询。

```shell
nstat IpInReceives
#kernel
IpInReceives                    875                0.0
```

---

## 参考文献
[nstat(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/nstat.8.html)
