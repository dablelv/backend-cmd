## 1.命令简介
chage（change）修改用户密码过期信息。

chage 可以更改密码修改之间的天数和上次更改密码的日期。系统使用此信息来确定用户何时必须修改其密码。

chage 也可以设置帐户的过期时间。

## 2.命令格式
```shell
chage [options] LOGIN
```
LOGIN 为用户名。

如果没有选择任何选项，chage 将以交互方式运行，提示用户所有字段的当前值。 输入新值以更改字段，或将该行留空以使用当前值。 当前值显示在中括号 [] 内。

## 3.选项说明
```shell
-d, --lastday LAST_DAY
  将最近一次密码设置时间设为 LAST_DAY。LAST_DAY 可以是距离 1970 年 1 月 1 日后的天数，也可以是 YYYY-MM-DD 格式的日期。如果 LAST_DAY 为 0 表示用户在下次登录时必须更改密码。
-E, --expiredate EXPIRE_DATE
  将帐户过期时间设为指定日期。EXPIRE_DATE 可以是距离 1970 年 1 月 1 日后的天数，也可以是 YYYY-MM-DD 格式的日期。如果 EXPIRE_DATE 为 -1 则表示账户永不过期。
-h, --help
  显示此帮助信息并退出。
-i, --iso8601
  打印日期时，使用 YYYY-MM-DD 格式。
-I, --inactive INACITVE
  设置密码过期后帐户被锁定前不活动的天数。如果 INACITVE 为 -1，将删除帐户的不活动状态。
-l, --list
  显示帐户年龄信息。
-m, --mindays MIN_DAYS
  将两次改变密码之间相距的最小天数设为 MIN_DAYS。此字段为 0 表示用户可以随时更改其密码。
-M, --maxdays MAX_DAYS
  将两次改变密码之间相距的最大天数设为 MAX_DAYS。此字段为 -1 表示取消检查密码的有效性。
-R, --root CHROOT_DIR
  在 CHROOT_DIR 目录中应用更改并使用 CHROOT_DIR 目录中的配置文件。 仅支持绝对路径。
-W, --warndays WARN_DAYS
  将密码过期警告天数设为 WARN_DAYS。
```

## 4.常用示例

（1）显示账户年龄信息。

```shell
chage -l root
Last password change      : Nov 27, 2022
Password expires          : never
Password inactive         : never
Account expires           : never
Minimum number of days between password change    : 0
Maximum number of days between password change    : 99999
Number of days of warning before password expires : 7
```

（2）设置两次更改密码之间相距的最大天数。
```shell
chage -M 180 root
```


（3）设置两次改变密码之间相距的最小天数。

```shell
chage -m 30 root
```

（4）强制用户登录时修改口令。

```shell
chage -d 0 tom
```

-d 后面如果接数字的话是从1970年1月1日累加，如`chage -d 5 tom`修改时间就变成1970年1月6日。也可以直接接日期如`chage -d 2023-02-18 tom`密码修改时间就变成了2023年2月18日。

-d 后面如果接 0 表示用户在下次登录时必须更改密码。

（5）设置账户的过期时间。

```shell
chage -E '2023-09-30' tom
```
如果想设置为永久有效，则 -E 后跟 -1。

```shell
chage -E -1 tom
```

（6）设置密码过期前多少天开始提醒。

```shell
chage -W 7 tom
```

（7）一个综合实例。

```shell
chage -m 0 -M 90 -W 15 tom
```
设置用户随时都可修改密码 且密码最高有效期为 90 天。在密码失效前，提前 15 天发出警告提醒。

---
## 参考文献
[chage(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/chage.1.html)

<Vssue title="chage" />