# jQuery的下载和使用

## 下载jQuery

jQuery共有两个版本可供下载：一份是精简版的（作为生产使用），另一份是未压缩的（供调试和阅读）。  
两个版本都可以在[官网](http://jquery.com/download/)下载。
  
## 添加jQuery库

jQuery的使用特别简单，只需将js库文件引入到**&lt;script>**标签即可。具体变现为下面两种方式：  

- 本地添加  
    jQuery 库位于一个 JavaScript 文件中，可以通过下面的标记把 jQuery 添加到网页中：  
    `<head>`  
    `<script href="JavaScript/jquery.min.js"></script>`  
    `</head>`
    

- 通过CDN应用，谷歌和微软的服务器都存有jQuery:  
    `<head>`  
    ```<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs
     /jquery/1.4.0/jquery.min.js"></script>```  
     `</head>`  

*请注意，&lt;script>标签应该位于页面的&lt;head>部分。*

[返回目录](../README.md)  
[下一节](../selector/README.md)
