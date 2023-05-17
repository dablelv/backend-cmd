## 1.命令简介
users 打印当前登录的用户名列表。

每个显示的用户名对应一个登录会话。如果一个用户有不止一个登录会话，那他的用户名将重复显示对应的次数。

## 2.命令格式
```shell
users [OPTION]... [FILE]
```
## 3.选项说明
```
--help
	显示此帮助信息并退出。
--version
	显示版本信息并退出。
```
## 4.常用示例
显示系统当前登录的用户名。
```shell
users
root root root
```

---
## 参考文献
[users(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/users.1.html)
