## 1.命令简介

mii-tool（media-independent interface tool）查看、操作媒体无关接口的状态。

mii-tool 用于检查或设置网络接口的媒体独立接口（MII）单元状态。大多数快速以太网适配器使用 MII 来自动协商链路速度和双工设置。

大多数智能网络设备使用自动协商协议来传达它们支持的媒体技术，然后选择最快的相互支持的媒体技术。 -A 或 --advertise 选项可用于告诉 MII 仅通告其功能的一个子集。一些被动设备，例如单速集线器，无法自动协商。 为了处理此类设备，MII 协议还允许通过简单地检测 10baseT 或 100baseT 链接节拍来建立链接。 -F 或 --force 选项可用于强制 MII 在一种模式下运行，而不是自动协商。

## 2.命令格式
```shell
mii-tool [-v, --verbose] [-V, --version] [-R, --reset] [-r, --restart]
         [-w, --watch] [-l, --log] [-A, --advertise=media,...]
         [-F, --force=media] [-p, --phy=addr] interface ...
```

## 3.选项说明
```shell
-v, --verbose
  显示更详细的 MII 状态信息。
-V, --version
  显示版本信息。
-R, --reset
  将 MII 重置为默认配置。
-r, --restart
  重启自动协商模式
-w, --watch
  查看网络接口连接的状态变化。
-l, --log
  与-w一起使用，在系统日志中记录链路状态变化，而不是在标准输出中打印。
-A, --advertise=media,...
  启用并重新启动自动协商，只发布指定的媒体技术。多个技术之间应该用逗号分隔。有效介质为 100baseT4、100baseTx-FD、100baseTx-HD、10baseT-FD和10baseT-HD。
-F, --force=media
  禁用自动协商，强制 MII 进行 100baseTx-FD、100baseTx-HD、10baseT-FD 或 10baseT-HD 操作。
-p, --phy=addr
  用值 addr 覆盖内核提供的 MII 地址。
```
注意，-A 和 -F 选项是互斥的。

## 4.常用示例

（1）查看指定网卡状态。

```shell
mii-tool ens33
ens33: negotiated 1000baseT-FD flow-control, link ok
```

（2）查看网络接口的协商状态。
```shell
mii-tool -v ens33
ens33: negotiated 1000baseT-FD flow-control, link ok
  product info: Yukon 88E1011 rev 3
  basic mode:   autonegotiation enabled
  basic status: autonegotiation complete, link ok
  capabilities: 1000baseT-FD 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
  advertising:  1000baseT-FD 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
  link partner: 1000baseT-HD 1000baseT-FD 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
```

（3）网络接口 eth0 禁用自动协商，改为 1000Mb/s 全双工的模式。

```shell
mii-tool ens33 -F 1000baseTx-FD
```

全双工：允许同时收包、发包，该模式在网卡连接交换机时启用。
半双工：在同一时刻，只能收包或发包，该模式在网卡连接集线器时启用。
自协商：启用时根据所连接设备，由网卡自行设定传输模式为全双工或半双工。

（4）重启自动协商模式。

```shell
mii-tool -r ens33
```

（5）显示版本信息。

```shell
mii-tool -V
net-tools 2.10-alpha
David Hinds based on Donald Becker's mii-diag
```

---
## 参考文献
[mii-tool(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/mii-tool.8.html)

<Vssue title="mii-tool" />