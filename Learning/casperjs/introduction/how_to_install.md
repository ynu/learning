# CasperJS

## 安装
### 前提

- 需要安装[PhantomJS](http://phantomjs.org/)，其版本需要**1.8.2 <= PhantomJS_version <= 2.0**
- 需要安装[Python](http://python.org/)，其版本需要**Python_version >= 2.6**
- 安装[SlimerJS](http://www.slimerjs.org/)

注：

1. 以上安装时和下面的*通用安装方式*类似，解压、配置环境变量，在cmd或bash terminal中输入相应的命令可以找到执行即可
2. SlimerJS是可选的，即CasperJS默认使用的是PhantomJS，如果需要使用SlimerJS作为替代，则需要安装之，并且也执行CasperJS时通过--engine选项设置

	> The casperjs command has three available options:
	> - --direct: to prints out log messages to the console
	> - --log-level=[debug|info|warning|error] to set the logging level
	> - *--engine*=*[phantomjs|slimerjs]* to select the browser engine you want to use. **CasperJS supports PhantomJS (default) that runs Webkit**, and SlimerJS that runs Gecko.

### 通用安装方式

- 下载通用安装包，[主页](http://casperjs.org/)即可找到下载连接，有较新的beta版本以及稳定版本
- 配置PATH环境变量以便于在任何位置都可以找到casperjs执行
	- 对于**Windows**系统*开始*-*运行*-*systempropertiesadvanced*（或者*我的电脑*-*右键*-*属性*-*高级属性*-）-*环境变量*-*system environment区*-找到*path*，在后面添加上安装包解压的*casperjs.exe*所在目录，例如解压至`D:\apps\casperjs`，可以把`D:\apps\casperjs\bin`添加到path最后，各路劲用`;`分割；较好的方式时创建一个指向`D:\apps\casperjs`的*CASPERJS_HOME*的环境变量，然后再在path中添加`;%CASPERJS_HOME%\bin`
	- 对于**Mac OS X**，一般修改自己主目录下的bash启动脚本*~/.bash_profile*文件，在最后添加如下内容

		```
		CASPERJS_HOME＝YOUR_EXTRACTED_CASPERJS_LOCATION
		export PATH=$PATH:$CASPERJS_HOME
		```
	- 对于Linux，与Mac OS X的操作一样，不过bash的启动脚本一般为*~/.bashrc*

### 其他安装方式——可详细参考[installation](http://docs.casperjs.org/en/latest/installation.html)

- 针对**Mac OS X**，使用*brew*安装

	>Above all, don’t forget to update Formulaes:
	>
	>$ `brew update`
	>
	>For the 1.1 development version (recommended):
	>
	>$ `brew install casperjs --devel`
	>
	>For the 1.0.x stable version:
	>
	>$ `brew install casperjs`
	>
	>If you have already installed casperjs and want to have the last release (stable|devel), use upgrade:
	>
	>$ `brew upgrade casperjs`

- 通过npm安装（Windows、Mac OS X、Linux都可以）

	`npm install -g casperjs`

	**这种安装方式前提是需要安装有node/npm，优点是不需要配置环境变量**

- 通过github源码安装（Windows、Mac OS X、Linux都可以，只是配置环境变量部分不同一点点）

	>$ git clone git://github.com/n1k0/casperjs.git
	>
	>$ cd casperjs
	>
	>$ ln -sf \``pwd`\`/bin/casperjs /usr/local/bin/casperjs

- 通过安装包解压安装，即以上的通用安装方式
