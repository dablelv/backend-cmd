## 1.功能简介
read 命令是 Shell 内建命令，用于从标准输入或 -u 选项指定的文件描述符中读取单行，并将读取的单行根据 IFS 变量分割成多个字段，并将分割后的字段分别赋值给指定的变量列表。

第一个字段分配给第一个变量，第二个字段分配给第二个变量，以此类推。如果指定的变量名少于字段数量，则多出的字段连同分隔符分配给最后一个变量。如果指定的变量多于字段数量，则多出的变量赋值为空。如果没有指定任何变量，则分割后的所有字段都存储在特定变量 REPLY 中。当然，read 读取的内容不仅可以赋给变量，还可以赋给数组。

IFS（Internal  Field  Separator）变量是 Shell 内建的环境变量，用于将 read 命令读取的单行内容分隔为多个字段。默认取值为空格、Tab 和换行符。

REPLY 变量也是 Shell 内建的环境变量，当 read 命令未指明接收变量时，用于接收 read 命令读取的单行内容。

## 2.命令格式
```
read [OPTIONS] [VARNAMES]
```

## 3.选项说明
```shell
-a ANAME
	将分割后的字段依次存储到指定的数组中，存储的起始位置从数组的下标 0 开始
-d DELIM
	后跟一个分隔符，只有第一个字符有用，用以取代换行符作为行的结束标志
-e
	在输入的时候可以使用命令补全功能，使用 Tab 键可自动补全当前目录下文件
-i TEXT
	如果使用 readline 命令读取行，则在开始编辑之前将文本放入编辑缓冲区
-n NCHARS
	后跟一个数字，定义输入文本的长度，而不是读取整行
-N NCHARS
	后跟一个数字，定义输入文本的长度，而不是读取整行。但是如果一行不足 nchars 个字符，则忽略行分隔符继续读取下一行
-p PROMPT
	从终端读取输入时，在输入前打印提示信息
-r
	屏蔽反斜杠 \。如果没有该选项，则 \ 作为一个转义字符，有的话 \ 就是个正常的字符了
-s
	静默模式，输入字符不显示到屏幕，例如 login 时输入密码
-t TIMEOUT
	后面跟秒数，定义输入字符的等待时间
-u FD
	后面跟文件描述符 fd，从文件描述符中读取
```

## 4.常用示例
（1）如果没有指定变量，read 会把传入的值传给 REPLY，只要调用 REPLY就可以引用 read 读取的内容。
```
read; echo "\$REPLY:$REPLY"
dablelv
$REPLY:dablelv
```

（2）read 从终端读取时指定一个提示语
```
[root@TENCENT64 ~]# read -p"input u password:";echo "\$REPLY:$REPLY"
input u password:123456
$REPLY:123456
```

（3）-t 选项指定 read 命令等待输入的秒数，当计时满时，read 命令返回一个非零状态码。
```
#!/bin/bash

if read -t 5 -p "输入网站名:" name
then
    echo "你输入的网站名是 $website"
else
    echo "\n抱歉，你输入超时了。"
fi
exit 0
```
执行程序不输入，等待 5 秒后：
```
输入网站名:
抱歉，你输入超时了
```

（4）除了控制输入时间，还可以使用 -n 选项控制输入的字符数量。当输入的字符数目达到预定数目时，自动退出，并将输入的数据赋值给变量。例如只接收 2 个输入就退出：
```
#!/bin/bash

read -n2 -p "请随便输入两个字符: " any
echo "\n您输入的两个字符是:$any"
exit 0
```

（5）-s 选项能够使输入的数据不显示在命令终端上（实际上，输入的内容是显示的，只是 read 命令将文本颜色设置成与背景相同的颜色）。输入密码常用这个选项。
```
#!/bin/bash

read  -s  -p "请输入您的密码:" pass
echo "\n您输入的密码是 $pass"
exit 0
```
执行程序输入密码后是不显示的：
```
请输入您的密码:
您输入的密码是 runoob
```

（6）读取文件。每次调用 read 命令都会读取文件中的一行文本。当文件没有可读的行时，read 命令将以非零状态码退出。
```
while read var1 var2
do
	echo $var1 $var2
done < file.txt
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/bash.1.html)

[博客园.read指令使用方法](https://www.cnblogs.com/anay/p/8973510.html)

[CSDN.详细解析Shell中的IFS变量](https://blog.csdn.net/guyongqiangx/article/details/80220434)

[菜鸟教程.Linux read 命令](http://www.runoob.com/linux/linux-comm-read.html)

<Vssue title="read-builtin" />