__NUXT_JSONP__("/card/git", {data:[{html:"\u003Ch1 id=\"git\"\u003Egit\u003C\u002Fh1\u003E\n\u003Cp\u003Egit 是一个分布式版本管理系统, 也是一个命令行工具, 三大操作系统都支持(Mac, Linux, Windows)  \u003C\u002Fp\u003E\n\u003Cp\u003E在 Git 中，用 \u003Ccode\u003EHEAD\u003C\u002Fcode\u003E 表示当前提交即最新一个提交,上一个提交就是 \u003Ccode\u003EHEAD^ \u003C\u002Fcode\u003E，上上一个提交就是 \u003Ccode\u003EHEAD^^\u003C\u002Fcode\u003E，当然往上100个提交写100个 \u003Ccode\u003E^\u003C\u002Fcode\u003E 比较容易数不过来，所以写成 \u003Ccode\u003EHEAD~100\u003C\u002Fcode\u003E  \u003C\u002Fp\u003E\n\u003Cdiv class=\"card-container\"\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"初始化仓库\"\u003E初始化仓库\u003C\u002Fh2\u003E\n\u003Cp\u003E初始化仓库:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit init\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E初始化裸仓库:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit init --bare\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E克隆仓库:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit clone &lt;git-repo&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"配置\"\u003E配置\u003C\u002Fh2\u003E\n\u003Cp\u003E编辑配置文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config [--global] -e\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出配置信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config -l\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E获取相应的配置:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config --get core.editor\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E设置 git 的编辑器是 vim:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config --global core.editor vim\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E配置用户邮箱:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config --global user.email &lt;mail&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E配置用户名:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config --global user.name &lt;name&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E输出彩色信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config color.ui true\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E设置文件名大小写敏感:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config core.ignoreCase false\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E设置推送策略为 simple:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config push.default simple\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E设置命令别名:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config --global alias.co checkout\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E允许 git clean 不需要 \u003Ccode\u003E-f\u003C\u002Fcode\u003E:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config --global clean.requireForce false\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"忽略文件\"\u003E忽略文件\u003C\u002Fh2\u003E\n\u003Cp\u003E添加本项目的忽略文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Evim .gitignore\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E添加本项目的忽略文件并不把此文件纳入版本管理:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Evim .git\u002Finfo\u002Fexcludes\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E设置全局忽略文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config --global core.excludesfile ~\u002F.gitignore\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"添加删除移动文件\"\u003E添加删除移动文件\u003C\u002Fh2\u003E\n\u003Cp\u003E添加所有文件到暂存区，包括未追踪文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit add -A\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E更新暂存区文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit add -u\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E交互式添加文件到暂存区:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit add -p\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E工作区与暂存区删除文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit rm &lt;file&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E仅暂存区删除文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit rm --cached &lt;file&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E重命名暂存区文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit mv &lt;file&gt; &lt;newfile&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"工作区状态\"\u003E工作区状态\u003C\u002Fh2\u003E\n\u003Cp\u003E查看工作区的信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit status\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E查看工作区信息并显示分支及追踪信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit status -sb\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"显示更改\"\u003E显示更改\u003C\u002Fh2\u003E\n\u003Cp\u003E显示暂存区与工作区的不同:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit diff\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示本地仓库与暂存区的不同:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit diff --cached\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示工作区与本地仓库的不同:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit diff HEAD\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E仅显示改变的文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit diff --name-only\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E比较两次提交的差异:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit diff &lt;commit&gt; &lt;commit&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示某次 commit 所做的更改:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit show &lt;commit&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示某个文件的详细修改记录:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log -p &lt;file&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E图形化显示分支合并:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log --oneline --graph --decorate\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"储藏与恢复\"\u003E储藏与恢复\u003C\u002Fh2\u003E\n\u003Cp\u003E储藏(stash)工作区相对暂存区更改的文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit stash\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E储藏文件并添加描述信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit stash save &lt;message&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E恢复最后一次储藏的文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit stash apply\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E恢复最后一次储藏的文件并删除此次储存记录:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit stash pop\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E查看储藏列表:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit stash list\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"清理未追踪文件\"\u003E清理未追踪文件\u003C\u002Fh2\u003E\n\u003Cp\u003E清除未追踪且未忽略的文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit clean\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出未追踪且未忽略的文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit clean -n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E清除未追踪且未忽略的目录:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit clean -d\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出未追踪且未忽略的文件和目录:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit clean -nd\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E清除未追踪且未忽略的文件和目录:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit clean -d\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E清除未追踪的忽略文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit clean -X\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E强制执行清除操作(\u003Ccode\u003Eclean.requireForce\u003C\u002Fcode\u003E 为 \u003Ccode\u003Etrue\u003C\u002Fcode\u003E 阻止清除操作):  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit clean -f\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"恢复工作区\"\u003E恢复工作区\u003C\u002Fh2\u003E\n\u003Cp\u003E重置工作区某文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit checkout -- &lt;file&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E重置工作区:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit checkout .\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"回退版本\"\u003E回退版本\u003C\u002Fh2\u003E\n\u003Cp\u003E重置暂存区:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit reset\n# 或\ngit reset HEAD\n# 或\ngit reset --mixed\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E重置工作区和暂存区:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit reset --hard\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E回退本分支到某次提交, 重置暂存区:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit reset --mixed &lt;commit-ish&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E回退本分支到某次提交, 重置工作目录和暂存区:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit reset --hard &lt;commit-ish&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E回退本分支到某次提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit reset --soft &lt;commit-ish&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E回退到倒数第n+1个提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit reset --soft HEAD~n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E反向恢复一个提交并生成新的提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit revert &lt;commit&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"代码回滚\"\u003E代码回滚\u003C\u002Fh2\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Ccode\u003Erevert\u003C\u002Fcode\u003E 操作不会删除旧的提交, 而是撤销指定提交的更改作为一个新的提交  \u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E撤销最新 n 个提交的更改, 然后增加为一个新的提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit revert HEAD~n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E撤销一个指定的提交的更改, 然后增加未一个新的提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit revert &lt;commit&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"分支\"\u003E分支\u003C\u002Fh2\u003E\n\u003Cp\u003E列出本地分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit branch\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出本地分支与追踪关系:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit branch -vv\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出远程分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit branch -r\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出所有分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit branch -a\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E更改分支名字:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit branch -m &lt;newbranch&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E设置追踪分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit branch -u &lt;upstream&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"创建分支\"\u003E创建分支\u003C\u002Fh2\u003E\n\u003Cp\u003E创建分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit branch &lt;branch&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E创建分支并切换到新分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit checkout -b &lt;branch&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E指定提交创建一个游离分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit checkout &lt;commit&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E指定提交创建分支并切换到新分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit checkout -b &lt;branch&gt; &lt;commit&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E创建一个没有提交历史的分支并切换到新分支: \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit checkout --orphan &lt;branch&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E创建一个空分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E# 创建一个无提交历史分支\ngit checkout --orphan &lt;branch&gt;\n# 删除上一个分支留下的文件\ngit rm -rf .\n# 需要提交一些东西,新分支才能看到\ntouch README.md &amp;&amp; git add . &amp;&amp; git commit -m &#39;init README.md&#39;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"删除分支\"\u003E删除分支\u003C\u002Fh2\u003E\n\u003Cp\u003E删除已被合并的分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit branch -d &lt;branch&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E强制删除未被合并的分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit branch -D &lt;branch&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"合并分支\"\u003E合并分支\u003C\u002Fh2\u003E\n\u003Cp\u003E合并分支 A 到当前分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit merge A\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E合并多个分支到当前分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit merge A B\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"切换分支\"\u003E切换分支\u003C\u002Fh2\u003E\n\u003Cp\u003E切换分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit checkout &lt;branch&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E切换到最近一次分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit checkout -\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"远程仓库\"\u003E远程仓库\u003C\u002Fh2\u003E\n\u003Cp\u003E添加远程仓库并命名为 origin:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit remote add origin &lt;git-repo&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E删除名为 origin 的远程仓库地址:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit remote remote origin\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E重命名远程仓库简称:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit remote origin origin1\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E修改远程仓库的地址:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit remote set-url origin &lt;git-repo&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出所有的远程仓库:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit remote -v\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出远程仓库 origin 的详细信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit remote show origin\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"推送与拉取\"\u003E推送与拉取\u003C\u002Fh2\u003E\n\u003Cp\u003E设置默认推送策略为 simple:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit config push.default simple\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E推送 master 到远程仓库 origin 的 master:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit push origin master\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E推送本地 A 分支到远程仓库 origin 的 B 分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit push origin A:B\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E删除远程仓库 origin 的 B 分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit push origin :B\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E推送到远程仓库并建立追踪关系:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit push -u origin master\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E从远程仓库拉取文件:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit pull origin master\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"提交\"\u003E提交\u003C\u002Fh2\u003E\n\u003Cp\u003E提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit commit -m &lt;message&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E追加提交重置提交信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit commit --amend -m &lt;message&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E重置作者:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit commit --amend --author=&lt;mail&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E允许空提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit commit --allow-empty\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E提交时跳过 pre-commit hook:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit commit -n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"日志\"\u003E日志\u003C\u002Fh2\u003E\n\u003Cp\u003E显示提交日志:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示某文件的提交日志:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log -p &lt;file&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E以图表形式显示提交日志:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log --graph --all --oneline --decorate\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示每次提交的对象信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log --pretty=raw\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示某个时间段的提交信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log --since &#39;2 days ago&#39;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示指定作者的提交信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log --author=&lt;author&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E根据提交信息中的关键字查找:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log --grep=&lt;keyword&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出二者特有的提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log master...develop\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出 branch 有而 branch2 没有的提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log branch2..branch\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E仅显示 merge commit:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log --merges\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E统计每个作者的提交情况:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit shortlog\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E统计每个作者的提交个数:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit shortlog -sn\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"标签\"\u003E标签\u003C\u002Fh2\u003E\n\u003Cp\u003E列出所有标签:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit tag -l\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E列出所有标签并显示标签信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit tag -ln\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E添加一个轻量标签:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit tag v1.0\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E添加一个附注标签:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit tag -a v1.0.0 -m &lt;message&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E在某个 commit 上添加一个标签:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit tag v0.9.0 &lt;commit&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E删除一个标签:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit tag -d v1.0.0\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E删除远程仓库的 tag:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit push origin :refs\u002Ftags\u002F&lt;tagname&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E查看某个标签信息:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit show v1.0.0\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E推送 tag \u003Ccode\u003Ev1.0\u003C\u002Fcode\u003E 到远程仓库:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit push origin v1.0\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E推送所有标签到远程仓库:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit push --tags\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E以 tag 的提交为基础创建一个新分支:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit checkout -b branch_v1.0 v1.0\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E取得两个 tag 之间的 commmit:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit log --pretty=oneline tagA..tagB\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"追责\"\u003E追责\u003C\u002Fh2\u003E\n\u003Cp\u003E显示一个文件每一行最后一次提交情况:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit blame &lt;file&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示指定文件第\u003Ccode\u003En,m\u003C\u002Fcode\u003E行最后一次提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit blame -L n,m &lt;file&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示指定文件第n行开始的m行最后一次提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit blame -L n,+m &lt;file&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示指定文件第n行结束的前m行最后一次提交:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit blame -L n,-m &lt;file&gt;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"查找\"\u003E查找\u003C\u002Fh2\u003E\n\u003Cp\u003E显示已追踪文件中包含关键字的行:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit grep hello\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E显示已追踪文件中包含关键字的行, 并显示行号:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit grep -n hello\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"h2-block\"\u003E\u003Ch2 id=\"打包\"\u003E打包\u003C\u002Fh2\u003E\n\u003Cp\u003E打包:  \u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Egit archive -o arch.zip HEAD\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E",editUrl:"https:\u002F\u002Fgithub.com\u002FMwumLi\u002Fcheatsheets\u002Ftree\u002Fmaster\u002Fmarkdowns\u002Fgit.md"}],fetch:{},mutations:void 0});