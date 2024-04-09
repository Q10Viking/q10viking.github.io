"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[61181],{65168:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3d1812cc",path:"/minifrontendproject/17%20FAQ%20Collapse.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/minifrontendproject/"}},excerpt:"",headers:[{level:2,title:"FAQ Collapse",slug:"faq-collapse",children:[]},{level:2,title:"active样式的子选择器",slug:"active样式的子选择器",children:[]},{level:2,title:"css样式处理Font  Awesome Icon code",slug:"css样式处理font-awesome-icon-code",children:[]},{level:2,title:"获取父节点",slug:"获取父节点",children:[]}],filePathRelative:"minifrontendproject/17 FAQ Collapse.md"}},44851:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(20641);const p=(0,e.Lk)("h2",{id:"faq-collapse",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#faq-collapse","aria-hidden":"true"},"#"),(0,e.eW)(" FAQ Collapse")],-1),t={href:"https://q10viking.github.io/Mini-FrontEnd-project/21%20FAQ%20Collapse/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/21%20FAQ%20Collapse",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Fv)('<h2 id="active样式的子选择器" tabindex="-1"><a class="header-anchor" href="#active样式的子选择器" aria-hidden="true">#</a> active样式的子选择器</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.faq .faq-text</span><span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.faq.active .faq-text</span><span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="css样式处理font-awesome-icon-code" tabindex="-1"><a class="header-anchor" href="#css样式处理font-awesome-icon-code" aria-hidden="true">#</a> css样式处理Font Awesome Icon code</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*使用*/</span>\n<span class="token selector">.faq.active::before,\n.faq.active::after</span><span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;\\f075&quot;</span><span class="token punctuation">;</span>\n    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Font Awesome 6 Free&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>具体样式使用</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* 处理Font Awosome css */</span>\n<span class="token selector">.faq.active::before,\n.faq.active::after</span><span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;\\f075&quot;</span><span class="token punctuation">;</span>\n    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Font Awesome 6 Free&#39;</span><span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 7rem<span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.2<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n    <span class="token property">z-index</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.faq.active::before</span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> -30px<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> -30px<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="获取父节点" tabindex="-1"><a class="header-anchor" href="#获取父节点" aria-hidden="true">#</a> 获取父节点</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>parentElement</li><li>parentNode</li></ol></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> faqToggleBtns <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.faq-toggle&#39;</span><span class="token punctuation">)</span>\n\nfaqToggleBtns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">btn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token comment">// btn.parentElement.classList.toggle(&#39;active&#39;)</span>\n        btn<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',9),l={},r=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,e.g2)("OutboundLink"),l=(0,e.g2)("common-progresson-snippet");return(0,e.uX)(),(0,e.CE)(e.FK,null,[p,(0,e.Lk)("p",null,[(0,e.Lk)("a",t,[(0,e.eW)("项目预览（Project view）"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",c,[(0,e.eW)("Source Code"),(0,e.bF)(a)])]),(0,e.bF)(l,{src:"https://q10viking.github.io/Mini-FrontEnd-project/21%20FAQ%20Collapse/"}),o],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);