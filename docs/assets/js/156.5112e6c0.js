(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{487:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),a("p",[t._v("init 命令是 Linux 下的进程初始化工具。")]),t._v(" "),a("p",[t._v("init 进程是所有 Linux 进程的父进程，它的进程号为1。init 命令是 Linux 操作系统中不可缺少的程序之一，init 进程是 Linux 内核引导运行的，是系统中的第一个进程。")]),t._v(" "),a("p",[t._v("注意：Centos7.5 中第一个进程是 systemd 进程")]),t._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("init "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("command 为系统运行等级和 init daemon 进程 控制命令。")]),t._v(" "),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("--help\n\t显示帮助信息。\n--no-wall\n\t在停止/断电/重新启动之前不发送 wall 消息。\n")])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),a("p",[t._v("（1）显示帮助信息。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("init "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("\ninit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("COMMAND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nSend control commands to the init daemon.\n\n     "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("      Show this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n     --no-wall   Don't send wall message before halt/power-off/reboot\n\nCommands:\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("              Power-off the machine\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("              Reboot the machine\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("     Start runlevelX.target unit\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", s, S        Enter rescue mode\n  q, Q           Reload init daemon configuration\n  u, U           Reexecute init daemon\n")])])]),a("p",[t._v("（2）切换系统运行级别。")]),t._v(" "),a("p",[t._v("Linux 通常有 7 个运行级别：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("0 停机\n1 单用户模式\n2 多用户模式（没有 NFS（Network File System））\n3 完全多用户模式（有 NFS），登录后进入控制台命令行模式\n4 系统保留未使用\n5 图形界面\n6 重新启动\n")])])]),a("p",[t._v("比如重启系统。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("init "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n")])])]),a("p",[t._v("再如关机。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("init "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://linux.die.net/man/8/init",target:"_blank",rel:"noopener noreferrer"}},[t._v("init(8) - Linux man page - die.net"),a("OutboundLink")],1)]),t._v(" "),a("Vssue",{attrs:{title:"init"}})],1)}),[],!1,null,null,null);a.default=e.exports}}]);