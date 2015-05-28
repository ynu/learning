# 对象

## 创建对象

- 使用对象直接量创建对象

    ```
    var empty = {}
    var point = {x:0, y:0};
    ```

- 使用`new`关键字创建对象

    ```
    var a = new Array();
    var b = new Date();
    ```

## 对象属性

- 通常使用`.`运算符来存取对象的属性

    ```
    var book = { title: ''};
    book.title = 'JavaScript';
    book.author = 'Jack Brown';
    console.log(book.title);
    ```

- 使用`[]`运算符存取对象的属性

    ```
    book['title'] = 'JavaScript 2';
    ```

- 属性的枚举

    ```
    var names = '';
    for(var name in obj) names += name + '\n';
    console.log(names);
    ```

- 检查属性的存在性

    ```
    if('x' in o) o.x = 1;
    if(o.x !== undefined) o.x = 1;
    ```

- 删除属性 `delete book.author`

## 通用的Object属性和方法
