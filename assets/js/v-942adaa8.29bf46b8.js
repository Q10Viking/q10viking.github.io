"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[96754],{28165:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-942adaa8",path:"/typescript/19%20declaring-this-in-a-function.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/typescript/"}},excerpt:"",headers:[{level:2,title:"addEventListener callback function",slug:"addeventlistener-callback-function",children:[]},{level:2,title:"在方法上声明this",slug:"在方法上声明this",children:[{level:3,title:"转化成js",slug:"转化成js",children:[]}]}],filePathRelative:"typescript/19 declaring-this-in-a-function.md"}},10989:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(20641);const p=(0,t.Fv)('<h2 id="addeventlistener-callback-function" tabindex="-1"><a class="header-anchor" href="#addeventlistener-callback-function" aria-hidden="true">#</a> addEventListener callback function</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code>fill<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dragstart&quot;</span><span class="token punctuation">,</span>e <span class="token operator">=&gt;</span> <span class="token function">dragStart</span><span class="token punctuation">(</span>e <span class="token keyword">as</span> DragEvent<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">dragStart</span><span class="token punctuation">(</span>event<span class="token operator">:</span>DragEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>  <span class="token comment">// compiler error</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;drag start&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="在方法上声明this" tabindex="-1"><a class="header-anchor" href="#在方法上声明this" aria-hidden="true">#</a> 在方法上声明this</h2><blockquote><p>必须声明在第一个参数</p></blockquote>',4),e={href:"https://www.typescriptlang.org/docs/handbook/2/functions.html?#declaring-this-in-a-function",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Fv)('<div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code>fill<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dragstart&quot;</span><span class="token punctuation">,</span>dragStart<span class="token punctuation">)</span>\n<span class="token keyword">function</span> <span class="token function">dragStart</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span>HTMLElement<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 效果等价与</span>\nfill<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dragstart&quot;</span><span class="token punctuation">,</span>e <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">dragStart</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">dragStart</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span>HTMLElement<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;drag start&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr><p>调用方式</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code>fill<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dragstart&quot;</span><span class="token punctuation">,</span>e <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">dragStart</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 输出DOM元素</span>\n  <span class="token comment">// 不一样  </span>\n  <span class="token function">dragStart</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>   <span class="token comment">// 输出undefined</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">dragStart</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span>HTMLElement<span class="token punctuation">,</span>num<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>但是只有一个参数的时候，就不一样了</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code>fill<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dragstart&quot;</span><span class="token punctuation">,</span>e <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">dragStart</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span>\n  <span class="token comment">// error</span>\n  <span class="token comment">// dragStart(e.target as HTMLElement)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">dragStart</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span>HTMLElement<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;drag start&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr><h3 id="转化成js" tabindex="-1"><a class="header-anchor" href="#转化成js" aria-hidden="true">#</a> 转化成js</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const btn = document.getElementById(&#39;btn&#39;)!\n\nbtn?.addEventListener(&#39;click&#39;,showMe)\nbtn?.addEventListener(&#39;click&#39;,showMeAnthor)\n\nfunction showMe(this:HTMLElement){\n    console.log(this)\n}\n\nfunction showMeAnthor(event:Event){\n    console.log(event.target)\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>ts转换成js的样子</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbtn <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> btn <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token operator">:</span> btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> showMe<span class="token punctuation">)</span><span class="token punctuation">;</span>\nbtn <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> btn <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token operator">:</span> btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> showMeAnthor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">showMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">showMeAnthor</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',11),c={},l=(0,a(66262).A)(c,[["render",function(n,s){const a=(0,t.g2)("OutboundLink");return(0,t.uX)(),(0,t.CE)(t.FK,null,[p,(0,t.Lk)("p",null,[(0,t.Lk)("a",e,[(0,t.eW)("TypeScript: Documentation - declaring-this-in-a-function"),(0,t.bF)(a)])]),o],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);