"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[88064],{16225:(t,i,r)=>{r.r(i),r.d(i,{data:()=>e});const e={key:"v-148480e0",path:"/Ribbon/",title:"",lang:"zh-CN",frontmatter:{prev:{text:"Back To 目录",link:"/topicNav/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"什么是Ribbon",slug:"什么是ribbon",children:[{level:3,title:"客户端负载均衡",slug:"客户端负载均衡",children:[]},{level:3,title:"服务端负载均衡",slug:"服务端负载均衡",children:[]}]},{level:2,title:"常见负载均衡算法",slug:"常见负载均衡算法",children:[]},{level:2,title:"Ribbon模块",slug:"ribbon模块",children:[]},{level:2,title:"nacos与Ribbon关系",slug:"nacos与ribbon关系",children:[]}],filePathRelative:"Ribbon/README.md"}},69713:(t,i,r)=>{r.r(i),r.d(i,{default:()=>a});const e=(0,r(20641).Fv)('<h2 id="什么是ribbon" tabindex="-1"><a class="header-anchor" href="#什么是ribbon" aria-hidden="true">#</a> 什么是Ribbon</h2><ul><li><strong>集中式负载均衡</strong>：在消费者和服务提供方中间使用独立的代理方式进行负载，有硬件的F5,软件nginx</li><li><strong>客户端根据自己的请求情况负载均衡</strong>，Ribbon就属于客户端自己做负载均衡</li></ul><p><strong>Spring Cloud Ribbon是基于Netfilx Ribbon实现的一套客户端的负载均衡工具</strong>，Ribbon客户端组件提供一系列完善的配置，如超时，重试等。</p><p><strong>通过Load Balancer获取到服务提供的所有机器实例</strong>。</p><p>Ribbon会自动基于<strong>某种规则(轮询，随机)去调用这些服务</strong>。Ribbon也可以实现我们自己的负载均衡算法。</p><h3 id="客户端负载均衡" tabindex="-1"><a class="header-anchor" href="#客户端负载均衡" aria-hidden="true">#</a> 客户端负载均衡</h3><p>例如spring cloud中的ribbon，客户端会有一个服务器地址列表，在发送请求前通过负载均衡算法选择一个服务器，然后进行访问，这是客户端负载均衡；即在客户端就进行负载均衡算法分配</p><img src="/images/ribbon/13568.png" alt="img" style="zoom:80%;"><h3 id="服务端负载均衡" tabindex="-1"><a class="header-anchor" href="#服务端负载均衡" aria-hidden="true">#</a> 服务端负载均衡</h3><p>例如Nginx，通过Nginx进行负载均衡，先发送请求，然后通过负载均衡算法，在多个服务器之间选择一个进行访问；即在服务器端再进行负载均衡算法分配。</p><img src="/images/ribbon/13572.png" alt="img" style="zoom:67%;"><h2 id="常见负载均衡算法" tabindex="-1"><a class="header-anchor" href="#常见负载均衡算法" aria-hidden="true">#</a> 常见负载均衡算法</h2><ul><li>随机，通过随机选择服务进行执行，一般这种方式使用较少;</li><li>轮训，负载均衡默认实现方式，请求来之后排队处理;</li><li>加权轮训，通过对服务器性能的分型，给高配置，低负载的服务器分配更高的权重，均衡各个服务器的压力;</li><li>地址Hash，通过客户端请求的地址的HASH值取模映射进行服务器调度。 ip ---&gt;hash</li><li>最小链接数，即使请求均衡了，压力不一定会均衡，最小连接数法就是根据服务器的情况，比如请求积压数等参数，将请求分配到当前压力最小的服务器上。 最小活跃数</li></ul><h2 id="ribbon模块" tabindex="-1"><a class="header-anchor" href="#ribbon模块" aria-hidden="true">#</a> Ribbon模块</h2><table><thead><tr><th>名 称</th><th>说 明</th></tr></thead><tbody><tr><td>ribbon-loadbalancer</td><td>负载均衡模块，可独立使用，也可以和别的模块一起使用。</td></tr><tr><td>Ribbon</td><td>内置的负载均衡算法都实现在其中。</td></tr><tr><td>ribbon-eureka</td><td>基于 Eureka 封装的模块，能够快速、方便地集成 Eureka。</td></tr><tr><td>ribbon-transport</td><td>基于 Netty 实现多协议的支持，比如 HTTP、Tcp、Udp 等。</td></tr><tr><td>ribbon-httpclient</td><td>基于 Apache HttpClient 封装的 REST 客户端，集成了负载均衡模块，可以直接在项目中使用来调用接口。</td></tr><tr><td>ribbon-example</td><td>Ribbon 使用代码示例，通过这些示例能够让你的学习事半功倍。</td></tr><tr><td>ribbon-core</td><td>一些比较核心且具有通用性的代码，客户端 API 的一些配置和其他 API 的定义。</td></tr></tbody></table><h2 id="nacos与ribbon关系" tabindex="-1"><a class="header-anchor" href="#nacos与ribbon关系" aria-hidden="true">#</a> nacos与Ribbon关系</h2><p>nacos-discovery依赖了ribbon，可以不用再引入ribbon依赖</p><p><img src="/images/ribbon/13575" alt="img"></p>',18),n={},a=(0,r(66262).A)(n,[["render",function(t,i){return e}]])},66262:(t,i)=>{i.A=(t,i)=>{const r=t.__vccOpts||t;for(const[t,e]of i)r[t]=e;return r}}}]);