# cheatsheets

![Travis Status](https://api.travis-ci.org/MwumLi/cheatsheets.svg?branch=master)

记录常用的一些命令的 cheatsheets  

在线地址: https://cheatsheets.ifmicro.com  

## cheatsheet 与 markdown

所有的命令的 cheatsheet 使用 markdown 作为记录, cheatsheets 位置[在这里](./markdowns)  

### Card

小卡片复古风: 每一个小功能都是一张卡片, 充满回忆感  

文件命名为: `xxx.md`  

写作规范:  
* 标准的 markdown 语法
* 页面标题: 格式为 `# 页面标题`, 放在文章首部, 页面标题必须有且只能有一个哦  
* 小卡片:  
  * 卡片标题: 格式为 `## 卡片标题`, 表示这个小卡片的主题  
  * 卡片内容: 一个命令描述(普通文本)加一个(段)命令(markdown 的换行缩进式代码块)  

		## 初始化仓库
		
		初始化仓库:  
			
			git init
		
		初始化裸仓库:  
		
			git init --bare
		
		克隆仓库:  
		
			git clone <git-repo>

### Post

流行博文风: 当代流行博文风格, 时尚^v^  

对于那些难于用卡片风的命令, 我们可以采用博文的形式生成

文件命名: `xxx.post.md`  

写作规范:  
* 标准 markdown 语法  
* 整篇文章必须有一个且只能有一个 `# 页面标题`: 页面标题只能有一个  

当然可以卡片化的尽量卡片化, 卡片化的可能是我能力不够, 不能精简, 可爱而聪明的你一定可以帮到我吧, 请和我一起完善这项工作吧^v^  

## 技术

使用 vue2 + nuxt.js

## 命令

* 安装依赖: `npm install`  
* 开发: `npm run dev`  
* 生产环境构建和启动服务: `npm run build && npm start`
* 生成静态站点: `npm generate`

## 想法

* 瀑布流的想法来源于 https://shfshanyue.github.io/cheat-sheets/git  
* cheatsheets 的想法源于 Linux/Mac 下的工具 [cheat](https://github.com/chrisallenlane/cheat)  

