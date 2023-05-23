## 1.命令简介
tee 命令从标准输入读取数据后，将数据重定向到给定的文件和标准输出。给定的文件可以有多个。

因为 tee 意为字母 T，数据从左边（标准输入）流入，从右边（标准输出）和下面（文件）分流输出，字母 T 的形状很形象地说明了数据的流向，故将该命令命名为 tee。

数据流向过程如下图所示。

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019070220202158.png)
## 2.命令格式
```shell
tee [OPTION]... [FILE]...
```

## 3.选项说明
```
-a, --append
	向文件中重定向时使用追加模式
-i, --ignore-interrupts
	忽略中断（interrupt）信号
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）标准错误输出和标准输出同时输出到屏幕和指定文件 file1 与 file2。
```
make 2>&1 | tee file1 file2
```
2>&1 表示将标准错误输出重定向到标准输出；tee 表示将命令结果同时输出到给定的文件和标准输出（屏幕）。

----
## 参考文献
[tee(1) — Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/tee.1.html)

[Linux命令大全.tee命令](http://man.linuxde.net/tee)

<Vssue title="tee" />