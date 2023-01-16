# time - 性能分析

`time` 命令是开发过程中常用到的一个系统命令，主要是查看某个程序运行的时间分布  

## 简单使用

命令原型: `time <command>`  

例如:  

	$ time ls -l
	anaconda-ks.cfg  install.log  install.log.syslog  satools  text

	real    0m0.009s
	user    0m0.002s
	sys     0m0.007s

### 运行结果

运行结果一般有三个值:  

* `real`: 墙上时间，即命令从开始执行到执行结束的总时间
* `user`: 命令执行完成花费的用户 CPU 时间，即命令在用户态中执行时间总和  
* `sys`: 命令执行完成花费的系统 CPU 时间，即命令在内核态(系统调用)中执行时间总和  

如果存在多核, 那么`user` 和 `sys` 的时间是多核时间累计  

因此, **运行结果分析**如下:  

* `user + sys >= real`: 存在密集型计算任务, 并且使用多核并发  
* `user + sys << real`: cpu 使用时间远远小于命令运行时间, IO 密集型应用  

## 你运行的可能是假 time

shell 内建有一个 time 命令, 当你直接运行 `time` 的时候, 很大可能性运行的是系统内建命令  

运行系统内建 time 没有什么问题, 只是系统内建命令的功能有限, 只能像上文那样简单使用  

使用 `type time` 可以确认是否 shell 内置 `time`:  

	$ type time
	time is a shell keyword

`/usr/bin/time` 是真正的 `time` 命令, 通过 `which time` 验证:  

	$ which time
	/usr/bin/time

对于真正的 `time` 命令, 你只能通过指定全路径使用  

### 使用

简单打印, 没换行, 不直观: `/usr/bin/time ls`  

	$ /usr/bin/time ls
	Makefile  aa.c  outfile.txt
	0.00user 0.00system 0:00.00elapsed 0%CPU (0avgtext+0avgdata 2432maxresident)k
	0inputs+0outputs (0major+105minor)pagefaults 0swaps

和内建 `time` 一样的打印:  

	$ /usr/bin/time -p ls
	Makefile  aa.c  outfile.txt
	real 0.00
	user 0.00
	sys 0.00

使用 `-f` 自定义信息输出, 比如下面模拟了 `-p` 的选项:  

	$ /usr/bin/time -f "real %e\nuser %U\nsys %S\n" sleep 1
	real 1.00
	user 0.00
	sys 0.00

`-f` 支持的更多选项参考: <http://man.linuxde.net/time>  

使用 `-v` 打印详细信息:  

	$ /usr/bin/time -v ls
	Makefile  aa.c  outfile.txt
					Command being timed: "ls"
					User time (seconds): 0.00
					System time (seconds): 0.00
					Percent of CPU this job got: 0%
					Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.00
					Average shared text size (kbytes): 0
					Average unshared data size (kbytes): 0
					Average stack size (kbytes): 0
					Average total size (kbytes): 0
					Maximum resident set size (kbytes): 2340
					Average resident set size (kbytes): 0
					Major (requiring I/O) page faults: 0
					Minor (reclaiming a frame) page faults: 105
					Voluntary context switches: 0
					Involuntary context switches: 6
					Swaps: 0
					File system inputs: 0
					File system outputs: 0
					Socket messages sent: 0
					Socket messages received: 0
					Signals delivered: 0
					Page size (bytes): 4096
					Exit status: 0

