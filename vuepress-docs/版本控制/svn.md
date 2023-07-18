## 1.命令简介
SVN 是 Apache Subversion 的缩写 ，是一个开源的版本控制系统。

相较于 RCS、CVS，它采用了分支管理系统，它的设计目标是取代 CVS。互联网上很多版本控制服务已从 CVS 转移到 Subversion。Subversion 在 2000 年由 CollabNet 开发，后成为 Apache 软件基金会的一个项目。

svn 是 Apache Subversion 的客户端，完成与 Apache Subversion 服务端的交互，实现版本控制。

由于 Git 高效的性能、便捷的分支管理、强大的社区支持，SVN 已逐渐被 Git 取代。

## 2.命令格式
```
svn [subcommand] [options] [args]
```

## 3.选项说明
可用的子命令：
```
	add
	blame (praise, annotate, ann)
	cat
    changelist (cl)
    checkout (co)
    cleanup
    commit (ci)
    copy (cp)
    delete (del, remove, rm)
    diff (di)
    export
    help (?, h)
    import
    info
    list (ls)
    lock
    log
    merge
    mergeinfo
    mkdir
    move (mv, rename, ren)
    patch
    propdel (pdel, pd)
    propedit (pedit, pe)
    propget (pget, pg)
    proplist (plist, pl)
    propset (pset, ps)
    relocate
    resolve
    resolved
    revert
    status (stat, st)
    switch (sw)
    unlock
    update (up)
    upgrade
```

## 4.常用示例
（1）svn commit 撤销。
step 1 找出要回滚的版本号。
```
svn log --limit 3 FILENAME
```
`--limit 3`的意思是显示最新的三个版本。假如根据 svn log 日志查出指定文件要回滚的版本号是 2589。

step 2 回滚本地到版本号 2589。
```
svn merge -r 5730:2589 FILENAME
```

step 3 为了保险起见，确认回滚的结果。
```
svn diff FILENAME
```

step 4 本地与版本库中没有差异的话，指定文件的当前版本是 2589。提交回滚后的文件。
```
svn commit -m "Revert revision from r5730 to r2589,because of ..."
```

----
## 参考文献
[Subversion - wikipedia](https://zh.wikipedia.org/wiki/Subversion)

[svn 命令行使用总结](https://www.cnblogs.com/136asdxxl/p/7410947.html)

<Vssue title="svn" />