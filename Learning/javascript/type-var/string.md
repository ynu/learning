# 文本

## 字符串直接量

- 由单引号或双引号括起来的字符序列
    - "" //空字符串：它包含0个字符
    - 'testing'
    - "3.14"
    - 'name="myform"'
    - "Wouldn't you prefer O'Reilly's book?"
    - "This string\nhas two lines"

## 转义字符

反斜线(\)有着特殊的用途，反斜线符号后加一个字符，就不再表示它们的字面含义了

一些转义字符示例：
- \n // 换行符
- \\ // 字符“\”
- 'You\'re right, it can\'t be a quote' // You're right, it can't be a quote

## 字符串的使用

- 运算符
    - “+” // 'hello,'+'world' === 'hello,world'，连接两个字符串
- String 对象

## 模式匹配

一些正则表达式示例：
- /^HTML/ //匹配以HTML开始的字符串
- /[1-9][0-9]*/ // 匹配一个非零数字，后面是任意个数字
- /\bjavascript\b/i // 匹配单词"javascript"，忽略大小写
