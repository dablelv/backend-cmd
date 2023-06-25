(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{598:function(t,s,a){"use strict";a.r(s);var e=a(12),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),s("p",[t._v("ps（process status）命令用于报告当前进程快照。")]),t._v(" "),s("p",[t._v("ps 用于查看当前进程状态，查看的进程信息是当前的一个快照，如果想实时动态地查看进程信息，可以使用 "),s("a",{attrs:{href:"https://dablelv.blog.csdn.net/article/details/102385811",target:"_blank",rel:"noopener noreferrer"}},[t._v("top 命令"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("ps 命令是最基本同时也是非常强大的进程查看命令，使用该命令可以查看进程的属主、进程ID、父进程ID、启动时间、占用 CPU 时长、启动命令、当前运行的状态等等，总之大部分信息都是可以通过执行该命令得到。ps 命令可以搭配 "),s("a",{attrs:{href:""}},[t._v("kill")]),t._v(" 命令随时终止不必要的进程。")]),t._v(" "),s("p",[t._v("ps 命令可接收多种类型的命令选项，主要有：")]),t._v(" "),s("ul",[s("li",[t._v("Unix 选项，可以分组，选项前面必须有一个连字符；")]),t._v(" "),s("li",[t._v("BSD 选项，可以分组，不能与连字符一起使用；")]),t._v(" "),s("li",[t._v("GNU long 选项，前面有两个连字符。")])]),t._v(" "),s("p",[t._v("不同类型的选项可以自由混合，但可能会出现冲突。有一些同义的选项，它们在功能上是相同的。")]),t._v(" "),s("p",[t._v("默认情况下，ps 选择与当前用户具有相同有效用户 ID（EUID）且与调用者终端关联的所有进程。它显示进程 ID（PID）、与进程相关联的终端（TTY）、以 [DD-]hh:mm:ss 格式累积的 CPU 时间（TIME）和可执行文件名（CMD）。默认情况下输出不排序。")]),t._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),s("h3",{attrs:{id:"_3-1-简单的进程选择-simple-process-selection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-简单的进程选择-simple-process-selection"}},[t._v("#")]),t._v(" 3.1 简单的进程选择（SIMPLE PROCESS SELECTION）")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("a\n\t显示与终端关联的所有进程，包括其他用户的进程。一般与 x 选项联用，用于显示所有进程。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n\t选择所有进程，等同于 -e。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v("\n\t选择除会话引导进程（参见 getsid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("）和与终端无关的进程之外的所有进程。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n\t选择除会话引导进程外的所有进程。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--deselect")]),t._v("\n\t选择除满足指定条件进程之外的所有进程。等同于 -N。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n\t选择所有进程，等同于 -A。\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-N")]),t._v("\n\t选择除满足指定条件进程之外的所有进程。等同于 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--deselect")]),t._v("\nT\n\t选择与当前终端关联的所有进程。等同于没有参数的选项 t\nr\n\t只显示运行状态的进程\nx\n\t显示 "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("EUID")]),t._v("（有效用户ID ）等同于 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" 命令的所有进程，包括与终端无关联的进程。一般与 a 选项联用，用于显示所有进程。\n")])])]),s("h3",{attrs:{id:"_3-2-通过参数列表选择进程-process-selection-by-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-通过参数列表选择进程-process-selection-by-list"}},[t._v("#")]),t._v(" 3.2 通过参数列表选择进程（PROCESS SELECTION BY LIST）")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" cmdlist\n\t按照命名名称选择进程\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(", -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\np, -p, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pid")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pidlist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t按照进程 ID 选择进程\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("grplist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t按照实际用户组 ID（RGID，real group ID）或者用户组名称选择进程\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("grplist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t按照有效用户组 ID（EGID，effective group ID）或者有效用户组名称选择进程\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--ppid")]),t._v(" pidlist\n\t按照父进程 ID 选择进程\nq pidlist\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-q")]),t._v(" pidlist\n--quick-pid pidlist\n\t按进程 ID 以快速模式选择。比如不会选择父进程 ID 出现在 pidlist 的进程\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" sesslist\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--sid")]),t._v(" sesslist\n\t按 session ID 选择\nt, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ttylist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t按终端名称选择。\n-U, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("userlist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t按实际用户 ID（RUID，real user ID）选择\nU, -u, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("userlist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t按有效用户 ID（"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("EUID")]),t._v("，effective user ID）选择\n")])])]),s("h3",{attrs:{id:"_3-3-输出格式控制-output-format-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-输出格式控制-output-format-control"}},[t._v("#")]),t._v(" 3.3 输出格式控制（OUTPUT FORMAT CONTROL）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-f\n\t以完整的格式输出，常与 -e 一起使用。此选项可以与许多其他 Unix 样式的选项组合，来添加其他列，比如与 -L 一起使用时，显示 LWP（线程 ID）和 NLWP（线程数）列。它还导致命令参数被打印\n-F\n\t在 -f 选项的基础上，添加 SZ、RSS、PSR 列\no, -o, --format <format>\n\t用户自定义输出格式，以指定的宏选择需要输出的 UNIX or BSD 列。\nj\n\t以 BSD 任务控制格式输出。\n-j\n\t以任务格式输出。\nl\n\t以 BSD 长格式输出。\n-l\n\t以长格式输出，经常与 -y 选项一起使用。\nZ, -M\n\t添加一列安全数据（用于 SELinux）。\nO, -O <format>\n\t用户自定义输出格式，其中会预定义一些公共字段。等同于 -o pid,format,state,tname,time,command 或 -o pid,format,tname,time,cmd。\ns\n\t以程序信号的格式输出\nu\n\t以用户为主的格式来输出，常与 ax 选项一起使用\nv\n\t以虚拟内存的格式输出\nX\n\t以寄存器格式输出\n-y\n\t以 RSS 列代替 ADDR。此选项只能与 -l 一起使用\n")])])]),s("h3",{attrs:{id:"_3-4-输出修饰符-output-modifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-输出修饰符-output-modifiers"}},[t._v("#")]),t._v(" 3.4 输出修饰符（OUTPUT MODIFIERS）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("c\n\t列出命令一栏 CMD 时，显示命令的名称，而不包含路径、命令参数或修饰符。可以与 -f 选项联用，只显示命令的名称\n--cols, --columns <n>\n\t设置每列的最大字符数\nS, --cumulative\n\t统计进程相关数据时，比如 CPU 使用率，包括已经死掉的进程\ne\n\t在 COMMAND 列后输出环境变量\nf, --forest\n\t用ASCII字符显示树状结构，表达程序间的相互关系\nh\n\t不显示列名\n-H\n\t显示树状结构，表示程序间的相互关系\n--headers\n\t重复输出列名，每页输出一行列名\nk, --sort <spec>\n\t指定排序规则。spec 语法是 [+|-]key[,[+|-]key[,...]]，其中 + 表示递增，- 表示递减，默认为递增。key 表示列名称，比如 pid（进程 ID）、ppid（父进程 ID）。如果以 pid 递减输出，可以指定 k -pid 或 --sort -pid\nn\n\t以数字表示 USER 和 WCHAN 列，包括 UID 和 GID\n-n, N <namelist>\n\t设置查找内核函数名称的文件，用于正确地显示 WCHAN 列。默认搜索路径为：\n\t$PS_SYSMAP\n\t$PS_SYSTEM_MAP\n\t/proc/*/wchan\n\t/boot/System.map-$(uname -r)\n\t/boot/System.map\n\t/lib/modules/$(uname -r)/System.map\n\t/usr/src/linux/System.map\n\t/System.map\n--no-headers, --no-heading\n\t不输出列名。\nO order\n\t按照指定的列进行排序，语法是 O[+|-]k1[,[+|-]k2[,...]]。其中 + 表示递增，- 表示递减，默认为递增。k1，k2... 表示列名称的一个字母简称，比如 p（进程 ID）、P 表示（父进程 ID）。如果以 pid 递减输出，可以指定 O -p。列名称的单个字母简称详见手册\n--rows n\n\t设置每页显示的行数\nw, -w\n\t采用宽格式输出\n--width <n>\n\t每列字符数\n")])])]),s("h3",{attrs:{id:"_3-5-线程展示-thread-display"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-线程展示-thread-display"}},[t._v("#")]),t._v(" 3.5 线程展示（THREAD DISPLAY）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("H\n\t将线程当做进程显示\n-L\n\t显示线程，可能使用 LWP（线程 ID） 和 NLWP（线程数） 列\nm\n\t在进程后显示线程\nL\n\t列出所有输出格式说明符\nV, -V, --version\n\t打印 procps-ng 软件包的版本。procps-ng 软件包包含了一系列查看和管理系统和进程的工具，比如 ps, top, vmstat, w, kill, free, slabtop, skill 等命令。\n")])])]),s("p",[t._v("进程状态代号（PROCESS STATE CODES）取值如下，一般是 STAT 或者 S 列。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("D\t不可中断的睡眠状态，通常在等待 IO\nR   运行或就绪状态\nS   可中断的睡眠状态，比如正在等待某个事件的完成\nT   被作业控制信号停止\nt   在跟踪期间被调试器停止\nW   分页中. 不适用于内核2.6.xx及以后的版本\nX   死亡\nZ   僵尸进程，已终止，但未被父进程回收\n")])])]),s("p",[t._v("对于 BSD 风格的输出格式，进程状态 STAT 列可能会出现其它字符:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<    高优先级\nN    低优先级\nL    有些页被锁进内存\ns    包含子进程\nl    多线程\n+    属前端进程组，与终端关联\n")])])]),s("p",[t._v("其它概念，比如输出列的说明符、输出列的含义、影响 ps 的环境变量等，详见 ps 手册。")]),t._v(" "),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),s("p",[t._v("（1）使用标准语法查看所有进程。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ps -ef\nUID        PID  PPID  C STIME TTY          TIME CMD\nroot         1     0  0  2018 ?        01:44:29 /usr/lib/systemd/systemd --system --deserialize 19\nroot         2     0  0  2018 ?        00:00:19 [kthreadd]\nroot         3     2  0  2018 ?        00:00:27 [ksoftirqd/0]\nroot         5     2  0  2018 ?        00:00:00 [kworker/0:0H]\nroot         7     2  0  2018 ?        00:01:03 [migration/0]\n...\n")])])]),s("p",[t._v("各列含义如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("UID\t\t启动进程的用户 ID\nPID\t\t进程 ID\nPPID\t父进程 ID\nC\t\tCPU 使用率，等于 CPU 所有核占用时间比上进程运行的总时间，多核的情况下可能会大于 100%。等同于列 %CPU\nSTIME\t进程开始时间\nTTY\t\t启动进程的终端\nTIME\t占用 CPU 的累加时间\nCMD\t\t命令名称及参数\n")])])]),s("p",[t._v("（2）使用 BSD 语法查看所有进程。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ps axu\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.0  45120  2708 ?        Ss    2018 104:29 /usr/lib/systemd/systemd --system --deserialize 19\nroot         2  0.0  0.0      0     0 ?        S     2018   0:19 [kthreadd]\nroot         3  0.0  0.0      0     0 ?        S     2018   0:27 [ksoftirqd/0]\nroot         5  0.0  0.0      0     0 ?        S<    2018   0:00 [kworker/0:0H]\nroot         7  0.0  0.0      0     0 ?        S     2018   1:03 [migration/0]\n...\n")])])]),s("p",[t._v("相对于"),s("code",[t._v("ps -ef")]),t._v("，多出了如下几列：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("USER\t启动进程的用户名称。等于 ps -ef 输出的 UID 列\n%CPU\tCPU 使用率。等于 ps -ef 输出的 C 列\n%MEM\t内存使用率\nVSZ\t\t虚拟内存大小，单位 KB\nRSS\t\t常驻物理内存大小，单位 KB\nSTAT\t进程状态\nCOMMAND\t命令名称及参数。等于 ps -ef 输出的 CMD 列\n")])])]),s("p",[t._v("（3）以 PID 列按递减序输出。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ps -ef --sort -pid\nUID        PID  PPID  C STIME TTY      STAT   TIME CMD\nroot     31806     1  0  2018 ?        Ss     0:00 /usr/sbin/sshd\nroot     30105     2  0 Sep19 ?        S      0:23 [kworker/u12:1]\nroot     27902     2  0  2018 ?        S<     0:00 [ext4-dio-unwrit]\nroot     27901     2  0  2018 ?        S      6:28 [jbd2/vda2-8]\n...\n")])])]),s("p",[t._v("（4）按照可执行文件名称查看进程信息。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ps -C sshd -f\nUID        PID  PPID  C STIME TTY          TIME CMD\nroot       524     1  0  2018 ?        00:00:00 /usr/sbin/sshd -D -f /etc/ssh/sshd_config.l\nroot     23881 31806  0 Oct03 ?        00:00:11 sshd: root@pts/0,pts/1\nroot     31806     1  0  2018 ?        00:00:00 /usr/sbin/sshd\n")])])]),s("h2",{attrs:{id:"_5-拓展知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-拓展知识"}},[t._v("#")]),t._v(" 5.拓展知识")]),t._v(" "),s("h3",{attrs:{id:"_5-1-uid、ruid、euid、suid-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-uid、ruid、euid、suid-的区别"}},[t._v("#")]),t._v(" 5.1 UID、RUID、EUID、SUID 的区别")]),t._v(" "),s("p",[t._v("RUID（Real User ID）即 UID，表示真实用户 ID。创建进程的用户 ID 即为 RUID。")]),t._v(" "),s("p",[t._v("EUID（Effective User ID）表示有效用户 ID，用于系统决定用户对文件的访问权限，也就是说当用户做任何一个操作时，最终看它有没有权限，都是判断有效用户 ID 是否有权限。一般情况下 EUID 等于 RUID。")]),t._v(" "),s("p",[t._v("SUID（Set User ID）用于权限的开放，具有 SUID 权限的文件会在其执行时，使调用者临时获得该文件拥有者的权限，即将调用者的 EUID 变为该文件拥有者的 UID。")]),t._v(" "),s("p",[t._v("比如存放用户名及密码的文件 /etc/shadow 权限如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ls -lh /etc/shadow\n---------- 1 root root 853 Jan  4  2019 /etc/shadow\n")])])]),s("p",[t._v("可见 shadow 文件的属主是 root，但是任何用户都可以使用 passwd 命令修改它。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ls -lh /usr/bin/passwd\n-rwsr-xr-x 1 root root 28K Jun 10  2014 /usr/bin/passwd\n")])])]),s("p",[t._v("注意属主的权限执行位是 s，表示 passwd 命令具有 SUID 权限，它使一般用户在执行 passwd 命令的时候，拥有了 root 的权限。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/ps.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ps(1) - Linux manual page - man7.org"),s("OutboundLink")],1)]),t._v(" "),s("Vssue",{attrs:{title:"ps"}})],1)}),[],!1,null,null,null);s.default=r.exports}}]);