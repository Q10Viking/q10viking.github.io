---
prev:
  text: Back To 目录
  link: /topicNav/
typora-root-url: ..\.vuepress\public
---



::: tip

Spring 源码分析

:one: [spring-framework(github.com)](https://github.com/spring-projects/spring-framework)

:two: [Spring | Home](https://spring.io/)

:::

```
./gradlew build
```



```
 A build scan was not published as you have not authenticated with server 'ge.spring.io'
```

```
Task :spring-core:compileJava FAILED
```

使用正确的JDK版本，按照官网的:one: [spring-framework(github.com)](https://github.com/spring-projects/spring-framework)的推荐，下载openjdk  [Adoptium - Open source, prebuilt OpenJDK binaries](https://adoptium.net/)

```sh
PS C:\Users\11930\Desktop> java -version
openjdk version "17.0.1" 2021-10-19
OpenJDK Runtime Environment Temurin-17.0.1+12 (build 17.0.1+12)
OpenJDK 64-Bit Server VM Temurin-17.0.1+12 (build 17.0.1+12, mixed mode, sharing)
```



## JAVA_HOME

```sh
# standard Windows command prompt
echo %JAVA_HOME%
# Powershell
echo $Env:JAVA_HOME
```



----------



## Spring的核心



1. Bean的生命周期底层原理
2. 依赖注入底层原理
3. 初始化底层原理
4. 推断构造方法底层原理
5. AOP底层原理
6. Spring事务底层原理





## bean声明周期： 

[Bean的生命周期源码流程图 | ProcessOn免费在线作图,在线流程图,在线思维导图 |](https://www.processon.com/view/5f748c817d9c0806f26104e3?fromnew=1)

[Spring系列文章 (yuque.com)](https://www.yuque.com/renyong-jmovm/spring)
