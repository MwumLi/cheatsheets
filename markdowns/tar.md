# tar

类 unix 系统的一个归档(打包)工具, 可以配合压缩程序(`gzip`,`bzip2`)进行压缩  


## 打包


打包并显示详细打包过程:  

	tar -cvf test.tar /tmp

打包 `/tmp` 目录:  

	tar -cvf test.tar /tmp

打包 `/tmp` 目录下的文件:  

	tar -cvf test.tar /tmp/aa /tmp/bb

打包 `/tmp` 目录下的文件(无目录结构):  

	tar -cvf test.tar -C /tmp aa bb
	# 等同于
	last_path=`pwd` && cd /tmp && tar -cvf test.tar aa bb && cd ${last_path}

打包 `/tmp` 目录下的内容(无目录结构):  

	tar -cvf test.tar -C /tmp .
	# 等同于
	last_path=`pwd` && cd /tmp && tar -cvf test.tar ./* && cd ${last_path}

## 压缩

> 压缩的过程其实分为打包和压缩两步  

打包并压缩为 `.gz`:  

	tar -czvf test.tar.gz -C /tmp .
	等同于
	tar -cvf - -C /tmp . | gzip > test.tar.gz

打包并压缩为 `.bz2`:  

	tar -cjvf test.tar.bz2 -C /tmp .
	# 等同于
	tar -cvf - -C /tmp . | bzip2 > test.tar.bz2

## 解压

> 解压不只是压缩包,普通包也可以  

解压 `.gz` 压缩包:  

	tar -xvzf test.tar.gz
	tar -xvf test.tar.gz

解压 `.bz2` 压缩包:  

	tar -xvjf test.tar.bz2
	tar -xvf test.tar.bz2

解压到指定目录:  

	tar -xvf test.tar.bz2 -C <dir>

解压时候忽略压缩包中一层目录层级：
```
tar -xvf test.tar.gz --strip-components=1 -C <dir>
```

## 查看包

查看包或压缩包:  

	tar -tf test.tar
	tar -tf test.tar.bz2
	tar -tf test.tar.gz
	tar -tf test.iso

列出文件的详细信息:  

	tar -tvf test.tar
	tar -tvf test.tar.bz2
	tar -tvf test.tar.gz
	tar -tvf test.iso

