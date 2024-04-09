"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[78029],{47566:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-ffa50a02",path:"/minifrontendproject/10%20Random%20Image%20Feed.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/minifrontendproject/"}},excerpt:"",headers:[{level:2,title:"Random Image Feed",slug:"random-image-feed",children:[]},{level:2,title:"unsplash image api",slug:"unsplash-image-api",children:[]},{level:2,title:"获取图片",slug:"获取图片",children:[]},{level:2,title:"css样式",slug:"css样式",children:[{level:3,title:"object-fit",slug:"object-fit",children:[]}]}],filePathRelative:"minifrontendproject/10 Random Image Feed.md"}},79106:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var p=a(20641);const t=(0,p.Lk)("h2",{id:"random-image-feed",tabindex:"-1"},[(0,p.Lk)("a",{class:"header-anchor",href:"#random-image-feed","aria-hidden":"true"},"#"),(0,p.eW)(" Random Image Feed")],-1),e={href:"https://q10viking.github.io/Mini-FrontEnd-project/14%20Random%20Image%20Feed/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/14%20Random%20Image%20Feed",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<h2 id="unsplash-image-api" tabindex="-1"><a class="header-anchor" href="#unsplash-image-api" aria-hidden="true">#</a> unsplash image api</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>会随机返回一张图片</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>source<span class="token punctuation">.</span>unsplash<span class="token punctuation">.</span>com<span class="token operator">/</span>random<span class="token operator">/</span>\n<span class="token comment">// 也可以带参数指定图片的大小</span>\n<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>source<span class="token punctuation">.</span>unsplash<span class="token punctuation">.</span>com<span class="token operator">/</span>random<span class="token operator">/</span>300x301\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="获取图片" tabindex="-1"><a class="header-anchor" href="#获取图片" aria-hidden="true">#</a> 获取图片</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.container&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token constant">BASIC_API</span> <span class="token operator">=</span> <span class="token string">&quot;https://source.unsplash.com/random/&quot;</span>\n<span class="token keyword">let</span> rows <span class="token operator">=</span> <span class="token number">10</span>\n\n<span class="token comment">// load images</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> rows <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>\n    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token function">generateRandomLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 直接设置连接 : https://source.unsplash.com/random/301x302</span>\n    container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">generateRandomLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">getRandomNr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">300</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getRandomSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getRandomNr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getRandomNr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">generateRandomLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token constant">BASIC_API</span> <span class="token operator">+</span> <span class="token function">getRandomSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="css样式" tabindex="-1"><a class="header-anchor" href="#css样式" aria-hidden="true">#</a> css样式</h2><h3 id="object-fit" tabindex="-1"><a class="header-anchor" href="#object-fit" aria-hidden="true">#</a> object-fit</h3>',7),l={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Fv)('<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span><span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n    <span class="token property">max-width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>  <span class="token comment">/*控制一行做多显示3张图片*/</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.container img</span><span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n    <span class="token property">object-fit</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span> <span class="token comment">/*图片https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit*/</span>\n    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 1px 10px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',1),i={},u=(0,a(66262).A)(i,[["render",function(n,s){const a=(0,p.g2)("OutboundLink"),i=(0,p.g2)("common-progresson-snippet");return(0,p.uX)(),(0,p.CE)(p.FK,null,[t,(0,p.Lk)("p",null,[(0,p.Lk)("a",e,[(0,p.eW)("项目预览（Project view）"),(0,p.bF)(a)])]),(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("Source Code"),(0,p.bF)(a)])]),(0,p.bF)(i,{src:"https://q10viking.github.io/Mini-FrontEnd-project/14%20Random%20Image%20Feed/"}),c,(0,p.Lk)("p",null,[(0,p.Lk)("a",l,[(0,p.eW)("object-fit - CSS（层叠样式表） | MDN (mozilla.org)"),(0,p.bF)(a)])]),r],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);