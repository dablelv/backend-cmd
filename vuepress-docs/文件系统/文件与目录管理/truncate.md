## 1.命令简介
truncate 将文件的大小缩小或扩展到指定的大小。

如果指定的文件不存在将被创建。

如果文件大于指定的大小，则会丢失额外的数据。如果较短，它将被扩展，扩展的稀疏部分（空洞）读取时为零字节。

注意，文件空洞部分不占用磁盘空间，文件所占用的磁盘空间仍然是连续的。

![在这里插入图片描述](https://img-blog.csdnimg.cn/21477614c8124b8282ca1b3b80a8b11e.png)

## 2.命令格式
```shell
truncate <OPTION>... <FILE>...
```

## 3.选项说明
```shell
-c, --no-create
	不创建任何文件。
-o, --io-blocks
	将 SIZE 视为 IO 块数而不是字节数。Linux 文件系统的 IO 块大小通过为 4096 字节。
-r, --reference=<RFILE>
	以 RFILE 为基础尺寸。
-s, --size=<SIZE>
	设置或调整文件大小为指定字节。
--help
	显示帮助信息并退出。
--version
	显示版本信息并退出。
```
其中 SIZE 参数是一个整数和可选单位，如 10K（10*1024）。单位 K、M、G、T、P、E、Z、Y 都是 1024 的幂。KB,MB,... 为 1000 的幂。 也可以使用二进制前缀：KiB=K，MiB=M，以此类推。

SIZE 也可以添加前缀字符：'+' 扩展，'-' 减少，'<' 最多，'>' 至少，'/' 向下舍入为 SIZE 的倍数，'%' 向上舍入为 SIZE 的倍数。

## 4.常用示例
我们先创建一个内容为 "Hello World!" 的文件 foo.txt。
```shell
# echo 'Hello World!' > foo.txt && ls -l foo.txt
-rw-r--r-- 1 root root 13 Oct 22 21:43 foo.txt
```
（1）截断文件到指定字节。

比如将上面的 foo.txt 截断到 11 字节，即删除最后一个换行符和感叹符。
```shell
# truncate -s 11 foo.txt

# cat foo.txt
Hello World
```

（2）填充文件到指定字节。

比如将上面的 foo.txt 填充到 4097 字节，然后再使用 du 查看占用的磁盘空间大小。
```shell
# truncate -s 4097 foo.txt

# du -h foo.txt
4.0K	foo.txt
```
可见，文件被填上空洞，实际上是不占用磁盘空间的。

至于为什么显示 4K，因为 Linux 文件系统存储最小单位为 block，不足 1 个 block 大小的文件也要占用 1 个 block 大小。这里的一个 block 一般等于 4096 字节。

我们可以通过 `ls -l` 来显示文件包含空洞的逻辑大小。
```shell
# ls -l foo.txt
-rw-r--r-- 1 root root 4097 Oct 22 21:59 foo.txt
```

---
## 参考文献
[strace(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/strace.1.html)
