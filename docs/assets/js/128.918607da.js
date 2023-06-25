(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{459:function(s,a,t){"use strict";t.r(a);var e=t(12),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[s._v("#")]),s._v(" 1.命令简介")]),s._v(" "),a("p",[s._v("visudo 安全地编辑 sudoers 文件。")]),s._v(" "),a("p",[s._v("sudoers 文件的默认权限是 440，即默认无法修改；通过 visudo 可以在不更改 sudoers 文件权限的情况下，直接修改 sudoers 文件；默认编辑 /etc/sudoers 文件。")]),s._v(" "),a("p",[s._v("注意：需要超级用户权限。")]),s._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[s._v("#")]),s._v(" 2.命令格式")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("visudo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-chqsV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" sudoers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[s._v("#")]),s._v(" 3.选项说明")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-c, --check\n\t启用仅检查模式。将检查现有的 sudoers 文件（以及它包含的任何其他文件）是否存在语法错误。\n-f, --file=<sudoers>\n\t指定 sudoers 文件的位置。\n-h, --help\n\t显示帮助信息并退出。\n-q, --quiet\n\t启用安静模式。在此模式下，不会打印有关语法错误的详细信息。此选项仅在与 -c 选项结合使用时才有用。\n-s, --strict\n\t严格语法检查。\n-V, --version\n\t显示版本信息并退出。\n")])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[s._v("#")]),s._v(" 4.常用示例")]),s._v(" "),a("p",[s._v("（1）编辑 /etc/sudoers 文件。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("visudo\n")])])]),a("p",[s._v("如将 tom 用户设置为拥有所有权限。")]),s._v(" "),a("p",[s._v("仿照现有 root 的例子就行，我们在下面加一行。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("## Allow root to run any commands anywhere\nroot    ALL=(ALL)   ALL\ntom     ALL=(ALL)   ALL\n")])])]),a("p",[s._v("第一个ALL是指网络中的主机。第二个括号里的ALL是指目标用户，也就是以谁的身份去执行命令。最后一个ALL当然就是指命令名了。")]),s._v(" "),a("p",[s._v("再如我们想让 tom 用户在 linux 主机上以 foo 或 bar 的身份执行 kill 命令，这样编写配置文件：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("tom    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("linux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo,bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    /bin/kill\n")])])]),a("p",[s._v("但这还有个问题，tom 到底以 foo 还是 bar 的身份执行？")]),s._v(" "),a("p",[s._v("这时我们应该想到了 sudo -u 了，它正是用在这种时候。 tom可以使用 sudo -u foo kill PID 或 sudo -u bar kill PID，但这样挺麻烦，其实我们可以不必每次加-u，把 foo 或 bar 设为默认的目标用户即可。")]),s._v(" "),a("p",[s._v("再在上面加一行：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Defaults:foobar    runas_default=itcast\n")])])]),a("p",[s._v("Defaults 后面如果有冒号，是对后面用户的默认，如果没有，则是对所有用户的默认。就像配置文件中自带的一行：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Defaults    env_reset\n")])])]),a("p",[s._v("（2）取消执行 sudo 时输入密码。")]),s._v(" "),a("p",[s._v("很多时候，我们本来就登录了，每次使用 sudo 还要输入密码就显得烦琐了。我们可不可以不再输入密码呢？")]),s._v(" "),a("p",[s._v("当然可以，我们这样修改配置文件：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tom localhost=NOPASSWD:     /bin/cat, /bin/ls\n")])])]),a("p",[s._v("（2）检查语法等错误（不编辑）。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("visudo "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n")])])]),a("p",[s._v("（3）显示版本信息并退出。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("visudo "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\nvisudo version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".21p2\nvisudo grammar version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v("\n")])])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/visudo.8.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("visudo(8) - Linux manual page - man7.org"),a("OutboundLink")],1)]),s._v(" "),a("Vssue",{attrs:{title:"visudo"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);