## 1.命令简介
ssh（Secure SHell）是 [OpenSSH](https://www.openssh.com) 远程登录客户端。

ssh 是一个用于登录远程机器并在远程机器上执行命令的程序。它的目的是取代 rlogin 和 rsh，并在一个不安全的网络上提供两个不受信任的主机之间的安全加密通信。X11 连接和任意 TCP 端口也可以通过安全通道进行转发。

## 2.命令格式
```
ssh [OPTIONS] [-p PORT] [USER@]HOSTNAME [COMMAND]
```
ssh 最常用的功能是登录远程主机，选择以什么用户连接哪台机器，然后输入密码即可。

如果不想通过选项 -p 指定 PORT，可使用 URI 格式 `ssh://[USER@]HOSTNAME[:PORT]` 来指定目标主机。

## 3.选项说明
```shell
-1
    强制只使用协议第一版
-2
    强制只使用协议第二版
-4
    强制只使用 IPv4 地址.
-6
    强制只使用 IPv6 地址
-A
    允许转发认证代理的连接。可以在配置文件中对每个主机单独设定这个参数
-a
    禁止转发认证代理的连接
-b BIND_ADDRESS
    在拥有多个地址的本地机器上，指定连接的源地址
-C
	压缩所有数据。压缩算法与 gzip(1) 使用的相同
-c {blowfish | 3des | des}
    选择会话的密码算法。3des 是默认算法
-c CIPHER_SPEC
    另外, 对于协议第二版，这里可以指定一组用逗号隔开、按优先顺序排列的加密算法
-D [BIND_ADDRESS:]PORT
	指定一个本地主机动态的应用程序级的转发端口。工作原理是这样的，本地机器上分配了一个 socket 侦听 port 端口，一旦这个端口上有了连接，该连接就经过安全通道转发出去，根据应用程序的协议可以判断出远程主机将和哪里连接。目前支持 SOCKS4 和 SOCKS5 协议，而 ssh 将充当 SOCKS 服务器. 只有 root 才能转发特权端口。可以在配置文件中指定动态端口的转发
-e ESCAPE_CHAR
	设置 pty 会话的转义字符，默认为字符 ~。转义字符只在行首有效，转义字符后面跟一个点表示结束连接，后跟一个 control-Z 表示挂起连接，跟转义字符自己表示输出转义字符自身。把转义字符设为 none 则禁止 转义功能，使会话完全透明
-F CONFIGFILE
	指定 ssh 指令的配置文件，将忽略系统级配置文件 /etc/ssh/ssh_config 和用户级配置文件 ~/.ssh/config
-f 
    ssh 在执行命令前退至后台
-g
    允许远端主机连接本地的转发端口
-I SMARTCARD_DEVICE
    指定智能卡设备。智能卡里面存储了用户的 RSA 私钥
-i IDENTITY_FILE
    指定一个 RSA 或 DSA 认证所需的身份（私钥）文件。协议第一版的默认文件是 ~/.ssh/identity 以及协议第二版的 ~/.ssh/id_rsa 和 ~/.ssh/id_dsa 文件。可以同时使用多个 -i 选项，也可以在配置文件中指定多个身份文件
-K
	启用基于 GSSAPI 的身份验证和向服务器转发 GSSAPI 凭据
-k
   禁用向服务器转发 GSSAPI 凭据
-L [BIND_ADDRESS:]PORT:HOST:HOSTPORT
	将本地主机的地址和端口接收到的数据通过安全通道转发给远程主机的地址和端口
-l LOGIN_NAME
    指定登录远程主机的用户。可以在配置文件中对每个主机单独设定这个参数
-M
	将 ssh 客户端置于主模式进行连接共享。多个 -M 选项将 ssh 置于主模式，并在接受从连接之前进行确认
-m MAC_SPEC
	对于协议第二版，可以指定一组用逗号隔开，按优先顺序排列的 MAC (message authentication code) 算法
-N
    不执行远程命令，用于转发端口。仅限协议第二版
-n
	把 stdin 重定向到 /dev/null，防止从 stdin 读取数据。在后台运行时一定会用到这个选项
-O CTL_CMD
	控制主动连接多路复用主进程。参数 CTL_CMD 将被传递给主进程。CTL_CMD 可取值 check（检查主进程是否正在运行）和 exit（让主进程退出）
-o OPTION
    可以在这里给出某些选项，格式和配置文件中的格式一样。它用来设置那些没有单独的命令行标志的选项
-p PORT
    指定远程主机的端口。可以在配置文件中对每个主机单独设定这个参数
-q
    安静模式。消除大多数的警告和诊断信息
-R [BIND_ADDRESS:]PORT:HOST:HOSTPORT
	将远程主机上的地址和端口接收的数据通过安全通道转发给本地主机的地址和端口
-S CTL_PATH
	指定用于连接共享的控制套接字的位置
-s
    用于请求远程系统上的子系统调用。子系统是 SSH2 协议的一个特性，它有助于将 SSH 用作其他应用程序（如 sftp(1)）的安全传输。子系统通过远程命令指定
-T
    禁止分配伪终端
-t
	强制分配伪终端。这可用于在远程计算机上执行基于屏幕的任意程序，例如菜单服务。多个 -t  选项强制分配终端, 即使没有本地终端
-V
	显示版本信息并退出
-v
    冗详模式。打印关于运行情况的调试信息。在调试连接、认证和配置问题时非常有用。多个 -v 选项能够增加冗详程度，最多三个
-W HOST:PORT
	将客户端上的标准输入和输出通过安全通道转发给指定主机的端口
-w LOCAL_TUN[:REMOTE_TUN]
	指定客户端和服务端之间转发的隧道设备
-X
    允许 X11 转发，可以在配置文件中对每个主机单独设定这个参数
-x
    禁止 X11 转发
-Y
	启用受信任的 X11 转发。受信任的 X11 转发不受 X11 安全扩展控制的约束
-y
	使用 syslog(3) 系统模块发送日志信息。默认情况下，此信息被发送到 stderr
```

## 4.常用示例
（1）使用指定用户名和端口登录远程主机。
```
ssh -p3600 root@9.134.114.170
```
输入用户登录密码后完成登录。未指明端口和用户名，则分别由配置文件 ~/.ssh/ssh_config 和 /etc/ssh/ssh_config 中的 Port 和 User 选项决定。如果配置文件未指定，则端口默认为 22 ，用户名默认为当前用户。 

注意：ssh 获取相关参数的顺序如下：
```
1.command-line options
2.user's configuration file (~/.ssh/config)
3.system-wide configuration file (/etc/ssh/ssh_config)
```

ssh 利用非对称加密实现安全的登录，非对称加密中有两个密钥：公钥和私钥。公钥由私钥产生，但却无法推算出私钥；公钥加密后的密文，只能通过对应的私钥来解密。

非对称加密的登录流程如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200303215941491.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70)
整个登录过程如下：
```
1.topgun 终端要登录 Server 服务器，发起登录请求 `ssh work@server.com`。
2.服务端运行有 sshd 服务，并监听指定的端口，默认为 22 号端口。服务端会生成一对公钥和私钥；此时将公钥返回给客户端；
3.客户端使用公钥，对登录密码进行加密（如服务器work用户密码为xxx），生成公钥加密字符串；
4.客户端将公钥加密字符串发送给服务端；
5.服务端使用私钥，解密公钥加密字符串，得到原始密码；
6.校验密码是否合法（此为本机 work 密码）；
7.返回登录结果给客户端：成功登录或密码错。
```
在非对称加密中，由于只有公钥会被传输，而私钥是服务端本地保存，因此即便公钥被监听，也无法拿到原始密码，从而安全地登录服务器。

