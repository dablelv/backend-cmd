## 1.命令简介
cd（Change Directory）命令是 Shell 的内建命令（bash builtin），用来切换工作目录至指定的目录dirname。 

其中 dirname 可以是绝对路径或相对路径。若目录名称省略，则变换至用户的家目录（也就是刚 login 时所在的目录）。另外，`~ `也表示为 home directory 的意思，`.` 则是表示目前所在的目录，`..` 则表示目前目录位置的上一层目录。

## 2.命令格式
```
cd [-L|-P] [DIR]
```

## 3.选项说明
```
-p
	如果要切换到的目标目录是一个符号连接，直接切换到符号连接指向的目标目录
-L
	如果要切换的目标目录是一个符号的连接，直接切换到字符连接名代表的目录，而非符号连接所指向的目标目录。
-
	当仅使用一个横杠 - 时，当前工作目录将被切换到环境变量 OLDPWD 所表示的目录
--
	两个横杠，当前工作目录将被切换到用户家目录
```

## 4.常用示例
（1）回到上一层目录。
```
cd ..
```
（2）回到根目录。
```
cd /
```
（3）回到上次使用的目录。
```
cd –
```
（4）回到用户家目录。
```
cd ~
# 或
cd -- 
```

**注意：** 
（1）登录 Linux 主机后，命令行最左侧`[lvlv@echidna ~/code]$`中，~ 表示在当前用户的家目录，$ 表示是普通用户权限，# 则表示超级用户权限。echidna 表示当前主机的名称，lvlv 则表示当前登录的用户名称。查看当前主机名称用 hostname 命令。

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

[cd(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/cd.1p.html)

[Linux命令大全.cd命令](http://man.linuxde.net/cd)
