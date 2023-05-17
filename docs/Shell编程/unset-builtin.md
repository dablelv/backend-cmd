## 1.命令简介
unset 删除指定的 Shell 变量或函数。

注意，unset 不能删除具有只读属性的 Shell 变量和环境变量。

## 2.命令格式
```shell
unset [-fv] [name ...]
```
当不指定选项时，优先删除变量，如果失败则删除函数。

## 3.选项说明
```shell
-f 将每个 name 当作函数。
-v 将每个 name 当作变量。
```

## 4.返回值
成功返回 0。

如果 name 为只读，则退出状态码为 1。

如果选项错误则退出状态码为 2。

## 5.常用示例
（1）删除变量。

```shell
hello="world"
echo $hello
world

unset hello
echo $hello

```

（2）删除函数。

下面是一个多行函数的例子，显示当前日期时间。

```shell
function now(){
  echo -n "Now date time is: "
  date +"%F %T"
}
```
调用函数，打印当前日期与时间。

```shell
now
Now date time is: 2023-01-26 20:41:40
```
使用 unset 命令可以删除一个函数。

```shell
unset -f now
```
再次调用时，now 已找不定定义。

```shell
now
bash: now: command not found
```

（3）删除只读变量时将报错。

先定义一个只读变量 name。

```shell
declare -r name="foo"
$echo $name
foo
```
使用 unset 删除只读变量将报错并返回 1。

```shell
unset name || echo $?
bash: unset: name: cannot unset: readonly variable
1
```

---
## 参考文献
[bash(1) - Linux manual page - man7.org](http://man7.org/linux/man-pages/man1/bash.1.html)
