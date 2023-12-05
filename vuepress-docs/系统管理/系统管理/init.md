## 1.命令简介
向 init 守护进程发送控制命令。

init 守护进程由 Linux 内核引导运行，是系统中的第一个进程。init 进程号为 1，负责启动所有其他进程，它是所有进程的父进程。

当某个进程的父进程死亡后，它将成为孤儿进程，init 进程负责接管善后这些孤儿进程。

注意：init 逐渐被 systemd 取代。

init 是传统的系统初始化工具，最初是由 System V Unix 引入的。它使用简单的脚本和配置文件来启动系统服务。systemd 是一个相对较新的系统初始化和管理工具，旨在提供更快的系统引导、更强大的服务管理和更多的功能。它引入了一种并行启动单元的方式，以优化系统启动速度。

## 2.命令格式
```shell
init [OPTIONS] [CMD]
```
CMD 为系统运行等级或 init daemon 进程的控制命令。
## 3.选项说明
```
--help
	显示帮助信息。
--no-wall
	在停止/断电/重启之前不发送 wall（write all）广播消息。
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

<Vssue title="init" />