## 1.命令简介
fg（foreground）用于将后台作业（在后台运行的或在后台挂起的作业）放到前台终端运行。

提示：程序正在前台运行，可以使用 Ctrl + Z 发送 SIGSTOP 信号把程序暂停，Ctrl + C 发送  SIGINT 信号默认终止程序。

## 2.命令格式
```shell
fg [<jobspec>]
```
jobspec 为任务号，若不指定任务号，则与 bg 命令一样，缺省为标有 + 号的任务。

## 3.选项说明
无。

## 4.常用示例
我们先放一个任务到后台执行。
```shell
ping localhost -a > /dev/null &
[1] 26109
```
然后再通过 Ctrl + Z 将前台的任务挂起放到后台。
```shell
sleep 3600
^Z
[2]+  Stopped                 sleep 3600
```
通过 jobs 命令可以查看放到后台执行的任务。
```shell
jobs
[1]-  Running                 ping localhost -a > /dev/null &
[2]+  Stopped                 sleep 3600
```
可以发现，任务 2 被挂起放到了后台。

有了上面的前置操作，那么我们便可以利用 fg 来完成它所能完成的功能。

（1）无参数执行 fg。

将带有 + 号的作业恢复并放到前台执行。
```shell
fg
sleep 3600
```

（2）将指定任务放到前台执行。

比如恢复 1 号任务。
```shell
fg 1
ping localhost -a > /dev/null
```

---
## 参考文献
[fg(1) manual - linux.org](https://www.linux.org/docs/man1/fg.html)
