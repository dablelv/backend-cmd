## 1.命令简介
exit 是 Shell 内建命令，用于退出当前 Shell 进程。

## 2.命令格式
```
exit N
```
（1）状态码 N 的范围是 0-255，一般情况下，0 表示正常退出，非零表示异常退出。如果是 0-255 之外的数值，则会被强制转换为 uint8_t 类型的数值，比如 -1 会被转换为 255，256 会发生类型宽度截断，被转换为 0；

（2）状态码 N 可以不指定，默认是上一条命令的退出状态码。

## 3.常用示例
（1）退出终端。
```shell
exit
```
（2）用于Shell脚本，退出当前Shell进程。
```shell
#正常结果
exit 0

#异常退出
exit 1
```
（3）使用 trap 内建命令，用于挂载 Shell 进程结束前需要执行的命令。格式为：trap "commands" EXIT。如脚本exit.sh：
```shell
#!/bin/bash

echo "start"
trap "echo 'end'" EXIT
echo "before exit"
exit 0
```
执行exit.sh输出：
```
start
before exit
end
```
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)
