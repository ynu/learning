# 标识符和保留字


## 标识符

- 标识符就是一个名字，用来对变量和函数进行命名
- JavaScript标识符必须以字母、下划线（_）或美元符（$）开始
- 后续的字符可以是字母、数字、下划线或美元符（数字是不允许作为首字符出现的）
- 一些合法的标识符
    - i
    - my_variable_name
    - v13
    - _dummy
    - $str

- 允许标识符中出现Unicode字符全集中的字母和数字
    ```
    var sí = true;
    var π = 3.14;
    ```

- 出于可移植性和易于书写的考虑，通常我们只使用ASCII字母和数字来书写标识符

## 保留字

- JavaScript把一些标识符拿出来用做自己的关键字
- 不能再在程序中把这些关键字用做标识符
    ```
    break delete  function return  typeof
    case  do  if switch var
    catch  else  in this void
    continue false  instanceof  throw  while
    debugger  finally  new  true  with
    default for null  try
    ```

- JavaScript同样保留了一些关键字，这些关键字在当前的语言版本中并没有使用，但在未来版本中可能会用到

    ```
    class  const  enum  export  extends  import  super
    ```

- JavaScript预定义了很多全局变量和函数，应当避免把它们的名字用做变量名和函数名
    ```
    arguments  encodeURI  Infinity  Number  RegExp
    Array  encodeURIComponent  isFinite  Object  String
    Boolean  Error  isNaN  parseFloat  SyntaxError
    Date  eval  JSON  parseInt  TypeError
    decodeURI  EvalError  Math  RangeError  undefined
    decodeURIComponent Function  NaN  ReferenceError URIError
    ```