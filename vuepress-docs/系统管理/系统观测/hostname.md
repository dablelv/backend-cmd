## 1.命令简介
hostname 显示或设置系统的主机名。

Linux 系统中的 HOSTNAME 环境变量对应保存了当前的主机名称，使用 hostname 命令能够查看和设置此环境变量的值，而要想永久修改主机名称则需要使用 hostnamectl 命令或直接编辑配置文件 /etc/hostname 才行。

## 2.命令格式
```shell
hostname
hostname [-h|--help] [-V|--version]
hostname [-b|--boot] [-F|--file filename] [hostname]
hostname [-a|--alias] [-d|--domain] [-f|--fqdn|--long] [-A|--all-fqdns] [-i|--ip-address] [-I|--all-ip-addresses] [-s|--short] [-y|--yp|--nis]
```
无选项单独执行 hostname 将打印 [gethostname(2)](https://man7.org/linux/man-pages/man2/gethostname.2.html) 函数返回的系统名称。

## 3.选项说明
```shell
-a, --alias
    显示主机的别名(如果使用了的话)。
-d, --domain
    显示 DNS 域名。不要使用命令 domainname 来获得 DNS 域名，因为这会显示 NIS 域名而非 DNS 域名。可使用 dnsdomainname 替换之。
-F, --file <filename>
    从指定文件中读取主机名。注释(以一个 # 开头的行)可忽略。
-f, --fqdn, --long
    显示 FQDN（Fully Qualified Domain Name，完全资格域名）。一个 FQDN 包括一个短格式主机名和 DNS 域名。除非你正在使用 bind 或 NIS 来作主机查询，否则你可以在 /etc/hosts 文件中修改 FQDN 和 DNS 域名（这是 FQDN 的一部分）。
-h, --help
    打印用法信息并退出。
-i, --ip-address
    显示主机的 IP 地址。注意，只有在可以解析主机名时，此操作才有效。请避免使用此选项，应使用 -I, --all-ip-addresses 选项。
-I, --all-ip-addresses
    显示主机的所有地址。
-n, --node
    显示 DECnet 节点名。如果指定了参数（或者指定了 --file <name>），那么 root 也可以设置一个新的节点名。
-s, --short
    显示短格式主机名。这是一个去掉第一个圆点后面部分的主机名。
-V, --version
    在标准输出上打印版本信息并以成功的状态退出。
-v, --verbose
    详尽说明并告知所正在执行的。
-y, --yp, --nis
    显示 NIS 域名。如果指定了参数（或者指定了 --file <name>），那么 root 也可以设置一个新的 NIS 域。
```

## 4.常用示例
（1）显示本机的主机名。
```shell
hostname
VM-0-3-centos
```
（2）临时修改主机名，系统重启将失效。
```shell
hostname lvlv.com

echo $HOSTNAME
lvlv.com
```

（3）以短格式显示主机名。
```shell
hostname lvlv.com
hostname -s
lvlv
```
（4）显示主机的别名。

如果无主机别名将显示空行。
```shell
hostname -a

```
（5）显示主机的 IP 地址。
```shell
hostname -I
10.0.0.3
```

（6）显示 DNS 域名。
```shell
hostname -d
com.com
```
（7）显示 NIS 域名。
```shell
hostname -y
hostname: Local domain name not set
```

（8）显示 FQDN（完全资格域名）。
```shell
hostname -f
lvlv.com.com
```


---
## 参考文献
[hostname(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/hostname.1.html)

<Vssue title="hostname" />