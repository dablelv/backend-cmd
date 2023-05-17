## 1.命令简介
reboot 用于用来重启主机。

poweroff、reboot 和 halt 可分别用于关机、重启或停止机器。这三个命令都有相同的选项。

## 2.命令格式
```
poweroff [OPTIONS...]
```

## 3.选项说明
```shell
-d, --no-wtmp
	重启系统时，不将操作写入日志文件“/var/log/wtmp”。
-f, --force
	强制重启操作系统。
-n, --no-sync
	重启操作系统前不同步硬盘/存储介质。
-w, --wtmp-only
	不真重启系统，仅在日志文件“/var/log/wtmp”中写入 wtmp 重启条目。
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

（1）重启。

```shell
reboot
```

（2）模拟重开机。

```shell
reboot -w
```

（3）不记录此次重启情况。

```shell
reboot -d
```

（4）重启系统前不发送留言。
```shell
reboot --no-wall
```

（5）关闭操作系统前不同步硬盘/存储介质。
```shell
reboot -n
```

（6）强制执行 reboot。
```shell
reboot -f
```

---

## 参考文献
[reboot(8) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/reboot.8.html)
