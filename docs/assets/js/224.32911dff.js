(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{555:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[s._v("#")]),s._v(" 1.命令简介")]),s._v(" "),t("p",[s._v("tracepath 命令用来追踪并显示报文到达目的主机所经过的路由信息，能够发现路由中的 MTU 值。")]),s._v(" "),t("p",[s._v("tracepath 使用 UDP 端口或一些随机端口。它类似于 traceroute(8)。但是，它不需要 root 权限，也没有花哨的选项。")]),s._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[s._v("#")]),s._v(" 2.命令格式")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("tracepath "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-l pktlen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-m max_hops"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-V"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("destination"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[s._v("#")]),s._v(" 3.选项说明")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("-4\n\t仅使用IPv4。\n-6\n\t仅使用IPv6。\n-n\n\t以数字形式只显示 IP 地址。\n-b\n\t同时显示 IP 地址和主机名。\n-l <pktlen>\n\t设置初始化的数据包长度，IPv4 默认为 65535，IPv6 默认为 128000。\n-m <max_hops>\n\t设置最大 TTL 值，默认为 30。\n-p <port>\n\t设置要使用的初始目标端口。\n-V\n\t打印版本并退出。\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[s._v("#")]),s._v(" 4.常用示例")]),s._v(" "),t("p",[s._v("（1）追踪到达域名的主机路由信息。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("www.baidu.com\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("?: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("LOCALHOST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                      pmtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":  _gateway                                              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".804ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":  _gateway                                              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".654ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".245.1                                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".300ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.240")]),s._v(".101.5                                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".643ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.240")]),s._v(".100.1                                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".918ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("116.7")]),s._v(".231.121                                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".185ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.186")]),s._v(".37.59.broad.dg.gd.dynamic.163data.com.cn       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(".523ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(":  no reply\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("119.145")]),s._v(".47.73                                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".556ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.96")]),s._v(".5.38                                           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".449ms \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.96")]),s._v(".135.219.broad.fs.gd.dynamic.163data.com.cn     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".961ms \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.29")]),s._v(".121.202                                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".252ms\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":  no reply\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":  no reply\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":  no reply\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),t("p",[s._v("（2）追踪到达域名的主机路由信息（同时显示 IP 地址与主机名）。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("tracepath "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" www.baidu.com\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("?: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("LOCALHOST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                      pmtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":  _gateway "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.250")]),s._v(".8.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".740ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":  _gateway "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.250")]),s._v(".8.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".764ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".245.1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".245.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".137ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.240")]),s._v(".101.5 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.240")]),s._v(".101.5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".091ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.240")]),s._v(".100.1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.240")]),s._v(".100.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".594ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("116.7")]),s._v(".231.121 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("116.7")]),s._v(".231.121"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".834ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.186")]),s._v(".37.59.broad.dg.gd.dynamic.163data.com.cn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59.37")]),s._v(".186.17"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".900ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(":  no reply\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.105")]),s._v(".106.49 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("202.105")]),s._v(".106.49"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".845ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.96")]),s._v(".5.102 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.96")]),s._v(".5.102"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(".497ms \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.96")]),s._v(".135.219.broad.fs.gd.dynamic.163data.com.cn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("219.135")]),s._v(".96.106"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".663ms \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.215")]),s._v(".32.118 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.215")]),s._v(".32.118"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".729ms \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":  no reply\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":  no reply\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":  no reply\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),t("p",[s._v("（3）追踪到达域名的主机路由信息（只显示 IP）。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("tracepath "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" www.baidu.com\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("?: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("LOCALHOST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                      pmtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.250")]),s._v(".8.1                                            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".694ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.250")]),s._v(".8.1                                            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".629ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".245.1                                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".202ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.240")]),s._v(".101.5                                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".645ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.240")]),s._v(".100.1                                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".324ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("116.7")]),s._v(".231.121                                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".041ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59.37")]),s._v(".186.21                                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".517ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59.37")]),s._v(".176.117                                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".032ms asymm  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59.38")]),s._v(".107.177                                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".364ms \n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.96")]),s._v(".5.102                                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(".539ms \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("219.135")]),s._v(".96.106                                       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(".437ms \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.215")]),s._v(".32.114                                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".626ms \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":  no reply\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":  no reply\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":  no reply\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/tracepath.8.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("tracepath(8) - Linux manual page - man7.org"),t("OutboundLink")],1)]),s._v(" "),t("Vssue",{attrs:{title:"tracepath"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);