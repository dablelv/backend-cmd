## 1.命令简介
dig（domain information groper）是域名查询工具。

dig 是一个灵活的 DNS 查询工具，它会打印出 DNS 域名服务器的回应，主要用来从 DNS 域名服务器查询主机地址信息。

dig 命令与 nslookup 命令功能基本相同，但是 dig 命令灵活性好、易用、输出清晰。

## 2.命令格式
```shell
dig [@server] [-b address] [-c class] [-f filename] [-k filename] [-m] [-p port#] [-q name] [-t type] [-x addr] [-y [hmac:]name:key] [-4] [-6] [name] [type] [class] [queryopt...]

dig [-h]

dig [global-queryopt...] [query...]
```

## 3.简单用法
典型的 dig 调用格式如下：
```shell
dig [@server] name type
```
其中 server 是域名服务器的名称或 IP 地址。这可以是以点分十进制表示的 IPv4 地址，也可以是以冒号分隔的 IPv6 地址。当提供的服务器参数是主机名时，dig 会在查询该域名服务器之前解析该名称。

如果未提供 server 参数，dig 会查找 /etc/resolv.conf；如果在那里找到一个地址，它将查询该地址的名称服务器。如果使用了 -4 或 -6 选项，则只尝试相应传输的地址。如果没有找到可用的地址，dig 将向本地主机发送查询。将显示来自名称服务器的响应。

name 为要查找的资源记录的名称。

type 指示所需的查询类型 ANY、A、MX、SIG 等。类型可以是任何有效的查询类型。如果没有提供类型参数，dig 将查找 A 记录。

