## 1.命令简介
sha1sum（sha1 checksum）用于产生和校验 SHA1 消息摘要。

SHA1（Secure Hash Algorithm 1）是一种哈希函数，由美国国家安全局（NSA）设计，于 1995 年发布。

SHA1 对任意长度的信息逐位进行计算，产生一个二进制长度为 160 位（十六进制长度为 40 位）的散列值，不同的文件产生相同的消息摘要的可能性非常非常之低。

SHA1 通常用于数字签名、数据完整性校验、密码管理和随机数生成等领域。

SHA1 的实现在 [FIPS-180-1](https://csrc.nist.gov/publications/detail/fips/180/1/archive/1995-04-17) 有详细描述。

## 2.命令格式
```shell
sha1sum [OPTION]... [FILE]...
```
FILE 可指定多个，以空格分隔。当不提供 FILE 或者 FILE 为 -，从标准输入读取文件名。

## 3.选项说明
选项与 md5sum 完全一致。

```shell
-b, --binary
	以二进制模式读取文件，而不是默认的文本模式。
-c, --check
	检验文件的 MD5 值。给定的文件中每一行的内容是 md5sum 的输出结果，即 md5-value  filename（文本输入模式）或 md5-value *filename（二进制输入模式）
--tag
	创建 BSD 风格的输出行。
-t, --text
	以文本模式读取（默认）。输出时，文本输入模式在文件名前是两个空格，二进制输入模式在文件名前是一个空格和星号。注意，在 GNU 系统中，-b 与 -t 选项在读取时没有差别。
-z, --zero
 以 NUL 结束每个输出行，而不是换行，并禁用文件名转义。
--help
	显示帮助信息并退出。
--version
	输出版本信息并退出。

以下选项只在校验 MD5 值时有效：
--quiet
	校验成功的文件不打印 OK。
--status
	不输出任何校验成功与失败的信息，使用命令返回码来表示是否校验成功，0 成功，非 0 失败。
--strict
	在校验文件 MD5 时，遇到非法格式的校验行，命令返回非 0 状态码。
-w, --warn
	在校验文件 MD5 时，遇到非法格式的校验行发出告警。
```

## 4.常用示例
（1）生成文件的 SHA1 值，以文件 /etc/passwd 为例。
```bash
sha1sum /etc/passwd

87b157ac4faefa51e63c38b1be24cd8f70373bb2  /etc/passwd
```
其中，第一个字段为文件的 SHA1 哈希值，第二个字段为文件路径。

（2）生成文件的 SHA1 值到输出到指定文件。
```bash
sha1sum /etc/passwd > passwd.sha1
```

（3）校验文件的 SHA1 值。

使用上面第二步生成的校验文件。
```bash
sha1sum -c passwd.sha1

/etc/passwd: OK
```
从输出结果看出，文件的 sha1 值校验成功。

（4）从标准输入读取文件。
```bash
sha1sum
```
随后输入文件名，然后回车，最后以 Ctrl + D 结束输入。

## 5.安全性
然而，随着时间的推移，SHA-1的安全性逐渐受到质疑。

在 2005 年，针对 SHA1 的首个理论性攻击被提出，该攻击使得 SHA1 的碰撞（collision）攻击成为可能。碰撞攻击是指找到两个不同的输入数据，但它们生成相同的哈希值。随着计算能力的增强和攻击方法的改进，SHA-1的碰撞攻击变得更加实际可行。

由于 SHA1 的安全性问题，许多安全机构和标准化组织已经不推荐使用 SHA1，而是转向更安全的哈希函数，如 SHA256 和 SHA3 系列。如 Web 浏览器和操作系统已经逐渐停止对使用 SHA1 签名的数字证书的支持。

总的来说，SHA1 是一种过时的哈希算法，在安全性方面存在漏洞，因此不建议在新的加密应用中使用它。对于现有使用 SHA1的系统，为了保证数据的安全性，应该考虑迁移到更强大和安全的哈希函数。

---
## 参考文献
[sha1sum(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/sha1sum.1.html)

<Vssue title="sha1sum" />