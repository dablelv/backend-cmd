## 1.命令简介
ntsysv 用于配置运行级别的简单界面。

ntsysv 提供了一个基于文本界面的菜单操作方式，集中管理系统不同的运行等级下的系统服务启动状态。也可以通过 chkconfig 进行配置。

在 RedHat 各个发行版，CentOS 各个版本，都自带这个工具。它具有互动式操作界面，您可以轻易地利用方向键和空格键等，开启、关闭操作系统在每个执行等级所要执行的系统服务。

## 2.命令格式
```shell
ntsysv [--back] [--level LEVELS]
```

## 3.选项说明
```
--back
 	在互动式界面里，显示 Back 按钮，而非 Cancel 按钮。 
--level <levels>
	在指定的运行级别中，决定要开启或关闭哪些系统服务。缺省为当前运行级别。
```

## 4.常用示例
（1）编辑运行级别 3 和 5。
```shell
ntsysv --level 35
```

（2）在互动式界面里，显示 Back 按钮，而非 Cancel 按钮。
```shell
ntsysv --back
```
（3）编辑运行级别需要启动的服务。
```shell
ntsysv
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2ba422ef82f34bdcb4e773320328db39.png)
使用上下箭头来查看列表。使用空格键来选择或取消选择服务。要在服务列表和"OK"、"Cancel"按钮中切换，可以使用 Tab 键。* 表明某服务被设为启动。按 F1键会弹出每项服务的简短描述。

---
## 参考文献
[ntsysv(8) - Linux man page - Die.net](https://linux.die.net/man/8/ntsysv)

<Vssue title="ntsysv" />