# CSS选择符

jQuery支持CSS规范1到规范3中的几乎所有选择符，具体内容可以参考[W3C网站](http：//www.w3.org/Style/CSS/specs)。这使得开发者在增强自己的网站时，不必为哪种浏览器可能会不理解高级选择符而担心，只要该浏览器启用了JavaScript就没问题了。

## 三种基本的选择符

**标签名**、**ID**和**类**，这三个基本的选择符可以单独使用，也可以与其他选择符组合使用。

<table>
    <tr>
        <td><b>选 择 符</b></td>
        <td><b>CSS</b></td>
        <td><b>jQuery</b></td>
        <td><b>说明</b></td>
    </tr>
    <tr>
        <td>TagName</td>
        <td>P{}</td>
        <td>$('p')</td>
        <td>取得文档的所有段落</td>
    </tr>
    <tr>
        <td>ID</td>
        <td>#some-id{}</td>
        <td>$('#some-id')</td>
        <td>取得文档中ID为some-id的一个元素</td>
    </tr>
    <tr>
        <td>Class</td>
        <td>.some-class{}</td>
        <td>$('.some-class')</td>
        <td>取得文档中类为some-class的所有元素</td>
    </tr>
</table>　　

## 给予列表项的级别添加样式

```
$(document).ready(function(){
    $('#listTable > li').addClass('liParent');
});
```

代码中使用$(document).ready()，位于其中的所有代码都会在DOM加载后立即执行。  
第二行代码使用**子元素组合符（>）**将liParent类只添加到位于顶级的项中。实际上，位于$()函数中的选择符的含义是，查找是ID为listTable的元素（#listTable）的**子元素**（注意是子元素不是后代元素）中所有的列表项（li）。

```
例如原代码为：  
<ul id = 'listTable'>
    <li>listParent1
        <ul>
            <li>....</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </li>
</ul>
<ul id = 'listTable'>
    <li>listParent2
        <ul>
            <li>....</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </li>
</ul>
<ul id = 'listTable'>
    <li>listParent3
        <ul>
            <li>....</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </li>
</ul>
```

```
修改后的代码为：  
<ul id = 'listTable'>
    <li class = 'listParent'>listParent1
        <ul>
            <li>....</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </li>
</ul>
<ul id = 'listTable'>
    <li class = 'listParent'>listParent2
        <ul>
            <li>....</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </li>
</ul>
<ul id = 'listTable'>
    <li class = 'listParent'>listParent3
        <ul>
            <li>....</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </li>
</ul>
```

要为其他项（非顶级项）添加样式，有很多种方式。因为已经为顶级项添加了listParent类，所以取得全部非顶级项的一种方式，就是使用否定是伪类选择符来识别没有listParent类的所有列表。代码如下：  


```
$(document).ready(function(){
    $('#listTable li:not(.listParent)').addClass('sub-level');
});
```

这次取得的每个列表项（`<li>`）:  
1. 是ID为listTable的元素的后代元素。
2. 没有listParent类(:not(.listParent))。

```
修改后的代码为：  
<ul id = 'listTable'>
    <li class = 'listParent'>listParent1
        <ul>
            <li class = 'sub-level'>....</li>
            <li class = 'sub-level'>....</li>
            <li class = 'sub-level'>....</li>
        </ul>
    </li>
</ul>
<ul id = 'listTable'>
    <li class = 'listParent'>listParent2
        <ul>
            <li class = 'sub-level'>....</li>
            <li class = 'sub-level'>....</li>
            <li class = 'sub-level'>....</li>
        </ul>
    </li>
</ul>
<ul id = 'listTable'>
    <li class = 'listParent'>listParent3
        <ul>
            <li class = 'sub-level'>....</li>
            <li class = 'sub-level'>....</li>
            <li class = 'sub-level'>....</li>
        </ul>
    </li>
</ul>
```

## 属性选择符

**属性选择符**是CSS选择符中特别有用的一类。顾名思义，属性选择符通过HTML元素属性选择元素，例如链接title属性或者图像的alt属性。例如，要选择带有alt属性的所有图像元素，可以使用如下代码：  
`$('img[alt]')`

属性选择符使用一种从正则表达式中借鉴来的通配符语法，以`^`表示值在字符串的开始，以`$`表示值在字符串的结尾。用星号`*`表示要匹配的值可以出现在字符串中的任意位置，用叹号`!`表示对值取反。

```
eg:
$(document).ready(function(){
    $("a[href ^= 'mail:']").addClass('mail');
    //寻找所有带href属性（[href]）且以mail开头（^="mail:"）的锚元素（a）。
    $("a[href $= '.pdf']").addClass('pdfLink');
    //选择所有href属性以.pdf结尾的链接。
    $("a[href *= 'word']").addClass('doc');
    //选择href属性任意位置包含word的所有链接。
});
```

[返回目录](../README.md)  
[下一节](Atrselector.md)

### 下面是来自w3c菜鸟的教程，可以通过实例演示体会各个选择器的用法。  

<table>
    <tr>
        <th width="25%" align="left">语法</th>
        <th width="65%" align="left">描述</th>
        <th width="10%" align="left">实例</th>
    </tr>
    <tr>
        <td>$("*")</td>
        <td>选取所有元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_all2">在线实例</a></td>
    </tr>
    <tr>
        <td>$(this)</td>
        <td>选取当前 HTML 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_this">在线实例</a></td>
    </tr>
    <tr>
        <td>$("p.intro")</td>
        <td>选取 class 为 intro 的 &lt;p&gt; 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_pclass">在线实例</a></td>
    </tr>
    <tr>
        <td>$("p:first")</td>
        <td>选取第一个 &lt;p&gt; 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_pfirst">在线实例</a></td>
    </tr>
    <tr>
        <td>$("ul li:first")</td>
        <td>选取第一个 &lt;ul&gt; 元素的第一个 &lt;li&gt; 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_ullifirst">在线实例</a></td>
    </tr>
    <tr>
        <td>$("ul li:first-child")</td>
        <td>选取每个 &lt;ul&gt; 元素的第一个 &lt;li&gt; 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_ullifirstchild">在线实例</a></td>
    </tr>
    <tr>
        <td>$("[href]")</td>
        <td>选取带有 href 属性的元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_hrefattr">在线实例</a></td>
    </tr>
    <tr>
        <td>$("a[target='_blank']")</td>
        <td>选取所有 target 属性值等于 "_blank" 的 &lt;a&gt; 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_hrefattrblank">在线实例</a></td>
    </tr>
    <tr>
        <td>$("a[target!='_blank']")</td>
        <td>选取所有 target 属性值不等于 "_blank" 的 &lt;a&gt; 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_hrefattrnotblank">在线实例</a></td>
    </tr>
    <tr>
        <td>$(":button")</td>
        <td>选取所有 type="button" 的 &lt;input&gt; 元素 和 &lt;button&gt; 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_button2">在线实例</a></td>
    </tr>
    <tr>
        <td>$("tr:even")</td>
        <td>选取偶数位置的 &lt;tr&gt; 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_even">在线实例</a></td>
    </tr>
    <tr>
        <td>$("tr:odd")</td>
        <td>选取奇数位置的 &lt;tr&gt; 元素</td>
        <td><a target="_blank" class="tryitbtn" style="width:55px;padding-top:0px;padding-bottom:1px"
               href="/try/try.php?filename=tryjquery_sel_odd">在线实例</a></td>
    </tr>
</table>