## 1.命令简介
realpath 用于获取指定目录或文件的绝对路径。

编写 Shell 脚本中，通常会使用相对路径来指明文件，但有时候，我们需要用到绝对路径，此时可以使用 realpath 来获取。
## 2.命令格式
```
realpath [OPTIONS] FILES
```
## 3.选项说明
```
-e, --canonicalize-existing
	文件 FILE 的所有组成部件必须都存在
-m, --canonicalize-missing
	文件 FILE 的组成部件可以不存在
-L, --logical
	在软链接之前解析父目录 ..
-P, --physical
	解析软链接，默认动作
-q, --quiet
	静默模式输出，禁止显示大多数错误消息
--relative-to=DIR
	相对于目录 DIR 的路径
--relative-base=DIR
	如果文件在基目录 DIR下，打印结果会省去基目录，否则打印绝对路径
-s, --strip, --no-symlinks
	不扩展软链接
-z, --zero
	不分隔输出，即所有的输出均在一行而不是单独每行
--help
	显示帮助信息
--version
	显示版本信息
```

## 4.常用示例
（1）打印指定文件的绝对路径。执行命令时当前工作目录为 /data/test/src。
```
realpath ./hello.tgz
/data/test/src/hello.tgz
```
（2）显示软链接指向的目标文件的绝对路径。执行命令时当前工作目录为 /data/test。
```
ll
total 4
-rw-r--r-- 1 root root    0 Feb  1 07:26 foo
lrwxrwxrwx 1 root root   13 Feb  1 07:05 hello.sln -> src/hello.tgz
drwxr-xr-x 2 root root 4096 Feb  1 07:19 src

realpath ./hello.sln
/data/test/src/hello.tgz
```
可见，即便使用相对路径创建的软链接，realpath 也能顺利解析。

（3）打印某个文件相对于另外一个目录的路径。执行命令时当前工作目录为 /data/test。
```
realpath --relative-to=./src ./foo
../foo
```

（4）打印某个文件相对于基目录的路径，如果文件在基目录下，则会省去基目录。执行命令时当前工作目录为 /data/test。
```
realpath --relative-base=/data/test ./foo
foo
```

---
## 参考文献
[realpath(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/realpath.1.html)
