#HTML CSS BS  学习提纲2
## 概念
bootstrap是一个用于快速开发web应用程序和网站的前端架构，bootstrap是基于html css javasrcipt的。
## 特点
- 移动设备优先：框架包含了贯穿整个库的移动设备优先的样式
- 容易上手：具备了HTML css的基础知识，就可
- 响应式设计：Bootstrap的响应式CSS能够自适应于台式机、平板电脑和手机。
## 认识Bootstrap包的内容
- css
- javascript插件
- 基本结构：bootstrap提供了一个带有网格系统、链接样式、背景的基本结构
- 组件：可重用的组件，用于创建图像、导航等等
- 定制：定制自己的版本
**bootstrap.js是基于jQuery的，所以在引入bootstrap.js之前必须引入jQuery.js	**
##基础模板样式
各种需要的元素
`*bootstrap.min.js`
`bootstrap.min.css`
`bootstrap-responsive.css`
## bs基础
### bootstrap css
- 栅格系统
    -  容器(.container)、行、列，内容应该放置在列内，唯有列可以是行的直接子元素
    -  栅格参数 12列 
    - 偏移列offset
    - 列排序.col-md-push .col-*-pull(右 左)
 - 排版  ：标题 内联标题（`<small>`），列表效果等
 - 代码：`<code><pre>`开始和结束标签使用了unicode变体：`&lt和&gt`
 - 表格 `role="form"`
 - 按钮 可用标签有`<a><button><input>`设置类为`.btn`基类，在加上各种样式的类
 - 图片 `<img class="img-responsive"`
 - `.caret`
### bootstrap 布局组件
 - 字体图标
 - 下拉菜单 `data-toggle="dropdown"`
 - 按钮组
 - 按钮下拉菜单
 - 输入框组
 - 导航元素 胶囊式的导航菜单
 - 导航栏 响应式的导航栏`.navbar-collapse data-toggle="collapse"`导航栏中的表单：如搜索，固定导航栏：固定顶部和底部
 - 面包屑导航
 - 分页 `.pagination`
 - 标签 `.label `
 - 徽章 `.badges`,
 - 页面标题
 - 缩略图 `.thumbnail`
 - 警告 `.alert`
 - 进度条 `.progress`
 - 多媒体对象
 - 列表组
 - 面板
### bootstrap 插件
- 过度`tansition`
 -  轮播 旋转木马
 -  折叠
 -  弹出框
 -  工具提示`Tooltip`
 -  。。。
### 定制