## 1.命令简介
host 是常用的域名解析工具，可以用来测试域名系统工作是否正常。

host 是一个用于执行 DNS 查找的简单实用程序。它通常用于将名称转换为 IP 地址，反之亦然。 

## 2.命令格式
```shell
host
host [-aCdlnrsTwv] [-c class] [-N ndots] [-R number] [-t type] [-W wait] [-m flag] [-4] [-6] <name> [server]
```
如果没有给出参数或选项，host 将打印其命令行参数和选项的简短说明。

## 3.选项说明
```
-a
	显示详细的 DNS 信息。
-c <class>
	指定查询类型，默认值为 IN（Internet）。
-C
	查询指定主机的完整的 SOA 记录。
-r
	不使用递归的查询方式查询域名。
-t <type>
	指定查询的域名信息类型。
-v
	显示指令执行的详细信息
-w
	如果域名服务器没有给出应答信息，则总是等待，直到域名服务器给出应答。
-W <wait>
	指定域名查询的最长时间，如果在指定时间内域名服务器没有给出应答信息则退出。
-4
	使用 IPv4 查询传输 （默认）。
-6
	使用 IPv6 查询传输。
```

## 4.常用示例
（1）打印其命令行参数和选项的简短说明。
```shell
host
Usage: host [-aCdilrTvVw] [-c class] [-N ndots] [-t type] [-W time]
            [-R number] [-m flag] hostname [server]
       -a is equivalent to -v -t ANY
       -c specifies query class for non-IN data
       -C compares SOA records on authoritative nameservers
       -d is equivalent to -v
       -i IP6.INT reverse lookups
       -l lists all hosts in a domain, using AXFR
       -m set memory debugging flag (trace|record|usage)
       -N changes the number of dots allowed before root lookup is done
       -r disables recursive processing
       -R specifies number of retries for UDP packets
       -s a SERVFAIL response should stop query
       -t specifies the query type
       -T enables TCP/IP mode
       -v enables verbose output
       -V print version number and exit
       -w specifies to wait forever for a reply
       -W specifies how long to wait for a reply
       -4 use IPv4 query transport only
       -6 use IPv6 query transport only
```

（2）查询域名对应的 IP 地址。
```shell
host www.baidu.com
www.baidu.com is an alias for www.a.shifen.com.
www.a.shifen.com has address 110.242.68.4
www.a.shifen.com has address 110.242.68.3
```
（3）显示执行域名查询的详细信息。
```shell
host -v www.baidu.com
Trying "www.baidu.com"
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 59291
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.baidu.com.			IN	A

;; ANSWER SECTION:
www.baidu.com.		143	IN	CNAME	www.a.shifen.com.
www.a.shifen.com.	121	IN	A	220.181.38.149
www.a.shifen.com.	121	IN	A	220.181.38.150

Received 90 bytes from 183.60.83.19#53 in 0 ms
Trying "www.a.shifen.com"
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 45319
;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 0

;; QUESTION SECTION:
;www.a.shifen.com.		IN	AAAA

;; AUTHORITY SECTION:
a.shifen.com.		490	IN	SOA	ns1.a.shifen.com. baidu_dns_master.baidu.com. 2211020024 5 5 2592000 3600

Received 97 bytes from 183.60.83.19#53 in 0 ms
Trying "www.a.shifen.com"
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 27410
;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 0

;; QUESTION SECTION:
;www.a.shifen.com.		IN	MX

;; AUTHORITY SECTION:
a.shifen.com.		376	IN	SOA	ns1.a.shifen.com. baidu_dns_master.baidu.com. 2211020024 5 5 2592000 3600

Received 97 bytes from 183.60.83.19#53 in 0 ms
```
（4）查询域名的 MX 信息。
```shell
host -t MX www.baidu.com
www.baidu.com is an alias for www.a.shifen.com.
www.a.shifen.com is an alias for www.wshifen.com.
```
（5）显示详细的 DNS 信息。
```shell
host -a www.baidu.com
Trying "www.baidu.com"
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 11585
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.baidu.com.			IN	ANY

;; ANSWER SECTION:
www.baidu.com.		1122	IN	CNAME	www.a.shifen.com.
```

（6）用谷歌的 DNS（8.8.8.8）来查百度主机的 IP。
```shell
host www.baidu.com 8.8.8.8
Using domain server:
Name: 8.8.8.8
Address: 8.8.8.8#53
Aliases: 

www.baidu.com is an alias for www.a.shifen.com.
www.a.shifen.com has address 14.215.177.38
www.a.shifen.com has address 14.215.177.39
www.a.shifen.com is an alias for www.wshifen.com.
```

---
## 参考文献
[host(1) manual - linux.org](https://www.linux.org/docs/man1/host.html)
