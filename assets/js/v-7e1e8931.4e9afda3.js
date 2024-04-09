"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[4119],{46737:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-7e1e8931",path:"/javascript/02%20%E5%87%BD%E6%95%B0.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/javascript/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"1 函数定义",slug:"_1-函数定义",children:[{level:3,title:"1.1 function 函数名",slug:"_1-1-function-函数名",children:[]},{level:3,title:"1.2 箭头函数",slug:"_1-2-箭头函数",children:[]},{level:3,title:"1.3 匿名函数（函数表达式）",slug:"_1-3-匿名函数-函数表达式",children:[]},{level:3,title:"1.4 立即执行函数",slug:"_1-4-立即执行函数",children:[]}]},{level:2,title:"2 函数参数",slug:"_2-函数参数",children:[{level:3,title:"2.1 函数内置对象arguments",slug:"_2-1-函数内置对象arguments",children:[]},{level:3,title:"2.2 函数名.length形参个数",slug:"_2-2-函数名-length形参个数",children:[]},{level:3,title:"2.3 函数名.name函数的名称",slug:"_2-3-函数名-name函数的名称",children:[]},{level:3,title:"2.3 默认参数",slug:"_2-3-默认参数",children:[]},{level:3,title:"2.4 剩余运算符",slug:"_2-4-剩余运算符",children:[]}]},{level:2,title:"3 改变函数this指向",slug:"_3-改变函数this指向",children:[{level:3,title:"3.1 call,apply 都可以改变this指向",slug:"_3-1-call-apply-都可以改变this指向",children:[]},{level:3,title:"3.2 bind 改变函数this指向，但不会执行",slug:"_3-2-bind-改变函数this指向-但不会执行",children:[]}]},{level:2,title:"4 高阶函数",slug:"_4-高阶函数",children:[{level:3,title:"4.1 函数的参数为函数",slug:"_4-1-函数的参数为函数",children:[]},{level:3,title:"4.2 返回值是函数",slug:"_4-2-返回值是函数",children:[]}]}],filePathRelative:"javascript/02 函数.md"}},27753:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(20641).Fv)('<h2 id="_1-函数定义" tabindex="-1"><a class="header-anchor" href="#_1-函数定义" aria-hidden="true">#</a> 1 函数定义</h2><h3 id="_1-1-function-函数名" tabindex="-1"><a class="header-anchor" href="#_1-1-function-函数名" aria-hidden="true">#</a> 1.1 function 函数名</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//...}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_1-2-箭头函数" tabindex="-1"><a class="header-anchor" href="#_1-2-箭头函数" aria-hidden="true">#</a> 1.2 箭头函数</h3><ol><li>箭头函数没有this</li><li><strong>箭头函数外层代码的this</strong></li></ol><h4 id="_1-2-1-function保留this" tabindex="-1"><a class="header-anchor" href="#_1-2-1-function保留this" aria-hidden="true">#</a> 1.2.1 function保留this</h4><h5 id="_1-通过bind方法" tabindex="-1"><a class="header-anchor" href="#_1-通过bind方法" aria-hidden="true">#</a> 1. 通过bind方法</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Q10Viking&quot;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 需要改变this指向</span>\n        <span class="token comment">// 异步代码</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\np<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h5 id="_2-通过设置其他的参数that保留" tabindex="-1"><a class="header-anchor" href="#_2-通过设置其他的参数that保留" aria-hidden="true">#</a> 2 通过设置其他的参数that保留</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Q10Viking&quot;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 需要改变this指向</span>\n        <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token comment">// 异步代码</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\np<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="_1-2-2-箭头函数this为外层this" tabindex="-1"><a class="header-anchor" href="#_1-2-2-箭头函数this为外层this" aria-hidden="true">#</a> 1.2.2 箭头函数this为外层this</h4><ol><li>对于有异步代码要处理this，箭头函数非常方便</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Q10Viking&quot;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 箭头函数的this为外层的this,即p实例</span>\n        <span class="token comment">// 异步代码</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\np<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_1-3-匿名函数-函数表达式" tabindex="-1"><a class="header-anchor" href="#_1-3-匿名函数-函数表达式" aria-hidden="true">#</a> 1.3 匿名函数（函数表达式）</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 在nodejs中vm用于执行代码生成这样一个函数</span>\n<span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-4-立即执行函数" tabindex="-1"><a class="header-anchor" href="#_1-4-立即执行函数" aria-hidden="true">#</a> 1.4 立即执行函数</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-函数参数" tabindex="-1"><a class="header-anchor" href="#_2-函数参数" aria-hidden="true">#</a> 2 函数参数</h2><h3 id="_2-1-函数内置对象arguments" tabindex="-1"><a class="header-anchor" href="#_2-1-函数内置对象arguments" aria-hidden="true">#</a> 2.1 函数内置对象arguments</h3><p>接收所有的实参</p><h4 id="_2-1-1-属性" tabindex="-1"><a class="header-anchor" href="#_2-1-1-属性" aria-hidden="true">#</a> 2.1.1 属性</h4><h5 id="_1-length实参个数" tabindex="-1"><a class="header-anchor" href="#_1-length实参个数" aria-hidden="true">#</a> 1 length实参个数</h5><h5 id="_2-callee当前函数" tabindex="-1"><a class="header-anchor" href="#_2-callee当前函数" aria-hidden="true">#</a> 2 callee当前函数</h5><p>整个函数，而不是一个函数名</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> arguments<span class="token punctuation">.</span>callee <span class="token comment">// function</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="_2-1-2-数组使用arguments" tabindex="-1"><a class="header-anchor" href="#_2-1-2-数组使用arguments" aria-hidden="true">#</a> 2.1.2 数组使用arguments[]</h4><p>通过遍历arguments能够获取到实参</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-2-函数名-length形参个数" tabindex="-1"><a class="header-anchor" href="#_2-2-函数名-length形参个数" aria-hidden="true">#</a> 2.2 函数名.length形参个数</h3><p>表示函数形参个数</p><h3 id="_2-3-函数名-name函数的名称" tabindex="-1"><a class="header-anchor" href="#_2-3-函数名-name函数的名称" aria-hidden="true">#</a> 2.3 函数名.name函数的名称</h3><h3 id="_2-3-默认参数" tabindex="-1"><a class="header-anchor" href="#_2-3-默认参数" aria-hidden="true">#</a> 2.3 默认参数</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;Q10Viking&quot;</span><span class="token punctuation">,</span>school<span class="token operator">=</span><span class="token string">&quot;CAU&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-4-剩余运算符" tabindex="-1"><a class="header-anchor" href="#_2-4-剩余运算符" aria-hidden="true">#</a> 2.4 剩余运算符</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">param<span class="token punctuation">,</span> <span class="token operator">...</span>num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 1 [2,3]</span>\n<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_3-改变函数this指向" tabindex="-1"><a class="header-anchor" href="#_3-改变函数this指向" aria-hidden="true">#</a> 3 改变函数this指向</h2><h3 id="_3-1-call-apply-都可以改变this指向" tabindex="-1"><a class="header-anchor" href="#_3-1-call-apply-都可以改变this指向" aria-hidden="true">#</a> 3.1 call,apply 都可以改变this指向</h3><ol><li><p>call传递数字逗号分割</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">functionName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>arges<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>apply传递数组</p></li></ol><h3 id="_3-2-bind-改变函数this指向-但不会执行" tabindex="-1"><a class="header-anchor" href="#_3-2-bind-改变函数this指向-但不会执行" aria-hidden="true">#</a> 3.2 bind 改变函数this指向，但不会执行</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> newFn <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;input[type=button]&quot;</span><span class="token punctuation">)</span>\nbtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// bind方法</span>\n    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// setInterval默认this为window</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li><p>用that保存this</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;input[type=button]&quot;</span><span class="token punctuation">)</span>\nbtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// setInterval默认this为window</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>箭头函数的this与所处的代码有关</p></li></ol><h2 id="_4-高阶函数" tabindex="-1"><a class="header-anchor" href="#_4-高阶函数" aria-hidden="true">#</a> 4 高阶函数</h2><h3 id="_4-1-函数的参数为函数" tabindex="-1"><a class="header-anchor" href="#_4-1-函数的参数为函数" aria-hidden="true">#</a> 4.1 函数的参数为函数</h3><ol><li>callback回调函数</li></ol><h3 id="_4-2-返回值是函数" tabindex="-1"><a class="header-anchor" href="#_4-2-返回值是函数" aria-hidden="true">#</a> 4.2 返回值是函数</h3><ol><li>闭包</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token parameter">variable</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>variable<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',48),p={},e=(0,a(66262).A)(p,[["render",function(n,s){return t}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);