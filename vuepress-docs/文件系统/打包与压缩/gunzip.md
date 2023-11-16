## 1.命令简介
gunzip（GNU unzip）用来解压缩文件。

gunzip 是使用广泛的解压缩程序，用于解开被 gzip 压缩的文件，这些压缩文件扩展名为 .gz。

事实上 gunzip 是 gzip 的硬连接，因此不论是压缩或解压缩，都可通过 gzip 单独完成。

gunzip 等价于 gzip -d。

## 2.命令格式
```shell
gunzip [ -acfhlLnNrtvV ] [-S <suffix>] [ <name> ... ]
```
## 3.选项说明
```shell
-a, --ascii
	使用 ASCII 文字模式。
-c, --stdout, --to-stdout
	把解压后的文件输出到标准输出设备。
-f, -force
	强行解开压缩文件，不理会文件名称或硬连接是否存在以及该文件是否为符号连接。
-h, --help
	在线帮助。
-l, --list
	列出压缩文件的相关信息。
-L, --license
	显示版本与版权信息。
-n, --no-name
	解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其忽略不予处理。
-N, ——name
	解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其回存到解开的文件上。
-q, --quiet
	不显示警告信息。
-r, --recursive
	递归处理，将指定目录下的所有文件及子目录一并处理。
-S, --suffix <suffix>
	更改压缩字尾字符串。
-t, --test
	测试压缩文件是否正确无误。
-v, --verbose
	显示指令执行过程。
-V, ——version
	显示版本信息。
```
## 4.常用示例
我们先对 /etc/passwd 使用 gizp 进行压缩。
```shell
gzip -c /etc/passwd > passwd.gz
```
（1）解压 gz 文件。
```shell
gunzip passwd.gz
```

（2）解压 gz 文件，但不删除原文件。
```shell
gunzip -c passwd.gz > passwd
```

（3）解压 gz 文件，显示指令执行过程。
```shell
gunzip -v passwd.gz
passwd.gz:	 58.4% -- replaced with passwd
```

（4）指定后缀解压。

如果 gz 文件的后缀不是 gz，那么 gunzip 将报错。
```shell
cp passwd.gz passwd.gz.unknown && gunzip passwd.gz.unknown
```
此时，我们可以指定后面来解压。
```shell
gunzip -S .unknown passwd.gz.unknown
```

（5）列出压缩文件的相关信息（不解压）。
```shell
gunzip -l passwd.gz
compressed        uncompressed  ratio uncompressed_name
	   579                1333  58.4% passwd
```

---
## 参考文献
[gunzip(1) manual - linux.org](https://www.linux.org/docs/man1/gunzip.html)

<Vssue title="gunzip" />