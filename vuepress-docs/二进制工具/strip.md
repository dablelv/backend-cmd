## 1.命令简介
strip 命令是 [GNU Binutils](https://www.gnu.org/software/binutils/) 中的一员，用于剥掉目标文件中一些符号信息和调试信息，使文件变小。

## 2.命令格式
```
strip [-F bfdname |--target=bfdname]
      [-I bfdname |--input-target=bfdname]
      [-O bfdname |--output-target=bfdname]
      [-s|--strip-all]
      [-S|-g|-d|--strip-debug]
      [--strip-dwo]
      [-K symbolname |--keep-symbol=symbolname]
      [-N symbolname |--strip-symbol=symbolname]
      [-w|--wildcard]
      [-x|--discard-all] [-X |--discard-locals]
      [-R sectionname |--remove-section=sectionname]
      [-o file] [-p|--preserve-dates]
      [-D|--enable-deterministic-archives]
      [-U|--disable-deterministic-archives]
      [--keep-file-symbols]
      [--only-keep-debug]
      [-v |--verbose] [-V|--version]
      [--help] [--info]
      objfile...
```
## 3.选项说明
```
[-F bfdname |--target=bfdname]：使用指定的二进制文件格式（Binary Format Descriptor）解析输入的目标文件，输出目标文件时也采用相同的格式
[-I bfdname |--input-target=bfdname]：使用指定的二进制文件格式（Binary Format Descriptor）解析输入的目标文件
[-O bfdname |--output-target=bfdname]：使用指定的二进制文件格式（Binary Format Descriptor）输出目标文件
[-s|--strip-all]：删除所有符号
[-S|-g|-d|--strip-debug]：仅删除调试符号
[--strip-dwo]：删除所有DWARF .dwo节的内容，保留其余调试节和所有符号不变
[-K symbolname |--keep-symbol=symbolname]：保留源文件中指定的符号symbolname
[-N symbolname |--strip-symbol=symbolname]：从源文件中删除符号symbolname。此选项可能不止一次
[-w|--wildcard]：允许在其他命令行选项中对符号名称使用正则表达式。问号（？）、星号（*）、反斜杠（\）和方括号（[]）运算符可以在符号名的任何位置使用
[-x|--discard-all]：删除非全局符号
[-X |--discard-locals]：删除编译器生成的本地符号
[-R sectionname |--remove-section=sectionname]：从输出文件中删除名为sectionname的任何节。此选项可能会给出多次。请注意，不适当地使用此选项可能会使输出文件不可用。通配符*可以在sectionname的末尾给出。如果是这样，则将删除以sectionname开头的任何节
[-o file]：将剥离的输出放入文件 file 中，而不是替换现有文件。使用此参数时，只能指定一个objfile
[-p|--preserve-dates]：保留文件的访问和修改日期
[-D|--enable-deterministic-archives]：以确定性模式（deterministic mode）操作。复制存档成员和写入存档索引时，对UIDs、GIDs、时间戳使用零，对所有文件使用一致的文件模式
[-U|--disable-deterministic-archives]：不以确定性模式（deterministic mode）操作。这与上面的-D选项相反：复制存档成员并写入存档索引时，使用它们的实际UID、GID、时间戳和文件模式值
[--keep-file-symbols]：保留符号信息
[--only-keep-debug]：保留调试信息
[-v |--verbose] ：详细输出：列出所有修改的对象文件。对于归档文件，strip-v 列出了归档文件的所有成员
[-V|--version]：显示版本信息
[-h|--help]：显示帮助信息
[--info]：列出支持的目标文件格式和架构
objfile...：目标文件，包括库文件或可执行文件
```
## 4.常用示例
先看一个 C++ 源码文件 main.cpp。
```cpp
//
//@file：main.cpp
//

#include <iostream>

int main()
{
        std::cout<<"strip"<<std::endl;
}
```
使用 g++ 编译生成可执行文件 main.out。
```
g++ -o main.out main.cpp
ll
-rw-r--r-- 1 root root     68 Mar 22 15:55 main.cpp
-rwxr-xr-x 1 root root   9119 Mar 22 15:55 main.out
```
（1）剥掉可执行文件中一些符号信息和调试信息，使文件变小。

首先使用file命令来查看可执行文件main.out的基本信息，可见其是not stripped。
```
file main.out 
main.out: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=9d0d7d3718cf9a4cfdc3e026de804e2428bb60fa, not stripped
```
然后使用 nm 命令来查看 main.out 中的符号。
```
nm main.out
000000000060105c B __bss_start
0000000000601170 b completed.6337
                 U __cxa_atexit@@GLIBC_2.2.5
0000000000601058 D __data_start
0000000000601058 W data_start
00000000004007b0 t deregister_tm_clones
0000000000400820 t __do_global_dtors_aux
0000000000600de8 t __do_global_dtors_aux_fini_array_entry
0000000000400978 R __dso_handle
0000000000600df8 d _DYNAMIC
000000000060105c D _edata
...
```
使用 strip 来剥掉 main.out 中的符号信息，并查看大小，文件基本信息和符号信息。
```shell
strip main.out

ll main.out
-rwxr-xr-x 1 root root 6272 Mar 22 16:14 main.out

file main.out
main.out: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=9d0d7d3718cf9a4cfdc3e026de804e2428bb60fa, stripped

nm main.out
nm: main.out: no symbols
```
可见 main.out 大小从 9119 字节变为 6272 字节，且 file 命令显示文件状态为 stripped，使用 nm 命令显示 main.out 已经没有符号了。

## 5.小结
通过上面的例子可以看出，strip 命令可用于剥掉目标文件的符号，使文件变小，这就节省了很多空间。

其实，strip 不仅仅针对可执行文件， 还能针对目标文件和静态、动态库等。在实际的开发中， 经常需要对动态库 .so 进行 strip 操作， 减少空间。 而在调试的时候（比如用 addr2line），就需要符号了。因此，通常的做法是用 strip 前的库来调试，strip 后的库用来发布， 发布的 strip 后的库一旦出了问题， 就可以找对应的未 strip 的库来定位。

---
## 参考文献
[GNU Binutils](https://www.gnu.org/software/binutils/)

[strip(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/strip.1.html)

[linux中的strip命令简介](https://blog.csdn.net/qq_37858386/article/details/78559490)