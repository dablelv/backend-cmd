## 1.命令简介
zip 用于打包和压缩文件。

zip 是一个应用广泛的跨平台的打包和压缩工具，使用 [Deflate](https://baike.baidu.com/item/DEFLATE/9650075?fr=aladdin)（LZ77 + 哈夫曼编码）无损压缩算法将文件压缩为后缀为 .zip 的文件。其配套工具为 [unzip](https://dablelv.blog.csdn.net/article/details/103245489)，用于解压 zip 文件。

## 2.命令格式
```
zip [OPTIONS] [ZIPFILE [FILE...]]
```
选项与文件列表均是可选的，单独执行 zip 则打印简要的帮助信息。

## 3.选项说明
下面主要介绍通用选项和 Linux 平台的选项，其它平台（VMS、Windows、macOS 等）的专有选项参见 zip(1) 手册。

长选项的强制参数对于短选项也是强制的。
```
-a, --ascii
	将文件转换为 ASCII 格式
-A, --adjust-sfx
	调整自解压可执行归档文件。通过将 SFX 存根添加到现有存档中首部，可以创建自解压缩的可执行存档
-b, --temp-path PATH
	指定暂时 zip 文件的目录
-c, --entry-comments
	为每一个被压缩的文件加上一行注释说明
-d, --delete
	删除压缩文件内指定的文件。例如 zip -d foo foo/tom/junk foo/harry/\* \*.o，将移除文件 foo/tom/junk以及所有以 foo/harry/ 开头的文件以及后缀为 .o 的文件
-db, --display-bytes
	显示已处理的字节和剩余的字节
-dc, --display-counts
	显示已压缩的条目数和剩余条目数
-dd, --display-dots
	压缩每个条目时显示进度条。进度条使用点表示，默认每个点表示压缩了 10MB
-dg, --display-globaldots
	显示整体压缩的进度条，而不是每个文件的进度条。默认每个点表示压缩了 10MB
-ds, --dot-size SIZE
	设置进度条中每个点表示已处理的文件大小，默认为 10MB。如果设置为 0 表示关闭进度条
-du, --display-usize
	显示每个条目未压缩的大小
-dv, --display-volume
	显示每个条目的卷(磁盘)号
-D, --no-dir-entries
	忽略目录
-DF, --difference-archive
	增量压缩，即压缩新增或更新的文件到旧的压缩归档中。应该从运行原始 zip 命令的相同目录运行，因为存储在 zip 归档中的文件路径信息会被保留
-e, --encrypt
	压缩时进行加密，输入的密码不会被打印出来
-f, --freshen
	增量压缩，只压缩更新的文件。应该从运行原始 zip 命令的相同目录运行，因为存储在 zip 归档中的文件路径信息会被保留
-F, --fix, -FF, --fixfix
	修复已损失的压缩文件。如果压缩文件的某些部分丢失，则可以使用 -F 选项来修复，但需要一个相当完整的中心目录。如果压缩文件损坏严重或者被截断，则需要 -FF 来修复
-FS, --filesync
	将存档的内容与操作系统上的文件进行同步。如果归档中的条目与操作系统上的文件不匹配，则删除该条目
-g, --grow
	向已存在的 zip 归档文件追加内容。如果此操作失败，zip 将尝试还原存档文件到其原始状态。如果恢复失败，则存档文件可能会被损坏
-h, -?, --help
	相识帮助信息并退出。当 zip 无参数运行时，等同于使用该选项，显示帮助信息
-h2, --more-help
	显示扩展的帮助信息，包括更多关于命令行格式、模式匹配和更多少用的选项
-i, --include FILES
	指定被压缩的文件
-j, --junk-paths
	不保留被压缩的文件的目录信息，只保留文件名
-J, --junk-sfx
	从存档中删除所有前置追加的数据(例如 SFX 存根)
-k, --DOS-names
	尝试转换名称和路径以符合 MSDOS，只存储 MSDOS 属性将条目标记为 MSDOS 下的条目
-l, --to-crlf
	将 Unix 的行尾字符 LF 转换成 MSDOS 约定的 CR LF。此选项不应用于二进制文件
la, --log-append
	附加到现有日志文件。默认是覆盖
-lf, --logfile-path LOGFILEPATH
	打开指定的日志文件
-li, --log-info
	在日志中包含更多信息，例如被压缩的文件名。默认情况下只包含命令行、警告和错误以及最终状态
-ll, --from-crlf
	作用于 -l 选项相反。将 MSDOS 的结束行 CR LF 转换为 Unix 的 LF。此选项不应用于二进制文件
-L, --license
	显示 zip 许可证
-m, --move
	将指定的文件移动到 zip 归档文件中。目标文件会被删除，如果目标文件所在的目录变成空目录，也会被删除
-MM, --must-match
	所有输入的模式至少匹配一个文件，且所有输入的文件必须可读，否则 zip 将返回 OPEN 错误并退出
-n, --suffixes SUFFIXES
	不要尝试压缩指定后缀的文件。这些文件只是简单地存储在输出 zip 中(0%压缩)
-nw, --no-wild
	不执行内部通配符的处理。注意 Shell 仍然会执行通配符的处理，除非对通配符使用了转义
-o, --latest-time
	将 zip 文件的最后修改时间更改为其所有条目中最近修改时间中最近的时间
-O, --output-file OUTPUT-FILE
	不更改现有 zip 文件，指定新输出的 zip 文件
-p, --paths
	在 zip 文件中存储文件的路径信息。该选项为默认选项，可以使用 -j 选项只存储文件名
-P, --password PASSWORD
	使用指定密码加密 zip 中的条目。注意，该操作不安全，因为密码可能会被其他用户通过查看历史命令窥探到，安全的做法是通过交互式输入不可打印的密码完成加密
-q, --quiet
	静默模式。消除各种消息和提示
-r, --recurse-paths
	递归压缩指定目录
-R, --recurse-patterns
	递归遍历当前目录
-s, --split-size SPLITSIZE
	指定 zip 归档文件被拆分的大小
-sb, --split-bell
	zip 暂停分隔归档文件时响铃提示
-sc, --show-command
	在 zip 启动和结束时，显示命令行
-sf, --show-files
	显示将要操作的文件，然后退出。例如，如果创建一个新的存档，它将列出将要添加的文件。如果该选项后跟 -，即 -sf-，仅输出到打开的日志文件。对于大列表，不建议使用屏幕显示
-so, --show-options
	显示 zip 所有可用的选项
-sp, --split-pause
	如果使用 -s 启用分割，则启用分割暂停模式
-su, --show-unicode
	类似于选项 -sf，但是如果存在 Unicode 版本的路径则显示
-sU, --show-just-unicode
	如果存在，只显示 Unicode 版本的路径，否则显示该路径的标准版本
-sv, --split-verbose
	输出拆分时的各种详细消息，显示如何进行拆分
-t, --from-date MMDDYYYY
	不对最后修改时间早于指定日期的文件进行操作。其中 MM 表示月（00-12），DD 表示每个月的日（01-31），YYYY 表示年
-T, --test
	检查新 zip 文件的完整性，如果检查失败，那么旧的 zip 文件不会被改变，且输入的文件不会被删除（如果使用 -m 选项）
-TT, --unzip-command CMD
	当使用选项 -T 时，使用指定的命令对 zip 归档文件进行检测，而不是使用默认的命令 unzip -tqq
-u, --update
	更新 zip 归档文件中被更新的条目
-U, --copy-entries
	将条目从一个 zip 存档复制到另一个存档。需要 --out 选项来指定与输入存档不同的输出文件
-UN, --unicode V
	确定 zip 如何处理 Unicode 文件名。V 可取值有：q 如果路径不匹配，则退出；w 警告，继续使用标准路径；i 忽略 继续使用标准路径；n 不使用 Unicode 路径
-v, --verbose
	详细模式或打印诊断与版本信息
-ws, --wild-stop-dirs
	通配符 * 只用于替换文件而不包含目录。如 /foo/bar/* 只会匹配 /foo/bar/file2.c，不会匹配 /foo/bar/dir/file1.c
-x, --exclude FILES
	显式排除指定的文件，如 zip -r foo foo -x \*.o，将排除目录 foo 下所有以 .o 结尾的文件。注意，星号需要转义，以免被 Shell 替换
-X, --no-extra
	不保存额外的文件属性
-y, --symlinks
	压缩存储符号链接本身而不是目标文件
-z, --archive-comment
	提示为整个 zip 归档文件输入多行注释。注释以仅包含一个点号的行结束或者输入 ^D。也可以从文件中获取注释，如 zip -z foo < foowhat
-Z, --compression-method CM
	设置默认的压缩算法。目前 zip 支持的主要算法是 store、deflate 和 bzip2
-#(-0, -1, -2, -3, -4, -5, -6, -7, -8, -9)
	使用指定的数字 # 调节压缩速度，其中 -0 表 示没有压缩，仅打包所有文件；-1 表示最快的压缩速度，压缩率较低；-9表示最慢的压缩速度，最佳的压缩效果；默认压缩级别为 -6
-@, --names-stdin
	从标准输入获取输入文件列表，每行一个文件
```

## 4.常用示例
（1）压缩指定文件。
```shell
zip passwd.zip /etc/passwd
adding: etc/passwd (deflated 58%)
```
输出中 deflated 58% 表示压缩率为 58%，即压缩后的文件大小是原文件的 42%。

（2）压缩文件时进行加密。
```shell
zip -e passwd.zip /etc/passwd
Enter password: 
Verify password: 
  adding: etc/passwd (deflated 58%)
```

（3）使用 -r 选项递归压缩指定目录。
```
zip -r shell.zip shell
adding: shell/ (stored 0%)
adding: shell/sleepParent.sh (stored 0%)
adding: shell/sleep.sh (deflated 22%)
adding: shell/dir/ (stored 0%)
adding: shell/dir/test.sh (stored 0%)
```
（4）使用 -r 和 -0 选项只打包不压缩指定目录。
```shell
zip -r -0 shell.zip shell
```

（5）静默模式执行 zip，不显示 zip 命令执行过程。
```
zip -rq shell.zip shell
```

（6）向压缩文件追加文件。比如向上面生成的 shell.zip 追加文件 /etc/passwd。
```
zip -g shell.zip /etc/passwd
adding: etc/passwd (deflated 58%)
```
（7）查看 zip 文件中包含的文件。需要使用 unzip -l 命令只查看不解压。
```
unzip -l shell.zip
Archive:  shell.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
        0  11-24-2019 22:20   shell/
       24  10-27-2019 21:46   shell/sleepParent.sh
       58  10-30-2019 18:32   shell/sleep.sh
        0  10-30-2019 20:29   shell/dir/
        0  10-30-2019 20:13   shell/dir/test.sh
     1552  01-04-2019 14:56   etc/passwd
---------                     -------
     1668                     6 files
```

（8）从 zip 压缩文件中删除指定文件。
```
zip -d shell.zip /etc/passwd
deleting: etc/passwd
```

（9）压缩文件时显示已压缩的条目数和剩余条目数。
```
zip -dg -r shell.zip shell
0/  5	adding: shell/ (stored 0%)
1/  4	adding: shell/sleepParent.sh (stored 0%)
2/  3	adding: shell/sleep.sh (deflated 22%)
3/  2	adding: shell/dir/ (stored 0%)
4/  1	adding: shell/dir/test.sh (stored 0%)
```
第一列表示已压缩的条目数，第二列表示剩余条目数。如果想显示已处理的字节和剩余的字节数，可以使用 -db 选项。

---
## 参考文献
[zip(1) manual - linux.org](https://www.linux.org/docs/man1/zip.html)

<Vssue title="zip" />