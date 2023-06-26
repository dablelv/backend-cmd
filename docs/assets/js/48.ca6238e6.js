(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{381:function(s,a,t){"use strict";t.r(a);var e=t(12),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[s._v("#")]),s._v(" 1.命令简介")]),s._v(" "),a("p",[s._v("yes 重复输出一个字符串，直到被杀死。")]),s._v(" "),a("p",[s._v("yes 不带任何参数运行时默认输出的字符串是 y。")]),s._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[s._v("#")]),s._v(" 2.命令格式")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("STRING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" OPTION\n")])])]),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[s._v("#")]),s._v(" 3.选项说明")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\n\t显示此帮助并退出。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n\t输出版本信息并退出。\n")])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[s._v("#")]),s._v(" 4.常用示例")]),s._v(" "),a("p",[s._v("（1）持续回复 y。")]),s._v(" "),a("p",[s._v("命令行或 Shell 脚本中，有时需要回复多次 yes 或 no，例如你要复制一個目录时，他会询问你是否覆盖目标文件，这个时候除了用 cp -f 以外，还可以用 yes 这个命令。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" a.txt b.txt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n")])])]),a("p",[s._v("如果回复的次数不多且确定时，我们也可以 echo 来模拟 yes。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"y'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('y"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" a.txt b.txt "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n")])])]),a("p",[s._v("（2）持续输出指定字符串，直至被杀死。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" no\nno\nno\nno\nno\nno\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n^C\n")])])]),a("p",[s._v("命令行下使用 Ctrl + C 发送 SIGINT 信号中断程序。")]),s._v(" "),a("p",[s._v("（3）查看帮助信息。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Usage: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("STRING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  or:  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" OPTION\nRepeatedly output a line with all specified STRING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'y'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("     display this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("  output version information and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n\nGNU coreutils online help: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("http://www.gnu.org/software/coreutils/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nFor complete documentation, run: info coreutils "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yes invocation'")]),s._v("\n")])])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/yes.1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("yes(1) - Linux manual page - man7.org"),a("OutboundLink")],1)]),s._v(" "),a("Vssue",{attrs:{title:"yes"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);