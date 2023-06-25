(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{446:function(a,t,s){"use strict";s.r(t);var e=s(12),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),t("p",[a._v("tr（translate）用来转换或删除一段文字。")]),a._v(" "),t("p",[a._v("tr 所有的功能均可由 "),t("a",{attrs:{href:"https://dablelv.blog.csdn.net/article/details/53197905",target:"_blank",rel:"noopener noreferrer"}},[a._v("sed"),t("OutboundLink")],1),a._v(" 来完成，可以将 tr 视为 sed 的一个极简实现。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". SET1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("SET2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-c, -C, --complement SET1 [SET2]\n\t将字符集 SET1 以外的其他字符删除或者转换为字符集 SET2 中的最后一个字符（如果你指定了多个字符的话）。\n-d, --delete\n\t删除指定字符集中的字符。\n-s, --squeeze-repeats\n\t如果 SET1 中的字符连续出现多次，压缩重复的字符，只保留一个。\n-t, --truncate-set1\n\t先将 SET1 的长度截为和 SET2 相等。\n--help\n\t显示帮助信息并退出。\n--version\n\t显示版本信息并退出。\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),t("p",[a._v("（1）将 last 输出的信息中所有小写的字符变成大写字符。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("last "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("a-z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("A-Z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("（2）将 /etc/passwd 输出的信息中的冒号 : 删除。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/passwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("':'")]),a._v("\n")])])]),t("p",[a._v("（3）将 DOS 文件转成 Unix 文件。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/passwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\r'")]),a._v("\n")])])]),t("p",[a._v("（4）删除空行。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" new_file\n")])])]),t("p",[a._v('（5）将文件中 "abc" 分别替换为 "xyz" 中对应的字符。')]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"xyz"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" newFile\n")])])]),t("p",[t("strong",[a._v("注意：")]),a._v(' 这里凡是在 file 中出现的"a"字母，都替换成"x"字母，"b"字母替换为"y"字母，"c"字母替换为"z"字母，而不是将字符串"abc"替换为字符串"xyz"。')]),a._v(" "),t("p",[a._v("（6）替换指定字符集以外的字符。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"alv blv"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"lv "')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"x"')]),a._v("\nxlv xlv\n")])])]),t("p",[a._v("echo -n 表示不输出换行符。")]),a._v(" "),t("p",[a._v("（7）从输入文本中将不在补集中的所有字符删除。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"alv blv"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tr")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dc")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"lv"')]),a._v("\nlvlv\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/tr.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("tr(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("Vssue",{attrs:{title:"tr"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);