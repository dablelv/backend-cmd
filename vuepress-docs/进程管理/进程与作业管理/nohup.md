## 1.命令简介
nohup 可以将程序以忽略挂起信号（SIGHUP）的方式运行。

常见的用法是和 & 命令一同使用，将命令放置后台运行，即使终端挂掉，进程会忽略挂起信号，继续运行。

将程序放到后台运行，一般有两种方式：
（1）`COMMAND & `： 后台运行，关掉终端会停止运行。
（2）`nohup COMMAND &` ： 后台运行，关掉终端也会继续运行。

**注意：**

（1）如果使用 nohup 执行程序未显示进行标准输出重定向，则默认重定向当前工作目录的 nohup.out 文件。如果当前工作目录的 nohup.out 文件不可写，则重定向到 `$HOME/nohup.out` 文件。如果没有文件能创建或打开用于追加，那么由 COMMAND 参数指定的命令不可被调用。

要将输出保存到 FILE，使用`nohup COMMAND > FILE`。

（2）如果标准错误未显示重定向，那么标准错误默认重定向到标准输出。

## 2.命令格式
```
nohup COMMAND [ARGS]
nohup OPTION
```

## 3.选项说明
```shell
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）使用 nohup 命令提交作业。

在缺省情况下该作业的所有输出都被重定向到当前工作目录名为 nohup.out 的文件，除非显示指定输出文件。
```shell
nohup ./test.sh &
```

（2）标准输出与标准错误输出重定向。
```shell
nohup ./test.sh > test.log 2>&1 &
```
2>&1 标识标准错误输出重定向等同于标准输出重定向，即标准错误输出也重定向到文件 test.log。

& 命令是命令放在后台执行，需要放在命令的最后面。

----
## 参考文献
[nohup(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/nohup.1.html)

[Linux执行shell脚本方式及区别&命令后台运行](https://blog.csdn.net/heqiyu34/article/details/19089951/)

[nohup命令 - Linux命令大全](http://man.linuxde.net/nohup)

<Vssue title="nohup" />