## 1.命令简介
readelf 用于读取 ELF（Executable and Linkable Format）格式文件的详细信息，包括目标文件、可执行文件、共享目标文件与核心转储文件。

### 1.1 ELF 文件分类
（1）可重定位文件（Relocatable File），这类文件包含了代码和数据，用于链接生成可以执行文件或共享目标文件，目标文件和静态链接库均属于可重定位文件，例如`*.o`或`lib*.a`文件； 

（2）可执行文件（Executable File），用于生成进程映像，载入内存执行。Linux 环境下的 ELF 可执行文件一般没有扩展名，例如用户命令 ls； 

（3）共享目标文件（Shared Object File），这种文件包含了代码和数据，用于和可重定位文件或其他共享目标文件一起生成可执行文件。例如 Linux 的动态共享对象（Dynamic Shared Object），C 语言运行时库 glibc-2.5.so；

（4）核心转储文件（Core Dump File），当进程意外终止时，系统可以将该进程的地址空间的内容及终止时的一些其他信息转储到核心转储文件。例如 Linux 下的 core dump。

### 1.2 ELF 文件组成
ELF 文件头描述了 ELF 文件的总体信息，包括系统相关、类型相关、加载相关和链接相关的信息。
 （1）系统相关，比如ELF 文件标识的魔数，以及硬件和平台等相关信息，增加了 ELF 文件的移植性，使交叉编译成为可能；
（2）类型相关，比如 ELF 文件类型，分别有目标文件、可执行文件、动态链接库与核心转储文件；
（3）加载相关，比如程序头，描述了 ELF 文件被加载时的段信息；
（4）链接相关，比如节头，描述了 ELF 文件的节信息。 

## 2.命令格式
```
readelf <option> <elffile...>
```
## 3.选项说明
运行 readelf 的时候，除了 -v 和 -H 之外，其它的选项必须有一个被指定。 
```
-a,--all：显示全部信息，等价于 -h -l -S -s -r -d -V -A -I
-h,--file-header：显示文件头信息
-l,--program-headers,--segments：显示程序头（如果有的话）
-S,--section-headers,--sections：显示节头信息（如果有的话）
-g,--section-groups：显示节组信息（如果有的话）
-t,--section-details：显示节的详细信息（-S的）
-s,--syms,--symbols：显示符号表节中的项（如果有的话）
--dyn-syms：显示动态符号表节中的项（如果有的话）
-e,--headers：显示全部头信息，等价于-h -l -S
-n,--notes：显示note段（内核注释）的信息
-r,--relocs：显示可重定位段的信息。 
-u,--unwind：显示unwind段信息。当前只支持IA64 ELF的unwind段信息。 
-d,--dynamic：显示动态段的信息
-V,--version-info：显示版本段的信息
-A ,--arch-specific：显示CPU构架信息
-D,--use-dynamic：使用动态符号表显示符号，而不是符号表
-x <number or name>,--hex-dump=<number or name>：以16进制方式显示指定节内容。number指定节表中节的索引，或字符串指定文件中的节名
-R <number or name>,--relocated-dump=<number or name>：以16进制方式显示指定节内容。number指定节表中节的索引，或字符串指定文件中的节名。节的内容被展示前将被重定位。
-p <number or name>,--string-dump=<number or name>：以可打印的字符串显示指定节内容。number指定节表中节的索引，或字符串指定文件中的节名。
-c,--archive-index：展示档案头中的文件符号索引信息，执行与 ar 的 t 命令相同的功能，但不使用 BFD 库
-w[liaprmfFsoR],--debug-dump[=line,=info,=abbrev,=pubnames,=aranges,=macro,=frames,=frames-interp,=str,=loc,=Ranges]：显示调试段中指定的内容
--dwarf-depth=n：将“.debug_info”节的转储限制为n个子级。这只对--debug dump=info有用。默认为打印所有DIE（debugging information entry）；n的特殊值0也将具有此效果
--dwarf-start=n：只打印以编号为n的模具开始的DIE，仅适用于使用--debug dump=info选项时。该选项可以与--dwarf-depth=n连用。
-I,--histogram：显示符号的时候，显示 bucket list 长度的柱状图
-v,--version：显示 readelf 的版本信息
-H,--help：显示 readelf 所支持的命令行选项
-W,--wide：宽行输出
@file：可以将选项集中到一个文件中，然后使用这个 @file 选项载入
```
## 4.常用示例
### 4.1 准备工作
（1）首先生成可执行文件形式的 ELF 文件。
```cpp
//
//@file：main.cpp
//

#include <iostream>

void print();

int main() {
        std::cout<<"objdump"<<std::endl;
}
```
使用 g++，分别不使用和使用 -g 选项，编译生成可执行文件 main.out 和main.debug.out。
```
g++ main.cpp -o main.out
g++ -g main.cpp -o main.debug.out

ll
-rw-r--r-- 1 root root     74 Mar 21 11:48 main.cpp
-rwxr-xr-x 1 root root   9119 Mar 21 11:49 main.out
-rwxr-xr-x 1 root root  19695 Mar 21 11:49 main.debug.out
```
可见，因为加入了调试信息，main.debug.out 的大小明显比 main.out 大很多。

