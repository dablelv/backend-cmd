## 1.命令简介

arpd 用户空间的 arp 守护进程。

arpd 守护进程收集免费 ARP 信息，将其保存在本地磁盘上，并根据需要将其提供给内核，以避免由于内核 ARP 缓存的大小限制而导致的冗余广播。

## 2.命令格式
```shell
arpd [ -lkh? ] [ -a N ] [ -b dbase ] [ -B number ] [ -f file ] [-p interval ] [ -n time ] [ -R rate ] [ <INTERFACES> ]
```

## 3.选项说明
```
-h -?
  打印帮助。
-l
  将 arpd 数据库输出到标准输出设备显示并退出。显示信息包括接口索引、接口IP地址和接口 MAC 地址三列。还显示了已死亡主机的负条目，在这种情况下，MAC 地址被单词 FAILED 后跟冒号和证明主机已死亡的最近时间所取代。
-f <FILE>
  指定读取和加载 arpd 数据库的文本文件，文件的格式与“-l”输出信息类似。
-b <DATABASE>
  指定 arpd 数据库文件，默认位置为 /var/lib/arpd.db。
-a <NUMBER>
  通过该选项，arpd 不仅被动监听接口上的ARP报文，还会发送广播查询。<NUMBER> 为目标被认为死掉前查询的次数。
-k
  禁止通过内核发送广播查询。
-n <TIME>
  设定缓冲失效时间。
-p <TIME>
  轮询尝试到内核 ARP 表之间等待的时间(以秒为单位)。TIME 可以是一个浮点数。缺省值为 30。
-R <RATE>
  arpd 发送的最大稳定速率(包/秒)，缺省值为 1。
-B <NUMBER>
  arpd 连续发送的广播数，缺省值为 3。与 -R 选项一起使用，可确保在任何时间 T 的间隔内广播的 ARP 查询的数量不超过 B+R*T。
<INTERFACES>
  是要监视的网络接口的名称列表。如果没有给出接口，arpd 将监视所有接口。在这种情况下，arpd 不调整 sysctl 参数，假设用户在 arpd 启动后自己会这样做。
```

## 4.常用示例

（1）启动 arpd 进程。
```shell
arpd -b /var/tmp/arpd.db
```

（2）将 arp 数据库输出到标准输出设备显示并退出。
```shell
arpd -l -b /var/tmp/arpd.db
```

（3）禁止通过内核发送广播查询。
```shell
arpd -k
```

（4）指定目标被认为死掉前查询的次数。
```shell
arpd -b /var/tmp/arpd.db -a 1
arpd -b /var/tmp/arpd.db -a 1 eth0
```

（5）综合实例。
```shell
arpd -l -b /var/tmp/arpd.db -a 3 -k eth0
#Ifindex IP              MAC
2        169.254.0.15    fe:ee:7f:99:99:19
2        169.254.0.23    fe:ee:7f:99:99:19
2        169.254.0.47    fe:ee:7f:99:99:19
2        169.254.0.55    fe:ee:7f:99:99:19
2        10.0.0.1        fe:ee:7f:99:99:19
2        169.254.0.2     fe:ee:7f:99:99:19
2        169.254.0.4     fe:ee:7f:99:99:19
2        169.254.0.138   fe:ee:7f:99:99:19
2        169.254.128.8   fe:ee:7f:99:99:19
2        169.254.128.12  fe:ee:7f:99:99:19
```
在这种情况下，内核仍会进行单播探测以验证条目，但所有广播活动都被抑制并在 arpd 的授权下进行。

---
## 参考文献
[arpd(8) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/arpd.8.html)

<Vssue title="arpd" />