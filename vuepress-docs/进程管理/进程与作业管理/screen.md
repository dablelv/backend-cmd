## 1.命令简介
screen 是 GNU 开发的终端会话管理工具，可以新建和管理多个终端会话，并提供切换、分离、挂载等相应的功能。

每个终端会话可以创建 1~10 个窗口，其重要的特点就是终端断开连接后，screen 创建的终端会话中的任务是保存在后台运行的，不会因为终端窗口关闭或者断开连接而终止执行。

详细说明参见[GNU Screen官方站点](http://www.gnu.org/software/screen/)。

## 2.命令格式
```
screen [OPTIONS] [ CMD [ ARGS ] ]
screen -r [[PID.]TTY[.HOST]]
screen -r SESSIONOWNER/[[PID.]TTY[.HOST]]
```

## 3.选项说明
```
-A
	将所有窗口都调整为目前终端机的大小
-d, -D [PID.TTY.HOST]
	分离指定的 screen 会话
-h NUM
	将历史记录回滚缓冲区指定为 NUM 行
-m
	即使目前处于 screen 会话，仍强制建立新的 screen 会话
-r [PID.TTY.HOST]
-r SESSIONOWNER/[PID.TTY.HOST]
	恢复离线的 screen 会话
-R
	先试图恢复离线的会话，若找不到离线的会话，再建立新的 screen 会话
-s PROGRAM
	指定建立新窗口时所要执行的 Shell，用以取代环境变量 SHELL 表示的 Shell
-S SESSIONNAME
	创建一个指定名称的新 session
-v
	显示版本信息
-x
	恢复之前离线的 screen 会话
-ls, --list
	显示目前所有的 screen 会话
-wipe [MATCH]
	检查目前所有的 screen 会话，并删除已经无法使用的 screen 会话
```

## 4.常用示例
```
screen -S yourname: 新建一个叫 yourname 的 session
screen -ls: 列出当前所有的screen session，注意显示的screen会话的命名格式是pid.name，其中pid指的是screen的进程号，name就是screen会话的名称
screen -r yourname: 回到yourname这个session；
screen -d yourname: detach某个session；
screen -d: detach当前session；
screen -d -r yourname: 分离已经连接的 session，重新回到 yourname
exit：关闭当前窗口，并且切换到下一个窗口（当退出最后一个窗口时，该screen会话自动终止，并且退回到原始 Shell 状态）
```
进入一个 screen 会话中，才可以切换窗口，在每个 screen session 下，所有快捷键都以 Ctrl+a 开始。常用快捷键如下：
```
Ctrl+a+?：显示所有键绑定信息
Ctrl+a+c：创建一个新的运行shell窗口并切换到该窗口
Ctrl+a+n：切换到下一个window
Ctrl+a+p：切换到前一个window
Ctrl+a+0..9：切换到第 0..9 个window
Ctrl+a [Space]：由视窗0循序切换到视窗9 
Ctrl+a+d：分离当前screen会话，即退出当前screen会话。将目前的screen session (可能含有多个 windows) 丢到后台执行，并会回到还没进 screen 时的状态，此时在 screen session 里，每个 window 内运行的 process (无论是前台/后台)都在继续执行，即使 logout 也不影响。 Ctrl+a+z -> 把当前session放到后台执行，用 shell 的 fg 命令则可回去。
Ctrl+a Ctrl+a：在两个最近使用的window间切换。
Ctrl+a+x：锁住当前的window，需用用户密码解锁。
Ctrl+a+w：显示所有窗口列表。
Ctrl+a+t：time，显示当前时间和系统的平均负载（Load Average，是一段时间内系统的平均负载，这个一段时间一般取1分钟、5分钟、15分钟）。
Ctrl+a+k：kill window，强行关闭当前的window
Ctrl+a+[：进入copy mode，在copy mode下可以回滚、搜索、复制就像使用vi一样，常用快捷键有： 
	Ctrl+b：Backward，PageUp
	Ctrl+f：Forward，PageDown 
	H：High，将光标移至左上角
	L：Low，将光标移至左下角
	0：移到行首
	$：行末
	w：forward one word，以字为单位往前移
	b：backward one word，以字为单位往后移
	Space：第一次按为标记区起点，第二次按为终点
	Esc 结束copy mode
Ctrl+a+]：paste，把刚刚在 copy mode 选定的内容贴上。
```

----
## 参考文献
[screen(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/screen.1.html)

[GNU screen](http://www.gnu.org/software/screen/)

[Linux命令大全.screen命令](http://man.linuxde.net/screen)

[系统load average](https://www.cnblogs.com/kaituorensheng/p/3602805.html)

<Vssue title="screen" />