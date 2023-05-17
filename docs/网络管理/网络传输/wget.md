## 1.命令简介
wget 是一个非交互式网络下载器，用于从指定 url 下载文件。

wget 是 Linux 环境下流行的强大稳定的文件下载工具，主要有如下几个特点：
- wget 支持的协议丰富，支持 HTTP、HTTPS 和 FTP 协议，可以使用 HTTP 代理；
- wget 支持自动下载。wget 是非交互式的，这意味着它可以在后台工作。这意味这你可以登录系统，启动一个 wget 下载任务，然后退出系统，wget 将在后台执行直到任务完成；
- wget 支持断点续传，即在下次下载文件时，从已经下载的部分开始继续下载未完成的部分，而没有必要从头开始下载；
- wget 对弱网络有很强的适应性，在带宽很窄的情况下和不稳定网络中，如果由于网络的原因下载失败，wget 会不断地尝试，直到整个文件下载完毕。

## 2.命令格式
```
wget [OPTION]... [URL]...
```

## 3.选项说明
注意，长选项所必须的参数在使用短选项时也是必须的。
```
基本启动选项
-V,  --version
	显示 wget 的版本信息并退出
-h, --help
	打印帮助
-b, --background
	启动后转入后台执行。如果没有通过 -o 指定输出文件，则将输出重定向到 wget-log
-e,  --execute=COMMAND
	执行命令，就好像命令是 .wgetrc 的一部分一样。命令将在 .wgetrc 中的命令之后执行。如果需要指定多个 .wgetrc 命令，请使用 -e 的多个实例

日志和输入文件选项
-o,  --output-file=LOGFILE
  	将日志信息写入 LOGFILE
-a,  --append-output=LOGFILE
	将日志信息追加至 LOGFILE，而不是覆盖原 LOGFILE
-d, --debug
	打印大量调试信息
-q, --quiet
	安静模式（无信息输出）
-v,  --verbose
	详尽的输出（此为默认设置）
-nv, --no-verbose
	关闭详尽输出，但不进入安静模式。这意味着错误信息和基本信息仍然会被打印出来
-i, --input-file=FILE
	下载本地或外部 FILE 中的 URLs
-F, --force-html
	把输入文件当成 HTML 文件
-B, --base=URL
	将 URL 作为在 -F -i 参数指定的文件中出现的相对链接的前缀

下载选项
--bind-address=ADDRESS
	绑定至本地主机上的 ADDRESS (主机名或是 IP)
-t,  --tries=NUMBER
	设置重试次数为 NUMBER (0 代表无限制)
-O,  --output-document=FILE
	将下载的文档写入 FILE
-nc, --no-clobber
	在同一个目录中下载同一个文件将导致文件的原始副本被保留，第二个副本被命名为 file.1，第三个为 file.2，以此类推
-c,  --continue 
	断点续传下载文件
--progress=TYPE
	选择进度条类型，可取值 dot 和 bar
-N,  --timestamping
	只获取比本地文件新的文件
--no-use-server-timestamps
  	不用服务器上的时间戳来设置本地文件
-S, --server-response
  打印服务器响应
--spider
	不下载任何文件，只检查文件是不是在那里
-T,  --timeout=SECONDS
  	将所有超时设为 SECONDS 秒
--dns-timeout=SECS
	设置 DNS 查寻超时为 SECS 秒
--connect-timeout=SECS
	设置连接超时为 SECS 秒
--read-timeout=SECS
	设置读取超时为 SECS 秒
-w, --wait=SECONDS
	等待间隔为 SECONDS 秒
--waitretry=SECONDS
	在获取文件的重试期间等待 SECONDS 秒
--random-wait
	获取多个文件时，每次随机等待间隔在 0.5*WAIT 至 1.5*WAIT 秒，WAIT 由 -w 选项指定
--no-proxy
	禁止使用代理
-Q, --quota=NUMBER
	设置获取配额为 NUMBER 字节，后缀为 k（千字节）或 m（兆字节）。当下载的文件总大小达到配额后将暂停下载。请注意，配额不会影响下载单个文件。将配额设置为 0 或 inf 不限制下载配额
--limit-rate=RATE
	限制下载速率为 RATE 字节每秒。RATE 可使用后缀 k（千字节）或 m（兆字节）
--no-dns-cache
	关闭 DNS 查寻缓存
--restrict-file-names=MODES
	限定文件名中的字符为 MODES 允许的字符
-4,  --inet4-only
  	仅连接至 IPv4 地址
-6,  --inet6-only
	仅连接至 IPv6 地址
--prefer-family=FAMILY
	首先连接至指定协议的地址。FAMILY 为 IPv6，IPv4 或是 none
--retry-connrefused
	即使拒绝连接也要重试
--user=USER
	将 ftp 和 http 的用户名均设置为 USER
--password=PASS
	将 ftp 和 http 的密码均设置为 PASS
--ask-password
	提示输入密码
--no-iri
	关闭国际化 URI(IRI) 的支持
--local-encoding=ENC
	IRI (国际化资源标识符) 使用 ENC 作为本地编码
--remote-encoding=ENC
	使用 ENC 作为默认远程编码

目录选项
-nd, --no-directories
	不创建目录
-x,  --force-directories
	强制创建目录
-nH, --no-host-directories
	不要创建主目录
--protocol-directories
	在目录中使用协议名称
-P,  --directory-prefix=PREFIX
	以 PREFIX/ 作为前缀来保存文件
--cut-dirs=NUMBER
	忽略远程目录中 NUMBER 个目录层

HTTP 选项
--http-user=USER
	设置 http 用户名为 USER
--http-password=PASS
	设置 http 密码为 PASS
--no-cache
	不在服务器上缓存数据
--default-page=NAME
	改变默认页 (默认页通常是 index.html)
  -E,  --adjust-extension
  	以合适的扩展名保存 HTML/CSS 文档
--ignore-length
	忽略头部的 Content-Length 区域
--header=STRING
	在头部插入 STRING
--max-redirect
	每页所允许的最大重定向
--proxy-user=USER
	使用 USER 作为代理用户名
--proxy-password=PASS
	使用 PASS 作为代理密码
--referer=URL
	在 HTTP 请求头包含 Referer:URL
--save-headers
	将 HTTP 头保存至文件
-U, --user-agent=AGENT
	标识为 AGENT 而不是 Wget/VERSION
--no-http-keep-alive
	禁用 HTTP keep-alive (永久连接)
--no-cookies
	不使用 cookies
--load-cookies=FILE
	会话开始前从 FILE 中载入 cookies
--save-cookies=FILE
	会话结束后保存 cookies 至 FILE
--keep-session-cookies
	载入并保存会话 (非永久) cookies
--post-data=STRING
	使用 POST 方式；把 STRING 作为数据发送
--post-file=FILE
	使用 POST 方式；发送 FILE 内容
--content-disposition
	当选中本地文件名时允许 Content-Disposition 头部 (尚在实验)
--auth-no-challenge
	发送不含服务器询问的首次等待的基本 HTTP 验证信息

HTTPS (SSL/TLS) 选项
--secure-protocol=PR     选择安全协议，可以是 auto、SSLv2、SSLv3 或是 TLSv1 中的一个
--no-check-certificate
	不要验证服务器的证书
--certificate=FILE
	客户端证书文件
--certificate-type=TYPE
	客户端证书类型，PEM 或 DER
--private-key=FILE
       私钥文件
--private-key-type=TYPE
	私钥文件类型，PEM（默认） 或 DER
--ca-certificate=FILE
	带有一组 CA 认证的文件
--ca-directory=DIR
	保存 CA 认证的哈希列表的目录
--random-file=FILE
	带有生成 SSL PRNG 的随机数据的文件
--egd-file=FILE
	用于命名带有随机数据的 EGD 套接字的文件

FTP 选项
--ftp-user=USER
	设置 ftp 用户名为 USER
--ftp-password=PASS
	设置 ftp 密码为 PASS
--no-remove-listing
	不要删除 FTP 检索生成的临时 .list 文件
 --no-glob
 	不在 FTP 文件名中使用通配符展开
--no-passive-ftp
	禁用 passive 传输模式
--retr-symlinks
	递归目录时，获取符号链接指向的文件

递归下载选项
-r,  --recursive
	指定递归下载
-l,  --level=NUMBER
	最大递归深度 (inf 或 0 代表无限制，即全部下载)
--delete-after
	下载完成后删除本地文件
-k,  --convert-links
	让下载得到的 HTML 或 CSS 中的链接指向本地文件
-K,  --backup-converted
	在转换文件 X 前先将它备份为 X.orig
-m, --mirror
	打开适合镜像的选项。此选项打开递归和时间戳，设置无限递归深度，并保留ftp目录列表。等价于 -N -r -l inf --no-remove-listing 选项
-p,  --page-requisites
	下载所有用于显示 HTML 页面的图片之类的元素
--strict-comments
	用严格方式 (SGML) 处理 HTML 注释

递归接受/拒绝选项
-A,  --accept=LIST
	逗号分隔的可接受的扩展名列表
-R,  --reject=LIST
	逗号分隔的要拒绝的扩展名列表
-D,  --domains=LIST
	逗号分隔的可接受的域列表
--exclude-domains=LIST
	逗号分隔的要拒绝的域列表
--follow-ftp
	跟踪 HTML 文档中的 FTP 链接
--follow-tags=LIST
	逗号分隔的跟踪的 HTML 标识列表
--ignore-tags=LIST
	逗号分隔的忽略的 HTML 标识列表
-H,  --span-hosts
	递归时转向外部主机
-L,  --relative
	只跟踪有关系的链接
-I,  --include-directories=LIST
	允许目录的列表
--trust-server-names
	在重定向时，重定向 URL 的最后一个组件将用作本地文件名。默认情况下，它是原始 URL 中的最后一个组件
-X,  --exclude-directories=LIST
	排除目录的列表
-np, --no-parent
	不追溯至父目录
--ignore-case
	匹配文件/目录时忽略大小写
```