（2）生成库文件。
```cpp
//
//@file：print.cpp
//

#include <iostream>

void print() {
        std::cout<<"readelf"<<std::endl;
}
```
使用 g++ 和 ar，分别生成静态链接库 libprint.a 和动态链接库 libprint.so。
```cpp
# 生成静态库libmy.a
g++ -c print.cpp -o print.o
ar c libprint.a print.o

#生成动态库libprint.so
g++ -shared -fPIC -o libprint.so print.cpp
```
编译之后，查看生成的文件。
```
ll
-rw-r--r-- 1 root root   2810 Mar 21 13:50 libprint.a
-rwxr-xr-x 1 root root   8613 Mar 21 13:56 libprint.so
-rw-r--r-- 1 root root    104 Mar 21 13:40 print.cpp
-rw-r--r-- 1 root root   2664 Mar 21 13:40 print.o
```
基于以上可执行文件和库，下面给出一些常用的示例。

### 4.2 常用示例
（1）读取可执行文件形式的 ELF 文件头信息。
```shell
readelf -h main.out 
ELF Header:
  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00 
  Class:                             ELF64
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  ABI Version:                       0
  Type:                              EXEC (Executable file)
  Machine:                           Advanced Micro Devices X86-64
  Version:                           0x1
  Entry point address:               0x400780
  Start of program headers:          64 (bytes into file)
  Start of section headers:          4496 (bytes into file)
  Flags:                             0x0
  Size of this header:               64 (bytes)
  Size of program headers:           56 (bytes)
  Number of program headers:         9
  Size of section headers:           64 (bytes)
  Number of section headers:         30
  Section header string table index: 27
```
从`Type:EXEC (Executable file)`可以看出其类型为 EXEC（可执行文件）。并且可以看出文件的体系结构为 x86-64。另外，含调试信息的"main.debug.out"和不含调试信息的"main"除了一些大小信息之外，其内容是一样的。

（2）读取目标文件形式的 ELF 文件头信息。
```shell
readelf -h print.o
ELF Header:
  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00 
  Class:                             ELF64
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  ABI Version:                       0
  Type:                              REL (Relocatable file)
  Machine:                           Advanced Micro Devices X86-64
  Version:                           0x1
  Entry point address:               0x0
  Start of program headers:          0 (bytes into file)
  Start of section headers:          488 (bytes into file)
  Flags:                             0x0
  Size of this header:               64 (bytes)
  Size of program headers:           0 (bytes)
  Number of program headers:         0
  Size of section headers:           64 (bytes)
  Number of section headers:         15
  Section header string table index: 12
```
可见目标文件的elf文件，其类型为REL(可重定位文件)。且相对于可执行文件，目标文件没有程序头（段头）信息。

