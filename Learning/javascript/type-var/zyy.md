# 作用域

- 一个变量的作用域（scope）是程序源代码中定义这个变量的区域
- 全局变量拥有全局作用域，在JavaScript代码中的任何地方都是有定义的
- 在函数内声明的变量只在函数体内有定义，是局部变量
- 函数参数也是局部变量，只在函数体内有定义

示例：
```
var scope = "global";  // 声明一个全局变量
function checkscope() {
 var scope = "local";  // 声明一个同名的局部变量
 return scope;   // 返回局部变量的值，而不是全局变量的值
}
checkscope()    // => "local"
```