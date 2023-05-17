## 1.命令简介
passwd 令用于设置用户的认证信息，包括用户密码、账户锁定、密码失效等。

系统管理员能用它管理系统用户的密码，只有管理员可以指定用户名称，一般用户只能变更自己的密码。

## 2.命令格式
```
passwd [OPTIONS] [USERNAME]
```
不带任何选项和参数直接运行 passwd 表示修改当前用户的登录密码，这也是 passwd 最常见的用法。

## 3.选项说明
注意，长选项的必须参数对于短选项也是必须的。
```
-k, --keep
	保持身份验证令牌不过期
-d, --delete
  删除已命名帐号的密码(仅限 root 用户)
-l, --lock
	锁定指定帐户的密码(仅限 root 用户)。锁定是在密码加密字符串前面加上 ! 使得密码校验不通过。注意，帐户没有完全锁定，用户仍然可以通过其他身份验证方式登录，如 ssh 公钥身份验证
-u, --unlock
	解锁指定账户的密码(仅限 root 用户)
-e, --expire
	终止指定帐户的密码(仅限 root 用户)
-f, --force
	强制执行操作
-x, --maximum=DAYS
	密码的最长有效时限(仅限 root 用户)
-n, --minimum=DAYS
	密码的最短有效时限(仅限 root 用户)
-w, --warning=DAYS
	在密码过期前多少天开始提醒用户(仅限 root 用户)
-i, --inactive=DAYS
	当密码过期后经过多少天该帐号会被禁用(仅限 root 用户)
-S, --status
	报告已命名帐号的密码状态(仅限 root 用户)
--stdin
	从标准输入读取令牌(仅限 root 用户)
-?, --help
  	显示帮助信息并退出
--usage
	显示简要使用信息
```

## 4.常用示例
（1）修改当前登陆的账户密码。
```
passwd
```
注意，设置用户密码时一定要遵守"复杂性、易记忆性、时效性"的密码规范。简单来讲就是密码要大于 8 位，包含大小写字母、数字和特殊符号，并且容易记忆和定期更换。

（2）修改其他用户密码，需要管理员权限。
```
passwd USERNAME
```

（3）锁定指定帐户的密码，使得用户通过密码无法登录。需要管理员权限。
```
passwd -l USERNAME
```

（4）解锁指定帐户的密码。需要管理员权限。
```
passwd -u USERNAME
```

（5）终止指定帐户的密码，使用户下次登陆强制改密码。需要管理员权限。
```
passwd -e USERNAME
```

（6）清除登录密码，使得用户无需通过密码即可登录。需要管理员权限，风险极大，不推荐使用。
```
passwd -d USERNAME
```

（7）查询帐号的密码状态。
```
passwd -S dablelv
dablelv PS 2020-03-08 0 90 7 -1 (Password set, SHA512 crypt.)
```
显示账户状态信息，共有7个字段，分别是登录名、密码、上次修改时间、密码修改间隔时间(0)、密码有效期(90)、警告时间(7)、密码不失效（-1），单位都是天。

（8）设置密码的最小和最大有效天数。
```
passwd -x 100 -n 30 dablelv

#查看是否设置成功
passwd -S dablelv
dablelv PS 2020-03-08 30 100 7 -1 (Password set, SHA512 crypt.)
```

（9） 在密码过期前多少天开始提醒用户。
```
passwd -w 7 dablelv
```

---
## 参考文献
[passwd(1) manual](https://linux.die.net/man/1/passwd)

[CSDN.【Linux】一步一步学Linux——passwd命令(85)](https://blog.csdn.net/dengjin20104042056/article/details/97966163)
