## 1.命令简介
as 命令是二进制工具集 [GNU Binutils](https://www.gnu.org/software/binutils/) 的一员，是 GNU 推出的一款汇编语言编译器集，用于将汇编代码编译为二进制代码，它支持多种不同类型的处理器。

## 2.命令格式
```
as [OPTIONS] --|FILES
```

## 3.选项说明
```
@FILE
	从文件 FILE 中读取命令行选项，读取的选项将插入到原始 @FILE 选项的位置
-a[cdghlmns]
	开关列表。以下选项可以进行组合；如果使用=FILE选项，必须是最后一个。默认地，-a 等于 -ahls。
	-ac：忽略失败条件； 
	-ad：忽略调试指令； 
	-ah：包括高级源； 
	-al：包括装配； 
	-am：包括宏扩展； 
	-an：忽略形式处理； 
	-as：包括符号； 
	=FILE：指定列出文件的名字； 
--alternate
	以交替宏模式开始
--debug-prefix-map OLD=NEW
	在旧目录中汇编文件时，记录调试信息，将其描述为新目录
--defsym SYM=VALUE
	对输入文件进行汇编时，将指定符号设置为指定值。VALUE 必须是整型常量
-f
	表示 fast，跳过空白和注释预处理
-g, --gen-debug
	产生调试信息
--help
	显示帮助信息
-I DIR
	将目录 DIR 加入到指令 .include 的搜索列表
-J
	符号溢出不警告
-K
	当长位移改变了不同的表时发出警告
-L, --keep-locals
	在符号表中保留本地符号
-o OBJFILE
	指定要生成的目标文件
-R
	将数据段折叠到代码段
--statistics
	打印汇编所用的最大空间和总时间
--strip-local-absolute
	从传出符号表中删除本地绝对符号
-v, -version
	打印版本信息不退出
--version
	打印版本信息并退出
-W, --no-warn
	不显示告警信息
--fatal-warnings
	将告警视为错误
--warn
	显示告警或将告警视为错误
-Z
	产生目标文件即使发生错误
-- | FILES
	从标准输入读取或由文件指定汇编代码
```

## 4.常用示例
（1）假设有汇编文件 test.s，将其会变成二进制 .o 文件。
```
as test.s -o test.o
```

---
## 参考文献
[as(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/as.1.html)

[GNU Binutils](https://www.gnu.org/software/binutils/)
