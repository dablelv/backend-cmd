## 1.命令简介
iptables/ip6tables 是 IPv4/IPv6 包过滤和 NAT 的管理工具。

iptables/ip6tables 命令是 Linux 上常用的防火墙软件，是 [netfilter](https://www.netfilter.org/) 项目的一部分。可以直接配置，也可以通过许多前端和图形界面配置。

iptables/ip6tables 均是 xtables-multi 的软链。

## 2.命令格式
```shell
iptables [-t table] {-A|-C|-D} chain rule-specification

ip6tables [-t table] {-A|-C|-D} chain rule-specification

iptables [-t table] -I chain [rulenum] rule-specification

iptables [-t table] -R chain rulenum rule-specification

iptables [-t table] -D chain rulenum

iptables [-t table] -S [chain [rulenum]]

iptables [-t table] {-F|-L|-Z} [chain [rulenum]] [options...]

iptables [-t table] -N chain

iptables [-t table] -X [chain]

iptables [-t table] -P chain target

iptables [-t table] -E old-chain-name new-chain-name

rule-specification = [matches...] [target]

match = -m matchname [per-match-options]

target = -j targetname [per-target-options]
```
表名包括：
raw：高级功能，如：网址过滤。
mangle：数据包修改（QOS），用于实现服务质量。
nat：地址转换，用于网关路由器。
filter：包过滤，用于防火墙规则。
security：该表用于 MAC (Mandatory Access Control)组网规则，例如由 SECMARK 和 CONNSECMARK 目标启用的规则。

规则链名包括：
INPUT链：处理输入数据包。
OUTPUT链：处理输出数据包。
PORWARD链：处理转发数据包。
PREROUTING链：用于目标地址转换（DNAT）。
POSTOUTING链：用于源地址转换（SNAT）。

动作包括：
ACCEPT：接收数据包。
DROP：丢弃数据包。
REDIRECT：重定向、映射、透明代理。
SNAT：源地址转换。
DNAT：目标地址转换。
MASQUERADE：IP 伪装（NAT），用于 ADSL。
LOG：日志记录。

## 3.选项说明

```
-t, --table <table>
	指定要操纵的表。
```

命令选项。

这些选项指定要执行的所需操作。这些在命令行上只能同时指定一个除非另有说明。对于长版本的命令和选项名称，可以只要能够和其他选项区别开来即可。
```
-A, --append <chain> <rule-specification>
	向规则链中添加条目。
-D, --delete <chain> <rule-specification>
-D, --delete <chain> <rulenum>
	从规则链中删除条目。
-I, --insert <chain> [rulenum] <rule-specification>
	向规则链中插入条目；
-R, --replace <chain> <rulenum> <rule-specification>
	替换规则链中的条目。
-L, --list [chain]
	显示规则链中已有的条目。
-F, --flush [chain]
	清除规则链中所有条目。
-Z, --zero [chain [rulenum]]
	清空规则链中的数据包计算器和字节计数器。
-N, --new-chain <chain>
	创建新的用户自定义规则链。
-P, --policy <chain> <target>
	定义规则链中的默认目标。
-X, --delete-chain [chain]
	删除用户定义的链。如果未指定链，则尝试删除表中的每个非内置链。
-h
	显示帮助信息；
```

参数型选项。

下面的参数组成了规则规范(在添加、删除、插入、替换和追加命令中使用)。
```
-p, --protocol <protocol>
	指定要匹配的数据包协议类型；
[!] -s, --source <address>[/<mask>][,...]
	指定要匹配的数据包源 IP 地址。
[!] -d, --destination <address>[/<mask>][,...]
	指定要匹配的数据包目的 IP 地址。
-m, --match <match>
	指定要使用的匹配项，即测试特定属性的扩展模块。匹配集构成了调用目标的条件。匹配将按照命令行中指定的顺序从前到后计算，并以短路方式工作，即如果一个扩展产生 false，则计算将停止。
-j, --jump <target>
	指定要跳转的目标。目标可以是用户定义的链(除了这个规则所在的链)，可以是一个特殊的内置目标，它可以立即决定数据包的命运，也可以是一个扩展。如果在规则中省略了该选项(并且没有使用-g)，那么匹配该规则将对数据包的命运没有影响，但规则上的计数器将增加。
-i, --in-interface <name>
	指定数据包进入本机的网络接口。
-o, --out-interface <name>
	指定数据包要离开本机所使用的网络接口。
-c, --set-counters <packets> <bytes>
	这使得管理员可以初始化数据包和规则的字节计数器（在 INSERT, APPEND，REPLACE 操作时）。
```

其他选项。

```shell
-v, --verbose
	详细的输出。如该选项使 list 命令显示接口名称、规则选项(如果有的话)和 TOS 掩码。
-n, --numeric
	数字输出。IP地址和端口号将以数字格式打印。默认情况下，程序将尝试将它们显示为主机名、网络名或服务(只要适用)。
--line-numbers
	列出规则时，在每条规则的开头添加行号，对应于该规则在链中的位置。
```
## 4.常用示例

（1）清除已有 iptables 规则。
```shell
iptables -F
```

（2）删除指定的用户自定义链。
```shell
iptables -X
```
删除指定的用户自定义链。这个链必须没有被引用，如果被引用，在删除之前你必须删除或者替换与之有关的规则。如果没有给出参数，这条命令将试着删除每个非内建的链。


（3）把所有链的包及字节的计数器清空。
```shell
iptables -Z
```

（4）允许本地回环接口，即运行本机访问本机。
```shell
iptables -A INPUT -s 127.0.0.1 -d 127.0.0.1 -j ACCEPT
```

（5）允许已建立的或相关链的通行。
```
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```

（6）允许所有本机向外的访问。
```shell
iptables -A OUTPUT -j ACCEPT
```

（7）允许访问 22 端口。
```shell
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

（8）禁止其他未允许的规则访问。
```
iptables -A INPUT -j REJECT
```

（9）禁止其他未允许的规则转发。
```shell
iptables -A FORWARD -j REJECT
```

（10）屏蔽单个 IP 数据包。
```shell
iptables -I INPUT -s 172.16.0.88 -j DROP
```

（11）封整个段即从 172.16.0.1 到 172.16.0.254 的数据包。
```shell
iptables -I INPUT -s 172.16.0.0/24 -j DROP
```

（12）查看已添加的 iptables 规则。
```shell
iptables -L -n -v
Chain INPUT (policy ACCEPT 8385K packets, 1772M bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain OUTPUT (policy ACCEPT 8434K packets, 1290M bytes)
 pkts bytes target     prot opt in     out     source               destination
```

（13）删除已添加的 iptables 规则。

将所有 iptables 以序号标记显示。
```shell
iptables -L -n --line-numbers
```

比如要删除 INPUT 里序号为 9 的规则。
```shell
iptables -D INPUT 9
```

（14）清空 filter 表 INPUT 所有规则。
```shell
iptables -t filter -F INPUT
```

（15）设置 filter 表 INPUT 默认规则是 DROP。
```shell
iptables -t filter -P INPUT DROP
```

---
## 参考文献
[iptables(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/iptables.8.html)
