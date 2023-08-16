## 1.命令简介
poweroff 关闭机器电源。

poweroff 命令用来关闭计算机操作系统并且切断系统电源。如果确认系统中已经没有用户存在且所有数据都已保存，需要立即关闭系统，可以使用 poweroff 命令。

poweroff、reboot 和 halt 可分别用于关机、重启或停止机器。这三个命令拥有相同的选项。

## 2.命令格式
```
poweroff [OPTIONS]
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

（1）关闭主机并切断系统电源。

```shell
poweroff
```

（2）强制关闭操作系统。

```shell
poweroff  -f
```

（3）不真正关闭操作系统, 仅仅写入日志。

```shell
poweroff -w
```

（4）关闭操作系统前不发送留言。
```shell
poweroff --no-wall
```

（5）关闭操作系统前不同步硬盘/存储介质。

```shell
poweroff -n
```

（6）强制执行 poweroff。
```shell
poweroff -f
```

---

## 参考文献
[poweroff(8) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/poweroff.8.html)

<Vssue title="poweroff" />