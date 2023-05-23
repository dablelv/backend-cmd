## 1.命令简介
change 更改用户密码过期信息。

chage 命令是用来修改帐号和密码的有效期限，系统会根据改信息确定用户何时必须更改其密码。

## 2.命令格式
```shell
chage [<options>] <LOGIN>
```

## 3.选项说明
```
-d, --lastday <LAST_DAY>
	将最近一次密码设置时间设为 LAST_DAY。
-E, --expiredate <EXPIRE_DATE>
	将帐户过期时间设为 EXPIRE_DATE。
-h, --help
	显示此帮助信息并推出。
-I, --inactive <INACITVE>
	过期 INACTIVE 天数后，设定密码为失效状态。
-l, --list
  	显示帐户年龄信息。
-m, --mindays <MIN_DAYS>
	将两次改变密码之间相距的最小天数设为 MIN_DAYS。
-M, --maxdays <MAX_DAYS>
	将两次改变密码之间相距的最大天数设为 MAX_DAYS。
-R, --root <CHROOT_DIR>
	chroot 到的目录。
-W, --warndays <WARN_DAYS>
	设置需要更改密码之前的警告天数。
```
如果没有选择任何选项，chage将以交互方式运行，提示用户所有字段的当前值。输入新值以更改字段，或将该行留空以使用当前值。当前值显示在一对 [] 标记之间。

## 4.常用示例
（1）显示帐户密码修改与过期信息。
```shell
chage -l mysql
Last password change                                    : Mar 26, 2015
Password expires                                        : never
Password inactive                                       : never
Account expires                                         : never
Minimum number of days between password change          : -1
Maximum number of days between password change          : -1
Number of days of warning before password expires       : -1
```
（2）设置用户密码有效期，最短修改间隔和过期前多少天开始收到告警。

比如设置 mysql 用户 60 天后密码过期，至少 7 天后才能修改密码，密码过期前 7 天开始收到告警信息。
```shell
chage -M 60 -m 7 -W 7 mysql

chage -l mysql
Last password change                                    : Mar 26, 2022
Password expires                                        : May 25, 2022
Password inactive                                       : never
Account expires                                         : never
Minimum number of days between password change          : 7
Maximum number of days between password change          : 60
Number of days of warning before password expires       : 7
```
（3）强制新建用户第一次登陆时修改密码。
```shell
chage -d 0 ava
```

（4）设置账号的有效期。
```shell
change -E  '2023-09-30' ava
```
如果密码过期后永不禁用账户命令为 chage -E -1 ava 即可。

（5）过期 5 天数后，设定密码为失效状态。
```shell
chage -I 5 ava
```

---
## 参考文献
[chage(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/chage.1.html)

<Vssue title="change" />