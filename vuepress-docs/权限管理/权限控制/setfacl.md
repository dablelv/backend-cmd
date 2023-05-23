## 1.命令简介
setfacl（set file access control lists）设置文件访问控制列表。

setfacl 可以更精确的控制权限的分配，比如让某一个用户对某一个文件具有某种权限。

ACL 指文件的所有者、所属组、其他人的读/写/执行之外的特殊的权限， 对于需要特殊权限的使用状况有一定帮助。 如某一个文件，不让单一的某个用户访问。

## 2.命令格式
```shell
setfacl [-bkndRLPvh] [{-m|-x} <acl_spec>] [{-M|-X} <acl_file>] file ...
```

## 3.选项说明
```
-m, --modify=<acl>
	更改文件的访问控制列表。
-M, --modify-file=<file>
	从文件读取访问控制列表条目更改。
-x, --remove=<acl>
	根据文件中访问控制列表移除条目。
-X, --remove-file=<file>
	从文件读取访问控制列表条目并删除。
-b, --remove-all
	删除所有扩展访问控制列表条目。
-k, --remove-default
	移除默认访问控制列表。
--set=acl
	设定替换当前的文件访问控制列表。
--set-file=<file>
	从文件中读取访问控制列表条目设定。
--mask
	重新计算有效权限掩码。
-n, --no-mask
	不重新计算有效权限掩码。
-d, --default
	应用到默认访问控制列表的操作。
-R, --recursive
	递归操作子目录。
-L, --logical
	依照系统逻辑，跟随符号链接。
-P, --physical
	依照自然逻辑，不跟随符号链接。
--restore=<file>
	恢复访问控制列表，和 “getfacl -R” 作用相反。
--test
	测试模式。列出 ACL，而不是更改任何文件的 ACL。
-v, --version
	显示版本并退出。
-h, --help
	显示本帮助信息。
```

## 4.ACL
### 4.1 ACL 组成
ACL 是由一系列的 Access Entry 所组成的，每一条 Access Entry 定义了特定的类别可以对文件拥有的操作权限。Access Entry 有三个组成部分：
- Entry tag type
- Qualifier (optional)
- Permission

我们先来看一下最重要的 Entry tag type，它有以下几个类型：
```
ACL_USER_OBJ：相当于 Linux 里 file owner 的 permission。 
ACL_USER：定义了额外的用户可以对此文件拥有的 permission。 
ACL_GROUP_OBJ：相当于 Linux 里 group 的 permission。 
ACL_GROUP：定义了额外的组可以对此文件拥有的 permission。 
ACL_MASK：定义了 ACL_USER, ACL_GROUP_OBJ 和 ACL_GROUP 的最大权限。 
ACL_OTHER：相当于 Linux 里 other 的 permission。 
```

首先我们还是要讲一下设置 ACL 文件的格式。

每一个 Access Entry 都是由三个被 : 号分隔开的字段所组成，第一个就是 Entry tag type。
```shell
user	对应了 ACL_USER_OBJ 和 ACL_USER
group	对应了 ACL_GROUP_OBJ 和 ACL_GROUP
mask	对应了 ACL_MASK
other	对应了 ACL_OTHER
```
第二个字段称之为 qualifier，为用户名或组名，它定义了特定用户和组对于文件的权限。注意，只有 user 和 group 才有 qualifier，其他的都为空。

第三个字段就是我们熟悉的 permission 了。它和 Linux 的 permission 一样定义，这里就不多讲了。

### 4.2 ACL 设置
下面我们就来看一下怎么设置 test.txt 这个文件的 ACL 让它来达到我们上面的要求。

