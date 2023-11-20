## 1.命令简介
find 用于在指定目录查找文件。

find 可以指定一些匹配条件，如按文件名、文件类型、文件属主甚至是时间戳来查找文件，默认递归查找。

## 2.命令格式
```
find [-H] [-L] [-P] [-D DEBUGOPTS] [-O LEVEL] [PATH...] [EXPRESSION]
```
基本选项`-H`、`-L`、和`-P`控制着对符号链接的处理方式。

如果没有给定搜索路径 PATH，则默认为当前目录。

如果没有给定表达式 EXPRESSION，默认为`-print`，将匹配的文件输出到标准输出。

其实`-H -L -P -D -O`这几个选项并不常用，EXPRESSION 可以拆解为 options/tests/actions，将在第四节详细介绍。

## 3.选项说明
```
-P
	永远不跟随符号链接。这是默认行为。当发现待查询的文件是一个符号链接，使用的信息应采取的符号链接本身的性质
-L
	跟随符号链接，当发现检验或打印信息的文件是一个符号链接，使用的信息应采取的符号链接对应的文件。使用此选项意味着-noleaf，当后面使用-P时，-noleaf仍然有效；
-H
	不跟随符号链接，除了在处理命令行参数。当发现检验或打印文件有关的信息，这些信息必须是符号链接本身的性质，唯一例外是指定的命令行参数是一个文件符号链接，则使用链接的文件。当-H生效时，命令行的参数有一个指向目录的符号链接，该目录内容将被检查，当然选项`-maxdepth 0`将会阻止这个操作；
-D DEBUGOPTIONS
	使 find 打印诊断信息，使用时debug选项使用逗号分隔，可以使用"find -D help"查看完整有效的debug选项，有效的有：
	help：解释debug选项；
	tree：以原始优化的方式显示表达式树；
	stat：打印文件使用stat和lstat命令显示的信息；
	opt：打印与表达式树优化有关的诊断信息；
	rates：打印动作执行成功和失败次数的总体信息；
-O LEVEL
	启动查询优化，对执行动作重新排序来加速整体效果，优化等级有 0、1、2、3 四个级别。
```
注意：如果 -P、-L、-H 同时指定，以最后一个为准。

## 4.命令表达式
find 命令表达式可以分为三类：

- 普通选项（options），在其它表达式前指定，设置搜索路径的深度、查看帮助、版本信息等。
- 比较测试（tests），给定查找条件。
- 动作（actions），对查找到的文件，执行指定操作。

对于多个表达式，find 从左向右处理，所以表达式的前后顺序不同会有不同的搜索性能。

find 首先对整个命令行进行语法解析，并应用给定的 options，然后定位到搜索路径下开始对路径下的文件或子目录进行表达式评估或测试（test）。评估或测试的过程是按照表达式的顺序从左向右进行（此处不考虑操作符的影响），如果最终表达式评估结果为true，则输出该文件全路径名。

对于 find 来说，一个非常重要的概念：find 的搜索机制根据表达式返回的 true/false 决定，每搜索一次都判断一次是否能确定最终评估结果为 true，只有评估的最终结果为 true 才算找到，并切入到下一个搜索点。

### 4.1 表达式操作符
操作符控制表达式运算方式。确切地说，是控制 expression 中的 options/tests/actions 的运算方式。

无论是 options、tests 还是 actions，它们都可以给定多个。
```shell
find /tmp -maxdepth 3 -mindepth 1  -type f -name "*.log" -exec ls '{}' \; -print
```
该 find 中给定了两个 option（`-maxdepth 3 -mindepth 1`），两个 test（`-type f -name "*.log"`），两个 action（`-exec ls '{}' \; -print`），它们之间从前向后按顺序进行评估，所以如果想要改变运算逻辑，需要使用操作符来控制。

注意，理解 and 和 or 的评估方式非常重要，写在 and 或 or 后面的表达式很可能不起作用，而导致跟预期结果不一样。

