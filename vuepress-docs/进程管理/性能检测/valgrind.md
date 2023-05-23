## 1.命令简介
valgrind 是一套用于调试和分析程序的工具集。

Valgrind 工具套件提供了许多调试和分析工具，可帮助您使程序更快、更正确。 这些工具中最受欢迎的称为 Memcheck。 它可以检测 C 和 C++ 程序中常见的许多与内存相关的错误，这些错误可能导致崩溃和不可预知的行为。

Valgrind 通常包括如下几个工具：
```
Memcheck 是重量级内存检测工具。
Cachegrind 检查程序中缓存使用出现的问题。
Callgrind 检查程序中函数调用过程中出现的问题。
Helgrind 检测多线程中的数据竞争问题。
DRD 也用于分析多线程。与Helgrind类似，但是用不同的分析技术，所以可以检测不同的问题。
Massif，检查程序中堆栈使用中出现的问题。
DHAT 是一种不同类型的堆分析器。 它可以帮助您了解块生命周期、块利用率和布局效率低下的问题。
BBV 是一个实验性的 SimPoint 基本块向量生成器。 它对从事计算机体系结构研究和开发的人很有用。
```
Valgrind 中包含的 Memcheck 工具可以检查以下内存错误：
```
1.访问不应该访问的内存，如使用超过 malloc 分配的内存空间、溢出堆栈顶部、以及使用已经释放的内存（Accessing memory you shouldn't）。
2.使用未初始化的内存 (Use of uninitialised memory)。
3.堆内存释放不正确，如重复 free、申请和释放内存函数 malloc/free/new/delete 不匹配（Incorrect freeing of heap memory）。
4.内存泄漏 (Memory leaks – where pointers to malloc’d blocks are lost forever)。
5.将可疑（可能为负）值传递给内存分配函数的大小参数（Passing a fishy (presumably negative) value to the size parameter of a memory allocation function）。
6.src 和 dst 的重叠(Overlapping src and dst pointers in memcpy() and related functions)。
```
本文主要提供了使用 Memcheck 检测程序中的内存错误所需的最少信息。 有关 Memcheck 和其他工具的完整文档，请阅读[用户手册](https://valgrind.org/docs/manual/manual.html)。

## 2.命令格式
```
valgrind [valgrind-options] [your-program] [your-program-options]
```

## 3.选项说明
Valgrind 的参数分为两类，一类是 core 的参数，它对所有的工具都适用；另外一类就是具体某个工具（如 Memcheck）的参数。Valgrind 提供了大量的参数满足你特定的调试需求，具体可参考其[用户手册](https://valgrind.org/docs/manual/manual.html)。

要想使用 Memcheck，可以在 Valgrind 命令行上指定 --tool=memcheck。 不过，不必这样做，因为 Memcheck 是 Valgrind 的默认工具。

首先了解下 Valgrind 的基本选项。
```shell
-h, --help
	显示所有选项的帮助，包括核心和所选工具。 如果重复该选项，则相当于给出 --help-debug。
	
--help-debug
	和--help相同，并且还能显示通常只有Valgrind的开发人员使用的调试选项。
	
--version
	显示 Valgrind 内核的版本号，工具可以有他们自已的版本号。有一种方案可以确保工具仅在核心版本可以使用时执行。这样可以减工具和内核之间版本不兼容导致奇怪问题的概率。
	
-q, --quiet
	安静地运行，只打印错误信息。在进行回归测试或者有其它的自动化测试机制时会非常有用。
	
-v, --verbose
	显示详细信息。在各个方面显示你的程序的额外信息，如共享对象加载，使用的抑制，执行引擎和工具的进程，异常行为的警告信息。重复这个标记可以增加详细的级别。
	
--trace-children=<yes|no> [default: no]
	启用后，Valgrind 将跟踪通过 exec 系统调用启动的子进程。 这对于多进程程序是必要的。
	
--trace-children-skip=patt1,patt2,...
	此选项仅在指定 --trace-children=yes 时有效。 它允许跳过一些孩子。 该选项采用逗号分隔的模式列表，用于 Valgrind 不应跟踪的子可执行文件的名称。模式可能包括元字符 ？和 *，它们具有通常的含义。
	
--trace-children-skip-by-arg=patt1,patt2,...
	这与 --trace-children-skip 相同，但有一个区别：是否跳过子进程是通过检查子进程的参数而不是其可执行文件的名称。
	
--child-silent-after-fork=<yes|no> [default: no]
	启用后，Valgrind 不会显示由 fork 调用产生的子进程的任何调试或日志输出。 在处理创建子进程时，这可以使输出不那么混乱（尽管更具误导性）。 与 --trace-children 结合使用特别有用。
	
--vgdb=<no|yes|full> [default: yes]
	当指定 --vgdb=yes 或 --vgdb=full 时，Valgrind 将提供“gdbserver”功能。 这允许外部 GNU GDB 调试器在 Valgrind 上运行时控制和调试您的程序。 --vgdb=full 会产生显著的性能开销，但会提供更精确的断点和观察点。 有关详细说明，请参阅 [Debugging your program using Valgrind's gdbserver and GDB](https://valgrind.org/docs/manual/manual-core-adv.html#manual-core-adv.gdbserver)。
	
--vgdb-error=<number> [default: 999999999]
	当使用 --vgdb=yes 或 --vgdb=full 启动 Valgrind gdbserver 时使用此选项。报告错误的工具将冻结程序并等待您连接 GDB 之前报告指定数量的错误。 因此，零值将导致 gdbserver 在您的程序执行之前启动。 这通常用于在执行前插入 GDB 断点，也适用于不报告错误的工具，例如 Massif。
	
--vgdb-stop-at=<set> [default: none]
	当使用 --vgdb=yes 或 --vgdb=full 启用 Valgrind gdbserver 时使用此选项。 在报告 --vgdb-error 指定数量的错误之后，将为每个错误调用 Valgrind gdbserver。
	
--track-fds=<yes|no|all> [default: no]
	启用后，Valgrind 将在退出或请求时通过 gdbserver 监控命令 v.info open_fds 打印出打开的文件描述符列表。 与每个文件描述符一起打印文件打开位置的堆栈回溯以及与文件描述符相关的任何详细信息，例如文件名或套接字详细信息。 使用 all 将报告输出到标准输入、标准输出和标准错误。
	
--time-stamp=<yes|no> [default: no]
	启用后，每条消息前面都会显示自启动以来经过的挂钟时间，以天、小时、分钟、秒和毫秒表示。
	
--log-fd=<number> [default: 2, stderr]
	指定 Valgrind 应该将其所有消息发送到指定的文件描述符。 默认值 2 是标准错误通道 (stderr)。 请注意，这可能会干扰客户端自己对 stderr 的使用，因为 Valgrind 的输出将与客户端发送到 stderr 的任何输出交错。
	
--log-file=<filename>
	指定 Valgrind 应将其所有消息发送到指定文件。 如果文件名为空，则会导致中止。 文件名中可以使用三种特殊的格式说明符。

	%p 替换为当前进程 ID。 这对于调用多个进程的程序非常有用。

	%n 被替换为此进程唯一的文件序列号。 这对于从同一文件名模板生成多个文件的进程很有用。

	%q{FOO} 替换为环境变量 FOO 的内容。 如果 {FOO} 部分格式错误，则会导致中止。 这个说明符很少需要，但在某些情况下非常有用（例如，在运行 MPI 程序时）。

	%% 替换为 %。

	如果 % 后跟任何其他字符，则会导致中止。

	如果文件名指定了相对文件名，则将其放在程序的初始工作目录中：这是程序在 fork 或 exec 之后开始执行时的当前目录。
	
--log-socket=<ip-address:port-number>
	指定 Valgrind 应将其所有消息发送到指定 IP 地址的指定端口。 可以省略端口，缺省为 1500。 如果无法与指定的套接字建立连接，Valgrind 会退回到将输出写入标准错误（stderr）。 此选项旨在与 valgrind-listener 程序结合使用。有关详细信息，请参阅手册中的 [the commentary](https://valgrind.org/docs/manual/manual-core.html#manual-core.comment)。
```
下面给出 Memcheck 的选项说明。
```
--leak-check=<no|summary|yes|full> [default: summary]
	启用后，在客户端程序完成时搜索内存泄漏。 如果设置为摘要，则表示发生了多少泄漏。 如果设置为 full 或 yes，每个单独的泄漏将详细显示和/或计为错误，由选项 --show-leak-kinds 和 --errors-for-leak-kinds 指定。

	如果给出 --xml=yes，memcheck 将自动使用值 --leak-check=full。 如果您对泄漏结果不感兴趣，可以使用 --show-leak-kinds=none 来减小 xml 输出的大小。
	
--leak-resolution=<low|med|high> [default: high]
	在进行泄漏检查时，确定 Memcheck 是否愿意考虑不同的回溯是相同的，以便将多个泄漏合并到一个泄漏报告中。 当设置为 low 时，只有前两个条目需要匹配。 med 时，四个条目必须匹配。 high 时，所有条目都需要匹配。

	对于核心泄漏调试，您可能希望将 --leak-resolution=high 与 --num-callers=40 或一些如此大的数字一起使用。

	请注意， --leak-resolution 设置不会影响 Memcheck 查找泄漏的能力，只会改变结果的呈现方式。

--show-leak-kinds=<set> [default: definite,possible]
	通过以下方式之一指定要在完整泄漏搜索中显示的泄漏类型：
	1.以逗号分隔的一个或多个类型 definite indirect possible reachable。
	2.all 指定完整的集合（所有泄漏类型）。 它相当于 --show-leak-kinds=defined,indirect,possible,reachable。
	3.none 表示空集。

--errors-for-leak-kinds=<set> [default: definite,possible]
	完整泄漏搜索中指定哪种泄漏种类计为错误。 <set> 的指定类似于 --show-leak-kinds。

--leak-check-heuristics=<set> [default: all]
	指定泄漏搜索期间要使用的泄漏检查启发式集。 启发式控制哪些指向块的内部指针导致它被认为是可访问的。 启发式集以下列方式之一指定：
	1.使用逗号分隔一个或多个 stdstring length64 newarray multipleinheritance。
	2.all 激活完整的启发式方法。 相当于 --leak-check-heuristics=stdstring,length64,newarray,multipleinheritance。
	3.none 表示空集。

	请注意，这些启发式方法取决于 C++ 编译器生成的对象的布局。 它们已经使用一些 gcc 版本（例如 4.4 和 4.7）进行了测试。 它们可能无法与其他 C++ 编译器一起正常工作。

--show-reachable=<yes|no> , --show-possibly-lost=<yes|no>
	这些选项提供了另一种方法来指定要显示的泄漏类型：
	1.--show-reachable=no --show-possibly-lost=yes 等价于 --show-leak-kinds=definite,possible。
	2.--show-reachable=no --show-possibly-lost=no 等价于 --show-leak-kinds=definite。
	3.--show-reachable=yes 等价于 --show-leak-kinds=all。

	注意 --show-possibly-lost=no 不会生效当 --show-reachable=yes 被指定时。

--xtree-leak=<no|yes> [no]
	如果设置为 yes，则在退出时完成的泄漏搜索结果将在“Callgrind Format”执行树文件中输出。 请注意，这会自动设置选项 --leak-check=full 和 --show-leak-kinds=all，以允许 xtree 可视化工具（例如 kcachegrind）选择要可视化的泄漏类型。生成的文件将包含以下事件：
	RB : Reachable Bytes
	PB : Possibly lost Bytes
	IB : Indirectly lost Bytes
	DB : Definitely lost Bytes (direct plus indirect)
	DIB : Definitely Indirectly lost Bytes (subset of DB)
	RBk : reachable Blocks
	PBk : Possibly lost Blocks
	IBk : Indirectly lost Blocks
	DBk : Definitely lost Blocks

	上述所有事件的增加或减少也将在文件中输出，以提供 2 次连续泄漏搜索之间的增量（增加或减少）。 例如，iRB 是 RB 事件的增加，dPBk 是 PBk 事件的减少。 对于完成的第一次泄漏搜索，增加和减少事件的值将为零。

	有关执行树的详细说明，请参阅 [Execution Trees](https://valgrind.org/docs/manual/manual-core.html#manual-core.xtree)。

--xtree-leak-file=<filename> [default: xtleak.kcg.%p]
	指定 Valgrind 应在指定文件中生成 xtree 泄漏报告。 文件名中出现的任何 %p、%q 或 %n 序列都以与 --log-file 完全相同的方式展开。

--undef-value-errors=<yes|no> [default: yes]
	控制 Memcheck 是否报告使用未定义值错误。 如果您不想看到未定义的值错误，请将其设置为 no。 它还具有一定程度上加快 Memcheck 的副作用。 AddrCheck（在 Valgrind 3.1.0 中被移除）的功能类似于带有 --undef-value-errors=no 的 Memcheck。

--track-origins=<yes|no> [default: no]
	控制 Memcheck 是否跟踪未初始化值的来源。 默认情况下，它不会，这意味着尽管它可以告诉您未初始化的值正在以危险的方式使用，但它无法告诉您未初始化的值来自何处。 这通常使追查根本问题变得困难。

	当设置为 yes 时，Memcheck 会跟踪所有未初始化值的来源。 然后，当报告一个未初始化的值错误时，Memcheck 将尝试显示该值的来源。 源可以是以下四个位置之一：堆块、栈分配、客户端请求或其他其他源（如对 brk 的调用）。

--partial-loads-ok=<yes|no> [default: yes]
	控制 Memcheck 如何处理32位、64位、128位和256位自然对齐的加载，这些加载来自某些字节可寻址而其他字节不可寻址的地址。如果为 yes，这样的加载不会产生地址错误。相反，来自非法地址的加载字节被标记为未初始化，而与合法地址对应的字节则以正常方式处理。

	当否时，来自部分无效地址的加载被视为与来自完全无效地址的加载相同：发出非法地址错误，并且结果字节被标记为已初始化。

	请注意，以这种方式运行的代码违反了 ISO C/C++ 标准，应视为已损坏。 如果可能的话，应该修复这样的代码。

--expensive-definedness-checks=<no|auto|yes> [default: auto]
	控制 Memcheck 在检查某些值的定义时是否应该使用更精确但也更昂贵（耗时）的工具。 特别是，这会影响整数加法、减法和相等比较的检测。

--keep-stacktraces=alloc|free|alloc-and-free|alloc-then-free|none [default: alloc-and-free]
	控制 malloc'd 和/或 free'd 块保留哪些栈跟踪。

--freelist-vol=<number> [default: 20000000]
	当客户端程序使用 free（在 C 中）或 delete（C++）释放内存时，该内存不会立即用于重新分配。 相反，它被标记为不可访问并放置在已释放块的队列中。 目的是尽可能推迟释放的内存重新进入循环的时间点。 这增加了 Memcheck 在块被释放后的一段时间内能够检测到对块的无效访问的机会。

	此选项指定队列中块的最大总大小（以字节为单位）。 默认值为两千万字节。 增加此值会增加 Memcheck 使用的内存总量，但可能会检测到释放块的无效使用，否则这些释放块将无法检测到。

--freelist-big-blocks=<number> [default: 1000000]
	当释放块队列中的块可用于重新分配时，Memcheck 将优先重新循环大小大于或等于 --freelist-big-blocks 的块。 这确保了释放大块（特别是释放大于 --freelist-vol 的块）不会立即导致空闲列表中所有（或很多）小块的重新循环。 换句话说，这个选项增加了发现“小”块的悬空指针的可能性，即使在大块被释放时也是如此。

	将值设置为 0 意味着所有块都按 FIFO 顺序重新循环。

--workaround-gcc296-bugs=<yes|no> [default: no]
	启用后，假设在栈指针下方一小段距离的读取和写入是由于 GCC 2.96 中的错误导致的，并且不报告它们。 “小距离”默认为 256 字节。 请注意，GCC 2.96 是一些古老的 Linux 发行版（RedHat 7.X）的默认编译器，因此您可能需要使用此选项。 如果没有必要，请不要使用它，因为它可能会导致真正的错误被忽略。更好的选择是使用更新的 GCC，其中修复了此错误。

--ignore-range-below-sp=<number>-<number>
	这是对已弃用的 --workaround-gcc296-bugs 选项的更通用替代。 指定时，它会导致 Memcheck 不报告堆栈指针下方指定偏移量的访问错误。 这两个偏移量必须是十进制正数，并且有点违反直觉，第一个偏移量必须更大，以暗示要忽略的非环绕地址范围。 例如，要忽略堆栈指针下方 8192 字节处的 4 字节访问，请使用 --ignore-range-below-sp=8192-8189。 只能指定一个范围。

--show-mismatched-frees=<yes|no> [default: yes]
	启用后，Memcheck 使用与分配函数匹配的函数检查堆块是否被释放。 也就是说，它期望 free 用于释放 malloc 分配的块，delete 用于 new 分配的块，delete[] 用于 new[] 分配的块。 如果检测到不匹配，则会报告错误。 这通常很重要，因为在某些环境中，使用不匹配的函数释放可能会导致崩溃。

	然而，有一种情况是无法避免这种不匹配的。 那是当用户提供调用 malloc 的 new/new[] 和调用 free 的 delete/delete[] 的实现时，这些函数是不对称内联的。 例如，假设 delete[] 是内联的，但 new[] 不是。 结果是 Memcheck 将所有 delete[] 调用“视为”对 free 的直接调用，即使程序源不包含不匹配的调用。

	这会导致很多令人困惑和不相关的错误报告。 --show-mismatched-frees=no 禁用这些检查。 但是，通常不建议禁用它们，因为您可能会因此错过真正的错误。

--ignore-ranges=0xPP-0xQQ[,0xRR-0xSS]
	Memcheck 的可寻址性检查将忽略此选项中列出的任何范围（并且可以指定多个范围，用逗号分隔）。

--malloc-fill=<hexnumber>
	用指定的字节填充由 malloc、new 等分配的块，而不是由 calloc 分配的块。 当试图摆脱模糊的内存损坏问题时，这可能很有用。 Memcheck 仍然认为分配的区域是未定义的——这个选项只影响它的内容。 请注意，当 --malloc-fill 用作客户端请求 VALGRIND_MEMPOOL_ALLOC 或 VALGRIND_MALLOCLIKE_BLOCK 的参数时，它不会影响内存块。

--free-fill=<hexnumber>
	用指定的字节值填充由 free、delete 等释放的块。 当试图摆脱模糊的内存损坏问题时，这可能很有用。Memcheck 仍然认为访问已释放的区域无效，此选项仅影响其内容。 请注意，当 --free-fill 用作客户端请求 VALGRIND_MEMPOOL_FREE 或 VALGRIND_FREELIKE_BLOCK 的参数时，它不会影响内存块。
```

## 4.常用示例
为了使 Valgrind 发现的错误更精确，如能够定位到源代码行，建议在编译 C 和 C++ 程序时加上 -g 参数，编译优化选项请选择 O0，虽然这会降低程序的执行效率。

### 4.1 内存泄漏 
Valgrind 可以用来检测程序在哪个位置发生内存泄漏，例如下面的程序：
```c
#include <stdlib.h>

int main() {
    int *array = malloc(sizeof(int));
    return 0;
}
```
编译程序时，需要加上-g选项：
```shell
$ gcc -g -o main main.c
```
使用 Valgrind 检测内存使用情况：
```shell
$ valgrind --tool=memcheck --leak-check=full  ./main
==31416== Memcheck, a memory error detector
==31416== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.
==31416== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info
==31416== Command: ./main_c
==31416==
==31416==
==31416== HEAP SUMMARY:
==31416==     in use at exit: 4 bytes in 1 blocks
==31416==   total heap usage: 1 allocs, 0 frees, 4 bytes allocated
==31416==
==31416== 4 bytes in 1 blocks are definitely lost in loss record 1 of 1
==31416==    at 0x4C2DBF6: malloc (vg_replace_malloc.c:299)
==31416==    by 0x400537: main (main.c:4)
==31416==
==31416== LEAK SUMMARY:
==31416==    definitely lost: 4 bytes in 1 blocks
==31416==    indirectly lost: 0 bytes in 0 blocks
==31416==      possibly lost: 0 bytes in 0 blocks
==31416==    still reachable: 0 bytes in 0 blocks
==31416==         suppressed: 0 bytes in 0 blocks
==31416==
==31416== For counts of detected and suppressed errors, rerun with: -v
==31416== ERROR SUMMARY: 1 errors from 1 contexts (suppressed: 0 from 0)
```
先看看输出信息中的 HEAP SUMMARY，它表示程序在堆上分配内存的情况，其中的1 allocs表示程序分配了 1 次内存，0 frees 表示程序释放了 0 次内存，4 bytes allocated 表示分配了 4 个字节的内存。

另外，Valgrind 也会报告程序是在哪个位置发生内存泄漏。例如，从下面的信息可以看到，程序发生了一次内存泄漏，位置是 main.c 文件的第 4 行：
```
==31416== 4 bytes in 1 blocks are definitely lost in loss record 1 of 1
==31416==    at 0x4C2DBF6: malloc (vg_replace_malloc.c:299)
==31416==    by 0x400537: main (main.c:4)
```

### 4.2 内存越界
　C/C++ 程序经常出现的 Bug 就是数组越界访问，例如下面的 C++ 程序出现了越界访问：
```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v(10, 0);
    std::cout << v[10] << std::endl;
    return 0;
}
```
使用 Valgrind 分析这段程序，Valgrind 会提示越界访问：
```shell
$ g++ -std=c++11 -g -o main main.cpp
$ valgrind --tool=memcheck --leak-check=full ./main
==31523== Memcheck, a memory error detector
==31523== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.
==31523== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info
==31523== Command: ./main
==31523==
==31523== Invalid read of size 4
==31523==    at 0x400AD7: main (main.cpp:7)
==31523==  Address 0x5ab5ca8 is 0 bytes after a block of size 40 alloc'd
==31523==    at 0x4C2E216: operator new(unsigned long) (vg_replace_malloc.c:334)
==31523==    by 0x4010D3: __gnu_cxx::new_allocator<int>::allocate(unsigned long, void const*) (new_allocator.h:104)
==31523==    by 0x401040: std::allocator_traits<std::allocator<int> >::allocate(std::allocator<int>&, unsigned long) (alloc_traits.h:491)
==31523==    by 0x400F91: std::_Vector_base<int, std::allocator<int> >::_M_allocate(unsigned long) (stl_vector.h:170)
==31523==    by 0x400E7E: std::_Vector_base<int, std::allocator<int> >::_M_create_storage(unsigned long) (stl_vector.h:185)
==31523==    by 0x400D1E: std::_Vector_base<int, std::allocator<int> >::_Vector_base(unsigned long, std::allocator<int> const&) (stl_vector.h:136)
==31523==    by 0x400C11: std::vector<int, std::allocator<int> >::vector(unsigned long, int const&, std::allocator<int> const&) (stl_vector.h:291)
==31523==    by 0x400AB9: main (main.cpp:6)
```
Invalid read of size 4 表示越界读取 4 个字节，这个操作出现在 main.cpp 文件的第 6 行。另外可以看到，vector 分配了一块 40 字节的内存，程序越界访问这块内存之后的 4 个字节。

### 4.3 内存覆盖
C 语言的强大和可怕之处在于其可以直接操作内存，C 标准库中提供了大量这样的函数，比如 strcpy, strncpy, memcpy, strcat 等，这些函数有一个共同的特点就是需要设置源地址 (src)，和目标地址(dst)，src 和 dst 指向的地址不能发生重叠，否则结果将不可预期。

下面就是一个 src 和 dst 发生重叠的例子。src 和 dst 所指向的地址相差 20，但指定的拷贝长度却是 21，这样就会把之前的拷贝值覆盖。
```c
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
	char x[50];
	int i;
	for (i=0;i<50;i++) {
		x[i] = i+1;
	}
	strncpy(x+20,x,20);
	strncpy(x+20,x,21);
	return 0;
}
```
使用 Valgrind 分析这段程序，Valgrind 会提示内存覆盖：
```shell
$ gcc -g -o main main.c
$ valgrind --tool=memcheck --leak-check=full ./main
...
==2976== Source and destination overlap in strncpy(0xfff0003f9, 0xfff0003e5, 21)

==2976== at 0x4C31626: __strncpy_sse2_unaligned (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)

==2976== by 0x400608: main (main.c:12)
```
输出结果显示上述程序中第 12 行，源地址和目标地址设置出现重叠。准确的发现了上述问题。

### 4.4 使用未初始化的值
另一种经常出现的 Bug，就是程序访问了未初始化的内存。
```cpp
#include <iostream>

int main() {
    int x;
    if (x == 0) {
        std::cout << "X is zero" << std::endl;
    }
    return 0;
}
```
使用 Valgrind 检测这个程序：
```shell
$ g++ -std=c++11 -g -o main main.cpp
$ valgrind --tool=memcheck --leak-check=full ./main
==31554== Memcheck, a memory error detector
==31554== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.
==31554== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info
==31554== Command: ./main
==31554==
==31554== Conditional jump or move depends on uninitialised value(s)
==31554==    at 0x400852: main (main.cpp:6)
```
输出中提示了 main.cpp 文件的第 6 行访问了未初始化的内存。

### 4.5 内存申请与释放函数不匹配
内存申请与释放函数不匹配，如 C++ 程序中使用 malloc 申请内存，但错误地使用 delete 去释放，那么 Valgrind 也可以检测出来。
```cpp
#include <stdio.h>
#include <stdlib.h>

int main() {
	int *p = NULL;
	p = (int*)malloc(sizeof(int));
	if (p == NULL) {
		perror("malloc failed");
	}
    printf("address [0x%p]\n", p);
	delete p;
    return 0;
}
```
使用 Valgrind 检测这个程序。
```shell
$ g++ -g -o main main.cpp
$ valgrind --tool=memcheck --leak-check=full ./main
...
==10305== Mismatched tree() / delete / delete []
==10305== at Ox4C2F2413: operator delete(void*) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)
==10305== by 0x400725: main (main.cpp:11)
==10305== Aodrexs—Ox5aooco0 size 4 alloc'd
==10305== at Ox4C2088F: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)
==10305== by Ox4006EE: main (main.cpp:6)
...
```
在 C++ 中，以与分配方式匹配的方式释放内存非常重要。
- 如果使用 malloc、calloc、realloc、valloc 或 memalign 分配，则必须使用 free 释放。
- 如果使用 new 分配，则必须使用 delete 释放。
- 如果使用 new[] 分配，则必须使用 delete[] 释放。

## 5.小结
内存泄露检测包括动态内存使用的规范性，根本的解决办法是程序员保持良好的编码习惯，使用动态内存时谨慎考虑，保证申请与释放的必然性。因为，一些隐晦的问题可能需要在特定条件下才会引起内存泄露，依赖于检测工具也是需要长时间运行软件才能发现。

Valgrind memcheck 工具更多是用于检测内存泄露、内存非法访问、重复释放等问题，会引系统段错误，使用 GDB 结合系统产生的 core dump 文件，也能快速定位到调用位置。而内存泄露不会立即导致系统异常，只有运行一定时间后系统申请不到内存时才会引起异常。因此，借助 Valgrind memcheck 工具来检测内存泄露是一个高效的方法之一。

---
## 参考文献
[Valgrind Home](https://valgrind.org/)

[valgrind(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/valgrind.1.html)

[内存检测王者之剑—valgrind - 知乎专栏](https://zhuanlan.zhihu.com/p/56538645)

[使用Valgrind 检测C++ 内存泄漏 - Senlin's Blog](http://senlinzhan.github.io/2017/12/31/valgrind/)

<Vssue title="valgrind" />