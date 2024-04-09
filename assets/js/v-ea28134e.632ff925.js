"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[54989],{43350:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-ea28134e",path:"/minifrontendproject/26%20Live%20User%20Filter.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/minifrontendproject/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"LIve User Filter",slug:"live-user-filter",children:[]},{level:2,title:"解构",slug:"解构",children:[]},{level:2,title:"ts函数泛型",slug:"ts函数泛型",children:[]},{level:2,title:"small标签",slug:"small标签",children:[]},{level:2,title:"max-height&overflow-y理解",slug:"max-height-overflow-y理解",children:[]},{level:2,title:"最后一个元素没有下划线",slug:"最后一个元素没有下划线",children:[]}],filePathRelative:"minifrontendproject/26 Live User Filter.md"}},81313:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(20641);const t=(0,e.Lk)("h2",{id:"live-user-filter",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#live-user-filter","aria-hidden":"true"},"#"),(0,e.eW)(" LIve User Filter")],-1),p={href:"https://q10viking.github.io/Mini-FrontEnd-project/32%20Live%20User%20Filter/vanilla/dist/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/32%20Live%20User%20Filter/vanilla",target:"_blank",rel:"noopener noreferrer"},l={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/32%20Live%20User%20Filter/refactor-by-vue",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Fv)('<h2 id="解构" tabindex="-1"><a class="header-anchor" href="#解构" aria-hidden="true">#</a> 解构</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token comment">/**\n * 获取用户列表\n * @returns 用户列表\n */</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getUserList</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">RAND_USER_API</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>results<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 解构</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">return</span> results <span class="token keyword">as</span> <span class="token constant">T</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="ts函数泛型" tabindex="-1"><a class="header-anchor" href="#ts函数泛型" aria-hidden="true">#</a> ts函数泛型</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token comment">// 定义</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getUserList</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">RAND_USER_API</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>results<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 解构</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> results <span class="token keyword">as</span> <span class="token constant">T</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 使用</span>\n<span class="token keyword">const</span> userList <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">getUserList</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nuserList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>user <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 在进一步解析成类型数据</span>\n    <span class="token keyword">let</span> userInfo<span class="token operator">:</span>UserInfo <span class="token operator">=</span> <span class="token punctuation">{</span>\n        img<span class="token operator">:</span> user<span class="token punctuation">.</span>picture<span class="token punctuation">.</span>large<span class="token punctuation">,</span>\n        name<span class="token operator">:</span> user<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first<span class="token punctuation">,</span>\n        location<span class="token operator">:</span> user<span class="token punctuation">.</span>location<span class="token punctuation">.</span>city\n    <span class="token punctuation">}</span>\n <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="small标签" tabindex="-1"><a class="header-anchor" href="#small标签" aria-hidden="true">#</a> small标签</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>subtitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Search by name and/or location<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.subtitle</span><span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 10px 0 20px<span class="token punctuation">;</span>  <span class="token comment">// small 标签得变成inline-block margin才会生效</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="max-height-overflow-y理解" tabindex="-1"><a class="header-anchor" href="#max-height-overflow-y理解" aria-hidden="true">#</a> max-height&amp;overflow-y理解</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>用户列表设置高度采用max-height.当用户数量较少得时候,内容完全由内容撑开，当用户数量很多，超出容器得时候，max-height就会生效。这是overflow-y:auto；就会出现滚动条</p></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.userlist</span><span class="token punctuation">{</span>\n      <span class="token property">max-height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>\n      <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="最后一个元素没有下划线" tabindex="-1"><a class="header-anchor" href="#最后一个元素没有下划线" aria-hidden="true">#</a> 最后一个元素没有下划线</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.userinfo</span><span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n\n    <span class="token comment">// 下划线得设置</span>\n    &amp;<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token punctuation">:</span>last-of-type<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid <span class="token variable">$gray</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',12),r={},i=(0,a(66262).A)(r,[["render",function(n,s){const a=(0,e.g2)("OutboundLink"),r=(0,e.g2)("common-progresson-snippet");return(0,e.uX)(),(0,e.CE)(e.FK,null,[t,(0,e.Lk)("p",null,[(0,e.Lk)("a",p,[(0,e.eW)("项目预览（Project view）"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",o,[(0,e.eW)("vanilla Source Code"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",l,[(0,e.eW)("Vue3+ts重构 Source Code"),(0,e.bF)(a)])]),(0,e.bF)(r,{src:"https://q10viking.github.io/Mini-FrontEnd-project/32%20Live%20User%20Filter/vanilla/dist/"}),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);