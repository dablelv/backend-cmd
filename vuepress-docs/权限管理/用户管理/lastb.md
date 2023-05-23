## 1.命令简介
lastb 命令用于显示用户错误的登录列表。

lastb 可以发现系统的登录异常。单独执行 lastb 命令，它会读取位于 /var/log 目录下名为 btmp 的文件，并把该文件内容记录的登入失败的用户名单，全部显示出来。

实际上 lastb 是 last 的一个软链，所以 lastb 功能均可由 last 实现。

## 2.命令格式
```shell
lastb [-R] [-num] [ -n num ] [ -f file ] [-adFiowx] [name...]  [tty...]
```

## 3.选项说明
```
-n <num>, -<num> 
	显示最近登录信息的行数。
-t <YYYYMMDDHHMMSS>
	根据登录的时间显示指定用户的登录状态。
-R
	禁止显示主机名字段。
-a
	在最后一列显示主机名称。
-d
	对于非本地登录的用户，将显示的 IP 地址转换为主机名。
-i
	类似于 “-d” 的选项，将显示的主机名称转换为 IP 地址。
-o
	读取旧的类型的 wtmp 文件。
-x
	显示系统登录等级。
--help
	显示帮助信息。
--version
	显示版本显示。
```
## 4.常用示例
（1）列出登入失败的用户记录。
```shell
lastb -5
admin    ssh:notty    92.255.85.113    Thu Oct 27 14:29 - 14:29  (00:00)    
admin    ssh:notty    92.255.85.113    Thu Oct 27 14:29 - 14:29  (00:00)    
operator ssh:notty    92.255.85.113    Thu Oct 27 14:24 - 14:24  (00:00)    
1234     ssh:notty    92.255.85.113    Thu Oct 27 14:20 - 14:20  (00:00)    
1234     ssh:notty    92.255.85.113    Thu Oct 27 14:20 - 14:20  (00:00)

btmp begins Mon Oct 17 03:43:01 2022
```
lastb 指令，它会读取位于 /var/log/btmp 的文件，并把该文件内容记录的登入系统失败的用户名单，全部显示出来。btmp 是二进制文件，所以用 last -f /var/log/btmp 结果一样。

（2）使用 -a 选项把来源 IP 显示在最后列。
```shell
lastb -a5
admin    ssh:notty    Thu Oct 27 14:33 - 14:33  (00:00)     92.255.85.113
admin    ssh:notty    Thu Oct 27 14:33 - 14:33  (00:00)     92.255.85.113
admin    ssh:notty    Thu Oct 27 14:29 - 14:29  (00:00)     92.255.85.113
admin    ssh:notty    Thu Oct 27 14:29 - 14:29  (00:00)     92.255.85.113
operator ssh:notty    Thu Oct 27 14:24 - 14:24  (00:00)     92.255.85.113

btmp begins Mon Oct 17 03:43:01 2022
```

（3）不显示主机名字段。
```shell
lastb -5 -R
jeremias ssh:notty    Thu Oct 27 14:40 - 14:40  (00:00)    
jeremias ssh:notty    Thu Oct 27 14:40 - 14:40  (00:00)    
root     ssh:notty    Thu Oct 27 14:40 - 14:40  (00:00)    
root     ssh:notty    Thu Oct 27 14:40 - 14:40  (00:00)    
matthew  ssh:notty    Thu Oct 27 14:39 - 14:39  (00:00)    

btmp begins Mon Oct 17 03:43:01 2022
```
（4）显示指定用户登录失败记录。

比如显示 root 用户登录失败记录。
```shell
lastb -n 5 root
root     ssh:notty    147.182.179.237  Thu Oct 27 14:44 - 14:44  (00:00)    
root     ssh:notty    92.255.85.113    Thu Oct 27 14:42 - 14:42  (00:00)    
root     ssh:notty    61.177.172.145   Thu Oct 27 14:40 - 14:40  (00:00)    
root     ssh:notty    61.177.172.145   Thu Oct 27 14:40 - 14:40  (00:00)    
root     ssh:notty    92.255.85.113    Thu Oct 27 14:38 - 14:38  (00:00)    

btmp begins Mon Oct 17 03:43:01 2022
```

---
## 参考文献
[lastb(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/lastb.1.html)

<Vssue title="lastb" />