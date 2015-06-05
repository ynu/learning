# jQuery能做什么


## 取得文档中的元素

`$('div.content').find('p')`  

如果使用js的原生代码遍历DOM树以及查找HTML文档结构的某个部分，必须写很多代码。

## 修改页面外观

`$('ul>li:first').addClass('active')`

弥补了CSS对所有浏览器不完全支持的缺陷，并且能在页面呈现之后进行样式的修改。

## 改变文档的内容

`$('#container').append('<a href="more.html">more</a>')`
  
使用少量的代码就能改变文档的内容。

## 响应用户的交互操作

`$('button.show-details').click(function(){  
    $('div.details').show();
})`

jQuery提供了截获页面事件的适当方式，而不需要使用事件处理程序拆散HTML代码，还解决了浏览器不一致性的问题。

## 为页面添加动态效果

`$('div.details').slideDown()`

jQuery中内置了一批淡入，擦出之类的效果，以及制作新效果的工具包，为此提供了便利。

## 无需刷新页面从服务器获取信息

`$('div.details').load('more.html #content')`

这种编程模式就是众所周知的AJAX，它是一系列在客户端和服务器之间传输数据的强大技术。  

[返回目录](../README.md)  
[下一节](advantage.md)