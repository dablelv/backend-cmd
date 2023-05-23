## 1.命令简介
whatis 显示手册 NAME 一节的简短描述。

每个手册页面都有一个简短的描述。whatis 搜索手册页，显示匹配的手册页中 NAME 一节内容。

名字可以包含通配符（-w）或正则表达式（-r）。使用这些选项，可能需要使用单引号引住名称或转义特殊字符以阻止 Shell 解释它们。 

索引数据库在搜索期间使用，并由 [mandb(8)](https://man7.org/linux/man-pages/man8/mandb.8.html) 程序更新。根据您的安装，这可能由定期 cron 作业运行，或可能需要在安装新的手动页面后手动运行。

如果想从现有索引数据库生成旧样式的文本 whatis 数据库，可以使用如下命令：
```shell
whatis -M <manpath> -w '*' | sort > <manpath>/whatis
```
其中 manpath 是手册路径，如 /usr/man。

**注意**，whatis 有个软链名为 apropos，所以也可以使用 apropos 命令。

## 2.命令格式
```shell
whatis [-dlv?V] [-r|-w] [-s list] [-m system[,...]] [-M path]
       [-L locale] [-C file] name ...
```
whatis 不加任何选项等同于使用`man -f`命令。

## 3.选项说明
```shell
-d, --debug
	输出调试信息。
-v, --verbose
	输出详细的警告信息。
-r, --regex
	把每个名字词都当作正则表达式解读。
-w, --wildcard
	将每个名字解释为包含 Shell 样式通配符的模式。
-l, --long
	不要将输出截断为终端宽度。默认会截断，以避免写得不好的 NAME 一节产生难看的结果。
-s, --sections, --section <list>
	仅搜索给定类型的手册。list 是以冒号或逗号分隔类型列表。如果列表中的条目是一个简单的部分，例如 "3"，则搜索类型为 "3"、"3perl" 和 "3x" 的手册。而如果列表中的条目有一个扩展名，如 "3perl"，那么只搜索类型为 "3perl" 的手册。
-m, --systems=<system>[,...]
	如果此系统可以访问其他操作系统的手册页名字，则可以使用此选项访问它们。如要搜索系统 NewOS 的手册页名字，请使用选项-m NewOS。

	多个操作系统名称使用逗号分隔。要包括对本机操作系统的手动页名字的搜索，请在参数字符串中指定 man。此选项将覆盖 $SYSTEM 环境变量。
-M, --manpath=<path>
	手动指明手册页搜索路径。默认使用 $MANPATH 环境变量，如果它为空或未设置，将根据 $PATH 环境变量确定适当的 MANPATH。此选项覆盖 $MANPATH 的内容。
-L, --locale=<locale>
	whatis 通常会通过调用 C 函数 setlocale(3) 来确定当前的语言环境，该函数询问各种环境变量，可能包括 $LC_MESSAGES 和 $LANG。要临时覆盖确定的值，请使用此选项提供区域设置字符串。
-C, --config-file=<file>
	使用此用户配置文件，而不是默认的 ~/.manpath。
-?, --help
	显示帮助信息并退出。
--usage
	打印简短的使用信息并退出。
-V, --version
	显示版本信息并退出。
```

## 4.常用示例
（1）查看指定命令手册中 NAME 一节的内容。
```shell
whatis whatis
whatis (1)           - display manual page descriptions
```
（2）使用通配符指定要搜索的名字。
```shell
whatis -w what*s
whatis (1)           - display manual page descriptions
```
（3）使用正则表达式指定要搜索的名字。
```shell
whatis -r what.s
whatis (1)           - display manual page descriptions
```
（4）使用 -s 选项从手册页的特定部分获取信息。

帮助手册分为多种类型，即不同的 Section，主要有：
```
man1/ Section 1: General commands
man2/ Section 2: System calls
man3/ Section 3: Library functions
man4/ Section 4: Special files
man5/ Section 5: File formats and conventions
man6/ Section 6: Games and screensavers
man7/ Section 7: Miscellaneous
man8/ Section 8: System administration commands and daemons
```
比如查询 crontab 既可以是通用命令，也可以是文件格式。
```shell
whatis crontab
crontab (5)          - files used to schedule the execution of programs
crontab (1)          - maintains crontab files for individual users
```
我们可以通过 -s 选项指定要查找的类型为 "1" 通用命令。
```shell
whatis -s "1" crontab
crontab (1)          - maintains crontab files for individual users
```

（5）使用 -M 选项手动指明手册页搜索目录。

默认情况下，whatis 命令使用 $MANPATH 环境变量。但是 whatis 提供了 -M 或 –manpath 选项来限制搜索手册页的指定路径。
```shell
whatis -M /usr/share/man whatis
whatis (1)           - display manual page descriptions
```

---

## 参考文献
[whatis(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/whatis.1.html)

[apropos(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/apropos.1.html)

<Vssue title="whatis" />