## 4.常用示例
（1）使用 wget 下载单个文件。

比如下载 git 的 Windows 客户端 [git for windows](https://gitforwindows.org/)。 
```
wget https://github.com/git-for-windows/git/releases/download/v2.25.1.windows.1/Git-2.25.1-32-bit.tar.bz2
```
wget 虽然有很多选项，但是最常用的是不带任何选项，给定文件的 url 进行下载。

（2）下载单个文件，使用指定的文件名保存。
```
wget -O GitForWindows.tar.bz2 https://github.com/git-for-windows/git/releases/download/v2.25.1.windows.1/Git-2.25.1-32-bit.tar.bz2
```
（3）使用 wget  -b 将 wget 放在后台执行。
```
wget -b https://github.com/git-for-windows/git/releases/download/v2.25.1.windows.1/Git-2.25.1-32-bit.tar.bz2
Continuing in background, pid 9369.
Output will be written to 'wget-log'.
```
对于下载非常大的文件的时候，我们可以使用参数 -b 进行后台下载，可以使用命令`tail -f wget-log`查看 wget 的日志文件 wget-log 来察看下载进度。

（4）使用 wget -c 断点续传。
```
wget -c https://github.com/git-for-windows/git/releases/download/v2.25.1.windows.1/Git-2.25.1-32-bit.tar.bz2
```
使用 wget -c 重新启动下载中断的文件，对于我们下载大文件时突然由于网络等原因中断非常有帮助，我们可以继续接着下载而不是重新下载一个文件。

（5）使用 wget --spider 测试下载链接。
```
wget --spider https://github.com/git-for-windows/git/releases/download/v2.25.1.windows.1/Git-2.25.1-32-bit.tar.bz2
```
（6）现在多个文件。每个文件的下载链接统一存放在一个文件中。
```
wget -i filelist.txt
```
（7）使用 wget -o 将下载过程中的日志信息存入到日志文件，而不是输出到终端。
```
wget -o wget.log https://github.com/git-for-windows/git/releases/download/v2.25.1.windows.1/Git-2.25.1-32-bit.tar.bz2
```

---
## 参考文献
[wget(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/wget.1.html)

[CSDN.【Linux】一步一步学Linux——wget命令(192)](https://blog.csdn.net/dengjin20104042056/article/details/100145281)

[GNU wget 官网](https://www.gnu.org/software/wget/)
