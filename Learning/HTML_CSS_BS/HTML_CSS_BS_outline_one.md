# HTML CSS BS 学习提纲1
## HTML
### HTML基础
- 概念
- 网页=HTML文档
   - 组成部分： 整体  头部  主体 
- 标签
    常用标签
      - 链接、锚
      - 图像、图像地图
      - 表格：边框、表头、单元格等
      - 列表：有序列表，无序列表，自定义列表
- 块元素、内联元素
- 表单：可接受的输入类型用`type`定义：类型有：
   - `text`
   - `radio`
   - `checkboxs`
   - `submit`
   表单的动作属性，`action和method`
- 框架、内联框架`<iframe>`
- 属性 
   - 样式 style（行内样式inline style）
   - class 类名
   - id 唯一标识
   - 其它属性
- 注释 `<!-- this is a comment-->`
### HTML进阶
- 文档声明
- 头部内容。`<head>`内的元素包括脚本等等
      1.`<title>`标题
      2.`<meta>`文档描述。元数据
      3.`<link>`定义文档与外部资源之间的关系
      4.`<style>`定义样式表信息
      5.`<script>`定义客户端脚本。如`javascript`
      6.`<base>`为页面上的所有链接规定默认地址或默认目标(target="_blank")
- 脚本`<script>`标签用于定义客户端脚本
- 字符实体`&nbsp`，取义字符.
### THML DOM
文档对象模型(DOM)、树形结构
- DOM概念
 **HTML DOM 定义了所有HTML元素的对象和属性，以及访问它们的方法。换言之，HTML DOM是关于如何获取、修改、添加或删除HTML元素的标准**
- DOM节点  
**HTML DOM树中的所有节点均可通过javascript进行访问，所有HTML元素（节点）均可被修改，也可被创建和删除**
- DOM方法**getElementById()方法**
- DOM属性 **innerHTML属性**
- DOM访问
   - 通过使用getElementById()方法
   - 通过使用getElementByTagName()方法
   - 通过使用getElementByClassName()方法
- DOM修改
  修改HTML DOM包括：
     - 改变HTML内容
     - 改变CSS样式
     - 改变HTML属性
     - 创建新的HTML元素
     - 删除已有的HTML元素
     - 改变事件（处理程序）
- DOM内容
THML DOM允许javascript对HTML事件作出反应，HTML事件的例子：
   - 当用户点击鼠标时
   - 当页面已加载时
   - 当图片已加载时
   - 当鼠标移动到元素上时
   - 当输入字段被改变时
   - 当THML表单被提交时
   - 当用户触发按键时
- DOM导航 **节点列表**：`getElementByTagName()`方法返回节点列表，节点列表是一个节点数组，数组的下标从0开始
### HTML5
-  HTML5 产生
-  语义标签
- 视频、音频
- 画布
- 拖放事件
- 地理位置API
- html5本地存储
    - localStorage- 没有时间限制的数据存储
    - sessionStorage-针对一个session的数据存储   
- 离线应用  缓存清单文件 `manifest`文件
- 表单的新的Input类型：
  - `email`
  - `url`
  - `number`
  - `range`
  - `Date month week time datetime datetime-local`
  - `search`
  - `color`
  - `datalist` 
 - `keygen` 
 - `output` 
- HTML5的新的表单属性：
   - novalidate="true"
   - required="required"
   - autocomplete
   - list
   - placeholder 
   - required
   - id 属性可以让表单元素不一定要放在`<form>`标签中，通过form="id"关联起来
- 安全的跨源通信
- 强大的websocker双向通信
## CSS
- 概念
css是层叠样式表（Cascading Style Sheets），解决内容与表现分离的问题，外部样式表通常存储在CSS文件中。
- 插入样式表的方法
   - 外部样式
   - 内部样式表：在头部中定义
   - 内联样式
  **三种样式的优先级**
- CSS语法
两个主要的部分构成：**选择器，以及一条或多条声明**，声明之间用分号分开，每个声明中使用冒号来分开属性和值。
**每条声明有一个属性和一个值组成**
- 选择器的种类
   - 分组选择器
   - 派生选择器 
       - 后代选择器（包含选择器）
       - 子元素选择器 
       - 相邻兄弟选择器 
   - id选择器：
   - 类选择器：
   - 属性选择器：  
- 伪类选择器
如链接的四种状态：
  - a:link 普通的、未被访问的链接
  - a:visited- 用户已访问的链接
  - a:hover -鼠标位于链接的上方
  - a:active -链接被点击的时刻
- css的盒模型：element、padding、border、margin
- css定位（positioning）
     - static
     - relative
     - absolute
     - fixed
     **css 浮动**`float:`
### CSS 3
- 多列布局
- 新增的属性选择器
  - 结构伪类：`:last-child :first-child`
     - `nth-child`选择器：`nth-child(n) :nth-last-child(n) nth-of-type(n) nth-last-of-type(n)`
     - 否定选择器`:not`
     - 伪元素选择符 
 - 自定义的网页字体：`@font-face`
- 色彩模式 
- 美化效果
  - 文字效果：阴影、描边、发光，艺术字等
  -  盒阴影`box-shadow`，内阴影`box-shadow:inset`
  - 渐变背景`linear-gradient`,`radial-gradient`
  - 边框
- css3过度、变形和动画
  - 过度`transition`
  - 2D变换 `transform:`
     - scales  缩放
     - translate 移动
     - rotate 旋转
     - skew 斜切
     - matrix  精确地控制变形
     - `transform-origin`
- 3D变形
- 动画效果 `@keyframe animation`
## Bootstrap
### **bootstrap插件全部依赖jQuery，因此jQuery必须在Bootstrap之间引入。**