## 4.选项说明
### 4.1 普通选项
```
@
	指定进行域名解析的域名服务器。
-b <address>[#<port>]
	使用指定的本机 IP 地址向域名服务器发送域名查询请求。
-c <class>
	缺省查询类（IN for internet）由选项 -c 重设。class 能够是任何合法类，比如查询 Hesiod 记录的 HS 类或查询 CHAOSNET 记录的 CH 类。
-f <file>
	指定 dig 以批处理的方式运行，文件中保存着需要批处理查询的 DNS 任务信息。
-k <keyfile>
	要签署由 dig 发送的 DNS 查询连同对他们使用事务签名（TSIG）的响应，用选项 -k 指定 TSIG 密钥文档。
-p <port>
	指定域名服务器所使用端口号。
-t <type>
	指定要查询的 DNS 数据类型（默认为 A）。
-x <addr>
	执行逆向域名查询。
-4
	使用 ipv4（默认）
-6
	使用 ipv6。
-h
	显示命令帮助信息。
-y [hmac:]name:key
	您能够通过命令行上的 -y 选项指定 TSIG 密钥；name 是 TSIG 密码的名称，key 是实际的密码。密码是 64 位加密字符串，通常由 dnssec-keygen（8）生成。当在多用户系统上使用选项 -y 时应该谨慎，因为密码在 ps(1) 的输出或 Shell 的历史文档中可能是可见的。当同时使用 dig 和 TSCG 认证时，被查询的名称服务器需要知道密码和解码规则。在 BIND 中，通过提供正确的密码和 named.conf 中的服务器声明实现。
```
### 4.2 查询选项
dig 提供查询选项号，他影响搜索方式和结果显示。一些在查询请求报头配置或复位标志位，一部分决定显示哪些回复信息，其他的确定超时和重试策略。每个查询选项被带前缀（+）的关键字标识。一些关键字配置或复位一个选项。通常前缀是求反关键字含义的字符串 no。其他关键字分配各选项的值，比如超时时间间隔。他们的格式形如 +keyword=value。查询选项是：
```
+[no]tcp
    查询域名服务器时使用 [不使用] TCP。缺省行为是使用 UDP，除非是 AXFR 或 IXFR 请求，才使用 TCP 连接。
+[no]vc
    查询名称服务器时使用 [不使用] TCP。+[no]tcp 的备用语法提供了向下兼容。 vc 代表虚电路。
+[no]ignore
    忽略 UDP 响应的中断，而不是用 TCP 重试。缺省情况运行 TCP 重试。
+domain=somename
    设定包含单个域 somename 的搜索列表，似乎被 /etc/resolv.conf 中的域伪指令指定，并且启用搜索列表处理，似乎给定了 +search 选项。
+[no]search
    使用 [不使用] 搜索列表或 resolv.conf 中的域伪指令（假如有的话）定义的搜索列表。缺省情况不使用搜索列表。
+[no]defname
    不建议看作 +[no]search 的同义词。
+[no]aaonly
    该选项不做任何事。他用来提供对配置成未实现解析器标志的 dig 的旧版本的兼容性。
+[no]adflag
    在查询中配置 [不配置] AD（真实数据）位。现在 AD 位只在响应中有标准含义，而查询中没有，但是出于完整性考虑在查询中这种性能能够配置。
+[no]cdflag
    在查询中配置 [不配置] CD（检查禁用）位。他请求服务器不运行响应信息的 DNSSEC 合法性。
+[no]recursive
    转换查询中的 RD（需要递归）位配置。在缺省情况下配置该位，也就是说 dig 正常情形下发送递归查询。当使用查询选项 +nssearch 或 +trace 时，递归自动禁用。
+[no]nssearch
    这个选项被配置时，dig 试图寻找包含待搜名称的网段的权威域名服务器，并显示网段中每台域名服务器的 SOA 记录。
+[no]trace
    转换为待查询名称从根名称服务器开始的代理路径跟踪。缺省情况不使用跟踪。一旦启用跟踪，dig 使用迭代查询解析待查询名称。他将按照从根服务器的参照，显示来自每台使用解析查询的服务器的应答。
+[no]cmd
    设定在输出中显示指出 dig 版本及其所用的查询选项的初始注释。缺省情况下显示注释。
+[no]short
    提供简要答复。缺省值是以冗长格式显示答复信息。
+[no]identify
    当启用 +short 选项时，显示 [或不显示] 提供给答的 IP 地址和端口号。假如请求简短格式应答，缺省情况不显示提供给答的服务器的源地址和端口号。
+[no]comments
    转换输出中的注释行显示。缺省值是显示注释。
+[no]stats
    该查询选项设定显示统计信息：查询进行时，应答的大小等等。缺省显示查询统计信息。
+[no]qr
    显示 [不显示] 发送的查询请求。缺省不显示。
+[no]question
    当返回应答时，显示 [不显示] 查询请求的问题部分。缺省作为注释显示问题部分。
+[no]answer
    显示 [不显示] 应答的回答部分。缺省显示。
+[no]authority
    显示 [不显示] 应答的权限部分。缺省显示。
+[no]additional
    显示 [不显示] 应答的附加部分。缺省显示。
+[no]all
    配置或清除任何显示标志。
+time=T
    为查询配置超时时间为 T 秒。缺省是5秒。假如将 T 配置为小于1的数，则以1秒作为查询超时时间。
+tries=A
    配置向服务器发送 UDP 查询请求的重试次数为 A，代替缺省的 3 次。假如把 A 小于或等于 0，则采用 1 为重试次数。
+ndots=D
    出于完全考虑，配置必须出现在名称 D 的点数。缺省值是使用在 /etc/resolv.conf 中的 ndots 语句定义的，或是 1，假如没有 ndots 语句的话。带更少点数的名称被解释为相对名称，并通过搜索列表中的域或文档 /etc/resolv.conf 中的域伪指令进行搜索。
+bufsize=B
    配置使用 EDNS0 的 UDP 消息缓冲区大小为 B 字节。缓冲区的最大值和最小值分别为 65535 和 0。超出这个范围的值自动舍入到最近的有效值。
+[no]multiline
    以周详的多行格式显示类似 SOA 的记录，并附带可读注释。缺省值是每单个行上显示一条记录，以便于电脑解析 dig 的输出。
```
### 4.3 多条查询
dig 的 BIND 9 支持在命令行上指定多个查询（支持 -f 批处理文档选项的附加功能）。每条查询能够使用自己的标志位、选项和查询选项。

