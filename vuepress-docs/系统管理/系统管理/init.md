## 1.命令简介
init 命令是 Linux 下的进程初始化工具。

init 进程是所有 Linux 进程的父进程，它的进程号为1。init 命令是 Linux 操作系统中不可缺少的程序之一，init 进程是 Linux 内核引导运行的，是系统中的第一个进程。

注意：Centos7.5 中第一个进程是 systemd 进程

## 2.命令格式
```shell
init [OPTION]... [<command>]
```
command 为系统运行等级和 init daemon 进程 控制命令。

## 3.选项说明
```
--help
	显示帮助信息。
--no-wall
	在停止/断电/重新启动之前不发送 wall 消息。
```

## 4.常用示例
（1）显示帮助信息。
```shell
init --help
init [OPTIONS...] {COMMAND}

Send control commands to the init daemon.

     --help      Show this help
     --no-wall   Don't send wall message before halt/power-off/reboot

Commands:
  0              Power-off the machine
  6              Reboot the machine
  2, 3, 4, 5     Start runlevelX.target unit
  1, s, S        Enter rescue mode
  q, Q           Reload init daemon configuration
  u, U           Reexecute init daemon
```
（2）切换系统运行级别。

Linux 通常有 7 个运行级别：
```
0 停机
1 单用户模式
2 多用户模式（没有 NFS（Network File System））
3 完全多用户模式（有 NFS），登录后进入控制台命令行模式
4 系统保留未使用
5 图形界面
6 重新启动
```
比如重启系统。
```shell
init 6
```
再如关机。
```shell
init 0
```

## 参考文献
[init(8) - Linux man page - die.net](https://linux.die.net/man/8/init)
