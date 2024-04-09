"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[11996],{73902:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-74711d06",path:"/minifrontendproject/31%20Drag%20Move.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/minifrontendproject/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Drag Move",slug:"drag-move",children:[]},{level:2,title:"原理",slug:"原理",children:[]},{level:2,title:"如何做到在页面平滑移动的？",slug:"如何做到在页面平滑移动的",children:[]},{level:2,title:"获取width",slug:"获取width",children:[]},{level:2,title:"鼠标移动图标",slug:"鼠标移动图标",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"minifrontendproject/31 Drag Move.md"}},83600:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var t=a(20641);const e=(0,t.Lk)("h2",{id:"drag-move",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#drag-move","aria-hidden":"true"},"#"),(0,t.eW)(" Drag Move")],-1),p={href:"https://q10viking.github.io/Mini-FrontEnd-project/36%20Drag%20Move/vanilla/dist/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/36%20Drag%20Move/vanilla",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Fv)('<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>在元素的mousedown,mouseup开启和关闭移动的状态</li><li>移动主要是通过移动position:absolute的left和top属性</li><li>移动的距离，通过mouseup时鼠标的位置得到开始的位置，mousemove，得到移动的位置，两者之差就是left和top要移动的距离 <ol><li>通过event.clientX,event.clientY得到位置</li></ol></li><li>同时注意边界的处理</li></ol></div><p>开始的位置</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">moveStart</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span>MouseEvent</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        \n        <span class="token comment">// 第一次变换到absolute后仍然保持现在的位置</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">,</span>content<span class="token punctuation">.</span>offsetTop<span class="token punctuation">)</span>\n            content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> content<span class="token punctuation">.</span>offsetLeft<span class="token operator">-</span><span class="token number">10</span><span class="token operator">+</span><span class="token string">&#39;px&#39;</span>\n            content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> content<span class="token punctuation">.</span>offsetTop<span class="token operator">-</span><span class="token number">10</span><span class="token operator">+</span><span class="token string">&#39;px&#39;</span>\n        <span class="token punctuation">}</span>\n        \n        <span class="token comment">// 开始的位置</span>\n        startX <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX\n        startY <span class="token operator">=</span> event<span class="token punctuation">.</span>clientY\n        left <span class="token operator">=</span> <span class="token operator">+</span>content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;px&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>\n        top <span class="token operator">=</span> <span class="token operator">+</span>content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;px&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>\n\n        <span class="token comment">// 在document上监听mousemove事件</span>\n        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">,</span>moveMove<span class="token punctuation">)</span>\n\n        startMove <span class="token operator">=</span> <span class="token boolean">true</span>\n        <span class="token comment">// console.log(event.clientX,event.clientY);</span>\n\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>计算移动的距离，最终确定left,top要移动到的位置</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">moveMove</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span>MouseEvent</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>startMove<span class="token punctuation">)</span> <span class="token keyword">return</span>\n    content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position<span class="token operator">=</span><span class="token string">&#39;absolute&#39;</span>\n    <span class="token keyword">let</span> xmove <span class="token operator">=</span> event<span class="token punctuation">.</span>clientX <span class="token operator">-</span> startX\n    <span class="token keyword">let</span> ymove <span class="token operator">=</span> event<span class="token punctuation">.</span>clientY <span class="token operator">-</span> startY\n\n    content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">calcMove</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>xmove<span class="token punctuation">,</span>maxLeft<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span>\n    content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">calcMove</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span>ymove<span class="token punctuation">,</span>maxTop<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="如何做到在页面平滑移动的" tabindex="-1"><a class="header-anchor" href="#如何做到在页面平滑移动的" aria-hidden="true">#</a> 如何做到在页面平滑移动的？</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>监听mousemove,mousedown,mouseup</li><li>position:定位</li></ol></div><p><strong>mousemove的事件监听在document元素上，而不是在移动的元素上</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>content<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousedown&quot;</span><span class="token punctuation">,</span>moveStart<span class="token punctuation">)</span>\ncontent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mouseup&quot;</span><span class="token punctuation">,</span>moveStop<span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">moveStart</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span>MouseEvent</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// 在document上监听mousemove事件</span>\n        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">,</span>moveMove<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">moveStop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    startMove <span class="token operator">=</span> <span class="token boolean">false</span>\n    <span class="token comment">// clear event listener</span>\n    document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">,</span>moveMove<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="获取width" tabindex="-1"><a class="header-anchor" href="#获取width" aria-hidden="true">#</a> 获取width</h2>',11),l={href:"https://www.javascripttutorial.net/javascript-dom/javascript-width-height/",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Fv)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n* width: 600px;\n* width: 100%; // 会进行计算\n*/</span>\n<span class="token keyword">function</span> <span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">el</span><span class="token operator">:</span>HTMLElement</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">)</span>  \n  <span class="token keyword">return</span> <span class="token operator">+</span>v<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;px&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="鼠标移动图标" tabindex="-1"><a class="header-anchor" href="#鼠标移动图标" aria-hidden="true">#</a> 鼠标移动图标</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property">cursor</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',4),i={href:"https://gist.github.com/mhull/e3f6caa5734519ed06fa/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.javascripttutorial.net/javascript-dom/",target:"_blank",rel:"noopener noreferrer"},k={},m=(0,a(66262).A)(k,[["render",function(n,s){const a=(0,t.g2)("OutboundLink"),k=(0,t.g2)("common-progresson-snippet");return(0,t.uX)(),(0,t.CE)(t.FK,null,[e,(0,t.Lk)("p",null,[(0,t.Lk)("a",p,[(0,t.eW)("项目预览（Project view）"),(0,t.bF)(a)])]),(0,t.Lk)("p",null,[(0,t.Lk)("a",o,[(0,t.eW)("vanilla Source Code"),(0,t.bF)(a)])]),(0,t.bF)(k,{src:"https://q10viking.github.io/Mini-FrontEnd-project/36%20Drag%20Move/vanilla/dist/"}),c,(0,t.Lk)("p",null,[(0,t.Lk)("a",l,[(0,t.eW)("Getting Width & Height of an Element in JavaScript (javascripttutorial.net)"),(0,t.bF)(a)])]),r,(0,t.Lk)("p",null,[(0,t.Lk)("a",i,[(0,t.eW)("Draggable elements that have been styled to indicate draggability to users (github.com)"),(0,t.bF)(a)])]),(0,t.Lk)("p",null,[(0,t.Lk)("a",u,[(0,t.eW)("JavaScript DOM Tutorial (javascripttutorial.net)"),(0,t.bF)(a)])])],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);