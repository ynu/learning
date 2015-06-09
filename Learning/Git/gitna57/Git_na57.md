#learning开源书中github协作的用法
* 1、注册一个github账号
* 2、到https://github.com/ynu/learning里边把learning这个项目fork下来。
* 3、把learning这个项目clone到自己的终端上。
* 4、加入自己对learing增加的内容。注：一定要把自己的内容的目录加入SUMMERY里的目录中。
* 5、做了上边的1、2、3、4步之后，这个时候你的本地的版本库中的内容可以能已经成为旧版本，你需要到你自己的远程库中找到learning这个项目，点击右边的Pull requests，再点击New pull request。
>这个时候我们进入了Comparing Changes这个界面，此时我们需要把出现在页面中的ynu/master和自己远程库中的位置换过来。前边为ynu/master，后边为自己的远程库（例如xiaozizi这是我自己的远程库）。做完这一步之后，点击merge....然后再点击confirm。现在ynu上的数据已经和我自己的远程库中的同步。

* ynu与我自己的远程库同步之后，我们还需要让远程库与我们本地库同步，这个时候我们需要做如下操作：
	* 运行cmd
	* ```$ git pull``` 把远程库里的数据pull下来到本地库
	* ```$ git log``` 查看本地库中的版本是不是最新版本
	* ```$ q``` 退出git log
	* ```$ git status``` 查看状态，主要看是否有冲突，有的话，解决冲突
	* ```$ gitbook serve``` 在自己本地先看看效果
	* ```$ git add .``` 把当前目录加入暂存区
	* ```$ git commit -m "local modify file"```
	* ```$ git push```
	
注：在解决冲突时，最终不能让文档中出现以下标记,若出现，在等号前边的内容和后边的内容之间做出选择，二者则一，然后删除标记。

![Alt text ](./image/na57.png)
