# grep

grep 一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。  
`match_patten` 是匹配的内容, 可以是正则表达式, 也可以是正常文本; 如果中间有分割字符, 需要使用引号括起来  

## 基本

指定文件搜索:  

	grep <match_patten> <file1> <file2> ...

在文件名前缀为 test 的文件中查找 "hello" 字符串:  

	grep hello ./test*

## 搜索控制

搜索忽略大小写:

	grep -i <match_patten> <filename>

搜索多个匹配内容: 

	# Linux: 只要任意一个匹配就显示, 每个匹配模式都在整行查找
	# Mac: 顺序匹配, 即优先匹配 hello, 如果找到 hello, 继续从 hello 之后内容查找 world
	grep -e hello -e world <filename>

显示匹配内容的上下文:  

	# 显示匹配内容前后 2 行内容
	grep -C 2 <match_patten> <filename>

## 递归搜索

递归搜索指定目录(`-r`或`-R`):  

	grep  -r <match_patten> <dir>

递归搜索指定目录下匹配的文件:  

	# 递归搜索当前目录下所有文件名后缀为 `.md` 的文件中的 "hello world"
	grep -r "hello world" ./**/*.md

## 忽略目录

> 忽略目录是针对目录名,非绝对路径名
> `exclude-dir=parrern`  

忽略匹配目录:  

	# 递归搜索时忽略任意路径下的 .git 目录
	grep -r <match_patten> ./* --exclude-dir=.git

忽略多个匹配目录:  

	# 递归搜索时忽略任意路径下的 .git, node_modules 目录
	$ grep <match_patten> ./* --exclude-dir=.git --exclude-dir=node_modules
	# 或
	$ grep <match_patten> ./* --exclude-dir={.git,node_modules}

## 反向搜索

> 反向搜索就是搜索不匹配 `<match_pattern>` 的行  

搜索文件中不包含 "ls" 的行:  

	grep -v "ls" <filename>

## 输出控制

显示行号:  

	grep -n hello <filename>

统计匹配的行数:  

	grep -c <match_patten> <filename>

仅打印匹配的内容:  

	grep -o <match_patten> <filename>

仅打印包含匹配内容的文件路径:  

	grep -l <match_patten> <filename>

slient 模式, 不显示错误信息:  

	grep -s <match_patten> <filename>

## 二进制文件

> 默认情况下, grep 不会搜索二进制, 但是会匹配到二进制文件

忽略搜索二进制文件:  

	grep -I <match_patten> /bin/*
	# 或
	grep --binary-files=without-match <match_patten> /bin/*

搜索二进制内容:  

	# 对待二进制文件如文本文件一样
	grep -a <match_patten> /bin/*
	# 或
	grep --binary-files=text <match_patten> /bin/*

