## 1.命令简介
lsof（list open files）用于查看进程打开的文件，是十分方便的系统监测工具。因为 lsof 命令需要访问核心内存和各种系统文件，所以需要 root 权限才可执行。

在 Linux 中，一切皆文件。通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件，所以 lsof 不仅可以查看进程打开的普通文件、目录，还可以查看进程监听的端口和 socket 等相关的信息。进程打开的每一个文件，系统在后台都会为之分配一个文件描述符，无论这个文件的本质如何。该文件描述符为应用程序与基础操作系统之间的交互提供了通用接口，因为应用程序打开的文件描述符列表提供了大量关于应用程序本身的信息，通过 lsof 能够查看这个列表，对系统监测以及排错很有帮助。

lsof 查看的打开文件可以是：
```
普通文件
目录
字符或块设备文件
共享库
管道、命名管道
符号链接
网络文件（如 NFS file、网络 socket，Unix 域名 socket）
其它类型的文件，等等
```

## 2.命令格式
```
lsof [OPTIONS] [--] [NAMES]
```
在没有任何选项的情况下，lsof 列出所有属于活动进程的打开文件。

## 3.选项说明
```
-?, -h 
	显示帮助信息
-a
参数被视为逻辑与 AND，会影响全部的参数
-A A
	在配置了 AFS 分布式网络文件系统的系统上可用，其 AFS 内核代码是通过动态模块实现的。通过 A 指定备用名称列表文件，在该文件中可以找到动态模块的内核地址
-b
	避免 lsof 因调用可能阻塞的内核函数而产生阻塞，比如 lstat(2)、readlink(2) 和 stat(2) 等内核函数
-c C
	显示出以字符或字符串 C 开头的命令程序开启的文件，如 lsof -c init。如果 C 以斜杠 / 开头和结尾，则斜杠之间的字符被解释为正则表达式。该选项可多次指定
+c W
	指定 COMMAND 列的宽度，单位字符。默认为 9
-C
	禁用从内核的名称缓存中报告任何路径名
-D D
	指导 lsof 使用设备缓存文件。该选项的使用有时受到限制。-D 必须后面跟着一个函数字母，函数字母后面可以有一个路径名称。lsof 识别以下功能字母：
	?	报告设备缓存文件路径
	b	构建设备缓存文件
	i	忽略设备缓存文件
	r	读取设备缓存文件
	u	读取并更新设备缓存文件
+D D
	递归搜索目录 D。如显示在 /usr/local 及其子目录下被程序开启的文件：lsof +D /usr/local
+d D
	 非递归搜索目录 D。如显示在 /usr/local 下被程序开启的文件：lsof +d /usr/local
-d FD
	指定文件描述符列表，可以采用逗号分隔，也可以指定范围。比如 1,2,3 或 1-3。如果前面包含尖号，表示排除。如显示 FD 为 4 的进程：lsof -d 4
+|-e S
	豁免（exempt）路径名称为 S 的文件系统不受可能阻塞的内核函数调用的影响。+e 选项豁免 stat(2)、lstat(2) 和大多数 readlink(2) 内核函数调用。-e 选项只能豁免 stat(2) 和 lstat(2) 内核函数调用
+|-E
	+E 指定使用端点信息显示 Linux 管道、Linux UNIX 套接字和 Linux 伪终端文件，并显示端点的文件。-E 则不显示端点的文件
-F LIST
	指定字符列表 LIST，选择输出给另一程序处理的字段，各字段对应的字符见下文
+|-f [cfgGn]
	f 本身澄清了路径名参数的解释方式。当后面跟着 c、f、g、G 或 n 时，它指定要启用（+）或抑制（-）内核文件结构信息。
	c 文件结构使用计数（not Linux）
	f 文件结构地址（not Linux）
	g 文件标志缩写（Linux 2.6.22 及更高版本）
	G 十六进制文件标志（Linux 2.6.22 及更高版本）
	n 文件结构节点地址（not Linux）
-g [PGID]
	选择或排除属于指定进程组的进程打开的文件。 进程组 ID 使用逗号分隔，如果 PGID 前面包含尖号，表示排除。若没有指定 PGID，则显示全部。如显示 PGID 为 6 和 7 的进程：lsof -g6,7
-i [I]
	选择其 Internet 地址与 -i 中指定的地址匹配的文件，若没有相关地址被指定，则监听全部。
	用法： lsof -i [46][protocol][@hostname|hostaddr][:serivce|port]
	说明：4 6 分别表示 IPv4 和 IPv6   
    protocol： TCP or UDP   
    hostname：主机名
    hostaddr：IPv4 或 IPv6 地址
    service：主机提供的服务的名称，即 /etc/services 中的 service name
    port：端口号
-K
	在支持任务（线程）报告方式的系统上输出进程的任务（线程）列表
-k K
	指定内核名称列表文件，代替 /vmunix、/mach 等
-l
	禁止将 user ID 转换为登录的名称，默认是登录名称
+|-L [L]
	+ 或 - 表示开启或关闭显示文件连接数，如果只有单纯的 +L，后面没有任何数字，则表示显示全部，如果后面有数字，只有文件连接数少于该数字的会被列出
+|-m M
	-m 指定一个内核内存文件 M ，代替 /dev/kmem 或 /dev/mem。+m 将装载补充文件写入标准输出文件
+|-M
	启用或禁用报告本地 TCP、UDP 和 UDPLITE 端口的端口映射器注册
-n
	不将 IP 地址转换为主机名
-N
	显示 NFS 文件
-o
	始终显示文件偏移量。它导致 SIZE/OFF 输出列标题更改为 OFFSET
-o O
	指定在文件偏移量的 0t 之后要打印的小数位数
-O
	指示 lsof 避免被某些内核操作阻塞。即在分叉的子进程中执行它们。虽然使用此选项将减少 lsof 启动开销，但也可能导致 lsof 在内核不响应函数时挂起。谨慎使用此选项
-P
	禁止将网络文件的端口号转换为端口名
-p S
	排除或选择进程的文件列表，进程 ID 列表使用逗号分隔，如 123 或 123,^456。尖号表示排除指定 PID
-R
	使用列 PPID 列出父进程的 PID
+|-r [T[mFMT]]
 	控制 lsof 不断重复执行，间隔 T 秒，默认为 15s。-r 永远不断地执行，直到收到中断讯号（ctrl+ c），+r 一直执行，直到没有文件被显示。可选的 mFMT 参数指定标记线的格式，格式 FMT 遵循 C 语言标准库函数 strftime(3) 的规范
-S [T]
	指定内核函数 lstat(2)、readlink(2) 和 stat(2) 的可选超时秒值，否则可能会死锁。t 的最小值是 2；默认值是 15
-s [P:S]
	列出文件的大小，若该文件没有大小，则留下空白。它导致 SIZE/OFF 输出列标题更改为 SIZE。P 表示协议名称 TCP  or  UDP，S 表示逗号分隔的协议状态
-T [T]
	-T 没有参数则禁用 TCP/TPI 信息报告。跟如下参数，则显示指定 TCP/TPI 信息：
	f 选择报告套接字选项，状态和值，以及 TCP标志和值
	q 选择队列长度
	s 选择连接状态
	w 选择窗口大小
-t
	生成只有进程标识符而没有标题的简洁输出，这样输出可以通过管道传递给 kill(1) 杀死
-U
	选择 UNIX 域套接字文件的列表
-u USERS
	选择登录名或用户 ID 位于逗号分隔集 USERS 中的用户的文件列表。如 root 或 548,root”，如果用户名或用户 ID 前有尖号 ^，表示排除
-V
	指示被要求列出但找不到的项
-v
    显示版本信息
+|-w
	   启用（＋）或禁用（－）警告消息
-X
	Linux 下跳过所有打开的 TCP、UDP 和 UDPLITE IPv4 和 IPv6 文件的信息报告
-x [fl]
	一般与选项 +d 和 +D 选项，指示搜索时是否跨文件系统和符号链接。-x 不跟任何参数时，表示跨文件系统和符号链接
-Z [Z]
	指定如何处理 SELinux 安全上下文。当在运行的 Linux 内核中禁用SELinux时，Z 字段将被抑制输出。-Z 选项不跟参数，如 -Z -，安全上下文将列在 SECURITY-CONTEXT 列中输出
--
	双减号表示选项结束
NAMES
	列出指定文件，符号链接在使用前将被解析
```

