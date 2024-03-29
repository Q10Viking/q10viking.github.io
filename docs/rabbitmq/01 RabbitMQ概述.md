---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /rabbitmq/
typora-root-url: ..\.vuepress\public
---

## 什么是 RabbitMQ？有什么显著的特点？

RabbitMQ 是一个开源的消息中间件，使用 Erlang 语言开发。这种语言天生非常适合分布式场景，RabbitMQ 也就非常适用于在分布式应用程序之间传递消息。RabbitMQ 有非常多显著的特点：

1. **消息传递模式**：RabbitMQ 支持多种消息传递模式，包括发布/订阅、点对点和工作队列等，使其更灵活适用于各种消息通信场景。
2. **消息路由和交换机**：RabbitMQ 引入了交换机（Exchange）的概念，用于将消息路由到一个或多个队列。这允许根据消息的内容、标签或路由键进行灵活的消息路由，从而实现更复杂的消息传递逻辑。
3. **消息确认机制**：RabbitMQ 支持消息确认机制，消费者可以确认已成功处理消息。这确保了消息不会在传递后被重复消费，增加了消息的可靠性。
4. **可扩展性**：RabbitMQ 是高度可扩展的，可以通过添加更多的节点和集群来增加吞吐量和可用性。这使得 RabbitMQ 适用于大规模的分布式系统。
5. **多种编程语言支持**：RabbitMQ 提供了多种客户端库和插件，支持多种编程语言，包括 Java、Python、Ruby、Node.js 等，使其在不同技术栈中都能方便地集成和使用。
6. **消息持久性**：RabbitMQ 允许消息和队列的持久性设置，确保消息在 RabbitMQ 重新启动后不会丢失。这对于关键的业务消息非常重要。
7. **灵活的插件系统**：RabbitMQ 具有丰富的插件系统，使其可以扩展功能，包括管理插件、数据复制插件、分布式部署插件等。
8. **管理界面**：RabbitMQ 提供了一个易于使用的 Web 管理界面，用于监视和管理队列、交换机、连接和用户权限等。

## AMQP

AMQP，即 **Advanced Message Queuing Protocol**（高级消息队列协议），是一个网络协议，是应用层协议的一个开放标准，为**面向消息的中间件设计**。**基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件不同产品，不同的开发语言等条件的限制**。

![image-20211030173159114](/images/RabbitMQ/image-20211030173159114.png)

RabbitMQ 和 AMQP 有着非常密切的关系，但是他们是属于完全不同的两个概念。

- AMQP： AMQP 不是一个具体的消息中间件产品，而是一个协议规范。他是一个开放的消息产地协议，是一种应用层的标准协议，为面向消息的中间件设计。AMQP 提供了一种统一的消息服务，使得不同程序之间可以通过消息队列进行通信。 SpringBoot 框架默认就提供了对 AMQP 协议的支持。
- RabbitMQ：RabbitMQ则是一个开源的消息中间件，是一个具体的软件产品。RabbitMQ 使用 AMQP 协议来实现消息传递的标准，但其实他也支持其他消息传递协议，如 STOMP 和 MQTT。RabbitMQ 基于 AMQP 协议定义的消息格式和交互流程，实现了消息在生产者、交换机、队列之间的传递和处理。

总之，AMQP 本质上是一个开放的标准，他不光可以被 RabbitMQ 实现，也可以被其他产品实现。通过这种标准的协议，实际上是可以在不同的消息中间件系统之间进行灵活的消息传递。只不过，目前具体实现这种标准的产品目前并不多，RabbitMQ 则是最有影响力的一个产品。因此，RabbitMQ 成了 AMQP 协议事实上的代表。**SpringBoot 框架默认提供的 AMQP 协议支持底层也是基于 RabbitMQ 产品实现的**。

## RabbitMQ介绍

[Messaging that just works — RabbitMQ](https://www.rabbitmq.com/)

2007年，Rabbit 技术公司基于 AMQP 标准开发的 RabbitMQ 1.0 发布。RabbitMQ 采用 Erlang 语言开发。Erlang 语言由 Ericson 设计，专门为开发高并发和分布式系统的一种语言，在电信领域使用广泛。

### 基础架构⭐

![image-20210422211414238](/images/RabbitMQ/image-20210422211414238.png)



### 基本概念

1. **Broker**：接收和分发消息的应用，RabbitMQ Server就是 Message Broker
2. **Virtual host**：出于多租户和安全因素设计的，把 AMQP 的基本组件划分到一个虚拟的分组中，类似于网络中的 namespace 概念。当多个不同的用户使用同一个 RabbitMQ server 提供的服务时，可以划分出多个vhost，每个用户在自己的 vhost 创建 exchange／queue 等
3. **Connection**：publisher／consumer 和 broker 之间的 TCP 连接
4. **Channel**：如果每一次访问 RabbitMQ 都建立一个 Connection，在消息量大的时候建立 TCP Connection的开销将是巨大的，效率也较低。Channel 是在 connection 内部建立的逻辑连接，如果应用程序支持多线程，通**常每个thread创建单独的 channel 进行通讯，AMQP method 包含了channel id 帮助客户端和message broker 识别 channel**，所以 channel 之间是完全隔离的。**Channel 作为轻量级的 Connection 极大减少了操作系统建立 TCP connection 的开销**
5. **Exchange**：message 到达 broker 的第一站，根据分发规则，匹配查询表中的 routing key，分发消息到queue 中去。常用的类型有：direct (point-to-point), topic (publish-subscribe) and fanout (multicast)
6. **Queue**：消息最终被送到这里等待 consumer 取走
7. **Binding**: exchange 和 queue 之间的虚拟连接，binding 中可以包含 routing key。**Binding 信息被保存到 exchange 中的查询表中，用于 message 的分发依据**

## 六大工作模式（消息模式）

RabbitMQ 提供了 6 种工作模式：简单模式、work queues、Publish/Subscribe 发布与订阅模式、Routing 路由模式、Topics 主题模式、RPC 远程调用模式（远程调用，不太算 MQ；暂不作介绍）。

官网对应模式介绍：https://www.rabbitmq.com/getstarted.html

![image-20210422225026111](/images/RabbitMQ/image-20210422225026111.png)



