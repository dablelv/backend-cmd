## 1.命令简介
domainname 显示或设置系统的 NIS/YP 域名。

注意：

（1）domainname，nisdomainname 和 ypdomainname 均是 hostname 的软链，等同于`hostname -y | --yp | --nis`。

（2）只有 root 用户才可以设置 NIS 域名。

## 2.命令格式
```shell
domainname [nisdomain] [-F file]
domainname [-h|--help] [-V|--version]
```
无选项单独执行 domainname，nisdomainname 和 ypdomainname 将打印系统的 NIS 域名，使用 [getdomainname(2)](https://man7.org/linux/man-pages/man2/getdomainname.2.html) 的返回结果。

## 3.选项说明
```shell
-F, --file <file>
	从指定文件中读取域名。注释(以一个 # 开头的行)可忽略。
-h, --help
	显示帮助信息。
-V, --version
	显示版本信息。
```

## 4.常用示例
（1）设置看主机 NIS 的域名。

```shell
domainname dablelv
```

（2）显示主机 NIS 的域名。

```shell
domainname
dablelv
```

（3）显示帮助信息。

```shell
domainname -h
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

（4）查看版本信息。

```shell
domainname -V
hostname 3.13
```

## 5.NIS 是什么
NIS（Network Information Services）服务器主要提供用户的账号、密码、家目录、UID等信息，管理帐户信息。

事实上，Network Information Service 最早应该是称为 Sun Yellow Pages (简称 yp)，也就是 Sun 这家公司出的一个名为 Yellow Pages 的服务器软件。请注意， NIS 与 YP 是一模一样的咚咚喔！这个 Yellow Pages 名字取的真是好！怎么说呢？知道黄页 (Yellow Pages) 是什么吗？就是我们家里的电话簿啦！ 今天如果你要查寻一家厂商的电话号码，通常就是直接去查黄页上面的纪录来取得电话号码啊！而这个 NIS 也一样，当使用者要登入时， Linux 系统就会到 NIS 服务器上面去找寻这个使用的账号与密码信息来加以比对， 以提供使用者登入之用的检验

---

## 参考文献
[nisdomainname(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/nisdomainname.1.html)
[鸟哥的Linux 私房菜-- NIS 服务器](http://cn.linux.vbird.org/linux_server/0430nis.php)
