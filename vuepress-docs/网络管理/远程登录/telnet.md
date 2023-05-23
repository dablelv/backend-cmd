## 1.简介
telnet 是基于 Telnet 协议的远程登录程序，用于登录远程主机，对远程主机进行管理。

telnet 因采用明文传送报文，安全性不好，很多 Linux 服务器都不开放 Telnet 服务，而改用更安全的 ssh 方式了。但仍然有很多别的系统可能采用了 telnet 方式来提供远程登录，因此弄清楚 telnet 的使用方式仍是很有必要的。 

telnet 还可做别的用途，比如确定远程服务器的某个端口是否能访问。

此外，Telnet 协议是 TCP/IP 协议族中的一员，是 Internet 远程登录服务的标准协议，属于应用层协议，基于 TCP 协议实现远程登录。

## 2.命令格式
```shell
telnet [-8EFKLacdfrx] [-X authtype] [-b hostalias] [-e escapechar] [-k realm] [-l user] [-n tracefile] [host [port]]
```

## 3.选项说明
```shell
-8
	允许使用 8 位字符资料，包括输入与输出
-a
	尝试自动登入远端系统
-b HOSTALIAS
	使用别名指定远端主机名称
-c
	不读取用户专属目录里的.telnetrc文件
-d
	启动排错模式
-e ESCAPECHAR
	设置转义字符
-E
	滤除转义字符
-f
	此选项的效果和指定 -F 相同
-F
	使用 Kerberos V5 认证时，加上此参数可把本地主机的认证数据上传到远端主机
-k <realm>
	使用 Kerberos 认证时，加上此参数让远端主机采用指定的域名，而非该主机的域名去获取票据
-K
	不自动登入远端主机
-l USER
	指定要登入远端主机的用户名称
-L
	允许输出 8 位字符资料
-n TRACEFILE
	指定文件记录相关信息
-r
	使用类似 rlogin 指令的用户界面
-x
	假设主机有支持数据加密的功能，就使用它
-X ATYPE
	关闭指定的认证类型
```

## 4.常用示例
（1）登录主机。

不显示提供端口，默认为 23。
```
telnet 192.168.0.5
```
（2）确认远端服务器某个端口是否可用。比如查看远端服务器 ssh 服务的 22 号端口是否开放。
```
telnet 10.234.178.144 22
Trying 10.234.178.144...
Connected to 10.234.178.144.
Escape character is '^]'.
SSH-2.0-OpenSSH_6.0
```
以上表示远端服务器 ssh 服务的 22 号端口已经开放。注意，这并不表示使用 ssh 命令一定可以与远端服务器建立 SSH 链接，需要远端服务器的授权。

（3）进入命令行交互模式。
如果在没有 host 参数的情况下调用 telnet，它将进入命令模式，提示符为 telnet>。
```
telnet
telnet> 
```
交互模式下常用子命令有：
```
auth <argument> [...]：查看和管理telnet登录身份验证方式。argument可取值：disable、enable和status
close：关闭当前 Telnet 连接
display：使用 display 命令可以查看 Telnet 客户端的当前设置
logout：类似于cloase命令，用于关闭Telnet连接或者挂起。注：Telnet服务端可能不支持
open <host> [-l user] [[-] port]：建立到指定主机的 Telnet 连接
send <arguments>：使用send命令可以向Telnet服务器发送特定字符串。支持包括但不限于以下命令字符串：
	abort：终止服务命令
	ao：Abort Output，放弃输出命令
	ayt：Are you there命令
	brk：Break命令
	eof：发送End Of File字符
	escape：发送当前的转义字符，初始为分组符^]。
	ip：中断进程命令
	synch：执行Telnet同步操作。
quit：退出 Telnet 客户端。
status：显示当前Telnet连接状态
```

---
## 参考文献
[telnet(1) manual - linux.org](https://www.linux.org/docs/man1/telnet.html)

[telnet命令 - Linux命令大全](http://man.linuxde.net/telnet)

[每天一个Linux命令（52）telnet命令](https://blog.csdn.net/dearbaba_8520/article/details/80781437)

<Vssue title="telnet" />