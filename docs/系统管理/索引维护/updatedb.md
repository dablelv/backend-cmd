## 1.命令简介
updatedb 命令用于更新 locate 命令使用的数据库。

本文介绍的是 GNU 版本的 updatedb，其它版本的选项会有所不同。

updatedb 作用的数据库名称由配置文件（一般为 /etc/updatedb.conf）或命令行参数确定（一般为 /var/lib/mlocate/mlocate.db），由系统每日执行 updatedb 更新一次，更新脚本一般为 /etc/cron.daily/mlocate，在配置文件 /etc/anacrontab 中被调用，由 anacron 每天运行一次。

anacron 是如何被启动的呢？守护进程 cron 会运行 /etc/cron.d/0hourly 中配置的一条 cron 任务。
```
01 * * * * root run-parts /etc/cron.hourly
```
这条 cron 任务会运行 /etc/cron.hourly 目录下的所有脚本，其中有一个名为 0anacron 的脚本，该脚本会在合适的时间运行 anacron，anacron 则会检查 /etc/anacrontab，在合适的时间分别运行 /etc/cron.daily，/etc/cron.weekly，/etc/cron.monthly 目录下的脚本。 

## 2.命令格式
```
updatedb [OPTIONS]
```

## 3.选项说明
```
--localpaths='PATH1 PATH2...'
	将本地目录而非网络目录放入数据库。默认为 /
--netpaths='PATH1 PATH2...'
	将网络（NFS、AFS、RFS 等）目录放入数据库。环境变量 NETPATHS 也设置这个值。默认是没有的
--prunepaths='PATH1 PATH2...'
	指定不加入数据库的目录。可以由环境变量 PRUNEPATHS 指定，默认为 /tmp /usr/tmp /var/tmp /afs
--prunefs='PATH...'
	指定不能放到数据库中的文件系统。环境变量 PRUNEFS 也设置这个值。默认是 nfs NFS proc
--output=DBFILE
	指定输出的数据库
--localuser=USER
	指定搜索非网络目录的用户，默认为当前用户。可以使用环境变量 LOCALUSER 来设置
--netuser=USER
	指定搜索网络用户的用户，默认为 daemon。 可以使用环境变量 NETUSER 来设置
--dbformat=F
	指定数据库的格式，默认为 LOCATE02。另外，还支持 slocate 格式。当使用slocate格式时，生成的数据库被标记为安全级别 1。如果你想建一个系统范围的 slocate 数据库，以 root 运行 updatedb
--version
	显示版本信息并退出
--help
	显示帮助信息并退出
```

## 4.常用示例
（1）更新默认数据库。
```
updatedb
```

（2）指定目录生成数据库。
```
updatedb --localpaths='/root' --output=homelocate.db
```
注意，第一次运行 updatedb 时，由于新创建目录下所有文件的信息的数据会比较慢。第二次使用 updatedb 时，仅执行数据库的更新操作，会比较快。

---
## 参考文献
[updatedb(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/updatedb.1.html)

[详解：（cron , crontab , anacron）](https://www.cnblogs.com/zhoul/p/9931664.html)
