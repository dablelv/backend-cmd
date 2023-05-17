## 1.命令简介
visudo 安全地编辑 sudoers 文件。

sudoers 文件的默认权限是 440，即默认无法修改；通过 visudo 可以在不更改 sudoers 文件权限的情况下，直接修改 sudoers 文件；默认编辑 /etc/sudoers 文件。

注意：需要超级用户权限。

## 2.命令格式
```shell
visudo [-chqsV] [[-f] sudoers]
```

## 3.选项说明
```
-c, --check
	启用仅检查模式。将检查现有的 sudoers 文件（以及它包含的任何其他文件）是否存在语法错误。
-f, --file=<sudoers>
	指定 sudoers 文件的位置。
-h, --help
	显示帮助信息并退出。
-q, --quiet
	启用安静模式。在此模式下，不会打印有关语法错误的详细信息。此选项仅在与 -c 选项结合使用时才有用。
-s, --strict
	严格语法检查。
-V, --version
	显示版本信息并退出。
```

## 4.常用示例
（1）编辑 /etc/sudoers 文件。
```shell
visudo
```
如将 tom 用户设置为拥有所有权限。

仿照现有 root 的例子就行，我们在下面加一行。
```
## Allow root to run any commands anywhere
root    ALL=(ALL)   ALL
tom     ALL=(ALL)   ALL
```
第一个ALL是指网络中的主机。第二个括号里的ALL是指目标用户，也就是以谁的身份去执行命令。最后一个ALL当然就是指命令名了。


再如我们想让 tom 用户在 linux 主机上以 foo 或 bar 的身份执行 kill 命令，这样编写配置文件：
```shell
tom    linux=(foo,bar)    /bin/kill
```
但这还有个问题，tom 到底以 foo 还是 bar 的身份执行？

这时我们应该想到了 sudo -u 了，它正是用在这种时候。 tom可以使用 sudo -u foo kill PID 或 sudo -u bar kill PID，但这样挺麻烦，其实我们可以不必每次加-u，把 foo 或 bar 设为默认的目标用户即可。

再在上面加一行：
```
Defaults:foobar    runas_default=itcast
```
Defaults 后面如果有冒号，是对后面用户的默认，如果没有，则是对所有用户的默认。就像配置文件中自带的一行：
```
Defaults    env_reset
```

（2）取消执行 sudo 时输入密码。

很多时候，我们本来就登录了，每次使用 sudo 还要输入密码就显得烦琐了。我们可不可以不再输入密码呢？

当然可以，我们这样修改配置文件：
```
tom localhost=NOPASSWD:     /bin/cat, /bin/ls
```


（2）检查语法等错误（不编辑）。
```shell
visudo -c
```

（3）显示版本信息并退出。
```shell
visudo -V
visudo version 1.8.21p2
visudo grammar version 46
```

---
## 参考文献
[visudo(8) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man8/visudo.8.html)
