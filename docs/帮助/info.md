## 1.命令简介
info 用于阅读 info 格式的帮助文档。

就内容来说，info 页面比 man 页面编写得要更好、更容易理解，但 man 页面阅读起来更加方便。一个 man 页面只有一级标题，而 info 页面将内容组织成多级标题，每个标题称为结点，每个标题下可能存在子标题（称为子结点）。

要理解 info 命令，不仅要学习如何在单个结点中浏览，还要学习如何在结点和子节点之间切换。

就便捷而言，建议使用 man 而不是 info。

## 2.命令格式
```shell
info [<options>] [<menu-item> ...]
```
使用 -f 可以查看指定主题的 info 格式文档，主题可以是命令、函数或配置文件。

如果指定 menu-item 则跳转到对应的结点。

可以指定多个 menu-item，有层级关系，使用空格隔开，表示跳转到对应的结点。

不带选项和参数单独执行 info，进入目录结点，提供了主要主题的菜单。

## 3.选项说明
```
-k, --apropos=STRING
	在所有手册的所有索引中查找 STRING
-d, --directory=DIR
	添加包含 info 格式帮助文档的目录
--dribble=FILENAME
	将用户按键记录在指定的文件
-f, --file=FILENAME
	指定要读取的 info 格式的帮助文档。
-h, --help
	显示帮助信息并退出
--index-search=STRING
	转到由索引项 STRING 指向的节点
-n, --node=NODENAME
	指定首先访问的 info 帮助文件的节点
-o, --output=FILENAME
	输出被选择的节点内容到指定的文件
-R, --raw-escapes
	输出原始 ANSI 转义字符(默认)
--no-raw-escapes
	转义字符输出为文本
--restore=FILENAME
	从文件 FILENAME 中读取初始击键
-O, --show-options, --usage
	转到命令行选项节点
--strict-node-location
	(用于调试)按原样使用 info 文件指针
--subnodes
	递归输出菜单项
--vi-keys
	使用类 vi 和类 less 的绑定键
--version
	显示版本并退出。
-w, --where, --location
	显示 info 文件路径。
```
## 4.交互式命令
不同于 man 使用的 less 的交互式命令，info 有自己的交互式命令。

常用的交互式命令有：
```
h, ?
	显示帮助窗口。
x
	关闭帮助窗口。
q
	关闭整个 info。
Up
	向上键，向上移动一行。
Down
	向下键，向下移动一行。
Space, PageDown
	翻滚到下一页，当前页的最后两行保留为下一页的起始两行。
Del, PageUp
	翻滚到上一页，当前页的起始两行保留为上一页的最后两行。
b, t, Home
	跳转到文档的开始。
e, End
	跳转到文档的末尾。
[
	转到文档中的上一个节点
]
	转到文档中的下一个节点
n
	转到与当前 Node 同等级的下一个 Node
p
	转到与当前 Node 同等级的前一个 Node
u
	转到与当前 Node 关联的上一级 Node。
d
	转到主“目录” Node。
l
	回到上一次访问的 Node。
m
	输入指定菜单的名字后按回车，跳转到指定的菜单项。
g
	输入 Node 后按回车，跳转到指定的 Node。功能等同于 m。
```

## 5.常用示例

（1）查看命令的 info 格式帮助文档。

如查看 info 命令的 info 格式的帮助文档。
```
$ info info
```
（2）查看命令的 info 格式帮助文档并跳转至指定 Node。

如查看 info 命令的 info 格式的帮助文档，并跳转到 Advanced 节点。
```shell
$ info info Advanced
```
如果想跳转到 Advanced 结点下的子结点，可以在命令行上继续指定子结点，如跳转到 "Go to node"。
```shell
$ info info "Advanced" "Go to node"
```
（3）查看 info 命令的 info 格式的帮助文档地址。
```
$ info -w info
/usr/share/info/info.info.gz
```

---

## 参考文献

[info(1) manual - linux.org](https://www.linux.org/docs/man1/info.html)

[Linux 命令大全.info 命令](https://man.linuxde.net/info)
