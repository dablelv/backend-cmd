## 1.命令简介
indent 通过插入或删除空格来改变 C 代码文件的外观。

indent 可以格式化 C 代码文件，以方便程序员阅读、修改等操作。

## 2.命令格式

```shell
indent [options] [input-files]
indent [options] [single-input-file] [-o output-file]
indent --version
```

## 3.选项说明

```shell
-bad, --blank-lines-after-declarations
	在声明后加上空白行。
-bap, --blank-lines-after-procedures
	强制在过程体后加空行。
-bbb, --blank-lines-before-block-comments
	强制在注释块之前插入空行。
-bbo, --break-before-boolean-operator
	更喜欢在布尔运算符之前将长行分开。
-bc, --blank-lines-after-commas
	在声明段中，如果出现逗号就换行。
-bl, --braces-after-if-line
	在 if（或 else、for 等）后面加大括号。
-blf, --braces-after-func-def-line
	在函数定义行后面加大括号。
-bli, --brace-indent N
	缩进大括号 N 个空格。
-bls, --braces-after-struct-decl-line
	在结构声明行后面加大括号。
-br, --braces-on-if-line
	在 if（或 else、for 等）后面加上大括号。
-brf, --braces-on-func-def-line
	在函数定义行上加大括号。
-brs, --braces-on-struct-decl-line
	在 struct 声明行上加大括号。
-bs, --Bill-Shannon, --blank-before-sizeof
	在 sizeof 和它的参数之间加一个空格。
-c, --comment-indentation N
	将注释置于程序右侧指定的栏位。
-cbi, --case-brace-indentation N
	在 case 标签后缩进大括号 N 个空格。
-cd, --declaration-comment-column N
	将注释置于声明右侧指定的栏位。
-cdb, --comment-delimiters-on-blank-lines
	注释符号自成一行。
-cdw, --cuddle-do-while
	do {} while 语句中将 while 仅靠前面的 }。
-ce, --cuddle-else
	将 else 仅靠前面的 }。
-ci, --continuation-indentation N
	叙述过长而换行时，指定换行后缩排的空格数。
-cli, --case-indentation N
	使用 case 时，switch 缩排的空格数。
-cp, --else-endif-column N
	将注释置于 else 与 elseif 叙述右侧指定的栏位。
-cs, --space-after-cast
	在转换运算符之后空一格。
-d, --line-comments-indentation N
	针对不是放在代码右侧的注释，设置其缩排空格数。
-bfda, --break-function-decl-args
	在声明中所有参数之前换行。
-bfde, --break-function-decl-args-end
	在声明的最后一个参数之后换行。
-dj, --left-justify-declarations N
	如果使用 -cd 0 则声明后的注释在声明后面对齐。
-di, --declaration-indentation N
	将声明区段的变量置于指定的栏位。
-fc1, --format-first-column-comments
	针对放在每行最前端的注释，设置其格式。
-fca, --format-all-comments
	设置所有注释的格式。
-gnu, --gnu-style
	使用指定的 GNU 格式，该参数为默认值。
-hnl, --honour-newlines
	更喜欢在输入中换行的位置打断长行。
-i, --indent-level N
	将缩进级别设置为 N 个空格。
-il, --indent-label N
	将标签的偏移量设置为第 N 列
-ip, --parameter-indentation N 
	旧式函数定义中的参数类型缩进 N 个空格。
-kr, --k-and-r-style
	指定使用 Kernighan & Ritchie 的格式。
-l, --line-length N
	将非注释行的最大长度设置为 N。
-lc, --comment-line-length N
	设置注释格式的最大行长为 N。
-linux, --linux-style
	使用 Linux 编码风格。
-lp, --continue-at-parentheses
	叙述过长而换行，且叙述中包含了括号时，将括号中的每行起始栏位内容垂直对齐排列。
-lps, --leave-preprocessor-space
	在“#”和预处理器指令之间留出空格。
-nlps, --remove-preprocessor-space
	删除“#”和预处理器指令之间的空格。
-nbad, --no-blank-lines-after-declarations
	在声明区段后不要加上空白行。
-nbap, --no-blank-lines-after-procedures
	不要在过程体之后强制空行。
-nbbo, --break-after-boolean-operator
	不喜欢在布尔运算符之前打断长行。
-nbbb, --no-blank-lines-before-block-comments
	在块注释前不要有空行。
-nbc, --no-blank-lines-after-commas
	不要在声明中的逗号后强制换行。
-nbfda, --dont-break-function-decl-args
	不要将每个参数放在单独一行的函数声明中。
-ncdb, --no-comment-delimiters-on-blank-lines
	注释符号不自成一行。
-ncdw, --dont-cuddle-do-while
	do {} while; 中不讲 } 与 while 仅靠在一起。
-nce, --dont-cuddle-else
	不将 else 置于 } 后面。
-ncs, --no-space-after-casts
	不要在转换运算符后放置空格。
-ndjn, --dont-left-justify-declarations
	声明后的注释与其他语句后的注释被视为相同。
-nfc1, --dont-format-first-column-comments
	不要像往常一样格式化第一列中的注释
-nfca, --dont-format-comments
	不用格式化任何注释。
-nhnl, --ignore-newlines
	不喜欢在输入中换行的位置打断长行。
-nip, --no-parameter-indentation
	参数不要缩进。
-nlp, --dont-line-up-parentheses
	叙述过长而换行，且叙述中包含了括号时，不用将括号中的每行起始栏位垂直对其排列。
-npcs, --no-space-after-function-call-names
	在调用函数名之后，不要添加空格。
-nprs, --no-space-after-parentheses
	不要在“(”之后和“)”之前放置一个空格。
-npro, --ignore-profile
	不要读取 indent 的配置文件“.indent.pro”。
-npsl, --dont-break-procedure-type
	程序类型与程序名称放在同一行。
-nsaf, --no-space-after-for
	不要在 for 后加空格。
-nsai, --no-space-after-if
	不要 if 后加空格。
-nsaw, --no-space-after-while
	不要在 while 后加空格
-nsc, --dont-star-comments
	注释左侧不要添加星号。
-nsob, --leave-optional-blank-lines
	不用处理多余的空白行。
-nss, --dont-space-special-semicolon
	若 for 或 while 区段仅有一行时，在分号前不加空格。
-nut, --no-tabs
	使用空格 space 而不是制表符 tab。
-nv, --no-verbosity
	不显示详细的信息。
-orig, --original
	使用原始的 Berkeley 编码风格。
-pcs, --space-after-procedure-calls
	在调用函数名与“(”之间添加空格。
-pi, --paren-indentation N
	当语句被打破时，指定每个开括号'('的额外缩进。
-pmt, --preserve-mtime
	保留对输出文件的访问和修改时间。
-ppi, --preprocessor-indentatio N
	指定预处理器条件语句的缩进。
-prs, --space-after-parentheses
	在每个“(”后面和“)”前面都加一个空格。
-psl, --procnames-start-lines
	将过程的类型放在它的名称之前。
-saf, --space-after-for
	for 之后加一个空格。
-sai, --space-after-if
	if 之后加一个空格。
-saw, --space-after-while
	while 之后加一个空格。
-sbi, --struct-brace-indentation N
	结构、联合或枚举的大括号缩进 N 个空格。
-sc, --start-left-side-of-comments
	在每行注释左侧添加星号。
-sob, --swallow-optional-blank-lines
	删除多余的空行。
-ss, --space-special-semicolon
	若 for 或 wile 区段仅有一行时，在分号前加上空格。
-st, --standard-output
	将结果显示在标准输出设备上。
-T
	数据类型名称缩进。
-ts, --tab-size N
	设置 Tab 的长度为 N 个空格。
-ut, --use-tabs
	使用 tabs，这是缺省行为。
-v, --verbose
	显示详细的执行过程。
--version
	显示版本信息。
```

