## 1.命令简介
dirs（directory stack）命令，用于显示目录栈。

目录栈是最近访问的目录的列表。配套的两个内置命令，一个是 pushd，更改当前目录时将目录添加到栈中，另一个是 popd 从栈顶删除目录，然后将当前目录更改为栈顶目录。dirs 用于显示目录栈的内容。当前目录始终是目录栈的顶部。

目录栈的内容也可以从 Shell 变量 DIRSTACK 获取到。

## 2.命令格式
```shell
dirs [+<n>] [-<n>] [-clpv]
```
dirs 不带选项执行时显示目录栈中的所有内容。
## 3.选项说明
```shell
+N
	从栈顶开始，显示第 N 个目录，下标从零开始。
-N
	从栈底开始，显示第 N 个目录，下标从零开始。
-c
	删除所有元素以清空目录栈。
-l
	替换掉家目录的波浪号，显示完整的更长的目录。
-p
	每行一个条目打印目录栈。
-v
	每行一个条目，以栈中位置为前缀打印目录栈。
```
## 4.常用示例
（1）显示当前目录栈。

当前目录栈默认只有一个元素，即当前的工作目录。如果使用 cd 改变当前工作目录，那么目录栈的目录也会随之改变。
```shell
# dirs
~
```
切换一下当前的目录再看下。
```shell
# cd cpp
# dirs
~/cpp
```
（2）向目录栈添加目录。

可以使用 pushd 命令，向录栈添加目录，并同时改变当前工作目录。
```shell
# pushd /root/cpp/txt0
~/cpp/txt0 ~/cpp

# pushd /root/cpp/txt1
~/cpp/txt1 ~/cpp/txt0 ~/cpp
```
（3）使用长格式显示目录栈。
```shell
# dirs -l
/root/cpp/txt1 /root/cpp/txt0 /root/cpp
```

（4）每行一个目录并以在栈中的下标作为前缀。
```shell
# dirs -v
 0  ~/cpp/txt1
 1  ~/cpp/txt0
 2  ~/cpp
```

（5）从目录栈删除目录。

可以使用 popd 命令，删除目录栈栈顶目录，然后改变当前工作目录为栈顶目录。如我们将 ~/cpp/txt1 出栈，那么当前工作目录将变为 ~/cpp/txt0。
```shell
# popd
~/cpp/txt0 ~/cpp

# pwd
/root/cpp/txt0
```
（6）清空目录栈，只保留栈顶元素。
```shell
# dirs -c
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)
