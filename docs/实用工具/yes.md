## 1.命令简介
yes 重复输出一个字符串，直到被杀死。

yes 不带任何参数运行时默认输出的字符串是 y。

## 2.命令格式
```shell
yes [STRING]...
yes OPTION
```

## 3.选项说明
```shell
--help
	显示此帮助并退出。
--version
	输出版本信息并退出。
```

## 4.常用示例

（1）持续回复 y。

命令行或 Shell 脚本中，有时需要回复多次 yes 或 no，例如你要复制一個目录时，他会询问你是否覆盖目标文件，这个时候除了用 cp -f 以外，还可以用 yes 这个命令。

```shell
yes | cp a.txt b.txt dir
```
如果回复的次数不多且确定时，我们也可以 echo 来模拟 yes。
```shell
echo -e "y\ny" | cp a.txt b.txt dir
```


（2）持续输出指定字符串，直至被杀死。
```shell
yes no
no
no
no
no
no
...
^C
```
命令行下使用 Ctrl + C 发送 SIGINT 信号中断程序。

（3）查看帮助信息。

```shell
Usage: yes [STRING]...
  or:  yes OPTION
Repeatedly output a line with all specified STRING(s), or 'y'.

      --help     display this help and exit
      --version  output version information and exit

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
For complete documentation, run: info coreutils 'yes invocation'
```

---
## 参考文献
[yes(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/yes.1.html)
