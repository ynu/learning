## Expect

### Expect简介

Expect支持Unix/Linux平台，还支持Windows平台，它就是为系统管理和软件测试方面的自动交互类需求而产生的。

Expect是一个免费的编程工具语言，用来实现自动和交互式任务进行通信，而无需人的干预。

### Expect定义

Expect的作者Don Libes在1990年开始编写Expect时对Expect做有如下**定义**：

Expect是一个用来实现自动交互功能的软件套件(Expect [is a] software suite for automating interactive tools)。

### Expect语法

Expect语言是基于Tcl的，作为一种脚本语言，Tcl具有简单的语法：

    - cmd arg arg arg    
   一条Tcl命令由空格分割的单词组成。其中,第一个单词是命令名称,其余的是命令参数。  

    - $foo    
$符号代表变量的值。 在本例中,变量名称是foo。  

    - [cmd arg]    
方括号执行了一个嵌套命令。例如, 如果你想传递一个命令的结果作为另外一个命令的参数, 那么你使用这个符号。

    - "some stuff"    
双引号把词组标记为命令的一个参数。"$"符号和方括号在双引号内仍被解
释。

    - {some stuff}    
大括号也把词组标记为命令的一个参数。但是,其他符号在大括号内不被解释。    

反斜线符号()是用来引用特殊符号。例如：n代表换行。反斜线符号也被用来关闭"$"符号,引号,方括号和大括号的特殊含义。