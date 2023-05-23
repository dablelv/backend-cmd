## 1.命令简介
systemctl 是管理操作系统和服务的命令，是与 systemd 交互的主要工具，其实现的功能包含了 service 和 chkconfig 这两个命令的功能。

systemd（system daemon）是操作系统的服务管理器，用于取代 system V 和 BSD 风格的 init 程序，是一号进程，掌管整个系统的其他进程，用于集中管理和配置类 UNIX 系统。每个服务都有一个启动文件，描述 systemd 应该如何启动自己。

## 2.命令格式
```
systemctl [OPTIONS...] COMMAND [NAME...]
```

## 3.选项说明
```
-t, --type=[help, UNITTYPE...]
	指明单元类型，使用逗号分隔。如果是 help，则列出所有可用的 unit type
--state=UNITSTATE...
	指明单元的状态，使用逗号分隔。例如使用 --state=failed，则在输出单元列表时只展示状态为 failed 的单元
-p, --property=PROPERTY...
	使用 show 命令显示 unit/job/manager 属性时，将显示限制为参数中指定的属性，使用逗号分隔，例如属性 MainPID
-a, --all
	列出单元时，显示所有加载的单元，无论其状态如何，包括非活动单元。显示 unit/job/manager 属性时，显示所有属性，无论它们是否已设置
-r, --recursive
	列出单元时，还显示本地容器的单元。本地容器的单元将以容器名称作为前缀，并用单个冒号字符分隔
--reverse
	与命令 list-dependencies 一起使用，显示单元之间的反向依赖项
--after
	与命令 list-dependencies 一起使用，显示指定单元前面的单元
--before
	与命令 list-dependencies 一起使用，显示指定单元后面的单元
-l, --full
	不要省略单元名称、进程树条目、日志输出，也不要截断状态、单元列表、作业列表和计时器列表输出中的单元描述
--show-types
	显示套接字时，显示套接字的类型
--job-mode=MODE
	在对新作业排队时，此选项控制如何处理已排队的作业。可取值 fail、replace、replace_irreversibly、isolate、ignore-dependencies、ignore-requirements 或 flush 之一。默认为 replace，除非使用了表示隔离作业模式的 isolate 命令
-i, --ignore-inhibitors
	当系统关闭或睡眠请求时，忽略约束锁，否则系统关闭或睡眠请求会失败。应用程序可以建立约束锁，以避免某些重要操作（如CD刻录或类似操作）被系统关闭或睡眠状态中断
-q, --quiet
	静默模式，抑制 snapshot, is-active, is-failed, is-enabled, is-system-running, enable 和 disable 命令的标准输出
--no-block
	不同步等待请求的操作完成。如果未指定该选项，验证完作业并排队，systemctl 将等待作业完成
--system
	与服务管理器（service manager）交互。为缺省选项
--no-wall
	在 halt, power-off, reboot 操作前不发出警告
--no-reload
	当与命令 enable 和 disable 一起使用时，不隐式重新加载守护程序的配置
--no-ask-password
	当与 start 和相关命令一起使用时，禁止请求密码
--kill-who=WHO
	与命令 kill 一起使用时，选择向哪个进程发送信号。必须是 main、control 或 all 中的一个，分别选择杀死主进程、控制进程还是单元的所有进程
-s, --signal=SIGNAL
	与命令 kill 一起使用，选择向进程发送的信号。缺省为 SIGTERM
-f, --force
	与 enable 一起使用时，覆盖任何现有冲突的符号链接。与 halt、poweroff、reboot 或 kexec 一起使用时，在不关闭所有单元的情况下执行所选操作
--now
	当与 enable 一起使用时，单元也将启动。当与 disable 或 mask 一起使用时，单元也将停止
--root=PATH
	当与 enable/disable/is-enabled（等相关命令）一起使用时，在查找单元文件时使用指定的根路径
--runtime
	当与 enable、disable、edit（等相关命令）一起使用时，只需临时进行更改，以便在下次系统重新启动时丢失这些更改
--preset-mode=MODE
	与命令 preset 或 preset-all 一起使用时，预设模式为 full（缺省）、enable-only 或 disable-only 三者之一
-n, --lines=NUM
	与命令 status 一起使用时，控制日志文件显示的行数。默认为 10
-o, --output=FORMAT
	与命令 status 一起使用时，控制日志条目的显示格式，默认为 short。其它取值可参考命令 journalctl(1)。
--plain
	当与命令 list-dependencies 一起使用时，输出将打印为列表而不是树。
-H, --host=HOST
	指定远程主机名，或用户名@主机名进行远程操作。机名可以选择用一个容器名作为后缀，用 : 分隔
-M, --machine=MACHINE
	指定本地容器名
--no-pager
	不将管道输出送到分页浏览工具
--no-legend
	不打印列头和列脚
-h, --help
	显示帮助信息并退出
--version
	显示版本信息并退出
```

