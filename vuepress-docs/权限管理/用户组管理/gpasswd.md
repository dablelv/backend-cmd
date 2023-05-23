## 1.命令简介
gpasswd 命令用于管理 /etc/group 和 /etc/gshadow。

每个组都可以有管理员、成员和密码。

系统管理员可以使用 -a 选项定义组管理员，使用 -m 选项定义成员。由组管理员用组名调用 gpasswd 会提示输入组的新密码，以此修改组密码。

## 2.命令格式
```
gpasswd [OPTIONS] GROUP
```

## 3.选项说明
```
-a, --add USER
	向组 GROUP 中添加用户 USER。
-d, --delete USER
	从组 GROUP 中添加或删除用户
-h, --help
	显示此帮助信息并退出
-r, --delete-password
	删除组密码
-R, --restric	t
	向其成员限制访问组 GROUP
-M, --members USER,...
	设置组 GROUP 的成员列表
-A, --administrators <ADMIN>,...
	设置组的管理员列表。
```

## 4.常用示例
（1）向组 test 中添加用户 itcast。
```
gpasswd -a itcast test
```

（2）从组 test 中删除用户。
```
gpasswd -d itcast test
```

（3）移除组 test 的密码。
```
gpasswd  -r test
```
（4）设置组的管理员列表。
```
gpasswd -A deng test
```

（5）给用户组创建密码。
```
gpasswd test
```

---
## 参考文献
[gpasswd(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/gpasswd.1.html)

[CSDN.【Linux】一步一步学Linux——gpasswd命令(90)](https://blog.csdn.net/dengjin20104042056/article/details/98104598)

<Vssue title="gpasswd" />