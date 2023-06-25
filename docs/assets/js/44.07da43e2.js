(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{377:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[s._v("#")]),s._v(" 1.命令简介")]),s._v(" "),t("p",[s._v("ln（link）用于在文件之间建立链接。")]),s._v(" "),t("p",[s._v("链接分为硬链接（hard link）和软链接（符号链接，symbolic link）两种，默认创建硬链接，如果要创建软链接须使用 -s 选项。本文介绍的是 GNU 版本的实现，其它版本（如 POSIX 版）实现会所有不同。")]),s._v(" "),t("p",[s._v("注意：\n（1）硬链接不是一个独立的文件，只是一个文件名。一个文件可以有多个文件名，只有将最后一个文件名从磁盘上删除，才能把这个文件删掉；\n（2）软链接可以跨文件系统，但硬链接不能跨文件系统，因为硬链接只是文件的别名，而非独立的文件；\n（3）不能给目录建立硬链接，因为硬链接连接到目录可会导致目录的 inode 与实体 block 形成环状。此时，如果删除目录，会导致目录实体 block 无法被系统访问，产生孤立的目录（从根目录无法再访问）；\n（4）创建硬链接时，每个目标必须存在。创建软链接时，目标文件可以不存在；\n（5）软链接是一个包含了路径信息的独立文件，类似于 Windows 的快捷方式，它的许多属性依赖于原文件，所以给软链接文件设置权限是没有意义的。")]),s._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[s._v("#")]),s._v(" 2.命令格式")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ln [OPTION]... [-T] TARGET LINK_NAME   (1st form)\nln [OPTION]... TARGET                  (2nd form)\nln [OPTION]... TARGET... DIRECTORY     (3rd form)\nln [OPTION]... -t DIRECTORY TARGET...  (4th form)\n")])])]),t("p",[s._v("第一种格式，为指定的目标文件建立指定名称的链接，-T 选项可省略，LINK_NAME 为目录时可省略链接名称，此时链接与目标文件同名。该格式最为常用；\n第二种格式，为指定的目标文件建立在当前目录建立同名的链接；\n第三和第四格式，分别为每一个目标文件在指定的目录下建立同名的链接。")]),s._v(" "),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[s._v("#")]),s._v(" 3.选项说明")]),s._v(" "),t("p",[s._v("长选项的强制参数对于短选项也是强制的。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("--backup[=CONTROL]\n\t备份每一个存在的目标文件\n-b\n\t类似于 --backup，但不接受参数\n-d, -F, --directory\n\t允许超级用户尝试为目录建立硬链接（注意：由于系统限制，即使超级用户也可能失败）\n-f, ——force\n\t强行建立文件或目录的链接，与链接同名的文件或目录将被覆盖\n-i, ——interactive\n\t覆盖既有文件之前先询问用户\n-L, --logical\n\t建立硬链接时，当目标文件是软链接时，进行解引用，指向软链接的目标文件\n-n, --no-dereference\n\t把软链接视为一般文件，不进行解引用\n-P, --physical\n\t建立硬链接时，直接指向软链接本身，而不是指向软链接的目标文件（默认）\n-r, --relative\n\t创建相对于链接位置的符号链接\n-s, --symbolic\n\t建立软连接，而非硬连接\n-S, --suffix=SUFFIX\n\t修改备份文件后缀。用 -b 参数备份目标文件后，备份文件后缀默认为 ~\n-t, --target-directory=DIRECTORY\n\t指定链接文件存放于哪个目录\n-T, --no-target-directory\n\t将 LINK_NAME 视为链接文件而非存放链接文件的目录\n-v, ——verbose\n\t显示指令执行过程\n--help\n\t显示帮助并退出\n--version\n\t显示版本并退出\n")])])]),t("p",[s._v("选项 --backup 的参数 CONTROL 控制文件备份后的版本生成方式，可取值如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("none, nil\n\t不进行备份\nnumbered, t\n\t使用数字后缀进行滚动。备份文件名后缀依序递增 ~1~、\nexisting, nil\n\t如果有使用数字后缀则使用数字，否则使用简单的备份方式，即只备份一次\nsimple, never\n\t只使用简单的备份方式\n")])])]),t("p",[s._v("使用选项 -s 生成软链接时，将忽略选项 -L、-P，建立硬链接，默认使用 -P 选项，将硬链接指向软链接本身，相当于给软链接起了个别名。")]),s._v(" "),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[s._v("#")]),s._v(" 4.常用示例")]),s._v(" "),t("p",[s._v("（1）给文件 /etc/passwd 建立软链接。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ln -s /etc/passwd passwdSoftLink\n\nll passwdSoftLink\nlrwxrwxrwx  1 root root   11 Nov 13 22:21 passwdSoftLink -> /etc/passwd\n")])])]),t("p",[s._v("（2）给文件 /etc/passwd 多次建立软链接，软链接的名称相同，采用数字表示备份文件的版本号。多次备份，版本号将依序递增。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ln -s --backup=numbered /etc/passwd passwdSoftLink\n\nll passwdSoftLink*\nlrwxrwxrwx  1 root root   11 Nov 14 10:36 passwdSoftLink -> /etc/passwd\nlrwxrwxrwx  1 root root   11 Nov 14 10:36 passwdSoftLink.~1~ -> /etc/passwd\n")])])]),t("p",[s._v("（3）给不存在的文件建立软链接。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ln -s nofile nofileSoftLink\n")])])]),t("p",[s._v("使用 ll 命令查看软链接时，软链接名为红色，且不存在的目标文件名以红底白字在不停地闪烁。"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191114125309155.gif",alt:"在这里插入图片描述"}}),s._v("\n向软链接 nofileSoftLink 写入内容后保存，将会生成文件 nofile。")]),s._v(" "),t("p",[s._v("（4）给 /etc/passwd 建立硬链接。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ln /etc/passwd passwdHardLink\n\nll -i /etc/passwd passwdHardLink\n787795 -rw-r--r-- 2 root root 1552 Jan  4  2019 /etc/passwd\n787795 -rw-r--r-- 2 root root 1552 Jan  4  2019 passwdHardLink\n")])])]),t("p",[s._v("使用 ll 命令查看两个文件时，第一列 inode 号相同，且第三列硬链接数为 2，表示有两个文件名指向文件的数据实体。")]),s._v(" "),t("p",[s._v("（5）给 /etc/passwd 建立同名的软链接且软链接放在当前目录。即使用第三和第四种命令格式为文件建立链接。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ln -s /etc/passwd .\n\n# 或\nln -s -t . /etc/passwd\n\n# 查看\nll passwd\nlrwxrwxrwx  1 root root   11 Nov 14 10:43 passwd -> /etc/passwd\n")])])]),t("p",[s._v("注意，书写目标文件时，路径要相对于目标目录，或者使用绝对路径，不然软链接无法指向目标文件。")]),s._v(" "),t("p",[s._v("（6）创建的链接文件有同名的文件时，强制覆盖，不进行备份。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ln -sf /etc/passwd passwdSoftLink\n")])])]),t("p",[s._v("（7）修改软链接指向新的目标文件。将软链接 passwdSoftLink 指向 /usr/bin/passwd，重新建立软链接，强制覆盖原有的软链接 passwdSoftLink 即可。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ln -sf /usr/bin/passwd passwdSoftLink\n\nll passwdSoftLink\nlrwxrwxrwx 1 root root 15 Nov 14 10:52 passwdSoftLink -> /usr/bin/passwd\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/ln.1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("ln(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),s._v(" "),t("Vssue",{attrs:{title:"ln"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);