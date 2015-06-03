# CasperJS

## 快速入门

以下通过一些例子说明

### 一个简单的[测试例子](http://docs.casperjs.org/en/latest/selectors.html)
```js
var casper = require('casper').create();

casper.test.begin('Page content tests', 3, function suite(test) {
    casper.start('http://domain.tld/page.html', function() {
        test.assertExists('h1.page-title');
        test.assertSelectorHasText('h1.page-title', 'Hello');
        test.assertVisible('footer');
    }).run(function() {
        test.done();
    });
});
```

### 一个官方的从Google获取信息的例子

```js
var links = [];
var casper = require('casper').create();

// 解析文档，获取链接URL
function getLinks() {
    // 根据CSS选择器获取特定的链接
    var links = document.querySelectorAll('h3.r a');
    // 解析这些链接的URL组装成列表返回
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('http://www.google.com.hk/', function() {
	// 浏览Google网址，填充'casperjs'，提交表单进行搜索
    this.fill('form[action="/search"]', { q: 'casperjs' }, true);
});

casper.then(function() {
    // 获取上一部搜索到的结果的链接网址
    links = this.evaluate(getLinks);
	// 接着重新填充'phantomjs'，提交表单进行搜索
    this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
});

casper.then(function() {
	// 合并搜索'casperjs'和'phantomjs'的结果链接
    links = links.concat(this.evaluate(getLinks));
});

casper.run(function() {
    // 显示搜索到的链接数量及内容
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});
```


### 一个稍微长点的例子

```js
var casper = require('casper').create();

var BASE_URL = casper.cli.get('url');
// Go to home
casper.test.comment('Go to home');
casper.start(BASE_URL, function() {
    this.test.pass('Home was loaded');
});
// Go to login page
casper.then(function() {
    this.click('div.quick-access li.last a');
    this.test.pass('login page was loaded');
});
casper.then(function() {
    this.click('div.account-login div.buttons-set button');
    this.test.pass('register page was loaded');
});
// Fill login form and submit
casper.then(function() {
    this.test.info('Current location is ' + this.getCurrentUrl());
    this.fill('#form-validate', {
        'firstname': 'stamba',
        'lastname': 'stambic',
        'email': 'stamba@stamba.com',
        'password': 'johndoe123',
        'confirmation': 'johndoe123'
    }, true);
    this.test.pass('form populated');
});
// Registration goes well
casper.then(function() {
    this.test.info('Current location is ' + this.getCurrentUrl());
    this.test.pass('Registered');
});
// Account dashboard welcome
casper.then(function() {
    //this.test.assertTextExists('Hello, stamba stambic!');
    this.test.assertTextExists('Hello, stamba stambic!', 'page body contains "Hello, stamba stambic!"');
    this.test.info('Current location is ' + this.getCurrentUrl());
    this.test.pass('Dashboard in');
});
casper.run(function() {
    this.test.done();
});
```