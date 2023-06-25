(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{578:function(e,r,a){"use strict";a.r(r);var s=a(12),t=Object(s.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"_1-命令简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[e._v("#")]),e._v(" 1.命令简介")]),e._v(" "),r("p",[e._v("ipcrm 命令用于删除某些 IPC 资源。")]),e._v(" "),r("p",[e._v("ipcrm 删除指定 ID 的 IPC（Inter-Process Communication，进程间通信）对象，包括消息队列（message queue）、共享内存（shared memory）和信号量（semaphore），同时将与 IPC 对象关联的数据一并删除。")]),e._v(" "),r("p",[e._v("注意：只有 root 或 IPC 对象创建者能够删除。")]),e._v(" "),r("h2",{attrs:{id:"_2-命令格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[e._v("#")]),e._v(" 2.命令格式")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ipcrm [OPTIONS]\nipcrm {shm | msg | sem} ID...\n")])])]),r("h2",{attrs:{id:"_3-选项说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[e._v("#")]),e._v(" 3.选项说明")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("-a, --all [shm | msg | sem]\n\t删除所有 IPC 资源。当给定选项参数 shm、msg 或 sem，则只删除指定类型的 IPC 资源。注意：慎用该选项，否则可能会导致某些程序出于不确定状态\n-M, --shmem-key SHMKEY\n\t当没有进程与共享内存段绑定时，通过 SHMKEY 删除共享内存段\n-m, --shmem-id SHMID\n\t当没有进程与共享内存段绑定时，通过 SHMID 删除共享内存段\n-Q, --queue-key MSGKEY\n\t通过 MSGKEY 删除消息队列\n-q, --queue-id MSGID\n\t通过 MSGID 删除消息队列\n-S, --semaphore-key SEMKEY\n\t通过 SEMKEY 删除信号量\n-s, --semaphore-id SEMID\n\t通过 SEMID 删除信号量\n-h, --help\n\t显示帮助信息并退出\n-V, --version\n\t显示版本信息并退出\n-v, --verbose\n\t以冗余模式执行 ipcrm，输出 rpcrm 正在做什么\n")])])]),r("h2",{attrs:{id:"_4-常用示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[e._v("#")]),e._v(" 4.常用示例")]),e._v(" "),r("p",[e._v("（1）删除共享内存。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ipcrm -M SHMKEY\n# 或\nipcrm -m SHMID\n# 或\nipcrm shm SHMID\n")])])]),r("p",[e._v("（2）删除消息队列。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ipcrm -Q MSGKEY\n# 或\nipcrm -q MSGID\n# 或\nrpcrm msg MSGID\n")])])]),r("p",[e._v("（3）删除信号量。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ipcrm -S SEMKEY\n# 或\nipcrm -s SEMID\n# 或\nipcrm sem SEMID\n")])])]),r("p",[e._v("（4）删除所有 IPC 资源。请谨慎使用。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ipcrm -v -a\nremoving shared memory segment id `0'\nremoving shared memory segment id `655361'\nremoving shared memory segment id `688130'\nremoving shared memory segment id `720899'\nremoving shared memory segment id `131076'\nremoving shared memory segment id `163845'\nremoving shared memory segment id `753670'\nremoving semaphore id `851968'\nremoving semaphore id `884737'\nremoving semaphore id `917506'\nremoving semaphore id `950275'\nremoving semaphore id `983044'\nremoving semaphore id `1015813'\n")])])]),r("p",[e._v("（5）查看 ipcrm 版本。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ipcrm -V\nipcrm from util-linux 2.23.2\n")])])]),r("hr"),e._v(" "),r("h2",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/ipcrm.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipcrm(1) - Linux manual page - man7.org"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/MartinChentf/p/6057100.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("工作中常用的Linux命令：ipcs/ipcrm命令"),r("OutboundLink")],1)]),e._v(" "),r("Vssue",{attrs:{title:"ipcrm"}})],1)}),[],!1,null,null,null);r.default=t.exports}}]);