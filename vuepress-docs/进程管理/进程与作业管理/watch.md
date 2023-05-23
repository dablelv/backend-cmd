## 1.命令简介
watch 命令以周期性的方式执行给定的命令，并全屏显示执行结果。

watch 是一个非常实用的命令，基本所有的 Linux 发行版都带有它。如同名字一样，watch 可以帮助监测一个命令的运行结果，省得我们一遍遍地手动运行。比如 tail 一个 log 文件，ls 监测某个文件的大小变化等。缺省每 2 秒运行一下程序，可以用 -n 或 --interval 来指定间隔的时间。

## 2.命令格式
```
watch [OPTIONS] COMMAND
```
## 3.选项说明
```
-d, --differences [PERMANENT]
	高亮显示最近两次更新之间的差异。-d cumulative 选项会把变动过的地方（不管最近的那次有没有变动）都高亮显示出来
-n, --interval SECONDS
	指定监测间隔，单位秒。默认 2s，不能低于 0.1s
-p, --precise
	尝试精确地按照指定的间隔进行一次命令监视
-t, --no-title
	关闭 watch 命令在顶部的时间间隔、命令、当前时间的输出
-b, --beep
	被监测的命令退出码非零时发出哔哔声
-e, --errexit
	被监测的命令发生错误时 watch 停止更新，并在按键之后退出
-g, --chgexit
	被监测的命令输出发生变化时退出 watch
-c, --color
	解释 ANSI 颜色和样式序列
-x, --exec
	将命令传递给 exec(2) 而不是 sh -c
-h, --help
	显示帮助信息并退出
-v, --version
	显示版本信息并退出
```
## 4.常用示例
（1）重复执行 uptime 命令，默认每隔 2s 执行一次。
```
watch uptime
```
（2）查看当前目录文件 log 的变化。
```
watch -d "ls -l | grep log"
```
注意，当监测的命令中包含管道，需要使用引号将其括起来。

（3）每 10s 查看一次系统的平均负载。
```
watch -n10 cat /proc/loadavg
```
（4）每隔 1s 高亮显示网络连接数的变化情况。
```
watch -n1 -d netstat -ant
```

---
## 参考文献
[watch(1) - Linux manual page - man7.org](http://www.man7.org/linux/man-pages/man1/watch.1.html)

<Vssue title="watch" />