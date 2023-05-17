## 1.命令简介
c++filt 命令可用于解析 C++ 和 Java 中被修饰的符号，比如变量与函数名称。

我们知道， 在 C++ 和 Java 中， 允许函数重载，也就是说我们可以写出多个同名但参数类型不同的函数，其实现依赖于编译器的名字改编（Name Mangling）机制，即编译器会将函数的名称进行修饰，加入参数信息。

考察如下程序：
```cpp
//
//@file:print.cpp
//

#include <iostream>
#include <string>
using namespace std;

const int dTest=0;

void print(const string& strElfFileName)
{
        std::cout<<"readelf "<<strElfFileName<<std::endl;
}
```
使用 g++ 编译上面的 print.cpp 生成目标文件 print.o。
```
g++ -c print.cpp -o print.o
```
然后使用命令 strings 查找 print.o 中的可打印字符串。
```
strings print.o
readelf 
GCC: (GNU) 4.8.5 20150623 (Red Hat 4.8.5-4)
.symtab
.strtab
.shstrtab
.rela.text
.data
.bss
.rodata
.rela.init_array
.comment
.note.GNU-stack
.rela.eh_frame
print.cpp
_ZStL8__ioinit
_Z41__static_initialization_and_destruction_0ii
_ZL5dTest
_GLOBAL__sub_I__Z5printRKSs
_Z5printRKSs
_ZSt4cout
_ZStlsISt11char_traitsIcEERSt13basic_ostreamIcT_ES5_PKc
_ZStlsIcSt11char_traitsIcESaIcEERSt13basic_ostreamIT_T0_ES7_RKSbIS4_S5_T1_E
_ZSt4endlIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_
_ZNSolsEPFRSoS_E
_ZNSt8ios_base4InitC1Ev
__dso_handle
_ZNSt8ios_base4InitD1Ev
__cxa_atexit
```
找到其中两个字符串，分别是`_ZL5dTest` 和 `_Z5printRKSs` ，根据其包含的内容，我们大致能够猜测，两个字符串分别对应源码中的常量 dTest 和函数 print()。使用 c++filt 进行符号解析（symbol demangling）来验证我们的猜想。
```
c++filt _ZL5dTest
dTest

c++filt _Z5printRKSs
print(std::basic_string<char, std::char_traits<char>, std::allocator<char> > const&)
```
猜测正确，源码文件中的变量名和函数名被修饰后，通过 c++filt 命令可以还原回来，这正是 c++filt 命令的功能。

## 2.命令格式
```shell
c++filt [-_|--strip-underscore]
		[-n|--no-strip-underscore]
		[-p|--no-params]
		[-t|--types]
		[-i|--no-verbose]
		[-s format|--format=format]
		[--help]  [--version]  [symbol...]
```
注意，如果没有给出符号参数 [symbol...]，c++filt 将从标准输入中读取符号名称。

## 3.选项说明
```shell
-_, --strip-underscore
	在某些系统中，C和C++编译器都在每个名字前面加下划线。例如，C 名称 foo 获得低级名称为 _foo。此选项用于删除初始下划线，c++filt 是否默认删除下划线是依赖于目标的
-n, --no-strip-underscore
	不删除初始下划线
-p, --no-params
	当解析函数名时，不显示函数参数的类型
-t, --types
	试图解析类型与函数名
-i, --no-verbose
	输出结果中不包括任何实现细节
-s, --format=FORMAT
	c++filt 可以解析不同编译器修饰的符号，此选项用于指明符号修饰所采用的方法：
	"auto"：根据可执行文件自动选择符号解析方法，此为默认选项
	"gnu"： GNU C++ compiler （g++）的符号修饰方法
	"lucid"： Lucid compiler （lcc）的符号修饰方法
	"arm"：C++ Annotated Reference Manual 指明的方法
	"hp"：HP compiler （aCC）的符号修饰方法
	"edg"：EDG compiler 的符号修饰方法
	"gnu-v3"：GNU C++ compiler (g++) with the V3 ABI 的符号修饰方法
	"java"：GNU Java compiler （gcj）的符号修饰方法
	"gnat"：GNU Ada compiler (GNAT) 的符号修饰方法
--help
	显示帮助信息
--version
	显示版本信息
@FILE
	从文件 FILE 中读取命令行选项，读取的选项将插入到 @FILE 选项的位置。如果文件不存在，或者无法读取，那么选项 @FILE 将被按照字面意义处理，而不是被忽略
```

## 4.常用示例
（1）解析编译器 g++ 修饰的函数名称。还是以第一节“1.命令简介”中函数 print() 的名字为例。
```
c++filt -s gnu-v3 _Z5printRKSs
print(std::basic_string<char, std::char_traits<char>, std::allocator<char> > const&)
```
（2）解析编译器 g++ 修饰的函数名称，但不显示函数参数类型。
```
c++filt -p _Z5printRKSs
print
```
（3）解析编译器 g++ 修饰的变量名称。还是以第一节“1.命令简介”中变量 dTest 的名字为例。
```
c++filt _ZL5dTest
dTest
```

---
## 参考文献
[c++filt(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/c++filt.1.html)

[mangle和demangle](https://www.cnblogs.com/BloodAndBone/p/7912179.html)