下面的操作符优先级从高到低。
```
( expr )         ：优先级最高。为防止括号被shell解释(进入子shell)，所以需要转义，即\(...\)。
! expr           ：对expr的true和false结果取反。同样需要使用引号包围。
-not expr        ：等价于"! expr"。
expr1 expr2      ：等同于and操作符。
expr1 -a expr2   ：等同于and操作符。
expr1 -and expr2 ：首先要求expr1为true，然后expr2以expr1搜索的结果为基础继续检测，然后再返回检测值为true的文件。因为expr2是以expr1结果为基础的，所以如果expr1返回false，则expr2直接被忽略而不会进行任何操作。
expr1 -o expr2   ：等同于or操作符。
expr1 -or expr2  ：expr1返回true或false都不影响expr2的检测，它们是独立的。如果expr1返回true，则独立输出该结果，然后开始评测expr2。所以既返回expr1为ture的，也返回expr2为true的文件，但两者同名的文件只返回一次。
expr1 , expr2    ：逗号操作符表示列表的意思，expr1和expr2都会被评估，但expr1的true或false是被无视的，只有expr2的结果才是最终状态值。
```

关于 and 和 or 操作符，一定要知道 and 后表达式操作的对象是前表达式的结果，而 or 操作符则不是。例如：
```shell
find /tmp -type f -name "*.log"
```
它是一个 and 操作符，-name 表达式是在 -type 筛选的结果基础上再匹配文件名的。但如果是：
```shell
find /tmp -type f -o -name "*.log"
```
则 -name 操作的对象是 /tmp，所以返回结果中即有任意普通文件，也有任意 log 文件，但两者同名的文件只返回一次。

