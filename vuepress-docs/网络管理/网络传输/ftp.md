## 1.简介
FTP（File Transfer Protocol）是一种用于在计算机之间传输文件的标准网络协议。

ftp 则是 FTP 服务的命令行客户端，用于与 FTP 服务器进行交互。

## 2.格式
```
ftp [OPTIONS] [HOST [PORT]]
```
控制通道端口 PORT 缺省为 21。

## 3.选项
```
-4: use IPv4 addresses only
-6: use IPv6, nothing else
-p: enable passive mode (default for pftp)
-i: turn off prompting during mget
-n: inhibit auto-login
-e: disable readline support, if present
-g: disable filename globbing
-v: verbose option forces ftp to show all responses from the remote server, as well as report on data transfer statistics.
-t: enable packet tracing [nonfunctional]
-d: enable debugging
-h: show a brief help message
```

## 4.子命令
有许多子命令，这些命令用于执行各种操作，例如连接到服务器、文件传输、目录操作等。以下是一些常用的子命令：
```
?, help [CMD]
	显示所有子命令。如果指定子命令则显示子命令的说明。
open HOST [POST]
	与 FTP 服务器建立连接。
user USERNAME [PASSWD]
	用户登录。需要口令时，必须输入口令。
passive
	进入被动方式。
ascii
	将文件传输模式设置为 ASCII 模式。
binary
	将文件传输模式设置为二进制模式。
pwd
	 显示当前远程工作目录。
cd DIRECTORY
	切换当前远程目录。
ls [DIRECTORY]
	列出（当前）远程目录内容。
dir [DIRECTORY]
	类似于 ls，用于列出（当前）远程目录内容。
get REMOTE_FILE [LOCAL_FILE]
	从服务器下载文件。本地文件路径可省略，缺省下载到当前本地目录。
mget REMOTE_FILES
	批量下载多个文件，支持使用通配符 ? 和 *。
put LOCAL_FILE [REMOTE_FILE]
	上传文件到服务器。
mput LOCAL_FILES
	批量上传多个文件到服务器。
delete REMOTE_FILE
	删除远程文件。
mdelete REMOTE_FILES
	批量删除远程文件。
mkdir DIRECTORY
	创建远程目录。
rmdir DIRECTORY
	删除远程目录。
prompt on | off
	打开（on）或关闭（off）批量命令的交互式询问
!, bye, exit, quit
	关闭连接，退出会话。
```
这只是一部分子命令，还有其他许多子命令，具体取决于 FTP 服务器的支持和配置。你可以输入 ? 或
help 子命令获取更多子命令的帮助信息。

## 5.控制与数据通道
FTP（File Transfer Protocol）使用两个通道来完成文件传输和命令控制：控制通道（Control Channel）和数据通道（Data Channel）。

控制通道（Control Channel）用于客户端和服务器之间传递控制命令和状态信息，例如登录认证、切换目录等

控制通道通常使用默认端口 21。

数据通道（Data Channel）用于数据传输，传输类型可以是 ASCII 模式（文本文件）或 Binary 模式（二进制文件）。

数据通道的端口通常是服务端事先配置的 20（主动模式）或动态分配（被动模式）。

## 6.主动与被动模式
FTP 使用主动模式（Active Mode）和被动模式（Passive Mode）来建立数据连接，这涉及到在客户端和服务器之间传输文件时的数据通信。

主动与被动是站在 FTP 服务器的角度来说的。

### 主动模式（Active Mode）
客户端请求：FTP 客户端随机开启一个非保留端口（大于 1023）N 向服务器的 21 号命令端口发起连接，发送 FTP 用户名和密码，然后开放 N+1 号端口进行监听，并向服务器发出 PORT N+1 命令，告诉服务器客户端采用主动模式并开放了 N+1 端口。

服务器主动连接： 服务器接收到 PORT 命令后，会用其本地的 FTP 数据端口（通常是20）来连接客户端指定的 N+1 端口，进行数据传输。

**主动模式的问题：**

主动模式可能会面临防火墙问题，因为在传输文件之前，服务器需要与客户端的数据端口建立连接。如果客户端位于防火墙后面，防火墙可能会阻止来自服务器的连接。

### 被动模式（Passive Mode）
客户端请求： 在被动模式下，客户端随机开启非保留端口（大于 1023）N 向服务器的21号端口发起连接，发送用户名和密码进行登录。同时会开启 N+1 端口用于数据连接，然后向服务器发送 PASV 命令，通知服务器处于被动模式。

服务器响应： 服务器收到命令后，会开放一个非保留端口（大于 1023）P（端口P的范围是可以设置）进行监听，然后用 PORT P 命令通知客户端自己的数据端口是 P。

