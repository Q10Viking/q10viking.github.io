"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[39069],{33520:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-1ae0cc46",path:"/css/01%20selector.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/css/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"id选择器",slug:"id选择器",children:[]},{level:2,title:"类选择器",slug:"类选择器",children:[{level:3,title:"玩法： Google样式",slug:"玩法-google样式",children:[]}]},{level:2,title:"标签选择器",slug:"标签选择器",children:[]},{level:2,title:"通配符*全选择器",slug:"通配符-全选择器",children:[]},{level:2,title:"Combinator组合",slug:"combinator组合",children:[{level:3,title:"Descend后代选择器",slug:"descend后代选择器",children:[]},{level:3,title:"Child子选择器",slug:"child子选择器",children:[]},{level:3,title:"Adjacent Sibling相邻",slug:"adjacent-sibling相邻",children:[]},{level:3,title:"General Sibling",slug:"general-sibling",children:[]},{level:3,title:"交集选择器",slug:"交集选择器",children:[]},{level:3,title:"1.3 清除默认样式（重要）",slug:"_1-3-清除默认样式-重要",children:[]}]},{level:2,title:"属性选择器",slug:"属性选择器",children:[{level:3,title:"普通选择器",slug:"普通选择器",children:[]},{level:3,title:"^属性开头",slug:"属性开头",children:[]},{level:3,title:"$属性结束",slug:"属性结束",children:[]},{level:3,title:"*包含属性",slug:"包含属性",children:[]}]},{level:2,title:"Grouping Rule",slug:"grouping-rule",children:[]},{level:2,title:"Pseudo-classes 伪类选择器",slug:"pseudo-classes-伪类选择器",children:[{level:3,title:":first-child 第一个元素",slug:"first-child-第一个元素",children:[]},{level:3,title:":last-child 最后一个元素",slug:"last-child-最后一个元素",children:[]},{level:3,title:":nth-child",slug:"nth-child",children:[]},{level:3,title:":nth-last-child",slug:"nth-last-child",children:[]},{level:3,title:"类型选择器",slug:"类型选择器",children:[]},{level:3,title:"状态选择器",slug:"状态选择器",children:[]},{level:3,title:"a标签的伪元素love hate原则",slug:"a标签的伪元素love-hate原则",children:[]}]},{level:2,title:"Pseudo-elements",slug:"pseudo-elements",children:[{level:3,title:"selection 选中的元素",slug:"selection-选中的元素",children:[]}]},{level:2,title:"not",slug:"not",children:[]},{level:2,title:"css 优先级",slug:"css-优先级",children:[]}],filePathRelative:"css/01 selector.md"}},88323:(s,n,a)=>{a.r(n),a.d(n,{default:()=>q});var e=a(20641);const t=(0,e.Fv)('<h2 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器" aria-hidden="true">#</a> id选择器</h2><p><img src="/images/css/202112081217328.jpg" alt="202112081217328"></p><h2 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器</h2><p><img src="/images/css/202112081215350.jpg" alt="202112081215350"></p><h3 id="玩法-google样式" tabindex="-1"><a class="header-anchor" href="#玩法-google样式" aria-hidden="true">#</a> 玩法： Google样式</h3>',5),l=(0,e.Fv)('<h2 id="标签选择器" tabindex="-1"><a class="header-anchor" href="#标签选择器" aria-hidden="true">#</a> 标签选择器</h2><p><img src="/images/css/202112081213294.jpg" alt="202112081213294"></p><h2 id="通配符-全选择器" tabindex="-1"><a class="header-anchor" href="#通配符-全选择器" aria-hidden="true">#</a> 通配符*全选择器</h2><p><img src="/images/css/202112081216292.jpg" alt="202112081216292"></p><h2 id="combinator组合" tabindex="-1"><a class="header-anchor" href="#combinator组合" aria-hidden="true">#</a> Combinator组合</h2><h3 id="descend后代选择器" tabindex="-1"><a class="header-anchor" href="#descend后代选择器" aria-hidden="true">#</a> Descend后代选择器</h3><p><img src="/images/css/202112081301739.jpg" alt="202112081301739"></p><h3 id="child子选择器" tabindex="-1"><a class="header-anchor" href="#child子选择器" aria-hidden="true">#</a> Child子选择器</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这里的子 指的是 亲儿子 不包含孙子 重孙子之类</p></div><p><img src="/images/css/202112081300044.jpg" alt="202112081300044"></p><h3 id="adjacent-sibling相邻" tabindex="-1"><a class="header-anchor" href="#adjacent-sibling相邻" aria-hidden="true">#</a> Adjacent Sibling相邻</h3><p><img src="/images/css/202112081257664.jpg" alt="202112081257664"></p><h3 id="general-sibling" tabindex="-1"><a class="header-anchor" href="#general-sibling" aria-hidden="true">#</a> General Sibling</h3><p><img src="/images/css/202112081259877.jpg" alt="202112081259877"></p><p>比如有如下的html结构代码</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Item1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Item2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Item3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当选择器为如下形式的时候,只有Item2,Item3为红色</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">li</span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">li ~ li</span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',18),p=(0,e.Fv)('<h3 id="交集选择器" tabindex="-1"><a class="header-anchor" href="#交集选择器" aria-hidden="true">#</a> 交集选择器</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>select a tag that has the class</p><p>两个选择器之间<strong>不能有空格</strong></p></div><p><img src="/images/css/202112081634183.jpg" alt="202112081634183"></p><h3 id="_1-3-清除默认样式-重要" tabindex="-1"><a class="header-anchor" href="#_1-3-清除默认样式-重要" aria-hidden="true">#</a> 1.3 清除默认样式（重要）</h3><ol><li>清除样式能够在开发中避免浏览器突然添加的默认样式（这会影响开发的预期效果）</li></ol><p>从效率上来看并集选择器在书写上繁琐，但是效率比较高</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// 通配符*全选择器\n*</span><span class="token punctuation">{</span>\n\t<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">// 并集选择器\ndiv,p</span><span class="token punctuation">{</span>\n   <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n   <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> \n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2><p><img src="/images/css/202112081219231.jpg" alt="202112081219231"></p><p><img src="/images/css/202112142110428.jpg" alt="202112142110428"></p><h3 id="普通选择器" tabindex="-1"><a class="header-anchor" href="#普通选择器" aria-hidden="true">#</a> 普通选择器</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>E[attr=<span class="token string">&quot;val&quot;</span>]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="属性开头" tabindex="-1"><a class="header-anchor" href="#属性开头" aria-hidden="true">#</a> ^属性开头</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>E[attr^=<span class="token string">&quot;val&quot;</span>]  选择拥有attr属性且属性值为val开头的E元素\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="属性结束" tabindex="-1"><a class="header-anchor" href="#属性结束" aria-hidden="true">#</a> $属性结束</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>E[attr$=<span class="token string">&quot;val&quot;</span>]  选择拥有attr属性且属性值以val结束的E元素\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="包含属性" tabindex="-1"><a class="header-anchor" href="#包含属性" aria-hidden="true">#</a> *包含属性</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>E[attr*=<span class="token string">&quot;val&quot;</span>]   选择拥有attr属性且属性值中包含val的E元素\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr><h2 id="grouping-rule" tabindex="-1"><a class="header-anchor" href="#grouping-rule" aria-hidden="true">#</a> Grouping Rule</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>并集选择器通常用于集体声明 ，<strong>逗号隔开的（和的意思）</strong></p><p>share the same declaration set</p></div>',21),c=(0,e.Lk)("div",{class:"language-css ext-css line-numbers-mode"},[(0,e.Lk)("pre",{class:"language-css"},[(0,e.Lk)("code",null,[(0,e.Lk)("span",{class:"token selector"},".main-nav__item a:hover, \n.main-nav__item a:active"),(0,e.Lk)("span",{class:"token punctuation"},"{"),(0,e.eW)("\n    "),(0,e.Lk)("span",{class:"token property"},"color"),(0,e.Lk)("span",{class:"token punctuation"},":"),(0,e.eW)(" white"),(0,e.Lk)("span",{class:"token punctuation"},";"),(0,e.eW)("\n"),(0,e.Lk)("span",{class:"token punctuation"},"}"),(0,e.eW)("\n")])]),(0,e.Lk)("div",{class:"line-numbers"},[(0,e.Lk)("span",{class:"line-number"},"1"),(0,e.Lk)("br"),(0,e.Lk)("span",{class:"line-number"},"2"),(0,e.Lk)("br"),(0,e.Lk)("span",{class:"line-number"},"3"),(0,e.Lk)("br"),(0,e.Lk)("span",{class:"line-number"},"4"),(0,e.Lk)("br")])],-1),i=(0,e.Lk)("div",{class:"language-css ext-css line-numbers-mode"},[(0,e.Lk)("pre",{class:"language-css"},[(0,e.Lk)("code",null,[(0,e.Lk)("span",{class:"token selector"},".main-nav__item a:hover"),(0,e.Lk)("span",{class:"token punctuation"},"{"),(0,e.eW)("\n    "),(0,e.Lk)("span",{class:"token property"},"color"),(0,e.Lk)("span",{class:"token punctuation"},":"),(0,e.eW)(" white"),(0,e.Lk)("span",{class:"token punctuation"},";"),(0,e.eW)("\n"),(0,e.Lk)("span",{class:"token punctuation"},"}"),(0,e.eW)("\n\n"),(0,e.Lk)("span",{class:"token selector"},".main-nav__item a:active"),(0,e.Lk)("span",{class:"token punctuation"},"{"),(0,e.eW)("\n    "),(0,e.Lk)("span",{class:"token property"},"color"),(0,e.Lk)("span",{class:"token punctuation"},":"),(0,e.eW)(" white"),(0,e.Lk)("span",{class:"token punctuation"},";"),(0,e.eW)("\n"),(0,e.Lk)("span",{class:"token punctuation"},"}"),(0,e.eW)("\n")])]),(0,e.Lk)("div",{class:"line-numbers"},[(0,e.Lk)("span",{class:"line-number"},"1"),(0,e.Lk)("br"),(0,e.Lk)("span",{class:"line-number"},"2"),(0,e.Lk)("br"),(0,e.Lk)("span",{class:"line-number"},"3"),(0,e.Lk)("br"),(0,e.Lk)("span",{class:"line-number"},"4"),(0,e.Lk)("br"),(0,e.Lk)("span",{class:"line-number"},"5"),(0,e.Lk)("br"),(0,e.Lk)("span",{class:"line-number"},"6"),(0,e.Lk)("br"),(0,e.Lk)("span",{class:"line-number"},"7"),(0,e.Lk)("br")])],-1),r=(0,e.Lk)("h2",{id:"pseudo-classes-伪类选择器",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#pseudo-classes-伪类选择器","aria-hidden":"true"},"#"),(0,e.eW)(" Pseudo-classes 伪类选择器")],-1),o=(0,e.Lk)("p",null,[(0,e.Lk)("img",{src:"/images/css/202112081600641.jpg",alt:"202112081600641"})],-1),u={class:"custom-container tip"},d=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),h={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Fv)('<h3 id="first-child-第一个元素" tabindex="-1"><a class="header-anchor" href="#first-child-第一个元素" aria-hidden="true">#</a> :first-child 第一个元素</h3><h3 id="last-child-最后一个元素" tabindex="-1"><a class="header-anchor" href="#last-child-最后一个元素" aria-hidden="true">#</a> :last-child 最后一个元素</h3><h3 id="nth-child" tabindex="-1"><a class="header-anchor" href="#nth-child" aria-hidden="true">#</a> :nth-child</h3><h4 id="_1-even偶数" tabindex="-1"><a class="header-anchor" href="#_1-even偶数" aria-hidden="true">#</a> 1. even偶数</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>四个单词的是偶数</p></div><h4 id="_2-odd-奇数" tabindex="-1"><a class="header-anchor" href="#_2-odd-奇数" aria-hidden="true">#</a> 2. odd 奇数</h4><h4 id="_3-表达式-a-n-b" tabindex="-1"><a class="header-anchor" href="#_3-表达式-a-n-b" aria-hidden="true">#</a> 3. 表达式 a*n+b</h4><h4 id="_4-数字" tabindex="-1"><a class="header-anchor" href="#_4-数字" aria-hidden="true">#</a> 4. 数字</h4><h3 id="nth-last-child" tabindex="-1"><a class="header-anchor" href="#nth-last-child" aria-hidden="true">#</a> :nth-last-child</h3><h3 id="类型选择器" tabindex="-1"><a class="header-anchor" href="#类型选择器" aria-hidden="true">#</a> 类型选择器</h3><h4 id="nth-of-type" tabindex="-1"><a class="header-anchor" href="#nth-of-type" aria-hidden="true">#</a> :nth-of-type</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>参数同:nth-child</p></div>',12),k={href:"https://q10viking.github.io/minifrontendproject/19%20Expanding%20Cards.html",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Fv)('<h4 id="nth-last-of-type" tabindex="-1"><a class="header-anchor" href="#nth-last-of-type" aria-hidden="true">#</a> :nth-last-of-type</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>参数同:nth-child</p></div><h3 id="状态选择器" tabindex="-1"><a class="header-anchor" href="#状态选择器" aria-hidden="true">#</a> 状态选择器</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>input[type=radio]<span class="token punctuation">:</span>checked\n\n.<span class="token property">wrap</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">:</span>hover\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="a标签的伪元素love-hate原则" tabindex="-1"><a class="header-anchor" href="#a标签的伪元素love-hate原则" aria-hidden="true">#</a> a标签的伪元素love hate原则</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">a:link</span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">a:visited</span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">a:hover</span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">a:active</span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>**玩法：**用a标签进行包裹，以便使用hover</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>a:hover .mask{\n\tdisplay: block; // 显示\n}\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t<span class="token comment">&lt;!-- 遮罩 --&gt;</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="pseudo-elements" tabindex="-1"><a class="header-anchor" href="#pseudo-elements" aria-hidden="true">#</a> Pseudo-elements</h2>',9),m={class:"custom-container tip"},v=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),f={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements",target:"_blank",rel:"noopener noreferrer"},L=(0,e.Fv)('<p><img src="/images/css/202112081600641.jpg" alt="202112081600641"></p><h3 id="selection-选中的元素" tabindex="-1"><a class="header-anchor" href="#selection-选中的元素" aria-hidden="true">#</a> selection 选中的元素</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div::selection</span> <span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>input 类型为range的标签</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input[type = &#39;range&#39;]::-webkit-slider-runnable-track</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">input[type = &#39;range&#39;]::-webkit-slider-thumb</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="not" tabindex="-1"><a class="header-anchor" href="#not" aria-hidden="true">#</a> not</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>排除特定的选择器</p></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.signup-form input:not([type=&quot;checkbox&quot;]):focus,\n.signup-form select:focus</span><span class="token punctuation">{</span>\n    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #d8f3cf<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #2ddf5c<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>最后一个元素没有下划线</p>',9),x={href:"https://q10viking.github.io/minifrontendproject/26%20Live%20User%20Filter.html",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Fv)('<div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// 下划线得设置</span>\n&amp;<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token punctuation">:</span>last-of-type<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid <span class="token variable">$gray</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="css-优先级" tabindex="-1"><a class="header-anchor" href="#css-优先级" aria-hidden="true">#</a> css 优先级</h2><p><img src="/images/css/202112081225792.jpg" alt="202112081225792"></p>',3),_={},q=(0,a(66262).A)(_,[["render",function(s,n){const a=(0,e.g2)("common-codepen-snippet"),_=(0,e.g2)("CodeGroupItem"),q=(0,e.g2)("CodeGroup"),j=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[t,(0,e.bF)(a,{title:"类选择器",slug:"VwjyREg"}),l,(0,e.bF)(a,{title:"Sibling Genenal",slug:"MWGrBwW"}),p,(0,e.bF)(q,null,{default:(0,e.k6)((()=>[(0,e.bF)(_,{title:"Grouping Rule"},{default:(0,e.k6)((()=>[c])),_:1}),(0,e.bF)(_,{title:"等同于"},{default:(0,e.k6)((()=>[i])),_:1})])),_:1}),r,o,(0,e.Lk)("div",u,[d,(0,e.Lk)("p",null,[(0,e.Lk)("a",h,[(0,e.eW)("Pseudo-classes - CSS: Cascading Style Sheets | MDN (mozilla.org)"),(0,e.bF)(j)])])]),b,(0,e.Lk)("p",null,[(0,e.Lk)("a",k,[(0,e.eW)("Expanding Cards"),(0,e.bF)(j)])]),g,(0,e.Lk)("div",m,[v,(0,e.Lk)("p",null,[(0,e.Lk)("a",f,[(0,e.eW)("Pseudo-elements - CSS: Cascading Style Sheets | MDN (mozilla.org)"),(0,e.bF)(j)])])]),L,(0,e.Lk)("p",null,[(0,e.Lk)("a",x,[(0,e.eW)("Live User Filter"),(0,e.bF)(j)])]),y],64)}]])},66262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);