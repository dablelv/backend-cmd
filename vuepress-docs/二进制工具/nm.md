## 1.命令简介
nm（names） 是 [GNU Binutils](https://www.gnu.org/software/binutils/) 二进制工具集的一员，用于显示目标文件中的符号。

如果没有为 nm 命令指明目标文件，缺省目标文件是 a.out。

nm 命令显示的符号类型，至少使用以下类型，其他类型取决于目标文件格式。符号类型如果是小写，符号通常是本地的；如果是大写，符号是全局的（外部的）。但是，有一些小写符号类型表示特殊的全局符号，例如 u、v 和 w。
```
A
该符号的值是绝对的，在以后的链接过程中，不允许进行改变。这样的符号值，常常出现在中断向量表中，例如用符号来表示各个中断向量函数在中断向量表中的位置。

b,B
该符号的值出现在非初始化数据段（BSS）中。例如，在一个文件中定义全局static int test。则该符号test的类型为b，位于bss section中。其值表示该符号在BSS段中的偏移。

C
该符号为common。common symbol是未初始化的数据。该符号没有包含在一个普通section中，只有在链接过程中才进行分配。符号的值表示该符号需要的字节数。例如在一个C文件中，定义int test，并且该符号在别的地方会被引用，则该符号类型即为C，否则其类型为B。

d,D
该符号位于初始化数据段（data section）。例如定义全局变量 int baud_table[5] = {9600, 19200, 38400, 57600, 115200}，则会被分配在初始化数据段中。

g,G
该符号也位于初始化数据段中。主要用于small object提高访问small data object的一种方式

i
这是对标准ELF符号类型集的GNU扩展。它表示一个符号如果被重定位引用，不会计算该符号的地址，而是必须在运行时计算

N
该符号是一个debugging符号。

p
该符号在stack unwind section

r,R
该符号位于只读数据段（read only data section）。例如定义全局const int test[] = {123, 123};则test就是一个只读数据段的符号。

s,S
符号位于非初始化数据区，用于small object。

t,T
该符号位于代码段（text section）。

u
符号是唯一的全局符号。这是GNU对标准ELF符号绑定集的扩展。对于这样的符号，动态链接器将确保在整个过程中只有一个使用此名称和类型的符号。

U
该符号在当前文件中是未定义的，即该符号定义在别的文件中。例如，当前文件调用另一个文件中定义的函数，这个被调用的函数在当前文件就是未定义的，但是在定义它的文件中类型是T。对于全局变量来说，在定义它的文件中，其符号类型为B或D，在使用它的文件中，其类型为U。

v,V
该符号是一个弱符号。当弱定义符号与正常定义符号链接时，使用正常定义符号时不会出错。当链接未定义的弱定义符号，弱符号的值将变为零，且没有错误。在某些系统上，大写表示已指定默认值

w,W
该符号是一个弱符号，未专门标记为弱对象符号。当弱定义符号与正常定义符号链接时，使用正常定义符号时不会出错。当链接未定义的弱未定义符号时，该符号的值将以系统特定的方式确定，且不会出错。在某些系统上，大写表示已指定默认值

-
该符号是a.out格式文件中的stabs symbol。在这种情况下，打印的下一个值是stabs other字段、stabs desc字段和stab类型。stabs符号用于保存调试信息

?
该符号类型没有定义
```
## 2.命令格式
```
nm [-A|-o|--print-file-name] [-a|--debug-syms]
   [-B|--format=bsd] [-C|--demangle[=style]]
   [-D|--dynamic] [-f<format>|--format=<format>]
   [-g|--extern-only] [-h|--help]
   [-l|--line-numbers] [-n|-v|--numeric-sort]
   [-P|--portability] [-p|--no-sort]
   [-r|--reverse-sort] [-S|--print-size]
   [-s|--print-armap] [-t <radix>|--radix=<radix>]
   [-u|--undefined-only] [-V|--version]
   [-X 32_64] [--defined-only] [--no-demangle]
   [--plugin <name>] [--size-sort] [--special-syms]
   [--synthetic] [--target=bfdname]
   [objfile...]
```

## 3.选项说明
```
-A, -o, --print-file-name
	在找到的各个符号的名字前加上文件名，而不是在此文件的所有符号前只出现文件名一次
-a, --debug-syms
	显示调试符号
-B, --format=bsd
	用来兼容 MIPS 的 nm
-C, --demangle[=STYLE]
	将低级符号名解码（demangle）成用户级名字，比如去除编译时添加的前置下划线，这样可以使得 C++ 函数名具有可读性。不同的编译器符号修饰风格不同，可以使用 =STYLE 参数来选择合适的解码风格
-D, --dynamic：显示动态符号。该任选项仅对于动态目标(例如特定类型的共享库)有意义
-f, --format=FORMAT
	FORMAT 可取值 bsd、sysv 或 posix，该选项在 GNU nm 中有用，默认为 bsd
-g, --extern-only
	仅显示外部符号
-h, --help
	显示帮助信息
-l, --line-numbers
	对每个符号，使用调试信息来试图找到文件名和行号。对于已定义的符号，查找符号地址的行号。对于未定义符号，查找指向符号重定位入口的行号。如果可以找到行号信息，显示在符号信息之后
-n, -v, --numeric-sort
	按符号对应地址的顺序排序，而非按符号名的字符顺序
-P, --portability
	使用 POSIX.2 标准输出格式代替默认的输出格式。等同于 -f posix
-p, --no-sort
	按目标文件中遇到的符号顺序显示，不排序
-r, --reverse-sort
	逆序排序。例如，升序变为降序
-S, --print-size
	以 BSD 输出样式输出已定义符号的值和大小。对于不记录符号大小的目标文件格式，此选项不起作用，除非使用了--size sort，在这种情况下，将显示计算的大小
-s, --print-armap
	当列出库中成员的符号时，同时列出索引。索引的内容包含：模块与其包含的名字的定义之间的映射
-t, --radix=RADIX
	使用基数 radix 进制显示符号值。radix 只能为 d（十进制）、o（八进制）或 x（十六进制）
-u, --undefined-only
	仅显示没有定义的符号
-V, --version
	显示版本信息并退出
-X
	为了与 AIX 版本的 nm 兼容，选项 -X 将被忽略。它可接受一个参数，该参数必须是字符串32_64。AIX nm 的默认模式对应于 -X 32，GNU nm 不支持模式 -X 32
--defined-only
	仅显示有定义的符号
--no-demangle
	不解码低级符号名，这是默认选项
--plugin NAME
	加载名为 name 的插件以添加对额外目标类型的支持。只有在启用插件支持的情况下构建了工具链时，此选项才可用
--size-sort
	按符号大小排列
--special-syms
	显示目标相关的具体特殊含义的符号。这些符号通常被特定目标文件用于某些特殊处理，当包含在正常符号列表中时通常不起作用。例如，对于ARM目标，此选项将跳过用于标记ARM代码、Thumb代码和数据之间转换的映射符号
--synthetic
	输出合成符号。合成符号是链接器为各种目的创建的特殊符号，默认情况下不会显示它们，因为它们不是二进制文件源代码的一部分
--target=BFDNAME
	指定系统默认格式以外的目标文件格式
```
## 4.常用示例
首先给出后面大部分示例所基于的源代码以及编译指令。 涉及两个 C++ 源文件。
test.cpp：
```cpp
#include <iostream>

int dUnInitialized;
int dInitialized = 1;
char sTest[] = "good";

void print() {
        std::cout<<"dUnInitialized="<<dUnInitialized<<" dInitialized="<<dInitialized<<" sTest="<<sTest<<std::endl;
}
```

main.cpp：
```cpp
#include <iostream>
using namespace std;

void print();
extern int dUnInitialized;
int main() {
	int localVar=666;
	dUnInitialized=2;
	print();
}
```
使用-g选项加入调试信息，分别编译生成目标文件objdump.o与main.o。
```
g++ -c -g test.cpp -o test.o
g++ -c -g main.cpp -o main.o
```
然后通过ar命令将两个目标文件打包成静态库libobjdump.a。
```
ar crv libnm.a main.o test.o
```

（1）列出目标文件 test.o 与 main.o 的符号清单。
```
nm -C *.o
main.o:
                 U __cxa_atexit
                 U __dso_handle
                 U dUnInitialized
0000000000000057 t _GLOBAL__sub_I_main
0000000000000000 T main
000000000000001a t __static_initialization_and_destruction_0(int, int)
                 U print()
                 U std::ios_base::Init::Init()
                 U std::ios_base::Init::~Init()
0000000000000000 b std::__ioinit

test.o:
                 U __cxa_atexit
0000000000000000 D dInitialized
                 U __dso_handle
0000000000000000 B dUnInitialized
00000000000000ae t _GLOBAL__sub_I_dUnInitialized
0000000000000004 D sTest
0000000000000071 t __static_initialization_and_destruction_0(int, int)
0000000000000000 T print()
                 U std::ostream::operator<<(int)
                 U std::ostream::operator<<(std::ostream& (*)(std::ostream&))
                 U std::ios_base::Init::Init()
                 U std::ios_base::Init::~Init()
                 U std::cout
                 U std::basic_ostream<char, std::char_traits<char> >& std::endl<char, std::char_traits<char> >(std::basic_ostream<char, std::char_traits<char> >&)
0000000000000004 b std::__ioinit
                 U std::basic_ostream<char, std::char_traits<char> >& std::operator<< <std::char_traits<char> >(std::basic_ostream<char, std::char_traits<char> >&, char const*)
```
使用 -C 选项将符号解码成可读形式，从 test.o 的输出结果可以看出，已初始化的全局变量 dInitialized 与 sTest，符号类型是 D，所以其位于初始化的 Data 段。未初始化的全局变量 dUnInitialized 符号类型是 B，所以其位于未初始化的 BSS 段。函数print() 的符号类型是 T，说明其位于代码段（Text Section）。

从 main.o 的输出结果可以看出，变量 dUnInitialized 与函数 print() 因为均定义在其它文件中，所以符号类型是 U，表示该符号在当前文件中是未定义的。值得注意的是，变量 localVar 因为是局部变量， nm 无法获取其符号。

---
## 参考文献
[GNU Binutils](https://www.gnu.org/software/binutils/)

[nm(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/nm.1.html)

[Linux命令手册.nm](http://linux.51yip.com/search/nm)

[linux中的nm命令简介](https://blog.csdn.net/stpeace/article/details/47089585)

<Vssue title="nm" />