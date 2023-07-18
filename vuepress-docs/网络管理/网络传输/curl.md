## 1.命令简介
curl 是一种从服务器下载或向服务器传输数据的工具。

它支持文件的上传和下载，是综合传输工具，但按使用习惯，一般称 curl 为下载工具。curl 被设计为无需用户交互即可工作。

curl 作为一款强大的下载工具，支持包括 HTTP、HTTPS、FTP、SFTP、SCP 等众多协议，还提供了大量有用的技巧，如代理支持、用户身份验证、FTP 上传、HTTP post、SSL 连接、文件传输恢复、Metalink 等等。

一般我们使用 curl 作为 HTTP(s) 的客户端访问指定链接。

## 2.命令格式
```shell
curl [OPTIONS] [URL...]
```

## 3.选项说明
```shell
-#, --progress-bar
	显示进度条
-a, --append
	上传文件时，附加到目标文件
-A, --user-agent STRING
	设置用户代理发送给服务器
--anyauth
	可以使用“任何”身份验证方法
-b, --cookie NAME=STRING | FILE
	指定 cookie 字符串或从指定的文件中读取 cookie。如果有多个 NAME=STRING 使用分号分隔。
--basic
	使用 HTTP 基本验证
-B, --use-ascii
	使用 ASCII 文本传输
-c, --cookie-jar FILE
	将自动将从服务器接收到的任何 cookie 保存到指定的文件中。
-C, --continue-at OFFSET
	断点续转
-d, --data DATA
	以 HTTP POST 方式传送指定格式的数据。如 JSON 串，相应地 Header 中的 Content-Type 字段需设为 application/json。如果传输文件，使用选项 -T
--data-ascii DATA
	以 ascii 的方式 post 数据
--data-binary DATA
	以二进制的方式 post 数据
--negotiate
	使用 HTTP 身份验证
--digest
	使用数字身份验证
--disable-eprt
	禁止使用 EPRT 或 LPRT
--disable-epsv
	禁止使用 EPSV
-D, --dump-header FILE
	把 header 信息写入到指定文件中
--egd-file FILE
 	为随机数据(SSL)设置EGD socket路径
--tcp-nodelay
	使用 TCP_NODELAY 选项
-e, --referer
	来源网址
-E, --cert CERT[:PASSWD]
	客户端证书文件和密码 (SSL)
 --cert-type TYPE
 	证书文件类型 (DER/PEM/ENG) (SSL)
--key KEY
	私钥文件名 (SSL)
--key-type TYPE
	私钥文件类型 (DER/PEM/ENG) (SSL)
--pass PASS
	私钥密码 (SSL)
--engine NAME
	选择用于密码操作的OpenSSL加密引擎
--cacert FILE
	CA 证书 (SSL)
--capath <directory>
	CA 目录 (made using c_rehash) to verify peer against (SSL)
--ciphers LIST
	SSL 密码
--compressed
	要求返回是压缩的形势 (using deflate or gzip)
--connect-timeout SECONDS
	设置最大请求时间
--create-dirs
	建立本地目录的目录层次结构
--crlf
	上传是把 LF 转变成 CRLF
-f, --fail
	连接失败时不显示 http 错误
--ftp-create-dirs
	如果远程目录不存在，创建远程目录
--ftp-method [multicwd/nocwd/singlecwd]
	控制 CWD 的使用
--ftp-pasv
	使用 PASV/EPSV 代替端口
--ftp-skip-pasv-ip
	使用 PASV 的时候，忽略该IP地址
--ftp-ssl
	尝试用 SSL/TLS 来进行 ftp 数据传输
--ftp-ssl-reqd
	要求用 SSL/TLS 来进行 ftp 数据传输
-F, --form NAME=CONTENT
	模拟 HTTP 表单提交数据。
--form-string NAME=STRING
	模拟 http 表单提交数据
-g, --globoff
	禁用网址序列和范围使用 {} 和 []
-G, --get
	以get的方式来发送数据
-H, --header LINE
	自定义头信息传递给服务器
--ignore-content-length
	忽略的 HTTP 头信息的长度
-i, --include
	输出时包括 protocol 头信息
-I, --head
	只显示请求头信息
-j, --junk-session-cookies
	读取文件进忽略 session cookie
--interface INTERFACE
	使用指定网络接口/地址
--krb4 LEVEL
	使用指定安全级别的 krb4
-k, --insecure
	允许不使用证书到SSL站点
-K, --config
	指定的配置文件读取
-l, --list-only
	列出ftp目录下的文件名称
--limit-rate RATE
	设置传输速度
--local-port NUM[-NUM]
	强制使用本地端口号
-L, --location
	如果（HTTP/HTTPS）服务器报告请求的页面已移动到其他位置，此选项将使 curl 在新位置上重做请求。使用身份验证时，curl 只将其凭据发送到初始主机。如果重定向将 curl 转移到其他主机，它将无法截获用户+密码。另请参见选项 --location-trusted，了解如何更改此设置。您可以使用--max-redirs 选项限制要执行的重定向次数
--location-trusted
	（HTTP/HTTPS）类似于-L，--location，但允许向站点可能重定向到的所有主机发送名称+密码。这可能会导致安全漏洞因为如果使用 HTTP 协议明文传输用户名+密码
-m, --max-time SECONDS
	设置请求处理超时时间（含建立连接的耗时）
--max-redirs NUM
	设置最大重定向次数
--max-filesize BYTES
	设置最大下载的文件总量
-M, --manual
	显示全手动
-n, --netrc
	从 netrc 文件中读取用户名和密码
--netrc-optional
	使用 .netrc 或者 URL来覆盖 -n
--ntlm
	使用 HTTP NTLM 身份验证
-N, --no-buffer
	禁用缓冲输出
-o, --output FILE
	把输出写到指定文件中
-O, --remote-name
	把输出写到与远程文件同名的本地文件中
-p, --proxytunnel
	使用 HTTP 代理
--proxy-anyauth
	选择任一代理身份验证方法
--proxy-basic
	在代理上使用基本身份验证
--proxy-digest
	在代理上使用数字身份验证
 --proxy-ntlm
 	在代理上使用 ntlm 身份验证
-P, --ftp-port ADDRESS
	使用端口地址，而不是使用PASV
-q, --disable
	作为第一个参数，关闭 .curlrc
-Q, --quote CMD
	文件传输前，发送命令到服务器
-r/--range RANGE
	检索来自HTTP/1.1或FTP服务器字节范围
--range-file
	读取（SSL）的随机文件
-R, --remote-time
	在本地生成文件时，保留远程文件时间
--retry NUM
	传输出现问题时，重试的次数
--retry-delay SECONDS
	传输出现问题时，设置重试间隔时间
--retry-max-time SECONDS
	传输出现问题时，设置最大重试时间
-s, --silent
	静默模式。不输出任何东西
-S, --show-error
	显示错误
--socks4 HOST[:PORT]
	用 socks4 代理给定主机和端口
--socks5 HOST[:PORT]
	用 socks5 代理给定主机和端口
--stderr FILE
	将对 stderr 的所有写入重定向到指定的文件
-t, --telnet-option OPT=VAL
	Telnet 选项设置
--trace FILE
	对指定文件进行 debug
--trace-ascii FILE
	启用对所有传入和传出数据（包括描述性信息）的完整跟踪转储到给定文件。使用“-”作为文件名将输出发送到 stdout
--trace-time
	跟踪详细输出时，添加时间戳
-T, --upload-file FILE
	上传文件
--url URL
	指定要提取的 URL
-u, --user USER[:PASSWORD]
	设置服务器的用户和密码
-U, --proxy-user USER[:PASSWORD]
	设置代理用户名和密码
-v, --verbose
	打印更多信息，主要用于调试
-V, --version
	显示有关 curl 及其使用的 libcurl 版本的信息
-w, --write-out FORMAT
	什么输出完成后
-x, --proxy HOST[:PORT]
	在给定的端口上使用HTTP代理
-X, --request COMMAND
	指定与 HTTP 服务器通信时使用的自定义请求方法，默认为 GET
-y, --speed-time
	放弃限速所要的时间，默认为30
-Y, --speed-limit
	停止传输速度的限制，速度时间
```

