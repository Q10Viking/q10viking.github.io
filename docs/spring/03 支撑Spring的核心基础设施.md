---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /spring/
typora-root-url: ..\.vuepress\public
---







@PropertySources("classpath:spring.properties")



## FactoryBean

@Bean会经历完整的生命周期

FactoryBean包裹的bean则不会经历完整的生命周期，如不会经历初始化前，但是会经历初始化后，即AOP在这里处理，因为生成两个bean。真的Bean在FactoryBeanObjectCache,获取到FactoryBean是带有前缀&，如果没有，则会getBean出来，调用getObject(),然后进行缓存。

