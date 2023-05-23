## 1.命令简介
rename 用于重命名文件。

rename 功能类似于 mv，可实现文件或目录的重命名。mv 不能批量处理，而 rename 可以。

## 2.命令格式
```
rename [OPTIONS] EXPRESSION REPLACEMENT FILE...
```
EXPRESSION：原字符串，即文件名需要替换的字符串；
REPLACEMENT ：目标字符串，将文件名中含有的原字符替换成目标字符串；
FILE...：指定要改变文件名的文件列表。

rename 支持的通配符：
```
?    可替代单个字符
*    可替代多个字符
[charset] 可替代charset集中的任意单个字符
```

## 3.选项说明
```
-s, --symlink
	不要重命名符号链接，而是重命名它的目标
-v, --verbose
	以冗余模式运行，显示哪些文件已被重命名
-o, --no-overwrite
	不要覆盖现有文件
-i, --interactive
	更名前询问是否确定
-h, --help
	显示帮助信息并退出
-V, --version
	显示版本信息
```

## 4.常用示例
（1）重命名文件 lvlv 为 lala。
```
rename v a lv??
```

（2）将当前目录下的所有文件的后缀名由 .html 改为 .php。
```
rename .html .php *
```

---
## 参考文献
[rename(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/rename.1.html)

[Linux命令大全.rename命令](http://man.linuxde.net/rename)

<Vssue title="rename" />