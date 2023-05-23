## 1.命令简介
pstack（print stack）命令用于打印运行进程的栈跟踪。

如果二进制文件中存在 ELF 符号（通常情况下，除非运行 strip(1)），那么也会打印符号地址。如果进程是线程组的一部分，那么 pstack 将为组中的每个线程打印栈跟踪。

pstack 实际上是 gstack 的一个软链接，而 gstack 本身是基于 gdb 封装的 Shell 脚本。

pstack 命令必须由相应进程的属主或 root 运行，可以使用 pstack 来确定进程挂起的位置。此命令允许使用的唯一选项是要检查的进程的 PID。

pstack 命令在排查进程问题时非常有用，比如我们发现一个服务一直处于 work 状态（如假死状态，好似死循环），使用这个命令就能轻松定位问题所在。可以在一段时间内，多执行几次 pstack，若发现代码栈总是停在同一个位置，那个位置就需要重点关注，很可能就是出问题的地方。

## 2.命令格式
```shell
pstack <pid>
```

## 3.选项说明
无。

## 4.常用示例
（1）查看指定进程栈跟踪，如 1 号进程。
```shell
# pstack 1
#0  0x00007f0ce63fa0e3 in epoll_wait () from /lib64/libc.so.6
#1  0x0000564f3e9bbad9 in sd_event_wait ()
#2  0x0000564f3e9bc5ed in sd_event_run ()
#3  0x0000564f3e91b6b7 in manager_loop ()
#4  0x0000564f3e90f80b in main ()
```

---
## 参考文献
[pstack(1) - Linux man page - linux.org](https://www.linux.org/docs/man1/pstack.html)

<Vssue title="pstack" />