## 1.命令简介
umask 为 Shell 内建命令，用于设置创建文件时的权限掩码。

权限掩码由 3 个八进制数字组成，将 777（八进制）减掉权限掩码后，即可得到新建文件的默认权限。它与 chmod 的效果刚好相反。

## 2.命令格式
```
umask [-p] [-S] [MODE]
```
后不跟任何选项与参数单独执行 umask，则以八进制格式显示当前权限掩码。

## 3.选项说明
```
-p [MODE]
	以八进制数字形式显示或设置权限掩码。当 MODE 没有提供时，显示当前权限掩码。为默认选项
-S [MODE]
	以字符形式显示或设置新建文件的默认权限。当 MODE 没有提供时，显示新建文件的默认权限
```
注意：出于安全的考虑，文件的执行权限不能通过权限掩码来设置，必须手工修改。

## 4.常用示例
（1）显示当前权限掩码。
```
umask
0022
```
（2）以字符形式显示新建文件的默认权限。
```
umask -S
u=rwx,g=rx,o=rx
```
等于八进制权限位 0777 减去掩码 0022，即 0755，以字符形式显示为 u=rwx,g=rx,o=rx。

（3）设置权限掩码并查看。
```
#设置权限掩码
umask 044

#查看权限掩码
umask
044
```

---
## 参考文献
[umask(1) manual - linux.org](https://www.linux.org/docs/man1/umask.html)

[umask(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/umask.1p.html)

<Vssue title="umask-builtin" />
