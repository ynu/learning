# HTML DOM

jQuery最强大的特性之一就是他能狗简化在DOM中选择元素的任务。DOM（Document Object Model，文档对象类型）充当了JavaScript与网页之间的接口；  
他以对象网络而非纯文本的形式变现HTML的源代码。

DOM中的对象网络与家谱有几分类似。当我们提到网络中元素之间的关系时，会使用类似描述家庭关系的术语，比如父元素、子元素，等等。下面看一个简单  
的例子，可以帮着我们理解文档元素构成的树形结构：  

```html
<html>
    <head>
        <title>文档标题<title>
    </head>
    <body>
        <h1>我的标题</h1>
        <a href="#">我的链接</a>
    </body>
</html>
```

这里html是其他所有元素的祖先元素，head和body元素是html的子元素。而h1和a元素是同辈元素，也是body和html的后代元素，这些关系可以从下图清楚的看出。

![dom](ct_htmltree.gif)

##注意

有了这个元素树，我们就可以使用jQuery从中取得任何元素了。需要注意的是，我们所取得的结果集合始终都会被包装在**jQuery**对象中。这样就可以轻松地为jQuery对象绑定事件、添加特效、**连缀**使用。

[返回目录](../README.md)  
[下一节](function$.md)