## 1.命令简介
pstree（process tree）显示进程树。

pstree 将所有行程以树状图显示，树状图将会以 pid (如果有指定) 或是以 init 这个基本进程为根 (root)。如果有指定使用者 id，则树状图只会显示该使用者所拥有的进程。

使用 ps 命令得到的数据精确，但数据庞大，这一点对掌握系统整体概况来说是不容易的。pstree 命令正好可以弥补这个缺憾。它能将当前的执行程序以树状结构显示。pstree命令支持指定特定程序（PID）或使用者（USER）作为显示的起始。

## 2.命令格式
```shell
pstree [OPTIONS] [PID | USER]
pstree -V | --version
```

## 3.选项说明
```
-a, --arguments
	显示每个程序的完整指令，包含路径、参数或是常驻服务的标示。
-c, --compact-not
	不使用精简标示法。
-G
	使用 VT100 终端机的线条绘制字符。
-h, --highlight-all
	列出树状图时，特别标明执行的程序。
-H, --highlight-pid <pid>
	此参数的效果和指定"-h"参数类似，但特别标明指定的程序。
-l, --long
	采用长列格式显示树状图。
-n, --numeric-sort
	用程序识别码排序。预设是以程序名称来排序。
-p, --show-pids
	显示进程 ID。PID 在每个进程名称后面的括号中显示为十进制数字。-p 将隐式禁用压缩。
-u, --uid-changes
	显示 uid 转换。每当进程的 uid 与其父进程的 uid 不同时，新 uid 就会显示在进程名称后面的圆括号中。
-U, --unicode
	使用 UTF-8 线条绘制字符。
-V, --version
	显示版本信息。
```

# 4.常用示例
（1）以树状图显示进程。

```shell
pstree
systemd─┬─BT-Panel───{BT-Panel}
        ├─BT-Task─┬─python
        │         └─11*[{BT-Task}]
        ├─YDLive─┬─YDService─┬─sh───8*[{sh}]
        │        │           └─22*[{YDService}]
        │        └─9*[{YDLive}]
        ├─abrt-dbus───3*[{abrt-dbus}]
        ├─acpid
        ├─2*[agetty]
        ├─atd
        ├─auditd───{auditd}
        ├─barad_agent─┬─barad_agent
        │             └─barad_agent───2*[{barad_agent}]
        ├─crond
        ├─dbus-daemon
        ├─dhclient
        ├─iscsid
        ├─lsmd
        ├─lvmetad
        ├─ntpd
        ├─polkitd───6*[{polkitd}]
        ├─rsyslogd───2*[{rsyslogd}]
        ├─sgagent───{sgagent}
        ├─ss-server
        ├─sshd─┬─4*[sshd───sshd]
        │      └─sshd─┬─bash───pstree
        │             └─bash───man───less
        ├─systemd-journal
        ├─systemd-logind
        ├─systemd-udevd
        ├─tat_agent───7*[{tat_agent}]
        └─tuned───4*[{tuned}]
```

（2）显示所有进程的所有详细信息。
```shell
pstree -a
systemd --switched-root --system --deserialize 22
  ├─BT-Panel /www/server/panel/BT-Panel
  │   └─{BT-Panel}
  ├─BT-Task /www/server/panel/BT-Task
  │   ├─(python)
  │   └─11*[{BT-Task}]
  ├─YDLive
  │   ├─YDService
  │   │   ├─sh -c sleep 100
  │   │   │   └─8*[{sh}]
  │   │   └─22*[{YDService}]
  │   └─9*[{YDLive}]
  ├─acpid
  ├─agetty --noclear tty1 linux
  ├─agetty --keep-baud 115200,38400,9600 ttyS0 vt220
  ├─atd -f
  ├─auditd
  │   └─{auditd}
  ├─barad_agent
  │   ├─barad_agent
  │   └─barad_agent
  │       └─2*[{barad_agent}]
  ├─crond -n
  ├─dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation
  ├─dhclient -q -lf /var/lib/dhclient/dhclient--eth0.lease -pf /var/run/dhclient-eth0.pid -H VM-0-3-centos eth0
  ├─iscsid -f
  ├─lsmd -d
  ├─lvmetad -f
  ├─ntpd -u ntp:ntp -g
  ├─polkitd --no-debug
  │   └─6*[{polkitd}]
  ├─rsyslogd -n
  │   └─2*[{rsyslogd}]
  ├─sgagent -d
  │   └─{sgagent}
  ├─ss-server -c /etc/shadowsocks-libev/config.json -u
  ├─sshd -D
  │   ├─sshd
  │   │   └─sshd
  │   ├─sshd
  │   │   └─sshd
  │   └─sshd
  │       ├─bash
  │       │   └─pstree -a
  │       └─bash
  │           └─man pstree
  │               └─less -s
  ├─systemd-journal
  ├─systemd-logind
  ├─systemd-udevd
  ├─tat_agent
  │   └─7*[{tat_agent}]
  └─tuned -Es /usr/sbin/tuned -l -P
      └─4*[{tuned}]
```

（3） 显示当前所有进程的进程 ID。
```shell
pstree -p
systemd(1)─┬─ModemManager(676)─┬─{ModemManager}(716)
           │                   └─{ModemManager}(719)
           ├─NetworkManager(680)─┬─dhclient(9982)
           │                     ├─{NetworkManager}(745)
           │                     └─{NetworkManager}(749)
           ├─VGAuthService(681)
           ├─abrt-watch-log(671)
           ├─abrt-watch-log(672)
           ├─abrtd(632)
```
（4）显示指定进程号树状信息。
```shell
pstree 1451
sshd───sshd─┬─bash───pstree
            └─bash───man───less
```
（5）显示进程树信息，结合管道。
```shell
pstree | less
```

---
## 参考文献
[pstree(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/pstree.1.html)

<Vssue title="pstree" />