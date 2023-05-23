## 1.功能简介
objdump 是 [GNU Binutils](https://www.gnu.org/software/binutils/) 二进制工具集的一员，用于查看目标文件或可执行文件的组成信息，以可读的形式打印二进制文件的内容。

## 2.命令格式
```
objdump [OPTIONS] OBJFILES
```

## 3.选项说明
```
-a, --archive-headers
	显示档案头信息，展示档案每一个成员的文件格式。效果等同于命令 ar -tv
-b, --target=BFDNAME
	指定目标码格式。这不是必须的，objdump 能自动识别许多格式，比如 objdump -b oasys -m vax -h fu.o 显示 fu.o 的头部摘要信息，明确指出该文件是 Vax 系统下用 Oasys 编译器生成的目标文件。objdump -i 将给出这里可以指定的目标码格式列表
-C, --demangle[=STYLE]
	目标文件中的符号解码成用户级名称。比如移除符号修饰时在变量与函数名前添加的下划线等。
-d, --disassemble
	反汇编目标文件，将机器指令反汇编成汇编代码
-D, --disassemble-all
	与 -d 类似，但反汇编所有段（section）
-z, --disassemble-zeroes
	一般反汇编输出将省略零块，该选项使得这些零块也被反汇编 
-EB, -EL,--endian={big | little}
	指定目标文件的字节序，在目标文件没描述字节序时很有用，例如 S-records。这个选项只影响反汇编
-f, --file-headers
	显示每一个目标文件的头信息
-F, --file-offsets
	反汇编时，打印每一个符号的偏移地址
--file-start-context
	显示源码/汇编代码（假设为 -S）时，将上下文扩展到文件的开头
-g, --debugging
	显示调试信息。企图解析保存在文件中的调试信息并以 C 语言的语法显示出来。仅仅支持某些类型的调试信息。有些其他的格式被readelf -w支持
-e, --debugging-tags
	类似 -g 选项，但是生成的信息是和ctags工具相兼容的格式
-h, --section-headers, --headers
	显示目标文件各个 section 的头部摘要信息
-i, --info
	显示对于 -b 或者 -m 选项可用的架构和目标格式列表
-j, --section=NAME
	仅显示指定名称的 section 的信息 
-l, --line-numbers
	用文件名和行号标注相应的目标代码，仅仅和 -d、-D 或者 -r 一起使用
-S,--source
	反汇编时尽可能使用源代码表示。隐含了-d参数
-m, --architecture=MACHINE
	指定反汇编目标文件时使用的架构，当待反汇编文件本身没描述架构信息的时候(比如S-records)，这个选项很有用。可以用-i选项列出这里能够指定的架构
-M, --disassembler-options=OPTIONS
	给反汇编程序传递参数，可以指定多个，使用逗号分隔
-p, --private-headers
	打印目标文件格式的特定信息。打印的信息取决于目标文件格式，对于某些目标文件格式，不打印任何附加信息。
-P, --private=OPTIONS
	打印目标文件格式的特定信息。OPTIONS 是一个逗号分隔的列表。例如对于XCOFF，可用的选项有 header, aout, sections, syms, relocs, lineno, loader, except, typchk, traceback and toc
-r, --reloc
	显示文件的重定位入口。如果和-d或者-D一起使用，重定位部分以反汇编后的格式显示出来
-R, --dynamic-reloc
	显示文件的动态重定位入口，仅仅对于动态目标文件意义，比如某些共享库
-s, --full-contents
	显示section的完整内容。默认所有的非空section都会被显示
-W[lLiaprmfFsoRt],--dwarf=[rawline,=decodedline,=info,=abbrev,=pubnames,=aranges,=macro,=frames,=frames-interp,=str,=loc,=Ranges,=pubtypes,=trace_info,=trace_abbrev,=trace_aranges,=gdb_index]
	显示文件中调试段的内容，如果存在的话
-G, --stabs
	显示请求的任何 section 的全部内容。显示段 .stab、.stab.index 和 .stab.excl 的内容
-t, --syms
	显示文件的符号表入口。类似于nm -s提供的信息
-T, --dynamic-syms
	显示文件的动态符号表入口，仅仅对动态目标文件意义，比如某些共享库。它显示的信息类似于 nm -D,--dynamic 显示的信息
-x, --all-headers
	显示所可用的头信息，包括符号表、重定位入口。-x 等价于 -a -f -h -p -r -t 同时指定
-w, --wide
	为具有超过80列的输出设备格式化某些行。也不要在显示符号名称时截断符号名称
--start-address=ADDRESS
	从指定地址开始显示数据，该选项影响 -d、-r 和 -s 选项的输出
--stop-address=ADDRESS
	显示数据直到指定地址为止，该项影响-d、-r和-s选项的输出
--prefix-addresses
	反汇编的时候，显示每一行的完整地址。这是一种比较老的反汇编格式
--no-show-raw-insn
	反汇编时，不显示汇编指令的机器码。当使用--prefix-addresses时，这是缺省选项
--adjust-vma=OFFSET
	当解析信息时，首先给所有的段添加偏移值offset。当段地址与符号表不符时，这个选项很有用。比如将段放置到特殊地址，因为某个格式无法表示段地址，比如 a.out
--special-syms
	显示特殊符号与用户不关心的符号
--prefix=PREFIX
	当使用 -S 时，指定前缀添加到绝对路径中
--prefix-strip=LEVEL
	指定剥离绝对路径中多少个前缀目录名。此选项只有在使用了选项 --prefix=PREFIX 才有效
--insn-width=WIDTH
	指定反汇编后的指令输出的行宽，单位字节
-V, --version
	版本信息
-H, --help
	帮助信息
```
## 4.常用示例
首先给出后面大部分测试所基于的源代码以及编译指令。 涉及两个 C++ 源文件。
objdump.cpp：
```cpp
#include <iostream>

void print() {
        std::cout<<"objdump"<<std::endl;
}
```

main.cpp：
```cpp
#include <iostream>
using namespace std;

void print();

int main() {
        print();
}
```
使用-g选项加入调试信息，分别编译生成目标文件objdump.o与main.o。
```
g++ -c -g objdump.cpp -o objdump.o
g++ -c -g main.cpp -o main.o
```
然后通过ar命令将两个目标文件打包成静态库libobjdump.a。
```
ar crv libobjdump.a main.o objdump.o
```
（1）查看档案包含的目标文件列表。
```
[root@TENCENT64 ~]# objdump -a libobjdump.a
In archive libobjdump.a:

main.o:     file format elf64-x86-64
rw-r--r-- 0/0  18696 Mar  8 20:25 2019 main.o

objdump.o:     file format elf64-x86-64
rw-r--r-- 0/0  21352 Mar  8 20:25 2019 objdump.o
```
使用命令ar -tv也可以列出档案中包含的目标文件。
```
[root@TENCENT64 ~]# ar -tv libobjdump.a
rw-r--r-- 0/0  18696 Mar  8 20:25 2019 main.o
rw-r--r-- 0/0  21352 Mar  8 20:25 2019 objdump.o
```
（2）显示目标文件objdump.o的代码段（.text）内容。
```
[root@TENCENT64 ~]# objdump --section=.text  -s objdump.o
objdump.o:     file format elf64-x86-64

Contents of section .text:
 0000 554889e5 be000000 00bf0000 0000e800  UH..............
 0010 000000be 00000000 4889c7e8 00000000  ........H.......
 0020 5dc35548 89e54883 ec10897d fc8975f8  ].UH..H....}..u.
 0030 837dfc01 7527817d f8ffff00 00751ebf  .}..u'.}.....u..
 0040 00000000 e8000000 00ba0000 0000be00  ................
 0050 000000bf 00000000 e8000000 00c9c355  ...............U
 0060 4889e5be ffff0000 bf010000 00e8b0ff  H...............
 0070 ffff5dc3                             ..].
```
注意，不能单独使用-j或者--section选项，一定要加上-s选项。

（3）反汇编objdump.o中的text段内容，并尽可能用源代码形式表示。
```
[root@TENCENT64 ~]# objdump --section=.text -S objdump.o
objdump.o:     file format elf64-x86-64

Disassembly of section .text:

0000000000000000 <_Z5printv>:
#include <iostream>

void print()
{
   0:	55                   	push   %rbp
   1:	48 89 e5             	mov    %rsp,%rbp
	std::cout<<"objdump"<<std::endl;
   4:	be 00 00 00 00       	mov    $0x0,%esi
   9:	bf 00 00 00 00       	mov    $0x0,%edi
   e:	e8 00 00 00 00       	callq  13 <_Z5printv+0x13>
  13:	be 00 00 00 00       	mov    $0x0,%esi
  18:	48 89 c7             	mov    %rax,%rdi
  1b:	e8 00 00 00 00       	callq  20 <_Z5printv+0x20>
}
  20:	5d                   	pop    %rbp
  21:	c3                   	retq   

0000000000000022 <_Z41__static_initialization_and_destruction_0ii>:
  22:	55                   	push   %rbp
  23:	48 89 e5             	mov    %rsp,%rbp
  26:	48 83 ec 10          	sub    $0x10,%rsp
  2a:	89 7d fc             	mov    %edi,-0x4(%rbp)
  2d:	89 75 f8             	mov    %esi,-0x8(%rbp)
  30:	83 7d fc 01          	cmpl   $0x1,-0x4(%rbp)
  34:	75 27                	jne    5d <_Z41__static_initialization_and_destruction_0ii+0x3b>
  36:	81 7d f8 ff ff 00 00 	cmpl   $0xffff,-0x8(%rbp)
  3d:	75 1e                	jne    5d <_Z41__static_initialization_and_destruction_0ii+0x3b>
  extern wostream wclog;	/// Linked to standard error (buffered)
#endif
  //@}

  // For construction of filebuffers for cout, cin, cerr, clog et. al.
  static ios_base::Init __ioinit;
  3f:	bf 00 00 00 00       	mov    $0x0,%edi
  44:	e8 00 00 00 00       	callq  49 <_Z41__static_initialization_and_destruction_0ii+0x27>
  49:	ba 00 00 00 00       	mov    $0x0,%edx
  4e:	be 00 00 00 00       	mov    $0x0,%esi
  53:	bf 00 00 00 00       	mov    $0x0,%edi
  58:	e8 00 00 00 00       	callq  5d <_Z41__static_initialization_and_destruction_0ii+0x3b>
  5d:	c9                   	leaveq 
  5e:	c3                   	retq   

000000000000005f <_GLOBAL__sub_I__Z5printv>:
  5f:	55                   	push   %rbp
  60:	48 89 e5             	mov    %rsp,%rbp
  63:	be ff ff 00 00       	mov    $0xffff,%esi
  68:	bf 01 00 00 00       	mov    $0x1,%edi
  6d:	e8 b0 ff ff ff       	callq  22 <_Z41__static_initialization_and_destruction_0ii>
  72:	5d                   	pop    %rbp
  73:	c3                   	retq
```
（3）显示目标文件的符号表入口。
```
[root@TENCENT64 ~]# objdump -t objdump.o
objdump.o:     file format elf64-x86-64

SYMBOL TABLE:
0000000000000000 l    df *ABS*	0000000000000000 objdump.cpp
0000000000000000 l    d  .text	0000000000000000 .text
0000000000000000 l    d  .data	0000000000000000 .data
0000000000000000 l    d  .bss	0000000000000000 .bss
0000000000000000 l     O .bss	0000000000000001 _ZStL8__ioinit
0000000000000000 l    d  .rodata	0000000000000000 .rodata
0000000000000022 l     F .text	000000000000003d _Z41__static_initialization_and_destruction_0ii
000000000000005f l     F .text	0000000000000015 _GLOBAL__sub_I__Z5printv
0000000000000000 l    d  .init_array	0000000000000000 .init_array
0000000000000000 l    d  .debug_info	0000000000000000 .debug_info
0000000000000000 l    d  .debug_abbrev	0000000000000000 .debug_abbrev
0000000000000000 l    d  .debug_aranges	0000000000000000 .debug_aranges
0000000000000000 l    d  .debug_line	0000000000000000 .debug_line
0000000000000000 l    d  .debug_str	0000000000000000 .debug_str
0000000000000000 l    d  .note.GNU-stack	0000000000000000 .note.GNU-stack
0000000000000000 l    d  .eh_frame	0000000000000000 .eh_frame
0000000000000000 l    d  .comment	0000000000000000 .comment
0000000000000000 g     F .text	0000000000000022 _Z5printv
0000000000000000         *UND*	0000000000000000 _ZSt4cout
0000000000000000         *UND*	0000000000000000 _ZStlsISt11char_traitsIcEERSt13basic_ostreamIcT_ES5_PKc
0000000000000000         *UND*	0000000000000000 _ZSt4endlIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_
0000000000000000         *UND*	0000000000000000 _ZNSolsEPFRSoS_E
0000000000000000         *UND*	0000000000000000 _ZNSt8ios_base4InitC1Ev
0000000000000000         *UND*	0000000000000000 .hidden __dso_handle
0000000000000000         *UND*	0000000000000000 _ZNSt8ios_base4InitD1Ev
0000000000000000         *UND*	0000000000000000 __cxa_atexit
```
这里，输出的信息类似nm -s命令的输出，相比较之下，nm命令的输出如下： 
```
[root@TENCENT64 ~]# nm -s objdump.o
                 U __cxa_atexit
                 U __dso_handle
000000000000005f t _GLOBAL__sub_I__Z5printv
0000000000000022 t _Z41__static_initialization_and_destruction_0ii
0000000000000000 T _Z5printv
                 U _ZNSolsEPFRSoS_E
                 U _ZNSt8ios_base4InitC1Ev
                 U _ZNSt8ios_base4InitD1Ev
                 U _ZSt4cout
                 U _ZSt4endlIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_
0000000000000000 b _ZStL8__ioinit
                 U _ZStlsISt11char_traitsIcEERSt13basic_ostreamIcT_ES5_PKc
```
（4）显示目标文件各个段的头部摘要信息。
```
[root@TENCENT64 ~]# objdump -h objdump.o
objdump.o:     file format elf64-x86-64

Sections:
Idx Name          Size      VMA               LMA               File off  Algn
  0 .text         00000074  0000000000000000  0000000000000000  00000040  2**2
                  CONTENTS, ALLOC, LOAD, RELOC, READONLY, CODE
  1 .data         00000000  0000000000000000  0000000000000000  000000b4  2**2
                  CONTENTS, ALLOC, LOAD, DATA
  2 .bss          00000001  0000000000000000  0000000000000000  000000b4  2**2
                  ALLOC
  3 .rodata       00000008  0000000000000000  0000000000000000  000000b4  2**0
                  CONTENTS, ALLOC, LOAD, READONLY, DATA
  4 .init_array   00000008  0000000000000000  0000000000000000  000000c0  2**3
                  CONTENTS, ALLOC, LOAD, RELOC, DATA
  5 .debug_info   000014f9  0000000000000000  0000000000000000  000000c8  2**0
                  CONTENTS, RELOC, READONLY, DEBUGGING
  6 .debug_abbrev 0000039f  0000000000000000  0000000000000000  000015c1  2**0
                  CONTENTS, READONLY, DEBUGGING
  7 .debug_aranges 00000030  0000000000000000  0000000000000000  00001960  2**0
                  CONTENTS, RELOC, READONLY, DEBUGGING
  8 .debug_line   00000244  0000000000000000  0000000000000000  00001990  2**0
                  CONTENTS, RELOC, READONLY, DEBUGGING
  9 .debug_str    00000e4c  0000000000000000  0000000000000000  00001bd4  2**0
                  CONTENTS, READONLY, DEBUGGING
 10 .comment      0000002d  0000000000000000  0000000000000000  00002a20  2**0
                  CONTENTS, READONLY
 11 .note.GNU-stack 00000000  0000000000000000  0000000000000000  00002a4d  2**0
                  CONTENTS, READONLY
 12 .eh_frame     00000078  0000000000000000  0000000000000000  00002a50  2**3
                  CONTENTS, ALLOC, LOAD, RELOC, READONLY, DATA
```

---
## 参考文献
[GNU Binutils](https://www.gnu.org/software/binutils/)

[objdump(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/objdump.1.html)

[objdump命令.Linux命令大全](http://man.linuxde.net/objdump)

<Vssue title="objdump" />