总之，要明确的是 or 操作符不以前面结果为基础，且 or 前面表达式为 true 的结果也会输出。
### 4.2 表达式说明
#### options
options 表示 find 的普通选项。
```shell
-d：等同于-depth，为了与 FreeBSD, NetBSD, MacOS X and OpenBSD 兼容。
--daystart:从本日开始计算时间,在使用（-amin、-atime、-cmin、-mmin和-mtime）选项时，时间从当前开始，而非24小时前；
-depth：查找文件时，首先查找当前目录中的文件，然后再在其子目录中查找；
-follow：该选项已经废弃，请使用-L;
-help, --help：显示find基本用法；
-ignore_readdir_race：默认情况下，find无法获取文件状态时，将发出错误信息。使用该选项后，将不会报错；
-maxdepth [levels]：设置最大搜索目录层级；
-mindepth [levels]：设置最小搜索目录层级；
-mount：查找文件时不跨越文件系统mount位置，同-xdev;
-noignore_readdir_race：与-ignore_readdir_race作用相反，为默认选项；
-noleaf：不去考虑目录至少需拥有两个硬连接存在；
-regextype [type]：指明正则表达式语法规则；
-version, --version：打印版本信息；
-warn：打开警告；
-nowarn：关闭警告；
-xautofs：查找文件时不在autofs文件系统查询；
-xdev：作用同-mount；
```
#### tests
tests 表示 find 的比较测试。
```shell
+n：大于指定的n；
-n：小于指定的n；
n：等于指定的n；
-amin [n]：文件最后访问时间为n分钟之前；
-anewer [file]：待查找的目标文件最后访问时间要比指定文件file的最后修改时间要新；
-ctime [n]：文件状态改变时间在n*24小时之前；
-empty：寻找文件大小为0 Byte的文件或目录下没有任何子目录或文件的空目录；
-executable：寻找可执行文件与可搜索的目录；
-false：将find指令的返回值皆设为false；
-fstype [type]：只寻找指定文件系统类型下的文件或目录；
-gid [n]：文件所属用户组ID为n；
-group [gname]:文件所属用户组名为gname；
-ilname [pattern]：与-lname作用相似，但匹配时忽略大小写；
-iname [pattern]：与-name作用相似，但匹配是忽略大小写。比如匹配模式是"fo*"
-inum [n]：查找文件inode节点号为n；
-ipath [pattern]：作用同-iwholename，该命令选项已被废弃，所以请不要使用它；
-iregex [pattern]：与-regex作用相同，但忽略大小写；
-iwholename [pattern]：作用与-iwholename相似，但忽略大小写；
-links [n]：文件有n个硬连接；
-lname [pattern]:查找符号链接，所指文件内容符合指定模式pattern；
-mmin n:查找在指定时间前被更改过的文件或目录，单位以分钟计算；
-mtime n:查找指定时间前被更改过的文件或目录，单位以天（24h）计算；
-name [pattern]:指定名称的文件或目录，
-newer [file]:查找最后修改时间比指定文件file还要新的文件；
-newerXY [reference]:比指定的文件或者时间[reference]要新的文件，X和Y是占位符，可取值如下：
	a：reference的访问时间；
	B：reference的创建时间；
	c：reference的inode状态改变时间；
	m：reference的修改时间；
	t：reference为直接指定的时间。
-nogroup:查无有效属组的文件文件或目录，即文件的属组在/etc/groups中不存在；
-nouser:查无有效属主的文件，即文件的属主在/etc/passwd中不存；
-path [pattern]:查找指定目录格式的文件或目录，如此可以避免对整个目录进行查找，比如 find . -path "./src/*sc"可以避免对目录./inc/的查找；
-perm [mode]:查找指定的权限的文件或目录，需要完全匹配；
-perm -[mode]:查找指定权限的文件或目录，不需要完全匹配，注意与不加横杠mode的区别；
-perm /[mode]:查找指定权限的文件或目录，不需要完全匹配，不需要每个类型的用户都满足，注意与mode、-[mode]的区别；
-readable:查找拥有可读权限的文件或目录；
-regex [pattern]:文件名称匹配正则表达式pattern;
-samefile [name]:查找inode名称为[name]的文件；
-size n[cwbkMG]:查找指定大小的文件；
-true:将find指令的返回值皆设为false；
-type [c]:查找指定类型的文件，类型c可取值：
	b - 块设备文件。
	c - 字符设备文件。
	d - 目录。
	f - 普通文件
	l - 符号链接文件。
	p - 管道文件。
	s - socket。
-uid [n]:查找用户ID为n的文件；
-used [n]:查找文件或目录状态改变过之后，在n天内被访问过的文件或目录；
-user [uname]:查找符和指定所有者名称的文件或目录；
-wholename [pattern]:等同于-path；
-writable:具有可写权限的文件。它会考虑访问控制列表（access control lists）等的特殊权限，只要是可写就满足。它会忽略掉-perm的测试(不是writeable)；
-xtype [c]:等同于-type选项，除非文件是符号链接；当制定选项-P或-H时，连接文件所指文件类型是[c]则满足条件，如果指定选项-L，[c]为l才有效，表名查找符号链接；
-context [pattern]:
```
#### actions
actions 部分一般是执行某些命令或实现某些功能。这部分是 find 的 command line 部分。
```shell
-delete:删除文件，如果删除成功则返回true，如果删除失败，将给出错误信息。"-delete"动作隐含了"-depth"这个option。
-exec [command] ;:注意有个分号";"结尾，该action是用于执行给定的命令。如果命令的返回状态码为0则该action返回true，command后面的所有内容都被当作command的参数，直到分号";"为止，其中参数部分使用字符串"{}"时，它表示find找到的文件名，即在执行命令时，"{}"会被逐一替换为find到的文件名，"{}"可以出现在参数中的任何位置，只要出现，它都会被文件名替换。注意，分号";"需要转义，即"\;"，如有需要，可以将"{}"用引号包围起来。
-exec command {} +:这种-exec动作变种，只允许使用find查找到的文件一次；
-execdir command ;:与-exec相似，区别在于执行command时的working path是从匹配到的文件的所在目录；
-execdir command {} +:与-exec command {} +相似，区别也是在于命令的工作路径；
-fls [file]:总是返回true，将打印的结果输出到指定的文件file中；
-fprint [file]:总是返回true，将找到的文件的全路径输出到指定的文件file中；
-fprint0 [file]:类似于-print0，将结果写入文件file；
-fprintf [file] [format]:类似于-printf,将结果写入指定的文件file；
-ls:总是返回true。将找到的文件以"ls -dils"的格式打印出来，其中文件的size部分以KB为单位；
-ok [command] ;:类似于-exec，但在执行命令前会交互式进行询问；
-okdir [command] ;:类似于-execdir，但在执行命令前会交互式进行询问；
-print:总是返回true。这是默认的action，输出搜索到文件的全路径名，并尾随换行符"\n"。由于在使用"-print"时所有的结果都有换行符，如果直接将结果通过管道传递给管道右边的程序，应该要考虑到这一点：文件名中有空白字符(换行符、制表符、空格)将会被右边程序误分解，如文件"ab c.txt"将被认为是ab和c.txt两个文件，如不想被此分解影响，可考虑使用"-print0"替代"-print"将所有换行符替换为"\0"；
-print0:总是返回true。输出搜索到文件的全路径名，并尾随空字符"\0"。由于尾随的是空字符，所以管道传递给右边的程序，然后只需对这个空字符进行识别分隔就能保证文件名不会因为其中的空白字符被误分解；
-printf [format]:以指定的格式输出匹配的文件名；
-prune:使用这一选项可以使find命令不在当前指定的目录中查找，如果同时使用-depth选项，那么-prune将被find命令忽略。比如：find /apps -path "/apps/bin" -prune -o –print在/apps目录下查找文件，但不希望在/apps/bin目录下查找；

-quit:立即退出，没有子进程会继续运作，但没有更多的路径，在命令行中指定将被处理。
```
## 5.常用示例
（1）在/logs目录中查找更改时间在5日以前的文件并删除它们。
```shell
find /logs -type f -mtime +5 -exec rm {} ;
```

