## 1.功能简介
readonly 命令用于定义只读 Shell 变量和函数。

单独执行 readonly 或使用选项 -p 可以输出显示系统中所有已定义的只读变量和函数。

## 2.命令格式
```shell
readonly [-aAf] [-p] [name[=word] ...]
```

## 3.选项说明
```shell
-f
	定义 Shell 函数。
-a
	定义索引数组变量。
-A
	定义关联数组变量。
-p
	显示系统中全部只读变量和函数列表。
```

## 4.常用示例
（1）显示所有只读变量和函数。
```shell
readonly [-p]
declare -ir BASHPID
declare -r BASH_COMPLETION_COMPAT_DIR="/etc/bash_completion.d"
declare -ar BASH_REMATCH='()'
...
```

（2）定义只读变量并初始化。
```shell
readonly FOO="foo"

FOO="bar"
-bash: FOO: readonly variable
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/bash.1.html)
