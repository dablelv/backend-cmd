## 1.命令简介

halt 关闭正在运行的主机。

halt 命令会先检测系统的 runlevel，若 runlevel 为 0 或 6，则关闭系统，否则立即调用 shutdown 来关闭系统。

poweroff、reboot 和 halt 可分别用于关机、重启或停止机器。这三个命令都有相同的选项。

## 2.命令格式
```
poweroff [OPTIONS...]
```

## 3.选项说明
```shell
-d, --no-wtmp
	关闭操作系统时，不将操作写入日志文件“/var/log/wtmp”。
-f, --force
	强制关闭操作系统。
-n, --no-sync
	关闭操作系统前不同步硬盘/存储介质。
-w, --wtmp-only
	不真正关闭操作系统，仅在日志文件“/var/log/wtmp”中写入 wtmp 关闭条目。
-p, --poweroff
	不管调用 poweroff、reboot 和 halt 中的哪一个，都要切断主机电源。
--help
	显示帮助信息。
--halt
	不管调用 poweroff, reboot 和 halt 中的哪一个，都要停止机器。
--no-wall
	请勿在 poweroff, reboot 或 halt 前发送留言。
```

## 4.常用示例

（1）关机。

```shell
halt
```

（2）关闭系统后关闭电源。

```shell
halt -p
```

（3）不记录此次关机情况。

```shell
halt -d
```

（4）关闭操作系统前不发送留言。
```shell
halt --no-wall
```

（5）关闭操作系统前不同步硬盘/存储介质。
```shell
halt -n
```

（6）强制执行 halt。
```shell
halt -f
```

---

## 参考文献
[halt(8) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/halt.8.html)

<Vssue title="halt" />