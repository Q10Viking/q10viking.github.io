---
prev:
  text: Back To 目录
  link: /topicNav/
typora-root-url: ..\.vuepress\public
---



![img](/images/designpattern/epub_41787798_7.png)



## 依赖倒置原则（Dependency Inversion Principle ）

假设我们设计一辆汽车：先设计轮子，然后根据轮子大小设计底盘，接着根据底盘设计车身，最后根据车身设计好整个汽车。这里就出现了一个“依赖”关系：汽车依赖车身，车身依赖底盘，底盘依赖轮子

<img src="/images/designpattern/image-20210328145143029.png" alt="image-20210328145143029" />

上图看上去没有什么毛病?但是 万一轮胎尺寸改了,那么地盘需要改，地盘改了，车身也改了，让后整个汽车构造都改了.
然后汽车公司倒闭了......................

董事长依赖总经理争取，总经理依赖部门经理挣钱，部门经理依赖员工争取，那么员工离职了怎么
办？？？？？？？？？？？？？？？？？？？？？

反过来.............................假如汽车公司决定修改轮胎的 我们就只需要改动轮子的设计，而不需要动底盘，车身，汽车
的设计了。

<img src="/images/designpattern/image-20210328145225638.png" alt="image-20210328145225638" />

### 1.1 IOC核心思想

资源不由使用资源的双方管理，而**由不使用资源的第三方管理****，这可以带来很多好处

1. 资源集中管理，实现资源的可配置和易管理。
2. 降低了使用资源双方的依赖程度，也就是我们说的耦合度

<img src="/images/designpattern/image-20210328145415502.png" alt="image-20210328145415502"  />





## 资源

### 设计模式的艺术

[配书籍代码](https://github.com/zzk123/design_patterns)

[设计模式的艺术](https://weread.qq.com/web/reader/c4032270727da196c40104ak16732dc0161679091c5aeb1)

[相关博客](https://zzk123.github.io/design/001_Preface.html#%E5%88%86%E7%B1%BB)

----------

### 设计模式之禅

[github 代码](https://github.com/nivance/DPModel)



### springboot结合设计模式

[springboot结合设计模式github](https://github.com/kobeyk/SpringBoot-DesignMode/tree/v0.1.2)

[springboot结合设计模式gitee](https://gitee.com/appleyk/SpringBoot-DesignMode/tree/v0.1.2/)
