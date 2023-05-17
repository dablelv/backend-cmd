## 1.命令简介
chmod 用来变更文件或目录的访问权限。

chmod 仅限文件属主和超级用户 root 使用。

Linux 文件与目录的权限有三种范围，属主（u，user）、属组（g，group）与其它（o，other），全部用户使用 a（all）表示。每个范围的权限由三个比特位表示，从左至右分别表示 r（read，读）、w（write，写）与 x（execute，可执行）。权限可以使用字符或八进制数字表示，r 对应数字 4，w 对应数字 2，x 对应数字 1。如果相应的权限位没有权限，使用`ls -l`命令查看时，显示为横杠-。如下图所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191030210755294.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9kYWJsZWx2LmJsb2cuY3Nkbi5uZXQ=,size_16,color_FFFFFF,t_70)
注意：
（1）当使用 chmod 改变符号链接的权限时，实际上改变的是目标文件的权限；chmod 无法更改其符号链接的权限，这不是一个 bug，因为符号链接的权限从未被使用过。
（2）chmod 在递归时，遇到符号链接则会忽略之。

## 2.命令格式
```
chmod [OPTION]... MODE[,MODE]... FILE...
chmod [OPTION]... OCTAL-MODE FILE...
chmod [OPTION]... --reference=RFILE FILE...
```
其中 MODE 使用字符形式表示文件权限，格式为 [ugoa...][[+-=][perms...]...]。ugoa 任意字母组合指定权限范围，不指定默认为 a。+-= 分别表示增加、去除与赋予相应权限。权限 perms 可以是零也可以是 rwxXst 中的多个字符的组合，或者是 ugo 中的某一个字符。MODE 可以出现多次，由逗号隔开。rwxXst 分别表示 r（读）、w（写）、x（可执行）、X（可执行，已经有可执行权限或者目标是目录时使用，以示区分）、s（文件的特殊权限 SETUID 或 SETGID）和 t（粘滞位）。

OCTAL-MODE 为八进制数字表示权限比特位组成的数值。可以指定 1 到 4 个八进制数字（0-7）。从右至左，四个数字分别表示其它 o、用户组 g、属主 u 和文件的特殊权限 SETUID（4）、SETGID（2）和
SBIT（1）。

## 3.选项说明
```
-c, --changes
	类似 --verbose，但只在有更改生效时才显示结果
-f, --silent, --quiet
  去除大部份的错误信息
-v, --verbose
	显示指令详细的执行过程
--no-preserve-root
	不特殊对待根目录（默认）
--preserve-root
	禁止对根目录进行递归操作
--reference=RFILE
	使用指定参考文件的权限，而非自行指定
-R, --recursive
	以递归方式更改所有文件及子目录
--help
	显示帮助信息并退出。
--version
	显示版本信息并退出。
```

## 4.常用示例
（1）增加全部用户对文件 test.sh 的执行权限。
```shell
chmod +x test.sh

# 或
chmod a+x test.sh

ll test.sh
-rwx-wx-wx 1 root root 0 Oct 30 20:13 test.sh
```

（2）减去全部用户对文件 test.sh 的执行权限。
```shell
chmod -x test.sh

# 或
chmod a-x test.sh

ll test.sh
-rw--w--w- 1 root root 0 Oct 30 20:13 test.sh
```

（3）增加属主对文件 test.sh 的执行权限。
```shell
chmod u+x test.sh

ll test.sh
-rwx-w--w- 1 root root 0 Oct 30 20:13 test.sh
```

（4）分别使用符号方式和数字方式为文件 test.sh 设置新的权限为 rwxr--r--。
```shell
# 符号方式
chmod a=rwx,g=r,o=r test.sh

# 数字方式
chmod 0744 test.sh

# 或
chmod 744 test.sh

ll test.sh
-rwxr--r-- 1 root root 0 Oct 30 20:13 test.sh
```

（5）递归地将目录及其下所有文件和子目录加上读权限。
```shell
chmod -R a+r dir

ll dir
total 4
drwxrwxrwx 2 root root 4096 Oct 30 20:29 newdir
-rw-rw-rw- 1 root root    0 Oct 30 20:13 test.sh
-rw-rw-rw- 1 root root    0 Oct 30 20:26 test.txt
```

