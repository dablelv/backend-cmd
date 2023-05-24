## 1.命令简介
tr（translate）用来转换或删除一段文字。

tr 所有的功能均可由 [sed](https://dablelv.blog.csdn.net/article/details/53197905) 来完成，可以将 tr 视为 sed 的一个极简实现。
## 2.命令格式
```shell
tr [OPTION]... SET1 [SET2]
```

## 3.选项说明
```
-c, -C, --complement SET1 [SET2]
	将字符集 SET1 以外的其他字符删除或者转换为字符集 SET2 中的最后一个字符（如果你指定了多个字符的话）。
-d, --delete
	删除指定字符集中的字符。
-s, --squeeze-repeats
	如果 SET1 中的字符连续出现多次，压缩重复的字符，只保留一个。
-t, --truncate-set1
	先将 SET1 的长度截为和 SET2 相等。
--help
	显示帮助信息并退出。
--version
	显示版本信息并退出。
```

## 4.常用示例
（1）将 last 输出的信息中所有小写的字符变成大写字符。
```shell
last | tr [a-z] [A-Z]
```
（2）将 /etc/passwd 输出的信息中的冒号 : 删除。
```shell
cat /etc/passwd | tr -d ':'
```
（3）将 DOS 文件转成 Unix 文件。
```shell
cat /etc/passwd | tr -d '\r'
```
（4）删除空行。
```shell
cat file | tr -s "\n" > new_file
```
（5）将文件中 "abc" 分别替换为 "xyz" 中对应的字符。
```shell
cat file | tr "abc" "xyz" > newFile
```
**注意：** 这里凡是在 file 中出现的"a"字母，都替换成"x"字母，"b"字母替换为"y"字母，"c"字母替换为"z"字母，而不是将字符串"abc"替换为字符串"xyz"。

（6）替换指定字符集以外的字符。
```shell
echo -n "alv blv" | tr -c "lv " "x"
xlv xlv
```
echo -n 表示不输出换行符。

（7）从输入文本中将不在补集中的所有字符删除。
```shell
echo -n "alv blv" | tr -dc "lv"
lvlv
```

----
## 参考文献
[tr(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/tr.1.html)

<Vssue title="tr" />