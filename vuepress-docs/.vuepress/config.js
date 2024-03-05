module.exports = {
  base: "/backend-cmd/",
  title: "后台开发命令 365",
  description: "后台开发常用命令介绍",
  head: [
    ['meta',{name: 'referrer',content: 'no-referrer'}],
    ['link',{rel: 'icon', href: '/favicon.png'}]
  ],
  plugins: [
    [
      'vuepress-plugin-right-anchor',
      {
        expand: {
          trigger: 'click'
        }
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github',
        owner: 'dablelv',
        repo: 'backend-cmd',
        clientId: '00e71455ec1a9e6ac134',
        clientSecret: '0acba82f43bdd51a186be62985a49cbc5c618ec9',
        autoCreateIssue: true,
      }
    ]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: "",
    nav: [
      { text: '首页', link: '/' },
      {
        text: '个人主页',
        items: [
          { text: 'CSDN', link: 'https://dablelv.blog.csdn.net', target:'_blank' },
          { text: 'GitHub', link: 'https://github.com/dablelv', target:'_blank' }
        ]
      },
      {
        text: '其他书籍',
        items: [
          { text: 'Go编码建议', link: 'https://dablelv.github.io/go-coding-advice', target:'_blank' },
          { text: 'MySQL快速上手', link: 'https://dablelv.github.io/mysql-quickstart', target:'_blank' },
          { text: 'C++进阶心法', link: 'https://book.douban.com/subject/33434575', target:'_blank' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/dablelv/backend-cmd'}
    ],
    sidebarDepth:0,
    sidebar:[
      ['/', '前言'],
      {
          title: '帮助',
          children: [
            ['/帮助/man', 'man'],
            ['/帮助/info', 'info'],
            ['/帮助/help-builtin', 'help-builtin'],
            ['/帮助/whatis', 'whatis']
          ]
      },
      {
        title: '文件系统',
        children: [
          {
            title: '文本查看',
            children: [
              ['/文件系统/文本查看/cat', 'cat'],
              ['/文件系统/文本查看/grep','grep'],
              ['/文件系统/文本查看/head', 'head'],
              ['/文件系统/文本查看/less', 'less'],
              ['/文件系统/文本查看/more', 'more'],
              ['/文件系统/文本查看/nl', 'nl'],
              ['/文件系统/文本查看/rev', 'rev'],
              ['/文件系统/文本查看/tac', 'tac'],
              ['/文件系统/文本查看/tail', 'tail'],
              ['/文件系统/文本查看/wc', 'wc'],
            ]
          },
          {
            title: '文本编辑',
            children: [
              ['/文件系统/文本编辑/awk', 'awk'],
              ['/文件系统/文本编辑/col','col'],
              ['/文件系统/文本编辑/cut', 'cut'],
              ['/文件系统/文本编辑/expand', 'expand'],
              ['/文件系统/文本编辑/iconv', 'iconv'],
              ['/文件系统/文本编辑/indent', 'indent'],
              ['/文件系统/文本编辑/join', 'join'],
              ['/文件系统/文本编辑/paste', 'paste'],
              ['/文件系统/文本编辑/sed', 'sed'],
              ['/文件系统/文本编辑/sort', 'sort'],
              ['/文件系统/文本编辑/tr', 'tr'],
              ['/文件系统/文本编辑/uniq', 'uniq'],
              ['/文件系统/文本编辑/vim', 'vim'],
            ]
          },
          {
            title: '文件与目录查看',
            children: [
              ['/文件系统/文件与目录查看/basename', 'basename'],
              ['/文件系统/文件与目录查看/cksum', 'cksum'],
              ['/文件系统/文件与目录查看/diff', 'diff'],
              ['/文件系统/文件与目录查看/dir', 'dir'],
              ['/文件系统/文件与目录查看/dirname', 'dirname'],
              ['/文件系统/文件与目录查看/dirs-builtin', 'dirs-builtin'],
              ['/文件系统/文件与目录查看/file', 'file'],
              ['/文件系统/文件与目录查看/ls', 'ls'],
              ['/文件系统/文件与目录查看/md5sum', 'md5sum'],
              ['/文件系统/文件与目录查看/sha1sum', 'sha1sum'],
              ['/文件系统/文件与目录查看/pwd', 'pwd'],
              ['/文件系统/文件与目录查看/realpath', 'realpath'],
              ['/文件系统/文件与目录查看/stat', 'stat'],
              ['/文件系统/文件与目录查看/sum', 'sum'],
              ['/文件系统/文件与目录查看/tree', 'tree'],
            ]
          },
          {
            title: '文件与目录管理',
            children: [
              ['/文件系统/文件与目录管理/cd-builtin', 'cd-builtin'],
              ['/文件系统/文件与目录管理/cp','cp'],
              ['/文件系统/文件与目录管理/mkdir', 'mkdir'],
              ['/文件系统/文件与目录管理/mktemp', 'mktemp'],
              ['/文件系统/文件与目录管理/mv', 'mv'],
              ['/文件系统/文件与目录管理/rename', 'rename'],
              ['/文件系统/文件与目录管理/rm', 'rm'],
              ['/文件系统/文件与目录管理/rmdir', 'rmdir'],
              ['/文件系统/文件与目录管理/split', 'split'],
              ['/文件系统/文件与目录管理/tee', 'tee'],
              ['/文件系统/文件与目录管理/touch', 'touch'],
              ['/文件系统/文件与目录管理/truncate', 'truncate']
            ]
          },
          {
            title: '文件查找',
            children: [
              ['/文件系统/文件查找/find', 'find'],
              ['/文件系统/文件查找/locate','locate'],
              ['/文件系统/文件查找/whereis', 'whereis'],
              ['/文件系统/文件查找/which', 'which'],
            ]
          },
          {
            title: '打包与压缩',
            children: [
              ['/文件系统/打包与压缩/bunzip2', 'bunzip2'],
              ['/文件系统/打包与压缩/bzip2','bzip2'],
              ['/文件系统/打包与压缩/bzip2recover', 'bzip2recover'],
              ['/文件系统/打包与压缩/gunzip', 'gunzip'],
              ['/文件系统/打包与压缩/gzip', 'gzip'],
              ['/文件系统/打包与压缩/tar','tar'],
              ['/文件系统/打包与压缩/unzip', 'unzip'],
              ['/文件系统/打包与压缩/zip', 'zip'],
              ['/文件系统/打包与压缩/zipinfo', 'zipinfo'],
            ]
          },
          {
            title: '磁盘管理',
            children: [
              ['/文件系统/磁盘管理/df', 'df'],
              ['/文件系统/磁盘管理/du','du'],
              ['/文件系统/磁盘管理/fdisk', 'fdisk'],
            ]
          }
        ]
      },
      {
        title: '进程管理',
        children: [
          {
            title: '进程观测',
            children: [
              ['/进程管理/进程观测/pgrep', 'pgrep'],
              ['/进程管理/进程观测/pidof', 'pidof'],
              ['/进程管理/进程观测/pmap', 'pmap'],
              ['/进程管理/进程观测/ps', 'ps'],
              ['/进程管理/进程观测/pstack', 'pstack'],
              ['/进程管理/进程观测/pstree', 'pstree'],
              ['/进程管理/进程观测/strace', 'strace'],
            ]
          },
          {
            title: '性能检测',
            children: [
              ['/进程管理/性能检测/iostat', 'iostat'],
              ['/进程管理/性能检测/lsof', 'lsof'],
              ['/进程管理/性能检测/top', 'top'],
              ['/进程管理/性能检测/valgrind', 'valgrind'],
              ['/进程管理/性能检测/vmstat', 'vmstat'],
            ]
          },
          {
            title: '进程与作业管理',
            children: [
              ['/进程管理/进程与作业管理/at', 'at'],
              ['/进程管理/进程与作业管理/atq', 'atq'],
              ['/进程管理/进程与作业管理/atrm', 'atrm'],
              ['/进程管理/进程与作业管理/batch', 'batch'],
              ['/进程管理/进程与作业管理/bg-builtin', 'bg-builtin'],
              ['/进程管理/进程与作业管理/crontab', 'crontab'],
              ['/进程管理/进程与作业管理/fg-builtin', 'fg-builtin'],
              ['/进程管理/进程与作业管理/ipcrm', 'ipcrm'],
              ['/进程管理/进程与作业管理/ipcs', 'ipcs'],
              ['/进程管理/进程与作业管理/jobs-builtin', 'jobs-builtin'],
              ['/进程管理/进程与作业管理/kill', 'kill'],
              ['/进程管理/进程与作业管理/killall', 'killall'],
              ['/进程管理/进程与作业管理/nice', 'nice'],
              ['/进程管理/进程与作业管理/nohup', 'nohup'],
              ['/进程管理/进程与作业管理/pkill', 'pkill'],
              ['/进程管理/进程与作业管理/renice', 'renice'],
              ['/进程管理/进程与作业管理/screen', 'screen'],
              ['/进程管理/进程与作业管理/skill', 'skill'],
              ['/进程管理/进程与作业管理/time', 'time'],
              ['/进程管理/进程与作业管理/trap-builtin', 'trap-builtin'],
              ['/进程管理/进程与作业管理/ulimit-builtin', 'ulimit-builtin'],
              ['/进程管理/进程与作业管理/watch', 'watch'],
              ['/进程管理/进程与作业管理/xargs', 'xargs'],
            ]
          }
        ]
      },
      {
        title: '编译调试',
        children: [
          ['/编译调试/ar', 'ar'],
          ['/编译调试/as', 'as'],
          ['/编译调试/g++', 'g++'],
          ['/编译调试/gdb', 'gdb'],
          ['/编译调试/ld', 'ld'],
          ['/编译调试/ldconfig', 'ldconfig'],
          ['/编译调试/ldd', 'ldd'],
        ]
      },
      {
        title: '二进制工具',
        children: [
          ['/二进制工具/c++filt', 'c++filt'],
          ['/二进制工具/hexdump', 'hexdump'],
          ['/二进制工具/nm', 'nm'],
          ['/二进制工具/objcopy', 'objcopy'],
          ['/二进制工具/objdump', 'objdump'],
          ['/二进制工具/od', 'od'],
          ['/二进制工具/readelf', 'readelf'],
          ['/二进制工具/size', 'size'],
          ['/二进制工具/strings', 'strings'],
          ['/二进制工具/strip', 'strip'],
        ]
      },
      {
        title: 'Shell 编程',
        children: [
          ['/Shell编程/builtin-builtin', 'builtin-builtin'],
          ['/Shell编程/command-builtin', 'command-builtin'],
          ['/Shell编程/declare-builtin', 'declare-builtin'],
          ['/Shell编程/echo', 'echo'],
          ['/Shell编程/enable-builtin', 'enable-builtin'],
          ['/Shell编程/eval-builtin', 'eval-builtin'],
          ['/Shell编程/exec-builtin', 'exec-builtin'],
          ['/Shell编程/exit-builtin', 'exit-builtin'],
          ['/Shell编程/expect', 'expect'],
          ['/Shell编程/expr', 'expr'],
          ['/Shell编程/let-builtin', 'let-builtin'],
          ['/Shell编程/printf', 'printf'],
          ['/Shell编程/read-builtin', 'read-builtin'],
          ['/Shell编程/readonly-builtin', 'readonly-builtin'],
          ['/Shell编程/set-builtin', 'set-builtin'],
          ['/Shell编程/sleep', 'sleep'],
          ['/Shell编程/test', 'test'],
          ['/Shell编程/unset-builtin', 'unset-builtin'],
          ['/Shell编程/wait-builtin', 'wait-builtin'],
        ]
      },
      {
        title: '系统管理',
        children: [
          {
            title: '索引维护',
            children: [
              ['/系统管理/索引维护/mandb', 'mandb'],
              ['/系统管理/索引维护/updatedb', 'updatedb']
            ]
          },
          {
            title: '系统观测',
            children: [
              ['/系统管理/系统观测/dmesg', 'dmesg'],
              ['/系统管理/系统观测/dnsdomainname', 'dnsdomainname'],
              ['/系统管理/系统观测/domainname', 'domainname'],
              ['/系统管理/系统观测/env', 'env'],
              ['/系统管理/系统观测/printenv', 'printenv'],
              ['/系统管理/系统观测/free', 'free'],
              ['/系统管理/系统观测/hostid', 'hostid'],
              ['/系统管理/系统观测/hostname', 'hostname'],
              ['/系统管理/系统观测/lscpu', 'lscpu'],
              ['/系统管理/系统观测/uname', 'uname'],
              ['/系统管理/系统观测/uptime', 'uptime'],
            ]
          },
          {
            title: '系统管理',
            children: [
              ['/系统管理/系统管理/chkconfig', 'chkconfig'],
              ['/系统管理/系统管理/export-builtin', 'export-builtin'],
              ['/系统管理/系统管理/halt', 'halt'],
              ['/系统管理/系统管理/init', 'init'],
              ['/系统管理/系统管理/ntsysv', 'ntsysv'],
              ['/系统管理/系统管理/poweroff', 'poweroff'],
              ['/系统管理/系统管理/reboot', 'reboot'],
              ['/系统管理/系统管理/runlevel', 'runlevel'],
              ['/系统管理/系统管理/service', 'service'],
              ['/系统管理/系统管理/shutdown', 'shutdown'],
              ['/系统管理/系统管理/systemctl', 'systemctl'],
            ]
          }
        ]
      },
      {
        title: '终端配置',
        children: [
          ['/终端配置/bind-builtin', 'bind-builtin'],
          ['/终端配置/consoletype', 'consoletype'],
          ['/终端配置/ctrlaltdel', 'ctrlaltdel'],
          ['/终端配置/reset', 'reset'],
          ['/终端配置/shopt-builtin', 'shopt-builtin'],
          ['/终端配置/stty', 'stty'],
          ['/终端配置/tput', 'tput'],
          ['/终端配置/tty', 'tty']
        ]
      },
      {
        title: '权限管理',
        children: [
          {
            title: '权限控制',
            children: [
              ['/权限管理/权限控制/chattr', 'chattr'],
              ['/权限管理/权限控制/chgrp', 'chgrp'],
              ['/权限管理/权限控制/chmod', 'chmod'],
              ['/权限管理/权限控制/chown', 'chown'],
              ['/权限管理/权限控制/getfacl', 'getfacl'],
              ['/权限管理/权限控制/lsattr', 'lsattr'],
              ['/权限管理/权限控制/su', 'su'],
              ['/权限管理/权限控制/sudo', 'sudo'],
              ['/权限管理/权限控制/umask-builtin', 'umask-builtin'],
              ['/权限管理/权限控制/visudo', 'visudo'],
            ]
          },
          {
            title: '用户管理',
            children: [
              ['/权限管理/用户管理/ac', 'ac'],
              ['/权限管理/用户管理/adduser', 'adduser'],
              ['/权限管理/用户管理/chage', 'chage'],
              ['/权限管理/用户管理/id', 'id'],
              ['/权限管理/用户管理/last', 'last'],
              ['/权限管理/用户管理/lastb', 'lastb'],
              ['/权限管理/用户管理/lastlog', 'lastlog'],
              ['/权限管理/用户管理/logname', 'logname'],
              ['/权限管理/用户管理/passwd', 'passwd'],
              ['/权限管理/用户管理/useradd', 'useradd'],
              ['/权限管理/用户管理/userdel', 'userdel'],
              ['/权限管理/用户管理/usermod', 'usermod'],
              ['/权限管理/用户管理/users', 'users'],
              ['/权限管理/用户管理/w', 'w'],
              ['/权限管理/用户管理/who', 'who'],
              ['/权限管理/用户管理/whoami', 'whoami'],
            ]
          },
          {
            title: '用户组管理',
            children: [
              ['/权限管理/用户组管理/gpasswd', 'gpasswd'],
              ['/权限管理/用户组管理/groupadd', 'groupadd'],
              ['/权限管理/用户组管理/groupdel', 'groupdel'],
              ['/权限管理/用户组管理/groupmod', 'groupmod'],
              ['/权限管理/用户组管理/groups', 'groups'],
              ['/权限管理/用户组管理/newgrp', 'newgrp'],
            ]
          }
        ]
      },
      {
        title: '网络管理',
        children: [
          {
            title: '远程登录',
            children: [
              ['/网络管理/远程登录/ssh', 'ssh'],
              ['/网络管理/远程登录/ssh-add', 'ssh-add'],
              ['/网络管理/远程登录/ssh-agent', 'ssh-agent'],
              ['/网络管理/远程登录/ssh-copy-id', 'ssh-copy-id'],
              ['/网络管理/远程登录/sshd', 'sshd'],
              ['/网络管理/远程登录/ssh-keygen', 'ssh-keygen'],
              ['/网络管理/远程登录/ssh-keyscan', 'ssh-keyscan'],
              ['/网络管理/远程登录/telnet', 'telnet'],
            ]
          },
          {
            title: '网络传输',
            children: [
              ['/网络管理/网络传输/curl', 'curl'],
              ['/网络管理/网络传输/rz', 'rz'],
              ['/网络管理/网络传输/scp', 'scp'],
              ['/网络管理/网络传输/sz', 'sz'],
              ['/网络管理/网络传输/wget', 'wget'],
              ['/网络管理/网络传输/ftp', 'ftp'],
            ]
          },
          {
            title: '网络管理',
            children: [
              ['/网络管理/网络管理/arp', 'arp'],
              ['/网络管理/网络管理/arpd', 'arpd'],
              ['/网络管理/网络管理/arping', 'arping'],
              ['/网络管理/网络管理/arpwatch', 'arpwatch'],
              ['/网络管理/网络管理/dhclient', 'dhclient'],
              ['/网络管理/网络管理/dig', 'dig'],
              ['/网络管理/网络管理/ethtool', 'ethtool'],
              ['/网络管理/网络管理/host', 'host'],
              ['/网络管理/网络管理/ifcfg', 'ifcfg'],
              ['/网络管理/网络管理/ifconfig', 'ifconfig'],
              ['/网络管理/网络管理/ifdown', 'ifdown'],
              ['/网络管理/网络管理/ifup', 'ifup'],
              ['/网络管理/网络管理/ip', 'ip'],
              ['/网络管理/网络管理/ipcalc', 'ipcalc'],
              ['/网络管理/网络管理/iptables', 'iptables'],
              ['/网络管理/网络管理/iptables-restore', 'iptables-restore'],
              ['/网络管理/网络管理/iptables-save', 'iptables-save'],
              ['/网络管理/网络管理/lnstat', 'lnstat'],
              ['/网络管理/网络管理/mii-tool', 'mii-tool'],
              ['/网络管理/网络管理/ncat', 'ncat'],
              ['/网络管理/网络管理/netstat', 'netstat'],
              ['/网络管理/网络管理/nmap', 'nmap'],
              ['/网络管理/网络管理/nslookup', 'nslookup'],
              ['/网络管理/网络管理/nstat', 'nstat'],
              ['/网络管理/网络管理/ping', 'ping'],
              ['/网络管理/网络管理/route', 'route'],
              ['/网络管理/网络管理/ss', 'ss'],
              ['/网络管理/网络管理/tcpdump', 'tcpdump'],
              ['/网络管理/网络管理/tracepath', 'tracepath'],
              ['/网络管理/网络管理/traceroute', 'traceroute'],
              ['/网络管理/网络管理/usernetctl', 'usernetctl'],
            ]
          }
        ]
      },
      {
        title: '版本控制',
        children: [
          ['/版本控制/svn', 'svn'],
          ['/版本控制/git', 'git'],
        ]
      },
      {
        title: '实用工具',
        children: [
          ['/实用工具/alias-builtin', 'alias-builtin'],
          ['/实用工具/bc', 'bc'],
          ['/实用工具/cal', 'cal'],
          ['/实用工具/date', 'date'],
          ['/实用工具/fc-builtin', 'fc-builtin'],
          ['/实用工具/history-builtin', 'history-builtin'],
          ['/实用工具/ln', 'ln'],
          ['/实用工具/seq', 'seq'],
          ['/实用工具/type-builtin', 'type-builtin'],
          ['/实用工具/unalias-builtin', 'unalias-builtin'],
          ['/实用工具/yes', 'yes'],
        ]
      }
    ]
  }
}