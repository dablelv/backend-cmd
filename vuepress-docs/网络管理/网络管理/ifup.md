## 1.命令简介
ifup 启动网络接口。

ifup 命令用于激活指定的网络接口。ifup 命令会去读取 /etc/sysconfig/network-scripts/ 目录下的相关网络接口的配置文件，并根据配置文件的内容来激活该网络接口。

注意：网络接口名称必须是 /etc/sysconfig/network-scripts/ 目录配置文件中设置的才可以。如果使用 ifconfig 命令改变了网络接口后，ifup 命令就不会识别了。因为 ifup 命令会对比当前网络的参数与 /etc/sysconfig/network-scripts/ 中配置文件的内容是否相符。
## 2.命令格式
```shell
ifup CONFIG [boot]
```
CONFIG 为网络接口名。如果后跟可选字符串 boot 表明系统启动时不激活该网卡。
## 3.选项说明
无。
## 4.常用示例
启动网卡 eth0。
```shell
ifup eth0
```

---
## 参考文献
[ifup(8) manual - linux.org](https://www.linux.org/docs/man8/ifup.html)