（3）读取静态库文件形式的 ELF 文件头信息。
```shell
readelf -h libprint.a 

File: libprint.a(print.o)
ELF Header:
  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00 
  Class:                             ELF64
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  ABI Version:                       0
  Type:                              REL (Relocatable file)
  Machine:                           Advanced Micro Devices X86-64
  Version:                           0x1
  Entry point address:               0x0
  Start of program headers:          0 (bytes into file)
  Start of section headers:          488 (bytes into file)
  Flags:                             0x0
  Size of this header:               64 (bytes)
  Size of program headers:           0 (bytes)
  Number of program headers:         0
  Size of section headers:           64 (bytes)
  Number of section headers:         15
  Section header string table index: 12
```
可见静态库文件的elf文件，其类型为REL（可重定位文件），且没有程序头（段头）信息。
 
 （4）读取动态库文件形式的 ELF 文件头信息。
```shell
readelf -h libprint.so 
ELF Header:
  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00 
  Class:                             ELF64
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  ABI Version:                       0
  Type:                              DYN (Shared object file)
  Machine:                           Advanced Micro Devices X86-64
  Version:                           0x1
  Entry point address:               0x870
  Start of program headers:          64 (bytes into file)
  Start of section headers:          4464 (bytes into file)
  Flags:                             0x0
  Size of this header:               64 (bytes)
  Size of program headers:           56 (bytes)
  Number of program headers:         7
  Size of section headers:           64 (bytes)
  Number of section headers:         28
  Section header string table index: 25
```
这里，可见动态库其类型为DYN（共享目标文件），和可执行文件类似，同样拥有程序头（段头）信息。

 （5）查看可执行的 ELF 文件程序头信息。
```shell
readelf -l main.out 

Elf file type is EXEC (Executable file)
Entry point 0x400780
There are 9 program headers, starting at offset 64

Program Headers:
  Type           Offset             VirtAddr           PhysAddr
                 FileSiz            MemSiz              Flags  Align
  PHDR           0x0000000000000040 0x0000000000400040 0x0000000000400040
                 0x00000000000001f8 0x00000000000001f8  R E    8
  INTERP         0x0000000000000238 0x0000000000400238 0x0000000000400238
                 0x000000000000001c 0x000000000000001c  R      1
      [Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]
  LOAD           0x0000000000000000 0x0000000000400000 0x0000000000400000
                 0x0000000000000b04 0x0000000000000b04  R E    200000
  LOAD           0x0000000000000dd8 0x0000000000600dd8 0x0000000000600dd8
                 0x0000000000000284 0x00000000000003a0  RW     200000
  DYNAMIC        0x0000000000000df8 0x0000000000600df8 0x0000000000600df8
                 0x0000000000000200 0x0000000000000200  RW     8
  NOTE           0x0000000000000254 0x0000000000400254 0x0000000000400254
                 0x0000000000000044 0x0000000000000044  R      4
  GNU_EH_FRAME   0x000000000000098c 0x000000000040098c 0x000000000040098c
                 0x0000000000000044 0x0000000000000044  R      4
  GNU_STACK      0x0000000000000000 0x0000000000000000 0x0000000000000000
                 0x0000000000000000 0x0000000000000000  RW     10
  GNU_RELRO      0x0000000000000dd8 0x0000000000600dd8 0x0000000000600dd8
                 0x0000000000000228 0x0000000000000228  R      1

 Section to Segment mapping:
  Segment Sections...
   00     
   01     .interp 
   02     .interp .note.ABI-tag .note.gnu.build-id .gnu.hash .dynsym .dynstr .gnu.version .gnu.version_r .rela.dyn .rela.plt .init .plt .text .fini .rodata .eh_frame_hdr .eh_frame 
   03     .init_array .fini_array .jcr .dynamic .got .got.plt .data .bss 
   04     .dynamic 
   05     .note.ABI-tag .note.gnu.build-id 
   06     .eh_frame_hdr 
   07     
   08     .init_array .fini_array .jcr .dynamic .got
```
注意：含调试信息的可执行文件"main.debug.out"和不含调试信息的"main.out"其内容是一样的。
 
 （6）查看动态库 ELF 文件程序头信息。
