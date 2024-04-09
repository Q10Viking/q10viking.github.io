"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[46064],{3046:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-98d292e8",path:"/webdev/07%20vite%E4%B8%8Ewebpack.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/webdev/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Server Start",slug:"server-start",children:[]}],filePathRelative:"webdev/07 vite与webpack.md"}},40132:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(20641).Fv)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>webpack更多的关注兼容性,</p><p>vite关注浏览器端的开发体验</p></div><h2 id="server-start" tabindex="-1"><a class="header-anchor" href="#server-start" aria-hidden="true">#</a> Server Start</h2><p>webpack构建工具需要很长时间才能启动开发服务器 (启动开发服务器 ---&gt; 把项目跑起来)。webpack支持多种模块化: 你的工程可能不只是跑在浏览器端。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token comment">// 这一段代码最终会到浏览器里去运行</span>\n<span class="token keyword">const</span> lodash <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lodash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// commonjs 规范</span>\n<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span> <span class="token comment">// es6 module</span>\n\n<span class="token comment">// webpack是允许我们这么写的</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>webpack的编译原理, AST 抽象语法分析的工具 分析出你写的这个js文件有哪些导入和导出操作 构建工具是运行在服务端的</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack的一个转换结果</span>\n<span class="token keyword">const</span> lodash <span class="token operator">=</span> <span class="token function">webpack_require</span><span class="token punctuation">(</span><span class="token string">&quot;lodash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">webpack_require</span><span class="token punctuation">(</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>底层工作原理</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">modules</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">webpack_require</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token comment">// 入口是index.js</span>\n    <span class="token comment">// 通过webpack的配置文件得来的: webpack.config.js ./src/index.js</span>\n    modules<span class="token punctuation">[</span>entry<span class="token punctuation">]</span><span class="token punctuation">(</span>webpack_require<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;./src/index.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">webpack_require</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> lodash <span class="token operator">=</span> <span class="token function">webpack_require</span><span class="token punctuation">(</span><span class="token string">&quot;lodash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">webpack_require</span><span class="token punctuation">(</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>因为webpack支持多种模块化, 他一开始必须要统一模块化代码, 所以意味着他需要将所有的依赖全部读一遍,进行编译。然后才启动服务器。</p><p><img src="/images/webdev/image-20220928122207480.png" alt="image-20220928122207480"></p><p>而Vite则是基于es module的直接先启动服务器，然后根据请求按需导入</p><p><img src="/images/webdev/image-20220928122535926.png" alt="image-20220928122535926"></p>',12),e={},t=(0,a(66262).A)(e,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);