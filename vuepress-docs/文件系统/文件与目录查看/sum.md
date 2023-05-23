## 1.命令简介
sum 命令用于计算并显示指定文件的校验和与文件所占用的磁盘块数。

## 2.命令格式
```shell
sum [OPTION]... [FILE]...
```
如果没有 FILE，或者 FILE 为 -，则读取标准输入。

## 3.选项说明
```shell
-r
	使用 BSD 加和算法(默认)，以1KB 为一个块。
-s, --sysv
	使用 System V 加和算法，以51双字节为一个块
--help
	显示帮助信息并退出。
--version
	显示版本信息并退出。
```

## 4.常用示例
假设有一个脚本文件 test.sh。
```shell
cat test.sh
#!/bin/bash

echo test
```
（1）计算文件校验码和块数。
```shell
sum test.sh
54953     1
```

（2）显示指定使用 BSD(16-bit) 加和算法生成校验和。
```shell
sum -r test.sh
54953     1
```

（3）使用 System V 加和算法生成校验和。
```shell
sum -s test.sh
1814 1 test.sh
```

---
## 参考文献
[sum(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/sum.1.html)

<Vssue title="sum" />
