## 1.命令简介
bg（backgroud）恢复被挂起的作业放到后台重新执行。

提示：程序正在前台运行，可以使用 Ctrl + Z 发送 SIGSTOP 信号把程序暂停，Ctrl + C 发送  SIGINT 信号默认终止程序。

## 2.命令格式
```shell
bg [<jobspec> ...]
```
jobspec 为任务号，若不指定任务号，则与 fg 命令一样，缺省为标有 + 号的任务。

## 3.选项说明
无

## 4.常用示例
我们先放一个任务到后台执行。
```shell
ping localhost > /dev/null &
[1] 19859
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
[1]-  Running                 ping localhost > /dev/null &
[2]+  Stopped                 sleep 3600
```
可以发现，任务 2 被挂起放到了后台。

有了上面的前置操作，那么我们便可以利用 bg 来完成它所能完成的功能。

（1）无参数执行 bg。

恢复带有 + 号的作业并放到后台执行。
```shell
bg
[2]+ sleep 3600 &
```
我们通过 jobs 查看任务状态。
```shell
jobs
[1]-  Running                 ping localhost > /dev/null &
[2]+  Running                 sleep 3600 &
```
可见 2 号任务已在后台恢复为执行状态。

（2）恢复指定任务并放在后台执行。

比如恢复 2 号任务。
```shell
bg 2
```

---
## 参考文献
[bg(1) manual - linux.org](https://www.linux.org/docs/man1/bg.html)
