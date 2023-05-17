## 本书由来

Linux 命令是用户与 Linux 交互的主要手段之一，是 Linux 后台开发与运维从业者的必备技能。

Linux 命令分两类，Shell 内建命令和 Linux 命令。学习掌握常用的 Linux 命令，在求职应聘和日常工作中，都会给我们带来很大的帮助。当然，熟练使用 Linux 命令，也有助于我们进一步理解 Linux 系统的方方面面，比如资源管理、文件系统、网络通信等。

本人根据自己多年的后台开发工作经验，记录了后台开发可能用到的命令，供同行参阅。

分享这些命令的初衷有两点：
- 作为个人学习笔记，以备日常工作需要时查阅；
- 网络和市面上已经有很多关于 Linux 命令的文章和书籍，但是因为命令选项介绍的不够齐全或者是示例不够丰富，所以自己整理记录下命令的选项说明和常见用例，以飨读者。

## 内容简介

本书是一个偏手册类的读物，但相对于原始的英文手册，表达更加直白，并且给出了很多原手册没有的实例，能够帮助大家更方便地掌握命令的使用。大家在阅读命令手册时，可将本书作为一个补充的学习资料。

因为工作性质的原因，本书主要收录后台开发工作中可能用到的命令，偏运维的命令可能不会涉及太多。本书仍在不断完善更新，若为常用，后续也会更新进来。

在命令表达形式上，遵守如下几个规则：
```
FILE：大写的内容为待替换内容（优先使用）
<file>：被尖括号括起的内容为待替换内容
[-abc]：中括号内的选项或内容是可选的
-a|-b：被 | 分隔的选项是多选一，不能一起使用
...：三个点号表示重复
```