## 4.输出字段说明

当指定了 -F 选项时，lsof 将生成适合由另一个程序（如 awk 或 Perl 脚本或 C 程序）处理的输出。

下面是 lsof 可输出的字段。单个字符表示字段标识符。
```
a	文件访问模式
c	进程命令名
C	文件结构共享计数
d	文件的设备字符码
D	文件的主要/次要设备号
F	文件结构地址
f	文件描述符
G	文件标志
g	进程组 ID
i	文件 inode 编号
K	任务 ID
k	链接计数
L	进程登录名
m	重复输出之间的标记
N	节点标识符
n	文件名、注释、Internet 地址
o	文件偏移量（十进制）
P	协议名称
p	进程 ID
R	父进程 ID
r	原始设备号
S	文件的流标识
s	文件大小（十进制）
T	TCP/TPI 信息
t	文件类型
u	进程用户 ID
Z	SELinux 安全上下文（禁用 SELinux 时禁用）
z	Solaris 10 及更高版本的区域名
0	使用NUL字段结束符字符代替NL
1-9	系统特定的字段标识符
```
可以使用命令 `lsof -F?` 查看上面字段的说明信息。

## 5.常用示例
（1）无任何参数，列出所有属于活动进程的打开文件。
```
lsof | head
COMMAND     PID   TID USER   FD      TYPE             DEVICE SIZE/OFF       NODE NAME
systemd       1       root  cwd       DIR              252,1     4096          2 /
systemd       1       root  rtd       DIR              252,1     4096          2 /
systemd       1       root  txt       REG              252,1  1616248      47908 /usr/lib/systemd/systemd
systemd       1       root  mem       REG              252,1    20032      25897 /usr/lib64/libuuid.so.1.3.0
systemd       1       root  mem       REG              252,1   252704      25043 /usr/lib64/libblkid.so.1.1.0
systemd       1       root  mem       REG              252,1    90632      25988 /usr/lib64/libz.so.1.2.7
systemd       1       root  mem       REG              252,1   153192      25496 /usr/lib64/liblzma.so.5.0.99
systemd       1       root  mem       REG              252,1    23968      25065 /usr/lib64/libcap-ng.so.0.0.0
systemd       1       root  mem       REG              252,1    19888      25018 /usr/lib64/libattr.so.1.1.0
```
lsof 输出各列信息的意义如下：
```
COMMAND：进程的名称
PID：进程标识符
TID：任务 ID。Linux 下 TID 为空表示该行为进程
USER：进程所有者
FD：文件描述符。主要有：
	cwd：应用程序当前工作目录，这是该应用程序启动的目录，除非它本身对这个目录进行更改
	txt：该类型的文件是程序代码，如应用程序二进制文件本身或共享库，如上列表中显示的 /sbin/init 程序
	lnn：库引用（AIX）
	err：FD 信息错误
	jld：监狱目录（FreeBSD）
	ltx：共享库文本（代码和数据）
	mxx：十六进制内存映射类型号 xx
	m86：DOS合并映射文件
	mem：内存映射文件
	mmap：内存映射设备
	pd：父目录
	rtd：根目录
	tr：内核跟踪文件（OpenBSD）
	v86：VP/ix 映射文件
	0：标准输出
	1：标准输入
	2：标准错误
	
	文件描述符后一般还跟着文件状态模式：
	r：只读模式
	w：写入模式
	u：读写模式
	空格：文件的状态模式为 unknow，且没有锁定
	-：文件的状态模式为 unknow，且被锁定
	
	同时在文件状态模式后面，还跟着相关的锁：
	N：对于未知类型的 Solaris NFS 锁
	r：文件部分的读锁
	R：整个文件的读锁
	w：文件的部分写锁
	W：整个文件的写锁
	u：任何长度的读写锁
	U：用于未知类型的锁
	x：用于部分文件上的 SCO OpenServer Xenix 锁
	X：用于整个文件上的 SCO OpenServer Xenix 锁
	space：无锁

TYPE：文件类型。常见的文件类型有：
	REG：普通文件
	DIR：表示目录
	CHR：表示字符类型
	BLK：块设备类型
	UNIX：UNIX 域套接字
	FIFO：先进先出队列
	IPv4：IPv4 套接字
DEVICE：磁盘名称
SIZE：文件的大小或文件偏移量（以字节为单位）
NODE：索引节点
NAME：打开文件的确切名称
```

