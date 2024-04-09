"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[68203],{96839:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-36de9b7e",path:"/golang/06%20basic%20example.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/golang/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Hello World",slug:"hello-world",children:[]},{level:2,title:"Values",slug:"values",children:[]},{level:2,title:"Variables",slug:"variables",children:[{level:3,title:"多个变量",slug:"多个变量",children:[]},{level:3,title:"类型别名",slug:"类型别名",children:[]},{level:3,title:"变量范围",slug:"变量范围",children:[]}]},{level:2,title:"Constant",slug:"constant",children:[{level:3,title:"iota",slug:"iota",children:[]},{level:3,title:"枚举",slug:"枚举",children:[]}]},{level:2,title:"For",slug:"for",children:[]},{level:2,title:"If-else",slug:"if-else",children:[]},{level:2,title:"标准输入",slug:"标准输入",children:[]}],filePathRelative:"golang/06 basic example.md"}},28929:(n,s,a)=>{a.r(s),a.d(s,{default:()=>x});var e=a(20641);const p={class:"custom-container tip"},t=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),l={href:"https://gobyexample.com",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Lk)("h2",{id:"hello-world",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#hello-world","aria-hidden":"true"},"#"),(0,e.eW)(" Hello World")],-1),c={href:"https://gobyexample.com/hello-world",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/Q10Viking/Learn-golang/blob/main/basic/01%20hello%20world/hello-world.go",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Fv)('<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World.静默 learning Go Programming Language&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="values" tabindex="-1"><a class="header-anchor" href="#values" aria-hidden="true">#</a> Values</h2>',2),i={href:"https://gobyexample.com/values",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/Q10Viking/Learn-golang/blob/main/basic/02%20values/values.go",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Fv)('<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Go&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;lang&quot;</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;7.0/3.0 = &quot;</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token operator">/</span><span class="token number">3.0</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;true &amp;&amp; true&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;true || false&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;!true&quot;</span><span class="token punctuation">,</span> <span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**output\nGolang\n7.0/3.0 =  2.3333333333333335\ntrue &amp;&amp; true true\ntrue || false true\n!true false\n*/</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>声明变量的方式</p></div>',3),m={href:"https://gobyexample.com/variables",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Fv)('<p><img src="/images/golang/image-20230323221041483.png" alt="image-20230323221041483"></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// 自动类型推断</span>\n\t<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;静默&quot;</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n\n\t<span class="token comment">// 声明多个变量并指定类型</span>\n\t<span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>\n\n\t<span class="token comment">// var 简化写法,注意只能在方法里面</span>\n\tf <span class="token operator">:=</span> <span class="token boolean">true</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>\n\n\t<span class="token comment">// var tmp1  会报错：没有指定类型</span>\n\t<span class="token keyword">var</span> tmp2 <span class="token builtin">int</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>tmp2<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**output\n静默\n3 2\ntrue\n0\n*/</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="多个变量" tabindex="-1"><a class="header-anchor" href="#多个变量" aria-hidden="true">#</a> 多个变量</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">multiVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> <span class="token punctuation">(</span>\n\t\thello <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Hello &quot;</span>\n\t\tworld <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span>\n\t<span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>world<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> IDnum <span class="token builtin">int</span>\n<span class="token keyword">type</span> Celsius <span class="token builtin">float64</span>\n\n<span class="token keyword">var</span> userID IDnum\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="变量范围" tabindex="-1"><a class="header-anchor" href="#变量范围" aria-hidden="true">#</a> 变量范围</h3><ul><li>file block</li><li>package block</li></ul><h4 id="package-block" tabindex="-1"><a class="header-anchor" href="#package-block" aria-hidden="true">#</a> package block</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>同包变量可以访问</p></div><p><img src="/images/golang/image-20230326133349134.png" alt="image-20230326133349134"></p><p><img src="/images/golang/image-20230326134050854.png" alt="image-20230326134050854"></p><h2 id="constant" tabindex="-1"><a class="header-anchor" href="#constant" aria-hidden="true">#</a> Constant</h2><blockquote><p>Expression whose value is known at compile time.</p></blockquote>',14),g={href:"https://gobyexample.com/constants",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Fv)('<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n\n<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;静默&quot;</span>\n\n<span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>greeting<span class="token punctuation">,</span> name<span class="token punctuation">)</span>\n\n\t<span class="token comment">//name = &quot;Q10Viking&quot; 常量不能改变</span>\n\tgreeting <span class="token operator">=</span> <span class="token string">&quot;Hello again&quot;</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>greeting<span class="token punctuation">,</span> name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\nHello 静默\nHello again 静默\n*/</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><img src="/images/golang/image-20230326143256379.png" alt="image-20230326143256379"></p><h3 id="iota" tabindex="-1"><a class="header-anchor" href="#iota" aria-hidden="true">#</a> iota</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Grades <span class="token builtin">int</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">(</span>\n\tA Grades <span class="token operator">=</span> <span class="token boolean">iota</span>\n\tB\n\tC\n\tD\n<span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Direction <span class="token builtin">int</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">(</span>\n\tNorth Direction <span class="token operator">=</span> <span class="token boolean">iota</span>\n\tEast\n\tSouth\n\tWest\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token punctuation">(</span>d Direction<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n\ts <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;North&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;East&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;South&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;West&quot;</span><span class="token punctuation">}</span>\n\t<span class="token keyword">return</span> s<span class="token punctuation">[</span>d<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> For</h2>',7),f={href:"https://gobyexample.com/for",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Fv)('<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\ti <span class="token operator">:=</span> <span class="token number">1</span>\n\t<span class="token keyword">for</span> i <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n\t\ti<span class="token operator">++</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">7</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">for</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Loop&quot;</span><span class="token punctuation">)</span>\n\t\t<span class="token keyword">break</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> If-else</h2>',2),q={href:"https://gobyexample.com/if-else",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Fv)('<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 可以有局部变量</span>\n\t<span class="token keyword">if</span> num <span class="token operator">:=</span> <span class="token number">9</span><span class="token punctuation">;</span> num <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">&quot;is negative&quot;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">&quot;has 1 digit&quot;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">&quot;has multiple digits&quot;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n9 has 1 digit\n*/</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="标准输入" tabindex="-1"><a class="header-anchor" href="#标准输入" aria-hidden="true">#</a> 标准输入</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> scanner\n\n<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n\n<span class="token keyword">func</span> <span class="token function">RunScanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> appleNum <span class="token builtin">int</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Number of Apples?&quot;</span><span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>appleNum<span class="token punctuation">)</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Applies is &quot;</span><span class="token punctuation">,</span> appleNum<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',3),w={},x=(0,a(66262).A)(w,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("div",p,[t,(0,e.Lk)("p",null,[(0,e.Lk)("a",l,[(0,e.eW)("https://gobyexample.com"),(0,e.bF)(a)])])]),o,(0,e.Lk)("p",null,[(0,e.Lk)("a",c,[(0,e.eW)("https://gobyexample.com/hello-world"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",r,[(0,e.eW)("hello-world.go"),(0,e.bF)(a)])]),u,(0,e.Lk)("p",null,[(0,e.Lk)("a",i,[(0,e.eW)("https://gobyexample.com/values"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",b,[(0,e.eW)("values.go"),(0,e.bF)(a)])]),k,(0,e.Lk)("p",null,[(0,e.Lk)("a",m,[(0,e.eW)("https://gobyexample.com/variables"),(0,e.bF)(a)])]),d,(0,e.Lk)("p",null,[(0,e.Lk)("a",g,[(0,e.eW)("https://gobyexample.com/constants"),(0,e.bF)(a)])]),h,(0,e.Lk)("p",null,[(0,e.Lk)("a",f,[(0,e.eW)("https://gobyexample.com/for"),(0,e.bF)(a)])]),v,(0,e.Lk)("p",null,[(0,e.Lk)("a",q,[(0,e.eW)("https://gobyexample.com/if-else"),(0,e.bF)(a)])]),y],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);