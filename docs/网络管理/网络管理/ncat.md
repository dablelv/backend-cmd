## 1.命令简介
ncat（netcat）连接和重定向套接字。

ncat 是一个短小精悍、功能实用、简单可靠的网络工具，主要有如下作用：
- 端口侦听，ncat 可以作为 server 以 TCP 或 UDP 方式侦听指定端口；
- 端口扫描，ncat 可以作为 client 发起 TCP 或 UDP 请求；
- 机器之间传输文件；
- 机器之间网络测速。

ncat 是为 [Nmap](https://nmap.org/)（Network Mapper）项目编写的，是 Nmap 套件中的一员，旨在成为可靠的后端工具，可立即为其他应用程序和用户提供网络连接。ncat 不仅可以使用 IPv4 和 IPv6，还可以为用户提供几乎无限的潜在用途。

ncat 一般会有个名为 nc 的软链，所以也可以使用 nc 来使用 ncat。

## 2.命令格式
```shell
ncat [OPTIONS...] [hostname] [port]
```

## 3.选项说明
```
-4/6
	强制只使用 IPv4/IPv6 地址。
-d, --delay <time>
	读/写之间等待时间。
-h, --help
	打印出帮助信息。
-k, --keep-open
	在当前连接完成后继续侦听另一个连接。注意如果不使用 -l 选项，则使用此选项是错误的。
-l, --listen
	指定应该侦听传入的连接，而不是启动到远程主机的连接。将此选项与 -p、-s 或 -z 选项结合使用是错误的。此外，使用 -w 选项指定的超时将被忽略。
-n, --nodns
	不要在任何指定的地址、主机名或端口上执行任何 DNS 或服务查找。
-t, --telnet
	使 nc 发送 RFC 854 DON'T 和 WON'T 响应 RFC 854 的 DO 和 WILL 请求。这使得使用 nc 编写 telnet 会话脚本成为可能
-U, --unixsock
	指定使用 Unix 域套接字。
-u, --udp
	使用 UDP 代替默认选项 TCP。
-v, --verbose
	显示命令执行过程。
-z
	表示 zero，只扫描侦听守护进程，而不向它们发送任何数据。此选项与 -l 选项结合使用是错误的
-C, --crlf
	发送 CRLF 作为换行符。
-i, --idle-timeout <time>
	空闲读/写超时时间。
-p,  --source-port <port>
	指定源端口，但须受特权限制和可用性限制。将此选项与 -l 选项结合使用是错误的。
-s, --source <addr>
	设置本地主机送出数据包的 IP 地址。注意将此选项与 -l 选项结合使用是错误的。
-w, --wait <time>
	如果连接和 stdin 空闲超过指定秒数，则连接将被关闭。-w 标志对 -l 选项没有影响。缺省不超时。
-o, --output <filename>
	将会话数据转储到文件。
-x, --hex-dump <filename>
	将会话数据作为十六进制转储到文件。
--version
	显示版本信息。
```

## 4.常用示例
（1）监听本地端口。

假设在当前命令行终端 A 进行监听。
```
ncat -vl 8888
Ncat: Version 6.40 ( http://nmap.org/ncat )
Ncat: Listening on :::8888
Ncat: Listening on 0.0.0.0:8888
```
开启另外一个命令行终端 B，同样使用 ncat 发起连接。
```
ncat -v 127.0.0.1 8888
```
另一个终端 A 将会收到请求并打印连接信息：
```
Ncat: Connection from 127.0.0.1.
Ncat: Connection from 127.0.0.1:37229.
```
如果在终端 B 输入内容，那么终端 A 将收到终端 B 发送的内容并打印到标准输出。

（3）利用 ncat 之间的连接进行文件传输。

使用 ncat 传输文件还是比较方便的，因为不用 scp 和 rsync 那种输入密码的操作了。把 A 机器上的一个文本文件发送到 B 机器上，需注意操作次序，receiver 先侦听端口，sender 向 receiver 所在机器的该端口发送数据。  

receiver：
```
ncat -l 8888 > received.txt
```
sender:
```
ncat 127.0.0.1 8888 < file.txt
```

receiver 接收完毕，会自动退出监听。接收文件与原文件 md5 值相同，表示文件接收成功。
```
md5sum file.txt
8f6aab448ec32637b84c3484a1a44e0b  file.txt

md5sum received.txt
8f6aab448ec32637b84c3484a1a44e0b  received.txt
```

（4）利用 ncat 传输目录。

发送目录与发送文件类似，只不过是利用 tar 先将目录打包成一个文件，然后发送。接收方再利用 tar 进行解压缩还原为目录。

receiver：
```
ncat -l 8888 | tar -xzvf -
```

sender：
```
tar -czvf - DIR_NAME | nc 127.0.0.1 8888
```
注意，tar -f 选项后跟横杠 - 表示从标准输入读取或将结果输出到标准输出。

（5）测试网速。

测试网速其实利用了传输文件的原理，就是把来自一台机器的 /dev/zero 发送给另一台机器的 /dev/null。就是把一台机器的无限个 0，传输给另一个机器的空设备上，然后新开一个窗口使用 dstat 命令监测网速。在这之前需要保证机器先安装 dstat 工具。
```shell
yum install -y dstat
```
第 1 步，在 A 机器先启动接收数据的命令，监听自己的 8888 端口，把来自这个端口的数据都输出给空设备（这样不写磁盘，测试网速更准确）。
```shell
ncat -l 8888 > /dev/null
```
第 2 步，在 B 机器发送数据，把无限个 0 发送给 A 机器的 8888 端口。
```
ncat 10.0.1.161 8888 < /dev/zero
```
在 A 机器新的窗口上使用 dstat 命令查看当前网速。dstat 命令比较直观，它可以查看当前 CPU，磁盘，网络，内存页和系统的一些当前状态指标。我们只需要关注 recv 和 send 两列，分别表示接收和发送的数据，另外注意数字后面的单位 B，KB，MB。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200901003608983.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70#pic_center)

## 5.FAQ
使用 ncat 测试网速时，如果是在同一台机器发送数据，即：
```shell
ncat 127.0.0.1 8888 < /dev/zero
```
那么 receiver 将无法收到数据，具体原因还未找到，有知道的网友也麻烦留言告知，万分感谢。

----
## 参考文献
[ncat(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/ncat.1.html)

[nc命令用法举例 - 博客园](https://www.cnblogs.com/nmap/p/6148306.html)

[nc 命令使用详解 - 博客园](https://www.cnblogs.com/xuyaowen/p/nc_details.html)
