## 1.命令简介
newgrp（new group）登录到一个新组。

newgrp 类似 login 指令，但它是以相同的帐号，另一个组名，再次登入系统。欲使用 newgrp 切换群组，用户必须是该群组的用户，否则将无法登入指定的群组。

单一用户要同时隶属多个群组，需利用交替用户的设置。若不指定群组名称，则 newgrp 指令会登入该用户的预设群组。

## 2.命令格式
```shell
newgrp [-] [GROUP]
```

## 3.选项说明
```
-
	如果给出了可选的 - 标志，则用户的环境将重新初始化，就像用户已经登录一样。
```

## 4.常用示例
将群组切换到 test 组。
```
newgrp test
```

---
## 参考文献
[newgrp(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/newgrp.1.html)

<Vssue title="newgrp" />