## 4.命令说明
实际上 systemctl 子命令的使用频率会比选项更加频繁，主要有
- 单元命令（Unit Commands）
- 单元文件命令（Unit File Commands）
- 容器命令（Machine Commands）
- 作业命令（Job Commands）
- 快照命令（Snapshot Commands）
- 环境命令（Environment Commands）
- 管理器生命周期命令（Manager Lifecycle Commands）
- 系统命令（System Commands）

### 4.1 单元命令（Unit Commands）
```
list-units [PATTERN...]
	列出所有已启动的单元。如果指定一个或多个匹配模式，则只显示符合某个模式的单元。该命令为默认命令
list-sockets [PATTERN...]
	列出套接字单元，按照监听的地址排列输出。如果指定一个或多个匹配模式，则只显示符合某个模式的单元
list-timers [PATTERN...]
	列出按时间顺序排列的计时器单元。如果指定一个或多个匹配模式，则只显示符合某个模式的单元
start PATTERN...
	启动指定的单元
stop PATTERN...
	停止指定的单元
reload PATTERN...
	重新加载指定单元服务的配置文件。注意，是重新加载服务的配置，而不是 systemd 的单元配置文件。如果希望 systemd 重新加载单元的配置文件，请使用 daemon-reload 命令。换句话说：对于 Apache 的示例，这将在 web 服务器中重新加载 Apache 的 httpd.conf，而不是 apache.service systemd 单元文件
restart PATTERN...
	重启指定的单元
try-restart PATTERN...
	尝试重启指定的单元。如果单元不处于运行状态，则不进行重启
reload-or-restart PATTERN...
	重新加载指定单元服务的配置文件。如果失败则重启服务
reload-or-try-restart PATTERN...
	重新加载指定单元服务的配置文件。如果失败则尝试重启服务。如果单元不处于运行状态，则不进行重启
isolate NAME
	启动命令行中指定的单元及其依赖项，并停止所有其他的单元
kill PATTERN...
	向单元的一个或多个进程发送信号。使用 --kill who= 选择要终止的进程。使用 --signal= 选择要发送的信号
is-active PATTERN...
	检查指定单元是否处于 active 状态。如果至少一个是活动的，则返回退出代码 0，否则为非零
is-failed PATTERN...
	检查指定单元是否处于 failed 状态。如果至少一个是失败的，则返回退出代码 0，否则为非零
status [PATTERN...|PID...]
	显示一个或多个单元的简要运行时状态信息，然后是日志中的最新日志数据。如果未指定单位，则显示系统状态。如果与 --all 结合使用，还将显示所有单元的状态。如果给定 PID，则显示进程所属单元的信息
show [PATTERN...|JOB...]
	显示一个或多个单元、作业或管理器本身的属性。如果未指定参数，则将显示管理器的属性
cat PATTERN...
	显示一个或多个单元的配置文件
set-property NAME ASSIGNMENT...
	在运行时设置指定的单元属性。如果同时使用 --runtime 选项，则下一次系统重启属性将失效
help PATTERN...|PID...
	显示一个或多个单元的手册页（如果可用）。如果给定了PID，则显示该进程所属单元的手册页
reset-failed [PATTERN...]
	重置指定单元的 failed 状态，如果未指定单元名称，则重置所有单元的 failed 状态
list-dependencies [NAME]
	显示指定单元所依赖的单元。它递归地列出 Requires=、RequiresOverridable=、Requisite=、RequisiteOverridable=、Wants=、BindsTo= 依赖项之后的单元。如果未指定单位，缺省为 default.target
```

