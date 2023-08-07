## 1.命令简介
ssh-keygen 是 OpenSSH 身份验证密钥实用工具。

ssh-keygen 用于 OpenSSH 身份验证密钥的生成、管理和转换，它支持 RSA 和 DSA 两种认证密钥。

## 2.命令格式
```shell
ssh-keygen [OPTIONS] FILE...
```

## 3.选项说明
下面只列出常用的选项，更多选项可参考手册。
```shell
-b BITS
	指定密钥长度。
-e
	读取私有或公共 OpenSSH 密钥文件并以 -m 选项指定的格式之一将密钥打印到标准输出。
-C
	添加注释。
-f FILENAME
	指定用来保存密钥的文件名。
-i
	以 -m 选项指定的格式读取未加密的私钥（或公钥）文件，并将 OpenSSH 兼容的私钥（或公钥）打印到 stdout。
-l
	显示公钥文件的指纹数据。
-m KEY_FORMAT
	为 -i（导入）或 -e（导出）转换选项指定密钥格式。支持的密钥格式为：“RFC4716”（RFC 4716/SSH2 公钥或私钥）、“PKCS8”（PEM PKCS8 公钥）或“PEM”（PEM 公钥）。 默认转换格式为“RFC4716”。
-N
	提供一个新密语。
-P PASSPHRASE
	提供（旧）密语。
-q
	静默模式。
-t
	指定要创建的密钥类型。可能的值为“dsa”、“ecdsa”、“ecdsa-sk”、“ed25519”、“ed25519-sk”或“rsa”。
-y
	从 OpenSSH 格式的私钥导出公钥。
```
## 4.常用示例
（1）创建一个默认密钥，缺省为 RSA 类型的密钥。
```shell
ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/lighthouse/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/lighthouse/.ssh/id_rsa.
Your public key has been saved in /home/lighthouse/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:c8jkpkXgRqqfelFHKxq956d+6qYzAR0kHgnaVs9gtYw lighthouse@VM-0-3-centos
The key's randomart image is:
+---[RSA 2048]----+
|  ..*+=          |
| o +.%.o.        |
|. o EoBoo.       |
| . .o.==o.       |
|  .  = +S .      |
|   .o.o+.o       |
|    o..+         |
|   .. o o o      |
|  ..  .B==       |
+----[SHA256]-----+
```
中途需要三次确认，全部缺省直接回车即可。

完成后，在 ~/.ssh 目录下将会看到两个文件：
```
ls -l ~/.ssh
id_rsa  id_rsa.pub
```
id_rsa 为当前主机的私钥。id_rsa.pub 为当前主机的公钥。

（2）指定要创建的密钥类型，缺省为 RSA。
```shell
ssh-keygen -t rsa
```

（3）指定密钥的类型并添加注释。
```shell
ssh-keygen -t rsa -C "dablelv@qq.com"
```

（4）读取 OpenSSH 的私钥或者公钥文件。
```shell
ssh-keygen -e
---- BEGIN SSH2 PUBLIC KEY ----
Comment: "2048-bit RSA, converted by lighthouse@VM-0-3-centos from Ope"
AAAAB3NzaC1yc2EAAAADAQABAAABAQDb1aKBbvfSefnuzLfhNKlIa4zsbBFG+m7ugZbeBW
RwJXONhSq/AW27+Tq9zDtI6qG+UxmjIorVHbAVl4llVZz8e5b/s5I0yiBoLy/RokpvisNB
kVkWl2oNGtkdHxTSYcJ3jdbTZ+ya6MyOiaMt24jV+zxxS1BXWxA14kS/JqiMC7lx9Vu0Ed
AHY0zq2dj+pX31FB7Xs7p98eO+Est6msCGIInIpzGTlTskL6m7B+aMBaquWlEyQAmRX5G8
YoOFw+aDT4q1aaaaBkFdcy/nhHPpbfM8eIzbAv+khHRjZV8XQCo+UeHzme8nmfWDCWwKZ8
TnpO239diTdl2Wps2YCMex
---- END SSH2 PUBLIC KEY ----
```
（5）安静模式生成密钥对。
```shell
ssh-keygen -q -t rsa
Enter file in which to save the key (/home/lighthouse/.ssh/id_rsa): 
/home/lighthouse/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase): 
Enter same passphrase again:
```
（6）从私钥导出公钥。
```shell
ssh-keygen -y [-f PRV_KEY_FILE]
```
如果不通过 -f 选项指定私钥文件，则以交互方式指定。

（7）将 OpenSSH 格式公钥转换成 OpenSSL 的 PKCS#1 格式公钥。
```shell
ssh-keygen -e -m PEM -f id_rsa.pub > rsa_pub_key.pem
```

（8）将 OpenSSL 的 PKCS#8 格式公钥转换成 OpenSSH 的格式公钥。
```shell
ssh-keygen -i -m PKCS8 -f rsa_pub_key.pem > id_rsa.pub
```
## 5.authorized_keys 和 known_hosts
有时，你在 ~/.ssh 目录下可能还会看到 authorized_keys 和 known_hosts 这两个文件。

- authorized_keys

如果当前主机是 SSH 服务端，那么会有 authorized_keys，用来存放客户端机器的公钥。

我们需要本地机器通过 SSH 访问远程服务器时为了减少输入密码的步骤，基本上都会在本地机器生成 SSH 公钥，然后将本地 SSH 公钥复制到远程主机的 ~/.ssh/authorized_keys 中，这样就可以免密登录了。

- known_hosts

如果当前主机为 SSH 客户端，你可能会在 ~/.ssh 目录下看到 known_hosts 文件，该文件用来记录连接过的远程主机。

known_hosts 文件每行记录一个连接过的远程服务器的公钥。

文件中的每一行都包含以下字段：**标记符(可选)、主机名、公钥类型、base64 编码的公钥、注释**。字段之间用空格分隔。

如果是首次连接某个远程主机，那么会有安全提示是否继续连接。
```shell
The authenticity of host '0.0.0.0 (0.0.0.0)' can't be established.
ECDSA key fingerprint is SHA256:xxxxxxxxxxxx.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```
另外，在 /etc/ssh 目录下也可能会有 ssh_known_hosts 来保存一些对所有用户都可信赖的远程主机信息。

---
## 参考文献
[ssh-keygen(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/ssh-keygen.1.html)

[PKI - 语法[ASN.1]、规范[PKCS、X.509]、编码[DER、PEM]](https://blog.csdn.net/ttyy1112/article/details/107064407)

[SSH_KNOWN_HOSTS FILE FORMAT](https://man7.org/linux/man-pages/man8/sshd.8.html#SSH_KNOWN_HOSTS_FILE_FORMAT)

[一文读懂authorized_keys和known_hosts_游语的博客-CSDN博客](https://blog.csdn.net/qq_26400953/article/details/105145103)

[SSH known_hosts / authorized_keys 的解释 - CSDN](https://blog.csdn.net/guoke312/article/details/113563911)

<Vssue title="ssh-keygen" />