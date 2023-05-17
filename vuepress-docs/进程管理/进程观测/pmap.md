## 1.命令简介
pmap（process memory map）命令用于查看进程的内存映射，即进程的内存地址空间。

pmap 从文件 `/proc/<pid>/maps` 中获得相关数据，用来观察系统中的指定进程的地址空间分布和内存状态信息，包括进程各个段的大小。对查看完整的进程地址空间很有帮助。

## 2.命令格式
```
 pmap [options] pid [...]
```
## 3.选项说明
```
-x, --extended
	显示扩展格式。
-d, --device
	显示设备格式。
-q, --quiet
	不显示某些页眉或页脚行。
-A, --range <low>,<high>
	将结果限制在给定范围内的低地址和高地址。
-X
	显示比 -x 选项更多的细节。 警告：根据 /proc/PID/smaps 改变格式。
-XX
	显示内核提供的所有内容。
-p, --show-path
	在映射列中显示文件的完整路径。
-c, --read-rc
	读取默认配置。
-C, --read-rc-from <file>
	从指定文件读取配置。
-n, --create-rc
	创建新的默认配置。
-N, --create-rc-to file
	创建新配置到指定文件。
-h, --help
	现实帮助信息并退出。
-V, --version
	显示版本信息并退出。
```
关于扩展格式和设备格式域的说明如下：
```
Address:  start address of map  映射起始地址。
Kbytes:  size of map in kilobytes  映射大小（KB）。
RSS:  resident set size in kilobytes  驻留集大小。
Dirty:  dirty pages (both shared and private) in kilobytes  脏页大小。
Mode:  permissions on map 映像权限: r=read, w=write, x=execute, s=shared, p=private (copy on write)。
Mapping:  file backing the map , or '[ anon ]' for allocated memory, or '[ stack ]' for the program stack. 占用内存的文件，[anon] 为已分配内存，[stack] 为程序栈。
Offset:  offset into the file 文件偏移。
Device:  device name (major:minor)  设备名。
```
## 4.常用示例
（1）查看进程 1 的设备格式。
```shell
# pmap -d 1
1:  init [5]
Address   Kbytes	Mode 	Offset      		Device  	Mapping
00934000   88		r-x-- 	0000000000000000 	008:00005 	ld-2.3.4.so
0094a000    4 		r---- 	0000000000015000 	008:00005 	ld-2.3.4.so
0094b000    4 		rw--- 	0000000000016000 	008:00005 	ld-2.3.4.so
0094e000  1188 		r-x-- 	0000000000000000 	008:00005 	libc-2.3.4.so
00a77000    8 		r---- 	0000000000129000 	008:00005	libc-2.3.4.so
00a79000    8 		rw--- 	000000000012b000 	008:00005	libc-2.3.4.so
00a7b000    8		rw---	0000000000a7b000 	000:00000  	[ anon ]
00a85000   52		r-x-- 	0000000000000000	008:00005	libsepol.so.1
00a92000    4		rw--- 	000000000000c000	008:00005	libsepol.so.1
00a93000   32		rw--- 	0000000000a93000	000:00000 	[ anon ]
00d9d000   52 		r-x--	0000000000000000	008:00005	libselinux.so.1
00daa000    4 		rw---	000000000000d000	008:00005	libselinux.so.1
08048000   28		r-x--	0000000000000000	008:00005	init
0804f000    4		rw---	0000000000007000	008:00005	init
084e1000   132		rw---	00000000084e1000	000:00000	[ anon ]
b7f5d000    8 		rw---	00000000b7f5d000	000:00000	[ anon ]
bffee000   72		rw---	00000000bffee000	000:00000 	[ stack ]
ffffe000    4		-----	0000000000000000	000:00000 	[ anon ]
mapped: 1700K  writeable/private: 276K  shared: 0K
```
最后一行的值：
- mapped 表示该进程映射的虚拟地址空间大小，也就是该进程预先分配的虚拟内存大小，即 ps 出的 vsz。
- writeable/private 表示进程所占用的私有地址空间大小，也就是该进程实际使用的内存大小。
- shared 表示进程和其他进程共享的内存大小。

（2）查看进程 1 的设备格式，不显示头尾行。
```shell
# pmap -d -q 1
1:  init [5]
00934000   88		r-x-- 	0000000000000000 	008:00005 	ld-2.3.4.so
0094a000    4 		r---- 	0000000000015000 	008:00005 	ld-2.3.4.so
0094b000    4 		rw--- 	0000000000016000 	008:00005 	ld-2.3.4.so
0094e000  1188 		r-x-- 	0000000000000000 	008:00005 	libc-2.3.4.so
00a77000    8 		r---- 	0000000000129000 	008:00005	libc-2.3.4.so
00a79000    8 		rw--- 	000000000012b000 	008:00005	libc-2.3.4.so
00a7b000    8		rw---	0000000000a7b000 	000:00000  	[ anon ]
00a85000   52		r-x-- 	0000000000000000	008:00005	libsepol.so.1
00a92000    4		rw--- 	000000000000c000	008:00005	libsepol.so.1
00a93000   32		rw--- 	0000000000a93000	000:00000 	[ anon ]
00d9d000   52 		r-x--	0000000000000000	008:00005	libselinux.so.1
00daa000    4 		rw---	000000000000d000	008:00005	libselinux.so.1
08048000   28		r-x--	0000000000000000	008:00005	init
0804f000    4		rw---	0000000000007000	008:00005	init
084e1000   132		rw---	00000000084e1000	000:00000	[ anon ]
b7f5d000    8 		rw---	00000000b7f5d000	000:00000	[ anon ]
bffee000   72		rw---	00000000bffee000	000:00000 	[ stack ]
ffffe000    4		-----	0000000000000000	000:00000 	[ anon ]
```
（3） 查看进程 1 的扩展格式。
```shell
# pmap -x 1
1:  init [5]          
Address  Kbytes		RSS  Anon Locked	Mode  Mapping
00934000   88    	-    -    -			r-x-- ld-2.3.4.so
0094a000    4		-    -    - 		r---- ld-2.3.4.so
0094b000    4		-    -    -			rw--- ld-2.3.4.so
0094e000  1188		-    -    -			r-x-- libc-2.3.4.so
00a77000    8    -    -    -			r---- libc-2.3.4.so
00a79000    8    -    -    -			rw--- libc-2.3.4.so
00a7b000    8    -    -    -			rw--- [ anon ]
00a85000   52    -    -    -			r-x-- libsepol.so.1
00a92000    4    -    -    -			rw--- libsepol.so.1
00a93000   32    -    -    -			rw--- [ anon ]
00d9d000   52    -    -    -			r-x-- libselinux.so.1
00daa000    4    -    -    -			rw--- libselinux.so.1
08048000   28    -    -    -			r-x-- init
0804f000    4    -    -    -			rw--- init
084e1000   132    -    -    -			rw--- [ anon ]
b7f5d000    8    -    -    -			rw--- [ anon ]
bffee000   72    -    -    -			rw--- [ stack ]
ffffe000    4    -    -    -			----- [ anon ]
-------- ------- ------- ------- -------
total kB  1700    -    -    -
```
（4）循环显示进程 3066 的设备格式的最后 1 行，间隔 3 秒。
```shell
# while true; do pmap -d 3066 | tail -1; sleep 2; done
mapped: 5412K  writeable/private: 2028K  shared: 0K
mapped: 5412K  writeable/private: 2028K  shared: 0K
mapped: 5412K  writeable/private: 2028K  shared: 0K
...
```

---
## 参考文献
[pmap(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/pmap.1.html)
