## WebDriver

### WebDriver简介

WebDriver就是基于Selenium的一个自动化测试类库，但它不再是运行在浏览器内的JS程序，而是自己可以控制浏览器。旨在改进Selenium1.0中出现的诸多问题，并且提供了非常易用、可读性很强的API。

### WebDriver有以下几种浏览器驱动器：

**HtmlUnit Driver：**
速度最快；平台独立；支持JavaS次日平台；
不是图形化的，即你无法在浏览器中看到页面元素被点击的过程；
其JavaScript引擎是Rhino，与主流浏览器的均不同（Chrome V8, Safari Nitro, FF TraceMonkey...），因此JavaScript执行结果可能稍微不同。

而另外三种**FireFox Driver**、**Internet Explorer Driver**和**Chrome Driver**都可在真正的浏览器中运行，因此是可视化的；并且支持JavaScript；只是运行速度较慢。