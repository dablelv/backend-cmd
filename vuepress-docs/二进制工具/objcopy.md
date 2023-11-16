## 1.命令简介

objcopy 是 GNU Binutils 的一员，将目标文件的一部分或者全部内容拷贝到另外一个目标文件中，或者实现目标文件的格式转换。

objcopy 使用 BFD 库读写目标文件，它可以将一个目标文件的内容拷贝到另外一个目标文件。objcopy 通过它的选项来控制其不同的动作，它可以将目标文件拷贝成和原来的文件不一样的格式。需要注意的是 objcopy 能够在两种格式之间拷贝一个完全链接的文件，在两种格式之间拷贝一个可重定位的目标文件可能不会正常地工作。 

objcopy 在做转换的时候会创建临时文件，然后将这些临时文件删除。objcopy 使用 BFD 来做它所有的转换工作；它访问 BFD 中描述的所有格式，可以不必指定就识别大多数的格式。 
通过指定输出目标为 srec（例如 -O srec），objcopy 可以用来生成 S-record 文件。 

通过指定输入目标为二进制文件（例如-O binary），objcopy 可以生成原始格式的二进制文件。当 objcopy 生成一个原始格式的二进制文件的时候，它会生成输入的目标文件的基本内存拷贝，然后所有的符号和可重定位信息都会被去掉。内存拷贝开始于最低段的加载地址，拷贝到输出文件。 

当生成一个 S-record 或者原始的二进制文件的时候，可以使用`-S`选项来移除一些调试信息。有时`-R`可以用来移除一些二进制文件不需要的段。 

注意：objcopy 不能用来改变文件的大小端属性。 

## 2.命令格式
```
objcopy [OPTION] [INFILE] [OUTFILE]
```