```
readelf -l libprint.so 

Elf file type is DYN (Shared object file)
Entry point 0x870
There are 7 program headers, starting at offset 64

Program Headers:
  Type           Offset             VirtAddr           PhysAddr
                 FileSiz            MemSiz              Flags  Align
  LOAD           0x0000000000000000 0x0000000000000000 0x0000000000000000
                 0x0000000000000acc 0x0000000000000acc  R E    200000
  LOAD           0x0000000000000da8 0x0000000000200da8 0x0000000000200da8
                 0x00000000000002a0 0x00000000000002a8  RW     200000
  DYNAMIC        0x0000000000000dd0 0x0000000000200dd0 0x0000000000200dd0
                 0x00000000000001f0 0x00000000000001f0  RW     8
  NOTE           0x00000000000001c8 0x00000000000001c8 0x00000000000001c8
                 0x0000000000000024 0x0000000000000024  R      4
  GNU_EH_FRAME   0x00000000000009f8 0x00000000000009f8 0x00000000000009f8
                 0x000000000000002c 0x000000000000002c  R      4
  GNU_STACK      0x0000000000000000 0x0000000000000000 0x0000000000000000
                 0x0000000000000000 0x0000000000000000  RW     10
  GNU_RELRO      0x0000000000000da8 0x0000000000200da8 0x0000000000200da8
                 0x0000000000000258 0x0000000000000258  R      1

 Section to Segment mapping:
  Segment Sections...
   00     .note.gnu.build-id .gnu.hash .dynsym .dynstr .gnu.version .gnu.version_r .rela.dyn .rela.plt .init .plt .text .fini .rodata .eh_frame_hdr .eh_frame 
   01     .init_array .fini_array .jcr .data.rel.ro .dynamic .got .got.plt .bss 
   02     .dynamic 
   03     .note.gnu.build-id 
   04     .eh_frame_hdr 
   05     
   06     .init_array .fini_array .jcr .data.rel.ro .dynamic .got
```
 （7）查看一个可执行的 ELF 文件的节头信息。