## 4.常用示例
- 发起 HTTP GET 请求。

```bash
curl -X GET 'http://9.138.158.214:10000?advertiser_id=93&auth_code=AUTH_CODE' -H 'Content-Type:application/json' -d '{"action_time":1591100087,"ad_id":"101642"}'
```
如果 URL 携带参数，需要使用单引号或双引号将 URL 引起来，因为字符 & 是 Shell 特殊字符，或使用反斜杠对其转义。

注意，GET 请求可以携带包体。虽然 HTTP 规范允许 GET 请求发送请求体，但大多数 Web 服务器和客户端库在处理 GET 请求时会忽略请求体。也就是说，大多数 Web 服务器和客户端库并不期望在 GET 请求中包含请求体，并且可能会忽略或拒绝处理请求体中的数据。

HTTP/1.1 规范（RFC 7231）中指出：
>A payload within a GET request message has no defined semantics; sending a payload body on a GET request might cause some existing implementations to reject the request.

也就是说 HTTP/1.1 规范虽然允许 GET 请求发送请求体，但是不建议这么做，因为 GET 请求被定义为获取资源的操作，而不是在请求体中发送数据。

- 获取网页数据。
```bash
curl https://www.baidu.com
```
执行后，百度官网的网页内容就会显示在屏幕上了。

