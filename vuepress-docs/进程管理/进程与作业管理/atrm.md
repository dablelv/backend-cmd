## 1.命令简介
atrm 根据任务编号删除待执行任务。

atrm 是 at 的软链，相当于 at -d。

## 2.命令格式
```shell
atrm [-V] job [job...]
```

## 3.选项说明
```
-V
	显示版本号。
```

## 4.常用示例
使用 atq 查看当前的定时任务列表。
```shell
atq
8	Wed Nov  2 17:00:00 2022 a root
9	Mon Oct 31 17:00:00 2022 a root
```
使用 atrm 删除定时任务。
```shell
atrm 8
```

---
## 参考文献
[atrm(1) - Linux man page - Die.net](https://linux.die.net/man/1/atrm)

<Vssue title="atrm" />