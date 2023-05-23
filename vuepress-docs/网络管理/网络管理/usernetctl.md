## 1.命令简介
usernetctl 用于被允许时操作指定的网络接口。

在使用上和 ifup 、ifdown 命令有些类似。
## 2.命令格式
```
usernetctl <interface-name> up|down|report
```

## 3.选项说明
```
up
	激活网络接口。
down
	禁用网络接口。
report
	报告用户是否可以打开或关闭网络接口。
```

## 4.常用示例
（1）激活网卡。
```shell
usernetctl ens33 up
```
（2）禁用网卡。
```shell
usernetctl ens33 down
```
（3）报告网卡状态。
```shell
usernetctl ens33 report
```

---
## 参考文献
[usernetctl(8) manual - linux.org](https://www.linux.org/docs/man8/usernetctl.html)

<Vssue title="usernetctl" />