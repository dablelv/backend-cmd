(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{547:function(t,e,a){"use strict";a.r(e);var s=a(12),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-命令简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),e("p",[t._v("netstat 命令用来打印 Linux 系统的网络状态信息，包括网络连接（network connections）、路由表（routing tables）、网络接口设备统计信息（interface statistics）、伪连接（masquerade connections）和多播成员信息（multicast memberships）等，得知 Linux 系统网络的整体情况。")]),t._v(" "),e("p",[t._v("如我们可以通过 netstat 获知系统当前被监听的端口号列表。")]),t._v(" "),e("p",[t._v("netstat 是通过读取 /proc/net/ 路径下的 tcp、udp、unix 等文件来获取连接信息的。")]),t._v(" "),e("h2",{attrs:{id:"_2-命令格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat [OPTIONS]\n")])])]),e("h2",{attrs:{id:"_3-选项说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("-a, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--all")]),t._v("\n\t显示所有网络连接\n-A，--protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("FAMILY\n\t列出指定地址族的连接信息。FAMILY 为逗号分隔的地址族关键字列表，比如inet，inet6，unix，ipx，ax25，netrom，econet 和 ddp 等\n-c,--continuous\n\t每隔 1s 刷新网络状态\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v("\n\t从路由缓存获取路由信息\n-e, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--extend")]),t._v("\n\t显示网络其他相关信息\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-F")]),t._v("\n\t显示 FIB 中的路由信息"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认选项"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n-g, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--g")]),t._v("\n\t显示 IPv4 和 IPv6 的多播组成员关系信息\n-h, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("\n\t显示帮助信息\n-i, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-I")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("IFACE, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--interfaces")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("IFACE\n\t显示所有网络接口或指定的网络接口\n-l, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--listening")]),t._v("\n\t显示监听中的套接字"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认选项"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n-M, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--masquerade")]),t._v("\n\t显示伪装的网络连接\n-n, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--numeric")]),t._v("\n\t以数字形式而不是以符号显示主机、端口或用户名。\n--numeric-hosts\n\t以数字形式显示主机地址\n--numeric-ports\n\t以数字形式显示端口号\n--numeric-users\n\t以数字形式显示用户名\n-N, --netlink, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--symbolic")]),t._v("\n\t显示网络硬件外围设备的符号连接名称\n-o, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--timers")]),t._v("\n\t显示计时器\n-p, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--programs")]),t._v("\n\t显示正在使用 Socket 的进程 ID 和进程名\n-r, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--route")]),t._v("\n\t显示内核路由表。命令 route "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" 会产生同样的结果\n-s, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--statistice")]),t._v("\n\t显示每种协议的统计信息\n-t, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tcp")]),t._v("\n\t显示TCP传输协议的连接状况\n-u, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--udp")]),t._v("\n\t显示 UDP 传输协议的连接状况\n-v, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--verbose")]),t._v("\n\t显示指令执行过程。特别是打印一些关于未配置地址族的有用信息\n-V, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n\t显示版本信息\n-w, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--raw")]),t._v("\n\t显示 RAW 传输协议的连接状况\n-x, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--unix")]),t._v("\n\t此参数的效果和指定 "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-A unix"')]),t._v(" 参数相同\n--ip, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--inet")]),t._v("\n\t此参数的效果和指定 "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-A inet"')]),t._v(" 参数相同\n")])])]),e("h2",{attrs:{id:"_4-常用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),e("p",[t._v("（1）列出所有端口信息（包括监听和未监听的）。")]),t._v(" "),e("ul",[e("li",[t._v("列出所有端口。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -an\n Active Internet connections (servers and established)\n Proto Recv-Q Send-Q Local Address           Foreign Address         State\n tcp        0      0 localhost:30037         *:*                     LISTEN\n udp        0      0 *:bootpc                *:*\n \nActive UNIX domain sockets (servers and established)\n Proto RefCnt Flags       Type       State         I-Node   Path\n unix  2      [ ACC ]     STREAM     LISTENING     6135     /tmp/.X11-unix/X0\n unix  2      [ ACC ]     STREAM     LISTENING     5140     /var/run/acpid.socket\n ...\n")])])]),e("ul",[e("li",[t._v("列出所有 tcp 端口。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -ant\n")])])]),e("ul",[e("li",[t._v("列出所有 UDP 端口。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -anu\n")])])]),e("p",[t._v("（2）列出所有处于监听状态的连接。")]),t._v(" "),e("ul",[e("li",[t._v("显示处于监听状态的所有连接。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -ln\n Active Internet connections (only servers)\n Proto Recv-Q Send-Q Local Address           Foreign Address         State\n tcp        0      0 localhost:ipp           *:*                     LISTEN\n tcp6       0      0 localhost:ipp           [::]:*                  LISTEN\n udp        0      0 *:49119                 *:*\n")])])]),e("ul",[e("li",[t._v("只显示处于监听状态的 tcp 连接。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -lnt\n")])])]),e("ul",[e("li",[t._v("只显示处于监听状态的 udp 连接。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -lnu\n")])])]),e("ul",[e("li",[t._v("只显示处于监听状态的 unix 连接。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -lnx\n")])])]),e("p",[t._v("（3）显示每个协议的统计信息。")]),t._v(" "),e("ul",[e("li",[t._v("显示所有端口的统计信息。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -s\n Ip:\n 11150 total packets received\n 1 with invalid addresses\n 0 forwarded\n 0 incoming packets discarded\n 11149 incoming packets delivered\n 11635 requests sent out\n Icmp:\n 0 ICMP messages received\n 0 input ICMP message failed.\n Tcp:\n 582 active connections openings\n 2 failed connection attempts\n 25 connection resets received\n Udp:\n 1183 packets received\n 4 packets to unknown port received.\n .....\n")])])]),e("ul",[e("li",[t._v("显示 TCP 端口的统计信息。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -st \n")])])]),e("ul",[e("li",[t._v("显示 UDP 端口统计信息。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -su\n")])])]),e("p",[t._v("（4）显示进程 ID 和名称。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -p\nActive Internet connections (w/o servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    \ntcp        0      0 10.234.178.144:43538    100.113.169.225:31415   ESTABLISHED -                   \ntcp        0      0 10.234.178.144:33295    10.121.151.35:sd        ESTABLISHED 5354/VipMQAgent     \ntcp        0      0 10.234.178.144:21095    100.92.40.70:bacula-dir ESTABLISHED 25164/pgg_login_cme\n")])])]),e("p",[t._v("（5）以数字形式显示主机、端口和用户名。这样可以加速输出，因为不用进行比对查询。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -n\nActive Internet connections (w/o servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State      \ntcp        0      0 10.234.178.144:43538    100.113.169.225:31415   ESTABLISHED\ntcp        0      0 10.234.178.144:33295    10.121.151.35:9876      ESTABLISHED\n")])])]),e("p",[t._v("如果只是不想让这三个名称中的一个被显示，使用以下命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netsat -a --numeric-ports\nnetsat -a --numeric-hosts\nnetsat -a --numeric-users\n")])])]),e("p",[t._v("（6）每隔一秒持续输出 netstat 信息。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -c\n")])])]),e("p",[t._v("（7）显示系统不支持的地址族 (Address Families)。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat --verbose\n")])])]),e("p",[t._v("在输出的末尾，会有如下的信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat: no support for `AF IPX' on this system.\nnetstat: no support for `AF AX25' on this system.\nnetstat: no support for `AF X25' on this system.\nnetstat: no support for `AF NETROM' on this system.\n")])])]),e("p",[t._v("（8）显示核心路由信息。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -r\nKernel IP routing table\nDestination     Gateway         Genmask         Flags   MSS Window  irtt Iface\n0.0.0.0         0.0.0.0         0.0.0.0         U         0 0          0 tunnat\n9.0.0.0         10.175.82.193   255.0.0.0       UG        0 0          0 eth1\n10.0.0.0        10.175.82.193   255.0.0.0       UG        0 0          0 eth1\n")])])]),e("p",[t._v("注意：使用 netstat -rn 显示数字格式，不查询主机名称。")]),t._v(" "),e("p",[t._v("（9）找出程序运行的端口。并不是所有的进程都能找到，没有权限的会不显示，使用 root 权限查看所有的信息。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -anp\nActive Internet connections (servers and established)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    \ntcp        0      0 10.175.82.204:61795     0.0.0.0:*               LISTEN      22006/./spp_pgg_dia \ntcp        0      0 10.175.82.204:55011     0.0.0.0:*               LISTEN      3228/./spp_pgg_vod_ \ntcp        0      0 10.175.82.204:10883     0.0.0.0:*               LISTEN      125115/./spp_pgg_co\n")])])]),e("p",[t._v("（10）显示网络接口列表。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -i\nKernel Interface table\nIface      MTU    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg\neth1      1500 32898847246      0      0 51410  34664370715      0      0      0 BMRU\nlo       65536 57852071211      0      0 0      57852071211      0      0      0 LRU\ntunnat    1480        0      0      0 0      103182603      0      0      0 OPRU\n")])])]),e("p",[t._v("显示详细信息，可以使用 ifconfig 或者 netstat -ie。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -ie\nKernel Interface table\neth1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 10.175.82.204  netmask 255.255.255.192  broadcast 10.175.82.255\n        ether ec:f4:bb:e3:5b:b1  txqueuelen 10000  (Ethernet)\n        RX packets 32900073183  bytes 21958447410400 (19.9 TiB)\n        RX errors 0  dropped 0  overruns 51410  frame 0\n        TX packets 34665611337  bytes 7109591105017 (6.4 TiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n        device memory 0x91d00000-91e00000\n...\n")])])]),e("p",[t._v("（11）IP 和 TCP 分析。")]),t._v(" "),e("ul",[e("li",[t._v("查看本机连接的服务端口中连接数 TOP 的服务端 IP。其中 10.234.178.144:22 为本地 IP 端口。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -ant | grep \"10.234.178.144:22\" |awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -nr|head -10\n     24 100.112.141.208\n      2 10.63.93.159\n      2 10.191.131.38\n      2 10.101.242.11\n      2 100.92.40.70\n      2 100.113.141.219\n      2 100.112.159.163\n      1 9.68.178.53\n      1 10.191.134.83\n      1 10.139.233.47\n")])])]),e("p",[t._v("第二列为服务端IP，左边是本地发起的连接数。\n（b）查看 TCP 各种状态列表。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -ant | awk '{print $6}' | sort | uniq\nCLOSE_WAIT\nestablished)\nESTABLISHED\nForeign\nLISTEN\nTIME_WAIT\n")])])]),e("p",[t._v("（12）显示多播组信息。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -g\nIPv6/IPv4 Group Memberships\nInterface       RefCnt Group\n--------------- ------ ---------------------\nlo              1      all-systems.mcast.net\neth1            1      all-systems.mcast.net\ntunnat          1      all-systems.mcast.net\nlo              1      ff02::1\nlo              1      ff01::1\neth0            1      ff02::1\neth0            1      ff01::1\neth1            1      ff02::1\n\n")])])]),e("p",[t._v("netstat 的大部分功能都介绍了，如果想知道 netstat 更高级的功能，请参考 netstat 帮助手册。")]),t._v(" "),e("h2",{attrs:{id:"_5-输出结果整体说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-输出结果整体说明"}},[t._v("#")]),t._v(" 5.输出结果整体说明")]),t._v(" "),e("p",[t._v("执行 netstat 命令输出：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("Active Internet connections "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w/o servers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nProto Recv-Q Send-Q Local Address           Foreign Address         State      \ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.77")]),t._v(".9.126:47239        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.115")]),t._v(".0.57:9922       ESTABLISHED\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("52")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.77")]),t._v(".9.126:36000        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.19")]),t._v(".88.119:58814      ESTABLISHED\ntcp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.77")]),t._v(".9.126:37586        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.170")]),t._v(".31.139:nsesrvr   ESTABLISHED\nudp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" TENCENT64:acp-proto     TENCENT64:openwebnet    ESTABLISHED\nudp        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" TENCENT64:4216          TENCENT64:openwebnet    ESTABLISHED\nActive UNIX domain sockets "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w/o servers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nProto RefCnt Flags       Type       State         I-Node   Path\nunix  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("         DGRAM                    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("307286163")]),t._v(" /tmp/agent_cmd.sock\nunix  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("         DGRAM                    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9484")]),t._v("     /var/run/nscd/socket\nunix  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("         DGRAM                    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("275")]),t._v("      /run/systemd/notify\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("从整体上看 netstat 的输出结果可以分为两个部分。一个是 Active Internet connections，二是 Active UNIX domain sockets。")]),t._v(" "),e("p",[t._v("（1）Active Internet connections。")]),t._v(" "),e("p",[t._v("Active Internet connections 表示活跃的网络连接，包括 UDP 和 TCP连接信息。")]),t._v(" "),e("p",[t._v('其中"Recv-Q"和"Send-Q"指接收队列和发送队列，这些数字一般都应该是0，如果不是则表示数据发送和接收队列存在堆积，这种情况较为少见。')]),t._v(" "),e("p",[t._v("Local Address 和 Foreign Address 表示本地和远端的 IP、端口；")]),t._v(" "),e("p",[t._v("State 表示连接的状态，主要有：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("LISTEN：监听状态；\nSYN_SEND：客户端在发送连接请求后进入SYN_SEND状态，等待服务端的连接请求和确认，即等待服务端发送SYN+ACK包；\nSYN_RECV：服务端在收到客户端的连接请求后，发送SYN+ACK包后，进入SYN_RECV状态；\nESTABLISHED：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK后，客户端和服务器进入已建立连接状态；\nFIN-WAIT-1：客户端发送连接中断请求后进入FIN-WAIT-1状态，等待服务端的确认；\nFIN-WAIT-2：客户端接收到服务端的终端确认后进入FIN-WAIT-2状态，等待服务端的中断请求；\nCLOSE-WAIT：服务端在确认客户端的中断请求后，进入CLOSE-WAIT状态，等待从本地用户发来的连接中断请求；\nLAST-ACK：服务端向客户端发送连接中断请求后进入LAST-ACK状态，等待来自客户端的中断请求确认；\nTIME-WAIT：客户端发送中断请求确认后进入TIME-WAIT状态，等待足够的时间（2MSL）以确保服务端接收到来自客户端的中断请求确认； \nCLOSED：四次挥手结束后，客户端和服务端进入连接断开状态。\n")])])]),e("p",[t._v("为了便于理解 TCP 建立连接的三次握手和断开连接的四次挥手过程中涉及的状态，附上两张便于理解的示意图。")]),t._v(" "),e("p",[t._v("三次握手：\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190201201646408.png",alt:"在这里插入图片描述"}}),t._v("\n四次挥手：\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190201201713641.png",alt:"在这里插入图片描述"}}),t._v("\n（2）Active UNIX domain sockets。\nActive UNIX domain sockets，称为活跃 Unix 域套接字。")]),t._v(" "),e("p",[t._v("Proto 显示连接使用的协议；\nRefCnt 表示使用数量，即通过此套接字连接的进程数；\nFlags 显示的标志为 SO_ACCEPTON（显示为 ACC）、SO_WAITDATA（W）或 SO_NOSPACE（N）。如果相应的进程等待一个连接请求，那么 SO_ACCECPTON 用于未连接的套接字。其它标志通常并不重要。\nTypes 显示套接口的类型，一般为 DGRAM（数据报）和 STREAM（数据流）；\nState 显示套接字当前的状态，此字段包含以下关键字之一：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("FREE：套接字未分配。\nLISTENING：套接字正在监听一个连接请求。除非设置 --listening (-l) 或者 --all (-a) 选项，否则不显示。\nCONNECTING：套接字正要建立连接\nCONNECTED：套接字已连接\nDISCONNECTING：套接字已断开\n(empty)：套接字未连\n")])])]),e("p",[t._v("I-Node 表示套接字的 Inode 节点号；\nPath 表示套接字所在路径。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/netstat.8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("netstat(8) - Linux manual page - man7.org"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://linux.51yip.com/search/netstat",target:"_blank",rel:"noopener noreferrer"}},[t._v("netstat - linux命令在线中文手册"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.cnblogs.com/ggjucheng/archive/2012/01/08/2316661.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux netstat命令详解"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/diantong/p/9669568.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux命令之netstat"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qzcsu/article/details/72861891",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP的三次握手与四次挥手（详解+动图）"),e("OutboundLink")],1)]),t._v(" "),e("Vssue",{attrs:{title:"netstat"}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);