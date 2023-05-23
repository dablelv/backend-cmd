## 1.命令简介
wait 等待每个指定的进程并返回其终止状态。

该指令常用于 Shell 脚本编程中，待指定的指令执行完成后，才会继续执行后面的任务。等待作业时，在作业号前须添加百分号"%"。

## 2.命令格式
```shell
wait [n ...]
```
每个 n 可以是进程 ID 或作业号；如果给定了作业号，则等待该作业管道中的所有进程。如果未给定 n，则等待所有当前活动的子进程，返回状态为零。

## 3.选项说明
无。

## 4.返回值
如果指定不存在的进程或作业，则返回状态为 127。

否则，返回状态是等待的最后一个进程或作业的退出状态。

## 5.常用示例
（1）等待指定进程完成。

```shell
sleep 10 &
[1] 2875

wait 2875
[1]+  Done                    sleep 10
```

（2）等待指定作业完成。

```shell
sleep 10 &
[1] 3171

wait %1
[1]+  Done                    sleep 10
```

输出当前存在作业号使用 jobs 命令。
```shell
jobs
[1]+  Running                 sleep 10 &
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/bash.1.html)

<Vssue title="wait-builtin" />