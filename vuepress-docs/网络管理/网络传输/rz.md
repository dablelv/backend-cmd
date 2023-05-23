## 1.命令简介
rz 命令（Receive ZMODEM），使用 ZMODEM 协议，将本地文件批量上传到远程 Linux/Unix 服务器。

注意不能上传文件夹。

当我们使用虚拟终端软件，如 XShell、SecureCRT 或 PuTTY 来连接远程服务器后，使用 rz 命令可以上传本地文件到远程服务器。输入 rz 回车后，会出现文件选择对话框，选择需要上传文件，一次可以指定多个文件，上传到服务器的路径为当前执行 rz 命令的目录。

此外，可以在虚拟终端软件设置上传时默认加载的本地路径和下载的路径。如 SecureCRT 中 Options -> session options -> X/Y/Zmodem 下可以设置上传和下载的目录。

## 2.命令格式
```
rz [OPTIONS]
```

## 3.选项说明
```
-+, --append
	将文件内容追加到已存在的同名文件
-a, --ascii
	以文本方式传输
-b, --binary
	以二进制方式传输，推荐使用
--delay-startup N
	等待 N 秒
-e, --escape
	对所有控制字符转义，建议使用
-E, --rename
	已存在同名文件则重命名新上传的文件，以点和数字作为后缀
-p, --protect
	对 ZMODEM 协议有效，如果目标文件已存在则跳过
-q, --quiet
	安静执行，不输出提示信息
-v, --verbose
	输出传输过程中的提示信息
-y, --overwrite
	存在同名文件则替换
-X, --xmodem
	使用 XMODEM 协议
--ymodem
	使用 YMODEM 协议
-Z, --zmodem
	使用 ZMODEM 协议
--version
	显示版本信息
--h, --help
	显示帮助信息
```
以上为常见的命令选项，更多的选项说明，请参见rz的帮助手册。

## 4.常用示例
（1）以二进制，并对控制字符进行转义，替换已存在的同名文件。
```
rz -bye
```

## 5.FAQ
（1）rz 如何上传文件夹？

很遗憾，rz 不能直接上传文件夹，可先将文件夹打包，当作文件下载。

（2）经常把 rz 和 sz 弄混淆，该如何正确记忆？

之所以将 rz 称之为上传工具，是因为我们以本地机器为中心。从远程服务器的角度，很容易理解 rz 为什么叫作 Receive ZMODEM，因为服务器需要从本地机器接收文件。sz 命令则表示从服务器发送文件到本地，也叫下载文件。

（3）如何安装 rz 与 sz？

 rz 与 sz 对应的安装包为 [lrzsz](https://www.ohse.de/uwe/software/lrzsz.html)，在不同的 Linux 发行版本，使用对应的安装工具安装即可。
```shell
# RedHat 系列：CentOS/Fedora
yum install lrzsz

# Debian 系列：Debian/Ubuntu
apt install lrzsz
```

---
# 参考文献
[rz(1) - Linux man page - die.net](https://linux.die.net/man/1/rz)

[sz(1) - Linux man page - die.net](https://linux.die.net/man/1/sz)

[利用SecureCRT上传、下载文件（使用sz与rz命令），超实用！](http://blog.csdn.net/lioncode/article/details/7921525)

[lrzsz: free x/y/zmodem implementation - ohse.de](https://www.ohse.de/uwe/software/lrzsz.html)

<Vssue title="rz" />