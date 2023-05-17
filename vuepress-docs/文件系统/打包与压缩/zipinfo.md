## 1.命令简介
zipinfo（zip information）列出有关 ZIP 存档的详细信息。

## 2.命令格式
```shell
zipinfo [-12CsmlvhMtTz] <file>[<.zip>] [<file(s)> ...] [-x <xfile(s)> ...]
```
## 3.选项说明
```shell
-1
	只列出文件名称。
-2
	此参数的效果和指定“-1”参数类似，但可搭配“-h”，“-t”和“-z”参数使用。
-h
	列出首行信息，打印存档名称、实际大小（字节）和文件总数。
-l
	此参数的效果和指定“-m”参数类似，但会列出原始文件的大小而非每个文件的压缩率。
-m
	此参数的效果和指定“-s”参数类似，但多会列出每个文件的压缩率。
-M
	若信息内容超过一个画面，则采用类似more指令的方式列出信息。
-s
	用类似执行“ls-l”指令的效果列出压缩文件内容。
-t
	只列出压缩文件内所包含的文件数目，压缩前后的文件大小及压缩率。
-T
	将压缩文件内每个文件的日期时间用年，月，日，时，分，秒的顺序列出。
-v
	详细显示压缩文件内每一个文件的信息。
-x xfile(s)
	不列出符合条件的文件信息。
-z
	如果压缩文件内含有注释，就将注释显示出来。
```
## 4.常用示例
我们先对 /etc/passwd 使用 zip 进行压缩。
```shell
zip passwd.zip /etc/passwd
  adding: etc/passwd (deflated 58%)
```

（1）显示 zip 文件信息。
```shell
zipinfo passwd.zip
Archive:  passwd.zip
Zip file size: 724 bytes, number of entries: 1
-rw-r--r--  3.0 unx     1333 tx defN 22-Oct-16 23:38 etc/passwd
1 file, 1333 bytes uncompressed, 554 bytes compressed:  58.4%
```

（2）只显示压缩包名称、大小和文件数目。
```shell
zipinfo -h passwd.zip
Archive:  passwd.zip
Zip file size: 724 bytes, number of entries: 1
```

（3）详细显示压缩文件内每一个文件的信息。
```shell
zipinfo -v passwd.zip
Archive:  passwd.zip
There is no zipfile comment.

End-of-central-directory record:
-------------------------------

  Zip archive file size:                       724 (00000000000002D4h)
  Actual end-cent-dir record offset:           702 (00000000000002BEh)
  Expected end-cent-dir record offset:         702 (00000000000002BEh)
  (based on the length of the central directory and its expected offset)

  This zipfile constitutes the sole disk of a single-part archive; its
  central directory contains 1 entry.
  The central directory is 80 (0000000000000050h) bytes long,
  and its (expected) offset in bytes from the beginning of the zipfile
  is 622 (000000000000026Eh).


Central directory entry #1:
---------------------------

  etc/passwd

  offset of local header from start of archive:   0
                                                  (0000000000000000h) bytes
  file system or operating system of origin:      Unix
  version of encoding software:                   3.0
  minimum file system compatibility required:     MS-DOS, OS/2 or NT FAT
  minimum software version required to extract:   2.0
  compression method:                             deflated
  compression sub-type (deflation):               normal
  file security status:                           not encrypted
  extended local header:                          no
  file last modified on (DOS date/time):          2022 Oct 16 23:38:58
  file last modified on (UT extra field modtime): 2022 Oct 16 23:38:57 local
  file last modified on (UT extra field modtime): 2022 Oct 16 15:38:57 UTC
  32-bit CRC value (hex):                         8df494ab
  compressed size:                                554 bytes
  uncompressed size:                              1333 bytes
  length of filename:                             10 characters
  length of extra field:                          24 bytes
  length of file comment:                         0 characters
  disk number on which file begins:               disk 1
  apparent file type:                             text
  Unix file attributes (100644 octal):            -rw-r--r--
  MS-DOS file attributes (00 hex):                none

  The central-directory extra field contains:
  - A subfield with ID 0x5455 (universal time) and 5 data bytes.
    The local extra field has UTC/GMT modification/access times.
  - A subfield with ID 0x7875 (Unix UID/GID (any size)) and 11 data bytes:
    01 04 00 00 00 00 04 00 00 00 00.

  There is no file comment.
```

---
## 参考文献
[zipinfo(1) manual - linux.org](https://www.linux.org/docs/man1/zipinfo.html)
