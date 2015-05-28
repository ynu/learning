# 数组

## 概述

- 数组(array)是一个有序的值的集合
- 每个值叫做一个元素（element）
- 每个元素在数组中都有一个数字化的位置，叫做下标（index）

## 创建数组

- 使用直接量创建数组

    ```
    var empty = [];
    var primes = [2,3,5,7];
    var misc = [1.1, true, 'a'];
    ```

- 使用`new`创建数组

    ```
    var a = new Array();
    ```

## 数组元素的读写

- 使用`[]`运算符存取

    ```
    value = a[0];
    a[1] = 3.13;
    a[i + 1] = 4;
    ```

## 遍历数组

遍历数组最常见的方法是通过`Array`对象的`length`属性

```
var nums = [1,2,3,4];
for(var i = 0;i < nums.length; i++) {
    console.log(nums[i]);
}
```

## 多维数组

`a[0][1]`

## 数组的方法