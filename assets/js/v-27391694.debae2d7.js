"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[62043],{49546:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-27391694",path:"/SpringCloud/06%20Ribbon%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/SpringCloud/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:3,title:"服务之间的调用",slug:"服务之间的调用",children:[]},{level:3,title:"@LoadBalanced原理",slug:"loadbalanced原理",children:[]}],filePathRelative:"SpringCloud/06 Ribbon服务调用.md"}},98975:(a,n,s)=>{s.r(n),s.d(n,{default:()=>o});var e=s(20641);const l={href:"https://github.com/Q10Viking/springcloudalibaba/tree/main/02-learn-spring-cloud-alibaba",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Fv)('<h3 id="服务之间的调用" tabindex="-1"><a class="header-anchor" href="#服务之间的调用" aria-hidden="true">#</a> 服务之间的调用</h3><p>mall-user调用mall-order，现在mall-order有两个服务，mall-user去对用mall-order的时候，需要关注两件事</p><ol><li>需要去注册中心Nacos获取到mall-order对应的实例数据</li><li>再通过客户端负载均衡选择其中一个实例进行调用</li></ol><p><img src="/images/springcloud/image-20210821233548241.png" alt="image-20210821233548241"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//        String orderUrl = &quot;http://localhost:8020/order/findOrderByUserId/&quot;+id;</span>\n<span class="token comment">// 将链接改为mall-order 服务的名称</span>\n<span class="token class-name">String</span> orderUrl <span class="token operator">=</span> <span class="token string">&quot;http://mall-order/order/findOrderByUserId/&quot;</span><span class="token operator">+</span>id<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>为了restTemplate能够解析mall-order为正确的IP地址和端口，需要在加上@LoadBalanced</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@Bean</span>\n    <span class="token annotation punctuation">@LoadBalanced</span>\n    <span class="token keyword">public</span> <span class="token class-name">RestTemplate</span> <span class="token function">restTemplate</span><span class="token punctuation">(</span><span class="token class-name">RestTemplateBuilder</span> restTemplateBuilder<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">RestTemplate</span> re <span class="token operator">=</span> restTemplateBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span>  re<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="loadbalanced原理" tabindex="-1"><a class="header-anchor" href="#loadbalanced原理" aria-hidden="true">#</a> @LoadBalanced原理</h3><h4 id="ribbonloadbalancerclient负载均衡器" tabindex="-1"><a class="header-anchor" href="#ribbonloadbalancerclient负载均衡器" aria-hidden="true">#</a> RibbonLoadBalancerClient负载均衡器</h4><ol><li>RestTemplate调用，如果有多个mall-order服务，就会选择其中一个mall-order进行调用</li><li>RestTemplate扩展点 ClientHttpRequestInterceptor，restTemplate在执行过程中会去调用该接口实现的类</li><li>ribbon RibbonLoadBalancerClient <ol><li>ribbon会将服务mall-order转化为 localhost:8020</li></ol></li></ol><h4 id="ribbonloadbalancerclient" tabindex="-1"><a class="header-anchor" href="#ribbonloadbalancerclient" aria-hidden="true">#</a> RibbonLoadBalancerClient</h4><p><img src="/images/springcloud/image-20210821213041130.png" alt="image-20210821213041130"></p><p>LoadBalancerInterceptor类 实现了 ClientHttpRequestInterceptor接口，并且在LoadBalancerInterceptor，维护了负载均衡客户端，项目中是RibbonLoadBalancerClient 它实现了LoadBalancerClient接口，负载从注册中心获取数据，和解析mall-order为 IP : PORT</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@Autowired</span>\n    <span class="token keyword">private</span> <span class="token class-name">LoadBalancerClient</span> loadBalancerClient<span class="token punctuation">;</span>  <span class="token comment">// 引入nacos-discovery场景启动器，就会把RibbonLoadBalancerClient注入到了容器中</span>\n\n    <span class="token annotation punctuation">@Bean</span>\n<span class="token comment">//    @LoadBalanced</span>\n    <span class="token keyword">public</span> <span class="token class-name">RestTemplate</span> <span class="token function">restTemplate</span><span class="token punctuation">(</span><span class="token class-name">RestTemplateBuilder</span> restTemplateBuilder<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n        <span class="token keyword">return</span> restTemplateBuilder\n                <span class="token punctuation">.</span><span class="token function">additionalInterceptors</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LoadBalancerInterceptor</span><span class="token punctuation">(</span>loadBalancerClient<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>@LoadBalanced的原理，就是设置了拦截器，在拦截其中通过Ribbon进行解析的</p>',15),p={},o=(0,s(66262).A)(p,[["render",function(a,n){const s=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",l,[(0,e.eW)("服务调用Ribbon实战-github"),(0,e.bF)(s)])]),t],64)}]])},66262:(a,n)=>{n.A=(a,n)=>{const s=a.__vccOpts||a;for(const[a,e]of n)s[a]=e;return s}}}]);