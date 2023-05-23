## 1.命令简介

cksum 计算并验证文件校验和。

chsum 打印或验证校验和。缺省情况下使用 32 位 CRC 算法。

CRC 校验码确保文件从一个系统传输到另一个系统的过程中不被损坏。这种方法要求校验和在源系统中被计算出来，在目的系统中又被计算一次，两个数字进行比较，如果校验和相等，则该文件被认为是正确传输了。

## 2.命令格式

```shell
cksum [OPTION]... [FILE]...
```
如果没有 FILE 或 FILE 为 -，则读取标准输入。

## 3.选项说明

```shell
-a, --algorithm=TYPE
	选择要使用的摘要类型。TYPE 可取值见下文。
-c, --check
	从 FILEs 中读取校验和并检查它们。
-l, --length=BITS
	以位为单位的摘要长度。不能超过 blake2 算法的最大长度，并且必须是 8 的倍数。
--tag
	创建 BSD 样式的校验和(默认行为)。
--untagged
	创建一个反向样式的校验和，没有摘要类型。
-z, --zero
	以 NUL 结束每个输出行，而不是换行符，并禁用文件名转义。

# 以下五个选项仅在验证校验和时有用。
--ignore-missing
	不要失败或报告丢失文件的状态。
--quiet
	不为每个成功验证的文件打印 OK。
--status
	不输出任何东西，状态码显示成功。
--strict
	对于格式不正确的校验和行，以非零状态码退出。
-w, --warn
	警告格式不正确的校验和行。

--debug
	指示使用的实现。
--help
	显示此帮助并退出。
--version
	输出版本信息并退出。
```
DIGEST 算法可取值如下：
```shell
sysv   	(equivalent to sum -s)
bsd    	(equivalent to sum -r)
crc    	(equivalent to cksum)
md5    	(equivalent to md5sum)
sha1   	(equivalent to sha1sum)
sha224 	(equivalent to sha224sum)
sha256 	(equivalent to sha256sum)
sha384 	(equivalent to sha384sum)
sha512 	(equivalent to sha512sum)
blake2b	(equivalent to b2sum)
sm3    	(only available through cksum)
```
## 4.常用示例
假设有一个 Shell 脚本文件 test.sh。
```
cat test.sh
#!/bin/bash

echo test
```
（1）计算文件的 CRC 校验值和字节统计。
```shell
chsum test.sh
1639953293 23 test.sh
```
其中 1639953293 为 CRC 校验码，23 为字节数。

（2）查看 chsum 版本信息。
```shell
chsum --version
cksum (coreutils) 8.22
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by Q. Frank Xia.
```

（3）查看帮助信息。

```shell
cksum --help
Usage: cksum [FILE]...
  or:  cksum [OPTION]
Print CRC checksum and byte counts of each FILE.

      --help     display this help and exit
      --version  output version information and exit

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
For complete documentation, run: info coreutils 'cksum invocation'
```

---

## 参考文献

[cksum(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/cksum.1.html)

<Vssue title="cksum" />