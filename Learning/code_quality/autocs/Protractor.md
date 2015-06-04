## Protractor简介

Protractor 是 AngularJS 团队构建的一个端对端的测试运行工具，模拟用户交互，帮助你验证你的Angular应用的运行状况。

Protractor使用Jasmine测试框架来定义测试。Protractor为不同的页面交互提供一套健壮的API。

有其他的端对端工具，不过Protractor有着自己的优势，它知道怎么和AngularJS的代码一起运行，特别是面临$digest循环的时候。  

**Clone the github repository:**

    git clone https://github.com/angular/protractor.git
    cd protractor
    npm install

启动selenium服务，默认情况下,测试在http://localhost:4444/wd/hub运行selenium服务。

**运行测试：**

    npm start
    npm test