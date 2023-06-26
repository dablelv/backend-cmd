(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{371:function(a,s,t){"use strict";t.r(s);var l=t(12),e=Object(l.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),s("p",[a._v("alias 是 Shell 内建命令，用来设置命令的别名。")]),a._v(" "),s("p",[a._v("我们可以使用 alias 命令将一些较长的命令进行简化，建议使用单引号将原来的命令引起来，防止特殊字符导致错误。")]),a._v(" "),s("p",[a._v("alias 命令的作用只局限于当前会话，若要每次登录都能够使用这些命令别名，则可将相应的 alias 命令放到 Bash 的初始化文件 /etc/bashrc（针对所有用户）或 ~/etc/.bashrc（针对当前用户）中。")]),a._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alias [-p] [NAME[=VALUE] ...]\n")])])]),s("p",[a._v('不带参数或使用 -p 选项将在标准输出上以 "alias name=value" 的形式打印别名列表。对于参数列表中没有提供值的每个名称，将打印别名和对应的值，否则设置别名对应的值。')]),a._v(" "),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-p\n\t以可重用的格式 alias name=value 打印所有已定义的别名\n")])])]),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),s("p",[a._v("（1）以可重用的格式 alias name=value 打印所有已定义的别名。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alias\n# 或\nalias -p\n\nalias egrep='egrep --color=auto'\nalias fgrep='fgrep --color=auto'\nalias grep='grep --color=auto'\nalias l.='ls -d .* --color=auto'\nalias ll='ls -l --color=auto'\nalias ls='ls --color=auto'\nalias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'\n")])])]),s("p",[a._v("（2）查看指定命令的别名。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alias ll\nalias ll='ls -l --color=auto'\n")])])]),s("p",[a._v("（3）设置命令别名。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('alias ll="ls -l --color=auto -h"\n')])])]),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.man7.org/linux/man-pages/man1/bash.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("bash(1) - Linux manual page - man7.org"),s("OutboundLink")],1)]),a._v(" "),s("Vssue",{attrs:{title:"alias-builtin"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);