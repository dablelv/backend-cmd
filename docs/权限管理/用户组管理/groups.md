## 1.命令简介
groups 用于查询用户所在的组。

## 2.命令格式
```
groups [OPTION]... [USERNAME]...
```
显示每个输入的用户名所在的全部组，如果没有指定用户名则默认为当前进程用户（当用户组数据库发生变更时可能导致差异）。

## 3.选项说明
```
--help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.常用示例
（1）显示当前用户所属的组。
```
groups
root
```
当前用户为 root，且只有一个主用户组 root。

（2）查看用户 root 所属的组。
```
groups root
root : root
```

## 5.拓展知识

除了使用 grpups 命令查看用户属于哪些组，还可以使用如下几种方法。

（1）查看 /etc/group。
/etc/group 是用户组配置文件，可以查看此文件通过 grep 命令查询某个用户所在的用户组。例如查看 root 所在的用户组
```shell
grep root /etc/group
root:x:0:
```
可见 root 只属于同名的主组 root，不属于其它的任何组。

（2）通过 id 命令。
```shell
id root
uid=0(root) gid=0(root) groups=0(root)
```
第三列表示用户所属的用户组列表，同时输出组的 ID。

---
## 参考文献
[groups(1) manual - linux.org](https://www.linux.org/docs/man1/groups.html)

[linux怎么查看当前用户属于哪个用户组?](https://www.jb51.net/LINUXjishu/571236.html)
