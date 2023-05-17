## 1.命令简介
groupmod（group modify）是系统管理员命令，用于更改群组识别码或名称。

不过大家还是要注意，用户名不要随意修改，组名和 GID 也不要随意修改，因为非常容易导致管理员逻辑混乱。如果非要修改用户名或组名，则建议大家先删除旧的，再建立新的。

## 2.命令格式
```
groupmod [OPTIONS] GROUP
```

## 3.选项说明
```
-g, --gid GID
	将组 ID 改为 GID
-h, --help
	显示此帮助信息并推出
-n, --new-name NEW_GROUP
	改名为 NEW_GROUP
-o, --non-unique
	允许使用重复的 GID
-p, --password PASSWORD
	将密码更改为(加密过的) PASSWORD
```

## 4.常用示例
（1）改用户组 ID。
```
groupmod -g 8888 g5

#参看是否修改成功
tail -3 /etc/group
g3:x:889:
g4:x:889:
g5:x:8888:
```

（2）更改用户组名。
```
groupmod -n heima g5

#查看是否修改成功
tail -5 /etc/group
g3:x:889:
g4:x:889:
heima:x:8888:
```

（3）更改用户组密码。
```
groupmod -p $6$6B3fQyRr$DWk9/i2ly/8IFNA8lNReCAve6eODSGuvOD2Y2q/NGZXGgaQ9j/APs0TpA3b5nPg2VcuDyHVCz.d8zpeJYJar./ heima
```

（4）允许使用重复的 GID。
```
groupmod -g 8888 -o g4

#查看是否修改成功
tail -3 /etc/group
g3:x:889:
g4:x:8888:
heima:x:8888:
```

---
## 参考文献
[groupmod(8) manual](https://man7.org/linux/man-pages/man8/groupmod.8.html)

[CSDN.【Linux】一步一步学Linux——groupmod命令(89)](https://blog.csdn.net/dengjin20104042056/article/details/98098710)
