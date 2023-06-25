(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{593:function(t,a,e){"use strict";e.r(a);var s=e(12),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),a("p",[t._v("watch 命令以周期性的方式执行给定的命令，并全屏显示执行结果。")]),t._v(" "),a("p",[t._v("watch 是一个非常实用的命令，基本所有的 Linux 发行版都带有它。如同名字一样，watch 可以帮助监测一个命令的运行结果，省得我们一遍遍地手动运行。比如 tail 一个 log 文件，ls 监测某个文件的大小变化等。缺省每 2 秒运行一下程序，可以用 -n 或 --interval 来指定间隔的时间。")]),t._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("watch [OPTIONS] COMMAND\n")])])]),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-d, --differences [PERMANENT]\n\t高亮显示最近两次更新之间的差异。-d cumulative 选项会把变动过的地方（不管最近的那次有没有变动）都高亮显示出来\n-n, --interval SECONDS\n\t指定监测间隔，单位秒。默认 2s，不能低于 0.1s\n-p, --precise\n\t尝试精确地按照指定的间隔进行一次命令监视\n-t, --no-title\n\t关闭 watch 命令在顶部的时间间隔、命令、当前时间的输出\n-b, --beep\n\t被监测的命令退出码非零时发出哔哔声\n-e, --errexit\n\t被监测的命令发生错误时 watch 停止更新，并在按键之后退出\n-g, --chgexit\n\t被监测的命令输出发生变化时退出 watch\n-c, --color\n\t解释 ANSI 颜色和样式序列\n-x, --exec\n\t将命令传递给 exec(2) 而不是 sh -c\n-h, --help\n\t显示帮助信息并退出\n-v, --version\n\t显示版本信息并退出\n")])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),a("p",[t._v("（1）重复执行 uptime 命令，默认每隔 2s 执行一次。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("watch uptime\n")])])]),a("p",[t._v("（2）查看当前目录文件 log 的变化。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('watch -d "ls -l | grep log"\n')])])]),a("p",[t._v("注意，当监测的命令中包含管道，需要使用引号将其括起来。")]),t._v(" "),a("p",[t._v("（3）每 10s 查看一次系统的平均负载。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("watch -n10 cat /proc/loadavg\n")])])]),a("p",[t._v("（4）每隔 1s 高亮显示网络连接数的变化情况。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("watch -n1 -d netstat -ant\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.man7.org/linux/man-pages/man1/watch.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("watch(1) - Linux manual page - man7.org"),a("OutboundLink")],1)]),t._v(" "),a("Vssue",{attrs:{title:"watch"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);