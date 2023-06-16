## 1.命令简介
md5sum（md5 checksum）用于产生或校验 MD5 消息摘要。

MD5 （Message Digest Algorithm 5）是 MD 算法系列中的第五个版本，是一种消息摘要算法。由美国密码学家 Ronald Linn Rivest 设计，于 1992 年公开，用以取代 MD4 算法。

MD5 对任意长度的信息逐位进行计算，产生一个二进制长度为 128 位（十六进制长度为 32 位）的散列值，不同的文件产生相同的消息摘要的可能性非常非常小。

MD5 常用于数据完整性校验、密码管理、数字签名和随机数生成等领域。如被用来验证网络文件传输的完整性，防止文件被人篡改。

MD5 在 [RFC 1321](https://www.rfc-editor.org/info/rfc1321) 有详细描述。

## 2.命令格式
```bash
md5sum [OPTION]... [FILE]...
```
FILE 可指定多个，以空格分隔。当不提供 FILE 或者 FILE 为 -，从标准输入读取文件名。

## 3.选项说明
```bash
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
（1）生成文件的 MD5 值，以文件 /etc/passwd 为例。
```bash
md5sum /etc/passwd

33c5d3c6b45034fe92c4aa65cfdcaba4  /etc/passwd
```
其中，第一个字段为文件的 MD5 哈希值，第二个字段为文件路径。

（2）生成文件的 MD5 输出到指定文件。
```bash
md5sum /etc/passwd > passwd.md5
```

（3）校验文件的 MD5 值。

使用上面第二步生成的校验文件。
```bash
md5sum -c passwd.md5

/etc/passwd: OK
```
从输出结果看出，文件的 md5 值校验成功。

（4）从标准输入读取文件。
```bash
md5sum
```
随后输入文件名，然后回车，最后以 Ctrl + D 结束输入。

## 5.安全性
然而，随着时间的推移，MD5 的安全性逐渐受到质疑。

2004 年，MD5 被证明无法防止碰撞（collision），因此不适用于安全性认证，如数字签名、数据完整性校验等用途。专家一般建议改用其他算法，如 SHA2。

总的来说，MD5 是一种过时的哈希算法，在安全性方面存在漏洞，因此不建议在新的加密应用中使用它。对于现有使用 MD5 的系统，为了保证数据的安全性，应该考虑迁移到更强大和安全的哈希函数。

---
## 参考文献
[md5sum(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/md5sum.1.html)

<Vssue title="md5sum" />