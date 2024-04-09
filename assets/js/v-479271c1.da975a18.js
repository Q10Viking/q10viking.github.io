"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[80994],{33426:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-479271c1",path:"/minifrontendproject/00%20%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E6%BC%94%E8%BF%9B.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/minifrontendproject/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"前端工程化演进思想",slug:"前端工程化演进思想",children:[]},{level:2,title:"阶段1 html css javascript",slug:"阶段1-html-css-javascript",children:[]},{level:2,title:"阶段2 html scss typescript",slug:"阶段2-html-scss-typescript",children:[]},{level:2,title:"阶段3 使用webpack管理项目",slug:"阶段3-使用webpack管理项目",children:[]},{level:2,title:"阶段4 webpack使用流行的前端框架vue",slug:"阶段4-webpack使用流行的前端框架vue",children:[{level:3,title:"安装vue",slug:"安装vue",children:[]},{level:3,title:"配置⭐⭐⭐",slug:"配置⭐⭐⭐",children:[]},{level:3,title:"使用vue",slug:"使用vue",children:[]}]},{level:2,title:"阶段5 SFC vue的特定的文件格式⭐⭐⭐",slug:"阶段5-sfc-vue的特定的文件格式⭐⭐⭐",children:[{level:3,title:"配置webpack工程",slug:"配置webpack工程",children:[]},{level:3,title:"特别注意@别名配置",slug:"特别注意-别名配置",children:[]},{level:3,title:"最终项目结构",slug:"最终项目结构",children:[]},{level:3,title:"常见问题",slug:"常见问题",children:[]},{level:3,title:"参考",slug:"参考",children:[]}]},{level:2,title:"阶段6  使用vite",slug:"阶段6-使用vite",children:[{level:3,title:"Vite中使用Vue3+TS注意事项 ⭐",slug:"vite中使用vue3-ts注意事项-⭐",children:[]},{level:3,title:"TODO  vite后端接口配置",slug:"todo-vite后端接口配置",children:[]}]},{level:2,title:"参考",slug:"参考-1",children:[]}],filePathRelative:"minifrontendproject/00 前端工程化演进.md"}},59085:(n,s,a)=>{a.r(s),a.d(s,{default:()=>ln});var e=a(20641);const t=(0,e.Fv)('<h2 id="前端工程化演进思想" tabindex="-1"><a class="header-anchor" href="#前端工程化演进思想" aria-hidden="true">#</a> 前端工程化演进思想</h2><p>下面将用开发一个Todo List App来说明前端工程的演化，应用程序演化过程为：</p><ol><li>最原始的html css javascript</li><li>然后到html scss typescript</li><li>webpack工程化管理html scss typescript</li><li>引入现在流行的第三方前端框架vue.js</li><li>使用<code>.vue</code>单文件形式管理项目文件</li><li>使用现在vue推荐的CLI工具vite</li></ol>',3),p=(0,e.Lk)("h2",{id:"阶段1-html-css-javascript",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#阶段1-html-css-javascript","aria-hidden":"true"},"#"),(0,e.eW)(" 阶段1 html css javascript")],-1),o={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/28%20front%20end%20project%20change/01%20step%20one",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Lk)("p",null,"最开始的demo都是使用html+css+javascript来进行开发的。这也是最基础的html css javascript等知识用起来，来开发web应用程序",-1),l=(0,e.Lk)("p",null,[(0,e.Lk)("img",{src:"/images/minifrontendproject/image-20220723025105623.png",alt:"image-20220723025105623"})],-1),c=(0,e.Lk)("h2",{id:"阶段2-html-scss-typescript",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#阶段2-html-scss-typescript","aria-hidden":"true"},"#"),(0,e.eW)(" 阶段2 html scss typescript")],-1),i={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/28%20front%20end%20project%20change/02%20step%20two",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Lk)("ol",null,[(0,e.Lk)("li",null,"因为scss/sass的出现使得css在编码上更加的语义化和结构化，在前端开发样式这块引入了scss"),(0,e.Lk)("li",null,"通用的因为javascript是弱类型的语言，当项目变得很大，很多人参与的时候，为了以后的维护，引入了typescript来开发")],-1),k=(0,e.Lk)("p",null,"但是浏览器只识别html css javascript。所以用scss和typescript编写的代码需要编译成css和javascript",-1),d=(0,e.Lk)("blockquote",null,[(0,e.Lk)("p",null,"将会用到下面这两个工具")],-1),b=(0,e.Lk)("li",null,[(0,e.eW)("使用tsc的工具初始化项目，具体参考[tsc管理ts文件](https://q10viking.github.io/typescript/04 tsc管理ts文件.html#单个文件),生成"),(0,e.Lk)("code",null,"tsconfig.json"),(0,e.eW)("文件")],-1),m={href:"https://q10viking.github.io/css/11%20Sass.html",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Fv)('<hr><p><img src="/images/minifrontendproject/image-20220723035301357.png" alt="image-20220723035301357"></p><p>开发完应用程序后，分别用工具tsc编译typescript编写的<code>.ts</code>文件和sass工具编译scss编写的<code>.scss文件</code>，统一输出到<code>dist</code>文件下</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 一次性编译所有.ts文件</span>\ntsc\n<span class="token comment"># Compile Sass to CSS </span>\nsass style.scss dist/style.css\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>编译完之后项目，在dist文件夹下分别生成了<code>css</code>,<code>js</code>文件</p><p><img src="/images/minifrontendproject/image-20220723035653774.png" alt="image-20220723035653774"></p><h2 id="阶段3-使用webpack管理项目" tabindex="-1"><a class="header-anchor" href="#阶段3-使用webpack管理项目" aria-hidden="true">#</a> 阶段3 使用webpack管理项目</h2>',7),h={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/28%20front%20end%20project%20change/03%20step%20three",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Lk)("code",null,"sass-load",-1),f=(0,e.Lk)("code",null,"ts-loader",-1),y=(0,e.Lk)("strong",null,"ToDo List APP",-1),L={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://q10viking.github.io/minifrontendproject/00%20ts+sass%20demo.html",target:"_blank",rel:"noopener noreferrer"},x=(0,e.Fv)('<p><img src="/images/minifrontendproject/image-20220723044648293.png" alt="image-20220723044648293"></p><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td>scss</td><td>存放scss的变量和mixin</td></tr><tr><td>ts</td><td>存放公共的ts文件</td></tr><tr><td>src</td><td>app.html,app.scss,app.ts文件就是应用</td></tr></tbody></table><p>当运行配置配置的命令<code>npm run build</code>后就会生成相关的<code>html,js,css</code>文件,这些文件就是最终浏览器看到的。</p><p><img src="/images/minifrontendproject/image-20220723044934437.png" alt="image-20220723044934437"></p><h2 id="阶段4-webpack使用流行的前端框架vue" tabindex="-1"><a class="header-anchor" href="#阶段4-webpack使用流行的前端框架vue" aria-hidden="true">#</a> 阶段4 webpack使用流行的前端框架vue</h2>',5),q={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/28%20front%20end%20project%20change/04-1%20step%20four",target:"_blank",rel:"noopener noreferrer"},w=(0,e.Lk)("div",{class:"custom-container tip"},[(0,e.Lk)("p",{class:"custom-container-title"},"TIP"),(0,e.Lk)("p",null,"目前前端框架中流行的有Vue,React等。而Vue现在野心越来越大，它的生态圈越来越庞大。它不仅仅只是一个vue.js了。它想做的想改变前端开发的方式。vuecli,vite的出现，可以看出它想工程化。而这也是我这次写这篇文章的初衷。跟随这vue的生态知识。让自己从简单的html css javascript逐渐过渡到前端工程化。")],-1),W=(0,e.Lk)("blockquote",null,[(0,e.Lk)("p",null,"但是这阶段4，我们只是使用vue框架来重构我们的TodoList App项目。在这里使用vue Optiion API的语法")],-1),F={href:"https://v3.cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://v2.vuejs.org/v2/guide/installation.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://vuejs.org/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://v2.vuejs.org/v2/guide/installation.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://vuejs.org/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},V=(0,e.Fv)('<h3 id="安装vue" tabindex="-1"><a class="header-anchor" href="#安装vue" aria-hidden="true">#</a> 安装vue</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 目前最新的版本 &quot;vue&quot;: &quot;^3.2.37&quot;</span>\n<span class="token function">npm</span> <span class="token function">install</span> vue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="配置⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#配置⭐⭐⭐" aria-hidden="true">#</a> 配置⭐⭐⭐</h3><p>如果不配置会出现</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span>Vue warn<span class="token punctuation">]</span><span class="token operator">:</span> Component provided template option but runtime compilation is not supported <span class="token keyword">in</span> <span class="token keyword">this</span> build <span class="token keyword">of</span> Vue<span class="token punctuation">.</span> Configure your bundler to alias <span class="token string">&quot;vue&quot;</span> to <span class="token string">&quot;vue/dist/vue.esm-bundler.js&quot;</span><span class="token punctuation">.</span> \n  at <span class="token operator">&lt;</span>App<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',5),E={href:"https://v3.cn.vuejs.org/guide/installation.html#%E4%BD%BF%E7%94%A8%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7",target:"_blank",rel:"noopener noreferrer"},A=(0,e.Fv)('<blockquote><p><code>vue.esm-bundler.js</code> 包含运行时编译器。如果你使用了一个构建工具，但仍然想要运行时的模板编译 (例如，DOM 内 模板或通过内联 JavaScript 字符串的模板)，请使用这个文件。你需要配置你的构建工具，将 vue 设置为这个文件</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// 在webpack.config.js配置</span>\nresolve<span class="token operator">:</span> <span class="token punctuation">{</span>\n    extensions<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;.tsx&#39;<span class="token punctuation">,</span> &#39;.ts&#39;<span class="token punctuation">,</span> &#39;.js&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    alias<span class="token operator">:</span> <span class="token punctuation">{</span>\n      vue<span class="token operator">:</span> &#39;vue/dist/vue.esm-bundler.js&#39;<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="使用vue" tabindex="-1"><a class="header-anchor" href="#使用vue" aria-hidden="true">#</a> 使用vue</h3><ol><li>vue是基于数据驱动视图的，所以DOM元素的增删可以通过数据在视图层（html）使用v-for，v-if驱动。而不像传统的获取DOM元素进行增删</li></ol><p>项目结构</p><p><img src="/images/minifrontendproject/image-20220723190633377.png" alt="image-20220723190633377"></p><h2 id="阶段5-sfc-vue的特定的文件格式⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#阶段5-sfc-vue的特定的文件格式⭐⭐⭐" aria-hidden="true">#</a> 阶段5 SFC vue的特定的文件格式⭐⭐⭐</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>SFC(Single File Component),也就是在使用vue开发中，常见的<code>.vue</code>文件，它的好处是能够将组件封装到一个文件，语义清晰。比如在处理css编写的时候更加的方便</p></div>',8),D={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/28%20front%20end%20project%20change/05%20step%20five",target:"_blank",rel:"noopener noreferrer"},I=(0,e.Lk)("h3",{id:"配置webpack工程",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#配置webpack工程","aria-hidden":"true"},"#"),(0,e.eW)(" 配置webpack工程")],-1),M=(0,e.Lk)("code",null,".vue",-1),B={href:"https://github.com/vuejs/core/tree/main/packages/compiler-sfc",target:"_blank",rel:"noopener noreferrer"},O=(0,e.Lk)("li",null,[(0,e.Lk)("code",null,"vue-loader"),(0,e.eW)("是在webpack工程下，加载"),(0,e.Lk)("code",null,".vue"),(0,e.eW)("文件")],-1),P=(0,e.Fv)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># vue3中@vue/compiler-sfc替换了vue2的vue-template-compiler</span>\n<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vue-loader  @vue/compiler-sfc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',1),Q={href:"https://vue-loader.vuejs.org/guide/#manual-setup",target:"_blank",rel:"noopener noreferrer"},R=(0,e.Fv)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> VueLoaderPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token comment">// ... other rules</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.tsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n                <span class="token comment">//use: &#39;ts-loader&#39;, </span>\n                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    <span class="token literal-property property">appendTsSuffixTo</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>     <span class="token comment">// 添加这行,支持在vue文件中的script lang=&quot;ts&quot;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.esm-bundler.js&#39;</span><span class="token punctuation">,</span>\n            <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// 解决在ts文件中import App from &#39;@/App.vue&#39;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// make sure to include the plugin!</span>\n        <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><blockquote><p>创建vue-shim.d.ts 然ts代码知道导入App.vue是有模块的</p></blockquote><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.vue&#39;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n    <span class="token keyword">const</span> component<span class="token operator">:</span> DefineComponent<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>\n    <span class="token keyword">export</span> <span class="token keyword">default</span> component\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>tsconfig.json配置</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/&quot;</span><span class="token punctuation">,</span>\n      <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>\n      <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>\n      <span class="token string-property property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// 新添加</span>\n      <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>\n      <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>\n      <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>        <span class="token comment">// import TodoItem from &#39;@/type/TodoItem&#39;</span>\n          <span class="token string">&quot;src/*&quot;</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;src/**/*.tsx&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;src/**/*.vue&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;node_modules&quot;</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="特别注意-别名配置" tabindex="-1"><a class="header-anchor" href="#特别注意-别名配置" aria-hidden="true">#</a> 特别注意@别名配置</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li><code>.ts</code>文件的别名 在<code>tsconfig.json</code>文件中配置</li><li><code>.vue</code>文件的别名 在<code>webpack.config.js</code>文件中配置</li></ol></div><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;@/App.vue&#39;</span> <span class="token comment">// 导入组件    </span>\n<span class="token keyword">import</span> TodoItem <span class="token keyword">from</span> <span class="token string">&#39;@/types/TodoItems&#39;</span>  <span class="token comment">// 导入TodoItems.ts文件</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="最终项目结构" tabindex="-1"><a class="header-anchor" href="#最终项目结构" aria-hidden="true">#</a> 最终项目结构</h3>',9),z={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/28%20front%20end%20project%20change/05%20step%20five",target:"_blank",rel:"noopener noreferrer"},J=(0,e.Fv)('<p><img src="/images/minifrontendproject/image-20220724005714146.png" alt="image-20220724005714146"></p><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><ol><li>Vetur 2307</li></ol><p><img src="/images/minifrontendproject/image-20220723230850005.png" alt="image-20220723230850005"></p><p>解决方案： 在vscode打开该项目放于更目录</p><ol start="2"><li><p>TS7006: Parameter &#39;n&#39; implicitly has an &#39;any&#39; type</p><p>https://github.com/vuejs/vue-loader/issues/1915#issuecomment-1003536795</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#解决方案 安装16.5版本</span>\n<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vue-loader@16.5\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>',8),$={href:"https://dev.to/vannsl/webpacker-vue-3-and-typescript-1i99",target:"_blank",rel:"noopener noreferrer"},N=(0,e.Lk)("h2",{id:"阶段6-使用vite",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#阶段6-使用vite","aria-hidden":"true"},"#"),(0,e.eW)(" 阶段6 使用vite")],-1),U=(0,e.Lk)("div",{class:"custom-container tip"},[(0,e.Lk)("p",{class:"custom-container-title"},"TIP"),(0,e.Lk)("p",null,"如果自己不想自己手动配置webpack,vue官方提供了配置好的脚手架，用于快速开发,推荐使用vite")],-1),G={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/28%20front%20end%20project%20change/06%20step%20six/todolist-app",target:"_blank",rel:"noopener noreferrer"},K={href:"https://vitejs.dev/guide/features.html#css",target:"_blank",rel:"noopener noreferrer"},X=(0,e.Fv)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># .scss and .sass</span>\n<span class="token function">npm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> sass\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="vite中使用vue3-ts注意事项-⭐" tabindex="-1"><a class="header-anchor" href="#vite中使用vue3-ts注意事项-⭐" aria-hidden="true">#</a> Vite中使用Vue3+TS注意事项 ⭐</h3><h4 id="definecomponent" tabindex="-1"><a class="header-anchor" href="#definecomponent" aria-hidden="true">#</a> defineComponent</h4>',3),H={class:"custom-container tip"},Y=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),Z={href:"https://v3.vuejs.org/guide/typescript-support.html#defining-vue-components",target:"_blank",rel:"noopener noreferrer"},nn=(0,e.Lk)("code",null,"defineComponent()",-1),sn=(0,e.Fv)('<p>如果是这样定义</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\t<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">todoItems</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>会报错</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>error TS2339: Property &#39;todoItems&#39; does not exist on type\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用defineComponent，才会进行类型推断</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">todoItems</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="todo-vite后端接口配置" tabindex="-1"><a class="header-anchor" href="#todo-vite后端接口配置" aria-hidden="true">#</a> TODO vite后端接口配置</h3>',7),an={href:"https://www.csdn.net/tags/MtTaEgysMDM0MTE2LWJsb2cO0O0O.html",target:"_blank",rel:"noopener noreferrer"},en=(0,e.Lk)("h2",{id:"参考-1",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#参考-1","aria-hidden":"true"},"#"),(0,e.eW)(" 参考")],-1),tn={href:"https://codesandbox.io/s/o29j95wx9?file=/index.html",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://dev.to/vannsl/webpacker-vue-3-and-typescript-1i99",target:"_blank",rel:"noopener noreferrer"},on={href:"https://github.com/bezkoder/vue-3-typescript-example",target:"_blank",rel:"noopener noreferrer"},rn={},ln=(0,a(66262).A)(rn,[["render",function(n,s){const a=(0,e.g2)("common-progresson-snippet"),rn=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[t,(0,e.bF)(a,{src:"https://q10viking.github.io/Mini-FrontEnd-project/28%20front%20end%20project%20change/01%20step%20one/"}),p,(0,e.Lk)("p",null,[(0,e.Lk)("a",o,[(0,e.eW)("Source Code"),(0,e.bF)(rn)])]),r,l,c,(0,e.Lk)("p",null,[(0,e.Lk)("a",i,[(0,e.eW)("Source Code"),(0,e.bF)(rn)])]),u,k,d,(0,e.Lk)("ol",null,[b,(0,e.Lk)("li",null,[(0,e.eW)("使用sass工具，具体参考"),(0,e.Lk)("a",m,[(0,e.eW)("Sass"),(0,e.bF)(rn)])])]),g,(0,e.Lk)("p",null,[(0,e.Lk)("a",h,[(0,e.eW)("Source Code"),(0,e.bF)(rn)])]),(0,e.Lk)("p",null,[(0,e.eW)("在阶段2中，开发完项目，都需要手动编译scss文件，ts文件。而webpack的出现,减轻了我们这些工作。它提供了插件"),v,(0,e.eW)(","),f,(0,e.eW)("等。通过一行命令就能编译项目中所有的代码。当然了webpack还提供了许多强大的功能。对于这篇文章我们关注的是"),y,(0,e.eW)("是如何逐渐工程化的。关于webpack更多的功能，查看"),(0,e.Lk)("a",L,[(0,e.eW)("webpack的官方文档"),(0,e.bF)(rn)])]),(0,e.Lk)("p",null,[(0,e.eW)("项目webpack5工程化具体步骤请参看这篇文章"),(0,e.Lk)("a",j,[(0,e.eW)("WebPack5工程化Typescript + Sass"),(0,e.bF)(rn)])]),x,(0,e.Lk)("p",null,[(0,e.Lk)("a",q,[(0,e.eW)("Source Code"),(0,e.bF)(rn)])]),w,W,(0,e.Lk)("p",null,[(0,e.Lk)("a",F,[(0,e.eW)("vue3 中文官网"),(0,e.bF)(rn)]),(0,e.eW)(" 这个网站目前还是翻译的是"),(0,e.Lk)("a",_,[(0,e.eW)("vue2 ⭐⭐"),(0,e.bF)(rn)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",C,[(0,e.eW)("vue3 英文版 ⭐⭐"),(0,e.bF)(rn)])]),(0,e.Lk)("blockquote",null,[(0,e.Lk)("p",null,[(0,e.eW)("目前学习主要看"),(0,e.Lk)("a",T,[(0,e.eW)("vue2 ⭐⭐"),(0,e.bF)(rn)]),(0,e.eW)(" 和 "),(0,e.Lk)("a",S,[(0,e.eW)("vue3 英文版 ⭐⭐"),(0,e.bF)(rn)])])]),V,(0,e.Lk)("p",null,[(0,e.eW)("参考"),(0,e.Lk)("a",E,[(0,e.eW)("安装 | Vue.js 使用构建工具"),(0,e.bF)(rn)])]),A,(0,e.Lk)("p",null,[(0,e.Lk)("a",D,[(0,e.eW)("Source Code"),(0,e.bF)(rn)])]),I,(0,e.Lk)("ol",null,[(0,e.Lk)("li",null,[M,(0,e.eW)("格式的文件必须要被 "),(0,e.Lk)("a",B,[(0,e.eW)("@vue/compiler-sfc"),(0,e.bF)(rn)]),(0,e.eW)(" 编译成标准的javascript和css,所以要使用单文件组件，需要安装这个")]),O]),P,(0,e.Lk)("blockquote",null,[(0,e.Lk)("p",null,[(0,e.eW)("配置webpack.config.js "),(0,e.Lk)("a",Q,[(0,e.eW)("Getting Started | Vue Loader (vuejs.org)"),(0,e.bF)(rn)])])]),R,(0,e.Lk)("p",null,[(0,e.Lk)("a",z,[(0,e.eW)("Source Code"),(0,e.bF)(rn)])]),J,(0,e.Lk)("p",null,[(0,e.Lk)("a",$,[(0,e.eW)("Webpacker, Vue 3, and TypeScript - DEV Community"),(0,e.bF)(rn)])]),N,U,(0,e.Lk)("p",null,[(0,e.Lk)("a",G,[(0,e.eW)("Source Code"),(0,e.bF)(rn)])]),(0,e.Lk)("p",null,[(0,e.eW)("脚手架在创建过程中没有安装sass,我们自己安装一下"),(0,e.Lk)("a",K,[(0,e.eW)("Features | Vite (vitejs.dev)"),(0,e.bF)(rn)])]),X,(0,e.Lk)("div",H,[Y,(0,e.Lk)("p",null,[(0,e.eW)("To "),(0,e.Lk)("a",Z,[(0,e.eW)("enable TypeScript support"),(0,e.bF)(rn)]),(0,e.eW)(", wrap the component with "),nn,(0,e.eW)(":")])]),sn,(0,e.Lk)("p",null,[(0,e.Lk)("a",an,[(0,e.eW)("(41条消息) vite配置后端接口地址 - CSDN"),(0,e.bF)(rn)])]),en,(0,e.Lk)("p",null,[(0,e.Lk)("a",tn,[(0,e.eW)("Simple Todo App with Vue - CodeSandbox"),(0,e.bF)(rn)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",pn,[(0,e.eW)("Webpacker, Vue 3, and TypeScript - DEV Community"),(0,e.bF)(rn)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",on,[(0,e.eW)("bezkoder/vue-3-typescript-example: Vue 3 Typescript example with Axios: CRUD application with Vue Router (github.com)"),(0,e.bF)(rn)])])],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);