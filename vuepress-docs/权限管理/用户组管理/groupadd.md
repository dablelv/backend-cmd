## 1.命令简介
groupadd 是系统管理员命令，用于创建一个新组。

groupadd 命令使用命令行上指定的值以及系统中的默认值创建一个新的组帐户。新组将根据需要被添加到系统文件中。

## 2.命令格式
```
groupadd [OPTIONS] GROUP
```

## 3.常用选项
```
  -f, --force
  	如果组已经存在则成功退出并且如果 GID 已经存在则取消 -g
  -g, --gid GID
  	为新组使用 GID
  -h, --help
  	显示帮助信息并推出
  -K, --key KEY=VALUE
  	不使用 /etc/login.defs 中的默认值
  -o, --non-unique
  	允许创建有重复 GID 的组
  -p, --password PASSWORD
  	为新组使用加密过的密码
  -r, --system
  	创建一个系统组
```

## 4.参考示例
（1）添加一个用户组。
```
groupadd  g1
```
（2）添加一个用户组并指定GID。
```
groupadd -g 888 g2
```
（3）使用 -r 创建系统工作组。
```
groupadd -r -g 889 g3
```

（4）允许创建有重复 GID 的组。
```
groupadd -o -r -g 889 g4

#查看新创建的用户组
tail -n 3 /etc/group
g2:x:888:
g3:x:889:
g4:x:889:
```

（5）为新组使用加密过的密码。
```
groupadd -p $6$6B3fQyRr$DWk9/i2ly/8IFNA8lNReCAve6eODSGuvOD2Y2q/NGZXGgaQ9j/APs0TpA3b5nPg2VcuDyHVCz.d8zpeJYJar./ g5
```

## 5.相关文件
```
/etc/group		#群组信息
/etc/gshadow	#群组加密信息
```

---
## 参考文献
[groupadd(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/groupadd.8.html)

[CSDN.【Linux】一步一步学Linux——groupadd命令(87)](https://blog.csdn.net/dengjin20104042056/article/details/97973193)

<Vssue title="groupadd" />