## 1.命令简介
sshd 是 OpenSSH 软件套件中的服务端守护进程。。

OpenSSH 是 SSH （Secure SHell） 协议的免费开源实现。SSH 协议族可以用来进行远程登录 或在计算机之间传送文件。

OpenSSH 套件在不安全的网络中为两台为信任的主机之间建立加密的数据通信，是 rlogin、rsh 等明文传输数据工具的替代品。sshd 是 OpenSSH 套件中的核心程序，其他的指令（如，sftp-server、slogin、scp）等都是基于 sshd 命令的。

## 2.命令格式
```shell
sshd [-46DdeiqTt] [-C connection_spec] [-c host_certificate_file]
	[-E log_file] [-f config_file] [-g login_grace_time]
	[-h host_key_file] [-o option] [-p port] [-u len]
```
## 3.选项说明
```shell
-4
	强制使用 IPv4 地址。
-6
	强制使用 IPv6 地址。
-C <connection_spec>
	指定用于 -T 扩展测试模式的连接参数。
-c <host_certificate_file>
	指定证书文件的路径，以在密钥交换期间标识sshd。证书文件必须与使用 -h 选项或 HostKey 配置指令指定的主机密钥文件匹配。
-D
	以非后台守护进程的方式运行。这样 sshd 不会分离，也不会成为守护进程，可以方便地监控sshd。
-d
	调试模式。
-E <log_file>
	将调试日志附加到指定文件而不是系统日志。
-e
	将错误发送到标准错误设备，而不是将其发送到系统日志。
-f <config_file>
	指定服务器的配置文件。
-g <login_grace_time>
	指定客户端登录的过期时间（默认时间为120秒），如果在此期限内，用户没有正确认证，则服务器断开此客户端的连接。
-h <host_key_file>
	指定读取主机 key 文件。
-i
	sshd 以 inetd(8) 方式运行。
-o <option>
	指定 sshd 的配置选项。
-p <port>
	指定使用的端口号。
-q
	静默模式，没有任何信息写入系统日志。
-T
	扩展测试模式。检查配置文件的有效性，将有效配置输出到 stdout，然后退出。或者，可以通过使用一个或多个-C选项指定连接参数来应用匹配规则。
-t
	测试模式。只检查配置文件的有效性和密钥的健全性。这对于可靠地更新 sshd 非常有用，因为配置选项可能会更改。
-u <len>
	此选项用于指定 utmp 结构中包含远程主机名的字段的大小。如果解析的主机名长于 len，则将改用点分十进制值。
```
## 4.常用示例
（1）以调试模式运行 sshd。
```shell
/sbin/sshd -d
```

（2）以测试模式运行 sshd。
```shell
/sbin/sshd -t
```

（3）强制使用 IPv6 地址。
```shell
/sbin/sshd -6
```

（4）强制使用 IPv4 地址。
```shell
/sbin/sshd -4
```

（5）查看 sshd 服务状态。
```shell
systemctl status sshd
● sshd.service - OpenSSH server daemon
   Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)
   Active: active (running) since Sun 2022-11-27 22:17:59 CST; 5 days ago
     Docs: man:sshd(8)
           man:sshd_config(5)
 Main PID: 1032 (sshd)
   CGroup: /system.slice/sshd.service
           └─1032 /usr/sbin/sshd -D
```

（6）启动 sshd 服务。
```shell
systemctl start sshd
```

---
## 参考文献
[sshd(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/sshd.8.html)

<Vssue title="sshd" />