## 4.常用示例

假设我们有如下未格式化的 C 代码 main.c。

```c
#include <stdio.h>

// Prints Hello.
int
foo ()
{
puts("Hello");
}
// Prints World.
char *
bar ()
{
puts("World");
}

int main(void){
foo();
bar();
}
```

（1）采用预设的 GNU 风格进行格式化。

```shell
indent -gnu main.c -o main.gnu.c
```

格式化后的结果为

```c
#include <stdio.h>

// Prints Hello.
int 
foo () 
{

puts ("Hello");
}

// Prints World.
char *
bar () 
{

puts ("World");
} 

int

main (void)
{
  
foo ();
  
bar ();
}
```

（2）采用预设的 Kernighan & Ritchie 风格格式化。

```shell
indent -kr main.c -o main.kr.c
```

格式化后的结果为

```c
#include <stdio.h>

// Prints Hello.
int 
 foo() 
{
    
puts("Hello");
} 

// Prints World.
char *
 bar() 
{
    
puts("World");
} 
 
int main(void)
{
    
foo();
    
bar();
} 
```

（3）采用预设的 Berkeley 风格格式化。

```shell
indent -orig main.c -o main.orig.c
```

格式化后的结果为

```c
#include <stdio.h>

    // Prints Hello.
int            
foo() 
{
    
puts("Hello");
} 
    // Prints World.
char           *
bar() 
{
    
puts("World");
} 
 
int
main(void)
{
    
foo();
    
bar();
}
```

（4）所有的 sizeof 后面添加一个空格且删除多余的空行。

```shell
indent -bs -sob <input-file> -o <output-file>
```

（5）查看版本。

```shell
indent --version
GNU indent 2.2.11
```

---
## 参考文献
[indent(1) - Linux manual page - man7.org](https://man7.org/linux/man-pages/man1/indent.1.html)

<Vssue title="indent" />