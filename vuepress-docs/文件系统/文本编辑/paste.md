## 1.命令简介
paste 命令将多个文件的相应行默认以 Tab 分隔符横向连接起来，输出到标准输出。paste 后可接多个文件，不限于 2 个文件。如果文件写成连字符 -，表示内容来自标准输入。paste 相对于 join 来说，简单许多，不需要有相同的字段也可按行拼接。

## 2.命令格式
```
pasete [OPTIONS] [FILES]
```

## 3.选项说明
```
-d，--delimiters=LIST
	用指定的域分隔符取代Tab。
-s，--serial
	顺序地合并一个文件的所有行到一行
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
有两个文件 file1.txt 和 file2.txt，内容如下：
```
# file1 内容
abc
def
ghi

# file2 内容
123
456
789
012
```
（1）将文件 file1.txt 的所有行合并到一行。
```
paste -s file1.txt
abc	def	ghi

# 指定域分隔符为冒号：
paste -s -d : file1.txt
abc:def:ghi
```

（2）将多个文件的所有行分别合并为一行。
```
paste -s file1.txt file2.txt
abc	def	ghi
123	456	789	012
```

（3）横向连接两个文件，默认以 Tab 分隔。
```
paste file1.txt file2.txt
abc	123
def	456
ghi	789
	012

# 通过交换文件名可指定列的位置
paste file2.txt file1.txt
123	abc
456	def
789	ghi
012	
```

（4）paste 黏贴的内容（行）从标准输入读取，此时可以使用 - 来指代。例如查看 /etc 下的文件列表，并用 paste 打印成每行显示五个文件名。
```
ls /etc/ | paste -d: - - - - -
cpi:adjtime:aliases:alternatives:anacrontab
anthy-conf:asound.conf:at.deny:audisp:audit
bash-command-not-found:bash_completion.d:bashrc:blkid:bonobo-activation
...
```

## 5.注意事项
如果文件格式是 DOS，文件换行符是`\r\n`，那么会出现内容覆盖的情况。比如 file1.txt 和 file2.txt 格式是 DOS，paste 这两个文件会出现如下情况：
```
[root@tencent ~]# paste file1.txt file2.txt
:123
:456
:789
:012
```
从结果可以看出，来自 file1.txt 的行被 file2.txt 的行覆盖，解决办法是，使用 vim 的末行命令`:set ff=unix`将文本格式改为 Unix。

---
## 参考文献
[paste(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/paste.1.html)

[Shell基础之-paste命令](https://blog.csdn.net/wanglei_storage/article/details/48256311)
