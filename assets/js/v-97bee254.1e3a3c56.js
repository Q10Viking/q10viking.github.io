"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[43841],{11074:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-97bee254",path:"/ddd/07%20%E5%85%AD%E8%BE%B9%E5%BD%A2%E6%9E%B6%E6%9E%84.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/ddd/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"六边形架构",slug:"六边形架构",children:[]},{level:2,title:"测试",slug:"测试",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"ddd/07 六边形架构.md"}},68564:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(20641);const e=(0,t.Fv)('<h2 id="六边形架构" tabindex="-1"><a class="header-anchor" href="#六边形架构" aria-hidden="true">#</a> 六边形架构</h2><p><img src="/images/springboot/i6wWQ.jpg" alt="img"></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><blockquote><p>添加一些数据</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> BOOK <span class="token punctuation">(</span>id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> description<span class="token punctuation">,</span> price<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;Clean Code&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;A handbook of agile Software&#39;</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">insert</span> <span class="token keyword">into</span> BOOK <span class="token punctuation">(</span>id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> description<span class="token punctuation">,</span> price<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;Effective Java中文版(原书第3版)&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;作者JoshuaBloch&#39;</span><span class="token punctuation">,</span><span class="token number">113.10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">insert</span> <span class="token keyword">into</span> BOOK <span class="token punctuation">(</span>id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> description<span class="token punctuation">,</span> price<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;Spring in actions&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;spring Book&#39;</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">insert</span> <span class="token keyword">into</span> BOOK <span class="token punctuation">(</span>id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> description<span class="token punctuation">,</span> price<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;Head First java&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;java book&#39;</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">insert</span> <span class="token keyword">into</span> BOOK <span class="token punctuation">(</span>id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> description<span class="token punctuation">,</span> price<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;java编程思想&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;大名鼎鼎的Bruce Eckel&#39;</span><span class="token punctuation">,</span><span class="token number">54.0</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create table BOOK(\n                     id bigint NOT NULL AUTO_INCREMENT,\n                     title VARCHAR(255) NOT NULL,\n                     description VARCHAR(255) NOT NULL,\n                     price double precision NOT NULL,\n                     PRIMARY KEY (id)\n);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',7),p={href:"https://medium.com/javarevisited/hands-on-hexagonal-architecture-with-spring-boot-ca61f88bed8b",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.baeldung.com/hexagonal-architecture-ddd-spring",target:"_blank",rel:"noopener noreferrer"},c={href:"https://www.javainuse.com/spring/boot_hex",target:"_blank",rel:"noopener noreferrer"},i={},l=(0,a(66262).A)(i,[["render",function(n,s){const a=(0,t.g2)("OutboundLink");return(0,t.uX)(),(0,t.CE)(t.FK,null,[e,(0,t.Lk)("p",null,[(0,t.Lk)("a",p,[(0,t.eW)("Hands-on Hexagonal Architecture With Spring Boot | by Sofiene Ben Khemis | Javarevisited | Medium"),(0,t.bF)(a)])]),(0,t.Lk)("p",null,[(0,t.Lk)("a",o,[(0,t.eW)("Hexagonal Architecture, DDD, and Spring | Baeldung"),(0,t.bF)(a)])]),(0,t.Lk)("p",null,[(0,t.Lk)("a",c,[(0,t.eW)("Hexagonal Architecture using Spring Boot | JavaInUse"),(0,t.bF)(a)])])],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);