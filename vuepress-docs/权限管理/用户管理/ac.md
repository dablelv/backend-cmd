## 1.命令简介
ac 打印有关用户连接时间的统计信息。

ac 命令根据当前的 /var/log/wtmp 文件中的登录进入和退出来报告用户连接的时间（小时）。如果不使用标志，则报告总的时间，也就是统计用户的在线时间。

## 2.命令格式
```shell
ac [<options>]
```
## 3.选项说明
```
-d, --daily-totals
	按每天的统计数据打印。 
-f, --file <filename>
	读取指定文件而不是系统的 wtmp 文件。
--complain
	当 wtmp 文件出现问题（时间扭曲、丢失记录或其他）时，打印出相应的错误。
-y, --print-year
	在显示日期的时候输出年份。 
-p, --individual-totals
	打印每个账号的总的连接时间。 
-z, --print-zeros
	如果任何类别的总计（除了总计）为零，则打印它。默认值是禁止打印。
--debug
	打印详细的内部信息。
-V, --version
	打印版本号打印到标准输出并退出。
-h, --help
	将使用字符串和系统文件的默认位置打印到标准输出并退出。
```
## 4.常用示例
（1）输出用户连接时间。
```shell
ac
	total    18817.91
```
（2）按每天的统计数据打印。
```
ac -d
Nov  8  total        0.20
Nov  7  total        3.48
Nov  9  total       52.51
Nov 14  total        1.52
Nov 15  total       48.03
Nov 18  total       18.10
Nov 19  total       64.61
```

（3）根据日期(含年份)显示所有用户的登录总时间
```shell
ac -d -y
Nov  8 2022     total        0.20
Nov  7 2022     total        3.48
Nov  9 2022     total       52.51
Nov 14 2022     total        1.52
Nov 15 2022     total       48.03
Nov 18 2022     total       18.10
```

（4）按天显示指定用户的登录总时间。
```shell
ac -d root
Nov  8  total        0.14
Nov  7  total        3.48
Nov  9  total       44.60
Nov 14  total        1.52
Nov 15  total       47.84
Nov 18  total       18.10
Nov 19  total       64.61
```

（5）查看每个用户的登录总时间。
```shell
ac -p
	deng                             15822.55
	oracle                             349.49
	root                              2646.22
	itcast                               0.06
	total    18818.32
```

---
## 参考文献
[ac(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/ac.1.html)

<Vssue title="ac" />