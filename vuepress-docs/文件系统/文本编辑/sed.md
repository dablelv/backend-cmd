## 1.功能简介
sed（Stream EDitor）是一种流文件编辑器，它一次处理一行内容。处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（Pattern Space），接着用 sed 命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕，接着处理下一行，直到文件末尾。文件内容并没有改变，除非使用`-i`选项。sed 主要用来编辑一个或多个文件，简化对文件的反复操作或者用来编写转换程序等。

sed 功能同 awk 类似，差别在于，sed 简单，对列处理的功能要差一些，awk 功能复杂，对列处理的功能比较强大。

## 2.命令格式
```shell
sed [OPTION]... {script-only-if-no-other-script} [input-file]...
```
其中 OPTION 为命令选项，script-only-if-no-other-script 为处理动作，可以由`-e`指定多个，input-file为输入文件，可指定多个。

## 3.选项说明
```shell
选项：
-n,--quiet,--silent
	使用安静模式。sed的一般用法中，所有来自STDIN的数据一般都会被打印到终端上，如果加上-n后，则只有经过sed特殊处理的那一行才会被列出来。
-e <script>,--expression=<script>
	指定sed动作，可以由多个-e指定多个动作。
-f <script-file>,--file=<script-file>
	直接将sed的动作写在一个文件内，-f filename则可以运行filename 内的sed动作；
-r,--regexp-extended
	sed支持扩展正则表达式(默认是基础正则表达式)。
-i 
	直接修改读取的文件内容，而不是输出到终端。
--help
	显示帮助
--version
	显示版本

动作说明：[n1[,n2]]function
n1, n2 ：不见得会存在，一般代表“选择进行动作的行数”，举例来说，如果我的动作是需要在 10 到 20 行之间进行，则写作“10,20动作行为”。

function：
a 
	新增， a 的后面可以接字串，而这些字串会在新的一行出现(目前的下一行)～
c 
	取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行！
d 
	删除，因为是删除啊，所以 d 后面通常不接任何内容；
i 
	插入， i 的后面可以接字串，而这些字串会在新的一行出现(目前的上一行)；
p 
	列印，亦即将某个选择的数据印出。通常 p 会与参数 sed -n 一起运行～
s/{regexp}/{replacement}/ 
	替换，支持正规匹配
```

## 4.常用示例
### 4.1 删除行操作
（1）将 /etc/passwd 的内容列出并且列印行号，同时，请将第 2~5 行删除。
```
[b3335@MIC ~]$ nl -n ln /etc/passwd | sed '2,5d'
1 root:x:0:0:root:/root:/bin/bash
6 sync:x:5:0:sync:/sbin:/bin/sync
7 shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
.....(后面省略).....
```
注意：原本应该是要下达 sed -e 才对，当只有一个动作的时候，没有 -e 也行，但是多于一个动作时必须要使用-e选项来指定动作。同时也要注意的是， sed 后面接的动作，请务必以两个单引号括住。

（2）只要删除第 2 行。
```
nl /etc/passwd | sed '2d' 
```

（3）要删除第 3 到最后一行
```
nl /etc/passwd | sed '3,$d' 
```

### 4.2 新增行操作
（1）在第二行后加上"I like drinking tea"。
```
[b3335@MIC ~]$ nl -n ln /etc/passwd | sed '2a I like drinking tea'
1	root:x:0:0:root:/root:/bin/bash
2	bin:x:1:1:bin:/bin:/sbin/nologin
I like drinking tea
3	daemon:x:2:2:daemon:/sbin:/sbin/nologin
.....(后面省略).....
```
（2）那如果是要在第二行前加入。
```
nl /etc/passwd | sed '2i drink tea'
//或
nl /etc/passwd | sed '1a drink tea'
```
（3）在第二行后面加入两行，"I like drinking tea"与"I like drinking beer"。
```
[b3335@MIC ~]$ nl -n ln /etc/passwd | sed '2a I like drinking tea\nI like drinking beer'
1     	root:x:0:0:root:/root:/bin/bash
2     	bin:x:1:1:bin:/bin:/sbin/nologin
I like drinking tea
I like drinking beer
3     	daemon:x:2:2:daemon:/sbin:/sbin/nologin
…（后面省略）…
```
或者每一行使用反斜杠\来分开，就可以在命令行中将一条命令分开多行输入，如下：
```
[b3335@MIC ~]$ nl -n ln /etc/passwd | sed '2a I like drinking tea\
> I like drinking beer'
```