```
readelf -S main.out
There are 30 section headers, starting at offset 0x1190:

Section Headers:
  [Nr] Name              Type             Address           Offset
       Size              EntSize          Flags  Link  Info  Align
  [ 0]                   NULL             0000000000000000  00000000
       0000000000000000  0000000000000000           0     0     0
  [ 1] .interp           PROGBITS         0000000000400238  00000238
       000000000000001c  0000000000000000   A       0     0     1
  [ 2] .note.ABI-tag     NOTE             0000000000400254  00000254
       0000000000000020  0000000000000000   A       0     0     4
  [ 3] .note.gnu.build-i NOTE             0000000000400274  00000274
       0000000000000024  0000000000000000   A       0     0     4
  [ 4] .gnu.hash         GNU_HASH         0000000000400298  00000298
       0000000000000030  0000000000000000   A       5     0     8
  [ 5] .dynsym           DYNSYM           00000000004002c8  000002c8
       0000000000000138  0000000000000018   A       6     1     8
  [ 6] .dynstr           STRTAB           0000000000400400  00000400
       0000000000000180  0000000000000000   A       0     0     1
  [ 7] .gnu.version      VERSYM           0000000000400580  00000580
       000000000000001a  0000000000000002   A       5     0     2
  [ 8] .gnu.version_r    VERNEED          00000000004005a0  000005a0
       0000000000000040  0000000000000000   A       6     2     8
  [ 9] .rela.dyn         RELA             00000000004005e0  000005e0
       0000000000000030  0000000000000018   A       5     0     8
  [10] .rela.plt         RELA             0000000000400610  00000610
       00000000000000c0  0000000000000018   A       5    12     8
  [11] .init             PROGBITS         00000000004006d0  000006d0
       000000000000001a  0000000000000000  AX       0     0     4
  [12] .plt              PROGBITS         00000000004006f0  000006f0
       0000000000000090  0000000000000010  AX       0     0     16
  [13] .text             PROGBITS         0000000000400780  00000780
       00000000000001e4  0000000000000000  AX       0     0     16
  [14] .fini             PROGBITS         0000000000400964  00000964
       0000000000000009  0000000000000000  AX       0     0     4
  [15] .rodata           PROGBITS         0000000000400970  00000970
       000000000000001c  0000000000000000   A       0     0     8
  [16] .eh_frame_hdr     PROGBITS         000000000040098c  0000098c
       0000000000000044  0000000000000000   A       0     0     4
  [17] .eh_frame         PROGBITS         00000000004009d0  000009d0
       0000000000000134  0000000000000000   A       0     0     8
  [18] .init_array       INIT_ARRAY       0000000000600dd8  00000dd8
       0000000000000010  0000000000000000  WA       0     0     8
  [19] .fini_array       FINI_ARRAY       0000000000600de8  00000de8
       0000000000000008  0000000000000000  WA       0     0     8
  [20] .jcr              PROGBITS         0000000000600df0  00000df0
       0000000000000008  0000000000000000  WA       0     0     8
  [21] .dynamic          DYNAMIC          0000000000600df8  00000df8
       0000000000000200  0000000000000010  WA       6     0     8
  [22] .got              PROGBITS         0000000000600ff8  00000ff8
       0000000000000008  0000000000000008  WA       0     0     8
  [23] .got.plt          PROGBITS         0000000000601000  00001000
       0000000000000058  0000000000000008  WA       0     0     8
  [24] .data             PROGBITS         0000000000601058  00001058
       0000000000000004  0000000000000000  WA       0     0     4
  [25] .bss              NOBITS           0000000000601060  0000105c
       0000000000000118  0000000000000000  WA       0     0     32
  [26] .comment          PROGBITS         0000000000000000  0000105c
       000000000000002c  0000000000000001  MS       0     0     1
  [27] .shstrtab         STRTAB           0000000000000000  00001088
       0000000000000108  0000000000000000           0     0     1
  [28] .symtab           SYMTAB           0000000000000000  00001910
       00000000000006f0  0000000000000018          29    48     8
  [29] .strtab           STRTAB           0000000000000000  00002000
       000000000000039f  0000000000000000           0     0     1
Key to Flags:
  W (write), A (alloc), X (execute), M (merge), S (strings), l (large)
  I (info), L (link order), G (group), T (TLS), E (exclude), x (unknown)
  O (extra OS processing required) o (OS specific), p (processor specific)
```
（8）查看一个包含调试信息的可执行的 ELF 文件的节头信息。
```
readelf -S main.debug.out
There are 35 section headers, starting at offset 0x3928:

Section Headers:
  [Nr] Name              Type             Address           Offset
       Size              EntSize          Flags  Link  Info  Align
  [ 0]                   NULL             0000000000000000  00000000
       0000000000000000  0000000000000000           0     0     0
  [ 1] .interp           PROGBITS         0000000000400238  00000238
       000000000000001c  0000000000000000   A       0     0     1
  [ 2] .note.ABI-tag     NOTE             0000000000400254  00000254
       0000000000000020  0000000000000000   A       0     0     4
  [ 3] .note.gnu.build-i NOTE             0000000000400274  00000274
       0000000000000024  0000000000000000   A       0     0     4
  [ 4] .gnu.hash         GNU_HASH         0000000000400298  00000298
       0000000000000030  0000000000000000   A       5     0     8
  [ 5] .dynsym           DYNSYM           00000000004002c8  000002c8
       0000000000000138  0000000000000018   A       6     1     8
  [ 6] .dynstr           STRTAB           0000000000400400  00000400
       0000000000000180  0000000000000000   A       0     0     1
  [ 7] .gnu.version      VERSYM           0000000000400580  00000580
       000000000000001a  0000000000000002   A       5     0     2
  [ 8] .gnu.version_r    VERNEED          00000000004005a0  000005a0
       0000000000000040  0000000000000000   A       6     2     8
  [ 9] .rela.dyn         RELA             00000000004005e0  000005e0
       0000000000000030  0000000000000018   A       5     0     8
  [10] .rela.plt         RELA             0000000000400610  00000610
       00000000000000c0  0000000000000018   A       5    12     8
  [11] .init             PROGBITS         00000000004006d0  000006d0
       000000000000001a  0000000000000000  AX       0     0     4
  [12] .plt              PROGBITS         00000000004006f0  000006f0
       0000000000000090  0000000000000010  AX       0     0     16
  [13] .text             PROGBITS         0000000000400780  00000780
       00000000000001e4  0000000000000000  AX       0     0     16
  [14] .fini             PROGBITS         0000000000400964  00000964
       0000000000000009  0000000000000000  AX       0     0     4
  [15] .rodata           PROGBITS         0000000000400970  00000970
       000000000000001c  0000000000000000   A       0     0     8
  [16] .eh_frame_hdr     PROGBITS         000000000040098c  0000098c
       0000000000000044  0000000000000000   A       0     0     4
  [17] .eh_frame         PROGBITS         00000000004009d0  000009d0
       0000000000000134  0000000000000000   A       0     0     8
  [18] .init_array       INIT_ARRAY       0000000000600dd8  00000dd8
       0000000000000010  0000000000000000  WA       0     0     8
  [19] .fini_array       FINI_ARRAY       0000000000600de8  00000de8
       0000000000000008  0000000000000000  WA       0     0     8
  [20] .jcr              PROGBITS         0000000000600df0  00000df0
       0000000000000008  0000000000000000  WA       0     0     8
  [21] .dynamic          DYNAMIC          0000000000600df8  00000df8
       0000000000000200  0000000000000010  WA       6     0     8
  [22] .got              PROGBITS         0000000000600ff8  00000ff8
       0000000000000008  0000000000000008  WA       0     0     8
  [23] .got.plt          PROGBITS         0000000000601000  00001000
       0000000000000058  0000000000000008  WA       0     0     8
  [24] .data             PROGBITS         0000000000601058  00001058
       0000000000000004  0000000000000000  WA       0     0     4
  [25] .bss              NOBITS           0000000000601060  0000105c
       0000000000000118  0000000000000000  WA       0     0     32
  [26] .comment          PROGBITS         0000000000000000  0000105c
       000000000000002c  0000000000000001  MS       0     0     1
  [27] .debug_aranges    PROGBITS         0000000000000000  00001088
       0000000000000030  0000000000000000           0     0     1
  [28] .debug_info       PROGBITS         0000000000000000  000010b8
       00000000000014f9  0000000000000000           0     0     1
  [29] .debug_abbrev     PROGBITS         0000000000000000  000025b1
       000000000000039f  0000000000000000           0     0     1
  [30] .debug_line       PROGBITS         0000000000000000  00002950
       0000000000000241  0000000000000000           0     0     1
  [31] .debug_str        PROGBITS         0000000000000000  00002b91
       0000000000000c4e  0000000000000001  MS       0     0     1
  [32] .shstrtab         STRTAB           0000000000000000  000037df
       0000000000000148  0000000000000000           0     0     1
  [33] .symtab           SYMTAB           0000000000000000  000041e8
       0000000000000768  0000000000000018          34    53     8
  [34] .strtab           STRTAB           0000000000000000  00004950
       000000000000039f  0000000000000000           0     0     1
Key to Flags:
  W (write), A (alloc), X (execute), M (merge), S (strings), l (large)
  I (info), L (link order), G (group), T (TLS), E (exclude), x (unknown)
  O (extra OS processing required) o (OS specific), p (processor specific)
```
可见，相对非调试版本的可执行文件，多了些".debug*"节的信息。

