(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{497:function(a,s,t){"use strict";t.r(s);var n=t(12),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),s("p",[a._v("domainname 显示或设置系统的 NIS/YP 域名。")]),a._v(" "),s("p",[a._v("注意：")]),a._v(" "),s("p",[a._v("（1）domainname，nisdomainname 和 ypdomainname 均是 hostname 的软链，等同于"),s("code",[a._v("hostname -y | --yp | --nis")]),a._v("。")]),a._v(" "),s("p",[a._v("（2）只有 root 用户才可以设置 NIS 域名。")]),a._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("domainname "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("nisdomain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-F file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ndomainname "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-h"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-V"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("无选项单独执行 domainname，nisdomainname 和 ypdomainname 将打印系统的 NIS 域名，使用 "),s("a",{attrs:{href:"https://man7.org/linux/man-pages/man2/getdomainname.2.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("getdomainname(2)"),s("OutboundLink")],1),a._v(" 的返回结果。")]),a._v(" "),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-F, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\t从指定文件中读取域名。注释"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("以一个 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开头的行)可忽略。")]),a._v("\n-h, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n\t显示帮助信息。\n-V, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n\t显示版本信息。\n")])])]),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),s("p",[a._v("（1）设置看主机 NIS 的域名。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("domainname dablelv\n")])])]),s("p",[a._v("（2）显示主机 NIS 的域名。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("domainname\ndablelv\n")])])]),s("p",[a._v("（3）显示帮助信息。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("domainname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v("\nUsage: "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("hostname"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-F file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("         "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("from "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-A"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-d"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-f"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-I"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-s"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("       display formatted name\n       "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v("                                 display "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" name\n\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("yp,nis,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("domainname "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("nisdomain"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-F file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" NIS domain name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("from "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("yp,nis,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("domainname                      display NIS domain name\n\n       dnsdomainname                            display dns domain name\n\n       "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v(" -V"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-h"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("--help          print info and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n\nProgram name:\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("yp,nis,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("domainname"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hostname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dnsdomainname")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hostname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n\nProgram options:\n    -a, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--alias")]),a._v("            "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" names\n    -A, --all-fqdns        all long "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" names "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("FQDNs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    -b, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--boot")]),a._v("             "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" default "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" none available\n    -d, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--domain")]),a._v("           DNS domain name\n    -f, --fqdn, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--long")]),a._v("     long "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("FQDN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    -F, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--file")]),a._v("             "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" name or NIS domain name from given "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n    -i, --ip-address       addresses "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" the "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" name\n    -I, --all-ip-addresses all addresses "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" the "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v("\n    -s, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--short")]),a._v("            short "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" name\n    -y, --yp, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--nis")]),a._v("        NIS/YP domain name\n\nDescription:\n   This "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" can get or "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" the "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" name or the NIS domain name. You can\n   also get the DNS domain or the FQDN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fully qualified domain name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(".\n   Unless you are using "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("bind")]),a._v(" or NIS "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" lookups you can change the\n   FQDN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Fully Qualified Domain Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" and the DNS domain name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("which is\n   part of the FQDN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" the /etc/hosts file.\n")])])]),s("p",[a._v("（4）查看版本信息。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("domainname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-V")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.13")]),a._v("\n")])])]),s("h2",{attrs:{id:"_5-nis-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-nis-是什么"}},[a._v("#")]),a._v(" 5.NIS 是什么")]),a._v(" "),s("p",[a._v("NIS（Network Information Services）服务器主要提供用户的账号、密码、家目录、UID等信息，管理帐户信息。")]),a._v(" "),s("p",[a._v("事实上，Network Information Service 最早应该是称为 Sun Yellow Pages (简称 yp)，也就是 Sun 这家公司出的一个名为 Yellow Pages 的服务器软件。请注意， NIS 与 YP 是一模一样的咚咚喔！这个 Yellow Pages 名字取的真是好！怎么说呢？知道黄页 (Yellow Pages) 是什么吗？就是我们家里的电话簿啦！ 今天如果你要查寻一家厂商的电话号码，通常就是直接去查黄页上面的纪录来取得电话号码啊！而这个 NIS 也一样，当使用者要登入时， Linux 系统就会到 NIS 服务器上面去找寻这个使用的账号与密码信息来加以比对， 以提供使用者登入之用的检验")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/nisdomainname.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("nisdomainname(1) - Linux manual page - man7.org"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"http://cn.linux.vbird.org/linux_server/0430nis.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("鸟哥的Linux 私房菜-- NIS 服务器"),s("OutboundLink")],1)]),a._v(" "),s("Vssue",{attrs:{title:"nisdomainname"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);