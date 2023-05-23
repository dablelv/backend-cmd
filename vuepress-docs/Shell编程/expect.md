## 1.命令简介
expect 用于与互动程序进行自动交互。

expect 是一个自动化交互套件，主要应用于执行命令时，以交互形式按照要求输入指定字符串，实现自动交互。

expect 自动交互流程：

spawn 启动指定命令 > expect 获取指定关键字 > send 发送指定字符串 > 执行完成退出。

注意 expect 脚本能够执行需要提前安装 expect，一般系统默认没有此命令。

如 RedHat 系列平台：

```
yum install -y expect
```

## 2.命令格式

```shell
expect [ -dDinN ] [ -c cmds ] [ [ -[f|b] ] cmdfile ] [ args ]
```

## 3.选项说明

```shell
-d
	启用一些诊断输出，主要报告 expect 和 interaction 等命令的内部活动。
-D
	启用交互式调试器。后面应该是一个整数值。如果值非零或按下^C(或击中断点，或脚本中出现其他适当的调试器命令)，调试器将在下一个 Tcl(Tool Command Language) 过程之前接管控制。
-i
	交互式输入 expect 命令，而不是从文件中读取。通过 exit 命令或 EOF 终止。
-n
	不使用 ~/.expect.rc 脚本。
-N
	不使用 $exp_library/expect.rc 脚本。
-c <cmds>
	指定要执行的 expect 命令。命令应该加引号，以防止被 Shell 分解。此选项可使用多次或用一个 -c 选项指定多个命令，命令之间用分号分隔。命令按照它们出现的顺序执行。
-f
	从文件读取命令，仅用于使用#!时。如果文件名为"-"，则从stdin读取(使用"./-"从文件名为-的文件读取)。
-b
	默认情况下，命令文件被读入内存并完整地执行。有时需要一次读取一行。例如，stdin 是这样读取的。为了强制任意文件以这种方式处理，请使用 -b 选项。
-v
	显示 expect 版本信息。
```

## 4.子命令
expect 使用 TCL(Tool Command Language)。

TCL 提供了控制流(如 if、for、break)、表达式求值和一些其他特性，如递归、过程定义等。此处使用但未定义的命令(如 set、if、exec)是 Tcl 命令(参见 [tcl(3)]())。Expect支持下面描述的其他命令。除非另有说明，否则命令返回空字符串。

常用子命令如下：

```
spawn [args] program [args]。
	启动交互程序 program [args]。
expect [[-opts] pat1 body1] ...
	获取匹配信息匹配成功则执行 expect 后面的程序动作。
send [-flags] string
	用于发送指定的字符串信息。
exp_continue [-continue_timer]
	允许 expect 自身继续执行，而不是像通常那样返回。默认情况下，exp_continue 重置超时计时器，-continue_timer 标志防止定时器重启。
send_user [-flags] string
	用来打印指定字符串到标准输出，相当于 Shell 中的 echo。
exit [-opts] [status]
	退出 expect 脚本。
set timeout N
	设置超时时间为 N 秒。
set
	定义变量。
puts
	输出变量。
interact [string1 body1] ...
	执行完成后保持交互状态，控制权交给控制台(手工操作)。否则完成后会退出。
```

## 5.常用示例

（1）使用 ssh 自动登录远程主机。

```shell
#!/usr/bin/expect

set ip [lindex $argv 0 ]        # 接收第1个参数,作为IP
set username [lindex $argv 1 ]	# 接收第2个参数,作为username
set password [lindex $argv 2 ]	# 接收第3个参数,作为密码
set timeout 30                  # 设置超时时间 

spawn ssh $username@$ip       # 发送ssh请求
expect {                      # 返回信息匹配 
	"*yes/no" { send "yes\n"; exp_continue}  # 第一次ssh连接会提示yes/no，发送yes然后继续
	"*password:" { send "$password\n" }    # 出现密码提示,发送密码  
} 
interact        # 交互模式,用户会停留在远程服务器上面
```

或在 Shell 脚本中执行 expect 命令。

```shell
#!/bin/bash

user=root
ip=192.168.56.103
passwd='123456'

expect <<-EOF
set time 30
spawn ssh $user@$ip
expect {
	"*yes/no" { send "yes\n"; exp_continue }
	"*password" { send "$passwd\n" }
}
interact
EOF
```
其中 <<-EOF 和 EOF 包围的内容块，被重定向到左侧命令 expect 的 stdin 中。

（2）使用 ssh 自动登录远程主机，执行命令然后退出。

```shell
#!/usr/bin/expect

set IP     [lindex $argv 0]
set USER   [lindex $argv 1]
set PASSWD [lindex $argv 2]
set CMD    [lindex $argv 3]
 
spawn ssh $USER@$IP $CMD
expect {
    "(yes/no)?" {
        send "yes\n"
        expect "password:"
        send "$PASSWD\n"
    }
    "password:" {send "$PASSWD\n"}
}
expect eof
```

（3）使用 scp 自动拷贝文件到远程主机。

```shell
#!/usr/bin/expect

spawn scp /etc/foo root@192.168.33.129:/root
expect {
     "yes/no" { send "yes\n";exp_continue }
     "password" { send "root\n" }
}
expect eof
```

---
## 参考文献
[expect(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/expect.1.html)

[expect - 自动交互脚本](http://xstarcd.github.io/wiki/shell/expect.html)

<Vssue title="expect" />