在这种情况下，在上面描述的命令行语法中，每条查询自变量代表一个个别查询。每一条由任意标准选项和标志、待查询名称、可选查询类型和类连同任何适用于该查询的查询选项。

也能够使用对任何查询均有效的查询选项全局集合。全局查询选项必须位于命令行上第一个名称、类、类型、选项、标志和查询选项的元组之前。任何全局查询选项（除了 +[no]cmd 选项）能够被下面的查询特别选项重设。例如：
```shell
dig +qr www.isc.org any -x 127.0.0.1 isc.org ns +noqr
```
显示 dig 如何从命令行出发进行三个查询：一个针对 www.isc.org的任意查询、一个 127.0.0.1 的逆向查询，连同一个 isc.org 的 NS 记录查询。应用了 +qr 的全局查询选项，以便 dig 显示进行每条查询的初始查询。最后那个查询有一个本地查询选项 +noqr，表示 dig 在搜索 isc.org 的 NS 记录时不显示初始查询。

## 5.常用示例
（1）查询对应域名的 IP。
```shell
dig www.baidu.com

; <<>> DiG 9.11.4-P2-RedHat-9.11.4-26.P2.el7_9.9 <<>> www.baidu.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 7891
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.baidu.com.			IN	A

;; ANSWER SECTION:
www.baidu.com.		385	IN	CNAME	www.a.shifen.com.
www.a.shifen.com.	195	IN	A	110.242.68.4
www.a.shifen.com.	195	IN	A	110.242.68.3

;; Query time: 0 msec
;; SERVER: 183.60.83.19#53(183.60.83.19)
;; WHEN: Wed Nov 02 17:37:57 CST 2022
;; MSG SIZE  rcvd: 90
```

（2）对目标 IP 进行反向解析查询。
```shell
dig -x 110.242.68.4

; <<>> DiG 9.11.4-P2-RedHat-9.11.4-26.P2.el7_9.9 <<>> -x 110.242.68.4
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 4828
;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 0

;; QUESTION SECTION:
;4.68.242.110.in-addr.arpa.	IN	PTR

;; AUTHORITY SECTION:
110.in-addr.arpa.	3073	IN	SOA	ns1.apnic.net. read-txt-record-of-zone-first-dns-admin.apnic.net. 3006097985 7200 1800 604800 3600

;; Query time: 0 msec
;; SERVER: 183.60.83.19#53(183.60.83.19)
;; WHEN: Wed Nov 02 18:29:39 CST 2022
;; MSG SIZE  rcvd: 132
```

（3）查询目标域名的 MX 记录。
```shell
dig -t MX www.baidu.com

; <<>> DiG 9.11.4-P2-RedHat-9.11.4-26.P2.el7_9.9 <<>> -t MX www.baidu.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 45775
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.baidu.com.			IN	MX

;; ANSWER SECTION:
www.baidu.com.		50	IN	CNAME	www.a.shifen.com.
www.a.shifen.com.	12	IN	CNAME	www.wshifen.com.

;; Query time: 185 msec
;; SERVER: 183.60.83.19#53(183.60.83.19)
;; WHEN: Wed Nov 02 18:39:09 CST 2022
;; MSG SIZE  rcvd: 84
```
（4）查询目标域名的 A 记录。
```shell
dig www.baidu.com A

; <<>> DiG 9.11.4-P2-RedHat-9.11.4-26.P2.el7_9.9 <<>> A www.baidu.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 22145
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.baidu.com.			IN	A

;; ANSWER SECTION:
www.baidu.com.		230	IN	CNAME	www.a.shifen.com.
www.a.shifen.com.	60	IN	A	220.181.38.150
www.a.shifen.com.	60	IN	A	220.181.38.149

;; Query time: 0 msec
;; SERVER: 183.60.83.19#53(183.60.83.19)
;; WHEN: Wed Nov 02 18:41:59 CST 2022
;; MSG SIZE  rcvd: 90
```
（5）需要快速响应时，+short。
```shell
dig www.baidu.com +short
www.a.shifen.com.
110.242.68.4
110.242.68.3
```
（6）查询指定域名的 AAAA 记录。

