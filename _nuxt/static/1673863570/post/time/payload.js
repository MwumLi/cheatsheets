__NUXT_JSONP__("/post/time", {data:[{html:"\u003Ch1 id=\"time---性能分析\"\u003Etime - 性能分析\u003C\u002Fh1\u003E\n\u003Cp\u003E\u003Ccode\u003Etime\u003C\u002Fcode\u003E\n 命令是开发过程中常用到的一个系统命令，主要是查看某个程序运行的时间分布  \u003C\u002Fp\u003E\n\u003Ch2 id=\"简单使用\"\u003E简单使用\u003C\u002Fh2\u003E\n\u003Cp\u003E命令原型: \u003Ccode\u003Etime &lt;command&gt;\u003C\u002Fcode\u003E\n  \u003C\u002Fp\u003E\n\u003Cp\u003E例如:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E$ \u003Cspan class=\"hljs-type\"\u003Etime\u003C\u002Fspan\u003E ls -l\nanaconda-ks.cfg  install.\u003Cspan class=\"hljs-keyword\"\u003Elog\u003C\u002Fspan\u003E  install.\u003Cspan class=\"hljs-keyword\"\u003Elog\u003C\u002Fspan\u003E.syslog  satools  \u003Cspan class=\"hljs-type\"\u003Etext\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"hljs-type\"\u003Ereal\u003C\u002Fspan\u003E    \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003Em0\u003Cspan class=\"hljs-number\"\u003E.009\u003C\u002Fspan\u003Es\n\u003Cspan class=\"hljs-keyword\"\u003Euser\u003C\u002Fspan\u003E    \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003Em0\u003Cspan class=\"hljs-number\"\u003E.002\u003C\u002Fspan\u003Es\nsys     \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003Em0\u003Cspan class=\"hljs-number\"\u003E.007\u003C\u002Fspan\u003Es\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 id=\"运行结果\"\u003E运行结果\u003C\u002Fh3\u003E\n\u003Cp\u003E运行结果一般有三个值:  \u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003Ereal\u003C\u002Fcode\u003E\n: 墙上时间，即命令从开始执行到执行结束的总时间\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Euser\u003C\u002Fcode\u003E\n: 命令执行完成花费的用户 CPU 时间，即命令在用户态中执行时间总和  \u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Esys\u003C\u002Fcode\u003E\n: 命令执行完成花费的系统 CPU 时间，即命令在内核态(系统调用)中执行时间总和\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E如果存在多核, 那么\u003Ccode\u003Euser\u003C\u002Fcode\u003E\n 和 \u003Ccode\u003Esys\u003C\u002Fcode\u003E\n 的时间是多核时间累计  \u003C\u002Fp\u003E\n\u003Cp\u003E因此, \u003Cstrong\u003E运行结果分析\u003C\u002Fstrong\u003E如下:  \u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003Euser + sys &gt;= real\u003C\u002Fcode\u003E\n: 存在密集型计算任务, 并且使用多核并发  \u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Euser + sys &lt;&lt; real\u003C\u002Fcode\u003E\n: cpu 使用时间远远小于命令运行时间, IO 密集型应用\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"你运行的可能是假-time\"\u003E你运行的可能是假 time\u003C\u002Fh2\u003E\n\u003Cp\u003Eshell 内建有一个 time 命令, 当你直接运行 \u003Ccode\u003Etime\u003C\u002Fcode\u003E\n 的时候, 很大可能性运行的是系统内建命令  \u003C\u002Fp\u003E\n\u003Cp\u003E运行系统内建 time 没有什么问题, 只是系统内建命令的功能有限, 只能像上文那样简单使用  \u003C\u002Fp\u003E\n\u003Cp\u003E使用 \u003Ccode\u003Etype time\u003C\u002Fcode\u003E\n 可以确认是否 shell 内置 \u003Ccode\u003Etime\u003C\u002Fcode\u003E\n:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E$ \u003Cspan class=\"hljs-built_in\"\u003Etype\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-built_in\"\u003Etime\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-built_in\"\u003Etime\u003C\u002Fspan\u003E is a \u003Cspan class=\"hljs-built_in\"\u003Eshell\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Ekeyword\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Ccode\u003E\u002Fusr\u002Fbin\u002Ftime\u003C\u002Fcode\u003E\n 是真正的 \u003Ccode\u003Etime\u003C\u002Fcode\u003E\n 命令, 通过 \u003Ccode\u003Ewhich time\u003C\u002Fcode\u003E\n 验证:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E$ which \u003Cspan class=\"hljs-built_in\"\u003Etime\u003C\u002Fspan\u003E\n\u002Fusr\u002Fbin\u002F\u003Cspan class=\"hljs-built_in\"\u003Etime\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E对于真正的 \u003Ccode\u003Etime\u003C\u002Fcode\u003E\n 命令, 你只能通过指定全路径使用  \u003C\u002Fp\u003E\n\u003Ch3 id=\"使用\"\u003E使用\u003C\u002Fh3\u003E\n\u003Cp\u003E简单打印, 没换行, 不直观: \u003Ccode\u003E\u002Fusr\u002Fbin\u002Ftime ls\u003C\u002Fcode\u003E\n  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E$ \u002Fusr\u002Fbin\u002Ftime \u003Cspan class=\"hljs-keyword\"\u003Els\u003C\u002Fspan\u003E\nMakefile  aa.c  outfile.txt\n\u003Cspan class=\"hljs-number\"\u003E0.00\u003C\u002Fspan\u003Euser \u003Cspan class=\"hljs-number\"\u003E0.00\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-keyword\"\u003Esystem\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E:\u003Cspan class=\"hljs-number\"\u003E00.00\u003C\u002Fspan\u003Eelapsed \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E%CPU (\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003Eavgtext+\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003Eavgdata \u003Cspan class=\"hljs-number\"\u003E2432\u003C\u002Fspan\u003Emaxresident)k\n\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003Einputs+\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003Eoutputs (\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003Emajor+\u003Cspan class=\"hljs-number\"\u003E105\u003C\u002Fspan\u003Eminor)pagefaults \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003Eswaps\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E和内建 \u003Ccode\u003Etime\u003C\u002Fcode\u003E\n 一样的打印:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E$ \u002Fusr\u002Fbin\u002F\u003Cspan class=\"hljs-selector-tag\"\u003Etime\u003C\u002Fspan\u003E -\u003Cspan class=\"hljs-selector-tag\"\u003Ep\u003C\u002Fspan\u003E ls\nMakefile  aa\u003Cspan class=\"hljs-selector-class\"\u003E.c\u003C\u002Fspan\u003E  outfile\u003Cspan class=\"hljs-selector-class\"\u003E.txt\u003C\u002Fspan\u003E\nreal \u003Cspan class=\"hljs-number\"\u003E0.00\u003C\u002Fspan\u003E\nuser \u003Cspan class=\"hljs-number\"\u003E0.00\u003C\u002Fspan\u003E\nsys \u003Cspan class=\"hljs-number\"\u003E0.00\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E使用 \u003Ccode\u003E-f\u003C\u002Fcode\u003E\n 自定义信息输出, 比如下面模拟了 \u003Ccode\u003E-p\u003C\u002Fcode\u003E\n 的选项:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E$ \u002Fusr\u002Fbin\u002F\u003Cspan class=\"hljs-keyword\"\u003Etime\u003C\u002Fspan\u003E -f \u003Cspan class=\"hljs-string\"\u003E&quot;real %e\\nuser %U\\nsys %S\\n&quot;\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Esleep\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-number\"\u003E1\u003C\u002Fspan\u003E\nreal \u003Cspan class=\"hljs-number\"\u003E1.00\u003C\u002Fspan\u003E\nuser \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E.\u003Cspan class=\"hljs-number\"\u003E00\u003C\u002Fspan\u003E\nsys \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E.\u003Cspan class=\"hljs-number\"\u003E00\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Ccode\u003E-f\u003C\u002Fcode\u003E\n 支持的更多选项参考: \u003Ca href=\"http:\u002F\u002Fman.linuxde.net\u002Ftime\" target=\"_blank\" \u003Ehttp:\u002F\u002Fman.linuxde.net\u002Ftime\u003C\u002Fa\u003E  \u003C\u002Fp\u003E\n\u003Cp\u003E使用 \u003Ccode\u003E-v\u003C\u002Fcode\u003E\n 打印详细信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-attribute\"\u003E$ \u002Fusr\u002Fbin\u002Ftime -v ls\nMakefile  aa.c  outfile.txt\n                Command being timed\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E&quot;ls&quot;\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EUser time (seconds)\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0.00\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003ESystem time (seconds)\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0.00\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EPercent of CPU this job got\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0%\u003C\u002Fspan\u003E\n                Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.00\n                \u003Cspan class=\"hljs-attribute\"\u003EAverage shared text size (kbytes)\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EAverage unshared data size (kbytes)\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EAverage stack size (kbytes)\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EAverage total size (kbytes)\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EMaximum resident set size (kbytes)\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E2340\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EAverage resident set size (kbytes)\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EMajor (requiring I\u002FO) page faults\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EMinor (reclaiming a frame) page faults\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E105\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EVoluntary context switches\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EInvoluntary context switches\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E6\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003ESwaps\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EFile system inputs\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EFile system outputs\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003ESocket messages sent\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003ESocket messages received\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003ESignals delivered\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EPage size (bytes)\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E4096\u003C\u002Fspan\u003E\n                \u003Cspan class=\"hljs-attribute\"\u003EExit status\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E0\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n",editUrl:"https:\u002F\u002Fgithub.com\u002FMwumLi\u002Fcheatsheets\u002Ftree\u002Fmaster\u002Fmarkdowns\u002Ftime.post.md"}],fetch:{},mutations:void 0});