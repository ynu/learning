# CasperJS选择器

CasperJS使用选择器来操作[DOM](http://www.w3.org/TR/dom/)，可以使用[CSS3](http://www.w3.org/TR/selectors/)、[XPath](http://www.w3.org/TR/xpath/)两种方式的选择器。

例如以下HTML代码

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>My page</title>
</head>
<body>
    <h1 class="page-title">Hello</h1>
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    <footer><p>©2012 myself</p></footer>
</body>
</html>
```

### CSS3选择器

如果检查`<h1 class="page-title">`是否存在，代码如下

```js
var casper = require('casper').create();

casper.start('http://domain.tld/page.html', function() {
    if (this.exists('h1.page-title')) {
        this.echo('the heading exists');
    }
});

casper.run();
```

### XPath选择器

例如

```js
var casper = require('casper').create();

casper.start('http://domain.tld/page.html', function() {
    this.test.assertExists({
        type: 'xpath',
        path: '//h1[@class="page-title"]'
    }, 'the element exists');
});
```