（2）查看谁正在使用某个文件，也就是说查找某个文件相关的进程。
```
lsof /bin/bash
COMMAND     PID USER  FD   TYPE DEVICE SIZE/OFF  NODE NAME
watchdog.  7639 root txt    REG  252,1   922760 45210 /usr/bin/bash
bash       8591 root txt    REG  252,1   922760 45210 /usr/bin/bash
bash       9694 root txt    REG  252,1   922760 45210 /usr/bin/bash
bash      20151 root txt    REG  252,1   922760 45210 /usr/bin/bash
```
（3）递归查看某个目录下所有被打开的文件信息。
```
lsof +D ./test
COMMAND  PID USER   FD   TYPE DEVICE SIZE/OFF   NODE NAME
bash    8518 root  cwd    DIR  252,1     4096 799036 ./test/shell
```
（4）列出某个用户打开的文件信息。
```
lsof -u root
```
（5）列出某个进程所打开的文件信息。
```
 lsof -c sshd
```
-c 选项将会列出所有以 sshd 开头的进程所打开的文件。其实也可以通过命令`lsof | grep sshd`来查看，但是第一种方法更加简洁。

（6）列出多个进程打开的文件信息。
```
lsof -c mysql -c apache
```
（7）列出某个用户以及某个进程所打开的文件信息。
```
lsof -u test -c mysql 
```
注意，-u 与 -c 选项之间是或的关系。可以使用 -

