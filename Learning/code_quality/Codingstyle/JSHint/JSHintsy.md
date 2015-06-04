## 如何使用JSHint

### Node调试工具JSHint的安装

打开cmd命令窗口，输入以下命令：

代码如下:

    - npm install -g jshint  //-g的意思是全局使用


注：如果提示npm不是内部或者外部命令，那么多半是你没有安装node或者npm。具体安装过程请参考http://dailyjs.com/2012/05/03/windows-and-node-1/。

### 运行JSHint

打开cmd命令窗口，使用cd切换到你对应的应用目录下，输入以下命令：

代码如下:

    - jshint my_app.js


注：my_app.js即是你打算校验或者检查的文件。

JSHint是一个全局的函数，他接受两个参数，

     -JSHint(source,options);


一个是代码source，另一个是options（选项）

第一个参数可以是一个字符串或者是一个字符串数组。如果是字符串，则他会被\n和\r分割，如果传入的参数是数组，就要保证数组的每一项是一行代码。

因此源码参数可以是javascript代码或者是一个json形式。如果所有的检测都ok，JSHint会返回true，否则就返回false。
当返回false的时候，你可以用JSHint.errors来获取错误信息或者用JSHint.data()来获取lint的信息。

使用JSHint，你可以在js文件的开始设定选项，例如

     -/*jshint evil:true, boss:true */

而设定global参数可以告诉JSHint，全局的变量配置。例如

     -/*global DISQUS: true, jQuery: false */

以上的这个例子是告诉JSHint,DISQUS是你自己声明的全局变量，而jQuery是你引入的全局变量。