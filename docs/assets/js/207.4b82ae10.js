(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{538:function(t,s,a){"use strict";a.r(s);var r=a(12),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),s("p",[t._v("ifup 启动网络接口。")]),t._v(" "),s("p",[t._v("ifup 命令用于激活指定的网络接口。ifup 命令会去读取 /etc/sysconfig/network-scripts/ 目录下的相关网络接口的配置文件，并根据配置文件的内容来激活该网络接口。")]),t._v(" "),s("p",[t._v("注意：网络接口名称必须是 /etc/sysconfig/network-scripts/ 目录配置文件中设置的才可以。如果使用 ifconfig 命令改变了网络接口后，ifup 命令就不会识别了。因为 ifup 命令会对比当前网络的参数与 /etc/sysconfig/network-scripts/ 中配置文件的内容是否相符。")]),t._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifup")]),t._v(" CONFIG "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("CONFIG 为网络接口名。如果后跟可选字符串 boot 表明系统启动时不激活该网卡。")]),t._v(" "),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),s("p",[t._v("无。")]),t._v(" "),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),s("p",[t._v("启动网卡 eth0。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifup")]),t._v(" eth0\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.linux.org/docs/man8/ifup.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ifup(8) manual - linux.org"),s("OutboundLink")],1)]),t._v(" "),s("Vssue",{attrs:{title:"ifup"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);