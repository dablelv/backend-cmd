## 1.命令简介
scp（secure copy）是 [OpenSSH](https://www.openssh.com/) 套件中的安全远程文件拷贝工具。

scp 基于 SSH 协议可安全地进行远程文件拷贝，数据传输过程会进行加密。和它类似的命令有 cp，不过 cp 只能在本机进行拷贝不能跨服务器，而且 scp 支持对传输的数据进行加密。

## 2.命令格式
```
scp [-1246BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file] [-l limit] [-o ssh_option] [-P port] [-S program] 
	[[user@]host1:]file1 ... [[user@]host2:]file2
```

## 3.选项说明
```
-1
	使用 SSH 协议版本 1
-2
	使用 SSH 协议版本 2
-4
	使用 ipv4
-6
	使用 ipv6
-B
	以批处理模式运行，阻止 scp 询问口令
-C
	使用压缩，将 -C 标志传递给 SSH，从而打开压缩功能
-c CIPHER
	使用指定的秘钥对传输的文件进行加密
-F SSH_CONFIG
	指定 SSH 配置文件
-i IDENTITY_FILE
	从指定文件中读取传输时使用的密钥，此参数直接传递给 ssh
-l LIMIT
	指定宽带限制
-o SSH_OPTION
	指定使用的 ssh 选项，可以使用 SSH_CONFIG 中使用的 ssh 选项
-P PORT
	指定远程主机的端口号
-p
	保留文件的最后修改时间，最后访问时间和权限模式
-q
	静默模式，不显示复制进度以及来自 ssh 的警告和诊断消息
-r
	以递归方式复制整个目录
-S PROGRAM
	指定加密传输时所使用的程序。此程序必须能够理解 ssh 的选项
-v
	使用冗余模式，使 scp 和 ssh 打印调试信息以及进度
```
**注意事项：**
（1）scp 返回 0 成功，>0 失败；
（2）使用 scp 在不同主机之间进行文件传输，需要确保两台设备都开启了ssh远程登录服务，且两台设备能互相通信；
（3）使用 scp 命令要确保使用的用户具有可读取远程服务器相应文件的权限，否则scp 命令无法起作用。

## 4.常用示例
（1）远程主机之间拷贝多个文件。

方法一：将多个文件放在同一个目录中，使用`scp -r`拷贝。
```shell
scp -r UerName@SrcHostName:SrcDir UserName@DstHostName:DstDir
```
方法二：将多个文件或者目录使用 tar 打包后作为单个文件传输。

方法三：scp 支持同时拷贝多个文件。
```shell
scp file1 file2 remote_username@remote_ip:remote_folder 
```

（2）复制本地文件到远程。
```shell
scp local_file [remote_username@]remote_ip:remote_file
# 或
scp local_file [remote_username@]remote_ip:remote_dir
```
用户名是可选的，可以在命令执行后需要输入用户名和密码。

（3）复制本地目录到远程。
```shell
scp -r local_dir [remote_username@]remote_ip:remote_dir
```

（4）从远程复制文件或目录到本地。

从远程复制文件或目录到本地，只要将从本地复制文件或目录到远程命令的两个参数调换位置即可。
```shell
# 复制单个文件
scp [remote_username@]remote_ip:remote_file local_file
scp [remote_username@]remote_ip:remote_file local_dir

# 以递归方式复制整个目录
scp -r [remote_username@]remote_ip:remote_dir local_dir
scp -r [remote_username@]remote_ip:remote_dir local_dir
```
如果远程服务器防火墙有为 scp 命令设置了指定的端口，我们需要使用 -P 参数来设置命令的端口号。
```shell
scp -P 4588 remote@example.com:/usr/local/sin.sh /home/administrator/
```

（5）使用 expect 和 scp 实现不同主机之间文件的自动传输。

```shell
#!/usr/bin/expect

set timeout 5
spawn scp dablelv@172.25.44.22:/yourpath/yourfile root@10.130.89.104:/destinationpath
expect "dablelv@172.25.44.22's password:"
send "123456\n"
expect "root@10.130.89.104's password:"
send "123456\n"
interact eof
```
脚本解释：

第一行：`#!/usr/bin/expect` 指明该脚本由expect来解析。这里的expect其实和linux下的bash、Windows下的cmd.exe是一类东西，都是可执行程序，也可用于脚本的解析器。expect的主要作用是解析自动交互的脚本，比如实现ssh的自动登录，无需手动输入密码等。

第二行：`set timeout 5` 用于设置expect的expect命令的等待时间为5秒，如果expect等待的值在5秒内没有出现在标准输出，那么expect脚本继续执行。expect的默认timeout为10s。

第三行：`spawn scp dablelv@172.25.44.22:/yourpath/yourfile `。spawn是expect的内置命令，不是Linux可执行程序，使用`which spawn` 是查不到spawn所在路径的。这个就好比cd是shell的内建命令，离开shell，就无法执行cd一样。 它主要的功能是给ssh运行进程加个壳，用来传递交互指令。 它主要的功能是给后面需要执行的命令加个壳，用来传递交互指令。

第四行：`expect "dablelv@172.25.44.22's password:"` expect命令也是expect的内建命令，其作用就是等待标准输出出现指定的值，如果有则立即返回，向下执行；否则就一直等待，等待的最长时间由上面的`set timeout`来指定。

第五行：`send "123456\n"`就是在expect等待到指定的值之后向标准输出发送的值，这里就是执行交互动作，与手工输入密码的动作等效。效果上跟用户手动在终端上输入123456之后敲一个回车一样。

第六、七行实现的功能同第五六行，因为scp需要登录到两个主机实现文件的网络传输，所以这里是登录第二台主机需要输入的密码。

第八行：`interact eof` 表示expect脚本执行结束。执行完成上述命令后，此时Expect会把控制权交给控制台，这个时候就变回手工操作。如果是使用ssh登录其它主机的话，需要保持在交互状态，那么此时需要`interact`，如果没有这一句登录完成后会立刻退出，而不是留在远程终端上。如果你只是登录过去执行一段命令就退出，可将其改为`expect eof`。

如果出现 ": no such file or directory 这样的错误，很可能是因为在本地Windows环境编辑，上传到Linux下执行因文件格式不同导致的，可使用vi或者vim在末行模式使用`:set ff`来查看文件格式，如果是dos格式的话，那么需要使用`:set ff=unix` 来改变文件格式。

---
## 参考文献
[scp(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/scp.1.html)

[scp命令 - Linux命令大全](http://man.linuxde.net/scp)

[Linux scp命令](http://www.runoob.com/linux/linux-comm-scp.html)

[expect简单教程 ](http://www.cnblogs.com/gylei/archive/2013/05/11/3072331.html)

<Vssue title="scp" />