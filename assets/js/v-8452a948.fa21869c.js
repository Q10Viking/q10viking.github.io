"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[15991],{55183:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-8452a948",path:"/nacos/10%20Nacos%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/nacos/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"服务端注册服务",slug:"服务端注册服务",children:[]},{level:2,title:"Nacos服务注册表",slug:"nacos服务注册表",children:[]},{level:2,title:"模型总结",slug:"模型总结",children:[]},{level:2,title:"双层锁    Nacos注册服务并发控制",slug:"双层锁-nacos注册服务并发控制",children:[]},{level:2,title:"心跳机制",slug:"心跳机制",children:[{level:3,title:"TODO",slug:"todo",children:[]}]},{level:2,title:"设计思想",slug:"设计思想",children:[]},{level:2,title:"Java 代码学习",slug:"java-代码学习",children:[]}],filePathRelative:"nacos/10 Nacos服务端服务注册.md"}},83922:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});var s=n(20641);const r=(0,s.Lk)("h2",{id:"服务端注册服务",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#服务端注册服务","aria-hidden":"true"},"#"),(0,s.eW)(" 服务端注册服务")],-1),l={href:"https://www.processon.com/view/link/62938596e401fd2eed134f9a",target:"_blank",rel:"noopener noreferrer"},t=(0,s.Fv)('<p>同步转异步解耦</p><p>服务注册过程</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ConcurrentSkipListMap\nConcurrentLinkedQueue\t监听器列表\t\t\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="nacos服务注册表" tabindex="-1"><a class="header-anchor" href="#nacos服务注册表" aria-hidden="true">#</a> Nacos服务注册表</h2><p>服务注册表与注册逻辑</p><p>如何防止多节点并发冲突。考虑维度：写入和读取并发冲突。设计思想：<strong>读写分离</strong></p><p>CopyOnWrite 写时复制； Nacos是如何落地的？</p><p>synchronsized(Service) 应用</p><p>服务更新配置</p><h2 id="模型总结" tabindex="-1"><a class="header-anchor" href="#模型总结" aria-hidden="true">#</a> 模型总结</h2><h2 id="双层锁-nacos注册服务并发控制" tabindex="-1"><a class="header-anchor" href="#双层锁-nacos注册服务并发控制" aria-hidden="true">#</a> 双层锁 Nacos注册服务并发控制</h2><p>https://www.processon.com/view/link/629207cef346fb41eeb97dfb</p><p><img src="/images/nacos/Nacos注册服务并发控制.png" alt="Nacos注册服务并发控制"></p><h2 id="心跳机制" tabindex="-1"><a class="header-anchor" href="#心跳机制" aria-hidden="true">#</a> 心跳机制</h2><h3 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h3><p>HashTable 并发问题出现在哪里,出现在什么场景？复习杨过老师的课程。</p><h2 id="设计思想" tabindex="-1"><a class="header-anchor" href="#设计思想" aria-hidden="true">#</a> 设计思想</h2><p>bean初始化@postconstructor注册监听器</p><p>异步解耦</p><p>空架子搭建</p><p>key的设计关联Service监听器，Instances（服务实例集合）</p><h2 id="java-代码学习" tabindex="-1"><a class="header-anchor" href="#java-代码学习" aria-hidden="true">#</a> Java 代码学习</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>map.values()是什么\n集合对象求交集  hashcode &amp; equals\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>两个服务实例？原本注册一个的</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>oldInstance: 192.168.1.4:8083:unknown:DEFAULT_1.0_true_false_DEFAULT\n\nnewInstance: \n192.168.1.4:8083:unknown:DEFAULT_1.0_false_false_DEFAULT\n192.168.1.4:8082:unknown:DEFAULT_1.0_true_false_DEFAULT\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',25),i={},c=(0,n(66262).A)(i,[["render",function(e,a){const n=(0,s.g2)("OutboundLink");return(0,s.uX)(),(0,s.CE)(s.FK,null,[r,(0,s.Lk)("p",null,[(0,s.Lk)("a",l,[(0,s.eW)("Nacos服务端注册服务 | ProcessOn免费在线作图,在线流程图,在线思维导图 |"),(0,s.bF)(n)])]),t],64)}]])},66262:(e,a)=>{a.A=(e,a)=>{const n=e.__vccOpts||e;for(const[e,s]of a)n[e]=s;return n}}}]);