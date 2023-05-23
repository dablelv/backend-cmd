## 1.命令简介
sz（Send ZMODEM）通过 ZMODEM 协议，将多个文件从远程服务器下载到本地。

注意不能下载文件夹，如果下载文件夹，请先打包再下载。

## 2.命令格式
```
sz [OPTIONS] FILES
```

## 3.选项说明
命令选项基本与 rz 相同，可运行命令`sz -h`查看。

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

## 4.常用示例
（1）下载多个文件
```
sz  file1 file2 file3
```
实测 sz 不用选项`-bye`，使用 XShell，也可以正确传输文本文件与二进制文件。

## 5.FAQ
（1）sz 如何下载文件夹？

很遗憾，sz 不能直接下载文件夹，可先将文件夹打包，当作文件下载。

（2）经常把 rz 和 sz 弄混淆，该如何正确记忆？

之所以将 rz 称之为上传工具，是因为我们以本地机器为中心。从远程服务器的角度，很容易理解 rz 为什么叫作 Receive ZMODEM，因为服务器需要从本地机器接收文件。sz 命令则表示从服务器发送文件到本地，也叫下载文件。

（3）如何安装 rz 与 sz？

 rz 与 sz 对应的安装包为 [lrzsz](https://www.ohse.de/uwe/software/lrzsz.html)，在不同的 Linux 发行版本，使用对应的安装工具进行安装即可。
```shell
# RedHat 系列：CentOS/Fedora
yum install lrzsz

# Debian 系列：Debian/Ubuntu
apt install lrzsz
```

---
## 参考文献
[rz(1) - Linux man page - die.net](https://linux.die.net/man/1/rz)

[sz(1) - Linux man page - die.net](https://linux.die.net/man/1/sz)

[利用SecureCRT上传、下载文件（使用sz与rz命令），超实用！](http://blog.csdn.net/lioncode/article/details/7921525)

[lrzsz: free x/y/zmodem implementation - ohse.de](https://www.ohse.de/uwe/software/lrzsz.html)

<Vssue title="sz" />