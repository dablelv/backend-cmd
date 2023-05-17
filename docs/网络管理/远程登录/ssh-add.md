## 1.命令简介
ssh-add 将私钥身份添加到 OpenSSH 身份验证代理，从而提高 ssh(1) 的认证速度。

ssh-add 向认证代理 ssh-agent(1) 添加私钥身份。当不带参数运行时，它将添加文件 `~/.ssh/id_rsa`、`~/.ssh/id_dsa`、`~/ssh/id_ecdsa`、`~/.ssh/id_ecdsa_sk`、`~/.ssh/id_ed25519` 和 `~/.ssh/id_ed25519_sk`。加载私钥后
，ssh-add 将尝试加载相应的证书，通过向私钥文件的名称追加 -cert.pub 来获得的相应的证书。可选的文件名可以在命令行中给出。

如果任何文件需要密码短语，ssh-add 将通过 tty 向用户请求该密码短语。如果给定了多个身份文件，ssh-add 将重试最后一个密码短语。

身份验证代理必须正在运行，并且 SSH_AUTH_SOCK 的环境变量必须包含其套接字的名称以帮助 ssh-add 工作。

## 2.命令格式
```shell
ssh-add [-cDdKkLlqvXx] [-E fingerprint_hash] [-S provider] [-t life] [file ...]
ssh-add -s pkcs11
ssh-add -e pkcs11
ssh-add -T pubkey ...
```

## 3.选项说明
```
-D
	删除 ssh-agent 中的所有密钥。
-d
	从 ssh-agent 中的删除密钥。
-e <pkcs11>
	删除 PKCS#11 共享库 pkcs11 提供的钥匙。
-s <pkcs11>
	添加 PKCS#11 共享库 pkcs1 提供的钥匙
-L
	列出 ssh-agent(1) 中的公钥。
-l
	列出 ssh-agent(1) 中当前所代表的所有身份的指纹。
-t <life>
	对加载的密钥设置超时时间，超时 ssh-agent(1) 将自动卸载密钥。
-X
	对 ssh-agent 进行解锁。
-x
	对 ssh-agent 使用密码进行加锁。
```

## 4.常用示例

（1）开启 ssh-agent。

默认操作系统是不开启 ssh-agent 的，需要手动打开。

```shell
ssh-agent bash
```

（2）把私钥添加到 ssh-agent 中。

```shell
ssh-add ~/.ssh/id_rsa
Identity added: /root/.ssh/id_rsa (/root/.ssh/id_rsa)
```

（3）查看 ssh-agent 中当前所代表的身份的公钥。
```shell
ssh-add -L
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDCD2PJUqqNWDxX0DVV8tvY0Ia7Gbv5va2qSqRHjVYaNczd+ceP3jY2u3P4fQiC8guXRk59/iV2l2HMS0x/PHY5rN5PQLw+LDvDdV4xM6pON8mEv7sCZUdJrv+B9aCccl7WS/5BzsRd5MwH35e2bd843znRtRkYPPQq+kJGeFPtpmoJMt0hkLIH2V1Wjvg5ex/wFupvLmQ/f8gEkKUifFY8j43KrgdErVX5zQdfK9St1gajG78bAW93wUcYm/jMGo/W/hPa0B9QMmlucUtW75krcF3SRFyrsjO3lbzP8MjN1FWoXLCyrtOslcoGfWanpb4xm62GiIemcbU5HwU56klt /root/.ssh/id_rsa
```

（4）列出 ssh-agent 中当前所代表的所有身份的指纹。
```shell
ssh-add -l
2048 SHA256:EZqVh3vljGdV+sOUj8z3ROcS8Vip0RiEZH6h0yLNq8I /root/.ssh/id_rsa (RSA)
```

（5）从 ssh-agent 中删除密钥。
```shell
ssh-add -d ~/.ssh/id_rsa.pub
```

（6）对 ssh-agent 进行加锁。
```shell
ssh-add -x
Enter lock password: 
Again: 
Agent locked.
```

（7）对 ssh-agent 进行解锁。

输入加密时使用的密码即可解密。

```shell
ssh-add -X
Enter lock password: 
Agent unlocked.
```

---
## 参考文献
[ssh-add(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/ssh-add.1.html)
