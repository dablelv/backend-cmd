## 1.命令简介
ssh-agent 是 OpenSSH 认 证代理。

sh-agent是一个用于保存公钥认证过程中用到的私钥的程序。ssh-agent 在 X 会话或登录会话之初启动，所有其他窗口或程序则以 ssh-agent 客户端程序的身份启动。当使用 ssh(1) 登录到其他机器时，可通过环境变量定位到代理并使用代理自动进行身份验证。

其实 ssh-agent 就是一个密钥管理器，运行 ssh-agent 以后，使用 ssh-add 将私钥交给 ssh-agent 保管，其他程序需要身份验证的时候可以将验证申请交给 ssh-agent 来完成整个认证过程。

## 2.使用场景

使用不同的密钥连接到不同的主机时，需要手动指定对应的密钥。ssh-agent 可以帮助我们选择对应的密钥进行认证，不用手动指定密钥即可进行连接。


当私钥设置了密码，我们又需要频繁的使用私钥进行认证时，ssh-agent 可以帮助我们免去重复的输入密码的操作。

## 3.命令格式
```shell
ssh-agent [-c | -s] [-Dd] [-a bind_address] [-E fingerprint_hash] [-P allowed_providers] [-t life]
ssh-agent [-a bind_address] [-E fingerprint_hash] [-P allowed_providers] [-t life] command [arg ...]
ssh-agent [-c | -s] -k
```
## 4.选项说明
```
-a <bind_address>
	将 agent 绑定到 Unix 域套接字地址。缺省 $TMPDIR/ssh-XXXXXXXXXX/agent.<ppid>。
-c
	生成 C-shell 风格的命令输出。
-D
	前台模式。当指定此选项时，ssh-agent 将不进行 fork。
-d
	调试模式。
-E <fingerprint_hash>
	指定显示密钥指纹时使用的哈希算法。有效选项为 md5 和 sha256。默认值为 sha256。
-k
	把 ssh-agent 进程杀掉（由环境变量 SSH_AGENT_PID 给出 PID）。
-P <allowed_providers>
	为 PKCS#11 提供程序和 FIDO 身份验证器中间件共享库指定可接受路径的模式列表，这些共享库可以与 ssh-add(1) 的 -S 或 -S 选项一起使用。

	与模式列表不匹配的库将被拒绝。有关模式列表语法的描述，请参见 ssh_config(5) 中的 PATTERNS。默认列表为“/usr/lib/*，/usr/local/lib/*”。
-s
	生成 Bourne shell 风格的命令输出。
-t <life>
	为添加到代理的标识的最大生存期设置一个默认值。生存期可以以秒或 sshd_config(5) 中指定的时间格式指定。使用 ssh-add(1) 为标识指定的生存期将覆盖此值。如果没有这个选项，默认的最大生存期是永远。
command [arg ...]
	如果给出了命令(和可选参数)，它将作为代理的子进程执行。当命令行上给出的命令终止时，代理自动退出。
```

## 5.常用示例

（1）运行 ssh-agent 并打印本身的环境和变量。
```shell
ssh-agent
SSH_AUTH_SOCK=/tmp/ssh-LG9nILJM4eg5/agent.10291; export SSH_AUTH_SOCK;
SSH_AGENT_PID=10292; export SSH_AGENT_PID;
echo Agent pid 10292;
lvlv@jumper02:~$ echo Agent pid 10292
```

（2）把 ssh-agent 进程杀掉。

```shell
ssh-agent -k
SSH_AGENT_PID not set, cannot kill agent
```

（3）运行 ssh-agent 并生成 C-shell 风格的命令输出。
```shell
ssh-agent -c
setenv SSH_AUTH_SOCK /tmp/ssh-9EeTOiN3QBlO/agent.12868;
setenv SSH_AGENT_PID 12869;
echo Agent pid 12869;
```

（4）使用 -d 参数，运行调试模式。
```shell
ssh-agent -d
SSH_AUTH_SOCK=/tmp/ssh-RIdJfIA1Qus2/agent.13761; export SSH_AUTH_SOCK;
echo Agent pid 13761;
debug2: fd 3 setting O_NONBLOCK
```

---
## 参考文献
[ssh-agent(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/ssh-agent.1.html)

<Vssue title="ssh-agent" />