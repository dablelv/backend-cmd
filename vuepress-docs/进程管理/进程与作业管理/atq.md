## 1.命令简介
atq 列出当前用户的 at 任务列表。

输出行的格式（每个作业一行）为：作业编号、日期、小时、队列和用户名。

注意：如果是超级用户则列出所有用户的 at 任务列表。

atq 是 at 的软链，等价于 at -l。
# 2.命令格式
```shell
atq [-V] [-q queue]
```
# 3.选项说明
```
-V
	显示版本号。
-q
	查询指定队列的任务。
	
	队列名称由一个字母组成；有效的队列名称范围从 a 到 z。a 到 z。a 队列是 at 的默认队列，b 队列是 batch 的默认队列。字母越高的 nice 指越大。特殊队列“=”是为当前正在运行的作业保留的。
```

# 4.常用示例
我们先通过 at 命令指定两个定时任务。

三天后的下午 5 点钟执行命令。
```
at 5pm + 3 days
at> /usr/bin/ls
at> <EOT>
job 8 at Wed Nov  2 17:00:00 2022
```
明天 17 点钟，输出时间到指定文件内。
```
at 17:00 tomorrow
at> date > /root/test/date.log
at> <EOT>
job 9 at Mon Oct 31 17:00:00 2022
```
有了定时任务，那么我们就可以使用 atq 来查看任务列表了。
```shell
atq
8	Wed Nov  2 17:00:00 2022 a root
9	Mon Oct 31 17:00:00 2022 a root
```
当然，我们也可以使用 at -l 命令来查看。

---
# 参考文献
[atq(1) - Linux man page - Die.net](https://linux.die.net/man/1/atq)