（9）查看一个目标文件的 ELF 文件的节头信息。
```
readelf -S print.o
There are 15 section headers, starting at offset 0x1e8:

Section Headers:
  [Nr] Name              Type             Address           Offset
       Size              EntSize          Flags  Link  Info  Align
  [ 0]                   NULL             0000000000000000  00000000
       0000000000000000  0000000000000000           0     0     0
  [ 1] .text             PROGBITS         0000000000000000  00000040
       0000000000000074  0000000000000000  AX       0     0     4
  [ 2] .rela.text        RELA             0000000000000000  00000900
       0000000000000108  0000000000000018          13     1     8
  [ 3] .data             PROGBITS         0000000000000000  000000b4
       0000000000000000  0000000000000000  WA       0     0     4
  [ 4] .bss              NOBITS           0000000000000000  000000b4
       0000000000000001  0000000000000000  WA       0     0     4
  [ 5] .rodata           PROGBITS         0000000000000000  000000b4
       0000000000000008  0000000000000000   A       0     0     1
  [ 6] .init_array       INIT_ARRAY       0000000000000000  000000c0
       0000000000000008  0000000000000000  WA       0     0     8
  [ 7] .rela.init_array  RELA             0000000000000000  00000a08
       0000000000000018  0000000000000018          13     6     8
  [ 8] .comment          PROGBITS         0000000000000000  000000c8
       000000000000002d  0000000000000001  MS       0     0     1
  [ 9] .note.GNU-stack   PROGBITS         0000000000000000  000000f5
       0000000000000000  0000000000000000           0     0     1
  [10] .eh_frame         PROGBITS         0000000000000000  000000f8
       0000000000000078  0000000000000000   A       0     0     8
  [11] .rela.eh_frame    RELA             0000000000000000  00000a20
       0000000000000048  0000000000000018          13    10     8
  [12] .shstrtab         STRTAB           0000000000000000  00000170
       0000000000000072  0000000000000000           0     0     1
  [13] .symtab           SYMTAB           0000000000000000  000005a8
       0000000000000210  0000000000000018          14    13     8
  [14] .strtab           STRTAB           0000000000000000  000007b8
       0000000000000145  0000000000000000           0     0     1
Key to Flags:
  W (write), A (alloc), X (execute), M (merge), S (strings), l (large)
  I (info), L (link order), G (group), T (TLS), E (exclude), x (unknown)
  O (extra OS processing required) o (OS specific), p (processor specific)
```

