"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[51831],{49744:(e,r,t)=>{t.r(r),t.d(r,{data:()=>o});const o={key:"v-f5f0cef0",path:"/RocketMQ/01%20RocketMQ%E7%BB%84%E4%BB%B6.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/RocketMQ/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"RocketMQ关键组件",slug:"rocketmq关键组件",children:[]},{level:2,title:"RocketMQ的集群架构是怎样的",slug:"rocketmq的集群架构是怎样的",children:[]},{level:2,title:"RocketMQ的Broker有三种集群模式",slug:"rocketmq的broker有三种集群模式",children:[]}],filePathRelative:"RocketMQ/01 RocketMQ组件.md"}},24633:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});const o=(0,t(20641).Fv)('<h2 id="rocketmq关键组件" tabindex="-1"><a class="header-anchor" href="#rocketmq关键组件" aria-hidden="true">#</a> RocketMQ关键组件</h2><p>RocketMQ由以下这几个组件组成</p><ul><li>NameServer : 提供轻量级的Broker路由服务。</li><li>Broker：实际处理消息存储、转发等服务的核心组件。</li><li>Producer：消息生产者集群。通常是业务系统中的一个功能模块。</li><li>Consumer：消息消费者集群。通常也是业务系统中的一个功能模块</li></ul><p><img src="/images/RocketMQ/B324F92B57AD.jpg" alt="image"></p><h2 id="rocketmq的集群架构是怎样的" tabindex="-1"><a class="header-anchor" href="#rocketmq的集群架构是怎样的" aria-hidden="true">#</a> RocketMQ的集群架构是怎样的</h2><ul><li>Name Server集群是RocketMQ的一种轻量级的服务节点，<strong>负责注册和管理Broker的服务地址</strong>，提供服务的注册和发现功能。每个Broker节点都要跟所有的Name Server节点建立长连接，定义注册Topic路由信息和发送心跳。每个 NameServer 节点都会保存完整的 Broker 列表数据，并且 NameServer 个个节点之间不会同步数据。因此，NameServer 集群不会因为单个节点发生故障而停止服务。</li><li>Broker 是 RocketMQ 的核心组件，负责存储和传输消息。一个 RocketMQ 集群通常包含多个 Broker 实例，共同协作来提高 RocketMQ 的可用性和吞吐量。其中，Master Broker，主节点，负责处理客户端的请求，并将消息存储到磁盘上，然后将消息同步复制给所有的从节点。而从节点，是Master Broker 的消息备份。</li><li>客户端包含 Producer 生产者和 Consumer 消费者。其中，Producer 负责将消息发送给 Broker。Producer 可以将消息发送到指定的 Topic，RocketMQ 会负责将消息存放到对应的 Broker 上。Consumer 可以订阅一个或多个 Topic，并从对应的 Broker 上接收消息进行处理。RocketMQ 的客户端提供了多种处理消息的方式，比如延迟消息、事务消息、集群消息、广播消息等。</li></ul><h2 id="rocketmq的broker有三种集群模式" tabindex="-1"><a class="header-anchor" href="#rocketmq的broker有三种集群模式" aria-hidden="true">#</a> RocketMQ的Broker有三种集群模式</h2><ol><li>单Master模式：只有一个Master节点，其他都是Slave节点。Master节点负责响应客户端的请求并存储消息，Slave节点只同步Master节点的消息，也会响应部分客户端的读请求。这种模式的优点是简单易部署，但是存在单点故障的问题，如果Master节点宕机，会导致整个服务不可用。</li><li>Master-Slave模式（经典双集群部署）：一个Master节点对应多个Slave节点，Master和Slave都是独立的NameServer。Master节点负责响应客户端请求并存储消息，Slave节点只同步Master节点的消息，也会响应部分客户端的读请求。这种模式的优点是高可用性，即使Master节点宕机，Slave节点可以自动升级为Master节点，继续提供服务。但是，如果只有一个Master节点，存在单点故障的问题。</li><li>Dledger模式（高可用集群部署）：在Master-Slave模式的基础上增加了Raft协议，实现了自动脑裂后的数据高可靠性。即使某个节点从网络上掉下来或者宕机后，仍然能够保证所有的消息不会丢失。这种模式的优点是高可用性和高可靠性，即使某个节点出现故障，也能保证服务的可用性。</li></ol>',8),a={},l=(0,t(66262).A)(a,[["render",function(e,r){return o}]])},66262:(e,r)=>{r.A=(e,r)=>{const t=e.__vccOpts||e;for(const[e,o]of r)t[e]=o;return t}}}]);