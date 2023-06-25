(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{449:function(t,a,r){"use strict";r.r(a);var e=r(12),v=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),a("p",[t._v("chattr 用于改变文件属性。")]),t._v(" "),a("p",[t._v("与 chmod 命令相比，chmod 只改变文件的读写、执行权限，更底层的属性控制是由 chattr 来改变。")]),t._v(" "),a("p",[t._v("与之对应的命令是 lsattr，用于显示文件属性。")]),t._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chattr [ -RVf ] [ -v version ] [ mode ] files...\n")])])]),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-R\n\t递归地改变指定目录下文件的属性。此选项忽略符号链接；\n-V\n\t显示命令执行的详细信息；\n-f\n\t大部分错误信息不输出；\n-v\n\t设置文件版本号；\n+\n\t在原有参数设定基础上，追加参数；\n-\n\t在原有参数设定基础上，移除参数；\n=\n\t更新指定参数设定\n")])])]),a("p",[t._v("最关键的是 [mode] 部分，[mode] 部分由 + - = 和字符 [acdeijstuADST] 组合而成，这部分是用来控制文件的属性。")]),t._v(" "),a("p",[t._v("chattr 可以改变的文件系统属性有：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("a")]),t._v(" "),a("td",[t._v("append only，只允许向文件追加数据，不允许删除和修改文件内容。如果目录有具有这个属性，系统将只允许在目录下简历和修改文件，不允许删除任何文件。只有root才能设置该属性")])]),t._v(" "),a("tr",[a("td",[t._v("c")]),t._v(" "),a("td",[t._v("compress，自动将文件压缩，在读取时自动解压缩")])]),t._v(" "),a("tr",[a("td",[t._v("d")]),t._v(" "),a("td",[t._v("No dump，在进行文件系统备份时，dump指令忽略此文件")])]),t._v(" "),a("tr",[a("td",[t._v("e")]),t._v(" "),a("td",[t._v("extent format,在ext文件系统中，表示该文件使用区段(extents)映射磁盘上的块")])]),t._v(" "),a("tr",[a("td",[t._v("i")]),t._v(" "),a("td",[t._v("immutable，不允许对文件进行任何的修改。对于目录而言，只能修改目录之下的文件，不允许建立和删除文件。只有root能设置此属性")])]),t._v(" "),a("tr",[a("td",[t._v("j")]),t._v(" "),a("td",[t._v("journal，设定此参数使得当通过mount参数：data=ordered 或者 data=writeback 挂 载的文件系统，文件在写入时会先被记录(在journal中)。如果filesystem被设定参数为 data=journal，则该参数自动失效")])]),t._v(" "),a("tr",[a("td",[t._v("s")]),t._v(" "),a("td",[t._v("secure deletion，系统在删除文件时，使用0填充文件所在的区域")])]),t._v(" "),a("tr",[a("td",[t._v("t")]),t._v(" "),a("td",[t._v("no tail-merging,文件拥有t属性时，与其它文件合并时末端不会存在局部块碎片")])]),t._v(" "),a("tr",[a("td",[t._v("u")]),t._v(" "),a("td",[t._v("undeletable，与s相反，删除文件时，文件内容其实还存在磁盘中，以便以后能够恢复删除的文件")])]),t._v(" "),a("tr",[a("td",[t._v("A")]),t._v(" "),a("td",[t._v("Atime，不能修改文件的最后访问时间")])]),t._v(" "),a("tr",[a("td",[t._v("D")]),t._v(" "),a("td",[t._v("如果一个目录设置了D属性，任何改变将同步到磁盘；这等价于mount命令中的dirsync选项，同步目录")])]),t._v(" "),a("tr",[a("td",[t._v("S")]),t._v(" "),a("td",[t._v("Sync，一旦应用程序对文件执行了写操作，则立刻将改动同步到磁盘")])]),t._v(" "),a("tr",[a("td",[t._v("T")]),t._v(" "),a("td",[t._v("目录设置T属性，Orlov块分配器将该目录视为目录层次结构的顶部，提示块分配器该目录下的子目录是无关的，将被分散的分配")])])])]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v("\nchattr 指令所修改的文件属性和 chmod 指令修改的文件属性是两个不同层次的属性，前者是底层文件系统来设定的，而 chmod 指令则是站在用户使用的角度来设定的。")]),t._v(" "),a("h2",{attrs:{id:"_4-常见示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常见示例"}},[t._v("#")]),t._v(" 4.常见示例")]),t._v(" "),a("p",[t._v("（1）用 chattr 命令防止系统中某个关键文件被修改：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chattr +i /etc/resolv.conf\n")])])]),a("p",[t._v("然后用"),a("code",[t._v("mv /etc/resolv.conf")]),t._v("等命令作用于该文件，都会得到 Operation not permitted 的结果。vim 编辑该文件时会提示"),a("code",[t._v("W10: Warning: Changing a readonly file")]),t._v("错误。要想修改此文件需要把 i 属性去掉：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chattr -i /etc/resolv.conf\n")])])]),a("p",[t._v("（2）让某个文件只能追加内容，不能删除或修改，一些日志文件适用于这种操作。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chattr +a /data1/user_act.log\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/chattr.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("chattr(1) - Linux manual page - man7.org"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/lsattr.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("lsattr(1) - Linux manual page - man7.org"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ha97.com/5172.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("（总结）Linux的chattr与lsattr命令详解"),a("OutboundLink")],1)]),t._v(" "),a("Vssue",{attrs:{title:"chattr"}})],1)}),[],!1,null,null,null);a.default=v.exports}}]);