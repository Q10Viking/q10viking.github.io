"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[93657],{41926:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-4c7c0b28",path:"/minifrontendproject/35%20left%20right%20resize%20pannel.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/minifrontendproject/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Resize Pannel",slug:"resize-pannel",children:[]},{level:2,title:"原理",slug:"原理",children:[{level:3,title:"getBoundingClientRect",slug:"getboundingclientrect",children:[]}]},{level:2,title:"鼠标",slug:"鼠标",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"minifrontendproject/35 left right resize pannel.md"}},13027:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var e=a(20641);const t=(0,e.Lk)("h2",{id:"resize-pannel",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#resize-pannel","aria-hidden":"true"},"#"),(0,e.eW)(" Resize Pannel")],-1),p={href:"https://q10viking.github.io/Mini-FrontEnd-project/40%20resize%20panel/vanilla/dist/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/40%20resize%20panel/vanilla",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Fv)('<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>设置一个入口：mousedown，然后监听window/document 的mousemove。然后改变相应的width</p></div><h3 id="getboundingclientrect" tabindex="-1"><a class="header-anchor" href="#getboundingclientrect" aria-hidden="true">#</a> getBoundingClientRect</h3><blockquote><p>MouseEvent.x === MouseEvent.clientX</p></blockquote><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">const</span> leftPannel <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.left-pannel&quot;</span><span class="token punctuation">)</span><span class="token operator">!</span> <span class="token keyword">as</span> HTMLElement\n<span class="token keyword">const</span> rightPannel <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.right-pannel&quot;</span><span class="token punctuation">)</span><span class="token operator">!</span> <span class="token keyword">as</span> HTMLElement\n<span class="token keyword">const</span> gutter <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.gutter&quot;</span><span class="token punctuation">)</span><span class="token operator">!</span> <span class="token keyword">as</span> HTMLElement\n\ngutter<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span>resizePannel<span class="token punctuation">)</span>\n<span class="token keyword">function</span> <span class="token function">resizePannel</span><span class="token punctuation">(</span>event<span class="token operator">:</span>MouseEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// 居然是一样的</span>\n  <span class="token comment">// console.log(event.x,event.clientX);</span>\n  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span>mousemove<span class="token punctuation">)</span>\n  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span>mouseup<span class="token punctuation">)</span>\n  <span class="token keyword">let</span> prevX <span class="token operator">=</span> event<span class="token punctuation">.</span>x\n\n  <span class="token keyword">let</span> lefthPannelWidth <span class="token operator">=</span> leftPannel<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width\n  <span class="token keyword">let</span> rightPannelWidth <span class="token operator">=</span> rightPannel<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width\n  <span class="token keyword">function</span> <span class="token function">mousemove</span><span class="token punctuation">(</span>e<span class="token operator">:</span>MouseEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>\n   <span class="token keyword">let</span> distance <span class="token operator">=</span>  e<span class="token punctuation">.</span>x <span class="token operator">-</span> prevX\n   <span class="token comment">// 除了getComputedStyle获得width的方式还有getBoundingClientRect</span>\n   leftPannel<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>lefthPannelWidth<span class="token operator">+</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span>\n   rightPannel<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rightPannelWidth<span class="token operator">-</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">function</span> <span class="token function">mouseup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span>mousemove<span class="token punctuation">)</span>\n    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span>mouseup<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="鼠标" tabindex="-1"><a class="header-anchor" href="#鼠标" aria-hidden="true">#</a> 鼠标</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>cursor: col-resize</p></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',8),c={href:"https://codepen.io/pablowbk/pen/bGbxZoz?editors=1111",target:"_blank",rel:"noopener noreferrer"},i={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",target:"_blank",rel:"noopener noreferrer"},r={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/resize",target:"_blank",rel:"noopener noreferrer"},u={},k=(0,a(66262).A)(u,[["render",function(n,s){const a=(0,e.g2)("OutboundLink"),u=(0,e.g2)("common-progresson-snippet"),k=(0,e.g2)("common-codepen-snippet");return(0,e.uX)(),(0,e.CE)(e.FK,null,[t,(0,e.Lk)("p",null,[(0,e.Lk)("a",p,[(0,e.eW)("项目预览（Project view）"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",o,[(0,e.eW)("vanilla Source Code"),(0,e.bF)(a)])]),(0,e.bF)(u,{src:"https://q10viking.github.io/Mini-FrontEnd-project/40%20resize%20panel/vanilla/dist/"}),l,(0,e.bF)(k,{title:"resize pannel",slug:"YzaYwQL"}),(0,e.Lk)("p",null,[(0,e.Lk)("a",c,[(0,e.eW)("Resize Panels vanilla JS (codepen.io)"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",i,[(0,e.eW)("cursor - CSS: Cascading Style Sheets | MDN (mozilla.org)"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",r,[(0,e.eW)("resize - CSS: Cascading Style Sheets | MDN (mozilla.org)"),(0,e.bF)(a)])])],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);