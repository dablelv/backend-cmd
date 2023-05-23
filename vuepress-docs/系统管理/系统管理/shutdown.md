## 1.命令简介
shutdown 指令可以关闭所有程序，并依用户的需要，进行重启或关机操作。

使用 shutdown 命令时，在系统关机前，可以通知所有登录者系统将要关闭。此时 login 指令会被冻结，新用户将不能再登录，这是推荐使用的安全关机方式。关机之前，所有进程都会受到 shutdown 指令所发送的关闭进程信号，然后向 init 程序发送信号，要求它改变运行等级（runlevel）。

Linux 系统有 7 个运行级别：
运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动；
运行级别1：单用户工作状态，root 权限，用于系统维护，禁止远程登录；
运行级别2：多用户状态（没有 NFS）；
运行级别3：完全的多用户状态（有 NFS），登录后进入控制台命令行模式；
运行级别4：系统未使用，保留；
运行级别5：X11 控制台，登录后进入图形 GUI 模式；
运行级别6：系统正常关闭并重启，默认运行级别不能设为 6，否则不能正常启动。

## 2.命令格式
```
shutdown [选项] [参数]
```

## 3.选项说明
```
-c
	cancel，其他用户可以取消目前正在执行的关机程序，或者Control-C终止shutdown程序
-k
	仅仅向每个登录用户发出警告信息，并不真正关机
-f
	重新启动时不执行fsck文件系统检查命令；
-F
	重新启动时执行fsck文件系统检查命令；
-h
	关机（halt）或关闭电源（power off），至于选择哪一种取决于系统的关机脚本（有時候可以在 BIOS 中更改）
-H
	关机（halt）；
-P
	关机，等价于 poweroff 命令
-n
	不调用 init 程序进行关机，而由 shutdown 自己进行
-r
	重启。等价于 reboot 命令
-t <秒数>
	送出警告信息和删除信息之间要延迟多少秒
--help
	显示帮助信息
--version
	显示版本
```

## 4.常用示例
（1）立刻关机，其中 now 相当于时间为 0 的状态。
```
shutdown -H now
//或
halt
```
（2）系统在今天的 20：25 分关机。
```
shutdown -H 20:25
```
（3）系统立刻重新启动。
```
shutdown -r now
//或
reboot
```
（4）发送后面的警告信息，再过 30 分钟系统会自动重启。
```
shutdown -r +30 'The system will reboot' 
```
（5）仅发出警告，系统并不会关机。
```
shutdown -k now 'This is just a warning message'
```

（6）立即关机并切断电源。
```
shutdown -P now
//或
poweroff
```

（7）恶作剧，仅发出警告，什么都不会发生。
```
shutdown +10 -k '10分钟后关机'
```

## 5.常见问题

（1）`shutdown -h`、`shutdown -H`和`shutdown -P`的区别?
`shutdown -H`是关机操作，停止系统运行，但并未关闭电源，`shutdown -P`是关闭电源操作。`shutdown -h`则根据系统的默认设置来选择是否关闭电源 。关闭电源会送出 ACPI 指令通知PSU（Power Supply Unit）电源。

（2）shutdown默认操作进入单用户维护模式。
```
//十分钟后进入单用户维护模式
shutdown +10
```

## 参考文献
[shutdown(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/shutdown.8.html)

[Linux 關機指令（shutdown、halt 與 poweroff）教學與範例](https://blog.gtwang.org/linux/how-to-shutdown-linux/)

<Vssue title="shutdown" />