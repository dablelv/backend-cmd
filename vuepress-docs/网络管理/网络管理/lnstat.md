## 1.命令简介
lnstat 显示 Linux 网络统计信息。

lnstat 命令实际上是读取系统“/proc/net/stat”目录下面的文件，来显示当前主机的网络状态的。

lnstat 是 rtstat 命令的更新替代命令，功能更完善。

## 2.命令格式
```
lnstat [options]
```

## 3.选项说明
```shell
-c, --count <count>
	指定显示网络状态的次数，每隔一定时间显示一次网络状态。
-d, --dump
	显示可用的文件或关键字。
-f, --file <file>
	要使用的统计文件，可以指定多次。默认情况下扫描 /proc/net/stat 中的所有文件。
-i, --interval <intv>
	指定两次显示网络状的间隔秒数。
-j, --json
	以 JSON 格式显示结果。
-k, --keys K,K,K,...
	只显示给定的关键字
-s, --subject [0-2]
	是否显示标题头。0'表示根本没有标题头，'1'只在程序开始时打印标题头，'2'每20行打印一次标题头。
-w, --width N,N,N,...
	指定每个字段所占的宽度。
-h, --help
	显示帮助信息
-V, --version
	显示指令版本信息
```

## 4.常用示例

（1）显示网络状态。

```shell
lnstat
```

（2）显示命令支持的统计文件。

```shell
lnstat -d
/proc/net/stat/ndisc_cache:
	 1: entries
	 2: allocs
	 3: destroys
	 4: hash_grows
	 5: lookups
	 6: hits
	 7: res_failed
	 8: rcv_probes_mcast
	 9: rcv_probes_ucast
	10: periodic_gc_runs
	11: forced_gc_runs
	12: unresolved_discards
/proc/net/stat/arp_cache:
	 1: entries
	 2: allocs
	 3: destroys
	 4: hash_grows
	 5: lookups
	 6: hits
	 7: res_failed
	 8: rcv_probes_mcast
	 9: rcv_probes_ucast
	10: periodic_gc_runs
	11: forced_gc_runs
	12: unresolved_discards
/proc/net/stat/rt_cache:
	 1: entries
	 2: in_hit
	 3: in_slow_tot
	 4: in_slow_mc
	 5: in_no_route
	 6: in_brd
	 7: in_martian_dst
	 8: in_martian_src
	 9: out_hit
	10: out_slow_tot
	11: out_slow_mc
	12: gc_total
	13: gc_ignored
	14: gc_goal_miss
	15: gc_dst_overflow
	16: in_hlist_search
	17: out_hlist_search
```

（3）过滤出只想要查看的关键字段信息。

```shell
lnstat -k arp_cache:entries,rt_cache:in_hit,arp_cache:destroys
arp_cach|rt_cache|arp_cach|
 entries|  in_hit|destroys|
      11|       0|       0|
```

（4）指定两次显示网络状的间隔秒数。
```shell
lnstat -i 2
```

（5）指定显示网络状态的次数。
```shell
lnstat -c 2
```

---

## 参考文献
[lnstat(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/lnstat.8.html)
