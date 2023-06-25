(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{401:function(t,a,s){"use strict";s.r(a);var e=s(12),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),a("p",[t._v("file 命令用来识别文件类型。")]),t._v(" "),a("p",[t._v("对文件的检查分为文件系统、魔数检查和语言检查三个过程，也可用来辨别一些文件的编码格式。它是通过查看文件的头部信息来获取文件类型，而不是像 Windows 通过扩展名来辨识文件类型。")]),t._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-bchiklLNnprsvz0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--apple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--mime-encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--mime-type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-e testname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-F separator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-f namefile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-m magicfiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-m magicfiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--help"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('--apple\n\t输出旧 MacOS 版本使用的文件类型和创建者代码。代码由八个字母组成，第一个字母描述文件类型，第二个字母描述创建者。此选项仅适用于定义了 Apple 风格输出的文件格式\n-b, --brief\n\t简约模式，不显示文件名称\n-C, --compile\n\t生成 magic.mgc 文件。配合选项 -m 使用\n-c, --checking-printout\n\t输出魔法文件的解析结果\n-e, --exclude TESTNAME\n\t排除对指定类型文件的检查，TESTNAME 可取值有 apptype、ascii、encoding、tokens、cdf、compress、elf、soft、tar\n-F, --separator SEP\n\t使用指定分隔符替换输出文件名后的默认的冒号分隔符 :\n-f, --files-from NAMEFILE\n\t从文件 NAMEFILE 中读取待检测的文件，每行一个\n-i, --mime\n\t输出 mime 类型的字符串而不是可读字符串，比如输出"text/plain; charset=us-ascii"而不是"ASCII text"\n--mime-type, --mime-encoding\n\t像 -i，但是只打印指定元素\n-k, --keep-going\n\t不在首次匹配时停止，继续检查\n-l, --list\n\t打印每个魔数模式的强度信息\n-L, --dereference\n\t查看软链接对应文件的文件类型\n-m, --magic-file MAGICFILES\n\t指定 magic file。magic file 指的是那些具有特殊内容的文件，比如 C 文件，它会有 #include 字样；tar 文件的前几个字节会有特殊的规则。而检验 magic file 规则就是根据这些特殊的格式去判断一个文件的类型。而这些规则保存在 $HOME/.magic.mgc\n-N, --no-pad\n\t不要填充文件名以便它们在输出中对齐\n-n, --no-buffer\n\t强制刷新标准输出 stdout。这个选项只在检查多个文件时有效。在通过管道获取文件类型时也可以使用该选项\n-p, --preserve-date\n\t保留待检测文件的access time，即使file命令不更改待检测文件的access time\n-r, --raw\n\t不将不可打印字符转换为\\ooo的八进制形式，正常情况下，file会做转换\n-s, --special-files\n\t正常情况下，file命令只支持普通文件的检测，就像stat(2)一样。使用该选项可以让file命令支持特殊文件，比如原始磁盘分区等\n-v, --version\n\t显示版本信息\n-z, --uncompress\n\t尝试去解读压缩文件的内容\n-0, --print0\n\t在文件名后输出空字符 \\0\n--help\n\t显示帮助信息\n')])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),a("p",[t._v("（1）查看文件类型。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" Changelog \nChangelog: ASCII text\n")])])]),a("p",[t._v("（2）不输出文件名称，只显示文件格式以及编码。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" Changelog \nASCII text\n")])])]),a("p",[t._v("（3）输出 mime 类型的字符串。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" Changelog \nChangelog: text/plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("us-ascii\n")])])]),a("p",[t._v("（4）查看软链接对应文件的文件类型。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("ll Changelog*\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1598")]),t._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":39 Changelog\nlrwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(":07 Changelog.ln -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Changelog\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看软链接本身类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" Changelog.ln\nChangelog.ln: symbolic "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" to `Changelog'\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看软链接对应文件的文件类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-L")]),t._v(" Changelog.ln\nChangelog.ln: ASCII text\n")])])]),a("p",[t._v("（5）查看程序是 32 位还是 64 位。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("file ./a.out \n./a.out: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=7dd2556f5818bc85c64ab82131cf0b748567a976, not stripped\n")])])]),a("p",[t._v("通过 ELF 64-bit LSB executable 可以看出程序是 64 位的。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/file.1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("file(1) - Linux manual page - man7.org"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/pzqingchong/article/details/70226640",target:"_blank",rel:"noopener noreferrer"}},[t._v("linux shell file与magic file文件"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/Dodge/p/4278306.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux命令详解-file"),a("OutboundLink")],1)]),t._v(" "),a("Vssue",{attrs:{title:"file"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);