（10）查看一个静态库文件的 ELF 文件的节头信息。
```
readelf -S libprint.a

File: libprint.a(print.o)
There are 15 section headers, starting at offset 0x1e8:

Section Headers:
  [Nr] Name              Type             Address           Offset
       Size              EntSize          Flags  Link  Info  Align
  [ 0]                   NULL             0000000000000000  00000000
       0000000000000000  0000000000000000           0     0     0
  [ 1] .text             PROGBITS         0000000000000000  00000040
       0000000000000074  0000000000000000  AX       0     0     4
  [ 2] .rela.text        RELA             0000000000000000  00000900
       0000000000000108  0000000000000018          13     1     8
  [ 3] .data             PROGBITS         0000000000000000  000000b4
       0000000000000000  0000000000000000  WA       0     0     4
  [ 4] .bss              NOBITS           0000000000000000  000000b4
       0000000000000001  0000000000000000  WA       0     0     4
  [ 5] .rodata           PROGBITS         0000000000000000  000000b4
       0000000000000008  0000000000000000   A       0     0     1
  [ 6] .init_array       INIT_ARRAY       0000000000000000  000000c0
       0000000000000008  0000000000000000  WA       0     0     8
  [ 7] .rela.init_array  RELA             0000000000000000  00000a08
       0000000000000018  0000000000000018          13     6     8
  [ 8] .comment          PROGBITS         0000000000000000  000000c8
       000000000000002d  0000000000000001  MS       0     0     1
  [ 9] .note.GNU-stack   PROGBITS         0000000000000000  000000f5
       0000000000000000  0000000000000000           0     0     1
  [10] .eh_frame         PROGBITS         0000000000000000  000000f8
       0000000000000078  0000000000000000   A       0     0     8
  [11] .rela.eh_frame    RELA             0000000000000000  00000a20
       0000000000000048  0000000000000018          13    10     8
  [12] .shstrtab         STRTAB           0000000000000000  00000170
       0000000000000072  0000000000000000           0     0     1
  [13] .symtab           SYMTAB           0000000000000000  000005a8
       0000000000000210  0000000000000018          14    13     8
  [14] .strtab           STRTAB           0000000000000000  000007b8
       0000000000000145  0000000000000000           0     0     1
Key to Flags:
  W (write), A (alloc), X (execute), M (merge), S (strings), l (large)
  I (info), L (link order), G (group), T (TLS), E (exclude), x (unknown)
  O (extra OS processing required) o (OS specific), p (processor specific)
```

