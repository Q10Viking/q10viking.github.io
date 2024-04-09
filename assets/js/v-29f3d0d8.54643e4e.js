"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[49366],{12240:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-29f3d0d8",path:"/golang/09%20%E6%95%B0%E7%BB%84.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/golang/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"声明与初始化",slug:"声明与初始化",children:[{level:3,title:"初始化",slug:"初始化",children:[]}]},{level:2,title:"数组类型",slug:"数组类型",children:[]},{level:2,title:"遍历数组",slug:"遍历数组",children:[]},{level:2,title:"数组作为函数参数",slug:"数组作为函数参数",children:[]}],filePathRelative:"golang/09 数组.md"}},2204:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(20641).Fv)('<h2 id="声明与初始化" tabindex="-1"><a class="header-anchor" href="#声明与初始化" aria-hidden="true">#</a> 声明与初始化</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">declareArray1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> a1 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>\n\t<span class="token keyword">var</span> a2 <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span> <span class="token comment">// [0 0 0 0 0]</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span> <span class="token comment">// [  ]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><blockquote><p>...for size in array iteral Infers size from number of initializers</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">declareArray2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\ta1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>\n\t<span class="token comment">// 如果将元素个数指定为特殊符号...，则表示通过初始化时的给定的值个数来推断数组长度</span>\n\ta2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>\n\t<span class="token comment">// 如果声明数组时，只想给其中某几个元素初始化赋值，则使用索引号</span>\n\ta3 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">}</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span> <span class="token comment">// [1 2 3]</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span> <span class="token comment">// [1 2 3 4 5]</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a3<span class="token punctuation">)</span> <span class="token comment">// [1 0 0 0 0 0 0 7]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="数组类型" tabindex="-1"><a class="header-anchor" href="#数组类型" aria-hidden="true">#</a> 数组类型</h2><p>数组的数据类型是两部分组成的[n]TYPE，这个整体才是数组的数据类型</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">declareArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> <span class="token punctuation">(</span>\n\t\ta <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>\n\t\tb <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>\n\t<span class="token punctuation">)</span>\n\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [3]int</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [5]int</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="遍历数组" tabindex="-1"><a class="header-anchor" href="#遍历数组" aria-hidden="true">#</a> 遍历数组</h2><p>range关键字可以对array进行迭代，每次返回一个index和对应的元素值。可以将range的迭代结合for循环对array进行遍历</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// 遍历数组</span>\n<span class="token keyword">func</span> <span class="token function">iterateArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\ta <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>\n\t<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>\n\t\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="数组作为函数参数" tabindex="-1"><a class="header-anchor" href="#数组作为函数参数" aria-hidden="true">#</a> 数组作为函数参数</h2><p>Go中的传值方式是按值传递，这意味着给变量赋值、给函数传参时，都是直接拷贝一个副本然后将副本赋值给对方的。这样的拷贝方式意味着：</p><ul><li>如果数据结构体积庞大，则要完整拷贝一个数据结构副本时效率会很低</li><li>函数内部修改数据结构时，只能在函数内部生效，函数一退出就失效了，因为它修改的是副本对象</li></ul>',14),t={},e=(0,a(66262).A)(t,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);