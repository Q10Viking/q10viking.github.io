"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[81577],{75924:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-5eaa7996",path:"/minifrontendproject/13%20Drink%20Water.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/minifrontendproject/"}},excerpt:"",headers:[{level:2,title:"Drink Water",slug:"drink-water",children:[]},{level:2,title:"大容器的元素占位",slug:"大容器的元素占位",children:[{level:3,title:"JS处理",slug:"js处理",children:[]},{level:3,title:"css",slug:"css",children:[]}]},{level:2,title:"flex: 1",slug:"flex-1",children:[]}],filePathRelative:"minifrontendproject/13 Drink Water.md"}},79735:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var p=a(20641);const t=(0,p.Lk)("h2",{id:"drink-water",tabindex:"-1"},[(0,p.Lk)("a",{class:"header-anchor",href:"#drink-water","aria-hidden":"true"},"#"),(0,p.eW)(" Drink Water")],-1),e={href:"https://q10viking.github.io/Mini-FrontEnd-project/17%20Drink%20Water/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/17%20Drink%20Water",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Fv)('<h2 id="大容器的元素占位" tabindex="-1"><a class="header-anchor" href="#大容器的元素占位" aria-hidden="true">#</a> 大容器的元素占位</h2><h3 id="js处理" tabindex="-1"><a class="header-anchor" href="#js处理" aria-hidden="true">#</a> JS处理</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateBigCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> fullCups <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.cup-small.full&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length\n    <span class="token keyword">const</span> totalCups <span class="token operator">=</span> smallCups<span class="token punctuation">.</span>length\n\n\n    <span class="token comment">// update content</span>\n    liters<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">2</span> <span class="token operator">-</span> fullCups <span class="token operator">/</span> totalCups<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">L</span><span class="token template-punctuation string">`</span></span>\n    percentage<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fullCups <span class="token operator">/</span> totalCups <span class="token operator">*</span><span class="token number">100</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span>\n    \n\n    <span class="token keyword">if</span><span class="token punctuation">(</span>fullCups <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        percentage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">&#39;hidden&#39;</span>\n        percentage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n        percentage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">&#39;visible&#39;</span>\n        percentage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fullCups <span class="token operator">/</span> totalCups <span class="token operator">*</span> <span class="token number">330</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span>\n    <span class="token punctuation">}</span> \n    \n    <span class="token keyword">if</span><span class="token punctuation">(</span>fullCups <span class="token operator">===</span> totalCups<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// 结合使用</span>\n        remained<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">&quot;hidden&quot;</span>\n        remained<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n        <span class="token comment">// 有内容了height = 0不再生效</span>\n        remained<span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> <span class="token string">&quot;visible&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li><strong>剩余空间用flex: 1占满</strong></li><li><strong>已喝的百分比区域则用height来表示</strong></li></ol></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.cup .remained</span><span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/*尽量占据剩余空间*/</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="flex-1" tabindex="-1"><a class="header-anchor" href="#flex-1" aria-hidden="true">#</a> flex: 1</h2>',7),c={href:"https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Fv)('<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">flex</span><span class="token punctuation">:</span> 0 1 auto<span class="token punctuation">;</span> <span class="token comment">/*默认*/</span>\n<span class="token comment">/*等于*/</span>\n<span class="token property">flex-grow</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token property">flex-basis</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n\n\n<span class="token property">flex</span><span class="token punctuation">:</span> 1\n<span class="token property">flex-grow</span> <span class="token punctuation">:</span> 1<span class="token punctuation">;</span>  \n<span class="token property">flex-shrink</span> <span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token property">flex-basis</span> <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',1),i={},u=(0,a(66262).A)(i,[["render",function(n,s){const a=(0,p.g2)("OutboundLink"),i=(0,p.g2)("common-progresson-snippet");return(0,p.uX)(),(0,p.CE)(p.FK,null,[t,(0,p.Lk)("p",null,[(0,p.Lk)("a",e,[(0,p.eW)("项目预览（Project view）"),(0,p.bF)(a)])]),(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("Source Code"),(0,p.bF)(a)])]),(0,p.bF)(i,{src:"https://q10viking.github.io/Mini-FrontEnd-project/17%20Drink%20Water/"}),l,(0,p.Lk)("p",null,[(0,p.Lk)("a",c,[(0,p.eW)("Understanding flex-grow, flex-shrink, and flex-basis | CSS-Tricks - CSS-Tricks"),(0,p.bF)(a)])]),r],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);