一开始文件没有 ACL 的额外属性：
```shell
ls -l test.txt
-rw-r--r-- 1 root root 0 Oct 27 21:37 test.txt

getfacl --omit-header test.txt
user::rw-
group::r--
other::r--
```
我们先让用户 alice 拥有对 test.txt 文件的读写权限。
```shell
setfacl -m user:alice:rw- ./test.txt
```
我们再查看一下 test.txt 的 ACL。
```shell
getfacl --omit-header ./test.txt
user::rw-
user:alice:rw-
group::r--
mask::rw-
other::r--
```
这时我们就可以看到 alice 用户在 ACL 里面已经拥有了对文件的读写权。这个时候如果我们查看一下 Linux 的 permission 我们还会发现一个不一样的地方。
```shell
ls -l ./test.txt
-rw-rw-r--+ 1 root root 0 Oct 27 21:37 test.txt
```
在文件 permission 的最后多了一个 + 号，当任何一个文件拥有了 ACL_USER 或者 ACL_GROUP 的值以后我们就可以称它为 ACL 文件，这个 + 号就是用来提示我们的。我们还可以发现当一个文件拥有了 ACL_USER 或者 ACL_GROUP 的值时 ACL_MASK 同时也会被定义。

接下来我们来设置 alice 组拥有 read permission：
```shell
setfacl -m group:alice:r-- ./test.txt

getfacl --omit-header ./test.txt
user::rw-
user:alice:rw-
group::r--
group:alice:r--
mask::rw-
other::r--
```

### 4.3 ACL_MASK 和 Effective permission
这里需要重点讲一下 ACL_MASK，因为这是掌握 ACL 的另一个关键，在 Linux file permission 里面大家都知道比如对于`rw-rw-r--`来说, 当中的那个`rw-`是指文件组的permission。但是在 ACL 里面这种情况只是在 ACL_MASK 不存在的情况下成立。如果文件有 ACL_MASK 值，那么当中那个`rw-`代表的就是 mask 值而不再是 group permission了。

让我们来看下面这个例子：
```shell
ls -l
-rwxrw-r-- 1 root admin 0 Jul 3 23:10 test.sh
```
这里说明 test.sh 文件只有文件属主 root 拥有 rwx 权限。admin 组只有 rw 权限。现在我们想让用户 alice 也对 test.sh 具有和 root 一样的 permission。
```shell
setfacl -m user:alice:rwx ./test.sh

getfacl --omit-header ./test.sh
user::rwx user:alice:rwx
group::rw-
mask::rwx
other::r--
```
这里我们看到 alice 已经拥有了 rwx 权限，mask 值也被设定为 rwx，那是因为它规定了 ACL_USER，ACL_GROUP 和 ACL_GROUP_OBJ 的最大值。现在我们再来看 test.sh 的 Linux permission，它已经变成了：
```shell
ls -l
-rwxrwxr--+ 1 root admin 0 Jul 3 23:10 test.sh
```
那么如果现在 admin 组的用户想要执行 test.sh 的程序会发生什么情况呢？它会被permission deny。原因在于实际上 admin 组的用户只有 rw 权限，这里当中显示的 rwx 是ACL_MASK 的值而不是 group 的 permission。

所以从这里我们就可以知道，如果一个文件后面有 + 标记，我们都需要用 getfacl 来确认它的 permission，以免发生混淆。

下面我们再来继续看一个例子，假如现在我们设置 test.sh 的 mask 为 read only，那么 admin 组的用户还会有 write permission 吗？
```shell
setfacl -m mask::r-- ./test.sh

getfacl --omit-header ./test.sh
user::rwx
user:alice:rwx   #effective:r--
group::rw-        #effective:r--
mask::r--
other::r--
```
这时候我们可以看到 ACL_USER 和 ACL_GROUP_OBJ 旁边多了个`#effective:r–`，这是什么意思呢？

让我们再来回顾一下 ACL_MASK 的定义。它规定了 ACL_USER，ACL_GROUP_OBJ 和 ACL_GROUP 的最大权限。那么在我们这个例子中他们的最大权限也就是 read only。虽然我们这里给 ACL_USER 和 ACL_GROUP_OBJ 设置了其他权限，但是他们真正有效果的只有 read 权限。

