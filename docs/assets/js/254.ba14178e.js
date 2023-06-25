(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{586:function(a,t,s){"use strict";s.r(t);var e=s(12),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),t("p",[a._v("pkill（process kill）杀死某一类进程。")]),a._v(" "),t("p",[a._v("pkill 是 ps 命令和 kill 命令的结合，用来杀死某一类进程。")]),a._v(" "),t("p",[a._v("pkill 命令与 kill、killall 十分相似，都是用于杀死（结束）指定进程的命令。不过 kill 是杀掉单个进程，killall 是杀掉所有同名进程，pkill 是杀掉一类进程或者某个用户的所有进程。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("options"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-<signal>, --signal <signal>\n\t定义要发送到每个匹配进程的信号。可以使用数字或信号名称，如 -9 或 -。\n-f, --full\n\t模式通常仅与进程名称匹配。设置 -f 时，将需要匹配完整的命令行。\n-n, --newest\n\t只选择最新的（最近启动的）匹配进程。\n-o, --oldest\n\t只选择最老的（最久启动的）匹配进程。\n-v, --inverse\n\t选中与条件不符合的进程。\n-x, --exact\n\t进程名称与模式需要完全匹配。\n-P, --parent <ppid>,...\n\t匹配父进程为指定进程 ID 的进程。\n-t, --terminal <term>,...\n\t选择指定终端下的所有程序。\n-u, --euid <euid>,...\n\t匹配有效用户 ID 的进程。可以使用数值或符号值。\n-U, --uid <uid>,...\n\t匹配实际用户 ID 的进程。可以使用数值或符号值。\n-V, --version\n\t显示版本信息。\n-h, --help\n\t\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),t("p",[a._v("（1）杀死所有父进程为指定 ID 的进程。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-KILL")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-SIGKILL")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5323")]),a._v("\n")])])]),t("p",[a._v("（2）杀死终端 1 下的所有进程。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" pts/1\n")])])]),t("p",[a._v("（3）杀死指定用户的所有进程。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" alice\n")])])]),t("p",[a._v("（4）杀死不属于 root 用户的所有进程。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root\n")])])]),t("p",[a._v("（5）查看版本信息。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-V")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" from procps-ng "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.3")]),a._v(".10\n")])])]),t("p",[a._v("（6）查看帮助信息。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v("\nUsage:\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pattern"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\nOptions:\n -"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sig"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--signal")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sig"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("    signal to send "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("either number or name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n -e, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--echo")]),a._v("                display what is killed\n -c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--count")]),a._v("               count of matching processes\n -f, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--full")]),a._v("                use full process name to match\n -g, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--pgroup")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PGID,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   match listed process group IDs\n -G, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--group")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("GID,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("     match real group IDs\n -n, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--newest")]),a._v("              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("most")]),a._v(" recently started\n -o, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--oldest")]),a._v("              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" least recently started\n -P, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--parent")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PPID")]),a._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   match only child processes of the given parent\n -s, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--session")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("SID,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   match session IDs\n -t, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--terminal")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tty,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  match by controlling terminal\n -u, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--euid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ID,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("       match by effective IDs\n -U, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--uid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ID,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("        match by real IDs\n -x, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--exact")]),a._v("               match exactly with the "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" name\n -F, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--pidfile")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" PIDs from "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n -L, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--logpidfile")]),a._v("          fail "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" PID "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" is not locked\n "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ns")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PID"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("                match the processes that belong to the same\n                           namespace as "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--nslist")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ns,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("         list "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" namespaces will be considered "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v("\n                           the "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--ns")]),a._v(" option.\n                           Available namespaces: ipc, mnt, net, pid, user, uts\n\n -h, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("     display this "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" and "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n -V, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("  output version information and "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n\nFor "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v(" details see pgrep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(".\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/pkill.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("pkill(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1847239",target:"_blank",rel:"noopener noreferrer"}},[a._v("【Linux随笔】Killall 、Kill 、Pkill三个命令之间的区别 - 腾讯云"),t("OutboundLink")],1)]),a._v(" "),t("Vssue",{attrs:{title:"pkill"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);