（8）列出除了某个用户外的所有被打开的文件信息。
```
lsof -u ^root
```
尖号 ^ 在用户名之前，表示排除在外，即不显示 root 用户所打开的文件信息。

（9）通过某个进程号显示该进程打开的文件。
```
lsof -p 1
```
（10）列出多个进程号对应的文件信息。
```
lsof -p 1,2,3
```
（11）列出除了某个进程号，其他进程号所打开的文件信息。
```
lsof -p ^1
```
（12）列出所有的网络连接。
```
lsof -i
```
（13）列出所有的 TCP 网络连接信息。
```
lsof -i tcp
```
（14）列出所有 UDP 网络连接信息。
```
lsof -i udp
```
（15）列出谁在使用某个端口。
```
lsof -i :3306
```
（16）列出谁在使用某个特定的 UDP 或 TCP 端口。
```
lsof -i udp:55
lsof -i tcp:80
```
（17）列出某个用户的所有活跃的网络端口。
```
lsof -a -u test -i
```
（18）列出所有网络文件系统。
```
lsof -N
```
（19）选择 UNIX 域套接字文件的列表。
```
lsof -U
```
（20）查看某个用户组所打开的文件信息。
```
lsof -g 5555
```
（21）根据指定文件描述符的文件信息。
```
lsof -d txt
lsof -d 1
lsof -d 2
```
0 表示标准输入，1 表示标准输出，2 表示标准错误，从而可知：所以大多数应用程序所打开的文件的 FD 都是从 3 开始。

（22）查看指定文件描述符范围的文件信息。
```
lsof -d 2-3
```
（23）列出 COMMAND 列中包含字符串 sshd 且文件描符的类型为 txt 的文件信息。
```
lsof -c sshd -a -d txt
COMMAND   PID USER  FD   TYPE DEVICE SIZE/OFF  NODE NAME
sshd     8254 root txt    REG  252,1   819608 27632 /usr/sbin/sshd
sshd    20149 root txt    REG  252,1   819608 27632 /usr/sbin/sshd
```
（24）列出被进程号为 1234 的进程所打开的所有 IPV4 网络文件。
```
lsof -p 1234 -a -i 4
```
（25）列出目前连接主机 peida.linux 上端口为：20，21，22，25 相关的所有文件信息，且每隔 3 秒不断地执行 lsof 指令。
```
lsof -i @peida.linux:20,21,22,25 -r 3
```

---
## 参考文献
[lsof(8) — Linux manual page - man7.org](http://man7.org/linux/man-pages/man8/lsof.8.html)

[百度百科.Andrew文件系统](https://baike.baidu.com/item/Andrew%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F)

[每天一个linux命令（51）：lsof命令 - 博客园](https://www.cnblogs.com/peida/archive/2013/02/26/2932972.html)

<Vssue title="lsof" />