### 4.2 单元文件命令（Unit File Commands）
```
list-unit-files [PATTERN...]
	列出已安装的单元文件及其启用状态
enable NAME...
	启用一个或多个单元文件或单元文件实例。这将创建一些符号链接，记录在单元文件的 Install 部分。创建符号链接后，将重新加载 systemd 配置以确保立即生效
disable NAME...
	禁用一个或多个单元。这将从单元配置目录中删除指向指定单元文件的所有符号链接，从而撤消由 enable 所做的更改。移除符号链接后，将重新加载 systemd 配置以确保立即生效。注意，此命令不会隐式停止正在禁用的单元。如果需要的话，使用 --now 选项，要么在之后执行一个附加的 stop 命令
reenable NAME...
	重新启用一个或多个单元文件。这是 disable 和 enable 的组合，用于将启用单元的符号链接重置为单元文件 Install 部分中配置的值
preset NAME...
	重置指定单元文件的 disable/enable 状态为预设策略文件中配置的值。可以与选项 --preset-mode 联用选择重置的结果状态。关于预设策略格式的详细信息，参见 systemd.preset(5)
preset-all
	将所有已安装的单元文件重置为预设策略文件中配置的默认值。可以与选项 --preset-mode 联用选择重置的结果状态
is-enabled NAME...
	检查是否启用了指定的单元文件
mask NAME...
	屏蔽一个或多个单元文件，把这些单元链接到 /dev/null，使它们无法启动
unmask NAME...
	反屏蔽一个或多个单元文件
link FILENAME...
	将不在单元文件搜索路径中的单元文件链接到单元文件搜索路径中，这需要单元文件的绝对路径
add-wants TARGET NAME..., add-requires TARGET NAME...
	给指定单元添加依赖
edit NAME...
	编辑插入片段或使用选项 --full 表示替换整个文件，以扩展或重写指定的单元
get-default
	返回别名为 default.target 的单元
set-default NAME
	设置默认的单元，使 default.target 软链接到目标单元
```

### 4.3 容器命令（Machine Commands）
```
list-machines [PATTERN...]
	列出主机和所有正在运行的本地容器及其状态。如果指定了一个或多个模式，则只显示与其中一个模式匹配的容器
```

### 4.4 作业命令（Job Commands）
```
list-jobs [PATTERN...]
	
cancel JOB...
	列出正在进行的作业。如果指定了一个或多个模式，则只显示与其中一个模式匹配的单元的作业
cancel JOB...
	取消一个或多个指定作业 ID 的作业。如果未指定作业 ID，则取消所有挂起的作业
```

### 4.5 快照命令（Snapshot Commands）
```
snapshot [NAME]
	创建指定名称的快照。如果未指定快照名则自动生成。快照指的是 systemd 管理器的保存状态。它被实现为一个使用此命令动态生成的单元，并且依赖于当时活动的所有单元。稍后，用户可以使用快照单元上的 isolate 命令返回到该状态
delete PATTERN...
	删除快照
```

### 4.6 环境命令（Environment Commands）
```
show-environment
	显示 systemd manager 使用的环境变量
set-environment VARIABLE=VALUE...
	设置 systemd manager 使用的环境变量
unset-environment VARIABLE...
	取消一个或多个 systemd manager 的环境变量
import-environment [VARIABLE...]
	将客户端上设置的一个或多个环境变量导入 systemd manager 环境块。如果未传递参数，则导入整个环境块
```

