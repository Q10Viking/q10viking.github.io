"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[20990],{83393:(a,s,n)=>{n.r(s),n.d(s,{data:()=>e});const e={key:"v-ea508018",path:"/nacos/",title:"",lang:"zh-CN",frontmatter:{prev:{text:"Back To 目录",link:"/topicNav/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Nacos介绍",slug:"nacos介绍",children:[]},{level:2,title:"项目中引入Nacos的好处",slug:"项目中引入nacos的好处",children:[]},{level:2,title:"项目架构示例",slug:"项目架构示例",children:[]}],filePathRelative:"nacos/README.md"}},48168:(a,s,n)=>{n.r(s),n.d(s,{default:()=>l});const e=(0,n(20641).Fv)('<h2 id="nacos介绍" tabindex="-1"><a class="header-anchor" href="#nacos介绍" aria-hidden="true">#</a> Nacos介绍</h2><p>一个更易于构建云原生应用的动态<strong>服务发现（Nacos Discovery）</strong>,<strong>服务配置（Nacos Config）<strong>和</strong>服务管理平台</strong></p><ul><li>注册中心</li><li>配置中心</li><li>服务管理</li></ul><p>Nacos 的关键特性包括:</p><ul><li>服务注册</li><li>服务心跳</li><li>服务同步</li><li>服务发现</li><li>服务健康检查</li></ul><h2 id="项目中引入nacos的好处" tabindex="-1"><a class="header-anchor" href="#项目中引入nacos的好处" aria-hidden="true">#</a> 项目中引入Nacos的好处</h2><ol><li><p><strong>客户端能够感知provider节点是否可用，不可用时应该需要进行服务的剔除</strong></p></li><li><p>直接使用RestTemplate调用服务的话，无法进行客户端负载均衡的技术</p></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://localhost:8020/order/findOrderByUserId/&quot;</span><span class="token operator">+</span>id<span class="token punctuation">;</span>\n<span class="token class-name">R</span> result <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token class-name">R</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/images/nacos/image-20210720142131391.png" alt="image-20210720142131391"></p><h2 id="项目架构示例" tabindex="-1"><a class="header-anchor" href="#项目架构示例" aria-hidden="true">#</a> 项目架构示例</h2><p><img src="/images/nacos/image-20210819224140023.png" alt="image-20210819224140023"></p>',11),t={},l=(0,n(66262).A)(t,[["render",function(a,s){return e}]])},66262:(a,s)=>{s.A=(a,s)=>{const n=a.__vccOpts||a;for(const[a,e]of s)n[a]=e;return n}}}]);