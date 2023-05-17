## 1.命令简介
dnsdomainname 显示系统的 DNS 域名。

dnsdomainname 是 hostname 的一个软链，等同于 `hostname -d | --domain`。

注意，dnsdomainname 不能设置 DNS 域名。要想设置，请在 DNS 服务器进行配置，或修改本地配置文件 /etc/hosts。

## 2.命令格式
```shell
dnsdomainname
dnsdomainname [-h|--help] [-V|--version]
```

## 3.选项说明
```
-h, --help
	显示帮助文档。
-V, --version
	显示命令版本。
-v, --verbose
	显示详细执行过程。
```

## 4.常用示例
（1）查看本机 DNS 域名。

```shell
dnsdomainname
```
（2）查看版本信息。

```shell
dnsdomainname -V
hostname 3.13
```
（3）查看帮助信息。

```shell
dnsdomainname -h
Usage: hostname [-b] {hostname|-F file}         set host name (from file)
       hostname [-a|-A|-d|-f|-i|-I|-s|-y]       display formatted name
       hostname                                 display host name

       {yp,nis,}domainname {nisdomain|-F file}  set NIS domain name (from file)
       {yp,nis,}domainname                      display NIS domain name

       dnsdomainname                            display dns domain name

       hostname -V|--version|-h|--help          print info and exit

Program name:
       {yp,nis,}domainname=hostname -y
       dnsdomainname=hostname -d

Program options:
    -a, --alias            alias names
    -A, --all-fqdns        all long host names (FQDNs)
    -b, --boot             set default hostname if none available
    -d, --domain           DNS domain name
    -f, --fqdn, --long     long host name (FQDN)
    -F, --file             read host name or NIS domain name from given file
    -i, --ip-address       addresses for the host name
    -I, --all-ip-addresses all addresses for the host
    -s, --short            short host name
    -y, --yp, --nis        NIS/YP domain name

Description:
   This command can get or set the host name or the NIS domain name. You can
   also get the DNS domain or the FQDN (fully qualified domain name).
   Unless you are using bind or NIS for host lookups you can change the
   FQDN (Fully Qualified Domain Name) and the DNS domain name (which is
   part of the FQDN) in the /etc/hosts file.
```

---
## 参考文献
[dnsdomainname(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/dnsdomainname.1.html)
