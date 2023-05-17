## 1.命令简介
sleep 暂停指定的时间。

## 2.命令格式
```shell
sleep NUMBER[SUFFIX]...
sleep OPTION
```
SUFFIX  缺省是 s，指暂停指定的秒数，m 指分钟，h 指小时，d 指天数。

如果 NUMBER 是 infinity，表示暂停永久。

## 3.选项说明
```shell
--help 显示帮助信息，然后结束。
--version 显示版本信息，然后结束。
```

## 4.常用示例
（1）暂停 1 秒。

```shell
sleep 1

# 或
sleep 1s
```

（2）暂停 1 分钟。

```shell
sleep 1m
```

（3）暂停 1 小时。

```shell
sleep 1h
```

（4）暂停 1 天。

```shell
sleep 1d
```

（5）脚本中使用 sleep。

有时在写一些以循环方式运行的监控脚本，设置时间间隔是必不可少的，下面是一个Shell进度条的脚本演示在脚本中生成延时。

```shell
#!/usr/bin/bash

b=''
for ((i=0;$i<=100;i++)); do
 printf "Progress:[%-100s]%d%%\r" $b $i
 sleep 0.1
 b=#$b
done
echo
```

输出效果：

```
Progress:[####################################################################################################]100%
```

---
## 参考文献
[sleep(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/sleep.1.html)

[sleep(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/sleep.1p.html)

[sleep - 将目前动作延迟一段时间- Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/sleep.html)

