## 1.命令简介
history 用于显示用户以前执行过的历史命令，并且能对历史命令进行追加和删除等操作。

单独使用 history 时，仅显示历史命令。在命令行中，可以使用感叹号 ! 执行指定序号的历史命令。如执行序号为 2 个历史命令，则输入`!2`。

历史命令是被保存在内存中的，当退出或者登录shell时，会自动保存或读取。在内存中，历史命令仅能够存储 1000 条历史命令，该数量是由环境变量 HISTSIZE 进行控制。

## 2.命令格式
```
history [n]
history -c
history -d offset
history -anrw [filename]
history -p arg [arg ...]
history -s arg [arg ...]
```

## 3.选项说明
```shell
-a
	将当前 Shell 会话的历史命令追加到命令历史文件中，命令历史文件是保存历史命令的配置文件。
-c
	清空当前历史命令列表。
-d <offset>
	删除历史命令列表中指定序号的命令。
-n
	从命令历史文件中读取本次 Shell 会话开始时没有读取的历史命令。
-r
	读取命令历史文件到当前的 Shell 历史命令内存缓冲区。
-s <arg> [<arg> ...]
	将指定的命令作为单独的条目加入命令历史内存缓冲区。
-p <arg> [<arg> ...]
	对指定参数执行历史替换，并在标准输出中显示结果。不将结果存储在历史记录列表中。每个参数必须被引用以禁用正常的历史扩展。
-w
	把当前的 Shell 历史命令内存缓冲区的内容写入命令历史文件。
```

## 4.常用示例

（1）查看历史命令。

```shell
history
1  2022-10-16 21:54:59 whoami
2  2022-10-16 21:55:15 lsb_release
3  2022-10-16 21:55:40 cat /etc/*release
4  2022-10-16 21:56:02 cat /etc/centos-release
...
```

（2）显示最近 N 条命令。
```shell
history 5
2465  2022-12-19 18:55:43 history | wc -l
2466  2022-12-19 18:55:55 echo $HISTSIZE
2467  2022-12-19 19:08:21 history
2468  2022-12-19 19:08:27 history | less
2469  2022-12-19 19:10:27 history 5
```

（3）将当前 Shell 历史命令写入到历史文件中。
```shell
history -w
```

（4）读取命令历史文件到当前的 Shell 历史命令内存缓冲区。
```shell
history -r
```

（5）删除所有条目从而清空历史列表。
```shell
history -c
```

（6）执行历史列表中指定下标的命令。
```shell
history
    1  2022-12-19 19:23:26 history 5
    2  2022-12-19 19:23:34 history 5
    3  2022-12-19 19:25:02 history
    4  2022-12-19 19:25:08 ls
    5  2022-12-19 19:25:12 history

!4
ls
centos7.sh  cosfs.sh  cpp  dnspod.sh  go  install_panel.sh  install.sh  LATEST.tar.gz  libsodium-stable  test  txcdn.sh
```

（7）执行最近一条历史命令。
```shell
!!
```

## 5.拓展知识

### 5.1 常用设置

对 history 设置与相关环境变量有关。

```shell
export HISTCONTROL=ignoredups               # 消除命令历史中的连续重复条目

export HISTSIZE=0                           # 禁用history命令

export HISTCONTROL=erasedups                # 在整个历史中去除重复命令

export HISTFILESIZE=1000000                 # 设置历史文件大小

export HISTTIMEFORMAT='%F %T'               # 设置时间戳，执行后生效

export HISTTIMEFORMAT="%F %T `whoami`"      # 显示执行用户,对管理员很有用

export HISTIGNORE=“pwd:ls:”               # 忽略特殊命令,只忽略ls并不忽略ls -lart

export HISTCONTROL=ignorespace              # 忽略某条特定命令

export HISTFILE=/root/history.txt           # 设置历史文件的存储目录
```

### 5.2 常用参数
```
!!　　　　      # 前一条命令；
!:0 　　　      # 不带参数的前一条命令名；
!^ 　　　       # 前一条命令的第一个参数；
!:n 　　　      # 前一条命令的第n个参数；
!$ 　　　       # 前一条命令的最后一个参数；例如 mkdir test; cd !$
!*              # 前一条命令的所有参数，命令名除外；
!n 　　　       # 第 n 条命令；
!-n 　　　      # 倒数第n条命令；
!str　　　      # 最近一条以str开头的命令；
!?str　 　      # 最近一条包含str的命令；
^a^b　　        # 将上一条命令名中的a替换为b；
!:gs/a/b　      # 将上一条命令的所有a替换为b（包含命令名和参数）。                        
!:3             # 第三个参数数
!:2-4           # 第2到4个参数
!:-3            # 从第0个到第三个参数
!*              # 第一个到最后一个参数
!:2*            # 第2个到最后一个
!:2-            # 从第2个开始，但不要结尾参数
```

---

## 参考文献
[bash(1) - Linux manual page - man7.org](https://www.man7.org/linux/man-pages/man1/bash.1.html)