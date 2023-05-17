## 1.命令简介
test 可检查文件类型和比较值。

test 用于检查某个条件是否成立，它可以进行数值、字符串和文件三个方面的测试。

本文介绍的是 GNU 版本的 test，其它版本（如 POSIX 版）的实现可能会有所不同。

## 2.命令格式
```
test
test EXPRESSION
```
省略表达式 EXPRESSION 默认为 false。[] 实际上是 Bash 中 test 命令的简写，即所有的 test EXPRESSION 等于 [ EXPRESSION ]。

## 3.选项说明
```
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```
注意，虽然 test 拥有选项 --help 与 --version，但无法使用。test 将这两个选项当做非空的普通字符串进行处理，并返回 true。

## 4.EXPRESSION
test 退出状态码由表达式结果决定，表达式为 true 状态码为 0，表达式为 false，状态码为 1。 

### 逻辑运算
```
! EXPRESSION
	逻辑非，EXPRESSION 为 false 返回 true
EXPRESSION1 -a EXPRESSION2
	逻辑与，两个表达式均为 true 返回 true
EXPRESSION1 -o EXPRESSION2
	逻辑或，只要有一个表达式为 true 返回 true
```
### 数值比较
```
INTEGER1 -eq INTEGER2
	两整数是否相等
INTEGER1 -ne INTEGER2
	整数 INTEGER1 是否不等于 INTEGER2
INTEGER1 -gt INTEGER2
	整数 INTEGER1 是否大于 INTEGER2
INTEGER1 -ge INTEGER2
	整数 INTEGER1 是否大于等于 INTEGER2
INTEGER1 -lt INTEGER2
	整数 INTEGER1 是否小于 INTEGER2
INTEGER1 -le INTEGER2
	整数 INTEGER1 是否小于等于 INTEGER2
```
### 字符串比较
```
-n STRING
	字符串不为空返回 true
-z STRING
	字符串为空返回 true
STRING1 = STRING2
	字符串相等返回 true
STRING1 != STRING2
	字符串不相等返回 true
```
### 文件比较与类型判断
```
FILE1 -ef FILE2
	两个文件是否为同一个文件。主要看文件设备号与 inode 是否一致
FILE1 -nt FILE2
	文件 FILE1 是否比 FILE2 新（修改时间新）
FILE1 -ot FILE2
	文件 FILE1 是否比 FILE2 旧（修改时间旧）
-b FILE
	文件存在且是块（block）设备文件
-c FILE
	文件存在且是字符（character）设备文件
-d FILE
	文件存在且是目录（directory）
-e FILE
	文件存在（exist）返回 true
-f FILE
	文件存在且是普通文件
-g FILE
	文件存在且设置了 SGID
-G FILE
	文件存在且属于有效组ID
-h FILE
	文件存在且是软链接。同 -L
-k FILE
	文件存在且设置了粘着位（Sticky Bit）
-L FILE
	文件存在且是软链接。同 -h
-O FILE
	文件存在且属于有效用户ID
-p FILE
	文件存在且属于命名管道
-r FILE
	文件存在且可读
-s FILE
	文件存在且内容不为空
-S FILE
	文件存在且是一个套接字（socket）
-t FD
	文件描述符是在一个终端打开的
-u FILE
	文件存在且设置了 SUID 位
-w FILE
	文件存在且且可写
-x FILE
	文件存在且可执行
```
文件的比较与类型判断，除了 -h 与 -L，其它所有的选项都对软链接进行解引用。

## 5.常用示例

（1）判断数值是否相等。

```shell
test 0 -eq 0
echo $?
0
```
test 退出状态码等于 0 表示条件成立。

（2）判断文件是否存在。

```shell
test -e /etc/passwd
echo $?
0
```
test 退出状态码等于 0 表示文件存在。

（3）判断目录是否存在。

```shell
test -d /home
echo $?
0
```

（4）判断文件是否是同一个文件。
```shell
test /etc/passwd -ef /etc/shadow
echo $?
1
```
test 退出状态码等于 1 表示不是同一个文件。

（5）当 /home 为目录，并且可写时为真。

```shell
test -d /home -a -w /home
echo $?
0
```

---
## 参考文献
[Coreutils - GNU core utilities](https://www.gnu.org/software/coreutils/)

[test(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/test.1.html)
