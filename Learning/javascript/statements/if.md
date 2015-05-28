# if 语句

if语句是最基本的控制语句，它使得程序可以有条件地执行语句。

## 基本形式

```
if( expression )
    statement
```

- `expression`是要被计算的表达式，如果计算结果是`true`则执行`statement`，如果执行结果为`false`则不执行
- `statement`可以是任何类型的语句
- 示例

    ```
    if((address == null) || (address == "")) {
        address = 'undefined';
        alert('Please specify a mailing address.');
    }
    ```

## if...else 语句

```
if( expression )
    statement1
else
    statement2
```

- 如果 `expression` 的计算结果是`true`则执行`statement1`，否则执行`statement2`
- 示例

    ```
    if((address == null) || (address == "")) {
        address = 'undefined';
        alert('Please specify a mailing address.');
    } else {
        alert('Your address is ' + address);
    }
    ```

## if ... else if 语句

```
if( expression1 )
    statement1
else if ( expression2 )
    statement2
```
如果 `expression1` 的计算结果是`true`则执行`statement1`，否则计算`expression2`，如果执行`expression2`的结果为`true`则执行`statement2`。


## 完整形式

```
if( expression1 )
    statement1
else if ( expression2 )
    statement2
...
else if ( expressionN )
    statementN
else
    statementM
```


