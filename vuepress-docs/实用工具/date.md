## 1.命令简介
date 打印或设置系统日期和时间。

date 命令用于按照指定格式显示当前时间或者指定的时间，也可以设置系统时间。很多 Shell 脚本里面需要打印不同格式的时间或日期，以及要根据时间和日期执行操作，此时可以使用 date 命令来完成。在类Unix 系统中，日期被存储为一个整数，其大小为协调世界时（UTC）1970 年 1 月 1 日 0 时 0 分 0 秒起流逝的秒数，即 Unix 时间戳。

## 2.命令格式
```
date [OPTION]... [+FORMAT]
date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]
```
其中，FORMAT为格式控制字符串，可取如下值：
```shell
%% 字符%
%a 星期的简称（Sun~Sat）
%A 星期的全称（Sunday~Saturday）
%b 月的简称（Jan~Dec）
%B 月的全称（January~December）
%c 日期和时间（Thu 06 Dec 2018 09:43:53 AM CST）。只输入date指令也会显示同样的结果。
%C 世纪。和%Y比较像，但不显示最后两个数字，如20
%d 一个月的第几天（01~31）
%D 日期，等同于%m/%d/%y，如12/06/18
%e 一个月的第几天（1~31），单数字以空格填充，等同于%_d
%F 日期，等同于%Y-%m-%d，如2018-12-06
%g 年的最后两个数字（yy），比如2018则输出18，等同于%y
%G 年份(yyyy)
%h 月的简称（Jan~Dec），等同于%b
%H 小时，24小时制（00~23）
%I 小时，12小时制（01~12）
%j 一年的第几天（001~366）
%k 小时，24小时制（0~23）。单数字填充空格，等同于%_H
%l 小时，12小时制（1~12）。单数字填充空格，等同于%_I
%m 月份（01~12）
%M 分钟（00~59）
%n 换行符newline
%N 纳秒nanoseconds(000000000..999999999)
%p 显示出AM或PM
%P 显示出am或pm
%r 显示时间，12小时制（hh:mm:ss %p）
%R 显示小时与分钟，24小时制，等同于%H:%M
%s 从1970年1月1日00:00:00到目前经历的秒数
%S 显示秒（00~59）
%t Tab符
%T 显示时间，24小时制（hh:mm:ss），等同于%H:%M:%S
%u 一周的第几天(1..7)。1表示星期一
%U 一年的第几周，周日为每周的第一天(00..53)
%V 一年的第几周，周一为每周的第一天(01..53)
%w 一个星期的第几天（0~6），0代表星期天
%W 一年的第几周，周一为每周的第一天(00..53)
%x 日期(mm/dd/yyyy)，如12/06/2018
%X 时间，等同于%H:%M:%S
%y 年的最后两个数字（2018则是18）
%Y 年（yyyy）
%z 以+hhmm格式显示时区（如+0800）
%:z 以+hh:mm格式显示时区（如+08:00）
%::z 以+hh:mm:ss格式显示时区（如+08:00:00）
%Z 缩写显示时区名称，如CST（China Standard Time）
%h,%b 月的简称（Jan~Dec）
填充字符说明：默认地，date命令以0填充数字域，以下填充字符的控制符可以跟在%后使用：
- (hyphen，连字符)：不进行填充
_ (underscore，下划线)：以空格填充
0（zero）以0填充
^ 尽可能地使用大写输出
# 尽可能地按照相反的大小写进行输出
```

## 3.命令选项
```shell
-d, --date=STRING：显示由STRING指定的时间，而不是当前时间戳；
-f, --file=DATEFILE：显示DATEFILE文件中的每行时间；
-I[TIMESPEC], --iso-8601[=TIMESPEC]：以ISO 8601规范格式按照指定精度[TIMESPEC]显示时间。TIMESPEC默认取值为"date"，亦可取值'hours', 'minutes', 'seconds', 或 'ns'；
-r, --reference=FILE：显示文件的最后修改时间
-R, --rfc-2822：以RFC-2822规定格式显示时间，例如：Wed, 05 Dec 2018 22:10:34 +0800
--rfc-3339=TIMESPEC：以RFC 3339规定格式显示时间，可以由TIMESPEC指明精度，TIMESPEC可取值'date', 'seconds', or 'ns'。例如：2018-12-05 22:09:59.230994842+08:00
-s, --set=STRING：设置系统时间为STRING指定的时间
-u, --utc, --universal：显示或设定为协调世界时（UTC，Coordinated Universal Time）时间格式
--help：显示date命令的帮助信息
--version：显示date命令的版本信息
```

## 4.常用示例
（1）获取Unix时间戳。
```shell
date +%s
1544067345
```
（2）将Unix时间戳转换为可读时间。
```
date -d @1483525407
Wed Jan  4 18:23:27 CST 2017

date -d @1483525407 +"%F %T"
2017-01-04 18:23:27
```
注意：-d后需跟合法格式的日期，所以时间戳需要添加@符以示区别。

（3）格式化输出当前时间。
```shell
date +"%Y-%m-%d %H:%M:%S"
2018-12-06 10:57:33

#或
date +"%F %T"
```
（4）时间加减操作。
```shell
date +"%Y-%m-%d %H:%M:%S"     				//显示当前时间
date -d "+1 day" +"%Y-%m-%d %H:%M:%S"  		//显示前一天的时间
date -d "-1 day" +"%Y-%m-%d %H:%M:%S"  		//显示后一天的时间
date -d "-1 month" +"%Y-%m-%d %H:%M:%S"     //显示上一月的时间
date -d "+1 month" +"%Y-%m-%d %H:%M:%S"     //显示下一月的时间
date -d "-1 year" +"%Y-%m-%d %H:%M:%S"      //显示前一年的时间
date -d "+1 year" +"%Y-%m-%d %H:%M:%S"      //显示下一年的时间
```

（5）普通格式转换。
```shell
date -d "2009-12-12" +"%Y/%m/%d %H:%M:%S"
2009/12/12 00:00:00
```

（6）设置系统时间。
```shell
date -s "2016-11-11 00:00:00"
Fri Nov 11 00:00:00 CST 2016

date
Fri Nov 11 00:00:05 CST 2016
```

---
## 参考文献
[date(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/date.1.html)

[linux命令总结之date命令](https://www.cnblogs.com/ginvip/p/6357378.html)
