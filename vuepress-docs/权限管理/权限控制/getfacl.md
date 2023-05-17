## 1.命令简介
getfacl（get file acess control lists）获取文件访问控制列表。

## 2.命令格式
```shell
getfacl [-aceEsRLPtpndvh] <file> ...
getfacl [-aceEsRLPtpndvh] -
```
## 3.选项说明
```
-a,  --access
	仅显示文件访问控制列表。
-d, --default
	仅显示默认的访问控制列表。
-c, --omit-header
	不显示注释表头。
-e, --all-effective
	打印所有有效权限注释，即使与 ACL 条目定义的权限相同。
-E, --no-effective
	显示无效权限。
-s, --skip-base
	跳过仅包含基本 ACL 条目（owner、group 和 others）的文件。
-R, --recursive
	递归显示子目录。
-L, --logical
	逻辑遍历（跟随符号链接）。
-P, --physical
	物理遍历(不跟随符号链接)。
-t, --tabular
	使用制表符分隔的输出格式。
-n, --numeric
	显示数字的用户/组标识。
-p, --absolute-names
	不去除路径前的 '/' 符号。
-v, --version
	显示版本并退出。
-h, --help
	显示帮助信息并退出。
--
	命令行选项结束符。所有剩余参数都被解释为文件名，即使它们以连字符开头。
-
	如果文件名参数是单连字符，getfacl 将从标准输入读取文件列表。
```
## 4.常用示例
（1）获取文件访问控制列表。

```shell
getfacl test.txt
# file: test.txt
# owner: root
# group: root
user::rw-
group::r--
other::r--
```
文件访问控制列表默认为空，我们可以使用 setfacl 为文件设置 ACL。比如给文件 test.txt 添加针对用户 alice 的 rw 权限。
```shell
setfacl -m user:alice:rw- test.txt

getfacl test.txt
# file: test.txt
# owner: root
# group: root
user::rw-
user:alice:rw-
group::r--
mask::rw-
other::r--
```
从输出结果 user:alice:rw- 可以看出，用户 alice 对文件 test.txt 拥有了 rw 权限。

（2）不显示注释表头。
```shell
getfacl -c test.txt
user::rw-
user:alice:rw-
group::r--
mask::rw-
other::r--
```
（3）打印所有有效权限注释，即使与 ACL 条目定义的权限相同。
```shell
getfacl -e test.txt
# file: test.txt
# owner: root
# group: root
user::rw-
user:alice:rw-		#effective:rw-
group::r--			#effective:r--
mask::rw-
other::r--
```

（4）仅显示默认的访问控制列表。

默认的访问控制列表只针对目录有效。假设我们有一个名为 testdir 的目录。
```shell
getfacl -d testdir
# file: test.txt
# owner: root
# group: root
```
可见目录缺省是没有默认的访问控制列表。下面通过 serfacl 命令给目录添加默认的访问控制列表。
```shell
setfacl -m d:u:alice:rwx testdir

getfacl -d testdir
# file: testdir
# owner: root
# group: root
user::rwx
user:alice:rwx
group::r-x
mask::rwx
other::r-x
```

---
## 参考文献
[getfacl(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/getfacl.1.html)
