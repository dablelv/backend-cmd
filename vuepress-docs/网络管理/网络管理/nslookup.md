## 1.命令简介
nslookup（Name Server Lookup）是一种网络管理命令，用于从 DNS 服务器查询域名、IP 或其他 DNS 记录信息。

nslookup 有两种工作模式，交互模式和非交互模式。在交互模式下，用户可以向域名服务器查询各类主机、域名的信息，或者输出域名中的主机列表。在非交互模式下，针对一个主机或域名仅仅获取特定的名称或所需信息。

进入交互模式有两种方式：
（1）不加任何参数执行 nslookup 命令，此时 nslookup 会连接到默认的域名服务器（/etc/resolv.conf 的第一个 DNS 地址）；
（2）第一个参数是连字符（-），第二个参数是域名服务器的主机名或IP，即`nslookup - SERVER|IP`。

其他方式则进入非交互模式，比如`nslookup NAME`查询域名对应的IP。

## 2.命令格式
```shell
nslookup [-OPTION] [NAME | -] [SERVER]
```
NAME 为域名，SERVER 为域名服务器地址。

## 3.选项说明
```shell
-query=TYPE
	设置查询的类型。等同交互命令 set type=VALUE。VALUE 取值见下文。
-timeout=NUMBER
	设置等待响应的超时时间，单位秒。等同交互命令 set timeout=NUMBER。
-debug
	显示更详细的信息。
```

## 4.交互命令
```shell
HOST [SERVER]
	查询域名对应的地址。如果指定 SERVER 则使用指定的域名服务器解析
server DOMAIN
	指定域名服务器
lserver DOMAIN
	改变默认域名服务器
exit
	退出交互模式
set KEYWORD[=VALUE]
	此命令用于更改影响查找的状态信息。有效关键字为：
	all
		打印所有 KEYWORD 当前配置
	class=VALUE
		改变 DNS class，VALUE 可取值 IN(Internet)、CH(Chaos)、HS(Hesiod)和 ANY，默认 IN。DNS class 用于指定信息的协议组
	[no]debug
		在搜索时打开或关闭完整响应数据包和任何中间响应数据包的显示。默认 nodebug，简写 [no]deb
	[no]d2
		打开或关闭调试模式。这将显示有关 nslookup 正在执行的操作的更多信息。默认 nod2
	domain=NAME
		设置搜索列表
	[no]search
		如果查找请求包含至少一个句点但没有以尾随句点结束，则将域搜索列表中的域名追加到请求，直到收到应答。默认 search
	port=VALUE
		修改默认的TCP/UDP域名服务器端口。默认 53
	type=VALUE
		更改查询的类型。可取值 A(A记录)、CNAME(CNAME记录)、NS(域名服务器记录)、MX(邮件交换记录)、PTR(反向记录)等。大小写不敏感，默认 A(Address)
	[no]recurse
		如果域名服务器没有该信息，请告诉它查询其他服务器。默认 recurse，简写 [no]rec
	retry=NUMBER
		设置重试次数
	timeout=NUMBER
		设置等待响应的超时时间，单位秒
	[no]vc
		打开或关闭发送请求到服务器使用虚拟电路。默认 novc
	[no]fail
		如果域名服务器响应 SERVFAIL 或推荐（nofail）或终止查询（fail），尝试下一个名称服务器。默认不尝试(nofail)
```

## 5.常用示例
（1）在非交互模式下正向解析，查询域名信息。
```shell
nslookup baidu.com
Server:		10.123.119.98
Address:	10.123.119.98#53

Non-authoritative answer:
Name:	baidu.com
Address: 39.156.69.79
Name:	baidu.com
Address: 220.181.38.148
```

（2）在交互模式下正向解析，查询域名信息。
```shell
nslookup
> baidu.com
Server:		10.123.119.98
Address:	10.123.119.98#53

Non-authoritative answer:
Name:	baidu.com
Address: 220.181.38.148
Name:	baidu.com
Address: 39.156.69.79
> exit
```
最后一个交互命令 exit 表示退出。

（3）反向解析，通过 IP 查询对应的域名。
```shell
nslookup 209.132.183.105
Server:		10.123.119.98
Address:	10.123.119.98#53

Non-authoritative answer:
105.183.132.209.in-addr.arpa	name = redirect.redhat.com.

Authoritative answers can be found from:
```

（4）查询域名别名。
```shell
nslookup -query=cname www.baidu.com
Server:		10.123.119.98
Address:	10.123.119.98#53

Non-authoritative answer:
www.baidu.com	canonical name = www.a.shifen.com.

Authoritative answers can be found from:
```
不知道为什么，查询域名别名时需要在域名前面加上 www，不然会得到如下结果：
```shell
nslookup -query=cname baidu.com
Server:		10.123.119.98
Address:	10.123.119.98#53

Non-authoritative answer:
*** Can't find baidu.com: No answer

Authoritative answers can be found from:
baidu.com
	origin = dns.baidu.com
	mail addr = sa.baidu.com
	serial = 2012144164
	refresh = 300
	retry = 300
	expire = 2592000
	minimum = 7200
```

（5）查询其他类型的记录。
```shell
nslookup -query=TYPE DOMAIN|IP [DNS-SERVER]
TYPE:
	A		IPv4 地址记录
    AAAA	IPv6 地址记录  
	AFSDB 	Andrew文件系统数据库服务器记录 
	ATMA 	ATM地址记录 
	CNAME	别名记录 
	HINFO	硬件配置记录，包括CPU、操作系统信息 
	ISDN	域名对应的ISDN号码 
	MB		存放指定邮箱的服务器 
	MG		邮件组记录 
	MINFO	邮件组和邮箱的信息记录 
	MR		改名的邮箱记录 
	MX		邮件服务器记录 
	NS		名字服务器记录 
	PTR		反向记录 
	RP		负责人记录 
	RT		路由穿透记录 
	SRV		TCP服务器信息记录 
	TXT		域名对应的文本信息 
	X25		域名对应的X.25地址记录
```

（6）查询所有记录。
```shell
nslookup -query=all DOMAIN
```
这个命令将查询 DNS 服务器以获取指定域名的所有记录，包括 A、AAAA、MX、NS、SOA 和 TXT 记录。

（7）指定 DNS 服务器。
```
nslookup -server=<DNS 服务器地址> <域名>
```
这个命令将查询指定的 DNS 服务器以获取指定域名的信息。

（8）显示更详细的信息。
```
nslookup -debug <域名>
```
这个命令将显示更详细的信息，包括查询的过程、使用的 DNS 服务器和结果的解析过程。

---
## 参考文献
[nslookup(1) - Linux man page - Die.net](https://linux.die.net/man/1/nslookup)

[GeeksforGeeks.nslookup command in Linux with Examples](https://www.geeksforgeeks.org/nslookup-command-in-linux-with-examples/)

[【Linux】一步一步学Linux——nslookup命令(161)](https://blog.csdn.net/dengjin20104042056/article/details/99977872)