### 4.3 替换行操作
（1）将第2-5行的内容替换成为"No 2-5 number"。
```
[b3335@MIC ~]$ nl -nln /etc/passwd | sed '2,5c No 2-5 number'
1     	root:x:0:0:root:/root:/bin/bash
No 2-5 number
6     	sync:x:5:0:sync:/sbin:/bin/sync
.....(后面省略).....
```
### 4.4 选择行打印
（1）仅列出 /etc/passwd 文件内的第 5-7 行。
```
[root@www ~]# nl -nln /etc/passwd | sed -n '5,7p'
5 lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
6 sync:x:5:0:sync:/sbin:/bin/sync
7 shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
```

### 4.5 数据的查找并进行相关操作
（1）数据的查找并显示
搜索 /etc/passwd有root关键字的行并输出。
```
[b3335@MIC ~]$ nl /etc/passwd | sed -n '/root/p'
1	root:x:0:0:root:/root:/bin/bash
11	operator:x:11:0:operator:/root:/sbin/nologin
```
（2）数据的查找并删除
删除/etc/passwd所有包含root的行，其他行输出。
```
[b3335@MIC ~]$ nl /etc/passwd | sed  '/root/d'
2  daemon:x:1:1:daemon:/usr/sbin:/bin/sh
3  bin:x:2:2:bin:/bin:/bin/sh
…（下面忽略）…
```
如果想删除匹配的字符串，使用如下命令：
```
[b3335@MIC ~]$ nl /etc/passwd | sed  's/root//g'
```

（3）数据的查找并替换
除了整行的处理模式之外， sed 还可以用行为单位进行部分数据的搜寻并取代。基本上 sed 的搜寻与替代的与 vi 相当的类似！他有点像这样：
```
sed 's/被取代的字串/新的字串/g'
```
（4）数据的搜寻并执行命令
搜索/etc/passwd,找到root对应的行，执行后面花括号中的一组命令，每个命令之间用分号分隔，这里把bash替换为blueshell，再输出这行：
```
nl /etc/passwd | sed -n '/root/{s/bash/blueshell/;p}'
1  root:x:0:0:root:/root:/bin/blueshell
```
如果只替换/etc/passwd的第一个bash关键字为blueshell，就退出
```
nl /etc/passwd | sed -n '/bash/{s/bash/blueshell/;p;q}'    
1  root:x:0:0:root:/root:/bin/blueshell
```
### 4.6 多点编辑
一条sed命令，删除/etc/passwd第三行到末尾的数据，并把bash替换为blueshell
```
nl /etc/passwd | sed -e '3,$d' -e 's/bash/blueshell/'
1  root:x:0:0:root:/root:/bin/blueshell
2  daemon:x:1:1:daemon:/usr/sbin:/bin/sh
```
-e表示多点编辑，第一个编辑命令删除/etc/passwd第三行到末尾的数据，第二条命令搜索bash替换为blueshell。

### 4.7 直接修改文件
sed 可以直接修改文件的内容，不必使用管道命令或数据流重导向！ 不过，由於这个动作会直接修改到原始的文件，所以请你千万不要随便拿系统配置来测试，使用时也要慎重。我们使用下载的regular_express.txt 文件来测试看看吧！

利用 sed 将 regular_express.txt 内每一行结尾若为 . 则换成 !
```
sed -i 's/\.$/!/g' regular_express.txt
```

利用 sed 直接在 regular_express.txt 最后一行加入"# This is a test"。
```
sed -i '$a # This is a test' regular_express.txt
```
由於 $ 代表的是最后一行，而 a 的动作是新增，因此该文件最后新增"# This is a test"。

sed 的`-i`选项可以直接修改文件内容，这功能非常有帮助！举例来说，如果你有一个 100 万行的文件，你要在第 100 行加某些文字，此时使用 vim 可能会疯掉！因为文件太大了！那怎办？就利用 sed 啊！透过 sed 直接修改/取代的功能，你甚至不需要使用 vim 去修订！

---
## 参考文献
[Linux sed命令详解](http://www.cnblogs.com/ggjucheng/archive/2013/01/13/2856901.html)

鸟哥.鸟哥的私房菜基础学习篇第三版[M].北京：人民邮电出版社，2010：357-360

<Vssue title="sed" />