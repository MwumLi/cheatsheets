# yum

centos 下的基于 rpm 的软件包管理器, 能够从指定的服务器自动下载 rpm 包并且安装,可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。  

## 下载 RPM 包

> 以下命令仅仅下载, 不安装, 你可以把下载 rpm 包放到其他系统中去安装  
> 如果指定的包有依赖关系, 那么依赖关系的包也会下载下来  

下载 RPM 包:  

	# 默认下载到 /var/cache/yum/x86_64/[centos/fedora-version]/[repository]/packages
	sudo yum install --downloadonly <package>

下载 RPM 包到指定目录:  

	sudo yum install --downloadonly --downloaddir=<storage dir> <package>

以上命令选项可能需要 `yum-plugin-downloadonly` 支持:  

	sudo yum install yum-plugin-downloadonly

## 列出软件清单列表

列出所有已安装和可安裝的程序包:  

	yum list

列出以 `pam` 开头的软件清单命令:  

	yum list pam*

查找软件包:  

	yum search <keyword>

## 软件更新

更新所有软件:  

	yum update

更新指定软件:  

	yum update <package>

检查可更新的软件:  

	yum check-update

## 软件卸载

删除软件:  

	yum remove <package>

卸载软件(无需询问):  

	yum remove -y <package>

## 软件安装

安装指定软件:  

	yum install <package>

安装指定软件(无需询问):  

	yum install -y <package>

## 清除缓存

清除缓存目录下的软件包:  

	yum clean <package>

清除缓存目录下的 `headers`:  

	yum clean headers

清除缓存目录下旧的 `headers`:  

	yum clean oldheaders

清除缓存目录下的软件包以及旧的 `headers`:  

	yum clean all

## 查看

查看软件包的依赖情况:  

	yum deplist <package>

查看软件包信息:  

	yum info <package>
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzY2MjQ5MTgzLDI4NjI4NjQ1OV19
-->