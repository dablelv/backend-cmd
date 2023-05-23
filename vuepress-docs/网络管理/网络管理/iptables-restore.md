## 1.命令简介
iptables-restore 恢复 IP 表。

ip6tables-restore 恢复 IPv6 表。

iptables-restore 和 ip6tables-restore 用于从 STDIN 或文件中指定的数据恢复 IP 和 IPv6 表。

iptables-restore 和 ip6tables-restore 均是 xtables-multi 的软链。

## 2.命令格式
```
iptables-restore [-chntvV] [-w secs] [-W usecs] [-M modprobe] [-T name] [file]
```
## 3.选项说明
```shell
-c, --counters
	指定在还原 iptables 表时候，还原当前的数据包计数器和字节计数器的值。
-h, --help
	打印一个简短的选项摘要。
-n, --noflush
	不要刷新表的先前内容。如果没有指定，这两个命令将刷新(删除)各自表的所有先前内容。
-t, --test
	只解析和构造规则集，但不提交它。
-v, --verbose
	在规则集处理期间打印额外的调试信息。
-V, --version
	打印程序版本号。
-w, --wait [seconds]
	等待 xtables 锁。为了防止程序的多个实例并发运行，将尝试在启动时获得排他锁。默认情况下，如果无法获得锁，程序将退出。此选项将使程序等待(无限期或可选的几秒)，直到获得独占锁。
-W, --wait-interval <microseconds>
	每次迭代等待的间隔。当运行对延迟敏感的应用程序时，等待 xtables 锁的时间可能是不可接受的。该选项将使每次迭代花费指定的时间。缺省值为1秒。此选项仅和 -w 一起使用。
-M，--modprobe <modprobe_program>
	指定 modprobe 程序的路径。默认情况下，iptables-restore 将检查 /proc/sys/kernel/modprobe 以确定可执行文件的路径。
-T, --table <name>
	指定要还原表的名称。
```

## 4.常用示例
（1）还原 iptables 配置。

```shell
iptables-restore < iptables.bak
```

（2）指定在还原 iptables 表时候，还原当前的数据包计数器和字节计数器的值。

```shell
iptables-restore -c < iptables.bak
```

（3）指定要还原表的名称。

```shell
iptables-restore -T filter < filter.bak
```

---

## 参考文献
[iptables-restore(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/iptables-restore.8.html)

<Vssue title="iptables-restore" />