"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[71760],{87092:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-1325f0eb",path:"/Lock/",title:"",lang:"zh-CN",frontmatter:{prev:{text:"Back To 目录",link:"/topicNav/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"部署多台机器的并发问题",slug:"部署多台机器的并发问题",children:[]},{level:2,title:"Nginx的配置",slug:"nginx的配置",children:[]},{level:2,title:"部署",slug:"部署",children:[]},{level:2,title:"JMeter压测复现并发bug",slug:"jmeter压测复现并发bug",children:[]},{level:2,title:"观察结果",slug:"观察结果",children:[]}],filePathRelative:"Lock/README.md"}},60782:(n,s,a)=>{a.r(s),a.d(s,{default:()=>z});var e=a(20641);const p=(0,e.Lk)("h2",{id:"部署多台机器的并发问题",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#部署多台机器的并发问题","aria-hidden":"true"},"#"),(0,e.eW)(" 部署多台机器的并发问题")],-1),t={class:"custom-container tip"},o=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),l=(0,e.Lk)("p",null,"分布式架构的部署，JVM的并发锁保证不了并发的问题",-1),c=(0,e.Lk)("p",null,"在单体的应用开发场景中涉及并发同步的时候，大家往往采用Synchronized（同步）或者 其他同一个JVM内Lock机制来解决多线程间的同步问题。在分布式集群工作的开发场景 中，就需要一种更加高级的锁机制来处理跨机器的进程之间的数据同步问题，这种跨机器的 锁就是分布式锁",-1),r={href:"https://github.com/Q10Viking/learncode/tree/main/redis/_05_springboot_redis_lock",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Fv)('<h2 id="nginx的配置" tabindex="-1"><a class="header-anchor" href="#nginx的配置" aria-hidden="true">#</a> Nginx的配置</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\tupstream redislock<span class="token punctuation">{</span>\n\t\tserver localhost:8080 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>\n\t\tserver localhost:8081 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n    server <span class="token punctuation">{</span>\n        listen       <span class="token number">80</span><span class="token punctuation">;</span>\n        server_name  localhost<span class="token punctuation">;</span>\n        location / <span class="token punctuation">{</span>\n            root   html<span class="token punctuation">;</span>\n            index  index.html index.htm<span class="token punctuation">;</span>\n\t\t\tproxy_pass http://redislock<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2>',3),i={href:"https://www.processon.com/view/link/62f24f5fe401fd2fc7cbe5f5",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Fv)('<p><img src="/images/lock/image-20220809201246047.png" alt="image-20220809201246047"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;deduck_stock&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">deduckStock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// 在redis中它的库存设置为300</span>\n        <span class="token keyword">final</span> <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;stock:product:1&quot;</span><span class="token punctuation">;</span>\n        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">int</span> stock <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>stock<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">int</span> realStock <span class="token operator">=</span> stock <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>realStock<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;扣减库存成功,剩余：&quot;</span><span class="token operator">+</span>realStock<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n                logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;扣减库存失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;Finished&quot;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="jmeter压测复现并发bug" tabindex="-1"><a class="header-anchor" href="#jmeter压测复现并发bug" aria-hidden="true">#</a> JMeter压测复现并发bug</h2>',3),b={class:"custom-container tip"},m=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),g={href:"https://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Lk)("p",null,"下载至本地后，解压压缩包，点击进入bin文件夹，双击jmeter.bat文件",-1),h=(0,e.Lk)("p",null,"选择Options --\x3e Choose Language --\x3e Chinese(Simplified)，设置语言为中文简体",-1),v={href:"https://blog.csdn.net/tianqingmuyu/article/details/108401543",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Fv)('<p><img src="/images/lock/image-20220809201811036.png" alt="image-20220809201811036"></p><p><img src="/images/lock/image-20220809201957411.png" alt="image-20220809201957411"></p><h2 id="观察结果" tabindex="-1"><a class="header-anchor" href="#观察结果" aria-hidden="true">#</a> 观察结果</h2><p>发下应用app，库存扣减重复。</p><p>app1:8080</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.344  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>nio-8080-exec-2<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：299\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.369  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>io-8080-exec-18<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：298\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.380  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>io-8080-exec-21<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：297\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.395  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>io-8080-exec-26<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：296\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.406  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>io-8080-exec-22<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：294\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.414  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>io-8080-exec-19<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：293\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.423  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>io-8080-exec-20<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：292\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.433  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>io-8080-exec-17<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：291\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.441  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>io-8080-exec-11<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：290\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.449  INFO <span class="token number">1408</span> --- <span class="token punctuation">[</span>io-8080-exec-12<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：289\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>app2:8081</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.350  INFO <span class="token number">21568</span> --- <span class="token punctuation">[</span>nio-8081-exec-8<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：299\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.362  INFO <span class="token number">21568</span> --- <span class="token punctuation">[</span>io-8081-exec-20<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：298\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.381  INFO <span class="token number">21568</span> --- <span class="token punctuation">[</span>io-8081-exec-24<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：297\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.390  INFO <span class="token number">21568</span> --- <span class="token punctuation">[</span>io-8081-exec-19<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：296\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.400  INFO <span class="token number">21568</span> --- <span class="token punctuation">[</span>io-8081-exec-21<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：295\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.411  INFO <span class="token number">21568</span> --- <span class="token punctuation">[</span>io-8081-exec-22<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：294\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.419  INFO <span class="token number">21568</span> --- <span class="token punctuation">[</span>io-8081-exec-18<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：292\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.436  INFO <span class="token number">21568</span> --- <span class="token punctuation">[</span>io-8081-exec-23<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：291\n<span class="token number">2022</span>-08-09 <span class="token number">20</span>:15:10.446  INFO <span class="token number">21568</span> --- <span class="token punctuation">[</span>io-8081-exec-14<span class="token punctuation">]</span> org.hzz.controller.StockController       <span class="token builtin class-name">:</span> 扣减库存成功,剩余：289\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',8),x={},z=(0,a(66262).A)(x,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[p,(0,e.Lk)("div",t,[o,l,c,(0,e.Lk)("p",null,[(0,e.Lk)("a",r,[(0,e.eW)("Source Code"),(0,e.bF)(a)])])]),u,(0,e.Lk)("p",null,[(0,e.Lk)("a",i,[(0,e.eW)("ProgressOn"),(0,e.bF)(a)])]),k,(0,e.Lk)("div",b,[m,(0,e.Lk)("p",null,[(0,e.Lk)("a",g,[(0,e.eW)("Apache JMeter - Download Apache JMeter"),(0,e.bF)(a)])]),d,h,(0,e.Lk)("p",null,[(0,e.Lk)("a",v,[(0,e.eW)("SkyRain的博客-CSDN博客_jmeter下载"),(0,e.bF)(a)])])]),f],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);