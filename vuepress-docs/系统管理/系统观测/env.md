## 1.命令简介
env 命令用于显示系统中已存在的环境变量，以及在定义的环境中执行指令。若没有设置任何选项和参数时，则直接显示当前系统的环境变量。本文介绍的是 GNU 版本的 env，其它版本（如 POSIX 版）的实现可能会有所不同。

## 2.命令格式
```
env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]
```

## 3.选项说明
```
-, -i, --ignore-environment
	忽略环境变量
-0, --null
	输出环境变量时以空字符（NUL）替代换行符
-u, --unset=NAME
	从当前环境中删除指定的变量
--help
    显示帮助并退出 
--version
    输出版本信息并退出 
```

## 4.常用示例
（1）显示所有的环境变量。
```
env
XDG_SESSION_ID=2216652
HOSTNAME=TENCENT64.site
TERM=xterm
SHELL=/bin/bash
...
```
（2）临时更改环境变量，使得程序在新的环境变量下运行。例如，使用 C 程序 a.out 用于获取环境变量 PAHT。实现如下：
```
// main.c

#include <stdlib.h>
#include <stdio.h>

int main(void)
{
    char *pathvar;
    pathvar = getenv("PATH");
    printf("PATH=%s\n",pathvar);
    return 0;
}
```
编译生成 a.out，并执行查看环境变量 PATH。
```
gcc main.c
a.out
PATH=/usr/lib64/ccache:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
```
临时改变环境变量 PATH 后执行 a.out。
```
env PATH=test ./a.out
PATH=test
```

（3）查看 env 版本。
```
env --version
env (GNU coreutils) 8.22
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by Richard Mlynarik and David MacKenzie.
```

---
## 参考文献
[env(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/env.1.html)

<Vssue title="env" />