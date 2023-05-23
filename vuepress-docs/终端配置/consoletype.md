## 1.命令简介
consoletype 用于打印连接到标准输入的终端类型。

并检查连接到标准输入的控制台是否为当前前台虚拟控制台。 

如果控制台是虚拟终端（/dev/tty* 或 /dev/console 设备不在串行控制台上），将打印 vt。

如果标准输入是串行控制台（/dev/console 或 /dev/ ttyS*) 将打印 serial。

如果标准输入是一个伪终端将打印 pty 。

## 2.命令格式
```shell
consoletype [stdout] [fg]
```
## 3.选项说明
无。

## 4.返回值
consoletype 没有参数时返回：

- 0 如果在虚拟终端上。
- 1 如果在串行控制台上。
- 2 如果在伪终端上。

当传递 stdout 参数时，consoletype 返回：

- 在所有情况下均为 0，并将控制台类型打印到标准输出。

当传递 fg 参数时，consoletype 返回：

- 0 如果连接到标准输入的控制台是当前虚拟终端。
- 1 否则。

## 5.常用示例
（1）无参执行 consoletype 打印连接到标准输入的终端类型。

```shell
consoletype
pty

echo $?
2
```

（2）指定 stdout 打印连接到标准输入的终端类型。

```shell
consoletype stdout
pty

echo $?
0
```

（3）指定 fg 执行 consoletype。

```shell
consoletype fg

echo $?
1
```
返回值为 1 表明连接到标准输入的控制台不是当前虚拟终端。

---
## 参考文献
[consoletype(1) - Linux manual page - linux.org](https://www.linux.org/docs/man1/consoletype.html)

<Vssue title="consoletype" />