客户端连接： 客客户端收到命令后，会通过N+1号端口连接服务器的端口P，然后在两个端口之间进行数据传输。

**被动模式的优势：**

被动模式通常更容易穿越防火墙，因为在被动模式下，客户端与服务器的数据连接是由客户端发起的，而不需要服务器主动连接客户端。

## 7.示例
（1）查看帮助信息。
```shell
ftp -h
Usage: { ftp | pftp } [-46pinegvtd] [hostname]
   -4: use IPv4 addresses only
   -6: use IPv6, nothing else
   -p: enable passive mode (default for pftp)
   -i: turn off prompting during mget
   -n: inhibit auto-login
   -e: disable readline support, if present
   -g: disable filename globbing
   -v: verbose mode
   -t: enable packet tracing [nonfunctional]
   -d: enable debugging
```
（2）在 Shell 脚本中拉取文件到本地。
```bash
ftp -np $ftpHost <<END
user DEV DEV
binary
get $remoteFilePath $localFilePath
bye
END
```
-n 表示禁止自动登录，后由 user 命令登录。-p 表示被动模式，由客户端向服务器发起数据通道的连接。

<<EOF 是 Shell 的 Here Document，作用将后续内容重定向到左侧命令的 Stdin 中，并以指定的任意字符串（示例中使用 END）表示结束。

（3）使用 mget 下载多个文件到本地。

mget 用于批量下载多个文件，支持使用通配符指定文件。
```shell
# 下载多个文件
ftp> mget file1.txt file2.txt file3.txt

# 使用通配符下载多个文件
ftp> mget *.txt
```
默认情况下，mget 会在下载文件时询问用户是否确认下载。你可以使用 prompt 命令关闭询问。
```shell
ftp> prompt off
```
递归下载目录中的文件。
```shell
ftp> mget -r remote_directory/*
```

## 8.FAQ
### ls 报错
使用 `ftp HOSTNAME`，然后输入用户名密码成功登录之后，使用 ls 报了如下错误：
```
501 Server cannot accept argument.
ftp: bind: Address already in use
```
原因是我们处于主动模式。

主动模式下，FTP 服务器使用端口 20 去连接客户端指定的端口建立数据传输通道。一般来讲外部系统到内部的端口连接会被防火墙阻塞，所以报了 `ftp: bind: Address already in use` 错误。

解决办法是执行 passive 命令进入被动模式。

### 控制连接被断开
使用客户端与服务器建立连接后，过一段时间再次执行命令，会报如下错误：
```
421 Service not available, remote server has closed connection
```
描述表示 FTP 服务器已关闭连接，导致无法提供服务。可以使用 open 重新与服务器建立连接。

出现这种情况的原因可能有如下几点：
- 空闲连接被断开： 一些FTP服务器为了节省资源，会在连接空闲一段时间后主动关闭。尝试在服务器上调整空闲连接断开的设置。
- 服务器状态异常： 可能是FTP服务器本身出现了问题，例如负载过高或正在维护。联系FTP服务器管理员以获取更多信息。
- 防火墙设置不当： 检查本地防火墙和服务器防火墙的设置，确保它们不会关闭FTP连接。有时，防火墙可能会关闭长时间没有活动的连接。
- 网络不稳定：不稳定的网络连接可能导致连接超时和错误。确保你的网络连接是稳定的。

### 下载大文件后阻塞
下载大文件（我下载的文件 >4GB）时发现客户端假死，实际上文件已下载成功，但是没接收到 226 返回码（关闭数据连接，请求的文件操作成功），不继续执行。

下载小文件没有问题。

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/32b8f109d606435daf610850f73e1e91.png)

下载大文件无法正常结束。

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/b15216462d354df68bc33ffff0a3321d.png)
原因是长时间的数据传输，导致控制连接无任何操作，空闲超时被断开。所以客户端无法接收服务端 226 返回码，出现阻塞。

由于命令行客户端 ftp 不能设置控制连接空闲超时时间，也没有发送心跳用于连接保活的功能，所以暂时无法解决这个问题。

最终改用 wget 下载大文件。
```shell
wget ftp://username:password@ftp.example.com/path/to/file
```

---
## 参考文献
[ftp(1): Internet file transfer program - Linux man page](https://linux.die.net/man/1/ftp)

[Ftp下载文件超时处理 - CSDN](https://blog.csdn.net/zhuzi121121/article/details/111881277)

[FTP下载大文件后命令无法正常退出 - CSDN](https://blog.csdn.net/u013693466/article/details/103806543)

[ftp get a large file can't end properly - Stack Overflow](https://stackoverflow.com/questions/77825424/ftp-get-a-large-file-cant-end-properly)

<Vssue title="ftp" />