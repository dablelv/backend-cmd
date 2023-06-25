(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{413:function(a,t,s){"use strict";s.r(t);var e=s(12),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),t("p",[a._v("mktemp 用来创建临时文件或目录。")]),a._v(" "),t("p",[a._v("Linux 使用 /tmp 目录来存放不需要永久保留的文件。使用 mktemp 可以在 /tmp 目录下创建一个"),t("code",[a._v("tmp.")]),a._v("开头的后接十个随机字符的临时文件或目录。只有创建者可以访问，其他人不可访问（除了 root）。")]),a._v(" "),t("p",[a._v("mktemp 命令可以在创建临时文件或目录时指定命名格式，在后面加几个 X，就会生成几个字符，需要注意 X 最少为 3 个。")]),a._v(" "),t("p",[t("strong",[a._v("注意：")]),a._v(" 如果指定命名格式，临时文件或目录放置在当前目录，否则放置在 $TMPDIR 目录下，如果 $TMPDIR  未设置则放到 /tmp 目录。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mktemp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("TEMPLATE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("TEMPLATE 为临时文件或目录的名称格式，可不指定，缺省为 tmp.XXXXXXXXXX。")]),a._v(" "),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-d, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--directory")]),a._v("\n\t创建一个临时目录而不是临时文件。\n-u, --dry-run\n\t不创建任何东西，仅打印出名字。"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("仅供测试"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n-q, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--quiet")]),a._v("\n\t不显示任何有关文件或目录创建错误信息。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--suffix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SUFF\n\t给临时文件或目录添加指定后缀。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" DIR, --tmpdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("DIR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\t指定临时文件或目录存放的目录。如果使用 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tmpdir")]),a._v(" 且未指定目录，则使用 "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$TMPDIR")]),a._v("，如果未设置，则使用 /tmp 目录。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v("\n\t将 TEMPLATE 解释为单个文件名组件。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n\t显示此帮助信息并退出。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n\t显示版本信息并退出。\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),t("p",[a._v("（1）在 /tmp 目录下创建临时文件。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mktemp\n/tmp/tmp.2BRaNNSUos\n")])])]),t("p",[a._v("（2）在 /tmp 目录下创建临时文件并指定后缀。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mktemp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--suffix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".tar\n/tmp/tmp.lY8GrouErx.tar\n")])])]),t("p",[a._v("（3）在 /tmp 目录下创建临时目录。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mktemp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n/tmp/tmp.G63yYLHuK1\n")])])]),t("p",[a._v("（4）在指定目录下创建临时文件。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mktemp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n./tmp.lRF1RpAGXQ\n")])])]),t("p",[a._v("（5）指定临时文件的名称格式，而不是缺省的 tmp.XXXXXXXXXX。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mktemp abc.XXX\nabc.lqV\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/mktemp.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("mktemp(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/12/mktemp.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Bash 脚本如何创建临时文件：mktemp 命令和trap 命令教程"),t("OutboundLink")],1)]),a._v(" "),t("Vssue",{attrs:{title:"mktemp"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);