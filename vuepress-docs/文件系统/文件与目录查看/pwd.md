## 1.命令简介
pwd（print working directory）打印当前工作目录的绝对路径。

## 2.命令格式
```shell
pwd [<OPTION>]...
```
## 3.选项说明
```shell
-L, --logical
	使用环境变量 PWD，即使它包含符号链接。为默认选项。
-P, --physical
	显示当前工作目录的实际物理地址。
--help
	显示帮助信息然后退出。
--version
	显示版本信息,然后退出。
```
## 4.常用示例
（1）查看当前工作目录的完整路径。
```shell
# pwd
/root/go
```
（2）如果目录是个符号链接，显示实际路径。
```shell
# ls -l /etc/init.d
lrwxrwxrwx 1 root root 11 Jan 19  2021 /etc/init.d -> rc.d/init.d

# cd /etc/init.d && pwd -P
/etc/rc.d/init.d
```

（3）查看 pwd 命令的帮助信息。
```shell
# /usr/bin/pwd --help
Usage: /usr/bin/pwd [OPTION]...
Print the full filename of the current working directory.

  -L, --logical   use PWD from environment, even if it contains symlinks
  -P, --physical  avoid all symlinks
      --help     display this help and exit
      --version  output version information and exit

NOTE: your shell may have its own version of pwd, which usually supersedes
the version described here.  Please refer to your shell's documentation
for details about the options it supports.

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
For complete documentation, run: info coreutils 'pwd invocation'
```
或者：
```shell
# help pwd
pwd: pwd [-LP]
    Print the name of the current working directory.
    
    Options:
      -L	print the value of $PWD if it names the current working
    	directory
      -P	print the physical directory, without any symbolic links
    
    By default, `pwd' behaves as if `-L' were specified.
    
    Exit Status:
    Returns 0 unless an invalid option is given or the current directory
    cannot be read.
```

---
## 参考文献
[pwd(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/pwd.1.html)
