## 1.命令简介
ldconfig 用于配置动态链接器运行时绑定的动态库。

ldconfig 命令用于在默认搜寻目录 /lib 和 /usr/lib 以及动态库配置文件 /etc/ld.so.conf 内所列的目录下，搜索出可共享的动态链接库（格式如 lib*.so*），进而创建出动态链接器（ld.so 或 ld-linux.so）所需的缓存文件。

缓存文件默认为 /etc/ld.so.cache，此文件保存已排好序的动态链接库名字列表。为了让动态链接库为系统所共享，需运行动态链接库的管理命令 ldconfig 更新动态链接库的缓存文件。

ldconfig 位于 /sbin 目录下，通常在系统启动时运行，当用户安装了一个新的动态链接库时，需要手动运行这个命令。

## 2.命令格式
```
/sbin/ldconfig [ -nNvXV ] [ -f conf ] [ -C cache ] [ -r root ] directory ...
/sbin/ldconfig -l [ -v ] library ...
/sbin/ldconfig -p
```

## 3.参数说明
```
-v, --verbose
	用此选项时，ldconfig 将显示正在扫描的目录及搜索到的动态链接库，还有它所创建的链接的名字

-n
	ldconfig仅扫描命令行指定的目录，不扫描默认目录（/lib、/usr/lib），也不扫描配置文件 /etc/ld.so.conf 所列的目录。

-N
	ldconfig 不重建缓存文件（/etc/ld.so.cache），若未用 -X 选项，ldconfig 照常更新文件的链接

-X
	ldconfig 不更新文件的链接，若未用 -N 选项，则缓存文件照常重建

-f <conf >
	指定动态链接库的配置文件为 <conf > ，系统默认为 /etc/ld.so.conf

-C <cache>
	指定生成的缓存文件为 <cache>，系统默认的是 /etc/ld.so.cache，此文件存放已排好序的可共享的动态链接库的列表

-r <root>
	改变应用程序的根目录为 <root>（是调用 chroot 函数实现的）。选择此项时，系统默认的配置文件 /etc/ld.so.conf，实际对应的为 <root>/etc/ld.so.conf。如用 -r /usr/zzz时，打开配置文件 /etc/ld.so.conf 时，实际打开的是 /usr/zzz/etc/ld.so.conf 文件。用此选项，可以大大增加动态链接库管理的灵活性

-l
	通常情况下，ldconfig 搜索动态链接库时将自动建立动态链接库的链接，选择此项时，将进入专家模式，需要手工设置链接，一般用户不用此项

-p, --print-cache
	ldconfig 打印出当前缓存文件保存的所有共享库的名字

-c FORMAT 或 --format=FORMAT：此选项用于指定缓存文件所使用的格式，共有三种：old(老格式)，new(新格式)和compat（兼容格式，此为默认格式）。

-V
	打印出 ldconfig 的版本信息

-?, --help, --usage
	这三个选项作用相同，都是让ldconfig打印出其帮助信息
```

## 4.常用示例
（1）显示 ldconfig 帮助信息。
```
ldconfig -?
```
（2）显示 ldconfig 版本信息。
```
ldconfig -V
```
（3）刷新动态链接库缓存文件  /etc/ld.so.cache。
```
sudo ldconfig
```

## 5.注意事项
（1）往 /lib 和 /usr/lib 里面加动态链接库，不用修改 /etc/ld.so.conf，但是完了之后要调一下 ldconfig，不然这个库会找不到。

（2）想往上面两个目录以外加东西的时候，一定要修改 /etc/ld.so.conf，然后再调用 ldconfig，不然也会找不到。

比如安装了一个 mysql 到 /usr/local/mysql，mysql 有一大堆 library在 /usr/local/mysql/lib 下面，这时就需要在 /etc/ld.so.conf 里面加一行 /usr/local/mysql/lib，保存过后执行 ldconfig 更新一下动态链接库缓存  /etc/ld.so.cache，新的 library 才能在程序运行时被找到。

（3）如果想在 /lib 和 /usr/lib 这两个目录以外放 lib，并且又不想在 /etc/ld.so.conf 中加动态链接库的目录（或者是没有权限加）。那么可以 export 一个全局变量 LD_LIBRARY_PATH，然后运行程序的时候就会去这个目录中找 library。一般来讲这只是一种临时的解决方案，在没有权限或临时需要的时候使用。

（4）ldconfig 更新动态链接库的缓存文件只与程序运行时有关，跟编译时没有关系。编译时需要加 -L 就得加，不要混淆了。

（5）总之，就是不管做了什么关于 library 的变动后，最好都 ldconfig 一下，不然会出现一些意想不到的结果。不会花太多的时间，但是会省很多的事。

---
## 参考文献
[ldconfig(8) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man8/ldconfig.8.html)

[Linux 命令大全.ldconfig命令](https://man.linuxde.net/ldconfig)
