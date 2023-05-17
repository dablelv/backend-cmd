## 1.命令简介
pidof 命令用于查找指定名称进程的进程ID，是命令 killall5 的一个软链接。

找出进程 ID 的目的通常是根据进程 ID 进一步确认进程的运行状态、杀掉进程或者发送一个信号给它。

## 2.命令格式
```
pidof [-s] [-c] [-n] [-x] [-m] [-o omitpid[,omitpid..]] [-o omitpid[,omitpid..]..]  program [program..]
```

## 3.选项说明
```
-s
	只返回一个 PID。
-c
	只显示运行在 root 目录下的进程，这个选项只对 root 用户有效。
-x
	显示指定脚本名称的进程。
-o OMITPID
	指定不显示的进程ID。该选项可以出现多次
-m
	与 -o 选项一起使用，使得 argv[0] 与 argv[1] 和被忽略进程相同的进程同时被忽略。一般用于忽略由同名 Shell 脚本启动的进程，因为 argv[0] 为 Shell，一般为 /bin/bash，argv[1] 为脚本名称。
```

## 4.常用示例
（1）查看程序名称为 sshd 的进程 ID。
```
pidof sshd
31806 21909 8607 524
```
（2）查看由 Shell 脚本启动的进程 ID。
```
pidof -x sleep.sh
```
sleep.sh 为自定义的脚本，睡眠一段时间，然后退出，内容如下：
```
#!/bin/bash

echo "begin sleep"
sleep 10000
echo "end sleep"
```
启动方式采用运行于后台的方式。
```
./sleep.sh &
```

---
## 参考文献
[pidof(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/pidof.1.html)