（2）列出当前目录及子目录下所有文件和文件夹。
```shell
find .
```

（3）在/home目录下查找以.txt结尾的文件名。
```shell
find /home -name "*.txt" 

# 同上，但忽略大小写 
find /home -iname "*.txt"
```

（4）当前目录及子目录下查找所有以.txt和.pdf结尾的文件。
```shell
find . \( -name "*.txt" -o -name "*.pdf" \) 
#或
find . -name "*.txt" -o -name "*.pdf"
```

（5）匹配文件路径或者文件。
```shell
find /usr/ -path "*local*"
```

（6）基于正则表达式匹配文件路径。
```shell
find . -regex ".*\(\.txt\|\.pdf\)$" 

#同上，但忽略大小写
find . -iregex ".*\(\.txt\|\.pdf\)$" 
```

（7）使用否定参数!，找出/home下不是以.txt结尾的文件。
```shell
find /home ! -name "*.txt"
```

（8）根据文件类型进行搜索。
```shell
find . -type [类型参数] 
类型参数列表： 
	c - 字符设备文件。
	d - 目录。
	f - 普通文件
	l - 符号链接文件。
	p - 管道文件。
	s - socket。
```

（9）向下搜索的最大深度限制为3。
```shell
find . -maxdepth 3 -type f 
```

（10）搜索出深度距离当前目录至少2个子目录的所有文件。
```shell
find . -mindepth 2 -type f
```

（11）根据文件时间戳进行搜索,搜索恰好在七天前被访问过的所有文件。
```shell
find . -type f -atime 7
```

（12）搜索超过七天内被访问过的所有文件。
```shell
find . -type f -atime +7
```

（13）搜索访问时间超过10分钟的所有文件。
```shell
find . -type f -amin +10
```

（14）找出比file.log修改时间更长的所有文件。find
```shell
find . -type f -newer file.log
```

（15）根据文件大小进行匹配。
```shell
find . -type f -size 文件大小

单元文件大小单元： 
	b —— 块（512字节）
	c —— 字节
	w —— 字（2字节）
	k —— 千字节 
	M —— 兆字节
	G —— 吉字节
	
# 搜索大于10KB的文件
find . -type f -size +10k 
	
# 搜索小于10KB的文件
find . -type f -size -10k

# 搜索等于10KB的文件
find . -type f -size 10k
```

（16）删除匹配文件,#删除当前目录下所有.txt文件。
```shell
find . -type f -name "*.txt" -delete
```

