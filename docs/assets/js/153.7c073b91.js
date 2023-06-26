(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{484:function(t,e,n){"use strict";n.r(e);var s=n(12),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-命令简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),e("p",[t._v("chkconfig 更新和查询系统服务的运行等级信息。")]),t._v(" "),e("p",[t._v("chkconfig 可查询操作系统在每一个运行等级中会自动执行哪些系统服务，包括各类常驻服务，比如 httpd、sshd、mysqld 等。")]),t._v(" "),e("p",[t._v("chkconfig 实际上是通过改变七个不同运行等级目录 /etc/rc[0-6].d 中服务脚本的符号链接，来设置操作系统在每一个运行等级中会执行哪些系统服务。chkconfig 不是用于立即启动或停止某一个服务，这一点与 service 不同。")]),t._v(" "),e("p",[t._v("chkconfig 有五个功能：")]),t._v(" "),e("ul",[e("li",[t._v("添加新的服务供 chkconfig 管理；")]),t._v(" "),e("li",[t._v("从 chkconfig 管理服务列表中删除服务；")]),t._v(" "),e("li",[t._v("列出 chkconfig 管理的所有服务的当前启动信息；")]),t._v(" "),e("li",[t._v("更改服务的启动信息；")]),t._v(" "),e("li",[t._v("检查特定服务的启动状态。")])]),t._v(" "),e("h2",{attrs:{id:"_2-命令格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chkconfig\nservice [OPTIONS] SERVICENAME\n")])])]),e("p",[t._v("没有任何选项的 chkconfig 或跟选项 --list 将显示所有服务及其当前配置的列表。")]),t._v(" "),e("p",[t._v("当 chkconfig 后只跟服务名时，会检查服务是否配置为在当前运行级别自启动，如果是，则 chkconfig 返回 true，否则返回 false。--level 选项可用于让 chkconfig 查询其它运行级别而不是当前运行级别下的配置。")]),t._v(" "),e("p",[t._v("如果在服务名称之后指定了 on、off、reset 或 resetpriorities 之一，chkconfig 将更改指定服务的启动信息。on 和 off 标志分别导致服务在正在更改的运行级别中设置为启动或停止。reset 标志将服务的所有运行级别的开关状态重置为相关 init 脚本中指定的值，而 resetpriorities 标志将服务的启动/停止优先级重置为 init 脚本中指定的值。默认情况下，on 和 off 选项仅影响运行级别 2、3、4 和 5，而 reset 和 resetpriorities 影响所有运行级别。"),e("code",[t._v("--level")]),t._v(" 选项可用于指定受影响的运行级别。")]),t._v(" "),e("h2",{attrs:{id:"_3-选项说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("--level LEVELS\n\t指定操作应属于的运行级别。0 到 6 组成的数字串。例如，-level 35 指定运行级别 3 和 5\n--no-redirect\n\t如果系统使用 systemd 作为系统的启动进程，chkconfig 将命令转发给 systemd。此选项将关闭到 systemd 的重定向，并且仅在 /etc/rc[0-6].d 中的符号链接上操作。此选项仅在 on、off 或没有向服务传递命令（检查启用）时有效\n--add SERVICENAME\n\t添加一个新服务供 chkconfig 管理\n--del SERVICENAME\n\t将从 chkconfig 管理中删除该服务，并删除 /etc/rc[0-6].d 中与其相关的任何符号链接\n--override SERVICENAME\n\t更改服务配置\n--list [SERVICENAME]\n\t列出 chkconfig 所知的所有服务在不同运行等级下的启动状态。如果指定 SERVICENAME，则只列出具体的服务的启动状态\n")])])]),e("h2",{attrs:{id:"_4-常用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),e("p",[t._v("（1）列出所有的系统服务。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chkconfig\nNote: This output shows SysV services only and does not include native\n      systemd services. SysV configuration data might be overridden by native\n      systemd configuration.\n\n      If you want to list systemd services use 'systemctl list-unit-files'.\n      To see services enabled on particular target use\n      'systemctl list-dependencies [target]'.\n\nbootlocal      \t0:off\t1:off\t2:off\t3:on\t4:off\t5:off\t6:off\nirqaffinity    \t0:off\t1:off\t2:on\t3:on\t4:on\t5:on\t6:off\nnetconsole     \t0:off\t1:off\t2:off\t3:off\t4:off\t5:off\t6:off\nnetwork        \t0:off\t1:off\t2:on\t3:on\t4:on\t5:on\t6:off\nqemu-ga        \t0:off\t1:off\t2:on\t3:on\t4:on\t5:on\t6:off\nrename_netifs  \t0:off\t1:off\t2:off\t3:on\t4:off\t5:off\t6:off\n")])])]),e("p",[t._v("（2）将 Apache Web 服务器配置为在每次系统启动时启动。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chkconfig httpd on\n")])])]),e("p",[t._v("当您成功地使用 chkconfig 启用服务时，该命令不提供任何确认消息。")]),t._v(" "),e("p",[t._v("（3）设置 network 在运行级别为 2、3、4、5 的情况下都是关闭状态，即不启动。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chkconfig network off\n\n# 或\nchkconfig --level 2345 network off\n")])])]),e("p",[t._v("（4）查看 network 服务的自启动状态。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chkconfig --list network\nNote: This output shows SysV services only and does not include native\n      systemd services. SysV configuration data might be overridden by native\n      systemd configuration.\n\n      If you want to list systemd services use 'systemctl list-unit-files'.\n      To see services enabled on particular target use\n      'systemctl list-dependencies [target]'.\n\nnetwork        \t0:off\t1:off\t2:off\t3:off\t4:off\t5:off\t6:off\n")])])]),e("h2",{attrs:{id:"_5-拓展知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-拓展知识"}},[t._v("#")]),t._v(" 5.拓展知识")]),t._v(" "),e("h3",{attrs:{id:"_5-1-注册服务到-chkconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-注册服务到-chkconfig"}},[t._v("#")]),t._v(" 5.1 注册服务到 chkconfig")]),t._v(" "),e("p",[t._v("每个被 chkconfig 管理的服务需要在对应的 /etc/rc.d/init.d 下的管理脚本加上两行或者更多行的注释。")]),t._v(" "),e("ul",[e("li",[t._v("第一行告诉 chkconfig 缺省启动的运行级以及启动和停止的优先级。如果某服务不在任何运行级启动，那么使用 - 代替运行级。")]),t._v(" "),e("li",[t._v("第二行对服务进行描述，可以用 \\ 跨行注释。例如 /etc/rc.d/init.d/network 中的注释：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# chkconfig: 2345 10 90\n# description: Activates/Deactivates all network interfaces configured to \\\n#              start at boot time.\n")])])]),e("p",[t._v("其中第一行表示运行等级在 2、3、4 和 5，启动优先级为 10，停止优先级为 90。第二行和第三行为服务 network 的描述。")]),t._v(" "),e("h3",{attrs:{id:"_5-2-系统运行级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-系统运行级别"}},[t._v("#")]),t._v(" 5.2 系统运行级别")]),t._v(" "),e("p",[t._v("运行级别是操作系统当前正在运行的功能级别，它让一些程序在一个级别启动，而在另外一个级别的时候不启动。Linux 系统一般使用 7 个级别。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("0 停机状态。系统默认运行级别不能设为 0，否则不能正常启动\n1 单用户模式，root权限，用于系统维护，禁止远程登陆\n2 无网络的多用户模式\n3 有网络的多用户模式\n4 系统未使用，保留\n5 图形化界面\n6 系统正常关闭并重启，默认运行级别不能设为 6，否则不能正常启动\n")])])]),e("p",[t._v("默认的运行级别可以在文件 /etc/inittab 查看。一般自用的 Linux 默认登录等级为 5，即开机进入图形用户界面，远程登录的运行等级为 3，即进入命令行交互界面。")]),t._v(" "),e("p",[t._v("运行级别的原理：\n（1）在目录 /etc/rc.d/init.d 下有许多服务管理脚本，每个服务被称为 service；\n（2）在 /etc/rc.d 下有 7 个名为 rcN.d 的目录，对应系统的 7 个运行级别；\n（3）rcN.d 目录下都是一些符号链接文件，这些链接文件都指向 init.d 目录下的 service 脚本文件，命名规则为"),e("code",[t._v("K+nn+服务名")]),t._v("或"),e("code",[t._v("S+nn+服务名")]),t._v("，其中 nn 为两位数字。\n（4）系统会根据指定的运行级别进入对应的 rcN.d 目录，并按照文件名顺序检索目录下的链接文件：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("对于以 K 开头的文件，系统将终止对应的服务\n对于以 S 开头的文件，系统将启动对应的服务\n")])])]),e("p",[t._v("（5）查看运行级别用：runlevel；\n（6）进入其它运行级别用：(sudo) init N；\n（7）另外 init 0 为关机，init 6 为重启系统。")]),t._v(" "),e("p",[t._v("另外，当使用 runlevel 查看运行级别时，结果会显示前一次的运行级别和现在的运行级别，如果前次的运行级别为 N，那么说明前次没有运行级别（可能刚刚 power on）。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.linux.org/docs/man8/chkconfig.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("chkconfig(8) manual - linux.org"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/sdb5858874/article/details/80484599",target:"_blank",rel:"noopener noreferrer"}},[t._v("service和chkconfig命令的使用与区别"),e("OutboundLink")],1)]),t._v(" "),e("Vssue",{attrs:{title:"chkconfig"}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);