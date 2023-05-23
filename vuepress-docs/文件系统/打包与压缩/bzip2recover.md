## 1.命令简介
bzip2recover 从损坏的 bzip2 文件中恢复数据。

bzip2 是以区块的方式来压缩文件，每个区块视为独立的单位。因此，当某一区块损坏时，便可利用bzip2recover，试着将文件中的区块隔开来，以便解压缩正常的区块。通常只适用在压缩文件很大的情况。
## 2.命令格式
```shell
bzip2recover <filename>
```
## 3.选项说明
无。
## 4.常用示例
修复 .bz2 文件。
```shell
bzip2recover passwd.bz2
bzip2recover 1.0.6: extracts blocks from damaged .bz2 files.
bzip2recover: searching for block boundaries ...
   block 1 runs from 80 to 4798
bzip2recover: splitting into blocks
   writing block 1 to `rec00001passwd.bz2' ...
bzip2recover: finished
```

---
## 参考文献
[bzip2recover(1) manual - linux.org](https://www.linux.org/docs/man1/bzip2recover.html)

<Vssue title="bzip2recover" />