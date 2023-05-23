## 1.命令简介
renice 可以修改正在运行的进程的调度优先级。

该命令预设是以程序识别码指定程序调整其优先权，您亦可以指定程序群组或用户名称调整优先权等级，并修改所有隶属于该程序群组或用户的程序的优先权。只有系统管理者可以改变其他用户程序的优先权，也仅有系统管理者可以设置负数等级。
## 2.命令格式
```
renice [-n] <priority> [-g|-p|-u] <identifier>...
```
## 3.选项说明
```
-g, --pgrp <id>
 	将参数解释为进程组 ID。
-n, --priority <priority>
 	指定要用于进程、进程组或用户的调度优先级。
-p, --pid
 	将参数解释为进程 ID (默认)。
-u, --user
 	将参数解释为用户名或用户 ID。
-h, --help
 	显示帮助文本并退出。
-V, --version
 	显示版本信息并退出。
```
## 4.常用示例
（1）改变指定进程调度优先级。
```shell
renice 5 -p <pid>
```

（2）修改用户进程的调度优先级。
```shell
renice 5 -u <uid | name>
```

（3）修改用户组进程的调度优先级。
```shell
renice 5 -g <gid>
```

---
## 参考文献
[renice(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/renice.1.html)

<Vssue title="renice" />