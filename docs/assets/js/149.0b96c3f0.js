(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{480:function(t,a,s){"use strict";s.r(a);var r=s(12),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),a("p",[t._v("groups 用于查询用户所在的组。")]),t._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("groups [OPTION]... [USERNAME]...\n")])])]),a("p",[t._v("显示每个输入的用户名所在的全部组，如果没有指定用户名则默认为当前进程用户（当用户组数据库发生变更时可能导致差异）。")]),t._v(" "),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("--help\n\t显示帮助信息并退出\n--version\n\t显示版本信息并退出\n")])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),a("p",[t._v("（1）显示当前用户所属的组。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("groups\nroot\n")])])]),a("p",[t._v("当前用户为 root，且只有一个主用户组 root。")]),t._v(" "),a("p",[t._v("（2）查看用户 root 所属的组。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("groups root\nroot : root\n")])])]),a("h2",{attrs:{id:"_5-拓展知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-拓展知识"}},[t._v("#")]),t._v(" 5.拓展知识")]),t._v(" "),a("p",[t._v("除了使用 grpups 命令查看用户属于哪些组，还可以使用如下几种方法。")]),t._v(" "),a("p",[t._v("（1）查看 /etc/group。\n/etc/group 是用户组配置文件，可以查看此文件通过 grep 命令查询某个用户所在的用户组。例如查看 root 所在的用户组")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" root /etc/group\nroot:x:0:\n")])])]),a("p",[t._v("可见 root 只属于同名的主组 root，不属于其它的任何组。")]),t._v(" "),a("p",[t._v("（2）通过 id 命令。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" root\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("gid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("groups")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("第三列表示用户所属的用户组列表，同时输出组的 ID。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.linux.org/docs/man1/groups.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("groups(1) manual - linux.org"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jb51.net/LINUXjishu/571236.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("linux怎么查看当前用户属于哪个用户组?"),a("OutboundLink")],1)]),t._v(" "),a("Vssue",{attrs:{title:"groups"}})],1)}),[],!1,null,null,null);a.default=e.exports}}]);