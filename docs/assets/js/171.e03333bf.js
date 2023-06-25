(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{502:function(s,t,a){"use strict";a.r(t);var e=a(12),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[s._v("#")]),s._v(" 1.命令简介")]),s._v(" "),t("p",[s._v("lscpu 显示有关 CPU 架构的信息。")]),s._v(" "),t("p",[s._v("lscpu 从伪文件系统（sysfs）、/proc/cpuinfo 和任何可用的特定体系架构库（如 Powerpc 上的 librtas）收集 CPU 架构信息。命令输出可读，也可用于分析。输出内容包括：CPU、线程、内核的数量，以及非统一存储器存取（NUMA）节点。此外还包括关于 CPU 高速缓存和高速缓存共享的信息，家族、模型、bogoMIPS、字节顺序和步进（stepping）。")]),s._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[s._v("#")]),s._v(" 2.命令格式")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lscpu "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[s._v("#")]),s._v(" 3.选项说明")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-a, –all\n\t显示上线和下线的 CPU 信息（默认与 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" 一起使用）。只能与选项 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" 或-p 一起指定。\n-b, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--online")]),s._v("\n\t只显示离线的 CPU 信息（默认与 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" 一起使用）。只能与选项 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" 或 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" 一起指定。\n-c, –offline\n\t只显示离线的 CPU 信息（默认与 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" 一起使用）。只能与选项 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" 或 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" 一起指定。\n-e, –extended"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("list"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t以可读的格式显示 CPU 信息。\n\n\t如果 list 参数省略，输出所有可用列。在指定了 list 参数时，选项的字符串、等号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("和列表必须不包含任何空格或其他空白。比如：-e"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cpu,node 或 –extended"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cpu,node。\n-h, –help\n\t显示帮助信息并退出。\n-p, –parse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("list"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t优化命令输出，便于分析。如果省略 list，则命令的输出与早期版本的 lscpu 兼容，兼容格式以两个逗号分隔 CPU 缓存列。如果没有发现 CPU 缓存，则省略缓存列。如果使用 list 参数，则缓存列以冒号（:）分隔。\n\n\t在指定了 list 参数时，选项的字符串、等号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("和列表必须不包含空格或其它空白。比如 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cpu,node 或 –parse"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cpu,node。\n-s, –sysroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("directory"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t为一个 Linux 实例收集 CPU 数据，而不是发出 lscpu 命令的实例。指定的目录是要检查 Linux 实例的系统根。\n-x, –hex\n\t使用十六进制来表示 CPU 集合（如 0x3），默认情况是打印列表格式的集合"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\n-y, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--physical")]),s._v("\n\t显示具有拓扑元素（核心、套接字等）的所有列的物理 ID。 除了由 lscpu 分配的逻辑 ID 之外，物理 ID 是内核提供的特定于平台的值。 物理 ID 不一定是唯一的，它们可能不会按顺序排列。如果内核无法检索元素的物理 ID，则 lscpu 将打印破折号 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 字符。\n\n\tCPU 逻辑编号不受此选项影响。\n-V, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n\t显示版本信息并退出。\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[s._v("#")]),s._v(" 4.常用示例")]),s._v(" "),t("p",[s._v("（1）无参执行 lscpu，查看 CPU 信息总览。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lscpu")]),s._v("\nArchitecture:          x86_64\nCPU op-mode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("-bit, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-bit\nByte Order:            Little Endian\nCPU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nOn-line CPU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" list:   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,1")]),s._v("\nThread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" per core:    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nCore"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" per socket:    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nSocket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nNUMA node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nVendor ID:             GenuineIntel\nCPU family:            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\nModel:                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("94")]),s._v("\nModel name:            Intel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("R"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Xeon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("R"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Gold "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6146")]),s._v(" CPU @ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".20GHz\nStepping:              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nCPU MHz:               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3192.502")]),s._v("\nBogoMIPS:              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6385.00")]),s._v("\nHypervisor vendor:     KVM\nVirtualization type:   full\nL1d cache:             32K\nL1i cache:             32K\nL2 cache:              4096K\nL3 cache:              28160K\nNUMA node0 CPU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,1")]),s._v("\nFlags:                 fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl eagerfpu pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single fsgsbase bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx avx512f avx512dq rdseed adx smap clflushopt avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 arat\n")])])]),t("p",[s._v("从上面的信息可以看出，机器有 1 个插槽（Socket），插槽上的核心数（Core(s) per socket）为 2，每个核心线程数（Thread(s) per core）为 1，所以总的逻辑 CPU 数（CPU(s)）为 2。")]),s._v(" "),t("p",[s._v("此外还可以看出 CPU 架构为 x86_64，主频和一二三级缓存大小等信息。")]),s._v(" "),t("p",[s._v("各字段说明如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Architecture:        # 架构\nCPU op-mode(s):      # CPU 运行模式\nByte Order:          # 字节序\nCPU(s):              # 逻辑 CPU 核数\nOn-line CPU(s) list: # 在线 CPU 列表\nThread(s) per core:  # 每个核的线程数\nCore(s) per socket:  # 每个 CPU 插槽核数/每颗物理 CPU 核数\nCPU socket(s):       # CPU 插槽数\nNUMA node(s):        # NUMA（Non-Uniform Memory Access）节点\nVendor ID:           # CPU 厂商 ID\nCPU family:          # CPU 系列\nModel:               # 型号\nModel name:          # 型号名称\nStepping:            # 步进\nCPU MHz:             # CPU 主频\nCPU max MHz:         # CPU 最大主频\nCPU min MHz:         # CPU 最小主频\nVirtualization:      # CPU 支持的虚拟化技术\nL1d cache:           # 一级缓存（CPU 的 L1 数据缓存）\nL1i cache:           # 一级缓存（CPU 的 L1 指令缓存）\nL2 cache:            # 二级缓存\n...\n")])])]),t("p",[s._v("另外，除了 lscpu，通常还会从 /sys 和 /proc 获取 CPU 相关信息。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo\n")])])]),t("p",[s._v("查看 cpu0 线程数：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/devices/system/cpu/cpu0/topology/core_cpus\n")])])]),t("p",[s._v("（2）以可读格式显示 CPU 信息。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lscpu -e")]),s._v("\nCPU NODE SOCKET CORE L1d:L1i:L2:L3 ONLINE\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":0:0:0       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":1:1:0       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])])]),t("p",[s._v("（3）显示 CPU 指定列的信息，如查看逻辑 CPU。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# lscpu -e=CPU\nCPU\n0\n1\n")])])]),t("p",[s._v("可用列有：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("CPU  \t\t\t逻辑 CPU 数量。\nCORE  \t\t\t逻辑核心数量。一个核心可以包含多个CPU。\nSOCKET  \t\t逻辑插座数量。一个 socket 可以包含多个核心。\nBOOK  \t\t\t逻辑 book 数。一个 book 可以包含多个插座。\nNODE  \t\t\t逻辑 NUMA 节点数量。\nDRAWER  \t\t逻辑抽屉数（不太明白，好像和book有关系）\nCACHE  \t\t\tCPU 之间如何共享缓存\nPOLARIZATION \t虚拟硬件上的 CPU 调度模式\nADDRESS\t\t\tCPU 物理地址\nCONFIGURED  \t管理程序是否分配了CPU\nONLINE  \t\t显示 Linux 当前是否使用 CPU\nMAXMHZ\t\t\tCPU 最大频率\nMINMHZ\t\t\tCPU 最小频率\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/lscpu.1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("lscpu(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),s._v(" "),t("Vssue",{attrs:{title:"lscpu"}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);