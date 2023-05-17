## 1.命令简介
ssh-keyscan 从服务器收集 SSH 公钥。

ssh-keyscan 是一个收集多个主机的 SSH 公共密钥的实用工具。它被设计用来帮助构建和验证 ssh_known_hosts 文件，其格式在 [sshd(8)](https://man7.org/linux/man-pages/man8/sshd.8.html) 中有说明。ssh- keycan 提供了一个适合 Shell 和 Perl 脚本使用的最小接口。

ssh-keycan 使用非阻塞的套接字 I/O 以并行方式联系尽可能多的主机，因此非常高效。可以在几十秒内收集来自 1,000 台主机的公钥，即使其中一些主机关闭或没有运行 [sshd(8)](https://man7.org/linux/man-pages/man8/sshd.8.html)。对于扫描，不需要登录被扫描的机器，扫描过程也不涉及任何加密。

## 2.命令格式
```shell
ssh-keyscan [-46cDHv] [-f file] [-p port] [-T timeout] [-t type] [host | addrlist namelist]
```

## 3.选项说明
```shell
-4
	强制使用 IPv4 地址。
-6
	强制使用 IPv6 地址。
-f <file>
	从指定文件中读取<地址列表,名字列表>对。
-p <port>
	指定连接远程主机的端口。
-T <timeout>
	指定连接尝试的超时时间。
-t <type>
	指定要创建的密钥类型。取值为 dsa、ecdsa、ed25519 或 rsa。
-v
	详细模式，打印调试信息。
```

## 4.常用示例
（1）显示指定主机的 SSH 公钥。
```shell
ssh-keyscan 127.0.0.1

# 127.0.0.1:22 SSH-2.0-OpenSSH_7.4
127.0.0.1 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBPGSUxf7imqYeMvvJ1XzkXpT4OhOLJXVRktQpegmqKOKyEOLoFgJHdklYPshzk6YXt8Zgb6NPqW0lZBMco3kQMo=
# 127.0.0.1:22 SSH-2.0-OpenSSH_7.4
127.0.0.1 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDkGXOrc1t17nD5zYHNcA83zsa9uvv8s1bGcHQoUgCotwJexLu0zTUgNzDJRuMHzIIzuwIIy2H24sgIOvo81bJHIcJOXxr6pJ8Jc/lriZmitqpOBfHRheUif8V6uqfQKYEQRRpEow5rDK0qYi7CSVuZFBgdLGQT+XyK72AK+hzvQyEmtd5NmeeIX0SmQ5WfwhzcCa0byu+hop81HjTXleSdwErox04BFTVX/UcH4LQb16Q4W+5kI46Vn1p6uuzrEt/+C92DUgYtmDW5hv9BuuYQuSdUoI+vpW+y+Bf5e4bqfuEh34P6qEgkIm+LUxybPS65MMHTRWpT+j/zIdGHIuqh
# 127.0.0.1:22 SSH-2.0-OpenSSH_7.4
127.0.0.1 ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINBoGj6wvUg+fNcgaXAHw2fpQzntB3pqt2/YXH6BNX8W
```

（2）显示指定主机的 RSA 公钥。
```shell
ssh-keyscan -t rsa 127.0.0.1

# 127.0.0.1:22 SSH-2.0-OpenSSH_7.4
127.0.0.1 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDkGXOrc1t17nD5zYHNcA83zsa9uvv8s1bGcHQoUgCotwJexLu0zTUgNzDJRuMHzIIzuwIIy2H24sgIOvo81bJHIcJOXxr6pJ8Jc/lriZmitqpOBfHRheUif8V6uqfQKYEQRRpEow5rDK0qYi7CSVuZFBgdLGQT+XyK72AK+hzvQyEmtd5NmeeIX0SmQ5WfwhzcCa0byu+hop81HjTXleSdwErox04BFTVX/UcH4LQb16Q4W+5kI46Vn1p6uuzrEt/+C92DUgYtmDW5hv9BuuYQuSdUoI+vpW+y+Bf5e4bqfuEh34P6qEgkIm+LUxybPS65MMHTRWpT+j/zIdGHIuqh
```

（3）收集主机 SSH 公钥，并输出调试信息。
```shell
ssh-keyscan -v 127.0.0.1
```

---
## 参考文献
[ssh-keyscan(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/ssh-keyscan.1.html)
