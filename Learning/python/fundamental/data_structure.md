# Python 数据结构

### 基本数据结构/内置数据类型

> The principal built-in types are numerics, sequences, mappings, classes, instances and exceptions.

主要的内置数据类型包括

- 数值类型
- 序列类型
- 映射类型
- 类类型
- 实例类型
- 异常类型

详细可参考[Built-in Types](https://docs.python.org/3.4/library/stdtypes.html)

### 数值类型

数值类型包括`int`、`float`、`complex`三种类型，分别表示整数类型、浮点类型、复数类型。其中整数类型是的精度是没有限制的；浮点类型的精度与具体的机器环境有关（可通过`sys.float_info`查看）；复数类型的实部和虚部都是float类型。

不同数值类型混合操作时会向范围更广的数值类型转换，数值类型范围`int<float<complex`，例如`1+2.0=3.0`

Python3把Python2的long合并到int中

### 序列类型

序列类型包括list、tuple、range。其中list是可变的（mutable），tuple、range是不可变的（immutable）；list用[]表示，tuple用()表示，range表示一组数值，通常用在for循环中。

```python
>>> list(range(10))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> list(range(1, 11))
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
>>> list(range(0, 30, 5))
[0, 5, 10, 15, 20, 25]
>>> list(range(0, 10, 3))
[0, 3, 6, 9]
>>> list(range(0, -10, -1))
[0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
>>> list(range(0))
[]
>>> list(range(1, 0))
[]
```

除此之外，还包括

- [文本序列类型 — str](https://docs.python.org/3.4/library/stdtypes.html#text-sequence-type-str)
- [二进制序列类型 — bytes, bytearray, memoryview](https://docs.python.org/3.4/library/stdtypes.html#binary-sequence-types-bytes-bytearray-memoryview)
- [Set类型 — set, frozenset](https://docs.python.org/3.4/library/stdtypes.html#set-types-set-frozenset)

Set的例子

```python
>>> basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
>>> print(basket)                      # show that duplicates have been removed
{'orange', 'banana', 'pear', 'apple'}
>>> 'orange' in basket                 # fast membership testing
True
>>> 'crabgrass' in basket
False
>>> # Demonstrate set operations on unique letters from two words
...
>>> a = set('abracadabra')
>>> b = set('alacazam')
>>> a                                  # unique letters in a
{'a', 'r', 'b', 'c', 'd'}
>>> a - b                              # letters in a but not in b
{'r', 'd', 'b'}
>>> a | b                              # letters in either a or b
{'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
>>> a & b                              # letters in both a and b
{'a', 'c'}
>>> a ^ b                              # letters in a or b but not both
{'r', 'd', 'b', 'm', 'z', 'l'}

```

Python3中的str是Unicode的，Python2中的str可以用byte类型来代替

### 映射类型

映射类型主要就是dict，dict就是保存键值对的数据结构

```python
>>> a = dict(one=1, two=2, three=3)
>>> b = {'one': 1, 'two': 2, 'three': 3}
>>> c = dict(zip(['one', 'two', 'three'], [1, 2, 3]))
>>> d = dict([('two', 2), ('one', 1), ('three', 3)])
>>> e = dict({'three': 3, 'one': 1, 'two': 2})
>>> a == b == c == d == e
True
```