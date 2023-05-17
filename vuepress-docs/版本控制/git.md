![在这里插入图片描述](https://img-blog.csdnimg.cn/20201214105406191.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70)

## 导语
这里记录本人使用 Git 的点滴，以需要完成的功能为切入点来讲解需要使用的命令，供大家参考。当然，再结合官方文档 [Git Reference](https://git-scm.com/docs) 及[ Git 常用命令大全](http://blog.csdn.net/dengsilinming/article/details/8000622)这类较全面的 Git 命令介绍的文章，能帮助我们更好地掌握 Git 的使用。

## 1.Git 简介
Git 是一款由 Linux 之父 Linus Torvalds 开发的免费、开源的分布式源码管理（SCM，Source Code Management）工具，也称为版本控制系统（VCS，Version Control System），用于敏捷高效地处理任何或小或大的项目。Git 相比于其它的 SCM 工具，比如 Subversion（SVN）、Mercurial、CVS、Perforce 和 ClearCase，因其高效的性能、便捷的分支管理、免费开源等优秀特性，自 2005 年诞生以来，迅速成为最流行的分布式版本控制系统，没有之一。

## 2.Git 客户端下载安装
Windows下主要有三款客户端：
- [git for windows](https://git-for-windows.github.io/)
- [GitHub Desktop](https://desktop.github.com/)
- [TortoiseGit ](https://tortoisegit.org/)

本文使用的是 GitHub Desktop，可以下载[离线安装包](http://download.csdn.net/detail/lyg468088/8723039)。

双击安装，这里不再赘述，安装成功后，打开 Git Shell 就可以执行 Git 命令了。需要注意一点，安装好 GitHub Desktop 后，桌面会出现两个图标：

![](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTYxMjI0MTExNjExMTc0)

首先需要打开 GitHub 图标，使用 GitHub 账号登陆，让 GitHub Desktop 帮助我们创建 SSH Key，并以邮件的方式通知我们。如果使用 git for windows，需要手动安装 SSH Key，安装教程见：[git使用SSH密钥](http://blog.csdn.net/wfdtxz/article/details/8678982)。git for windows 每次更新远程仓库时，都需要输入 GitHub 用户名和密码，解决办法见：[git for windows 总是提示输入用户名和秘密](http://blog.csdn.net/collonn/article/details/52848784)。

## 3.设置和配置（Setup and Config）
### git config
（1）简介

安装完 Git 后，需要对 Git 环境进行一次配置，且只需要配置一次。程序升级时会保留配置信息。 你可以在任何时候再次通过运行命令来修改它们。

Git 自带一个 git config 的工具来设置控制 Git 外观和行为的配置变量，这些变量按照不同的作用级别默认存储在四个不同的文件中。 可以使用 --file 选项来显示指明配置文件的路径。
|文件路径|级别|说明|
|---|---|---|
|/etc/gitconfig|系统级别|包含系统上每一个用户及他们仓库的通用配置。 如果使用带有 --system 选项 Git 会读写此文件|
|~/.config/git/config|用户级别|针对当前用户。 使用 --global 选项 Git 会读写此文件|
|~/.gitconfig|用户级别|针对当前用户。 使用 --global 选项 Git 会读写此文件。较新版本的 Git 会使用此配置文件|
|仓库目录/.gitconfig|仓库级别|对当前仓库有效。使用 --local 选项 Git 会读写此文件，为默认选项|

从下到上，每一个级别会覆盖上一级别的配置，优先级如下：
```shell
仓库目录/.git/config > ~/.gitconfig > /etc/gitconfig
```
（2）格式
```shell
git config [<options>]
```
（3）选项
```shell
配置文件路径（Config file location）
--system
	使用系统级别的配置文件
--global
	使用当前用户全局配置文件
--local
	使用当前仓库的配置文件，为默认选项
-f, --file=<file>
	显示指定配置文件路径

动作（Action）
-l, --list
	列出所有配置
--unset
	从配置文件中删除变量名匹配的某一行
--unset-all
	从配置文件中删除变量名匹配的所有行
```
（4）示例

- 配置用户信息。

当安装完 Git 应该做的第一件事就是设置你的用户名称与邮件地址。这样做很重要，因为每一个 Git 的提交都会使用这些信息，并且它会写入到你的每一次提交中。
```
git config --global user.name "John Doe"
git config --global user.email "johndoe@example.com"
```
- 配置文本编辑器。

当 Git 需要你输入信息时会调用文本编辑器。 如果未配置，Git 会使用操作系统默认的文本编辑器，通常是 Vim。 如果你想使用不同的文本编辑器，例如 Emacs，可以这样做：
```shell
git config --global core.editor emacs
```
- 让 Git 记住用户名和密码。

每次使用 HTTP 协议与 Git 远端交互时均需要输入用户名和密码，为了避免如此繁琐的操作，可以使用 Git 凭证系统来处理这个事情。 下面有一些 Git 的选项：
（1）默认所有都不缓存。 每一次连接都会询问你的用户名和密码。
（2）cache 模式会将凭证存放在内存中一段时间。 密码永远不会被存储在磁盘中，并且在15分钟后从内存中清除。
（3）store 模式会将凭证用明文的形式存放在磁盘中，并且永不过期。 这意味着除非你修改了你在 Git 服务器上的密码，否则你永远不需要再次输入你的凭证信息。 这种方式的缺点是你的密码是用明文的方式存放在你的 home 目录下。
（4）如果你使用的是 Mac，Git 还有一种 osxkeychain 模式，它会将凭证缓存到你系统用户的钥匙串中。 这种方式将凭证存放在磁盘中，并且永不过期，但是是被加密的，这种加密方式与存放 HTTPS 凭证以及 Safari 的自动填写是相同的。
（5）如果你使用的是 Windows，你可以安装一个叫做 Git Credential Manager for Windows 的辅助工具。 这和上面说的 osxkeychain 十分类似，但是是使用 Windows Credential Store 来控制敏感信息。 可以在 [here](https://github.com/Microsoft/Git-Credential-Manager-for-Windows) 下载。

其中部分辅助工具有一些选项。如 store 模式可以接受一个 `--file <path>` 参数，可以自定义存放密码的文件路径（默认 ~/.git-credentials ）。cache 模式有 `--timeout <seconds>` 参数，可以设置凭证存放在内存的存活时间（默认是 900，也就是 15 分钟）。
```shell
# 设置记住密码（默认15分钟）
git config --global credential.helper cache

# 设置记住密码，自定义有效时长，比如一小时后失效
git config --global credential.helper 'cache --timeout=3600'

# 长期存储用户名和密码
git config --global credential.helper store

# 长期存储用户名和密码，指定用户名密码存储位置
git config --global credential.helper 'store --file ~/.git-credentials'

# 不记住用户名密码，以 HTTP 协议的 clone、pull、push 等每次请求，都需要输入用户名和密码
git config --global --unset credential.helper
```
如果变更了用户名或密码，只需要清除存放密码的文件（默认 ~/.git-credentials ），会提示重新输入。

- 协议替换

当你想去克隆一个别人 Github 上的 repository 时，如果使用 HTTPS 协议无法访问，那么可以变更协议采用 SSH 来访问。除了在 clone 时显示变更协议，我们也可以通过配置，让 git 自动进行协议替换。

例如将 HTTPS 协议变更为 SSH 协议。在终端中输入：
```shell
git config --global url.https://github.com/.insteadOf git@github.com:
```
一顿操作之后，你的 .gitconfig 中会多出一行参数设置：
```shell
[url "https://github.com/"]
	insteadOf = git@github.com:
```
设置之后，使用 git 进行 clone 时，资源 url 中协议和域名部分`git@github.com:`将被替换为`https://github.com/`。 

- core.autocrlf 的配置。
```shell
#提交时转换为 LF，检出时转换为 CRLF
git config --global core.autocrlf true   

#提交时转换为 LF，检出时不转换
git config --global core.autocrlf input

#提交检出均不转换
git config --global core.autocrlf false
```
建议设置为最后一种，提交检出均不转换。

- 查看配置信息。

使用`git config -l, --list`命令可以列出 Git 当前所有配置。
```shell
git config -l
user.name=John Doe
user.email=johndoe@example.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```
或者通过输入` git config <key>` 或`git config --get <key>`来检查 Git 的某一项配置。
```shell
git config user.name
John

git config --get user.email
John@tencent.com
```

## 4.获取或创建项目（Getting and Creating Projects）
### git clone
git clone 命令用于将远程仓库克隆到本地。这一个操作类似于 SVN 的 check out，只有将远程仓库克隆到本地，才可以通过对本地的代码进行增删改后再提交至远程服务端。

（1）克隆远端仓库到本地。
```shell
git clone <repository path>
git clone --recursive <repository path> : 给定远端仓库地址进行克隆，同时克隆仓库依赖的子模块。子模块是独立的仓库

# 示例
git clone https://github.com/dablelv/dablelvweb.git
```
如果你的仓库地址是在Github，那么你可以在Github的网站查看，点击 "Clone or download" 按钮，具体如下图：

<img width=80% hegiht=80% src="https://img-blog.csdn.net/20160922114612906"/>

## 5.基本快照（Basic Snapshotting）
### git add
git add 命令用于将工作区的变更添加到暂存区。

（1）批量提交。

在进行修改、删除和新增操作后，需要提交多个文件或文件夹到暂存区，此时不需要一个一个进行`git add`，这样做的话效率太低，使用`git add`命令批量提交修改、删除和新增的文件或文件夹。
```shell
git add -A, --all, --no-ignore-removal
	添加所有更新的内容，包括修改、新增的和删除的文件
git add .
	添加新增的和删除的文件，只对当前目录及其子目录有效。2.x 版本开始，可以添加修改的文件
git add -u,--update
	添加修改和删除的文件，不包括新增文件
```
（2）查各命令选项的具体含义。
```
git add -h
```
（3）其它不常用选项。
```
git add -n, --dry-run [FILE]
	不实际添加文件，仅仅是展示他们是否存在或者将被忽略
git add -v, --verbose
	冗余模式
git add -i, --interactive
	交互式
git add -f, --force
	允许添加其他被忽略的文件
git add --ignore-errors
	跳过因错误不能被添加的文件
```
### git commit
git commit 命令用于将工作区或暂存区的变更提交至仓库。

每次使用 git commit 都会在本地版本库通过 SHA1 生成一个40 位的哈希值，这个哈希值也叫 commit-id。commit-id 在版本回退的时候是非常有用的，它相当于一个快照，可以在未来的任何时候通过 git reset 命令回退到指定版本。

（1）提交暂存区的变更到仓库并备注。
```
git commit -m <comment>
```
（2）将工作区被修改和被删除的文件，以及暂存区的变更提交至版本库并备注。必须要备注，不然无法提交。
```
git commit (-a | --all) -m <comment>

#等同于
git add -u
git commit -m <comment>
```
注意，新加的文件（即没有被 Git 系统管理的文件）是不能被提交到本地仓库的。建议一般不要使用 -a | --all 参数，正常的提交过程还是先使用 git add 将要改动的文件添加到暂存区，再用 git commit 提交到本地版本库。

（3）使用新的提交记录（ commitid 与 comment）覆盖最近一次提交记录。
```
git commit --amend -m <comment>
```
注意，使用 git push 推送至远端时，需要使用 -f 选项强制推送，不然会提示本地落后于远端，需要先使用 git pull 更新。强制推送时，千万要注意不要把别人的提交给覆盖了。一般在自己的开发分支使用 git push -f 不会有什么问题。

使用 --amend 参数，一般出于两种考虑：
（a）最近一次提交有 bug 需要修复，但又不想保留最近一次的提交记录；
（b）减少提交记录的数量，保持提交记录的干净整洁。

（4） 查看帮助，还有许多参数有其他效果，一般来说了解上述三种即可满足我们工作中的日常开发了。
```
git commit --help
```

### git status
git status命令用于显示工作区和暂存区的状态。
（1）查看工作区与暂存区中文件的变更情况。
```
git status
```
### git rm
git rm 命令用于从工作区或暂存区删除文件或目录。注意，git rm无法删除未受版本控制的文件（untracked file）。
```
git rm [<options>] [--] <file>...
    -n, --dry-run         用于查看删除之前会删除哪些东西，并不会有实际的影响
    -q, --quiet        	  不列出被删除的文件
    --cached              仅从暂存区删除文件，可用于文件脱离版本控制
    -f, --force           覆盖最新的检查，强制删除
    -r                    递归删除，可用于删除目录
    --ignore-unmatch      未匹配到文件不报错
```
### git mv
git mv 命令用于移动或重命名文件或目录。
```
git mv [<options>] <source>... <destination>
	-v, --verbose         冗长模式执行，输出过程信息
	-n, --dry-run         只查看影响的文件或目录，实际不做重命名处理
	-f, --force           强制移动或重命名，即使目标文件或目录已经存在
	-k                    跳过移动或重命名错误
```

## 6.分支与合并（Branching and Merging）
### git branch
git branch 用于管理分支，包括查看、创建、删除、重命名和关联。

（1）查看分支。
```shell
# 查看本地分支
git branch

# 查看远端分支
git branch -r

# 查看所有分支
git branch -a

# 查看本地分支 commit id 与 commit comment
git branch -v|--verbose

# 查看本地分支commit id与commit comment，以及关联的上游分支
git branch -vv
```
（2）创建分支。
```shell
# 基于当前分支创建本地分支不切换
git branch <branchname>

# 基于当前分支创建本地分支并切换
git checkout -b <branchname>
# 或
git switch -c <branchName>

# 将创建的本地分支推送到远端，远端分支不存在则创建。
git push origin <local_branchname>:<remote_branchname>
```
（3）更新分支。
```shell
# 使用远端分支更新本地分支
git pull [远程仓库名] [远程分支名]:[本地分支名]

# 使用关联的远端分支更新当前本地分支
git pull
```
（5）合并分支。
```shell
# 合并某分支到当前分支
git merge <srcbranch>
```
（6）删除分支。
```shell
# 删除本地分支
git branch (-d | --delete) <branchname>

# 强制删除本地分支
git branch (-D | -df | --delete --force)  <branchname>

# 删除远端分支
git push origin :<remote_branchname>
# 或
git push  origin (-d | --delete) <branchname>

# 注意，该命令无法删除远端分支，只是删除 git branch -r 列表中的远端追踪分支
git branch -dr origin/<branchname>
```
（7）本地分支关联远端分支。
```shell
# 第一种情况，远端分支已经存在。不指定 local_branchname 为当前分支。
git branch (--set-upstream-to=origin/<branchname> | -u origin/<branchname>) [<local_branchname>]

# 第二种情况，远端分支不存在
# 1.将当前本地分支推送至远端并关联（远端分支与本地分支同名）
git push (-u | --set-upstream) origin HEAD

# 2.将当前本地分支推送至远端并关联（指定远端分支名）
git push (-u | --set-upstream) origin HEAD:<remote_branchname>

# 3.将本地分支推送至远端并关联（指定本地与远端分支名）
git push (-u | --set-upstream) origin <local_branchname>:<remote_branchname>
```
（8）删除本地分支与远端分支的关联。
```shell
git branch --unset-upstream [<local_branch>]
```
（9）重命名本地分支。
```shell
# 重命名当前分支
git branch (-m | --move) <newbranch>

# 重命名指定分支
git branch (-m | --move ) <oldbranch> <newbranch>

# 强制重命名本地分支
git branch (-M -f | --move --force) [<oldbranch>] <newbranch>
```
（10）重命名远端分支。
Git 没有直接修改远端分支名的命令，我们可以通过删除重建的方式来间接重命名远端分支。
```shell
# 先删除远端分支
git push origin -d <branch_name>

# 再重命名当前本地分支
git branch (-m | --move) <newbranch>

# 将当前本地分支推送至远端并关联
git push origin (-u | --set-upstream) HEAD
```

### git checkout 
git checkout 主要用于分支切换与工作区文件的恢复。

（1）撤销工作区文件的修改。
```
git checkout -- <file name...>
```
（2）切换分支。
```
git checkout <branchName>
```
（3）切换分支，如果目标分支不存在则新建。
```
git checkout -b <branchName>
```
（4）将远端分支拉取到本地。
```
git checkout -b <branchName> origin/<branchName>
```
（5）切换当前分支到某个提交，即移动 HEAD 指针指向某个提交。
```
git checkout <commit>
```

### git switch
（1）简介
git switch 从 git 2.23 版本开始引入，是一个比较新的命令，主要用于分支的创建和切换，实现了 git checkout 命令分支创建与切换的功能。git switch 命令的语义更加贴合其作用，更容易理解，建议使用。

（2）格式
```
git switch [<options>] [<branch>]
```
（3）选项
```
-c <branch>
--create <branch>
	创建一个新分支然后切换过去
-C <branch>
--force-create <branch>
	强制创建一个新分支然后切换过去
-t
--track
	将远端分支拉取到本地
```
（4）示例
```
git switch dablelv
	切换到指定分支
git switch -c dablelv_new
	基于当前分支创建一个新分支然后切换过去
git switch -
	切回到之前的分支
git switch -t origin/dablelv
	将远端分支 dablelv 拉取到本地
```

### git stash
（1）简介
当一个分支的开发工作未完成，却要切换到另外一个分支进行开发的时候，除了commit 原分支的代码改动的方法外，可以使用 git stash 来保存当前分支的工作进度。

（2）格式
```
git stash list [<options>]
git stash show [<options>] [<stash>]
git stash drop [-q|--quiet] [<stash>]
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
	     [-u|--include-untracked] [-a|--all] [-m|--message <message>]
	     [--] [<pathspec>…​]]
git stash clear
git stash create [<message>]
git stash store [-m|--message <message>] [-q|--quiet] <commit>
```
（3）示例
```
git stash [push]
保存当前工作进度，会把暂存区和工作区的改动保存起来。执行完这个命令后，在运行git status命令，就会发现当前是一个干净的工作区，没有任何改动。使用 git stash save 'message...' 可以添加一些注释。注意，git stash 是 git stash push 的简写

git stash list
显示保存进度的列表。也就意味着，git stash命令可以多次执行。

git stash pop 
恢复最新的进度到工作区。git默认会把工作区和暂存区的改动都恢复到工作区。

git stash pop --index 
不仅恢复工作区，还恢复暂存区，即恢复最新的进度到工作区和暂存区。

git stash pop stash@{stash_id}
恢复指定的进度到工作区。stash_id是通过git stash list命令得到的。

注意：通过git stash pop命令恢复进度后，会删除当前进度。

git stash apply --index
不仅恢复工作区，还恢复暂存区，即恢复最新的进度到工作区和暂存区。不删除当前进度。

git stash apply stash@{stash_id}
恢复指定的进度到工作区，不删除当前进度。stash_id是通过git stash list命令得到的。

注意：git stash apply除了不删除恢复的进度之外，其余和git stash pop命令一样。

git stash drop [stash_id]
删除一个存储的进度。如果不指定stash_id，则默认删除最新的存储进度。

git stash clear
删除所有存储的进度。
```
### git tag
同大多数 VCS 一样，Git 也可以对某一时间点上的版本打上标签，用于版本的发布管理。一个版本发布时，我们可以为当前版本打上类似于 v.1.0.1、v.1.0.2 这样的 Tag。一个 Tag 指向一个 Commit ID，同时还可以为 Tag 添加备注，如当前的版本功能。

- 新建标签

Git 使用的标签有两种类型：轻量级的（lightweight）和含附注的（annotated）。轻量级标签就像是个不会变化的分支，实际上它就是个指向特定提交对象的引用。而含附注标签，实际上是存储在仓库中的一个独立对象，它有自身的校验和信息，包含着标签的名字，电子邮件地址和日期，以及标签说明，标签本身也允许使用 GNU Privacy Guard (GPG) 来签署或验证。一般我们都建议使用含附注型的标签，以便保留相关信息；当然，如果只是临时性加注标签，或者不需要旁注额外信息，用轻量级标签也没问题。
```
# 轻量级标签
git tag <tagname>

# 含附注的标签
git tag -a <tagname> -m <comment>

# 示例
git tag v1.0
git tag -a v1.1 -m "my version 1.1"
```
- 将本地标签推送到远端
```
# 推送本地指定标签
git push origin <tagname>

# 推送本地所有标签
git push origin --tags
```
- 查看标签
```
# 查看所有本地标签
git tag
v1.1.0
v1.1.1

# 按照创建时间降序排列
git tag --sort=-creatordate

# 按照创建时间升序排列
git tag --sort=creatordate

# 查看所有远端标签
git ls-remote --tags

# 模糊查询标签。支持使用通配符 *
git tag -l <tagname pattern>

git tag -l "*.1.1"
v1.1.1

# 查看标签详细信息
git show <tagname>
```
- 删除标签
```
# 删除本地标签
git tag -d <tagname>

# 删除远端标签
git push origin (-d | --delete) <tagname>
git push origin :refs/tags/<tagname>
```
- 重命名标签
```
# 无重命名标签选项，只能删除然后新建
git tag -d <tagname> && git tag <tagname>
```
### git merge
（1）简介

git merge 用于分支合并。比如当开发分支上的代码达到上线的标准后，此时需要使用 git merge 将开发分支合并到 master 分支。

（2）常见用法
```
# 将原分支合并到当前分支。原分支的历史提交记录会被保留
git merge <srcbranch>

# 将原分支合并到当前分支。原分支的历史提交记录不会被保留，然后使用 git commit 创建一个新提交，这样会使提交历史干净整洁，推荐使用
git merge --squash <srcbranch>
```
（3）git merge 与 git merge --squash 的区别

一图看懂二者的区别。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210713210817629.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70)
判断是否使用 --squash 选项最根本的标准是，待合并分支上的历史记录是否有意义。如果没有意义，建议使用 --squash 选项将其废弃。

## 7.分享与更新项目（Sharing and Updating Projects）
### git pull
git pull 命令用于取回远程仓库某个分支的更新与本地指定分支合并。实际上 git pull = git fetch + git merge。其基本用法格式如下：
```
git pull [<options>] [<repository> [<refspec>…​]]
```
refspec 为分支名。

（1）例如将远程仓库 origin 的 master 分支拉取过来，与本地的 branchtest 分支合并。
```
git pull origin master:branchtest
```
（2）后面的冒号与本地的分支名可以省略，表示与本地当前分支合并。
```
git pull origin master
```
（3）远程仓库名和远程分支名均可省略，表示使用与本地当前分支关联的远端分支更新本地分支。
```
git pull
```
（4）git push 出现`error: failed to push some refs to '仓库地址'`的错误，原因是远程仓库中代码版本与本地不一致冲突导致的，解决办法是先`git pull`，再`git push`。

（5）git pull 与 git pull --rebase 的区别。
git pull --rebase = git fetch + git rebase。使用 --reabase 选项可以使项目提交历史变成直线，没有分叉，非常整洁。git rebase是变基操作，使得本地分支的修改变成在远端最新版本基础上进行，于是少了一步将远端分支的最新版本merge到本地分支的记录，即 git pull --rebase 可以消除`Merge branch 'master' of <repository path>`这种commit 记录。建议使用 -r（--rebase）选项。

git pull --rebase 的过程可以使用如下图表示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190130144938906.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70)

### git push
git push 命令用于将本地分支的更新推送到远端分支，命令格式与 git pull 相似。
```
git push [<options>] [<repository> [<refspec>…​]]
```

如果命令行没有使用`<repository>`参数指定推送的仓库，则会采用`branch.*.remote`配置。如果缺少配置，则默认为 origin。

（1）使用将当前本地分支更新关联的远端分支。
```shell
git push
```
（2）将本地分支推送至远端并关联。
```shell
# 将当前分支推送至远端并关联（远端分支与本地分支同名）
git push (-u | --set-upstream) origin HEAD

# 将当前分支推送至远端并关联（指定远端分支名）
git push (-u | --set-upstream) origin HEAD:<remote_branchname>

# 将本地分支推送至远端并关联（指定本地与远端分支名）
git push (-u | --set-upstream) origin <local_branchname>:<remote_branchname>
```
（3）使用本地分支更新远端分支。
```shell
git push <仓库名> <本地分支名>:<远端分支名>
```
（4）删除远端分支。
```shell
# 方式一：推送一个空分支到远端分支
git push origin :<remote_branchname>

# 方式二：使用 git push -d
git push origin (-d | --delete) <branchname>
```
（5）本地与远端分支版本回退，需要使用 -f, --force 选项。
```shell
git reset --hard <commitid>
git push (-f | --force)
```
### git remote
git remote 命令用于管理一组被跟踪的远程代码仓库。

选项说明：
```
-h
	显示帮助信息
-v, --verbose
	查看远端仓库名称与地址。仓库地址在名称的后面，仓库名默认为 origin
```
子命令说明：
```
git remote
	查看远端仓库名称，默认为 origin
git remote rename <old> <new>
	修改远程仓库名称，默认为 origin
git remote remove <name>
	删除与远程仓库的关联
git remote add <name> <url>
	添加新的远程仓库关联
git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
	设置或删除远程仓库的默认分支。默认分支一般为 master
git remote [-v | --verbose] show [-n] <name>
	显示远程仓库相关分支信息
git remote prune [-n | --dry-run] <name>
	清理与远程仓库关联的过时分支。如果使用 --dry-run，则只显示过时分支，不进行清理。使用该命令后，被删除的远程分支将不会出现在 git branch -r 命令结果中
git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)...]
	更新远程分支列表
git remote set-branches [--add] <name> <branch>...
	为远程仓库添加分支列表
git remote get-url [--push] [--all] <name>
	查看远程仓库地址。如果使用 --push，则查询 push 地址，而非 fetch 地址
git remote set-url [--push] <name> <newurl> [<oldurl>]
	改变远程仓库地址
git remote set-url --add <name> <newurl>
	为远程仓库添加新地址
git remote set-url --delete <name> <url>
	删除所有远程仓库所有正则匹配 <url> 的地址
```
常用示例：

（1）常看关联的远程仓库名与地址。
```
git remote -v
origin	http://git.code.oa.com/trpc-cpp/trpc-cpp.git (fetch)
origin	http://git.code.oa.com/trpc-cpp/trpc-cpp.git (push)
```
（2）将关联的远程仓库名由默认的 origin 更名为 test。
```
git remote -v rename origin test

# 再次查看，更改成功
git remote -v
test	http://git.code.oa.com/trpc-cpp/trpc-cpp.git (fetch)
test	http://git.code.oa.com/trpc-cpp/trpc-cpp.git (push)
```
（3）关联新的远程仓库。
```
git remote add NewRepo http://git.code.oa.com/dablelv/trpc-cpp.git

# 查看，添加成功
git remote -v
NewRepo	http://git.code.oa.com/dablelv/trpc-cpp.git (fetch)
NewRepo	http://git.code.oa.com/dablelv/trpc-cpp.git (push)
test	http://git.code.oa.com/trpc-cpp/trpc-cpp.git (fetch)
test	http://git.code.oa.com/trpc-cpp/trpc-cpp.git (push)
```
成功关联远程仓库后，便可以从其 fetch 或向其 push 代码了。

（4）修改远程仓库地址。
```shell
git remote set-url <name> <new_url>
```

### git submodule
（1）更新子模块指针。
```
git submodule update
```
将远端仓库子模块指针更新到本地，注意与命令`git submodule update --remote --merge`的区别。子模块指针指的是子模块的版本号。

（2）更新子模块代码。
```
git submodule update --remote --merge
```
将从每个子模块的上游获取最新更改，并将其合并，这相当于在每个子模块中执行 git pull。

## 8.修补（Patching）
### git rebase
（1）简介

git rebase 是变基操作，其作用与 git merge 类似，用于将另一个分支合并到当前分支。变基是将一系列提交按照原有次序依次应用到另一分支上，使得提交历史变成一条直线，而合并（git merge）是把最终结果合在一起，提交历史可能会出现分叉，并多出一个 merge 的提交记录。

（2） git rebase 与 git merge 的区别

比如基于 master 分支创建了一个新的分支 experiment，开发任务分叉到两个不同分支，又各自提交了更新，那么提交历史日志如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190130110346331.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70)
现将 experiment 分支合并到 master 分支有两种方式，一是 git rebase，二是 git merge。

（a）git merge 方式

切换到 master 分支，执行合并操作，会将 experiment 分支的最新快照 C3 合并到 master 分支的最新快照 C2 中并生成一个新的快照（并提交）。提交历史将出现分叉，示意如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190130111528259.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70)
操作命令如下：
```
git checkout master
git merge experiment
```
（b）git rebase 方式

git rebase 实现原理是首先找到两个分支的最近共同祖先 C1，提取 experiment 分支相对于该祖先的历次提交存为临时的差异补丁 patch 文件，存在 .git/rebase 目录下；然后在 master 分支最新提交 C2 的基础上，将保存的 patch 文件中的提交依次应用到 master 分支，并生成新的提交（commit id）。

最后回到 master 分支，进行一次快进合并，即将 experiment 分支合并到 master 分支。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190130113135881.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0szNDZLMzQ2,size_16,color_FFFFFF,t_70)
操作命令如下：
```
# 第一步，变基
git checkout experiment
git rebase master

# 或者
git rebase master experiment

# 第二步，合并
git checkout master
git merge experiment
```
（3）变基的风险

变基帮助我们拥有直线提交历史，也并非完美无缺，为避免出错，使用时需要遵守一条准则：**不要对已推送至远程仓库的提交进行变基操作**。

变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。 如果你已经将提交推送至远程仓库，而其他人也已经从该仓库拉取提交并进行了后续工作，此时，如果你用 git rebase 命令重新整理了提交并再次推送，相当于删除之前的提交。你的同伴再次 git pull 时，会将存放在本地的你已经删除的提交再次合并，如果你的同伴将合并后的提交推送到服务器上，实际上是将那些已经被你变基抛弃的提交又恢复了回来，这会令人感到混乱。

（4）变基 vs 合并

变基和合并都可以完成分支合并，到底哪种方式更好？在回答这个问题之前，让我们退后一步，讨论一下提交历史的意义。

有一种观点认为，仓库的提交历史记录实际发生过什么。 它是针对历史的文档，本身就有价值，不能乱改。 从这个角度看来，改变提交历史是一种亵渎，你使用谎言掩盖了实际发生过的事情。 如果由合并产生的提交历史是一团糟怎么办？ 既然事实就是如此，那么这些痕迹就应该被保留下来，让后人能够查阅。

另一种观点则正好相反，他们认为提交历史是 项目过程中发生的事。 没人会出版一本书的第一版草稿，软件维护手册也是需要反复修订才能方便使用。 持这一观点的人会使用 rebase 及 filter-branch 等工具来编写故事，怎么方便后来的读者就怎么写。

现在，让我们回到之前的问题上来，到底合并还是变基好？这并没有一个正确的答案。 Git 是一个非常强大的工具，它允许你对提交历史做许多事情，但每个团队、每个项目对此的需求并不相同，按实际需要来选择即可。

个人建议，git merge 足以完成分支合并，易于理解，基于惰性与简明原则，没有必要使用变基。

（5）常用命令选项

git rebase 的基本命令格式如下：
```
git rebase [-i] [options] [--exec <cmd>] [--onto <newbase>] [<upstream>] [<branch>]
git rebase [-i] [options] [--exec <cmd>] [--onto <newbase>] --root [<branch>]
git rebase --continue | --abort | --skip | --edit-todo
```
（a）git rebase --onto
截取特性分支上的另一个特性分支，然后变基到其他分支。比如，假设当前本地仓库提交历史如下：
```
A---B---E---F---G  master
    \
     C---D---H---I---J  next
                      \
                       K---L---M  topic
```
此时topic分支的上游分支是next分支，如果要将topic分支上的提交（K，M，L）跳过next分支，直接放到master分支上，就需要加上--onto参数：
```
git rebase --onto master next topic
```
上述命令的意思是：取出topic分支，找出topic和next分支的共同祖先之后的提交，然后放在master分支上，执行后提交历史变为如下：
```
A---B---E---F---G  master
    \            \
     \            K'---L'---M'  topic 
      \     
       C---D---H---I---J  next
```
（b）git rebase –continue/abort/skip
这三个命令分别表示继续执行变基操作、终止变基、跳过某一文件继续进行。因为在rebase的过程中，有可能会出现文件冲突。这种情况下，首先要解决冲突，解决冲突后可以选择继续执行rebase或者结束rebase，一般的做法为：
```
git add filename
git rebase --continue
```
或者可以选择终止变基：
```
git rebase --abort
```
或者跳过该patch。
```
git rebase --skip
```
（c）git rebase -i, --interactive
该命令相比其他命令，使用频率要高得多。`git rebase -i <commitid>` 可以进行交互式变基，相比于 `git rebase <branch>` 用来变基，它经常用来操作当前分支的提交，git 会将 `<commitid>-HEAD` 之间的提交列在一个变基脚本中，每一笔提交根据用户设置的命令，会进行不同的操作，如修改提交信息、移除指定提交、合并两个提交为一个（压缩提交）、拆分提交等。

如要对最近 4 次提交进行重新操作，则：
```
git rebase -i HEAD~4
```
此时将会弹出如下形式的变基脚本：
```
1 pick af98479 [Description]:test4
2 pick 3cc9d66 test3
3 pick a7e819e usera commit03 branch2
4 pick efc5b15 usera commit04 branch2
5 
6 # Rebase de7b118..efc5b15 onto de7b118 (4 command(s))
7 #
8 # Commands:
9 # p, pick = use commit
10 # r, reword = use commit, but edit the commit message
11 # e, edit = use commit, but stop for amending
12 # s, squash = use commit, but meld into previous commit
13 # f, fixup = like "squash", but discard this commit's log message
14 # x, exec = run command (the rest of the line) using shell
15 # d, drop = remove commit
16 #
17 # These lines can be re-ordered; they are executed from top to bottom.
18 #
19 # If you remove a line here THAT COMMIT WILL BE LOST.
20 #
21 # However, if you remove everything, the rebase will be aborted.
22 #
23 # Note that empty commits are commented out
```
这里我们可以修改pick为下面给出的其他命令，比如如果要修改提交信息，就使用r或reword，各指令的含义如下：
```
p,pick：直接使用该次提交
r,reword：使用该次提交，但重新编辑提交信息
e,edit：停止到该次提交，通过`git commit --amend`追加提交，完毕之后不要忘记使用`git rebase --continue`完成这此rebase
s,squash：压缩提交，将和上一次提交合并为一个提交
x,exec：运行命令
d,drop：移除这次提交
```

### git cherry-pick
（1）简介
git cherry-pick 用于应用某些现有提交引入的更改。

比如 master 分支有如下提交记录，A -> B -> C，程序在运行过程中，提交 B 引入的特性存在一个隐藏很深的 bug，现在需要将 B 从分支踢出，但是需要保留提交 C。此时需要将分支回退（reset）  到 A，然后使用 cherry-pick 将 C 的更改应用到 A。这里要注意，cherry-pick 时 C 一定要存在，不然会出错，这就要求我们在回滚 master 分支前，基于 master 先创建一个新的分支来保留提交 C。

（2）用法
```
git cherry-pick <commit>…​
```

## 9.调试（Debugging）
### git blame
git blame 命令用于查看文件的每一行是谁修改的。
```shell
git blame [file]
git blame [-L n,m] [file]	//指定文件的行范围为n,m
```
### git version
git version 用于查看 git 版本。
```
git version
```

## 10.管理（Administration）
### git clean
git clean 命令用于删除工作目录所有 untracked 的文件或目录。基本用法如下：
```
git clean [-d] [-f] [-i] [-n] [-q] [-e <pattern>] [-x | -X] [--] <paths>...
    -q, --quiet           				不打印被删除的文件或目录名称
    -n, --dry-run        				查看删除之前会删除哪些东西，并不会有实际的影响
    -f, --force             			强制删除
    -i, --interactive     			交互式删除
    -d                         			删除目录
    -e, --exclude <pattern>   添加<pattern>到忽略规则中，用于忽略符合规则的文件或目录
    -x                    					同时可删除被忽略的文件或目录
    -X                   					只删除被忽略的文件
```
注意，未指定目录`<paths>`默认为当前目录。一般情况下，git reset --hard 会和 git clean -df 一起使用，让你的工作目录完全回退到最近一次 commit 的时候。

## 11.检查与比较（Inspection and Comparison）
### git log
（1）简介
git log 用于看历史提交日志，最近的排在最上方，显示提交对象的哈希值、作者、提交日期和提交说明。如果记录过多，则按 Page Up、Page Down、↓、↑ 键来控制显示，按 q 退出历史记录列表。

（2）命令格式
```
git log [<options>] [<revision range>] [[--] <path>…​]
```
（3）常用选项
```
-- <path>…​
	显示指定文件的提交日志
-, -n, --max-count=<number>
	显示最近 number 次的提交日志
--since, --after=<date>
	显示指定日期之后的提交日志
--until, --before=<date>
	显示指定日期之前的提交日志
--author, --committer=<pattern>
	显示指定提交者提交的日志
--merges
	只展示 merge 信息
--no-merges
	不展示 merge 信息
--abbrev-commit
	精简 commit id，只展示 40 个十六进制数字构成的 commit id 的首部
--graph
	以文本字符绘制的“图形”展示
--pretty[=<format>]
--format=<format>
	以指定格式展示，<format> 可取值 oneline, short, medium, full, fuller, email, raw, format:<string> 和 tformat:<string>，
	其中<string>为格式控制字符串。缺省值为 medium。常用的是 oneline
--oneline
	等价于 --pretty=oneline --abbrev-commit
```
（4）常用示例
（a）展示提交历史。
```
git log
```
（b）单行展示，显示简短 commitid（%h）、提交日期（%cd）、提交者的名字（%cn）和提交说明（%s）。
```
git log --pretty=format:"%h %cd %cn : %s"
955599561 Tue Mar 10 16:21:51 2020 +0800 tom : 性能优化
692028af8 Tue Mar 10 10:26:08 2020 +0800 bill : 修改 bug
11a8e2021 Tue Mar 10 10:26:08 2020 +0800 jerry : 首次提交
```
（c）以图形方式展示提交历史。
```
git log --graph
```
（d）以图形方式展示提交历史，提交信息以单行展示。
```
git log --graph --oneline

*   2fa056a8c Merge branch 'master' of http://git.code.oa.com/nfa/goserver_proj
|\
| * d336234bc (tag: Tag_20190312_V003) set gopath
| * b8c3bbd55 (tag: Tag_20190312_V002) fix command.go proto path
| * 2f6a13fc2 (tag: Tag_20190312_V001) fix proto path
| * 7a147abe2 fix proto path
| *   99e295279 (tag: Tag_20190311_B1000) Merge branch 'kbAbOp_eddie' into 'master'
| |\
| | * 809801eb9 add cityhash
| | * b588a5d40 接口改造
| * | f1c0ca554 fix
| |/
| * 92e4249a9 update conf&log
| *   bd8cf2755 Merge branch 'master' of http://git.code.oa.com/nfa/goserver_proj
| |\
| * | 886fd1ed3 change log
* | | 0d911b64d 提交新结构
| |/
|/|
* | 8c7eca23a ad
|/
* 769b68c61 KbADProxyServer first commit
* 8cea1f0b4 信息流商业化的所有go服务代码放此项目，方便公用代码
```
### git diff
- 简介

主要用于查看文件之间的区别：
（1）工作区（working tree）与暂存区（index）；
（2）工作区与版本库（repository）；
（3）暂存区与版本库；
（4）版本库与版本库的不同版本；
（5）不同分支；
（6）磁盘上两个文件之间；
（7）本地分支与远端分支。

- 示例
```
git diff [<filepath>]...
	工作区与暂存区比较
git diff <commitid> [<filepath>]...
	工作区与版本库比较
git diff <branch> [<filepath>]...
	工作区与分支比较
git diff (--staged | --cached) [<commit>] [<filepath>]...
	暂存区与版本库比较。commit 缺省为 HEAD，即最新提交
git diff [commit1] [commit2] [<filepath>]...
	版本库与版本库的不同版本比较
git diff <branch1> <branch2> [<filepath>]...
	不同分支最新提交比较
git diff --stat
	列出发生变更的文件列表以及有多少行产生了改动
git diff <file1> <file2>
	两个磁盘文件比较
git diff <remote>/<remote branch> <local branch>
	本地分支与远端分支
```
注意：比较的两个对象，第一对象是被比较的对象，给出的差异结果也是第二个对象相对于第一个对象的差异结果。

### git show
（1）简介
git show 用于显示各种类型的对象，包括 blobs、trees、tags 和 commits。

对于 commits，它显示日志消息和文本差异。
对于 tags，它显示标签消息和引用对象。
对于 trees，它显示 tree 的名称。
对于简单的 blobs，它显示了普通的内容。

（2）命令格式
```
git show [<options>] [<object>…​]
```
（3）常用选项
```
<object>…​
	待展示的对象，默认为 HEAD
--pretty[=<format>], --format=<format>
	以指定格式展示，<format> 可取值 oneline, short, medium, full, fuller, email, raw, format:<string> 和 tformat:<string>，
	其中<string>为格式控制字符串。缺省值为 medium。常用的是 oneline
--abbrev-commit
	精简 commit id，只展示 40 个十六进制数字构成的 commit id 的首部
--oneline
	等价于 --pretty=oneline --abbrev-commit
--name-only
	只显示发生变更的文件名
```
（4）常用示例
（a）查看某个 tag 指向的版本信息。
```
git show v1.0.0
```
（b）显示某个 tag 指向的版本的目录树。
```
git show v1.0.0^{tree}

.gitignore
.orange-ci.yml
PRJ_ROOT
README.md
bin/
pkg/
src/
```

（c）显示某次提交的详细信息，包括文件差异。
```
git show <commitid>
```

（d）只显示某次提交发生变化的文件名。
```
git show --name-only <commitid>
```
## 12.基本快照（Basic Snapshotting）
### git reset
- 简介

git reset 将当前 HEAD 重置为指定状态，即版本回退。

可将分支重设（reset）到指定的`<commit>`，如果不显示指定 commit，默认是 HEAD，即最近一次提交。

比如我们用 Git 时可能在 commit 后，发现这次 commit 的内容是有错误的，那么有两种处理方法：
（1）修改错误内容，再次 commit；
（2）使用 git reset 撤销这一次错误的 commit。

第一种方法比较直接，但会多一次 commit 记录，建议使用 git reset 进行版本回退，方便快捷，错误的 commit 记录不会被保留下来。

- 命令格式
```
git reset [-q] [<tree-ish>] [--] <paths>…​
git reset (--patch | -p) [<tree-ish>] [--] [<paths>…​]
git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]
```
- 选项说明
```
-q, --quiet
	静默模式，只打印错误信息
--soft
	重置 HEAD，保留暂存区和工作区。版本库的修改会回退到暂存区，工作区的修改保持不动
--mixed
	重置 HEAD 和暂存区，保留工作区。版本库与暂存区的修改都将回退到工作区，即回滚到了所有 git add 和 git commit 的执行之前的状态。为默认模式
--hard
	重置 HEAD、暂存区和工作区。暂存区和工作区的修改都将被丢弃。请谨慎使用，暂存区的修改很难找回，工作区的修改无法找回。
--merge
	重置 HEAD 和暂存区，保留工作区。与 --mixed 不同的是，暂存区的修改不会回退到工作。如果工作区的某个文件与暂存区不同，则命令执行失败。该选项很少使用
--keep
	重置 HEAD 与暂存区，保留工作区。与 --mixed 不同的是，暂存区的修改不会回退到工作。与 --merge 的区别是，如果工作区的某个文件与暂存区不同，则命令不会执行失败。该选项很少使用
-p, --patch
	以 patch 的方式展示出来需要 reset 的代码， git reset -p 和 git add -p 就是一对互为反向的操作，后者是把工作目录下变更的代码以 patch 的方式展示出来，以互动的方式应用到 index 上，前者则是一个反向操作
-N, --intent-to-add
	任何新加入到 HEAD 的文件，再回退到工作区后都将标记为 tracked，即受版本控制
```
（4）常用示例
- 放弃当前版本的所有修改。
```
git reset --hard
git reset --hard HEAD
```
- 分支版本跳转。
```
git reset --hard [commit]
commit 可取值 HEAD 当前版本，上一个版本 HEAD^（或 HEAD~1），上上一个版本就是 HEAD^^（或 HEAD~2），以此类推。缺省为 HEAD
```
- 将暂存区的修改回退到工作区。
```
git reset <file>...
git reset HEAD <file>...
git reset --mixed <file>...
git reset --mixed HEAD <file>...
```

### git revert
（1）简介
git revert 用一个新的提交来消除历史提交所做的修改，历史 commit 记录都会保留，并且这次撤销
操作会产生一次新的提交。

与 git reset 的区别主要有：
（a）实现的方式不用。git revert 使用一次新的提交来回退到指定版本，不会改变历史的提交历史。git reset 移动 HEAD 指针指向历史某次提交，历史提交记录将被改变。因此，git revert 一般用在公共分支上，git reset 一般用在私有分支上。
（b）使用的场景不同。git revert 一般只用于版本回退，撤销已经提交的更改，并且要求暂存区与工作区是干净的。git reset 一般用于撤销未提交的修改，比如使用`git reset --hard`放弃暂存区与工作区的修改。

（2）格式
```
git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]] <commit>…​
git revert (--continue | --skip | --abort | --quit)
```
（3）选项
```
-e
--edit
	版本回退在提交之前编辑提交消息。如果从终端运行命令，则这是默认设置。
--no-edit
	git revert 将不会启动提交消息编辑器
```
（4）示例

（a）回退到上一版本。
```
git revert HEAD^
```
### git restore
（1）简介
git restore 是从 git 2.23 版本开始引入，是一个比较新的命令，用于恢复暂存区或者工作区中的文件。恢复工作区中的文件，也可以使用`git checkout -- <file>`。可见，git restore 实现了 git checkout 命令的文件恢复功能，git restore 命令的语义更加贴合其作用，更容易理解，建议使用。

（2）格式
```
 git restore [<options>] [--source=<branch>] <file>...
```
（3）选项
```
-W
--worktree
	恢复工作区指定文件，为缺省选项
-S
--staged
	将暂存区指定文件回退到工作区
-s
--source
	指明文件所在的分支，缺省为当前分支
```
（4）示例
（a）将暂存区的文件回退到工作区。
```
git restore -S <file>...
```
（b）恢复工作区中的文件。
```
git restore <file>...
```
## 13.管理（Administration）
### git reflog
（1）简介
git reflog 用于管理存储在引用日志 reflog 中的记录的信息。用于查看分支版本所有的变更记录，包括因版本回退出现在 HEAD 之后的变更记录。git log 只能查看 HEAD 之前的版本记录，不能查看 HEAD 之后的版本记录。

reflog 可以很好地帮助我们恢复误操作的数据，比如我们错误地 reset 到了一个旧的提交，这个时候我们可以使用 reflog 去查看在误操作之前的信息，并且使用 git reset 恢复到之前的状态。

（2）格式
该命令采用各种子命令，并根据子命令使用不同的选项：
```
git reflog [show] [log-options] [<ref>]
git reflog expire [--expire=<time>] [--expire-unreachable=<time>]
	[--rewrite] [--updateref] [--stale-fix]
	[--dry-run | -n] [--verbose] [--all [--single-worktree] | <refs>…​]
git reflog delete [--rewrite] [--updateref]
	[--dry-run | -n] [--verbose] ref@{specifier}…​
git reflog exists <ref>
```
show 子命令是缺省命令，用于显示命令行中提供的引用的日志，引用默认为 HEAD。

expire 子命令用于修剪旧的 reflog 条目。超过 expire 时间的条目，或者早于 expire-unreachable 时间且当前提示无法访问的条目将从 reflog 中删除。一般情况下不会使用该命令。

delete 子命令从 reflog 中删除单个条目。其参数必须是精确条目，例如`git reflog delete master@{2}`。一般情况下不会使用该命令。

exists 子命令检查 ref 是否具有 reflog。如果 reflog 存在则退出为零状态，如果不存在则退出为非零状态。

（3）选项
```
--all
	处理所有引用的 reflog
--single-worktree
	仅处理当前工作树的 reflog
-n, --dry-run
	不要删除任何条目，只展示会被修剪的东西
--verbose
	打印额外信息
```
（4）示例

（a）查看当前分支所有的变更记录。
```
git reflog
```

## 14.别名设置
为了简化输入，提高效率，推荐使用如下 Git 命令的简短别名。将下面的内容粘帖至文件`~/.bashrc`，然后执行命令`. ~/.bashrc`或`source ~/.bashrc`。
```
alias gcl='git clone'
alias gs='git status'
alias ga='git add'
alias gcm='git commit -m'
alias gcam='git commit -am'
alias gb='git branch -vv'
alias gc='git checkout'
alias gph='git push'
alias gpl='git pull'
```

---
## 参考文献
[git reference](https://git-scm.com/docs)

[Git 中文参考 ](https://www.bookstack.cn/read/git-doc-zh/README.md)

[10分钟学会Git教程 - 安装Git、建仓库、添加和推送文件至库](http://www.itbulu.com/10-minutes-git.html)

[Git常用命令大全](http://blog.csdn.net/dengsilinming/article/details/8000622)

[Git push 报错 "error: failed to push some refs to " 解决](http://blog.sina.com.cn/s/blog_5f2ca1ed010167hs.html)

[git命令行删除远程分支](https://blog.csdn.net/furzoom/article/details/53002699)

[git stash命令总结](https://blog.csdn.net/c_z_w/article/details/52862129)

[代码回滚：git reset、git checkout和git revert区别和联系](https://www.cnblogs.com/houpeiyong/p/5890748.html)

[git reset soft,hard,mixed之区别深解](https://www.cnblogs.com/kidsitcn/p/4513297.html)

[1.6 起步 - 初次运行 Git 前的配置](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE)

[简单对比git pull和git pull --rebase的使用](https://www.cnblogs.com/kevingrace/p/5896706.html)

[git clean.git reference](https://git-scm.com/docs/git-clean)

[Pro Git Online.C3.6 变基](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)

[Git整理(四) git rebase 的使用](https://blog.csdn.net/fightfightfight/article/details/80850328)

[这一次彻底搞懂 Git Rebase](https://www.codercto.com/a/45325.html)

[git rebase：永远不要衍合那些已经推送到公共仓库的更新](https://blog.csdn.net/trochiluses/article/details/14451777)