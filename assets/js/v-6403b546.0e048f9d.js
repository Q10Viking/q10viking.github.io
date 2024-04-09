"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[93836],{6510:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-6403b546",path:"/springsecurity/05%20%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/springsecurity/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"spring security结合session redis原理分析",slug:"spring-security结合session-redis原理分析",children:[]},{level:2,title:"session过滤器链什么时候添加进去的？",slug:"session过滤器链什么时候添加进去的",children:[]}],filePathRelative:"springsecurity/05 会话管理.md"}},5890:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const e=(0,a(20641).Fv)('<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.session<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-session-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="spring-security结合session-redis原理分析" tabindex="-1"><a class="header-anchor" href="#spring-security结合session-redis原理分析" aria-hidden="true">#</a> spring security结合session redis原理分析</h2><blockquote><p>进入到从Redis中获取到session的逻辑， 是将request进行了封装成了SessionRepositoryRequestWrapper 在getSession时走的就是spring session的逻辑了</p></blockquote><p>https://www.processon.com/view/link/627f69c4e401fd36f6b6bb52</p><h2 id="session过滤器链什么时候添加进去的" tabindex="-1"><a class="header-anchor" href="#session过滤器链什么时候添加进去的" aria-hidden="true">#</a> session过滤器链什么时候添加进去的？</h2><p>借助了<strong>FilterRegistrationBean</strong></p><blockquote><p>如果保证顺序性：将所有ServletContextInitializer的bean取出来并排序</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SessionRepositoryFilter的order: Integer.MIN_VALUE + 50\nDelegatingFilterProxyRegistrationBean: -100\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><p><img src="/images/springsecurity/image-20220514170441905.png" alt="image-20220514170441905"></p><p>https://www.processon.com/view/link/627f70f81efad40df0408c7a</p><hr><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SessionRepositoryFilter.this.\n\tSessionRepositoryRequestWrapper\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SessionRepositoryFilter \n\tdoFilterInternal  new SessionRepositoryRequestWrapper\n\t\n\trequest.Session  里面执行父类的方法\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',12),t={},p=(0,a(66262).A)(t,[["render",function(s,n){return e}]])},66262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);