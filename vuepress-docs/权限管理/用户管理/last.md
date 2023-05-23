## 1.命令简介
last 列出登录系统的用户列表。

last 用于显示用户最近登录信息。单独执行 last 命令，它会读取/var/log/wtmp的文件，并把该给文件的内容记录的登入系统的用户名单全部显示出来。

last 的作用是显示近期用户或终端的登录情况，通过查看系统记录的日志文件内容，进而使管理员可以获知谁曾经或者企图连接系统。

## 2.命令格式
```shell
last [-R] [-num] [ -n num ] [-adFiowx] [ -f file ] [ -t YYYYMMDDHHMMSS ] [name...]  [tty...]
```
## 3.选项说明
```
-a
	把从何处登入系统的主机名称或ip地址，显示在最后一行。
-d
	将 IP 地址转换成主机名称。
-f <file>
	指定要搜索的文件，而不是 /var/log/wtmp。
-n <num>, -<num>
	设置列出名单的显示行数。
-R
	不显示登入系统的主机名称或IP地址。
-x
	显示系统关机，重新开机，以及执行等级的改变等信息。
```
## 4.常用示例
（1）显示近期用户或终端的登录情况。
```shell
last
root     pts/2        223.73.1.91      Thu Oct 27 11:18   still logged in   
root     pts/1        223.73.1.91      Thu Oct 27 10:39   still logged in   
root     pts/0        223.73.1.91      Thu Oct 27 09:36   still logged in   
root     pts/3        223.73.1.91      Wed Oct 26 18:46 - 22:10  (03:23)    
root     pts/0        223.73.1.91      Wed Oct 26 18:17 - 22:10  (03:52)    
root     pts/2        223.73.5.238     Wed Oct 26 15:22 - 18:59  (03:37)    
root     pts/1        223.73.5.238     Wed Oct 26 15:09 - 19:11  (04:01)
...
```
第一列：用户名。

第二列：终端位置。pts：意味着从 SSH 或 TELNET 的远程连接用户。​tty：意味着直接连接到计算机或者本地连接用户。除了重启，所有状态会在启动时显示。

第三列：登录 IP 或者内核。0.0 或者什么都没有的话，意味着用户通过本地终端连接重启活动，会显示内核版本。

第四列：开始时间。

第五列：结束时间。still log in：还在登录。down：直到正常关机。crash：直到强制关机。

第六列：持续时间。

（2）指定显示的行数。
```shell
last -5
root     pts/2        223.73.1.91      Thu Oct 27 11:18   still logged in   
root     pts/1        223.73.1.91      Thu Oct 27 10:39   still logged in   
root     pts/0        223.73.1.91      Thu Oct 27 09:36   still logged in   
root     pts/3        223.73.1.91      Wed Oct 26 18:46 - 22:10  (03:23)    
root     pts/0        223.73.1.91      Wed Oct 26 18:17 - 22:10  (03:52)    

wtmp begins Sun Oct 16 21:39:53 2022
```
（3）最后一列显示主机 IP 地址。

把从何处登入系统的主机名称或ip地址，显示在最后一行。
```shell
last -5a
root     pts/2        Thu Oct 27 11:18   still logged in    223.73.1.91
root     pts/1        Thu Oct 27 10:39   still logged in    223.73.1.91
root     pts/0        Thu Oct 27 09:36   still logged in    223.73.1.91
root     pts/3        Wed Oct 26 18:46 - 22:10  (03:23)     223.73.1.91
root     pts/0        Wed Oct 26 18:17 - 22:10  (03:52)     223.73.1.91

wtmp begins Sun Oct 16 21:39:53 2022
```
（4）显示指定用户的登录记录。

比如查看 root 用户最近的 5 条记录。
```shell
last -5 root
root     pts/2        223.73.1.91      Thu Oct 27 11:18   still logged in   
root     pts/1        223.73.1.91      Thu Oct 27 10:39   still logged in   
root     pts/0        223.73.1.91      Thu Oct 27 09:36   still logged in   
root     pts/3        223.73.1.91      Wed Oct 26 18:46 - 22:10  (03:23)    
root     pts/0        223.73.1.91      Wed Oct 26 18:17 - 22:10  (03:52)    

wtmp begins Sun Oct 16 21:39:53 2022
```
（5）指定登录记录文件。

/var/log/btmp 该文件比较详细，可以显示 ssh 远程登录的信息。
```
last -5 -f /var/log/btmp
last -5 -f /var/log/btmp
admin    ssh:notty    92.255.85.113    Thu Oct 27 13:43    gone - no logout 
admin    ssh:notty    92.255.85.113    Thu Oct 27 13:43 - 13:43  (00:00)    
test     ssh:notty    92.255.85.113    Thu Oct 27 13:38 - 13:43  (00:05)    
test     ssh:notty    92.255.85.113    Thu Oct 27 13:38 - 13:38  (00:00)    
guest    ssh:notty    92.255.85.113    Thu Oct 27 13:33 - 13:38  (00:04)    

btmp begins Mon Oct 17 03:43:01 2022
```
（6）显示完整登录和登出信息。
```shell
last -F
root     pts/2        223.73.1.91      Thu Oct 27 11:18:16 2022   still logged in                      
root     pts/1        223.73.1.91      Thu Oct 27 10:39:21 2022   still logged in                      
root     pts/0        223.73.1.91      Thu Oct 27 09:36:20 2022   still logged in                      
root     pts/3        223.73.1.91      Wed Oct 26 18:46:50 2022 - Wed Oct 26 22:10:24 2022  (03:23)    
root     pts/0        223.73.1.91      Wed Oct 26 18:17:53 2022 - Wed Oct 26 22:10:24 2022  (03:52)
```
## 5.utmp、wtmp 与 btmp 文件
Linux 用户登录信息放在三个文件中：

-  /var/run/utmp：记录当前正在登录系统的用户信息，默认由 who 和w 记录当前登录用户的信息，uptime 记录系统启动时间。

- /var/log/wtmp：记录当前正在登录和历史登录系统的用户信息，默认由last命令查看；

- /var/log/btmp：记录失败的登录尝试信息，默认由 lastb 命令查看。

这三个文件都是二进制数据文件，并且三个文件结构完全相同，是由 /usr/include/bits/utmp.h 文件定义了这三个文件的结构体。

默认情况下文件的日志信息会通过 logrotate 日志管理工具定期清理。logrotate 的配置文件是 /etc/logrotate.conf，此处是 logrotate 的缺省设置，通常不需要对它进行修改。日志文件的轮循压缩等设置存放在独立的配置文件中，它（们）放在 /etc/logrotate.d/ 目录下，它会覆盖缺省设置。

如果不想记录相关信息，则可以直接将相关文件删除即可。如果系统不存在该文件，则需要在此路径 touch 一个文件就可以继续记录相关信息了。

---
## 参考文献
[last(1) — Linux manual page  - man7.org](https://man7.org/linux/man-pages/man1/last.1.html)

<Vssue title="last" />