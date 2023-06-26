(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{433:function(a,t,e){"use strict";e.r(t);var s=e(12),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),t("p",[a._v("tac（cat 的反序）以行为单位反序输出文件内容，即第一行最后显示，最后一行先显示。输出内容和 "),t("a",{attrs:{href:"https://dablelv.blog.csdn.net/article/details/78569737",target:"_blank",rel:"noopener noreferrer"}},[a._v("cat"),t("OutboundLink")],1),a._v(" 命令相反。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tac [OPTION]... [FILE]...\n")])])]),t("p",[a._v("如果没有文件或文件是 -，读取标准输入。")]),a._v(" "),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),t("p",[a._v("长选项的强制性参数对于短选项也是强制的。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-b, --before\n\t在行前而非行尾添加分隔标志\n-r, --regex\n \t将分隔标志视作正则表达式来解析\n-s, --separator=STRING\n  \t指定字符串代替换行符作为行分隔标志\n--help\n \t显示帮助信息并退出\n--version\n \t显示版本信息并退出\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),t("p",[a._v("给定文件 file1 和 file2 用于测试，内容分别是：\nfile1 内容：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("123\n456\n789\n")])])]),t("p",[a._v("file2 内容：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("abc\ndef\n")])])]),t("p",[a._v("（1）反向查看文件内容。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tac file1\n789\n456\n123\n")])])]),t("p",[a._v("（2）反向查看文件内容，以字符串 b 作为行分隔符。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('tac -s"b" file2\nc\ndef\nab\n')])])]),t("p",[a._v("（3）连接文件 file1 和 file2 到 file3。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tac file1 file2 > file3\n\ncat file3\n789\n456\n123\ndef\nabc\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/tac.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("tac(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("Vssue",{attrs:{title:"tac"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);