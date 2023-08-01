## 1.命令简介
renice 修改正在运行进程的调度优先级。

renice 缺省以进程 ID 指定进程，也可以按照进程组或用户名指定进程，并修改所有隶属于进程组或用户进程的优先级。只有系统管理者可以改变其他用户进程的优先权，也仅有系统管理者可以设置负数优先级。
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