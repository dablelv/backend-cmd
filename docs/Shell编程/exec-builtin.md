## 1.命令简介
exec 执行指定命令，并替换当前 Shell 进程。

exec 命令通常用在 Shell 脚本程序中，可以调用其他的命令。如果在当前终端中使用命令，则当指定的命令执行完毕后会立即退出终端。

## 2.命令格式
```
exec [-cl] [-a name] [command [arguments]]
```

## 3.选项说明
```shell
-a <name>
	作为第 0 个参数传递给 COMMAND 命令。
-c 
	在一个空环境中执行 COMMAND 命令。
-l
	在 COMMAND 命令的第 0 个参数中加一个短线。
```

## 4.常用示例

（1）执行 Shell 命令。

命令执行完后，然后退出当前终端。

```shell
exec ls
```

（2）在一个空环境中执行命令。

命令执行完后，然后退出当前终端。
```shell
exec -c ls
```

（3）find 和 exec 综合使用。
```shell
find ./ -name "test.txt" -exec ls -l {} \;
-rw-rw-r--+ 1 root root 6 Nov 24 17:59 ./test/test.txt
```

---

## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)