（17）根据文件权限/所有权进行匹配。
```shell
# 当前目录下搜索出权限为777的文件
find . -type f -perm 777

# 找出当前目录下权限不是644的php文件 
find . -type f -name "*.php" ! -perm 644

# 找出当前目录用户tom拥有的所有文件
find . -type f -user tom

# 找出当前目录用户组sunk拥有的所有文件
find . -type f -group sunk
```
（18）借助-exec选项与其他命令结合使用。
```shell
# 找出当前目录下所有root的文件，并把所有权更改为用户tom
find .-type f -user root -exec chown tom {} \; 
上例中，{} 用于与-exec选项结合使用来匹配所有文件，然后会被替换为相应的文件名。 

# 找出自己家目录下所有的.txt文件并删除
find $HOME/. -name "*.txt" -ok rm {} \; 
上例中，-ok和-exec行为一样，不过它会给出提示，是否执行相应的操作。

# 查找当前目录下所有.txt文件并把他们拼接起来写入到all.txt文件中
find . -type f -name "*.txt" -exec cat {} \;> all.txt

# 将30天前的.log文件移动到old目录中
find . -type f -mtime +30 -name "*.log" -exec cp {} old \;

# 找出当前目录下所有.txt文件并以“File:文件名”的形式打印出来
find . -type f -name "*.txt" -exec printf "File: %s\n" {} \; 

# 因为单行命令中-exec参数中无法使用多个命令，以下方法可以实现在-exec之后接受多条命令
-exec ./text.sh {} \; 
```

（19）搜索但跳出指定的目录,查找当前目录或者子目录下所有.txt文件，但是跳过子目录sk。
```shell
find . -path "./sk" -prune -o -name "*.txt" -print
```

（20）要列出所有大小为零的文件。
```shell
find . -empty
```

（21）find 命令 -perm 的权限的加减号的区别。
首先创建了 4 个具有 suid 和 sgid 属性的文件，因为是大写的 S，所以实际上无效，但不影响我们来说明 -perm 选项指定权限时加减号的区别。
```shell
ls -l ./testdir
------S--- 1 root root 0 2016-11-06 10:39 2000
---S------ 1 root root 0 2016-11-06 10:39 4000
---S--S--- 1 root root 0 2016-11-06 10:39 6000
-rwS--S--- 1 root root 0 2016-11-06 10:39 6600
```
假定我执行
```shell
find . -type f -perm 6000
```
那么我们显然可以得到下面的结果
```
./60000
```
这属于完全匹配。如果执行`find . -type f -perm -6000`呢，其结果是：
```
./6000
./6600
```
这里的横杠-表示权限位有1的位置一定要正确匹配，其他权限位无所谓。这里要转成二进制来说，首先6000转成三位的二进制是下面这个样子：
```
110 000 000 000
```
这表示前面两个 1 一定要匹配，其他无所谓。那能匹配的就是 6000、6600 这两个文件，其权限二进制转换过来分别是：
```
110 000 000 000
110 110 000 000
```
而如果是执行`find . -type f -perm +6000`呢？我们看看结果：
```
./6000
./2000
./4000
./6600
```
+号的意思是，每一组的权限，只要有一个组拥有给定的权限，就满足条件，也就是说前2位中，只要有一个1就行，所以上面的都符合要求，因为翻译成二进制变成：
```
110 000 000 000
010 000 000 000
100 000 000 000
110 110 000 000
```
所以，从上面的结果可以看出，命令`find . -type f -perm +6000`就是指定目录下所有具有suid或者sgid属性的文件。

注意：find的 +mode已经废弃，建议使用/mode来代替+mode。

（22）删除文件大小为零的文件。
```shell
find ./ -size 0 -exec rm {} \;

# 或
find ./ -size 0 -ok rm {} \;

# 或
rm -i find ./ -size 0

# 或
find ./ -size 0 | xargs rm -f
```
-ok 和 -exec 的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，都会给出提示，让用户来确定是否执行。例如`find . -name "*.conf" -mtime +5 -ok rm {} \;`，在当前目录中查找所有文件名以.LOG结尾、最近更改时间在5日以上的文件，并删除它们，只不过在删除之前先给出提示。

----
## 参考文献
[find(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/find.1.html)

[Linux find运行机制详解](https://www.cnblogs.com/f-ck-need-u/p/6995529.html)

[【日常小记】linux中强大且常用命令：find、grep](https://www.cnblogs.com/skynet/archive/2010/12/25/1916873.html)

[Linux find 用法示例](https://www.cnblogs.com/wanqieddy/archive/2011/06/09/2076785.html)

鸟哥.鸟哥的私房菜基础学习篇第三版[M].北京：人民邮电出版社，2010：183-184

<Vssue title="find" />