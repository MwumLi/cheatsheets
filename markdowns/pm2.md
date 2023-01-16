# PM2

[PM2](http://pm2.keymetrics.io/) 是用 Node.js 开发的进程管理工具, 通常用于 Node.js 应用的生产环境运维; 同时, 它也支持其他多种语言(perl/python等)程序。  

## 启动Node程序

启动 `app.js`:  

	pm2 start app.js

命名为 `my-api`:  

	# 一般命名为一个可记忆的名字, 方便其他操作
	pm2 start app.js --name my-api

传递命令行参数:  

	pm2 start app.js -- -a 23

传递 node V8 选项给 node 进程:  

	# --debug=7001 是 node v8 的调试服务
	pm2 start app.js --node-args="--debug=7001"

以集群模式启动:  

	# 实现负载均衡, 高效利用 CPU
	# 会同时启动 3 个实例
	pm2 start app.js -i 3

	# 启动和 cpu 数量等同的实例(推荐)
	pm2 start app.js -i 0

## 启动其他语言程序

默认支持的语言类型:  

	# key 为文件后缀, value 为解释器
	{
		".sh": "bash",
		".py": "python",
		".rb": "ruby",
		".coffee" : "coffee",
		".php": "php",
		".pl" : "perl",
		".js" : "node"
	}

指定解释器:  

	pm2 start echo.pl --interpreter=perl

执行二进制程序:  

	pm2 start ./binary-app

## 管理进程

> `all`: 表示 pm2 进程列表所有进程

列出所有进程:  

	pm2 list
	pm2 ls
	pm2 status
	pm2 ps
	pm2 l

停止进程:  

	pm2 stop <name|id|all>

停止并移除进程:  

	pm2 delete <name|id|all>

重启进程:  

	# start && start
	pm2 restart <name/id|all>

热启动:  

	# cluster 模式并且是 http/https 应用
	pm2 reload <name/all>

查看进程的详细参数:  

	pm2 describe <id>
	pm2 desc <id>
	pm2 info <id>
	pm2 show <id>

重置进程重启计数器:  

	# 重启次数就变为 0
	pm2 reset <name/id/all>

## 服务

产生服务脚本并加入开机自启动:  

	# 不需要指定平台, 会自动探测; 如果不能执行, 也会给出提示
	pm2 startup

卸载开机自启动服务:  

	pm2 unstartup

更新开机自启动服务:  

	# 以防 Node 安装位置发生改变
	# 比如时候 nvm 安装/切换其他版本 node
	pm2 unstartup && pm2 startup

## 进程转储

保存当前进程列表:  

	# 保存位置: $PM2_HOME/.pm2/dump.pm2
	# pm2 开机自启动服务会在机器重启的情况下自动重启这些服务 
	pm2 save

手动恢复进程:  

	# 手动唤起以前通过 `pm2 save` 保存的进程
	pm2 resurrect

清空进程列表:  

	# 会把文件 $PM2_HOME/.pm2/dump.pm2 清空
	pm2 cleardump

## 日志

日志文件: `~/.pm2/logs`

实时查看日志:  

	# 默认查看所有进程的日志
	pm2 logs [id|name]

清空日志:  

	pm2 flush