### 4.7 管理器生命周期命令（Manager Lifecycle Commands）
```
daemon-reload
	重新加载 systemd 管理器配置。这将重新运行所有生成器（请参阅 systemd.generator（7）），重新加载所有单元文件，并重新创建整个依赖关系树。在重新加载守护进程时，所有 systemd 监听的代表用户配置的 sockets，保持可访问状态
daemon-reexec
	重新执行 systemd 管理器
```

### 4.8 系统命令（System Commands）
```
is-system-running
	检查系统是否正在运并返回当前的系统状态，状态有 initializing，starting，running，degraded，maintenance，stopping
default
	进入默认模式，等同于子命令 isolate default.target
rescue
	进入救援模式。等同于子命令 isolate rescue.target，会向所有用户打印警告消息
emergency
	进入紧急模式。等同于子命令 isolate emergency.target，会向所有用户打警告消息
halt
	关闭并停止系统。等同于子命令 start halt.target --irreversible
poweroff
	关闭并关闭系统电源。等同于子命令 start poweroff.target --irreversible，会向所有用户打印警告消息
reboot [arg]
	关闭并重新启动系统。等同于子命令 start reboot.target --irreversible，会向所有用户打印警告消息
kexec
	通过 kexec 关闭并重新启动系统。等同于子命令 start kexec.target --irreversible，会向所有用户打印警告消息
switch-root ROOT [INIT]
	切换到不同的根目录并在其下执行新的系统管理器进程
suspend
	暂停系统
hibernate
	使系统休眠。这将激活特殊的 hibernate.target 目标
hybrid-sleep
	休眠并挂起系统。这将激活特殊的 hybrid-sleep.target 目标
```

实际上，systemctl 常用的子命令并不多，主要有：
```
start	启动服务
stop	停止服务
restart	重启服务
enable	使某服务开机自启
disable	关闭某服务开机自启
status	查看服务状态
list-units -–type=service 列举所有已启动服务
```

## 5.常用示例
（1）使用 systemctl 管理系统。
```
# 重启系统
systemctl reboot

# 关闭系统，切断电源
systemctl poweroff

# CPU停止工作
systemctl halt

# 暂停系统
systemctl suspend

# 让系统进入冬眠状态
systemctl hibernate

# 让系统进入交互式休眠状态
systemctl hybrid-sleep

# 启动进入救援状态（单用户状态）
systemctl rescue
```

（2）使用 systemctl list-units 查看系统的单元。
```
# 列出正在运行的 unit
systemctl
# 或
systemctl list-units

# 列出所有 unit，包括没有运行的 unit
systemctl list-units --all

# 列出所有没有运行的 unit
systemctl list-units --all --state=inactive

# 列出所有加载失败的 unit
systemctl list-units --failed

# 列出所有正在运行类型为 service 的 unit
systemctl list-units --type=service
```

（3）使用 systemctl status 查看系统状态和单个 unit 的状态。
```
# 显示系统状态
systemctl status

# 显示单个 unit 的状态
systemctl status apache.service

# 显示远程主机的某个 unit 的状态
systemctl -H root@rhel7.example.com status httpd.service
```

（4）服务管理。
```
# 启动一个服务
systemctl start apache.service

# 停止一个服务
systemctl stop apache.service

# 重启一个服务
systemctl restart apache.service

# 杀死一个服务的所有子进程
systemctl kill apache.service

# 重新加载一个服务的配置文件
systemctl reload apache.service

# 重新加载 systemd 管理器配置
systemctl daemon-reload

# 显示某个 unit 的所有底层参数
systemctl show httpd.service

# 显示某个 unit 的指定属性的值
systemctl show -p CPUShares httpd.service

# 设置某个 unit 的指定属性
systemctl set-property httpd.service CPUShares=500
```

（5）查看 unit 之间的依赖关系。
A 依赖于 B，意味着 systemd 在启动 A 的时候，同时会去启动 B。
```
# 列出一个 Unit 的所有依赖
$ systemctl list-dependencies nginx.service
```
上面命令的输出结果之中，有些依赖是 Target 类型，默认不会展开显示。如果要展开 Target，就需要使用 --all 参数。
```
systemctl list-dependencies --all nginx.service
```

