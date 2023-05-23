## 1.命令简介

ctrlaltdel 设置 Ctrl-Alt-Del 组合键的功能。

## 2.命令格式
```
ctrlaltdel hard|soft
```
通过检查 linux/kernel/reboot.c 代码，可以清楚地看到 Ctrl-Alt-Del 序列可以执行两个受支持的函数 hard 与 soft。

## 3.选项说明
```shell
hard
	立即重启计算机，不调用 sync(2)，没有任何其他准备。这是默认值。
soft
	让内核发送SIGINT(中断)信号给init进程(通常是PID为1的进程)。如果使用这个选项，init(8)程序必须支持这个特性。由于现在Linux社区中有几个init(8)程序，请参考您当前使用的版本的文档。
-h, --help
	显示帮助信息。
-V, --version
	显示版本信息。
```
ctrlaltdel 的功能通常设置在 /etc/rc.local 文件中。 

## 4.常用示例

（1）立即执行重新启动操作系统。

```shell
ctrlaltdel hard
```
Hard：当按下组合键“Ctrl+Alt+Del”时，立即执行重新启动操作系统，而不是先调用 sync(2) 系统调用和其他的关机标准操作。

（2）首先向 init 进程发送 SIGINT（interrupt）信号再重启系统。
```shell
ctrlaltdel soft
```
当按下组合键“Ctrl+Alt+Del”时，首先向 init 进程发送 SIGINT（interrupt）信号，由 init 进程处理重启操作。

---

## 参考文献
[ctrlaltdel(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/ctrlaltdel.8.html)

<Vssue title="ctrlaltdel" />