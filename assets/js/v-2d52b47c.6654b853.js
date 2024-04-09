"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[27983],{20727:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-2d52b47c",path:"/tomcat/08%20Servlet%E8%A7%84%E8%8C%83Filter%E8%A7%A3%E8%AF%BB.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/tomcat/"}},excerpt:"",headers:[{level:2,title:"Filter",slug:"filter",children:[]},{level:2,title:"Lifecycle",slug:"lifecycle",children:[]},{level:2,title:"Declaring and ordering filters",slug:"declaring-and-ordering-filters",children:[{level:3,title:"Declaring a filter",slug:"declaring-a-filter",children:[]},{level:3,title:"Declaring a filter mapping to a URL pattern",slug:"declaring-a-filter-mapping-to-a-url-pattern",children:[]},{level:3,title:"Declaring a filter mapping to a servlet name",slug:"declaring-a-filter-mapping-to-a-servlet-name",children:[]},{level:3,title:"The Container’s rules for ordering filters⭐",slug:"the-container-s-rules-for-ordering-filters",children:[]}]}],filePathRelative:"tomcat/08 Servlet规范Filter解读.md"}},25264:(a,n,s)=>{s.r(n),s.d(n,{default:()=>p});const e=(0,s(20641).Fv)('<h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h2><p><img src="https://gitee.com/q10viking/PictureRepos/raw/master/images//202112061803042.jpg" alt="image (20)"></p><p><img src="https://gitee.com/q10viking/PictureRepos/raw/master/images//202112061915519.jpg" alt="image (21)"></p><h2 id="lifecycle" tabindex="-1"><a class="header-anchor" href="#lifecycle" aria-hidden="true">#</a> Lifecycle</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">FilterConfig</span> filterConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> response<span class="token punctuation">,</span>\n            <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="declaring-and-ordering-filters" tabindex="-1"><a class="header-anchor" href="#declaring-and-ordering-filters" aria-hidden="true">#</a> Declaring and ordering filters</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>1️⃣ Declare your filter 2️⃣ Map your filter to the web resources you want to filter 3️⃣ Arrange these mappings to create filter invocation sequences</p></div><h3 id="declaring-a-filter" tabindex="-1"><a class="header-anchor" href="#declaring-a-filter" aria-hidden="true">#</a> Declaring a filter</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>BeerRequest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>com.example.web.BeerRequestFilter\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>LogFileName<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>UserLog.txt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="declaring-a-filter-mapping-to-a-url-pattern" tabindex="-1"><a class="header-anchor" href="#declaring-a-filter-mapping-to-a-url-pattern" aria-hidden="true">#</a> Declaring a filter mapping to a URL pattern</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>BeerRequest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>*.do<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="declaring-a-filter-mapping-to-a-servlet-name" tabindex="-1"><a class="header-anchor" href="#declaring-a-filter-mapping-to-a-servlet-name" aria-hidden="true">#</a> Declaring a filter mapping to a servlet name</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>BeerRequest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>AdviceServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="the-container-s-rules-for-ordering-filters" tabindex="-1"><a class="header-anchor" href="#the-container-s-rules-for-ordering-filters" aria-hidden="true">#</a> The Container’s rules for ordering filters⭐</h3><p>When more than one filter is mapped to a given resource, the Container uses the following rules</p><ol><li>Filters with matching URL patterns are placed in the chain in the order in which they are declared in the DD.</li><li>Once all filters with matching URLs are placed in the chain, the Container does the same thing with filters that have a matching &lt; servlet-name &gt; in the DD.</li></ol>',16),t={},p=(0,s(66262).A)(t,[["render",function(a,n){return e}]])},66262:(a,n)=>{n.A=(a,n)=>{const s=a.__vccOpts||a;for(const[a,e]of n)s[a]=e;return s}}}]);