（6）设置服务开机启动。
systemd 默认从目录 /etc/systemd/system/ 读取配置文件。但是，里面存放的大部分文件都是符号链接，指向目录 /usr/lib/systemd/system/，真正的配置文件存放在那个目录。systemctl enable命令用于在上面两个目录之间，建立符号链接关系。
```
systemctl enable sshd.service
# 等同于
ln -s /usr/lib/systemd/system/sshd.service /etc/systemd/system/multi-user.target.wants/sshd.service'
```

如果配置文件里面设置了开机启动，systemctl enable命令相当于激活开机启动。与之对应的，systemctl disable 命令用于在两个目录之间，撤销符号链接关系，相当于撤销开机启动。
```
systemctl disable sshd.service
```
配置文件的后缀名，就是该 unit 的种类，比如 sshd.socket。如果省略，systemd 默认后缀名为 .service，所以 sshd 会被理解成 sshd.service。

## 6.拓展知识
### 6.1 Unit
#### 6.1.1 配置文件的格式
systemd 可以管理所有系统资源，不同的资源统称为单元（unit）。unit 一共分成 12 种。
```
Service unit：系统服务
Target unit：多个 Unit 构成的一个组
Device Unit：硬件设备
Mount Unit：文件系统的挂载点
Automount Unit：自动挂载点
Path Unit：文件或路径
Scope Unit：不是由 Systemd 启动的外部进程
Slice Unit：进程组
Snapshot Unit：Systemd 快照，可以切回某个快照
Socket Unit：进程间通信的 socket
Swap Unit：swap 文件
Timer Unit：定时器
```
每一个 Unit 都有一个配置文件，告诉 Systemd 怎么启动这个 Unit 。配置文件就是普通的文本文件，可以用文本编辑器打开，也可以使用 systemctl cat 命令查看配置文件的内容。
```
systemctl cat sshd.service

# /usr/lib/systemd/system/sshd.service
[Unit]
Description=OpenSSH server daemon
Documentation=man:sshd(8) man:sshd_config(5)
After=network.target sshd-keygen.service
Wants=sshd-keygen.service

[Service]
EnvironmentFile=/etc/sysconfig/sshd
ExecStart=/usr/sbin/sshd -D $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
Restart=on-failure
RestartSec=42s

[Install]
WantedBy=multi-user.target
```
从上面的输出可以看到，配置文件分成几个区块。每个区块的第一行，是用方括号表示的区别名，比如[Unit]。注意，配置文件的区块名和字段名，都是大小写敏感的。每个区块内部是一些等号连接的键值对。注意，键值对的等号两侧不能有空格。

####  6.1.2 配置文件的区块
[Unit]区块通常是配置文件的第一个区块，用来定义 Unit 的元数据，以及配置与其他 Unit 的关系。它的主要字段如下。
```
Description：简短描述
Documentation：文档地址
Requires：当前 Unit 依赖的其他 Unit，如果它们没有运行，当前 Unit 会启动失败
Wants：与当前 Unit 配合的其他 Unit，如果它们没有运行，当前 Unit 不会启动失败
BindsTo：与Requires类似，它指定的 Unit 如果退出，会导致当前 Unit 停止运行
Before：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之后启动
After：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之前启动
Conflicts：这里指定的 Unit 不能与当前 Unit 同时运行
Condition...：当前 Unit 运行必须满足的条件，否则不会运行
Assert...：当前 Unit 运行必须满足的条件，否则会报启动失败
```