- 保存网页内容。
```bash
curl https://www.baidu.com > baidu_index.html
# 或
curl https://www.baidu.com -o baidu_index.html
```

- 静默模式下载文件。注意 URL 在最后要具体到某个文件，不然无法下载。
```bash
curl -s -O  https://dl.softmgr.qq.com/original/im/QQ9.3.3.27011.exe
```

- 下载文件时显示进度条。
```bash
curl -#  -O  https://dl.softmgr.qq.com/original/im/QQ9.3.3.27011.exe
######################################################################## 100.0%
```

- 访问需要授权的页面时，可通过 -u 选项提供用户名和密码进行授权。
```bash
curl -u root  https://github.com/jindeng/sz14.git
Enter host password for user 'root':
```

- 只打印响应头部信息。
```bash
curl (-I | --head) https://github.com/jindeng/sz14.git
```

- 限制 curl 的下载速度。
```bash
curl URL --limit-rate 50k
```
使用 --limit-rate 限制 curl 的下载速度，命令中用 k（千字节）和 m（兆字节）指定下载速度限制。

- 指定可下载的最大文件大小。
```bash
curl URL --max-filesize bytes
```
使用 --max-filesize 指定可下载的最大文件大小，如果文件大小超出限制，命令则返回一个非 0 退出码，如果命令正常则返回 0。

- 用 curl 设置用户代理。
```bash
curl URL -A "Mozilla/5.0"
```
有些网站访问会提示只能使用 IE 浏览器来访问，这是因为这些网站设置了检查用户代理，可以使用curl把用户代理设置为IE，这样就可以访问了。使用 -A 或者 --user-agent 选项。

- 自定义头信息传递给服务器。使用多个 -H 选项可传递多个头部信息。
```bash
curl -H "Host:man.linuxde.net" -H "accept-language:zh-cn" URL
```

- 设置 cookie。

使用 -b 或 --cookie 选项来指定 cookie，多个 cookie 使用分号分隔。
```bash
curl URL --cookie "user=root;pass=123456"
```
如果想将从服务器接收到的任何 cookie 保存到指定的文件中，使用 -c 或 --cookie-jar 选项。
```bash
curl URL --cookie-jar FILE
```

- curl 设置参照页字符串。使用 --referer 选项指定参照页字符串。
```bash
curl --referer URL1 URL2
```
参照页是位于 HTTP 头部中的一个字符串，用来表示用户是从哪个页面到达当前页面的，如果用户点击网页 A 中的某个连接，那么用户就会跳转到B网页，网页 B 头部的参照页字符串就包含网页 A 的 URL。

- 断点续传。curl 能够从特定的文件偏移处继续下载，它可以通过指定一个便移量来下载部分文件。
```bash
curl URL/File -C OFFSET
```
偏移量是以字节为单位的整数，如果让 curl 自动推断出正确的续传位置使用：
```bash
curl -C - URL
```

- 连接失败时不显示 http 错误。
```bash
curl -f https://unknow.com
```

- 通过 ftp 上传。
```bash
curl -T test.sql ftp://用户名:密码@ip:port/demo/curtain/bbstudy_files/ 
```

- 通过 ftp下载。
```bash
curl -u 用户名:密码 -O URL
```

---
## 参考文献
[curl(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/curl.1.html)

[CSDN.【Linux】一步一步学Linux——curl命令(193)](https://blog.csdn.net/dengjin20104042056/article/details/100145300)

<Vssue title="curl" />