（2）在远程主机上执行指定命令，如查看远程主机指定设备的分区情况。
```
ssh -p3600 root@9.134.114.170 fdisk -l /dev/vda
root's password: 
Authentication successful.

Disk /dev/vda: 107.4 GB, 107374182400 bytes, 209715200 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0xf6abafec

   Device Boot      Start         End      Blocks   Id  System
/dev/vda1              63   209712509   104856223+  83  Linux
```
（3）通过 ssh 实现免密登录。

免密登录的实现过程如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200303215024973.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70)
```
1.在客户端使用 ssh-keygen 生成一对密钥：公钥+私钥；
2.将客户端公钥追加到服务端的 authorized_key 文件中，完成公钥认证操作；
3.认证完成后，客户端向服务端发起登录请求，并传递公钥到服务端；
4.服务端检索 authorized_key 文件，确认该公钥是否存在。如果存在该公钥，则生成随机数 R，并用公钥进行加密，生成公钥加密字符串 pubKey(R)；
5.将公钥加密字符串传递给客户端；
6.客户端使用私钥解密公钥加密字符串，得到 R；
7.服务端和客户端通信时会产生一个会话 ID(sessionKey)，用 MD5 对 R 和 SessionKey 进行加密，生成摘要；
8.客户端将生成的 MD5 加密字符串传给服务端；
9.服务端同样生成 MD5(R,SessionKey) 加密字符串；
10.如果客户端传来的加密字符串等于服务端自身生成的加密字符串，则认证成功。此时不用输入密码，即完成建连，可以开始远程执行 Shell 命令了。
```
第一步使用 ssh-keygen 命令在客户端生成 RSA 公钥和私钥，一直回车确认。公钥和私钥默认名称为 id_rsa.pub（公钥）和私钥（id_rsa），默认保存在 ~/.ssh 目录下。
```
ssh-keygen -t rsa
```
第二步将客户端公钥追加至服务端 ~/.ssh/authorized_keys 文件中，authorized_keys 是用来存放客户端公钥的文件。有三种方法，一是通过 ssh-copy-id 命令，二是通过 scp 命令，三是手动复制。例如使用 ssh-copy-id 命令实现如下：
```
ssh-copy-id -i ~/.ssh/id_rsa.pub -p 3600 root@9.134.114.170
```

第三步使用 ssh 进行免密登录。
```
ssh -p3600 root@9.134.114.170
```

----
## 参考文献
[ssh(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/ssh.1.html)

[ssh_config(5) manual](https://linux.die.net/man/5/ssh_config)

[OpenSSH 官网](https://www.openssh.com)

[博客园.linux上ssh免密登录原理及实现](https://www.cnblogs.com/276815076/p/10449354.html)