[Service]区块用来 Service 的配置，只有 Service 类型的 Unit 才有这个区块。它的主要字段如下。
```
Type：定义启动时的进程行为。它有以下几种值。
Type=simple：默认值，执行ExecStart指定的命令，启动主进程
Type=forking：以 fork 方式从父进程创建子进程，创建后父进程会立即退出
Type=oneshot：一次性进程，Systemd 会等当前服务退出，再继续往下执行
Type=dbus：当前服务通过D-Bus启动
Type=notify：当前服务启动完毕，会通知Systemd，再继续往下执行
Type=idle：若有其他任务执行完毕，当前服务才会运行
ExecStart：启动当前服务的命令
ExecStartPre：启动当前服务之前执行的命令
ExecStartPost：启动当前服务之后执行的命令
ExecReload：重启当前服务时执行的命令
ExecStop：停止当前服务时执行的命令
ExecStopPost：停止当其服务之后执行的命令
RestartSec：自动重启当前服务间隔的秒数
Restart：定义何种情况 Systemd 会自动重启当前服务，可能的值包括always（总是重启）、on-success、on-failure、on-abnormal、on-abort、on-watchdog
TimeoutSec：定义 Systemd 停止当前服务之前等待的秒数
Environment：指定环境变量
```

[Install]通常是配置文件的最后一个区块，用来定义如何启动，以及是否开机启动。它的主要字段如下。
```
WantedBy：它的值是一个或多个 Target，当前 Unit 激活时（enable）符号链接会放入/etc/systemd/system目录下面以 Target 名 + .wants后缀构成的子目录中
RequiredBy：它的值是一个或多个 Target，当前 Unit 激活时，符号链接会放入/etc/systemd/system目录下面以 Target 名 + .required后缀构成的子目录中
Alias：当前 Unit 可用于启动的别名
Also：当前 Unit 激活（enable）时，会被同时激活的其他 Unit
```

#### 6.1.3 配置文件的状态
systemctl list-unit-files 命令用于列出所有配置文件。
```
# 列出所有配置文件
$ systemctl list-unit-files

# 列出指定类型的配置文件
$ systemctl list-unit-files --type=service
```
这个命令会输出一个列表。
```
systemctl list-unit-files

UNIT FILE              STATE
chronyd.service        enabled
clamd@.service         static
clamd@scan.service     disabled
````
这个列表显示每个配置文件的状态，一共有四种。
```
enabled：已建立启动链接
disabled：没建立启动链接
static：该配置文件没有[Install]部分（无法执行），只能作为其他配置文件的依赖
masked：该配置文件被禁止建立启动链接
```
注意，从配置文件的状态无法看出，该 Unit 是否正在运行。这必须执行前面提到的 systemctl status 命令。
```
systemctl status sshd.service
```
一旦修改配置文件，就要让 SystemD 重新加载配置文件，然后重新启动，否则修改不会生效。
```
systemctl daemon-reload
systemctl restart httpd.service
```

### 6.2 Target
启动计算机的时候，需要启动大量的 Unit。如果每一次启动，都要一一写明本次启动需要哪些 Unit，显然非常不方便。Systemd 的解决方案就是 Target。

简单说，Target 就是一个 Unit 组，包含许多相关的 Unit 。启动某个 Target 的时候，Systemd 就会启动里面所有的 Unit。从这个意义上说，Target 这个概念类似于"状态点"，启动某个 Target 就好比启动到某种状态。

传统的init启动模式里面，有 RunLevel 的概念，跟 Target 的作用很类似。不同的是，RunLevel 是互斥的，不可能多个 RunLevel 同时启动，但是多个 Target 可以同时启动。
```
# 查看当前系统的所有 Target
systemctl list-unit-files --type=target

# 查看一个 Target 包含的所有 Unit
systemctl list-dependencies multi-user.target

# 查看启动时的默认 Target
systemctl get-default

# 设置启动时的默认 Target
systemctl set-default multi-user.target

# 切换 Target 时，默认不关闭前一个 Target 启动的进程，systemctl isolate 命令改变这种行为，关闭前一个 Target 里面所有不属于后一个 Target 的进程
systemctl isolate multi-user.target
```

Target 与 传统 RunLevel 的对应关系如下。
```
Traditional runlevel      New target name     Symbolically linked to...

