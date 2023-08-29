## 1.命令简介
ldd 命令用于打印程序或共享库文件所依赖的共享库列表。

注意，ldd 本身不是一个二进制程序，而是一个 Shell 脚本，使用文本编辑器 vim 可以查看其内容，具体目录可以使用 which 命令查看。
```shell
which ldd
/usr/bin/ldd
```

我们知道，Linux 的动态库装载器 ld-linux.so 模块会先于 executable 模块工作，并获得控制权，ld-linux.so 会通过系统环境变量的设置，选择只显示可执行模块的dependency，而不运行可执行模块。相关环境变量有：
```
LD_TRACE_LOADED_OBJECTS
LD_WARN
LD_BIND_NOW
LD_LIBRARY_VERSION
LD_VERBOSE
LD_DEBUG
```
ldd 默认开启的环境变量是：LD_TRACE_LOADED_OBJECTS=1。也就是说，LD_TRACE_LOADED_OBJECTS为必要环境变量，其他环境变量的设置是可选的。其他的变量的设置与ldd命令选项的对应关系如下：
```
-d, --data-relocs -> LD_WARN=yes
-r, --function-relocs ->LD_WARN和LD_BIND_NOW=yes
-u, --unused -> LD_DEBUG="unused"
-v, --verbose -> LD_VERBOSE=yes
```
比如设置LD_TRACE_LOADED_OBJECTS环境变量不为空时，任何可执行程序在运行时，都会只显示依赖的动态库，程序并不真正地执行。测试如下：
```
export LD_TRACE_LOADED_OBJECTS=1
ls
	linux-vdso.so.1 =>  (0x00007ffd1d3cf000)
	/$LIB/libonion.so => /lib64/libonion.so (0x00007fbbe7162000)
	libselinux.so.1 => /lib64/libselinux.so.1 (0x00007fbbe6e2e000)
	libcap.so.2 => /lib64/libcap.so.2 (0x00007fbbe6c29000)
	libacl.so.1 => /lib64/libacl.so.1 (0x00007fbbe6a20000)
	libc.so.6 => /lib64/libc.so.6 (0x00007fbbe665e000)
	libdl.so.2 => /lib64/libdl.so.2 (0x00007fbbe645a000)
	libpthread.so.0 => /lib64/libpthread.so.0 (0x00007fbbe623e000)
	libpcre.so.1 => /lib64/libpcre.so.1 (0x00007fbbe5fdd000)
	liblzma.so.5 => /lib64/liblzma.so.5 (0x00007fbbe5db8000)
	/lib64/ld-linux-x86-64.so.2 (0x00007fbbe7053000)
	libattr.so.1 => /lib64/libattr.so.1 (0x00007fbbe5bb3000)
```
撤销该环境变量，ls 即可恢复正常使用：
```
unset LD_TRACE_LOADED_OBJECTS
ls
Changelog  Changelog.ln  dablelv  txt.txt
```
由此可见，ldd 命令其实是通过设置 ld-linux.so 依赖的环境变量来影响 ld-linux.so的工作方式，使得可执行模块加载时显示其依赖的动态库。实际上可以直接执行 ld-linux.so 模块，如`/lib/ld-linux.so.2 --list program`，来达到命令`ldd program`的效果。

## 2.命令格式
```shell
ldd [OPTIONS] FILES
```
其中 OPTIONS 为可选的命令选项，FILES 为必填的程序或共享库文件列表。

## 3.选项说明
```
--version：打印ldd版本号
-v, --verbose：详细信息模式，打印所有相关信息
-u, --unused：打印未使用的直接依赖
-d, --data-relocs：执行重定位和报告任何丢失的对象
-r, --function-relocs：执行数据对象和函数的重定位，并且报告任何丢失的对象和函数。（只对ELF格式文件有效）
--help：显示帮助信息
```

## 4.示例说明
（1）显示可执行文件依赖的动态链接库。
```shell
ldd /usr/bin/ls
	linux-vdso.so.1 =>  (0x00007ffd90514000)
	/$LIB/libonion.so => /lib64/libonion.so (0x00007f294ade8000)
	libselinux.so.1 => /lib64/libselinux.so.1 (0x00007f294aab4000)
	libcap.so.2 => /lib64/libcap.so.2 (0x00007f294a8af000)
	libacl.so.1 => /lib64/libacl.so.1 (0x00007f294a6a6000)
	libc.so.6 => /lib64/libc.so.6 (0x00007f294a2e4000)
	libdl.so.2 => /lib64/libdl.so.2 (0x00007f294a0e0000)
	libpthread.so.0 => /lib64/libpthread.so.0 (0x00007f2949ec4000)
	libpcre.so.1 => /lib64/libpcre.so.1 (0x00007f2949c63000)
	liblzma.so.5 => /lib64/liblzma.so.5 (0x00007f2949a3e000)
	/lib64/ld-linux-x86-64.so.2 (0x00007f294acd9000)
	libattr.so.1 => /lib64/libattr.so.1 (0x00007f2949839000)
```

---
## 参考文献
[ldd(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/ldd.1.html)

[Linux命令大全.ldd命令](http://man.linuxde.net/ldd)

[博客园.ldd命令](https://www.cnblogs.com/wanghetao/p/3779611.html)

<Vssue title="ldd" />
