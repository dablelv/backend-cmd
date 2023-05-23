## 1.命令简介
chgrp（change group）命令，用来改变指定文件或目录所属的用户组。仅限文件属主与 root 使用。

指定组名时可以是用户组名称也可以是用户组 ID。文件名可以是由空格分隔的文件列表，也可以是由通配符描述的文件集合。

## 2.命令格式
```
chgrp [OPTION]... GROUP FILE...
chgrp [OPTION]... --reference=RFILE FILE...
```

## 3.选项说明
```
-c, --changes
	类似 --verbose，但只在有变更时才显示结果
-f, --silent, --quiet
	去除大部份的错误信息
-v, --verbose
	显示指令详细的执行过程
--dereference
	修改符号链接指向的实际文件的属组，而不是符号链接文件本身（默认选项）
-h, --no-dereference
	修改符号链接文件本身的属组。作用与 --dereference 相反
--no-preserve-root
	不特殊对待根目录 /。为默认选项
--preserve-root
	不允许在根目录 /上递归操作
--reference=RFILE
	使用指定的文件 RFILE 的属主和所属用户组，而非指定值
-R, --recursive
	递归处理所有的文件及子目录
	
	以下三个选项 -H、-L 和 -P 与 -R 配合使用，用于递归操作时确定遍历的方式：
-H
	如果命令行参数是一个符号链接指向一个目录，则遍历它
-L
	遍历每一个符号链接指向的目录
-P
	不遍历任何符号链接（默认选项）
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）修改文件 test.sh 所属组为 bin。
```
chgrp bin test.sh

ll test.sh
-rwxr----- 1 root bin     0 Oct 30 20:13 test.sh
```

（2）通过组 ID 修改文件 test.sh 所属组为 root。
```
chgrp 0 test.sh

chgrp 0 test.sh
-rwxr----- 1 root root 0 Oct 30 20:13 test.sh
```
用户组 root 的 GID 可以通过查看文件 /etc/group 获得，组 root 的 GID 为 0。
```
head -n1 /etc/group
root:x:0:
```
第一列为组名，第三列为组 ID。

（3）递归修改指定目录下所有的文件和目录的所属组。
```
chgrp -R bin dir

ll dir
drwxrwxrwx 2 root bin 4096 Oct 30 20:29 newdir
-rwxr----- 1 root bin    0 Oct 30 20:13 test.sh
-rw-rw-rw- 1 root bin    0 Oct 30 20:26 test.txt
```

---
## 参考文献
[chgrp(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/chgrp.1.html)

<Vssue title="chgrp" />