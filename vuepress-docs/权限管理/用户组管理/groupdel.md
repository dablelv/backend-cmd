## 1.命令简介
groupdel（group delete）命令是系统管理员命令，用于删除一个组。

groupdel 命令用于删除指定的工作组，本命令要修改的系统文件包括 /ect/group 和 /ect/gshadow。

## 2.命令格式
```
groupdel [OPTIONS] GROUP
```

## 3.常用选项
```
-h, --help
  	显示此帮助信息并推出
```

## 4.常用示例
（1）删除用户组
```
groupdel g1
```

（2）查看帮助信息。
```
groupdel -h
```

---
## 参考文献
[groupdel(8) manual](https://linux.die.net/man/8/groupdel)

CSDN.【Linux】一步一步学Linux——groupdel命令(88)](https://blog.csdn.net/dengjin20104042056/article/details/98095658)
