## 1.命令简介
ssh-copy-id 使用本地可用的密钥授权登录远程计算机。

ssh-copy-id 可以把本地主机的公钥复制到远程主机的 authorized_keys 文件上。ssh-copy-id 也会给远程主机的用户主目录（home）和 ~/.ssh 和 ~/.ssh/authorized_keys 设置合适的权限。

## 2.命令格式
```shell
ssh-copy-id [-n] [-i [identity_file]] [-p port] [-o ssh_option] [user@]hostname
ssh-copy-id -h | -?
```

## 3.选项说明
```shell
-i <identity_file>
	指定认证文件(公钥)。
-f
	强制模式。
-n
	测试，不实际替换。
-p <port>
	指定端口。
-o <ssh_option>
	指定其他 ssh(1) 参数。
```

## 4.常用示例
（1）把本地主机的公钥复制到远程主机。
```shell
ssh-copy-id dablelv@192.168.12.103
```

（2）拷贝本机指定公钥到远程主机。
```shell
ssh-copy-id -i ~/.ssh/id_rsa.pub dablelv@192.168.12.101
```

---
## 参考文献
[ssh-copy-id(1) — Linux manual page - linux.org](https://www.linux.org/docs/man1/ssh-copy-id.html)
