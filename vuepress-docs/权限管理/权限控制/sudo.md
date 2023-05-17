## 1.命令简介
sudo 可以用指定的用户身份执行指定的指令，而无需输入指定用户的密码，只需要输入当前用户的密码。未指定用户名默认为 root。

## 2.命令格式
```
sudo [OPTIONS] [CMD]
```
没有选项与命令单独执行 sudo，将列出 sudo 简要使用方法。

## 3.选项说明
```
-A
	使用辅助程序（可能是图形化界面的程序）读取用户的密码并将密码输出到标准输出。如果设置了环境变量 SUDO_ASKPASS，它会指定辅助程序的路径，否则，由配置文件 /etc/sudo.conf 的 askpass 选项来指定辅助程序的路径。如果没有可用的辅助程序，sudo 将错误退出
-b
	选项 -b（background）把 sudo 所要运行的命令放到后台运行
-E
	选项 -E（preserve Environment）向安全策略指示用户希望保存他们现有的环境变量。如果指定了 -E 选项，且用户没有保留环境变量的权限，则安全策略可能返回错误
-H
	选项 -H（Home）将 HOME 环境变量设置为目标用户的家目录，目标用户默认为 root
-h
	选项 -h（help）显示帮助信息并退出
-i [CMD]
	选项 -i（simulate initial login）将模拟初始登录，即启动目标用户在 /etc/passwd 中配置的 Shell，相关的资源文件将被读取并执行，比如 ~/.profile 和 ~/.login。如果后跟命令 CMD，则 CMD 将被传递给 Shell 并被执行
-K
	选项 -K（sure Kill）类似于 -k，它只用于删除了用户的缓存凭据，不能与命令或其他选项一起使用
-k [CMD]
	单独使用 -k（kill）选项时，使密码缓存失效，也就是下次执行 sudo 时需要输入密码。如果后跟命令，表示忽略缓存密码，需要用户重新输入密码 ，新输入的密码不会更新密码缓存
-l[l] [CMD]
	如果选项 -l（list）后不跟命令，则列出 sudo 允许当前用户（或使用 -U 指定的其他用户）执行的指令和无法执行的指令。如果指定了命令并被安全策略所允许，则将显示该命令绝对路径以及命令参数。如果指定了命令不被允许，sudo 以状态码 1 退出。如果使用 -ll 或多次指定 -l 选项，则使用长格式输出
-n
	选项 -n（non-interactive）表示以非交互模式执行 sudo，阻止 sudo 向用户询问密码。如果执行命令时需要密码，则 sudo 将报错误信息并退出
-p PROMPT
	改变询问密码的提示符号
-s [CMD]
	选项 -s（shell）执行环境变量 SHELL 表示的 Shell，如果 SHELL 没有值，则执行目标用户在配置文件 /etc/passwd 中配置的 Shell。如果选项后跟命令，则传递给 Shell 执行，如果没有指定命令，则执行交互式 Shell
-U USER
	选项 -U（other user）与 -l 选项一起使用，以指定应列出其权限的用户。sudoers 策略仅允许 root 用户或当前主机上具有 ALL 权限的用户使用此选项
-u USER
	选项 -u（user）指定执行命令时使用的用户身份，默认为 root。如果使用 uid 则使用 #uid 表示用户
-V, --version
	显示版本信息并退出。
-v, --validate
	更新用户的缓存凭据，使密码有效期延长 5 分钟。
```

**注意：**
sudo 运行时要参照配置文件 /etc/sudousers ，该文件配置了用户能够执行的命令。

## 4.常用示例
（1）查看此当前用户拥有的权限。
```shell
sudo -l
Matching Defaults entries for lvlv on jumper02:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User lvlv may run the following commands on jumper02:
    (ALL) NOPASSWD: ALL
```

（2）以指定用户身份执行命令。
```shell
sudo –u USERNAME CMD
```

（3）结束密码有效期，也就是下次执行 sudo 时需要输入密码。
```shell
sudo -k
```

（4）以指定用户创建一个文件，缺省为 root 用户。
```shell
sudo touch file

ls -l file
-rw-r--r-- 1 root root 0 5月  14 19:10 file
```
（5）显示版本信息并退出。
```shell
sudo -V
Sudo version 1.8.21p2
Sudoers policy plugin version 1.8.21p2
Sudoers file grammar version 46
Sudoers I/O plugin version 1.8.21p2
```

---
## 参考文献
[sudo(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/sudo.8.html)

[sudo命令 - Linux 命令大全](https://man.linuxde.net/sudo)