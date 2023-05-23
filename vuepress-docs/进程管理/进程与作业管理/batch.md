## 1.命令简介
batch 在系统空闲的时候执行任务。

与 at 命令不同的地方在于 batch 命令不需要指定时间，自动在系统空闲的时候执行指定的任务。系统空闲指的是系统负载平均值低于 0.8 或 atd 调用中指定的值。

## 2.命令格式
```shell
batch
```

## 3.选项说明
无。

## 4.常用示例
在系统空闲的时候执行任务。
```shell
batch
at> echo 1024
at> <EOT>
job 6 at Sun Oct 30 19:05:00 2022
```
任务输入完后需要使用 Ctrl + D 结束输入。

---
## 参考文献
[batch(1) - Linux man page - Die.net](https://linux.die.net/man/1/batch)

<Vssue title="batch" />