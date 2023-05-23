## 1.命令简介
whoami 打印当前用户名。

whoami 打印与当前有效用户 ID 关联的用户名。与 id -un 相同。

## 2.命令格式
```shell
whoami [<OPTION>]...
```
## 3.选项说明
```
--help
	显示此帮助信息并退出。
--version
	显示版本信息并退出。
```
## 4.常用示例
查询当前登录的用户名。
```shell
whoami
root
```
或者
```shell
id -un
root
```

---
## 参考文献
[whoami(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/whoami.1.html)

<Vssue title="whoami" />