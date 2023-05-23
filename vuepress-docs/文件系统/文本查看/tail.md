## 1.命令简介
tail 用于显示文件尾部内容，与命令 head 作用相反。默认情况下，显示文件的末尾 10 行内容。

## 2.命令格式
```
tail [OPTION]... [FILE]...
```
可以指定多个文件 FILE，种情况下，输出的内容前会列出所属文件名。如果未给定 FILE 或者 FILE 是 -，则从标准输入读取。

## 3.选项说明
```
-c, --bytes=K
    输出最后 K 个字节；或者使用 +K 表示从文件的第 K 个字节开始到最后
--retry
   不停地尝试打开不可访问的文件，只与 -f 联用时有用。
-f, --follow[={name|descriptor}]
    按照指定时间间隔输出文件追加的内容; -f, --follow 以及 --follow=descriptor 作用相同。--follow=name 表示根据文件名检测而不是文件描述符，默认 5 次检测后文件未发生改变则重新打开文件
-n, --lines=N
    输出最后 N 行，而非默认的最后 10 行。
--max-unchanged-stats=N
    与选项 --follow=name 联用，N 次检测后如果文件未发生变化，则重新打开文件。此选项不常用，一般文件链接被重定向或者日志滚动时导致文件名发生变化时才使用该选项
--pid=PID
    与 -f 联用，表示在进程 ID 死掉之后结束 tail
-q, --quiet, --silent
    多个文件时输出的内容前隐藏文件名
-s, --sleep-interval=S
    与 -f 联用，表示检测文件变化的间隔，默认 1s
-v, --verbose
    多个文件时输出的内容前显示文件名（默认）
--help
    显示帮助信息后退出
--version
    输出版本信息后退出
```
注意：
（1）长选项的强制参数对于短选项也是强制的；
（2）K 字节后可以有一个倍数后缀：`b 512, kB 1000, K 1024, MB 1000*1000, M 1024*1024, GB 1000*1000*1000, G 1024*1024*1024, and so on for T, P, E, Z, Y`；
（3）使用 -f, --follow 时，tail 默认后接文件描述符, 这意味着即使 tail 跟踪的文件改名了，tail 仍然可以显示其末尾部分。如果希望查询文件的实际名称而非文件描述符（例如日志滚动时）, 应使用 --follow=name，tail 将周期性地重新打开所指定的文件。

## 4.常用示例
（1）显示文件 /etc/passwd 的末尾 10 行。
```shell
tail /etc/passwd

rpcuser:x:29:29:RPC Service User:/var/lib/nfs:/sbin/nologin
nfsnobody:x:65534:65534:Anonymous NFS User:/var/lib/nfs:/sbin/nologin
saslauth:x:996:76:Saslauthd user:/run/saslauthd:/sbin/nologin
avahi:x:70:70:Avahi mDNS/DNS-SD Stack:/var/run/avahi-daemon:/sbin/nologin
uucp:x:10:14:Uucp user:/var/spool/uucp:/sbin/nologin
nslcd:x:65:55:LDAP Client User:/:/sbin/nologin
arpwatch:x:77:77::/var/lib/arpwatch:/sbin/nologin
sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
mysql:x:27:27:MariaDB Server:/var/lib/mysql:/sbin/nologin
```
（2）显示文件 /etc/passwd 的末尾 3 行。
```shell
tail -n3 /etc/passwd

sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
mysql:x:27:27:MariaDB Server:/var/lib/mysql:/sbin/nologin
```

（3）从第 N 行开始显示文件的内容，以 /etc/passwd 为例，这里的 N 等于 30。
```shell
tail -n+30 /etc/passwd

tcpdump:x:72:72::/:/sbin/nologin
mysql:x:27:27:MariaDB Server:/var/lib/mysql:/sbin/nologin
```

（4）当文件增长时，动态查看文件追加的内容。

假设文件 my.log 是滚动的服务日志，每到指定大小将被重命名，这里始终跟踪最新的日志文件。
```shell
tail --follow=name my.log
```

（5）显示多个文件的最后 3 行，并且默认会显示文件名。
```shell
tail -n3 /etc/passwd /etc/group

==> /etc/passwd <==
mqq:x:500:501::/usr/local/app:/bin/bash
dev_mqq:x:501:501::/usr/local/dev:/bin/bash
dev:x:502:501::/home/dev:/bin/bash

==> /etc/group <==
screen:x:84:
admin:x:500:
mqq:x:501:
```

---
## 参考文献
[tail(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/tail.1.html)

[tail(1) - Linux manual page - linux.org](https://www.linux.org/docs/man1/tail.html)

[【Linux】一步一步学Linux——tail命令(42)](https://blog.csdn.net/dengjin20104042056/article/details/95937014)

<Vssue title="tail" />