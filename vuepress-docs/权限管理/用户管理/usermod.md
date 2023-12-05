## 1.命令简介
usermod（user modify）是系统管理员命令，用于修改用户账号。

usermod 可用来修改用户账号的各项设定，通过修改系统账号文件让命令行指定的变化生效。

## 2.命令格式
```
usermod [OPTIONS] LOGIN
```

## 3.选项说明
```
-a, --append
	将用户添加到补充组。仅与 -G 选项一起使用。
-c, --comment
	添加备信息
-d, --home HOME_DIR
	用户的新主目录
-e, --expiredate EXPIRE_DATE
	设定帐户过期的日期
-f, --inactive INACTIVE
	过期 INACTIVE 天数后，设定密码为失效状态
-g, --gid GROUP
	强制使用 GROUP 为新主组
-G, --groups GROUPS
	新的附加组列表 GROUPS
-a, --append GROUP
	将用户追加至上边 -G 中提到的附加组中，并不从其它组中删除此用户
-h, --help
	显示此帮助信息并推出
-l, --login LOGIN
	新的登录名称
-L, --lock
	锁定用户帐号
-m, --move-home
	将家目录内容移至新位置 (仅于 -d 一起使用)
-o, --non-unique
	允许使用重复的(非唯一的) UID
-p, --password PASSWORD
	将加密过的密码 (PASSWORD) 设为新密码
-s, --shell SHELL
	该用户帐号的新登录 shell
-u, --uid UID
  	用户帐号的新 UID
-U, --unlock
	解锁用户帐号
-Z, --selinux-user  SEUSER
	用户账户的新 SELinux 用户映射
```
## 4.常用示例
（1）修改用户的家目录。
```
usermod -d /home/tom tom
```

（2）改变用户的 uid。
```
usermod -u 888 tom
```

（3）修改用户名为 jerry。
```
usermod -l jerry tom
```

（4）锁定 tom 用户。
```
usermod -L tom
```
（5）解锁 tom 用户。
```
usermod -U tom
```
（6）添加新的附加组。
```
usermod -G deng tom
```
（7）修改用户登录 Shell。
```
usermod -s /bin/sh tom
```
（8）修改用户的 GID。
```
usermod -g 1003 tom
```
（9）指定帐号过期日期。
```
usermod -e 2020-12-31 tom
```

（10）指定用户帐号密码过期多少天后，禁用该帐号。
```
usermod -f 3 tom
```

---
## 参考文献
[usermod(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/usermod.8.html)

[CSDN.【Linux】一步一步学Linux——usermod命令(86)](https://blog.csdn.net/dengjin20104042056/article/details/97970997)

<Vssue title="usermod" />