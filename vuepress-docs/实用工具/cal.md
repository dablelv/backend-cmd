## 1.命令简介
cal（calendar）用于显示当前或指定日期的公历。

## 2.命令格式
```shell
cal [OPTIONS] [[[DAY] MONTH] YEAR]
```
可指定 YEAR（1-9999）、MONTH（1-12）和 DAY（1-31）。

不跟任何选项和参数单独执行 cal，显示当月月历。

## 3.选项说明
```
-1, --one
	只显示当前月份（默认）
-3, --three
	显示前一个月、当前月和下一个月的月历
-h, --help
	显示帮助信息并退出
-j, --julian
	显示日期在当年中的第几天
-m, --monday
	显示星期一为一个星期的第一天
-s, --sunday
	显示星期天为一个星期的第一天（默认）
-V, --version
	显示版本信息并退出
-y, --year
	显示当年的日历
```

## 4.常用示例
（1）显示当前月份。
```
cal
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200216190807146.png)

（2）显示当前月份，星期一为一个星期的第一天。
```
cal -m
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200216190737602.png)

（3）显示当前月份，显示日期在当年中的第几天。
```
cal -j
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200216191027558.png)

（4）显示前一个月、当前月和下一个月的月历。
```
cal -3
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200216191940342.png)

（5）显示指定日期。
```
cal 24 6 2015
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200216191637791.png)

---
## 参考文献
[cal(1) - Linux manual page - man7.org](http://www.man7.org/linux/man-pages/man1/cal.1.html)
