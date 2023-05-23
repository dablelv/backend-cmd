## 1.命令简介
ifdown 关闭网络接口。

该命令会去读取 /etc/sysconfig/network-scripts/ 目录下的相关网络接口的配置文件，并根据配置文件的内容来关闭该网络接口。

注意：网络接口名称必须是 /etc/sysconfig/network-scripts/ 目录配置文件中设置的才可以。如果使用 ifconfig 命令改变了网络接口后，ifdown 命令就不会识别了。因为 ifdown 命令会对比当前网络的参数与 /etc/sysconfig/network-scripts/ 中配置文件的内容是否相符。
## 2.命令格式
```shell
ifdown CONFIG
```
## 3.选项说明
无。
## 4.常用示例
禁用网络接口 ens33。
```shell
ifdown ens33
```
---
## 参考文献
[ifdown(8) manual - linux.org](https://www.linux.org/docs/man8/ifdown.html)

<Vssue title="ifdown" />