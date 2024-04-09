"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[61812],{42018:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-24a88c86",path:"/designpattern/09%20%E8%A3%85%E9%A5%B0%E8%80%85%E6%A8%A1%E5%BC%8F.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/designpattern/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"1. 模式定义",slug:"_1-模式定义",children:[]},{level:2,title:"2. 开发优点",slug:"_2-开发优点",children:[]},{level:2,title:"3. 实例代码",slug:"_3-实例代码",children:[]},{level:2,title:"4.应用场景",slug:"_4-应用场景",children:[]},{level:2,title:"5. Servlet API",slug:"_5-servlet-api",children:[]}],filePathRelative:"designpattern/09 装饰者模式.md"}},68787:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(20641);const p=(0,e.Fv)('<h2 id="_1-模式定义" tabindex="-1"><a class="header-anchor" href="#_1-模式定义" aria-hidden="true">#</a> 1. 模式定义</h2><img src="/images/designpattern/image-20210328120512075.png" alt="image-20210328120512075"><h2 id="_2-开发优点" tabindex="-1"><a class="header-anchor" href="#_2-开发优点" aria-hidden="true">#</a> 2. 开发优点</h2><p><strong>扩展一个类的功能或给一个类添加附加职责</strong></p><ol><li>不改变原有对象的情况下给一个对象扩展功能</li><li>使用<strong>不同的组合</strong>可以实现不同的效果</li><li>符合开闭原则： 对修改关闭,对拓展开放</li></ol><p>以Wrapper结尾</p><h2 id="_3-实例代码" tabindex="-1"><a class="header-anchor" href="#_3-实例代码" aria-hidden="true">#</a> 3. 实例代码</h2>',7),t={href:"https://github.com/Q10Viking/learncode/tree/main/designpattern/src/org/hzz/decorator",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Fv)('<blockquote><p>接口连接了一切</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Decorator</span> <span class="token keyword">implements</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> <span class="token class-name">Component</span> component<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">Decorator</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>component <span class="token operator">=</span> component<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteComponent1</span> <span class="token keyword">extends</span> <span class="token class-name">Decorator</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">ConcreteComponent1</span><span class="token punctuation">(</span><span class="token class-name">Component</span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;美颜.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>component<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>测试</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainTest</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Component</span> component <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteComponent2</span><span class="token punctuation">(</span>\n                <span class="token keyword">new</span> <span class="token class-name">ConcreteComponent1</span><span class="token punctuation">(</span>\n                        <span class="token keyword">new</span> <span class="token class-name">ConcreteComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        component<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * 滤镜.\n * 美颜.\n * 拍照.\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_4-应用场景" tabindex="-1"><a class="header-anchor" href="#_4-应用场景" aria-hidden="true">#</a> 4.应用场景</h2><p>扩展一个类的功能或给一个类添加附加职</p><h2 id="_5-servlet-api" tabindex="-1"><a class="header-anchor" href="#_5-servlet-api" aria-hidden="true">#</a> 5. Servlet API</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span>HttpServletRequestWrapper</span>\n<span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span>HttpServletResponseWrapper</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',10),c={},l=(0,a(66262).A)(c,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[p,(0,e.Lk)("p",null,[(0,e.Lk)("a",t,[(0,e.eW)("Source Code"),(0,e.bF)(a)])]),o],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);