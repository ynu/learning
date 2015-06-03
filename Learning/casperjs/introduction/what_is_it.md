# [CasperJS](http://casperjs.org/)

## 什么是CasperJS

CasperJS 是一个开源的*导航脚本*和*测试*的**命令行工具**，使用Javascript脚本编写功能代码，其功能与[PhantomJS](http://www.phantomjs.org/)和[SlimerJS](http://www.slimerjs.org/)类似，是PhantomJS和SlimerJS的简单封装。

PhantomJS是基于[WebKit](http://en.wikipedia.org/wiki/WebKit)的浏览器排版引擎（也叫做渲染引擎），WebKit是最著名的浏览器排版引擎，主要应用在Google Chrome（<=27）、Apple的浏览器产品中（Safari、iOS浏览器），最初由Apple公司开发并且也是开源的。

SlimerJS是基于[Gecko](http://en.wikipedia.org/wiki/WebKit)的浏览器排版引擎，应用在Mozilla的产品中，主要是Firefox系列的浏览器中，同样也是开源的。

### 提供的主要功能

- 定义网页[浏览步骤](http://docs.casperjs.org/en/latest/quickstart.html)
- 填充表单数据、提交[表单](http://docs.casperjs.org/en/latest/modules/casper.html#fill)
- 控制页面内链接[点击](http://docs.casperjs.org/en/latest/modules/casper.html#click)事件
- 网页[截图](http://docs.casperjs.org/en/latest/modules/casper.html#captureselector)（可完整截图或只截取部分截图）
- [测试](http://docs.casperjs.org/en/latest/modules/tester.html)DOM
- [日志](http://docs.casperjs.org/en/latest/modules/casper.html#logging.html)处理
- [下载](http://docs.casperjs.org/en/latest/modules/casper.html#download)资源
- 写[功能性测试套件](http://docs.casperjs.org/en/latest/testing.html)
- [网页爬虫](https://github.com/n1k0/casperjs/blob/master/samples/)

### Hello World

使用文本编辑器，创建sample.js文件，其内容如下

```js
var casper = require('casper').create();

casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});

casper.run();
```

运行

```
casperjs sample.js
```

其输出类似于

```
casperjs sample.js
CasperJS, a navigation scripting and testing utility for PhantomJS
PhantomJS: Headless WebKit with JavaScript API
```

### 最常用的网页截图功能

核心是使用[capture()](http://docs.casperjs.org/en/latest/modules/casper.html#capture)方法

```js
var casper = require('casper').create();

casper.start('http://www.baidu.com/', function() {
    this.capture('screenshot.png', {
        top: 0,
        left: 0,
        width: 1024,
        height: 768
    });
});

casper.run();
```

如果使用[PhantomJS](http://phantomjs.org/screen-capture.html)，等价于以下代码

```js
var page = require('webpage').create();
//viewportSize being the actual size of the headless browser
page.viewportSize = {
    width: 1024,
    height: 768
};
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = {
    top: 0,
    left: 0,
    width: 1024,
    height: 768
};
//the rest of the code is the same as the previous example
page.open('http://www.baidu.com/', function() {
    page.render('screenshot.png');
    phantom.exit();
});
```

如果使用[SlimerJS](http://docs.slimerjs.org/0.9/quick-start.html#taking-screenshots)，等价于以下代码

```js
var page = require('webpage').create();
page.open("http://www.baidu.com", function(status) {
    page.viewportSize = {
        width: 1024,
        height: 768
    };
    page.clipRect = {
        top: 0,
        left: 0,
        width: 1024,
        height: 768
    };
    page.render('screenshot.png')
});
```


