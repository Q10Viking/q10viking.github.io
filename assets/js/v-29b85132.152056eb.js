"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[55764],{77309:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-29b85132",path:"/gateway/02%20%E8%BF%87%E6%BB%A4%E5%99%A8%E5%B7%A5%E5%8E%82.html",title:"",lang:"zh-CN",frontmatter:{prev:{text:"Back To 目录",link:"/topicNav/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"过滤器",slug:"过滤器",children:[]},{level:2,title:"添加请求头",slug:"添加请求头",children:[]},{level:2,title:"添加请求参数",slug:"添加请求参数",children:[]},{level:2,title:"自定义过滤器工厂",slug:"自定义过滤器工厂",children:[]}],filePathRelative:"gateway/02 过滤器工厂.md"}},87097:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(20641);const p=(0,t.Lk)("h2",{id:"过滤器",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#过滤器","aria-hidden":"true"},"#"),(0,t.eW)(" 过滤器")],-1),e={href:"https://github.com/Q10Viking/springcloudalibaba/tree/main/springcloudgateway/03-gateway-filter",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Fv)('<blockquote><p>GatewayFilter是网关中提供的一种过滤器，可以对进入网关的请求和微服务返回的响应做处理</p></blockquote><p><img src="/images/gateway/56322" alt="img"></p><h2 id="添加请求头" tabindex="-1"><a class="header-anchor" href="#添加请求头" aria-hidden="true">#</a> 添加请求头</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">application</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> mall<span class="token punctuation">-</span>gateway\n  <span class="token comment">#配置nacos注册中心地址</span>\n  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>\n    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>\n      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>\n        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 192.168.135.1<span class="token punctuation">:</span><span class="token number">8848</span>\n\n    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>\n      <span class="token comment">#设置路由：路由id、路由到微服务的uri、断言</span>\n      <span class="token key atrule">routes</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> user_route   <span class="token comment">#路由ID，全局唯一，建议配置服务名</span>\n          <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//mall<span class="token punctuation">-</span>user  <span class="token comment">#lb 整合负载均衡器ribbon,loadbalancer</span>\n          <span class="token key atrule">predicates</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> Path=/user/<span class="token important">**</span>   <span class="token comment"># 断言，路径相匹配的进行路由</span>\n\n        <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> order_route  <span class="token comment">#路由ID，全局唯一，建议配置服务名</span>\n          <span class="token key atrule">uri</span><span class="token punctuation">:</span> lb<span class="token punctuation">:</span>//mall<span class="token punctuation">-</span>order  <span class="token comment">#lb 整合负载均衡器ribbon,loadbalancer</span>\n          <span class="token key atrule">predicates</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> Path=/order/<span class="token important">**</span>   <span class="token comment"># 断言，路径相匹配的进行路由</span>\n          <span class="token key atrule">filters</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> AddRequestHeader=X<span class="token punctuation">-</span>Request<span class="token punctuation">-</span>Color<span class="token punctuation">,</span>blue <span class="token comment">#添加请求头</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote><p>测试：OrderController添加测试方法</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/testgateway&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">testgateway</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;gateWay获取请求头X-Request-Color：&quot;</span>\n             <span class="token operator">+</span>request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;X-Request-Color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;Success: X-Request-Color = &quot;</span><span class="token operator">+</span>request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;X-Request-Color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/testgateway2&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">testGateway2</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;X-Request-color&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;gateWay获取请求头X-Request-Color：&quot;</span><span class="token operator">+</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;Success: X-Request-Color = &quot;</span><span class="token operator">+</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="/images/gateway/image-20230308125147559.png" alt="image-20230308125147559"></p><h2 id="添加请求参数" tabindex="-1"><a class="header-anchor" href="#添加请求参数" aria-hidden="true">#</a> 添加请求参数</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>          <span class="token key atrule">filters</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> AddRequestHeader=X<span class="token punctuation">-</span>Request<span class="token punctuation">-</span>Color<span class="token punctuation">,</span>blue <span class="token comment">#添加请求头</span>\n            <span class="token punctuation">-</span> AddRequestParameter=book<span class="token punctuation">,</span>Java Programming <span class="token comment"># 添加请求参数</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>测试OrderController,添加方法</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/testgateway3&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">testGateway3</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> book<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;gateWay获取请求参数color:&quot;</span><span class="token operator">+</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;Success: &quot;</span><span class="token operator">+</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="/images/gateway/image-20230308130105104.png" alt="image-20230308130105104"></p><h2 id="自定义过滤器工厂" tabindex="-1"><a class="header-anchor" href="#自定义过滤器工厂" aria-hidden="true">#</a> 自定义过滤器工厂</h2><blockquote><p>继承AbstractNameValueGatewayFilterFactory且我们的自定义名称必须要以GatewayFilterFactory结尾并交给spring管理</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckAuthGatewayFilterFactory</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractNameValueGatewayFilterFactory</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">CheckAuthGatewayFilterFactory</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">GatewayFilter</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">NameValueConfig</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>exchange<span class="token punctuation">,</span> chain<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>\n            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;调用CheckAuthGatewayFilterFactory===&quot;</span>\n                    <span class="token operator">+</span> config<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> config<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> chain<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>exchange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>配置过滤器工厂</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>          <span class="token key atrule">filters</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> AddRequestHeader=X<span class="token punctuation">-</span>Request<span class="token punctuation">-</span>Color<span class="token punctuation">,</span>blue <span class="token comment">#添加请求头</span>\n            <span class="token punctuation">-</span> AddRequestParameter=book<span class="token punctuation">,</span>Java<span class="token punctuation">-</span>Programming <span class="token comment"># 添加请求参数，不能有空格</span>\n            <span class="token punctuation">-</span> CheckAuth=Q10Viking<span class="token punctuation">,</span>Love<span class="token punctuation">-</span>Java<span class="token punctuation">-</span>Programming <span class="token comment"># 自定义过滤器</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">2023</span>-03-08 <span class="token number">13</span>:16:41.593  INFO <span class="token number">18928</span> --- <span class="token punctuation">[</span>ctor-http-nio-4<span class="token punctuation">]</span> o.h.f.CheckAuthGatewayFilterFactory      <span class="token builtin class-name">:</span> 调用CheckAuthGatewayFilterFactory<span class="token operator">==</span><span class="token operator">=</span>Q10Viking:Love-Java-Programming\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',18),c={},l=(0,a(66262).A)(c,[["render",function(n,s){const a=(0,t.g2)("OutboundLink");return(0,t.uX)(),(0,t.CE)(t.FK,null,[p,(0,t.Lk)("p",null,[(0,t.Lk)("a",e,[(0,t.eW)("Source Code"),(0,t.bF)(a)])]),o],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);