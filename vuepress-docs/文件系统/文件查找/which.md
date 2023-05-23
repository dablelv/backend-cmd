## 1.命令简介
which 用于查看给定命令的绝对路径。

which 可指定一个或多个参数。对于它的每个参数，它将可执行文件的完整路径打印到 stdout。它通过使用与 bash(1) 相同的算法在环境变量 PATH 中列出的目录中搜索可执行文件或脚本来实现这一点。

## 2.命令格式
```shell
which [options] [--] <COMMAND>...
```
which 可以有多个 COMMAND ，对于每个参数，它都将输出可执行程序的完整路径

## 3.选项说明
```shell
--all, -a
	打印出所有在 PATH 中匹配的可执行程序，而不仅仅是第一个匹配的可执行程序
--read-alias, -i
	从 stdin 中读取别名列表
--skip-alias
	忽略选项 --read-alias
--read-functions
	从 stdin 读取 Shell 函数的定义，并打印匹配的函数
--skip-functions
	忽略选项 --read-functions
--skip-dot
	跳过环境变量 PATH 中以点开头的目录
--skip-tilde
	跳过环境变量 PATH 中以波浪号开头的目录和主目录中的可执行文件
--show-dot
	如果环境变量 PATH 中一个目录以一个点开始，并且在该目录下找到了一个匹配的可执行文件，那么打印 ./COMMAND 而不是完整的路径
--show-tilde
	为 HOME 目录输出波浪符。如果是 root 用户则忽略该选项
--tty-only
	如果不在 tty 上，停止处理右边的选项
--version, -v, -V
	显示版本信息并退出
--help
	显示帮助信息
```

## 4.常用示例
（1）查找命令所在路径。
```
$ which passwd

/usr/bin/passwd
```

（2）一般情况下，which 是一个别称，可以查看 which 的详细定义。
```
$ which which

alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
	/usr/bin/alias
	/usr/bin/which
```
也可以跳过别名，直接查看命令 which 的所在路径。
```
$ which --skip-alias which

/usr/bin/which
```

（3）打印帮助信息。
```
$ which --help
Usage: /usr/bin/which [options] [--] COMMAND [...]
Write the full path of COMMAND(s) to standard output.

  --version, -[vV] Print version and exit successfully.
  --help,          Print this help and exit successfully.
  --skip-dot       Skip directories in PATH that start with a dot.
  --skip-tilde     Skip directories in PATH that start with a tilde.
  --show-dot       Don't expand a dot to current directory in output.
  --show-tilde     Output a tilde for HOME directory for non-root.
  --tty-only       Stop processing options on the right if not on tty.
  --all, -a        Print all matches in PATH, not just the first
  --read-alias, -i Read list of aliases from stdin.
  --skip-alias     Ignore option --read-alias; don't read stdin.
  --read-functions Read shell functions from stdin.
  --skip-functions Ignore option --read-functions; don't read stdin.

Recommended use is to write the output of (alias; declare -f) to standard
input, so that which can show aliases and shell functions. See which(1) for
examples.

If the options --read-alias and/or --read-functions are specified then the
output can be a full alias or function definition, optionally followed by
the full path of each command used inside of those.

Report bugs to <which-bugs@gnu.org>.
```

---
## 参考文献
[which(1) manual - linux.org](https://www.linux.org/docs/man1/which.html)

<Vssue title="which" />