（11）查看一个动态库文件的 ELF 文件的节头信息。
```
readelf -S libprint.so
There are 28 section headers, starting at offset 0x1170:

Section Headers:
  [Nr] Name              Type             Address           Offset
       Size              EntSize          Flags  Link  Info  Align
  [ 0]                   NULL             0000000000000000  00000000
       0000000000000000  0000000000000000           0     0     0
  [ 1] .note.gnu.build-i NOTE             00000000000001c8  000001c8
       0000000000000024  0000000000000000   A       0     0     4
  [ 2] .gnu.hash         GNU_HASH         00000000000001f0  000001f0
       000000000000003c  0000000000000000   A       3     0     8
  [ 3] .dynsym           DYNSYM           0000000000000230  00000230
       00000000000001e0  0000000000000018   A       4     2     8
  [ 4] .dynstr           STRTAB           0000000000000410  00000410
       00000000000001ab  0000000000000000   A       0     0     1
  [ 5] .gnu.version      VERSYM           00000000000005bc  000005bc
       0000000000000028  0000000000000002   A       3     0     2
  [ 6] .gnu.version_r    VERNEED          00000000000005e8  000005e8
       0000000000000040  0000000000000000   A       4     2     8
  [ 7] .rela.dyn         RELA             0000000000000628  00000628
       0000000000000120  0000000000000018   A       3     0     8
  [ 8] .rela.plt         RELA             0000000000000748  00000748
       0000000000000090  0000000000000018   A       3    10     8
  [ 9] .init             PROGBITS         00000000000007d8  000007d8
       000000000000001a  0000000000000000  AX       0     0     4
  [10] .plt              PROGBITS         0000000000000800  00000800
       0000000000000070  0000000000000010  AX       0     0     16
  [11] .text             PROGBITS         0000000000000870  00000870
       0000000000000174  0000000000000000  AX       0     0     16
  [12] .fini             PROGBITS         00000000000009e4  000009e4
       0000000000000009  0000000000000000  AX       0     0     4
  [13] .rodata           PROGBITS         00000000000009ed  000009ed
       0000000000000008  0000000000000000   A       0     0     1
  [14] .eh_frame_hdr     PROGBITS         00000000000009f8  000009f8
       000000000000002c  0000000000000000   A       0     0     4
  [15] .eh_frame         PROGBITS         0000000000000a28  00000a28
       00000000000000a4  0000000000000000   A       0     0     8
  [16] .init_array       INIT_ARRAY       0000000000200da8  00000da8
       0000000000000010  0000000000000000  WA       0     0     8
  [17] .fini_array       FINI_ARRAY       0000000000200db8  00000db8
       0000000000000008  0000000000000000  WA       0     0     8
  [18] .jcr              PROGBITS         0000000000200dc0  00000dc0
       0000000000000008  0000000000000000  WA       0     0     8
  [19] .data.rel.ro      PROGBITS         0000000000200dc8  00000dc8
       0000000000000008  0000000000000000  WA       0     0     8
  [20] .dynamic          DYNAMIC          0000000000200dd0  00000dd0
       00000000000001f0  0000000000000010  WA       4     0     8
  [21] .got              PROGBITS         0000000000200fc0  00000fc0
       0000000000000040  0000000000000008  WA       0     0     8
  [22] .got.plt          PROGBITS         0000000000201000  00001000
       0000000000000048  0000000000000008  WA       0     0     8
  [23] .bss              NOBITS           0000000000201048  00001048
       0000000000000008  0000000000000000  WA       0     0     4
  [24] .comment          PROGBITS         0000000000000000  00001048
       000000000000002c  0000000000000001  MS       0     0     1
  [25] .shstrtab         STRTAB           0000000000000000  00001074
       00000000000000f9  0000000000000000           0     0     1
  [26] .symtab           SYMTAB           0000000000000000  00001870
       0000000000000600  0000000000000018          27    46     8
  [27] .strtab           STRTAB           0000000000000000  00001e70
       0000000000000335  0000000000000000           0     0     1
Key to Flags:
  W (write), A (alloc), X (execute), M (merge), S (strings), l (large)
  I (info), L (link order), G (group), T (TLS), E (exclude), x (unknown)
  O (extra OS processing required) o (OS specific), p (processor specific)
```

---
## 参考文献
[readelf(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/readelf.1.html)

[Linux命令大全.readelf命令](http://man.linuxde.net/readelf)

俞甲子,石凡,等.程序员的自我修养——链接、装载与库[M].北京:电子工业出版社,2009-04.C3.1目标文件的格式.P56-57
