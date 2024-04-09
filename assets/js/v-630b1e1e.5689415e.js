"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[87571],{26354:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-630b1e1e",path:"/Redis/30%20Springboot%E6%93%8D%E4%BD%9CRedis%E9%9B%86%E7%BE%A4.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Redis/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"配置",slug:"配置",children:[]},{level:2,title:"测试",slug:"测试",children:[]}],filePathRelative:"Redis/30 Springboot操作Redis集群.md"}},22350:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var p=a(20641);const e={class:"custom-container tip"},t=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),o={href:"https://github.com/Q10Viking/learncode/tree/main/redis/_04_springboot_redis_cluster",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>\n<span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">redis</span><span class="token punctuation">:</span>\n    <span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token number">0</span>\n    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">3000</span>\n    <span class="token key atrule">password</span><span class="token punctuation">:</span> Root.123456\n    <span class="token comment">#    sentinel:    #哨兵模式</span>\n    <span class="token comment">#      master: mymaster #主服务器所在集群名称</span>\n    <span class="token comment">#      nodes: 192.168.187.135:26379,192.168.187.135:26380,192.168.187.135:26381</span>\n    <span class="token key atrule">cluster</span><span class="token punctuation">:</span>\n      <span class="token key atrule">nodes</span><span class="token punctuation">:</span> 192.168.187.135<span class="token punctuation">:</span><span class="token number">8001</span><span class="token punctuation">,</span>192.168.187.130<span class="token punctuation">:</span><span class="token number">8002</span><span class="token punctuation">,</span>192.168.187.132<span class="token punctuation">:</span><span class="token number">8003</span><span class="token punctuation">,</span>192.168.187.135<span class="token punctuation">:</span><span class="token number">8004</span><span class="token punctuation">,</span>192.168.187.130<span class="token punctuation">:</span><span class="token number">8005</span><span class="token punctuation">,</span>192.168.187.132<span class="token punctuation">:</span><span class="token number">8006</span>\n    <span class="token key atrule">lettuce</span><span class="token punctuation">:</span>  <span class="token comment"># springboot中使用的redis连接池为lettuce不是jedis</span>\n      <span class="token key atrule">pool</span><span class="token punctuation">:</span>\n        <span class="token key atrule">max-idle</span><span class="token punctuation">:</span> <span class="token number">50</span>\n        <span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">10</span>\n        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">100</span>\n        <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> 1000s\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n    stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;springboot:hzz&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Hello q10viking&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> s <span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;springboot:hzz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="/images/Redis/image-20220809165441315.png" alt="image-20220809165441315"></p>',5),l={},u=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("div",e,[t,(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("Source Code springboot_redis_cluster"),(0,p.bF)(a)])])]),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);