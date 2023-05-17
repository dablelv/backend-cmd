## 1.命令简介
time 为简单命令计时或提供资源使用信息。

time 用于统计命令执行所消耗的时间及相关系统资源等信息，默认情况下在命令执行结束后将统计结果输出到标准错误输出。time 可以显示的资源有四大项：
```
Time resources
Memory resources
IO resources
Command info
```
注意，由于某些 Shell（比如 bash）自带了内建命令 time，并且提供的功能不全，要想使用本文描述的 time，请指明路径，比如 /usr/bin/time。

## 2.命令格式
```
time [OPTIONS] COMMAND [ARGUMENTS]
```
## 3.选项说明
长选项的参数对于短选项也是必须的。
```
-f, --format=FORMAT
	使用指定格式输出。如果没有指定输出格式，采用环境变量 TIME 指定的格式
-p, --portability
	使用兼容 POSIX 的格式输出，real %e\nuser %U\nsys %S
-o, --output=FILE
	结果输出到指定文件。如果文件已经存在，覆写其内容
-a, --append
	与 -o 选项一起使用，使用追加模式将输出写入指定文件
-v, --verbose
	使用冗余模式尽可能地输出统计信息
--help
	显示帮助信息
-V, --version
	显示版本信息
--
	终止选项列表
```
其中输出格式以类似 printf 的方式解释，普通字符将直接输出，制表符、换行符、反斜杠和百分号分别使用`\t、\n、\\、%%`表示。%后跟其它字母表示特殊格式，可用格式如下：
```
Time
%E：执行指令所花费的时间，格式[hours:]minutes:seconds
%e：执行指令所花费的时间，单位是秒
%S：指令执行时在内核模式（kernel mode）所花费的时间，单位是秒
%U：指令执行时在用户模式（user mode）所花费的时间，单位是秒
%P：执行指令时 CPU 的占用比例。其实这个数字就是内核模式加上用户模式的 CPU 时间除以总时间（(%S+%U)/%E）

Memory
%M：执行时所占用的内存的最大值。单位KB
%t：执行时所占用的内存的平均值，单位是 KB
%K：执行程序所占用的内存总量（stack+data+text）的平均大小，单位是 KB
%D：执行程序的自有数据区（unshared data area）的平均大小，单位是 KB
%p：执行程序的自有栈（unshared stack）的平均大小，单位是 KB
%X：执行程序是共享代码段（shared text）的平均值，单位是 KB
%Z：系统内存页的大小，单位是 byte。对同一个系统来说这是个常数
%F：内存页错误次数。内存页错误指需要从磁盘读取数据到内存
%R：次要或可恢复的页面错误数。这些是无效页面的错误，但其他虚拟页面尚未使用该内存页。因此，页面中的数据仍然有效，但必须更新系统表
%W：进程从内存中交换的次数
%c：进程上下文被切换的次数（因为时间片已过期）
%w：进程等待次数，指程序主动进行上下文切换的次数，例如等待I/O操作完成

I/O
%I：此程序所输入的档案数
%O：此程序所输出的档案数
%r：此程序所收到的 Socket Message
%s：此程序所送出的 Socket Message
%k：此程序所收到的信号 （Signal）数量

Command Info
%C：执行时的参数指令名称
%x：指令的结束代码 ( Exit Status )
```

## 4.常用示例
（1）统计命令执行时间。
```shell
time date 
Fri May 31 11:30:04 CST 2019

real	0m0.001s
user	0m0.000s
sys 	0m0.000s
```
（2）输出命令名称、参数与退出码。
```shell
/usr/bin/time --format="%C\n%x" date +%s
1580507732
date +%s
0
```

---
## 参考文献
[time(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/time.1.html)

[Linux time命令](https://www.runoob.com/linux/linux-comm-time.html)
