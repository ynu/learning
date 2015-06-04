# QUnit/Jasmine比较

## QUnit/Jasmine简介

* QUnit是一个JavaScript单元测试框架，主要用于在浏览器中运行单元测试。虽然这个项目从属于jQuery，但却不依赖于jQuery，也不依赖于浏览器DOM。因此你也可以在node.js或Rhino上使用。QUnit很容易学习，你只需在html页面中包含两个文件，不需要安装或者构建任何其他东西。最短的测试集只需要一个11行的html文件。

* Jasmine是一个 JavaScript测试框架，目的是将BDD风格引入JavaScript测试之中。至于区别嘛，我们的目标是BDD（相比标准的TDD），因此我们尽 力帮助开发人员编写比一般xUnit框架表达性更强，组织更好的代码。此外我们还力图减少依赖，这样你可以在node.js上使用Jasmine，也可以在浏览器或移动程序中使用。

##Jasmine和Qunit的断言比较

Jamine，他有12种原生断言比较，同时我们可以很容易的定义自己的断言，这是一个很大的优点。

Qunit自带8种断言，当然你可以自己扩展，但相对比较麻烦，唯一优势是断言可以带自定义描述。

##Jasmine和Qunit的分组（分模块）比较

Jasmine用describe()来进行分组和模块，它的优势是可以嵌套，也就是可以很好的区分子模块，非常明了使用的功能。

Qunit用module()进行分组，不能区分子模块。

##Jasmine和Qunit的测试比较

Jasmine只有it()一个用来操作测试的方法。

Qunit包含3个测试用的方法，这个比较多。多了异步测试的方法，而且expect()可以限制断言个数。







