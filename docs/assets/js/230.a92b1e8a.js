(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{561:function(s,a,t){"use strict";t.r(a);var e=t(12),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-命令简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[s._v("#")]),s._v(" 1.命令简介")]),s._v(" "),a("p",[s._v("ssh-keygen 是 OpenSSH 身份验证密钥实用工具。")]),s._v(" "),a("p",[s._v("ssh-keygen 用于 OpenSSH 身份验证密钥的生成、管理和转换，它支持 RSA 和 DSA 两种认证密钥。")]),s._v(" "),a("h2",{attrs:{id:"_2-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[s._v("#")]),s._v(" 2.命令格式")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("h2",{attrs:{id:"_3-选项说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[s._v("#")]),s._v(" 3.选项说明")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("bits"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t指定密钥长度。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\t读取 OpenSSH 的私钥或者公钥文件。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v("\n\t添加注释。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t指定用来保存密钥的文件名。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("\n\t读取未加密的 ssh-v2 兼容的私钥/公钥文件，然后在标准输出设备上显示 openssh 兼容的私钥/公钥。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n\t显示公钥文件的指纹数据。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-N")]),s._v("\n\t提供一个新密语。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("passphrase"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t提供（旧）密语。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v("\n\t静默模式。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("\n\t指定要创建的密钥类型。\n")])])]),a("h2",{attrs:{id:"_4-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[s._v("#")]),s._v(" 4.常用示例")]),s._v(" "),a("p",[s._v("（1）创建一个默认密钥。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen\nGenerating public/private rsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/home/lighthouse/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again: \nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /home/lighthouse/.ssh/id_rsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /home/lighthouse/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:c8jkpkXgRqqfelFHKxq956d+6qYzAR0kHgnaVs9gtYw lighthouse@VM-0-3-centos\nThe key's randomart image is:\n+---"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RSA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" o +.%.o.        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" o EoBoo.       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" .o."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("o.       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" +S "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   .o.o+.o       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("+         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" o o o      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("  .B"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-----+\n")])])]),a("p",[s._v("中途需要三次确认，全部缺省直接回车即可。")]),s._v(" "),a("p",[s._v("完成后，在 ~/.ssh 目录下将会看到两个文件：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ls -l ~/.ssh\nid_rsa  id_rsa.pub\n")])])]),a("p",[s._v("id_rsa 为当前主机的私钥。id_rsa.pub 为当前主机的公钥。")]),s._v(" "),a("p",[s._v("（2）指定要创建的密钥类型，缺省为 RSA。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa\nGenerating public/private rsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/root/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \n/root/.ssh/id_rsa already exists.\nOverwrite "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y/n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("? y\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again: \nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:nTaoqOxlG6IQQ2zDTMvSk2EON+4tLrYqPy7IBrstoy4 root@localhost.localdomain\nThe key's randomart image is:\n+---"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RSA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("*B.+             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(".X*              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("o     o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("o o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("   S "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(".+ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("*oo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EBo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" o           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("%@B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-----+\n")])])]),a("p",[s._v("（3）指定密钥的类型并添加注释。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dablelv@qq.com"')]),s._v("\nGenerating public/private rsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/root/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \n/root/.ssh/id_rsa already exists.\nOverwrite "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y/n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("? y\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again: \nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:Wx3MWwj36fwhcnb6hjdIIJ3SUggCLcmFq62Earqy2E0 deng@qq.com\nThe key's randomart image is:\n+---"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RSA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("*o "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" * o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    o     + * +  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("     + * *   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" o     S "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".++oo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(".o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("     o  +.+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" E   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("o "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("++ o         o.+ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Oo. "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("         o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-----+\n")])])]),a("p",[s._v("（4）读取 OpenSSH 的私钥或者公钥文件。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n---- BEGIN SSH2 PUBLIC KEY ----\nComment: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2048-bit RSA, converted by lighthouse@VM-0-3-centos from Ope"')]),s._v("\nAAAAB3NzaC1yc2EAAAADAQABAAABAQDb1aKBbvfSefnuzLfhNKlIa4zsbBFG+m7ugZbeBW\nRwJXONhSq/AW27+Tq9zDtI6qG+UxmjIorVHbAVl4llVZz8e5b/s5I0yiBoLy/RokpvisNB\nkVkWl2oNGtkdHxTSYcJ3jdbTZ+ya6MyOiaMt24jV+zxxS1BXWxA14kS/JqiMC7lx9Vu0Ed\nAHY0zq2dj+pX31FB7Xs7p98eO+Est6msCGIInIpzGTlTskL6m7B+aMBaquWlEyQAmRX5G8\nYoOFw+aDT4q1aaaaBkFdcy/nhHPpbfM8eIzbAv+khHRjZV8XQCo+UeHzme8nmfWDCWwKZ8\nTnpO239diTdl2Wps2YCMex\n---- END SSH2 PUBLIC KEY ----\n")])])]),a("p",[s._v("（5）安静模式生成密钥对。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/home/lighthouse/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \n/home/lighthouse/.ssh/id_rsa already exists.\nOverwrite "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y/n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("? y\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again:\n")])])]),a("h2",{attrs:{id:"_5-authorized-keys-和-known-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-authorized-keys-和-known-hosts"}},[s._v("#")]),s._v(" 5.authorized_keys 和 known_hosts")]),s._v(" "),a("p",[s._v("有时，你在 ~/.ssh 目录下可能还会看到 authorized_keys 和 known_hosts 这两个文件。")]),s._v(" "),a("ul",[a("li",[s._v("authorized_keys")])]),s._v(" "),a("p",[s._v("如果当前主机是 SSH 服务端，那么会有 authorized_keys，用来存放客户端机器的公钥。")]),s._v(" "),a("p",[s._v("我们需要本地机器通过 SSH 访问远程服务器时为了减少输入密码的步骤，基本上都会在本地机器生成 SSH 公钥，然后将本地 SSH 公钥复制到远程主机的 ~/.ssh/authorized_keys 中，这样就可以免密登录了。")]),s._v(" "),a("ul",[a("li",[s._v("known_hosts")])]),s._v(" "),a("p",[s._v("如果当前主机为 SSH 客户端，你可能会在 ~/.ssh 目录下看到 known_hosts 文件，该文件用来记录连接过的远程主机。")]),s._v(" "),a("p",[s._v("known_hosts 文件每行记录一个连接过的远程服务器的公钥。")]),s._v(" "),a("p",[s._v("文件中的每一行都包含以下字段："),a("strong",[s._v("标记符(可选)、主机名、公钥类型、base64 编码的公钥、注释")]),s._v("。字段之间用空格分隔。")]),s._v(" "),a("p",[s._v("如果是首次连接某个远程主机，那么会有安全提示是否继续连接。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("The authenticity of "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0.0.0.0 (0.0.0.0)'")]),s._v(" can't be established.\nECDSA key fingerprint is SHA256:xxxxxxxxxxxx.\nAre you sure you want to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("continue")]),s._v(" connecting "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yes/no/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fingerprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("?\n")])])]),a("p",[s._v("另外，在 /etc/ssh 目录下也可能会有 ssh_known_hosts 来保存一些对所有用户都可信赖的远程主机信息。")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/ssh-keygen.1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-keygen(1) — Linux manual page - man7.org"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/sshd.8.html#SSH_KNOWN_HOSTS_FILE_FORMAT",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSH_KNOWN_HOSTS FILE FORMAT"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_26400953/article/details/105145103",target:"_blank",rel:"noopener noreferrer"}},[s._v("一文读懂authorized_keys和known_hosts_游语的博客-CSDN博客"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/guoke312/article/details/113563911",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSH known_hosts / authorized_keys 的解释 - CSDN"),a("OutboundLink")],1)]),s._v(" "),a("Vssue",{attrs:{title:"ssh-keygen"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);