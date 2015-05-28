# for 语句

```
for(initialize; test; increment)
    statement
```

- 基本的循环语句，运行程序执行重复的动作
- for循环开始前，程序先执行`initialize`语句，对循环变量进行初始化
- 初始化完成后，程序计算`test`表达式，如果结果为`true`则执行`statement`语句，否则循环结束
- `statement`语句执行完成后，程序执行`increment`语句，计算循环变量的新值
- 程序再次计算`test`表达式的值，以决定是再次执行`statement`语句还是结束循环
- 示例

    ```
    // 输出1到100的数字
    for(var i = 0; i < 100; i++) {
        console.log(i +  1);
    }
    ```

## break 和 continue

- `break` 会使程序立即退出当前循环
- `continue`会使程序提前结束当前`statement`，转向下一次迭代
- 示例

    ```
    // 输出1到50的数字，但不包括30
    for(var i = 1; i < 100; i++) {
        if(i == 30) continue;
        if(i > 50) break;
        console.log(i);
    }
    ```