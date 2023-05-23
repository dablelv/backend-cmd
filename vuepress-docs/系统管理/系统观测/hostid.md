## 1.命令简介
hostid 打印当前主机的十六进制数字标识符。

## 2.命令格式
```shell
hostid [OPTION]
```

## 3.选项说明
```shell
--help 显示帮助信息后退出。
--version 输出版本信息后退出。
```

## 4.常用示例
（1）打印当前主机的数字化标识。

```shell
hostid
007f0100
```

（2）显示帮助信息。

```shell
hostid --help
Usage: hostid [OPTION]
Print the numeric identifier (in hexadecimal) for the current host.

      --help     display this help and exit
      --version  output version information and exit

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>
For complete documentation, run: info coreutils 'hostid invocation'
```

---
## 参考文献
[hostid(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/hostid.1.html)

<Vssue title="hostid" />