---
prev:
  text: Back To 目录
  link: /topicNav/
typora-root-url: ..\.vuepress\public
---

> 在了解Zookeeper之前，需要对分布式相关知识有一定了解，什么是分布式系统呢？通常情况下，单个物理节点很容易达到性能，计算或者容量的瓶颈，所以这个时候就需要多个物理节点来共同完成某项任务，一个分布式系统的本质是分布在不同网络或计算机上的程序组件，彼此通过信息传递来协同工作的系统，而Zookeeper正是一个分布式应用协调框架，在分布式系统架构中有广泛的应用场景。

官方文档上这么解释zookeeper，它是一个分布式协调框架，是Apache Hadoop 的一个子项目，它主要是用来解决分布式应用中经常遇到的一些数据管理问题，如：统一命名服务、状态同步服务、集群管理、分布式应用配置项的管理等。

1. 一个分布式系统的本质是**分布在不同网络或计算机上的程序组件**，彼此**通过信息传递来协同工作的系统**
2. Zookeeper正是一个**分布式应用协调框架**，在分布式系统架构中有广泛的应用场景。
   1. 统一命名服务
   2. 状态同步服务
   3. 集群管理
   4. 分布式应用配置项的管理等。

<img src="/images/zk/image-20210426150251724.png" alt="image-20210426150251724"  />

可以理解为 Zookeeper 是一个用于存储少量数据的**基于内存的数据库**，主要有如下两个核心的概念：文件系统数据结构+监听通知机制。

## 应用

1. 分布式配置中心

2. 分布式注册中心

3. 分布式锁

4. 分布式队列

5. 集群选举

6. 分布式屏障

7. 发布/订阅



### 统一命名服务

在分布式环境下，经常需要对应用/服务进行统一命名，便于识别。

例如：IP不容易记住，而域名容易记住。

![https://note.youdao.com/yws/public/resource/f0549278905bb988c831d6910c54143a/xmlnote/F2A8F7FA79634561A04A2EA2AB9A5347/45267](/images/zk/45267.png)



利用 ZooKeeper 顺序节点的特性，制作分布式的序列号生成器，或者叫 id 生成器。（分布式环境下使用作为数据库 id，另外一种是 UUID（缺点：没有规律）），ZooKeeper 可以生成有顺序的容易理解的同时支持分布式环境的编号

```sh
/
└── /order
    ├── /order-date1-000000000000001
    ├── /order-date2-000000000000002
    ├── /order-date3-000000000000003
    ├── /order-date4-000000000000004
    └── /order-date5-000000000000005
```



### 数据发布/订阅

数据发布/订阅的一个常见的场景是配置中心，发布者把数据发布到 ZooKeeper 的一个或一系列的节点上，供订阅者进行数据订阅，达到动态获取数据的目的。

配置信息一般有几个特点:

1. 数据量小的KV
2. 数据内容在运行时会发生动态变化
3. 集群机器共享，配置一致

ZooKeeper 采用的是推拉结合的方式。❤️

1. 推: 服务端会推给注册了监控节点的客户端 Watcher 事件通知
2. 拉: 客户端获得通知后，然后主动到服务端拉取最新的数据



### 负载均衡

在Zookeeper中记录每台服务器的访问数，让访问数最少的服务器去处理最新的客户端请求

![https://note.youdao.com/yws/public/resource/f0549278905bb988c831d6910c54143a/xmlnote/5D2F5F78BC28416EB449EC47B0310358/45265](/images/zk/45265.png)
