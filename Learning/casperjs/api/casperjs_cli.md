# CasperJS 命令行使用

CasperJS内置了一个基于PhantomJS的命令行解析器模块cli，负责处理命令行参数为位置参数和命名选项
> CasperJS ships with a built-in command line parser on top of PhantomJS’ one, located in the cli module; it exposes passed arguments as positional ones and named options

例如

```js
// saved as test.js
var casper = require("casper").create();

casper.echo("Casper CLI passed args:");
require("utils").dump(casper.cli.args);

casper.echo("Casper CLI passed options:");
require("utils").dump(casper.cli.options);

casper.exit();
```

使用如下参数调用，其输出如下

```
$ casperjs test.js arg1 arg2 arg3 --foo=bar --plop anotherarg
Casper CLI passed args: [
    "arg1",
    "arg2",
    "arg3",
    "anotherarg"
]
Casper CLI passed options: {
    "casper-path": "/Users/niko/Sites/casperjs",
    "cli": true,
    "foo": "bar",
    "plop": true
}
```

当然在解析时可以**获取参数**、**检测参数**、**丢弃参数**

```js
var casper = require("casper").create();
casper.echo(casper.cli.has(0));
casper.echo(casper.cli.get(0));
casper.echo(casper.cli.has(3));
casper.echo(casper.cli.get(3));
casper.echo(casper.cli.has("foo"));
casper.echo(casper.cli.get("foo"));
casper.cli.drop("foo");
casper.echo(casper.cli.has("foo"));
casper.echo(casper.cli.get("foo"));
casper.exit();
```

使用如下参数调用，其输出如下

```
$ casperjs test.js arg1 arg2 arg3 --foo=bar --plop anotherarg
true
arg1
true
anotherarg
true
bar
false
undefined
```

### CasperJS原生选项

CasperJS命令有3个选项

1. --direct，输出详细信息，1.1版本之后已重命名为--verbose
2. --log-level=[debug|info|warning|error]设置[日志级别](http://docs.casperjs.org/en/latest/logging.html#logging)
3. **--engine=[phantomjs|slimerjs]设置使用的引擎，如果没有设置，则默认使用phantomjs**

此外CasperJS还可以使用PhantomJS所有标准选项，这时执行的脚本即为PhantomJS的脚本，例如

```
casperjs --web-security=no --cookies-file=/tmp/mycookies.txt myscript.js
```

### 原始参数值

cli模块默认会吧参数值解析并且转换成适合的数据类型，可以使用`casper.cli.raw.get('option_key')`获取未转换的原始参数值，例如

```js
var casper = require('casper').create();
var utils = require('utils');

utils.dump(casper.cli.get('foo'));
utils.dump(casper.cli.raw.get('foo'));

casper.exit();
```

执行及输出


```
$ casperjs c.js --foo=01234567
1234567
"01234567"
```


