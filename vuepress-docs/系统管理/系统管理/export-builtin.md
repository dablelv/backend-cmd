## 1.命令简介
export 为内建命令，用于设置或显示环境变量，环境变量包含变量与函数。

在 Shell 中执行程序时，Shell 会提供一组环境变量。export 可新增、删除或修改环境变量，供后续被执行的程序使用。export 的作用效果仅限于当前登录。

## 2.命令格式
```
export [-fn] [NAME[=WORD]]...
export -p
```

## 3.选项说明
```
-f
	表示 NAME 为函数名称
-n
	删除指定的变量。变量实际上并未删除，只是不会输出到后续指令的执行环境中
-p
	打印 Shell 中所有导出的名称列表
```

## 4.常用示例
（1）定义环境变量并赋值。
```shell
export MYNEWV=8
```
（2）修改指明 Shell 命令搜索路径的环境变量 PATH。
```shell
export PATH=$PATH:/usr/local/mysql/bin
```
查看是否已经设置好，可以使用`export -p`来查看，也可以使用 echo 或 printenv 命令打印变量内容。
```shell
export -p | grep PATH

echo $PATH

printenv PATH
```
（3）export 用于 Shell 脚本。

用户登录到 Linux 系统后，系统将启动一个用户  Shell。在这个 Shell 中，可以使用 Shell 命令或声明变量，也可以创建并运行 Shell 脚本程序。系统将创建一个子 Shell 进程。此时，系统中将有两个 Shell 进程，一个是登录时系统启动的 Shell 进程，另一个是系统为运行脚本创建的 Shell 进程。当一个脚本运行完毕，它的脚本 Shell 进程将终止，可以返回到执行该脚本之前的 Shell。从这种意义上来 说，用户可以有许多 Shell 进程，每个 Shell 进程都是由其父 Shell 进程派生的。 

如果在一个 Shell 脚本中定义了一个变量，该脚本运行时，这个定义的变量只是该脚本内的一个局部变量，子 Shell 无法引用它。要使某个变量可以在子 Shell 中被引用，可以使用 export 命令对已定义的变量进行导出，称为导出变量。系统在创建每一个新的 Shell 时会拷贝导出变量，子 Shell 可以访问或修改导出变量，但是这种修改父 Shell 看不到。

例如脚本 test1.sh 中调用脚本 test2.sh，test2.sh 中使用 test1.sh 定义的变量 shareVar。

test1.sh 定义如下：
```shell
#!/bin/sh

shareVar=666
export shareVar
./test2.sh
```
test2.sh 定义如下：
```shell
#!/bin/sh

echo "in $0"
echo $shareVar
```
执行 test1.sh 输出结果如下：
```shell
./test1.sh
in ./test2.sh
666
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)

<Vssue title="export" />