Runlevel 0           |    runlevel0.target -> poweroff.target
Runlevel 1           |    runlevel1.target -> rescue.target
Runlevel 2           |    runlevel2.target -> multi-user.target
Runlevel 3           |    runlevel3.target -> multi-user.target
Runlevel 4           |    runlevel4.target -> multi-user.target
Runlevel 5           |    runlevel5.target -> graphical.target
Runlevel 6           |    runlevel6.target -> reboot.target
```
它与init进程的主要差别如下。

（1）默认的 RunLevel（在/etc/inittab文件设置）现在被默认的 Target 取代，位置是/etc/systemd/system/default.target，通常符号链接到 graphical.target（图形界面）或者multi-user.target（多用户命令行）。

（2）启动脚本的位置，以前是/etc/init.d目录，符号链接到不同的 RunLevel 目录 （比如/etc/rc3.d、/etc/rc5.d等），现在则存放在/lib/systemd/system和/etc/systemd/system目录。

（3）配置文件的位置，以前init进程的配置文件是/etc/inittab，各种服务的配置文件存放在/etc/sysconfig目录。现在的配置文件主要存放在/lib/systemd目录，在/etc/systemd目录里面的修改可以覆盖原始设置。

### 6.3 日志管理
Systemd 统一管理所有 Unit 的启动日志。带来的好处就是，可以只用 journalctl 一个命令，查看所有日志（内核日志和应用日志）。日志的配置文件是 /etc/systemd/journald.conf。

journalctl 功能强大，用法非常多。
```
# 查看所有日志（默认情况下，只保存本次启动的日志）
journalctl

# 查看内核日志（不显示应用日志）
journalctl -k

# 查看系统本次启动的日志
journalctl -b
journalctl -b -0

# 查看上一次启动的日志（需更改设置）
journalctl -b -1

# 查看指定时间的日志
journalctl --since="2012-10-30 18:17:16"
journalctl --since "20 min ago"
journalctl --since yesterday
journalctl --since "2015-01-10" --until "2015-01-11 03:00"
journalctl --since 09:00 --until "1 hour ago"

# 显示尾部的最新10行日志
journalctl -n

# 显示尾部指定行数的日志
journalctl -n 20

# 实时滚动显示最新日志
journalctl -f

# 查看指定服务的日志
journalctl /usr/lib/systemd/systemd

# 查看指定进程的日志
journalctl _PID=1

# 查看某个路径的脚本的日志
$ sudo journalctl /usr/bin/bash

# 查看指定用户的日志
journalctl _UID=33 --since today

# 查看某个 Unit 的日志
journalctl -u nginx.service
journalctl -u nginx.service --since today

# 实时滚动显示某个 Unit 的最新日志
journalctl -u nginx.service -f

# 合并显示多个 Unit 的日志
$ journalctl -u nginx.service -u php-fpm.service --since today

# 查看指定优先级（及其以上级别）的日志，共有 8 级
# 0: emerg
# 1: alert
# 2: crit
# 3: err
# 4: warning
# 5: notice
# 6: info
# 7: debug

journalctl -p err -b

# 日志默认分页输出，--no-pager 改为正常的标准输出
journalctl --no-pager

# 以 JSON 格式（单行）输出
journalctl -b -u nginx.service -o json

# 以 JSON 格式（多行）输出，可读性更好
journalctl -b -u nginx.serviceqq -o json-pretty

# 显示日志占据的硬盘空间
journalctl --disk-usage

# 指定日志文件占据的最大空间
journalctl --vacuum-size=1G

# 指定日志文件保存多久
journalctl --vacuum-time=1years
```

---
## 参考文献
[systemctl(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/systemctl.1.html)

[最简明扼要的 Systemd 教程，只需十分钟](https://blog.csdn.net/weixin_37766296/article/details/80192633)

[【Linux】一步一步学Linux——systemctl命令(147)](https://blog.csdn.net/dengjin20104042056/article/details/99698356)

[阮一峰的网络日志Systemd 入门教程：命令篇](http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html)

<Vssue title="systemctl" />