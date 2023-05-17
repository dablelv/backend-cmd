## 1.命令简介
id 命令用于查看真实有效的用户 ID（UID）和组 ID（GID）。

## 2.命令格式
```shell
id [OPTION]... [USER]
```
OPTION 和 USER 都是可选的，如果不提供 USER，则打印当前用户的 ID 信息。

## 3.选项说明
```
-a
	忽略, 仅为与其他版本相兼容而设计
-Z, --context
	显示当前用户的安全环境（仅当系统支持 SELinux 时可用）
-g, --group
	仅显示用户所属的主组
-G, --groups
	显示用户所有的属组，包括附属组
-n, --name
	对于 -ugG 显示名称而不是替数字 ID
-r, --real
	 对于 -ugG 显示真实 ID 而不是有效 ID
-u, --user
	只显示有效用户 ID
-z, --zero
	使用 NUL 字符分隔条目而不是空格符。默认输出格式不支持该选项
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）查看当前用户 root 与属组的信息。
```
id
uid=0(root) gid=0(root) groups=0(root)
```
输出结果中，uid 表用用户 ID，gid 表示用户主组  ID，groups 表示用户所有的属组。从 groups 可以看出，当前用户 root 只属于主用户组 root，没有附属组。

（2）查看当前用户 root 的主组 ID。
```
id -g
0
```
0 表示用户组 root 的组 ID。

（3）查看当前用户主组的名称。
```
id -gn
root
```

---
## 参考文献
[id(1) — Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/id.1.html)