注意，所有命令示例均通过 [Bash](https://baike.baidu.com/item/bash/6367661?fr=aladdin)（Bourne Again Shell） 解释完成，其他版本的 Shell 在命令选项上可能会有出入，不过大同小异。

## 目标读者

本书虽然主要收录后台开发工作中可能用到的命令，但是作为 Linux 从业者、Linux 运维人员和 Linux 学习爱好者等都可能会用到其中的命令。所以本书适合但不限于如下读者：

- Linux 后台开发人员
- Linux 从业者
- Linux 运维人员
- Linux 学习爱好者

## 互动勘误

如果您对文章内容有任何疑问和建议，欢迎在应相应章节下留言探讨。

本书为开源书籍，希望得到大家的协同共建，迭代丰富。如果有您的建议和 PR，它将会变得更好。

# 文件系统

## 1.文件与目录查看

[Linux 命令（29）—— ls 命令](https://dablelv.blog.csdn.net/article/details/78611114)
[Linux 命令（47）—— file 命令](https://dablelv.blog.csdn.net/article/details/83796138)
[Linux 命令（48）—— stat 命令](https://dablelv.blog.csdn.net/article/details/83832834)
[Linux 命令（85）—— md5sum 命令](https://dablelv.blog.csdn.net/article/details/102899310)
[Linux 命令（68）—— realpath 命令](https://dablelv.blog.csdn.net/article/details/90710645)
[Linux 命令（98）—— basename 命令](https://dablelv.blog.csdn.net/article/details/103124508)
[Linux 命令（99）—— dirname 命令](https://dablelv.blog.csdn.net/article/details/103125135)
[Linux 命令（119）—— diff 命令](https://dablelv.blog.csdn.net/article/details/104234980)
[Linux 命令（140）—— tree 命令](https://editor.csdn.net/md/?articleId=120898034)
[Linux 命令（151）—— pwd 命令](https://dablelv.blog.csdn.net/article/details/127505489)
[Linux 命令（153）—— dirs 命令（builtin）](https://blog.csdn.net/K346K346/article/details/127511228)
[Linux 命令（154）—— dir 命令](https://blog.csdn.net/K346K346/article/details/127515621)
[Linux 命令（233）—— sum 命令](https://dablelv.blog.csdn.net/article/details/128430456)
[Linux 命令（234）—— cksum 命令](https://dablelv.blog.csdn.net/article/details/128430640)

## 2.文件与目录管理
[Linux 命令（10）—— split 命令](https://dablelv.blog.csdn.net/article/details/77142786)
[Linux 命令（21）—— cd 命令（builtin）](https://dablelv.blog.csdn.net/article/details/78574321)
[Linux 命令（22）—— touch 命令](https://dablelv.blog.csdn.net/article/details/78577290)
[Linux 命令（23）—— rm 命令](https://dablelv.blog.csdn.net/article/details/78577842)
[Linux 命令（24）—— mv 命令](https://dablelv.blog.csdn.net/article/details/78579267)
[Linux 命令（25）—— cp 命令](https://dablelv.blog.csdn.net/article/details/78581360)
[Linux 命令（26）—— rename 命令](https://dablelv.blog.csdn.net/article/details/78589104)
[Linux 命令（28）—— tee 命令](https://dablelv.blog.csdn.net/article/details/78599341)
[Linux 命令（78）—— rmdir 命令](https://dablelv.blog.csdn.net/article/details/102633396)
[Linux 命令（147） —— truncate 命令](https://dablelv.blog.csdn.net/article/details/127249599)
[Linux 命令（152）—— mkdir 命令](https://blog.csdn.net/K346K346/article/details/127509701)
[Linux 命令（235）—— mktemp 命令](https://dablelv.blog.csdn.net/article/details/128431136)

## 3.文本查看
[Linux 命令（12）—— wc 命令](https://dablelv.blog.csdn.net/article/details/77148364)
[Linux 命令（20）—— cat 命令](https://dablelv.blog.csdn.net/article/details/78569737)
[Linux 命令（32）—— grep 命令](https://dablelv.blog.csdn.net/article/details/78664388)
[Linux 命令（86）—— head 命令](https://dablelv.blog.csdn.net/article/details/102905398)
[Linux 命令（87）—— tail 命令](https://dablelv.blog.csdn.net/article/details/102915348)
[Linux 命令（88）—— more 命令](https://dablelv.blog.csdn.net/article/details/102922934)
[Linux 命令（89）—— less 命令](https://dablelv.blog.csdn.net/article/details/102967501)
[Linux 命令（114）—— nl 命令](https://dablelv.blog.csdn.net/article/details/104228749)
[Linux 命令（115）—— rev 命令](https://dablelv.blog.csdn.net/article/details/104235456)
[Linux 命令（116）—— tac 命令](https://dablelv.blog.csdn.net/article/details/104238049)

## 4.文本编辑
[Linux 命令（3）—— sed 命令](https://dablelv.blog.csdn.net/article/details/53197905)
[Linux 命令（6）—— sort 命令](https://dablelv.blog.csdn.net/article/details/66974323)
[Linux 命令（7）—— uniq 命令](https://dablelv.blog.csdn.net/article/details/70175532)
[Linux 命令（11）—— col 命令](https://dablelv.blog.csdn.net/article/details/77145614)
[Linux 命令（13）—— cut 命令](https://dablelv.blog.csdn.net/article/details/77151267)
[Linux 命令（34）—— vim 命令](https://dablelv.blog.csdn.net/article/details/78667783)
[Linux 命令（35）—— iconv 命令](https://dablelv.blog.csdn.net/article/details/79078761)
[Linux 命令（36）—— awk 命令](https://dablelv.blog.csdn.net/article/details/50290753)
[Linux 命令（41）—— tr 命令](https://dablelv.blog.csdn.net/article/details/80223771)
[Linux 命令（42）—— join 命令](https://dablelv.blog.csdn.net/article/details/80237368)
[Linux 命令（43）—— paste 命令](https://dablelv.blog.csdn.net/article/details/80241041)
[Linux 命令（44）—— expand 命令](https://dablelv.blog.csdn.net/article/details/80246322)
[Linux 命令（243）—— indent 命令](https://dablelv.blog.csdn.net/article/details/128638896)

## 5.文件查找
[Linux 命令（31）—— find 命令](https://dablelv.blog.csdn.net/article/details/78660849)
[Linux 命令（90）—— which 命令](https://dablelv.blog.csdn.net/article/details/102972794)
[Linux 命令（91）—— whereis 命令](https://dablelv.blog.csdn.net/article/details/102980621)
[Linux 命令（92）—— locate 命令](https://dablelv.blog.csdn.net/article/details/103022717)

## 6.打包与压缩
[Linux 命令（19）—— tar 命令](https://dablelv.blog.csdn.net/article/details/78568419)
[Linux 命令（102）—— zip 命令](https://dablelv.blog.csdn.net/article/details/103230736)
[Linux 命令（103）—— unzip 命令](https://dablelv.blog.csdn.net/article/details/103245489)
[Linux 命令（117）—— gzip 命令](https://dablelv.blog.csdn.net/article/details/104234113)
[Linux 命令（155）—— gunzip 命令](https://blog.csdn.net/K346K346/article/details/127519320)
[Linux 命令（118）—— bzip2 命令](https://dablelv.blog.csdn.net/article/details/104234959)
[Linux 命令（156）—— bunzip2 命令](https://blog.csdn.net/K346K346/article/details/127522398)
[Linux 命令（157）—— zipinfo 命令](https://blog.csdn.net/K346K346/article/details/127523290)
[Linux 命令（158）—— bzip2recover 命令](https://blog.csdn.net/K346K346/article/details/127530018)

## 7.磁盘管理
[Linux 命令（14）—— df 命令](https://dablelv.blog.csdn.net/article/details/78448671)
[Linux 命令（38）—— fdisk 命令](https://dablelv.blog.csdn.net/article/details/79370549)
[Linux 命令（39）—— du 命令](https://dablelv.blog.csdn.net/article/details/79822570)

# 进程管理
## 1.进程观测
[Linux 命令（73）—— ps 命令](https://dablelv.blog.csdn.net/article/details/101431102)
[Linux 命令（79）—— pidof 命令](https://dablelv.blog.csdn.net/article/details/102654633)
[Linux 命令（137）—— strace 命令](https://blog.csdn.net/K346K346/article/details/105471172)
[Linux 命令（145） —— pmap 命令](https://blog.csdn.net/K346K346/article/details/125892148)
[Linux 命令（148） —— pstack 命令](https://blog.csdn.net/K346K346/article/details/125898878)
[Linux 命令（176）—— pstree 命令](https://blog.csdn.net/K346K346/article/details/127570347)
[Linux 命令（177）—— pgrep 命令](https://blog.csdn.net/K346K346/article/details/127571916)

## 2.性能检测
[Linux 命令（74）—— top 命令](https://dablelv.blog.csdn.net/article/details/102385811)
[Linux 命令（123）—— iostat 命令](https://dablelv.blog.csdn.net/article/details/104235387)
[Linux 命令（124）—— lsof 命令](https://dablelv.blog.csdn.net/article/details/104235400)
[Linux 命令（125）—— vmstat 命令](https://dablelv.blog.csdn.net/article/details/104488660)
[Linux 命令（143）—— valgrind 命令](https://dablelv.blog.csdn.net/article/details/127165892)

## 3.进程与作业管理
[Linux命令（1）—— xargs 命令](https://dablelv.blog.csdn.net/article/details/54233870)
[Linux 命令（18）—— screen 命令](https://dablelv.blog.csdn.net/article/details/78556681)
[Linux 命令（40）—— nohup 命令](https://dablelv.blog.csdn.net/article/details/79985071)
[Linux 命令（51）—— ipcs 命令](https://dablelv.blog.csdn.net/article/details/85275205)
[Linux 命令（52）—— ipcrm 命令](https://dablelv.blog.csdn.net/article/details/85278236)
[Linux 命令（54）—— trap 命令（builtin）](https://dablelv.blog.csdn.net/article/details/86717160)
[Linux 命令（67）—— time 命令](https://dablelv.blog.csdn.net/article/details/90713451)
[Linux 命令（72）—— ulimit 命令（builtin）](https://dablelv.blog.csdn.net/article/details/100601956)
[Linux 命令（76）—— kill 命令](https://dablelv.blog.csdn.net/article/details/102476221)
[Linux 命令（77）—— killall 命令](https://dablelv.blog.csdn.net/article/details/102476620)
[Linux 命令（104）—— crontab 命令](https://dablelv.blog.csdn.net/article/details/103264609)
[Linux 命令（178）—— pkill 命令](https://dablelv.blog.csdn.net/article/details/127573349)
[Linux 命令（179）—— nice 命令](https://blog.csdn.net/K346K346/article/details/127575054)
[Linux 命令（180）—— renice 命令](https://blog.csdn.net/K346K346/article/details/127575872)
[Linux 命令（181）—— jobs 命令（builtin）](https://blog.csdn.net/K346K346/article/details/127576322)
[Linux 命令（182）—— fg 命令（builtin）](https://blog.csdn.net/K346K346/article/details/127591628)
[Linux 命令（183）—— bg 命令（builtin）](https://blog.csdn.net/K346K346/article/details/127578110)
[Linux 命令（184）—— at 命令（builtin）](https://blog.csdn.net/K346K346/article/details/127592443)
[Linux 命令（185）—— batch 命令](https://dablelv.blog.csdn.net/article/details/127602820)
[Linux 命令（186）—— atq 命令](https://dablelv.blog.csdn.net/article/details/127603326)
[Linux 命令（187）—— atrm 命令](https://dablelv.blog.csdn.net/article/details/127603716)
[Linux 命令（190）—— skill 命令](https://blog.csdn.net/K346K346/article/details/127618993)
[Linux 命令（122）—— watch 命令](https://dablelv.blog.csdn.net/article/details/104235000)

# 编程命令
## 1.编译调试
[Linux 命令（62）—— ar 命令](https://dablelv.blog.csdn.net/article/details/89066764)
[Linux 命令（65）—— ld 命令](https://dablelv.blog.csdn.net/article/details/89088652)
[Linux 命令（66）—— as 命令](https://dablelv.blog.csdn.net/article/details/89088671)
[Linux 命令（236）—— g++ 命令](https://dablelv.blog.csdn.net/article/details/52040256)
[Linux 命令（237）—— gdb 命令](https://dablelv.blog.csdn.net/article/details/50283861)

## 2.二进制工具
[Linux 命令（57）—— objdump 命令](https://dablelv.blog.csdn.net/article/details/88203663)
[Linux 命令（58）—— readelf 命令](https://dablelv.blog.csdn.net/article/details/88204924)
[Linux 命令（59）—— c++filt 命令](https://dablelv.blog.csdn.net/article/details/88225726)
[Linux 命令（60）—— strip 命令](https://dablelv.blog.csdn.net/article/details/88234001)
[Linux 命令（61）—— ldd 命令](https://dablelv.blog.csdn.net/article/details/89062163)
[Linux 命令（63）—— nm 命令](https://dablelv.blog.csdn.net/article/details/89088542)
[Linux 命令（64）—— strings 命令](https://dablelv.blog.csdn.net/article/details/89088572)
[Linux 命令（69）—— objcopy 命令](https://dablelv.blog.csdn.net/article/details/92708016)
[Linux 命令（70）—— size 命令](https://dablelv.blog.csdn.net/article/details/92708379)
[Linux 命令（71）—— ldconfig 命令](https://dablelv.blog.csdn.net/article/details/100170615)
[Linux 命令（2）—— od 命令](https://dablelv.blog.csdn.net/article/details/54177989)
[Linux 命令（142）—— hexdump 命令](https://blog.csdn.net/K346K346/article/details/125908028)

## 3.Shell 编程
[Linux 命令（4）—— declare/typeset 命令（builtin）](https://dablelv.blog.csdn.net/article/details/61203535)
[Linux 命令（46）—— read 命令（builtin）](https://dablelv.blog.csdn.net/article/details/83385774)
[Linux 命令（53）—— exit 命令（builtin）](https://dablelv.blog.csdn.net/article/details/86714401)
[Linux 命令（144）—— eval 命令（builtin）](https://dablelv.blog.csdn.net/article/details/127184461)
[Linux 命令（95）—— test 命令](https://dablelv.blog.csdn.net/article/details/103047324)
[Linux 命令（27）—— echo 命令](https://dablelv.blog.csdn.net/article/details/78598376)
[Linux 命令（100）—— expr 命令](https://dablelv.blog.csdn.net/article/details/103134615)
[Linux 命令（225）—— printf 命令](https://dablelv.blog.csdn.net/article/details/128375606)
[Linux 命令（226）—— exec 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128376295)
[Linux 命令（229）—— readonly 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128423098)
[Linux 命令（230）—— set 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128423357)
[Linux 命令（231）—— let 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128424166)
[Linux 命令（239）—— expect 命令](https://dablelv.blog.csdn.net/article/details/128583010)
[Linux 命令（249）—— unset 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128766699)
[Linux 命令（250）—— enable 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128767786)
[Linux 命令（251）—— builtin 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128771582)
[Linux 命令（252）—— wait 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128772193)
[Linux 命令（253）—— command 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128772466)
[Linux 命令（255）—— sleep 命令](https://dablelv.blog.csdn.net/article/details/128781382)

# 系统管理
## 1.系统观测
[Linux 命令（33）—— uname 命令](https://dablelv.blog.csdn.net/article/details/78665461)
[Linux 命令（37）—— free 命令](https://dablelv.blog.csdn.net/article/details/79307022)
[Linux 命令（75）—— uptime 命令](https://dablelv.blog.csdn.net/article/details/102420633)
[Linux 命令（94）—— env 命令](https://dablelv.blog.csdn.net/article/details/103039630)
[Linux 命令（159）—— hostname 命令](https://dablelv.blog.csdn.net/article/details/127530864)
[Linux 命令（160）—— dmesg 命令](https://blog.csdn.net/K346K346/article/details/127533022)
[Linux 命令（205）—— dnsdomainname 命令](https://dablelv.blog.csdn.net/article/details/128161028)
[Linux 命令（247）—— domainname / nisdomainname / ypdomainname 命令](https://blog.csdn.net/K346K346/article/details/128762153)
[inux 命令（257）—— hostid 命令](https://dablelv.blog.csdn.net/article/details/128782245)

## 2.系统管理
[Linux 命令（5）—— shutdown 命令](https://dablelv.blog.csdn.net/article/details/62893114)
[Linux 命令（49）—— export 命令（builtin）](https://dablelv.blog.csdn.net/article/details/84310975)
[Linux 命令（105）—— service 命令](https://dablelv.blog.csdn.net/article/details/103275974)
[Linux 命令（106）—— chkconfig 命令](https://dablelv.blog.csdn.net/article/details/103488182)
[Linux 命令（107）—— systemctl 命令](https://dablelv.blog.csdn.net/article/details/103587347)
[Linux 命令（188）—— runlevel 命令](https://dablelv.blog.csdn.net/article/details/127603926)
[Linux 命令（189）—— init 命令](https://dablelv.blog.csdn.net/article/details/127612303)
[Linux 命令（191）—— ntsysv 命令](https://blog.csdn.net/K346K346/article/details/127622384)
[Linux 命令（221）—— poweroff 命令](https://dablelv.blog.csdn.net/article/details/128373149)
[Linux 命令（222）—— halt 命令](https://dablelv.blog.csdn.net/article/details/128373427)
[Linux 命令（223）—— reboot 命令](https://dablelv.blog.csdn.net/article/details/128373667)

## 3.索引维护
[Linux 命令（93）—— updatedb 命令](https://dablelv.blog.csdn.net/article/details/103028183)
[Linux 命令（150）—— mandb 命令](https://dablelv.blog.csdn.net/article/details/127495123)

## 4.CPU 管理
[Linux 命令（146） —— lscpu 命令](https://blog.csdn.net/K346K346/article/details/127228981)

## 5.终端配置
[Linux 命令（228）—— shopt 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128179050)
[Linux 命令（232）—— bind 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128427550)
[Linux 命令（224）—— ctrlaltdel 命令](https://dablelv.blog.csdn.net/article/details/128374476)
[Linux 命令（240）—— tput 命令](https://dablelv.blog.csdn.net/article/details/128584675)
[Linux 命令（244）—— reset 命令](https://dablelv.blog.csdn.net/article/details/128678825)
[Linux 命令（254）—— tty 命令](https://dablelv.blog.csdn.net/article/details/128775080)
[Linux 命令（256）—— stty 命令](https://dablelv.blog.csdn.net/article/details/128781833)
[Linux 命令（258）—— consoletype 命令](https://dablelv.blog.csdn.net/article/details/128782496)

# 权限管理
## 1.权限控制
[Linux 命令（15）—— umask 命令（builtin）](https://dablelv.blog.csdn.net/article/details/78505795)
[Linux 命令（16）—— chattr 与 lsattr 命令](https://dablelv.blog.csdn.net/article/details/78505844)
[Linux 命令（17）—— su 与 sudo 命令](https://dablelv.blog.csdn.net/article/details/78536487)
[Linux 命令（80）—— chown 命令](https://dablelv.blog.csdn.net/article/details/102782740)
[Linux 命令（81）—— chmod 命令](https://dablelv.blog.csdn.net/article/details/102827264)
[Linux 命令（82）—— chgrp 命令](https://dablelv.blog.csdn.net/article/details/102841260)
[Linux 命令（172）—— visudo 命令](https://blog.csdn.net/K346K346/article/details/127556356)
[Linux 命令（174）—— setfacl 命令](https://blog.csdn.net/K346K346/article/details/127560421)
[Linux 命令（175）—— getfacl 命令](https://blog.csdn.net/K346K346/article/details/127567074)

## 2.用户与组管理
[Linux 命令（83）—— groups 命令](https://dablelv.blog.csdn.net/article/details/102842260)
[Linux 命令（84）—— id 命令](https://dablelv.blog.csdn.net/article/details/102845312)
[Linux 命令（128）—— useradd 命令](https://dablelv.blog.csdn.net/article/details/104734779)
[Linux 命令（161）—— adduser 命令](https://blog.csdn.net/K346K346/article/details/127537796)
[Linux 命令（129）—— passwd 命令](https://dablelv.blog.csdn.net/article/details/104740812)
[Linux 命令（130）—— userdel 命令](https://dablelv.blog.csdn.net/article/details/104742009)
[Linux 命令（131）—— usermod 命令](https://dablelv.blog.csdn.net/article/details/104742422)
[Linux 命令（132）—— groupadd 命令](https://dablelv.blog.csdn.net/article/details/104742822)
[Linux 命令（133）—— groupdel 命令](https://dablelv.blog.csdn.net/article/details/104743102)
[Linux 命令（134）—— groupmod 命令](https://dablelv.blog.csdn.net/article/details/104743213)
[Linux 命令（135）—— gpasswd 命令](https://dablelv.blog.csdn.net/article/details/104743418)
[Linux 命令（162）—— newgrp 命令](https://blog.csdn.net/K346K346/article/details/127538102)
[Linux 命令（163）—— change 命令](https://blog.csdn.net/K346K346/article/details/127538338)
[Linux 命令（164）—— who 命令](https://blog.csdn.net/K346K346/article/details/127547341)
[Linux 命令（165）—— whoami 命令](https://blog.csdn.net/K346K346/article/details/127548448)
[Linux 命令（166）—— w 命令](https://blog.csdn.net/K346K346/article/details/127549180)
[Linux 命令（167）—— last 命令](https://blog.csdn.net/K346K346/article/details/127550411)
[Linux 命令（168）—— lastb 命令](https://dablelv.blog.csdn.net/article/details/127551178)
[Linux 命令（169）—— users 命令](https://blog.csdn.net/K346K346/article/details/127553139)
[Linux 命令（170）—— lastlog 命令](https://blog.csdn.net/K346K346/article/details/127554251)
[Linux 命令（171）—— ac 命令](https://blog.csdn.net/K346K346/article/details/127555435)
[Linux 命令（173）—— logname 命令](https://blog.csdn.net/K346K346/article/details/127559270)
[Linux 命令（245）—— chage 命令](https://dablelv.blog.csdn.net/article/details/128728018)
# 网络管理
## 1.网络传输
[Linux 命令（8）—— rz 命令与 sz 命令](https://dablelv.blog.csdn.net/article/details/71515740)
[Linux 命令（30）—— scp 命令](https://dablelv.blog.csdn.net/article/details/78627879)
[Linux 命令（127）—— wget 命令](https://dablelv.blog.csdn.net/article/details/104720657)
[Linux 命令（136）—— curl 命令](https://blog.csdn.net/dengjin20104042056/article/details/100145300)
## 2.网络管理
[Linux 命令（9）—— tcpdump 命令](https://dablelv.blog.csdn.net/article/details/71587943)
[Linux 命令（55）—— netstat 命令](https://dablelv.blog.csdn.net/article/details/86743379)
[Linux 命令（56）—— telnet 命令](https://dablelv.blog.csdn.net/article/details/87369308)
[Linux 命令（108）—— ifconfig 命令](https://dablelv.blog.csdn.net/article/details/104184926)
[Linux 命令（109）—— ping 命令](https://dablelv.blog.csdn.net/article/details/104198666)
[Linux 命令（120）—— route 命令](https://dablelv.blog.csdn.net/article/details/104234994)
[Linux 命令（126）—— ssh 命令](https://dablelv.blog.csdn.net/article/details/104616612)
[Linux 命令（138）—— nc / ncat 命令](https://dablelv.blog.csdn.net/article/details/105104410)
[Linux 命令（139）—— nslookup 命令](https://dablelv.blog.csdn.net/article/details/113955829)
[Linux 命令（141）—— nmap 命令](https://dablelv.blog.csdn.net/article/details/121154415)
[Linux 命令（192）—— ifup 命令](https://dablelv.blog.csdn.net/article/details/127623218)
[Linux 命令（193）—— ifdown 命令](https://dablelv.blog.csdn.net/article/details/127623755)
[Linux 命令（194）—— ethtool 命令](https://blog.csdn.net/K346K346/article/details/127637057)
[Linux 命令（195）—— dhclient 命令](https://dablelv.blog.csdn.net/article/details/127639954)
[Linux 命令（196）—— ifcfg 命令](https://dablelv.blog.csdn.net/article/details/127641126)
[Linux 命令（197）—— dig 命令](https://dablelv.blog.csdn.net/article/details/127648589)
[Linux 命令（198）—— host 命令](https://dablelv.blog.csdn.net/article/details/127657384)
[Linux 命令（199）—— arp 命令](https://dablelv.blog.csdn.net/article/details/127658885)
[Linux 命令（200）—— arping 命令](https://dablelv.blog.csdn.net/article/details/127658885)
[Linux 命令（201）—— arpwatch 命令](https://dablelv.blog.csdn.net/article/details/128026683)
[Linux 命令（202）—— traceroute 命令](https://dablelv.blog.csdn.net/article/details/128070031)
[Linux 命令（203）—— tracepath 命令](https://dablelv.blog.csdn.net/article/details/128087140)
[Linux 命令（204）—— ss 命令](https://dablelv.blog.csdn.net/article/details/128153751)
[Linux 命令（206）—— usernetctl 命令](https://dablelv.blog.csdn.net/article/details/128162515)
[Linux 命令（207）—— sshd 命令](https://dablelv.blog.csdn.net/article/details/128162727)
[Linux 命令（208）—— ssh-keygen 命令](https://dablelv.blog.csdn.net/article/details/128167442)
[Linux 命令（209）—— ssh-keyscan 命令](https://dablelv.blog.csdn.net/article/details/128176902)
[Linux 命令（210）—— ssh-copy-id 命令](https://dablelv.blog.csdn.net/article/details/128178191)
[Linux 命令（211）—— ssh-agent 命令](https://dablelv.blog.csdn.net/article/details/128196773)
[Linux 命令（212）—— ssh-add 命令](https://dablelv.blog.csdn.net/article/details/128199917)
[Linux 命令（213）—— ip 命令](https://dablelv.blog.csdn.net/article/details/128232635)
[Linux 命令（214）—— arpd 命令](https://dablelv.blog.csdn.net/article/details/128243542)
[Linux 命令（215）—— iptables 命令](https://dablelv.blog.csdn.net/article/details/128354906)
[Linux 命令（216）—— iptables-save 命令](https://dablelv.blog.csdn.net/article/details/128355112)
[Linux 命令（217）—— iptables-restore 命令](https://dablelv.blog.csdn.net/article/details/128355343)
[Linux 命令（218）—— lnstat 命令](https://dablelv.blog.csdn.net/article/details/128355576)
[Linux 命令（219）—— nstat 命令](https://dablelv.blog.csdn.net/article/details/128371127)
[Linux 命令（220）—— ipcalc 命令](https://dablelv.blog.csdn.net/article/details/128372197)
[Linux 命令（246）—— mii-tool 命令](https://dablelv.blog.csdn.net/article/details/128728826)

# 代码版本控制
[Linux 命令（45）—— svn 命令](https://dablelv.blog.csdn.net/article/details/81636781)
[Linux 命令（241）—— git 命令](https://dablelv.blog.csdn.net/article/details/52620885)

# 实用工具
[Linux 命令（50）—— date 命令](https://dablelv.blog.csdn.net/article/details/84849523)
[Linux 命令（101）—— bc 命令](https://dablelv.blog.csdn.net/article/details/103202046)
[Linux 命令（113）—— seq 命令](https://dablelv.blog.csdn.net/article/details/104213897)
[Linux 命令（111）—— alias 命令（builtin）](https://dablelv.blog.csdn.net/article/details/104210968)
[Linux 命令（112）—— unalias 命令（builtin）](https://dablelv.blog.csdn.net/article/details/104212131)
[Linux 命令（121）—— cal 命令](https://dablelv.blog.csdn.net/article/details/104235367)
[Linux 命令（227）—— history 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128376689)
[Linux 命令（238）—— yes 命令](https://dablelv.blog.csdn.net/article/details/128539439)
[Linux 命令（242）—— fc 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128624099)
[Linux 命令（248）—— type 命令（builtin）](https://dablelv.blog.csdn.net/article/details/128762624)

---

<p align=center>
CC BY-NC 4.0 Licensed | Copyright © 2023-present Dable Lv
</p>