这时我们再来查看 test.sh 的 Linux file permission 时它的 group permission 也会显示其 mask 的值 r--。
```shell
ls -l
-rwxr--r--+ 1 root admin 0 Jul 3 23:10 test.sh
```

### 4.4 Default ACL
上面我们所有讲的都是 Access ACL，也就是对文件而言。下面简单讲一下 Default ACL。

Default ACL 是指对于一个目录进行 Default ACL 设置，并且在此目录下建立的文件都将继承此目录的 ACL。

同样我们来做一个试验说明，比如现在 root 用户建立了一个 dir 目录：
```shell
mkdir dir
```
他希望所有在此目录下建立的文件都可以被 alice 用户所访问，那么我们就应该对 dir 目录设置 Default ACL。
```shell
setfacl -d -m user:alice:rw ./dir

getfacl --omit-header ./dir
user::rwx
group::rwx
other::r-x
default:user::rwx
default:user:alice:rwx
default:group::rwx
default:mask::rwx
default: other::r-x
```
这里我们可以看到 ACL 定义了 default 选项，alice 用户拥有了 default 的 rwx 权限。所有没有定义的 default 都将从 file permission 里 copy 过来。现在 root 用户在 dir 下建立一个 test.txt 文件。
```shell
touch ./dir/test.txt
ls -l ./dir/test.txt
-rw-rw-r--+ 1 root root 0 Jul 3 23:46 ./dir/test.txt

getfacl --omit-header ./dir/test.txt
user::rw-
user:alice:rw-
group::rwx #effective:rw-
mask::rw-
other::r--
```
这里我们看到在 dir 下建立的文件 alice 用户自动就有了 rw 权限。

### 4.5 ACL 相关命令
前面的例子中我们都注意到了 getfacl 命令是用来读取文件的 ACL，setfacl 是用来设定文件的 Acess ACL。这里还有一个 chacl 是用来改变文件和目录的 Access ACL and Default ACL，它的具体参数大家可以去看 man page。我只想提及一下 chacl -B。它可以彻底删除文件或者目录的 ACL 属性(包括 Default ACL)，比如你即使用了 setfacl -x 删除了所有文件的 ACL 属性，那个 + 号还是会出现在文件的末尾，所以正确的删除方法应该是用chacl -B用cp来复制文件的时候我们现在可以加上-p选项。这样在拷贝文件的时候也将拷贝文件的 ACL 属性，对于不能拷贝的 ACL 属性将给出警告。

mv 命令将会默认地移动文件的 ACL 属性，同样如果操作不允许的情况下会给出警告。

## 5.常用示例
（1）修改一个文件的 ACL 权限。

- 比如给一个用户 alice 添加对文件 test 的 rw 权限。
```shell
setfacl -m user:alice:rw- test
```

- 比如给一个用户组 alice 添加对文件 test 的 rw 权限。
```shell
setfacl -m group:alice:rw- test
```

（2）设置目录的默认 ACL 权限。

默认的访问控制列表只针对目录有效。假设我们有一个名为 testdir 的目录。
```shell
setfacl -m d:u:alice:rwx testdir
```
一个目录设置过递归 ACL 权限后，假如又添加了些新文件，那么这个默认 ACL 权限就会把新添的文件全部继承这个目录的 ACL 权限。

（3）清除指定用户对文件的 ACL 规则。
```shell
setfacl -x u:alice test
```
（4）清除指定用户组对文件的 ACL 规则。
```shell
setfacl -x g:alice test
```
（5）清除文件的所有 ACL。
```shell
setfacl -b test
```

---
## 参考文献
[setfacl(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/setfacl.1.html)

[【Linux】一步一步学Linux——setfacl命令(117)](https://blog.csdn.net/dengjin20104042056/article/details/98896132)

<Vssue title="setfacl" />