（6）给文件 test.sh 增加 SETUID 权限。前提是属主对文件 test.sh 有执行权限。
```shell
chmod u+x test.sh

ll test.sh
-rwsr--r-- 1 root root 0 Oct 30 20:13 test.sh
```

## 5.拓展知识
### 5.1 文件的特殊权限
#### SETUID
SETUID 使用小写字母 s 表示，出现在属主可执行权限位，具有 SUID 权限的文件会在其执行时，使调用者的有效身份临时变为该文件的拥有者，用于临时提升权限，使调用者暂时获得该文件拥有者的权限。

例如命令 passwd 的权限：
```
ll /usr/bin/passwd
-rwsr-xr-x 1 root root 27832 Jun 10  2014 /usr/bin/passwd
```
在文件拥有者的执行位上出现 s 而不是 x，所以说 passwd 具有 SUID 权限。修改用户密码使用的是 passwd 这个命令，Linux 用户密码存储在文件 /etc/shadow 中。首先查看一下 /etc/shadow 文件的权限：
```
ll /etc/shadow
---------- 1 root root 853 Jan  4 14:56 /etc/shadow
```
可见 root 没有读写权限，但是为什么 root 实际上可以读取和修改 shadow 呢？因为 Linux 的权限管理机制不能够限制神一样的 root。从 shadow 的权限列表可以看出，root 组用户和其他用户对 shadow 没有读写权限的，也就是只有 root 才能进行强制的读写操作。但是实际上普通用户是可以自行修改自己的密码的，这就是为什么呢？因为 /usr/bin/passwd 的属主 root 对其权限是 rws，而且其他用户的使用权限为 r-x，也就是说，别人在执行 passwd 时会暂时获得 passwd 的属主即 root 的权限。这就是 Linux 特有的 SUID 权限机制。

#### SETGID
SETGID 与 SETUID类似，使用小写字母 s 表示，出现在用户组可执行权限位，具有 SETGID 权限的文件会在其执行时，使调用者的有效用户组临时变为该文件属主的用户组，用于临时提升权限，使调用者暂时获得该文件所属用户组的权限。

当 SGID 作用于可执行文件时，在执行该文件时，用户将获得该文件所属组的权限。

当 SGID 作用于目录时，当用户对某一目录有写和执行权限时，该用户可以在该目录下建立文件，如果该目录具有 SGID 权限，则该用户在该目录下建立的文件都属于这个目录所属的组。

#### SBIT
SBIT（Sticky Bit）称为粘滞位，它出现在其他用户权限的执行位上，只能用来修饰一个目录，用于限制文件的删除。

当某一个目录拥有 SBIT 权限时，则任何一个能够在这个目录下建立文件的用户，该用户在这个目录下所建立的文件，只有该用户自己和 root 可以删除，其他用户均不可以。例如目录 /tmp 的权限如下：
```
ll -d /tmp
drwxrwxrwt 14 root root 147456 2月  14 16:01 /tmp
```
注意，如果目录的其他用户的权限执行位是 T，则表示 SBIT 权限无效。发生的情况是权限的执行位不是 x。

### 5.2 Linux 文件分类
Linux 中一切皆文件，文件一般分为如下几种类型：
```
- 普通文件
d 目录
b 块设备
c 字符设备
p 命名管道
l 符号链接
s 套接字
```
如果文件是目录，其 rwx 权限的作用如下：
（1）目录读权限位意味着可以列出其中的内容；
（2）目录写权限位意味着可以在该目录中创建、删除、更名或移动文件，前提是目录需要有执行权限；
（3）目录执行权限位则意味着可以进入该目录进行搜索。因此在创建目录的时候一般都具有可执行权限。

---
## 参考文献
[chmod(1) - Linux manual page - Michael Kerrisk](https://man7.org/linux/man-pages/man1/chmod.1.html)

[Linux 文件特殊权限 SUID、SGID 与 SBIT](https://dablelv.blog.csdn.net/article/details/87280503)
