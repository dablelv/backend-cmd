## 1.命令简介
mkdir（make directories）创建目录。

若指定目录不存在则创建目录。若指定目录已存在，则会提示已存在而不继续创建。
## 2.命令格式
```shell
mkdir [<OPTION>] ... <DIRECTORY> ...
```
## 3.选项说明
```shell
-m, --mode=<MODE>
	设置权限模式(类似 chmod)，而不是 rwx 减 umask。
-p, --parents
	需要时创建目标目录的上层目录，但即使这些目录已存在也不当作错误处理。
-v, --verbose
	每次创建新目录都显示信息。
-Z
	将每个创建的目录的 SELinux 安全环境设置为 默认类型。
--context[=<CTX>]
	像 -Z，或者如果指定了 CTX，则将 SELinux 或 SMACK 安全上下文设置为 CTX。
--help
	显示此帮助信息并退出。
--version
	显示版本信息并退出。
```
## 4.常用示例
（1）创建新目录。
```
# mkdir go cpp
```
（2）创建目录并指定权限。

比如设定权限为 700，表示其他用户对新创建的目录没有读（显示目录列表）、写（创建文件）和执行（进入目录）的权限。
```shell
# mkdir -m 700 go cpp

# ll -d go cpp
drwx------ 2 root root 4096 Oct 25 11:34 cpp
drwx------ 2 root root 4096 Oct 25 11:34 go
```

（3）创建目录，如果父目录不存在则一并创建。
```shell
# mkdir -p go/go1/go2

# tree go
go
└── go1
    └── go2

2 directories, 0 files
```
（4）批量创建目录。
```shell
# mkdir txt{0..10}

# ls
txt0  txt1  txt10  txt2  txt3  txt4  txt5  txt6  txt7  txt8  txt9
```

---
## 参考文献
[mkdir(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/mkdir.1.html)

<Vssue title="mkdir" />