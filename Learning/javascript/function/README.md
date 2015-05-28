# 函数

函数是定义一次但却可以调用或执行任意多次的一段代码。
函数常常使用一些参数来计算一个返回值，就像数学里的函数一样：`f(x) = ax + b`

## 函数的定义和调用

使用function 语句定义函数

```
function funcname(arg1, arg2,...argn) {
    statements
}
```

- `funcname`是要定义的函数名，它是一个标识符
- 函数可以没有函数名，称为匿名函数
- 函数名后使用`()`表示的参数列表，参数可以是0个或多个，参数之间用`,`分隔
- 函数体由一组语句构成
- 函数由`return`语句返回
- 示例

    ```
    function welcome(){
        console.log('welcome!');
    }
    function factorial(n){
        if ( n <= 1) return 1;
        return n * factorial(n - 1);
    }
    var f = function(x){ return x * x; };
    ```

使用`()`操作符调用函数

```
welcome();
var n2 = factorial(3);
console.log(f(4));
```
## 函数参数

本节讨论函数的参数

### 可选参数
当调用函数时传递的参数少于函数定义的参数时，其他参数就有一个`undefined`的值

### 可变长度的参数列表

在一个函数体内，`arguments`标识符具有特殊意义，通过它可以引用传递给函数的所有参数

- 使用`length`属性获得传入参数的数量

- 使用`[]`运算符获取具体位置的参数的值

- 使用`callee`属性获取正在执行的函数的引用