## 3.选项说明
```
-I bfdname, --input-target=bfdname
	指定输入文件的格式 bfdname，可取值 elf32-little，elf32-big 等，而不是让 objcopy 去推测
-O bfdname, --output-target=bfdname
    指定输出文件的的格式 bfdname
-F bfdname, --target=bfdname
    指定输入、输出文件的 bfdname，目标文件格式，只用于在目标和源文件之间传输数据，不转换
-B bfdarch, --binary-architecture=bfdarch
	将无架构的输入文件转换为目标文件时很有用，输出体系结构可以设置为 bfdarch。如果输入文件具有已知的架构，将忽略此选项。可以在程序内通过引用转换过程创建的特殊符号来访问二进制数据。这些符号称为 _binary_objfile_start、_binary_objfile_end 和 _binary_objfile_size。例如，您可以将图片文件转换为对象文件，然后使用这些符号在代码中访问它
-j sectionname, --only-section=sectionname 
    只将由 sectionname 指定的 section 拷贝到输出文件，可以多次指定，并且注意如果使用不当会导致输出文件不可用
-R sectionname, --remove-section=sectionname 
	从输出文件中去除掉指定的 section，可以多次指定，并且注意如果使用不当会导致输出文件不可用
-S, --strip-all 
    不从源文件拷贝符号信息和relocation信息。 
-g, --strip-debug 
    不从源文件拷贝调试符号信息和相关的段。对使用 -g 编译生成的可执行文件执行该选项后，生成的结果文件几乎和不用 -g 编译生成的可执行文件一样
--strip-unneeded 
	去掉所有重定位处理不需要的符号
-K symbolname, --keep-symbol=symbolname
    strip 的时候，保留由 symbolname 指定的符号信息。该选项可以多次指定
-N symbolname, --strip-symbol=symbolname 
    不拷贝由 symbolname 指定的符号信息。该选项可以多次指定 
--strip-unneeded-symbol=symbolname
	不拷贝重定位不需要的符号。该选项可以多次指定
-G symbolname, --keep-global-symbol=symbolname
	只保留 symbolname 为全局的，让其他符号均为局部符号，外部不可见。该选项可以多次指定
--localize-hidden
	在 ELF 目标文件中，将所有具有隐藏或内部可见性的符号标记为“局部”。此选项适用于特定的符号本地化的选项，如 -L
-L symbolname, --localize-symbol=symbolname 
	将变量 symbolname 变成文件局部的变量。该选项可以多次指定
-W symbolname, --weaken-symbol=symbolname 
    将指定符号变为弱符号。该选项可以多次指定
--globalize-symbol=symbolname 
    让变量symbolname变成全局范围，这样它可以在定义它的文件外部可见。可以多次指定。 
-w, --wildcard
    允许对其他选项中的 symbolname 使用正则表达式。问号(?)，星号(*)，反斜线(\)，和中括号([])可以出现在 symbolname 的任何位置。如果 symbolname 
	的第一个字符是感叹号(!)，那么表示相反的含义，例如
    -w -W !foo -W fo*
    表示将要弱化所有以 "fo" 开头的符号，但是除了符号 "foo"
-x, --discard-all
	不从源文件中拷贝非全局符号
-X, --discard-locals
	不拷贝编译器生成的局部变量(一般以 L 或者 .. 开头)
-b byte, --byte=byte
	只保留输入文件的每个第 byte 个字节(不会影响头部数据)。byte 的范围可以是 0 到 interleave-1。这里，interleave 通过 -i 选项指定，默认为 4。将文件创建成程序 rom 的时候，这个命令很有用。它经常用于 srec 输出目标
-i interleave, --interleave=interleave 
	每隔 interleave 字节拷贝 1 byte，interleave 默认为 4。通过 -b 选项指定选择哪个字节如果不指定 -b 那么 objcopy 会忽略这个选项
--interleave-width=width
	与 --interleave 配合使用，-b 指定起始下标，--interleave-width 则指定每次拷贝的字节数为 width，width 默认为 1。注意 -b 指定的下标与 --interleave-width 指定的字节数相加不能超过 -i 设定的宽度
-p, --preserve-dates
	将输出文件的访问和修改日期设置为与输入文件的访问和修改日期相同
-D, --enable-deterministic-archives
	以确定性模式操作。复制存档成员和写入存档索引时，对 uid、gid、时间戳使用零，对所有文件使用一致的文件模式。如果 binutils 配置了 --enable-deterministic-archives，那么这个模式是打开的，可以使用 -U 来禁止
-U, --disable-deterministic-archives
	与 -D 作用相反。复制存档成员和写入存档索引时，复制存档成员和写入存档索引时，使用他们实际的 uid、gid、时间戳和文件模式。这个选项是默认的，除非 binutils 配置了 --enable-deterministic-archives
--debugging
	如果可能，转换调试信息。这不是默认设置，因为只支持某些调试格式，而且转换过程可能很耗时
--gap-fill val
    在 section 之间的空隙中填充 val
--pad-to address
	将输出文件填充到加载地址 address。这是通过增加最后一段的大小来完成的。用 --gap-fill 指定的值（默认为零）填充额外的空间
--set-start val 
    设定新文件的起始地址为 val，并不是所有格式的目标文件都支持设置起始地址
--change-start INCR, --adjust-start INCR
    通过增加指定的值 INCR来调整起始地址，并不是所有格式的目标文件都支持设置起始地址
--change-addresses INCR, --adjust-vma INCR
	通过增加 INCR 调整所有 sections 的 VMA（virtual memory address）和 LMA（load memory address）以及起始地址。有些目标文件格式不支持对段地址的任意改动。注意，这不会重新定位分区
--change-section-address sectionpattern{=,+,-}val, --adjust-section-vma sectionpattern{=,+,-}val 
	调整指定 section 的 VMA/LMA 地址。如果 sectionpattern 未匹配到 section，则会引发告警，除非使用 --no-change-warnings 抑制告警
--change-section-lma sectionpattern{=,+,-}val
	调整指定 section 的 LMA 地址
--change-section-vma sectionpattern{=,+,-}val
	调整指定 section 的 VMA 地址
--change-warnings, --adjust-warnings
	使用 --change-section-address、--adjust-section-lma、--adjust-section-vma，如果 section pattern 没有匹配到 section，引发告警。该选项为默认选项
--no-change-warnings, --no-adjust-warnings
	使用 --change-section-address、--adjust-section-lma、--adjust-section-vma，如果 section pattern 没有匹配到 section，不引发告警
--set-section-flags sectionpattern=flag 
    为指定的 section 设置 flag，flag 是一个逗号分隔的由 flag name 组成的字符串，取值可以为 alloc, contents, load, noload, readonly, code, data, rom, share, debug。我们可以为一个没有内容的 section 设置 contents flag，但是清除一个有内容的 section 的 contents flag 是没有意义的--应当把相应的 section 移除。并不是所有的 flags 对所有格式的目标文件都有意义
--add-section sectionname=filename
    在拷贝文件的时候，添加一个名为 sectionname 的 section，该 section 的内容为 filename 的内容，大小为文件大小。这个选项只在那些可以支持任意名称 section 的文件格式上生效
--rename-section oldname=newname[,flags]
	将一个 section 的名字从 oldname 更改为 newname，同时也可以更改其 flags。这个在执行 linker 脚本进行重命名的时候，并且输出文件还是一个目标文件且不会是可执行文件的时候很有优势。 
    这个项在输入文件格式是 binary 的时候很有用，因为这经常会创建一个名称为 .data 的 section，例如，你想创建一个名称为 .rodata 的包含二进制数据的 section，这时候，你可以使用如下命令： 
    objcopy -I binary -O <output_format> -B <architecture> --rename-section .data=.rodata,alloc,load,readonly,data,contents <input_binary_file> <output_object_file>
--long-section-names {enable,disable,keep}
	在处理 COFF 和 PE-COFF 格式目标文件时，控制对长段名称的处理。默认行为是 keep，保留长段名称（如果有）。enable 和 disable 分别强制启用或禁用在输出目标文件中使用长段名称
--change-leading-char
	有些格式的目标文件在符号前使用特殊的前导字符，最常用的是下划线。此选项告诉 objcopy 在目标文件格式之间转换时更改每个符号的前导字符。如果不同的目标文件使用相同的前导字符，则此选项无效。否则，它将根据需要添加字符、删除字符或更改字符
--remove-leading-char
	移除目标文件全局符号前的前导字符
--reverse-bytes=num
	反转段中的字节。注意，段的大小必须可以被指定的数值 num 均分。该选项一般用于产生 ROM 映像用于在有问题的目标系统上进行调试。假如一个段的内容只有 8 个字节，为 12345678。
	使用 --reverse-bytes=2 ，输出文件中的结果是 21436587
	使用 --reverse-bytes=4，输出文件中的结果是 43218765
	使用 --reverse-bytes=2，接着再对输出文件使用 --reverse-bytes=4，再第二个输出文件中的结果将是 34127856
--srec-len=ival
	只对输出目标文件格式 SREC 有意义。指定生成 SREC 文件的最大长度为 ival
--srec-forceS3
	只对输出目标文件格式是 SREC 有意义。避免产生 S1/S2 记录，只产生 S3 格式的记录
--redefine-sym old=new
	变更符号名称。当链接两个目标文件产生符号名称冲突时，可以使用该选项来解决
--redefine-syms=filename
	将 --redefine-sym 选项应用于指定的文件 filename。该选项可以多次出现
--weaken
	将所有全局符号变更为弱符号。改选只对在支持弱符号的目标文件格式有效
--keep-symbols=filename
	将 --keep-symbol 选项应用于指定的文件 filename。该选项可以多次出现
--strip-symbols=filename
	将 --strip-symbol 选项应用于指定的文件 filename。该选项可以多次出现
--strip-unneeded-symbols=filename
	将 --strip-unneeded-symbol 选项应用于指定的文件 filename。该选项可以多次出现
--keep-global-symbols=filename
	将 --keep-global-symbol 选项应用于指定的文件 filename。该选项可以多次出现
--localize-symbols=filename
	将 --localize-symbol 选项应用于指定的文件 filename。该选项可以多次出现
--globalize-symbols=filename
	将 --globalize-symbol 选项应用于指定的文件 filename。该选项可以多次出现
--weaken-symbols=filename
	将 --weaken-symbol 选项应用于指定的文件 filename。该选项可以多次出现
--alt-machine-code=index
	果输出体系结构具有备用机器代码，请使用 indexth 代码而不是默认代码
--add-gnu-debuglink=path-to-file 
    为输出文件创建一个.gnu_debuglink 段，该段包含对一个调试信息文件 path-to-file 的引用
--writable-text
	将输出文本标记为可写。此选项对所有目标文件格式都没有意义
--readonly-text
	将输出文本标记为只读。此选项对所有目标文件格式都没有意义
--pure
	将输出文件标记为按需分页。此选项对所有目标文件格式都没有意义
--impure
	将输出文件标记为不纯。此选项对所有对象文件格式都没有意义
--prefix-symbols=string
	在输出文件中使用指定的字符串作为符号的前缀
--prefix-sections=string
	在输出文件中使用指定的字符串作为所有段名的前缀
--prefix-alloc-sections=string
	在输出文件中使用指定的字符串作为所有分配的段名的前缀
--add-gnu-debuglink=path-to-file
	创建一个 .gnu-debuglink 段，该段包含一个特定路径的文件引用，并且把它添加到输出文件中
--only-keep-debug 
    对文件进行 strip，移走所有不会被 --strip-debug 移走的 section，并且保持调试相关的 section 原封不动
--strip-dwo
	删除所有 DWARF .dwo 段的内容，保留其余调试段和所有符号的完整性
--extract-dwo
	提取所有 DWARF .dwo 段的内容
--file-alignment num
	指定文件对齐方式。文件中的段始终相对于文件起始部分的偏移量是数值 num 的整数倍，默认值为512。此选项特定于 PE 文件
--heap reserve, --heap reserve,commit
	指定要保留的内存字节数，以用作此程序的堆。此选项特定于 PE 文件
--image-base value
	使用指定的值 value 作为程序或 dll 的基地址。这是加载程序或 dll 时使用的最低内存位置。为了减少重新定位进而提高 dll 性能，每个 dll 都应该有一个唯一的基地址，且不应与其他 dll 重叠。对于可执行文件，默认值为 0x400000，对于 dll，默认值为 0x10000000。此选项特定于 PE 文件
--section-alignment num
	设置段的对齐方式。段在内存中的起始地址是指定数值 num 的整数倍。num 默认为 0x1000。此选项特定于 PE 文件
--stack reserve, --stack reserve,commit
	指定要保留的内存字节数，以用作此程序的栈。此选项特定于 PE 文件
--subsystem which, --subsystem which:major, --subsystem which:major.minor
	指定程序执行的子系统。which 的合法值为 "native"、"windows"、"console"、"posix"、"efi-app"、"efi-bsd"、"efi-rtd"、"sal-rtd" 和 "xbox"。您也可以选择性地设置子系统版本。此选项特定于 PE 文件
--extract-symbol
	保留文件的段标志和符号，但删除段的数据
--compress-debug-sections
	使用 zlib 压缩 DWARF 调试部分
-V, --version
	显示版本
-v,--verbose
	冗余输出
--help
	显示帮助
--info
	显示所有可用架构和目标文件格式
@file
	从文件中读取命令行选项
```

