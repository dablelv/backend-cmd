## 1.命令简介
stty（set teletype）改变或打印终端行设置。

## 2.命令格式
```shell
stty [-F DEVICE | --file=DEVICE] [SETTING]...
stty [-F DEVICE | --file=DEVICE] [-a|--all]
stty [-F DEVICE | --file=DEVICE] [-g|--save]
```
## 3.选项说明
```shell
-a, --all
	以可读的格式打印当前的所有设置。
-g, --save
	以终端可读的格式打印当前的所有设置。
-F, --file
	打开指定的设备，并用此设备作为输入来代替标准输入。
--help 
	显示帮助并退出。
--version
	显示版本信息并退出。
```

## 4.设置说明
`-`在 SETTING 前表示否定。`*`标记非 POSIX 设置。

下面列出了哪些设置可用。

**特殊字符：**
```
 * dsusp 字符   每当输入刷新时会发送一个用于终端阻塞信号的字符
   eof  字符    表示文件末尾而发送的字符(用于终止输入)
   eol  字符    为表示行尾而发送的字符
 * eol2 字符    为表示行尾而发送的另一个可选字符
   erase 字符   擦除前一个输入文字的字符
   intr 字符    用于发送中断信号的字符
   kill 字符    用于擦除当前终端行的字符
 * lnext 字符   用于输入下一个引用文字的字符
   quit 字符    用于发送退出信号的字符
 * rprnt 字符   用于重绘当前行的字符
   start 字符   在停止后重新开启输出的字符
   stop 字符    停止输出的字符
   susp 字符    发送终端阻断信号的字符
 * swtch 字符   在不同的shell 层次间切换的字符
 * werase 字符  擦除前一个输入的单词的字符
```

**特殊设置：**
```
   N            设置输入输出速度为N 波特
 * cols N       统治内核终端上有N 栏
 * columns N    等于cols N
   ispeed N     设置输入速度为N 波特
 * line N       设置行约束规则为N
   min N        和 -icanon 配合使用，设置每次一完整读入的最小字符数为<N>
   ospeed N     设置输出速度为N 波特
 * rows N       向内核通告此终端有N 行
 * size 根据内核信息输出当前终端的行数和列数
   speed        输出终端速度(单位为波特)
   time N       和-icanon 配合使用，设置读取超时为N 个十分之一秒
```