在现在这种 IPv4 和 IPv6 混用的情况下，你也可以使用 AAAA 的选项查询主机的 IPv6 AAAA 记录。
```shell
dig www.baidu.com AAAA +short
www.a.shifen.com.
```
（7）指定域名服务器进行查询。
```shell
dig @ns1.google.com www.google.com

; <<>> DiG 9.11.4-P2-RedHat-9.11.4-26.P2.el7_9.9 <<>> @ns1.google.com www.google.com
; (2 servers found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 32759
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
;; WARNING: recursion requested but not available

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;www.google.com.			IN	A

;; ANSWER SECTION:
www.google.com.		300	IN	A	172.217.163.36

;; Query time: 1 msec
;; SERVER: 216.239.32.10#53(216.239.32.10)
;; WHEN: Wed Nov 02 19:11:34 CST 2022
;; MSG SIZE  rcvd: 59
```
（8）跟踪 dig 查询的路径。
```shell
dig www.baidu.com +trace

; <<>> DiG 9.11.4-P2-RedHat-9.11.4-26.P2.el7_9.9 <<>> www.baidu.com +trace
;; global options: +cmd
.			145562	IN	NS	g.root-servers.net.
.			145562	IN	NS	h.root-servers.net.
.			145562	IN	NS	i.root-servers.net.
.			145562	IN	NS	j.root-servers.net.
.			145562	IN	NS	k.root-servers.net.
.			145562	IN	NS	l.root-servers.net.
.			145562	IN	NS	m.root-servers.net.
.			145562	IN	NS	a.root-servers.net.
.			145562	IN	NS	b.root-servers.net.
.			145562	IN	NS	c.root-servers.net.
.			145562	IN	NS	d.root-servers.net.
.			145562	IN	NS	e.root-servers.net.
.			145562	IN	NS	f.root-servers.net.
;; Received 228 bytes from 183.60.83.19#53(183.60.83.19) in 0 ms

com.			172800	IN	NS	e.gtld-servers.net.
com.			172800	IN	NS	b.gtld-servers.net.
com.			172800	IN	NS	j.gtld-servers.net.
com.			172800	IN	NS	m.gtld-servers.net.
com.			172800	IN	NS	i.gtld-servers.net.
com.			172800	IN	NS	f.gtld-servers.net.
com.			172800	IN	NS	a.gtld-servers.net.
com.			172800	IN	NS	g.gtld-servers.net.
com.			172800	IN	NS	h.gtld-servers.net.
com.			172800	IN	NS	l.gtld-servers.net.
com.			172800	IN	NS	k.gtld-servers.net.
com.			172800	IN	NS	c.gtld-servers.net.
com.			172800	IN	NS	d.gtld-servers.net.
com.			86400	IN	DS	30909 8 2 E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CF C41A5766
com.			86400	IN	RRSIG	DS 8 1 86400 20221115050000 20221102040000 18733 . a0WoIH6CLYRdzPYa8jxPxxO3rc+dXaMVMNLMDsIm/W/YSZgNMCQhu6Ot RlpcSkaLfBalvyc4UT3NZVcaKKnLtz2EILzPimFu8WpguvaUPRl2VB4T kSac5EZWJ/l2Ql1xP5SNannn8llOrX9VVPzFHX+yvegvd3i4USxRAYFL oA2T/hke5wPXe8NehGKUZ2JiWNJhlUt7lEmUZfzSs7gQVbNnli0553qD QNeSPUcULmegn5VYdkomRCU7A999vCXt4MXU2wqY/uG9HnAI0YYxhagl /QIOfqRGgAHzO6+MIp8Ka39JAdU6Fa/hsxqaT8gaUOcymJl3kKAdmaZp W22uiw==
;; Received 1173 bytes from 198.41.0.4#53(a.root-servers.net) in 175 ms

baidu.com.		172800	IN	NS	ns2.baidu.com.
baidu.com.		172800	IN	NS	ns3.baidu.com.
baidu.com.		172800	IN	NS	ns4.baidu.com.
baidu.com.		172800	IN	NS	ns1.baidu.com.
baidu.com.		172800	IN	NS	ns7.baidu.com.
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN NSEC3 1 1 0 - CK0Q2D6NI4I7EQH8NA30NS61O48UL8G5 NS SOA RRSIG DNSKEY NSEC3PARAM
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN RRSIG NSEC3 8 2 86400 20221107052501 20221031031501 53929 com. SiHIQWlGsgNBM3Z2CkXHdmPDjPKOHq1c4gyn4yH7Jc9rqW1vjsxnTpeT nXnFjczSw5stuVGWq0idhB86WDmrht9t4FvJyjthmJDUY18cqGrVtpjl 6QSze9CoFkcnv78H6o+60wVDifBk65SrRs/+919oeiUHLhKyt2PxXjoK 5e8dvsbVPpU45dtKzFyViCt6mBJDe+Fj2cISnV4xzoPLqQ==
HPVUVSGH5TFIA7CM6SS6SMPOS87OE0CE.com. 86400 IN NSEC3 1 1 0 - HPVV8SARM2LDLRBTVC5EP1CUB1EF7LOP NS DS RRSIG
HPVUVSGH5TFIA7CM6SS6SMPOS87OE0CE.com. 86400 IN RRSIG NSEC3 8 2 86400 20221107064509 20221031043509 53929 com. D/6PuA/gOcevOyQWymXB1QOgmWXtjfJotFC44k7KlThRlWBI9mCjGYNS 5X9r9yH+3fJ/FxamMnwosHNLOLbhq9zaYR1EiDMY/WueNpmn4U4Nn1Ov veeWJg2bTuOrvWqS9WYpLmoXkDery1L0hMAWy1lPXSSAY4MVkMaL3lbV JwIqoEPqUv5gHojjg04+BFaR1QLNhGlYAYq0RkJ8t5Xf9A==
;; Received 849 bytes from 192.5.6.30#53(a.gtld-servers.net) in 228 ms

www.baidu.com.		1200	IN	CNAME	www.a.shifen.com.
;; Received 72 bytes from 36.152.45.193#53(ns3.baidu.com) in 76 ms
```
（9）获取 SOA 记录。
```shell
dig baidu.com +nssearch
SOA dns.baidu.com. sa.baidu.com. 2012145904 300 300 2592000 7200 from server 111.45.3.226 in 49 ms.
SOA dns.baidu.com. sa.baidu.com. 2012145904 300 300 2592000 7200 from server 180.76.76.92 in 52 ms.
SOA dns.baidu.com. sa.baidu.com. 2012145904 300 300 2592000 7200 from server 14.215.178.80 in 52 ms.
SOA dns.baidu.com. sa.baidu.com. 2012145904 300 300 2592000 7200 from server 112.80.248.64 in 70 ms.
SOA dns.baidu.com. sa.baidu.com. 2012145904 300 300 2592000 7200 from server 36.152.45.193 in 73 ms.
SOA dns.baidu.com. sa.baidu.com. 2012145905 300 300 2592000 7200 from server 110.242.68.134 in 77 ms.
SOA dns.baidu.com. sa.baidu.com. 2012145905 300 300 2592000 7200 from server 220.181.33.31 in 83 ms.
```

---
## 参考文献
[dig(1) manual - linux.org](https://www.linux.org/docs/man1/dig.html)

[一步一步学Linux——dig命令(160)](https://blog.csdn.net/dengjin20104042056/article/details/99976430)

<Vssue title="dig" />