## 4.常用示例
为了后面的示例，先看一下源码。
```
//
//@file: main.cpp
//

#include <iostream>
using namespace std;

void my_print() {
    cout<<"print"<<endl;
}    

int main(int argc, char *argv[]) {
    my_print();
    cout<<"hello"<<endl;
    return 0;
}
```
通过 g++ 分别生成带调试信息与不带调试信息的可执行文件 main.debug 和 main。
```
g++ -g -o main.debug main.cpp
g++ -o main main.cpp
```

（1）分离可执行文件中的调试信息后并将两者关联。
```
#1.生成调试信息文件，将其中的调试信息提取出来之后保存成一个文件
objcopy --only-keep-debug main.debug main.debuginfo

#2.将调试信息从可执行文件中剥离
objcopy --strip-debug main.debug main.stripdebug

#3.为不含调试信息的可执行文件添加调试信息
objcopy --add-gnu-debuglink=main.debuginfo main.stripdebug
```

（2）添加一个自定义的段到可执行文件，段的内容由一个文件指定。
```
objcopy --add-section mysection=text.txt main main.add
```
使用命令 `readelf -S main.add` 可以看到可执行文件 main.add 中多出来了一个段 mysection。
```
Section Headers:
  [Nr] Name              Type             Address           Offset
       Size              EntSize          Flags  Link  Info  Alig
  ...
  [27] mysection         PROGBITS         0000000000000000  00001088
       0000000000000006  0000000000000000           0     0     1
  ...
```

（3）将指定的段拷贝出来。这里拷贝出我们新增的段 mysetion。
```
objcopy --only-section=mysection main.add section_hello
```

（4）去掉指定名称的段。去掉我们新增的段 mysection。
```
objcopy -R mysection main.add main.remove
```
使用命令 `readelf -S main.remove` 可以看到可执行文件 main.remove 中的段 mysection 已经不见了。

---
## 参考文献
[GNU Binutils](https://www.gnu.org/software/binutils/)

[objcopy(1) manual - linux.org](https://www.linux.org/docs/man1/objcopy.html)

[objcopy(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/objcopy.1.html)

[Linux命令手册.objcopy](http://linux.51yip.com/search/objcopy)

[Linux命令学习手册-objcopy命令](http://blog.chinaunix.net/uid-9525959-id-2001841.html)

<Vssue title="objcopy" />