**控制设置：**
```
  [-]clocal    禁用调制解调器控制信号
  [-]cread     允许接收输入
* [-]crtscts   启用RTS/CTS 握手
  csN          设置字符大小为 N  位，N 的范围为 5 到 8
  [-]cstopb    每个字符使用2 位停止位 (要恢复成1 位配合"-"即可)
  [-]hup       当最后一个进程关闭标准终端后发送挂起信号
  [-]hupcl     等于[-]hup
  [-]parenb    对输出生成奇偶校验位并等待输入的奇偶校验位
  [-]parodd    设置校验位为奇数 (配合"-"则为偶数)
```
**输入设置：**
```
   [-]brkint    任务中断会触发中断信号
   [-]icrnl     将回车转换为换行符
   [-]ignbrk    忽略中断字符
   [-]igncr     忽略回车
   [-]ignpar    忽略含有奇偶不对称错误的字符
 * [-]imaxbel   发出终端响铃但不刷新字符的完整输入缓冲
   [-]inlcr     将换行符转换为回车
   [-]inpck     启用输入奇偶性校验
   [-]istrip    剥除输入字符的高8 位比特
 * [-]iutf8     假定输入字符都是UTF-8 编码
 * [-]iuclc     将大写字母转换为小写
 * [-]ixany     使得任何字符都会重启输出，不仅仅是起始字符
   [-]ixoff     启用开始/停止字符传送
   [-]ixon      启用XON/XOFF 流控制
   [-]parmrk    标记奇偶校验错误 (结合255-0 字符序列)
   [-]tandem    等于[-]ixoff
```
**输出设置：**
```
 * bsN          退格延迟的风格，N 的值为0 至1
 * crN          回车延迟的风格，N 的值为0 至3
 * ffN          换页延迟的风格，N 的值为0 至1
 * nlN          换行延迟的风格，N 的值为0 至1
 * [-]ocrnl     将回车转换为换行符
 * [-]ofdel     使用删除字符代替空字符作填充
 * [-]ofill     延迟时使用字符填充代替定时器同步
 * [-]olcuc     转换小写字母为大写
 * [-]onlcr     将换行符转换为回车
 * [-]onlret    使得换行符的行为表现和回车相同
 * [-]onocr     不在第一列输出回车
   [-]opost     后续进程输出
 * tabN 水平制表符延迟的风格，N 的值为0 至3
 * tabs 等于tab0
 * -tabs        等于tab3
 * vtN          垂直制表符延迟的风格，N 的值为0 至1
```
**本地设置：**
```
   [-]crterase  擦除字符回显为退格符
 * crtkill      依照echoprt 和echoe 的设置清除所有行
 * -crtkill     依照echoctl 和echol 的设置清除所有行
 * [-]ctlecho   在头字符中输出控制符号("^c")
   [-]echo      回显输入字符
 * [-]echoctl   等于[-]ctlecho
   [-]echoe    等于[-]crterase
   [-]echok     在每清除一个字符后输出一次换行
 * [-]echoke    等于[-]crtkill 意义相同
   [-]echonl    即使没有回显任何其它字符也输出换行
 * [-]echoprt   在"\"和"/"之间向后显示擦除的字符
   [-]icanon    启用erase、kill、werase 和rprnt 等特殊字符
   [-]iexten    允许POSIX 标准以外的特殊字符
   [-]isig      启用interrupt、quit和suspend 等特殊字符
   [-]noflsh    在interrupt 和 quit 特殊字符后禁止刷新
 * [-]prterase  等于[-]echoprt
 * [-]tostop    中止尝试向终端写入数据的后台任务
 * [-]xcase     和icanon 配合使用，用转义符"\"退出大写状态
```
**综合设置：**
```
 * [-]LCASE     等于[-]lcase
   cbreak       等于-icanon
   -cbreak      等于icanon
   cooked       等于brkint ignpar istrip icrnl ixon opost isig icanon eof                   eol 等的默认值
   -cooked      等于-raw
   crt          等于echoe echoctl echoke
   dec          等于echoe echoctl echoke -ixany intr ^c erase 0177 kill ^u
 * [-]decctlq   等于[-]ixany
   ek           清除所有字符，将它们回溯为默认值
   evenp        等于parenb -parodd cs7
   -evenp       等于-parenb cs8
 * [-]lcase     等于xcase iuclc olcuc
   litout       等于-parenb -istrip -opost cs8
   -litout      等于parenb istrip opost cs7
   nl           等于-icrnl -onlcr
   -nl          等于icrnl -inlcr -igncr onlcr -ocrnl -onlret
   oddp 等于parenb parodd cs7
   -oddp        等于-parenb cs8
   [-]parity    等于[-]evenp
   pass8        等于-parenb -istrip cs8
   -pass8       等于parenb istrip cs7
   raw          等于-ignbrk -brkint -ignpar -parmrk -inpck -istrip
                 -inlcr -igncr -icrnl -ixon -ixoff -iuclc -ixany
                 -imaxbel -opost -isig -icanon -xcase min 1 time 0
   -raw 等于cooked
   sane 等于cread -ignbrk brkint -inlcr -igncr icrnl -iutf8
                -ixoff -iuclc -ixany imaxbel opost -olcuc -ocrnl onlcr
                -onocr -onlret -ofill -ofdel nl0 cr0 tab0 bs0 vt0 ff0
                isig icanon iexten echo echoe echok -echonl -noflsh
                -xcase -tostop -echoprt echoctl echoke，所有特殊字符均
                使用默认值
```
处理连接到标准输入的 tty 终端行设置。当不附加参数时，程序会输出波特率、行约束
规则以及与标准 stty 设置间的偏差。在设置中，字符会被逐字读取或是被编码为 ^c、
0x37、0177 或 127 这样的字符，其中有特殊值 ^- 或 undef 被用于禁止特殊字符。

## 4.常用示例
（1）以可读的格式打印当前的所有设置。

```shell
stty -a
speed 38400 baud; rows 28; columns 149; line = 0;
intr = ^C; quit = ^\; erase = ^?; kill = ^U; eof = ^D; eol = <undef>; eol2 = <undef>; swtch = <undef>; start = ^Q; stop = ^S; susp = ^Z; rprnt = ^R;
werase = ^W; lnext = ^V; flush = ^O; min = 1; time = 0;
-parenb -parodd -cmspar cs8 -hupcl -cstopb cread -clocal -crtscts
-ignbrk -brkint -ignpar -parmrk -inpck -istrip -inlcr -igncr icrnl ixon -ixoff -iuclc -ixany -imaxbel -iutf8
opost -olcuc -ocrnl onlcr -onocr -onlret -ofill -ofdel nl0 cr0 tab0 bs0 vt0 ff0
isig icanon iexten echo echoe echok -echonl -noflsh -xcase -tostop -echoprt echoctl echoke
```

（2）以终端可读的格式打印当前的所有设置。

```shell
stty -g
500:5:bf:8a3b:3:1c:7f:15:4:0:1:0:11:13:1a:0:12:f:17:16:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0
```

（3）在命令行下禁止输出大写。

```shell
stty iuclc
```

（4）在命令行下允许输出大写。

```shell
stty -iuclc
```

（5）在命令行下禁止输出小写。

```shell
stty olcuc
```

（6）在命令行下允许输出小写。

```shell
stty -olcuc
```

（7）打印出终端的行数和列数。

```shell
stty size
28 149
```

（8）关闭回显。

```shell
stty -echo
```

（9）开启回显。

```shell
stty echo
```

（10）忽略回车符。

```shell
stty igncr
```

---
# 参考文献
[stty(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/stty.1.html)

[stty(1p) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/stty.1p.html)

[【Linux】一步一步学Linux——stty命令(243)](https://blog.csdn.net/dengjin20104042056/article/details/101099023)

<Vssue title="stty" />